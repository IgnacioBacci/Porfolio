  const carouselInner = document.querySelector('.carousel-inner');
        const projects = document.querySelectorAll('.project-item');
        let index = 0;

        function updateClasses() {
            projects.forEach((project, i) => {
                project.classList.remove('active', 'next', 'prev');
                if (i === index) {
                    project.classList.add('active');
                } else if (i === (index + 1) % projects.length) {
                    project.classList.add('next');
                } else if (i === (index - 1 + projects.length) % projects.length) {
                    project.classList.add('prev');
                }
            });
        }

        function showProject() {
            const width = projects[0].clientWidth + 20; // Ancho del item más margen
            const totalWidth = carouselInner.clientWidth; // Ancho del contenedor
            const offset = (totalWidth / 2) - (width / 2); // Offset para centrar el proyecto activo
            carouselInner.style.transform = `translateX(calc(-${index * width}px + ${offset}px))`;
            updateClasses();
        }

        function nextProject() {
            index = (index + 1) % projects.length;
            showProject();
        }

        // Inicia el carrusel
        setInterval(nextProject, 3000); // Cambia cada 3 segundos
        showProject();