<script setup>
defineEmits(["open-search"]);
</script>
<template>
  <li class="hidden xl:list-item nav-top font-montserrat-semi-bold text-cta-dark">
    <NuxtLink to="https://eguichet.marche.be">E-guichet</NuxtLink>
  </li>
  <li class="hidden xl:list-item nav-top font-montserrat-semi-bold">
    <NuxtLink to="news">Actualités</NuxtLink>
  </li>
  <li class="hidden xl:list-item nav-top font-montserrat-semi-bold">
    <NuxtLink to="agenda">Horaires-Contact</NuxtLink>
  </li>
  <li class="hidden xl:list-item nav-top font-montserrat-semi-bold">
  <NuxtLink to="agenda">Agenda</NuxtLink>
  </li>
  <li class="hidden xl:list-item nav-top font-montserrat-semi-bold">
    <NuxtLink to="agenda">Inondation</NuxtLink>
  </li>
  <li class="hidden xl:list-item nav-top font-montserrat-semi-bold" title="Rechercher">
    <a href="/" @click.prevent="$emit('open-search')">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-6 h-6 text-sante">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </a>
  </li>
</template>