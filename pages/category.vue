<script setup>
const route = useRoute()
const siteSlug = computed(() => String(route.params.siteSlug || 'citoyen'))
const categories = computed(() => String(route.params.categories || 'Pas de categories parent'))
const categorySlug = computed(() => String(route.params.categorySlug || '/'))
const {
  pending,
  data: category,
  error
} = useLazyFetch(`https://www.marche.be/api/category.php?site=${siteSlug.value}&slug=${categorySlug.value}`)

</script>
<template>
  <section>
    <div v-if="pending">
      Loading Category...
    </div>
    <div v-if="error" class="text-red-600">
      Error {{ error }}
    </div>
    <div v-if="category">
      {{category.name}} => Page Category <strong>{{ route.name }}</strong> || <strong>{{ route.params }}</strong>
      <table class="">
        <tr>
          <th>Site</th>
          <td>{{ siteSlug }}</td>
        </tr>
        <tr>
          <th>Catégories</th>
          <td>{{ categories }}</td>
        </tr>
        <tr>
          <th>Slug de la category</th>
          <td>{{ categorySlug }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>