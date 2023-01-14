<script setup>
const route = useRoute()
const site = computed(() => String(route.params.site || '/'))
const id = computed(() => Number(route.params.id || 1))
console.log(site)
console.log(id)
</script>
<template>
  <div>
    Page site
  </div>
</template>