document.addEventListener('DOMContentLoaded', () => {
    const span = document.querySelectorAll('.hover-btn');
    const cursor = document.querySelector('.cursor');
    const text = document.querySelectorAll('.text');
        const body = document.querySelector('body');
    const defaultCursorSize = 75;
    const smallCursorSize = 50;
    const largeCursorSize = 150;
    lucide.createIcons();

    window.addEventListener('mousemove', (e) => {
        const x = Math.round((e.clientX / window.innerWidth) * 100);
        const y = Math.round((e.clientY / window.innerHeight) * 100);

        gsap.to(cursor, {
            '--x': `${x}%`,
            '--y': `${y}%`,
            duration: 2,
            ease: 'elastic.out'
        })
    });

    body.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            '--dot-size': `${defaultCursorSize}px`,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    body.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            '--dot-size': `${0}px`,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    span.forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                '--dot-size': `${smallCursorSize}px`,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                '--dot-size': `${defaultCursorSize}px`,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    text.forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                '--dot-size': `${largeCursorSize}px`,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                '--dot-size': `${defaultCursorSize}px`,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    })
});