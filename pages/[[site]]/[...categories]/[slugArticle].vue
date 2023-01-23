<script setup lang="ts">
//category_name=musees&name=musee-de-la-famenne&p=20&page=
const route = useRoute()
const site = computed(() => String(route.params.site || '/'))
const slug = computed(() => String(route.params.slug || '/'))
//const no = $computed(() => route.params.slug as string) //ts
</script>
<template>
  <div>
    Article slug {{ slug }} dans le site {{ site }} {{$route.params}}
  </div>
</template>