<!-- https://dribbble.com/ -->
<template>
  <form name="searching" class="mx-auto hidden lg:flex lg:w-[35rem]">
    <label class="block" for="search">
      <span class="sr-only">Rechercher</span>
    </label>
    <input
      type="search"
      id="search"
      name="s"
      autocomplete="off"
      placeholder="Que cherchez-vous ?"
      class="block flex-grow rounded-full border border-gray-300 bg-white py-3 pl-9 pr-16 font-light leading-5 text-teal-300 placeholder:italic placeholder:text-gray-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
    />
    <button
      type="submit"
      class="i-search relative right-12 top-2 h-6 w-6 bg-cover bg-no-repeat p-2 pl-4"
    ></button>
  </form>
</template>
