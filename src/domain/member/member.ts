import type { Diet } from '../diet/diet'
import type { Workout } from '../workout/workout'
import type { CreateMemberDto } from './create-member.dto'

export interface Member extends CreateMemberDto {
	id: string
	updatedAt: Date
}

export interface MemberListing extends Pick<Member, 'id' | 'name' | 'email' | 'updatedAt'> {}

export interface MemberDetails extends Member {
	diet: Diet[]
	workout: Workout
	memberHistory: MemberHistory[]
}

export interface MemberHistory extends Pick<Member, 'height' | 'weight' | 'updatedAt'> {}
