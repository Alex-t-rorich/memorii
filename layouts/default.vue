<!-- layouts/default.vue -->
<template>
  <LayoutTheHeader />
  <main class="">
    <slot />
  </main>
  <LayoutTheFooter />
</template>

<script setup>
// Explicitly import it for testing
import LayoutTheHeader from '~/components/layout/TheHeader.vue'
</script>
