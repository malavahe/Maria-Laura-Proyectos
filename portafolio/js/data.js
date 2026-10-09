/*
 * Contenido del portafolio. Para agregar o cambiar proyectos solo hay que
 * editar este archivo.
 *
 * PERFIL
 *   contacto: deja vacío ("") lo que no quieras mostrar; ese botón se oculta.
 *
 * CATEGORÍAS
 *   id, nombre y color (uno de: rosa | lila | azul | limon).
 *
 * PROYECTOS
 *   categorias: ids de la lista de categorías (puede tener varias).
 *   estado:     "Entregado" o "En curso".
 *   visual:     ilustración que se muestra mientras no haya fotos o videos:
 *               chat | flujo | libro | agente | calendario | contenido | shooting | video
 *   media:      fotos y videos del proyecto. Guarda los archivos en
 *               img/proyectos/<cliente>/ y agrégalos así:
 *                 { tipo: "imagen", src: "img/proyectos/beauty-studio/flujo-1.jpg", texto: "Menú principal en WhatsApp" }
 *                 { tipo: "video",  src: "img/proyectos/lila-vela/teaser.mp4", texto: "Teaser de la colección" }
 *                 { tipo: "embed",  src: "https://www.youtube.com/embed/ID", texto: "Clase del diplomado" }
 *               La primera imagen se usa también como portada de la tarjeta.
 */

window.ML_DATA = {
  perfil: {
    nombre: "María Laura",
    rol: "Especialista en automatización de procesos empresariales con inteligencia artificial",
    lema: "Convierto procesos que hoy dependen de personas repitiendo tareas en sistemas que responden, organizan y crean solos.",
    contacto: {
      email: "",
      whatsapp: "", // solo números, con indicativo: 573001234567
      linkedin: "",
      instagram: ""
    }
  },

  categorias: [
    { id: "automatizacion", nombre: "Automatización con IA", color: "rosa" },
    { id: "agentes", nombre: "Agentes de IA", color: "azul" },
    { id: "moda", nombre: "Moda + IA", color: "lila" },
    { id: "contenido", nombre: "Contenido visual", color: "limon" },
    { id: "video", nombre: "Video con IA", color: "rosa" }
  ],

  proyectos: [
    {
      id: "beauty-studio-agente",
      cliente: "Beauty Studio",
      sector: "Centro de belleza y estética",
      titulo: "Agente de IA que atiende WhatsApp, Instagram y Facebook",
      categorias: ["automatizacion", "agentes"],
      estado: "Entregado",
      color: "rosa",
      visual: "chat",
      resumen:
        "Asistente de inteligencia artificial en respond.io que responde de forma automática a las clientas en los tres canales del negocio: menús, servicios y dudas frecuentes.",
      contexto:
        "Beauty Studio ofrece servicios de pestañas, cejas, labios y uñas. Las consultas llegan por WhatsApp, Instagram y Facebook, y casi todas se repiten: qué servicios hay, cómo funciona cada uno, cómo agendar.",
      hice: [
        "Creé el asistente de IA dentro de respond.io y lo capacité con la información de los servicios del estudio.",
        "Diseñé los menús de conversación para que la clienta llegue rápido al servicio que busca.",
        "Armé los flujos de respuesta para WhatsApp, Instagram y Facebook desde una sola bandeja.",
        "Definí qué preguntas resuelve el agente solo y en qué momento la conversación pasa a una persona del equipo."
      ],
      habilidades: [
        "Diseño conversacional",
        "Entrenamiento de agentes de IA",
        "Construcción de flujos automatizados",
        "Atención omnicanal",
        "Estructuración de base de conocimiento"
      ],
      herramientas: ["respond.io", "WhatsApp", "Instagram", "Facebook Messenger"],
      media: []
    },
    {
      id: "ricardo-pava-procesos",
      cliente: "Ricardo Pava",
      sector: "Atelier de moda masculina",
      titulo: "Automatización de los procesos del atelier con IA",
      categorias: ["automatizacion", "moda"],
      estado: "En curso",
      color: "lila",
      visual: "flujo",
      resumen:
        "Mapeo y automatización de los procesos empresariales de la casa de moda, para que la operación del atelier dependa menos de tareas manuales.",
      contexto:
        "Ricardo Pava es un diseñador bogotano de moda masculina con más de treinta años de trayectoria y viste a la Selección Colombia desde 2014. Su atelier trabaja a medida: cada cliente tiene medidas, telas y pruebas propias.",
      hice: [
        "Levanté los procesos del atelier, desde el primer contacto con el cliente hasta la entrega de la prenda.",
        "Identifiqué las tareas repetitivas que se pueden automatizar con inteligencia artificial.",
        "Estoy implementando los flujos por etapas, empezando por el registro de clientes y su historial."
      ],
      habilidades: [
        "Levantamiento de procesos",
        "Automatización con IA",
        "Rediseño operativo",
        "Gestión del cambio"
      ],
      herramientas: ["Inteligencia artificial generativa", "Automatizaciones"],
      media: []
    },
    {
      id: "ricardo-pava-libros",
      cliente: "Ricardo Pava",
      sector: "Atelier de moda masculina",
      titulo: "Libro digital de cada cliente",
      categorias: ["moda", "automatizacion"],
      estado: "En curso",
      color: "azul",
      visual: "libro",
      resumen:
        "Cada cliente del atelier tiene su propia mini web: todo su historial con la marca, los materiales usados en sus prendas y sus medidas, en un solo lugar.",
      contexto:
        "La información de cada cliente vivía dispersa. Un traje a medida necesita medidas exactas, telas elegidas y el registro de cada prueba.",
      hice: [
        "Diseñé una plantilla de mini web por cliente, clara y fácil de recorrer.",
        "Organicé el historial de cada cliente: prendas, pruebas y fechas.",
        "Incluí los materiales y telas de cada prenda y la ficha de medidas."
      ],
      habilidades: [
        "Diseño de experiencia",
        "Arquitectura de información",
        "Diseño web",
        "Organización de datos de clientes"
      ],
      herramientas: ["Web", "Inteligencia artificial generativa"],
      media: []
    },
    {
      id: "ricardo-pava-tendencias",
      cliente: "Ricardo Pava",
      sector: "Atelier de moda masculina",
      titulo: "Agente programado de tendencias en moda masculina",
      categorias: ["agentes", "moda"],
      estado: "En curso",
      color: "limon",
      visual: "agente",
      resumen:
        "Un agente que, en días y horas definidos, entrega un artículo de análisis sobre las tendencias en moda masculina.",
      contexto:
        "Estar al día con las tendencias exige horas de lectura. El agente hace esa búsqueda y entrega el análisis listo para leer.",
      hice: [
        "Definí los temas y el enfoque del análisis para la marca.",
        "Programé el agente para que se ejecute en días y horas fijos.",
        "Diseñé el formato del artículo para que sea breve y útil para decidir."
      ],
      habilidades: [
        "Agentes de IA programados",
        "Prompt engineering",
        "Investigación de tendencias",
        "Automatización de reportes"
      ],
      herramientas: ["Agentes de IA", "Tareas programadas"],
      media: []
    },
    {
      id: "ricardo-pava-eventos",
      cliente: "Ricardo Pava",
      sector: "Atelier de moda masculina",
      titulo: "Calendario de eventos en Colombia",
      categorias: ["agentes", "moda"],
      estado: "En curso",
      color: "rosa",
      visual: "calendario",
      resumen:
        "Un agente que arma el calendario de eventos en las principales ciudades de Colombia donde la marca puede tener presencia y oportunidades de negocio.",
      contexto:
        "Las oportunidades de la marca (ferias, galas, eventos empresariales y sociales) están repartidas en varias ciudades y fechas.",
      hice: [
        "Definí qué tipo de eventos le interesan a la marca.",
        "Configuré el agente para buscar eventos en las ciudades principales del país.",
        "Organicé los resultados en un calendario fácil de consultar."
      ],
      habilidades: [
        "Agentes de IA programados",
        "Inteligencia de mercado",
        "Organización de información"
      ],
      herramientas: ["Agentes de IA", "Tareas programadas", "Calendario"],
      media: []
    },
    {
      id: "integral-solutions-contenido",
      cliente: "Integral Solutions",
      sector: "Envíos internacionales",
      titulo: "Creación de contenido para redes",
      categorias: ["contenido"],
      estado: "En curso",
      color: "azul",
      visual: "contenido",
      resumen:
        "Estrategia y producción de contenido para una empresa de envíos internacionales, con apoyo de inteligencia artificial.",
      contexto:
        "Un servicio de envíos internacionales necesita explicar con claridad cómo funciona y generar confianza en cada publicación.",
      hice: [
        "Planeé las líneas de contenido de la marca.",
        "Produje piezas gráficas y textos para redes sociales.",
        "Uso inteligencia artificial para acelerar la producción sin perder la identidad de la marca."
      ],
      habilidades: [
        "Estrategia de contenido",
        "Diseño gráfico con IA",
        "Copywriting",
        "Gestión de redes sociales"
      ],
      herramientas: ["IA generativa de imagen", "Redes sociales"],
      media: []
    },
    {
      id: "lila-vela-contenido",
      cliente: "Lila Vela",
      sector: "Marca de ropa",
      titulo: "Shootings y video cinematográfico con IA",
      categorias: ["contenido", "video", "moda"],
      estado: "En curso",
      color: "lila",
      visual: "shooting",
      resumen:
        "Imágenes de shooting y videos de estética cinematográfica para la marca, producidos con inteligencia artificial.",
      contexto:
        "Una marca de ropa vive de su imagen. Producir shootings y videos tradicionales cuesta tiempo y presupuesto en cada colección.",
      hice: [
        "Definí la dirección de arte y el tono visual de la marca.",
        "Produje imágenes tipo shooting con las prendas de la marca.",
        "Creé videos con lenguaje cinematográfico para redes."
      ],
      habilidades: [
        "Dirección de arte",
        "Fotografía de moda con IA",
        "Video con IA",
        "Narrativa visual"
      ],
      herramientas: ["IA generativa de imagen", "IA generativa de video"],
      media: []
    },
    {
      id: "arturo-tejada-videos",
      cliente: "Escuela Arturo Tejada",
      sector: "Educación en diseño de modas",
      titulo: "Videos con IA para diplomados y cursos",
      categorias: ["video", "moda"],
      estado: "En curso",
      color: "limon",
      visual: "video",
      resumen:
        "Producción de videos para los diplomados y cursos de una escuela de diseño de modas, hechos con inteligencia artificial.",
      contexto:
        "La Escuela de Diseño y Mercadeo de Moda Arturo Tejada Cano tiene sedes en Bogotá y Medellín. Sus programas necesitan material audiovisual de calidad para cada curso.",
      hice: [
        "Guionicé los videos a partir del contenido de cada curso.",
        "Produje las piezas con herramientas de video con IA.",
        "Mantuve una línea visual coherente entre cursos y diplomados."
      ],
      habilidades: [
        "Guion educativo",
        "Producción de video con IA",
        "Diseño instruccional",
        "Edición"
      ],
      herramientas: ["IA generativa de video", "Edición de video"],
      media: []
    }
  ]
};
