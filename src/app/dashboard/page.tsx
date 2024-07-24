'use client'
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ds'
import MembersTable from '@/components/members-table'
import { Plus, PlusCircle } from 'lucide-react'

export default function DashboardPage() {
	const data = [
		{
			id: '1',
			name: 'teste',
			email: 'teste@teste.com',
			updatedAt: new Date(),
		},
		{
			id: '2',
			name: 'teste',
			email: 'teste@teste.com',
			updatedAt: new Date(),
		},
		{
			id: '3',
			name: 'teste',
			email: 'teste@teste.com',
			updatedAt: new Date(),
		},
		{
			id: '4',
			name: 'teste',
			email: 'teste@teste.com',
			updatedAt: new Date(),
		},
		{
			id: '5',
			name: 'teste',
			email: 'teste@teste.com',
			updatedAt: new Date(),
		},
		{
			id: '6',
			name: 'teste',
			email: 'teste@teste.com',
			updatedAt: new Date(),
		},
		{
			id: '7',
			name: 'teste',
			email: 'teste@teste.com',
			updatedAt: new Date(),
		},
	]
	return (
		<>
			<div className="mb-5">
				<h1 className="text-[#374151] font-semibold text-3xl">
					Olá <span className="text-brand">Pedro</span>, seja bem vindo!
				</h1>
			</div>
			<div className="lg:grid lg:grid-cols-6 gap-4">
				<div className="flex flex-col items-center gap-2">
					<Card className="w-full">
						<CardHeader>
							<CardTitle>Total de alunos</CardTitle>
						</CardHeader>
						<CardContent>190 alunos</CardContent>
					</Card>
					<Card className="w-full">
						<CardHeader>
							<CardTitle>Aniversariantes</CardTitle>
						</CardHeader>
						<CardContent>Lorem ipsum</CardContent>
					</Card>
				</div>
				<div className="lg:col-span-5 mt-2 lg:mt-0">
					<MembersTable data={data} />
				</div>
			</div>
		</>
	)
}
