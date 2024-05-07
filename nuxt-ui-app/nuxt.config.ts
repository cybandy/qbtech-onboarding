// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 443,
    host: 'onboarding.local',
    https: {
      key: './ssl/onboarding.local-key.pem',
      cert: './ssl/onboarding.local.pem',
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    "@nuxt/ui",
    "@nuxt/fonts",
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-lodash',
    "@nuxtjs/supabase"
  ],
  fonts: {
    families: [
      { name: 'Nunito Sans', provider: 'google' },
      { name: 'Poppins', provider: 'google' },
    ]
  },
  lodash: {
    prefix: '_'
  },
  image: {
    inject: true,
    format: ['webp']
  },
  supabase: {
    redirect: false
  }
})