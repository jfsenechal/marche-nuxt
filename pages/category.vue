<script setup>
import Children from "@/components/Category/Children.vue";
import Posts from "@/components/Category/Posts.vue";

const route = useRoute()
const siteSlug = computed(() => String(route.params.siteSlug || 'citoyen'))
const categories = computed(() => String(route.params.categories || 'Pas de categories parent'))
const categorySlug = computed(() => String(route.params.categorySlug || '/'))
const categorySelected = ref(categorySlug.value)
const {
  pending,
  data: category,
  error
} = useLazyFetch(`https://www.marche.be/nuxt/category.php?site=${siteSlug.value}&slug=${categorySlug.value}`)
function update(categorySelectedSlug) {
  console.log("update: " + categorySelectedSlug)
  categorySelected.value = categorySelectedSlug
}
const backName = computed(() => {
  return typeof category.value.jf == 'object' ? category.value.jf.name : 'accueil'
})
</script>
<template>
  <section>
    <div v-if="pending">
      Loading Category...
    </div>
    <div v-if="error" class="text-red-600">
      Error {{ error }}
    </div>
    <div v-if="category">
      <div class="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="text-cta-light w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
        </svg>
        <a href="/" class="ml-2 font-montserrat-semi-bold text-cta-light">
          Retour à {{ backName }}</a>
      </div>
      <h2 class="font-montserrat-semi-bold text-base xl:text-xl leading-7 text-cta-dark">
        {{ category.name }}
      </h2>
      <Children :categoryId="category.cat_ID" @update-category-selected="update"/>
      <Posts :key="categorySelected" :category-selected="categorySelected" :site-slug="siteSlug"/>

    </div>
  </section>
</template>