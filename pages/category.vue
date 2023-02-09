<script setup>
const route = useRoute()
const site = computed(() => String(route.params.site || 'citoyen'))
const categories = computed(() => String(route.params.categories || 'Pas de categories parent'))
const slug = computed(() => String(route.params.categorySlug || '/'))
</script>
<template>
  <section>
    Page Category <strong>{{ route.name }}</strong> || <strong>{{route.params}}</strong>
    <table class="">
      <tr>
        <th>Site</th>
        <td>{{ site }}</td>
      </tr>
      <tr>
        <th>Catégories</th>
        <td>{{ categories }}</td>
      </tr>
      <tr>
        <th>Slug de la category</th>
        <td>{{ slug }}</td>
      </tr>
    </table>

  </section>
</template>