'use client'
import logo from '@/../assets/logos/logo-white-32x32.png'
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

const transition = {
	type: 'spring',
	bounce: 0.1,
	duration: 0.25,
}
// const transition = {
// 	type: 'ease',
// 	bounce: 0.4,
// 	duration: 0.7,
// }

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
		<MotionConfig transition={transition}>
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				className="w-fit absolute bottom-9 right-0 left-0 ml-auto mr-auto"
				ref={containerRef}
			>
				<div className="h-full w-full rounded-xl border border-zinc-950/10 bg-white">
					<motion.div initial={false}>
						<div className="overflow-hidden p-2">
							<AnimatePresence initial={false} mode="sync">
								{isOpen ? (
									<motion.div
										initial={{ height: 0 }}
										animate={{ height: heightContent || 0 }}
										exit={{ height: 0 }}
										style={{
											width: maxWidth,
										}}
									>
										<div ref={contentRef} className="p-2">
											<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
												<div className={cn('px-2 pt-2 text-sm gap-5 flex flex-col')}>
													<h3 className="font-bold">Olá, {user?.user_metadata.name}!</h3>
													<form>
														<Button className="w-full" type="submit" formAction={signOut}>
															Sair
														</Button>
													</form>
												</div>
											</motion.div>
										</div>
									</motion.div>
								) : null}
							</AnimatePresence>
							<div className="flex space-x-2" ref={menuRef}>
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
				</div>
			</motion.div>
		</MotionConfig>
	)
}
