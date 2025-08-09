// Simple smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Simple hover effects for reflection items
document.querySelectorAll('.reflection-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const title = this.querySelector('.reflection-title a');
        if (title) {
            title.style.color = '#4f8bff';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const title = this.querySelector('.reflection-title a');
        if (title) {
            title.style.color = '#ffffff';
        }
    });
});

// Image fallback for profile photo
const profilePhoto = document.querySelector('.profile-photo');
if (profilePhoto) {
    profilePhoto.addEventListener('error', function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMWExZjM2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNDAiIGZpbGw9IiM0ZjhiZmYiLz4KPHRleHQgeD0iMTAwIiB5PSIxNDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmZmZmZmYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+SmFuIEFndWlsw7MgUGxhbmE8L3RleHQ+Cjwvc3ZnPgo=';
        this.alt = 'Jan Aguiló Plana - Profile Photo';
    });
}

// Simple console message
console.log('Jan Aguiló Plana - Portfolio\nthink different.\n\nBuilt with minimalism in mind.');

// Smooth page load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Set initial opacity for smooth load
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// Add some basic interaction feedback
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add a subtle click effect
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// Simple form validation for contact links
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('mailto:') || href.startsWith('tel:')) {
            // Show a brief confirmation for email/phone links
            const originalText = this.textContent;
            this.textContent = 'Opening...';
            setTimeout(() => {
                this.textContent = originalText;
            }, 1000);
        }
    });
});

// Lazy loading for images
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            observer.unobserve(img);
        }
    });
});

images.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
    imageObserver.observe(img);
});

// Add subtle loading states
document.addEventListener('DOMContentLoaded', function() {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Initialize all basic functionality
    console.log('Website loaded successfully');
});

// Basic accessibility improvements
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #4f8bff';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Simple keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Add some basic CSS for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    body.keyboard-navigation *:focus {
        outline: 2px solid #4f8bff !important;
        outline-offset: 2px !important;
    }
    
    .loaded {
        opacity: 1 !important;
    }
`;
document.head.appendChild(style); 