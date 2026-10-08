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
  muestra: true, // muestra el aviso de "telas de muestra" mientras sea true
  portada: "cinturon-de-monje", // tela que se ve en la portada

  telas: [
    // Telas reales
    {
      id: "cinturon-de-monje",
      nombre: "Cinturón de monje",
      familia: "rayas-cuadros",
      pieza: "img/telas/cinturon-de-monje-pieza.webp",
      foto: "img/telas/cinturon-de-monje.jpg",
      mosaico: "img/telas/cinturon-de-monje-tile.jpg",
      paleta: ["#7a1f55", "#1fae4c", "#c9b5d4"]
    },
    {
      id: "overshoot",
      nombre: "Overshoot",
      familia: "texturas",
      pieza: "img/telas/overshoot-pieza.webp",
      foto: "img/telas/overshoot.jpg",
      mosaico: "img/telas/overshoot-tile.jpg",
      paleta: ["#c9b21e", "#6c6aa8", "#b9a9d6"]
    },
    {
      id: "overshoot-rombo-sol",
      nombre: "Overshoot rombo sol",
      familia: "texturas",
      pieza: "img/telas/overshoot-rombo-sol-pieza.webp",
      foto: "img/telas/overshoot-rombo-sol.jpg",
      mosaico: "img/telas/overshoot-rombo-sol-tile.jpg",
      paleta: ["#8a2f6a", "#5a2448", "#e6dcea", "#b9a9d6"]
    },
    {
      id: "estrella",
      nombre: "Estrella",
      familia: "texturas",
      pieza: "img/telas/estrella-pieza.webp",
      foto: "img/telas/estrella.jpg",
      mosaico: "img/telas/estrella-tile.jpg",
      paleta: ["#3e3730", "#d9d3e6", "#b9a6dc"]
    },
    {
      id: "tafetan",
      nombre: "Tafetán",
      familia: "lisas",
      pieza: "img/telas/tafetan-pieza.webp",
      foto: "img/telas/tafetan.jpg",
      mosaico: "img/telas/tafetan-tile.jpg",
      paleta: ["#e2bd2c", "#3a3a32", "#ece8e2"]
    },
    {
      id: "tafetan-fique-lana",
      nombre: "Tafetán con fique y lana",
      familia: "texturas",
      pieza: "img/telas/tafetan-fique-lana-pieza.webp",
      foto: "img/telas/tafetan-fique-lana.jpg",
      mosaico: "img/telas/tafetan-fique-lana-tile.jpg",
      paleta: ["#2b2a28", "#ece9e2", "#cdb98f"]
    },
    {
      id: "tafetan-algodon-bambu",
      nombre: "Tafetán con algodón y bambú, menta",
      familia: "rayas-cuadros",
      pieza: "img/telas/tafetan-algodon-bambu-pieza.webp",
      foto: "img/telas/tafetan-algodon-bambu.jpg",
      mosaico: "img/telas/tafetan-algodon-bambu-tile.jpg",
      paleta: ["#c7e3c0", "#8c7558", "#efece6"]
    },
    {
      id: "tafetan-bambu-algodon",
      nombre: "Tafetán con bambú y algodón, rayas cielo",
      familia: "rayas-cuadros",
      pieza: "img/telas/tafetan-bambu-algodon-pieza.webp",
      foto: "img/telas/tafetan-bambu-algodon.jpg",
      mosaico: "img/telas/tafetan-bambu-algodon-tile.jpg",
      paleta: ["#8fb3e0", "#6ea043", "#b8a07a", "#f1ede4"]
    },
    {
      id: "tafetan-algodon",
      nombre: "Tafetán algodón",
      familia: "lisas",
      pieza: "img/telas/tafetan-algodon-pieza.webp",
      foto: "img/telas/tafetan-algodon.jpg",
      mosaico: "img/telas/tafetan-algodon-tile.jpg",
      paleta: ["#5fae55", "#b39a73", "#eef0ea"]
    },
    {
      id: "tafetan-lana",
      nombre: "Tafetán lana",
      familia: "lisas",
      pieza: "img/telas/tafetan-lana-pieza.webp",
      foto: "img/telas/tafetan-lana.jpg",
      mosaico: "img/telas/tafetan-lana-tile.jpg",
      paleta: ["#c08a4a", "#a8733a", "#efebe3"]
    },
    {
      id: "sarga-zigzag",
      nombre: "Sarga zigzag",
      familia: "texturas",
      pieza: "img/telas/sarga-zigzag-pieza.webp",
      foto: "img/telas/sarga-zigzag.jpg",
      mosaico: "img/telas/sarga-zigzag-tile.jpg",
      paleta: ["#1f8a3c", "#8dbf63", "#e6e3df"]
    },
    {
      id: "tafetan-lana-algodon",
      nombre: "Tafetán lana algodón",
      familia: "lisas",
      pieza: "img/telas/tafetan-lana-algodon-pieza.webp",
      foto: "img/telas/tafetan-lana-algodon.jpg",
      mosaico: "img/telas/tafetan-lana-algodon-tile.jpg",
      paleta: ["#b07a3e", "#6f97c8", "#efece4"]
    },
    {
      id: "sarga-tafetan",
      nombre: "Sarga tafetán",
      familia: "texturas",
      pieza: "img/telas/sarga-tafetan-pieza.webp",
      foto: "img/telas/sarga-tafetan.jpg",
      mosaico: "img/telas/sarga-tafetan-tile.jpg",
      paleta: ["#d4ac1f", "#ebe6d9"]
    },
    {
      id: "sprang",
      nombre: "Sprang",
      familia: "texturas",
      pieza: "img/telas/sprang-pieza.webp",
      foto: "img/telas/sprang.jpg",
      mosaico: "img/telas/sprang-tile.jpg",
      paleta: ["#d9a640", "#c79a55"]
    },
    {
      id: "sprang-calado",
      nombre: "Sprang calado",
      familia: "texturas",
      pieza: "img/telas/sprang-calado-pieza.webp",
      foto: "img/telas/sprang-calado.jpg",
      mosaico: "img/telas/sprang-calado-tile.png",
      paleta: ["#1f6f78", "#2c8590"]
    },
    {
      id: "sprang-sz",
      nombre: "Sprang SZ",
      familia: "texturas",
      pieza: "img/telas/sprang-sz-pieza.webp",
      foto: "img/telas/sprang-sz.jpg",
      mosaico: "img/telas/sprang-sz-tile.jpg",
      paleta: ["#1f6f8c", "#e4eab4", "#1e5f5a"]
    },
    {
      id: "sprang-juego-de-color",
      nombre: "Sprang juego de color",
      familia: "texturas",
      pieza: "img/telas/sprang-juego-de-color-pieza.webp",
      foto: "img/telas/sprang-juego-de-color.jpg",
      mosaico: "img/telas/sprang-juego-de-color-tile.jpg",
      paleta: ["#e8c4b8", "#9c3f26"]
    },
    {
      id: "telar-vertical-brocado",
      nombre: "Telar vertical brocado",
      familia: "texturas",
      pieza: "img/telas/telar-vertical-brocado-pieza.webp",
      foto: "img/telas/telar-vertical-brocado.jpg",
      mosaico: "img/telas/telar-vertical-brocado-tile.jpg",
      paleta: ["#1d5f68", "#c9eba6"]
    },
    {
      id: "brocado",
      nombre: "Brocado",
      familia: "texturas",
      pieza: "img/telas/brocado-pieza.webp",
      foto: "img/telas/brocado.jpg",
      mosaico: "img/telas/brocado-tile.jpg",
      paleta: ["#e9ec8f", "#efeadc", "#a8642c"]
    },
    {
      id: "non",
      nombre: "Non",
      familia: "texturas",
      pieza: "img/telas/non-pieza.webp",
      foto: "img/telas/non.jpg",
      mosaico: "img/telas/non-tile.jpg",
      paleta: ["#e6e1d6", "#b9dc9c"]
    },
    {
      id: "telar-de-cintura",
      nombre: "Telar de cintura",
      familia: "texturas",
      pieza: "img/telas/telar-de-cintura-pieza.webp",
      foto: "img/telas/telar-de-cintura.jpg",
      mosaico: "img/telas/telar-de-cintura-tile.jpg",
      paleta: ["#e3e98a", "#e4e0d8"]
    },
    {
      id: "brocado-rombo",
      nombre: "Brocado rombo",
      familia: "texturas",
      pieza: "img/telas/brocado-rombo-pieza.webp",
      foto: "img/telas/brocado-rombo.jpg",
      mosaico: "img/telas/brocado-rombo-tile.jpg",
      paleta: ["#b8183a", "#f2ece4", "#6e1a12"]
    },
    {
      id: "brocado-doble",
      nombre: "Brocado doble",
      familia: "texturas",
      pieza: "img/telas/brocado-doble-pieza.webp",
      foto: "img/telas/brocado-doble.jpg",
      mosaico: "img/telas/brocado-doble-tile.jpg",
      paleta: ["#a3172f", "#c8b98a", "#86a9dc", "#f1ece2"]
    },
    {
      id: "doble-tela",
      nombre: "Doble tela",
      familia: "lisas",
      pieza: "img/telas/doble-tela-pieza.webp",
      foto: "img/telas/doble-tela.jpg",
      mosaico: "img/telas/doble-tela-tile.jpg",
      paleta: ["#e5876a", "#f1ece2"]
    },

    // Telas de muestra: se van reemplazando por las reales
    {
      id: "arena",
      nombre: "Arena",
      ref: "CP-001",
      familia: "lisas",
      ligamento: "Tafetán",
      foto: "",
      tejido: { tipo: "liso", urdimbre: ["#d9c9ad"], trama: ["#c4b08f"] }
    },
    {
      id: "noche-de-rio",
      nombre: "Noche de río",
      ref: "CP-002",
      familia: "texturas",
      ligamento: "Espiga",
      foto: "",
      tejido: { tipo: "espiga", urdimbre: ["#2c3743"], trama: ["#56636f"] }
    },
    {
      id: "terracota",
      nombre: "Terracota",
      ref: "CP-003",
      familia: "rayas-cuadros",
      ligamento: "Tafetán a rayas",
      foto: "",
      tejido: {
        tipo: "rayas",
        urdimbre: ["#b45f3c", "#b45f3c", "#b45f3c", "#e8d6bc", "#e8d6bc", "#7a3a24", "#e8d6bc", "#e8d6bc"],
        trama: ["#d9c3a5"]
      }
    },
    {
      id: "paramo",
      nombre: "Páramo",
      ref: "CP-004",
      familia: "rayas-cuadros",
      ligamento: "Sarga a cuadros",
      foto: "",
      tejido: {
        tipo: "cuadros",
        urdimbre: ["#5a6849", "#5a6849", "#5a6849", "#5a6849", "#c8b78e", "#c8b78e", "#2e2a25", "#c8b78e"],
        trama: ["#5a6849", "#5a6849", "#5a6849", "#5a6849", "#c8b78e", "#c8b78e", "#2e2a25", "#c8b78e"]
      }
    },
    {
      id: "gallo",
      nombre: "Gallo",
      ref: "CP-005",
      familia: "rayas-cuadros",
      ligamento: "Pata de gallo",
      foto: "",
      tejido: { tipo: "pata", urdimbre: ["#1f1d1b", "#ebe4d6"], trama: ["#1f1d1b", "#ebe4d6"] }
    },
    {
      id: "nube",
      nombre: "Nube",
      ref: "CP-006",
      familia: "texturas",
      ligamento: "Bouclé",
      foto: "",
      tejido: { tipo: "boucle", urdimbre: ["#eee8dc"], trama: ["#ddd2bf"] }
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
