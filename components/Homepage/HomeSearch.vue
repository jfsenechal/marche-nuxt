<!-- https://play.tailwindcss.com/SvBc6xaRWJ -->
<script setup>
import FormSearch from "@/components/Homepage/FormSearch.vue";
import IconsShortCut from "@/components/Homepage/IconsShortCut.vue";
import Wave from "@/components/Homepage/Wave.vue";
</script>
<template>
  <section
    class="bghome-image flex w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
  >
    <h1
      class="pb-6 pt-6 text-center font-montserrat-semi-bold text-2xl text-white xl:pb-8 xl:pt-24"
    >
      Bienvenue <span class="lg:hidden"><br /></span> à Marche-en-Famenne
    </h1>
    <FormSearch/>
    <IconsShortCut/>
    <Wave />
  </section>
</template>
<style>
.bghome-image {
  background-image: linear-gradient(
      90deg,
      rgba(1, 31, 22, 0.38),
      rgba(0, 75, 142, 0.38)
    ),
    url(images/bh_home2.jpg);
}
</style>
