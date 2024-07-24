import { getQueryClient } from '@/lib/get-query-client'
import { makeQueryServer } from '@/lib/make-query'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

export default async function Layout({
	children,
	params: { id },
}: Readonly<{
	children: React.ReactNode
	params: { id: string }
}>) {
	const queryClient = getQueryClient()
	void queryClient.prefetchQuery(await makeQueryServer({ key: `members-${id}`, path: `/members/${id}` }))

	return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}
