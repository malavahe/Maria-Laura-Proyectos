/*
 * Escena 3D de la portada: figuras brillantes con los colores de la paleta
 * que flotan y siguen el puntero. Si three.js no carga, queda el fondo CSS.
 */
(function () {
  "use strict";
  var canvas = document.getElementById("escena");
  var hero = document.getElementById("inicio");
  if (!canvas || !window.THREE) return;
  var T = window.THREE;
  var reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var renderer;
  try {
    renderer = new T.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  } catch (e) { return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputEncoding = T.sRGBEncoding;

  var escena = new T.Scene();
  var camara = new T.PerspectiveCamera(35, 1, .1, 100);
  camara.position.set(0, 0, 14);

  escena.add(new T.HemisphereLight(0xffffff, 0xE7BEF8, .9));
  var sol = new T.DirectionalLight(0xffffff, 1.1);
  sol.position.set(5, 8, 6);
  escena.add(sol);
  var rosa = new T.PointLight(0xF2619C, 1.2, 30);
  rosa.position.set(-6, -3, 5);
  escena.add(rosa);

  function material(color) {
    return new T.MeshPhysicalMaterial({
      color: color, roughness: .28, metalness: .05, clearcoat: 1, clearcoatRoughness: .15
    });
  }

  var grupo = new T.Group();
  escena.add(grupo);
  var figuras = [
    { g: new T.TorusKnotGeometry(1.1, .38, 160, 24), c: 0xF2619C, p: [3.4, 1.0, 0], s: 1 },
    { g: new T.SphereGeometry(1.15, 64, 64), c: 0x93ABD9, p: [5.6, -2.2, -1], s: 1 },
    { g: new T.TorusGeometry(.9, .34, 32, 80), c: 0xEDE986, p: [1.6, -2.6, 1], s: 1 },
    { g: new T.IcosahedronGeometry(.8, 0), c: 0xE7BEF8, p: [6.2, 2.6, -2], s: 1 },
    { g: new T.SphereGeometry(.45, 48, 48), c: 0xEDE986, p: [1.2, 2.8, -1], s: 1 },
    { g: new T.OctahedronGeometry(.55, 0), c: 0xF2619C, p: [7.4, -.2, -3], s: 1 },
    { g: new T.CylinderGeometry(.35, .35, 1.4, 48), c: 0x93ABD9, p: [.4, .2, -2], s: 1 }
  ].map(function (f, i) {
    var m = new T.Mesh(f.g, material(f.c));
    m.position.set(f.p[0], f.p[1], f.p[2]);
    m.userData = { base: f.p.slice(), fase: i * 1.3, vel: .3 + (i % 3) * .12 };
    m.rotation.set(Math.random() * 3, Math.random() * 3, 0);
    grupo.add(m);
    return m;
  });

  var puntero = { x: 0, y: 0 }, suave = { x: 0, y: 0 };
  window.addEventListener("pointermove", function (e) {
    puntero.x = e.clientX / window.innerWidth - .5;
    puntero.y = e.clientY / window.innerHeight - .5;
  }, { passive: true });

  function ajustar() {
    var w = hero.clientWidth, h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camara.aspect = w / h;
    camara.updateProjectionMatrix();
    // En pantallas angostas las figuras se corren detrás y arriba del texto.
    var angosta = w < 760;
    grupo.position.set(angosta ? -2.6 : 0, angosta ? 2.4 : 0, angosta ? -3 : 0);
    grupo.scale.setScalar(angosta ? .8 : 1);
  }
  window.addEventListener("resize", ajustar);
  ajustar();

  var visible = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }).observe(hero);
  }

  var reloj = new T.Clock();
  function cuadro() {
    requestAnimationFrame(cuadro);
    if (!visible) return;
    var t = reloj.getElapsedTime();
    suave.x += (puntero.x - suave.x) * .05;
    suave.y += (puntero.y - suave.y) * .05;
    figuras.forEach(function (m) {
      var u = m.userData;
      m.position.y = u.base[1] + Math.sin(t * u.vel + u.fase) * .35;
      m.rotation.x += .003 + u.vel * .004;
      m.rotation.y += .004;
    });
    grupo.rotation.y = suave.x * .35;
    grupo.rotation.x = suave.y * .25;
    renderer.render(escena, camara);
  }

  if (reducido) {
    renderer.render(escena, camara);
  } else {
    cuadro();
  }
  hero.classList.add("con-3d");
})();
