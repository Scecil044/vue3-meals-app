<template>
  <div class="p-8">
    <div class="pb-0 text-orange-500">
      <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
    <MealItem :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import MealItem from "../components/MealItem.vue";
import axiosClient from "../axios";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
