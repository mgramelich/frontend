<template>
  <div>
    <slot />

    <!-- Bottom Navigation Bar -->
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div class="flex justify-around items-center h-16">

        <!-- Home -->
        <NuxtLink to="/" class="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
          <Icon name="ph:bank" size="1.5em" style="color: black" />
          <span class="text-xs">Home</span>
        </NuxtLink>

        <!-- Cavaleiros -->
        <NuxtLink to="/saints" class="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
          <Icon name="ph:person-fill" size="1.5em" style="color: black" />
          <span class="text-xs">Cavaleiros</span>
        </NuxtLink>

        <!-- Armaduras -->
        <NuxtLink to="/cloths" class="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
          <Icon name="ph:shield-checkered-fill" size="1.5em" style="color: black" />
          <span class="text-xs">Armaduras</span>
        </NuxtLink>

        <!-- Constelações -->
        <NuxtLink to="/" class="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
          <Icon name="ph:shooting-star-bold" size="1.5em" style="color: black" />
          <span class="text-xs">Constelações</span>
        </NuxtLink>

        <!-- Pesquisar -->
        <NuxtLink to="/search" class="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
          <Icon name="ph:magnifying-glass" size="1.5em" style="color: black" />
          <span class="text-xs">Pesquisar</span>
        </NuxtLink>

      </div>
    </nav>
  </div>
</template>
