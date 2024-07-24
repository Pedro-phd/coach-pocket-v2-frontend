'use client'

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ds'
import MemberDiet from '@/components/member-diet'
import { MemberHistoryChart } from '@/components/member-history-chart'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { MemberDetails } from '@/domain/member/member'
import formatDate from '@/lib/format-date'
import { makeQuery } from '@/lib/make-query'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Apple, Dumbbell, User } from 'lucide-react'

interface Props {
	params: {
		id: string
	}
}

export default function MemberPage({ params: { id } }: Props) {
	const { data } = useSuspenseQuery(makeQuery({ key: `members-${id}`, path: `/members/${id}` }))
	const memberDetails: MemberDetails = data
	return (
		<Card className="max-w-screen-lg m-auto mt-8">
			<CardHeader>
				<CardTitle className="capitalize flex gap-2 items-center">{memberDetails.name}</CardTitle>
				<Separator />
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<div className="flex gap-8">
					<div className="flex justify-center flex-col border-l-2 border-brand px-2">
						<p className="text-xs font-medium text-gray-500">{memberDetails.email}</p>
						<p className="text-xs font-medium text-gray-500">{formatDate(memberDetails.birth_date)}</p>
					</div>
					<div className="rounded border flex gap-4 px-2 py-1 w-fit">
						<div>
							<p className="text-xs font-medium text-gray-500">Peso atual</p>
							<p className="text-sm font-medium text-gray-950">{memberDetails.weight} kg</p>
						</div>
						<div className="border-l-2 border-border/50" />
						<div>
							<p className="text-xs font-medium text-gray-500">Altura atual</p>
							<p className="text-sm font-medium text-gray-950">{memberDetails.height} cm</p>
						</div>
					</div>
				</div>
				<div className="flex gap-4 w-full">
					<MemberHistoryChart history={memberDetails.memberHistory} />
					<Tabs defaultValue="diet" className="w-[400px]">
						<TabsList>
							<TabsTrigger value="diet">Dieta</TabsTrigger>
							<TabsTrigger value="workout">Treino</TabsTrigger>
						</TabsList>
						<TabsContent value="diet">
							<MemberDiet data={memberDetails.diet[0]} className="w-full" />
						</TabsContent>
						<TabsContent value="workout">Change your password here.</TabsContent>
					</Tabs>
				</div>
			</CardContent>
		</Card>
	)
}
