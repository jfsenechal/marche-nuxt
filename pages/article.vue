<script setup>
const route = useRoute()
const articleId = computed(() => Number(route.params.articleId || 0))
const articleSlug = computed(() => String(route.params.articleSlug || 'no slug'))
const site = computed(() => String(route.params.site || 'no site'))
const categories = computed(() => String(route.params.categories || 'no cats'))
</script>
<template>
  <section>
    Article  <strong>site</strong> {{ site }} <strong>categories</strong> {{categories}}
    id : <strong>{{ articleId }}</strong>
    slug : <strong>{{ articleSlug }}</strong>
  </section>
</template>