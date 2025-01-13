// Smooth scrolling with enhanced animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Add highlight effect to target section
        target.classList.add('highlight');
        setTimeout(() => target.classList.remove('highlight'), 1000);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Dynamic navbar with blur effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 32, 0.8)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
    }
});

// Hide hero section when scrolling to services
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const services = document.querySelector('#services');
    const scrollPosition = window.scrollY;
    const servicesPosition = services.offsetTop - 100; // Offset by 100px for earlier trigger

    if (scrollPosition >= servicesPosition) {
        hero.style.opacity = '0';
        hero.style.visibility = 'hidden';
    } else {
        hero.style.opacity = '1';
        hero.style.visibility = 'visible';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .section-title, .btn-primary').forEach(el => {
    observer.observe(el);
});

// Interactive form with validation and effects
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, textarea, select');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('input-focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('input-focused');
        }
    });
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add loading effect
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = 'Message Sent!';
        submitBtn.classList.add('success');
        
        // Reset form
        setTimeout(() => {
            this.reset();
            submitBtn.innerHTML = 'Send Message';
            submitBtn.disabled = false;
            submitBtn.classList.remove('success');
        }, 2000);
    }, 1500);
});

// Cursor effect
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
