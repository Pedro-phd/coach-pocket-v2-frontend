import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const code = searchParams.get('code')

	if (code) {
		const supabase = createClient()
		const { error } = await supabase.auth.exchangeCodeForSession(code)
		if (!error) {
			return NextResponse.redirect(`${process.env.NEXT_PUBLIC_FRONT_URL}/dashboard`)
		}
	}

	return NextResponse.redirect(`${process.env.NEXT_PUBLIC_FRONT_URL}/auth/auth-code-error`)
}
