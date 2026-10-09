/*
 * Contenido del portafolio. Para agregar o cambiar proyectos solo hay que
 * editar este archivo.
 *
 * PERFIL
 *   rol: una línea por especialidad; se muestran bajo el nombre.
 *   contacto: deja vacío ("") lo que no quieras mostrar; ese botón se oculta.
 *
 * REEL (videos de la portada)
 *   Se ven apenas entra la persona, al lado del nombre. Se reproducen solos,
 *   sin sonido, y al hacer clic se abren grandes con sonido.
 *   Guarda los videos en img/reel/ (formato .mp4, vertical 9:16 idealmente,
 *   menos de 20 MB cada uno) y agrégalos así:
 *     { src: "img/reel/campana-1.mp4", poster: "img/reel/campana-1.jpg", titulo: "Campaña Lila Vela", etiqueta: "Moda" }
 *   poster es opcional: una foto que se ve mientras el video carga.
 *   etiqueta es opcional: si hay dos o más distintas, la biblioteca muestra
 *   botones para filtrar por etiqueta.
 *   La portada muestra los 5 primeros; la sección Biblioteca muestra todos.
 *   Si la lista está vacía, la portada muestra solo las figuras 3D.
 *
 * CATEGORÍAS
 *   id, nombre y color (uno de: rosa | lila | azul | limon).
 *
 * PROYECTOS
 *   categorias: ids de la lista de categorías (puede tener varias).
 *   estado:     "Entregado" o "En curso".
 *   visual:     ilustración que se muestra mientras no haya fotos o videos:
 *               chat | flujo | libro | agente | calendario | contenido | shooting | probador | video
 *   media:      fotos y videos del proyecto. Guarda los archivos en
 *               img/proyectos/<cliente>/ y agrégalos así:
 *                 { tipo: "imagen", src: "img/proyectos/beauty-studio/flujo-1.jpg", texto: "Menú principal en WhatsApp" }
 *                 { tipo: "video",  src: "img/proyectos/lila-vela/teaser.mp4", texto: "Teaser de la colección" }
 *                 { tipo: "embed",  src: "https://www.youtube.com/embed/ID", texto: "Clase del diplomado" }
 *               La primera imagen se usa también como portada de la tarjeta,
 *               salvo que el proyecto tenga portada: "ilustracion".
 *   cifras:      opcional, datos clave del proyecto: [["37", "servicios"], ...]
 *   entregables: opcional, lista de documentos o piezas entregadas.
 */

window.ML_DATA = {
  perfil: {
    nombre: "María Laura",
    rol: [
      "Especialista en automatización de procesos empresariales con inteligencia artificial",
      "Experta en creación de contenido cinematográfico hiperrealista"
    ],
    lema: "Convierto procesos que hoy dependen de personas repitiendo tareas en sistemas que responden, organizan y crean solos. Y produzco con IA imágenes y videos cinematográficos hiperrealistas.",
    contacto: {
      email: "malavahe@hotmail.com",
      whatsapp: "573197190608", // solo números, con indicativo
      linkedin: "",
      instagram: "https://www.instagram.com/malavahe/"
    }
  },

  reel: [
    { src: "img/reel/reel-1.mp4", poster: "img/reel/reel-1.jpg", titulo: "Boceto al atardecer", etiqueta: "Moda" },
    { src: "img/reel/reel-2.mp4", poster: "img/reel/reel-2.jpg", titulo: "Pradera en la niebla", etiqueta: "Moda" },
    { src: "img/reel/reel-3.mp4", poster: "img/reel/reel-3.jpg", titulo: "Noche de autos", etiqueta: "Publicidad" },
    { src: "img/reel/reel-4.mp4", poster: "img/reel/reel-4.jpg", titulo: "Ruta al atardecer", etiqueta: "Publicidad" }
  ],

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
      sector: "Centro de estética",
      titulo: "Vale: asistente de IA para WhatsApp, Instagram y Facebook",
      categorias: ["automatizacion", "agentes"],
      estado: "Entregado",
      color: "rosa",
      visual: "chat",
      resumen:
        "Vale es la asistente virtual de Beauty Studio en respond.io: saluda, entiende qué servicio busca cada clienta, le envía sola la ficha y el video del servicio y responde precios, duración y políticas.",
      cifras: [
        ["3", "canales"],
        ["5", "flujos de catálogo"],
        ["37", "servicios cubiertos"],
        ["3", "fuentes de conocimiento"]
      ],
      contexto:
        "Beauty Studio es un centro de estética de cejas, pestañas, labios, manos, pies y micropigmentación, con 37 servicios en su portafolio. Las consultas llegan por WhatsApp, Instagram y Facebook, y cada una pide encontrar la ficha, el precio y las políticas correctas. La solución se entregó construida, lista para pilotear y activar en los canales.",
      hice: [
        "Diseñé a Vale: quién es, cómo habla en nombre del equipo y cuándo pasa la conversación a una persona (agendar, quejas, garantías).",
        "Creé un sistema de dos etiquetas: la de categoría enciende el flujo y la de subservicio elige la ficha exacta. Al terminar, el flujo las limpia para poder volver a usarse.",
        "Construí cinco flujos de catálogo (manos, pies, pestañas, cejas y labios) que cubren los 37 servicios, cada uno con mensaje de introducción, ficha y video cuando aplica.",
        "Resolví el tope de 10 condiciones por bloque de respond.io con un bloque de ramas anidado, para que manos soporte sus 15 servicios.",
        "Separé comportamiento y conocimiento: las instrucciones (tope de 10.000 caracteres) solo guardan cómo actúa Vale; precios, políticas y tiempos viven en tres documentos que se actualizan sin tocar los flujos.",
        "Armé el flujo de recontactos: si la clienta deja de responder, recibe un mensaje a los 25 minutos y otro a las 2 horas, con salida automática si contesta o la toma un asesor.",
        "Audité cada flujo contra el menú oficial de servicios para que ninguna ficha quedara por fuera."
      ],
      habilidades: [
        "Diseño conversacional",
        "Arquitectura de flujos automatizados",
        "Prompt engineering",
        "Gestión de conocimiento para IA",
        "Atención omnicanal"
      ],
      herramientas: ["respond.io", "WhatsApp Business", "Instagram", "Facebook Messenger"],
      media: []
    },
    {
      id: "ricardo-pava-procesos",
      cliente: "Ricardo Pava",
      sector: "Sastrería masculina a la medida",
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
      sector: "Sastrería masculina a la medida",
      titulo: "Libro de cliente: la memoria de cada cliente del atelier",
      categorias: ["moda", "automatizacion"],
      estado: "En curso",
      color: "azul",
      visual: "libro",
      portada: "ilustracion",
      resumen:
        "Cada cliente del atelier tiene su propio libro digital: quién es, qué ha comprado, sus medidas, cada prueba con foto, la pieza que se está confeccionando y el estado de su pedido. Todo en un solo lugar, con la estética de la marca.",
      cifras: [
        ["6", "secciones por cliente"],
        ["19", "medidas de saco y pantalón"],
        ["6", "etapas de confección"],
        ["8", "puntos de control antes de entregar"]
      ],
      contexto:
        "En una sastrería a la medida la relación con el cliente dura años. Ricardo Pava, diseñador bogotano de moda masculina con más de treinta años de trayectoria, tiene clientes que vuelven durante décadas. Su historia con la marca (las telas que eligió, cómo cambió su silueta, qué ajustes pidió en cada prueba) vivía repartida entre libretas, fotos sueltas y la memoria del equipo. El libro de cliente la reúne y la convierte en parte de la experiencia VIP: el cliente siente que el atelier lo conoce, y el equipo atiende cada visita con toda la información a la mano.",
      hice: [
        "Diseñé la ficha del cliente: perfil, cumpleaños, años con el atelier, inversión acumulada frente al umbral de cliente VIP y citas del año. Así el equipo prepara cada visita y reconoce las fechas que importan.",
        "Creé el historial de compras y un muestrario personal de telas y colores, para que cada pieza nueva continúe el estilo que el cliente ha construido con la marca.",
        "Armé la sección de medidas y patronaje: 19 medidas de saco y pantalón, más un video del cuerpo en movimiento y una foto anotada para la patronista, que casi nunca está con el cliente y así traza el patrón como si lo tuviera enfrente.",
        "Diseñé la bitácora de pruebas y ajustes: cada prueba queda con foto y con su causa (corrección del atelier, petición del cliente o cambio de peso), para ver cómo evoluciona la silueta de una prueba a la siguiente.",
        "Organicé la pieza en confección en seis etapas (pedido, corte, pruebas, confección, control final y entrega), con su ficha técnica y una visualización con IA del cliente usando la pieza en la tela elegida.",
        "Definí un checklist de entrega de 8 puntos, desde la marquilla cosida y el planchado hasta las costuras, la solapa y las medidas finales, que se revisa antes de entregar cada prenda.",
        "Incluí la sección de finanzas del pedido: valor, abonos y saldo pendiente."
      ],
      habilidades: [
        "Diseño de experiencia de cliente (CX)",
        "Arquitectura de información",
        "Diseño web editorial",
        "Digitalización de procesos de sastrería",
        "Visualización con IA"
      ],
      herramientas: ["Claude", "Nano Banana (visualización con IA)", "Web"],
      media: [
        { tipo: "imagen", src: "img/proyectos/ricardo-pava/libro-ficha.jpg", texto: "Ficha del cliente: años con el atelier, inversión acumulada, citas y perfil. Los datos personales del cliente están difuminados." },
        { tipo: "imagen", src: "img/proyectos/ricardo-pava/libro-medidas.jpg", texto: "Medidas de saco y pantalón, la base del patronaje." },
        { tipo: "imagen", src: "img/proyectos/ricardo-pava/libro-pedido.jpg", texto: "Pedido en curso: seis etapas de confección y la pieza con su visualización con IA." },
        { tipo: "imagen", src: "img/proyectos/ricardo-pava/libro-checklist.jpg", texto: "Checklist de entrega: lo que se revisa antes de que la prenda llegue al cliente." }
      ]
    },
    {
      id: "ricardo-pava-tendencias",
      cliente: "Ricardo Pava",
      sector: "Sastrería masculina a la medida",
      titulo: "Agente programado: análisis de tendencias para el equipo de marketing",
      categorias: ["agentes", "moda"],
      estado: "En curso",
      color: "limon",
      visual: "agente",
      portada: "ilustracion",
      resumen:
        "Una tarea programada que llega sola, en un día y una hora definidos, con un informe de tendencias que convierte noticias de moda, sastrería, textil y cultura en ideas de contenido listas para grabar y publicar.",
      cifras: [
        ["4", "ejes temáticos"],
        ["8", "noticias por edición"],
        ["16", "guiones para TikTok e Instagram"],
        ["3", "oportunidades priorizadas"]
      ],
      contexto:
        "El equipo de marketing de un atelier necesita saber qué pasa en la moda masculina, en las bodas, en la industria textil y en la cultura de su ciudad, y decidir rápido qué contenido hacer con eso. Leerlo todo cada semana toma horas. El agente hace esa investigación de mercado y la entrega convertida en decisiones de contenido.",
      hice: [
        "Programé el agente para ejecutarse en un día y una hora fijos y entregar el informe sin que nadie lo pida.",
        "Definí cuatro ejes de búsqueda según el negocio del atelier: moda masculina, sastrería y novios, innovación textil y cultura local.",
        "Diseñé el formato de cada noticia: qué pasó, por qué le importa a la marca y dos guiones de contenido, uno para TikTok (formato, gancho de 3 segundos, remate y audio) y otro para Instagram (formato, mensaje y línea de producto a destacar).",
        "Agregué un cierre con las 3 oportunidades de la semana ordenadas por urgencia, con acciones y fechas concretas, y las fuentes enlazadas para verificar cada dato.",
        "Lo planteé como un modelo replicable: el mismo esquema sirve para programar otras tareas según lo que necesite cada atelier, como monitoreo de competencia, calendarios de eventos o reportes de clientes."
      ],
      habilidades: [
        "Agentes de IA programados",
        "Investigación de mercado con IA",
        "Estrategia de contenido",
        "Prompt engineering",
        "Automatización de reportes"
      ],
      herramientas: ["Claude", "Tareas programadas", "TikTok", "Instagram"],
      media: [
        { tipo: "imagen", src: "img/proyectos/ricardo-pava/tendencias-portada.jpg", texto: "Portada de una edición del informe: resumen de la semana y los cuatro ejes." },
        { tipo: "imagen", src: "img/proyectos/ricardo-pava/tendencias-noticia.jpg", texto: "Cada noticia trae qué pasó, por qué importa y un guion para TikTok y otro para Instagram." },
        { tipo: "imagen", src: "img/proyectos/ricardo-pava/tendencias-top3.jpg", texto: "Cierre con las tres oportunidades de la semana, priorizadas por urgencia." }
      ]
    },
    {
      id: "ricardo-pava-showroom",
      cliente: "Ricardo Pava",
      sector: "Sastrería masculina a la medida",
      titulo: "Showroom VIP: el cliente se ve con la tela elegida en tiempo real",
      categorias: ["moda", "contenido"],
      estado: "En curso",
      color: "rosa",
      visual: "probador",
      resumen:
        "En el showroom, el cliente se pone una de las bases de diseño del atelier y, con inteligencia artificial, ve en el momento cómo se vería esa misma prenda en cualquier tela del inventario.",
      contexto:
        "En sastrería a la medida, la decisión más difícil es la tela: el cliente ve una muestra pequeña y tiene que imaginar el traje completo puesto. El atelier cuenta con bases de diseño que el cliente se puede probar y con un inventario de telas. La pregunta de siempre es cómo se vería ese diseño en esa tela, y la IA la responde en el momento, como parte de la experiencia VIP de un atelier de alta sastrería.",
      hice: [
        "Diseñé la experiencia: el cliente se prueba la base de diseño que le gusta y elige telas del inventario del atelier.",
        "Se le toma una foto con la prenda puesta y, con IA, se cambia la tela de esa prenda en tiempo real, conservando el corte y la silueta.",
        "El cliente compara varias telas sobre su propio cuerpo antes de decidir, y la imagen elegida queda en su libro de cliente como referencia del pedido."
      ],
      habilidades: [
        "Diseño de experiencia VIP",
        "Edición de imagen con IA",
        "Visualización de producto",
        "Moda + tecnología"
      ],
      herramientas: ["Nano Banana (edición de imagen con IA)", "Inventario de telas del atelier"],
      media: []
    },
    {
      id: "ricardo-pava-eventos",
      cliente: "Ricardo Pava",
      sector: "Sastrería masculina a la medida",
      titulo: "Agente programado: calendario estratégico de eventos",
      categorias: ["agentes", "moda"],
      estado: "En curso",
      color: "rosa",
      visual: "calendario",
      portada: "ilustracion",
      resumen:
        "Un agente que arma el calendario de eventos del trimestre en las principales ciudades de Colombia y convierte cada uno en una oportunidad: a quién vestir, a quién invitar, qué contenido grabar y cuándo actuar.",
      cifras: [
        ["36", "eventos con fecha en el trimestre"],
        ["8", "momentos estratégicos"],
        ["6", "alertas de los próximos 14 días"],
        ["18", "fuentes enlazadas"]
      ],
      contexto:
        "Arte, música, cine, gastronomía, ferias y premiaciones: cada evento es una oportunidad de visibilidad, de venta o de relación con clientes, pero la agenda está dispersa y los plazos llegan antes de lo que parece. Un frac sobre medidas para una premiación necesita varias pruebas, así que enterarse una semana antes es enterarse tarde. El agente reúne la agenda y la convierte en un plan. El mismo modelo sirve para cualquier empresa que quiera estudiar con tiempo dónde estar y preparar su networking con estrategia, no solo para la moda.",
      hice: [
        "Programé el agente para construir y actualizar el calendario con las fuentes de cada evento, priorizando Bogotá y luego Medellín, Cali, Cartagena y Barranquilla, más los eventos internacionales que mueven la marca.",
        "Organicé los eventos por mes y por categoría (arte, música, cine, gastronomía, ferias textiles, revistas y premiaciones, cultura), con filtros, una línea de qué trata cada uno, sede y enlace a la fuente.",
        "Diseñé una sección de alertas para los próximos 14 días: cada una trae la fecha y la acción concreta para hoy, por ejemplo cerrar pruebas a tiempo para una alfombra roja o invitar a clientes clave a un evento.",
        "Creé la sección de estrategia: los momentos del trimestre donde la marca gana más, con la línea de producto que conectan y las acciones para entrar (vestir a un nominado, una cápsula para una feria, un recorrido privado con clientes, una serie de contenido).",
        "Lo dejé como un modelo replicable para otras empresas y sectores: cambian las fuentes y los criterios, y el resultado sigue siendo una agenda pensada para hacer networking con intención."
      ],
      habilidades: [
        "Agentes de IA programados",
        "Inteligencia de mercado",
        "Planeación estratégica de eventos",
        "Networking estratégico",
        "Investigación con fuentes verificables"
      ],
      herramientas: ["Claude", "Tareas programadas"],
      media: [
        { tipo: "imagen", src: "img/proyectos/ricardo-pava/eventos-portada.jpg", texto: "Calendario del trimestre: resumen de lo urgente y filtros por categoría." },
        { tipo: "imagen", src: "img/proyectos/ricardo-pava/eventos-alertas.jpg", texto: "Alertas de los próximos 14 días, cada una con la acción para hoy." },
        { tipo: "imagen", src: "img/proyectos/ricardo-pava/eventos-estrategia.jpg", texto: "Estrategia: los momentos del trimestre donde la marca gana más y cómo entrar." }
      ]
    },
    {
      id: "integral-solutions-contenido",
      cliente: "Integral Solutions",
      sector: "Carga y envíos internacionales",
      titulo: "Contenido para redes: envíos sin sustos",
      categorias: ["contenido"],
      estado: "En curso",
      color: "azul",
      visual: "contenido",
      resumen:
        "Carruseles y posts para una empresa de carga internacional entre Estados Unidos y Colombia, con un personaje de marca, un mensaje claro contra los miedos de enviar al exterior y piezas de temporada.",
      contexto:
        "Quien envía o compra en el exterior tiene miedos concretos: cargos que aparecen al final, paquetes sin rastro y nadie que responda. El contenido de Integral Solution parte de esos miedos y responde con la promesa de la marca: tarifa clara, seguro incluido y una persona real al otro lado.",
      hice: [
        "Definí la línea de mensaje: nombrar los miedos reales de enviar al exterior y contestarlos con la promesa de la marca.",
        "Desarrollé un sistema visual propio: azul profundo, acento terracota y dorado, tarjetas tipo vidrio y un botón de \"Cotiza ahora\" en cada pieza.",
        "Usé un personaje de marca, una caja de cartón con gorra de aviador, que cambia de vestuario según la temporada.",
        "Produje carruseles con estructura de gancho, desarrollo y cierre, como \"Los verdaderos sustos de enviar al exterior\" para Halloween y la serie de mitos y realidades.",
        "Diseñé posts sueltos para fechas comerciales, como Black Friday, con el paso a paso del servicio de casillero de EE. UU. a Colombia."
      ],
      habilidades: [
        "Estrategia de contenido",
        "Diseño de carruseles",
        "Copywriting",
        "Personaje de marca",
        "Imagen con IA"
      ],
      herramientas: ["IA generativa de imagen", "Instagram"],
      media: [
        { tipo: "imagen", src: "img/proyectos/integral-solutions/halloween-1.webp", texto: "Carrusel de Halloween · 1 de 3: Los verdaderos sustos de enviar al exterior." },
        { tipo: "imagen", src: "img/proyectos/integral-solutions/halloween-2.webp", texto: "Carrusel de Halloween · 2 de 3: los tres sustos más comunes." },
        { tipo: "imagen", src: "img/proyectos/integral-solutions/halloween-3.webp", texto: "Carrusel de Halloween · 3 de 3: Aquí no hay sustos, con la promesa de la marca." },
        { tipo: "imagen", src: "img/proyectos/integral-solutions/black-friday.webp", texto: "Post suelto · Black Friday: el paso a paso para comprar en EE. UU. y recibir en Colombia." },
        { tipo: "imagen", src: "img/proyectos/integral-solutions/mitos-3.webp", texto: "Carrusel de mitos y realidades · cierre: Enviar al exterior es carísimo." }
      ]
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
