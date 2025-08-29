<template>
  <section id="inicio" class="pt-16 min-h-screen flex items-center relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-slate-900"></div>
    <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000">
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="space-y-6">
            <div class="inline-block">
              <span
                class="inline-flex items-center bg-blue-600/20 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full border border-blue-400/30 shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                Disponible para proyectos
              </span>
            </div>
            <h1 class="text-3xl md:text-5xl font-black leading-tight">
              <span class="text-white">Hola, soy Josue Chan</span>
              <br>
              <span class="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Desarrollador de Software
              </span>
            </h1>

            <div class="text-2xl md:text-3xl text-blue-100 font-light h-12 flex items-center">
              <span>{{ currentText }}</span>
              <span class="ml-1 animate-ping text-blue-400">|</span>
            </div>
          </div>

          <p class="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Creo experiencias digitales increíbles que combinan diseño elegante
            con código limpio y funcionalidad excepcional. ¡Hagamos algo genial juntos!
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <button @click="scrollTo('proyectos')"
              class="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              Ver Mis Proyectos
            </button>
            <button @click="scrollTo('contacto')"
              class="cursor-pointer border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105">
              Contactame
            </button>
            <a href="/CV_JosueCG.pdf" download
              class="cursor-pointer border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 16v-8m0 8l-4-4m4 4l4-4m-8 8h8a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Descargar CV
            </a>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <!-- Círculo de fondo con gradiente -->
            <div
              class="absolute inset-0 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-400 rounded-full opacity-90 blur-sm">
            </div>

            <!-- Imagen principal -->
            <div
              class="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
              <img src="@/assets/img/yo.jpg" alt="Foto de perfil profesional"
                class="w-full h-full object-cover filter brightness-110 contrast-105" />
            </div>

            <!-- Elementos decorativos flotantes -->
            <div
              class="absolute -top-6 -left-6 w-16 h-16 bg-yellow-500/20 rounded-2xl backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center transform rotate-12 animate-pulse">
              <div class="w-6 h-6 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span class="text-white text-sm font-bold">JS</span>
              </div>
            </div>

            <div
              class="absolute -bottom-4 -right-8 w-14 h-14 bg-green-500/20 rounded-xl backdrop-blur-sm border border-green-400/30 flex items-center justify-center transform -rotate-12 animate-bounce">
              <div class="w-8 h-8 bg-green-500/70 rounded-md flex items-center justify-center p-1">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js"
                  class="w-full h-full object-contain" />
              </div>
            </div>

            <div
              class="absolute top-8 -right-4 w-12 h-12 bg-blue-500/20 rounded-lg backdrop-blur-sm border border-blue-400/30 flex items-center justify-center transform rotate-45 animate-pulse delay-500">
              <div class="w-6 h-6 bg-blue-500/80 rounded-sm flex items-center justify-center p-1">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"
                  class="w-full h-full object-contain" />
              </div>
            </div>

            <!-- Líneas decorativas -->
            <div
              class="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent">
            </div>
            <div
              class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const currentText = ref('')

// Typewriter effect
const phrases = [
  'Desarrollador Mobile ',
  'Desarrollador Frontend ',
  'Desarrollador UI/UX ',
  'Solucionador de Problemas ',
  'Apasionado por la Tecnología ',
]

let phraseIndex = 0
let charIndex = 0
let isDeleting = false

const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const typeWriter = () => {
  const currentPhrase = phrases[phraseIndex]

  if (isDeleting) {
    currentText.value = currentPhrase.substring(0, charIndex - 1)
    charIndex--
  } else {
    currentText.value = currentPhrase.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = 100

  if (isDeleting) {
    typeSpeed /= 2
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    phraseIndex = (phraseIndex + 1) % phrases.length
  }

  setTimeout(typeWriter, typeSpeed)
}

onMounted(() => {
  typeWriter()
})
</script>
