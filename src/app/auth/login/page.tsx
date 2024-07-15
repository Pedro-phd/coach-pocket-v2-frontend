'use client'
import logo from '@/../assets/logos/logo-base-256x256.png'
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from '@/components/ds'
import FacebookIcon from '@/components/icons/facebook'
import GoogleIcon from '@/components/icons/google'
import Image from 'next/image'
import { signInWithFacebook, signInWithGoogle } from './actions'

export default function LoginPage() {
	return (
		<div className="flex h-full items-center justify-center">
			<Card className="min-w-[500px] min-h-[500px]">
				<CardHeader className="pb-5 gap-1">
					<div className="flex flex-row justify-center gap-2">
						<Image alt="logo coach pocket" src={logo} width={50} height={50} />
						<CardTitle className="text-brand pb-0 flex items-center">CoachPocket</CardTitle>
					</div>
					<small className="text-center text-sm font-medium leading-none">
						Por favor entre ou cadastre uma nova conta
					</small>
				</CardHeader>
				<CardContent>
					<form className="py-3 gap-3 flex flex-col">
						<Input disabled placeholder="Email" />
						<Input disabled placeholder="Senha" />
						<div className="flex justify-between items-center">
							<p className="text-sm">Lembrar</p>
							<Button variant="link">Esqueceu a senha?</Button>
						</div>
						<Button variant="brand" disabled>
							Entrar
						</Button>
					</form>
					<div className="inline-flex items-center justify-center w-full">
						<hr className="w-full h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
						<span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
							ou
						</span>
					</div>
					<form className="py-3 gap-3 flex flex-col">
						<Button className="gap-2" variant="outline" type="submit" formAction={signInWithGoogle}>
							<GoogleIcon className="size-5" />
							Entre com o Google
						</Button>
						<Button className="gap-2" variant="outline" disabled type="submit" formAction={signInWithFacebook}>
							<FacebookIcon className="size-5" />
							Entre com o Facebook
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
