import { queryOptions } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import type { CookiesFn } from 'cookies-next/lib/types'

interface MakeQueryProps {
	key: string
	path: string
}

export const makeQueryServer = async ({ key, path }: MakeQueryProps) => {
	let cookieStore: CookiesFn | undefined

	if (typeof window === 'undefined') {
		const { cookies: serverCookies } = await import('next/headers')
		cookieStore = serverCookies
	}

	const token = getCookie('token', { cookies: cookieStore })

	return queryOptions({
		queryKey: [key],
		queryFn: async () => {
			const response = await fetch(path, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})

			return response.json()
		},
	})
}

export const makeQuery = ({ key, path }: MakeQueryProps) => {
	let cookieStore: CookiesFn | undefined
	const token = getCookie('token', { cookies: cookieStore })

	return queryOptions({
		queryKey: [key],
		queryFn: async () => {
			const response = await fetch(path, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})

			return response.json()
		},
	})
}
