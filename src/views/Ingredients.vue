<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-2 text-orange-500">Ingredients</h1>
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of ingredients"
      :key="ingredient.idIngredient"
      class="bg-white rounded p-5 mb-3 shadow-md block"
    >
      <h1 class="text-2xl font-semibold">{{ ingredient.strIngredient }}</h1>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>
<script setup>
import axiosClient from "../axios";
import { ref, onMounted } from "vue";

const ingredients = ref([]);
onMounted(() => {
  axiosClient
    .get("list.php?i=list")

    .then(({ data }) => {
      ingredients.value = data.meals;
    });
});
</script>
<style scoped></style>
