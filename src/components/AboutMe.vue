<template>
  <section id="sobre-mi" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <div>
            <h2 class="text-5xl font-bold text-white mb-6">
              Sobre <span class="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Mí</span>
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          </div>

          <div class="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Soy un desarrollador apasionado que transforma ideas
              en realidades digitales. Me especializo en crear aplicaciones web y móviles
              que no solo funcionan perfectamente, sino que también ofrecen experiencias
              de usuario excepcionales y memorables.
            </p>
            <p>
              Mi filosofía es simple: código limpio, diseño elegante y soluciones
              innovadoras. Desde temprana edad, descubrí mi pasión por la programación,
              un impulso que me ha llevado a buscar constantemente nuevos conocimientos
              y a crecer tanto profesional como personalmente.
            </p>
            <p>
              A lo largo de estos años, he dedicado tiempo y esfuerzo a perfeccionar mis
              habilidades técnicas y ampliar mi perspectiva del desarrollo. Este viaje me
              ha llevado al fascinante mundo del desarrollo web, donde he logrado
              completar proyectos desafiantes y continúo estableciendo nuevos objetivos.
            </p>
          </div>

          <div class="flex items-center space-x-6">
            <div class="flex space-x-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-400">20+</div>
                <div class="text-sm text-slate-400">Proyectos</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-500">3+</div>
                <div class="text-sm text-slate-400">Años</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">100%</div>
                <div class="text-sm text-slate-400">Dedicación</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Timeline -->
        <TimelineSection />
      </div>
    </div>
  </section>

  <!-- GitHub Statistics Section -->
  <section class="py-20 bg-slate-900/30 relative">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold text-white mb-6">
          Mis <span class="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Estadísticas</span>
        </h2>
        <p class="text-xl text-slate-400 max-w-3xl mx-auto">
          Un vistazo a mi actividad y progreso en GitHub
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-6"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <!-- GitHub Stats Card -->
        <div class="group">
          <div
            class="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 p-6">
            <div class="flex items-center space-x-3 mb-4">
              <div
                class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                Estadísticas Generales
              </h3>
            </div>
            <div class="rounded-xl overflow-hidden border border-slate-600/50">
              <img
                src="https://github-readme-stats.vercel.app/api?username=JosueACG17&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1e293b&title_color=60a5fa&icon_color=3b82f6&text_color=cbd5e1"
                alt="GitHub Stats" class="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
          </div>
        </div>

        <!-- Top Languages Card -->
        <div class="group">
          <div
            class="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 p-6">
            <div class="flex items-center space-x-3 mb-4">
              <div
                class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                Lenguajes Más Usados
              </h3>
            </div>
            <div class="rounded-xl overflow-hidden border border-slate-600/50">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=JosueACG17&layout=compact&theme=tokyonight&hide_border=true&bg_color=1e293b&title_color=60a5fa&text_color=cbd5e1"
                alt="Top Languages" class="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      <!-- GitHub Streak Stats -->
      <div class="mt-8">
        <div class="group max-w-4xl mx-auto">
          <div
            class="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 p-6">
            <div class="flex items-center justify-center space-x-3 mb-4">
              <div
                class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                Racha de Contribuciones
              </h3>
            </div>
            <div class="rounded-xl overflow-hidden border border-slate-600/50">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=JosueACG17&theme=tokyonight&hide_border=true&background=1e293b&ring=60a5fa&fire=3b82f6&currStreakLabel=cbd5e1&sideLabels=cbd5e1&dates=cbd5e1&sideNums=60a5fa&currStreakNum=60a5fa"
                alt="GitHub Streak" class="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <a href="https://github.com/JosueACG17" target="_blank"
          class="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span>Explorar mi GitHub</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TimelineSection from '@/components/TimelineSection.vue'
</script>
