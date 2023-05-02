<template>
  <div class="flex flex-col bg-white p-3 shadow-lg overflow-hidden">
    <router-link :to="{ name: 'details', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        alt=""
        class="h-32 object-cover w-full rounded-t-2xl hover:rotate-1 hover:scale-105"
      />
    </router-link>
    <div class="mt-3 space-y-3">
      <h1 class="font-semibold">{{ meal.strMeal }}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        voluptatum! Quaerat impedit blanditiis quam dolor, iste ut deserunt
        distinctio rerum?
      </p>
      <div class="flex justify-between items-center">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import YoutubeButton from "./YoutubeButton.vue";
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
<style scoped></style>
