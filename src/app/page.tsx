'use client'
import logo from '@/../assets/logos/logo-base-256x256.png'
import { Button } from '@/components/ds'
import { cn } from '@/lib/utils'
import { MotionConfig, motion } from 'framer-motion'
import { Manrope } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] })

const transition = {
	ease: 'easeInOut',
	duration: 1.5,
}

export default function Home() {
	const { push } = useRouter()
	return (
		<>
			<div className="px-6 md:px-0">
				<header className="w-full lg:w-2/3 flex h-24 items-center justify-between mx-auto z-10">
					<div className="flex items-center gap-1">
						<Image alt="logo coach pocket" src={logo} width={50} height={50} />
						<span className="text-brand font-semibold text-xl">CoachPocket</span>
					</div>
				</header>
			</div>
			<MotionConfig transition={transition}>
				<motion.div initial={{ opacity: 0, filter: 'blur(5px)' }} whileInView={{ opacity: 1, filter: 'blur(0px)' }}>
					<main className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
						<div className="hidden sm:mb-8 sm:flex sm:justify-center">
							<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10">
								113 Alunos 78 Treinos 43 Dietas
							</div>
						</div>
						<div className="text-center">
							<h1
								className={cn(
									'scroll-m-20 text-4xl font-bold tracking-tight sm:text-6xl text-gray-900',
									manrope.className,
								)}
							>
								Uma plataforma para seus alunos
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Seus alunos são a base do seu negócio, dê a eles uma plataforma que facilite a conquista do seus sonhos.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<Link href="/dashboard/members" prefetch={false}>
									<Button type="button" variant="brand">
										Começar agora
									</Button>
								</Link>
							</div>
						</div>
					</main>
				</motion.div>
			</MotionConfig>
		</>
	)
}
