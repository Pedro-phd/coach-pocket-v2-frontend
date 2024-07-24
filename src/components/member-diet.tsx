import { Card, Checkbox, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ds'
import type { Diet } from '@/domain/diet/diet'
import { useRouter } from 'next/navigation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

interface Props {
	className?: string
	data: Diet
}

export default function MemberDiet(props: Props) {
	const { push } = useRouter()

	function getPeriod(diet: Diet) {
		const periods = new Set()

		diet.meals.forEach(({ period }) => periods.add(period))

		return periods
	}

	const periods: string[] = []
	getPeriod(props.data).forEach((e) => periods.push(e as string))

	return (
		<Card className="w-full">
			<Accordion type="single" collapsible className="bg-white">
				{periods.map((period) => {
					return (
						<AccordionItem value={period} key={period}>
							<AccordionTrigger className="capitalize">{period}</AccordionTrigger>
							<AccordionContent>
								<Table className="w-full">
									<TableHeader>
										<TableRow>
											<TableHead>Comida</TableHead>
											<TableHead>Quantidade</TableHead>
											<TableHead>Período</TableHead>
											<TableHead>Substituição</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{props.data.meals
											.filter((m) => m.period === period)
											.map((m) => {
												return (
													<TableRow key={Math.random()}>
														<TableCell>
															<div className="font-medium capitalize">{m.food.name}</div>
														</TableCell>
														<TableCell>
															<div className="font-medium capitalize">{m.quantity}</div>
														</TableCell>
														<TableCell>
															<div className="font-medium capitalize">{m.period}</div>
														</TableCell>
														<TableCell>
															<div className="font-medium capitalize">
																<Checkbox checked={m.isReplace} />
															</div>
														</TableCell>
													</TableRow>
												)
											})}
									</TableBody>
								</Table>
							</AccordionContent>
						</AccordionItem>
					)
				})}
			</Accordion>
		</Card>
	)
}
