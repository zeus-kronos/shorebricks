! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        d = f.toString,
        p = d.call(Object),
        h = {},
        g = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        m = function(e) { return null != e && e === e.window },
        v = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function y(e, t, n) {
        var i, o, a = (n = n || r).createElement("script");
        if (a.text = e, t)
            for (i in v)(o = t[i] || t.getAttribute && t.getAttribute(i)) && a.setAttribute(i, o);
        n.head.appendChild(a).parentNode.removeChild(a)
    }

    function b(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e }
    var x = function(e, t) { return new x.fn.init(e, t) },
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function T(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: "3.4.1",
        constructor: x,
        length: 0,
        toArray: function() { return o.call(this) },
        get: function(e) { return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = x.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return x.each(this, e) },
        map: function(e) { return this.pushStack(x.map(this, function(t, n) { return e.call(t, n, t) })) },
        slice: function() { return this.pushStack(o.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, x.extend = x.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (x.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || x.isPlainObject(n) ? n : {}, i = !1, a[t] = x.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, x.extend({
        expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && d.call(n) === p) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e, t) { y(e, { nonce: t && t.nonce }) },
        each: function(e, t) {
            var n, r = 0;
            if (T(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(w, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (T(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : u.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (T(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { l["[object " + t + "]"] = t.toLowerCase() });
    var C = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, d, p, h, g, m, v, y, b, x = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            k = ue(),
            A = ue(),
            E = ue(),
            N = ue(),
            S = function(e, t) { return e === t && (f = !0), 0 },
            D = {}.hasOwnProperty,
            j = [],
            I = j.pop,
            L = j.push,
            q = j.push,
            $ = j.slice,
            H = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            B = new RegExp(P + "+", "g"),
            F = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            z = new RegExp("^" + P + "*," + P + "*"),
            _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            U = new RegExp(P + "|>"),
            X = new RegExp(W),
            V = new RegExp("^" + R + "$"),
            G = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: new RegExp("^(?:" + O + ")$", "i"), needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") },
            Q = /HTML$/i,
            Y = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            ne = function(e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            oe = function() { d() },
            ae = xe(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
        try { q.apply(j = $.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType } catch (e) {
            q = {
                apply: j.length ? function(e, t) { L.apply(e, $.call(t)) } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, r, i) {
            var o, s, l, c, f, h, v, y = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== p && d(t), t = t || p, g)) {
                if (11 !== T && (f = Z.exec(e)))
                    if (o = f[1]) { if (9 === T) { if (!(l = t.getElementById(o))) return r; if (l.id === o) return r.push(l), r } else if (y && (l = y.getElementById(o)) && b(t, l) && l.id === o) return r.push(l), r } else { if (f[2]) return q.apply(r, t.getElementsByTagName(e)), r; if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(o)), r }
                if (n.qsa && !N[e + " "] && (!m || !m.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === T && U.test(e)) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = x), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + be(h[s]);
                        v = h.join(","), y = ee.test(e) && ve(t.parentNode) || t
                    }
                    try { return q.apply(r, y.querySelectorAll(v)), r } catch (t) { N(e, !0) } finally { c === x && t.removeAttribute("id") }
                }
            }
            return u(e.replace(F, "$1"), t, r, i)
        }

        function ue() { var e = []; return function t(n, i) { return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i } }

        function le(e) { return e[x] = !0, e }

        function ce(e) { var t = p.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) { for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t }

        function de(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function pe(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

        function he(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

        function ge(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

        function me(e) { return le(function(t) { return t = +t, le(function(n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

        function ve(e) { return e && void 0 !== e.getElementsByTagName && e }
        for (t in n = se.support = {}, o = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Q.test(t || n && n.nodeName || "HTML")
            }, d = se.setDocument = function(e) {
                var t, i, a = e ? e.ownerDocument || e : w;
                return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, g = !o(p), w !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), n.getElementsByTagName = ce(function(e) { return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length }), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = ce(function(e) { return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length }), n.getById ? (r.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, r.find.ID = function(e, t) { if (void 0 !== t.getElementById && g) { var n = t.getElementById(e); return n ? [n] : [] } }) : (r.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, r.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { for (; n = o[i++];) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e) }, v = [], m = [], (n.qsa = J.test(p.querySelectorAll)) && (ce(function(e) { h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]") }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) { n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", W) }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, S = t ? function(e, t) { if (e === t) return f = !0, 0; var r = !e.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && b(w, e) ? -1 : t === p || t.ownerDocument === w && b(w, t) ? 1 : c ? H(c, e) - H(c, t) : 0 : 4 & r ? -1 : 1) } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? H(c, e) - H(c, t) : 0;
                    if (i === o) return de(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? de(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                }, p) : p
            }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && d(e), n.matchesSelector && g && !N[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try { var r = y.call(e, t); if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (e) { N(t, !0) }
                return se(t, p, null, [e]).length > 0
            }, se.contains = function(e, t) { return (e.ownerDocument || e) !== p && d(e), b(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== p && d(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) {
                var t, r = [],
                    i = 0,
                    o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(S), f) { for (; t = e[o++];) t === e[o] && (i = r.push(o)); for (; i--;) e.splice(r[i], 1) }
                return c = null, e
            }, i = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += i(e) } else if (3 === o || 4 === o) return e.nodeValue } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (r = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = k[e + " "]; return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && k(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(e, t, n) { return function(r) { var i = se.attr(r, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-")) } },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, u) {
                            var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !u && !s,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (b = (p = (l = (c = (f = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                                        if (1 === d.nodeType && ++b && d === t) { c[e] = [T, p, b]; break }
                                } else if (y && (b = p = (l = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === b)
                                    for (;
                                        (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, b]), d !== t)););
                                return (b -= i) === r || b % r == 0 && b / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) { var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) { for (var r, o = i(e, t), a = o.length; a--;) e[r = H(e, o[a])] = !(n[r] = o[a]) }) : function(e) { return i(e, 0, n) }) : i }
                },
                pseudos: {
                    not: le(function(e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(F, "$1"));
                        return r[x] ? le(function(e, t, n, i) { for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() }
                    }),
                    has: le(function(e) { return function(t) { return se(e, t).length > 0 } }),
                    contains: le(function(e) {
                        return e = e.replace(te, ne),
                            function(t) { return (t.textContent || i(t)).indexOf(e) > -1 }
                    }),
                    lang: le(function(e) {
                        return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do { if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                    root: function(e) { return e === h },
                    focus: function(e) { return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !r.pseudos.empty(e) },
                    header: function(e) { return K.test(e.nodeName) },
                    input: function(e) { return Y.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: me(function() { return [0] }),
                    last: me(function(e, t) { return [t - 1] }),
                    eq: me(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: me(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: me(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: me(function(e, t, n) { for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r); return e }),
                    gt: me(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                }
            }).pseudos.nth = r.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = pe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);

        function ye() {}

        function be(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function xe(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, u) {
                var l, c, f, d = [T, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else { if ((l = c[o]) && l[0] === T && l[1] === s) return d[2] = l[2]; if (c[o] = d, d[2] = e(t, n, u)) return !0 } return !1
            }
        }

        function we(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Ce(e, t, n, r, i, o) {
            return r && !r[x] && (r = Ce(r)), i && !i[x] && (i = Ce(i, o)), le(function(o, a, s, u) {
                var l, c, f, d = [],
                    p = [],
                    h = a.length,
                    g = o || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : Te(g, d, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, v, s, u), r)
                    for (l = Te(v, p), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(m[c] = f);
                            i(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (l = i ? H(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = Te(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : q.apply(a, v)
            })
        }

        function ke(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = xe(function(e) { return e === t }, s, !0), f = xe(function(e) { return H(t, e) > -1 }, s, !0), d = [function(e, n, r) { var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r)); return t = null, i }]; u < o; u++)
                if (n = r.relative[e[u].type]) d = [xe(we(d), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) { for (i = ++u; i < o && !r.relative[e[i].type]; i++); return Ce(u > 1 && we(d), u > 1 && be(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(F, "$1"), n, u < i && ke(e.slice(u, i)), i < o && ke(e = e.slice(i)), i < o && be(e)) }
                    d.push(n)
                }
            return we(d)
        }
        return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = se.tokenize = function(e, t) { var n, i, o, a, s, u, l, c = A[e + " "]; if (c) return t ? 0 : c.slice(0); for (s = e, u = [], l = r.preFilter; s;) { for (a in n && !(i = z.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(F, " ") }), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? se.error(e) : A(e, u).slice(0) }, s = se.compile = function(e, t) {
            var n, i = [],
                o = [],
                s = E[e + " "];
            if (!s) {
                for (t || (t = a(e)), n = t.length; n--;)(s = ke(t[n]))[x] ? i.push(s) : o.push(s);
                (s = E(e, function(e, t) {
                    var n = t.length > 0,
                        i = e.length > 0,
                        o = function(o, a, s, u, c) {
                            var f, h, m, v = 0,
                                y = "0",
                                b = o && [],
                                x = [],
                                w = l,
                                C = o || i && r.find.TAG("*", c),
                                k = T += null == w ? 1 : Math.random() || .1,
                                A = C.length;
                            for (c && (l = a === p || a || c); y !== A && null != (f = C[y]); y++) {
                                if (i && f) {
                                    for (h = 0, a || f.ownerDocument === p || (d(f), s = !g); m = e[h++];)
                                        if (m(f, a || p, s)) { u.push(f); break }
                                    c && (T = k)
                                }
                                n && ((f = !m && f) && v--, o && b.push(f))
                            }
                            if (v += y, n && y !== v) {
                                for (h = 0; m = t[h++];) m(b, x, a, s);
                                if (o) {
                                    if (v > 0)
                                        for (; y--;) b[y] || x[y] || (x[y] = I.call(u));
                                    x = Te(x)
                                }
                                q.apply(u, x), c && !o && x.length > 0 && v + t.length > 1 && se.uniqueSort(u)
                            }
                            return c && (T = k, l = w), b
                        };
                    return n ? le(o) : o
                }(o, i))).selector = e
            }
            return s
        }, u = se.select = function(e, t, n, i) {
            var o, u, l, c, f, d = "function" == typeof e && e,
                p = !i && a(e = d.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ve(t.parentNode) || t))) { if (u.splice(o, 1), !(e = i.length && be(u))) return q.apply(n, i), n; break }
            }
            return (d || s(e, p))(i, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = x.split("").sort(S).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(p.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), n.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(O, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se
    }(e);
    x.find = C, x.expr = C.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = C.uniqueSort, x.text = C.getText, x.isXMLDoc = C.isXML, x.contains = C.contains, x.escapeSelector = C.escape;
    var k = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && x(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        A = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        E = x.expr.match.needsContext;

    function N(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, t, n) { return g(t) ? x.grep(e, function(e, r) { return !!t.call(e, r, e) !== n }) : t.nodeType ? x.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? x.grep(e, function(e) { return u.call(t, e) > -1 !== n }) : x.filter(t, e, n) }
    x.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) { return 1 === e.nodeType })) }, x.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (x.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) x.find(e, i[t], n);
            return r > 1 ? x.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(D(this, e || [], !1)) },
        not: function(e) { return this.pushStack(D(this, e || [], !0)) },
        is: function(e) { return !!D(this, "string" == typeof e && E.test(e) ? x(e) : e || [], !1).length }
    });
    var j, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), S.test(i[1]) && x.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
    }).prototype = x.fn, j = x(r);
    var L = /^(?:parents|prev(?:Until|All))/,
        q = { children: !0, contents: !0, next: !0, prev: !0 };

    function $(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (x.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && x(e);
            if (!E.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(o.length > 1 ? x.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? u.call(x(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), x.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return k(e, "parentNode") }, parentsUntil: function(e, t, n) { return k(e, "parentNode", n) }, next: function(e) { return $(e, "nextSibling") }, prev: function(e) { return $(e, "previousSibling") }, nextAll: function(e) { return k(e, "nextSibling") }, prevAll: function(e) { return k(e, "previousSibling") }, nextUntil: function(e, t, n) { return k(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return k(e, "previousSibling", n) }, siblings: function(e) { return A((e.parentNode || {}).firstChild, e) }, children: function(e) { return A(e.firstChild) }, contents: function(e) { return void 0 !== e.contentDocument ? e.contentDocument : (N(e, "template") && (e = e.content || e), x.merge([], e.childNodes)) } }, function(e, t) { x.fn[e] = function(n, r) { var i = x.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (q[e] || x.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i) } });
    var H = /[^\x20\t\r\n\f]+/g;

    function O(e) { return e }

    function P(e) { throw e }

    function R(e, t, n, r) { var i; try { e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) { var t = {}; return x.each(e.match(H) || [], function(e, n) { t[n] = !0 }), t }(e) : x.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function() {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function() { return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) { x.each(n, function(n, r) { g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r) }) }(arguments), n && !t && u()), this },
                remove: function() {
                    return x.each(arguments, function(e, t) {
                        for (var n;
                            (n = x.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function(e) { return e ? x.inArray(e, o) > -1 : o.length > 0 },
                empty: function() { return o && (o = []), this },
                disable: function() { return i = a = [], o = n = "", this },
                disabled: function() { return !o },
                lock: function() { return i = a = [], n || t || (o = n = ""), this },
                locked: function() { return !!i },
                fireWith: function(e, n) { return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this },
                fire: function() { return l.fireWith(this, arguments), this },
                fired: function() { return !!r }
            };
        return l
    }, x.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                    ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() { return r },
                    always: function() { return o.done(arguments).fail(arguments), this },
                    catch: function(e) { return i.then(null, e) },
                    pipe: function() {
                        var e = arguments;
                        return x.Deferred(function(t) {
                            x.each(n, function(n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    l = function() {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, O, i), a(o, n, P, i)) : (o++, l.call(e, a(o, n, O, i), a(o, n, P, i), a(o, n, O, n.notifyWith))) : (r !== O && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function() { try { l() } catch (e) { x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== P && (s = void 0, u = [e]), n.rejectWith(s, u)) } };
                                t ? c() : (x.Deferred.getStackHook && (c.stackTrace = x.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return x.Deferred(function(e) { n[0][3].add(a(0, e, g(i) ? i : O, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : O)), n[2][3].add(a(0, e, g(r) ? r : P)) }).promise()
                    },
                    promise: function(e) { return null != e ? x.extend(e, i) : i }
                },
                o = {};
            return x.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() { r = s }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = x.Deferred(),
                s = function(e) { return function(n) { r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i) } };
            if (t <= 1 && (R(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            for (; n--;) R(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, x.readyException = function(t) { e.setTimeout(function() { throw t }) };
    var W = x.Deferred();

    function B() { r.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), x.ready() }
    x.fn.ready = function(e) { return W.then(e).catch(function(e) { x.readyException(e) }), this }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || W.resolveWith(r, [x]))
        }
    }), x.ready.then = W.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(x.ready) : (r.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
    var F = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === b(n))
                for (s in i = !0, n) F(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(x(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        _ = /-([a-z])/g;

    function U(e, t) { return t.toUpperCase() }

    function X(e) { return e.replace(z, "ms-").replace(_, U) }
    var V = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function G() { this.expando = x.expando + G.uid++ }
    G.uid = 1, G.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(H) || []).length; for (; n--;) delete r[t[n]] }(void 0 === t || x.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !x.isEmptyObject(t) }
    };
    var Q = new G,
        Y = new G,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try { n = function(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e) }(n) } catch (e) {}
                Y.set(e, t, n)
            } else n = void 0;
        return n
    }
    x.extend({ hasData: function(e) { return Y.hasData(e) || Q.hasData(e) }, data: function(e, t, n) { return Y.access(e, t, n) }, removeData: function(e, t) { Y.remove(e, t) }, _data: function(e, t, n) { return Q.access(e, t, n) }, _removeData: function(e, t) { Q.remove(e, t) } }), x.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Y.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() { Y.set(this, e) }) : F(this, function(t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Y.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;
                this.each(function() { Y.set(this, e, t) })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) { return this.each(function() { Y.remove(this, e) }) }
    }), x.extend({
        queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, x.makeArray(n)) : r.push(n)), r || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { x.dequeue(e, t) }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return Q.get(e, n) || Q.access(e, n, { empty: x.Callbacks("once memory").add(function() { Q.remove(e, [t + "queue", n]) }) }) }
    }), x.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { x.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = x.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = r.documentElement,
        ie = function(e) { return x.contains(e.ownerDocument, e) },
        oe = { composed: !0 };
    re.getRootNode && (ie = function(e) { return x.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument });
    var ae = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === x.css(e, "display") },
        se = function(e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i };

    function ue(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return x.css(e, t, "") },
            u = s(),
            l = n && n[3] || (x.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (x.cssNumber[t] || "px" !== l && +u) && te.exec(x.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) x.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, x.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = x.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) { for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Q.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", Q.set(r, "display", n))); for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]); return e }
    x.fn.extend({ show: function() { return fe(this, !0) }, hide: function() { return fe(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? x(this).show() : x(this).hide() }) } });
    var de = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function me(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? x.merge([e], n) : n }

    function ve(e, t) { for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval")) }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var ye, be, xe = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === b(o)) x.merge(d, o.nodeType ? [o] : o);
                else if (xe.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + x.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
            x.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)
            if (r && x.inArray(o, r) > -1) i && i.push(o);
            else if (l = ie(o), a = me(f.appendChild(o), "script"), l && ve(a), n)
            for (c = 0; o = a[c++];) he.test(o.type || "") && n.push(o);
        return f
    }
    ye = r.createDocumentFragment().appendChild(r.createElement("div")), (be = r.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), ye.appendChild(be), h.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ke = /^([^.]*)(?:\.(.+)|)/;

    function Ae() { return !0 }

    function Ee() { return !1 }

    function Ne(e, t) { return e === function() { try { return r.activeElement } catch (e) {} }() == ("focus" === t) }

    function Se(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) { return x().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = x.guid++)), e.each(function() { x.event.add(this, t, i, r, n) })
    }

    function De(e, t, n) {
        n ? (Q.set(e, t, !1), x.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, i, a = Q.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(x.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = o.call(arguments), Q.set(this, t, a), r = n(this, t), this[t](), a !== (i = Q.get(this, t)) || r ? Q.set(this, t, !1) : i = {}, a !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                } else a.length && (Q.set(this, t, { value: x.event.trigger(x.extend(a[0], x.Event.prototype), a.slice(1), this) }), e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, t) && x.event.add(e, t, Ae)
    }
    x.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = Q.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && x.find.matchesSelector(re, i), n.guid || (n.guid = x.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) { return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(H) || [""]).length; l--;) p = g = (s = ke.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = x.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = x.event.special[p] || {}, c = x.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && x.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), x.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = Q.hasData(e) && Q.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(H) || [""]).length; l--;)
                    if (p = g = (s = ke.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = x.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || x.removeEvent(e, p, m.handle), delete u[p])
                    } else
                        for (p in u) x.event.remove(e, p + t[l], n, r, !0);
                x.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = x.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [],
                c = x.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = x.event.handlers.call(this, s, l), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? x(i, this).index(l) > -1 : x.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o })
                    }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        },
        addProp: function(e, t) { Object.defineProperty(x.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
        fix: function(e) { return e[x.expando] ? e : new x.Event(e) },
        special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return de.test(t.type) && t.click && N(t, "input") && De(t, "click", Ae), !1 }, trigger: function(e) { var t = this || e; return de.test(t.type) && t.click && N(t, "input") && De(t, "click"), !0 }, _default: function(e) { var t = e.target; return de.test(t.type) && t.click && N(t, "input") && Q.get(t, "click") || N(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, x.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, x.Event = function(e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, x.event.addProp), x.each({ focus: "focusin", blur: "focusout" }, function(e, t) { x.event.special[e] = { setup: function() { return De(this, e, Ne), !1 }, trigger: function() { return De(this, e), !0 }, delegateType: t } }), x.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || x.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.fn.extend({ on: function(e, t, n, r) { return Se(this, e, t, n, r) }, one: function(e, t, n, r) { return Se(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() { x.event.remove(this, e, n, t) }) } });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ie = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function $e(e, t) { return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e }

    function He(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function Oe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) x.event.add(t, i, l[i][n]);
            Y.hasData(e) && (s = Y.access(e), u = x.extend({}, s), Y.set(t, u))
        }
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0,
            d = e.length,
            p = d - 1,
            m = t[0],
            v = g(m);
        if (v || d > 1 && "string" == typeof m && !h.checkClone && Le.test(m)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = m.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (d && (o = (i = we(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = x.map(me(i, "script"), He)).length; f < d; f++) l = i, f !== p && (l = x.clone(l, !0, !0), u && x.merge(s, me(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, x.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !Q.access(l, "globalEval") && x.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? x._evalUrl && !l.noModule && x._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }) : y(l.textContent.replace(qe, ""), l, c))
        }
        return e
    }

    function Me(e, t, n) { for (var r, i = t ? x.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || x.cleanData(me(r)), r.parentNode && (n && ie(r) && ve(me(r, "script")), r.parentNode.removeChild(r)); return e }
    x.extend({
        htmlPrefilter: function(e) { return e.replace(je, "<$1></$2>") },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (a = me(c), r = 0, i = (o = me(e)).length; r < i; r++) s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e), a = a || me(c), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, c);
            return (a = me(c, "script")).length > 0 && ve(a, !f && me(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = x.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? x.event.remove(n, r) : x.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[Y.expando] && (n[Y.expando] = void 0)
                }
        }
    }), x.fn.extend({
        detach: function(e) { return Me(this, e, !0) },
        remove: function(e) { return Me(this, e) },
        text: function(e) { return F(this, function(e) { return void 0 === e ? x.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return Re(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $e(this, e).appendChild(e) }) },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = $e(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return Re(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return Re(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(me(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return x.clone(this, e, t) }) },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ie.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(me(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { x.fn[e] = function(e) { for (var n, r = [], i = x(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), x(i[a])[t](n), s.apply(r, n.get()); return this.pushStack(r) } });
    var We = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Be = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) },
        Fe = new RegExp(ne.join("|"), "i");

    function ze(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Be(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = x.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function _e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 12 === n(c.offsetWidth / 3), re.removeChild(l), c = null
            }
        }

        function n(e) { return Math.round(parseFloat(e)) }
        var i, o, a, s, u, l = r.createElement("div"),
            c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, x.extend(h, { boxSizingReliable: function() { return t(), o }, pixelBoxStyles: function() { return t(), s }, pixelPosition: function() { return t(), i }, reliableMarginLeft: function() { return t(), u }, scrollboxSize: function() { return t(), a } }))
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        Xe = r.createElement("div").style,
        Ve = {};

    function Ge(e) {
        var t = x.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
                if ((e = Ue[n] + t) in Xe) return e
        }(e) || e)
    }
    var Qe = /^(none|table(?!-c[ea]).+)/,
        Ye = /^--/,
        Ke = { position: "absolute", visibility: "hidden", display: "block" },
        Je = { letterSpacing: "0", fontWeight: "400" };

    function Ze(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += x.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= x.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= x.css(e, "border" + ne[a] + "Width", !0, i))) : (u += x.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += x.css(e, "border" + ne[a] + "Width", !0, i) : s += x.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function tt(e, t, n) {
        var r = Be(e),
            i = (!h.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, r),
            o = i,
            a = ze(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (We.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!h.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === x.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === x.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function nt(e, t, n, r, i) { return new nt.prototype.init(e, t, n, r, i) }
    x.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = ze(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Ye.test(t),
                    l = e.style;
                if (u || (t = Ge(s)), a = x.cssHooks[t] || x.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (x.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = X(t); return Ye.test(t) || (t = Ge(s)), (a = x.cssHooks[t] || x.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = ze(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), x.each(["height", "width"], function(e, t) {
        x.cssHooks[t] = {
            get: function(e, n, r) { if (n) return !Qe.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : se(e, Ke, function() { return tt(e, t, r) }) },
            set: function(e, n, r) {
                var i, o = Be(e),
                    a = !h.scrollboxSize() && "absolute" === o.position,
                    s = (a || r) && "border-box" === x.css(e, "boxSizing", !1, o),
                    u = r ? et(e, t, r, s, o) : 0;
                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)), u && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = x.css(e, t)), Ze(0, n, u)
            }
        }
    }), x.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), x.each({ margin: "", padding: "", border: "Width" }, function(e, t) { x.cssHooks[e + t] = { expand: function(n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, "margin" !== e && (x.cssHooks[e + t].set = Ze) }), x.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) { for (r = Be(e), i = t.length; a < i; a++) o[t[a]] = x.css(e, t[a], !1, r); return o }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), x.Tween = nt, nt.prototype = { constructor: nt, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px") }, cur: function() { var e = nt.propHooks[this.prop]; return e && e.get ? e.get(this) : nt.propHooks._default.get(this) }, run: function(e) { var t, n = nt.propHooks[this.prop]; return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this } }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit) } } }, nt.propHooks.scrollTop = nt.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, x.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, x.fx = nt.prototype.init, x.fx.step = {};
    var rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() { it && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, x.fx.interval), x.fx.tick()) }

    function ut() { return e.setTimeout(function() { rt = void 0 }), rt = Date.now() }

    function lt(e, t) {
        var n, r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(e, t, n) {
        var r, i, o = 0,
            a = ft.prefilters.length,
            s = x.Deferred().always(function() { delete u.elem }),
            u = function() { if (i) return !1; for (var t = rt || ut(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1) },
            l = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ut(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = x.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); o < a; o++)
            if (r = ft.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (x._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return x.map(c, ct, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), x.fx.timer(x.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l
    }
    x.Animation = x.extend(ft, {
            tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return ue(n.elem, e, te.exec(t), n), n }] },
            tweener: function(e, t) { g(e) ? (t = e, e = ["*"]) : e = e.match(H); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t) },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    d = this,
                    p = {},
                    h = e.style,
                    g = e.nodeType && ae(e),
                    m = Q.get(e, "fxshow");
                for (r in n.queue || (null == (a = x._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, d.always(function() { d.always(function() { a.unqueued--, x.queue(e, "fx").length || a.empty.fire() }) })), t)
                    if (i = t[r], ot.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !m || void 0 === m[r]) continue;
                            g = !0
                        }
                        p[r] = m && m[r] || x.style(e, r)
                    }
                if ((u = !x.isEmptyObject(t)) || !x.isEmptyObject(p))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = m && m.display) && (l = Q.get(e, "display")), "none" === (c = x.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = x.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === x.css(e, "float") && (u || (d.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, p) u || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(e, "fxshow", { display: l }), o && (m.hidden = !g), g && fe([e], !0), d.done(function() { for (r in g || fe([e]), Q.remove(e, "fxshow"), p) x.style(e, r, p[r]) })), u = ct(g ? m[r] : 0, r, d), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
            }],
            prefilter: function(e, t) { t ? ft.prefilters.unshift(e) : ft.prefilters.push(e) }
        }), x.speed = function(e, t, n) { var r = e && "object" == typeof e ? x.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t }; return x.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in x.fx.speeds ? r.duration = x.fx.speeds[r.duration] : r.duration = x.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { g(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue) }, r }, x.fn.extend({
            fadeTo: function(e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
            animate: function(e, t, n, r) {
                var i = x.isEmptyObject(e),
                    o = x.speed(t, n, r),
                    a = function() {
                        var t = ft(this, x.extend({}, e), o);
                        (i || Q.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = x.timers,
                        a = Q.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && at.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || x.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = Q.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = x.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), x.each(["toggle", "show", "hide"], function(e, t) {
            var n = x.fn[t];
            x.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i) }
        }), x.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { x.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), x.timers = [], x.fx.tick = function() {
            var e, t = 0,
                n = x.timers;
            for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || x.fx.stop(), rt = void 0
        }, x.fx.timer = function(e) { x.timers.push(e), x.fx.start() }, x.fx.interval = 13, x.fx.start = function() { it || (it = !0, st()) }, x.fx.stop = function() { it = null }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fn.delay = function(t, n) {
            return t = x.fx && x.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() { e.clearTimeout(i) }
            })
        },
        function() {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var dt, pt = x.expr.attrHandle;
    x.fn.extend({ attr: function(e, t) { return F(this, x.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { x.removeAttr(this, e) }) } }), x.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === o && x.isXMLDoc(e) || (i = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = x.find.attr(e, t)) ? void 0 : r) },
        attrHooks: { type: { set: function(e, t) { if (!h.radioValue && "radio" === t && N(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(H);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), dt = { set: function(e, t, n) { return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n } }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = pt[t] || x.find.attr;
        pt[t] = function(e, t, r) { var i, o, a = t.toLowerCase(); return r || (o = pt[a], pt[a] = i, i = null != n(e, t, r) ? a : null, pt[a] = o), i }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function mt(e) { return (e.match(H) || []).join(" ") }

    function vt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function yt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || [] }
    x.fn.extend({ prop: function(e, t) { return F(this, x.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[x.propFix[e] || e] }) } }), x.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && x.isXMLDoc(e) || (t = x.propFix[t] || t, i = x.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = x.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), h.optSelected || (x.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { x.propFix[this.toLowerCase()] = this }), x.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) { x(this).addClass(e.call(this, t, vt(this))) });
            if ((t = yt(e)).length)
                for (; n = this[u++];)
                    if (i = vt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) { x(this).removeClass(e.call(this, t, vt(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((t = yt(e)).length)
                for (; n = this[u++];)
                    if (i = vt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) { x(this).toggleClass(e.call(this, n, vt(this), t), t) }) : this.each(function() {
                var t, i, o, a;
                if (r)
                    for (i = 0, o = x(this), a = yt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = vt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + mt(vt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    x.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = g(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, x(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = x.map(i, function(e) { return null == e ? "" : e + "" })), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
        }
    }), x.extend({
        valHooks: {
            option: { get: function(e) { var t = x.find.attr(e, "value"); return null != t ? t : mt(x.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) { for (var n, r, i = e.options, o = x.makeArray(t), a = i.length; a--;)((r = i[a]).selected = x.inArray(x.valHooks.option.get(r), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o }
            }
        }
    }), x.each(["radio", "checkbox"], function() { x.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1 } }, h.checkOn || (x.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), h.focusin = "onfocusin" in e;
    var xt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) { e.stopPropagation() };
    x.extend(x.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, d, p, h, v = [i || r],
                y = f.call(t, "type") ? t.type : t,
                b = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (b = y.split("."), y = b.shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : x.makeArray(n, [t]), p = x.event.special[y] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!o && !p.noBubble && !m(i)) {
                    for (l = p.delegateType || y, xt.test(l + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0;
                    (s = v[a++]) && !t.isPropagationStopped();) h = s, t.type = a > 1 ? l : p.bindType || y, (d = (Q.get(s, "events") || {})[t.type] && Q.get(s, "handle")) && d.apply(s, n), (d = c && s[c]) && d.apply && V(s) && (t.result = d.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), n) || !V(i) || c && g(i[y]) && !m(i) && ((u = i[c]) && (i[c] = null), x.event.triggered = y, t.isPropagationStopped() && h.addEventListener(y, wt), i[y](), t.isPropagationStopped() && h.removeEventListener(y, wt), x.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = x.extend(new x.Event, n, { type: e, isSimulated: !0 });
            x.event.trigger(r, null, t)
        }
    }), x.fn.extend({ trigger: function(e, t) { return this.each(function() { x.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return x.event.trigger(e, t, n, !0) } }), h.focusin || x.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) { x.event.simulate(t, e.target, x.event.fix(e)) };
        x.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = Q.access(r, t);
                i || r.addEventListener(e, n, !0), Q.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = Q.access(r, t) - 1;
                i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0), Q.remove(r, t))
            }
        }
    });
    var Tt = e.location,
        Ct = Date.now(),
        kt = /\?/;
    x.parseXML = function(t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (e) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + t), n };
    var At = /\[\]$/,
        Et = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function Dt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) x.each(t, function(t, i) { n || At.test(e) ? r(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== b(t)) r(e, t);
        else
            for (i in t) Dt(e + "[" + i + "]", t[i], n, r)
    }
    x.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, x.fn.extend({ serialize: function() { return x.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = x.prop(this, "elements"); return e ? x.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !x(this).is(":disabled") && St.test(this.nodeName) && !Nt.test(e) && (this.checked || !de.test(e)) }).map(function(e, t) { var n = x(this).val(); return null == n ? null : Array.isArray(n) ? x.map(n, function(e) { return { name: t.name, value: e.replace(Et, "\r\n") } }) : { name: t.name, value: n.replace(Et, "\r\n") } }).get() } });
    var jt = /%20/g,
        It = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $t = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Ot = {},
        Pt = {},
        Rt = "*/".concat("*"),
        Mt = r.createElement("a");

    function Wt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(H) || [];
            if (g(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Bt(e, t, n, r) {
        var i = {},
            o = e === Pt;

        function a(s) { var u; return i[s] = !0, x.each(e[s] || [], function(e, s) { var l = s(t, n, r); return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1) }), u }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function Ft(e, t) { var n, r, i = x.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && x.extend(!0, e, r), e }
    Mt.href = Tt.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? Ft(Ft(e, x.ajaxSettings), t) : Ft(x.ajaxSettings, e) },
        ajaxPrefilter: Wt(Ot),
        ajaxTransport: Wt(Pt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, d, p, h = x.ajaxSetup({}, n),
                g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? x(g) : x.event,
                v = x.Deferred(),
                y = x.Callbacks("once memory"),
                b = h.statusCode || {},
                w = {},
                T = {},
                C = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = qt.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = s[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() { return c ? a : null },
                    setRequestHeader: function(e, t) { return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, w[e] = t), this },
                    overrideMimeType: function(e) { return null == c && (h.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) k.always(e[k.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || C; return i && i.abort(t), A(0, t), this }
                };
            if (v.promise(k), h.url = ((t || h.url || Tt.href) + "").replace(Ht, Tt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(H) || [""], null == h.crossDomain) { l = r.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host } catch (e) { h.crossDomain = !0 } }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = x.param(h.data, h.traditional)), Bt(Ot, h, n, k), c) return k;
            for (d in (f = x.event && h.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !$t.test(h.type), o = h.url.replace(It, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(jt, "+")) : (p = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Lt, "$1"), p = (kt.test(o) ? "&" : "?") + "_=" + Ct++ + p), h.url = o + p), h.ifModified && (x.lastModified[o] && k.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && k.setRequestHeader("If-None-Match", x.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]), h.headers) k.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, k, h) || c)) return k.abort();
            if (C = "abort", y.add(h.complete), k.done(h.success), k.fail(h.error), i = Bt(Pt, h, n, k)) {
                if (k.readyState = 1, f && m.trigger("ajaxSend", [k, h]), c) return k;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() { k.abort("timeout") }, h.timeout));
                try { c = !1, i.send(w, A) } catch (e) {
                    if (c) throw e;
                    A(-1, e)
                }
            } else A(-1, "No Transport");

            function A(t, n, r, s) {
                var l, d, p, w, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", k.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (w = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(h, k, r)), w = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
                    }
                    return { state: "success", data: t }
                }(h, w, k, l), l ? (h.ifModified && ((T = k.getResponseHeader("Last-Modified")) && (x.lastModified[o] = T), (T = k.getResponseHeader("etag")) && (x.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, d = w.data, l = !(p = w.error))) : (p = C, !t && C || (C = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || C) + "", l ? v.resolveWith(g, [d, C, k]) : v.rejectWith(g, [k, C, p]), k.statusCode(b), b = void 0, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [k, h, l ? d : p]), y.fireWith(g, [k, C]), f && (m.trigger("ajaxComplete", [k, h]), --x.active || x.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(e, t, n) { return x.get(e, t, n, "json") },
        getScript: function(e, t) { return x.get(e, void 0, t, "script") }
    }), x.each(["get", "post"], function(e, t) { x[t] = function(e, n, r, i) { return g(n) && (i = i || r, r = n, n = void 0), x.ajax(x.extend({ url: e, type: t, dataType: i, data: n, success: r }, x.isPlainObject(e) && e)) } }), x._evalUrl = function(e, t) { return x.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { x.globalEval(e, t) } }) }, x.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (g(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) { x(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = g(e); return this.each(function(n) { x(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { x(this).replaceWith(this.childNodes) }), this }
    }), x.expr.pseudos.hidden = function(e) { return !x.expr.pseudos.visible(e) }, x.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, x.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (e) {} };
    var zt = { 0: 200, 1223: 204 },
        _t = x.ajaxSettings.xhr();
    h.cors = !!_t && "withCredentials" in _t, h.ajax = _t = !!_t, x.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || _t && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                n = function(e) { return function() { n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() { 4 === s.readyState && e.setTimeout(function() { n && r() }) }, n = n("abort");
                try { s.send(t.hasContent && t.data || null) } catch (e) { if (n) throw e }
            },
            abort: function() { n && n() }
        }
    }), x.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return x.globalEval(e), e } } }), x.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), x.ajaxTransport("script", function(e) { var t, n; if (e.crossDomain || e.scriptAttrs) return { send: function(i, o) { t = x("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type) }), r.head.appendChild(t[0]) }, abort: function() { n && n() } } });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Xt.pop() || x.expando + "_" + Ct++; return this[e] = !0, e } }), x.ajaxPrefilter("json jsonp", function(t, n, r) { var i, o, a, s = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Vt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() { return a || x.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function() { a = arguments }, r.always(function() { void 0 === o ? x(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Xt.push(i)), a && g(o) && o(a[0]), a = o = void 0 }), "script" }), h.createHTMLDocument = ((Ut = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), x.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), a = !n && [], (o = S.exec(e)) ? [t.createElement(o[1])] : (o = we([e], t, a), a && a.length && x(a).remove(), x.merge([], o.childNodes))); var i, o, a }, x.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = mt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && x.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { x.fn[t] = function(e) { return this.on(t, e) } }), x.expr.pseudos.animated = function(e) { return x.grep(x.timers, function(t) { return e === t.elem }).length }, x.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = x.css(e, "position"),
                c = x(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = x.css(e, "top"), u = x.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, x.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, x.fn.extend({
        offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { x.offset.setOffset(this, e, t) }); var t, n, r = this[0]; return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = { top: 0, left: 0 };
                if ("fixed" === x.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = x(e).offset()).top += x.css(e, "borderTopWidth", !0), i.left += x.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - i.top - x.css(r, "marginTop", !0), left: t.left - i.left - x.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent; return e || re }) }
    }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = "pageYOffset" === t;
        x.fn[e] = function(r) {
            return F(this, function(e, r, i) {
                var o;
                if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), x.each(["top", "left"], function(e, t) { x.cssHooks[t] = _e(h.pixelPosition, function(e, n) { if (n) return n = ze(e, t), We.test(n) ? x(e).position()[t] + "px" : n }) }), x.each({ Height: "height", Width: "width" }, function(e, t) {
        x.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) {
            x.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return F(this, function(t, n, i) { var o; return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? x.css(t, n, s) : x.style(t, n, i, s) }, t, a ? i : void 0, a)
            }
        })
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { x.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), x.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), x.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), x.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(o.call(arguments))) }).guid = e.guid = e.guid || x.guid++, i }, x.holdReady = function(e) { e ? x.readyWait++ : x.ready(!0) }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = N, x.isFunction = g, x.isWindow = m, x.camelCase = X, x.type = b, x.now = Date.now, x.isNumeric = function(e) { var t = x.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return x });
    var Gt = e.jQuery,
        Qt = e.$;
    return x.noConflict = function(t) { return e.$ === x && (e.$ = Qt), t && e.jQuery === x && (e.jQuery = Gt), x }, t || (e.jQuery = e.$ = x), x
}),
function(e, t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : e.lightbox = t(e.jQuery) }(this, function(e) {
    function t(t) { this.album = [], this.currentImageIndex = void 0, this.init(), this.options = e.extend({}, this.constructor.defaults), this.option(t) }
    return t.defaults = { albumLabel: "Image %1 of %2", alwaysShowNavOnTouchDevices: !1, fadeDuration: 600, fitImagesInViewport: !0, imageFadeDuration: 600, positionFromTop: 50, resizeDuration: 700, showImageNumberLabel: !0, wrapAround: !1, disableScrolling: !1, sanitizeTitle: !1 }, t.prototype.option = function(t) { e.extend(this.options, t) }, t.prototype.imageCountLabel = function(e, t) { return this.options.albumLabel.replace(/%1/g, e).replace(/%2/g, t) }, t.prototype.init = function() {
        var t = this;
        e(document).ready(function() { t.enable(), t.build() })
    }, t.prototype.enable = function() {
        var t = this;
        e("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(n) { return t.start(e(n.currentTarget)), !1 })
    }, t.prototype.build = function() {
        if (!(e("#lightbox").length > 0)) {
            var t = this;
            e('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image" href="" ></a><a class="lb-next" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(e("body")), this.$lightbox = e("#lightbox"), this.$overlay = e("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.$image = this.$lightbox.find(".lb-image"), this.$nav = this.$lightbox.find(".lb-nav"), this.containerPadding = { top: parseInt(this.$container.css("padding-top"), 10), right: parseInt(this.$container.css("padding-right"), 10), bottom: parseInt(this.$container.css("padding-bottom"), 10), left: parseInt(this.$container.css("padding-left"), 10) }, this.imageBorderWidth = { top: parseInt(this.$image.css("border-top-width"), 10), right: parseInt(this.$image.css("border-right-width"), 10), bottom: parseInt(this.$image.css("border-bottom-width"), 10), left: parseInt(this.$image.css("border-left-width"), 10) }, this.$overlay.hide().on("click", function() { return t.end(), !1 }), this.$lightbox.hide().on("click", function(n) { "lightbox" === e(n.target).attr("id") && t.end() }), this.$outerContainer.on("click", function(n) { return "lightbox" === e(n.target).attr("id") && t.end(), !1 }), this.$lightbox.find(".lb-prev").on("click", function() { return 0 === t.currentImageIndex ? t.changeImage(t.album.length - 1) : t.changeImage(t.currentImageIndex - 1), !1 }), this.$lightbox.find(".lb-next").on("click", function() { return t.currentImageIndex === t.album.length - 1 ? t.changeImage(0) : t.changeImage(t.currentImageIndex + 1), !1 }), this.$nav.on("mousedown", function(e) { 3 === e.which && (t.$nav.css("pointer-events", "none"), t.$lightbox.one("contextmenu", function() { setTimeout(function() { this.$nav.css("pointer-events", "auto") }.bind(t), 0) })) }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() { return t.end(), !1 })
        }
    }, t.prototype.start = function(t) {
        var n = this,
            r = e(window);
        r.on("resize", e.proxy(this.sizeOverlay, this)), this.sizeOverlay(), this.album = [];
        var i = 0;

        function o(e) { n.album.push({ alt: e.attr("data-alt"), link: e.attr("href"), title: e.attr("data-title") || e.attr("title") }) }
        var a, s = t.attr("data-lightbox");
        if (s) { a = e(t.prop("tagName") + '[data-lightbox="' + s + '"]'); for (var u = 0; u < a.length; u = ++u) o(e(a[u])), a[u] === t[0] && (i = u) } else if ("lightbox" === t.attr("rel")) o(t);
        else { a = e(t.prop("tagName") + '[rel="' + t.attr("rel") + '"]'); for (var l = 0; l < a.length; l = ++l) o(e(a[l])), a[l] === t[0] && (i = l) }
        var c = r.scrollTop() + this.options.positionFromTop,
            f = r.scrollLeft();
        this.$lightbox.css({ top: c + "px", left: f + "px" }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && e("body").addClass("lb-disable-scrolling"), this.changeImage(i)
    }, t.prototype.changeImage = function(t) {
        var n = this,
            r = this.album[t].link,
            i = r.split(".").slice(-1)[0],
            o = this.$lightbox.find(".lb-image");
        this.disableKeyboardNav(), this.$overlay.fadeIn(this.options.fadeDuration), e(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
        var a = new Image;
        a.onload = function() {
            var s, u, l, c, f, d;
            o.attr({ alt: n.album[t].alt, src: r }), e(a), o.width(a.width), o.height(a.height), d = e(window).width(), f = e(window).height(), c = d - n.containerPadding.left - n.containerPadding.right - n.imageBorderWidth.left - n.imageBorderWidth.right - 20, l = f - n.containerPadding.top - n.containerPadding.bottom - n.imageBorderWidth.top - n.imageBorderWidth.bottom - n.options.positionFromTop - 70, "svg" === i && (o.width(c), o.height(l)), n.options.fitImagesInViewport ? (n.options.maxWidth && n.options.maxWidth < c && (c = n.options.maxWidth), n.options.maxHeight && n.options.maxHeight < l && (l = n.options.maxHeight)) : (c = n.options.maxWidth || a.width || c, l = n.options.maxHeight || a.height || l), (a.width > c || a.height > l) && (a.width / c > a.height / l ? (u = c, s = parseInt(a.height / (a.width / u), 10), o.width(u), o.height(s)) : (s = l, u = parseInt(a.width / (a.height / s), 10), o.width(u), o.height(s))), n.sizeContainer(o.width(), o.height())
        }, a.src = this.album[t].link, this.currentImageIndex = t
    }, t.prototype.sizeOverlay = function() {
        var t = this;
        setTimeout(function() { t.$overlay.width(e(document).width()).height(e(document).height()) }, 0)
    }, t.prototype.sizeContainer = function(e, t) {
        var n = this,
            r = this.$outerContainer.outerWidth(),
            i = this.$outerContainer.outerHeight(),
            o = e + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right,
            a = t + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;

        function s() { n.$lightbox.find(".lb-dataContainer").width(o), n.$lightbox.find(".lb-prevLink").height(a), n.$lightbox.find(".lb-nextLink").height(a), n.$overlay.focus(), n.showImage() }
        r !== o || i !== a ? this.$outerContainer.animate({ width: o, height: a }, this.options.resizeDuration, "swing", function() { s() }) : s()
    }, t.prototype.showImage = function() { this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav() }, t.prototype.updateNav = function() {
        var e = !1;
        try { document.createEvent("TouchEvent"), e = !!this.options.alwaysShowNavOnTouchDevices } catch (e) {}
        this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (e && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), e && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), e && this.$lightbox.find(".lb-next").css("opacity", "1"))))
    }, t.prototype.updateDetails = function() {
        var e = this;
        if (void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title) {
            var t = this.$lightbox.find(".lb-caption");
            this.options.sanitizeTitle ? t.text(this.album[this.currentImageIndex].title) : t.html(this.album[this.currentImageIndex].title), t.fadeIn("fast")
        }
        if (this.album.length > 1 && this.options.showImageNumberLabel) {
            var n = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(n).fadeIn("fast")
        } else this.$lightbox.find(".lb-number").hide();
        this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() { return e.sizeOverlay() })
    }, t.prototype.preloadNeighboringImages = function() {
        this.album.length > this.currentImageIndex + 1 && ((new Image).src = this.album[this.currentImageIndex + 1].link);
        this.currentImageIndex > 0 && ((new Image).src = this.album[this.currentImageIndex - 1].link)
    }, t.prototype.enableKeyboardNav = function() { this.$lightbox.on("keyup.keyboard", e.proxy(this.keyboardAction, this)), this.$overlay.on("keyup.keyboard", e.proxy(this.keyboardAction, this)) }, t.prototype.disableKeyboardNav = function() { this.$lightbox.off(".keyboard"), this.$overlay.off(".keyboard") }, t.prototype.keyboardAction = function(e) {
        var t = e.keyCode;
        27 === t ? (e.stopPropagation(), this.end()) : 37 === t ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : 39 === t && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0))
    }, t.prototype.end = function() { this.disableKeyboardNav(), e(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), this.options.disableScrolling && e("body").removeClass("lb-disable-scrolling") }, new t
});