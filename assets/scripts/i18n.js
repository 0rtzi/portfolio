// Sistema de Traducción Multiidioma
const languages = ['en', 'eus', 'es'];
let currentLanguage = localStorage.getItem('language') || detectBrowserLanguage();
let translations = {};

// Detectar idioma del navegador
function detectBrowserLanguage() {
    // Obtener el idioma del navegador
    const browserLanguage = navigator.language || navigator.userLanguage;
    // Extraer solo el código de idioma (ej: 'es' de 'es-ES')
    const languageCode = browserLanguage.split('-')[0];
    
    // Mapear códigos a idiomas soportados
    const languageMap = {
        'en': 'en',
        'es': 'es',
        'eu': 'eus'
    };
    
    // Si el idioma del navegador está soportado, usarlo; si no, usar inglés por defecto
    return languageMap[languageCode] || 'en';
}

// Cargar traducciones para todos los idiomas
async function loadTranslations() {
    try {
        for (const lang of languages) {
            const response = await fetch(`./assets/languages/${lang}.json`);
            translations[lang] = await response.json();
        }
        applyLanguage(currentLanguage);
        updateLanguageButton();
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

// Aplicar idioma a todos los elementos
function applyLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    const t = translations[lang];
    
    // Actualizar navegación
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;
        for (const k of keys) {
            value = value[k];
        }
        el.textContent = value;
    });
    
    // Actualizar placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = t;
        for (const k of keys) {
            value = value[k];
        }
        el.placeholder = value;
    });
    
    // Actualizar atributos alt
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        const keys = key.split('.');
        let value = t;
        for (const k of keys) {
            value = value[k];
        }
        el.alt = value;
    });
    
    updateLanguageButton();
}

// Actualizar el botón de idioma
function updateLanguageButton() {
    const langBtn = document.getElementById('lang-btn');
    const mobileLangBtn = document.getElementById('mobile-lang-display');
    const langMap = { 'en': 'EN', 'es': 'ES', 'eus': 'EUS' };
    
    if (langBtn) {
        // Buscar el elemento de texto dentro del botón
        const textNode = Array.from(langBtn.childNodes)
            .find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
        
        if (textNode) {
            textNode.textContent = '\n                ' + langMap[currentLanguage] + '\n                ';
        }
    }
    
    // Actualizar botón móvil
    if (mobileLangBtn) {
        mobileLangBtn.textContent = langMap[currentLanguage];
    }
}

// Manejar cambio de idioma desde el dropdown
function handleLanguageChange(lang) {
    applyLanguage(lang);
    document.getElementById('lang-dropdown').classList.add('hidden');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadTranslations();
    
    // Agregar event listeners a los botones de idioma (Desktop)
    document.querySelectorAll('#lang-dropdown a').forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            handleLanguageChange(languages[index]);
        });
    });
    
    // Agregar event listeners a los botones de idioma (Mobile)
    document.querySelectorAll('#mobile-lang-dropdown a').forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            handleLanguageChange(languages[index]);
        });
    });
    
    // Language Dropdown Toggle Logic (Desktop)
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('hidden');
        });
        
        document.addEventListener('click', (e) => {
            if (!langDropdown.contains(e.target) && e.target !== langBtn) {
                langDropdown.classList.add('hidden');
            }
        });
    }
    
    // Language Dropdown Toggle Logic (Mobile)
    const mobileLangBtn = document.getElementById('mobile-lang-btn');
    const mobileLangDropdown = document.getElementById('mobile-lang-dropdown');
    
    if (mobileLangBtn && mobileLangDropdown) {
        mobileLangBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileLangDropdown.classList.toggle('hidden');
        });
    }
});
