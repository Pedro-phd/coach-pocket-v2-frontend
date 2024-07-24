'use client'
import { CreateMemberSchema, type CreateMemberDto } from '@/domain/member/create-member.dto'
import { getQueryClient } from '@/lib/get-query-client'
import { makeMutation } from '@/lib/make-mutation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { Controller, type FieldErrors, useForm } from 'react-hook-form'
import { Button, DialogComponent, DialogFooter, Input } from './ds'
import { PlusCircle, UserPlus } from 'lucide-react'
import { DatePicker } from './ds/date-picket'
import { Separator } from './ui/separator'
import { DialogClose } from '@radix-ui/react-dialog'

export default function AddMember() {
	const queryClient = getQueryClient()

	const { mutate, isPending } = useMutation({
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
		reset,
	} = useForm<CreateMemberDto>({
		resolver: zodResolver(CreateMemberSchema),
	})

	const handleAdd = (data: CreateMemberDto) => {
		mutate(data)
	}
	const onError = (data: FieldErrors<CreateMemberDto>) => {
		console.log('->', data)
	}

	const [open, setOpen] = useState<boolean>(false)

	useEffect(() => {
		reset()
	}, [open])

	return (
		<DialogComponent
			open={open}
			onOpenChange={setOpen}
			title={
				<div className="flex gap-2 items-center">
					<UserPlus />
					Novo Aluno
				</div>
			}
			description="Traga um novo aluno para o time, juntos somos mais fortes!"
			trigger={
				<Button variant="outline" className="gap-1">
					<PlusCircle strokeWidth={1} />
					<span className="hidden lg:flex">Adicionar aluno</span>
				</Button>
			}
			content={
				<form className="flex flex-col gap-1" onSubmit={handleSubmit(handleAdd, onError)}>
					<Input placeholder="Nome" {...register('name')} errorMessage={errors.name?.message} disabled={isPending} />
					<Input
						placeholder="E-mail"
						{...register('email')}
						errorMessage={errors.email?.message}
						disabled={isPending}
					/>
					<div className="flex gap-2">
						<Input
							placeholder="Documento"
							mask="document"
							{...register('document')}
							errorMessage={errors.document?.message}
							disabled={isPending}
						/>
						<Controller
							control={control}
							name="birth_date"
							render={({ field }) => {
								return (
									<DatePicker
										placeholder="Data de aniversário"
										value={field.value}
										onChange={field.onChange}
										disabled={isPending}
									/>
								)
							}}
						/>
					</div>
					<Separator className="my-4" />
					<Input
						placeholder="Altura"
						{...register('height')}
						errorMessage={errors.height?.message}
						disabled={isPending}
					/>
					<Input
						placeholder="Peso"
						{...register('weight')}
						errorMessage={errors.weight?.message}
						disabled={isPending}
					/>
					<Separator className="my-4" />
					<Input
						placeholder="Cep"
						mask="zipcode"
						{...register('zipcode')}
						errorMessage={errors.zipcode?.message}
						disabled={isPending}
					/>
					<Input
						placeholder="Numero"
						{...register('house_number')}
						errorMessage={errors.house_number?.message}
						disabled={isPending}
					/>
					<Input
						placeholder="Complemento"
						{...register('address_details')}
						errorMessage={errors.address_details?.message}
						disabled={isPending}
					/>
					<DialogFooter className="flex gap-2 w-full mt-4">
						<DialogClose asChild>
							<Button variant="outline" className="flex gap-2 w-full" disabled={isPending}>
								Cancelar
							</Button>
						</DialogClose>
						<Button variant="brand" type="submit" className="flex gap-2 w-full" loading={isPending}>
							<PlusCircle className="size-4" />
							Adicionar
						</Button>
					</DialogFooter>
				</form>
			}
		/>
	)
}
