"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MessageSquare, Send, CheckCircle, Play, Pause } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

interface Response {
  id: string
  type: string
  content: string | null
  audioUrl: string | null
  feedback: string | null
  feedbackSent: boolean
  corrected: boolean
  createdAt: string
  student: {
    name: string
    phone: string
  }
  lesson: {
    title: string
  }
}

export default function ResponsesPage() {
  const { toast } = useToast()
  const [responses, setResponses] = useState<Response[]>([])
  const [selectedResponse, setSelectedResponse] = useState<Response | null>(null)
  const [feedback, setFeedback] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchResponses()
  }, [])

  const fetchResponses = async () => {
    try {
      const res = await fetch("/api/responses")
      const data = await res.json()
      setResponses(data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching responses:", error)
      setLoading(false)
    }
  }

  const handleSendFeedback = async () => {
    if (!selectedResponse || !feedback.trim()) return

    try {
      const res = await fetch(`/api/responses/${selectedResponse.id}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback }),
      })

      if (!res.ok) throw new Error("Failed to send feedback")

      toast({
        title: "Feedback enviado!",
        description: "O feedback foi enviado para o aluno pelo WhatsApp",
      })

      setSelectedResponse(null)
      setFeedback("")
      fetchResponses()
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível enviar o feedback",
        variant: "destructive",
      })
    }
  }

  const markAsCorrected = async (responseId: string) => {
    try {
      await fetch(`/api/responses/${responseId}/mark-corrected`, {
        method: "POST",
      })

      toast({
        title: "Marcado como corrigido",
      })

      fetchResponses()
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível marcar como corrigido",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Respostas dos Alunos</h1>
        <p className="text-muted-foreground">
          Visualize e corrija as respostas dos exercícios
        </p>
      </div>

      <div className="grid gap-6">
        {responses.map((response) => (
          <Card key={response.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    {response.student.name}
                  </CardTitle>
                  <CardDescription>
                    Lição: {response.lesson.title}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      response.corrected
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {response.corrected ? "Corrigido" : "Pendente"}
                  </span>
                  {response.feedbackSent && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Enviado{" "}
                  {formatDistanceToNow(new Date(response.createdAt), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </p>

                {response.type === "text" && response.content && (
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-1">Resposta em texto:</p>
                    <p className="whitespace-pre-wrap">{response.content}</p>
                  </div>
                )}

                {response.type === "audio" && response.audioUrl && (
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Resposta em áudio:</p>
                    <audio controls className="w-full">
                      <source src={response.audioUrl} />
                    </audio>
                  </div>
                )}
              </div>

              {response.feedback && (
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm font-medium mb-1">Seu feedback:</p>
                  <p className="text-sm">{response.feedback}</p>
                </div>
              )}

              <div className="flex gap-2">
                {!response.corrected && (
                  <>
                    <Button
                      onClick={() => {
                        setSelectedResponse(response)
                        setFeedback(response.feedback || "")
                      }}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {response.feedback ? "Editar Feedback" : "Dar Feedback"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => markAsCorrected(response.id)}
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Marcar como Corrigido
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        {responses.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Nenhuma resposta ainda
              </h3>
              <p className="text-muted-foreground">
                As respostas dos alunos aparecerão aqui
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Feedback Dialog */}
      <Dialog
        open={!!selectedResponse}
        onOpenChange={(open) => !open && setSelectedResponse(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dar Feedback</DialogTitle>
            <DialogDescription>
              Escreva seu feedback para {selectedResponse?.student.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea
                id="feedback"
                rows={6}
                placeholder="Escreva seu feedback aqui..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSendFeedback} className="flex-1">
                <Send className="mr-2 h-4 w-4" />
                Enviar pelo WhatsApp
              </Button>
              <Button
                variant="outline"
                onClick={() => setSelectedResponse(null)}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
