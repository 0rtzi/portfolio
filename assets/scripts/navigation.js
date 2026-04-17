const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav > div > div a[href^='#']");

window.addEventListener("scroll", () => {
    let current = "";
    
    // Ajustar offset según el tamaño de pantalla (para dejar espacio del navbar)
    const offset = window.innerWidth < 768 ? 150 : 200;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - offset;
        const sectionHeight = section.offsetHeight;
        const sectionEnd = sectionTop + sectionHeight + offset;
        if (window.scrollY >= sectionTop && window.scrollY < sectionEnd) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("text-primary", "nav-link-active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("text-primary", "nav-link-active");
        }
    });
})

const logo = document.querySelector(".text-xl.font-black");
logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scroll con offset para todos los links de navegación
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href !== "#") {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = window.innerWidth < 768 ? 100 : 200;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        }
    });
});

// Botones de navegación desde el hero
const btnViewProjects = document.getElementById('btn-view-projects');
const btnContactMe = document.getElementById('btn-contact-me');

if (btnViewProjects) {
    btnViewProjects.addEventListener('click', (e) => {
        e.preventDefault();
        const projectsSection = document.getElementById('projects');
        const offset = 150;
        const sectionPosition = projectsSection.offsetTop - offset;
        window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    });
}

if (btnContactMe) {
    btnContactMe.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        const offset = 150;
        const sectionPosition = contactSection.offsetTop - offset;
        window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    });
}
   
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (!targetSection) return;
        
        const offset = 150;
        const sectionPosition = targetSection.offsetTop - offset;
        window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    });
});