<script setup>
  import {widgets} from "~/composables/widgetsHomeGet";
</script>
<template>
  <div
    class="grid grid-cols-1 gap-2 pt-6 xl:grid-cols-[repeat(5,1fr)] relative"
    id="widgets"
  >
    <div
      v-for="item in widgets"
      :id="item.id"
      :key="item.id"
      class="relative flex items-center overflow-hidden"
    >
      <i
        :class="
          'absolute inset-0 block h-32 bg-cover bg-center bg-no-repeat grayscale ' +
          item.class
        "
      ></i>
      <a
        :href="item.url"
        class="bg-widget-color hover:bg-widget-color-hover group relative flex h-32 w-full flex-col items-center justify-start pt-4 text-white transition-all duration-700"
      >
        <h3
          class="relative top-6 font-montserrat-semi-bold text-xl transition-all duration-700 group-hover:top-0 group-hover:ease-in-out"
        >
          {{ item.title }}
        </h3>
        <span
          class="relative -bottom-20 pt-4 text-lg text-white transition-all delay-300 duration-700 group-hover:bottom-0"
          v-html="item.intro"
        >
        </span>
      </a>
    </div>
  </div>
</template>
