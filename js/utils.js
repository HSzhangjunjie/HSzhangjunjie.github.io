'use strict';
var btf = {
    debounce: function (i, o, a) {
        var r = void 0;
        return function () {
            var t = this, e = arguments, n = a && !r;
            clearTimeout(r), r = setTimeout(function () {
                r = null, a || i.apply(t, e);
            }, o), n && i.apply(t, e);
        };
    },
    throttle: function (n, i, o) {
        var a = void 0, r = void 0, l = void 0, c = 0;
        o || (o = {});
        var u = function () {
            c = !1 === o.leading ? 0 : new Date().getTime(), a = null, n.apply(r, l), a || (r = l = null);
        };
        return function () {
            var t = new Date().getTime();
            c || !1 !== o.leading || (c = t);
            var e = i - (t - c);
            r = this, l = arguments, e <= 0 || i < e ? (a && (clearTimeout(a), a = null), c = t, n.apply(r, l), a || (r = l = null)) : a || !1 === o.trailing || (a = setTimeout(u, e));
        };
    },
    sidebarPaddingR: function () {
        var t = window.innerWidth, e = document.body.clientWidth, n = t - e;
        t !== e && $('body').css('padding-right', n);
    },
    scrollToDest: function (t) {
        var e = $(t).offset().top, n = void 0;
        n = $(window).scrollTop() > e ? 65 : 0, $('body,html').animate({ scrollTop: e - n });
    },
    snackbarShow: function (t, e, n) {
        var i = void 0 !== e && e, o = void 0 !== n ? n : 2000, a = GLOBAL_CONFIG.Snackbar.position, r = 'light' === document.documentElement.getAttribute('data-theme') ? GLOBAL_CONFIG.Snackbar.bgLight : GLOBAL_CONFIG.Snackbar.bgDark;
        Snackbar.show({
            text: t,
            backgroundColor: r,
            showAction: i,
            duration: o,
            pos: a
        });
    },
    initJustifiedGallery: function (t) {
        t.each(function (t, e) {
            $(this).is(':visible') && $(this).justifiedGallery({
                rowHeight: 220,
                margins: 4
            });
        });
    },
    diffDate: function (t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = new Date(), i = new Date(t), o = n.getTime() - i.getTime(), a = Math.floor(o / 86400000);
        return e ? o <= 3600000 ? GLOBAL_CONFIG.date_suffix.one_hour : o < 86400000 ? Math.floor(o / 3600000) + ' ' + GLOBAL_CONFIG.date_suffix.hours : 1 <= a || a < 365 ? a + ' ' + GLOBAL_CONFIG.date_suffix.day : t.toLocaleDateString().replace(/\//g, '-') : a;
    },
    loadComment: function (t, e) {
        if ('IntersectionObserver' in window) {
            var n = new IntersectionObserver(function (t) {
                t[0].isIntersecting && (e(), n.disconnect());
            }, { threshold: [0] });
            n.observe(t);
        } else
            e();
    }
};