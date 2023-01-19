<script setup lang="ts">
const route = useRoute()
const site = computed(() => String(route.params.site || '/'))
const categories = computed(() => Array(route.params.categories || []))
const slug = computed(() => String(route.params.slugCategory || '/'))
//const no = $computed(() => route.params.slug as string) //ts
console.log(route.params)
</script>
<template>
  <div>
    Catégorie {{slug}} dans le site {{site}} cats {{categories}}
  </div>
</template>