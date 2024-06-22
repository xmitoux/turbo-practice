// https://nuxt.com/docs/api/configuration/nuxt-config

const devModules = process.env.NODE_ENV === 'development'
  ? ['@nuxt/eslint']
  : [];

const modules = [
  'nuxt-quasar-ui',
  '@vite-pwa/nuxt',
  ...devModules,
];

export default defineNuxtConfig({
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
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_API_URL,
    },
  },
});
