<script setup>
const route = useRoute()
const siteSlug = computed(() => String(route.params.siteSlug || 'pas slug'))
const articleId = computed(() => Number(route.params.articleId || 0))
const articleSlug = computed(() => String(route.params.articleSlug || 'no slug'))
const categories = computed(() => String(route.params.categories || 'no cats'))
const {
  pending2,
  data: article,
  error
} = useLazyFetch(`https://www.marche.be/api/post.php?site=${siteSlug.value}&id=${articleId.value}`)
console.log(`https://www.marche.be/api/post.php?id=${articleId.value}&site=${siteSlug.value}`)
watch(article, (newPost) => {
  console.log(article, newPost)
  console.log(pending2)
  console.log(newPost)
})
</script>
<template>
  <section>
    <div v-if="pending2">
      Loading Article...
    </div>
    <div v-if="error">
      Error {{ error }}
    </div>
    <div v-else>
      <h3 class="text-2xl font-bold">{{ article.post_title ?? 'no title' }}</h3>
      <div v-html="article.post_content ?? 'no content'"></div>
    </div>
  </section>
</template>