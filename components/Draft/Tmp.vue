<template>

  <br />
  <br />

  <header class="bg-white shadow-md h-20">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">
      <div class="flex lg:flex-1 h-20">
        <a href="/" class="">
          <span class="sr-only">Marche-en-Famenne</span>
          <img class="h-12 w-auto" src="/images/img_logo.png" alt="logo ville"/>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12 h-20">
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            Vivre à Marche
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
          </PopoverButton>
          <transition enter-active-class="transition ease-out duration-300" enter-from-class="opacity-0 translate-y-1"
                      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-300"
                      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel
                class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in menu" :key="item.blogid"
                     class="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50">
                  <div
                      class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="Bars2Icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                               aria-hidden="true"/>
                  </div>
                  <div class="flex-auto">
                    <a :href="item.name" class="block font-semibold text-gray-900">
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <a v-for="item in items" :key="item.id" href="#"
           class="block h-full border-transparent hover:border-b hover:border-black text-sm font-semibold leading-6 text-gray-900">
          {{ item.name }}
        </a>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end h-20">
        <IconesSocial/>
      </div>
    </nav>

  </header>
</template>