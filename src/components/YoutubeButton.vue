<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    class="bg-red-600 text-white py-2 px-3 rounded hover:bg-red-700"
    ><i class="fa fa-youtube" aria-hidden="true"></i><slot></slot
  ></a>
</template>
<script setup>
const { href } = defineProps({
  href: String,
});
</script>
<style scoped></style>
