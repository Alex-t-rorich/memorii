<template>
  <section class="py-20 bg-gradient-to-br from-brand to-blue-900 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Side - Content -->
        <div class="text-white space-y-8">
          <!-- Header -->
          <div class="space-y-6">
            <div class="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium opacity-90">Todd Tomlin</p>
                <p class="text-xs opacity-70">Journey Discovery Specialist</p>
              </div>
            </div>

            <h2 class="text-4xl md:text-5xl leading-tight">
              Book a call with
              <span class="block text-gold font-noto-serif italic">us today!</span>
            </h2>

            <p class="text-xl md:text-2xl leading-relaxed opacity-90 max-w-xl">
              We'll show you how easy it is to give your clients access to the world's most stunning homes, villas and yachts for their next journey.
            </p>
          </div>

          <!-- Call Duration Badge -->
          <div class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-sm font-medium">30 minute discovery call</span>
          </div>

          <!-- CTA Button -->
          <!-- <div class="pt-4">
            <button 
              @click="openCalendlyModal"
              class="group bg-gold hover:bg-yellow-500 text-brand font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
            >
              <span class="text-lg">Schedule Your Call Now</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div> -->
        </div>

        <!-- Right Side - Calendar -->
        <div class="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <!-- Calendar Header -->
          <div class="flex items-center justify-between p-6 bg-gradient-to-r from-brand to-blue-800">
            <h3 class="text-2xl font-bold text-white">Select a Time</h3>
            <div class="flex items-center space-x-2 text-white/80">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-sm">GMT+2 (Cape Town)</span>
            </div>
          </div>

          <!-- Calendly Inline Widget -->
          <div 
            ref="calendlyWidget"
            class="calendly-inline-widget" 
            :data-url="calendlyUrl"
            style="min-width:320px;height:600px;"
          ></div>
        </div>
      </div>
    </div>

    <!-- Custom Modal for Mobile/Alternative -->
    <div 
      v-if="showModal" 
      class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      @click="closeCalendlyModal"
    >
      <div 
        class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        @click.stop
      >
        <div class="flex items-center justify-between p-6 bg-gradient-to-r from-brand to-blue-800">
          <h3 class="text-2xl font-bold text-white">Schedule Your Discovery Call</h3>
          <button 
            @click="closeCalendlyModal"
            class="text-white/80 hover:text-white text-3xl leading-none transition-colors"
          >
            ×
          </button>
        </div>
        <div 
          ref="calendlyModalWidget"
          class="calendly-inline-widget" 
          :data-url="calendlyUrl"
          style="min-width:320px;height:600px;"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BookCallSection',
  data() {
    return {
      showModal: false,
      calendlyUrl: 'https://calendly.com/todd-memoriijourneys/discoverycall?primary_color=034979&hide_event_type_details=1&hide_gdpr_banner=1',
      calendlyLoaded: false
    }
  },
  mounted() {
    this.loadCalendly()
  },
  methods: {
    loadCalendly() {
      // Check if Calendly is already loaded
      if (window.Calendly) {
        this.calendlyLoaded = true
        return
      }

      // Load Calendly CSS
      const cssLink = document.createElement('link')
      cssLink.rel = 'stylesheet'
      cssLink.href = 'https://assets.calendly.com/assets/external/widget.css'
      document.head.appendChild(cssLink)

      // Load Calendly JavaScript
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => {
        this.calendlyLoaded = true
        // Initialize the inline widget after script loads
        this.$nextTick(() => {
          if (window.Calendly && this.$refs.calendlyWidget) {
            window.Calendly.initInlineWidget({
              url: this.calendlyUrl,
              parentElement: this.$refs.calendlyWidget
            })
          }
        })
      }
      document.head.appendChild(script)
    },
    
    openCalendlyModal() {
      if (window.Calendly) {
        // Use Calendly's built-in popup
        window.Calendly.initPopupWidget({
          url: this.calendlyUrl
        })
      } else {
        // Fallback to custom modal
        this.showModal = true
        this.$nextTick(() => {
          if (window.Calendly && this.$refs.calendlyModalWidget) {
            window.Calendly.initInlineWidget({
              url: this.calendlyUrl,
              parentElement: this.$refs.calendlyModalWidget
            })
          }
        })
      }
    },
    
    closeCalendlyModal() {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
/* Ensure Calendly widget responsive behavior */
.calendly-inline-widget {
  border-radius: 0 0 1rem 1rem;
}

/* Custom modal animations */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .calendly-inline-widget {
    height: 500px !important;
  }
}

@media (max-width: 768px) {
  .calendly-inline-widget {
    height: 400px !important;
    min-width: 280px !important;
  }
}
</style>