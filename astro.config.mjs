// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const site = process.env.SITE_URL || "https://prarupmanandhar.com.np";

export default defineConfig({
  site,
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
