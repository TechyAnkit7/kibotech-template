function fullNav() {
    var menu = document.querySelector("#main-nav i")
    var close = document.querySelector("#full i")

    var tl = gsap.timeline()

    tl.to("#main-nav i",{
        opacity:0,
        scale:0,
        duration:0.5,
        rotate:360,
    })

    tl.to("#full", {
        right: 0
    })

    tl.from("#full h4", {
        x: 150,
        duration: 0.5,
        opacity: 0,
        stagger: 0.09,
    })

    tl.from("#full i", {
        scale:0,
        opacity: 0,
        rotate: 360,
        duration:0.3,
    })

    tl.pause()

    menu.addEventListener("click", function () {
        tl.play()
    })

    close.addEventListener("click", function () {
        tl.reverse()
    })
}

fullNav()

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for Get Started button
document.getElementById('getStartedBtn').addEventListener('click', () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Navbar fade in from top
gsap.from('nav', { y: -100, opacity: 0, duration: 1, ease: 'power3.out' });

// Hero text fade and slide up
gsap.from('#home h1', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
gsap.from('#home p', { opacity: 0, y: 50, duration: 1, delay: 0.5, ease: 'power3.out' });
gsap.from('#home button', { opacity: 0, y: 50, duration: 1, delay: 1, ease: 'power3.out' });

// Services cards stagger fade and slide up on scroll
gsap.utils.toArray('.card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
    });
});

// About section fade in on scroll
gsap.from('#about h2', {
    scrollTrigger: {
        trigger: '#about h2',
        start: 'top 80%',
        toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 20,
    duration: 1,
    ease: 'power3.out',
});
gsap.from('#about p', {
    scrollTrigger: {
        trigger: '#about p',
        start: 'top 80%',
        toggleActions: 'play none none none',
    },
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out',
});

// Contact section fade in on scroll
gsap.from('#contact h2', {
    scrollTrigger: {
        trigger: '#contact h2',
        start: 'top 80%',
        toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 20,
    duration: 1,
    ease: 'power3.out',
});
gsap.from('#contact form', {
    scrollTrigger: {
        trigger: '#contact form',
        start: 'top 80%',
        toggleActions: 'play none none none',
    },
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out',
});

// Contact form submission handling
const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankYouMessage');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Basic validation
    if (!form.name.value.trim() || !form.email.value.trim() || !form.message.value.trim()) {
        alert('Please fill in all fields.');
        return;
    }
    if (!validateEmail(form.email.value.trim())) {
        alert('Please enter a valid email address.');
        return;
    }

    // Show thank you message and hide form
    form.style.display = 'none';
    thankYou.style.display = 'block';
});

function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
