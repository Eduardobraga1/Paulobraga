import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const lessons = await prisma.lesson.findMany({
      where: { teacherId: session.user.id },
      include: {
        class: {
          select: {
            name: true,
          }
        }
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(lessons)
  } catch (error) {
    console.error('Error fetching lessons:', error)
    return NextResponse.json(
      { error: 'Failed to fetch lessons' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()

    const lesson = await prisma.lesson.create({
      data: {
        title: data.title,
        content: data.content,
        audioUrl: data.audioUrl,
        exerciseType: data.exerciseType,
        exerciseQuestion: data.exerciseQuestion,
        exerciseAnswer: data.exerciseAnswer,
        status: data.status || 'draft',
        publicLink: data.publicLink || false,
        publishedAt: data.status === 'published' ? new Date() : null,
        teacherId: session.user.id,
        classId: data.classId || null,
      },
    })

    return NextResponse.json(lesson, { status: 201 })
  } catch (error) {
    console.error('Error creating lesson:', error)
    return NextResponse.json(
      { error: 'Failed to create lesson' },
      { status: 500 }
    )
  }
}
