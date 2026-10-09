(function () {
  "use strict";

  var D = window.ML_DATA;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function categoria(id) {
    return D.categorias.filter(function (c) { return c.id === id; })[0];
  }
  function slug(t) {
    return t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-");
  }

  /* ---------- Perfil y cifras ---------- */
  $("#hero-nombre").textContent = D.perfil.nombre;
  $("#hero-rol").innerHTML = [].concat(D.perfil.rol).map(function (r) {
    return "<p>" + esc(r) + "</p>";
  }).join("");
  $("#hero-lema").textContent = D.perfil.lema;
  $("#anio").textContent = new Date().getFullYear();

  var clientes = [];
  D.proyectos.forEach(function (p) { if (clientes.indexOf(p.cliente) < 0) clientes.push(p.cliente); });
  var agentes = D.proyectos.filter(function (p) { return p.categorias.indexOf("agentes") >= 0; }).length;
  $("#hero-cifras").innerHTML = [
    [D.proyectos.length, "proyectos"],
    [clientes.length, "clientes"],
    [agentes, "agentes de IA"]
  ].map(function (c) {
    return '<div><dt data-contar="' + c[0] + '">' + c[0] + "</dt><dd>" + c[1] + "</dd></div>";
  }).join("");

  /* ---------- Cinta de habilidades ---------- */
  var habs = [];
  D.proyectos.forEach(function (p) {
    p.habilidades.concat(p.herramientas).forEach(function (h) { if (habs.indexOf(h) < 0) habs.push(h); });
  });
  var cinta = habs.map(function (h) { return "<span>" + esc(h) + "</span>"; }).join("");
  $("#cinta").innerHTML = cinta + cinta;

  /* ---------- Ilustraciones ---------- */
  var ILU = {
    chat:
      '<div class="pieza"><div class="canales"><b>WhatsApp</b><b>Instagram</b><b>Facebook</b></div>' +
      '<div class="burbuja ella">Hola, ¿qué servicios de pestañas tienen?</div>' +
      '<div class="burbuja bot">¡Hola! Elige una opción:</div>' +
      '<div class="opciones"><span>Pestañas</span><span>Cejas</span><span>Labios</span><span>Uñas</span></div>' +
      '<div class="escribiendo"><i></i><i></i><i></i></div></div>',
    flujo:
      '<div class="pieza"><svg viewBox="0 0 250 170" aria-hidden="true">' +
      '<path d="M60 35 C 110 35, 100 85, 125 85"/><path d="M60 135 C 110 135, 100 85, 125 85"/>' +
      '<path d="M125 85 C 160 85, 160 35, 195 35"/><path d="M125 85 C 160 85, 160 135, 195 135"/></svg>' +
      '<span class="nodo" style="left:10px;top:22px">Cliente nuevo</span>' +
      '<span class="nodo" style="left:14px;top:122px">Pedido</span>' +
      '<span class="nodo ia" style="left:100px;top:72px">IA</span>' +
      '<span class="nodo" style="right:8px;top:22px">Historial</span>' +
      '<span class="nodo" style="right:8px;top:122px">Producción</span></div>',
    libro:
      '<div class="pieza"><div class="barra-nav"><i></i><i></i><i></i></div><div class="libro-cuerpo">' +
      '<span class="avatar"></span><div><div class="libro-nombre">Libro del cliente</div><div class="libro-sub">Historial · 6 prendas</div></div>' +
      '<div class="medidas"><span><b>98</b>pecho</span><span><b>84</b>cintura</span><span><b>62</b>manga</span></div>' +
      '<div class="telas"><i></i><i></i><i></i><i></i></div></div></div>',
    agente:
      '<div class="pieza"><div class="agente-cab"><span class="reloj"></span><div><b>Tendencias</b><small>Programado · 7:00 a. m.</small></div></div>' +
      '<div class="linea-art t"></div><div class="linea-art"></div><div class="linea-art c"></div><div class="linea-art"></div>' +
      '<div class="dias"><span class="on">L</span><span>M</span><span class="on">M</span><span>J</span><span class="on">V</span><span>S</span><span>D</span></div></div>',
    calendario:
      '<div class="pieza"><div class="cal-cab"><span>Eventos</span><span>●●●</span></div><div class="cal">' +
      Array.apply(null, Array(28)).map(function (_, i) {
        var c = [3, 11, 19].indexOf(i) >= 0 ? "ev" : [6, 15, 24].indexOf(i) >= 0 ? "ev2" : [9, 22].indexOf(i) >= 0 ? "ev3" : "";
        return '<i class="' + c + '"></i>';
      }).join("") +
      '</div><div class="ciudades"><span>Bogotá</span><span>Medellín</span><span>Cali</span><span>Barranquilla</span></div></div>',
    contenido: '<div class="pieza"><i></i><i></i><i></i><i></i><i></i><i></i></div>',
    shooting: '<div class="pieza"><span class="rec">REC</span></div>',
    video:
      '<div class="pieza"><div class="pantalla"><span class="play"></span></div>' +
      '<div class="timeline"><small>00:42</small><span class="barra"><i></i></span><small>03:10</small></div></div>'
  };
  function ilustracion(p) {
    return '<div class="ilu ilu-' + p.visual + '" aria-hidden="true">' + (ILU[p.visual] || ILU.contenido) + "</div>";
  }
  function portada(p) {
    if (p.portada === "ilustracion") return ilustracion(p);
    var img = (p.media || []).filter(function (m) { return m.tipo === "imagen"; })[0];
    return img ? '<img src="' + esc(img.src) + '" alt="' + esc(img.texto || p.titulo) + '" loading="lazy">' : ilustracion(p);
  }

  /* ---------- Filtros ---------- */
  var filtroActual = "todos";
  function contar(id) {
    return id === "todos" ? D.proyectos.length
      : D.proyectos.filter(function (p) { return p.categorias.indexOf(id) >= 0; }).length;
  }
  var filtros = [{ id: "todos", nombre: "Todos" }].concat(D.categorias);
  $("#filtros").innerHTML = filtros.map(function (c) {
    return '<button class="filtro" type="button" role="tab" data-filtro="' + c.id + '"' +
      (c.color ? ' data-color="' + c.color + '"' : "") +
      ' aria-selected="' + (c.id === filtroActual) + '">' +
      (c.color ? "<i></i>" : "") + esc(c.nombre) + ' <span class="n">' + contar(c.id) + "</span></button>";
  }).join("");
  $("#filtros").addEventListener("click", function (e) {
    var b = e.target.closest(".filtro");
    if (!b) return;
    filtroActual = b.dataset.filtro;
    $$(".filtro").forEach(function (x) { x.setAttribute("aria-selected", x === b); });
    pintarRejilla();
  });

  /* ---------- Rejilla de proyectos ---------- */
  function visibles() {
    return filtroActual === "todos" ? D.proyectos
      : D.proyectos.filter(function (p) { return p.categorias.indexOf(filtroActual) >= 0; });
  }
  function pintarRejilla() {
    $("#rejilla").innerHTML = visibles().map(function (p, i) {
      return '<button class="tarjeta" type="button" data-id="' + p.id + '" data-color="' + p.color + '" style="animation-delay:' + i * 70 + 'ms">' +
        '<span class="tarjeta-abrir" aria-hidden="true">↗</span>' +
        '<span class="tarjeta-visual">' + portada(p) + "</span>" +
        '<span class="tarjeta-info">' +
        '<span class="tarjeta-cliente"><span>' + esc(p.cliente) + "</span>" + estado(p) + "</span>" +
        "<h3>" + esc(p.titulo) + "</h3>" +
        "<p>" + esc(p.resumen) + "</p>" +
        '<span class="etiquetas">' + p.categorias.map(function (id) {
          var c = categoria(id);
          return c ? '<span class="etiqueta" data-color="' + c.color + '">' + esc(c.nombre) + "</span>" : "";
        }).join("") + "</span></span></button>";
    }).join("");
    if (!reducido) $$(".tarjeta").forEach(inclinar);
  }
  function estado(p) {
    return '<span class="estado ' + slug(p.estado) + '">' + esc(p.estado) + "</span>";
  }
  function inclinar(el) {
    el.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse") return;
      var r = el.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty("--ry", (x - .5) * 14 + "deg");
      el.style.setProperty("--rx", (.5 - y) * 12 + "deg");
      el.style.setProperty("--mx", x * 100 + "%");
      el.style.setProperty("--my", y * 100 + "%");
    });
    el.addEventListener("pointerleave", function () {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    });
  }
  $("#rejilla").addEventListener("click", function (e) {
    var t = e.target.closest(".tarjeta");
    if (t) abrir(t.dataset.id, t);
  });
  pintarRejilla();

  /* ---------- Clientes ---------- */
  var coloresCliente = ["rosa", "lila", "azul", "limon"];
  $("#clientes-lista").innerHTML = clientes.map(function (nombre, i) {
    var ps = D.proyectos.filter(function (p) { return p.cliente === nombre; });
    return '<button class="cliente revelar" type="button" data-cliente="' + esc(nombre) + '" data-color="' + coloresCliente[i % 4] + '">' +
      "<b>" + esc(nombre) + "</b><small>" + esc(ps[0].sector) + "</small>" +
      "<span>" + ps.length + (ps.length === 1 ? " proyecto" : " proyectos") + " →</span></button>";
  }).join("");
  $("#clientes-lista").addEventListener("click", function (e) {
    var b = e.target.closest(".cliente");
    if (!b) return;
    var p = D.proyectos.filter(function (x) { return x.cliente === b.dataset.cliente; })[0];
    abrir(p.id, b);
  });

  /* ---------- Capacidades ---------- */
  $$(".cap").forEach(function (c) {
    c.setAttribute("aria-pressed", "false");
    c.addEventListener("click", function () {
      var g = c.classList.toggle("girada");
      c.setAttribute("aria-pressed", g);
    });
  });

  /* ---------- Contacto ---------- */
  var k = D.perfil.contacto, botones = [];
  if (k.whatsapp) botones.push(["https://wa.me/" + k.whatsapp.replace(/\D/g, ""), "WhatsApp", "btn"]);
  if (k.email) botones.push(["mailto:" + k.email, "Escríbeme", k.whatsapp ? "btn btn-vidrio" : "btn"]);
  if (k.linkedin) botones.push([k.linkedin, "LinkedIn", "btn btn-vidrio"]);
  if (k.instagram) {
    var usuario = k.instagram.match(/instagram\.com\/([^\/?#]+)/);
    botones.push([k.instagram, usuario ? "@" + usuario[1] : "Instagram", "btn btn-vidrio"]);
  }
  if (!botones.length) botones.push(["#proyectos", "Ver proyectos", "btn"]);
  $("#contacto-botones").innerHTML = botones.map(function (b) {
    var ext = /^https?:/.test(b[0]) ? ' target="_blank" rel="noopener"' : "";
    return '<a class="' + b[2] + '" href="' + esc(b[0]) + '"' + ext + ">" + esc(b[1]) + "</a>";
  }).join("");

  /* ---------- Reel de la portada y biblioteca de videos ---------- */
  var reel = (D.reel || []).filter(function (r) { return r && r.src; });
  var portada = reel.slice(0, 5);               // la portada muestra los 5 primeros
  var reelIdx = 0, reelTimer = null, visorIdx = 0, visorOrigen = null;
  var filtroBib = "todos", bibObs = null;
  function esEmbed(src) { return /youtube\.com|youtu\.be|vimeo\.com/.test(src); }
  function embedAuto(src, sonido) {
    var sep = src.indexOf("?") < 0 ? "?" : "&";
    return src + sep + (sonido ? "autoplay=1" : "autoplay=1&mute=1&muted=1&loop=1&controls=0&background=1&playsinline=1");
  }
  function medioMudo(r, i, auto) {
    return esEmbed(r.src)
      ? '<iframe src="' + esc(embedAuto(r.src)) + '" title="' + esc(r.titulo || "Video " + (i + 1)) + '" allow="autoplay; fullscreen" loading="lazy" tabindex="-1"></iframe>'
      : '<video src="' + esc(r.src) + '"' + (r.poster ? ' poster="' + esc(r.poster) + '"' : "") + ' muted loop playsinline preload="metadata"' + (auto ? " autoplay" : "") + "></video>";
  }
  function reproducir(v) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); }

  if (reel.length) {
    $("#inicio").classList.add("con-reel");
    $("#reel").hidden = false;
    $("#reel-pila").innerHTML = portada.map(function (r, i) {
      return '<button class="reel-carta" type="button" data-i="' + i + '" aria-label="Ver ' + esc(r.titulo || "video " + (i + 1)) + ' con sonido">' +
        medioMudo(r, i, i === 0) + '<span class="reel-brillo"></span>' +
        (r.titulo ? '<span class="reel-nombre">' + esc(r.titulo) + "</span>" : "") +
        '<span class="reel-play" aria-hidden="true"></span></button>';
    }).join("");
    $("#reel-puntos").innerHTML = portada.length > 1 ? portada.map(function (_, i) {
      return '<button type="button" data-ir-reel="' + i + '" aria-label="Video ' + (i + 1) + '"></button>';
    }).join("") : "";
    colocarReel();
    programarReel();

    $("#reel").addEventListener("click", function (e) {
      var p = e.target.closest("[data-ir-reel]");
      if (p) { reelIdx = +p.dataset.irReel; colocarReel(); programarReel(); return; }
      var c = e.target.closest(".reel-carta");
      if (!c) return;
      var i = +c.dataset.i;
      if (i !== reelIdx) { reelIdx = i; colocarReel(); programarReel(); }
      else abrirVisor(i, c);
    });
    $("#reel").addEventListener("pointerenter", function () { clearInterval(reelTimer); });
    $("#reel").addEventListener("pointerleave", programarReel);

    if (reel.length > 1) pintarBiblioteca();   // con un solo video basta la portada
  }
  function programarReel() {
    clearInterval(reelTimer);
    if (portada.length > 1 && !reducido) reelTimer = setInterval(function () {
      reelIdx = (reelIdx + 1) % portada.length; colocarReel();
    }, 7000);
  }
  function colocarReel() {
    var n = portada.length;
    $$(".reel-carta").forEach(function (c, i) {
      var d = (i - reelIdx + n) % n;            // 0 = al frente
      if (d > n / 2) d -= n;                    // reparte a ambos lados
      c.style.setProperty("--d", d);
      c.style.setProperty("--ad", Math.abs(d));
      c.classList.toggle("activa", d === 0);
      c.tabIndex = d === 0 ? 0 : -1;
      var v = c.querySelector("video");
      if (v) { if (d === 0 && !reducido) reproducir(v); else v.pause(); }
    });
    $$("[data-ir-reel]").forEach(function (b, i) { b.setAttribute("aria-current", i === reelIdx); });
  }

  /* Biblioteca: todos los videos en cuadrícula, con filtro si tienen etiqueta. */
  function pintarBiblioteca() {
    $("#biblioteca").hidden = false;
    $("#nav-biblioteca").hidden = false;
    var etiquetas = [];
    reel.forEach(function (r) { if (r.etiqueta && etiquetas.indexOf(r.etiqueta) < 0) etiquetas.push(r.etiqueta); });
    $("#bib-filtros").innerHTML = etiquetas.length > 1 ? ["todos"].concat(etiquetas).map(function (t) {
      return '<button class="filtro" type="button" data-bib="' + esc(t) + '" aria-pressed="' + (t === filtroBib) + '">' +
        (t === "todos" ? "Todos" : esc(t)) + "</button>";
    }).join("") : "";
    $("#bib-rejilla").innerHTML = reel.map(function (r, i) {
      if (filtroBib !== "todos" && r.etiqueta !== filtroBib) return "";
      return '<button class="bib-item" type="button" data-v="' + i + '" style="animation-delay:' + i * 60 + 'ms" aria-label="Ver ' + esc(r.titulo || "video " + (i + 1)) + ' con sonido">' +
        medioMudo(r, i, false) + '<span class="reel-brillo"></span>' +
        (r.etiqueta ? '<span class="bib-etiqueta">' + esc(r.etiqueta) + "</span>" : "") +
        (r.titulo ? '<span class="reel-nombre">' + esc(r.titulo) + "</span>" : "") +
        '<span class="reel-play" aria-hidden="true"></span></button>';
    }).join("");
    $("#bib-total").textContent = reel.length + (reel.length === 1 ? " video" : " videos");
    activarBiblioteca();
  }
  // Cada video de la biblioteca se reproduce (sin sonido) solo mientras está a la vista.
  function activarBiblioteca() {
    if (!("IntersectionObserver" in window)) return;
    if (!bibObs) bibObs = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        var v = en.target.querySelector("video");
        if (!v) return;
        if (en.isIntersecting && !reducido && $("#visor").hidden) reproducir(v); else v.pause();
      });
    }, { threshold: .6 });
    bibObs.disconnect();
    $$(".bib-item").forEach(function (el) { bibObs.observe(el); });
  }
  if ($("#biblioteca")) {
    $("#biblioteca").addEventListener("click", function (e) {
      var f = e.target.closest("[data-bib]");
      if (f) { filtroBib = f.dataset.bib; pintarBiblioteca(); return; }
      var it = e.target.closest(".bib-item");
      if (it) abrirVisor(+it.dataset.v, it);
    });
  }

  var visor = $("#visor");
  function abrirVisor(i, desde) {
    var r = reel[i];
    visorIdx = i;
    if (desde) visorOrigen = desde;
    clearInterval(reelTimer);
    $$(".reel-carta video, .bib-item video").forEach(function (v) { v.pause(); });
    $("#visor-medio").innerHTML = esEmbed(r.src)
      ? '<iframe src="' + esc(embedAuto(r.src, true)) + '" title="' + esc(r.titulo || "Video") + '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>'
      : '<video src="' + esc(r.src) + '" controls autoplay playsinline></video>';
    $("#visor-titulo").textContent = (r.titulo || "") + (reel.length > 1 ? "  ·  " + (i + 1) + " / " + reel.length : "");
    $$(".visor-flecha").forEach(function (b) { b.hidden = reel.length < 2; });
    if (visor.hidden) {
      visor.hidden = false;
      document.body.classList.add("sin-scroll");
      $(".visor-caja .modal-cerrar").focus();
    }
  }
  function cerrarVisor() {
    if (visor.hidden) return;
    $("#visor-medio").innerHTML = "";
    visor.hidden = true;
    document.body.classList.remove("sin-scroll");
    colocarReel(); programarReel();
    if (visorOrigen) visorOrigen.focus({ preventScroll: true });
  }
  function moverVisor(d) { abrirVisor((visorIdx + d + reel.length) % reel.length); }
  visor.addEventListener("click", function (e) {
    if (e.target.closest("[data-cerrar-visor]")) return cerrarVisor();
    var f = e.target.closest("[data-visor]");
    if (f) moverVisor(+f.dataset.visor);
  });
  document.addEventListener("keydown", function (e) {
    if (visor.hidden) return;
    if (e.key === "Escape") cerrarVisor();
    else if (e.key === "ArrowRight") moverVisor(1);
    else if (e.key === "ArrowLeft") moverVisor(-1);
  });

  /* ---------- Modal de proyecto ---------- */
  var modal = $("#modal"), caja = $(".modal-caja"), origen = null, actual = null, mediaIdx = 0;

  function abrir(id, desde) {
    var p = D.proyectos.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    actual = p; mediaIdx = 0;
    if (desde) origen = desde;
    caja.setAttribute("data-color", p.color);
    $("#modal-galeria").setAttribute("data-color", p.color);
    pintarGaleria();
    $("#modal-cuerpo").innerHTML =
      '<div class="tarjeta-cliente"><span>' + esc(p.cliente) + " · " + esc(p.sector) + "</span>" + estado(p) + "</div>" +
      '<h2 id="modal-titulo">' + esc(p.titulo) + "</h2>" +
      '<p class="resumen">' + esc(p.resumen) + "</p>" +
      (p.cifras ? '<dl class="cifras">' + p.cifras.map(function (c) {
        return "<div><dt>" + esc(c[0]) + "</dt><dd>" + esc(c[1]) + "</dd></div>";
      }).join("") + "</dl>" : "") +
      '<div class="bloque"><h3>Contexto</h3><p>' + esc(p.contexto) + "</p></div>" +
      '<div class="bloque"><h3>Qué hice</h3><ol class="pasos">' + p.hice.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ol></div>" +
      '<div class="bloque"><h3>Habilidades</h3><div class="habilidades">' + p.habilidades.map(function (h) { return '<span class="habilidad">' + esc(h) + "</span>"; }).join("") + "</div></div>" +
      '<div class="bloque"><h3>Herramientas y canales</h3><div class="herramientas">' + p.herramientas.map(function (h) { return "<span>" + esc(h) + "</span>"; }).join("") + "</div></div>" +
      (p.entregables ? '<div class="bloque"><h3>Entregables</h3><ul class="entregables">' + p.entregables.map(function (e) { return "<li>" + esc(e) + "</li>"; }).join("") + "</ul></div>" : "") +
      '<div class="modal-nav"><button type="button" data-mover="-1">← Anterior</button><button type="button" data-mover="1">Siguiente →</button></div>';
    if (modal.hidden) {
      modal.hidden = false;
      document.body.classList.add("sin-scroll");
      history.replaceState(null, "", "#p/" + p.id);
    } else {
      history.replaceState(null, "", "#p/" + p.id);
      caja.style.animation = "none"; void caja.offsetWidth; caja.style.animation = "";
    }
    caja.scrollTop = 0;
    caja.focus();
  }

  function pintarGaleria() {
    var p = actual, media = p.media || [], g = $("#modal-galeria");
    if (!media.length) {
      g.innerHTML = '<div class="galeria-escenario">' + ilustracion(p) + "</div>";
      return;
    }
    var m = media[mediaIdx], vista;
    if (m.tipo === "video") vista = '<video src="' + esc(m.src) + '" controls playsinline preload="metadata"></video>';
    else if (m.tipo === "embed") vista = '<iframe src="' + esc(m.src) + '" title="' + esc(m.texto || p.titulo) + '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>';
    else vista = '<img src="' + esc(m.src) + '" alt="' + esc(m.texto || p.titulo) + '">';
    var flechas = media.length > 1
      ? '<button class="galeria-flecha prev" type="button" data-media="-1" aria-label="Anterior">←</button>' +
        '<button class="galeria-flecha next" type="button" data-media="1" aria-label="Siguiente">→</button>' : "";
    g.innerHTML = '<div class="galeria-escenario">' + vista + flechas + "</div>" +
      (m.texto ? '<div class="galeria-texto">' + esc(m.texto) + "</div>" : "") +
      (media.length > 1 ? '<div class="galeria-miniaturas">' + media.map(function (x, i) {
        var mini = x.tipo === "imagen" ? '<img src="' + esc(x.src) + '" alt="">' : "▶";
        return '<button type="button" data-ir="' + i + '" aria-label="' + esc(x.texto || "Elemento " + (i + 1)) + '" aria-current="' + (i === mediaIdx) + '">' + mini + "</button>";
      }).join("") + "</div>" : "");
  }

  function cerrar() {
    modal.hidden = true;
    document.body.classList.remove("sin-scroll");
    history.replaceState(null, "", "#proyectos");
    if (origen) origen.focus({ preventScroll: true });
  }

  function mover(d) {
    var lista = visibles();
    if (lista.indexOf(actual) < 0) lista = D.proyectos;
    var i = (lista.indexOf(actual) + d + lista.length) % lista.length;
    abrir(lista[i].id);
  }

  modal.addEventListener("click", function (e) {
    var t = e.target;
    if (t.closest("[data-cerrar]")) return cerrar();
    var b = t.closest("[data-mover]");
    if (b) return mover(+b.dataset.mover);
    b = t.closest("[data-media]");
    if (b) {
      var n = actual.media.length;
      mediaIdx = (mediaIdx + +b.dataset.media + n) % n;
      return pintarGaleria();
    }
    b = t.closest("[data-ir]");
    if (b) { mediaIdx = +b.dataset.ir; pintarGaleria(); }
  });
  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") cerrar();
    else if (e.key === "ArrowRight" && !/INPUT|VIDEO/.test(e.target.tagName)) mover(1);
    else if (e.key === "ArrowLeft" && !/INPUT|VIDEO/.test(e.target.tagName)) mover(-1);
    else if (e.key === "Tab") {
      var f = $$("button, a[href], video, iframe", caja).filter(function (x) { return x.offsetParent !== null; });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });

  // Enlace directo a un proyecto: /#p/beauty-studio-agente
  var m = location.hash.match(/^#p\/(.+)$/);
  if (m) abrir(decodeURIComponent(m[1]));

  /* ---------- Cabecera que se esconde y aparición al hacer scroll ---------- */
  var ultimo = 0, top = $("#top");
  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    top.classList.toggle("oculta", y > 300 && y > ultimo);
    ultimo = y;
  }, { passive: true });

  $$(".seccion-cabeza, .capacidades, .metodo, .contacto-caja").forEach(function (el) { el.classList.add("revelar"); });
  if ("IntersectionObserver" in window && !reducido) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: .15 });
    $$(".revelar").forEach(function (el) { io.observe(el); });
  } else {
    $$(".revelar").forEach(function (el) { el.classList.add("visible"); });
  }
})();
