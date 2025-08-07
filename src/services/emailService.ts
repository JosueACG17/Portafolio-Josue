import emailjs from '@emailjs/browser'

export interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

export class EmailService {
  static init(): void {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }

  // Enviar email
  static async sendEmail(data: EmailData): Promise<boolean> {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Josue Chan',
        reply_to: data.email,
      }

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
      )

      console.log('Email enviado exitosamente:', response)
      return true
    } catch (error) {
      console.error('Error al enviar email:', error)
      return false
    }
  }
}
