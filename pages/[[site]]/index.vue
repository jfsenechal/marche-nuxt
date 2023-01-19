<script setup lang="ts">
const route = useRoute()
const site = computed(() => String(route.params.site || '/'))
</script>
<template>
  Index du site {{site}}
</template>