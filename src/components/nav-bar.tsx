'use client'
import logo from '@/../assets/logos/logo-white-32x32.png'
import useClickOutside from '@/hooks/useClickOutside'
import { MotionConfig, motion } from 'framer-motion'
import { Dumbbell, Gauge, User } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import type React from 'react'
import { useRef, useState } from 'react'
import useMeasure from 'react-use-measure'

const transition = {
	type: 'ease',
	bounce: 0.4,
	duration: 0.7,
}

function Button({
	children,
	onClick,
	disabled,
	ariaLabel,
}: {
	children: React.ReactNode
	onClick?: () => void
	disabled?: boolean
	ariaLabel?: string
}) {
	return (
		<button
			className="relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
			type="button"
			onClick={onClick}
			disabled={disabled}
			aria-label={ariaLabel}
		>
			{children}
		</button>
	)
}

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)
	const [contentRef, { width, height }] = useMeasure()

	const { push } = useRouter()

	useClickOutside(containerRef, () => {
		setIsOpen(false)
	})

	return (
		<MotionConfig transition={transition}>
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				className="w-fit absolute bottom-9 right-0 left-0 ml-auto mr-auto"
				ref={containerRef}
			>
				<div className="h-full w-full rounded-xl border border-zinc-950/10 bg-white">
					<motion.div initial={false}>
						<div ref={contentRef} className="overflow-hidden p-2">
							<div className="flex space-x-2">
								<button
									className="bg-brand relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500 transition-colors focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
									type="button"
								>
									<Image alt="logo coach pocket" src={logo} width={24} height={24} />
								</button>
								<Button ariaLabel="Dashboard" onClick={() => push('/')}>
									<Gauge className="h-5 w-5" />
								</Button>
								<Button ariaLabel="User members" onClick={() => push('/dashboard/members')}>
									<User className="h-5 w-5" />
								</Button>
								<Button ariaLabel="Workout">
									<Dumbbell className="h-5 w-5" />
								</Button>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</MotionConfig>
	)
}
