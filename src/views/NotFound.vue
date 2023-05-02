<template>
  <div class="flex h-full items-center justify-center bg-gray-100">
    <div class="p-5 border-r border-indigo-300">
      <h1 class="text-7xl font-bold text-indigo-800">404</h1>
    </div>
    <div class="p-5 flex-col space-y-3">
      <h1 class="text-5xl text-black font-bold">Page not found</h1>
      <h3 class="text-neutral-500">Pleas check you url and refresh</h3>
      <div>
        <router-link
          :to="{ name: 'home' }"
          class="bg-indigo-800 text-white py-2 px-5 shadow-lg transition-shadow hover:shadow-none hover:bg-indigo-700"
          >Go to Home</router-link
        >
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped></style>
