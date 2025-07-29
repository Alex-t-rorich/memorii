<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl text-brand mb-8 tracking-wide">
          Partnering with <em class="font-serif italic text-gold">Memorii</em>
        </h2>
        <p class="text-xl md:text-2xl text-brand leading-relaxed max-w-4xl mx-auto font-light">
          The trust you place in us with your most important clients is invaluable to us. That's why we offer high-value commissions and hands-on support so you can focus on your client relationships while we handle the logistics.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
        >
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-gold rounded-t-2xl"></div>
          <div class="mb-6 text-center">
            <div 
              class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto overflow-hidden"
              :class="feature.image ? 'bg-white' : feature.iconBg"
            >
              <!-- Image -->
              <img 
                v-if="feature.image"
                :src="feature.image"
                :alt="feature.title"
                class="w-full h-full object-cover bg-white"
              />
              <!-- SVG Icon -->
              <svg 
                v-else
                class="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  :d="feature.iconPath"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand mb-3">{{ feature.title }}</h3>
          </div>
          <p class="text-gray-600 leading-relaxed mb-4 text-center">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16">
        <div class="inline-flex items-center space-x-2 text-brand">
          <div class="w-2 h-2 bg-gold rounded-full"></div>
          <span class="text-lg font-light italic">Elevating experiences, one partnership at a time</span>
          <div class="w-2 h-2 bg-gold rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartneringSection',
  data() {
    return {
      features: [
        {
          title: 'Strong commission opportunities',
          description: 'We operate entirely on commission, with no fees or subscriptions, no commitment. Just support when you need it and earnings to you after your client completes their stay.',
          image: '/images/test.jpeg'
        },
        {
          title: 'Retain your client relationship',
          description: 'We\'re simply your behind-the-scenes sourcing team for the homes, villas or yachts. You continue to manage airfare, ground transportation, pre- and post-travel hotels, and other itinerary elements.',
          iconBg: 'bg-gradient-to-br from-brand to-blue-600',
          iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        },
        {
          title: 'Simple, transparent process',
          description: 'Provide us with the brief of what your client desires are, and we will come back to you within two business days or less with options.',
          iconBg: 'bg-gradient-to-br from-gold to-amber-600',
          iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'White label proposals',
          description: 'Custom-branded property and yacht proposals you can send to your clients that are polished, professional and personalized.',
          iconBg: 'bg-gradient-to-br from-brand to-blue-600',
          iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        },
        {
          title: 'Dedicated support',
          description: 'For you and your clients, a real person you can message directly for updates, clarifications, or hand-holding — no faceless portals.',
          iconBg: 'bg-gradient-to-br from-gold to-amber-600',
          iconPath: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'Trusted access to exclusive inventory',
          description: 'Get vetted, off-market luxury options — we handle contracts and payments to protect you and your clients.',
          iconBg: 'bg-gradient-to-br from-brand to-blue-600',
          iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>