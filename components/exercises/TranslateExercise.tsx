"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TranslateExerciseProps {
  question: string;
  correct: string;
  type: "translate_to_en" | "translate_to_pt";
  onAnswer: (isCorrect: boolean) => void;
}

export function TranslateExercise({
  question,
  correct,
  type,
  onAnswer,
}: TranslateExerciseProps) {
  const [userAnswer, setUserAnswer] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[.,!?;:]/g, "")
      .replace(/\s+/g, " ");
  };

  const checkAnswer = () => {
    const normalized = normalizeText(userAnswer);
    const correctNormalized = normalizeText(correct);
    
    // Check for exact match or very close match (allowing minor variations)
    const correct = normalized === correctNormalized || 
                    correctNormalized.includes(normalized) ||
                    normalized.includes(correctNormalized);
    
    setIsCorrect(correct);
    setHasAnswered(true);
    
    setTimeout(() => {
      onAnswer(correct);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          {type === "translate_to_en" ? "Traduza para o inglês:" : "Traduza para o português:"}
        </h2>
        <p className="text-xl mt-4 p-4 bg-slate-50 rounded-lg">
          {question}
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <Input
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Digite sua tradução..."
          disabled={hasAnswered}
          className="text-lg p-6"
          onKeyPress={(e) => {
            if (e.key === "Enter" && userAnswer.trim() && !hasAnswered) {
              checkAnswer();
            }
          }}
        />
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
          className={`p-4 rounded-lg text-center ${
            isCorrect
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {isCorrect ? (
            <div>
              <p className="font-semibold text-lg mb-1">✓ Correto!</p>
              <p className="text-sm">{correct}</p>
            </div>
          ) : (
            <div>
              <p className="font-semibold text-lg mb-1">✗ Não está correto</p>
              <p className="text-sm mb-2">Sua resposta: {userAnswer}</p>
              <p className="text-sm">Resposta esperada: <strong>{correct}</strong></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
