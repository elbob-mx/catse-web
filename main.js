import "./style.css";

// 1. Referencias a los elementos
const btnOpen = document.getElementById("open-menu");
const btnClose = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("menu-overlay");
const body = document.body;

// 2. Función para abrir el menú
if (btnOpen) {
    btnOpen.addEventListener("click", () => {
        mobileMenu.classList.remove("-translate-x-full");
        overlay.classList.remove("hidden");
        body.classList.add("overflow-hidden"); // Bloquea el scroll de la página
    });
}

// 3. Función unificada para cerrar
const closeFunction = () => {
    if (mobileMenu) mobileMenu.classList.add("-translate-x-full");
    if (overlay) overlay.classList.add("hidden");
    body.classList.remove("overflow-hidden"); // Libera el scroll
};

// 4. Asignar eventos de cierre
if (btnClose) btnClose.addEventListener("click", closeFunction);
if (overlay) overlay.addEventListener("click", closeFunction);
