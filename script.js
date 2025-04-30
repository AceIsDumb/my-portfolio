document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.querySelector('.theme-toggle');
  const lightModeIcon = document.getElementById('light-mode-icon');
  const darkModeIcon = document.getElementById('dark-mode-icon');

  let isDarkMode = localStorage.getItem('theme') !== 'light';

  function applyTheme(animate = false) {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
      lightModeIcon.style.display = 'none';
      darkModeIcon.style.display = 'block';
    } else {
      document.body.classList.add('light-mode');
      lightModeIcon.style.display = 'block';
      darkModeIcon.style.display = 'none';
    }

    if (animate) {
      themeToggle.classList.add('animating');
      setTimeout(() => {
        themeToggle.classList.remove('animating');
      }, 700);

      document.body.style.opacity = '0.92';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 300);

      const heroImage = document.querySelector('.hero-image');
      if (heroImage) {
        heroImage.classList.add('inverting');
        setTimeout(() => {
          heroImage.classList.remove('inverting');
        }, 1000);
      }
    }
  }

  applyTheme(false);

  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    applyTheme(true);
  });

  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    nav.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      targetSection.scrollIntoView({
        behavior: 'smooth',
      });

      navLinks.forEach((navLink) => navLink.classList.remove('active'));
      this.classList.add('active');

      hamburger.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      targetSection.scrollIntoView({
        behavior: 'smooth',
      });

      navLinks.forEach((navLink) => navLink.classList.remove('active'));
      const correspondingNavLink = document.querySelector(`nav a[href="${targetId}"]`);
      if (correspondingNavLink) {
        correspondingNavLink.classList.add('active');
      }
    });
  }

  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((element) => {
    observer.observe(element);
  });

  window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => link.classList.remove('active'));

        const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  });
});
