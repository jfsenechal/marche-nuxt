<script setup>
import ShortCut from "@/components/Footer/ShortCut.vue";
import Copyright from "@/components/Footer/Copyright.vue";
import IconesSocial from "@/components/Header/IconesSocial.vue";
</script>
<template>
  <footer
    class="flex flex-col justify-between bg-cta-dark p-5 pb-20 font-montserrat-light text-white xl:grid xl:grid-cols-4 xl:pb-5"
  >
    <div>
      <img src="images/img_logo_white.png" class="w-20" alt="logo" />
    </div>
    <div class="border-l border-l-white/50 px-3">
      <h4 class="font-montserrat-semi-bold">Découvrez</h4>
      <ul class="grid grid-cols-2 p-2 text-sm leading-6 xl:grid-cols-1">
        <li class="px-2"><a href="">E-Guichet</a></li>
        <li class="px-2"><a href="">Horaires-Contact</a></li>
        <li class="px-2"><a href="">Actualités</a></li>
        <li class="px-2"><a href="">Agenda</a></li>
      </ul>
    </div>
    <ShortCut />
    <div class="border-l border-l-white/50 px-3">
      <h4 class="font-montserrat-semi-bold">Contact</h4>
      <div class="mb-2 text-sm leading-6">
        Contactez l' Hôtel de ville<br />
        Du lundi au jeudi : de 8h à 12h et de 13h à 17h<br />
        Vendredi : de 8h à 12h et de 13h à 15h<br />
      </div>
      <IconesSocial color="text-white"/>
    </div>
    <Copyright />
  </footer>
</template>
