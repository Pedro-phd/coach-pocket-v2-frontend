import { updateSession } from '@/lib/supabase/middleware'
import { createClient } from '@/lib/supabase/server'
import { getCookie, getCookies, setCookie } from 'cookies-next'
import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
	const response = NextResponse.next()
	const supabase = createClient()

	const {
		data: { session },
	} = await supabase.auth.getSession()

	setCookie('token', session?.access_token as string, { res: response, req: request })

	if (request.nextUrl.pathname.startsWith('/dashboard')) {
		return await updateSession(request)
	}
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
