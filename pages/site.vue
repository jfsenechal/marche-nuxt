<script setup>
const route = useRoute()
const siteName =route.name
const slug = computed(() => String(route.params.siteSlug || 'pas slug'))
</script>
<template>
  <section>
    <h1>Site {{ siteName}} site : {{slug}}</h1>

  </section>
</template>