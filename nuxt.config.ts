export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      movieKey: '',
      apiUrl: '',
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
