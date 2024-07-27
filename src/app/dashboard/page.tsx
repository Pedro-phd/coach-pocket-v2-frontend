'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ds'
import { DatePicker } from '@/components/ds/date-picket'
import { MembersCountChart } from '@/components/members-count-chart'
import MembersTable from '@/components/members-table'
import { Separator } from '@/components/ui/separator'
import { makeQuery } from '@/lib/make-query'
import { useSuspenseQuery } from '@tanstack/react-query'

export default function DashboardPage() {
	const { data } = useSuspenseQuery(makeQuery({ key: 'members', path: '/members' }))
	return (
		<div className='flex flex-col gap-4 md:gap-6'>
			<div>
				<h1 className="text-zinc-600 font-semibold text-sm">
					Seja bem-vindo
				</h1>
				<h1 className="text-zinc-800 font-semibold text-3xl">
					Pedro
				</h1>
			</div>
			<Separator />
			<div className="lg:grid lg:grid-cols-6 gap-4 flex flex-col-reverse">
				<div className="lg:col-span-5 mb-2 lg:mb-0">
					<MembersTable data={data} />
				</div>
				<div className="flex flex-col items-center gap-2">
					<Card className="w-full">
						<CardHeader>
							<CardTitle>Total de alunos</CardTitle>
						</CardHeader>
						<CardContent>
							<MembersCountChart count={190} />
						</CardContent>
					</Card>
					<Card className="w-full">
						<CardHeader>
							<CardTitle>Aniversariantes</CardTitle>
						</CardHeader>
						<CardContent>Lorem ipsum</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
