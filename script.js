// Build a PNG loader ring using canvas so the asset can spin in 3D
function generateLoaderImage() {
    const loaderImage = document.getElementById('loaderImage');
    if (!loaderImage) return;

    const canvas = document.createElement('canvas');
    const size = 640;
    const radius = 230;
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d');
    const center = size / 2;

    ctx.translate(center, center);

    // Draw ring
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#000000';
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.arc(0, 0, radius - 18, 0, Math.PI * 2);
    ctx.fill();

    // Circular text
    const text = 'GREATNESS LOADING · ';
    ctx.fillStyle = '#000000';
    ctx.font = '700 20px "Space Grotesk", "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < text.length; i++) {
        const angle = (i / text.length) * Math.PI * 2;
        const x = Math.cos(angle) * (radius - 10);
        const y = Math.sin(angle) * (radius - 10);
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2);
        ctx.fillText(text[i], 0, 0);
        ctx.restore();
    }

    // Center text
    ctx.font = '900 42px "Space Grotesk", "Inter", sans-serif';
    ctx.fillText('GREATNESS', 0, -18);
    ctx.fillText('LOADING', 0, 32);

    loaderImage.src = canvas.toDataURL('image/png');
}

// Page Loader Animation
function initPageLoader() {
    const loader = document.getElementById('pageLoader');
    const loaderPercentage = document.getElementById('loaderPercentage');

    if (!loader || !loaderPercentage) return;

    // Create rotating loader image
    generateLoaderImage();
    
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
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const subject = form.querySelectorAll('input[type="text"]')[1].value;
            const message = form.querySelector('textarea').value;
            
            // Show sending message
            formMessage.textContent = 'Sending message...';
            formMessage.className = 'form-message-minimal';
            formMessage.style.display = 'block';
            
            try {
                // Option 1: Using Formspree (Free service)
                // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
                // Get it from: https://formspree.io/
                const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        subject: subject,
                        message: message,
                        _replyto: email
                    })
                });
                
                if (response.ok) {
                    formMessage.textContent = 'Thank you! Your message has been received! I\'ll get back to you soon.';
                    formMessage.className = 'form-message-minimal success';
                    form.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                // Fallback: Use mailto link
                const mailtoLink = `mailto:sangrams@andrew.cmu.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                window.location.href = mailtoLink;
                
                formMessage.textContent = 'Opening your email client... If it doesn\'t open, please email me directly at sangrams@andrew.cmu.edu';
                formMessage.className = 'form-message-minimal success';
                form.reset();
            }
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 8000);
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
