( () => {
    "use strict";
    var r, e = {}, t = {};
    function o(r) {
        var n = t[r];
        if (void 0 !== n)
            return n.exports;
        var i = t[r] = {
            id: r,
            exports: {}
        };
        return e[r](i, i.exports, o),
        i.exports
    }
    o.m = e,
    r = [],
    o.O = (e, t, n, i) => {
        if (!t) {
            var c = 1 / 0;
            for (f = 0; f < r.length; f++) {
                for (var [t,n,i] = r[f], a = !0, l = 0; l < t.length; l++)
                    (!1 & i || c >= i) && Object.keys(o.O).every((r => o.O[r](t[l]))) ? t.splice(l--, 1) : (a = !1,
                    i < c && (c = i));
                if (a) {
                    r.splice(f--, 1);
                    var s = n();
                    void 0 !== s && (e = s)
                }
            }
            return e
        }
        i = i || 0;
        for (var f = r.length; f > 0 && r[f - 1][2] > i; f--)
            r[f] = r[f - 1];
        r[f] = [t, n, i]
    }
    ,
    o.n = r => {
        var e = r && r.__esModule ? () => r.default : () => r;
        return o.d(e, {
            a: e
        }),
        e
    }
    ,
    o.d = (r, e) => {
        for (var t in e)
            o.o(e, t) && !o.o(r, t) && Object.defineProperty(r, t, {
                enumerable: !0,
                get: e[t]
            })
    }
    ,
    o.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (r) {
            if ("object" == typeof window)
                return window
        }
    }(),
    o.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e),
    ( () => {
        var r;
        o.g.importScripts && (r = o.g.location + "");
        var e = o.g.document;
        if (!r && e && (e.currentScript && (r = e.currentScript.src),
        !r)) {
            var t = e.getElementsByTagName("script");
            t.length && (r = t[t.length - 1].src)
        }
        if (!r)
            throw new Error("Automatic publicPath is not supported in this browser");
        r = r.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        o.p = r
    }
    )(),
    ( () => {
        o.b = document.baseURI || self.location.href;
        var r = {
            666: 0
        };
        o.O.j = e => 0 === r[e];
        var e = (e, t) => {
            var n, i, [c,a,l] = t, s = 0;
            if (c.some((e => 0 !== r[e]))) {
                for (n in a)
                    o.o(a, n) && (o.m[n] = a[n]);
                if (l)
                    var f = l(o)
            }
            for (e && e(t); s < c.length; s++)
                i = c[s],
                o.o(r, i) && r[i] && r[i][0](),
                r[i] = 0;
            return o.O(f)
        }
          , t = self.webpackChunkgf_flip_clock = self.webpackChunkgf_flip_clock || [];
        t.forEach(e.bind(null, 0)),
        t.push = e.bind(null, t.push.bind(t))
    }
    )(),
    o.nc = void 0
}
)();
