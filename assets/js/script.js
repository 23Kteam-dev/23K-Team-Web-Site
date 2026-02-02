/* ===============================================
   23K ESPORT TEAM - GLOBAL SCRIPTS
   =============================================== */

// ==================== NAVBAR FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });

  // Smooth scroll active link indicator
  updateActiveLink();
  window.addEventListener('scroll', updateActiveLink);
});

function updateActiveLink() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentLocation = location.pathname;

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentLocation || 
        (currentLocation === '/' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ==================== COPY TO CLIPBOARD ====================
function copyDiscountCode(element) {
  const code = element.textContent.trim();
  
  navigator.clipboard.writeText(code).then(() => {
    const originalText = element.textContent;
    element.textContent = '✓ COPIATO!';
    element.style.backgroundColor = 'rgba(255, 105, 180, 0.3)';
    
    setTimeout(() => {
      element.textContent = originalText;
      element.style.backgroundColor = 'rgba(255, 105, 180, 0.1)';
    }, 2000);
  }).catch(err => {
    console.error('Errore nella copia:', err);
  });
}

// ==================== FORM SUBMISSION HANDLER ====================
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(this);
      const action = this.getAttribute('action');

      fetch(action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          showNotification('Messaggio inviato con successo! 🎮', 'success');
          contactForm.reset();
        } else {
          showNotification('Errore nell\'invio del messaggio. Riprova!', 'error');
        }
      }).catch(error => {
        showNotification('Errore di connessione. Riprova più tardi!', 'error');
        console.error('Error:', error);
      });
    });
  }
});

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    z-index: 9999;
    animation: slideInNotification 0.3s ease-out;
    ${type === 'success' ? 'background: rgba(76, 175, 80, 0.9); border: 1px solid #4CAF50;' : ''}
    ${type === 'error' ? 'background: rgba(244, 67, 54, 0.9); border: 1px solid #F44336;' : ''}
    ${type === 'info' ? 'background: rgba(33, 150, 243, 0.9); border: 1px solid #2196F3;' : ''}
    color: white;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutNotification 0.3s ease-out forwards';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ==================== STATS COUNTER ANIMATION ====================
function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const target = entry.target;
        const finalValue = parseInt(target.textContent);
        const duration = 2000;
        const increment = finalValue / (duration / 16);
        let current = 0;

        target.dataset.animated = 'true';

        const interval = setInterval(() => {
          current += increment;
          if (current >= finalValue) {
            target.textContent = finalValue + '+';
            clearInterval(interval);
          } else {
            target.textContent = Math.floor(current) + '+';
          }
        }, 16);

        observer.unobserve(target);
      }
    });
  }, observerOptions);

  statNumbers.forEach(stat => observer.observe(stat));
}

// Call animation on page load
document.addEventListener('DOMContentLoaded', animateStats);

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
  const cards = document.querySelectorAll('.card, .player-card, .creator-card, .tier-card, .stat-box');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
  });
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);

// ==================== LIVE BADGE PULSE ====================
function initLiveBadges() {
  const liveBadges = document.querySelectorAll('.badge-live');
  liveBadges.forEach(badge => {
    badge.style.animation = 'pulse 2s ease-in-out infinite';
  });
}

document.addEventListener('DOMContentLoaded', initLiveBadges);

// ==================== MOBILE RESPONSIVE MENU ====================
function setupMobileMenu() {
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    const dropdown = item.querySelector('.dropdown-menu');
    if (dropdown) {
      item.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', setupMobileMenu);

// ==================== THEME PERSISTENCE (Optional Dark Mode Toggle) ====================
function initTheme() {
  const theme = localStorage.getItem('theme') || 'dark';
  document.documentElement.style.colorScheme = theme;
}

document.addEventListener('DOMContentLoaded', initTheme);

// ==================== ANALYTICS TRACKING ====================
// Placeholder for analytics integration (Google Analytics, Mixpanel, etc.)
function trackEvent(eventName, eventData = {}) {
  console.log(`Event tracked: ${eventName}`, eventData);
  // Add your analytics code here
}

// Track button clicks
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('a[href*="discord"], a[href*="twitch"], a[href*="twitter"]');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      trackEvent('social_link_click', {
        url: this.href,
        platform: this.href.includes('discord') ? 'discord' : 
                  this.href.includes('twitch') ? 'twitch' : 'twitter'
      });
    });
  });
});

// ==================== KEYBOARD ACCESSIBILITY ====================
document.addEventListener('keydown', function(e) {
  // ESC key to close dropdowns
  if (e.key === 'Escape') {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(dropdown => {
      dropdown.style.display = 'none';
    });
  }
});

// ==================== UTILITY FUNCTIONS ====================
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==================== PAGE LOAD PERFORMANCE ====================
window.addEventListener('load', function() {
  console.log('Page fully loaded');
  document.documentElement.style.opacity = '1';
});

// ==================== INTERSECTION OBSERVER FOR LAZY LOADING ====================
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', initLazyLoading);

console.log('23K Esport Team - Scripts Loaded Successfully 🎮');
