<template>
  <div class="flex flex-col p-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 my-3">
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <BlankRecord :meals="meals" />
  </div>
</template>
<script setup>
import { computed, ref, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import BlankRecord from "../components/BlankRecord.vue";
const route = useRoute();
const meals = computed(() => store.state.searchByIngredient);

onMounted(() => {
  store.dispatch("searchByIngredient", route.params.ingredient);
});
</script>
<style scoped></style>
