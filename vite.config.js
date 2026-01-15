import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                conocenos: resolve(__dirname, "conocenos.html"),
                servicios: resolve(__dirname, "servicios.html"),
                blog: resolve(__dirname, "blog.html"),
            },
        },
    },
});
