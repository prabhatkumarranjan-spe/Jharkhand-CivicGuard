(function() {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const y of document.querySelectorAll('link[rel="modulepreload"]')) I(y);
  new MutationObserver((y) => {
    for (const F of y) if (F.type === "childList") for (const K of F.addedNodes) K.tagName === "LINK" && K.rel === "modulepreload" && I(K);
  }).observe(document, { childList: true, subtree: true });
  function p(y) {
    const F = {};
    return y.integrity && (F.integrity = y.integrity), y.referrerPolicy && (F.referrerPolicy = y.referrerPolicy), y.crossOrigin === "use-credentials" ? F.credentials = "include" : y.crossOrigin === "anonymous" ? F.credentials = "omit" : F.credentials = "same-origin", F;
  }
  function I(y) {
    if (y.ep) return;
    y.ep = true;
    const F = p(y);
    fetch(y.href, F);
  }
})();
function id(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var Fi = { exports: {} }, H = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Hs;
function ad() {
  if (Hs) return H;
  Hs = 1;
  var v = Symbol.for("react.element"), S = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), K = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), z = Symbol.iterator;
  function C(f) {
    return f === null || typeof f != "object" ? null : (f = z && f[z] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var de = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ee = Object.assign, Y = {};
  function U(f, E, V) {
    this.props = f, this.context = E, this.refs = Y, this.updater = V || de;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(f, E) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, E, "setState");
  }, U.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function he() {
  }
  he.prototype = U.prototype;
  function ve(f, E, V) {
    this.props = f, this.context = E, this.refs = Y, this.updater = V || de;
  }
  var Ie = ve.prototype = new he();
  Ie.constructor = ve, Ee(Ie, U.prototype), Ie.isPureReactComponent = true;
  var Ce = Array.isArray, le = Object.prototype.hasOwnProperty, ke = { current: null }, we = { key: true, ref: true, __self: true, __source: true };
  function $(f, E, V) {
    var W, X = {}, Z = null, oe = null;
    if (E != null) for (W in E.ref !== void 0 && (oe = E.ref), E.key !== void 0 && (Z = "" + E.key), E) le.call(E, W) && !we.hasOwnProperty(W) && (X[W] = E[W]);
    var ne = arguments.length - 2;
    if (ne === 1) X.children = V;
    else if (1 < ne) {
      for (var ce = Array(ne), Xe = 0; Xe < ne; Xe++) ce[Xe] = arguments[Xe + 2];
      X.children = ce;
    }
    if (f && f.defaultProps) for (W in ne = f.defaultProps, ne) X[W] === void 0 && (X[W] = ne[W]);
    return { $$typeof: v, type: f, key: Z, ref: oe, props: X, _owner: ke.current };
  }
  function te(f, E) {
    return { $$typeof: v, type: f.type, key: E, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function De(f) {
    return typeof f == "object" && f !== null && f.$$typeof === v;
  }
  function wt(f) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(V) {
      return E[V];
    });
  }
  var mt = /\/+/g;
  function Ge(f, E) {
    return typeof f == "object" && f !== null && f.key != null ? wt("" + f.key) : E.toString(36);
  }
  function it(f, E, V, W, X) {
    var Z = typeof f;
    (Z === "undefined" || Z === "boolean") && (f = null);
    var oe = false;
    if (f === null) oe = true;
    else switch (Z) {
      case "string":
      case "number":
        oe = true;
        break;
      case "object":
        switch (f.$$typeof) {
          case v:
          case S:
            oe = true;
        }
    }
    if (oe) return oe = f, X = X(oe), f = W === "" ? "." + Ge(oe, 0) : W, Ce(X) ? (V = "", f != null && (V = f.replace(mt, "$&/") + "/"), it(X, E, V, "", function(Xe) {
      return Xe;
    })) : X != null && (De(X) && (X = te(X, V + (!X.key || oe && oe.key === X.key ? "" : ("" + X.key).replace(mt, "$&/") + "/") + f)), E.push(X)), 1;
    if (oe = 0, W = W === "" ? "." : W + ":", Ce(f)) for (var ne = 0; ne < f.length; ne++) {
      Z = f[ne];
      var ce = W + Ge(Z, ne);
      oe += it(Z, E, V, ce, X);
    }
    else if (ce = C(f), typeof ce == "function") for (f = ce.call(f), ne = 0; !(Z = f.next()).done; ) Z = Z.value, ce = W + Ge(Z, ne++), oe += it(Z, E, V, ce, X);
    else if (Z === "object") throw E = String(f), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    return oe;
  }
  function ht(f, E, V) {
    if (f == null) return f;
    var W = [], X = 0;
    return it(f, W, "", "", function(Z) {
      return E.call(V, Z, X++);
    }), W;
  }
  function Be(f) {
    if (f._status === -1) {
      var E = f._result;
      E = E(), E.then(function(V) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = V);
      }, function(V) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = V);
      }), f._status === -1 && (f._status = 0, f._result = E);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var ye = { current: null }, x = { transition: null }, A = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: x, ReactCurrentOwner: ke };
  function R() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return H.Children = { map: ht, forEach: function(f, E, V) {
    ht(f, function() {
      E.apply(this, arguments);
    }, V);
  }, count: function(f) {
    var E = 0;
    return ht(f, function() {
      E++;
    }), E;
  }, toArray: function(f) {
    return ht(f, function(E) {
      return E;
    }) || [];
  }, only: function(f) {
    if (!De(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, H.Component = U, H.Fragment = p, H.Profiler = y, H.PureComponent = ve, H.StrictMode = I, H.Suspense = B, H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A, H.act = R, H.cloneElement = function(f, E, V) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var W = Ee({}, f.props), X = f.key, Z = f.ref, oe = f._owner;
    if (E != null) {
      if (E.ref !== void 0 && (Z = E.ref, oe = ke.current), E.key !== void 0 && (X = "" + E.key), f.type && f.type.defaultProps) var ne = f.type.defaultProps;
      for (ce in E) le.call(E, ce) && !we.hasOwnProperty(ce) && (W[ce] = E[ce] === void 0 && ne !== void 0 ? ne[ce] : E[ce]);
    }
    var ce = arguments.length - 2;
    if (ce === 1) W.children = V;
    else if (1 < ce) {
      ne = Array(ce);
      for (var Xe = 0; Xe < ce; Xe++) ne[Xe] = arguments[Xe + 2];
      W.children = ne;
    }
    return { $$typeof: v, type: f.type, key: X, ref: Z, props: W, _owner: oe };
  }, H.createContext = function(f) {
    return f = { $$typeof: K, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: F, _context: f }, f.Consumer = f;
  }, H.createElement = $, H.createFactory = function(f) {
    var E = $.bind(null, f);
    return E.type = f, E;
  }, H.createRef = function() {
    return { current: null };
  }, H.forwardRef = function(f) {
    return { $$typeof: q, render: f };
  }, H.isValidElement = De, H.lazy = function(f) {
    return { $$typeof: ee, _payload: { _status: -1, _result: f }, _init: Be };
  }, H.memo = function(f, E) {
    return { $$typeof: b, type: f, compare: E === void 0 ? null : E };
  }, H.startTransition = function(f) {
    var E = x.transition;
    x.transition = {};
    try {
      f();
    } finally {
      x.transition = E;
    }
  }, H.unstable_act = R, H.useCallback = function(f, E) {
    return ye.current.useCallback(f, E);
  }, H.useContext = function(f) {
    return ye.current.useContext(f);
  }, H.useDebugValue = function() {
  }, H.useDeferredValue = function(f) {
    return ye.current.useDeferredValue(f);
  }, H.useEffect = function(f, E) {
    return ye.current.useEffect(f, E);
  }, H.useId = function() {
    return ye.current.useId();
  }, H.useImperativeHandle = function(f, E, V) {
    return ye.current.useImperativeHandle(f, E, V);
  }, H.useInsertionEffect = function(f, E) {
    return ye.current.useInsertionEffect(f, E);
  }, H.useLayoutEffect = function(f, E) {
    return ye.current.useLayoutEffect(f, E);
  }, H.useMemo = function(f, E) {
    return ye.current.useMemo(f, E);
  }, H.useReducer = function(f, E, V) {
    return ye.current.useReducer(f, E, V);
  }, H.useRef = function(f) {
    return ye.current.useRef(f);
  }, H.useState = function(f) {
    return ye.current.useState(f);
  }, H.useSyncExternalStore = function(f, E, V) {
    return ye.current.useSyncExternalStore(f, E, V);
  }, H.useTransition = function() {
    return ye.current.useTransition();
  }, H.version = "18.3.1", H;
}
var Ws;
function bs() {
  return Ws || (Ws = 1, Fi.exports = ad()), Fi.exports;
}
var Q = bs();
const i = id(Q);
var Fl = {}, Ui = { exports: {} }, Ye = {}, ji = { exports: {} }, $i = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Qs;
function ud() {
  return Qs || (Qs = 1, (function(v) {
    function S(x, A) {
      var R = x.length;
      x.push(A);
      e: for (; 0 < R; ) {
        var f = R - 1 >>> 1, E = x[f];
        if (0 < y(E, A)) x[f] = A, x[R] = E, R = f;
        else break e;
      }
    }
    function p(x) {
      return x.length === 0 ? null : x[0];
    }
    function I(x) {
      if (x.length === 0) return null;
      var A = x[0], R = x.pop();
      if (R !== A) {
        x[0] = R;
        e: for (var f = 0, E = x.length, V = E >>> 1; f < V; ) {
          var W = 2 * (f + 1) - 1, X = x[W], Z = W + 1, oe = x[Z];
          if (0 > y(X, R)) Z < E && 0 > y(oe, X) ? (x[f] = oe, x[Z] = R, f = Z) : (x[f] = X, x[W] = R, f = W);
          else if (Z < E && 0 > y(oe, R)) x[f] = oe, x[Z] = R, f = Z;
          else break e;
        }
      }
      return A;
    }
    function y(x, A) {
      var R = x.sortIndex - A.sortIndex;
      return R !== 0 ? R : x.id - A.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var F = performance;
      v.unstable_now = function() {
        return F.now();
      };
    } else {
      var K = Date, q = K.now();
      v.unstable_now = function() {
        return K.now() - q;
      };
    }
    var B = [], b = [], ee = 1, z = null, C = 3, de = false, Ee = false, Y = false, U = typeof setTimeout == "function" ? setTimeout : null, he = typeof clearTimeout == "function" ? clearTimeout : null, ve = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ie(x) {
      for (var A = p(b); A !== null; ) {
        if (A.callback === null) I(b);
        else if (A.startTime <= x) I(b), A.sortIndex = A.expirationTime, S(B, A);
        else break;
        A = p(b);
      }
    }
    function Ce(x) {
      if (Y = false, Ie(x), !Ee) if (p(B) !== null) Ee = true, Be(le);
      else {
        var A = p(b);
        A !== null && ye(Ce, A.startTime - x);
      }
    }
    function le(x, A) {
      Ee = false, Y && (Y = false, he($), $ = -1), de = true;
      var R = C;
      try {
        for (Ie(A), z = p(B); z !== null && (!(z.expirationTime > A) || x && !wt()); ) {
          var f = z.callback;
          if (typeof f == "function") {
            z.callback = null, C = z.priorityLevel;
            var E = f(z.expirationTime <= A);
            A = v.unstable_now(), typeof E == "function" ? z.callback = E : z === p(B) && I(B), Ie(A);
          } else I(B);
          z = p(B);
        }
        if (z !== null) var V = true;
        else {
          var W = p(b);
          W !== null && ye(Ce, W.startTime - A), V = false;
        }
        return V;
      } finally {
        z = null, C = R, de = false;
      }
    }
    var ke = false, we = null, $ = -1, te = 5, De = -1;
    function wt() {
      return !(v.unstable_now() - De < te);
    }
    function mt() {
      if (we !== null) {
        var x = v.unstable_now();
        De = x;
        var A = true;
        try {
          A = we(true, x);
        } finally {
          A ? Ge() : (ke = false, we = null);
        }
      } else ke = false;
    }
    var Ge;
    if (typeof ve == "function") Ge = function() {
      ve(mt);
    };
    else if (typeof MessageChannel < "u") {
      var it = new MessageChannel(), ht = it.port2;
      it.port1.onmessage = mt, Ge = function() {
        ht.postMessage(null);
      };
    } else Ge = function() {
      U(mt, 0);
    };
    function Be(x) {
      we = x, ke || (ke = true, Ge());
    }
    function ye(x, A) {
      $ = U(function() {
        x(v.unstable_now());
      }, A);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(x) {
      x.callback = null;
    }, v.unstable_continueExecution = function() {
      Ee || de || (Ee = true, Be(le));
    }, v.unstable_forceFrameRate = function(x) {
      0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : te = 0 < x ? Math.floor(1e3 / x) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, v.unstable_getFirstCallbackNode = function() {
      return p(B);
    }, v.unstable_next = function(x) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = C;
      }
      var R = C;
      C = A;
      try {
        return x();
      } finally {
        C = R;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(x, A) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var R = C;
      C = x;
      try {
        return A();
      } finally {
        C = R;
      }
    }, v.unstable_scheduleCallback = function(x, A, R) {
      var f = v.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? f + R : f) : R = f, x) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return E = R + E, x = { id: ee++, callback: A, priorityLevel: x, startTime: R, expirationTime: E, sortIndex: -1 }, R > f ? (x.sortIndex = R, S(b, x), p(B) === null && x === p(b) && (Y ? (he($), $ = -1) : Y = true, ye(Ce, R - f))) : (x.sortIndex = E, S(B, x), Ee || de || (Ee = true, Be(le))), x;
    }, v.unstable_shouldYield = wt, v.unstable_wrapCallback = function(x) {
      var A = C;
      return function() {
        var R = C;
        C = A;
        try {
          return x.apply(this, arguments);
        } finally {
          C = R;
        }
      };
    };
  })($i)), $i;
}
var Ks;
function sd() {
  return Ks || (Ks = 1, ji.exports = ud()), ji.exports;
}
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ys;
function cd() {
  if (Ys) return Ye;
  Ys = 1;
  var v = bs(), S = sd();
  function p(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var I = /* @__PURE__ */ new Set(), y = {};
  function F(e, t) {
    K(e, t), K(e + "Capture", t);
  }
  function K(e, t) {
    for (y[e] = t, e = 0; e < t.length; e++) I.add(t[e]);
  }
  var q = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), B = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ee = {}, z = {};
  function C(e) {
    return B.call(z, e) ? true : B.call(ee, e) ? false : b.test(e) ? z[e] = true : (ee[e] = true, false);
  }
  function de(e, t, n, r) {
    if (n !== null && n.type === 0) return false;
    switch (typeof t) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function Ee(e, t, n, r) {
    if (t === null || typeof t > "u" || de(e, t, n, r)) return true;
    if (r) return false;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === false;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return false;
  }
  function Y(e, t, n, r, l, o, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a;
  }
  var U = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    U[e] = new Y(e, 0, false, e, null, false, false);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    U[t] = new Y(t, 1, false, e[1], null, false, false);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    U[e] = new Y(e, 2, false, e.toLowerCase(), null, false, false);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    U[e] = new Y(e, 2, false, e, null, false, false);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    U[e] = new Y(e, 3, false, e.toLowerCase(), null, false, false);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    U[e] = new Y(e, 3, true, e, null, false, false);
  }), ["capture", "download"].forEach(function(e) {
    U[e] = new Y(e, 4, false, e, null, false, false);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    U[e] = new Y(e, 6, false, e, null, false, false);
  }), ["rowSpan", "start"].forEach(function(e) {
    U[e] = new Y(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var he = /[\-:]([a-z])/g;
  function ve(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(he, ve);
    U[t] = new Y(t, 1, false, e, null, false, false);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(he, ve);
    U[t] = new Y(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(he, ve);
    U[t] = new Y(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    U[e] = new Y(e, 1, false, e.toLowerCase(), null, false, false);
  }), U.xlinkHref = new Y("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), ["src", "href", "action", "formAction"].forEach(function(e) {
    U[e] = new Y(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function Ie(e, t, n, r) {
    var l = U.hasOwnProperty(t) ? U[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ee(t, n, l, r) && (n = null), r || l === null ? C(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? false : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Ce = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, le = Symbol.for("react.element"), ke = Symbol.for("react.portal"), we = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), De = Symbol.for("react.provider"), wt = Symbol.for("react.context"), mt = Symbol.for("react.forward_ref"), Ge = Symbol.for("react.suspense"), it = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), x = Symbol.iterator;
  function A(e) {
    return e === null || typeof e != "object" ? null : (e = x && e[x] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var R = Object.assign, f;
  function E(e) {
    if (f === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      f = t && t[1] || "";
    }
    return `
` + f + e;
  }
  var V = false;
  function W(e, t) {
    if (!e || V) return "";
    V = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (h) {
          var r = h;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (h) {
          r = h;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (var l = h.stack.split(`
`), o = r.stack.split(`
`), a = l.length - 1, u = o.length - 1; 1 <= a && 0 <= u && l[a] !== o[u]; ) u--;
        for (; 1 <= a && 0 <= u; a--, u--) if (l[a] !== o[u]) {
          if (a !== 1 || u !== 1) do
            if (a--, u--, 0 > u || l[a] !== o[u]) {
              var s = `
` + l[a].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= a && 0 <= u);
          break;
        }
      }
    } finally {
      V = false, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? E(e) : "";
  }
  function X(e) {
    switch (e.tag) {
      case 5:
        return E(e.type);
      case 16:
        return E("Lazy");
      case 13:
        return E("Suspense");
      case 19:
        return E("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = W(e.type, false), e;
      case 11:
        return e = W(e.type.render, false), e;
      case 1:
        return e = W(e.type, true), e;
      default:
        return "";
    }
  }
  function Z(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case we:
        return "Fragment";
      case ke:
        return "Portal";
      case te:
        return "Profiler";
      case $:
        return "StrictMode";
      case Ge:
        return "Suspense";
      case it:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case wt:
        return (e.displayName || "Context") + ".Consumer";
      case De:
        return (e._context.displayName || "Context") + ".Provider";
      case mt:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ht:
        return t = e.displayName || null, t !== null ? t : Z(e.type) || "Memo";
      case Be:
        t = e._payload, e = e._init;
        try {
          return Z(e(t));
        } catch {
        }
    }
    return null;
  }
  function oe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Z(t);
      case 8:
        return t === $ ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ne(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ce(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Xe(e) {
    var t = ce(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: true, get: function() {
        return l.call(this);
      }, set: function(a) {
        r = "" + a, o.call(this, a);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(a) {
        r = "" + a;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function _r(e) {
    e._valueTracker || (e._valueTracker = Xe(e));
  }
  function Xi(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(), r = "";
    return e && (r = ce(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
  }
  function Pr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Hl(e, t) {
    var n = t.checked;
    return R({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Zi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ne(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Ji(e, t) {
    t = t.checked, t != null && Ie(e, "checked", t, false);
  }
  function Wl(e, t) {
    Ji(e, t);
    var n = ne(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ql(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ql(e, t.type, ne(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function qi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ql(e, t, n) {
    (t !== "number" || Pr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var An = Array.isArray;
  function cn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = true;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = true);
    } else {
      for (n = "" + ne(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = true, r && (e[l].defaultSelected = true);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Kl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return R({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function bi(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(p(92));
        if (An(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ne(n) };
  }
  function ea(e, t) {
    var n = ne(t.value), r = ne(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function ta(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function na(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Yl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? na(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Rr, ra = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Rr = Rr || document.createElement("div"), Rr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Rr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Fn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Un = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, sc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Un).forEach(function(e) {
    sc.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Un[t] = Un[e];
    });
  });
  function la(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Un.hasOwnProperty(e) && Un[e] ? ("" + t).trim() : t + "px";
  }
  function oa(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = la(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var cc = R({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function Gl(e, t) {
    if (t) {
      if (cc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(p(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(p(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(p(62));
    }
  }
  function Xl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Zl = null;
  function Jl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ql = null, fn = null, dn = null;
  function ia(e) {
    if (e = ir(e)) {
      if (typeof ql != "function") throw Error(p(280));
      var t = e.stateNode;
      t && (t = qr(t), ql(e.stateNode, e.type, t));
    }
  }
  function aa(e) {
    fn ? dn ? dn.push(e) : dn = [e] : fn = e;
  }
  function ua() {
    if (fn) {
      var e = fn, t = dn;
      if (dn = fn = null, ia(e), t) for (e = 0; e < t.length; e++) ia(t[e]);
    }
  }
  function sa(e, t) {
    return e(t);
  }
  function ca() {
  }
  var bl = false;
  function fa(e, t, n) {
    if (bl) return e(t, n);
    bl = true;
    try {
      return sa(e, t, n);
    } finally {
      bl = false, (fn !== null || dn !== null) && (ca(), ua());
    }
  }
  function jn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = qr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(p(231, t, typeof n));
    return n;
  }
  var eo = false;
  if (q) try {
    var $n = {};
    Object.defineProperty($n, "passive", { get: function() {
      eo = true;
    } }), window.addEventListener("test", $n, $n), window.removeEventListener("test", $n, $n);
  } catch {
    eo = false;
  }
  function fc(e, t, n, r, l, o, a, u, s) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (k) {
      this.onError(k);
    }
  }
  var Bn = false, Tr = null, Lr = false, to = null, dc = { onError: function(e) {
    Bn = true, Tr = e;
  } };
  function pc(e, t, n, r, l, o, a, u, s) {
    Bn = false, Tr = null, fc.apply(dc, arguments);
  }
  function mc(e, t, n, r, l, o, a, u, s) {
    if (pc.apply(this, arguments), Bn) {
      if (Bn) {
        var h = Tr;
        Bn = false, Tr = null;
      } else throw Error(p(198));
      Lr || (Lr = true, to = h);
    }
  }
  function Zt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function da(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function pa(e) {
    if (Zt(e) !== e) throw Error(p(188));
  }
  function hc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Zt(e), t === null) throw Error(p(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return pa(l), e;
          if (o === r) return pa(l), t;
          o = o.sibling;
        }
        throw Error(p(188));
      }
      if (n.return !== r.return) n = l, r = o;
      else {
        for (var a = false, u = l.child; u; ) {
          if (u === n) {
            a = true, n = l, r = o;
            break;
          }
          if (u === r) {
            a = true, r = l, n = o;
            break;
          }
          u = u.sibling;
        }
        if (!a) {
          for (u = o.child; u; ) {
            if (u === n) {
              a = true, n = o, r = l;
              break;
            }
            if (u === r) {
              a = true, r = o, n = l;
              break;
            }
            u = u.sibling;
          }
          if (!a) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function ma(e) {
    return e = hc(e), e !== null ? ha(e) : null;
  }
  function ha(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ha(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var va = S.unstable_scheduleCallback, ya = S.unstable_cancelCallback, vc = S.unstable_shouldYield, yc = S.unstable_requestPaint, Se = S.unstable_now, gc = S.unstable_getCurrentPriorityLevel, no = S.unstable_ImmediatePriority, ga = S.unstable_UserBlockingPriority, Mr = S.unstable_NormalPriority, Ec = S.unstable_LowPriority, Ea = S.unstable_IdlePriority, Ir = null, vt = null;
  function kc(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function") try {
      vt.onCommitFiberRoot(Ir, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var at = Math.clz32 ? Math.clz32 : Nc, wc = Math.log, Sc = Math.LN2;
  function Nc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (wc(e) / Sc | 0) | 0;
  }
  var Dr = 64, Or = 4194304;
  function Vn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ar(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, a = n & 268435455;
    if (a !== 0) {
      var u = a & ~l;
      u !== 0 ? r = Vn(u) : (o &= a, o !== 0 && (r = Vn(o)));
    } else a = n & ~l, a !== 0 ? r = Vn(a) : o !== 0 && (r = Vn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - at(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function Cc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function xc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var a = 31 - at(o), u = 1 << a, s = l[a];
      s === -1 ? ((u & n) === 0 || (u & r) !== 0) && (l[a] = Cc(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
    }
  }
  function ro(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ka() {
    var e = Dr;
    return Dr <<= 1, (Dr & 4194240) === 0 && (Dr = 64), e;
  }
  function lo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Hn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - at(t), e[t] = n;
  }
  function zc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - at(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function oo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - at(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var re = 0;
  function wa(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Sa, io, Na, Ca, xa, ao = false, Fr = [], Tt = null, Lt = null, Mt = null, Wn = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), It = [], _c = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function za(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tt = null;
        break;
      case "dragenter":
      case "dragleave":
        Lt = null;
        break;
      case "mouseover":
      case "mouseout":
        Mt = null;
        break;
      case "pointerover":
      case "pointerout":
        Wn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qn.delete(t.pointerId);
    }
  }
  function Kn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = ir(t), t !== null && io(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Pc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Tt = Kn(Tt, e, t, n, r, l), true;
      case "dragenter":
        return Lt = Kn(Lt, e, t, n, r, l), true;
      case "mouseover":
        return Mt = Kn(Mt, e, t, n, r, l), true;
      case "pointerover":
        var o = l.pointerId;
        return Wn.set(o, Kn(Wn.get(o) || null, e, t, n, r, l)), true;
      case "gotpointercapture":
        return o = l.pointerId, Qn.set(o, Kn(Qn.get(o) || null, e, t, n, r, l)), true;
    }
    return false;
  }
  function _a(e) {
    var t = Jt(e.target);
    if (t !== null) {
      var n = Zt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = da(n), t !== null) {
            e.blockedOn = t, xa(e.priority, function() {
              Na(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ur(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = so(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Zl = r, n.target.dispatchEvent(r), Zl = null;
      } else return t = ir(n), t !== null && io(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function Pa(e, t, n) {
    Ur(e) && n.delete(t);
  }
  function Rc() {
    ao = false, Tt !== null && Ur(Tt) && (Tt = null), Lt !== null && Ur(Lt) && (Lt = null), Mt !== null && Ur(Mt) && (Mt = null), Wn.forEach(Pa), Qn.forEach(Pa);
  }
  function Yn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ao || (ao = true, S.unstable_scheduleCallback(S.unstable_NormalPriority, Rc)));
  }
  function Gn(e) {
    function t(l) {
      return Yn(l, e);
    }
    if (0 < Fr.length) {
      Yn(Fr[0], e);
      for (var n = 1; n < Fr.length; n++) {
        var r = Fr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Tt !== null && Yn(Tt, e), Lt !== null && Yn(Lt, e), Mt !== null && Yn(Mt, e), Wn.forEach(t), Qn.forEach(t), n = 0; n < It.length; n++) r = It[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < It.length && (n = It[0], n.blockedOn === null); ) _a(n), n.blockedOn === null && It.shift();
  }
  var pn = Ce.ReactCurrentBatchConfig, jr = true;
  function Tc(e, t, n, r) {
    var l = re, o = pn.transition;
    pn.transition = null;
    try {
      re = 1, uo(e, t, n, r);
    } finally {
      re = l, pn.transition = o;
    }
  }
  function Lc(e, t, n, r) {
    var l = re, o = pn.transition;
    pn.transition = null;
    try {
      re = 4, uo(e, t, n, r);
    } finally {
      re = l, pn.transition = o;
    }
  }
  function uo(e, t, n, r) {
    if (jr) {
      var l = so(e, t, n, r);
      if (l === null) _o(e, t, r, $r, n), za(e, r);
      else if (Pc(l, e, t, n, r)) r.stopPropagation();
      else if (za(e, r), t & 4 && -1 < _c.indexOf(e)) {
        for (; l !== null; ) {
          var o = ir(l);
          if (o !== null && Sa(o), o = so(e, t, n, r), o === null && _o(e, t, r, $r, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else _o(e, t, r, null, n);
    }
  }
  var $r = null;
  function so(e, t, n, r) {
    if ($r = null, e = Jl(r), e = Jt(e), e !== null) if (t = Zt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = da(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return $r = e, null;
  }
  function Ra(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (gc()) {
          case no:
            return 1;
          case ga:
            return 4;
          case Mr:
          case Ec:
            return 16;
          case Ea:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Dt = null, co = null, Br = null;
  function Ta() {
    if (Br) return Br;
    var e, t = co, n = t.length, r, l = "value" in Dt ? Dt.value : Dt.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === l[o - r]; r++) ;
    return Br = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Vr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Hr() {
    return true;
  }
  function La() {
    return false;
  }
  function Ze(e) {
    function t(n, r, l, o, a) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = a, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? Hr : La, this.isPropagationStopped = La, this;
    }
    return R(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Hr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Hr);
    }, persist: function() {
    }, isPersistent: Hr }), t;
  }
  var mn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, fo = Ze(mn), Xn = R({}, mn, { view: 0, detail: 0 }), Mc = Ze(Xn), po, mo, Zn, Wr = R({}, Xn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Zn && (Zn && e.type === "mousemove" ? (po = e.screenX - Zn.screenX, mo = e.screenY - Zn.screenY) : mo = po = 0, Zn = e), po);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : mo;
  } }), Ma = Ze(Wr), Ic = R({}, Wr, { dataTransfer: 0 }), Dc = Ze(Ic), Oc = R({}, Xn, { relatedTarget: 0 }), ho = Ze(Oc), Ac = R({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Fc = Ze(Ac), Uc = R({}, mn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), jc = Ze(Uc), $c = R({}, mn, { data: 0 }), Ia = Ze($c), Bc = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Vc = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Hc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Hc[e]) ? !!t[e] : false;
  }
  function vo() {
    return Wc;
  }
  var Qc = R({}, Xn, { key: function(e) {
    if (e.key) {
      var t = Bc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Vr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vo, charCode: function(e) {
    return e.type === "keypress" ? Vr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Vr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Kc = Ze(Qc), Yc = R({}, Wr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Da = Ze(Yc), Gc = R({}, Xn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vo }), Xc = Ze(Gc), Zc = R({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jc = Ze(Zc), qc = R({}, Wr, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), bc = Ze(qc), ef = [9, 13, 27, 32], yo = q && "CompositionEvent" in window, Jn = null;
  q && "documentMode" in document && (Jn = document.documentMode);
  var tf = q && "TextEvent" in window && !Jn, Oa = q && (!yo || Jn && 8 < Jn && 11 >= Jn), Aa = " ", Fa = false;
  function Ua(e, t) {
    switch (e) {
      case "keyup":
        return ef.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function ja(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var hn = false;
  function nf(e, t) {
    switch (e) {
      case "compositionend":
        return ja(t);
      case "keypress":
        return t.which !== 32 ? null : (Fa = true, Aa);
      case "textInput":
        return e = t.data, e === Aa && Fa ? null : e;
      default:
        return null;
    }
  }
  function rf(e, t) {
    if (hn) return e === "compositionend" || !yo && Ua(e, t) ? (e = Ta(), Br = co = Dt = null, hn = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Oa && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var lf = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function $a(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!lf[e.type] : t === "textarea";
  }
  function Ba(e, t, n, r) {
    aa(r), t = Xr(t, "onChange"), 0 < t.length && (n = new fo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var qn = null, bn = null;
  function of(e) {
    ou(e, 0);
  }
  function Qr(e) {
    var t = kn(e);
    if (Xi(t)) return e;
  }
  function af(e, t) {
    if (e === "change") return t;
  }
  var Va = false;
  if (q) {
    var go;
    if (q) {
      var Eo = "oninput" in document;
      if (!Eo) {
        var Ha = document.createElement("div");
        Ha.setAttribute("oninput", "return;"), Eo = typeof Ha.oninput == "function";
      }
      go = Eo;
    } else go = false;
    Va = go && (!document.documentMode || 9 < document.documentMode);
  }
  function Wa() {
    qn && (qn.detachEvent("onpropertychange", Qa), bn = qn = null);
  }
  function Qa(e) {
    if (e.propertyName === "value" && Qr(bn)) {
      var t = [];
      Ba(t, bn, e, Jl(e)), fa(of, t);
    }
  }
  function uf(e, t, n) {
    e === "focusin" ? (Wa(), qn = t, bn = n, qn.attachEvent("onpropertychange", Qa)) : e === "focusout" && Wa();
  }
  function sf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Qr(bn);
  }
  function cf(e, t) {
    if (e === "click") return Qr(t);
  }
  function ff(e, t) {
    if (e === "input" || e === "change") return Qr(t);
  }
  function df(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ut = typeof Object.is == "function" ? Object.is : df;
  function er(e, t) {
    if (ut(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return false;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!B.call(t, l) || !ut(e[l], t[l])) return false;
    }
    return true;
  }
  function Ka(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ya(e, t) {
    var n = Ka(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ka(n);
    }
  }
  function Ga(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Ga(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function Xa() {
    for (var e = window, t = Pr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Pr(e.document);
    }
    return t;
  }
  function ko(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function pf(e) {
    var t = Xa(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ga(n.ownerDocument.documentElement, n)) {
      if (r !== null && ko(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ya(n, o);
          var a = Ya(n, r);
          l && a && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var mf = q && "documentMode" in document && 11 >= document.documentMode, vn = null, wo = null, tr = null, So = false;
  function Za(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    So || vn == null || vn !== Pr(r) || (r = vn, "selectionStart" in r && ko(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), tr && er(tr, r) || (tr = r, r = Xr(wo, "onSelect"), 0 < r.length && (t = new fo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vn)));
  }
  function Kr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var yn = { animationend: Kr("Animation", "AnimationEnd"), animationiteration: Kr("Animation", "AnimationIteration"), animationstart: Kr("Animation", "AnimationStart"), transitionend: Kr("Transition", "TransitionEnd") }, No = {}, Ja = {};
  q && (Ja = document.createElement("div").style, "AnimationEvent" in window || (delete yn.animationend.animation, delete yn.animationiteration.animation, delete yn.animationstart.animation), "TransitionEvent" in window || delete yn.transitionend.transition);
  function Yr(e) {
    if (No[e]) return No[e];
    if (!yn[e]) return e;
    var t = yn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ja) return No[e] = t[n];
    return e;
  }
  var qa = Yr("animationend"), ba = Yr("animationiteration"), eu = Yr("animationstart"), tu = Yr("transitionend"), nu = /* @__PURE__ */ new Map(), ru = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ot(e, t) {
    nu.set(e, t), F(t, [e]);
  }
  for (var Co = 0; Co < ru.length; Co++) {
    var xo = ru[Co], hf = xo.toLowerCase(), vf = xo[0].toUpperCase() + xo.slice(1);
    Ot(hf, "on" + vf);
  }
  Ot(qa, "onAnimationEnd"), Ot(ba, "onAnimationIteration"), Ot(eu, "onAnimationStart"), Ot("dblclick", "onDoubleClick"), Ot("focusin", "onFocus"), Ot("focusout", "onBlur"), Ot(tu, "onTransitionEnd"), K("onMouseEnter", ["mouseout", "mouseover"]), K("onMouseLeave", ["mouseout", "mouseover"]), K("onPointerEnter", ["pointerout", "pointerover"]), K("onPointerLeave", ["pointerout", "pointerover"]), F("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), F("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), F("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), F("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), F("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), F("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), yf = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));
  function lu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, mc(r, t, void 0, e), e.currentTarget = null;
  }
  function ou(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var a = r.length - 1; 0 <= a; a--) {
          var u = r[a], s = u.instance, h = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
          lu(l, u, h), o = s;
        }
        else for (a = 0; a < r.length; a++) {
          if (u = r[a], s = u.instance, h = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
          lu(l, u, h), o = s;
        }
      }
    }
    if (Lr) throw e = to, Lr = false, to = null, e;
  }
  function ae(e, t) {
    var n = t[Io];
    n === void 0 && (n = t[Io] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (iu(t, e, 2, false), n.add(r));
  }
  function zo(e, t, n) {
    var r = 0;
    t && (r |= 4), iu(n, e, r, t);
  }
  var Gr = "_reactListening" + Math.random().toString(36).slice(2);
  function rr(e) {
    if (!e[Gr]) {
      e[Gr] = true, I.forEach(function(n) {
        n !== "selectionchange" && (yf.has(n) || zo(n, false, e), zo(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Gr] || (t[Gr] = true, zo("selectionchange", false, t));
    }
  }
  function iu(e, t, n, r) {
    switch (Ra(t)) {
      case 1:
        var l = Tc;
        break;
      case 4:
        l = Lc;
        break;
      default:
        l = uo;
    }
    n = l.bind(null, t, n, e), l = void 0, !eo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), r ? l !== void 0 ? e.addEventListener(t, n, { capture: true, passive: l }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, false);
  }
  function _o(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || u.nodeType === 8 && u.parentNode === l) break;
        if (a === 4) for (a = r.return; a !== null; ) {
          var s = a.tag;
          if ((s === 3 || s === 4) && (s = a.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          a = a.return;
        }
        for (; u !== null; ) {
          if (a = Jt(u), a === null) return;
          if (s = a.tag, s === 5 || s === 6) {
            r = o = a;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    fa(function() {
      var h = o, k = Jl(n), w = [];
      e: {
        var g = nu.get(e);
        if (g !== void 0) {
          var _ = fo, T = e;
          switch (e) {
            case "keypress":
              if (Vr(n) === 0) break e;
            case "keydown":
            case "keyup":
              _ = Kc;
              break;
            case "focusin":
              T = "focus", _ = ho;
              break;
            case "focusout":
              T = "blur", _ = ho;
              break;
            case "beforeblur":
            case "afterblur":
              _ = ho;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = Ma;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = Dc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = Xc;
              break;
            case qa:
            case ba:
            case eu:
              _ = Fc;
              break;
            case tu:
              _ = Jc;
              break;
            case "scroll":
              _ = Mc;
              break;
            case "wheel":
              _ = bc;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = jc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = Da;
          }
          var L = (t & 4) !== 0, Ne = !L && e === "scroll", d = L ? g !== null ? g + "Capture" : null : g;
          L = [];
          for (var c = h, m; c !== null; ) {
            m = c;
            var N = m.stateNode;
            if (m.tag === 5 && N !== null && (m = N, d !== null && (N = jn(c, d), N != null && L.push(lr(c, N, m)))), Ne) break;
            c = c.return;
          }
          0 < L.length && (g = new _(g, T, null, n, k), w.push({ event: g, listeners: L }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (g = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", g && n !== Zl && (T = n.relatedTarget || n.fromElement) && (Jt(T) || T[St])) break e;
          if ((_ || g) && (g = k.window === k ? k : (g = k.ownerDocument) ? g.defaultView || g.parentWindow : window, _ ? (T = n.relatedTarget || n.toElement, _ = h, T = T ? Jt(T) : null, T !== null && (Ne = Zt(T), T !== Ne || T.tag !== 5 && T.tag !== 6) && (T = null)) : (_ = null, T = h), _ !== T)) {
            if (L = Ma, N = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (L = Da, N = "onPointerLeave", d = "onPointerEnter", c = "pointer"), Ne = _ == null ? g : kn(_), m = T == null ? g : kn(T), g = new L(N, c + "leave", _, n, k), g.target = Ne, g.relatedTarget = m, N = null, Jt(k) === h && (L = new L(d, c + "enter", T, n, k), L.target = m, L.relatedTarget = Ne, N = L), Ne = N, _ && T) t: {
              for (L = _, d = T, c = 0, m = L; m; m = gn(m)) c++;
              for (m = 0, N = d; N; N = gn(N)) m++;
              for (; 0 < c - m; ) L = gn(L), c--;
              for (; 0 < m - c; ) d = gn(d), m--;
              for (; c--; ) {
                if (L === d || d !== null && L === d.alternate) break t;
                L = gn(L), d = gn(d);
              }
              L = null;
            }
            else L = null;
            _ !== null && au(w, g, _, L, false), T !== null && Ne !== null && au(w, Ne, T, L, true);
          }
        }
        e: {
          if (g = h ? kn(h) : window, _ = g.nodeName && g.nodeName.toLowerCase(), _ === "select" || _ === "input" && g.type === "file") var M = af;
          else if ($a(g)) if (Va) M = ff;
          else {
            M = sf;
            var D = uf;
          }
          else (_ = g.nodeName) && _.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (M = cf);
          if (M && (M = M(e, h))) {
            Ba(w, M, n, k);
            break e;
          }
          D && D(e, g, h), e === "focusout" && (D = g._wrapperState) && D.controlled && g.type === "number" && Ql(g, "number", g.value);
        }
        switch (D = h ? kn(h) : window, e) {
          case "focusin":
            ($a(D) || D.contentEditable === "true") && (vn = D, wo = h, tr = null);
            break;
          case "focusout":
            tr = wo = vn = null;
            break;
          case "mousedown":
            So = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            So = false, Za(w, n, k);
            break;
          case "selectionchange":
            if (mf) break;
          case "keydown":
          case "keyup":
            Za(w, n, k);
        }
        var O;
        if (yo) e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
        else hn ? Ua(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
        j && (Oa && n.locale !== "ko" && (hn || j !== "onCompositionStart" ? j === "onCompositionEnd" && hn && (O = Ta()) : (Dt = k, co = "value" in Dt ? Dt.value : Dt.textContent, hn = true)), D = Xr(h, j), 0 < D.length && (j = new Ia(j, e, null, n, k), w.push({ event: j, listeners: D }), O ? j.data = O : (O = ja(n), O !== null && (j.data = O)))), (O = tf ? nf(e, n) : rf(e, n)) && (h = Xr(h, "onBeforeInput"), 0 < h.length && (k = new Ia("onBeforeInput", "beforeinput", null, n, k), w.push({ event: k, listeners: h }), k.data = O));
      }
      ou(w, t);
    });
  }
  function lr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Xr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = jn(e, n), o != null && r.unshift(lr(e, o, l)), o = jn(e, t), o != null && r.push(lr(e, o, l))), e = e.return;
    }
    return r;
  }
  function gn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function au(e, t, n, r, l) {
    for (var o = t._reactName, a = []; n !== null && n !== r; ) {
      var u = n, s = u.alternate, h = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 && h !== null && (u = h, l ? (s = jn(n, o), s != null && a.unshift(lr(n, s, u))) : l || (s = jn(n, o), s != null && a.push(lr(n, s, u)))), n = n.return;
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var gf = /\r\n?/g, Ef = /\u0000|\uFFFD/g;
  function uu(e) {
    return (typeof e == "string" ? e : "" + e).replace(gf, `
`).replace(Ef, "");
  }
  function Zr(e, t, n) {
    if (t = uu(t), uu(e) !== t && n) throw Error(p(425));
  }
  function Jr() {
  }
  var Po = null, Ro = null;
  function To(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Lo = typeof setTimeout == "function" ? setTimeout : void 0, kf = typeof clearTimeout == "function" ? clearTimeout : void 0, su = typeof Promise == "function" ? Promise : void 0, wf = typeof queueMicrotask == "function" ? queueMicrotask : typeof su < "u" ? function(e) {
    return su.resolve(null).then(e).catch(Sf);
  } : Lo;
  function Sf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Mo(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Gn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Gn(t);
  }
  function At(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function cu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var En = Math.random().toString(36).slice(2), yt = "__reactFiber$" + En, or = "__reactProps$" + En, St = "__reactContainer$" + En, Io = "__reactEvents$" + En, Nf = "__reactListeners$" + En, Cf = "__reactHandles$" + En;
  function Jt(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[St] || n[yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = cu(e); e !== null; ) {
          if (n = e[yt]) return n;
          e = cu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ir(e) {
    return e = e[yt] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function kn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function qr(e) {
    return e[or] || null;
  }
  var Do = [], wn = -1;
  function Ft(e) {
    return { current: e };
  }
  function ue(e) {
    0 > wn || (e.current = Do[wn], Do[wn] = null, wn--);
  }
  function ie(e, t) {
    wn++, Do[wn] = e.current, e.current = t;
  }
  var Ut = {}, Oe = Ft(Ut), Ve = Ft(false), qt = Ut;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ut;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function He(e) {
    return e = e.childContextTypes, e != null;
  }
  function br() {
    ue(Ve), ue(Oe);
  }
  function fu(e, t, n) {
    if (Oe.current !== Ut) throw Error(p(168));
    ie(Oe, t), ie(Ve, n);
  }
  function du(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(p(108, oe(e) || "Unknown", l));
    return R({}, n, r);
  }
  function el(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ut, qt = Oe.current, ie(Oe, e), ie(Ve, Ve.current), true;
  }
  function pu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    n ? (e = du(e, t, qt), r.__reactInternalMemoizedMergedChildContext = e, ue(Ve), ue(Oe), ie(Oe, e)) : ue(Ve), ie(Ve, n);
  }
  var Nt = null, tl = false, Oo = false;
  function mu(e) {
    Nt === null ? Nt = [e] : Nt.push(e);
  }
  function xf(e) {
    tl = true, mu(e);
  }
  function jt() {
    if (!Oo && Nt !== null) {
      Oo = true;
      var e = 0, t = re;
      try {
        var n = Nt;
        for (re = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(true);
          while (r !== null);
        }
        Nt = null, tl = false;
      } catch (l) {
        throw Nt !== null && (Nt = Nt.slice(e + 1)), va(no, jt), l;
      } finally {
        re = t, Oo = false;
      }
    }
    return null;
  }
  var Nn = [], Cn = 0, nl = null, rl = 0, et = [], tt = 0, bt = null, Ct = 1, xt = "";
  function en(e, t) {
    Nn[Cn++] = rl, Nn[Cn++] = nl, nl = e, rl = t;
  }
  function hu(e, t, n) {
    et[tt++] = Ct, et[tt++] = xt, et[tt++] = bt, bt = e;
    var r = Ct;
    e = xt;
    var l = 32 - at(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - at(t) + l;
    if (30 < o) {
      var a = l - l % 5;
      o = (r & (1 << a) - 1).toString(32), r >>= a, l -= a, Ct = 1 << 32 - at(t) + l | n << l | r, xt = o + e;
    } else Ct = 1 << o | n << l | r, xt = e;
  }
  function Ao(e) {
    e.return !== null && (en(e, 1), hu(e, 1, 0));
  }
  function Fo(e) {
    for (; e === nl; ) nl = Nn[--Cn], Nn[Cn] = null, rl = Nn[--Cn], Nn[Cn] = null;
    for (; e === bt; ) bt = et[--tt], et[tt] = null, xt = et[--tt], et[tt] = null, Ct = et[--tt], et[tt] = null;
  }
  var Je = null, qe = null, fe = false, st = null;
  function vu(e, t) {
    var n = ot(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function yu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Je = e, qe = At(t.firstChild), true) : false;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Je = e, qe = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bt !== null ? { id: Ct, overflow: xt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ot(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Je = e, qe = null, true) : false;
      default:
        return false;
    }
  }
  function Uo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function jo(e) {
    if (fe) {
      var t = qe;
      if (t) {
        var n = t;
        if (!yu(e, t)) {
          if (Uo(e)) throw Error(p(418));
          t = At(n.nextSibling);
          var r = Je;
          t && yu(e, t) ? vu(r, n) : (e.flags = e.flags & -4097 | 2, fe = false, Je = e);
        }
      } else {
        if (Uo(e)) throw Error(p(418));
        e.flags = e.flags & -4097 | 2, fe = false, Je = e;
      }
    }
  }
  function gu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Je = e;
  }
  function ll(e) {
    if (e !== Je) return false;
    if (!fe) return gu(e), fe = true, false;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !To(e.type, e.memoizedProps)), t && (t = qe)) {
      if (Uo(e)) throw Eu(), Error(p(418));
      for (; t; ) vu(e, t), t = At(t.nextSibling);
    }
    if (gu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                qe = At(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        qe = null;
      }
    } else qe = Je ? At(e.stateNode.nextSibling) : null;
    return true;
  }
  function Eu() {
    for (var e = qe; e; ) e = At(e.nextSibling);
  }
  function xn() {
    qe = Je = null, fe = false;
  }
  function $o(e) {
    st === null ? st = [e] : st.push(e);
  }
  var zf = Ce.ReactCurrentBatchConfig;
  function ar(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(p(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(p(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
          var u = l.refs;
          a === null ? delete u[o] : u[o] = a;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(p(284));
      if (!n._owner) throw Error(p(290, e));
    }
    return e;
  }
  function ol(e, t) {
    throw e = Object.prototype.toString.call(t), Error(p(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ku(e) {
    var t = e._init;
    return t(e._payload);
  }
  function wu(e) {
    function t(d, c) {
      if (e) {
        var m = d.deletions;
        m === null ? (d.deletions = [c], d.flags |= 16) : m.push(c);
      }
    }
    function n(d, c) {
      if (!e) return null;
      for (; c !== null; ) t(d, c), c = c.sibling;
      return null;
    }
    function r(d, c) {
      for (d = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
      return d;
    }
    function l(d, c) {
      return d = Yt(d, c), d.index = 0, d.sibling = null, d;
    }
    function o(d, c, m) {
      return d.index = m, e ? (m = d.alternate, m !== null ? (m = m.index, m < c ? (d.flags |= 2, c) : m) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
    }
    function a(d) {
      return e && d.alternate === null && (d.flags |= 2), d;
    }
    function u(d, c, m, N) {
      return c === null || c.tag !== 6 ? (c = Li(m, d.mode, N), c.return = d, c) : (c = l(c, m), c.return = d, c);
    }
    function s(d, c, m, N) {
      var M = m.type;
      return M === we ? k(d, c, m.props.children, N, m.key) : c !== null && (c.elementType === M || typeof M == "object" && M !== null && M.$$typeof === Be && ku(M) === c.type) ? (N = l(c, m.props), N.ref = ar(d, c, m), N.return = d, N) : (N = Rl(m.type, m.key, m.props, null, d.mode, N), N.ref = ar(d, c, m), N.return = d, N);
    }
    function h(d, c, m, N) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = Mi(m, d.mode, N), c.return = d, c) : (c = l(c, m.children || []), c.return = d, c);
    }
    function k(d, c, m, N, M) {
      return c === null || c.tag !== 7 ? (c = sn(m, d.mode, N, M), c.return = d, c) : (c = l(c, m), c.return = d, c);
    }
    function w(d, c, m) {
      if (typeof c == "string" && c !== "" || typeof c == "number") return c = Li("" + c, d.mode, m), c.return = d, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case le:
            return m = Rl(c.type, c.key, c.props, null, d.mode, m), m.ref = ar(d, null, c), m.return = d, m;
          case ke:
            return c = Mi(c, d.mode, m), c.return = d, c;
          case Be:
            var N = c._init;
            return w(d, N(c._payload), m);
        }
        if (An(c) || A(c)) return c = sn(c, d.mode, m, null), c.return = d, c;
        ol(d, c);
      }
      return null;
    }
    function g(d, c, m, N) {
      var M = c !== null ? c.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number") return M !== null ? null : u(d, c, "" + m, N);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case le:
            return m.key === M ? s(d, c, m, N) : null;
          case ke:
            return m.key === M ? h(d, c, m, N) : null;
          case Be:
            return M = m._init, g(d, c, M(m._payload), N);
        }
        if (An(m) || A(m)) return M !== null ? null : k(d, c, m, N, null);
        ol(d, m);
      }
      return null;
    }
    function _(d, c, m, N, M) {
      if (typeof N == "string" && N !== "" || typeof N == "number") return d = d.get(m) || null, u(c, d, "" + N, M);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case le:
            return d = d.get(N.key === null ? m : N.key) || null, s(c, d, N, M);
          case ke:
            return d = d.get(N.key === null ? m : N.key) || null, h(c, d, N, M);
          case Be:
            var D = N._init;
            return _(d, c, m, D(N._payload), M);
        }
        if (An(N) || A(N)) return d = d.get(m) || null, k(c, d, N, M, null);
        ol(c, N);
      }
      return null;
    }
    function T(d, c, m, N) {
      for (var M = null, D = null, O = c, j = c = 0, Te = null; O !== null && j < m.length; j++) {
        O.index > j ? (Te = O, O = null) : Te = O.sibling;
        var J = g(d, O, m[j], N);
        if (J === null) {
          O === null && (O = Te);
          break;
        }
        e && O && J.alternate === null && t(d, O), c = o(J, c, j), D === null ? M = J : D.sibling = J, D = J, O = Te;
      }
      if (j === m.length) return n(d, O), fe && en(d, j), M;
      if (O === null) {
        for (; j < m.length; j++) O = w(d, m[j], N), O !== null && (c = o(O, c, j), D === null ? M = O : D.sibling = O, D = O);
        return fe && en(d, j), M;
      }
      for (O = r(d, O); j < m.length; j++) Te = _(O, d, j, m[j], N), Te !== null && (e && Te.alternate !== null && O.delete(Te.key === null ? j : Te.key), c = o(Te, c, j), D === null ? M = Te : D.sibling = Te, D = Te);
      return e && O.forEach(function(Gt) {
        return t(d, Gt);
      }), fe && en(d, j), M;
    }
    function L(d, c, m, N) {
      var M = A(m);
      if (typeof M != "function") throw Error(p(150));
      if (m = M.call(m), m == null) throw Error(p(151));
      for (var D = M = null, O = c, j = c = 0, Te = null, J = m.next(); O !== null && !J.done; j++, J = m.next()) {
        O.index > j ? (Te = O, O = null) : Te = O.sibling;
        var Gt = g(d, O, J.value, N);
        if (Gt === null) {
          O === null && (O = Te);
          break;
        }
        e && O && Gt.alternate === null && t(d, O), c = o(Gt, c, j), D === null ? M = Gt : D.sibling = Gt, D = Gt, O = Te;
      }
      if (J.done) return n(d, O), fe && en(d, j), M;
      if (O === null) {
        for (; !J.done; j++, J = m.next()) J = w(d, J.value, N), J !== null && (c = o(J, c, j), D === null ? M = J : D.sibling = J, D = J);
        return fe && en(d, j), M;
      }
      for (O = r(d, O); !J.done; j++, J = m.next()) J = _(O, d, j, J.value, N), J !== null && (e && J.alternate !== null && O.delete(J.key === null ? j : J.key), c = o(J, c, j), D === null ? M = J : D.sibling = J, D = J);
      return e && O.forEach(function(od) {
        return t(d, od);
      }), fe && en(d, j), M;
    }
    function Ne(d, c, m, N) {
      if (typeof m == "object" && m !== null && m.type === we && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case le:
            e: {
              for (var M = m.key, D = c; D !== null; ) {
                if (D.key === M) {
                  if (M = m.type, M === we) {
                    if (D.tag === 7) {
                      n(d, D.sibling), c = l(D, m.props.children), c.return = d, d = c;
                      break e;
                    }
                  } else if (D.elementType === M || typeof M == "object" && M !== null && M.$$typeof === Be && ku(M) === D.type) {
                    n(d, D.sibling), c = l(D, m.props), c.ref = ar(d, D, m), c.return = d, d = c;
                    break e;
                  }
                  n(d, D);
                  break;
                } else t(d, D);
                D = D.sibling;
              }
              m.type === we ? (c = sn(m.props.children, d.mode, N, m.key), c.return = d, d = c) : (N = Rl(m.type, m.key, m.props, null, d.mode, N), N.ref = ar(d, c, m), N.return = d, d = N);
            }
            return a(d);
          case ke:
            e: {
              for (D = m.key; c !== null; ) {
                if (c.key === D) if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                  n(d, c.sibling), c = l(c, m.children || []), c.return = d, d = c;
                  break e;
                } else {
                  n(d, c);
                  break;
                }
                else t(d, c);
                c = c.sibling;
              }
              c = Mi(m, d.mode, N), c.return = d, d = c;
            }
            return a(d);
          case Be:
            return D = m._init, Ne(d, c, D(m._payload), N);
        }
        if (An(m)) return T(d, c, m, N);
        if (A(m)) return L(d, c, m, N);
        ol(d, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(d, c.sibling), c = l(c, m), c.return = d, d = c) : (n(d, c), c = Li(m, d.mode, N), c.return = d, d = c), a(d)) : n(d, c);
    }
    return Ne;
  }
  var zn = wu(true), Su = wu(false), il = Ft(null), al = null, _n = null, Bo = null;
  function Vo() {
    Bo = _n = al = null;
  }
  function Ho(e) {
    var t = il.current;
    ue(il), e._currentValue = t;
  }
  function Wo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Pn(e, t) {
    al = e, Bo = _n = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (We = true), e.firstContext = null);
  }
  function nt(e) {
    var t = e._currentValue;
    if (Bo !== e) if (e = { context: e, memoizedValue: t, next: null }, _n === null) {
      if (al === null) throw Error(p(308));
      _n = e, al.dependencies = { lanes: 0, firstContext: e };
    } else _n = _n.next = e;
    return t;
  }
  var tn = null;
  function Qo(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  function Nu(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Qo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, zt(e, r);
  }
  function zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var $t = false;
  function Ko(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Cu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function _t(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (G & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, zt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Qo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, zt(e, n);
  }
  function ul(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, oo(e, n);
    }
  }
  function xu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? l = o = a : o = o.next = a, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function sl(e, t, n, r) {
    var l = e.updateQueue;
    $t = false;
    var o = l.firstBaseUpdate, a = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u, h = s.next;
      s.next = null, a === null ? o = h : a.next = h, a = s;
      var k = e.alternate;
      k !== null && (k = k.updateQueue, u = k.lastBaseUpdate, u !== a && (u === null ? k.firstBaseUpdate = h : u.next = h, k.lastBaseUpdate = s));
    }
    if (o !== null) {
      var w = l.baseState;
      a = 0, k = h = s = null, u = o;
      do {
        var g = u.lane, _ = u.eventTime;
        if ((r & g) === g) {
          k !== null && (k = k.next = { eventTime: _, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
          e: {
            var T = e, L = u;
            switch (g = t, _ = n, L.tag) {
              case 1:
                if (T = L.payload, typeof T == "function") {
                  w = T.call(_, w, g);
                  break e;
                }
                w = T;
                break e;
              case 3:
                T.flags = T.flags & -65537 | 128;
              case 0:
                if (T = L.payload, g = typeof T == "function" ? T.call(_, w, g) : T, g == null) break e;
                w = R({}, w, g);
                break e;
              case 2:
                $t = true;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [u] : g.push(u));
        } else _ = { eventTime: _, lane: g, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, k === null ? (h = k = _, s = w) : k = k.next = _, a |= g;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          g = u, u = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null;
        }
      } while (true);
      if (k === null && (s = w), l.baseState = s, l.firstBaseUpdate = h, l.lastBaseUpdate = k, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          a |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ln |= a, e.lanes = a, e.memoizedState = w;
    }
  }
  function zu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(p(191, l));
        l.call(r);
      }
    }
  }
  var ur = {}, gt = Ft(ur), sr = Ft(ur), cr = Ft(ur);
  function nn(e) {
    if (e === ur) throw Error(p(174));
    return e;
  }
  function Yo(e, t) {
    switch (ie(cr, t), ie(sr, e), ie(gt, ur), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Yl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Yl(t, e);
    }
    ue(gt), ie(gt, t);
  }
  function Rn() {
    ue(gt), ue(sr), ue(cr);
  }
  function _u(e) {
    nn(cr.current);
    var t = nn(gt.current), n = Yl(t, e.type);
    t !== n && (ie(sr, e), ie(gt, n));
  }
  function Go(e) {
    sr.current === e && (ue(gt), ue(sr));
  }
  var pe = Ft(0);
  function cl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Xo = [];
  function Zo() {
    for (var e = 0; e < Xo.length; e++) Xo[e]._workInProgressVersionPrimary = null;
    Xo.length = 0;
  }
  var fl = Ce.ReactCurrentDispatcher, Jo = Ce.ReactCurrentBatchConfig, rn = 0, me = null, ze = null, Pe = null, dl = false, fr = false, dr = 0, _f = 0;
  function Ae() {
    throw Error(p(321));
  }
  function qo(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ut(e[n], t[n])) return false;
    return true;
  }
  function bo(e, t, n, r, l, o) {
    if (rn = o, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fl.current = e === null || e.memoizedState === null ? Lf : Mf, e = n(r, l), fr) {
      o = 0;
      do {
        if (fr = false, dr = 0, 25 <= o) throw Error(p(301));
        o += 1, Pe = ze = null, t.updateQueue = null, fl.current = If, e = n(r, l);
      } while (fr);
    }
    if (fl.current = hl, t = ze !== null && ze.next !== null, rn = 0, Pe = ze = me = null, dl = false, t) throw Error(p(300));
    return e;
  }
  function ei() {
    var e = dr !== 0;
    return dr = 0, e;
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Pe === null ? me.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
  }
  function rt() {
    if (ze === null) {
      var e = me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ze.next;
    var t = Pe === null ? me.memoizedState : Pe.next;
    if (t !== null) Pe = t, ze = e;
    else {
      if (e === null) throw Error(p(310));
      ze = e, e = { memoizedState: ze.memoizedState, baseState: ze.baseState, baseQueue: ze.baseQueue, queue: ze.queue, next: null }, Pe === null ? me.memoizedState = Pe = e : Pe = Pe.next = e;
    }
    return Pe;
  }
  function pr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ti(e) {
    var t = rt(), n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = ze, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var a = l.next;
        l.next = o.next, o.next = a;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var u = a = null, s = null, h = o;
      do {
        var k = h.lane;
        if ((rn & k) === k) s !== null && (s = s.next = { lane: 0, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), r = h.hasEagerState ? h.eagerState : e(r, h.action);
        else {
          var w = { lane: k, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null };
          s === null ? (u = s = w, a = r) : s = s.next = w, me.lanes |= k, ln |= k;
        }
        h = h.next;
      } while (h !== null && h !== o);
      s === null ? a = r : s.next = u, ut(r, t.memoizedState) || (We = true), t.memoizedState = r, t.baseState = a, t.baseQueue = s, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, me.lanes |= o, ln |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ni(e) {
    var t = rt(), n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var a = l = l.next;
      do
        o = e(o, a.action), a = a.next;
      while (a !== l);
      ut(o, t.memoizedState) || (We = true), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Pu() {
  }
  function Ru(e, t) {
    var n = me, r = rt(), l = t(), o = !ut(r.memoizedState, l);
    if (o && (r.memoizedState = l, We = true), r = r.queue, ri(Mu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Pe !== null && Pe.memoizedState.tag & 1) {
      if (n.flags |= 2048, mr(9, Lu.bind(null, n, r, l, t), void 0, null), Re === null) throw Error(p(349));
      (rn & 30) !== 0 || Tu(n, t, l);
    }
    return l;
  }
  function Tu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Lu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Iu(t) && Du(e);
  }
  function Mu(e, t, n) {
    return n(function() {
      Iu(t) && Du(e);
    });
  }
  function Iu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ut(e, n);
    } catch {
      return true;
    }
  }
  function Du(e) {
    var t = zt(e, 1);
    t !== null && pt(t, e, 1, -1);
  }
  function Ou(e) {
    var t = Et();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Tf.bind(null, me, e), [t.memoizedState, e];
  }
  function mr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = me.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, me.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Au() {
    return rt().memoizedState;
  }
  function pl(e, t, n, r) {
    var l = Et();
    me.flags |= e, l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ml(e, t, n, r) {
    var l = rt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ze !== null) {
      var a = ze.memoizedState;
      if (o = a.destroy, r !== null && qo(r, a.deps)) {
        l.memoizedState = mr(t, n, o, r);
        return;
      }
    }
    me.flags |= e, l.memoizedState = mr(1 | t, n, o, r);
  }
  function Fu(e, t) {
    return pl(8390656, 8, e, t);
  }
  function ri(e, t) {
    return ml(2048, 8, e, t);
  }
  function Uu(e, t) {
    return ml(4, 2, e, t);
  }
  function ju(e, t) {
    return ml(4, 4, e, t);
  }
  function $u(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Bu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ml(4, 4, $u.bind(null, t, e), n);
  }
  function li() {
  }
  function Vu(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && qo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Hu(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && qo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Wu(e, t, n) {
    return (rn & 21) === 0 ? (e.baseState && (e.baseState = false, We = true), e.memoizedState = n) : (ut(n, t) || (n = ka(), me.lanes |= n, ln |= n, e.baseState = true), t);
  }
  function Pf(e, t) {
    var n = re;
    re = n !== 0 && 4 > n ? n : 4, e(true);
    var r = Jo.transition;
    Jo.transition = {};
    try {
      e(false), t();
    } finally {
      re = n, Jo.transition = r;
    }
  }
  function Qu() {
    return rt().memoizedState;
  }
  function Rf(e, t, n) {
    var r = Qt(e);
    if (n = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null }, Ku(e)) Yu(t, n);
    else if (n = Nu(e, t, n, r), n !== null) {
      var l = $e();
      pt(n, e, r, l), Gu(n, t, r);
    }
  }
  function Tf(e, t, n) {
    var r = Qt(e), l = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null };
    if (Ku(e)) Yu(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var a = t.lastRenderedState, u = o(a, n);
        if (l.hasEagerState = true, l.eagerState = u, ut(u, a)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Qo(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = Nu(e, t, l, r), n !== null && (l = $e(), pt(n, e, r, l), Gu(n, t, r));
    }
  }
  function Ku(e) {
    var t = e.alternate;
    return e === me || t !== null && t === me;
  }
  function Yu(e, t) {
    fr = dl = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Gu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, oo(e, n);
    }
  }
  var hl = { readContext: nt, useCallback: Ae, useContext: Ae, useEffect: Ae, useImperativeHandle: Ae, useInsertionEffect: Ae, useLayoutEffect: Ae, useMemo: Ae, useReducer: Ae, useRef: Ae, useState: Ae, useDebugValue: Ae, useDeferredValue: Ae, useTransition: Ae, useMutableSource: Ae, useSyncExternalStore: Ae, useId: Ae, unstable_isNewReconciler: false }, Lf = { readContext: nt, useCallback: function(e, t) {
    return Et().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: nt, useEffect: Fu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, pl(4194308, 4, $u.bind(null, t, e), n);
  }, useLayoutEffect: function(e, t) {
    return pl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return pl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Et();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Et();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Rf.bind(null, me, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Et();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ou, useDebugValue: li, useDeferredValue: function(e) {
    return Et().memoizedState = e;
  }, useTransition: function() {
    var e = Ou(false), t = e[0];
    return e = Pf.bind(null, e[1]), Et().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = me, l = Et();
    if (fe) {
      if (n === void 0) throw Error(p(407));
      n = n();
    } else {
      if (n = t(), Re === null) throw Error(p(349));
      (rn & 30) !== 0 || Tu(r, t, n);
    }
    l.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return l.queue = o, Fu(Mu.bind(null, r, o, e), [e]), r.flags |= 2048, mr(9, Lu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Et(), t = Re.identifierPrefix;
    if (fe) {
      var n = xt, r = Ct;
      n = (r & ~(1 << 32 - at(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = _f++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: false }, Mf = { readContext: nt, useCallback: Vu, useContext: nt, useEffect: ri, useImperativeHandle: Bu, useInsertionEffect: Uu, useLayoutEffect: ju, useMemo: Hu, useReducer: ti, useRef: Au, useState: function() {
    return ti(pr);
  }, useDebugValue: li, useDeferredValue: function(e) {
    var t = rt();
    return Wu(t, ze.memoizedState, e);
  }, useTransition: function() {
    var e = ti(pr)[0], t = rt().memoizedState;
    return [e, t];
  }, useMutableSource: Pu, useSyncExternalStore: Ru, useId: Qu, unstable_isNewReconciler: false }, If = { readContext: nt, useCallback: Vu, useContext: nt, useEffect: ri, useImperativeHandle: Bu, useInsertionEffect: Uu, useLayoutEffect: ju, useMemo: Hu, useReducer: ni, useRef: Au, useState: function() {
    return ni(pr);
  }, useDebugValue: li, useDeferredValue: function(e) {
    var t = rt();
    return ze === null ? t.memoizedState = e : Wu(t, ze.memoizedState, e);
  }, useTransition: function() {
    var e = ni(pr)[0], t = rt().memoizedState;
    return [e, t];
  }, useMutableSource: Pu, useSyncExternalStore: Ru, useId: Qu, unstable_isNewReconciler: false };
  function ct(e, t) {
    if (e && e.defaultProps) {
      t = R({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function oi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : R({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var vl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Zt(e) === e : false;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), l = Qt(e), o = _t(r, l);
    o.payload = t, n != null && (o.callback = n), t = Bt(e, o, l), t !== null && (pt(t, e, l, r), ul(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), l = Qt(e), o = _t(r, l);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Bt(e, o, l), t !== null && (pt(t, e, l, r), ul(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = $e(), r = Qt(e), l = _t(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Bt(e, l, r), t !== null && (pt(t, e, r, n), ul(t, e, r));
  } };
  function Xu(e, t, n, r, l, o, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, a) : t.prototype && t.prototype.isPureReactComponent ? !er(n, r) || !er(l, o) : true;
  }
  function Zu(e, t, n) {
    var r = false, l = Ut, o = t.contextType;
    return typeof o == "object" && o !== null ? o = nt(o) : (l = He(t) ? qt : Oe.current, r = t.contextTypes, o = (r = r != null) ? Sn(e, l) : Ut), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function Ju(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vl.enqueueReplaceState(t, t.state, null);
  }
  function ii(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Ko(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = nt(o) : (o = He(t) ? qt : Oe.current, l.context = Sn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (oi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && vl.enqueueReplaceState(l, l.state, null), sl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Tn(e, t) {
    try {
      var n = "", r = t;
      do
        n += X(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ai(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ui(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Df = typeof WeakMap == "function" ? WeakMap : Map;
  function qu(e, t, n) {
    n = _t(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Nl || (Nl = true, Ni = r), ui(e, t);
    }, n;
  }
  function bu(e, t, n) {
    n = _t(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        ui(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      ui(e, t), typeof r != "function" && (Ht === null ? Ht = /* @__PURE__ */ new Set([this]) : Ht.add(this));
      var a = t.stack;
      this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
    }), n;
  }
  function es(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Df();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Gf.bind(null, e, t, n), t.then(e, e));
  }
  function ts(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ns(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = _t(-1, 1), t.tag = 2, Bt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Of = Ce.ReactCurrentOwner, We = false;
  function je(e, t, n, r) {
    t.child = e === null ? Su(t, null, n, r) : zn(t, e.child, n, r);
  }
  function rs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Pn(t, l), r = bo(e, t, n, r, o, l), n = ei(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Pt(e, t, l)) : (fe && n && Ao(t), t.flags |= 1, je(e, t, r, l), t.child);
  }
  function ls(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Ti(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, os(e, t, o, r, l)) : (e = Rl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & l) === 0) {
      var a = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : er, n(a, r) && e.ref === t.ref) return Pt(e, t, l);
    }
    return t.flags |= 1, e = Yt(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function os(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (er(o, r) && e.ref === t.ref) if (We = false, t.pendingProps = r = o, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (We = true);
      else return t.lanes = e.lanes, Pt(e, t, l);
    }
    return si(e, t, n, r, l);
  }
  function is(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ie(Mn, be), be |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ie(Mn, be), be |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ie(Mn, be), be |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ie(Mn, be), be |= r;
    return je(e, t, l, n), t.child;
  }
  function as(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function si(e, t, n, r, l) {
    var o = He(n) ? qt : Oe.current;
    return o = Sn(t, o), Pn(t, l), n = bo(e, t, n, r, o, l), r = ei(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Pt(e, t, l)) : (fe && r && Ao(t), t.flags |= 1, je(e, t, n, l), t.child);
  }
  function us(e, t, n, r, l) {
    if (He(n)) {
      var o = true;
      el(t);
    } else o = false;
    if (Pn(t, l), t.stateNode === null) gl(e, t), Zu(t, n, r), ii(t, n, r, l), r = true;
    else if (e === null) {
      var a = t.stateNode, u = t.memoizedProps;
      a.props = u;
      var s = a.context, h = n.contextType;
      typeof h == "object" && h !== null ? h = nt(h) : (h = He(n) ? qt : Oe.current, h = Sn(t, h));
      var k = n.getDerivedStateFromProps, w = typeof k == "function" || typeof a.getSnapshotBeforeUpdate == "function";
      w || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u !== r || s !== h) && Ju(t, a, r, h), $t = false;
      var g = t.memoizedState;
      a.state = g, sl(t, r, a, l), s = t.memoizedState, u !== r || g !== s || Ve.current || $t ? (typeof k == "function" && (oi(t, n, k, r), s = t.memoizedState), (u = $t || Xu(t, n, u, r, g, s, h)) ? (w || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), a.props = r, a.state = s, a.context = h, r = u) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = false);
    } else {
      a = t.stateNode, Cu(e, t), u = t.memoizedProps, h = t.type === t.elementType ? u : ct(t.type, u), a.props = h, w = t.pendingProps, g = a.context, s = n.contextType, typeof s == "object" && s !== null ? s = nt(s) : (s = He(n) ? qt : Oe.current, s = Sn(t, s));
      var _ = n.getDerivedStateFromProps;
      (k = typeof _ == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u !== w || g !== s) && Ju(t, a, r, s), $t = false, g = t.memoizedState, a.state = g, sl(t, r, a, l);
      var T = t.memoizedState;
      u !== w || g !== T || Ve.current || $t ? (typeof _ == "function" && (oi(t, n, _, r), T = t.memoizedState), (h = $t || Xu(t, n, h, r, g, T, s) || false) ? (k || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, T, s), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, T, s)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = T), a.props = r, a.state = T, a.context = s, r = h) : (typeof a.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = false);
    }
    return ci(e, t, n, r, o, l);
  }
  function ci(e, t, n, r, l, o) {
    as(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return l && pu(t, n, false), Pt(e, t, o);
    r = t.stateNode, Of.current = t;
    var u = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && a ? (t.child = zn(t, e.child, null, o), t.child = zn(t, null, u, o)) : je(e, t, u, o), t.memoizedState = r.state, l && pu(t, n, true), t.child;
  }
  function ss(e) {
    var t = e.stateNode;
    t.pendingContext ? fu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && fu(e, t.context, false), Yo(e, t.containerInfo);
  }
  function cs(e, t, n, r, l) {
    return xn(), $o(l), t.flags |= 256, je(e, t, n, r), t.child;
  }
  var fi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function di(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function fs(e, t, n) {
    var r = t.pendingProps, l = pe.current, o = false, a = (t.flags & 128) !== 0, u;
    if ((u = a) || (u = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), u ? (o = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ie(pe, l & 1), e === null) return jo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (a = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, a = { mode: "hidden", children: a }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = Tl(a, r, 0, null), e = sn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = di(n), t.memoizedState = fi, e) : pi(t, a));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Af(e, t, a, r, u, l, n);
    if (o) {
      o = r.fallback, a = t.mode, l = e.child, u = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return (a & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Yt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Yt(u, o) : (o = sn(o, a, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, a = e.child.memoizedState, a = a === null ? di(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, o.memoizedState = a, o.childLanes = e.childLanes & ~n, t.memoizedState = fi, r;
    }
    return o = e.child, e = o.sibling, r = Yt(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function pi(e, t) {
    return t = Tl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function yl(e, t, n, r) {
    return r !== null && $o(r), zn(t, e.child, null, n), e = pi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Af(e, t, n, r, l, o, a) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = ai(Error(p(422))), yl(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Tl({ mode: "visible", children: r.children }, l, 0, null), o = sn(o, l, a, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && zn(t, e.child, null, a), t.child.memoizedState = di(a), t.memoizedState = fi, o);
    if ((t.mode & 1) === 0) return yl(e, t, a, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, o = Error(p(419)), r = ai(o, r, void 0), yl(e, t, a, r);
    }
    if (u = (a & e.childLanes) !== 0, We || u) {
      if (r = Re, r !== null) {
        switch (a & -a) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (r.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, zt(e, l), pt(r, e, l, -1));
      }
      return Ri(), r = ai(Error(p(421))), yl(e, t, a, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, qe = At(l.nextSibling), Je = t, fe = true, st = null, e !== null && (et[tt++] = Ct, et[tt++] = xt, et[tt++] = bt, Ct = e.id, xt = e.overflow, bt = t), t = pi(t, r.children), t.flags |= 4096, t);
  }
  function ds(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Wo(e.return, t, n);
  }
  function mi(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function ps(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (je(e, t, r.children, n), r = pe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ds(e, n, t);
        else if (e.tag === 19) ds(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (ie(pe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && cl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), mi(t, false, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && cl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        mi(t, true, n, null, o);
        break;
      case "together":
        mi(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function gl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Pt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(p(153));
    if (t.child !== null) {
      for (e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Yt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ff(e, t, n) {
    switch (t.tag) {
      case 3:
        ss(t), xn();
        break;
      case 5:
        _u(t);
        break;
      case 1:
        He(t.type) && el(t);
        break;
      case 4:
        Yo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        ie(il, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ie(pe, pe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? fs(e, t, n) : (ie(pe, pe.current & 1), e = Pt(e, t, n), e !== null ? e.sibling : null);
        ie(pe, pe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return ps(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ie(pe, pe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, is(e, t, n);
    }
    return Pt(e, t, n);
  }
  var ms, hi, hs, vs;
  ms = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, hi = function() {
  }, hs = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, nn(gt.current);
      var o = null;
      switch (n) {
        case "input":
          l = Hl(e, l), r = Hl(e, r), o = [];
          break;
        case "select":
          l = R({}, l, { value: void 0 }), r = R({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Kl(e, l), r = Kl(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Jr);
      }
      Gl(n, r);
      var a;
      n = null;
      for (h in l) if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null) if (h === "style") {
        var u = l[h];
        for (a in u) u.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
      } else h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (y.hasOwnProperty(h) ? o || (o = []) : (o = o || []).push(h, null));
      for (h in r) {
        var s = r[h];
        if (u = l != null ? l[h] : void 0, r.hasOwnProperty(h) && s !== u && (s != null || u != null)) if (h === "style") if (u) {
          for (a in u) !u.hasOwnProperty(a) || s && s.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
          for (a in s) s.hasOwnProperty(a) && u[a] !== s[a] && (n || (n = {}), n[a] = s[a]);
        } else n || (o || (o = []), o.push(h, n)), n = s;
        else h === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(h, s)) : h === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(h, "" + s) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (y.hasOwnProperty(h) ? (s != null && h === "onScroll" && ae("scroll", e), o || u === s || (o = [])) : (o = o || []).push(h, s));
      }
      n && (o = o || []).push("style", n);
      var h = o;
      (t.updateQueue = h) && (t.flags |= 4);
    }
  }, vs = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function hr(e, t) {
    if (!fe) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Uf(e, t, n) {
    var r = t.pendingProps;
    switch (Fo(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Fe(t), null;
      case 1:
        return He(t.type) && br(), Fe(t), null;
      case 3:
        return r = t.stateNode, Rn(), ue(Ve), ue(Oe), Zo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ll(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, st !== null && (zi(st), st = null))), hi(e, t), Fe(t), null;
      case 5:
        Go(t);
        var l = nn(cr.current);
        if (n = t.type, e !== null && t.stateNode != null) hs(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return Fe(t), null;
          }
          if (e = nn(gt.current), ll(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[yt] = t, r[or] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ae("cancel", r), ae("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < nr.length; l++) ae(nr[l], r);
                break;
              case "source":
                ae("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ae("error", r), ae("load", r);
                break;
              case "details":
                ae("toggle", r);
                break;
              case "input":
                Zi(r, o), ae("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, ae("invalid", r);
                break;
              case "textarea":
                bi(r, o), ae("invalid", r);
            }
            Gl(n, o), l = null;
            for (var a in o) if (o.hasOwnProperty(a)) {
              var u = o[a];
              a === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== true && Zr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== true && Zr(r.textContent, u, e), l = ["children", "" + u]) : y.hasOwnProperty(a) && u != null && a === "onScroll" && ae("scroll", r);
            }
            switch (n) {
              case "input":
                _r(r), qi(r, o, true);
                break;
              case "textarea":
                _r(r), ta(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Jr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            a = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = na(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = true : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[yt] = t, e[or] = r, ms(e, t, false, false), t.stateNode = e;
            e: {
              switch (a = Xl(n, r), n) {
                case "dialog":
                  ae("cancel", e), ae("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ae("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < nr.length; l++) ae(nr[l], e);
                  l = r;
                  break;
                case "source":
                  ae("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ae("error", e), ae("load", e), l = r;
                  break;
                case "details":
                  ae("toggle", e), l = r;
                  break;
                case "input":
                  Zi(e, r), l = Hl(e, r), ae("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = R({}, r, { value: void 0 }), ae("invalid", e);
                  break;
                case "textarea":
                  bi(e, r), l = Kl(e, r), ae("invalid", e);
                  break;
                default:
                  l = r;
              }
              Gl(n, l), u = l;
              for (o in u) if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? oa(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ra(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Fn(e, s) : typeof s == "number" && Fn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (y.hasOwnProperty(o) ? s != null && o === "onScroll" && ae("scroll", e) : s != null && Ie(e, o, s, a));
              }
              switch (n) {
                case "input":
                  _r(e), qi(e, r, false);
                  break;
                case "textarea":
                  _r(e), ta(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ne(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? cn(e, !!r.multiple, o, false) : r.defaultValue != null && cn(e, !!r.multiple, r.defaultValue, true);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Jr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = true;
                  break e;
                default:
                  r = false;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Fe(t), null;
      case 6:
        if (e && t.stateNode != null) vs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(p(166));
          if (n = nn(cr.current), nn(gt.current), ll(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[yt] = t, (o = r.nodeValue !== n) && (e = Je, e !== null)) switch (e.tag) {
              case 3:
                Zr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== true && Zr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yt] = t, t.stateNode = r;
        }
        return Fe(t), null;
      case 13:
        if (ue(pe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (fe && qe !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Eu(), xn(), t.flags |= 98560, o = false;
          else if (o = ll(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(p(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(p(317));
              o[yt] = t;
            } else xn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Fe(t), o = false;
          } else st !== null && (zi(st), st = null), o = true;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (pe.current & 1) !== 0 ? _e === 0 && (_e = 3) : Ri())), t.updateQueue !== null && (t.flags |= 4), Fe(t), null);
      case 4:
        return Rn(), hi(e, t), e === null && rr(t.stateNode.containerInfo), Fe(t), null;
      case 10:
        return Ho(t.type._context), Fe(t), null;
      case 17:
        return He(t.type) && br(), Fe(t), null;
      case 19:
        if (ue(pe), o = t.memoizedState, o === null) return Fe(t), null;
        if (r = (t.flags & 128) !== 0, a = o.rendering, a === null) if (r) hr(o, false);
        else {
          if (_e !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (a = cl(e), a !== null) {
              for (t.flags |= 128, hr(o, false), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, e = a.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ie(pe, pe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && Se() > In && (t.flags |= 128, r = true, hr(o, false), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = cl(a), e !== null) {
            if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), hr(o, true), o.tail === null && o.tailMode === "hidden" && !a.alternate && !fe) return Fe(t), null;
          } else 2 * Se() - o.renderingStartTime > In && n !== 1073741824 && (t.flags |= 128, r = true, hr(o, false), t.lanes = 4194304);
          o.isBackwards ? (a.sibling = t.child, t.child = a) : (n = o.last, n !== null ? n.sibling = a : t.child = a, o.last = a);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Se(), t.sibling = null, n = pe.current, ie(pe, r ? n & 1 | 2 : n & 1), t) : (Fe(t), null);
      case 22:
      case 23:
        return Pi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (be & 1073741824) !== 0 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function jf(e, t) {
    switch (Fo(t), t.tag) {
      case 1:
        return He(t.type) && br(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Rn(), ue(Ve), ue(Oe), Zo(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Go(t), null;
      case 13:
        if (ue(pe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(p(340));
          xn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ue(pe), null;
      case 4:
        return Rn(), null;
      case 10:
        return Ho(t.type._context), null;
      case 22:
      case 23:
        return Pi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var El = false, Ue = false, $f = typeof WeakSet == "function" ? WeakSet : Set, P = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ge(e, t, r);
    }
    else n.current = null;
  }
  function vi(e, t, n) {
    try {
      n();
    } catch (r) {
      ge(e, t, r);
    }
  }
  var ys = false;
  function Bf(e, t) {
    if (Po = jr, e = Xa(), ko(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0, u = -1, s = -1, h = 0, k = 0, w = e, g = null;
          t: for (; ; ) {
            for (var _; w !== n || l !== 0 && w.nodeType !== 3 || (u = a + l), w !== o || r !== 0 && w.nodeType !== 3 || (s = a + r), w.nodeType === 3 && (a += w.nodeValue.length), (_ = w.firstChild) !== null; ) g = w, w = _;
            for (; ; ) {
              if (w === e) break t;
              if (g === n && ++h === l && (u = a), g === o && ++k === r && (s = a), (_ = w.nextSibling) !== null) break;
              w = g, g = w.parentNode;
            }
            w = _;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ro = { focusedElem: e, selectionRange: n }, jr = false, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
    else for (; P !== null; ) {
      t = P;
      try {
        var T = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (T !== null) {
              var L = T.memoizedProps, Ne = T.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? L : ct(t.type, L), Ne);
              d.__reactInternalSnapshotBeforeUpdate = c;
            }
            break;
          case 3:
            var m = t.stateNode.containerInfo;
            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p(163));
        }
      } catch (N) {
        ge(t, t.return, N);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, P = e;
        break;
      }
      P = t.return;
    }
    return T = ys, ys = false, T;
  }
  function vr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && vi(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function kl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function yi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function gs(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, gs(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yt], delete t[or], delete t[Io], delete t[Nf], delete t[Cf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Es(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ks(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Es(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function gi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Jr));
    else if (r !== 4 && (e = e.child, e !== null)) for (gi(e, t, n), e = e.sibling; e !== null; ) gi(e, t, n), e = e.sibling;
  }
  function Ei(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Ei(e, t, n), e = e.sibling; e !== null; ) Ei(e, t, n), e = e.sibling;
  }
  var Le = null, ft = false;
  function Vt(e, t, n) {
    for (n = n.child; n !== null; ) ws(e, t, n), n = n.sibling;
  }
  function ws(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function") try {
      vt.onCommitFiberUnmount(Ir, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ue || Ln(n, t);
      case 6:
        var r = Le, l = ft;
        Le = null, Vt(e, t, n), Le = r, ft = l, Le !== null && (ft ? (e = Le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Le.removeChild(n.stateNode));
        break;
      case 18:
        Le !== null && (ft ? (e = Le, n = n.stateNode, e.nodeType === 8 ? Mo(e.parentNode, n) : e.nodeType === 1 && Mo(e, n), Gn(e)) : Mo(Le, n.stateNode));
        break;
      case 4:
        r = Le, l = ft, Le = n.stateNode.containerInfo, ft = true, Vt(e, t, n), Le = r, ft = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, a = o.destroy;
            o = o.tag, a !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && vi(n, t, a), l = l.next;
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!Ue && (Ln(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          ge(n, t, u);
        }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null, Vt(e, t, n), Ue = r) : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function Ss(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new $f()), t.forEach(function(r) {
        var l = Zf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function dt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, a = t, u = a;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              Le = u.stateNode, ft = false;
              break e;
            case 3:
              Le = u.stateNode.containerInfo, ft = true;
              break e;
            case 4:
              Le = u.stateNode.containerInfo, ft = true;
              break e;
          }
          u = u.return;
        }
        if (Le === null) throw Error(p(160));
        ws(o, a, l), Le = null, ft = false;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (h) {
        ge(l, t, h);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ns(t, e), t = t.sibling;
  }
  function Ns(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (dt(t, e), kt(e), r & 4) {
          try {
            vr(3, e, e.return), kl(3, e);
          } catch (L) {
            ge(e, e.return, L);
          }
          try {
            vr(5, e, e.return);
          } catch (L) {
            ge(e, e.return, L);
          }
        }
        break;
      case 1:
        dt(t, e), kt(e), r & 512 && n !== null && Ln(n, n.return);
        break;
      case 5:
        if (dt(t, e), kt(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Fn(l, "");
          } catch (L) {
            ge(e, e.return, L);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, a = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            u === "input" && o.type === "radio" && o.name != null && Ji(l, o), Xl(u, a);
            var h = Xl(u, o);
            for (a = 0; a < s.length; a += 2) {
              var k = s[a], w = s[a + 1];
              k === "style" ? oa(l, w) : k === "dangerouslySetInnerHTML" ? ra(l, w) : k === "children" ? Fn(l, w) : Ie(l, k, w, h);
            }
            switch (u) {
              case "input":
                Wl(l, o);
                break;
              case "textarea":
                ea(l, o);
                break;
              case "select":
                var g = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var _ = o.value;
                _ != null ? cn(l, !!o.multiple, _, false) : g !== !!o.multiple && (o.defaultValue != null ? cn(l, !!o.multiple, o.defaultValue, true) : cn(l, !!o.multiple, o.multiple ? [] : "", false));
            }
            l[or] = o;
          } catch (L) {
            ge(e, e.return, L);
          }
        }
        break;
      case 6:
        if (dt(t, e), kt(e), r & 4) {
          if (e.stateNode === null) throw Error(p(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (L) {
            ge(e, e.return, L);
          }
        }
        break;
      case 3:
        if (dt(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Gn(t.containerInfo);
        } catch (L) {
          ge(e, e.return, L);
        }
        break;
      case 4:
        dt(t, e), kt(e);
        break;
      case 13:
        dt(t, e), kt(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Si = Se())), r & 4 && Ss(e);
        break;
      case 22:
        if (k = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (h = Ue) || k, dt(t, e), Ue = h) : dt(t, e), kt(e), r & 8192) {
          if (h = e.memoizedState !== null, (e.stateNode.isHidden = h) && !k && (e.mode & 1) !== 0) for (P = e, k = e.child; k !== null; ) {
            for (w = P = k; P !== null; ) {
              switch (g = P, _ = g.child, g.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vr(4, g, g.return);
                  break;
                case 1:
                  Ln(g, g.return);
                  var T = g.stateNode;
                  if (typeof T.componentWillUnmount == "function") {
                    r = g, n = g.return;
                    try {
                      t = r, T.props = t.memoizedProps, T.state = t.memoizedState, T.componentWillUnmount();
                    } catch (L) {
                      ge(r, n, L);
                    }
                  }
                  break;
                case 5:
                  Ln(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    zs(w);
                    continue;
                  }
              }
              _ !== null ? (_.return = g, P = _) : zs(w);
            }
            k = k.sibling;
          }
          e: for (k = null, w = e; ; ) {
            if (w.tag === 5) {
              if (k === null) {
                k = w;
                try {
                  l = w.stateNode, h ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = w.stateNode, s = w.memoizedProps.style, a = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = la("display", a));
                } catch (L) {
                  ge(e, e.return, L);
                }
              }
            } else if (w.tag === 6) {
              if (k === null) try {
                w.stateNode.nodeValue = h ? "" : w.memoizedProps;
              } catch (L) {
                ge(e, e.return, L);
              }
            } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === e) && w.child !== null) {
              w.child.return = w, w = w.child;
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e;
              k === w && (k = null), w = w.return;
            }
            k === w && (k = null), w.sibling.return = w.return, w = w.sibling;
          }
        }
        break;
      case 19:
        dt(t, e), kt(e), r & 4 && Ss(e);
        break;
      case 21:
        break;
      default:
        dt(t, e), kt(e);
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Es(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(p(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Fn(l, ""), r.flags &= -33);
            var o = ks(e);
            Ei(e, o, l);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo, u = ks(e);
            gi(e, u, a);
            break;
          default:
            throw Error(p(161));
        }
      } catch (s) {
        ge(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vf(e, t, n) {
    P = e, Cs(e);
  }
  function Cs(e, t, n) {
    for (var r = (e.mode & 1) !== 0; P !== null; ) {
      var l = P, o = l.child;
      if (l.tag === 22 && r) {
        var a = l.memoizedState !== null || El;
        if (!a) {
          var u = l.alternate, s = u !== null && u.memoizedState !== null || Ue;
          u = El;
          var h = Ue;
          if (El = a, (Ue = s) && !h) for (P = l; P !== null; ) a = P, s = a.child, a.tag === 22 && a.memoizedState !== null ? _s(l) : s !== null ? (s.return = a, P = s) : _s(l);
          for (; o !== null; ) P = o, Cs(o), o = o.sibling;
          P = l, El = u, Ue = h;
        }
        xs(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l, P = o) : xs(e);
    }
  }
  function xs(e) {
    for (; P !== null; ) {
      var t = P;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || kl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ue) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : ct(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && zu(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                zu(t, a, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var h = t.alternate;
                if (h !== null) {
                  var k = h.memoizedState;
                  if (k !== null) {
                    var w = k.dehydrated;
                    w !== null && Gn(w);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
          Ue || t.flags & 512 && yi(t);
        } catch (g) {
          ge(t, t.return, g);
        }
      }
      if (t === e) {
        P = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, P = n;
        break;
      }
      P = t.return;
    }
  }
  function zs(e) {
    for (; P !== null; ) {
      var t = P;
      if (t === e) {
        P = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, P = n;
        break;
      }
      P = t.return;
    }
  }
  function _s(e) {
    for (; P !== null; ) {
      var t = P;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              kl(4, t);
            } catch (s) {
              ge(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ge(t, l, s);
              }
            }
            var o = t.return;
            try {
              yi(t);
            } catch (s) {
              ge(t, o, s);
            }
            break;
          case 5:
            var a = t.return;
            try {
              yi(t);
            } catch (s) {
              ge(t, a, s);
            }
        }
      } catch (s) {
        ge(t, t.return, s);
      }
      if (t === e) {
        P = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        u.return = t.return, P = u;
        break;
      }
      P = t.return;
    }
  }
  var Hf = Math.ceil, wl = Ce.ReactCurrentDispatcher, ki = Ce.ReactCurrentOwner, lt = Ce.ReactCurrentBatchConfig, G = 0, Re = null, xe = null, Me = 0, be = 0, Mn = Ft(0), _e = 0, yr = null, ln = 0, Sl = 0, wi = 0, gr = null, Qe = null, Si = 0, In = 1 / 0, Rt = null, Nl = false, Ni = null, Ht = null, Cl = false, Wt = null, xl = 0, Er = 0, Ci = null, zl = -1, _l = 0;
  function $e() {
    return (G & 6) !== 0 ? Se() : zl !== -1 ? zl : zl = Se();
  }
  function Qt(e) {
    return (e.mode & 1) === 0 ? 1 : (G & 2) !== 0 && Me !== 0 ? Me & -Me : zf.transition !== null ? (_l === 0 && (_l = ka()), _l) : (e = re, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ra(e.type)), e);
  }
  function pt(e, t, n, r) {
    if (50 < Er) throw Er = 0, Ci = null, Error(p(185));
    Hn(e, n, r), ((G & 2) === 0 || e !== Re) && (e === Re && ((G & 2) === 0 && (Sl |= n), _e === 4 && Kt(e, Me)), Ke(e, r), n === 1 && G === 0 && (t.mode & 1) === 0 && (In = Se() + 500, tl && jt()));
  }
  function Ke(e, t) {
    var n = e.callbackNode;
    xc(e, t);
    var r = Ar(e, e === Re ? Me : 0);
    if (r === 0) n !== null && ya(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ya(n), t === 1) e.tag === 0 ? xf(Rs.bind(null, e)) : mu(Rs.bind(null, e)), wf(function() {
        (G & 6) === 0 && jt();
      }), n = null;
      else {
        switch (wa(r)) {
          case 1:
            n = no;
            break;
          case 4:
            n = ga;
            break;
          case 16:
            n = Mr;
            break;
          case 536870912:
            n = Ea;
            break;
          default:
            n = Mr;
        }
        n = Fs(n, Ps.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ps(e, t) {
    if (zl = -1, _l = 0, (G & 6) !== 0) throw Error(p(327));
    var n = e.callbackNode;
    if (Dn() && e.callbackNode !== n) return null;
    var r = Ar(e, e === Re ? Me : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Pl(e, r);
    else {
      t = r;
      var l = G;
      G |= 2;
      var o = Ls();
      (Re !== e || Me !== t) && (Rt = null, In = Se() + 500, an(e, t));
      do
        try {
          Kf();
          break;
        } catch (u) {
          Ts(e, u);
        }
      while (true);
      Vo(), wl.current = o, G = l, xe !== null ? t = 0 : (Re = null, Me = 0, t = _e);
    }
    if (t !== 0) {
      if (t === 2 && (l = ro(e), l !== 0 && (r = l, t = xi(e, l))), t === 1) throw n = yr, an(e, 0), Kt(e, r), Ke(e, Se()), n;
      if (t === 6) Kt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Wf(l) && (t = Pl(e, r), t === 2 && (o = ro(e), o !== 0 && (r = o, t = xi(e, o))), t === 1)) throw n = yr, an(e, 0), Kt(e, r), Ke(e, Se()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            un(e, Qe, Rt);
            break;
          case 3:
            if (Kt(e, r), (r & 130023424) === r && (t = Si + 500 - Se(), 10 < t)) {
              if (Ar(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                $e(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Lo(un.bind(null, e, Qe, Rt), t);
              break;
            }
            un(e, Qe, Rt);
            break;
          case 4:
            if (Kt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var a = 31 - at(r);
              o = 1 << a, a = t[a], a > l && (l = a), r &= ~o;
            }
            if (r = l, r = Se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Hf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Lo(un.bind(null, e, Qe, Rt), r);
              break;
            }
            un(e, Qe, Rt);
            break;
          case 5:
            un(e, Qe, Rt);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return Ke(e, Se()), e.callbackNode === n ? Ps.bind(null, e) : null;
  }
  function xi(e, t) {
    var n = gr;
    return e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256), e = Pl(e, t), e !== 2 && (t = Qe, Qe = n, t !== null && zi(t)), e;
  }
  function zi(e) {
    Qe === null ? Qe = e : Qe.push.apply(Qe, e);
  }
  function Wf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!ut(o(), l)) return false;
          } catch {
            return false;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function Kt(e, t) {
    for (t &= ~wi, t &= ~Sl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - at(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Rs(e) {
    if ((G & 6) !== 0) throw Error(p(327));
    Dn();
    var t = Ar(e, 0);
    if ((t & 1) === 0) return Ke(e, Se()), null;
    var n = Pl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ro(e);
      r !== 0 && (t = r, n = xi(e, r));
    }
    if (n === 1) throw n = yr, an(e, 0), Kt(e, t), Ke(e, Se()), n;
    if (n === 6) throw Error(p(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, un(e, Qe, Rt), Ke(e, Se()), null;
  }
  function _i(e, t) {
    var n = G;
    G |= 1;
    try {
      return e(t);
    } finally {
      G = n, G === 0 && (In = Se() + 500, tl && jt());
    }
  }
  function on(e) {
    Wt !== null && Wt.tag === 0 && (G & 6) === 0 && Dn();
    var t = G;
    G |= 1;
    var n = lt.transition, r = re;
    try {
      if (lt.transition = null, re = 1, e) return e();
    } finally {
      re = r, lt.transition = n, G = t, (G & 6) === 0 && jt();
    }
  }
  function Pi() {
    be = Mn.current, ue(Mn);
  }
  function an(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, kf(n)), xe !== null) for (n = xe.return; n !== null; ) {
      var r = n;
      switch (Fo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && br();
          break;
        case 3:
          Rn(), ue(Ve), ue(Oe), Zo();
          break;
        case 5:
          Go(r);
          break;
        case 4:
          Rn();
          break;
        case 13:
          ue(pe);
          break;
        case 19:
          ue(pe);
          break;
        case 10:
          Ho(r.type._context);
          break;
        case 22:
        case 23:
          Pi();
      }
      n = n.return;
    }
    if (Re = e, xe = e = Yt(e.current, null), Me = be = t, _e = 0, yr = null, wi = Sl = ln = 0, Qe = gr = null, tn !== null) {
      for (t = 0; t < tn.length; t++) if (n = tn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var a = o.next;
          o.next = l, r.next = a;
        }
        n.pending = r;
      }
      tn = null;
    }
    return e;
  }
  function Ts(e, t) {
    do {
      var n = xe;
      try {
        if (Vo(), fl.current = hl, dl) {
          for (var r = me.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          dl = false;
        }
        if (rn = 0, Pe = ze = me = null, fr = false, dr = 0, ki.current = null, n === null || n.return === null) {
          _e = 1, yr = t, xe = null;
          break;
        }
        e: {
          var o = e, a = n.return, u = n, s = t;
          if (t = Me, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var h = s, k = u, w = k.tag;
            if ((k.mode & 1) === 0 && (w === 0 || w === 11 || w === 15)) {
              var g = k.alternate;
              g ? (k.updateQueue = g.updateQueue, k.memoizedState = g.memoizedState, k.lanes = g.lanes) : (k.updateQueue = null, k.memoizedState = null);
            }
            var _ = ts(a);
            if (_ !== null) {
              _.flags &= -257, ns(_, a, u, o, t), _.mode & 1 && es(o, h, t), t = _, s = h;
              var T = t.updateQueue;
              if (T === null) {
                var L = /* @__PURE__ */ new Set();
                L.add(s), t.updateQueue = L;
              } else T.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                es(o, h, t), Ri();
                break e;
              }
              s = Error(p(426));
            }
          } else if (fe && u.mode & 1) {
            var Ne = ts(a);
            if (Ne !== null) {
              (Ne.flags & 65536) === 0 && (Ne.flags |= 256), ns(Ne, a, u, o, t), $o(Tn(s, u));
              break e;
            }
          }
          o = s = Tn(s, u), _e !== 4 && (_e = 2), gr === null ? gr = [o] : gr.push(o), o = a;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var d = qu(o, s, t);
                xu(o, d);
                break e;
              case 1:
                u = s;
                var c = o.type, m = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Ht === null || !Ht.has(m)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var N = bu(o, u, t);
                  xu(o, N);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Is(n);
      } catch (M) {
        t = M, xe === n && n !== null && (xe = n = n.return);
        continue;
      }
      break;
    } while (true);
  }
  function Ls() {
    var e = wl.current;
    return wl.current = hl, e === null ? hl : e;
  }
  function Ri() {
    (_e === 0 || _e === 3 || _e === 2) && (_e = 4), Re === null || (ln & 268435455) === 0 && (Sl & 268435455) === 0 || Kt(Re, Me);
  }
  function Pl(e, t) {
    var n = G;
    G |= 2;
    var r = Ls();
    (Re !== e || Me !== t) && (Rt = null, an(e, t));
    do
      try {
        Qf();
        break;
      } catch (l) {
        Ts(e, l);
      }
    while (true);
    if (Vo(), G = n, wl.current = r, xe !== null) throw Error(p(261));
    return Re = null, Me = 0, _e;
  }
  function Qf() {
    for (; xe !== null; ) Ms(xe);
  }
  function Kf() {
    for (; xe !== null && !vc(); ) Ms(xe);
  }
  function Ms(e) {
    var t = As(e.alternate, e, be);
    e.memoizedProps = e.pendingProps, t === null ? Is(e) : xe = t, ki.current = null;
  }
  function Is(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Uf(n, t, be), n !== null) {
          xe = n;
          return;
        }
      } else {
        if (n = jf(n, t), n !== null) {
          n.flags &= 32767, xe = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          _e = 6, xe = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        xe = t;
        return;
      }
      xe = t = e;
    } while (t !== null);
    _e === 0 && (_e = 5);
  }
  function un(e, t, n) {
    var r = re, l = lt.transition;
    try {
      lt.transition = null, re = 1, Yf(e, t, n, r);
    } finally {
      lt.transition = l, re = r;
    }
    return null;
  }
  function Yf(e, t, n, r) {
    do
      Dn();
    while (Wt !== null);
    if ((G & 6) !== 0) throw Error(p(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(p(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (zc(e, o), e === Re && (xe = Re = null, Me = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Cl || (Cl = true, Fs(Mr, function() {
      return Dn(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = lt.transition, lt.transition = null;
      var a = re;
      re = 1;
      var u = G;
      G |= 4, ki.current = null, Bf(e, n), Ns(n, e), pf(Ro), jr = !!Po, Ro = Po = null, e.current = n, Vf(n), yc(), G = u, re = a, lt.transition = o;
    } else e.current = n;
    if (Cl && (Cl = false, Wt = e, xl = l), o = e.pendingLanes, o === 0 && (Ht = null), kc(n.stateNode), Ke(e, Se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Nl) throw Nl = false, e = Ni, Ni = null, e;
    return (xl & 1) !== 0 && e.tag !== 0 && Dn(), o = e.pendingLanes, (o & 1) !== 0 ? e === Ci ? Er++ : (Er = 0, Ci = e) : Er = 0, jt(), null;
  }
  function Dn() {
    if (Wt !== null) {
      var e = wa(xl), t = lt.transition, n = re;
      try {
        if (lt.transition = null, re = 16 > e ? 16 : e, Wt === null) var r = false;
        else {
          if (e = Wt, Wt = null, xl = 0, (G & 6) !== 0) throw Error(p(331));
          var l = G;
          for (G |= 4, P = e.current; P !== null; ) {
            var o = P, a = o.child;
            if ((P.flags & 16) !== 0) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var h = u[s];
                  for (P = h; P !== null; ) {
                    var k = P;
                    switch (k.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vr(8, k, o);
                    }
                    var w = k.child;
                    if (w !== null) w.return = k, P = w;
                    else for (; P !== null; ) {
                      k = P;
                      var g = k.sibling, _ = k.return;
                      if (gs(k), k === h) {
                        P = null;
                        break;
                      }
                      if (g !== null) {
                        g.return = _, P = g;
                        break;
                      }
                      P = _;
                    }
                  }
                }
                var T = o.alternate;
                if (T !== null) {
                  var L = T.child;
                  if (L !== null) {
                    T.child = null;
                    do {
                      var Ne = L.sibling;
                      L.sibling = null, L = Ne;
                    } while (L !== null);
                  }
                }
                P = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && a !== null) a.return = o, P = a;
            else e: for (; P !== null; ) {
              if (o = P, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  vr(9, o, o.return);
              }
              var d = o.sibling;
              if (d !== null) {
                d.return = o.return, P = d;
                break e;
              }
              P = o.return;
            }
          }
          var c = e.current;
          for (P = c; P !== null; ) {
            a = P;
            var m = a.child;
            if ((a.subtreeFlags & 2064) !== 0 && m !== null) m.return = a, P = m;
            else e: for (a = c; P !== null; ) {
              if (u = P, (u.flags & 2048) !== 0) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kl(9, u);
                }
              } catch (M) {
                ge(u, u.return, M);
              }
              if (u === a) {
                P = null;
                break e;
              }
              var N = u.sibling;
              if (N !== null) {
                N.return = u.return, P = N;
                break e;
              }
              P = u.return;
            }
          }
          if (G = l, jt(), vt && typeof vt.onPostCommitFiberRoot == "function") try {
            vt.onPostCommitFiberRoot(Ir, e);
          } catch {
          }
          r = true;
        }
        return r;
      } finally {
        re = n, lt.transition = t;
      }
    }
    return false;
  }
  function Ds(e, t, n) {
    t = Tn(n, t), t = qu(e, t, 1), e = Bt(e, t, 1), t = $e(), e !== null && (Hn(e, 1, t), Ke(e, t));
  }
  function ge(e, t, n) {
    if (e.tag === 3) Ds(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ds(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ht === null || !Ht.has(r))) {
          e = Tn(n, e), e = bu(t, e, 1), t = Bt(t, e, 1), e = $e(), t !== null && (Hn(t, 1, e), Ke(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Gf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, Re === e && (Me & n) === n && (_e === 4 || _e === 3 && (Me & 130023424) === Me && 500 > Se() - Si ? an(e, 0) : wi |= n), Ke(e, t);
  }
  function Os(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Or, Or <<= 1, (Or & 130023424) === 0 && (Or = 4194304)));
    var n = $e();
    e = zt(e, t), e !== null && (Hn(e, t, n), Ke(e, n));
  }
  function Xf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Os(e, n);
  }
  function Zf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    r !== null && r.delete(t), Os(e, n);
  }
  var As;
  As = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ve.current) We = true;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return We = false, Ff(e, t, n);
      We = (e.flags & 131072) !== 0;
    }
    else We = false, fe && (t.flags & 1048576) !== 0 && hu(t, rl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        gl(e, t), e = t.pendingProps;
        var l = Sn(t, Oe.current);
        Pn(t, n), l = bo(null, t, r, e, l, n);
        var o = ei();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, He(r) ? (o = true, el(t)) : o = false, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ko(t), l.updater = vl, t.stateNode = l, l._reactInternals = t, ii(t, r, e, n), t = ci(null, t, r, true, o, n)) : (t.tag = 0, fe && o && Ao(t), je(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (gl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = qf(r), e = ct(r, e), l) {
            case 0:
              t = si(null, t, r, e, n);
              break e;
            case 1:
              t = us(null, t, r, e, n);
              break e;
            case 11:
              t = rs(null, t, r, e, n);
              break e;
            case 14:
              t = ls(null, t, r, ct(r.type, e), n);
              break e;
          }
          throw Error(p(306, r, ""));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ct(r, l), si(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ct(r, l), us(e, t, r, l, n);
      case 3:
        e: {
          if (ss(t), e === null) throw Error(p(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, Cu(e, t), sl(t, r, null, n);
          var a = t.memoizedState;
          if (r = a.element, o.isDehydrated) if (o = { element: r, isDehydrated: false, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Tn(Error(p(423)), t), t = cs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Tn(Error(p(424)), t), t = cs(e, t, r, n, l);
            break e;
          } else for (qe = At(t.stateNode.containerInfo.firstChild), Je = t, fe = true, st = null, n = Su(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (xn(), r === l) {
              t = Pt(e, t, n);
              break e;
            }
            je(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return _u(t), e === null && jo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = l.children, To(r, l) ? a = null : o !== null && To(r, o) && (t.flags |= 32), as(e, t), je(e, t, a, n), t.child;
      case 6:
        return e === null && jo(t), null;
      case 13:
        return fs(e, t, n);
      case 4:
        return Yo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zn(t, null, r, n) : je(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ct(r, l), rs(e, t, r, l, n);
      case 7:
        return je(e, t, t.pendingProps, n), t.child;
      case 8:
        return je(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return je(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, a = l.value, ie(il, r._currentValue), r._currentValue = a, o !== null) if (ut(o.value, a)) {
            if (o.children === l.children && !Ve.current) {
              t = Pt(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var u = o.dependencies;
            if (u !== null) {
              a = o.child;
              for (var s = u.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (o.tag === 1) {
                    s = _t(-1, n & -n), s.tag = 2;
                    var h = o.updateQueue;
                    if (h !== null) {
                      h = h.shared;
                      var k = h.pending;
                      k === null ? s.next = s : (s.next = k.next, k.next = s), h.pending = s;
                    }
                  }
                  o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Wo(o.return, n, t), u.lanes |= n;
                  break;
                }
                s = s.next;
              }
            } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (a = o.return, a === null) throw Error(p(341));
              a.lanes |= n, u = a.alternate, u !== null && (u.lanes |= n), Wo(a, n, t), a = o.sibling;
            } else a = o.child;
            if (a !== null) a.return = o;
            else for (a = o; a !== null; ) {
              if (a === t) {
                a = null;
                break;
              }
              if (o = a.sibling, o !== null) {
                o.return = a.return, a = o;
                break;
              }
              a = a.return;
            }
            o = a;
          }
          je(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Pn(t, n), l = nt(l), r = r(l), t.flags |= 1, je(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = ct(r, t.pendingProps), l = ct(r.type, l), ls(e, t, r, l, n);
      case 15:
        return os(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ct(r, l), gl(e, t), t.tag = 1, He(r) ? (e = true, el(t)) : e = false, Pn(t, n), Zu(t, r, l), ii(t, r, l, n), ci(null, t, r, true, e, n);
      case 19:
        return ps(e, t, n);
      case 22:
        return is(e, t, n);
    }
    throw Error(p(156, t.tag));
  };
  function Fs(e, t) {
    return va(e, t);
  }
  function Jf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ot(e, t, n, r) {
    return new Jf(e, t, n, r);
  }
  function Ti(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function qf(e) {
    if (typeof e == "function") return Ti(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === mt) return 11;
      if (e === ht) return 14;
    }
    return 2;
  }
  function Yt(e, t) {
    var n = e.alternate;
    return n === null ? (n = ot(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Rl(e, t, n, r, l, o) {
    var a = 2;
    if (r = e, typeof e == "function") Ti(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else e: switch (e) {
      case we:
        return sn(n.children, l, o, t);
      case $:
        a = 8, l |= 8;
        break;
      case te:
        return e = ot(12, n, t, l | 2), e.elementType = te, e.lanes = o, e;
      case Ge:
        return e = ot(13, n, t, l), e.elementType = Ge, e.lanes = o, e;
      case it:
        return e = ot(19, n, t, l), e.elementType = it, e.lanes = o, e;
      case ye:
        return Tl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case De:
            a = 10;
            break e;
          case wt:
            a = 9;
            break e;
          case mt:
            a = 11;
            break e;
          case ht:
            a = 14;
            break e;
          case Be:
            a = 16, r = null;
            break e;
        }
        throw Error(p(130, e == null ? e : typeof e, ""));
    }
    return t = ot(a, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function sn(e, t, n, r) {
    return e = ot(7, e, r, t), e.lanes = n, e;
  }
  function Tl(e, t, n, r) {
    return e = ot(22, e, r, t), e.elementType = ye, e.lanes = n, e.stateNode = { isHidden: false }, e;
  }
  function Li(e, t, n) {
    return e = ot(6, e, null, t), e.lanes = n, e;
  }
  function Mi(e, t, n) {
    return t = ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function bf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lo(0), this.expirationTimes = lo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Ii(e, t, n, r, l, o, a, u, s) {
    return e = new bf(e, t, n, u, s), t === 1 ? (t = 1, o === true && (t |= 8)) : t = 0, o = ot(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ko(o), e;
  }
  function ed(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ke, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Us(e) {
    if (!e) return Ut;
    e = e._reactInternals;
    e: {
      if (Zt(e) !== e || e.tag !== 1) throw Error(p(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (He(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(p(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (He(n)) return du(e, n, t);
    }
    return t;
  }
  function js(e, t, n, r, l, o, a, u, s) {
    return e = Ii(n, r, true, e, l, o, a, u, s), e.context = Us(null), n = e.current, r = $e(), l = Qt(n), o = _t(r, l), o.callback = t ?? null, Bt(n, o, l), e.current.lanes = l, Hn(e, l, r), Ke(e, r), e;
  }
  function Ll(e, t, n, r) {
    var l = t.current, o = $e(), a = Qt(l);
    return n = Us(n), t.context === null ? t.context = n : t.pendingContext = n, t = _t(o, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Bt(l, t, a), e !== null && (pt(e, l, a, o), ul(e, l, a)), a;
  }
  function Ml(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function $s(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Di(e, t) {
    $s(e, t), (e = e.alternate) && $s(e, t);
  }
  function td() {
    return null;
  }
  var Bs = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Oi(e) {
    this._internalRoot = e;
  }
  Il.prototype.render = Oi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(p(409));
    Ll(e, t, null, null);
  }, Il.prototype.unmount = Oi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      on(function() {
        Ll(null, e, null, null);
      }), t[St] = null;
    }
  };
  function Il(e) {
    this._internalRoot = e;
  }
  Il.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ca();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++) ;
      It.splice(n, 0, e), n === 0 && _a(e);
    }
  };
  function Ai(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Dl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Vs() {
  }
  function nd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var h = Ml(a);
          o.call(h);
        };
      }
      var a = js(t, r, e, 0, null, false, false, "", Vs);
      return e._reactRootContainer = a, e[St] = a.current, rr(e.nodeType === 8 ? e.parentNode : e), on(), a;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var h = Ml(s);
        u.call(h);
      };
    }
    var s = Ii(e, 0, false, null, null, false, false, "", Vs);
    return e._reactRootContainer = s, e[St] = s.current, rr(e.nodeType === 8 ? e.parentNode : e), on(function() {
      Ll(t, s, n, r);
    }), s;
  }
  function Ol(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var a = o;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var s = Ml(a);
          u.call(s);
        };
      }
      Ll(t, a, e, l);
    } else a = nd(n, t, e, l, r);
    return Ml(a);
  }
  Sa = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (oo(t, n | 1), Ke(t, Se()), (G & 6) === 0 && (In = Se() + 500, jt()));
        }
        break;
      case 13:
        on(function() {
          var r = zt(e, 1);
          if (r !== null) {
            var l = $e();
            pt(r, e, 1, l);
          }
        }), Di(e, 1);
    }
  }, io = function(e) {
    if (e.tag === 13) {
      var t = zt(e, 134217728);
      if (t !== null) {
        var n = $e();
        pt(t, e, 134217728, n);
      }
      Di(e, 134217728);
    }
  }, Na = function(e) {
    if (e.tag === 13) {
      var t = Qt(e), n = zt(e, t);
      if (n !== null) {
        var r = $e();
        pt(n, e, t, r);
      }
      Di(e, t);
    }
  }, Ca = function() {
    return re;
  }, xa = function(e, t) {
    var n = re;
    try {
      return re = e, t();
    } finally {
      re = n;
    }
  }, ql = function(e, t, n) {
    switch (t) {
      case "input":
        if (Wl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = qr(r);
              if (!l) throw Error(p(90));
              Xi(r), Wl(r, l);
            }
          }
        }
        break;
      case "textarea":
        ea(e, n);
        break;
      case "select":
        t = n.value, t != null && cn(e, !!n.multiple, t, false);
    }
  }, sa = _i, ca = on;
  var rd = { usingClientEntryPoint: false, Events: [ir, kn, qr, aa, ua, _i] }, kr = { findFiberByHostInstance: Jt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ld = { bundleType: kr.bundleType, version: kr.version, rendererPackageName: kr.rendererPackageName, rendererConfig: kr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ce.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ma(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: kr.findFiberByHostInstance || td, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Al.isDisabled && Al.supportsFiber) try {
      Ir = Al.inject(ld), vt = Al;
    } catch {
    }
  }
  return Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rd, Ye.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ai(t)) throw Error(p(200));
    return ed(e, t, null, n);
  }, Ye.createRoot = function(e, t) {
    if (!Ai(e)) throw Error(p(299));
    var n = false, r = "", l = Bs;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ii(e, 1, false, null, null, n, false, r, l), e[St] = t.current, rr(e.nodeType === 8 ? e.parentNode : e), new Oi(t);
  }, Ye.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(p(188)) : (e = Object.keys(e).join(","), Error(p(268, e)));
    return e = ma(t), e = e === null ? null : e.stateNode, e;
  }, Ye.flushSync = function(e) {
    return on(e);
  }, Ye.hydrate = function(e, t, n) {
    if (!Dl(t)) throw Error(p(200));
    return Ol(null, e, t, true, n);
  }, Ye.hydrateRoot = function(e, t, n) {
    if (!Ai(e)) throw Error(p(405));
    var r = n != null && n.hydratedSources || null, l = false, o = "", a = Bs;
    if (n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = js(t, null, e, 1, n ?? null, l, false, o, a), e[St] = t.current, rr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Il(t);
  }, Ye.render = function(e, t, n) {
    if (!Dl(t)) throw Error(p(200));
    return Ol(null, e, t, false, n);
  }, Ye.unmountComponentAtNode = function(e) {
    if (!Dl(e)) throw Error(p(40));
    return e._reactRootContainer ? (on(function() {
      Ol(null, null, e, false, function() {
        e._reactRootContainer = null, e[St] = null;
      });
    }), true) : false;
  }, Ye.unstable_batchedUpdates = _i, Ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Dl(n)) throw Error(p(200));
    if (e == null || e._reactInternals === void 0) throw Error(p(38));
    return Ol(e, t, n, false, r);
  }, Ye.version = "18.3.1-next-f1338f8080-20240426", Ye;
}
var Gs;
function fd() {
  if (Gs) return Ui.exports;
  Gs = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
    } catch (S) {
      console.error(S);
    }
  }
  return v(), Ui.exports = cd(), Ui.exports;
}
var Xs;
function dd() {
  if (Xs) return Fl;
  Xs = 1;
  var v = fd();
  return Fl.createRoot = v.createRoot, Fl.hydrateRoot = v.hydrateRoot, Fl;
}
var pd = dd();
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const md = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ec = (...v) => v.filter((S, p, I) => !!S && S.trim() !== "" && I.indexOf(S) === p).join(" ").trim();
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hd = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vd = Q.forwardRef(({ color: v = "currentColor", size: S = 24, strokeWidth: p = 2, absoluteStrokeWidth: I, className: y = "", children: F, iconNode: K, ...q }, B) => Q.createElement("svg", { ref: B, ...hd, width: S, height: S, stroke: v, strokeWidth: I ? Number(p) * 24 / Number(S) : p, className: ec("lucide", y), ...q }, [...K.map(([b, ee]) => Q.createElement(b, ee)), ...Array.isArray(F) ? F : [F]]));
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const se = (v, S) => {
  const p = Q.forwardRef(({ className: I, ...y }, F) => Q.createElement(vd, { ref: F, iconNode: S, className: ec(`lucide-${md(v)}`, I), ...y }));
  return p.displayName = `${v}`, p;
};
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sr = se("Activity", [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wr = se("ArrowLeft", [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Xt = se("ArrowRight", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const tc = se("ArrowUpRight", [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yd = se("Bell", [["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }], ["path", { d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326", key: "11g9vi" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Qi = se("Building2", [["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }], ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }], ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }], ["path", { d: "M10 6h4", key: "1itunk" }], ["path", { d: "M10 10h4", key: "tcdvrf" }], ["path", { d: "M10 14h4", key: "kelpxr" }], ["path", { d: "M10 18h4", key: "1ulq68" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const jl = se("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gd = se("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bl = se("CircleAlert", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const On = se("CircleCheck", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Zs = se("Clock3", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ki = se("FileText", [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ed = se("Filter", [["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const kd = se("Gauge", [["path", { d: "m12 14 4-4", key: "9kzdfg" }], ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const nc = se("ImagePlus", [["path", { d: "M16 5h6", key: "1vod17" }], ["path", { d: "M19 2v6", key: "4bpg5p" }], ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", key: "1ue2ih" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wd = se("LocateFixed", [["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }], ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }], ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Nr = se("MapPin", [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Sd = se("Menu", [["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }], ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }], ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $l = se("Plus", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Nd = se("Search", [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Cr = se("ShieldCheck", [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Cd = se("Siren", [["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6", key: "pcx96s" }], ["path", { d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z", key: "1b4s83" }], ["path", { d: "M21 12h1", key: "jtio3y" }], ["path", { d: "M18.5 4.5 18 5", key: "g5sp9y" }], ["path", { d: "M2 12h1", key: "1uaihz" }], ["path", { d: "M12 2v1", key: "11qlp1" }], ["path", { d: "m4.929 4.929.707.707", key: "1i51kw" }], ["path", { d: "M12 12v6", key: "3ahymv" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vi = se("Sparkles", [["path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z", key: "4pj2yx" }], ["path", { d: "M20 3v4", key: "1olli1" }], ["path", { d: "M22 5h-4", key: "1gvqau" }], ["path", { d: "M4 17v2", key: "vumght" }], ["path", { d: "M5 18H3", key: "zchphs" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bi = se("Users", [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const rc = se("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]), Js = (import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "http://localhost:5000/api" : "")).replace(/\/$/, ""), lc = ["Road", "Drainage", "Streetlight", "Water Supply", "Bridge", "Public Building"], xd = ["Pending", "Verified", "Assigned", "In Progress", "Completed", "Closed"], oc = { Road: "Road/ULB", Drainage: "Drainage Department", Streetlight: "Electrical Department", "Water Supply": "Water Supply Department", Bridge: "Engineering Department", "Public Building": "Building/Engineering Department" };
async function xr(v, S = {}) {
  if (!Js) {
    throw new Error("The backend API URL is not configured. Set VITE_API_URL to your deployed backend URL and rebuild the frontend.");
  }
  let p;
  try {
    p = await fetch(`${Js}${v}`, { ...S, headers: { "Content-Type": "application/json", ...S.headers } });
  } catch {
    throw new Error(`Cannot reach the Jharkhand-CivicGuard API at ${Js}. Start the backend and check VITE_API_URL.`);
  }
  let I;
  try {
    I = await p.json();
  } catch {
    throw new Error(`The API returned an invalid response (${p.status}).`);
  }
  if (!p.ok || I.success === false) throw new Error(I.message || `Request failed (${p.status}).`);
  return I;
}
function Vl(v) {
  return v >= 75 ? "Critical" : v >= 50 ? "High" : v >= 25 ? "Medium" : "Low";
}
function Hi(v) {
  if (!v) return "Recently";
  const S = new Date(v);
  return Number.isNaN(S.getTime()) ? "Recently" : new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(S);
}
function ic(v = "") {
  return v.trim().split(/\s+/).slice(0, 2).map((S) => {
    var p;
    return (p = S[0]) == null ? void 0 : p.toUpperCase();
  }).join("") || "CG";
}
function zr({ status: v = "Pending" }) {
  return i.createElement("span", { className: `status-pill status-${v.toLowerCase().replace(/\s+/g, "-")}` }, i.createElement("span", null), v);
}
function ac({ score: v = 0, label: S }) {
  const p = S || Vl(Number(v) || 0);
  return i.createElement("span", { className: `risk-pill risk-${p.toLowerCase()}` }, i.createElement("span", { className: "risk-dot" }), p);
}
function Yi({ value: v = 0 }) {
  const S = Number(v) || 0;
  return i.createElement("span", { className: `score score-${Vl(S).toLowerCase()}` }, i.createElement("span", null, S), i.createElement("small", null, "/100"));
}
function zd({ onReport: v, search: S, setSearch: p, onMenu: I }) {
  return i.createElement("header", { className: "topbar" }, i.createElement("button", { className: "mobile-menu icon-button", "aria-label": "Open navigation", onClick: I }, i.createElement(Sd, { size: 20 })), i.createElement("div", { className: "topbar-breadcrumb" }, i.createElement("span", null, "Jharkhand"), i.createElement("span", { className: "crumb-divider" }, "/"), i.createElement("strong", null, "Public infrastructure")), i.createElement("div", { className: "topbar-actions" }, i.createElement("label", { className: "global-search" }, i.createElement(Nd, { size: 17 }), i.createElement("input", { value: S, onChange: (y) => p(y.target.value), placeholder: "Search complaints..." }), i.createElement("kbd", null, "\u2318 K")), i.createElement("button", { className: "icon-button notification-button", "aria-label": "Notifications" }, i.createElement(yd, { size: 19 }), i.createElement("span", null)), i.createElement("button", { className: "header-report", onClick: v }, i.createElement($l, { size: 17 }), " Report an issue")));
}
function _d({ page: v, setPage: S, open: p, onClose: I, apiStatus: y }) {
  return i.createElement(i.Fragment, null, p && i.createElement("button", { className: "nav-overlay", onClick: I, "aria-label": "Close navigation" }), i.createElement("aside", { className: `sidebar ${p ? "sidebar-open" : ""}` }, i.createElement("div", { className: "brand" }, i.createElement("div", { className: "brand-mark" }, i.createElement(Cr, { size: 23, strokeWidth: 2.3 })), i.createElement("div", null, i.createElement("strong", null, "Jharkhand-CivicGuard"), i.createElement("span", null, "JHARKHAND \xB7 INDIA")), i.createElement("button", { className: "sidebar-close icon-button", onClick: I, "aria-label": "Close navigation" }, i.createElement(rc, { size: 19 }))), i.createElement("div", { className: "workspace-select" }, i.createElement("div", { className: "workspace-icon" }, i.createElement(Qi, { size: 16 })), i.createElement("div", null, i.createElement("span", null, "Workspace"), i.createElement("strong", null, "State overview")), i.createElement(gd, { size: 15 })), i.createElement("div", { className: "nav-caption" }, "WORKSPACE"), i.createElement("nav", { className: "main-nav" }, i.createElement("button", { className: v === "dashboard" ? "active" : "", onClick: () => {
    S("dashboard"), I();
  } }, i.createElement(kd, { size: 18 }), i.createElement("span", null, "Overview"), i.createElement("span", { className: "nav-shortcut" }, "01")), i.createElement("button", { className: v === "complaints" || v === "detail" ? "active" : "", onClick: () => {
    S("complaints"), I();
  } }, i.createElement(Ki, { size: 18 }), i.createElement("span", null, "Complaints"), i.createElement("span", { className: "nav-shortcut" }, "02")), i.createElement("button", { className: v === "report" ? "active" : "", onClick: () => {
    S("report"), I();
  } }, i.createElement($l, { size: 18 }), i.createElement("span", null, "Report an issue"))), i.createElement("div", { className: "nav-caption system-caption" }, "SYSTEM"), i.createElement("div", { className: "sidebar-system" }, i.createElement("span", { className: `live-indicator api-${y}` }), i.createElement("div", null, i.createElement("strong", null, y === "connected" ? "API connected" : y === "unavailable" ? "API unavailable" : "Connecting..."), i.createElement("span", null, "Jharkhand region")), i.createElement(Sr, { size: 15 })), i.createElement("div", { className: "sidebar-bottom" }, i.createElement("div", { className: "help-card" }, i.createElement("div", { className: "help-icon" }, i.createElement(Cr, { size: 17 })), i.createElement("strong", null, "Better streets start here."), i.createElement("p", null, "Every report helps build a safer, more connected Jharkhand."), i.createElement("button", { onClick: () => S("report") }, "Submit a report ", i.createElement(Xt, { size: 14 }))), i.createElement("div", { className: "profile-row" }, i.createElement("div", { className: "avatar" }, "AD"), i.createElement("div", null, i.createElement("strong", null, "Admin desk"), i.createElement("span", null, "Government portal")), i.createElement(uc, null)))));
}
function uc() {
  return i.createElement("span", { className: "more-dots" }, "\xB7\xB7\xB7");
}
function Ul({ label: v, value: S, meta: p, icon: I, accent: y = "green", change: F }) {
  return i.createElement("article", { className: "metric-card" }, i.createElement("div", { className: "metric-top" }, i.createElement("span", null, v), i.createElement("span", { className: `metric-icon metric-${y}` }, i.createElement(I, { size: 17 }))), i.createElement("div", { className: "metric-value-row" }, i.createElement("strong", null, S), F && i.createElement("span", { className: `metric-change ${F.startsWith("-") ? "change-down" : ""}` }, i.createElement(tc, { size: 13 }), F)), i.createElement("div", { className: "metric-meta" }, p));
}
function Gi({ title: v, message: S, action: p }) {
  return i.createElement("div", { className: "empty-state" }, i.createElement("div", { className: "empty-icon" }, i.createElement(Ki, { size: 22 })), i.createElement("h3", null, v), i.createElement("p", null, S), p);
}
function Pd({ complaints: v, loading: S, error: p, onOpen: I, onReport: y, onRetry: F, query: K, apiStatus: q }) {
  const B = Q.useMemo(() => ({ total: v.length, high: v.filter((C) => Number(C.riskScore) >= 50).length, pending: v.filter((C) => C.status === "Pending").length, progress: v.filter((C) => C.status === "In Progress" || C.status === "Assigned").length }), [v]), b = Q.useMemo(() => v.slice().sort((C, de) => (de.riskScore || 0) - (C.riskScore || 0)).slice(0, 5), [v]), ee = Q.useMemo(() => v.slice().sort((C, de) => new Date(de.createdAt || 0) - new Date(C.createdAt || 0)).slice(0, 5), [v]), z = Q.useMemo(() => b.filter((C) => `${C.name} ${C.description} ${C.location} ${C.type}`.toLowerCase().includes(K.toLowerCase())), [b, K]);
  return i.createElement("div", { className: "page-content" }, i.createElement("div", { className: "welcome-row" }, i.createElement("div", null, i.createElement("div", { className: "eyebrow" }, i.createElement("span", { className: "eyebrow-line" }), " CIVIC INFRASTRUCTURE \xB7 JHARKHAND"), i.createElement("h1", null, "Hello, Admin ", i.createElement("span", { className: "wave" }, "\u2733")), i.createElement("p", null, "Here\u2019s what\u2019s happening across your region today.")), i.createElement("button", { className: "button-primary", onClick: y }, i.createElement($l, { size: 17 }), " New complaint")), i.createElement("div", { className: "summary-strip" }, i.createElement("span", { className: `summary-live ${q === "unavailable" ? "summary-offline" : ""}` }, i.createElement("i", null), " ", q === "unavailable" ? "API OFFLINE" : q === "connecting" ? "CONNECTING" : "LIVE OVERVIEW"), i.createElement("span", { className: "summary-divider" }), " Updated just now ", i.createElement("span", { className: "summary-date" }, i.createElement(Zs, { size: 13 }), " ", Hi(/* @__PURE__ */ new Date()))), p && i.createElement("div", { className: "error-banner" }, i.createElement(Bl, { size: 17 }), i.createElement("span", null, p), i.createElement("button", { onClick: F }, "Retry")), i.createElement("section", { className: "metrics-grid" }, i.createElement(Ul, { label: "Total complaints", value: S ? "\u2014" : B.total, meta: i.createElement(i.Fragment, null, i.createElement("span", { className: "trend-up" }, i.createElement(tc, { size: 13 }), " Live"), " \xB7 all reported issues"), icon: Ki }), i.createElement(Ul, { label: "High-risk cases", value: S ? "\u2014" : B.high, meta: i.createElement(i.Fragment, null, i.createElement("span", { className: "critical-text" }, "Needs attention"), " \xB7 risk score 50+"), icon: Cd, accent: "red" }), i.createElement(Ul, { label: "Awaiting verification", value: S ? "\u2014" : B.pending, meta: "Submitted by citizens", icon: Zs, accent: "amber" }), i.createElement(Ul, { label: "Being resolved", value: S ? "\u2014" : B.progress, meta: "Assigned or in progress", icon: Sr, accent: "blue" })), i.createElement("section", { className: "priority-section" }, i.createElement("div", { className: "section-heading" }, i.createElement("div", null, i.createElement("div", { className: "section-kicker" }, i.createElement("span", { className: "kicker-dot" }), " NEEDS ATTENTION"), i.createElement("h2", null, "Priority complaints"), i.createElement("p", null, "Ranked by AI-assessed risk score, highest first.")), i.createElement("button", { className: "text-button", onClick: () => I(null) }, "View all complaints ", i.createElement(Xt, { size: 15 }))), S ? i.createElement("div", { className: "table-skeleton" }, i.createElement("div", null), i.createElement("div", null), i.createElement("div", null)) : z.length ? i.createElement("div", { className: "table-shell" }, i.createElement("table", null, i.createElement("thead", null, i.createElement("tr", null, i.createElement("th", null, "COMPLAINT"), i.createElement("th", null, "LOCATION"), i.createElement("th", null, "RISK LEVEL"), i.createElement("th", null, "RISK SCORE"), i.createElement("th", null, "STATUS"), i.createElement("th", null))), i.createElement("tbody", null, z.map((C) => i.createElement("tr", { key: C._id, onClick: () => I(C._id), tabIndex: "0", onKeyDown: (de) => de.key === "Enter" && I(C._id) }, i.createElement("td", null, i.createElement("div", { className: "complaint-cell" }, i.createElement("span", { className: "type-icon" }, i.createElement(Wi, { type: C.type })), i.createElement("span", null, i.createElement("strong", null, C.type || C.category || "Civic issue"), i.createElement("small", null, C.description || "No description provided")))), i.createElement("td", null, i.createElement("span", { className: "location-cell" }, i.createElement(Nr, { size: 14 }), C.location || "\u2014")), i.createElement("td", null, i.createElement(ac, { score: C.riskScore, label: C.severity })), i.createElement("td", null, i.createElement(Yi, { value: C.riskScore })), i.createElement("td", null, i.createElement(zr, { status: C.status })), i.createElement("td", null, i.createElement("button", { className: "row-arrow", "aria-label": "Open complaint" }, i.createElement(Xt, { size: 16 })))))))) : i.createElement(Gi, { title: K ? "No matching complaints" : "No complaints yet", message: K ? "Try another search term." : "When citizens submit reports, they will appear here.", action: !K && i.createElement("button", { className: "button-secondary", onClick: y }, i.createElement($l, { size: 15 }), " Create a report") })), i.createElement("section", { className: "lower-grid" }, i.createElement("article", { className: "panel-card activity-card" }, i.createElement("div", { className: "panel-heading" }, i.createElement("div", null, i.createElement("span", { className: "section-kicker" }, "LATEST REPORTS"), i.createElement("h3", null, "Recent activity")), i.createElement("button", { className: "icon-button soft-button", "aria-label": "More activity options" }, i.createElement(uc, null))), S ? i.createElement("div", { className: "loading-line" }) : ee.length ? i.createElement("div", { className: "activity-list" }, ee.map((C) => i.createElement("button", { className: "activity-item", key: C._id, onClick: () => I(C._id) }, i.createElement("span", { className: `activity-type activity-${Vl(C.riskScore).toLowerCase()}` }, i.createElement(Wi, { type: C.type })), i.createElement("span", { className: "activity-copy" }, i.createElement("strong", null, C.type || C.category || "Civic issue"), i.createElement("small", null, i.createElement(Nr, { size: 12 }), " ", C.location || "Location unavailable")), i.createElement("span", { className: "activity-right" }, i.createElement(zr, { status: C.status }), i.createElement("small", null, Hi(C.createdAt)))))) : i.createElement("p", { className: "subtle-empty" }, "No recent reports to show.")), i.createElement("article", { className: "panel-card response-card" }, i.createElement("div", { className: "response-top" }, i.createElement("span", { className: "response-icon" }, i.createElement(Sr, { size: 17 })), i.createElement("span", { className: "response-label" }, "RESPONSE SNAPSHOT")), i.createElement("h3", null, "Your team is", i.createElement("br", null), i.createElement("span", null, "making a difference.")), i.createElement("p", null, "Stay on top of incoming reports and move urgent cases through the resolution workflow."), i.createElement("div", { className: "response-stats" }, i.createElement("div", null, i.createElement("strong", null, B.pending), i.createElement("span", null, "Need verification")), i.createElement("div", null, i.createElement("strong", null, B.progress), i.createElement("span", null, "Being resolved"))), i.createElement("button", { className: "response-link", onClick: () => I(null) }, "Manage complaints ", i.createElement(Xt, { size: 15 })), i.createElement("span", { className: "response-watermark" }, i.createElement(Cr, { size: 135 })))));
}
function Wi({ type: v = "" }) {
  return v === "Road" || v === "Bridge" ? i.createElement(Xt, { size: 17 }) : v === "Streetlight" ? i.createElement(Sr, { size: 17 }) : v === "Water Supply" || v === "Drainage" ? i.createElement(Sr, { size: 17 }) : i.createElement(Qi, { size: 17 });
}
function Rd({ complaints: v, loading: S, error: p, onOpen: I, onRetry: y, query: F }) {
  const [K, q] = Q.useState("All statuses"), [B, b] = Q.useState("All types"), ee = Q.useMemo(() => v.filter((z) => `${z.name} ${z.description} ${z.location} ${z.type} ${z.department}`.toLowerCase().includes(F.toLowerCase()) && (K === "All statuses" || z.status === K) && (B === "All types" || z.type === B)).sort((z, C) => (C.riskScore || 0) - (z.riskScore || 0)), [v, F, K, B]);
  return i.createElement("div", { className: "page-content" }, i.createElement("div", { className: "page-title-row" }, i.createElement("div", null, i.createElement("div", { className: "eyebrow" }, i.createElement("span", { className: "eyebrow-line" }), " CASE MANAGEMENT"), i.createElement("h1", null, "All complaints"), i.createElement("p", null, "Review citizen reports and coordinate resolutions across departments.")), i.createElement("span", { className: "total-count" }, v.length, " total")), p && i.createElement("div", { className: "error-banner" }, i.createElement(Bl, { size: 17 }), i.createElement("span", null, p), i.createElement("button", { onClick: y }, "Retry")), i.createElement("div", { className: "filter-bar" }, i.createElement("span", { className: "filter-label" }, i.createElement(Ed, { size: 15 }), " FILTER BY"), i.createElement("select", { value: K, onChange: (z) => q(z.target.value) }, i.createElement("option", null, "All statuses"), xd.map((z) => i.createElement("option", { key: z }, z))), i.createElement("select", { value: B, onChange: (z) => b(z.target.value) }, i.createElement("option", null, "All types"), lc.map((z) => i.createElement("option", { key: z }, z))), i.createElement("span", { className: "filter-results" }, ee.length, " results")), S ? i.createElement("div", { className: "table-skeleton" }, i.createElement("div", null), i.createElement("div", null), i.createElement("div", null)) : ee.length ? i.createElement("div", { className: "table-shell full-table" }, i.createElement("table", null, i.createElement("thead", null, i.createElement("tr", null, i.createElement("th", null, "COMPLAINT"), i.createElement("th", null, "REPORTED BY"), i.createElement("th", null, "LOCATION"), i.createElement("th", null, "RISK"), i.createElement("th", null, "DEPARTMENT"), i.createElement("th", null, "STATUS"), i.createElement("th", null))), i.createElement("tbody", null, ee.map((z) => i.createElement("tr", { key: z._id, onClick: () => I(z._id), tabIndex: "0", onKeyDown: (C) => C.key === "Enter" && I(z._id) }, i.createElement("td", null, i.createElement("div", { className: "complaint-cell" }, i.createElement("span", { className: "type-icon" }, i.createElement(Wi, { type: z.type })), i.createElement("span", null, i.createElement("strong", null, z.type || z.category || "Civic issue"), i.createElement("small", null, z.description || "No description provided")))), i.createElement("td", null, i.createElement("span", { className: "reporter" }, i.createElement("span", { className: "mini-avatar" }, ic(z.name)), z.name || "Anonymous")), i.createElement("td", null, i.createElement("span", { className: "location-cell" }, i.createElement(Nr, { size: 14 }), z.location || "\u2014")), i.createElement("td", null, i.createElement(Yi, { value: z.riskScore })), i.createElement("td", { className: "department-cell" }, z.department || oc[z.type] || "\u2014"), i.createElement("td", null, i.createElement(zr, { status: z.status })), i.createElement("td", null, i.createElement("button", { className: "row-arrow", "aria-label": "Open complaint" }, i.createElement(Xt, { size: 16 })))))))) : i.createElement(Gi, { title: "Nothing to review", message: "There are no complaints matching these filters." }));
}
function Td({ id: v, complaints: S, onBack: p, onUpdated: I }) {
  const [y, F] = Q.useState(S.find((U) => U._id === v) || null), [K, q] = Q.useState(!!v), [B, b] = Q.useState(""), [ee, z] = Q.useState(false), [C, de] = Q.useState("");
  Q.useEffect(() => {
    let U = true;
    return q(true), xr(`/complaints/${encodeURIComponent(v)}`).then((he) => {
      U && (F(he.data), b(""));
    }).catch((he) => {
      U && b(he.message);
    }).finally(() => {
      U && q(false);
    }), () => {
      U = false;
    };
  }, [v]);
  const Ee = async (U, he = {}) => {
    z(true), b("");
    try {
      const ve = await xr(`/complaints/${encodeURIComponent(v)}${U}`, { method: "PATCH", body: JSON.stringify(he) });
      F(ve.data), I(ve.data);
    } catch (ve) {
      b(ve.message);
    } finally {
      z(false);
    }
  }, Y = { Assigned: { label: "Start work", status: "In Progress" }, "In Progress": { label: "Mark completed", status: "Completed" } }[y == null ? void 0 : y.status];
  return K && !y ? i.createElement("div", { className: "page-content" }, i.createElement("button", { className: "back-button", onClick: p }, i.createElement(wr, { size: 16 }), " Back to complaints"), i.createElement("div", { className: "detail-loading" }, i.createElement("div", null))) : y ? i.createElement("div", { className: "page-content detail-page" }, i.createElement("button", { className: "back-button", onClick: p }, i.createElement(wr, { size: 16 }), " All complaints"), B && i.createElement("div", { className: "error-banner" }, i.createElement(Bl, { size: 17 }), i.createElement("span", null, B)), i.createElement("div", { className: "detail-title-row" }, i.createElement("div", null, i.createElement("div", { className: "eyebrow" }, i.createElement("span", { className: "eyebrow-line" }), " COMPLAINT \xB7 ", y._id.slice(-7).toUpperCase()), i.createElement("h1", null, y.type || y.category || "Civic complaint"), i.createElement("p", null, "Submitted by ", y.name || "Anonymous", " \xB7 ", Hi(y.createdAt))), i.createElement(zr, { status: y.status })), i.createElement("div", { className: "detail-layout" }, i.createElement("div", { className: "detail-main" }, i.createElement("section", { className: "detail-card photo-card" }, i.createElement("div", { className: "detail-card-heading" }, i.createElement("div", null, i.createElement("span", { className: "section-kicker" }, "CITIZEN SUBMISSION"), i.createElement("h3", null, "Complaint details")), i.createElement("span", { className: "submitted-tag" }, i.createElement(On, { size: 14 }), " Submitted")), y.photo ? i.createElement("img", { className: "complaint-photo", src: y.photo, alt: `Reported ${y.type || "issue"} in ${y.location || "the reported area"}` }) : i.createElement("div", { className: "photo-placeholder" }, i.createElement(nc, { size: 26 }), i.createElement("span", null, "No photo was attached")), i.createElement("div", { className: "description-block" }, i.createElement("span", null, "DESCRIPTION"), i.createElement("p", null, y.description || "No description provided.")), i.createElement("div", { className: "detail-info-grid" }, i.createElement("div", null, i.createElement("span", null, "LOCATION"), i.createElement("strong", null, i.createElement(Nr, { size: 15 }), " ", y.location || "Not specified")), i.createElement("div", null, i.createElement("span", null, "INFRASTRUCTURE"), i.createElement("strong", null, i.createElement(Qi, { size: 15 }), " ", y.type || "Not specified")), i.createElement("div", null, i.createElement("span", null, "DEPARTMENT"), i.createElement("strong", null, i.createElement(Bi, { size: 15 }), " ", y.department || oc[y.type] || "Not assigned")), i.createElement("div", null, i.createElement("span", null, "REPORTED BY"), i.createElement("strong", null, i.createElement("span", { className: "mini-avatar" }, ic(y.name)), y.name || "Anonymous")))), i.createElement("section", { className: "detail-card ai-card" }, i.createElement("div", { className: "detail-card-heading" }, i.createElement("div", null, i.createElement("span", { className: "section-kicker" }, "JHARKHAND-CIVICGUARD INTELLIGENCE"), i.createElement("h3", null, i.createElement(Vi, { size: 17 }), " AI risk assessment")), i.createElement("span", { className: "ai-tag" }, i.createElement("span", null), " AI ANALYSIS")), i.createElement("div", { className: "ai-score-row" }, i.createElement("div", { className: `large-score large-score-${Vl(y.riskScore).toLowerCase()}` }, i.createElement("strong", null, Number(y.riskScore) || 0), i.createElement("span", null, "/ 100")), i.createElement("div", null, i.createElement(ac, { score: y.riskScore, label: y.severity }), i.createElement("p", null, "Overall risk assessment"))), i.createElement("div", { className: "risk-breakdown" }, i.createElement(qs, { label: "Urgency", value: y.urgency }), i.createElement(qs, { label: "Impact", value: y.impact })), i.createElement("div", { className: "ai-reason" }, i.createElement("span", null, "WHY THIS WAS FLAGGED"), i.createElement("p", null, y.aiReason || "No AI assessment was provided for this complaint.")), i.createElement("div", { className: "recommendation" }, i.createElement("div", { className: "recommendation-icon" }, i.createElement(Vi, { size: 16 })), i.createElement("div", null, i.createElement("span", null, "RECOMMENDED ACTION"), i.createElement("p", null, y.recommendedAction || "Review the submission and follow the department's standard response process."))))), i.createElement("aside", { className: "detail-sidebar" }, i.createElement("section", { className: "detail-card workflow-card" }, i.createElement("div", { className: "section-kicker" }, "GOVERNMENT WORKFLOW"), i.createElement("h3", null, "Resolution progress"), i.createElement(Ld, { status: y.status }), y.status === "Pending" && i.createElement("button", { className: "button-primary workflow-primary", disabled: ee, onClick: () => Ee("/verify") }, ee ? "Updating..." : i.createElement(i.Fragment, null, i.createElement(jl, { size: 16 }), " Verify complaint")), y.status === "Verified" && i.createElement("form", { className: "assign-form", onSubmit: (U) => {
    U.preventDefault(), C.trim() && Ee("/assign", { assignedOfficer: C.trim() });
  } }, i.createElement("label", { htmlFor: "officer" }, "Assign an officer"), i.createElement("input", { id: "officer", value: C, onChange: (U) => de(U.target.value), placeholder: "Officer name", required: true }), i.createElement("button", { className: "button-primary workflow-primary", disabled: ee || !C.trim() }, ee ? "Assigning..." : i.createElement(i.Fragment, null, i.createElement(Bi, { size: 16 }), " Assign officer"))), Y && i.createElement("button", { className: "button-primary workflow-primary", disabled: ee, onClick: () => Ee("/status", { status: Y.status }) }, ee ? "Updating..." : i.createElement(i.Fragment, null, i.createElement(jl, { size: 16 }), " ", Y.label)), y.status === "Completed" && i.createElement("div", { className: "completed-note" }, i.createElement(On, { size: 17 }), " This complaint has been resolved."), y.status === "Closed" && i.createElement("div", { className: "completed-note" }, i.createElement(On, { size: 17 }), " This complaint is closed."), y.status === "Assigned" && i.createElement("div", { className: "assigned-note" }, i.createElement(Bi, { size: 15 }), " Assigned to ", i.createElement("strong", null, y.assignedOfficer || "an officer"))), i.createElement("section", { className: "detail-card case-card" }, i.createElement("div", { className: "section-kicker" }, "CASE INFORMATION"), i.createElement("div", { className: "case-row" }, i.createElement("span", null, "Case ID"), i.createElement("strong", { className: "case-id" }, "CG-", y._id.slice(-7).toUpperCase())), i.createElement("div", { className: "case-row" }, i.createElement("span", null, "Department"), i.createElement("strong", null, y.department || "\u2014")), i.createElement("div", { className: "case-row" }, i.createElement("span", null, "Officer"), i.createElement("strong", null, y.assignedOfficer || "Unassigned")), i.createElement("div", { className: "case-row" }, i.createElement("span", null, "Risk score"), i.createElement(Yi, { value: y.riskScore })))))) : i.createElement("div", { className: "page-content" }, i.createElement("button", { className: "back-button", onClick: p }, i.createElement(wr, { size: 16 }), " Back to complaints"), i.createElement(Gi, { title: "Complaint not available", message: B || "This complaint could not be found." }));
}
function qs({ label: v, value: S }) {
  const p = Number(S) || 0;
  return i.createElement("div", { className: "risk-bar-row" }, i.createElement("div", null, i.createElement("span", null, v), i.createElement("strong", null, typeof S == "number" ? `${S}/100` : S || "Not rated")), i.createElement("div", { className: "risk-track" }, i.createElement("span", { style: { width: `${typeof S == "number" ? p : { Low: 25, Medium: 50, High: 75, Critical: 100 }[S] || 0}%` } })));
}
function Ld({ status: v }) {
  const S = v === "Pending" ? 0 : v === "Verified" ? 1 : v === "Assigned" ? 2 : v === "In Progress" ? 3 : 4, p = ["Submitted", "Verified", "Assigned", "In progress", "Completed"];
  return i.createElement("div", { className: "workflow-steps" }, p.map((I, y) => i.createElement("div", { className: `workflow-step ${y < S ? "step-done" : ""} ${y === S ? "step-current" : ""}`, key: I }, i.createElement("span", { className: "step-mark" }, y < S ? i.createElement(jl, { size: 12 }) : y + 1), i.createElement("div", null, i.createElement("strong", null, I), y === S && i.createElement("small", null, v === "Completed" ? "Resolved" : v)))));
}
function Md({ onCreated: v, onBack: S }) {
  const [p, I] = Q.useState({ name: "", description: "", location: "", type: "" }), [y, F] = Q.useState(""), [K, q] = Q.useState(""), [B, b] = Q.useState(false), [ee, z] = Q.useState(""), [C, de] = Q.useState(null), [Ee, Y] = Q.useState(false), [U, he] = Q.useState(false), ve = ($) => (te) => I((De) => ({ ...De, [$]: te.target.value })), Ie = ($) => {
    if (!$) return;
    if (!$.type.startsWith("image/")) {
      z("Choose an image file to attach.");
      return;
    }
    if ($.size > 5 * 1024 * 1024) {
      z("Images must be 5 MB or smaller.");
      return;
    }
    z("");
    const te = new FileReader();
    te.onload = () => {
      F(String(te.result)), q($.name);
    }, te.onerror = () => z("The selected image could not be read. Please try another file."), te.readAsDataURL($);
  }, Ce = ($) => {
    var De;
    const te = (De = $.target.files) == null ? void 0 : De[0];
    $.target.value = "", Ie(te);
  }, le = ($) => {
    var te;
    $.preventDefault(), he(false), Ie((te = $.dataTransfer.files) == null ? void 0 : te[0]);
  }, ke = () => {
    if (!navigator.geolocation) {
      z("Location is not supported by this browser.");
      return;
    }
    Y(true), navigator.geolocation.getCurrentPosition(($) => {
      const { latitude: te, longitude: De } = $.coords;
      I((wt) => ({ ...wt, location: `${te.toFixed(5)}, ${De.toFixed(5)}` })), Y(false);
    }, ($) => {
      z($.code === 1 ? "Location permission was denied. Enter your city or area manually." : "Could not determine your location. Enter your city or area manually."), Y(false);
    }, { timeout: 1e4 });
  }, we = async ($) => {
    $.preventDefault(), z(""), b(true);
    try {
      const te = await xr("/complaints", { method: "POST", body: JSON.stringify({ ...p, ...y ? { photo: y } : {} }) });
      de(te.data), v(te.data);
    } catch (te) {
      z(te.message);
    } finally {
      b(false);
    }
  };
  return C ? i.createElement("div", { className: "page-content report-content" }, i.createElement("button", { className: "back-button", onClick: S }, i.createElement(wr, { size: 16 }), " Back to dashboard"), i.createElement("div", { className: "success-card" }, i.createElement("div", { className: "success-mark" }, i.createElement(jl, { size: 27 })), i.createElement("div", { className: "eyebrow" }, i.createElement("span", { className: "eyebrow-line" }), " REPORT RECEIVED"), i.createElement("h1", null, "Thank you for speaking up."), i.createElement("p", null, "Your complaint is now in the hands of the right department. Our AI has analyzed the report and a government officer will review it shortly."), i.createElement("div", { className: "success-case" }, i.createElement("span", null, "YOUR CASE REFERENCE"), i.createElement("strong", null, "CG-", C._id.slice(-7).toUpperCase()), i.createElement(zr, { status: C.status })), i.createElement("div", { className: "success-actions" }, i.createElement("button", { className: "button-primary", onClick: () => v(C, true) }, "View complaint ", i.createElement(Xt, { size: 16 })), i.createElement("button", { className: "button-secondary", onClick: () => {
    de(null), I({ name: "", description: "", location: "", type: "" }), F(""), q("");
  } }, "Submit another")))) : i.createElement("div", { className: "page-content report-content" }, i.createElement("button", { className: "back-button", onClick: S }, i.createElement(wr, { size: 16 }), " Back to dashboard"), i.createElement("div", { className: "report-heading" }, i.createElement("div", { className: "eyebrow" }, i.createElement("span", { className: "eyebrow-line" }), " CITIZEN SERVICES \xB7 JHARKHAND"), i.createElement("h1", null, "Let's make it better."), i.createElement("p", null, "Tell us what's happening in your neighbourhood. Your report goes straight to the team who can help.")), i.createElement("div", { className: "report-layout" }, i.createElement("form", { className: "report-form detail-card", onSubmit: we }, i.createElement("div", { className: "form-section-heading" }, i.createElement("span", { className: "form-section-number" }, "01"), i.createElement("div", null, i.createElement("h3", null, "Your details"), i.createElement("p", null, "So our team knows who to contact if needed."))), i.createElement("label", { className: "form-label", htmlFor: "citizen-name" }, "Full name ", i.createElement("span", null, "OPTIONAL")), i.createElement("input", { id: "citizen-name", value: p.name, onChange: ve("name"), placeholder: "e.g. Aditi Kumar", maxLength: 120 }), i.createElement("div", { className: "form-section-heading form-section-spaced" }, i.createElement("span", { className: "form-section-number" }, "02"), i.createElement("div", null, i.createElement("h3", null, "About the issue"), i.createElement("p", null, "A little detail helps us get the right team on it."))), i.createElement("label", { className: "form-label", htmlFor: "issue-type" }, "What needs attention? ", i.createElement("span", { className: "required" }, "REQUIRED")), i.createElement("select", { id: "issue-type", value: p.type, onChange: ve("type"), required: true }, i.createElement("option", { value: "", disabled: true }, "Select infrastructure type"), lc.map(($) => i.createElement("option", { key: $, value: $ }, $))), i.createElement("label", { className: "form-label", htmlFor: "issue-description" }, "Describe the issue ", i.createElement("span", { className: "required" }, "REQUIRED")), i.createElement("textarea", { id: "issue-description", value: p.description, onChange: ve("description"), placeholder: "What happened? Is anyone at risk? Share anything that could help us respond.", rows: 5, maxLength: 2e3, required: true }), i.createElement("div", { className: "character-count" }, p.description.length, "/2000"), i.createElement("label", { className: "form-label", htmlFor: "issue-location" }, "Where is it? ", i.createElement("span", { className: "required" }, "REQUIRED")), i.createElement("div", { className: "location-input" }, i.createElement(Nr, { size: 17 }), i.createElement("input", { id: "issue-location", value: p.location, onChange: ve("location"), placeholder: "City, area, or nearby landmark", maxLength: 200, required: true }), i.createElement("button", { type: "button", onClick: ke, disabled: Ee }, i.createElement(wd, { size: 15 }), Ee ? "Locating" : "Use my location")), i.createElement("label", { className: "form-label", htmlFor: "issue-photo" }, "Add a photo ", i.createElement("span", null, "OPTIONAL")), i.createElement("div", { className: `upload-box ${y ? "upload-has-photo" : ""} ${U ? "upload-dragging" : ""}`, onDragOver: ($) => {
    $.preventDefault(), he(true);
  }, onDragLeave: ($) => {
    $.currentTarget.contains($.relatedTarget) || he(false);
  }, onDrop: le }, i.createElement("input", { id: "issue-photo", className: "upload-input", type: "file", accept: "image/*", onChange: Ce, "aria-describedby": "photo-help" }), y ? i.createElement("img", { className: "upload-preview", src: y, alt: "Preview of selected complaint photo" }) : i.createElement("span", { className: "upload-icon" }, i.createElement(nc, { size: 22 })), i.createElement("span", { className: "upload-copy" }, i.createElement("strong", null, K || "Add a photo of the issue"), i.createElement("small", { id: "photo-help" }, y ? "Photo attached \xB7 Choose another image or remove it" : "Drag and drop an image here, or choose a file \xB7 JPG, PNG \xB7 Up to 5 MB")), i.createElement("label", { className: "upload-browse", htmlFor: "issue-photo" }, y ? "Change photo" : "Choose photo"), y && i.createElement("button", { type: "button", className: "remove-photo", "aria-label": "Remove photo", onClick: () => {
    F(""), q("");
  } }, i.createElement(rc, { size: 16 }))), ee && i.createElement("div", { className: "form-error" }, i.createElement(Bl, { size: 17 }), ee), i.createElement("div", { className: "submit-row" }, i.createElement("span", null, i.createElement(Cr, { size: 15 }), " Your details are only shared with the responsible department."), i.createElement("button", { className: "button-primary", disabled: B }, B ? i.createElement(i.Fragment, null, i.createElement("span", { className: "spinner" }), " Sending report...") : i.createElement(i.Fragment, null, "Submit complaint ", i.createElement(Xt, { size: 16 }))))), i.createElement("aside", { className: "report-aside" }, i.createElement("div", { className: "report-aside-card" }, i.createElement("div", { className: "aside-sparkle" }, i.createElement(Vi, { size: 18 })), i.createElement("span", { className: "section-kicker" }, "SMARTER RESPONSE"), i.createElement("h3", null, "Every detail", i.createElement("br", null), "makes a difference."), i.createElement("p", null, "AI helps route your report to the right department and flags urgent safety concerns for faster action."), i.createElement("div", { className: "aside-benefit" }, i.createElement(On, { size: 16 }), " Routed to the right department"), i.createElement("div", { className: "aside-benefit" }, i.createElement(On, { size: 16 }), " Risk reviewed for urgent cases"), i.createElement("div", { className: "aside-benefit" }, i.createElement(On, { size: 16 }), " Tracked from report to resolution")), i.createElement("div", { className: "privacy-note" }, i.createElement(Cr, { size: 17 }), i.createElement("p", null, "Your report is handled securely by the Government of Jharkhand. Reports are reviewed by authorized officials only.")))));
}
function Id() {
  const [v, S] = Q.useState("dashboard"), [p, I] = Q.useState([]), [y, F] = Q.useState(true), [K, q] = Q.useState(""), [B, b] = Q.useState("connecting"), [ee, z] = Q.useState(""), [C, de] = Q.useState(null), [Ee, Y] = Q.useState(false), U = Q.useCallback(async () => {
    F(true), q(""), xr("/health").then(() => b("connected")).catch(() => b("unavailable"));
    try {
      const le = await xr("/complaints?sort=risk");
      I(Array.isArray(le.data) ? le.data : []);
    } catch (le) {
      q(le.message);
    } finally {
      F(false);
    }
  }, []);
  Q.useEffect(() => {
    U();
  }, [U]);
  const he = (le) => {
    if (!le) {
      S("complaints");
      return;
    }
    de(le), S("detail");
  }, ve = (le, ke = false) => {
    I((we) => [le, ...we.filter(($) => $._id !== le._id)].sort(($, te) => (te.riskScore || 0) - ($.riskScore || 0))), ke && (de(le._id), S("detail"));
  }, Ie = (le) => I((ke) => ke.map((we) => we._id === le._id ? le : we)), Ce = () => S("dashboard");
  return i.createElement("div", { className: "app-shell" }, i.createElement(_d, { page: v, setPage: S, open: Ee, onClose: () => Y(false), apiStatus: B }), i.createElement("main", { className: "main-area" }, i.createElement(zd, { onReport: () => S("report"), search: ee, setSearch: z, onMenu: () => Y(true) }), v === "dashboard" && i.createElement(Pd, { complaints: p, loading: y, error: K, onOpen: he, onReport: () => S("report"), onRetry: U, query: ee, apiStatus: B }), v === "complaints" && i.createElement(Rd, { complaints: p, loading: y, error: K, onOpen: he, onRetry: U, query: ee }), v === "detail" && i.createElement(Td, { key: C, id: C, complaints: p, onBack: () => S("complaints"), onUpdated: Ie }), v === "report" && i.createElement(Md, { onCreated: ve, onBack: Ce }), i.createElement("footer", { className: "app-footer" }, i.createElement("span", null, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " Jharkhand-CivicGuard"), i.createElement("span", null, "Building a more responsive state ", i.createElement("span", { className: "footer-dot" }, "\xB7"), " ", i.createElement("strong", null, "Made for citizens.")))));
}
pd.createRoot(document.getElementById("root")).render(i.createElement(i.StrictMode, null, i.createElement(Id, null)));
