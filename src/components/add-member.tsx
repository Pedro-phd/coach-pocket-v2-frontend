'use client'
import { type CreateMemberDto, CreateMemberSchema } from '@/domain/member/create-member.dto'
import { getQueryClient } from '@/lib/get-query-client'
import { makeMutation } from '@/lib/make-mutation'
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose } from '@radix-ui/react-dialog'
import { useMutation } from '@tanstack/react-query'
import { PlusCircle, UserPlus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Controller, type FieldErrors, useForm } from 'react-hook-form'
import { Button, DialogComponent, DialogFooter, Input } from './ds'
import { DatePicker } from './ds/date-picket'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

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
					<Tabs defaultValue="1">
						<TabsList className="w-full">
							<TabsTrigger className="w-full" value="1">
								Dados gerais
							</TabsTrigger>
							<TabsTrigger className="w-full" value="2">
								Endereço
							</TabsTrigger>
						</TabsList>
						<TabsContent value="1">
							<Input
								placeholder="Nome"
								{...register('name')}
								errorMessage={errors.name?.message}
								disabled={isPending}
							/>
							<Input
								placeholder="E-mail"
								{...register('email')}
								errorMessage={errors.email?.message}
								disabled={isPending}
							/>
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
											placeholder="Aniversário"
											value={field.value}
											onChange={field.onChange}
											disabled={isPending}
											errorMessage={errors.birth_date?.message}
										/>
									)
								}}
							/>
							<div className="flex justify-between gap-2">
								<Input
									placeholder="Altura"
									{...register('height')}
									errorMessage={errors.height?.message}
									disabled={isPending}
									suffix="cm"
								/>
								<Input
									placeholder="Peso"
									{...register('weight')}
									errorMessage={errors.weight?.message}
									disabled={isPending}
									suffix="kg"
								/>
							</div>
						</TabsContent>
						<TabsContent value="2">
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
						</TabsContent>
					</Tabs>
					<DialogFooter className="flex gap-2 w-full mt-4">
						<DialogClose asChild>
							<Button variant="outline" className="flex gap-2 w-full" disabled={isPending}>
								Cancelar
							</Button>
						</DialogClose>
						<Button variant="brand" type="submit" className="flex gap-2 w-full" loading={isPending}>
							Adicionar
						</Button>
					</DialogFooter>
				</form>
			}
		/>
	)
}
