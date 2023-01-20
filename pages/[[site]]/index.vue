<script setup lang="ts">
const route = useRoute()
const site = computed(() => String(route.params.site || '/'))
const {pending, data: item, error} = useLazyFetch(`https://www.marche.be/api/menu.php?site=${site.value}`)
</script>
<template>
  <section>
    <h3 class="text-2xl font-bold">Index du site {{ site }}</h3>
    <div v-if="pending">
      Loading Menu...
    </div>
    <div v-else>
      <ul class="flex flex-col gap-2">
        <li v-for="child in item.items" :key="child.ID">
          <NuxtLink :to="{
                  name: 'site-categories-slugCategory',
                  params:{
                      site:item.slug,
                      categories:['environnement','lili'],
                      slugCategory: child.slug }
          }" v-if="child.object === 'category' ">
            {{ child.object }}: {{ child.title }}
          </NuxtLink>
          <NuxtLink :to="{
                   name: 'site-categories-slugArticle',
                   categories:['environnement','lili'],
                   params:{
                     site:item.slug,
                     slugArticle: item.slug ?? 'notfound' }
          }" v-if="child.object === 'post' || child.object === 'page'">
            {{ child.object }}: {{ child.title }}
          </NuxtLink>

          <p v-if="child.object !== 'post' && child.object !== 'page' && child.object !== 'category' ">
            {{ child.object }}: {{ child.title }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>