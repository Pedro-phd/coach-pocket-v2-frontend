'use client'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar as CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ds'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import type { Modifiers } from 'react-day-picker'

interface Props {
	placeholder?: string
	value: Date | string
	onChange: (
		selected: Date | undefined,
		triggerDate: Date,
		modifiers: Modifiers,
		e: React.MouseEvent | React.KeyboardEvent,
	) => void
	disabled?: boolean
	errorMessage?: string
}

export function DatePicker(props: Props) {
	const { placeholder = 'Selecionar data', onChange, value, errorMessage } = props

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className={cn(
						'h-[36px] justify-between text-left font-normal w-full hover:bg-inherit hover:text-unset',
						!value && 'text-muted-foreground',
						errorMessage && 'border-destructive text-destructive',
					)}
					disabled={props.disabled}
				>
					{value ? format(value, 'dd/MM/yyyy') : <span className="text-zinc-400">{placeholder}</span>}
					<CalendarIcon className="h-4 w-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar locale={ptBR} mode="single" selected={new Date(value)} onSelect={onChange} />
			</PopoverContent>
			{<p className="text-sm text-destructive h-5">{errorMessage}</p>}
		</Popover>
	)
}
