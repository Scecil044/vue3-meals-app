<template>
  <div>
    <div v-if="!meals.length" class="flex items-center justify-center">
      <img src="../assets/question.png" alt="" class="w-32 h-32" />
      <div class="flex flex-col">
        <h1 class="font-bold text-4xl text-black text-center">OOps!</h1>
        <h1 class="font-semibold">
          There are no meals to display for this selection
        </h1>
      </div>
    </div>
  </div>
</template>
<script setup>
const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
<style scoped></style>
