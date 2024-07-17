'use client'
import logo from '@/../assets/logos/logo-white-256x256.png'
import { signOut } from '@/app/auth/login/actions'
import useClickOutside from '@/hooks/useClickOutside'
import { cn } from '@/lib/utils'
import type { User } from '@supabase/supabase-js'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { Dumbbell, Gauge, Users } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Button } from './ds'

interface NavBarProps {
	user: User | null
}

export default function NavBar({ user }: NavBarProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [active, setActive] = useState<number | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const [contentRef, { height: heightContent }] = useMeasure()
	const [menuRef, { width: widthContainer }] = useMeasure()
	const [maxWidth, setMaxWidth] = useState(0)

	const { push } = useRouter()

	useClickOutside(containerRef, () => {
		setIsOpen(false)
		setActive(null)
	})

	useEffect(() => {
		if (!widthContainer || maxWidth > 0) return

		setMaxWidth(widthContainer)
	}, [widthContainer, maxWidth])

	return (
		<MotionConfig>
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				className="w-fit absolute bottom-9 right-0 left-0 mx-auto"
			>
				<div className="h-full w-full rounded-xl border border-zinc-950/10 bg-white" ref={containerRef}>
					<div className="overflow-hidden">
						<AnimatePresence initial={false} mode="sync">
							{isOpen ? (
								<motion.div
									key="content"
									initial={{ height: 0 }}
									animate={{ height: heightContent || 0 }}
									exit={{ height: 0 }}
									style={{
										width: maxWidth,
									}}
								>
									<div ref={contentRef} className="p-2">
										<div className={cn('px-2 pt-2 text-sm gap-5 flex flex-col')}>
											<h3>
												Olá, <span className="font-bold">{user?.user_metadata.name}</span>!
											</h3>
											<form>
												<Button className="w-full" type="submit" formAction={signOut}>
													Sair
												</Button>
											</form>
										</div>
									</div>
								</motion.div>
							) : null}
						</AnimatePresence>
					</div>
					<div className="flex space-x-2 p-2" ref={menuRef}>
						<div className="bg-brand relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500">
							<Image alt="logo coach pocket" src={logo} width={24} height={24} />
						</div>
						<Button variant="ghost" tooltip="Dashboard" onClick={() => push('#')}>
							<Gauge className="h-5 w-5" />
						</Button>
						<Button variant="ghost" tooltip="Alunos" onClick={() => push('/dashboard/members')}>
							<Users className="h-5 w-5" />
						</Button>
						<Button variant="ghost" tooltip="Treino">
							<Dumbbell className="h-5 w-5" />
						</Button>
						<Button
							variant="ghost"
							onClick={() => {
								if (!isOpen) setIsOpen(true)
								if (active === 1) {
									setIsOpen(false)
									setActive(null)
									return
								}

								setActive(1)
							}}
						>
							<Image alt="avatar" src={user?.user_metadata.avatar_url} width={24} height={24} />
						</Button>
					</div>
				</div>
			</motion.div>
		</MotionConfig>
	)
}
