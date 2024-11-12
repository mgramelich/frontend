<template>
  <div class="h-screen flex flex-col bg-gray-300">
    <div class="flex-1 overflow-y-auto p-4 pb-24 text-black">
      <h2 class="font-bold">Cavaleiros</h2>
      <hr class="mb-4" />

      <InfiniteLoading :items="posts" :fetchData="fetchPosts" :loading="loading">
        <template #default="{ items }">
          <div v-for="post in items" :key="post.id" class="mb-4">
            <h3>
              <label>{{ post.id }} -</label>
              <label>{{ post.title }}</label>
            </h3>
            <p>{{ post.body }}</p>
            <hr class="my-2" />
          </div>
        </template>
      </InfiniteLoading>

      <div v-if="loading">
        <div v-for="i in limit" :key="i">
          <USkeleton class="h-5 w-full mb-1 opacity-25" />
          <hr class="my-2" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InfiniteLoading from '../components/InfiniteLoading/InfiniteLoading.vue'

// Estado do componente pai
const posts = ref([])
const loading = ref(false)
const page = ref(1)
const limit = 50

// Função para buscar posts
const fetchPosts = async () => {
  loading.value = true
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page.value}&_limit=${limit}`)
  const data = await response.json()
  posts.value.push(...data)

  setTimeout(() => {
    loading.value = false
    page.value++
  }, 400);
}
</script>
