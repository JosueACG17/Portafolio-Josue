<template>
  <nav class="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0">
          <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Portafolio Josue Chan
          </h1>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="#inicio" @click="scrollTo('inicio')"
              class="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-500/10">
              Inicio
            </a>
            <a href="#sobre-mi" @click="scrollTo('sobre-mi')"
              class="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-500/10">
              Sobre Mí
            </a>
            <a href="#proyectos" @click="scrollTo('proyectos')"
              class="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-500/10">
              Proyectos
            </a>
            <a href="#contacto" @click="scrollTo('contacto')"
              class="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-500/10">
              Contacto
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <button @click="toggleMobileMenu" class="md:hidden text-white hover:text-blue-400 transition-colors">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-blue-500/20">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#inicio" @click="scrollTo('inicio')"
          class="text-slate-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-blue-500/10">
          Inicio
        </a>
        <a href="#sobre-mi" @click="scrollTo('sobre-mi')"
          class="text-slate-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-blue-500/10">
          Sobre Mí
        </a>
        <a href="#proyectos" @click="scrollTo('proyectos')"
          class="text-slate-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-blue-500/10">
          Proyectos
        </a>
        <a href="#contacto" @click="scrollTo('contacto')"
          class="text-slate-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-blue-500/10">
          Contacto
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  mobileMenuOpen.value = false
}
</script>
