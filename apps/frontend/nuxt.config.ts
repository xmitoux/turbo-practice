// https://nuxt.com/docs/api/configuration/nuxt-config
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
  modules: ['@nuxt/eslint'],
});
