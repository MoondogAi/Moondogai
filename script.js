document.addEventListener("DOMContentLoaded", () => {
    // Initialize Particles.js with neon-green accents
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#39FF14" },
        "shape": {
          "type": "circle",
          "stroke": { "width": 0, "color": "#000000" }
        },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#39FF14",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out"
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "repulse" },
          "onclick": { "enable": true, "mode": "push" }
        }
      },
      "retina_detect": true
    });
  
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#hero-headline", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".hero p", { duration: 1.5, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" });
    gsap.from(".cta-button", { duration: 1.5, y: 50, opacity: 0, delay: 0.7, ease: "power2.out" });
  
    // Animate Roadmap Milestones on Scroll
    const milestones = document.querySelectorAll('.milestone');
    milestones.forEach(milestone => {
      ScrollTrigger.create({
        trigger: milestone,
        start: "top 80%",
        onEnter: () => milestone.classList.add("visible")
      });
    });
  });
  