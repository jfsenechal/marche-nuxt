<script setup>
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
import {items} from "~/composables/menuItemsGet";

definePageMeta({
  layout: false,
  title: 'test',
})
const {
  pendingMenu,
  menu,
  errorMenu
} = menuGet()

const products = [
  {name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon},
  {name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon},
  {name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon},
  {name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon},
  {name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon},
]
const callsToAction = [
  {name: 'Watch demo', href: '#', icon: PlayCircleIcon},
  {name: 'Contact sales', href: '#', icon: PhoneIcon},
]

const mobileMenuOpen = ref(false)
</script>
<template>
  <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
    <div class="fixed inset-0 z-10" />
    <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
          <span class="sr-only">Close menu</span>
          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <Disclosure as="div" class="-mx-3" v-slot="{ open }">
              <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                Product
                <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
              </DisclosureButton>
              <DisclosurePanel class="mt-2 space-y-2">
                <DisclosureButton v-for="item in [...products, ...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
              </DisclosurePanel>
            </Disclosure>
            <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
            <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
            <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
          </div>
          <div class="py-6">
            <a href="#" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>