<script setup>
const route = useRoute()
const siteSlug = computed(() => String(route.params.siteSlug || 'citoyen'))
const {pending, data: item, error} = useLazyFetch(`https://www.marche.be/api/menu.php?site=${siteSlug.value}`)
</script>
<template>
  <section>
    <h3 class="text-2xl font-bold">Index du site {{ siteSlug }}</h3>
    <p>
      <a :href='`https://www.marche.be/api/menu.php?site=${siteSlug}`'>
        https://www.marche.be/api/menu.php?site={{ siteSlug }}
      </a>
    </p>
    <div v-if="pending">
      Loading Menu...
    </div>
    <div v-else>
      <ul class="flex flex-col gap-2">
        <li v-for="child in item.items" :key="child.ID" class="p-1">
          <NuxtLink :to="{
                  name: 'category',
                  params:{
                      siteSlug:siteSlug,
                      categories:child.parents,
                      categorySlug: child.slug ?? 'slugfound' }
          }" v-if="child.object === 'category' ">
            {{ child.object }}: {{ child.title }}
          </NuxtLink>
          <NuxtLink :to="{
                   name: 'article',
                   params:{
                      siteSlug:siteSlug,
                      categories:child.parents,
                      articleSlug: child.slug + '-' ?? 'slugNotFound',
                      articleId: child.object_id ?? 'IdNotFound' }
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