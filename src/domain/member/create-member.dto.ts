import { z } from 'zod'

export const CreateMemberSchema = z.object({
	name: z.string().min(1, { message: 'Nome é obrigatório' }),
	email: z.string({ message: 'E-mail é obrigatório' }).email({ message: 'Forneça um e-mail válido' }),
	document: z.string().refine((doc) => {
		const replacedDoc = doc.replace(/\D/g, '')
		return replacedDoc.length === 11 || replacedDoc.length === 14
	}, 'Documento deve ter 11 ou 14 caracteres.'),
	birth_date: z.date({ message: 'Data de aniversário é obrigatório' }),
	height: z.coerce.number().min(1, { message: 'Altura é obrigatório' }),
	weight: z.coerce.number().min(1, { message: 'Peso é obrigatório' }),
	zipcode: z.string().optional(),
	address_details: z.string().optional(),
	house_number: z.string().optional(),
})

export interface CreateMemberDto extends z.infer<typeof CreateMemberSchema> {}
