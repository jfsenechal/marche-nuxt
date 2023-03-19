<script setup>
import {icons} from "~/composables/iconsHomeGet";
</script>
<template>
  <ul class="my-8 flex flex-wrap justify-center gap-2">
    <li v-for="item in icons" :key="item.id"
        :id="item.icon"
        class="group flex flex-shrink-0 flex-grow-0 basis-1/5 justify-center text-center"
    >
      <a :href="item.url" class="icon_custom hover:i-swimmer-white ">
        <i
            :class="item.icon"
            class="group-hover:i-swimmer-white mesicones mx-auto block h-12 w-12 rounded-full bg-white bg-[length:1.25rem_1.25rem] bg-center bg-no-repeat shadow-xl hover:text-white group-hover:bg-cta-light xl:h-14 xl:w-14 xl:bg-[length:2.25rem_2.25rem]">
        </i>
        <span
            class="mx-auto inline-block pt-3 font-montserrat-semi-bold text-sm text-white xl:text-base xl:leading-4"
            v-html="item.title">
                </span>
      </a>
    </li>
  </ul>
</template>
<style>
li#i-swimmer:hover i {
  background-image: url('images/svg/icon_swimmer_white.svg');
}
li#i-leaf:hover i {
  background-image: url('images/svg/icon_leaf_white.svg');
}
li#i-traffic-cone:hover i {
  background-image: url('images/svg/icon_trafficcone_white.svg');
}
li#i-beach-ball:hover i {
  background-image: url('images/svg/icon_beachball_white.svg');
}
li#i-map:hover i {
  background-image: url('images/svg/icon_map_white.svg');
}
li#i-handshake:hover i {
  background-image: url('images/svg/icon_handshake_white.svg');
}
li#i-envelope:hover i {
  background-image: url('images/svg/icon_envelope_white.svg');
}
</style>