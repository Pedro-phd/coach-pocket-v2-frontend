import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Coach Pocket',
	description: 'Coach Pocket | Treinar ficou mais fácil!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<Script async src="https://www.googletagmanager.com/gtag/js?id=G-2ZTN4F0TRK" />
			<Script>
				{`
				 	window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-2ZTN4F0TRK');
				`}
			</Script>
			<Analytics />
			<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''} />
			<TooltipProvider>
				<body className={cn('bg-[#F9FAFB]', inter.className)}>{children}</body>
			</TooltipProvider>
		</html>
	)
}
