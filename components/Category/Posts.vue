<script setup>
const propos = defineProps({categoryId: Number})
const categoryId = propos.categoryId
const {path, params} = useRoute()
const siteSlug = computed(() => String(params.siteSlug || 'citoyen'))

const {
  pending,
  data: articles,
  error
} = useLazyFetch(`https://www.marche.be/nuxt/posts.php?site=${siteSlug.value}&id=${categoryId}`)
</script>
<template>
  <section>
    <div v-if="pending">
      Loading Articles...
    </div>
    <div v-if="error" class="text-red-600">
      Error {{ error }}
    </div>
    <template v-if="articles">
      <ul class="pt-2 xl:pt-6 grid grid-cols-1 gap-1 xl:gap-2 xl:grid-cols-2 my-2">
        <li
            v-for="item in articles"
            :key="item.ID"
            class="rounded-lg p-2 xl:p-4">
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