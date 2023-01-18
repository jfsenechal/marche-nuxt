<script setup>
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
          <NuxtLink :to="{ name: 'slug', params: { slug: 'environnement' }}">
            Citoyen/environnement
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'site-slug', params: { site:'culture',slug: 'musees' }}">
            Culture/Musees
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'site-slug', params: { site:'culture',slug: 'musees' }}">
            Culture/Musees/Fam
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/article/5">Article 5</NuxtLink>
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