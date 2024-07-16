import NavBar from '@/components/nav-bar'
import { getQueryClient } from '@/lib/get-query-client'
import QueryProvider from '@/lib/query-provider'
import { createClient } from '@/lib/supabase/server'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { redirect } from 'next/navigation'

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const supabase = createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		redirect('/auth/login')
	}

	const queryClient = getQueryClient()

	return (
		<QueryProvider>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<NavBar />
				{children}
			</HydrationBoundary>
		</QueryProvider>
	)
}
