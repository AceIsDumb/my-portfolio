document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const lightModeIcon = document.getElementById('light-mode-icon');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    

    let isDarkMode = localStorage.getItem('theme') !== 'light';
    
    function applyTheme() {
        if (isDarkMode) {
            document.body.classList.remove('light-mode');
            lightModeIcon.style.display = 'none';
            darkModeIcon.style.display = 'block';
        } else {
            document.body.classList.add('light-mode');
            lightModeIcon.style.display = 'block';
            darkModeIcon.style.display = 'none';
        }
    }
    
    applyTheme();
    
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        applyTheme();
    });
    
    // Existing fade animation code
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});