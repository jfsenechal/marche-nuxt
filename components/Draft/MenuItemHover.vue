<template>
    <header class="bg-white shadow-md h-20">
      <nav class="mx-auto h-full flex lg:flex-1 max-w-7xl border border-green-600 relative items-center"
           aria-label="Global">
        <a v-for="item in items" :key="item.id"
           href="/"
           class="flex items-center mx-3 border-transparent hover:border-b hover:border-cta-dark h-full transition transition-all duration-500 ">
          {{ item.name }}
        </a>
      </nav>
    </header>
</template>

<script setup>
import {items} from "~/composables/menuItemsGet";
</script>