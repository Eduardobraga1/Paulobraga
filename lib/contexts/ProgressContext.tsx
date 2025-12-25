"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface UserProgress {
  xp: number;
  hearts: number;
  streak: number;
  completedLessons: string[];
  lessonProgress: {
    [lessonId: string]: {
      currentExercise: number;
      completed: boolean;
      score: number;
    };
  };
}

interface ProgressContextType {
  progress: UserProgress;
  updateXP: (amount: number) => void;
  loseHeart: () => void;
  resetHearts: () => void;
  completeLesson: (lessonId: string, earnedXP: number) => void;
  updateLessonProgress: (lessonId: string, exerciseIndex: number) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  canAccessLesson: (lessonId: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>({
    xp: 0,
    hearts: 5,
    streak: 0,
    completedLessons: [],
    lessonProgress: {},
  });

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("medical-english-progress");
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("medical-english-progress", JSON.stringify(progress));
  }, [progress]);

  const updateXP = (amount: number) => {
    setProgress((prev) => ({
      ...prev,
      xp: prev.xp + amount,
    }));
  };

  const loseHeart = () => {
    setProgress((prev) => ({
      ...prev,
      hearts: Math.max(0, prev.hearts - 1),
    }));
  };

  const resetHearts = () => {
    setProgress((prev) => ({
      ...prev,
      hearts: 5,
    }));
  };

  const completeLesson = (lessonId: string, earnedXP: number) => {
    setProgress((prev) => ({
      ...prev,
      xp: prev.xp + earnedXP,
      completedLessons: [...new Set([...prev.completedLessons, lessonId])],
      lessonProgress: {
        ...prev.lessonProgress,
        [lessonId]: {
          currentExercise: 0,
          completed: true,
          score: 100,
        },
      },
    }));
  };

  const updateLessonProgress = (lessonId: string, exerciseIndex: number) => {
    setProgress((prev) => ({
      ...prev,
      lessonProgress: {
        ...prev.lessonProgress,
        [lessonId]: {
          currentExercise: exerciseIndex,
          completed: false,
          score: 0,
        },
      },
    }));
  };

  const isLessonCompleted = (lessonId: string) => {
    return progress.completedLessons.includes(lessonId);
  };

  const canAccessLesson = (lessonId: string) => {
    // Extract category and number from lessonId (e.g., "anatomy-2" -> "anatomy", 2)
    const match = lessonId.match(/^([a-z]+)-(\d+)$/);
    if (!match) return true;

    const [, category, numStr] = match;
    const num = parseInt(numStr);

    // First lesson of each category is always accessible
    if (num === 1) return true;

    // Check if previous lesson in the same category is completed
    const previousLessonId = `${category}-${num - 1}`;
    return isLessonCompleted(previousLessonId);
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        updateXP,
        loseHeart,
        resetHearts,
        completeLesson,
        updateLessonProgress,
        isLessonCompleted,
        canAccessLesson,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return context;
}
