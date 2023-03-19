<template>
  <div>
    <NuxtLayout>
      <div class="">
        error {{ error.message }}
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
const error = useError
</script>