<script setup>
import newsGet from "~/composables/newsGet";

const {
  pendingNews,
  news,
  errorNews
} = newsGet()
</script>
<template>
  <h2 class="py-2 px-4 text-center font-montserrat-bold text-2xl text-cta-dark lg:text-left xl:p-4">
    Actualités
  </h2>
  <template v-if="pendingNews">
    Loading news...
  </template>
  <template v-if="errorNews" class="text-red-600">
    Error {{ errorNews }}
  </template>
  <ul class="pt-2 xl:pt-0 grid grid-cols-1 gap-2 lg:gap-4 xl:grid-cols-[repeat(3,minmax(0,1fr))]" v-if="news">
    <li
        v-for="item in news.slice(0, 6)"
        :id="item.ID"
        :key="item.ID"
        class="overflow-hidden rounded-lg shadow-lg"
    >
      <a
          href="{{item.url}}"
          class="group grid grid-cols-1 overflow-hidden xl:block">

        <img
            :src="item.post_thumbnail_url"
            alt=""
            class="justify-self-center self-center h-32 w-full rounded-t-lg opacity-100 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60 lg:h-40"
        />
        <div class="ml-2 flex flex-col items-start justify-around h-24 xl:p-4">
          <h3
              class="xl:text-md xl:font-montserrat-semi-bold text-base text-cta-dark group-hover:text-cta-light">
            {{ item.post_title }}
          </h3>
          <span
              :class="
              'my-1 block font-montserrat-light text-xs self-end ' +
              item.colorTailwind
            ">
            {{ item.blog }}
          </span>
        </div>
      </a>
    </li>
  </ul>
  <a
      class="my-4 ml-auto mr-2 flex justify-between items-center w-52 font-montserrat-semi-bold text-cta-light transition-all duration-700 hover:mr-8"
      href="/"
      title="Plus d'actualités">
    <span>Plus d'actualités</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
    </svg>
  </a>
</template>
