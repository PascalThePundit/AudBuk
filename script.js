document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Mobile Slideshow Functionality
    const container = document.querySelector('.container');
    const slides = document.querySelectorAll('.container1');
    let currentSlide = 0;

    // Only initialize slideshow on mobile devices
    if (window.innerWidth <= 480) {
        // Set first slide as active
        slides[0].classList.add('active');
        
        // Function to show next slide
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // Start automatic slideshow
        setInterval(nextSlide, 2000);
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480) {
            // Remove active classes and reset positions for desktop view
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.position = 'relative';
                slide.style.opacity = '1';
            });
        } else {
            // Reset to first slide for mobile view
            slides.forEach(slide => slide.classList.remove('active'));
            slides[0].classList.add('active');
        }
    });
});
