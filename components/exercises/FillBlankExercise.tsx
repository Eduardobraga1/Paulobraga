"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FillBlankExerciseProps {
  question: string;
  correct: string;
  onAnswer: (isCorrect: boolean) => void;
}

export function FillBlankExercise({
  question,
  correct,
  onAnswer,
}: FillBlankExerciseProps) {
  const [userAnswer, setUserAnswer] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = () => {
    const normalized = userAnswer.toLowerCase().trim();
    const correctNormalized = correct.toLowerCase().trim();
    const isAnswerCorrect = normalized === correctNormalized;
    
    setIsCorrect(isAnswerCorrect);
    setHasAnswered(true);
    
    setTimeout(() => {
      onAnswer(isAnswerCorrect);
    }, 1500);
  };

  // Split question into parts around the blank
  const parts = question.split("_____");

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Preencha a lacuna</h2>
        <div className="text-2xl flex items-center justify-center gap-2 flex-wrap max-w-3xl mx-auto">
          {parts.map((part, index) => (
            <span key={index} className="inline-flex items-center gap-2">
              {part}
              {index < parts.length - 1 && (
                <Input
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  disabled={hasAnswered}
                  className={`w-32 text-center text-xl font-semibold inline-block ${
                    hasAnswered
                      ? isCorrect
                        ? "border-green-500 bg-green-50"
                        : "border-red-500 bg-red-50"
                      : "border-blue-500"
                  }`}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && userAnswer.trim() && !hasAnswered) {
                      checkAnswer();
                    }
                  }}
                  autoFocus
                />
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={checkAnswer}
          disabled={!userAnswer.trim() || hasAnswered}
          className="min-w-[200px]"
        >
          {hasAnswered ? "Próximo..." : "Verificar"}
        </Button>
      </div>

      {hasAnswered && (
        <div
          className={`p-4 rounded-lg text-center font-semibold ${
            isCorrect
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isCorrect ? (
            "✓ Correto!"
          ) : (
            <div>
              ✗ Incorreto. A resposta correta é: <strong>{correct}</strong>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
