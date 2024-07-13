import { Button } from "@/components/ds"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from "lucide-react"

export default function MembersTable(props: { className?: string}) {
  return (
    <Card className={props.className}>
      <CardHeader className="px-7">
        <CardTitle>Alunos</CardTitle>
        <CardDescription>Lista de alunos cadastrados.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead className="hidden sm:table-cell">Ultima atualização</TableHead>
              <TableHead className="hidden md:table-cell">Ficha</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">10/10/2024</TableCell>
              
              <TableCell>
                <Button size='icon' variant='link' className="text-brand">
                  <Link  className="size-4"/>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">10/10/2024</TableCell>
              
              <TableCell>
                <Button size='icon' variant='link' className="text-brand">
                  <Link  className="size-4"/>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">10/10/2024</TableCell>
              
              <TableCell>
                <Button size='icon' variant='link' className="text-brand">
                  <Link  className="size-4"/>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
