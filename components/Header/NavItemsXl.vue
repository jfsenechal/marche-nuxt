<script setup>
import {items} from "~/composables/menuItemsGet";

defineEmits(["open-search"]);
</script>
<template>
  <li v-for="item in items" :key="item.id" class="hidden px-3 xl:flex xl:items-stretch font-montserrat-semi-bold">
    <NuxtLink
        :to="item.link"
        class="inline-flex items-center border-b-2 border-transparent hover:border-b-2 hover:border-cta-light  leading-6 text-cta-dark">
      {{ item.name }}
    </NuxtLink>
  </li>
  <li class="hidden xl:flex xl:items-stretch font-montserrat-semi-bold" title="Rechercher">
    <a href="/" @click.prevent="$emit('open-search')"
       class="inline-flex items-center border-b-2 border-transparent hover:border-b-2 hover:border-cta-light  leading-6 text-cta-dark">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-6 h-6 text-sante">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      </svg>
    </a>
  </li>
</template>