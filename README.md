# InclusivaCR - Sitio Web Oficial

Sitio web de InclusivaCR, empresa líder en accesibilidad web e inclusión digital en Costa Rica.

## Características

- Cumple WCAG 2.1 Nivel AA
- Diseño responsive (móvil, tablet, desktop)
- Sostenible (imágenes livianas, sin rastreadores)
- Sin cookies de rastreo (solo localStorage para aviso)
- HTML5 semántico y JavaScript vanilla

## Estructura del proyecto

```
proyecto-inclusivacr/
├── index.html
├── recursos.html
├── nosotros.html
├── contacto.html
├── privacidad.html
├── css/
│   ├── styles.css
│   └── accesibilidad.css
├── js/
│   ├── main.js
│   ├── cookies.js
│   └── formulario.js
├── images/
│   ├── logo.svg
│   ├── hero.webp
│   ├── favicon.png
│   └── iconos/
│       └── (svg de servicios, mapa, persona)
├── docs/
│   └── recursos/
│       └── (PDFs simulados para descargas)
└── README.md
```

## Uso local

1. Clona o descarga este repositorio.
2. Abre `index.html` en tu navegador preferido.
3. Verifica accesibilidad con teclado (Tab, Shift+Tab, Enter, Escape).
4. En `contacto.html` prueba la validación del formulario y el mensaje de éxito.

## Despliegue recomendado

### Netlify (rápido)
1. Crea una cuenta gratuita en https://netlify.com.
2. Opción Drag & Drop: ve a https://app.netlify.com/drop y arrastra la carpeta completa del proyecto.
3. Recibe la URL pública al finalizar.

### Vercel
1. Crea cuenta en https://vercel.com.
2. Instala CLI: `npm i -g vercel`.
3. En la carpeta del proyecto ejecuta `vercel` y sigue las instrucciones.

### GitHub Pages
1. Sube los archivos a un repositorio en GitHub.
2. En Settings > Pages selecciona la rama principal y carpeta root.
3. Guarda y espera el deployment.

## Buenas prácticas incluidas

- Paleta con contraste AA: primario #2563EB, secundario #059669, texto #1F2937.
- Imágenes optimizadas en WebP y PNG liviano para favicon.
- Navegación con teclado y enlaces skip link en todas las páginas.
- Banner de cookies sin rastreo usando localStorage.
- Formulario accesible con mensajes de error específicos y aria-live para el éxito.
- CSS mobile-first y sin dependencias externas pesadas.

## Validaciones sugeridas

- HTML: https://validator.w3.org/
- CSS: https://jigsaw.w3.org/css-validator/
- Accesibilidad: https://wave.webaim.org/
- Sostenibilidad: https://www.websitecarbon.com/

## Autor

Desarrollado para el curso Administración de Sitios Web (03102) - UNED.

## Licencia

Proyecto abierto para fines educativos.
