<script setup>
import Header from "@/components/Header/Header.vue";
import PopupSearch from "@/components/Header/Search/PopupSearch.vue";

const emit = defineEmits(["open-search","close-search"]);

function updateOpenSearch() {
  emit("open-search");
}
function closeSearch() {
  emit("close-search");
}

const searchIsOpen = ref(false);

function updateSearch() {
  searchIsOpen.value = !searchIsOpen.value;
}
</script>
<template>
<Header @close-search=closeSearch @open-search="updateSearch" />
 <!-- <PopupSearch @close-search=closeSearch @open-search="openSearch" :searchIsOpen="searchIsOpen" /> -->
</template>