// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Nuxt Ollama Chat",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false,
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
