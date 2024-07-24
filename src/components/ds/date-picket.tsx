'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { ptBR } from 'date-fns/locale'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ds'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import type { SelectSingleEventHandler } from 'react-day-picker'

interface Props {
	placeholder?: string
	value: Date | string
	onChange: SelectSingleEventHandler
	disabled?: boolean
}

export function DatePicker(props: Props) {
	const { placeholder = 'Selecionar data', onChange, value } = props

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn('w-[280px] h-[36px] justify-start text-left font-normal', !value && 'text-muted-foreground')}
					disabled={props.disabled}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{value ? format(value, 'PPP') : <span>{placeholder}</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar locale={ptBR} mode="single" selected={new Date(value)} onSelect={onChange} initialFocus />
			</PopoverContent>
		</Popover>
	)
}
