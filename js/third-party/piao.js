'use strict';
var _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
    return typeof t;
} : function (t) {
    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
};
'object' === ('undefined' == typeof window ? 'undefined' : _typeof(window)) && (window.Ribbons = function () {
    var e = window, h = document.body, a = document.documentElement, _ = function t() {
            if (1 !== arguments.length)
                return 2 === arguments.length ? Math.random() * (arguments[1] - arguments[0]) + arguments[0] : 0;
            if (Array.isArray(arguments[0])) {
                var i = Math.round(t(0, arguments[0].length - 1));
                return arguments[0][i];
            }
            return t(0, arguments[0]);
        }, n = function (t) {
            var i = Math.max(0, e.innerWidth || a.clientWidth || h.clientWidth || 0), n = Math.max(0, e.innerHeight || a.clientHeight || h.clientHeight || 0), o = Math.max(0, e.pageXOffset || a.scrollLeft || h.scrollLeft || 0) - (a.clientLeft || 0), s = Math.max(0, e.pageYOffset || a.scrollTop || h.scrollTop || 0) - (a.clientTop || 0);
            return {
                width: i,
                height: n,
                ratio: i / n,
                centerx: i / 2,
                centery: n / 2,
                scrollx: o,
                scrolly: s
            };
        }, u = function (t, i) {
            this.x = 0, this.y = 0, this.set(t, i);
        };
    u.prototype = {
        constructor: u,
        set: function (t, i) {
            this.x = t || 0, this.y = i || 0;
        },
        copy: function (t) {
            return this.x = t.x || 0, this.y = t.y || 0, this;
        },
        multiply: function (t, i) {
            return this.x *= t || 1, this.y *= i || 1, this;
        },
        divide: function (t, i) {
            return this.x /= t || 1, this.y /= i || 1, this;
        },
        add: function (t, i) {
            return this.x += t || 0, this.y += i || 0, this;
        },
        subtract: function (t, i) {
            return this.x -= t || 0, this.y -= i || 0, this;
        },
        clampX: function (t, i) {
            return this.x = Math.max(t, Math.min(this.x, i)), this;
        },
        clampY: function (t, i) {
            return this.y = Math.max(t, Math.min(this.y, i)), this;
        },
        flipX: function () {
            return this.x *= -1, this;
        },
        flipY: function () {
            return this.y *= -1, this;
        }
    };
    var t = function (t) {
        this._canvas = null, this._context = null, this._sto = null, this._width = 0, this._height = 0, this._scroll = 0, this._ribbons = [], this._options = {
            colorSaturation: '80%',
            colorBrightness: '60%',
            colorAlpha: 0.65,
            colorCycleSpeed: 6,
            verticalPosition: 'center',
            horizontalSpeed: 150,
            ribbonCount: 5,
            strokeSize: 5,
            parallaxAmount: -0.5,
            animateSections: !0
        }, this._onDraw = this._onDraw.bind(this), this._onResize = this._onResize.bind(this), this._onScroll = this._onScroll.bind(this), this.setOptions(t), this.init();
    };
    return t.prototype = {
        constructor: t,
        setOptions: function (t) {
            if ('object' === (void 0 === t ? 'undefined' : _typeof(t)))
                for (var i in t)
                    t.hasOwnProperty(i) && (this._options[i] = t[i]);
        },
        init: function () {
            try {
                this._canvas = document.createElement('canvas'), this._canvas.style.display = 'block', this._canvas.style.position = 'fixed', this._canvas.style.margin = '0', this._canvas.style.padding = '0', this._canvas.style.border = '0', this._canvas.style.outline = '0', this._canvas.style.left = '0', this._canvas.style.top = '0', this._canvas.style.width = '100%', this._canvas.style.height = '100%', this._canvas.style['z-index'] = '-1', this._onResize(), this._context = this._canvas.getContext('2d'), this._context.clearRect(0, 0, this._width, this._height), this._context.globalAlpha = this._options.colorAlpha, window.addEventListener('resize', this._onResize), window.addEventListener('scroll', this._onScroll), document.body.appendChild(this._canvas);
            } catch (t) {
                return void console.warn('Canvas Context Error: ' + t.toString());
            }
            this._onDraw();
        },
        addRibbon: function () {
            var t = 5 < Math.round(_(1, 9)) ? 'right' : 'left', i = 1000, n = this._width + 200, o = 0, s = 0, e = 'right' === t ? -200 : n, h = Math.round(_(0, this._height));
            /^(top|min)$/i.test(this._options.verticalPosition) ? h = 200 : /^(middle|center)$/i.test(this._options.verticalPosition) ? h = this._height / 2 : /^(bottom|max)$/i.test(this._options.verticalPosition) && (h = this._height - 200);
            for (var a = [], r = new u(e, h), l = new u(e, h), c = null, p = Math.round(_(0, 360)), d = 0; !(i <= 0);) {
                if (i--, o = Math.round((1 * Math.random() - 0.2) * this._options.horizontalSpeed), s = Math.round((1 * Math.random() - 0.5) * (0.25 * this._height)), (c = new u()).copy(l), 'right' === t) {
                    if (c.add(o, s), l.x >= n)
                        break;
                } else if ('left' === t && (c.subtract(o, s), l.x <= -200))
                    break;
                a.push({
                    point1: new u(r.x, r.y),
                    point2: new u(l.x, l.y),
                    point3: c,
                    color: p,
                    delay: d,
                    dir: t,
                    alpha: 0,
                    phase: 0
                }), r.copy(l), l.copy(c), d += 4, p += this._options.colorCycleSpeed;
            }
            this._ribbons.push(a);
        },
        _drawRibbonSection: function (t) {
            if (t) {
                if (1 <= t.phase && t.alpha <= 0)
                    return !0;
                if (t.delay <= 0) {
                    if (t.phase += 0.02, t.alpha = 1 * Math.sin(t.phase), t.alpha = t.alpha <= 0 ? 0 : t.alpha, t.alpha = 1 <= t.alpha ? 1 : t.alpha, this._options.animateSections) {
                        var i = 0.1 * Math.sin(1 + t.phase * Math.PI / 2);
                        'right' === t.dir ? (t.point1.add(i, 0), t.point2.add(i, 0), t.point3.add(i, 0)) : (t.point1.subtract(i, 0), t.point2.subtract(i, 0), t.point3.subtract(i, 0)), t.point1.add(0, i), t.point2.add(0, i), t.point3.add(0, i);
                    }
                } else
                    t.delay -= 0.5;
                var n = this._options.colorSaturation, o = this._options.colorBrightness, s = 'hsla(' + t.color + ', ' + n + ', ' + o + ', ' + t.alpha + ' )';
                this._context.save(), 0 !== this._options.parallaxAmount && this._context.translate(0, this._scroll * this._options.parallaxAmount), this._context.beginPath(), this._context.moveTo(t.point1.x, t.point1.y), this._context.lineTo(t.point2.x, t.point2.y), this._context.lineTo(t.point3.x, t.point3.y), this._context.fillStyle = s, this._context.fill(), 0 < this._options.strokeSize && (this._context.lineWidth = this._options.strokeSize, this._context.strokeStyle = s, this._context.lineCap = 'round', this._context.stroke()), this._context.restore();
            }
            return !1;
        },
        _onDraw: function () {
            for (var t = 0, i = this._ribbons.length; t < i; ++t)
                this._ribbons[t] || this._ribbons.splice(t, 1);
            this._context.clearRect(0, 0, this._width, this._height);
            for (var n = 0; n < this._ribbons.length; ++n) {
                for (var o = this._ribbons[n], s = o.length, e = 0, h = 0; h < s; ++h)
                    this._drawRibbonSection(o[h]) && e++;
                s <= e && (this._ribbons[n] = null);
            }
            this._ribbons.length < this._options.ribbonCount && this.addRibbon(), requestAnimationFrame(this._onDraw);
        },
        _onResize: function (t) {
            var i = n(t);
            this._width = i.width, this._height = i.height, this._canvas && (this._canvas.width = this._width, this._canvas.height = this._height, this._context && (this._context.globalAlpha = this._options.colorAlpha));
        },
        _onScroll: function (t) {
            var i = n(t);
            this._scroll = i.scrolly;
        }
    }, t;
}());
var cn = document.getElementById('ribbon_piao'), mb = cn.getAttribute('mobile');
'false' == mb && /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) || new Ribbons({
    colorSaturation: '60%',
    colorBrightness: '50%',
    colorAlpha: 0.5,
    colorCycleSpeed: 5,
    verticalPosition: 'random',
    horizontalSpeed: 200,
    ribbonCount: 3,
    strokeSize: 0,
    parallaxAmount: -0.2,
    animateSections: !0
});