import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ds'
import type { Member, MemberListing } from '@/domain/member/member'
import formatDate from '@/lib/format-date'
import { Link, PlusCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Props {
	className?: string
	data: MemberListing[]
}

export default function MembersTable(props: Props) {
	const { push } = useRouter()

	return (
		<Card className={props.className}>
			<CardHeader className="flex justify-between flex-row">
				<div>
					<CardTitle>Alunos</CardTitle>
					<CardDescription>Lista de alunos cadastrados.</CardDescription>
				</div>
				<Button variant="outline" className="gap-1">
					<PlusCircle strokeWidth={1} />
					<span className="hidden lg:flex">Adicionar aluno</span>
				</Button>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Nome</TableHead>
							<TableHead className="hidden sm:table-cell">Ultima atualização</TableHead>
							<TableHead className="hidden md:table-cell">Ficha</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{props.data.map((m) => {
							return (
								<TableRow key={m.id}>
									<TableCell>
										<div className="font-medium">{m.name}</div>
										<div className="hidden text-sm text-muted-foreground md:inline">{m.email}</div>
									</TableCell>
									<TableCell className="hidden sm:table-cell">{formatDate(m.updatedAt)}</TableCell>

									<TableCell>
										<Button onClick={() => push(`/dashboard/members/${m.id}`)} size="default" className="text-brand">
											<Link className="size-4" />
										</Button>
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
