(function () {
  var D = window.CP_DATA;
      var $ = function (sel) { return document.querySelector(sel); };

  var estado = { familia: "todas" };

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
      [["pieza", "Normal"], ["detalle", "Macro"]].forEach(function (v) {
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
