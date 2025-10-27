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
function Yo() {
  if (Xn) return re;
  Xn = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(a, n, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), n.key !== void 0 && (s = "" + n.key), "key" in n) {
      i = {};
      for (var o in n)
        o !== "key" && (i[o] = n[o]);
    } else i = n;
    return n = i.ref, {
      $$typeof: e,
      type: a,
      key: s,
      ref: n !== void 0 ? n : null,
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
function Vo() {
  return Zn || (Zn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === G ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case m:
          return "Fragment";
        case E:
          return "Profiler";
        case y:
          return "StrictMode";
        case I:
          return "Suspense";
        case S:
          return "SuspenseList";
        case M:
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
    function a(d) {
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
    function n() {
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
    function f(d, _, T, w, k, U, ee, Y) {
      var B = _.children;
      if (B !== void 0)
        if (w)
          if (F(B)) {
            for (w = 0; w < B.length; w++)
              l(B[w]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else l(B);
      if (L.call(_, "key")) {
        B = e(d);
        var X = Object.keys(_).filter(function(Ko) {
          return Ko !== "key";
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
        n(),
        T,
        ee,
        Y
      );
    }
    function l(d) {
      typeof d == "object" && d !== null && d.$$typeof === g && d._store && (d._store.validated = 1);
    }
    var v = kn, g = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), A = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), M = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), P = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, F = Array.isArray, K = console.createTask ? console.createTask : function() {
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
    )(), D = K(a(i)), N = {};
    te.Fragment = m, te.jsx = function(d, _, T, w, k) {
      var U = 1e4 > P.recentlyCreatedOwnerStacks++;
      return f(
        d,
        _,
        T,
        !1,
        w,
        k,
        U ? Error("react-stack-top-frame") : R,
        U ? K(a(d)) : D
      );
    }, te.jsxs = function(d, _, T, w, k) {
      var U = 1e4 > P.recentlyCreatedOwnerStacks++;
      return f(
        d,
        _,
        T,
        !0,
        w,
        k,
        U ? Error("react-stack-top-frame") : R,
        U ? K(a(d)) : D
      );
    };
  }()), te;
}
var Qn;
function Wo() {
  return Qn || (Qn = 1, process.env.NODE_ENV === "production" ? he.exports = Yo() : he.exports = Vo()), he.exports;
}
var x = Wo(), Ee, ea;
function yo() {
  if (ea) return Ee;
  ea = 1;
  function e(r, t) {
    for (var a = -1, n = r == null ? 0 : r.length, i = 0, s = []; ++a < n; ) {
      var o = r[a];
      t(o, a, r) && (s[i++] = o);
    }
    return s;
  }
  return Ee = e, Ee;
}
var xe, ra;
function zo() {
  if (ra) return xe;
  ra = 1;
  function e(r) {
    return function(t, a, n) {
      for (var i = -1, s = Object(t), o = n(t), u = o.length; u--; ) {
        var c = o[r ? u : ++i];
        if (a(s[c], c, s) === !1)
          break;
      }
      return t;
    };
  }
  return xe = e, xe;
}
var Ce, ta;
function $o() {
  if (ta) return Ce;
  ta = 1;
  var e = zo(), r = e();
  return Ce = r, Ce;
}
var Pe, na;
function Jo() {
  if (na) return Pe;
  na = 1;
  function e(r, t) {
    for (var a = -1, n = Array(r); ++a < r; )
      n[a] = t(a);
    return n;
  }
  return Pe = e, Pe;
}
var Se, aa;
function bo() {
  if (aa) return Se;
  aa = 1;
  var e = typeof de == "object" && de && de.Object === Object && de;
  return Se = e, Se;
}
var Ae, ia;
function W() {
  if (ia) return Ae;
  ia = 1;
  var e = bo(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
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
function Xo() {
  if (oa) return Te;
  oa = 1;
  var e = se(), r = Object.prototype, t = r.hasOwnProperty, a = r.toString, n = e ? e.toStringTag : void 0;
  function i(s) {
    var o = t.call(s, n), u = s[n];
    try {
      s[n] = void 0;
      var c = !0;
    } catch {
    }
    var f = a.call(s);
    return c && (o ? s[n] = u : delete s[n]), f;
  }
  return Te = i, Te;
}
var we, ua;
function Zo() {
  if (ua) return we;
  ua = 1;
  var e = Object.prototype, r = e.toString;
  function t(a) {
    return r.call(a);
  }
  return we = t, we;
}
var Ie, ca;
function oe() {
  if (ca) return Ie;
  ca = 1;
  var e = se(), r = Xo(), t = Zo(), a = "[object Null]", n = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function s(o) {
    return o == null ? o === void 0 ? n : a : i && i in Object(o) ? r(o) : t(o);
  }
  return Ie = s, Ie;
}
var Ne, fa;
function Z() {
  if (fa) return Ne;
  fa = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return Ne = e, Ne;
}
var De, la;
function Qo() {
  if (la) return De;
  la = 1;
  var e = oe(), r = Z(), t = "[object Arguments]";
  function a(n) {
    return r(n) && e(n) == t;
  }
  return De = a, De;
}
var je, da;
function Bn() {
  if (da) return je;
  da = 1;
  var e = Qo(), r = Z(), t = Object.prototype, a = t.hasOwnProperty, n = t.propertyIsEnumerable, i = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(s) {
    return r(s) && a.call(s, "callee") && !n.call(s, "callee");
  };
  return je = i, je;
}
var Me, ha;
function H() {
  if (ha) return Me;
  ha = 1;
  var e = Array.isArray;
  return Me = e, Me;
}
var ae = { exports: {} }, Fe, va;
function eu() {
  if (va) return Fe;
  va = 1;
  function e() {
    return !1;
  }
  return Fe = e, Fe;
}
ae.exports;
var pa;
function qo() {
  return pa || (pa = 1, function(e, r) {
    var t = W(), a = eu(), n = r && !r.nodeType && r, i = n && !0 && e && !e.nodeType && e, s = i && i.exports === n, o = s ? t.Buffer : void 0, u = o ? o.isBuffer : void 0, c = u || a;
    e.exports = c;
  }(ae, ae.exports)), ae.exports;
}
var ke, _a;
function Ln() {
  if (_a) return ke;
  _a = 1;
  var e = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
  function t(a, n) {
    var i = typeof a;
    return n = n ?? e, !!n && (i == "number" || i != "symbol" && r.test(a)) && a > -1 && a % 1 == 0 && a < n;
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
function ru() {
  if (ma) return Le;
  ma = 1;
  var e = oe(), r = Gn(), t = Z(), a = "[object Arguments]", n = "[object Array]", i = "[object Boolean]", s = "[object Date]", o = "[object Error]", u = "[object Function]", c = "[object Map]", f = "[object Number]", l = "[object Object]", v = "[object RegExp]", g = "[object Set]", b = "[object String]", m = "[object WeakMap]", y = "[object ArrayBuffer]", E = "[object DataView]", q = "[object Float32Array]", A = "[object Float64Array]", C = "[object Int8Array]", I = "[object Int16Array]", S = "[object Int32Array]", O = "[object Uint8Array]", j = "[object Uint8ClampedArray]", M = "[object Uint16Array]", G = "[object Uint32Array]", P = {};
  P[q] = P[A] = P[C] = P[I] = P[S] = P[O] = P[j] = P[M] = P[G] = !0, P[a] = P[n] = P[y] = P[i] = P[E] = P[s] = P[o] = P[u] = P[c] = P[f] = P[l] = P[v] = P[g] = P[b] = P[m] = !1;
  function L(F) {
    return t(F) && r(F.length) && !!P[e(F)];
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
function tu() {
  return ba || (ba = 1, function(e, r) {
    var t = bo(), a = r && !r.nodeType && r, n = a && !0 && e && !e.nodeType && e, i = n && n.exports === a, s = i && t.process, o = function() {
      try {
        var u = n && n.require && n.require("util").types;
        return u || s && s.binding && s.binding("util");
      } catch {
      }
    }();
    e.exports = o;
  }(ie, ie.exports)), ie.exports;
}
var He, qa;
function Ro() {
  if (qa) return He;
  qa = 1;
  var e = ru(), r = Hn(), t = tu(), a = t && t.isTypedArray, n = a ? r(a) : e;
  return He = n, He;
}
var Ue, Ra;
function Eo() {
  if (Ra) return Ue;
  Ra = 1;
  var e = Jo(), r = Bn(), t = H(), a = qo(), n = Ln(), i = Ro(), s = Object.prototype, o = s.hasOwnProperty;
  function u(c, f) {
    var l = t(c), v = !l && r(c), g = !l && !v && a(c), b = !l && !v && !g && i(c), m = l || v || g || b, y = m ? e(c.length, String) : [], E = y.length;
    for (var q in c)
      (f || o.call(c, q)) && !(m && // Safari 9 has enumerable `arguments.length` in strict mode.
      (q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      g && (q == "offset" || q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      b && (q == "buffer" || q == "byteLength" || q == "byteOffset") || // Skip index properties.
      n(q, E))) && y.push(q);
    return y;
  }
  return Ue = u, Ue;
}
var Ke, Ea;
function xo() {
  if (Ea) return Ke;
  Ea = 1;
  var e = Object.prototype;
  function r(t) {
    var a = t && t.constructor, n = typeof a == "function" && a.prototype || e;
    return t === n;
  }
  return Ke = r, Ke;
}
var Ye, xa;
function nu() {
  if (xa) return Ye;
  xa = 1;
  function e(r, t) {
    return function(a) {
      return r(t(a));
    };
  }
  return Ye = e, Ye;
}
var Ve, Ca;
function au() {
  if (Ca) return Ve;
  Ca = 1;
  var e = nu(), r = e(Object.keys, Object);
  return Ve = r, Ve;
}
var We, Pa;
function iu() {
  if (Pa) return We;
  Pa = 1;
  var e = xo(), r = au(), t = Object.prototype, a = t.hasOwnProperty;
  function n(i) {
    if (!e(i))
      return r(i);
    var s = [];
    for (var o in Object(i))
      a.call(i, o) && o != "constructor" && s.push(o);
    return s;
  }
  return We = n, We;
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
function Co() {
  if (Aa) return $e;
  Aa = 1;
  var e = oe(), r = Q(), t = "[object AsyncFunction]", a = "[object Function]", n = "[object GeneratorFunction]", i = "[object Proxy]";
  function s(o) {
    if (!r(o))
      return !1;
    var u = e(o);
    return u == a || u == n || u == t || u == i;
  }
  return $e = s, $e;
}
var Je, Oa;
function $() {
  if (Oa) return Je;
  Oa = 1;
  var e = Co(), r = Gn();
  function t(a) {
    return a != null && r(a.length) && !e(a);
  }
  return Je = t, Je;
}
var Xe, Ta;
function ve() {
  if (Ta) return Xe;
  Ta = 1;
  var e = Eo(), r = iu(), t = $();
  function a(n) {
    return t(n) ? e(n) : r(n);
  }
  return Xe = a, Xe;
}
var Ze, wa;
function su() {
  if (wa) return Ze;
  wa = 1;
  var e = $o(), r = ve();
  function t(a, n) {
    return a && e(a, n, r);
  }
  return Ze = t, Ze;
}
var Qe, Ia;
function ou() {
  if (Ia) return Qe;
  Ia = 1;
  var e = $();
  function r(t, a) {
    return function(n, i) {
      if (n == null)
        return n;
      if (!e(n))
        return t(n, i);
      for (var s = n.length, o = a ? s : -1, u = Object(n); (a ? o-- : ++o < s) && i(u[o], o, u) !== !1; )
        ;
      return n;
    };
  }
  return Qe = r, Qe;
}
var er, Na;
function Un() {
  if (Na) return er;
  Na = 1;
  var e = su(), r = ou(), t = r(e);
  return er = t, er;
}
var rr, Da;
function uu() {
  if (Da) return rr;
  Da = 1;
  var e = Un();
  function r(t, a) {
    var n = [];
    return e(t, function(i, s, o) {
      a(i, s, o) && n.push(i);
    }), n;
  }
  return rr = r, rr;
}
var tr, ja;
function cu() {
  if (ja) return tr;
  ja = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return tr = e, tr;
}
var nr, Ma;
function pe() {
  if (Ma) return nr;
  Ma = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return nr = e, nr;
}
var ar, Fa;
function _e() {
  if (Fa) return ar;
  Fa = 1;
  var e = pe();
  function r(t, a) {
    for (var n = t.length; n--; )
      if (e(t[n][0], a))
        return n;
    return -1;
  }
  return ar = r, ar;
}
var ir, ka;
function fu() {
  if (ka) return ir;
  ka = 1;
  var e = _e(), r = Array.prototype, t = r.splice;
  function a(n) {
    var i = this.__data__, s = e(i, n);
    if (s < 0)
      return !1;
    var o = i.length - 1;
    return s == o ? i.pop() : t.call(i, s, 1), --this.size, !0;
  }
  return ir = a, ir;
}
var sr, Ba;
function lu() {
  if (Ba) return sr;
  Ba = 1;
  var e = _e();
  function r(t) {
    var a = this.__data__, n = e(a, t);
    return n < 0 ? void 0 : a[n][1];
  }
  return sr = r, sr;
}
var or, La;
function du() {
  if (La) return or;
  La = 1;
  var e = _e();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return or = r, or;
}
var ur, Ga;
function hu() {
  if (Ga) return ur;
  Ga = 1;
  var e = _e();
  function r(t, a) {
    var n = this.__data__, i = e(n, t);
    return i < 0 ? (++this.size, n.push([t, a])) : n[i][1] = a, this;
  }
  return ur = r, ur;
}
var cr, Ha;
function ge() {
  if (Ha) return cr;
  Ha = 1;
  var e = cu(), r = fu(), t = lu(), a = du(), n = hu();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var c = s[o];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, cr = i, cr;
}
var fr, Ua;
function vu() {
  if (Ua) return fr;
  Ua = 1;
  var e = ge();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return fr = r, fr;
}
var lr, Ka;
function pu() {
  if (Ka) return lr;
  Ka = 1;
  function e(r) {
    var t = this.__data__, a = t.delete(r);
    return this.size = t.size, a;
  }
  return lr = e, lr;
}
var dr, Ya;
function _u() {
  if (Ya) return dr;
  Ya = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return dr = e, dr;
}
var hr, Va;
function gu() {
  if (Va) return hr;
  Va = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return hr = e, hr;
}
var vr, Wa;
function mu() {
  if (Wa) return vr;
  Wa = 1;
  var e = W(), r = e["__core-js_shared__"];
  return vr = r, vr;
}
var pr, za;
function yu() {
  if (za) return pr;
  za = 1;
  var e = mu(), r = function() {
    var a = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return a ? "Symbol(src)_1." + a : "";
  }();
  function t(a) {
    return !!r && r in a;
  }
  return pr = t, pr;
}
var _r, $a;
function Po() {
  if ($a) return _r;
  $a = 1;
  var e = Function.prototype, r = e.toString;
  function t(a) {
    if (a != null) {
      try {
        return r.call(a);
      } catch {
      }
      try {
        return a + "";
      } catch {
      }
    }
    return "";
  }
  return _r = t, _r;
}
var gr, Ja;
function bu() {
  if (Ja) return gr;
  Ja = 1;
  var e = Co(), r = yu(), t = Q(), a = Po(), n = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, o = Object.prototype, u = s.toString, c = o.hasOwnProperty, f = RegExp(
    "^" + u.call(c).replace(n, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(v) {
    if (!t(v) || r(v))
      return !1;
    var g = e(v) ? f : i;
    return g.test(a(v));
  }
  return gr = l, gr;
}
var mr, Xa;
function qu() {
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
  var e = bu(), r = qu();
  function t(a, n) {
    var i = r(a, n);
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
function Ru() {
  if (ri) return Rr;
  ri = 1;
  var e = me();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Rr = r, Rr;
}
var Er, ti;
function Eu() {
  if (ti) return Er;
  ti = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return Er = e, Er;
}
var xr, ni;
function xu() {
  if (ni) return xr;
  ni = 1;
  var e = me(), r = "__lodash_hash_undefined__", t = Object.prototype, a = t.hasOwnProperty;
  function n(i) {
    var s = this.__data__;
    if (e) {
      var o = s[i];
      return o === r ? void 0 : o;
    }
    return a.call(s, i) ? s[i] : void 0;
  }
  return xr = n, xr;
}
var Cr, ai;
function Cu() {
  if (ai) return Cr;
  ai = 1;
  var e = me(), r = Object.prototype, t = r.hasOwnProperty;
  function a(n) {
    var i = this.__data__;
    return e ? i[n] !== void 0 : t.call(i, n);
  }
  return Cr = a, Cr;
}
var Pr, ii;
function Pu() {
  if (ii) return Pr;
  ii = 1;
  var e = me(), r = "__lodash_hash_undefined__";
  function t(a, n) {
    var i = this.__data__;
    return this.size += this.has(a) ? 0 : 1, i[a] = e && n === void 0 ? r : n, this;
  }
  return Pr = t, Pr;
}
var Sr, si;
function Su() {
  if (si) return Sr;
  si = 1;
  var e = Ru(), r = Eu(), t = xu(), a = Cu(), n = Pu();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var c = s[o];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, Sr = i, Sr;
}
var Ar, oi;
function Au() {
  if (oi) return Ar;
  oi = 1;
  var e = Su(), r = ge(), t = Kn();
  function a() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return Ar = a, Ar;
}
var Or, ui;
function Ou() {
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
  var e = Ou();
  function r(t, a) {
    var n = t.__data__;
    return e(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map;
  }
  return Tr = r, Tr;
}
var wr, fi;
function Tu() {
  if (fi) return wr;
  fi = 1;
  var e = ye();
  function r(t) {
    var a = e(this, t).delete(t);
    return this.size -= a ? 1 : 0, a;
  }
  return wr = r, wr;
}
var Ir, li;
function wu() {
  if (li) return Ir;
  li = 1;
  var e = ye();
  function r(t) {
    return e(this, t).get(t);
  }
  return Ir = r, Ir;
}
var Nr, di;
function Iu() {
  if (di) return Nr;
  di = 1;
  var e = ye();
  function r(t) {
    return e(this, t).has(t);
  }
  return Nr = r, Nr;
}
var Dr, hi;
function Nu() {
  if (hi) return Dr;
  hi = 1;
  var e = ye();
  function r(t, a) {
    var n = e(this, t), i = n.size;
    return n.set(t, a), this.size += n.size == i ? 0 : 1, this;
  }
  return Dr = r, Dr;
}
var jr, vi;
function Yn() {
  if (vi) return jr;
  vi = 1;
  var e = Au(), r = Tu(), t = wu(), a = Iu(), n = Nu();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var c = s[o];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, jr = i, jr;
}
var Mr, pi;
function Du() {
  if (pi) return Mr;
  pi = 1;
  var e = ge(), r = Kn(), t = Yn(), a = 200;
  function n(i, s) {
    var o = this.__data__;
    if (o instanceof e) {
      var u = o.__data__;
      if (!r || u.length < a - 1)
        return u.push([i, s]), this.size = ++o.size, this;
      o = this.__data__ = new t(u);
    }
    return o.set(i, s), this.size = o.size, this;
  }
  return Mr = n, Mr;
}
var Fr, _i;
function So() {
  if (_i) return Fr;
  _i = 1;
  var e = ge(), r = vu(), t = pu(), a = _u(), n = gu(), i = Du();
  function s(o) {
    var u = this.__data__ = new e(o);
    this.size = u.size;
  }
  return s.prototype.clear = r, s.prototype.delete = t, s.prototype.get = a, s.prototype.has = n, s.prototype.set = i, Fr = s, Fr;
}
var kr, gi;
function ju() {
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
function Ao() {
  if (yi) return Lr;
  yi = 1;
  var e = Yn(), r = ju(), t = Mu();
  function a(n) {
    var i = -1, s = n == null ? 0 : n.length;
    for (this.__data__ = new e(); ++i < s; )
      this.add(n[i]);
  }
  return a.prototype.add = a.prototype.push = r, a.prototype.has = t, Lr = a, Lr;
}
var Gr, bi;
function Fu() {
  if (bi) return Gr;
  bi = 1;
  function e(r, t) {
    for (var a = -1, n = r == null ? 0 : r.length; ++a < n; )
      if (t(r[a], a, r))
        return !0;
    return !1;
  }
  return Gr = e, Gr;
}
var Hr, qi;
function Oo() {
  if (qi) return Hr;
  qi = 1;
  function e(r, t) {
    return r.has(t);
  }
  return Hr = e, Hr;
}
var Ur, Ri;
function To() {
  if (Ri) return Ur;
  Ri = 1;
  var e = Ao(), r = Fu(), t = Oo(), a = 1, n = 2;
  function i(s, o, u, c, f, l) {
    var v = u & a, g = s.length, b = o.length;
    if (g != b && !(v && b > g))
      return !1;
    var m = l.get(s), y = l.get(o);
    if (m && y)
      return m == o && y == s;
    var E = -1, q = !0, A = u & n ? new e() : void 0;
    for (l.set(s, o), l.set(o, s); ++E < g; ) {
      var C = s[E], I = o[E];
      if (c)
        var S = v ? c(I, C, E, o, s, l) : c(C, I, E, s, o, l);
      if (S !== void 0) {
        if (S)
          continue;
        q = !1;
        break;
      }
      if (A) {
        if (!r(o, function(O, j) {
          if (!t(A, j) && (C === O || f(C, O, u, c, l)))
            return A.push(j);
        })) {
          q = !1;
          break;
        }
      } else if (!(C === I || f(C, I, u, c, l))) {
        q = !1;
        break;
      }
    }
    return l.delete(s), l.delete(o), q;
  }
  return Ur = i, Ur;
}
var Kr, Ei;
function ku() {
  if (Ei) return Kr;
  Ei = 1;
  var e = W(), r = e.Uint8Array;
  return Kr = r, Kr;
}
var Yr, xi;
function Bu() {
  if (xi) return Yr;
  xi = 1;
  function e(r) {
    var t = -1, a = Array(r.size);
    return r.forEach(function(n, i) {
      a[++t] = [i, n];
    }), a;
  }
  return Yr = e, Yr;
}
var Vr, Ci;
function Lu() {
  if (Ci) return Vr;
  Ci = 1;
  function e(r) {
    var t = -1, a = Array(r.size);
    return r.forEach(function(n) {
      a[++t] = n;
    }), a;
  }
  return Vr = e, Vr;
}
var Wr, Pi;
function Gu() {
  if (Pi) return Wr;
  Pi = 1;
  var e = se(), r = ku(), t = pe(), a = To(), n = Bu(), i = Lu(), s = 1, o = 2, u = "[object Boolean]", c = "[object Date]", f = "[object Error]", l = "[object Map]", v = "[object Number]", g = "[object RegExp]", b = "[object Set]", m = "[object String]", y = "[object Symbol]", E = "[object ArrayBuffer]", q = "[object DataView]", A = e ? e.prototype : void 0, C = A ? A.valueOf : void 0;
  function I(S, O, j, M, G, P, L) {
    switch (j) {
      case q:
        if (S.byteLength != O.byteLength || S.byteOffset != O.byteOffset)
          return !1;
        S = S.buffer, O = O.buffer;
      case E:
        return !(S.byteLength != O.byteLength || !P(new r(S), new r(O)));
      case u:
      case c:
      case v:
        return t(+S, +O);
      case f:
        return S.name == O.name && S.message == O.message;
      case g:
      case m:
        return S == O + "";
      case l:
        var F = n;
      case b:
        var K = M & s;
        if (F || (F = i), S.size != O.size && !K)
          return !1;
        var p = L.get(S);
        if (p)
          return p == O;
        M |= o, L.set(S, O);
        var h = a(F(S), F(O), M, G, P, L);
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
function wo() {
  if (Si) return zr;
  Si = 1;
  function e(r, t) {
    for (var a = -1, n = t.length, i = r.length; ++a < n; )
      r[i + a] = t[a];
    return r;
  }
  return zr = e, zr;
}
var $r, Ai;
function Hu() {
  if (Ai) return $r;
  Ai = 1;
  var e = wo(), r = H();
  function t(a, n, i) {
    var s = n(a);
    return r(a) ? s : e(s, i(a));
  }
  return $r = t, $r;
}
var Jr, Oi;
function Uu() {
  if (Oi) return Jr;
  Oi = 1;
  function e() {
    return [];
  }
  return Jr = e, Jr;
}
var Xr, Ti;
function Ku() {
  if (Ti) return Xr;
  Ti = 1;
  var e = yo(), r = Uu(), t = Object.prototype, a = t.propertyIsEnumerable, n = Object.getOwnPropertySymbols, i = n ? function(s) {
    return s == null ? [] : (s = Object(s), e(n(s), function(o) {
      return a.call(s, o);
    }));
  } : r;
  return Xr = i, Xr;
}
var Zr, wi;
function Yu() {
  if (wi) return Zr;
  wi = 1;
  var e = Hu(), r = Ku(), t = ve();
  function a(n) {
    return e(n, t, r);
  }
  return Zr = a, Zr;
}
var Qr, Ii;
function Vu() {
  if (Ii) return Qr;
  Ii = 1;
  var e = Yu(), r = 1, t = Object.prototype, a = t.hasOwnProperty;
  function n(i, s, o, u, c, f) {
    var l = o & r, v = e(i), g = v.length, b = e(s), m = b.length;
    if (g != m && !l)
      return !1;
    for (var y = g; y--; ) {
      var E = v[y];
      if (!(l ? E in s : a.call(s, E)))
        return !1;
    }
    var q = f.get(i), A = f.get(s);
    if (q && A)
      return q == s && A == i;
    var C = !0;
    f.set(i, s), f.set(s, i);
    for (var I = l; ++y < g; ) {
      E = v[y];
      var S = i[E], O = s[E];
      if (u)
        var j = l ? u(O, S, E, s, i, f) : u(S, O, E, i, s, f);
      if (!(j === void 0 ? S === O || c(S, O, o, u, f) : j)) {
        C = !1;
        break;
      }
      I || (I = E == "constructor");
    }
    if (C && !I) {
      var M = i.constructor, G = s.constructor;
      M != G && "constructor" in i && "constructor" in s && !(typeof M == "function" && M instanceof M && typeof G == "function" && G instanceof G) && (C = !1);
    }
    return f.delete(i), f.delete(s), C;
  }
  return Qr = n, Qr;
}
var et, Ni;
function Wu() {
  if (Ni) return et;
  Ni = 1;
  var e = J(), r = W(), t = e(r, "DataView");
  return et = t, et;
}
var rt, Di;
function zu() {
  if (Di) return rt;
  Di = 1;
  var e = J(), r = W(), t = e(r, "Promise");
  return rt = t, rt;
}
var tt, ji;
function $u() {
  if (ji) return tt;
  ji = 1;
  var e = J(), r = W(), t = e(r, "Set");
  return tt = t, tt;
}
var nt, Mi;
function Ju() {
  if (Mi) return nt;
  Mi = 1;
  var e = J(), r = W(), t = e(r, "WeakMap");
  return nt = t, nt;
}
var at, Fi;
function Xu() {
  if (Fi) return at;
  Fi = 1;
  var e = Wu(), r = Kn(), t = zu(), a = $u(), n = Ju(), i = oe(), s = Po(), o = "[object Map]", u = "[object Object]", c = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", v = "[object DataView]", g = s(e), b = s(r), m = s(t), y = s(a), E = s(n), q = i;
  return (e && q(new e(new ArrayBuffer(1))) != v || r && q(new r()) != o || t && q(t.resolve()) != c || a && q(new a()) != f || n && q(new n()) != l) && (q = function(A) {
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
          return f;
        case E:
          return l;
      }
    return C;
  }), at = q, at;
}
var it, ki;
function Zu() {
  if (ki) return it;
  ki = 1;
  var e = So(), r = To(), t = Gu(), a = Vu(), n = Xu(), i = H(), s = qo(), o = Ro(), u = 1, c = "[object Arguments]", f = "[object Array]", l = "[object Object]", v = Object.prototype, g = v.hasOwnProperty;
  function b(m, y, E, q, A, C) {
    var I = i(m), S = i(y), O = I ? f : n(m), j = S ? f : n(y);
    O = O == c ? l : O, j = j == c ? l : j;
    var M = O == l, G = j == l, P = O == j;
    if (P && s(m)) {
      if (!s(y))
        return !1;
      I = !0, M = !1;
    }
    if (P && !M)
      return C || (C = new e()), I || o(m) ? r(m, y, E, q, A, C) : t(m, y, O, E, q, A, C);
    if (!(E & u)) {
      var L = M && g.call(m, "__wrapped__"), F = G && g.call(y, "__wrapped__");
      if (L || F) {
        var K = L ? m.value() : m, p = F ? y.value() : y;
        return C || (C = new e()), A(K, p, E, q, C);
      }
    }
    return P ? (C || (C = new e()), a(m, y, E, q, A, C)) : !1;
  }
  return it = b, it;
}
var st, Bi;
function Io() {
  if (Bi) return st;
  Bi = 1;
  var e = Zu(), r = Z();
  function t(a, n, i, s, o) {
    return a === n ? !0 : a == null || n == null || !r(a) && !r(n) ? a !== a && n !== n : e(a, n, i, s, t, o);
  }
  return st = t, st;
}
var ot, Li;
function Qu() {
  if (Li) return ot;
  Li = 1;
  var e = So(), r = Io(), t = 1, a = 2;
  function n(i, s, o, u) {
    var c = o.length, f = c, l = !u;
    if (i == null)
      return !f;
    for (i = Object(i); c--; ) {
      var v = o[c];
      if (l && v[2] ? v[1] !== i[v[0]] : !(v[0] in i))
        return !1;
    }
    for (; ++c < f; ) {
      v = o[c];
      var g = v[0], b = i[g], m = v[1];
      if (l && v[2]) {
        if (b === void 0 && !(g in i))
          return !1;
      } else {
        var y = new e();
        if (u)
          var E = u(b, m, g, i, s, y);
        if (!(E === void 0 ? r(m, b, t | a, u, y) : E))
          return !1;
      }
    }
    return !0;
  }
  return ot = n, ot;
}
var ut, Gi;
function No() {
  if (Gi) return ut;
  Gi = 1;
  var e = Q();
  function r(t) {
    return t === t && !e(t);
  }
  return ut = r, ut;
}
var ct, Hi;
function ec() {
  if (Hi) return ct;
  Hi = 1;
  var e = No(), r = ve();
  function t(a) {
    for (var n = r(a), i = n.length; i--; ) {
      var s = n[i], o = a[s];
      n[i] = [s, o, e(o)];
    }
    return n;
  }
  return ct = t, ct;
}
var ft, Ui;
function Do() {
  if (Ui) return ft;
  Ui = 1;
  function e(r, t) {
    return function(a) {
      return a == null ? !1 : a[r] === t && (t !== void 0 || r in Object(a));
    };
  }
  return ft = e, ft;
}
var lt, Ki;
function rc() {
  if (Ki) return lt;
  Ki = 1;
  var e = Qu(), r = ec(), t = Do();
  function a(n) {
    var i = r(n);
    return i.length == 1 && i[0][2] ? t(i[0][0], i[0][1]) : function(s) {
      return s === n || e(s, n, i);
    };
  }
  return lt = a, lt;
}
var dt, Yi;
function ue() {
  if (Yi) return dt;
  Yi = 1;
  var e = oe(), r = Z(), t = "[object Symbol]";
  function a(n) {
    return typeof n == "symbol" || r(n) && e(n) == t;
  }
  return dt = a, dt;
}
var ht, Vi;
function Vn() {
  if (Vi) return ht;
  Vi = 1;
  var e = H(), r = ue(), t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
  function n(i, s) {
    if (e(i))
      return !1;
    var o = typeof i;
    return o == "number" || o == "symbol" || o == "boolean" || i == null || r(i) ? !0 : a.test(i) || !t.test(i) || s != null && i in Object(s);
  }
  return ht = n, ht;
}
var vt, Wi;
function tc() {
  if (Wi) return vt;
  Wi = 1;
  var e = Yn(), r = "Expected a function";
  function t(a, n) {
    if (typeof a != "function" || n != null && typeof n != "function")
      throw new TypeError(r);
    var i = function() {
      var s = arguments, o = n ? n.apply(this, s) : s[0], u = i.cache;
      if (u.has(o))
        return u.get(o);
      var c = a.apply(this, s);
      return i.cache = u.set(o, c) || u, c;
    };
    return i.cache = new (t.Cache || e)(), i;
  }
  return t.Cache = e, vt = t, vt;
}
var pt, zi;
function nc() {
  if (zi) return pt;
  zi = 1;
  var e = tc(), r = 500;
  function t(a) {
    var n = e(a, function(s) {
      return i.size === r && i.clear(), s;
    }), i = n.cache;
    return n;
  }
  return pt = t, pt;
}
var _t, $i;
function ac() {
  if ($i) return _t;
  $i = 1;
  var e = nc(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, t = /\\(\\)?/g, a = e(function(n) {
    var i = [];
    return n.charCodeAt(0) === 46 && i.push(""), n.replace(r, function(s, o, u, c) {
      i.push(u ? c.replace(t, "$1") : o || s);
    }), i;
  });
  return _t = a, _t;
}
var gt, Ji;
function be() {
  if (Ji) return gt;
  Ji = 1;
  function e(r, t) {
    for (var a = -1, n = r == null ? 0 : r.length, i = Array(n); ++a < n; )
      i[a] = t(r[a], a, r);
    return i;
  }
  return gt = e, gt;
}
var mt, Xi;
function ic() {
  if (Xi) return mt;
  Xi = 1;
  var e = se(), r = be(), t = H(), a = ue(), n = e ? e.prototype : void 0, i = n ? n.toString : void 0;
  function s(o) {
    if (typeof o == "string")
      return o;
    if (t(o))
      return r(o, s) + "";
    if (a(o))
      return i ? i.call(o) : "";
    var u = o + "";
    return u == "0" && 1 / o == -1 / 0 ? "-0" : u;
  }
  return mt = s, mt;
}
var yt, Zi;
function sc() {
  if (Zi) return yt;
  Zi = 1;
  var e = ic();
  function r(t) {
    return t == null ? "" : e(t);
  }
  return yt = r, yt;
}
var bt, Qi;
function jo() {
  if (Qi) return bt;
  Qi = 1;
  var e = H(), r = Vn(), t = ac(), a = sc();
  function n(i, s) {
    return e(i) ? i : r(i, s) ? [i] : t(a(i));
  }
  return bt = n, bt;
}
var qt, es;
function qe() {
  if (es) return qt;
  es = 1;
  var e = ue();
  function r(t) {
    if (typeof t == "string" || e(t))
      return t;
    var a = t + "";
    return a == "0" && 1 / t == -1 / 0 ? "-0" : a;
  }
  return qt = r, qt;
}
var Rt, rs;
function Wn() {
  if (rs) return Rt;
  rs = 1;
  var e = jo(), r = qe();
  function t(a, n) {
    n = e(n, a);
    for (var i = 0, s = n.length; a != null && i < s; )
      a = a[r(n[i++])];
    return i && i == s ? a : void 0;
  }
  return Rt = t, Rt;
}
var Et, ts;
function oc() {
  if (ts) return Et;
  ts = 1;
  var e = Wn();
  function r(t, a, n) {
    var i = t == null ? void 0 : e(t, a);
    return i === void 0 ? n : i;
  }
  return Et = r, Et;
}
var xt, ns;
function uc() {
  if (ns) return xt;
  ns = 1;
  function e(r, t) {
    return r != null && t in Object(r);
  }
  return xt = e, xt;
}
var Ct, as;
function cc() {
  if (as) return Ct;
  as = 1;
  var e = jo(), r = Bn(), t = H(), a = Ln(), n = Gn(), i = qe();
  function s(o, u, c) {
    u = e(u, o);
    for (var f = -1, l = u.length, v = !1; ++f < l; ) {
      var g = i(u[f]);
      if (!(v = o != null && c(o, g)))
        break;
      o = o[g];
    }
    return v || ++f != l ? v : (l = o == null ? 0 : o.length, !!l && n(l) && a(g, l) && (t(o) || r(o)));
  }
  return Ct = s, Ct;
}
var Pt, is;
function fc() {
  if (is) return Pt;
  is = 1;
  var e = uc(), r = cc();
  function t(a, n) {
    return a != null && r(a, n, e);
  }
  return Pt = t, Pt;
}
var St, ss;
function lc() {
  if (ss) return St;
  ss = 1;
  var e = Io(), r = oc(), t = fc(), a = Vn(), n = No(), i = Do(), s = qe(), o = 1, u = 2;
  function c(f, l) {
    return a(f) && n(l) ? i(s(f), l) : function(v) {
      var g = r(v, f);
      return g === void 0 && g === l ? t(v, f) : e(l, g, o | u);
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
function dc() {
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
function hc() {
  if (cs) return Tt;
  cs = 1;
  var e = Wn();
  function r(t) {
    return function(a) {
      return e(a, t);
    };
  }
  return Tt = r, Tt;
}
var wt, fs;
function vc() {
  if (fs) return wt;
  fs = 1;
  var e = dc(), r = hc(), t = Vn(), a = qe();
  function n(i) {
    return t(i) ? e(a(i)) : r(i);
  }
  return wt = n, wt;
}
var It, ls;
function fe() {
  if (ls) return It;
  ls = 1;
  var e = rc(), r = lc(), t = ce(), a = H(), n = vc();
  function i(s) {
    return typeof s == "function" ? s : s == null ? t : typeof s == "object" ? a(s) ? r(s[0], s[1]) : e(s) : n(s);
  }
  return It = i, It;
}
var Nt, ds;
function pc() {
  if (ds) return Nt;
  ds = 1;
  var e = yo(), r = uu(), t = fe(), a = H();
  function n(i, s) {
    var o = a(i) ? e : r;
    return o(i, t(s, 3));
  }
  return Nt = n, Nt;
}
var _c = pc();
const gc = /* @__PURE__ */ V(_c);
var Dt, hs;
function Mo() {
  if (hs) return Dt;
  hs = 1;
  var e = Un(), r = $();
  function t(a, n) {
    var i = -1, s = r(a) ? Array(a.length) : [];
    return e(a, function(o, u, c) {
      s[++i] = n(o, u, c);
    }), s;
  }
  return Dt = t, Dt;
}
var jt, vs;
function mc() {
  if (vs) return jt;
  vs = 1;
  var e = be(), r = fe(), t = Mo(), a = H();
  function n(i, s) {
    var o = a(i) ? e : t;
    return o(i, r(s, 3));
  }
  return jt = n, jt;
}
var yc = mc();
const bc = /* @__PURE__ */ V(yc);
var Mt, ps;
function qc() {
  if (ps) return Mt;
  ps = 1;
  var e = fe(), r = $(), t = ve();
  function a(n) {
    return function(i, s, o) {
      var u = Object(i);
      if (!r(i)) {
        var c = e(s, 3);
        i = t(i), s = function(l) {
          return c(u[l], l, u);
        };
      }
      var f = n(i, s, o);
      return f > -1 ? u[c ? i[f] : f] : void 0;
    };
  }
  return Mt = a, Mt;
}
var Ft, _s;
function Fo() {
  if (_s) return Ft;
  _s = 1;
  function e(r, t, a, n) {
    for (var i = r.length, s = a + (n ? 1 : -1); n ? s-- : ++s < i; )
      if (t(r[s], s, r))
        return s;
    return -1;
  }
  return Ft = e, Ft;
}
var kt, gs;
function Rc() {
  if (gs) return kt;
  gs = 1;
  var e = /\s/;
  function r(t) {
    for (var a = t.length; a-- && e.test(t.charAt(a)); )
      ;
    return a;
  }
  return kt = r, kt;
}
var Bt, ms;
function Ec() {
  if (ms) return Bt;
  ms = 1;
  var e = Rc(), r = /^\s+/;
  function t(a) {
    return a && a.slice(0, e(a) + 1).replace(r, "");
  }
  return Bt = t, Bt;
}
var Lt, ys;
function xc() {
  if (ys) return Lt;
  ys = 1;
  var e = Ec(), r = Q(), t = ue(), a = NaN, n = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, s = /^0o[0-7]+$/i, o = parseInt;
  function u(c) {
    if (typeof c == "number")
      return c;
    if (t(c))
      return a;
    if (r(c)) {
      var f = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = r(f) ? f + "" : f;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var l = i.test(c);
    return l || s.test(c) ? o(c.slice(2), l ? 2 : 8) : n.test(c) ? a : +c;
  }
  return Lt = u, Lt;
}
var Gt, bs;
function ko() {
  if (bs) return Gt;
  bs = 1;
  var e = xc(), r = 1 / 0, t = 17976931348623157e292;
  function a(n) {
    if (!n)
      return n === 0 ? n : 0;
    if (n = e(n), n === r || n === -r) {
      var i = n < 0 ? -1 : 1;
      return i * t;
    }
    return n === n ? n : 0;
  }
  return Gt = a, Gt;
}
var Ht, qs;
function Cc() {
  if (qs) return Ht;
  qs = 1;
  var e = ko();
  function r(t) {
    var a = e(t), n = a % 1;
    return a === a ? n ? a - n : a : 0;
  }
  return Ht = r, Ht;
}
var Ut, Rs;
function Pc() {
  if (Rs) return Ut;
  Rs = 1;
  var e = Fo(), r = fe(), t = Cc(), a = Math.max;
  function n(i, s, o) {
    var u = i == null ? 0 : i.length;
    if (!u)
      return -1;
    var c = o == null ? 0 : t(o);
    return c < 0 && (c = a(u + c, 0)), e(i, r(s, 3), c);
  }
  return Ut = n, Ut;
}
var Kt, Es;
function Bo() {
  if (Es) return Kt;
  Es = 1;
  var e = qc(), r = Pc(), t = e(r);
  return Kt = t, Kt;
}
var Sc = Bo();
const Ac = /* @__PURE__ */ V(Sc);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Yt, xs;
function Oc() {
  if (xs) return Yt;
  xs = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function a(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function n() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, o = 0; o < 10; o++)
        s["_" + String.fromCharCode(o)] = o;
      var u = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        c[f] = f;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Yt = n() ? Object.assign : function(i, s) {
    for (var o, u = a(i), c, f = 1; f < arguments.length; f++) {
      o = Object(arguments[f]);
      for (var l in o)
        r.call(o, l) && (u[l] = o[l]);
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
function Tc() {
  if (Cs) return Vt;
  Cs = 1;
  var e = Oc(), r = {};
  process.env.NODE_ENV !== "production" && Object.freeze(r);
  var t = function(l) {
  };
  process.env.NODE_ENV !== "production" && (t = function(l) {
    if (l === void 0)
      throw new Error("invariant requires an error message argument");
  });
  function a(f, l, v, g, b, m, y, E) {
    if (t(l), !f) {
      var q;
      if (l === void 0)
        q = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var A = [v, g, b, m, y, E], C = 0;
        q = new Error(l.replace(/%s/g, function() {
          return A[C++];
        })), q.name = "Invariant Violation";
      }
      throw q.framesToPop = 1, q;
    }
  }
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var i = function(l) {
      for (var v = arguments.length, g = Array(v > 1 ? v - 1 : 0), b = 1; b < v; b++)
        g[b - 1] = arguments[b];
      var m = 0, y = "Warning: " + l.replace(/%s/g, function() {
        return g[m++];
      });
      typeof console < "u" && console.error(y);
      try {
        throw new Error(y);
      } catch {
      }
    };
    n = function(l, v) {
      if (v === void 0)
        throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
      if (v.indexOf("Failed Composite propType: ") !== 0 && !l) {
        for (var g = arguments.length, b = Array(g > 2 ? g - 2 : 0), m = 2; m < g; m++)
          b[m - 2] = arguments[m];
        i.apply(void 0, [v].concat(b));
      }
    };
  }
  var s = "mixins";
  function o(f) {
    return f;
  }
  var u;
  process.env.NODE_ENV !== "production" ? u = {
    prop: "prop",
    context: "context",
    childContext: "child context"
  } : u = {};
  function c(f, l, v) {
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
        process.env.NODE_ENV !== "production" && E(p, h, "childContext"), p.childContextTypes = e(
          {},
          p.childContextTypes,
          h
        );
      },
      contextTypes: function(p, h) {
        process.env.NODE_ENV !== "production" && E(p, h, "context"), p.contextTypes = e(
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
        process.env.NODE_ENV !== "production" && E(p, h, "prop"), p.propTypes = e({}, p.propTypes, h);
      },
      statics: function(p, h) {
        C(p, h);
      },
      autobind: function() {
      }
    };
    function E(p, h, R) {
      for (var D in h)
        h.hasOwnProperty(D) && process.env.NODE_ENV !== "production" && n(
          typeof h[D] == "function",
          "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",
          p.displayName || "ReactClass",
          u[R],
          D
        );
    }
    function q(p, h) {
      var R = b.hasOwnProperty(h) ? b[h] : null;
      L.hasOwnProperty(h) && a(
        R === "OVERRIDE_BASE",
        "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",
        h
      ), p && a(
        R === "DEFINE_MANY" || R === "DEFINE_MANY_MERGED",
        "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
        h
      );
    }
    function A(p, h) {
      if (!h) {
        if (process.env.NODE_ENV !== "production") {
          var R = typeof h, D = R === "object" && h !== null;
          process.env.NODE_ENV !== "production" && n(
            D,
            "%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.",
            p.displayName || "ReactClass",
            h === null ? null : R
          );
        }
        return;
      }
      a(
        typeof h != "function",
        "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
      ), a(
        !l(h),
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
              a(
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
            a(
              !N,
              'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
              R
            );
            var d = R in p;
            if (d) {
              var _ = m.hasOwnProperty(R) ? m[R] : null;
              a(
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
      a(
        p && h && typeof p == "object" && typeof h == "object",
        "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."
      );
      for (var R in h)
        h.hasOwnProperty(R) && (a(
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
            process.env.NODE_ENV !== "production" && n(
              !1,
              "bind(): React component methods may only be bound to the component instance. See %s",
              D
            );
          else if (!T.length)
            return process.env.NODE_ENV !== "production" && n(
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
    function M(p) {
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
        return process.env.NODE_ENV !== "production" && (n(
          this.__didWarnIsMounted,
          "%s: isMounted is deprecated. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
          this.constructor && this.constructor.displayName || this.name || "Component"
        ), this.__didWarnIsMounted = !0), !!this.__isMounted;
      }
    }, F = function() {
    };
    e(
      F.prototype,
      f.prototype,
      L
    );
    function K(p) {
      var h = function(D, N, d) {
        process.env.NODE_ENV !== "production" && n(
          this instanceof h,
          "Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"
        ), this.__reactAutoBindPairs.length && M(this), this.props = D, this.context = N, this.refs = r, this.updater = d || v, this.state = null;
        var _ = this.getInitialState ? this.getInitialState() : null;
        process.env.NODE_ENV !== "production" && _ === void 0 && this.getInitialState._isMockFunction && (_ = null), a(
          typeof _ == "object" && !Array.isArray(_),
          "%s.getInitialState(): must return an object or null",
          h.displayName || "ReactCompositeComponent"
        ), this.state = _;
      };
      h.prototype = new F(), h.prototype.constructor = h, h.prototype.__reactAutoBindPairs = [], g.forEach(A.bind(null, h)), A(h, G), A(h, p), A(h, P), h.getDefaultProps && (h.defaultProps = h.getDefaultProps()), process.env.NODE_ENV !== "production" && (h.getDefaultProps && (h.getDefaultProps.isReactClassApproved = {}), h.prototype.getInitialState && (h.prototype.getInitialState.isReactClassApproved = {})), a(
        h.prototype.render,
        "createClass(...): Class specification must implement a `render` method."
      ), process.env.NODE_ENV !== "production" && (n(
        !h.prototype.componentShouldUpdate,
        "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
        p.displayName || "A component"
      ), n(
        !h.prototype.componentWillRecieveProps,
        "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
        p.displayName || "A component"
      ), n(
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
function wc() {
  if (Ps) return Wt;
  Ps = 1;
  var e = kn, r = Tc();
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
var Ic = wc();
const le = /* @__PURE__ */ V(Ic);
var zt, Ss;
function Lo() {
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
function Go() {
  if (As) return $t;
  As = 1;
  var e = Lo();
  function r(t, a, n) {
    a == "__proto__" && e ? e(t, a, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : t[a] = n;
  }
  return $t = r, $t;
}
var Jt, Os;
function Nc() {
  if (Os) return Jt;
  Os = 1;
  var e = Go(), r = pe(), t = Object.prototype, a = t.hasOwnProperty;
  function n(i, s, o) {
    var u = i[s];
    (!(a.call(i, s) && r(u, o)) || o === void 0 && !(s in i)) && e(i, s, o);
  }
  return Jt = n, Jt;
}
var Xt, Ts;
function Dc() {
  if (Ts) return Xt;
  Ts = 1;
  var e = Nc(), r = Go();
  function t(a, n, i, s) {
    var o = !i;
    i || (i = {});
    for (var u = -1, c = n.length; ++u < c; ) {
      var f = n[u], l = s ? s(i[f], a[f], f, i, a) : void 0;
      l === void 0 && (l = a[f]), o ? r(i, f, l) : e(i, f, l);
    }
    return i;
  }
  return Xt = t, Xt;
}
var Zt, ws;
function jc() {
  if (ws) return Zt;
  ws = 1;
  function e(r, t, a) {
    switch (a.length) {
      case 0:
        return r.call(t);
      case 1:
        return r.call(t, a[0]);
      case 2:
        return r.call(t, a[0], a[1]);
      case 3:
        return r.call(t, a[0], a[1], a[2]);
    }
    return r.apply(t, a);
  }
  return Zt = e, Zt;
}
var Qt, Is;
function Mc() {
  if (Is) return Qt;
  Is = 1;
  var e = jc(), r = Math.max;
  function t(a, n, i) {
    return n = r(n === void 0 ? a.length - 1 : n, 0), function() {
      for (var s = arguments, o = -1, u = r(s.length - n, 0), c = Array(u); ++o < u; )
        c[o] = s[n + o];
      o = -1;
      for (var f = Array(n + 1); ++o < n; )
        f[o] = s[o];
      return f[n] = i(c), e(a, this, f);
    };
  }
  return Qt = t, Qt;
}
var en, Ns;
function Fc() {
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
function kc() {
  if (Ds) return rn;
  Ds = 1;
  var e = Fc(), r = Lo(), t = ce(), a = r ? function(n, i) {
    return r(n, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : t;
  return rn = a, rn;
}
var tn, js;
function Bc() {
  if (js) return tn;
  js = 1;
  var e = 800, r = 16, t = Date.now;
  function a(n) {
    var i = 0, s = 0;
    return function() {
      var o = t(), u = r - (o - s);
      if (s = o, u > 0) {
        if (++i >= e)
          return arguments[0];
      } else
        i = 0;
      return n.apply(void 0, arguments);
    };
  }
  return tn = a, tn;
}
var nn, Ms;
function Lc() {
  if (Ms) return nn;
  Ms = 1;
  var e = kc(), r = Bc(), t = r(e);
  return nn = t, nn;
}
var an, Fs;
function zn() {
  if (Fs) return an;
  Fs = 1;
  var e = ce(), r = Mc(), t = Lc();
  function a(n, i) {
    return t(r(n, i, e), n + "");
  }
  return an = a, an;
}
var sn, ks;
function $n() {
  if (ks) return sn;
  ks = 1;
  var e = pe(), r = $(), t = Ln(), a = Q();
  function n(i, s, o) {
    if (!a(o))
      return !1;
    var u = typeof s;
    return (u == "number" ? r(o) && t(s, o.length) : u == "string" && s in o) ? e(o[s], i) : !1;
  }
  return sn = n, sn;
}
var on, Bs;
function Gc() {
  if (Bs) return on;
  Bs = 1;
  var e = zn(), r = $n();
  function t(a) {
    return e(function(n, i) {
      var s = -1, o = i.length, u = o > 1 ? i[o - 1] : void 0, c = o > 2 ? i[2] : void 0;
      for (u = a.length > 3 && typeof u == "function" ? (o--, u) : void 0, c && r(i[0], i[1], c) && (u = o < 3 ? void 0 : u, o = 1), n = Object(n); ++s < o; ) {
        var f = i[s];
        f && a(n, f, s, u);
      }
      return n;
    });
  }
  return on = t, on;
}
var un, Ls;
function Hc() {
  if (Ls) return un;
  Ls = 1;
  function e(r) {
    var t = [];
    if (r != null)
      for (var a in Object(r))
        t.push(a);
    return t;
  }
  return un = e, un;
}
var cn, Gs;
function Uc() {
  if (Gs) return cn;
  Gs = 1;
  var e = Q(), r = xo(), t = Hc(), a = Object.prototype, n = a.hasOwnProperty;
  function i(s) {
    if (!e(s))
      return t(s);
    var o = r(s), u = [];
    for (var c in s)
      c == "constructor" && (o || !n.call(s, c)) || u.push(c);
    return u;
  }
  return cn = i, cn;
}
var fn, Hs;
function Kc() {
  if (Hs) return fn;
  Hs = 1;
  var e = Eo(), r = Uc(), t = $();
  function a(n) {
    return t(n) ? e(n, !0) : r(n);
  }
  return fn = a, fn;
}
var ln, Us;
function Yc() {
  if (Us) return ln;
  Us = 1;
  var e = Dc(), r = Gc(), t = Kc(), a = r(function(n, i) {
    e(i, t(i), n);
  });
  return ln = a, ln;
}
var dn, Ks;
function Vc() {
  return Ks || (Ks = 1, dn = Yc()), dn;
}
var hn, Ys;
function Wc() {
  if (Ys) return hn;
  Ys = 1;
  function e(r, t) {
    for (var a = -1, n = r == null ? 0 : r.length; ++a < n && t(r[a], a, r) !== !1; )
      ;
    return r;
  }
  return hn = e, hn;
}
var vn, Vs;
function zc() {
  if (Vs) return vn;
  Vs = 1;
  var e = ce();
  function r(t) {
    return typeof t == "function" ? t : e;
  }
  return vn = r, vn;
}
var pn, Ws;
function $c() {
  if (Ws) return pn;
  Ws = 1;
  var e = Wc(), r = Un(), t = zc(), a = H();
  function n(i, s) {
    var o = a(i) ? e : r;
    return o(i, t(s));
  }
  return pn = n, pn;
}
var _n, zs;
function Jc() {
  return zs || (zs = 1, _n = $c()), _n;
}
var gn, $s;
function Xc() {
  if ($s) return gn;
  $s = 1;
  var e = se(), r = Bn(), t = H(), a = e ? e.isConcatSpreadable : void 0;
  function n(i) {
    return t(i) || r(i) || !!(a && i && i[a]);
  }
  return gn = n, gn;
}
var mn, Js;
function Zc() {
  if (Js) return mn;
  Js = 1;
  var e = wo(), r = Xc();
  function t(a, n, i, s, o) {
    var u = -1, c = a.length;
    for (i || (i = r), o || (o = []); ++u < c; ) {
      var f = a[u];
      n > 0 && i(f) ? n > 1 ? t(f, n - 1, i, s, o) : e(o, f) : s || (o[o.length] = f);
    }
    return o;
  }
  return mn = t, mn;
}
var yn, Xs;
function Qc() {
  if (Xs) return yn;
  Xs = 1;
  function e(r, t) {
    var a = r.length;
    for (r.sort(t); a--; )
      r[a] = r[a].value;
    return r;
  }
  return yn = e, yn;
}
var bn, Zs;
function ef() {
  if (Zs) return bn;
  Zs = 1;
  var e = ue();
  function r(t, a) {
    if (t !== a) {
      var n = t !== void 0, i = t === null, s = t === t, o = e(t), u = a !== void 0, c = a === null, f = a === a, l = e(a);
      if (!c && !l && !o && t > a || o && u && f && !c && !l || i && u && f || !n && f || !s)
        return 1;
      if (!i && !o && !l && t < a || l && n && s && !i && !o || c && n && s || !u && s || !f)
        return -1;
    }
    return 0;
  }
  return bn = r, bn;
}
var qn, Qs;
function rf() {
  if (Qs) return qn;
  Qs = 1;
  var e = ef();
  function r(t, a, n) {
    for (var i = -1, s = t.criteria, o = a.criteria, u = s.length, c = n.length; ++i < u; ) {
      var f = e(s[i], o[i]);
      if (f) {
        if (i >= c)
          return f;
        var l = n[i];
        return f * (l == "desc" ? -1 : 1);
      }
    }
    return t.index - a.index;
  }
  return qn = r, qn;
}
var Rn, eo;
function tf() {
  if (eo) return Rn;
  eo = 1;
  var e = be(), r = Wn(), t = fe(), a = Mo(), n = Qc(), i = Hn(), s = rf(), o = ce(), u = H();
  function c(f, l, v) {
    l.length ? l = e(l, function(m) {
      return u(m) ? function(y) {
        return r(y, m.length === 1 ? m[0] : m);
      } : m;
    }) : l = [o];
    var g = -1;
    l = e(l, i(t));
    var b = a(f, function(m, y, E) {
      var q = e(l, function(A) {
        return A(m);
      });
      return { criteria: q, index: ++g, value: m };
    });
    return n(b, function(m, y) {
      return s(m, y, v);
    });
  }
  return Rn = c, Rn;
}
var En, ro;
function nf() {
  if (ro) return En;
  ro = 1;
  var e = Zc(), r = tf(), t = zn(), a = $n(), n = t(function(i, s) {
    if (i == null)
      return [];
    var o = s.length;
    return o > 1 && a(i, s[0], s[1]) ? s = [] : o > 2 && a(s[0], s[1], s[2]) && (s = [s[0]]), r(i, e(s, 1), []);
  });
  return En = n, En;
}
var xn, to;
function af() {
  if (to) return xn;
  to = 1;
  var e = {
    extend: Vc(),
    each: Jc(),
    sortBy: nf(),
    find: Bo()
  };
  xn = function(n) {
    return new r(n);
  };
  function r(n) {
    return this.rows = n.rows, this.dimensions = n.dimensions, this.reduce = n.reduce, this.cache = {}, this;
  }
  r.prototype.calculate = function(n) {
    this.activeDimensions = n.dimensions, this.activeDimensions.length < 1 && (this.activeDimensions = [""]), this.sortBy = n.sortBy, this.sortDir = n.sortDir, this.filter = n.filter, this.compact = n.compact;
    var i = this.getResults(), s = this.parseResults(i);
    return s;
  }, r.prototype.getResults = function() {
    var n = this;
    this.getColumns();
    var i = this.activeDimensions, s = this.filter, o = this.reduce, u = {}, c = {};
    return this.rows.forEach(function(f) {
      var l = n.createSetKeys(i, f), v = t(l[l.length - 1]);
      if (!(s && !s(v))) {
        var g = u;
        l.forEach(function(b, m) {
          g[b] || (g[b] = { value: {}, subDimensions: {}, key: b });
          var y = g[b].value;
          if (s || !n.cache[b]) {
            s || (c[b] = y), e.extend(y, o(f, y));
            var E = t(b);
            e.extend(y, E);
          } else
            g[b].value = n.cache[b];
          g = g[b].subDimensions;
        });
      }
    }), e.each(c, function(f, l) {
      n.cache[l] = f;
    }), u;
  }, r.prototype.parseResults = function(n, o) {
    var s = this, o = o || 0, u = [], c = e.sortBy(n, this.getSortValue.bind(this));
    return this.sortDir === "desc" && c.reverse(), e.each(c, function(f) {
      var l = f.value;
      l._level = o, l._key = f.key;
      var v = Object.keys(f.subDimensions).length;
      if (s.compact && v == 1 || u.push(l), v) {
        var g = s.compact && v == 1 ? o : o + 1, b = s.parseResults(f.subDimensions, g);
        b.forEach(function(m) {
          u.push(m);
        });
      }
    }), u;
  }, r.prototype.getColumns = function() {
    var n = [];
    return this.dimensions.forEach(function(i) {
      n.push({ type: "dimension", title: i, value: i });
    }), n;
  }, r.prototype.createSetKeys = function(n, i) {
    for (var s = [], o = 0; o < n.length; o++) {
      var u = n.slice(0, o + 1);
      s.push(this.createSetKey(u, i));
    }
    return s;
  }, r.prototype.createSetKey = function(n, i) {
    var s = this, o = "";
    return e.sortBy(n).forEach(function(u) {
      var c = s.findDimension(u);
      o += [u, a(c, i)].join("ÿ") + "ÿ";
    }), o;
  }, r.prototype.findDimension = function(n) {
    return e.find(this.dimensions, function(i) {
      return i.title === n;
    });
  }, r.prototype.getSortValue = function(n) {
    var i = this.sortBy, s = this.getColumns(), o = e.find(s, function(c) {
      return c.title === i;
    }) || i, u = a(o, n.value);
    return typeof u > "u" ? n.key : !isNaN(parseFloat(u)) && isFinite(u) ? +u : typeof u == "string" ? u.toLowerCase() : u;
  };
  function t(n) {
    for (var i = {}, s = n.split("ÿ"), o = 0; o < s.length; o += 2) {
      var u = s[o], c = s[o + 1];
      u && (i[u] = c);
    }
    return i;
  }
  function a(n, i) {
    if (n == null) return null;
    if (typeof n == "string")
      var s = i[n];
    else if (typeof n == "function")
      var s = n(i);
    else if (typeof n.value == "string")
      var s = i[n.value];
    else
      var s = n.value(i);
    return s;
  }
  return xn;
}
var sf = af();
const no = /* @__PURE__ */ V(sf);
var Cn, ao;
function of() {
  if (ao) return Cn;
  ao = 1, Cn = e;
  function e() {
  }
  return e.mixin = function(r) {
    var t = r.prototype || r;
    t.isWildEmitter = !0, t.on = function(a, n, i) {
      this.callbacks = this.callbacks || {};
      var s = arguments.length === 3, o = s ? arguments[1] : void 0, u = s ? arguments[2] : arguments[1];
      return u._groupName = o, (this.callbacks[a] = this.callbacks[a] || []).push(u), this;
    }, t.once = function(a, n, i) {
      var s = this, o = arguments.length === 3, u = o ? arguments[1] : void 0, c = o ? arguments[2] : arguments[1];
      function f() {
        s.off(a, f), c.apply(this, arguments);
      }
      return this.on(a, u, f), this;
    }, t.releaseGroup = function(a) {
      this.callbacks = this.callbacks || {};
      var n, i, s, o;
      for (n in this.callbacks)
        for (o = this.callbacks[n], i = 0, s = o.length; i < s; i++)
          o[i]._groupName === a && (o.splice(i, 1), i--, s--);
      return this;
    }, t.off = function(a, n) {
      this.callbacks = this.callbacks || {};
      var i = this.callbacks[a], s;
      return i ? arguments.length === 1 ? (delete this.callbacks[a], this) : (s = i.indexOf(n), i.splice(s, 1), i.length === 0 && delete this.callbacks[a], this) : this;
    }, t.emit = function(a) {
      this.callbacks = this.callbacks || {};
      var n = [].slice.call(arguments, 1), i = this.callbacks[a], s = this.getWildcardCallbacks(a), o, u, c;
      if (i)
        for (c = i.slice(), o = 0, u = c.length; o < u && c[o]; ++o)
          c[o].apply(this, n);
      if (s)
        for (u = s.length, c = s.slice(), o = 0, u = c.length; o < u && c[o]; ++o)
          c[o].apply(this, [a].concat(n));
      return this;
    }, t.getWildcardCallbacks = function(a) {
      this.callbacks = this.callbacks || {};
      var n, i, s = [];
      for (n in this.callbacks)
        i = n.split("*"), (n === "*" || i.length === 2 && a.slice(0, i[0].length) === i[0]) && (s = s.concat(this.callbacks[n]));
      return s;
    };
  }, e.mixin(e), Cn;
}
var uf = of();
const cf = /* @__PURE__ */ V(uf), io = Array.prototype.slice;
function z(e) {
  const r = io.call(arguments, 1);
  return function() {
    return e.apply(this, r.concat(io.call(arguments)));
  };
}
function ff(e, r, t) {
  const a = new Blob([e], { type: t }), n = document.createElement("a");
  n.download = r, n.href = window.URL.createObjectURL(a), n.dataset.downloadurl = [t, n.download, n.href].join(":");
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
  ), n.dispatchEvent(i);
}
function Ho(e, r) {
  if (e == null) return null;
  let t;
  return typeof e.value == "string" ? t = r[e.value] : t = e.value(r), t;
}
var Pn, so;
function lf() {
  if (so) return Pn;
  so = 1;
  var e = Math.ceil, r = Math.max;
  function t(a, n, i, s) {
    for (var o = -1, u = r(e((n - a) / (i || 1)), 0), c = Array(u); u--; )
      c[s ? u : ++o] = a, a += i;
    return c;
  }
  return Pn = t, Pn;
}
var Sn, oo;
function df() {
  if (oo) return Sn;
  oo = 1;
  var e = lf(), r = $n(), t = ko();
  function a(n) {
    return function(i, s, o) {
      return o && typeof o != "number" && r(i, s, o) && (s = o = void 0), i = t(i), s === void 0 ? (s = i, i = 0) : s = t(s), o = o === void 0 ? i < s ? 1 : -1 : t(o), e(i, s, o, n);
    };
  }
  return Sn = a, Sn;
}
var An, uo;
function hf() {
  if (uo) return An;
  uo = 1;
  var e = df(), r = e();
  return An = r, An;
}
var vf = hf();
const pf = /* @__PURE__ */ V(vf);
function Jn(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return null;
  }
}
function Uo(e) {
  if (!e || typeof e != "object") return [];
  var r = [];
  return Object.keys(e).forEach(function(t) {
    var a = e[t];
    !a || typeof a != "object" || Object.keys(a).forEach(function(n) {
      if (a[n]) {
        var i;
        try {
          i = JSON.parse(n);
        } catch {
          return;
        }
        r.push({ title: t, key: n, value: i });
      }
    });
  }), r;
}
function _f(e, r) {
  if (!e || typeof e != "object" || !Array.isArray(r)) return null;
  var t = r.filter(function(a) {
    var n = e[a];
    return n && typeof n == "object" && Object.keys(n).length > 0;
  });
  return t.length ? function(a) {
    return gf(a, e, t);
  } : null;
}
function gf(e, r, t) {
  return t.every(function(a) {
    var n = r[a];
    if (!n || !Object.prototype.hasOwnProperty.call(e, a)) return !0;
    var i = Jn(e[a]);
    return i ? Object.prototype.hasOwnProperty.call(n, i) : !1;
  });
}
function mf(e, r, t) {
  var a = Jn(t);
  if (!a) return !1;
  var n = e && e[r];
  return !n || typeof n != "object" ? !1 : Object.prototype.hasOwnProperty.call(n, a);
}
function yf(e) {
  if (!e || typeof e != "string") return null;
  try {
    var r = JSON.parse(e);
    return r && typeof r == "object" ? r : null;
  } catch {
    return null;
  }
}
const bf = { range: pf }, qf = le({
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
    var e = this.props.rows, r = this.paginate(e), t = this.renderTableBody(this.props.columns, r.rows), a = this.renderTableHead(this.props.columns);
    return /* @__PURE__ */ x.jsxs("div", { className: "reactPivot-results", children: [
      /* @__PURE__ */ x.jsxs("table", { className: this.props.tableClassName, children: [
        a,
        t
      ] }),
      this.renderPagination(r)
    ] });
  },
  renderTableHead: function(e) {
    var r = this, t = this.props.sortBy, a = this.props.sortDir;
    return /* @__PURE__ */ x.jsx("thead", { children: /* @__PURE__ */ x.jsx("tr", { children: e.map(function(n) {
      var i = n.className;
      n.title === t && (i += " " + a);
      var s = "";
      return n.type !== "dimension" && (s = /* @__PURE__ */ x.jsx(
        "span",
        {
          className: "reactPivot-hideColumn",
          onClick: z(r.props.onColumnHide, n.title),
          children: "×"
        }
      )), /* @__PURE__ */ x.jsxs(
        "th",
        {
          className: i,
          onClick: z(r.props.onSort, n.title),
          style: { cursor: "pointer" },
          children: [
            s,
            n.title
          ]
        },
        n.title
      );
    }) }) });
  },
  renderTableBody: function(e, r) {
    var t = this;
    return /* @__PURE__ */ x.jsx("tbody", { children: r.map(function(a) {
      return /* @__PURE__ */ x.jsx("tr", { className: "reactPivot-level-" + a._level, children: e.map(function(n, i) {
        return i < a._level ? /* @__PURE__ */ x.jsx("td", { className: "reactPivot-indent" }, i) : t.renderCell(n, a);
      }) }, a._key);
    }) });
  },
  renderCell: function(e, r) {
    if (e.type === "dimension") {
      var t = r[e.title], a = t, n = typeof t < "u";
      e.template && n && (a = e.template(t, r));
    } else {
      var t = Ho(e, r), a = t;
      e.template && (a = e.template(t, r));
    }
    if (n)
      var i = mf(this.props.solo, e.title, t), s = i ? this.props.unsoloText : this.props.soloText, o = /* @__PURE__ */ x.jsx("span", { className: "reactPivot-solo", children: /* @__PURE__ */ x.jsx(
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
    var u = kn.isValidElement(a) ? /* @__PURE__ */ x.jsx("span", { children: a }) : /* @__PURE__ */ x.jsx(
      "span",
      {
        dangerouslySetInnerHTML: { __html: a || a === 0 && "0" || "" }
      }
    );
    return /* @__PURE__ */ x.jsxs(
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
    var r = this, t = e.nPages, a = e.curPage;
    return t === 1 ? "" : /* @__PURE__ */ x.jsx("div", { className: "reactPivot-paginate", children: bf.range(0, t).map(function(n) {
      var i = "reactPivot-pageNumber";
      return n === a && (i += " is-selected"), /* @__PURE__ */ x.jsx("span", { className: i, children: /* @__PURE__ */ x.jsx("a", { onClick: z(r.setPaginatePage, n), children: n + 1 }) }, n);
    }) });
  },
  paginate: function(e) {
    if (e.length <= 0) return { rows: e, nPages: 1, curPage: 0 };
    var r = this.state.paginatePage, t = this.props.nPaginateRows;
    (!t || !isFinite(t)) && (t = e.length);
    var a = Math.ceil(e.length / t);
    r >= a && (r = a - 1);
    var n = r * t, i = e[n]._level, s = [];
    if (i > 0)
      for (var o = n - 1; o >= 0 && (e[o]._level < i && (s.unshift(e[o]), i = e[o]._level), e[o]._level !== 9); o--)
        ;
    var u = n + t, c = s.concat(e.slice(n, u));
    return { rows: c, nPages: a, curPage: r };
  },
  setPaginatePage: function(e) {
    this.setState({ paginatePage: e });
  }
});
var On, co;
function Rf() {
  if (co) return On;
  co = 1;
  function e(r) {
    for (var t = -1, a = r == null ? 0 : r.length, n = 0, i = []; ++t < a; ) {
      var s = r[t];
      s && (i[n++] = s);
    }
    return i;
  }
  return On = e, On;
}
var Ef = Rf();
const xf = /* @__PURE__ */ V(Ef), Cf = { compact: xf }, Pf = le({
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
    var e = this, r = this.props.subDimensionText, t = this.props.selectedDimensions, a = t.length;
    return /* @__PURE__ */ x.jsxs("div", { className: "reactPivot-dimensions", children: [
      t.map(this.renderDimension),
      /* @__PURE__ */ x.jsxs("select", { value: "", onChange: z(e.toggleDimension, a), children: [
        /* @__PURE__ */ x.jsx("option", { value: "", children: r }),
        e.props.dimensions.map(function(n) {
          return /* @__PURE__ */ x.jsx("option", { children: n.title }, n.title);
        })
      ] })
    ] });
  },
  renderDimension: function(e, r) {
    return /* @__PURE__ */ x.jsxs(
      "select",
      {
        value: e,
        onChange: z(this.toggleDimension, r),
        children: [
          /* @__PURE__ */ x.jsx("option", {}),
          this.props.dimensions.map(function(t) {
            return /* @__PURE__ */ x.jsx(
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
    var t = r.target.value, a = this.props.selectedDimensions, n = a.indexOf(t);
    n >= 0 && (a[n] = null), a[e] = t;
    var i = Cf.compact(a);
    this.props.onChange(i);
  }
});
var Tn, fo;
function Sf() {
  if (fo) return Tn;
  fo = 1;
  function e(r) {
    return r !== r;
  }
  return Tn = e, Tn;
}
var wn, lo;
function Af() {
  if (lo) return wn;
  lo = 1;
  function e(r, t, a) {
    for (var n = a - 1, i = r.length; ++n < i; )
      if (r[n] === t)
        return n;
    return -1;
  }
  return wn = e, wn;
}
var In, ho;
function Of() {
  if (ho) return In;
  ho = 1;
  var e = Fo(), r = Sf(), t = Af();
  function a(n, i, s) {
    return i === i ? t(n, i, s) : e(n, r, s);
  }
  return In = a, In;
}
var Nn, vo;
function Tf() {
  if (vo) return Nn;
  vo = 1;
  var e = Of();
  function r(t, a) {
    var n = t == null ? 0 : t.length;
    return !!n && e(t, a, 0) > -1;
  }
  return Nn = r, Nn;
}
var Dn, po;
function wf() {
  if (po) return Dn;
  po = 1;
  function e(r, t, a) {
    for (var n = -1, i = r == null ? 0 : r.length; ++n < i; )
      if (a(t, r[n]))
        return !0;
    return !1;
  }
  return Dn = e, Dn;
}
var jn, _o;
function If() {
  if (_o) return jn;
  _o = 1;
  var e = Ao(), r = Tf(), t = wf(), a = be(), n = Hn(), i = Oo(), s = 200;
  function o(u, c, f, l) {
    var v = -1, g = r, b = !0, m = u.length, y = [], E = c.length;
    if (!m)
      return y;
    f && (c = a(c, n(f))), l ? (g = t, b = !1) : c.length >= s && (g = i, b = !1, c = new e(c));
    e:
      for (; ++v < m; ) {
        var q = u[v], A = f == null ? q : f(q);
        if (q = l || q !== 0 ? q : 0, b && A === A) {
          for (var C = E; C--; )
            if (c[C] === A)
              continue e;
          y.push(q);
        } else g(c, A, l) || y.push(q);
      }
    return y;
  }
  return jn = o, jn;
}
var Mn, go;
function Nf() {
  if (go) return Mn;
  go = 1;
  var e = $(), r = Z();
  function t(a) {
    return r(a) && e(a);
  }
  return Mn = t, Mn;
}
var Fn, mo;
function Df() {
  if (mo) return Fn;
  mo = 1;
  var e = If(), r = zn(), t = Nf(), a = r(function(n, i) {
    return t(n) ? e(n, i) : [];
  });
  return Fn = a, Fn;
}
var jf = Df();
const Mf = /* @__PURE__ */ V(jf), Ff = { without: Mf }, kf = le({
  getDefaultProps: function() {
    return {
      hiddenColumns: [],
      onChange: function() {
      }
    };
  },
  render: function() {
    return /* @__PURE__ */ x.jsx("div", { className: "reactPivot-columnControl", children: this.props.hiddenColumns.length ? /* @__PURE__ */ x.jsxs("select", { value: "", onChange: this.showColumn, children: [
      /* @__PURE__ */ x.jsx("option", { value: "", children: "Hidden Columns" }),
      this.props.hiddenColumns.map(function(e) {
        return /* @__PURE__ */ x.jsx("option", { children: e }, e);
      })
    ] }) : "" });
  },
  showColumn: function(e) {
    var r = e.target.value, t = Ff.without(this.props.hiddenColumns, r);
    this.props.onChange(t);
  }
});
function Bf(e) {
  if (e === null) return "null";
  if (typeof e == "object")
    try {
      return JSON.stringify(e);
    } catch {
      return "[object]";
    }
  return String(e);
}
const Lf = le({
  getDefaultProps: function() {
    return {
      solo: {},
      onToggle: function() {
      }
    };
  },
  render: function() {
    var e = Uo(this.props.solo);
    if (!e.length)
      return /* @__PURE__ */ x.jsx("div", { className: "reactPivot-soloControl" });
    var r = e.map(function(t) {
      var a = Bf(t.value), n = t.title + ": " + a, i;
      try {
        i = JSON.stringify({ title: t.title, value: t.value });
      } catch {
        return null;
      }
      return /* @__PURE__ */ x.jsx("option", { value: i, children: n }, t.title + "::" + t.key);
    }).filter(Boolean);
    return r.length ? /* @__PURE__ */ x.jsx("div", { className: "reactPivot-soloControl", children: /* @__PURE__ */ x.jsxs("select", { value: "", onChange: this.handleToggle, children: [
      /* @__PURE__ */ x.jsx("option", { value: "", children: "Solo Filters" }),
      r
    ] }) }) : /* @__PURE__ */ x.jsx("div", { className: "reactPivot-soloControl" });
  },
  handleToggle: function(e) {
    var r = yf(e.target.value);
    r && (e.target.value = "", this.props.onToggle(r));
  }
}), ne = { filter: gc, map: bc, find: Ac }, Uf = le({
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
      eventBus: new cf(),
      compact: !1,
      excludeSummaryFromExport: !1,
      onData: function() {
      },
      soloText: "solo",
      unsoloText: "unsolo",
      subDimensionText: "Sub Dimension..."
    };
  },
  getInitialState: function() {
    var e = this.props.dimensions, r = ne.filter(this.props.activeDimensions, function(t) {
      return ne.find(e, function(a) {
        return a.title === t;
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
    this.props.defaultStyles && Gf(), this.dataFrame = no({
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
      var a = ne.find(e.props.dimensions, function(n) {
        return n.title === t;
      });
      r.push({
        type: "dimension",
        title: a.title,
        value: a.value,
        className: a.className,
        template: a.template,
        sortBy: a.sortBy
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
    if (Uo(this.state.solo).length === 0) return null;
    var e = this.state.filtersPaused ? "Resume Filters" : "Pause Filters";
    return /* @__PURE__ */ x.jsx("div", { className: "reactPivot-filtersToggle", children: /* @__PURE__ */ x.jsx("button", { onClick: this.toggleFilters, children: e }) });
  },
  render: function() {
    var e = /* @__PURE__ */ x.jsxs("div", { className: "reactPivot", children: [
      /* @__PURE__ */ x.jsxs("div", { className: "reactPivot-toolbar", children: [
        this.props.hideDimensionFilter ? null : /* @__PURE__ */ x.jsx(
          Pf,
          {
            dimensions: this.props.dimensions,
            subDimensionText: this.props.subDimensionText,
            selectedDimensions: this.state.dimensions,
            onChange: this.setDimensions
          }
        ),
        /* @__PURE__ */ x.jsxs("div", { className: "reactPivot-controls", children: [
          /* @__PURE__ */ x.jsx(
            kf,
            {
              hiddenColumns: this.state.hiddenColumns,
              onChange: this.setHiddenColumns
            }
          ),
          /* @__PURE__ */ x.jsx(
            Lf,
            {
              solo: this.state.solo,
              onToggle: this.setSolo
            }
          ),
          this.renderFiltersToggle(),
          /* @__PURE__ */ x.jsx("div", { className: "reactPivot-csvExport", children: /* @__PURE__ */ x.jsx("button", { onClick: z(this.downloadCSV, this.state.rows), children: "Export CSV" }) })
        ] })
      ] }),
      /* @__PURE__ */ x.jsx(
        qf,
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
    }) || {}, a = t.sortBy || (t.type === "dimension" ? t.title : t.value), n = this.state.sortDir, i = this.state.hideRows, s = {
      dimensions: this.state.dimensions,
      sortBy: a,
      sortDir: n,
      compact: this.props.compact
    };
    this.state.filtersPaused || (s.filter = _f(this.state.solo, this.state.dimensions));
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
          var a = Object.assign({}, this.state.solo), n = a[r] || {};
          Object.prototype.hasOwnProperty.call(n, t) ? (a[r] = this.removeSoloValue(n, t), a[r] || delete a[r]) : a[r] = this.addSoloValue(n, t), this.props.eventBus.emit("solo", a), this.setState({ solo: a, filtersPaused: !1 }, this.updateRows);
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
    var r = this, t = this.getColumns(), a = ne.map(t, "title").map(JSON.stringify.bind(JSON)).join(",") + `
`, n = this.state.dimensions.length - 1, i = this.props.excludeSummaryFromExport;
    e.forEach(function(s) {
      if (!(i && s._level < n)) {
        var o = t.map(function(u) {
          if (u.type === "dimension")
            var c = s[u.title];
          else
            var c = Ho(u, s);
          return u.template && r.props.csvTemplateFormat && (c = u.template(c)), JSON.stringify(c);
        });
        a += o.join(",") + `
`;
      }
    }), ff(a, this.props.csvDownloadFileName, "text/csv");
  }
});
function Gf() {
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
  Uf as default
};
