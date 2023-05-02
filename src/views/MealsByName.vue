<template>
  <div class="flex flex-col p-6">
    <input
      type="text"
      v-model="keyWord"
      placeholder="Search for something here"
      class="border-gray-200 shadow-md w-full"
      @change="searchMeal"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 my-3">
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <BlankRecord :meals="meals" />
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";
import MealItem from "../components/MealItem.vue";
import BlankRecord from "../components/BlankRecord.vue";

const route = useRoute();
const keyWord = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeal() {
  store.dispatch("searchMeal", keyWord.value);
}
onMounted(() => {
  keyWord.value = route.params.name;
  if (keyWord.value) {
    searchMeal();
  }
});
</script>
<style scoped></style>
