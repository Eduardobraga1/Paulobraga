import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await prisma.response.update({
      where: {
        id: params.id,
        lesson: {
          teacherId: session.user.id
        }
      },
      data: {
        corrected: true,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error marking as corrected:', error)
    return NextResponse.json(
      { error: 'Failed to mark as corrected' },
      { status: 500 }
    )
  }
}
