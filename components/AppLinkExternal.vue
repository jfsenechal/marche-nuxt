<script setup>
const route = useRoute()
//const propos = ...RouterLink.propos
const isExternal = computed(() => typeof route.to === String && route.to.startsWith('http'))
</script>
<template>
  <a v-if="isExternal" :href="route.to" target="_blank" rel="noopener"><slot/></a>
  <router-link v-else v-bind="$props"><slot/></router-link>
</template>