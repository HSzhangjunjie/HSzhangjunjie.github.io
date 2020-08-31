'use strict';
!function (e, r, t) {
    var o, i = [];
    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
        setTimeout(e, 1000 / 60);
    }, function (t) {
        var a = r.createElement('style');
        a.type = 'text/css';
        try {
            a.appendChild(r.createTextNode(t));
        } catch (e) {
            a.styleSheet.cssText = t;
        }
        r.getElementsByTagName('head')[0].appendChild(a);
    }('.heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: \'\';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}'), o = 'function' == typeof e.onclick && e.onclick, e.onclick = function (e) {
        var t, a;
        o && o(), t = e, (a = r.createElement('div')).className = 'heart', i.push({
            el: a,
            x: t.clientX - 5,
            y: t.clientY - 5,
            scale: 1,
            alpha: 1,
            color: 'rgb(' + ~~(255 * Math.random()) + ',' + ~~(255 * Math.random()) + ',' + ~~(255 * Math.random()) + ')'
        }), r.body.appendChild(a);
    }, function e() {
        for (var t = 0; t < i.length; t++)
            i[t].alpha <= 0 ? (r.body.removeChild(i[t].el), i.splice(t, 1)) : (i[t].y--, i[t].scale += 0.004, i[t].alpha -= 0.013, i[t].el.style.cssText = 'left:' + i[t].x + 'px;top:' + i[t].y + 'px;opacity:' + i[t].alpha + ';transform:scale(' + i[t].scale + ',' + i[t].scale + ') rotate(45deg);background:' + i[t].color + ';z-index:99999');
        requestAnimationFrame(e);
    }();
}(window, document);