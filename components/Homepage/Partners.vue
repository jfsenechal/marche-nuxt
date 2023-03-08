<script setup>
import {partners} from "~/composables/partnersHomeGet";
</script>
<template>
  <div class="bg-partner relative">
    <div class="mx-auto flex flex-wrap items-center justify-between gap-2">
      <a
        v-for="item in partners"
        :id="item.id"
        :key="item.id"
        :href="item.url"
        class="cursor-pointer py-3 px-2 text-center"
      >
        <img
          :src="item.img"
          :alt="item.alt"
          class="h-16 grayscale transition-all hover:grayscale-0"
        />
      </a>
    </div>
  </div>
</template>
<style>
.bg-partner {
  background-color: #ededec;
}
</style>
