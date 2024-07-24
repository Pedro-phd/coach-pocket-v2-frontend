import { createClient } from '@/lib/supabase/server'
import { setCookie } from 'cookies-next'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const { searchParams, origin } = new URL(request.url)
	const code = searchParams.get('code')

	if (code) {
		const supabase = createClient()
		const { error, data } = await supabase.auth.exchangeCodeForSession(code)
		setCookie('token', data.session?.access_token)
		if (!error) {
			return NextResponse.redirect(`${origin}/dashboard`)
		}
	}

	return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
