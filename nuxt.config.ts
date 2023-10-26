// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    // '@nuxt/content',
    '@nuxtjs/tailwindcss',
    // '@pinia/nuxt',
    // '@pinia-plugin-persistedstate/nuxt',
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
    },
  },
  app: {
    head: {
      link:[
        { rel : 'stylesheet', href : 'assets/main.css' }
      ],
      script:[
        // '@/assets/js/main.js' { }
        { src : '/assets/js/main.js' }
      ]
    }
  },
  alias: {
    '@assets': resolve(__dirname, './assets'),
  },
  css: [
    // '~/assets/main.css',
    'primevue/resources/themes/soho-dark/theme.css',
    'primeicons/primeicons.css',
  ],
  primevue: {
      components: {
        prefix: 'Prime',
        include: ['Button', 'DataTable']    /* Used as <PrimeButton /> and <PrimeDataTable /> */
    }
  }
  // ssr : false
})
