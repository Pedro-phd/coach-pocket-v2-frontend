// model Diet {
//   id       String @id @default(cuid())
//   name     String
//   member   Member @relation(fields: [memberId], references: [id])
//   memberId String
//   meals    Meal[]
// }

import type { Meal } from '../meal/meal'

export interface Diet {
	name: string
	meals: Meal[]
}
