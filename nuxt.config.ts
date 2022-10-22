export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      movieKey: '',
      apiUrl: '',
    },
  },
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1", user-scalable=no"',
      },
      { name: 'theme-color', content: '#1e232a' },
      { name: 'apple-mobile-web-app-title', content: 'MovieTime' },
      { name: 'msapplication-TileColor', content: '#1e232a' },
      { name: 'application-name', content: 'MovieTime' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'MovieTime',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicons/favicon.ico',
        purpose: 'maskable any',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '180x180',
        href: 'favicons/apple-touch-icon.png',
        purpose: 'maskable any',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'favicons/favicon-32x32.png',
        purpose: 'maskable any',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'favicons/favicon-16x16.png',
        purpose: 'maskable any',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '150x150',
        href: 'favicons/ms-tile-150x150.png',
        purpose: 'maskable any',
      },
      { rel: 'manifest', href: 'favicons/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: 'favicons/safari-pinned-tab.svg',
        color: '#1e232a',
        purpose: 'maskable any',
      },
    ],
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
    htmlAttrs: {
      lang: 'en',
    },
  },
  modules: [
    'nuxt-windicss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
  ],
  css: ['virtual:windi.css', '@/assets/scss/app.scss'],
  typescript: { strict: true },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  experimental: {
    reactivityTransform: true,
    treeshakeClientOnly: true,
    viteServerDynamicImports: true,
  },
  ssr: true,
  googleFonts: {
    families: {
      Montserrat: {
        wght: [400, 500, 600, 800],
        ital: [400, 600],
      },
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true,
    inject: true,
  },
  vueuse: {
    ssrHandlers: true,
  },
  vite: {
    logLevel: 'info',

    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
        },
      },
    },
    build: {
      chunkSizeWarningLimit: 500,
      ssrManifest: true,
      minify: 'esbuild',
      target: 'es2020',
    },
  },
})
