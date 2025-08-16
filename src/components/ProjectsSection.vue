<template>
  <section id="proyectos" class="py-20 bg-slate-900/30 relative">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold text-white mb-6">
          Mis <span class="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Proyectos</span>
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
          Una colección de proyectos que muestran mi pasión por crear soluciones innovadoras
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" @click="openProjectModal(project)"
          class="group cursor-pointer h-full">
          <div
            class="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
            <div class="relative overflow-hidden">
              <img :src="project.image" :alt="project.title"
                class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110">
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
              <div
                class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <div class="bg-blue-500 text-white p-2 rounded-lg">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-slate-400 mb-4 leading-relaxed flex-grow line-clamp-3">{{ project.description }}</p>

              <!-- Tecnologías con iconos -->
              <div class="flex flex-wrap gap-3 mb-6">
                <div v-for="tech in project.technologies.slice(0, 4)" :key="tech"
                  class="flex items-center space-x-2 px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30">
                  <img :src="getTechIcon(tech)" :alt="tech" class="w-4 h-4" />
                  <span>{{ tech }}</span>
                </div>
                <span v-if="project.technologies.length > 4"
                  class="flex items-center px-3 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm">
                  +{{ project.technologies.length - 4 }}
                </span>
              </div>

              <div class="flex justify-between items-center mt-auto">
                <span class="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                  Ver detalles →
                </span>
                <div class="flex space-x-3">
                  <a :href="project.github" target="_blank" @click.stop
                    class="text-slate-400 hover:text-white transition-colors transform hover:scale-110">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a :href="project.demo" target="_blank" @click.stop
                    class="text-slate-400 hover:text-white transition-colors transform hover:scale-110">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <ProjectModal :project="selectedProject" @close="closeModal" @open-image-viewer="openImageViewer" />

    <!-- Image Viewer -->
    <ImageViewer :is-open="isImageViewerOpen" :images="selectedProjectImages" :initial-index="selectedImageIndex"
      @close="closeImageViewer" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProjectModal from '@/components/ProjectModal.vue'
import ImageViewer from '@/components/ImageViewer.vue'

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

const selectedProject = ref<Project | null>(null)

// Image Viewer state
const isImageViewerOpen = ref(false)
const selectedProjectImages = ref<Screenshot[]>([])
const selectedImageIndex = ref(0)

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plataforma completa de comercio electrónico con panel de administración, pasarela de pagos y análisis en tiempo real.',
    fullDescription: 'Una plataforma de e-commerce completa desarrollada con Vue.js 3, Node.js y MongoDB. Incluye gestión avanzada de productos, carrito de compras inteligente, procesamiento de pagos con Stripe, panel de administración completo con dashboard analytics, sistema de notificaciones push, gestión de inventario automatizada y sistema de reseñas y calificaciones.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    screenshots: [
      {
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
        title: 'Página Principal',
        description: 'Diseño moderno y responsivo con catálogo de productos, filtros avanzados y búsqueda inteligente'
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
        title: 'Panel de Administración',
        description: 'Dashboard completo con analytics en tiempo real, gestión de productos, pedidos y usuarios'
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
        title: 'Panel de Administración',
        description: 'Dashboard completo con analytics en tiempo real, gestión de productos, pedidos y usuarios'
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
        title: 'Panel de Administración',
        description: 'Dashboard completo con analytics en tiempo real, gestión de productos, pedidos y usuarios'
      }
    ],
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 2,
    title: 'Task Management Pro',
    description: 'Aplicación avanzada de gestión de proyectos con colaboración en tiempo real, automatización y reportes.',
    fullDescription: 'Aplicación web completa para gestión de proyectos y tareas con funcionalidades avanzadas de colaboración. Incluye tableros Kanban personalizables, asignación inteligente de tareas, seguimiento de tiempo, reportes automáticos, integración con calendarios, notificaciones push, chat en tiempo real y sistema de roles y permisos granular.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    screenshots: [
      {
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
        title: 'Tablero Kanban',
        description: 'Vista de tablero interactiva con drag & drop, etiquetas personalizadas y filtros avanzados'
      },
      {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
        title: 'Colaboración en Equipo',
        description: 'Herramientas de comunicación integradas, asignación de tareas y seguimiento de progreso'
      }
    ],
    technologies: ['React', 'TypeScript', 'Firebase', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 3,
    title: 'Weather Analytics Dashboard',
    description: 'Dashboard meteorológico avanzado con IA, pronósticos detallados, mapas interactivos y alertas inteligentes.',
    fullDescription: 'Dashboard meteorológico de última generación que combina múltiples fuentes de datos para ofrecer pronósticos precisos. Incluye mapas interactivos con capas personalizables, alertas meteorológicas inteligentes, análisis histórico de datos, predicciones con IA, integración con IoT para estaciones meteorológicas personales y API para desarrolladores.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    screenshots: [
      {
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop',
        title: 'Condiciones Actuales',
        description: 'Vista detallada del clima actual con métricas avanzadas, índices UV, calidad del aire y más'
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
        title: 'Pronóstico Extendido',
        description: 'Pronóstico de 14 días con gráficos interactivos, análisis de tendencias y comparativas históricas'
      }
    ],
    technologies: ['Vue.js', 'Python', 'AWS', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
]

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

const openProjectModal = (project: Project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const openImageViewer = (images: Screenshot[], index: number = 0) => {
  selectedProjectImages.value = images
  selectedImageIndex.value = index
  isImageViewerOpen.value = true
}

const closeImageViewer = () => {
  isImageViewerOpen.value = false
  selectedProjectImages.value = []
  selectedImageIndex.value = 0
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}
</script>
