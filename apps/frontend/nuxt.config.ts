// dev環境でのみ使用するモジュール
const devModules = process.env.NODE_ENV === 'development'
  ? ['@nuxt/eslint']
  : [];

// prod環境でのみ使用するモジュール
const prodModules = process.env.NODE_ENV === 'production'
  ? ['@vite-pwa/nuxt']
  : [];

const modules = [
  'nuxt-quasar-ui',
  ...prodModules,
  ...devModules,
];

const pwa = process.env.NODE_ENV === 'production'
  ? {
      manifest: {
        background_color: '#ffffff',
        description: 'アプリ説明',
        display: 'standalone',
        icons: [
          {
            sizes: '64x64',
            src: 'pwa-64x64.png',
            type: 'image/png',
          },
          {
            sizes: '192x192',
            src: 'pwa-192x192.png',
            type: 'image/png',
          },
          {
            sizes: '512x512',
            src: 'pwa-512x512.png',
            type: 'image/png',
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: 'maskable-icon-512x512.png',
            type: 'image/png',
          },
        ],
        lang: 'ja',
        name: 'アプリ名',
        short_name: 'アプリ短縮名',
        start_url: '/',
        theme_color: '#326CB3',
      },
      registerType: 'autoUpdate',
      workbox: {
        navigateFallback: null,
      },
    }
  : {};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { href: `/favicon.ico`, rel: 'icon', sizes: '64x64' },
        { href: `/apple-touch-icon-180x180.png`, rel: 'apple-touch-icon' },
      ],
      meta: [
        { content: '#326CB3', name: 'theme-color' },
      ],
    },
  },
  devServer: {
    // https://ja.vitejs.dev/config/server-options
    host: '0.0.0.0',
    port: 3001,
  },
  devtools: { enabled: true },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  modules,
  pwa,
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_API_URL,
    },
  },
});
