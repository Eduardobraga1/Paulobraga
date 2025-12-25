import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create a demo teacher
  const hashedPassword = await bcrypt.hash('demo123', 10)
  
  const teacher = await prisma.user.upsert({
    where: { email: 'teacher@educlass.com' },
    update: {},
    create: {
      email: 'teacher@educlass.com',
      name: 'Professor Demo',
      password: hashedPassword,
      whatsappVerified: false,
    },
  })

  console.log('✅ Created teacher:', teacher.email)

  // Create a demo class
  const demoClass = await prisma.class.upsert({
    where: { id: 'demo-class-1' },
    update: {},
    create: {
      id: 'demo-class-1',
      name: 'Turma Iniciante - Seg/Qua 20h',
      description: 'Turma para alunos iniciantes no inglês',
      schedule: 'Segunda e Quarta às 20h',
      teacherId: teacher.id,
    },
  })

  console.log('✅ Created class:', demoClass.name)

  // Create demo students
  const student1 = await prisma.student.upsert({
    where: { 
      phone_classId: {
        phone: '+5511999990001',
        classId: demoClass.id
      }
    },
    update: {},
    create: {
      name: 'Maria Silva',
      phone: '+5511999990001',
      level: 'Beginner',
      classId: demoClass.id,
      active: true,
    },
  })

  const student2 = await prisma.student.upsert({
    where: { 
      phone_classId: {
        phone: '+5511999990002',
        classId: demoClass.id
      }
    },
    update: {},
    create: {
      name: 'João Santos',
      phone: '+5511999990002',
      level: 'Beginner',
      classId: demoClass.id,
      active: true,
    },
  })

  console.log('✅ Created students:', student1.name, 'and', student2.name)

  // Create a demo lesson
  const lesson = await prisma.lesson.create({
    data: {
      title: 'Lesson 1: Greetings and Introductions',
      content: `# Welcome to your first English lesson!

## Greetings

Here are some common greetings in English:

- **Hello!** - Olá!
- **Hi!** - Oi!
- **Good morning!** - Bom dia!
- **Good afternoon!** - Boa tarde!
- **Good evening!** - Boa noite!

## Introducing yourself

When you meet someone, you can say:

- **My name is...** - Meu nome é...
- **I am from...** - Eu sou de...
- **Nice to meet you!** - Prazer em conhecê-lo!

## Practice

Try to introduce yourself using these phrases!`,
      exerciseType: 'text',
      exerciseQuestion: 'Please introduce yourself in English. Tell me your name and where you are from.',
      exerciseAnswer: 'My name is [name]. I am from [city/country]. Nice to meet you!',
      status: 'draft',
      teacherId: teacher.id,
      classId: demoClass.id,
    },
  })

  console.log('✅ Created lesson:', lesson.title)

  console.log('🎉 Seeding completed!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
