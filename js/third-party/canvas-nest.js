'use strict';
!function () {
    var e = document.getElementById('canvas_nest');
    if ('false' != e.getAttribute('mobile') || !/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
        var m, u, n, t, i = document.createElement('canvas'), l = {
                z: h(n = e, 'zIndex', -1),
                o: h(n, 'opacity', 0.5),
                c: h(n, 'color', '0,0,0'),
                n: h(n, 'count', 99)
            }, r = i.getContext('2d'), x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                window.setTimeout(e, 1000 / 45);
            }, o = Math.random, s = {
                x: null,
                y: null,
                max: 20000
            };
        i.style.cssText = 'position:fixed;top:0;left:0;z-index:' + l.z + ';opacity:' + l.o, (t = 'body', document.getElementsByTagName(t))[0].appendChild(i), g(), window.onresize = g, window.onmousemove = function (e) {
            e = e || window.event, s.x = e.clientX, s.y = e.clientY;
        }, window.onmouseout = function () {
            s.x = null, s.y = null;
        };
        for (var w = [], a = 0; l.n > a; a++) {
            var c = o() * m, d = o() * u, y = 2 * o() - 1, f = 2 * o() - 1;
            w.push({
                x: c,
                y: d,
                xa: y,
                ya: f,
                max: 6000
            });
        }
        setTimeout(function () {
            v();
        }, 100);
    }
    function h(e, n, t) {
        return e.getAttribute(n) || t;
    }
    function g() {
        m = i.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, u = i.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }
    function v() {
        r.clearRect(0, 0, m, u);
        var n, t, i, o, a, c, d = [s].concat(w);
        w.forEach(function (e) {
            for (e.x += e.xa, e.y += e.ya, e.xa *= e.x > m || e.x < 0 ? -1 : 1, e.ya *= e.y > u || e.y < 0 ? -1 : 1, r.fillRect(e.x - 0.5, e.y - 0.5, 1, 1), t = 0; t < d.length; t++)
                e !== (n = d[t]) && null !== n.x && null !== n.y && (o = e.x - n.x, a = e.y - n.y, (c = o * o + a * a) < n.max && (n === s && c >= n.max / 2 && (e.x -= 0.03 * o, e.y -= 0.03 * a), i = (n.max - c) / n.max, r.beginPath(), r.lineWidth = i / 2, r.strokeStyle = 'rgba(' + l.c + ',' + (i + 0.2) + ')', r.moveTo(e.x, e.y), r.lineTo(n.x, n.y), r.stroke()));
            d.splice(d.indexOf(e), 1);
        }), x(v);
    }
}();