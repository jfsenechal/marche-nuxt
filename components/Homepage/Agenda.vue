<script setup>

import eventsGet from "~/composables/eventsGet";

const {
  pendingEvents,
  events,
  errorEvents
} = eventsGet()

</script>
<template>
  <section>
    <h2
        class="py-2 px-4 xl:p-4 text-center font-montserrat-bold text-2xl text-cta-dark lg:text-left"
    >
      Agenda
    </h2>
    <template v-if="pendingEvents">
      Loading Events...
    </template>
    <template v-if="errorEvents" class="text-red-600">
      Error {{ errorEvents }}
    </template>
    <ul v-if="events">
      <li v-for="item in events.slice(0, 5)" class="">
        <a
            href="#"
            class="group my-2 grid grid-cols-[6rem,1fr] rounded-lg border border-grey-light/50 text-cta-dark transition-all duration-700 hover:border-cta-light xl:grid-cols-[10rem,1fr]"
        >
          <div
              class="flex flex-col items-center justify-center border-x transition-all duration-700 group-hover:bg-cta-light group-hover:text-white"
          >
          <span class="font-montserrat-semi-bold text-xl">
            {{ item.dateEvent["day"] }}
          </span>
            <span class="">{{ item.dateEvent["month"] }}</span>
            <span class="">{{ item.dateEvent["year"] }}</span>
          </div>
          <div class="flex flex-col items-start justify-center px-8">
            <span>{{ item.nom }}</span>
            <span class="text-sm text-gray-500">{{ item.locality }}</span>
          </div>
        </a>
      </li>
    </ul>
    <NuxtLink to="agenda"
              class="my-4 ml-auto mr-2 flex justify-between items-center w-52 font-montserrat-semi-bold text-cta-light transition-all duration-700 hover:mr-8">
      Tout l'agenda
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
      </svg>
    </NuxtLink>
  </section>
</template>
