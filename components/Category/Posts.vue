<script setup>
import articlesGet from "~/composables/articlesGet";
import Loader from "@/components/Widget/Loader.vue";

const propos = defineProps({
  categorySelected: {type: String, required: true, default: ''},
  siteSlug: {type: String, required: true, default: ''}
})

const {
  pendingArticles,
  articles,
  errorArticles
} = articlesGet(propos.siteSlug, propos.categorySelected);

</script>
<template>
  <section>
    <div v-if="pendingArticles">
      <Loader>Loading Articles...</Loader>
    </div>
    <template v-else-if="!articles.length">
      <p class="text-2xl text-red-400 pt-2 xl:pt-6 ">Aucun article trouvé :-(</p>
    </template>
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