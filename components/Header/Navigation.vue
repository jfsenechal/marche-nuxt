<script setup>
import NavigationVivre from "@/components/Header/NavigationVivre.vue";
import IconMenuVivreSvg from "@/components/Header/IconMenuVivreSvg.vue";
import NavIconHomeMobile from "@/components/Header/Mobile/NavIconHomeMobile.vue";
import NavIconSearchMobile from "@/components/Header/Mobile/NavIconSearchMobile.vue";
import NavIconCommuneShortCutMobile from "@/components/Header/Mobile/NavIconCommuneShortCutMobile.vue";
import NavItemsXl from "@/components/Header/NavItemsXl.vue";

const emit = defineEmits(["open-search", "close-search"]);

function openSearch() {
  emit("open-search");
}

function closeSearch() {
  emit("close-search");
}

/**
 * Open main menu mobile
 */
function openMenuVivre() {
  const menu = document.querySelector("#menu-vivre");
  menu.style.top = "0";
}
</script>
<template>
  <nav class="relative h-16 flex px-2 lg:px-8" aria-label="Global">
    <ul class="flex items-stretch bg-cta-dark text-white xl:flex xl:bg-white xl:text-cta-dark"
        id="navigationTop">
      <NavIconHomeMobile/>
      <NavIconSearchMobile/>
      <li
          class="hidden px-3 xl:flex xl:items-stretch xl:font-montserrat-semi-bold xl:transition-all xl:duration-500 btn-vivre">
        <a href="#"
           class="hidden xl:inline-flex items-center border-b-2 border-transparent hover:border-b-2 hover:border-cta-light  leading-6 text-cta-dark">
          <IconMenuVivreSvg/>
          Vivre à Marche
        </a>
        <label for="checkboxMenu" class="flex xl:hidden icon-menu-mobile cursor-pointer">
          <button name="menu" @click="openMenuVivre">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </button>
          <span class="text-menu-mobile">Menu2</span>
        </label>
        <NavigationVivre/>
      </li>
      <NavIconCommuneShortCutMobile/>
      <NavItemsXl @open-search="openSearch"/>
    </ul>
  </nav>
</template>
<style>

.btn-vivre:hover > nav {
  @apply xl:block
}

.icon-menu-mobile {
  @apply my-4 flex-col flex-wrap items-center justify-center font-montserrat-semi-bold;
}

.text-menu-mobile {
  @apply text-xs font-montserrat-light;
}

.musshadow {
  /* box-shadow: 0 -0.125rem 0.45rem rgba(0, 0, 0, 0.75);
   @apply lg:shadow-none*/
}

</style>
