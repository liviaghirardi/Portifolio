// Configuração do Tailwind personalizada via script
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#d0bcff",
                "text-primary": "#F5F5F5",
                "text-secondary": "#A1A1AA",
                "surface": "#131313",
                "surface-secondary": "#0D0B12",
                "border-accent": "rgba(139, 92, 246, 0.2)",
                "secondary-container": "#5b21b6",
                "outline": "#958ea0",
                "outline-variant": "#494454",
                "error": "#ffb4ab"
            },
            fontFamily: {
                "headline-lg": ["Space Grotesk"],
                "headline-md": ["Space Grotesk"],
                "headline-xl": ["Space Grotesk"],
                "code-md": ["JetBrains Mono"],
                "body-lg": ["Inter"],
                "body-md": ["Inter"],
                "body-sm": ["Inter"],
                "label-caps": ["JetBrains Mono"]
            }
        }
    }
};

// Aqui você pode adicionar interações futuras, como menu mobile ou animações extras.
console.log("Portfólio de Lívia Ghirardi carregado com sucesso!");


document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            const navElement = document.getElementById("main-nav");
            if (navElement) {
                navElement.innerHTML = data;
            }
        });
});

document.addEventListener("DOMContentLoaded", function() {
    // Carregar Navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            const navElement = document.getElementById("main-nav");
            if (navElement) navElement.innerHTML = data;
        });

    // Carregar Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            const footerElement = document.getElementById("main-footer");
            if (footerElement) footerElement.innerHTML = data;
        });
});

// Aguarda o conteúdo do menu ser injetado via fetch
const checkMenu = setInterval(() => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        clearInterval(checkMenu); // Para de procurar após encontrar
        
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            // Muda o ícone de menu para fechar (close)
            const icon = menuBtn.querySelector(".material-symbols-outlined");
            icon.textContent = mobileMenu.classList.contains("hidden") ? "menu" : "close";
        });
    }
}, 100);