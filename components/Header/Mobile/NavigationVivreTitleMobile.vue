<script setup>
const emit = defineEmits(['close-menu']);
</script>
<template>
  <li
    class="border-b border-white/50 mb-2 xl:hidden py-1 initial w-full xl:w-auto flex flex-col xl:basis-full font-montserrat-semi-bold leading-10 xl:leading-8 text-white">
    <h3 class="flex justify-between items-center ml-6 mr-6 whitespace-nowrap">
      <span>Vivre à Marche</span>
      <button @click.prevent="emit('close-menu')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor"
             class="w-6 h-6 inline-block">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </h3>
  </li>
</template>