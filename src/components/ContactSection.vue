<template>
  <section id="contacto" class="py-20 relative">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-blue-800/10"></div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-5xl font-bold text-white mb-6">
          ¡Trabajemos <span
            class="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Juntos!</span>
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto">
          ¿Tienes una idea increíble? Me encantaría ayudarte a hacerla realidad
        </p>
      </div>

      <div class="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl">
        <form @submit.prevent="submitForm" class="space-y-8">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-300 mb-3">Nombre Completo</label>
              <input v-model="form.name" type="text" required
                class="w-full px-6 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Tu nombre completo">
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-300 mb-3">Email</label>
              <input v-model="form.email" type="email" required
                class="w-full px-6 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="tu@email.com">
            </div>
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-semibold text-slate-300 mb-3">Asunto</label>
            <input v-model="form.subject" type="text" required
              class="w-full px-6 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="¿De qué quieres hablar?">
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-semibold text-slate-300 mb-3">Mensaje</label>
            <textarea v-model="form.message" rows="6" required
              class="w-full px-6 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Cuéntame sobre tu proyecto increíble..."></textarea>
          </div>

          <div class="text-center">
            <button type="submit" :disabled="isSubmitting"
              class="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 disabled:transform-none disabled:shadow-none">
              {{ isSubmitting ? 'Enviando...' : ' Enviar Mensaje' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const isSubmitting = ref(false)

const form = ref<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form.value)

    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    alert('¡Mensaje enviado correctamente! 🚀 Te contactaré muy pronto.')
  } catch (error) {
    console.error('Error:', error)
    alert('Error al enviar el mensaje. Por favor, intenta de nuevo.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
