# Portafolio de María Laura

Web estática (HTML, CSS y JavaScript, sin compilación) con los proyectos de
automatización, agentes, contenido y video con inteligencia artificial.

## Estructura

- `index.html`: la página.
- `css/styles.css`: estilos y paleta (Raspberry Rose `#F2619C`, Soft Lilac `#E7BEF8`, Blueberry Milk `#93ABD9`, Lemon Cream `#EDE986`).
- `js/data.js`: **todo el contenido**: perfil, contacto, categorías y proyectos.
- `js/app.js`: filtros, tarjetas, ventana de cada proyecto y galería.
- `js/escena.js`: figuras 3D de la portada (three.js). Si no carga, queda un fondo CSS.
- `img/proyectos/<cliente>/`: fotos y videos de cada proyecto.

## Agregar fotos o videos a un proyecto

1. Guarda el archivo en `img/proyectos/<cliente>/` (por ejemplo `img/proyectos/beauty-studio/menu-whatsapp.jpg`).
2. En `js/data.js`, dentro del proyecto, agrégalo a `media`:

```js
media: [
  { tipo: "imagen", src: "img/proyectos/beauty-studio/menu-whatsapp.jpg", texto: "Menú principal en WhatsApp" },
  { tipo: "video",  src: "img/proyectos/lila-vela/teaser.mp4", texto: "Teaser de la colección" },
  { tipo: "embed",  src: "https://www.youtube.com/embed/ID", texto: "Clase del diplomado" }
]
```

La primera imagen pasa a ser la portada de la tarjeta. Mientras `media` esté
vacío, el proyecto muestra una ilustración animada.

Videos pesados (más de 20 MB): mejor súbelos a YouTube o Vimeo y usa `embed`.

## Enlace directo a un proyecto

`https://<tu-sitio>/#p/beauty-studio-agente` abre ese proyecto.

## Ver en local

Abre `index.html` en el navegador. No necesita servidor.

## Publicar en Netlify

Opción A, conectando el repositorio: en Netlify, "Add new site" → "Import from Git",
elige este repositorio y en **Base directory** escribe `portafolio`. Cada push publica solo.

Opción B, desde la terminal:

```
npx netlify-cli deploy --dir portafolio --prod --site <SITE_ID>
```
