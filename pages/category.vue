<script setup>
const route = useRoute()
const site = computed(() => String(route.params.site || 'no site'))
const categories = computed(() => String(route.params.categories || 'no cats'))
const slug = computed(() => String(route.params.categorySlug || '/'))
</script>
<template>
  <section>
    Category
    <table class="">
      <tr>
        <th>site</th>
        <td>{{ site }}</td>
      </tr>
      <tr>
        <th>Catégories</th>
        <td>{{ categories }}</td>
      </tr>
      <tr>
        <th>Slug</th>
        <td>{{ slug }}</td>
      </tr>
    </table>

  </section>
</template>