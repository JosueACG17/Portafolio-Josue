<template>
  <section id="contacto" class="py-20 relative">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-blue-800/10"></div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-5xl font-bold text-white mb-6">
          ¡Trabajemos <span
            class="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Juntos!</span>
        </h2>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto">
          ¿Tienes una idea increíble? Me encantaría ayudarte a hacerla realidad
        </p>
      </div>

      <div class="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl">
        <!-- Pantalla de éxito -->
        <div v-if="showSuccessScreen" class="text-center space-y-8">
          <div class="space-y-6">
            <!-- Animación de éxito -->
            <div
              class="mx-auto w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center animate-pulse">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>

            <!-- Mensaje principal -->
            <div class="space-y-4">
              <h3 class="text-4xl font-bold text-white">
                ¡Mensaje Enviado!
              </h3>
              <p class="text-xl text-slate-300 max-w-lg mx-auto">
                Tu mensaje ha sido enviado exitosamente. Te contactaré muy pronto para conversar sobre tu proyecto.
              </p>
            </div>

            <!-- Información del rate limiting -->
            <div class="bg-blue-900/30 border border-blue-700 rounded-xl p-6 max-w-md mx-auto">
              <div class="flex items-center justify-center space-x-3 mb-3">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h4 class="text-lg font-semibold text-blue-400">Formulario bloqueado temporalmente</h4>
              </div>
              <p class="text-blue-300 text-sm">
                El formulario estará disponible nuevamente en:
              </p>
              <p class="text-blue-100 font-bold text-lg mt-2">
                {{ formatTimeRemaining(timeUntilNextSubmit) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Formulario normal -->
        <div v-else>
          <form @submit="onSubmit" class="space-y-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-1">
                <label class="block text-sm font-semibold text-slate-300 mb-3">Nombre Completo</label>
                <input v-model="name" v-bind="nameAttrs" type="text"
                  class="w-full px-6 py-4 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300"
                  :class="[
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-600 focus:ring-blue-500 focus:border-transparent'
                  ]" placeholder="Tu nombre completo">
                <div v-if="errors.name" class="flex items-center space-x-2 mt-2">
                  <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p class="text-red-400 text-sm">{{ errors.name }}</p>
                </div>
              </div>

              <div class="space-y-1">
                <label class="block text-sm font-semibold text-slate-300 mb-3">Email</label>
                <input v-model="email" v-bind="emailAttrs" type="email"
                  class="w-full px-6 py-4 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300"
                  :class="[
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-600 focus:ring-blue-500 focus:border-transparent'
                  ]" placeholder="tu@email.com">
                <div v-if="errors.email" class="flex items-center space-x-2 mt-2">
                  <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p class="text-red-400 text-sm">{{ errors.email }}</p>
                </div>
              </div>
            </div>

            <div class="space-y-1">
              <label class="block text-sm font-semibold text-slate-300 mb-3">Asunto</label>
              <input v-model="subject" v-bind="subjectAttrs" type="text"
                class="w-full px-6 py-4 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300"
                :class="[
                  errors.subject
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-slate-600 focus:ring-blue-500 focus:border-transparent'
                ]" placeholder="¿De qué quieres hablar?">
              <div v-if="errors.subject" class="flex items-center space-x-2 mt-2">
                <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="text-red-400 text-sm">{{ errors.subject }}</p>
              </div>
            </div>

            <div class="space-y-1">
              <label class="block text-sm font-semibold text-slate-300 mb-3">
                Mensaje
                <span class="text-slate-500 text-xs font-normal ml-2">({{ messageLength }}/1000 caracteres)</span>
              </label>
              <textarea v-model="message" v-bind="messageAttrs" rows="6"
                class="w-full px-6 py-4 bg-slate-700/50 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                :class="[
                  errors.message
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-slate-600 focus:ring-blue-500 focus:border-transparent'
                ]" placeholder="Cuéntame sobre tu proyecto increíble..."></textarea>
              <div v-if="errors.message" class="flex items-center space-x-2 mt-2">
                <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="text-red-400 text-sm">{{ errors.message }}</p>
              </div>
            </div>

            <div class="text-center">
              <!-- Resumen de validación -->
              <div v-if="meta.dirty && !meta.valid" class="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-xl ">
                <div class="flex items-center justify-center space-x-2 ">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p class="text-red-300 text-sm font-semibold">
                    Por favor corrige los errores antes de enviar
                  </p>
                </div>
              </div>

              <!-- Mensaje de rate limiting cuando no se puede enviar -->
              <div v-if="!canSubmitForm" class="mb-6 p-4 bg-amber-900/30 border border-amber-700 rounded-xl">
                <div class="flex items-center justify-center space-x-2 mb-2">
                  <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p class="text-amber-300 text-sm font-semibold">
                    Este formulario está temporalmente bloqueado.
                  </p>
                </div>
                <p class="text-amber-400 font-bold">
                  Podrás enviar otro mensaje en: {{ formatTimeRemaining(timeUntilNextSubmit) }}
                </p>
              </div>

              <button type="submit" :disabled="isSubmitting || !canSubmitForm || !isFormValid"
                class="cursor-pointer relative overflow-hidden group w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 disabled:transform-none disabled:shadow-none disabled:cursor-not-allowed border border-blue-400/20 hover:border-blue-300/40 disabled:border-slate-600">
                <!-- Efecto de brillo animado -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                </div>
                <!-- Contenido del botón -->
                <div class="relative flex items-center justify-center space-x-3 ">
                  <span v-if="isSubmitting" class="flex items-center space-x-3">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                      </path>
                    </svg>
                    <span class="font-semibold">Enviando mensaje...</span>
                  </span>

                  <span v-else-if="!canSubmitForm" class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                      </path>
                    </svg>
                    <span class="font-semibold">Formulario Bloqueado</span>
                  </span>

                  <span v-else-if="!isFormValid && meta.dirty" class="flex items-center space-x-3">
                    <svg class="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="font-semibold">Corrige los errores</span>
                  </span>

                  <span v-else class="flex items-center space-x-3">
                    <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                    <span class="font-semibold">Enviar Mensaje</span>
                  </span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { EmailService, type EmailData } from '../services/emailService'
import { ContactRateLimit } from '../utils/cookies'
import { contactFormSchema, type ContactFormData } from '../schemas/contactSchema'

const isSubmitting = ref(false)
const canSubmitForm = ref(true)
const timeUntilNextSubmit = ref(0)
const showSuccessScreen = ref(false)
let countdownInterval: number | null = null

// Configuración de Vee-Validate
const {
  defineField,
  handleSubmit,
  errors,
  meta,
  resetForm
} = useForm<ContactFormData>({
  validationSchema: toTypedSchema(contactFormSchema),
  initialValues: {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
})

// Campos del formulario
const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [subject, subjectAttrs] = defineField('subject')
const [message, messageAttrs] = defineField('message')

// Computed properties
const isFormValid = computed(() => {
  return meta.value.valid && meta.value.dirty
})

const messageLength = computed(() => {
  return message.value?.length || 0
})

// Función para actualizar el estado del formulario
const updateFormState = () => {
  canSubmitForm.value = ContactRateLimit.canSubmit()
  timeUntilNextSubmit.value = ContactRateLimit.getTimeUntilNextSubmit()
}

// Función para iniciar el countdown
const startCountdown = () => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }

  countdownInterval = setInterval(() => {
    updateFormState()
    if (canSubmitForm.value) {
      clearInterval(countdownInterval!)
      countdownInterval = null
      if (showSuccessScreen.value) {
        showSuccessScreen.value = false
      }
    }
  }, 1000)
}

// Handle form submission con validación
const onSubmit = handleSubmit(async (values: ContactFormData) => {
  if (!canSubmitForm.value) {
    return
  }

  isSubmitting.value = true

  try {
    // Preparar datos para EmailJS (ya están validados por Yup)
    const emailData: EmailData = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message
    }

    // Enviar email
    const success = await EmailService.sendEmail(emailData)

    if (success) {
      ContactRateLimit.markSubmission()
      updateFormState()
      showSuccessScreen.value = true
      if (!canSubmitForm.value) {
        startCountdown()
      }

      // Reset form
      resetForm()
    } else {
      throw new Error('Error al enviar el email')
    }
  } catch (error) {
    console.error('Error:', error)
    alert('❌ Error al enviar el mensaje. Por favor, verifica tu conexión e intenta de nuevo.')
  } finally {
    isSubmitting.value = false
  }
})

// Formatear tiempo restante
const formatTimeRemaining = (minutes: number): string => {
  if (minutes <= 0) return ''

  const mins = Math.floor(minutes)
  const secs = Math.floor((minutes - mins) * 60)

  if (mins === 0) {
    return `${secs} segundos`
  } else if (secs === 0) {
    return `${mins} minuto${mins > 1 ? 's' : ''}`
  } else {
    return `${mins} minuto${mins > 1 ? 's' : ''} y ${secs} segundos`
  }
}

onMounted(() => {
  updateFormState()
  if (!canSubmitForm.value) {
    showSuccessScreen.value = true
    startCountdown()
  }
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>
