import Hn from "react";
var fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function V(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var le = { exports: {} }, Q = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ea;
function Zu() {
  if (ea) return Q;
  ea = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, a, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      i = {};
      for (var u in a)
        u !== "key" && (i[u] = a[u]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return Q.Fragment = r, Q.jsx = t, Q.jsxs = t, Q;
}
var ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ra;
function Qu() {
  return ra || (ra = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === B ? null : h.displayName || h.name || null;
      if (typeof h == "string") return h;
      switch (h) {
        case y:
          return "Fragment";
        case x:
          return "Profiler";
        case g:
          return "StrictMode";
        case D:
          return "Suspense";
        case O:
          return "SuspenseList";
        case F:
          return "Activity";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case E:
            return "Portal";
          case A:
            return (h.displayName || "Context") + ".Provider";
          case b:
            return (h._context.displayName || "Context") + ".Consumer";
          case C:
            var q = h.render;
            return h = h.displayName, h || (h = q.displayName || q.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case S:
            return q = h.displayName || null, q !== null ? q : e(h.type) || "Memo";
          case j:
            q = h._payload, h = h._init;
            try {
              return e(h(q));
            } catch {
            }
        }
      return null;
    }
    function r(h) {
      return "" + h;
    }
    function t(h) {
      try {
        r(h);
        var q = !1;
      } catch {
        q = !0;
      }
      if (q) {
        q = console;
        var N = q.error, M = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return N.call(
          q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), r(h);
      }
    }
    function n(h) {
      if (h === y) return "<>";
      if (typeof h == "object" && h !== null && h.$$typeof === j)
        return "<...>";
      try {
        var q = e(h);
        return q ? "<" + q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var h = P.A;
      return h === null ? null : h.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(h) {
      if (v.call(h, "key")) {
        var q = Object.getOwnPropertyDescriptor(h, "key").get;
        if (q && q.isReactWarning) return !1;
      }
      return h.key !== void 0;
    }
    function u(h, q) {
      function N() {
        w || (w = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          q
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: N,
        configurable: !0
      });
    }
    function o() {
      var h = e(this.type);
      return I[h] || (I[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function c(h, q, N, M, H, U, be, qe) {
      return N = U.ref, h = {
        $$typeof: _,
        type: h,
        key: q,
        props: U,
        _owner: H
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(h, "ref", {
        enumerable: !1,
        get: o
      }) : Object.defineProperty(h, "ref", { enumerable: !1, value: null }), h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(h, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(h, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: be
      }), Object.defineProperty(h, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: qe
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function f(h, q, N, M, H, U, be, qe) {
      var k = q.children;
      if (k !== void 0)
        if (M)
          if (l(k)) {
            for (M = 0; M < k.length; M++)
              d(k[M]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(k);
      if (v.call(q, "key")) {
        k = e(h);
        var J = Object.keys(q).filter(function(Xu) {
          return Xu !== "key";
        });
        M = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", G[k + M] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          k,
          J,
          k
        ), G[k + M] = !0);
      }
      if (k = null, N !== void 0 && (t(N), k = "" + N), s(q) && (t(q.key), k = "" + q.key), "key" in q) {
        N = {};
        for (var Re in q)
          Re !== "key" && (N[Re] = q[Re]);
      } else N = q;
      return k && u(
        N,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), c(
        h,
        k,
        U,
        H,
        a(),
        N,
        be,
        qe
      );
    }
    function d(h) {
      typeof h == "object" && h !== null && h.$$typeof === _ && h._store && (h._store.validated = 1);
    }
    var p = Hn, _ = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), A = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), P = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, v = Object.prototype.hasOwnProperty, l = Array.isArray, m = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(h) {
        return h();
      }
    };
    var w, I = {}, L = p["react-stack-bottom-frame"].bind(
      p,
      i
    )(), T = m(n(i)), G = {};
    ee.Fragment = y, ee.jsx = function(h, q, N, M, H) {
      var U = 1e4 > P.recentlyCreatedOwnerStacks++;
      return f(
        h,
        q,
        N,
        !1,
        M,
        H,
        U ? Error("react-stack-top-frame") : L,
        U ? m(n(h)) : T
      );
    }, ee.jsxs = function(h, q, N, M, H) {
      var U = 1e4 > P.recentlyCreatedOwnerStacks++;
      return f(
        h,
        q,
        N,
        !0,
        M,
        H,
        U ? Error("react-stack-top-frame") : L,
        U ? m(n(h)) : T
      );
    };
  }()), ee;
}
var ta;
function eo() {
  return ta || (ta = 1, process.env.NODE_ENV === "production" ? le.exports = Zu() : le.exports = Qu()), le.exports;
}
var R = eo(), Ee, na;
function Cu() {
  if (na) return Ee;
  na = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = 0, s = []; ++n < a; ) {
      var u = r[n];
      t(u, n, r) && (s[i++] = u);
    }
    return s;
  }
  return Ee = e, Ee;
}
var xe, aa;
function ro() {
  if (aa) return xe;
  aa = 1;
  function e(r) {
    return function(t, n, a) {
      for (var i = -1, s = Object(t), u = a(t), o = u.length; o--; ) {
        var c = u[r ? o : ++i];
        if (n(s[c], c, s) === !1)
          break;
      }
      return t;
    };
  }
  return xe = e, xe;
}
var Ce, ia;
function to() {
  if (ia) return Ce;
  ia = 1;
  var e = ro(), r = e();
  return Ce = r, Ce;
}
var Pe, sa;
function no() {
  if (sa) return Pe;
  sa = 1;
  function e(r, t) {
    for (var n = -1, a = Array(r); ++n < r; )
      a[n] = t(n);
    return a;
  }
  return Pe = e, Pe;
}
var Se, ua;
function Pu() {
  if (ua) return Se;
  ua = 1;
  var e = typeof fe == "object" && fe && fe.Object === Object && fe;
  return Se = e, Se;
}
var Oe, oa;
function Y() {
  if (oa) return Oe;
  oa = 1;
  var e = Pu(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return Oe = t, Oe;
}
var Te, ca;
function ae() {
  if (ca) return Te;
  ca = 1;
  var e = Y(), r = e.Symbol;
  return Te = r, Te;
}
var Ae, fa;
function ao() {
  if (fa) return Ae;
  fa = 1;
  var e = ae(), r = Object.prototype, t = r.hasOwnProperty, n = r.toString, a = e ? e.toStringTag : void 0;
  function i(s) {
    var u = t.call(s, a), o = s[a];
    try {
      s[a] = void 0;
      var c = !0;
    } catch {
    }
    var f = n.call(s);
    return c && (u ? s[a] = o : delete s[a]), f;
  }
  return Ae = i, Ae;
}
var we, la;
function io() {
  if (la) return we;
  la = 1;
  var e = Object.prototype, r = e.toString;
  function t(n) {
    return r.call(n);
  }
  return we = t, we;
}
var Ie, da;
function ie() {
  if (da) return Ie;
  da = 1;
  var e = ae(), r = ao(), t = io(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function s(u) {
    return u == null ? u === void 0 ? a : n : i && i in Object(u) ? r(u) : t(u);
  }
  return Ie = s, Ie;
}
var Ne, ha;
function X() {
  if (ha) return Ne;
  ha = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return Ne = e, Ne;
}
var De, va;
function so() {
  if (va) return De;
  va = 1;
  var e = ie(), r = X(), t = "[object Arguments]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return De = n, De;
}
var je, pa;
function Kn() {
  if (pa) return je;
  pa = 1;
  var e = so(), r = X(), t = Object.prototype, n = t.hasOwnProperty, a = t.propertyIsEnumerable, i = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(s) {
    return r(s) && n.call(s, "callee") && !a.call(s, "callee");
  };
  return je = i, je;
}
var Fe, _a;
function K() {
  if (_a) return Fe;
  _a = 1;
  var e = Array.isArray;
  return Fe = e, Fe;
}
var te = { exports: {} }, Me, ga;
function uo() {
  if (ga) return Me;
  ga = 1;
  function e() {
    return !1;
  }
  return Me = e, Me;
}
te.exports;
var ma;
function Su() {
  return ma || (ma = 1, function(e, r) {
    var t = Y(), n = uo(), a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, u = s ? t.Buffer : void 0, o = u ? u.isBuffer : void 0, c = o || n;
    e.exports = c;
  }(te, te.exports)), te.exports;
}
var ke, ya;
function Un() {
  if (ya) return ke;
  ya = 1;
  var e = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
  function t(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && r.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return ke = t, ke;
}
var Be, ba;
function Vn() {
  if (ba) return Be;
  ba = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return Be = r, Be;
}
var Le, qa;
function oo() {
  if (qa) return Le;
  qa = 1;
  var e = ie(), r = Vn(), t = X(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", s = "[object Date]", u = "[object Error]", o = "[object Function]", c = "[object Map]", f = "[object Number]", d = "[object Object]", p = "[object RegExp]", _ = "[object Set]", E = "[object String]", y = "[object WeakMap]", g = "[object ArrayBuffer]", x = "[object DataView]", b = "[object Float32Array]", A = "[object Float64Array]", C = "[object Int8Array]", D = "[object Int16Array]", O = "[object Int32Array]", S = "[object Uint8Array]", j = "[object Uint8ClampedArray]", F = "[object Uint16Array]", B = "[object Uint32Array]", P = {};
  P[b] = P[A] = P[C] = P[D] = P[O] = P[S] = P[j] = P[F] = P[B] = !0, P[n] = P[a] = P[g] = P[i] = P[x] = P[s] = P[u] = P[o] = P[c] = P[f] = P[d] = P[p] = P[_] = P[E] = P[y] = !1;
  function v(l) {
    return t(l) && r(l.length) && !!P[e(l)];
  }
  return Le = v, Le;
}
var Ge, Ra;
function Yn() {
  if (Ra) return Ge;
  Ra = 1;
  function e(r) {
    return function(t) {
      return r(t);
    };
  }
  return Ge = e, Ge;
}
var ne = { exports: {} };
ne.exports;
var Ea;
function co() {
  return Ea || (Ea = 1, function(e, r) {
    var t = Pu(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && t.process, u = function() {
      try {
        var o = a && a.require && a.require("util").types;
        return o || s && s.binding && s.binding("util");
      } catch {
      }
    }();
    e.exports = u;
  }(ne, ne.exports)), ne.exports;
}
var He, xa;
function Ou() {
  if (xa) return He;
  xa = 1;
  var e = oo(), r = Yn(), t = co(), n = t && t.isTypedArray, a = n ? r(n) : e;
  return He = a, He;
}
var Ke, Ca;
function Tu() {
  if (Ca) return Ke;
  Ca = 1;
  var e = no(), r = Kn(), t = K(), n = Su(), a = Un(), i = Ou(), s = Object.prototype, u = s.hasOwnProperty;
  function o(c, f) {
    var d = t(c), p = !d && r(c), _ = !d && !p && n(c), E = !d && !p && !_ && i(c), y = d || p || _ || E, g = y ? e(c.length, String) : [], x = g.length;
    for (var b in c)
      (f || u.call(c, b)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      _ && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      E && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
      a(b, x))) && g.push(b);
    return g;
  }
  return Ke = o, Ke;
}
var Ue, Pa;
function Au() {
  if (Pa) return Ue;
  Pa = 1;
  var e = Object.prototype;
  function r(t) {
    var n = t && t.constructor, a = typeof n == "function" && n.prototype || e;
    return t === a;
  }
  return Ue = r, Ue;
}
var Ve, Sa;
function fo() {
  if (Sa) return Ve;
  Sa = 1;
  function e(r, t) {
    return function(n) {
      return r(t(n));
    };
  }
  return Ve = e, Ve;
}
var Ye, Oa;
function lo() {
  if (Oa) return Ye;
  Oa = 1;
  var e = fo(), r = e(Object.keys, Object);
  return Ye = r, Ye;
}
var We, Ta;
function ho() {
  if (Ta) return We;
  Ta = 1;
  var e = Au(), r = lo(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return r(i);
    var s = [];
    for (var u in Object(i))
      n.call(i, u) && u != "constructor" && s.push(u);
    return s;
  }
  return We = a, We;
}
var ze, Aa;
function Z() {
  if (Aa) return ze;
  Aa = 1;
  function e(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return ze = e, ze;
}
var $e, wa;
function wu() {
  if (wa) return $e;
  wa = 1;
  var e = ie(), r = Z(), t = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function s(u) {
    if (!r(u))
      return !1;
    var o = e(u);
    return o == n || o == a || o == t || o == i;
  }
  return $e = s, $e;
}
var Je, Ia;
function z() {
  if (Ia) return Je;
  Ia = 1;
  var e = wu(), r = Vn();
  function t(n) {
    return n != null && r(n.length) && !e(n);
  }
  return Je = t, Je;
}
var Xe, Na;
function de() {
  if (Na) return Xe;
  Na = 1;
  var e = Tu(), r = ho(), t = z();
  function n(a) {
    return t(a) ? e(a) : r(a);
  }
  return Xe = n, Xe;
}
var Ze, Da;
function vo() {
  if (Da) return Ze;
  Da = 1;
  var e = to(), r = de();
  function t(n, a) {
    return n && e(n, a, r);
  }
  return Ze = t, Ze;
}
var Qe, ja;
function po() {
  if (ja) return Qe;
  ja = 1;
  var e = z();
  function r(t, n) {
    return function(a, i) {
      if (a == null)
        return a;
      if (!e(a))
        return t(a, i);
      for (var s = a.length, u = n ? s : -1, o = Object(a); (n ? u-- : ++u < s) && i(o[u], u, o) !== !1; )
        ;
      return a;
    };
  }
  return Qe = r, Qe;
}
var er, Fa;
function Wn() {
  if (Fa) return er;
  Fa = 1;
  var e = vo(), r = po(), t = r(e);
  return er = t, er;
}
var rr, Ma;
function _o() {
  if (Ma) return rr;
  Ma = 1;
  var e = Wn();
  function r(t, n) {
    var a = [];
    return e(t, function(i, s, u) {
      n(i, s, u) && a.push(i);
    }), a;
  }
  return rr = r, rr;
}
var tr, ka;
function go() {
  if (ka) return tr;
  ka = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return tr = e, tr;
}
var nr, Ba;
function he() {
  if (Ba) return nr;
  Ba = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return nr = e, nr;
}
var ar, La;
function ve() {
  if (La) return ar;
  La = 1;
  var e = he();
  function r(t, n) {
    for (var a = t.length; a--; )
      if (e(t[a][0], n))
        return a;
    return -1;
  }
  return ar = r, ar;
}
var ir, Ga;
function mo() {
  if (Ga) return ir;
  Ga = 1;
  var e = ve(), r = Array.prototype, t = r.splice;
  function n(a) {
    var i = this.__data__, s = e(i, a);
    if (s < 0)
      return !1;
    var u = i.length - 1;
    return s == u ? i.pop() : t.call(i, s, 1), --this.size, !0;
  }
  return ir = n, ir;
}
var sr, Ha;
function yo() {
  if (Ha) return sr;
  Ha = 1;
  var e = ve();
  function r(t) {
    var n = this.__data__, a = e(n, t);
    return a < 0 ? void 0 : n[a][1];
  }
  return sr = r, sr;
}
var ur, Ka;
function bo() {
  if (Ka) return ur;
  Ka = 1;
  var e = ve();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return ur = r, ur;
}
var or, Ua;
function qo() {
  if (Ua) return or;
  Ua = 1;
  var e = ve();
  function r(t, n) {
    var a = this.__data__, i = e(a, t);
    return i < 0 ? (++this.size, a.push([t, n])) : a[i][1] = n, this;
  }
  return or = r, or;
}
var cr, Va;
function pe() {
  if (Va) return cr;
  Va = 1;
  var e = go(), r = mo(), t = yo(), n = bo(), a = qo();
  function i(s) {
    var u = -1, o = s == null ? 0 : s.length;
    for (this.clear(); ++u < o; ) {
      var c = s[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, cr = i, cr;
}
var fr, Ya;
function Ro() {
  if (Ya) return fr;
  Ya = 1;
  var e = pe();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return fr = r, fr;
}
var lr, Wa;
function Eo() {
  if (Wa) return lr;
  Wa = 1;
  function e(r) {
    var t = this.__data__, n = t.delete(r);
    return this.size = t.size, n;
  }
  return lr = e, lr;
}
var dr, za;
function xo() {
  if (za) return dr;
  za = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return dr = e, dr;
}
var hr, $a;
function Co() {
  if ($a) return hr;
  $a = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return hr = e, hr;
}
var vr, Ja;
function Po() {
  if (Ja) return vr;
  Ja = 1;
  var e = Y(), r = e["__core-js_shared__"];
  return vr = r, vr;
}
var pr, Xa;
function So() {
  if (Xa) return pr;
  Xa = 1;
  var e = Po(), r = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function t(n) {
    return !!r && r in n;
  }
  return pr = t, pr;
}
var _r, Za;
function Iu() {
  if (Za) return _r;
  Za = 1;
  var e = Function.prototype, r = e.toString;
  function t(n) {
    if (n != null) {
      try {
        return r.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return _r = t, _r;
}
var gr, Qa;
function Oo() {
  if (Qa) return gr;
  Qa = 1;
  var e = wu(), r = So(), t = Z(), n = Iu(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, u = Object.prototype, o = s.toString, c = u.hasOwnProperty, f = RegExp(
    "^" + o.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function d(p) {
    if (!t(p) || r(p))
      return !1;
    var _ = e(p) ? f : i;
    return _.test(n(p));
  }
  return gr = d, gr;
}
var mr, ei;
function To() {
  if (ei) return mr;
  ei = 1;
  function e(r, t) {
    return r?.[t];
  }
  return mr = e, mr;
}
var yr, ri;
function $() {
  if (ri) return yr;
  ri = 1;
  var e = Oo(), r = To();
  function t(n, a) {
    var i = r(n, a);
    return e(i) ? i : void 0;
  }
  return yr = t, yr;
}
var br, ti;
function zn() {
  if (ti) return br;
  ti = 1;
  var e = $(), r = Y(), t = e(r, "Map");
  return br = t, br;
}
var qr, ni;
function _e() {
  if (ni) return qr;
  ni = 1;
  var e = $(), r = e(Object, "create");
  return qr = r, qr;
}
var Rr, ai;
function Ao() {
  if (ai) return Rr;
  ai = 1;
  var e = _e();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Rr = r, Rr;
}
var Er, ii;
function wo() {
  if (ii) return Er;
  ii = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return Er = e, Er;
}
var xr, si;
function Io() {
  if (si) return xr;
  si = 1;
  var e = _e(), r = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    var s = this.__data__;
    if (e) {
      var u = s[i];
      return u === r ? void 0 : u;
    }
    return n.call(s, i) ? s[i] : void 0;
  }
  return xr = a, xr;
}
var Cr, ui;
function No() {
  if (ui) return Cr;
  ui = 1;
  var e = _e(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : t.call(i, a);
  }
  return Cr = n, Cr;
}
var Pr, oi;
function Do() {
  if (oi) return Pr;
  oi = 1;
  var e = _e(), r = "__lodash_hash_undefined__";
  function t(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? r : a, this;
  }
  return Pr = t, Pr;
}
var Sr, ci;
function jo() {
  if (ci) return Sr;
  ci = 1;
  var e = Ao(), r = wo(), t = Io(), n = No(), a = Do();
  function i(s) {
    var u = -1, o = s == null ? 0 : s.length;
    for (this.clear(); ++u < o; ) {
      var c = s[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Sr = i, Sr;
}
var Or, fi;
function Fo() {
  if (fi) return Or;
  fi = 1;
  var e = jo(), r = pe(), t = zn();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return Or = n, Or;
}
var Tr, li;
function Mo() {
  if (li) return Tr;
  li = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return Tr = e, Tr;
}
var Ar, di;
function ge() {
  if (di) return Ar;
  di = 1;
  var e = Mo();
  function r(t, n) {
    var a = t.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Ar = r, Ar;
}
var wr, hi;
function ko() {
  if (hi) return wr;
  hi = 1;
  var e = ge();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return wr = r, wr;
}
var Ir, vi;
function Bo() {
  if (vi) return Ir;
  vi = 1;
  var e = ge();
  function r(t) {
    return e(this, t).get(t);
  }
  return Ir = r, Ir;
}
var Nr, pi;
function Lo() {
  if (pi) return Nr;
  pi = 1;
  var e = ge();
  function r(t) {
    return e(this, t).has(t);
  }
  return Nr = r, Nr;
}
var Dr, _i;
function Go() {
  if (_i) return Dr;
  _i = 1;
  var e = ge();
  function r(t, n) {
    var a = e(this, t), i = a.size;
    return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
  }
  return Dr = r, Dr;
}
var jr, gi;
function $n() {
  if (gi) return jr;
  gi = 1;
  var e = Fo(), r = ko(), t = Bo(), n = Lo(), a = Go();
  function i(s) {
    var u = -1, o = s == null ? 0 : s.length;
    for (this.clear(); ++u < o; ) {
      var c = s[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, jr = i, jr;
}
var Fr, mi;
function Ho() {
  if (mi) return Fr;
  mi = 1;
  var e = pe(), r = zn(), t = $n(), n = 200;
  function a(i, s) {
    var u = this.__data__;
    if (u instanceof e) {
      var o = u.__data__;
      if (!r || o.length < n - 1)
        return o.push([i, s]), this.size = ++u.size, this;
      u = this.__data__ = new t(o);
    }
    return u.set(i, s), this.size = u.size, this;
  }
  return Fr = a, Fr;
}
var Mr, yi;
function Nu() {
  if (yi) return Mr;
  yi = 1;
  var e = pe(), r = Ro(), t = Eo(), n = xo(), a = Co(), i = Ho();
  function s(u) {
    var o = this.__data__ = new e(u);
    this.size = o.size;
  }
  return s.prototype.clear = r, s.prototype.delete = t, s.prototype.get = n, s.prototype.has = a, s.prototype.set = i, Mr = s, Mr;
}
var kr, bi;
function Ko() {
  if (bi) return kr;
  bi = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return kr = r, kr;
}
var Br, qi;
function Uo() {
  if (qi) return Br;
  qi = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return Br = e, Br;
}
var Lr, Ri;
function Du() {
  if (Ri) return Lr;
  Ri = 1;
  var e = $n(), r = Ko(), t = Uo();
  function n(a) {
    var i = -1, s = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < s; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = r, n.prototype.has = t, Lr = n, Lr;
}
var Gr, Ei;
function Vo() {
  if (Ei) return Gr;
  Ei = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a; )
      if (t(r[n], n, r))
        return !0;
    return !1;
  }
  return Gr = e, Gr;
}
var Hr, xi;
function ju() {
  if (xi) return Hr;
  xi = 1;
  function e(r, t) {
    return r.has(t);
  }
  return Hr = e, Hr;
}
var Kr, Ci;
function Fu() {
  if (Ci) return Kr;
  Ci = 1;
  var e = Du(), r = Vo(), t = ju(), n = 1, a = 2;
  function i(s, u, o, c, f, d) {
    var p = o & n, _ = s.length, E = u.length;
    if (_ != E && !(p && E > _))
      return !1;
    var y = d.get(s), g = d.get(u);
    if (y && g)
      return y == u && g == s;
    var x = -1, b = !0, A = o & a ? new e() : void 0;
    for (d.set(s, u), d.set(u, s); ++x < _; ) {
      var C = s[x], D = u[x];
      if (c)
        var O = p ? c(D, C, x, u, s, d) : c(C, D, x, s, u, d);
      if (O !== void 0) {
        if (O)
          continue;
        b = !1;
        break;
      }
      if (A) {
        if (!r(u, function(S, j) {
          if (!t(A, j) && (C === S || f(C, S, o, c, d)))
            return A.push(j);
        })) {
          b = !1;
          break;
        }
      } else if (!(C === D || f(C, D, o, c, d))) {
        b = !1;
        break;
      }
    }
    return d.delete(s), d.delete(u), b;
  }
  return Kr = i, Kr;
}
var Ur, Pi;
function Yo() {
  if (Pi) return Ur;
  Pi = 1;
  var e = Y(), r = e.Uint8Array;
  return Ur = r, Ur;
}
var Vr, Si;
function Wo() {
  if (Si) return Vr;
  Si = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return Vr = e, Vr;
}
var Yr, Oi;
function zo() {
  if (Oi) return Yr;
  Oi = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a) {
      n[++t] = a;
    }), n;
  }
  return Yr = e, Yr;
}
var Wr, Ti;
function $o() {
  if (Ti) return Wr;
  Ti = 1;
  var e = ae(), r = Yo(), t = he(), n = Fu(), a = Wo(), i = zo(), s = 1, u = 2, o = "[object Boolean]", c = "[object Date]", f = "[object Error]", d = "[object Map]", p = "[object Number]", _ = "[object RegExp]", E = "[object Set]", y = "[object String]", g = "[object Symbol]", x = "[object ArrayBuffer]", b = "[object DataView]", A = e ? e.prototype : void 0, C = A ? A.valueOf : void 0;
  function D(O, S, j, F, B, P, v) {
    switch (j) {
      case b:
        if (O.byteLength != S.byteLength || O.byteOffset != S.byteOffset)
          return !1;
        O = O.buffer, S = S.buffer;
      case x:
        return !(O.byteLength != S.byteLength || !P(new r(O), new r(S)));
      case o:
      case c:
      case p:
        return t(+O, +S);
      case f:
        return O.name == S.name && O.message == S.message;
      case _:
      case y:
        return O == S + "";
      case d:
        var l = a;
      case E:
        var m = F & s;
        if (l || (l = i), O.size != S.size && !m)
          return !1;
        var w = v.get(O);
        if (w)
          return w == S;
        F |= u, v.set(O, S);
        var I = n(l(O), l(S), F, B, P, v);
        return v.delete(O), I;
      case g:
        if (C)
          return C.call(O) == C.call(S);
    }
    return !1;
  }
  return Wr = D, Wr;
}
var zr, Ai;
function Mu() {
  if (Ai) return zr;
  Ai = 1;
  function e(r, t) {
    for (var n = -1, a = t.length, i = r.length; ++n < a; )
      r[i + n] = t[n];
    return r;
  }
  return zr = e, zr;
}
var $r, wi;
function Jo() {
  if (wi) return $r;
  wi = 1;
  var e = Mu(), r = K();
  function t(n, a, i) {
    var s = a(n);
    return r(n) ? s : e(s, i(n));
  }
  return $r = t, $r;
}
var Jr, Ii;
function Xo() {
  if (Ii) return Jr;
  Ii = 1;
  function e() {
    return [];
  }
  return Jr = e, Jr;
}
var Xr, Ni;
function Zo() {
  if (Ni) return Xr;
  Ni = 1;
  var e = Cu(), r = Xo(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(s) {
    return s == null ? [] : (s = Object(s), e(a(s), function(u) {
      return n.call(s, u);
    }));
  } : r;
  return Xr = i, Xr;
}
var Zr, Di;
function Qo() {
  if (Di) return Zr;
  Di = 1;
  var e = Jo(), r = Zo(), t = de();
  function n(a) {
    return e(a, t, r);
  }
  return Zr = n, Zr;
}
var Qr, ji;
function ec() {
  if (ji) return Qr;
  ji = 1;
  var e = Qo(), r = 1, t = Object.prototype, n = t.hasOwnProperty;
  function a(i, s, u, o, c, f) {
    var d = u & r, p = e(i), _ = p.length, E = e(s), y = E.length;
    if (_ != y && !d)
      return !1;
    for (var g = _; g--; ) {
      var x = p[g];
      if (!(d ? x in s : n.call(s, x)))
        return !1;
    }
    var b = f.get(i), A = f.get(s);
    if (b && A)
      return b == s && A == i;
    var C = !0;
    f.set(i, s), f.set(s, i);
    for (var D = d; ++g < _; ) {
      x = p[g];
      var O = i[x], S = s[x];
      if (o)
        var j = d ? o(S, O, x, s, i, f) : o(O, S, x, i, s, f);
      if (!(j === void 0 ? O === S || c(O, S, u, o, f) : j)) {
        C = !1;
        break;
      }
      D || (D = x == "constructor");
    }
    if (C && !D) {
      var F = i.constructor, B = s.constructor;
      F != B && "constructor" in i && "constructor" in s && !(typeof F == "function" && F instanceof F && typeof B == "function" && B instanceof B) && (C = !1);
    }
    return f.delete(i), f.delete(s), C;
  }
  return Qr = a, Qr;
}
var et, Fi;
function rc() {
  if (Fi) return et;
  Fi = 1;
  var e = $(), r = Y(), t = e(r, "DataView");
  return et = t, et;
}
var rt, Mi;
function tc() {
  if (Mi) return rt;
  Mi = 1;
  var e = $(), r = Y(), t = e(r, "Promise");
  return rt = t, rt;
}
var tt, ki;
function nc() {
  if (ki) return tt;
  ki = 1;
  var e = $(), r = Y(), t = e(r, "Set");
  return tt = t, tt;
}
var nt, Bi;
function ac() {
  if (Bi) return nt;
  Bi = 1;
  var e = $(), r = Y(), t = e(r, "WeakMap");
  return nt = t, nt;
}
var at, Li;
function ic() {
  if (Li) return at;
  Li = 1;
  var e = rc(), r = zn(), t = tc(), n = nc(), a = ac(), i = ie(), s = Iu(), u = "[object Map]", o = "[object Object]", c = "[object Promise]", f = "[object Set]", d = "[object WeakMap]", p = "[object DataView]", _ = s(e), E = s(r), y = s(t), g = s(n), x = s(a), b = i;
  return (e && b(new e(new ArrayBuffer(1))) != p || r && b(new r()) != u || t && b(t.resolve()) != c || n && b(new n()) != f || a && b(new a()) != d) && (b = function(A) {
    var C = i(A), D = C == o ? A.constructor : void 0, O = D ? s(D) : "";
    if (O)
      switch (O) {
        case _:
          return p;
        case E:
          return u;
        case y:
          return c;
        case g:
          return f;
        case x:
          return d;
      }
    return C;
  }), at = b, at;
}
var it, Gi;
function sc() {
  if (Gi) return it;
  Gi = 1;
  var e = Nu(), r = Fu(), t = $o(), n = ec(), a = ic(), i = K(), s = Su(), u = Ou(), o = 1, c = "[object Arguments]", f = "[object Array]", d = "[object Object]", p = Object.prototype, _ = p.hasOwnProperty;
  function E(y, g, x, b, A, C) {
    var D = i(y), O = i(g), S = D ? f : a(y), j = O ? f : a(g);
    S = S == c ? d : S, j = j == c ? d : j;
    var F = S == d, B = j == d, P = S == j;
    if (P && s(y)) {
      if (!s(g))
        return !1;
      D = !0, F = !1;
    }
    if (P && !F)
      return C || (C = new e()), D || u(y) ? r(y, g, x, b, A, C) : t(y, g, S, x, b, A, C);
    if (!(x & o)) {
      var v = F && _.call(y, "__wrapped__"), l = B && _.call(g, "__wrapped__");
      if (v || l) {
        var m = v ? y.value() : y, w = l ? g.value() : g;
        return C || (C = new e()), A(m, w, x, b, C);
      }
    }
    return P ? (C || (C = new e()), n(y, g, x, b, A, C)) : !1;
  }
  return it = E, it;
}
var st, Hi;
function ku() {
  if (Hi) return st;
  Hi = 1;
  var e = sc(), r = X();
  function t(n, a, i, s, u) {
    return n === a ? !0 : n == null || a == null || !r(n) && !r(a) ? n !== n && a !== a : e(n, a, i, s, t, u);
  }
  return st = t, st;
}
var ut, Ki;
function uc() {
  if (Ki) return ut;
  Ki = 1;
  var e = Nu(), r = ku(), t = 1, n = 2;
  function a(i, s, u, o) {
    var c = u.length, f = c, d = !o;
    if (i == null)
      return !f;
    for (i = Object(i); c--; ) {
      var p = u[c];
      if (d && p[2] ? p[1] !== i[p[0]] : !(p[0] in i))
        return !1;
    }
    for (; ++c < f; ) {
      p = u[c];
      var _ = p[0], E = i[_], y = p[1];
      if (d && p[2]) {
        if (E === void 0 && !(_ in i))
          return !1;
      } else {
        var g = new e();
        if (o)
          var x = o(E, y, _, i, s, g);
        if (!(x === void 0 ? r(y, E, t | n, o, g) : x))
          return !1;
      }
    }
    return !0;
  }
  return ut = a, ut;
}
var ot, Ui;
function Bu() {
  if (Ui) return ot;
  Ui = 1;
  var e = Z();
  function r(t) {
    return t === t && !e(t);
  }
  return ot = r, ot;
}
var ct, Vi;
function oc() {
  if (Vi) return ct;
  Vi = 1;
  var e = Bu(), r = de();
  function t(n) {
    for (var a = r(n), i = a.length; i--; ) {
      var s = a[i], u = n[s];
      a[i] = [s, u, e(u)];
    }
    return a;
  }
  return ct = t, ct;
}
var ft, Yi;
function Lu() {
  if (Yi) return ft;
  Yi = 1;
  function e(r, t) {
    return function(n) {
      return n == null ? !1 : n[r] === t && (t !== void 0 || r in Object(n));
    };
  }
  return ft = e, ft;
}
var lt, Wi;
function cc() {
  if (Wi) return lt;
  Wi = 1;
  var e = uc(), r = oc(), t = Lu();
  function n(a) {
    var i = r(a);
    return i.length == 1 && i[0][2] ? t(i[0][0], i[0][1]) : function(s) {
      return s === a || e(s, a, i);
    };
  }
  return lt = n, lt;
}
var dt, zi;
function se() {
  if (zi) return dt;
  zi = 1;
  var e = ie(), r = X(), t = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || r(a) && e(a) == t;
  }
  return dt = n, dt;
}
var ht, $i;
function Jn() {
  if ($i) return ht;
  $i = 1;
  var e = K(), r = se(), t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, s) {
    if (e(i))
      return !1;
    var u = typeof i;
    return u == "number" || u == "symbol" || u == "boolean" || i == null || r(i) ? !0 : n.test(i) || !t.test(i) || s != null && i in Object(s);
  }
  return ht = a, ht;
}
var vt, Ji;
function fc() {
  if (Ji) return vt;
  Ji = 1;
  var e = $n(), r = "Expected a function";
  function t(n, a) {
    if (typeof n != "function" || a != null && typeof a != "function")
      throw new TypeError(r);
    var i = function() {
      var s = arguments, u = a ? a.apply(this, s) : s[0], o = i.cache;
      if (o.has(u))
        return o.get(u);
      var c = n.apply(this, s);
      return i.cache = o.set(u, c) || o, c;
    };
    return i.cache = new (t.Cache || e)(), i;
  }
  return t.Cache = e, vt = t, vt;
}
var pt, Xi;
function lc() {
  if (Xi) return pt;
  Xi = 1;
  var e = fc(), r = 500;
  function t(n) {
    var a = e(n, function(s) {
      return i.size === r && i.clear(), s;
    }), i = a.cache;
    return a;
  }
  return pt = t, pt;
}
var _t, Zi;
function dc() {
  if (Zi) return _t;
  Zi = 1;
  var e = lc(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, t = /\\(\\)?/g, n = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(r, function(s, u, o, c) {
      i.push(o ? c.replace(t, "$1") : u || s);
    }), i;
  });
  return _t = n, _t;
}
var gt, Qi;
function me() {
  if (Qi) return gt;
  Qi = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = Array(a); ++n < a; )
      i[n] = t(r[n], n, r);
    return i;
  }
  return gt = e, gt;
}
var mt, es;
function hc() {
  if (es) return mt;
  es = 1;
  var e = ae(), r = me(), t = K(), n = se(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
  function s(u) {
    if (typeof u == "string")
      return u;
    if (t(u))
      return r(u, s) + "";
    if (n(u))
      return i ? i.call(u) : "";
    var o = u + "";
    return o == "0" && 1 / u == -1 / 0 ? "-0" : o;
  }
  return mt = s, mt;
}
var yt, rs;
function vc() {
  if (rs) return yt;
  rs = 1;
  var e = hc();
  function r(t) {
    return t == null ? "" : e(t);
  }
  return yt = r, yt;
}
var bt, ts;
function Gu() {
  if (ts) return bt;
  ts = 1;
  var e = K(), r = Jn(), t = dc(), n = vc();
  function a(i, s) {
    return e(i) ? i : r(i, s) ? [i] : t(n(i));
  }
  return bt = a, bt;
}
var qt, ns;
function ye() {
  if (ns) return qt;
  ns = 1;
  var e = se();
  function r(t) {
    if (typeof t == "string" || e(t))
      return t;
    var n = t + "";
    return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
  }
  return qt = r, qt;
}
var Rt, as;
function Xn() {
  if (as) return Rt;
  as = 1;
  var e = Gu(), r = ye();
  function t(n, a) {
    a = e(a, n);
    for (var i = 0, s = a.length; n != null && i < s; )
      n = n[r(a[i++])];
    return i && i == s ? n : void 0;
  }
  return Rt = t, Rt;
}
var Et, is;
function pc() {
  if (is) return Et;
  is = 1;
  var e = Xn();
  function r(t, n, a) {
    var i = t == null ? void 0 : e(t, n);
    return i === void 0 ? a : i;
  }
  return Et = r, Et;
}
var xt, ss;
function _c() {
  if (ss) return xt;
  ss = 1;
  function e(r, t) {
    return r != null && t in Object(r);
  }
  return xt = e, xt;
}
var Ct, us;
function gc() {
  if (us) return Ct;
  us = 1;
  var e = Gu(), r = Kn(), t = K(), n = Un(), a = Vn(), i = ye();
  function s(u, o, c) {
    o = e(o, u);
    for (var f = -1, d = o.length, p = !1; ++f < d; ) {
      var _ = i(o[f]);
      if (!(p = u != null && c(u, _)))
        break;
      u = u[_];
    }
    return p || ++f != d ? p : (d = u == null ? 0 : u.length, !!d && a(d) && n(_, d) && (t(u) || r(u)));
  }
  return Ct = s, Ct;
}
var Pt, os;
function mc() {
  if (os) return Pt;
  os = 1;
  var e = _c(), r = gc();
  function t(n, a) {
    return n != null && r(n, a, e);
  }
  return Pt = t, Pt;
}
var St, cs;
function yc() {
  if (cs) return St;
  cs = 1;
  var e = ku(), r = pc(), t = mc(), n = Jn(), a = Bu(), i = Lu(), s = ye(), u = 1, o = 2;
  function c(f, d) {
    return n(f) && a(d) ? i(s(f), d) : function(p) {
      var _ = r(p, f);
      return _ === void 0 && _ === d ? t(p, f) : e(d, _, u | o);
    };
  }
  return St = c, St;
}
var Ot, fs;
function ue() {
  if (fs) return Ot;
  fs = 1;
  function e(r) {
    return r;
  }
  return Ot = e, Ot;
}
var Tt, ls;
function bc() {
  if (ls) return Tt;
  ls = 1;
  function e(r) {
    return function(t) {
      return t?.[r];
    };
  }
  return Tt = e, Tt;
}
var At, ds;
function qc() {
  if (ds) return At;
  ds = 1;
  var e = Xn();
  function r(t) {
    return function(n) {
      return e(n, t);
    };
  }
  return At = r, At;
}
var wt, hs;
function Rc() {
  if (hs) return wt;
  hs = 1;
  var e = bc(), r = qc(), t = Jn(), n = ye();
  function a(i) {
    return t(i) ? e(n(i)) : r(i);
  }
  return wt = a, wt;
}
var It, vs;
function oe() {
  if (vs) return It;
  vs = 1;
  var e = cc(), r = yc(), t = ue(), n = K(), a = Rc();
  function i(s) {
    return typeof s == "function" ? s : s == null ? t : typeof s == "object" ? n(s) ? r(s[0], s[1]) : e(s) : a(s);
  }
  return It = i, It;
}
var Nt, ps;
function Ec() {
  if (ps) return Nt;
  ps = 1;
  var e = Cu(), r = _o(), t = oe(), n = K();
  function a(i, s) {
    var u = n(i) ? e : r;
    return u(i, t(s, 3));
  }
  return Nt = a, Nt;
}
var xc = Ec();
const Cc = /* @__PURE__ */ V(xc);
var Dt, _s;
function Hu() {
  if (_s) return Dt;
  _s = 1;
  var e = Wn(), r = z();
  function t(n, a) {
    var i = -1, s = r(n) ? Array(n.length) : [];
    return e(n, function(u, o, c) {
      s[++i] = a(u, o, c);
    }), s;
  }
  return Dt = t, Dt;
}
var jt, gs;
function Pc() {
  if (gs) return jt;
  gs = 1;
  var e = me(), r = oe(), t = Hu(), n = K();
  function a(i, s) {
    var u = n(i) ? e : t;
    return u(i, r(s, 3));
  }
  return jt = a, jt;
}
var Sc = Pc();
const Oc = /* @__PURE__ */ V(Sc);
var Ft, ms;
function Tc() {
  if (ms) return Ft;
  ms = 1;
  var e = oe(), r = z(), t = de();
  function n(a) {
    return function(i, s, u) {
      var o = Object(i);
      if (!r(i)) {
        var c = e(s, 3);
        i = t(i), s = function(d) {
          return c(o[d], d, o);
        };
      }
      var f = a(i, s, u);
      return f > -1 ? o[c ? i[f] : f] : void 0;
    };
  }
  return Ft = n, Ft;
}
var Mt, ys;
function Ku() {
  if (ys) return Mt;
  ys = 1;
  function e(r, t, n, a) {
    for (var i = r.length, s = n + (a ? 1 : -1); a ? s-- : ++s < i; )
      if (t(r[s], s, r))
        return s;
    return -1;
  }
  return Mt = e, Mt;
}
var kt, bs;
function Ac() {
  if (bs) return kt;
  bs = 1;
  var e = /\s/;
  function r(t) {
    for (var n = t.length; n-- && e.test(t.charAt(n)); )
      ;
    return n;
  }
  return kt = r, kt;
}
var Bt, qs;
function wc() {
  if (qs) return Bt;
  qs = 1;
  var e = Ac(), r = /^\s+/;
  function t(n) {
    return n && n.slice(0, e(n) + 1).replace(r, "");
  }
  return Bt = t, Bt;
}
var Lt, Rs;
function Ic() {
  if (Rs) return Lt;
  Rs = 1;
  var e = wc(), r = Z(), t = se(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, s = /^0o[0-7]+$/i, u = parseInt;
  function o(c) {
    if (typeof c == "number")
      return c;
    if (t(c))
      return n;
    if (r(c)) {
      var f = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = r(f) ? f + "" : f;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var d = i.test(c);
    return d || s.test(c) ? u(c.slice(2), d ? 2 : 8) : a.test(c) ? n : +c;
  }
  return Lt = o, Lt;
}
var Gt, Es;
function Uu() {
  if (Es) return Gt;
  Es = 1;
  var e = Ic(), r = 1 / 0, t = 17976931348623157e292;
  function n(a) {
    if (!a)
      return a === 0 ? a : 0;
    if (a = e(a), a === r || a === -r) {
      var i = a < 0 ? -1 : 1;
      return i * t;
    }
    return a === a ? a : 0;
  }
  return Gt = n, Gt;
}
var Ht, xs;
function Nc() {
  if (xs) return Ht;
  xs = 1;
  var e = Uu();
  function r(t) {
    var n = e(t), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return Ht = r, Ht;
}
var Kt, Cs;
function Dc() {
  if (Cs) return Kt;
  Cs = 1;
  var e = Ku(), r = oe(), t = Nc(), n = Math.max;
  function a(i, s, u) {
    var o = i == null ? 0 : i.length;
    if (!o)
      return -1;
    var c = u == null ? 0 : t(u);
    return c < 0 && (c = n(o + c, 0)), e(i, r(s, 3), c);
  }
  return Kt = a, Kt;
}
var Ut, Ps;
function Vu() {
  if (Ps) return Ut;
  Ps = 1;
  var e = Tc(), r = Dc(), t = e(r);
  return Ut = t, Ut;
}
var jc = Vu();
const Fc = /* @__PURE__ */ V(jc);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Vt, Ss;
function Mc() {
  if (Ss) return Vt;
  Ss = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, u = 0; u < 10; u++)
        s["_" + String.fromCharCode(u)] = u;
      var o = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (o.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        c[f] = f;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Vt = a() ? Object.assign : function(i, s) {
    for (var u, o = n(i), c, f = 1; f < arguments.length; f++) {
      u = Object(arguments[f]);
      for (var d in u)
        r.call(u, d) && (o[d] = u[d]);
      if (e) {
        c = e(u);
        for (var p = 0; p < c.length; p++)
          t.call(u, c[p]) && (o[c[p]] = u[c[p]]);
      }
    }
    return o;
  }, Vt;
}
var Yt, Os;
function kc() {
  if (Os) return Yt;
  Os = 1;
  var e = {};
  return process.env.NODE_ENV !== "production" && Object.freeze(e), Yt = e, Yt;
}
var Wt, Ts;
function Bc() {
  if (Ts) return Wt;
  Ts = 1;
  var e = function(n) {
  };
  process.env.NODE_ENV !== "production" && (e = function(n) {
    if (n === void 0)
      throw new Error("invariant requires an error message argument");
  });
  function r(t, n, a, i, s, u, o, c) {
    if (e(n), !t) {
      var f;
      if (n === void 0)
        f = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var d = [a, i, s, u, o, c], p = 0;
        f = new Error(n.replace(/%s/g, function() {
          return d[p++];
        })), f.name = "Invariant Violation";
      }
      throw f.framesToPop = 1, f;
    }
  }
  return Wt = r, Wt;
}
var zt, As;
function Lc() {
  if (As) return zt;
  As = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  var r = function() {
  };
  return r.thatReturns = e, r.thatReturnsFalse = e(!1), r.thatReturnsTrue = e(!0), r.thatReturnsNull = e(null), r.thatReturnsThis = function() {
    return this;
  }, r.thatReturnsArgument = function(t) {
    return t;
  }, zt = r, zt;
}
var $t, ws;
function Gc() {
  if (ws) return $t;
  ws = 1;
  var e = Lc(), r = e;
  if (process.env.NODE_ENV !== "production") {
    var t = function(a) {
      for (var i = arguments.length, s = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++)
        s[u - 1] = arguments[u];
      var o = 0, c = "Warning: " + a.replace(/%s/g, function() {
        return s[o++];
      });
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
    r = function(a, i) {
      if (i === void 0)
        throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
      if (i.indexOf("Failed Composite propType: ") !== 0 && !a) {
        for (var s = arguments.length, u = Array(s > 2 ? s - 2 : 0), o = 2; o < s; o++)
          u[o - 2] = arguments[o];
        t.apply(void 0, [i].concat(u));
      }
    };
  }
  return $t = r, $t;
}
var Jt, Is;
function Hc() {
  if (Is) return Jt;
  Is = 1;
  var e = Mc(), r = kc(), t = Bc();
  if (process.env.NODE_ENV !== "production")
    var n = Gc();
  var a = "mixins";
  function i(o) {
    return o;
  }
  var s;
  process.env.NODE_ENV !== "production" ? s = {
    prop: "prop",
    context: "context",
    childContext: "child context"
  } : s = {};
  function u(o, c, f) {
    var d = [], p = {
      /**
       * An array of Mixin objects to include when defining your component.
       *
       * @type {array}
       * @optional
       */
      mixins: "DEFINE_MANY",
      /**
       * An object containing properties and methods that should be defined on
       * the component's constructor instead of its prototype (static methods).
       *
       * @type {object}
       * @optional
       */
      statics: "DEFINE_MANY",
      /**
       * Definition of prop types for this component.
       *
       * @type {object}
       * @optional
       */
      propTypes: "DEFINE_MANY",
      /**
       * Definition of context types for this component.
       *
       * @type {object}
       * @optional
       */
      contextTypes: "DEFINE_MANY",
      /**
       * Definition of context types this component sets for its children.
       *
       * @type {object}
       * @optional
       */
      childContextTypes: "DEFINE_MANY",
      // ==== Definition methods ====
      /**
       * Invoked when the component is mounted. Values in the mapping will be set on
       * `this.props` if that prop is not specified (i.e. using an `in` check).
       *
       * This method is invoked before `getInitialState` and therefore cannot rely
       * on `this.state` or use `this.setState`.
       *
       * @return {object}
       * @optional
       */
      getDefaultProps: "DEFINE_MANY_MERGED",
      /**
       * Invoked once before the component is mounted. The return value will be used
       * as the initial value of `this.state`.
       *
       *   getInitialState: function() {
       *     return {
       *       isOn: false,
       *       fooBaz: new BazFoo()
       *     }
       *   }
       *
       * @return {object}
       * @optional
       */
      getInitialState: "DEFINE_MANY_MERGED",
      /**
       * @return {object}
       * @optional
       */
      getChildContext: "DEFINE_MANY_MERGED",
      /**
       * Uses props from `this.props` and state from `this.state` to render the
       * structure of the component.
       *
       * No guarantees are made about when or how often this method is invoked, so
       * it must not have side effects.
       *
       *   render: function() {
       *     var name = this.props.name;
       *     return <div>Hello, {name}!</div>;
       *   }
       *
       * @return {ReactComponent}
       * @required
       */
      render: "DEFINE_ONCE",
      // ==== Delegate methods ====
      /**
       * Invoked when the component is initially created and about to be mounted.
       * This may have side effects, but any external subscriptions or data created
       * by this method must be cleaned up in `componentWillUnmount`.
       *
       * @optional
       */
      componentWillMount: "DEFINE_MANY",
      /**
       * Invoked when the component has been mounted and has a DOM representation.
       * However, there is no guarantee that the DOM node is in the document.
       *
       * Use this as an opportunity to operate on the DOM when the component has
       * been mounted (initialized and rendered) for the first time.
       *
       * @param {DOMElement} rootNode DOM element representing the component.
       * @optional
       */
      componentDidMount: "DEFINE_MANY",
      /**
       * Invoked before the component receives new props.
       *
       * Use this as an opportunity to react to a prop transition by updating the
       * state using `this.setState`. Current props are accessed via `this.props`.
       *
       *   componentWillReceiveProps: function(nextProps, nextContext) {
       *     this.setState({
       *       likesIncreasing: nextProps.likeCount > this.props.likeCount
       *     });
       *   }
       *
       * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
       * transition may cause a state change, but the opposite is not true. If you
       * need it, you are probably looking for `componentWillUpdate`.
       *
       * @param {object} nextProps
       * @optional
       */
      componentWillReceiveProps: "DEFINE_MANY",
      /**
       * Invoked while deciding if the component should be updated as a result of
       * receiving new props, state and/or context.
       *
       * Use this as an opportunity to `return false` when you're certain that the
       * transition to the new props/state/context will not require a component
       * update.
       *
       *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
       *     return !equal(nextProps, this.props) ||
       *       !equal(nextState, this.state) ||
       *       !equal(nextContext, this.context);
       *   }
       *
       * @param {object} nextProps
       * @param {?object} nextState
       * @param {?object} nextContext
       * @return {boolean} True if the component should update.
       * @optional
       */
      shouldComponentUpdate: "DEFINE_ONCE",
      /**
       * Invoked when the component is about to update due to a transition from
       * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
       * and `nextContext`.
       *
       * Use this as an opportunity to perform preparation before an update occurs.
       *
       * NOTE: You **cannot** use `this.setState()` in this method.
       *
       * @param {object} nextProps
       * @param {?object} nextState
       * @param {?object} nextContext
       * @param {ReactReconcileTransaction} transaction
       * @optional
       */
      componentWillUpdate: "DEFINE_MANY",
      /**
       * Invoked when the component's DOM representation has been updated.
       *
       * Use this as an opportunity to operate on the DOM when the component has
       * been updated.
       *
       * @param {object} prevProps
       * @param {?object} prevState
       * @param {?object} prevContext
       * @param {DOMElement} rootNode DOM element representing the component.
       * @optional
       */
      componentDidUpdate: "DEFINE_MANY",
      /**
       * Invoked when the component is about to be removed from its parent and have
       * its DOM representation destroyed.
       *
       * Use this as an opportunity to deallocate any external resources.
       *
       * NOTE: There is no `componentDidUnmount` since your component will have been
       * destroyed by that point.
       *
       * @optional
       */
      componentWillUnmount: "DEFINE_MANY",
      // ==== Advanced methods ====
      /**
       * Updates the component's currently mounted DOM representation.
       *
       * By default, this implements React's rendering and reconciliation algorithm.
       * Sophisticated clients may wish to override this.
       *
       * @param {ReactReconcileTransaction} transaction
       * @internal
       * @overridable
       */
      updateComponent: "OVERRIDE_BASE"
    }, _ = {
      displayName: function(v, l) {
        v.displayName = l;
      },
      mixins: function(v, l) {
        if (l)
          for (var m = 0; m < l.length; m++)
            g(v, l[m]);
      },
      childContextTypes: function(v, l) {
        process.env.NODE_ENV !== "production" && E(v, l, "childContext"), v.childContextTypes = e(
          {},
          v.childContextTypes,
          l
        );
      },
      contextTypes: function(v, l) {
        process.env.NODE_ENV !== "production" && E(v, l, "context"), v.contextTypes = e(
          {},
          v.contextTypes,
          l
        );
      },
      /**
       * Special case getDefaultProps which should move into statics but requires
       * automatic merging.
       */
      getDefaultProps: function(v, l) {
        v.getDefaultProps ? v.getDefaultProps = A(
          v.getDefaultProps,
          l
        ) : v.getDefaultProps = l;
      },
      propTypes: function(v, l) {
        process.env.NODE_ENV !== "production" && E(v, l, "prop"), v.propTypes = e({}, v.propTypes, l);
      },
      statics: function(v, l) {
        x(v, l);
      },
      autobind: function() {
      }
    };
    function E(v, l, m) {
      for (var w in l)
        l.hasOwnProperty(w) && process.env.NODE_ENV !== "production" && n(
          typeof l[w] == "function",
          "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",
          v.displayName || "ReactClass",
          s[m],
          w
        );
    }
    function y(v, l) {
      var m = p.hasOwnProperty(l) ? p[l] : null;
      F.hasOwnProperty(l) && t(
        m === "OVERRIDE_BASE",
        "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",
        l
      ), v && t(
        m === "DEFINE_MANY" || m === "DEFINE_MANY_MERGED",
        "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
        l
      );
    }
    function g(v, l) {
      if (!l) {
        if (process.env.NODE_ENV !== "production") {
          var m = typeof l, w = m === "object" && l !== null;
          process.env.NODE_ENV !== "production" && n(
            w,
            "%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.",
            v.displayName || "ReactClass",
            l === null ? null : m
          );
        }
        return;
      }
      t(
        typeof l != "function",
        "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
      ), t(
        !c(l),
        "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
      );
      var I = v.prototype, L = I.__reactAutoBindPairs;
      l.hasOwnProperty(a) && _.mixins(v, l.mixins);
      for (var T in l)
        if (l.hasOwnProperty(T) && T !== a) {
          var G = l[T], h = I.hasOwnProperty(T);
          if (y(h, T), _.hasOwnProperty(T))
            _[T](v, G);
          else {
            var q = p.hasOwnProperty(T), N = typeof G == "function", M = N && !q && !h && l.autobind !== !1;
            if (M)
              L.push(T, G), I[T] = G;
            else if (h) {
              var H = p[T];
              t(
                q && (H === "DEFINE_MANY_MERGED" || H === "DEFINE_MANY"),
                "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",
                H,
                T
              ), H === "DEFINE_MANY_MERGED" ? I[T] = A(I[T], G) : H === "DEFINE_MANY" && (I[T] = C(I[T], G));
            } else
              I[T] = G, process.env.NODE_ENV !== "production" && typeof G == "function" && l.displayName && (I[T].displayName = l.displayName + "_" + T);
          }
        }
    }
    function x(v, l) {
      if (l)
        for (var m in l) {
          var w = l[m];
          if (l.hasOwnProperty(m)) {
            var I = m in _;
            t(
              !I,
              'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
              m
            );
            var L = m in v;
            t(
              !L,
              "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
              m
            ), v[m] = w;
          }
        }
    }
    function b(v, l) {
      t(
        v && l && typeof v == "object" && typeof l == "object",
        "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."
      );
      for (var m in l)
        l.hasOwnProperty(m) && (t(
          v[m] === void 0,
          "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",
          m
        ), v[m] = l[m]);
      return v;
    }
    function A(v, l) {
      return function() {
        var w = v.apply(this, arguments), I = l.apply(this, arguments);
        if (w == null)
          return I;
        if (I == null)
          return w;
        var L = {};
        return b(L, w), b(L, I), L;
      };
    }
    function C(v, l) {
      return function() {
        v.apply(this, arguments), l.apply(this, arguments);
      };
    }
    function D(v, l) {
      var m = l.bind(v);
      if (process.env.NODE_ENV !== "production") {
        m.__reactBoundContext = v, m.__reactBoundMethod = l, m.__reactBoundArguments = null;
        var w = v.constructor.displayName, I = m.bind;
        m.bind = function(L) {
          for (var T = arguments.length, G = Array(T > 1 ? T - 1 : 0), h = 1; h < T; h++)
            G[h - 1] = arguments[h];
          if (L !== v && L !== null)
            process.env.NODE_ENV !== "production" && n(
              !1,
              "bind(): React component methods may only be bound to the component instance. See %s",
              w
            );
          else if (!G.length)
            return process.env.NODE_ENV !== "production" && n(
              !1,
              "bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",
              w
            ), m;
          var q = I.apply(m, arguments);
          return q.__reactBoundContext = v, q.__reactBoundMethod = l, q.__reactBoundArguments = G, q;
        };
      }
      return m;
    }
    function O(v) {
      for (var l = v.__reactAutoBindPairs, m = 0; m < l.length; m += 2) {
        var w = l[m], I = l[m + 1];
        v[w] = D(v, I);
      }
    }
    var S = {
      componentDidMount: function() {
        this.__isMounted = !0;
      }
    }, j = {
      componentWillUnmount: function() {
        this.__isMounted = !1;
      }
    }, F = {
      /**
       * TODO: This will be deprecated because state should always keep a consistent
       * type signature and the only use case for this, is to avoid that.
       */
      replaceState: function(v, l) {
        this.updater.enqueueReplaceState(this, v, l);
      },
      /**
       * Checks whether or not this composite component is mounted.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function() {
        return process.env.NODE_ENV !== "production" && (n(
          this.__didWarnIsMounted,
          "%s: isMounted is deprecated. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
          this.constructor && this.constructor.displayName || this.name || "Component"
        ), this.__didWarnIsMounted = !0), !!this.__isMounted;
      }
    }, B = function() {
    };
    e(
      B.prototype,
      o.prototype,
      F
    );
    function P(v) {
      var l = function(w, I, L) {
        process.env.NODE_ENV !== "production" && n(
          this instanceof l,
          "Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"
        ), this.__reactAutoBindPairs.length && O(this), this.props = w, this.context = I, this.refs = r, this.updater = L || f, this.state = null;
        var T = this.getInitialState ? this.getInitialState() : null;
        process.env.NODE_ENV !== "production" && T === void 0 && this.getInitialState._isMockFunction && (T = null), t(
          typeof T == "object" && !Array.isArray(T),
          "%s.getInitialState(): must return an object or null",
          l.displayName || "ReactCompositeComponent"
        ), this.state = T;
      };
      l.prototype = new B(), l.prototype.constructor = l, l.prototype.__reactAutoBindPairs = [], d.forEach(g.bind(null, l)), g(l, S), g(l, v), g(l, j), l.getDefaultProps && (l.defaultProps = l.getDefaultProps()), process.env.NODE_ENV !== "production" && (l.getDefaultProps && (l.getDefaultProps.isReactClassApproved = {}), l.prototype.getInitialState && (l.prototype.getInitialState.isReactClassApproved = {})), t(
        l.prototype.render,
        "createClass(...): Class specification must implement a `render` method."
      ), process.env.NODE_ENV !== "production" && (n(
        !l.prototype.componentShouldUpdate,
        "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
        v.displayName || "A component"
      ), n(
        !l.prototype.componentWillRecieveProps,
        "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
        v.displayName || "A component"
      ));
      for (var m in p)
        l.prototype[m] || (l.prototype[m] = null);
      return l;
    }
    return P;
  }
  return Jt = u, Jt;
}
var Xt, Ns;
function Kc() {
  if (Ns) return Xt;
  Ns = 1;
  var e = Hn, r = Hc();
  if (typeof e > "u")
    throw Error(
      "create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class."
    );
  var t = new e.Component().updater;
  return Xt = r(
    e.Component,
    e.isValidElement,
    t
  ), Xt;
}
var Uc = Kc();
const ce = /* @__PURE__ */ V(Uc);
var Zt, Ds;
function Yu() {
  if (Ds) return Zt;
  Ds = 1;
  var e = $(), r = function() {
    try {
      var t = e(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return Zt = r, Zt;
}
var Qt, js;
function Wu() {
  if (js) return Qt;
  js = 1;
  var e = Yu();
  function r(t, n, a) {
    n == "__proto__" && e ? e(t, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : t[n] = a;
  }
  return Qt = r, Qt;
}
var en, Fs;
function Vc() {
  if (Fs) return en;
  Fs = 1;
  var e = Wu(), r = he(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i, s, u) {
    var o = i[s];
    (!(n.call(i, s) && r(o, u)) || u === void 0 && !(s in i)) && e(i, s, u);
  }
  return en = a, en;
}
var rn, Ms;
function Yc() {
  if (Ms) return rn;
  Ms = 1;
  var e = Vc(), r = Wu();
  function t(n, a, i, s) {
    var u = !i;
    i || (i = {});
    for (var o = -1, c = a.length; ++o < c; ) {
      var f = a[o], d = s ? s(i[f], n[f], f, i, n) : void 0;
      d === void 0 && (d = n[f]), u ? r(i, f, d) : e(i, f, d);
    }
    return i;
  }
  return rn = t, rn;
}
var tn, ks;
function Wc() {
  if (ks) return tn;
  ks = 1;
  function e(r, t, n) {
    switch (n.length) {
      case 0:
        return r.call(t);
      case 1:
        return r.call(t, n[0]);
      case 2:
        return r.call(t, n[0], n[1]);
      case 3:
        return r.call(t, n[0], n[1], n[2]);
    }
    return r.apply(t, n);
  }
  return tn = e, tn;
}
var nn, Bs;
function zc() {
  if (Bs) return nn;
  Bs = 1;
  var e = Wc(), r = Math.max;
  function t(n, a, i) {
    return a = r(a === void 0 ? n.length - 1 : a, 0), function() {
      for (var s = arguments, u = -1, o = r(s.length - a, 0), c = Array(o); ++u < o; )
        c[u] = s[a + u];
      u = -1;
      for (var f = Array(a + 1); ++u < a; )
        f[u] = s[u];
      return f[a] = i(c), e(n, this, f);
    };
  }
  return nn = t, nn;
}
var an, Ls;
function $c() {
  if (Ls) return an;
  Ls = 1;
  function e(r) {
    return function() {
      return r;
    };
  }
  return an = e, an;
}
var sn, Gs;
function Jc() {
  if (Gs) return sn;
  Gs = 1;
  var e = $c(), r = Yu(), t = ue(), n = r ? function(a, i) {
    return r(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : t;
  return sn = n, sn;
}
var un, Hs;
function Xc() {
  if (Hs) return un;
  Hs = 1;
  var e = 800, r = 16, t = Date.now;
  function n(a) {
    var i = 0, s = 0;
    return function() {
      var u = t(), o = r - (u - s);
      if (s = u, o > 0) {
        if (++i >= e)
          return arguments[0];
      } else
        i = 0;
      return a.apply(void 0, arguments);
    };
  }
  return un = n, un;
}
var on, Ks;
function Zc() {
  if (Ks) return on;
  Ks = 1;
  var e = Jc(), r = Xc(), t = r(e);
  return on = t, on;
}
var cn, Us;
function Zn() {
  if (Us) return cn;
  Us = 1;
  var e = ue(), r = zc(), t = Zc();
  function n(a, i) {
    return t(r(a, i, e), a + "");
  }
  return cn = n, cn;
}
var fn, Vs;
function Qn() {
  if (Vs) return fn;
  Vs = 1;
  var e = he(), r = z(), t = Un(), n = Z();
  function a(i, s, u) {
    if (!n(u))
      return !1;
    var o = typeof s;
    return (o == "number" ? r(u) && t(s, u.length) : o == "string" && s in u) ? e(u[s], i) : !1;
  }
  return fn = a, fn;
}
var ln, Ys;
function Qc() {
  if (Ys) return ln;
  Ys = 1;
  var e = Zn(), r = Qn();
  function t(n) {
    return e(function(a, i) {
      var s = -1, u = i.length, o = u > 1 ? i[u - 1] : void 0, c = u > 2 ? i[2] : void 0;
      for (o = n.length > 3 && typeof o == "function" ? (u--, o) : void 0, c && r(i[0], i[1], c) && (o = u < 3 ? void 0 : o, u = 1), a = Object(a); ++s < u; ) {
        var f = i[s];
        f && n(a, f, s, o);
      }
      return a;
    });
  }
  return ln = t, ln;
}
var dn, Ws;
function ef() {
  if (Ws) return dn;
  Ws = 1;
  function e(r) {
    var t = [];
    if (r != null)
      for (var n in Object(r))
        t.push(n);
    return t;
  }
  return dn = e, dn;
}
var hn, zs;
function rf() {
  if (zs) return hn;
  zs = 1;
  var e = Z(), r = Au(), t = ef(), n = Object.prototype, a = n.hasOwnProperty;
  function i(s) {
    if (!e(s))
      return t(s);
    var u = r(s), o = [];
    for (var c in s)
      c == "constructor" && (u || !a.call(s, c)) || o.push(c);
    return o;
  }
  return hn = i, hn;
}
var vn, $s;
function tf() {
  if ($s) return vn;
  $s = 1;
  var e = Tu(), r = rf(), t = z();
  function n(a) {
    return t(a) ? e(a, !0) : r(a);
  }
  return vn = n, vn;
}
var pn, Js;
function nf() {
  if (Js) return pn;
  Js = 1;
  var e = Yc(), r = Qc(), t = tf(), n = r(function(a, i) {
    e(i, t(i), a);
  });
  return pn = n, pn;
}
var _n, Xs;
function af() {
  return Xs || (Xs = 1, _n = nf()), _n;
}
var gn, Zs;
function sf() {
  if (Zs) return gn;
  Zs = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a && t(r[n], n, r) !== !1; )
      ;
    return r;
  }
  return gn = e, gn;
}
var mn, Qs;
function uf() {
  if (Qs) return mn;
  Qs = 1;
  var e = ue();
  function r(t) {
    return typeof t == "function" ? t : e;
  }
  return mn = r, mn;
}
var yn, eu;
function of() {
  if (eu) return yn;
  eu = 1;
  var e = sf(), r = Wn(), t = uf(), n = K();
  function a(i, s) {
    var u = n(i) ? e : r;
    return u(i, t(s));
  }
  return yn = a, yn;
}
var bn, ru;
function cf() {
  return ru || (ru = 1, bn = of()), bn;
}
var qn, tu;
function ff() {
  if (tu) return qn;
  tu = 1;
  var e = ae(), r = Kn(), t = K(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return t(i) || r(i) || !!(n && i && i[n]);
  }
  return qn = a, qn;
}
var Rn, nu;
function lf() {
  if (nu) return Rn;
  nu = 1;
  var e = Mu(), r = ff();
  function t(n, a, i, s, u) {
    var o = -1, c = n.length;
    for (i || (i = r), u || (u = []); ++o < c; ) {
      var f = n[o];
      a > 0 && i(f) ? a > 1 ? t(f, a - 1, i, s, u) : e(u, f) : s || (u[u.length] = f);
    }
    return u;
  }
  return Rn = t, Rn;
}
var En, au;
function df() {
  if (au) return En;
  au = 1;
  function e(r, t) {
    var n = r.length;
    for (r.sort(t); n--; )
      r[n] = r[n].value;
    return r;
  }
  return En = e, En;
}
var xn, iu;
function hf() {
  if (iu) return xn;
  iu = 1;
  var e = se();
  function r(t, n) {
    if (t !== n) {
      var a = t !== void 0, i = t === null, s = t === t, u = e(t), o = n !== void 0, c = n === null, f = n === n, d = e(n);
      if (!c && !d && !u && t > n || u && o && f && !c && !d || i && o && f || !a && f || !s)
        return 1;
      if (!i && !u && !d && t < n || d && a && s && !i && !u || c && a && s || !o && s || !f)
        return -1;
    }
    return 0;
  }
  return xn = r, xn;
}
var Cn, su;
function vf() {
  if (su) return Cn;
  su = 1;
  var e = hf();
  function r(t, n, a) {
    for (var i = -1, s = t.criteria, u = n.criteria, o = s.length, c = a.length; ++i < o; ) {
      var f = e(s[i], u[i]);
      if (f) {
        if (i >= c)
          return f;
        var d = a[i];
        return f * (d == "desc" ? -1 : 1);
      }
    }
    return t.index - n.index;
  }
  return Cn = r, Cn;
}
var Pn, uu;
function pf() {
  if (uu) return Pn;
  uu = 1;
  var e = me(), r = Xn(), t = oe(), n = Hu(), a = df(), i = Yn(), s = vf(), u = ue(), o = K();
  function c(f, d, p) {
    d.length ? d = e(d, function(y) {
      return o(y) ? function(g) {
        return r(g, y.length === 1 ? y[0] : y);
      } : y;
    }) : d = [u];
    var _ = -1;
    d = e(d, i(t));
    var E = n(f, function(y, g, x) {
      var b = e(d, function(A) {
        return A(y);
      });
      return { criteria: b, index: ++_, value: y };
    });
    return a(E, function(y, g) {
      return s(y, g, p);
    });
  }
  return Pn = c, Pn;
}
var Sn, ou;
function _f() {
  if (ou) return Sn;
  ou = 1;
  var e = lf(), r = pf(), t = Zn(), n = Qn(), a = t(function(i, s) {
    if (i == null)
      return [];
    var u = s.length;
    return u > 1 && n(i, s[0], s[1]) ? s = [] : u > 2 && n(s[0], s[1], s[2]) && (s = [s[0]]), r(i, e(s, 1), []);
  });
  return Sn = a, Sn;
}
var On, cu;
function gf() {
  if (cu) return On;
  cu = 1;
  var e = {
    extend: af(),
    each: cf(),
    sortBy: _f(),
    find: Vu()
  };
  On = function(a) {
    return new r(a);
  };
  function r(a) {
    return this.rows = a.rows, this.dimensions = a.dimensions, this.reduce = a.reduce, this.cache = {}, this;
  }
  r.prototype.calculate = function(a) {
    this.activeDimensions = a.dimensions, this.activeDimensions.length < 1 && (this.activeDimensions = [""]), this.sortBy = a.sortBy, this.sortDir = a.sortDir, this.filter = a.filter, this.compact = a.compact;
    var i = this.getResults(), s = this.parseResults(i);
    return s;
  }, r.prototype.getResults = function() {
    var a = this;
    this.getColumns();
    var i = this.activeDimensions, s = this.filter, u = this.reduce, o = {}, c = {};
    return this.rows.forEach(function(f) {
      var d = a.createSetKeys(i, f), p = t(d[d.length - 1]);
      if (!(s && !s(p))) {
        var _ = o;
        d.forEach(function(E, y) {
          _[E] || (_[E] = { value: {}, subDimensions: {}, key: E });
          var g = _[E].value;
          if (s || !a.cache[E]) {
            s || (c[E] = g), e.extend(g, u(f, g));
            var x = t(E);
            e.extend(g, x);
          } else
            _[E].value = a.cache[E];
          _ = _[E].subDimensions;
        });
      }
    }), e.each(c, function(f, d) {
      a.cache[d] = f;
    }), o;
  }, r.prototype.parseResults = function(a, u) {
    var s = this, u = u || 0, o = [], c = e.sortBy(a, this.getSortValue.bind(this));
    return this.sortDir === "desc" && c.reverse(), e.each(c, function(f) {
      var d = f.value;
      d._level = u, d._key = f.key;
      var p = Object.keys(f.subDimensions).length;
      if (s.compact && p == 1 || o.push(d), p) {
        var _ = s.compact && p == 1 ? u : u + 1, E = s.parseResults(f.subDimensions, _);
        E.forEach(function(y) {
          o.push(y);
        });
      }
    }), o;
  }, r.prototype.getColumns = function() {
    var a = [];
    return this.dimensions.forEach(function(i) {
      a.push({ type: "dimension", title: i, value: i });
    }), a;
  }, r.prototype.createSetKeys = function(a, i) {
    for (var s = [], u = 0; u < a.length; u++) {
      var o = a.slice(0, u + 1);
      s.push(this.createSetKey(o, i));
    }
    return s;
  }, r.prototype.createSetKey = function(a, i) {
    var s = this, u = "";
    return e.sortBy(a).forEach(function(o) {
      var c = s.findDimension(o);
      u += [o, n(c, i)].join("ÿ") + "ÿ";
    }), u;
  }, r.prototype.findDimension = function(a) {
    return e.find(this.dimensions, function(i) {
      return i.title === a;
    });
  }, r.prototype.getSortValue = function(a) {
    var i = this.sortBy, s = this.getColumns(), u = e.find(s, function(c) {
      return c.title === i;
    }) || i, o = n(u, a.value);
    return typeof o > "u" ? a.key : !isNaN(parseFloat(o)) && isFinite(o) ? +o : typeof o == "string" ? o.toLowerCase() : o;
  };
  function t(a) {
    for (var i = {}, s = a.split("ÿ"), u = 0; u < s.length; u += 2) {
      var o = s[u], c = s[u + 1];
      o && (i[o] = c);
    }
    return i;
  }
  function n(a, i) {
    if (a == null) return null;
    if (typeof a == "string")
      var s = i[a];
    else if (typeof a == "function")
      var s = a(i);
    else if (typeof a.value == "string")
      var s = i[a.value];
    else
      var s = a.value(i);
    return s;
  }
  return On;
}
var mf = gf();
const fu = /* @__PURE__ */ V(mf);
var Tn, lu;
function yf() {
  if (lu) return Tn;
  lu = 1, Tn = e;
  function e() {
  }
  return e.mixin = function(r) {
    var t = r.prototype || r;
    t.isWildEmitter = !0, t.on = function(n, a, i) {
      this.callbacks = this.callbacks || {};
      var s = arguments.length === 3, u = s ? arguments[1] : void 0, o = s ? arguments[2] : arguments[1];
      return o._groupName = u, (this.callbacks[n] = this.callbacks[n] || []).push(o), this;
    }, t.once = function(n, a, i) {
      var s = this, u = arguments.length === 3, o = u ? arguments[1] : void 0, c = u ? arguments[2] : arguments[1];
      function f() {
        s.off(n, f), c.apply(this, arguments);
      }
      return this.on(n, o, f), this;
    }, t.releaseGroup = function(n) {
      this.callbacks = this.callbacks || {};
      var a, i, s, u;
      for (a in this.callbacks)
        for (u = this.callbacks[a], i = 0, s = u.length; i < s; i++)
          u[i]._groupName === n && (u.splice(i, 1), i--, s--);
      return this;
    }, t.off = function(n, a) {
      this.callbacks = this.callbacks || {};
      var i = this.callbacks[n], s;
      return i ? arguments.length === 1 ? (delete this.callbacks[n], this) : (s = i.indexOf(a), i.splice(s, 1), i.length === 0 && delete this.callbacks[n], this) : this;
    }, t.emit = function(n) {
      this.callbacks = this.callbacks || {};
      var a = [].slice.call(arguments, 1), i = this.callbacks[n], s = this.getWildcardCallbacks(n), u, o, c;
      if (i)
        for (c = i.slice(), u = 0, o = c.length; u < o && c[u]; ++u)
          c[u].apply(this, a);
      if (s)
        for (o = s.length, c = s.slice(), u = 0, o = c.length; u < o && c[u]; ++u)
          c[u].apply(this, [n].concat(a));
      return this;
    }, t.getWildcardCallbacks = function(n) {
      this.callbacks = this.callbacks || {};
      var a, i, s = [];
      for (a in this.callbacks)
        i = a.split("*"), (a === "*" || i.length === 2 && n.slice(0, i[0].length) === i[0]) && (s = s.concat(this.callbacks[a]));
      return s;
    };
  }, e.mixin(e), Tn;
}
var bf = yf();
const qf = /* @__PURE__ */ V(bf), du = Array.prototype.slice;
function W(e) {
  const r = du.call(arguments, 1);
  return function() {
    return e.apply(this, r.concat(du.call(arguments)));
  };
}
function Rf(e, r, t) {
  const n = new Blob([e], { type: t }), a = document.createElement("a");
  a.download = r, a.href = window.URL.createObjectURL(n), a.dataset.downloadurl = [t, a.download, a.href].join(":");
  const i = document.createEvent("MouseEvents");
  return i.initMouseEvent(
    "click",
    !0,
    !1,
    window,
    0,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    0,
    null
  ), a.dispatchEvent(i);
}
function zu(e, r) {
  if (e == null) return null;
  let t;
  return typeof e.value == "string" ? t = r[e.value] : t = e.value(r), t;
}
var An, hu;
function Ef() {
  if (hu) return An;
  hu = 1;
  var e = Math.ceil, r = Math.max;
  function t(n, a, i, s) {
    for (var u = -1, o = r(e((a - n) / (i || 1)), 0), c = Array(o); o--; )
      c[s ? o : ++u] = n, n += i;
    return c;
  }
  return An = t, An;
}
var wn, vu;
function xf() {
  if (vu) return wn;
  vu = 1;
  var e = Ef(), r = Qn(), t = Uu();
  function n(a) {
    return function(i, s, u) {
      return u && typeof u != "number" && r(i, s, u) && (s = u = void 0), i = t(i), s === void 0 ? (s = i, i = 0) : s = t(s), u = u === void 0 ? i < s ? 1 : -1 : t(u), e(i, s, u, a);
    };
  }
  return wn = n, wn;
}
var In, pu;
function Cf() {
  if (pu) return In;
  pu = 1;
  var e = xf(), r = e();
  return In = r, In;
}
var Pf = Cf();
const Sf = /* @__PURE__ */ V(Pf), Of = { range: Sf }, Tf = ce({
  getDefaultProps: function() {
    return {
      columns: [],
      rows: [],
      sortBy: null,
      sortDir: "asc",
      onSort: function() {
      },
      onSolo: function() {
      },
      onColumnHide: function() {
      },
      soloText: "solo"
    };
  },
  getInitialState: function() {
    return {
      paginatePage: 0
    };
  },
  render: function() {
    var e = this.props.rows, r = this.paginate(e), t = this.renderTableBody(this.props.columns, r.rows), n = this.renderTableHead(this.props.columns);
    return /* @__PURE__ */ R.jsxs("div", { className: "reactPivot-results", children: [
      /* @__PURE__ */ R.jsxs("table", { className: this.props.tableClassName, children: [
        n,
        t
      ] }),
      this.renderPagination(r)
    ] });
  },
  renderTableHead: function(e) {
    var r = this, t = this.props.sortBy, n = this.props.sortDir;
    return /* @__PURE__ */ R.jsx("thead", { children: /* @__PURE__ */ R.jsx("tr", { children: e.map(function(a) {
      var i = a.className;
      a.title === t && (i += " " + n);
      var s = "";
      return a.type !== "dimension" && (s = /* @__PURE__ */ R.jsx(
        "span",
        {
          className: "reactPivot-hideColumn",
          onClick: W(r.props.onColumnHide, a.title),
          children: "×"
        }
      )), /* @__PURE__ */ R.jsxs(
        "th",
        {
          className: i,
          onClick: W(r.props.onSort, a.title),
          style: { cursor: "pointer" },
          children: [
            s,
            a.title
          ]
        },
        a.title
      );
    }) }) });
  },
  renderTableBody: function(e, r) {
    var t = this;
    return /* @__PURE__ */ R.jsx("tbody", { children: r.map(function(n) {
      return /* @__PURE__ */ R.jsx("tr", { className: "reactPivot-level-" + n._level, children: e.map(function(a, i) {
        return i < n._level ? /* @__PURE__ */ R.jsx("td", { className: "reactPivot-indent" }, i) : t.renderCell(a, n);
      }) }, n._key);
    }) });
  },
  renderCell: function(e, r) {
    if (e.type === "dimension") {
      var t = r[e.title], n = t, a = typeof t < "u";
      e.template && a && (n = e.template(t, r));
    } else {
      var t = zu(e, r), n = t;
      e.template && (n = e.template(t, r));
    }
    if (a)
      var i = /* @__PURE__ */ R.jsx("span", { className: "reactPivot-solo", children: /* @__PURE__ */ R.jsx(
        "a",
        {
          style: { cursor: "pointer" },
          onClick: W(this.props.onSolo, {
            title: e.title,
            value: t
          }),
          children: this.props.soloText
        }
      ) });
    var s = Hn.isValidElement(n) ? /* @__PURE__ */ R.jsx("span", { children: n }) : /* @__PURE__ */ R.jsx(
      "span",
      {
        dangerouslySetInnerHTML: { __html: n || n === 0 && "0" || "" }
      }
    );
    return /* @__PURE__ */ R.jsxs(
      "td",
      {
        className: e.className,
        title: e.title,
        children: [
          s,
          i
        ]
      },
      [e.title, r.key].join("ÿ")
    );
  },
  renderPagination: function(e) {
    var r = this, t = e.nPages, n = e.curPage;
    return t === 1 ? "" : /* @__PURE__ */ R.jsx("div", { className: "reactPivot-paginate", children: Of.range(0, t).map(function(a) {
      var i = "reactPivot-pageNumber";
      return a === n && (i += " is-selected"), /* @__PURE__ */ R.jsx("span", { className: i, children: /* @__PURE__ */ R.jsx("a", { onClick: W(r.setPaginatePage, a), children: a + 1 }) }, a);
    }) });
  },
  paginate: function(e) {
    if (e.length <= 0) return { rows: e, nPages: 1, curPage: 0 };
    var r = this.state.paginatePage, t = this.props.nPaginateRows;
    (!t || !isFinite(t)) && (t = e.length);
    var n = Math.ceil(e.length / t);
    r >= n && (r = n - 1);
    var a = r * t, i = e[a]._level, s = [];
    if (i > 0)
      for (var u = a - 1; u >= 0 && (e[u]._level < i && (s.unshift(e[u]), i = e[u]._level), e[u]._level !== 9); u--)
        ;
    var o = a + t, c = s.concat(e.slice(a, o));
    return { rows: c, nPages: n, curPage: r };
  },
  setPaginatePage: function(e) {
    this.setState({ paginatePage: e });
  }
});
var Nn, _u;
function Af() {
  if (_u) return Nn;
  _u = 1;
  function e(r) {
    for (var t = -1, n = r == null ? 0 : r.length, a = 0, i = []; ++t < n; ) {
      var s = r[t];
      s && (i[a++] = s);
    }
    return i;
  }
  return Nn = e, Nn;
}
var wf = Af();
const If = /* @__PURE__ */ V(wf), Nf = { compact: If }, Df = ce({
  getDefaultProps: function() {
    return {
      dimensions: [],
      selectedDimensions: [],
      onChange: function() {
      },
      subDimensionText: "Sub Dimension..."
    };
  },
  render: function() {
    var e = this, r = this.props.subDimensionText, t = this.props.selectedDimensions, n = t.length;
    return /* @__PURE__ */ R.jsxs("div", { className: "reactPivot-dimensions", children: [
      t.map(this.renderDimension),
      /* @__PURE__ */ R.jsxs("select", { value: "", onChange: W(e.toggleDimension, n), children: [
        /* @__PURE__ */ R.jsx("option", { value: "", children: r }),
        e.props.dimensions.map(function(a) {
          return /* @__PURE__ */ R.jsx("option", { children: a.title }, a.title);
        })
      ] })
    ] });
  },
  renderDimension: function(e, r) {
    return /* @__PURE__ */ R.jsxs(
      "select",
      {
        value: e,
        onChange: W(this.toggleDimension, r),
        children: [
          /* @__PURE__ */ R.jsx("option", {}),
          this.props.dimensions.map(function(t) {
            return /* @__PURE__ */ R.jsx(
              "option",
              {
                value: t.title,
                children: t.title
              },
              t.title
            );
          })
        ]
      },
      e
    );
  },
  toggleDimension: function(e, r) {
    var t = r.target.value, n = this.props.selectedDimensions, a = n.indexOf(t);
    a >= 0 && (n[a] = null), n[e] = t;
    var i = Nf.compact(n);
    this.props.onChange(i);
  }
});
var Dn, gu;
function jf() {
  if (gu) return Dn;
  gu = 1;
  function e(r) {
    return r !== r;
  }
  return Dn = e, Dn;
}
var jn, mu;
function Ff() {
  if (mu) return jn;
  mu = 1;
  function e(r, t, n) {
    for (var a = n - 1, i = r.length; ++a < i; )
      if (r[a] === t)
        return a;
    return -1;
  }
  return jn = e, jn;
}
var Fn, yu;
function Mf() {
  if (yu) return Fn;
  yu = 1;
  var e = Ku(), r = jf(), t = Ff();
  function n(a, i, s) {
    return i === i ? t(a, i, s) : e(a, r, s);
  }
  return Fn = n, Fn;
}
var Mn, bu;
function kf() {
  if (bu) return Mn;
  bu = 1;
  var e = Mf();
  function r(t, n) {
    var a = t == null ? 0 : t.length;
    return !!a && e(t, n, 0) > -1;
  }
  return Mn = r, Mn;
}
var kn, qu;
function Bf() {
  if (qu) return kn;
  qu = 1;
  function e(r, t, n) {
    for (var a = -1, i = r == null ? 0 : r.length; ++a < i; )
      if (n(t, r[a]))
        return !0;
    return !1;
  }
  return kn = e, kn;
}
var Bn, Ru;
function Lf() {
  if (Ru) return Bn;
  Ru = 1;
  var e = Du(), r = kf(), t = Bf(), n = me(), a = Yn(), i = ju(), s = 200;
  function u(o, c, f, d) {
    var p = -1, _ = r, E = !0, y = o.length, g = [], x = c.length;
    if (!y)
      return g;
    f && (c = n(c, a(f))), d ? (_ = t, E = !1) : c.length >= s && (_ = i, E = !1, c = new e(c));
    e:
      for (; ++p < y; ) {
        var b = o[p], A = f == null ? b : f(b);
        if (b = d || b !== 0 ? b : 0, E && A === A) {
          for (var C = x; C--; )
            if (c[C] === A)
              continue e;
          g.push(b);
        } else _(c, A, d) || g.push(b);
      }
    return g;
  }
  return Bn = u, Bn;
}
var Ln, Eu;
function Gf() {
  if (Eu) return Ln;
  Eu = 1;
  var e = z(), r = X();
  function t(n) {
    return r(n) && e(n);
  }
  return Ln = t, Ln;
}
var Gn, xu;
function Hf() {
  if (xu) return Gn;
  xu = 1;
  var e = Lf(), r = Zn(), t = Gf(), n = r(function(a, i) {
    return t(a) ? e(a, i) : [];
  });
  return Gn = n, Gn;
}
var Kf = Hf();
const Uf = /* @__PURE__ */ V(Kf), Vf = { without: Uf }, Yf = ce({
  getDefaultProps: function() {
    return {
      hiddenColumns: [],
      onChange: function() {
      }
    };
  },
  render: function() {
    return /* @__PURE__ */ R.jsx("div", { className: "reactPivot-columnControl", children: this.props.hiddenColumns.length ? /* @__PURE__ */ R.jsxs("select", { value: "", onChange: this.showColumn, children: [
      /* @__PURE__ */ R.jsx("option", { value: "", children: "Hidden Columns" }),
      this.props.hiddenColumns.map(function(e) {
        return /* @__PURE__ */ R.jsx("option", { children: e }, e);
      })
    ] }) : "" });
  },
  showColumn: function(e) {
    var r = e.target.value, t = Vf.without(this.props.hiddenColumns, r);
    this.props.onChange(t);
  }
});
function $u(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return null;
  }
}
function Ju(e) {
  if (!e || typeof e != "object") return [];
  var r = [];
  return Object.keys(e).forEach(function(t) {
    var n = e[t];
    !n || typeof n != "object" || Object.keys(n).forEach(function(a) {
      if (n[a]) {
        var i;
        try {
          i = JSON.parse(a);
        } catch {
          return;
        }
        r.push({ title: t, key: a, value: i });
      }
    });
  }), r;
}
function Wf(e, r) {
  if (!e || typeof e != "object" || !Array.isArray(r)) return null;
  var t = r.filter(function(n) {
    var a = e[n];
    return a && typeof a == "object" && Object.keys(a).length > 0;
  });
  return t.length ? function(n) {
    return zf(n, e, t);
  } : null;
}
function zf(e, r, t) {
  return t.every(function(n) {
    var a = r[n];
    if (!a || !Object.prototype.hasOwnProperty.call(e, n)) return !0;
    var i = $u(e[n]);
    return i ? Object.prototype.hasOwnProperty.call(a, i) : !1;
  });
}
function $f(e) {
  if (!e || typeof e != "string") return null;
  try {
    var r = JSON.parse(e);
    return r && typeof r == "object" ? r : null;
  } catch {
    return null;
  }
}
function Jf(e) {
  if (e === null) return "null";
  if (typeof e == "object")
    try {
      return JSON.stringify(e);
    } catch {
      return "[object]";
    }
  return String(e);
}
const Xf = ce({
  getDefaultProps: function() {
    return {
      solo: {},
      onToggle: function() {
      }
    };
  },
  render: function() {
    var e = Ju(this.props.solo);
    if (!e.length)
      return /* @__PURE__ */ R.jsx("div", { className: "reactPivot-soloControl" });
    var r = e.map(function(t) {
      var n = Jf(t.value), a = t.title + ": " + n, i;
      try {
        i = JSON.stringify({ title: t.title, value: t.value });
      } catch {
        return null;
      }
      return /* @__PURE__ */ R.jsx("option", { value: i, children: a }, t.title + "::" + t.key);
    }).filter(Boolean);
    return r.length ? /* @__PURE__ */ R.jsx("div", { className: "reactPivot-soloControl", children: /* @__PURE__ */ R.jsxs("select", { value: "", onChange: this.handleToggle, children: [
      /* @__PURE__ */ R.jsx("option", { value: "", children: "Solo Filters" }),
      r
    ] }) }) : /* @__PURE__ */ R.jsx("div", { className: "reactPivot-soloControl" });
  },
  handleToggle: function(e) {
    var r = $f(e.target.value);
    r && (e.target.value = "", this.props.onToggle(r));
  }
}), re = { filter: Cc, map: Oc, find: Fc }, el = ce({
  displayName: "ReactPivot",
  getDefaultProps: function() {
    return {
      rows: [],
      dimensions: [],
      activeDimensions: [],
      reduce: function() {
      },
      tableClassName: "",
      csvDownloadFileName: "table.csv",
      csvTemplateFormat: !1,
      defaultStyles: !0,
      nPaginateRows: 25,
      solo: {},
      hiddenColumns: [],
      hideRows: null,
      sortBy: null,
      sortDir: "asc",
      eventBus: new qf(),
      compact: !1,
      excludeSummaryFromExport: !1,
      onData: function() {
      },
      soloText: "solo",
      subDimensionText: "Sub Dimension..."
    };
  },
  getInitialState: function() {
    var e = this.props.dimensions, r = re.filter(this.props.activeDimensions, function(t) {
      return re.find(e, function(n) {
        return n.title === t;
      });
    });
    return {
      dimensions: r,
      calculations: {},
      sortBy: this.props.sortBy,
      sortDir: this.props.sortDir,
      hiddenColumns: this.props.hiddenColumns,
      solo: this.props.solo,
      filtersPaused: !1,
      hideRows: this.props.hideRows,
      rows: []
    };
  },
  componentDidMount: function() {
    this.props.defaultStyles && Zf(), this.dataFrame = fu({
      rows: this.props.rows,
      dimensions: this.props.dimensions,
      reduce: this.props.reduce
    }), this.updateRows();
  },
  componentDidUpdate: function(e) {
    this.props.hiddenColumns !== e.hiddenColumns && this.setHiddenColumns(this.props.hiddenColumns), this.props.rows !== e.rows && (this.dataFrame = fu({
      rows: this.props.rows,
      dimensions: this.props.dimensions,
      reduce: this.props.reduce
    }), this.updateRows()), this.props.solo !== e.solo && this.setState({ solo: this.props.solo }, this.updateRows);
  },
  getColumns: function() {
    var e = this, r = [];
    return this.state.dimensions.forEach(function(t) {
      var n = re.find(e.props.dimensions, function(a) {
        return a.title === t;
      });
      r.push({
        type: "dimension",
        title: n.title,
        value: n.value,
        className: n.className,
        template: n.template,
        sortBy: n.sortBy
      });
    }), this.props.calculations.forEach(function(t) {
      e.state.hiddenColumns.indexOf(t.title) >= 0 || r.push({
        type: "calculation",
        title: t.title,
        template: t.template,
        value: t.value,
        className: t.className,
        sortBy: t.sortBy
      });
    }), r;
  },
  renderFiltersToggle: function() {
    if (Ju(this.state.solo).length === 0) return null;
    var e = this.state.filtersPaused ? "Resume Filters" : "Pause Filters";
    return /* @__PURE__ */ R.jsx("div", { className: "reactPivot-filtersToggle", children: /* @__PURE__ */ R.jsx("button", { onClick: this.toggleFilters, children: e }) });
  },
  render: function() {
    var e = /* @__PURE__ */ R.jsxs("div", { className: "reactPivot", children: [
      /* @__PURE__ */ R.jsxs("div", { className: "reactPivot-toolbar", children: [
        this.props.hideDimensionFilter ? null : /* @__PURE__ */ R.jsx(
          Df,
          {
            dimensions: this.props.dimensions,
            subDimensionText: this.props.subDimensionText,
            selectedDimensions: this.state.dimensions,
            onChange: this.setDimensions
          }
        ),
        /* @__PURE__ */ R.jsxs("div", { className: "reactPivot-controls", children: [
          /* @__PURE__ */ R.jsx(
            Yf,
            {
              hiddenColumns: this.state.hiddenColumns,
              onChange: this.setHiddenColumns
            }
          ),
          /* @__PURE__ */ R.jsx(
            Xf,
            {
              solo: this.state.solo,
              onToggle: this.setSolo
            }
          ),
          this.renderFiltersToggle(),
          /* @__PURE__ */ R.jsx("div", { className: "reactPivot-csvExport", children: /* @__PURE__ */ R.jsx("button", { onClick: W(this.downloadCSV, this.state.rows), children: "Export CSV" }) })
        ] })
      ] }),
      /* @__PURE__ */ R.jsx(
        Tf,
        {
          columns: this.getColumns(),
          rows: this.state.rows,
          sortBy: this.state.sortBy,
          sortDir: this.state.sortDir,
          onSort: this.setSort,
          onColumnHide: this.hideColumn,
          nPaginateRows: this.props.nPaginateRows,
          tableClassName: this.props.tableClassName,
          onSolo: this.setSolo,
          soloText: this.props.soloText
        }
      )
    ] });
    return e;
  },
  updateRows: function() {
    var e = this.getColumns(), r = this.state.sortBy, t = re.find(e, function(o) {
      return o.title === r;
    }) || {}, n = t.sortBy || (t.type === "dimension" ? t.title : t.value), a = this.state.sortDir, i = this.state.hideRows, s = {
      dimensions: this.state.dimensions,
      sortBy: n,
      sortDir: a,
      compact: this.props.compact
    };
    this.state.filtersPaused || (s.filter = Wf(this.state.solo, this.state.dimensions));
    var u = this.dataFrame.calculate(s).filter(function(o) {
      return i ? !i(o) : !0;
    });
    this.setState({ rows: u }), this.props.onData(u);
  },
  setDimensions: function(e) {
    this.props.eventBus.emit("activeDimensions", e), this.setState({ dimensions: e }), setTimeout(this.updateRows, 0);
  },
  setHiddenColumns: function(e) {
    this.props.eventBus.emit("hiddenColumns", e), this.setState({ hiddenColumns: e }), setTimeout(this.updateRows, 0);
  },
  setSort: function(e) {
    var r = this.state.sortBy, t = this.state.sortDir;
    r === e ? t = t === "asc" ? "desc" : "asc" : (r = e, t = "asc"), this.props.eventBus.emit("sortBy", r), this.props.eventBus.emit("sortDir", t), this.setState({ sortBy: r, sortDir: t }), setTimeout(this.updateRows, 0);
  },
  setSolo: function(e) {
    if (!(!e || typeof e != "object")) {
      var r = e.title;
      if (r) {
        var t = $u(e.value);
        if (t) {
          var n = Object.assign({}, this.state.solo), a = n[r] || {};
          Object.prototype.hasOwnProperty.call(a, t) ? (n[r] = this.removeSoloValue(a, t), n[r] || delete n[r]) : n[r] = this.addSoloValue(a, t), this.props.eventBus.emit("solo", n), this.setState({ solo: n, filtersPaused: !1 }, this.updateRows);
        }
      }
    }
  },
  addSoloValue: function(e, r) {
    var t = Object.assign({}, e);
    return t[r] = !0, t;
  },
  removeSoloValue: function(e, r) {
    var t = Object.assign({}, e);
    return delete t[r], Object.keys(t).length > 0 ? t : null;
  },
  toggleFilters: function() {
    this.setState({ filtersPaused: !this.state.filtersPaused }, this.updateRows);
  },
  hideColumn: function(e) {
    var r = this.state.hiddenColumns.concat([e]);
    this.setHiddenColumns(r), setTimeout(this.updateRows, 0);
  },
  downloadCSV: function(e) {
    var r = this, t = this.getColumns(), n = re.map(t, "title").map(JSON.stringify.bind(JSON)).join(",") + `
`, a = this.state.dimensions.length - 1, i = this.props.excludeSummaryFromExport;
    e.forEach(function(s) {
      if (!(i && s._level < a)) {
        var u = t.map(function(o) {
          if (o.type === "dimension")
            var c = s[o.title];
          else
            var c = zu(o, s);
          return o.template && r.props.csvTemplateFormat && (c = o.template(c)), JSON.stringify(c);
        });
        n += u.join(",") + `
`;
      }
    }), Rf(n, this.props.csvDownloadFileName, "text/csv");
  }
});
function Zf() {
  if (typeof document > "u" || document.getElementById("react-pivot-styles")) return;
  const e = `.reactPivot {
  margin-top: 40px;
  padding: 10px 20px 20px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.reactPivot select {
  color: #555;
  height: 28px;
  border: none;
  margin-right: 5px;
  margin-top: 5px;
  background-color: #FFF;
  border: 1px solid #CCC;
}

.reactPivot-results table {
  width: 100%;
  clear: both;
  text-align: left;
  border-spacing: 0;
}

.reactPivot-results th.asc:after,
.reactPivot-results th.desc:after {
  font-size: 50%;
  opacity: 0.5;
}

.reactPivot-results th.asc:after { content: ' ▲' }
.reactPivot-results th.desc:after { content: ' ▼' }

.reactPivot-results td {
  border-top: 1px solid #ddd;
  padding: 8px;
}

.reactPivot-results td.reactPivot-indent {
  border: none;
}

.reactPivot-results tr:hover td {
  background: #f5f5f5
}

.reactPivot-results tr:hover td.reactPivot-indent {
  background: none;
}

.reactPivot-solo {
  opacity: 0;
  margin-left: 6px;
}

.reactPivot-solo:hover {font-weight: bold}
td:hover .reactPivot-solo {opacity: 0.5}

.reactPivot-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  margin: 10px 0;
}

.reactPivot-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-end;
  flex: 0 0 auto;
}

.reactPivot-controls > * {
  margin: 0;
}

.reactPivot-controls select {
  margin: 0;
  width: 120px;
}

.reactPivot-toolbar select {
  margin-top: 0;
}

.reactPivot-csvExport {
  display: flex;
  align-items: flex-start;
  flex: 0 0 auto;
}

.reactPivot-csvExport button {
  background-color: #FFF;
  border: 1px solid #CCC;
  height: 28px;
  color: #555;
  cursor: pointer;
  padding: 0 12px;
  border-radius: 0;
  margin-top: 0;
  white-space: nowrap;
  flex-shrink: 0;
}

.reactPivot-filtersToggle {
  display: flex;
  align-items: flex-start;
  flex: 0 0 auto;
}

.reactPivot-filtersToggle button {
  background-color: #FFF;
  border: 1px solid #CCC;
  height: 28px;
  color: #555;
  cursor: pointer;
  padding: 0 12px;
  border-radius: 0;
  margin-top: 0;
  white-space: nowrap;
  flex-shrink: 0;
}

.reactPivot-dimensions {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 0;
  text-align: left;
  flex: 1 1 300px;
  min-width: 0;
}

.reactPivot-dimensions select {
  margin: 0;
}

.reactPivot-hideColumn { opacity: 0 }

th:hover .reactPivot-hideColumn {
  opacity: 0.5;
  margin-right: 4px;
  margin-bottom: 2px;
}

.reactPivot-hideColumn:hover {
  font-weight: bold;
  cursor: pointer;
}

.reactPivot-pageNumber {
  padding: 2px;
  margin: 4px;
  cursor: pointer;
  color: gray;
  font-size: 14px;
}

.reactPivot-pageNumber:hover {
  font-weight: bold;
  border-bottom: black solid 1px;
  color: black;
}

.reactPivot-pageNumber.is-selected {
  font-weight: bold;
  border-bottom: black solid 1px;
  color: black;
}

.reactPivot-paginate {
  margin-top: 24px;
}`, r = document.createElement("style");
  r.id = "react-pivot-styles", r.textContent = e, document.head.appendChild(r);
}
export {
  el as default
};
