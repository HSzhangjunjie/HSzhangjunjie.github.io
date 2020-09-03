'use strict';
var _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
    } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
    }, precacheConfig = [["/about/index.html","af43d3a5cea11cb7a213f2e9f46ed82e"],["/archives/2020/08/index.html","2b79df6e255a8d4d53e2de649924c649"],["/archives/2020/09/index.html","c3bac0ada2f4bf9572893f8245e09b91"],["/archives/2020/index.html","3c89cd7694948d6031d263cfd96803fb"],["/archives/2020/page/2/index.html","466cd724bdd62a6ad92eb613b9b8629c"],["/archives/index.html","58fd69929a69a5e72bd992d0fcdd58fd"],["/archives/page/2/index.html","10b1bad5be994693644f6a33854f0228"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Hexo搭建/index.html","95d9f60e1b8d817c598e4d9e5a38345e"],["/categories/Servlet/Filter/index.html","367c377ca3bac91370dd12aaf723d1dd"],["/categories/Servlet/Linster/index.html","482770689c25a0eeae158b27426f516d"],["/categories/Servlet/index.html","4d06d601ffb372194b7a2c8777e3f95c"],["/categories/index.html","0410871efdce9f3be2606169d6b9a357"],["/css/background.css","fc0200e34ae92f610319c213d80a23da"],["/css/index.css","32b238bca4042df7a62afa5af9aef04d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Log.png","368d572cd3d8104378b8631768406b68"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","4442923f405476205aee12d8e4a46080"],["/img/background.jpg","808de16aec8d241f86bfe1cbd450c32b"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/helloworld/helloworld.png","9650bb9aa01071756f6dffa83787c2ff"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/picture.jpg","ab29cecf015264121192d71f55c40bbe"],["/img/servlet/cookie.jpg","e967efe7e998c676a9915360a640c5a3"],["/img/servlet/servlet.jpg","3837590505e62f18ebc93020603ba16e"],["/img/servlet/updown.jpg","3f14f89145f1063cbccc74fdfeb466a5"],["/img/top_img.jpg","e6c71061a929e5f8c56f74533da74636"],["/img/wechat.png","acbf7ae1666081e33897611967428191"],["/index.html","62fb88d0c1f30f7e79db61fb20c0cc65"],["/js/calendar.js","907d847b834110ab638c6ecc2e4648e1"],["/js/languages.js","13f02f1612f2a9c6bf4932ece42bbfe0"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/link/index.html","b385f8db5d2eab4bba0e1e42c14c366f"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","153b4f82454e705c4b0c783d1d3c2b7e"],["/page/2/index.html","92609e4b37b227f8ec010dd4959acef0"],["/posts/cookie/index.html","0ed8ec7b46f2f94ad5213cb346fbdf06"],["/posts/fileload/index.html","8e028f2fa9da96b4e831249b5c79ca2a"],["/posts/filter/index.html","b4dd246c03bb9b179e2cc45dc23aa6ef"],["/posts/hexo_helloworld/index.html","ef662a835e6f79c570f9015eb266af08"],["/posts/linster/index.html","7723d7ae064bc4a3af0bfa40aeb92db0"],["/posts/servlet-1/index.html","c828c353db0c0b7161effa051d2da0fc"],["/posts/servlet-2/index.html","6033ba871cfb657d712c072dfcdb96a8"],["/posts/servlet-3/index.html","520f6f5e1157be6a677d7441dac35836"],["/posts/servlet3/index.html","18adfc155af5f22348b3f88b02588877"],["/posts/servlet4/index.html","4caa01f4171cb16f05c1aa2f806d4208"],["/posts/session/index.html","0da7dd5ede98f8befac80a149812f604"],["/self/Kimbiedark.css","f4a1c8c40077e5b549cfb6e093c79607"],["/tags/Hexo入门/index.html","38093826c6a997b3af6a2ef5eb25785c"],["/tags/index.html","396596a05216ab19ff85a51375e6aa58"],["/tags/后端基础/index.html","39f872a529f9dd7d1eb51f8c7fc8173f"],["/tags/数据交互/index.html","acfa46d4887be146f057fc5a8f054408"],["/tags/零碎知识点/index.html","68dcfa3af225cb1b03ab221fb2167bd2"]], cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : ''), ignoreUrlParametersMatching = [/^utm_/], addDirectoryIndex = function (e, t) {
        var n = new URL(e);
        return '/' === n.pathname.slice(-1) && (n.pathname += t), n.toString();
    }, cleanResponse = function (t) {
        return t.redirected ? ('body' in t ? Promise.resolve(t.body) : t.blob()).then(function (e) {
            return new Response(e, {
                headers: t.headers,
                status: t.status,
                statusText: t.statusText
            });
        }) : Promise.resolve(t);
    }, createCacheKey = function (e, t, n, r) {
        var a = new URL(e);
        return r && a.pathname.match(r) || (a.search += (a.search ? '&' : '') + encodeURIComponent(t) + '=' + encodeURIComponent(n)), a.toString();
    }, isPathWhitelisted = function (e, t) {
        if (0 === e.length)
            return !0;
        var n = new URL(t).pathname;
        return e.some(function (e) {
            return n.match(e);
        });
    }, stripIgnoredUrlParameters = function (e, n) {
        var t = new URL(e);
        return t.hash = '', t.search = t.search.slice(1).split('&').map(function (e) {
            return e.split('=');
        }).filter(function (t) {
            return n.every(function (e) {
                return !e.test(t[0]);
            });
        }).map(function (e) {
            return e.join('=');
        }).join('&'), t.toString();
    }, hashParamName = '_sw-precache', urlsToCacheKeys = new Map(precacheConfig.map(function (e) {
        var t = e[0], n = e[1], r = new URL(t, self.location), a = createCacheKey(r, hashParamName, n, !1);
        return [r.toString(),a];
    }));
function setOfCachedUrls(e) {
    return e.keys().then(function (e) {
        return e.map(function (e) {
            return e.url;
        });
    }).then(function (e) {
        return new Set(e);
    });
}
self.addEventListener('install', function (e) {
    e.waitUntil(caches.open(cacheName).then(function (r) {
        return setOfCachedUrls(r).then(function (n) {
            return Promise.all(Array.from(urlsToCacheKeys.values()).map(function (t) {
                if (!n.has(t)) {
                    var e = new Request(t, { credentials: 'same-origin' });
                    return fetch(e).then(function (e) {
                        if (!e.ok)
                            throw new Error('Request for ' + t + ' returned a response with status ' + e.status);
                        return cleanResponse(e).then(function (e) {
                            return r.put(t, e);
                        });
                    });
                }
            }));
        });
    }).then(function () {
        return self.skipWaiting();
    }));
}), self.addEventListener('activate', function (e) {
    var n = new Set(urlsToCacheKeys.values());
    e.waitUntil(caches.open(cacheName).then(function (t) {
        return t.keys().then(function (e) {
            return Promise.all(e.map(function (e) {
                if (!n.has(e.url))
                    return t.delete(e);
            }));
        });
    }).then(function () {
        return self.clients.claim();
    }));
}), self.addEventListener('fetch', function (t) {
    if ('GET' === t.request.method) {
        var e, n = stripIgnoredUrlParameters(t.request.url, ignoreUrlParametersMatching), r = 'index.html';
        (e = urlsToCacheKeys.has(n)) || (n = addDirectoryIndex(n, r), e = urlsToCacheKeys.has(n));
        0, e && t.respondWith(caches.open(cacheName).then(function (e) {
            return e.match(urlsToCacheKeys.get(n)).then(function (e) {
                if (e)
                    return e;
                throw Error('The cached response that was expected is missing.');
            });
        }).catch(function (e) {
            return console.warn('Couldn\'t serve response for "%s" from cache: %O', t.request.url, e), fetch(t.request);
        }));
    }
}), function (e) {
    if ('object' == ('undefined' == typeof exports ? 'undefined' : _typeof(exports)) && 'undefined' != typeof module)
        module.exports = e();
    else if ('function' == typeof define && define.amd)
        define([], e);
    else {
        ('undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : this).toolbox = e();
    }
}(function () {
    return function o(c, i, s) {
        function f(n, e) {
            if (!i[n]) {
                if (!c[n]) {
                    var t = 'function' == typeof require && require;
                    if (!e && t)
                        return t(n, !0);
                    if (u)
                        return u(n, !0);
                    var r = new Error('Cannot find module \'' + n + '\'');
                    throw r.code = 'MODULE_NOT_FOUND', r;
                }
                var a = i[n] = { exports: {} };
                c[n][0].call(a.exports, function (e) {
                    var t = c[n][1][e];
                    return f(t || e);
                }, a, a.exports, o, c, i, s);
            }
            return i[n].exports;
        }
        for (var u = 'function' == typeof require && require, e = 0; e < s.length; e++)
            f(s[e]);
        return f;
    }({
        1: [function(e,t,n){function s(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var c,i=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:s,fetchAndCache:function(r,a){var t=(a=a||{}).successResponses||i.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&o(a).then(function(n){n.put(r,e).then(function(){var e,t=a.cache||i.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,a=t.maxAgeSeconds,o=t.maxEntries,c=t.name,i=Date.now();return s("Updating LRU order for "+r+". Max entries is "+o+", max age is "+a),f.getDb(c).then(function(e){return f.setTimestampForUrl(e,r,i)}).then(function(e){return f.expireEntries(e,o,a,i)}).then(function(e){s("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){s("Done with cache cleanup.")})}).catch(function(e){s(e)})}.bind(null,r,n,t),c=c?c.then(e):e())})}),e.clone()})},openCache:o,renameCache:function(t,e,n){return s("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return o(e).then(function(e){return e.add(t)})},uncache:function(t,e){return o(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],
        2: [function(e,t,n){var a="sw-toolbox-",o=1,f="store",u="url",h="timestamp",c={};t.exports={getDb:function(e){return e in c||(c[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(a+r,o);n.onupgradeneeded=function(){n.result.createObjectStore(f,{keyPath:u}).createIndex(h,h,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),c[e];var r},setTimestampForUrl:function(r,a,o){return new Promise(function(e,t){var n=r.transaction(f,"readwrite");n.objectStore(f).put({url:a,timestamp:o}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return(c=e,i=t,s=r,i?new Promise(function(e,t){var r=1e3*i,a=[],n=c.transaction(f,"readwrite"),o=n.objectStore(f);o.index(h).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&s-r>t.value[h]){var n=t.value[u];a.push(n),o.delete(n),t.continue()}},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(t){return(r=e,s=n,s?new Promise(function(e,t){var a=[],n=r.transaction(f,"readwrite"),o=n.objectStore(f),c=o.index(h),i=c.count();c.count().onsuccess=function(){var r=i.result;s<r&&(c.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value[u];a.push(n),o.delete(n),r-a.length>s&&t.continue()}})},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,s});var c,i,s}}},{}],
        3: [function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),o=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=o.match(e.request);t?e.respondWith(t(e.request)):o.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(o.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(t){return Promise.all(c.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(e){return a.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],
        4: [function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],
        5: [function(e,t,n){var a=new URL("./",self.location).pathname,o=e("path-to-regexp"),r=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=r,this.handler=n};r.prototype.makeHandler=function(e){var n;if(this.regexp){var r=this.regexp.exec(e);n={},this.keys.forEach(function(e,t){n[e.name]=r[t+1]})}return function(e){return this.handler(e,n,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],
        6: [function(e,t,n){var f=e("./route"),u=e("./helpers"),i=function(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a},a=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(r){a.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),a.prototype.add=function(e,t,n,r){var a;r=r||{},a=t instanceof RegExp?RegExp:(a=r.origin||self.location.origin)instanceof RegExp?a.source:a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var o=new f(e,t,n,r);this.routes.has(a)||this.routes.set(a,new Map);var c=this.routes.get(a);c.has(e)||c.set(e,new Map);var i=c.get(e),s=o.regexp||o.fullUrlRegExp;i.has(s.source)&&u.debug('"'+t+'" resolves to same regex as existing route.'),i.set(s.source,o)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,i(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],o=a&&a.get(e.toLowerCase());if(o){var c=i(o,n);if(0<c.length)return c[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],
        7: [function(e,t,n){var o=e("../options"),c=e("../helpers");t.exports=function(r,e,a){return a=a||{},c.debug("Strategy: cache first ["+r.url+"]",a),c.openCache(a).then(function(e){return e.match(r).then(function(e){var t=a.cache||o.cache,n=Date.now();return c.isResponseFresh(e,t.maxAgeSeconds,n)?e:c.fetchAndCache(r,a)})})}},{"../helpers":1,"../options":4}],
        8: [function(e,t,n){var a=e("../options"),o=e("../helpers");t.exports=function(t,e,r){return r=r||{},o.debug("Strategy: cache only ["+t.url+"]",r),o.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||a.cache,n=Date.now();if(o.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],
        9: [function(e,t,n){var f=e("../helpers"),u=e("./cacheOnly");t.exports=function(c,i,s){return f.debug("Strategy: fastest ["+c.url+"]",s),new Promise(function(t,n){var r=!1,a=[],o=function(e){a.push(e.toString()),r?n(new Error('Both cache and network failed: "'+a.join('", "')+'"')):r=!0},e=function(e){e instanceof Response?t(e):o("No result returned")};f.fetchAndCache(c.clone(),s).then(e,o),u(c,i,s).then(e,o)})}},{"../helpers":1,"./cacheOnly":8}],
        10: [function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],
        11: [function(e,t,n){var u=e("../options"),h=e("../helpers");t.exports=function(c,e,i){var s=(i=i||{}).successResponses||u.successResponses,f=i.networkTimeoutSeconds||u.networkTimeoutSeconds;return h.debug("Strategy: network first ["+c.url+"]",i),h.openCache(i).then(function(e){var t,n,r=[];if(f){var a=new Promise(function(a){t=setTimeout(function(){e.match(c).then(function(e){var t=i.cache||u.cache,n=Date.now(),r=t.maxAgeSeconds;h.isResponseFresh(e,r,n)&&a(e)})},1e3*f)});r.push(a)}var o=h.fetchAndCache(c,i).then(function(e){if(t&&clearTimeout(t),s.test(e.status))return e;throw h.debug("Response was an HTTP error: "+e.statusText,i),n=e,new Error("Bad response")}).catch(function(t){return h.debug("Network or response error, fallback to cache ["+c.url+"]",i),e.match(c).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(o),Promise.race(r)})}},{"../helpers":1,"../options":4}],
        12: [function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],
        13: [function(e,t,n){var r=e("./options"),a=e("./router"),o=e("./helpers"),c=e("./strategies"),i=e("./listeners");o.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:a,options:r,cache:o.cache,uncache:o.uncache,precache:o.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],
        14: [function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],
        15: [function(e,t,n){function o(e,t){for(var n,r=[],a=0,o=0,c="",i=t&&t.delimiter||"/";null!=(n=k.exec(e));){var s=n[0],f=n[1],u=n.index;if(c+=e.slice(o,u),o=u+s.length,f)c+=f[1];else{var h=e[o],l=n[2],d=n[3],p=n[4],m=n[5],b=n[6],g=n[7];c&&(r.push(c),c="");var v=null!=l&&null!=h&&h!==l,x="+"===b||"*"===b,w="?"===b||"*"===b,y=n[2]||i,j=p||m;r.push({name:d||a++,prefix:l||"",delimiter:y,optional:w,repeat:x,partial:v,asterisk:!!g,pattern:j?(E=j,E.replace(/([=!:$\/()])/g,"\\$1")):g?".*":"[^"+R(y)+"]+?"})}}var E;return o<e.length&&(c+=e.substr(o)),c&&r.push(c),r}function l(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(u){for(var h=new Array(u.length),e=0;e<u.length;e++)"object"==_typeof(u[e])&&(h[e]=new RegExp("^(?:"+u[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},a=(t||{}).pretty?l:encodeURIComponent,o=0;o<u.length;o++){var c=u[o];if("string"!=typeof c){var i,s=r[c.name];if(null==s){if(c.optional){c.partial&&(n+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(m(s)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<s.length;f++){if(i=a(s[f]),!h[o].test(i))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(i)+"`");n+=(0===f?c.prefix:c.delimiter)+i}}else{if(i=c.asterisk?encodeURI(s).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):a(s),!h[o].test(i))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+i+'"');n+=c.prefix+i}}else n+=c}return n}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function d(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function c(e,t,n){m(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,o="",c=0;c<e.length;c++){var i=e[c];if("string"==typeof i)o+=R(i);else{var s=R(i.prefix),f="(?:"+i.pattern+")";t.push(i),i.repeat&&(f+="(?:"+s+f+")*"),o+=f=i.optional?i.partial?s+"("+f+")?":"(?:"+s+"("+f+"))?":s+"("+f+")"}}var u=R(n.delimiter||"/"),h=o.slice(-u.length)===u;return r||(o=(h?o.slice(0,-u.length):o)+"(?:"+u+"(?=$))?"),o+=a?"$":r&&h?"":"(?="+u+"|$)",d(new RegExp("^"+o,p(n)),t)}function i(e,t,n){return m(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return d(e,t)}(e,t):m(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(i(e[a],t,n).source);return d(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):(r=t,c(o(e,a=n),r,a));var r,a}var m=e("isarray");t.exports=i,t.exports.parse=o,t.exports.compile=function(e,t){return r(o(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=c;var k=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],
        16: [function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&46<=r||"Chrome"===n&&50<=r)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var a=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return a.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]
    }, {}, [13])(13);
}), toolbox.router.get('/*', toolbox.cacheFirst, { origin: 'https://jie-blog.icu/' });