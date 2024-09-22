document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isScrolling = false;

    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    function scrollHandler(event) {
        if (isScrolling) return;

        isScrolling = true;
        if (event.deltaY > 0) {
            // Scroll down
            currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        } else {
            // Scroll up
            currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
        }
        showSection(currentSectionIndex);

        setTimeout(() => {
            isScrolling = false;
        }, 1000); // Adjust delay as necessary
    }

    showSection(currentSectionIndex);

    window.addEventListener('wheel', scrollHandler);

    // Touch event for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    window.addEventListener('touchstart', function(event) {
        touchStartY = event.changedTouches[0].screenY;
    });

    window.addEventListener('touchend', function(event) {
        touchEndY = event.changedTouches[0].screenY;
        if (touchStartY > touchEndY) {
            currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        } else {
            currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
        }
        showSection(currentSectionIndex);
    });
});