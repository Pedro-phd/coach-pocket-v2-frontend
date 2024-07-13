import NavBar from '@/components/nav-bar'
import { TooltipProvider } from '@/components/ui/tooltip'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Coach Pocket',
	description: 'Coach Pocket | Treinar ficou mais facil!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<TooltipProvider>
				<body className={inter.className}>
					<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
						{children}
						<NavBar />
					</div>
				</body>
			</TooltipProvider>
		</html>
	)
}
