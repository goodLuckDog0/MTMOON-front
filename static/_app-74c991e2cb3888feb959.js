_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [9],
    {
        "/0+H": function (t, e, n) {
            "use strict";
            (e.__esModule = !0),
                (e.isInAmpMode = i),
                (e.useAmp = function () {
                    return i(o.default.useContext(a.AmpStateContext));
                });
            var r,
                o = (r = n("q1tI")) && r.__esModule ? r : { default: r },
                a = n("lwAK");
            function i() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.ampFirst,
                    n = void 0 !== e && e,
                    r = t.hybrid,
                    o = void 0 !== r && r,
                    a = t.hasQuery,
                    i = void 0 !== a && a;
                return n || (o && i);
            }
        },
        0: function (t, e, n) {
            n("GcxT"), (t.exports = n("nOHt"));
        },
        "1OyB": function (t, e, n) {
            "use strict";
            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            n.d(e, "a", function () {
                return r;
            });
        },
        "1TCz": function (t, e, n) {
            "use strict";
            n.r(e),
                n.d(e, "default", function () {
                    return S;
                });
            var r = n("o0o1"),
                o = n.n(r);
            function a(t, e, n, r, o, a, i) {
                try {
                    var c = t[a](i),
                        u = c.value;
                } catch (s) {
                    return void n(s);
                }
                c.done ? e(u) : Promise.resolve(u).then(r, o);
            }
            var i = n("rePB"),
                c = n("nKUr"),
                u = n("1OyB"),
                s = n("vuIU"),
                f = n("Ji7U"),
                p = n("md7G"),
                l = n("foSv"),
                d = n("q1tI"),
                h = n.n(d),
                y = n("i8i4"),
                b = n.n(y),
                m = n("8Bbg"),
                v = n.n(m),
                g = n("g4pe"),
                w = n.n(g),
                j = n("20a2"),
                O = n.n(j);
            function x(t) {
                return Object(c.jsxs)("div", {
                    children: [
                        Object(c.jsx)("div", { className: "bg-cover fixed z-40 w-full h-full top-0 left-0", style: { backgroundImage: "url('/img/img-1-1000x600.jpg')" } }),
                        Object(c.jsx)("div", { className: "top-0 left-0 w-full h-full block z-50 absolute bg-black bg-opacity-50" }),
                        Object(c.jsxs)("div", {
                            className: "my-32 mx-auto max-w-sm text-center relative z-50 top-0",
                            children: [
                                Object(c.jsx)("div", { className: "block mb-4", children: Object(c.jsx)("i", { className: "fas fa-circle-notch animate-spin text-white mx-auto text-6xl" }) }),
                                Object(c.jsxs)("h4", { className: "text-lg font-medium text-white", children: ["Loading page contents for: ", t.path] }),
                            ],
                        }),
                    ],
                });
            }
            n("vs8Z"), n("Rpix");
            function P(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function _(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? P(Object(n), !0).forEach(function (e) {
                              Object(i.a)(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : P(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          });
                }
                return t;
            }
            function C(t) {
                var e = (function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Object(p.a)(this, n);
                };
            }
            O.a.events.on("routeChangeStart", function (t) {
                console.log("Loading: ".concat(t)), document.body.classList.add("body-page-transition"), b.a.render(Object(c.jsx)(x, { path: t }), document.getElementById("page-transition"));
            }),
                O.a.events.on("routeChangeComplete", function () {
                    b.a.unmountComponentAtNode(document.getElementById("page-transition")), document.body.classList.remove("body-page-transition");
                }),
                O.a.events.on("routeChangeError", function () {
                    b.a.unmountComponentAtNode(document.getElementById("page-transition")), document.body.classList.remove("body-page-transition");
                });
            var S = (function (t) {
                Object(f.a)(n, t);
                var e = C(n);
                function n() {
                    return Object(u.a)(this, n), e.apply(this, arguments);
                }
                return (
                    Object(s.a)(
                        n,
                        [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var t = document.createComment(
                                        "\n\n=========================================================\n* Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/notus-nextjs\n* Copyright 2021 Creative Tim (https://www.creative-tim.com)\n* Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)\n\n* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation\n\n* Coded by Creative Tim\n\n=========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n"
                                    );
                                    document.insertBefore(t, document.documentElement);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var t = this.props,
                                        e = t.Component,
                                        n = t.pageProps,
                                        r =
                                            e.layout ||
                                            function (t) {
                                                var e = t.children;
                                                return Object(c.jsx)(c.Fragment, { children: e });
                                            };
                                    return Object(c.jsxs)(h.a.Fragment, {
                                        children: [
                                            Object(c.jsxs)(w.a, {
                                                children: [
                                                    Object(c.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" }),
                                                    Object(c.jsx)("title", { children: "BobaInu" }),
                                                    Object(c.jsx)("script", { async: !0, src: "https://www.googletagmanager.com/gtag/js?id=".concat("G-8NDTPBX9J7") }),
                                                    Object(c.jsx)("script", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(
                                                                "G-8NDTPBX9J7",
                                                                "', {\n              page_path: window.location.pathname,\n            });\n          "
                                                            ),
                                                        },
                                                    }),
                                                ],
                                            }),
                                            Object(c.jsx)(r, { children: Object(c.jsx)(e, _({}, n)) }),
                                        ],
                                    });
                                },
                            },
                        ],
                        [
                            {
                                key: "getInitialProps",
                                value: (function () {
                                    var t,
                                        e =
                                            ((t = o.a.mark(function t(e) {
                                                var n, r, a;
                                                return o.a.wrap(function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                if (((n = e.Component), e.router, (r = e.ctx), (a = {}), !n.getInitialProps)) {
                                                                    t.next = 6;
                                                                    break;
                                                                }
                                                                return (t.next = 5), n.getInitialProps(r);
                                                            case 5:
                                                                a = t.sent;
                                                            case 6:
                                                                return t.abrupt("return", { pageProps: a });
                                                            case 7:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                }, t);
                                            })),
                                            function () {
                                                var e = this,
                                                    n = arguments;
                                                return new Promise(function (r, o) {
                                                    var i = t.apply(e, n);
                                                    function c(t) {
                                                        a(i, r, o, c, u, "next", t);
                                                    }
                                                    function u(t) {
                                                        a(i, r, o, c, u, "throw", t);
                                                    }
                                                    c(void 0);
                                                });
                                            });
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                        ]
                    ),
                    n
                );
            })(v.a);
        },
        "20a2": function (t, e, n) {
            t.exports = n("nOHt");
        },
        "7W2i": function (t, e, n) {
            var r = n("SksO");
            t.exports = function (t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && r(t, e);
            };
        },
        "8Bbg": function (t, e, n) {
            t.exports = n("B5Ud");
        },
        "8Kt/": function (t, e, n) {
            "use strict";
            n("lSNA");
            (e.__esModule = !0), (e.defaultHead = f), (e.default = void 0);
            var r,
                o = (function (t) {
                    if (t && t.__esModule) return t;
                    if (null === t || ("object" !== typeof t && "function" !== typeof t)) return { default: t };
                    var e = s();
                    if (e && e.has(t)) return e.get(t);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(t, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = t[o]);
                        }
                    (n.default = t), e && e.set(t, n);
                    return n;
                })(n("q1tI")),
                a = (r = n("Xuae")) && r.__esModule ? r : { default: r },
                i = n("lwAK"),
                c = n("FYa8"),
                u = n("/0+H");
            function s() {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap();
                return (
                    (s = function () {
                        return t;
                    }),
                    t
                );
            }
            function f() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = [o.default.createElement("meta", { charSet: "utf-8" })];
                return t || e.push(o.default.createElement("meta", { name: "viewport", content: "width=device-width" })), e;
            }
            function p(t, e) {
                return "string" === typeof e || "number" === typeof e
                    ? t
                    : e.type === o.default.Fragment
                    ? t.concat(
                          o.default.Children.toArray(e.props.children).reduce(function (t, e) {
                              return "string" === typeof e || "number" === typeof e ? t : t.concat(e);
                          }, [])
                      )
                    : t.concat(e);
            }
            var l = ["name", "httpEquiv", "charSet", "itemProp"];
            function d(t, e) {
                return t
                    .reduce(function (t, e) {
                        var n = o.default.Children.toArray(e.props.children);
                        return t.concat(n);
                    }, [])
                    .reduce(p, [])
                    .reverse()
                    .concat(f(e.inAmpMode))
                    .filter(
                        (function () {
                            var t = new Set(),
                                e = new Set(),
                                n = new Set(),
                                r = {};
                            return function (o) {
                                var a = !0,
                                    i = !1;
                                if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                                    i = !0;
                                    var c = o.key.slice(o.key.indexOf("$") + 1);
                                    t.has(c) ? (a = !1) : t.add(c);
                                }
                                switch (o.type) {
                                    case "title":
                                    case "base":
                                        e.has(o.type) ? (a = !1) : e.add(o.type);
                                        break;
                                    case "meta":
                                        for (var u = 0, s = l.length; u < s; u++) {
                                            var f = l[u];
                                            if (o.props.hasOwnProperty(f))
                                                if ("charSet" === f) n.has(f) ? (a = !1) : n.add(f);
                                                else {
                                                    var p = o.props[f],
                                                        d = r[f] || new Set();
                                                    ("name" === f && i) || !d.has(p) ? (d.add(p), (r[f] = d)) : (a = !1);
                                                }
                                        }
                                }
                                return a;
                            };
                        })()
                    )
                    .reverse()
                    .map(function (t, e) {
                        var n = t.key || e;
                        return o.default.cloneElement(t, { key: n });
                    });
            }
            function h(t) {
                var e = t.children,
                    n = (0, o.useContext)(i.AmpStateContext),
                    r = (0, o.useContext)(c.HeadManagerContext);
                return o.default.createElement(a.default, { reduceComponentsToState: d, headManager: r, inAmpMode: (0, u.isInAmpMode)(n) }, e);
            }
            h.rewind = function () {};
            var y = h;
            e.default = y;
        },
        B5Ud: function (t, e, n) {
            "use strict";
            var r = n("o0o1"),
                o = n("lwsE"),
                a = n("W8MJ"),
                i = n("7W2i"),
                c = n("a1gu"),
                u = n("Nsbk"),
                s = n("yXPU");
            function f(t) {
                var e = (function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = u(t);
                    if (e) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return c(this, n);
                };
            }
            var p = n("TqRt");
            (e.__esModule = !0),
                (e.Container = function (t) {
                    0;
                    return t.children;
                }),
                (e.createUrl = m),
                (e.default = void 0);
            var l = p(n("q1tI")),
                d = n("g/15");
            function h(t) {
                return y.apply(this, arguments);
            }
            function y() {
                return (y = s(
                    r.mark(function t(e) {
                        var n, o, a;
                        return r.wrap(function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (n = e.Component), (o = e.ctx), (t.next = 3), (0, d.loadGetInitialProps)(n, o);
                                    case 3:
                                        return (a = t.sent), t.abrupt("return", { pageProps: a });
                                    case 5:
                                    case "end":
                                        return t.stop();
                                }
                        }, t);
                    })
                )).apply(this, arguments);
            }
            (e.AppInitialProps = d.AppInitialProps), (e.NextWebVitalsMetric = d.NextWebVitalsMetric);
            var b = (function (t) {
                i(n, t);
                var e = f(n);
                function n() {
                    return o(this, n), e.apply(this, arguments);
                }
                return (
                    a(n, [
                        {
                            key: "componentDidCatch",
                            value: function (t, e) {
                                throw t;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    e = t.router,
                                    n = t.Component,
                                    r = t.pageProps,
                                    o = t.__N_SSG,
                                    a = t.__N_SSP;
                                return l.default.createElement(n, Object.assign({}, r, o || a ? {} : { url: m(e) }));
                            },
                        },
                    ]),
                    n
                );
            })(l.default.Component);
            function m(t) {
                var e = t.pathname,
                    n = t.asPath,
                    r = t.query;
                return {
                    get query() {
                        return r;
                    },
                    get pathname() {
                        return e;
                    },
                    get asPath() {
                        return n;
                    },
                    back: function () {
                        t.back();
                    },
                    push: function (e, n) {
                        return t.push(e, n);
                    },
                    pushTo: function (e, n) {
                        var r = n ? e : "",
                            o = n || e;
                        return t.push(r, o);
                    },
                    replace: function (e, n) {
                        return t.replace(e, n);
                    },
                    replaceTo: function (e, n) {
                        var r = n ? e : "",
                            o = n || e;
                        return t.replace(r, o);
                    },
                };
            }
            (e.default = b), (b.origGetInitialProps = h), (b.getInitialProps = h);
        },
        Bnag: function (t, e) {
            t.exports = function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            };
        },
        EbDI: function (t, e) {
            t.exports = function (t) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            };
        },
        FYa8: function (t, e, n) {
            "use strict";
            var r;
            (e.__esModule = !0), (e.HeadManagerContext = void 0);
            var o = ((r = n("q1tI")) && r.__esModule ? r : { default: r }).default.createContext({});
            e.HeadManagerContext = o;
        },
        GcxT: function (t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/_app",
                function () {
                    return n("1TCz");
                },
            ]);
        },
        Ijbi: function (t, e, n) {
            var r = n("WkPL");
            t.exports = function (t) {
                if (Array.isArray(t)) return r(t);
            };
        },
        JX7q: function (t, e, n) {
            "use strict";
            function r(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            n.d(e, "a", function () {
                return r;
            });
        },
        Ji7U: function (t, e, n) {
            "use strict";
            function r(t, e) {
                return (r =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function o(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && r(t, e);
            }
            n.d(e, "a", function () {
                return o;
            });
        },
        Nsbk: function (t, e) {
            function n(e) {
                return (
                    (t.exports = n = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    n(e)
                );
            }
            t.exports = n;
        },
        PJYZ: function (t, e) {
            t.exports = function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            };
        },
        RIqP: function (t, e, n) {
            var r = n("Ijbi"),
                o = n("EbDI"),
                a = n("ZhPi"),
                i = n("Bnag");
            t.exports = function (t) {
                return r(t) || o(t) || a(t) || i();
            };
        },
        Rpix: function (t, e, n) {},
        Xuae: function (t, e, n) {
            "use strict";
            var r = n("RIqP"),
                o = n("lwsE"),
                a = n("W8MJ"),
                i = (n("PJYZ"), n("7W2i")),
                c = n("a1gu"),
                u = n("Nsbk");
            function s(t) {
                var e = (function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = u(t);
                    if (e) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return c(this, n);
                };
            }
            (e.__esModule = !0), (e.default = void 0);
            var f = n("q1tI"),
                p = (function (t) {
                    i(n, t);
                    var e = s(n);
                    function n(t) {
                        var a;
                        return (
                            o(this, n),
                            ((a = e.call(this, t))._hasHeadManager = void 0),
                            (a.emitChange = function () {
                                a._hasHeadManager && a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances), a.props));
                            }),
                            (a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances),
                            a
                        );
                    }
                    return (
                        a(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange();
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function () {
                                    this.emitChange();
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return null;
                                },
                            },
                        ]),
                        n
                    );
                })(f.Component);
            e.default = p;
        },
        a1gu: function (t, e, n) {
            var r = n("cDf5"),
                o = n("PJYZ");
            t.exports = function (t, e) {
                return !e || ("object" !== r(e) && "function" !== typeof e) ? o(t) : e;
            };
        },
        foSv: function (t, e, n) {
            "use strict";
            function r(t) {
                return (r = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            n.d(e, "a", function () {
                return r;
            });
        },
        g4pe: function (t, e, n) {
            t.exports = n("8Kt/");
        },
        lSNA: function (t, e) {
            t.exports = function (t, e, n) {
                return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
            };
        },
        lwAK: function (t, e, n) {
            "use strict";
            var r;
            (e.__esModule = !0), (e.AmpStateContext = void 0);
            var o = ((r = n("q1tI")) && r.__esModule ? r : { default: r }).default.createContext({});
            e.AmpStateContext = o;
        },
        md7G: function (t, e, n) {
            "use strict";
            function r(t) {
                return (r =
                    "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            n.d(e, "a", function () {
                return a;
            });
            var o = n("JX7q");
            function a(t, e) {
                return !e || ("object" !== r(e) && "function" !== typeof e) ? Object(o.a)(t) : e;
            }
        },
        rePB: function (t, e, n) {
            "use strict";
            function r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
            }
            n.d(e, "a", function () {
                return r;
            });
        },
        vs8Z: function (t, e, n) {},
        vuIU: function (t, e, n) {
            "use strict";
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function o(t, e, n) {
                return e && r(t.prototype, e), n && r(t, n), t;
            }
            n.d(e, "a", function () {
                return o;
            });
        },
    },
    [[0, 0, 2, 1]],
]);
