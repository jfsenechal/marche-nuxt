<script setup>
const propos = defineProps({name: String})
const name = propos.name
</script>
<template>
  <div class="xl:col-span-3">
    <div class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="text-cta-light w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
      </svg>
      <a href="/" class="ml-2 font-montserrat-semi-bold text-cta-light">
        Retour à Actualités</a>
    </div>

    <h2 class="pt-4 font-montserrat-semi-bold text-base xl:text-xl leading-7 text-cta-dark">
      {{ name }}
    </h2>

    <span class="block pt-4 font-montserrat-semi-bold text-citoyen">
      Vivre à Marche
    </span>
  </div>
</template>
