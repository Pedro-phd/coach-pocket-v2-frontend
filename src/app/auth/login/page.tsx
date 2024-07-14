import { login } from './actions'

export default async function LoginPage() {
	return (
		<form>
			<button type="submit" formAction={login}>
				Sign in
			</button>
		</form>
	)
}
