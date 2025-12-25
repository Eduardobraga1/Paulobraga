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

    const students = await prisma.student.findMany({
      where: {
        class: {
          teacherId: session.user.id
        }
      },
      include: {
        class: {
          select: {
            name: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(students)
  } catch (error) {
    console.error('Error fetching students:', error)
    return NextResponse.json(
      { error: 'Failed to fetch students' },
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

    // Verify class belongs to teacher
    const classRoom = await prisma.class.findFirst({
      where: {
        id: data.classId,
        teacherId: session.user.id
      }
    })

    if (!classRoom) {
      return NextResponse.json({ error: 'Class not found' }, { status: 404 })
    }

    const student = await prisma.student.create({
      data: {
        name: data.name,
        phone: data.phone,
        level: data.level,
        classId: data.classId,
        active: true,
      },
    })

    return NextResponse.json(student, { status: 201 })
  } catch (error) {
    console.error('Error creating student:', error)
    return NextResponse.json(
      { error: 'Failed to create student' },
      { status: 500 }
    )
  }
}
