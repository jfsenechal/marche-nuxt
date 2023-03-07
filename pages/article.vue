<script setup lang="ts">
import Titre from "@/components/Article/Titre.vue";
import Share from "@/components/Article/Share.vue";
import Image from "@/components/Article/Image.vue";
import SeeAlso from "@/components/Article/SeeAlso.vue";
import Tags from "@/components/Article/Tags.vue";
import Body from "@/components/Article/Body.vue";
import articleGet from "~/composables/articleGet";

const {path, params} = useRoute()
const siteSlug = computed(() => String(params.siteSlug || 'citoyen'))
const articleId = computed(() => Number(params.articleId || 0))
const articleSlug = computed(() => String(params.articleSlug || 'no article slug'))
const categories = computed(() => String(params.categories || 'no cats'))

const {
  pendingArticle,
  article,
  errorArticle
} = articleGet(siteSlug.value, articleId.value);

watch(article, (newPost) => {
  console.log(article.value)
})
useServerSeoMeta({
  //title: () => `${article.value?.post_title} - My Site`,
})
</script>
<template>
  <article
      class="container grid grid-cols-1 xl:grid-cols-3 items-start mt-24 xl:mt-28 mx-auto px-4">
    <template v-if="pendingArticle">
      Loading Article...
    </template>
    <template v-if="errorArticle" class="text-red-600">
      Error {{ errorArticle }}
    </template>
    <template v-if="article">
      <Titre :name="article.post_title"/>
      <Image/>
      <Tags/>
      <Body/>
      <Share/>
      <SeeAlso/>
    </template>
    <template v-else>
      <h3 class="text-2xl font-bold">Article not found</h3>
    </template>
  </article>
</template>