// model Meal {
//   id        String  @id @default(cuid())
//   foodId    String
//   quantity  String
//   period    String
//   isReplace Boolean @default(false)

import type { Food } from '../food/food'

//   food   Food    @relation(fields: [foodId], references: [id])
//   mealId String?
//   Diet   Diet?   @relation(fields: [dietId], references: [id])
//   dietId String?
// }

export interface Meal {
	food: Food
	quantity: string
	period: string
	isReplace: boolean
}
