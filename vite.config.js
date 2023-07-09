import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Укажите пути к вашим HTML-страницам
        index: "/index.html",
        home: "/card.html",
        about: "/trash.html",
        // Добавьте остальные страницы, если они есть
      },
    },
  },
});
