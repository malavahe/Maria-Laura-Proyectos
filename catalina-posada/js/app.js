(function () {
  var D = window.CP_DATA;
  var PRENDAS = window.CP_PRENDAS;
    var $ = function (sel) { return document.querySelector(sel); };

  var estado = { prenda: D.prendas[0].id, tela: D.telas[0].id, familia: "todas" };

  function telaPorId(id) {
    return D.telas.find(function (t) { return t.id === id; });
  }

  // Con foto real: la foto completa, recortada al recuadro.
  // Con textura de muestra (o en la portada): repetida en mosaico.
  function fondo(el, tela, mosaico) {
    if (tela.foto && !mosaico) {
      el.style.backgroundImage = "url(" + tela.foto + ")";
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
    } else {
      el.style.backgroundImage = "url(" + window.CP_mosaicoDe(tela) + ")";
    }
  }

  function el(tag, attrs, hijos) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (hijos || []).forEach(function (h) { n.appendChild(h); });
    return n;
  }

  /* ---------- Portada ---------- */
  fondo($(".hero-tela"), telaPorId(D.portada) || D.telas[0], true);
  if (D.muestra) $("#aviso-muestra").hidden = false;

  /* ---------- Archivo textil ---------- */
  var filtros = $("#filtros");
  D.familias.forEach(function (f) {
    var b = el("button", { type: "button", class: "chip", "aria-pressed": String(f.id === estado.familia), text: f.nombre });
    b.addEventListener("click", function () {
      estado.familia = f.id;
      filtros.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", String(c === b)); });
      document.querySelectorAll("#grid-telas li").forEach(function (li) {
        li.classList.toggle("oculta", f.id !== "todas" && li.dataset.familia !== f.id);
      });
    });
    filtros.appendChild(b);
  });

  var grid = $("#grid-telas");
  D.telas.forEach(function (t) {
    var muestra = el("span");
    fondo(muestra, t);
    var capas = [muestra];
    // Con foto general: se ve la pieza completa y al pasar el cursor, el detalle.
    if (t.pieza) {
      var pieza = el("span", { class: "tela-pieza" });
      pieza.style.backgroundImage = "url(" + t.pieza + ")";
      capas.push(pieza);
    }
    var card = el("button", { type: "button", class: "tela-card", "aria-label": "Ver ficha de " + t.nombre }, [
      el("div", { class: "tela-muestra" }, capas),
      el("div", { class: "tela-info" }, [
        el("span", { class: "tela-nombre", text: t.nombre }),
        el("span", { class: "tela-ref", text: t.ref || "" })
      ]),
      el("div", { class: "tela-ligamento", text: t.ligamento || "" })
    ]);
    card.addEventListener("click", function () { abrirFicha(t); });
    var li = el("li", { class: "revelar" }, [card]);
    li.dataset.familia = t.familia;
    grid.appendChild(li);
  });

  /* ---------- Ficha de tela ---------- */
  var ficha = $("#ficha");
  var fichaTela = null;

  function abrirFicha(t) {
    fichaTela = t;
    var vista = $("#ficha-tela");
    var vistas = $("#ficha-vistas");
    vistas.innerHTML = "";
    vistas.hidden = !t.pieza;
    function mostrar(cual) {
      vista.removeAttribute("style");
      if (cual === "pieza") {
        vista.style.backgroundImage = "url(" + t.pieza + ")";
        vista.style.backgroundSize = "cover";
        vista.style.backgroundPosition = "center";
      } else {
        fondo(vista, t);
      }
      vistas.querySelectorAll("button").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.dataset.vista === cual));
      });
    }
    if (t.pieza) {
      [["pieza", "Pieza completa"], ["detalle", "Detalle"]].forEach(function (v) {
        var b = el("button", { type: "button", class: "chip", text: v[1] });
        b.dataset.vista = v[0];
        b.addEventListener("click", function () { mostrar(v[0]); });
        vistas.appendChild(b);
      });
    }
    mostrar(t.pieza ? "pieza" : "detalle");
    $("#ficha-ref").textContent = t.ref || "Archivo Textil";
    $("#ficha-nombre").textContent = t.nombre;
    var dl = $("#ficha-lista");
    dl.innerHTML = "";
    var colores = t.paleta || t.tejido.urdimbre.concat(t.tejido.trama).filter(function (c, i, a) { return a.indexOf(c) === i; });
    var paleta = el("div", { class: "paleta" }, colores.map(function (c) {
      var i = el("i"); i.style.background = c; return i;
    }));
    if (t.ligamento) {
      dl.appendChild(el("dt", { text: "Técnica" }));
      dl.appendChild(el("dd", { text: t.ligamento }));
    }
    dl.appendChild(el("dt", { text: "Paleta" }));
    dl.appendChild(el("dd", {}, [paleta]));
    ficha.showModal();
  }

  ficha.querySelector(".ficha-cerrar").addEventListener("click", function () { ficha.close(); });
  ficha.addEventListener("click", function (e) { if (e.target === ficha) ficha.close(); });
  $("#ficha-probar").addEventListener("click", function () {
    ficha.close();
    elegirTela(fichaTela.id);
    document.getElementById("showroom").scrollIntoView();
  });

  /* ---------- Showroom ---------- */
  var tabs = $("#sala-prendas");
  D.prendas.forEach(function (p) {
    var b = el("button", { type: "button", role: "tab", class: "prenda-tab", "aria-selected": String(p.id === estado.prenda), text: p.nombre });
    b.dataset.id = p.id;
    b.addEventListener("click", function () {
      estado.prenda = p.id;
      tabs.querySelectorAll(".prenda-tab").forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); });
      pintar();
    });
    tabs.appendChild(b);
  });

  var muestrario = $("#muestrario");
  D.telas.forEach(function (t) {
    var s = el("button", { type: "button", role: "radio", class: "swatch", "aria-checked": String(t.id === estado.tela), "aria-label": t.nombre, title: t.nombre });
    s.dataset.id = t.id;
    fondo(s, t);
    s.addEventListener("click", function () { elegirTela(t.id); });
    muestrario.appendChild(el("div", { class: "swatch-celda" }, [s, el("span", { class: "swatch-nombre", text: t.nombre })]));
  });

  function elegirTela(id) {
    estado.tela = id;
    muestrario.querySelectorAll(".swatch").forEach(function (s) {
      s.setAttribute("aria-checked", String(s.dataset.id === id));
    });
    pintar();
  }

  var uid = 0;

  // Prenda fotografiada: la tela dentro de la máscara, con la luz de la foto encima
  function svgFoto(forma, tela) {
    var n = ++uid;
    var S = forma.escala;
    var w = forma.ancho, h = forma.alto;
    var img = function (href, extra) {
      return '<image href="' + href + '" width="' + w + '" height="' + h + '" ' + (extra || "") + "/>";
    };
    var html =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="' + tela.nombre + '">' +
      "<defs>" +
      '<pattern id="p' + n + '" patternUnits="userSpaceOnUse" width="' + S + '" height="' + S + '">' +
      '<image href="' + window.CP_mosaicoDe(tela) + '" width="' + S + '" height="' + S + '" preserveAspectRatio="xMidYMid slice"/></pattern>' +
      '<mask id="m' + n + '" maskUnits="userSpaceOnUse" x="0" y="0" width="' + w + '" height="' + h + '">' + img(forma.mascara) + "</mask>" +
      "</defs>" +
      img(forma.maniqui) +
      '<g mask="url(#m' + n + ')" style="isolation:isolate">' +
      '<rect width="' + w + '" height="' + h + '" fill="url(#p' + n + ')"/>' +
      img(forma.sombras, 'style="mix-blend-mode:multiply"') +
      img(forma.luces, 'style="mix-blend-mode:screen" opacity=".35"') +
      "</g></svg>";
    var tmp = document.createElement("div");
    tmp.innerHTML = html;
    var svg = tmp.firstChild;
    svg.style.filter = "drop-shadow(0 22px 26px rgba(40,30,20,.16))";
    return svg;
  }

  function svgPrenda(forma, tela) {
    if (forma.foto) return svgFoto(forma, tela);
    var n = ++uid;
    var S = tela.mosaico ? 340 : tela.foto ? 180 : 110;
    var NS = "http://www.w3.org/2000/svg";
    var trazos = function (lista, attrs) {
      return lista.map(function (d) { return '<path d="' + d + '" ' + attrs + "/>"; }).join("");
    };
    var percha = forma.percha
      ? '<g fill="none" stroke="#7a6f64" stroke-width="3" stroke-linecap="round">' +
        '<path d="M200 44 L200 30 C200 18 216 16 216 28"/>' +
        '<path d="M104 86 L200 44 L296 86"/></g>'
      : '<rect x="120" y="26" width="160" height="6" rx="3" fill="#7a6f64"/>' +
        '<path d="M150 32 L150 46 M250 32 L250 46" stroke="#7a6f64" stroke-width="2"/>';
    var botones = forma.botones.map(function (b) {
      return '<circle cx="' + b[0] + '" cy="' + b[1] + '" r="5.5" fill="#2a2521"/>' +
        '<circle cx="' + (b[0] - 1.5) + '" cy="' + (b[1] - 1.5) + '" r="1.6" fill="rgba(255,255,255,.35)"/>';
    }).join("");

    var html =
      '<svg xmlns="' + NS + '" viewBox="0 0 400 520" role="img" aria-label="' + tela.nombre + '">' +
      "<defs>" +
      '<pattern id="p' + n + '" patternUnits="userSpaceOnUse" width="' + S + '" height="' + S + '">' +
      '<image href="' + window.CP_mosaicoDe(tela) + '" width="' + S + '" height="' + S + '" preserveAspectRatio="xMidYMid slice"/></pattern>' +
      '<clipPath id="c' + n + '"><path d="' + forma.silueta + '"/></clipPath>' +
      '<linearGradient id="h' + n + '" x1="0" x2="1">' +
      '<stop offset="0" stop-color="#000" stop-opacity=".32"/><stop offset=".3" stop-color="#000" stop-opacity="0"/>' +
      '<stop offset=".7" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".26"/></linearGradient>' +
      '<linearGradient id="v' + n + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#fff" stop-opacity=".14"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/>' +
      '<stop offset="1" stop-color="#000" stop-opacity=".2"/></linearGradient>' +
      '<filter id="b' + n + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="7"/></filter>' +
      "</defs>" +
      percha +
      '<g clip-path="url(#c' + n + ')" style="isolation:isolate">' +
      '<rect width="400" height="520" fill="url(#p' + n + ')"/>' +
      (forma.interior ? '<path d="' + forma.interior + '" fill="#000" fill-opacity=".38"/>' : "") +
      '<g filter="url(#b' + n + ')" style="mix-blend-mode:multiply">' +
      trazos(forma.pliegues.sombra, 'fill="none" stroke="#000" stroke-opacity=".38" stroke-width="16"') + "</g>" +
      '<g filter="url(#b' + n + ')" style="mix-blend-mode:screen">' +
      trazos(forma.pliegues.brillo, 'fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="12"') + "</g>" +
      '<rect width="400" height="520" fill="url(#h' + n + ')" style="mix-blend-mode:multiply"/>' +
      '<rect width="400" height="520" fill="url(#v' + n + ')"/>' +
      "</g>" +
      trazos(forma.costuras, 'fill="none" stroke="#140f0a" stroke-opacity=".42" stroke-width="1.3" stroke-linecap="round"') +
      '<path d="' + forma.silueta + '" fill="none" stroke="#140f0a" stroke-opacity=".28" stroke-width="1"/>' +
      botones +
      "</svg>";

    var tmp = document.createElement("div");
    tmp.innerHTML = html;
    var svg = tmp.firstChild;
    svg.style.filter = "drop-shadow(0 22px 26px rgba(40,30,20,.18))";
    return svg;
  }

  var escenario = $("#escenario");
  function pintar() {
    var tela = telaPorId(estado.tela);
    var prenda = D.prendas.find(function (p) { return p.id === estado.prenda; });
    var render = D.renders[prenda.id + ":" + tela.id];
    var nuevo;
    if (render) {
      nuevo = el("img", { src: render, alt: prenda.nombre + " en tela " + tela.nombre });
    } else {
      nuevo = svgPrenda(PRENDAS[prenda.id], tela);
    }
    nuevo.classList.add("saliendo");
    Array.prototype.forEach.call(escenario.children, function (viejo) {
      viejo.classList.add("saliendo");
      setTimeout(function () { viejo.remove(); }, 500);
    });
    escenario.appendChild(nuevo);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { nuevo.classList.remove("saliendo"); });
    });
    $("#escenario-pie").textContent = prenda.nombre + " en " + tela.nombre;
  }
  pintar();

  /* ---------- Propuestas privadas ---------- */
  var gp = $("#grid-propuestas");
  D.propuestas.forEach(function (p) {
    var banda = el("div", { class: "propuesta-banda" }, D.telas.map(function (t) {
      var s = el("span"); fondo(s, t, true); return s;
    }));
    gp.appendChild(el("article", { class: "propuesta revelar" }, [
      banda,
      el("h3", { text: p.titulo }),
      el("p", { class: "propuesta-para", text: "Para " + p.para }),
      el("ul", {}, p.piezas.map(function (x) { return el("li", { text: x }); })),
      el("p", { class: "propuesta-estado", text: p.estado })
    ]));
  });

  /* ---------- Movimiento al hacer scroll ---------- */
  var top = $(".top");
  window.addEventListener("scroll", function () {
    top.classList.toggle("con-borde", window.scrollY > 8);
  }, { passive: true });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".revelar").forEach(function (n) { io.observe(n); });

    var enlaces = document.querySelectorAll(".menu a");
    var secciones = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        enlaces.forEach(function (a) {
          a.classList.toggle("activo", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { secciones.observe(s); });
  } else {
    document.querySelectorAll(".revelar").forEach(function (n) { n.classList.add("visible"); });
  }
})();
