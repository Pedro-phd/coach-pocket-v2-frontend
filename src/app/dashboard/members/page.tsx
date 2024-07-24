'use client'

import MembersTable from '@/components/members-table'
import NewMemberCard from '@/components/new-member-card'
import { makeQuery } from '@/lib/make-query'
import { useSuspenseQuery } from '@tanstack/react-query'

export default function MemberPage() {
	const { data } = useSuspenseQuery(makeQuery({ key: 'members', path: '/members' }))
	return (
		<div className="p-4">
			<div className="grid md:grid-cols-4 gap-4">
				<NewMemberCard />
				<MembersTable data={data} className="md:col-span-3 md:col-start-1 md:col-end-4" />
			</div>
		</div>
	)
}
