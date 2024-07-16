import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { PropsWithChildren } from 'react'

export default async function Layout({ children }: PropsWithChildren) {
	const supabase = createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (user) {
		redirect('/dashboard')
	}

	return <>{children}</>
}
