<script setup>
const route = useRoute()
const siteName =route.name
const slug = computed(() => String(route.params.slug || '/'))
</script>
<template>
  <section>
    <h1>Site {{ siteName}} cat {{slug}}</h1>

  </section>
</template>