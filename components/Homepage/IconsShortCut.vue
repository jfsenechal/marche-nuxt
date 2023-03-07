<script setup>
const icones = [
  {
    title: "Piscine",
    icon: "i-swimmer",
    iconHover: "group-hover:i-swimmer-white",
    id: 1,
    url: "/",
  },
  {
    title: "Environnement <br/>Déchet",
    icon: "i-leaf",
    iconHover: "group-hover:i-leaf-white",
    id: 2,
    url: "/",
  },
  {
    title: "Travaux <br/>Arrêtés de Police",
    icon: "i-traffic-cone",
    iconHover: "group-hover:i-traffic-cone-white",
    id: 3,
    url: "/",
  },
  {
    title: "Enfance<br/>Jeunesse",
    icon: "i-beach-ball",
    iconHover: "group-hover:i-beach-ball-white",
    id: 4,
    url: "/",
  },
  {
    title: "Carte dynamique",
    icon: "i-map",
    iconHover: "group-hover:i-map-white",
    id: 5,
    url: "/",
  },
  {
    title: "CPAS",
    icon: "i-handshake",
    iconHover: "group-hover:i-handshake-white",
    id: 6,
    url: "/",
  },
  {
    title: "@Marche.be",
    icon: "i-envelope",
    iconHover: "group-hover:i-envelope-white",
    id: 7,
    url: "/",
  },
];
</script>
<template>
  <ul class="my-8 flex flex-wrap justify-center gap-2">
    <li
      v-for="item in icones"
      :id="item.id"
      :key="item.id"
      class="group flex flex-shrink-0 flex-grow-0 basis-1/5 justify-center text-center"
    >
      <a :href="item.url" class="icon_custom">
        <i
          class="mesicones mx-auto block h-12 w-12 rounded-full bg-white bg-[length:1.25rem_1.25rem] bg-center bg-no-repeat shadow-xl hover:text-white group-hover:bg-cta-light xl:h-14 xl:w-14 xl:bg-[length:2.25rem_2.25rem]"
          :class="item.icon + ' ' + item.iconHover"
        >
        </i>
        <span
          class="mx-auto inline-block pt-3 font-montserrat-semi-bold text-sm text-white xl:text-base xl:leading-4"
          v-html="item.title"
        ></span>
      </a>
    </li>
  </ul>
</template>
