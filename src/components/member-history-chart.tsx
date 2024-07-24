'use client'

import { ptBR } from 'date-fns/locale'
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ds'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import type { MemberHistory } from '@/domain/member/member'
import { format } from 'date-fns'

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: 'hsl(var(--chart-1))',
	},
} satisfies ChartConfig

interface Props {
	history: MemberHistory[]
}

export function MemberHistoryChart(props: Props) {
	const data = props.history
		.slice(1)
		.slice(-5)
		.map((d) => {
			return { month: format(d.updatedAt, 'dd/MMMM', { locale: ptBR }), peso: d.weight }
		})

	return (
		<Card className="max-w-96 w-full">
			<CardHeader>
				<CardTitle>Peso</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={data}
						margin={{
							top: 20,
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid />
						<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
						<ChartTooltip cursor={true} content={<ChartTooltipContent indicator="line" />} />
						<Line
							dataKey="peso"
							type="natural"
							stroke="var(--color-desktop)"
							strokeWidth={2}
							dot={{
								fill: 'var(--color-desktop)',
							}}
							activeDot={{
								r: 6,
							}}
						>
							<LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
						</Line>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
