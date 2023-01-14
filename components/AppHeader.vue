<script setup>

</script>
<template>
  <header class="w-full shadow-lg h-20">
    <nav>
      <ul class="flex flex-row gap-3">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <router-link :to="{ name: 'article-id', params:{id: 5} }">Article</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'people-id', params:{people:'rere',id: 5} }">People</router-link>
        </li>
        <li>
          <NuxtLink to="/article/5">Culture</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>