<script setup lang="ts">
const {path, params} = useRoute()
const siteSlug = computed(() => String(params.siteSlug || 'citoyen'))
const articleId = computed(() => Number(params.articleId || 0))
const articleSlug = computed(() => String(params.articleSlug || 'no article slug'))
const categories = computed(() => String(params.categories || 'no cats'))

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
  <section>
    <div v-if="pending">
      Loading Article...
    </div>
    <div v-if="error" class="text-red-600">
      Error {{ error }}
    </div>
    <div v-if="article">
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img :src="article.image" alt="Shoes"/>
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ article.post_title ?? 'bug post title' }}</h2>
          <div v-html="article.post_content ?? 'no content'"></div>
        </div>
      </div>
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