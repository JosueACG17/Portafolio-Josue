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
            <a href="https://github.com/JosueACG17" target="_blank"
              class="flex items-center space-x-3 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-blue-500/50">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span class="font-semibold">Ver GitHub</span>
            </a>

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
</template>

<script setup lang="ts">
import TimelineSection from '@/components/TimelineSection.vue'
</script>
