import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createWhatsAppClient } from '@/lib/whatsapp'

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { feedback } = await request.json()

    // Get response with student info
    const response = await prisma.response.findFirst({
      where: {
        id: params.id,
        lesson: {
          teacherId: session.user.id
        }
      },
      include: {
        student: true,
        lesson: {
          select: {
            title: true
          }
        }
      }
    })

    if (!response) {
      return NextResponse.json({ error: 'Response not found' }, { status: 404 })
    }

    // Update response with feedback
    await prisma.response.update({
      where: { id: params.id },
      data: {
        feedback,
        feedbackSent: true,
        corrected: true,
      },
    })

    // Get teacher's WhatsApp config
    const teacher = await prisma.user.findUnique({
      where: { id: session.user.id },
    })

    if (teacher?.whatsappPhoneNumberId && teacher?.whatsappAccessToken) {
      // Send feedback via WhatsApp
      const whatsapp = createWhatsAppClient(
        teacher.whatsappPhoneNumberId,
        teacher.whatsappAccessToken
      )

      const message = `📝 *Feedback - ${response.lesson.title}*\n\n${feedback}`

      await whatsapp.sendTextMessage(response.student.phone, message)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending feedback:', error)
    return NextResponse.json(
      { error: 'Failed to send feedback' },
      { status: 500 }
    )
  }
}
