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

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        whatsappPhoneNumberId: true,
        whatsappAccessToken: true,
        whatsappVerified: true,
      }
    })

    return NextResponse.json({
      phoneNumberId: user?.whatsappPhoneNumberId || '',
      accessToken: user?.whatsappAccessToken ? '****' : '',
      verified: user?.whatsappVerified || false,
    })
  } catch (error) {
    console.error('Error fetching WhatsApp config:', error)
    return NextResponse.json(
      { error: 'Failed to fetch config' },
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

    const { phoneNumberId, accessToken } = await request.json()

    const updateData: any = {
      whatsappPhoneNumberId: phoneNumberId,
      whatsappVerified: true,
    }

    // Only update token if provided (not masked)
    if (accessToken && accessToken !== '****') {
      updateData.whatsappAccessToken = accessToken
    }

    await prisma.user.update({
      where: { id: session.user.id },
      data: updateData,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving WhatsApp config:', error)
    return NextResponse.json(
      { error: 'Failed to save config' },
      { status: 500 }
    )
  }
}
