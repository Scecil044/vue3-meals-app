<template>
  <header
    class="bg-white w-full shadow-lg h-16 flex items-center justify-between"
  >
    <router-link
      to="/"
      class="flex items-center hover:bg-orange-400 px-2 h-full"
    >
      Home
    </router-link>
    <!-- left menu -->
    <div class="flex h-full">
      <router-link
        :to="{ name: 'byName' }"
        class="flex items-center hover:bg-orange-400 px-2 h-full"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="flex items-center hover:bg-orange-400 hover:text-white px-2 h-full"
      >
        Search By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="flex items-center hover:bg-orange-400 px-2 h-full mr-3"
      >
        Search By INgredient
      </router-link>
    </div>
  </header>
</template>
<script setup></script>
<style scoped></style>
