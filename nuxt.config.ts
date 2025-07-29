// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],
  css: ['~/assets/tailwind.css'],
  components: [
    { path: '~/components', pathPrefix: true },
  ],
  imports: {
    dirs: ['composables'],
  },
  typescript: {
    strict: true,
    shim: false,
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Noto+Serif:ital,wght@0,400;1,400&display=swap', rel: 'stylesheet' }
      ]
    }
  }
})