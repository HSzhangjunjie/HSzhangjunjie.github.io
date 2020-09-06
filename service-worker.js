'use strict';
var _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
    } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
    }, precacheConfig = [["/about/index.html","98af94ab025498c8f7511c50ae283701"],["/archives/2020/08/index.html","3a3a2073f65923c69f30acbbf4a6cab4"],["/archives/2020/09/index.html","656a92c4a1901aa2580b681b067f4c40"],["/archives/2020/09/page/2/index.html","602b82e3dc16246fd6cb13edd7e8ad5b"],["/archives/2020/index.html","c064fb9f4ccc6e3231c7aeddd45e2721"],["/archives/2020/page/2/index.html","f40a055f38b9a4b721fbeaae86151567"],["/archives/index.html","d18335b5213e5558983ffc130de014e9"],["/archives/page/2/index.html","8ee7159c6b2c6113fbd08d7560193af3"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Hexo搭建/index.html","0a145443440c4a9a3c7a1d38e8381bde"],["/categories/Servlet/Filter/index.html","aefdc7fee9848e33fd8ffd8a7a58c0f1"],["/categories/Servlet/Linster/index.html","4ce374b3c114ad1f0c1891f5ccf0f5ca"],["/categories/Servlet/index.html","7ecaf3c5f49941a476b62bd116bd5d9e"],["/categories/index.html","312842d79cd7835d59892e79a75acfdb"],["/categories/maven/index.html","6f8755a1db5f1d21541e61391c3f6bda"],["/categories/tomcat/index.html","cbc02944fbc8d576c18f4f77da6f47f7"],["/categories/零散知识/index.html","f7eb2f1bf574b84f0d46faa61371e64c"],["/css/background.css","fc0200e34ae92f610319c213d80a23da"],["/css/index.css","32b238bca4042df7a62afa5af9aef04d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Log.png","368d572cd3d8104378b8631768406b68"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","4442923f405476205aee12d8e4a46080"],["/img/background.jpg","808de16aec8d241f86bfe1cbd450c32b"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/helloworld/helloworld.png","9650bb9aa01071756f6dffa83787c2ff"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/maven/maven.jpg","6c1d6323022cd5ce4c431d27b62501e7"],["/img/others/xml.jpg","8a622ec8ff9f4be3c6bfa06c30abba68"],["/img/picture.jpg","ab29cecf015264121192d71f55c40bbe"],["/img/servlet/cookie.jpg","e967efe7e998c676a9915360a640c5a3"],["/img/servlet/servlet.jpg","3837590505e62f18ebc93020603ba16e"],["/img/servlet/updown.jpg","3f14f89145f1063cbccc74fdfeb466a5"],["/img/tomcat/tomcat.jpg","9fae2b402399c046c5bc6a7373c6c251"],["/img/top_img.jpg","e6c71061a929e5f8c56f74533da74636"],["/img/wechat.png","acbf7ae1666081e33897611967428191"],["/index.html","8f795da152645ec5b72183fdffce2fcb"],["/js/calendar.js","907d847b834110ab638c6ecc2e4648e1"],["/js/daovoice.js","8b1e1aaa87e5b64ea65cc5e29cf12c04"],["/js/languages.js","13f02f1612f2a9c6bf4932ece42bbfe0"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/link/index.html","ae18cfbe26de8cc5a9f055544907d3f5"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/messageboard/index.html","c1b7a2e1b8c30029a3b8a0abacbab244"],["/page/2/index.html","ce04ed5ef3307712bc9c47c24729903b"],["/posts/cookie/index.html","8d9561f58512e44460e473f423d8d5de"],["/posts/fileload/index.html","8cec4434e78641522309d4fd922be032"],["/posts/filter/index.html","f40a69cbb1baf0d5497c2701d05f3988"],["/posts/hexo_helloworld/index.html","70818f478ac1503f8eebde6465aebb76"],["/posts/linster/index.html","a815f39cd8fa484bbce14186d3d59efe"],["/posts/maven-config/index.html","34e85e010627e93f624ab12786975aaa"],["/posts/servlet-1/index.html","6b02a6151c41415d319609d247787762"],["/posts/servlet-2/index.html","32d49db1f54179a80e7f694044af608f"],["/posts/servlet-3/index.html","6d63459aae2cdd6d516db1784a551432"],["/posts/servlet3/index.html","8f9204ad0704be0f9336ba35e129fb69"],["/posts/servlet4/index.html","3d172a13b6c91348cc9e3dc2084a4c6d"],["/posts/session/index.html","c34a305fc311a06870ec1eaf180a767b"],["/posts/tomcat-1/index.html","0d5f501fbebc45830333a7a8c18195cd"],["/posts/xml/index.html","a1065b98a661fcf226bb92c49134d994"],["/self/Kimbiedark.css","f4a1c8c40077e5b549cfb6e093c79607"],["/tags/Hexo入门/index.html","856ee702bc20bac6961911909aa1f918"],["/tags/index.html","42a3c7cf9c226a50d70a75d436ea33fd"],["/tags/web基础/index.html","70e64e97d1e7b44bf6f1da806330d669"],["/tags/web基础/page/2/index.html","b76e71a591089629b5618e80681c2053"],["/tags/后端基础/index.html","49647f70001b5db3b9146406d7adc6d1"],["/tags/后端基础/page/2/index.html","faed4825e41c33df8a6ea7a9da1f6e3d"],["/tags/数据交互/index.html","e9e688706eee5ca641f8dce22d621382"],["/tags/环境搭建/index.html","ad005d69f513eeda5bb94c20cb388ab2"],["/tags/零碎知识点/index.html","a81b16e1680b4b131f47437acf70a5bb"]], cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : ''), ignoreUrlParametersMatching = [/^utm_/], addDirectoryIndex = function (e, t) {
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
    return function c(o, i, s) {
        function f(n, e) {
            if (!i[n]) {
                if (!o[n]) {
                    var t = 'function' == typeof require && require;
                    if (!e && t)
                        return t(n, !0);
                    if (u)
                        return u(n, !0);
                    var r = new Error('Cannot find module \'' + n + '\'');
                    throw r.code = 'MODULE_NOT_FOUND', r;
                }
                var a = i[n] = { exports: {} };
                o[n][0].call(a.exports, function (e) {
                    var t = o[n][1][e];
                    return f(t || e);
                }, a, a.exports, c, o, i, s);
            }
            return i[n].exports;
        }
        for (var u = 'function' == typeof require && require, e = 0; e < s.length; e++)
            f(s[e]);
        return f;
    }({
        1: [function(e,t,n){function s(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var o,i=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:s,fetchAndCache:function(r,a){var t=(a=a||{}).successResponses||i.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&c(a).then(function(n){n.put(r,e).then(function(){var e,t=a.cache||i.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,a=t.maxAgeSeconds,c=t.maxEntries,o=t.name,i=Date.now();return s("Updating LRU order for "+r+". Max entries is "+c+", max age is "+a),f.getDb(o).then(function(e){return f.setTimestampForUrl(e,r,i)}).then(function(e){return f.expireEntries(e,c,a,i)}).then(function(e){s("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){s("Done with cache cleanup.")})}).catch(function(e){s(e)})}.bind(null,r,n,t),o=o?o.then(e):e())})}),e.clone()})},openCache:c,renameCache:function(t,e,n){return s("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return c(e).then(function(e){return e.add(t)})},uncache:function(t,e){return c(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],
        2: [function(e,t,n){var a="sw-toolbox-",c=1,f="store",u="url",h="timestamp",o={};t.exports={getDb:function(e){return e in o||(o[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(a+r,c);n.onupgradeneeded=function(){n.result.createObjectStore(f,{keyPath:u}).createIndex(h,h,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),o[e];var r},setTimestampForUrl:function(r,a,c){return new Promise(function(e,t){var n=r.transaction(f,"readwrite");n.objectStore(f).put({url:a,timestamp:c}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return(o=e,i=t,s=r,i?new Promise(function(e,t){var r=1e3*i,a=[],n=o.transaction(f,"readwrite"),c=n.objectStore(f);c.index(h).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&s-r>t.value[h]){var n=t.value[u];a.push(n),c.delete(n),t.continue()}},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(t){return(r=e,s=n,s?new Promise(function(e,t){var a=[],n=r.transaction(f,"readwrite"),c=n.objectStore(f),o=c.index(h),i=o.count();o.count().onsuccess=function(){var r=i.result;s<r&&(o.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value[u];a.push(n),c.delete(n),r-a.length>s&&t.continue()}})},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,s});var o,i,s}}},{}],
        3: [function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(t){return Promise.all(o.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(e){return a.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],
        4: [function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],
        5: [function(e,t,n){var a=new URL("./",self.location).pathname,c=e("path-to-regexp"),r=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n};r.prototype.makeHandler=function(e){var n;if(this.regexp){var r=this.regexp.exec(e);n={},this.keys.forEach(function(e,t){n[e.name]=r[t+1]})}return function(e){return this.handler(e,n,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],
        6: [function(e,t,n){var f=e("./route"),u=e("./helpers"),i=function(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a},a=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(r){a.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),a.prototype.add=function(e,t,n,r){var a;r=r||{},a=t instanceof RegExp?RegExp:(a=r.origin||self.location.origin)instanceof RegExp?a.source:a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var c=new f(e,t,n,r);this.routes.has(a)||this.routes.set(a,new Map);var o=this.routes.get(a);o.has(e)||o.set(e,new Map);var i=o.get(e),s=c.regexp||c.fullUrlRegExp;i.has(s.source)&&u.debug('"'+t+'" resolves to same regex as existing route.'),i.set(s.source,c)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,i(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],c=a&&a.get(e.toLowerCase());if(c){var o=i(c,n);if(0<o.length)return o[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],
        7: [function(e,t,n){var c=e("../options"),o=e("../helpers");t.exports=function(r,e,a){return a=a||{},o.debug("Strategy: cache first ["+r.url+"]",a),o.openCache(a).then(function(e){return e.match(r).then(function(e){var t=a.cache||c.cache,n=Date.now();return o.isResponseFresh(e,t.maxAgeSeconds,n)?e:o.fetchAndCache(r,a)})})}},{"../helpers":1,"../options":4}],
        8: [function(e,t,n){var a=e("../options"),c=e("../helpers");t.exports=function(t,e,r){return r=r||{},c.debug("Strategy: cache only ["+t.url+"]",r),c.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||a.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],
        9: [function(e,t,n){var f=e("../helpers"),u=e("./cacheOnly");t.exports=function(o,i,s){return f.debug("Strategy: fastest ["+o.url+"]",s),new Promise(function(t,n){var r=!1,a=[],c=function(e){a.push(e.toString()),r?n(new Error('Both cache and network failed: "'+a.join('", "')+'"')):r=!0},e=function(e){e instanceof Response?t(e):c("No result returned")};f.fetchAndCache(o.clone(),s).then(e,c),u(o,i,s).then(e,c)})}},{"../helpers":1,"./cacheOnly":8}],
        10: [function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],
        11: [function(e,t,n){var u=e("../options"),h=e("../helpers");t.exports=function(o,e,i){var s=(i=i||{}).successResponses||u.successResponses,f=i.networkTimeoutSeconds||u.networkTimeoutSeconds;return h.debug("Strategy: network first ["+o.url+"]",i),h.openCache(i).then(function(e){var t,n,r=[];if(f){var a=new Promise(function(a){t=setTimeout(function(){e.match(o).then(function(e){var t=i.cache||u.cache,n=Date.now(),r=t.maxAgeSeconds;h.isResponseFresh(e,r,n)&&a(e)})},1e3*f)});r.push(a)}var c=h.fetchAndCache(o,i).then(function(e){if(t&&clearTimeout(t),s.test(e.status))return e;throw h.debug("Response was an HTTP error: "+e.statusText,i),n=e,new Error("Bad response")}).catch(function(t){return h.debug("Network or response error, fallback to cache ["+o.url+"]",i),e.match(o).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(c),Promise.race(r)})}},{"../helpers":1,"../options":4}],
        12: [function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],
        13: [function(e,t,n){var r=e("./options"),a=e("./router"),c=e("./helpers"),o=e("./strategies"),i=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:a,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],
        14: [function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],
        15: [function(e,t,n){function c(e,t){for(var n,r=[],a=0,c=0,o="",i=t&&t.delimiter||"/";null!=(n=k.exec(e));){var s=n[0],f=n[1],u=n.index;if(o+=e.slice(c,u),c=u+s.length,f)o+=f[1];else{var h=e[c],d=n[2],l=n[3],p=n[4],m=n[5],b=n[6],g=n[7];o&&(r.push(o),o="");var v=null!=d&&null!=h&&h!==d,x="+"===b||"*"===b,w="?"===b||"*"===b,y=n[2]||i,j=p||m;r.push({name:l||a++,prefix:d||"",delimiter:y,optional:w,repeat:x,partial:v,asterisk:!!g,pattern:j?(E=j,E.replace(/([=!:$\/()])/g,"\\$1")):g?".*":"[^"+R(y)+"]+?"})}}var E;return c<e.length&&(o+=e.substr(c)),o&&r.push(o),r}function d(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(u){for(var h=new Array(u.length),e=0;e<u.length;e++)"object"==_typeof(u[e])&&(h[e]=new RegExp("^(?:"+u[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},a=(t||{}).pretty?d:encodeURIComponent,c=0;c<u.length;c++){var o=u[c];if("string"!=typeof o){var i,s=r[o.name];if(null==s){if(o.optional){o.partial&&(n+=o.prefix);continue}throw new TypeError('Expected "'+o.name+'" to be defined')}if(m(s)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var f=0;f<s.length;f++){if(i=a(s[f]),!h[c].test(i))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received `'+JSON.stringify(i)+"`");n+=(0===f?o.prefix:o.delimiter)+i}}else{if(i=o.asterisk?encodeURI(s).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):a(s),!h[c].test(i))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+i+'"');n+=o.prefix+i}}else n+=o}return n}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function o(e,t,n){m(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,c="",o=0;o<e.length;o++){var i=e[o];if("string"==typeof i)c+=R(i);else{var s=R(i.prefix),f="(?:"+i.pattern+")";t.push(i),i.repeat&&(f+="(?:"+s+f+")*"),c+=f=i.optional?i.partial?s+"("+f+")?":"(?:"+s+"("+f+"))?":s+"("+f+")"}}var u=R(n.delimiter||"/"),h=c.slice(-u.length)===u;return r||(c=(h?c.slice(0,-u.length):c)+"(?:"+u+"(?=$))?"),c+=a?"$":r&&h?"":"(?="+u+"|$)",l(new RegExp("^"+c,p(n)),t)}function i(e,t,n){return m(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):m(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(i(e[a],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):(r=t,o(c(e,a=n),r,a));var r,a}var m=e("isarray");t.exports=i,t.exports.parse=c,t.exports.compile=function(e,t){return r(c(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=o;var k=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],
        16: [function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&46<=r||"Chrome"===n&&50<=r)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var a=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return a.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]
    }, {}, [13])(13);
}), toolbox.router.get('/*', toolbox.cacheFirst, { origin: 'https://jie-blog.icu/' });