"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Settings as SettingsIcon, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const { data: session } = useSession()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [whatsappConfig, setWhatsappConfig] = useState({
    phoneNumberId: "",
    accessToken: "",
    verified: false,
  })

  useEffect(() => {
    fetchWhatsAppConfig()
  }, [])

  const fetchWhatsAppConfig = async () => {
    try {
      const res = await fetch("/api/settings/whatsapp")
      const data = await res.json()
      if (data.phoneNumberId) {
        setWhatsappConfig({
          phoneNumberId: data.phoneNumberId,
          accessToken: data.accessToken ? "****" : "",
          verified: data.verified,
        })
      }
    } catch (error) {
      console.error("Error fetching WhatsApp config:", error)
    }
  }

  const handleSaveWhatsApp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/settings/whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumberId: whatsappConfig.phoneNumberId,
          accessToken: whatsappConfig.accessToken === "****" 
            ? undefined 
            : whatsappConfig.accessToken,
        }),
      })

      if (!res.ok) throw new Error("Failed to save WhatsApp config")

      toast({
        title: "Configuração salva!",
        description: "Suas credenciais do WhatsApp foram salvas com sucesso",
      })

      fetchWhatsAppConfig()
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível salvar as configurações",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Configurações</h1>
        <p className="text-muted-foreground">
          Configure sua conta e integrações
        </p>
      </div>

      <div className="space-y-6">
        {/* User Info */}
        <Card>
          <CardHeader>
            <CardTitle>Informações da Conta</CardTitle>
            <CardDescription>Seus dados pessoais</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Nome</Label>
              <Input value={session?.user?.name || ""} disabled />
            </div>
            <div>
              <Label>Email</Label>
              <Input value={session?.user?.email || ""} disabled />
            </div>
          </CardContent>
        </Card>

        {/* WhatsApp Configuration */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>WhatsApp Business API</CardTitle>
                <CardDescription>
                  Configure sua conta do WhatsApp Business para enviar lições
                </CardDescription>
              </div>
              {whatsappConfig.verified ? (
                <CheckCircle className="h-6 w-6 text-green-600" />
              ) : (
                <AlertCircle className="h-6 w-6 text-yellow-600" />
              )}
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSaveWhatsApp} className="space-y-4">
              <div>
                <Label htmlFor="phoneNumberId">Phone Number ID</Label>
                <Input
                  id="phoneNumberId"
                  placeholder="Seu Phone Number ID"
                  value={whatsappConfig.phoneNumberId}
                  onChange={(e) =>
                    setWhatsappConfig({
                      ...whatsappConfig,
                      phoneNumberId: e.target.value,
                    })
                  }
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Encontre no Meta for Developers → WhatsApp → Getting Started
                </p>
              </div>

              <div>
                <Label htmlFor="accessToken">Access Token (Permanente)</Label>
                <Input
                  id="accessToken"
                  type="password"
                  placeholder="Seu Access Token"
                  value={whatsappConfig.accessToken}
                  onChange={(e) =>
                    setWhatsappConfig({
                      ...whatsappConfig,
                      accessToken: e.target.value,
                    })
                  }
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Use um token permanente, não temporário
                </p>
              </div>

              <Button type="submit" disabled={loading}>
                {loading ? "Salvando..." : "Salvar Configurações"}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2">Como obter suas credenciais:</h4>
              <ol className="text-sm space-y-1 list-decimal list-inside">
                <li>Acesse <a href="https://developers.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Meta for Developers</a></li>
                <li>Crie um App e adicione o produto WhatsApp</li>
                <li>Em "Getting Started", você encontrará o Phone Number ID</li>
                <li>Gere um token de acesso permanente em "API Setup"</li>
                <li>Configure o webhook apontando para: <code className="bg-white dark:bg-gray-800 px-1 rounded">{process.env.NEXT_PUBLIC_APP_URL}/api/webhook</code></li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
