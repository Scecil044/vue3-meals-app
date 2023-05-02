<template>
  <div class="flex flex-col p-8">
    <div class="flex gap-2 justify-center mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 my-3">
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const meals = computed(() => store.state.searchByLetter);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
import MealItem from "../components/MealItem.vue";

watch(route, () => {
  store.dispatch("searchByLetter", route.params.letter);
});
onMounted(() => {
  store.dispatch("searchByLetter", route.params.letter);
});
</script>
<style scoped></style>
