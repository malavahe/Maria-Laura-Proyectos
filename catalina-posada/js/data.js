/*
 * Contenido de la web. Para actualizar el inventario o el showroom
 * solo hay que editar este archivo.
 *
 * TELAS
 *   foto:    ruta a la foto real de la tela (img/telas/...). Si está vacía,
 *            la web genera una textura de muestra a partir de "tejido".
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
  portada: "paramo", // tela que se ve en la portada

  telas: [
    {
      id: "arena",
      nombre: "Arena",
      ref: "CP-001",
      familia: "lisas",
      ligamento: "Tafetán",
      composicion: "Por confirmar",
      ancho: "Por confirmar",
      foto: "",
      tejido: { tipo: "liso", urdimbre: ["#d9c9ad"], trama: ["#c4b08f"] }
    },
    {
      id: "noche-de-rio",
      nombre: "Noche de río",
      ref: "CP-002",
      familia: "texturas",
      ligamento: "Espiga",
      composicion: "Por confirmar",
      ancho: "Por confirmar",
      foto: "",
      tejido: { tipo: "espiga", urdimbre: ["#2c3743"], trama: ["#56636f"] }
    },
    {
      id: "terracota",
      nombre: "Terracota",
      ref: "CP-003",
      familia: "rayas-cuadros",
      ligamento: "Tafetán a rayas",
      composicion: "Por confirmar",
      ancho: "Por confirmar",
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
      composicion: "Por confirmar",
      ancho: "Por confirmar",
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
      composicion: "Por confirmar",
      ancho: "Por confirmar",
      foto: "",
      tejido: { tipo: "pata", urdimbre: ["#1f1d1b", "#ebe4d6"], trama: ["#1f1d1b", "#ebe4d6"] }
    },
    {
      id: "nube",
      nombre: "Nube",
      ref: "CP-006",
      familia: "texturas",
      ligamento: "Bouclé",
      composicion: "Por confirmar",
      ancho: "Por confirmar",
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
