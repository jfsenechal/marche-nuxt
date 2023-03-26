<script setup>
import Navigation from "@/components/Header/Navigation.vue";
import IconesSocial from "@/components/Header/IconesSocial.vue";

const emit = defineEmits(["open-search","close-search"]);

function updateOpenSearch() {
  emit("open-search");
}
function closeSearch() {
  emit("close-search");
}
</script>
<template>
  <header class="fixed px-3 bg-white shadow-md flex items-center justify-end w-full">
<!--  <header
    class="fixed flex h-20 w-full items-stretch justify-end p-6 bg-white shadow-md z-20"
    id="headerTop"
  >-->
    <a href="/" class="mr-auto self-center">
      <img src="/images/img_logo.png" alt="logo" class="h-10 w-16 xl:h-14 xl:w-24" />
    </a>
    <Navigation @close-search=closeSearch @open-search="updateOpenSearch" />
    <IconesSocial />
  </header>
</template>
