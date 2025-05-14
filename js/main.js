/**
 * SEESL Website - Main JavaScript File
 * 
 * This file initializes all functionality for the website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize form validation if form exists
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      initFormValidation(contactForm);
    }
    
    // Initialize carousels if they exist
    if (document.querySelector('.partners-carousel')) {
      initPartnersCarousel();
    }
    
    if (document.querySelector('.projects-carousel')) {
      initProjectsCarousel();
    }
    
    // Initialize modals if they exist
    if (document.querySelector('.modal')) {
      initModals();
    }
  });
  
  /**
   * Mobile Menu Functionality
   */
  function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const servicesDropdown = document.getElementById('services-dropdown-mobile');
    const mobileServices = document.getElementById('mobile-services');
    
    if (!mobileMenuToggle || !mobileMenu) return;
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
      if (!mobileMenu.classList.contains('open')) {
        // Opening the menu
        mobileMenu.style.height = 'auto';
        const height = mobileMenu.scrollHeight;
        mobileMenu.style.height = '0';
        mobileMenu.style.visibility = 'visible';
        
        // Force browser to acknowledge changes before animation
        setTimeout(() => {
          mobileMenu.style.height = `${height}px`;
          mobileMenu.classList.add('open');
        }, 10);
        
        // Change icon to X
        mobileMenuToggle.querySelector('i').className = 'fas fa-times';
      } else {
        // Closing the menu
        mobileMenu.style.height = '0';
        mobileMenu.classList.remove('open');
        
        // Reset icon
        mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
        
        // After animation completes, hide element
        setTimeout(() => {
          if (!mobileMenu.classList.contains('open')) {
            mobileMenu.style.visibility = 'hidden';
          }
        }, 300);
      }
    });
    
    // Toggle services dropdown in mobile menu
    if (servicesDropdown && mobileServices) {
      servicesDropdown.addEventListener('click', function() {
        mobileServices.classList.toggle('open');
        
        // Rotate chevron icon
        const icon = servicesDropdown.querySelector('i');
        if (mobileServices.classList.contains('open')) {
          icon.style.transform = 'rotate(180deg)';
        } else {
          icon.style.transform = 'rotate(0)';
        }
      });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (mobileMenu.classList.contains('open') && 
          !mobileMenu.contains(e.target) && 
          !mobileMenuToggle.contains(e.target)) {
        
        mobileMenu.style.height = '0';
        mobileMenu.classList.remove('open');
        mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
        
        setTimeout(() => {
          if (!mobileMenu.classList.contains('open')) {
            mobileMenu.style.visibility = 'hidden';
          }
        }, 300);
      }
    });
  }
  
  /**
   * Theme Toggle Functionality
   */
  function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (!themeToggle) return;
    
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set the theme based on saved preference or device setting
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDarkScheme.matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      // Update the theme
      document.documentElement.setAttribute('data-theme', newTheme);
      
      // Save the preference
      localStorage.setItem('theme', newTheme);
    });
  }
  
  /**
   * Form Validation
   */
  function initFormValidation(form) {
    // Add input validation on blur
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      if (input.hasAttribute('required')) {
        input.addEventListener('blur', function() {
          validateInput(this);
        });
      }
      
      if (input.type === 'email') {
        input.addEventListener('blur', function() {
          validateEmail(this);
        });
      }
    });
    
    // Comment out the JavaScript for testing
    // document.getElementById('contact-form').addEventListener('submit', function(e) {
    //     // Your validation and submission logic here
    // });
    
    // Input validation function
    function validateInput(input) {
      const parent = input.closest('.form-group');
      const errorElement = parent.querySelector('.error-message');
      
      // Remove existing error message
      if (errorElement) {
        parent.removeChild(errorElement);
      }
      
      // Remove error class
      parent.classList.remove('error');
      
      // Check if input is empty
      if (input.value.trim() === '') {
        showError(input, 'This field is required');
        return false;
      }
      
      return true;
    }
    
    // Email validation function
    function validateEmail(input) {
      if (input.value.trim() === '') return true;
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(input.value.trim());
      
      if (!isValid) {
        showError(input, 'Please enter a valid email address');
      }
      
      return isValid;
    }
    
    // Show error message
    function showError(input, message) {
      const parent = input.closest('.form-group');
      parent.classList.add('error');
      
      const errorMessage = document.createElement('span');
      errorMessage.className = 'error-message';
      errorMessage.textContent = message;
      
      parent.appendChild(errorMessage);
    }
  }
  
  /**
   * Partners Carousel
   */
  function initPartnersCarousel() {
    const carousel = document.querySelector('.partners-carousel');
    const carouselContainer = carousel.querySelector('.carousel-container');
    const prevButton = carousel.querySelector('.prev-button');
    const nextButton = carousel.querySelector('.next-button');
    const items = carousel.querySelectorAll('.partner-item');
    
    if (items.length === 0) return;
    
    let currentIndex = 0;
    let itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    let itemsPerView = Math.floor(carouselContainer.offsetWidth / itemWidth);
    
    // Update on window resize
    window.addEventListener('resize', function() {
      itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
      itemsPerView = Math.floor(carouselContainer.offsetWidth / itemWidth);
      updateCarousel();
    });
    
    // Move to previous slide
    prevButton.addEventListener('click', function() {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateCarousel();
    });
    
    // Move to next slide
    nextButton.addEventListener('click', function() {
      currentIndex = Math.min(currentIndex + 1, items.length - itemsPerView);
      updateCarousel();
    });
    
    // Update carousel position
    function updateCarousel() {
      const translateX = -currentIndex * itemWidth;
      carouselContainer.style.transform = `translateX(${translateX}px)`;
      
      // Update button states
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex >= items.length - itemsPerView;
    }
    
    // Initial update
    updateCarousel();
  }
  
  /**
   * Projects Carousel
   */
  function initProjectsCarousel() {
    const carousel = document.querySelector('.projects-carousel');
    const slides = carousel.querySelectorAll('.project-slide');
    const dots = carousel.querySelectorAll('.dot');
    const prevButton = carousel.querySelector('.prev-button');
    const nextButton = carousel.querySelector('.next-button');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    // Show slide by index
    function showSlide(index) {
      // Hide all slides
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      
      // Deactivate all dots
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      
      // Show current slide and activate dot
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    }
    
    // Move to previous slide
    prevButton.addEventListener('click', function() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
    
    // Move to next slide
    nextButton.addEventListener('click', function() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
    
    // Auto-advance slides
    let autoAdvance = setInterval(function() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
    
    // Pause auto-advance on hover
    carousel.addEventListener('mouseenter', function() {
      clearInterval(autoAdvance);
    });
    
    carousel.addEventListener('mouseleave', function() {
      autoAdvance = setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }, 5000);
    });
    
    // Initial slide
    showSlide(currentSlide);
  }
  
  /**
   * Modal Functionality
   */
  function initModals() {
    const modals = document.querySelectorAll('.modal');
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const closeButtons = document.querySelectorAll('.modal-close, .modal-cancel');
    
    // Hide modal by default
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
    
    // Open modal when trigger is clicked
    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        
        if (modal) {
          modal.style.display = 'block';
          document.body.style.overflow = 'hidden'; // Prevent body scrolling
        }
      });
    });
    
    // Close modal when close button is clicked
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) {
          modal.style.display = 'none';
          document.body.style.overflow = ''; // Restore body scrolling
        }
      });
    });
    
    // Close modal when clicking outside the modal content
    modals.forEach(modal => {
      modal.addEventListener('click', function(e) {
        if (e.target === this) {
          this.style.display = 'none';
          document.body.style.overflow = ''; // Restore body scrolling
        }
      });
    });
    
    // Close modal when pressing ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        modals.forEach(modal => {
          if (modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore body scrolling
          }
        });
      }
    });
  }

  // Clear the form fields when the page loads
  window.addEventListener('load', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.reset(); // Reset the form fields
    }
  });

  // Carousel Setup with Autoplay, Arrows & Dots
function setupCarousel(selector) {
  const container = document.querySelector(selector);
  const track = container.querySelector('.'+selector.replace('.', '')+'-track');
  const items = track.children;
  const prev = container.querySelector('.prev-' + selector.replace('.', ''));
  const next = container.querySelector('.next-' + selector.replace('.', ''));
  const dotsContainer = container.querySelector('.pagination-dots');
  let index = 0, timer;
  const total = items.length, interval = 4000;

  // Create and attach dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.append(dot);
  }
  const dots = dotsContainer.children;

  function update() {
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
    Array.from(dots).forEach((d, i) => d.classList.toggle('active', i === index));
  }
  function nextSlide() { index = (index + 1) % total; update(); }
  function prevSlide() { index = (index - 1 + total) % total; update(); }
  function resetTimer() { clearInterval(timer); timer = setInterval(nextSlide, interval); }
  function goTo(i) { index = i; resetTimer(); update(); }

  prev.addEventListener('click', () => { prevSlide(); resetTimer(); });
  next.addEventListener('click', () => { nextSlide(); resetTimer(); });
  resetTimer(); update();
}

setupCarousel('.tech-carousel');
setupCarousel('.projects-carousel');

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
const closeBtn = lightbox.querySelector('.lightbox-close');
document.querySelectorAll('.thumbnail').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove('hidden');
  });
});
closeBtn.addEventListener('click', () => lightbox.classList.add('hidden'));
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.add('hidden'); });

