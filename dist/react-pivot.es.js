import Hn from "react";
var ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Y(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fe = { exports: {} }, Q = {};
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
function Ju() {
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
function Xu() {
  return ra || (ra = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === B ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case y:
          return "Fragment";
        case E:
          return "Profiler";
        case g:
          return "StrictMode";
        case N:
          return "Suspense";
        case O:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case R:
            return "Portal";
          case x:
            return (d.displayName || "Context") + ".Provider";
          case b:
            return (d._context.displayName || "Context") + ".Consumer";
          case C:
            var q = d.render;
            return d = d.displayName, d || (d = q.displayName || q.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case S:
            return q = d.displayName || null, q !== null ? q : e(d.type) || "Memo";
          case j:
            q = d._payload, d = d._init;
            try {
              return e(d(q));
            } catch {
            }
        }
      return null;
    }
    function r(d) {
      return "" + d;
    }
    function t(d) {
      try {
        r(d);
        var q = !1;
      } catch {
        q = !0;
      }
      if (q) {
        q = console;
        var D = q.error, F = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return D.call(
          q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), r(d);
      }
    }
    function n(d) {
      if (d === y) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === j)
        return "<...>";
      try {
        var q = e(d);
        return q ? "<" + q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var d = A.A;
      return d === null ? null : d.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(d) {
      if (v.call(d, "key")) {
        var q = Object.getOwnPropertyDescriptor(d, "key").get;
        if (q && q.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function u(d, q) {
      function D() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          q
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: D,
        configurable: !0
      });
    }
    function o() {
      var d = e(this.type);
      return w[d] || (w[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function c(d, q, D, F, H, U, be, qe) {
      return D = U.ref, d = {
        $$typeof: _,
        type: d,
        key: q,
        props: U,
        _owner: H
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: o
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: be
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: qe
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function f(d, q, D, F, H, U, be, qe) {
      var k = q.children;
      if (k !== void 0)
        if (F)
          if (l(k)) {
            for (F = 0; F < k.length; F++)
              h(k[F]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(k);
      if (v.call(q, "key")) {
        k = e(d);
        var J = Object.keys(q).filter(function($u) {
          return $u !== "key";
        });
        F = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", G[k + F] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          k,
          J,
          k
        ), G[k + F] = !0);
      }
      if (k = null, D !== void 0 && (t(D), k = "" + D), s(q) && (t(q.key), k = "" + q.key), "key" in q) {
        D = {};
        for (var Re in q)
          Re !== "key" && (D[Re] = q[Re]);
      } else D = q;
      return k && u(
        D,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), c(
        d,
        k,
        U,
        H,
        a(),
        D,
        be,
        qe
      );
    }
    function h(d) {
      typeof d == "object" && d !== null && d.$$typeof === _ && d._store && (d._store.validated = 1);
    }
    var p = Hn, _ = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), A = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, v = Object.prototype.hasOwnProperty, l = Array.isArray, m = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(d) {
        return d();
      }
    };
    var P, w = {}, L = p["react-stack-bottom-frame"].bind(
      p,
      i
    )(), I = m(n(i)), G = {};
    ee.Fragment = y, ee.jsx = function(d, q, D, F, H) {
      var U = 1e4 > A.recentlyCreatedOwnerStacks++;
      return f(
        d,
        q,
        D,
        !1,
        F,
        H,
        U ? Error("react-stack-top-frame") : L,
        U ? m(n(d)) : I
      );
    }, ee.jsxs = function(d, q, D, F, H) {
      var U = 1e4 > A.recentlyCreatedOwnerStacks++;
      return f(
        d,
        q,
        D,
        !0,
        F,
        H,
        U ? Error("react-stack-top-frame") : L,
        U ? m(n(d)) : I
      );
    };
  }()), ee;
}
var ta;
function Zu() {
  return ta || (ta = 1, process.env.NODE_ENV === "production" ? fe.exports = Ju() : fe.exports = Xu()), fe.exports;
}
var T = Zu(), Ee, na;
function Au() {
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
var Ce, aa;
function Qu() {
  if (aa) return Ce;
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
  return Ce = e, Ce;
}
var Ae, ia;
function eo() {
  if (ia) return Ae;
  ia = 1;
  var e = Qu(), r = e();
  return Ae = r, Ae;
}
var Se, sa;
function ro() {
  if (sa) return Se;
  sa = 1;
  function e(r, t) {
    for (var n = -1, a = Array(r); ++n < r; )
      a[n] = t(n);
    return a;
  }
  return Se = e, Se;
}
var Te, ua;
function Su() {
  if (ua) return Te;
  ua = 1;
  var e = typeof ce == "object" && ce && ce.Object === Object && ce;
  return Te = e, Te;
}
var Oe, oa;
function W() {
  if (oa) return Oe;
  oa = 1;
  var e = Su(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return Oe = t, Oe;
}
var Ie, ca;
function ae() {
  if (ca) return Ie;
  ca = 1;
  var e = W(), r = e.Symbol;
  return Ie = r, Ie;
}
var xe, fa;
function to() {
  if (fa) return xe;
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
  return xe = i, xe;
}
var Pe, la;
function no() {
  if (la) return Pe;
  la = 1;
  var e = Object.prototype, r = e.toString;
  function t(n) {
    return r.call(n);
  }
  return Pe = t, Pe;
}
var we, ha;
function ie() {
  if (ha) return we;
  ha = 1;
  var e = ae(), r = to(), t = no(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function s(u) {
    return u == null ? u === void 0 ? a : n : i && i in Object(u) ? r(u) : t(u);
  }
  return we = s, we;
}
var De, da;
function X() {
  if (da) return De;
  da = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return De = e, De;
}
var Ne, va;
function ao() {
  if (va) return Ne;
  va = 1;
  var e = ie(), r = X(), t = "[object Arguments]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Ne = n, Ne;
}
var je, pa;
function Kn() {
  if (pa) return je;
  pa = 1;
  var e = ao(), r = X(), t = Object.prototype, n = t.hasOwnProperty, a = t.propertyIsEnumerable, i = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(s) {
    return r(s) && n.call(s, "callee") && !a.call(s, "callee");
  };
  return je = i, je;
}
var Me, _a;
function K() {
  if (_a) return Me;
  _a = 1;
  var e = Array.isArray;
  return Me = e, Me;
}
var te = { exports: {} }, Fe, ga;
function io() {
  if (ga) return Fe;
  ga = 1;
  function e() {
    return !1;
  }
  return Fe = e, Fe;
}
te.exports;
var ma;
function Tu() {
  return ma || (ma = 1, function(e, r) {
    var t = W(), n = io(), a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, u = s ? t.Buffer : void 0, o = u ? u.isBuffer : void 0, c = o || n;
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
function Yn() {
  if (ba) return Be;
  ba = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return Be = r, Be;
}
var Le, qa;
function so() {
  if (qa) return Le;
  qa = 1;
  var e = ie(), r = Yn(), t = X(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", s = "[object Date]", u = "[object Error]", o = "[object Function]", c = "[object Map]", f = "[object Number]", h = "[object Object]", p = "[object RegExp]", _ = "[object Set]", R = "[object String]", y = "[object WeakMap]", g = "[object ArrayBuffer]", E = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", C = "[object Int8Array]", N = "[object Int16Array]", O = "[object Int32Array]", S = "[object Uint8Array]", j = "[object Uint8ClampedArray]", M = "[object Uint16Array]", B = "[object Uint32Array]", A = {};
  A[b] = A[x] = A[C] = A[N] = A[O] = A[S] = A[j] = A[M] = A[B] = !0, A[n] = A[a] = A[g] = A[i] = A[E] = A[s] = A[u] = A[o] = A[c] = A[f] = A[h] = A[p] = A[_] = A[R] = A[y] = !1;
  function v(l) {
    return t(l) && r(l.length) && !!A[e(l)];
  }
  return Le = v, Le;
}
var Ge, Ra;
function Wn() {
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
function uo() {
  return Ea || (Ea = 1, function(e, r) {
    var t = Su(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && t.process, u = function() {
      try {
        var o = a && a.require && a.require("util").types;
        return o || s && s.binding && s.binding("util");
      } catch {
      }
    }();
    e.exports = u;
  }(ne, ne.exports)), ne.exports;
}
var He, Ca;
function Ou() {
  if (Ca) return He;
  Ca = 1;
  var e = so(), r = Wn(), t = uo(), n = t && t.isTypedArray, a = n ? r(n) : e;
  return He = a, He;
}
var Ke, Aa;
function Iu() {
  if (Aa) return Ke;
  Aa = 1;
  var e = ro(), r = Kn(), t = K(), n = Tu(), a = Un(), i = Ou(), s = Object.prototype, u = s.hasOwnProperty;
  function o(c, f) {
    var h = t(c), p = !h && r(c), _ = !h && !p && n(c), R = !h && !p && !_ && i(c), y = h || p || _ || R, g = y ? e(c.length, String) : [], E = g.length;
    for (var b in c)
      (f || u.call(c, b)) && !(y && // Safari 9 has enumerable `arguments.length` in strict mode.
      (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      _ && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      R && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
      a(b, E))) && g.push(b);
    return g;
  }
  return Ke = o, Ke;
}
var Ue, Sa;
function xu() {
  if (Sa) return Ue;
  Sa = 1;
  var e = Object.prototype;
  function r(t) {
    var n = t && t.constructor, a = typeof n == "function" && n.prototype || e;
    return t === a;
  }
  return Ue = r, Ue;
}
var Ye, Ta;
function oo() {
  if (Ta) return Ye;
  Ta = 1;
  function e(r, t) {
    return function(n) {
      return r(t(n));
    };
  }
  return Ye = e, Ye;
}
var We, Oa;
function co() {
  if (Oa) return We;
  Oa = 1;
  var e = oo(), r = e(Object.keys, Object);
  return We = r, We;
}
var Ve, Ia;
function fo() {
  if (Ia) return Ve;
  Ia = 1;
  var e = xu(), r = co(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return r(i);
    var s = [];
    for (var u in Object(i))
      n.call(i, u) && u != "constructor" && s.push(u);
    return s;
  }
  return Ve = a, Ve;
}
var ze, xa;
function Z() {
  if (xa) return ze;
  xa = 1;
  function e(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return ze = e, ze;
}
var $e, Pa;
function Pu() {
  if (Pa) return $e;
  Pa = 1;
  var e = ie(), r = Z(), t = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function s(u) {
    if (!r(u))
      return !1;
    var o = e(u);
    return o == n || o == a || o == t || o == i;
  }
  return $e = s, $e;
}
var Je, wa;
function z() {
  if (wa) return Je;
  wa = 1;
  var e = Pu(), r = Yn();
  function t(n) {
    return n != null && r(n.length) && !e(n);
  }
  return Je = t, Je;
}
var Xe, Da;
function le() {
  if (Da) return Xe;
  Da = 1;
  var e = Iu(), r = fo(), t = z();
  function n(a) {
    return t(a) ? e(a) : r(a);
  }
  return Xe = n, Xe;
}
var Ze, Na;
function lo() {
  if (Na) return Ze;
  Na = 1;
  var e = eo(), r = le();
  function t(n, a) {
    return n && e(n, a, r);
  }
  return Ze = t, Ze;
}
var Qe, ja;
function ho() {
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
var er, Ma;
function Vn() {
  if (Ma) return er;
  Ma = 1;
  var e = lo(), r = ho(), t = r(e);
  return er = t, er;
}
var rr, Fa;
function vo() {
  if (Fa) return rr;
  Fa = 1;
  var e = Vn();
  function r(t, n) {
    var a = [];
    return e(t, function(i, s, u) {
      n(i, s, u) && a.push(i);
    }), a;
  }
  return rr = r, rr;
}
var tr, ka;
function po() {
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
function de() {
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
function _o() {
  if (Ga) return ir;
  Ga = 1;
  var e = de(), r = Array.prototype, t = r.splice;
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
function go() {
  if (Ha) return sr;
  Ha = 1;
  var e = de();
  function r(t) {
    var n = this.__data__, a = e(n, t);
    return a < 0 ? void 0 : n[a][1];
  }
  return sr = r, sr;
}
var ur, Ka;
function mo() {
  if (Ka) return ur;
  Ka = 1;
  var e = de();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return ur = r, ur;
}
var or, Ua;
function yo() {
  if (Ua) return or;
  Ua = 1;
  var e = de();
  function r(t, n) {
    var a = this.__data__, i = e(a, t);
    return i < 0 ? (++this.size, a.push([t, n])) : a[i][1] = n, this;
  }
  return or = r, or;
}
var cr, Ya;
function ve() {
  if (Ya) return cr;
  Ya = 1;
  var e = po(), r = _o(), t = go(), n = mo(), a = yo();
  function i(s) {
    var u = -1, o = s == null ? 0 : s.length;
    for (this.clear(); ++u < o; ) {
      var c = s[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, cr = i, cr;
}
var fr, Wa;
function bo() {
  if (Wa) return fr;
  Wa = 1;
  var e = ve();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return fr = r, fr;
}
var lr, Va;
function qo() {
  if (Va) return lr;
  Va = 1;
  function e(r) {
    var t = this.__data__, n = t.delete(r);
    return this.size = t.size, n;
  }
  return lr = e, lr;
}
var hr, za;
function Ro() {
  if (za) return hr;
  za = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return hr = e, hr;
}
var dr, $a;
function Eo() {
  if ($a) return dr;
  $a = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return dr = e, dr;
}
var vr, Ja;
function Co() {
  if (Ja) return vr;
  Ja = 1;
  var e = W(), r = e["__core-js_shared__"];
  return vr = r, vr;
}
var pr, Xa;
function Ao() {
  if (Xa) return pr;
  Xa = 1;
  var e = Co(), r = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function t(n) {
    return !!r && r in n;
  }
  return pr = t, pr;
}
var _r, Za;
function wu() {
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
function So() {
  if (Qa) return gr;
  Qa = 1;
  var e = Pu(), r = Ao(), t = Z(), n = wu(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, u = Object.prototype, o = s.toString, c = u.hasOwnProperty, f = RegExp(
    "^" + o.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function h(p) {
    if (!t(p) || r(p))
      return !1;
    var _ = e(p) ? f : i;
    return _.test(n(p));
  }
  return gr = h, gr;
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
  var e = So(), r = To();
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
  var e = $(), r = W(), t = e(r, "Map");
  return br = t, br;
}
var qr, ni;
function pe() {
  if (ni) return qr;
  ni = 1;
  var e = $(), r = e(Object, "create");
  return qr = r, qr;
}
var Rr, ai;
function Oo() {
  if (ai) return Rr;
  ai = 1;
  var e = pe();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Rr = r, Rr;
}
var Er, ii;
function Io() {
  if (ii) return Er;
  ii = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return Er = e, Er;
}
var Cr, si;
function xo() {
  if (si) return Cr;
  si = 1;
  var e = pe(), r = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    var s = this.__data__;
    if (e) {
      var u = s[i];
      return u === r ? void 0 : u;
    }
    return n.call(s, i) ? s[i] : void 0;
  }
  return Cr = a, Cr;
}
var Ar, ui;
function Po() {
  if (ui) return Ar;
  ui = 1;
  var e = pe(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : t.call(i, a);
  }
  return Ar = n, Ar;
}
var Sr, oi;
function wo() {
  if (oi) return Sr;
  oi = 1;
  var e = pe(), r = "__lodash_hash_undefined__";
  function t(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? r : a, this;
  }
  return Sr = t, Sr;
}
var Tr, ci;
function Do() {
  if (ci) return Tr;
  ci = 1;
  var e = Oo(), r = Io(), t = xo(), n = Po(), a = wo();
  function i(s) {
    var u = -1, o = s == null ? 0 : s.length;
    for (this.clear(); ++u < o; ) {
      var c = s[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Tr = i, Tr;
}
var Or, fi;
function No() {
  if (fi) return Or;
  fi = 1;
  var e = Do(), r = ve(), t = zn();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return Or = n, Or;
}
var Ir, li;
function jo() {
  if (li) return Ir;
  li = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return Ir = e, Ir;
}
var xr, hi;
function _e() {
  if (hi) return xr;
  hi = 1;
  var e = jo();
  function r(t, n) {
    var a = t.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return xr = r, xr;
}
var Pr, di;
function Mo() {
  if (di) return Pr;
  di = 1;
  var e = _e();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return Pr = r, Pr;
}
var wr, vi;
function Fo() {
  if (vi) return wr;
  vi = 1;
  var e = _e();
  function r(t) {
    return e(this, t).get(t);
  }
  return wr = r, wr;
}
var Dr, pi;
function ko() {
  if (pi) return Dr;
  pi = 1;
  var e = _e();
  function r(t) {
    return e(this, t).has(t);
  }
  return Dr = r, Dr;
}
var Nr, _i;
function Bo() {
  if (_i) return Nr;
  _i = 1;
  var e = _e();
  function r(t, n) {
    var a = e(this, t), i = a.size;
    return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
  }
  return Nr = r, Nr;
}
var jr, gi;
function $n() {
  if (gi) return jr;
  gi = 1;
  var e = No(), r = Mo(), t = Fo(), n = ko(), a = Bo();
  function i(s) {
    var u = -1, o = s == null ? 0 : s.length;
    for (this.clear(); ++u < o; ) {
      var c = s[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, jr = i, jr;
}
var Mr, mi;
function Lo() {
  if (mi) return Mr;
  mi = 1;
  var e = ve(), r = zn(), t = $n(), n = 200;
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
  return Mr = a, Mr;
}
var Fr, yi;
function Du() {
  if (yi) return Fr;
  yi = 1;
  var e = ve(), r = bo(), t = qo(), n = Ro(), a = Eo(), i = Lo();
  function s(u) {
    var o = this.__data__ = new e(u);
    this.size = o.size;
  }
  return s.prototype.clear = r, s.prototype.delete = t, s.prototype.get = n, s.prototype.has = a, s.prototype.set = i, Fr = s, Fr;
}
var kr, bi;
function Go() {
  if (bi) return kr;
  bi = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return kr = r, kr;
}
var Br, qi;
function Ho() {
  if (qi) return Br;
  qi = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return Br = e, Br;
}
var Lr, Ri;
function Nu() {
  if (Ri) return Lr;
  Ri = 1;
  var e = $n(), r = Go(), t = Ho();
  function n(a) {
    var i = -1, s = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < s; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = r, n.prototype.has = t, Lr = n, Lr;
}
var Gr, Ei;
function Ko() {
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
var Hr, Ci;
function ju() {
  if (Ci) return Hr;
  Ci = 1;
  function e(r, t) {
    return r.has(t);
  }
  return Hr = e, Hr;
}
var Kr, Ai;
function Mu() {
  if (Ai) return Kr;
  Ai = 1;
  var e = Nu(), r = Ko(), t = ju(), n = 1, a = 2;
  function i(s, u, o, c, f, h) {
    var p = o & n, _ = s.length, R = u.length;
    if (_ != R && !(p && R > _))
      return !1;
    var y = h.get(s), g = h.get(u);
    if (y && g)
      return y == u && g == s;
    var E = -1, b = !0, x = o & a ? new e() : void 0;
    for (h.set(s, u), h.set(u, s); ++E < _; ) {
      var C = s[E], N = u[E];
      if (c)
        var O = p ? c(N, C, E, u, s, h) : c(C, N, E, s, u, h);
      if (O !== void 0) {
        if (O)
          continue;
        b = !1;
        break;
      }
      if (x) {
        if (!r(u, function(S, j) {
          if (!t(x, j) && (C === S || f(C, S, o, c, h)))
            return x.push(j);
        })) {
          b = !1;
          break;
        }
      } else if (!(C === N || f(C, N, o, c, h))) {
        b = !1;
        break;
      }
    }
    return h.delete(s), h.delete(u), b;
  }
  return Kr = i, Kr;
}
var Ur, Si;
function Uo() {
  if (Si) return Ur;
  Si = 1;
  var e = W(), r = e.Uint8Array;
  return Ur = r, Ur;
}
var Yr, Ti;
function Yo() {
  if (Ti) return Yr;
  Ti = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return Yr = e, Yr;
}
var Wr, Oi;
function Wo() {
  if (Oi) return Wr;
  Oi = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a) {
      n[++t] = a;
    }), n;
  }
  return Wr = e, Wr;
}
var Vr, Ii;
function Vo() {
  if (Ii) return Vr;
  Ii = 1;
  var e = ae(), r = Uo(), t = he(), n = Mu(), a = Yo(), i = Wo(), s = 1, u = 2, o = "[object Boolean]", c = "[object Date]", f = "[object Error]", h = "[object Map]", p = "[object Number]", _ = "[object RegExp]", R = "[object Set]", y = "[object String]", g = "[object Symbol]", E = "[object ArrayBuffer]", b = "[object DataView]", x = e ? e.prototype : void 0, C = x ? x.valueOf : void 0;
  function N(O, S, j, M, B, A, v) {
    switch (j) {
      case b:
        if (O.byteLength != S.byteLength || O.byteOffset != S.byteOffset)
          return !1;
        O = O.buffer, S = S.buffer;
      case E:
        return !(O.byteLength != S.byteLength || !A(new r(O), new r(S)));
      case o:
      case c:
      case p:
        return t(+O, +S);
      case f:
        return O.name == S.name && O.message == S.message;
      case _:
      case y:
        return O == S + "";
      case h:
        var l = a;
      case R:
        var m = M & s;
        if (l || (l = i), O.size != S.size && !m)
          return !1;
        var P = v.get(O);
        if (P)
          return P == S;
        M |= u, v.set(O, S);
        var w = n(l(O), l(S), M, B, A, v);
        return v.delete(O), w;
      case g:
        if (C)
          return C.call(O) == C.call(S);
    }
    return !1;
  }
  return Vr = N, Vr;
}
var zr, xi;
function Fu() {
  if (xi) return zr;
  xi = 1;
  function e(r, t) {
    for (var n = -1, a = t.length, i = r.length; ++n < a; )
      r[i + n] = t[n];
    return r;
  }
  return zr = e, zr;
}
var $r, Pi;
function zo() {
  if (Pi) return $r;
  Pi = 1;
  var e = Fu(), r = K();
  function t(n, a, i) {
    var s = a(n);
    return r(n) ? s : e(s, i(n));
  }
  return $r = t, $r;
}
var Jr, wi;
function $o() {
  if (wi) return Jr;
  wi = 1;
  function e() {
    return [];
  }
  return Jr = e, Jr;
}
var Xr, Di;
function Jo() {
  if (Di) return Xr;
  Di = 1;
  var e = Au(), r = $o(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(s) {
    return s == null ? [] : (s = Object(s), e(a(s), function(u) {
      return n.call(s, u);
    }));
  } : r;
  return Xr = i, Xr;
}
var Zr, Ni;
function Xo() {
  if (Ni) return Zr;
  Ni = 1;
  var e = zo(), r = Jo(), t = le();
  function n(a) {
    return e(a, t, r);
  }
  return Zr = n, Zr;
}
var Qr, ji;
function Zo() {
  if (ji) return Qr;
  ji = 1;
  var e = Xo(), r = 1, t = Object.prototype, n = t.hasOwnProperty;
  function a(i, s, u, o, c, f) {
    var h = u & r, p = e(i), _ = p.length, R = e(s), y = R.length;
    if (_ != y && !h)
      return !1;
    for (var g = _; g--; ) {
      var E = p[g];
      if (!(h ? E in s : n.call(s, E)))
        return !1;
    }
    var b = f.get(i), x = f.get(s);
    if (b && x)
      return b == s && x == i;
    var C = !0;
    f.set(i, s), f.set(s, i);
    for (var N = h; ++g < _; ) {
      E = p[g];
      var O = i[E], S = s[E];
      if (o)
        var j = h ? o(S, O, E, s, i, f) : o(O, S, E, i, s, f);
      if (!(j === void 0 ? O === S || c(O, S, u, o, f) : j)) {
        C = !1;
        break;
      }
      N || (N = E == "constructor");
    }
    if (C && !N) {
      var M = i.constructor, B = s.constructor;
      M != B && "constructor" in i && "constructor" in s && !(typeof M == "function" && M instanceof M && typeof B == "function" && B instanceof B) && (C = !1);
    }
    return f.delete(i), f.delete(s), C;
  }
  return Qr = a, Qr;
}
var et, Mi;
function Qo() {
  if (Mi) return et;
  Mi = 1;
  var e = $(), r = W(), t = e(r, "DataView");
  return et = t, et;
}
var rt, Fi;
function ec() {
  if (Fi) return rt;
  Fi = 1;
  var e = $(), r = W(), t = e(r, "Promise");
  return rt = t, rt;
}
var tt, ki;
function rc() {
  if (ki) return tt;
  ki = 1;
  var e = $(), r = W(), t = e(r, "Set");
  return tt = t, tt;
}
var nt, Bi;
function tc() {
  if (Bi) return nt;
  Bi = 1;
  var e = $(), r = W(), t = e(r, "WeakMap");
  return nt = t, nt;
}
var at, Li;
function nc() {
  if (Li) return at;
  Li = 1;
  var e = Qo(), r = zn(), t = ec(), n = rc(), a = tc(), i = ie(), s = wu(), u = "[object Map]", o = "[object Object]", c = "[object Promise]", f = "[object Set]", h = "[object WeakMap]", p = "[object DataView]", _ = s(e), R = s(r), y = s(t), g = s(n), E = s(a), b = i;
  return (e && b(new e(new ArrayBuffer(1))) != p || r && b(new r()) != u || t && b(t.resolve()) != c || n && b(new n()) != f || a && b(new a()) != h) && (b = function(x) {
    var C = i(x), N = C == o ? x.constructor : void 0, O = N ? s(N) : "";
    if (O)
      switch (O) {
        case _:
          return p;
        case R:
          return u;
        case y:
          return c;
        case g:
          return f;
        case E:
          return h;
      }
    return C;
  }), at = b, at;
}
var it, Gi;
function ac() {
  if (Gi) return it;
  Gi = 1;
  var e = Du(), r = Mu(), t = Vo(), n = Zo(), a = nc(), i = K(), s = Tu(), u = Ou(), o = 1, c = "[object Arguments]", f = "[object Array]", h = "[object Object]", p = Object.prototype, _ = p.hasOwnProperty;
  function R(y, g, E, b, x, C) {
    var N = i(y), O = i(g), S = N ? f : a(y), j = O ? f : a(g);
    S = S == c ? h : S, j = j == c ? h : j;
    var M = S == h, B = j == h, A = S == j;
    if (A && s(y)) {
      if (!s(g))
        return !1;
      N = !0, M = !1;
    }
    if (A && !M)
      return C || (C = new e()), N || u(y) ? r(y, g, E, b, x, C) : t(y, g, S, E, b, x, C);
    if (!(E & o)) {
      var v = M && _.call(y, "__wrapped__"), l = B && _.call(g, "__wrapped__");
      if (v || l) {
        var m = v ? y.value() : y, P = l ? g.value() : g;
        return C || (C = new e()), x(m, P, E, b, C);
      }
    }
    return A ? (C || (C = new e()), n(y, g, E, b, x, C)) : !1;
  }
  return it = R, it;
}
var st, Hi;
function ku() {
  if (Hi) return st;
  Hi = 1;
  var e = ac(), r = X();
  function t(n, a, i, s, u) {
    return n === a ? !0 : n == null || a == null || !r(n) && !r(a) ? n !== n && a !== a : e(n, a, i, s, t, u);
  }
  return st = t, st;
}
var ut, Ki;
function ic() {
  if (Ki) return ut;
  Ki = 1;
  var e = Du(), r = ku(), t = 1, n = 2;
  function a(i, s, u, o) {
    var c = u.length, f = c, h = !o;
    if (i == null)
      return !f;
    for (i = Object(i); c--; ) {
      var p = u[c];
      if (h && p[2] ? p[1] !== i[p[0]] : !(p[0] in i))
        return !1;
    }
    for (; ++c < f; ) {
      p = u[c];
      var _ = p[0], R = i[_], y = p[1];
      if (h && p[2]) {
        if (R === void 0 && !(_ in i))
          return !1;
      } else {
        var g = new e();
        if (o)
          var E = o(R, y, _, i, s, g);
        if (!(E === void 0 ? r(y, R, t | n, o, g) : E))
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
var ct, Yi;
function sc() {
  if (Yi) return ct;
  Yi = 1;
  var e = Bu(), r = le();
  function t(n) {
    for (var a = r(n), i = a.length; i--; ) {
      var s = a[i], u = n[s];
      a[i] = [s, u, e(u)];
    }
    return a;
  }
  return ct = t, ct;
}
var ft, Wi;
function Lu() {
  if (Wi) return ft;
  Wi = 1;
  function e(r, t) {
    return function(n) {
      return n == null ? !1 : n[r] === t && (t !== void 0 || r in Object(n));
    };
  }
  return ft = e, ft;
}
var lt, Vi;
function uc() {
  if (Vi) return lt;
  Vi = 1;
  var e = ic(), r = sc(), t = Lu();
  function n(a) {
    var i = r(a);
    return i.length == 1 && i[0][2] ? t(i[0][0], i[0][1]) : function(s) {
      return s === a || e(s, a, i);
    };
  }
  return lt = n, lt;
}
var ht, zi;
function se() {
  if (zi) return ht;
  zi = 1;
  var e = ie(), r = X(), t = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || r(a) && e(a) == t;
  }
  return ht = n, ht;
}
var dt, $i;
function Jn() {
  if ($i) return dt;
  $i = 1;
  var e = K(), r = se(), t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, s) {
    if (e(i))
      return !1;
    var u = typeof i;
    return u == "number" || u == "symbol" || u == "boolean" || i == null || r(i) ? !0 : n.test(i) || !t.test(i) || s != null && i in Object(s);
  }
  return dt = a, dt;
}
var vt, Ji;
function oc() {
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
function cc() {
  if (Xi) return pt;
  Xi = 1;
  var e = oc(), r = 500;
  function t(n) {
    var a = e(n, function(s) {
      return i.size === r && i.clear(), s;
    }), i = a.cache;
    return a;
  }
  return pt = t, pt;
}
var _t, Zi;
function fc() {
  if (Zi) return _t;
  Zi = 1;
  var e = cc(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, t = /\\(\\)?/g, n = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(r, function(s, u, o, c) {
      i.push(o ? c.replace(t, "$1") : u || s);
    }), i;
  });
  return _t = n, _t;
}
var gt, Qi;
function ge() {
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
function lc() {
  if (es) return mt;
  es = 1;
  var e = ae(), r = ge(), t = K(), n = se(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
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
function hc() {
  if (rs) return yt;
  rs = 1;
  var e = lc();
  function r(t) {
    return t == null ? "" : e(t);
  }
  return yt = r, yt;
}
var bt, ts;
function Gu() {
  if (ts) return bt;
  ts = 1;
  var e = K(), r = Jn(), t = fc(), n = hc();
  function a(i, s) {
    return e(i) ? i : r(i, s) ? [i] : t(n(i));
  }
  return bt = a, bt;
}
var qt, ns;
function me() {
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
  var e = Gu(), r = me();
  function t(n, a) {
    a = e(a, n);
    for (var i = 0, s = a.length; n != null && i < s; )
      n = n[r(a[i++])];
    return i && i == s ? n : void 0;
  }
  return Rt = t, Rt;
}
var Et, is;
function dc() {
  if (is) return Et;
  is = 1;
  var e = Xn();
  function r(t, n, a) {
    var i = t == null ? void 0 : e(t, n);
    return i === void 0 ? a : i;
  }
  return Et = r, Et;
}
var Ct, ss;
function vc() {
  if (ss) return Ct;
  ss = 1;
  function e(r, t) {
    return r != null && t in Object(r);
  }
  return Ct = e, Ct;
}
var At, us;
function pc() {
  if (us) return At;
  us = 1;
  var e = Gu(), r = Kn(), t = K(), n = Un(), a = Yn(), i = me();
  function s(u, o, c) {
    o = e(o, u);
    for (var f = -1, h = o.length, p = !1; ++f < h; ) {
      var _ = i(o[f]);
      if (!(p = u != null && c(u, _)))
        break;
      u = u[_];
    }
    return p || ++f != h ? p : (h = u == null ? 0 : u.length, !!h && a(h) && n(_, h) && (t(u) || r(u)));
  }
  return At = s, At;
}
var St, os;
function _c() {
  if (os) return St;
  os = 1;
  var e = vc(), r = pc();
  function t(n, a) {
    return n != null && r(n, a, e);
  }
  return St = t, St;
}
var Tt, cs;
function gc() {
  if (cs) return Tt;
  cs = 1;
  var e = ku(), r = dc(), t = _c(), n = Jn(), a = Bu(), i = Lu(), s = me(), u = 1, o = 2;
  function c(f, h) {
    return n(f) && a(h) ? i(s(f), h) : function(p) {
      var _ = r(p, f);
      return _ === void 0 && _ === h ? t(p, f) : e(h, _, u | o);
    };
  }
  return Tt = c, Tt;
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
var It, ls;
function mc() {
  if (ls) return It;
  ls = 1;
  function e(r) {
    return function(t) {
      return t?.[r];
    };
  }
  return It = e, It;
}
var xt, hs;
function yc() {
  if (hs) return xt;
  hs = 1;
  var e = Xn();
  function r(t) {
    return function(n) {
      return e(n, t);
    };
  }
  return xt = r, xt;
}
var Pt, ds;
function bc() {
  if (ds) return Pt;
  ds = 1;
  var e = mc(), r = yc(), t = Jn(), n = me();
  function a(i) {
    return t(i) ? e(n(i)) : r(i);
  }
  return Pt = a, Pt;
}
var wt, vs;
function oe() {
  if (vs) return wt;
  vs = 1;
  var e = uc(), r = gc(), t = ue(), n = K(), a = bc();
  function i(s) {
    return typeof s == "function" ? s : s == null ? t : typeof s == "object" ? n(s) ? r(s[0], s[1]) : e(s) : a(s);
  }
  return wt = i, wt;
}
var Dt, ps;
function qc() {
  if (ps) return Dt;
  ps = 1;
  var e = Au(), r = vo(), t = oe(), n = K();
  function a(i, s) {
    var u = n(i) ? e : r;
    return u(i, t(s, 3));
  }
  return Dt = a, Dt;
}
var Rc = qc();
const Ec = /* @__PURE__ */ Y(Rc);
var Nt, _s;
function Hu() {
  if (_s) return Nt;
  _s = 1;
  var e = Vn(), r = z();
  function t(n, a) {
    var i = -1, s = r(n) ? Array(n.length) : [];
    return e(n, function(u, o, c) {
      s[++i] = a(u, o, c);
    }), s;
  }
  return Nt = t, Nt;
}
var jt, gs;
function Cc() {
  if (gs) return jt;
  gs = 1;
  var e = ge(), r = oe(), t = Hu(), n = K();
  function a(i, s) {
    var u = n(i) ? e : t;
    return u(i, r(s, 3));
  }
  return jt = a, jt;
}
var Ac = Cc();
const Sc = /* @__PURE__ */ Y(Ac);
var Mt, ms;
function Tc() {
  if (ms) return Mt;
  ms = 1;
  var e = oe(), r = z(), t = le();
  function n(a) {
    return function(i, s, u) {
      var o = Object(i);
      if (!r(i)) {
        var c = e(s, 3);
        i = t(i), s = function(h) {
          return c(o[h], h, o);
        };
      }
      var f = a(i, s, u);
      return f > -1 ? o[c ? i[f] : f] : void 0;
    };
  }
  return Mt = n, Mt;
}
var Ft, ys;
function Ku() {
  if (ys) return Ft;
  ys = 1;
  function e(r, t, n, a) {
    for (var i = r.length, s = n + (a ? 1 : -1); a ? s-- : ++s < i; )
      if (t(r[s], s, r))
        return s;
    return -1;
  }
  return Ft = e, Ft;
}
var kt, bs;
function Oc() {
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
function Ic() {
  if (qs) return Bt;
  qs = 1;
  var e = Oc(), r = /^\s+/;
  function t(n) {
    return n && n.slice(0, e(n) + 1).replace(r, "");
  }
  return Bt = t, Bt;
}
var Lt, Rs;
function xc() {
  if (Rs) return Lt;
  Rs = 1;
  var e = Ic(), r = Z(), t = se(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, s = /^0o[0-7]+$/i, u = parseInt;
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
    var h = i.test(c);
    return h || s.test(c) ? u(c.slice(2), h ? 2 : 8) : a.test(c) ? n : +c;
  }
  return Lt = o, Lt;
}
var Gt, Es;
function Uu() {
  if (Es) return Gt;
  Es = 1;
  var e = xc(), r = 1 / 0, t = 17976931348623157e292;
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
var Ht, Cs;
function Pc() {
  if (Cs) return Ht;
  Cs = 1;
  var e = Uu();
  function r(t) {
    var n = e(t), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return Ht = r, Ht;
}
var Kt, As;
function wc() {
  if (As) return Kt;
  As = 1;
  var e = Ku(), r = oe(), t = Pc(), n = Math.max;
  function a(i, s, u) {
    var o = i == null ? 0 : i.length;
    if (!o)
      return -1;
    var c = u == null ? 0 : t(u);
    return c < 0 && (c = n(o + c, 0)), e(i, r(s, 3), c);
  }
  return Kt = a, Kt;
}
var Ut, Ss;
function Yu() {
  if (Ss) return Ut;
  Ss = 1;
  var e = Tc(), r = wc(), t = e(r);
  return Ut = t, Ut;
}
var Dc = Yu();
const Nc = /* @__PURE__ */ Y(Dc);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Yt, Ts;
function jc() {
  if (Ts) return Yt;
  Ts = 1;
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
  return Yt = a() ? Object.assign : function(i, s) {
    for (var u, o = n(i), c, f = 1; f < arguments.length; f++) {
      u = Object(arguments[f]);
      for (var h in u)
        r.call(u, h) && (o[h] = u[h]);
      if (e) {
        c = e(u);
        for (var p = 0; p < c.length; p++)
          t.call(u, c[p]) && (o[c[p]] = u[c[p]]);
      }
    }
    return o;
  }, Yt;
}
var Wt, Os;
function Mc() {
  if (Os) return Wt;
  Os = 1;
  var e = {};
  return process.env.NODE_ENV !== "production" && Object.freeze(e), Wt = e, Wt;
}
var Vt, Is;
function Fc() {
  if (Is) return Vt;
  Is = 1;
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
        var h = [a, i, s, u, o, c], p = 0;
        f = new Error(n.replace(/%s/g, function() {
          return h[p++];
        })), f.name = "Invariant Violation";
      }
      throw f.framesToPop = 1, f;
    }
  }
  return Vt = r, Vt;
}
var zt, xs;
function kc() {
  if (xs) return zt;
  xs = 1;
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
var $t, Ps;
function Bc() {
  if (Ps) return $t;
  Ps = 1;
  var e = kc(), r = e;
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
var Jt, ws;
function Lc() {
  if (ws) return Jt;
  ws = 1;
  var e = jc(), r = Mc(), t = Fc();
  if (process.env.NODE_ENV !== "production")
    var n = Bc();
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
    var h = [], p = {
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
        process.env.NODE_ENV !== "production" && R(v, l, "childContext"), v.childContextTypes = e(
          {},
          v.childContextTypes,
          l
        );
      },
      contextTypes: function(v, l) {
        process.env.NODE_ENV !== "production" && R(v, l, "context"), v.contextTypes = e(
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
        v.getDefaultProps ? v.getDefaultProps = x(
          v.getDefaultProps,
          l
        ) : v.getDefaultProps = l;
      },
      propTypes: function(v, l) {
        process.env.NODE_ENV !== "production" && R(v, l, "prop"), v.propTypes = e({}, v.propTypes, l);
      },
      statics: function(v, l) {
        E(v, l);
      },
      autobind: function() {
      }
    };
    function R(v, l, m) {
      for (var P in l)
        l.hasOwnProperty(P) && process.env.NODE_ENV !== "production" && n(
          typeof l[P] == "function",
          "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",
          v.displayName || "ReactClass",
          s[m],
          P
        );
    }
    function y(v, l) {
      var m = p.hasOwnProperty(l) ? p[l] : null;
      M.hasOwnProperty(l) && t(
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
          var m = typeof l, P = m === "object" && l !== null;
          process.env.NODE_ENV !== "production" && n(
            P,
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
      var w = v.prototype, L = w.__reactAutoBindPairs;
      l.hasOwnProperty(a) && _.mixins(v, l.mixins);
      for (var I in l)
        if (l.hasOwnProperty(I) && I !== a) {
          var G = l[I], d = w.hasOwnProperty(I);
          if (y(d, I), _.hasOwnProperty(I))
            _[I](v, G);
          else {
            var q = p.hasOwnProperty(I), D = typeof G == "function", F = D && !q && !d && l.autobind !== !1;
            if (F)
              L.push(I, G), w[I] = G;
            else if (d) {
              var H = p[I];
              t(
                q && (H === "DEFINE_MANY_MERGED" || H === "DEFINE_MANY"),
                "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",
                H,
                I
              ), H === "DEFINE_MANY_MERGED" ? w[I] = x(w[I], G) : H === "DEFINE_MANY" && (w[I] = C(w[I], G));
            } else
              w[I] = G, process.env.NODE_ENV !== "production" && typeof G == "function" && l.displayName && (w[I].displayName = l.displayName + "_" + I);
          }
        }
    }
    function E(v, l) {
      if (l)
        for (var m in l) {
          var P = l[m];
          if (l.hasOwnProperty(m)) {
            var w = m in _;
            t(
              !w,
              'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
              m
            );
            var L = m in v;
            t(
              !L,
              "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
              m
            ), v[m] = P;
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
    function x(v, l) {
      return function() {
        var P = v.apply(this, arguments), w = l.apply(this, arguments);
        if (P == null)
          return w;
        if (w == null)
          return P;
        var L = {};
        return b(L, P), b(L, w), L;
      };
    }
    function C(v, l) {
      return function() {
        v.apply(this, arguments), l.apply(this, arguments);
      };
    }
    function N(v, l) {
      var m = l.bind(v);
      if (process.env.NODE_ENV !== "production") {
        m.__reactBoundContext = v, m.__reactBoundMethod = l, m.__reactBoundArguments = null;
        var P = v.constructor.displayName, w = m.bind;
        m.bind = function(L) {
          for (var I = arguments.length, G = Array(I > 1 ? I - 1 : 0), d = 1; d < I; d++)
            G[d - 1] = arguments[d];
          if (L !== v && L !== null)
            process.env.NODE_ENV !== "production" && n(
              !1,
              "bind(): React component methods may only be bound to the component instance. See %s",
              P
            );
          else if (!G.length)
            return process.env.NODE_ENV !== "production" && n(
              !1,
              "bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",
              P
            ), m;
          var q = w.apply(m, arguments);
          return q.__reactBoundContext = v, q.__reactBoundMethod = l, q.__reactBoundArguments = G, q;
        };
      }
      return m;
    }
    function O(v) {
      for (var l = v.__reactAutoBindPairs, m = 0; m < l.length; m += 2) {
        var P = l[m], w = l[m + 1];
        v[P] = N(v, w);
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
    }, M = {
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
      M
    );
    function A(v) {
      var l = function(P, w, L) {
        process.env.NODE_ENV !== "production" && n(
          this instanceof l,
          "Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"
        ), this.__reactAutoBindPairs.length && O(this), this.props = P, this.context = w, this.refs = r, this.updater = L || f, this.state = null;
        var I = this.getInitialState ? this.getInitialState() : null;
        process.env.NODE_ENV !== "production" && I === void 0 && this.getInitialState._isMockFunction && (I = null), t(
          typeof I == "object" && !Array.isArray(I),
          "%s.getInitialState(): must return an object or null",
          l.displayName || "ReactCompositeComponent"
        ), this.state = I;
      };
      l.prototype = new B(), l.prototype.constructor = l, l.prototype.__reactAutoBindPairs = [], h.forEach(g.bind(null, l)), g(l, S), g(l, v), g(l, j), l.getDefaultProps && (l.defaultProps = l.getDefaultProps()), process.env.NODE_ENV !== "production" && (l.getDefaultProps && (l.getDefaultProps.isReactClassApproved = {}), l.prototype.getInitialState && (l.prototype.getInitialState.isReactClassApproved = {})), t(
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
    return A;
  }
  return Jt = u, Jt;
}
var Xt, Ds;
function Gc() {
  if (Ds) return Xt;
  Ds = 1;
  var e = Hn, r = Lc();
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
var Hc = Gc();
const ye = /* @__PURE__ */ Y(Hc);
var Zt, Ns;
function Wu() {
  if (Ns) return Zt;
  Ns = 1;
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
function Vu() {
  if (js) return Qt;
  js = 1;
  var e = Wu();
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
var en, Ms;
function Kc() {
  if (Ms) return en;
  Ms = 1;
  var e = Vu(), r = he(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i, s, u) {
    var o = i[s];
    (!(n.call(i, s) && r(o, u)) || u === void 0 && !(s in i)) && e(i, s, u);
  }
  return en = a, en;
}
var rn, Fs;
function Uc() {
  if (Fs) return rn;
  Fs = 1;
  var e = Kc(), r = Vu();
  function t(n, a, i, s) {
    var u = !i;
    i || (i = {});
    for (var o = -1, c = a.length; ++o < c; ) {
      var f = a[o], h = s ? s(i[f], n[f], f, i, n) : void 0;
      h === void 0 && (h = n[f]), u ? r(i, f, h) : e(i, f, h);
    }
    return i;
  }
  return rn = t, rn;
}
var tn, ks;
function Yc() {
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
function Wc() {
  if (Bs) return nn;
  Bs = 1;
  var e = Yc(), r = Math.max;
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
function Vc() {
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
function zc() {
  if (Gs) return sn;
  Gs = 1;
  var e = Vc(), r = Wu(), t = ue(), n = r ? function(a, i) {
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
function $c() {
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
function Jc() {
  if (Ks) return on;
  Ks = 1;
  var e = zc(), r = $c(), t = r(e);
  return on = t, on;
}
var cn, Us;
function Zn() {
  if (Us) return cn;
  Us = 1;
  var e = ue(), r = Wc(), t = Jc();
  function n(a, i) {
    return t(r(a, i, e), a + "");
  }
  return cn = n, cn;
}
var fn, Ys;
function Qn() {
  if (Ys) return fn;
  Ys = 1;
  var e = he(), r = z(), t = Un(), n = Z();
  function a(i, s, u) {
    if (!n(u))
      return !1;
    var o = typeof s;
    return (o == "number" ? r(u) && t(s, u.length) : o == "string" && s in u) ? e(u[s], i) : !1;
  }
  return fn = a, fn;
}
var ln, Ws;
function Xc() {
  if (Ws) return ln;
  Ws = 1;
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
var hn, Vs;
function Zc() {
  if (Vs) return hn;
  Vs = 1;
  function e(r) {
    var t = [];
    if (r != null)
      for (var n in Object(r))
        t.push(n);
    return t;
  }
  return hn = e, hn;
}
var dn, zs;
function Qc() {
  if (zs) return dn;
  zs = 1;
  var e = Z(), r = xu(), t = Zc(), n = Object.prototype, a = n.hasOwnProperty;
  function i(s) {
    if (!e(s))
      return t(s);
    var u = r(s), o = [];
    for (var c in s)
      c == "constructor" && (u || !a.call(s, c)) || o.push(c);
    return o;
  }
  return dn = i, dn;
}
var vn, $s;
function ef() {
  if ($s) return vn;
  $s = 1;
  var e = Iu(), r = Qc(), t = z();
  function n(a) {
    return t(a) ? e(a, !0) : r(a);
  }
  return vn = n, vn;
}
var pn, Js;
function rf() {
  if (Js) return pn;
  Js = 1;
  var e = Uc(), r = Xc(), t = ef(), n = r(function(a, i) {
    e(i, t(i), a);
  });
  return pn = n, pn;
}
var _n, Xs;
function tf() {
  return Xs || (Xs = 1, _n = rf()), _n;
}
var gn, Zs;
function nf() {
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
function af() {
  if (Qs) return mn;
  Qs = 1;
  var e = ue();
  function r(t) {
    return typeof t == "function" ? t : e;
  }
  return mn = r, mn;
}
var yn, eu;
function sf() {
  if (eu) return yn;
  eu = 1;
  var e = nf(), r = Vn(), t = af(), n = K();
  function a(i, s) {
    var u = n(i) ? e : r;
    return u(i, t(s));
  }
  return yn = a, yn;
}
var bn, ru;
function uf() {
  return ru || (ru = 1, bn = sf()), bn;
}
var qn, tu;
function of() {
  if (tu) return qn;
  tu = 1;
  var e = ae(), r = Kn(), t = K(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return t(i) || r(i) || !!(n && i && i[n]);
  }
  return qn = a, qn;
}
var Rn, nu;
function cf() {
  if (nu) return Rn;
  nu = 1;
  var e = Fu(), r = of();
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
function ff() {
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
var Cn, iu;
function lf() {
  if (iu) return Cn;
  iu = 1;
  var e = se();
  function r(t, n) {
    if (t !== n) {
      var a = t !== void 0, i = t === null, s = t === t, u = e(t), o = n !== void 0, c = n === null, f = n === n, h = e(n);
      if (!c && !h && !u && t > n || u && o && f && !c && !h || i && o && f || !a && f || !s)
        return 1;
      if (!i && !u && !h && t < n || h && a && s && !i && !u || c && a && s || !o && s || !f)
        return -1;
    }
    return 0;
  }
  return Cn = r, Cn;
}
var An, su;
function hf() {
  if (su) return An;
  su = 1;
  var e = lf();
  function r(t, n, a) {
    for (var i = -1, s = t.criteria, u = n.criteria, o = s.length, c = a.length; ++i < o; ) {
      var f = e(s[i], u[i]);
      if (f) {
        if (i >= c)
          return f;
        var h = a[i];
        return f * (h == "desc" ? -1 : 1);
      }
    }
    return t.index - n.index;
  }
  return An = r, An;
}
var Sn, uu;
function df() {
  if (uu) return Sn;
  uu = 1;
  var e = ge(), r = Xn(), t = oe(), n = Hu(), a = ff(), i = Wn(), s = hf(), u = ue(), o = K();
  function c(f, h, p) {
    h.length ? h = e(h, function(y) {
      return o(y) ? function(g) {
        return r(g, y.length === 1 ? y[0] : y);
      } : y;
    }) : h = [u];
    var _ = -1;
    h = e(h, i(t));
    var R = n(f, function(y, g, E) {
      var b = e(h, function(x) {
        return x(y);
      });
      return { criteria: b, index: ++_, value: y };
    });
    return a(R, function(y, g) {
      return s(y, g, p);
    });
  }
  return Sn = c, Sn;
}
var Tn, ou;
function vf() {
  if (ou) return Tn;
  ou = 1;
  var e = cf(), r = df(), t = Zn(), n = Qn(), a = t(function(i, s) {
    if (i == null)
      return [];
    var u = s.length;
    return u > 1 && n(i, s[0], s[1]) ? s = [] : u > 2 && n(s[0], s[1], s[2]) && (s = [s[0]]), r(i, e(s, 1), []);
  });
  return Tn = a, Tn;
}
var On, cu;
function pf() {
  if (cu) return On;
  cu = 1;
  var e = {
    extend: tf(),
    each: uf(),
    sortBy: vf(),
    find: Yu()
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
      var h = a.createSetKeys(i, f), p = t(h[h.length - 1]);
      if (!(s && !s(p))) {
        var _ = o;
        h.forEach(function(R, y) {
          _[R] || (_[R] = { value: {}, subDimensions: {}, key: R });
          var g = _[R].value;
          if (s || !a.cache[R]) {
            s || (c[R] = g), e.extend(g, u(f, g));
            var E = t(R);
            e.extend(g, E);
          } else
            _[R].value = a.cache[R];
          _ = _[R].subDimensions;
        });
      }
    }), e.each(c, function(f, h) {
      a.cache[h] = f;
    }), o;
  }, r.prototype.parseResults = function(a, u) {
    var s = this, u = u || 0, o = [], c = e.sortBy(a, this.getSortValue.bind(this));
    return this.sortDir === "desc" && c.reverse(), e.each(c, function(f) {
      var h = f.value;
      h._level = u, h._key = f.key;
      var p = Object.keys(f.subDimensions).length;
      if (s.compact && p == 1 || o.push(h), p) {
        var _ = s.compact && p == 1 ? u : u + 1, R = s.parseResults(f.subDimensions, _);
        R.forEach(function(y) {
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
var _f = pf();
const fu = /* @__PURE__ */ Y(_f);
var In, lu;
function gf() {
  if (lu) return In;
  lu = 1, In = e;
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
  }, e.mixin(e), In;
}
var mf = gf();
const yf = /* @__PURE__ */ Y(mf), hu = Array.prototype.slice;
function V(e) {
  const r = hu.call(arguments, 1);
  return function() {
    return e.apply(this, r.concat(hu.call(arguments)));
  };
}
function bf(e, r, t) {
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
var xn, du;
function qf() {
  if (du) return xn;
  du = 1;
  var e = Math.ceil, r = Math.max;
  function t(n, a, i, s) {
    for (var u = -1, o = r(e((a - n) / (i || 1)), 0), c = Array(o); o--; )
      c[s ? o : ++u] = n, n += i;
    return c;
  }
  return xn = t, xn;
}
var Pn, vu;
function Rf() {
  if (vu) return Pn;
  vu = 1;
  var e = qf(), r = Qn(), t = Uu();
  function n(a) {
    return function(i, s, u) {
      return u && typeof u != "number" && r(i, s, u) && (s = u = void 0), i = t(i), s === void 0 ? (s = i, i = 0) : s = t(s), u = u === void 0 ? i < s ? 1 : -1 : t(u), e(i, s, u, a);
    };
  }
  return Pn = n, Pn;
}
var wn, pu;
function Ef() {
  if (pu) return wn;
  pu = 1;
  var e = Rf(), r = e();
  return wn = r, wn;
}
var Cf = Ef();
const Af = /* @__PURE__ */ Y(Cf), Sf = { range: Af }, Tf = ye({
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
    return /* @__PURE__ */ T.jsxs("div", { className: "reactPivot-results", children: [
      /* @__PURE__ */ T.jsxs("table", { className: this.props.tableClassName, children: [
        n,
        t
      ] }),
      this.renderPagination(r)
    ] });
  },
  renderTableHead: function(e) {
    var r = this, t = this.props.sortBy, n = this.props.sortDir;
    return /* @__PURE__ */ T.jsx("thead", { children: /* @__PURE__ */ T.jsx("tr", { children: e.map(function(a) {
      var i = a.className;
      a.title === t && (i += " " + n);
      var s = "";
      return a.type !== "dimension" && (s = /* @__PURE__ */ T.jsx(
        "span",
        {
          className: "reactPivot-hideColumn",
          onClick: V(r.props.onColumnHide, a.title),
          children: "×"
        }
      )), /* @__PURE__ */ T.jsxs(
        "th",
        {
          className: i,
          onClick: V(r.props.onSort, a.title),
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
    return /* @__PURE__ */ T.jsx("tbody", { children: r.map(function(n) {
      return /* @__PURE__ */ T.jsx("tr", { className: "reactPivot-level-" + n._level, children: e.map(function(a, i) {
        return i < n._level ? /* @__PURE__ */ T.jsx("td", { className: "reactPivot-indent" }, i) : t.renderCell(a, n);
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
      var i = /* @__PURE__ */ T.jsx("span", { className: "reactPivot-solo", children: /* @__PURE__ */ T.jsx(
        "a",
        {
          style: { cursor: "pointer" },
          onClick: V(this.props.onSolo, {
            title: e.title,
            value: t
          }),
          children: this.props.soloText
        }
      ) });
    var s = Hn.isValidElement(n) ? /* @__PURE__ */ T.jsx("span", { children: n }) : /* @__PURE__ */ T.jsx(
      "span",
      {
        dangerouslySetInnerHTML: { __html: n || n === 0 && "0" || "" }
      }
    );
    return /* @__PURE__ */ T.jsxs(
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
    return t === 1 ? "" : /* @__PURE__ */ T.jsx("div", { className: "reactPivot-paginate", children: Sf.range(0, t).map(function(a) {
      var i = "reactPivot-pageNumber";
      return a === n && (i += " is-selected"), /* @__PURE__ */ T.jsx("span", { className: i, children: /* @__PURE__ */ T.jsx("a", { onClick: V(r.setPaginatePage, a), children: a + 1 }) }, a);
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
var Dn, _u;
function Of() {
  if (_u) return Dn;
  _u = 1;
  function e(r) {
    for (var t = -1, n = r == null ? 0 : r.length, a = 0, i = []; ++t < n; ) {
      var s = r[t];
      s && (i[a++] = s);
    }
    return i;
  }
  return Dn = e, Dn;
}
var If = Of();
const xf = /* @__PURE__ */ Y(If), Pf = { compact: xf }, wf = ye({
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
    return /* @__PURE__ */ T.jsxs("div", { className: "reactPivot-dimensions", children: [
      t.map(this.renderDimension),
      /* @__PURE__ */ T.jsxs("select", { value: "", onChange: V(e.toggleDimension, n), children: [
        /* @__PURE__ */ T.jsx("option", { value: "", children: r }),
        e.props.dimensions.map(function(a) {
          return /* @__PURE__ */ T.jsx("option", { children: a.title }, a.title);
        })
      ] })
    ] });
  },
  renderDimension: function(e, r) {
    return /* @__PURE__ */ T.jsxs(
      "select",
      {
        value: e,
        onChange: V(this.toggleDimension, r),
        children: [
          /* @__PURE__ */ T.jsx("option", {}),
          this.props.dimensions.map(function(t) {
            return /* @__PURE__ */ T.jsx(
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
    var i = Pf.compact(n);
    this.props.onChange(i);
  }
});
var Nn, gu;
function Df() {
  if (gu) return Nn;
  gu = 1;
  function e(r) {
    return r !== r;
  }
  return Nn = e, Nn;
}
var jn, mu;
function Nf() {
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
var Mn, yu;
function jf() {
  if (yu) return Mn;
  yu = 1;
  var e = Ku(), r = Df(), t = Nf();
  function n(a, i, s) {
    return i === i ? t(a, i, s) : e(a, r, s);
  }
  return Mn = n, Mn;
}
var Fn, bu;
function Mf() {
  if (bu) return Fn;
  bu = 1;
  var e = jf();
  function r(t, n) {
    var a = t == null ? 0 : t.length;
    return !!a && e(t, n, 0) > -1;
  }
  return Fn = r, Fn;
}
var kn, qu;
function Ff() {
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
function kf() {
  if (Ru) return Bn;
  Ru = 1;
  var e = Nu(), r = Mf(), t = Ff(), n = ge(), a = Wn(), i = ju(), s = 200;
  function u(o, c, f, h) {
    var p = -1, _ = r, R = !0, y = o.length, g = [], E = c.length;
    if (!y)
      return g;
    f && (c = n(c, a(f))), h ? (_ = t, R = !1) : c.length >= s && (_ = i, R = !1, c = new e(c));
    e:
      for (; ++p < y; ) {
        var b = o[p], x = f == null ? b : f(b);
        if (b = h || b !== 0 ? b : 0, R && x === x) {
          for (var C = E; C--; )
            if (c[C] === x)
              continue e;
          g.push(b);
        } else _(c, x, h) || g.push(b);
      }
    return g;
  }
  return Bn = u, Bn;
}
var Ln, Eu;
function Bf() {
  if (Eu) return Ln;
  Eu = 1;
  var e = z(), r = X();
  function t(n) {
    return r(n) && e(n);
  }
  return Ln = t, Ln;
}
var Gn, Cu;
function Lf() {
  if (Cu) return Gn;
  Cu = 1;
  var e = kf(), r = Zn(), t = Bf(), n = r(function(a, i) {
    return t(a) ? e(a, i) : [];
  });
  return Gn = n, Gn;
}
var Gf = Lf();
const Hf = /* @__PURE__ */ Y(Gf), Kf = { without: Hf }, Uf = ye({
  getDefaultProps: function() {
    return {
      hiddenColumns: [],
      onChange: function() {
      }
    };
  },
  render: function() {
    return /* @__PURE__ */ T.jsx("div", { className: "reactPivot-columnControl", children: this.props.hiddenColumns.length ? /* @__PURE__ */ T.jsxs("select", { value: "", onChange: this.showColumn, children: [
      /* @__PURE__ */ T.jsx("option", { value: "", children: "Hidden Columns" }),
      this.props.hiddenColumns.map(function(e) {
        return /* @__PURE__ */ T.jsx("option", { children: e }, e);
      })
    ] }) : "" });
  },
  showColumn: function(e) {
    var r = e.target.value, t = Kf.without(this.props.hiddenColumns, r);
    this.props.onChange(t);
  }
}), re = { filter: Ec, map: Sc, find: Nc }, Vf = ye({
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
      eventBus: new yf(),
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
      hideRows: this.props.hideRows,
      rows: []
    };
  },
  componentDidMount: function() {
    this.props.defaultStyles && Yf(), this.dataFrame = fu({
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
    }), this.updateRows());
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
  render: function() {
    var e = this, r = /* @__PURE__ */ T.jsxs("div", { className: "reactPivot", children: [
      this.props.hideDimensionFilter ? "" : /* @__PURE__ */ T.jsx(
        wf,
        {
          dimensions: this.props.dimensions,
          subDimensionText: this.props.subDimensionText,
          selectedDimensions: this.state.dimensions,
          onChange: this.setDimensions
        }
      ),
      /* @__PURE__ */ T.jsx(
        Uf,
        {
          hiddenColumns: this.state.hiddenColumns,
          onChange: this.setHiddenColumns
        }
      ),
      /* @__PURE__ */ T.jsx("div", { className: "reactPivot-csvExport", children: /* @__PURE__ */ T.jsx("button", { onClick: V(this.downloadCSV, this.state.rows), children: "Export CSV" }) }),
      Object.keys(this.state.solo).map(function(t) {
        var n = e.state.solo[t];
        return /* @__PURE__ */ T.jsxs(
          "div",
          {
            style: { clear: "both" },
            className: "reactPivot-soloDisplay",
            children: [
              /* @__PURE__ */ T.jsx(
                "span",
                {
                  className: "reactPivot-clearSolo",
                  onClick: V(e.clearSolo, t),
                  children: "×"
                }
              ),
              t,
              ": ",
              n
            ]
          },
          "solo-" + t
        );
      }),
      /* @__PURE__ */ T.jsx(
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
    return r;
  },
  updateRows: function() {
    var e = this.getColumns(), r = this.state.sortBy, t = re.find(e, function(c) {
      return c.title === r;
    }) || {}, n = t.sortBy || (t.type === "dimension" ? t.title : t.value), a = this.state.sortDir, i = this.state.hideRows, s = {
      dimensions: this.state.dimensions,
      sortBy: n,
      sortDir: a,
      compact: this.props.compact
    }, u = this.state.solo;
    u && (s.filter = function(c) {
      var f = !0;
      return Object.keys(u).forEach(function(h) {
        c[h] !== u[h] && (f = !1);
      }), f;
    });
    var o = this.dataFrame.calculate(s).filter(function(c) {
      return i ? !i(c) : !0;
    });
    this.setState({ rows: o }), this.props.onData(o);
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
    var r = this.state.solo;
    r[e.title] = e.value, this.props.eventBus.emit("solo", r), this.setState({ solo: r }), setTimeout(this.updateRows, 0);
  },
  clearSolo: function(e) {
    var r = this.state.solo, t = {};
    Object.keys(r).forEach(function(n) {
      n !== e && (t[n] = r[n]);
    }), this.props.eventBus.emit("solo", t), this.setState({ solo: t }), setTimeout(this.updateRows, 0);
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
    }), bf(n, this.props.csvDownloadFileName, "text/csv");
  }
});
function Yf() {
  Promise.resolve({          });
}
export {
  Vf as default
};
