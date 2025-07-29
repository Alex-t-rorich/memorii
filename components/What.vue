<template>
  <section class="py-16 px-4 max-w-7xl mx-auto">
    <div class="grid lg:grid-cols-3 gap-16 items-start">
      <!-- Left Side - Interactive Content (2/3 width) -->
      <div class="lg:col-span-2 space-y-8">
        <!-- Content Area with Integrated Tab Navigation -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <!-- Tab Navigation Bar -->
          <div class="flex w-full border-b border-gray-200">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              @click="activeTab = index"
              class="flex-1 py-4 px-4 text-sm font-semibold transition-all duration-300 first:rounded-tl-lg last:rounded-tr-lg relative"
              :class="activeTab === index 
                ? 'text-white z-10' 
                : 'text-brand bg-gray-100 hover:bg-gray-200'"
              :style="activeTab === index ? 'background-color: #034979;' : ''"
            >
              {{ tab.name }}
            </button>
          </div>

          <!-- Content Section -->
          <div class="relative z-0 min-h-96">
            <div class="grid md:grid-cols-2 min-h-96">
              <!-- Image -->
              <div class="min-h-96 overflow-hidden">
                <img 
                  :src="tabs[activeTab].image"
                  :alt="tabs[activeTab].title"
                  class="w-full h-full object-cover"
                />
              </div>
              
              <!-- Text Content -->
              <div class="p-6 md:p-8 min-h-96 flex flex-col justify-center">
                <h3 class="text-2xl font-bold text-brand mb-4">
                  {{ tabs[activeTab].title }}
                </h3>
                <ul class="space-y-3">
                  <li 
                    v-for="(item, index) in tabs[activeTab].features"
                    :key="index"
                    class="flex items-start space-x-3"
                  >
                    <div class="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span class="text-brand leading-relaxed text-sm">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Static Text (1/3 width) -->
      <div class="lg:col-span-1 space-y-6 flex flex-col justify-center items-center text-center h-full">
        <h2 class="text-4xl md:text-5xl font-bold text-brand leading-tight">
          What you can offer through us
        </h2>
        <p class="text-xl text-brand leading-relaxed">
          Not just where to stay. But how to experience the world.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          name: 'Private Homes & Villas',
          image: '/images/villa-photos/private-villa.avif',
          title: 'Exclusive Private Residences',
          features: [
            'Luxury beachfront and mountain retreats',
            'Private chef and concierge services',
            'Fully staffed properties with housekeeping',
            'Private pools, spas, and entertainment areas',
            'Customized experiences and local excursions',
            'Complete privacy and security for your guests'
          ]
        },
        {
          name: 'Yachts',
          image: '/images/yacht-photos/memorii-maxita.jpg',
          title: 'Luxury Yacht Charters',
          features: [
            'World-class superyachts with professional crew',
            'Gourmet dining with executive chefs',
            'Water sports equipment and toys included',
            'Island hopping and secluded anchorages',
            'Helicopter transfers and shore excursions',
            'Personalized itineraries across global destinations'
          ]
        },
        {
          name: 'Retreats',
          image: '/images/villa-photos/retreats.avif',
          title: 'Transformative Retreat Experiences',
          features: [
            'Wellness and mindfulness programs',
            'Expert-led workshops and seminars',
            'Organic farm-to-table dining experiences',
            'Spa treatments and therapeutic sessions',
            'Adventure activities and nature immersion',
            'Digital detox and reconnection opportunities'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>