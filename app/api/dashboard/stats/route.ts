import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { startOfWeek, endOfWeek } from 'date-fns'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.user.id

    // Get active students count
    const classes = await prisma.class.findMany({
      where: { teacherId: userId },
      include: {
        students: {
          where: { active: true }
        }
      }
    })

    const activeStudents = classes.reduce((acc, cls) => acc + cls.students.length, 0)

    // Get lessons sent this week
    const startDate = startOfWeek(new Date())
    const endDate = endOfWeek(new Date())

    const lessonsThisWeek = await prisma.lesson.count({
      where: {
        teacherId: userId,
        status: 'published',
        publishedAt: {
          gte: startDate,
          lte: endDate,
        }
      }
    })

    // Get pending responses
    const pendingResponses = await prisma.response.count({
      where: {
        lesson: {
          teacherId: userId
        },
        corrected: false
      }
    })

    return NextResponse.json({
      activeStudents,
      lessonsThisWeek,
      pendingResponses,
    })
  } catch (error) {
    console.error('Dashboard stats error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
