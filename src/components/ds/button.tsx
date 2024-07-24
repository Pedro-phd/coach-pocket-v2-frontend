import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

const buttonVariants = cva(
	'inline-flex items-center rounded-md py-1 px-3 text-sm justify-center font-medium disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-zinc-50 border border-zinc-100 text-zinc-950 hover:bg-zinc-100 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-zinc-50 dark:border-zinc-900',
				destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
				outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-zinc-300 dark:text-zinc-950',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-brand underline-offset-4 hover:underline',
				brand: 'bg-brand text-white hover:bg-indigo-500',
			},
			size: {
				default: 'py-1 px-3',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants>,
		React.PropsWithChildren {
	asChild?: boolean
	loading?: boolean
	tooltip?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, children, loading = false, tooltip, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Tooltip>
				<TooltipTrigger asChild>
					<Comp disabled={loading} className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
						{loading && <Loader2 className="mr-2 size-3 animate-spin" />}
						{children}
					</Comp>
				</TooltipTrigger>
				{tooltip && (
					<TooltipContent>
						<p>{tooltip}</p>
					</TooltipContent>
				)}
			</Tooltip>
		)
	},
)
Button.displayName = 'Button'

export { Button, buttonVariants }
