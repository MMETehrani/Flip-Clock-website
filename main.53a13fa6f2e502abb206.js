"use strict";
(self.webpackChunkgf_flip_clock = self.webpackChunkgf_flip_clock || []).push([[179], {
    943: (e, t, o) => {
        o.d(t, {
            Z: () => s
        });
        var n = o(81)
          , a = o.n(n)
          , r = o(645)
          , i = o.n(r)()(a());
        i.push([e.id, "body.theme-white{background-color:#f6f6f6 !important;--period-text-color: #909090;--top-bg: #fff;--bottom-bg: #fff;--top-text-color: #000;--bottom-text-color: #000}body.theme-ivory{background-color:#f6f6f6;--period-text-color: #909090;--top-bg: #fff;--bottom-bg: #fff;--top-text-color: #000;--bottom-text-color: #000}body.theme-matcha{background-color:#eeffd3;--top-bg: #CEE7A4;--bottom-bg: #CEE7A4;--top-text-color: #fff;--bottom-text-color: #fff;--period-text-color: #fff}body.theme-sakura{background-color:#ffdfea;--top-bg: #FABFCE;--bottom-bg: #FABFCE;--top-text-color: #fff;--bottom-text-color: #fff;--period-text-color: #fff}body.theme-sky{background-color:#d3f3ff;--top-bg: #ABDAEC;--bottom-bg: #ABDAEC;--top-text-color: #fff;--bottom-text-color: #fff;--period-text-color: #fff}body.theme-cream{background-color:#fff7ec;--top-bg: #EDD7B8;--bottom-bg: #EDD7B8;--top-text-color: #fff;--bottom-text-color: #fff;--period-text-color: #fff}body.theme-peach{background-color:#ffd1bb;--top-bg: #FFBA99;--bottom-bg: #FFBA99;--top-text-color: #fff;--bottom-text-color: #fff;--period-text-color: #fff}body.theme-lofi{background-color:#eccdff;--top-bg: #DDB0F8;--bottom-bg: #DDB0F8;--top-text-color: #fff;--bottom-text-color: #fff;--period-text-color: #fff}body.theme-honey{background-color:#fff0cd;--top-bg: #F9DE96;--bottom-bg: #F9DE96;--top-text-color: #fff;--bottom-text-color: #fff;--period-text-color: #fff}", ""]);
        const s = i
    }
    ,
    360: (e, t, o) => {
        o.d(t, {
            Z: () => s
        });
        var n = o(81)
          , a = o.n(n)
          , r = o(645)
          , i = o.n(r)()(a());
        i.push([e.id, 'body{height:100vh;margin:0;overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center;background:#000;transition:background-color 500ms ease-in-out;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;font-weight:500;--top-text-color: #ddd;--bottom-text-color: #fff;--period-text-color: #909090;--top-bg: #121212;--bottom-bg: #121212}.flip-clock{text-align:center;perspective:400px;margin:20px auto;display:flex;flex-direction:row}.flip-clock *,.flip-clock *:before,.flip-clock *:after{box-sizing:border-box}.clock__piece{display:inline-block}.segment{display:block;position:relative;padding-bottom:22vh;font-size:30vh;font-size:clamp(30vh,30vh,44vw);line-height:1.195;font-variant-numeric:tabular-nums;letter-spacing:-0.0052vh;margin:.5vh 1.1vh;font-family:"Flix-Clock",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif}.seg__top,.seg__bottom,.seg__back::before,.seg__back::after{display:block;height:22vh;color:var(--top-text-color);background:var(--top-bg);transition:color 500ms ease-in-out,background-color 500ms ease-in-out;padding:.18em 0;border-radius:16px 16px 0 0;backface-visiblity:hidden;transform-style:preserve-3d;width:50vh;width:clamp(50vh,50vh,50vw);transform:translateZ(0)}.seg__bottom{position:absolute;top:calc(50% - .3vh);left:0;border-top:solid .3vh var(--bottom-bg);background:var(--bottom-bg);color:var(--bottom-text-color);transition:color 500ms ease-in-out,background-color 500ms ease-in-out,border-top-color 500ms ease-in-out;border-radius:0 0 16px 16px;pointer-events:none;overflow:hidden}.seg__bottom::after{display:block;margin-top:-22vh}.seg__back::before,.seg__bottom::after{content:attr(data-value)}.seg__back{position:absolute;top:0;height:100%;left:0%;pointer-events:none}.seg__back::before{position:relative;z-index:-1;overflow:hidden;border-bottom:solid .3vh var(--bottom-bg);transition:border-bottom-color 500ms ease-in-out}.clock_period{display:none;position:absolute;top:2.5vh;left:clamp(10px,3vh,40px) !important;font-size:4vh;z-index:5;color:var(--period-text-color);transition:color 500ms ease-in-out;letter-spacing:.156667vh}.clock__piece:first-of-type .clock_period{display:block}.flip .seg__back::before{animation:flipTop .3s cubic-bezier(0.37, 0.01, 0.94, 0.35);animation-fill-mode:both;transform-origin:center bottom}.flip .seg__back .seg__bottom{transform-origin:center top;animation-fill-mode:both;animation:flipBottom .6s cubic-bezier(0.15, 0.45, 0.28, 1)}body.clock-12h .clock_period,body.clock-24h .clock_period{display:none !important}#btnWrap{position:absolute;bottom:0;right:0;padding:clamp(1rem,5vw,2rem);opacity:0;transition:opacity 375ms ease-in-out}body:not(.modal-open):hover #btnWrap{opacity:1}#btnWrap button{margin-left:.5rem;appearance:none;border:0;background-color:rgba(0,0,0,0);cursor:pointer}#btnWrap svg{width:clamp(16px,5vw,32px);height:clamp(16px,5vw,32px);display:block}#btnWrap svg path{fill:var(--top-text-color);transition:fill 500ms ease-in-out}@keyframes flipTop{0%{transform:rotateX(0deg);z-index:2}0%,99%{opacity:.99}100%{transform:rotateX(-90deg);opacity:0}}@keyframes flipBottom{0%,50%{z-index:-1;transform:rotateX(90deg);opacity:0}51%{opacity:.99}100%{opacity:.99;transform:rotateX(0deg);z-index:5}}@media screen and (max-height: 350px)and (max-width: 225px){.seg__top,.seg__bottom,.seg__back::before,.seg__back::after{height:31.5vh;width:76.5vh;border-radius:12px 12px 0 0}.segment{padding-bottom:31.5vh;font-size:42.3vh}.seg__bottom{border-radius:0 0 12px 12px}.seg__bottom::after{margin-top:-31.5vh}.clock_period{top:4.05vh;left:4.5vh;font-size:6.3vh}}@media(orientation: portrait){.flip-clock{flex-direction:column}.segment{padding-bottom:27.5vw;font-size:37.5vw;letter-spacing:-0.0052vh;margin:.625vw 1.375vw}.seg__top,.seg__bottom,.seg__back::before,.seg__back::after{height:27.5vw;width:62.5vw}.seg__bottom{top:calc(50% - .3vh)}.seg__bottom::after{display:block;margin-top:-27.5vw}.clock_period{top:2.8125vw;left:3.375vw;font-size:4.5vw;letter-spacing:.08811vw}}@media(min-aspect-ratio: 9/10)and (max-aspect-ratio: 1/1){.segment{padding-bottom:24.75vw;font-size:33.75vw;letter-spacing:-0.00468vh;margin:.5625vw 1.2375vw}.seg__top,.seg__bottom,.seg__back::before,.seg__back::after{height:24.75vw;width:56.25vw}.seg__bottom{top:calc(50% - .3vh)}.seg__bottom::after{display:block;margin-top:-24.75vw}.clock_period{top:3.125vw;left:3.75vw;font-size:5vw;letter-spacing:.0979vw}}@media(min-aspect-ratio: 1/1)and (max-aspect-ratio: 10/9),(max-width: 300px)and (min-aspect-ratio: 1/1)and (max-aspect-ratio: 15/9){.segment{padding-bottom:19.8vh;font-size:27vh;letter-spacing:-0.00468vh;margin:.45vh .99vh}.seg__top,.seg__bottom,.seg__back::before,.seg__back::after{height:19.8vh;width:45vh}.seg__bottom{top:calc(50% - .3vh)}.seg__bottom::after{display:block;margin-top:-19.8vh}.clock_period{top:2.25vh;left:2.7vh;font-size:3.6vh;letter-spacing:.141003vh}}', ""]);
        const s = i
    }
    ,
    568: (e, t, o) => {
        o.d(t, {
            Z: () => m
        });
        var n = o(81)
          , a = o.n(n)
          , r = o(645)
          , i = o.n(r)
          , s = o(667)
          , c = o.n(s)
          , l = new URL(o(291),o.b)
          , d = i()(a())
          , p = c()(l);
        d.push([e.id, '@font-face{font-family:"Flix-Clock";src:url(' + p + ') format("woff2");font-weight:500;font-style:normal;font-display:block}', ""]);
        const m = d
    }
    ,
    989: (e, t, o) => {
        o.d(t, {
            Z: () => s
        });
        var n = o(81)
          , a = o.n(n)
          , r = o(645)
          , i = o.n(r)()(a());
        i.push([e.id, ".fade:not(.show){opacity:0}.fade{transition:opacity .15s linear}#banner{position:absolute;top:3.5rem;right:3.5rem;padding:1.375rem 14rem 1.25rem 1.675rem;width:27.125rem;box-sizing:border-box;border-radius:1.16269rem;background:rgba(69,10,220,.45);color:#fff;min-height:11rem;overflow:hidden;transition-duration:500ms}@media screen and (max-width: 500px){#banner{right:0;left:1rem;max-width:calc(100% - 2rem);top:1rem;padding:1rem;min-height:unset}#banner img{display:none}#banner>div{max-width:unset !important;padding-right:3rem}}#banner>div{max-width:11.5rem}#banner .closer{cursor:pointer;position:absolute;top:0;right:1rem;font-size:2rem}#banner .title{font-family:Inter;font-size:1.25rem;font-weight:600;line-height:110%;letter-spacing:-0.05rem;margin-bottom:.5rem}#banner .body{font-family:Inter;font-size:.85rem;font-weight:500;line-height:130%;letter-spacing:-0.01625rem;margin-bottom:1rem}#banner .btn{padding:.375rem .5rem .5rem;background-color:#7432ff;border-radius:.31056rem;font-family:Inter;font-size:.8125rem;font-weight:500;letter-spacing:-0.01625rem;color:#fff;text-decoration:none}#banner .btn:hover{background-color:#5200fe;text-decoration:none}#banner img{position:absolute;right:-1.25rem;bottom:0;border-top-left-radius:.5rem;width:230px}body.callout-open #top{padding-bottom:0}", ""]);
        const s = i
    }
    ,
    645: e => {
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map((function(t) {
                    var o = ""
                      , n = void 0 !== t[5];
                    return t[4] && (o += "@supports (".concat(t[4], ") {")),
                    t[2] && (o += "@media ".concat(t[2], " {")),
                    n && (o += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                    o += e(t),
                    n && (o += "}"),
                    t[2] && (o += "}"),
                    t[4] && (o += "}"),
                    o
                }
                )).join("")
            }
            ,
            t.i = function(e, o, n, a, r) {
                "string" == typeof e && (e = [[null, e, void 0]]);
                var i = {};
                if (n)
                    for (var s = 0; s < this.length; s++) {
                        var c = this[s][0];
                        null != c && (i[c] = !0)
                    }
                for (var l = 0; l < e.length; l++) {
                    var d = [].concat(e[l]);
                    n && i[d[0]] || (void 0 !== r && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")),
                    d[5] = r),
                    o && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"),
                    d[2] = o) : d[2] = o),
                    a && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"),
                    d[4] = a) : d[4] = "".concat(a)),
                    t.push(d))
                }
            }
            ,
            t
        }
    }
    ,
    667: e => {
        e.exports = function(e, t) {
            return t || (t = {}),
            e ? (e = String(e.__esModule ? e.default : e),
            /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
            t.hash && (e += t.hash),
            /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
        }
    }
    ,
    81: e => {
        e.exports = function(e) {
            return e[1]
        }
    }
    ,
    379: e => {
        var t = [];
        function o(e) {
            for (var o = -1, n = 0; n < t.length; n++)
                if (t[n].identifier === e) {
                    o = n;
                    break
                }
            return o
        }
        function n(e, n) {
            for (var r = {}, i = [], s = 0; s < e.length; s++) {
                var c = e[s]
                  , l = n.base ? c[0] + n.base : c[0]
                  , d = r[l] || 0
                  , p = "".concat(l, " ").concat(d);
                r[l] = d + 1;
                var m = o(p)
                  , f = {
                    css: c[1],
                    media: c[2],
                    sourceMap: c[3],
                    supports: c[4],
                    layer: c[5]
                };
                if (-1 !== m)
                    t[m].references++,
                    t[m].updater(f);
                else {
                    var u = a(f, n);
                    n.byIndex = s,
                    t.splice(s, 0, {
                        identifier: p,
                        updater: u,
                        references: 1
                    })
                }
                i.push(p)
            }
            return i
        }
        function a(e, t) {
            var o = t.domAPI(t);
            return o.update(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer)
                        return;
                    o.update(e = t)
                } else
                    o.remove()
            }
        }
        e.exports = function(e, a) {
            var r = n(e = e || [], a = a || {});
            return function(e) {
                e = e || [];
                for (var i = 0; i < r.length; i++) {
                    var s = o(r[i]);
                    t[s].references--
                }
                for (var c = n(e, a), l = 0; l < r.length; l++) {
                    var d = o(r[l]);
                    0 === t[d].references && (t[d].updater(),
                    t.splice(d, 1))
                }
                r = c
            }
        }
    }
    ,
    569: e => {
        var t = {};
        e.exports = function(e, o) {
            var n = function(e) {
                if (void 0 === t[e]) {
                    var o = document.querySelector(e);
                    if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement)
                        try {
                            o = o.contentDocument.head
                        } catch (e) {
                            o = null
                        }
                    t[e] = o
                }
                return t[e]
            }(e);
            if (!n)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            n.appendChild(o)
        }
    }
    ,
    216: e => {
        e.exports = function(e) {
            var t = document.createElement("style");
            return e.setAttributes(t, e.attributes),
            e.insert(t, e.options),
            t
        }
    }
    ,
    565: (e, t, o) => {
        e.exports = function(e) {
            var t = o.nc;
            t && e.setAttribute("nonce", t)
        }
    }
    ,
    795: e => {
        e.exports = function(e) {
            var t = e.insertStyleElement(e);
            return {
                update: function(o) {
                    !function(e, t, o) {
                        var n = "";
                        o.supports && (n += "@supports (".concat(o.supports, ") {")),
                        o.media && (n += "@media ".concat(o.media, " {"));
                        var a = void 0 !== o.layer;
                        a && (n += "@layer".concat(o.layer.length > 0 ? " ".concat(o.layer) : "", " {")),
                        n += o.css,
                        a && (n += "}"),
                        o.media && (n += "}"),
                        o.supports && (n += "}");
                        var r = o.sourceMap;
                        r && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")),
                        t.styleTagTransform(n, e, t.options)
                    }(t, e, o)
                },
                remove: function() {
                    !function(e) {
                        if (null === e.parentNode)
                            return !1;
                        e.parentNode.removeChild(e)
                    }(t)
                }
            }
        }
    }
    ,
    589: e => {
        e.exports = function(e, t) {
            if (t.styleSheet)
                t.styleSheet.cssText = e;
            else {
                for (; t.firstChild; )
                    t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(e))
            }
        }
    }
    ,
    130: (e, t, o) => {
        var n = o(379)
          , a = o.n(n)
          , r = o(795)
          , i = o.n(r)
          , s = o(569)
          , c = o.n(s)
          , l = o(565)
          , d = o.n(l)
          , p = o(216)
          , m = o.n(p)
          , f = o(589)
          , u = o.n(f)
          , g = o(568)
          , b = {};
        function h(e) {
            for (var t = window.location.search.substring(1).split("&"), o = 0; o < t.length; o++) {
                var n = t[o].split("=");
                if (decodeURIComponent(n[0]) == e)
                    return decodeURIComponent(n[1])
            }
            return null
        }
        function v(e) {
            const t = {
                white: {
                    themeClass: "white",
                    textClass: "black"
                },
                black: {
                    themeClass: "black",
                    textClass: "white"
                },
                ivory: {
                    themeClass: "ivory",
                    textClass: "black"
                },
                matcha: {
                    themeClass: "matcha",
                    textClass: "black"
                },
                sakura: {
                    themeClass: "sakura",
                    textClass: "black"
                },
                sky: {
                    themeClass: "sky",
                    textClass: "black"
                },
                cream: {
                    themeClass: "cream",
                    textClass: "black"
                },
                peach: {
                    themeClass: "peach",
                    textClass: "black"
                },
                lofi: {
                    themeClass: "lofi",
                    textClass: "black"
                },
                honey: {
                    themeClass: "honey",
                    textClass: "black"
                }
            };
            var o;
            t.hasOwnProperty(e) && (o = ["theme-" + t[e].themeClass, "text-" + t[e].textClass],
            document.body.classList = "",
            window.flixSettings.clockType ? document.body.classList.add("clock-" + window.flixSettings.clockType) : document.body.classList.add("clock-12hampm"),
            document.body.classList.add(...o))
        }
        function w(e, t) {
            var o = document.createElement("span")
              , n = document.createElement("span");
            if (n.classList.add("clock__segment", "segment"),
            n.innerHTML = '<span class="seg__top"></span><span class="seg__bottom"></span><span class="seg__back"><span class="seg__bottom"></span></span>',
            o.appendChild(n),
            o.classList.add("clock__piece"),
            t.period) {
                var a = document.createElement("span");
                a.classList.add("clock_period"),
                n.appendChild(a)
            }
            this.el = o;
            var r = o.querySelector(".seg__top")
              , i = o.querySelector(".seg__bottom")
              , s = o.querySelector(".seg__back")
              , c = o.querySelector(".seg__back .seg__bottom");
            this.update = function(e) {
                if (e.period)
                    var t = e.value;
                else
                    t = ("0" + e.value).slice(-2);
                e.period && a && a.innerText !== e.period && (a.innerText = e.period),
                t !== this.currentValue && (this.currentValue >= 0 && (s.setAttribute("data-value", this.currentValue),
                i.setAttribute("data-value", this.currentValue)),
                this.currentValue = t,
                r.innerText = this.currentValue,
                c.setAttribute("data-value", this.currentValue),
                this.el.classList.remove("flip"),
                this.el.offsetWidth,
                this.el.classList.add("flip"))
            }
            ,
            this.update(t)
        }
        function k(e) {
            var t = Date.parse(e) - Date.parse(new Date);
            return {
                Total: t,
                Days: Math.floor(t / 864e5),
                Hours: Math.floor(t / 36e5 % 24),
                Minutes: Math.floor(t / 1e3 / 60 % 60),
                Seconds: Math.floor(t / 1e3 % 60)
            }
        }
        function x() {
            var e = new Date
              , t = e.toLocaleString("en-us", {
                hour: "numeric",
                minute: "2-digit",
                hour12: !window.flixSettings.is24Clock
            })
              , o = {
                Total: e,
                Hours: {
                    period: t.split(" ")[1]
                },
                Minutes: {
                    value: e.getMinutes()
                }
            };
            return e.getHours() > 12 && !window.flixSettings.is24Clock ? o.Hours.value = e.getHours() - 12 : 0 === e.getHours() ? o.Hours.value = 12 : o.Hours.value = e.getHours(),
            "?showseconds" == window.location.search && (o.Seconds = {
                value: e.getSeconds()
            }),
            o
        }
        function y(e) {
            for (var t = window.location.search.substring(1).split("&"), o = 0; o < t.length; o++) {
                var n = t[o].split("=");
                if (decodeURIComponent(n[0]) == e)
                    return decodeURIComponent(n[1])
            }
            return null
        }
        b.styleTagTransform = u(),
        b.setAttributes = d(),
        b.insert = c().bind(null, "head"),
        b.domAPI = i(),
        b.insertStyleElement = m(),
        a()(g.Z, b),
        g.Z && g.Z.locals && g.Z.locals,
        window.addEventListener("load", (e => {
            var t = h("background");
            h("clock"),
            t && v(t)
        }
        )),
        window.flixSettings = {},
        window.flixSettings.background = y("background") ?? "black",
        window.flixSettings.clockType = y("clock") ?? "12hampm",
        window.flixSettings.is24Clock = "24h" === window.flixSettings.clockType;
        var A = new function(e, t) {
            e = !!e && new Date(Date.parse(e)),
            t = t || function() {}
            ;
            var o = e ? k : x;
            this.el = document.createElement("div"),
            this.el.className = "flip-clock";
            var n, a = {}, r = o(e);
            for (n in r)
                "Total" !== n && "Period" !== n && (a[n] = new w(n,r[n]),
                this.el.appendChild(a[n].el));
            var i = 0;
            setTimeout((function r() {
                if (window.flixSettings.frame = requestAnimationFrame(r),
                !(i++ % 10)) {
                    var s = o(e);
                    if (s.Total < 0) {
                        for (n in cancelAnimationFrame(window.flixSettings.frame),
                        a)
                            a[n].update(0);
                        t()
                    } else
                        for (n in a)
                            a[n].update(s[n])
                }
            }
            ), 500)
        }
        ;
        document.body.appendChild(A.el);
        var E = y("clock");
        E && document.body.classList.add("clock-" + E);
        const C = document.createElement("button")
          , S = document.createElement("button")
          , F = document.createElement("button")
          , L = document.createElement("div");
        C.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M43.42,11.89V.5H6.04C2.98,.59,.5,3.14,.5,6.19V43.42H11.89V11.89h31.53Z"/><path d="M127.5,43.42V6.19c0-3.14-2.55-5.69-5.69-5.69h-37.23V11.89h31.53v31.53h11.39Z"/><path d="M6.19,127.5H43.42v-11.39H11.89v-31.53H.5v37.4c.08,3.03,2.63,5.52,5.69,5.52Z"/><path d="M84.58,116.11v11.39h37.23c3.14,0,5.69-2.55,5.69-5.69v-37.23h-11.39v31.53h-31.53Z"/></svg>',
        S.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M18.53,31.57v18.03H3.2V30.29c0-10.08,4.12-19.59,17.46-19.59h3.27c11.92,0,19.59,5.39,19.59,19.59v5.25c0,12.49-.57,17.18-9.37,30.52-2.84,4.4-6.96,9.94-10.22,14.48-9.51,13.63-10.08,17.32-10.08,21.72h30.38v15.05H.5v-7.95c0-13.77,2.13-20.72,12.35-38.47l9.23-16.32c4.54-7.95,4.54-10.93,4.54-16.18v-6.81c0-3.97-1.42-5.54-4.12-5.54-2.98,0-3.97,1.56-3.97,5.54Z"/><path d="M38.76,78.55c5.96-15.76,18.74-51.81,23.71-67.28h13.91V77.27h9.79v14.48h-9.79v25.55h-15.76v-25.55h-21.86v-13.2Zm21.86-29.38c-2.84,9.23-6.1,18.6-9.65,28.11h9.65v-28.11Z"/><path d="M88.75,11.69h15.19V49.59c2.7-4.54,6.81-9.08,12.63-9.08h.71c8.09,0,10.22,6.81,10.22,11.78V117.3h-15.33V60.1c0-3.55-.99-5.68-3.97-5.68-3.27,0-4.26,2.13-4.26,6.25v56.64h-15.19V11.69Z"/></svg>',
        F.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M108.89,19.12C96.9,7.13,80.96,.52,64.01,.5c-12.6,0-24.8,3.7-35.27,10.7-10.48,7-18.57,16.85-23.39,28.49C.52,51.33-.73,64.02,1.73,76.38c2.46,12.36,8.47,23.6,17.38,32.51,8.91,8.91,20.15,14.92,32.51,17.38,4.1,.82,8.28,1.23,12.43,1.23,8.34,0,16.51-1.63,24.26-4.84,11.64-4.82,21.5-12.91,28.5-23.39,7-10.48,10.7-22.68,10.7-35.28-.02-16.95-6.63-32.89-18.61-44.87ZM61,10.73V117.26c-13.1-.74-25.37-6.23-34.7-15.55-10.07-10.07-15.63-23.47-15.65-37.7,.02-14.25,5.57-27.64,15.65-37.71,9.33-9.33,21.6-14.82,34.7-15.56Z"/></svg>',
        L.id = "btnWrap",
        L.appendChild(S),
        L.appendChild(F),
        L.appendChild(C),
        document.body.appendChild(L),
        C.addEventListener("click", (function(e) {
            void 0 === document.fullscreenEnabled ? document.webkitFullscreenElement ? document.webkitExitFullscreen() : document.documentElement.webkitRequestFullscreen() : document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen()
        }
        )),
        S.addEventListener("click", (function(e) {
            switch (window.flixSettings.clockType) {
            case "24h":
            case "12h":
                window.flixSettings.clockType = "12hampm",
                window.flixSettings.is24Clock = !1;
                break;
            default:
                window.flixSettings.clockType = "24h",
                window.flixSettings.is24Clock = !0
            }
            v(window.flixSettings.background)
        }
        )),
        F.addEventListener("click", (function(e) {
            switch (window.flixSettings.background) {
            case "black":
                window.flixSettings.background = "white";
                break;
            case "white":
                window.flixSettings.background = "matcha";
                break;
            case "matcha":
                window.flixSettings.background = "sakura";
                break;
            case "sakura":
                window.flixSettings.background = "sky";
                break;
            case "sky":
                window.flixSettings.background = "cream";
                break;
            case "cream":
                window.flixSettings.background = "peach";
                break;
            case "peach":
                window.flixSettings.background = "lofi";
                break;
            case "lofi":
                window.flixSettings.background = "honey";
                break;
            default:
                window.flixSettings.background = "black"
            }
            v(window.flixSettings.background)
        }
        ));
        var M = o(360)
          , W = {};
        W.styleTagTransform = u(),
        W.setAttributes = d(),
        W.insert = c().bind(null, "head"),
        W.domAPI = i(),
        W.insertStyleElement = m(),
        a()(M.Z, W),
        M.Z && M.Z.locals && M.Z.locals;
        var V = o(989)
          , q = {};
        q.styleTagTransform = u(),
        q.setAttributes = d(),
        q.insert = c().bind(null, "head"),
        q.domAPI = i(),
        q.insertStyleElement = m(),
        a()(V.Z, q),
        V.Z && V.Z.locals && V.Z.locals;
        const J = o.p + "cd053f9eba813088b08a.jpg";
        !function() {
            if (window.location == window.parent.location) {
                if (null !== !window.localStorage.getItem("gfFlixCallout") && window.localStorage.getItem("gfFlixCallout") > Date.now())
                    return;
                var e = document.createElement("div")
                  , t = document.createElement("div")
                  , o = document.createElement("span");
                e.id = "banner",
                e.classList.add("fade"),
                o.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">\n        <path d="M16.866 1.54137L15.239 0L8.78872 6.11081L2.33842 0L0.711426 1.54137L7.16172 7.65217L0.711426 13.763L2.33842 15.3043L8.78872 9.19354L15.239 15.3043L16.866 13.763L10.4157 7.65217L16.866 1.54137Z" fill="white"/>\n        </svg>',
                o.classList.add("closer"),
                t.innerHTML = '<div class="title">Want to try our latest clock?</div>\n<div class="body">Productivity dashboard with a clock, minimalist themes, quotes, timer, and lots more.</div>\n<a class="btn btn-sm" href="https://flocus.com/" target="_blank">Go to new clock</a>\n<img src="" class="banner-image" />\n',
                t.querySelector("img").src = J,
                t.appendChild(o),
                e.appendChild(t),
                e.setAttribute("data-nosnippet", ""),
                document.body.appendChild(e),
                document.body.classList.add("callout-open"),
                o.addEventListener("click", (function() {
                    e.classList.remove("show"),
                    setTimeout(( () => {
                        e.remove(),
                        document.body.classList.remove("callout-open")
                    }
                    ), 500),
                    window.localStorage.setItem("gfFlixCallout", Date.now() + 12096e5),
                    Flocus.tracking && Flocus.tracking.trackEvent("Click", {
                        action: "Close banner",
                        location: "Corner Flocus CTA Banner"
                    })
                }
                )),
                e.querySelector("a.btn").addEventListener("click", (function() {
                    Flocus.tracking && Flocus.tracking.trackEvent("Click", {
                        action: "Go to Flocus App",
                        location: "Corner Flocus CTA Banner"
                    })
                }
                )),
                document.addEventListener("DOMContentLoaded", ( () => {
                    setTimeout(( () => {
                        e.classList.add("show")
                    }
                    ), 1e3)
                }
                ))
            }
        }();
        var O = o(943)
          , Z = {};
        Z.styleTagTransform = u(),
        Z.setAttributes = d(),
        Z.insert = c().bind(null, "head"),
        Z.domAPI = i(),
        Z.insertStyleElement = m(),
        a()(O.Z, Z),
        O.Z && O.Z.locals && O.Z.locals;
        const I = "1.7.1";
        window.Flocus = {
            tracking: new class {
                appName = "Flix Flip Clock";
                constructor() {
                    this.metaLoaded = !1,
                    this.tiktokLoaded = !1,
                    this.googleLoaded = !1,
                    this.mixpanelLoaded = !1,
                    this.linkedinLoaded = !1,
                    (window.location.hostname.includes("localhost") || window.location.hostname.includes("flocus.com") && !window.location.hostname.includes("testing.flocus.com")) && (window.location == window.parent.location && (this.loadMixpanel(),
                    this.loadLinkedinPixel()),
                    this.loadGoogleAnalytics())
                }
                loadLinkedinPixel() {
                    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [],
                    window._linkedin_data_partner_ids.push("6462772"),
                    function(e) {
                        window.lintrk || (window.lintrk = function(e, t) {
                            window.lintrk.q.push([e, t])
                        }
                        ,
                        window.lintrk.q = []);
                        var t = document.getElementsByTagName("script")[0]
                          , o = document.createElement("script");
                        o.type = "text/javascript",
                        o.async = !0,
                        o.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js",
                        t.parentNode.insertBefore(o, t)
                    }(),
                    this.linkedinLoaded = !0
                }
                loadTiktokPixel() {
                    return !1
                }
                loadMetaPixel() {
                    return !1
                }
                loadGoogleAnalytics() {
                    var e = document.createElement("script");
                    e.setAttribute("async", !0),
                    e.src = "https://www.googletagmanager.com/gtag/js?id=G-8MC7D8QV87",
                    document.head.appendChild(e),
                    window.dataLayer = window.dataLayer || [],
                    window.gtag = function() {
                        dataLayer.push(arguments)
                    }
                    ,
                    gtag("js", new Date),
                    gtag("config", "G-8MC7D8QV87", {
                        app_version: I,
                        app_name: this.appName
                    }),
                    this.googleLoaded = !0
                }
                loadMixpanel() {
                    var e, t, o, n, a, r;
                    e = document,
                    (t = window.mixpanel || []).__SV || (window.mixpanel = t,
                    t._i = [],
                    t.init = function(e, o, n) {
                        function i(e, t) {
                            var o = t.split(".");
                            2 == o.length && (e = e[o[0]],
                            t = o[1]),
                            e[t] = function() {
                                e.push([t].concat(Array.prototype.slice.call(arguments, 0)))
                            }
                        }
                        var s = t;
                        for (void 0 !== n ? s = t[n] = [] : n = "mixpanel",
                        s.people = s.people || [],
                        s.toString = function(e) {
                            var t = "mixpanel";
                            return "mixpanel" !== n && (t += "." + n),
                            e || (t += " (stub)"),
                            t
                        }
                        ,
                        s.people.toString = function() {
                            return s.toString(1) + ".people (stub)"
                        }
                        ,
                        a = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" "),
                        r = 0; r < a.length; r++)
                            i(s, a[r]);
                        var c = "set set_once union unset remove delete".split(" ");
                        s.get_group = function() {
                            function e(e) {
                                t[e] = function() {
                                    call2_args = arguments,
                                    call2 = [e].concat(Array.prototype.slice.call(call2_args, 0)),
                                    s.push([o, call2])
                                }
                            }
                            for (var t = {}, o = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), n = 0; n < c.length; n++)
                                e(c[n]);
                            return t
                        }
                        ,
                        t._i.push([e, o, n])
                    }
                    ,
                    t.__SV = 1.2,
                    (o = e.createElement("script")).type = "text/javascript",
                    o.async = !0,
                    o.src = "undefined" != typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === e.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js",
                    (n = e.getElementsByTagName("script")[0]).parentNode.insertBefore(o, n)),
                    mixpanel.init("bd29e297b51e6b0df9a3d55893ccd231", {
                        debug: !1,
                        track_pageview: !0,
                        ignore_dnt: !0
                    }),
                    mixpanel.register({
                        "App Version": I
                    }),
                    mixpanel.register({
                        "App Name": this.appName
                    }),
                    this.mixpanelLoaded = !0
                }
                trackEvent(e=null, t={}) {
                    null != e && (this.googleLoaded && gtag("event", e, t),
                    this.mixpanelLoaded && mixpanel.track(e, t))
                }
                registerUser(e) {
                    return !1
                }
                logUserOut() {
                    this.mixpanelLoaded && mixpanel.reset()
                }
            }
        }
    }
    ,
    291: e => {
        e.exports = "data:font/woff2;charset=utf-8;base64,d09GMgABAAAAAGaMAA8AAAABjjwAAGYoAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGkIbgZgUHMBmBmAAhy4RCAqCuVSB8gALh0gAATYCJAOPDAQgBYHMbAeaOluZZXEj2uleqczcDswvvzvPVME2BrqtNwv0HQ8HKODGOA0bB2DMJ3rZ//9/TlIZQ9OASQvgpm77IRNDLI3KkEgYQ3KoiRESA2sjwxbOaU+8IO2we6v/QJFtGPWqgTeV6BSVqLj4ddNnUX0WM9UFEXf48k+4SS2q4/3uoCj+CKVjjWap2ykq0WmsxMQTbcG4jUTBDx2iS2J2+2KJm3/b54H+kLH2P3NRTbcPdTov7PBGtq8j1kCRSa2jrALKsTk1knadPPnyz/f7feTa575P3QOEbmokhVkBsPAok/LALsYBOtQ9QoXo+9Cc77sAF/Cn6TW9QIlAzs9+OWI34SY3PL/NHh/sQAzELKRaKUHAxiAtQlGxYliYm7pZmwtdx93qaqkXq7zpLmq720Vut2mYrj7CkTVjUjBLOq1v/d7/oDLvr+hdwpPL3BbfSESoqEXU+PtTz0OcgHRhvcIZAPzG/IM7Nlp4KdmJPOJAaAPXMkEGugYbzSceEXRR/RVFso2jjn+n1oxkL8xYzVGSIsEDW9pEddLW3foYrO2ftHdfgQJCgErsJLJ0APB9/R9Zo7Or4vf7FUAAaHRRpFKpjKycPPCLc+x7nbmGFazhGb7ExxhUSKM2ULHGbbDzuHNXXl2FUYXL1A/CB9Neuln9xIFOg9noy9r7gyAWxKy86B/YHtiXk5WTlZWTlUgkEolERkYiIyMjXfWrpXl6d7db1M8xhLcAvHtVe2PRqOgc8OREvgdR3nWKSrsrb1RyuDwABiQsEMPDAOLnVs21vX9VXjWI/d9aameDUw6QLIGKcFWReufvHszs5WUPAnvXDfBu8DaAoPKqqivrWnV3YSiRA3SxdTWWhdF9tVWp0bb+/5uatnjEQgSUoZRxdMYpFs3uOkVKDkXj3Lkj75uPJ8zD55wld1eCRhA3KENUjPiTMAwKmUuHVMVchZyK2nVIteWmc9OBXKfYyW7dlbGoWvvl3mbv83bpVyMRji8RJqFIf7M/1ORqEwrVisKVLiQS4fAHDnRVDBohGY/xKKVwwFOueqWWfcMPYBB1TEGqNf1f1VfJ4llPbfEcV/FsqyVldnZ9Hf8AJLkBoMFsYfJ/c6XdLbAqy9qrUQco69y97HE6B0leUgJK5s9MskeTKSMaS0hGVVVWVsoKLWvr95mqLaFYq3PrqottIfzZvyPe8QgLgAiFEJ3izs7i3ungQLJyCLFMsQup6Fy2bu3HfvvPQ1oYDOot7JEXtX+7CyuNbM7bxya7LIvzmcO4w1SoypwqFJ0ymTrP5/7m/M+qX7LH1dfXEJZmCE14GGOMEEIIU6spjKb3z9+sCeLprlMTtORFIAmle6J/Nwdp95DNHC9aedu8BsSQFgkhQC4Kq4Vt1al812TGCRqGBIKd2Kuqm+z9gRHwu+9f7QH4xWvj/gHgt4+oBAAGrgHPAIaM+A7mhx6Q39WBVV8zqJasYA01Bmq852AEMCBw4coMesWrsnKB66c/YK4BgRDAmQGDQrz0nRloEPhyWS4aBL4tW4QGge+QCdEgEDgzCA7/oc83mID3qWbAp8rrawAG3UIjptSgCPNf2qzZlbKfZnZfZwWjERP+ByjA/BcuQqQo0WLEihMvQaIkyVKkSoOVDgePgIiEjIKKHwyBwuAIJAqNweLwBCKJTKHS6Awmm8Pl8dF4m+0+dskV1yz71OduuOWOex545IkvrXrua9/63o9eeOU3f/nHf954GzRt7Tt22bVd3429+vSLjBo0ZOiwEaPGjJswacq06fEJSSnp2TPK5s5feKGvf2B6Zn5hcWl5ZXVtfWNza3tnd/8gxJRLbX3MZd12IffN5Vsg8Gqzlt1omnv/STAmcQxTP3tnebkv2jKse1v4Jtgkm3rr2y5u3+9id8pd1+693bd7xn54v3F/dr+6/3n/5oA5UA71h0uH5WPgseY4etx9PGj5cOl4r7+fJ8cfT+5jOIlPfafdpxcXARe8i+OXQH/sMj7TUi8JlzTLce5d0HfFkENJkEY5KZISxzjbwnO8xCt49aF05ElinrhchOIoifk0w+bzQhGVQdXSdixwBP+cT3AaZ8Q5DWFNPl45tJocIvtLSaVCbaYuUraSM6lE5gZFWHyJpCb1nwU5KoIS1Z+WWpbJc/EET/EMz/ECL/HKoVXF83LQ3rjwU9DfNfeX+x8oN+vPPOeIczpiaEmvdKlmGSUX3qEibyGUnajlTo6snIYneIpneI4X1mzoKRrBhK0hXX0UzQquSE2FpSR95VLnGrSqrHFbR8ceGvESBs2gsI1UPrNEW0DCx65LTfQ5bYsCMhBYbNbDykdulCkvCNGnO/qAUz3BEgxuezdTuOlnfqNmBxSWMoJKWcw970Z1VclQiS2wRkk7iezquX7L23jPYW5EZr3mmVY2LU6bhCYkbX2nt6NdsleqSdPyuelHaRmsmHW5jcx5EijE8u0aUgqbFQQ5ymVF5eguk2YlgemEINkosAhlK6CCLU/qc/pMj33ThUBEwsgxJqtjCVPrOF2YVRHOmmBe/WlbixZY8McDGi5weSoZWqizR2xCO21zENNyVmmbNpH7/ENmhPLiwy7ac3Dw1KxVnEiqvy0o62Z5+XV0B0ZOg8rPph45lYs7rsbJTeXmKUtBtiPfHA3LzVBOt84Y1cOYTGmC1t6zWzFl7WBBRU4x4qxuYyAsS7kV7crGXuFp0MjFvGnT7Els7lO7wohIKkUtI/VS1Ztdr/u7+hkV41YgEUmlqGUkEF94jlzDFr7TQjdVVDX0MwVMjaJ7W2MSr+gnllRggPfVVbe2lUKRiWR0WpsH4RGX1oVQC2jPmpcWy0SlacioJ+cAo11cepIiplRBbjMkeikOgc7e4xpB1Sne4SzEaOgepmhqGpGItgQkaZRbWhi7BrSpEWtvcdWqhhZa0F2M6jBSU6PsGlrIT3cxqkK5TuzYBaOCFk9xEeK4Sgejqvu06QmbSmiV0ueoXq5QNTUsq+09iECy5WTY+exb22Jabe9BBJItl3fJD5E2lZTaqdAp9LBncsr94Ek6O9uk3eq7i/Pt0dyTLv/qs3e+z/O9f+N+7f3bOkpXZ34+oDri+nycoDpFnTZV1oaMC1R1S6xiG8e12uCGqatb11LVMV9P08AsqdgnVgw2mdtlrmGmRCuHjaCvT6hjEsgkotMl1zJOHGVyl2vNOnUUWiDi2jM0eZ0+W90yLVmBVcMvTgJH6lpCPZNeciN0NtdvKBg2Fq7YvEeoA1sylR5c7xYTl5D0wpRiSaNsjMOTU9rt/eZHJhZWchUpplGuUjWTeg1arbODDRfjGvwifgkLzfzHvsMidmMP9mKIJYwwxibaVff2+vD3+H3yBpxlTETSumcddUwn2tE9CzGobf+tpDOoNwSjupyfWFTxBbMA4DIBs70BjWom8cpdk5wZff7szt8Q5PaJDky5K9F/Doa47IbgOUQ/nX+hRsOH/nT3dBFjQBfQtdexR6bOKqh1PTugU8sdTuNWv5fWzTtTzZrrqCE6PX/SvP6bXM+dHGt19Mhi92rvuE4RR5VNQATjAiFZuDMyFVMqTXLvfEMB2V05uwNYfxsYLsESqpqZlYwv8EUOAkykus6j0uAGn8FGMBBMBW+wSxSDxlKr584kGOF9N+P0BBHCSmBPl0jSziDzGhgliRY4aWGV6Zl7vZJM6X9xWLXeM+Ddh4iG7gAzta8+Jrj8EOagDrohN2sda8fR6BDD2xyI8pwDvvOraukksfT0mzUa4lf2ZC3W5xPHhHCvaOrqNmj95q3czMAWUx+NDlmye8YH/zQ0xvKN26/knCvMxPDhQ7K2UYKlwJ9TcBWugz0bS4mSF6DufpF/MBB1EC4GyhUg/rGYQQsr6decnXZTdOw8JxQXCUC5/DGR/Vy9jaxdTy/8VrMcqSw7y78YrYyE4s5zLX0LAM7RH4tRkrgBi5UmT/hpNTCc1Pz59SUFjjZr1zty+0GCPh30RagbsbI8EFiRXVKVNNMwsHqo38qtLOsko4VRtbMoJ/MAAVJtpG4niB6Ewm+9t+Rlsiqo6fZ42geOc8s6YJQASnI2wRQSM9nf8MEe51xGedP5rpApBy+zPCpR9rDxYecjnleEE0GtaB58Hku/5xuvAjBAcm6pF1PNMYr2WcSxyTNVMpdmuAzLL4I2Dezdapn74k+thXc7AbalJfaRZzKrjM100tp9pWwe7eZmQeG284hcr8iAsEAA9jR2CKkmp3H+1ORyAaZ2D/mWDKGDj475TmUZST6HmK6bm2lNchOJJ5TrgOJPY6yega/higu0J81/+NDCNKNBlWzffSyZH424YBGVAK44Or/jePe5STrAJN2+FLSmhhxtVifASF6fxvxz8Sw3oVMrCwvhaPabxxKM3wFYY4535snqQ4doNQPDdotN9gw7sWXntZJP2cr1Sr5ntx6Z9y/Ut18jwNocEjE33UvYOmzL9gwRfyhx5SQyHuKmj/SZGMqTtqxajNasJXtZcLnRhlxbuFHbN/pUrw0hJrAeyLFAV2neco3IBFNAqIJDUzZBhP7u+MWW1c2iMYMlwAW/m1FJmM1Hcx0qENfqFMjiE6b79CWvcKH+s67ttKglQWy/M0wwj8sIp3EOPnSMvPO1MeuPPmBXWPaFbo2riTKqdVI4lDAMB6OG+6rjC23RAcYctrRvP4lXen25LCef7HJkrl6eoSHT3LMyg1jmPRQHrBH+pNVUsga0lB10fFS3n7WrtQhrWUKwL/gQDT4cg8Axa14j8Pg2mLVo9EEddzKLaaaNA2X70hZgDsAElpqq2kkXEQSDEcSD5o1eEdXpFr13IUZiEMqtO3mdC2BuE6d9BY4dwljX9eIddohBJbVVqF40ExGzK/SKXcdr6B0PwWjceDyC03yDV6+SD55PzJ5ulam0i+fT8iBzk1Jrs5PZQEIXstQnKT4z5BppzX1T0lCSUFYk+A57T9HRSLKQ9nREWrwVNgfFQ8EnPMhQiFU0ZrH3jFYkW/TRbUL9taE6w7HBYVrSXzklCYi0jQdN1++kN7MvSOdLMoL56N9ko7MC3/5mP0+yMuMIUcmbGdxJwRPSfNsj6XkPfYtXgA4GrPKmLcIm5hw+LNDTwpD7O/QKRgP6Js037P/8Tf+8dY+DPjkgjwl8pxARJDCEgsyIjr0BSeTjqVQSBuYOhaWoKxmmP5W0/6eF5rvZvCXw0YTfBx9lf6PwZLSZdz2nqre4990j+3X1L94kn5EgimWaN9an4Y/+Dh1NU+JpnPIfyaB8yvsxnzu+MwCZh7nz50BLBFKMI8HueYf38A3FUV/ckD/4y/GqeCO3bIUINxD9nD4Nl8nj3CTHOrEbEJwOg4+YhNzsIM7fJ8/bzTjENtiAqjRMIMraFeqW7dG53+KNZm4K5gcD3BJJBesgO4vs409pn4pig8nNMYkc8sFp9eK2vgUvGyuyr0QyHytBZWvn7iQVrzeHHQoUeOMOuvK9XFa76tmc5lxDoxxPABKEkPtxH/N/y79G9Tt68YTegS8DgCRxBczgSmftm2SuZtY06qajUvm7GZ9EXMAVoyXRaVC1uAOXoUrnq1D1bCe84CULcXU5ZLJV5RASvLocMsrO9EH84e2eLo17hJhz+O3nVaUDDIqAoICQMCDyJa3+qKlb0kS/kAxbFsM4XB6GAeYojyI53Zk8SU0d0AAATeLBHto+fd1tfX0jorEJztTM3MISgqzmPHYHVDdqe8eItd3Pdj9YuoW68zKoTIUF4C/gAb7Ss+YBK8leR0un0g4AAp5iZNYRiPbAtOZYqqXIfcVARgfGZvUaTB+OiWkfPeMY3L9ryNM2PyBPursDvhFIZgomMJbgDiyaHnvJ7J4rFnjCgRKZCwK+YCSfkYmngvC+gKCgIz7h5J93C3i6sMdVUyQZZgboapahs9e7hyR68EBEC+eeCvbY+B7AA8CTlEyOXHnyFYARSwgAcBZNAJSILmxZJLIlnIEVFjYOgpGxsjIAANIqFEAVgHlGhaV//UxMGkpnCCA4QNDBfrS3anXD58n2amrCt49cV+dp8NUVRDS9PhuVwhs18VzteGV5AGSt9IpddeTySsVV9WEVPKCKPnsCaAmNepXaUqC+MnMR5t9OCuhARWhslbc/4K/fG1uVs6DxZ+nk/r6qcAIQ1qrHMnA3djQVugM1kWOnmvdscBCpAzn8SUC8WMFIPiMTTwVhFrBYlYFvBqwUtmFe11sVc17MxTAzQPbysGP9IcNKOWmT51yYDY52KkqHbBokEjBR1Ync3oO4H8D8b1TpiIAYQYJN5/El5C28WGFKsVUm1VsaInp6YkZG2UxMJFq1kurUSWadWTnmbaO3wzF1TrjF4o7vFOSiH7xzr6VOftPQ8253mtm2ty3q2ruq+65YMbiufsiOHUMPxK8cyl29sHjrxb07P0mPL69PYLjw16k+DmwoOUg9L8vOwdF1buDJmy//I8JAghxthfms3ti+1btfRERIhBcffpAb5rXn0U5z0edimIF9AR9QGcxg64du2B07ONFQDk6Gz354rTWCj49e+5/smAJufLq6UgVeTf7r05vGAN6OwRBwDLt/ttFYD/MNB36uXlsDC1+JPc5wDJYaJnypITnFGEGmSjVxkKvSrOS4+ug0l1+ovChYyoJCXNqxDnBdiU4R0Qa5CzZt0RAlgkpr0wNCd+LJCTfwQTIY59fBlEZPFvCVLwK2TAJgigmFK83f94qVr0yFGk26DDjrY8tueeS5H/3mvyCYI8yzgDDFlhopVoJkyVOnq762LA032XyL7e941/qyb8FAzYKDhgYGms9nvsX30k/Yfvbts7rqNwRieOe+G94jbOv3qwfWYefhv6PkOH/8+oQ5KU+Tp0unHy/cL2IvOOm9LmjAhdzFR+nn+CWBx+lV/JoyehC/tkxZIDJ7weLXYTiWU5nELM7lCv81Ru16NahpMF7mJ/Rz/IY7+GX8Dv6oLenx4w3/jp2616fHj/uqr6vvy1aeuu39/sPDe/VblP94o8wo3rW7f9r3fwFA3ohJ3gd9dtDaxiMMOlo4cO3guI7e6/1OTHL02vuOd6DdLbaz/e1qX4fa01J729r2th3Y5j4/nq3zIVijLdYWW39NWLhU6WgYssiUUdIoV8mo0zpDFi3ZaZfd9tjnE5ddPZZvtbiSKuPxb9QI5g8XTLRkBAw8EoWUqpg06QDvYV/0CXiPutEl8B53s8vgPelWV8B72u2ugvdld7oG3rPudh281e61DN5a91sB73kP+hTktR2g2B0ExekwCC8mEPAKHI4FFcwJIcUCQ1xfjsg7LuXQsBFOV5Raqx6WkNOq0cJi1IdOj9tsFIRQDeNzIbHwCEjDaeWx+dw0eclIOMQKqRk06YktGYdfkkUwHiuFgaqN+/smYMmST0nHHOdme3hLX9CmHm7Sj61wxcNhEMhVpqoiyjhcJS5A6YaR6GPJmFhYNDwyJW2CMw68lHktiuFBXyqxg4IbD9kYIOd5TNxBI86IqHu5YZL13LnNSWINBqUrsBzFbaGs5sShEM/PMzPimSbHQkizUYXRnMzJaElfDg0mjJ6MacNpKRNQ5hKYIIqbq8Gt2NUuYeXUfbBFPsFXSuvC0DSX/vgMYitkythtmuW+6EFiNwnuvTRTuqwZEyKE0k/pEZZYbCI705QdbQfKtgqmnPJHXsZm13pknvIn2ZGxj8QXYgXTlD/hci6HyvJCqdcxDZ58eZ9jDb8Ld7FOyUy6BA2elw88OXS4DMcN0J96nuDi8pOL4b13pv1/x0YYSaYSVRA0UQEwmcEztFb9XOSJ7iKPdbX+FIxQw3qrEEmwxmRezyZqui+9zNuMxEPqKt7pXpNvu8ILvwzt+Y5HkOBVx7UijLB3GnAO2WofWyF7OOxBetKOznI3Z7Vjs2UH7BF/0u7Ncudm2p39DBjsH0wfjEJkiAuEEd0YuJPsRuf6WY2AovLDIOMdmv1OYIhTnk8ZrYW9MHCGdm8Hm3715S2O7dhT8/B6wWi2u2Ieck42xPd+oEMd7HD01779aOrVN3WZZwvt2O+bjFc5Kh1nBz+MaIiENXYlHoKwEf7JA/P7ryXYCRRg59ckqJ4v90GfA0I9ekVJ2QmULJ9OIHUrI9sCuTU++eD+9OD80AP0xZrA0d30VdBNv44kdt8UHMopw8HoaJxNxpfjck3ekR72qMc96Wlf9qzV1nq+29oOIpDPwg3ciRSK7nftjJ/wKWQD8/VpP+D1d3LvlVoaMNfaIuA2kA0EB3D4HKl/Td4sEgE09H8EeOpZ4NpazA4NfBNgglYAD3AGCyxwDxjQ98ERcA9EVsB7MdiwdYWPX1eTvYOGwc/VuT5P14f39cfvLKJvoRKIxsrOyYU+mF6pbLnkH1qGgTB7zPWYm+SqCs16MEpMefjliOV/tL17hwdsj1hWk70Z/8HPlbk+D9aH9/XEbyyib6ZnAuyxG8f+X+jmF5PHKLKiLfl/x+crI0N9B7Hfxb0Lv7W8Xfe24f+J57eeV6xJ13hrGWucNfYaYw2/hltLWYte/Wi1eFW0Klhlr4asIp81PWt4pn+me1b1rPyZ+ln+M9KzsGfoJx89vmA/ZGsFlHnnd3w/BSHZP/OwTLlXcdnsvtghcYcvX5bKQ76NhHzZqXyxXZjxZUEdAaF5xSJi2V/C959ToSJyxUqUKqOgpAJ8GYHCUJh8wkIiYqLiktJSMrLycgqKyqoqahrqOtq6eu2pp1WuunItdrimr1YTXb1IdqC7+mKONNeyfVvpdc51AH6sBbKnpu60li+MOqugZoExWu65eEll1dJl3o8wbLuhsa7+cOa+1hTVK/VhITh0MxXwjdT2SGoT9Qvn+HmcrS7hrCJtSYrzAZ0Z6Apg/RRYPzH31CZzL/mGOfASZ52753zZWSrOPGSeqCuz0DwFb9LLE6ZbFg/oyjyAB9O9zaVKm8klcbqEzeQz2+21VvfLDUsXLRCW10vnXEwiU27pAAICyAkXp1spvS7GYuH7GSz9fNYmMIOiH9zMAawnw/Vki7PlULFMLifvLlWC5erzNlCkzwUfoJhVNc62FAdFT5LU6K1rdzCAdPmQu5vxLA4ARjyKYAappwZc+uKAifurLebOU+uxLfmCmt5nJ/w5izrGQXQdHJWHsWV0Lstd/GZt3TI5QQJbq62tbBWa0ddAgmOfaZVXqv5ytm6Z/YRTE9CHn1ED8G8FSMNkZABtEzZLx3TAukQbXWSELSKmo80/gUWCSBsnuFqFX0dPUsQIEzlLb5tWwIiw8oZnskbJDwCrSuJla3hGRA3Dognvwb5XAQixfX0RgzIyQIiwgkTLZIYmA9G4dvL9oM4IFmnu9FG8bUCLgS1TL5GVSTjMzyJ7UlJaFA/P4DTFPHD0HKWIdEAEDvIj55oZE5qcA0q2xmZVmFMx8QQT2Lwg6EUUgi9ktMpqmekIADyOiaYnuBdjY72FnVwhRKhSYFb8xh+++cf/AtdOJZFEYzXWTW5qKrNTTvVcECd5LcZ86NjT5AoT4AjR2FbAPZiIBJz7rT9VxZ/DRGuybIBNhydwWaosDZZ4PPs6yCvIKbnk89Wr4nZdRBxnb4hopaMfNAW5ofYgViLKbmWjteZE8H14EQJ81wD+8A5CZUxCBDAM2sA7mfCIF2lvewNKiDyENQVvs0Q3bDToW63+pHJCSCohTyc+ziH14VqE18+gVcbefWPqyHfF+Oo3inE+2mLqzMsqG8nitMmJ8LxHo2obGdJCUkdxqSsczZrFEUFHSJsOveIsRpHik92r0K+49zTqiNCLNTKUSpIiBfX8pFQqgVCA471dDfff/bXQvgrvOH7kxRz4/XYv1/tynvf+KYi9iPwQ/NExZP0IPV2tkOUFbJS3R3AoJC0OVbBFhaDbKWx7h14L+VccZJBZKW95Sxmjp/jCosLZrJWWyKClkBuV3C4yMBAQSoyRkKEQarTAqpnnvVk/2g/JowIEsdlCiU3CWHOCT8fxksa4tfM6ej2baYLgexfb5oZTLUg0KC5x0HuqlJCDd5lihlLsEJDTaGEKc2xAKNkDbFIRelJLcWPNF5JjQUrwOxtOOCJd1ilJKClDnC12KWhr3DXdgSm0IPy5EJoSb0BrPuegLzK3doJer8cvFrrh1l7ySFNI/oPj7WkFMRvIxhRkEBZIy9eqtgZrQQh4MUs6aMFOtECj1vhytsIsaO905+UJly9fpz7wibYLY+ua6i7UHTgAtwbT2apJHsHpkHnpU2rUQEtSoJigSiR2KWIg+KH/B+xyFamUcASr9VqctIJt3ayWbA3JhpbwRKQcz1sisYictJ3iA4gclApKCpxiYU5QwCbEyTJIgfViWeUaZYpAgKx1XsnSiISWwUk2LJMTZKZsPSH9CLmmcIDOUQhPXZnjXbvJFlBzAM4cLfXrx7F2ygTUFA5Nk62oBD2c6ODNfuUcoanbh271rzjU+j+fRvvjn5Y++X0nAfGSFJFORhK4cxX6kvoHQh5gqo2sCRZs1zKWahOzC8OT0rCDpaNHD5YDNTQcOnSsT6uIKoDO66CcNQ5dOvf03Gyd74R6KivW7tZzsQwoQckUgOswCjGks4ZczRnJ8RCHPwrRCFNEP/qtQLNvdmyWrDmdIZsizuS1/fYU+5YMxhymsAx2gQXyfQsowWDt448lcpLQes9xOEOKhEALXMXSahhMV2SoqY5foddBvlBDA7QwCmpaK/eMeNw20NyqIqAkGz2LSDXrR1TiY29NipnHYShddyC5TZJRKcWjFhlzwOEZncFsaPuCT/U4yOW0Ep42QQbIIFOs1puqApGKpAsU5dStRbu35rkGX6+N8EXVd5eSisOq+2WJPxrvtyqWY2HblsdSW2nJ1SwyGQiJF430SVwBr/oV0+u7wDWzP1DNK0dhp3KZ2tdUBzwAv/o74G7MIoXEpyb+GmQDFwx6N0s5UBRCdlJecIpfoddwrm977l7FvZdvb6E3wBU3gfqzyDh7t1zXeXHxJgiHbaNR4DlwhpRKtQjbVpQwrlcMjh4fgaR6eoh+J0Aq4shAEawkISlVJXKAnpIxFudwhyHhaEILurEReh2z8X4nkudgCLYQV0bC2asQ7cwg3+f36qCth/r1MXjuWm7h8s9Klj4L7rSBVkr6QqZz0DiAo6bkD5TocAa6bwJGV1H9UMdo45mMGQXYBWneYV7kD5Mu0ag4jWSgg0CUlypdW6Sz0Y0qRq+/9ucLteMaelOUlq0czBtOiqtgoq6aVPCojZWuwgMp0M2u9y6VgT4aGxIySpMNmwT5lI9267JO9BoaOksgdPyGtw8aaF5X32nlzXdLV0smJCTHjkY/XtVkfWnU+atlHS3zG/JfYggaAoMX9JpD+yP1k5J2BOrNmiZ3DtA1FxZrGwZTVz/Gz1p18ofSaefSKAcV9EasvNPUvFahBgFSpHBtamEQarTgT6qMhPnyd1KZHLwpnQlnB9UHfocfIwIEDjxy+aG/uk0YdHodflvh64eAabTAiXVj6/nLh6GktcFXAy1EXVPTFxgcx4meZ4ELs+C1NfKCtEwqrmkI2R75owly5Efejl62EpSkBGkN3878CXc5uI/eOfJH9te8Fe6/0IuahPffDWHjg9Q8dJnoa+lIEKhR6dSSVUvnea/1YtOsnGIcChjpCDFbGbzsYiuXWtz3hUHHja2NlxsPH0b+gqCVCxeugO7rcFLYE6yu60mqt1psR49C0kodwaOHRctp67Ek3R9q9iWvV0CGOYALxdjYzmh17A7Efo/XG3QXwuCyd8m/UGAXCsxLHyThptnMNkiP7YighSYWNpVfwwCK5X0/yexW39+YJG7MYVNdUBn2hfQAJ36QIrtElb8RyB9FNkHNkZQpH9EaRaCi362rPMzA4Jk/Ak52kFgc5+i8ObD4Y60gPJ6uCCU36+nliN4kAOFJpzAtBzGrjFC/8PRd3ZADdZQ/ggrLR7G2HXyWwyojrPPDwCXIdRgcuj+e9UfjCsWifqd0fEARFiXBeEvQ5JlzgAwaoSXEZfvnYhRsBdlttnbItD1buu37lQh++Jd8RW1EC7epW51dTBZIQXVBna7KVDjIorIYSKVCIlZ0WewiFO2dbsCM0YAe7eoOxc3j9DRBQJWA5oO28a3tIjP8u8Cuv7YBPaiHLucdQ2G8KHYil8rcOWlfH9LAhkE527T4ZseiW3VhkO7YIl90sGhWApdrWvfUsmp9VJbbR2eZXDVRBhAxHAbve2a5i/EU3NHmnVJoQZ8dMp1J7ts2nI9y0DqATwwsBufil3z0trC7SC5XvTZYL1UynNlHfY6bWT9IWxGFjmJeanJjuivSr9DFCvFUUhfhNvvasxQfIlRyy9NFeJg6PpriZbzjlgaGY1VockSlxuORHD5ztBRO3Yq7hgRIszSsIvES0YIhabhjUxp+KCQwCJl87jLfnjdSG89U2a9N64jw7JHiwrq3iFpXs7LgSRukKGO+zmnD0Y41v3GuA9+8TG3FtkLbCui87F8ZZCj1y0QGZqNd/NiOu2IMj9dISu1hUUH1nRnNlpja7syNZe4D555kZjEF7u4iWIP/ZUrMjzLmxI5HW7sOowU/t7GpXn8vI92G1R0YyoQ/8dmbtf0xqbfKYpN1EcZKyjh22MGMBXGUaRXj8tG2ktyCZmE0hU0sSOxLo95cvdvnJjT2xWG6/nWFG0w2NAiwIIUat+y8JINM/QL5+wqJlMtHTy/QJRp9L6GINA7V7qrRA4J7eqSY5rUTOAdcCDRcy6PZvuth2CRXh9orUuRi8fhqthfWKAfD54MxVIE2I5ukxNotevzwhNJqcsNpG25hAN2Ma48t2Ap257tNammY5mypJNq+lo62batObHTRlh2VhCwtZtN8v6e3nZVCnKxp017uqvM4OlKbhVEm7VY1m67ly1egFcMOyjm+3XhUlRBRY6dxV3egOR5hstEb+VRk3PSj/cAZl3xNI4+Qp/Lm30cLzJcXRgtS2unLz8zE5nH7fmt4u9u+KNnJn/LJz1pl1xugtyR6WRPhxLol62zSqbfMmxTH0LJQgI6nxq4TCVzdzU+t1iH1UIXx1oQR6updTRIVWSO91UiBrE0ml/9nHWQdxxLuNQ0UDJQOQ4V3W4c4Dsp3PidI20zUljS3zQ2Scm5dvfWBcSTEr9W1xWx1YLBq13Z35MqZ51mQFxzo9H3/6ge1VBLVuOnP9+wm3/VrR55UZYXYc1EcCrhSnXxqJk+jBGX8zJgCIrRRYYTbokhdFmWEroMUctkVIRSw1rMGfv+z4KAXr4EzbTDg4PnOqk/+pLGLU2iLBY6e0FaWtudf6+vqat/JhTJk6EMDLliy0rH+XPt+nvf+8nX0l5ftfwjALapojQ5JxZDMMiW+xkGO53dAlE/UgfKRlgaI7HlFyA3qWqVzf4xpQ75X4SKvgcfjzb3PzHSg0qjU+yc5s3P+nEFIghRBDZ5jlS9IJVtnim89b5hXI9UJg+3gN1IQfhlo1em+sFTjbwUL3waFnmbW81PgFTvZNbfu+X0bFGyG1X+Kc/XRnIbKl030o2vh7gMQBa3otYj8cvw+EDgo2vOxbZcee/me6/jRa+SPJc1Agi/ftU0JS3UG9IoWQ0G2J+cqDDXopkpLUEhh+M/+TXS5CvakLbvhVv/+FLpl71EylaAv9cEc7sEySEEWdoHloAWdrta2VhHhB81w+btk94DxskffQxa/sbwrtP0r4CoHOsqe/0PE1XaZ9JZ0qkfMAjpH/gWQkL9A/mzksxxcdsLckIoh6hcHYweHUKnEGhaXLWFcVLT0ZLDzpJuFnXdLT990N6TQYwwP7nRRu/dlYkJD/4N8Jk22I4VkrThZlvg69OOrSEiw/GJwL7sQA5/O8oxmt7FecHIuVs3XCOdGaRgNclHMYwIQNVt1UvJGEQ67+TEpOx5xshFJnWjUox9Yaq5aNhk0k+iwyOzTrBpkMXQM2l+q46bEaeKK37Um3fLLwWrJNSAOjmE4Y6kuNeWGBtCSG6prfueFJeGz/DIybZUbOkIx+ZUpQgvU5lt/b/iLQJPrfU8lJ4Tn8rucBG2nyRW38rW2vTspcoSRRUmUbLd3EnMGmlBn1Pm8fT4Lcx1kDlDiEtbmMrfmErfM85Eyz0WKnScTO0+kqaZU3DSS19hlxpWefJg9dKri0CU5PK76ZgrfzNOXDy/lWM9suKNnpTeLf6wKrUfnOyeqOdvpIdzOMPd3XD1GfX7plWJT5PMgR0/4Xsx+f4u/0lH8Xd9dSNGtPvrmNvwbxA3/8lu/uFy7/Shx8q+/ckIa/X8YYjbznS4IRe14APsygMisIG8+Z/lRehA3sXMiRjtCBNccRofI7xrI1+t6qhPnf+0A2oHb9fU30NZy97b9rV2Ud+lgpOnKBaukiNllxT/UQBg3bHO7aF6K9TDK+filInFJ8dHasnxstBNpc9HaVl7NSfUHc56Zmtr4reaibrC0K6JbH1QVRznHfnYs+P246OVtYnICPP3idfPreFUfUKY9qpUBB0uVZPh+scq9WuXRqMxWok6XQjJEVHXMr1hLJTJ8yMBfmd9q22+GtFbt7v6LCPB+NwddEcCIKbNUGxBkCqXcvslgW9rvIM11P+SO0AmR3IQwfpp6wGRE5FWhwiNKj3w97zDM+rp06WvwcbxIbTipNorESkOxXE9SR9kttnMrO5QnvohF4WCYpjB2KAbDIhK2/Ld61QC41rfXFPYvZJN5Qm5F6c4qOZ9Gz3pV1lZQ3GrfQVKYJnaLc6jaWgbSsl+awou2oC7EppwgIt38/F+B6ErYCHhkmfniuz+nr5k7Lv271n4XOFuCvPbvi9U8l//8bn1R0D/whF2sxwRwKjFNoqaK2yaqMaziT9lKgPHRXl6pWrmivZJvEYTvSuGGS/gTk0M8mRyEnm90awThdZ3t4rds8AsCslvv/Ee8zR/19s1+uGvn7OSrYf1v9RndfEFm99c4IAGnv9wsn7PxbGg+DgIC0w005u03nBTU/kBkCjIBS+ICVk9L20CLoaOzNDFAsHB7uJY7QTGBQFfLUB+s3mI33E38D5v6Ny22Mir1i7iY5AQChelngVd2tzYaujR5OnMENBw6XDFhALmbKFO40eETVcaqTTIE/HNHCKBdG6brHNQDPYIUPDGDRyBnsghCQS+zcWNdOnIKCihRWHv1umkrILmOjF+CbYJdzFNmiLu1bSpnca87L4cvqCiFKJla9ciQvnpywKTDCwQEMl+Ep2UKqCQ+H5jgjbLvy+c3Q7mN35vKK4cibA+DBNfWBZOWzi7rhyviSvIHFXWm3rK8krJ4eC+rhFY509BmpAhIKemZNBqdT0tP5RGpNOzHsqO6D2Ufg3DXqna1U3aflyCXGdALM0B0gUI33GeonhyoHZ44fLDWJ58s5plFgiahgEDm8kFk/MTkxMTjBBDVSA7a1f3iK+K5g2a5ifoHuWVo6KbTAynAl6tvqL/4UE4B8eJT1Mx5meDDG7HL8ZvufqM+FJSwM4nAZjmsg1X2DTaZLI3FYX87NEpmBNfNho2Rbv197QBhWCQqqpYbjYNFucF8qKYz1MMxGxdFLC2dODCN+fji4vjOI9Nl+eEoZnFCw4nnD45qubtaqueIOZLx5Bo5Y7ywXTtaVBskhidmpysT06XMhMqIhFQZPYEA4P8sT79enkmagRJnNtyhf3aB/lmgEfLgAvwKo2HKklNdGwE/xitlKr5hEBpO06/twZ6MT2Gkpy3qFpK3xETrk7eDWteZD2/sWDx3e3PP/IBT9YZpMZ2m0IyYanUjRfQcTtW4jZbHlggBfsVv/MCn29+vU8g461o7TJqi+idlFrkZ4Fdc2zq3i5vFH/W0AvwKaK89iO/ARwM2QgExawYXSitLKhffM+uLpKO9W9Z5GMYvSxksVdWYqdYwViypVNMRB00JHQC/MuGP9J9YmSAjyYCwMrEC/nOua6mq5Fpo2pJ8NWwCUtY2rpYI8gw86RcUc3D/NyIeH3HgkEkyfZWfaiv2+CqLhZBnhX+RtuKLlcF5mynILeertl0jzbuCByGbItI8wK9MvRzfsE7ZDcH5qc3rV0Z/H96wYef+BKl1wNmNcP5G5vmbhHM3M08VXdSMrmrGLlaMmWrLeyW1MVh0pqqiu732KFx0Z5rwnvY0DrTEyASS5IotZ6+gs3/b799c2ijSCtkyegrmB342g4xmFNepR8sU2rFV7SjAr/Aqu4xFQ5YweGIqo9YPwYjI6FPbjaTI08LR/tFO9q29jSH5V+eJl+MTZghA6DaxrQ1eN16bhRdRRfFJHsMnKWWnCx8dyQy1olhxldM17W0TDXa6kRwBnkjOSIiM4UTke5KYnlmYfYGcBN1cM/CQtNHb7ksnpEDgNLy+o/GbiW+6BtjsDNJXE9+YRzvB76+WZzsXgusgd/bTjoWpV8vg7hfLG0vUwZshj8KfRRWjonL0LORd9rRItX5leTC/y78LchScKOgC9t823s1d6l2Dete23sx50bRvAgFNIcBv3i9Pb9XfTiyH9guqb8++PO0NUMb+NbixFdnachve0w7olsZg3eYdm3UgQiY6Qyz/1gtuBHYHFoIb/AFGR9FeqGQvgPbkHcwDNxn60W24UVC7pRiSsMOoUpVUKNbzVC5cBywq8GhsqQ23FeLVKnQPLtiQAm0cZQQGMVpUwnPf8grDBHzXqmQxxOhdsdrDk4Vlqvbplo7mya46LEEqFJDy8U07uUwZQLo2r5/7cXSuQdVa7pLXr0ZFUOh5WUJqPqXIJb/XNre9Bvzkqmqe7Ghpm/4wWQi3t670sqEUKa+OQpPydjbjiQV8IUEKAl07xmabG8bma1t794yZO5gsorBrwJXbqqg+qfEyfo0+D1wWyzIT5e3CSsfq0P7IyJKykiXrEnA5XNWR4ygcJOTU6wlwobR4oL+2vt2qLk1mQ7jeR9qrDztIVLKISqGJyViakMGk8cCJZRf4dU5kWrZKl5dtJcd+FZtAYmLDrCsgHmaFDUrarG0gbG/iN6ob6lBXq4/YA8v893A7Xet/OHhocGVw9NRHS+c/vk0FiSvoD9KbAU+WaZMFydEQvkgtKVTmFVlZhdlxzmmxP3FM/B2CoyATjs3RZFcPBja6vtg0/72H7/+GnFKpHPksp5hKY8tFWWw5iNuzr5cBJ4jKyls3tXa0Tl5L4kHPWxywFClPRCygUIlyAZcuAwN7nkPxvItdG9taWzaVK5JFcEbvvkRnA1WSKSQUk+r38MFhIIN3zMf7LDXDObY5/Oz/rDDw2rWmXWmT0+Wcq0lwQznWOl/9Gz5QN8PYcC1aYs4p0ZjkduJ2O0FxzEuUQ43jX/dy83f8NVz4szYsq6kQuOyWc7f3by+UF7qnpZm0azhyNoGVAH7vpcBPscKwuaWavPxBemleUjc22gpOHgPDUgdfKaRczXGwHgdgfhMYpL70VUC799FfmFkv/JTQqX2Ml32zoIP92rcQ+mJvxmtgf9Zt96vN8kkob3Js6y+n3RfL9kE1+wBujz45KxMTWTVkWC/8Fl0LuTDecr8dOu4SVCBgZQFUlV0s/Ee91QgLg7sZAdVi1Eqq+qI4N7Q3OZGWKm22Ea1DJdQmziZceA1/fTF+c6IyAaUDdEtjTiMIsZwO3Rw8y9DEoeuC+u8ZhPwLRFRRWkhxuKvnO96GzejRyjCXEBzAd22NKGZJ99b1xNHrd/O3pqDKsX2ToaZjY6UDh8KR2VdqnLP6i6OmqU+dMnptxQZ9oV3+tGZI7kM9mygDwaEFCT/hiwcamutZRC4NarcCDp2Bw/YnRmD4UwWNHg5iMckjBRmZG4RMcaTqMqmFac2JETHXMioVdJlvNXjX1ExWjvTd+InjdGaOlMGeSkudYrJzpEzmwhIzGM+KyVpMLo5Zqfg0JvZFxU+AbUueuqXfor8enQspwnXXZ2/rp8mH6YdJGesfs/uTDugWa45V9m97TjtI2d/Q3Qgr7AvuS4y4FGAfP9ISe3UlsvaSPk6Rl5FAydh+lsdtkBZrastsJO0OfElWmt+T75OZajX6t+zMiBub0JW1oRnxBZKWQu3/TGR1ZyLyF2l4CiPI7wrMx1s2tV0Nojn1PfUK+AIz7ltu39m2/c4d3Fifcfv2fHLf0TO+pbOvP/pgB7WKpi61prFbJdUU2GUYspYwKWkCMgkvSIx4j25AcN66A8lPI3nQSFFmEZ/FKaMXOZ352C+NKy6pT9Lmln2y+9u0H2x/FiaZMJzihR8WAomgl7S+rw8JPdmZ0PgLnf+0ABiqdo9H1SFgWsn4+/LQ0A0B3z+hn7V5xoaiQmNDXm5Nw9Eas4cYdERxwxIvQg/MKM+UFBtOSlVoBKb0OikunBQOTNmqQBV4uaMlT9KUJ2vJkzUd92CNsMZYnawMvC8vVS1d0V7BJ32Jqv1dC5AhQFHG/OHTsv5NrikpgTZhKkGeRJiRzcPxOCkP3/gNH5WBj3xzCkSAWQlj04i4FLo/z4eYEJeEJWgDcnh8tpSMxV+F8f0E1CIaGP1MP6rDjcoVi2g+MKyXAk/ji8Jq4fuBR266vFK735yiCluRt2W0yUHYb1z8jL/8gHY+xDXC383NtcvDM/LPzEzyMWjXL5Fh7GhgDvm3mHtsT3neBmDzVNc7WFFJWFeNKyt8VJVh8SILXoxNz/jxHh8xESBdq129gUrjztdTf1mWv1p+L/dC8bnnlb+Rs8i5t7fDavphybl6M5RQM4UzuWmeE6VfxObmZAHW8AJX/NPuC+OuQjVLaCVYiuksZSqGRtTT9NvUWOVQZlWBVMsZh/qzrGNbTEdSvt31odVdaFN/ltZNKuqa/oHsk5co+huViXbyFfMICVF3D2bEanhYN8TmiH/W99QLCZbYHPlHyYB4AAEa7CLno+efJYD4e3lXp3pHamPqKWMvNLuaOnNZVCM4LwQCHpkpQ1anAyuz8Lgxn9NmM8VJZoVYTX1VU+bDinbwmuoxvxr7X1WJeas/eXVmEiRGLbSkvxpiiYbv1f4KV9qmYHDGBEmNjEjVva5T8objjyO+f1fjLpW4uzd/awUYTFanXpcNGJsvvyXUOgP1+iyAKXrd//+XSP/hdUU005Kbwdy1vy+ZwVzc083fHwMg9nbg52RrZpbO39zSKxcx+Q6ZYpF2auncjS3rivg+MbnnknKjcxQVY5cNCs2oKXtLvCwCUmvn3pw/PqYSaGjb4F+5tDeXjd/q5W/OAgOz43mhU/zKtHFnG+juNVVqTc88m338zABi7MNPq6EFz4XhnpCcgGRDXNSFmKR0rKPVuayzxqA2q3LlxWHw5wwtx9zdBrh7F/Oluq55tA3q9DEvD+m/lnZOKjqbkjhQMge/uwd+4in6dPQdv07+9HHFc0+l1QWjdbVk5sMvFERw88qZTFCrgElW6h7O7dSF4G8ZN8OqHTo2GRu1oNayjfoi2yX5RmroqIp5LiBFylcbFXYdf39r85Kiom317zOIUIMmKf1FxeqDFC3/Jiezc4TXqQ9hQqHMg+ZSOPWG+td0/MD67IawHG7qzraBarQ0B9m14bNsbGertLBp0/z36yYNWX7QRflQbOsljcdblFY0q0BGUvdCqbwF151Ul+/KC0/O99QcFh1f/VOlwZF6afM35dONP9XwMm/x+yf7J5r7JvuYByBfO1+ZaRksQY35wjKbSjOxFJaWzKILdP8+eErYyUFPsd9cf+qVTmPL1/1O5cizku5ceexqeKle9DqAJORjfxo6HT/CvmxIsn6CXX4Co6ySh1dTNhvju1bG86DnVrPVAZ4sVGm2oh6TSUtCS93+Ikuo0qK0vgXZ9OWHgnqDB6J6W/D+lSYVEMW1tCBBuJgvErAX1f/AoOWCQ6a8dE10Vlc29c/y9L+XLocFhrj/BYkKZZacyV8ap6/ZcIIxp4oxSUm/HciXjuVS9eqcEkmdPGrqk5alwtQgvxurSbe8d04XpEJ/Yu+/e7Q23ShHFbYdGhQHGYxdX2j9pPhpwJpLO+3AhrsXO3Jr2UVbtjv+XgylvCMvnYuFp2Z657OpT9LHsrLSJelEumborGz4VwQIpwnlwj4UE5EA9oKzSSkIEqfTm1kpma/akfBWadgfmYiqJHwf0Ack0ZpfUHWoVpqIljgyWfmC6/fsJ+X7cisjcLYIAq01h6mZYlWbE5rWIi0R3zzXAWi69m0vNBPqtk6++r1eQzNbf+wGpJ63gHaUnOZWtrY57TwVm0tcQDGjS3qvbfyXKRR9hwrHJebHdSyResz6ZDqo9iu0Pad6/cOg1wWklokWJO0h3as3+DdOvNnH4yP5Vz+c1Sfpa48uEdMl6SzjdbGr0Qlo9s9caEhGsI1vfAbxfBiSibb1zsrAHkGv7wk6ki9dyFb9oTrs5bY+4jZhUY4A6XlXpkN7GFaX3pRjAoP27xVmlBLuRFnVQbEebU8wkX8XpQaq1Am/efa/d65va2b5v+Jybvv1Iy/BqRMA63KaO+/c75Ji6Cubumu0RLH8TxG//8PT3cS0krTAQrr+qcOgjeRu7B6j8RGS/QgxE5ytJel//6Lq3UjMqxWqqxVHJa1rzwB0R7W52goxU1XM1CorzAJBI5rniQLCQDUaBH9gClw24iJgVPpwnLJHgNPivOGyExbx22gSE4bA5dvXHdCCoaQjujUYhCvZfyXCsAWX/u7ucDYC2lcpgTQ7+u01umOduAP2Hb7pyPBd1Oi6vFFYtFmgdlt/7vb2Hedvjxey8LG/uuG24E1cBkncVJnArUwSlhdqx2tr6pog2LWJ5rQ2dXLzM/PNI9Q8KCyZeby8tsq8tA+yxi2aYVdV68dpWG8TonYxitT6sEkr5SgsTR54dTialI1WZx7Erhx5nY95QFk90VUz7PxuKB1iMy5KVS847NzZFcfpAcz9RVpGZpfmHtvRVkhXyDYqxhrNCIvbxN9DyrOytcxWr0BkFbkprzKvwMYew7gi/wAI3vDNecxYiF+C0AeYKuRxiO+Vjz0UH09k/OJRKMhqpYcaEu6EU+QdksSMpG/NfzBeME6eIA/2DzZj8Aslhc1YE7CRJ+HxLa3dk75VPiDWg/T32XXwNMt7LNn+j4awUOrEp/EkguF/BmMIseg5OQ2eklDzjWsRshafS0qFX/MlbyYACBvXSfrQfzZ9h8zSRMs6+EB7fdTagWmsJDBeCZtPcPGQUUr6DbPWX8+oalSWrNgI6it54J7ncYYDnLPdFG4hsPL0BO4Fk/hAjdVsGWSvplktBkCRtkuLlHIJHLXYyI5g1WLF2XmBFqu0Lle60H6IBbHkxd7jziWNxHJnze9TuZ49Wnldcq6zvBKvcC1leXISM31oGjak0L+O3mGNPvYOUA/UVHQNsysOdZvkb3HTPFpxV/4a2thF3N6/qTCSr1ZGhhtI+d1xjBdiA/5+XYwm+RR/iUOTh4i2/zlklpJ+y3db9Bek0SSkK4QxIDyyrO7e079HJKfLJT5Ib187V0Syti50oj2hfyOad5S4b6PEYAANupp7mCCSv6K34kkjStko/MSvKeNzSzByJDY4TCKNNMb3590g7pPGm43fPegNhnzUxJBktSTtXY9hWUDIxeekwSPRUZAhxzdIDhFBkG/c/9vfZWzoeDuhm/VnLvVeOjP06dHrsWM8P/O7eXDkFEkqJVIhEjEACJyYnBj26qznkgdX5Yf8b0XCDfe55VGaW6M87HIdYL40A3y+iPiv2Wtg+WfZ+Jt6D3FLI12iZG8BF+oLkD6N5AOLMP5RAg8TOd27fWaqztTX5VBl9WgsJ/JkzoJj5DP2Xv6OZ8hHA6ea8FRBbZ9N3eCI2TQ76tuKIyc5+nvZAxe4Ez9EksPP5GXwxbcWjWXo2ZDn2hNRoixiFs6HeHbsanUVNjHDQEKHAuIJP0PyESjliMGPdwrCnaSmn4ROqe4xfmPI7ovvgzqVWmNpfDwfpo+urYOOk8fyFs5dIp29tJBHHluETLVR+rmwx41qCxDH77pr0eaphf68NK/Cfr1udOHIhtGlY+sqM0gqmatS0fs+6jJ+Dkuutl5z2355ygCBQOpylxXE5Aiuu9iNnJLtYRhOVzHFOcKR9ltLGESMJgiAFnxqLjmTKyWm4oogVC6GfN2WQkWikih0FDJyCnvd1+d66GU+votsclVlsV8GJ+QDLLeEJdCOkFCrgcGrqEhfRdSXr2UnnVnQNSxFKKSyisQNlMPZdwekVEgh3toE+yQ/UWzlLkGqvooI5/CTY2B70NanAc3nHW49urBpcO9AY1t7dU3fUEVuVj2FVcgkzCUTM4Vc2jzwUf9YNf2iUlPyaVdxZnexwjkvA/LOAcRlftLEqahTEwCv8e1EhkJI907nJh1k8yfF2QVqBxgf7e9aEYmdoXXE3e81HcYNR5mgMzG77SzuvUnNFhI40y6UVoqyZJUCUh6ZWyAhE7j5Gok0X8MlPN/2Am4eOQER8iIs/EVIcnJ2oiRge8ib8LA3IYmJkvJ9oNxdmwlZS5J1FfCCEPTV4McXAcDKACeDR8FsRXuhkxSuVAEtdmuIRzCr7KNT0lUBa/o/Or8kOr9ZvTOu7Ib6bdRL4aj8pvrgSvvcpL8HjQ+4ZSjoS8cHnLkf1fNqEB94zCskWRS4b861C+d5A2Y6RSigq0d4RgEZhyeDnOXr5de0rV9rILW2ft/+Emr5ru1nwPy0ayfv8Ia9+zbs2ztUXNqwNM+4VKy8TagZ91pjJGZuznHiHAFmI+voRaslKElaLkxOPYVJhwKqzKabEo+Bbk5jyf6zpexSsM0HhKmwjrP2x/TTnMYpweOravpXiQnuRTqh5pAr5JVBI59Srh1nnaF9ei0l77T2wy6vJu/pKwVuniIBv4Ltezz8k6xPpomLSar6OLUBfXkkCIbV54xJkPq0Wcot1gY/tUuhm1N51VKFRCg28JUAvORqfCl8nTBejUL/5MKtgJs58Jx2OznYzpHleccGC3mq6UxI/TX4ldlQcWCXBLHZpCwu5WFCjFiLopis5IBQ/kJePmSQpu95veG18rlMb7W79zuA9vQ/vyCJDZ30D86zujRE7QlkR6bx9WnYQa/ZwL7NPn3vdZ1xbNoeM+o5h9n/CrGdQ+xNTrN6XMcA9bo7uBvE2cFwr92gA5DzMl0nYbG+6JH2esZgtDpdewWOHqL935uep2qvL5CQya8s6LHeuhnSPUZ6d9z90AikA8NJpsq/PlTzzGW6jErgZSKhkLFQQqHMvoJFZIRQH6EZM1ytkK6lglBtaaftcAtUNVZ45eRlx2NcdEsAI1Y1YDAhWFR2pX27yVYxxE8bPPFpFjIrKVyYrh02mxClhthIbtcZxHmvTRzE+F4EcO+hErx7ts41NQ72OhpGPduqqVn5LqJz1I/svZFOH1HPBm/uJDLEtiyrTdPIhtbGbZO+XURqqhPS2x6EJMmT3g0Vw82drRwyjw5ZxgCXxSbg30uOChdulnd4OOVJyJ4QOrogGJUWzzAKGfL0zuTIuH+51WpmkZ8eMDypczfbFiu+iC2GtJHlX2y93bZAPc06TeU3WjfaNbMAz21ox/X8xWtDIwtXDh3cav/7aNr0tpnXnyUS9P8sGAAX/9xasmDj2djxGUBCxSW9QrIzNy3h08QAbHwyniYEGX2dPcOd9d3rVFG+nAu9/KgG/hW+GUQ5D44PwJoGEBlMbiaFQcUb18XrYrBfxcdqEsl0DnIAru/rajP1VhTVtkVB6zHj+k0moFkQbORsHf9Eb9IvqNzgD30hEOfWsrnZoWK4V4QlkTOyyHQOhyIqsXL6FxsZAZuhOEW5daCudm4ccN3U1nLKNqCFXSnS8qSDunaNS47VXZAvkuhVEFVgqJhYX2ucHWusIYmySdQsKYklENOpIhFotDk+R1BpIU3L/w3V+g3pdqcAya1rR2M1M0N5Bq6J0xaNaH4cUBUp1YnwUxwF07C5pbuOLqSnEbgMi5CJT+dTGSLcnfyP8YSP8++AeDdDX6WTbGhyJIFDvQarhVgiTe2GIZNxdtS8YebUyW60li7NapOIu8RiMk0gAkjRFpXupFovEit1xfLCazv1euXzy3n+CkopnCQThsnBMIj46cAVM7IyqMwX/I0gmrsfht1ZYSorrayTyrSm86eDeZ1dPH5XJzAZSz0JkPpYLwLnNKP+gHvUqw8yed7keceCFWx+cU0ZUMV9nEvLIk5UbY0IkSXA/iBTZDwaXS4WZqMwqEAvAjsQxQJiPWfQAg+shvNWn7pVWGRUwDTI2zKGjDRRtTWGbVMC+6NJJqAxirIFYlQ6KjCcgCVgQZh9DQZWPyw8ktMWmREeMco0KqWDunocUcDVHKRMIvuh7t8F2cvK9RcbhAUFp6Cio0rWiITsky68i9NJIj6FJU+4Zp8vT4Bp/G8vJCBMqizRGHMSLJxAlfKzeoWiLEEglhRe3RxL4oDsMWntf+Ged2DIyCb18Tg2vAwWnk7LEdEYxWJe5lVLvfGjj2s+p7BJGUHBGYG5WUHlbOv6Wb/1p+H/XDfK3xQn+Pf/4dM13vH/f+H8WgSj4DLEvwZd3h4c4DOTgf2a6lV/PH+dbwT8GPB/uLrEjFTAVPBdGbxmAy/XxSTHTs65SeghCvNIeDkww/PaymVaBGeFmjABg+c2OfyHxWVkgsaT1+Txo9NIq6Ka9IeESUWAxQN4rn7hMwU+G+DnYBrdDqqXnGzzX0LNPvhgYDgIEJlF+EmCX4mgh0HXuFwnfSq4kRdh4TcanjMhZXSgtZHNDLKfRoiph6oLgy/BdtF9wL495/tDxTiC2ODEj/uTCK9BX5SA6yQbJkK81WvO+f5gcPJriYsFa/ahHSEykS8DlUJ833Aui+uEiO4n0PwAMX7s+xXUN9RnkG5hZO6Hlt0+LtDYUAPS3DqI7S1PNv/+IFhJovtVcB/ADQx4fc54Cti+VpdWD3utsdLGd9n0zISJHxaUNg/7h8bsgDVOwOwD5JUOuciQS8l3XEBY8q6ueetTCB2C9RZICPbuV+ddBcPauwfnPp79YBrEQkSQNkMHpwO0WvlRuHjJk/rqquJ+HjScavV8B1rPce7vQ+alQRxAEszQwekB0AszygRVfIeyF+sOsCcsgtLRQ5rrigZYeZHJAJujlHFRPf8uzn8He/ej1fMPGf1Gf9HL0tMqKNb40nDv+GVT7UP4AxaFR2BT+ARWTZxrWa+OPb8JAfg5TBkLUcT5rn6QMK6rbkHVdQSeg+3jugDjQ3ghVQePwidxnbrYAzrl0cHf8BgA0PQ5vBY7b2v8rK1PW1UCSojlAulO7Q+yK9VRG52mOeonbaueO+lG68wOj3diAMyT4lcLea5DO7D1Dpl0mHtIIXxuTW+XI7fjWxfqPnAfmeyPM9PEs26us0cI78sbBS0h5JqYqODL6eO7OvitVMihCJpZPnMBaZQwPkA+4uDjTg2PuQuV9OykSo9hXBEzH2KSeS4x5ui5TgxKcbUlCMSy1MRTQ/GMPHSOtMVcqWiO6u3prZc/P+vhr0+2E4jBb9AHnuNoPTlfoJyIL0Sn1Kd2V6wiYk28B7jIa0rIpX1mrXxnnMfIBY2Z/UwIbk6D8yMnm/vopnoh12910MTwnlqo0fNfUoHbA4EtQuYEkpkF1MSr9QLq5F3vFinfdP38svBJOXAd36+zhx8YdCWHHWBACHiJ873fUz4YdJ9W8dJLxl1vqNl5CyvH2yTa7u1MJ9nbS8ycd3BdfO8otE57J/nN27uU2mrpmsqFI669/8/bj30d58N/gCObA4APA088YmzO40T97vGWeXiCcmZP9KnTnqQ8Rk/2b454CntNe6rruuLp2huZjMqQF3jxC4j730tB6w8f9WTVG+mNIqfRSoRrn7pyRTjQWgMQJa80ImwFmmAoQFghnQ6KNAd4wtGoh2pFmSl9wUj3fwYH3Q4Q06smsQ1aGAUjw4fxEb/LikIMZUi4AwATbkUkQexMWHNYzwMj4UVECvHLKO4AWNxGSsjnaWb4Kl4iFQXOF4RHyHCyToG7m4t84aJIUfv06Z6/s/LsMfyueeNJozqryfWCFNOz45/xCL5rHg7O3Z19+UX1Qpfx4mgozqpiOuAY4nVWPCqKfDET10lwCO69OBC2c0BbklXnDS/+mbUvfGUv3AFneLpl3cU9R7lG7+vala994wvFCPB9Ck94OYjBX+7YUjL6OvZuq7/46rsRXo8v7snW3qnr1/b11dfffEF1doWAp0Iq7zmJgAF1Gk+0CHXhQUMJX0IvLizckni5R3RCt6W1KRE1BBd/lJ0eCEa1urnTB8+m74BZW7Y9uED/rXtncSu3Nz3SOt9kO3O3W65LwTc3zVc4BalRK77WmsaFgm/xekVWwqsLj/pmtu4Bx2uF9bD4L5vLGyn/l/0v+AhvxKPD//J4hLF4pPhRJL1vzc3p365IZ+sNW/z76UPNHaW36tchQsr04EXCjbqaHiKlh4QnXm9tDJnohHN9o1xcQwEP2qQpogPjM5lwIfFgY+FgQ9i/1DVh487W4TNbe7Zy8mjjyZGwski68o2TBw/++D3yqXWgAYUIYVZ7SQuY09jLhDMT21vX6kf0CwsWiTNl5HRRRFT7EqNqQVUU0M3Vuid3CbpCSfC8hOmWTtd0U2h3QS5dTFlJzkQpSekLi8S5VRDMeqgxwULAOlJwVLwnsooWiW8JQ3nS+uWb15hT5m8TkUjgJEcHSQNdviEvb6BdNfPQqKuW5JHnzdFInEvkjbjXZUrNwkhZoTJYiFJFittw4s6GOL1htFhUi72SzdNokEsUhW1jJfO4NdPhANesu2ymd3QZJA3C8ltPahgrCQMkYBUpJEEBs4EIUTJqkIqRkV/lqPTI2+fNaOAWPmcabfcYrZCsvTmA6PPpdkAaX2PlhBB7jfTWvct2LtGy2MjidyI4fTbrGSTLBiUTzDblnsYCiPQM0L+riJCwl6HAkksJIRWYwFhCzawj1SrlZhkjCzcLFoEMHkvCOtlsznMDMgQGxJI0jsMoyX0WQya5A9E516oNE0Sg4jSndYMJsiuvrGy8OIaobhf2qVKg8UANCDd1IZRBB8yyWuJYvH5Tvz7tvzJncrMGBV4YveQPoqKIrXbvcmmyQ80GS22E9zWzv0ZVSGl65txbWZP3ty6f/WptdMo5RsuUKJqMStpoRUhsr+OMsb+03BpKh0GmF9GWH9Un5hIgCFWqQx7p1UOTuXKy4T2WtYzOVMvpyrHJXusSL/XGFN4ZqiKKigQkh2HjkUvPtV/O7Z5Zo+KFx4HK+cVhkKa6SUgpcswnvWXEKGUsJJKqwwSeT1bDKJ8yDE2C0Vh9EuWHwQx6Y868rM5Toe90M1AGsC0CynSWRwyp3KbZz87/KEkzU+pWiXoyxm4bzzGPwQbL/PLHPBmWoN7TrbVYy0shcjCGYSHTPKrHEjmpvUQ/Gamr7SbtrWkXwgfYrahqW6yXYpwPrcXNdbJbZhsF+zJ4So6UiwYElwrIyP4jWTtskbyfya65x7bF7FbBIiNc0r6wd7xalWjcBiD0AXZsHfml1yapKRY64TvYzKqFMge+ledJ95sTyuFhPKYf9vHuMcq3LNJOwcDS2wJGCS/0GCH6jt8N3u1JUYhmxDEjayCJMmZ1uZGXzX/WN5GbTQGMRosseLvQL0I66IE9b24Rrh9zJQmMIw5vEYHPw9p5zT77MjAnEvJw08JYeYE8elzwFi5PMOtMME2cRviBmbJdVGB3zLbO9hCMpCYsgzWzNe8Z6KQMzMZ6qAL7V0czPMYcpeecPkrbnnudBX2FrdOeEgpi/NTum07W/DstwbVuiA1KSdgg6DqjvGURzFYwhwZ/YMAtoiXlwFvmOGcZ8KDxj2ioHXyv70ncEwl6f6S9Ff7okSwkJv8BwKg0446wuYzOIyz4B7k1YyZ/codaJjgdeuGTrUo1G9JGjNZu4pZQC8pEcMTuSSaGK6ZFVFjtm53L4gPOfCCZDTZ8ns+8AWF3Qlg9ArUxcNa/jpjRsx7pgnUAtsgUjRv6EDWDVJMzoeEAAj4YiAktGBD0AhOwSoIecfx8ed5Ycapecci/7Q+4UIcJQFZnDaLunPWTT/P6vCFei59PEx2fuKs6dysrusEoAmzpte100KHXDshvx2hmJ5qJjk2NrDXQOXbUGEu+jQhWRuYSfRRbF2ZwGeC0aM1tSuQh4/k1n4D2LV5Y+8RRoqqqcbGWFoZPNZEi3yZnaAMgcQ7WQsaHiumVo4ESXWRt4lWrNAVy2dHB5mcR+ZUe+zY4Fw4ktXvGAQaiLOaxLV9Wznj5TAeNU9KFIN660LZ9XekCjG7viXdc7YhIyvaQFynrkM5w0QlmSMUWlZrZmGUymWwpNJaYBKbv/q1HRgjxczC5bxgn8mi0JGbuhP17NQng6QqwWP8zT7ReRCPl43yfbUIpTiqPirKVcXJdWwMkjIwB5Y0rkx5+iqbCYUI6qku8EmnRSAcjHt6VJSQS9U/L0zpAjEGN3P9QGtvozhxVyoEE5EIN8blD5kBj+i8CTFtZRbjg4FgjWL4PB8MTvOWmT51s7AyL0aQ5x1rWZrlK9spIYdMUoVxGRI6kXY2d1OAl/d7dbFuR+PvZDQ8WLZo5OcifAtzVWLNpb7d5ajS+5+wWAq+73coQt0wkFEQaMg5SzdjfAcvejE9S8waR5APfEQqdP1HLw5zGMwRQU0K2ck2SQnI2LXgmCMhBGZMtMTElAydSwazsItNA20a4y5tKCfCi46wmcywdyn0aoGrwyebJVVzhZhRv22E0z8JxdRbQNSSWRduEpRTYcgh/8+hDKuI53E4wLicpIxaoOYj9Fj3P8dYGLlA7kCiN9cx0mpk+9Shu2UTxaQtb9Xer7RaIihZzWfER2DoNozNUFRmOkmndNQPa9BM0XaF3sNMW86gNRaWbQ8BccmozkAuyiOOtN53zmFHuONtH3jvs+132rgtgDELcFAreWg8wQnikdXckWZUhUjVIct/sODLSp3AevVITlEFRLjSt/kZO8dXv2L1bVFyWFRLwjhkCJyRrnUVODmh0hWyBcIjONHJYay15+4X7optmNMSAjmJijbu5/F19xnngzEZd9jbjeylXbVD0nSikJRZlDCQnaY9Qk4Y1TRzxT25XhDA+9RmPnutqQ7THCvMIuximLhFUDQnOzn9LkypCO+FLaJOHOfN4AsvJuuiZXk96OZVL3znYTU4ZLi+kQ2tnnPpcB2V/DGzbO7QOsSIps/mAiGbP6lSv6MGqCcYloEe1BUHOMlSd6hYaM6vKGwMKES4lLYymMXNtUqoZvq8P4ads68Y+IPJhSZHVootSN6dpk/ardGL6yEFN0VuLLpgyYHXif17JrP9vEcrPW788o9EuGBOjqEehy0QJgRjP8mmxk31uVOOIsVMw86ekoaw3LPeONJx+giOLyV273/UMa2V37ytVj1KRrofuXXDC0VZb2tGJdz7zsERcESyk9xZIhSGoSy0IDmY2cDv57wg5tYwUnth/mJ8ModXEfClZ2bvPTc/9NY7+Skhnmu2uV7pfFYAk9qU7Wj7A56zR+YTsSHATohZXFlQKH0UQLEmy26UllB63A5Jqq8DvORcDxmlJ187xxu8I+wfA5mP4sXW+W06Dahbcw8vQ429GcGe4PguAYRfCaQpPsR5GUSz0EtojJrzJJ1gwgqcGHXvA+JmI7Z/2Td1li9KOIbW3ZYddtj1+8T3YvivBAHIjtZNsu+sE/QL5YggdYEvNxJpx76JGl2YuMmp++CTzzqfH5QCq1FK/jsAFIKYZRQ4ITafOugdfUhlac8Y+lzysDqOdASPat52dPUJANUK8Xg6wZLUpTauiv34yVWXTOwOa0c1JhD2e9K3LDMjlF07puw1y4iAqojPMLmoZk3okbEQ/HQzqjNtbBnnm1MsaeO0A/oAMpXLq4mPbPKjoXGQY/IKdS+fYGD/qG1PlHoZNl0H6QkUOI4mS5/D4/8TjB80RDSrCagFDTn+bYeuEmshSOBpLgpf3kC69sLRRpvDvJyztZUsYnLAPAwsCO4tuHvEG/Wj2uh+ufmXfXwuXgEn2oiDbFZzdsoPZDqJJDoav23UtOgxE9SKqQxN2b2YL/4JQGWvIHEa2m/DG6WlqtRxdIbSbLNlDiu61rVRZDGiTN5WwVWNJP60XlRKnPMouj58blu4FMQEZa7n+cpkXG0UxDnOxmaRtBw19HEOmx39pqFqLVh84ZegsBfMILXa00UTTfs7dQaRNJa7OpfGkIZmtlTrRhOBmcydDdi0cXHEZ9DF/LIt0vimdV0OxH9VZR+rKRCPIhKflYpTd1srY17VXvOaptsr7qTTVySrkqYIW/ppGn2GLlLQQ90r9Z6iSIokj7gQdBwmq8n9M7KDKN6UrFS/4++OSdjb7TbGg+IsP+cviTyAAlnrklndwEwxpdGJCVKS404lFkonlSCjSTEeZo3UhGhoV6WcoxNcC4TlIJAVldUgyUPVTm0wQnys8/l5Rnp+J6fWHTcV0c3pYyInr4Wv60IzivR3xrq7+xIRAF1yF58Q8DUORhfSvrYQnv+bu4oXnav5299oU5m8vHlItliD5WKifl4OJoyiZlvdNt51MqyMxZjcILDEyqC5O1G6HwkpzR0WFqXkxyBBcXq6cl0A1D9bHH80CO0XG4TtBup033+xmWFuSqYcgjLxJKQKSQi1PIN9ZtPmBVd1w/zgYMzM4G8cEsfzsgEoQLVbwglHprkTOGJeCIHlZHgw02MU6F7ipZvNRS0N5+92vhEoMbSmsTCOVk08Dao29fdjcbt6S2ucsn0zKmREQ53mVcTcFUOE34CfGTogUT9i9AwXnT5SrtRTrX9eVPEpXGwTYn6mAMhvQ5PXzrPNSI9ijo0moynUrW9NTxZJJrlDIKKr0MbawGrlWVDAwCKEVqeUh60fmFBl9G6qNvo1erCdaNeV4CscH2um5kwggVQVvI0xeBjULMzZ6A7HUAZggRZDMHy3UoBQn+AqnEU6mU6O1zxVawrE2giVco0iMXmnvYQeQZGOoVmN82GRyNN/MBBRkj4Jo7DZh2yA9gwVKO2wHeb9qeL9WrI8xULYP7w0BDCTiUAqY1LHKJJ6kGCDJIy7XuOrTrHOE6QKIv8JcRrchbP2i2DYAndjtd7rDbVdarMHUEIuv8BFqeco2Mni7RiYEdRmJwX4NlMCOrndZJJpNxHBuk7xIls8Wiy/0b47HnVD8rMQS5c7h1ZH9qAbIEWGe3HmbFSNYAaQFARB2zEQxcH7rS/jH5o7VcPQk7VMjSnT+zwhLY6Bbv/E449bFpAV7YD2Dothw0dgWgeqL3dLlhqnZkOzgNCZd+8+Gfbz2IQQco4il19l6XRMpLU3UeXS4Fipn4jh5WuUUXyr7J9WEHS3VnaROkyBrmHCZZF4y4kSU/SELEDoiZHI4tbSuktqiopNnjN0pfqMYwF0w1no0+DHaGioc2AslqWLB69QINddrRHI8LTqj2HUtPMsHuNRBz44TlqHuABVQ9FU9QAJceANFbreem99UHG+qo4s5MEvUAJHaSe5pHo6410A1r4TYvVat1YKhdvllHlTZg1KM9Za99fMn2vWqgQxH4LzPDXqE7R4wJiLbMa4PpNoZPwwoPykcA1PTyrK0FoRuQmujVCB6uFKZbVYiy3TAw4ziocV9pwJACbRJo+PQU8k+FrnD9Z5q7u6MzGORnDo+5xqV4MzN1XYpaU2gtNjqd2GiOnTsTGHpBnU5IZiuUmVULJzrKWLZ1SB6QpHYsJONJdCMwq2w8jsihhcsbkUNRDGQ0Y7OPgzzuMCZUJKWxOQaBHObGBSVlK+jE4NB6N5SNYsMLa/ERKev4XQbDDjC8cHJ38OSCkNB8Rc9AbePb5xBWftuRE1iLD0YDSscfJBVmbGKgPsqwGFvpXElva/gdoUv0w5ID0Cvuw/ftHqy8pEGOgtAcaDKdSNFN0xe8zDQTxk+aRjgjbKkTdNdHEPzXTgxCULRLCyZgJugPaYekFH2qwRa5zGL2CuzmoYpbe4OlFWqQEQiLKo9tOEbnxlfWPGc1ueAh54eTg9niafq0DHVMGAEPbuARlYyGOVYGpYj62pZuw5BaNpJKToebJVZEcsQCjdMXzUZq+ayf1A787zx9c8chPueUfQLpgdpxTNwTrHz9US3NiuVXoQa4Jjwi6Gpdj8GD6g2NrCj7IxGw0E8vb/63t23JUBylsYSEsSpXtJhqo5HBGXl8UqUjqjB5Qpwr2XAICBLbWXDyGuRs2+rniyaxy40xnMmoa0+WzpXuQxbWuGIIVpmQlGNGEAytfSJoEObktc7RfHLiJop59Q0S15PKYYV1WhH2mb7qcQbZkMT39KYCEkxgU+R74Rf5ZK2IUjOFCwzQmCFtKqaJ+DehNeqdqjIZPaRsFzcDy+8z7LuhRFOpbzWw9pJUGeWL0voDKQ+r3KjEqLpCbxs3K9dFR7jjhjoVrRH0XD5kEtCdZKiIOat1pP3Uf1PBsHbm70oDxp8l3ZpGzoIa6RSK8qMojbEDBdQHvbUKtv/DRBu+jkWk2ptERmKnZjmYh2BHU4o3qjsoW4TjRykm5Z/mWL0Ytzwtmq413pjBQCn5lPSxhkDAy4pg468t9OvDMPRx1jq5adH0dgU3SetoGbdH5IDU4wyGX0IsnZRtgNX3MkaZ4bDmwdxWllntjLBmbp55tYO623B/to3z1mI6q4lFiIniSbC/fCAIVJXKBUgQF8TSsxOFrFhfm/F40Fnc+Sy925IqjN6ir42V9kG9uy6HNyFNsCWki5T9ehPVNbximV7h1v/CScrSChEKrUG/6gIKFCl8QIE5lxdWBsHGFp9uTEJzIhyqmRnCZzkmERUcfS6yyFLvCZls6V+8ZLOXfZlj/XDAlB67kTf/pAzJaEBLJNyKMG9lcw4E+2rzA2HZaWBtc1jApp1mNAAY+J7l9OHxdO06kqVRzW+sh10qlGLlnNYXTNtaun2Cv1aDCmkTQ+6G9HnFIws7yWFq7F2u9xcd8cdHRpaYpjrTzlT5cCyTROS2opC220yK+nbFOOAy+/t1ZsYeA+sTM3gGPSqB2lxkMFZwkAw1U4ITvcYLC1Ow2SZ9g+mkt01xZ2VO7MYXm/mKk+tNTevv5Esk9mpRT+i4xdKoazftcuecsgfmbuYMq3QGIX73LQopV0Owc3BsSKzWDY/GKwY0ME5kGoWYaIMK1Y6rvvaqmOCLUcn1w8/SorNmyzTmkFBiNmNmPGzBI9uKF38jSHON2PSNk5C1zJZkhn2s1mXsKLX486F0ZyH41epxhBiWuGOYIiiflWvkvSfu3+cFHxaC6VCoJVl1O9oJoleiGqXYaZMRnV2vuve0xb0WU4zxHeaEqPYhnwoOUUDn397v8yRihmaymMTw5QCCDB8ysHyqsL7fXiWe09gv/XQ+r8I6Jn/4Gnpvwxo5k5YGzC20opetmr//1IduvoHHiPc3jg95uMHvmDa9waMv+sF++xs8T3SmzV+84P7d97qE1/6lc9+f/r1L+SQ6646TE1jA60V5a5Z9oVPfeZzP6hw2w03HVHpFck9d9xV5ScvDdGppmdkUGO7WnVM6jVoZNak2Y9atGnVrlOH9+zQrUuPdV742dm2dlWwfYeOnfzP26jLrula57qu67shrBt79urdp2+//pEDogb6x78NGjwkemjMsOEjRo4aPWbsuPH+c79x4qTJU6ZOi50eF5+QmOS5r9qlpKalZ2RmZefMmJnrqGPt5heM6HRr8WzbkXot/jf72jdd5sydN3/BwkXlb5LiJUuXVVRWVdfULl+x0rmOV9fV+9Z3dnfeuGZt07r1G5o9sNaDx554atVDz2zucfOWrdu279i5y3FlNXUTJ1VNWYwMSpsF7NHT1wkKY/lDorF4IpliSrBZPqIzomSuOIFKi9WMyxv4KKFYKleqtXqj2Wp3umO3/kyCQ8Mjo2PjE5NTxpx9QbJzBp29Tj0/cWS+yaPwfd+v3/7tvJOHkOz3z3166ocsus83zu4EwjWFhWrMYAAc/oDRxPKiTLRcYvXzb/PnvmCc0CsjXxnboX8H2lK0kwtrjdVJ5p1ENRqLHdmc7Tkz0gZ4hW8qGcIsf54EwixsbQ7fr4pbgvRGux1qyvJ2AMzhmt5cFXd1aO3a1Z3CZtWGg7BNSR4YcH6NbJlgR1vv+MZbcncutr8s3J/il/q1P6/Je0D6+SA8gN93Bvz7NfmQx/RWHPBrVw/GdisfqvBUloLxZAR6QmiLAEbq3drYKjbkmUUmegb9SD23fRlh0xc59p2ijSrsm6Vo7I1Iex/f/aEE+Ko4CEtn42gkf6zCJyGsHDtuINGJMp840wm5vD596Vde57fr6sSckWvk1MG5rB36b0eHlf6HNlbhb2zi9Qr/m7IOvXbIYnOiSwCFUX7mX3zYlUbX5MHSOdL03vHwTOk1frrdfD9A3wPiroHB8b/BwXCb/WYSc39g62x4qMIfmdxoSw1i0GObxk/HJp86rW7IA6+dfjic2LQQB/Q7d/wBwXaWBjvf0LI5m4F4OpamFvYf7tYK6waVJiY2Llc4ru0lLT+mz+/Ny//uv9/S/jtc0/Q/8Wdy7jipjNze1seKISwKuit4L6tMv70d8449YHdScgBrytXGz8cPWARUYhDNcR+wFSoSeMbTPxz8xf+Sp+PVQ2huar1/a/P+4y8Fyhy3H3HGMqwF/uANdCMHqEN0vAL4PGN+AFlxBfBXvjIz4wr0cEZwgdEZcqVN8LJbjusc1tFr84V4O1axEdVFOYYA2zjZpZt0p8AYf2/G3YKfCG3GYr2t7s0hJsMYTlnzD2hgXcNREf3MdMesGwseUaEpyRuCul7Uf/Y5ji+sH252YjLwj1IEiS2ooE2JzBT7k7PMcgF9YAXCMZuryHYyYhnt/orbCQWT7pMGq6xH8HEYJtmfb3RDvC+7ibWDF9xDOMO+wZVWmAIaK3Ka5lxmoNyguZOV2zrbqGb7NtC4oLYDQXCggTgR4PSVA6g+xND6Nxlgf0GGKUhdQO4NWYVPjrsJ3I/Uww5WFzsRsFse2EGM3R3GDgpc7EQAAAA="
    }
}, e => {
    e(e.s = 130)
}
]);
