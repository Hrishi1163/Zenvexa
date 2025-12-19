// 1. Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
});

// 2. Initialize Vanta.js (The 3D Tech Wave Effect)
// Updated with Zenvexa Logo Colors
if (document.getElementById('vanta-bg')) {
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xE57E87,       // Salmon Pink lines (from logo)
        backgroundColor: 0x120E26, // Very Deep Purple background
        points: 12.00,
        maxDistance: 22.00,
        spacing: 18.00,
        showDots: true
    });
}

// 3. Navbar Scroll Effect
// Changes navbar from transparent to solid deep purple on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 4. Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(menuToggle){
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        
        // Switch between "Bars" (Hamburger) and "Times" (X)
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}