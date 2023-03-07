<script setup>
const widgets = [
  {
    title: "Avis de publication",
    intro: "Enquêtes publiques, <br>assemblées institutions...",
    class: "bg-img-widgets-1",
    url: "/",
    id: 1,
  },
  {
    title: "Economie",
    intro: "Infos pratiques, <br>commerces locaux...",
    class: "bg-img-widgets-2",
    url: "/",
    id: 2,
  },
  {
    title: "Participation citoyenne",
    intro:
      "Plateforme de l'enveloppe participative,<br> consultations publiques…",
    class: "bg-img-widgets-3",
    url: "/",
    id: 3,
  },
  {
    title: "Plateforme de volontariat",
    intro: "Offres et demandes du tissu associatif",
    class: "bg-img-widgets-4",
    url: "/",
    id: 4,
  },
  {
    title: "Avis de décès",
    intro: "Annonces nécrologiques <br> de notre commune",
    class: "bg-img-widgets-5",
    url: "/",
    id: 5,
  },
];
</script>
<template>
  <div
    class="grid grid-cols-1 gap-2 pt-6 xl:grid-cols-[repeat(5,1fr)] relative"
    id="widgets"
  >
    <div
      v-for="item in widgets"
      :id="item.id"
      :key="item.id"
      class="relative flex items-center overflow-hidden"
    >
      <i
        :class="
          'absolute inset-0 block h-32 bg-cover bg-center bg-no-repeat grayscale ' +
          item.class
        "
      ></i>
      <a
        :href="item.url"
        class="bg-widget-color hover:bg-widget-color-hover group relative flex h-32 w-full flex-col items-center justify-start pt-4 text-white transition-all duration-700"
      >
        <h3
          class="relative top-6 font-montserrat-semi-bold text-xl transition-all duration-700 group-hover:top-0 group-hover:ease-in-out"
        >
          {{ item.title }}
        </h3>
        <span
          class="relative -bottom-20 pt-4 text-lg text-white transition-all delay-300 duration-700 group-hover:bottom-0"
          v-html="item.intro"
        >
        </span>
      </a>
    </div>
  </div>
</template>
