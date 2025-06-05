const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

const burgerMenu = document.getElementById('burgerMenu');
const menuPopup = document.getElementById('menuPopup');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');

// Toggle menu open/close with animation
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    menuPopup.classList.toggle('show');
});

// Optional: Keyboard accessibility (Enter/Space)
burgerMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        burgerMenu.click();
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!burgerMenu.contains(e.target) && !menuPopup.contains(e.target)) {
        burgerMenu.classList.remove('active');
        menuPopup.classList.remove('show');
    }
});

// Theme toggle
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    burgerMenu.classList.remove('active');
    menuPopup.classList.remove('show');
});
