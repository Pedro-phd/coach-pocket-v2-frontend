// model Workout {
//   id        String   @id @default(cuid())
//   coach_id  String   @map("coach_id")
//   memberId  String
//   updatedAt DateTime @default(now()) @map("updated_at")
//   createdAt DateTime @default(now()) @map("created_at")
//   member    Member   @relation(fields: [memberId], references: [id])
// }

import type { Exercise } from '../exercise/exercise'

export interface Workout {
	id: string
	coach_id: string
	updatedAt: Date
	createdAt: Date
}

export interface WorkoutItem {
	id: string
	reps?: string
	weight?: string
	interval?: string
	exercise: Exercise
}
