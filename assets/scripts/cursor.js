document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const hoverableItem = document.querySelectorAll('.hoverableItem');
    const text = document.querySelectorAll('.hoverableText');
    const html = document.querySelector('html');
    const defaultCursorSize = 75;
    const smallCursorSize = 50;
    const largeCursorSize = 150;
    lucide.createIcons();

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        gsap.to(cursor, {
            x: x,
            y: y,
            duration: 0.3,
            ease: 'power1.out'
        });
    });

    html.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            '--dot-size': `${defaultCursorSize}px`,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    html.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            '--dot-size': `${0}px`,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    hoverableItem.forEach(element => {
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