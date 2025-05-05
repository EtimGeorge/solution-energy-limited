/**
 * SEESL Website - ISO Certification JavaScript
 * This file contains functionality specific to the ISO certification section
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Certificate Filtering
    initCertificateFilters();
    
    // Initialize Nigeria/International CTA buttons
    initIsoCTAButtons();
    
    // Initialize testimonial carousel
    initIsoTestimonialCarousel();
  });
  
  /**
   * Certificate Filtering Functionality
   */
  function initCertificateFilters() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const certificateItems = document.querySelectorAll('.certificate-item');
    
    if (!filterButtons.length || !certificateItems.length) return;
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Get filter value
        const filter = this.getAttribute('data-filter');
        
        // Remove active class from all buttons
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Filter certificates
        certificateItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-type') === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  /**
   * ISO CTA Button Functionality
   */
  function initIsoCTAButtons() {
    const nigeriaCta = document.getElementById('nigeria-cta');
    const internationalCta = document.getElementById('international-cta');
    const contactForm = document.getElementById('contact-form');
    const formTitle = document.getElementById('form-title');
    const clientTypeSelect = document.getElementById('client-type');
    
    if (!contactForm || !clientTypeSelect) return;
    
    function scrollToContactForm() {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    if (nigeriaCta) {
      nigeriaCta.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Update form styling
        contactForm.classList.add('nigeria-form');
        contactForm.classList.remove('international-form');
        
        // Update form title
        if (formTitle) {
          formTitle.textContent = 'Nigeria Client ISO Inquiry';
        }
        
        // Set client type
        clientTypeSelect.value = 'nigeria';
        
        // Update source tracking
        const sourceInput = document.getElementById('inquiry-source');
        if (sourceInput) {
          sourceInput.value = 'nigeria_cta';
        }
        
        // Scroll to form
        scrollToContactForm();
      });
    }
    
    if (internationalCta) {
      internationalCta.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Update form styling
        contactForm.classList.add('international-form');
        contactForm.classList.remove('nigeria-form');
        
        // Update form title
        if (formTitle) {
          formTitle.textContent = 'International Client ISO Inquiry';
        }
        
        // Set client type
        clientTypeSelect.value = 'international';
        
        // Update source tracking
        const sourceInput = document.getElementById('inquiry-source');
        if (sourceInput) {
          sourceInput.value = 'international_cta';
        }
        
        // Scroll to form
        scrollToContactForm();
      });
    }
  }
  
  /**
   * ISO Testimonial Carousel
   */
  function initIsoTestimonialCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    
    if (!slides.length || !dots.length || !prevButton || !nextButton) return;
    
    let currentSlide = 0;
    
    // Function to show specific slide
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
    
    // Previous slide button
    prevButton.addEventListener('click', function() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
    
    // Next slide button
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
    
    // Auto-rotate slides
    let autoRotate = setInterval(function() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
    
    // Pause auto-rotation on hover
    const testimonialSection = document.querySelector('.testimonials');
    if (testimonialSection) {
      testimonialSection.addEventListener('mouseenter', function() {
        clearInterval(autoRotate);
      });
      
      testimonialSection.addEventListener('mouseleave', function() {
        autoRotate = setInterval(function() {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
        }, 5000);
      });
    }
    
    // Initialize with first slide
    showSlide(currentSlide);
  }