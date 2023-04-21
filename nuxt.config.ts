import { unoCssReset } from './unocss.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  extends: [
    'nuxt-seo-kit',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Awesome Site',
      siteDescription: 'Welcome to my awesome site!',
      titleSeparator: '|',
      language: 'en', // prefer more explicit language codes like `en-GB` over `en`
      trailingSlash: false, // forces trailing slashes on server side routes and sitemap
      linkChecker: {
        failOn404: true, // fail build on any internal 404s
      },
      compress: true,
      gzip: true,
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@unlighthouse/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-gtag',
    'nuxt-headlessui',
    'unplugin-icons/nuxt',
  ],
  css: [
    unoCssReset,
    '~/assets/styles/main.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  headlessui: {
    prefix: 'Headless',
  },
})
