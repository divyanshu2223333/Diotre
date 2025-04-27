document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                const isSuccess = Math.random() > 0.5; // Randomly simulate success or error

                if (isSuccess) {
                    formMessage.textContent = 'Thank you for your message! We\'ll be in touch soon.';
                    formMessage.className = 'form-message success';
                    contactForm.reset();
                    setTimeout(() => {
                        formMessage.classList.add('hidden');
                    }, 5000);
                } else {
                    formMessage.textContent = 'Oops! Something went wrong. Please try again later.';
                    formMessage.className = 'form-message error';
                    setTimeout(() => {
                        formMessage.classList.add('hidden');
                    }, 5000);
                }
            }, 1000); // Simulate network delay
        });
    }

    const exploreButton = document.querySelector('.hero-section .primary-button');
    if (exploreButton) {
        exploreButton.addEventListener('click', function(e) {
            e.preventDefault();
            const solutionsSection = document.getElementById('ai-agents'); // Scroll to the first solution section
            solutionsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Placeholder for initializing 3D animation (you'll need a 3D library like Three.js)
    /*
    function initHero3D() {
        const container = document.getElementById('hero-3d-container');
        // Initialize your Three.js scene, camera, renderer, and objects here
        // Make sure the scene is rendered within the bounds of the container
    }

    window.addEventListener('load', initHero3D);
    */
});
