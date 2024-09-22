let currentProjectIndex = 0;
const projects = document.querySelectorAll('.project-item');

function updateProjects() {
    projects.forEach((project, index) => {
        project.classList.remove('active');
        project.style.opacity = '0.5';
        project.style.transform = 'scale(0.8)';
        if (index === currentProjectIndex) {
            project.classList.add('active');
            project.style.opacity = '1';
            project.style.transform = 'scale(1)';
        }
    });
   
    document.querySelector('.project-gallery').style.transform = `translateX(calc(${-currentProjectIndex * 100}% / 3))`;
}

function prevProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProjects();
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProjects();
}


updateProjects();
