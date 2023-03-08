// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        title: "Elon's Musk",
        charset: "utf-16",
        viewport: "width=device-width  initial-scale=1"
    }
  },

  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig:  {
       public: {
        wpUrl: process.env.WP_URL,
       }
  }
})
