<template>
  <div>
    <slot :items="items" />
    <div ref="sentinel" class="sentinel"></div>
    <p v-if="props.loading">Carregando...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

// Recebe as props do componente pai
const props = defineProps({
  items: Array,              // Lista de itens que será renderizada
  fetchData: Function,       // Função para buscar dados adicionais
  loading: Boolean           // Indicador de carregamento
})

// Refs e sentinela
const sentinel = ref(null)
const observer = ref(null)

// Função para configurar o IntersectionObserver
const createObserver = () => {
  observer.value = new IntersectionObserver(async (entries) => {
    const entry = entries[0]
    if (entry.isIntersecting && !props.loading) {
      await props.fetchData() // Chama a função de busca passada via props
    }
  })

  if (sentinel.value) {
    observer.value.observe(sentinel.value)
  }
}

// Configuração dos ciclos de vida
onMounted(async () => {
  await nextTick()
  createObserver()
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})
</script>

<style scoped>
.sentinel {
  height: 20px;
}
</style>
