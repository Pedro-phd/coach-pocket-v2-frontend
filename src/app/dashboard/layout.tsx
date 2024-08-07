import NavBar from '@/components/nav-bar'
import QueryProvider from '@/lib/query-provider'
import SetAuthCookie from '@/lib/set-cookie'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export const maxDuration = 60

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

	// const queryClient = getQueryClient()
	// void queryClient.prefetchQuery(await makeQueryServer({ key: 'members', path: '/members' }))

	return (
		<QueryProvider>
			<SetAuthCookie token={session?.access_token} />
			{/* <HydrationBoundary state={dehydrate(queryClient)}> */}
			<NavBar user={user} />
			<div className="p-5">{children}</div>
			{/* </HydrationBoundary> */}
		</QueryProvider>
	)
}
