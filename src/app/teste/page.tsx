'use client'
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Checkbox,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
	Input,
	SelectInput,
	Switch,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	Toggle,
} from '@/components/ds'
import {
	Cloud,
	CreditCard,
	Github,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	Settings,
	User,
	UserPlus,
	Users,
} from 'lucide-react'

export default function TestePage() {
	const invoices = [
		{
			invoice: 'INV001',
			paymentStatus: 'Paid',
			totalAmount: '$250.00',
			paymentMethod: 'Credit Card',
		},
		{
			invoice: 'INV002',
			paymentStatus: 'Pending',
			totalAmount: '$150.00',
			paymentMethod: 'PayPal',
		},
		{
			invoice: 'INV003',
			paymentStatus: 'Unpaid',
			totalAmount: '$350.00',
			paymentMethod: 'Bank Transfer',
		},
		{
			invoice: 'INV004',
			paymentStatus: 'Paid',
			totalAmount: '$450.00',
			paymentMethod: 'Credit Card',
		},
		{
			invoice: 'INV005',
			paymentStatus: 'Paid',
			totalAmount: '$550.00',
			paymentMethod: 'PayPal',
		},
		{
			invoice: 'INV006',
			paymentStatus: 'Pending',
			totalAmount: '$200.00',
			paymentMethod: 'Bank Transfer',
		},
		{
			invoice: 'INV007',
			paymentStatus: 'Unpaid',
			totalAmount: '$300.00',
			paymentMethod: 'Credit Card',
		},
	]
	return (
		<div>
			<Button>Default</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="destructive">Destructive</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="brand">Brand</Button>
			<Button variant="link">Link</Button>
			<Button tooltip="Isso é um botão com a variante ghost" variant="ghost">
				ghost
			</Button>
			<Button loading>Loading</Button>
			<Button disabled>Disabled</Button>
			<div className="w-32 h-w-32">
				<Input errorMessage="error" />
				<Input prefix="prefix" />
				<Input suffix="suffix" />
				<Input hint="hint" />
				<Input disabled />
				<Input mask="zipcode" />
				<Input mask="document" />
			</div>
			<Card>
				<CardHeader>
					<CardTitle>Teste</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim odio non hendrerit rhoncus.
						Vestibulum lobortis pharetra tortor at consequat. Donec massa massa, tincidunt et lobortis eget, bibendum
						pellentesque ligula. Aliquam lectus risus, auctor in odio ac, sodales tincidunt sapien. Fusce viverra at leo
						non dignissim. Donec sit amet placerat tortor. Vestibulum eget accumsan massa. Nunc et sagittis orci, in
						condimentum nulla. In tempor, felis et suscipit ultricies, nunc nisi fermentum ante, nec rutrum metus velit
						ut odio. Aenean iaculis ut lacus varius elementum. In sit amet iaculis velit. Donec dapibus sapien in mauris
						pellentesque, in tincidunt diam blandit. Nullam iaculis justo sed erat volutpat tempus. Sed ac risus et diam
						auctor venenatis a lacinia sem. Cras dapibus magna sed congue pellentesque.
					</CardDescription>
				</CardContent>
			</Card>
			<Card className="w-[500px]">
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Invoice</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Method</TableHead>
								<TableHead>Amount</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{invoices.map((invoice) => (
								<TableRow key={invoice.invoice}>
									<TableCell className="font-medium">{invoice.invoice}</TableCell>
									<TableCell>{invoice.paymentStatus}</TableCell>
									<TableCell>{invoice.paymentMethod}</TableCell>
									<TableCell>{invoice.totalAmount}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">Open</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<User className="mr-2 h-4 w-4" />
							<span>Profile</span>
							<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<CreditCard className="mr-2 h-4 w-4" />
							<span>Billing</span>
							<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Settings className="mr-2 h-4 w-4" />
							<span>Settings</span>
							<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Keyboard className="mr-2 h-4 w-4" />
							<span>Keyboard shortcuts</span>
							<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<Users className="mr-2 h-4 w-4" />
							<span>Team</span>
						</DropdownMenuItem>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>
								<UserPlus className="mr-2 h-4 w-4" />
								<span>Invite users</span>
							</DropdownMenuSubTrigger>
							<DropdownMenuPortal>
								<DropdownMenuSubContent>
									<DropdownMenuItem>
										<Mail className="mr-2 h-4 w-4" />
										<span>Email</span>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<MessageSquare className="mr-2 h-4 w-4" />
										<span>Message</span>
									</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>
										<PlusCircle className="mr-2 h-4 w-4" />
										<span>More...</span>
									</DropdownMenuItem>
								</DropdownMenuSubContent>
							</DropdownMenuPortal>
						</DropdownMenuSub>
						<DropdownMenuItem>
							<Plus className="mr-2 h-4 w-4" />
							<span>New Team</span>
							<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Github className="mr-2 h-4 w-4" />
						<span>GitHub</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<LifeBuoy className="mr-2 h-4 w-4" />
						<span>Support</span>
					</DropdownMenuItem>
					<DropdownMenuItem disabled>
						<Cloud className="mr-2 h-4 w-4" />
						<span>API</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<LogOut className="mr-2 h-4 w-4" />
						<span>Log out</span>
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<SelectInput
				placeholder="Selecione"
				hint="teste"
				disabled
				options={[
					{
						text: 'teste1',
						value: 'teste1',
					},
					{
						text: 'teste2',
						value: 'teste2',
					},
				]}
			/>
			<Toggle variant="outline">teste</Toggle>
			<Switch />
			<Checkbox />
		</div>
	)
}
