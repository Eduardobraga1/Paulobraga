"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Settings,
  MessageCircle,
  MessageSquare
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Lições", href: "/dashboard/lessons", icon: BookOpen },
  { name: "Respostas", href: "/dashboard/responses", icon: MessageSquare },
  { name: "Alunos", href: "/dashboard/students", icon: Users },
  { name: "Turmas", href: "/dashboard/classes", icon: GraduationCap },
  { name: "Configurações", href: "/dashboard/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <MessageCircle className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">Educlass</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
