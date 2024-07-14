'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

export async function login() {
	const supabase = createClient()
	const origin = headers().get('origin')

	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: `${origin}/auth/callback`,
			queryParams: {
				access_type: 'offline',
				prompt: 'consent',
			},
		},
	})

	if (error) {
		redirect('/error') //@todo add error toast
	}

	revalidatePath('/', 'layout')
	redirect(data.url)
}
