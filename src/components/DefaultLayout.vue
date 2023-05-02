<template>
  <div class="bg-gray-100 h-full">
    <NavBar />
    <main class="max-w[200px] mx-auto">
      <router-view></router-view>
    </main>
  </div>
</template>
<script setup>
import NavBar from "./NavBar.vue";
</script>
<style scoped></style>
