<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      placeholder="Search for something here"
      class="border-gray-200 shadow-md"
    />
    <div class="flex gap-2 justify-center mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axios";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>
<style scoped></style>
