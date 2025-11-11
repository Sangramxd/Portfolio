// Create 3D Rotating Text Ring for Loader
function createTextRing() {
    const textRing = document.getElementById('textRing3D');
    if (!textRing) return;
    
    const text = "GREATNESS LOADING DESIGN THAT INSPIRES CREATIVE SOLUTIONS RESEARCH INNOVATION EXCELLENCE";
    const radius = 270;
    const centerX = 300;
    const centerY = 300;
    
    // Create SVG for circular text
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '600');
    svg.setAttribute('height', '600');
    svg.setAttribute('viewBox', '0 0 600 600');
    svg.style.transformStyle = 'preserve-3d';
    
    // Create circle path
    const circlePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    // Create a full circle path
    const pathData = `M ${centerX}, ${centerY - radius} A ${radius}, ${radius} 0 0, 1 ${centerX + radius}, ${centerY} A ${radius}, ${radius} 0 0, 1 ${centerX}, ${centerY + radius} A ${radius}, ${radius} 0 0, 1 ${centerX - radius}, ${centerY} A ${radius}, ${radius} 0 0, 1 ${centerX}, ${centerY - radius}`;
    circlePath.setAttribute('id', 'textCircle');
    circlePath.setAttribute('d', pathData);
    circlePath.setAttribute('fill', 'none');
    
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.appendChild(circlePath);
    svg.appendChild(defs);
    
    // Create text element
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textElement.setAttribute('font-size', '32');
    textElement.setAttribute('font-weight', '900');
    textElement.setAttribute('fill', '#000000');
    textElement.setAttribute('letter-spacing', '0.2em');
    textElement.setAttribute('text-transform', 'uppercase');
    
    // Create textPath
    const textPath = document.createElementNS('http://www.w3.org/2000/svg', 'textPath');
    textPath.setAttribute('href', '#textCircle');
    textPath.setAttribute('startOffset', '0%');
    textPath.textContent = text + ' ' + text; // Duplicate for continuous loop
    
    textElement.appendChild(textPath);
    svg.appendChild(textElement);
    
    // Clear and add SVG
    textRing.innerHTML = '';
    textRing.appendChild(svg);
}

// Page Loader Animation
function initPageLoader() {
    const loader = document.getElementById('pageLoader');
    const loaderPercentage = document.getElementById('loaderPercentage');
    
    if (!loader || !loaderPercentage) return;
    
    // Create text ring
    createTextRing();
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 8 + 2;
        if (progress > 100) progress = 100;
        
        loaderPercentage.textContent = Math.floor(progress) + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.style.overflow = 'auto';
                initAnimations();
            }, 500);
        }
    }, 100);
}

// Image lazy loading and error handling
function initImageHandling() {
    const heroPortrait = document.getElementById('heroPortrait');
    if (heroPortrait) {
        heroPortrait.addEventListener('error', function() {
            // If image fails to load, show a placeholder
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.textContent = 'Profile Image';
            this.parentElement.appendChild(placeholder);
        });
    }
}

// Smooth Scroll
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link, .contact-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = document.querySelector('.main-nav').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('.split-section-top, .split-section-bottom, .projects-grid-section, .services-grid-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Observe project items
    const projectItems = document.querySelectorAll('.project-item-minimal, .service-card-minimal');
    projectItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}

// Navigation Scroll Effect
function initNavScroll() {
    const nav = document.getElementById('mainNav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.background = 'var(--white)';
            nav.style.backdropFilter = 'none';
        }
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            formMessage.textContent = 'Sending message...';
            formMessage.className = 'form-message-minimal';
            formMessage.style.display = 'block';
            
            setTimeout(() => {
                formMessage.textContent = 'Thank you! Your message has been received!';
                formMessage.className = 'form-message-minimal success';
                form.reset();
                
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }
}

// Initialize all animations after page load
function initAnimations() {
    initImageHandling();
    initScrollAnimations();
}

// Initialize on page load
window.addEventListener('load', () => {
    document.body.style.overflow = 'hidden';
    initPageLoader();
});

// Initialize other features
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initNavScroll();
    initContactForm();
});
