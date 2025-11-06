<template>
  <Teleport to="body">
    <div v-if="isOpen"
         class="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
         @click="closeViewer"
         @keydown.esc="closeViewer">

      <!-- Loading spinner -->
      <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
        <div class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <!-- Imagen principal -->
      <div class="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        <img
          :src="currentImage"
          :alt="currentTitle || 'Imagen en pantalla completa'"
          class="max-w-full max-h-full object-contain transition-all duration-300 transform"
          :class="{ 'opacity-0': loading, 'opacity-100': !loading }"
          @load="loading = false"
          @click.stop
        />

        <!-- Botón de cerrar -->
        <button
          @click="closeViewer"
          class="absolute top-4 right-4 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Controles de navegación (solo si hay múltiples imágenes) -->
        <template v-if="images && images.length > 1">
          <!-- Anterior -->
          <button
            v-if="currentIndex > 0"
            @click.stop="previousImage"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Siguiente -->
          <button
            v-if="currentIndex < images.length - 1"
            @click.stop="nextImage"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            </button>

          <!-- Indicador de posición -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 rounded-full px-4 py-2 text-white text-sm">
            {{ currentIndex + 1 }} / {{ images.length }}
          </div>
        </template>

        <!-- Título/descripción -->
        <div v-if="currentTitle || currentDescription"
             class="absolute bottom-4 left-4 right-4 bg-black/50 rounded-lg p-4 text-white max-w-md mx-auto">
          <h3 v-if="currentTitle" class="font-semibold text-lg mb-1">{{ currentTitle }}</h3>
          <p v-if="currentDescription" class="text-sm text-gray-300">{{ currentDescription }}</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

interface ImageItem {
  image: string
  title?: string
  description?: string
}

interface Props {
  isOpen: boolean
  image?: string
  images?: ImageItem[]
  initialIndex?: number
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  initialIndex: 0
})

const emit = defineEmits<{
  close: []
}>()

const loading = ref(true)
const currentIndex = ref(props.initialIndex)

// Si tenemos múltiples imágenes, usar el array, sino usar la imagen individual
const currentImage = computed(() => {
  if (props.images && props.images.length > 0) {
    return props.images[currentIndex.value]?.image
  }
  return props.image
})

const currentTitle = computed(() => {
  if (props.images && props.images.length > 0) {
    return props.images[currentIndex.value]?.title
  }
  return props.title
})

const currentDescription = computed(() => {
  if (props.images && props.images.length > 0) {
    return props.images[currentIndex.value]?.description
  }
  return props.description
})

const closeViewer = () => {
  emit('close')
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (props.images && currentIndex.value < props.images.length - 1) {
    currentIndex.value++
    loading.value = true
  }
}

const previousImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    loading.value = true
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.isOpen) return

  switch (e.key) {
    case 'Escape':
      closeViewer()
      break
    case 'ArrowRight':
      nextImage()
      break
    case 'ArrowLeft':
      previousImage()
      break
  }
}

// Watch para resetear el loading cuando cambie la imagen
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    loading.value = true
    document.body.style.overflow = 'hidden'
    currentIndex.value = props.initialIndex
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
/* Animaciones suaves */
.v-enter-active, .v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
