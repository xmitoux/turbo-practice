// https://nuxt.com/docs/api/configuration/nuxt-config

// dev環境でのみ使用するモジュール
const devModules = process.env.NODE_ENV === 'development'
  ? ['@nuxt/eslint']
  : [];

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
  modules: [
    'nuxt-quasar-ui',
    ...devModules,
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_API_URL,
    },
  },
});
