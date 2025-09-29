import kn from "react";
var fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function H(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var de = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function Vo() {
  if (Jn) return ee;
  Jn = 1;
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
  return ee.Fragment = r, ee.jsx = t, ee.jsxs = t, ee;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function Uo() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === O ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case g:
          return "Fragment";
        case y:
          return "Profiler";
        case x:
          return "StrictMode";
        case S:
          return "Suspense";
        case P:
          return "SuspenseList";
        case G:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case m:
            return "Portal";
          case C:
            return l.displayName || "Context";
          case A:
            return (l._context.displayName || "Context") + ".Consumer";
          case N:
            var R = l.render;
            return l = l.displayName, l || (l = R.displayName || R.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case M:
            return R = l.displayName || null, R !== null ? R : e(l.type) || "Memo";
          case F:
            R = l._payload, l = l._init;
            try {
              return e(l(R));
            } catch {
            }
        }
      return null;
    }
    function r(l) {
      return "" + l;
    }
    function t(l) {
      try {
        r(l);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var T = R.error, w = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return T.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          w
        ), r(l);
      }
    }
    function n(l) {
      if (l === g) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === F)
        return "<...>";
      try {
        var R = e(l);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var l = B.A;
      return l === null ? null : l.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(l) {
      if (k.call(l, "key")) {
        var R = Object.getOwnPropertyDescriptor(l, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function o(l, R) {
      function T() {
        h || (h = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: T,
        configurable: !0
      });
    }
    function u() {
      var l = e(this.type);
      return q[l] || (q[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function c(l, R, T, w, $, Q) {
      var I = T.ref;
      return l = {
        $$typeof: b,
        type: l,
        key: R,
        props: T,
        _owner: w
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(l, "ref", { enumerable: !1, value: null }), l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(l, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(l, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function f(l, R, T, w, $, Q) {
      var I = R.children;
      if (I !== void 0)
        if (w)
          if (W(I)) {
            for (w = 0; w < I.length; w++)
              d(I[w]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(I);
      if (k.call(R, "key")) {
        I = e(l);
        var J = Object.keys(R).filter(function(Go) {
          return Go !== "key";
        });
        w = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", L[I + w] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          w,
          I,
          J,
          I
        ), L[I + w] = !0);
      }
      if (I = null, T !== void 0 && (t(T), I = "" + T), s(R) && (t(R.key), I = "" + R.key), "key" in R) {
        T = {};
        for (var qe in R)
          qe !== "key" && (T[qe] = R[qe]);
      } else T = R;
      return I && o(
        T,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), c(
        l,
        I,
        T,
        a(),
        $,
        Q
      );
    }
    function d(l) {
      v(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === F && (l._payload.status === "fulfilled" ? v(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function v(l) {
      return typeof l == "object" && l !== null && l.$$typeof === b;
    }
    var _ = kn, b = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), C = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), B = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, W = Array.isArray, p = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var h, q = {}, j = _.react_stack_bottom_frame.bind(
      _,
      i
    )(), D = p(n(i)), L = {};
    re.Fragment = g, re.jsx = function(l, R, T) {
      var w = 1e4 > B.recentlyCreatedOwnerStacks++;
      return f(
        l,
        R,
        T,
        !1,
        w ? Error("react-stack-top-frame") : j,
        w ? p(n(l)) : D
      );
    }, re.jsxs = function(l, R, T) {
      var w = 1e4 > B.recentlyCreatedOwnerStacks++;
      return f(
        l,
        R,
        T,
        !0,
        w ? Error("react-stack-top-frame") : j,
        w ? p(n(l)) : D
      );
    };
  })()), re;
}
var Zn;
function Ho() {
  return Zn || (Zn = 1, process.env.NODE_ENV === "production" ? de.exports = Vo() : de.exports = Uo()), de.exports;
}
var E = Ho(), Re, Qn;
function go() {
  if (Qn) return Re;
  Qn = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = 0, s = []; ++n < a; ) {
      var o = r[n];
      t(o, n, r) && (s[i++] = o);
    }
    return s;
  }
  return Re = e, Re;
}
var Ee, ea;
function Yo() {
  if (ea) return Ee;
  ea = 1;
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
  return Ee = e, Ee;
}
var xe, ra;
function Wo() {
  if (ra) return xe;
  ra = 1;
  var e = Yo(), r = e();
  return xe = r, xe;
}
var Ce, ta;
function Ko() {
  if (ta) return Ce;
  ta = 1;
  function e(r, t) {
    for (var n = -1, a = Array(r); ++n < r; )
      a[n] = t(n);
    return a;
  }
  return Ce = e, Ce;
}
var Se, na;
function mo() {
  if (na) return Se;
  na = 1;
  var e = typeof fe == "object" && fe && fe.Object === Object && fe;
  return Se = e, Se;
}
var Ae, aa;
function Y() {
  if (aa) return Ae;
  aa = 1;
  var e = mo(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return Ae = t, Ae;
}
var Pe, ia;
function ie() {
  if (ia) return Pe;
  ia = 1;
  var e = Y(), r = e.Symbol;
  return Pe = r, Pe;
}
var Oe, sa;
function zo() {
  if (sa) return Oe;
  sa = 1;
  var e = ie(), r = Object.prototype, t = r.hasOwnProperty, n = r.toString, a = e ? e.toStringTag : void 0;
  function i(s) {
    var o = t.call(s, a), u = s[a];
    try {
      s[a] = void 0;
      var c = !0;
    } catch {
    }
    var f = n.call(s);
    return c && (o ? s[a] = u : delete s[a]), f;
  }
  return Oe = i, Oe;
}
var Te, oa;
function $o() {
  if (oa) return Te;
  oa = 1;
  var e = Object.prototype, r = e.toString;
  function t(n) {
    return r.call(n);
  }
  return Te = t, Te;
}
var we, ua;
function se() {
  if (ua) return we;
  ua = 1;
  var e = ie(), r = zo(), t = $o(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function s(o) {
    return o == null ? o === void 0 ? a : n : i && i in Object(o) ? r(o) : t(o);
  }
  return we = s, we;
}
var Ie, ca;
function X() {
  if (ca) return Ie;
  ca = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return Ie = e, Ie;
}
var Ne, la;
function Jo() {
  if (la) return Ne;
  la = 1;
  var e = se(), r = X(), t = "[object Arguments]";
  function n(a) {
    return r(a) && e(a) == t;
  }
  return Ne = n, Ne;
}
var De, fa;
function Bn() {
  if (fa) return De;
  fa = 1;
  var e = Jo(), r = X(), t = Object.prototype, n = t.hasOwnProperty, a = t.propertyIsEnumerable, i = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(s) {
    return r(s) && n.call(s, "callee") && !a.call(s, "callee");
  };
  return De = i, De;
}
var je, da;
function V() {
  if (da) return je;
  da = 1;
  var e = Array.isArray;
  return je = e, je;
}
var ne = { exports: {} }, Fe, ha;
function Xo() {
  if (ha) return Fe;
  ha = 1;
  function e() {
    return !1;
  }
  return Fe = e, Fe;
}
ne.exports;
var va;
function bo() {
  return va || (va = 1, (function(e, r) {
    var t = Y(), n = Xo(), a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? t.Buffer : void 0, u = o ? o.isBuffer : void 0, c = u || n;
    e.exports = c;
  })(ne, ne.exports)), ne.exports;
}
var Me, pa;
function Ln() {
  if (pa) return Me;
  pa = 1;
  var e = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
  function t(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && r.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Me = t, Me;
}
var ke, _a;
function Gn() {
  if (_a) return ke;
  _a = 1;
  var e = 9007199254740991;
  function r(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= e;
  }
  return ke = r, ke;
}
var Be, ga;
function Zo() {
  if (ga) return Be;
  ga = 1;
  var e = se(), r = Gn(), t = X(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", s = "[object Date]", o = "[object Error]", u = "[object Function]", c = "[object Map]", f = "[object Number]", d = "[object Object]", v = "[object RegExp]", _ = "[object Set]", b = "[object String]", m = "[object WeakMap]", g = "[object ArrayBuffer]", x = "[object DataView]", y = "[object Float32Array]", A = "[object Float64Array]", C = "[object Int8Array]", N = "[object Int16Array]", S = "[object Int32Array]", P = "[object Uint8Array]", M = "[object Uint8ClampedArray]", F = "[object Uint16Array]", G = "[object Uint32Array]", O = {};
  O[y] = O[A] = O[C] = O[N] = O[S] = O[P] = O[M] = O[F] = O[G] = !0, O[n] = O[a] = O[g] = O[i] = O[x] = O[s] = O[o] = O[u] = O[c] = O[f] = O[d] = O[v] = O[_] = O[b] = O[m] = !1;
  function B(k) {
    return t(k) && r(k.length) && !!O[e(k)];
  }
  return Be = B, Be;
}
var Le, ma;
function Vn() {
  if (ma) return Le;
  ma = 1;
  function e(r) {
    return function(t) {
      return r(t);
    };
  }
  return Le = e, Le;
}
var ae = { exports: {} };
ae.exports;
var ba;
function Qo() {
  return ba || (ba = 1, (function(e, r) {
    var t = mo(), n = r && !r.nodeType && r, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && t.process, o = (function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || s && s.binding && s.binding("util");
      } catch {
      }
    })();
    e.exports = o;
  })(ae, ae.exports)), ae.exports;
}
var Ge, ya;
function yo() {
  if (ya) return Ge;
  ya = 1;
  var e = Zo(), r = Vn(), t = Qo(), n = t && t.isTypedArray, a = n ? r(n) : e;
  return Ge = a, Ge;
}
var Ve, qa;
function qo() {
  if (qa) return Ve;
  qa = 1;
  var e = Ko(), r = Bn(), t = V(), n = bo(), a = Ln(), i = yo(), s = Object.prototype, o = s.hasOwnProperty;
  function u(c, f) {
    var d = t(c), v = !d && r(c), _ = !d && !v && n(c), b = !d && !v && !_ && i(c), m = d || v || _ || b, g = m ? e(c.length, String) : [], x = g.length;
    for (var y in c)
      (f || o.call(c, y)) && !(m && // Safari 9 has enumerable `arguments.length` in strict mode.
      (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      _ && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      b && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
      a(y, x))) && g.push(y);
    return g;
  }
  return Ve = u, Ve;
}
var Ue, Ra;
function Ro() {
  if (Ra) return Ue;
  Ra = 1;
  var e = Object.prototype;
  function r(t) {
    var n = t && t.constructor, a = typeof n == "function" && n.prototype || e;
    return t === a;
  }
  return Ue = r, Ue;
}
var He, Ea;
function eu() {
  if (Ea) return He;
  Ea = 1;
  function e(r, t) {
    return function(n) {
      return r(t(n));
    };
  }
  return He = e, He;
}
var Ye, xa;
function ru() {
  if (xa) return Ye;
  xa = 1;
  var e = eu(), r = e(Object.keys, Object);
  return Ye = r, Ye;
}
var We, Ca;
function tu() {
  if (Ca) return We;
  Ca = 1;
  var e = Ro(), r = ru(), t = Object.prototype, n = t.hasOwnProperty;
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
var Ke, Sa;
function Z() {
  if (Sa) return Ke;
  Sa = 1;
  function e(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return Ke = e, Ke;
}
var ze, Aa;
function Eo() {
  if (Aa) return ze;
  Aa = 1;
  var e = se(), r = Z(), t = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function s(o) {
    if (!r(o))
      return !1;
    var u = e(o);
    return u == n || u == a || u == t || u == i;
  }
  return ze = s, ze;
}
var $e, Pa;
function K() {
  if (Pa) return $e;
  Pa = 1;
  var e = Eo(), r = Gn();
  function t(n) {
    return n != null && r(n.length) && !e(n);
  }
  return $e = t, $e;
}
var Je, Oa;
function he() {
  if (Oa) return Je;
  Oa = 1;
  var e = qo(), r = tu(), t = K();
  function n(a) {
    return t(a) ? e(a) : r(a);
  }
  return Je = n, Je;
}
var Xe, Ta;
function nu() {
  if (Ta) return Xe;
  Ta = 1;
  var e = Wo(), r = he();
  function t(n, a) {
    return n && e(n, a, r);
  }
  return Xe = t, Xe;
}
var Ze, wa;
function au() {
  if (wa) return Ze;
  wa = 1;
  var e = K();
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
  return Ze = r, Ze;
}
var Qe, Ia;
function Un() {
  if (Ia) return Qe;
  Ia = 1;
  var e = nu(), r = au(), t = r(e);
  return Qe = t, Qe;
}
var er, Na;
function iu() {
  if (Na) return er;
  Na = 1;
  var e = Un();
  function r(t, n) {
    var a = [];
    return e(t, function(i, s, o) {
      n(i, s, o) && a.push(i);
    }), a;
  }
  return er = r, er;
}
var rr, Da;
function su() {
  if (Da) return rr;
  Da = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return rr = e, rr;
}
var tr, ja;
function ve() {
  if (ja) return tr;
  ja = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return tr = e, tr;
}
var nr, Fa;
function pe() {
  if (Fa) return nr;
  Fa = 1;
  var e = ve();
  function r(t, n) {
    for (var a = t.length; a--; )
      if (e(t[a][0], n))
        return a;
    return -1;
  }
  return nr = r, nr;
}
var ar, Ma;
function ou() {
  if (Ma) return ar;
  Ma = 1;
  var e = pe(), r = Array.prototype, t = r.splice;
  function n(a) {
    var i = this.__data__, s = e(i, a);
    if (s < 0)
      return !1;
    var o = i.length - 1;
    return s == o ? i.pop() : t.call(i, s, 1), --this.size, !0;
  }
  return ar = n, ar;
}
var ir, ka;
function uu() {
  if (ka) return ir;
  ka = 1;
  var e = pe();
  function r(t) {
    var n = this.__data__, a = e(n, t);
    return a < 0 ? void 0 : n[a][1];
  }
  return ir = r, ir;
}
var sr, Ba;
function cu() {
  if (Ba) return sr;
  Ba = 1;
  var e = pe();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return sr = r, sr;
}
var or, La;
function lu() {
  if (La) return or;
  La = 1;
  var e = pe();
  function r(t, n) {
    var a = this.__data__, i = e(a, t);
    return i < 0 ? (++this.size, a.push([t, n])) : a[i][1] = n, this;
  }
  return or = r, or;
}
var ur, Ga;
function _e() {
  if (Ga) return ur;
  Ga = 1;
  var e = su(), r = ou(), t = uu(), n = cu(), a = lu();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var c = s[o];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, ur = i, ur;
}
var cr, Va;
function fu() {
  if (Va) return cr;
  Va = 1;
  var e = _e();
  function r() {
    this.__data__ = new e(), this.size = 0;
  }
  return cr = r, cr;
}
var lr, Ua;
function du() {
  if (Ua) return lr;
  Ua = 1;
  function e(r) {
    var t = this.__data__, n = t.delete(r);
    return this.size = t.size, n;
  }
  return lr = e, lr;
}
var fr, Ha;
function hu() {
  if (Ha) return fr;
  Ha = 1;
  function e(r) {
    return this.__data__.get(r);
  }
  return fr = e, fr;
}
var dr, Ya;
function vu() {
  if (Ya) return dr;
  Ya = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return dr = e, dr;
}
var hr, Wa;
function pu() {
  if (Wa) return hr;
  Wa = 1;
  var e = Y(), r = e["__core-js_shared__"];
  return hr = r, hr;
}
var vr, Ka;
function _u() {
  if (Ka) return vr;
  Ka = 1;
  var e = pu(), r = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function t(n) {
    return !!r && r in n;
  }
  return vr = t, vr;
}
var pr, za;
function xo() {
  if (za) return pr;
  za = 1;
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
  return pr = t, pr;
}
var _r, $a;
function gu() {
  if ($a) return _r;
  $a = 1;
  var e = Eo(), r = _u(), t = Z(), n = xo(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, o = Object.prototype, u = s.toString, c = o.hasOwnProperty, f = RegExp(
    "^" + u.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function d(v) {
    if (!t(v) || r(v))
      return !1;
    var _ = e(v) ? f : i;
    return _.test(n(v));
  }
  return _r = d, _r;
}
var gr, Ja;
function mu() {
  if (Ja) return gr;
  Ja = 1;
  function e(r, t) {
    return r?.[t];
  }
  return gr = e, gr;
}
var mr, Xa;
function z() {
  if (Xa) return mr;
  Xa = 1;
  var e = gu(), r = mu();
  function t(n, a) {
    var i = r(n, a);
    return e(i) ? i : void 0;
  }
  return mr = t, mr;
}
var br, Za;
function Hn() {
  if (Za) return br;
  Za = 1;
  var e = z(), r = Y(), t = e(r, "Map");
  return br = t, br;
}
var yr, Qa;
function ge() {
  if (Qa) return yr;
  Qa = 1;
  var e = z(), r = e(Object, "create");
  return yr = r, yr;
}
var qr, ei;
function bu() {
  if (ei) return qr;
  ei = 1;
  var e = ge();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return qr = r, qr;
}
var Rr, ri;
function yu() {
  if (ri) return Rr;
  ri = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return Rr = e, Rr;
}
var Er, ti;
function qu() {
  if (ti) return Er;
  ti = 1;
  var e = ge(), r = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function a(i) {
    var s = this.__data__;
    if (e) {
      var o = s[i];
      return o === r ? void 0 : o;
    }
    return n.call(s, i) ? s[i] : void 0;
  }
  return Er = a, Er;
}
var xr, ni;
function Ru() {
  if (ni) return xr;
  ni = 1;
  var e = ge(), r = Object.prototype, t = r.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : t.call(i, a);
  }
  return xr = n, xr;
}
var Cr, ai;
function Eu() {
  if (ai) return Cr;
  ai = 1;
  var e = ge(), r = "__lodash_hash_undefined__";
  function t(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? r : a, this;
  }
  return Cr = t, Cr;
}
var Sr, ii;
function xu() {
  if (ii) return Sr;
  ii = 1;
  var e = bu(), r = yu(), t = qu(), n = Ru(), a = Eu();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var c = s[o];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Sr = i, Sr;
}
var Ar, si;
function Cu() {
  if (si) return Ar;
  si = 1;
  var e = xu(), r = _e(), t = Hn();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return Ar = n, Ar;
}
var Pr, oi;
function Su() {
  if (oi) return Pr;
  oi = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return Pr = e, Pr;
}
var Or, ui;
function me() {
  if (ui) return Or;
  ui = 1;
  var e = Su();
  function r(t, n) {
    var a = t.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return Or = r, Or;
}
var Tr, ci;
function Au() {
  if (ci) return Tr;
  ci = 1;
  var e = me();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return Tr = r, Tr;
}
var wr, li;
function Pu() {
  if (li) return wr;
  li = 1;
  var e = me();
  function r(t) {
    return e(this, t).get(t);
  }
  return wr = r, wr;
}
var Ir, fi;
function Ou() {
  if (fi) return Ir;
  fi = 1;
  var e = me();
  function r(t) {
    return e(this, t).has(t);
  }
  return Ir = r, Ir;
}
var Nr, di;
function Tu() {
  if (di) return Nr;
  di = 1;
  var e = me();
  function r(t, n) {
    var a = e(this, t), i = a.size;
    return a.set(t, n), this.size += a.size == i ? 0 : 1, this;
  }
  return Nr = r, Nr;
}
var Dr, hi;
function Yn() {
  if (hi) return Dr;
  hi = 1;
  var e = Cu(), r = Au(), t = Pu(), n = Ou(), a = Tu();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var c = s[o];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = r, i.prototype.get = t, i.prototype.has = n, i.prototype.set = a, Dr = i, Dr;
}
var jr, vi;
function wu() {
  if (vi) return jr;
  vi = 1;
  var e = _e(), r = Hn(), t = Yn(), n = 200;
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
  return jr = a, jr;
}
var Fr, pi;
function Co() {
  if (pi) return Fr;
  pi = 1;
  var e = _e(), r = fu(), t = du(), n = hu(), a = vu(), i = wu();
  function s(o) {
    var u = this.__data__ = new e(o);
    this.size = u.size;
  }
  return s.prototype.clear = r, s.prototype.delete = t, s.prototype.get = n, s.prototype.has = a, s.prototype.set = i, Fr = s, Fr;
}
var Mr, _i;
function Iu() {
  if (_i) return Mr;
  _i = 1;
  var e = "__lodash_hash_undefined__";
  function r(t) {
    return this.__data__.set(t, e), this;
  }
  return Mr = r, Mr;
}
var kr, gi;
function Nu() {
  if (gi) return kr;
  gi = 1;
  function e(r) {
    return this.__data__.has(r);
  }
  return kr = e, kr;
}
var Br, mi;
function So() {
  if (mi) return Br;
  mi = 1;
  var e = Yn(), r = Iu(), t = Nu();
  function n(a) {
    var i = -1, s = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < s; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = r, n.prototype.has = t, Br = n, Br;
}
var Lr, bi;
function Du() {
  if (bi) return Lr;
  bi = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a; )
      if (t(r[n], n, r))
        return !0;
    return !1;
  }
  return Lr = e, Lr;
}
var Gr, yi;
function Ao() {
  if (yi) return Gr;
  yi = 1;
  function e(r, t) {
    return r.has(t);
  }
  return Gr = e, Gr;
}
var Vr, qi;
function Po() {
  if (qi) return Vr;
  qi = 1;
  var e = So(), r = Du(), t = Ao(), n = 1, a = 2;
  function i(s, o, u, c, f, d) {
    var v = u & n, _ = s.length, b = o.length;
    if (_ != b && !(v && b > _))
      return !1;
    var m = d.get(s), g = d.get(o);
    if (m && g)
      return m == o && g == s;
    var x = -1, y = !0, A = u & a ? new e() : void 0;
    for (d.set(s, o), d.set(o, s); ++x < _; ) {
      var C = s[x], N = o[x];
      if (c)
        var S = v ? c(N, C, x, o, s, d) : c(C, N, x, s, o, d);
      if (S !== void 0) {
        if (S)
          continue;
        y = !1;
        break;
      }
      if (A) {
        if (!r(o, function(P, M) {
          if (!t(A, M) && (C === P || f(C, P, u, c, d)))
            return A.push(M);
        })) {
          y = !1;
          break;
        }
      } else if (!(C === N || f(C, N, u, c, d))) {
        y = !1;
        break;
      }
    }
    return d.delete(s), d.delete(o), y;
  }
  return Vr = i, Vr;
}
var Ur, Ri;
function ju() {
  if (Ri) return Ur;
  Ri = 1;
  var e = Y(), r = e.Uint8Array;
  return Ur = r, Ur;
}
var Hr, Ei;
function Fu() {
  if (Ei) return Hr;
  Ei = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a, i) {
      n[++t] = [i, a];
    }), n;
  }
  return Hr = e, Hr;
}
var Yr, xi;
function Mu() {
  if (xi) return Yr;
  xi = 1;
  function e(r) {
    var t = -1, n = Array(r.size);
    return r.forEach(function(a) {
      n[++t] = a;
    }), n;
  }
  return Yr = e, Yr;
}
var Wr, Ci;
function ku() {
  if (Ci) return Wr;
  Ci = 1;
  var e = ie(), r = ju(), t = ve(), n = Po(), a = Fu(), i = Mu(), s = 1, o = 2, u = "[object Boolean]", c = "[object Date]", f = "[object Error]", d = "[object Map]", v = "[object Number]", _ = "[object RegExp]", b = "[object Set]", m = "[object String]", g = "[object Symbol]", x = "[object ArrayBuffer]", y = "[object DataView]", A = e ? e.prototype : void 0, C = A ? A.valueOf : void 0;
  function N(S, P, M, F, G, O, B) {
    switch (M) {
      case y:
        if (S.byteLength != P.byteLength || S.byteOffset != P.byteOffset)
          return !1;
        S = S.buffer, P = P.buffer;
      case x:
        return !(S.byteLength != P.byteLength || !O(new r(S), new r(P)));
      case u:
      case c:
      case v:
        return t(+S, +P);
      case f:
        return S.name == P.name && S.message == P.message;
      case _:
      case m:
        return S == P + "";
      case d:
        var k = a;
      case b:
        var W = F & s;
        if (k || (k = i), S.size != P.size && !W)
          return !1;
        var p = B.get(S);
        if (p)
          return p == P;
        F |= o, B.set(S, P);
        var h = n(k(S), k(P), F, G, O, B);
        return B.delete(S), h;
      case g:
        if (C)
          return C.call(S) == C.call(P);
    }
    return !1;
  }
  return Wr = N, Wr;
}
var Kr, Si;
function Oo() {
  if (Si) return Kr;
  Si = 1;
  function e(r, t) {
    for (var n = -1, a = t.length, i = r.length; ++n < a; )
      r[i + n] = t[n];
    return r;
  }
  return Kr = e, Kr;
}
var zr, Ai;
function Bu() {
  if (Ai) return zr;
  Ai = 1;
  var e = Oo(), r = V();
  function t(n, a, i) {
    var s = a(n);
    return r(n) ? s : e(s, i(n));
  }
  return zr = t, zr;
}
var $r, Pi;
function Lu() {
  if (Pi) return $r;
  Pi = 1;
  function e() {
    return [];
  }
  return $r = e, $r;
}
var Jr, Oi;
function Gu() {
  if (Oi) return Jr;
  Oi = 1;
  var e = go(), r = Lu(), t = Object.prototype, n = t.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(s) {
    return s == null ? [] : (s = Object(s), e(a(s), function(o) {
      return n.call(s, o);
    }));
  } : r;
  return Jr = i, Jr;
}
var Xr, Ti;
function Vu() {
  if (Ti) return Xr;
  Ti = 1;
  var e = Bu(), r = Gu(), t = he();
  function n(a) {
    return e(a, t, r);
  }
  return Xr = n, Xr;
}
var Zr, wi;
function Uu() {
  if (wi) return Zr;
  wi = 1;
  var e = Vu(), r = 1, t = Object.prototype, n = t.hasOwnProperty;
  function a(i, s, o, u, c, f) {
    var d = o & r, v = e(i), _ = v.length, b = e(s), m = b.length;
    if (_ != m && !d)
      return !1;
    for (var g = _; g--; ) {
      var x = v[g];
      if (!(d ? x in s : n.call(s, x)))
        return !1;
    }
    var y = f.get(i), A = f.get(s);
    if (y && A)
      return y == s && A == i;
    var C = !0;
    f.set(i, s), f.set(s, i);
    for (var N = d; ++g < _; ) {
      x = v[g];
      var S = i[x], P = s[x];
      if (u)
        var M = d ? u(P, S, x, s, i, f) : u(S, P, x, i, s, f);
      if (!(M === void 0 ? S === P || c(S, P, o, u, f) : M)) {
        C = !1;
        break;
      }
      N || (N = x == "constructor");
    }
    if (C && !N) {
      var F = i.constructor, G = s.constructor;
      F != G && "constructor" in i && "constructor" in s && !(typeof F == "function" && F instanceof F && typeof G == "function" && G instanceof G) && (C = !1);
    }
    return f.delete(i), f.delete(s), C;
  }
  return Zr = a, Zr;
}
var Qr, Ii;
function Hu() {
  if (Ii) return Qr;
  Ii = 1;
  var e = z(), r = Y(), t = e(r, "DataView");
  return Qr = t, Qr;
}
var et, Ni;
function Yu() {
  if (Ni) return et;
  Ni = 1;
  var e = z(), r = Y(), t = e(r, "Promise");
  return et = t, et;
}
var rt, Di;
function Wu() {
  if (Di) return rt;
  Di = 1;
  var e = z(), r = Y(), t = e(r, "Set");
  return rt = t, rt;
}
var tt, ji;
function Ku() {
  if (ji) return tt;
  ji = 1;
  var e = z(), r = Y(), t = e(r, "WeakMap");
  return tt = t, tt;
}
var nt, Fi;
function zu() {
  if (Fi) return nt;
  Fi = 1;
  var e = Hu(), r = Hn(), t = Yu(), n = Wu(), a = Ku(), i = se(), s = xo(), o = "[object Map]", u = "[object Object]", c = "[object Promise]", f = "[object Set]", d = "[object WeakMap]", v = "[object DataView]", _ = s(e), b = s(r), m = s(t), g = s(n), x = s(a), y = i;
  return (e && y(new e(new ArrayBuffer(1))) != v || r && y(new r()) != o || t && y(t.resolve()) != c || n && y(new n()) != f || a && y(new a()) != d) && (y = function(A) {
    var C = i(A), N = C == u ? A.constructor : void 0, S = N ? s(N) : "";
    if (S)
      switch (S) {
        case _:
          return v;
        case b:
          return o;
        case m:
          return c;
        case g:
          return f;
        case x:
          return d;
      }
    return C;
  }), nt = y, nt;
}
var at, Mi;
function $u() {
  if (Mi) return at;
  Mi = 1;
  var e = Co(), r = Po(), t = ku(), n = Uu(), a = zu(), i = V(), s = bo(), o = yo(), u = 1, c = "[object Arguments]", f = "[object Array]", d = "[object Object]", v = Object.prototype, _ = v.hasOwnProperty;
  function b(m, g, x, y, A, C) {
    var N = i(m), S = i(g), P = N ? f : a(m), M = S ? f : a(g);
    P = P == c ? d : P, M = M == c ? d : M;
    var F = P == d, G = M == d, O = P == M;
    if (O && s(m)) {
      if (!s(g))
        return !1;
      N = !0, F = !1;
    }
    if (O && !F)
      return C || (C = new e()), N || o(m) ? r(m, g, x, y, A, C) : t(m, g, P, x, y, A, C);
    if (!(x & u)) {
      var B = F && _.call(m, "__wrapped__"), k = G && _.call(g, "__wrapped__");
      if (B || k) {
        var W = B ? m.value() : m, p = k ? g.value() : g;
        return C || (C = new e()), A(W, p, x, y, C);
      }
    }
    return O ? (C || (C = new e()), n(m, g, x, y, A, C)) : !1;
  }
  return at = b, at;
}
var it, ki;
function To() {
  if (ki) return it;
  ki = 1;
  var e = $u(), r = X();
  function t(n, a, i, s, o) {
    return n === a ? !0 : n == null || a == null || !r(n) && !r(a) ? n !== n && a !== a : e(n, a, i, s, t, o);
  }
  return it = t, it;
}
var st, Bi;
function Ju() {
  if (Bi) return st;
  Bi = 1;
  var e = Co(), r = To(), t = 1, n = 2;
  function a(i, s, o, u) {
    var c = o.length, f = c, d = !u;
    if (i == null)
      return !f;
    for (i = Object(i); c--; ) {
      var v = o[c];
      if (d && v[2] ? v[1] !== i[v[0]] : !(v[0] in i))
        return !1;
    }
    for (; ++c < f; ) {
      v = o[c];
      var _ = v[0], b = i[_], m = v[1];
      if (d && v[2]) {
        if (b === void 0 && !(_ in i))
          return !1;
      } else {
        var g = new e();
        if (u)
          var x = u(b, m, _, i, s, g);
        if (!(x === void 0 ? r(m, b, t | n, u, g) : x))
          return !1;
      }
    }
    return !0;
  }
  return st = a, st;
}
var ot, Li;
function wo() {
  if (Li) return ot;
  Li = 1;
  var e = Z();
  function r(t) {
    return t === t && !e(t);
  }
  return ot = r, ot;
}
var ut, Gi;
function Xu() {
  if (Gi) return ut;
  Gi = 1;
  var e = wo(), r = he();
  function t(n) {
    for (var a = r(n), i = a.length; i--; ) {
      var s = a[i], o = n[s];
      a[i] = [s, o, e(o)];
    }
    return a;
  }
  return ut = t, ut;
}
var ct, Vi;
function Io() {
  if (Vi) return ct;
  Vi = 1;
  function e(r, t) {
    return function(n) {
      return n == null ? !1 : n[r] === t && (t !== void 0 || r in Object(n));
    };
  }
  return ct = e, ct;
}
var lt, Ui;
function Zu() {
  if (Ui) return lt;
  Ui = 1;
  var e = Ju(), r = Xu(), t = Io();
  function n(a) {
    var i = r(a);
    return i.length == 1 && i[0][2] ? t(i[0][0], i[0][1]) : function(s) {
      return s === a || e(s, a, i);
    };
  }
  return lt = n, lt;
}
var ft, Hi;
function oe() {
  if (Hi) return ft;
  Hi = 1;
  var e = se(), r = X(), t = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || r(a) && e(a) == t;
  }
  return ft = n, ft;
}
var dt, Yi;
function Wn() {
  if (Yi) return dt;
  Yi = 1;
  var e = V(), r = oe(), t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, s) {
    if (e(i))
      return !1;
    var o = typeof i;
    return o == "number" || o == "symbol" || o == "boolean" || i == null || r(i) ? !0 : n.test(i) || !t.test(i) || s != null && i in Object(s);
  }
  return dt = a, dt;
}
var ht, Wi;
function Qu() {
  if (Wi) return ht;
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
  return t.Cache = e, ht = t, ht;
}
var vt, Ki;
function ec() {
  if (Ki) return vt;
  Ki = 1;
  var e = Qu(), r = 500;
  function t(n) {
    var a = e(n, function(s) {
      return i.size === r && i.clear(), s;
    }), i = a.cache;
    return a;
  }
  return vt = t, vt;
}
var pt, zi;
function rc() {
  if (zi) return pt;
  zi = 1;
  var e = ec(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, t = /\\(\\)?/g, n = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(r, function(s, o, u, c) {
      i.push(u ? c.replace(t, "$1") : o || s);
    }), i;
  });
  return pt = n, pt;
}
var _t, $i;
function be() {
  if ($i) return _t;
  $i = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length, i = Array(a); ++n < a; )
      i[n] = t(r[n], n, r);
    return i;
  }
  return _t = e, _t;
}
var gt, Ji;
function tc() {
  if (Ji) return gt;
  Ji = 1;
  var e = ie(), r = be(), t = V(), n = oe(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
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
  return gt = s, gt;
}
var mt, Xi;
function nc() {
  if (Xi) return mt;
  Xi = 1;
  var e = tc();
  function r(t) {
    return t == null ? "" : e(t);
  }
  return mt = r, mt;
}
var bt, Zi;
function No() {
  if (Zi) return bt;
  Zi = 1;
  var e = V(), r = Wn(), t = rc(), n = nc();
  function a(i, s) {
    return e(i) ? i : r(i, s) ? [i] : t(n(i));
  }
  return bt = a, bt;
}
var yt, Qi;
function ye() {
  if (Qi) return yt;
  Qi = 1;
  var e = oe();
  function r(t) {
    if (typeof t == "string" || e(t))
      return t;
    var n = t + "";
    return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
  }
  return yt = r, yt;
}
var qt, es;
function Kn() {
  if (es) return qt;
  es = 1;
  var e = No(), r = ye();
  function t(n, a) {
    a = e(a, n);
    for (var i = 0, s = a.length; n != null && i < s; )
      n = n[r(a[i++])];
    return i && i == s ? n : void 0;
  }
  return qt = t, qt;
}
var Rt, rs;
function ac() {
  if (rs) return Rt;
  rs = 1;
  var e = Kn();
  function r(t, n, a) {
    var i = t == null ? void 0 : e(t, n);
    return i === void 0 ? a : i;
  }
  return Rt = r, Rt;
}
var Et, ts;
function ic() {
  if (ts) return Et;
  ts = 1;
  function e(r, t) {
    return r != null && t in Object(r);
  }
  return Et = e, Et;
}
var xt, ns;
function sc() {
  if (ns) return xt;
  ns = 1;
  var e = No(), r = Bn(), t = V(), n = Ln(), a = Gn(), i = ye();
  function s(o, u, c) {
    u = e(u, o);
    for (var f = -1, d = u.length, v = !1; ++f < d; ) {
      var _ = i(u[f]);
      if (!(v = o != null && c(o, _)))
        break;
      o = o[_];
    }
    return v || ++f != d ? v : (d = o == null ? 0 : o.length, !!d && a(d) && n(_, d) && (t(o) || r(o)));
  }
  return xt = s, xt;
}
var Ct, as;
function oc() {
  if (as) return Ct;
  as = 1;
  var e = ic(), r = sc();
  function t(n, a) {
    return n != null && r(n, a, e);
  }
  return Ct = t, Ct;
}
var St, is;
function uc() {
  if (is) return St;
  is = 1;
  var e = To(), r = ac(), t = oc(), n = Wn(), a = wo(), i = Io(), s = ye(), o = 1, u = 2;
  function c(f, d) {
    return n(f) && a(d) ? i(s(f), d) : function(v) {
      var _ = r(v, f);
      return _ === void 0 && _ === d ? t(v, f) : e(d, _, o | u);
    };
  }
  return St = c, St;
}
var At, ss;
function ue() {
  if (ss) return At;
  ss = 1;
  function e(r) {
    return r;
  }
  return At = e, At;
}
var Pt, os;
function cc() {
  if (os) return Pt;
  os = 1;
  function e(r) {
    return function(t) {
      return t?.[r];
    };
  }
  return Pt = e, Pt;
}
var Ot, us;
function lc() {
  if (us) return Ot;
  us = 1;
  var e = Kn();
  function r(t) {
    return function(n) {
      return e(n, t);
    };
  }
  return Ot = r, Ot;
}
var Tt, cs;
function fc() {
  if (cs) return Tt;
  cs = 1;
  var e = cc(), r = lc(), t = Wn(), n = ye();
  function a(i) {
    return t(i) ? e(n(i)) : r(i);
  }
  return Tt = a, Tt;
}
var wt, ls;
function ce() {
  if (ls) return wt;
  ls = 1;
  var e = Zu(), r = uc(), t = ue(), n = V(), a = fc();
  function i(s) {
    return typeof s == "function" ? s : s == null ? t : typeof s == "object" ? n(s) ? r(s[0], s[1]) : e(s) : a(s);
  }
  return wt = i, wt;
}
var It, fs;
function dc() {
  if (fs) return It;
  fs = 1;
  var e = go(), r = iu(), t = ce(), n = V();
  function a(i, s) {
    var o = n(i) ? e : r;
    return o(i, t(s, 3));
  }
  return It = a, It;
}
var hc = dc();
const vc = /* @__PURE__ */ H(hc);
var Nt, ds;
function Do() {
  if (ds) return Nt;
  ds = 1;
  var e = Un(), r = K();
  function t(n, a) {
    var i = -1, s = r(n) ? Array(n.length) : [];
    return e(n, function(o, u, c) {
      s[++i] = a(o, u, c);
    }), s;
  }
  return Nt = t, Nt;
}
var Dt, hs;
function pc() {
  if (hs) return Dt;
  hs = 1;
  var e = be(), r = ce(), t = Do(), n = V();
  function a(i, s) {
    var o = n(i) ? e : t;
    return o(i, r(s, 3));
  }
  return Dt = a, Dt;
}
var _c = pc();
const gc = /* @__PURE__ */ H(_c);
var jt, vs;
function mc() {
  if (vs) return jt;
  vs = 1;
  var e = ce(), r = K(), t = he();
  function n(a) {
    return function(i, s, o) {
      var u = Object(i);
      if (!r(i)) {
        var c = e(s, 3);
        i = t(i), s = function(d) {
          return c(u[d], d, u);
        };
      }
      var f = a(i, s, o);
      return f > -1 ? u[c ? i[f] : f] : void 0;
    };
  }
  return jt = n, jt;
}
var Ft, ps;
function jo() {
  if (ps) return Ft;
  ps = 1;
  function e(r, t, n, a) {
    for (var i = r.length, s = n + (a ? 1 : -1); a ? s-- : ++s < i; )
      if (t(r[s], s, r))
        return s;
    return -1;
  }
  return Ft = e, Ft;
}
var Mt, _s;
function bc() {
  if (_s) return Mt;
  _s = 1;
  var e = /\s/;
  function r(t) {
    for (var n = t.length; n-- && e.test(t.charAt(n)); )
      ;
    return n;
  }
  return Mt = r, Mt;
}
var kt, gs;
function yc() {
  if (gs) return kt;
  gs = 1;
  var e = bc(), r = /^\s+/;
  function t(n) {
    return n && n.slice(0, e(n) + 1).replace(r, "");
  }
  return kt = t, kt;
}
var Bt, ms;
function qc() {
  if (ms) return Bt;
  ms = 1;
  var e = yc(), r = Z(), t = oe(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, s = /^0o[0-7]+$/i, o = parseInt;
  function u(c) {
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
    return d || s.test(c) ? o(c.slice(2), d ? 2 : 8) : a.test(c) ? n : +c;
  }
  return Bt = u, Bt;
}
var Lt, bs;
function Fo() {
  if (bs) return Lt;
  bs = 1;
  var e = qc(), r = 1 / 0, t = 17976931348623157e292;
  function n(a) {
    if (!a)
      return a === 0 ? a : 0;
    if (a = e(a), a === r || a === -r) {
      var i = a < 0 ? -1 : 1;
      return i * t;
    }
    return a === a ? a : 0;
  }
  return Lt = n, Lt;
}
var Gt, ys;
function Rc() {
  if (ys) return Gt;
  ys = 1;
  var e = Fo();
  function r(t) {
    var n = e(t), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return Gt = r, Gt;
}
var Vt, qs;
function Ec() {
  if (qs) return Vt;
  qs = 1;
  var e = jo(), r = ce(), t = Rc(), n = Math.max;
  function a(i, s, o) {
    var u = i == null ? 0 : i.length;
    if (!u)
      return -1;
    var c = o == null ? 0 : t(o);
    return c < 0 && (c = n(u + c, 0)), e(i, r(s, 3), c);
  }
  return Vt = a, Vt;
}
var Ut, Rs;
function Mo() {
  if (Rs) return Ut;
  Rs = 1;
  var e = mc(), r = Ec(), t = e(r);
  return Ut = t, Ut;
}
var xc = Mo();
const Cc = /* @__PURE__ */ H(xc);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ht, Es;
function Sc() {
  if (Es) return Ht;
  Es = 1;
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
  return Ht = a() ? Object.assign : function(i, s) {
    for (var o, u = n(i), c, f = 1; f < arguments.length; f++) {
      o = Object(arguments[f]);
      for (var d in o)
        r.call(o, d) && (u[d] = o[d]);
      if (e) {
        c = e(o);
        for (var v = 0; v < c.length; v++)
          t.call(o, c[v]) && (u[c[v]] = o[c[v]]);
      }
    }
    return u;
  }, Ht;
}
var Yt, xs;
function Ac() {
  if (xs) return Yt;
  xs = 1;
  var e = Sc(), r = {};
  process.env.NODE_ENV !== "production" && Object.freeze(r);
  var t = function(d) {
  };
  process.env.NODE_ENV !== "production" && (t = function(d) {
    if (d === void 0)
      throw new Error("invariant requires an error message argument");
  });
  function n(f, d, v, _, b, m, g, x) {
    if (t(d), !f) {
      var y;
      if (d === void 0)
        y = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var A = [v, _, b, m, g, x], C = 0;
        y = new Error(d.replace(/%s/g, function() {
          return A[C++];
        })), y.name = "Invariant Violation";
      }
      throw y.framesToPop = 1, y;
    }
  }
  var a = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var i = function(d) {
      for (var v = arguments.length, _ = Array(v > 1 ? v - 1 : 0), b = 1; b < v; b++)
        _[b - 1] = arguments[b];
      var m = 0, g = "Warning: " + d.replace(/%s/g, function() {
        return _[m++];
      });
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
    a = function(d, v) {
      if (v === void 0)
        throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
      if (v.indexOf("Failed Composite propType: ") !== 0 && !d) {
        for (var _ = arguments.length, b = Array(_ > 2 ? _ - 2 : 0), m = 2; m < _; m++)
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
  function c(f, d, v) {
    var _ = [], b = {
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
    }, g = {
      displayName: function(p, h) {
        p.displayName = h;
      },
      mixins: function(p, h) {
        if (h)
          for (var q = 0; q < h.length; q++)
            A(p, h[q]);
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
    function x(p, h, q) {
      for (var j in h)
        h.hasOwnProperty(j) && process.env.NODE_ENV !== "production" && a(
          typeof h[j] == "function",
          "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",
          p.displayName || "ReactClass",
          u[q],
          j
        );
    }
    function y(p, h) {
      var q = b.hasOwnProperty(h) ? b[h] : null;
      B.hasOwnProperty(h) && n(
        q === "OVERRIDE_BASE",
        "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",
        h
      ), p && n(
        q === "DEFINE_MANY" || q === "DEFINE_MANY_MERGED",
        "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
        h
      );
    }
    function A(p, h) {
      if (!h) {
        if (process.env.NODE_ENV !== "production") {
          var q = typeof h, j = q === "object" && h !== null;
          process.env.NODE_ENV !== "production" && a(
            j,
            "%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.",
            p.displayName || "ReactClass",
            h === null ? null : q
          );
        }
        return;
      }
      n(
        typeof h != "function",
        "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
      ), n(
        !d(h),
        "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
      );
      var D = p.prototype, L = D.__reactAutoBindPairs;
      h.hasOwnProperty(s) && g.mixins(p, h.mixins);
      for (var l in h)
        if (h.hasOwnProperty(l) && l !== s) {
          var R = h[l], T = D.hasOwnProperty(l);
          if (y(T, l), g.hasOwnProperty(l))
            g[l](p, R);
          else {
            var w = b.hasOwnProperty(l), $ = typeof R == "function", Q = $ && !w && !T && h.autobind !== !1;
            if (Q)
              L.push(l, R), D[l] = R;
            else if (T) {
              var I = b[l];
              n(
                w && (I === "DEFINE_MANY_MERGED" || I === "DEFINE_MANY"),
                "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",
                I,
                l
              ), I === "DEFINE_MANY_MERGED" ? D[l] = S(D[l], R) : I === "DEFINE_MANY" && (D[l] = P(D[l], R));
            } else
              D[l] = R, process.env.NODE_ENV !== "production" && typeof R == "function" && h.displayName && (D[l].displayName = h.displayName + "_" + l);
          }
        }
    }
    function C(p, h) {
      if (h)
        for (var q in h) {
          var j = h[q];
          if (h.hasOwnProperty(q)) {
            var D = q in g;
            n(
              !D,
              'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
              q
            );
            var L = q in p;
            if (L) {
              var l = m.hasOwnProperty(q) ? m[q] : null;
              n(
                l === "DEFINE_MANY_MERGED",
                "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
                q
              ), p[q] = S(p[q], j);
              return;
            }
            p[q] = j;
          }
        }
    }
    function N(p, h) {
      n(
        p && h && typeof p == "object" && typeof h == "object",
        "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."
      );
      for (var q in h)
        h.hasOwnProperty(q) && (n(
          p[q] === void 0,
          "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",
          q
        ), p[q] = h[q]);
      return p;
    }
    function S(p, h) {
      return function() {
        var j = p.apply(this, arguments), D = h.apply(this, arguments);
        if (j == null)
          return D;
        if (D == null)
          return j;
        var L = {};
        return N(L, j), N(L, D), L;
      };
    }
    function P(p, h) {
      return function() {
        p.apply(this, arguments), h.apply(this, arguments);
      };
    }
    function M(p, h) {
      var q = h.bind(p);
      if (process.env.NODE_ENV !== "production") {
        q.__reactBoundContext = p, q.__reactBoundMethod = h, q.__reactBoundArguments = null;
        var j = p.constructor.displayName, D = q.bind;
        q.bind = function(L) {
          for (var l = arguments.length, R = Array(l > 1 ? l - 1 : 0), T = 1; T < l; T++)
            R[T - 1] = arguments[T];
          if (L !== p && L !== null)
            process.env.NODE_ENV !== "production" && a(
              !1,
              "bind(): React component methods may only be bound to the component instance. See %s",
              j
            );
          else if (!R.length)
            return process.env.NODE_ENV !== "production" && a(
              !1,
              "bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",
              j
            ), q;
          var w = D.apply(q, arguments);
          return w.__reactBoundContext = p, w.__reactBoundMethod = h, w.__reactBoundArguments = R, w;
        };
      }
      return q;
    }
    function F(p) {
      for (var h = p.__reactAutoBindPairs, q = 0; q < h.length; q += 2) {
        var j = h[q], D = h[q + 1];
        p[j] = M(p, D);
      }
    }
    var G = {
      componentDidMount: function() {
        this.__isMounted = !0;
      }
    }, O = {
      componentWillUnmount: function() {
        this.__isMounted = !1;
      }
    }, B = {
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
    }, k = function() {
    };
    e(
      k.prototype,
      f.prototype,
      B
    );
    function W(p) {
      var h = function(j, D, L) {
        process.env.NODE_ENV !== "production" && a(
          this instanceof h,
          "Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"
        ), this.__reactAutoBindPairs.length && F(this), this.props = j, this.context = D, this.refs = r, this.updater = L || v, this.state = null;
        var l = this.getInitialState ? this.getInitialState() : null;
        process.env.NODE_ENV !== "production" && l === void 0 && this.getInitialState._isMockFunction && (l = null), n(
          typeof l == "object" && !Array.isArray(l),
          "%s.getInitialState(): must return an object or null",
          h.displayName || "ReactCompositeComponent"
        ), this.state = l;
      };
      h.prototype = new k(), h.prototype.constructor = h, h.prototype.__reactAutoBindPairs = [], _.forEach(A.bind(null, h)), A(h, G), A(h, p), A(h, O), h.getDefaultProps && (h.defaultProps = h.getDefaultProps()), process.env.NODE_ENV !== "production" && (h.getDefaultProps && (h.getDefaultProps.isReactClassApproved = {}), h.prototype.getInitialState && (h.prototype.getInitialState.isReactClassApproved = {})), n(
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
      for (var q in b)
        h.prototype[q] || (h.prototype[q] = null);
      return h;
    }
    return W;
  }
  return Yt = c, Yt;
}
var Wt, Cs;
function Pc() {
  if (Cs) return Wt;
  Cs = 1;
  var e = kn, r = Ac();
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
var Oc = Pc();
const le = /* @__PURE__ */ H(Oc);
var Kt, Ss;
function ko() {
  if (Ss) return Kt;
  Ss = 1;
  var e = z(), r = (function() {
    try {
      var t = e(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  })();
  return Kt = r, Kt;
}
var zt, As;
function Bo() {
  if (As) return zt;
  As = 1;
  var e = ko();
  function r(t, n, a) {
    n == "__proto__" && e ? e(t, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : t[n] = a;
  }
  return zt = r, zt;
}
var $t, Ps;
function Tc() {
  if (Ps) return $t;
  Ps = 1;
  var e = Bo(), r = ve(), t = Object.prototype, n = t.hasOwnProperty;
  function a(i, s, o) {
    var u = i[s];
    (!(n.call(i, s) && r(u, o)) || o === void 0 && !(s in i)) && e(i, s, o);
  }
  return $t = a, $t;
}
var Jt, Os;
function wc() {
  if (Os) return Jt;
  Os = 1;
  var e = Tc(), r = Bo();
  function t(n, a, i, s) {
    var o = !i;
    i || (i = {});
    for (var u = -1, c = a.length; ++u < c; ) {
      var f = a[u], d = s ? s(i[f], n[f], f, i, n) : void 0;
      d === void 0 && (d = n[f]), o ? r(i, f, d) : e(i, f, d);
    }
    return i;
  }
  return Jt = t, Jt;
}
var Xt, Ts;
function Ic() {
  if (Ts) return Xt;
  Ts = 1;
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
  return Xt = e, Xt;
}
var Zt, ws;
function Nc() {
  if (ws) return Zt;
  ws = 1;
  var e = Ic(), r = Math.max;
  function t(n, a, i) {
    return a = r(a === void 0 ? n.length - 1 : a, 0), function() {
      for (var s = arguments, o = -1, u = r(s.length - a, 0), c = Array(u); ++o < u; )
        c[o] = s[a + o];
      o = -1;
      for (var f = Array(a + 1); ++o < a; )
        f[o] = s[o];
      return f[a] = i(c), e(n, this, f);
    };
  }
  return Zt = t, Zt;
}
var Qt, Is;
function Dc() {
  if (Is) return Qt;
  Is = 1;
  function e(r) {
    return function() {
      return r;
    };
  }
  return Qt = e, Qt;
}
var en, Ns;
function jc() {
  if (Ns) return en;
  Ns = 1;
  var e = Dc(), r = ko(), t = ue(), n = r ? function(a, i) {
    return r(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : t;
  return en = n, en;
}
var rn, Ds;
function Fc() {
  if (Ds) return rn;
  Ds = 1;
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
  return rn = n, rn;
}
var tn, js;
function Mc() {
  if (js) return tn;
  js = 1;
  var e = jc(), r = Fc(), t = r(e);
  return tn = t, tn;
}
var nn, Fs;
function zn() {
  if (Fs) return nn;
  Fs = 1;
  var e = ue(), r = Nc(), t = Mc();
  function n(a, i) {
    return t(r(a, i, e), a + "");
  }
  return nn = n, nn;
}
var an, Ms;
function $n() {
  if (Ms) return an;
  Ms = 1;
  var e = ve(), r = K(), t = Ln(), n = Z();
  function a(i, s, o) {
    if (!n(o))
      return !1;
    var u = typeof s;
    return (u == "number" ? r(o) && t(s, o.length) : u == "string" && s in o) ? e(o[s], i) : !1;
  }
  return an = a, an;
}
var sn, ks;
function kc() {
  if (ks) return sn;
  ks = 1;
  var e = zn(), r = $n();
  function t(n) {
    return e(function(a, i) {
      var s = -1, o = i.length, u = o > 1 ? i[o - 1] : void 0, c = o > 2 ? i[2] : void 0;
      for (u = n.length > 3 && typeof u == "function" ? (o--, u) : void 0, c && r(i[0], i[1], c) && (u = o < 3 ? void 0 : u, o = 1), a = Object(a); ++s < o; ) {
        var f = i[s];
        f && n(a, f, s, u);
      }
      return a;
    });
  }
  return sn = t, sn;
}
var on, Bs;
function Bc() {
  if (Bs) return on;
  Bs = 1;
  function e(r) {
    var t = [];
    if (r != null)
      for (var n in Object(r))
        t.push(n);
    return t;
  }
  return on = e, on;
}
var un, Ls;
function Lc() {
  if (Ls) return un;
  Ls = 1;
  var e = Z(), r = Ro(), t = Bc(), n = Object.prototype, a = n.hasOwnProperty;
  function i(s) {
    if (!e(s))
      return t(s);
    var o = r(s), u = [];
    for (var c in s)
      c == "constructor" && (o || !a.call(s, c)) || u.push(c);
    return u;
  }
  return un = i, un;
}
var cn, Gs;
function Gc() {
  if (Gs) return cn;
  Gs = 1;
  var e = qo(), r = Lc(), t = K();
  function n(a) {
    return t(a) ? e(a, !0) : r(a);
  }
  return cn = n, cn;
}
var ln, Vs;
function Vc() {
  if (Vs) return ln;
  Vs = 1;
  var e = wc(), r = kc(), t = Gc(), n = r(function(a, i) {
    e(i, t(i), a);
  });
  return ln = n, ln;
}
var fn, Us;
function Uc() {
  return Us || (Us = 1, fn = Vc()), fn;
}
var dn, Hs;
function Hc() {
  if (Hs) return dn;
  Hs = 1;
  function e(r, t) {
    for (var n = -1, a = r == null ? 0 : r.length; ++n < a && t(r[n], n, r) !== !1; )
      ;
    return r;
  }
  return dn = e, dn;
}
var hn, Ys;
function Yc() {
  if (Ys) return hn;
  Ys = 1;
  var e = ue();
  function r(t) {
    return typeof t == "function" ? t : e;
  }
  return hn = r, hn;
}
var vn, Ws;
function Wc() {
  if (Ws) return vn;
  Ws = 1;
  var e = Hc(), r = Un(), t = Yc(), n = V();
  function a(i, s) {
    var o = n(i) ? e : r;
    return o(i, t(s));
  }
  return vn = a, vn;
}
var pn, Ks;
function Kc() {
  return Ks || (Ks = 1, pn = Wc()), pn;
}
var _n, zs;
function zc() {
  if (zs) return _n;
  zs = 1;
  var e = ie(), r = Bn(), t = V(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return t(i) || r(i) || !!(n && i && i[n]);
  }
  return _n = a, _n;
}
var gn, $s;
function $c() {
  if ($s) return gn;
  $s = 1;
  var e = Oo(), r = zc();
  function t(n, a, i, s, o) {
    var u = -1, c = n.length;
    for (i || (i = r), o || (o = []); ++u < c; ) {
      var f = n[u];
      a > 0 && i(f) ? a > 1 ? t(f, a - 1, i, s, o) : e(o, f) : s || (o[o.length] = f);
    }
    return o;
  }
  return gn = t, gn;
}
var mn, Js;
function Jc() {
  if (Js) return mn;
  Js = 1;
  function e(r, t) {
    var n = r.length;
    for (r.sort(t); n--; )
      r[n] = r[n].value;
    return r;
  }
  return mn = e, mn;
}
var bn, Xs;
function Xc() {
  if (Xs) return bn;
  Xs = 1;
  var e = oe();
  function r(t, n) {
    if (t !== n) {
      var a = t !== void 0, i = t === null, s = t === t, o = e(t), u = n !== void 0, c = n === null, f = n === n, d = e(n);
      if (!c && !d && !o && t > n || o && u && f && !c && !d || i && u && f || !a && f || !s)
        return 1;
      if (!i && !o && !d && t < n || d && a && s && !i && !o || c && a && s || !u && s || !f)
        return -1;
    }
    return 0;
  }
  return bn = r, bn;
}
var yn, Zs;
function Zc() {
  if (Zs) return yn;
  Zs = 1;
  var e = Xc();
  function r(t, n, a) {
    for (var i = -1, s = t.criteria, o = n.criteria, u = s.length, c = a.length; ++i < u; ) {
      var f = e(s[i], o[i]);
      if (f) {
        if (i >= c)
          return f;
        var d = a[i];
        return f * (d == "desc" ? -1 : 1);
      }
    }
    return t.index - n.index;
  }
  return yn = r, yn;
}
var qn, Qs;
function Qc() {
  if (Qs) return qn;
  Qs = 1;
  var e = be(), r = Kn(), t = ce(), n = Do(), a = Jc(), i = Vn(), s = Zc(), o = ue(), u = V();
  function c(f, d, v) {
    d.length ? d = e(d, function(m) {
      return u(m) ? function(g) {
        return r(g, m.length === 1 ? m[0] : m);
      } : m;
    }) : d = [o];
    var _ = -1;
    d = e(d, i(t));
    var b = n(f, function(m, g, x) {
      var y = e(d, function(A) {
        return A(m);
      });
      return { criteria: y, index: ++_, value: m };
    });
    return a(b, function(m, g) {
      return s(m, g, v);
    });
  }
  return qn = c, qn;
}
var Rn, eo;
function el() {
  if (eo) return Rn;
  eo = 1;
  var e = $c(), r = Qc(), t = zn(), n = $n(), a = t(function(i, s) {
    if (i == null)
      return [];
    var o = s.length;
    return o > 1 && n(i, s[0], s[1]) ? s = [] : o > 2 && n(s[0], s[1], s[2]) && (s = [s[0]]), r(i, e(s, 1), []);
  });
  return Rn = a, Rn;
}
var En, ro;
function rl() {
  if (ro) return En;
  ro = 1;
  var e = {
    extend: Uc(),
    each: Kc(),
    sortBy: el(),
    find: Mo()
  };
  En = function(a) {
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
    return this.rows.forEach(function(f) {
      var d = a.createSetKeys(i, f), v = t(d[d.length - 1]);
      if (!(s && !s(v))) {
        var _ = u;
        d.forEach(function(b, m) {
          _[b] || (_[b] = { value: {}, subDimensions: {}, key: b });
          var g = _[b].value;
          if (s || !a.cache[b]) {
            s || (c[b] = g), e.extend(g, o(f, g));
            var x = t(b);
            e.extend(g, x);
          } else
            _[b].value = a.cache[b];
          _ = _[b].subDimensions;
        });
      }
    }), e.each(c, function(f, d) {
      a.cache[d] = f;
    }), u;
  }, r.prototype.parseResults = function(a, o) {
    var s = this, o = o || 0, u = [], c = e.sortBy(a, this.getSortValue.bind(this));
    return this.sortDir === "desc" && c.reverse(), e.each(c, function(f) {
      var d = f.value;
      d._level = o, d._key = f.key;
      var v = Object.keys(f.subDimensions).length;
      if (s.compact && v == 1 || u.push(d), v) {
        var _ = s.compact && v == 1 ? o : o + 1, b = s.parseResults(f.subDimensions, _);
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
  return En;
}
var tl = rl();
const xn = /* @__PURE__ */ H(tl);
var Cn, to;
function nl() {
  if (to) return Cn;
  to = 1, Cn = e;
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
      function f() {
        s.off(n, f), c.apply(this, arguments);
      }
      return this.on(n, u, f), this;
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
      return i ? arguments.length === 1 ? (delete this.callbacks[n], this) : (s = i.indexOf(a), s !== -1 && (i.splice(s, 1), i.length === 0 && delete this.callbacks[n]), this) : this;
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
var al = nl();
const il = /* @__PURE__ */ H(al), no = Array.prototype.slice;
function U(e) {
  const r = no.call(arguments, 1);
  return function() {
    return e.apply(this, r.concat(no.call(arguments)));
  };
}
function sl(e, r, t) {
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
function Lo(e, r) {
  if (e == null) return null;
  let t;
  return typeof e.value == "string" ? t = r[e.value] : t = e.value(r), t;
}
var Sn, ao;
function ol() {
  if (ao) return Sn;
  ao = 1;
  var e = Math.ceil, r = Math.max;
  function t(n, a, i, s) {
    for (var o = -1, u = r(e((a - n) / (i || 1)), 0), c = Array(u); u--; )
      c[s ? u : ++o] = n, n += i;
    return c;
  }
  return Sn = t, Sn;
}
var An, io;
function ul() {
  if (io) return An;
  io = 1;
  var e = ol(), r = $n(), t = Fo();
  function n(a) {
    return function(i, s, o) {
      return o && typeof o != "number" && r(i, s, o) && (s = o = void 0), i = t(i), s === void 0 ? (s = i, i = 0) : s = t(s), o = o === void 0 ? i < s ? 1 : -1 : t(o), e(i, s, o, a);
    };
  }
  return An = n, An;
}
var Pn, so;
function cl() {
  if (so) return Pn;
  so = 1;
  var e = ul(), r = e();
  return Pn = r, Pn;
}
var ll = cl();
const fl = /* @__PURE__ */ H(ll), dl = { range: fl }, hl = le({
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
          onClick: U(r.props.onColumnHide, a.title),
          children: "×"
        }
      )), /* @__PURE__ */ E.jsxs(
        "th",
        {
          className: i,
          onClick: U(r.props.onSort, a.title),
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
      var t = Lo(e, r), n = t;
      e.template && (n = e.template(t, r));
    }
    if (a)
      var i = /* @__PURE__ */ E.jsx("span", { className: "reactPivot-solo", children: /* @__PURE__ */ E.jsx(
        "a",
        {
          style: { cursor: "pointer" },
          onClick: U(this.props.onSolo, {
            title: e.title,
            value: t
          }),
          children: this.props.soloText
        }
      ) });
    var s = kn.isValidElement(n) ? /* @__PURE__ */ E.jsx("span", { children: n }) : /* @__PURE__ */ E.jsx(
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
          s,
          i
        ]
      },
      [e.title, r.key].join("ÿ")
    );
  },
  renderPagination: function(e) {
    var r = this, t = e.nPages, n = e.curPage;
    return t === 1 ? "" : /* @__PURE__ */ E.jsx("div", { className: "reactPivot-paginate", children: dl.range(0, t).map(function(a) {
      var i = "reactPivot-pageNumber";
      return a === n && (i += " is-selected"), /* @__PURE__ */ E.jsx("span", { className: i, children: /* @__PURE__ */ E.jsx("a", { onClick: U(r.setPaginatePage, a), children: a + 1 }) }, a);
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
var On, oo;
function vl() {
  if (oo) return On;
  oo = 1;
  function e(r) {
    for (var t = -1, n = r == null ? 0 : r.length, a = 0, i = []; ++t < n; ) {
      var s = r[t];
      s && (i[a++] = s);
    }
    return i;
  }
  return On = e, On;
}
var pl = vl();
const _l = /* @__PURE__ */ H(pl), gl = { compact: _l }, ml = le({
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
      /* @__PURE__ */ E.jsxs("select", { value: "", onChange: U(e.toggleDimension, n), children: [
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
        onChange: U(this.toggleDimension, r),
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
    var i = gl.compact(n);
    this.props.onChange(i);
  }
});
var Tn, uo;
function bl() {
  if (uo) return Tn;
  uo = 1;
  function e(r) {
    return r !== r;
  }
  return Tn = e, Tn;
}
var wn, co;
function yl() {
  if (co) return wn;
  co = 1;
  function e(r, t, n) {
    for (var a = n - 1, i = r.length; ++a < i; )
      if (r[a] === t)
        return a;
    return -1;
  }
  return wn = e, wn;
}
var In, lo;
function ql() {
  if (lo) return In;
  lo = 1;
  var e = jo(), r = bl(), t = yl();
  function n(a, i, s) {
    return i === i ? t(a, i, s) : e(a, r, s);
  }
  return In = n, In;
}
var Nn, fo;
function Rl() {
  if (fo) return Nn;
  fo = 1;
  var e = ql();
  function r(t, n) {
    var a = t == null ? 0 : t.length;
    return !!a && e(t, n, 0) > -1;
  }
  return Nn = r, Nn;
}
var Dn, ho;
function El() {
  if (ho) return Dn;
  ho = 1;
  function e(r, t, n) {
    for (var a = -1, i = r == null ? 0 : r.length; ++a < i; )
      if (n(t, r[a]))
        return !0;
    return !1;
  }
  return Dn = e, Dn;
}
var jn, vo;
function xl() {
  if (vo) return jn;
  vo = 1;
  var e = So(), r = Rl(), t = El(), n = be(), a = Vn(), i = Ao(), s = 200;
  function o(u, c, f, d) {
    var v = -1, _ = r, b = !0, m = u.length, g = [], x = c.length;
    if (!m)
      return g;
    f && (c = n(c, a(f))), d ? (_ = t, b = !1) : c.length >= s && (_ = i, b = !1, c = new e(c));
    e:
      for (; ++v < m; ) {
        var y = u[v], A = f == null ? y : f(y);
        if (y = d || y !== 0 ? y : 0, b && A === A) {
          for (var C = x; C--; )
            if (c[C] === A)
              continue e;
          g.push(y);
        } else _(c, A, d) || g.push(y);
      }
    return g;
  }
  return jn = o, jn;
}
var Fn, po;
function Cl() {
  if (po) return Fn;
  po = 1;
  var e = K(), r = X();
  function t(n) {
    return r(n) && e(n);
  }
  return Fn = t, Fn;
}
var Mn, _o;
function Sl() {
  if (_o) return Mn;
  _o = 1;
  var e = xl(), r = zn(), t = Cl(), n = r(function(a, i) {
    return t(a) ? e(a, i) : [];
  });
  return Mn = n, Mn;
}
var Al = Sl();
const Pl = /* @__PURE__ */ H(Al), Ol = { without: Pl }, Tl = le({
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
    var r = e.target.value, t = Ol.without(this.props.hiddenColumns, r);
    this.props.onChange(t);
  }
}), wl = le({
  getDefaultProps: function() {
    return {
      dimensions: [],
      solo: {},
      onChange: function() {
      },
      soloText: "Add Filter..."
    };
  },
  render: function() {
    var e = Object.keys(this.props.solo);
    return e.length === 0 ? null : /* @__PURE__ */ E.jsx("div", { className: "reactPivot-soloControl", children: e.map(this.renderSoloFilter) });
  },
  renderDropdown: function(e, r, t, n, a) {
    return /* @__PURE__ */ E.jsxs("select", { value: e, onChange: r, id: a, children: [
      /* @__PURE__ */ E.jsx("option", { value: "", children: n }),
      t.map(function(i) {
        return /* @__PURE__ */ E.jsx("option", { value: i, children: i }, i);
      })
    ] });
  },
  renderSoloFilter: function(e, r) {
    var t = this, n = this.props.solo[e], a = this.props.dimensions.find(function(s) {
      return s.title === e;
    });
    if (!a) return null;
    var i = this.getUniqueValuesForDimension(a);
    return /* @__PURE__ */ E.jsx("div", { className: "reactPivot-soloFilter", children: /* @__PURE__ */ E.jsxs(
      "div",
      {
        style: { clear: "both" },
        className: "reactPivot-soloDisplay",
        children: [
          /* @__PURE__ */ E.jsx(
            "span",
            {
              className: "reactPivot-clearSolo",
              onClick: U(t.clearSoloKey, e),
              children: "×"
            }
          ),
          e,
          /* @__PURE__ */ E.jsx("div", { className: "reactPivot-soloValues", children: Array.isArray(n) ? n.map((s, o) => /* @__PURE__ */ E.jsx("div", { className: "reactPivot-soloValueContainer", children: this.renderDropdown(
            s,
            U(t.changeSoloValue, e, o),
            i,
            "Remove value...",
            `reactPivot-soloValueContainer-${o}-${e}`
          ) }, o)) : /* @__PURE__ */ E.jsx("div", { className: "reactPivot-soloValueContainer", children: this.renderDropdown(
            n,
            U(t.changeSoloValue, e, 0),
            i,
            "Remove value...",
            `reactPivot-soloValueContainer-${e}`
          ) }) }),
          /* @__PURE__ */ E.jsxs(
            "select",
            {
              value: "",
              id: `reactPivot-addSoloValue-${e}`,
              onChange: U(t.addSoloValue, e),
              className: "reactPivot-addSoloValue",
              children: [
                /* @__PURE__ */ E.jsx("option", { value: "", children: "Add value..." }),
                i.map(function(s) {
                  var o = Array.isArray(n) ? n.indexOf(s) !== -1 : n === s;
                  return o ? null : /* @__PURE__ */ E.jsx("option", { value: s, children: s }, s);
                })
              ]
            }
          )
        ]
      },
      "solo-" + e
    ) }, e);
  },
  getUniqueValuesForDimension: function(e) {
    return this.props.uniqueValues ? this.props.uniqueValues[e.title] || [] : [];
  },
  changeSoloDimension: function(e, r) {
    var t = r.target.value;
    if (!(!t || t === e)) {
      var n = Object.assign({}, this.props.solo), a = n[e];
      delete n[e], n[t] = a || "", this.props.onChange(n);
    }
  },
  changeSoloValue: function(e, r, t) {
    var n = t.target.value, a = Object.assign({}, this.props.solo), i = a[e];
    if (n)
      if (Array.isArray(i)) {
        var s = i.slice();
        s[r] = n, a[e] = s;
      } else
        a[e] = n;
    else if (Array.isArray(i)) {
      var s = i.slice();
      s.splice(r, 1), s.length === 0 ? delete a[e] : a[e] = s;
    } else
      delete a[e];
    this.props.onChange(a);
  },
  addSoloValue: function(e, r) {
    var t = r.target.value;
    if (t) {
      var n = Object.assign({}, this.props.solo), a = n[e];
      Array.isArray(a) ? n[e] = a.concat([t]) : a === "" ? n[e] = t : n[e] = [a, t], this.props.onChange(n);
    }
  },
  removeSoloFilter: function(e) {
    var r = Object.assign({}, this.props.solo);
    delete r[e], this.props.onChange(r);
  },
  clearSoloKey: function(e) {
    var r = Object.assign({}, this.props.solo);
    delete r[e], this.props.onChange(r);
  }
}), te = { filter: vc, map: gc, find: Cc }, Dl = le({
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
      eventBus: new il(),
      compact: !1,
      excludeSummaryFromExport: !1,
      onData: function() {
      },
      soloText: "solo",
      subDimensionText: "Sub Dimension..."
    };
  },
  getInitialState: function() {
    var e = this.props.dimensions, r = te.filter(this.props.activeDimensions, function(t) {
      return te.find(e, function(n) {
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
    this.props.defaultStyles && Il(), this.dataFrame = xn({
      rows: this.getFilteredRows(),
      dimensions: this.props.dimensions,
      reduce: this.props.reduce
    }), this.updateRows();
  },
  componentDidUpdate: function(e) {
    this.props.hiddenColumns !== e.hiddenColumns && this.setHiddenColumns(this.props.hiddenColumns), this.props.rows !== e.rows && (this.dataFrame = xn({
      rows: this.getFilteredRows(),
      dimensions: this.props.dimensions,
      reduce: this.props.reduce
    }), this.updateRows());
  },
  getFilteredRows: function() {
    var e = this, r = this.state.solo, t = this.props.rows;
    return !r || Object.keys(r).length === 0 ? t : t.filter(function(n) {
      var a = !0;
      return Object.keys(r).forEach(function(i) {
        var s = r[i], o, u = e.props.dimensions.find(function(c) {
          return c.title === i;
        });
        if (u ? typeof u.value == "function" ? o = u.value(n) : o = n[u.value] : o = n[i], Array.isArray(s)) {
          if (s.length === 0) {
            a = !1;
            return;
          }
          s.indexOf(o) === -1 && (a = !1);
        } else
          o !== s && (a = !1);
      }), a;
    });
  },
  getColumns: function() {
    var e = this, r = [];
    return this.state.dimensions.forEach(function(t) {
      var n = te.find(e.props.dimensions, function(a) {
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
    var e = /* @__PURE__ */ E.jsxs("div", { className: "reactPivot", children: [
      this.props.hideDimensionFilter ? "" : /* @__PURE__ */ E.jsx(
        ml,
        {
          dimensions: this.props.dimensions,
          subDimensionText: this.props.subDimensionText,
          selectedDimensions: this.state.dimensions,
          onChange: this.setDimensions
        }
      ),
      /* @__PURE__ */ E.jsx(
        Tl,
        {
          hiddenColumns: this.state.hiddenColumns,
          onChange: this.setHiddenColumns
        }
      ),
      /* @__PURE__ */ E.jsx("div", { className: "reactPivot-csvExport", children: /* @__PURE__ */ E.jsx("button", { onClick: U(this.downloadCSV, this.state.rows), children: "Export CSV" }) }),
      /* @__PURE__ */ E.jsx(
        wl,
        {
          dimensions: this.props.dimensions,
          solo: this.state.solo,
          onChange: this.setSoloFromControl,
          uniqueValues: this.getUniqueValues()
        }
      ),
      /* @__PURE__ */ E.jsx(
        hl,
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
    var e = this.getColumns(), r = this.state.sortBy, t = te.find(e, function(u) {
      return u.title === r;
    }) || {}, n = t.sortBy || (t.type === "dimension" ? t.title : t.value), a = this.state.sortDir, i = this.state.hideRows;
    this.dataFrame = xn({
      rows: this.getFilteredRows(),
      dimensions: this.props.dimensions,
      reduce: this.props.reduce
    });
    var s = {
      dimensions: this.state.dimensions,
      sortBy: n,
      sortDir: a,
      compact: this.props.compact
    }, o = this.dataFrame.calculate(s).filter(function(u) {
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
    var r = this.state.solo, t = r[e.title];
    if (Array.isArray(t)) {
      var n = t.indexOf(e.value);
      n !== -1 ? (t.splice(n, 1), t.length === 0 && delete r[e.title]) : t.push(e.value);
    } else
      t === e.value ? delete r[e.title] : r[e.title] = e.value;
    this.props.eventBus.emit("solo", r), this.setState({ solo: r }), setTimeout(this.updateRows, 0);
  },
  setSoloFromControl: function(e) {
    this.props.eventBus.emit("solo", e), this.setState({ solo: e }), setTimeout(this.updateRows, 0);
  },
  getUniqueValues: function() {
    var e = this, r = {};
    return this.props.dimensions.forEach(function(t) {
      var n = /* @__PURE__ */ new Set();
      e.props.rows.forEach(function(a) {
        var i;
        typeof t.value == "function" ? i = t.value(a) : i = a[t.value], i != null && i !== "" && n.add(String(i));
      }), r[t.title] = Array.from(n).sort();
    }), r;
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
    var r = this, t = this.getColumns(), n = te.map(t, "title").map(JSON.stringify.bind(JSON)).join(",") + `
`, a = this.state.dimensions.length - 1, i = this.props.excludeSummaryFromExport;
    e.forEach(function(s) {
      if (!(i && s._level < a)) {
        var o = t.map(function(u) {
          if (u.type === "dimension")
            var c = s[u.title];
          else
            var c = Lo(u, s);
          return u.template && r.props.csvTemplateFormat && (c = u.template(c)), JSON.stringify(c);
        });
        n += o.join(",") + `
`;
      }
    }), sl(n, this.props.csvDownloadFileName, "text/csv");
  }
});
function Il() {
  if (typeof document > "u" || document.getElementById("react-pivot-styles")) return;
  const e = `.reactPivot {
  margin-top: 40px;
  padding: 10px 20px 20px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
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

.reactPivot-soloControl {
  display: block;
  text-align: left;
  clear: both;
}

.reactPivot-soloFilter {
  display: block;
  margin-right: 15px;
}

.reactPivot-soloDimension {
  font-size: 11px;
  height: 24px;
  margin-right: 5px;
  font-weight: bold;
  background: #e8f5e8;
  border: 1px solid #4caf50;
}

.reactPivot-soloValues {
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}

.reactPivot-soloValueContainer {
  display: inline-block;
  margin: 2px;
  position: relative;

  select {
    max-width: 150px;
  }
}

.reactPivot-soloValue {
  display: inline-block;
  background: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 3px;
  padding: 2px 6px;
  margin: 2px;
  font-size: 11px;
  position: relative;
}

.reactPivot-removeSoloValue {
  margin-left: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #f44336;
  opacity: 0.7;
}

.reactPivot-removeSoloValue:hover {
  opacity: 1;
}

.reactPivot-addSoloValue {
  font-size: 11px;
  height: 24px;
  margin-right: 5px;
  max-width: 150px;
}

.reactPivot-removeSoloFilter {
  font-size: 10px;
  padding: 2px 6px;
  background: #ffebee;
  border: 1px solid #f44336;
  border-radius: 3px;
  color: #f44336;
  cursor: pointer;
}

.reactPivot-removeSoloFilter:hover {
  background: #f44336;
  color: white;
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
  Dl as default
};
