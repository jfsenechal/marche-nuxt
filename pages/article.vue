<script setup>
const route = useRoute()
const siteSlug = computed(() => String(route.params.siteSlug || 'pas slug'))
const articleId = computed(() => Number(route.params.articleId || 0))
const articleSlug = computed(() => String(route.params.articleSlug || 'no slug'))
const categories = computed(() => String(route.params.categories || 'no cats'))
</script>
<template>
  <section>
    <h1>Article</h1>
    <table class="">
      <tr>
        <th>site</th>
        <td>{{ siteSlug }}</td>
      </tr>
      <tr>
        <th>categories</th>
        <td>{{ categories }}</td>
      </tr>
      <tr>
        <th>id</th>
        <td>{{ articleId }}</td>
      </tr>
      <tr>
        <th>slug</th>
        <td>{{ articleSlug }}</td>
      </tr>
    </table>

  </section>
</template>