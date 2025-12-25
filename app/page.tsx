"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Activity, Pill, Microscope, Trophy, Target, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useProgress } from "@/lib/contexts/ProgressContext";

export default function Home() {
  const router = useRouter();
  const { progress } = useProgress();

  const features = [
    {
      icon: Brain,
      title: "5 Módulos Completos",
      description: "30 lições cobrindo anatomia, emergências, farmacologia e mais",
    },
    {
      icon: Target,
      title: "270+ Exercícios",
      description: "Variedade de tipos: tradução, múltipla escolha, matching e mais",
    },
    {
      icon: Zap,
      title: "Sistema de Progressão",
      description: "Ganhe XP, complete desafios e acompanhe seu progresso",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <div className="flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full">
              <Trophy className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                Aprenda Inglês Médico
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Domine o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Inglês Médico
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plataforma interativa estilo Duolingo para profissionais da saúde aprenderem
            terminologia médica em inglês de forma prática e eficiente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => router.push("/learn")}
            >
              Começar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => router.push("/test-lessons")}
            >
              Ver Conteúdo
            </Button>
          </div>

          {progress.xp > 0 && (
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Seu Progresso</p>
                    <p className="text-2xl font-bold">{progress.xp} XP</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Heart
                        key={i}
                        className={`h-6 w-6 ${
                          i < progress.hearts
                            ? "fill-red-500 text-red-500"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher nossa plataforma?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Preview */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Módulos Disponíveis
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Anatomy", icon: Brain, color: "bg-blue-500", lessons: 6 },
              { name: "Patient Care", icon: Heart, color: "bg-red-500", lessons: 6 },
              { name: "Emergency", icon: Activity, color: "bg-orange-500", lessons: 6 },
              { name: "Pharmacology", icon: Pill, color: "bg-green-500", lessons: 6 },
              { name: "Diagnostics", icon: Microscope, color: "bg-purple-500", lessons: 6 },
            ].map((module, index) => {
              const Icon = module.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`${module.color} h-12 w-12 rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{module.name}</CardTitle>
                    <CardDescription>
                      {module.lessons} lições • Beginner to Advanced
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
          <CardHeader className="text-center py-12">
            <CardTitle className="text-3xl md:text-4xl mb-4 text-white">
              Pronto para começar?
            </CardTitle>
            <CardDescription className="text-lg text-white/90 mb-6">
              Comece sua jornada de aprendizado agora mesmo. É grátis!
            </CardDescription>
            <div>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                onClick={() => router.push("/learn")}
              >
                Começar Agora
              </Button>
            </div>
          </CardHeader>
        </Card>
      </section>
    </div>
  );
}
