/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
    "use strict"; var c = [], d = a.document, e = Object.getPrototypeOf, f = c.slice, g = c.concat, h = c.push, i = c.indexOf, j = {}, k = j.toString, l = j.hasOwnProperty, m = l.toString, n = m.call(Object), o = {}; function p(a, b) { b = b || d; var c = b.createElement("script"); c.text = a, b.head.appendChild(c).parentNode.removeChild(c) } var q = "3.1.0", r = function (a, b) { return new r.fn.init(a, b) }, s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t = /^-ms-/, u = /-([a-z])/g, v = function (a, b) { return b.toUpperCase() }; r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function () { return f.call(this) }, get: function (a) { return null != a ? a < 0 ? this[a + this.length] : this[a] : f.call(this) }, pushStack: function (a) { var b = r.merge(this.constructor(), a); return b.prevObject = this, b }, each: function (a) { return r.each(this, a) }, map: function (a) { return this.pushStack(r.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(f.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (a < 0 ? b : 0); return this.pushStack(c >= 0 && c < b ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--) ; h < i; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d)); return g }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === r.type(a) }, isArray: Array.isArray, isWindow: function (a) { return null != a && a === a.window }, isNumeric: function (a) { var b = r.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) }, isPlainObject: function (a) { var b, c; return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n)) }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a }, globalEval: function (a) { p(a) }, camelCase: function (a) { return a.replace(t, "ms-").replace(u, v) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b) { var c, d = 0; if (w(a)) { for (c = a.length; d < c; d++) if (b.call(a[d], d, a[d]) === !1) break } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function (a) { return null == a ? "" : (a + "").replace(s, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c }, inArray: function (a, b, c) { return null == b ? -1 : i.call(b, a, c) }, merge: function (a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, e, f = 0, h = []; if (w(a)) for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e); else for (f in a) e = b(a[f], f, c), null != e && h.push(e); return g.apply([], h) }, guid: 1, proxy: function (a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function () { return a.apply(b || this, d.concat(f.call(arguments))) }, e.guid = a.guid = a.guid || r.guid++, e }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) { j["[object " + b + "]"] = b.toLowerCase() }); function w(a) { var b = !!a && "length" in a && a.length, c = r.type(a); return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a) } var x = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) { return a === b && (l = !0), 0 }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function (a, b) { for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c; return -1 }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, ca = function (a, b) { return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a }, da = function () { m() }, ea = ta(function (a) { return a.disabled === !0 }, { dir: "parentNode", next: "legend" }); try { G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType } catch (fa) { G = { apply: D.length ? function (a, b) { F.apply(a, H.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function ga(a, b, d, e) { var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== w && (l = Z.exec(a))) if (f = l[1]) { if (9 === w) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== w) s = b, r = a; else if ("object" !== b.nodeName.toLowerCase()) { (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length; while (h--) o[h] = "#" + k + " " + sa(o[h]); r = o.join(","), s = $.test(a) && qa(b.parentNode) || b } if (r) try { return G.apply(d, s.querySelectorAll(r)), d } catch (x) { } finally { k === u && b.removeAttribute("id") } } } return i(a.replace(P, "$1"), b, d, e) } function ha() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function ia(a) { return a[u] = !0, a } function ja(a) { var b = n.createElement("fieldset"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function ka(a, b) { var c = a.split("|"), e = c.length; while (e--) d.attrHandle[c[e]] = b } function la(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex; if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function ma(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function na(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function oa(a) { return function (b) { return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a) } } function pa(a) { return ia(function (b) { return b = +b, ia(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function qa(a) { return a && "undefined" != typeof a.getElementsByTagName && a } c = ga.support = {}, f = ga.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, m = ga.setDocument = function (a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ja(function (a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }, d.filter.ID = function (a) { var b = a.replace(_, aa); return function (a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(_, aa); return function (a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a) }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ja(function (a) { a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var b = n.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) { c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, B = b ? function (a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return l = !0, 0; var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0; if (e === f) return la(a, b); c = a; while (c = c.parentNode) g.unshift(c); c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, ga.matches = function (a, b) { return ga(a, null, null, b) }, ga.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return ga(b, n, null, [a]).length > 0 }, ga.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ga.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, ga.escape = function (a) { return (a + "").replace(ba, ca) }, ga.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, ga.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = ga.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(_, aa).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = ga.attr(d, a); return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")) } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break; return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: ia(function (a) { var b = [], c = [], d = h(a.replace(P, "$1")); return d[u] ? ia(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ia(function (a) { return function (b) { return ga(a, b).length > 0 } }), contains: ia(function (a) { return a = a.replace(_, aa), function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ia(function (a) { return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) { var c; do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === o }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: oa(!1), disabled: oa(!0), checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return X.test(a.nodeName) }, input: function (a) { return W.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: pa(function () { return [0] }), last: pa(function (a, b) { return [b - 1] }), eq: pa(function (a, b, c) { return [c < 0 ? c + b : c] }), even: pa(function (a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }), odd: pa(function (a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }), lt: pa(function (a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d); return a }), gt: pa(function (a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b); function ra() { } ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? ga.error(a) : z(a, i).slice(0) }; function sa(a) { for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value; return d } function ta(a, b, c) { var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = x++; return b.first ? function (b, c, e) { while (b = b[d]) if (1 === b.nodeType || g) return a(b, c, e) } : function (b, c, i) { var j, k, l, m = [w, h]; if (i) { while (b = b[d]) if ((1 === b.nodeType || g) && a(b, c, i)) return !0 } else while (b = b[d]) if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b; else { if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2]; if (k[f] = m, m[2] = a(b, c, i)) return !0 } } } function ua(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function va(a, b, c) { for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c); return c } function wa(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g } function xa(a, b, c, d, e, f) { return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = wa(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r) }) } function ya(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) { return a === b }, h, !0), l = ta(function (a) { return I(b, a) > -1 }, h, !0), m = [function (a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; i < f; i++) if (c = d.relative[a[i].type]) m = [ta(ua(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break; return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a)) } m.push(c) } return ua(m) } function za(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length; for (k && (j = g === n || g || k) ; s !== z && null != (l = x[s]) ; s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++]) if (q(l, g || n, h)) { i.push(l); break } k && (w = y) } c && ((l = !q && l) && r--, f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i)); u = wa(u) } G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ia(f) : f } return h = ga.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f); f = A(a, za(e, d)), f.selector = a } return f }, i = ga.select = function (a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e; n && (b = b.parentNode), a = a.slice(j.shift().value.length) } i = V.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) { return 1 & a.compareDocumentPosition(n.createElement("fieldset")) }), ja(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ka("type|href|height|width", function (a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ja(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ka("value", function (a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), ja(function (a) { return null == a.getAttribute("disabled") }) || ka(J, function (a, b, c) { var d; if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), ga }(a); r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape; var y = function (a, b, c) { var d = [], e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) { if (e && r(a).is(c)) break; d.push(a) } return d }, z = function (a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c }, A = r.expr.match.needsContext, B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, C = /^.[^:#\[\.,]*$/; function D(a, b, c) { if (r.isFunction(b)) return r.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return r.grep(a, function (a) { return a === b !== c }); if ("string" == typeof b) { if (C.test(b)) return r.filter(b, a, c); b = r.filter(b, a) } return r.grep(a, function (a) { return i.call(b, a) > -1 !== c && 1 === a.nodeType }) } r.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) { return 1 === a.nodeType })) }, r.fn.extend({ find: function (a) { var b, c, d = this.length, e = this; if ("string" != typeof a) return this.pushStack(r(a).filter(function () { for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0 })); for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c); return d > 1 ? r.uniqueSort(c) : c }, filter: function (a) { return this.pushStack(D(this, a || [], !1)) }, not: function (a) { return this.pushStack(D(this, a || [], !0)) }, is: function (a) { return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length } }); var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, G = r.fn.init = function (a, b, c) { var e, f; if (!a) return this; if (c = c || E, "string" == typeof a) { if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this } return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this) }; G.prototype = r.fn, E = r(d); var H = /^(?:parents|prev(?:Until|All))/, I = { children: !0, contents: !0, next: !0, prev: !0 }; r.fn.extend({ has: function (a) { var b = r(a, this), c = b.length; return this.filter(function () { for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0 }) }, closest: function (a, b) { var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a); if (!A.test(a)) for (; d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f) }, index: function (a) { return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function J(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a } r.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return y(a, "parentNode") }, parentsUntil: function (a, b, c) { return y(a, "parentNode", c) }, next: function (a) { return J(a, "nextSibling") }, prev: function (a) { return J(a, "previousSibling") }, nextAll: function (a) { return y(a, "nextSibling") }, prevAll: function (a) { return y(a, "previousSibling") }, nextUntil: function (a, b, c) { return y(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return y(a, "previousSibling", c) }, siblings: function (a) { return z((a.parentNode || {}).firstChild, a) }, children: function (a) { return z(a.firstChild) }, contents: function (a) { return a.contentDocument || r.merge([], a.childNodes) } }, function (a, b) { r.fn[a] = function (c, d) { var e = r.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e) } }); var K = /\S+/g; function L(a) { var b = {}; return r.each(a.match(K) || [], function (a, c) { b[c] = !0 }), b } r.Callbacks = function (a) { a = "string" == typeof a ? L(a) : r.extend({}, a); var b, c, d, e, f = [], g = [], h = -1, i = function () { for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) } a.memory || (c = !1), b = !1, e && (f = c ? [] : "") }, j = { add: function () { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { r.each(b, function (b, c) { r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function () { return r.each(arguments, function (a, b) { var c; while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h-- }), this }, has: function (a) { return a ? r.inArray(a, f) > -1 : f.length > 0 }, empty: function () { return f && (f = []), this }, disable: function () { return e = g = [], f = c = "", this }, disabled: function () { return !f }, lock: function () { return e = g = [], c || b || (f = c = ""), this }, locked: function () { return !!e }, fireWith: function (a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function () { return j.fireWith(this, arguments), this }, fired: function () { return !!d } }; return j }; function M(a) { return a } function N(a) { throw a } function O(a, b, c) { var d; try { a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a) } catch (a) { c.call(void 0, a) } } r.extend({ Deferred: function (b) { var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]], d = "pending", e = { state: function () { return d }, always: function () { return f.done(arguments).fail(arguments), this }, "catch": function (a) { return e.then(null, a) }, pipe: function () { var a = arguments; return r.Deferred(function (b) { r.each(c, function (c, d) { var e = r.isFunction(a[d[4]]) && a[d[4]]; f[d[1]](function () { var a = e && e.apply(this, arguments); a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments) }) }), a = null }).promise() }, then: function (b, d, e) { var f = 0; function g(b, c, d, e) { return function () { var h = this, i = arguments, j = function () { var a, j; if (!(b < f)) { if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution"); j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i)) } }, k = e ? j : function () { try { j() } catch (a) { r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i)) } }; b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k)) } } return r.Deferred(function (a) { c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N)) }).promise() }, promise: function (a) { return null != a ? r.extend(a, e) : e } }, f = {}; return r.each(c, function (a, b) { var g = b[2], h = b[5]; e[b[1]] = g.add, h && g.add(function () { d = h }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this }, f[b[0] + "With"] = g.fireWith }), e.promise(f), b && b.call(f, f), f }, when: function (a) { var b = arguments.length, c = b, d = Array(c), e = f.call(arguments), g = r.Deferred(), h = function (a) { return function (c) { d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e) } }; if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then(); while (c--) O(e[c], h(c), g.reject); return g.promise() } }); var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; r.Deferred.exceptionHook = function (b, c) { a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c) }, r.readyException = function (b) { a.setTimeout(function () { throw b }) }; var Q = r.Deferred(); r.fn.ready = function (a) { return Q.then(a)["catch"](function (a) { r.readyException(a) }), this }, r.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? r.readyWait++ : r.ready(!0) }, ready: function (a) { (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r])) } }), r.ready.then = Q.then; function R() { d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready() } "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R)); var S = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c; if ("object" === r.type(c)) { e = !0; for (h in c) S(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0,
        r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(r(a), c) })), b)) for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, T = function (a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }; function U() { this.expando = r.expando + U.uid++ } U.uid = 1, U.prototype = { cache: function (a) { var b = a[this.expando]; return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function (a, b, c) { var d, e = this.cache(a); if ("string" == typeof b) e[r.camelCase(b)] = c; else for (d in b) e[r.camelCase(d)] = b[d]; return e }, get: function (a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)] }, access: function (a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function (a, b) { var c, d = a[this.expando]; if (void 0 !== d) { if (void 0 !== b) { r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length; while (c--) delete d[b[c]] } (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function (a) { var b = a[this.expando]; return void 0 !== b && !r.isEmptyObject(b) } }; var V = new U, W = new U, X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Y = /[A-Z]/g; function Z(a, b, c) { var d; if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : X.test(c) ? JSON.parse(c) : c) } catch (e) { } W.set(a, b, c) } else c = void 0; return c } r.extend({ hasData: function (a) { return W.hasData(a) || V.hasData(a) }, data: function (a, b, c) { return W.access(a, b, c) }, removeData: function (a, b) { W.remove(a, b) }, _data: function (a, b, c) { return V.access(a, b, c) }, _removeData: function (a, b) { V.remove(a, b) } }), r.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), Z(f, d, e[d]))); V.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { W.set(this, a) }) : S(this, function (b) { var c; if (f && void 0 === b) { if (c = W.get(f, a), void 0 !== c) return c; if (c = Z(f, a), void 0 !== c) return c } else this.each(function () { W.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function (a) { return this.each(function () { W.remove(this, a) }) } }), r.extend({ queue: function (a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [] }, dequeue: function (a, b) { b = b || "fx"; var c = r.queue(a, b), d = c.length, e = c.shift(), f = r._queueHooks(a, b), g = function () { r.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () { V.remove(a, [b + "queue", c]) }) }) } }), r.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = r.queue(this, a, b); r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { r.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }); var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"), aa = ["Top", "Right", "Bottom", "Left"], ba = function (a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display") }, ca = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; function da(a, b, c, d) { var e, f = 1, g = 20, h = d ? function () { return d.cur() } : function () { return r.css(a, b, "") }, i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"), k = (r.cssNumber[b] || "px" !== j && +i) && _.exec(r.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1; do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e } var ea = {}; function fa(a) { var b, c = a.ownerDocument, d = a.nodeName, e = ea[d]; return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ea[d] = e, e) } function ga(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ba(d) && (e[f] = fa(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c))); for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]); return a } r.fn.extend({ show: function () { return ga(this, !0) }, hide: function () { return ga(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { ba(this) ? r(this).show() : r(this).hide() }) } }); var ha = /^(?:checkbox|radio)$/i, ia = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ja = /^$|\/(?:java|ecma)script/i, ka = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; ka.optgroup = ka.option, ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead, ka.th = ka.td; function la(a, b) { var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c } function ma(a, b) { for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval")) } var na = /<|&#?\w+;/; function oa(a, b, c, d, e) { for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f); else if (na.test(f)) { g = g || l.appendChild(b.createElement("div")), h = (ia.exec(f) || ["", ""])[1].toLowerCase(), i = ka[h] || ka._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0]; while (k--) g = g.lastChild; r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "" } else m.push(b.createTextNode(f)); l.textContent = "", n = 0; while (f = m[n++]) if (d && r.inArray(f, d) > -1) e && e.push(f); else if (j = r.contains(f.ownerDocument, f), g = la(l.appendChild(f), "script"), j && ma(g), c) { k = 0; while (f = g[k++]) ja.test(f.type || "") && c.push(f) } return l } !function () { var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input"); c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }(); var pa = d.documentElement, qa = /^key/, ra = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, sa = /^([^.]*)(?:\.(.+)|)/; function ta() { return !0 } function ua() { return !1 } function va() { try { return d.activeElement } catch (a) { } } function wa(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) wa(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ua; else if (!e) return a; return 1 === f && (g = e, e = function (a) { return r().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () { r.event.add(this, b, e, d, c) }) } r.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a); if (q) { c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(pa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) { return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(K) || [""], j = b.length; while (j--) h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0) } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a); if (q && (i = q.events)) { b = (b || "").match(K) || [""], j = b.length; while (j--) if (h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) { l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k)); g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]) } else for (n in i) r.event.remove(a, n + b[j], c, d, !0); r.isEmptyObject(i) && V.remove(a, "handle events") } }, dispatch: function (a) { var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (V.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {}; for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c]; if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) { h = r.event.handlers.call(this, b, j), c = 0; while ((f = h[c++]) && !b.isPropagationStopped()) { b.currentTarget = f.elem, d = 0; while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, b), b.result } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (d = [], c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? r(e, this).index(i) > -1 : r.find(e, this, null, [i]).length), d[e] && d.push(f); d.length && g.push({ elem: i, handlers: d }) } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, addProp: function (a, b) { Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () { if (this.originalEvent) return b(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[a] }, set: function (b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) }, fix: function (a) { return a[r.expando] ? a : new r.Event(a) }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== va() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function () { if (this === va() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function () { if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1 }, _default: function (a) { return r.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } } }, r.removeEvent = function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, r.Event = function (a, b) { return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ta : ua, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b) }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: ua, isPropagationStopped: ua, isImmediatePropagationStopped: ua, isSimulated: !1, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = ta, a && !this.isSimulated && a.preventDefault() }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = ta, a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = ta, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation() } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (a) { var b = a.button; return null == a.which && qa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ra.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { r.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), r.fn.extend({ on: function (a, b, c, d) { return wa(this, a, b, c, d) }, one: function (a, b, c, d) { return wa(this, a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ua), this.each(function () { r.event.remove(this, a, c, b) }) } }); var xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, ya = /<script|<style|<link/i, za = /checked\s*(?:[^=]|=\s*.checked.)/i, Aa = /^true\/(.*)/, Ba = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function Ca(a, b) { return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a } function Da(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a } function Ea(a) { var b = Aa.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function Fa(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j) for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]) } W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i)) } } function Ga(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) } function Ha(a, b, c, d) { b = g.apply([], b); var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q); if (s || m > 1 && "string" == typeof q && !o.checkClone && za.test(q)) return a.each(function (e) { var f = a.eq(e); s && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d) }); if (m && (e = oa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) { for (h = r.map(la(e, "script"), Da), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, la(j, "script"))), c.call(a[l], j, l); if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ea), l = 0; l < i; l++) j = h[l], ja.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ba, ""), k)) } return a } function Ia(a, b, c) { for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]) ; f++) c || 1 !== d.nodeType || r.cleanData(la(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && ma(la(d, "script")), d.parentNode.removeChild(d)); return a } r.extend({ htmlPrefilter: function (a) { return a.replace(xa, "<$1></$2>") }, clone: function (a, b, c) { var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a); if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = la(h), f = la(a), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]); if (b) if (c) for (f = f || la(a), g = g || la(h), d = 0, e = f.length; d < e; d++) Fa(f[d], g[d]); else Fa(a, h); return g = la(h, "script"), g.length > 0 && ma(g, !i && la(a, "script")), h }, cleanData: function (a) { for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]) ; f++) if (T(c)) { if (b = c[V.expando]) { if (b.events) for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle); c[V.expando] = void 0 } c[W.expando] && (c[W.expando] = void 0) } } }), r.fn.extend({ detach: function (a) { return Ia(this, a, !0) }, remove: function (a) { return Ia(this, a) }, text: function (a) { return S(this, function (a) { return void 0 === a ? r.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) }, append: function () { return Ha(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ca(this, a); b.appendChild(a) } }) }, prepend: function () { return Ha(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ca(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return Ha(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return Ha(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function () { for (var a, b = 0; null != (a = this[b]) ; b++) 1 === a.nodeType && (r.cleanData(la(a, !1)), a.textContent = ""); return this }, clone: function (a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function () { return r.clone(this, a, b) }) }, html: function (a) { return S(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !ya.test(a) && !ka[(ia.exec(a) || ["", ""])[1].toLowerCase()]) { a = r.htmlPrefilter(a); try { for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(la(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = []; return Ha(this, arguments, function (b) { var c = this.parentNode; r.inArray(this, a) < 0 && (r.cleanData(la(this)), c && c.replaceChild(b, this)) }, a) } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { r.fn[a] = function (a) { for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get()); return this.pushStack(d) } }); var Ja = /^margin/, Ka = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"), La = function (b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) }; !function () { function b() { if (i) { i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", pa.appendChild(h); var b = a.getComputedStyle(i); c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, pa.removeChild(h), i = null } } var c, e, f, g, h = d.createElement("div"), i = d.createElement("div"); i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function () { return b(), c }, boxSizingReliable: function () { return b(), e }, pixelMarginRight: function () { return b(), f }, reliableMarginLeft: function () { return b(), g } })) }(); function Ma(a, b, c) { var d, e, f, g, h = a.style; return c = c || La(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g } function Na(a, b) { return { get: function () { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } } var Oa = /^(none|table(?!-c[ea]).+)/, Pa = { position: "absolute", visibility: "hidden", display: "block" }, Qa = { letterSpacing: "0", fontWeight: "400" }, Ra = ["Webkit", "Moz", "ms"], Sa = d.createElement("div").style; function Ta(a) { if (a in Sa) return a; var b = a[0].toUpperCase() + a.slice(1), c = Ra.length; while (c--) if (a = Ra[c] + b, a in Sa) return a } function Ua(a, b, c) { var d = _.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b } function Va(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + aa[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + aa[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + aa[f] + "Width", !0, e))) : (g += r.css(a, "padding" + aa[f], !0, e), "padding" !== c && (g += r.css(a, "border" + aa[f] + "Width", !0, e))); return g } function Wa(a, b, c) { var d, e = !0, f = La(a), g = "border-box" === r.css(a, "boxSizing", !1, f); if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) { if (d = Ma(a, b, f), (d < 0 || null == d) && (d = a.style[b]), Ka.test(d)) return d; e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0 } return d + Va(a, b, c || (g ? "border" : "content"), e, f) + "px" } r.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Ma(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = r.camelCase(b), i = a.style; return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = _.exec(c)) && e[1] && (c = da(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0) } }, css: function (a, b, c, d) { var e, f, g, h = r.camelCase(b); return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Ma(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e } }), r.each(["height", "width"], function (a, b) { r.cssHooks[b] = { get: function (a, c, d) { if (c) return !Oa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Wa(a, b, d) : ca(a, Pa, function () { return Wa(a, b, d) }) }, set: function (a, c, d) { var e, f = d && La(a), g = d && Va(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f); return g && (e = _.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ua(a, c, g) } } }), r.cssHooks.marginLeft = Na(o.reliableMarginLeft, function (a, b) { if (b) return (parseFloat(Ma(a, "marginLeft")) || a.getBoundingClientRect().left - ca(a, { marginLeft: 0 }, function () { return a.getBoundingClientRect().left })) + "px" }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) { r.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + aa[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Ja.test(a) || (r.cssHooks[a + b].set = Ua) }), r.fn.extend({ css: function (a, b) { return S(this, function (a, b, c) { var d, e, f = {}, g = 0; if (r.isArray(b)) { for (d = La(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d); return f } return void 0 !== c ? r.style(a, b, c) : r.css(a, b) }, a, b, arguments.length > 1) } }); function Xa(a, b, c, d, e) { return new Xa.prototype.init(a, b, c, d, e) } r.Tween = Xa, Xa.prototype = { constructor: Xa, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px") }, cur: function () { var a = Xa.propHooks[this.prop]; return a && a.get ? a.get(this) : Xa.propHooks._default.get(this) }, run: function (a) { var b, c = Xa.propHooks[this.prop]; return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Xa.propHooks._default.set(this), this } }, Xa.prototype.init.prototype = Xa.prototype, Xa.propHooks = { _default: { get: function (a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function (a) { r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit) } } }, Xa.propHooks.scrollTop = Xa.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, r.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, r.fx = Xa.prototype.init, r.fx.step = {}; var Ya, Za, $a = /^(?:toggle|show|hide)$/, _a = /queueHooks$/; function ab() { Za && (a.requestAnimationFrame(ab), r.fx.tick()) } function bb() { return a.setTimeout(function () { Ya = void 0 }), Ya = r.now() } function cb(a, b) { var c, d = 0, e = { height: a }; for (b = b ? 1 : 0; d < 4; d += 2 - b) c = aa[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e } function db(a, b, c) { for (var d, e = (gb.tweeners[b] || []).concat(gb.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d } function eb(a, b, c) { var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, p = a.nodeType && ba(a), q = V.get(a, "fxshow"); c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () { g.unqueued || h() }), g.unqueued++, m.always(function () { m.always(function () { g.unqueued--, r.queue(a, "fx").length || g.empty.fire() }) })); for (d in b) if (e = b[d], $a.test(e)) { if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) { if ("show" !== e || !q || void 0 === q[d]) continue; p = !0 } n[d] = q && q[d] || r.style(a, d) } if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) { l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ga([a], !0), j = a.style.display || j, k = r.css(a, "display"), ga([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () { o.display = j }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })), i = !1; for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ga([a], !0), m.done(function () { p || ga([a]), V.remove(a, "fxshow"); for (d in n) r.style(a, d, n[d]) })), i = db(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0)) } } function fb(a, b) { var c, d, e, f, g; for (c in a) if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function gb(a, b, c) { var d, e, f = 0, g = gb.prefilters.length, h = r.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = Ya || bb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Ya || bb(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; c < d; c++) j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (fb(k, j.opts.specialEasing) ; f < g; f++) if (d = gb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d; return r.map(k, db, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) } r.Animation = r.extend(gb, { tweeners: { "*": [function (a, b) { var c = this.createTween(a, b); return da(c.elem, a, _.exec(b), c), c }] }, tweener: function (a, b) { r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K); for (var c, d = 0, e = a.length; d < e; d++) c = a[d], gb.tweeners[c] = gb.tweeners[c] || [], gb.tweeners[c].unshift(b) }, prefilters: [eb], prefilter: function (a, b) { b ? gb.prefilters.unshift(a) : gb.prefilters.push(a) } }), r.speed = function (a, b, c) { var e = a && "object" == typeof a ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b }; return r.fx.off || d.hidden ? e.duration = 0 : e.duration = "number" == typeof e.duration ? e.duration : e.duration in r.fx.speeds ? r.fx.speeds[e.duration] : r.fx.speeds._default, null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () { r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue) }, e }, r.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(ba).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = r.isEmptyObject(a), f = r.speed(b, c, d), g = function () { var b = gb(this, r.extend({}, a), f); (e || V.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = r.timers, g = V.get(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && _a.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); !b && c || r.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = V.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0; for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), r.each(["toggle", "show", "hide"], function (a, b) { var c = r.fn[b]; r.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(cb(b, !0), a, d, e) } }), r.each({ slideDown: cb("show"), slideUp: cb("hide"), slideToggle: cb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { r.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), r.timers = [], r.fx.tick = function () { var a, b = 0, c = r.timers; for (Ya = r.now() ; b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1); c.length || r.fx.stop(), Ya = void 0 }, r.fx.timer = function (a) { r.timers.push(a), a() ? r.fx.start() : r.timers.pop() }, r.fx.interval = 13, r.fx.start = function () { Za || (Za = a.requestAnimationFrame ? a.requestAnimationFrame(ab) : a.setInterval(r.fx.tick, r.fx.interval)) }, r.fx.stop = function () { a.cancelAnimationFrame ? a.cancelAnimationFrame(Za) : a.clearInterval(Za), Za = null }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) { return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) { var e = a.setTimeout(c, b); d.stop = function () { a.clearTimeout(e) } }) }, function () { var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option")); a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value }(); var hb, ib = r.expr.attrHandle; r.fn.extend({ attr: function (a, b) { return S(this, r.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { r.removeAttr(this, a) }) } }), r.extend({
        attr: function (a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? hb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d)) }, attrHooks: { type: { set: function (a, b) { if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function (a, b) {
            var c, d = 0, e = b && b.match(K);
            if (e && 1 === a.nodeType) while (c = e[d++]) a.removeAttribute(c)
        }
    }), hb = { set: function (a, b, c) { return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = ib[b] || r.find.attr; ib[b] = function (a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = ib[g], ib[g] = e, e = null != c(a, b, d) ? g : null, ib[g] = f), e } }); var jb = /^(?:input|select|textarea|button)$/i, kb = /^(?:a|area)$/i; r.fn.extend({ prop: function (a, b) { return S(this, r.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return this.each(function () { delete this[r.propFix[a] || a] }) } }), r.extend({ prop: function (a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { var b = r.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : jb.test(a.nodeName) || kb.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null }, set: function (a) { var b = a.parentNode; b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { r.propFix[this.toLowerCase()] = this }); var lb = /[\t\r\n\f]/g; function mb(a) { return a.getAttribute && a.getAttribute("class") || "" } r.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function (b) { r(this).addClass(a.call(this, b, mb(this))) }); if ("string" == typeof a && a) { b = a.match(K) || []; while (c = this[i++]) if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " "); h = r.trim(d), e !== h && c.setAttribute("class", h) } } return this }, removeClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function (b) { r(this).removeClass(a.call(this, b, mb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(K) || []; while (c = this[i++]) if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) { g = 0; while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " "); h = r.trim(d), e !== h && c.setAttribute("class", h) } } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) { r(this).toggleClass(a.call(this, c, mb(this), b), b) }) : this.each(function () { var b, d, e, f; if ("string" === c) { d = 0, e = r(this), f = a.match(K) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = mb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || "")) }) }, hasClass: function (a) { var b, c, d = 0; b = " " + a + " "; while (c = this[d++]) if (1 === c.nodeType && (" " + mb(c) + " ").replace(lb, " ").indexOf(b) > -1) return !0; return !1 } }); var nb = /\r/g, ob = /[\x20\t\r\n\f]+/g; r.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = r.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) { return null == a ? "" : a + "" })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c) } } }), r.extend({ valHooks: { option: { get: function (a) { var b = r.find.attr(a, "value"); return null != b ? b : r.trim(r.text(a)).replace(ob, " ") } }, select: { get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++) if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) { if (b = r(c).val(), f) return b; g.push(b) } return g }, set: function (a, b) { var c, d, e = a.options, f = r.makeArray(b), g = e.length; while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), r.each(["radio", "checkbox"], function () { r.valHooks[this] = { set: function (a, b) { if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1 } }, o.checkOn || (r.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var pb = /^(?:focusinfocus|focusoutblur)$/; r.extend(r.event, { trigger: function (b, c, e, f) { var g, h, i, j, k, m, n, o = [e || d], p = l.call(b, "type") ? b.type : b, q = l.call(b, "namespace") ? b.namespace.split(".") : []; if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) { if (!f && !n.noBubble && !r.isWindow(e)) { for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode) ; h; h = h.parentNode) o.push(h), i = h; i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a) } g = 0; while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault()); return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result } }, simulate: function (a, b, c) { var d = r.extend(new r.Event, c, { type: a, isSimulated: !0 }); r.event.trigger(d, null, b) } }), r.fn.extend({ trigger: function (a, b) { return this.each(function () { r.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; if (c) return r.event.trigger(a, b, c, !0) } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) { r.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), r.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { r.event.simulate(b, a.target, r.event.fix(a)) }; r.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = V.access(d, b); e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = V.access(d, b) - 1; e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b)) } } }); var qb = a.location, rb = r.now(), sb = /\?/; r.parseXML = function (b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c }; var tb = /\[\]$/, ub = /\r?\n/g, vb = /^(?:submit|button|image|reset|file)$/i, wb = /^(?:input|select|textarea|keygen)/i; function xb(a, b, c, d) { var e; if (r.isArray(b)) r.each(b, function (b, e) { c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) }); else if (c || "object" !== r.type(b)) d(a, b); else for (e in b) xb(a + "[" + e + "]", b[e], c, d) } r.param = function (a, b) { var c, d = [], e = function (a, b) { var c = r.isFunction(b) ? b() : b; d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c) }; if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () { e(this.name, this.value) }); else for (c in a) xb(c, a[c], b, e); return d.join("&") }, r.fn.extend({ serialize: function () { return r.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = r.prop(this, "elements"); return a ? r.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ha.test(a)) }).map(function (a, b) { var c = r(this).val(); return null == c ? null : r.isArray(c) ? r.map(c, function (a) { return { name: b.name, value: a.replace(ub, "\r\n") } }) : { name: b.name, value: c.replace(ub, "\r\n") } }).get() } }); var yb = /%20/g, zb = /#.*$/, Ab = /([?&])_=[^&]*/, Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Db = /^(?:GET|HEAD)$/, Eb = /^\/\//, Fb = {}, Gb = {}, Hb = "*/".concat("*"), Ib = d.createElement("a"); Ib.href = qb.href; function Jb(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(K) || []; if (r.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function Kb(a, b, c, d) { var e = {}, f = a === Gb; function g(h) { var i; return e[h] = !0, r.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function Lb(a, b) { var c, d, e = r.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && r.extend(!0, a, d), a } function Mb(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d) for (e in h) if (h[e] && h[e].test(d)) { i.unshift(e); break } if (i[0] in c) f = i[0]; else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break } g || (g = e) } f = f || g } if (f) return f !== i[0] && i.unshift(f), c[f] } function Nb(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a) }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function (b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = { readyState: 0, getResponseHeader: function (a) { var b; if (k) { if (!h) { h = {}; while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2] } b = h[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return k ? g : null }, setRequestHeader: function (a, b) { return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this }, overrideMimeType: function (a) { return null == k && (o.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (k) y.always(a[y.status]); else for (b in a) u[b] = [u[b], a[b]]; return this }, abort: function (a) { var b = a || x; return e && e.abort(b), A(0, b), this } }; if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) { j = d.createElement("a"); try { j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host } catch (z) { o.crossDomain = !0 } } if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y; l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, ""), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]); for (m in o.headers) y.setRequestHeader(m, o.headers[m]); if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort(); if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) { if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y; o.async && o.timeout > 0 && (i = a.setTimeout(function () { y.abort("timeout") }, o.timeout)); try { k = !1, e.send(v, A) } catch (z) { if (k) throw z; A(-1, z) } } else A(-1, "No Transport"); function A(b, c, d, h) { var j, m, n, v, w, x = c; k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop"))) } return y }, getJSON: function (a, b, c) { return r.get(a, b, c, "json") }, getScript: function (a, b) { return r.get(a, void 0, b, "script") } }), r.each(["get", "post"], function (a, b) { r[b] = function (a, c, d, e) { return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a)) } }), r._evalUrl = function (a) { return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, r.fn.extend({ wrapAll: function (a) { var b; return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this }, wrapInner: function (a) { return r.isFunction(a) ? this.each(function (b) { r(this).wrapInner(a.call(this, b)) }) : this.each(function () { var b = r(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = r.isFunction(a); return this.each(function (c) { r(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function (a) { return this.parent(a).not("body").each(function () { r(this).replaceWith(this.childNodes) }), this } }), r.expr.pseudos.hidden = function (a) { return !r.expr.pseudos.visible(a) }, r.expr.pseudos.visible = function (a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, r.ajaxSettings.xhr = function () { try { return new a.XMLHttpRequest } catch (b) { } }; var Ob = { 0: 200, 1223: 204 }, Pb = r.ajaxSettings.xhr(); o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) { var c, d; if (o.cors || Pb && !b.crossDomain) return { send: function (e, f) { var g, h = b.xhr(); if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g]; b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (g in e) h.setRequestHeader(g, e[g]); c = function (a) { return function () { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () { 4 === h.readyState && a.setTimeout(function () { c && d() }) }, c = c("abort"); try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i } }, abort: function () { c && c() } } }), r.ajaxPrefilter(function (a) { a.crossDomain && (a.contents.script = !1) }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (a) { return r.globalEval(a), a } } }), r.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), r.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c; return { send: function (e, f) { b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function () { c && c() } } } }); var Qb = [], Rb = /(=)\?(?=&|$)|\?\?/; r.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = Qb.pop() || r.expando + "_" + rb++; return this[a] = !0, a } }), r.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || r.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), o.createHTMLDocument = function () { var a = d.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length }(), r.parseHTML = function (a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var e, f, g; return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = oa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes)) }, r.fn.load = function (a, b, c) { var d, e, f, g = this, h = a.indexOf(" "); return h > -1 && (d = r.trim(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) { f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a) }).always(c && function (a, b) { g.each(function () { c.apply(this, f || [a.responseText, b, a]) }) }), this }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { r.fn[b] = function (a) { return this.on(b, a) } }), r.expr.pseudos.animated = function (a) { return r.grep(r.timers, function (b) { return a === b.elem }).length }; function Sb(a) { return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView } r.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, r.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { r.offset.setOffset(this, a, b) }); var b, c, d, e, f = this[0]; if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 } }, position: function () { if (this[0]) { var a, b, c = this[0], d = { top: 0, left: 0 }; return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent; while (a && "static" === r.css(a, "position")) a = a.offsetParent; return a || pa }) } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = "pageYOffset" === b; r.fn[a] = function (d) { return S(this, function (a, d, e) { var f = Sb(a); return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) } }), r.each(["top", "left"], function (a, b) { r.cssHooks[b] = Na(o.pixelPosition, function (a, c) { if (c) return c = Ma(a, b), Ka.test(c) ? r(a).position()[b] + "px" : c }) }), r.each({ Height: "height", Width: "width" }, function (a, b) { r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { r.fn[d] = function (e, f) { var g = arguments.length && (c || "boolean" != typeof e), h = c || (e === !0 || f === !0 ? "margin" : "border"); return S(this, function (b, c, e) { var f; return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h) }, b, g ? e : void 0, g) } }) }), r.fn.extend({ bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () { return r }); var Tb = a.jQuery, Ub = a.$; return r.noConflict = function (b) { return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r }, b || (a.jQuery = a.$ = r), r
});

(function (b) { function c(f) { f = f || {}; this.settings = f; if (f.statusInterval == null) { f.statusInterval = 5000 } if (f.loggingDelay == null) { f.loggingDelay = 20 * 1000 } if (f.noProgressTimeout == null) { f.noProgressTimeout = Infinity } var i = [], d = [], o, e = Date.now(); var l = { QUEUED: 0, WAITING: 1, LOADED: 2, ERROR: 3, TIMEOUT: 4 }; var m = function (p) { if (p == null) { return [] } if (Array.isArray(p)) { return p } return [p] }; this.add = function (p) { p.tags = new a(p.tags); if (p.priority == null) { p.priority = Infinity } i.push({ resource: p, status: l.QUEUED }) }; this.addProgressListener = function (q, p) { d.push({ callback: q, tags: new a(p) }) }; this.addCompletionListener = function (q, p) { d.push({ tags: new a(p), callback: function (r) { if (r.completedCount === r.totalCount) { q(r) } } }) }; var k = function (p) { p = m(p); var q = function (u) { var v = u.resource, t = Infinity; for (var s = 0; s < v.tags.length; s++) { for (var r = 0; r < Math.min(p.length, t) ; r++) { if (v.tags.all[s] === p[r] && r < t) { t = r; if (t === 0) { break } } if (t === 0) { break } } } return t }; return function (s, r) { var u = q(s), t = q(r); if (u < t) { return -1 } if (u > t) { return 1 } if (s.priority < r.priority) { return -1 } if (s.priority > r.priority) { return 1 } return 0 } }; this.start = function (q) { o = Date.now(); var r = k(q); i.sort(r); for (var s = 0, p = i.length; s < p; s++) { var t = i[s]; t.status = l.WAITING; t.resource.start(this) } setTimeout(g, 100) }; var g = function () { var t = false, u = Date.now() - e, q = (u >= f.noProgressTimeout), r = (u >= f.loggingDelay); for (var s = 0, p = i.length; s < p; s++) { var v = i[s]; if (v.status !== l.WAITING) { continue } if (v.resource.checkStatus) { v.resource.checkStatus() } if (v.status === l.WAITING) { if (q) { v.resource.onTimeout() } else { t = true } } } if (r && t) { h() } if (t) { setTimeout(g, f.statusInterval) } }; this.isBusy = function () { for (var q = 0, p = i.length; q < p; q++) { if (i[q].status === l.QUEUED || i[q].status === l.WAITING) { return true } } return false }; var n = function (w, t) { var u = null, s, p, q, v, r; for (s = 0, p = i.length; s < p; s++) { if (i[s].resource === w) { u = i[s]; break } } if (u == null || u.status !== l.WAITING) { return } u.status = t; e = Date.now(); q = w.tags.length; for (s = 0, p = d.length; s < p; s++) { v = d[s]; if (v.tags.length === 0) { r = true } else { r = w.tags.intersects(v.tags) } if (r) { j(u, v) } } }; this.onLoad = function (p) { n(p, l.LOADED) }; this.onError = function (p) { n(p, l.ERROR) }; this.onTimeout = function (p) { n(p, l.TIMEOUT) }; var j = function (q, w) { var t = 0, v = 0, s, p, u, r; for (s = 0, p = i.length; s < p; s++) { u = i[s]; r = false; if (w.tags.length === 0) { r = true } else { r = u.resource.tags.intersects(w.tags) } if (r) { v++; if (u.status === l.LOADED || u.status === l.ERROR || u.status === l.TIMEOUT) { t++ } } } w.callback({ resource: q.resource, loaded: (q.status === l.LOADED), error: (q.status === l.ERROR), timeout: (q.status === l.TIMEOUT), completedCount: t, totalCount: v }) }; var h = this.log = function (s) { if (!window.console) { return } var r = Math.round((Date.now() - o) / 1000); window.console.log("PxLoader elapsed: " + r + " sec"); for (var q = 0, p = i.length; q < p; q++) { var u = i[q]; if (!s && u.status !== l.WAITING) { continue } var t = "PxLoader: #" + q + " " + u.resource.getName(); switch (u.status) { case l.QUEUED: t += " (Not Started)"; break; case l.WAITING: t += " (Waiting)"; break; case l.LOADED: t += " (Loaded)"; break; case l.ERROR: t += " (Error)"; break; case l.TIMEOUT: t += " (Timeout)"; break } if (u.resource.tags.length > 0) { t += " Tags: [" + u.resource.tags.all.join(",") + "]" } window.console.log(t) } } } function a(d) { this.all = []; this.first = null; this.length = 0; this.lookup = {}; if (d) { if (Array.isArray(d)) { this.all = d.slice(0) } else { if (typeof d === "object") { for (var f in d) { if (d.hasOwnProperty(f)) { this.all.push(f) } } } else { this.all.push(d) } } this.length = this.all.length; if (this.length > 0) { this.first = this.all[0] } for (var e = 0; e < this.length; e++) { this.lookup[this.all[e]] = true } } } a.prototype.intersects = function (d) { if (this.length === 0 || d.length === 0) { return false } if (this.length === 1 && d.length === 1) { return this.first === d.first } if (d.length < this.length) { return d.intersects(this) } for (var e in this.lookup) { if (d.lookup[e]) { return true } } return false }; if (typeof define === "function" && define.amd) { define("PxLoader", [], function () { return c }) } b.PxLoader = c }(this)); if (!Date.now) { Date.now = function now() { return new Date().getTime() } } if (!Array.isArray) { Array.isArray = function (a) { return Object.prototype.toString.call(a) === "[object Array]" } };
function PxLoaderImage(a, i, f) { var h = this, g = null; this.img = new Image(); this.tags = i; this.priority = f; var b = function () { if (h.img.readyState === "complete") { c(); g.onLoad(h) } }; var e = function () { c(); g.onLoad(h) }; var d = function () { c(); g.onError(h) }; var c = function () { h.unbind("load", e); h.unbind("readystatechange", b); h.unbind("error", d) }; this.start = function (j) { g = j; h.bind("load", e); h.bind("readystatechange", b); h.bind("error", d); h.img.src = a }; this.checkStatus = function () { if (h.img.complete) { c(); g.onLoad(h) } }; this.onTimeout = function () { c(); if (h.img.complete) { g.onLoad(h) } else { g.onTimeout(h) } }; this.getName = function () { return a }; this.bind = function (j, k) { if (h.img.addEventListener) { h.img.addEventListener(j, k, false) } else { if (h.img.attachEvent) { h.img.attachEvent("on" + j, k) } } }; this.unbind = function (j, k) { if (h.img.removeEventListener) { h.img.removeEventListener(j, k, false) } else { if (h.img.detachEvent) { h.img.detachEvent("on" + j, k) } } } } PxLoader.prototype.addImage = function (c, b, d) { var a = new PxLoaderImage(c, b, d); this.add(a); return a.img }; if (typeof define === "function" && define.amd) { define("PxLoaderImage", [], function () { return PxLoaderImage }) };
//TweenMax.min.js
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (t, e, i) {
        var s = function (t) {
            var e, i = [],
            s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        },
        r = function (t, e, s) {
            i.call(this, t, e, s),
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = r.prototype.render
        },
        n = 1e-10,
        a = i._internals,
        o = a.isSelector,
        h = a.isArray,
        l = r.prototype = i.to({},
        .1, {}),
        _ = [];
        r.version = "1.13.2",
        l.constructor = r,
        l.kill()._gc = !1,
        r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf,
        r.getTweensOf = i.getTweensOf,
        r.lagSmoothing = i.lagSmoothing,
        r.ticker = i.ticker,
        r.render = i.render,
        l.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        },
        l.updateTo = function (t, e) {
            var s, r = this.ratio;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (s in t) this.vars[s] = t[s];
            if (this._initted) if (e) this._initted = !1;
            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var n = this._time;
                this.render(0, !0, !1),
                this._initted = !1,
                this.render(n, !0, !1)
            } else if (this._time > 0) {
                this._initted = !1,
                this._init();
                for (var a, o = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c,
                h.c *= o,
                h.s = a - h.c,
                h = h._next
            }
            return this
        },
        l.render = function (t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var s, r, o, h, l, u, p, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
            m = this._time,
            d = this._totalTime,
            g = this._cycle,
            v = this._duration,
            y = this._rawPrevTime;
            if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === n) && y !== t && (i = !0, y > n && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || y === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === v && y > 0 && y !== n) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = c = !e || t || y === t ? t : n)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / v, u = this._easeType, p = this._easePower, (1 === u || 3 === u && l >= .5) && (l = 1 - l), 3 === u && (l *= 2), 1 === p ? l *= l : 2 === p ? l *= l * l : 3 === p ? l *= l * l * l : 4 === p && (l *= l * l * l * l), this.ratio = 1 === u ? 1 - l : 2 === u ? l : .5 > this._time / v ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), m === this._time && !i && g === this._cycle) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)),
            void 0;
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m,
                this._totalTime = d,
                this._rawPrevTime = y,
                this._cycle = g,
                a.lazyTweens.push(this),
                this._lazy = [t, e],
                void 0;
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / v) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
            o = o._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)),
            this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _)),
            r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === v && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0))
        },
        r.to = function (t, e, i) {
            return new r(t, e, i)
        },
        r.from = function (t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new r(t, e, i)
        },
        r.fromTo = function (t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new r(t, e, s)
        },
        r.staggerTo = r.allTo = function (t, e, n, a, l, u, p) {
            a = a || 0;
            var c, f, m, d, g = n.delay || 0,
            v = [],
            y = function () {
                n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments),
                l.apply(p || this, u || _)
            };
            for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), c = t.length, m = 0; c > m; m++) {
                f = {};
                for (d in n) f[d] = n[d];
                f.delay = g,
                m === c - 1 && l && (f.onComplete = y),
                v[m] = new r(t[m], e, f),
                g += a
            }
            return v
        },
        r.staggerFrom = r.allFrom = function (t, e, i, s, n, a, o) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            r.staggerTo(t, e, i, s, n, a, o)
        },
        r.staggerFromTo = r.allFromTo = function (t, e, i, s, n, a, o, h) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            r.staggerTo(t, e, s, n, a, o, h)
        },
        r.delayedCall = function (t, e, i, s, n) {
            return new r(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        },
        r.set = function (t, e) {
            return new r(t, 0, e)
        },
        r.isTweening = function (t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var u = function (t, e) {
            for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(u(n, e)), r = s.length),
            n = n._next;
            return s
        },
        p = r.getAllTweens = function (e) {
            return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
        };
        r.killAll = function (t, i, s, r) {
            null == i && (i = !0),
            null == s && (s = !0);
            var n, a, o, h = p(0 != r),
            l = h.length,
            _ = i && s && r;
            for (o = 0; l > o; o++) a = h[o],
            (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        },
        r.killChildTweensOf = function (t, e) {
            if (null != t) {
                var n, l, _, u, p, c = a.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), h(t)) for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                else {
                    n = [];
                    for (_ in c) for (l = c[_].target.parentNode; l;) l === t && (n = n.concat(c[_].tweens)),
                    l = l.parentNode;
                    for (p = n.length, u = 0; p > u; u++) e && n[u].totalTime(n[u].totalDuration()),
                    n[u]._enabled(!1, !1)
                }
            }
        };
        var c = function (t, i, s, r) {
            i = i !== !1,
            s = s !== !1,
            r = r !== !1;
            for (var n, a, o = p(r), h = i && s && r, l = o.length; --l > -1;) a = o[l],
            (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
        };
        return r.pauseAll = function (t, e, i) {
            c(!0, t, e, i)
        },
        r.resumeAll = function (t, e, i) {
            c(!1, t, e, i)
        },
        r.globalTimeScale = function (e) {
            var s = t._rootTimeline,
            r = i.ticker.time;
            return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
        },
        l.progress = function (t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        },
        l.totalProgress = function (t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        },
        l.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        },
        l.duration = function (e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        },
        l.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        },
        l.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        },
        l.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        },
        l.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        },
        r
    },
    !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (t, e, i) {
        var s = function (t) {
            e.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
            this.smoothChildTiming = this.vars.smoothChildTiming === !0,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var i, s, r = this.vars;
            for (s in r) i = r[s],
            o(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
            o(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        },
        r = 1e-10,
        n = i._internals,
        a = n.isSelector,
        o = n.isArray,
        h = n.lazyTweens,
        l = n.lazyRender,
        _ = [],
        u = _gsScope._gsDefine.globals,
        p = function (t) {
            var e, i = {};
            for (e in t) i[e] = t[e];
            return i
        },
        c = function (t, e, i, s) {
            var r = t._timeline._totalTime; (e || !this._forcingPlayhead) && (t._timeline.pause(t._startTime), e && e.apply(s || t._timeline, i || _), this._forcingPlayhead && t._timeline.seek(r))
        },
        f = function (t) {
            var e, i = [],
            s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        },
        m = s.prototype = new e;
        return s.version = "1.13.2",
        m.constructor = s,
        m.kill()._gc = m._forcingPlayhead = !1,
        m.to = function (t, e, s, r) {
            var n = s.repeat && u.TweenMax || i;
            return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
        },
        m.from = function (t, e, s, r) {
            return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r)
        },
        m.fromTo = function (t, e, s, r, n) {
            var a = r.repeat && u.TweenMax || i;
            return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
        },
        m.staggerTo = function (t, e, r, n, o, h, l, _) {
            var u, c = new s({
                onComplete: h,
                onCompleteParams: l,
                onCompleteScope: _,
                smoothChildTiming: this.smoothChildTiming
            });
            for ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = f(t)), n = n || 0, u = 0; t.length > u; u++) r.startAt && (r.startAt = p(r.startAt)),
            c.to(t[u], e, p(r), u * n);
            return this.add(c, o)
        },
        m.staggerFrom = function (t, e, i, s, r, n, a, o) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, s, r, n, a, o)
        },
        m.staggerFromTo = function (t, e, i, s, r, n, a, o, h) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, s, r, n, a, o, h)
        },
        m.call = function (t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r)
        },
        m.set = function (t, e, s) {
            return s = this._parseTimeOrLabel(s, 0, !0),
            null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused),
            this.add(new i(t, 0, e), s)
        },
        s.exportRoot = function (t, e) {
            t = t || {},
            null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, n, a = new s(t),
            o = a._timeline;
            for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next,
            e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay),
            r = n;
            return o.add(a, 0),
            a
        },
        m.add = function (r, n, a, h) {
            var l, _, u, p, c, f;
            if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array || r && r.push && o(r)) {
                    for (a = a || "normal", h = h || 0, l = n, _ = r.length, u = 0; _ > u; u++) o(p = r[u]) && (p = new s({
                        tweens: p
                    })),
                    this.add(p, l),
                    "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())),
                    l += h;
                    return this._uncache(!0)
                }
                if ("string" == typeof r) return this.addLabel(r, n);
                if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (c = this, f = c.rawTime() > r._startTime; c._timeline;) f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1),
            c = c._timeline;
            return this
        },
        m.remove = function (e) {
            if (e instanceof t) return this._remove(e, !1);
            if (e instanceof Array || e && e.push && o(e)) {
                for (var i = e.length; --i > -1;) this.remove(e[i]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        },
        m._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var s = this._last;
            return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        },
        m.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        },
        m.insert = m.insertMultiple = function (t, e, i, s) {
            return this.add(t, e || 0, i, s)
        },
        m.appendMultiple = function (t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
        },
        m.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        },
        m.addPause = function (t, e, i, s) {
            return this.call(c, ["{self}", e, i, s], this, t)
        },
        m.removeLabel = function (t) {
            return delete this._labels[t],
            this
        },
        m.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
        },
        m._parseTimeOrLabel = function (e, i, s, r) {
            var n;
            if (r instanceof t && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || r.push && o(r))) for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
            if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
            else {
                if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)),
                e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
            }
            return Number(e) + i
        },
        m.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        },
        m.stop = function () {
            return this.paused(!0)
        },
        m.gotoAndPlay = function (t, e) {
            return this.play(t, e)
        },
        m.gotoAndStop = function (t, e) {
            return this.pause(t, e)
        },
        m.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, a, o, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
            c = this._time,
            f = this._startTime,
            m = this._timeScale,
            d = this._paused;
            if (t >= p ? (this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (u = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== c && this._first || i || u) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _)), this._time >= c) for (s = this._first; s && (a = s._next, !this._paused || d) ;) (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                s = a;
                else for (s = this._last; s && (a = s._prev, !this._paused || d) ;) (s._active || c >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                s = a;
                this._onUpdate && (e || (h.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _))),
                o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (h.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || _)))
            }
        },
        m._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                t = t._next
            }
            return !1
        },
        m.getChildren = function (t, e, s, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))),
            a = a._next;
            return n
        },
        m.getTweensOf = function (t, e) {
            var s, r, n = this._gc,
            a = [],
            o = 0;
            for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;) (s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
            return n && this._enabled(!1, !0),
            a
        },
        m._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        },
        m.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var s, r = this._first,
            n = this._labels; r;) r._startTime >= i && (r._startTime += t),
            r = r._next;
            if (e) for (s in n) n[s] >= i && (n[s] += t);
            return this._uncache(!0)
        },
        m._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
            return r
        },
        m.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
            i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}),
            this._uncache(!0)
        },
        m.invalidate = function () {
            for (var e = this._first; e;) e.invalidate(),
            e = e._next;
            return t.prototype.invalidate.call(this)
        },
        m._enabled = function (t, i) {
            if (t === this._gc) for (var s = this._first; s;) s._enabled(t, !0),
            s = s._next;
            return e.prototype._enabled.call(this, t, i)
        },
        m.totalTime = function () {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            e
        },
        m.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        },
        m.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, s = 0,
                    r = this._last,
                    n = 999999999999; r;) e = r._prev,
                    r._dirty && r.totalDuration(),
                    r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime,
                    0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0),
                    i = r._startTime + r._totalDuration / r._timeScale,
                    i > s && (s = i),
                    r = e;
                    this._duration = this._totalDuration = s,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t),
            this
        },
        m.usesFrames = function () {
            for (var e = this._timeline; e._timeline;) e = e._timeline;
            return e === t._rootFramesTimeline
        },
        m.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        },
        s
    },
    !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"],
    function (t, e, i) {
        var s = function (e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._dirty = !0
        },
        r = 1e-10,
        n = [],
        a = e._internals,
        o = a.lazyTweens,
        h = a.lazyRender,
        l = new i(null, null, 1, 0),
        _ = s.prototype = new t;
        return _.constructor = s,
        _.kill()._gc = !1,
        s.version = "1.13.2",
        _.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        },
        _.addCallback = function (t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i)
        },
        _.removeCallback = function (t, e) {
            if (t) if (null == e) this._kill(null, t);
            else for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e) ; --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this
        },
        _.tweenTo = function (t, i) {
            i = i || {};
            var s, r, a, o = {
                ease: l,
                overwrite: i.delay ? 2 : 1,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (r in i) o[r] = i[r];
            return o.time = this._parseTimeOrLabel(t),
            s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001,
            a = new e(this, s, o),
            o.onStart = function () {
                a.target.paused(!0),
                a.vars.time !== a.target.time() && s === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale),
                i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || n)
            },
            a
        },
        _.tweenFromTo = function (t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                onCompleteScope: this
            },
            i.immediateRender = i.immediateRender !== !1;
            var s = this.tweenTo(e, i);
            return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
        },
        _.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, a, l, _, u, p, c = this._dirty ? this.totalDuration() : this._totalDuration,
            f = this._duration,
            m = this._time,
            d = this._totalTime,
            g = this._startTime,
            v = this._timeScale,
            y = this._rawPrevTime,
            T = this._paused,
            w = this._cycle;
            if (t >= c ? (this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, _ = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (u = !0, y > r && (_ = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (_ = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : (0 === f && 0 > y && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = f + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) {
                var x = this._yoyo && 0 !== (1 & w),
                b = x === (this._yoyo && 0 !== (1 & this._cycle)),
                P = this._totalTime,
                S = this._cycle,
                k = this._rawPrevTime,
                R = this._time;
                if (this._totalTime = w * f, w > this._cycle ? x = !x : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = x ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), b && (m = x ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
                this._time = R,
                this._totalTime = P,
                this._cycle = S,
                this._rawPrevTime = k
            }
            if (!(this._time !== m && this._first || i || u)) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)),
            void 0;
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= m) for (s = this._first; s && (l = s._next, !this._paused || T) ;) (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
            s = l;
            else for (s = this._last; s && (l = s._prev, !this._paused || T) ;) (s._active || m >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
            s = l;
            this._onUpdate && (e || (o.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n))),
            _ && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (a && (o.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[_] && this.vars[_].apply(this.vars[_ + "Scope"] || this, this.vars[_ + "Params"] || n)))
        },
        _.getActive = function (t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            var s, r, n = [],
            a = this.getChildren(t, e, i),
            o = 0,
            h = a.length;
            for (s = 0; h > s; s++) r = a[s],
            r.isActive() && (n[o++] = r);
            return n
        },
        _.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(),
            s = i.length;
            for (e = 0; s > e; e++) if (i[e].time > t) return i[e].name;
            return null
        },
        _.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (t > e[i].time) return e[i].name;
            return null
        },
        _.getLabelsArray = function () {
            var t, e = [],
            i = 0;
            for (t in this._labels) e[i++] = {
                time: this._labels[t],
                name: t
            };
            return e.sort(function (t, e) {
                return t.time - e.time
            }),
            e
        },
        _.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        },
        _.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        },
        _.totalDuration = function (e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        },
        _.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        },
        _.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        },
        _.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        },
        _.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        },
        _.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        },
        s
    },
    !0),
    function () {
        var t = 180 / Math.PI,
        e = [],
        i = [],
        s = [],
        r = {},
        n = function (t, e, i, s) {
            this.a = t,
            this.b = e,
            this.c = i,
            this.d = s,
            this.da = s - t,
            this.ca = i - t,
            this.ba = e - t
        },
        a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        o = function (t, e, i, s) {
            var r = {
                a: t
            },
            n = {},
            a = {},
            o = {
                c: s
            },
            h = (t + e) / 2,
            l = (e + i) / 2,
            _ = (i + s) / 2,
            u = (h + l) / 2,
            p = (l + _) / 2,
            c = (p - u) / 8;
            return r.b = h + (t - h) / 4,
            n.b = u + c,
            r.c = n.a = (r.b + n.b) / 2,
            n.c = a.a = (u + p) / 2,
            a.b = p - c,
            o.b = _ + (s - _) / 4,
            a.c = o.a = (a.b + o.b) / 2,
            [r, n, a, o]
        },
        h = function (t, r, n, a, h) {
            var l, _, u, p, c, f, m, d, g, v, y, T, w, x = t.length - 1,
            b = 0,
            P = t[0].a;
            for (l = 0; x > l; l++) c = t[b],
            _ = c.a,
            u = c.d,
            p = t[b + 1].d,
            h ? (y = e[l], T = i[l], w = .25 * (T + y) * r / (a ? .5 : s[l] || .5), f = u - (u - _) * (a ? .5 * r : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * r : 0 !== T ? w / T : 0), d = u - (f + ((m - f) * (3 * y / (y + T) + .5) / 4 || 0))) : (f = u - .5 * (u - _) * r, m = u + .5 * (p - u) * r, d = u - (f + m) / 2),
            f += d,
            m += d,
            c.c = g = f,
            c.b = 0 !== l ? P : P = c.a + .6 * (c.c - c.a),
            c.da = u - _,
            c.ca = g - _,
            c.ba = P - _,
            n ? (v = o(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++,
            P = m;
            c = t[b],
            c.b = P,
            c.c = P + .4 * (c.d - P),
            c.da = c.d - c.a,
            c.ca = c.c - c.a,
            c.ba = P - c.a,
            n && (v = o(c.a, P, c.c, c.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
        },
        l = function (t, s, r, a) {
            var o, h, l, _, u, p, c = [];
            if (a) for (t = [a].concat(t), h = t.length; --h > -1;) "string" == typeof (p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = a[s] + Number(p.charAt(0) + p.substr(2)));
            if (o = t.length - 2, 0 > o) return c[0] = new n(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]),
            c;
            for (h = 0; o > h; h++) l = t[h][s],
            _ = t[h + 1][s],
            c[h] = new n(l, 0, 0, _),
            r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
            return c[h] = new n(t[h][s], 0, 0, t[h + 1][s]),
            c
        },
        _ = function (t, n, o, _, u, p) {
            var c, f, m, d, g, v, y, T, w = {},
            x = [],
            b = p || t[0];
            u = "string" == typeof u ? "," + u + "," : a,
            null == n && (n = 1);
            for (f in t[0]) x.push(f);
            if (t.length > 1) {
                for (T = t[t.length - 1], y = !0, c = x.length; --c > -1;) if (f = x[c], Math.abs(b[f] - T[f]) > .05) {
                    y = !1;
                    break
                }
                y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
            }
            for (e.length = i.length = s.length = 0, c = x.length; --c > -1;) f = x[c],
            r[f] = -1 !== u.indexOf("," + f + ","),
            w[f] = l(t, f, r[f], p);
            for (c = e.length; --c > -1;) e[c] = Math.sqrt(e[c]),
            i[c] = Math.sqrt(i[c]);
            if (!_) {
                for (c = x.length; --c > -1;) if (r[f]) for (m = w[x[c]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d],
                s[d] = (s[d] || 0) + g * g;
                for (c = s.length; --c > -1;) s[c] = Math.sqrt(s[c])
            }
            for (c = x.length, d = o ? 4 : 1; --c > -1;) f = x[c],
            m = w[f],
            h(m, n, o, _, r[f]),
            y && (m.splice(0, d), m.splice(m.length - d, d));
            return w
        },
        u = function (t, e, i) {
            e = e || "soft";
            var s, r, a, o, h, l, _, u, p, c, f, m = {},
            d = "cubic" === e ? 3 : 2,
            g = "soft" === e,
            v = [];
            if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
            for (p in t[0]) v.push(p);
            for (l = v.length; --l > -1;) {
                for (p = v[l], m[p] = h = [], c = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof (f = t[_][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f),
                g && _ > 1 && u - 1 > _ && (h[c++] = (s + h[c - 2]) / 2),
                h[c++] = s;
                for (u = c - d + 1, c = 0, _ = 0; u > _; _ += d) s = h[_],
                r = h[_ + 1],
                a = h[_ + 2],
                o = 2 === d ? 0 : h[_ + 3],
                h[c++] = f = 3 === d ? new n(s, r, a, o) : new n(s, (2 * r + s) / 3, (2 * r + a) / 3, a);
                h.length = c
            }
            return m
        },
        p = function (t, e, i) {
            for (var s, r, n, a, o, h, l, _, u, p, c, f = 1 / i,
            m = t.length; --m > -1;) for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = f * _,
            u = 1 - l,
            s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l),
            c = m * i + _ - 1,
            e[c] = (e[c] || 0) + s * s
        },
        c = function (t, e) {
            e = e >> 0 || 6;
            var i, s, r, n, a = [],
            o = [],
            h = 0,
            l = 0,
            _ = e - 1,
            u = [],
            c = [];
            for (i in t) p(t[i], a, e);
            for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]),
            n = s % e,
            c[n] = h,
            n === _ && (l += h, n = s / e >> 0, u[n] = c, o[n] = l, h = 0, c = []);
            return {
                length: l,
                lengths: o,
                segments: u
            }
        },
        f = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.3",
            API: 2,
            global: !0,
            init: function (t, e, i) {
                this._target = t,
                e instanceof Array && (e = {
                    values: e
                }),
                this._func = {},
                this._round = {},
                this._props = [],
                this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, r, n, a, o, h = e.values || [],
                l = {},
                p = h[0],
                f = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = f ? f instanceof Array ? f : [["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]] : null;
                for (s in p) this._props.push(s);
                for (n = this._props.length; --n > -1;) s = this._props[n],
                this._overwriteProps.push(s),
                r = this._func[s] = "function" == typeof t[s],
                l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]),
                o || l[s] !== h[0][s] && (o = l);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? _(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : u(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                    var m = c(this._beziers, this._timeRes);
                    this._length = m.length,
                    this._lengths = m.lengths,
                    this._segments = m.segments,
                    this._l1 = this._li = this._s1 = this._si = 0,
                    this._l2 = this._lengths[0],
                    this._curSeg = this._segments[0],
                    this._s2 = this._curSeg[0],
                    this._prec = 1 / this._curSeg.length
                }
                if (f = this._autoRotate) for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                    for (a = 0; 3 > a; a++) s = f[n][a],
                    this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                    s = f[n][2],
                    this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                }
                return this._startRatio = i.vars.runBackwards ? 1 : 0,
                !0
            },
            set: function (e) {
                var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                c = this._func,
                f = this._target,
                m = e !== this._startRatio;
                if (this._timeRes) {
                    if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                        for (l = p - 1; l > r && e >= (this._l2 = _[++r]) ;);
                        this._l1 = _[r - 1],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s2 = u[this._s1 = this._si = 0]
                    } else if (this._l1 > e && r > 0) {
                        for (; r > 0 && (this._l1 = _[--r]) >= e;);
                        0 === r && this._l1 > e ? this._l1 = 0 : r++,
                        this._l2 = _[r],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                        this._s2 = u[this._si]
                    }
                    if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                        for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]) ;);
                        this._s1 = u[r - 1],
                        this._si = r
                    } else if (this._s1 > e && r > 0) {
                        for (; r > 0 && (this._s1 = u[--r]) >= e;);
                        0 === r && this._s1 > e ? this._s1 = 0 : r++,
                        this._s2 = u[r],
                        this._si = r
                    }
                    o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0,
                o = (e - i * (1 / p)) * p;
                for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r],
                a = this._beziers[n][i],
                h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a,
                this._round[n] && (h = Math.round(h)),
                c[n] ? f[n](h) : f[n] = h;
                if (this._autoRotate) {
                    var d, g, v, y, T, w, x, b = this._autoRotate;
                    for (r = b.length; --r > -1;) n = b[r][2],
                    w = b[r][3] || 0,
                    x = b[r][4] === !0 ? 1 : t,
                    a = this._beziers[b[r][0]],
                    d = this._beziers[b[r][1]],
                    a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * x + w : this._initialRotations[r], c[n] ? f[n](h) : f[n] = h)
                }
            }
        }),
        m = f.prototype;
        f.bezierThrough = _,
        f.cubicToQuadratic = o,
        f._autoCSS = !0,
        f.quadraticToCubic = function (t, e, i) {
            return new n(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        },
        f._cssRegister = function () {
            var t = _gsScope._gsDefine.globals.CSSPlugin;
            if (t) {
                var e = t._internals,
                i = e._parseToProxy,
                s = e._setPluginRatio,
                r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function (t, e, n, a, o, h) {
                        e instanceof Array && (e = {
                            values: e
                        }),
                        h = new f;
                        var l, _, u, p = e.values,
                        c = p.length - 1,
                        m = [],
                        d = {};
                        if (0 > c) return o;
                        for (l = 0; c >= l; l++) u = i(t, p[l], a, o, h, c !== l),
                        m[l] = u.end;
                        for (_ in e) d[_] = e[_];
                        return d.values = m,
                        o = new r(t, "bezier", 0, 0, u.pt, 2),
                        o.data = u,
                        o.plugin = h,
                        o.setRatio = s,
                        0 === d.autoRotate && (d.autoRotate = !0),
                        !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [["left", "top", "rotation", l, !1]] : null != u.end.x ? [["x", "y", "rotation", l, !1]] : !1),
                        d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform),
                        h._onInitTween(u.proxy, d, a._tween),
                        o
                    }
                })
            }
        },
        m._roundProps = function (t, e) {
            for (var i = this._overwriteProps,
            s = i.length; --s > -1;) (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
        },
        m._kill = function (t) {
            var e, i, s = this._props;
            for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(),
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"],
    function (t, e) {
        var i, s, r, n, a = function () {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = a.prototype.setRatio
        },
        o = {},
        h = a.prototype = new t("css");
        h.constructor = a,
        a.version = "1.13.2",
        a.API = 2,
        a.defaultTransformPerspective = 0,
        a.defaultSkewType = "compensated",
        h = "px",
        a.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h,
            lineHeight: ""
        };
        var l, _, u, p, c, f, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
        d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        v = /[^\d\-\.]/g,
        y = /(?:\d|\-|\+|=|#|\.)*/g,
        T = /opacity *= *([^)]*)/i,
        w = /opacity:([^;]*)/i,
        x = /alpha\(opacity *=.+?\)/i,
        b = /^(rgb|hsl)/,
        P = /([A-Z])/g,
        S = /-([a-z])/gi,
        k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        R = function (t, e) {
            return e.toUpperCase()
        },
        A = /(?:Left|Right|Width)/i,
        C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        D = /,(?=[^\)]*(?:\(|$))/gi,
        M = Math.PI / 180,
        z = 180 / Math.PI,
        I = {},
        E = document,
        L = E.createElement("div"),
        F = E.createElement("img"),
        N = a._internals = {
            _specialProps: o
        },
        X = navigator.userAgent,
        U = function () {
            var t, e = X.indexOf("Android"),
            i = E.createElement("div");
            return u = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === e || Number(X.substr(e + 8, 1)) > 3),
            c = u && 6 > Number(X.substr(X.indexOf("Version/") + 8, 1)),
            p = -1 !== X.indexOf("Firefox"),
            /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) && (f = parseFloat(RegExp.$1)),
            i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>",
            t = i.getElementsByTagName("a")[0],
            t ? /^0.55/.test(t.style.opacity) : !1
        }(),
        Y = function (t) {
            return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        },
        j = function (t) {
            window.console && console.log(t)
        },
        B = "",
        q = "",
        V = function (t, e) {
            e = e || L;
            var i, s, r = e.style;
            if (void 0 !== r[t]) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
            return s >= 0 ? (q = 3 === s ? "ms" : i[s], B = "-" + q.toLowerCase() + "-", q + t) : null
        },
        G = E.defaultView ? E.defaultView.getComputedStyle : function () { },
        W = a.getStyle = function (t, e, i, s, r) {
            var n;
            return U || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || G(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : Y(t)
        },
        Q = N.convertToPixels = function (t, i, s, r, n) {
            if ("px" === r || !r) return s;
            if ("auto" === r || !s) return 0;
            var o, h, l, _ = A.test(i),
            u = t,
            p = L.style,
            c = 0 > s;
            if (c && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
            else {
                if (p.cssText = "border:0 solid red;position:" + W(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) p[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                else {
                    if (u = t.parentNode || E.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;
                    p[_ ? "width" : "height"] = s + r
                }
                u.appendChild(L),
                o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]),
                u.removeChild(L),
                _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {},
                h.time = l, h.width = 100 * (o / s)),
                0 !== o || n || (o = Q(t, i, s, r, !0))
            }
            return c ? -o : o
        },
        Z = N.calculateOffset = function (t, e, i) {
            if ("absolute" !== W(t, "position", i)) return 0;
            var s = "left" === e ? "Left" : "Top",
            r = W(t, "margin" + s, i);
            return t["offset" + s] - (Q(t, e, parseFloat(r), r.replace(y, "")) || 0)
        },
        $ = function (t, e) {
            var i, s, r = {};
            if (e = e || G(t, null)) if (i = e.length) for (; --i > -1;) r[e[i].replace(S, R)] = e.getPropertyValue(e[i]);
            else for (i in e) r[i] = e[i];
            else if (e = t.currentStyle || t.style) for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(S, R)] = e[i]);
            return U || (r.opacity = Y(t)),
            s = Pe(t, e, !1),
            r.rotation = s.rotation,
            r.skewX = s.skewX,
            r.scaleX = s.scaleX,
            r.scaleY = s.scaleY,
            r.x = s.x,
            r.y = s.y,
            xe && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ),
            r.filters && delete r.filters,
            r
        },
        H = function (t, e, i, s, r) {
            var n, a, o, h = {},
            l = t.style;
            for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : Z(t, a), void 0 !== l[a] && (o = new ue(l, a, l[a], o)));
            if (s) for (a in s) "className" !== a && (h[a] = s[a]);
            return {
                difs: h,
                firstMPT: o
            }
        },
        K = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        },
        J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        te = function (t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
            r = K[e],
            n = r.length;
            for (i = i || G(t, null) ; --n > -1;) s -= parseFloat(W(t, "padding" + r[n], i, !0)) || 0,
            s -= parseFloat(W(t, "border" + r[n] + "Width", i, !0)) || 0;
            return s
        },
        ee = function (t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var i = t.split(" "),
            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == r ? r = "0" : "center" === r && (r = "50%"),
            ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"),
            e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))),
            s + " " + r + (i.length > 2 ? " " + i[2] : "")
        },
        ie = function (t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        },
        se = function (t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
        },
        re = function (t, e, i, s) {
            var r, n, a, o, h = 1e-6;
            return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? 1 : z) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a),
            h > o && o > -h && (o = 0),
            o
        },
        ne = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        ae = function (t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
            0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        },
        oe = function (t) {
            var e, i, s, r, n, a;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(r + 1 / 3, e, i), t[1] = ae(r, e, i), t[2] = ae(r - 1 / 3, e, i), t) : (t = t.match(m) || ne.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ne.black
        },
        he = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (h in ne) he += "|" + h + "\\b";
        he = RegExp(he + ")", "gi");
        var le = function (t, e, i, s) {
            if (null == t) return function (t) {
                return t
            };
            var r, n = e ? (t.match(he) || [""])[0] : "",
            a = t.split(n).join("").match(g) || [],
            o = t.substr(0, t.indexOf(a[0])),
            h = ")" === t.charAt(t.length - 1) ? ")" : "",
            l = -1 !== t.indexOf(" ") ? " " : ",",
            _ = a.length,
            u = _ > 0 ? a[0].replace(m, "") : "";
            return _ ? r = e ?
            function (t) {
                var e, p, c, f;
                if ("number" == typeof t) t += u;
                else if (s && D.test(t)) {
                    for (f = t.replace(D, "|").split("|"), c = 0; f.length > c; c++) f[c] = r(f[c]);
                    return f.join(",")
                }
                if (e = (t.match(he) || [n])[0], p = t.split(e).join("").match(g) || [], c = p.length, _ > c--) for (; _ > ++c;) p[c] = i ? p[0 | (c - 1) / 2] : a[c];
                return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function (t) {
                var e, n, p;
                if ("number" == typeof t) t += u;
                else if (s && D.test(t)) {
                    for (n = t.replace(D, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]);
                    return n.join(",")
                }
                if (e = t.match(g) || [], p = e.length, _ > p--) for (; _ > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                return o + e.join(l) + h
            } : function (t) {
                return t
            }
        },
        _e = function (t) {
            return t = t.split(","),
            function (e, i, s, r, n, a, o) {
                var h, l = (i + "").split(" ");
                for (o = {},
                h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                return r.parse(e, o, n, a)
            }
        },
        ue = (N._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (var e, i, s, r, n = this.data,
            a = n.proxy,
            o = n.firstMPT,
            h = 1e-6; o;) e = a[o.v],
            o.r ? e = Math.round(e) : h > e && e > -h && (e = 0),
            o.t[o.p] = e,
            o = o._next;
            if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t) for (o = n.firstMPT; o;) {
                if (i = o.t, i.type) {
                    if (1 === i.type) {
                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                        i.e = r
                    }
                } else i.e = i.s + i.xs0;
                o = o._next
            }
        },
        function (t, e, i, s, r) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = r,
            s && (s._prev = this, this._next = s)
        }),
        pe = (N._parseToProxy = function (t, e, i, s, r, n) {
            var a, o, h, l, _, u = s,
            p = {},
            c = {},
            f = i._transform,
            m = I;
            for (i._transform = null, I = e, s = _ = i.parse(t, e, s, r), I = m, n && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))) ; s && s !== u;) {
                if (1 >= s.type && (o = s.p, c[o] = s.s + s.c, p[o] = s.s, n || (l = new ue(s, "s", o, l, s.r), s.c = 0), 1 === s.type)) for (a = s.l; --a > 0;) h = "xn" + a,
                o = s.p + "_" + h,
                c[o] = s.data[h],
                p[o] = s[h],
                n || (l = new ue(s, h, o, l, s.rxp[h]));
                s = s._next
            }
            return {
                proxy: p,
                end: c,
                firstMPT: l,
                pt: _
            }
        },
        N.CSSPropTween = function (t, e, s, r, a, o, h, l, _, u, p) {
            this.t = t,
            this.p = e,
            this.s = s,
            this.c = r,
            this.n = h || e,
            t instanceof pe || n.push(this.n),
            this.r = l,
            this.type = o || 0,
            _ && (this.pr = _, i = !0),
            this.b = void 0 === u ? s : u,
            this.e = void 0 === p ? s + r : p,
            a && (this._next = a, a._prev = this)
        }),
        ce = a.parseComplex = function (t, e, i, s, r, n, a, o, h, _) {
            i = i || n || "",
            a = new pe(t, e, 0, 0, a, _ ? 2 : 1, null, !1, o, i, s),
            s += "";
            var u, p, c, f, g, v, y, T, w, x, P, S, k = i.split(", ").join(",").split(" "),
            R = s.split(", ").join(",").split(" "),
            A = k.length,
            C = l !== !1;
            for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(D, ", ").split(" "), R = R.join(" ").replace(D, ", ").split(" "), A = k.length), A !== R.length && (k = (n || "").split(" "), A = k.length), a.plugin = h, a.setRatio = _, u = 0; A > u; u++) if (f = k[u], g = R[u], T = parseFloat(f), T || 0 === T) a.appendXtra("", T, ie(g, T), g.replace(d, ""), C && -1 !== g.indexOf("px"), !0);
            else if (r && ("#" === f.charAt(0) || ne[f] || b.test(f))) S = "," === g.charAt(g.length - 1) ? ")," : ")",
            f = oe(f),
            g = oe(g),
            w = f.length + g.length > 6,
            w && !U && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (U || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", f[0], g[0] - f[0], ",", !0, !0).appendXtra("", f[1], g[1] - f[1], ",", !0).appendXtra("", f[2], g[2] - f[2], w ? "," : S, !0), w && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > g.length ? 1 : g[3]) - f, S, !1)));
            else if (v = f.match(m)) {
                if (y = g.match(d), !y || y.length !== v.length) return a;
                for (c = 0, p = 0; v.length > p; p++) P = v[p],
                x = f.indexOf(P, c),
                a.appendXtra(f.substr(c, x - c), Number(P), ie(y[p], P), "", C && "px" === f.substr(x + P.length, 2), 0 === p),
                c = x + P.length;
                a["xs" + a.l] += f.substr(c)
            } else a["xs" + a.l] += a.l ? " " + f : f;
            if (-1 !== s.indexOf("=") && a.data) {
                for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
                a.e = S + a["xs" + u]
            }
            return a.l || (a.type = -1, a.xs0 = a.e),
            a.xfirst || a
        },
        fe = 9;
        for (h = pe.prototype, h.l = h.pr = 0; --fe > 0;) h["xn" + fe] = 0,
        h["xs" + fe] = "";
        h.xs0 = "",
        h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null,
        h.appendXtra = function (t, e, i, s, r, n) {
            var a = this,
            o = a.l;
            return a["xs" + o] += n && o ? " " + t : t || "",
            i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                s: e + i
            },
            a.rxp = {},
            a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
        };
        var me = function (t, e) {
            e = e || {},
            this.p = e.prefix ? V(t) || t : t,
            o[t] = o[this.p] = this,
            this.format = e.formatter || le(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        },
        de = N._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var s, r, n = t.split(","),
            a = e.defaultValue;
            for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix,
            e.defaultValue = i[s] || a,
            r = new me(n[s], e)
        },
        ge = function (t) {
            if (!o[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                de(t, {
                    parser: function (t, i, s, r, n, a, h) {
                        var l = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e];
                        return l ? (l._cssRegister(), o[s].parse(t, i, s, r, n, a, h)) : (j("Error: " + e + " js file not loaded."), n)
                    }
                })
            }
        };
        h = me.prototype,
        h.parseComplex = function (t, e, i, s, r, n) {
            var a, o, h, l, _, u, p = this.keyword;
            if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), h = i.replace(D, "|").split("|")) : p && (o = [e], h = [i])), h) {
                for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt,
                i = h[a] = h[a] || this.dflt,
                p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
                e = o.join(", "),
                i = h.join(", ")
            }
            return ce(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        },
        h.parse = function (t, e, i, s, n, a) {
            return this.parseComplex(t.style, this.format(W(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
        },
        a.registerSpecialProp = function (t, e, i) {
            de(t, {
                parser: function (t, s, r, n, a, o) {
                    var h = new pe(t, r, 0, 0, a, 2, r, !1, i);
                    return h.plugin = o,
                    h.setRatio = e(t, s, n._tween, r),
                    h
                },
                priority: i
            })
        };
        var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        ye = V("transform"),
        Te = B + "transform",
        we = V("transformOrigin"),
        xe = null !== V("perspective"),
        be = N.Transform = function () {
            this.skewY = 0
        },
        Pe = N.getTransform = function (t, e, i, s) {
            if (t._gsTransform && i && !s) return t._gsTransform;
            var r, n, o, h, l, _, u, p, c, f, m, d, g, v = i ? t._gsTransform || new be : new be,
            y = 0 > v.scaleX,
            T = 2e-5,
            w = 1e5,
            x = 179.99,
            b = x * M,
            P = xe ? parseFloat(W(t, we, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0,
            S = parseFloat(a.defaultTransformPerspective) || 0;
            if (ye ? r = W(t, Te, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(C), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), r && "none" !== r && "matrix(1, 0, 0, 1, 0, 0)" !== r) {
                for (n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length; --o > -1;) h = Number(n[o]),
                n[o] = (l = h - (h |= 0)) ? (0 | l * w + (0 > l ? -.5 : .5)) / w + h : h;
                if (16 === n.length) {
                    var k = n[8],
                    R = n[9],
                    A = n[10],
                    O = n[12],
                    D = n[13],
                    I = n[14];
                    if (v.zOrigin && (I = -v.zOrigin, O = k * I - n[12], D = R * I - n[13], I = A * I + v.zOrigin - n[14]), !i || s || null == v.rotationX) {
                        var E, L, F, N, X, U, Y, j = n[0],
                        B = n[1],
                        q = n[2],
                        V = n[3],
                        G = n[4],
                        Q = n[5],
                        Z = n[6],
                        $ = n[7],
                        H = n[11],
                        K = Math.atan2(Z, A),
                        J = -b > K || K > b;
                        v.rotationX = K * z,
                        K && (N = Math.cos(-K), X = Math.sin(-K), E = G * N + k * X, L = Q * N + R * X, F = Z * N + A * X, k = G * -X + k * N, R = Q * -X + R * N, A = Z * -X + A * N, H = $ * -X + H * N, G = E, Q = L, Z = F),
                        K = Math.atan2(k, j),
                        v.rotationY = K * z,
                        K && (U = -b > K || K > b, N = Math.cos(-K), X = Math.sin(-K), E = j * N - k * X, L = B * N - R * X, F = q * N - A * X, R = B * X + R * N, A = q * X + A * N, H = V * X + H * N, j = E, B = L, q = F),
                        K = Math.atan2(B, Q),
                        v.rotation = K * z,
                        K && (Y = -b > K || K > b, N = Math.cos(-K), X = Math.sin(-K), j = j * N + G * X, L = B * N + Q * X, Q = B * -X + Q * N, Z = q * -X + Z * N, B = L),
                        Y && J ? v.rotation = v.rotationX = 0 : Y && U ? v.rotation = v.rotationY = 0 : U && J && (v.rotationY = v.rotationX = 0),
                        v.scaleX = (0 | Math.sqrt(j * j + B * B) * w + .5) / w,
                        v.scaleY = (0 | Math.sqrt(Q * Q + R * R) * w + .5) / w,
                        v.scaleZ = (0 | Math.sqrt(Z * Z + A * A) * w + .5) / w,
                        v.skewX = 0,
                        v.perspective = H ? 1 / (0 > H ? -H : H) : 0,
                        v.x = O,
                        v.y = D,
                        v.z = I
                    }
                } else if (!(xe && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === W(t, "display", e))) {
                    var te = n.length >= 6,
                    ee = te ? n[0] : 1,
                    ie = n[1] || 0,
                    se = n[2] || 0,
                    re = te ? n[3] : 1;
                    v.x = n[4] || 0,
                    v.y = n[5] || 0,
                    _ = Math.sqrt(ee * ee + ie * ie),
                    u = Math.sqrt(re * re + se * se),
                    p = ee || ie ? Math.atan2(ie, ee) * z : v.rotation || 0,
                    c = se || re ? Math.atan2(se, re) * z + p : v.skewX || 0,
                    f = _ - Math.abs(v.scaleX || 0),
                    m = u - Math.abs(v.scaleY || 0),
                    Math.abs(c) > 90 && 270 > Math.abs(c) && (y ? (_ *= -1, c += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (u *= -1, c += 0 >= c ? 180 : -180)),
                    d = (p - v.rotation) % 180,
                    g = (c - v.skewX) % 180,
                    (void 0 === v.skewX || f > T || -T > f || m > T || -T > m || d > -x && x > d && false | d * w || g > -x && x > g && false | g * w) && (v.scaleX = _, v.scaleY = u, v.rotation = p, v.skewX = c),
                    xe && (v.rotationX = v.rotationY = v.z = 0, v.perspective = S, v.scaleZ = 1)
                }
                v.zOrigin = P;
                for (o in v) T > v[o] && v[o] > -T && (v[o] = 0)
            } else v = {
                x: 0,
                y: 0,
                z: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
                skewX: 0,
                perspective: S,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                zOrigin: 0
            };
            return i && (t._gsTransform = v),
            v.xPercent = v.yPercent = 0,
            v
        },
        Se = function (t) {
            var e, i, s = this.data,
            r = -s.rotation * M,
            n = r + s.skewX * M,
            a = 1e5,
            o = (0 | Math.cos(r) * s.scaleX * a) / a,
            h = (0 | Math.sin(r) * s.scaleX * a) / a,
            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
            u = this.t.style,
            p = this.t.currentStyle;
            if (p) {
                i = h,
                h = -l,
                l = -i,
                e = p.filter,
                u.filter = "";
                var c, m, d = this.t.offsetWidth,
                g = this.t.offsetHeight,
                v = "absolute" !== p.position,
                w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                x = s.x + d * s.xPercent / 100,
                b = s.y + g * s.yPercent / 100;
                if (null != s.ox && (c = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, m = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += c - (c * o + m * h), b += m - (c * l + m * _)), v ? (c = d / 2, m = g / 2, w += ", Dx=" + (c - (c * o + m * h) + x) + ", Dy=" + (m - (c * l + m * _) + b) + ")") : w += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, w) : w + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === w.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                    var P, S, k, R = 8 > f ? 1 : -1;
                    for (c = s.ieOffsetX || 0, m = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), fe = 0; 4 > fe; fe++) S = J[fe],
                    P = p[S],
                    i = -1 !== P.indexOf("px") ? parseFloat(P) : Q(this.t, S, parseFloat(P), P.replace(y, "")) || 0,
                    k = i !== s[S] ? 2 > fe ? -s.ieOffsetX : -s.ieOffsetY : 2 > fe ? c - s.ieOffsetX : m - s.ieOffsetY,
                    u[S] = (s[S] = Math.round(i - k * (0 === fe || 2 === fe ? 1 : R))) + "px"
                }
            }
        },
        ke = N.set3DTransformRatio = function (t) {
            var e, i, s, r, n, a, o, h, l, _, u, c, f, m, d, g, v, y, T, w, x, b, P, S = this.data,
            k = this.t.style,
            R = S.rotation * M,
            A = S.scaleX,
            C = S.scaleY,
            O = S.scaleZ,
            D = S.x,
            z = S.y,
            I = S.z,
            E = S.perspective;
            if (!(1 !== t && 0 !== t || "auto" !== S.force3D || S.rotationY || S.rotationX || 1 !== O || E || I)) return Re.call(this, t),
            void 0;
            if (p) {
                var L = 1e-4;
                L > A && A > -L && (A = O = 2e-5),
                L > C && C > -L && (C = O = 2e-5),
                !E || S.z || S.rotationX || S.rotationY || (E = 0)
            }
            if (R || S.skewX) y = Math.cos(R),
            T = Math.sin(R),
            e = y,
            n = T,
            S.skewX && (R -= S.skewX * M, y = Math.cos(R), T = Math.sin(R), "simple" === S.skewType && (w = Math.tan(S.skewX * M), w = Math.sqrt(1 + w * w), y *= w, T *= w)),
            i = -T,
            a = y;
            else {
                if (!(S.rotationY || S.rotationX || 1 !== O || E)) return k[ye] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + z + "px," + I + "px)" + (1 !== A || 1 !== C ? " scale(" + A + "," + C + ")" : ""),
                void 0;
                e = a = 1,
                i = n = 0
            }
            u = 1,
            s = r = o = h = l = _ = c = f = m = 0,
            d = E ? -1 / E : 0,
            g = S.zOrigin,
            v = 1e5,
            R = S.rotationY * M,
            R && (y = Math.cos(R), T = Math.sin(R), l = u * -T, f = d * -T, s = e * T, o = n * T, u *= y, d *= y, e *= y, n *= y),
            R = S.rotationX * M,
            R && (y = Math.cos(R), T = Math.sin(R), w = i * y + s * T, x = a * y + o * T, b = _ * y + u * T, P = m * y + d * T, s = i * -T + s * y, o = a * -T + o * y, u = _ * -T + u * y, d = m * -T + d * y, i = w, a = x, _ = b, m = P),
            1 !== O && (s *= O, o *= O, u *= O, d *= O),
            1 !== C && (i *= C, a *= C, _ *= C, m *= C),
            1 !== A && (e *= A, n *= A, l *= A, f *= A),
            g && (c -= g, r = s * c, h = o * c, c = u * c + g),
            r = (w = (r += D) - (r |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + r : r,
            h = (w = (h += z) - (h |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + h : h,
            c = (w = (c += I) - (c |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + c : c,
            k[ye] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * v) / v, (0 | n * v) / v, (0 | l * v) / v, (0 | f * v) / v, (0 | i * v) / v, (0 | a * v) / v, (0 | _ * v) / v, (0 | m * v) / v, (0 | s * v) / v, (0 | o * v) / v, (0 | u * v) / v, (0 | d * v) / v, r, h, c, E ? 1 + -c / E : 1].join(",") + ")"
        },
        Re = N.set2DTransformRatio = function (t) {
            var e, i, s, r, n, a = this.data,
            o = this.t,
            h = o.style,
            l = a.x,
            _ = a.y;
            return a.rotationX || a.rotationY || a.z || a.force3D === !0 || "auto" === a.force3D && 1 !== t && 0 !== t ? (this.setRatio = ke, ke.call(this, t), void 0) : (a.rotation || a.skewX ? (e = a.rotation * M, i = e - a.skewX * M, s = 1e5, r = a.scaleX * s, n = a.scaleY * s, h[ye] = (a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) matrix(" : "matrix(") + (0 | Math.cos(e) * r) / s + "," + (0 | Math.sin(e) * r) / s + "," + (0 | Math.sin(i) * -n) / s + "," + (0 | Math.cos(i) * n) / s + "," + l + "," + _ + ")") : h[ye] = (a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) matrix(" : "matrix(") + a.scaleX + ",0,0," + a.scaleY + "," + l + "," + _ + ")", void 0)
        };
        de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function (t, e, i, s, n, o, h) {
                if (s._transform) return n;
                var l, _, u, p, c, f, m, d = s._transform = Pe(t, r, !0, h.parseTransform),
                g = t.style,
                v = 1e-6,
                y = ve.length,
                T = h,
                w = {};
                if ("string" == typeof T.transform && ye) u = L.style,
                u[ye] = T.transform,
                u.display = "block",
                u.position = "absolute",
                E.body.appendChild(L),
                l = Pe(L, null, !1),
                E.body.removeChild(L);
                else if ("object" == typeof T) {
                    if (l = {
                        scaleX: se(null != T.scaleX ? T.scaleX : T.scale, d.scaleX),
                        scaleY: se(null != T.scaleY ? T.scaleY : T.scale, d.scaleY),
                        scaleZ: se(T.scaleZ, d.scaleZ),
                        x: se(T.x, d.x),
                        y: se(T.y, d.y),
                        z: se(T.z, d.z),
                        xPercent: se(T.xPercent, d.xPercent),
                        yPercent: se(T.yPercent, d.yPercent),
                        perspective: se(T.transformPerspective, d.perspective)
                    },
                    m = T.directionalRotation, null != m) if ("object" == typeof m) for (u in m) T[u] = m[u];
                    else T.rotation = m;
                    "string" == typeof T.x && -1 !== T.x.indexOf("%") && (l.x = 0, l.xPercent = se(T.x, d.xPercent)),
                    "string" == typeof T.y && -1 !== T.y.indexOf("%") && (l.y = 0, l.yPercent = se(T.y, d.yPercent)),
                    l.rotation = re("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : d.rotation, d.rotation, "rotation", w),
                    xe && (l.rotationX = re("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", w), l.rotationY = re("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", w)),
                    l.skewX = null == T.skewX ? d.skewX : re(T.skewX, d.skewX),
                    l.skewY = null == T.skewY ? d.skewY : re(T.skewY, d.skewY),
                    (_ = l.skewY - d.skewY) && (l.skewX += _, l.rotation += _)
                }
                for (xe && null != T.force3D && (d.force3D = T.force3D, f = !0), d.skewType = T.skewType || d.skewType || a.defaultSkewType, c = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, c || null == T.scale || (l.scaleZ = 1) ; --y > -1;) i = ve[y],
                p = l[i] - d[i],
                (p > v || -v > p || null != I[i]) && (f = !0, n = new pe(d, i, d[i], p, n), i in w && (n.e = w[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                return p = T.transformOrigin,
                (p || xe && c && d.zOrigin) && (ye ? (f = !0, i = we, p = (p || W(t, i, r, !1, "50% 50%")) + "", n = new pe(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, xe ? (u = d.zOrigin, p = p.split(" "), d.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px", n = new pe(d, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = p) : ee(p + "", d)),
                f && (s._transformType = c || 3 === this._transformType ? 3 : 2),
                n
            },
            prefix: !0
        }),
        de("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        de("borderRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, n, a) {
                e = this.format(e);
                var o, h, l, _, u, p, c, f, m, d, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                P = t.style;
                for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = V(b[h])),
                u = _ = W(t, b[h], r, !1, "0px"),
                -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]),
                p = l = o[h],
                c = parseFloat(u),
                v = u.substr((c + "").length),
                y = "=" === p.charAt(1),
                y ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), g = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), g = p.substr((f + "").length)),
                "" === g && (g = s[i] || v),
                g !== v && (T = Q(t, "borderLeft", c, v), w = Q(t, "borderTop", c, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (w / d) + "%") : "em" === g ? (x = Q(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + f + g, l = parseFloat(_) + f + g)),
                a = ce(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: le("0px 0px 0px 0px", !1, !0)
        }),
        de("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, i, s, n, a) {
                var o, h, l, _, u, p, c = "background-position",
                m = r || G(t, null),
                d = this.format((m ? f ? m.getPropertyValue(c + "-x") + " " + m.getPropertyValue(c + "-y") : m.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                g = this.format(e);
                if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = W(t, "backgroundImage").replace(k, ""), p && "none" !== p)) {
                    for (o = d.split(" "), h = g.split(" "), F.setAttribute("src", p), l = 2; --l > -1;) d = o[l],
                    _ = -1 !== d.indexOf("%"),
                    _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - F.width : t.offsetHeight - F.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                    d = o.join(" ")
                }
                return this.parseComplex(t.style, d, g, n, a)
            },
            formatter: ee
        }),
        de("backgroundSize", {
            defaultValue: "0 0",
            formatter: ee
        }),
        de("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        de("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        de("transformStyle", {
            prefix: !0
        }),
        de("backfaceVisibility", {
            prefix: !0
        }),
        de("userSelect", {
            prefix: !0
        }),
        de("margin", {
            parser: _e("marginTop,marginRight,marginBottom,marginLeft")
        }),
        de("padding", {
            parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        de("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, s, n, a) {
                var o, h, l;
                return 9 > f ? (h = t.currentStyle, l = 8 > f ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(W(t, this.p, r, !1, this.dflt)), e = this.format(e)),
                this.parseComplex(t.style, o, e, n, a)
            }
        }),
        de("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        de("autoRound,strictUnits", {
            parser: function (t, e, i, s, r) {
                return r
            }
        }),
        de("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, i, s, n, a) {
                return this.parseComplex(t.style, this.format(W(t, "borderTopWidth", r, !1, "0px") + " " + W(t, "borderTopStyle", r, !1, "solid") + " " + W(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
            },
            color: !0,
            formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(he) || ["#000"])[0]
            }
        }),
        de("borderWidth", {
            parser: _e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        de("float,cssFloat,styleFloat", {
            parser: function (t, e, i, s, r) {
                var n = t.style,
                a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                return new pe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
            }
        });
        var Ae = function (t) {
            var e, i = this.t,
            s = i.filter || W(this.data, "filter"),
            r = 0 | this.s + this.c * t;
            100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !W(this.data, "filter")) : (i.filter = s.replace(x, ""), e = !0)),
            e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
        };
        de("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function (t, e, i, s, n, a) {
                var o = parseFloat(W(t, "opacity", r, !1, "1")),
                h = t.style,
                l = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                l && 1 === o && "hidden" === W(t, "visibility", r) && 0 !== e && (o = 0),
                U ? n = new pe(h, "opacity", o, e - o, n) : (n = new pe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ae),
                l && (n = new pe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)),
                n
            }
        });
        var Ce = function (t, e) {
            e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
        },
        Oe = function (t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data,
                i = this.t.style; e;) e.v ? i[e.p] = e.v : Ce(i, e.p),
                e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        de("className", {
            parser: function (t, e, s, n, a, o, h) {
                var l, _, u, p, c, f = t.getAttribute("class") || "",
                m = t.style.cssText;
                if (a = n._classNamePT = new pe(t, s, 0, 0, a, 2), a.setRatio = Oe, a.pr = -11, i = !0, a.b = f, _ = $(t, r), u = t._gsClassPT) {
                    for (p = {},
                    c = u.data; c;) p[c.p] = 1,
                    c = c._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = a,
                a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                n._tween._duration && (t.setAttribute("class", a.e), l = H(t, _, $(t), h, p), t.setAttribute("class", f), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)),
                a
            }
        });
        var De = function (t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, s, r, n = this.t.style,
                a = o.transform.parse;
                if ("all" === this.e) n.cssText = "",
                r = !0;
                else for (e = this.e.split(","), s = e.length; --s > -1;) i = e[s],
                o[i] && (o[i].parse === a ? r = !0 : i = "transformOrigin" === i ? we : o[i].p),
                Ce(n, i);
                r && (Ce(n, ye), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (de("clearProps", {
            parser: function (t, e, s, r, n) {
                return n = new pe(t, s, 0, 0, n, 2),
                n.setRatio = De,
                n.e = e,
                n.pr = -10,
                n.data = r._tween,
                i = !0,
                n
        }
        }), h = "bezier,throwProps,physicsProps,physics2D".split(","), fe = h.length; fe--;) ge(h[fe]);
        h = a.prototype,
        h._firstPT = null,
        h._onInitTween = function (t, e, o) {
            if (!t.nodeType) return !1;
            this._target = t,
            this._tween = o,
            this._vars = e,
            l = e.autoRound,
            i = !1,
            s = e.suffixMap || a.suffixMap,
            r = G(t, ""),
            n = this._overwriteProps;
            var h, p, f, m, d, g, v, y, T, x = t.style;
            if (_ && "" === x.zIndex && (h = W(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(x, "zIndex", 0)), "string" == typeof e && (m = x.cssText, h = $(t, r), x.cssText = m + ";" + e, h = H(t, h, $(t)).difs, !U && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, x.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                for (T = 3 === this._transformType, ye ? u && (_ = !0, "" === x.zIndex && (v = W(t, "zIndex", r), ("auto" === v || "" === v) && this._addLazySet(x, "zIndex", 0)), c && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : x.zoom = 1, f = p; f && f._next;) f = f._next;
                y = new pe(t, "transform", 0, 0, null, 2),
                this._linkCSSP(y, null, f),
                y.setRatio = T && xe ? ke : ye ? Re : Se,
                y.data = this._transform || Pe(t, r, !0),
                n.pop()
            }
            if (i) {
                for (; p;) {
                    for (g = p._next, f = m; f && f.pr > p.pr;) f = f._next; (p._prev = f ? f._prev : d) ? p._prev._next = p : m = p,
                    (p._next = f) ? f._prev = p : d = p,
                    p = g
                }
                this._firstPT = m
            }
            return !0
        },
        h.parse = function (t, e, i, n) {
            var a, h, _, u, p, c, f, m, d, g, v = t.style;
            for (a in e) c = e[a],
            h = o[a],
            h ? i = h.parse(t, c, a, this, i, n, e) : (p = W(t, a, r) + "", d = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && b.test(c) ? (d || (c = oe(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = ce(v, a, p, c, !0, "transparent", i, 0, n)) : !d || -1 === c.indexOf(" ") && -1 === c.indexOf(",") ? (_ = parseFloat(p), f = _ || 0 === _ ? p.substr((_ + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (_ = te(t, a, r), f = "px") : "left" === a || "top" === a ? (_ = Z(t, a, r), f = "px") : (_ = "opacity" !== a ? 0 : 1, f = "")), g = d && "=" === c.charAt(1), g ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), m = c.replace(y, "")) : (u = parseFloat(c), m = d ? c.substr((u + "").length) || "" : ""), "" === m && (m = a in s ? s[a] : f), c = u || 0 === u ? (g ? u + _ : u) + m : e[a], f !== m && "" !== m && (u || 0 === u) && _ && (_ = Q(t, a, _, f), "%" === m ? (_ /= Q(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = _ + "%")) : "em" === m ? _ /= Q(t, a, 1, "em") : "px" !== m && (u = Q(t, a, u, m), m = "px"), g && (u || 0 === u) && (c = u + _ + m)), g && (u += _), !_ && 0 !== _ || !u && 0 !== u ? void 0 !== v[a] && (c || "NaN" != c + "" && null != c) ? (i = new pe(v, a, u || _ || 0, 0, i, -1, a, !1, 0, p, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : p) : j("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, _, u - _, i, 0, a, l !== !1 && ("px" === m || "zIndex" === a), 0, p, c), i.xs0 = m)) : i = ce(v, a, p, c, !0, null, i, 0, n)),
            n && i && !i.plugin && (i.plugin = n);
            return i
        },
        h.setRatio = function (t) {
            var e, i, s, r = this._firstPT,
            n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; r;) {
                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type) if (1 === r.type) if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                else {
                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                    r.t[r.p] = i
                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                else r.t[r.p] = e + r.xs0;
                r = r._next
            } else for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t),
            r = r._next;
            else for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t),
            r = r._next
        },
        h._enableTransforms = function (t) {
            this._transformType = t || 3 === this._transformType ? 3 : 2,
            this._transform = this._transform || Pe(this._target, r, !0)
        };
        var Me = function () {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        h._addLazySet = function (t, e, i) {
            var s = this._firstPT = new pe(t, e, 0, 0, this._firstPT, 2);
            s.e = i,
            s.setRatio = Me,
            s.data = this
        },
        h._linkCSSP = function (t, e, i, s) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i),
            t
        },
        h._kill = function (e) {
            var i, s, r, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (s in e) n[s] = e[s];
                n.opacity = 1,
                n.autoAlpha && (n.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null),
            t.prototype._kill.call(this, n)
        };
        var ze = function (t, e, i) {
            var s, r, n, a;
            if (t.slice) for (r = t.length; --r > -1;) ze(t[r], e, i);
            else for (s = t.childNodes, r = s.length; --r > -1;) n = s[r],
            a = n.type,
            n.style && (e.push($(n)), i && i.push(n)),
            1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || ze(n, e, i)
        };
        return a.cascadeTo = function (t, i, s) {
            var r, n, a, o = e.to(t, i, s),
            h = [o],
            l = [],
            _ = [],
            u = [],
            p = e._internals.reservedProps;
            for (t = o._targets || o.target, ze(t, l, u), o.render(i, !0), ze(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;) if (n = H(u[r], l[r], _[r]), n.firstMPT) {
                n = n.difs;
                for (a in s) p[a] && (n[a] = s[a]);
                h.push(e.to(u[r], i, n))
            }
            return h
        },
        t.activate([a]),
        a
    },
    !0),
    function () {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function (t, e, i) {
                return this._tween = i,
                !0
            }
        }),
        e = t.prototype;
        e._onInitAllProps = function () {
            for (var t, e, i, s = this._tween,
            r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {},
            o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
            for (n = r.length; --n > -1;) for (t = r[n], e = s._firstPT; e;) i = e._next,
            e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o),
            e = i;
            return !1
        },
        e._add = function (t, e, i, s) {
            this._addTween(t, e, i, i + s, e, !0),
            this._overwriteProps.push(e)
        }
    }(),
    _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.3.3",
        init: function (t, e) {
            var i, s, r;
            if ("function" != typeof t.setAttribute) return !1;
            this._target = t,
            this._proxy = {},
            this._start = {},
            this._end = {};
            for (i in e) this._start[i] = this._proxy[i] = s = t.getAttribute(i),
            r = this._addTween(this._proxy, i, parseFloat(s), e[i], i),
            this._end[i] = r ? r.s + r.c : e[i],
            this._overwriteProps.push(i);
            return !0
        },
        set: function (t) {
            this._super.setRatio.call(this, t);
            for (var e, i = this._overwriteProps,
            s = i.length,
            r = 1 === t ? this._end : t ? this._proxy : this._start; --s > -1;) e = i[s],
            this._target.setAttribute(e, r[e] + "")
        }
    }),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function (t, e) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360,
            l = 1e-6;
            for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
            return !0
        },
        set: function (t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t);
            else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
            e = e._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"],
    function (t) {
        var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
        n = r.com.greensock,
        a = 2 * Math.PI,
        o = Math.PI / 2,
        h = n._class,
        l = function (e, i) {
            var s = h("easing." + e,
            function () { },
            !0),
            r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            s
        },
        _ = t.register ||
        function () { },
        u = function (t, e, i, s) {
            var r = h("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new s
            },
            !0);
            return _(r, t),
            r
        },
        p = function (t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        },
        c = function (e, i) {
            var s = h("easing." + e,
            function (t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            },
            !0),
            r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            r.config = function (t) {
                return new s(t)
            },
            s
        },
        f = u("Back", c("BackOut",
        function (t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), c("BackIn",
        function (t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), c("BackInOut",
        function (t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })),
        m = h("easing.SlowMo",
        function (t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = i === !0
        },
        !0),
        d = m.prototype = new t;
        return d.constructor = m,
        d.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        },
        m.ease = new m(.7, .7),
        d.config = m.config = function (t, e, i) {
            return new m(t, e, i)
        },
        e = h("easing.SteppedEase",
        function (t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        },
        !0),
        d = e.prototype = new t,
        d.constructor = e,
        d.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        },
        d.config = e.config = function (t) {
            return new e(t)
        },
        i = h("easing.RoughEase",
        function (e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none",
            l = [], _ = 0, u = 0 | (e.points || 20), c = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1;) i = f ? Math.random() : 1 / u * c,
            s = d ? d.getRatio(i) : i,
            "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g),
            f ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r,
            m && (s > 1 ? s = 1 : 0 > s && (s = 0)),
            l[_++] = {
                x: i,
                y: s
            };
            for (l.sort(function (t, e) {
                return t.x - e.x
            }), o = new p(1, 1, null), c = u; --c > -1;) a = l[c],
            o = new p(a.x, a.y, o);
            this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
        },
        !0),
        d = i.prototype = new t,
        d.constructor = i,
        d.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        },
        d.config = function (t) {
            return new i(t)
        },
        i.ease = new i,
        u("Bounce", l("BounceOut",
        function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn",
        function (t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut",
        function (t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1,
            t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        u("Circ", l("CircOut",
        function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn",
        function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut",
        function (t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        s = function (e, i, s) {
            var r = h("easing." + e,
            function (t, e) {
                this._p1 = t || 1,
                this._p2 = e || s,
                this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
            },
            !0),
            n = r.prototype = new t;
            return n.constructor = r,
            n.getRatio = i,
            n.config = function (t, e) {
                return new r(t, e)
            },
            r
        },
        u("Elastic", s("ElasticOut",
        function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        },
        .3), s("ElasticIn",
        function (t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        },
        .3), s("ElasticInOut",
        function (t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        },
        .45)),
        u("Expo", l("ExpoOut",
        function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn",
        function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut",
        function (t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        u("Sine", l("SineOut",
        function (t) {
            return Math.sin(t * o)
        }), l("SineIn",
        function (t) {
            return -Math.cos(t * o) + 1
        }), l("SineInOut",
        function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })),
        h("easing.EaseLookup", {
            find: function (e) {
                return t.map[e]
            }
        },
        !0),
        _(r.SlowMo, "SlowMo", "ease,"),
        _(i, "RoughEase", "ease,"),
        _(e, "SteppedEase", "ease,"),
        f
    },
    !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function (t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var s, r, n, a, o, h = function (t) {
            var e, s = t.split("."),
            r = i;
            for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
            return r
        },
        l = h("com.greensock"),
        _ = 1e-10,
        u = function (t) {
            var e, i = [],
            s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        },
        p = function () { },
        c = function () {
            var t = Object.prototype.toString,
            e = t.call([]);
            return function (i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(),
        f = {},
        m = function (s, r, n, a) {
            this.sc = f[s] ? f[s].sc : [],
            f[s] = this,
            this.gsClass = null,
            this.func = n;
            var o = [];
            this.check = function (l) {
                for (var _, u, p, c, d = r.length,
                g = d; --d > -1;) (_ = f[r[d]] || new m(r[d], [])).gsClass ? (o[d] = _.gsClass, g--) : l && _.sc.push(this);
                if (0 === g && n) for (u = ("com.greensock." + s).split("."), p = u.pop(), c = h(u.join("."))[p] = this.gsClass = n.apply(n, o), a && (i[p] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [],
                function () {
                    return c
                }) : s === e && "undefined" != typeof module && module.exports && (module.exports = c)), d = 0; this.sc.length > d; d++) this.sc[d].check()
            },
            this.check(!0)
        },
        d = t._gsDefine = function (t, e, i, s) {
            return new m(t, e, i, s)
        },
        g = l._class = function (t, e, i) {
            return e = e ||
            function () { },
            d(t, [],
            function () {
                return e
            },
            i),
            e
        };
        d.globals = i;
        var v = [0, 0, 1, 1],
        y = [],
        T = g("easing.Ease",
        function (t, e, i, s) {
            this._func = t,
            this._type = i || 0,
            this._power = s || 0,
            this._params = e ? v.concat(e) : v
        },
        !0),
        w = T.map = {},
        x = T.register = function (t, e, i, s) {
            for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(",") ; --_ > -1;) for (n = h[_], r = s ? g("easing." + n, null, !0) : l.easing[n] || {},
            a = u.length; --a > -1;) o = u[a],
            w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
        };
        for (n = T.prototype, n._calcEnd = !1, n.getRatio = function (t) {
            if (this._func) return this._params[0] = t,
            this._func.apply(null, this._params);
            var e = this._type,
            i = this._power,
            s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s),
            1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
        },
        s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r,
        x(new T(null, null, 1, r), n, "easeOut", !0),
        x(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")),
        x(new T(null, null, 3, r), n, "easeInOut");
        w.linear = l.easing.Linear.easeIn,
        w.swing = l.easing.Quad.easeInOut;
        var b = g("events.EventDispatcher",
        function (t) {
            this._listeners = {},
            this._eventTarget = t || this
        });
        n = b.prototype,
        n.addEventListener = function (t, e, i, s, r) {
            r = r || 0;
            var n, h, l = this._listeners[t],
            _ = 0;
            for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) n = l[h],
            n.c === e && n.s === i ? l.splice(h, 1) : 0 === _ && r > n.pr && (_ = h + 1);
            l.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: r
            }),
            this !== a || o || a.wake()
        },
        n.removeEventListener = function (t, e) {
            var i, s = this._listeners[t];
            if (s) for (i = s.length; --i > -1;) if (s[i].c === e) return s.splice(i, 1),
            void 0
        },
        n.dispatchEvent = function (t) {
            var e, i, s, r = this._listeners[t];
            if (r) for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e],
            s.up ? s.c.call(s.s || i, {
                type: t,
                target: i
            }) : s.c.call(s.s || i)
        };
        var P = t.requestAnimationFrame,
        S = t.cancelAnimationFrame,
        k = Date.now ||
        function () {
            return (new Date).getTime()
        },
        R = k();
        for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"],
        S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
        g("Ticker",
        function (t, e) {
            var i, s, r, n, h, l = this,
            u = k(),
            c = e !== !1 && P,
            f = 500,
            m = 33,
            d = function (t) {
                var e, a, o = k() - R;
                o > f && (u += o - m),
                R += o,
                l.time = (R - u) / 1e3,
                e = l.time - h,
                (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= n ? .004 : n - e), a = !0),
                t !== !0 && (r = s(d)),
                a && l.dispatchEvent("tick")
            };
            b.call(l),
            l.time = l.frame = 0,
            l.tick = function () {
                d(!0)
            },
            l.lagSmoothing = function (t, e) {
                f = t || 1 / _,
                m = Math.min(e, f, 0)
            },
            l.sleep = function () {
                null != r && (c && S ? S(r) : clearTimeout(r), s = p, r = null, l === a && (o = !1))
            },
            l.wake = function () {
                null !== r ? l.sleep() : l.frame > 10 && (R = k() - f + 5),
                s = 0 === i ? p : c && P ? P : function (t) {
                    return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
                },
                l === a && (o = !0),
                d(2)
            },
            l.fps = function (t) {
                return arguments.length ? (i = t, n = 1 / (i || 60), h = this.time + n, l.wake(), void 0) : i
            },
            l.useRAF = function (t) {
                return arguments.length ? (l.sleep(), c = t, l.fps(i), void 0) : c
            },
            l.fps(t),
            setTimeout(function () {
                c && (!r || 5 > l.frame) && l.useRAF(!1)
            },
            1500)
        }),
        n = l.Ticker.prototype = new l.events.EventDispatcher,
        n.constructor = l.Ticker;
        var A = g("core.Animation",
        function (t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                o || a.wake();
                var i = this.vars.useFrames ? j : B;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        });
        a = A.ticker = new l.Ticker,
        n = A.prototype,
        n._dirty = n._gc = n._initted = n._paused = !1,
        n._totalTime = n._time = 0,
        n._rawPrevTime = -1,
        n._next = n._last = n._onUpdate = n._timeline = n.timeline = null,
        n._paused = !1;
        var C = function () {
            o && k() - R > 2e3 && a.wake(),
            setTimeout(C, 2e3)
        };
        C(),
        n.play = function (t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        },
        n.pause = function (t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        },
        n.resume = function (t, e) {
            return null != t && this.seek(t, e),
            this.paused(!1)
        },
        n.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1)
        },
        n.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        },
        n.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        },
        n.render = function () { },
        n.invalidate = function () {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        },
        n.isActive = function () {
            var t, e = this._timeline,
            i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        },
        n._enabled = function (t, e) {
            return o || a.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        },
        n._kill = function () {
            return this._enabled(!1, !1)
        },
        n.kill = function (t, e) {
            return this._kill(t, e),
            this
        },
        n._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0,
            e = e.timeline;
            return this
        },
        n._swapSelfInParams = function (t) {
            for (var e = t.length,
            i = t.concat() ; --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        },
        n.eventCallback = function (t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        },
        n.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        },
        n.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        },
        n.totalDuration = function (t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        },
        n.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        },
        n.totalTime = function (t, e, i) {
            if (o || a.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                    r = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                    r = r._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && q())
            }
            return this
        },
        n.progress = n.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        },
        n.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        },
        n.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t,
            this._uncache(!1)
        },
        n.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        },
        n.paused = function (t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                o || t || a.wake();
                var e = this._timeline,
                i = e.rawTime(),
                s = i - this._pauseTime; !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)),
                this._pauseTime = t ? i : null,
                this._paused = t,
                this._active = this.isActive(),
                !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1),
            this
        };
        var O = g("core.SimpleTimeline",
        function (t) {
            A.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        n = O.prototype = new A,
        n.constructor = O,
        n.kill()._gc = !1,
        n._first = n._last = null,
        n._sortChildren = !1,
        n.add = n.insert = function (t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren) for (s = t._startTime; i && i._startTime > s;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t),
            t._next ? t._next._prev = t : this._last = t,
            t._prev = i,
            this._timeline && this._uncache(!0),
            this
        },
        n._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, this._timeline && this._uncache(!0)),
            this
        },
        n.render = function (t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next,
            (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
            r = s
        },
        n.rawTime = function () {
            return o || a.wake(),
            this._totalTime
        };
        var D = g("TweenLite",
        function (e, i, s) {
            if (A.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : D.selector(e) || e;
            var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
            h = this.vars.overwrite;
            if (this._overwrite = h = null == h ? Y[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : Y[h], (o || e instanceof Array || e.push && c(e)) && "number" != typeof e[0]) for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r],
            n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = V(n, this, !1), 1 === h && this._siblings[r].length > 1 && G(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
            else this._propLookup = {},
            this._siblings = V(e, this, !1),
            1 === h && this._siblings.length > 1 && G(e, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
        },
        !0),
        M = function (e) {
            return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        },
        z = function (t, e) {
            var i, s = {};
            for (i in t) U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!F[i] || F[i] && F[i]._autoCSS) || (s[i] = t[i], delete t[i]);
            t.css = s
        };
        n = D.prototype = new A,
        n.constructor = D,
        n.kill()._gc = !1,
        n.ratio = 0,
        n._firstPT = n._targets = n._overwrittenProps = n._startAt = null,
        n._notifyPluginsOfEnabled = n._lazy = !1,
        D.version = "1.13.2",
        D.defaultEase = n._ease = new T(null, null, 1, 1),
        D.defaultOverwrite = "auto",
        D.ticker = a,
        D.autoSleep = !0,
        D.lagSmoothing = function (t, e) {
            a.lagSmoothing(t, e)
        },
        D.selector = t.$ || t.jQuery ||
        function (e) {
            var i = t.$ || t.jQuery;
            return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var I = [],
        E = {},
        L = D._internals = {
            isArray: c,
            isSelector: M,
            lazyTweens: I
        },
        F = D._plugins = {},
        N = L.tweenLookup = {},
        X = 0,
        U = L.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1
        },
        Y = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        j = A._rootFramesTimeline = new O,
        B = A._rootTimeline = new O,
        q = L.lazyRender = function () {
            var t = I.length;
            for (E = {}; --t > -1;) s = I[t],
            s && s._lazy !== !1 && (s.render(s._lazy[0], s._lazy[1], !0), s._lazy = !1);
            I.length = 0
        };
        B._startTime = a.time,
        j._startTime = a.frame,
        B._active = j._active = !0,
        setTimeout(q, 1),
        A._updateRoot = D.render = function () {
            var t, e, i;
            if (I.length && q(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), j.render((a.frame - j._startTime) * j._timeScale, !1, !1), I.length && q(), !(a.frame % 120)) {
                for (i in N) {
                    for (e = N[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete N[i]
                }
                if (i = B._first, (!i || i._paused) && D.autoSleep && !j._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || a.sleep()
                }
            }
        },
        a.addEventListener("tick", A._updateRoot);
        var V = function (t, e, i) {
            var s, r, n = t._gsTweenID;
            if (N[n || (t._gsTweenID = n = "t" + X++)] || (N[n] = {
                target: t,
                tweens: []
            }), e && (s = N[n].tweens, s[r = s.length] = e, i)) for (; --r > -1;) s[r] === e && s.splice(r, 1);
            return N[n].tweens
        },
        G = function (t, e, i, s, r) {
            var n, a, o, h;
            if (1 === s || s >= 4) {
                for (h = r.length, n = 0; h > n; n++) if ((o = r[n]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                else if (5 === s) break;
                return a
            }
            var l, u = e._startTime + _,
            p = [],
            c = 0,
            f = 0 === e._duration;
            for (n = r.length; --n > -1;) (o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || W(e, 0, f), 0 === W(o, l, f) && (p[c++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && 2e-10 >= u - o._startTime || (p[c++] = o)));
            for (n = c; --n > -1;) o = p[n],
            2 === s && o._kill(i, t) && (a = !0),
            (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
            return a
        },
        W = function (t, e, i) {
            for (var s = t._timeline,
            r = s._timeScale,
            n = t._startTime; s._timeline;) {
                if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                s = s._timeline
            }
            return n /= r,
            n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
        };
        n._init = function () {
            var t, e, i, s, r, n = this.vars,
            a = this._overwrittenProps,
            o = this._duration,
            h = !!n.immediateRender,
            l = n.ease;
            if (n.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
                r = {};
                for (s in n.startAt) r[s] = n.startAt[s];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h) if (this._time > 0) this._startAt = null;
                else if (0 !== o) return
            } else if (n.runBackwards && 0 !== o) if (this._startAt) this._startAt.render(-1, !0),
            this._startAt.kill(),
            this._startAt = null;
            else {
                0 !== this._time && (h = !1),
                i = {};
                for (s in n) U[s] && "autoCSS" !== s || (i[s] = n[s]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && n.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                    if (0 === this._time) return
                } else this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = l = l ? l instanceof T ? l : "function" == typeof l ? new T(l, n.easeParams) : w[l] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {},
            this._siblings[t], a ? a[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards) for (i = this._firstPT; i;) i.s += i.c,
            i.c = -i.c,
            i = i._next;
            this._onUpdate = n.onUpdate,
            this._initted = !0
        },
        n._initProps = function (e, i, s, r) {
            var n, a, o, h, l, _;
            if (null == e) return !1;
            E[e._gsTweenID] && q(),
            this.vars.css || e.style && e !== t && e.nodeType && F.css && this.vars.autoCSS !== !1 && z(this.vars, e);
            for (n in this.vars) {
                if (_ = this.vars[n], U[n]) _ && (_ instanceof Array || _.push && c(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                else if (F[n] && (h = new F[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = l = {
                        _next: this._firstPT,
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: n,
                        pg: !0,
                        pr: h._priority
                    },
                    a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT; (h._priority || h._onInitAllProps) && (o = !0),
                    (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[n] = l = {
                    _next: this._firstPT,
                    t: e,
                    p: n,
                    f: "function" == typeof e[n],
                    n: n,
                    pg: !1,
                    pr: 0
                },
                l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]),
                l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                l && l._next && (l._next._prev = l)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && G(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (E[e._gsTweenID] = !0), o)
        },
        n.render = function (t, e, i) {
            var s, r, n, a, o = this._time,
            h = this._duration,
            l = this._rawPrevTime;
            if (t >= h) this._totalTime = this._time = h,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
            this._reversed || (s = !0, r = "onComplete"),
            0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === _) && l !== t && (i = !0, l > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : _);
            else if (1e-7 > t) this._totalTime = this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== o || 0 === h && l > 0 && l !== _) && (r = "onReverseComplete", s = this._reversed),
            0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : _)),
            this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / h,
                p = this._easeType,
                c = this._easePower; (1 === p || 3 === p && u >= .5) && (u = 1 - u),
                3 === p && (u *= 2),
                1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u),
                this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / h ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / h);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o,
                    this._rawPrevTime = l,
                    I.push(this),
                    this._lazy = [t, e],
                    void 0;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                n = n._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)),
                r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
            }
        },
        n._kill = function (t, e) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1,
            this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
            var i, s, r, n, a, o, h, l;
            if ((c(e) || M(e)) && "number" != typeof e[0]) for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;) if (e === this._targets[i]) {
                        a = this._propLookup[i] || {},
                        this._overwrittenProps = this._overwrittenProps || [],
                        s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                        break
                    }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup,
                    s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    h = t || a,
                    l = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill);
                    for (r in h) (n = a[r]) && (n.pg && n.t._kill(h) && (o = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]),
                    l && (s[r] = 1); !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return o
        },
        n.invalidate = function () {
            return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            A.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -_, this.render(-this._delay)),
            this
        },
        n._enabled = function (t, e) {
            if (o || a.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s) for (i = s.length; --i > -1;) this._siblings[i] = V(s[i], this, !0);
                else this._siblings = V(this.target, this, !0)
            }
            return A.prototype._enabled.call(this, t, e),
            this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        },
        D.to = function (t, e, i) {
            return new D(t, e, i)
        },
        D.from = function (t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new D(t, e, i)
        },
        D.fromTo = function (t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new D(t, e, s)
        },
        D.delayedCall = function (t, e, i, s, r) {
            return new D(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        },
        D.set = function (t, e) {
            return new D(t, 0, e)
        },
        D.getTweensOf = function (t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : D.selector(t) || t;
            var i, s, r, n;
            if ((c(t) || M(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;) for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
            } else for (s = V(t).concat(), i = s.length; --i > -1;) (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        },
        D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
        };
        var Q = g("plugins.TweenPlugin",
        function (t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = Q.prototype
        },
        !0);
        if (n = Q.prototype, Q.version = "1.10.1", Q.API = 2, n._firstPT = null, n._addTween = function (t, e, i, s, r, n) {
            var a, o;
            return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
            _next: this._firstPT,
            t: t,
            p: e,
            s: i,
            c: a,
            f: "function" == typeof t[e],
            n: r || e,
            r: n
        },
            o._next && (o._next._prev = o), o) : void 0
        },
        n.setRatio = function (t) {
            for (var e, i = this._firstPT,
            s = 1e-6; i;) e = i.c * t + i.s,
            i.r ? e = Math.round(e) : s > e && e > -s && (e = 0),
            i.f ? i.t[i.p](e) : i.t[i.p] = e,
            i = i._next
        },
        n._kill = function (t) {
            var e, i = this._overwriteProps,
            s = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = [];
        else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
            for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)),
            s = s._next;
            return !1
        },
        n._roundProps = function (t, e) {
            for (var i = this._firstPT; i;) (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e),
            i = i._next
        },
        D._onPluginEvent = function (t, e) {
            var i, s, r, n, a, o = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; o;) {
                    for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next; (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o,
                    (o._next = s) ? s._prev = o : n = o,
                    o = a
        }
                o = e._firstPT = r
        }
            for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
            o = o._next;
            return i
        },
        Q.activate = function (t) {
            for (var e = t.length; --e > -1;) t[e].API === Q.API && (F[(new t[e])._propName] = t[e]);
            return !0
        },
        d.plugin = function (t) {
            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
            var e, i = t.propName,
            s = t.priority || 0,
            r = t.overwriteProps,
            n = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_roundProps",
            initAll: "_onInitAllProps"
        },
            a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
            function () {
                Q.call(this, i, s),
                this._overwriteProps = r || []
        },
            t.global === !0),
            o = a.prototype = new Q(i);
            o.constructor = a,
            a.API = t.API;
            for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
            return a.version = t.version,
            Q.activate([a]),
            a
        },
        s = t._gsQueue) {
            for (r = 0; s.length > r; r++) s[r]();
            for (n in f) f[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
        }
        o = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
//delaunay.js
var Delaunay;
(function () {
    "use strict";

    var EPSILON = 1.0 / 1048576.0;

    function supertriangle(vertices) {
        var xmin = Number.POSITIVE_INFINITY,
            ymin = Number.POSITIVE_INFINITY,
            xmax = Number.NEGATIVE_INFINITY,
            ymax = Number.NEGATIVE_INFINITY,
            i, dx, dy, dmax, xmid, ymid;

        for (i = vertices.length; i--;) {
            if (vertices[i][0] < xmin) xmin = vertices[i][0];
            if (vertices[i][0] > xmax) xmax = vertices[i][0];
            if (vertices[i][1] < ymin) ymin = vertices[i][1];
            if (vertices[i][1] > ymax) ymax = vertices[i][1];
        }

        dx = xmax - xmin;
        dy = ymax - ymin;
        dmax = Math.max(dx, dy);
        xmid = xmin + dx * 0.5;
        ymid = ymin + dy * 0.5;

        return [
            [xmid - 20 * dmax, ymid - dmax],
            [xmid, ymid + 20 * dmax],
            [xmid + 20 * dmax, ymid - dmax]
        ];
    }

    function circumcircle(vertices, i, j, k) {
        var x1 = vertices[i][0],
            y1 = vertices[i][1],
            x2 = vertices[j][0],
            y2 = vertices[j][1],
            x3 = vertices[k][0],
            y3 = vertices[k][1],
            fabsy1y2 = Math.abs(y1 - y2),
            fabsy2y3 = Math.abs(y2 - y3),
            xc, yc, m1, m2, mx1, mx2, my1, my2, dx, dy;

        /* Check for coincident points */
        if (fabsy1y2 < EPSILON && fabsy2y3 < EPSILON)
            throw new Error("Eek! Coincident points!");

        if (fabsy1y2 < EPSILON) {
            m2 = -((x3 - x2) / (y3 - y2));
            mx2 = (x2 + x3) / 2.0;
            my2 = (y2 + y3) / 2.0;
            xc = (x2 + x1) / 2.0;
            yc = m2 * (xc - mx2) + my2;
        }

        else if (fabsy2y3 < EPSILON) {
            m1 = -((x2 - x1) / (y2 - y1));
            mx1 = (x1 + x2) / 2.0;
            my1 = (y1 + y2) / 2.0;
            xc = (x3 + x2) / 2.0;
            yc = m1 * (xc - mx1) + my1;
        }

        else {
            m1 = -((x2 - x1) / (y2 - y1));
            m2 = -((x3 - x2) / (y3 - y2));
            mx1 = (x1 + x2) / 2.0;
            mx2 = (x2 + x3) / 2.0;
            my1 = (y1 + y2) / 2.0;
            my2 = (y2 + y3) / 2.0;
            xc = (m1 * mx1 - m2 * mx2 + my2 - my1) / (m1 - m2);
            yc = (fabsy1y2 > fabsy2y3) ?
                m1 * (xc - mx1) + my1 :
                m2 * (xc - mx2) + my2;
        }

        dx = x2 - xc;
        dy = y2 - yc;
        return { i: i, j: j, k: k, x: xc, y: yc, r: dx * dx + dy * dy };
    }

    function dedup(edges) {
        var i, j, a, b, m, n;

        for (j = edges.length; j;) {
            b = edges[--j];
            a = edges[--j];

            for (i = j; i;) {
                n = edges[--i];
                m = edges[--i];

                if ((a === m && b === n) || (a === n && b === m)) {
                    edges.splice(j, 2);
                    edges.splice(i, 2);
                    break;
                }
            }
        }
    }

    Delaunay = {
        triangulate: function (vertices, key) {
            var n = vertices.length,
                i, j, indices, st, open, closed, edges, dx, dy, a, b, c;

            /* Bail if there aren't enough vertices to form any triangles. */
            if (n < 3)
                return [];

            /* Slice out the actual vertices from the passed objects. (Duplicate the
            * array even if we don't, though, since we need to make a supertriangle
            * later on!) */
            vertices = vertices.slice(0);

            if (key)
                for (i = n; i--;)
                    vertices[i] = vertices[i][key];

            /* Make an array of indices into the vertex array, sorted by the
            * vertices' x-position. */
            indices = new Array(n);

            for (i = n; i--;)
                indices[i] = i;

            indices.sort(function (i, j) {
                return vertices[j][0] - vertices[i][0];
            });

            /* Next, find the vertices of the supertriangle (which contains all other
            * triangles), and append them onto the end of a (copy of) the vertex
            * array. */
            st = supertriangle(vertices);
            vertices.push(st[0], st[1], st[2]);

            /* Initialize the open list (containing the supertriangle and nothing
            * else) and the closed list (which is empty since we havn't processed
            * any triangles yet). */
            open = [circumcircle(vertices, n + 0, n + 1, n + 2)];
            closed = [];
            edges = [];

            /* Incrementally add each vertex to the mesh. */
            for (i = indices.length; i--; edges.length = 0) {
                c = indices[i];

                /* For each open triangle, check to see if the current point is
                * inside it's circumcircle. If it is, remove the triangle and add
                * it's edges to an edge list. */
                for (j = open.length; j--;) {
                    /* If this point is to the right of this triangle's circumcircle,
                    * then this triangle should never get checked again. Remove it
                    * from the open list, add it to the closed list, and skip. */
                    dx = vertices[c][0] - open[j].x;
                    if (dx > 0.0 && dx * dx > open[j].r) {
                        closed.push(open[j]);
                        open.splice(j, 1);
                        continue;
                    }

                    /* If we're outside the circumcircle, skip this triangle. */
                    dy = vertices[c][1] - open[j].y;
                    if (dx * dx + dy * dy - open[j].r > EPSILON)
                        continue;

                    /* Remove the triangle and add it's edges to the edge list. */
                    edges.push(
                        open[j].i, open[j].j,
                        open[j].j, open[j].k,
                        open[j].k, open[j].i
                    );
                    open.splice(j, 1);
                }

                /* Remove any doubled edges. */
                dedup(edges);

                /* Add a new triangle for each edge. */
                for (j = edges.length; j;) {
                    b = edges[--j];
                    a = edges[--j];
                    open.push(circumcircle(vertices, a, b, c));
                }
            }

            /* Copy any remaining open triangles to the closed list, and then
            * remove any triangles that share a vertex with the supertriangle,
            * building a list of triplets that represent triangles. */
            for (i = open.length; i--;)
                closed.push(open[i]);
            open.length = 0;

            for (i = closed.length; i--;)
                if (closed[i].i < n && closed[i].j < n && closed[i].k < n)
                    open.push(closed[i].i, closed[i].j, closed[i].k);

            /* Yay, we're done! */
            return open;
        },
        contains: function (tri, p) {
            /* Bounding box test first, for quick rejections. */
            if ((p[0] < tri[0][0] && p[0] < tri[1][0] && p[0] < tri[2][0]) ||
                (p[0] > tri[0][0] && p[0] > tri[1][0] && p[0] > tri[2][0]) ||
                (p[1] < tri[0][1] && p[1] < tri[1][1] && p[1] < tri[2][1]) ||
                (p[1] > tri[0][1] && p[1] > tri[1][1] && p[1] > tri[2][1]))
                return null;

            var a = tri[1][0] - tri[0][0],
                b = tri[2][0] - tri[0][0],
                c = tri[1][1] - tri[0][1],
                d = tri[2][1] - tri[0][1],
                i = a * d - b * c;

            /* Degenerate tri. */
            if (i === 0.0)
                return null;

            var u = (d * (p[0] - tri[0][0]) - b * (p[1] - tri[0][1])) / i,
                v = (a * (p[1] - tri[0][1]) - c * (p[0] - tri[0][0])) / i;

            /* If we're outside the tri, fail. */
            if (u < 0.0 || v < 0.0 || (u + v) > 1.0)
                return null;

            return [u, v];
        }
    };

    if (typeof module !== "undefined")
        module.exports = Delaunay;
})();
//game
var iswechat = (window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger');
var cloc = window.location.href.split("?")[0].split("index.html")[0];
if (cloc.substring(cloc.length - 1) != "/") cloc += "/";



var Ingame;
var frames = 0;
var framesindex = 1;
var strcateid = 0;
var stranimatid = 0;
var stranimatwidth = 0;
var stranimatheight = 0;
var strvancaswidth = 0;
var strvancasheight = 0;
var blastloadingflag = false;
var loadingflag = false;
var nowcanvasw = 0;
var nowcanvash = 0;
var animatype = "";
var tttop = 0;
GameLoad = function () {
    if (firstgameflag) {
        firstgameflag = false;
        //初始化结果页
        funplayresult(false);
        $(".m-page-result .resultlabel").height(windowHeight - 150);
        $(".m-page-share .sharelabel").height(windowHeight - 150);
        loadingflag = true;
        var catgrory = "";
        if (jsondata != null && jsondata.length > 0) {
            for (var i = 0; i < jsondata.length; i++) {
                strcateid = jsondata[i].cateid;
                catgrory += '<div class="m-abs category" id="categoryid' + strcateid + '" style="display:none;">';
                for (var j = 0; j < jsondata[i].animation.length; j++) {
                    stranimatid = jsondata[i].animation[j].animaid;
                    tttop = 0;
                    tttop = windowHeight - 150 - jsondata[i].animation[j].height;
                    catgrory += '<div class="m-abs animation" id="animation' + strcateid + "" + stranimatid + '" style="top:' + tttop + 'px;display:none;height:1333px;overflow: hidden;" >';

                    if (jsondata[i].animation[j].animatype == "321") {
                        catgrory += '<canvas id="canvasv' + strcateid + '' + stranimatid + '" class="abss"  width="750" height="' + jsondata[i].animation[j].height + '" style="top:' + tttop * -1 + 'px" />';
                    } else {
                        catgrory += '<canvas id="canvasv' + strcateid + '' + stranimatid + '" class="abss"  width="750" height="' + jsondata[i].animation[j].height + '" />';
                    }
                    catgrory += '</div>';
                }
                catgrory += '</div>';
            }
            $(".gamelabel").html(catgrory);
            //loader.start();
            //var Ingameload = setInterval(function () {
            setTimeout(function () {
                isloading = false;
                if (!isloading) {
                    //clearInterval(Ingameload);
                    SetGame();
                }
            }, 2000);
            //}, 20);
        } else {
            $('.pagealertother .pagealerttext').html("未找到场景数据");
            $('.pagealertother').show();
        }
    }
}, ConvertCanvasToImage = function (objcanvasname) {
    var mycv = document.getElementById(objcanvasname);
    var image = new Image();
    image.src = mycv.toDataURL("image/jpg");
    return image;
}, SetCanvasToImage = function (objcanvasname, objnowcategory, objnowanimation) {
    var mycv = document.getElementById(objcanvasname);
    var image = new Image();
    image.src = mycv.toDataURL("image/jpg");
    $("#imgid" + objnowcategory + '' + objnowanimation).attr("src", image.src);
}, CreateCanvasByText = function (objvancaspartentid, cwidth, cheight, objcolorflag, objnowcategory, objnowanimation, objanimatype) {
    // 绘制文字
    var cpartent = document.getElementById(objvancaspartentid);
    var newcanvas = document.createElement("canvas");
    if (objanimatype == "111") {
        newcanvas.id = "canvast" + objnowcategory + '' + objnowanimation;
        newcanvas.style.display = "none";
    } else {
        if (objcolorflag) {
            newcanvas.id = "canvastcolor" + objnowcategory + '' + objnowanimation;
        } else {
            newcanvas.id = "canvast" + objnowcategory + '' + objnowanimation;
        }
    }
    newcanvas.width = cwidth;
    newcanvas.height = cheight;
    cpartent.appendChild(newcanvas);
    var ctx = newcanvas.getContext('2d');
    if (objanimatype == "111") {

        if (/^[a-zA-Z]/.test(usersay))//包含英文
        {
            ctx.font = "Bold 35px TradeGothicW01-BoldCn20_675334";
        }
        else {
            ctx.font = "Bold 35px MStiffHeiPRCBold";
        }
        newcanvas.id = "canvast" + objnowcategory + '' + objnowanimation;
        ctx.fillStyle = 'rgb(255,10,129)';
        ctx.fillRect(0, 0, newcanvas.width, newcanvas.height);
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = "center";
        ctx.textBaseline = 'middle';//设置文本的垂直对齐方式
        ctx.fillText(usersay, newcanvas.width / 2, newcanvas.height / 2);
    } else {
        ctx.fillStyle = 'rgb(255,10,129)';
        if (/^[a-zA-Z]/.test(usersay))//包含英文
        {
            ctx.font = "Bold 60px TradeGothicW01-BoldCn20_675334";
        }
        else {
            ctx.font = "Bold 60px MStiffHeiPRCBold";
        }
        newcanvas.text_size = ctx.measureText(newcanvas.text);
        if (objcolorflag) {
            newcanvas.id = "canvastcolor" + objnowcategory + '' + objnowanimation;
            ctx.fillStyle = 'rgb(255,10,129)';
        } else {
            newcanvas.id = "canvast" + objnowcategory + '' + objnowanimation;
            ctx.fillStyle = '#FFFFFF';
        }
        ctx.textAlign = "center";
        //ctx.textBaseline = 'middle';//设置文本的垂直对齐方式
        if (usersay.length > 6) {
            ctx.fillText(usersay.substring(0, 6), newcanvas.width / 2, 60);
            ctx.fillText(usersay.substring(6, usersay.length), newcanvas.width / 2, 120);
        } else {
            ctx.fillText(usersay, newcanvas.width / 2, newcanvas.height / 2);
        }
    }

}, SetTweenMax = function (objimgw, objimgh, objcontainer, objnowcategory, objnowanimation, objanimatype) {
    var imageWidth = objimgw, imageHeight = objimgh;
    var vertices = [], indices, boxes = [];
    var image, fragments = [], container = document.getElementById(objcontainer);
    image = document.getElementById("imgid" + objnowcategory + '' + objnowanimation);
    triangulate();
    makeBoxes();
    makeFragments();
    function triangulate() {
        var x, y, dx = imageWidth / 8, dy = imageHeight / 8, offset = 0.5;
        switch (objanimatype) {
            case "111":
                offset = 0.1;
                break;
            case "311":
                offset = 0.5;
                break;
        }
        for (var i = 0; i <= imageWidth; i += dx) {
            for (var j = 0; j <= imageHeight; j += dy) {
                if (i && (i !== imageWidth)) x = i + randomRange(-dx * offset, dx * offset);
                else x = i;

                if (j && (j !== imageHeight)) y = j + randomRange(-dy * offset, dy * offset);
                else y = j;

                vertices.push([x, y]);
            }
        }

        indices = Delaunay.triangulate(vertices);
    }

    function makeBoxes() {
        var p0, p1, p2, xMin, xMax, yMin, yMax;

        for (var i = 0; i < indices.length; i += 3) {
            p0 = vertices[indices[i + 0]];
            p1 = vertices[indices[i + 1]];
            p2 = vertices[indices[i + 2]];

            xMin = Math.min(p0[0], p1[0], p2[0]);
            xMax = Math.max(p0[0], p1[0], p2[0]);
            yMin = Math.min(p0[1], p1[1], p2[1]);
            yMax = Math.max(p0[1], p1[1], p2[1]);

            boxes.push({
                x: xMin,
                y: yMin,
                w: xMax - xMin,
                h: yMax - yMin
            });
        }
    }

    function makeFragments() {
        var p0, p1, p2, box, fragment;
        switch (objanimatype) {
            case "111":
                TweenMax.set(container, { perspective: 500 });
                break;
            case "311":
                TweenMax.set(container, { perspective: 100 });
                break;
        }
        var tl0 = new TimelineMax({ repeat: 0 });

        for (var i = 0; i < indices.length; i += 3) {
            p0 = vertices[indices[i + 0]];
            p1 = vertices[indices[i + 1]];
            p2 = vertices[indices[i + 2]];
            box = boxes[i / 3];

            fragment = new Fragment(p0, p1, p2, box, image);

            var rx = randomRange(30, 60) * ((i % 2) ? 1 : -1);
            var ry = randomRange(30, 60) * ((i % 2) ? -1 : 1);
            var tl1 = new TimelineMax();

            //TweenMax.set(fragment.canvas, {
            //    y: box.y + 1000
            //});
            switch (objanimatype) {
                case "111":

                    tl1.to(fragment.canvas, 0.1, {
                        rotationX: rx - 20,
                        rotationY: ry - 30,
                        ease: Back.easeOut
                    });
                    tl1.to(fragment.canvas, 0.1, {
                        z: 50,
                        ease: Cubic.easeIn,
                        delay: 0.1
                    });
                    tl1.to(fragment.canvas, 0.1, {
                        rotationX: rx - randomRange(30, 60),
                        rotationY: ry - randomRange(30, 60),
                        z: 500,
                        alpha: 0,
                        ease: Cubic.easeOut
                    });
                    break;
                case "311":
                    tl1.to(fragment.canvas, 0.2, {
                        rotationX: rx - 20,
                        rotationY: ry - 20,
                        ease: Back.easeOut
                    });
                    tl1.to(fragment.canvas, 0.3, {
                        y: box.y + 20,
                        rotationX: rx - 30,
                        rotationY: ry - 30,
                        ease: Back.easeOut
                    });
                    tl1.to(fragment.canvas, 0.8, {
                        z: 10,
                        y: -100,
                        x: 210,
                        ease: Cubic.easeIn
                    });
                    tl1.to(fragment.canvas, 1, {
                        rotationX: rx - 30,
                        rotationY: ry - 30,
                        z: 10,
                        alpha: 0,
                        ease: Cubic.easeOut
                    });
                    break;
            }
            tl0.insert(tl1);

            fragments.push(fragment);
            container.appendChild(fragment.canvas);
        }
    }

    function randomRange(min, max) {
        return min + (max - min) * Math.random();
    }


}, Fragment = function (v0, v1, v2, box, image) {
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
    this.box = box;

    this.canvas = document.createElement('canvas');
    this.canvas.width = this.box.w;
    this.canvas.height = this.box.h;
    this.canvas.style.width = this.box.w + 'px';
    this.canvas.style.height = this.box.h + 'px';
    this.ctx = this.canvas.getContext('2d');

    TweenMax.set(this.canvas, {
        x: this.box.x,
        y: this.box.y
    });

    this.ctx.translate(-this.box.x, -this.box.y);
    this.ctx.beginPath();
    this.ctx.moveTo(this.v0[0], this.v0[1]);
    this.ctx.lineTo(this.v1[0], this.v1[1]);
    this.ctx.lineTo(this.v2[0], this.v2[1]);
    this.ctx.closePath();
    this.ctx.clip();
    this.ctx.drawImage(image, 0, 0);
}, SetGame = function () {
    framesindex = 1;
    var categoryhave = false;
    var isshowflag = false;
    var vtop = 0;
    var vleft = 0;
    var vcw = 0;
    var vch = 0;
    for (var i = 0; i < jsondata.length; i++) {
        if (jsondata[i].cateid == nowcategory) {
            $("#categoryid" + jsondata[i].cateid).show();
            categoryhave = true;
            for (var j = 0; j < jsondata[i].animation.length; j++) {
                if (jsondata[i].animation[j].animaid == nowanimation) {
                    animatype = jsondata[i].animation[j].animatype;
                    $("#animation" + nowcategory + "" + jsondata[i].animation[j].animaid).show();
                    isshowflag = jsondata[i].animation[j].aleradyshow;
                    vtop = jsondata[i].animation[j].textframes[0].top;
                    vleft = jsondata[i].animation[j].textframes[0].left;
                    nowcanvasw = vcw = jsondata[i].animation[j].textframes[0].canvasw;
                    nowcanvash = vch = jsondata[i].animation[j].textframes[0].canvash;
                    stranimatwidth = jsondata[i].animation[j].width;
                    stranimatheight = jsondata[i].animation[j].height;
                    vtop = parseInt(stranimatwidth / 750) * vtop
                    vleft = parseInt(stranimatwidth / 750) * vleft
                } else {
                    $("#animation" + nowcategory + "" + jsondata[i].animation[j].animaid).hide();
                }
            }
        } else {
            $("#categoryid" + jsondata[i].cateid).hide();
        }
    }
    var animtime = 40;
    switch (animatype) {
        case "111":
            animtime = 45;
            break;
        case "121":
            animtime = 50;
            break;
        case "131":
            animtime = 50;
            break;
        case "141":
            animtime = 50;
            break;
        case "151":
            animtime = 50;
            break;
        case "211":
            animtime = 80;
            break;
        case "221":
            animtime = 50;
            break;
        case "231":
            animtime = 50;
            break;
        case "311":
            animtime = 40;
            break;
        case "321":
            animtime = 50;
            break;
    }
    if (categoryhave)//如果该场景不存在，弹出提示
    {
        var c = document.getElementById("canvasv" + nowcategory + "" + nowanimation);
        var ctx = c.getContext("2d");
        var img = new Image();
        img.src = './category/' + nowcategory + '/animation/' + nowanimation + '/' + framesindex + '.jpg?v=1471428298';
        img.onload = function () //确保图片已经加载完毕  
        {
            ctx.drawImage(img, 0, 0, stranimatwidth, stranimatheight);
            if (!isshowflag) {
                var strn = "";
                if (animatype == "111") {
                    strn = '<div id="canvasdiv' + nowcategory + '' + nowanimation + '" class="abss" style="top:' + vtop + 'px;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;height:' + vch + 'px;display:none"><img src="" id="imgid' + nowcategory + '' + nowanimation + '" class="hidden">';
                    var strusersay = usersay;
                    if (strusersay.length < 12) {
                        for (var i = 0; i < 6; i++) {
                            strusersay = strusersay + " ";
                        }
                    }
                    strn += '<span class="textshow1">' + strusersay.substring(0, 1) + '<br />';
                    strn += '' + strusersay.substring(1, 2) + '</span>';
                    strn += '<span class="textshow2">' + strusersay.substring(2, 3) + '<br />';
                    strn += '' + strusersay.substring(3, 4) + '</span>';
                    strn += '<span class="textshow3">' + strusersay.substring(4, 5) + '<br />';
                    strn += '' + strusersay.substring(5, 6) + '</span>';
                    strn += '<span class="textshow4">' + strusersay.substring(6, 7) + '<br />';
                    strn += ' ' + strusersay.substring(7, 8) + '</span>';
                    strn += ' <span class="textshow5">' + strusersay.substring(8, 9) + '<br />';
                    strn += '' + strusersay.substring(9, 10) + '</span>';
                    strn += '<span class="textshow6">' + strusersay.substring(10, 11) + '<br />';
                    strn += '' + strusersay.substring(11, 12) + '</span>';
                    strn += '</div>';
                    strn += '<div id="container' + nowcategory + '' + nowanimation + '" class="abss" style="top:' + vtop + 'px;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;height:' + vch + 'px;display:none"></div>';
                    $("#categoryid" + nowcategory + " #animation" + nowcategory + "" + nowanimation).append(strn);
                    //CreateCanvasByText("canvasdiv" + nowcategory + '' + nowanimation, vcw, vch, false,nowcategory,nowanimation);
                    //SetCanvasToImage("canvast" + nowcategory + '' + nowanimation, nowcategory, nowanimation);

                    //SetTweenMax(vcw, vch, "container" + nowcategory + '' + nowanimation,nowcategory,nowanimation);
                    //setTimeout(function () {
                    //    TweenMax.pauseAll(true, true)
                    //}, 20);
                }
                else if (animatype == "121") {
                    strn = '<div id="canvasdiv' + nowcategory + '' + nowanimation + '" class="abss" style="top:' + vtop + 'px;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;height:' + vch + 'px;display:none">';
                    strn += '</div>';

                    strn += '<div id="container' + nowcategory + '' + nowanimation + '" class="abss letterrightdiv01moved" style="z-index:999;width:' + vcw + 'px;height:' + vch + 'px;">';
                    var strusersay = usersay;
                    for (var i = 1; i <= strusersay.length; i++) {
                        strn += '<div class="letter-rightdiv01 letter-rightdiv0' + i + '"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                    }
                    strn += '</div>';
                    $("#categoryid" + nowcategory + " #animation" + nowcategory + "" + nowanimation).append(strn);
                }
                else if (animatype == "131") {
                    var strusersay = usersay + "";
                    strn = '<div id="canvasdiv' + nowcategory + '' + nowanimation + '" class="abss" style="top:' + vtop + 'px;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;height:' + vch + 'px;display:none">';
                    strn += '</div>';
                    strn += '<div id="container' + nowcategory + '' + nowanimation + '" class="abss" style="z-index:999;width:' + vcw + 'px;height:' + vch + 'px;">';

                    for (var i = 1; i <= strusersay.length; i++) {
                        strn += '<div class="letter-rightdiv131 letter-rightdiv131_' + i + '"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                    }

                    strn += '</div>';
                    $("#categoryid" + nowcategory + " #animation" + nowcategory + "" + nowanimation).append(strn);
                }
                else if (animatype == "141") {
                    var strusersay = usersay + "";
                    strn = '<div id="canvasdiv' + nowcategory + '' + nowanimation + '" class="abss" style="top:' + vtop + 'px;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;height:' + vch + 'px;display:none">';
                    strn += '</div>';
                    strn += '<div id="container' + nowcategory + '' + nowanimation + '" class="abss" style="z-index:999;width:' + vcw + 'px;height:' + vch + 'px;">';
                    if (strusersay.length < 12) {
                        for (var i = 0; i < 6; i++) {
                            strusersay = strusersay + " ";
                        }
                    }
                    strn += '<div class="letterline141">' + strusersay.substring(0, 6) + '</div>';
                    strn += '<div class="letterline142">' + strusersay.substring(6, strusersay.length) + '</div>';

                    strn += '</div>';
                    $("#categoryid" + nowcategory + " #animation" + nowcategory + "" + nowanimation).append(strn);
                }
                else if (animatype == "151") {
                    var strusersay = usersay + "";
                    strn = '<div id="canvasdiv' + nowcategory + '' + nowanimation + '" class="abss" style="top:' + vtop + 'px;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;height:' + vch + 'px;display:none">';
                    strn += '</div>';
                    strn += '<div id="container' + nowcategory + '' + nowanimation + '" class="abss" style="z-index:999;width:' + vcw + 'px;height:' + vch + 'px;">';
                    if (strusersay.length < 12) {
                        for (var i = 0; i < 6; i++) {
                            strusersay = strusersay + " ";
                        }
                    }
                    strn += '<div class="letterline1511">' + strusersay.substring(0, 4) + '</div>';
                    strn += '<div class="letterline1512">' + strusersay.substring(4, 8) + '</div>';
                    strn += '<div class="letterline1513">' + strusersay.substring(8, 12) + '</div>';

                    strn += '</div>';
                    $("#categoryid" + nowcategory + " #animation" + nowcategory + "" + nowanimation).append(strn);
                }
                else if (animatype == "211") {
                    strn = '<div id="canvasdiv' + nowcategory + '' + nowanimation + '" class="abss" style="top:' + vtop + 'px;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;height:' + vch + 'px;display:none">';
                    strn += '</div>';

                    strn += '<div id="container' + nowcategory + '' + nowanimation + '" class="abss" style="top:' + vtop + 'px;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;height:' + vch + 'px;display:none">';
                    var strusersay = usersay;
                    if (strusersay.length < 12) {
                        for (var i = 0; i < 6; i++) {
                            strusersay = strusersay + "0";
                        }
                    }
                    for (var i = 1; i < 13; i++) {
                        if (i < 4) {
                            strn += '<div class="letter-rightdiv letter-rightdiv' + i + '"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                        } else {
                            if (i >= 4 && i < 7) {
                                if (i == 4) {
                                    strn += '<div class="letter-rightdiv letter-rightdiv7"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                }
                                else if (i == 5) {
                                    strn += '<div class="letter-rightdiv letter-rightdiv8"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                }
                                else if (i == 6) {
                                    strn += '<div class="letter-rightdiv letter-rightdiv9"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                }
                            } else if (i >= 7 && i <= 9) {
                                if (i == 7) {
                                    strn += '<div class="letter-rightdiv letter-rightdiv4"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                }
                                else if (i == 8) {
                                    strn += '<div class="letter-rightdiv letter-rightdiv5"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                } else if (i == 9) {
                                    strn += '<div class="letter-rightdiv letter-rightdiv6"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                }
                            }
                            else if (i >= 10 && i <= 12) {
                                strn += '<div class="letter-rightdiv letter-rightdiv' + i + '"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                            }
                        }
                    }
                    strn += '</div>';
                    $("#categoryid" + nowcategory + " #animation" + nowcategory + "" + nowanimation).append(strn);
                }
                else if (animatype == "221") {
                    var strusersay = usersay + "";
                    strn = '<div id="canvasdiv' + nowcategory + '' + nowanimation + '" class="abss" style="top:' + vtop + 'px;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;height:' + vch + 'px;display:none">';
                    strn += '</div>';
                    strn += '<div id="container' + nowcategory + '' + nowanimation + '" class="abss" style="z-index:999;width:' + vcw + 'px;height:' + vch + 'px;">';
                    if (strusersay.length < 12) {
                        for (var i = 0; i < 6; i++) {
                            strusersay = strusersay + " ";
                        }
                    }
                    strn += '<div class="letterlines1">' + strusersay.substring(0, 1) + '</div>';
                    strn += '<div class="letterlines2">' + strusersay.substring(1, 2) + '</div>';
                    strn += '<div class="letterlines3">' + strusersay.substring(2, 3) + '</div>';
                    strn += '<div class="letterlines4">' + strusersay.substring(3, 4) + '</div>';
                    strn += '<div class="letterlines5">' + strusersay.substring(4, 5) + '</div>';
                    strn += '<div class="letterlines6">' + strusersay.substring(5, 6) + '</div>';
                    strn += '<div class="letterlines7">' + strusersay.substring(6, 7) + '</div>';
                    strn += '<div class="letterlines8">' + strusersay.substring(7, 8) + '</div>';
                    strn += '<div class="letterlines9">' + strusersay.substring(8, 9) + '</div>';
                    strn += '<div class="letterlines10">' + strusersay.substring(9, 10) + '</div>';
                    strn += '<div class="letterlines11">' + strusersay.substring(10, 11) + '</div>';
                    strn += '<div class="letterlines12">' + strusersay.substring(11, 12) + '</div>';
                    strn += '</div>';
                    $("#categoryid" + nowcategory + " #animation" + nowcategory + "" + nowanimation).append(strn);
                }
                else if (animatype == "231") {
                    strn = '<div id="canvasdiv' + nowcategory + '' + nowanimation + '" class="abss" style="top:' + vtop + 'px;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;height:' + vch + 'px;display:none">';
                    strn += '</div>';

                    strn += '<div id="container' + nowcategory + '' + nowanimation + '" class="abss" style="bottom:150px;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;overflow: hidden;">';
                    var strusersay = usersay;
                    if (strusersay.length < 12) {
                        for (var i = 0; i < 6; i++) {
                            strusersay = strusersay + " ";
                        }
                    }
                    for (var i = 1; i < 13; i++) {
                        strn += '<div class="letter-rightdiv231 letter-rightdiv231_' + i + '"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                    }
                    strn += '</div>';
                    $("#categoryid" + nowcategory + " #animation" + nowcategory + "" + nowanimation).append(strn);
                }
                else if (animatype == "311") {
                    strn = '<div id="canvasdiv' + nowcategory + '' + nowanimation + '" class="abss" style="top:-500px;opacity:0;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;height:' + vch + 'px;display:none"><img src="" id="imgid' + nowcategory + '' + nowanimation + '" class="hidden"><img src="" id="imgcolorid' + nowcategory + '' + nowanimation + '" class="hidden"></div>';

                    strn += '<div id="container' + nowcategory + '' + nowanimation + '" class="abss" style="top:' + vtop + 'px;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;height:' + vch + 'px;display:none"></div>';
                    $("#categoryid" + nowcategory + " #animation" + nowcategory + "" + nowanimation).append(strn);
                    CreateCanvasByText("canvasdiv" + nowcategory + '' + nowanimation, vcw, vch, false, nowcategory, nowanimation, animatype);
                    SetCanvasToImage("canvast" + nowcategory + '' + nowanimation, nowcategory, nowanimation);

                    CreateCanvasByText("canvasdiv" + nowcategory + '' + nowanimation, vcw, vch, true, nowcategory, nowanimation, animatype);
                    SetCanvasToImage("canvastcolor" + nowcategory + '' + nowanimation, nowcategory, nowanimation);


                    SetTweenMax(vcw, vch, "container" + nowcategory + '' + nowanimation, nowcategory, nowanimation, animatype);
                    setTimeout(function () {
                        TweenMax.pauseAll(true, true)
                    }, 10);
                }
                else if (animatype == "321") {
                    var strusersay = usersay + "";
                    strn = '<div id="canvasdiv' + nowcategory + '' + nowanimation + '" class="abss" style="top:' + vtop + 'px;left:' + vleft + 'px;z-index:999;width:' + vcw + 'px;height:' + vch + 'px;display:none">';
                    strn += '</div>';
                    var vtoppp = 0;
                    vtoppp = vtop - tttop - 30;
                    strn += '<div id="container' + nowcategory + '' + nowanimation + '" class="abss" style="z-index:999;top:' + vtoppp + 'px;width:' + vcw + 'px;height:' + vch + 'px;display:none;">';
                    if (strusersay.length < 12) {
                        for (var i = 0; i < 6; i++) {
                            strusersay = strusersay + " ";
                        }
                    }
                    strn += '<div class="letterline1">' + strusersay.substring(0, 6) + '</div>';
                    strn += '<div class="letterline2">' + strusersay.substring(6, strusersay.length) + '</div>';

                    strn += '</div>';
                    $("#categoryid" + nowcategory + " #animation" + nowcategory + "" + nowanimation).append(strn);
                }
                isshowflag = true;
            } else {
                funresetgame(false);
            }
            if (!isloading) {
                for (var i = 0; i < jsondata.length; i++) {
                    if (jsondata[i].cateid == nowcategory) {
                        for (var j = 0; j < jsondata[i].animation.length; j++) {
                            if (jsondata[i].animation[j].animaid == nowanimation) {
                                jsondata[i].animation[j].aleradyshow = true;
                                frames = jsondata[i].animation[j].frames;
                                break;
                            }
                        }
                    }
                }
                loadingPageHide();
                var loopimgindex = 0;
                Ingame = setInterval(function () {
                    framesindex = framesindex + 1;
                    if (framesindex < frames) {
                        img.src = './category/' + nowcategory + '/animation/' + nowanimation + '/' + framesindex + '.jpg?v=1471428298';
                        img.onload = function () //确保图片已经加载完毕  
                        {
                            ctx.drawImage(img, 0, 0, stranimatwidth, stranimatheight);
                        }
                        switch (animatype) {
                            case "111":
                                switch (framesindex) {
                                    case 61:
                                        $("#canvasdiv" + nowcategory + '' + nowanimation).show();
                                        for (var i = 1; i < 7; i++) {
                                            $(".textshow" + i).addClass("textshow" + i + "_71").addClass("textshowopacity");
                                        }
                                        break;
                                    case 71:
                                        for (var i = 1; i < 7; i++) {
                                            $(".textshow" + i).removeClass("textshow" + i + "_71").addClass("textshow" + i + "_81");
                                        }
                                        break;
                                    case 81:
                                        for (var i = 1; i < 7; i++) {
                                            $(".textshow" + i).removeClass("textshow" + i + "_81").addClass("textshow" + i + "_91");
                                        }
                                        break;
                                    case 91:
                                        for (var i = 1; i < 7; i++) {
                                            $(".textshow" + i).removeClass("textshow" + i + "_91").addClass("textshow" + i + "_101");
                                        }
                                        break;
                                    case 101:
                                        for (var i = 1; i < 7; i++) {
                                            $(".textshow" + i).removeClass("textshow" + i + "_101").addClass("textshow" + i + "_111");
                                        }
                                        break;
                                    case 111:
                                        for (var i = 1; i < 7; i++) {
                                            $(".textshow" + i).removeClass("textshow" + i + "_111").addClass("textshow" + i + "_121");
                                        }
                                        break;
                                    case 122:
                                        //$("#container" + nowcategory + '' + nowanimation).show();
                                        for (var i = 1; i < 7; i++) {
                                            $(".textshow" + i).removeClass("textshow" + i + "_121");
                                        }
                                        //setTimeout(function () {
                                        //    $("#container" + nowcategory + '' + nowanimation).addClass("containertextscan");
                                        //}, 30);
                                        //setTimeout(function () {
                                        //    $("#container" + nowcategory + '' + nowanimation).removeClass("containertextscan").addClass("containertextscanhide");
                                        //}, 50);
                                        break;
                                    case 124:
                                        $("#canvasdiv" + nowcategory + '' + nowanimation).hide();
                                        break;
                                }
                                break;
                            case "121":
                                //if (framesindex == 25) {
                                //    $("#container" + nowcategory + '' + nowanimation).show();
                                //}
                                //else
                                if (framesindex == 31) {
                                    $("#container" + nowcategory + '' + nowanimation).addClass("letterrightdiv01move");
                                }
                                break;
                            case "131":
                                if (framesindex == 11) {
                                    $("#container" + nowcategory + '' + nowanimation).addClass("animation131_11");
                                }
                                else if (framesindex == 12) {
                                    $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_11").addClass("animation131_12");
                                }
                                else if (framesindex == 13) {
                                    $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_12").addClass("animation131_13");
                                }
                                else if (framesindex == 14) {
                                    $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_13").addClass("animation131_14");
                                }
                                else if (framesindex == 15) {
                                    $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_14").addClass("animation131_15");
                                }
                                else if (framesindex == 16) {
                                    $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_15").addClass("animation131_16");
                                }
                                else if (framesindex == 103) {
                                    $("#container" + nowcategory + '' + nowanimation + " .letterleftdd").addClass("letter131leftddroute");
                                    $("#container" + nowcategory + '' + nowanimation + " .letterrightdd").addClass("letter131rightddroute");
                                }
                                break;
                            case "141":
                                if (framesindex >= 56 && framesindex <= 109) {
                                    $("#container" + nowcategory + '' + nowanimation).removeClass("container14_" + parseInt(framesindex - 1)).addClass("container14_" + framesindex);
                                }
                                break;
                            case "151":
                                if (framesindex >= 9 && framesindex <= 37) {
                                    $("#container" + nowcategory + '' + nowanimation + " .letterline1511").removeClass("animation151_" + parseInt(framesindex - 1)).addClass("animation151_" + framesindex);
                                }
                                else if (framesindex >= 69 && framesindex <= 123) {
                                    $("#container" + nowcategory + '' + nowanimation + " .letterline1512").removeClass("animation151_" + parseInt(framesindex - 1)).addClass("animation151_" + framesindex);
                                }
                                else if (framesindex >= 154 && framesindex <= 221) {
                                    $("#container" + nowcategory + '' + nowanimation + " .letterline1513").removeClass("animation151_" + parseInt(framesindex - 1)).addClass("animation151_" + framesindex);
                                }
                                break;
                            case "211":
                                var showframe = new Array();
                                switch (framesindex) {
                                    case 39:
                                        $("#container" + nowcategory + '' + nowanimation).show();
                                        showframe.push(1);
                                        break;
                                    case 49:
                                        if (loopimgindex == 49) {
                                            if ($(".letter-rightdiv11 span").html() != "0") {
                                                loopimgindex = 57;
                                                showframe.push(11);
                                            } else {
                                                framesindex = 116;
                                            }
                                        }
                                        else {
                                            showframe.push(2);
                                        }
                                        break;
                                    case 57:
                                        if (loopimgindex == 57) {
                                            if ($(".letter-rightdiv12 span").html() != "0") {
                                                showframe.push(12);
                                                loopimgindex = 100;
                                            } else {
                                                framesindex = 116;
                                            }
                                        }
                                        else {
                                            showframe.push(3);
                                        }
                                        break;
                                    case 60:
                                        if (loopimgindex == 100) {
                                            framesindex = 116;
                                            loopimgindex = 0;
                                        }
                                        break;
                                    case 64:
                                        if ($(".letter-rightdiv7 span").html() != "0") {
                                            showframe.push(7);
                                        } else {
                                            framesindex = 116;
                                        }
                                        break;
                                    case 74:
                                        if ($(".letter-rightdiv8 span").html() != "0") {
                                            showframe.push(8);
                                        } else {
                                            framesindex = 116;
                                        }
                                        break;
                                    case 83:
                                        if ($(".letter-rightdiv9 span").html() != "0") {
                                            showframe.push(9);
                                        } else {
                                            framesindex = 116;
                                        }
                                        break;
                                    case 89:
                                        if ($(".letter-rightdiv4 span").html() != "0") {
                                            showframe.push(4);
                                        } else {
                                            framesindex = 116;
                                        }
                                        break;
                                    case 97:
                                        if ($(".letter-rightdiv5 span").html() != "0") {
                                            showframe.push(5);
                                        } else {
                                            framesindex = 116;
                                        }
                                        break;
                                    case 105:
                                        if ($(".letter-rightdiv6 span").html() != "0") {
                                            showframe.push(6);
                                        } else {
                                            framesindex = 116;
                                        }
                                        break;
                                    case 111:
                                        if ($(".letter-rightdiv10 span").html() != "0") {
                                            showframe.push(10);
                                        } else {
                                            framesindex = 116;
                                        }
                                        break;
                                    case 115:
                                        if ($(".letter-rightdiv8 span").html() != "0") {
                                            loopimgindex = 49;
                                            framesindex = 48;
                                        }
                                        break;
                                }
                                if (showframe != null) {
                                    for (var i = 0; i < showframe.length; i++) {
                                        $(".letter-rightdiv" + showframe[i] + " span").addClass("letter-righttop");
                                    }
                                    setTimeout(function () {
                                        for (var i = 0; i < showframe.length; i++) {
                                            $(".letter-rightdiv" + showframe[i] + " .letterleftdd").addClass("letterleftdivsmall");
                                            $(".letter-rightdiv" + showframe[i] + " .letterrightdd").addClass("letterrightdivsmall");
                                        }
                                        setTimeout(function () {
                                            for (var i = 0; i < showframe.length; i++) {
                                                $(".letter-rightdiv" + showframe[i] + " span").removeClass("letter-righttop").addClass("letter-rightbottom");
                                            }
                                        }, 250);
                                    }, 500);
                                }
                                break;
                            case "221":
                                if (framesindex >= 6 && framesindex <= 15) {
                                    $("#container" + nowcategory + '' + nowanimation).removeClass("animation221_" + parseInt(framesindex - 1)).addClass("animation221_" + framesindex);
                                } else if (framesindex >= 67 && framesindex <= 74) {
                                    $("#container" + nowcategory + '' + nowanimation).removeClass("animation221_15");
                                    $("#container" + nowcategory + '' + nowanimation).removeClass("animation221_" + parseInt(framesindex - 1)).addClass("animation221_" + framesindex);
                                }
                                else if (framesindex == 75) {
                                    $("#container" + nowcategory + '' + nowanimation).removeClass("animation221_74").addClass("animation221opacity");
                                }
                                break;
                            case "231":
                                if (framesindex == 25) {
                                    $("#container" + nowcategory + '' + nowanimation).addClass("containerheight231");
                                }
                                else if (framesindex == 98) {
                                    for (var i = 1; i < 13; i++) {
                                        $("#container" + nowcategory + '' + nowanimation + " .letter-rightdiv231_" + i + " .letterleftdd").addClass("letterleftddroute");
                                        $("#container" + nowcategory + '' + nowanimation + " .letter-rightdiv231_" + i + " .letterrightdd").addClass("letterrightddroute");
                                    }
                                }
                                break;
                            case "311"://足球冲出宇宙
                                if (framesindex == 55)//显示文字
                                {
                                    $("#canvasdiv" + nowcategory + '' + nowanimation).show();
                                    $("#canvasdiv" + nowcategory + '' + nowanimation).animate({ "opacity": "1", "top": "500px" }, 800, "", function () { });
                                }
                                else if (framesindex == 90)//文字炸裂
                                {
                                    //setTimeout(function () {
                                    //    TweenMax.resumeAll(true, true);
                                    //}, 30);
                                    $("#canvasdiv" + nowcategory + '' + nowanimation).css({ "opacity": "0", "top": "-500px" }).hide();
                                    $("#container" + nowcategory + '' + nowanimation).show();
                                    setTimeout(function () {
                                        $("#container" + nowcategory + '' + nowanimation).addClass("containertextscanhide");
                                    }, 100);
                                    //setTimeout(function () {
                                    //    $("#container" + nowcategory + '' + nowanimation).removeClass("containertextscan").addClass("containertextscanhide");
                                    //}, 200);
                                }
                                break;
                            case "321":
                                //if (framesindex == 25) {
                                //    $("#container" + nowcategory + '' + nowanimation).show();
                                //}
                                //else
                                if (framesindex == 80) {
                                    $("#container" + nowcategory + '' + nowanimation).show();
                                }
                                else if (framesindex == 125) {
                                    $("#container" + nowcategory + '' + nowanimation).hide();
                                }
                                break;
                        }
                    } else {
                        if (framesindex >= frames) {
                            if (!isgameove)//如果没有点击下一步，动画loop,否则重新 播放动画，进入结果页
                            {
                                //动画结束，继续loop
                                funresetgame(false);
                            } else {
                                funresetgame(true);
                                //funresetgame(false);
                                funplayresult(true);
                                buttonflag = false;
                            }
                        }
                    }
                }, animtime);
            }
        }
    } else {
        $('.pagealertother .pagealerttext').html("该场景暂未开放");
        $('.pagealertother').show();
    }
}
function funresetgame(objgameoverflag) {
    if (objgameoverflag) {
        clearInterval(Ingame);
        framesindex = 1;
        switch (animatype) {
            case "111":
                //TweenMax.killAll(true, true, true);
                $("#container" + nowcategory + "" + nowanimation).hide();
                //$("#container" + nowcategory + '' + nowanimation).removeClass("containertextscanhide");
                for (var i = 1; i < 7; i++) {
                    $(".textshow" + i).removeClass("textshowopacity");
                    $(".textshow" + i).removeClass("textshow" + i + "_71");
                    $(".textshow" + i).removeClass("textshow" + i + "_81");
                    $(".textshow" + i).removeClass("textshow" + i + "_91");
                    $(".textshow" + i).removeClass("textshow" + i + "_101");
                    $(".textshow" + i).removeClass("textshow" + i + "_111");
                    $(".textshow" + i).removeClass("textshow" + i + "_121");
                }
                break;
            case "121":
                $("#container" + nowcategory + "" + nowanimation).removeClass("letterrightdiv01move");
                break;
            case "131":
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_11");
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_12");
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_13");
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_14");
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_15");
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_16");
                $("#container" + nowcategory + '' + nowanimation + " .letterleftdd").removeClass("letter131leftddroute");
                $("#container" + nowcategory + '' + nowanimation + " .letterrightdd").removeClass("letter131rightddroute");
                break;
            case "141":
                for (var i = 56; i <= 109; i++) {
                    $("#container" + nowcategory + '' + nowanimation).removeClass("container14_" + i);
                }
                break;
            case "151":
                for (var i = 9; i <= 37; i++) {
                    $("#container" + nowcategory + '' + nowanimation + " .letterline1511").removeClass("animation151_" + i);
                }
                for (var i = 69; i <= 123; i++) {
                    $("#container" + nowcategory + '' + nowanimation + " .letterline1512").removeClass("animation151_" + i);
                }
                for (var i = 154; i <= 221; i++) {
                    $("#container" + nowcategory + '' + nowanimation + " .letterline1513").removeClass("animation151_" + i);
                }
                break;
            case "211":
                loopimgindex = 0;
                var showframe = new Array();
                showframe.push(1);
                showframe.push(2);
                showframe.push(3);
                showframe.push(4);
                showframe.push(5);
                showframe.push(6);
                showframe.push(7);
                showframe.push(8);
                showframe.push(9);
                showframe.push(10);
                showframe.push(11);
                showframe.push(12);
                for (var i = 0; i < showframe.length; i++) {
                    $(".letter-rightdiv" + showframe[i] + " span").removeClass("letter-righttop");
                    $(".letter-rightdiv" + showframe[i] + " .letterleftdd").removeClass("letterleftdivsmall");
                    $(".letter-rightdiv" + showframe[i] + " .letterrightdd").removeClass("letterrightdivsmall");
                    $(".letter-rightdiv" + showframe[i] + " span").removeClass("letter-rightbottom");
                }
                $("#container" + nowcategory + "" + nowanimation).hide();
                break;
            case "221":
                for (var i=6;i<=15;i++) {
                    $("#container" + nowcategory + '' + nowanimation).removeClass("animation221_" + i);
                } 
                for (var i=67;i<=74;i++) {
                    $("#container" + nowcategory + '' + nowanimation).removeClass("animation221_" + i);
                }
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation221opacity");
                break;
            case "231":
                $("#container" + nowcategory + '' + nowanimation).removeClass("containerheight231");
                $("#container" + nowcategory + '' + nowanimation + " .letterleftdd").removeClass("letterleftddroute");
                $("#container" + nowcategory + '' + nowanimation + " .letterrightdd").removeClass("letterrightddroute");
                break;
            case "311":
                TweenMax.killAll(true, true, true);
                $("#canvasdiv" + nowcategory + '' + nowanimation).hide();
                $("#canvast" + nowcategory + '' + nowanimation).show();
                $("#canvastcolor" + nowcategory + '' + nowanimation).hide();
                $("#container" + nowcategory + '' + nowanimation).hide();
                $("#container" + nowcategory + "" + nowanimation).html("").hide();
                $("#canvasdiv" + nowcategory + '' + nowanimation).css({ "opacity": "0", "top": "-500px" }).hide();
                $("#container" + nowcategory + '' + nowanimation).removeClass("containertextscan").removeClass("containertextscanhide");
                break;
            case "321":
                $("#container" + nowcategory + "" + nowanimation).hide();
                break;
        }
    } else {
        framesindex = 1;
        switch (animatype) {
            case "111":
                $("#container" + nowcategory + "" + nowanimation).html("").hide();
                //SetTweenMax(nowcanvasw, nowcanvash, "container" + nowcategory + '' + nowanimation,nowcategory,nowanimation);
                //$("#container" + nowcategory + '' + nowanimation).removeClass("containertextscanhide");
                for (var i = 1; i < 7; i++) {
                    $(".textshow" + i).removeClass("textshowopacity");
                    $(".textshow" + i).removeClass("textshow" + i + "_71");
                    $(".textshow" + i).removeClass("textshow" + i + "_81");
                    $(".textshow" + i).removeClass("textshow" + i + "_91");
                    $(".textshow" + i).removeClass("textshow" + i + "_101");
                    $(".textshow" + i).removeClass("textshow" + i + "_111");
                    $(".textshow" + i).removeClass("textshow" + i + "_121");
                }
                //setTimeout(function () {
                //    TweenMax.pauseAll(true, true)
                //}, 10);
                break;
            case "121":
                $("#container" + nowcategory + "" + nowanimation).removeClass("letterrightdiv01move");
                break;
            case "131":
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_11");
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_12");
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_13");
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_14");
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_15");
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation131_16");
                $("#container" + nowcategory + '' + nowanimation + " .letterleftdd").removeClass("letter131leftddroute");
                $("#container" + nowcategory + '' + nowanimation + " .letterrightdd").removeClass("letter131rightddroute");
                break;
            case "141":
                for (var i = 56; i <= 109; i++) {
                    $("#container" + nowcategory + '' + nowanimation).removeClass("container14_" + i);
                }
                break;
            case "151":
                for (var i = 9; i <= 37; i++) {
                    $("#container" + nowcategory + '' + nowanimation + " .letterline1511").removeClass("animation151_" + i);
                }
                for (var i = 69; i <= 123; i++) {
                    $("#container" + nowcategory + '' + nowanimation + " .letterline1512").removeClass("animation151_" + i);
                }
                for (var i = 154; i <= 221; i++) {
                    $("#container" + nowcategory + '' + nowanimation + " .letterline1513").removeClass("animation151_" + i);
                }
                break;
            case "211":
                loopimgindex = 0;
                var showframe = new Array();
                showframe.push(1);
                showframe.push(2);
                showframe.push(3);
                showframe.push(4);
                showframe.push(5);
                showframe.push(6);
                showframe.push(7);
                showframe.push(8);
                showframe.push(9);
                showframe.push(10);
                showframe.push(11);
                showframe.push(12);
                for (var i = 0; i < showframe.length; i++) {
                    $(".letter-rightdiv" + showframe[i] + " span").removeClass("letter-righttop");
                    $(".letter-rightdiv" + showframe[i] + " .letterleftdd").removeClass("letterleftdivsmall");
                    $(".letter-rightdiv" + showframe[i] + " .letterrightdd").removeClass("letterrightdivsmall");
                    $(".letter-rightdiv" + showframe[i] + " span").removeClass("letter-rightbottom");
                }
                $("#container" + nowcategory + "" + nowanimation).hide();
                break;
            case "221":
                for (var i = 6; i <= 15; i++) {
                    $("#container" + nowcategory + '' + nowanimation).removeClass("animation221_" + i);
                }
                for (var i = 67; i <= 74; i++) {
                    $("#container" + nowcategory + '' + nowanimation).removeClass("animation221_" + i);
                }
                $("#container" + nowcategory + '' + nowanimation).removeClass("animation221opacity");
                break;
            case "231":
                $("#container" + nowcategory + '' + nowanimation).removeClass("containerheight231");
                $("#container" + nowcategory + '' + nowanimation + " .letterleftdd").removeClass("letterleftddroute");
                $("#container" + nowcategory + '' + nowanimation + " .letterrightdd").removeClass("letterrightddroute");
                break;
            case "311":
                $("#canvasdiv" + nowcategory + '' + nowanimation).hide();
                $("#canvast" + nowcategory + '' + nowanimation).show();
                $("#canvastcolor" + nowcategory + '' + nowanimation).hide();
                $("#container" + nowcategory + '' + nowanimation).hide();
                $("#container" + nowcategory + "" + nowanimation).html("").hide();
                $("#canvasdiv" + nowcategory + '' + nowanimation).css({ "opacity": "0", "top": "-500px" }).hide();
                $("#container" + nowcategory + '' + nowanimation).removeClass("containertextscan").removeClass("containertextscanhide");
                SetTweenMax(nowcanvasw, nowcanvash, "container" + nowcategory + '' + nowanimation, nowcategory, nowanimation, animatype);
                setTimeout(function () {
                    TweenMax.pauseAll(true, true)
                }, 10);
                break;
            case "321":
                $("#container" + nowcategory + "" + nowanimation).hide();
                break;
        }
    }
}
//wxjs.js
var sharefriendData = {
    title: '你 不信极限',
    desc: '你不信极限！那就来挑战吧！',
    link: location.href.split('#')[0],
    imgUrl: cloc + "img/share.jpg"
};

var sharetimelineData = {
    title: '你不信极限！那就来挑战吧！',
    desc: '你不信极限！那就来挑战吧！',
    link: location.href.split('#')[0],
    imgUrl: cloc + "img/share.jpg"
};
var callbackShare = true;
var wxurl = location.href.split('#')[0];
function wxconfig(config, apilist) {
    if (!apilist) apilist = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo'];
    if (config && config.appId && config.timestamp && config.nonceStr && config.signature) {
        wx.config({
            debug: false,
            appId: config.appId,
            timestamp: config.timestamp,
            nonceStr: config.nonceStr,
            signature: config.signature,
            jsApiList: apilist
        });
    }
    else {
        $.ajax({
            type: "GET",
            url: " /api/component/wechat/share",
            //url: "http://jordan.akqatest.cn/api/component/wechat/share",
            async: true,
            dataType: "json",
            data: { "url": wxurl },
            success: function (datas) {
                var data = datas.data;
                if (data) {
                    if (data.appId && data.timestamp && data.nonceStr && data.signature) {
                        //console.log(data.appId + "_" + data.timestamp + "_" + data.nonceStr + "_" + data.signature)
                        wx.config({
                            debug: false,
                            appId: data.appId,
                            timestamp: data.timestamp,
                            nonceStr: data.nonceStr,
                            signature: data.signature,
                            jsApiList: apilist
                        });
                    }
                    else {
                        //console.log(data);
                        // alert(data.error);
                    }
                }
            },
            error: function (xhr, msg, exc) {
                //alert("生成微信签名失败，请重试！");
            }
        });
    }
}

function wxevent(data1, data2) {
    if (!data1 || data1 == undefined || data1 == null) data1 = sharefriendData;
    if (!data2 || data2 == undefined || data2 == null) data2 = sharetimelineData;
    // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareAppMessage({
        title: sharefriendData.title,
        desc: sharefriendData.desc,
        link: sharefriendData.link,
        imgUrl: sharefriendData.imgUrl,
        trigger: function (res) {
            //alert('用户点击发送给朋友');
            //if (callbackShare && isFunction(shareCallback)) shareCallback();
        },
        success: function (res) {
            //_hmt.push(['_trackEvent', 'button', 'click', '分享到好友']);
            //alert('已分享');
            //if (callbackShare && isFunction(shareCallback)) shareCallback();

        },
        cancel: function (res) {
            //alert('已取消');
            //if (callbackShare && isFunction(shareCallback)) shareCallback();
        },
        fail: function (res) {
            //alert(JSON.stringify(res));
            //if (callbackShare && isFunction(shareCallback)) shareCallback();
        }
    });
    // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
    wx.onMenuShareTimeline({
        title: sharetimelineData.desc,
        link: sharetimelineData.link,
        imgUrl: sharetimelineData.imgUrl,
        trigger: function (res) {
            //alert('用户点击分享到朋友圈');
            //if (callbackShare && isFunction(shareCallback)) shareCallback();
        },
        success: function (res) {
            // _hmt.push(['_trackEvent', 'button', 'click', '分享到朋友圈']);
            //alert('已分享');
            //if (callbackShare && isFunction(shareCallback)) shareCallback();
        },
        cancel: function (res) {
            //alert('已取消');
            //if (callbackShare && isFunction(shareCallback)) shareCallback();
        },
        fail: function (res) {
            //alert(JSON.stringify(res));
            //if (callbackShare && isFunction(shareCallback)) shareCallback();
        }
    });
}
wx.ready(function () { wxevent(); });
wx.error(function (res) {
    // falsealert(JSON.stringify(res));
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
});
var loader = new PxLoader(); var loader2 = new PxLoader(); var loader3 = new PxLoader(); isloading = true;
var lazyNode;

var nav = window.navigator,
    ua = nav.userAgent;
var isios = /iPhone|iPod|iPad/i.test(ua);
var isios7 = /iPhone|iPod/i.test(ua) && parseInt(navigator.appVersion.match(/OS (\d)/)[1], 10) >= 7;
//var isTouch = "ontouchend" in document ? true : false;
var isTouch = false;
var isFunction = (function () { return "object" === typeof document.getElementById ? isFunction = function (fn) { try { return /^\s*\bfunction\b/.test("" + fn); } catch (x) { return false } } : isFunction = function (fn) { return "[object Function]" === Object.prototype.toString.call(fn); }; })()
pad = function (tbl) { return function (num, n) { return (0 >= (n = n - num.toString().length)) ? num : (tbl[n] || (tbl[n] = Array(n + 1).join(0))) + num; } }([]);
function blockmove(timeout) {
    if (!timeout) timeout = animspeed;
    if (!DNmove) {
        DNmove = true;
        setTimeout(function () { DNmove = false; }, timeout);
        return true;
    } else return false;
}


function nodeeach() {
    var self = $(this),
        srcImg = self.attr('data-bk');
    if (self.is('img')) {
    } else {
        self.css({
        })
    }
    var pxImage = new PxLoaderImage(srcImg);
    pxImage.obj = self;
    loader.add(pxImage);
    self.removeClass('lazy-bk');
}
loader.addProgressListener(function (e) {
    var self = e.resource.obj;
    if (self) {
        var srcImg = self.attr('data-bk');
        if (self.is('img')) {
            self.attr('src', srcImg)
        } else {
            self.css({
                'background-image': 'url(' + srcImg + ')'
                //, 'background-size': 'auto'
            })
        }
    }
});
loader.addCompletionListener(function () { isloading = false; });

function preload(nodes, callback, args, exts, hideloading, notshowloading) {
    if ((nodes && nodes.length > 0) || (exts && exts.length > 0)) {
        if (notshowloading !== true)
            //loadingPageShow();
            isloading = true;
        if (nodes && nodes.length > 0)
            nodes.each(nodeeach);
        if (exts && exts.length > 0) {
            var len = exts.length;
            for (var i = 0; i < len; i++) {
                var pxImage = new PxLoaderImage(exts[i]);
                loader.add(pxImage);
            }
        }
        loader.start();
        if (isloading) {
            var selfinterval = setInterval(function () {
                if (isloading) return;
                else {
                    clearInterval(selfinterval); selfinterval = null;
                    callback(args);
                    if (!(hideloading != undefined && !hideloading))
                        loadingPageHide();
                }
            }, 200);
        } else {
            callback(args);
            if (!(hideloading != undefined && !hideloading))
                loadingPageHide();
        }
    }
    else {
        callback(args);
        if (!(hideloading != undefined && !hideloading))
            loadingPageHide();
    }
}

function getUrlParam(name) {
    var strparam = "";
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        for (var i = 0; i <= decodeURIComponent(r[2]).length; i++) {
            strparam = strparam + decodeURIComponent(r[2]).substr(i, 1).replace(pattern, '');
        }
        return strparam;
    }
    return "";
}

//修复ios8双击上移问题
//var doubleTouchStartTimestamp = 0;
//document.addEventListener("touchstart", function (event) {
//    var now = +(new Date());
//    if (doubleTouchStartTimestamp + 500 > now) {
//        event.preventDefault();
//    }
//    doubleTouchStartTimestamp = now;
//});
function funsetcategorywidth(vobjanimationtype) {
    switch (vobjanimationtype) {
        case "111":
            $(".bottomcategory").css("left", "0px");
            break;
        case "121":
            $(".bottomcategory").css("left", "0px");
            break;
        case "131":
            $(".bottomcategory").css("left", "0px");
            break;
        case "141":
            $(".bottomcategory").css("left", "0px");
            break;
        case "151":
            $(".bottomcategory").css("left", "0px");
            break;
        case "211":
            $(".bottomcategory").css("left", "0px");
            break;
        case "221":
            $(".bottomcategory").css("left", "-136px");
            break;
        case "231":
            $(".bottomcategory").css("left", "-250px");
            break;
        case "311":
            $(".bottomcategory").css("left", "-370px");
            break;
        case "321":
            $(".bottomcategory").css("left", "-455px");
            break;
    }
}
function blockhanlder(e) {
    //e.stopPropagation();
    e.preventDefault();
    return false;
}
function blockpagemove() {
    document.body.addEventListener('touchmove', blockhanlder);
}
function removeblockpagemove() {
    document.body.removeEventListener('touchmove', blockhanlder);
}
var Inloadingl;
var loadingbarwidth = 0;
var bigloadingbarwidth = 0;
function loadingPageShow() {
    if (Inloadingl) {
        clearInterval(Inloadingl);
    }
    loadingbarwidth = 0;
    bigloadingbarwidth = Math.floor(Math.random() * 100) + 600;
    $(".loadingbar").width(loadingbarwidth);
    $(".pageLoading .tn").html(Math.floor((loadingbarwidth / 750) * 100) + "%");
    $('.pageLoading').show();
    Inloadingl = setInterval(function () {
        loadingbarwidth = loadingbarwidth + 10;
        if (loadingbarwidth >= bigloadingbarwidth) {
            clearInterval(Inloadingl);
        }
        $(".loadingbar").width(loadingbarwidth);
        $(".pageLoading .tn").html(Math.floor((loadingbarwidth / 750) * 100) + "%");
    }, 10);
}

function loadingPageHide() {
    if (Inloadingl) {
        clearInterval(Inloadingl);
    }
    Inloadingl = setInterval(function () {
        loadingbarwidth = loadingbarwidth + 50;
        if (loadingbarwidth >= 750) {
            loadingbarwidth = 750;
            clearInterval(Inloadingl);
            $(".loadingbar").width(loadingbarwidth);
            $(".pageLoading .tn").html(Math.floor((loadingbarwidth / 750) * 100) + "%");
            setTimeout(function () {
                $('.pageLoading').hide();
                if (afterloadingflag == 0) {
                    afterloadingflag = 1;
                    afterloadingPageShow();
                }
            }, 100);
        }
        $(".loadingbar").width(loadingbarwidth);
        $(".pageLoading .tn").html(Math.floor((loadingbarwidth / 750) * 100) + "%");
    }, 2);
}
function afterloadingPageShow() {
    $('.afterpageLoading').show();
    var c = document.getElementById("afterloadingcanvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    Inafterloading = setInterval(function () {
        afterloadingnumber = afterloadingnumber + 1;
        if (afterloadingnumber >= 119) {
            clearInterval(Inafterloading);
            $('.afterpageLoading').hide();
        } else {
            img.src = './img/loading/' + afterloadingnumber + '.jpg?v=1471428298';
            img.onload = function () //确保图片已经加载完毕  
            {
                ctx.drawImage(img, 0, 0, 750, 1333);
            }
        }
    }, 40);
}

function arrSort(arr) {
    return arr.sort(function () {
        return Math.random() > 0.5 ? -1 : 1;
    });
}

function startAnimation(ele, frames, speed, repeat, callback, args) {
    var selfInterval;
    var flen = frames.length, endframe = flen * repeat - 1;
    if (ele.is('img')) {
        ele.attr('src', frames[0]);
        var i = 0;
        selfInterval = setInterval(function () {
            i++;
            if (i == endframe + 1) {
                clearInterval(selfInterval);
                selfInterval = null;
                isFunction(callback) && callback(args);
            } else
                ele.attr('src', frames[i % flen]);
        }, speed);
    } else {
        ele.css('background-image', 'url(' + frames[0] + ')');
        var i = 0;
        selfInterval = setInterval(function () {
            i++;
            if (i == endframe + 1) {
                clearInterval(selfInterval);
                selfInterval = null;
                isFunction(callback) && callback(args);
            } else
                ele.css('background-image', 'url(' + frames[i % flen] + ')');
        }, speed);
    }
    return selfInterval;
}

var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, presto: u.indexOf('Presto') > -1,
            webKit: u.indexOf('AppleWebKit') > -1, gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') ==
-1, mobile: !!u.match(/AppleWebKit.*Mobile/) || !!u.match(/Windows Phone/) || !!u.match(/Android/)
         || !!u.match(/MQQBrowser/), ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, iPad: u.indexOf('iPad') > -1,
            webApp: u.indexOf('Safari') == -1
        };
    }()
}
var pageloaded = false;
var currPage = 1;
var sharkInterval;
var nav = window.navigator,
    ua = nav.userAgent;
var isios = /iPhone|iPod|iPad/i.test(ua);
var isios7 = /iPhone|iPod/i.test(ua) && parseInt(navigator.appVersion.match(/OS (\d)/)[1], 10) >= 7;
var windowWidth = 0, windowHeight = 0, windowWidthScale = 1, windowHeightScale = 1;
var initFirst = true, initHorizontal = false, fromHorizontal = false, lastWidth = 0; lastHeight = 0;

$(window).resize(windowInit);
function createFunctionProxy(fn, scope) {
    if (scope.functionTimeout) clearTimeout(scope.functionTimeout);
    var args = Array.prototype.slice.call(arguments, 0);
    scope.functionTimeout = setTimeout($.proxy(function () {
        fn.apply(scope, args);
    }, scope), isios ? 1 : 300);
}
function windowInit() {
    windowWidth = $("body").width();
    windowHeight = $("body").height();
    if ($(window).width() > $(window).height() && (window.orientation == 90 || window.orientation == -90)) {
        $(".screentip").removeClass('hide');
    } else {
        $(".screentip").addClass('hide');
        windowWidthScale = windowWidth / 750;
        windowHeightScale = windowHeight / 1366;
        if (windowHeightScale > 1) { windowHeightScale = 1; }
        if (windowHeight < 1366) {
            windowHeightScale = windowHeight / 1200;
            if (windowHeightScale > 1) { windowHeightScale = 1; }
        }
        $('.zoomh, .zoomh_t, .zoomh_m, .zoomh_b,.zoom_m').css({
            'transform': 'scale(' + windowHeightScale + ')', '-o-transform': 'scale(' + windowHeightScale + ')',
            '-moz-transform': 'scale(' + windowHeightScale + ')', '-webkit-transform': 'scale(' + windowHeightScale + ')', '-ms-transform': 'scale(' + windowHeightScale + ')'
        });
    }
}
blockpagemove();

var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）;—|{}【】‘；：”“'。，、？]");
var jsontext = '[{ "cateid": 1, "catename": "跑步", "animation": [{"animaid": 1,"animatype": "111","imgload":false,"width":750,"height":1333,"frames": 145,"aleradyshow":false,"textframes":[{"top":100,"left":120,"canvasw":550,"canvash":720}]},{"animaid": 2,"animatype": "121","imgload":false,"width":750,"height":1333,"frames": 88,"aleradyshow":false,"textframes":[{"top":600,"left":75,"canvasw":650,"canvash":300}]},{"animaid": 3,"animatype": "131","imgload":false,"width":750,"height":1333,"frames": 121,"aleradyshow":false,"textframes":[{"top":910,"left":170,"canvasw":600,"canvash":200}]},{"animaid": 4,"animatype": "141","imgload":false,"width":750,"height":1333,"frames": 119,"aleradyshow":false,"textframes":[{"top":910,"left":0,"canvasw":750,"canvash":200}]},{"animaid": 5,"animatype": "151","imgload":false,"width":750,"height":1333,"frames": 237,"aleradyshow":false,"textframes":[{"top":0,"left":0,"canvasw":750,"canvash":1200}]}]},{ "cateid": 2, "catename": "篮球", "animation": [{"animaid": 1,"animatype": "211","imgload":false,"width":750,"height":1333,"frames": 131,"aleradyshow":false,"textframes":[{"top":530,"left":0,"canvasw":750,"canvash":500}]},{"animaid": 2,"animatype": "221","imgload":false,"width":750,"height":1333,"frames": 119,"aleradyshow":false,"textframes":[{"top":520,"left":0,"canvasw":750,"canvash":250}]},{"animaid": 3,"animatype": "231","imgload":false,"width":750,"height":1333,"frames": 119,"aleradyshow":false,"textframes":[{"top":280,"left":0,"canvasw":750,"canvash":900}]}]},{ "cateid": 3, "catename": "足球", "animation": [{"animaid": 1,"animatype": "311","imgload":false,"width":750,"height":1333,"frames": 129,"aleradyshow":false,"textframes":[{"top":500,"left":0,"canvasw":750,"canvash":200}]},{"animaid": 2,"animatype": "321","imgload":false,"width":750,"height":1333,"frames": 169,"aleradyshow":false,"textframes":[{"top":220,"left":0,"canvasw":750,"canvash":200}]}]}]';

var jsondata = JSON.parse(jsontext);

var jsonword = '[{"word":"懒癌晚期无药可救"},{"word":"屁股已被沙发粘住"},{"word":"天生傲娇不爱流汗"},{"word":"身子太单薄不经撞"},{"word":"体型太大行动不便"},{"word":"崇尚生命在于不动"},{"word":"让我再拖延一会会"},{"word":"永远吊车尾的跑渣"},{"word":"万年缺觉的特困户"},{"word":"垃圾食品才是我的生命力"},{"word":"跑一公里必岔气"},{"word":"分身乏术没时间"},{"word":"综艺节目在召唤我"},{"word":"吃火锅更能让我流汗"},{"word":"五公里后必死无疑"},{"word":"综艺节目在召唤我"},{"word":"找不到队友无法打怪"},{"word":"一个人实在不好意思"},{"word":"社交狂人聚会多"}]';
var worddata = JSON.parse(jsonword);

var defaulttext = ["魄力", "野心", "胆识", "坚持", "追求", "直觉"];

var badkeywords = new Array();

var nowcategory = 2;
var nowanimation = 1;
var usersay1 = "";
var usersay2 = "";
var usersay3 = "";
var usersay = "";
var username = "";
var sharebackurl = cloc;
var shareimg = cloc + "img/share.jpg?v=1471428298";
var wordindex = 0;
var Inresult;
var buttonflag = false;
var backlink = "";
var shartext = "你 不信极限";
var sharelink = "";
var isgameove = false;
var friendflag = 0;//0:我自己 1:好友
var ispkfriendflag = false;

var categoryarr = ["111", "121", "131", "141", "151", "211", "221", "231", "311", "321"];
var categoryframesarr = [145, 88, 121, 119,237, 131, 119, 119, 129, 169];
var categoryimgload = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var InImgload;

var afterloadingnumber = 0;
var Inafterloading;
var afterloadingflag = 1;

var Inbottommove;
var rotates = 1;
$(function () {
    if (iswechat) {
        wxconfig();
    }
    windowWidth = $("body").width();
    windowHeight = $("body").height();
    onLoaded();
    for (var i = 1; i < 6; i++) {
        $('.m-page-step3 .categorymenu' + i).on(isTouch ? 'touchend' : 'click', function () {
            var objvideo = document.getElementById("video" + nowcategory + '' + nowanimation);
            if (objvideo) {
                objvideo.pause();
            }
            if (Ingame) {
                clearInterval(Ingame);
            }
            framesindex = 1;
            nowcategory = parseInt($(this).attr("pid"));
            for (var i = 1; i < 6; i++) {
                if (nowcategory == i) {
                    $('.m-page-step3 .categorymenu' + i).addClass("categorymenuselected");
                } else {
                    $('.m-page-step3 .categorymenu' + i).removeClass("categorymenuselected");
                }
            }
            SetGame();
        });
    }
    $('.btlink').on(isTouch ? 'touchend' : 'click', function () {
        window.location.href = "video.html";
    });
    $('.m-page-step2 .btnleft').on(isTouch ? 'touchend' : 'click', function () {
        wordindex = wordindex - 1;
        if (wordindex < 0) {
            wordindex = worddata.length - 1;
        }
        if ($("#saytextarea").attr("readonly")) {
            $("#saytextarea").attr("placeholder", worddata[wordindex].word);
        } else {
            $("#saytextarea").val(worddata[wordindex].word);
        }
        $(".m-page-step2 .userinfolabel2 .label1").html(worddata[0].word.length + " / 12");
    });
    $('.m-page-step2 .btnright').on(isTouch ? 'touchend' : 'click', function () {
        wordindex = wordindex + 1;
        if (wordindex > worddata.length - 1) {
            wordindex = 0;
        }
        if ($("#saytextarea").attr("readonly")) {
            $("#saytextarea").attr("placeholder", worddata[wordindex].word);
        } else {
            $("#saytextarea").val(worddata[wordindex].word);
        } $(".m-page-step2 .userinfolabel2 .label1").html(worddata[0].word.length + " / 12");
    });

    $('.pagealertother .pagegou').on(isTouch ? 'touchend' : 'click', function () {
        $(".pagealertother").hide();
        buttonflag = false;
    });
    $('.pagealert .pagecha').on(isTouch ? 'touchend' : 'click', function () {
        $(".pagealert").hide();
        buttonflag = false;
    });
    $('.pagealert .pagegou').on(isTouch ? 'touchend' : 'click', function () {
        $(".pagealert").hide();
        loadingPageShow();
        funresetgame(true);
        $(".m-page-result .img1").show();
        $(".m-page-result .resultlabels").show();
        $(".m-page-result .resultlabels2").hide();
        $(".m-page-result .resultlabels3").hide();
        logoindex = 1;
        $(".m-page-result .resultlabels3 .resimg1").removeClass("hide")
        $(".m-page-result .resultlabels3 .resimg5").addClass("hide");
        isloading = false;
        $('.bottommask2').hide();
        $('.bottommask3').hide();
        $('.bottommask').show();
        $('.m-page-result').removeClass("hide").hide();
        $('.m-page-step3').hide();
        $(".textani" + textaniid).addClass("hide");
        $('.m-page-step2').show();
        $('.m-page-step3 .bottommask #bmask4').css("color", "rgb(0,0,0)");
        isgameove = false;
        loadingPageHide();
        buttonflag = false;
    });
    $('.m-page-step2 #saytextarea').on(isTouch ? 'touchend' : 'click', function () {
        if ($("#saytextarea").attr("readonly")) {
            $("#saytextarea").removeAttr("readonly");
            $("#saytextarea").val(worddata[wordindex].word);
        }
    });
    $('.m-page-step2 .tapd').on(isTouch ? 'touchend' : 'click', function () {
        $("#saytextarea").removeAttr("readonly");
        $("#saytextarea").attr("placeholder", "");
        $("#saytextarea").val("");
        $("#saytextarea").click();
        document.getElementById("saytextarea").focus();
    });
    $('.m-page-step0 .bottond .button').on(isTouch ? 'touchend' : 'click', function () {
        setTimeout(function () {
            ga('send', 'event', 'button', 'click', 'breakbutton');
        }, 20);
        wordindex = Math.floor(Math.random() * worddata.length)
        if ($("#saytextarea").attr("readonly")) {
            $("#saytextarea").attr("placeholder", worddata[wordindex].word);
        } else {
            $("#saytextarea").val(worddata[wordindex].word);
        }
        $(".m-page-step2 .userinfolabel2 .label1").html(worddata[0].word.length + " / 12");
        $('.m-page-step0').hide();
        $('.m-page-step2').removeClass("hide").show();
        buttonflag = false;
    });
    for (var i = 1; i < 5; i++) {
        $('.m-page-step3 .bottommask #bmask' + i).on(isTouch ? 'touchend' : 'click', function () {
            if (!buttonflag) {
                buttonflag = true;
                for (var i = 1; i < 5; i++) {
                    if (i != 3) {
                        if (parseInt($(this).attr("id").replace("bmask", "")) == i) {
                            if (i == 2) {
                                $('.m-page-step3 .bottommask #bmask' + i + " img").attr("src", "./img/random1.png");
                            }
                            $('.m-page-step3 .bottommask #bmask' + i).css("color", "rgb(255,10,129)");
                        } else {
                            $('.m-page-step3 .bottommask #bmask' + i).css("color", "rgb(0,0,0)");
                            if (i == 2) {
                                $('.m-page-step3 .bottommask #bmask' + i + " img").attr("src", "./img/random.png");
                            }
                        }
                    }
                }
                switch ($(this).attr("id").replace("bmask", "")) {
                    case "1":
                        loadingPageShow();
                        funresetgame(true);
                        $('.m-page-step3').hide();
                        $('.m-page-step2').removeClass("hide").show();

                        for (var i = 1; i < 5; i++) {
                            $('.m-page-step3 .bottommask #bmask' + i).css("color", "rgb(0,0,0)");
                            if (i == 2) {
                                $('.m-page-step3 .bottommask #bmask' + i + "  img").attr("src", "./img/random.png");
                            }
                            else if (i == 3) {
                                $('.m-page-step3 .bottommask #bmask' + i + "  img").attr("src", "./img/xiaoguo.png");
                            }
                        }
                        buttonflag = false;
                        loadingPageHide();
                        break;
                    case "2":
                        loadingPageShow();
                        funresetgame(true);
                        switch (nowcategory) {
                            case 1:
                                nowcategory = 2;
                                break;
                            case 2:
                                nowcategory = 3;
                                break;
                            case 3:
                                nowcategory = 1;
                                break;
                        }
                        isloading = false;
                        SetGame();
                        buttonflag = false;
                        break;
                    case "3":
                        if ($("#bmask3").attr("op") == "") {
                            $(".bottomcategory").show();
                            $("#bmask3").attr("op", "1");
                            $('.m-page-step3 .bottommask #bmask3 img').attr("src", "./img/xiaoguo1.png");
                            $('.m-page-step3 .bottommask #bmask3').css("color", "rgb(255,10,129)");
                        } else {
                            $(".bottomcategory").hide();
                            $("#bmask3").attr("op", "");
                            $('.m-page-step3 .bottommask #bmask3').css("color", "rgb(0,0,0)");
                            $('.m-page-step3 .bottommask #bmask3 img').attr("src", "./img/xiaoguo.png");
                        }
                        buttonflag = false;
                        break;
                    case "4":
                        loadingPageShow();
                        //重新播放
                        setTimeout(function () {
                            if (iswechat) {
                                funsetwxshare();
                            }
                            ga('send', 'pageview', 'resultpage');
                        }, 20);
                        isgameove = true;
                        funresetgame(false);
                        $(".m-page-step3 .bottommask").hide();
                        $(".m-page-step3 .bottomcategory").hide();
                        $(".bottommask2").show();
                        $(".bottommask3").hide();
                        buttonflag = false;
                        loadingPageHide();
                        break;
                }
            }
        });
    }
    $('.m-page-step3 .bottomcategory .categorymenus').on(isTouch ? 'touchend' : 'click', function () {
        if (!buttonflag) {
            buttonflag = true;
            //if ($(this).children("img").length > 0)//暂未开放
            if ($(this).attr("ishave") == "0")//暂未开放
            {
                $('.pagealertother .pagealerttext').html("请切换其他场景试试");
                $('.pagealertother').show();
            } else {
                if (InImgload) {
                    clearInterval(InImgload);
                }
                var needcategory = parseInt($(this).attr("cateid"));
                var needanimation = parseInt($(this).attr("pid"));
                if (needcategory == nowcategory && needanimation == nowanimation) {
                    buttonflag = false;
                } else {
                    loadingPageShow();
                    $(".bottomcategory .categorymenus").each(function () {
                        $(this).removeClass("categoryselected");
                    });
                    $(this).addClass("categoryselected");
                    funresetgame(true);
                    nowcategory = parseInt($(this).attr("cateid"));
                    nowanimation = parseInt($(this).attr("pid"));
                    var inddl = 0;
                    for (var i = 0; i < categoryarr.length; i++) {
                        if (categoryarr[i] == nowcategory + "" + nowanimation + "1") {
                            inddl = i;
                        }
                    }
                    if (categoryimgload[inddl] == 1) {
                        isloading = false;
                        SetGame();
                        buttonflag = false;
                    } else {
                        isloading = true;
                        funloadimg(nowcategory, nowanimation, categoryframesarr[inddl]);
                        InImgload = setInterval(function () {
                            if (!isloading) {
                                clearInterval(InImgload);
                                setTimeout(function () {
                                    categoryimgload[inddl] = 1;
                                    SetGame();
                                    buttonflag = false;
                                }, 1500);
                            }
                        }, 30);
                    }
                }
                if (nowcategory == 1 && nowanimation == 1) {
                    setTimeout(function () {
                        ga('send', 'event', 'button', 'click', 'running1');
                    }, 20);
                }
                if (nowcategory == 2 && nowanimation == 1) {
                    setTimeout(function () {
                        ga('send', 'event', 'button', 'click', 'basketball1');
                    }, 20);
                }
                if (nowcategory == 3 && nowanimation == 1) {
                    setTimeout(function () {
                        ga('send', 'event', 'button', 'click', 'football1');
                    }, 20);
                }

            }
        }
    });
    for (var i = 1; i < 4; i++) {
        $('.bottommask6 .btnfresult' + i).on(isTouch ? 'touchend' : 'click', function () {
            if (!buttonflag) {
                loadingPageShow();
                buttonflag = true;
                switch ($(this).attr("id").replace("btnfresult", "")) {
                    case "1":
                        funresetgame(true);
                        if ($("#saytextarea").attr("readonly")) {
                            $("#saytextarea").attr("placeholder", worddata[wordindex].word);
                        } else {
                            $("#saytextarea").val(worddata[wordindex].word);
                        }
                        $(".m-page-step2 .userinfolabel2 .label1").html(worddata[0].word.length + " / 12");
                        $(".bottomcategory").show();
                        friendflag = 0;
                        $(".bottommask6").hide();
                        $(".bottommask").show();
                        $(".m-page-result .img1").show();
                        $(".m-page-result .resultlabels").show();
                        $(".m-page-result .resultlabels2").hide();
                        $(".m-page-result .resultlabels3").hide();
                        logoindex = 1;
                        $(".m-page-result .resultlabels3 .resimg1").removeClass("hide")
                        $(".m-page-result .resultlabels3 .resimg5").addClass("hide");
                        isloading = false;
                        $('.bottommask2').hide();
                        $('.bottommask3').hide();
                        $('.bottommask').show();
                        $('.m-page-result').removeClass("hide").hide();
                        $('.m-page-step3').hide();
                        $(".textani" + textaniid).addClass("hide");
                        $('.m-page-step2').show();
                        $('.m-page-step3 .bottommask #bmask4').css("color", "rgb(0,0,0)");
                        isgameove = false;
                        loadingPageHide();
                        buttonflag = false;
                        break;
                    case "2":
                        buttonflag = false;
                        break;
                    case "3":
                        break;
                }
            }
        });
    }
    for (var i = 1; i < 4; i++) {
        $('.bottommask2 .btnresult' + i).on(isTouch ? 'touchend' : 'click', function () {
            if (!buttonflag) {
                buttonflag = true;
                switch ($(this).attr("id").replace("btnresult", "")) {
                    case "1":
                        $(".pagealert").show();
                        break;
                    case "2":
                        friendflag = 0;
                        setTimeout(function () {
                            //if (iswechat) {
                            //    funsetwxshare();
                            //}
                            ga('send', 'event', 'button', 'click', 'sharefriend');
                        }, 20);
                        $('.bottommask2').hide();
                        $('.bottommask3').show();
                        buttonflag = false;
                        break;
                    case "3":
                        loadingPageShow();
                        setTimeout(function () {
                            ga('send', 'event', 'button', 'click', 'challengefriend');
                        }, 20);
                        ispkfriendflag = true;
                        friendflag = 0;
                        $(".m-page-step2 .button").html("&nbsp;分享给好友");
                        username = "";
                        funresetgame(true);
                        logoindex = 1;
                        $("#sayinput").val("");
                        $("#sayinput").attr("placeholder", "小伙伴的大名");
                        isloading = false;
                        $('.m-page-step3').hide();
                        $('.m-page-result').hide();
                        $(".textani" + textaniid).addClass("hide");
                        $('.m-page-step2').show();
                        isgameove = false;
                        loadingPageHide();
                        buttonflag = false;
                        break;
                }
            }
        });
    }
    $('.bottommask4 .btncopeclose').on(isTouch ? 'touchend' : 'click', function () {
        $('.bottommask4').hide();
        $('.bottommask3').show();
    });
    $('.bottommask5 .btnwechatclose').on(isTouch ? 'touchend' : 'click', function () {
        $('.bottommask5').hide();
        $('.bottommask3').show();
    });
    for (var i = 1; i < 5; i++) {
        $('.bottommask3 .btnshare' + i).on(isTouch ? 'touchend' : 'click', function () {
            if (!buttonflag) {
                buttonflag = true;
                switch ($(this).attr("id").replace("btnshare", "")) {
                    case "1":
                        $('.bottommask #bmask4').css("color", "rgb(0,0,0)");
                        $('.bottommask3').hide();
                        $('.bottommask').hide();
                        $('.bottommask2').show();
                        buttonflag = false;
                        break;
                    case "2":
                        var sharebackurltt = cloc + "?f=" + friendflag + "&c=" + nowcategory + "&v=" + nowanimation + "&n=" + encodeURIComponent(username) + "&t=" + encodeURIComponent(usersay);
                        $(".inputcopytext").html(sharebackurltt);
                        //selectText("saytextarea");
                        $('.bottommask3').hide();
                        $('.bottommask4').show();
                        buttonflag = false;
                        break;
                    case "3":
                        $('.bottommask3').hide();
                        $('.bottommask5').show();
                        buttonflag = false;
                        break;
                    case "4":
                        funsetweiboshare();
                        setTimeout(function () {
                            window.open(sharelink, "_blank");
                        }, 50);
                        buttonflag = false;
                        break;
                }
            }
        });
    }
    $('.btncopeclose200').on(isTouch ? 'touchend' : 'click', function () {
        $(".bottommask200").hide();
        $(".bottommask100").show();
    });
    $('.btnwechatclose300').on(isTouch ? 'touchend' : 'click', function () {
        $(".bottommask300").hide();
        $(".bottommask200").hide();
        $(".bottommask100").show();
    });
    $('.btnshare102').on(isTouch ? 'touchend' : 'click', function () {
        var sharebackurltt = cloc + "?f=" + friendflag + "&c=" + nowcategory + "&v=" + nowanimation + "&n=" + encodeURIComponent(username) + "&t=" + encodeURIComponent(usersay);
        $(".inputcopytext200").html(sharebackurltt);
        $(".bottommask100").hide();
        $(".bottommask200").show();
    });
    $('.btnshare103').on(isTouch ? 'touchend' : 'click', function () {
        friendflag = 0;
        funsetwxshare();
        $(".bottommask100").hide();
        $(".bottommask300").show();
    });
    $('.btnshare104').on(isTouch ? 'touchend' : 'click', function () {
        funsetweiboshare();
        setTimeout(function () {
            window.open(sharelink, "_blank");
        }, 50);
    });
    $('.btnreplay').on(isTouch ? 'touchend' : 'click', function () {
        if (Ingame) {
            clearInterval(Ingame);
        }
        loadingPageShow();
        $(".btnreplay").hide();
        framesindex = 1;
        isgameove = true;
        $(".textani" + textaniid).addClass("hide");
        $(".resultlabels3").hide();
        $(".m-page-result").hide();
        $(".resultlabels").show();
        $(".m-page-step3").show();
        SetGame();
    });
    $('.m-page-step2 .bottond .button').on(isTouch ? 'touchend' : 'click', function () {
        if (!buttonflag) {
            var namesameornot = false;
            var textsameornot = false;
            buttonflag = true;
            var patternusername = "";
            for (var i = 0; i <= $("#sayinput").val().length; i++) {
                patternusername = patternusername + $("#sayinput").val().substr(i, 1).replace(pattern, '');
            }
            if (patternusername.length <= 1) {
                $('.pagealertother .pagealerttext').html("请填写你的大名");
                $('.pagealertother').show();
                return false;
            } else {
                if (patternusername.length > 7) {
                    $('.pagealertother .pagealerttext').html("你的大名超过7个字符");
                    $('.pagealertother').show();
                    return false;
                }
            }
            if (username == patternusername.toUpperCase()) {
                sameornot = true;
            }
            username = patternusername;
            var patternusersay = "";
            if ($("#saytextarea").attr("readonly")) {
                for (var i = 0; i <= $("#saytextarea").attr("placeholder").length; i++) {
                    patternusersay = patternusersay + $("#saytextarea").attr("placeholder").substr(i, 1).replace(pattern, '');
                }
                if (patternusersay.length < 6) {
                    $('.pagealertother .pagealerttext').html("请填写6-12个字");
                    $('.pagealertother').show();
                    return false;
                }
            } else {
                for (var i = 0; i <= $("#saytextarea").val().length; i++) {
                    patternusersay = patternusersay + $("#saytextarea").val().substr(i, 1).replace(pattern, '');
                }
                if (patternusersay.length < 6) {
                    $('.pagealertother .pagealerttext').html("请填写6-12个字");
                    $('.pagealertother').show();
                    return false;
                }
            }

            if ($("#saytextarea").attr("readonly")) {
                if (usersay == patternusersay.toUpperCase()) {
                    textsameornot = true;
                }
            } else {
                if (usersay == patternusersay.toUpperCase()) {
                    textsameornot = true;
                }
            }
            usersay = patternusersay;
            if (!_filter_method(username)) {
                $('.pagealertother .pagealerttext').html("你的大名包含非法文字");
                $('.pagealertother').show();
                return false;
            }
            if (!_filter_method(usersay)) {
                $('.pagealertother .pagealerttext').html("填写文字包含非法文字");
                $('.pagealertother').show();
                return false;
            }
            username = username.toUpperCase();
            usersay = usersay.toUpperCase();
            if (ispkfriendflag) {
                $(".m-page-step2 .bottond .button").hide();
                $(".bottommask100").show();
            } else {
                isloading = true;
                loadingPageShow();
                $('.m-page-step2').hide();
                $('.m-page-step3').removeClass("hide").show();
                currPage = 1;
                if (firstgameflag) {
                    funsetcategorywidth(nowcategory + "" + nowanimation + "1");
                    GameLoad();
                    buttonflag = false;
                } else {
                    funresetgame(true);
                    if (!namesameornot)//如果用户第二次输入的姓名一样，页面关于姓名的输出不用改变，否则重新改变
                    {
                        funplayresult(false);
                    }
                    if (!textsameornot) {
                        var ncategoryyid = 0;
                        var nanimationnid = 0;
                        var ccww = 0;
                        var cchh = 0;
                        var cctop = 0;
                        var ccleft = 0;
                        var animationarry;
                        for (var k = 0; k < jsondata.length; k++) {
                            ncategoryyid = jsondata[k].cateid;
                            animationarry = jsondata[k].animation;
                            for (var j = 0; j < animationarry.length; j++) {
                                nanimationnid = animationarry[j].animaid;
                                ccww = animationarry[j].textframes[0].canvasw;
                                cchh = animationarry[j].textframes[0].canvash;
                                cctop = animationarry[j].textframes[0].top;
                                ccleft = animationarry[j].textframes[0].left;
                                if (animationarry[j].aleradyshow) {
                                    switch (animationarry[j].animatype) {
                                        case "111":
                                            var strn = "";
                                            var strusersay = usersay;
                                            if (strusersay.length < 12) {
                                                for (var i = 0; i < 6; i++) {
                                                    strusersay = strusersay + " ";
                                                }
                                            }
                                            strn += '<span class="textshow1">' + strusersay.substring(0, 1) + '<br />';
                                            strn += '' + strusersay.substring(1, 2) + '</span>';
                                            strn += '<span class="textshow2">' + strusersay.substring(2, 3) + '<br />';
                                            strn += '' + strusersay.substring(3, 4) + '</span>';
                                            strn += '<span class="textshow3">' + strusersay.substring(4, 5) + '<br />';
                                            strn += '' + strusersay.substring(5, 6) + '</span>';
                                            strn += '<span class="textshow4">' + strusersay.substring(6, 7) + '<br />';
                                            strn += ' ' + strusersay.substring(7, 8) + '</span>';
                                            strn += ' <span class="textshow5">' + strusersay.substring(8, 9) + '<br />';
                                            strn += '' + strusersay.substring(9, 10) + '</span>';
                                            strn += '<span class="textshow6">' + strusersay.substring(10, 11) + '<br />';
                                            strn += '' + strusersay.substring(11, 12) + '</span>';
                                            $("#canvasdiv" + ncategoryyid + '' + nanimationnid).html(strn);
                                            break;
                                        case "121":
                                            var strn = ""
                                            var strusersay = usersay;
                                            for (var i = 1; i <= strusersay.length; i++) {
                                                strn += '<div class="letter-rightdiv01 letter-rightdiv0' + i + '"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                            }
                                            $("#container" + ncategoryyid + '' + nanimationnid).html(strn);
                                            break;
                                        case "131":
                                            $("#container" + ncategoryyid + '' + nanimationnid).html("");

                                            var strn = "";
                                            var strusersay = usersay + "";
                                            for (var i = 1; i <= strusersay.length; i++) {
                                                strn += '<div class="letter-rightdiv131 letter-rightdiv131_' + i + '"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                            }
                                            $("#container" + ncategoryyid + '' + nanimationnid).html(strn);
                                            break;
                                        case "141":
                                            $("#container" + ncategoryyid + '' + nanimationnid).html("");

                                            var strn = "";
                                            var strusersay = usersay + "";
                                            if (strusersay.length < 12) {
                                                for (var i = 0; i < 6; i++) {
                                                    strusersay = strusersay + " ";
                                                }
                                            }
                                            strn += '<div class="letterline141">' + strusersay.substring(0, 6) + '</div>';
                                            strn += '<div class="letterline142">' + strusersay.substring(6, strusersay.length) + '</div>';
                                            $("#container" + ncategoryyid + '' + nanimationnid).html(strn);
                                            break;
                                        case "151":
                                            $("#container" + ncategoryyid + '' + nanimationnid).html("");
                                            var strn = "";
                                            var strusersay = usersay + "";
                                            if (strusersay.length < 12) {
                                                for (var i = 0; i < 6; i++) {
                                                    strusersay = strusersay + " ";
                                                }
                                            }
                                            strn += '<div class="letterline1511">' + strusersay.substring(0, 4) + '</div>';
                                            strn += '<div class="letterline1512">' + strusersay.substring(4, 8) + '</div>';
                                            strn += '<div class="letterline1513">' + strusersay.substring(8, 12) + '</div>';
                                            $("#container" + ncategoryyid + '' + nanimationnid).html(strn);
                                            break;
                                        case "211":
                                            var strn = ""
                                            var strusersay = usersay;
                                            if (strusersay.length < 12) {
                                                for (var i = 0; i < 6; i++) {
                                                    strusersay = strusersay + "0";
                                                }
                                            }
                                            for (var i = 1; i < 13; i++) {
                                                if (i < 4) {
                                                    strn += '<div class="letter-rightdiv letter-rightdiv' + i + '"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                                } else {
                                                    if (i >= 4 && i < 7) {
                                                        if (i == 4) {
                                                            strn += '<div class="letter-rightdiv letter-rightdiv7"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                                        }
                                                        else if (i == 5) {
                                                            strn += '<div class="letter-rightdiv letter-rightdiv8"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                                        }
                                                        else if (i == 6) {
                                                            strn += '<div class="letter-rightdiv letter-rightdiv9"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                                        }
                                                    } else if (i >= 7 && i <= 9) {
                                                        if (i == 7) {
                                                            strn += '<div class="letter-rightdiv letter-rightdiv4"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                                        }
                                                        else if (i == 8) {
                                                            strn += '<div class="letter-rightdiv letter-rightdiv5"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                                        } else if (i == 9) {
                                                            strn += '<div class="letter-rightdiv letter-rightdiv6"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                                        }
                                                    }
                                                    else if (i >= 10 && i <= 12) {
                                                        strn += '<div class="letter-rightdiv letter-rightdiv' + i + '"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                                    }
                                                }
                                            }
                                            $("#container" + ncategoryyid + '' + nanimationnid).html(strn);
                                            break;
                                        case "221":
                                            $("#container" + ncategoryyid + '' + nanimationnid).html("");
                                            var strusersay = usersay + "";
                                            if (strusersay.length < 12) {
                                                for (var i = 0; i < 6; i++) {
                                                    strusersay = strusersay + " ";
                                                }
                                            }
                                            var strn = "";
                                            strn += '<div class="letterlines1">' + strusersay.substring(0, 1) + '</div>';
                                            strn += '<div class="letterlines2">' + strusersay.substring(1, 2) + '</div>';
                                            strn += '<div class="letterlines3">' + strusersay.substring(2, 3) + '</div>';
                                            strn += '<div class="letterlines4">' + strusersay.substring(3, 4) + '</div>';
                                            strn += '<div class="letterlines5">' + strusersay.substring(4, 5) + '</div>';
                                            strn += '<div class="letterlines6">' + strusersay.substring(5, 6) + '</div>';
                                            strn += '<div class="letterlines7">' + strusersay.substring(6, 7) + '</div>';
                                            strn += '<div class="letterlines8">' + strusersay.substring(7, 8) + '</div>';
                                            strn += '<div class="letterlines9">' + strusersay.substring(8, 9) + '</div>';
                                            strn += '<div class="letterlines10">' + strusersay.substring(9, 10) + '</div>';
                                            strn += '<div class="letterlines11">' + strusersay.substring(10, 11) + '</div>';
                                            strn += '<div class="letterlines12">' + strusersay.substring(11, 12) + '</div>';
                                            $("#container" + ncategoryyid + '' + nanimationnid).html(strn);
                                            break;
                                        case "231":
                                            var strn = ""
                                            var strusersay = usersay;
                                            if (strusersay.length < 12) {
                                                for (var i = 0; i < 6; i++) {
                                                    strusersay = strusersay + " ";
                                                }
                                            }
                                            for (var i = 1; i < 13; i++) {
                                                strn += '<div class="letter-rightdiv231 letter-rightdiv231_' + i + '"><div class="letterleftdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div><div class="letterrightdd"><span data-letter="' + strusersay[i - 1] + '">' + strusersay[i - 1] + '</span></div></div>';
                                            }
                                            $("#container" + ncategoryyid + '' + nanimationnid).html(strn);
                                            break;
                                        case "311":
                                            $("#canvasdiv" + ncategoryyid + '' + nanimationnid).html("");
                                            $("#container" + ncategoryyid + '' + nanimationnid).html("");
                                            var strn = "";
                                            strn = '<div id="canvasdiv' + ncategoryyid + '' + nanimationnid + '" class="abss" style="top:' + cctop + 'px;left:' + ccleft + 'px;z-index:999;width:' + ccww + 'px;height:' + cchh + 'px;display:none"><img src="" id="imgid' + ncategoryyid + '' + nanimationnid + '" class="hidden"><img src="" id="imgcolorid' + ncategoryyid + '' + nanimationnid + '" class="hidden"></div>';

                                            strn += '<div id="container' + ncategoryyid + '' + nanimationnid + '" class="abss" style="top:' + cctop + 'px;left:' + ccleft + 'px;z-index:999;width:' + ccww + 'px;height:' + cchh + 'px;display:none"></div>';
                                            $("#categoryid" + ncategoryyid + " #animation" + ncategoryyid + "" + nanimationnid).append(strn);
                                            CreateCanvasByText("canvasdiv" + ncategoryyid + '' + nanimationnid, ccww, cchh, false, ncategoryyid, nanimationnid, animationarry[j].animatype);
                                            SetCanvasToImage("canvast" + ncategoryyid + '' + nanimationnid, ncategoryyid, nanimationnid);

                                            CreateCanvasByText("canvasdiv" + ncategoryyid + '' + nanimationnid, ccww, cchh, true, ncategoryyid, nanimationnid, animationarry[j].animatype);
                                            SetCanvasToImage("canvastcolor" + ncategoryyid + '' + nanimationnid, ncategoryyid, nanimationnid);


                                            SetTweenMax(ccww, cchh, "container" + ncategoryyid + '' + nanimationnid, ncategoryyid, nanimationnid, animationarry[j].animatype);
                                            setTimeout(function () {
                                                TweenMax.pauseAll(true, true)
                                            }, 10);
                                            break;
                                        case "321":
                                            $("#container" + ncategoryyid + '' + nanimationnid).html("");
                                            var strusersay = usersay + "";
                                            var strn = "";
                                            if (strusersay.length < 12) {
                                                for (var i = 0; i < 6; i++) {
                                                    strusersay = strusersay + " ";
                                                }
                                            }
                                            strn += '<div class="letterline1">' + strusersay.substring(0, 6) + '</div>';
                                            strn += '<div class="letterline2">' + strusersay.substring(6, strusersay.length) + '</div>';
                                            $("#container" + ncategoryyid + '' + nanimationnid).html(strn);
                                            break;
                                    }
                                }
                            }
                        }

                    }
                    isloading = false;
                    SetGame();
                    $('.m-page-step2').hide();
                    $('.m-page-result').removeClass("hide").hide();
                    $('.m-page-step3').show();
                    $(".textani" + textaniid).addClass("hide");
                }
                funsetcategorywidth(animatype);
                $(".bottomcategory").show();
                $("#bmask3").attr("op", "1");
                $('.m-page-step3 .bottommask #bmask3 img').attr("src", "./img/xiaoguo1.png");
                $('.m-page-step3 .bottommask #bmask3').css("color", "rgb(255,10,129)");
                for (var i = 1; i < 6; i++) {
                    if (nowcategory == i) {
                        $('.m-page-step3 .categorymenu' + i).addClass("categorymenuselected");
                    } else {
                        $('.m-page-step3 .categorymenu' + i).removeClass("categorymenuselected");
                    }
                }
                buttonflag = false;
            }
        }
    });
    $(".ct" + nowcategory + "" + nowanimation + "1").addClass("categoryselected");
});

function _filter_method(value) {
    var flag = true;
    value = value;
    //获取文本输入框中的内容  
    //遍历敏感词数组  
    for (var i = 0; i < badkeywords.length; i++) {
        //全局替换  
        var reg = new RegExp(badkeywords[i], "g");
        //判断内容中是否包括敏感词  
        if (value.indexOf(badkeywords[i]) != -1) {
            flag = false;
            break;
        }
    }
    return flag;
}
function fungetbadword() {
    $.ajax({
        url: "./keywords.txt",
        type: 'GET',
        async: true,
        success: function (data) {
            badkeywords = data.split(",");
        },
        error: function (xhr, msg, e) {
        }
    });
}
var textaniid = 0;
var textanindex = 0;
var firstgameflag = true;
var Inresultpage;
var logoindex = 1;
function funplayresult(objcanplay) {
    var strarry = "";
    var strarryindex = 0;
    if (!objcanplay) {
        $(".resultlabels").html('<div class="m-abs textlabel2">不信极限</div>');
        for (var i = 0; i < defaulttext.length; i++) {
            strarryindex = strarryindex + 1;
            if (strarryindex > 3) {
                strarryindex = 1;
            }
            switch (strarryindex) {
                case 1:
                    textaniid = textaniid + 1;
                    strarry += '<div class="m-abs textlabel1 textfanpai1 textani' + textaniid + ' hide">' + defaulttext[i] + '</div>';
                    textaniid = textaniid + 1;
                    strarry += '<div class="m-abs textlabel1 textani' + textaniid + ' hide">' + defaulttext[i] + '</div>';
                    break;
                case 2:
                    textaniid = textaniid + 1;
                    strarry += '<div class="m-abs textlabel1 textfanpai2 textani' + textaniid + ' hide">' + defaulttext[i] + '</div>';
                    textaniid = textaniid + 1;
                    strarry += '<div class="m-abs textlabel1 textani' + textaniid + ' hide">' + defaulttext[i] + '</div>';
                    textaniid = textaniid + 1;
                    strarry += '<div class="m-abs textlabel1 textani' + textaniid + ' hide">' + defaulttext[i] + '</div>';
                    break;
                case 3:
                    textaniid = textaniid + 1;
                    strarry += '<div class="m-abs textlabel1 textfanpai3 textani' + textaniid + ' hide">' + defaulttext[i] + '</div>';
                    textaniid = textaniid + 1;
                    strarry += '<div class="m-abs textlabel1 textfanpai1 textani' + textaniid + ' hide">' + defaulttext[i] + '</div>';
                    textaniid = textaniid + 1;
                    strarry += '<div class="m-abs textlabel1 textani' + textaniid + ' hide">' + defaulttext[i] + '</div>';
                    textaniid = textaniid + 1;
                    strarry += '<div class="m-abs textlabel1 textani' + textaniid + ' hide">' + defaulttext[i] + '</div>';
                    break;
            }
        }
        var showname = username;
        if (showname.length > 7) {
            showname = showname.substring(0, 7);
        }
        textaniid = textaniid + 1;
        strarry += '<div class="m-abs textlabel1 textfanpai4 textani' + textaniid + ' hide">' + showname + '</div>';
        textaniid = textaniid + 1;
        strarry += '<div class="m-abs textlabel1 textfanpai5 textani' + textaniid + ' hide">' + showname + '</div>';
        textaniid = textaniid + 1;
        strarry += '<div class="m-abs textlabel1 textani' + textaniid + ' hide"></div>';
        textaniid = textaniid + 1;
        strarry += '<div class="m-abs textlabel1 textfanpai3 textani' + textaniid + ' hide">' + showname + '</div>';
        textaniid = textaniid + 1;
        strarry += '<div class="m-abs textlabel1 textfanpai1 textani' + textaniid + ' hide">' + showname + '</div>';
        textaniid = textaniid + 1;
        strarry += '<div class="m-abs textlabel1 textani' + textaniid + ' hide">' + showname + '</div>';
        $(".resultlabels").append(strarry);
    } else {
        $('.m-page-step3').hide();
        $('.m-page-result').removeClass("hide").show();
        textanindex = 1;
        Inresult = setInterval(function () {
            if (textanindex < textaniid) {
                $(".textani" + textanindex).addClass("hide");
            }
            textanindex = textanindex + 1;
            if (textanindex > textaniid) {
                clearInterval(Inresult);
                textanindex = 1;
                setTimeout(function () {
                    $(".m-page-result .img1").hide();
                    $(".m-page-result .resultlabels").hide();
                    $(".m-page-result .resultlabels2").show();
                    setTimeout(function () {
                        $(".m-page-result .resultlabels2").hide();
                        $(".m-page-result .resultlabels3").show();
                        Inresultpage = setInterval(function () {
                            $(".m-page-result .resultlabels3 .resimg" + logoindex).addClass("hide");
                            logoindex = logoindex + logoindex;
                            if (logoindex > 5) {
                                clearInterval(Inresultpage);
                                $(".btnreplay").show();
                                logoindex = 1;
                                $(".m-page-result .resultlabels3 .resimg5").removeClass("hide").show();
                            } else {
                                $(".m-page-result .resultlabels3 .resimg" + logoindex).removeClass("hide").show();
                            }

                        }, 200);
                    }, 800);
                }, 800);
            } else {
                $(".textani" + textanindex).removeClass("hide");
            }
        }, 30);
    }
}
var inputsayinput = document.getElementById("sayinput");
var cpLocksayinput = false;
var inputsaytextarea = document.getElementById("saytextarea");
var cpLocksaytextarea = false;

function onLoaded() {
    if (!browser.versions.mobile) {
        window.location.href = cloc + "pc.html";
    }
    loadingPageShow();
    setTimeout(function () {
        fungetbadword();
    }, 10);
    if (typeof (getUrlParam("c")) == "undefined" || getUrlParam("c") == "" || typeof (getUrlParam("v")) == "undefined" && getUrlParam("v") == "" || typeof (getUrlParam("n")) == "undefined" && getUrlParam("n") == "" || typeof (getUrlParam("t")) == "undefined" || getUrlParam("t") == "") {
        afterloadingflag = 0;
        animatype = categoryarr[Math.floor(Math.random() * categoryarr.length)];
        nowcategory = parseInt(animatype.substring(0, 1));
        nowanimation = parseInt(animatype.charAt(1, 1));
        var inddl = 0;
        for (var i = 0; i < categoryarr.length; i++) {
            if (categoryarr[i] == nowcategory + "" + nowanimation + "1") {
                inddl = i;
                break;
            }
        }
        categoryimgload[inddl] = 1;
        funloadimg(nowcategory, nowanimation, categoryframesarr[inddl]);
        $('.m-page-step0').removeClass("hide").show();
        isloading = true;
        InImgload = setInterval(function () {
            if (!isloading) {
                clearInterval(InImgload);
                setTimeout(function () {
                    loadingPageHide();
                }, 1500);
            }
        }, 30);
    } else {
        if (getUrlParam("c") == "1" || getUrlParam("c") == "2" || getUrlParam("c") == "3") {
            nowcategory = parseInt(getUrlParam("c"));
            if (getUrlParam("v") == "1" || getUrlParam("v") == "2" || getUrlParam("v") == "3" || getUrlParam("v") == "4" || getUrlParam("v") == "5") {
                nowanimation = parseInt(getUrlParam("v"));
                if (getUrlParam("n").length > 7) {
                    username = getUrlParam("n").substring(0, 7);
                } else {
                    username = getUrlParam("n");
                }
                if (getUrlParam("t").length > 12) {
                    usersay = getUrlParam("t").substring(0, 12);
                } else {
                    usersay = getUrlParam("t");
                }
                if (getUrlParam("f") == "1") {
                    friendflag = 0;
                } else {
                    friendflag = 0;
                }
                var nctt = nowcategory + "" + nowanimation + "1";
                var havect = false;
                for (var j = 0; j < categoryarr.length; j++) {
                    if (categoryarr[j] == nctt) {
                        havect = true;
                        break;
                    }
                }
                if (havect) {
                    //如果有参数，直接进入游戏
                    username = username.toUpperCase();
                    usersay = usersay.toUpperCase();
                    isloading = true;
                    setTimeout(function () {
                        if (iswechat) {
                            funsetwxshare();
                        }
                        funsetweiboshare();
                    }, 500);
                    $('.m-page-step0').hide();
                    $('.m-page-step3').removeClass("hide").show();
                    $(".bottommask").hide();
                    $(".bottommask6").show();
                    $(".bottomcategory").hide();
                    currPage = 1;
                    isgameove = true;
                    var inddl = 0;
                    for (var i = 0; i < categoryarr.length; i++) {
                        if (categoryarr[i] == nowcategory + "" + nowanimation + "1") {
                            inddl = i;
                        }
                    }
                    isloading = true;
                    categoryimgload[inddl] = 1;
                    funloadimg(nowcategory, nowanimation, categoryframesarr[inddl]);
                    GameLoad();
                    buttonflag = false;
                } else {
                    afterloadingflag = 0;
                    $('.m-page-step0').removeClass("hide").show();
                    animatype = categoryarr[Math.floor(Math.random() * categoryarr.length)];
                    nowcategory = parseInt(animatype.substring(0, 1));
                    nowanimation = parseInt(animatype.charAt(1, 1));
                    var inddl = 0;
                    for (var i = 0; i < categoryarr.length; i++) {
                        if (categoryarr[i] == nowcategory + "" + nowanimation + "1") {
                            inddl = i;
                        }
                    }
                    categoryimgload[inddl] = 1;
                    funloadimg(nowcategory, nowanimation, categoryframesarr[inddl]);
                    isloading = true;
                    InImgload = setInterval(function () {
                        if (!isloading) {
                            clearInterval(InImgload);
                            setTimeout(function () {
                                loadingPageHide();
                            }, 1500);
                        }
                    }, 30);
                }
            } else {
                afterloadingflag = 0;
                $('.m-page-step0').removeClass("hide").show();
                animatype = categoryarr[Math.floor(Math.random() * categoryarr.length)];
                nowcategory = parseInt(animatype.substring(0, 1));
                nowanimation = parseInt(animatype.charAt(1, 1));
                var inddl = 0;
                for (var i = 0; i < categoryarr.length; i++) {
                    if (categoryarr[i] == nowcategory + "" + nowanimation + "1") {
                        inddl = i;
                    }
                }
                categoryimgload[inddl] = 1;
                funloadimg(nowcategory, nowanimation, categoryframesarr[inddl]);
                isloading = true;
                InImgload = setInterval(function () {
                    if (!isloading) {
                        clearInterval(InImgload);
                        setTimeout(function () {
                            loadingPageHide();
                        }, 1500);
                    }
                }, 30);
            }
        } else {
            afterloadingflag = 0;
            animatype = categoryarr[Math.floor(Math.random() * categoryarr.length)];
            nowcategory = parseInt(animatype.substring(0, 1));
            nowanimation = parseInt(animatype.charAt(1, 1));
            var inddl = 0;
            for (var i = 0; i < categoryarr.length; i++) {
                if (categoryarr[i] == nowcategory + "" + nowanimation + "1") {
                    inddl = i;
                }
            }
            categoryimgload[inddl] = 1;
            funloadimg(nowcategory, nowanimation, categoryframesarr[inddl]);
            $('.m-page-step0').removeClass("hide").show();
            isloading = true;
            InImgload = setInterval(function () {
                if (!isloading) {
                    clearInterval(InImgload);
                    setTimeout(function () {
                        loadingPageHide();
                    }, 1500);
                }
            }, 30);
        }
    }

    inputsayinput.addEventListener('input', function () {
        if (cpLocksayinput) {
            return;
        }
        this.value = this.value.substr(0, 7);
        $(".m-page-step2 .userinfolabel1 .label1").html(this.value.length + " / 7");
    }, false);

    inputsayinput.addEventListener('compositionstart', function () {
        $(".m-page-step2 .userinfolabel1 .label1").html(inputsayinput.value.toString().length + " / 7");
        cpLocksayinput = true;
    }, false);

    inputsayinput.addEventListener('compositionend', function () {
        $(".m-page-step2 .userinfolabel1 .label1").html(inputsayinput.value.toString().length + " / 7");
        cpLocksayinput = false;
    }, false);

    inputsaytextarea.addEventListener('input', function () {
        if (cpLocksaytextarea) {
            return;
        }
        this.value = this.value.substr(0, 12);
        $(".m-page-step2 .userinfolabel2 .label1").html(this.value.length + " / 12");
    }, false);
    inputsaytextarea.addEventListener('compositionstart', function () {
        cpLocksaytextarea = true;
        $(".m-page-step2 .userinfolabel2 .label1").html(inputsaytextarea.value.toString().length + " / 12");
    }, false);
    inputsaytextarea.addEventListener('compositionend', function () {
        cpLocksaytextarea = false;
        $(".m-page-step2 .userinfolabel2 .label1").html(inputsaytextarea.value.toString().length + " / 12");
    }, false);
    funcategorymove();
    windowInit();
}
function funloadimg(vcategory, vanimation, vframes) {
    setTimeout(function () {
        if (afterloadingflag == 0) {
            for (var k = 0; k < 119; k++) {
                loader.add(new PxLoaderImage('./img/loading/' + (k + 1) + '.jpg?v=1471428298'));
            }
        }
        for (var k = 0; k < vframes; k++) {
            loader.add(new PxLoaderImage('./category/' + vcategory + '/animation/' + vanimation + '/' + (k + 1) + '.jpg?v=1471428298'));
        }
        loader.start();
    }, 10);
}
function funtextareaclick() {
    $("#saytextarea").removeAttr("readonly");
    $("#saytextarea").val($("#saytextarea").attr("placeholder"));
    $("#saytextarea").attr("placeholder", "");
    document.getElementById("saytextarea").focus();
    $(".saydiv1").show();
    $(".saydiv2").show();
    $(".m-page-step2 .userinfolabel2 .saydiv3").hide();
    $(".m-page-step2 .userinfolabel2 .label1").show();
    $(".m-page-step2 .userinfolabel2 .label111").show();
}

function funtextinputclick() {
    $(".m-page-step2 .userinfolabel1 .label1").show();
}
function funsetwxshare() {
    //自定义分享
    sharebackurl = cloc + "?f=" + friendflag + "&c=" + nowcategory + "&v=" + nowanimation + "&n=" + encodeURIComponent(username) + "&t=" + encodeURIComponent(usersay);
    if (iswechat) {
        switch (friendflag) {
            case 0:
                refreshShare("NIKE 你 不信极限", "所谓极限已被我一击致命，快来试试你的“极限杀”！", sharebackurl, shareimg, "所谓极限已被我一击致命，快来试试你的“极限杀”！", "所谓极限已被我一击致命，快来试试你的“极限杀”！", sharebackurl, shareimg);
                break;
                //case 1:
                //    refreshShare("NIKE 你 不信极限", "嗨" + username + "，你也敢挑战你的极限么？", sharebackurl, shareimg, "NIKE 你 不信极限", "嗨" + username + "，你也敢挑战你的极限么？", sharebackurl, shareimg);
                //    break;
            default:
                refreshShare("你 不信极限", "你不信极限！那就来挑战吧！", sharebackurl, shareimg, "你不信极限！那就来挑战吧！", "你不信极限！那就来挑战吧！", sharebackurl, shareimg);
                break;
        }
    }
}
function funsetweiboshare() {
    switch (friendflag) {
        case 0:
            shartext = "所谓极限已被我一击致命，快来试试你的“极限杀”！";
            break;
            //case 1:
            //    shartext = "嗨" + username + "，你也敢挑战你的极限么？";
            //    break;
        default:
            shartext = "你不信极限！那就来挑战吧！";
            break;
    }

    backlink = encodeURIComponent(cloc + "?f=" + friendflag + "&c=" + nowcategory + "&v=" + nowanimation + "&n=" + encodeURIComponent(username) + "&t=" + encodeURIComponent(usersay));
    sharelink = "http://service.weibo.com/share/share.php?appkey=&url=" + backlink + "&content=gb2312&retcode=0&title=" + shartext + "&pic=" + shareimg;
}
function refreshShare(friendtitle, frienddesc, friendurl, friendimg, timelinetitle, timelinedesc, timelineurl, timelineimg) {
    if (friendtitle) sharefriendData.title = friendtitle;
    if (frienddesc) sharefriendData.desc = frienddesc;
    if (friendurl) sharefriendData.link = friendurl;
    if (friendimg) sharefriendData.imgUrl = friendimg;


    if (timelinetitle) sharetimelineData.title = timelinetitle;
    if (timelinedesc) sharetimelineData.desc = timelinedesc;
    if (timelineurl) sharetimelineData.link = timelineurl;
    if (timelineimg) sharetimelineData.imgUrl = timelineimg;
    wxevent();
}

$(function () {
    lazyNode = $('body .lazy-bk');
    preload(lazyNode, function () {
    }, '', [], false);
    funshake();
});

function funmovemove() {
    Inbottommove = setInterval(function () {
        rotates = rotates + 1;
        if (rotates > 6) {
            clearInterval(Inbottommove);
            funmovemove2();
        }
        $(".hot_imgloop").css({
            'transform': 'rotate(' + rotates + 'deg)', '-o-transform': 'rotate(' + rotates + 'deg)',
            '-moz-transform': 'rotate(' + rotates + 'deg)', '-webkit-transform': 'rotate(' + rotates + 'deg)', '-ms-transform': 'rotate(' + rotates + 'deg)'
        });
    }, 100);
}
function funmovemove2() {
    Inbottommove = setInterval(function () {
        rotates = rotates - 1;
        if (rotates < 0) {
            clearInterval(Inbottommove);
            funmovemove();
        }
        $(".hot_imgloop").css({
            'transform': 'rotate(' + rotates + 'deg)', '-o-transform': 'rotate(' + rotates + 'deg)',
            '-moz-transform': 'rotate(' + rotates + 'deg)', '-webkit-transform': 'rotate(' + rotates + 'deg)', '-ms-transform': 'rotate(' + rotates + 'deg)'
        });
    }, 100);
}




function funshake() {
    window.addEventListener('deviceorientation', function (eventData) {
        deviceOrientationEvent(eventData);
    });
}
function deviceOrientationEvent(event) {
    //rotates = Math.round(event.beta);
    if (parseInt(event.alpha) >= 0 && parseInt(event.alpha) <= 20) {
        rotates = parseInt(event.alpha) * 1 * -1;
        $(".hot_imgloop").css({
            'transform': 'rotate(' + rotates + 'deg)', '-o-transform': 'rotate(' + rotates + 'deg)',
            '-moz-transform': 'rotate(' + rotates + 'deg)', '-webkit-transform': 'rotate(' + rotates + 'deg)', '-ms-transform': 'rotate(' + rotates + 'deg)'
        });
    }
    else if (parseInt(event.alpha) >= -30 && parseInt(event.alpha) < 0) {
        rotates = parseInt(event.alpha) * 1 * -1;
        $(".hot_imgloop").css({
            'transform': 'rotate(' + rotates + 'deg)', '-o-transform': 'rotate(' + rotates + 'deg)',
            '-moz-transform': 'rotate(' + rotates + 'deg)', '-webkit-transform': 'rotate(' + rotates + 'deg)', '-ms-transform': 'rotate(' + rotates + 'deg)'
        });
    }
}

function funcategorymove() {
    var isMove = false;
    var tx, x, ty, y;
    //滑动开始事件  
    function touchStart(e) {
        isMove = true;
        tx = parseInt($("#bottomcategory").css('left'));
        x = e.touches[0].pageX;
    }
    function touchMove(e) {
        if (isMove) {
            var n = tx + e.touches[0].pageX - x;
            if (n >= -460 && n <= 0) {
                $("#bottomcategory").css("left", n);
            }
        }
    }
    document.getElementById("bottomcategory").addEventListener('touchstart', touchStart);
    document.getElementById("bottomcategory").addEventListener('touchmove', touchMove);
    document.getElementById("bottomcategory").addEventListener('touchend', function (e) {
        isMove = false;
    });
}