<script setup>
const route = useRoute()
const slug = computed(() => String(route.params.slug || 'empty'))
</script>
<template>
  <div>
   Racine citoyen {{slug}} cat ou article ?
  </div>
</template>