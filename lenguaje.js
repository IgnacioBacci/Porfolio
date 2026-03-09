const translations = {
    es: {
        "nav-home": "Inicio",
        "nav-about": "Sobre Mí",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "hero-title": "Creatividad & Código",
        "hero-subtitle": "Desarrollador Backend | Especialista en Sistemas Escalables",
        "hero-btn-work": "Ver Proyectos",
        "hero-btn-contact": "Hablemos",
        "about-title": "Sobre Mí",
        "about-text": "Me llamo Ignacio Bacci, soy un desarrollador backend apasionado por crear soluciones eficientes. Especializado en sistemas sólidos y escalables, con una certificación en IA por GitHub.",
        "skills-title": "Tecnologías",
        "projects-title": "Proyectos",
        "project1-desc": "Calculadora funcional desarrollada íntegramente en Python.",
        "project2-desc": "Juego estilo Survivors desarrollado con Pygame.",
        "project3-desc": "Explorador de mazmorras RPG con sistema de combate.",
        "project4-desc": "Sistema de físicas y movimiento en entorno 3D de Unity.",
        "contact-title": "Contacto",
        "form-name": "Nombre",
        "form-email": "Email",
        "form-msg": "Mensaje",
        "form-send": "Enviar Mensaje",
        "contact-outro": "¿Tienes una idea? Estoy disponible para nuevos proyectos y colaboraciones.",
        "footer-text": "© 2024 Ignacio Bacci. Todos los derechos reservados."
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-title": "Creativity & Code",
        "hero-subtitle": "Backend Developer | Scalable Systems Specialist",
        "hero-btn-work": "View Projects",
        "hero-btn-contact": "Let's Talk",
        "about-title": "About me",
        "about-text": "I'm Ignacio Bacci, a backend developer passionate about creating efficient solutions. Specialized in solid and scalable systems, with an AI certification by GitHub.",
        "skills-title": "Technologies",
        "projects-title": "Projects",
        "project1-desc": "Functional calculator developed entirely in Python.",
        "project2-desc": "Survivors-style game developed with Pygame.",
        "project3-desc": "RPG Dungeon Crawler with combat system.",
        "project4-desc": "Physics and movement system in Unity 3D environment.",
        "contact-title": "Contact",
        "form-name": "Name",
        "form-email": "Email",
        "form-msg": "Message",
        "form-send": "Send Message",
        "contact-outro": "Have an idea? I'm available for new projects and collaborations.",
        "footer-text": "© 2024 Ignacio Bacci. All rights reserved."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.getElementById("lang-toggle");
    const langMenu = document.getElementById("lang-menu");
    const savedLang = localStorage.getItem("portfolio-lang") || "es";
    
    // Initialize language
    changeLanguage(savedLang);

    // Toggle menu
    langToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        langMenu.classList.toggle("show");
    });

    // Close menu on click outside
    document.addEventListener("click", () => {
        langMenu.classList.remove("show");
    });
});

function changeLanguage(lang) {
    // Update local storage
    localStorage.setItem("portfolio-lang", lang);
    
    // Update UI text
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update flag and HTML lang
    const activeFlag = document.getElementById("active-flag");
    if (activeFlag) {
        activeFlag.src = lang === 'es' ? 'IMG/spain-flag.png' : 'IMG/uk-flag.jpg';
        activeFlag.alt = lang.toUpperCase();
    }
    document.documentElement.lang = lang;
}



