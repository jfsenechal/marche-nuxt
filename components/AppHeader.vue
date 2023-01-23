<script setup>
const type = 'article'
const item = {id: 5}
const router = useRouter();
console.log(router.getRoutes())
console.log(router.currentRoute)
const route = useRoute()
console.log(route.params)
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
            <NuxtLink to="/" class="
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
          <!--  <li v-for="item in items" :key="item.blogid">
            <NuxtLink :to="{name: 'site', params:{slug:item.slug}}" class="
          font-bold pb-2
          bg-gradient-to-r from-pink-500 to-purple-500
          bg-[length:0px_3px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px]
      ">
              {{ item.name }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{name:'article', params:{articleId:5}}">Article 4</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{name:'category', params:{site:'culture',slug:'x'}}">Category x</NuxtLink>
          </li>

            <li>
            <NuxtLink :to="{name: 'site-slugArticle', params:{
              site:'iki',
                slugArticle: 'zeze' }}">
              dfdf
            </NuxtLink>
          </li>
            <li>
              <NuxtLink
                  :to="{ name: 'site-categories-slugCategory', params: {
                  site:'citoyen',
                  categories:['environnement','lili'],
                slugCategory: 'hello' }}">
                Citoyen/environnement
              </NuxtLink>
            <              <NuxtLink
                    :to="{ name: 'site-slugCategory', params: { site:'culture',slugCategory: ['musees'] }}">
                  Culture/Musees
                </NuxtLink>
            </li>
            <li>
                 <NuxtLink :to="{ name: 'site-slugArticle', params: { site:'culture',slugArticle: 'musees' }}">
                   Culture/Musees/Fam
                 </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="`/${type}/${item.id}`">
                Article 5
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/parent/child">Child</NuxtLink>
            </li>-->
        </ul>
      </nav>
    </div>
  </header>
</template>