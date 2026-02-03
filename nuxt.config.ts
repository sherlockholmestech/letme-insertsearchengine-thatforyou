// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  ssr: true,
  
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/fonts'
  ],
  
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' }
    ]
  },
  
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
  
  app: {
    head: {
      title: 'Let Me Search That For You',
      meta: [
        { name: 'description', content: 'A helpful tool to teach people how to use search engines' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})