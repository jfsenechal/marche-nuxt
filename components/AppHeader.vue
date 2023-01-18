<script setup>
const type = 'article'
const item = {id: 5}
</script>
<template>
  <header class="w-full shadow-lg h-20">
    <nav>
      <ul class="flex flex-row gap-3">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <router-link :to="{ name: 'site-slug', params:{site:'culture',slug: 'musees'} }">
            Culture/Musees
          </router-link>
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