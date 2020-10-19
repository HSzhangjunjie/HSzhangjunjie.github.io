'use strict';
var _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
    return typeof t;
} : function (t) {
    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
};
$(function () {
    var i = $('#site-name').width(), a = $('#menus').width(), n = $('#sidebar').width() || 300, o = function (t) {
            var e = $('#nav');
            0 === t || (1 === t ? i + a > e.width() - n - 30 : i + a > e.width() - 30) ? e.addClass('hide-menu') : e.removeClass('hide-menu');
        }, l = function () {
            $('#sidebar').removeClass('tocOpenPc').animate({ left: '-300px' }, 400), $('#menus').animate({ paddingRight: 0 }, 400), $('#body-wrap').animate({ paddingLeft: 0 }, 400), $('#nav').hasClass('hide-menu') && setTimeout(function () {
                o(2);
            }, 400);
        }, r = function () {
            $('#nav').hasClass('hide-menu') || o(1), $('#sidebar').addClass('tocOpenPc').animate({ left: 0 }, 400), $('#menus').animate({ paddingRight: 300 }, 400), $('#body-wrap').animate({ paddingLeft: 300 }, 400);
        }, s = function () {
            var t = GLOBAL_CONFIG.highlight.highlightCopy, e = GLOBAL_CONFIG.highlight.highlightLang, i = GLOBAL_CONFIG_SITE.isHighlightShrink, a = t || e || void 0 !== i, n = 'highlighjs' === GLOBAL_CONFIG.highlight.plugin ? $('figure.highlight') : $('pre[class*="language-"');
            if (a && n.length) {
                var o = 'prismjs' === GLOBAL_CONFIG.highlight.plugin, s = '', c = '', l = !0 === i ? 'closed' : '';
                if (void 0 !== i && (s = '<i class="fas fa-angle-down expand ' + l + '"></i>'), t && (c = '<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'), e)
                    o ? n.each(function () {
                        var t = $(this), e = '<div class="code-lang">' + (void 0 !== t.attr('data-language') ? t.attr('data-language') : 'Code') + '</div>';
                        t.wrap('<figure class="highlight"></figure>').before('<div class="highlight-tools ' + l + '">' + (s + e + c) + '</div>');
                    }) : n.each(function (t, e) {
                        var i = $(this), a = i.attr('class').split(' ')[1];
                        'plain' !== a && void 0 !== a || (a = 'Code');
                        var n = '<div class="code-lang">' + a + '</div>';
                        i.prepend('<div class="highlight-tools ' + l + '">' + (s + n + c) + '</div>');
                    });
                else {
                    var r = '<div class="highlight-tools ' + l + '">' + (s + c) + '</div>';
                    o ? n.wrap('<figure class="highlight"></figure>').before(r) : n.prepend(r);
                }
                if (void 0 !== i && $('.highlight-tools >.expand').on('click', function () {
                        var t = $(this), e = t.parent().nextAll();
                        t.toggleClass('closed'), e.is(':visible') ? e.css('display', 'none') : e.css('display', 'block');
                    }), t) {
                    $('.highlight-tools >.copy-button').on('click', function () {
                        var t = $(this).parents('figure.highlight');
                        t.addClass('copy-true');
                        var e = window.getSelection(), i = document.createRange();
                        o ? i.selectNodeContents(t.find('> pre code')[0]) : i.selectNodeContents(t.find('table .code pre')[0]), e.removeAllRanges(), e.addRange(i);
                        var a;
                        e.toString();
                        a = this, document.queryCommandSupported && document.queryCommandSupported('copy') ? (document.execCommand('copy'), void 0 !== GLOBAL_CONFIG.Snackbar ? btf.snackbarShow(GLOBAL_CONFIG.copy.success) : $(a).prev('.copy-notice').text(GLOBAL_CONFIG.copy.success).animate({ opacity: 1 }, 450, function () {
                            setTimeout(function () {
                                $(a).prev('.copy-notice').animate({ opacity: 0 }, 650);
                            }, 400);
                        })) : void 0 !== GLOBAL_CONFIG.Snackbar ? btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport) : $(a).prev('.copy-notice').text(GLOBAL_CONFIG.copy.noSupport), e.removeAllRanges(), t.removeClass('copy-true');
                    });
                }
            }
        };
    var c = !1, d = function () {
            var o = 0, s = !0, c = $('#rightside'), l = $('#nav'), r = 'function' == typeof chatBtnHide, d = 'function' == typeof chatBtnShow;
            $(window).scroll(btf.throttle(function (t) {
                var e, i, a = $(this).scrollTop(), n = (i = o < (e = a), o = e, i);
                56 < a ? (n ? (l.hasClass('visible') && l.removeClass('visible'), d && !0 === s && (chatBtnHide(), s = !1)) : (l.hasClass('visible') || l.addClass('visible'), r && !1 === s && (window.chatBtnShow(), s = !0)), l.addClass('fixed'), '0' === c.css('opacity') && c.css({
                    opacity: '1',
                    transform: 'translateX(-38px)'
                })) : (0 === a && l.removeClass('fixed').removeClass('visible'), c.css({
                    opacity: '',
                    transform: ''
                }));
            }, 200));
        }, h = function () {
            $('.toc-child').hide(), $(window).scroll(btf.throttle(function (t) {
                var e = $(this).scrollTop();
                i(e), a(e), n(e);
            }, 100));
            var i = function (t) {
                    var e = $('#article-container'), i = e.height(), a = $(window).height(), n = (t - e.offset().top) / (a < i ? i - a : $(document).height() - a), o = Math.round(100 * n), s = 100 < o ? 100 : o <= 0 ? 0 : o;
                    $('#sidebar .progress-num').text(s), $('#sidebar .sidebar-toc__progress-bar').animate({ width: s + '%' }, 100);
                }, r = GLOBAL_CONFIG.isanchor, d = 5 <= GLOBAL_CONFIG.hexoversion.split('.')[0], a = function (e) {
                    if (0 === $('.toc-link').length)
                        return !1;
                    var t = $('#article-container').find('h1,h2,h3,h4,h5,h6'), i = '';
                    t.each(function () {
                        var t = $(this);
                        e > t.offset().top - 70 && (i = d ? '#' + encodeURI($(this).attr('id')) : '#' + $(this).attr('id'));
                    }), '' === i && ($('.toc-link').removeClass('active'), $('.toc-child').hide());
                    var a, n, o = $('.toc-link.active');
                    if (i && o.attr('href') !== i) {
                        r && (n = i, window.history.replaceState && n !== window.location.hash && window.history.replaceState(void 0, void 0, n)), $('.toc-link').removeClass('active');
                        var s = $('.toc-link[href="' + i + '"]');
                        s.addClass('active');
                        var c = s.parents('.toc-child'), l = 0 < c.length ? c.last() : s;
                        (a = l.closest('.toc-item').find('.toc-child')).is(':visible') || a.fadeIn(400), l.closest('.toc-item').siblings('.toc-item').find('.toc-child').hide();
                    }
                }, n = function (t) {
                    if ($('.toc-link').hasClass('active')) {
                        var e = $('.active').offset().top, i = $('#sidebar .sidebar-toc__content').scrollTop();
                        e > t + $(window).height() - 100 && $('#sidebar .sidebar-toc__content').scrollTop(i + 100), e < t + 100 && $('#sidebar .sidebar-toc__content').scrollTop(i - 100);
                    }
                };
        }, t = $('#rightside');
    if (t.on('click', '#readmode', function () {
            $('body').toggleClass('read-mode');
        }), $('#darkmode').length) {
        t.on('click', '#darkmode', function () {
            'light' == ('dark' === document.documentElement.getAttribute('data-theme') ? 'dark' : 'light') ? (activateDarkMode(), saveToLocal.set('theme', 'dark', 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (activateLightMode(), saveToLocal.set('theme', 'light', 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)), 'function' == typeof utterancesTheme && utterancesTheme(), 'object' === ('undefined' == typeof FB ? 'undefined' : _typeof(FB)) && window.loadFBComment(), window.DISQUS && $('#disqus_thread').children().length && setTimeout(function () {
                return window.disqusReset();
            }, 200);
        });
    }
    t.on('click', '#rightside_config', function () {
        return $('#rightside-config-hide').toggleClass('show');
    }), t.on('click', '#go-up', function () {
        return btf.scrollToDest('body');
    });
    var f, u = function () {
            $('#article-container .tabs').find('.tab > button:not(.tab-to-top)').on('click', function (t) {
                var e = $(this), i = e.parent();
                if (!i.hasClass('active')) {
                    var a = e.parents('.nav-tabs').next();
                    i.siblings('.active').removeClass('active'), i.addClass('active');
                    var n = e.attr('data-href');
                    a.find('> .tab-item-content').removeClass('active'), a.find('> ' + n).addClass('active');
                    var o = a.find(n).find('.justified-gallery');
                    0 < o.length && btf.initJustifiedGallery(o);
                }
            });
        }, p = function () {
            $('#article-container .tabs .tab-to-top').on('click', function () {
                btf.scrollToDest($(this).parents('.tabs'));
            });
        };
    window.refreshFn = function () {
        var t, e;
        window.innerWidth < 768 ? o(0) : o(2), $('#nav').css({
            opacity: '1',
            animation: 'headerNoOpacity 1s'
        }), GLOBAL_CONFIG_SITE.isPost && (1024 < window.innerWidth && $('#toggle-sidebar').hasClass('on') && setTimeout(function () {
            r();
        }, 400), $('#toggle-sidebar').on('click', function () {
            var t = $(this).hasClass('on');
            t ? $(this).removeClass('on') : $(this).addClass('on'), t ? l() : r();
        }), GLOBAL_CONFIG_SITE.isSidebar && h(), void 0 !== GLOBAL_CONFIG.noticeOutdate && function () {
            var t = GLOBAL_CONFIG.noticeOutdate, e = btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);
            if (e >= t.limitDay) {
                var i = '<div class="post-outdate-notice">' + t.messagePrev + ' ' + e + ' ' + t.messageNext + '</div>';
                'top' === t.position ? $('#article-container').prepend(i) : $('#article-container').append(i);
            }
        }()), function () {
            var e = $('#toggle-menu'), i = $('#mobile-sidebar-menus'), a = $('#mobile-toc-button'), n = $('#menu_mask'), o = $('body'), s = $('#sidebar');
            function t(t) {
                btf.sidebarPaddingR(), o.css('overflow', 'hidden'), n.fadeIn(), 'menu' === t && (e.removeClass('close').addClass('open'), i.addClass('open')), 'toc' === t && (a.removeClass('close').addClass('open'), s.addClass('tocOpenMobile').css({
                    transform: 'translate3d(-100%,0,0)',
                    left: ''
                }));
            }
            function c(t) {
                o.css({
                    overflow: '',
                    'padding-right': ''
                }), n.fadeOut(), 'menu' === t && (e.removeClass('open').addClass('close'), i.removeClass('open')), 'toc' === t && (a.removeClass('open').addClass('close'), s.removeClass('tocOpenMobile').css({ transform: '' }));
            }
            e.on('click', function () {
                t('menu');
            }), a.on('click', function () {
                t('toc');
            }), n.on('click touchstart', function (t) {
                e.hasClass('open') && c('menu'), a.hasClass('open') && c('toc');
            }), $(window).on('resize', function (t) {
                e.is(':visible') || e.hasClass('open') && c('menu');
            }), window.matchMedia('(max-width: 1024px)').addListener(function (t) {
                t.matches ? s.hasClass('tocOpenPc') && l() : ($('#toggle-sidebar').hasClass('on') && r(), a.hasClass('open') && c('toc'));
            }), s.find('.toc-link').on('click', function (t) {
                t.preventDefault(), btf.scrollToDest(decodeURI($(this).attr('href'))), window.innerWidth < 1024 && c('toc');
            });
        }(), GLOBAL_CONFIG_SITE.isHome && $('#scroll_down').on('click', function () {
            btf.scrollToDest('#content-inner');
        }), GLOBAL_CONFIG.highlight && s(), GLOBAL_CONFIG.isPhotoFigcaption && $('#article-container img').not('.justified-gallery img').each(function (t, e) {
            var i = $(e);
            if (i.attr('alt')) {
                var a = $('<div class="img-alt is-center">' + i.attr('alt') + '</div>');
                i.after(a);
            }
        }), function () {
            var t = $('.justified-gallery');
            if (t.length) {
                var e = t.find('img');
                e.unwrap(), e.length && e.each(function (t, e) {
                    $(e).attr('data-lazy-src') && $(e).attr('src', $(e).attr('data-lazy-src')), $(e).wrap('<div></div>');
                }), c ? btf.initJustifiedGallery(t) : ($('head').append('<link rel="stylesheet" type="text/css" href="' + GLOBAL_CONFIG.justifiedGallery.css + '">'), $.getScript('' + GLOBAL_CONFIG.justifiedGallery.js, function () {
                    btf.initJustifiedGallery(t);
                }), c = !0);
            }
        }(), function () {
            var t = GLOBAL_CONFIG.medium_zoom;
            if (GLOBAL_CONFIG.fancybox)
                $('#article-container img:not(.gallery-group-img)').not($('a>img')).each(function (t, e) {
                    var i = $(e).attr('data-lazy-src') ? $(e).attr('data-lazy-src') : $(e).attr('src'), a = $(e).attr('alt') ? $(e).attr('alt') : '';
                    $(e).wrap('<a href="' + i + '" data-fancybox="group" data-caption="' + a + '" class="fancybox"></a>');
                }), $().fancybox({
                    selector: '[data-fancybox]',
                    loop: !0,
                    transitionEffect: 'slide',
                    protect: !0,
                    buttons: ["slideShow","fullScreen","thumbs","close"],
                    hash: !1
                });
            else if (t) {
                var i = mediumZoom(document.querySelectorAll('#article-container :not(a)>img'));
                i.on('open', function (t) {
                    var e = 'dark' === $(document.documentElement).attr('data-theme') ? '#121212' : '#fff';
                    i.update({ background: e });
                });
            }
        }(), d(), GLOBAL_CONFIG.runtime && function () {
            var t = $('#runtimeshow');
            if (t.length) {
                var e = t.attr('data-publishDate');
                t.text(btf.diffDate(e) + ' ' + GLOBAL_CONFIG.runtime);
            }
        }(), function () {
            var t = $('#last-push-date');
            if (t.length) {
                var e = t.attr('data-lastPushDate'), i = btf.diffDate(e, !0);
                t.text(i);
            }
        }(), $('#article-container table').not($('figure.highlight > table')).each(function () {
            $(this).wrap('<div class="table-wrap"></div>');
        }), (t = $('.hide-button')).length && t.on('click', function (t) {
            var e = $(this), i = $(this).next('.hide-content');
            e.toggleClass('open'), i.toggle(), e.hasClass('open') && 0 < i.find('.justified-gallery').length && btf.initJustifiedGallery(i.find('.justified-gallery'));
        }), u(), p(), $('#aside-cat-list .card-category-list-item.parent i').on('click', function (t) {
            t.preventDefault();
            var e = $(this);
            e.toggleClass('expand'), e.parents('.parent').next().toggle();
        }), e = !1, $('#switch-comments-btn').on('click', function () {
            $('#post-comment > .comment-wrap > div').each(function () {
                $(this).is(':visible') ? $(this).hide() : $(this).css({
                    display: 'block',
                    animation: 'tabshow .5s'
                });
            }), e || 'function' != typeof loadOtherComment || (e = !0, loadOtherComment());
        });
    }, refreshFn(), $(window).on('resize', function () {
        window.innerWidth < 768 ? o(0) : $('#sidebar').hasClass('tocOpenPc') && $('#nav').hasClass('fixed') ? o(1) : o(2);
    }), $('#mobile-sidebar-menus .expand').on('click', function () {
        $(this).parents('.menus_item').find('> .menus_item_child').slideToggle(), $(this).toggleClass('hide');
    }), $(window).on('touchmove', function (t) {
        var e = $('#nav .menus_item_child');
        e.is(':visible') && e.css('display', 'none');
    }), GLOBAL_CONFIG.islazyload && (window.lazyLoadInstance = new LazyLoad({
        elements_selector: 'img',
        threshold: 0,
        data_src: 'lazy-src'
    })), void 0 !== GLOBAL_CONFIG.copyright && (f = GLOBAL_CONFIG.copyright, document.body.oncopy = function (t) {
        t.preventDefault();
        var e = void 0, i = window.getSelection(0).toString();
        return e = i.length > f.limitCount ? i + '\n\n\n' + f.languages.author + '\n' + f.languages.link + window.location.href + '\n' + f.languages.source + '\n' + f.languages.info : i, t.clipboardData ? t.clipboardData.setData('text', e) : window.clipboardData.setData('text', e);
    }), GLOBAL_CONFIG.baiduPush && function () {
        var t = document.createElement('script'), e = window.location.protocol.split(':')[0];
        t.src = 'https' === e ? 'https://zz.bdstatic.com/linksubmit/push.js' : 'http://push.zhanzhang.baidu.com/push.js', t.dataset.pjax = '';
        var i = document.getElementsByTagName('script')[0];
        i.parentNode.insertBefore(t, i);
    }();
});