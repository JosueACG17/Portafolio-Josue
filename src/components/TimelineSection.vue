<template>
  <div class="space-y-8">
    <h3 class="text-3xl font-bold text-white mb-8">Mi Trayectoria</h3>
    <div class="relative">
      <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-blue-600"></div>

      <div v-for="(item, index) in timeline" :key="index" class="relative flex items-start space-x-6 pb-8">
        <div
          class="shrink-0 w-12 h-12 bg-linear-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center relative z-10 shadow-lg">
          <div class="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <div class="grow">
          <div
            class="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
            <h4 class="text-xl font-bold text-white mb-2">{{ item.title }}</h4>
            <div v-if="item.institution && item.icon" class="flex items-center space-x-2 mb-3">
            <img :src="item.icon" :alt="item.institution" class="w-9 h-6 object-contain rounded-sm " />
              <span class="text-slate-300 text-sm font-medium">{{ item.institution }}</span>
            </div>
            <p class="text-blue-400 text-sm font-semibold mb-3">{{ item.period }}</p>
            <p class="text-slate-300 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TimelineItem {
  title: string
  period: string
  description: string
  institution?: string
  icon?: string
}

const timeline: TimelineItem[] = [
    {
    title: 'Becario en Programación',
    period: 'Enero 2026 - Abril 2026',
    description: 'Desarrollo de nuevas implementaciones, y colaboración con equipos multidisciplinarios para optimizar procesos internos.',
    institution: 'Consolidé By Grupo Sicoss',
    icon: 'https://consolide.com/wp-content/uploads/2024/06/consolide-by-grupo-sicoss-horizontal.png'
  },
  {
    title: 'Estudiante Ingeniería en Desarrollo y Gestión de Software',
    period: '2024 - Presente',
    description: 'Profundizando en arquitectura de software, metodologías ágiles, gestión de proyectos tecnológicos y liderazgo en equipos de desarrollo.',
    institution: 'Universidad Tecnológica de Cancún',
    icon: 'https://docente.utcancun.edu.mx/images/logos/utcbis-logo.png'
  },
  {
    title: 'TSU en Tecnologías de la Información - Desarrollo de Software Multiplataforma',
    period: '2022 - 2024',
    description: 'Especialización en desarrollo web y móvil usando tecnologías front-end y back-end, al igual que bases de datos. Desarrollo de APIs RESTful y aplicaciones multiplataforma.',
    institution: 'Universidad Tecnológica de Cancún',
    icon: 'https://docente.utcancun.edu.mx/images/logos/utcbis-logo.png'
  },
]
</script>
