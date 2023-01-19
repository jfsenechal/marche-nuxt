<script setup lang="ts">
const route = useRoute()
const site = computed(() => String(route.params.site || '/'))
const slug = computed(() => String(route.params.slugCategory || '/'))
//const no = $computed(() => route.params.slug as string) //ts
</script>
<template>
  <div>
    Catégorie {{slug}} dans le site {{site}}
  </div>
</template>