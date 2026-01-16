import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
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
        },
    },
});
