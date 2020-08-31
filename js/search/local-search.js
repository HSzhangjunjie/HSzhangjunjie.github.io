'use strict';
$(function () {
    var t = !1, e = function () {
            var e;
            $('body').css({
                width: '100%',
                overflow: 'hidden'
            }), $('#local-search').css('display', 'block'), $('#local-search-input input').focus(), $('#search-mask').fadeIn(), t || (e = GLOBAL_CONFIG.localSearch.path, $.ajax({
                url: GLOBAL_CONFIG.root + e,
                dataType: 'xml',
                success: function (e) {
                    var t = $('entry', e).map(function () {
                            return {
                                title: $('title', this).text(),
                                content: $('content', this).text(),
                                url: $('url', this).text()
                            };
                        }).get(), a = $('#local-search-input input')[0], s = $('#local-hits')[0];
                    a.addEventListener('input', function () {
                        var d = '<div class="search-result-list">', p = this.value.trim().toLowerCase().split(/[\s]+/);
                        if (s.innerHTML = '', this.value.trim().length <= 0)
                            $('.local-search-stats__hr').hide();
                        else {
                            var f = 0;
                            t.forEach(function (e) {
                                var a = !0;
                                e.title && '' !== e.title.trim() || (e.title = 'Untitled');
                                var s = e.title.trim().toLowerCase(), c = e.content.trim().replace(/<[^>]+>/g, '').toLowerCase(), t = e.url, i = -1, n = -1, r = -1;
                                if ('' !== s || '' !== c ? p.forEach(function (e, t) {
                                        i = s.indexOf(e), n = c.indexOf(e), i < 0 && n < 0 ? a = !1 : (n < 0 && (n = 0), 0 === t && (r = n));
                                    }) : a = !1, a) {
                                    var l = e.content.trim().replace(/<[^>]+>/g, '');
                                    if (0 <= r) {
                                        var o = r - 30, h = r + 100;
                                        o < 0 && (o = 0), 0 === o && (h = 100), h > l.length && (h = l.length);
                                        var u = l.substring(o, h);
                                        p.forEach(function (e) {
                                            var t = new RegExp(e, 'gi');
                                            u = u.replace(t, '<span class="search-keyword">' + e + '</span>'), s = s.replace(t, '<span class="search-keyword">' + e + '</span>');
                                        }), d += '<div class="local-search__hit-item"><a href="' + t + '" class="search-result-title">' + s + '</a>', f += 1, $('.local-search-stats__hr').show(), '' !== c && (d += '<p class="search-result">' + u + '...</p>');
                                    }
                                    d += '</div>';
                                }
                            }), 0 === f && (d += '<div id="local-search__hits-empty">' + GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/, this.value.trim()) + '</div>'), d += '</div>', s.innerHTML = d, window.pjax && window.pjax.refresh(s);
                        }
                    });
                }
            }), t = !0), document.addEventListener('keydown', function e(t) {
                'Escape' === t.code && (a(), document.removeEventListener('keydown', e));
            });
        }, a = function () {
            $('body').css({
                width: '',
                overflow: ''
            }), $('#local-search').css({ animation: 'search_close .5s' }), setTimeout(function () {
                $('#local-search').css({
                    animation: '',
                    display: 'none'
                });
            }, 500), $('#search-mask').fadeOut();
        }, s = function () {
            $('a.social-icon.search').on('click', e), $('#search-mask, .search-close-button').on('click', a);
        };
    s(), window.addEventListener('pjax:success', function () {
        $('#local-search').is(':visible') && a(), s();
    });
});