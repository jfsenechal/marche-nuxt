<script setup>
import Article from "~/components/Article.vue";

const type = 'article'
const item = {id: 5}
const router = useRouter();
console.log(router.getRoutes())
</script>
<template>
  <header class="w-full shadow-lg h-20">
    <nav class="m-auto w-[60%]">
      <ul class="flex flex-row gap-3">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'site-slugCategory', params: { slugCategory: 'environnement' }}">
            Citoyen/environnement
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
              :to="{ path:'zz', component: Article,name: 'site-slugCategory', params: { site:'culture',slugCategory: 'musees' }}">
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
      </ul>
    </nav>
  </header>
</template>