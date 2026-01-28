import kn from "react";
var de = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function V(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var he = { exports: {} }, re = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function Vo() {
  if (Xn) return re;
  Xn = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, a, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      i = {};
      for (var o in a)
        o !== "key" && (i[o] = a[o]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return re.Fragment = r, re.jsx = t, re.jsxs = t, re;
}
var te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function Wo() {
  return Zn || (Zn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === G ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case m:
          return "Fragment";
        case x:
          return "Profiler";
        case y:
          return "StrictMode";
        case I:
          return "Suspense";
        case S:
          return "SuspenseList";
        case F:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case b:
            return "Portal";
          case A:
            return (d.displayName || "Context") + ".Provider";
          case q:
            return (d._context.displayName || "Context") + ".Consumer";
          case C:
            var _ = d.render;
            return d = d.displayName, d || (d = _.displayName || _.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case O:
            return _ = d.displayName || null, _ !== null ? _ : e(d.type) || "Memo";
          case j:
            _ = d._payload, d = d._init;
            try {
              return e(d(_));
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
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var T = _.error, w = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return T.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          w
        ), r(d);
      }
    }
    function n(d) {
      if (d === m) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === j)
        return "<...>";
      try {
        var _ = e(d);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var d = P.A;
      return d === null ? null : d.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(d) {
      if (L.call(d, "key")) {
        var _ = Object.getOwnPropertyDescriptor(d, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function o(d, _) {
      function T() {
        p || (p = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: T,
        configurable: !0
      });
    }
    function u() {
      var d = e(this.type);
      return h[d] || (h[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function c(d, _, T, w, k, U, ee, Y) {
      return T = U.ref, d = {
        $$typeof: g,
        type: d,
        key: _,
        props: U,
        _owner: k
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: u
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
        value: ee
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function l(d, _, T, w, k, U, ee, Y) {
      var B = _.children;
      if (B !== void 0)
        if (w)
          if (M(B)) {
            for (w = 0; w < B.length; w++)
              f(B[w]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(B);
      if (L.call(_, "key")) {
        B = e(d);
        var X = Object.keys(_).filter(function(Yo) {
          return Yo !== "key";
        });
        w = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", N[B + w] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          w,
          B,
          X,
          B
        ), N[B + w] = !0);
      }
      if (B = null, T !== void 0 && (t(T), B = "" + T), s(_) && (t(_.key), B = "" + _.key), "key" in _) {
        T = {};
        for (var Re in _)
          Re !== "key" && (T[Re] = _[Re]);
      } else T = _;
      return B && o(
        T,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), c(
        d,
        B,
        U,
        k,
        a(),
        T,
        ee,
        Y
      );
    }
    function f(d) {
      typeof d == "object" && d !== null && d.$$typeof === g && d._store && (d._store.validated = 1);
    }
    var v = kn, g = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), A = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), P = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, M = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(d) {
        return d();
      }
    };
    var p, h = {}, R = v["react-stack-bottom-frame"].bind(
      v,
      i
    )(), D = K(n(i)), N = {};
    te.Fragment = m, te.jsx = function(d, _, T, w, k) {
      var U = 1e4 > P.recentlyCreatedOwnerStacks++;
      return l(
        d,
        _,
        T,
        !1,
        w,
        k,
        U ? Error("react-stack-top-frame") : R,
        U ? K(n(d)) : D
      );
    }, te.jsxs = function(d, _, T, w, k) {
      var U = 1e4 > P.recentlyCreatedOwnerStacks++;
      return l(
        d,
        _,
        T,
        !0,
        w,
        k,
        U ? Error("react-stack-top-frame") : R,
        U ? K(n(d)) : D
      );
    };
  }()), te;
}
var Qn;
function zo() {
  return Qn || (Qn = 1, process.env.NODE_ENV === "production" ? he.exports = Vo() : he.exports = Wo()), he.exports;
}
var E = zo(), Ee, ea;
function bo() {
  if (ea) return Ee;
  ea = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = 0, s = []; ++n < a; ) {
      var o = r[n];
      t(o, n, r) && (s[i++] = o);
    }
    return s;
  }
  return Ee = e, Ee;
}
var xe, ra;
function $o() {
  if (ra) return xe;
  ra = 1;
  function e(r) {
    return function(t, n, a) {
      for (var i = -1, s = Object(t), o = a(t), u = o.length; u--; ) {
        var c = o[r ? u : ++i];
        if (n(s[c], c, s) === !1)
          break;
      }
      return t;
    };
  }
  return xe = e, xe;
}
var Ce, ta;
function Jo() {
  if (ta) return Ce;
  ta = 1;
  var e = $o(), r = e();
  return Ce = r, Ce;
}
var Pe, na;
function Xo() {
  if (na) return Pe;
  na = 1;
  function e(r, t) {
    for (var n = -1, a = Array(r); ++n < r; )
      a[n] = t(n);
    return a;
  }
  return Pe = e, Pe;
}
var Se, aa;
function qo() {
  if (aa) return Se;
  aa = 1;
  var e = typeof de == "object" && de && de.Object === Object && de;
  return Se = e, Se;
}
var Ae, ia;
function W() {
  if (ia) return Ae;
  ia = 1;
  var e = qo(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return Ae = t, Ae;
}
var Oe, sa;
function se() {
  if (sa) return Oe;
  sa = 1;
  var e = W(), r = e.Symbol;
  return Oe = r, Oe;
}
var Te, oa;
function Zo() {
  if (oa) return Te;
  oa = 1;
  var e = se(), r = Object.prototype, t = r.hasOwnProperty, n = r.toString, a = e ? e.toStringTag : void 0;
  function i(s) {
    var o = t.call(s, a), u = s[a];
    try {
      s[a] = void 0;
      var c = !0;
    } catch {
    }
    var l = n.call(s);
    return c && (o ? s[a] = u : delete s[a]), l;
  }
  return Te = i, Te;
}
var we, ua;
function Qo() {
  if (ua) return we;
  ua = 1;
  var e = Object.prototype, r = e.toString;
  function t(n) {
    return r.call(n);
  }
  return we = t, we;
}
var Ie, ca;
function oe() {
  if (ca) return Ie;
  ca = 1;
  var e = se(), r = Zo(), t = Qo(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function s(o) {
    return o == null ? o === void 0 ? a : n : i && i in Object(o) ? r(o) : t(o);
  }
  return Ie = s, Ie;
}
var Ne, la;
function Z() {
  if (la) return Ne;
  la = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return Ne = e, Ne;
}
var De, fa;
function eu() {
  if (fa) return De;
  fa = 1;
  var e = oe(), r = Z(), t = "[object Arguments]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return De = n, De;
}
var je, da;
function Bn() {
  if (da) return je;
  da = 1;
  var e = eu(), r = Z(), t = Object.prototype, n = t.hasOwnProperty, a = t.propertyIsEnumerable, i = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(s) {
    return r(s) && n.call(s, "callee") && !a.call(s, "callee");
  };
  return je = i, je;
}
var Fe, ha;
function H() {
  if (ha) return Fe;
  ha = 1;
  var e = Array.isArray;
  return Fe = e, Fe;
}
var ae = { exports: {} }, Me, va;
function ru() {
  if (va) return Me;
  va = 1;
  function e() {
    return !1;
  }
  return Me = e, Me;
}
ae.exports;
var pa;
function Ro() {
  return pa || (pa = 1, function(e, r) {
    var t = W(), n = ru(), a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? t.Buffer : void 0, u = o ? o.isBuffer : void 0, c = u || n;
    e.exports = c;
  }(ae, ae.exports)), ae.exports;
}
var ke, _a;
function Ln() {
  if (_a) return ke;
  _a = 1;
  var e = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
  function t(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && r.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return ke = t, ke;
}
var Be, ga;
function Gn() {
  if (ga) return Be;
  ga = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return Be = r, Be;
}
var Le, ma;
function tu() {
  if (ma) return Le;
  ma = 1;
  var e = oe(), r = Gn(), t = Z(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", s = "[object Date]", o = "[object Error]", u = "[object Function]", c = "[object Map]", l = "[object Number]", f = "[object Object]", v = "[object RegExp]", g = "[object Set]", b = "[object String]", m = "[object WeakMap]", y = "[object ArrayBuffer]", x = "[object DataView]", q = "[object Float32Array]", A = "[object Float64Array]", C = "[object Int8Array]", I = "[object Int16Array]", S = "[object Int32Array]", O = "[object Uint8Array]", j = "[object Uint8ClampedArray]", F = "[object Uint16Array]", G = "[object Uint32Array]", P = {};
  P[q] = P[A] = P[C] = P[I] = P[S] = P[O] = P[j] = P[F] = P[G] = !0, P[n] = P[a] = P[y] = P[i] = P[x] = P[s] = P[o] = P[u] = P[c] = P[l] = P[f] = P[v] = P[g] = P[b] = P[m] = !1;
  function L(M) {
    return t(M) && r(M.length) && !!P[e(M)];
  }
  return Le = L, Le;
}
var Ge, ya;
function Hn() {
  if (ya) return Ge;
  ya = 1;
  function e(r) {
    return function(t) {
      return r(t);
    };
  }
  return Ge = e, Ge;
}
var ie = { exports: {} };
ie.exports;
var ba;
function nu() {
  return ba || (ba = 1, function(e, r) {
    var t = qo(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && t.process, o = function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || s && s.binding && s.binding("util");
      } catch {
      }
    }();
    e.exports = o;
  }(ie, ie.exports)), ie.exports;
}
var He, qa;
function Eo() {
  if (qa) return He;
  qa = 1;
  var e = tu(), r = Hn(), t = nu(), n = t && t.isTypedArray, a = n ? r(n) : e;
  return He = a, He;
}
var Ue, Ra;
function xo() {
  if (Ra) return Ue;
  Ra = 1;
  var e = Xo(), r = Bn(), t = H(), n = Ro(), a = Ln(), i = Eo(), s = Object.prototype, o = s.hasOwnProperty;
  function u(c, l) {
    var f = t(c), v = !f && r(c), g = !f && !v && n(c), b = !f && !v && !g && i(c), m = f || v || g || b, y = m ? e(c.length, String) : [], x = y.length;
    for (var q in c)
      (l || o.call(c, q)) && !(m && // Safari 9 has enumerable `arguments.length` in strict mode.
      (q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (q == "offset" || q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      b && (q == "buffer" || q == "byteLength" || q == "byteOffset") || // Skip index properties.
      a(q, x))) && y.push(q);
    return y;
  }
  return Ue = u, Ue;
}
var Ke, Ea;
function Co() {
  if (Ea) return Ke;
  Ea = 1;
  var e = Object.prototype;
  function r(t) {
    var n = t && t.constructor, a = typeof n == "function" && n.prototype || e;
    return t === a;
  }
  return Ke = r, Ke;
}
var Ye, xa;
function au() {
  if (xa) return Ye;
  xa = 1;
  function e(r, t) {
    return function(n) {
      return r(t(n));
    };
  }
  return Ye = e, Ye;
}
var Ve, Ca;
function iu() {
  if (Ca) return Ve;
  Ca = 1;
  var e = au(), r = e(Object.keys, Object);
  return Ve = r, Ve;
}
var We, Pa;
function su() {
  if (Pa) return We;
  Pa = 1;
  var e = Co(), r = iu(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return r(i);
    var s = [];
    for (var o in Object(i))
      n.call(i, o) && o != "constructor" && s.push(o);
    return s;
  }
  return We = a, We;
}
var ze, Sa;
function Q() {
  if (Sa) return ze;
  Sa = 1;
  function e(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return ze = e, ze;
}
var $e, Aa;
function Po() {
  if (Aa) return $e;
  Aa = 1;
  var e = oe(), r = Q(), t = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function s(o) {
    if (!r(o))
      return !1;
    var u = e(o);
    return u == n || u == a || u == t || u == i;
  }
  return $e = s, $e;
}
var Je, Oa;
function $() {
  if (Oa) return Je;
  Oa = 1;
  var e = Po(), r = Gn();
  function t(n) {
    return n != null && r(n.length) && !e(n);
  }
  return Je = t, Je;
}
var Xe, Ta;
function ve() {
  if (Ta) return Xe;
  Ta = 1;
  var e = xo(), r = su(), t = $();
  function n(a) {
    return t(a) ? e(a) : r(a);
  }
  return Xe = n, Xe;
}
var Ze, wa;
function ou() {
  if (wa) return Ze;
  wa = 1;
  var e = Jo(), r = ve();
  function t(n, a) {
    return n && e(n, a, r);
  }
  return Ze = t, Ze;
}
var Qe, Ia;
function uu() {
  if (Ia) return Qe;
  Ia = 1;
  var e = $();
  function r(t, n) {
    return function(a, i) {
      if (a == null)
        return a;
      if (!e(a))
        return t(a, i);
      for (var s = a.length, o = n ? s : -1, u = Object(a); (n ? o-- : ++o < s) && i(u[o], o, u) !== !1; )
        ;
      return a;
    };
  }
  return Qe = r, Qe;
}
var er, Na;
function Un() {
  if (Na) return er;
  Na = 1;
  var e = ou(), r = uu(), t = r(e);
  return er = t, er;
}
var rr, Da;
function cu() {
  if (Da) return rr;
  Da = 1;
  var e = Un();
  function r(t, n) {
    var a = [];
    return e(t, function(i, s, o) {
      n(i, s, o) && a.push(i);
    }), a;
  }
  return rr = r, rr;
}
var tr, ja;
function lu() {
  if (ja) return tr;
  ja = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return tr = e, tr;
}
var nr, Fa;
function pe() {
  if (Fa) return nr;
  Fa = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return nr = e, nr;
}
var ar, Ma;
function _e() {
  if (Ma) return ar;
  Ma = 1;
  var e = pe();
  function r(t, n) {
    for (var a = t.length; a--; )
      if (e(t[a][0], n))
        return a;
    return -1;
  }
  return ar = r, ar;
}
var ir, ka;
function fu() {
  if (ka) return ir;
  ka = 1;
  var e = _e(), r = Array.prototype, t = r.splice;
  function n(a) {
    var i = this.__data__, s = e(i, a);
    if (s < 0)
      return !1;
    var o = i.length - 1;
    return s == o ? i.pop() : t.call(i, s, 1), --this.size, !0;
  }
  return ir = n, ir;
}
var sr, Ba;
function du() {
  if (Ba) return sr;
  Ba = 1;
  var e = _e();
  function r(t) {
    var n = this.__data__, a = e(n, t);
    return a < 0 ? void 0 : n[a][1];
  }
  return sr = r, sr;
}
var or, La;
function hu() {
  if (La) return or;
  La = 1;
  var e = _e();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return or = r, or;
}
var ur, Ga;
function vu() {
  if (Ga) return ur;
  Ga = 1;
  var e = _e();
  function r(t, n) {
    var a = this.__data__, i = e(a, t);
    return i < 0 ? (++this.size, a.push([t, n])) : a[i][1] = n, this;
  }
  return ur = r, ur;
}
var cr, Ha;
function ge() {
  if (Ha) return cr;
  Ha = 1;
  var e = lu(), r = fu(), t = du(), n = hu(), a = vu();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var c = s[o];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, cr = i, cr;
}
var lr, Ua;
function pu() {
  if (Ua) return lr;
  Ua = 1;
  var e = ge();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return lr = r, lr;
}
var fr, Ka;
function _u() {
  if (Ka) return fr;
  Ka = 1;
  function e(r) {
    var t = this.__data__, n = t.delete(r);
    return this.size = t.size, n;
  }
  return fr = e, fr;
}
var dr, Ya;
function gu() {
  if (Ya) return dr;
  Ya = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return dr = e, dr;
}
var hr, Va;
function mu() {
  if (Va) return hr;
  Va = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return hr = e, hr;
}
var vr, Wa;
function yu() {
  if (Wa) return vr;
  Wa = 1;
  var e = W(), r = e["__core-js_shared__"];
  return vr = r, vr;
}
var pr, za;
function bu() {
  if (za) return pr;
  za = 1;
  var e = yu(), r = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function t(n) {
    return !!r && r in n;
  }
  return pr = t, pr;
}
var _r, $a;
function So() {
  if ($a) return _r;
  $a = 1;
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
var gr, Ja;
function qu() {
  if (Ja) return gr;
  Ja = 1;
  var e = Po(), r = bu(), t = Q(), n = So(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, o = Object.prototype, u = s.toString, c = o.hasOwnProperty, l = RegExp(
    "^" + u.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function f(v) {
    if (!t(v) || r(v))
      return !1;
    var g = e(v) ? l : i;
    return g.test(n(v));
  }
  return gr = f, gr;
}
var mr, Xa;
function Ru() {
  if (Xa) return mr;
  Xa = 1;
  function e(r, t) {
    return r?.[t];
  }
  return mr = e, mr;
}
var yr, Za;
function J() {
  if (Za) return yr;
  Za = 1;
  var e = qu(), r = Ru();
  function t(n, a) {
    var i = r(n, a);
    return e(i) ? i : void 0;
  }
  return yr = t, yr;
}
var br, Qa;
function Kn() {
  if (Qa) return br;
  Qa = 1;
  var e = J(), r = W(), t = e(r, "Map");
  return br = t, br;
}
var qr, ei;
function me() {
  if (ei) return qr;
  ei = 1;
  var e = J(), r = e(Object, "create");
  return qr = r, qr;
}
var Rr, ri;
function Eu() {
  if (ri) return Rr;
  ri = 1;
  var e = me();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Rr = r, Rr;
}
var Er, ti;
function xu() {
  if (ti) return Er;
  ti = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return Er = e, Er;
}
var xr, ni;
function Cu() {
  if (ni) return xr;
  ni = 1;
  var e = me(), r = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    var s = this.__data__;
    if (e) {
      var o = s[i];
      return o === r ? void 0 : o;
    }
    return n.call(s, i) ? s[i] : void 0;
  }
  return xr = a, xr;
}
var Cr, ai;
function Pu() {
  if (ai) return Cr;
  ai = 1;
  var e = me(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : t.call(i, a);
  }
  return Cr = n, Cr;
}
var Pr, ii;
function Su() {
  if (ii) return Pr;
  ii = 1;
  var e = me(), r = "__lodash_hash_undefined__";
  function t(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? r : a, this;
  }
  return Pr = t, Pr;
}
var Sr, si;
function Au() {
  if (si) return Sr;
  si = 1;
  var e = Eu(), r = xu(), t = Cu(), n = Pu(), a = Su();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var c = s[o];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Sr = i, Sr;
}
var Ar, oi;
function Ou() {
  if (oi) return Ar;
  oi = 1;
  var e = Au(), r = ge(), t = Kn();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return Ar = n, Ar;
}
var Or, ui;
function Tu() {
  if (ui) return Or;
  ui = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return Or = e, Or;
}
var Tr, ci;
function ye() {
  if (ci) return Tr;
  ci = 1;
  var e = Tu();
  function r(t, n) {
    var a = t.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Tr = r, Tr;
}
var wr, li;
function wu() {
  if (li) return wr;
  li = 1;
  var e = ye();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return wr = r, wr;
}
var Ir, fi;
function Iu() {
  if (fi) return Ir;
  fi = 1;
  var e = ye();
  function r(t) {
    return e(this, t).get(t);
  }
  return Ir = r, Ir;
}
var Nr, di;
function Nu() {
  if (di) return Nr;
  di = 1;
  var e = ye();
  function r(t) {
    return e(this, t).has(t);
  }
  return Nr = r, Nr;
}
var Dr, hi;
function Du() {
  if (hi) return Dr;
  hi = 1;
  var e = ye();
  function r(t, n) {
    var a = e(this, t), i = a.size;
    return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
  }
  return Dr = r, Dr;
}
var jr, vi;
function Yn() {
  if (vi) return jr;
  vi = 1;
  var e = Ou(), r = wu(), t = Iu(), n = Nu(), a = Du();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var c = s[o];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, jr = i, jr;
}
var Fr, pi;
function ju() {
  if (pi) return Fr;
  pi = 1;
  var e = ge(), r = Kn(), t = Yn(), n = 200;
  function a(i, s) {
    var o = this.__data__;
    if (o instanceof e) {
      var u = o.__data__;
      if (!r || u.length < n - 1)
        return u.push([i, s]), this.size = ++o.size, this;
      o = this.__data__ = new t(u);
    }
    return o.set(i, s), this.size = o.size, this;
  }
  return Fr = a, Fr;
}
var Mr, _i;
function Ao() {
  if (_i) return Mr;
  _i = 1;
  var e = ge(), r = pu(), t = _u(), n = gu(), a = mu(), i = ju();
  function s(o) {
    var u = this.__data__ = new e(o);
    this.size = u.size;
  }
  return s.prototype.clear = r, s.prototype.delete = t, s.prototype.get = n, s.prototype.has = a, s.prototype.set = i, Mr = s, Mr;
}
var kr, gi;
function Fu() {
  if (gi) return kr;
  gi = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return kr = r, kr;
}
var Br, mi;
function Mu() {
  if (mi) return Br;
  mi = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return Br = e, Br;
}
var Lr, yi;
function Oo() {
  if (yi) return Lr;
  yi = 1;
  var e = Yn(), r = Fu(), t = Mu();
  function n(a) {
    var i = -1, s = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < s; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = r, n.prototype.has = t, Lr = n, Lr;
}
var Gr, bi;
function ku() {
  if (bi) return Gr;
  bi = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a; )
      if (t(r[n], n, r))
        return !0;
    return !1;
  }
  return Gr = e, Gr;
}
var Hr, qi;
function To() {
  if (qi) return Hr;
  qi = 1;
  function e(r, t) {
    return r.has(t);
  }
  return Hr = e, Hr;
}
var Ur, Ri;
function wo() {
  if (Ri) return Ur;
  Ri = 1;
  var e = Oo(), r = ku(), t = To(), n = 1, a = 2;
  function i(s, o, u, c, l, f) {
    var v = u & n, g = s.length, b = o.length;
    if (g != b && !(v && b > g))
      return !1;
    var m = f.get(s), y = f.get(o);
    if (m && y)
      return m == o && y == s;
    var x = -1, q = !0, A = u & a ? new e() : void 0;
    for (f.set(s, o), f.set(o, s); ++x < g; ) {
      var C = s[x], I = o[x];
      if (c)
        var S = v ? c(I, C, x, o, s, f) : c(C, I, x, s, o, f);
      if (S !== void 0) {
        if (S)
          continue;
        q = !1;
        break;
      }
      if (A) {
        if (!r(o, function(O, j) {
          if (!t(A, j) && (C === O || l(C, O, u, c, f)))
            return A.push(j);
        })) {
          q = !1;
          break;
        }
      } else if (!(C === I || l(C, I, u, c, f))) {
        q = !1;
        break;
      }
    }
    return f.delete(s), f.delete(o), q;
  }
  return Ur = i, Ur;
}
var Kr, Ei;
function Bu() {
  if (Ei) return Kr;
  Ei = 1;
  var e = W(), r = e.Uint8Array;
  return Kr = r, Kr;
}
var Yr, xi;
function Lu() {
  if (xi) return Yr;
  xi = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return Yr = e, Yr;
}
var Vr, Ci;
function Gu() {
  if (Ci) return Vr;
  Ci = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a) {
      n[++t] = a;
    }), n;
  }
  return Vr = e, Vr;
}
var Wr, Pi;
function Hu() {
  if (Pi) return Wr;
  Pi = 1;
  var e = se(), r = Bu(), t = pe(), n = wo(), a = Lu(), i = Gu(), s = 1, o = 2, u = "[object Boolean]", c = "[object Date]", l = "[object Error]", f = "[object Map]", v = "[object Number]", g = "[object RegExp]", b = "[object Set]", m = "[object String]", y = "[object Symbol]", x = "[object ArrayBuffer]", q = "[object DataView]", A = e ? e.prototype : void 0, C = A ? A.valueOf : void 0;
  function I(S, O, j, F, G, P, L) {
    switch (j) {
      case q:
        if (S.byteLength != O.byteLength || S.byteOffset != O.byteOffset)
          return !1;
        S = S.buffer, O = O.buffer;
      case x:
        return !(S.byteLength != O.byteLength || !P(new r(S), new r(O)));
      case u:
      case c:
      case v:
        return t(+S, +O);
      case l:
        return S.name == O.name && S.message == O.message;
      case g:
      case m:
        return S == O + "";
      case f:
        var M = a;
      case b:
        var K = F & s;
        if (M || (M = i), S.size != O.size && !K)
          return !1;
        var p = L.get(S);
        if (p)
          return p == O;
        F |= o, L.set(S, O);
        var h = n(M(S), M(O), F, G, P, L);
        return L.delete(S), h;
      case y:
        if (C)
          return C.call(S) == C.call(O);
    }
    return !1;
  }
  return Wr = I, Wr;
}
var zr, Si;
function Io() {
  if (Si) return zr;
  Si = 1;
  function e(r, t) {
    for (var n = -1, a = t.length, i = r.length; ++n < a; )
      r[i + n] = t[n];
    return r;
  }
  return zr = e, zr;
}
var $r, Ai;
function Uu() {
  if (Ai) return $r;
  Ai = 1;
  var e = Io(), r = H();
  function t(n, a, i) {
    var s = a(n);
    return r(n) ? s : e(s, i(n));
  }
  return $r = t, $r;
}
var Jr, Oi;
function Ku() {
  if (Oi) return Jr;
  Oi = 1;
  function e() {
    return [];
  }
  return Jr = e, Jr;
}
var Xr, Ti;
function Yu() {
  if (Ti) return Xr;
  Ti = 1;
  var e = bo(), r = Ku(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(s) {
    return s == null ? [] : (s = Object(s), e(a(s), function(o) {
      return n.call(s, o);
    }));
  } : r;
  return Xr = i, Xr;
}
var Zr, wi;
function Vu() {
  if (wi) return Zr;
  wi = 1;
  var e = Uu(), r = Yu(), t = ve();
  function n(a) {
    return e(a, t, r);
  }
  return Zr = n, Zr;
}
var Qr, Ii;
function Wu() {
  if (Ii) return Qr;
  Ii = 1;
  var e = Vu(), r = 1, t = Object.prototype, n = t.hasOwnProperty;
  function a(i, s, o, u, c, l) {
    var f = o & r, v = e(i), g = v.length, b = e(s), m = b.length;
    if (g != m && !f)
      return !1;
    for (var y = g; y--; ) {
      var x = v[y];
      if (!(f ? x in s : n.call(s, x)))
        return !1;
    }
    var q = l.get(i), A = l.get(s);
    if (q && A)
      return q == s && A == i;
    var C = !0;
    l.set(i, s), l.set(s, i);
    for (var I = f; ++y < g; ) {
      x = v[y];
      var S = i[x], O = s[x];
      if (u)
        var j = f ? u(O, S, x, s, i, l) : u(S, O, x, i, s, l);
      if (!(j === void 0 ? S === O || c(S, O, o, u, l) : j)) {
        C = !1;
        break;
      }
      I || (I = x == "constructor");
    }
    if (C && !I) {
      var F = i.constructor, G = s.constructor;
      F != G && "constructor" in i && "constructor" in s && !(typeof F == "function" && F instanceof F && typeof G == "function" && G instanceof G) && (C = !1);
    }
    return l.delete(i), l.delete(s), C;
  }
  return Qr = a, Qr;
}
var et, Ni;
function zu() {
  if (Ni) return et;
  Ni = 1;
  var e = J(), r = W(), t = e(r, "DataView");
  return et = t, et;
}
var rt, Di;
function $u() {
  if (Di) return rt;
  Di = 1;
  var e = J(), r = W(), t = e(r, "Promise");
  return rt = t, rt;
}
var tt, ji;
function Ju() {
  if (ji) return tt;
  ji = 1;
  var e = J(), r = W(), t = e(r, "Set");
  return tt = t, tt;
}
var nt, Fi;
function Xu() {
  if (Fi) return nt;
  Fi = 1;
  var e = J(), r = W(), t = e(r, "WeakMap");
  return nt = t, nt;
}
var at, Mi;
function Zu() {
  if (Mi) return at;
  Mi = 1;
  var e = zu(), r = Kn(), t = $u(), n = Ju(), a = Xu(), i = oe(), s = So(), o = "[object Map]", u = "[object Object]", c = "[object Promise]", l = "[object Set]", f = "[object WeakMap]", v = "[object DataView]", g = s(e), b = s(r), m = s(t), y = s(n), x = s(a), q = i;
  return (e && q(new e(new ArrayBuffer(1))) != v || r && q(new r()) != o || t && q(t.resolve()) != c || n && q(new n()) != l || a && q(new a()) != f) && (q = function(A) {
    var C = i(A), I = C == u ? A.constructor : void 0, S = I ? s(I) : "";
    if (S)
      switch (S) {
        case g:
          return v;
        case b:
          return o;
        case m:
          return c;
        case y:
          return l;
        case x:
          return f;
      }
    return C;
  }), at = q, at;
}
var it, ki;
function Qu() {
  if (ki) return it;
  ki = 1;
  var e = Ao(), r = wo(), t = Hu(), n = Wu(), a = Zu(), i = H(), s = Ro(), o = Eo(), u = 1, c = "[object Arguments]", l = "[object Array]", f = "[object Object]", v = Object.prototype, g = v.hasOwnProperty;
  function b(m, y, x, q, A, C) {
    var I = i(m), S = i(y), O = I ? l : a(m), j = S ? l : a(y);
    O = O == c ? f : O, j = j == c ? f : j;
    var F = O == f, G = j == f, P = O == j;
    if (P && s(m)) {
      if (!s(y))
        return !1;
      I = !0, F = !1;
    }
    if (P && !F)
      return C || (C = new e()), I || o(m) ? r(m, y, x, q, A, C) : t(m, y, O, x, q, A, C);
    if (!(x & u)) {
      var L = F && g.call(m, "__wrapped__"), M = G && g.call(y, "__wrapped__");
      if (L || M) {
        var K = L ? m.value() : m, p = M ? y.value() : y;
        return C || (C = new e()), A(K, p, x, q, C);
      }
    }
    return P ? (C || (C = new e()), n(m, y, x, q, A, C)) : !1;
  }
  return it = b, it;
}
var st, Bi;
function No() {
  if (Bi) return st;
  Bi = 1;
  var e = Qu(), r = Z();
  function t(n, a, i, s, o) {
    return n === a ? !0 : n == null || a == null || !r(n) && !r(a) ? n !== n && a !== a : e(n, a, i, s, t, o);
  }
  return st = t, st;
}
var ot, Li;
function ec() {
  if (Li) return ot;
  Li = 1;
  var e = Ao(), r = No(), t = 1, n = 2;
  function a(i, s, o, u) {
    var c = o.length, l = c, f = !u;
    if (i == null)
      return !l;
    for (i = Object(i); c--; ) {
      var v = o[c];
      if (f && v[2] ? v[1] !== i[v[0]] : !(v[0] in i))
        return !1;
    }
    for (; ++c < l; ) {
      v = o[c];
      var g = v[0], b = i[g], m = v[1];
      if (f && v[2]) {
        if (b === void 0 && !(g in i))
          return !1;
      } else {
        var y = new e();
        if (u)
          var x = u(b, m, g, i, s, y);
        if (!(x === void 0 ? r(m, b, t | n, u, y) : x))
          return !1;
      }
    }
    return !0;
  }
  return ot = a, ot;
}
var ut, Gi;
function Do() {
  if (Gi) return ut;
  Gi = 1;
  var e = Q();
  function r(t) {
    return t === t && !e(t);
  }
  return ut = r, ut;
}
var ct, Hi;
function rc() {
  if (Hi) return ct;
  Hi = 1;
  var e = Do(), r = ve();
  function t(n) {
    for (var a = r(n), i = a.length; i--; ) {
      var s = a[i], o = n[s];
      a[i] = [s, o, e(o)];
    }
    return a;
  }
  return ct = t, ct;
}
var lt, Ui;
function jo() {
  if (Ui) return lt;
  Ui = 1;
  function e(r, t) {
    return function(n) {
      return n == null ? !1 : n[r] === t && (t !== void 0 || r in Object(n));
    };
  }
  return lt = e, lt;
}
var ft, Ki;
function tc() {
  if (Ki) return ft;
  Ki = 1;
  var e = ec(), r = rc(), t = jo();
  function n(a) {
    var i = r(a);
    return i.length == 1 && i[0][2] ? t(i[0][0], i[0][1]) : function(s) {
      return s === a || e(s, a, i);
    };
  }
  return ft = n, ft;
}
var dt, Yi;
function ue() {
  if (Yi) return dt;
  Yi = 1;
  var e = oe(), r = Z(), t = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || r(a) && e(a) == t;
  }
  return dt = n, dt;
}
var ht, Vi;
function Vn() {
  if (Vi) return ht;
  Vi = 1;
  var e = H(), r = ue(), t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, s) {
    if (e(i))
      return !1;
    var o = typeof i;
    return o == "number" || o == "symbol" || o == "boolean" || i == null || r(i) ? !0 : n.test(i) || !t.test(i) || s != null && i in Object(s);
  }
  return ht = a, ht;
}
var vt, Wi;
function nc() {
  if (Wi) return vt;
  Wi = 1;
  var e = Yn(), r = "Expected a function";
  function t(n, a) {
    if (typeof n != "function" || a != null && typeof a != "function")
      throw new TypeError(r);
    var i = function() {
      var s = arguments, o = a ? a.apply(this, s) : s[0], u = i.cache;
      if (u.has(o))
        return u.get(o);
      var c = n.apply(this, s);
      return i.cache = u.set(o, c) || u, c;
    };
    return i.cache = new (t.Cache || e)(), i;
  }
  return t.Cache = e, vt = t, vt;
}
var pt, zi;
function ac() {
  if (zi) return pt;
  zi = 1;
  var e = nc(), r = 500;
  function t(n) {
    var a = e(n, function(s) {
      return i.size === r && i.clear(), s;
    }), i = a.cache;
    return a;
  }
  return pt = t, pt;
}
var _t, $i;
function ic() {
  if ($i) return _t;
  $i = 1;
  var e = ac(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, t = /\\(\\)?/g, n = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(r, function(s, o, u, c) {
      i.push(u ? c.replace(t, "$1") : o || s);
    }), i;
  });
  return _t = n, _t;
}
var gt, Ji;
function be() {
  if (Ji) return gt;
  Ji = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = Array(a); ++n < a; )
      i[n] = t(r[n], n, r);
    return i;
  }
  return gt = e, gt;
}
var mt, Xi;
function sc() {
  if (Xi) return mt;
  Xi = 1;
  var e = se(), r = be(), t = H(), n = ue(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
  function s(o) {
    if (typeof o == "string")
      return o;
    if (t(o))
      return r(o, s) + "";
    if (n(o))
      return i ? i.call(o) : "";
    var u = o + "";
    return u == "0" && 1 / o == -1 / 0 ? "-0" : u;
  }
  return mt = s, mt;
}
var yt, Zi;
function oc() {
  if (Zi) return yt;
  Zi = 1;
  var e = sc();
  function r(t) {
    return t == null ? "" : e(t);
  }
  return yt = r, yt;
}
var bt, Qi;
function Fo() {
  if (Qi) return bt;
  Qi = 1;
  var e = H(), r = Vn(), t = ic(), n = oc();
  function a(i, s) {
    return e(i) ? i : r(i, s) ? [i] : t(n(i));
  }
  return bt = a, bt;
}
var qt, es;
function qe() {
  if (es) return qt;
  es = 1;
  var e = ue();
  function r(t) {
    if (typeof t == "string" || e(t))
      return t;
    var n = t + "";
    return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
  }
  return qt = r, qt;
}
var Rt, rs;
function Wn() {
  if (rs) return Rt;
  rs = 1;
  var e = Fo(), r = qe();
  function t(n, a) {
    a = e(a, n);
    for (var i = 0, s = a.length; n != null && i < s; )
      n = n[r(a[i++])];
    return i && i == s ? n : void 0;
  }
  return Rt = t, Rt;
}
var Et, ts;
function uc() {
  if (ts) return Et;
  ts = 1;
  var e = Wn();
  function r(t, n, a) {
    var i = t == null ? void 0 : e(t, n);
    return i === void 0 ? a : i;
  }
  return Et = r, Et;
}
var xt, ns;
function cc() {
  if (ns) return xt;
  ns = 1;
  function e(r, t) {
    return r != null && t in Object(r);
  }
  return xt = e, xt;
}
var Ct, as;
function lc() {
  if (as) return Ct;
  as = 1;
  var e = Fo(), r = Bn(), t = H(), n = Ln(), a = Gn(), i = qe();
  function s(o, u, c) {
    u = e(u, o);
    for (var l = -1, f = u.length, v = !1; ++l < f; ) {
      var g = i(u[l]);
      if (!(v = o != null && c(o, g)))
        break;
      o = o[g];
    }
    return v || ++l != f ? v : (f = o == null ? 0 : o.length, !!f && a(f) && n(g, f) && (t(o) || r(o)));
  }
  return Ct = s, Ct;
}
var Pt, is;
function fc() {
  if (is) return Pt;
  is = 1;
  var e = cc(), r = lc();
  function t(n, a) {
    return n != null && r(n, a, e);
  }
  return Pt = t, Pt;
}
var St, ss;
function dc() {
  if (ss) return St;
  ss = 1;
  var e = No(), r = uc(), t = fc(), n = Vn(), a = Do(), i = jo(), s = qe(), o = 1, u = 2;
  function c(l, f) {
    return n(l) && a(f) ? i(s(l), f) : function(v) {
      var g = r(v, l);
      return g === void 0 && g === f ? t(v, l) : e(f, g, o | u);
    };
  }
  return St = c, St;
}
var At, os;
function ce() {
  if (os) return At;
  os = 1;
  function e(r) {
    return r;
  }
  return At = e, At;
}
var Ot, us;
function hc() {
  if (us) return Ot;
  us = 1;
  function e(r) {
    return function(t) {
      return t?.[r];
    };
  }
  return Ot = e, Ot;
}
var Tt, cs;
function vc() {
  if (cs) return Tt;
  cs = 1;
  var e = Wn();
  function r(t) {
    return function(n) {
      return e(n, t);
    };
  }
  return Tt = r, Tt;
}
var wt, ls;
function pc() {
  if (ls) return wt;
  ls = 1;
  var e = hc(), r = vc(), t = Vn(), n = qe();
  function a(i) {
    return t(i) ? e(n(i)) : r(i);
  }
  return wt = a, wt;
}
var It, fs;
function le() {
  if (fs) return It;
  fs = 1;
  var e = tc(), r = dc(), t = ce(), n = H(), a = pc();
  function i(s) {
    return typeof s == "function" ? s : s == null ? t : typeof s == "object" ? n(s) ? r(s[0], s[1]) : e(s) : a(s);
  }
  return It = i, It;
}
var Nt, ds;
function _c() {
  if (ds) return Nt;
  ds = 1;
  var e = bo(), r = cu(), t = le(), n = H();
  function a(i, s) {
    var o = n(i) ? e : r;
    return o(i, t(s, 3));
  }
  return Nt = a, Nt;
}
var gc = _c();
const mc = /* @__PURE__ */ V(gc);
var Dt, hs;
function Mo() {
  if (hs) return Dt;
  hs = 1;
  var e = Un(), r = $();
  function t(n, a) {
    var i = -1, s = r(n) ? Array(n.length) : [];
    return e(n, function(o, u, c) {
      s[++i] = a(o, u, c);
    }), s;
  }
  return Dt = t, Dt;
}
var jt, vs;
function yc() {
  if (vs) return jt;
  vs = 1;
  var e = be(), r = le(), t = Mo(), n = H();
  function a(i, s) {
    var o = n(i) ? e : t;
    return o(i, r(s, 3));
  }
  return jt = a, jt;
}
var bc = yc();
const qc = /* @__PURE__ */ V(bc);
var Ft, ps;
function Rc() {
  if (ps) return Ft;
  ps = 1;
  var e = le(), r = $(), t = ve();
  function n(a) {
    return function(i, s, o) {
      var u = Object(i);
      if (!r(i)) {
        var c = e(s, 3);
        i = t(i), s = function(f) {
          return c(u[f], f, u);
        };
      }
      var l = a(i, s, o);
      return l > -1 ? u[c ? i[l] : l] : void 0;
    };
  }
  return Ft = n, Ft;
}
var Mt, _s;
function ko() {
  if (_s) return Mt;
  _s = 1;
  function e(r, t, n, a) {
    for (var i = r.length, s = n + (a ? 1 : -1); a ? s-- : ++s < i; )
      if (t(r[s], s, r))
        return s;
    return -1;
  }
  return Mt = e, Mt;
}
var kt, gs;
function Ec() {
  if (gs) return kt;
  gs = 1;
  var e = /\s/;
  function r(t) {
    for (var n = t.length; n-- && e.test(t.charAt(n)); )
      ;
    return n;
  }
  return kt = r, kt;
}
var Bt, ms;
function xc() {
  if (ms) return Bt;
  ms = 1;
  var e = Ec(), r = /^\s+/;
  function t(n) {
    return n && n.slice(0, e(n) + 1).replace(r, "");
  }
  return Bt = t, Bt;
}
var Lt, ys;
function Cc() {
  if (ys) return Lt;
  ys = 1;
  var e = xc(), r = Q(), t = ue(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, s = /^0o[0-7]+$/i, o = parseInt;
  function u(c) {
    if (typeof c == "number")
      return c;
    if (t(c))
      return n;
    if (r(c)) {
      var l = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = r(l) ? l + "" : l;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var f = i.test(c);
    return f || s.test(c) ? o(c.slice(2), f ? 2 : 8) : a.test(c) ? n : +c;
  }
  return Lt = u, Lt;
}
var Gt, bs;
function Bo() {
  if (bs) return Gt;
  bs = 1;
  var e = Cc(), r = 1 / 0, t = 17976931348623157e292;
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
var Ht, qs;
function Pc() {
  if (qs) return Ht;
  qs = 1;
  var e = Bo();
  function r(t) {
    var n = e(t), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return Ht = r, Ht;
}
var Ut, Rs;
function Sc() {
  if (Rs) return Ut;
  Rs = 1;
  var e = ko(), r = le(), t = Pc(), n = Math.max;
  function a(i, s, o) {
    var u = i == null ? 0 : i.length;
    if (!u)
      return -1;
    var c = o == null ? 0 : t(o);
    return c < 0 && (c = n(u + c, 0)), e(i, r(s, 3), c);
  }
  return Ut = a, Ut;
}
var Kt, Es;
function Lo() {
  if (Es) return Kt;
  Es = 1;
  var e = Rc(), r = Sc(), t = e(r);
  return Kt = t, Kt;
}
var Ac = Lo();
const Oc = /* @__PURE__ */ V(Ac);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Yt, xs;
function Tc() {
  if (xs) return Yt;
  xs = 1;
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
      for (var s = {}, o = 0; o < 10; o++)
        s["_" + String.fromCharCode(o)] = o;
      var u = Object.getOwnPropertyNames(s).map(function(l) {
        return s[l];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        c[l] = l;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Yt = a() ? Object.assign : function(i, s) {
    for (var o, u = n(i), c, l = 1; l < arguments.length; l++) {
      o = Object(arguments[l]);
      for (var f in o)
        r.call(o, f) && (u[f] = o[f]);
      if (e) {
        c = e(o);
        for (var v = 0; v < c.length; v++)
          t.call(o, c[v]) && (u[c[v]] = o[c[v]]);
      }
    }
    return u;
  }, Yt;
}
var Vt, Cs;
function wc() {
  if (Cs) return Vt;
  Cs = 1;
  var e = Tc(), r = {};
  process.env.NODE_ENV !== "production" && Object.freeze(r);
  var t = function(f) {
  };
  process.env.NODE_ENV !== "production" && (t = function(f) {
    if (f === void 0)
      throw new Error("invariant requires an error message argument");
  });
  function n(l, f, v, g, b, m, y, x) {
    if (t(f), !l) {
      var q;
      if (f === void 0)
        q = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var A = [v, g, b, m, y, x], C = 0;
        q = new Error(f.replace(/%s/g, function() {
          return A[C++];
        })), q.name = "Invariant Violation";
      }
      throw q.framesToPop = 1, q;
    }
  }
  var a = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var i = function(f) {
      for (var v = arguments.length, g = Array(v > 1 ? v - 1 : 0), b = 1; b < v; b++)
        g[b - 1] = arguments[b];
      var m = 0, y = "Warning: " + f.replace(/%s/g, function() {
        return g[m++];
      });
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
    a = function(f, v) {
      if (v === void 0)
        throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
      if (v.indexOf("Failed Composite propType: ") !== 0 && !f) {
        for (var g = arguments.length, b = Array(g > 2 ? g - 2 : 0), m = 2; m < g; m++)
          b[m - 2] = arguments[m];
        i.apply(void 0, [v].concat(b));
      }
    };
  }
  var s = "mixins";
  function o(l) {
    return l;
  }
  var u;
  process.env.NODE_ENV !== "production" ? u = {
    prop: "prop",
    context: "context",
    childContext: "child context"
  } : u = {};
  function c(l, f, v) {
    var g = [], b = {
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
      /**
       * Replacement for (deprecated) `componentWillMount`.
       *
       * @optional
       */
      UNSAFE_componentWillMount: "DEFINE_MANY",
      /**
       * Replacement for (deprecated) `componentWillReceiveProps`.
       *
       * @optional
       */
      UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
      /**
       * Replacement for (deprecated) `componentWillUpdate`.
       *
       * @optional
       */
      UNSAFE_componentWillUpdate: "DEFINE_MANY",
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
    }, m = {
      /**
       * This method is invoked after a component is instantiated and when it
       * receives new props. Return an object to update state in response to
       * prop changes. Return null to indicate no change to state.
       *
       * If an object is returned, its keys will be merged into the existing state.
       *
       * @return {object || null}
       * @optional
       */
      getDerivedStateFromProps: "DEFINE_MANY_MERGED"
    }, y = {
      displayName: function(p, h) {
        p.displayName = h;
      },
      mixins: function(p, h) {
        if (h)
          for (var R = 0; R < h.length; R++)
            A(p, h[R]);
      },
      childContextTypes: function(p, h) {
        process.env.NODE_ENV !== "production" && x(p, h, "childContext"), p.childContextTypes = e(
          {},
          p.childContextTypes,
          h
        );
      },
      contextTypes: function(p, h) {
        process.env.NODE_ENV !== "production" && x(p, h, "context"), p.contextTypes = e(
          {},
          p.contextTypes,
          h
        );
      },
      /**
       * Special case getDefaultProps which should move into statics but requires
       * automatic merging.
       */
      getDefaultProps: function(p, h) {
        p.getDefaultProps ? p.getDefaultProps = S(
          p.getDefaultProps,
          h
        ) : p.getDefaultProps = h;
      },
      propTypes: function(p, h) {
        process.env.NODE_ENV !== "production" && x(p, h, "prop"), p.propTypes = e({}, p.propTypes, h);
      },
      statics: function(p, h) {
        C(p, h);
      },
      autobind: function() {
      }
    };
    function x(p, h, R) {
      for (var D in h)
        h.hasOwnProperty(D) && process.env.NODE_ENV !== "production" && a(
          typeof h[D] == "function",
          "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",
          p.displayName || "ReactClass",
          u[R],
          D
        );
    }
    function q(p, h) {
      var R = b.hasOwnProperty(h) ? b[h] : null;
      L.hasOwnProperty(h) && n(
        R === "OVERRIDE_BASE",
        "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",
        h
      ), p && n(
        R === "DEFINE_MANY" || R === "DEFINE_MANY_MERGED",
        "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
        h
      );
    }
    function A(p, h) {
      if (!h) {
        if (process.env.NODE_ENV !== "production") {
          var R = typeof h, D = R === "object" && h !== null;
          process.env.NODE_ENV !== "production" && a(
            D,
            "%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.",
            p.displayName || "ReactClass",
            h === null ? null : R
          );
        }
        return;
      }
      n(
        typeof h != "function",
        "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
      ), n(
        !f(h),
        "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
      );
      var N = p.prototype, d = N.__reactAutoBindPairs;
      h.hasOwnProperty(s) && y.mixins(p, h.mixins);
      for (var _ in h)
        if (h.hasOwnProperty(_) && _ !== s) {
          var T = h[_], w = N.hasOwnProperty(_);
          if (q(w, _), y.hasOwnProperty(_))
            y[_](p, T);
          else {
            var k = b.hasOwnProperty(_), U = typeof T == "function", ee = U && !k && !w && h.autobind !== !1;
            if (ee)
              d.push(_, T), N[_] = T;
            else if (w) {
              var Y = b[_];
              n(
                k && (Y === "DEFINE_MANY_MERGED" || Y === "DEFINE_MANY"),
                "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",
                Y,
                _
              ), Y === "DEFINE_MANY_MERGED" ? N[_] = S(N[_], T) : Y === "DEFINE_MANY" && (N[_] = O(N[_], T));
            } else
              N[_] = T, process.env.NODE_ENV !== "production" && typeof T == "function" && h.displayName && (N[_].displayName = h.displayName + "_" + _);
          }
        }
    }
    function C(p, h) {
      if (h)
        for (var R in h) {
          var D = h[R];
          if (h.hasOwnProperty(R)) {
            var N = R in y;
            n(
              !N,
              'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
              R
            );
            var d = R in p;
            if (d) {
              var _ = m.hasOwnProperty(R) ? m[R] : null;
              n(
                _ === "DEFINE_MANY_MERGED",
                "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
                R
              ), p[R] = S(p[R], D);
              return;
            }
            p[R] = D;
          }
        }
    }
    function I(p, h) {
      n(
        p && h && typeof p == "object" && typeof h == "object",
        "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."
      );
      for (var R in h)
        h.hasOwnProperty(R) && (n(
          p[R] === void 0,
          "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",
          R
        ), p[R] = h[R]);
      return p;
    }
    function S(p, h) {
      return function() {
        var D = p.apply(this, arguments), N = h.apply(this, arguments);
        if (D == null)
          return N;
        if (N == null)
          return D;
        var d = {};
        return I(d, D), I(d, N), d;
      };
    }
    function O(p, h) {
      return function() {
        p.apply(this, arguments), h.apply(this, arguments);
      };
    }
    function j(p, h) {
      var R = h.bind(p);
      if (process.env.NODE_ENV !== "production") {
        R.__reactBoundContext = p, R.__reactBoundMethod = h, R.__reactBoundArguments = null;
        var D = p.constructor.displayName, N = R.bind;
        R.bind = function(d) {
          for (var _ = arguments.length, T = Array(_ > 1 ? _ - 1 : 0), w = 1; w < _; w++)
            T[w - 1] = arguments[w];
          if (d !== p && d !== null)
            process.env.NODE_ENV !== "production" && a(
              !1,
              "bind(): React component methods may only be bound to the component instance. See %s",
              D
            );
          else if (!T.length)
            return process.env.NODE_ENV !== "production" && a(
              !1,
              "bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",
              D
            ), R;
          var k = N.apply(R, arguments);
          return k.__reactBoundContext = p, k.__reactBoundMethod = h, k.__reactBoundArguments = T, k;
        };
      }
      return R;
    }
    function F(p) {
      for (var h = p.__reactAutoBindPairs, R = 0; R < h.length; R += 2) {
        var D = h[R], N = h[R + 1];
        p[D] = j(p, N);
      }
    }
    var G = {
      componentDidMount: function() {
        this.__isMounted = !0;
      }
    }, P = {
      componentWillUnmount: function() {
        this.__isMounted = !1;
      }
    }, L = {
      /**
       * TODO: This will be deprecated because state should always keep a consistent
       * type signature and the only use case for this, is to avoid that.
       */
      replaceState: function(p, h) {
        this.updater.enqueueReplaceState(this, p, h);
      },
      /**
       * Checks whether or not this composite component is mounted.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function() {
        return process.env.NODE_ENV !== "production" && (a(
          this.__didWarnIsMounted,
          "%s: isMounted is deprecated. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
          this.constructor && this.constructor.displayName || this.name || "Component"
        ), this.__didWarnIsMounted = !0), !!this.__isMounted;
      }
    }, M = function() {
    };
    e(
      M.prototype,
      l.prototype,
      L
    );
    function K(p) {
      var h = function(D, N, d) {
        process.env.NODE_ENV !== "production" && a(
          this instanceof h,
          "Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"
        ), this.__reactAutoBindPairs.length && F(this), this.props = D, this.context = N, this.refs = r, this.updater = d || v, this.state = null;
        var _ = this.getInitialState ? this.getInitialState() : null;
        process.env.NODE_ENV !== "production" && _ === void 0 && this.getInitialState._isMockFunction && (_ = null), n(
          typeof _ == "object" && !Array.isArray(_),
          "%s.getInitialState(): must return an object or null",
          h.displayName || "ReactCompositeComponent"
        ), this.state = _;
      };
      h.prototype = new M(), h.prototype.constructor = h, h.prototype.__reactAutoBindPairs = [], g.forEach(A.bind(null, h)), A(h, G), A(h, p), A(h, P), h.getDefaultProps && (h.defaultProps = h.getDefaultProps()), process.env.NODE_ENV !== "production" && (h.getDefaultProps && (h.getDefaultProps.isReactClassApproved = {}), h.prototype.getInitialState && (h.prototype.getInitialState.isReactClassApproved = {})), n(
        h.prototype.render,
        "createClass(...): Class specification must implement a `render` method."
      ), process.env.NODE_ENV !== "production" && (a(
        !h.prototype.componentShouldUpdate,
        "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
        p.displayName || "A component"
      ), a(
        !h.prototype.componentWillRecieveProps,
        "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
        p.displayName || "A component"
      ), a(
        !h.prototype.UNSAFE_componentWillRecieveProps,
        "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
        p.displayName || "A component"
      ));
      for (var R in b)
        h.prototype[R] || (h.prototype[R] = null);
      return h;
    }
    return K;
  }
  return Vt = c, Vt;
}
var Wt, Ps;
function Ic() {
  if (Ps) return Wt;
  Ps = 1;
  var e = kn, r = wc();
  if (typeof e > "u")
    throw Error(
      "create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class."
    );
  var t = new e.Component().updater;
  return Wt = r(
    e.Component,
    e.isValidElement,
    t
  ), Wt;
}
var Nc = Ic();
const fe = /* @__PURE__ */ V(Nc);
var zt, Ss;
function Go() {
  if (Ss) return zt;
  Ss = 1;
  var e = J(), r = function() {
    try {
      var t = e(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return zt = r, zt;
}
var $t, As;
function Ho() {
  if (As) return $t;
  As = 1;
  var e = Go();
  function r(t, n, a) {
    n == "__proto__" && e ? e(t, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : t[n] = a;
  }
  return $t = r, $t;
}
var Jt, Os;
function Dc() {
  if (Os) return Jt;
  Os = 1;
  var e = Ho(), r = pe(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i, s, o) {
    var u = i[s];
    (!(n.call(i, s) && r(u, o)) || o === void 0 && !(s in i)) && e(i, s, o);
  }
  return Jt = a, Jt;
}
var Xt, Ts;
function jc() {
  if (Ts) return Xt;
  Ts = 1;
  var e = Dc(), r = Ho();
  function t(n, a, i, s) {
    var o = !i;
    i || (i = {});
    for (var u = -1, c = a.length; ++u < c; ) {
      var l = a[u], f = s ? s(i[l], n[l], l, i, n) : void 0;
      f === void 0 && (f = n[l]), o ? r(i, l, f) : e(i, l, f);
    }
    return i;
  }
  return Xt = t, Xt;
}
var Zt, ws;
function Fc() {
  if (ws) return Zt;
  ws = 1;
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
  return Zt = e, Zt;
}
var Qt, Is;
function Mc() {
  if (Is) return Qt;
  Is = 1;
  var e = Fc(), r = Math.max;
  function t(n, a, i) {
    return a = r(a === void 0 ? n.length - 1 : a, 0), function() {
      for (var s = arguments, o = -1, u = r(s.length - a, 0), c = Array(u); ++o < u; )
        c[o] = s[a + o];
      o = -1;
      for (var l = Array(a + 1); ++o < a; )
        l[o] = s[o];
      return l[a] = i(c), e(n, this, l);
    };
  }
  return Qt = t, Qt;
}
var en, Ns;
function kc() {
  if (Ns) return en;
  Ns = 1;
  function e(r) {
    return function() {
      return r;
    };
  }
  return en = e, en;
}
var rn, Ds;
function Bc() {
  if (Ds) return rn;
  Ds = 1;
  var e = kc(), r = Go(), t = ce(), n = r ? function(a, i) {
    return r(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : t;
  return rn = n, rn;
}
var tn, js;
function Lc() {
  if (js) return tn;
  js = 1;
  var e = 800, r = 16, t = Date.now;
  function n(a) {
    var i = 0, s = 0;
    return function() {
      var o = t(), u = r - (o - s);
      if (s = o, u > 0) {
        if (++i >= e)
          return arguments[0];
      } else
        i = 0;
      return a.apply(void 0, arguments);
    };
  }
  return tn = n, tn;
}
var nn, Fs;
function Gc() {
  if (Fs) return nn;
  Fs = 1;
  var e = Bc(), r = Lc(), t = r(e);
  return nn = t, nn;
}
var an, Ms;
function zn() {
  if (Ms) return an;
  Ms = 1;
  var e = ce(), r = Mc(), t = Gc();
  function n(a, i) {
    return t(r(a, i, e), a + "");
  }
  return an = n, an;
}
var sn, ks;
function $n() {
  if (ks) return sn;
  ks = 1;
  var e = pe(), r = $(), t = Ln(), n = Q();
  function a(i, s, o) {
    if (!n(o))
      return !1;
    var u = typeof s;
    return (u == "number" ? r(o) && t(s, o.length) : u == "string" && s in o) ? e(o[s], i) : !1;
  }
  return sn = a, sn;
}
var on, Bs;
function Hc() {
  if (Bs) return on;
  Bs = 1;
  var e = zn(), r = $n();
  function t(n) {
    return e(function(a, i) {
      var s = -1, o = i.length, u = o > 1 ? i[o - 1] : void 0, c = o > 2 ? i[2] : void 0;
      for (u = n.length > 3 && typeof u == "function" ? (o--, u) : void 0, c && r(i[0], i[1], c) && (u = o < 3 ? void 0 : u, o = 1), a = Object(a); ++s < o; ) {
        var l = i[s];
        l && n(a, l, s, u);
      }
      return a;
    });
  }
  return on = t, on;
}
var un, Ls;
function Uc() {
  if (Ls) return un;
  Ls = 1;
  function e(r) {
    var t = [];
    if (r != null)
      for (var n in Object(r))
        t.push(n);
    return t;
  }
  return un = e, un;
}
var cn, Gs;
function Kc() {
  if (Gs) return cn;
  Gs = 1;
  var e = Q(), r = Co(), t = Uc(), n = Object.prototype, a = n.hasOwnProperty;
  function i(s) {
    if (!e(s))
      return t(s);
    var o = r(s), u = [];
    for (var c in s)
      c == "constructor" && (o || !a.call(s, c)) || u.push(c);
    return u;
  }
  return cn = i, cn;
}
var ln, Hs;
function Yc() {
  if (Hs) return ln;
  Hs = 1;
  var e = xo(), r = Kc(), t = $();
  function n(a) {
    return t(a) ? e(a, !0) : r(a);
  }
  return ln = n, ln;
}
var fn, Us;
function Vc() {
  if (Us) return fn;
  Us = 1;
  var e = jc(), r = Hc(), t = Yc(), n = r(function(a, i) {
    e(i, t(i), a);
  });
  return fn = n, fn;
}
var dn, Ks;
function Wc() {
  return Ks || (Ks = 1, dn = Vc()), dn;
}
var hn, Ys;
function zc() {
  if (Ys) return hn;
  Ys = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a && t(r[n], n, r) !== !1; )
      ;
    return r;
  }
  return hn = e, hn;
}
var vn, Vs;
function $c() {
  if (Vs) return vn;
  Vs = 1;
  var e = ce();
  function r(t) {
    return typeof t == "function" ? t : e;
  }
  return vn = r, vn;
}
var pn, Ws;
function Jc() {
  if (Ws) return pn;
  Ws = 1;
  var e = zc(), r = Un(), t = $c(), n = H();
  function a(i, s) {
    var o = n(i) ? e : r;
    return o(i, t(s));
  }
  return pn = a, pn;
}
var _n, zs;
function Xc() {
  return zs || (zs = 1, _n = Jc()), _n;
}
var gn, $s;
function Zc() {
  if ($s) return gn;
  $s = 1;
  var e = se(), r = Bn(), t = H(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return t(i) || r(i) || !!(n && i && i[n]);
  }
  return gn = a, gn;
}
var mn, Js;
function Qc() {
  if (Js) return mn;
  Js = 1;
  var e = Io(), r = Zc();
  function t(n, a, i, s, o) {
    var u = -1, c = n.length;
    for (i || (i = r), o || (o = []); ++u < c; ) {
      var l = n[u];
      a > 0 && i(l) ? a > 1 ? t(l, a - 1, i, s, o) : e(o, l) : s || (o[o.length] = l);
    }
    return o;
  }
  return mn = t, mn;
}
var yn, Xs;
function el() {
  if (Xs) return yn;
  Xs = 1;
  function e(r, t) {
    var n = r.length;
    for (r.sort(t); n--; )
      r[n] = r[n].value;
    return r;
  }
  return yn = e, yn;
}
var bn, Zs;
function rl() {
  if (Zs) return bn;
  Zs = 1;
  var e = ue();
  function r(t, n) {
    if (t !== n) {
      var a = t !== void 0, i = t === null, s = t === t, o = e(t), u = n !== void 0, c = n === null, l = n === n, f = e(n);
      if (!c && !f && !o && t > n || o && u && l && !c && !f || i && u && l || !a && l || !s)
        return 1;
      if (!i && !o && !f && t < n || f && a && s && !i && !o || c && a && s || !u && s || !l)
        return -1;
    }
    return 0;
  }
  return bn = r, bn;
}
var qn, Qs;
function tl() {
  if (Qs) return qn;
  Qs = 1;
  var e = rl();
  function r(t, n, a) {
    for (var i = -1, s = t.criteria, o = n.criteria, u = s.length, c = a.length; ++i < u; ) {
      var l = e(s[i], o[i]);
      if (l) {
        if (i >= c)
          return l;
        var f = a[i];
        return l * (f == "desc" ? -1 : 1);
      }
    }
    return t.index - n.index;
  }
  return qn = r, qn;
}
var Rn, eo;
function nl() {
  if (eo) return Rn;
  eo = 1;
  var e = be(), r = Wn(), t = le(), n = Mo(), a = el(), i = Hn(), s = tl(), o = ce(), u = H();
  function c(l, f, v) {
    f.length ? f = e(f, function(m) {
      return u(m) ? function(y) {
        return r(y, m.length === 1 ? m[0] : m);
      } : m;
    }) : f = [o];
    var g = -1;
    f = e(f, i(t));
    var b = n(l, function(m, y, x) {
      var q = e(f, function(A) {
        return A(m);
      });
      return { criteria: q, index: ++g, value: m };
    });
    return a(b, function(m, y) {
      return s(m, y, v);
    });
  }
  return Rn = c, Rn;
}
var En, ro;
function al() {
  if (ro) return En;
  ro = 1;
  var e = Qc(), r = nl(), t = zn(), n = $n(), a = t(function(i, s) {
    if (i == null)
      return [];
    var o = s.length;
    return o > 1 && n(i, s[0], s[1]) ? s = [] : o > 2 && n(s[0], s[1], s[2]) && (s = [s[0]]), r(i, e(s, 1), []);
  });
  return En = a, En;
}
var xn, to;
function il() {
  if (to) return xn;
  to = 1;
  var e = {
    extend: Wc(),
    each: Xc(),
    sortBy: al(),
    find: Lo()
  };
  xn = function(a) {
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
    var i = this.activeDimensions, s = this.filter, o = this.reduce, u = {}, c = {};
    return this.rows.forEach(function(l) {
      var f = a.createSetKeys(i, l), v = t(f[f.length - 1]);
      if (!(s && !s(v))) {
        var g = u;
        f.forEach(function(b, m) {
          g[b] || (g[b] = { value: {}, subDimensions: {}, key: b });
          var y = g[b].value;
          if (s || !a.cache[b]) {
            s || (c[b] = y), e.extend(y, o(l, y));
            var x = t(b);
            e.extend(y, x);
          } else
            g[b].value = a.cache[b];
          g = g[b].subDimensions;
        });
      }
    }), e.each(c, function(l, f) {
      a.cache[f] = l;
    }), u;
  }, r.prototype.parseResults = function(a, o) {
    var s = this, o = o || 0, u = [], c = e.sortBy(a, this.getSortValue.bind(this));
    return this.sortDir === "desc" && c.reverse(), e.each(c, function(l) {
      var f = l.value;
      f._level = o, f._key = l.key;
      var v = Object.keys(l.subDimensions).length;
      if (s.compact && v == 1 || u.push(f), v) {
        var g = s.compact && v == 1 ? o : o + 1, b = s.parseResults(l.subDimensions, g);
        b.forEach(function(m) {
          u.push(m);
        });
      }
    }), u;
  }, r.prototype.getColumns = function() {
    var a = [];
    return this.dimensions.forEach(function(i) {
      a.push({ type: "dimension", title: i, value: i });
    }), a;
  }, r.prototype.createSetKeys = function(a, i) {
    for (var s = [], o = 0; o < a.length; o++) {
      var u = a.slice(0, o + 1);
      s.push(this.createSetKey(u, i));
    }
    return s;
  }, r.prototype.createSetKey = function(a, i) {
    var s = this, o = "";
    return e.sortBy(a).forEach(function(u) {
      var c = s.findDimension(u);
      o += [u, n(c, i)].join("ÿ") + "ÿ";
    }), o;
  }, r.prototype.findDimension = function(a) {
    return e.find(this.dimensions, function(i) {
      return i.title === a;
    });
  }, r.prototype.getSortValue = function(a) {
    var i = this.sortBy, s = this.getColumns(), o = e.find(s, function(c) {
      return c.title === i;
    }) || i, u = n(o, a.value);
    return typeof u > "u" ? a.key : !isNaN(parseFloat(u)) && isFinite(u) ? +u : typeof u == "string" ? u.toLowerCase() : u;
  };
  function t(a) {
    for (var i = {}, s = a.split("ÿ"), o = 0; o < s.length; o += 2) {
      var u = s[o], c = s[o + 1];
      u && (i[u] = c);
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
  return xn;
}
var sl = il();
const no = /* @__PURE__ */ V(sl);
var Cn, ao;
function ol() {
  if (ao) return Cn;
  ao = 1, Cn = e;
  function e() {
  }
  return e.mixin = function(r) {
    var t = r.prototype || r;
    t.isWildEmitter = !0, t.on = function(n, a, i) {
      this.callbacks = this.callbacks || {};
      var s = arguments.length === 3, o = s ? arguments[1] : void 0, u = s ? arguments[2] : arguments[1];
      return u._groupName = o, (this.callbacks[n] = this.callbacks[n] || []).push(u), this;
    }, t.once = function(n, a, i) {
      var s = this, o = arguments.length === 3, u = o ? arguments[1] : void 0, c = o ? arguments[2] : arguments[1];
      function l() {
        s.off(n, l), c.apply(this, arguments);
      }
      return this.on(n, u, l), this;
    }, t.releaseGroup = function(n) {
      this.callbacks = this.callbacks || {};
      var a, i, s, o;
      for (a in this.callbacks)
        for (o = this.callbacks[a], i = 0, s = o.length; i < s; i++)
          o[i]._groupName === n && (o.splice(i, 1), i--, s--);
      return this;
    }, t.off = function(n, a) {
      this.callbacks = this.callbacks || {};
      var i = this.callbacks[n], s;
      return i ? arguments.length === 1 ? (delete this.callbacks[n], this) : (s = i.indexOf(a), i.splice(s, 1), i.length === 0 && delete this.callbacks[n], this) : this;
    }, t.emit = function(n) {
      this.callbacks = this.callbacks || {};
      var a = [].slice.call(arguments, 1), i = this.callbacks[n], s = this.getWildcardCallbacks(n), o, u, c;
      if (i)
        for (c = i.slice(), o = 0, u = c.length; o < u && c[o]; ++o)
          c[o].apply(this, a);
      if (s)
        for (u = s.length, c = s.slice(), o = 0, u = c.length; o < u && c[o]; ++o)
          c[o].apply(this, [n].concat(a));
      return this;
    }, t.getWildcardCallbacks = function(n) {
      this.callbacks = this.callbacks || {};
      var a, i, s = [];
      for (a in this.callbacks)
        i = a.split("*"), (a === "*" || i.length === 2 && n.slice(0, i[0].length) === i[0]) && (s = s.concat(this.callbacks[a]));
      return s;
    };
  }, e.mixin(e), Cn;
}
var ul = ol();
const cl = /* @__PURE__ */ V(ul), io = Array.prototype.slice;
function z(e) {
  const r = io.call(arguments, 1);
  return function() {
    return e.apply(this, r.concat(io.call(arguments)));
  };
}
function ll(e, r, t) {
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
function Uo(e, r) {
  if (e == null) return null;
  let t;
  return typeof e.value == "string" ? t = r[e.value] : t = e.value(r), t;
}
var Pn, so;
function fl() {
  if (so) return Pn;
  so = 1;
  var e = Math.ceil, r = Math.max;
  function t(n, a, i, s) {
    for (var o = -1, u = r(e((a - n) / (i || 1)), 0), c = Array(u); u--; )
      c[s ? u : ++o] = n, n += i;
    return c;
  }
  return Pn = t, Pn;
}
var Sn, oo;
function dl() {
  if (oo) return Sn;
  oo = 1;
  var e = fl(), r = $n(), t = Bo();
  function n(a) {
    return function(i, s, o) {
      return o && typeof o != "number" && r(i, s, o) && (s = o = void 0), i = t(i), s === void 0 ? (s = i, i = 0) : s = t(s), o = o === void 0 ? i < s ? 1 : -1 : t(o), e(i, s, o, a);
    };
  }
  return Sn = n, Sn;
}
var An, uo;
function hl() {
  if (uo) return An;
  uo = 1;
  var e = dl(), r = e();
  return An = r, An;
}
var vl = hl();
const pl = /* @__PURE__ */ V(vl);
function Jn(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return null;
  }
}
function Ko(e) {
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
function _l(e, r) {
  if (!e || typeof e != "object" || !Array.isArray(r)) return null;
  var t = r.filter(function(n) {
    var a = e[n];
    return a && typeof a == "object" && Object.keys(a).length > 0;
  });
  return t.length ? function(n) {
    return gl(n, e, t);
  } : null;
}
function gl(e, r, t) {
  return t.every(function(n) {
    var a = r[n];
    if (!a || !Object.prototype.hasOwnProperty.call(e, n)) return !0;
    var i = Jn(e[n]);
    return i ? Object.prototype.hasOwnProperty.call(a, i) : !1;
  });
}
function ml(e, r, t) {
  var n = Jn(t);
  if (!n) return !1;
  var a = e && e[r];
  return !a || typeof a != "object" ? !1 : Object.prototype.hasOwnProperty.call(a, n);
}
function yl(e) {
  if (!e || typeof e != "string") return null;
  try {
    var r = JSON.parse(e);
    return r && typeof r == "object" ? r : null;
  } catch {
    return null;
  }
}
const bl = { range: pl }, ql = fe({
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
      soloText: "solo",
      unsoloText: "unsolo",
      solo: {}
    };
  },
  getInitialState: function() {
    return {
      paginatePage: 0
    };
  },
  render: function() {
    var e = this.props.rows, r = this.paginate(e), t = this.renderTableBody(this.props.columns, r.rows), n = this.renderTableHead(this.props.columns);
    return /* @__PURE__ */ E.jsxs("div", { className: "reactPivot-results", children: [
      /* @__PURE__ */ E.jsxs("table", { className: this.props.tableClassName, children: [
        n,
        t
      ] }),
      this.renderPagination(r)
    ] });
  },
  renderTableHead: function(e) {
    var r = this, t = this.props.sortBy, n = this.props.sortDir;
    return /* @__PURE__ */ E.jsx("thead", { children: /* @__PURE__ */ E.jsx("tr", { children: e.map(function(a) {
      var i = a.className;
      a.title === t && (i += " " + n);
      var s = "";
      return a.type !== "dimension" && (s = /* @__PURE__ */ E.jsx(
        "span",
        {
          className: "reactPivot-hideColumn",
          onClick: z(r.props.onColumnHide, a.title),
          children: "×"
        }
      )), /* @__PURE__ */ E.jsxs(
        "th",
        {
          className: i,
          onClick: z(r.props.onSort, a.title),
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
    return /* @__PURE__ */ E.jsx("tbody", { children: r.map(function(n) {
      return /* @__PURE__ */ E.jsx("tr", { className: "reactPivot-level-" + n._level, children: e.map(function(a, i) {
        return i < n._level ? /* @__PURE__ */ E.jsx("td", { className: "reactPivot-indent" }, i) : t.renderCell(a, n);
      }) }, n._key);
    }) });
  },
  renderCell: function(e, r) {
    if (e.type === "dimension") {
      var t = r[e.title], n = t, a = typeof t < "u";
      e.template && a && (n = e.template(t, r));
    } else {
      var t = Uo(e, r), n = t;
      e.template && (n = e.template(t, r));
    }
    if (a)
      var i = ml(this.props.solo, e.title, t), s = i ? this.props.unsoloText : this.props.soloText, o = /* @__PURE__ */ E.jsx("span", { className: "reactPivot-solo", children: /* @__PURE__ */ E.jsx(
        "a",
        {
          style: { cursor: "pointer" },
          onClick: z(this.props.onSolo, {
            title: e.title,
            value: t
          }),
          children: s
        }
      ) });
    var u = kn.isValidElement(n) ? /* @__PURE__ */ E.jsx("span", { children: n }) : /* @__PURE__ */ E.jsx(
      "span",
      {
        dangerouslySetInnerHTML: { __html: n || n === 0 && "0" || "" }
      }
    );
    return /* @__PURE__ */ E.jsxs(
      "td",
      {
        className: e.className,
        title: e.title,
        children: [
          u,
          o
        ]
      },
      [e.title, r.key].join("ÿ")
    );
  },
  renderPagination: function(e) {
    var r = this, t = e.nPages, n = e.curPage;
    return t === 1 ? "" : /* @__PURE__ */ E.jsx("div", { className: "reactPivot-paginate", children: bl.range(0, t).map(function(a) {
      var i = "reactPivot-pageNumber";
      return a === n && (i += " is-selected"), /* @__PURE__ */ E.jsx("span", { className: i, children: /* @__PURE__ */ E.jsx("a", { onClick: z(r.setPaginatePage, a), children: a + 1 }) }, a);
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
      for (var o = a - 1; o >= 0 && (e[o]._level < i && (s.unshift(e[o]), i = e[o]._level), e[o]._level !== 9); o--)
        ;
    var u = a + t, c = s.concat(e.slice(a, u));
    return { rows: c, nPages: n, curPage: r };
  },
  setPaginatePage: function(e) {
    this.setState({ paginatePage: e });
  }
});
var On, co;
function Rl() {
  if (co) return On;
  co = 1;
  function e(r) {
    for (var t = -1, n = r == null ? 0 : r.length, a = 0, i = []; ++t < n; ) {
      var s = r[t];
      s && (i[a++] = s);
    }
    return i;
  }
  return On = e, On;
}
var El = Rl();
const xl = /* @__PURE__ */ V(El), Cl = { compact: xl }, Pl = fe({
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
    return /* @__PURE__ */ E.jsxs("div", { className: "reactPivot-dimensions", children: [
      t.map(this.renderDimension),
      /* @__PURE__ */ E.jsxs("select", { value: "", onChange: z(e.toggleDimension, n), children: [
        /* @__PURE__ */ E.jsx("option", { value: "", children: r }),
        e.props.dimensions.map(function(a) {
          return /* @__PURE__ */ E.jsx("option", { children: a.title }, a.title);
        })
      ] })
    ] });
  },
  renderDimension: function(e, r) {
    return /* @__PURE__ */ E.jsxs(
      "select",
      {
        value: e,
        onChange: z(this.toggleDimension, r),
        children: [
          /* @__PURE__ */ E.jsx("option", {}),
          this.props.dimensions.map(function(t) {
            return /* @__PURE__ */ E.jsx(
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
    var i = Cl.compact(n);
    this.props.onChange(i);
  }
});
var Tn, lo;
function Sl() {
  if (lo) return Tn;
  lo = 1;
  function e(r) {
    return r !== r;
  }
  return Tn = e, Tn;
}
var wn, fo;
function Al() {
  if (fo) return wn;
  fo = 1;
  function e(r, t, n) {
    for (var a = n - 1, i = r.length; ++a < i; )
      if (r[a] === t)
        return a;
    return -1;
  }
  return wn = e, wn;
}
var In, ho;
function Ol() {
  if (ho) return In;
  ho = 1;
  var e = ko(), r = Sl(), t = Al();
  function n(a, i, s) {
    return i === i ? t(a, i, s) : e(a, r, s);
  }
  return In = n, In;
}
var Nn, vo;
function Tl() {
  if (vo) return Nn;
  vo = 1;
  var e = Ol();
  function r(t, n) {
    var a = t == null ? 0 : t.length;
    return !!a && e(t, n, 0) > -1;
  }
  return Nn = r, Nn;
}
var Dn, po;
function wl() {
  if (po) return Dn;
  po = 1;
  function e(r, t, n) {
    for (var a = -1, i = r == null ? 0 : r.length; ++a < i; )
      if (n(t, r[a]))
        return !0;
    return !1;
  }
  return Dn = e, Dn;
}
var jn, _o;
function Il() {
  if (_o) return jn;
  _o = 1;
  var e = Oo(), r = Tl(), t = wl(), n = be(), a = Hn(), i = To(), s = 200;
  function o(u, c, l, f) {
    var v = -1, g = r, b = !0, m = u.length, y = [], x = c.length;
    if (!m)
      return y;
    l && (c = n(c, a(l))), f ? (g = t, b = !1) : c.length >= s && (g = i, b = !1, c = new e(c));
    e:
      for (; ++v < m; ) {
        var q = u[v], A = l == null ? q : l(q);
        if (q = f || q !== 0 ? q : 0, b && A === A) {
          for (var C = x; C--; )
            if (c[C] === A)
              continue e;
          y.push(q);
        } else g(c, A, f) || y.push(q);
      }
    return y;
  }
  return jn = o, jn;
}
var Fn, go;
function Nl() {
  if (go) return Fn;
  go = 1;
  var e = $(), r = Z();
  function t(n) {
    return r(n) && e(n);
  }
  return Fn = t, Fn;
}
var Mn, mo;
function Dl() {
  if (mo) return Mn;
  mo = 1;
  var e = Il(), r = zn(), t = Nl(), n = r(function(a, i) {
    return t(a) ? e(a, i) : [];
  });
  return Mn = n, Mn;
}
var jl = Dl();
const Fl = /* @__PURE__ */ V(jl), Ml = { without: Fl }, kl = fe({
  getDefaultProps: function() {
    return {
      hiddenColumns: [],
      onChange: function() {
      }
    };
  },
  render: function() {
    return /* @__PURE__ */ E.jsx("div", { className: "reactPivot-columnControl", children: this.props.hiddenColumns.length ? /* @__PURE__ */ E.jsxs("select", { value: "", onChange: this.showColumn, children: [
      /* @__PURE__ */ E.jsx("option", { value: "", children: "Hidden Columns" }),
      this.props.hiddenColumns.map(function(e) {
        return /* @__PURE__ */ E.jsx("option", { children: e }, e);
      })
    ] }) : "" });
  },
  showColumn: function(e) {
    var r = e.target.value, t = Ml.without(this.props.hiddenColumns, r);
    this.props.onChange(t);
  }
});
function Bl(e) {
  if (e === null) return "null";
  if (typeof e == "object")
    try {
      return JSON.stringify(e);
    } catch {
      return "[object]";
    }
  return String(e);
}
const yo = fe({
  getDefaultProps: function() {
    return {
      solo: {},
      onToggle: function() {
      }
    };
  },
  render: function() {
    var e = Ko(this.props.solo);
    if (!e.length)
      return /* @__PURE__ */ E.jsx("div", { className: "reactPivot-soloControl" });
    var r = e.map(function(t) {
      var n = Bl(t.value), a = t.title + ": " + n, i;
      try {
        i = JSON.stringify({ title: t.title, value: t.value });
      } catch {
        return null;
      }
      return /* @__PURE__ */ E.jsx("option", { value: i, children: a }, t.title + "::" + t.key);
    }).filter(Boolean);
    return r.length ? /* @__PURE__ */ E.jsx("div", { className: "reactPivot-soloControl", children: /* @__PURE__ */ E.jsxs("select", { value: "", onChange: this.handleToggle, children: [
      /* @__PURE__ */ E.jsx("option", { value: "", children: "Solo Filters" }),
      r
    ] }) }) : /* @__PURE__ */ E.jsx("div", { className: "reactPivot-soloControl" });
  },
  handleToggle: function(e) {
    var r = yl(e.target.value);
    r && (e.target.value = "", this.props.onToggle(r));
  }
}), ne = { filter: mc, map: qc, find: Oc }, Hl = fe({
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
      eventBus: new cl(),
      compact: !1,
      excludeSummaryFromExport: !1,
      onData: function() {
      },
      soloText: "solo",
      unsoloText: "unsolo",
      subDimensionText: "Sub Dimension...",
      showClearFilters: !1,
      clearFiltersText: "Clear Filters"
    };
  },
  getInitialState: function() {
    var e = this.props.dimensions, r = ne.filter(this.props.activeDimensions, function(t) {
      return ne.find(e, function(n) {
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
    this.props.defaultStyles && Ll(), this.dataFrame = no({
      rows: this.props.rows,
      dimensions: this.props.dimensions,
      reduce: this.props.reduce
    }), this.updateRows();
  },
  componentDidUpdate: function(e) {
    this.props.hiddenColumns !== e.hiddenColumns && this.setHiddenColumns(this.props.hiddenColumns), this.props.rows !== e.rows && (this.dataFrame = no({
      rows: this.props.rows,
      dimensions: this.props.dimensions,
      reduce: this.props.reduce
    }), this.updateRows()), this.props.solo !== e.solo && this.setState({ solo: this.props.solo }, this.updateRows);
  },
  getColumns: function() {
    var e = this, r = [];
    return this.state.dimensions.forEach(function(t) {
      var n = ne.find(e.props.dimensions, function(a) {
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
      if (!(e.state.hiddenColumns.indexOf(t.title) >= 0)) {
        var n = "reactPivot-calculation";
        t.className && (n += " " + t.className), r.push({
          type: "calculation",
          title: t.title,
          template: t.template,
          value: t.value,
          className: n,
          sortBy: t.sortBy
        });
      }
    }), r;
  },
  renderFilterActions: function() {
    var e = Ko(this.state.solo).length > 0;
    if (!e)
      return /* @__PURE__ */ E.jsx(yo, { solo: this.state.solo, onToggle: this.setSolo });
    var r = this.state.filtersPaused ? "Resume Filters" : "Pause Filters";
    return /* @__PURE__ */ E.jsxs("div", { className: "reactPivot-filterActions", children: [
      /* @__PURE__ */ E.jsx(yo, { solo: this.state.solo, onToggle: this.setSolo }),
      this.props.showClearFilters && /* @__PURE__ */ E.jsx(
        "button",
        {
          className: "reactPivot-clearFilters",
          onClick: this.clearSolo,
          children: this.props.clearFiltersText
        }
      ),
      /* @__PURE__ */ E.jsx("button", { onClick: this.toggleFilters, children: r })
    ] });
  },
  render: function() {
    var e = /* @__PURE__ */ E.jsxs("div", { className: "reactPivot", children: [
      /* @__PURE__ */ E.jsxs("div", { className: "reactPivot-toolbar", children: [
        this.props.hideDimensionFilter ? null : /* @__PURE__ */ E.jsx(
          Pl,
          {
            dimensions: this.props.dimensions,
            subDimensionText: this.props.subDimensionText,
            selectedDimensions: this.state.dimensions,
            onChange: this.setDimensions
          }
        ),
        /* @__PURE__ */ E.jsxs("div", { className: "reactPivot-controls", children: [
          /* @__PURE__ */ E.jsx(
            kl,
            {
              hiddenColumns: this.state.hiddenColumns,
              onChange: this.setHiddenColumns
            }
          ),
          this.renderFilterActions(),
          /* @__PURE__ */ E.jsx("div", { className: "reactPivot-csvExport", children: /* @__PURE__ */ E.jsx("button", { onClick: z(this.downloadCSV, this.state.rows), children: "Export CSV" }) })
        ] })
      ] }),
      /* @__PURE__ */ E.jsx(
        ql,
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
          soloText: this.props.soloText,
          unsoloText: this.props.unsoloText,
          solo: this.state.solo
        }
      )
    ] });
    return e;
  },
  updateRows: function() {
    var e = this.getColumns(), r = this.state.sortBy, t = ne.find(e, function(u) {
      return u.title === r;
    }) || {}, n = t.sortBy || (t.type === "dimension" ? t.title : t.value), a = this.state.sortDir, i = this.state.hideRows, s = {
      dimensions: this.state.dimensions,
      sortBy: n,
      sortDir: a,
      compact: this.props.compact
    };
    this.state.filtersPaused || (s.filter = _l(this.state.solo, this.state.dimensions));
    var o = this.dataFrame.calculate(s).filter(function(u) {
      return i ? !i(u) : !0;
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
    if (!(!e || typeof e != "object")) {
      var r = e.title;
      if (r) {
        var t = Jn(e.value);
        if (t) {
          var n = Object.assign({}, this.state.solo), a = n[r] || {};
          Object.prototype.hasOwnProperty.call(a, t) ? (n[r] = this.removeSoloValue(a, t), n[r] || delete n[r]) : n[r] = this.addSoloValue(a, t), this.props.eventBus.emit("solo", n), this.setState({ solo: n, filtersPaused: !1 }, this.updateRows);
        }
      }
    }
  },
  clearSolo: function() {
    this.props.eventBus.emit("solo", {}), this.setState({ solo: {}, filtersPaused: !1 }, this.updateRows);
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
    var r = this, t = this.getColumns(), n = ne.map(t, "title").map(JSON.stringify.bind(JSON)).join(",") + `
`, a = this.state.dimensions.length - 1, i = this.props.excludeSummaryFromExport;
    e.forEach(function(s) {
      if (!(i && s._level < a)) {
        var o = t.map(function(u) {
          if (u.type === "dimension")
            var c = s[u.title];
          else
            var c = Uo(u, s);
          return u.template && r.props.csvTemplateFormat && (c = u.template(c)), JSON.stringify(c);
        });
        n += o.join(",") + `
`;
      }
    }), ll(n, this.props.csvDownloadFileName, "text/csv");
  }
});
function Ll() {
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

.reactPivot-results td.reactPivot-calculation,
.reactPivot-results th.reactPivot-calculation {
  text-align: right;
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
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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

.reactPivot-filterActions {
  display: flex;
  gap: 5px;
  align-items: flex-start;
  flex: 0 0 auto;
}

.reactPivot-filterActions button {
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

.reactPivot-soloControl {
  display: flex;
  gap: 5px;
  align-items: flex-start;
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
  Hl as default
};
