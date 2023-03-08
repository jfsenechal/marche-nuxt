<script setup>
import HomeSearch from "@/components/Homepage/HomeSearch.vue";
import News from "@/components/Homepage/News.vue";
import Agenda from "@/components/Homepage/Agenda.vue";
import Widgets from "@/components/Homepage/Widgets.vue";
import Partners from "@/components/Homepage/Partners.vue";

definePageMeta({
  layout: false
})
</script>
<template>
  <NuxtLayout name="homelayout">
    <HomeSearch/>
    <main>
      <section class="mx-2 mx-auto grid grid-cols-1 xl:mx-40 xl:grid-cols-[60%,40%] xl:gap-4">
        <div>
          <News/>
        </div>
        <div class="shadow-lg">
          <Agenda/>
        </div>
      </section>
      <section>
        <Widgets/>
      </section>
      <section>
        <Partners/>
      </section>
    </main>
  </NuxtLayout>
</template>