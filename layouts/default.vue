<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - MarcheBe` : 'Site Title';
    }
  })
</script>
<template>
  <div id="app">
    <AppHeader/>
    <main class="m-10">
      <slot/>
    </main>
    <AppFooter/>
  </div>
</template>