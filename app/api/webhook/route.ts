import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN

  if (mode === 'subscribe' && token === verifyToken) {
    console.log('Webhook verified')
    return new NextResponse(challenge, { status: 200 })
  }

  return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // WhatsApp sends webhook events in this format
    const entry = body.entry?.[0]
    const changes = entry?.changes?.[0]
    const value = changes?.value

    if (!value?.messages) {
      return NextResponse.json({ success: true })
    }

    const message = value.messages[0]
    const from = message.from // Student's phone number
    const messageType = message.type // 'text' or 'audio'

    // Find student by phone number
    const student = await prisma.student.findFirst({
      where: { phone: `+${from}` },
      include: {
        class: {
          include: {
            lessons: {
              where: { status: 'published' },
              orderBy: { publishedAt: 'desc' },
              take: 1,
            }
          }
        }
      }
    })

    if (!student || !student.class.lessons[0]) {
      console.log('Student or active lesson not found')
      return NextResponse.json({ success: true })
    }

    const latestLesson = student.class.lessons[0]

    // Extract content based on message type
    let content: string | null = null
    let audioUrl: string | null = null

    if (messageType === 'text') {
      content = message.text?.body
    } else if (messageType === 'audio') {
      audioUrl = message.audio?.id // You would need to download this using WhatsApp API
    }

    // Save response
    await prisma.response.create({
      data: {
        type: messageType,
        content,
        audioUrl,
        lessonId: latestLesson.id,
        studentId: student.id,
      },
    })

    console.log(`Response saved from ${student.name} for lesson ${latestLesson.title}`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ success: true }) // Always return 200 to WhatsApp
  }
}
