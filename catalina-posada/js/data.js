/*
 * Contenido de la web. Para actualizar el inventario o el showroom
 * solo hay que editar este archivo.
 *
 * TELAS
 *   pieza:   foto general de la muestra completa (opcional).
 *   foto:    foto de cerca, donde se ve la textura (img/telas/...). Si está
 *            vacía, la web genera una textura de muestra a partir de "tejido".
 *   mosaico: versión repetible (cuadrada, en espejo) de la foto, para
 *            rellenar las prendas del showroom sin cortes visibles.
 *   ligamento: técnica. Opcional; si está vacía no se muestra.
 *   paleta:  colores principales de la tela, para la ficha.
 *   tejido:  textura de muestra mientras no haya foto.
 *            tipo: liso | sarga | espiga | rayas | cuadros | pata | boucle
 *
 * SHOWROOM
 *   renders: imágenes pregeneradas (por ejemplo con Nano Banana) de cada
 *            prenda hecha con cada tela. Clave "prenda:tela".
 *            Si no existe la combinación, la web pinta la tela sobre la
 *            silueta de la prenda en vivo.
 */

window.CP_DATA = {
  muestra: false, // true muestra el aviso de "telas de muestra"
  portada: "cinturon-de-monje", // tela que se ve en la portada

  telas: [
    {
      id: "cinturon-de-monje",
      nombre: "Cinturón de monje",
      familia: "rayas-cuadros",
      pieza: "img/telas/cinturon-de-monje-pieza.jpg",
      foto: "img/telas/cinturon-de-monje.jpg",
      mosaico: "img/telas/cinturon-de-monje-tile.jpg",
      paleta: ["#7a1f55", "#1fae4c", "#c9b5d4"]
    },
    {
      id: "overshoot",
      nombre: "Overshoot",
      familia: "texturas",
      pieza: "img/telas/overshoot-pieza.jpg",
      foto: "img/telas/overshoot.jpg",
      mosaico: "img/telas/overshoot-tile.jpg",
      paleta: ["#c9b21e", "#6c6aa8", "#b9a9d6"]
    },
    {
      id: "overshoot-rombo-sol",
      nombre: "Overshoot rombo sol",
      familia: "texturas",
      pieza: "img/telas/overshoot-rombo-sol-pieza.jpg",
      foto: "img/telas/overshoot-rombo-sol.jpg",
      mosaico: "img/telas/overshoot-rombo-sol-tile.jpg",
      paleta: ["#8a2f6a", "#5a2448", "#e6dcea", "#b9a9d6"]
    },
    {
      id: "estrella",
      nombre: "Estrella",
      familia: "texturas",
      pieza: "img/telas/estrella-pieza.jpg",
      foto: "img/telas/estrella.jpg",
      mosaico: "img/telas/estrella-tile.jpg",
      paleta: ["#3e3730", "#d9d3e6", "#b9a6dc"]
    },
    {
      id: "tafetan",
      nombre: "Tafetán",
      familia: "lisas",
      pieza: "img/telas/tafetan-pieza.jpg",
      foto: "img/telas/tafetan.jpg",
      mosaico: "img/telas/tafetan-tile.jpg",
      paleta: ["#e2bd2c", "#3a3a32", "#ece8e2"]
    },
    {
      id: "tafetan-fique-lana",
      nombre: "Tafetán con fique y lana",
      familia: "texturas",
      pieza: "img/telas/tafetan-fique-lana-pieza.jpg",
      foto: "img/telas/tafetan-fique-lana.jpg",
      mosaico: "img/telas/tafetan-fique-lana-tile.jpg",
      paleta: ["#2b2a28", "#ece9e2", "#cdb98f"]
    },
    {
      id: "tafetan-algodon-bambu",
      nombre: "Tafetán con algodón y bambú, menta",
      familia: "rayas-cuadros",
      pieza: "img/telas/tafetan-algodon-bambu-pieza.jpg",
      foto: "img/telas/tafetan-algodon-bambu.jpg",
      mosaico: "img/telas/tafetan-algodon-bambu-tile.jpg",
      paleta: ["#c7e3c0", "#8c7558", "#efece6"]
    },
    {
      id: "tafetan-bambu-algodon",
      nombre: "Tafetán con bambú y algodón, rayas cielo",
      familia: "rayas-cuadros",
      pieza: "img/telas/tafetan-bambu-algodon-pieza.jpg",
      foto: "img/telas/tafetan-bambu-algodon.jpg",
      mosaico: "img/telas/tafetan-bambu-algodon-tile.jpg",
      paleta: ["#8fb3e0", "#6ea043", "#b8a07a", "#f1ede4"]
    },
    {
      id: "tafetan-algodon",
      nombre: "Tafetán algodón",
      familia: "lisas",
      pieza: "img/telas/tafetan-algodon-pieza.jpg",
      foto: "img/telas/tafetan-algodon.jpg",
      mosaico: "img/telas/tafetan-algodon-tile.jpg",
      paleta: ["#5fae55", "#b39a73", "#eef0ea"]
    },
    {
      id: "tafetan-lana",
      nombre: "Tafetán lana",
      familia: "lisas",
      pieza: "img/telas/tafetan-lana-pieza.jpg",
      foto: "img/telas/tafetan-lana.jpg",
      mosaico: "img/telas/tafetan-lana-tile.jpg",
      paleta: ["#c08a4a", "#a8733a", "#efebe3"]
    },
    {
      id: "sarga-zigzag",
      nombre: "Sarga zigzag",
      familia: "texturas",
      pieza: "img/telas/sarga-zigzag-pieza.jpg",
      foto: "img/telas/sarga-zigzag.jpg",
      mosaico: "img/telas/sarga-zigzag-tile.jpg",
      paleta: ["#1f8a3c", "#8dbf63", "#e6e3df"]
    },
    {
      id: "tafetan-lana-algodon",
      nombre: "Tafetán lana algodón",
      familia: "lisas",
      pieza: "img/telas/tafetan-lana-algodon-pieza.jpg",
      foto: "img/telas/tafetan-lana-algodon.jpg",
      mosaico: "img/telas/tafetan-lana-algodon-tile.jpg",
      paleta: ["#b07a3e", "#6f97c8", "#efece4"]
    },
    {
      id: "sarga-tafetan",
      nombre: "Sarga tafetán",
      familia: "texturas",
      pieza: "img/telas/sarga-tafetan-pieza.jpg",
      foto: "img/telas/sarga-tafetan.jpg",
      mosaico: "img/telas/sarga-tafetan-tile.jpg",
      paleta: ["#d4ac1f", "#ebe6d9"]
    },
    {
      id: "sprang",
      nombre: "Sprang",
      familia: "texturas",
      pieza: "img/telas/sprang-pieza.jpg",
      foto: "img/telas/sprang.jpg",
      mosaico: "img/telas/sprang-tile.jpg",
      paleta: ["#d9a640", "#c79a55"]
    },
    {
      id: "sprang-calado",
      nombre: "Sprang calado",
      familia: "texturas",
      pieza: "img/telas/sprang-calado-pieza.jpg",
      foto: "img/telas/sprang-calado.jpg",
      mosaico: "img/telas/sprang-calado-tile.png",
      paleta: ["#1f6f78", "#2c8590"]
    },
    {
      id: "sprang-sz",
      nombre: "Sprang SZ",
      familia: "texturas",
      pieza: "img/telas/sprang-sz-pieza.jpg",
      foto: "img/telas/sprang-sz.jpg",
      mosaico: "img/telas/sprang-sz-tile.jpg",
      paleta: ["#1f6f8c", "#e4eab4", "#1e5f5a"]
    },
    {
      id: "sprang-juego-de-color",
      nombre: "Sprang juego de color",
      familia: "texturas",
      pieza: "img/telas/sprang-juego-de-color-pieza.jpg",
      foto: "img/telas/sprang-juego-de-color.jpg",
      mosaico: "img/telas/sprang-juego-de-color-tile.jpg",
      paleta: ["#e8c4b8", "#9c3f26"]
    },
    {
      id: "telar-vertical-brocado",
      nombre: "Telar vertical brocado",
      familia: "texturas",
      pieza: "img/telas/telar-vertical-brocado-pieza.jpg",
      foto: "img/telas/telar-vertical-brocado.jpg",
      mosaico: "img/telas/telar-vertical-brocado-tile.jpg",
      paleta: ["#1d5f68", "#c9eba6"]
    },
    {
      id: "brocado",
      nombre: "Brocado",
      familia: "texturas",
      pieza: "img/telas/brocado-pieza.jpg",
      foto: "img/telas/brocado.jpg",
      mosaico: "img/telas/brocado-tile.jpg",
      paleta: ["#e9ec8f", "#efeadc", "#a8642c"]
    },
    {
      id: "non",
      nombre: "Non",
      familia: "texturas",
      pieza: "img/telas/non-pieza.jpg",
      foto: "img/telas/non.jpg",
      mosaico: "img/telas/non-tile.jpg",
      paleta: ["#e6e1d6", "#b9dc9c"]
    },
    {
      id: "telar-de-cintura",
      nombre: "Telar de cintura",
      familia: "texturas",
      pieza: "img/telas/telar-de-cintura-pieza.jpg",
      foto: "img/telas/telar-de-cintura.jpg",
      mosaico: "img/telas/telar-de-cintura-tile.jpg",
      paleta: ["#e3e98a", "#e4e0d8"]
    },
    {
      id: "brocado-rombo",
      nombre: "Brocado rombo",
      familia: "texturas",
      pieza: "img/telas/brocado-rombo-pieza.jpg",
      foto: "img/telas/brocado-rombo.jpg",
      mosaico: "img/telas/brocado-rombo-tile.jpg",
      paleta: ["#b8183a", "#f2ece4", "#6e1a12"]
    },
    {
      id: "brocado-doble",
      nombre: "Brocado doble",
      familia: "texturas",
      pieza: "img/telas/brocado-doble-pieza.jpg",
      foto: "img/telas/brocado-doble.jpg",
      mosaico: "img/telas/brocado-doble-tile.jpg",
      paleta: ["#a3172f", "#c8b98a", "#86a9dc", "#f1ece2"]
    },
    {
      id: "doble-tela",
      nombre: "Doble tela",
      familia: "lisas",
      pieza: "img/telas/doble-tela-pieza.jpg",
      foto: "img/telas/doble-tela.jpg",
      mosaico: "img/telas/doble-tela-tile.jpg",
      paleta: ["#e5876a", "#f1ece2"]
    },
    {
      id: "calado",
      nombre: "Calado",
      familia: "rayas-cuadros",
      pieza: "img/telas/calado-pieza.jpg",
      foto: "img/telas/calado.jpg",
      mosaico: "img/telas/calado-tile.jpg",
      paleta: ["#a3122f", "#f3efe6"]
    },
    {
      id: "sarga",
      nombre: "Sarga",
      familia: "rayas-cuadros",
      pieza: "img/telas/sarga-pieza.jpg",
      foto: "img/telas/sarga.jpg",
      mosaico: "img/telas/sarga-tile.jpg",
      paleta: ["#d8cdb4", "#6bb85a", "#6e1a1a", "#b39a76"]
    },
    {
      id: "piviones",
      nombre: "Piviones",
      familia: "texturas",
      pieza: "img/telas/piviones-pieza.jpg",
      foto: "img/telas/piviones.jpg",
      mosaico: "img/telas/piviones-tile.jpg",
      paleta: ["#a8821f", "#d8cfbd", "#f1ede4"]
    },
    {
      id: "sarga-ondulada",
      nombre: "Sarga ondulada",
      familia: "texturas",
      pieza: "img/telas/sarga-ondulada-pieza.jpg",
      foto: "img/telas/sarga-ondulada.jpg",
      mosaico: "img/telas/sarga-ondulada-tile.jpg",
      paleta: ["#1f9a55", "#e3dc98", "#e79a86"]
    },
    {
      id: "espina-de-pescado",
      nombre: "Espina de pescado",
      familia: "texturas",
      pieza: "img/telas/espina-de-pescado-pieza.jpg",
      foto: "img/telas/espina-de-pescado.jpg",
      mosaico: "img/telas/espina-de-pescado-tile.jpg",
      paleta: ["#2a6fb0", "#1f9a55", "#b8a6d9", "#f1ede4"]
    },
    {
      id: "crammed-and-space",
      nombre: "Crammed and space",
      familia: "rayas-cuadros",
      pieza: "img/telas/crammed-and-space-pieza.jpg",
      foto: "img/telas/crammed-and-space.jpg",
      mosaico: "img/telas/crammed-and-space-tile.jpg",
      paleta: ["#1c8a3c", "#9fb4cf", "#0f3d1e"]
    },
    {
      id: "razo",
      nombre: "Razo",
      familia: "lisas",
      pieza: "img/telas/razo-pieza.jpg",
      foto: "img/telas/razo.jpg",
      mosaico: "img/telas/razo-tile.jpg",
      paleta: ["#1f9a55", "#eef0e8", "#e59a86"]
    }
  ],

  familias: [
    { id: "todas", nombre: "Todas" },
    { id: "lisas", nombre: "Lisas" },
    { id: "rayas-cuadros", nombre: "Rayas y cuadros" },
    { id: "texturas", nombre: "Texturas" }
  ],

  prendas: [
    { id: "chaqueta", nombre: "Chaqueta recta" },
    { id: "vestido", nombre: "Vestido midi" },
    { id: "pantalon", nombre: "Pantalón amplio" }
  ],

  renders: {
    // "chaqueta:arena": "img/showroom/chaqueta-arena.jpg"
  },

  propuestas: [
    {
      titulo: "Colección Home",
      para: "Diseñadora invitada",
      estado: "En desarrollo",
      piezas: ["Sofás", "Cojines", "Cubrecamas", "Cortinas", "Mantas"]
    }
  ]
};
