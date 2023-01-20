<script setup lang="ts">
const route = useRoute()
const site = computed(() => String(route.params.site || '/'))
const slug = computed(() => String(route.params.slug || '/'))
//const no = $computed(() => route.params.slug as string) //ts

console.log(site)
console.log(slug)
</script>
<template>
  <div>
    Article {{ slug }} dans le site {{ site }}

  </div>
</template>