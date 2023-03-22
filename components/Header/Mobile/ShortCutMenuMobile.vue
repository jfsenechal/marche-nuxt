<script setup>
import {items} from "~/composables/menuItemsGet";
defineEmits(["open-search"]);
</script>
<template>
  <div class="absolute max-h-044 bottom-20 -ml-10 right-1 shadow-lg z-30 opacity-0">
    <ul
        class="w-max p-2 pb-6 bg-white flex flex-col items-start justify-center transition-all duration-700">
      <li v-for="item in items" :key="item.id">
        <NuxtLink :to="item.link" class="inline-block leading-8 text-cta-dark">{{ item.name }}</NuxtLink>
      </li>
    </ul>
    <div class="z-10 absolute -bottom-[0.5rem] right-4 h-6 w-6 rotate-45 bg-white"></div>
  </div>
</template>