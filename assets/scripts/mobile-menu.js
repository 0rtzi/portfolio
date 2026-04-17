// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLangDropdown = document.getElementById('mobile-lang-dropdown');

// Hamburger menu toggle
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
        // Cerrar el dropdown de idiomas al abrir/cerrar el menú
        mobileLangDropdown.classList.add('hidden');
    });
    
    // Close menu when a navigation link is clicked (no incluyendo el botón de idioma)
    const navLinks = mobileMenu.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.add('hidden');
            mobileLangDropdown.classList.add('hidden');
        });
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        mobileLangDropdown.classList.add('hidden');
    }
});