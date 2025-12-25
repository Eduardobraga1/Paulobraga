"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";

interface MatchingExerciseProps {
  question: string;
  pairs: Array<{ pt: string; en: string }>;
  onAnswer: (isCorrect: boolean) => void;
}

export function MatchingExercise({
  question,
  pairs,
  onAnswer,
}: MatchingExerciseProps) {
  const [selectedPt, setSelectedPt] = useState<number | null>(null);
  const [selectedEn, setSelectedEn] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [wrongMatch, setWrongMatch] = useState<{ pt: number; en: number } | null>(null);

  // Shuffle arrays for variety
  const [ptItems] = useState(() => 
    pairs.map((p, i) => ({ text: p.pt, index: i })).sort(() => Math.random() - 0.5)
  );
  const [enItems] = useState(() => 
    pairs.map((p, i) => ({ text: p.en, index: i })).sort(() => Math.random() - 0.5)
  );

  const handlePtClick = (index: number) => {
    if (matched.has(index)) return;
    setSelectedPt(index);
    
    if (selectedEn !== null) {
      checkMatch(index, selectedEn);
    }
  };

  const handleEnClick = (index: number) => {
    if (matched.has(index)) return;
    setSelectedEn(index);
    
    if (selectedPt !== null) {
      checkMatch(selectedPt, index);
    }
  };

  const checkMatch = (ptIndex: number, enIndex: number) => {
    if (ptIndex === enIndex) {
      // Correct match!
      setMatched(new Set([...matched, ptIndex]));
      setSelectedPt(null);
      setSelectedEn(null);
      
      // Check if all matched
      if (matched.size + 1 === pairs.length) {
        setTimeout(() => {
          onAnswer(true);
        }, 500);
      }
    } else {
      // Wrong match
      setWrongMatch({ pt: ptIndex, en: enIndex });
      setTimeout(() => {
        setWrongMatch(null);
        setSelectedPt(null);
        setSelectedEn(null);
      }, 800);
    }
  };

  const getCardStyle = (index: number, type: "pt" | "en") => {
    if (matched.has(index)) {
      return "border-green-500 bg-green-50 opacity-60";
    }
    
    if (type === "pt") {
      if (wrongMatch?.pt === index) return "border-red-500 bg-red-50";
      if (selectedPt === index) return "border-blue-500 bg-blue-50 ring-2 ring-blue-200";
    } else {
      if (wrongMatch?.en === index) return "border-red-500 bg-red-50";
      if (selectedEn === index) return "border-blue-500 bg-blue-50 ring-2 ring-blue-200";
    }
    
    return "border-slate-200 hover:border-slate-300";
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{question}</h2>
        <p className="text-muted-foreground">Clique nos pares correspondentes</p>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm">
          <Shuffle className="h-4 w-4" />
          <span>{matched.size} / {pairs.length} combinados</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Portuguese Column */}
        <div className="space-y-2">
          <h3 className="font-semibold text-center mb-3">Português</h3>
          {ptItems.map((item, i) => (
            <Card
              key={i}
              className={`cursor-pointer transition-all p-4 text-center ${getCardStyle(
                item.index,
                "pt"
              )}`}
              onClick={() => handlePtClick(item.index)}
            >
              {item.text}
            </Card>
          ))}
        </div>

        {/* English Column */}
        <div className="space-y-2">
          <h3 className="font-semibold text-center mb-3">English</h3>
          {enItems.map((item, i) => (
            <Card
              key={i}
              className={`cursor-pointer transition-all p-4 text-center ${getCardStyle(
                item.index,
                "en"
              )}`}
              onClick={() => handleEnClick(item.index)}
            >
              {item.text}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
