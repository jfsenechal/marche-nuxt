<script setup>
import {icons} from "~/composables/iconsHomeGet";
</script>
<template>
  <ul class="my-8 flex flex-wrap justify-center gap-2">
    <li
        v-for="item in icons"
        :id="item.id"
        :key="item.id"
        class="group flex flex-shrink-0 flex-grow-0 basis-1/5 justify-center text-center"
    >
      <a :href="item.url" class="icon_custom">
        <i
            class="mesicones mx-auto block h-12 w-12 rounded-full bg-white bg-[length:1.25rem_1.25rem] bg-center bg-no-repeat shadow-xl hover:text-white group-hover:bg-cta-light xl:h-14 xl:w-14 xl:bg-[length:2.25rem_2.25rem]"
            :class="item.icon + ' ' + item.iconHover"
        >
        </i>
        <span
            class="mx-auto inline-block pt-3 font-montserrat-semi-bold text-sm text-white xl:text-base xl:leading-4"
            v-html="item.title"
        ></span>
      </a>
    </li>
  </ul>
</template>
