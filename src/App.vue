<template>
  <div>
    <!-- Pantalla de carga -->
    <LoadingScreen @finished="onLoadingFinished" />

    <!-- Contenido principal -->
    <div :class="{ 'opacity-0 pointer-events-none': isLoading, 'opacity-100': !isLoading }"
      class="transition-all duration-1000 ease-in-out">
      <HomeView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import HomeView from './views/HomeView.vue'
import LoadingScreen from './components/LoadingScreen.vue'

const isLoading = ref(true)

const onLoadingFinished = () => {
  isLoading.value = false
}

onMounted(() => {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  if (navigation.type === 'reload') {
    isLoading.value = true
  }
})
</script>

<style>
/* Prevenir scroll cuando está cargando */
body.loading {
  overflow: hidden;
}
</style>
