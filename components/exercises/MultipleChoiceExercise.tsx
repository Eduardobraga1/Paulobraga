"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MultipleChoiceExerciseProps {
  question: string;
  options: string[];
  correct: string;
  onAnswer: (isCorrect: boolean) => void;
}

export function MultipleChoiceExercise({
  question,
  options,
  correct,
  onAnswer,
}: MultipleChoiceExerciseProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelect = (option: string) => {
    if (hasAnswered) return;
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    
    setHasAnswered(true);
    const isCorrect = selectedOption === correct;
    
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1500);
  };

  const getOptionStyle = (option: string) => {
    if (!hasAnswered) {
      return selectedOption === option
        ? "border-blue-500 bg-blue-50"
        : "border-slate-200 hover:border-slate-300";
    }

    if (option === correct) {
      return "border-green-500 bg-green-50";
    }

    if (option === selectedOption && option !== correct) {
      return "border-red-500 bg-red-50";
    }

    return "border-slate-200 opacity-50";
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{question}</h2>
        <p className="text-muted-foreground">Selecione a resposta correta</p>
      </div>

      <div className="space-y-3">
        {options.map((option, index) => (
          <Card
            key={index}
            className={`cursor-pointer transition-all ${getOptionStyle(option)}`}
            onClick={() => handleSelect(option)}
          >
            <CardContent className="p-4 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full border-2 flex items-center justify-center font-semibold">
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-lg">{option}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={!selectedOption || hasAnswered}
          className="min-w-[200px]"
        >
          {hasAnswered ? "Próximo..." : "Verificar"}
        </Button>
      </div>

      {hasAnswered && (
        <div
          className={`p-4 rounded-lg text-center font-semibold ${
            selectedOption === correct
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {selectedOption === correct ? "✓ Correto!" : `✗ Incorreto. A resposta correta é: ${correct}`}
        </div>
      )}
    </div>
  );
}
