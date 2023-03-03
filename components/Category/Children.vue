<script setup>
const emit = defineEmits(['updateCategorySelected'])
const propos = defineProps({categoryId: Number})
const categoryId = propos.categoryId
const {path, params} = useRoute()
const siteSlug = computed(() => String(params.siteSlug || 'citoyen'))
const categorySelected = ref(0)
const {
  pending,
  data: children,
  error
} = useLazyFetch(`https://www.marche.be/nuxt/categories.php?site=${siteSlug.value}&id=${categoryId}`)

</script>
<template>
  <section>
    <div v-if="pending">
      Loading Children...
    </div>
    <div v-if="error" class="text-red-600">
      Error {{ error }}
    </div>
    <template v-if="children">
      <select name="category"
              class="xl:hidden flex border border-cta-dark p-2 mt-3 font-montserrat-semi-bold bg-white mx-auto">
        <option v-for="item in children" :key="item.cat_ID" :value="item.cat_ID">
          {{ item.name }}
        </option>
      </select>

      <ul class="hidden xl:flex pt-6 flex-1 flex-wrap gap-2 w-1/2 my-2">
        <li
            v-for="item in children"
            :key="item.cat_ID"
            @click="$emit('updateCategorySelected',item.slug)"
            class="border border-cta-dark p-3 font-montserrat-light rounded hover:bg-cta-dark hover:text-white">
            {{ item.name }}
        </li>
      </ul>
    </template>
  </section>
</template>