// ===========================
// Supernatural Fan Page Scripts
// ===========================

(function () {
  'use strict';

  // --- Quotes Carousel ---
  const quotes = document.querySelectorAll('.quote');
  const prevBtn = document.getElementById('prevQuote');
  const nextBtn = document.getElementById('nextQuote');
  let currentQuote = 0;
  let autoplayTimer;

  function showQuote(index) {
    quotes.forEach(function (q) {
      q.classList.remove('active');
    });
    currentQuote = (index + quotes.length) % quotes.length;
    quotes[currentQuote].classList.add('active');
  }

  function nextQuote() {
    showQuote(currentQuote + 1);
  }

  function prevQuote() {
    showQuote(currentQuote - 1);
  }

  function startAutoplay() {
    autoplayTimer = setInterval(nextQuote, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  if (quotes.length > 0) {
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        nextQuote();
        resetAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prevQuote();
        resetAutoplay();
      });
    }

    startAutoplay();
  }

  // --- Scroll-triggered Fade-in Animations ---
  var animatedElements = document.querySelectorAll(
    '.card, .timeline-item, .lore-item, .gallery-item, .playlist-item'
  );

  animatedElements.forEach(function (el) {
    el.classList.add('fade-in');
  });

  function checkVisibility() {
    var triggerBottom = window.innerHeight * 0.88;

    animatedElements.forEach(function (el) {
      var box = el.getBoundingClientRect();
      if (box.top < triggerBottom) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility, { passive: true });
  window.addEventListener('load', checkVisibility);

  // --- Sticky Nav Shadow ---
  var nav = document.getElementById('main-nav');

  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  // --- Mobile Hamburger Menu ---
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });
  }

  // --- Smooth Scroll for Nav Links (closes menu on mobile) ---
  document.querySelectorAll('#main-nav a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navToggle && navMenu) {
          navToggle.classList.remove('active');
          navMenu.classList.remove('open');
        }
      }
    });
  });

  // --- Touch Swipe for Quotes Carousel ---
  var carousel = document.getElementById('quotesCarousel');
  if (carousel) {
    var touchStartX = 0;
    var touchEndX = 0;

    carousel.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextQuote();
        } else {
          prevQuote();
        }
        resetAutoplay();
      }
    }, { passive: true });
  }

  // --- Easter Egg: Konami-ish sequence (↑ ↑ ↓ ↓) ---
  var easterSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown'];
  var easterProgress = 0;

  document.addEventListener('keydown', function (e) {
    if (e.key === easterSequence[easterProgress]) {
      easterProgress++;
      if (easterProgress === easterSequence.length) {
        easterProgress = 0;
        showEasterEgg();
      }
    } else {
      easterProgress = 0;
    }
  });

  function showEasterEgg() {
    var overlay = document.createElement('div');
    overlay.style.cssText =
      'position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;' +
      'display:flex;align-items:center;justify-content:center;flex-direction:column;' +
      'cursor:pointer;animation:fadeIn 0.5s ease';

    overlay.innerHTML =
      '<p style="font-family:Cinzel,serif;font-size:2rem;color:#d4a017;margin-bottom:1rem;">&#9737;</p>' +
      '<p style="font-family:Cinzel,serif;font-size:1.5rem;color:#f0e6d3;text-align:center;max-width:500px;">' +
      '"The Winchesters. To bravery, to family, to the end."</p>' +
      '<p style="margin-top:2rem;color:#888;font-size:0.8rem;">Click anywhere to close</p>';

    overlay.addEventListener('click', function () {
      overlay.remove();
    });

    document.body.appendChild(overlay);
  }
})();
