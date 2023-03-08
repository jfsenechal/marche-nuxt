<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk: String) => {
    return titleChunk ? `${titleChunk} - MarcheBe` : 'Marche';
  }
})
</script>
<template>
  <div id="app">
    <AppHeader/>
    <slot/>
    <AppFooter/>
  </div>
</template>