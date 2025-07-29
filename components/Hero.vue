<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Video Background -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/public/images/memorii_journeys.mp4" type="video/mp4">
      <!-- Fallback for browsers that don't support video -->
      Your browser does not support the video tag.
    </video>
    
    <!-- Dark overlay for better text readability -->
    <div class="absolute inset-0 bg-black/30"></div>
   
    <!-- Content Container -->
    <div class="relative text-center z-10">
      <!-- Header Content -->
      <h1 class="text-4xl md:text-8xl text-white mb-4">
        MEMORII
        <span class="block font-bold font-noto-serif italic">Journeys</span>
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed for the hero component
</script>

<style scoped>
/* Add any hero-specific styles here */
</style>