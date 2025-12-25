"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, MessageSquare, Plus } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [stats, setStats] = useState({
    activeStudents: 0,
    lessonsThisWeek: 0,
    pendingResponses: 0,
  })

  useEffect(() => {
    // Fetch dashboard stats
    fetch("/api/dashboard/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(console.error)
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Visão geral das suas atividades de ensino
          </p>
        </div>
        <Link href="/dashboard/lessons/new">
          <Button size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Nova Lição
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Alunos Ativos
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeStudents}</div>
            <p className="text-xs text-muted-foreground">
              Total de alunos matriculados
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Lições Enviadas
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.lessonsThisWeek}</div>
            <p className="text-xs text-muted-foreground">
              Nesta semana
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Respostas Pendentes
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingResponses}</div>
            <p className="text-xs text-muted-foreground">
              Aguardando correção
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/dashboard/lessons/new">
            <Button variant="outline" className="w-full h-24 flex-col">
              <BookOpen className="h-8 w-8 mb-2" />
              Criar Lição
            </Button>
          </Link>
          <Link href="/dashboard/students">
            <Button variant="outline" className="w-full h-24 flex-col">
              <Users className="h-8 w-8 mb-2" />
              Gerenciar Alunos
            </Button>
          </Link>
          <Link href="/dashboard/responses">
            <Button variant="outline" className="w-full h-24 flex-col">
              <MessageSquare className="h-8 w-8 mb-2" />
              Ver Respostas
            </Button>
          </Link>
          <Link href="/dashboard/settings">
            <Button variant="outline" className="w-full h-24 flex-col">
              <MessageSquare className="h-8 w-8 mb-2" />
              Configurar WhatsApp
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
