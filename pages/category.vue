<script setup>
import Children from "@/components/Category/Children.vue";

const route = useRoute()
const siteSlug = computed(() => String(route.params.siteSlug || 'citoyen'))
const categories = computed(() => String(route.params.categories || 'Pas de categories parent'))
const categorySlug = computed(() => String(route.params.categorySlug || '/'))
const {
  pending,
  data: category,
  error
} = useLazyFetch(`https://www.marche.be/nuxt/category.php?site=${siteSlug.value}&slug=${categorySlug.value}`)

</script>
<template>
  <main class="container px-4 mt-0 xl:mt-0 mx-auto mb-8">
    <div class="flex items-center mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="text-cta-light w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
      </svg>
      <a href="/" class="ml-2 font-montserrat-semi-bold text-cta-light">
        Retour à l'accueil</a>
    </div>
    <div v-if="pending">
      Loading Category...
    </div>
    <div v-if="error" class="text-red-600">
      Error {{ error }}
    </div>
    <div v-if="category">
      <h2 class="font-montserrat-semi-bold text-base xl:text-xl leading-7 text-cta-dark">
        {{ category.name }}
      </h2>

      <Children :categoryId="category.cat_ID"/>
      <!--
        <Posts :categoryId="category.cat_ID"/> -->

      <NuxtPage/>
    </div>
  </main>
</template>