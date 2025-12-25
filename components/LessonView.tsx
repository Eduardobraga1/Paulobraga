"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Trophy, X } from "lucide-react";
import { useProgress } from "@/lib/contexts/ProgressContext";

import { MultipleChoiceExercise } from "@/components/exercises/MultipleChoiceExercise";
import { TranslateExercise } from "@/components/exercises/TranslateExercise";
import { FillBlankExercise } from "@/components/exercises/FillBlankExercise";
import { MatchingExercise } from "@/components/exercises/MatchingExercise";

interface LessonViewProps {
  lesson: any;
}

export function LessonView({ lesson }: LessonViewProps) {
  const router = useRouter();
  const { progress, loseHeart, completeLesson, updateLessonProgress } = useProgress();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentExercise = lesson.exercises[currentExerciseIndex];
  const progressPercentage = ((currentExerciseIndex + 1) / lesson.exercises.length) * 100;

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      loseHeart();
    }

    // Move to next exercise
    if (currentExerciseIndex < lesson.exercises.length - 1) {
      const nextIndex = currentExerciseIndex + 1;
      setCurrentExerciseIndex(nextIndex);
      updateLessonProgress(lesson.id, nextIndex);
    } else {
      // Lesson completed!
      const score = (correctAnswers / lesson.exercises.length) * 100;
      if (score >= 60) {
        completeLesson(lesson.id, lesson.xp);
      }
      setIsCompleted(true);
    }
  };

  const handleExit = () => {
    router.push("/learn");
  };

  const handleRestart = () => {
    setCurrentExerciseIndex(0);
    setCorrectAnswers(0);
    setIsCompleted(false);
  };

  if (progress.hearts <= 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
              <Heart className="h-10 w-10 text-red-600" />
            </div>
            <CardTitle className="text-2xl">Sem corações!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Você perdeu todos os seus corações. Tente novamente mais tarde ou pratique outra lição.
            </p>
            <Button onClick={handleExit} className="w-full">
              Voltar ao Menu
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isCompleted) {
    const score = Math.round((correctAnswers / lesson.exercises.length) * 100);
    const passed = score >= 60;

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div
              className={`mx-auto mb-4 h-20 w-20 rounded-full flex items-center justify-center ${
                passed ? "bg-green-100" : "bg-orange-100"
              }`}
            >
              <Trophy
                className={`h-10 w-10 ${passed ? "text-green-600" : "text-orange-600"}`}
              />
            </div>
            <CardTitle className="text-2xl">
              {passed ? "Lição Concluída!" : "Lição Finalizada"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{score}%</div>
              <p className="text-muted-foreground">
                {correctAnswers} de {lesson.exercises.length} corretas
              </p>
            </div>

            {passed && (
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <p className="font-semibold text-green-800">+{lesson.xp} XP</p>
              </div>
            )}

            <div className="space-y-2">
              <Button onClick={handleExit} className="w-full" size="lg">
                Continuar
              </Button>
              <Button
                onClick={handleRestart}
                variant="outline"
                className="w-full"
              >
                Praticar Novamente
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <Button variant="ghost" size="sm" onClick={handleExit}>
              <X className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
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
          
          <Progress value={progressPercentage} className="h-3" />
          
          <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
            <span>{lesson.title}</span>
            <span>
              {currentExerciseIndex + 1} / {lesson.exercises.length}
            </span>
          </div>
        </div>
      </div>

      {/* Exercise Content */}
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            {currentExercise.type === "multiple_choice" && (
              <MultipleChoiceExercise
                question={currentExercise.question}
                options={currentExercise.options}
                correct={currentExercise.correct}
                onAnswer={handleAnswer}
              />
            )}

            {(currentExercise.type === "translate_to_en" ||
              currentExercise.type === "translate_to_pt") && (
              <TranslateExercise
                question={currentExercise.question}
                correct={currentExercise.correct}
                type={currentExercise.type}
                onAnswer={handleAnswer}
              />
            )}

            {currentExercise.type === "fill_blank" && (
              <FillBlankExercise
                question={currentExercise.question}
                correct={currentExercise.correct}
                onAnswer={handleAnswer}
              />
            )}

            {currentExercise.type === "matching" && (
              <MatchingExercise
                question={currentExercise.question}
                pairs={currentExercise.pairs}
                onAnswer={handleAnswer}
              />
            )}

            {(currentExercise.type === "listen_type" ||
              currentExercise.type === "speak") && (
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold">{currentExercise.question}</h2>
                <p className="text-muted-foreground">
                  Este tipo de exercício será implementado em breve!
                </p>
                <Button onClick={() => handleAnswer(true)}>Pular</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
