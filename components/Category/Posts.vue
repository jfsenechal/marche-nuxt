<script setup>
import articleGet from "~/composables/articleGet";

const propos = defineProps({
  categorySelected: {type: String, required: true},
  siteSlug: {type: String, required: true}
})

const categorySelected = propos.categorySelected
const siteSlug = computed(() => String(propos.siteSlug || 'citoyen'))

const {pendingArticles, articles, errorArticles} = articleGet(siteSlug.value, categorySelected);
watch(articles, (newarticles) => {
  // Because posts starts out null, you won't have access
  // to its contents immediately, but you can watch it.
  //console.log('newUser', newUser);
  articles.value = articles;
})
</script>
<template>
  <section>
    <div v-if="pendingArticles">
      Loading Articles...
    </div>
    <div v-if="errorArticles" class="text-red-600">
      Error {{ errorArticles }}
    </div>
    <template v-if="articles">
      <ul class="pt-2 xl:pt-6 grid grid-cols-1 gap-1 xl:gap-2 xl:grid-cols-2 my-2">
        <li
            v-for="item in articles"
            :key="item.ID"
            class="rounded-lg p-2 xl:p-2">
          <NuxtLink
              class="flex flex-col justify-between items-start border border-grey-light shadow-md p-4 block min-h-[6rem]"
              :to="{
                   name: 'article',
                   params:{
                      siteSlug:siteSlug,
                      categories:item.parents,
                      articleSlug: item.slug + '-' ?? 'slugNotFound',
                      articleId: item.ID ?? 'IdNotFound' }
            }">
            <h3 class="font-montserrat-semi-bold text-sm xl:text-lg text-cta-dark hover:text-cta-light">
              {{ item.post_title }}
            </h3>
            <span class="mt-2 font-montserrat-light text-sm text-cta-dark" v-html="item.excerpt"></span>
          </NuxtLink>
        </li>
      </ul>
    </template>
  </section>
</template>