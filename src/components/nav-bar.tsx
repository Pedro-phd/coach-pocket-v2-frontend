'use client'
import logo from '@/../assets/logos/logo-white-32x32.png'
import useClickOutside from '@/hooks/useClickOutside'
import { MotionConfig, motion } from 'framer-motion'
import { Dumbbell, Gauge, User } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Button } from './ds'

const transition = {
	type: 'ease',
	bounce: 0.4,
	duration: 0.7,
}

export default function NavBar() {
	const [_, setIsOpen] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)
	const [contentRef] = useMeasure()

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
								<div className="bg-brand relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500">
									<Image alt="logo coach pocket" src={logo} width={24} height={24} />
								</div>
								<Button variant="ghost" tooltip="Dashboard" onClick={() => push('#')}>
									<Gauge className="h-5 w-5" />
								</Button>
								<Button variant="ghost" tooltip="Alunos" onClick={() => push('/dashboard/members')}>
									<User className="h-5 w-5" />
								</Button>
								<Button variant="ghost" tooltip="Treino">
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
