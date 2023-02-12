<script setup>
const {path, params} = useRoute()
const siteSlug = computed(() => String(params.siteSlug || 'citoyen'))
const articleId = computed(() => Number(params.articleId || 0))
const articleSlug = computed(() => String(params.articleSlug || 'no article slug'))
const categories = computed(() => String(params.categories || 'no cats'))

const {
  pending2,
  data: article,
  error
} = useLazyFetch(`https://www.marche.be/api/post.php?site=${siteSlug.value}&id=${articleId.value}`)
watch(article, (newPost) => {
  console.log(article.value)
})
useHead({
  titleTemplate: (title) => `${title} | Marche.be`,
  script: [{
    //  src: '',
    //  tagPosition: "bodyClose"
  }]
})
</script>
<template>
  <section>
    <div v-if="pending2">
      Loading Article...
    </div>
    <div v-if="error" class="text-red-600">
      Error {{ error }}
    </div>
    <div v-if="article">
      <h3 class="text-2xl font-bold">{{ article.post_title ?? 'bug post title' }}</h3>
      <div v-html="article.post_content ?? 'no content'"></div>
    </div>
    <div v-else>
      <h3 class="text-2xl font-bold">Article not found</h3>
    </div>
    <a class="mt-3 block" href="https://www.marche.be/api/post.php?id={{articleId}}&site={{siteSlug}}">
      https://www.marche.be/api/post.php?id={{ articleId }}&site={{ siteSlug }}
    </a>

    <ul class="mt-3 border border-administration">
      <li class="p-3">site slug: {{ siteSlug }}</li>
      <li class="p-3">article slug: {{ articleSlug }}</li>
      <li class="p-3">article id: {{ articleId }}</li>
    </ul>

  </section>
</template>