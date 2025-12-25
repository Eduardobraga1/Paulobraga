"use client";

import { use } from "react";
import { allLessons } from "@/lib/data/allLessons";
import { LessonView } from "@/components/LessonView";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const lesson = allLessons.find((l) => l.id === resolvedParams.id);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>Lição não encontrada</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push("/learn")} className="w-full">
              Voltar ao Menu
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <LessonView lesson={lesson} />;
}
