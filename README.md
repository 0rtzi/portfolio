# Portfolio Portfolio

## Instalación y Configuración

### Requisitos
- Node.js 16+ instalado
- npm (incluido con Node.js)

### Pasos para configurar Tailwind CSS localmente

1. **Instalar dependencias:**
```bash
npm install
```

2. **Compilar CSS para desarrollo (con watch):**
```bash
npm run watch:css
```

3. **Compilar CSS para producción:**
```bash
npm run build:css
```

Esto generará un archivo CSS compilado y minificado en `assets/styles/styles.css`.

### Estructura del proyecto
```
portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── assets/
│   ├── images/
│   ├── scripts/
│   ├── languages/
│   └── styles/
│       ├── input.css (archivo fuente)
│       └── styles.css (CSS compilado - generado)
```

### Notas importantes
- **No commits `node_modules`**: está en `.gitignore`
- **Sí commits `styles.css`**: es el archivo compilado necesario para producción
- El CSS compilado se genera en `assets/styles/styles.css` y se referencia en `index.html`

### Para GitHub Pages
El workflow de GitHub Actions compilará automáticamente el CSS al hacer push.
