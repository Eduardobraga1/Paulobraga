"use client";

import { allLessons } from "@/lib/data/allLessons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Activity, Pill, Microscope, Lock, CheckCircle2, Trophy } from "lucide-react";
import { useProgress } from "@/lib/contexts/ProgressContext";
import { useRouter } from "next/navigation";

export default function LearnPage() {
  const router = useRouter();
  const { progress, isLessonCompleted, canAccessLesson } = useProgress();

  const anatomyUnits = allLessons.filter(l => l.id.startsWith("anatomy"));
  const patientUnits = allLessons.filter(l => l.id.startsWith("patient"));
  const emergencyUnits = allLessons.filter(l => l.id.startsWith("emergency"));
  const pharmaUnits = allLessons.filter(l => l.id.startsWith("pharma"));
  const diagnosticUnits = allLessons.filter(l => l.id.startsWith("diagnostic"));

  const categories = [
    { 
      name: "Anatomy", 
      icon: Brain, 
      lessons: anatomyUnits, 
      color: "bg-blue-500",
      description: "Aprenda termos anatômicos em inglês"
    },
    { 
      name: "Patient Interactions", 
      icon: Heart, 
      lessons: patientUnits, 
      color: "bg-red-500",
      description: "Comunicação com pacientes"
    },
    { 
      name: "Emergency Medicine", 
      icon: Activity, 
      lessons: emergencyUnits, 
      color: "bg-orange-500",
      description: "Situações de emergência"
    },
    { 
      name: "Pharmacology", 
      icon: Pill, 
      lessons: pharmaUnits, 
      color: "bg-green-500",
      description: "Medicamentos e farmacologia"
    },
    { 
      name: "Diagnostic Tests", 
      icon: Microscope, 
      lessons: diagnosticUnits, 
      color: "bg-purple-500",
      description: "Exames e diagnósticos"
    },
  ];

  const handleStartLesson = (lessonId: string) => {
    router.push(`/lesson/${lessonId}`);
  };

  const getCompletedCount = (lessons: any[]) => {
    return lessons.filter(l => isLessonCompleted(l.id)).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">🏥 Medical English</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">{progress.xp} XP</span>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Heart
                    key={i}
                    className={`h-5 w-5 ${
                      i < progress.hearts
                        ? "fill-red-500 text-red-500"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {categories.map((category, catIndex) => {
            const Icon = category.icon;
            const completed = getCompletedCount(category.lessons);
            const total = category.lessons.length;
            const progressPercent = (completed / total) * 100;

            return (
              <div key={catIndex}>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`${category.color} p-4 rounded-xl`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{category.name}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Progresso</div>
                    <div className="text-2xl font-bold">
                      {completed}/{total}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 rounded-full h-3 mb-6">
                  <div
                    className={`${category.color} h-3 rounded-full transition-all`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Lessons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.lessons.map((lesson, lessonIndex) => {
                    const completed = isLessonCompleted(lesson.id);
                    const canAccess = canAccessLesson(lesson.id);
                    const isLocked = !canAccess;

                    return (
                      <Card
                        key={lessonIndex}
                        className={`relative overflow-hidden transition-all ${
                          isLocked
                            ? "opacity-60"
                            : "hover:shadow-lg cursor-pointer"
                        }`}
                      >
                        {completed && (
                          <div className="absolute top-3 right-3">
                            <CheckCircle2 className="h-6 w-6 text-green-500 fill-green-500" />
                          </div>
                        )}

                        {isLocked && (
                          <div className="absolute top-3 right-3">
                            <Lock className="h-6 w-6 text-slate-400" />
                          </div>
                        )}

                        <CardHeader>
                          <CardTitle className="text-xl pr-8">
                            {lesson.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {lesson.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-semibold px-3 py-1 bg-slate-100 rounded-full">
                              {lesson.level}
                            </span>
                            <span className="text-sm font-semibold text-blue-600">
                              {lesson.xp} XP
                            </span>
                          </div>

                          <Button
                            className="w-full"
                            disabled={isLocked}
                            onClick={() => handleStartLesson(lesson.id)}
                            variant={completed ? "outline" : "default"}
                          >
                            {isLocked
                              ? "Bloqueada"
                              : completed
                              ? "Praticar Novamente"
                              : "Começar Lição"}
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
