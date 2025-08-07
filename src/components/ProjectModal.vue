<template>
  <div v-if="project" class="fixed inset-0 z-50 overflow-y-auto" @click="$emit('close')">
    <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
      <div class="fixed inset-0 bg-slate-950/90 backdrop-blur-xl transition-opacity"></div>

      <div
        class="inline-block w-full max-w-6xl p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-slate-800/95 backdrop-blur-xl shadow-2xl rounded-3xl border border-slate-700"
        @click.stop>
        <div class="flex justify-between items-start mb-8">
          <div>
            <h3 class="text-4xl font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-slate-400 text-lg">{{ project.description }}</p>
          </div>
          <button @click="$emit('close')"
            class="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-xl cursor-pointer">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div v-for="(screenshot, index) in project.screenshots" :key="index" class="space-y-4 group">
            <div class="relative overflow-hidden rounded-2xl">
              <img :src="screenshot.image" :alt="screenshot.title"
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            <div>
              <h4 class="text-xl font-bold text-white mb-2">{{ screenshot.title }}</h4>
              <p class="text-slate-400 leading-relaxed">{{ screenshot.description }}</p>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h4 class="text-2xl font-bold text-white mb-4">Descripción Completa</h4>
            <p class="text-slate-300 text-lg leading-relaxed">{{ project.fullDescription }}</p>
          </div>

          <div>
            <h4 class="text-xl font-bold text-white mb-4">Tecnologías Utilizadas</h4>
            <div class="flex flex-wrap gap-3">
              <div v-for="tech in project.technologies" :key="tech"
                class="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 rounded-xl text-sm font-semibold border border-blue-500/30">
                <img :src="getTechIcon(tech)" :alt="tech" class="w-4 h-4" />
                <span>{{ tech }}</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 pt-6">
            <a :href="project.github" target="_blank"
              class="flex items-center justify-center space-x-3 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Ver Código</span>
            </a>
            <a :href="project.demo" target="_blank"
              class="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Ver Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Screenshot {
  image: string
  title: string
  description: string
}

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  screenshots: Screenshot[]
  technologies: string[]
  github: string
  demo: string
}

defineProps<{
  project: Project | null
}>()

defineEmits<{
  close: []
}>()

const getTechIcon = (tech: string): string => {
  const techIcons: { [key: string]: string } = {
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
  }
  return techIcons[tech] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
}
</script>
