import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    plugins: [tailwindcss()],
    build: {
        assetsInlineLimit: 0,
        rollupOptions: {
            input: {
                // Cambiamos 'main' por 'index' para que no choque con tu archivo main.js
                index: resolve(__dirname, "index.html"),
                conocenos: resolve(__dirname, "conocenos.html"),
                servicios: resolve(__dirname, "servicios.html"),
                genios: resolve(__dirname, "genios.html"),
                blog: resolve(__dirname, "blog.html"),
                contacto: resolve(__dirname, "contacto.html"),
            },
            output: {
                // Esto garantiza que el JS se llame main.js y el CSS style.css
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith(".css")) {
                        return "style.css";
                    }
                    return "assets/[name].[ext]";
                },
            },
        },
    },
});
