<template>
  <div v-if="isLoading" class="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 overflow-hidden">
    <!-- Fondo con efecto de constelación -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="gradient-overlay"></div>
    </div>

    <!-- Contenido principal -->
    <div class="relative z-10 text-center px-4">
      <!-- Logo animado con efecto neón -->
      <div class="relative mb-8">
        <div class="w-24 h-24 mx-auto relative flex items-center justify-center">
          <!-- Anillos concéntricos animados -->
          <div class="absolute inset-0 border-2 border-transparent border-t-blue-400 rounded-full animate-spin-slow"></div>
          <div class="absolute inset-4 border-2 border-transparent border-b-white rounded-full animate-spin-slow-reverse"></div>

          <!-- Inicial con efecto neón -->
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-4xl font-bold text-white neon-text">
              J
            </span>
          </div>
        </div>
      </div>

      <!-- Nombre con efecto de aparición -->
      <div class="mb-8 overflow-hidden">
        <h1 class="text-4xl font-light text-white mb-2 tracking-wider slide-in-up" style="animation-delay: 0.3s">
          Josue Chan
        </h1>
        <p class="text-sm text-blue-300 slide-in-up tracking-widest uppercase" style="animation-delay: 0.5s">
          Desarrollador de Software
        </p>
      </div>

      <!-- Barra de progreso futurista -->
      <div class="w-72 mx-auto mb-6 slide-in-up" style="animation-delay: 0.7s">
        <div class="h-1.5 bg-slate-800 rounded-full overflow-hidden relative">
          <div class="h-full bg-gradient-to-r from-blue-400 to-white rounded-full transition-all duration-700 ease-out"
            :style="{ width: progress + '%' }">
            <div class="absolute right-0 top-0 h-full w-1 bg-white shimmer-effect"></div>
          </div>
        </div>
        <p class="text-xs text-blue-300 mt-3 text-center font-mono">{{ Math.round(progress) }}%</p>
      </div>

      <!-- Indicador de carga moderno -->
      <div class="flex justify-center space-x-2 slide-in-up" style="animation-delay: 0.9s">
        <div v-for="i in 5" :key="i" class="w-2 h-2 bg-blue-400 rounded-full pulse-dot"
          :style="{ animationDelay: (i * 0.15) + 's' }"></div>
      </div>
    </div>
    <!-- Transición de salida con efecto de desvanecimiento estelar -->
    <div v-if="isHiding" class="absolute inset-0 bg-slate-950 z-20 transition-all duration-1000 ease-out fade-out"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits<{
  finished: []
}>()

const isLoading = ref(true)
const isHiding = ref(false)
const progress = ref(0)

onMounted(async () => {
  const progressInterval = setInterval(() => {
    const increment = progress.value < 30 ? 15 :
                     progress.value < 70 ? 8 :
                     progress.value < 90 ? 4 : 1
    progress.value += increment

    if (progress.value >= 100) {
      clearInterval(progressInterval)
      progress.value = 100
      setTimeout(() => {
        hideLoading()
      }, 500)
    }
  }, 150)
})

const hideLoading = async () => {
  isHiding.value = true

  setTimeout(() => {
    isLoading.value = false
    emit('finished')
  }, 1000)
}
</script>

<style scoped>
/* Efecto de constelación */
.stars {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 80px 40px, #ddd, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 120px 80px, #eee, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 160px 20px, #fff, rgba(0,0,0,0));
  background-repeat: repeat;
  opacity: 0.3;
}

.twinkling {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(1px 1px at 25px 35px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 45px 75px, #eee, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 85px 45px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 125px 85px, #ddd, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 165px 25px, #eee, rgba(0,0,0,0));
  background-repeat: repeat;
  opacity: 0;
  animation: twinkle 4s ease-in-out infinite;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.98) 100%);
}

@keyframes twinkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.6; }
}

/* Animaciones */
@keyframes slide-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in-up {
  animation: slide-in-up 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  opacity: 0;
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spin-slow-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

.animate-spin-slow-reverse {
  animation: spin-slow-reverse 4s linear infinite;
}

/* Efecto neón */
.neon-text {
  text-shadow:
    0 0 5px rgba(96, 165, 250, 0.5),
    0 0 10px rgba(96, 165, 250, 0.3),
    0 0 15px rgba(96, 165, 250, 0.1);
  animation: neon-pulse 2s ease-in-out infinite alternate;
}

@keyframes neon-pulse {
  from {
    opacity: 0.9;
    text-shadow:
      0 0 5px rgba(96, 165, 250, 0.5),
      0 0 10px rgba(96, 165, 250, 0.3);
  }
  to {
    opacity: 1;
    text-shadow:
      0 0 10px rgba(96, 165, 250, 0.8),
      0 0 20px rgba(96, 165, 250, 0.6),
      0 0 30px rgba(96, 165, 250, 0.3);
  }
}

/* Puntos de carga */
.pulse-dot {
  animation: pulse-dot 1.5s ease-in-out infinite;
  opacity: 0.6;
}

@keyframes pulse-dot {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

/* Efecto de brillo en la barra de progreso */
.shimmer-effect {
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
}

/* Transición de salida */
.fade-out {
  animation: fade-out 1s ease-out forwards;
}

@keyframes fade-out {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
