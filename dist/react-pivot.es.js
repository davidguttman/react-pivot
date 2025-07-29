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
    function e(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === B ? null : h.displayName || h.name || null;
      if (typeof h == "string") return h;
      switch (h) {
        case y:
          return "Fragment";
        case E:
          return "Profiler";
        case g:
          return "StrictMode";
        case D:
          return "Suspense";
        case P:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case R:
            return "Portal";
          case O:
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
        var N = q.error, F = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return N.call(
          q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
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
      var h = x.A;
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
        I || (I = !0, console.error(
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
      return w[h] || (w[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function c(h, q, N, F, H, U, be, qe) {
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
    function f(h, q, N, F, H, U, be, qe) {
      var k = q.children;
      if (k !== void 0)
        if (F)
          if (l(k)) {
            for (F = 0; F < k.length; F++)
              d(k[F]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(k);
      if (v.call(q, "key")) {
        k = e(h);
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
    var p = Hn, _ = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), O = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), x = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, v = Object.prototype.hasOwnProperty, l = Array.isArray, m = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(h) {
        return h();
      }
    };
    var I, w = {}, L = p["react-stack-bottom-frame"].bind(
      p,
      i
    )(), T = m(n(i)), G = {};
    ee.Fragment = y, ee.jsx = function(h, q, N, F, H) {
      var U = 1e4 > x.recentlyCreatedOwnerStacks++;
      return f(
        h,
        q,
        N,
        !1,
        F,
        H,
        U ? Error("react-stack-top-frame") : L,
        U ? m(n(h)) : T
      );
    }, ee.jsxs = function(h, q, N, F, H) {
      var U = 1e4 > x.recentlyCreatedOwnerStacks++;
      return f(
        h,
        q,
        N,
        !0,
        F,
        H,
        U ? Error("react-stack-top-frame") : L,
        U ? m(n(h)) : T
      );
    };
  }()), ee;
}
var ta;
function Zu() {
  return ta || (ta = 1, process.env.NODE_ENV === "production" ? fe.exports = Ju() : fe.exports = Xu()), fe.exports;
}
var A = Zu(), Ee, na;
function xu() {
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
var xe, ia;
function eo() {
  if (ia) return xe;
  ia = 1;
  var e = Qu(), r = e();
  return xe = r, xe;
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
var Ae, ua;
function Su() {
  if (ua) return Ae;
  ua = 1;
  var e = typeof ce == "object" && ce && ce.Object === Object && ce;
  return Ae = e, Ae;
}
var Pe, oa;
function W() {
  if (oa) return Pe;
  oa = 1;
  var e = Su(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return Pe = t, Pe;
}
var Te, ca;
function ae() {
  if (ca) return Te;
  ca = 1;
  var e = W(), r = e.Symbol;
  return Te = r, Te;
}
var Oe, fa;
function to() {
  if (fa) return Oe;
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
  return Oe = i, Oe;
}
var Ie, la;
function no() {
  if (la) return Ie;
  la = 1;
  var e = Object.prototype, r = e.toString;
  function t(n) {
    return r.call(n);
  }
  return Ie = t, Ie;
}
var we, da;
function ie() {
  if (da) return we;
  da = 1;
  var e = ae(), r = to(), t = no(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function s(u) {
    return u == null ? u === void 0 ? a : n : i && i in Object(u) ? r(u) : t(u);
  }
  return we = s, we;
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
function ao() {
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
function Au() {
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
  var e = ie(), r = Yn(), t = X(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", s = "[object Date]", u = "[object Error]", o = "[object Function]", c = "[object Map]", f = "[object Number]", d = "[object Object]", p = "[object RegExp]", _ = "[object Set]", R = "[object String]", y = "[object WeakMap]", g = "[object ArrayBuffer]", E = "[object DataView]", b = "[object Float32Array]", O = "[object Float64Array]", C = "[object Int8Array]", D = "[object Int16Array]", P = "[object Int32Array]", S = "[object Uint8Array]", j = "[object Uint8ClampedArray]", M = "[object Uint16Array]", B = "[object Uint32Array]", x = {};
  x[b] = x[O] = x[C] = x[D] = x[P] = x[S] = x[j] = x[M] = x[B] = !0, x[n] = x[a] = x[g] = x[i] = x[E] = x[s] = x[u] = x[o] = x[c] = x[f] = x[d] = x[p] = x[_] = x[R] = x[y] = !1;
  function v(l) {
    return t(l) && r(l.length) && !!x[e(l)];
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
function Pu() {
  if (Ca) return He;
  Ca = 1;
  var e = so(), r = Wn(), t = uo(), n = t && t.isTypedArray, a = n ? r(n) : e;
  return He = a, He;
}
var Ke, xa;
function Tu() {
  if (xa) return Ke;
  xa = 1;
  var e = ro(), r = Kn(), t = K(), n = Au(), a = Un(), i = Pu(), s = Object.prototype, u = s.hasOwnProperty;
  function o(c, f) {
    var d = t(c), p = !d && r(c), _ = !d && !p && n(c), R = !d && !p && !_ && i(c), y = d || p || _ || R, g = y ? e(c.length, String) : [], E = g.length;
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
function Ou() {
  if (Sa) return Ue;
  Sa = 1;
  var e = Object.prototype;
  function r(t) {
    var n = t && t.constructor, a = typeof n == "function" && n.prototype || e;
    return t === a;
  }
  return Ue = r, Ue;
}
var Ye, Aa;
function oo() {
  if (Aa) return Ye;
  Aa = 1;
  function e(r, t) {
    return function(n) {
      return r(t(n));
    };
  }
  return Ye = e, Ye;
}
var We, Pa;
function co() {
  if (Pa) return We;
  Pa = 1;
  var e = oo(), r = e(Object.keys, Object);
  return We = r, We;
}
var Ve, Ta;
function fo() {
  if (Ta) return Ve;
  Ta = 1;
  var e = Ou(), r = co(), t = Object.prototype, n = t.hasOwnProperty;
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
var ze, Oa;
function Z() {
  if (Oa) return ze;
  Oa = 1;
  function e(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return ze = e, ze;
}
var $e, Ia;
function Iu() {
  if (Ia) return $e;
  Ia = 1;
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
  var e = Iu(), r = Yn();
  function t(n) {
    return n != null && r(n.length) && !e(n);
  }
  return Je = t, Je;
}
var Xe, Na;
function le() {
  if (Na) return Xe;
  Na = 1;
  var e = Tu(), r = fo(), t = z();
  function n(a) {
    return t(a) ? e(a) : r(a);
  }
  return Xe = n, Xe;
}
var Ze, Da;
function lo() {
  if (Da) return Ze;
  Da = 1;
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
function de() {
  if (Ba) return nr;
  Ba = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return nr = e, nr;
}
var ar, La;
function he() {
  if (La) return ar;
  La = 1;
  var e = de();
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
  var e = he(), r = Array.prototype, t = r.splice;
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
  var e = he();
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
  var e = he();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return ur = r, ur;
}
var or, Ua;
function yo() {
  if (Ua) return or;
  Ua = 1;
  var e = he();
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
var dr, za;
function Ro() {
  if (za) return dr;
  za = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return dr = e, dr;
}
var hr, $a;
function Eo() {
  if ($a) return hr;
  $a = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return hr = e, hr;
}
var vr, Ja;
function Co() {
  if (Ja) return vr;
  Ja = 1;
  var e = W(), r = e["__core-js_shared__"];
  return vr = r, vr;
}
var pr, Xa;
function xo() {
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
  var e = Iu(), r = xo(), t = Z(), n = wu(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, u = Object.prototype, o = s.toString, c = u.hasOwnProperty, f = RegExp(
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
function Ao() {
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
  var e = So(), r = Ao();
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
function Po() {
  if (ai) return Rr;
  ai = 1;
  var e = pe();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Rr = r, Rr;
}
var Er, ii;
function To() {
  if (ii) return Er;
  ii = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return Er = e, Er;
}
var Cr, si;
function Oo() {
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
var xr, ui;
function Io() {
  if (ui) return xr;
  ui = 1;
  var e = pe(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : t.call(i, a);
  }
  return xr = n, xr;
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
var Ar, ci;
function No() {
  if (ci) return Ar;
  ci = 1;
  var e = Po(), r = To(), t = Oo(), n = Io(), a = wo();
  function i(s) {
    var u = -1, o = s == null ? 0 : s.length;
    for (this.clear(); ++u < o; ) {
      var c = s[u];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Ar = i, Ar;
}
var Pr, fi;
function Do() {
  if (fi) return Pr;
  fi = 1;
  var e = No(), r = ve(), t = zn();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return Pr = n, Pr;
}
var Tr, li;
function jo() {
  if (li) return Tr;
  li = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return Tr = e, Tr;
}
var Or, di;
function _e() {
  if (di) return Or;
  di = 1;
  var e = jo();
  function r(t, n) {
    var a = t.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Or = r, Or;
}
var Ir, hi;
function Mo() {
  if (hi) return Ir;
  hi = 1;
  var e = _e();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return Ir = r, Ir;
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
var Nr, pi;
function ko() {
  if (pi) return Nr;
  pi = 1;
  var e = _e();
  function r(t) {
    return e(this, t).has(t);
  }
  return Nr = r, Nr;
}
var Dr, _i;
function Bo() {
  if (_i) return Dr;
  _i = 1;
  var e = _e();
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
  var e = Do(), r = Mo(), t = Fo(), n = ko(), a = Bo();
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
function Nu() {
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
function Du() {
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
var Kr, xi;
function Mu() {
  if (xi) return Kr;
  xi = 1;
  var e = Du(), r = Ko(), t = ju(), n = 1, a = 2;
  function i(s, u, o, c, f, d) {
    var p = o & n, _ = s.length, R = u.length;
    if (_ != R && !(p && R > _))
      return !1;
    var y = d.get(s), g = d.get(u);
    if (y && g)
      return y == u && g == s;
    var E = -1, b = !0, O = o & a ? new e() : void 0;
    for (d.set(s, u), d.set(u, s); ++E < _; ) {
      var C = s[E], D = u[E];
      if (c)
        var P = p ? c(D, C, E, u, s, d) : c(C, D, E, s, u, d);
      if (P !== void 0) {
        if (P)
          continue;
        b = !1;
        break;
      }
      if (O) {
        if (!r(u, function(S, j) {
          if (!t(O, j) && (C === S || f(C, S, o, c, d)))
            return O.push(j);
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
var Ur, Si;
function Uo() {
  if (Si) return Ur;
  Si = 1;
  var e = W(), r = e.Uint8Array;
  return Ur = r, Ur;
}
var Yr, Ai;
function Yo() {
  if (Ai) return Yr;
  Ai = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return Yr = e, Yr;
}
var Wr, Pi;
function Wo() {
  if (Pi) return Wr;
  Pi = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a) {
      n[++t] = a;
    }), n;
  }
  return Wr = e, Wr;
}
var Vr, Ti;
function Vo() {
  if (Ti) return Vr;
  Ti = 1;
  var e = ae(), r = Uo(), t = de(), n = Mu(), a = Yo(), i = Wo(), s = 1, u = 2, o = "[object Boolean]", c = "[object Date]", f = "[object Error]", d = "[object Map]", p = "[object Number]", _ = "[object RegExp]", R = "[object Set]", y = "[object String]", g = "[object Symbol]", E = "[object ArrayBuffer]", b = "[object DataView]", O = e ? e.prototype : void 0, C = O ? O.valueOf : void 0;
  function D(P, S, j, M, B, x, v) {
    switch (j) {
      case b:
        if (P.byteLength != S.byteLength || P.byteOffset != S.byteOffset)
          return !1;
        P = P.buffer, S = S.buffer;
      case E:
        return !(P.byteLength != S.byteLength || !x(new r(P), new r(S)));
      case o:
      case c:
      case p:
        return t(+P, +S);
      case f:
        return P.name == S.name && P.message == S.message;
      case _:
      case y:
        return P == S + "";
      case d:
        var l = a;
      case R:
        var m = M & s;
        if (l || (l = i), P.size != S.size && !m)
          return !1;
        var I = v.get(P);
        if (I)
          return I == S;
        M |= u, v.set(P, S);
        var w = n(l(P), l(S), M, B, x, v);
        return v.delete(P), w;
      case g:
        if (C)
          return C.call(P) == C.call(S);
    }
    return !1;
  }
  return Vr = D, Vr;
}
var zr, Oi;
function Fu() {
  if (Oi) return zr;
  Oi = 1;
  function e(r, t) {
    for (var n = -1, a = t.length, i = r.length; ++n < a; )
      r[i + n] = t[n];
    return r;
  }
  return zr = e, zr;
}
var $r, Ii;
function zo() {
  if (Ii) return $r;
  Ii = 1;
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
var Xr, Ni;
function Jo() {
  if (Ni) return Xr;
  Ni = 1;
  var e = xu(), r = $o(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(s) {
    return s == null ? [] : (s = Object(s), e(a(s), function(u) {
      return n.call(s, u);
    }));
  } : r;
  return Xr = i, Xr;
}
var Zr, Di;
function Xo() {
  if (Di) return Zr;
  Di = 1;
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
    var d = u & r, p = e(i), _ = p.length, R = e(s), y = R.length;
    if (_ != y && !d)
      return !1;
    for (var g = _; g--; ) {
      var E = p[g];
      if (!(d ? E in s : n.call(s, E)))
        return !1;
    }
    var b = f.get(i), O = f.get(s);
    if (b && O)
      return b == s && O == i;
    var C = !0;
    f.set(i, s), f.set(s, i);
    for (var D = d; ++g < _; ) {
      E = p[g];
      var P = i[E], S = s[E];
      if (o)
        var j = d ? o(S, P, E, s, i, f) : o(P, S, E, i, s, f);
      if (!(j === void 0 ? P === S || c(P, S, u, o, f) : j)) {
        C = !1;
        break;
      }
      D || (D = E == "constructor");
    }
    if (C && !D) {
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
  var e = Qo(), r = zn(), t = ec(), n = rc(), a = tc(), i = ie(), s = wu(), u = "[object Map]", o = "[object Object]", c = "[object Promise]", f = "[object Set]", d = "[object WeakMap]", p = "[object DataView]", _ = s(e), R = s(r), y = s(t), g = s(n), E = s(a), b = i;
  return (e && b(new e(new ArrayBuffer(1))) != p || r && b(new r()) != u || t && b(t.resolve()) != c || n && b(new n()) != f || a && b(new a()) != d) && (b = function(O) {
    var C = i(O), D = C == o ? O.constructor : void 0, P = D ? s(D) : "";
    if (P)
      switch (P) {
        case _:
          return p;
        case R:
          return u;
        case y:
          return c;
        case g:
          return f;
        case E:
          return d;
      }
    return C;
  }), at = b, at;
}
var it, Gi;
function ac() {
  if (Gi) return it;
  Gi = 1;
  var e = Nu(), r = Mu(), t = Vo(), n = Zo(), a = nc(), i = K(), s = Au(), u = Pu(), o = 1, c = "[object Arguments]", f = "[object Array]", d = "[object Object]", p = Object.prototype, _ = p.hasOwnProperty;
  function R(y, g, E, b, O, C) {
    var D = i(y), P = i(g), S = D ? f : a(y), j = P ? f : a(g);
    S = S == c ? d : S, j = j == c ? d : j;
    var M = S == d, B = j == d, x = S == j;
    if (x && s(y)) {
      if (!s(g))
        return !1;
      D = !0, M = !1;
    }
    if (x && !M)
      return C || (C = new e()), D || u(y) ? r(y, g, E, b, O, C) : t(y, g, S, E, b, O, C);
    if (!(E & o)) {
      var v = M && _.call(y, "__wrapped__"), l = B && _.call(g, "__wrapped__");
      if (v || l) {
        var m = v ? y.value() : y, I = l ? g.value() : g;
        return C || (C = new e()), O(m, I, E, b, C);
      }
    }
    return x ? (C || (C = new e()), n(y, g, E, b, O, C)) : !1;
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
      var _ = p[0], R = i[_], y = p[1];
      if (d && p[2]) {
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
function dc() {
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
  var e = K(), r = Jn(), t = fc(), n = dc();
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
function hc() {
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
var xt, us;
function pc() {
  if (us) return xt;
  us = 1;
  var e = Gu(), r = Kn(), t = K(), n = Un(), a = Yn(), i = me();
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
  return xt = s, xt;
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
var At, cs;
function gc() {
  if (cs) return At;
  cs = 1;
  var e = ku(), r = hc(), t = _c(), n = Jn(), a = Bu(), i = Lu(), s = me(), u = 1, o = 2;
  function c(f, d) {
    return n(f) && a(d) ? i(s(f), d) : function(p) {
      var _ = r(p, f);
      return _ === void 0 && _ === d ? t(p, f) : e(d, _, u | o);
    };
  }
  return At = c, At;
}
var Pt, fs;
function ue() {
  if (fs) return Pt;
  fs = 1;
  function e(r) {
    return r;
  }
  return Pt = e, Pt;
}
var Tt, ls;
function mc() {
  if (ls) return Tt;
  ls = 1;
  function e(r) {
    return function(t) {
      return t?.[r];
    };
  }
  return Tt = e, Tt;
}
var Ot, ds;
function yc() {
  if (ds) return Ot;
  ds = 1;
  var e = Xn();
  function r(t) {
    return function(n) {
      return e(n, t);
    };
  }
  return Ot = r, Ot;
}
var It, hs;
function bc() {
  if (hs) return It;
  hs = 1;
  var e = mc(), r = yc(), t = Jn(), n = me();
  function a(i) {
    return t(i) ? e(n(i)) : r(i);
  }
  return It = a, It;
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
var Nt, ps;
function qc() {
  if (ps) return Nt;
  ps = 1;
  var e = xu(), r = vo(), t = oe(), n = K();
  function a(i, s) {
    var u = n(i) ? e : r;
    return u(i, t(s, 3));
  }
  return Nt = a, Nt;
}
var Rc = qc();
const Ec = /* @__PURE__ */ Y(Rc);
var Dt, _s;
function Hu() {
  if (_s) return Dt;
  _s = 1;
  var e = Vn(), r = z();
  function t(n, a) {
    var i = -1, s = r(n) ? Array(n.length) : [];
    return e(n, function(u, o, c) {
      s[++i] = a(u, o, c);
    }), s;
  }
  return Dt = t, Dt;
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
var xc = Cc();
const Sc = /* @__PURE__ */ Y(xc);
var Mt, ms;
function Ac() {
  if (ms) return Mt;
  ms = 1;
  var e = oe(), r = z(), t = le();
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
function Pc() {
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
function Tc() {
  if (qs) return Bt;
  qs = 1;
  var e = Pc(), r = /^\s+/;
  function t(n) {
    return n && n.slice(0, e(n) + 1).replace(r, "");
  }
  return Bt = t, Bt;
}
var Lt, Rs;
function Oc() {
  if (Rs) return Lt;
  Rs = 1;
  var e = Tc(), r = Z(), t = se(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, s = /^0o[0-7]+$/i, u = parseInt;
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
  var e = Oc(), r = 1 / 0, t = 17976931348623157e292;
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
function Ic() {
  if (Cs) return Ht;
  Cs = 1;
  var e = Uu();
  function r(t) {
    var n = e(t), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return Ht = r, Ht;
}
var Kt, xs;
function wc() {
  if (xs) return Kt;
  xs = 1;
  var e = Ku(), r = oe(), t = Ic(), n = Math.max;
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
  var e = Ac(), r = wc(), t = e(r);
  return Ut = t, Ut;
}
var Nc = Yu();
const Dc = /* @__PURE__ */ Y(Nc);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Yt, As;
function jc() {
  if (As) return Yt;
  As = 1;
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
      for (var d in u)
        r.call(u, d) && (o[d] = u[d]);
      if (e) {
        c = e(u);
        for (var p = 0; p < c.length; p++)
          t.call(u, c[p]) && (o[c[p]] = u[c[p]]);
      }
    }
    return o;
  }, Yt;
}
var Wt, Ps;
function Mc() {
  if (Ps) return Wt;
  Ps = 1;
  var e = {};
  return process.env.NODE_ENV !== "production" && Object.freeze(e), Wt = e, Wt;
}
var Vt, Ts;
function Fc() {
  if (Ts) return Vt;
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
  return Vt = r, Vt;
}
var zt, Os;
function kc() {
  if (Os) return zt;
  Os = 1;
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
var $t, Is;
function Bc() {
  if (Is) return $t;
  Is = 1;
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
        v.getDefaultProps ? v.getDefaultProps = O(
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
      for (var I in l)
        l.hasOwnProperty(I) && process.env.NODE_ENV !== "production" && n(
          typeof l[I] == "function",
          "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",
          v.displayName || "ReactClass",
          s[m],
          I
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
          var m = typeof l, I = m === "object" && l !== null;
          process.env.NODE_ENV !== "production" && n(
            I,
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
      for (var T in l)
        if (l.hasOwnProperty(T) && T !== a) {
          var G = l[T], h = w.hasOwnProperty(T);
          if (y(h, T), _.hasOwnProperty(T))
            _[T](v, G);
          else {
            var q = p.hasOwnProperty(T), N = typeof G == "function", F = N && !q && !h && l.autobind !== !1;
            if (F)
              L.push(T, G), w[T] = G;
            else if (h) {
              var H = p[T];
              t(
                q && (H === "DEFINE_MANY_MERGED" || H === "DEFINE_MANY"),
                "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",
                H,
                T
              ), H === "DEFINE_MANY_MERGED" ? w[T] = O(w[T], G) : H === "DEFINE_MANY" && (w[T] = C(w[T], G));
            } else
              w[T] = G, process.env.NODE_ENV !== "production" && typeof G == "function" && l.displayName && (w[T].displayName = l.displayName + "_" + T);
          }
        }
    }
    function E(v, l) {
      if (l)
        for (var m in l) {
          var I = l[m];
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
            ), v[m] = I;
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
    function O(v, l) {
      return function() {
        var I = v.apply(this, arguments), w = l.apply(this, arguments);
        if (I == null)
          return w;
        if (w == null)
          return I;
        var L = {};
        return b(L, I), b(L, w), L;
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
        var I = v.constructor.displayName, w = m.bind;
        m.bind = function(L) {
          for (var T = arguments.length, G = Array(T > 1 ? T - 1 : 0), h = 1; h < T; h++)
            G[h - 1] = arguments[h];
          if (L !== v && L !== null)
            process.env.NODE_ENV !== "production" && n(
              !1,
              "bind(): React component methods may only be bound to the component instance. See %s",
              I
            );
          else if (!G.length)
            return process.env.NODE_ENV !== "production" && n(
              !1,
              "bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",
              I
            ), m;
          var q = w.apply(m, arguments);
          return q.__reactBoundContext = v, q.__reactBoundMethod = l, q.__reactBoundArguments = G, q;
        };
      }
      return m;
    }
    function P(v) {
      for (var l = v.__reactAutoBindPairs, m = 0; m < l.length; m += 2) {
        var I = l[m], w = l[m + 1];
        v[I] = D(v, w);
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
    function x(v) {
      var l = function(I, w, L) {
        process.env.NODE_ENV !== "production" && n(
          this instanceof l,
          "Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"
        ), this.__reactAutoBindPairs.length && P(this), this.props = I, this.context = w, this.refs = r, this.updater = L || f, this.state = null;
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
    return x;
  }
  return Jt = u, Jt;
}
var Xt, Ns;
function Gc() {
  if (Ns) return Xt;
  Ns = 1;
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
var Zt, Ds;
function Wu() {
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
  var e = Vu(), r = de(), t = Object.prototype, n = t.hasOwnProperty;
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
      var f = a[o], d = s ? s(i[f], n[f], f, i, n) : void 0;
      d === void 0 && (d = n[f]), u ? r(i, f, d) : e(i, f, d);
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
  var e = de(), r = z(), t = Un(), n = Z();
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
var dn, Vs;
function Zc() {
  if (Vs) return dn;
  Vs = 1;
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
function Qc() {
  if (zs) return hn;
  zs = 1;
  var e = Z(), r = Ou(), t = Zc(), n = Object.prototype, a = n.hasOwnProperty;
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
function ef() {
  if ($s) return vn;
  $s = 1;
  var e = Tu(), r = Qc(), t = z();
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
      var a = t !== void 0, i = t === null, s = t === t, u = e(t), o = n !== void 0, c = n === null, f = n === n, d = e(n);
      if (!c && !d && !u && t > n || u && o && f && !c && !d || i && o && f || !a && f || !s)
        return 1;
      if (!i && !u && !d && t < n || d && a && s && !i && !u || c && a && s || !o && s || !f)
        return -1;
    }
    return 0;
  }
  return Cn = r, Cn;
}
var xn, su;
function df() {
  if (su) return xn;
  su = 1;
  var e = lf();
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
  return xn = r, xn;
}
var Sn, uu;
function hf() {
  if (uu) return Sn;
  uu = 1;
  var e = ge(), r = Xn(), t = oe(), n = Hu(), a = ff(), i = Wn(), s = df(), u = ue(), o = K();
  function c(f, d, p) {
    d.length ? d = e(d, function(y) {
      return o(y) ? function(g) {
        return r(g, y.length === 1 ? y[0] : y);
      } : y;
    }) : d = [u];
    var _ = -1;
    d = e(d, i(t));
    var R = n(f, function(y, g, E) {
      var b = e(d, function(O) {
        return O(y);
      });
      return { criteria: b, index: ++_, value: y };
    });
    return a(R, function(y, g) {
      return s(y, g, p);
    });
  }
  return Sn = c, Sn;
}
var An, ou;
function vf() {
  if (ou) return An;
  ou = 1;
  var e = cf(), r = hf(), t = Zn(), n = Qn(), a = t(function(i, s) {
    if (i == null)
      return [];
    var u = s.length;
    return u > 1 && n(i, s[0], s[1]) ? s = [] : u > 2 && n(s[0], s[1], s[2]) && (s = [s[0]]), r(i, e(s, 1), []);
  });
  return An = a, An;
}
var Pn, cu;
function pf() {
  if (cu) return Pn;
  cu = 1;
  var e = {
    extend: tf(),
    each: uf(),
    sortBy: vf(),
    find: Yu()
  };
  Pn = function(a) {
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
        d.forEach(function(R, y) {
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
  return Pn;
}
var _f = pf();
const fu = /* @__PURE__ */ Y(_f);
var Tn, lu;
function gf() {
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
var mf = gf();
const yf = /* @__PURE__ */ Y(mf), du = Array.prototype.slice;
function V(e) {
  const r = du.call(arguments, 1);
  return function() {
    return e.apply(this, r.concat(du.call(arguments)));
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
var On, hu;
function qf() {
  if (hu) return On;
  hu = 1;
  var e = Math.ceil, r = Math.max;
  function t(n, a, i, s) {
    for (var u = -1, o = r(e((a - n) / (i || 1)), 0), c = Array(o); o--; )
      c[s ? o : ++u] = n, n += i;
    return c;
  }
  return On = t, On;
}
var In, vu;
function Rf() {
  if (vu) return In;
  vu = 1;
  var e = qf(), r = Qn(), t = Uu();
  function n(a) {
    return function(i, s, u) {
      return u && typeof u != "number" && r(i, s, u) && (s = u = void 0), i = t(i), s === void 0 ? (s = i, i = 0) : s = t(s), u = u === void 0 ? i < s ? 1 : -1 : t(u), e(i, s, u, a);
    };
  }
  return In = n, In;
}
var wn, pu;
function Ef() {
  if (pu) return wn;
  pu = 1;
  var e = Rf(), r = e();
  return wn = r, wn;
}
var Cf = Ef();
const xf = /* @__PURE__ */ Y(Cf), Sf = { range: xf }, Af = ye({
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
    return /* @__PURE__ */ A.jsxs("div", { className: "reactPivot-results", children: [
      /* @__PURE__ */ A.jsxs("table", { className: this.props.tableClassName, children: [
        n,
        t
      ] }),
      this.renderPagination(r)
    ] });
  },
  renderTableHead: function(e) {
    var r = this, t = this.props.sortBy, n = this.props.sortDir;
    return /* @__PURE__ */ A.jsx("thead", { children: /* @__PURE__ */ A.jsx("tr", { children: e.map(function(a) {
      var i = a.className;
      a.title === t && (i += " " + n);
      var s = "";
      return a.type !== "dimension" && (s = /* @__PURE__ */ A.jsx(
        "span",
        {
          className: "reactPivot-hideColumn",
          onClick: V(r.props.onColumnHide, a.title),
          children: "×"
        }
      )), /* @__PURE__ */ A.jsxs(
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
    return /* @__PURE__ */ A.jsx("tbody", { children: r.map(function(n) {
      return /* @__PURE__ */ A.jsx("tr", { className: "reactPivot-level-" + n._level, children: e.map(function(a, i) {
        return i < n._level ? /* @__PURE__ */ A.jsx("td", { className: "reactPivot-indent" }, i) : t.renderCell(a, n);
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
      var i = /* @__PURE__ */ A.jsx("span", { className: "reactPivot-solo", children: /* @__PURE__ */ A.jsx(
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
    var s = Hn.isValidElement(n) ? /* @__PURE__ */ A.jsx("span", { children: n }) : /* @__PURE__ */ A.jsx(
      "span",
      {
        dangerouslySetInnerHTML: { __html: n || n === 0 && "0" || "" }
      }
    );
    return /* @__PURE__ */ A.jsxs(
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
    return t === 1 ? "" : /* @__PURE__ */ A.jsx("div", { className: "reactPivot-paginate", children: Sf.range(0, t).map(function(a) {
      var i = "reactPivot-pageNumber";
      return a === n && (i += " is-selected"), /* @__PURE__ */ A.jsx("span", { className: i, children: /* @__PURE__ */ A.jsx("a", { onClick: V(r.setPaginatePage, a), children: a + 1 }) }, a);
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
function Pf() {
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
var Tf = Pf();
const Of = /* @__PURE__ */ Y(Tf), If = { compact: Of }, wf = ye({
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
    return /* @__PURE__ */ A.jsxs("div", { className: "reactPivot-dimensions", children: [
      t.map(this.renderDimension),
      /* @__PURE__ */ A.jsxs("select", { value: "", onChange: V(e.toggleDimension, n), children: [
        /* @__PURE__ */ A.jsx("option", { value: "", children: r }),
        e.props.dimensions.map(function(a) {
          return /* @__PURE__ */ A.jsx("option", { children: a.title }, a.title);
        })
      ] })
    ] });
  },
  renderDimension: function(e, r) {
    return /* @__PURE__ */ A.jsxs(
      "select",
      {
        value: e,
        onChange: V(this.toggleDimension, r),
        children: [
          /* @__PURE__ */ A.jsx("option", {}),
          this.props.dimensions.map(function(t) {
            return /* @__PURE__ */ A.jsx(
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
    var i = If.compact(n);
    this.props.onChange(i);
  }
});
var Dn, gu;
function Nf() {
  if (gu) return Dn;
  gu = 1;
  function e(r) {
    return r !== r;
  }
  return Dn = e, Dn;
}
var jn, mu;
function Df() {
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
  var e = Ku(), r = Nf(), t = Df();
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
  var e = Du(), r = Mf(), t = Ff(), n = ge(), a = Wn(), i = ju(), s = 200;
  function u(o, c, f, d) {
    var p = -1, _ = r, R = !0, y = o.length, g = [], E = c.length;
    if (!y)
      return g;
    f && (c = n(c, a(f))), d ? (_ = t, R = !1) : c.length >= s && (_ = i, R = !1, c = new e(c));
    e:
      for (; ++p < y; ) {
        var b = o[p], O = f == null ? b : f(b);
        if (b = d || b !== 0 ? b : 0, R && O === O) {
          for (var C = E; C--; )
            if (c[C] === O)
              continue e;
          g.push(b);
        } else _(c, O, d) || g.push(b);
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
    return /* @__PURE__ */ A.jsx("div", { className: "reactPivot-columnControl", children: this.props.hiddenColumns.length ? /* @__PURE__ */ A.jsxs("select", { value: "", onChange: this.showColumn, children: [
      /* @__PURE__ */ A.jsx("option", { value: "", children: "Hidden Columns" }),
      this.props.hiddenColumns.map(function(e) {
        return /* @__PURE__ */ A.jsx("option", { children: e }, e);
      })
    ] }) : "" });
  },
  showColumn: function(e) {
    var r = e.target.value, t = Kf.without(this.props.hiddenColumns, r);
    this.props.onChange(t);
  }
}), re = { filter: Ec, map: Sc, find: Dc }, Vf = ye({
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
    var e = this, r = /* @__PURE__ */ A.jsxs("div", { className: "reactPivot", children: [
      this.props.hideDimensionFilter ? "" : /* @__PURE__ */ A.jsx(
        wf,
        {
          dimensions: this.props.dimensions,
          subDimensionText: this.props.subDimensionText,
          selectedDimensions: this.state.dimensions,
          onChange: this.setDimensions
        }
      ),
      /* @__PURE__ */ A.jsx(
        Uf,
        {
          hiddenColumns: this.state.hiddenColumns,
          onChange: this.setHiddenColumns
        }
      ),
      /* @__PURE__ */ A.jsx("div", { className: "reactPivot-csvExport", children: /* @__PURE__ */ A.jsx("button", { onClick: V(this.downloadCSV, this.state.rows), children: "Export CSV" }) }),
      Object.keys(this.state.solo).map(function(t) {
        var n = e.state.solo[t];
        return /* @__PURE__ */ A.jsxs(
          "div",
          {
            style: { clear: "both" },
            className: "reactPivot-soloDisplay",
            children: [
              /* @__PURE__ */ A.jsx(
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
      /* @__PURE__ */ A.jsx(
        Af,
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
      return Object.keys(u).forEach(function(d) {
        c[d] !== u[d] && (f = !1);
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
  if (typeof document > "u" || document.getElementById("react-pivot-styles")) return;
  const e = `.reactPivot {
  margin-top: 40px;
  padding: 10px 20px 20px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.reactPivot-soloDisplay {
  padding: 5px;
}

.reactPivot-clearSolo {
  opacity: 0.5;
  cursor: pointer;
  font-size: 120%;
  margin-right: 2px;
}

.reactPivot-clearSolo:hover {
  font-weight: bold;
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

.reactPivot-solo {opacity: 0}
.reactPivot-solo:hover {font-weight: bold}
td:hover .reactPivot-solo {opacity: 0.5}

.reactPivot-csvExport,
.reactPivot-columnControl {
  float: right;
  margin-left: 5px;
}

.reactPivot-csvExport button {
  background-color: #FFF;
  border: 1px solid #CCC;
  height: 28px;
  color: #555;
  cursor: pointer;
  padding: 0 10px;
  border-radius: 4px;
  margin-top: 5px;
}

.reactPivot-dimensions {
  float: left;
  padding: 10px 0;
  text-align: left;
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
  Vf as default
};
