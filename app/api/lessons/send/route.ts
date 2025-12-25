import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createWhatsAppClient } from '@/lib/whatsapp'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { lessonId, classId } = await request.json()

    // Get lesson
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
    })

    if (!lesson || lesson.teacherId !== session.user.id) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })
    }

    // Get teacher's WhatsApp config
    const teacher = await prisma.user.findUnique({
      where: { id: session.user.id },
    })

    if (!teacher?.whatsappPhoneNumberId || !teacher?.whatsappAccessToken) {
      return NextResponse.json(
        { error: 'WhatsApp not configured' },
        { status: 400 }
      )
    }

    // Get students from class
    const students = await prisma.student.findMany({
      where: { 
        classId,
        active: true 
      },
    })

    // Create WhatsApp client
    const whatsapp = createWhatsAppClient(
      teacher.whatsappPhoneNumberId,
      teacher.whatsappAccessToken
    )

    // Send to each student
    const results = await Promise.allSettled(
      students.map(student =>
        whatsapp.sendLessonToStudent(student.phone, {
          title: lesson.title,
          content: lesson.content,
          audioUrl: lesson.audioUrl,
          exerciseQuestion: lesson.exerciseQuestion,
        })
      )
    )

    const successCount = results.filter(r => r.status === 'fulfilled').length
    const failCount = results.filter(r => r.status === 'rejected').length

    // Update lesson status
    await prisma.lesson.update({
      where: { id: lessonId },
      data: {
        status: 'published',
        publishedAt: new Date(),
      },
    })

    return NextResponse.json({
      success: true,
      sent: successCount,
      failed: failCount,
      total: students.length,
    })
  } catch (error) {
    console.error('Error sending lesson:', error)
    return NextResponse.json(
      { error: 'Failed to send lesson' },
      { status: 500 }
    )
  }
}
