import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            input: {
                // Aquí le decimos a Vite todas las páginas que deben existir
                main: "./index.html",
                conocenos: "./conocenos.html",
                // Cuando crees 'genios.html', lo añadirás aquí abajo
            },
        },
    },
});
