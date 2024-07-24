'use client'
import { Controller, useForm, type FieldErrors } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input } from '@/components/ds'
import { type CreateMemberDto, CreateMemberSchema } from '@/domain/member/create-member.dto'
import { Separator } from '@/components/ui/separator'
import { PlusCircle, UserPlus } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import { makeMutation } from '@/lib/make-mutation'
import { getQueryClient } from '@/lib/get-query-client'
import { DatePicker } from '@/components/ds/date-picket'

export default function NewMember() {
	const queryClient = getQueryClient()

	const { data, mutate } = useMutation({
		mutationFn: (data: CreateMemberDto) => makeMutation({ path: '/members', method: 'POST', body: data }),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['members'],
			})
			alert('sucesso')
		},
	})

	const {
		register,
		formState: { errors },
		handleSubmit,
		control,
	} = useForm<CreateMemberDto>({
		resolver: zodResolver(CreateMemberSchema),
	})

	const handleAdd = (data: CreateMemberDto) => {
		mutate(data)
	}
	const onError = (data: FieldErrors<CreateMemberDto>) => {
		console.log('->', data)
	}

	return (
		<div className="w-full h-screen flex justify-center">
			<Card className="max-w-[500px] h-fit mt-8">
				<CardHeader className="mb-4">
					<CardTitle className="flex gap-2 items-center">
						<UserPlus />
						Novo Aluno
					</CardTitle>
					<CardDescription>Traga um novo aluno para o time, juntos somos mais fortes!</CardDescription>
				</CardHeader>
				<CardContent>
					<form className="flex flex-col gap-1" onSubmit={handleSubmit(handleAdd, onError)}>
						<Input placeholder="Nome" {...register('name')} errorMessage={errors.name?.message} />
						<Input placeholder="E-mail" {...register('email')} errorMessage={errors.email?.message} />
						<div className="flex gap-2">
							<Input
								placeholder="Documento"
								mask="document"
								{...register('document')}
								errorMessage={errors.document?.message}
							/>
							<Controller
								control={control}
								name="birth_date"
								render={({ field }) => {
									return <DatePicker placeholder="Data de aniversário" value={field.value} onChange={field.onChange} />
								}}
							/>
						</div>
						<Separator className="my-4" />
						<Input placeholder="Altura" {...register('height')} errorMessage={errors.height?.message} />
						<Input placeholder="Peso" {...register('weight')} errorMessage={errors.weight?.message} />
						<Separator className="my-4" />
						<Input placeholder="Cep" mask="zipcode" {...register('zipcode')} errorMessage={errors.zipcode?.message} />
						<Input placeholder="Numero" {...register('house_number')} errorMessage={errors.house_number?.message} />
						<Input
							placeholder="Complemento"
							{...register('address_details')}
							errorMessage={errors.address_details?.message}
						/>
						<div className="flex gap-2 w-full mt-4">
							<Button variant="outline" className="flex gap-2 w-full">
								Cancelar
							</Button>
							<Button variant="brand" type="submit" className="flex gap-2 w-full">
								<PlusCircle className="size-4" /> Adicionar
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
