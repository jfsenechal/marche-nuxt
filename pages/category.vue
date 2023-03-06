<script setup>
import Children from "@/components/Category/Children.vue";
import Posts from "@/components/Category/Posts.vue";
import categoryGet from "~/composables/categoryGet";
import Loader from "@/components/Widget/Loader.vue";

const route = useRoute()
const siteSlug = computed(() => String(route.params.siteSlug || 'citoyen'))
const categories = computed(() => String(route.params.categories || 'Pas de categories parent'))
const categorySlug = computed(() => String(route.params.categorySlug || '/'))
const categorySelected = ref(categorySlug.value)

const {
  pendingCategory,
  category,
  errorCategory
} = categoryGet(siteSlug.value, categorySlug.value)

const backName = computed(() => {
  return typeof category.value.jf == 'object' ? category.value.jf.name : 'accueil'
})

function updateCategorySelected(categorySelectedSlug) {
  console.log("update: " + categorySelectedSlug)
  categorySelected.value = categorySelectedSlug
}
</script>
<template>
  <section>
    <div v-if="pendingCategory">
      <Loader>Loading Category...</Loader>
    </div>
    <div v-if="errorCategory" class="text-red-600">
      Error {{ errorCategory }}
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
      <Children :categoryId="category.cat_ID" @update-category-selected="updateCategorySelected"/>
      <Posts :key="categorySelected" :category-selected="categorySelected" :site-slug="siteSlug"/>

    </div>
  </section>
</template>