<script setup>
import NavigationVivreTitleMobile from "@/components/Header/Mobile/NavigationVivreTitleMobile.vue";
import NavigationBackMenuMobile from "@/components/Header/Mobile/NavigationBackMenuMobile.vue";

const {pending, data: mainItems, error} = useLazyFetch(`https://www.marche.be/nuxt/menu.php`)
/**
 * Ouvre et ferme-le sous menu d'un onglet de vivre
 * @param blogid
 * @param action
 */
function toggleSubMenu(blogid, action) {
  var sousmenu = document.querySelector("#second-id-" + blogid);
  if (action === "close") {
    sousmenu.style.left = "100%";
  }
  if (action === "open") {
    sousmenu.style.left = "0";
  }
}

/**
 * Ouvre et ferme menu vivre en version mobile
 * @param action
 */
function toggleMenu(action) {
  const menu = document.querySelector("#menu-vivre");
  if (action === "close") {
    menu.style.top = "100%";
  }
  if (action === "open") {
    menu.style.top = 0;
  }
}
</script>
<template>
  <nav
    class="xl:hidden fixed bg-cta-dark top-full bottom-0 left-0 right-0 h-full xl:h-auto xl:top-20 xl:bottom-auto xl:pb-4 w-full transition-all duration-500"
    id="menu-vivre">
    <ul
      class="flex flex-col items-start xl:items-stretch justify-start h-full xl:h-auto mt-3 box-border xl:max-w-[50%]">
      <NavigationVivreTitleMobile @toggle-menu="toggleMenu" />
      <li
        v-for="item in mainItems"
        :data-top-id="item.blogid"
        :key="item.blogid"
        class="py-1 initial w-full xl:w-auto flex flex-col xl:basis-full hover:bg-white font-montserrat-semi-bold leading-10 xl:leading-8 text-white"
        :class="item.colorhover">
        <a href="/"
           @click.prevent="toggleSubMenu(item.blogid, 'open')"
           class="flex justify-between items-center xl:inline ml-6 mr-6 whitespace-nowrap xl:ml-auto">
          <span>{{ item.name }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="xl:hidden w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </a>
        <div
          :id="'second-id-' + item.blogid"
          class="overscroll-contain overflow-y-scroll xl:overscroll-auto xl:overflow-y-auto xl:hidden left-full bg-white xl:bg-cta-dark absolute top-0 bottom-0 xl:left-1/2 right-0 group-hover:bg-white transition-all duration-700">
          <NavigationBackMenuMobile @toggle-sub-menu="toggleSubMenu" :item="item">
            {{ item.name }}
          </NavigationBackMenuMobile>
          <ul class="w-full pl-4 pb-4 xl:p-8 grid grid-cols-1 xl:grid-cols-2">
            <li
              v-for="child in item.items"
              :key="child.ID"
              class="text-cta-dark font-montserrat-regular"
              :class="item.colorhover">
              <a :href="child.url">
                {{ child.title }}
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>
<style>
li.initial {
  position: initial;
}

#sousmenu a:not([href^='https://www.marche.be'])::after {
  background-image: url("images/external.svg");
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 1.2rem;
  height: 1.2rem;
  background-size: 100%;
  margin-inline-start: 0.8rem;
  opacity: 0.8;
}

li[data-top-id='1']:hover div,
li[data-top-id='2']:hover div,
li[data-top-id='3']:hover div,
li[data-top-id='4']:hover div,
li[data-top-id='5']:hover div,
li[data-top-id='6']:hover div,
li[data-top-id='7']:hover div,
li[data-top-id='8']:hover div,
li[data-top-id='11']:hover div,
li[data-top-id='12']:hover div,
li[data-top-id='13']:hover div,
li[data-top-id='14']:hover div {
  @apply xl:opacity-100 xl:bg-white xl:block;
}
</style>