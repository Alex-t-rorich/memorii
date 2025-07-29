<template>
  <section
    class="relative bg-cover bg-center bg-no-repeat py-16 px-4 h-screen flex items-center justify-center"
    style="background-image: url('/images/bg.jpg');"
  >
    <div class="absolute inset-0 bg-black/20"></div>
    <!-- Content Container -->
    <div class="relative w-full max-w-7xl mx-auto text-center">
      <div class="mb-12">
        <h2 class="text-3xl md:text-5xl text-white mb-4">Select your department</h2>
        <p class="text-lg text-white">
          Discover extraordinary experiences, tailored to your specific needs and preferences
        </p>
      </div>
      <!-- Cards Grid -->
      <div class="grid grid-cols-3 gap-6">
        <!-- Travel Advisor -->
        <div
          @click="selectCard('travel-advisor')"
          :class="[
            'bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl',
            activeCard === 'travel-advisor' ? 'ring-4 ring-yellow-400 ring-opacity-75' : ''
          ]"
        >
          <div
            class="aspect-[3/4] bg-cover bg-center"
            style="background-image: url('/images/travel-advisor.jpg');"
          ></div>
          <div class="p-4 bg-neutral">
            <h3 class="text-black font-medium text-center">Travel Advisor</h3>
          </div>
        </div>
        <!-- Corporate Partner -->
        <div
          @click="selectCard('corporate-partner')"
          :class="[
            'bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl',
            activeCard === 'corporate-partner' ? 'ring-4 ring-yellow-400 ring-opacity-75' : ''
          ]"
        >
          <div
            class="aspect-[3/4] bg-cover bg-center"
            style="background-image: url('/images/corporate.jpg');"
          ></div>
          <div class="p-4 bg-neutral">
            <h3 class="text-black font-medium text-center">Corporate Partner</h3>
          </div>
        </div>
        <!-- Individual Clients -->
        <div
          @click="selectCard('individual-clients')"
          :class="[
            'bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl',
            activeCard === 'individual-clients' ? 'ring-4 ring-yellow-400 ring-opacity-75' : ''
          ]"
        >
          <div
            class="aspect-[3/4] bg-cover bg-center"
            style="background-image: url('/images/3.jpg');"
          ></div>
          <div class="p-4 bg-neutral">
            <h3 class="text-black font-medium text-center">Individual Clients</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Define emits
const emit = defineEmits(['cardSelected'])

// Reactive state for active card
const activeCard = ref<string | null>(null)

// URL mapping for each card type
const urlMap = {
  'travel-advisor': '/travel-advisors',
  'corporate-partner': '/corporates',
  'individual-clients': 'https://www.memoriijourneys.com/'
}

// Function to handle card selection
const selectCard = async (cardType: string) => {
  activeCard.value = cardType
  emit('cardSelected', cardType)
  
  // Navigate to the appropriate URL
  const url = urlMap[cardType as keyof typeof urlMap]
  if (url) {
    // Check if it's an external URL
    if (url.startsWith('http')) {
      // External navigation
      window.location.href = url
      // Or for new tab: window.open(url, '_blank')
    } else {
      // Internal Nuxt navigation
      await navigateTo(url)
    }
  }
}
</script>

<style scoped>
.ring-gold {
  --tw-ring-color: #ffd700;
}
</style>