document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the default jump
            e.preventDefault();

            // Get the target section's ID from the href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Smoothly scroll to the target section
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });
});