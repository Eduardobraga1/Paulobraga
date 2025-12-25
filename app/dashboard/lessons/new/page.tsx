"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AudioRecorder } from "@/components/audio-recorder"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Eye } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface Class {
  id: string
  name: string
}

export default function NewLessonPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [classes, setClasses] = useState<Class[]>([])
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    exerciseType: "text",
    exerciseQuestion: "",
    exerciseAnswer: "",
    classId: "",
    publicLink: false,
    sendNow: false,
  })

  useEffect(() => {
    // Fetch classes
    fetch("/api/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch(console.error)
  }, [])

  const handleAudioReady = (blob: Blob, url: string) => {
    setAudioBlob(blob)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      let audioUrl = null

      // Upload audio if exists
      if (audioBlob) {
        const audioFormData = new FormData()
        audioFormData.append("file", audioBlob, "lesson-audio.webm")

        const uploadRes = await fetch("/api/upload/audio", {
          method: "POST",
          body: audioFormData,
        })

        if (uploadRes.ok) {
          const { url } = await uploadRes.json()
          audioUrl = url
        }
      }

      // Create lesson
      const lessonData = {
        ...formData,
        audioUrl,
        status: formData.sendNow ? "published" : "draft",
      }

      const response = await fetch("/api/lessons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lessonData),
      })

      if (!response.ok) throw new Error("Failed to create lesson")

      const lesson = await response.json()

      // Send to WhatsApp if requested
      if (formData.sendNow && formData.classId) {
        await fetch("/api/lessons/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lessonId: lesson.id, classId: formData.classId }),
        })
      }

      toast({
        title: "Lição criada com sucesso!",
        description: formData.sendNow
          ? "A lição foi enviada para os alunos"
          : "A lição foi salva como rascunho",
      })

      router.push("/dashboard/lessons")
    } catch (error) {
      console.error("Error creating lesson:", error)
      toast({
        title: "Erro ao criar lição",
        description: "Tente novamente mais tarde",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Nova Lição</h1>
        <p className="text-muted-foreground">
          Crie uma lição completa com texto, áudio e exercícios
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Form Column */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Título da Lição</Label>
                  <Input
                    id="title"
                    placeholder="Ex: Lesson 12: Past Simple"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="content">Conteúdo (Markdown)</Label>
                  <Textarea
                    id="content"
                    placeholder="Use Markdown para formatar o texto..."
                    rows={10}
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Suporta Markdown: **negrito**, *itálico*, # títulos, etc.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Áudio Explicativo</CardTitle>
                <CardDescription>
                  Grave ou faça upload de um áudio para acompanhar a lição
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AudioRecorder onAudioReady={handleAudioReady} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exercício</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="exerciseType"
                    checked={formData.exerciseType === "audio"}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        exerciseType: checked ? "audio" : "text",
                      })
                    }
                  />
                  <Label htmlFor="exerciseType">
                    Resposta por áudio (off = texto)
                  </Label>
                </div>

                <div>
                  <Label htmlFor="exerciseQuestion">Pergunta do Exercício</Label>
                  <Textarea
                    id="exerciseQuestion"
                    placeholder="Ex: Tell me about your last weekend"
                    rows={3}
                    value={formData.exerciseQuestion}
                    onChange={(e) =>
                      setFormData({ ...formData, exerciseQuestion: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="exerciseAnswer">
                    Resposta Modelo (opcional)
                  </Label>
                  <Textarea
                    id="exerciseAnswer"
                    placeholder="Exemplo de resposta esperada..."
                    rows={3}
                    value={formData.exerciseAnswer}
                    onChange={(e) =>
                      setFormData({ ...formData, exerciseAnswer: e.target.value })
                    }
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Apenas para sua referência, não é exibida aos alunos
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Publicação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="classId">Turma</Label>
                  <Select
                    value={formData.classId}
                    onValueChange={(value) =>
                      setFormData({ ...formData, classId: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma turma" />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((cls) => (
                        <SelectItem key={cls.id} value={cls.id}>
                          {cls.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="publicLink"
                    checked={formData.publicLink}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, publicLink: checked })
                    }
                  />
                  <Label htmlFor="publicLink">Gerar link público</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="sendNow"
                    checked={formData.sendNow}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, sendNow: checked })
                    }
                  />
                  <Label htmlFor="sendNow">
                    Enviar agora pelo WhatsApp
                  </Label>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {formData.sendNow ? "Publicar e Enviar" : "Salvar Rascunho"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                disabled={isLoading}
              >
                Cancelar
              </Button>
            </div>
          </div>

          {/* Preview Column */}
          <div className="lg:sticky lg:top-6 h-fit">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <CardTitle>Preview WhatsApp</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-[#e5ddd5] p-4 rounded-lg">
                  <div className="bg-[#dcf8c6] p-3 rounded-lg shadow-sm max-w-sm ml-auto">
                    {formData.title && (
                      <div className="font-bold mb-2">📚 {formData.title}</div>
                    )}
                    {formData.content && (
                      <div className="prose prose-sm max-w-none mb-3">
                        <ReactMarkdown>{formData.content}</ReactMarkdown>
                      </div>
                    )}
                    {formData.exerciseQuestion && (
                      <div className="border-t pt-2 mt-2">
                        <div className="font-semibold mb-1">📝 Exercise:</div>
                        <div className="text-sm">{formData.exerciseQuestion}</div>
                      </div>
                    )}
                    <div className="text-xs text-right text-gray-600 mt-2">
                      {new Date().toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}
