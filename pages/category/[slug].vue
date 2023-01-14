<script setup>
const route = useRoute()
const slug = computed(() => String(route.params.slug || 'home'))
console.log(slug.value)
//const {pending, data: posts} = useLazyFetch('https://www.marche.be/api/posts.php?id=38')
const {pendingCat, data: category} = useLazyFetch('https://www.marche.be/api/category.php?slug=' + slug.value)
//console.log(pending.value)
watch(category, (newCat) => {
  console.log(123)
  console.log(pendingCat)
  console.log(category, newCat)
})
const posts = []
const pending = true
</script>
<template>
  <section>
    <div v-if="pendingCat">
      Loading cat ...
    </div>
    <div v-else>
      <p>{{ category.name }}</p>
      <p v-html="category.description"></p>
    </div>
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
  </section>
</template>