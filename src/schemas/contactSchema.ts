import * as yup from 'yup'

const PATTERNS = {
  NAME: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\-']+$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  SAFE_TEXT: /^[^<>{}[\]\\|`~;()]*$/,
}

const FORBIDDEN_WORDS = [
  // Inglés - spam común
  'viagra', 'casino', 'lottery', 'winner', 'congratulations', 'bitcoin',
  'cryptocurrency', 'investment', 'loan', 'credit', 'porn', 'sex', 'adult',
  'xxx', 'free money', 'make money fast', 'click here', 'urgent', 'act now',
  'limited time',

  // Español - spam y estafas
  'lotería', 'loteria', 'ganador', 'felicidades', 'enhorabuena',
  'dinero gratis', 'gana dinero', 'trabajo desde casa', 'trabaja desde casa',
  'hazte rico', 'inversión', 'inversion', 'prestamo', 'préstamo',
  'tarjeta de crédito', 'tarjeta credito', 'crédito rápido', 'credito rapido',
  'oportunidad única', 'oportunidad unica', 'oferta limitada',
  'haz clic aquí', 'click aquí', 'click aqui',

  // Contenido adulto
  'porno', 'pornografía', 'pornografia', 'sexo', 'sexual', 'erótico', 'erotico',
  'escort', 'prostitución', 'prostitucion',

  // Fraudes y phishing
  'banco', 'cuenta bloqueada', 'clave secreta', 'contraseña', 'password',
  'número de tarjeta', 'numero de tarjeta', 'cvc', 'cvv', 'paypal',

  // Palabras que suelen acompañar a phishing urgente
  'verifica tu cuenta', 'confirmar cuenta', 'restablecer contraseña',
  'código de verificación', 'codigo de verificacion'
]


// Función para detectar spam
const containsForbiddenWords = (text: string): boolean => {
  const lowerText = text.toLowerCase()
  return FORBIDDEN_WORDS.some((word) => lowerText.includes(word))
}

// Función para detectar texto repetitivo (spam)
const isRepetitiveText = (text: string): boolean => {
  const words = text.toLowerCase().split(/\s+/)
  const uniqueWords = new Set(words)
  return words.length > 10 && uniqueWords.size / words.length < 0.3
}

// Schema de validación
export const contactFormSchema = yup.object({
  name: yup
    .string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede tener más de 50 caracteres')
    .matches(PATTERNS.NAME, 'El nombre solo puede contener letras, espacios y guiones')
    .test('no-numbers', 'El nombre no puede contener números', (value) => {
      return value ? !/\d/.test(value) : true
    })
    .test('no-spam', 'El nombre contiene contenido no permitido', (value) => {
      return value ? !containsForbiddenWords(value) : true
    })
    .trim(),

  email: yup
    .string()
    .required('El email es obligatorio')
    .max(100, 'El email no puede tener más de 100 caracteres')
    .matches(PATTERNS.EMAIL, 'Por favor ingresa un email válido')
    .test('no-spam', 'El email contiene contenido no permitido', (value) => {
      return value ? !containsForbiddenWords(value) : true
    })
    .test('safe-domain', 'Dominio de email no válido', (value) => {
      if (!value) return true
      const domain = value.split('@')[1]
      // Evitar dominios temporales comunes de spam
      const spamDomains = ['10minutemail.com', 'tempmail.org', 'guerrillamail.com']
      return !spamDomains.includes(domain?.toLowerCase())
    })
    .trim()
    .lowercase(),

  subject: yup
    .string()
    .required('El asunto es obligatorio')
    .min(5, 'El asunto debe tener al menos 5 caracteres')
    .max(100, 'El asunto no puede tener más de 100 caracteres')
    .matches(PATTERNS.SAFE_TEXT, 'El asunto contiene caracteres no permitidos')
    .test('no-spam', 'El asunto contiene contenido no permitido', (value) => {
      return value ? !containsForbiddenWords(value) : true
    })
    .test('not-repetitive', 'El asunto parece ser spam', (value) => {
      return value ? !isRepetitiveText(value) : true
    })
    .trim(),

  message: yup
    .string()
    .required('El mensaje es obligatorio')
    .min(20, 'El mensaje debe tener al menos 20 caracteres')
    .max(1000, 'El mensaje no puede tener más de 1000 caracteres')
    .test('no-spam', 'El mensaje contiene contenido no permitido', (value) => {
      return value ? !containsForbiddenWords(value) : true
    })
    .test('not-repetitive', 'El mensaje parece ser spam', (value) => {
      return value ? !isRepetitiveText(value) : true
    })
    .test('not-only-symbols', 'El mensaje debe contener texto válido', (value) => {
      if (!value) return true
      const alphanumeric = value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ]/g, '')
      return alphanumeric.length >= 10
    })
    .test('no-urls', 'No se permiten URLs en el mensaje', (value) => {
      if (!value) return true
      const urlPattern = /(https?:\/\/|www\.|[a-zA-Z0-9-]+\.(com|org|net|edu|gov|io|co|me|info))/gi
      return !urlPattern.test(value)
    })
    .trim(),
})

export type ContactFormData = yup.InferType<typeof contactFormSchema>
