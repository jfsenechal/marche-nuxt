<template>
  <NuxtLayout name="emptylayout">
    <header class="bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Marche-en-Famenne</span>
            <img class="h-8 w-auto" src="/images/img_logo.png" alt=""/>
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <Popover class="relative">
            <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Vivre à Marche
              <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
                        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
                        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                  class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div class="p-4">
                  <div v-for="item in menu" :key="item.blogid"
                       class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div
                        class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <component :is="Bars3Icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                 aria-hidden="true"/>
                    </div>
                    <div class="flex-auto">
                      <a href="/" class="block font-semibold text-gray-900">
                        {{ item.name }}
                        <span class="absolute inset-0"/>
                      </a>
                      <p class="mt-1 text-gray-600">
                        Build strategic funnels that will convert
                      </p>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a v-for="item in items" :key="item.id" href="#"
             class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
              aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
    </header>
  </NuxtLayout>
</template>

<script setup>
import {items} from "~/composables/menuItemsGet";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import {ChevronDownIcon, PhoneIcon, PlayCircleIcon} from '@heroicons/vue/20/solid'

import menuGet from "~/composables/menuGet";

const {
  pendingMenu,
  menu,
  errorMenu
} = menuGet()

const mobileMenuOpen = ref(false)
</script>