// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devServer: {
        // https://ja.vitejs.dev/config/server-options
        host: true,
        port: 3001,
    },
    devtools: { enabled: true },
    modules: ['@nuxt/eslint'],
});
