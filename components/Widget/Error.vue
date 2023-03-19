<template>
  <div class="prose p-12 bg-white rounded-md w-[65ch]">
    <NuxtErrorBoundary>
      <NuxtPage/>
      <template #error="{ error }">
        <p>
          Oh no, something went wrong with the lesson!
          <code>{{ error }}</code>
        </p>
        <p>
          <button
              class="hover:cursor-pointer bg-gray-500 text-white font-bold py-1 px-3 rounded"
              @click="resetError(error)"
          >
            Reset
          </button>
        </p>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
<script setup>
const resetError = async (error) => {
  await navigateTo(
      'home'
  );
  error.value = null;
};
</script>