window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;
        const sectionId = section.getAttribute('id');

        // Calcular el punto medio de la sección
        const sectionMiddle = sectionTop + (sectionHeight / 2);

        // Calcular si la sección está en el punto medio de la ventana visible
        const isHalfVisible = sectionMiddle - windowHeight < 0 && sectionMiddle > 0;

        if (isHalfVisible) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});