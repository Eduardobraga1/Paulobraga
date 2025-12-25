"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, MessageCircle, BarChart3, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Educlass</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Começar Grátis</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Educlass – Ensine Inglês pelo WhatsApp
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Crie lições diárias com texto, áudio e exercícios. Envie automaticamente 
            para seus alunos e receba respostas por voz ou texto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="text-lg px-8 py-6">
                Começar Grátis
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Ver Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Três passos simples para transformar seu ensino
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">1. Crie suas lições</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Adicione texto em Markdown, grave áudios explicativos e crie exercícios 
                personalizados com perguntas e respostas esperadas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 hover:border-secondary/50 transition-colors">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MessageCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">2. Envie pelo WhatsApp</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Conecte sua conta do WhatsApp Business e envie lições automaticamente 
                para suas turmas. Seus alunos recebem na palma da mão.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/50 transition-colors">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">3. Receba e corrija</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Receba respostas em texto ou áudio, dê feedback personalizado e 
                acompanhe o progresso de cada aluno em tempo real.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tudo que você precisa para ensinar
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Editor de lições com Markdown e preview em tempo real",
              "Gravação de áudio diretamente no navegador",
              "Gerenciamento de turmas e alunos",
              "Integração completa com WhatsApp Business API",
              "Recebimento automático de respostas dos alunos",
              "Sistema de feedback e correção integrado",
              "Dashboard com métricas e estatísticas",
              "Links públicos para compartilhar lições"
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para revolucionar seu ensino?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Junte-se a centenas de professores que já estão ensinando de forma 
            mais eficiente pelo WhatsApp.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="text-lg px-8 py-6">
              Começar Agora - É Grátis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageCircle className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">Educlass</span>
          </div>
          <p>© 2025 Educlass. Todos os direitos reservados.</p>
          <p className="mt-2">
            Ensine inglês de forma estruturada e escalável pelo WhatsApp.
          </p>
        </div>
      </footer>
    </div>
  )
}
