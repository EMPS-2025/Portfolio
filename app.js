// Energy Minds Power Solutions - Professional Energy Trading Interactive Features

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Energy Minds Professional Portfolio - Initializing...');
    
    // Initialize all features
    initParticleSystem();
    initNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initCounterAnimations();
    initTimelineAnimations();
    initFormHandling();
    initTypingAnimation();
    initScrollToTop();
    initTechnologyEffects();
    
    // Add loading completion effect
    setTimeout(() => {
        document.body.classList.add('loaded');
        console.log('Energy Minds Portfolio - Ready!');
    }, 1000);
});

// Particle System for Background Animation
function initParticleSystem() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 40;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning and properties
        const startX = Math.random() * window.innerWidth;
        const animationDuration = 15 + Math.random() * 20; // 15-35s
        const delay = Math.random() * 10; // 0-10s delay
        const size = 1 + Math.random() * 2; // 1-3px
        
        particle.style.left = startX + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDuration = animationDuration + 's';
        particle.style.animationDelay = delay + 's';
        
        // Random opacity and glow
        particle.style.opacity = 0.2 + Math.random() * 0.5;
        particle.style.boxShadow = `0 0 ${size * 2}px rgba(6, 182, 212, 0.6)`;
        
        return particle;
    }
    
    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
        particlesContainer.appendChild(createParticle());
    }
    
    // Continuously regenerate particles
    setInterval(() => {
        const oldParticles = particlesContainer.children;
        if (oldParticles.length > particleCount * 1.5) {
            // Remove oldest particles
            for (let i = 0; i < 8; i++) {
                if (oldParticles[0]) {
                    particlesContainer.removeChild(oldParticles[0]);
                }
            }
        }
        
        // Add new particles
        for (let i = 0; i < 4; i++) {
            particlesContainer.appendChild(createParticle());
        }
    }, 4000);
}

// Advanced Navigation with Scroll Effects
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navbar) return;
    
    let lastScrollY = window.scrollY;
    
    // Handle scroll effects
    window.addEventListener('scroll', throttle(function() {
        const currentScrollY = window.scrollY;
        
        // Add/remove scrolled class
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide navbar on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        
        // Update active nav link
        updateActiveNavLink();
    }, 16));
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
}

// Smooth Scrolling with Easing
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                // Smooth scroll with custom easing
                smoothScrollTo(targetPosition, 1000);
                
                // Add visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
}

// Custom smooth scroll function
function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuart(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    requestAnimationFrame(animation);
}

// Easing function for smooth animation
function easeInOutQuart(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t + b;
    t -= 2;
    return -c / 2 * (t * t * t * t - 2) + b;
}

// Advanced Scroll Animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                // Add animation class
                target.classList.add('animate');
                
                // Stagger animations for grid items
                const gridItems = target.querySelectorAll('.glass-card');
                if (gridItems.length > 0) {
                    animateGridItems(gridItems);
                }
                
                // Special handling for different sections
                if (target.id === 'journey') {
                    animateTimeline();
                } else if (target.classList.contains('milestone')) {
                    animateMilestone(target);
                }
                
                // Stop observing once animated
                observer.unobserve(target);
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll('section, .glass-card, .milestone');
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Staggered grid animations
function animateGridItems(items) {
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = `slideInUp 0.6s ease-out forwards`;
            item.style.animationDelay = '0s';
        }, index * 100);
    });
}

// Counter animations for statistics
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-item[data-count]');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const numberElement = counter.querySelector('.stat-number');
                
                animateCounter(numberElement, 0, target, 2000);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Counter animation function
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * easeOutQuart(progress));
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = end.toLocaleString();
            
            // Add completion effect
            element.style.transform = 'scale(1.1)';
            element.style.textShadow = '0 0 20px rgba(6, 182, 212, 0.8)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
                element.style.textShadow = '0 0 20px rgba(6, 182, 212, 0.5)';
            }, 200);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Easing function for counter
function easeOutQuart(t) {
    return 1 - (--t) * t * t * t;
}

// Timeline animations
function initTimelineAnimations() {
    const timelineProgress = document.getElementById('timelineProgress');
    if (!timelineProgress) return;
    
    const timeline = document.querySelector('.journey-timeline');
    if (!timeline) return;
    
    const milestones = timeline.querySelectorAll('.milestone');
    
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateTimelineProgress(timelineProgress, milestones);
                timelineObserver.unobserve(timeline);
            }
        });
    }, { threshold: 0.3 });
    
    timelineObserver.observe(timeline);
}

function animateTimelineProgress(progressElement, milestones) {
    const totalHeight = document.querySelector('.journey-timeline').offsetHeight;
    
    // Animate progress line
    progressElement.style.height = totalHeight + 'px';
    
    // Animate milestones
    milestones.forEach((milestone, index) => {
        setTimeout(() => {
            milestone.classList.add('animate');
            
            // Add marker glow effect
            const marker = milestone.querySelector('.milestone-marker');
            if (marker) {
                marker.style.animation = 'marker-pulse 2s ease-in-out infinite';
            }
        }, index * 300);
    });
}

function animateMilestone(milestone) {
    milestone.style.opacity = '1';
    milestone.style.transform = 'translateX(0)';
    
    // Add completion effect
    setTimeout(() => {
        const marker = milestone.querySelector('.milestone-marker');
        if (marker) {
            marker.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.8)';
        }
    }, 500);
}

// Typing animation for hero title
function initTypingAnimation() {
    const heroTitle = document.getElementById('heroTitle');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '3px solid #06b6d4';
    heroTitle.style.animation = 'blink 1s infinite';
    
    let index = 0;
    
    function typeChar() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            
            // Variable speed for more natural typing
            const delay = Math.random() * 100 + 50;
            setTimeout(typeChar, delay);
        } else {
            // Remove cursor after typing
            setTimeout(() => {
                heroTitle.style.borderRight = 'none';
                heroTitle.style.animation = 'none';
            }, 1000);
        }
    }
    
    // Start typing after a delay
    setTimeout(typeChar, 1500);
}

// Add CSS for blinking cursor
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { border-right-color: #06b6d4; }
        51%, 100% { border-right-color: transparent; }
    }
`;
document.head.appendChild(style);

// Form handling with animations
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form form, .contact-form');
    if (!contactForm) return;
    
    const inputs = contactForm.querySelectorAll('.cyber-input');
    
    // Add focus animations to inputs
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.3)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
        
        // Typing effect
        input.addEventListener('input', function() {
            this.style.borderColor = '#14b8a6';
        });
    });
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.querySelector('.btn-text').textContent;
        
        // Loading animation
        submitBtn.querySelector('.btn-text').textContent = 'Sending...';
        submitBtn.style.background = '#f59e0b';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            submitBtn.querySelector('.btn-text').textContent = 'Message Sent! ✓';
            submitBtn.style.background = '#14b8a6';
            
            // Show success message
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            
            // Reset form
            setTimeout(() => {
                this.reset();
                submitBtn.querySelector('.btn-text').textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }, 2000);
    });
}

// Technology background effects
function initTechnologyEffects() {
    const neuralBg = document.querySelector('.neural-network-bg');
    if (!neuralBg) return;
    
    // Create connection lines
    function createConnections() {
        const connections = document.createElement('div');
        connections.className = 'tech-connections';
        connections.style.position = 'absolute';
        connections.style.top = '0';
        connections.style.left = '0';
        connections.style.width = '100%';
        connections.style.height = '100%';
        connections.style.pointerEvents = 'none';
        connections.style.opacity = '0.1';
        
        // Create animated lines
        for (let i = 0; i < 15; i++) {
            const line = document.createElement('div');
            line.style.position = 'absolute';
            line.style.width = Math.random() * 150 + 50 + 'px';
            line.style.height = '1px';
            line.style.background = 'linear-gradient(90deg, transparent, #06b6d4, transparent)';
            line.style.top = Math.random() * 100 + '%';
            line.style.left = Math.random() * 100 + '%';
            line.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            line.style.animation = `neural-pulse ${3 + Math.random() * 4}s ease-in-out infinite`;
            
            connections.appendChild(line);
        }
        
        neuralBg.appendChild(connections);
    }
    
    createConnections();
}

// Scroll to top button
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top-btn';
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide based on scroll
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }, 100));
    
    // Scroll to top functionality
    scrollBtn.addEventListener('click', () => {
        smoothScrollTo(0, 1000);
        
        // Button animation
        scrollBtn.style.transform = 'scale(0.8)';
        setTimeout(() => {
            scrollBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '16px 24px';
    notification.style.borderRadius = '8px';
    notification.style.color = '#f8fafc';
    notification.style.fontWeight = '500';
    notification.style.zIndex = '10000';
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'all 0.3s ease-out';
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #14b8a6, #06b6d4)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #3b82f6, #1e3a8a)';
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Performance optimization utilities
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Advanced hover effects for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // 3D tilt effect
            this.style.transform = 'translateY(-8px) rotateX(2deg) rotateY(2deg)';
            this.style.transition = 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)';
            
            // Enhanced glow
            this.style.boxShadow = '0 20px 40px rgba(6, 182, 212, 0.2), 0 0 0 1px rgba(96, 165, 250, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
            this.style.boxShadow = '';
        });
        
        // Mouse move parallax effect
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });
});

// Service worker for offline functionality (optional enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        console.log('Energy Minds - Professional features available');
    });
}

// Enhanced keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to close any modals or overlays
    if (e.keyCode === 27) {
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        });
    }
    
    // Space or Enter for scroll to top button
    if ((e.keyCode === 32 || e.keyCode === 13) && document.activeElement.classList.contains('scroll-to-top-btn')) {
        e.preventDefault();
        smoothScrollTo(0, 1000);
    }
});

// Initialize reduced motion support
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// Print styles
window.addEventListener('beforeprint', function() {
    // Hide interactive elements when printing
    const interactiveElements = document.querySelectorAll('.scroll-to-top-btn, .particles-container');
    interactiveElements.forEach(el => {
        el.style.display = 'none';
    });
});

window.addEventListener('afterprint', function() {
    // Restore interactive elements after printing
    const interactiveElements = document.querySelectorAll('.scroll-to-top-btn, .particles-container');
    interactiveElements.forEach(el => {
        el.style.display = '';
    });
});

console.log('⚡ Energy Minds Professional Portfolio - Fully Loaded & Optimized!');
console.log('🔋 Technology-enabled energy trading solutions ready to serve!');