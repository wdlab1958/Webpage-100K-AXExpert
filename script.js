// ========================================
// Smooth Scroll Navigation
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav-container').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            if (navMenu) navMenu.classList.remove('active');
        }
    });
});

// ========================================
// Mobile Menu Toggle
// ========================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// ========================================
// Intersection Observer for Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Observe feature cards with staggered animation
document.querySelectorAll('.feature-detail-card, .overview-card, .cert-card, .stage-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    cardObserver.observe(card);
});

// ========================================
// Animated Statistics Counter
// ========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        if (target >= 1000) {
            element.textContent = Math.floor(current).toLocaleString();
        } else if (target % 1 !== 0) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const statCards = document.querySelectorAll('.stat-card');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target.querySelector('.stat-value');
            const target = parseFloat(statValue.getAttribute('data-target'));

            if (statValue.textContent === '0') {
                animateCounter(statValue, target);
            }

            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statCards.forEach(card => {
    statsObserver.observe(card);
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    const navHeight = document.querySelector('.nav-container').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Navbar Background on Scroll
// ========================================
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-container');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 11, 13, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 11, 13, 0.8)';
    }
});

// ========================================
// Parallax Effect for Hero Background
// ========================================
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.scrollY;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// Add Hover Effect to Glass Cards
// ========================================
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// Initialize on Page Load
// ========================================
window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-cta, .hero-trust-badges');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%c🎯 100K-AX Expert Platform', 'font-size: 20px; font-weight: bold; color: #4f91ff;');
console.log('%cAI Transformation Expert Training Platform', 'font-size: 14px; color: #8b5cf6;');
console.log('%cVersion 4.0', 'font-size: 12px; color: #10b981;');