<script setup>
const route = useRoute()
const site = computed(() => String(route.params.site || 'no site'))
const categories = computed(() => String(route.params.categories || 'no cats'))
const slug = computed(() => String(route.params.categorySlug || '/'))
</script>
<template>
  <section>
    Category <strong>site</strong> {{ site }} <strong>categories</strong> {{categories}} <strong>slug</strong> {{ slug }}
  </section>
</template>