// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const spans = mobileMenuBtn.querySelectorAll('span');
  spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : '';
  spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
  spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : '';
});

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});

// Testimonials Slider
const testimonials = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const dotsContainer = document.querySelector('.slider-dots');
let currentSlide = 0;

// Create dots
testimonials.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');
dots[0].classList.add('active');

function updateSlide() {
  testimonials.forEach((testimonial, index) => {
    testimonial.classList.remove('active');
    dots[index].classList.remove('active');
  });
  
  testimonials[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % testimonials.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
  updateSlide();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlide();
}

prevBtn?.addEventListener('click', prevSlide);
nextBtn?.addEventListener('click', nextSlide);

// Auto-advance slides
setInterval(nextSlide, 5000);

// Forms
const newsletterForm = document.getElementById('newsletter-form');
const contactForm = document.getElementById('contact-form');

newsletterForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  // Here you would typically send this to your backend
  console.log('Newsletter signup:', email);
  alert('Thanks for subscribing! Check your email for confirmation.');
  e.target.reset();
});

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  // Here you would typically send this to your backend
  console.log('Contact form:', data);
  alert('Thanks for your message! I\'ll be in touch soon.');
  e.target.reset();
});

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu if open
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    }
  });
});