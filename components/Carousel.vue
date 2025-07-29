<template>
  <div class="w-full py-16 bg-gray-100">
    <!-- Text Section -->
    <div class="max-w-7xl mx-auto px-4 mb-20 ">
      <div class="relative">
        <!-- Decorative line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 top-0 w-24 h-1 bg-gold mb-8"></div>
        
        <div class="text-center max-w-5xl mx-auto pt-12">
          <h2 class="text-4xl md:text-5xl text-brand mb-12 tracking-wide">
            Why <em class="font-serif italic text-gold">memorii</em>?
          </h2>
          
          <div class="grid md:grid-cols-2 gap-12 text-left">
            <div class="space-y-8">
              <p class="text-xl text-brand leading-relaxed font-light">
                We are here to <strong class="font-semibold text-gold">elevate offerings</strong> to your clients by making your life easier and collaborating with you to curate the most exceptional places and spaces for their needs.
              </p>
            </div>
            
            <div class="space-y-8">
              <p class="text-xl text-brand leading-relaxed font-light">
                We work globally with villa owners, private estates, and yacht partners to secure <strong class="font-semibold text-gold">incredible spaces for 10-50 guests</strong>. We don't believe in just traveling for a break from the everyday, instead, we curate for the more meaningful moments in your clients' life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel Section -->
    <div class="overflow-hidden">
      <div 
        class="flex gap-6 animate-scroll"
        :class="{ 'paused': isHovered }"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <!-- First set of cards -->
        <div 
          v-for="(card, index) in cards" 
          :key="`first-${index}`"
          class="flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <div 
            class="h-64 bg-cover bg-center"
            :style="{ backgroundImage: `url('${card.image}')` }"
          ></div>
          <div class="p-4" style="background-color: #dbad3f;">
            <h3 class="text-white font-medium text-center">{{ card.title }}</h3>
          </div>
        </div>
        
        <!-- Duplicate set for infinite scroll -->
        <div 
          v-for="(card, index) in cards" 
          :key="`second-${index}`"
          class="flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <div 
            class="h-64 bg-cover bg-center"
            :style="{ backgroundImage: `url('${card.image}')` }"
          ></div>
          <div class="p-4" style="background-color: #dbad3f;">
            <h3 class="text-white font-medium text-center">{{ card.title }}</h3>
          </div>
        </div>

        <!-- Third set for seamless loop -->
        <div 
          v-for="(card, index) in cards" 
          :key="`third-${index}`"
          class="flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <div 
            class="h-64 bg-cover bg-center"
            :style="{ backgroundImage: `url('${card.image}')` }"
          ></div>
          <div class="p-4" style="background-color: #dbad3f;">
            <h3 class="text-white font-medium text-center">{{ card.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
      cards: [
        {
          image: '/images/villa-photos/celebrations.avif',
          title: 'Milestone Celebrations'
        },
        {
          image: '/images/villa-photos/rest.avif',
          title: 'Rest & Renewal'
        },
        {
          image: '/images/villa-photos/family.png',
          title: 'Family & Friends'
        },
        {
          image: '/images/villa-photos/retreat2.png',
          title: 'Retreat with Purpose'
        },
        {
          image: '/images/yacht-photos/memorii-transitions.jpg',
          title: 'Life Transition'
        },
        {
          image: '/images/yacht-photos/memorii-curiosity.jpg',
          title: 'Curiosity & Discovery'
        }
      ]
    }
  }
}
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3));
  }
}

.animate-scroll {
  animation: scroll 60s linear infinite;
  width: calc(300% + 4rem); /* 3 sets of cards + gaps */
  will-change: transform;
  transform: translateZ(0); /* Force hardware acceleration */
  backface-visibility: hidden;
}

.animate-scroll.paused {
  animation-play-state: paused;
}
</style>