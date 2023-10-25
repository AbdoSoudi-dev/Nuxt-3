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
        { rel : 'stylesheet', href : '@/assets/css/main.css' }
      ],
      script:[
        // '@/assets/js/main.js' { }
        { src : '@/assets/js/main.js' }
      ]
    }
  },
  alias: {
    '@assets': resolve(__dirname, './assets'),
  },
  css: [
    '~/assets/main.css',
    'primevue/resources/themes/soho-dark/theme.css',
    'primeicons/primeicons.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      primevue: { 
        usePrimeVue: true,
        options: {

        },
        components: {
          prefix: 'Prime',
        }
        // components: {
        //     prefix: '',
        //     name: undefined,
        //     include: undefined,
        //     exclude: undefined
        // },
        // directives: {
        //     prefix: '',
        //     name: undefined,
        //     include: undefined,
        //     exclude: undefined
        // },
        // composables: {
        //     prefix: '',
        //     name: undefined,
        //     include: undefined,
        //     exclude: undefined
        // }
    }
    },
  },
  // ssr : false
})
