"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, GraduationCap, Users, Calendar } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Class {
  id: string
  name: string
  description: string | null
  schedule: string | null
  students: any[]
  createdAt: string
}

export default function ClassesPage() {
  const { toast } = useToast()
  const [classes, setClasses] = useState<Class[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    schedule: "",
  })

  useEffect(() => {
    fetchClasses()
  }, [])

  const fetchClasses = async () => {
    try {
      const res = await fetch("/api/classes")
      const data = await res.json()
      setClasses(data)
    } catch (error) {
      console.error("Error fetching classes:", error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed to create class")

      toast({
        title: "Turma criada!",
        description: "A turma foi criada com sucesso",
      })

      setIsDialogOpen(false)
      setFormData({ name: "", description: "", schedule: "" })
      fetchClasses()
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível criar a turma",
        variant: "destructive",
      })
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Turmas</h1>
          <p className="text-muted-foreground">
            Organize seus alunos em turmas
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nova Turma
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar Nova Turma</DialogTitle>
              <DialogDescription>
                Preencha as informações da turma
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nome da turma</Label>
                <Input
                  id="name"
                  placeholder="Ex: Turma Iniciante - Seg/Qua 20h"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Descrição (opcional)</Label>
                <Textarea
                  id="description"
                  placeholder="Descrição da turma..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="schedule">Horário (opcional)</Label>
                <Input
                  id="schedule"
                  placeholder="Ex: Segunda e Quarta às 20h"
                  value={formData.schedule}
                  onChange={(e) =>
                    setFormData({ ...formData, schedule: e.target.value })
                  }
                />
              </div>
              <Button type="submit" className="w-full">
                Criar Turma
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls) => (
          <Card key={cls.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <GraduationCap className="h-8 w-8 text-primary" />
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="mr-1 h-4 w-4" />
                  {cls.students.length}
                </div>
              </div>
              <CardTitle className="mt-4">{cls.name}</CardTitle>
              <CardDescription>
                {cls.description || "Sem descrição"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {cls.schedule && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  {cls.schedule}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {classes.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <GraduationCap className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhuma turma criada</h3>
            <p className="text-muted-foreground mb-4">
              Crie sua primeira turma para organizar seus alunos
            </p>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Criar Turma
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
