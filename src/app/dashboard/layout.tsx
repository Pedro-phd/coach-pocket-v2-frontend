import NavBar from '@/components/nav-bar'
import { getQueryClient } from '@/lib/get-query-client'
import { makeQueryServer } from '@/lib/make-query'
import QueryProvider from '@/lib/query-provider'
import SetAuthCookie from '@/lib/set-cookie'
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

	const {
		data: { session },
	} = await supabase.auth.getSession()

	if (!user) {
		redirect('/auth/login')
	}

	const queryClient = getQueryClient()
	void queryClient.prefetchQuery(await makeQueryServer({ key: 'members', path: '/members' }))

	return (
		<QueryProvider>
			<SetAuthCookie token={session?.access_token} />
			<HydrationBoundary state={dehydrate(queryClient)}>
				<NavBar user={user} />
				<div className="p-5">{children}</div>
			</HydrationBoundary>
		</QueryProvider>
	)
}
