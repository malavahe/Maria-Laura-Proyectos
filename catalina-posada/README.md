# Catalina Posada · diseñadora

Mini web estática (HTML, CSS y JavaScript, sin compilación) para mostrar el
archivo de telas de telar, un showroom donde cada prenda cambia de tela y las
propuestas privadas para diseñadoras invitadas.

## Estructura

- `index.html`: la página.
- `css/styles.css`: estilos.
- `js/data.js`: **todo el contenido** (telas, prendas, imágenes del showroom, propuestas).
- `js/textures.js`: texturas tejidas de muestra, solo para telas sin foto.
- `js/garments.js`: siluetas de las prendas del showroom.
- `img/telas/`: fotos reales de las telas.
- `img/showroom/`: imágenes pregeneradas de prenda más tela.

## Cómo agregar una tela real

1. Guarda la foto en `img/telas/` (cuadrada, de frente, luz pareja).
2. En `js/data.js`, agrega o edita la tela y pon la ruta en `foto`.
3. Cuando todas las telas sean reales, cambia `muestra` a `false`.

## Showroom

Si existe una imagen en `renders` para la combinación `"prenda:tela"`, se
muestra esa imagen. Si no, la tela se pinta en vivo sobre la silueta.

## Ver en local

Abre `index.html` en el navegador. No necesita servidor.

## Publicar en Netlify

```
npx netlify-cli deploy --dir . --prod --site <SITE_ID>
```

Requiere la variable de entorno `NETLIFY_AUTH_TOKEN`.
