document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.ever-hamburger');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');
    const nav = document.querySelector('.ever-nav');

    // Toggle Side Menu
    hamburger.addEventListener('click', () => {
        sideMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });

    // Close sidebar on link click
    document.querySelectorAll('.menu-list a').forEach(link => {
        link.addEventListener('click', () => {
            sideMenu.classList.remove('active');
        });
    });

    // Navbar Scroll Background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Fade-ins
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-fade').forEach(el => observer.observe(el));

    // Fade in text hero on load
    setTimeout(() => {
        const title = document.querySelector('.ever-hero-title');
        if(title) {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
            title.style.transition = 'all 1.5s ease';
        }
    }, 300);
});
