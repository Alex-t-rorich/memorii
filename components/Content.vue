<template>
  <section class="min-h-screen flex max-w-7xl mx-auto">
    <!-- Left Side - Text Content -->
    <div class="w-1/2 flex items-center justify-center pr-8 pt-8 pb-8 lg:pr-16 lg:pt-16 lg:pb-16 bg-white">
      <div>
        <h2 class="text-4xl md:text-5xl mb-6 leading-tight text-brand">
          Convert high-end bookings seamlessly. Earn <span class="text-gold">Large</span> commission.
        </h2>
        <p class="text-lg md:text-xl leading-relaxed mb-8 text-brand">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
        </p>
       
        <!-- CTA Buttons -->
        <div class="flex gap-4 w-full">
          <button
            @click="openCalendly"
            class="flex-1 px-8 py-4 bg-brand text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:bg-white hover:text-brand hover:border-brand"
          >
            Book a Call
          </button>
          <button 
            @click="openInfoModal"
            class="flex-1 px-8 py-4 bg-brand text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:bg-white hover:text-brand hover:border-brand"
          >
            Request Info
          </button>
        </div>
      </div>
    </div>
   
    <!-- Right Side - Image -->
    <div class="w-1/2 relative overflow-hidden">
      <img 
        src="/images/memori-explora.png" 
        alt="Memorii Explora" 
        class="w-full h-full object-cover object-left"
      >
      <!-- Optional overlay if needed -->
      <!-- <div class="absolute inset-0 bg-black/10"></div> -->
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4" style="background-color: rgba(0, 0, 0, 0.4);" @click="closeModal">
      <div class="bg-white rounded-lg max-w-md w-full p-6 relative" @click.stop>
        <!-- Close Button -->
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>

        <!-- Form Content -->
        <div v-if="modalStep === 'form'">
          <h3 class="text-2xl font-bold pb-6 text-brand">More Information</h3>
          <p class="text-brand pb-4">If you prefer to receive more information via email, please provide your details here and we will be in contact with you promptly.</p>
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="fname" class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                id="fname"
                v-model="formData.fname"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              >
            </div>
            <div class="mb-4">
              <label for="lname" class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                id="lname"
                v-model="formData.lname"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              >
            </div>
            <div class="mb-6">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              >
            </div>
            <button
              type="submit"
              class="w-full px-8 py-4 bg-brand text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:bg-white hover:text-brand hover:border-brand"
            >
              Submit
            </button>
          </form>
        </div>

        <!-- Thank You Content -->
        <div v-if="modalStep === 'thanks'" class="text-center">
          <h3 class="text-2xl font-bold mb-6 text-brand">Thank you for your interest in memorii</h3>
          <p class="text-gray-700 mb-6 leading-relaxed">
            Be on the lookout for emails from us, where you will discover more about what we can offer you and your clients. In the meantime, please follow us on socials.
          </p>
          
          <!-- Social Media Buttons -->
          <div class="flex gap-4 mb-6 justify-center">
            <a href="#" class="w-12 h-12 bg-gold text-white rounded-lg hover:bg-gold/80 transition-colors flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="w-12 h-12 bg-gold text-white rounded-lg hover:bg-gold/80 transition-colors flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="w-12 h-12 bg-gold text-white rounded-lg hover:bg-gold/80 transition-colors flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <p class="text-gray-700 mb-4">
            If you've changed your mind and would like to book a call with our founder and CEO,
          </p>
          <button
            @click="openCalendlyFromModal"
            class="px-8 py-4 bg-brand text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:bg-white hover:text-brand hover:border-brand"
          >
            Book Call Now
          </button>
        </div>

        <!-- Calendly Thank You Content -->
        <div v-if="modalStep === 'calendly-thanks'" class="text-center">
          <h3 class="text-2xl font-bold mb-6 text-brand">Thank you for booking a call with us</h3>
          <p class="text-gray-700 mb-6 leading-relaxed">
            Check your email for an invite from our CEO, Todd Tomlin. Should you need to reschedule or cancel the call, you will be able to do so from the email invite. Todd looks forward to speaking with you soon. In the meantime, please follow us on socials.
          </p>
          
          <!-- Social Media Buttons -->
          <div class="flex gap-4 mb-6 justify-center">
            <a href="#" class="w-12 h-12 bg-gold text-white rounded-lg hover:bg-gold/80 transition-colors flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="w-12 h-12 bg-gold text-white rounded-lg hover:bg-gold/80 transition-colors flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="w-12 h-12 bg-gold text-white rounded-lg hover:bg-gold/80 transition-colors flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SplitSection',
  data() {
    return {
      showModal: false,
      modalStep: 'form', // 'form', 'thanks', or 'calendly-thanks'
      formData: {
        fname: '',
        lname: '',
        email: ''
      }
    }
  },
  mounted() {
    // Load Calendly CSS and JS
    this.loadCalendly()
  },
  methods: {
    loadCalendly() {
      // Load Calendly CSS
      if (!document.querySelector('link[href*="calendly"]')) {
        const link = document.createElement('link')
        link.href = 'https://assets.calendly.com/assets/external/widget.css'
        link.rel = 'stylesheet'
        document.head.appendChild(link)
      }
     
      // Load Calendly JS
      if (!document.querySelector('script[src*="calendly"]')) {
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.type = 'text/javascript'
        script.async = true
        document.head.appendChild(script)
        
        // Set up Calendly event listeners once script loads
        script.onload = () => {
          this.setupCalendlyEvents()
        }
      } else {
        // If script already loaded, set up events
        this.setupCalendlyEvents()
      }
    },
    setupCalendlyEvents() {
      if (typeof window.Calendly !== 'undefined') {
        // Listen for when someone completes booking
        window.addEventListener('message', (e) => {
          if (e.data.event && e.data.event.indexOf('calendly') === 0) {
            if (e.data.event === 'calendly.event_scheduled') {
              // Show thank you modal when booking is completed
              this.showCalendlyThankYou()
            }
          }
        })
      }
    },
    openCalendly() {
      // Check if Calendly is loaded
      if (typeof window.Calendly !== 'undefined') {
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/todd-memoriijourneys/discoverycall?hide_event_type_details=1&hide_gdpr_banner=1'
        })
      } else {
        // Fallback - try to load and retry
        console.warn('Calendly not loaded yet, retrying...')
        setTimeout(() => {
          if (typeof window.Calendly !== 'undefined') {
            window.Calendly.initPopupWidget({
              url: 'https://calendly.com/todd-memoriijourneys/discoverycall?hide_event_type_details=1&hide_gdpr_banner=1'
            })
          }
        }, 1000)
      }
    },
    openInfoModal() {
      this.modalStep = 'form'
      this.showModal = true
      // Ensure body doesn't scroll when modal is open
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.showModal = false
      this.modalStep = 'form'
      // Restore body scroll
      document.body.style.overflow = 'auto'
      // Reset form data
      this.formData = {
        fname: '',
        lname: '',
        email: ''
      }
    },
    submitForm() {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', this.formData)
      
      // Switch to thank you step
      this.modalStep = 'thanks'
    },
    openCalendlyFromModal() {
      // Close modal first
      this.closeModal()
      
      // Then open Calendly
      setTimeout(() => {
        this.openCalendly()
      }, 100)
    },
    showCalendlyThankYou() {
      // Show our custom thank you modal
      this.modalStep = 'calendly-thanks'
      this.showModal = true
      document.body.style.overflow = 'hidden'
    }
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>