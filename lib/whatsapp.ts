import axios from 'axios'

const WHATSAPP_API_URL = 'https://graph.facebook.com/v18.0'

export interface WhatsAppMessage {
  to: string
  type: 'text' | 'audio'
  text?: {
    body: string
  }
  audio?: {
    link: string
  }
}

export class WhatsAppClient {
  private phoneNumberId: string
  private accessToken: string

  constructor(phoneNumberId: string, accessToken: string) {
    this.phoneNumberId = phoneNumberId
    this.accessToken = accessToken
  }

  async sendMessage(message: WhatsAppMessage) {
    try {
      const response = await axios.post(
        `${WHATSAPP_API_URL}/${this.phoneNumberId}/messages`,
        {
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: message.to,
          type: message.type,
          ...(message.type === 'text' && { text: message.text }),
          ...(message.type === 'audio' && { audio: message.audio }),
        },
        {
          headers: {
            'Authorization': `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      )
      return response.data
    } catch (error: any) {
      console.error('WhatsApp API Error:', error.response?.data || error.message)
      throw new Error('Failed to send WhatsApp message')
    }
  }

  async sendTextMessage(to: string, text: string) {
    return this.sendMessage({
      to,
      type: 'text',
      text: { body: text },
    })
  }

  async sendAudioMessage(to: string, audioUrl: string) {
    return this.sendMessage({
      to,
      type: 'audio',
      audio: { link: audioUrl },
    })
  }

  async sendLessonToStudent(
    to: string,
    lesson: {
      title: string
      content: string
      audioUrl?: string | null
      exerciseQuestion: string
    }
  ) {
    // Send lesson text
    const lessonText = `📚 *${lesson.title}*\n\n${lesson.content}\n\n📝 *Exercise:*\n${lesson.exerciseQuestion}`
    await this.sendTextMessage(to, lessonText)

    // Send audio if available
    if (lesson.audioUrl) {
      await this.sendAudioMessage(to, lesson.audioUrl)
    }
  }
}

export function createWhatsAppClient(
  phoneNumberId: string,
  accessToken: string
): WhatsAppClient {
  return new WhatsAppClient(phoneNumberId, accessToken)
}
