<script setup>
const posts = [
  {name: 'Journée du Bien-Être Animal (25 septembre)', id: 1},
  {name: 'Journée du Bien-Être Animal (25 septembre)', id: 2},
  {name: 'Journée du Bien-Être Animal (25 septembre)', id: 3}
]
</script>
<template>
  <div class="my-6 xl:row-start-4 xl:row-end-6 xl:col-start-3 xl:col-end-4">
    <h4 class="font-montserrat-bold text-cta-dark">Consultez aussi</h4>
    <div class="mt-6">
      <ul role="list" class="mt-3 flex flex-col gap-2">
        <li class="group rounded-md shadow-lg" v-for="item in posts" :key="item.id">
          <a href="#" class="flex">
            <div
                class="flex flex-shrink-0 items-center justify-center rounded-l-md transition-all duration-500 group-hover:opacity-75"
            >
              <img src="images/BEA-r_long.jpg" alt="img" class="h-28 w-28"/>
            </div>
            <div
                class="rounded-r-md border-t border-r border-b border-gray-200 bg-white w-full"
            >
              <div
                  class="flex h-full flex-col justify-between px-4 py-4 text-sm"
              >
                <span
                    href="#"
                    class="block font-semi-bold text-cta-dark group-hover:text-cta-light">
                  {{ item.name }}
                </span>
                <p class="block font-montserrat-bold text-citoyen">Citoyen</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
