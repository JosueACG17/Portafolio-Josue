<template>
  <section class="py-20 bg-slate-900/50 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Tecnologías que he
          <span class="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            utilizado
          </span>
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
          Herramientas y tecnologías que empleo para desarrollar soluciones innovadoras y de alto impacto.
        </p>
      </div>
      <div class="relative overflow-hidden">
        <div ref="marqueeContainer" class="flex space-x-8 will-change-transform mt-3"
          :style="{ transform: `translateX(${translateX}px)` }">
          <!-- Primera repetición -->
          <div v-for="tech in technologies" :key="tech.name + '_1'" class="flex-shrink-0 group">
            <div
              class="w-24 h-24 bg-slate-800 hover:bg-slate-700 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 border border-slate-700 hover:border-blue-500/50">
              <img :src="tech.icon" :alt="tech.name" class="w-12 h-12 object-contain" />
            </div>
            <p class="text-sm text-slate-400 text-center mt-3 group-hover:text-blue-400 transition-colors">
              {{ tech.name }}
            </p>
          </div>
          <!-- Segunda repetición -->
          <div v-for="tech in technologies" :key="tech.name + '_2'" class="flex-shrink-0 group">
            <div
              class="w-24 h-24 bg-slate-800 hover:bg-slate-700 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 border border-slate-700 hover:border-blue-500/50">
              <img :src="tech.icon" :alt="tech.name" class="w-12 h-12 object-contain" />
            </div>
            <p class="text-sm text-slate-400 text-center mt-3 group-hover:text-blue-400 transition-colors">
              {{ tech.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Technology {
  name: string
  icon: string
}

const technologies: Technology[] = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Tailwind', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Laravel', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
]

const marqueeContainer = ref<HTMLElement>()
const translateX = ref(0)
const speed = 1
let animationId: number

const animate = () => {
  translateX.value -= speed

  if (marqueeContainer.value) {
    const itemWidth = 128
    const totalWidth = technologies.length * itemWidth

    if (Math.abs(translateX.value) >= totalWidth) {
      translateX.value = 0
    }
  }

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  animate()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
.will-change-transform {
  will-change: transform;
}
</style>
