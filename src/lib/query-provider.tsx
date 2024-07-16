'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { PropsWithChildren } from 'react'
import { getQueryClient } from './get-query-client'

export default function QueryProvider({ children }: PropsWithChildren) {
	const queryClient = getQueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			{children}
		</QueryClientProvider>
	)
}
