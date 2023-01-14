<script setup>
const route = useRoute()
console.log(route.params.id)
const id = computed(() => Number(route.params.id || 1))
console.log(id)
const {pending, data: posts} = useLazyFetch('https://www.marche.be/api/posts.php?id=38')
const {pending, data: posts} = useLazyFetch('https://www.marche.be/api/categories.php?id=38')
console.log(pending.value)
watch(posts, (newPosts) => {
  console.log(pending)
  console.log(posts, newPosts)
})
</script>
<template>
  <div v-if="pending">
    Loading ...
  </div>
  <div v-else>
    <ul class="pt-2 xl:pt-6 grid grid-cols-1 gap-1 xl:gap-2 xl:grid-cols-2 my-2">
      <li
          v-for="item in posts"
          :key="item.ID"
          class="rounded-lg p-2 xl:p-4">
        <NuxtLink :to="`/article/${item.ID}`"
                  class="flex flex-col justify-between items-start border border-grey-light shadow-md p-4 block min-h-[6rem]">
          <h3 class="font-montserrat-semi-bold text-sm xl:text-lg text-cta-dark hover:text-cta-light">
            {{ item.post_title }}
          </h3>
          <span class="mt-2 font-montserrat-light text-sm text-cta-dark" v-html="item.excerpt"></span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>