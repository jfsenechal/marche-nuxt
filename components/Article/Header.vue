<script setup>
import Share from "@/components/Article/Share.vue";
import Image from "@/components/Article/Image.vue";
import SeeAlso from "@/components/Article/SeeAlso.vue";
import Tags from "@/components/Article/Tags.vue";
</script>
<template>
  <div class="mt-12 flex w-full items-start">
    <Image />
    <div class="flex h-80 w-1/3 flex-col justify-between">
      <Share />
      <Tags />
      <SeeAlso />
    </div>
  </div>
</template>
