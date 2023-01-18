<script setup>
const route = useRoute()
const title = ref('ouip')
console.log(route.params.id)
const id = computed(() => Number(route.params.id || 1))
console.log(id)
const {pending, data: post, error} = useLazyFetch(`https://www.marche.be/api/post.php?id=${route.params.id}`)
console.log(`https://www.marche.be/api/post.php?id=${id.value}`)
watch(post, (newPost) => {
  console.log(post, newPost)
  console.log(pending)
})

//const foo = articleGet(id)

definePageMeta({
  validate: async (route) => {
    const nuxtApp = useNuxtApp()
    // Check if the id is made up of digits
    return /^\d+$/.test(route.params.id)
  }
})
const desc = ref('My amazing site.')
useHead({
  meta: [
    {name: 'description', content: desc}
  ],
})
</script>
<template>
  <article>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <div v-if="pending">
      Loading ...
    </div>
    <div v-else>
      <h1>Article {{ $route.params.id }} {{ post.post_title }}</h1>
    </div>
  </article>
</template>