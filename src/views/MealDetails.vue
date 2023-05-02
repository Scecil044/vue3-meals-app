<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-3xl font-bold">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.idMeal" />

    <div class="p-2">
      <p>{{ meal.strInstructions }}</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg">
      <div>
        <strong class="font-bold">Category: </strong>{{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area: </strong>{{ meal.strArea }}</div>
      <div class="overflow-hidden text-ellipsis">
        <strong class="font-bold">Tags: </strong>{{ meal.strTags }}
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h1 class="text-2xl font-semibold mb-3">Ingredients</h1>

        <ul v-for="(el, ind) of new Array(30)" :key="ind">
          <li v-if="meal[`strIngredient${ind + 1}`]">
            {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
          </li>
        </ul>
      </div>
      <div>
        <h1 class="text-2xl font-semibold">Recipe</h1>
        <ul v-for="(el, ind) of new Array(30)" :key="ind">
          <li v-if="meal[`strMeasure${ind + 1}`]">
            {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row-reverse gap-3 justify-center">
      <YoutubeButton>Go To Youtube</YoutubeButton>
      <a
        :href="meal.strSource"
        target="_black"
        rel="noopener"
        class="bg-indigo-600 hover:bg-indigo-700 text-white active:bg-indigo-800 py-2 px-3"
        >View Source</a
      >
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axiosClient from "../axios";
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";

const meal = ref({});
const route = useRoute();

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
<style scoped></style>
