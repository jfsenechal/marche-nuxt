<script setup lang="ts">
const {path, params} = useRoute()
const siteSlug = computed(() => String(params.siteSlug || 'citoyen'))
const articleId = computed(() => Number(params.articleId || 0))
const articleSlug = computed(() => String(params.articleSlug || 'no article slug'))
const categories = computed(() => String(params.categories || 'no cats'))

import Titre from "@/components/Article/Titre.vue";
import Share from "@/components/Article/Share.vue";
import Image from "@/components/Article/Image.vue";
import SeeAlso from "@/components/Article/SeeAlso.vue";
import Tags from "@/components/Article/Tags.vue";
import Body from "@/components/Article/Body.vue";
import Footer from "@/components/Footer/Footer.vue";

const {
  pending,
  data: article,
  error
} = useLazyFetch(`https://www.marche.be/api/post.php?site=${siteSlug.value}&id=${articleId.value}`)
watch(article, (newPost) => {
  console.log(article.value)
})
useServerSeoMeta({
  title: () => `${article.value?.post_title} - My Site`,
})
</script>
<template>
  <article
      class="container grid grid-cols-1 xl:grid-cols-3 items-start mt-24 xl:mt-28 mx-auto px-4">
    <div v-if="pending">
      Loading Article...
    </div>
    <div v-if="error" class="text-red-600">
      Error {{ error }}
    </div>
    <div v-if="article">
      <Titre :name="article.post_title"/>
      <Image/>
      <Tags/>
      <Body/>
      <Share/>
      <SeeAlso/>
    </div>
    <div v-else>
      <h3 class="text-2xl font-bold">Article not found</h3>
    </div>
  </article>
</template>