import { getQueryClient } from '@/lib/get-query-client'
import { makeQueryServer } from '@/lib/make-query'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const queryClient = getQueryClient()
	void queryClient.prefetchQuery(await makeQueryServer({ key: 'members', path: '/members' }))

	return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}
