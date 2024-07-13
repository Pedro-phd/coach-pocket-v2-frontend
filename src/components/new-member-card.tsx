import { Button } from "@/components/ds"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function NewMemberCard(props: { className?: string }) {
  return (
    <Card className={cn("h-fit", props.className)}>
      <CardHeader>
        <CardTitle>Novo Aluno</CardTitle>
        <CardDescription>
          Traga um novo aluno para o time, juntos somos mais fortes!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button size="sm" variant="brand">
          Novo Aluno
        </Button>
      </CardContent>
    </Card>
  )
}
