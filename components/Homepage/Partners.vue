<script setup>
const partners = [
  {
    url: "https://cap.marche.be",
    img: "../images/img/img_sponsor02.png",
    alt: "cap commerçant",
    id: 1,
  },
  {
    url: "https://www.visitmarche.be",
    img: "../images/img/visit_logo_b.png",
    alt: "visit marche",
    id: 2,
  },
  {
    url: "/economie",
    img: "../images/img/img_sponsor04.png",
    alt: "economie",
    id: 3,
  },
  {
    url: "http://www.paysdefamenne.be",
    img: "../images/img/img_sponsor03.png",
    alt: "pays de famenne",
    id: 4,
  },
  {
    url: "https://www.famenneardenne.be",
    img: "../images/img/img_sponsor01.png",
    alt: "famenne ardenne",
    id: 5,
  },
  {
    url: "https://mcfa.marche.be",
    img: "../images/img/img_sponsor05.png",
    alt: "mcfa",
    id: 6,
  },
  {
    url: "https://artistes.marche.be",
    img: "../images/img/artistes.png",
    alt: "artistes",
    id: 7,
  },
];
</script>
<template>
  <div class="bg-partner relative">
    <div class="mx-auto flex flex-wrap items-center justify-between gap-2">
      <a
        v-for="item in partners"
        :id="item.id"
        :key="item.id"
        :href="item.url"
        class="cursor-pointer py-3 px-2 text-center"
      >
        <img
          :src="item.img"
          :alt="item.alt"
          class="h-16 grayscale transition-all hover:grayscale-0"
        />
      </a>
    </div>
  </div>
</template>
<style>
.bg-partner {
  background-color: #ededec;
}
</style>
