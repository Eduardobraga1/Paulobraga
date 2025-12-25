"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Mic, Square, Play, Pause, Trash2, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AudioRecorderProps {
  onAudioReady: (audioBlob: Blob, audioUrl: string) => void
  existingAudioUrl?: string | null
}

export function AudioRecorder({ onAudioReady, existingAudioUrl }: AudioRecorderProps) {
  const { toast } = useToast()
  const [isRecording, setIsRecording] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(existingAudioUrl || null)
  const [isPlaying, setIsPlaying] = useState(false)
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' })
        const url = URL.createObjectURL(audioBlob)
        setAudioUrl(url)
        onAudioReady(audioBlob, url)
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error('Error accessing microphone:', error)
      toast({
        title: "Erro ao acessar microfone",
        description: "Verifique as permissões do navegador",
        variant: "destructive",
      })
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const togglePlayback = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setAudioUrl(url)
      onAudioReady(file, url)
    }
  }

  const clearAudio = () => {
    setAudioUrl(null)
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
  }

  return (
    <div className="space-y-4">
      {!audioUrl ? (
        <div className="flex gap-4">
          {!isRecording ? (
            <>
              <Button
                type="button"
                onClick={startRecording}
                variant="outline"
                className="flex-1"
              >
                <Mic className="mr-2 h-4 w-4" />
                Gravar Áudio
              </Button>
              
              <div className="flex-1">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="audio-upload"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => document.getElementById('audio-upload')?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Fazer Upload
                </Button>
              </div>
            </>
          ) : (
            <Button
              type="button"
              onClick={stopRecording}
              variant="destructive"
              className="flex-1"
            >
              <Square className="mr-2 h-4 w-4" />
              Parar Gravação
            </Button>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-4 p-4 border rounded-lg bg-muted/50">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={togglePlayback}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          
          <div className="flex-1">
            <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/3 rounded-full" />
            </div>
          </div>
          
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={clearAudio}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      )}

      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onEnded={() => setIsPlaying(false)}
          className="hidden"
        />
      )}

      {isRecording && (
        <div className="flex items-center gap-2 text-red-500">
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-sm font-medium">Gravando...</span>
        </div>
      )}
    </div>
  )
}
