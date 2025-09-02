document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') == `#${id}`) {
                        console.log(`Activating link for section: ${id}`);
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });


    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetId == 'top'){
                gsap.to(window, {
                    scrollTo: {
                        y: 0,
                        offsetY: 0
                    },
                    duration: 1.5,
                    ease: "power2.inOut"
                });
                return;
            }

            if (targetSection) {
                gsap.to(window, {
                    scrollTo: {
                        y: targetSection.offsetTop,
                        offsetY: 100
                    },
                    duration: 1.5,
                    ease: "power2.inOut"
                });
            }
        });
    });

});