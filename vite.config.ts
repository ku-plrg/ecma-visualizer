import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        content: "./src/content/index.tsx",
        background: "./src/background/index.ts",
      },
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "assets/content.css",
      },
    },
  },
});
