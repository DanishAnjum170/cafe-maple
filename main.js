// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Change hamburger to X
        if (navLinks.classList.contains('active')) {
            mobileMenuToggle.textContent = '✕';
        } else {
            mobileMenuToggle.textContent = '☰';
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.textContent = '☰';
        });
    });
}

// Smooth Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 248, 220, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.background = 'rgba(255, 248, 220, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (name && email && message) {
            // Show success message
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
            
            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all fields before sending.');
        }
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.highlight-card, .menu-item, .gallery-item, .team-member, .testimonial');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Optional: Add to cart functionality for menu items
document.querySelectorAll('.menu-item').forEach(item => {
    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Order';
    addToCartBtn.className = 'btn';
    addToCartBtn.style.marginTop = '1rem';
    addToCartBtn.style.padding = '0.5rem 1rem';
    addToCartBtn.style.fontSize = '0.9rem';
    
    addToCartBtn.addEventListener('click', () => {
        const itemName = item.querySelector('h4').textContent;
        alert(`${itemName} added to your order! (Online ordering coming soon)`);
    });
    
    item.appendChild(addToCartBtn);
});

// Newsletter Subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        if (email) {
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            e.target.reset();
        }
    });
}

console.log('Café Maple website loaded successfully! ☕');