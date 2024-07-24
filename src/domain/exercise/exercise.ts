// model Exercise {
//   id          String        @id @default(cuid())
//   coach_id    String
//   title       String
//   description String?
//   content     String?
//   thumbUrl    String?
//   WorkoutItem WorkoutItem[]

//   @@index([coach_id, title])
// }

export interface Exercise {
	id: string
	coach_id: string
	title: string
	description?: string
	content?: string
	thumbUrl?: string
}
