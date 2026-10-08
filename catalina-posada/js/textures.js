/*
 * Texturas de muestra tejidas hilo por hilo en un canvas.
 * Son repetibles en mosaico (el patrón cierra en los bordes) y solo se usan
 * mientras una tela no tenga foto real.
 */
(function () {
  var SIZE = 256;   // px del lienzo
  var CELL = 4;     // px por cruce de hilos
  var N = SIZE / CELL;
  var cache = {};

  function hash(n) {
    var x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  }

  function hexToRgb(hex) {
    var v = parseInt(hex.slice(1), 16);
    return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
  }

  function shade(rgb, k) {
    return "rgb(" + rgb.map(function (c) {
      return Math.max(0, Math.min(255, Math.round(c * k)));
    }).join(",") + ")";
  }

  // true si el hilo de urdimbre (vertical) queda arriba en el cruce i, j
  function urdimbreArriba(tipo, i, j) {
    switch (tipo) {
      case "sarga":
      case "cuadros":
      case "pata":
        return ((i + j) % 4) < 2;
      case "espiga":
        var d = (i % 16) < 8 ? i + j : i - j;
        return (((d % 4) + 4) % 4) < 2;
      default:
        return ((i + j) % 2) === 0;
    }
  }

  function seq(lista, k, rep) {
    return lista[Math.floor(k / rep) % lista.length];
  }

  function generar(tejido) {
    var key = JSON.stringify(tejido);
    if (cache[key]) return cache[key];

    var canvas = document.createElement("canvas");
    canvas.width = canvas.height = SIZE;
    var ctx = canvas.getContext("2d");
    var tipo = tejido.tipo;
    var rep = tipo === "pata" ? 4 : (tipo === "cuadros" || tipo === "rayas") ? 2 : 1;

    var urd = tejido.urdimbre.map(hexToRgb);
    var tra = tejido.trama.map(hexToRgb);

    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        var arriba = urdimbreArriba(tipo, i, j);
        var color = arriba ? seq(urd, i, rep) : seq(tra, j, rep);
        // cada hilo tiene su propio grosor y tono, como en un telar real
        var irregular = arriba ? hash(i) : hash(j + 1000);
        var k = 0.9 + irregular * 0.16;
        var x = i * CELL, y = j * CELL;

        ctx.fillStyle = shade(color, k * 0.78);
        ctx.fillRect(x, y, CELL, CELL);
        ctx.fillStyle = shade(color, k);
        if (arriba) {
          ctx.fillRect(x + 0.6, y, CELL - 1.2, CELL);
          ctx.fillStyle = shade(color, k * 1.08);
          ctx.fillRect(x + 1.4, y, 1, CELL);
        } else {
          ctx.fillRect(x, y + 0.6, CELL, CELL - 1.2);
          ctx.fillStyle = shade(color, k * 1.08);
          ctx.fillRect(x, y + 1.4, CELL, 1);
        }
      }
    }

    if (tipo === "boucle") {
      // nudos de hilo rizado, repetidos en los bordes para que cierre el mosaico
      for (var n = 0; n < 420; n++) {
        var bx = hash(n * 3.1) * SIZE, by = hash(n * 7.7) * SIZE;
        var r = 1.5 + hash(n * 1.3) * 3.2;
        var c = n % 3 === 0 ? tra[0] : urd[0];
        var g = ctx.createRadialGradient(bx - r * 0.3, by - r * 0.3, 0, bx, by, r);
        g.addColorStop(0, shade(c, 1.1));
        g.addColorStop(1, shade(c, 0.78));
        ctx.fillStyle = g;
        [-SIZE, 0, SIZE].forEach(function (ox) {
          [-SIZE, 0, SIZE].forEach(function (oy) {
            ctx.beginPath();
            ctx.arc(bx + ox, by + oy, r, 0, Math.PI * 2);
            ctx.fill();
          });
        });
      }
    }

    cache[key] = canvas.toDataURL("image/png");
    return cache[key];
  }

  // Devuelve la imagen a usar para una tela: su foto o la textura de muestra.
  window.CP_texturaDe = function (tela) {
    return tela.foto ? tela.foto : generar(tela.tejido);
  };
})();
