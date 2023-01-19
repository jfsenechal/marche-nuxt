<script setup>
const type = 'article'
const item = {id: 5}
const router = useRouter();
console.log(router.getRoutes())

const {pending, data: items, error} = useLazyFetch(`https://www.marche.be/api/menu.php`)
watch(items, (newPost) => {
  console.log(items, newPost)
  console.log(pending)
})

</script>
<template>
  <header class="w-full shadow-lg h-20">
    <div v-if="pending">
      Loading Menu...
    </div>
    <div v-else>
      <nav class="m-auto w-[60%]">
        <ul class="flex flex-row gap-3">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li v-for="item in items" :key="item.blogid">
            <NuxtLink :to="{name: 'site', params:{site:item.name}}">{{ item.name }}</NuxtLink>
          </li>
          <!--   <li>
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