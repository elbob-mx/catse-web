import "./style.css";

const mobileMenu = document.getElementById("mobile-menu");
const menuOverlay = document.getElementById("menu-overlay");
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const mobileLinks = document.querySelectorAll("#mobile-menu a");

// --- LÓGICA DEL MENÚ MÓVIL ---
function toggleMenu() {
    const isOpen = !mobileMenu.classList.contains("-translate-x-full");

    if (isOpen) {
        mobileMenu.classList.add("-translate-x-full");
        menuOverlay.classList.add("hidden");
        document.body.style.overflow = "";
    } else {
        mobileMenu.classList.remove("-translate-x-full");
        menuOverlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }
}

mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
        mobileLinks.forEach((l) =>
            l.classList.remove("bg-primary", "text-white", "px-4", "py-2", "rounded-xl"),
        );
        this.classList.add(
            "bg-primary",
            "text-white",
            "px-4",
            "py-2",
            "rounded-xl",
            "transition-all",
            "duration-300",
        );
    });
});

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

// --- LÓGICA DEL MODAL: HIPNOSIS CONSCIENTE ---
const hipnosisModal = document.getElementById("hipnosis-modal");
const openHipnosisBtn = document.getElementById("open-hipnosis-modal");
const closeHipnosisBtn = document.getElementById("close-hipnosis-modal");

function openModal() {
    if (hipnosisModal) {
        hipnosisModal.classList.remove("hidden");
        hipnosisModal.classList.add("flex");
        document.body.style.overflow = "hidden";
    }
}

function closeModal() {
    if (hipnosisModal) {
        hipnosisModal.classList.add("hidden");
        hipnosisModal.classList.remove("flex");
        document.body.style.overflow = "";
    }
}

if (openHipnosisBtn) openHipnosisBtn.addEventListener("click", openModal);
if (closeHipnosisBtn) closeHipnosisBtn.addEventListener("click", closeModal);

// --- LÓGICA DEL MODAL: CORTINA DE AGUA ---
const cortinaModal = document.getElementById("cortina-modal");
const openCortinaBtn = document.getElementById("open-cortina-modal");
const closeCortinaBtn = document.getElementById("close-cortina-modal");

function openCortina() {
    if (cortinaModal) {
        cortinaModal.classList.remove("hidden");
        cortinaModal.classList.add("flex");
        document.body.style.overflow = "hidden";
    }
}

function closeCortina() {
    if (cortinaModal) {
        cortinaModal.classList.add("hidden");
        cortinaModal.classList.remove("flex");
        document.body.style.overflow = "";
    }
}

if (openCortinaBtn) openCortinaBtn.addEventListener("click", openCortina);
if (closeCortinaBtn) closeCortinaBtn.addEventListener("click", closeCortina);

// --- CIERRE GLOBAL (OVERLAY Y ESCAPE) ---
window.addEventListener("click", (e) => {
    if (e.target === hipnosisModal) closeModal();
    if (e.target === cortinaModal) closeCortina();
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
        closeCortina();
    }
});

// --- LÓGICA DEL FORMULARIO DE CONTACTO (Versión Tradicional Directa) ---
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        // NO usamos preventDefault para dejar que el navegador abra el correo

        const button = this.querySelector('button[type="submit"]');

        // Cambio visual inmediato
        button.innerText = "¡Gracias! Mensaje enviado.";
        button.classList.replace("bg-primary", "bg-green-600");

        // Opcional: Limpiar el formulario después de un breve delay
        setTimeout(() => {
            this.reset();
            button.innerHTML = 'Enviar Mensaje <i class="fa-solid fa-paper-plane text-sm"></i>';
            button.classList.replace("bg-green-600", "bg-primary");
        }, 5000);
    });
}
