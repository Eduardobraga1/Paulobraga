"use client";

import { allLessons } from "@/lib/data/allLessons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Activity, Pill, Microscope, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function TestLessonsPage() {
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [selectedExercise, setSelectedExercise] = useState<number>(0);

  // Filtrar lições por categoria
  const anatomyUnits = allLessons.filter(l => l.id.startsWith("anatomy"));
  const patientUnits = allLessons.filter(l => l.id.startsWith("patient"));
  const emergencyUnits = allLessons.filter(l => l.id.startsWith("emergency"));
  const pharmaUnits = allLessons.filter(l => l.id.startsWith("pharma"));
  const diagnosticUnits = allLessons.filter(l => l.id.startsWith("diagnostic"));

  const categories = [
    { name: "Anatomy", icon: Brain, lessons: anatomyUnits, color: "bg-blue-500" },
    { name: "Patient Interactions", icon: Heart, lessons: patientUnits, color: "bg-red-500" },
    { name: "Emergency Medicine", icon: Activity, lessons: emergencyUnits, color: "bg-orange-500" },
    { name: "Pharmacology", icon: Pill, lessons: pharmaUnits, color: "bg-green-500" },
    { name: "Diagnostic Tests", icon: Microscope, lessons: diagnosticUnits, color: "bg-purple-500" },
  ];

  const renderExercise = (exercise: any, index: number) => {
    return (
      <Card key={index} className="mb-4">
        <CardHeader>
          <CardTitle className="text-lg">
            Exercício {index + 1}: {exercise.type}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold mb-2">{exercise.question}</p>
          
          {exercise.type === "matching" && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold mb-2">Português:</p>
                {exercise.pairs.map((pair: any, i: number) => (
                  <div key={i} className="p-2 bg-slate-100 rounded mb-1">
                    {pair.pt}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold mb-2">English:</p>
                {exercise.pairs.map((pair: any, i: number) => (
                  <div key={i} className="p-2 bg-blue-100 rounded mb-1">
                    {pair.en}
                  </div>
                ))}
              </div>
            </div>
          )}

          {exercise.type === "multiple_choice" && (
            <div className="space-y-2">
              {exercise.options.map((option: string, i: number) => (
                <div 
                  key={i} 
                  className={`p-3 rounded border ${
                    option === exercise.correct 
                      ? 'bg-green-100 border-green-500' 
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  {option} {option === exercise.correct && "✓"}
                </div>
              ))}
            </div>
          )}

          {(exercise.type === "translate_to_en" || exercise.type === "translate_to_pt") && (
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">Resposta correta:</p>
              <p className="p-3 bg-green-50 rounded border border-green-200 mt-1">
                {exercise.correct}
              </p>
            </div>
          )}

          {exercise.type === "fill_blank" && (
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">Resposta:</p>
              <p className="p-3 bg-blue-50 rounded border border-blue-200 mt-1 font-mono">
                {exercise.correct}
              </p>
            </div>
          )}

          {exercise.type === "listen_type" && (
            <div className="mt-2">
              <p className="text-sm text-muted-foreground mb-1">Áudio (texto):</p>
              <p className="p-3 bg-purple-50 rounded border border-purple-200 mb-2">
                🔊 "{exercise.audioText}"
              </p>
              <p className="text-sm text-muted-foreground">Resposta esperada:</p>
              <p className="p-3 bg-green-50 rounded border border-green-200 mt-1">
                {exercise.correct}
              </p>
            </div>
          )}

          {exercise.type === "speak" && (
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">Pronunciar:</p>
              <p className="p-3 bg-orange-50 rounded border border-orange-200 mt-1 font-mono text-lg">
                🎤 {exercise.expected}
              </p>
              {exercise.hint && (
                <p className="text-sm text-muted-foreground mt-2">
                  Dica: {exercise.hint}
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  if (selectedLesson) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="outline" 
            onClick={() => setSelectedLesson(null)}
            className="mb-6"
          >
            ← Voltar
          </Button>
          
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{selectedLesson.title}</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    {selectedLesson.description}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Nível</div>
                  <div className="font-semibold">{selectedLesson.level}</div>
                  <div className="text-sm text-muted-foreground mt-2">XP</div>
                  <div className="font-semibold text-blue-600">{selectedLesson.xp}</div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="mb-4">
            <h2 className="text-xl font-bold mb-4">
              Exercícios ({selectedLesson.exercises.length} total)
            </h2>
          </div>

          {selectedLesson.exercises.map((ex: any, i: number) => renderExercise(ex, i))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            🏥 Medical English Lessons - Test Page
          </h1>
          <p className="text-lg text-muted-foreground">
            Total de {allLessons.length} lições criadas • 5 categorias
          </p>
        </div>

        {categories.map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <div key={catIndex} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`${category.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                  <p className="text-muted-foreground">
                    {category.lessons.length} lições disponíveis
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.lessons.map((lesson, lessonIndex) => (
                  <Card 
                    key={lessonIndex}
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedLesson(lesson)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">
                            {lesson.title}
                          </CardTitle>
                          <CardDescription>
                            {lesson.description}
                          </CardDescription>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded">
                          {lesson.level}
                        </span>
                        <span className="text-sm font-semibold text-blue-600">
                          {lesson.xp} XP
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {lesson.exercises.length} ex.
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}

        <Card className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white mb-2">
              ✅ Todos os módulos criados com sucesso!
            </CardTitle>
            <CardDescription className="text-white/90 text-base">
              30 lições completas • ~270 exercícios • Progressão Beginner → Advanced
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
