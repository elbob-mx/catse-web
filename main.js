import "./style.css";

const mobileMenu = document.getElementById("mobile-menu");
const menuOverlay = document.getElementById("menu-overlay");
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const mobileLinks = document.querySelectorAll("#mobile-menu a");

function toggleMenu() {
    const isOpen = !mobileMenu.classList.contains("-translate-x-full");

    if (isOpen) {
        // Cerrar
        mobileMenu.classList.add("-translate-x-full");
        menuOverlay.classList.add("hidden");
        document.body.style.overflow = "";
    } else {
        // Abrir
        mobileMenu.classList.remove("-translate-x-full");
        menuOverlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }
}

// Feedback visual inmediato en los enlaces del burger menu
mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
        // Resetear otros enlaces por si acaso
        mobileLinks.forEach((l) =>
            l.classList.remove("bg-primary", "text-white", "px-4", "py-2", "rounded-xl")
        );

        // Aplicar feedback inmediato
        this.classList.add(
            "bg-primary",
            "text-white",
            "px-4",
            "py-2",
            "rounded-xl",
            "transition-all",
            "duration-300"
        );

        // El menú se cerrará naturalmente al cambiar de página
    });
});

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);
