import { useMutation } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import type { CookiesFn } from 'cookies-next/lib/types'
import axios from 'axios'

type Props = {
	path: string
	body?: unknown
	method: 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}
export async function makeMutation({ path, method, body }: Props) {
	const API_URL = process.env.NEXT_PUBLIC_API_URL + path

	let cookieStore: CookiesFn | undefined

	const token = getCookie('token', { cookies: cookieStore })

	return axios({
		method,
		url: API_URL,
		data: body,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
}
