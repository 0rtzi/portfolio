// Detectar si es dispositivo móvil o tablet
function isMobileOrTablet() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Patrones para detectar dispositivos móviles
    const mobilePatterns = [
        /android/i,
        /webos/i,
        /iphone/i,
        /ipad/i,
        /ipod/i,
        /blackberry/i,
        /windows phone/i,
        /opera mini/i,
        /iemobile/i
    ];
    
    // Verificar por touch eventos
    const hasTouch = () => {
        return (('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                (navigator.msMaxTouchPoints > 0));
    };
    
    return mobilePatterns.some(pattern => userAgent.match(pattern)) || hasTouch();
}

// Variable global para el cursor
let cursor = null;

// Función para actualizar listeners del cursor
function updateCursorListeners() {
    if (!cursor) return; // En móviles, cursor será null
    
    const clickables = document.querySelectorAll('a, button, [role="button"]');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-shrink'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-shrink'));
    });
}

// Si es móvil/tablet, ocultar el cursor personalizado y salir
if (isMobileOrTablet()) {
    const cursorElement = document.getElementById('custom-cursor');
    if (cursorElement) {
        cursorElement.style.display = 'none';
    }
    // Restaurar cursor por defecto
    document.body.style.cursor = 'auto';
} else {
    // Si es desktop, ejecutar el cursor personalizado
    cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        // Mostrar cursor cuando se mueve
        cursor.classList.remove('cursor-hidden');
    });

    // Ocultar cursor cuando sale del navegador
    document.addEventListener('mouseleave', () => {
        cursor.classList.add('cursor-hidden');
    });

    // Mostrar cursor cuando entra al navegador
    document.addEventListener('mouseenter', () => {
        cursor.classList.remove('cursor-hidden');
    });

    updateCursorListeners();
}

// Re-initialize cursor listeners when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (cursor && typeof updateCursorListeners === 'function') {
        updateCursorListeners();
    }
});
