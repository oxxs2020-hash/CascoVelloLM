/* ============================================
   CASCO VELLO STAYS — Interactive Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ——— Page Loader ———
  const loader = document.querySelector('.page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
      }, 600);
    });
    // Fallback in case load already fired
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.remove('loading');
    }, 2000);
  }

  // ——— Scroll Progress Bar ———
  const scrollProgress = document.querySelector('.scroll-progress');
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) {
      scrollProgress.style.width = progress + '%';
    }
  }

  // ——— Header Scroll Effect ———
  const header = document.querySelector('header');
  function updateHeaderState() {
    if (!header) return;
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // ——— Parallax Hero ———
  const heroBgImg = document.querySelector('.hero-bg img');
  function updateParallax() {
    if (!heroBgImg) return;
    const scrollTop = window.scrollY;
    const heroHeight = document.querySelector('.hero')?.offsetHeight || 800;
    if (scrollTop < heroHeight) {
      const translateY = scrollTop * 0.35;
      heroBgImg.style.transform = `translateY(${translateY}px) scale(1.1)`;
    }
  }

  // ——— Consolidated Scroll Handler ———
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollProgress();
        updateHeaderState();
        updateParallax();
        updateBackToTop();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ——— Mobile Navigation Toggle ———
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
    });
    // Close on link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  // ——— Smooth Scroll for Anchor Links ———
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ——— Scroll Reveal Animations ———
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ——— Image Carousels ———
  function initCarousels() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const carousel = card.querySelector('.carousel');
      if (!carousel) return;

      const track = carousel.querySelector('.carousel-track');
      const slides = carousel.querySelectorAll('.carousel-slide');
      const dots = carousel.querySelectorAll('.carousel-dot');
      const prevBtn = carousel.querySelector('.carousel-btn.prev');
      const nextBtn = carousel.querySelector('.carousel-btn.next');

      if (slides.length <= 1) return;

      let currentIndex = 0;
      let startX = 0;
      let isDragging = false;

      function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === currentIndex);
        });
      }

      if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); goToSlide(currentIndex - 1); });
      if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); goToSlide(currentIndex + 1); });

      dots.forEach((dot, i) => {
        dot.addEventListener('click', (e) => { e.stopPropagation(); goToSlide(i); });
      });

      // Touch/swipe support
      carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
      }, { passive: true });

      carousel.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) goToSlide(currentIndex + 1);
          else goToSlide(currentIndex - 1);
        }
        isDragging = false;
      }, { passive: true });

      // Mouse drag support
      carousel.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        isDragging = true;
        carousel.style.cursor = 'grabbing';
      });

      carousel.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        const diff = startX - e.clientX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) goToSlide(currentIndex + 1);
          else goToSlide(currentIndex - 1);
        }
        isDragging = false;
        carousel.style.cursor = '';
      });

      carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        carousel.style.cursor = '';
      });
    });
  }

  initCarousels();

  // ——— Testimonial Carousel ———
  function initTestimonialCarousel() {
    const carousel = document.querySelector('.testimonial-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.testimonial-track');
    const slides = carousel.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');

    if (slides.length <= 1) return;

    let currentIndex = 0;
    let autoplayInterval;

    function goTo(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

    function startAutoplay() {
      autoplayInterval = setInterval(() => goTo(currentIndex + 1), 6000);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    startAutoplay();
  }

  initTestimonialCarousel();

  // ——— Animated Counters ———
  function initCounters() {
    const counters = document.querySelectorAll('.counter-value');

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          const duration = 2000;
          const startTime = performance.now();

          function animate(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  initCounters();

  // ——— Back to Top ———
  const backToTop = document.querySelector('.back-to-top');
  function updateBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 600) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ——— Current Year in Footer ———
  const yearEl = document.querySelector('.current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
