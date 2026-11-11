document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const lightModeIcon = document.getElementById('light-mode-icon');
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  let isDarkMode = localStorage.getItem('theme') !== 'light';

  function applyTheme(animate = false) {
    document.body.classList.toggle('light-mode', !isDarkMode);

    if (lightModeIcon) lightModeIcon.hidden = !isDarkMode;
    if (darkModeIcon) darkModeIcon.hidden = isDarkMode;

    if (!animate || !themeToggle) return;

    themeToggle.classList.add('animating');
    setTimeout(() => themeToggle.classList.remove('animating'), 700);

    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
      heroImage.classList.add('inverting');
      setTimeout(() => heroImage.classList.remove('inverting'), 1000);
    }
  }

  applyTheme();

  themeToggle?.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    applyTheme(true);
  });

  function closeMobileNav() {
    hamburger?.classList.remove('active');
    nav?.classList.remove('active');
  }

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav?.classList.toggle('active');
  });

  function scrollToTarget(targetId) {
    const target = document.querySelector(targetId);

    if (target) {
      const headerHeight = document.querySelector('header')?.offsetHeight ?? 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');

      if (!targetId?.startsWith('#')) return;

      event.preventDefault();
      scrollToTarget(targetId);

      navLinks.forEach((navLink) => navLink.classList.remove('active'));
      link.classList.add('active');
      closeMobileNav();
    });
  });

  const ctaButton = document.querySelector('.cta-button');

  ctaButton?.addEventListener('click', (event) => {
    const targetId = ctaButton.getAttribute('href');

    if (!targetId?.startsWith('#')) return;

    event.preventDefault();
    scrollToTarget(targetId);

    navLinks.forEach((link) => link.classList.remove('active'));
    document.querySelector(`nav a[href="${targetId}"]`)?.classList.add('active');
  });

  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((element) => observer.observe(element));

  window.addEventListener(
    'scroll',
    () => {
      const scrollPosition = window.scrollY + 120;

      document.querySelectorAll('section[id]').forEach((section) => {
        const isActive =
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight;

        if (isActive) {
          navLinks.forEach((link) => link.classList.remove('active'));
          document
            .querySelector(`nav a[href="#${section.id}"]`)
            ?.classList.add('active');
        }
      });
    },
    { passive: true }
  );
});