document.addEventListener("DOMContentLoaded", function() {
    const langFlag = document.getElementById("es-flag"); // Cambiado a es-flag para obtener la bandera correctamente
    const langMenu = document.getElementById("lang-menu");

    langFlag.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que el evento se propague y cierre el menú inmediatamente
        langMenu.classList.toggle("show");
    });

    document.addEventListener("click", function(event) {
        if (!langFlag.contains(event.target) && !langMenu.contains(event.target)) {
            langMenu.classList.remove("show");
        }
    });
});

function changeLanguage(lang) {
    const currentFlag = document.getElementById('es-flag'); // Cambiado a es-flag para obtener la bandera correctamente
    const langMenu = document.getElementById('lang-menu');
    
    if (lang === 'es') {
        currentFlag.src = 'IMG/spain-flag.png';
        currentFlag.alt = 'Español';
        // Cambiar texto a español
        document.getElementById('inicio').querySelector('h1').textContent = 'Bienvenido a Mi Portfolio';
        document.getElementById('sobre-mi').querySelector('h2').textContent = 'Sobre Mí';
        document.getElementById('sobre-mi').querySelector('p').textContent = 'Me llamo Ignacio Bacci, soy un desarrollador backend con experiencia en Python, PHP, Java, JavaScript, SQL, CSS y HTML. Especializado en la creación de sistemas sólidos y escalables. Certificado en inteligencia artificial por GitHub.';
        document.querySelector('nav a[href="#inicio"]').textContent = 'Inicio';
        document.querySelector('nav a[href="#sobre-mi"]').textContent = 'Sobre Mí';
        document.querySelector('nav a[href="#proyectos"]').textContent = 'Proyectos';
        document.querySelector('nav a[href="#contacto"]').textContent = 'Contacto';
        document.getElementById('proyectos').querySelector('h2').textContent = 'Proyectos';
        document.getElementById('contacto').querySelector('h2').textContent = 'Contacto';
        document.querySelector('form label[for="nombre"]').textContent = 'Nombre:';
        document.querySelector('form label[for="email"]').textContent = 'Correo Electrónico:';
        document.querySelector('form label[for="mensaje"]').textContent = 'Mensaje:';
        document.querySelector('form button[type="submit"]').textContent = 'Enviar';
        document.querySelector('footer p').textContent = '© 2024 Ignacio Bacci. Todos los derechos reservados.';
    } else if (lang === 'en') {
        currentFlag.src = 'IMG/uk-flag.jpg';
        currentFlag.alt = 'English';
        // Cambiar texto a inglés
        document.getElementById('inicio').querySelector('h1').textContent = 'Welcome to My Portfolio';
        document.getElementById('sobre-mi').querySelector('h2').textContent = 'About Me';
        document.getElementById('sobre-mi').querySelector('p').textContent = 'My name is Ignacio Bacci. I am a backend developer with experience in Python, PHP, Java, JavaScript, SQL, CSS, and HTML. Specialized in building solid and scalable systems. Certified in artificial intelligence by GitHub.';
        document.querySelector('nav a[href="#inicio"]').textContent = 'Home';
        document.querySelector('nav a[href="#sobre-mi"]').textContent = 'About Me';
        document.querySelector('nav a[href="#proyectos"]').textContent = 'Projects';
        document.querySelector('nav a[href="#contacto"]').textContent = 'Contact';
        document.getElementById('proyectos').querySelector('h2').textContent = 'Projects';
        document.getElementById('contacto').querySelector('h2').textContent = 'Contact';
        document.querySelector('form label[for="nombre"]').textContent = 'Name:';
        document.querySelector('form label[for="email"]').textContent = 'Email:';
        document.querySelector('form label[for="mensaje"]').textContent = 'Message:';
        document.querySelector('form button[type="submit"]').textContent = 'Send';
        document.querySelector('footer p').textContent = '© 2024 Ignacio Bacci. All rights reserved.';
    }

    // Ocultar el menú después de cambiar el idioma y la bandera
    langMenu.classList.remove("show");
}


