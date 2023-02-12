<script setup>
const type = 'article'
const item = {id: 5}
const router = useRouter();
//console.log(router.getRoutes())
//console.log(router.currentRoute)
const route = useRoute()
//console.log(route.params)
const {pending, data: items, error} = useLazyFetch(`https://www.marche.be/api/menu.php`)
watch(items, (newPost) => {
})
</script>
<template>
  <header class="w-full shadow-lg h-20 mt-3">
    <div v-if="pending">
      Loading Menu...
    </div>
    <div v-else>
      <nav class="m-auto w-[60%]">
        <ul class="flex flex-row gap-3">
          <li>
            <NuxtLink :to="{name: 'homepage'}" class="
          font-bold
          pb-2
          bg-gradient-to-r from-pink-500 to-purple-500
          bg-[length:0px_3px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px]
      ">Home
            </NuxtLink>
          </li>
          <li v-for="item in items" :key="item.blogid">
            <NuxtLink :key="item.ID" :to="{name: 'siteIndex', params:{siteSlug:item.slug}}" class="
          font-bold pb-2 capitalize
          bg-gradient-to-r from-pink-500 to-purple-500
          bg-[length:0px_3px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px]
      ">
              {{ item.slug }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>