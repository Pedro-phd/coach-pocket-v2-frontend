'use client'

import { setCookie } from 'cookies-next'

export default function SetAuthCookie({ token }: { token?: string }) {
	setCookie('token', token)
	return <div />
}
