'use client'

import MembersTable from "@/components/members-table"
import NewMemberCard from "@/components/new-member-card"

export default function MemberPage(){
  return(
    <div className="p-4">
      <div className="grid md:grid-cols-4 gap-4">
        <NewMemberCard className="md:col-start-4"/>
        <MembersTable className="md:col-span-3 md:col-start-1 md:col-end-4"/>
      </div>
    </div>
  )
}