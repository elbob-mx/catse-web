import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                conocenos: resolve(__dirname, "conocenos.html"),
                servicios: resolve(__dirname, "servicios.html"),
                genios: resolve(__dirname, "genios.html"),
                blog: resolve(__dirname, "blog.html"),
                contacto: resolve(__dirname, "contacto.html"),
            },
            output: {
                // Esto asegura que el JS se llame main.js y el CSS style.css
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`,
            },
        },
    },
});
