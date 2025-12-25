"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, BookOpen, Calendar, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

interface Lesson {
  id: string
  title: string
  status: string
  createdAt: string
  publishedAt: string | null
  class: {
    name: string
  } | null
}

export default function LessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/lessons")
      .then((res) => res.json())
      .then((data) => {
        setLessons(data)
        setLoading(false)
      })
      .catch(console.error)
  }, [])

  const deleteLesson = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir esta lição?")) return

    try {
      await fetch(`/api/lessons/${id}`, { method: "DELETE" })
      setLessons(lessons.filter((l) => l.id !== id))
    } catch (error) {
      console.error("Error deleting lesson:", error)
    }
  }

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Lições</h1>
          <p className="text-muted-foreground">
            Crie e gerencie suas lições de inglês
          </p>
        </div>
        <Link href="/dashboard/lessons/new">
          <Button size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Nova Lição
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <Card key={lesson.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <BookOpen className="h-8 w-8 text-primary" />
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    lesson.status === "published"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {lesson.status === "published" ? "Publicada" : "Rascunho"}
                </span>
              </div>
              <CardTitle className="mt-4">{lesson.title}</CardTitle>
              <CardDescription>
                {lesson.class ? `Turma: ${lesson.class.name}` : "Sem turma"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="mr-2 h-4 w-4" />
                {formatDistanceToNow(new Date(lesson.createdAt), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </div>
              <div className="flex gap-2">
                <Link href={`/dashboard/lessons/${lesson.id}/edit`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    <Edit className="mr-2 h-4 w-4" />
                    Editar
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => deleteLesson(lesson.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {lessons.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhuma lição criada</h3>
            <p className="text-muted-foreground mb-4">
              Comece criando sua primeira lição
            </p>
            <Link href="/dashboard/lessons/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Criar Lição
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
