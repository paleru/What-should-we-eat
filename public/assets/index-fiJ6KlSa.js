function Sm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const a of i.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Em =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function Xi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function Iy(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var km = { exports: {} },
  Ks = {},
  Cm = { exports: {} },
  pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ji = Symbol.for('react.element'),
  zy = Symbol.for('react.portal'),
  Fy = Symbol.for('react.fragment'),
  Uy = Symbol.for('react.strict_mode'),
  By = Symbol.for('react.profiler'),
  Hy = Symbol.for('react.provider'),
  Wy = Symbol.for('react.context'),
  Vy = Symbol.for('react.forward_ref'),
  Ky = Symbol.for('react.suspense'),
  Yy = Symbol.for('react.memo'),
  Gy = Symbol.for('react.lazy'),
  Xf = Symbol.iterator;
function Qy(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Xf && e[Xf]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var bm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _m = Object.assign,
  Rm = {};
function zo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rm),
    (this.updater = n || bm);
}
zo.prototype.isReactComponent = {};
zo.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
zo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Tm() {}
Tm.prototype = zo.prototype;
function qc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rm),
    (this.updater = n || bm);
}
var Xc = (qc.prototype = new Tm());
Xc.constructor = qc;
_m(Xc, zo.prototype);
Xc.isPureReactComponent = !0;
var Jf = Array.isArray,
  Pm = Object.prototype.hasOwnProperty,
  Jc = { current: null },
  $m = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nm(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Pm.call(t, r) && !$m.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Ji,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Jc.current,
  };
}
function qy(e, t) {
  return {
    $$typeof: Ji,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Zc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ji;
}
function Xy(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Zf = /\/+/g;
function Vl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Xy('' + e.key)
    : t.toString(36);
}
function Ua(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Ji:
          case zy:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === '' ? '.' + Vl(a, 0) : r),
      Jf(o)
        ? ((n = ''),
          e != null && (n = e.replace(Zf, '$&/') + '/'),
          Ua(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (Zc(o) &&
            (o = qy(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Zf, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === '' ? '.' : r + ':'), Jf(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + Vl(i, s);
      a += Ua(i, t, n, l, o);
    }
  else if (((l = Qy(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Vl(i, s++)), (a += Ua(i, t, n, l, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return a;
}
function va(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ua(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Jy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xt = { current: null },
  Ba = { transition: null },
  Zy = {
    ReactCurrentDispatcher: xt,
    ReactCurrentBatchConfig: Ba,
    ReactCurrentOwner: Jc,
  };
pe.Children = {
  map: va,
  forEach: function (e, t, n) {
    va(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      va(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      va(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Zc(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
pe.Component = zo;
pe.Fragment = Fy;
pe.Profiler = By;
pe.PureComponent = qc;
pe.StrictMode = Uy;
pe.Suspense = Ky;
pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zy;
pe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = _m({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Jc.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      Pm.call(t, l) &&
        !$m.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Ji, type: e.type, key: o, ref: i, props: r, _owner: a };
};
pe.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Hy, _context: e }),
    (e.Consumer = e)
  );
};
pe.createElement = Nm;
pe.createFactory = function (e) {
  var t = Nm.bind(null, e);
  return (t.type = e), t;
};
pe.createRef = function () {
  return { current: null };
};
pe.forwardRef = function (e) {
  return { $$typeof: Vy, render: e };
};
pe.isValidElement = Zc;
pe.lazy = function (e) {
  return { $$typeof: Gy, _payload: { _status: -1, _result: e }, _init: Jy };
};
pe.memo = function (e, t) {
  return { $$typeof: Yy, type: e, compare: t === void 0 ? null : t };
};
pe.startTransition = function (e) {
  var t = Ba.transition;
  Ba.transition = {};
  try {
    e();
  } finally {
    Ba.transition = t;
  }
};
pe.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
pe.useCallback = function (e, t) {
  return xt.current.useCallback(e, t);
};
pe.useContext = function (e) {
  return xt.current.useContext(e);
};
pe.useDebugValue = function () {};
pe.useDeferredValue = function (e) {
  return xt.current.useDeferredValue(e);
};
pe.useEffect = function (e, t) {
  return xt.current.useEffect(e, t);
};
pe.useId = function () {
  return xt.current.useId();
};
pe.useImperativeHandle = function (e, t, n) {
  return xt.current.useImperativeHandle(e, t, n);
};
pe.useInsertionEffect = function (e, t) {
  return xt.current.useInsertionEffect(e, t);
};
pe.useLayoutEffect = function (e, t) {
  return xt.current.useLayoutEffect(e, t);
};
pe.useMemo = function (e, t) {
  return xt.current.useMemo(e, t);
};
pe.useReducer = function (e, t, n) {
  return xt.current.useReducer(e, t, n);
};
pe.useRef = function (e) {
  return xt.current.useRef(e);
};
pe.useState = function (e) {
  return xt.current.useState(e);
};
pe.useSyncExternalStore = function (e, t, n) {
  return xt.current.useSyncExternalStore(e, t, n);
};
pe.useTransition = function () {
  return xt.current.useTransition();
};
pe.version = '18.2.0';
Cm.exports = pe;
var k = Cm.exports;
const Ee = Xi(k),
  ds = Sm({ __proto__: null, default: Ee }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ev = k,
  tv = Symbol.for('react.element'),
  nv = Symbol.for('react.fragment'),
  rv = Object.prototype.hasOwnProperty,
  ov = ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  iv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Om(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) rv.call(t, r) && !iv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: tv,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: ov.current,
  };
}
Ks.Fragment = nv;
Ks.jsx = Om;
Ks.jsxs = Om;
km.exports = Ks;
var v = km.exports,
  Mu = {},
  jm = { exports: {} },
  It = {},
  Am = { exports: {} },
  Lm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, M) {
    var z = R.length;
    R.push(M);
    e: for (; 0 < z; ) {
      var q = (z - 1) >>> 1,
        A = R[q];
      if (0 < o(A, M)) (R[q] = M), (R[z] = A), (z = q);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var M = R[0],
      z = R.pop();
    if (z !== M) {
      R[0] = z;
      e: for (var q = 0, A = R.length, F = A >>> 1; q < F; ) {
        var U = 2 * (q + 1) - 1,
          G = R[U],
          T = U + 1,
          ie = R[T];
        if (0 > o(G, z))
          T < A && 0 > o(ie, G)
            ? ((R[q] = ie), (R[T] = z), (q = T))
            : ((R[q] = G), (R[U] = z), (q = U));
        else if (T < A && 0 > o(ie, z)) (R[q] = ie), (R[T] = z), (q = T);
        else break e;
      }
    }
    return M;
  }
  function o(R, M) {
    var z = R.sortIndex - M.sortIndex;
    return z !== 0 ? z : R.id - M.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    p = 3,
    w = !1,
    g = !1,
    m = !1,
    x = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= R)
        r(u), (M.sortIndex = M.expirationTime), t(l, M);
      else break;
      M = n(u);
    }
  }
  function E(R) {
    if (((m = !1), y(R), !g))
      if (n(l) !== null) (g = !0), L(b);
      else {
        var M = n(u);
        M !== null && D(E, M.startTime - R);
      }
  }
  function b(R, M) {
    (g = !1), m && ((m = !1), f($), ($ = -1)), (w = !0);
    var z = p;
    try {
      for (
        y(M), d = n(l);
        d !== null && (!(d.expirationTime > M) || (R && !V()));

      ) {
        var q = d.callback;
        if (typeof q == 'function') {
          (d.callback = null), (p = d.priorityLevel);
          var A = q(d.expirationTime <= M);
          (M = e.unstable_now()),
            typeof A == 'function' ? (d.callback = A) : d === n(l) && r(l),
            y(M);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var F = !0;
      else {
        var U = n(u);
        U !== null && D(E, U.startTime - M), (F = !1);
      }
      return F;
    } finally {
      (d = null), (p = z), (w = !1);
    }
  }
  var S = !1,
    _ = null,
    $ = -1,
    H = 5,
    N = -1;
  function V() {
    return !(e.unstable_now() - N < H);
  }
  function X() {
    if (_ !== null) {
      var R = e.unstable_now();
      N = R;
      var M = !0;
      try {
        M = _(!0, R);
      } finally {
        M ? re() : ((S = !1), (_ = null));
      }
    } else S = !1;
  }
  var re;
  if (typeof h == 'function')
    re = function () {
      h(X);
    };
  else if (typeof MessageChannel < 'u') {
    var W = new MessageChannel(),
      I = W.port2;
    (W.port1.onmessage = X),
      (re = function () {
        I.postMessage(null);
      });
  } else
    re = function () {
      x(X, 0);
    };
  function L(R) {
    (_ = R), S || ((S = !0), re());
  }
  function D(R, M) {
    $ = x(function () {
      R(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || w || ((g = !0), L(b));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (H = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (R) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = p;
      }
      var z = p;
      p = M;
      try {
        return R();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, M) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var z = p;
      p = R;
      try {
        return M();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (R, M, z) {
      var q = e.unstable_now();
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? q + z : q))
          : (z = q),
        R)
      ) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return (
        (A = z + A),
        (R = {
          id: c++,
          callback: M,
          priorityLevel: R,
          startTime: z,
          expirationTime: A,
          sortIndex: -1,
        }),
        z > q
          ? ((R.sortIndex = z),
            t(u, R),
            n(l) === null &&
              R === n(u) &&
              (m ? (f($), ($ = -1)) : (m = !0), D(E, z - q)))
          : ((R.sortIndex = A), t(l, R), g || w || ((g = !0), L(b))),
        R
      );
    }),
    (e.unstable_shouldYield = V),
    (e.unstable_wrapCallback = function (R) {
      var M = p;
      return function () {
        var z = p;
        p = M;
        try {
          return R.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(Lm);
Am.exports = Lm;
var av = Am.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dm = k,
  Mt = av;
function B(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Mm = new Set(),
  _i = {};
function Br(e, t) {
  _o(e, t), _o(e + 'Capture', t);
}
function _o(e, t) {
  for (_i[e] = t, e = 0; e < t.length; e++) Mm.add(t[e]);
}
var An = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Iu = Object.prototype.hasOwnProperty,
  sv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ep = {},
  tp = {};
function lv(e) {
  return Iu.call(tp, e)
    ? !0
    : Iu.call(ep, e)
    ? !1
    : sv.test(e)
    ? (tp[e] = !0)
    : ((ep[e] = !0), !1);
}
function uv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function cv(e, t, n, r) {
  if (t === null || typeof t > 'u' || uv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function St(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var ut = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ut[e] = new St(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  ut[t] = new St(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ut[e] = new St(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  ut[e] = new St(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ut[e] = new St(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ut[e] = new St(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  ut[e] = new St(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ut[e] = new St(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  ut[e] = new St(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ed = /[\-:]([a-z])/g;
function td(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ed, td);
    ut[t] = new St(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ed, td);
    ut[t] = new St(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ed, td);
  ut[t] = new St(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  ut[e] = new St(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ut.xlinkHref = new St(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ut[e] = new St(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nd(e, t, n, r) {
  var o = ut.hasOwnProperty(t) ? ut[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (cv(t, n, o, r) && (n = null),
    r || o === null
      ? lv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Fn = Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wa = Symbol.for('react.element'),
  no = Symbol.for('react.portal'),
  ro = Symbol.for('react.fragment'),
  rd = Symbol.for('react.strict_mode'),
  zu = Symbol.for('react.profiler'),
  Im = Symbol.for('react.provider'),
  zm = Symbol.for('react.context'),
  od = Symbol.for('react.forward_ref'),
  Fu = Symbol.for('react.suspense'),
  Uu = Symbol.for('react.suspense_list'),
  id = Symbol.for('react.memo'),
  Xn = Symbol.for('react.lazy'),
  Fm = Symbol.for('react.offscreen'),
  np = Symbol.iterator;
function Wo(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (np && e[np]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Ie = Object.assign,
  Kl;
function ai(e) {
  if (Kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Kl = (t && t[1]) || '';
    }
  return (
    `
` +
    Kl +
    e
  );
}
var Yl = !1;
function Gl(e, t) {
  if (!e || Yl) return '';
  Yl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Yl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? ai(e) : '';
}
function dv(e) {
  switch (e.tag) {
    case 5:
      return ai(e.type);
    case 16:
      return ai('Lazy');
    case 13:
      return ai('Suspense');
    case 19:
      return ai('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Gl(e.type, !1)), e;
    case 11:
      return (e = Gl(e.type.render, !1)), e;
    case 1:
      return (e = Gl(e.type, !0)), e;
    default:
      return '';
  }
}
function Bu(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case ro:
      return 'Fragment';
    case no:
      return 'Portal';
    case zu:
      return 'Profiler';
    case rd:
      return 'StrictMode';
    case Fu:
      return 'Suspense';
    case Uu:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case zm:
        return (e.displayName || 'Context') + '.Consumer';
      case Im:
        return (e._context.displayName || 'Context') + '.Provider';
      case od:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case id:
        return (
          (t = e.displayName || null), t !== null ? t : Bu(e.type) || 'Memo'
        );
      case Xn:
        (t = e._payload), (e = e._init);
        try {
          return Bu(e(t));
        } catch {}
    }
  return null;
}
function fv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Bu(t);
    case 8:
      return t === rd ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function hr(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Um(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function pv(e) {
  var t = Um(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = '' + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = '' + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xa(e) {
  e._valueTracker || (e._valueTracker = pv(e));
}
function Bm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Um(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function fs(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Hu(e, t) {
  var n = t.checked;
  return Ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function rp(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = hr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Hm(e, t) {
  (t = t.checked), t != null && nd(e, 'checked', t, !1);
}
function Wu(e, t) {
  Hm(e, t);
  var n = hr(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Vu(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Vu(e, t.type, hr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function op(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Vu(e, t, n) {
  (t !== 'number' || fs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var si = Array.isArray;
function yo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + hr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ku(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
  return Ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function ip(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(B(92));
      if (si(n)) {
        if (1 < n.length) throw Error(B(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: hr(n) };
}
function Wm(e, t) {
  var n = hr(t.value),
    r = hr(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function ap(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Vm(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Yu(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Vm(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Sa,
  Km = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Sa = Sa || document.createElement('div'),
          Sa.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Sa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ri(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var di = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  hv = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(di).forEach(function (e) {
  hv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (di[t] = di[e]);
  });
});
function Ym(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (di.hasOwnProperty(e) && di[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Gm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Ym(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var mv = Ie(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Gu(e, t) {
  if (t) {
    if (mv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(B(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(B(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(B(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(B(62));
  }
}
function Qu(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var qu = null;
function ad(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xu = null,
  vo = null,
  wo = null;
function sp(e) {
  if ((e = ta(e))) {
    if (typeof Xu != 'function') throw Error(B(280));
    var t = e.stateNode;
    t && ((t = Xs(t)), Xu(e.stateNode, e.type, t));
  }
}
function Qm(e) {
  vo ? (wo ? wo.push(e) : (wo = [e])) : (vo = e);
}
function qm() {
  if (vo) {
    var e = vo,
      t = wo;
    if (((wo = vo = null), sp(e), t)) for (e = 0; e < t.length; e++) sp(t[e]);
  }
}
function Xm(e, t) {
  return e(t);
}
function Jm() {}
var Ql = !1;
function Zm(e, t, n) {
  if (Ql) return e(t, n);
  Ql = !0;
  try {
    return Xm(e, t, n);
  } finally {
    (Ql = !1), (vo !== null || wo !== null) && (Jm(), qm());
  }
}
function Ti(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(B(231, t, typeof n));
  return n;
}
var Ju = !1;
if (An)
  try {
    var Vo = {};
    Object.defineProperty(Vo, 'passive', {
      get: function () {
        Ju = !0;
      },
    }),
      window.addEventListener('test', Vo, Vo),
      window.removeEventListener('test', Vo, Vo);
  } catch {
    Ju = !1;
  }
function gv(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var fi = !1,
  ps = null,
  hs = !1,
  Zu = null,
  yv = {
    onError: function (e) {
      (fi = !0), (ps = e);
    },
  };
function vv(e, t, n, r, o, i, a, s, l) {
  (fi = !1), (ps = null), gv.apply(yv, arguments);
}
function wv(e, t, n, r, o, i, a, s, l) {
  if ((vv.apply(this, arguments), fi)) {
    if (fi) {
      var u = ps;
      (fi = !1), (ps = null);
    } else throw Error(B(198));
    hs || ((hs = !0), (Zu = u));
  }
}
function Hr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function e0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function lp(e) {
  if (Hr(e) !== e) throw Error(B(188));
}
function xv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Hr(e)), t === null)) throw Error(B(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return lp(o), e;
        if (i === r) return lp(o), t;
        i = i.sibling;
      }
      throw Error(B(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(B(189));
      }
    }
    if (n.alternate !== r) throw Error(B(190));
  }
  if (n.tag !== 3) throw Error(B(188));
  return n.stateNode.current === n ? e : t;
}
function t0(e) {
  return (e = xv(e)), e !== null ? n0(e) : null;
}
function n0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = n0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var r0 = Mt.unstable_scheduleCallback,
  up = Mt.unstable_cancelCallback,
  Sv = Mt.unstable_shouldYield,
  Ev = Mt.unstable_requestPaint,
  We = Mt.unstable_now,
  kv = Mt.unstable_getCurrentPriorityLevel,
  sd = Mt.unstable_ImmediatePriority,
  o0 = Mt.unstable_UserBlockingPriority,
  ms = Mt.unstable_NormalPriority,
  Cv = Mt.unstable_LowPriority,
  i0 = Mt.unstable_IdlePriority,
  Ys = null,
  wn = null;
function bv(e) {
  if (wn && typeof wn.onCommitFiberRoot == 'function')
    try {
      wn.onCommitFiberRoot(Ys, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var an = Math.clz32 ? Math.clz32 : Tv,
  _v = Math.log,
  Rv = Math.LN2;
function Tv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_v(e) / Rv) | 0)) | 0;
}
var Ea = 64,
  ka = 4194304;
function li(e) {
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
function gs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = li(s)) : ((i &= a), i !== 0 && (r = li(i)));
  } else (a = n & ~o), a !== 0 ? (r = li(a)) : i !== 0 && (r = li(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - an(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Pv(e, t) {
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
function $v(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - an(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & n) || s & r) && (o[a] = Pv(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function ec(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function a0() {
  var e = Ea;
  return (Ea <<= 1), !(Ea & 4194240) && (Ea = 64), e;
}
function ql(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - an(t)),
    (e[t] = n);
}
function Nv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - an(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function ld(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - an(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ke = 0;
function s0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var l0,
  ud,
  u0,
  c0,
  d0,
  tc = !1,
  Ca = [],
  ir = null,
  ar = null,
  sr = null,
  Pi = new Map(),
  $i = new Map(),
  Zn = [],
  Ov =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function cp(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ir = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ar = null;
      break;
    case 'mouseover':
    case 'mouseout':
      sr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Pi.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      $i.delete(t.pointerId);
  }
}
function Ko(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ta(t)), t !== null && ud(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function jv(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (ir = Ko(ir, e, t, n, r, o)), !0;
    case 'dragenter':
      return (ar = Ko(ar, e, t, n, r, o)), !0;
    case 'mouseover':
      return (sr = Ko(sr, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Pi.set(i, Ko(Pi.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), $i.set(i, Ko($i.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function f0(e) {
  var t = Pr(e.target);
  if (t !== null) {
    var n = Hr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = e0(n)), t !== null)) {
          (e.blockedOn = t),
            d0(e.priority, function () {
              u0(n);
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
function Ha(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = nc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (qu = r), n.target.dispatchEvent(r), (qu = null);
    } else return (t = ta(n)), t !== null && ud(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function dp(e, t, n) {
  Ha(e) && n.delete(t);
}
function Av() {
  (tc = !1),
    ir !== null && Ha(ir) && (ir = null),
    ar !== null && Ha(ar) && (ar = null),
    sr !== null && Ha(sr) && (sr = null),
    Pi.forEach(dp),
    $i.forEach(dp);
}
function Yo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    tc ||
      ((tc = !0),
      Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority, Av)));
}
function Ni(e) {
  function t(o) {
    return Yo(o, e);
  }
  if (0 < Ca.length) {
    Yo(Ca[0], e);
    for (var n = 1; n < Ca.length; n++) {
      var r = Ca[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ir !== null && Yo(ir, e),
      ar !== null && Yo(ar, e),
      sr !== null && Yo(sr, e),
      Pi.forEach(t),
      $i.forEach(t),
      n = 0;
    n < Zn.length;
    n++
  )
    (r = Zn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zn.length && ((n = Zn[0]), n.blockedOn === null); )
    f0(n), n.blockedOn === null && Zn.shift();
}
var xo = Fn.ReactCurrentBatchConfig,
  ys = !0;
function Lv(e, t, n, r) {
  var o = ke,
    i = xo.transition;
  xo.transition = null;
  try {
    (ke = 1), cd(e, t, n, r);
  } finally {
    (ke = o), (xo.transition = i);
  }
}
function Dv(e, t, n, r) {
  var o = ke,
    i = xo.transition;
  xo.transition = null;
  try {
    (ke = 4), cd(e, t, n, r);
  } finally {
    (ke = o), (xo.transition = i);
  }
}
function cd(e, t, n, r) {
  if (ys) {
    var o = nc(e, t, n, r);
    if (o === null) au(e, t, r, vs, n), cp(e, r);
    else if (jv(o, e, t, n, r)) r.stopPropagation();
    else if ((cp(e, r), t & 4 && -1 < Ov.indexOf(e))) {
      for (; o !== null; ) {
        var i = ta(o);
        if (
          (i !== null && l0(i),
          (i = nc(e, t, n, r)),
          i === null && au(e, t, r, vs, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else au(e, t, r, null, n);
  }
}
var vs = null;
function nc(e, t, n, r) {
  if (((vs = null), (e = ad(r)), (e = Pr(e)), e !== null))
    if (((t = Hr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = e0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (vs = e), null;
}
function p0(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (kv()) {
        case sd:
          return 1;
        case o0:
          return 4;
        case ms:
        case Cv:
          return 16;
        case i0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nr = null,
  dd = null,
  Wa = null;
function h0() {
  if (Wa) return Wa;
  var e,
    t = dd,
    n = t.length,
    r,
    o = 'value' in nr ? nr.value : nr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (Wa = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Va(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ba() {
  return !0;
}
function fp() {
  return !1;
}
function zt(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ba
        : fp),
      (this.isPropagationStopped = fp),
      this
    );
  }
  return (
    Ie(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ba));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ba));
      },
      persist: function () {},
      isPersistent: ba,
    }),
    t
  );
}
var Fo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  fd = zt(Fo),
  ea = Ie({}, Fo, { view: 0, detail: 0 }),
  Mv = zt(ea),
  Xl,
  Jl,
  Go,
  Gs = Ie({}, ea, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: pd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Go &&
            (Go && e.type === 'mousemove'
              ? ((Xl = e.screenX - Go.screenX), (Jl = e.screenY - Go.screenY))
              : (Jl = Xl = 0),
            (Go = e)),
          Xl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Jl;
    },
  }),
  pp = zt(Gs),
  Iv = Ie({}, Gs, { dataTransfer: 0 }),
  zv = zt(Iv),
  Fv = Ie({}, ea, { relatedTarget: 0 }),
  Zl = zt(Fv),
  Uv = Ie({}, Fo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bv = zt(Uv),
  Hv = Ie({}, Fo, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Wv = zt(Hv),
  Vv = Ie({}, Fo, { data: 0 }),
  hp = zt(Vv),
  Kv = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Yv = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Gv = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Qv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gv[e]) ? !!t[e] : !1;
}
function pd() {
  return Qv;
}
var qv = Ie({}, ea, {
    key: function (e) {
      if (e.key) {
        var t = Kv[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Va(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Yv[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pd,
    charCode: function (e) {
      return e.type === 'keypress' ? Va(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Va(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Xv = zt(qv),
  Jv = Ie({}, Gs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  mp = zt(Jv),
  Zv = Ie({}, ea, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pd,
  }),
  ew = zt(Zv),
  tw = Ie({}, Fo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nw = zt(tw),
  rw = Ie({}, Gs, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ow = zt(rw),
  iw = [9, 13, 27, 32],
  hd = An && 'CompositionEvent' in window,
  pi = null;
An && 'documentMode' in document && (pi = document.documentMode);
var aw = An && 'TextEvent' in window && !pi,
  m0 = An && (!hd || (pi && 8 < pi && 11 >= pi)),
  gp = ' ',
  yp = !1;
function g0(e, t) {
  switch (e) {
    case 'keyup':
      return iw.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function y0(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var oo = !1;
function sw(e, t) {
  switch (e) {
    case 'compositionend':
      return y0(t);
    case 'keypress':
      return t.which !== 32 ? null : ((yp = !0), gp);
    case 'textInput':
      return (e = t.data), e === gp && yp ? null : e;
    default:
      return null;
  }
}
function lw(e, t) {
  if (oo)
    return e === 'compositionend' || (!hd && g0(e, t))
      ? ((e = h0()), (Wa = dd = nr = null), (oo = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return m0 && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var uw = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function vp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!uw[e.type] : t === 'textarea';
}
function v0(e, t, n, r) {
  Qm(r),
    (t = ws(t, 'onChange')),
    0 < t.length &&
      ((n = new fd('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var hi = null,
  Oi = null;
function cw(e) {
  P0(e, 0);
}
function Qs(e) {
  var t = so(e);
  if (Bm(t)) return e;
}
function dw(e, t) {
  if (e === 'change') return t;
}
var w0 = !1;
if (An) {
  var eu;
  if (An) {
    var tu = 'oninput' in document;
    if (!tu) {
      var wp = document.createElement('div');
      wp.setAttribute('oninput', 'return;'),
        (tu = typeof wp.oninput == 'function');
    }
    eu = tu;
  } else eu = !1;
  w0 = eu && (!document.documentMode || 9 < document.documentMode);
}
function xp() {
  hi && (hi.detachEvent('onpropertychange', x0), (Oi = hi = null));
}
function x0(e) {
  if (e.propertyName === 'value' && Qs(Oi)) {
    var t = [];
    v0(t, Oi, e, ad(e)), Zm(cw, t);
  }
}
function fw(e, t, n) {
  e === 'focusin'
    ? (xp(), (hi = t), (Oi = n), hi.attachEvent('onpropertychange', x0))
    : e === 'focusout' && xp();
}
function pw(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Qs(Oi);
}
function hw(e, t) {
  if (e === 'click') return Qs(t);
}
function mw(e, t) {
  if (e === 'input' || e === 'change') return Qs(t);
}
function gw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var un = typeof Object.is == 'function' ? Object.is : gw;
function ji(e, t) {
  if (un(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Iu.call(t, o) || !un(e[o], t[o])) return !1;
  }
  return !0;
}
function Sp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ep(e, t) {
  var n = Sp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
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
    n = Sp(n);
  }
}
function S0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? S0(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function E0() {
  for (var e = window, t = fs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fs(e.document);
  }
  return t;
}
function md(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function yw(e) {
  var t = E0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    S0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && md(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Ep(n, i));
        var a = Ep(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var vw = An && 'documentMode' in document && 11 >= document.documentMode,
  io = null,
  rc = null,
  mi = null,
  oc = !1;
function kp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  oc ||
    io == null ||
    io !== fs(r) ||
    ((r = io),
    'selectionStart' in r && md(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (mi && ji(mi, r)) ||
      ((mi = r),
      (r = ws(rc, 'onSelect')),
      0 < r.length &&
        ((t = new fd('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = io))));
}
function _a(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var ao = {
    animationend: _a('Animation', 'AnimationEnd'),
    animationiteration: _a('Animation', 'AnimationIteration'),
    animationstart: _a('Animation', 'AnimationStart'),
    transitionend: _a('Transition', 'TransitionEnd'),
  },
  nu = {},
  k0 = {};
An &&
  ((k0 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ao.animationend.animation,
    delete ao.animationiteration.animation,
    delete ao.animationstart.animation),
  'TransitionEvent' in window || delete ao.transitionend.transition);
function qs(e) {
  if (nu[e]) return nu[e];
  if (!ao[e]) return e;
  var t = ao[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in k0) return (nu[e] = t[n]);
  return e;
}
var C0 = qs('animationend'),
  b0 = qs('animationiteration'),
  _0 = qs('animationstart'),
  R0 = qs('transitionend'),
  T0 = new Map(),
  Cp =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function xr(e, t) {
  T0.set(e, t), Br(t, [e]);
}
for (var ru = 0; ru < Cp.length; ru++) {
  var ou = Cp[ru],
    ww = ou.toLowerCase(),
    xw = ou[0].toUpperCase() + ou.slice(1);
  xr(ww, 'on' + xw);
}
xr(C0, 'onAnimationEnd');
xr(b0, 'onAnimationIteration');
xr(_0, 'onAnimationStart');
xr('dblclick', 'onDoubleClick');
xr('focusin', 'onFocus');
xr('focusout', 'onBlur');
xr(R0, 'onTransitionEnd');
_o('onMouseEnter', ['mouseout', 'mouseover']);
_o('onMouseLeave', ['mouseout', 'mouseover']);
_o('onPointerEnter', ['pointerout', 'pointerover']);
_o('onPointerLeave', ['pointerout', 'pointerover']);
Br(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Br(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Br('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Br(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Br(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Br(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var ui =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Sw = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ui));
function bp(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), wv(r, t, void 0, e), (e.currentTarget = null);
}
function P0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          bp(o, s, u), (i = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          bp(o, s, u), (i = l);
        }
    }
  }
  if (hs) throw ((e = Zu), (hs = !1), (Zu = null), e);
}
function $e(e, t) {
  var n = t[uc];
  n === void 0 && (n = t[uc] = new Set());
  var r = e + '__bubble';
  n.has(r) || ($0(t, e, 2, !1), n.add(r));
}
function iu(e, t, n) {
  var r = 0;
  t && (r |= 4), $0(n, e, r, t);
}
var Ra = '_reactListening' + Math.random().toString(36).slice(2);
function Ai(e) {
  if (!e[Ra]) {
    (e[Ra] = !0),
      Mm.forEach(function (n) {
        n !== 'selectionchange' && (Sw.has(n) || iu(n, !1, e), iu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ra] || ((t[Ra] = !0), iu('selectionchange', !1, t));
  }
}
function $0(e, t, n, r) {
  switch (p0(t)) {
    case 1:
      var o = Lv;
      break;
    case 4:
      o = Dv;
      break;
    default:
      o = cd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ju ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function au(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Pr(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Zm(function () {
    var u = i,
      c = ad(n),
      d = [];
    e: {
      var p = T0.get(e);
      if (p !== void 0) {
        var w = fd,
          g = e;
        switch (e) {
          case 'keypress':
            if (Va(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = Xv;
            break;
          case 'focusin':
            (g = 'focus'), (w = Zl);
            break;
          case 'focusout':
            (g = 'blur'), (w = Zl);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = Zl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = pp;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = zv;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = ew;
            break;
          case C0:
          case b0:
          case _0:
            w = Bv;
            break;
          case R0:
            w = nw;
            break;
          case 'scroll':
            w = Mv;
            break;
          case 'wheel':
            w = ow;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = Wv;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = mp;
        }
        var m = (t & 4) !== 0,
          x = !m && e === 'scroll',
          f = m ? (p !== null ? p + 'Capture' : null) : p;
        m = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var E = y.stateNode;
          if (
            (y.tag === 5 &&
              E !== null &&
              ((y = E),
              f !== null && ((E = Ti(h, f)), E != null && m.push(Li(h, E, y)))),
            x)
          )
            break;
          h = h.return;
        }
        0 < m.length &&
          ((p = new w(p, g, null, n, c)), d.push({ event: p, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== qu &&
            (g = n.relatedTarget || n.fromElement) &&
            (Pr(g) || g[Ln]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          w
            ? ((g = n.relatedTarget || n.toElement),
              (w = u),
              (g = g ? Pr(g) : null),
              g !== null &&
                ((x = Hr(g)), g !== x || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((w = null), (g = u)),
          w !== g)
        ) {
          if (
            ((m = pp),
            (E = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((m = mp),
              (E = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (h = 'pointer')),
            (x = w == null ? p : so(w)),
            (y = g == null ? p : so(g)),
            (p = new m(E, h + 'leave', w, n, c)),
            (p.target = x),
            (p.relatedTarget = y),
            (E = null),
            Pr(c) === u &&
              ((m = new m(f, h + 'enter', g, n, c)),
              (m.target = y),
              (m.relatedTarget = x),
              (E = m)),
            (x = E),
            w && g)
          )
            t: {
              for (m = w, f = g, h = 0, y = m; y; y = qr(y)) h++;
              for (y = 0, E = f; E; E = qr(E)) y++;
              for (; 0 < h - y; ) (m = qr(m)), h--;
              for (; 0 < y - h; ) (f = qr(f)), y--;
              for (; h--; ) {
                if (m === f || (f !== null && m === f.alternate)) break t;
                (m = qr(m)), (f = qr(f));
              }
              m = null;
            }
          else m = null;
          w !== null && _p(d, p, w, m, !1),
            g !== null && x !== null && _p(d, x, g, m, !0);
        }
      }
      e: {
        if (
          ((p = u ? so(u) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && p.type === 'file'))
        )
          var b = dw;
        else if (vp(p))
          if (w0) b = mw;
          else {
            b = pw;
            var S = fw;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (b = hw);
        if (b && (b = b(e, u))) {
          v0(d, b, n, c);
          break e;
        }
        S && S(e, p, u),
          e === 'focusout' &&
            (S = p._wrapperState) &&
            S.controlled &&
            p.type === 'number' &&
            Vu(p, 'number', p.value);
      }
      switch (((S = u ? so(u) : window), e)) {
        case 'focusin':
          (vp(S) || S.contentEditable === 'true') &&
            ((io = S), (rc = u), (mi = null));
          break;
        case 'focusout':
          mi = rc = io = null;
          break;
        case 'mousedown':
          oc = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (oc = !1), kp(d, n, c);
          break;
        case 'selectionchange':
          if (vw) break;
        case 'keydown':
        case 'keyup':
          kp(d, n, c);
      }
      var _;
      if (hd)
        e: {
          switch (e) {
            case 'compositionstart':
              var $ = 'onCompositionStart';
              break e;
            case 'compositionend':
              $ = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              $ = 'onCompositionUpdate';
              break e;
          }
          $ = void 0;
        }
      else
        oo
          ? g0(e, n) && ($ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && ($ = 'onCompositionStart');
      $ &&
        (m0 &&
          n.locale !== 'ko' &&
          (oo || $ !== 'onCompositionStart'
            ? $ === 'onCompositionEnd' && oo && (_ = h0())
            : ((nr = c),
              (dd = 'value' in nr ? nr.value : nr.textContent),
              (oo = !0))),
        (S = ws(u, $)),
        0 < S.length &&
          (($ = new hp($, e, null, n, c)),
          d.push({ event: $, listeners: S }),
          _ ? ($.data = _) : ((_ = y0(n)), _ !== null && ($.data = _)))),
        (_ = aw ? sw(e, n) : lw(e, n)) &&
          ((u = ws(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new hp('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = _)));
    }
    P0(d, t);
  });
}
function Li(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ws(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ti(e, n)),
      i != null && r.unshift(Li(e, i, o)),
      (i = Ti(e, t)),
      i != null && r.push(Li(e, i, o))),
      (e = e.return);
  }
  return r;
}
function qr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _p(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = Ti(n, i)), l != null && a.unshift(Li(n, l, s)))
        : o || ((l = Ti(n, i)), l != null && a.push(Li(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Ew = /\r\n?/g,
  kw = /\u0000|\uFFFD/g;
function Rp(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Ew,
      `
`
    )
    .replace(kw, '');
}
function Ta(e, t, n) {
  if (((t = Rp(t)), Rp(e) !== t && n)) throw Error(B(425));
}
function xs() {}
var ic = null,
  ac = null;
function sc(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var lc = typeof setTimeout == 'function' ? setTimeout : void 0,
  Cw = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Tp = typeof Promise == 'function' ? Promise : void 0,
  bw =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Tp < 'u'
      ? function (e) {
          return Tp.resolve(null).then(e).catch(_w);
        }
      : lc;
function _w(e) {
  setTimeout(function () {
    throw e;
  });
}
function su(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Ni(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Ni(t);
}
function lr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Pp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Uo = Math.random().toString(36).slice(2),
  yn = '__reactFiber$' + Uo,
  Di = '__reactProps$' + Uo,
  Ln = '__reactContainer$' + Uo,
  uc = '__reactEvents$' + Uo,
  Rw = '__reactListeners$' + Uo,
  Tw = '__reactHandles$' + Uo;
function Pr(e) {
  var t = e[yn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ln] || n[yn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pp(e); e !== null; ) {
          if ((n = e[yn])) return n;
          e = Pp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ta(e) {
  return (
    (e = e[yn] || e[Ln]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function so(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(B(33));
}
function Xs(e) {
  return e[Di] || null;
}
var cc = [],
  lo = -1;
function Sr(e) {
  return { current: e };
}
function Ne(e) {
  0 > lo || ((e.current = cc[lo]), (cc[lo] = null), lo--);
}
function Te(e, t) {
  lo++, (cc[lo] = e.current), (e.current = t);
}
var mr = {},
  mt = Sr(mr),
  _t = Sr(!1),
  Lr = mr;
function Ro(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Rt(e) {
  return (e = e.childContextTypes), e != null;
}
function Ss() {
  Ne(_t), Ne(mt);
}
function $p(e, t, n) {
  if (mt.current !== mr) throw Error(B(168));
  Te(mt, t), Te(_t, n);
}
function N0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(B(108, fv(e) || 'Unknown', o));
  return Ie({}, n, r);
}
function Es(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mr),
    (Lr = mt.current),
    Te(mt, e),
    Te(_t, _t.current),
    !0
  );
}
function Np(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(B(169));
  n
    ? ((e = N0(e, t, Lr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ne(_t),
      Ne(mt),
      Te(mt, e))
    : Ne(_t),
    Te(_t, n);
}
var Tn = null,
  Js = !1,
  lu = !1;
function O0(e) {
  Tn === null ? (Tn = [e]) : Tn.push(e);
}
function Pw(e) {
  (Js = !0), O0(e);
}
function Er() {
  if (!lu && Tn !== null) {
    lu = !0;
    var e = 0,
      t = ke;
    try {
      var n = Tn;
      for (ke = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Tn = null), (Js = !1);
    } catch (o) {
      throw (Tn !== null && (Tn = Tn.slice(e + 1)), r0(sd, Er), o);
    } finally {
      (ke = t), (lu = !1);
    }
  }
  return null;
}
var uo = [],
  co = 0,
  ks = null,
  Cs = 0,
  Vt = [],
  Kt = 0,
  Dr = null,
  Pn = 1,
  $n = '';
function _r(e, t) {
  (uo[co++] = Cs), (uo[co++] = ks), (ks = e), (Cs = t);
}
function j0(e, t, n) {
  (Vt[Kt++] = Pn), (Vt[Kt++] = $n), (Vt[Kt++] = Dr), (Dr = e);
  var r = Pn;
  e = $n;
  var o = 32 - an(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - an(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Pn = (1 << (32 - an(t) + o)) | (n << o) | r),
      ($n = i + e);
  } else (Pn = (1 << i) | (n << o) | r), ($n = e);
}
function gd(e) {
  e.return !== null && (_r(e, 1), j0(e, 1, 0));
}
function yd(e) {
  for (; e === ks; )
    (ks = uo[--co]), (uo[co] = null), (Cs = uo[--co]), (uo[co] = null);
  for (; e === Dr; )
    (Dr = Vt[--Kt]),
      (Vt[Kt] = null),
      ($n = Vt[--Kt]),
      (Vt[Kt] = null),
      (Pn = Vt[--Kt]),
      (Vt[Kt] = null);
}
var Lt = null,
  At = null,
  Ae = !1,
  on = null;
function A0(e, t) {
  var n = Gt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Op(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Lt = e), (At = lr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Lt = e), (At = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dr !== null ? { id: Pn, overflow: $n } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Gt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Lt = e),
            (At = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function dc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fc(e) {
  if (Ae) {
    var t = At;
    if (t) {
      var n = t;
      if (!Op(e, t)) {
        if (dc(e)) throw Error(B(418));
        t = lr(n.nextSibling);
        var r = Lt;
        t && Op(e, t)
          ? A0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ae = !1), (Lt = e));
      }
    } else {
      if (dc(e)) throw Error(B(418));
      (e.flags = (e.flags & -4097) | 2), (Ae = !1), (Lt = e);
    }
  }
}
function jp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Lt = e;
}
function Pa(e) {
  if (e !== Lt) return !1;
  if (!Ae) return jp(e), (Ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !sc(e.type, e.memoizedProps))),
    t && (t = At))
  ) {
    if (dc(e)) throw (L0(), Error(B(418)));
    for (; t; ) A0(e, t), (t = lr(t.nextSibling));
  }
  if ((jp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(B(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              At = lr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      At = null;
    }
  } else At = Lt ? lr(e.stateNode.nextSibling) : null;
  return !0;
}
function L0() {
  for (var e = At; e; ) e = lr(e.nextSibling);
}
function To() {
  (At = Lt = null), (Ae = !1);
}
function vd(e) {
  on === null ? (on = [e]) : on.push(e);
}
var $w = Fn.ReactCurrentBatchConfig;
function tn(e, t) {
  if (e && e.defaultProps) {
    (t = Ie({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var bs = Sr(null),
  _s = null,
  fo = null,
  wd = null;
function xd() {
  wd = fo = _s = null;
}
function Sd(e) {
  var t = bs.current;
  Ne(bs), (e._currentValue = t);
}
function pc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function So(e, t) {
  (_s = e),
    (wd = fo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (kt = !0), (e.firstContext = null));
}
function qt(e) {
  var t = e._currentValue;
  if (wd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fo === null)) {
      if (_s === null) throw Error(B(308));
      (fo = e), (_s.dependencies = { lanes: 0, firstContext: e });
    } else fo = fo.next = e;
  return t;
}
var $r = null;
function Ed(e) {
  $r === null ? ($r = [e]) : $r.push(e);
}
function D0(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ed(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Dn(e, r)
  );
}
function Dn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Jn = !1;
function kd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function M0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function On(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ur(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ye & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Dn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ed(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Dn(e, n)
  );
}
function Ka(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ld(e, n);
  }
}
function Ap(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Rs(e, t, n, r) {
  var o = e.updateQueue;
  Jn = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var p = s.lane,
        w = s.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var g = e,
            m = s;
          switch (((p = t), (w = n), m.tag)) {
            case 1:
              if (((g = m.payload), typeof g == 'function')) {
                d = g.call(w, d, p);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = m.payload),
                (p = typeof g == 'function' ? g.call(w, d, p) : g),
                p == null)
              )
                break e;
              d = Ie({}, d, p);
              break e;
            case 2:
              Jn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [s]) : p.push(s));
      } else
        (w = {
          eventTime: w,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = w), (l = d)) : (c = c.next = w),
          (a |= p);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (p = s),
          (s = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Ir |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Lp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(B(191, o));
        o.call(r);
      }
    }
}
var I0 = new Dm.Component().refs;
function hc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Hr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = wt(),
      o = dr(e),
      i = On(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ur(e, i, o)),
      t !== null && (sn(t, e, o, r), Ka(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = wt(),
      o = dr(e),
      i = On(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ur(e, i, o)),
      t !== null && (sn(t, e, o, r), Ka(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = wt(),
      r = dr(e),
      o = On(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = ur(e, o, r)),
      t !== null && (sn(t, e, r, n), Ka(t, e, r));
  },
};
function Dp(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ji(n, r) || !ji(o, i)
      : !0
  );
}
function z0(e, t, n) {
  var r = !1,
    o = mr,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = qt(i))
      : ((o = Rt(t) ? Lr : mt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Ro(e, o) : mr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Mp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zs.enqueueReplaceState(t, t.state, null);
}
function mc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = I0), kd(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = qt(i))
    : ((i = Rt(t) ? Lr : mt.current), (o.context = Ro(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (hc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Zs.enqueueReplaceState(o, o.state, null),
      Rs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Qo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(B(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(B(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === I0 && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(B(284));
    if (!n._owner) throw Error(B(290, e));
  }
  return e;
}
function $a(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      B(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Ip(e) {
  var t = e._init;
  return t(e._payload);
}
function F0(e) {
  function t(f, h) {
    if (e) {
      var y = f.deletions;
      y === null ? ((f.deletions = [h]), (f.flags |= 16)) : y.push(h);
    }
  }
  function n(f, h) {
    if (!e) return null;
    for (; h !== null; ) t(f, h), (h = h.sibling);
    return null;
  }
  function r(f, h) {
    for (f = new Map(); h !== null; )
      h.key !== null ? f.set(h.key, h) : f.set(h.index, h), (h = h.sibling);
    return f;
  }
  function o(f, h) {
    return (f = fr(f, h)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, h, y) {
    return (
      (f.index = y),
      e
        ? ((y = f.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((f.flags |= 2), h) : y)
            : ((f.flags |= 2), h))
        : ((f.flags |= 1048576), h)
    );
  }
  function a(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, h, y, E) {
    return h === null || h.tag !== 6
      ? ((h = mu(y, f.mode, E)), (h.return = f), h)
      : ((h = o(h, y)), (h.return = f), h);
  }
  function l(f, h, y, E) {
    var b = y.type;
    return b === ro
      ? c(f, h, y.props.children, E, y.key)
      : h !== null &&
        (h.elementType === b ||
          (typeof b == 'object' &&
            b !== null &&
            b.$$typeof === Xn &&
            Ip(b) === h.type))
      ? ((E = o(h, y.props)), (E.ref = Qo(f, h, y)), (E.return = f), E)
      : ((E = Ja(y.type, y.key, y.props, null, f.mode, E)),
        (E.ref = Qo(f, h, y)),
        (E.return = f),
        E);
  }
  function u(f, h, y, E) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = gu(y, f.mode, E)), (h.return = f), h)
      : ((h = o(h, y.children || [])), (h.return = f), h);
  }
  function c(f, h, y, E, b) {
    return h === null || h.tag !== 7
      ? ((h = Ar(y, f.mode, E, b)), (h.return = f), h)
      : ((h = o(h, y)), (h.return = f), h);
  }
  function d(f, h, y) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = mu('' + h, f.mode, y)), (h.return = f), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case wa:
          return (
            (y = Ja(h.type, h.key, h.props, null, f.mode, y)),
            (y.ref = Qo(f, null, h)),
            (y.return = f),
            y
          );
        case no:
          return (h = gu(h, f.mode, y)), (h.return = f), h;
        case Xn:
          var E = h._init;
          return d(f, E(h._payload), y);
      }
      if (si(h) || Wo(h))
        return (h = Ar(h, f.mode, y, null)), (h.return = f), h;
      $a(f, h);
    }
    return null;
  }
  function p(f, h, y, E) {
    var b = h !== null ? h.key : null;
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return b !== null ? null : s(f, h, '' + y, E);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case wa:
          return y.key === b ? l(f, h, y, E) : null;
        case no:
          return y.key === b ? u(f, h, y, E) : null;
        case Xn:
          return (b = y._init), p(f, h, b(y._payload), E);
      }
      if (si(y) || Wo(y)) return b !== null ? null : c(f, h, y, E, null);
      $a(f, y);
    }
    return null;
  }
  function w(f, h, y, E, b) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return (f = f.get(y) || null), s(h, f, '' + E, b);
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case wa:
          return (f = f.get(E.key === null ? y : E.key) || null), l(h, f, E, b);
        case no:
          return (f = f.get(E.key === null ? y : E.key) || null), u(h, f, E, b);
        case Xn:
          var S = E._init;
          return w(f, h, y, S(E._payload), b);
      }
      if (si(E) || Wo(E)) return (f = f.get(y) || null), c(h, f, E, b, null);
      $a(h, E);
    }
    return null;
  }
  function g(f, h, y, E) {
    for (
      var b = null, S = null, _ = h, $ = (h = 0), H = null;
      _ !== null && $ < y.length;
      $++
    ) {
      _.index > $ ? ((H = _), (_ = null)) : (H = _.sibling);
      var N = p(f, _, y[$], E);
      if (N === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && N.alternate === null && t(f, _),
        (h = i(N, h, $)),
        S === null ? (b = N) : (S.sibling = N),
        (S = N),
        (_ = H);
    }
    if ($ === y.length) return n(f, _), Ae && _r(f, $), b;
    if (_ === null) {
      for (; $ < y.length; $++)
        (_ = d(f, y[$], E)),
          _ !== null &&
            ((h = i(_, h, $)), S === null ? (b = _) : (S.sibling = _), (S = _));
      return Ae && _r(f, $), b;
    }
    for (_ = r(f, _); $ < y.length; $++)
      (H = w(_, f, $, y[$], E)),
        H !== null &&
          (e && H.alternate !== null && _.delete(H.key === null ? $ : H.key),
          (h = i(H, h, $)),
          S === null ? (b = H) : (S.sibling = H),
          (S = H));
    return (
      e &&
        _.forEach(function (V) {
          return t(f, V);
        }),
      Ae && _r(f, $),
      b
    );
  }
  function m(f, h, y, E) {
    var b = Wo(y);
    if (typeof b != 'function') throw Error(B(150));
    if (((y = b.call(y)), y == null)) throw Error(B(151));
    for (
      var S = (b = null), _ = h, $ = (h = 0), H = null, N = y.next();
      _ !== null && !N.done;
      $++, N = y.next()
    ) {
      _.index > $ ? ((H = _), (_ = null)) : (H = _.sibling);
      var V = p(f, _, N.value, E);
      if (V === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && V.alternate === null && t(f, _),
        (h = i(V, h, $)),
        S === null ? (b = V) : (S.sibling = V),
        (S = V),
        (_ = H);
    }
    if (N.done) return n(f, _), Ae && _r(f, $), b;
    if (_ === null) {
      for (; !N.done; $++, N = y.next())
        (N = d(f, N.value, E)),
          N !== null &&
            ((h = i(N, h, $)), S === null ? (b = N) : (S.sibling = N), (S = N));
      return Ae && _r(f, $), b;
    }
    for (_ = r(f, _); !N.done; $++, N = y.next())
      (N = w(_, f, $, N.value, E)),
        N !== null &&
          (e && N.alternate !== null && _.delete(N.key === null ? $ : N.key),
          (h = i(N, h, $)),
          S === null ? (b = N) : (S.sibling = N),
          (S = N));
    return (
      e &&
        _.forEach(function (X) {
          return t(f, X);
        }),
      Ae && _r(f, $),
      b
    );
  }
  function x(f, h, y, E) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === ro &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case wa:
          e: {
            for (var b = y.key, S = h; S !== null; ) {
              if (S.key === b) {
                if (((b = y.type), b === ro)) {
                  if (S.tag === 7) {
                    n(f, S.sibling),
                      (h = o(S, y.props.children)),
                      (h.return = f),
                      (f = h);
                    break e;
                  }
                } else if (
                  S.elementType === b ||
                  (typeof b == 'object' &&
                    b !== null &&
                    b.$$typeof === Xn &&
                    Ip(b) === S.type)
                ) {
                  n(f, S.sibling),
                    (h = o(S, y.props)),
                    (h.ref = Qo(f, S, y)),
                    (h.return = f),
                    (f = h);
                  break e;
                }
                n(f, S);
                break;
              } else t(f, S);
              S = S.sibling;
            }
            y.type === ro
              ? ((h = Ar(y.props.children, f.mode, E, y.key)),
                (h.return = f),
                (f = h))
              : ((E = Ja(y.type, y.key, y.props, null, f.mode, E)),
                (E.ref = Qo(f, h, y)),
                (E.return = f),
                (f = E));
          }
          return a(f);
        case no:
          e: {
            for (S = y.key; h !== null; ) {
              if (h.key === S)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(f, h.sibling),
                    (h = o(h, y.children || [])),
                    (h.return = f),
                    (f = h);
                  break e;
                } else {
                  n(f, h);
                  break;
                }
              else t(f, h);
              h = h.sibling;
            }
            (h = gu(y, f.mode, E)), (h.return = f), (f = h);
          }
          return a(f);
        case Xn:
          return (S = y._init), x(f, h, S(y._payload), E);
      }
      if (si(y)) return g(f, h, y, E);
      if (Wo(y)) return m(f, h, y, E);
      $a(f, y);
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        h !== null && h.tag === 6
          ? (n(f, h.sibling), (h = o(h, y)), (h.return = f), (f = h))
          : (n(f, h), (h = mu(y, f.mode, E)), (h.return = f), (f = h)),
        a(f))
      : n(f, h);
  }
  return x;
}
var Po = F0(!0),
  U0 = F0(!1),
  na = {},
  xn = Sr(na),
  Mi = Sr(na),
  Ii = Sr(na);
function Nr(e) {
  if (e === na) throw Error(B(174));
  return e;
}
function Cd(e, t) {
  switch ((Te(Ii, t), Te(Mi, e), Te(xn, na), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yu(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yu(t, e));
  }
  Ne(xn), Te(xn, t);
}
function $o() {
  Ne(xn), Ne(Mi), Ne(Ii);
}
function B0(e) {
  Nr(Ii.current);
  var t = Nr(xn.current),
    n = Yu(t, e.type);
  t !== n && (Te(Mi, e), Te(xn, n));
}
function bd(e) {
  Mi.current === e && (Ne(xn), Ne(Mi));
}
var De = Sr(0);
function Ts(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var uu = [];
function _d() {
  for (var e = 0; e < uu.length; e++)
    uu[e]._workInProgressVersionPrimary = null;
  uu.length = 0;
}
var Ya = Fn.ReactCurrentDispatcher,
  cu = Fn.ReactCurrentBatchConfig,
  Mr = 0,
  Me = null,
  qe = null,
  nt = null,
  Ps = !1,
  gi = !1,
  zi = 0,
  Nw = 0;
function dt() {
  throw Error(B(321));
}
function Rd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!un(e[n], t[n])) return !1;
  return !0;
}
function Td(e, t, n, r, o, i) {
  if (
    ((Mr = i),
    (Me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ya.current = e === null || e.memoizedState === null ? Lw : Dw),
    (e = n(r, o)),
    gi)
  ) {
    i = 0;
    do {
      if (((gi = !1), (zi = 0), 25 <= i)) throw Error(B(301));
      (i += 1),
        (nt = qe = null),
        (t.updateQueue = null),
        (Ya.current = Mw),
        (e = n(r, o));
    } while (gi);
  }
  if (
    ((Ya.current = $s),
    (t = qe !== null && qe.next !== null),
    (Mr = 0),
    (nt = qe = Me = null),
    (Ps = !1),
    t)
  )
    throw Error(B(300));
  return e;
}
function Pd() {
  var e = zi !== 0;
  return (zi = 0), e;
}
function hn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return nt === null ? (Me.memoizedState = nt = e) : (nt = nt.next = e), nt;
}
function Xt() {
  if (qe === null) {
    var e = Me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = qe.next;
  var t = nt === null ? Me.memoizedState : nt.next;
  if (t !== null) (nt = t), (qe = e);
  else {
    if (e === null) throw Error(B(310));
    (qe = e),
      (e = {
        memoizedState: qe.memoizedState,
        baseState: qe.baseState,
        baseQueue: qe.baseQueue,
        queue: qe.queue,
        next: null,
      }),
      nt === null ? (Me.memoizedState = nt = e) : (nt = nt.next = e);
  }
  return nt;
}
function Fi(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function du(e) {
  var t = Xt(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = qe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Mr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          (Me.lanes |= c),
          (Ir |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = r) : (l.next = s),
      un(r, t.memoizedState) || (kt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Me.lanes |= i), (Ir |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fu(e) {
  var t = Xt(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    un(i, t.memoizedState) || (kt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function H0() {}
function W0(e, t) {
  var n = Me,
    r = Xt(),
    o = t(),
    i = !un(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (kt = !0)),
    (r = r.queue),
    $d(Y0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (nt !== null && nt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ui(9, K0.bind(null, n, r, o, t), void 0, null),
      rt === null)
    )
      throw Error(B(349));
    Mr & 30 || V0(n, t, o);
  }
  return o;
}
function V0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Me.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function K0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), G0(t) && Q0(e);
}
function Y0(e, t, n) {
  return n(function () {
    G0(t) && Q0(e);
  });
}
function G0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !un(e, n);
  } catch {
    return !0;
  }
}
function Q0(e) {
  var t = Dn(e, 1);
  t !== null && sn(t, e, 1, -1);
}
function zp(e) {
  var t = hn();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Aw.bind(null, Me, e)),
    [t.memoizedState, e]
  );
}
function Ui(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Me.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function q0() {
  return Xt().memoizedState;
}
function Ga(e, t, n, r) {
  var o = hn();
  (Me.flags |= e),
    (o.memoizedState = Ui(1 | t, n, void 0, r === void 0 ? null : r));
}
function el(e, t, n, r) {
  var o = Xt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (qe !== null) {
    var a = qe.memoizedState;
    if (((i = a.destroy), r !== null && Rd(r, a.deps))) {
      o.memoizedState = Ui(t, n, i, r);
      return;
    }
  }
  (Me.flags |= e), (o.memoizedState = Ui(1 | t, n, i, r));
}
function Fp(e, t) {
  return Ga(8390656, 8, e, t);
}
function $d(e, t) {
  return el(2048, 8, e, t);
}
function X0(e, t) {
  return el(4, 2, e, t);
}
function J0(e, t) {
  return el(4, 4, e, t);
}
function Z0(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function eg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), el(4, 4, Z0.bind(null, t, e), n)
  );
}
function Nd() {}
function tg(e, t) {
  var n = Xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ng(e, t) {
  var n = Xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function rg(e, t, n) {
  return Mr & 21
    ? (un(n, t) || ((n = a0()), (Me.lanes |= n), (Ir |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (kt = !0)), (e.memoizedState = n));
}
function Ow(e, t) {
  var n = ke;
  (ke = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = cu.transition;
  cu.transition = {};
  try {
    e(!1), t();
  } finally {
    (ke = n), (cu.transition = r);
  }
}
function og() {
  return Xt().memoizedState;
}
function jw(e, t, n) {
  var r = dr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ig(e))
  )
    ag(t, n);
  else if (((n = D0(e, t, n, r)), n !== null)) {
    var o = wt();
    sn(n, e, r, o), sg(n, t, r);
  }
}
function Aw(e, t, n) {
  var r = dr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ig(e)) ag(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), un(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Ed(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = D0(e, t, o, r)),
      n !== null && ((o = wt()), sn(n, e, r, o), sg(n, t, r));
  }
}
function ig(e) {
  var t = e.alternate;
  return e === Me || (t !== null && t === Me);
}
function ag(e, t) {
  gi = Ps = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function sg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ld(e, n);
  }
}
var $s = {
    readContext: qt,
    useCallback: dt,
    useContext: dt,
    useEffect: dt,
    useImperativeHandle: dt,
    useInsertionEffect: dt,
    useLayoutEffect: dt,
    useMemo: dt,
    useReducer: dt,
    useRef: dt,
    useState: dt,
    useDebugValue: dt,
    useDeferredValue: dt,
    useTransition: dt,
    useMutableSource: dt,
    useSyncExternalStore: dt,
    useId: dt,
    unstable_isNewReconciler: !1,
  },
  Lw = {
    readContext: qt,
    useCallback: function (e, t) {
      return (hn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qt,
    useEffect: Fp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ga(4194308, 4, Z0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ga(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ga(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = hn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = hn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = jw.bind(null, Me, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = hn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: zp,
    useDebugValue: Nd,
    useDeferredValue: function (e) {
      return (hn().memoizedState = e);
    },
    useTransition: function () {
      var e = zp(!1),
        t = e[0];
      return (e = Ow.bind(null, e[1])), (hn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Me,
        o = hn();
      if (Ae) {
        if (n === void 0) throw Error(B(407));
        n = n();
      } else {
        if (((n = t()), rt === null)) throw Error(B(349));
        Mr & 30 || V0(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Fp(Y0.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ui(9, K0.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = hn(),
        t = rt.identifierPrefix;
      if (Ae) {
        var n = $n,
          r = Pn;
        (n = (r & ~(1 << (32 - an(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = zi++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Nw++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Dw = {
    readContext: qt,
    useCallback: tg,
    useContext: qt,
    useEffect: $d,
    useImperativeHandle: eg,
    useInsertionEffect: X0,
    useLayoutEffect: J0,
    useMemo: ng,
    useReducer: du,
    useRef: q0,
    useState: function () {
      return du(Fi);
    },
    useDebugValue: Nd,
    useDeferredValue: function (e) {
      var t = Xt();
      return rg(t, qe.memoizedState, e);
    },
    useTransition: function () {
      var e = du(Fi)[0],
        t = Xt().memoizedState;
      return [e, t];
    },
    useMutableSource: H0,
    useSyncExternalStore: W0,
    useId: og,
    unstable_isNewReconciler: !1,
  },
  Mw = {
    readContext: qt,
    useCallback: tg,
    useContext: qt,
    useEffect: $d,
    useImperativeHandle: eg,
    useInsertionEffect: X0,
    useLayoutEffect: J0,
    useMemo: ng,
    useReducer: fu,
    useRef: q0,
    useState: function () {
      return fu(Fi);
    },
    useDebugValue: Nd,
    useDeferredValue: function (e) {
      var t = Xt();
      return qe === null ? (t.memoizedState = e) : rg(t, qe.memoizedState, e);
    },
    useTransition: function () {
      var e = fu(Fi)[0],
        t = Xt().memoizedState;
      return [e, t];
    },
    useMutableSource: H0,
    useSyncExternalStore: W0,
    useId: og,
    unstable_isNewReconciler: !1,
  };
function No(e, t) {
  try {
    var n = '',
      r = t;
    do (n += dv(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function pu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Iw = typeof WeakMap == 'function' ? WeakMap : Map;
function lg(e, t, n) {
  (n = On(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Os || ((Os = !0), (_c = r)), gc(e, t);
    }),
    n
  );
}
function ug(e, t, n) {
  (n = On(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        gc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        gc(e, t),
          typeof r != 'function' &&
            (cr === null ? (cr = new Set([this])) : cr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : '',
        });
      }),
    n
  );
}
function Up(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Iw();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Jw.bind(null, e, t, n)), t.then(e, e));
}
function Bp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Hp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = On(-1, 1)), (t.tag = 2), ur(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var zw = Fn.ReactCurrentOwner,
  kt = !1;
function vt(e, t, n, r) {
  t.child = e === null ? U0(t, null, n, r) : Po(t, e.child, n, r);
}
function Wp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    So(t, o),
    (r = Td(e, t, n, r, i, o)),
    (n = Pd()),
    e !== null && !kt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Mn(e, t, o))
      : (Ae && n && gd(t), (t.flags |= 1), vt(e, t, r, o), t.child)
  );
}
function Vp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !zd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), cg(e, t, i, r, o))
      : ((e = Ja(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ji), n(a, r) && e.ref === t.ref)
    )
      return Mn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = fr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function cg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ji(i, r) && e.ref === t.ref)
      if (((kt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (kt = !0);
      else return (t.lanes = e.lanes), Mn(e, t, o);
  }
  return yc(e, t, n, r, o);
}
function dg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Te(ho, Ot),
        (Ot |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Te(ho, Ot),
          (Ot |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Te(ho, Ot),
        (Ot |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Te(ho, Ot),
      (Ot |= r);
  return vt(e, t, o, n), t.child;
}
function fg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function yc(e, t, n, r, o) {
  var i = Rt(n) ? Lr : mt.current;
  return (
    (i = Ro(t, i)),
    So(t, o),
    (n = Td(e, t, n, r, i, o)),
    (r = Pd()),
    e !== null && !kt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Mn(e, t, o))
      : (Ae && r && gd(t), (t.flags |= 1), vt(e, t, n, o), t.child)
  );
}
function Kp(e, t, n, r, o) {
  if (Rt(n)) {
    var i = !0;
    Es(t);
  } else i = !1;
  if ((So(t, o), t.stateNode === null))
    Qa(e, t), z0(t, n, r), mc(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = qt(u))
      : ((u = Rt(n) ? Lr : mt.current), (u = Ro(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== r || l !== u) && Mp(t, a, r, u)),
      (Jn = !1);
    var p = t.memoizedState;
    (a.state = p),
      Rs(t, r, a, o),
      (l = t.memoizedState),
      s !== r || p !== l || _t.current || Jn
        ? (typeof c == 'function' && (hc(t, n, c, r), (l = t.memoizedState)),
          (s = Jn || Dp(t, n, s, r, p, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      M0(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : tn(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (p = a.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = qt(l))
        : ((l = Rt(n) ? Lr : mt.current), (l = Ro(t, l)));
    var w = n.getDerivedStateFromProps;
    (c =
      typeof w == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== d || p !== l) && Mp(t, a, r, l)),
      (Jn = !1),
      (p = t.memoizedState),
      (a.state = p),
      Rs(t, r, a, o);
    var g = t.memoizedState;
    s !== d || p !== g || _t.current || Jn
      ? (typeof w == 'function' && (hc(t, n, w, r), (g = t.memoizedState)),
        (u = Jn || Dp(t, n, u, r, p, g, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, g, l),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, g, l)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (a.props = r),
        (a.state = g),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vc(e, t, n, r, i, o);
}
function vc(e, t, n, r, o, i) {
  fg(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Np(t, n, !1), Mn(e, t, i);
  (r = t.stateNode), (zw.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Po(t, e.child, null, i)), (t.child = Po(t, null, s, i)))
      : vt(e, t, s, i),
    (t.memoizedState = r.state),
    o && Np(t, n, !0),
    t.child
  );
}
function pg(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $p(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $p(e, t.context, !1),
    Cd(e, t.containerInfo);
}
function Yp(e, t, n, r, o) {
  return To(), vd(o), (t.flags |= 256), vt(e, t, n, r), t.child;
}
var wc = { dehydrated: null, treeContext: null, retryLane: 0 };
function xc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function hg(e, t, n) {
  var r = t.pendingProps,
    o = De.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Te(De, o & 1),
    e === null)
  )
    return (
      fc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = rl(a, r, 0, null)),
              (e = Ar(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = xc(n)),
              (t.memoizedState = wc),
              e)
            : Od(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Fw(e, t, a, r, s, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = fr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = fr(s, i)) : ((i = Ar(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? xc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = wc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = fr(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Od(e, t) {
  return (
    (t = rl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Na(e, t, n, r) {
  return (
    r !== null && vd(r),
    Po(t, e.child, null, n),
    (e = Od(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Fw(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pu(Error(B(422)))), Na(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = rl({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = Ar(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Po(t, e.child, null, a),
        (t.child.memoizedState = xc(a)),
        (t.memoizedState = wc),
        i);
  if (!(t.mode & 1)) return Na(e, t, a, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(B(419))), (r = pu(i, r, void 0)), Na(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), kt || s)) {
    if (((r = rt), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Dn(e, o), sn(r, e, o, -1));
    }
    return Id(), (r = pu(Error(B(421)))), Na(e, t, a, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zw.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (At = lr(o.nextSibling)),
      (Lt = t),
      (Ae = !0),
      (on = null),
      e !== null &&
        ((Vt[Kt++] = Pn),
        (Vt[Kt++] = $n),
        (Vt[Kt++] = Dr),
        (Pn = e.id),
        ($n = e.overflow),
        (Dr = t)),
      (t = Od(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Gp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), pc(e.return, t, n);
}
function hu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function mg(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((vt(e, t, r.children, n), (r = De.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Gp(e, n, t);
        else if (e.tag === 19) Gp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Te(De, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ts(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          hu(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ts(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        hu(t, !0, n, null, i);
        break;
      case 'together':
        hu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qa(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ir |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(B(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Uw(e, t, n) {
  switch (t.tag) {
    case 3:
      pg(t), To();
      break;
    case 5:
      B0(t);
      break;
    case 1:
      Rt(t.type) && Es(t);
      break;
    case 4:
      Cd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Te(bs, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Te(De, De.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? hg(e, t, n)
          : (Te(De, De.current & 1),
            (e = Mn(e, t, n)),
            e !== null ? e.sibling : null);
      Te(De, De.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return mg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Te(De, De.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), dg(e, t, n);
  }
  return Mn(e, t, n);
}
var gg, Sc, yg, vg;
gg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Sc = function () {};
yg = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Nr(xn.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Hu(e, o)), (r = Hu(e, r)), (i = []);
        break;
      case 'select':
        (o = Ie({}, o, { value: void 0 })),
          (r = Ie({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = Ku(e, o)), (r = Ku(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = xs);
    }
    Gu(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (_i.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === 'style')
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') ||
              (i = i || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (_i.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && $e('scroll', e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
vg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qo(e, t) {
  if (!Ae)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ft(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Bw(e, t, n) {
  var r = t.pendingProps;
  switch ((yd(t), t.tag)) {
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
      return ft(t), null;
    case 1:
      return Rt(t.type) && Ss(), ft(t), null;
    case 3:
      return (
        (r = t.stateNode),
        $o(),
        Ne(_t),
        Ne(mt),
        _d(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pa(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), on !== null && (Pc(on), (on = null)))),
        Sc(e, t),
        ft(t),
        null
      );
    case 5:
      bd(t);
      var o = Nr(Ii.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        yg(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(B(166));
          return ft(t), null;
        }
        if (((e = Nr(xn.current)), Pa(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[yn] = t), (r[Di] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              $e('cancel', r), $e('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              $e('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < ui.length; o++) $e(ui[o], r);
              break;
            case 'source':
              $e('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              $e('error', r), $e('load', r);
              break;
            case 'details':
              $e('toggle', r);
              break;
            case 'input':
              rp(r, i), $e('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                $e('invalid', r);
              break;
            case 'textarea':
              ip(r, i), $e('invalid', r);
          }
          Gu(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ta(r.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ta(r.textContent, s, e),
                    (o = ['children', '' + s]))
                : _i.hasOwnProperty(a) &&
                  s != null &&
                  a === 'onScroll' &&
                  $e('scroll', r);
            }
          switch (n) {
            case 'input':
              xa(r), op(r, i, !0);
              break;
            case 'textarea':
              xa(r), ap(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = xs);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Vm(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === 'select' &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[yn] = t),
            (e[Di] = r),
            gg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Qu(n, r)), n)) {
              case 'dialog':
                $e('cancel', e), $e('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                $e('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < ui.length; o++) $e(ui[o], e);
                o = r;
                break;
              case 'source':
                $e('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                $e('error', e), $e('load', e), (o = r);
                break;
              case 'details':
                $e('toggle', e), (o = r);
                break;
              case 'input':
                rp(e, r), (o = Hu(e, r)), $e('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ie({}, r, { value: void 0 })),
                  $e('invalid', e);
                break;
              case 'textarea':
                ip(e, r), (o = Ku(e, r)), $e('invalid', e);
                break;
              default:
                o = r;
            }
            Gu(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === 'style'
                  ? Gm(e, l)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Km(e, l))
                  : i === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Ri(e, l)
                    : typeof l == 'number' && Ri(e, '' + l)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (_i.hasOwnProperty(i)
                      ? l != null && i === 'onScroll' && $e('scroll', e)
                      : l != null && nd(e, i, l, a));
              }
            switch (n) {
              case 'input':
                xa(e), op(e, r, !1);
                break;
              case 'textarea':
                xa(e), ap(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + hr(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? yo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      yo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = xs);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ft(t), null;
    case 6:
      if (e && t.stateNode != null) vg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(B(166));
        if (((n = Nr(Ii.current)), Nr(xn.current), Pa(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yn] = t),
            (i = r.nodeValue !== n) && ((e = Lt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ta(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ta(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yn] = t),
            (t.stateNode = r);
      }
      return ft(t), null;
    case 13:
      if (
        (Ne(De),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ae && At !== null && t.mode & 1 && !(t.flags & 128))
          L0(), To(), (t.flags |= 98560), (i = !1);
        else if (((i = Pa(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(B(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(B(317));
            i[yn] = t;
          } else
            To(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ft(t), (i = !1);
        } else on !== null && (Pc(on), (on = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || De.current & 1 ? Xe === 0 && (Xe = 3) : Id())),
          t.updateQueue !== null && (t.flags |= 4),
          ft(t),
          null);
    case 4:
      return (
        $o(), Sc(e, t), e === null && Ai(t.stateNode.containerInfo), ft(t), null
      );
    case 10:
      return Sd(t.type._context), ft(t), null;
    case 17:
      return Rt(t.type) && Ss(), ft(t), null;
    case 19:
      if ((Ne(De), (i = t.memoizedState), i === null)) return ft(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) qo(i, !1);
        else {
          if (Xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Ts(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    qo(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Te(De, (De.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            We() > Oo &&
            ((t.flags |= 128), (r = !0), qo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ts(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              qo(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !Ae)
            )
              return ft(t), null;
          } else
            2 * We() - i.renderingStartTime > Oo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), qo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = We()),
          (t.sibling = null),
          (n = De.current),
          Te(De, r ? (n & 1) | 2 : n & 1),
          t)
        : (ft(t), null);
    case 22:
    case 23:
      return (
        Md(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ot & 1073741824 && (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ft(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(B(156, t.tag));
}
function Hw(e, t) {
  switch ((yd(t), t.tag)) {
    case 1:
      return (
        Rt(t.type) && Ss(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        $o(),
        Ne(_t),
        Ne(mt),
        _d(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bd(t), null;
    case 13:
      if (
        (Ne(De), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(B(340));
        To();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ne(De), null;
    case 4:
      return $o(), null;
    case 10:
      return Sd(t.type._context), null;
    case 22:
    case 23:
      return Md(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Oa = !1,
  ht = !1,
  Ww = typeof WeakSet == 'function' ? WeakSet : Set,
  Q = null;
function po(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Be(e, t, r);
      }
    else n.current = null;
}
function Ec(e, t, n) {
  try {
    n();
  } catch (r) {
    Be(e, t, r);
  }
}
var Qp = !1;
function Vw(e, t) {
  if (((ic = ys), (e = E0()), md(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (w = d.firstChild) !== null;

            )
              (p = d), (d = w);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++u === o && (s = a),
                p === i && ++c === r && (l = a),
                (w = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = w;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ac = { focusedElem: e, selectionRange: n }, ys = !1, Q = t; Q !== null; )
    if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Q = e);
    else
      for (; Q !== null; ) {
        t = Q;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var m = g.memoizedProps,
                    x = g.memoizedState,
                    f = t.stateNode,
                    h = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : tn(t.type, m),
                      x
                    );
                  f.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(B(163));
            }
        } catch (E) {
          Be(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Q = e);
          break;
        }
        Q = t.return;
      }
  return (g = Qp), (Qp = !1), g;
}
function yi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ec(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function tl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function kc(e) {
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
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function wg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), wg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yn], delete t[Di], delete t[uc], delete t[Rw], delete t[Tw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function xg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || xg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Cc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = xs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cc(e, t, n), e = e.sibling; e !== null; ) Cc(e, t, n), (e = e.sibling);
}
function bc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bc(e, t, n), e = e.sibling; e !== null; ) bc(e, t, n), (e = e.sibling);
}
var at = null,
  nn = !1;
function Gn(e, t, n) {
  for (n = n.child; n !== null; ) Sg(e, t, n), (n = n.sibling);
}
function Sg(e, t, n) {
  if (wn && typeof wn.onCommitFiberUnmount == 'function')
    try {
      wn.onCommitFiberUnmount(Ys, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ht || po(n, t);
    case 6:
      var r = at,
        o = nn;
      (at = null),
        Gn(e, t, n),
        (at = r),
        (nn = o),
        at !== null &&
          (nn
            ? ((e = at),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : at.removeChild(n.stateNode));
      break;
    case 18:
      at !== null &&
        (nn
          ? ((e = at),
            (n = n.stateNode),
            e.nodeType === 8
              ? su(e.parentNode, n)
              : e.nodeType === 1 && su(e, n),
            Ni(e))
          : su(at, n.stateNode));
      break;
    case 4:
      (r = at),
        (o = nn),
        (at = n.stateNode.containerInfo),
        (nn = !0),
        Gn(e, t, n),
        (at = r),
        (nn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ht &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && Ec(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Gn(e, t, n);
      break;
    case 1:
      if (
        !ht &&
        (po(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Be(n, t, s);
        }
      Gn(e, t, n);
      break;
    case 21:
      Gn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ht = (r = ht) || n.memoizedState !== null), Gn(e, t, n), (ht = r))
        : Gn(e, t, n);
      break;
    default:
      Gn(e, t, n);
  }
}
function Xp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ww()),
      t.forEach(function (r) {
        var o = ex.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function en(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (at = s.stateNode), (nn = !1);
              break e;
            case 3:
              (at = s.stateNode.containerInfo), (nn = !0);
              break e;
            case 4:
              (at = s.stateNode.containerInfo), (nn = !0);
              break e;
          }
          s = s.return;
        }
        if (at === null) throw Error(B(160));
        Sg(i, a, o), (at = null), (nn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Be(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Eg(t, e), (t = t.sibling);
}
function Eg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((en(t, e), pn(e), r & 4)) {
        try {
          yi(3, e, e.return), tl(3, e);
        } catch (m) {
          Be(e, e.return, m);
        }
        try {
          yi(5, e, e.return);
        } catch (m) {
          Be(e, e.return, m);
        }
      }
      break;
    case 1:
      en(t, e), pn(e), r & 512 && n !== null && po(n, n.return);
      break;
    case 5:
      if (
        (en(t, e),
        pn(e),
        r & 512 && n !== null && po(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ri(o, '');
        } catch (m) {
          Be(e, e.return, m);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && Hm(o, i),
              Qu(s, a);
            var u = Qu(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === 'style'
                ? Gm(o, d)
                : c === 'dangerouslySetInnerHTML'
                ? Km(o, d)
                : c === 'children'
                ? Ri(o, d)
                : nd(o, c, d, u);
            }
            switch (s) {
              case 'input':
                Wu(o, i);
                break;
              case 'textarea':
                Wm(o, i);
                break;
              case 'select':
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? yo(o, !!i.multiple, w, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? yo(o, !!i.multiple, i.defaultValue, !0)
                      : yo(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Di] = i;
          } catch (m) {
            Be(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((en(t, e), pn(e), r & 4)) {
        if (e.stateNode === null) throw Error(B(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (m) {
          Be(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (en(t, e), pn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ni(t.containerInfo);
        } catch (m) {
          Be(e, e.return, m);
        }
      break;
    case 4:
      en(t, e), pn(e);
      break;
    case 13:
      en(t, e),
        pn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ld = We())),
        r & 4 && Xp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ht = (u = ht) || c), en(t, e), (ht = u)) : en(t, e),
        pn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (Q = e, c = e.child; c !== null; ) {
            for (d = Q = c; Q !== null; ) {
              switch (((p = Q), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yi(4, p, p.return);
                  break;
                case 1:
                  po(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (m) {
                      Be(r, n, m);
                    }
                  }
                  break;
                case 5:
                  po(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Zp(d);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (Q = w)) : Zp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (s.style.display = Ym('display', a)));
              } catch (m) {
                Be(e, e.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps;
              } catch (m) {
                Be(e, e.return, m);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      en(t, e), pn(e), r & 4 && Xp(e);
      break;
    case 21:
      break;
    default:
      en(t, e), pn(e);
  }
}
function pn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (xg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(B(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ri(o, ''), (r.flags &= -33));
          var i = qp(e);
          bc(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = qp(e);
          Cc(e, s, a);
          break;
        default:
          throw Error(B(161));
      }
    } catch (l) {
      Be(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Kw(e, t, n) {
  (Q = e), kg(e);
}
function kg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Q !== null; ) {
    var o = Q,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Oa;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || ht;
        s = Oa;
        var u = ht;
        if (((Oa = a), (ht = l) && !u))
          for (Q = o; Q !== null; )
            (a = Q),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? eh(o)
                : l !== null
                ? ((l.return = a), (Q = l))
                : eh(o);
        for (; i !== null; ) (Q = i), kg(i), (i = i.sibling);
        (Q = o), (Oa = s), (ht = u);
      }
      Jp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (Q = i)) : Jp(e);
  }
}
function Jp(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ht || tl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ht)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Lp(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Lp(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ni(d);
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
              throw Error(B(163));
          }
        ht || (t.flags & 512 && kc(t));
      } catch (p) {
        Be(t, t.return, p);
      }
    }
    if (t === e) {
      Q = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Q = n);
      break;
    }
    Q = t.return;
  }
}
function Zp(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t === e) {
      Q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Q = n);
      break;
    }
    Q = t.return;
  }
}
function eh(e) {
  for (; Q !== null; ) {
    var t = Q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            tl(4, t);
          } catch (l) {
            Be(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Be(t, o, l);
            }
          }
          var i = t.return;
          try {
            kc(t);
          } catch (l) {
            Be(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            kc(t);
          } catch (l) {
            Be(t, a, l);
          }
      }
    } catch (l) {
      Be(t, t.return, l);
    }
    if (t === e) {
      Q = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (Q = s);
      break;
    }
    Q = t.return;
  }
}
var Yw = Math.ceil,
  Ns = Fn.ReactCurrentDispatcher,
  jd = Fn.ReactCurrentOwner,
  Qt = Fn.ReactCurrentBatchConfig,
  ye = 0,
  rt = null,
  Ye = null,
  lt = 0,
  Ot = 0,
  ho = Sr(0),
  Xe = 0,
  Bi = null,
  Ir = 0,
  nl = 0,
  Ad = 0,
  vi = null,
  Et = null,
  Ld = 0,
  Oo = 1 / 0,
  Rn = null,
  Os = !1,
  _c = null,
  cr = null,
  ja = !1,
  rr = null,
  js = 0,
  wi = 0,
  Rc = null,
  qa = -1,
  Xa = 0;
function wt() {
  return ye & 6 ? We() : qa !== -1 ? qa : (qa = We());
}
function dr(e) {
  return e.mode & 1
    ? ye & 2 && lt !== 0
      ? lt & -lt
      : $w.transition !== null
      ? (Xa === 0 && (Xa = a0()), Xa)
      : ((e = ke),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : p0(e.type))),
        e)
    : 1;
}
function sn(e, t, n, r) {
  if (50 < wi) throw ((wi = 0), (Rc = null), Error(B(185)));
  Zi(e, n, r),
    (!(ye & 2) || e !== rt) &&
      (e === rt && (!(ye & 2) && (nl |= n), Xe === 4 && er(e, lt)),
      Tt(e, r),
      n === 1 && ye === 0 && !(t.mode & 1) && ((Oo = We() + 500), Js && Er()));
}
function Tt(e, t) {
  var n = e.callbackNode;
  $v(e, t);
  var r = gs(e, e === rt ? lt : 0);
  if (r === 0)
    n !== null && up(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && up(n), t === 1))
      e.tag === 0 ? Pw(th.bind(null, e)) : O0(th.bind(null, e)),
        bw(function () {
          !(ye & 6) && Er();
        }),
        (n = null);
    else {
      switch (s0(r)) {
        case 1:
          n = sd;
          break;
        case 4:
          n = o0;
          break;
        case 16:
          n = ms;
          break;
        case 536870912:
          n = i0;
          break;
        default:
          n = ms;
      }
      n = Ng(n, Cg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Cg(e, t) {
  if (((qa = -1), (Xa = 0), ye & 6)) throw Error(B(327));
  var n = e.callbackNode;
  if (Eo() && e.callbackNode !== n) return null;
  var r = gs(e, e === rt ? lt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = As(e, r);
  else {
    t = r;
    var o = ye;
    ye |= 2;
    var i = _g();
    (rt !== e || lt !== t) && ((Rn = null), (Oo = We() + 500), jr(e, t));
    do
      try {
        qw();
        break;
      } catch (s) {
        bg(e, s);
      }
    while (!0);
    xd(),
      (Ns.current = i),
      (ye = o),
      Ye !== null ? (t = 0) : ((rt = null), (lt = 0), (t = Xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ec(e)), o !== 0 && ((r = o), (t = Tc(e, o)))), t === 1)
    )
      throw ((n = Bi), jr(e, 0), er(e, r), Tt(e, We()), n);
    if (t === 6) er(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Gw(o) &&
          ((t = As(e, r)),
          t === 2 && ((i = ec(e)), i !== 0 && ((r = i), (t = Tc(e, i)))),
          t === 1))
      )
        throw ((n = Bi), jr(e, 0), er(e, r), Tt(e, We()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(B(345));
        case 2:
          Rr(e, Et, Rn);
          break;
        case 3:
          if (
            (er(e, r), (r & 130023424) === r && ((t = Ld + 500 - We()), 10 < t))
          ) {
            if (gs(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              wt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = lc(Rr.bind(null, e, Et, Rn), t);
            break;
          }
          Rr(e, Et, Rn);
          break;
        case 4:
          if ((er(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - an(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = We() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Yw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = lc(Rr.bind(null, e, Et, Rn), r);
            break;
          }
          Rr(e, Et, Rn);
          break;
        case 5:
          Rr(e, Et, Rn);
          break;
        default:
          throw Error(B(329));
      }
    }
  }
  return Tt(e, We()), e.callbackNode === n ? Cg.bind(null, e) : null;
}
function Tc(e, t) {
  var n = vi;
  return (
    e.current.memoizedState.isDehydrated && (jr(e, t).flags |= 256),
    (e = As(e, t)),
    e !== 2 && ((t = Et), (Et = n), t !== null && Pc(t)),
    e
  );
}
function Pc(e) {
  Et === null ? (Et = e) : Et.push.apply(Et, e);
}
function Gw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!un(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function er(e, t) {
  for (
    t &= ~Ad,
      t &= ~nl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - an(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function th(e) {
  if (ye & 6) throw Error(B(327));
  Eo();
  var t = gs(e, 0);
  if (!(t & 1)) return Tt(e, We()), null;
  var n = As(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ec(e);
    r !== 0 && ((t = r), (n = Tc(e, r)));
  }
  if (n === 1) throw ((n = Bi), jr(e, 0), er(e, t), Tt(e, We()), n);
  if (n === 6) throw Error(B(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rr(e, Et, Rn),
    Tt(e, We()),
    null
  );
}
function Dd(e, t) {
  var n = ye;
  ye |= 1;
  try {
    return e(t);
  } finally {
    (ye = n), ye === 0 && ((Oo = We() + 500), Js && Er());
  }
}
function zr(e) {
  rr !== null && rr.tag === 0 && !(ye & 6) && Eo();
  var t = ye;
  ye |= 1;
  var n = Qt.transition,
    r = ke;
  try {
    if (((Qt.transition = null), (ke = 1), e)) return e();
  } finally {
    (ke = r), (Qt.transition = n), (ye = t), !(ye & 6) && Er();
  }
}
function Md() {
  (Ot = ho.current), Ne(ho);
}
function jr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Cw(n)), Ye !== null))
    for (n = Ye.return; n !== null; ) {
      var r = n;
      switch ((yd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ss();
          break;
        case 3:
          $o(), Ne(_t), Ne(mt), _d();
          break;
        case 5:
          bd(r);
          break;
        case 4:
          $o();
          break;
        case 13:
          Ne(De);
          break;
        case 19:
          Ne(De);
          break;
        case 10:
          Sd(r.type._context);
          break;
        case 22:
        case 23:
          Md();
      }
      n = n.return;
    }
  if (
    ((rt = e),
    (Ye = e = fr(e.current, null)),
    (lt = Ot = t),
    (Xe = 0),
    (Bi = null),
    (Ad = nl = Ir = 0),
    (Et = vi = null),
    $r !== null)
  ) {
    for (t = 0; t < $r.length; t++)
      if (((n = $r[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    $r = null;
  }
  return e;
}
function bg(e, t) {
  do {
    var n = Ye;
    try {
      if ((xd(), (Ya.current = $s), Ps)) {
        for (var r = Me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ps = !1;
      }
      if (
        ((Mr = 0),
        (nt = qe = Me = null),
        (gi = !1),
        (zi = 0),
        (jd.current = null),
        n === null || n.return === null)
      ) {
        (Xe = 1), (Bi = t), (Ye = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = lt),
          (s.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var w = Bp(a);
          if (w !== null) {
            (w.flags &= -257),
              Hp(w, a, s, i, t),
              w.mode & 1 && Up(i, u, t),
              (t = w),
              (l = u);
            var g = t.updateQueue;
            if (g === null) {
              var m = new Set();
              m.add(l), (t.updateQueue = m);
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Up(i, u, t), Id();
              break e;
            }
            l = Error(B(426));
          }
        } else if (Ae && s.mode & 1) {
          var x = Bp(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Hp(x, a, s, i, t),
              vd(No(l, s));
            break e;
          }
        }
        (i = l = No(l, s)),
          Xe !== 4 && (Xe = 2),
          vi === null ? (vi = [i]) : vi.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = lg(i, l, t);
              Ap(i, f);
              break e;
            case 1:
              s = l;
              var h = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (cr === null || !cr.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = ug(i, s, t);
                Ap(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Tg(n);
    } catch (b) {
      (t = b), Ye === n && n !== null && (Ye = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function _g() {
  var e = Ns.current;
  return (Ns.current = $s), e === null ? $s : e;
}
function Id() {
  (Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4),
    rt === null || (!(Ir & 268435455) && !(nl & 268435455)) || er(rt, lt);
}
function As(e, t) {
  var n = ye;
  ye |= 2;
  var r = _g();
  (rt !== e || lt !== t) && ((Rn = null), jr(e, t));
  do
    try {
      Qw();
      break;
    } catch (o) {
      bg(e, o);
    }
  while (!0);
  if ((xd(), (ye = n), (Ns.current = r), Ye !== null)) throw Error(B(261));
  return (rt = null), (lt = 0), Xe;
}
function Qw() {
  for (; Ye !== null; ) Rg(Ye);
}
function qw() {
  for (; Ye !== null && !Sv(); ) Rg(Ye);
}
function Rg(e) {
  var t = $g(e.alternate, e, Ot);
  (e.memoizedProps = e.pendingProps),
    t === null ? Tg(e) : (Ye = t),
    (jd.current = null);
}
function Tg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Hw(n, t)), n !== null)) {
        (n.flags &= 32767), (Ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Xe = 6), (Ye = null);
        return;
      }
    } else if (((n = Bw(n, t, Ot)), n !== null)) {
      Ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ye = t;
      return;
    }
    Ye = t = e;
  } while (t !== null);
  Xe === 0 && (Xe = 5);
}
function Rr(e, t, n) {
  var r = ke,
    o = Qt.transition;
  try {
    (Qt.transition = null), (ke = 1), Xw(e, t, n, r);
  } finally {
    (Qt.transition = o), (ke = r);
  }
  return null;
}
function Xw(e, t, n, r) {
  do Eo();
  while (rr !== null);
  if (ye & 6) throw Error(B(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(B(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Nv(e, i),
    e === rt && ((Ye = rt = null), (lt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ja ||
      ((ja = !0),
      Ng(ms, function () {
        return Eo(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Qt.transition), (Qt.transition = null);
    var a = ke;
    ke = 1;
    var s = ye;
    (ye |= 4),
      (jd.current = null),
      Vw(e, n),
      Eg(n, e),
      yw(ac),
      (ys = !!ic),
      (ac = ic = null),
      (e.current = n),
      Kw(n),
      Ev(),
      (ye = s),
      (ke = a),
      (Qt.transition = i);
  } else e.current = n;
  if (
    (ja && ((ja = !1), (rr = e), (js = o)),
    (i = e.pendingLanes),
    i === 0 && (cr = null),
    bv(n.stateNode),
    Tt(e, We()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Os) throw ((Os = !1), (e = _c), (_c = null), e);
  return (
    js & 1 && e.tag !== 0 && Eo(),
    (i = e.pendingLanes),
    i & 1 ? (e === Rc ? wi++ : ((wi = 0), (Rc = e))) : (wi = 0),
    Er(),
    null
  );
}
function Eo() {
  if (rr !== null) {
    var e = s0(js),
      t = Qt.transition,
      n = ke;
    try {
      if (((Qt.transition = null), (ke = 16 > e ? 16 : e), rr === null))
        var r = !1;
      else {
        if (((e = rr), (rr = null), (js = 0), ye & 6)) throw Error(B(331));
        var o = ye;
        for (ye |= 4, Q = e.current; Q !== null; ) {
          var i = Q,
            a = i.child;
          if (Q.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (Q = u; Q !== null; ) {
                  var c = Q;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yi(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (Q = d);
                  else
                    for (; Q !== null; ) {
                      c = Q;
                      var p = c.sibling,
                        w = c.return;
                      if ((wg(c), c === u)) {
                        Q = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = w), (Q = p);
                        break;
                      }
                      Q = w;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var m = g.child;
                if (m !== null) {
                  g.child = null;
                  do {
                    var x = m.sibling;
                    (m.sibling = null), (m = x);
                  } while (m !== null);
                }
              }
              Q = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (Q = a);
          else
            e: for (; Q !== null; ) {
              if (((i = Q), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yi(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (Q = f);
                break e;
              }
              Q = i.return;
            }
        }
        var h = e.current;
        for (Q = h; Q !== null; ) {
          a = Q;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), (Q = y);
          else
            e: for (a = h; Q !== null; ) {
              if (((s = Q), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tl(9, s);
                  }
                } catch (b) {
                  Be(s, s.return, b);
                }
              if (s === a) {
                Q = null;
                break e;
              }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), (Q = E);
                break e;
              }
              Q = s.return;
            }
        }
        if (
          ((ye = o), Er(), wn && typeof wn.onPostCommitFiberRoot == 'function')
        )
          try {
            wn.onPostCommitFiberRoot(Ys, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ke = n), (Qt.transition = t);
    }
  }
  return !1;
}
function nh(e, t, n) {
  (t = No(n, t)),
    (t = lg(e, t, 1)),
    (e = ur(e, t, 1)),
    (t = wt()),
    e !== null && (Zi(e, 1, t), Tt(e, t));
}
function Be(e, t, n) {
  if (e.tag === 3) nh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        nh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (cr === null || !cr.has(r)))
        ) {
          (e = No(n, e)),
            (e = ug(t, e, 1)),
            (t = ur(t, e, 1)),
            (e = wt()),
            t !== null && (Zi(t, 1, e), Tt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Jw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = wt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    rt === e &&
      (lt & n) === n &&
      (Xe === 4 || (Xe === 3 && (lt & 130023424) === lt && 500 > We() - Ld)
        ? jr(e, 0)
        : (Ad |= n)),
    Tt(e, t);
}
function Pg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ka), (ka <<= 1), !(ka & 130023424) && (ka = 4194304))
      : (t = 1));
  var n = wt();
  (e = Dn(e, t)), e !== null && (Zi(e, t, n), Tt(e, n));
}
function Zw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Pg(e, n);
}
function ex(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(B(314));
  }
  r !== null && r.delete(t), Pg(e, n);
}
var $g;
$g = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _t.current) kt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (kt = !1), Uw(e, t, n);
      kt = !!(e.flags & 131072);
    }
  else (kt = !1), Ae && t.flags & 1048576 && j0(t, Cs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Qa(e, t), (e = t.pendingProps);
      var o = Ro(t, mt.current);
      So(t, n), (o = Td(null, t, r, e, o, n));
      var i = Pd();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Rt(r) ? ((i = !0), Es(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            kd(t),
            (o.updater = Zs),
            (t.stateNode = o),
            (o._reactInternals = t),
            mc(t, r, e, n),
            (t = vc(null, t, r, !0, i, n)))
          : ((t.tag = 0), Ae && i && gd(t), vt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qa(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = nx(r)),
          (e = tn(r, e)),
          o)
        ) {
          case 0:
            t = yc(null, t, r, e, n);
            break e;
          case 1:
            t = Kp(null, t, r, e, n);
            break e;
          case 11:
            t = Wp(null, t, r, e, n);
            break e;
          case 14:
            t = Vp(null, t, r, tn(r.type, e), n);
            break e;
        }
        throw Error(B(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        yc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        Kp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((pg(t), e === null)) throw Error(B(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          M0(e, t),
          Rs(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = No(Error(B(423)), t)), (t = Yp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = No(Error(B(424)), t)), (t = Yp(e, t, r, n, o));
            break e;
          } else
            for (
              At = lr(t.stateNode.containerInfo.firstChild),
                Lt = t,
                Ae = !0,
                on = null,
                n = U0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((To(), r === o)) {
            t = Mn(e, t, n);
            break e;
          }
          vt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        B0(t),
        e === null && fc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        sc(r, o) ? (a = null) : i !== null && sc(r, i) && (t.flags |= 32),
        fg(e, t),
        vt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && fc(t), null;
    case 13:
      return hg(e, t, n);
    case 4:
      return (
        Cd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Po(t, null, r, n)) : vt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        Wp(e, t, r, o, n)
      );
    case 7:
      return vt(e, t, t.pendingProps, n), t.child;
    case 8:
      return vt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return vt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Te(bs, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (un(i.value, a)) {
            if (i.children === o.children && !_t.current) {
              t = Mn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = On(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      pc(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(B(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  pc(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        vt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        So(t, n),
        (o = qt(o)),
        (r = r(o)),
        (t.flags |= 1),
        vt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = tn(r, t.pendingProps)),
        (o = tn(r.type, o)),
        Vp(e, t, r, o, n)
      );
    case 15:
      return cg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        Qa(e, t),
        (t.tag = 1),
        Rt(r) ? ((e = !0), Es(t)) : (e = !1),
        So(t, n),
        z0(t, r, o),
        mc(t, r, o, n),
        vc(null, t, r, !0, e, n)
      );
    case 19:
      return mg(e, t, n);
    case 22:
      return dg(e, t, n);
  }
  throw Error(B(156, t.tag));
};
function Ng(e, t) {
  return r0(e, t);
}
function tx(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Gt(e, t, n, r) {
  return new tx(e, t, n, r);
}
function zd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function nx(e) {
  if (typeof e == 'function') return zd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === od)) return 11;
    if (e === id) return 14;
  }
  return 2;
}
function fr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Gt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ja(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == 'function')) zd(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case ro:
        return Ar(n.children, o, i, t);
      case rd:
        (a = 8), (o |= 8);
        break;
      case zu:
        return (
          (e = Gt(12, n, t, o | 2)), (e.elementType = zu), (e.lanes = i), e
        );
      case Fu:
        return (e = Gt(13, n, t, o)), (e.elementType = Fu), (e.lanes = i), e;
      case Uu:
        return (e = Gt(19, n, t, o)), (e.elementType = Uu), (e.lanes = i), e;
      case Fm:
        return rl(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Im:
              a = 10;
              break e;
            case zm:
              a = 9;
              break e;
            case od:
              a = 11;
              break e;
            case id:
              a = 14;
              break e;
            case Xn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(B(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Gt(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ar(e, t, n, r) {
  return (e = Gt(7, e, r, t)), (e.lanes = n), e;
}
function rl(e, t, n, r) {
  return (
    (e = Gt(22, e, r, t)),
    (e.elementType = Fm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function mu(e, t, n) {
  return (e = Gt(6, e, null, t)), (e.lanes = n), e;
}
function gu(e, t, n) {
  return (
    (t = Gt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function rx(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ql(0)),
    (this.expirationTimes = ql(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ql(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Fd(e, t, n, r, o, i, a, s, l) {
  return (
    (e = new rx(e, t, n, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Gt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    kd(i),
    e
  );
}
function ox(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: no,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Og(e) {
  if (!e) return mr;
  e = e._reactInternals;
  e: {
    if (Hr(e) !== e || e.tag !== 1) throw Error(B(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(B(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Rt(n)) return N0(e, n, t);
  }
  return t;
}
function jg(e, t, n, r, o, i, a, s, l) {
  return (
    (e = Fd(n, r, !0, e, o, i, a, s, l)),
    (e.context = Og(null)),
    (n = e.current),
    (r = wt()),
    (o = dr(n)),
    (i = On(r, o)),
    (i.callback = t ?? null),
    ur(n, i, o),
    (e.current.lanes = o),
    Zi(e, o, r),
    Tt(e, r),
    e
  );
}
function ol(e, t, n, r) {
  var o = t.current,
    i = wt(),
    a = dr(o);
  return (
    (n = Og(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = On(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ur(o, t, a)),
    e !== null && (sn(e, o, a, i), Ka(e, o, a)),
    a
  );
}
function Ls(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ud(e, t) {
  rh(e, t), (e = e.alternate) && rh(e, t);
}
function ix() {
  return null;
}
var Ag =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Bd(e) {
  this._internalRoot = e;
}
il.prototype.render = Bd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(B(409));
  ol(e, t, null, null);
};
il.prototype.unmount = Bd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zr(function () {
      ol(null, e, null, null);
    }),
      (t[Ln] = null);
  }
};
function il(e) {
  this._internalRoot = e;
}
il.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = c0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zn.length && t !== 0 && t < Zn[n].priority; n++);
    Zn.splice(n, 0, e), n === 0 && f0(e);
  }
};
function Hd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function al(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function oh() {}
function ax(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = Ls(a);
        i.call(u);
      };
    }
    var a = jg(t, r, e, 0, null, !1, !1, '', oh);
    return (
      (e._reactRootContainer = a),
      (e[Ln] = a.current),
      Ai(e.nodeType === 8 ? e.parentNode : e),
      zr(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var u = Ls(l);
      s.call(u);
    };
  }
  var l = Fd(e, 0, !1, null, null, !1, !1, '', oh);
  return (
    (e._reactRootContainer = l),
    (e[Ln] = l.current),
    Ai(e.nodeType === 8 ? e.parentNode : e),
    zr(function () {
      ol(t, l, n, r);
    }),
    l
  );
}
function sl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == 'function') {
      var s = o;
      o = function () {
        var l = Ls(a);
        s.call(l);
      };
    }
    ol(t, a, e, o);
  } else a = ax(n, t, e, o, r);
  return Ls(a);
}
l0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = li(t.pendingLanes);
        n !== 0 &&
          (ld(t, n | 1), Tt(t, We()), !(ye & 6) && ((Oo = We() + 500), Er()));
      }
      break;
    case 13:
      zr(function () {
        var r = Dn(e, 1);
        if (r !== null) {
          var o = wt();
          sn(r, e, 1, o);
        }
      }),
        Ud(e, 1);
  }
};
ud = function (e) {
  if (e.tag === 13) {
    var t = Dn(e, 134217728);
    if (t !== null) {
      var n = wt();
      sn(t, e, 134217728, n);
    }
    Ud(e, 134217728);
  }
};
u0 = function (e) {
  if (e.tag === 13) {
    var t = dr(e),
      n = Dn(e, t);
    if (n !== null) {
      var r = wt();
      sn(n, e, t, r);
    }
    Ud(e, t);
  }
};
c0 = function () {
  return ke;
};
d0 = function (e, t) {
  var n = ke;
  try {
    return (ke = e), t();
  } finally {
    ke = n;
  }
};
Xu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Wu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Xs(r);
            if (!o) throw Error(B(90));
            Bm(r), Wu(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Wm(e, n);
      break;
    case 'select':
      (t = n.value), t != null && yo(e, !!n.multiple, t, !1);
  }
};
Xm = Dd;
Jm = zr;
var sx = { usingClientEntryPoint: !1, Events: [ta, so, Xs, Qm, qm, Dd] },
  Xo = {
    findFiberByHostInstance: Pr,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  lx = {
    bundleType: Xo.bundleType,
    version: Xo.version,
    rendererPackageName: Xo.rendererPackageName,
    rendererConfig: Xo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Fn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = t0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Xo.findFiberByHostInstance || ix,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Aa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Aa.isDisabled && Aa.supportsFiber)
    try {
      (Ys = Aa.inject(lx)), (wn = Aa);
    } catch {}
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sx;
It.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hd(t)) throw Error(B(200));
  return ox(e, t, null, n);
};
It.createRoot = function (e, t) {
  if (!Hd(e)) throw Error(B(299));
  var n = !1,
    r = '',
    o = Ag;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Fd(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ln] = t.current),
    Ai(e.nodeType === 8 ? e.parentNode : e),
    new Bd(t)
  );
};
It.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(B(188))
      : ((e = Object.keys(e).join(',')), Error(B(268, e)));
  return (e = t0(t)), (e = e === null ? null : e.stateNode), e;
};
It.flushSync = function (e) {
  return zr(e);
};
It.hydrate = function (e, t, n) {
  if (!al(t)) throw Error(B(200));
  return sl(null, e, t, !0, n);
};
It.hydrateRoot = function (e, t, n) {
  if (!Hd(e)) throw Error(B(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    a = Ag;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = jg(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Ln] = t.current),
    Ai(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new il(t);
};
It.render = function (e, t, n) {
  if (!al(t)) throw Error(B(200));
  return sl(null, e, t, !1, n);
};
It.unmountComponentAtNode = function (e) {
  if (!al(e)) throw Error(B(40));
  return e._reactRootContainer
    ? (zr(function () {
        sl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ln] = null);
        });
      }),
      !0)
    : !1;
};
It.unstable_batchedUpdates = Dd;
It.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!al(n)) throw Error(B(200));
  if (e == null || e._reactInternals === void 0) throw Error(B(38));
  return sl(e, t, n, !1, r);
};
It.version = '18.2.0-next-9e3b772b8-20220608';
function Lg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lg);
    } catch (e) {
      console.error(e);
    }
}
Lg(), (jm.exports = It);
var Wd = jm.exports;
const ux = Xi(Wd),
  cx = Sm({ __proto__: null, default: ux }, [Wd]);
var ih = Wd;
(Mu.createRoot = ih.createRoot), (Mu.hydrateRoot = ih.hydrateRoot);
/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Le() {
  return (
    (Le = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Le.apply(this, arguments)
  );
}
var He;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(He || (He = {}));
const ah = 'popstate';
function dx(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: s } = r.location;
    return Hi(
      '',
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : gr(o);
  }
  return px(t, n, null, e);
}
function ce(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Fr(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function fx() {
  return Math.random().toString(36).substr(2, 8);
}
function sh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Hi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Le(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Un(t) : t,
      { state: n, key: (t && t.key) || r || fx() }
    )
  );
}
function gr(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Un(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function px(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    s = He.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), a.replaceState(Le({}, a.state, { idx: u }), ''));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    s = He.Pop;
    let x = c(),
      f = x == null ? null : x - u;
    (u = x), l && l({ action: s, location: m.location, delta: f });
  }
  function p(x, f) {
    s = He.Push;
    let h = Hi(m.location, x, f);
    n && n(h, x), (u = c() + 1);
    let y = sh(h, u),
      E = m.createHref(h);
    try {
      a.pushState(y, '', E);
    } catch (b) {
      if (b instanceof DOMException && b.name === 'DataCloneError') throw b;
      o.location.assign(E);
    }
    i && l && l({ action: s, location: m.location, delta: 1 });
  }
  function w(x, f) {
    s = He.Replace;
    let h = Hi(m.location, x, f);
    n && n(h, x), (u = c());
    let y = sh(h, u),
      E = m.createHref(h);
    a.replaceState(y, '', E),
      i && l && l({ action: s, location: m.location, delta: 0 });
  }
  function g(x) {
    let f = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      h = typeof x == 'string' ? x : gr(x);
    return (
      ce(
        f,
        'No window.location.(origin|href) available to create URL for href: ' +
          h
      ),
      new URL(h, f)
    );
  }
  let m = {
    get action() {
      return s;
    },
    get location() {
      return e(o, a);
    },
    listen(x) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(ah, d),
        (l = x),
        () => {
          o.removeEventListener(ah, d), (l = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: g,
    encodeLocation(x) {
      let f = g(x);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: p,
    replace: w,
    go(x) {
      return a.go(x);
    },
  };
  return m;
}
var Ue;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Ue || (Ue = {}));
const hx = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function mx(e) {
  return e.index === !0;
}
function $c(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let a = [...n, i],
        s = typeof o.id == 'string' ? o.id : a.join('-');
      if (
        (ce(
          o.index !== !0 || !o.children,
          'Cannot specify children on an index route'
        ),
        ce(
          !r[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        mx(o))
      ) {
        let l = Le({}, o, t(o), { id: s });
        return (r[s] = l), l;
      } else {
        let l = Le({}, o, t(o), { id: s, children: void 0 });
        return (
          (r[s] = l), o.children && (l.children = $c(o.children, t, a, r)), l
        );
      }
    })
  );
}
function mo(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Un(t) : t,
    o = Cn(r.pathname || '/', n);
  if (o == null) return null;
  let i = Dg(e);
  yx(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) a = _x(i[s], Tx(o));
  return a;
}
function gx(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function Dg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, a, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || '' : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    l.relativePath.startsWith('/') &&
      (ce(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Sn([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (ce(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".')
      ),
      Dg(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Cx(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var s;
      if (i.path === '' || !((s = i.path) != null && s.includes('?'))) o(i, a);
      else for (let l of Mg(i.path)) o(i, a, l);
    }),
    t
  );
}
function Mg(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let a = Mg(r.join('/')),
    s = [];
  return (
    s.push(...a.map((l) => (l === '' ? i : [i, l].join('/')))),
    o && s.push(...a),
    s.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  );
}
function yx(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : bx(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const vx = /^:\w+$/,
  wx = 3,
  xx = 2,
  Sx = 1,
  Ex = 10,
  kx = -2,
  lh = (e) => e === '*';
function Cx(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(lh) && (r += kx),
    t && (r += xx),
    n
      .filter((o) => !lh(o))
      .reduce((o, i) => o + (vx.test(i) ? wx : i === '' ? Sx : Ex), r)
  );
}
function bx(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function _x(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      l = a === n.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      c = Nc(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = s.route;
    i.push({
      params: r,
      pathname: Sn([o, c.pathname]),
      pathnameBase: Ox(Sn([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== '/' && (o = Sn([o, c.pathnameBase]));
  }
  return i;
}
function Nc(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Rx(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, '$1'),
    s = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: p, isOptional: w } = c;
      if (p === '*') {
        let m = s[d] || '';
        a = i.slice(0, i.length - m.length).replace(/(.)\/+$/, '$1');
      }
      const g = s[d];
      return w && !g ? (u[p] = void 0) : (u[p] = Px(g || '', p)), u;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function Rx(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Fr(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:(\w+)(\?)?/g,
          (a, s, l) => (
            r.push({ paramName: s, isOptional: l != null }),
            l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function Tx(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Fr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Px(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Fr(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function Cn(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function $x(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? Un(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Nx(n, t)) : t,
    search: jx(r),
    hash: Ax(o),
  };
}
function Nx(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function yu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ig(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Vd(e, t) {
  let n = Ig(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Kd(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = Un(e))
    : ((o = Le({}, e)),
      ce(
        !o.pathname || !o.pathname.includes('?'),
        yu('?', 'pathname', 'search', o)
      ),
      ce(
        !o.pathname || !o.pathname.includes('#'),
        yu('#', 'pathname', 'hash', o)
      ),
      ce(!o.search || !o.search.includes('#'), yu('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    a = i ? '/' : o.pathname,
    s;
  if (a == null) s = n;
  else if (r) {
    let d = t.length === 0 ? [] : t[t.length - 1].replace(/^\//, '').split('/');
    if (a.startsWith('..')) {
      let p = a.split('/');
      for (; p[0] === '..'; ) p.shift(), d.pop();
      o.pathname = p.join('/');
    }
    s = '/' + d.join('/');
  } else {
    let d = t.length - 1;
    if (a.startsWith('..')) {
      let p = a.split('/');
      for (; p[0] === '..'; ) p.shift(), (d -= 1);
      o.pathname = p.join('/');
    }
    s = d >= 0 ? t[d] : '/';
  }
  let l = $x(o, s),
    u = a && a !== '/' && a.endsWith('/'),
    c = (i || a === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
}
const Sn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Ox = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  jx = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Ax = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e),
  kr = function (t, n) {
    n === void 0 && (n = 302);
    let r = n;
    typeof r == 'number'
      ? (r = { status: r })
      : typeof r.status > 'u' && (r.status = 302);
    let o = new Headers(r.headers);
    return o.set('Location', t), new Response(null, Le({}, r, { headers: o }));
  };
class Yd {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function zg(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Fg = ['post', 'put', 'patch', 'delete'],
  Lx = new Set(Fg),
  Dx = ['get', ...Fg],
  Mx = new Set(Dx),
  Ix = new Set([301, 302, 303, 307, 308]),
  zx = new Set([307, 308]),
  vu = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Fx = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Jo = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Ug = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ux = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Bg = 'remix-router-transitions';
function Bx(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  ce(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let C = e.detectErrorBoundary;
    o = (P) => ({ hasErrorBoundary: C(P) });
  } else o = Ux;
  let i = {},
    a = $c(e.routes, o, void 0, i),
    s,
    l = e.basename || '/',
    u = Le(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    c = null,
    d = new Set(),
    p = null,
    w = null,
    g = null,
    m = e.hydrationData != null,
    x = mo(a, e.history.location, l),
    f = null;
  if (x == null) {
    let C = Ht(404, { pathname: e.history.location.pathname }),
      { matches: P, route: O } = gh(a);
    (x = P), (f = { [O.id]: C });
  }
  let h,
    y = x.some((C) => C.route.lazy),
    E = x.some((C) => C.route.loader);
  if (y) h = !1;
  else if (!E) h = !0;
  else if (u.v7_partialHydration) {
    let C = e.hydrationData ? e.hydrationData.loaderData : null,
      P = e.hydrationData ? e.hydrationData.errors : null;
    h = x.every(
      (O) =>
        O.route.loader &&
        O.route.loader.hydrate !== !0 &&
        ((C && C[O.route.id] !== void 0) || (P && P[O.route.id] !== void 0))
    );
  } else h = e.hydrationData != null;
  let b,
    S = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: x,
      initialized: h,
      navigation: vu,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || f,
      fetchers: new Map(),
      blockers: new Map(),
    },
    _ = He.Pop,
    $ = !1,
    H,
    N = !1,
    V = new Map(),
    X = null,
    re = !1,
    W = !1,
    I = [],
    L = [],
    D = new Map(),
    R = 0,
    M = -1,
    z = new Map(),
    q = new Set(),
    A = new Map(),
    F = new Map(),
    U = new Set(),
    G = new Map(),
    T = new Map(),
    ie = !1;
  function K() {
    if (
      ((c = e.history.listen((C) => {
        let { action: P, location: O, delta: Y } = C;
        if (ie) {
          ie = !1;
          return;
        }
        Fr(
          T.size === 0 || Y != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let J = Gf({
          currentLocation: S.location,
          nextLocation: O,
          historyAction: P,
        });
        if (J && Y != null) {
          (ie = !0),
            e.history.go(Y * -1),
            ma(J, {
              state: 'blocked',
              location: O,
              proceed() {
                ma(J, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: O,
                }),
                  e.history.go(Y);
              },
              reset() {
                let de = new Map(S.blockers);
                de.set(J, Jo), ne({ blockers: de });
              },
            });
          return;
        }
        return ue(P, O);
      })),
      n)
    ) {
      eS(t, V);
      let C = () => tS(t, V);
      t.addEventListener('pagehide', C),
        (X = () => t.removeEventListener('pagehide', C));
    }
    return S.initialized || ue(He.Pop, S.location, { initialHydration: !0 }), b;
  }
  function ve() {
    c && c(),
      X && X(),
      d.clear(),
      H && H.abort(),
      S.fetchers.forEach((C, P) => Vn(P)),
      S.blockers.forEach((C, P) => Yf(P));
  }
  function ae(C) {
    return d.add(C), () => d.delete(C);
  }
  function ne(C, P) {
    P === void 0 && (P = {}), (S = Le({}, S, C));
    let O = [],
      Y = [];
    u.v7_fetcherPersist &&
      S.fetchers.forEach((J, de) => {
        J.state === 'idle' && (U.has(de) ? Y.push(de) : O.push(de));
      }),
      [...d].forEach((J) =>
        J(S, {
          deletedFetchers: Y,
          unstable_viewTransitionOpts: P.viewTransitionOpts,
          unstable_flushSync: P.flushSync === !0,
        })
      ),
      u.v7_fetcherPersist &&
        (O.forEach((J) => S.fetchers.delete(J)), Y.forEach((J) => Vn(J)));
  }
  function Z(C, P, O) {
    var Y, J;
    let { flushSync: de } = O === void 0 ? {} : O,
      se =
        S.actionData != null &&
        S.navigation.formMethod != null &&
        rn(S.navigation.formMethod) &&
        S.navigation.state === 'loading' &&
        ((Y = C.state) == null ? void 0 : Y._isRedirect) !== !0,
      oe;
    P.actionData
      ? Object.keys(P.actionData).length > 0
        ? (oe = P.actionData)
        : (oe = null)
      : se
      ? (oe = S.actionData)
      : (oe = null);
    let te = P.loaderData
        ? mh(S.loaderData, P.loaderData, P.matches || [], P.errors)
        : S.loaderData,
      he = S.blockers;
    he.size > 0 && ((he = new Map(he)), he.forEach((Re, it) => he.set(it, Jo)));
    let et =
      $ === !0 ||
      (S.navigation.formMethod != null &&
        rn(S.navigation.formMethod) &&
        ((J = C.state) == null ? void 0 : J._isRedirect) !== !0);
    s && ((a = s), (s = void 0)),
      re ||
        _ === He.Pop ||
        (_ === He.Push
          ? e.history.push(C, C.state)
          : _ === He.Replace && e.history.replace(C, C.state));
    let fe;
    if (_ === He.Pop) {
      let Re = V.get(S.location.pathname);
      Re && Re.has(C.pathname)
        ? (fe = { currentLocation: S.location, nextLocation: C })
        : V.has(C.pathname) &&
          (fe = { currentLocation: C, nextLocation: S.location });
    } else if (N) {
      let Re = V.get(S.location.pathname);
      Re
        ? Re.add(C.pathname)
        : ((Re = new Set([C.pathname])), V.set(S.location.pathname, Re)),
        (fe = { currentLocation: S.location, nextLocation: C });
    }
    ne(
      Le({}, P, {
        actionData: oe,
        loaderData: te,
        historyAction: _,
        location: C,
        initialized: !0,
        navigation: vu,
        revalidation: 'idle',
        restoreScrollPosition: qf(C, P.matches || S.matches),
        preventScrollReset: et,
        blockers: he,
      }),
      { viewTransitionOpts: fe, flushSync: de === !0 }
    ),
      (_ = He.Pop),
      ($ = !1),
      (N = !1),
      (re = !1),
      (W = !1),
      (I = []),
      (L = []);
  }
  async function Pe(C, P) {
    if (typeof C == 'number') {
      e.history.go(C);
      return;
    }
    let O = Oc(
        S.location,
        S.matches,
        l,
        u.v7_prependBasename,
        C,
        u.v7_relativeSplatPath,
        P == null ? void 0 : P.fromRouteId,
        P == null ? void 0 : P.relative
      ),
      {
        path: Y,
        submission: J,
        error: de,
      } = uh(u.v7_normalizeFormMethod, !1, O, P),
      se = S.location,
      oe = Hi(S.location, Y, P && P.state);
    oe = Le({}, oe, e.history.encodeLocation(oe));
    let te = P && P.replace != null ? P.replace : void 0,
      he = He.Push;
    te === !0
      ? (he = He.Replace)
      : te === !1 ||
        (J != null &&
          rn(J.formMethod) &&
          J.formAction === S.location.pathname + S.location.search &&
          (he = He.Replace));
    let et =
        P && 'preventScrollReset' in P ? P.preventScrollReset === !0 : void 0,
      fe = (P && P.unstable_flushSync) === !0,
      Re = Gf({ currentLocation: se, nextLocation: oe, historyAction: he });
    if (Re) {
      ma(Re, {
        state: 'blocked',
        location: oe,
        proceed() {
          ma(Re, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: oe,
          }),
            Pe(C, P);
        },
        reset() {
          let it = new Map(S.blockers);
          it.set(Re, Jo), ne({ blockers: it });
        },
      });
      return;
    }
    return await ue(he, oe, {
      submission: J,
      pendingError: de,
      preventScrollReset: et,
      replace: P && P.replace,
      enableViewTransition: P && P.unstable_viewTransition,
      flushSync: fe,
    });
  }
  function ct() {
    if (
      (yt(),
      ne({ revalidation: 'loading' }),
      S.navigation.state !== 'submitting')
    ) {
      if (S.navigation.state === 'idle') {
        ue(S.historyAction, S.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      ue(_ || S.historyAction, S.navigation.location, {
        overrideNavigation: S.navigation,
      });
    }
  }
  async function ue(C, P, O) {
    H && H.abort(),
      (H = null),
      (_ = C),
      (re = (O && O.startUninterruptedRevalidation) === !0),
      Ly(S.location, S.matches),
      ($ = (O && O.preventScrollReset) === !0),
      (N = (O && O.enableViewTransition) === !0);
    let Y = s || a,
      J = O && O.overrideNavigation,
      de = mo(Y, P, l),
      se = (O && O.flushSync) === !0;
    if (!de) {
      let it = Ht(404, { pathname: P.pathname }),
        { matches: Ut, route: tt } = gh(Y);
      Fl(),
        Z(
          P,
          { matches: Ut, loaderData: {}, errors: { [tt.id]: it } },
          { flushSync: se }
        );
      return;
    }
    if (
      S.initialized &&
      !W &&
      Gx(S.location, P) &&
      !(O && O.submission && rn(O.submission.formMethod))
    ) {
      Z(P, { matches: de }, { flushSync: se });
      return;
    }
    H = new AbortController();
    let oe = ei(e.history, P, H.signal, O && O.submission),
      te,
      he;
    if (O && O.pendingError) he = { [xi(de).route.id]: O.pendingError };
    else if (O && O.submission && rn(O.submission.formMethod)) {
      let it = await Ze(oe, P, O.submission, de, {
        replace: O.replace,
        flushSync: se,
      });
      if (it.shortCircuited) return;
      (te = it.pendingActionData),
        (he = it.pendingActionError),
        (J = wu(P, O.submission)),
        (se = !1),
        (oe = new Request(oe.url, { signal: oe.signal }));
    }
    let {
      shortCircuited: et,
      loaderData: fe,
      errors: Re,
    } = await we(
      oe,
      P,
      de,
      J,
      O && O.submission,
      O && O.fetcherSubmission,
      O && O.replace,
      O && O.initialHydration === !0,
      se,
      te,
      he
    );
    et ||
      ((H = null),
      Z(
        P,
        Le({ matches: de }, te ? { actionData: te } : {}, {
          loaderData: fe,
          errors: Re,
        })
      ));
  }
  async function Ze(C, P, O, Y, J) {
    J === void 0 && (J = {}), yt();
    let de = Jx(P, O);
    ne({ navigation: de }, { flushSync: J.flushSync === !0 });
    let se,
      oe = Ac(Y, P);
    if (!oe.route.action && !oe.route.lazy)
      se = {
        type: Ue.error,
        error: Ht(405, {
          method: C.method,
          pathname: P.pathname,
          routeId: oe.route.id,
        }),
      };
    else if (
      ((se = await Zo('action', C, oe, Y, i, o, l, u.v7_relativeSplatPath)),
      C.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (ko(se)) {
      let te;
      return (
        J && J.replace != null
          ? (te = J.replace)
          : (te = se.location === S.location.pathname + S.location.search),
        await cn(S, se, { submission: O, replace: te }),
        { shortCircuited: !0 }
      );
    }
    if (Si(se)) {
      let te = xi(Y, oe.route.id);
      return (
        (J && J.replace) !== !0 && (_ = He.Push),
        {
          pendingActionData: {},
          pendingActionError: { [te.route.id]: se.error },
        }
      );
    }
    if (Or(se)) throw Ht(400, { type: 'defer-action' });
    return { pendingActionData: { [oe.route.id]: se.data } };
  }
  async function we(C, P, O, Y, J, de, se, oe, te, he, et) {
    let fe = Y || wu(P, J),
      Re = J || de || wh(fe),
      it = s || a,
      [Ut, tt] = ch(
        e.history,
        S,
        O,
        Re,
        P,
        u.v7_partialHydration && oe === !0,
        W,
        I,
        L,
        U,
        A,
        q,
        it,
        l,
        he,
        et
      );
    if (
      (Fl(
        (_e) =>
          !(O && O.some((Oe) => Oe.route.id === _e)) ||
          (Ut && Ut.some((Oe) => Oe.route.id === _e))
      ),
      (M = ++R),
      Ut.length === 0 && tt.length === 0)
    ) {
      let _e = Vf();
      return (
        Z(
          P,
          Le(
            { matches: O, loaderData: {}, errors: et || null },
            he ? { actionData: he } : {},
            _e ? { fetchers: new Map(S.fetchers) } : {}
          ),
          { flushSync: te }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!re && (!u.v7_partialHydration || !oe)) {
      tt.forEach((Oe) => {
        let fn = S.fetchers.get(Oe.key),
          ya = ti(void 0, fn ? fn.data : void 0);
        S.fetchers.set(Oe.key, ya);
      });
      let _e = he || S.actionData;
      ne(
        Le(
          { navigation: fe },
          _e
            ? Object.keys(_e).length === 0
              ? { actionData: null }
              : { actionData: _e }
            : {},
          tt.length > 0 ? { fetchers: new Map(S.fetchers) } : {}
        ),
        { flushSync: te }
      );
    }
    tt.forEach((_e) => {
      D.has(_e.key) && Kn(_e.key),
        _e.controller && D.set(_e.key, _e.controller);
    });
    let Yr = () => tt.forEach((_e) => Kn(_e.key));
    H && H.signal.addEventListener('abort', Yr);
    let {
      results: Ul,
      loaderResults: Gr,
      fetcherResults: Yn,
    } = await Wn(S.matches, O, Ut, tt, C);
    if (C.signal.aborted) return { shortCircuited: !0 };
    H && H.signal.removeEventListener('abort', Yr),
      tt.forEach((_e) => D.delete(_e.key));
    let br = yh(Ul);
    if (br) {
      if (br.idx >= Ut.length) {
        let _e = tt[br.idx - Ut.length].key;
        q.add(_e);
      }
      return await cn(S, br.result, { replace: se }), { shortCircuited: !0 };
    }
    let { loaderData: Bl, errors: Hl } = hh(S, O, Ut, Gr, et, tt, Yn, G);
    G.forEach((_e, Oe) => {
      _e.subscribe((fn) => {
        (fn || _e.done) && G.delete(Oe);
      });
    });
    let Wl = Vf(),
      Qr = Kf(M),
      ga = Wl || Qr || tt.length > 0;
    return Le(
      { loaderData: Bl, errors: Hl },
      ga ? { fetchers: new Map(S.fetchers) } : {}
    );
  }
  function Ge(C, P, O, Y) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    D.has(C) && Kn(C);
    let J = (Y && Y.unstable_flushSync) === !0,
      de = s || a,
      se = Oc(
        S.location,
        S.matches,
        l,
        u.v7_prependBasename,
        O,
        u.v7_relativeSplatPath,
        P,
        Y == null ? void 0 : Y.relative
      ),
      oe = mo(de, se, l);
    if (!oe) {
      be(C, P, Ht(404, { pathname: se }), { flushSync: J });
      return;
    }
    let {
      path: te,
      submission: he,
      error: et,
    } = uh(u.v7_normalizeFormMethod, !0, se, Y);
    if (et) {
      be(C, P, et, { flushSync: J });
      return;
    }
    let fe = Ac(oe, te);
    if ((($ = (Y && Y.preventScrollReset) === !0), he && rn(he.formMethod))) {
      Cr(C, P, te, fe, oe, J, he);
      return;
    }
    A.set(C, { routeId: P, path: te }), Qe(C, P, te, fe, oe, J, he);
  }
  async function Cr(C, P, O, Y, J, de, se) {
    if ((yt(), A.delete(C), !Y.route.action && !Y.route.lazy)) {
      let Oe = Ht(405, { method: se.formMethod, pathname: O, routeId: P });
      be(C, P, Oe, { flushSync: de });
      return;
    }
    let oe = S.fetchers.get(C);
    ee(C, Zx(se, oe), { flushSync: de });
    let te = new AbortController(),
      he = ei(e.history, O, te.signal, se);
    D.set(C, te);
    let et = R,
      fe = await Zo('action', he, Y, J, i, o, l, u.v7_relativeSplatPath);
    if (he.signal.aborted) {
      D.get(C) === te && D.delete(C);
      return;
    }
    if (U.has(C)) {
      ee(C, qn(void 0));
      return;
    }
    if (ko(fe))
      if ((D.delete(C), M > et)) {
        ee(C, qn(void 0));
        return;
      } else
        return q.add(C), ee(C, ti(se)), cn(S, fe, { fetcherSubmission: se });
    if (Si(fe)) {
      be(C, P, fe.error);
      return;
    }
    if (Or(fe)) throw Ht(400, { type: 'defer-action' });
    let Re = S.navigation.location || S.location,
      it = ei(e.history, Re, te.signal),
      Ut = s || a,
      tt =
        S.navigation.state !== 'idle'
          ? mo(Ut, S.navigation.location, l)
          : S.matches;
    ce(tt, "Didn't find any matches after fetcher action");
    let Yr = ++R;
    z.set(C, Yr);
    let Ul = ti(se, fe.data);
    S.fetchers.set(C, Ul);
    let [Gr, Yn] = ch(
      e.history,
      S,
      tt,
      se,
      Re,
      !1,
      W,
      I,
      L,
      U,
      A,
      q,
      Ut,
      l,
      { [Y.route.id]: fe.data },
      void 0
    );
    Yn.filter((Oe) => Oe.key !== C).forEach((Oe) => {
      let fn = Oe.key,
        ya = S.fetchers.get(fn),
        My = ti(void 0, ya ? ya.data : void 0);
      S.fetchers.set(fn, My),
        D.has(fn) && Kn(fn),
        Oe.controller && D.set(fn, Oe.controller);
    }),
      ne({ fetchers: new Map(S.fetchers) });
    let br = () => Yn.forEach((Oe) => Kn(Oe.key));
    te.signal.addEventListener('abort', br);
    let {
      results: Bl,
      loaderResults: Hl,
      fetcherResults: Wl,
    } = await Wn(S.matches, tt, Gr, Yn, it);
    if (te.signal.aborted) return;
    te.signal.removeEventListener('abort', br),
      z.delete(C),
      D.delete(C),
      Yn.forEach((Oe) => D.delete(Oe.key));
    let Qr = yh(Bl);
    if (Qr) {
      if (Qr.idx >= Gr.length) {
        let Oe = Yn[Qr.idx - Gr.length].key;
        q.add(Oe);
      }
      return cn(S, Qr.result);
    }
    let { loaderData: ga, errors: _e } = hh(
      S,
      S.matches,
      Gr,
      Hl,
      void 0,
      Yn,
      Wl,
      G
    );
    if (S.fetchers.has(C)) {
      let Oe = qn(fe.data);
      S.fetchers.set(C, Oe);
    }
    Kf(Yr),
      S.navigation.state === 'loading' && Yr > M
        ? (ce(_, 'Expected pending action'),
          H && H.abort(),
          Z(S.navigation.location, {
            matches: tt,
            loaderData: ga,
            errors: _e,
            fetchers: new Map(S.fetchers),
          }))
        : (ne({
            errors: _e,
            loaderData: mh(S.loaderData, ga, tt, _e),
            fetchers: new Map(S.fetchers),
          }),
          (W = !1));
  }
  async function Qe(C, P, O, Y, J, de, se) {
    let oe = S.fetchers.get(C);
    ee(C, ti(se, oe ? oe.data : void 0), { flushSync: de });
    let te = new AbortController(),
      he = ei(e.history, O, te.signal);
    D.set(C, te);
    let et = R,
      fe = await Zo('loader', he, Y, J, i, o, l, u.v7_relativeSplatPath);
    if (
      (Or(fe) && (fe = (await Vg(fe, he.signal, !0)) || fe),
      D.get(C) === te && D.delete(C),
      !he.signal.aborted)
    ) {
      if (U.has(C)) {
        ee(C, qn(void 0));
        return;
      }
      if (ko(fe))
        if (M > et) {
          ee(C, qn(void 0));
          return;
        } else {
          q.add(C), await cn(S, fe);
          return;
        }
      if (Si(fe)) {
        be(C, P, fe.error);
        return;
      }
      ce(!Or(fe), 'Unhandled fetcher deferred data'), ee(C, qn(fe.data));
    }
  }
  async function cn(C, P, O) {
    let {
      submission: Y,
      fetcherSubmission: J,
      replace: de,
    } = O === void 0 ? {} : O;
    P.revalidate && (W = !0);
    let se = Hi(C.location, P.location, { _isRedirect: !0 });
    if ((ce(se, 'Expected a location on the redirect navigation'), n)) {
      let Re = !1;
      if (P.reloadDocument) Re = !0;
      else if (Ug.test(P.location)) {
        const it = e.history.createURL(P.location);
        Re = it.origin !== t.location.origin || Cn(it.pathname, l) == null;
      }
      if (Re) {
        de ? t.location.replace(P.location) : t.location.assign(P.location);
        return;
      }
    }
    H = null;
    let oe = de === !0 ? He.Replace : He.Push,
      { formMethod: te, formAction: he, formEncType: et } = C.navigation;
    !Y && !J && te && he && et && (Y = wh(C.navigation));
    let fe = Y || J;
    if (zx.has(P.status) && fe && rn(fe.formMethod))
      await ue(oe, se, {
        submission: Le({}, fe, { formAction: P.location }),
        preventScrollReset: $,
      });
    else {
      let Re = wu(se, Y);
      await ue(oe, se, {
        overrideNavigation: Re,
        fetcherSubmission: J,
        preventScrollReset: $,
      });
    }
  }
  async function Wn(C, P, O, Y, J) {
    let de = await Promise.all([
        ...O.map((te) =>
          Zo('loader', J, te, P, i, o, l, u.v7_relativeSplatPath)
        ),
        ...Y.map((te) =>
          te.matches && te.match && te.controller
            ? Zo(
                'loader',
                ei(e.history, te.path, te.controller.signal),
                te.match,
                te.matches,
                i,
                o,
                l,
                u.v7_relativeSplatPath
              )
            : { type: Ue.error, error: Ht(404, { pathname: te.path }) }
        ),
      ]),
      se = de.slice(0, O.length),
      oe = de.slice(O.length);
    return (
      await Promise.all([
        vh(
          C,
          O,
          se,
          se.map(() => J.signal),
          !1,
          S.loaderData
        ),
        vh(
          C,
          Y.map((te) => te.match),
          oe,
          Y.map((te) => (te.controller ? te.controller.signal : null)),
          !0
        ),
      ]),
      { results: de, loaderResults: se, fetcherResults: oe }
    );
  }
  function yt() {
    (W = !0),
      I.push(...Fl()),
      A.forEach((C, P) => {
        D.has(P) && (L.push(P), Kn(P));
      });
  }
  function ee(C, P, O) {
    O === void 0 && (O = {}),
      S.fetchers.set(C, P),
      ne(
        { fetchers: new Map(S.fetchers) },
        { flushSync: (O && O.flushSync) === !0 }
      );
  }
  function be(C, P, O, Y) {
    Y === void 0 && (Y = {});
    let J = xi(S.matches, P);
    Vn(C),
      ne(
        { errors: { [J.route.id]: O }, fetchers: new Map(S.fetchers) },
        { flushSync: (Y && Y.flushSync) === !0 }
      );
  }
  function Kr(C) {
    return (
      u.v7_fetcherPersist &&
        (F.set(C, (F.get(C) || 0) + 1), U.has(C) && U.delete(C)),
      S.fetchers.get(C) || Fx
    );
  }
  function Vn(C) {
    let P = S.fetchers.get(C);
    D.has(C) && !(P && P.state === 'loading' && z.has(C)) && Kn(C),
      A.delete(C),
      z.delete(C),
      q.delete(C),
      U.delete(C),
      S.fetchers.delete(C);
  }
  function dn(C) {
    if (u.v7_fetcherPersist) {
      let P = (F.get(C) || 0) - 1;
      P <= 0 ? (F.delete(C), U.add(C)) : F.set(C, P);
    } else Vn(C);
    ne({ fetchers: new Map(S.fetchers) });
  }
  function Kn(C) {
    let P = D.get(C);
    ce(P, 'Expected fetch controller: ' + C), P.abort(), D.delete(C);
  }
  function Wf(C) {
    for (let P of C) {
      let O = Kr(P),
        Y = qn(O.data);
      S.fetchers.set(P, Y);
    }
  }
  function Vf() {
    let C = [],
      P = !1;
    for (let O of q) {
      let Y = S.fetchers.get(O);
      ce(Y, 'Expected fetcher: ' + O),
        Y.state === 'loading' && (q.delete(O), C.push(O), (P = !0));
    }
    return Wf(C), P;
  }
  function Kf(C) {
    let P = [];
    for (let [O, Y] of z)
      if (Y < C) {
        let J = S.fetchers.get(O);
        ce(J, 'Expected fetcher: ' + O),
          J.state === 'loading' && (Kn(O), z.delete(O), P.push(O));
      }
    return Wf(P), P.length > 0;
  }
  function jy(C, P) {
    let O = S.blockers.get(C) || Jo;
    return T.get(C) !== P && T.set(C, P), O;
  }
  function Yf(C) {
    S.blockers.delete(C), T.delete(C);
  }
  function ma(C, P) {
    let O = S.blockers.get(C) || Jo;
    ce(
      (O.state === 'unblocked' && P.state === 'blocked') ||
        (O.state === 'blocked' && P.state === 'blocked') ||
        (O.state === 'blocked' && P.state === 'proceeding') ||
        (O.state === 'blocked' && P.state === 'unblocked') ||
        (O.state === 'proceeding' && P.state === 'unblocked'),
      'Invalid blocker state transition: ' + O.state + ' -> ' + P.state
    );
    let Y = new Map(S.blockers);
    Y.set(C, P), ne({ blockers: Y });
  }
  function Gf(C) {
    let { currentLocation: P, nextLocation: O, historyAction: Y } = C;
    if (T.size === 0) return;
    T.size > 1 && Fr(!1, 'A router only supports one blocker at a time');
    let J = Array.from(T.entries()),
      [de, se] = J[J.length - 1],
      oe = S.blockers.get(de);
    if (
      !(oe && oe.state === 'proceeding') &&
      se({ currentLocation: P, nextLocation: O, historyAction: Y })
    )
      return de;
  }
  function Fl(C) {
    let P = [];
    return (
      G.forEach((O, Y) => {
        (!C || C(Y)) && (O.cancel(), P.push(Y), G.delete(Y));
      }),
      P
    );
  }
  function Ay(C, P, O) {
    if (((p = C), (g = P), (w = O || null), !m && S.navigation === vu)) {
      m = !0;
      let Y = qf(S.location, S.matches);
      Y != null && ne({ restoreScrollPosition: Y });
    }
    return () => {
      (p = null), (g = null), (w = null);
    };
  }
  function Qf(C, P) {
    return (
      (w &&
        w(
          C,
          P.map((Y) => gx(Y, S.loaderData))
        )) ||
      C.key
    );
  }
  function Ly(C, P) {
    if (p && g) {
      let O = Qf(C, P);
      p[O] = g();
    }
  }
  function qf(C, P) {
    if (p) {
      let O = Qf(C, P),
        Y = p[O];
      if (typeof Y == 'number') return Y;
    }
    return null;
  }
  function Dy(C) {
    (i = {}), (s = $c(C, o, void 0, i));
  }
  return (
    (b = {
      get basename() {
        return l;
      },
      get future() {
        return u;
      },
      get state() {
        return S;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: K,
      subscribe: ae,
      enableScrollRestoration: Ay,
      navigate: Pe,
      fetch: Ge,
      revalidate: ct,
      createHref: (C) => e.history.createHref(C),
      encodeLocation: (C) => e.history.encodeLocation(C),
      getFetcher: Kr,
      deleteFetcher: dn,
      dispose: ve,
      getBlocker: jy,
      deleteBlocker: Yf,
      _internalFetchControllers: D,
      _internalActiveDeferreds: G,
      _internalSetRoutes: Dy,
    }),
    b
  );
}
function Hx(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function Oc(e, t, n, r, o, i, a, s) {
  let l, u;
  if (a) {
    l = [];
    for (let d of t)
      if ((l.push(d), d.route.id === a)) {
        u = d;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let c = Kd(o || '.', Vd(l, i), Cn(e.pathname, n) || e.pathname, s === 'path');
  return (
    o == null && ((c.search = e.search), (c.hash = e.hash)),
    (o == null || o === '' || o === '.') &&
      u &&
      u.route.index &&
      !Gd(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (c.pathname = c.pathname === '/' ? n : Sn([n, c.pathname])),
    gr(c)
  );
}
function uh(e, t, n, r) {
  if (!r || !Hx(r)) return { path: n };
  if (r.formMethod && !Xx(r.formMethod))
    return { path: n, error: Ht(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: Ht(400, { type: 'invalid-body' }) }),
    i = r.formMethod || 'get',
    a = e ? i.toUpperCase() : i.toLowerCase(),
    s = Wg(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!rn(a)) return o();
      let p =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((w, g) => {
              let [m, x] = g;
              return (
                '' +
                w +
                m +
                '=' +
                x +
                `
`
              );
            }, '')
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: s,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!rn(a)) return o();
      try {
        let p = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: s,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  ce(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let l, u;
  if (r.formData) (l = jc(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (l = jc(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (u = ph(l));
  else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (u = ph(l));
    } catch {
      return o();
    }
  let c = {
    formMethod: a,
    formAction: s,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (rn(c.formMethod)) return { path: n, submission: c };
  let d = Un(n);
  return (
    t && d.search && Gd(d.search) && l.append('index', ''),
    (d.search = '?' + l),
    { path: gr(d), submission: c }
  );
}
function Wx(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function ch(e, t, n, r, o, i, a, s, l, u, c, d, p, w, g, m) {
  let x = m ? Object.values(m)[0] : g ? Object.values(g)[0] : void 0,
    f = e.createURL(t.location),
    h = e.createURL(o),
    y = m ? Object.keys(m)[0] : void 0,
    b = Wx(n, y).filter((_, $) => {
      if (i) return Vx(t, _.route);
      if (_.route.lazy) return !0;
      if (_.route.loader == null) return !1;
      if (Kx(t.loaderData, t.matches[$], _) || s.some((V) => V === _.route.id))
        return !0;
      let H = t.matches[$],
        N = _;
      return dh(
        _,
        Le(
          {
            currentUrl: f,
            currentParams: H.params,
            nextUrl: h,
            nextParams: N.params,
          },
          r,
          {
            actionResult: x,
            defaultShouldRevalidate:
              a ||
              f.pathname + f.search === h.pathname + h.search ||
              f.search !== h.search ||
              Hg(H, N),
          }
        )
      );
    }),
    S = [];
  return (
    c.forEach((_, $) => {
      if (i || !n.some((re) => re.route.id === _.routeId) || u.has($)) return;
      let H = mo(p, _.path, w);
      if (!H) {
        S.push({
          key: $,
          routeId: _.routeId,
          path: _.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let N = t.fetchers.get($),
        V = Ac(H, _.path),
        X = !1;
      d.has($)
        ? (X = !1)
        : l.includes($)
        ? (X = !0)
        : N && N.state !== 'idle' && N.data === void 0
        ? (X = a)
        : (X = dh(
            V,
            Le(
              {
                currentUrl: f,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: h,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: x, defaultShouldRevalidate: a }
            )
          )),
        X &&
          S.push({
            key: $,
            routeId: _.routeId,
            path: _.path,
            matches: H,
            match: V,
            controller: new AbortController(),
          });
    }),
    [b, S]
  );
}
function Vx(e, t) {
  return t.loader
    ? t.loader.hydrate
      ? !0
      : e.loaderData[t.id] === void 0 &&
        (!e.errors || e.errors[t.id] === void 0)
    : !1;
}
function Kx(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function Hg(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function dh(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function fh(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  ce(o, 'No route found in manifest');
  let i = {};
  for (let a in r) {
    let l = o[a] !== void 0 && a !== 'hasErrorBoundary';
    Fr(
      !l,
      'Route "' +
        o.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !l && !hx.has(a) && (i[a] = r[a]);
  }
  Object.assign(o, i), Object.assign(o, Le({}, t(o), { lazy: void 0 }));
}
async function Zo(e, t, n, r, o, i, a, s, l) {
  l === void 0 && (l = {});
  let u,
    c,
    d,
    p = (m) => {
      let x,
        f = new Promise((h, y) => (x = y));
      return (
        (d = () => x()),
        t.signal.addEventListener('abort', d),
        Promise.race([
          m({ request: t, params: n.params, context: l.requestContext }),
          f,
        ])
      );
    };
  try {
    let m = n.route[e];
    if (n.route.lazy)
      if (m) {
        let x,
          f = await Promise.all([
            p(m).catch((h) => {
              x = h;
            }),
            fh(n.route, i, o),
          ]);
        if (x) throw x;
        c = f[0];
      } else if ((await fh(n.route, i, o), (m = n.route[e]), m)) c = await p(m);
      else if (e === 'action') {
        let x = new URL(t.url),
          f = x.pathname + x.search;
        throw Ht(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: Ue.data, data: void 0 };
    else if (m) c = await p(m);
    else {
      let x = new URL(t.url),
        f = x.pathname + x.search;
      throw Ht(404, { pathname: f });
    }
    ce(
      c !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (m) {
    (u = Ue.error), (c = m);
  } finally {
    d && t.signal.removeEventListener('abort', d);
  }
  if (qx(c)) {
    let m = c.status;
    if (Ix.has(m)) {
      let f = c.headers.get('Location');
      if (
        (ce(
          f,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !Ug.test(f))
      )
        f = Oc(new URL(t.url), r.slice(0, r.indexOf(n) + 1), a, !0, f, s);
      else if (!l.isStaticRequest) {
        let h = new URL(t.url),
          y = f.startsWith('//') ? new URL(h.protocol + f) : new URL(f),
          E = Cn(y.pathname, a) != null;
        y.origin === h.origin && E && (f = y.pathname + y.search + y.hash);
      }
      if (l.isStaticRequest) throw (c.headers.set('Location', f), c);
      return {
        type: Ue.redirect,
        status: m,
        location: f,
        revalidate: c.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: c.headers.get('X-Remix-Reload-Document') !== null,
      };
    }
    if (l.isRouteRequest)
      throw { type: u === Ue.error ? Ue.error : Ue.data, response: c };
    let x;
    try {
      let f = c.headers.get('Content-Type');
      f && /\bapplication\/json\b/.test(f)
        ? (x = await c.json())
        : (x = await c.text());
    } catch (f) {
      return { type: Ue.error, error: f };
    }
    return u === Ue.error
      ? { type: u, error: new Yd(m, c.statusText, x), headers: c.headers }
      : { type: Ue.data, data: x, statusCode: c.status, headers: c.headers };
  }
  if (u === Ue.error) return { type: u, error: c };
  if (Qx(c)) {
    var w, g;
    return {
      type: Ue.deferred,
      deferredData: c,
      statusCode: (w = c.init) == null ? void 0 : w.status,
      headers:
        ((g = c.init) == null ? void 0 : g.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: Ue.data, data: c };
}
function ei(e, t, n, r) {
  let o = e.createURL(Wg(t)).toString(),
    i = { signal: n };
  if (r && rn(r.formMethod)) {
    let { formMethod: a, formEncType: s } = r;
    (i.method = a.toUpperCase()),
      s === 'application/json'
        ? ((i.headers = new Headers({ 'Content-Type': s })),
          (i.body = JSON.stringify(r.json)))
        : s === 'text/plain'
        ? (i.body = r.text)
        : s === 'application/x-www-form-urlencoded' && r.formData
        ? (i.body = jc(r.formData))
        : (i.body = r.formData);
  }
  return new Request(o, i);
}
function jc(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function ph(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Yx(e, t, n, r, o) {
  let i = {},
    a = null,
    s,
    l = !1,
    u = {};
  return (
    n.forEach((c, d) => {
      let p = t[d].route.id;
      if (
        (ce(!ko(c), 'Cannot handle redirect results in processLoaderData'),
        Si(c))
      ) {
        let w = xi(e, p),
          g = c.error;
        r && ((g = Object.values(r)[0]), (r = void 0)),
          (a = a || {}),
          a[w.route.id] == null && (a[w.route.id] = g),
          (i[p] = void 0),
          l || ((l = !0), (s = zg(c.error) ? c.error.status : 500)),
          c.headers && (u[p] = c.headers);
      } else
        Or(c)
          ? (o.set(p, c.deferredData), (i[p] = c.deferredData.data))
          : (i[p] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !l &&
            (s = c.statusCode),
          c.headers && (u[p] = c.headers);
    }),
    r && ((a = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: s || 200, loaderHeaders: u }
  );
}
function hh(e, t, n, r, o, i, a, s) {
  let { loaderData: l, errors: u } = Yx(t, n, r, o, s);
  for (let c = 0; c < i.length; c++) {
    let { key: d, match: p, controller: w } = i[c];
    ce(
      a !== void 0 && a[c] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let g = a[c];
    if (!(w && w.signal.aborted))
      if (Si(g)) {
        let m = xi(e.matches, p == null ? void 0 : p.route.id);
        (u && u[m.route.id]) || (u = Le({}, u, { [m.route.id]: g.error })),
          e.fetchers.delete(d);
      } else if (ko(g)) ce(!1, 'Unhandled fetcher revalidation redirect');
      else if (Or(g)) ce(!1, 'Unhandled fetcher deferred data');
      else {
        let m = qn(g.data);
        e.fetchers.set(d, m);
      }
  }
  return { loaderData: l, errors: u };
}
function mh(e, t, n, r) {
  let o = Le({}, t);
  for (let i of n) {
    let a = i.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (o[a] = t[a])
        : e[a] !== void 0 && i.route.loader && (o[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return o;
}
function xi(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function gh(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function Ht(e, t) {
  let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
    a = 'Unknown Server Error',
    s = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((a = 'Bad Request'),
        o && n && r
          ? (s =
              'You made a ' +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i === 'defer-action'
          ? (s = 'defer() is not supported in actions')
          : i === 'invalid-body' && (s = 'Unable to encode submission body'))
      : e === 403
      ? ((a = 'Forbidden'),
        (s = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = 'Not Found'), (s = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = 'Method Not Allowed'),
        o && n && r
          ? (s =
              'You made a ' +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Yd(e || 500, a, new Error(s), !0)
  );
}
function yh(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (ko(n)) return { result: n, idx: t };
  }
}
function Wg(e) {
  let t = typeof e == 'string' ? Un(e) : e;
  return gr(Le({}, t, { hash: '' }));
}
function Gx(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== '';
}
function Or(e) {
  return e.type === Ue.deferred;
}
function Si(e) {
  return e.type === Ue.error;
}
function ko(e) {
  return (e && e.type) === Ue.redirect;
}
function Qx(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function qx(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function Xx(e) {
  return Mx.has(e.toLowerCase());
}
function rn(e) {
  return Lx.has(e.toLowerCase());
}
async function vh(e, t, n, r, o, i) {
  for (let a = 0; a < n.length; a++) {
    let s = n[a],
      l = t[a];
    if (!l) continue;
    let u = e.find((d) => d.route.id === l.route.id),
      c = u != null && !Hg(u, l) && (i && i[l.route.id]) !== void 0;
    if (Or(s) && (o || c)) {
      let d = r[a];
      ce(d, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Vg(s, d, o).then((p) => {
          p && (n[a] = p || n[a]);
        });
    }
  }
}
async function Vg(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Ue.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: Ue.error, error: o };
      }
    return { type: Ue.data, data: e.deferredData.data };
  }
}
function Gd(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Ac(e, t) {
  let n = typeof t == 'string' ? Un(t).search : t.search;
  if (e[e.length - 1].route.index && Gd(n || '')) return e[e.length - 1];
  let r = Ig(e);
  return r[r.length - 1];
}
function wh(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: i,
    json: a,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function wu(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Jx(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function ti(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Zx(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function qn(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function eS(e, t) {
  try {
    let n = e.sessionStorage.getItem(Bg);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function tS(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(Bg, JSON.stringify(n));
    } catch (r) {
      Fr(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + r + ').'
      );
    }
  }
}
/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Wi() {
  return (
    (Wi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Wi.apply(this, arguments)
  );
}
const ra = k.createContext(null),
  Qd = k.createContext(null),
  bn = k.createContext(null),
  ll = k.createContext(null),
  _n = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Kg = k.createContext(null);
function nS(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  oa() || ce(!1);
  let { basename: r, navigator: o } = k.useContext(bn),
    { hash: i, pathname: a, search: s } = ia(e, { relative: n }),
    l = a;
  return (
    r !== '/' && (l = a === '/' ? r : Sn([r, a])),
    o.createHref({ pathname: l, search: s, hash: i })
  );
}
function oa() {
  return k.useContext(ll) != null;
}
function Wr() {
  return oa() || ce(!1), k.useContext(ll).location;
}
function Yg(e) {
  k.useContext(bn).static || k.useLayoutEffect(e);
}
function ul() {
  let { isDataRoute: e } = k.useContext(_n);
  return e ? gS() : rS();
}
function rS() {
  oa() || ce(!1);
  let e = k.useContext(ra),
    { basename: t, future: n, navigator: r } = k.useContext(bn),
    { matches: o } = k.useContext(_n),
    { pathname: i } = Wr(),
    a = JSON.stringify(Vd(o, n.v7_relativeSplatPath)),
    s = k.useRef(!1);
  return (
    Yg(() => {
      s.current = !0;
    }),
    k.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let d = Kd(u, JSON.parse(a), i, c.relative === 'path');
        e == null &&
          t !== '/' &&
          (d.pathname = d.pathname === '/' ? t : Sn([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, a, i, e]
    )
  );
}
const Gg = k.createContext(null);
function qd() {
  return k.useContext(Gg);
}
function oS(e) {
  let t = k.useContext(_n).outlet;
  return t && k.createElement(Gg.Provider, { value: e }, t);
}
function iS() {
  let { matches: e } = k.useContext(_n),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function ia(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = k.useContext(bn),
    { matches: o } = k.useContext(_n),
    { pathname: i } = Wr(),
    a = JSON.stringify(Vd(o, r.v7_relativeSplatPath));
  return k.useMemo(() => Kd(e, JSON.parse(a), i, n === 'path'), [e, a, i, n]);
}
function aS(e, t, n, r) {
  oa() || ce(!1);
  let { navigator: o } = k.useContext(bn),
    { matches: i } = k.useContext(_n),
    a = i[i.length - 1],
    s = a ? a.params : {};
  a && a.pathname;
  let l = a ? a.pathnameBase : '/';
  a && a.route;
  let u = Wr(),
    c;
  if (t) {
    var d;
    let x = typeof t == 'string' ? Un(t) : t;
    l === '/' || ((d = x.pathname) != null && d.startsWith(l)) || ce(!1),
      (c = x);
  } else c = u;
  let p = c.pathname || '/',
    w = l === '/' ? p : p.slice(l.length) || '/',
    g = mo(e, { pathname: w }),
    m = dS(
      g &&
        g.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, s, x.params),
            pathname: Sn([
              l,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === '/'
                ? l
                : Sn([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && m
    ? k.createElement(
        ll.Provider,
        {
          value: {
            location: Wi(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              c
            ),
            navigationType: He.Pop,
          },
        },
        m
      )
    : m;
}
function sS() {
  let e = qg(),
    t = zg(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null;
  return k.createElement(
    k.Fragment,
    null,
    k.createElement('h2', null, 'Unexpected Application Error!'),
    k.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? k.createElement('pre', { style: o }, n) : null,
    i
  );
}
const lS = k.createElement(sS, null);
class uS extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          _n.Provider,
          { value: this.props.routeContext },
          k.createElement(Kg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function cS(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = k.useContext(ra);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(_n.Provider, { value: t }, r)
  );
}
function dS(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let a = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let c = a.findIndex(
      (d) => d.route.id && (s == null ? void 0 : s[d.route.id])
    );
    c >= 0 || ce(!1), (a = a.slice(0, Math.min(a.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let d = a[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.loader &&
          d.route.id &&
          n.loaderData[d.route.id] === void 0 &&
          (!n.errors || n.errors[d.route.id] === void 0))
      ) {
        (l = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
        break;
      }
    }
  return a.reduceRight((c, d, p) => {
    let w,
      g = !1,
      m = null,
      x = null;
    n &&
      ((w = s && d.route.id ? s[d.route.id] : void 0),
      (m = d.route.errorElement || lS),
      l &&
        (u < 0 && p === 0
          ? (yS('route-fallback', !1), (g = !0), (x = null))
          : u === p &&
            ((g = !0), (x = d.route.hydrateFallbackElement || null))));
    let f = t.concat(a.slice(0, p + 1)),
      h = () => {
        let y;
        return (
          w
            ? (y = m)
            : g
            ? (y = x)
            : d.route.Component
            ? (y = k.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = c),
          k.createElement(cS, {
            match: d,
            routeContext: { outlet: c, matches: f, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? k.createElement(uS, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: w,
          children: h(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Qg = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Qg || {}),
  yr = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(yr || {});
function fS(e) {
  let t = k.useContext(ra);
  return t || ce(!1), t;
}
function Xd(e) {
  let t = k.useContext(Qd);
  return t || ce(!1), t;
}
function pS(e) {
  let t = k.useContext(_n);
  return t || ce(!1), t;
}
function cl(e) {
  let t = pS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ce(!1), n.route.id;
}
function hS() {
  return cl(yr.UseRouteId);
}
function mS() {
  return Xd(yr.UseNavigation).navigation;
}
function dl() {
  let e = Xd(yr.UseLoaderData),
    t = cl(yr.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      'You cannot `useLoaderData` in an errorElement (routeId: ' + t + ')'
    );
    return;
  }
  return e.loaderData[t];
}
function qg() {
  var e;
  let t = k.useContext(Kg),
    n = Xd(yr.UseRouteError),
    r = cl(yr.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function gS() {
  let { router: e } = fS(Qg.UseNavigateStable),
    t = cl(yr.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Yg(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, Wi({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const xh = {};
function yS(e, t, n) {
  !t && !xh[e] && (xh[e] = !0);
}
function Xg(e) {
  return oS(e.context);
}
function vS(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = He.Pop,
    navigator: i,
    static: a = !1,
    future: s,
  } = e;
  oa() && ce(!1);
  let l = t.replace(/^\/*/, '/'),
    u = k.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: a,
        future: Wi({ v7_relativeSplatPath: !1 }, s),
      }),
      [l, s, i, a]
    );
  typeof r == 'string' && (r = Un(r));
  let {
      pathname: c = '/',
      search: d = '',
      hash: p = '',
      state: w = null,
      key: g = 'default',
    } = r,
    m = k.useMemo(() => {
      let x = Cn(c, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: p, state: w, key: g },
            navigationType: o,
          };
    }, [l, c, d, p, w, g, o]);
  return m == null
    ? null
    : k.createElement(
        bn.Provider,
        { value: u },
        k.createElement(ll.Provider, { children: n, value: m })
      );
}
new Promise(() => {});
function wS(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: k.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: k.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: k.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vr() {
  return (
    (vr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vr.apply(this, arguments)
  );
}
function Jd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Za = 'get',
  xu = 'application/x-www-form-urlencoded';
function fl(e) {
  return e != null && typeof e.tagName == 'string';
}
function xS(e) {
  return fl(e) && e.tagName.toLowerCase() === 'button';
}
function SS(e) {
  return fl(e) && e.tagName.toLowerCase() === 'form';
}
function ES(e) {
  return fl(e) && e.tagName.toLowerCase() === 'input';
}
function kS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function CS(e, t) {
  return e.button === 0 && (!t || t === '_self') && !kS(e);
}
let La = null;
function bS() {
  if (La === null)
    try {
      new FormData(document.createElement('form'), 0), (La = !1);
    } catch {
      La = !0;
    }
  return La;
}
const _S = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Su(e) {
  return e != null && !_S.has(e) ? null : e;
}
function RS(e, t) {
  let n, r, o, i, a;
  if (SS(e)) {
    let s = e.getAttribute('action');
    (r = s ? Cn(s, t) : null),
      (n = e.getAttribute('method') || Za),
      (o = Su(e.getAttribute('enctype')) || xu),
      (i = new FormData(e));
  } else if (xS(e) || (ES(e) && (e.type === 'submit' || e.type === 'image'))) {
    let s = e.form;
    if (s == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute('formaction') || s.getAttribute('action');
    if (
      ((r = l ? Cn(l, t) : null),
      (n = e.getAttribute('formmethod') || s.getAttribute('method') || Za),
      (o =
        Su(e.getAttribute('formenctype')) ||
        Su(s.getAttribute('enctype')) ||
        xu),
      (i = new FormData(s, e)),
      !bS())
    ) {
      let { name: u, type: c, value: d } = e;
      if (c === 'image') {
        let p = u ? u + '.' : '';
        i.append(p + 'x', '0'), i.append(p + 'y', '0');
      } else u && i.append(u, d);
    }
  } else {
    if (fl(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = Za), (r = null), (o = xu), (a = e);
  }
  return (
    i && o === 'text/plain' && ((a = i), (i = void 0)),
    { action: r, method: n.toLowerCase(), encType: o, formData: i, body: a }
  );
}
const TS = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  PS = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'unstable_viewTransition',
    'children',
  ],
  $S = [
    'fetcherKey',
    'navigate',
    'reloadDocument',
    'replace',
    'state',
    'method',
    'action',
    'onSubmit',
    'relative',
    'preventScrollReset',
    'unstable_viewTransition',
  ];
function NS(e, t) {
  return Bx({
    basename: t == null ? void 0 : t.basename,
    future: vr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: dx({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || OS(),
    routes: e,
    mapRouteProperties: wS,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function OS() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = vr({}, t, { errors: jS(t.errors) })), t;
}
function jS(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === 'RouteErrorResponse')
      n[r] = new Yd(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === 'Error') {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == 'function')
          try {
            let a = new i(o.message);
            (a.stack = ''), (n[r] = a);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(o.message);
        (i.stack = ''), (n[r] = i);
      }
    } else n[r] = o;
  return n;
}
const Jg = k.createContext({ isTransitioning: !1 }),
  AS = k.createContext(new Map()),
  LS = 'startTransition',
  Sh = ds[LS],
  DS = 'flushSync',
  Eh = cx[DS];
function MS(e) {
  Sh ? Sh(e) : e();
}
function ni(e) {
  Eh ? Eh(e) : e();
}
class IS {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
}
function zS(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, i] = k.useState(n.state),
    [a, s] = k.useState(),
    [l, u] = k.useState({ isTransitioning: !1 }),
    [c, d] = k.useState(),
    [p, w] = k.useState(),
    [g, m] = k.useState(),
    x = k.useRef(new Map()),
    { v7_startTransition: f } = r || {},
    h = k.useCallback(
      (_) => {
        f ? MS(_) : _();
      },
      [f]
    ),
    y = k.useCallback(
      (_, $) => {
        let {
          deletedFetchers: H,
          unstable_flushSync: N,
          unstable_viewTransitionOpts: V,
        } = $;
        H.forEach((re) => x.current.delete(re)),
          _.fetchers.forEach((re, W) => {
            re.data !== void 0 && x.current.set(W, re.data);
          });
        let X =
          n.window == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!V || X) {
          N ? ni(() => i(_)) : h(() => i(_));
          return;
        }
        if (N) {
          ni(() => {
            p && (c && c.resolve(), p.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: V.currentLocation,
                nextLocation: V.nextLocation,
              });
          });
          let re = n.window.document.startViewTransition(() => {
            ni(() => i(_));
          });
          re.finished.finally(() => {
            ni(() => {
              d(void 0), w(void 0), s(void 0), u({ isTransitioning: !1 });
            });
          }),
            ni(() => w(re));
          return;
        }
        p
          ? (c && c.resolve(),
            p.skipTransition(),
            m({
              state: _,
              currentLocation: V.currentLocation,
              nextLocation: V.nextLocation,
            }))
          : (s(_),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: V.currentLocation,
              nextLocation: V.nextLocation,
            }));
      },
      [n.window, p, c, x, h]
    );
  k.useLayoutEffect(() => n.subscribe(y), [n, y]),
    k.useEffect(() => {
      l.isTransitioning && !l.flushSync && d(new IS());
    }, [l]),
    k.useEffect(() => {
      if (c && a && n.window) {
        let _ = a,
          $ = c.promise,
          H = n.window.document.startViewTransition(async () => {
            h(() => i(_)), await $;
          });
        H.finished.finally(() => {
          d(void 0), w(void 0), s(void 0), u({ isTransitioning: !1 });
        }),
          w(H);
      }
    }, [h, a, c, n.window]),
    k.useEffect(() => {
      c && a && o.location.key === a.location.key && c.resolve();
    }, [c, p, o.location, a]),
    k.useEffect(() => {
      !l.isTransitioning &&
        g &&
        (s(g.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: g.currentLocation,
          nextLocation: g.nextLocation,
        }),
        m(void 0));
    }, [l.isTransitioning, g]),
    k.useEffect(() => {}, []);
  let E = k.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (_) => n.navigate(_),
        push: (_, $, H) =>
          n.navigate(_, {
            state: $,
            preventScrollReset: H == null ? void 0 : H.preventScrollReset,
          }),
        replace: (_, $, H) =>
          n.navigate(_, {
            replace: !0,
            state: $,
            preventScrollReset: H == null ? void 0 : H.preventScrollReset,
          }),
      }),
      [n]
    ),
    b = n.basename || '/',
    S = k.useMemo(
      () => ({ router: n, navigator: E, static: !1, basename: b }),
      [n, E, b]
    );
  return k.createElement(
    k.Fragment,
    null,
    k.createElement(
      ra.Provider,
      { value: S },
      k.createElement(
        Qd.Provider,
        { value: o },
        k.createElement(
          AS.Provider,
          { value: x.current },
          k.createElement(
            Jg.Provider,
            { value: l },
            k.createElement(
              vS,
              {
                basename: b,
                location: o.location,
                navigationType: o.historyAction,
                navigator: E,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              o.initialized || n.future.v7_partialHydration
                ? k.createElement(FS, {
                    routes: n.routes,
                    future: n.future,
                    state: o,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function FS(e) {
  let { routes: t, future: n, state: r } = e;
  return aS(t, void 0, r, n);
}
const US =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  BS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  wr = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: s,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      p = Jd(t, TS),
      { basename: w } = k.useContext(bn),
      g,
      m = !1;
    if (typeof u == 'string' && BS.test(u) && ((g = u), US))
      try {
        let y = new URL(window.location.href),
          E = u.startsWith('//') ? new URL(y.protocol + u) : new URL(u),
          b = Cn(E.pathname, w);
        E.origin === y.origin && b != null
          ? (u = b + E.search + E.hash)
          : (m = !0);
      } catch {}
    let x = nS(u, { relative: o }),
      f = WS(u, {
        replace: a,
        state: s,
        target: l,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: d,
      });
    function h(y) {
      r && r(y), y.defaultPrevented || f(y);
    }
    return k.createElement(
      'a',
      vr({}, p, { href: g || x, onClick: m || i ? r : h, ref: n, target: l })
    );
  }),
  HS = k.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: o = !1,
        className: i = '',
        end: a = !1,
        style: s,
        to: l,
        unstable_viewTransition: u,
        children: c,
      } = t,
      d = Jd(t, PS),
      p = ia(l, { relative: d.relative }),
      w = Wr(),
      g = k.useContext(Qd),
      { navigator: m } = k.useContext(bn),
      x = g != null && QS(p) && u === !0,
      f = m.encodeLocation ? m.encodeLocation(p).pathname : p.pathname,
      h = w.pathname,
      y =
        g && g.navigation && g.navigation.location
          ? g.navigation.location.pathname
          : null;
    o ||
      ((h = h.toLowerCase()),
      (y = y ? y.toLowerCase() : null),
      (f = f.toLowerCase()));
    const E = f !== '/' && f.endsWith('/') ? f.length - 1 : f.length;
    let b = h === f || (!a && h.startsWith(f) && h.charAt(E) === '/'),
      S =
        y != null &&
        (y === f || (!a && y.startsWith(f) && y.charAt(f.length) === '/')),
      _ = { isActive: b, isPending: S, isTransitioning: x },
      $ = b ? r : void 0,
      H;
    typeof i == 'function'
      ? (H = i(_))
      : (H = [
          i,
          b ? 'active' : null,
          S ? 'pending' : null,
          x ? 'transitioning' : null,
        ]
          .filter(Boolean)
          .join(' '));
    let N = typeof s == 'function' ? s(_) : s;
    return k.createElement(
      wr,
      vr({}, d, {
        'aria-current': $,
        className: H,
        ref: n,
        style: N,
        to: l,
        unstable_viewTransition: u,
      }),
      typeof c == 'function' ? c(_) : c
    );
  }),
  Vr = k.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: o,
        replace: i,
        state: a,
        method: s = Za,
        action: l,
        onSubmit: u,
        relative: c,
        preventScrollReset: d,
        unstable_viewTransition: p,
      } = e,
      w = Jd(e, $S),
      g = e1(),
      m = GS(l, { relative: c }),
      x = s.toLowerCase() === 'get' ? 'get' : 'post',
      f = (h) => {
        if ((u && u(h), h.defaultPrevented)) return;
        h.preventDefault();
        let y = h.nativeEvent.submitter,
          E = (y == null ? void 0 : y.getAttribute('formmethod')) || s;
        g(y || h.currentTarget, {
          fetcherKey: n,
          method: E,
          navigate: r,
          replace: i,
          state: a,
          relative: c,
          preventScrollReset: d,
          unstable_viewTransition: p,
        });
      };
    return k.createElement(
      'form',
      vr({ ref: t, method: x, action: m, onSubmit: o ? u : f }, w)
    );
  });
var Ds;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(Ds || (Ds = {}));
var kh;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(kh || (kh = {}));
function Zg(e) {
  let t = k.useContext(ra);
  return t || ce(!1), t;
}
function WS(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: a,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    l = ul(),
    u = Wr(),
    c = ia(e, { relative: a });
  return k.useCallback(
    (d) => {
      if (CS(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : gr(u) === gr(c);
        l(e, {
          replace: p,
          state: o,
          preventScrollReset: i,
          relative: a,
          unstable_viewTransition: s,
        });
      }
    },
    [u, l, c, r, o, n, e, i, a, s]
  );
}
function VS() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
    );
}
let KS = 0,
  YS = () => '__' + String(++KS) + '__';
function e1() {
  let { router: e } = Zg(Ds.UseSubmit),
    { basename: t } = k.useContext(bn),
    n = hS();
  return k.useCallback(
    function (r, o) {
      o === void 0 && (o = {}), VS();
      let { action: i, method: a, encType: s, formData: l, body: u } = RS(r, t);
      if (o.navigate === !1) {
        let c = o.fetcherKey || YS();
        e.fetch(c, n, o.action || i, {
          preventScrollReset: o.preventScrollReset,
          formData: l,
          body: u,
          formMethod: o.method || a,
          formEncType: o.encType || s,
          unstable_flushSync: o.unstable_flushSync,
        });
      } else
        e.navigate(o.action || i, {
          preventScrollReset: o.preventScrollReset,
          formData: l,
          body: u,
          formMethod: o.method || a,
          formEncType: o.encType || s,
          replace: o.replace,
          state: o.state,
          fromRouteId: n,
          unstable_flushSync: o.unstable_flushSync,
          unstable_viewTransition: o.unstable_viewTransition,
        });
    },
    [e, t, n]
  );
}
function GS(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = k.useContext(bn),
    o = k.useContext(_n);
  o || ce(!1);
  let [i] = o.matches.slice(-1),
    a = vr({}, ia(e || '.', { relative: n })),
    s = Wr();
  if (e == null) {
    a.search = s.search;
    let l = new URLSearchParams(a.search);
    l.has('index') &&
      l.get('index') === '' &&
      (l.delete('index'), (a.search = l.toString() ? '?' + l.toString() : ''));
  }
  return (
    (!e || e === '.') &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (a.pathname = a.pathname === '/' ? r : Sn([r, a.pathname])),
    gr(a)
  );
}
function QS(e, t) {
  t === void 0 && (t = {});
  let n = k.useContext(Jg);
  n == null && ce(!1);
  let { basename: r } = Zg(Ds.useViewTransitionState),
    o = ia(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = Cn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    a = Cn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Nc(o.pathname, a) != null || Nc(o.pathname, i) != null;
}
var t1 = { exports: {} },
  Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ot = typeof Symbol == 'function' && Symbol.for,
  Zd = ot ? Symbol.for('react.element') : 60103,
  ef = ot ? Symbol.for('react.portal') : 60106,
  pl = ot ? Symbol.for('react.fragment') : 60107,
  hl = ot ? Symbol.for('react.strict_mode') : 60108,
  ml = ot ? Symbol.for('react.profiler') : 60114,
  gl = ot ? Symbol.for('react.provider') : 60109,
  yl = ot ? Symbol.for('react.context') : 60110,
  tf = ot ? Symbol.for('react.async_mode') : 60111,
  vl = ot ? Symbol.for('react.concurrent_mode') : 60111,
  wl = ot ? Symbol.for('react.forward_ref') : 60112,
  xl = ot ? Symbol.for('react.suspense') : 60113,
  qS = ot ? Symbol.for('react.suspense_list') : 60120,
  Sl = ot ? Symbol.for('react.memo') : 60115,
  El = ot ? Symbol.for('react.lazy') : 60116,
  XS = ot ? Symbol.for('react.block') : 60121,
  JS = ot ? Symbol.for('react.fundamental') : 60117,
  ZS = ot ? Symbol.for('react.responder') : 60118,
  e2 = ot ? Symbol.for('react.scope') : 60119;
function Ft(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Zd:
        switch (((e = e.type), e)) {
          case tf:
          case vl:
          case pl:
          case ml:
          case hl:
          case xl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case yl:
              case wl:
              case El:
              case Sl:
              case gl:
                return e;
              default:
                return t;
            }
        }
      case ef:
        return t;
    }
  }
}
function n1(e) {
  return Ft(e) === vl;
}
Ce.AsyncMode = tf;
Ce.ConcurrentMode = vl;
Ce.ContextConsumer = yl;
Ce.ContextProvider = gl;
Ce.Element = Zd;
Ce.ForwardRef = wl;
Ce.Fragment = pl;
Ce.Lazy = El;
Ce.Memo = Sl;
Ce.Portal = ef;
Ce.Profiler = ml;
Ce.StrictMode = hl;
Ce.Suspense = xl;
Ce.isAsyncMode = function (e) {
  return n1(e) || Ft(e) === tf;
};
Ce.isConcurrentMode = n1;
Ce.isContextConsumer = function (e) {
  return Ft(e) === yl;
};
Ce.isContextProvider = function (e) {
  return Ft(e) === gl;
};
Ce.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Zd;
};
Ce.isForwardRef = function (e) {
  return Ft(e) === wl;
};
Ce.isFragment = function (e) {
  return Ft(e) === pl;
};
Ce.isLazy = function (e) {
  return Ft(e) === El;
};
Ce.isMemo = function (e) {
  return Ft(e) === Sl;
};
Ce.isPortal = function (e) {
  return Ft(e) === ef;
};
Ce.isProfiler = function (e) {
  return Ft(e) === ml;
};
Ce.isStrictMode = function (e) {
  return Ft(e) === hl;
};
Ce.isSuspense = function (e) {
  return Ft(e) === xl;
};
Ce.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === pl ||
    e === vl ||
    e === ml ||
    e === hl ||
    e === xl ||
    e === qS ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === El ||
        e.$$typeof === Sl ||
        e.$$typeof === gl ||
        e.$$typeof === yl ||
        e.$$typeof === wl ||
        e.$$typeof === JS ||
        e.$$typeof === ZS ||
        e.$$typeof === e2 ||
        e.$$typeof === XS))
  );
};
Ce.typeOf = Ft;
t1.exports = Ce;
var nf = t1.exports;
function t2(e) {
  function t(A, F, U, G, T) {
    for (
      var ie = 0,
        K = 0,
        ve = 0,
        ae = 0,
        ne,
        Z,
        Pe = 0,
        ct = 0,
        ue,
        Ze = (ue = ne = 0),
        we = 0,
        Ge = 0,
        Cr = 0,
        Qe = 0,
        cn = U.length,
        Wn = cn - 1,
        yt,
        ee = '',
        be = '',
        Kr = '',
        Vn = '',
        dn;
      we < cn;

    ) {
      if (
        ((Z = U.charCodeAt(we)),
        we === Wn &&
          K + ae + ve + ie !== 0 &&
          (K !== 0 && (Z = K === 47 ? 10 : 47), (ae = ve = ie = 0), cn++, Wn++),
        K + ae + ve + ie === 0)
      ) {
        if (
          we === Wn &&
          (0 < Ge && (ee = ee.replace(p, '')), 0 < ee.trim().length)
        ) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ee += U.charAt(we);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for (
              ee = ee.trim(), ne = ee.charCodeAt(0), ue = 1, Qe = ++we;
              we < cn;

            ) {
              switch ((Z = U.charCodeAt(we))) {
                case 123:
                  ue++;
                  break;
                case 125:
                  ue--;
                  break;
                case 47:
                  switch ((Z = U.charCodeAt(we + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (Ze = we + 1; Ze < Wn; ++Ze)
                          switch (U.charCodeAt(Ze)) {
                            case 47:
                              if (
                                Z === 42 &&
                                U.charCodeAt(Ze - 1) === 42 &&
                                we + 2 !== Ze
                              ) {
                                we = Ze + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Z === 47) {
                                we = Ze + 1;
                                break e;
                              }
                          }
                        we = Ze;
                      }
                  }
                  break;
                case 91:
                  Z++;
                case 40:
                  Z++;
                case 34:
                case 39:
                  for (; we++ < Wn && U.charCodeAt(we) !== Z; );
              }
              if (ue === 0) break;
              we++;
            }
            switch (
              ((ue = U.substring(Qe, we)),
              ne === 0 && (ne = (ee = ee.replace(d, '').trim()).charCodeAt(0)),
              ne)
            ) {
              case 64:
                switch (
                  (0 < Ge && (ee = ee.replace(p, '')),
                  (Z = ee.charCodeAt(1)),
                  Z)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ge = F;
                    break;
                  default:
                    Ge = L;
                }
                if (
                  ((ue = t(F, Ge, ue, Z, T + 1)),
                  (Qe = ue.length),
                  0 < R &&
                    ((Ge = n(L, ee, Cr)),
                    (dn = s(3, ue, Ge, F, re, X, Qe, Z, T, G)),
                    (ee = Ge.join('')),
                    dn !== void 0 &&
                      (Qe = (ue = dn.trim()).length) === 0 &&
                      ((Z = 0), (ue = ''))),
                  0 < Qe)
                )
                  switch (Z) {
                    case 115:
                      ee = ee.replace(S, a);
                    case 100:
                    case 109:
                    case 45:
                      ue = ee + '{' + ue + '}';
                      break;
                    case 107:
                      (ee = ee.replace(h, '$1 $2')),
                        (ue = ee + '{' + ue + '}'),
                        (ue =
                          I === 1 || (I === 2 && i('@' + ue, 3))
                            ? '@-webkit-' + ue + '@' + ue
                            : '@' + ue);
                      break;
                    default:
                      (ue = ee + ue), G === 112 && (ue = ((be += ue), ''));
                  }
                else ue = '';
                break;
              default:
                ue = t(F, n(F, ee, Cr), ue, G, T + 1);
            }
            (Kr += ue),
              (ue = Cr = Ge = Ze = ne = 0),
              (ee = ''),
              (Z = U.charCodeAt(++we));
            break;
          case 125:
          case 59:
            if (
              ((ee = (0 < Ge ? ee.replace(p, '') : ee).trim()),
              1 < (Qe = ee.length))
            )
              switch (
                (Ze === 0 &&
                  ((ne = ee.charCodeAt(0)),
                  ne === 45 || (96 < ne && 123 > ne)) &&
                  (Qe = (ee = ee.replace(' ', ':')).length),
                0 < R &&
                  (dn = s(1, ee, F, A, re, X, be.length, G, T, G)) !== void 0 &&
                  (Qe = (ee = dn.trim()).length) === 0 &&
                  (ee = '\0\0'),
                (ne = ee.charCodeAt(0)),
                (Z = ee.charCodeAt(1)),
                ne)
              ) {
                case 0:
                  break;
                case 64:
                  if (Z === 105 || Z === 99) {
                    Vn += ee + U.charAt(we);
                    break;
                  }
                default:
                  ee.charCodeAt(Qe - 1) !== 58 &&
                    (be += o(ee, ne, Z, ee.charCodeAt(2)));
              }
            (Cr = Ge = Ze = ne = 0), (ee = ''), (Z = U.charCodeAt(++we));
        }
      }
      switch (Z) {
        case 13:
        case 10:
          K === 47
            ? (K = 0)
            : 1 + ne === 0 &&
              G !== 107 &&
              0 < ee.length &&
              ((Ge = 1), (ee += '\0')),
            0 < R * z && s(0, ee, F, A, re, X, be.length, G, T, G),
            (X = 1),
            re++;
          break;
        case 59:
        case 125:
          if (K + ae + ve + ie === 0) {
            X++;
            break;
          }
        default:
          switch ((X++, (yt = U.charAt(we)), Z)) {
            case 9:
            case 32:
              if (ae + ie + K === 0)
                switch (Pe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    yt = '';
                    break;
                  default:
                    Z !== 32 && (yt = ' ');
                }
              break;
            case 0:
              yt = '\\0';
              break;
            case 12:
              yt = '\\f';
              break;
            case 11:
              yt = '\\v';
              break;
            case 38:
              ae + K + ie === 0 && ((Ge = Cr = 1), (yt = '\f' + yt));
              break;
            case 108:
              if (ae + K + ie + W === 0 && 0 < Ze)
                switch (we - Ze) {
                  case 2:
                    Pe === 112 && U.charCodeAt(we - 3) === 58 && (W = Pe);
                  case 8:
                    ct === 111 && (W = ct);
                }
              break;
            case 58:
              ae + K + ie === 0 && (Ze = we);
              break;
            case 44:
              K + ve + ae + ie === 0 && ((Ge = 1), (yt += '\r'));
              break;
            case 34:
            case 39:
              K === 0 && (ae = ae === Z ? 0 : ae === 0 ? Z : ae);
              break;
            case 91:
              ae + K + ve === 0 && ie++;
              break;
            case 93:
              ae + K + ve === 0 && ie--;
              break;
            case 41:
              ae + K + ie === 0 && ve--;
              break;
            case 40:
              if (ae + K + ie === 0) {
                if (ne === 0)
                  switch (2 * Pe + 3 * ct) {
                    case 533:
                      break;
                    default:
                      ne = 1;
                  }
                ve++;
              }
              break;
            case 64:
              K + ve + ae + ie + Ze + ue === 0 && (ue = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ae + ie + ve))
                switch (K) {
                  case 0:
                    switch (2 * Z + 3 * U.charCodeAt(we + 1)) {
                      case 235:
                        K = 47;
                        break;
                      case 220:
                        (Qe = we), (K = 42);
                    }
                    break;
                  case 42:
                    Z === 47 &&
                      Pe === 42 &&
                      Qe + 2 !== we &&
                      (U.charCodeAt(Qe + 2) === 33 &&
                        (be += U.substring(Qe, we + 1)),
                      (yt = ''),
                      (K = 0));
                }
          }
          K === 0 && (ee += yt);
      }
      (ct = Pe), (Pe = Z), we++;
    }
    if (((Qe = be.length), 0 < Qe)) {
      if (
        ((Ge = F),
        0 < R &&
          ((dn = s(2, be, Ge, A, re, X, Qe, G, T, G)),
          dn !== void 0 && (be = dn).length === 0))
      )
        return Vn + be + Kr;
      if (((be = Ge.join(',') + '{' + be + '}'), I * W !== 0)) {
        switch ((I !== 2 || i(be, 2) || (W = 0), W)) {
          case 111:
            be = be.replace(E, ':-moz-$1') + be;
            break;
          case 112:
            be =
              be.replace(y, '::-webkit-input-$1') +
              be.replace(y, '::-moz-$1') +
              be.replace(y, ':-ms-input-$1') +
              be;
        }
        W = 0;
      }
    }
    return Vn + be + Kr;
  }
  function n(A, F, U) {
    var G = F.trim().split(x);
    F = G;
    var T = G.length,
      ie = A.length;
    switch (ie) {
      case 0:
      case 1:
        var K = 0;
        for (A = ie === 0 ? '' : A[0] + ' '; K < T; ++K)
          F[K] = r(A, F[K], U).trim();
        break;
      default:
        var ve = (K = 0);
        for (F = []; K < T; ++K)
          for (var ae = 0; ae < ie; ++ae)
            F[ve++] = r(A[ae] + ' ', G[K], U).trim();
    }
    return F;
  }
  function r(A, F, U) {
    var G = F.charCodeAt(0);
    switch ((33 > G && (G = (F = F.trim()).charCodeAt(0)), G)) {
      case 38:
        return F.replace(f, '$1' + A.trim());
      case 58:
        return A.trim() + F.replace(f, '$1' + A.trim());
      default:
        if (0 < 1 * U && 0 < F.indexOf('\f'))
          return F.replace(f, (A.charCodeAt(0) === 58 ? '' : '$1') + A.trim());
    }
    return A + F;
  }
  function o(A, F, U, G) {
    var T = A + ';',
      ie = 2 * F + 3 * U + 4 * G;
    if (ie === 944) {
      A = T.indexOf(':', 9) + 1;
      var K = T.substring(A, T.length - 1).trim();
      return (
        (K = T.substring(0, A).trim() + K + ';'),
        I === 1 || (I === 2 && i(K, 1)) ? '-webkit-' + K + K : K
      );
    }
    if (I === 0 || (I === 2 && !i(T, 1))) return T;
    switch (ie) {
      case 1015:
        return T.charCodeAt(10) === 97 ? '-webkit-' + T + T : T;
      case 951:
        return T.charCodeAt(3) === 116 ? '-webkit-' + T + T : T;
      case 963:
        return T.charCodeAt(5) === 110 ? '-webkit-' + T + T : T;
      case 1009:
        if (T.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return '-webkit-' + T + T;
      case 978:
        return '-webkit-' + T + '-moz-' + T + T;
      case 1019:
      case 983:
        return '-webkit-' + T + '-moz-' + T + '-ms-' + T + T;
      case 883:
        if (T.charCodeAt(8) === 45) return '-webkit-' + T + T;
        if (0 < T.indexOf('image-set(', 11))
          return T.replace(V, '$1-webkit-$2') + T;
        break;
      case 932:
        if (T.charCodeAt(4) === 45)
          switch (T.charCodeAt(5)) {
            case 103:
              return (
                '-webkit-box-' +
                T.replace('-grow', '') +
                '-webkit-' +
                T +
                '-ms-' +
                T.replace('grow', 'positive') +
                T
              );
            case 115:
              return (
                '-webkit-' + T + '-ms-' + T.replace('shrink', 'negative') + T
              );
            case 98:
              return (
                '-webkit-' +
                T +
                '-ms-' +
                T.replace('basis', 'preferred-size') +
                T
              );
          }
        return '-webkit-' + T + '-ms-' + T + T;
      case 964:
        return '-webkit-' + T + '-ms-flex-' + T + T;
      case 1023:
        if (T.charCodeAt(8) !== 99) break;
        return (
          (K = T.substring(T.indexOf(':', 15))
            .replace('flex-', '')
            .replace('space-between', 'justify')),
          '-webkit-box-pack' + K + '-webkit-' + T + '-ms-flex-pack' + K + T
        );
      case 1005:
        return g.test(T)
          ? T.replace(w, ':-webkit-') + T.replace(w, ':-moz-') + T
          : T;
      case 1e3:
        switch (
          ((K = T.substring(13).trim()),
          (F = K.indexOf('-') + 1),
          K.charCodeAt(0) + K.charCodeAt(F))
        ) {
          case 226:
            K = T.replace(b, 'tb');
            break;
          case 232:
            K = T.replace(b, 'tb-rl');
            break;
          case 220:
            K = T.replace(b, 'lr');
            break;
          default:
            return T;
        }
        return '-webkit-' + T + '-ms-' + K + T;
      case 1017:
        if (T.indexOf('sticky', 9) === -1) break;
      case 975:
        switch (
          ((F = (T = A).length - 10),
          (K = (T.charCodeAt(F) === 33 ? T.substring(0, F) : T)
            .substring(A.indexOf(':', 7) + 1)
            .trim()),
          (ie = K.charCodeAt(0) + (K.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > K.charCodeAt(8)) break;
          case 115:
            T = T.replace(K, '-webkit-' + K) + ';' + T;
            break;
          case 207:
          case 102:
            T =
              T.replace(K, '-webkit-' + (102 < ie ? 'inline-' : '') + 'box') +
              ';' +
              T.replace(K, '-webkit-' + K) +
              ';' +
              T.replace(K, '-ms-' + K + 'box') +
              ';' +
              T;
        }
        return T + ';';
      case 938:
        if (T.charCodeAt(5) === 45)
          switch (T.charCodeAt(6)) {
            case 105:
              return (
                (K = T.replace('-items', '')),
                '-webkit-' + T + '-webkit-box-' + K + '-ms-flex-' + K + T
              );
            case 115:
              return '-webkit-' + T + '-ms-flex-item-' + T.replace($, '') + T;
            default:
              return (
                '-webkit-' +
                T +
                '-ms-flex-line-pack' +
                T.replace('align-content', '').replace($, '') +
                T
              );
          }
        break;
      case 973:
      case 989:
        if (T.charCodeAt(3) !== 45 || T.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (N.test(A) === !0)
          return (K = A.substring(A.indexOf(':') + 1)).charCodeAt(0) === 115
            ? o(A.replace('stretch', 'fill-available'), F, U, G).replace(
                ':fill-available',
                ':stretch'
              )
            : T.replace(K, '-webkit-' + K) +
                T.replace(K, '-moz-' + K.replace('fill-', '')) +
                T;
        break;
      case 962:
        if (
          ((T =
            '-webkit-' + T + (T.charCodeAt(5) === 102 ? '-ms-' + T : '') + T),
          U + G === 211 &&
            T.charCodeAt(13) === 105 &&
            0 < T.indexOf('transform', 10))
        )
          return (
            T.substring(0, T.indexOf(';', 27) + 1).replace(m, '$1-webkit-$2') +
            T
          );
    }
    return T;
  }
  function i(A, F) {
    var U = A.indexOf(F === 1 ? ':' : '{'),
      G = A.substring(0, F !== 3 ? U : 10);
    return (
      (U = A.substring(U + 1, A.length - 1)),
      M(F !== 2 ? G : G.replace(H, '$1'), U, F)
    );
  }
  function a(A, F) {
    var U = o(F, F.charCodeAt(0), F.charCodeAt(1), F.charCodeAt(2));
    return U !== F + ';'
      ? U.replace(_, ' or ($1)').substring(4)
      : '(' + F + ')';
  }
  function s(A, F, U, G, T, ie, K, ve, ae, ne) {
    for (var Z = 0, Pe = F, ct; Z < R; ++Z)
      switch ((ct = D[Z].call(c, A, Pe, U, G, T, ie, K, ve, ae, ne))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Pe = ct;
      }
    if (Pe !== F) return Pe;
  }
  function l(A) {
    switch (A) {
      case void 0:
      case null:
        R = D.length = 0;
        break;
      default:
        if (typeof A == 'function') D[R++] = A;
        else if (typeof A == 'object')
          for (var F = 0, U = A.length; F < U; ++F) l(A[F]);
        else z = !!A | 0;
    }
    return l;
  }
  function u(A) {
    return (
      (A = A.prefix),
      A !== void 0 &&
        ((M = null),
        A ? (typeof A != 'function' ? (I = 1) : ((I = 2), (M = A))) : (I = 0)),
      u
    );
  }
  function c(A, F) {
    var U = A;
    if ((33 > U.charCodeAt(0) && (U = U.trim()), (q = U), (U = [q]), 0 < R)) {
      var G = s(-1, F, U, U, re, X, 0, 0, 0, 0);
      G !== void 0 && typeof G == 'string' && (F = G);
    }
    var T = t(L, U, F, 0, 0);
    return (
      0 < R &&
        ((G = s(-2, T, U, U, re, X, T.length, 0, 0, 0)),
        G !== void 0 && (T = G)),
      (q = ''),
      (W = 0),
      (X = re = 1),
      T
    );
  }
  var d = /^\0+/g,
    p = /[\0\r\f]/g,
    w = /: */g,
    g = /zoo|gra/,
    m = /([,: ])(transform)/g,
    x = /,\r+?/g,
    f = /([\t\r\n ])*\f?&/g,
    h = /@(k\w+)\s*(\S*)\s*/,
    y = /::(place)/g,
    E = /:(read-only)/g,
    b = /[svh]\w+-[tblr]{2}/,
    S = /\(\s*(.*)\s*\)/g,
    _ = /([\s\S]*?);/g,
    $ = /-self|flex-/g,
    H = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    N = /stretch|:\s*\w+\-(?:conte|avail)/,
    V = /([^-])(image-set\()/,
    X = 1,
    re = 1,
    W = 0,
    I = 1,
    L = [],
    D = [],
    R = 0,
    M = null,
    z = 0,
    q = '';
  return (c.use = l), (c.set = u), e !== void 0 && u(e), c;
}
var n2 = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function r1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var r2 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Lc = r1(function (e) {
    return (
      r2.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  rf = nf,
  o2 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  i2 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  a2 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  o1 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  of = {};
of[rf.ForwardRef] = a2;
of[rf.Memo] = o1;
function Ch(e) {
  return rf.isMemo(e) ? o1 : of[e.$$typeof] || o2;
}
var s2 = Object.defineProperty,
  l2 = Object.getOwnPropertyNames,
  bh = Object.getOwnPropertySymbols,
  u2 = Object.getOwnPropertyDescriptor,
  c2 = Object.getPrototypeOf,
  _h = Object.prototype;
function i1(e, t, n) {
  if (typeof t != 'string') {
    if (_h) {
      var r = c2(t);
      r && r !== _h && i1(e, r, n);
    }
    var o = l2(t);
    bh && (o = o.concat(bh(t)));
    for (var i = Ch(e), a = Ch(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!i2[l] && !(n && n[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = u2(t, l);
        try {
          s2(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
var d2 = i1;
const f2 = Xi(d2);
var Bt = {};
function Nn() {
  return (Nn =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var Rh = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  Dc = function (e) {
    return (
      e !== null &&
      typeof e == 'object' &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        '[object Object]' &&
      !nf.typeOf(e)
    );
  },
  Ms = Object.freeze([]),
  pr = Object.freeze({});
function Vi(e) {
  return typeof e == 'function';
}
function Th(e) {
  return e.displayName || e.name || 'Component';
}
function af(e) {
  return e && typeof e.styledComponentId == 'string';
}
var jo =
    (typeof process < 'u' &&
      Bt !== void 0 &&
      (Bt.REACT_APP_SC_ATTR || Bt.SC_ATTR)) ||
    'data-styled',
  sf = typeof window < 'u' && 'HTMLElement' in window,
  p2 = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      Bt !== void 0 &&
      (Bt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      Bt.REACT_APP_SC_DISABLE_SPEEDY !== ''
        ? Bt.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
          Bt.REACT_APP_SC_DISABLE_SPEEDY
        : Bt.SC_DISABLE_SPEEDY !== void 0 &&
          Bt.SC_DISABLE_SPEEDY !== '' &&
          Bt.SC_DISABLE_SPEEDY !== 'false' &&
          Bt.SC_DISABLE_SPEEDY));
function aa(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    'An error occurred. See https://git.io/JUIaE#' +
      e +
      ' for more information.' +
      (n.length > 0 ? ' Args: ' + n.join(', ') : '')
  );
}
var h2 = (function () {
    function e(n) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = n);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (n) {
        for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
        return r;
      }),
      (t.insertRules = function (n, r) {
        if (n >= this.groupSizes.length) {
          for (var o = this.groupSizes, i = o.length, a = i; n >= a; )
            (a <<= 1) < 0 && aa(16, '' + n);
          (this.groupSizes = new Uint32Array(a)),
            this.groupSizes.set(o),
            (this.length = a);
          for (var s = i; s < a; s++) this.groupSizes[s] = 0;
        }
        for (var l = this.indexOfGroup(n + 1), u = 0, c = r.length; u < c; u++)
          this.tag.insertRule(l, r[u]) && (this.groupSizes[n]++, l++);
      }),
      (t.clearGroup = function (n) {
        if (n < this.length) {
          var r = this.groupSizes[n],
            o = this.indexOfGroup(n),
            i = o + r;
          this.groupSizes[n] = 0;
          for (var a = o; a < i; a++) this.tag.deleteRule(o);
        }
      }),
      (t.getGroup = function (n) {
        var r = '';
        if (n >= this.length || this.groupSizes[n] === 0) return r;
        for (
          var o = this.groupSizes[n],
            i = this.indexOfGroup(n),
            a = i + o,
            s = i;
          s < a;
          s++
        )
          r +=
            this.tag.getRule(s) +
            `/*!sc*/
`;
        return r;
      }),
      e
    );
  })(),
  es = new Map(),
  Is = new Map(),
  Ei = 1,
  Da = function (e) {
    if (es.has(e)) return es.get(e);
    for (; Is.has(Ei); ) Ei++;
    var t = Ei++;
    return es.set(e, t), Is.set(t, e), t;
  },
  m2 = function (e) {
    return Is.get(e);
  },
  g2 = function (e, t) {
    t >= Ei && (Ei = t + 1), es.set(e, t), Is.set(t, e);
  },
  y2 = 'style[' + jo + '][data-styled-version="5.3.11"]',
  v2 = new RegExp('^' + jo + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  w2 = function (e, t, n) {
    for (var r, o = n.split(','), i = 0, a = o.length; i < a; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  x2 = function (e, t) {
    for (
      var n = (t.textContent || '').split(`/*!sc*/
`),
        r = [],
        o = 0,
        i = n.length;
      o < i;
      o++
    ) {
      var a = n[o].trim();
      if (a) {
        var s = a.match(v2);
        if (s) {
          var l = 0 | parseInt(s[1], 10),
            u = s[2];
          l !== 0 && (g2(u, l), w2(e, u, s[3]), e.getTag().insertRules(l, r)),
            (r.length = 0);
        } else r.push(a);
      }
    }
  },
  S2 = function () {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
  },
  a1 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement('style'),
      o = (function (s) {
        for (var l = s.childNodes, u = l.length; u >= 0; u--) {
          var c = l[u];
          if (c && c.nodeType === 1 && c.hasAttribute(jo)) return c;
        }
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(jo, 'active'),
      r.setAttribute('data-styled-version', '5.3.11');
    var a = S2();
    return a && r.setAttribute('nonce', a), n.insertBefore(r, i), r;
  },
  E2 = (function () {
    function e(n) {
      var r = (this.element = a1(n));
      r.appendChild(document.createTextNode('')),
        (this.sheet = (function (o) {
          if (o.sheet) return o.sheet;
          for (var i = document.styleSheets, a = 0, s = i.length; a < s; a++) {
            var l = i[a];
            if (l.ownerNode === o) return l;
          }
          aa(17);
        })(r)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        try {
          return this.sheet.insertRule(r, n), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--;
      }),
      (t.getRule = function (n) {
        var r = this.sheet.cssRules[n];
        return r !== void 0 && typeof r.cssText == 'string' ? r.cssText : '';
      }),
      e
    );
  })(),
  k2 = (function () {
    function e(n) {
      var r = (this.element = a1(n));
      (this.nodes = r.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        if (n <= this.length && n >= 0) {
          var o = document.createTextNode(r),
            i = this.nodes[n];
          return this.element.insertBefore(o, i || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : '';
      }),
      e
    );
  })(),
  C2 = (function () {
    function e(n) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        return (
          n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
        );
      }),
      (t.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.rules[n] : '';
      }),
      e
    );
  })(),
  Ph = sf,
  b2 = { isServer: !sf, useCSSOMInjection: !p2 },
  s1 = (function () {
    function e(n, r, o) {
      n === void 0 && (n = pr),
        r === void 0 && (r = {}),
        (this.options = Nn({}, b2, {}, n)),
        (this.gs = r),
        (this.names = new Map(o)),
        (this.server = !!n.isServer),
        !this.server &&
          sf &&
          Ph &&
          ((Ph = !1),
          (function (i) {
            for (
              var a = document.querySelectorAll(y2), s = 0, l = a.length;
              s < l;
              s++
            ) {
              var u = a[s];
              u &&
                u.getAttribute(jo) !== 'active' &&
                (x2(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this));
    }
    e.registerId = function (n) {
      return Da(n);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (n, r) {
        return (
          r === void 0 && (r = !0),
          new e(
            Nn({}, this.options, {}, n),
            this.gs,
            (r && this.names) || void 0
          )
        );
      }),
      (t.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((o = (r = this.options).isServer),
            (i = r.useCSSOMInjection),
            (a = r.target),
            (n = o ? new C2(a) : i ? new E2(a) : new k2(a)),
            new h2(n)))
        );
        var n, r, o, i, a;
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r);
      }),
      (t.registerName = function (n, r) {
        if ((Da(n), this.names.has(n))) this.names.get(n).add(r);
        else {
          var o = new Set();
          o.add(r), this.names.set(n, o);
        }
      }),
      (t.insertRules = function (n, r, o) {
        this.registerName(n, r), this.getTag().insertRules(Da(n), o);
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear();
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(Da(n)), this.clearNames(n);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), o = r.length, i = '', a = 0; a < o; a++) {
            var s = m2(a);
            if (s !== void 0) {
              var l = n.names.get(s),
                u = r.getGroup(a);
              if (l && u && l.size) {
                var c = jo + '.g' + a + '[id="' + s + '"]',
                  d = '';
                l !== void 0 &&
                  l.forEach(function (p) {
                    p.length > 0 && (d += p + ',');
                  }),
                  (i +=
                    '' +
                    u +
                    c +
                    '{content:"' +
                    d +
                    `"}/*!sc*/
`);
              }
            }
          }
          return i;
        })(this);
      }),
      e
    );
  })(),
  _2 = /(a)(d)/gi,
  $h = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Mc(e) {
  var t,
    n = '';
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = $h(t % 52) + n;
  return ($h(t % 52) + n).replace(_2, '$1-$2');
}
var go = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  l1 = function (e) {
    return go(5381, e);
  };
function R2(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Vi(n) && !af(n)) return !1;
  }
  return !0;
}
var T2 = l1('5.3.11'),
  P2 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ''),
        (this.isStatic = (r === void 0 || r.isStatic) && R2(t)),
        (this.componentId = n),
        (this.baseHash = go(T2, n)),
        (this.baseStyle = r),
        s1.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.componentId,
          i = [];
        if (
          (this.baseStyle &&
            i.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId))
            i.push(this.staticRulesId);
          else {
            var a = Ao(this.rules, t, n, r).join(''),
              s = Mc(go(this.baseHash, a) >>> 0);
            if (!n.hasNameForId(o, s)) {
              var l = r(a, '.' + s, void 0, o);
              n.insertRules(o, s, l);
            }
            i.push(s), (this.staticRulesId = s);
          }
        else {
          for (
            var u = this.rules.length,
              c = go(this.baseHash, r.hash),
              d = '',
              p = 0;
            p < u;
            p++
          ) {
            var w = this.rules[p];
            if (typeof w == 'string') d += w;
            else if (w) {
              var g = Ao(w, t, n, r),
                m = Array.isArray(g) ? g.join('') : g;
              (c = go(c, m + p)), (d += m);
            }
          }
          if (d) {
            var x = Mc(c >>> 0);
            if (!n.hasNameForId(o, x)) {
              var f = r(d, '.' + x, void 0, o);
              n.insertRules(o, x, f);
            }
            i.push(x);
          }
        }
        return i.join(' ');
      }),
      e
    );
  })(),
  $2 = /^\s*\/\/.*$/gm,
  N2 = [':', '[', '.', '#'];
function O2(e) {
  var t,
    n,
    r,
    o,
    i = e === void 0 ? pr : e,
    a = i.options,
    s = a === void 0 ? pr : a,
    l = i.plugins,
    u = l === void 0 ? Ms : l,
    c = new t2(s),
    d = [],
    p = (function (m) {
      function x(f) {
        if (f)
          try {
            m(f + '}');
          } catch {}
      }
      return function (f, h, y, E, b, S, _, $, H, N) {
        switch (f) {
          case 1:
            if (H === 0 && h.charCodeAt(0) === 64) return m(h + ';'), '';
            break;
          case 2:
            if ($ === 0) return h + '/*|*/';
            break;
          case 3:
            switch ($) {
              case 102:
              case 112:
                return m(y[0] + h), '';
              default:
                return h + (N === 0 ? '/*|*/' : '');
            }
          case -2:
            h.split('/*|*/}').forEach(x);
        }
      };
    })(function (m) {
      d.push(m);
    }),
    w = function (m, x, f) {
      return (x === 0 && N2.indexOf(f[n.length]) !== -1) || f.match(o)
        ? m
        : '.' + t;
    };
  function g(m, x, f, h) {
    h === void 0 && (h = '&');
    var y = m.replace($2, ''),
      E = x && f ? f + ' ' + x + ' { ' + y + ' }' : y;
    return (
      (t = h),
      (n = x),
      (r = new RegExp('\\' + n + '\\b', 'g')),
      (o = new RegExp('(\\' + n + '\\b){2,}')),
      c(f || !x ? '' : x, E)
    );
  }
  return (
    c.use(
      [].concat(u, [
        function (m, x, f) {
          m === 2 &&
            f.length &&
            f[0].lastIndexOf(n) > 0 &&
            (f[0] = f[0].replace(r, w));
        },
        p,
        function (m) {
          if (m === -2) {
            var x = d;
            return (d = []), x;
          }
        },
      ])
    ),
    (g.hash = u.length
      ? u
          .reduce(function (m, x) {
            return x.name || aa(15), go(m, x.name);
          }, 5381)
          .toString()
      : ''),
    g
  );
}
var u1 = Ee.createContext();
u1.Consumer;
var c1 = Ee.createContext(),
  j2 = (c1.Consumer, new s1()),
  Ic = O2();
function A2() {
  return k.useContext(u1) || j2;
}
function L2() {
  return k.useContext(c1) || Ic;
}
var D2 = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = Ic);
        var a = r.name + i.hash;
        o.hasNameForId(r.id, a) ||
          o.insertRules(r.id, a, i(r.rules, a, '@keyframes'));
      }),
        (this.toString = function () {
          return aa(12, String(r.name));
        }),
        (this.name = t),
        (this.id = 'sc-keyframes-' + t),
        (this.rules = n);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Ic), this.name + t.hash;
      }),
      e
    );
  })(),
  M2 = /([A-Z])/,
  I2 = /([A-Z])/g,
  z2 = /^ms-/,
  F2 = function (e) {
    return '-' + e.toLowerCase();
  };
function Nh(e) {
  return M2.test(e) ? e.replace(I2, F2).replace(z2, '-ms-') : e;
}
var Oh = function (e) {
  return e == null || e === !1 || e === '';
};
function Ao(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
      (o = Ao(e[a], t, n, r)) !== '' &&
        (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Oh(e)) return '';
  if (af(e)) return '.' + e.styledComponentId;
  if (Vi(e)) {
    if (
      typeof (u = e) != 'function' ||
      (u.prototype && u.prototype.isReactComponent) ||
      !t
    )
      return e;
    var l = e(t);
    return Ao(l, t, n, r);
  }
  var u;
  return e instanceof D2
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : Dc(e)
    ? (function c(d, p) {
        var w,
          g,
          m = [];
        for (var x in d)
          d.hasOwnProperty(x) &&
            !Oh(d[x]) &&
            ((Array.isArray(d[x]) && d[x].isCss) || Vi(d[x])
              ? m.push(Nh(x) + ':', d[x], ';')
              : Dc(d[x])
              ? m.push.apply(m, c(d[x], x))
              : m.push(
                  Nh(x) +
                    ': ' +
                    ((w = x),
                    (g = d[x]) == null || typeof g == 'boolean' || g === ''
                      ? ''
                      : typeof g != 'number' ||
                        g === 0 ||
                        w in n2 ||
                        w.startsWith('--')
                      ? String(g).trim()
                      : g + 'px') +
                    ';'
                ));
        return p ? [p + ' {'].concat(m, ['}']) : m;
      })(e)
    : e.toString();
}
var jh = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function U2(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return Vi(e) || Dc(e)
    ? jh(Ao(Rh(Ms, [e].concat(n))))
    : n.length === 0 && e.length === 1 && typeof e[0] == 'string'
    ? e
    : jh(Ao(Rh(e, n)));
}
var B2 = function (e, t, n) {
    return (
      n === void 0 && (n = pr), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  },
  H2 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  W2 = /(^-|-$)/g;
function Eu(e) {
  return e.replace(H2, '-').replace(W2, '');
}
var V2 = function (e) {
  return Mc(l1(e) >>> 0);
};
function Ma(e) {
  return typeof e == 'string' && !0;
}
var zc = function (e) {
    return (
      typeof e == 'function' ||
      (typeof e == 'object' && e !== null && !Array.isArray(e))
    );
  },
  K2 = function (e) {
    return e !== '__proto__' && e !== 'constructor' && e !== 'prototype';
  };
function Y2(e, t, n) {
  var r = e[n];
  zc(t) && zc(r) ? d1(r, t) : (e[n] = t);
}
function d1(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var a = i[o];
    if (zc(a)) for (var s in a) K2(s) && Y2(e, a[s], s);
  }
  return e;
}
var f1 = Ee.createContext();
f1.Consumer;
var ku = {};
function p1(e, t, n) {
  var r = af(e),
    o = !Ma(e),
    i = t.attrs,
    a = i === void 0 ? Ms : i,
    s = t.componentId,
    l =
      s === void 0
        ? (function (h, y) {
            var E = typeof h != 'string' ? 'sc' : Eu(h);
            ku[E] = (ku[E] || 0) + 1;
            var b = E + '-' + V2('5.3.11' + E + ku[E]);
            return y ? y + '-' + b : b;
          })(t.displayName, t.parentComponentId)
        : s,
    u = t.displayName,
    c =
      u === void 0
        ? (function (h) {
            return Ma(h) ? 'styled.' + h : 'Styled(' + Th(h) + ')';
          })(e)
        : u,
    d =
      t.displayName && t.componentId
        ? Eu(t.displayName) + '-' + t.componentId
        : t.componentId || l,
    p = r && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a,
    w = t.shouldForwardProp;
  r &&
    e.shouldForwardProp &&
    (w = t.shouldForwardProp
      ? function (h, y, E) {
          return e.shouldForwardProp(h, y, E) && t.shouldForwardProp(h, y, E);
        }
      : e.shouldForwardProp);
  var g,
    m = new P2(n, d, r ? e.componentStyle : void 0),
    x = m.isStatic && a.length === 0,
    f = function (h, y) {
      return (function (E, b, S, _) {
        var $ = E.attrs,
          H = E.componentStyle,
          N = E.defaultProps,
          V = E.foldedComponentIds,
          X = E.shouldForwardProp,
          re = E.styledComponentId,
          W = E.target,
          I = (function (G, T, ie) {
            G === void 0 && (G = pr);
            var K = Nn({}, T, { theme: G }),
              ve = {};
            return (
              ie.forEach(function (ae) {
                var ne,
                  Z,
                  Pe,
                  ct = ae;
                for (ne in (Vi(ct) && (ct = ct(K)), ct))
                  K[ne] = ve[ne] =
                    ne === 'className'
                      ? ((Z = ve[ne]),
                        (Pe = ct[ne]),
                        Z && Pe ? Z + ' ' + Pe : Z || Pe)
                      : ct[ne];
              }),
              [K, ve]
            );
          })(B2(b, k.useContext(f1), N) || pr, b, $),
          L = I[0],
          D = I[1],
          R = (function (G, T, ie, K) {
            var ve = A2(),
              ae = L2(),
              ne = T
                ? G.generateAndInjectStyles(pr, ve, ae)
                : G.generateAndInjectStyles(ie, ve, ae);
            return ne;
          })(H, _, L),
          M = S,
          z = D.$as || b.$as || D.as || b.as || W,
          q = Ma(z),
          A = D !== b ? Nn({}, b, {}, D) : b,
          F = {};
        for (var U in A)
          U[0] !== '$' &&
            U !== 'as' &&
            (U === 'forwardedAs'
              ? (F.as = A[U])
              : (X ? X(U, Lc, z) : !q || Lc(U)) && (F[U] = A[U]));
        return (
          b.style &&
            D.style !== b.style &&
            (F.style = Nn({}, b.style, {}, D.style)),
          (F.className = Array.prototype
            .concat(V, re, R !== re ? R : null, b.className, D.className)
            .filter(Boolean)
            .join(' ')),
          (F.ref = M),
          k.createElement(z, F)
        );
      })(g, h, y, x);
    };
  return (
    (f.displayName = c),
    ((g = Ee.forwardRef(f)).attrs = p),
    (g.componentStyle = m),
    (g.displayName = c),
    (g.shouldForwardProp = w),
    (g.foldedComponentIds = r
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : Ms),
    (g.styledComponentId = d),
    (g.target = r ? e.target : e),
    (g.withComponent = function (h) {
      var y = t.componentId,
        E = (function (S, _) {
          if (S == null) return {};
          var $,
            H,
            N = {},
            V = Object.keys(S);
          for (H = 0; H < V.length; H++)
            ($ = V[H]), _.indexOf($) >= 0 || (N[$] = S[$]);
          return N;
        })(t, ['componentId']),
        b = y && y + '-' + (Ma(h) ? h : Eu(Th(h)));
      return p1(h, Nn({}, E, { attrs: p, componentId: b }), n);
    }),
    Object.defineProperty(g, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (h) {
        this._foldedDefaultProps = r ? d1({}, e.defaultProps, h) : h;
      },
    }),
    Object.defineProperty(g, 'toString', {
      value: function () {
        return '.' + g.styledComponentId;
      },
    }),
    o &&
      f2(g, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    g
  );
}
var Fc = function (e) {
  return (function t(n, r, o) {
    if ((o === void 0 && (o = pr), !nf.isValidElementType(r)))
      return aa(1, String(r));
    var i = function () {
      return n(r, o, U2.apply(void 0, arguments));
    };
    return (
      (i.withConfig = function (a) {
        return t(n, r, Nn({}, o, {}, a));
      }),
      (i.attrs = function (a) {
        return t(
          n,
          r,
          Nn({}, o, {
            attrs: Array.prototype.concat(o.attrs, a).filter(Boolean),
          })
        );
      }),
      i
    );
  })(p1, e);
};
[
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'textPath',
  'tspan',
].forEach(function (e) {
  Fc[e] = Fc(e);
});
const gt = Fc,
  G2 = gt.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  /* styling for different screen sizes */
  @media (min-width: 800px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`,
  Ct = ({
    type: e,
    name: t,
    labelText: n,
    defaultValue: r,
    className: o,
    onChange: i,
  }) =>
    v.jsxs('div', {
      className: o,
      children: [
        v.jsx('label', {
          htmlFor: 'name',
          className: 'form-label',
          children: n || t,
        }),
        v.jsx('input', {
          type: e,
          id: t,
          name: t,
          defaultValue: r,
          className: 'form-input',
          maxLength: t === 'description' ? '190' : '',
          onChange: i,
          required: !0,
        }),
      ],
    }),
  Q2 = gt.aside`
  @media (min-width: 800px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 50;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: white;
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 3rem 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-button {
    position: absolute;
    top: 15px;
    left: 15px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: black;
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .icon {
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-500);
  }
`;
var lf = {},
  h1 = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(h1);
var $t = h1.exports,
  Cu = {};
function me() {
  return (
    (me = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    me.apply(this, arguments)
  );
}
function tr(e) {
  return e !== null && typeof e == 'object' && e.constructor === Object;
}
function m1(e) {
  if (!tr(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = m1(e[n]);
    }),
    t
  );
}
function ln(e, t, n = { clone: !0 }) {
  const r = n.clone ? me({}, e) : e;
  return (
    tr(e) &&
      tr(t) &&
      Object.keys(t).forEach((o) => {
        o !== '__proto__' &&
          (tr(t[o]) && o in e && tr(e[o])
            ? (r[o] = ln(e[o], t[o], n))
            : n.clone
            ? (r[o] = tr(t[o]) ? m1(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function Lo(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
function En(e) {
  if (typeof e != 'string') throw new Error(Lo(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function q2(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function X2(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function J2(e, t) {
  return () => null;
}
function Z2(e, t) {
  var n, r;
  return (
    k.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
          (r = r._payload) == null ||
          (r = r.value) == null
        ? void 0
        : r.muiName
    ) !== -1
  );
}
function g1(e) {
  return (e && e.ownerDocument) || document;
}
function eE(e) {
  return g1(e).defaultView || window;
}
function tE(e, t) {
  return () => null;
}
function y1(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
const nE = typeof window < 'u' ? k.useLayoutEffect : k.useEffect,
  v1 = nE;
let Ah = 0;
function rE(e) {
  const [t, n] = k.useState(e),
    r = e || t;
  return (
    k.useEffect(() => {
      t == null && ((Ah += 1), n(`mui-${Ah}`));
    }, [t]),
    r
  );
}
const Lh = ds.useId;
function oE(e) {
  if (Lh !== void 0) {
    const t = Lh();
    return e ?? t;
  }
  return rE(e);
}
function iE(e, t, n, r, o) {
  return null;
}
function aE({ controlled: e, default: t, name: n, state: r = 'value' }) {
  const { current: o } = k.useRef(e !== void 0),
    [i, a] = k.useState(t),
    s = o ? e : i,
    l = k.useCallback((u) => {
      o || a(u);
    }, []);
  return [s, l];
}
function sE(e) {
  const t = k.useRef(e);
  return (
    v1(() => {
      t.current = e;
    }),
    k.useRef((...n) => (0, t.current)(...n)).current
  );
}
function lE(...e) {
  return k.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              y1(n, t);
            });
          },
    e
  );
}
let kl = !0,
  Uc = !1,
  Dh;
const uE = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  'datetime-local': !0,
};
function cE(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === 'INPUT' && uE[t] && !e.readOnly) ||
    (n === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  );
}
function dE(e) {
  e.metaKey || e.altKey || e.ctrlKey || (kl = !0);
}
function bu() {
  kl = !1;
}
function fE() {
  this.visibilityState === 'hidden' && Uc && (kl = !0);
}
function pE(e) {
  e.addEventListener('keydown', dE, !0),
    e.addEventListener('mousedown', bu, !0),
    e.addEventListener('pointerdown', bu, !0),
    e.addEventListener('touchstart', bu, !0),
    e.addEventListener('visibilitychange', fE, !0);
}
function hE(e) {
  const { target: t } = e;
  try {
    return t.matches(':focus-visible');
  } catch {}
  return kl || cE(t);
}
function mE() {
  const e = k.useCallback((o) => {
      o != null && pE(o.ownerDocument);
    }, []),
    t = k.useRef(!1);
  function n() {
    return t.current
      ? ((Uc = !0),
        window.clearTimeout(Dh),
        (Dh = window.setTimeout(() => {
          Uc = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return hE(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function w1(e, t) {
  const n = me({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = me({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = me({}, i)),
              Object.keys(o).forEach((a) => {
                n[r][a] = w1(o[a], i[a]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function gE(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, a) => {
          if (a) {
            const s = t(a);
            s !== '' && i.push(s), n && n[a] && i.push(n[a]);
          }
          return i;
        }, [])
        .join(' ');
    }),
    r
  );
}
const Mh = (e) => e,
  yE = () => {
    let e = Mh;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Mh;
      },
    };
  },
  vE = yE(),
  x1 = vE,
  wE = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    open: 'open',
    readOnly: 'readOnly',
    required: 'required',
    selected: 'selected',
  };
function S1(e, t, n = 'Mui') {
  const r = wE[t];
  return r ? `${n}-${r}` : `${x1.generate(e)}-${t}`;
}
function xE(e, t, n = 'Mui') {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = S1(e, o, n);
    }),
    r
  );
}
function Bn(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function E1(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = E1(e[t])) && (r && (r += ' '), (r += n));
    else for (t in e) e[t] && (r && (r += ' '), (r += t));
  return r;
}
function SE() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = E1(e)) && (r && (r += ' '), (r += t));
  return r;
}
function EE(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function kE(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var CE = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(kE(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = EE(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  pt = '-ms-',
  zs = '-moz-',
  xe = '-webkit-',
  k1 = 'comm',
  uf = 'rule',
  cf = 'decl',
  bE = '@import',
  C1 = '@keyframes',
  _E = '@layer',
  RE = Math.abs,
  Cl = String.fromCharCode,
  TE = Object.assign;
function PE(e, t) {
  return st(e, 0) ^ 45
    ? (((((((t << 2) ^ st(e, 0)) << 2) ^ st(e, 1)) << 2) ^ st(e, 2)) << 2) ^
        st(e, 3)
    : 0;
}
function b1(e) {
  return e.trim();
}
function $E(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Se(e, t, n) {
  return e.replace(t, n);
}
function Bc(e, t) {
  return e.indexOf(t);
}
function st(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ki(e, t, n) {
  return e.slice(t, n);
}
function mn(e) {
  return e.length;
}
function df(e) {
  return e.length;
}
function Ia(e, t) {
  return t.push(e), e;
}
function NE(e, t) {
  return e.map(t).join('');
}
var bl = 1,
  Do = 1,
  _1 = 0,
  Pt = 0,
  Ke = 0,
  Bo = '';
function _l(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: bl,
    column: Do,
    length: a,
    return: '',
  };
}
function ri(e, t) {
  return TE(_l('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function OE() {
  return Ke;
}
function jE() {
  return (
    (Ke = Pt > 0 ? st(Bo, --Pt) : 0), Do--, Ke === 10 && ((Do = 1), bl--), Ke
  );
}
function Dt() {
  return (
    (Ke = Pt < _1 ? st(Bo, Pt++) : 0), Do++, Ke === 10 && ((Do = 1), bl++), Ke
  );
}
function kn() {
  return st(Bo, Pt);
}
function ts() {
  return Pt;
}
function sa(e, t) {
  return Ki(Bo, e, t);
}
function Yi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function R1(e) {
  return (bl = Do = 1), (_1 = mn((Bo = e))), (Pt = 0), [];
}
function T1(e) {
  return (Bo = ''), e;
}
function ns(e) {
  return b1(sa(Pt - 1, Hc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function AE(e) {
  for (; (Ke = kn()) && Ke < 33; ) Dt();
  return Yi(e) > 2 || Yi(Ke) > 3 ? '' : ' ';
}
function LE(e, t) {
  for (
    ;
    --t &&
    Dt() &&
    !(Ke < 48 || Ke > 102 || (Ke > 57 && Ke < 65) || (Ke > 70 && Ke < 97));

  );
  return sa(e, ts() + (t < 6 && kn() == 32 && Dt() == 32));
}
function Hc(e) {
  for (; Dt(); )
    switch (Ke) {
      case e:
        return Pt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Hc(Ke);
        break;
      case 40:
        e === 41 && Hc(e);
        break;
      case 92:
        Dt();
        break;
    }
  return Pt;
}
function DE(e, t) {
  for (; Dt() && e + Ke !== 57; ) if (e + Ke === 84 && kn() === 47) break;
  return '/*' + sa(t, Pt - 1) + '*' + Cl(e === 47 ? e : Dt());
}
function ME(e) {
  for (; !Yi(kn()); ) Dt();
  return sa(e, Pt);
}
function IE(e) {
  return T1(rs('', null, null, null, [''], (e = R1(e)), 0, [0], e));
}
function rs(e, t, n, r, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      p = 0,
      w = 0,
      g = 0,
      m = 1,
      x = 1,
      f = 1,
      h = 0,
      y = '',
      E = o,
      b = i,
      S = r,
      _ = y;
    x;

  )
    switch (((g = h), (h = Dt()))) {
      case 40:
        if (g != 108 && st(_, d - 1) == 58) {
          Bc((_ += Se(ns(h), '&', '&\f')), '&\f') != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += ns(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += AE(g);
        break;
      case 92:
        _ += LE(ts() - 1, 7);
        continue;
      case 47:
        switch (kn()) {
          case 42:
          case 47:
            Ia(zE(DE(Dt(), ts()), t, n), l);
            break;
          default:
            _ += '/';
        }
        break;
      case 123 * m:
        s[u++] = mn(_) * f;
      case 125 * m:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            f == -1 && (_ = Se(_, /\f/g, '')),
              w > 0 &&
                mn(_) - d &&
                Ia(
                  w > 32
                    ? zh(_ + ';', r, n, d - 1)
                    : zh(Se(_, ' ', '') + ';', r, n, d - 2),
                  l
                );
            break;
          case 59:
            _ += ';';
          default:
            if (
              (Ia((S = Ih(_, t, n, u, c, o, s, y, (E = []), (b = []), d)), i),
              h === 123)
            )
              if (c === 0) rs(_, t, S, S, E, i, d, s, b);
              else
                switch (p === 99 && st(_, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    rs(
                      e,
                      S,
                      S,
                      r && Ia(Ih(e, S, S, 0, 0, o, s, y, o, (E = []), d), b),
                      o,
                      b,
                      d,
                      s,
                      r ? E : b
                    );
                    break;
                  default:
                    rs(_, S, S, S, [''], b, 0, s, b);
                }
        }
        (u = c = w = 0), (m = f = 1), (y = _ = ''), (d = a);
        break;
      case 58:
        (d = 1 + mn(_)), (w = g);
      default:
        if (m < 1) {
          if (h == 123) --m;
          else if (h == 125 && m++ == 0 && jE() == 125) continue;
        }
        switch (((_ += Cl(h)), h * m)) {
          case 38:
            f = c > 0 ? 1 : ((_ += '\f'), -1);
            break;
          case 44:
            (s[u++] = (mn(_) - 1) * f), (f = 1);
            break;
          case 64:
            kn() === 45 && (_ += ns(Dt())),
              (p = kn()),
              (c = d = mn((y = _ += ME(ts())))),
              h++;
            break;
          case 45:
            g === 45 && mn(_) == 2 && (m = 0);
        }
    }
  return i;
}
function Ih(e, t, n, r, o, i, a, s, l, u, c) {
  for (
    var d = o - 1, p = o === 0 ? i : [''], w = df(p), g = 0, m = 0, x = 0;
    g < r;
    ++g
  )
    for (var f = 0, h = Ki(e, d + 1, (d = RE((m = a[g])))), y = e; f < w; ++f)
      (y = b1(m > 0 ? p[f] + ' ' + h : Se(h, /&\f/g, p[f]))) && (l[x++] = y);
  return _l(e, t, n, o === 0 ? uf : s, l, u, c);
}
function zE(e, t, n) {
  return _l(e, t, n, k1, Cl(OE()), Ki(e, 2, -2), 0);
}
function zh(e, t, n, r) {
  return _l(e, t, n, cf, Ki(e, 0, r), Ki(e, r + 1, -1), r);
}
function Co(e, t) {
  for (var n = '', r = df(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
  return n;
}
function FE(e, t, n, r) {
  switch (e.type) {
    case _E:
      if (e.children.length) break;
    case bE:
    case cf:
      return (e.return = e.return || e.value);
    case k1:
      return '';
    case C1:
      return (e.return = e.value + '{' + Co(e.children, r) + '}');
    case uf:
      e.value = e.props.join(',');
  }
  return mn((n = Co(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
function UE(e) {
  var t = df(e);
  return function (n, r, o, i) {
    for (var a = '', s = 0; s < t; s++) a += e[s](n, r, o, i) || '';
    return a;
  };
}
function BE(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var HE = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = kn()), o === 38 && i === 12 && (n[r] = 1), !Yi(i);

    )
      Dt();
    return sa(t, Pt);
  },
  WE = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Yi(o)) {
        case 0:
          o === 38 && kn() === 12 && (n[r] = 1), (t[r] += HE(Pt - 1, n, r));
          break;
        case 2:
          t[r] += ns(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = kn() === 58 ? '&\f' : ''), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Cl(o);
      }
    while ((o = Dt()));
    return t;
  },
  VE = function (t, n) {
    return T1(WE(R1(t), n));
  },
  Fh = new WeakMap(),
  KE = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Fh.get(r)) &&
        !o
      ) {
        Fh.set(t, !0);
        for (
          var i = [], a = VE(n, i), s = r.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + ' ' + a[l];
      }
    }
  },
  YE = function (t) {
    if (t.type === 'decl') {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''));
    }
  };
function P1(e, t) {
  switch (PE(e, t)) {
    case 5103:
      return xe + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return xe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return xe + e + zs + e + pt + e + e;
    case 6828:
    case 4268:
      return xe + e + pt + e + e;
    case 6165:
      return xe + e + pt + 'flex-' + e + e;
    case 5187:
      return (
        xe + e + Se(e, /(\w+).+(:[^]+)/, xe + 'box-$1$2' + pt + 'flex-$1$2') + e
      );
    case 5443:
      return xe + e + pt + 'flex-item-' + Se(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        xe +
        e +
        pt +
        'flex-line-pack' +
        Se(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return xe + e + pt + Se(e, 'shrink', 'negative') + e;
    case 5292:
      return xe + e + pt + Se(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        xe +
        'box-' +
        Se(e, '-grow', '') +
        xe +
        e +
        pt +
        Se(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return xe + Se(e, /([^-])(transform)/g, '$1' + xe + '$2') + e;
    case 6187:
      return (
        Se(
          Se(Se(e, /(zoom-|grab)/, xe + '$1'), /(image-set)/, xe + '$1'),
          e,
          ''
        ) + e
      );
    case 5495:
    case 3959:
      return Se(e, /(image-set\([^]*)/, xe + '$1$`$1');
    case 4968:
      return (
        Se(
          Se(e, /(.+:)(flex-)?(.*)/, xe + 'box-pack:$3' + pt + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        xe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Se(e, /(.+)-inline(.+)/, xe + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (mn(e) - 1 - t > 6)
        switch (st(e, t + 1)) {
          case 109:
            if (st(e, t + 4) !== 45) break;
          case 102:
            return (
              Se(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  xe +
                  '$2-$3$1' +
                  zs +
                  (st(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~Bc(e, 'stretch')
              ? P1(Se(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (st(e, t + 1) !== 115) break;
    case 6444:
      switch (st(e, mn(e) - 3 - (~Bc(e, '!important') && 10))) {
        case 107:
          return Se(e, ':', ':' + xe) + e;
        case 101:
          return (
            Se(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                xe +
                (st(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                xe +
                '$2$3$1' +
                pt +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (st(e, t + 11)) {
        case 114:
          return xe + e + pt + Se(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return xe + e + pt + Se(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return xe + e + pt + Se(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return xe + e + pt + e + e;
  }
  return e;
}
var GE = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case cf:
          t.return = P1(t.value, t.length);
          break;
        case C1:
          return Co([ri(t, { value: Se(t.value, '@', '@' + xe) })], o);
        case uf:
          if (t.length)
            return NE(t.props, function (i) {
              switch ($E(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Co(
                    [ri(t, { props: [Se(i, /:(read-\w+)/, ':' + zs + '$1')] })],
                    o
                  );
                case '::placeholder':
                  return Co(
                    [
                      ri(t, {
                        props: [Se(i, /:(plac\w+)/, ':' + xe + 'input-$1')],
                      }),
                      ri(t, { props: [Se(i, /:(plac\w+)/, ':' + zs + '$1')] }),
                      ri(t, { props: [Se(i, /:(plac\w+)/, pt + 'input-$1')] }),
                    ],
                    o
                  );
              }
              return '';
            });
      }
  },
  QE = [GE],
  qE = function (t) {
    var n = t.key;
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (m) {
        var x = m.getAttribute('data-emotion');
        x.indexOf(' ') !== -1 &&
          (document.head.appendChild(m), m.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || QE,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (m) {
          for (
            var x = m.getAttribute('data-emotion').split(' '), f = 1;
            f < x.length;
            f++
          )
            i[x[f]] = !0;
          s.push(m);
        }
      );
    var l,
      u = [KE, YE];
    {
      var c,
        d = [
          FE,
          BE(function (m) {
            c.insert(m);
          }),
        ],
        p = UE(u.concat(o, d)),
        w = function (x) {
          return Co(IE(x), p);
        };
      l = function (x, f, h, y) {
        (c = h),
          w(x ? x + '{' + f.styles + '}' : f.styles),
          y && (g.inserted[f.name] = !0);
      };
    }
    var g = {
      key: n,
      sheet: new CE({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return g.sheet.hydrate(s), g;
  },
  XE = !0;
function JE(e, t, n) {
  var r = '';
  return (
    n.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (r += o + ' ');
    }),
    r
  );
}
var $1 = function (t, n, r) {
    var o = t.key + '-' + n.name;
    (r === !1 || XE === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  ZE = function (t, n, r) {
    $1(t, n, r);
    var o = t.key + '-' + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function ek(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var tk = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  nk = /[A-Z]|^ms/g,
  rk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  N1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Uh = function (t) {
    return t != null && typeof t != 'boolean';
  },
  _u = r1(function (e) {
    return N1(e) ? e : e.replace(nk, '-$&').toLowerCase();
  }),
  Bh = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(rk, function (r, o, i) {
            return (gn = { name: o, styles: i, next: gn }), o;
          });
    }
    return tk[t] !== 1 && !N1(t) && typeof n == 'number' && n !== 0
      ? n + 'px'
      : n;
  };
function Gi(e, t, n) {
  if (n == null) return '';
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      if (n.anim === 1)
        return (gn = { name: n.name, styles: n.styles, next: gn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (gn = { name: r.name, styles: r.styles, next: gn }), (r = r.next);
        var o = n.styles + ';';
        return o;
      }
      return ok(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var i = gn,
          a = n(e);
        return (gn = i), Gi(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function ok(e, t, n) {
  var r = '';
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Gi(e, t, n[o]) + ';';
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != 'object')
        t != null && t[a] !== void 0
          ? (r += i + '{' + t[a] + '}')
          : Uh(a) && (r += _u(i) + ':' + Bh(i, a) + ';');
      else if (
        Array.isArray(a) &&
        typeof a[0] == 'string' &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          Uh(a[s]) && (r += _u(i) + ':' + Bh(i, a[s]) + ';');
      else {
        var l = Gi(e, t, a);
        switch (i) {
          case 'animation':
          case 'animationName': {
            r += _u(i) + ':' + l + ';';
            break;
          }
          default:
            r += i + '{' + l + '}';
        }
      }
    }
  return r;
}
var Hh = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  gn,
  ik = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == 'object' &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = '';
    gn = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += Gi(r, n, a)))
      : (i += a[0]);
    for (var s = 1; s < t.length; s++) (i += Gi(r, n, t[s])), o && (i += a[s]);
    Hh.lastIndex = 0;
    for (var l = '', u; (u = Hh.exec(i)) !== null; ) l += '-' + u[1];
    var c = ek(i) + l;
    return { name: c, styles: i, next: gn };
  },
  ak = function (t) {
    return t();
  },
  sk = ds.useInsertionEffect ? ds.useInsertionEffect : !1,
  lk = sk || ak,
  O1 = k.createContext(typeof HTMLElement < 'u' ? qE({ key: 'css' }) : null);
O1.Provider;
var uk = function (t) {
    return k.forwardRef(function (n, r) {
      var o = k.useContext(O1);
      return t(n, o, r);
    });
  },
  j1 = k.createContext({}),
  ck = Lc,
  dk = function (t) {
    return t !== 'theme';
  },
  Wh = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? ck : dk;
  },
  Vh = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != 'function' && r && (o = t.__emotion_forwardProp), o;
  },
  fk = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      $1(n, r, o),
      lk(function () {
        return ZE(n, r, o);
      }),
      null
    );
  },
  pk = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      a;
    n !== void 0 && ((i = n.label), (a = n.target));
    var s = Vh(t, n, r),
      l = s || Wh(o),
      u = !l('as');
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push('label:' + i + ';'),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var p = c.length, w = 1; w < p; w++) d.push(c[w], c[0][w]);
      }
      var g = uk(function (m, x, f) {
        var h = (u && m.as) || o,
          y = '',
          E = [],
          b = m;
        if (m.theme == null) {
          b = {};
          for (var S in m) b[S] = m[S];
          b.theme = k.useContext(j1);
        }
        typeof m.className == 'string'
          ? (y = JE(x.registered, E, m.className))
          : m.className != null && (y = m.className + ' ');
        var _ = ik(d.concat(E), x.registered, b);
        (y += x.key + '-' + _.name), a !== void 0 && (y += ' ' + a);
        var $ = u && s === void 0 ? Wh(h) : l,
          H = {};
        for (var N in m) (u && N === 'as') || ($(N) && (H[N] = m[N]));
        return (
          (H.className = y),
          (H.ref = f),
          k.createElement(
            k.Fragment,
            null,
            k.createElement(fk, {
              cache: x,
              serialized: _,
              isStringTag: typeof h == 'string',
            }),
            k.createElement(h, H)
          )
        );
      });
      return (
        (g.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string'
                ? o
                : o.displayName || o.name || 'Component') +
              ')'),
        (g.defaultProps = t.defaultProps),
        (g.__emotion_real = g),
        (g.__emotion_base = o),
        (g.__emotion_styles = d),
        (g.__emotion_forwardProp = s),
        Object.defineProperty(g, 'toString', {
          value: function () {
            return '.' + a;
          },
        }),
        (g.withComponent = function (m, x) {
          return e(m, me({}, n, x, { shouldForwardProp: Vh(g, x, !0) })).apply(
            void 0,
            d
          );
        }),
        g
      );
    };
  },
  hk = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  Wc = pk.bind();
hk.forEach(function (e) {
  Wc[e] = Wc(e);
});
function mk(e, t) {
  return Wc(e, t);
}
const gk = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  yk = ['values', 'unit', 'step'],
  vk = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => me({}, n, { [r.key]: r.val }), {})
    );
  };
function wk(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5,
    } = e,
    o = Bn(e, yk),
    i = vk(t),
    a = Object.keys(i);
  function s(p) {
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n})`;
  }
  function l(p) {
    return `@media (max-width:${
      (typeof t[p] == 'number' ? t[p] : p) - r / 100
    }${n})`;
  }
  function u(p, w) {
    const g = a.indexOf(w);
    return `@media (min-width:${
      typeof t[p] == 'number' ? t[p] : p
    }${n}) and (max-width:${
      (g !== -1 && typeof t[a[g]] == 'number' ? t[a[g]] : w) - r / 100
    }${n})`;
  }
  function c(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : s(p);
  }
  function d(p) {
    const w = a.indexOf(p);
    return w === 0
      ? s(a[1])
      : w === a.length - 1
      ? l(a[w])
      : u(p, a[a.indexOf(p) + 1]).replace('@media', '@media not all and');
  }
  return me(
    {
      keys: a,
      values: i,
      up: s,
      down: l,
      between: u,
      only: c,
      not: d,
      unit: n,
    },
    o
  );
}
const xk = { borderRadius: 4 },
  Sk = xk;
function ki(e, t) {
  return t ? ln(e, t, { clone: !1 }) : e;
}
const ff = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Kh = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${ff[e]}px)`,
  };
function In(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Kh;
    return t.reduce((a, s, l) => ((a[i.up(i.keys[l])] = n(t[l])), a), {});
  }
  if (typeof t == 'object') {
    const i = r.breakpoints || Kh;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || ff).indexOf(s) !== -1) {
        const l = i.up(s);
        a[l] = n(t[s], s);
      } else {
        const l = s;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return n(t);
}
function Ek(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function kk(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Rl(e, t, n = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split('.')
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split('.').reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Fs(e, t, n, r = n) {
  let o;
  return (
    typeof e == 'function'
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Rl(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function Ve(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (a) => {
      if (a[t] == null) return null;
      const s = a[t],
        l = a.theme,
        u = Rl(l, r) || {};
      return In(a, s, (d) => {
        let p = Fs(u, o, d);
        return (
          d === p &&
            typeof d == 'string' &&
            (p = Fs(u, o, `${t}${d === 'default' ? '' : En(d)}`, d)),
          n === !1 ? p : { [n]: p }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function Ck(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const bk = { m: 'margin', p: 'padding' },
  _k = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  Yh = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  Rk = Ck((e) => {
    if (e.length > 2)
      if (Yh[e]) e = Yh[e];
      else return [e];
    const [t, n] = e.split(''),
      r = bk[t],
      o = _k[n] || '';
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  pf = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  hf = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...pf, ...hf];
function la(e, t, n, r) {
  var o;
  const i = (o = Rl(e, t, !1)) != null ? o : n;
  return typeof i == 'number'
    ? (a) => (typeof a == 'string' ? a : i * a)
    : Array.isArray(i)
    ? (a) => (typeof a == 'string' ? a : i[a])
    : typeof i == 'function'
    ? i
    : () => {};
}
function A1(e) {
  return la(e, 'spacing', 8);
}
function ua(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`;
}
function Tk(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = ua(t, n)), r), {});
}
function Pk(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = Rk(n),
    i = Tk(o, r),
    a = e[n];
  return In(e, a, i);
}
function L1(e, t) {
  const n = A1(e.theme);
  return Object.keys(e)
    .map((r) => Pk(e, t, r, n))
    .reduce(ki, {});
}
function ze(e) {
  return L1(e, pf);
}
ze.propTypes = {};
ze.filterProps = pf;
function Fe(e) {
  return L1(e, hf);
}
Fe.propTypes = {};
Fe.filterProps = hf;
function $k(e = 8) {
  if (e.mui) return e;
  const t = A1({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const a = t(i);
          return typeof a == 'number' ? `${a}px` : a;
        })
        .join(' ');
  return (n.mui = !0), n;
}
function Tl(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? ki(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function Yt(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
function Jt(e, t) {
  return Ve({ prop: e, themeKey: 'borders', transform: t });
}
const Nk = Jt('border', Yt),
  Ok = Jt('borderTop', Yt),
  jk = Jt('borderRight', Yt),
  Ak = Jt('borderBottom', Yt),
  Lk = Jt('borderLeft', Yt),
  Dk = Jt('borderColor'),
  Mk = Jt('borderTopColor'),
  Ik = Jt('borderRightColor'),
  zk = Jt('borderBottomColor'),
  Fk = Jt('borderLeftColor'),
  Uk = Jt('outline', Yt),
  Bk = Jt('outlineColor'),
  Pl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = la(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: ua(t, r) });
      return In(e, e.borderRadius, n);
    }
    return null;
  };
Pl.propTypes = {};
Pl.filterProps = ['borderRadius'];
Tl(Nk, Ok, jk, Ak, Lk, Dk, Mk, Ik, zk, Fk, Pl, Uk, Bk);
const $l = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = la(e.theme, 'spacing', 8),
      n = (r) => ({ gap: ua(t, r) });
    return In(e, e.gap, n);
  }
  return null;
};
$l.propTypes = {};
$l.filterProps = ['gap'];
const Nl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = la(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: ua(t, r) });
    return In(e, e.columnGap, n);
  }
  return null;
};
Nl.propTypes = {};
Nl.filterProps = ['columnGap'];
const Ol = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = la(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: ua(t, r) });
    return In(e, e.rowGap, n);
  }
  return null;
};
Ol.propTypes = {};
Ol.filterProps = ['rowGap'];
const Hk = Ve({ prop: 'gridColumn' }),
  Wk = Ve({ prop: 'gridRow' }),
  Vk = Ve({ prop: 'gridAutoFlow' }),
  Kk = Ve({ prop: 'gridAutoColumns' }),
  Yk = Ve({ prop: 'gridAutoRows' }),
  Gk = Ve({ prop: 'gridTemplateColumns' }),
  Qk = Ve({ prop: 'gridTemplateRows' }),
  qk = Ve({ prop: 'gridTemplateAreas' }),
  Xk = Ve({ prop: 'gridArea' });
Tl($l, Nl, Ol, Hk, Wk, Vk, Kk, Yk, Gk, Qk, qk, Xk);
function bo(e, t) {
  return t === 'grey' ? t : e;
}
const Jk = Ve({ prop: 'color', themeKey: 'palette', transform: bo }),
  Zk = Ve({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: bo,
  }),
  eC = Ve({ prop: 'backgroundColor', themeKey: 'palette', transform: bo });
Tl(Jk, Zk, eC);
function jt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const tC = Ve({ prop: 'width', transform: jt }),
  mf = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || ff[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== 'px'
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: jt(n) };
      };
      return In(e, e.maxWidth, t);
    }
    return null;
  };
mf.filterProps = ['maxWidth'];
const nC = Ve({ prop: 'minWidth', transform: jt }),
  rC = Ve({ prop: 'height', transform: jt }),
  oC = Ve({ prop: 'maxHeight', transform: jt }),
  iC = Ve({ prop: 'minHeight', transform: jt });
Ve({ prop: 'size', cssProperty: 'width', transform: jt });
Ve({ prop: 'size', cssProperty: 'height', transform: jt });
const aC = Ve({ prop: 'boxSizing' });
Tl(tC, mf, nC, rC, oC, iC, aC);
const sC = {
    border: { themeKey: 'borders', transform: Yt },
    borderTop: { themeKey: 'borders', transform: Yt },
    borderRight: { themeKey: 'borders', transform: Yt },
    borderBottom: { themeKey: 'borders', transform: Yt },
    borderLeft: { themeKey: 'borders', transform: Yt },
    borderColor: { themeKey: 'palette' },
    borderTopColor: { themeKey: 'palette' },
    borderRightColor: { themeKey: 'palette' },
    borderBottomColor: { themeKey: 'palette' },
    borderLeftColor: { themeKey: 'palette' },
    outline: { themeKey: 'borders', transform: Yt },
    outlineColor: { themeKey: 'palette' },
    borderRadius: { themeKey: 'shape.borderRadius', style: Pl },
    color: { themeKey: 'palette', transform: bo },
    bgcolor: {
      themeKey: 'palette',
      cssProperty: 'backgroundColor',
      transform: bo,
    },
    backgroundColor: { themeKey: 'palette', transform: bo },
    p: { style: Fe },
    pt: { style: Fe },
    pr: { style: Fe },
    pb: { style: Fe },
    pl: { style: Fe },
    px: { style: Fe },
    py: { style: Fe },
    padding: { style: Fe },
    paddingTop: { style: Fe },
    paddingRight: { style: Fe },
    paddingBottom: { style: Fe },
    paddingLeft: { style: Fe },
    paddingX: { style: Fe },
    paddingY: { style: Fe },
    paddingInline: { style: Fe },
    paddingInlineStart: { style: Fe },
    paddingInlineEnd: { style: Fe },
    paddingBlock: { style: Fe },
    paddingBlockStart: { style: Fe },
    paddingBlockEnd: { style: Fe },
    m: { style: ze },
    mt: { style: ze },
    mr: { style: ze },
    mb: { style: ze },
    ml: { style: ze },
    mx: { style: ze },
    my: { style: ze },
    margin: { style: ze },
    marginTop: { style: ze },
    marginRight: { style: ze },
    marginBottom: { style: ze },
    marginLeft: { style: ze },
    marginX: { style: ze },
    marginY: { style: ze },
    marginInline: { style: ze },
    marginInlineStart: { style: ze },
    marginInlineEnd: { style: ze },
    marginBlock: { style: ze },
    marginBlockStart: { style: ze },
    marginBlockEnd: { style: ze },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ '@media print': { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: $l },
    rowGap: { style: Ol },
    columnGap: { style: Nl },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: 'zIndex' },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: 'shadows' },
    width: { transform: jt },
    maxWidth: { style: mf },
    minWidth: { transform: jt },
    height: { transform: jt },
    maxHeight: { transform: jt },
    minHeight: { transform: jt },
    boxSizing: {},
    fontFamily: { themeKey: 'typography' },
    fontSize: { themeKey: 'typography' },
    fontStyle: { themeKey: 'typography' },
    fontWeight: { themeKey: 'typography' },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: 'typography' },
  },
  gf = sC;
function lC(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function uC(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function cC() {
  function e(n, r, o, i) {
    const a = { [n]: r, theme: o },
      s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: d } = s;
    if (r == null) return null;
    if (u === 'typography' && r === 'inherit') return { [n]: r };
    const p = Rl(o, u) || {};
    return d
      ? d(a)
      : In(a, r, (g) => {
          let m = Fs(p, c, g);
          return (
            g === m &&
              typeof g == 'string' &&
              (m = Fs(p, c, `${n}${g === 'default' ? '' : En(g)}`, g)),
            l === !1 ? m : { [l]: m }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const a = (r = i.unstable_sxConfig) != null ? r : gf;
    function s(l) {
      let u = l;
      if (typeof l == 'function') u = l(i);
      else if (typeof l != 'object') return l;
      if (!u) return null;
      const c = Ek(i.breakpoints),
        d = Object.keys(c);
      let p = c;
      return (
        Object.keys(u).forEach((w) => {
          const g = uC(u[w], i);
          if (g != null)
            if (typeof g == 'object')
              if (a[w]) p = ki(p, e(w, g, i, a));
              else {
                const m = In({ theme: i }, g, (x) => ({ [w]: x }));
                lC(m, g) ? (p[w] = t({ sx: g, theme: i })) : (p = ki(p, m));
              }
            else p = ki(p, e(w, g, i, a));
        }),
        kk(d, p)
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const D1 = cC();
D1.filterProps = ['sx'];
const yf = D1,
  dC = ['breakpoints', 'palette', 'spacing', 'shape'];
function vf(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    a = Bn(e, dC),
    s = wk(n),
    l = $k(o);
  let u = ln(
    {
      breakpoints: s,
      direction: 'ltr',
      components: {},
      palette: me({ mode: 'light' }, r),
      spacing: l,
      shape: me({}, Sk, i),
    },
    a
  );
  return (
    (u = t.reduce((c, d) => ln(c, d), u)),
    (u.unstable_sxConfig = me(
      {},
      gf,
      a == null ? void 0 : a.unstable_sxConfig
    )),
    (u.unstable_sx = function (d) {
      return yf({ sx: d, theme: this });
    }),
    u
  );
}
function fC(e) {
  return Object.keys(e).length === 0;
}
function pC(e = null) {
  const t = k.useContext(j1);
  return !t || fC(t) ? e : t;
}
const hC = vf();
function mC(e = hC) {
  return pC(e);
}
const gC = ['variant'];
function Gh(e) {
  return e.length === 0;
}
function M1(e) {
  const { variant: t } = e,
    n = Bn(e, gC);
  let r = t || '';
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === 'color'
          ? (r += Gh(r) ? e[o] : En(e[o]))
          : (r += `${Gh(r) ? o : En(o)}${En(e[o].toString())}`);
      }),
    r
  );
}
const yC = [
  'name',
  'slot',
  'skipVariantsResolver',
  'skipSx',
  'overridesResolver',
];
function vC(e) {
  return Object.keys(e).length === 0;
}
function wC(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
const xC = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  Us = (e) => {
    const t = {};
    return (
      e &&
        e.forEach((n) => {
          const r = M1(n.props);
          t[r] = n.style;
        }),
      t
    );
  },
  SC = (e, t) => {
    let n = [];
    return (
      t &&
        t.components &&
        t.components[e] &&
        t.components[e].variants &&
        (n = t.components[e].variants),
      Us(n)
    );
  },
  Bs = (e, t, n) => {
    const { ownerState: r = {} } = e,
      o = [];
    return (
      n &&
        n.forEach((i) => {
          let a = !0;
          Object.keys(i.props).forEach((s) => {
            r[s] !== i.props[s] && e[s] !== i.props[s] && (a = !1);
          }),
            a && o.push(t[M1(i.props)]);
        }),
      o
    );
  },
  EC = (e, t, n, r) => {
    var o;
    const i =
      n == null || (o = n.components) == null || (o = o[r]) == null
        ? void 0
        : o.variants;
    return Bs(e, t, i);
  };
function os(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const kC = vf(),
  CC = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function is({ defaultTheme: e, theme: t, themeId: n }) {
  return vC(t) ? e : t[n] || t;
}
function bC(e) {
  return e ? (t, n) => n[e] : null;
}
const Qh = ({ styledArg: e, props: t, defaultTheme: n, themeId: r }) => {
  const o = e(
    me({}, t, { theme: is(me({}, t, { defaultTheme: n, themeId: r })) })
  );
  let i;
  if ((o && o.variants && ((i = o.variants), delete o.variants), i)) {
    const a = Bs(t, Us(i), i);
    return [o, ...a];
  }
  return o;
};
function _C(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = kC,
      rootShouldForwardProp: r = os,
      slotShouldForwardProp: o = os,
    } = e,
    i = (a) =>
      yf(me({}, a, { theme: is(me({}, a, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (a, s = {}) => {
      gk(a, (E) => E.filter((b) => !(b != null && b.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: p = bC(CC(u)),
        } = s,
        w = Bn(s, yC),
        g = c !== void 0 ? c : (u && u !== 'Root' && u !== 'root') || !1,
        m = d || !1;
      let x,
        f = os;
      u === 'Root' || u === 'root'
        ? (f = r)
        : u
        ? (f = o)
        : wC(a) && (f = void 0);
      const h = mk(a, me({ shouldForwardProp: f, label: x }, w)),
        y = (E, ...b) => {
          const S = b
            ? b.map((N) => {
                if (typeof N == 'function' && N.__emotion_real !== N)
                  return (V) =>
                    Qh({ styledArg: N, props: V, defaultTheme: n, themeId: t });
                if (tr(N)) {
                  let V = N,
                    X;
                  return (
                    N &&
                      N.variants &&
                      ((X = N.variants),
                      delete V.variants,
                      (V = (re) => {
                        let W = N;
                        return (
                          Bs(re, Us(X), X).forEach((L) => {
                            W = ln(W, L);
                          }),
                          W
                        );
                      })),
                    V
                  );
                }
                return N;
              })
            : [];
          let _ = E;
          if (tr(E)) {
            let N;
            E &&
              E.variants &&
              ((N = E.variants),
              delete _.variants,
              (_ = (V) => {
                let X = E;
                return (
                  Bs(V, Us(N), N).forEach((W) => {
                    X = ln(X, W);
                  }),
                  X
                );
              }));
          } else
            typeof E == 'function' &&
              E.__emotion_real !== E &&
              (_ = (N) =>
                Qh({ styledArg: E, props: N, defaultTheme: n, themeId: t }));
          l &&
            p &&
            S.push((N) => {
              const V = is(me({}, N, { defaultTheme: n, themeId: t })),
                X = xC(l, V);
              if (X) {
                const re = {};
                return (
                  Object.entries(X).forEach(([W, I]) => {
                    re[W] =
                      typeof I == 'function' ? I(me({}, N, { theme: V })) : I;
                  }),
                  p(N, re)
                );
              }
              return null;
            }),
            l &&
              !g &&
              S.push((N) => {
                const V = is(me({}, N, { defaultTheme: n, themeId: t }));
                return EC(N, SC(l, V), V, l);
              }),
            m || S.push(i);
          const $ = S.length - b.length;
          if (Array.isArray(E) && $ > 0) {
            const N = new Array($).fill('');
            (_ = [...E, ...N]), (_.raw = [...E.raw, ...N]);
          }
          const H = h(_, ...S);
          return a.muiName && (H.muiName = a.muiName), H;
        };
      return h.withConfig && (y.withConfig = h.withConfig), y;
    }
  );
}
function RC(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : w1(t.components[n].defaultProps, r);
}
function TC({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = mC(n);
  return r && (o = o[r] || o), RC({ theme: o, name: t, props: e });
}
function I1(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function PC(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(', ')})`
      : ''
  );
}
function Mo(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return Mo(PC(e));
  const t = e.indexOf('('),
    n = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error(Lo(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(
        o
      ) === -1)
    )
      throw new Error(Lo(10, o));
  } else r = r.split(',');
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function wf(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf('rgb') !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf('hsl') !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf('color') !== -1
      ? (r = `${n} ${r.join(' ')}`)
      : (r = `${r.join(', ')}`),
    `${t}(${r})`
  );
}
function $C(e) {
  e = Mo(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    a = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = 'rgb';
  const l = [
    Math.round(a(0) * 255),
    Math.round(a(8) * 255),
    Math.round(a(4) * 255),
  ];
  return (
    e.type === 'hsla' && ((s += 'a'), l.push(t[3])), wf({ type: s, values: l })
  );
}
function qh(e) {
  e = Mo(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? Mo($C(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== 'color' && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function NC(e, t) {
  const n = qh(e),
    r = qh(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function OC(e, t) {
  if (((e = Mo(e)), (t = I1(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return wf(e);
}
function jC(e, t) {
  if (((e = Mo(e)), (t = I1(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return wf(e);
}
function AC(e, t) {
  return me(
    {
      toolbar: {
        minHeight: 56,
        [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
        [e.up('sm')]: { minHeight: 64 },
      },
    },
    t
  );
}
const LC = { black: '#000', white: '#fff' },
  Qi = LC,
  DC = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  MC = DC,
  IC = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  Xr = IC,
  zC = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  Jr = zC,
  FC = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  oi = FC,
  UC = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  Zr = UC,
  BC = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  eo = BC,
  HC = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  to = HC,
  WC = ['mode', 'contrastThreshold', 'tonalOffset'],
  Xh = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: Qi.white, default: Qi.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Ru = {
    text: {
      primary: Qi.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: Qi.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Jh(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
      ? (e.light = jC(e.main, o))
      : t === 'dark' && (e.dark = OC(e.main, i)));
}
function VC(e = 'light') {
  return e === 'dark'
    ? { main: Zr[200], light: Zr[50], dark: Zr[400] }
    : { main: Zr[700], light: Zr[400], dark: Zr[800] };
}
function KC(e = 'light') {
  return e === 'dark'
    ? { main: Xr[200], light: Xr[50], dark: Xr[400] }
    : { main: Xr[500], light: Xr[300], dark: Xr[700] };
}
function YC(e = 'light') {
  return e === 'dark'
    ? { main: Jr[500], light: Jr[300], dark: Jr[700] }
    : { main: Jr[700], light: Jr[400], dark: Jr[800] };
}
function GC(e = 'light') {
  return e === 'dark'
    ? { main: eo[400], light: eo[300], dark: eo[700] }
    : { main: eo[700], light: eo[500], dark: eo[900] };
}
function QC(e = 'light') {
  return e === 'dark'
    ? { main: to[400], light: to[300], dark: to[700] }
    : { main: to[800], light: to[500], dark: to[900] };
}
function qC(e = 'light') {
  return e === 'dark'
    ? { main: oi[400], light: oi[300], dark: oi[700] }
    : { main: '#ed6c02', light: oi[500], dark: oi[900] };
}
function XC(e) {
  const {
      mode: t = 'light',
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = Bn(e, WC),
    i = e.primary || VC(t),
    a = e.secondary || KC(t),
    s = e.error || YC(t),
    l = e.info || GC(t),
    u = e.success || QC(t),
    c = e.warning || qC(t);
  function d(m) {
    return NC(m, Ru.text.primary) >= n ? Ru.text.primary : Xh.text.primary;
  }
  const p = ({
      color: m,
      name: x,
      mainShade: f = 500,
      lightShade: h = 300,
      darkShade: y = 700,
    }) => {
      if (
        ((m = me({}, m)),
        !m.main && m[f] && (m.main = m[f]),
        !m.hasOwnProperty('main'))
      )
        throw new Error(Lo(11, x ? ` (${x})` : '', f));
      if (typeof m.main != 'string')
        throw new Error(Lo(12, x ? ` (${x})` : '', JSON.stringify(m.main)));
      return (
        Jh(m, 'light', h, r),
        Jh(m, 'dark', y, r),
        m.contrastText || (m.contrastText = d(m.main)),
        m
      );
    },
    w = { dark: Ru, light: Xh };
  return ln(
    me(
      {
        common: me({}, Qi),
        mode: t,
        primary: p({ color: i, name: 'primary' }),
        secondary: p({
          color: a,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: p({ color: s, name: 'error' }),
        warning: p({ color: c, name: 'warning' }),
        info: p({ color: l, name: 'info' }),
        success: p({ color: u, name: 'success' }),
        grey: MC,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: p,
        tonalOffset: r,
      },
      w[t]
    ),
    o
  );
}
const JC = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem',
];
function ZC(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Zh = { textTransform: 'uppercase' },
  em = '"Roboto", "Helvetica", "Arial", sans-serif';
function eb(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = em,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: d,
    } = n,
    p = Bn(n, JC),
    w = o / 14,
    g = d || ((f) => `${(f / u) * w}rem`),
    m = (f, h, y, E, b) =>
      me(
        { fontFamily: r, fontWeight: f, fontSize: g(h), lineHeight: y },
        r === em ? { letterSpacing: `${ZC(E / h)}em` } : {},
        b,
        c
      ),
    x = {
      h1: m(i, 96, 1.167, -1.5),
      h2: m(i, 60, 1.2, -0.5),
      h3: m(a, 48, 1.167, 0),
      h4: m(a, 34, 1.235, 0.25),
      h5: m(a, 24, 1.334, 0),
      h6: m(s, 20, 1.6, 0.15),
      subtitle1: m(a, 16, 1.75, 0.15),
      subtitle2: m(s, 14, 1.57, 0.1),
      body1: m(a, 16, 1.5, 0.15),
      body2: m(a, 14, 1.43, 0.15),
      button: m(s, 14, 1.75, 0.4, Zh),
      caption: m(a, 12, 1.66, 0.4),
      overline: m(a, 12, 2.66, 1, Zh),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return ln(
    me(
      {
        htmlFontSize: u,
        pxToRem: g,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: a,
        fontWeightMedium: s,
        fontWeightBold: l,
      },
      x
    ),
    p,
    { clone: !1 }
  );
}
const tb = 0.2,
  nb = 0.14,
  rb = 0.12;
function je(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${tb})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${nb})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${rb})`,
  ].join(',');
}
const ob = [
    'none',
    je(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    je(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    je(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    je(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    je(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    je(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    je(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    je(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    je(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    je(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    je(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    je(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    je(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    je(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    je(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    je(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    je(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    je(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    je(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    je(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    je(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    je(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    je(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    je(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  ib = ob,
  ab = ['duration', 'easing', 'delay'],
  sb = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  lb = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function tm(e) {
  return `${Math.round(e)}ms`;
}
function ub(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function cb(e) {
  const t = me({}, sb, e.easing),
    n = me({}, lb, e.duration);
  return me(
    {
      getAutoHeightDuration: ub,
      create: (o = ['all'], i = {}) => {
        const {
          duration: a = n.standard,
          easing: s = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          Bn(i, ab),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof a == 'string' ? a : tm(a)} ${s} ${
                  typeof l == 'string' ? l : tm(l)
                }`
            )
            .join(',')
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const db = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  fb = db,
  pb = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape',
  ];
function hb(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    a = Bn(e, pb);
  if (e.vars) throw new Error(Lo(18));
  const s = XC(r),
    l = vf(e);
  let u = ln(l, {
    mixins: AC(l.breakpoints, n),
    palette: s,
    shadows: ib.slice(),
    typography: eb(s, i),
    transitions: cb(o),
    zIndex: me({}, fb),
  });
  return (
    (u = ln(u, a)),
    (u = t.reduce((c, d) => ln(c, d), u)),
    (u.unstable_sxConfig = me(
      {},
      gf,
      a == null ? void 0 : a.unstable_sxConfig
    )),
    (u.unstable_sx = function (d) {
      return yf({ sx: d, theme: this });
    }),
    u
  );
}
const mb = hb(),
  z1 = mb,
  F1 = '$$material';
function gb({ props: e, name: t }) {
  return TC({ props: e, name: t, defaultTheme: z1, themeId: F1 });
}
const yb = (e) => os(e) && e !== 'classes',
  vb = _C({ themeId: F1, defaultTheme: z1, rootShouldForwardProp: yb }),
  wb = vb;
function xb(e) {
  return S1('MuiSvgIcon', e);
}
xE('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
]);
const Sb = [
    'children',
    'className',
    'color',
    'component',
    'fontSize',
    'htmlColor',
    'inheritViewBox',
    'titleAccess',
    'viewBox',
  ],
  Eb = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ['root', t !== 'inherit' && `color${En(t)}`, `fontSize${En(n)}`],
      };
    return gE(o, xb, r);
  },
  kb = wb('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== 'inherit' && t[`color${En(n.color)}`],
        t[`fontSize${En(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, a, s, l, u, c, d, p, w, g;
    return {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: t.hasSvgAsChild ? void 0 : 'currentColor',
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, 'fill', {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: 'inherit',
        small:
          ((i = e.typography) == null || (a = i.pxToRem) == null
            ? void 0
            : a.call(i, 20)) || '1.25rem',
        medium:
          ((s = e.typography) == null || (l = s.pxToRem) == null
            ? void 0
            : l.call(s, 24)) || '1.5rem',
        large:
          ((u = e.typography) == null || (c = u.pxToRem) == null
            ? void 0
            : c.call(u, 35)) || '2.1875rem',
      }[t.fontSize],
      color:
        (d =
          (p = (e.vars || e).palette) == null || (p = p[t.color]) == null
            ? void 0
            : p.main) != null
          ? d
          : {
              action:
                (w = (e.vars || e).palette) == null || (w = w.action) == null
                  ? void 0
                  : w.active,
              disabled:
                (g = (e.vars || e).palette) == null || (g = g.action) == null
                  ? void 0
                  : g.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  U1 = k.forwardRef(function (t, n) {
    const r = gb({ props: t, name: 'MuiSvgIcon' }),
      {
        children: o,
        className: i,
        color: a = 'inherit',
        component: s = 'svg',
        fontSize: l = 'medium',
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: d,
        viewBox: p = '0 0 24 24',
      } = r,
      w = Bn(r, Sb),
      g = k.isValidElement(o) && o.type === 'svg',
      m = me({}, r, {
        color: a,
        component: s,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: p,
        hasSvgAsChild: g,
      }),
      x = {};
    c || (x.viewBox = p);
    const f = Eb(m);
    return v.jsxs(
      kb,
      me(
        {
          as: s,
          className: SE(f.root, i),
          focusable: 'false',
          color: u,
          'aria-hidden': d ? void 0 : !0,
          role: d ? 'img' : void 0,
          ref: n,
        },
        x,
        w,
        g && o.props,
        {
          ownerState: m,
          children: [
            g ? o.props.children : o,
            d ? v.jsx('title', { children: d }) : null,
          ],
        }
      )
    );
  });
U1.muiName = 'SvgIcon';
const nm = U1;
function xf(e, t) {
  function n(r, o) {
    return v.jsx(
      nm,
      me({ 'data-testid': `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = nm.muiName), k.memo(k.forwardRef(n));
}
const Cb = {
    configure: (e) => {
      x1.configure(e);
    },
  },
  bb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: En,
        createChainedFunction: q2,
        createSvgIcon: xf,
        debounce: X2,
        deprecatedPropType: J2,
        isMuiElement: Z2,
        ownerDocument: g1,
        ownerWindow: eE,
        requirePropFactory: tE,
        setRef: y1,
        unstable_ClassNameGenerator: Cb,
        unstable_useEnhancedEffect: v1,
        unstable_useId: oE,
        unsupportedProp: iE,
        useControlled: aE,
        useEventCallback: sE,
        useForkRef: lE,
        useIsFocusVisible: mE,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  _b = Iy(bb);
var rm;
function Nt() {
  return (
    rm ||
      ((rm = 1),
      (function (e) {
        'use client';
        Object.defineProperty(e, '__esModule', { value: !0 }),
          Object.defineProperty(e, 'default', {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = _b;
      })(Cu)),
    Cu
  );
}
var Rb = $t;
Object.defineProperty(lf, '__esModule', { value: !0 });
var B1 = (lf.default = void 0),
  Tb = Rb(Nt()),
  Pb = v,
  $b = (0, Tb.default)(
    (0, Pb.jsx)('path', {
      d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
    'Close'
  );
B1 = lf.default = $b;
var Sf = {},
  Nb = $t;
Object.defineProperty(Sf, '__esModule', { value: !0 });
var ca = (Sf.default = void 0),
  Ob = Nb(Nt()),
  jb = v,
  Ab = (0, Ob.default)(
    (0, jb.jsx)('path', {
      d: 'm8.1 13.34 2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z',
    }),
    'LocalDining'
  );
ca = Sf.default = Ab;
var Ef = {},
  Lb = $t;
Object.defineProperty(Ef, '__esModule', { value: !0 });
var H1 = (Ef.default = void 0),
  Db = Lb(Nt()),
  Mb = v,
  Ib = (0, Db.default)(
    (0, Mb.jsx)('path', {
      d: 'M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z',
    }),
    'QuestionMark'
  );
H1 = Ef.default = Ib;
var kf = {},
  zb = $t;
Object.defineProperty(kf, '__esModule', { value: !0 });
var W1 = (kf.default = void 0),
  Fb = zb(Nt()),
  Ub = v,
  Bb = (0, Fb.default)(
    (0, Ub.jsx)('path', {
      d: 'M2 19h20l-2 2H4l-2-2zM5 6h1v1H5V6zm0-2h1v1H5V4zm4 0v1H7V4h2zm0 3H7V6h2v1zm-3 8.23c-.36.11-.69.28-1 .47V8h1v7.23zm-2 1.29c-.38.44-.68.93-.84 1.48h16.82c.01-.16.03-.33.03-.5 0-3.04-2.46-5.5-5.5-5.5-2.29 0-4.25 1.4-5.08 3.4-.59-.25-1.24-.4-1.93-.4-.17 0-.33.02-.5.04V8h2c1.03.06 1.9-.96 2-2h10V5H11c-.1-1.05-.97-1.97-2-2H3v1h1v1H3v1h1v1H3v1h1v8.52z',
    }),
    'DinnerDining'
  );
W1 = kf.default = Bb;
var Cf = {},
  Hb = $t;
Object.defineProperty(Cf, '__esModule', { value: !0 });
var V1 = (Cf.default = void 0),
  Wb = Hb(Nt()),
  Vb = v,
  Kb = (0, Wb.default)(
    (0, Vb.jsx)('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
    }),
    'AddCircle'
  );
V1 = Cf.default = Kb;
var bf = {},
  Yb = $t;
Object.defineProperty(bf, '__esModule', { value: !0 });
var K1 = (bf.default = void 0),
  Gb = Yb(Nt()),
  Qb = v,
  qb = (0, Gb.default)(
    (0, Qb.jsx)('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z',
    }),
    'AccountCircle'
  );
K1 = bf.default = qb;
var _f = {},
  Xb = $t;
Object.defineProperty(_f, '__esModule', { value: !0 });
var Y1 = (_f.default = void 0),
  Jb = Xb(Nt()),
  om = v,
  Zb = (0, Jb.default)(
    [
      (0, om.jsx)(
        'path',
        {
          d: 'M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6z',
        },
        '0'
      ),
      (0, om.jsx)(
        'path',
        {
          d: 'M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12zm0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17z',
        },
        '1'
      ),
    ],
    'AdminPanelSettings'
  );
Y1 = _f.default = Zb;
const e4 = [
    {
      text: 'What to cook today?',
      path: 'recipes',
      icon: v.jsx(H1, { fontSize: 'large' }),
    },
    {
      text: 'find recipe',
      path: 'recipes',
      icon: v.jsx(W1, { fontSize: 'large' }),
    },
    {
      text: 'add recipe',
      path: 'add-recipe',
      icon: v.jsx(V1, { fontSize: 'large' }),
    },
    {
      text: 'profile',
      path: 'profile',
      icon: v.jsx(K1, { fontSize: 'large' }),
    },
    { text: 'admin', path: 'admin', icon: v.jsx(Y1, { fontSize: 'large' }) },
  ],
  G1 = ({ isBig: e }) => {
    const { toggleSidebar: t, user: n } = ha();
    return v.jsx('div', {
      className: 'nav-links',
      children: e4.map((r) => {
        const { text: o, path: i, icon: a } = r,
          { role: s } = n;
        if (!(i === 'admin' && s !== 'admin'))
          return v.jsxs(
            HS,
            {
              to: i,
              className: 'nav-link',
              onClick: e ? null : t,
              end: !0,
              children: [v.jsx('span', { className: 'icon', children: a }), o],
            },
            o
          );
      }),
    });
  },
  t4 = () => {
    const { showSidebar: e, toggleSidebar: t } = ha();
    return v.jsx(Q2, {
      children: v.jsx('div', {
        className: e ? 'sidebar-container show-sidebar' : 'sidebar-container',
        children: v.jsxs('div', {
          className: 'content',
          children: [
            v.jsx('button', {
              type: 'button',
              className: 'close-button',
              onClick: t,
              children: v.jsx(B1, { fontSize: 'large' }),
            }),
            v.jsx('header', { children: v.jsx(ca, {}) }),
            v.jsx(G1, {}),
          ],
        }),
      }),
    });
  },
  n4 = gt.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--nav-height);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: white;
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
  }
  .toggle-button {
    background: transparent;
    border-color: transparent;
    color: var(--primary-600);
    cursor: pointer;
    display: flex;
    align-items: center;
    svg {
      font-size: 2rem;
    }
  }

  .button-container {
    display: flex;
    align-items: center;
  }
  h4 {
    display: none;
  }
  .local-dining-icon {
    display: block;
  }
  @media (min-width: 800px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    h4 {
      display: block;
    }
    .local-dining-icon {
      display: none;
    }
  }
  @media (max-width: 800px) {
    .menu-icon {
      font-size: large;
    }
  }
`;
var Rf = {},
  r4 = $t;
Object.defineProperty(Rf, '__esModule', { value: !0 });
var Q1 = (Rf.default = void 0),
  o4 = r4(Nt()),
  i4 = v,
  a4 = (0, o4.default)(
    (0, i4.jsx)('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' }),
    'Menu'
  );
Q1 = Rf.default = a4;
const s4 = xf(
    v.jsx('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z',
    }),
    'AccountCircle'
  ),
  l4 = xf(v.jsx('path', { d: 'm7 10 5 5 5-5z' }), 'ArrowDropDown'),
  u4 = gt.div`
  position: relative;
  .logout-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.4rem;
    padding: 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: #b23b3b;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-button {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: white;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  .dropdown-button:hover {
    background: var(--primary-800);
  }
`,
  c4 = () => {
    const [e, t] = k.useState(!1),
      { user: n, logoutUser: r } = ha();
    return v.jsxs(u4, {
      children: [
        v.jsxs('button', {
          type: 'button',
          className: 'button logout-button',
          onClick: () => t(!e),
          children: [
            n.avatar
              ? v.jsx('img', { src: n.avatar, alt: 'avatar', className: 'img' })
              : v.jsx(s4, {}),
            n == null ? void 0 : n.name,
            v.jsx(l4, {}),
          ],
        }),
        v.jsx('div', {
          className: e ? 'dropdown show-dropdown' : 'dropdown',
          children: v.jsx('button', {
            type: 'button',
            className: 'dropdown-button',
            onClick: r,
            children: 'logout',
          }),
        }),
      ],
    });
  },
  d4 = () => {
    const { toggleSidebar: e } = ha();
    return v.jsx(n4, {
      children: v.jsxs('div', {
        className: 'nav-center',
        children: [
          v.jsx('button', {
            type: 'button',
            className: 'toggle-button',
            onClick: e,
            children: v.jsx(Q1, { className: 'menu-icon' }),
          }),
          v.jsxs('div', {
            children: [
              v.jsx('h4', { children: 'What should we eat?' }),
              v.jsx(ca, { className: 'local-dining-icon' }),
            ],
          }),
          v.jsx('div', {
            className: 'button-container',
            children: v.jsx(c4, {}),
          }),
        ],
      }),
    });
  },
  f4 = gt.aside`
  display: none;
  @media (min-width: 800px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.25s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 3rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 1rem 0;
      padding-left: 3rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 3.5rem;
      color: var(--primary-500);
      transition: var(--transition);
    }
    .icon {
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
    .pending {
      background: var(--background-color);
    }
  }
`,
  p4 = () => {
    const { showSidebar: e } = ha();
    return v.jsx(f4, {
      children: v.jsx('div', {
        className: e ? 'sidebar-container show-sidebar' : 'sidebar-container',
        children: v.jsxs('div', {
          className: 'content',
          children: [
            v.jsx('header', {
              children: v.jsx('h4', { children: 'Yes, chef!' }),
            }),
            v.jsx(G1, { isBig: !0 }),
          ],
        }),
      }),
    });
  },
  Hs = ({
    name: e,
    labelText: t,
    list: n,
    defaultValue: r = '',
    onChange: o,
  }) =>
    v.jsxs('div', {
      className: 'form-row',
      children: [
        v.jsx('label', {
          htmlFor: e,
          className: 'form-label',
          children: t || e,
        }),
        v.jsx('select', {
          name: e,
          id: e,
          className: 'form-select',
          onChange: o,
          defaultValue: r,
          children: n.map((i) => v.jsx('option', { value: i, children: i }, i)),
        }),
      ],
    }),
  q1 = ({
    ingredients: e,
    setIngredients: t,
    labelText: n,
    defaultValue: r,
  }) => {
    const [o, i] = k.useState(''),
      [a, s] = k.useState(''),
      [l, u] = k.useState(''),
      c = () => {
        t([...e, { name: o, amount: a, unit: l }]), i(''), s(''), u('');
      },
      d = (p) => {
        p.key === 'Enter' && (p.preventDefault(), c());
      };
    return (
      k.useEffect(() => {
        console.log(e);
      }, [e]),
      v.jsxs('div', {
        className: 'form-row',
        children: [
          v.jsx('label', {
            htmlFor: 'name',
            className: 'form-label',
            children: n || 'Ingredient',
          }),
          v.jsxs('div', {
            className: 'form-input-group',
            children: [
              v.jsx('input', {
                type: 'text',
                name: 'ingredient name',
                value: o,
                defaultValue: r,
                onChange: (p) => i(p.target.value),
                placeholder: 'Ingredient name',
                className: 'form-input form-input-third',
                onKeyDown: d,
              }),
              v.jsx('input', {
                type: 'number',
                name: 'amount',
                value: a,
                defaultValue: r,
                onChange: (p) => s(p.target.value),
                placeholder: 'Amount',
                className: 'form-input form-input-third',
                onKeyDown: d,
              }),
              v.jsx('input', {
                type: 'text',
                name: 'unit',
                value: l,
                defaultValue: r,
                onChange: (p) => u(p.target.value),
                placeholder: 'Unit',
                className: 'form-input form-input-third',
                onKeyDown: d,
              }),
            ],
          }),
          v.jsx('button', {
            type: 'button',
            className: 'button button-block form-button form-button-add',
            onClick: c,
            children: 'Add Ingredient',
          }),
        ],
      })
    );
  },
  X1 = ({ steps: e, setSteps: t, labelText: n }) => {
    const [r, o] = k.useState(''),
      i = () => {
        t([...e, r]), o('');
      };
    k.useEffect(() => {
      console.log(e);
    }, [e]);
    const a = (s) => {
      s.key === 'Enter' && (s.preventDefault(), i());
    };
    return v.jsxs('div', {
      className: 'form-row',
      children: [
        v.jsx('label', {
          htmlFor: 'name',
          className: 'form-label',
          children: n || 'Step',
        }),
        v.jsx('input', {
          type: 'text',
          name: 'step',
          value: r,
          onChange: (s) => o(s.target.value),
          className: 'form-input',
          onKeyDown: a,
        }),
        v.jsx('button', {
          type: 'button',
          className: 'button button-block form-button form-button-add',
          onClick: i,
          children: 'Add Step',
        }),
      ],
    });
  },
  h4 = gt.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
  }
  .info {
    h5 {
      margin-bottom: 0.5rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--text-secondary-color);
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    align-items: center;
    @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .recipe-img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: var(--border-radius);
    grid-column: span 2;
  }
  .user-img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .actions {
    display: flex;
    margin-top: 1rem;
    align-items: center;
  }
  .edit-button,
  .delete-button {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  /* enables avatar to be positioned right */
  .filler {
    flex-grow: 1;
  }
  .user-box {
    justify-self: end;
  }
`,
  m4 = gt.div`
  display: flex;
  align-items: center;
  .recipy-icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--text-secondary-color);
    }
  }
  .recipe-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
`,
  Tu = ({ icon: e, text: t }) =>
    v.jsxs(m4, {
      children: [
        v.jsx('span', { className: 'recipe-icon', children: e }),
        v.jsx('span', { className: 'recipe-text', children: t }),
      ],
    });
var J1 = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Em, function () {
    var n = 1e3,
      r = 6e4,
      o = 36e5,
      i = 'millisecond',
      a = 'second',
      s = 'minute',
      l = 'hour',
      u = 'day',
      c = 'week',
      d = 'month',
      p = 'quarter',
      w = 'year',
      g = 'date',
      m = 'Invalid Date',
      x =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      f =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      h = {
        name: 'en',
        weekdays:
          'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months:
          'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
        ordinal: function (W) {
          var I = ['th', 'st', 'nd', 'rd'],
            L = W % 100;
          return '[' + W + (I[(L - 20) % 10] || I[L] || I[0]) + ']';
        },
      },
      y = function (W, I, L) {
        var D = String(W);
        return !D || D.length >= I
          ? W
          : '' + Array(I + 1 - D.length).join(L) + W;
      },
      E = {
        s: y,
        z: function (W) {
          var I = -W.utcOffset(),
            L = Math.abs(I),
            D = Math.floor(L / 60),
            R = L % 60;
          return (I <= 0 ? '+' : '-') + y(D, 2, '0') + ':' + y(R, 2, '0');
        },
        m: function W(I, L) {
          if (I.date() < L.date()) return -W(L, I);
          var D = 12 * (L.year() - I.year()) + (L.month() - I.month()),
            R = I.clone().add(D, d),
            M = L - R < 0,
            z = I.clone().add(D + (M ? -1 : 1), d);
          return +(-(D + (L - R) / (M ? R - z : z - R)) || 0);
        },
        a: function (W) {
          return W < 0 ? Math.ceil(W) || 0 : Math.floor(W);
        },
        p: function (W) {
          return (
            { M: d, y: w, w: c, d: u, D: g, h: l, m: s, s: a, ms: i, Q: p }[
              W
            ] ||
            String(W || '')
              .toLowerCase()
              .replace(/s$/, '')
          );
        },
        u: function (W) {
          return W === void 0;
        },
      },
      b = 'en',
      S = {};
    S[b] = h;
    var _ = '$isDayjsObject',
      $ = function (W) {
        return W instanceof X || !(!W || !W[_]);
      },
      H = function W(I, L, D) {
        var R;
        if (!I) return b;
        if (typeof I == 'string') {
          var M = I.toLowerCase();
          S[M] && (R = M), L && ((S[M] = L), (R = M));
          var z = I.split('-');
          if (!R && z.length > 1) return W(z[0]);
        } else {
          var q = I.name;
          (S[q] = I), (R = q);
        }
        return !D && R && (b = R), R || (!D && b);
      },
      N = function (W, I) {
        if ($(W)) return W.clone();
        var L = typeof I == 'object' ? I : {};
        return (L.date = W), (L.args = arguments), new X(L);
      },
      V = E;
    (V.l = H),
      (V.i = $),
      (V.w = function (W, I) {
        return N(W, { locale: I.$L, utc: I.$u, x: I.$x, $offset: I.$offset });
      });
    var X = (function () {
        function W(L) {
          (this.$L = H(L.locale, null, !0)),
            this.parse(L),
            (this.$x = this.$x || L.x || {}),
            (this[_] = !0);
        }
        var I = W.prototype;
        return (
          (I.parse = function (L) {
            (this.$d = (function (D) {
              var R = D.date,
                M = D.utc;
              if (R === null) return new Date(NaN);
              if (V.u(R)) return new Date();
              if (R instanceof Date) return new Date(R);
              if (typeof R == 'string' && !/Z$/i.test(R)) {
                var z = R.match(x);
                if (z) {
                  var q = z[2] - 1 || 0,
                    A = (z[7] || '0').substring(0, 3);
                  return M
                    ? new Date(
                        Date.UTC(
                          z[1],
                          q,
                          z[3] || 1,
                          z[4] || 0,
                          z[5] || 0,
                          z[6] || 0,
                          A
                        )
                      )
                    : new Date(
                        z[1],
                        q,
                        z[3] || 1,
                        z[4] || 0,
                        z[5] || 0,
                        z[6] || 0,
                        A
                      );
                }
              }
              return new Date(R);
            })(L)),
              this.init();
          }),
          (I.init = function () {
            var L = this.$d;
            (this.$y = L.getFullYear()),
              (this.$M = L.getMonth()),
              (this.$D = L.getDate()),
              (this.$W = L.getDay()),
              (this.$H = L.getHours()),
              (this.$m = L.getMinutes()),
              (this.$s = L.getSeconds()),
              (this.$ms = L.getMilliseconds());
          }),
          (I.$utils = function () {
            return V;
          }),
          (I.isValid = function () {
            return this.$d.toString() !== m;
          }),
          (I.isSame = function (L, D) {
            var R = N(L);
            return this.startOf(D) <= R && R <= this.endOf(D);
          }),
          (I.isAfter = function (L, D) {
            return N(L) < this.startOf(D);
          }),
          (I.isBefore = function (L, D) {
            return this.endOf(D) < N(L);
          }),
          (I.$g = function (L, D, R) {
            return V.u(L) ? this[D] : this.set(R, L);
          }),
          (I.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (I.valueOf = function () {
            return this.$d.getTime();
          }),
          (I.startOf = function (L, D) {
            var R = this,
              M = !!V.u(D) || D,
              z = V.p(L),
              q = function (ve, ae) {
                var ne = V.w(
                  R.$u ? Date.UTC(R.$y, ae, ve) : new Date(R.$y, ae, ve),
                  R
                );
                return M ? ne : ne.endOf(u);
              },
              A = function (ve, ae) {
                return V.w(
                  R.toDate()[ve].apply(
                    R.toDate('s'),
                    (M ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ae)
                  ),
                  R
                );
              },
              F = this.$W,
              U = this.$M,
              G = this.$D,
              T = 'set' + (this.$u ? 'UTC' : '');
            switch (z) {
              case w:
                return M ? q(1, 0) : q(31, 11);
              case d:
                return M ? q(1, U) : q(0, U + 1);
              case c:
                var ie = this.$locale().weekStart || 0,
                  K = (F < ie ? F + 7 : F) - ie;
                return q(M ? G - K : G + (6 - K), U);
              case u:
              case g:
                return A(T + 'Hours', 0);
              case l:
                return A(T + 'Minutes', 1);
              case s:
                return A(T + 'Seconds', 2);
              case a:
                return A(T + 'Milliseconds', 3);
              default:
                return this.clone();
            }
          }),
          (I.endOf = function (L) {
            return this.startOf(L, !1);
          }),
          (I.$set = function (L, D) {
            var R,
              M = V.p(L),
              z = 'set' + (this.$u ? 'UTC' : ''),
              q = ((R = {}),
              (R[u] = z + 'Date'),
              (R[g] = z + 'Date'),
              (R[d] = z + 'Month'),
              (R[w] = z + 'FullYear'),
              (R[l] = z + 'Hours'),
              (R[s] = z + 'Minutes'),
              (R[a] = z + 'Seconds'),
              (R[i] = z + 'Milliseconds'),
              R)[M],
              A = M === u ? this.$D + (D - this.$W) : D;
            if (M === d || M === w) {
              var F = this.clone().set(g, 1);
              F.$d[q](A),
                F.init(),
                (this.$d = F.set(g, Math.min(this.$D, F.daysInMonth())).$d);
            } else q && this.$d[q](A);
            return this.init(), this;
          }),
          (I.set = function (L, D) {
            return this.clone().$set(L, D);
          }),
          (I.get = function (L) {
            return this[V.p(L)]();
          }),
          (I.add = function (L, D) {
            var R,
              M = this;
            L = Number(L);
            var z = V.p(D),
              q = function (U) {
                var G = N(M);
                return V.w(G.date(G.date() + Math.round(U * L)), M);
              };
            if (z === d) return this.set(d, this.$M + L);
            if (z === w) return this.set(w, this.$y + L);
            if (z === u) return q(1);
            if (z === c) return q(7);
            var A = ((R = {}), (R[s] = r), (R[l] = o), (R[a] = n), R)[z] || 1,
              F = this.$d.getTime() + L * A;
            return V.w(F, this);
          }),
          (I.subtract = function (L, D) {
            return this.add(-1 * L, D);
          }),
          (I.format = function (L) {
            var D = this,
              R = this.$locale();
            if (!this.isValid()) return R.invalidDate || m;
            var M = L || 'YYYY-MM-DDTHH:mm:ssZ',
              z = V.z(this),
              q = this.$H,
              A = this.$m,
              F = this.$M,
              U = R.weekdays,
              G = R.months,
              T = R.meridiem,
              ie = function (ae, ne, Z, Pe) {
                return (ae && (ae[ne] || ae(D, M))) || Z[ne].slice(0, Pe);
              },
              K = function (ae) {
                return V.s(q % 12 || 12, ae, '0');
              },
              ve =
                T ||
                function (ae, ne, Z) {
                  var Pe = ae < 12 ? 'AM' : 'PM';
                  return Z ? Pe.toLowerCase() : Pe;
                };
            return M.replace(f, function (ae, ne) {
              return (
                ne ||
                (function (Z) {
                  switch (Z) {
                    case 'YY':
                      return String(D.$y).slice(-2);
                    case 'YYYY':
                      return V.s(D.$y, 4, '0');
                    case 'M':
                      return F + 1;
                    case 'MM':
                      return V.s(F + 1, 2, '0');
                    case 'MMM':
                      return ie(R.monthsShort, F, G, 3);
                    case 'MMMM':
                      return ie(G, F);
                    case 'D':
                      return D.$D;
                    case 'DD':
                      return V.s(D.$D, 2, '0');
                    case 'd':
                      return String(D.$W);
                    case 'dd':
                      return ie(R.weekdaysMin, D.$W, U, 2);
                    case 'ddd':
                      return ie(R.weekdaysShort, D.$W, U, 3);
                    case 'dddd':
                      return U[D.$W];
                    case 'H':
                      return String(q);
                    case 'HH':
                      return V.s(q, 2, '0');
                    case 'h':
                      return K(1);
                    case 'hh':
                      return K(2);
                    case 'a':
                      return ve(q, A, !0);
                    case 'A':
                      return ve(q, A, !1);
                    case 'm':
                      return String(A);
                    case 'mm':
                      return V.s(A, 2, '0');
                    case 's':
                      return String(D.$s);
                    case 'ss':
                      return V.s(D.$s, 2, '0');
                    case 'SSS':
                      return V.s(D.$ms, 3, '0');
                    case 'Z':
                      return z;
                  }
                  return null;
                })(ae) ||
                z.replace(':', '')
              );
            });
          }),
          (I.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (I.diff = function (L, D, R) {
            var M,
              z = this,
              q = V.p(D),
              A = N(L),
              F = (A.utcOffset() - this.utcOffset()) * r,
              U = this - A,
              G = function () {
                return V.m(z, A);
              };
            switch (q) {
              case w:
                M = G() / 12;
                break;
              case d:
                M = G();
                break;
              case p:
                M = G() / 3;
                break;
              case c:
                M = (U - F) / 6048e5;
                break;
              case u:
                M = (U - F) / 864e5;
                break;
              case l:
                M = U / o;
                break;
              case s:
                M = U / r;
                break;
              case a:
                M = U / n;
                break;
              default:
                M = U;
            }
            return R ? M : V.a(M);
          }),
          (I.daysInMonth = function () {
            return this.endOf(d).$D;
          }),
          (I.$locale = function () {
            return S[this.$L];
          }),
          (I.locale = function (L, D) {
            if (!L) return this.$L;
            var R = this.clone(),
              M = H(L, D, !0);
            return M && (R.$L = M), R;
          }),
          (I.clone = function () {
            return V.w(this.$d, this);
          }),
          (I.toDate = function () {
            return new Date(this.valueOf());
          }),
          (I.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (I.toISOString = function () {
            return this.$d.toISOString();
          }),
          (I.toString = function () {
            return this.$d.toUTCString();
          }),
          W
        );
      })(),
      re = X.prototype;
    return (
      (N.prototype = re),
      [
        ['$ms', i],
        ['$s', a],
        ['$m', s],
        ['$H', l],
        ['$W', u],
        ['$M', d],
        ['$y', w],
        ['$D', g],
      ].forEach(function (W) {
        re[W[1]] = function (I) {
          return this.$g(I, W[0], W[1]);
        };
      }),
      (N.extend = function (W, I) {
        return W.$i || (W(I, X, N), (W.$i = !0)), N;
      }),
      (N.locale = H),
      (N.isDayjs = $),
      (N.unix = function (W) {
        return N(1e3 * W);
      }),
      (N.en = S[b]),
      (N.Ls = S),
      (N.p = {}),
      N
    );
  });
})(J1);
var g4 = J1.exports;
const Z1 = Xi(g4);
var ey = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Em, function () {
    return function (n, r) {
      var o = r.prototype,
        i = o.format;
      o.format = function (a) {
        var s = this,
          l = this.$locale();
        if (!this.isValid()) return i.bind(this)(a);
        var u = this.$utils(),
          c = (a || 'YYYY-MM-DDTHH:mm:ssZ').replace(
            /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
            function (d) {
              switch (d) {
                case 'Q':
                  return Math.ceil((s.$M + 1) / 3);
                case 'Do':
                  return l.ordinal(s.$D);
                case 'gggg':
                  return s.weekYear();
                case 'GGGG':
                  return s.isoWeekYear();
                case 'wo':
                  return l.ordinal(s.week(), 'W');
                case 'w':
                case 'ww':
                  return u.s(s.week(), d === 'w' ? 1 : 2, '0');
                case 'W':
                case 'WW':
                  return u.s(s.isoWeek(), d === 'W' ? 1 : 2, '0');
                case 'k':
                case 'kk':
                  return u.s(
                    String(s.$H === 0 ? 24 : s.$H),
                    d === 'k' ? 1 : 2,
                    '0'
                  );
                case 'X':
                  return Math.floor(s.$d.getTime() / 1e3);
                case 'x':
                  return s.$d.getTime();
                case 'z':
                  return '[' + s.offsetName() + ']';
                case 'zzz':
                  return '[' + s.offsetName('long') + ']';
                default:
                  return d;
              }
            }
          );
        return i.bind(this)(c);
      };
    };
  });
})(ey);
var y4 = ey.exports;
const v4 = Xi(y4);
var Tf = {},
  w4 = $t;
Object.defineProperty(Tf, '__esModule', { value: !0 });
var ty = (Tf.default = void 0),
  x4 = w4(Nt()),
  S4 = v,
  E4 = (0, x4.default)(
    (0, S4.jsx)('path', {
      d: 'M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z',
    }),
    'CalendarMonth'
  );
ty = Tf.default = E4;
var Pf = {},
  k4 = $t;
Object.defineProperty(Pf, '__esModule', { value: !0 });
var ny = (Pf.default = void 0),
  C4 = k4(Nt()),
  b4 = v,
  _4 = (0, C4.default)(
    (0, b4.jsx)('path', {
      d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    }),
    'Person'
  );
ny = Pf.default = _4;
const R4 = '/assets/photo-e7FQLIC4.svg';
Z1.extend(v4);
const T4 = ({
    _id: e,
    title: t,
    description: n,
    steps: r,
    ingredients: o,
    type: i,
    createdBy: a,
    createdAt: s,
    updatedAt: l,
    image: u,
  }) => {
    const c = Z1(s).format('Do MMMM YYYY');
    return v.jsxs(h4, {
      children: [
        v.jsx('header', {
          children: v.jsxs('div', {
            className: 'info',
            children: [
              v.jsx('h5', { children: t }),
              v.jsx('p', { children: n }),
            ],
          }),
        }),
        v.jsxs('div', {
          className: 'content',
          children: [
            v.jsxs('div', {
              className: 'content-center',
              children: [
                u
                  ? v.jsx('img', {
                      src: u,
                      alt: 'image',
                      className: 'recipe-img',
                    })
                  : v.jsx('img', {
                      src: R4,
                      alt: 'no photo',
                      className: 'recipe-img',
                    }),
                v.jsx(Tu, { icon: v.jsx(ca, { fontSize: 'small' }), text: i }),
                v.jsx(Tu, { icon: v.jsx(ty, { fontSize: 'small' }), text: c }),
              ],
            }),
            v.jsxs('footer', {
              className: 'actions',
              children: [
                v.jsx(wr, {
                  className: 'button edit-button',
                  to: `/dashboard/edit-recipe/${e}`,
                  children: 'Edit',
                }),
                v.jsx(Vr, {
                  method: 'post',
                  action: `/dashboard/delete-recipe/${e}`,
                  children: v.jsx('button', {
                    type: 'submit',
                    className: 'button delete-button',
                    children: 'Delete',
                  }),
                }),
                v.jsx('div', { className: 'filler' }),
                v.jsx('div', {
                  className: 'user-box',
                  children: v.jsx(Tu, {
                    icon: v.jsx(ny, { fontSize: 'small' }),
                    text: a,
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  im = gt.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .recipes {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 800px) {
    .recipes {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
  @media (min-width: 1400px) {
    .recipes {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
`;
function ry(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = ry(e[t])) && (r && (r += ' '), (r += n));
    else for (t in e) e[t] && (r && (r += ' '), (r += t));
  return r;
}
function or() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = ry(e)) && (r && (r += ' '), (r += t));
  return r;
}
const Ci = (e) => typeof e == 'number' && !isNaN(e),
  Ur = (e) => typeof e == 'string',
  bt = (e) => typeof e == 'function',
  as = (e) => (Ur(e) || bt(e) ? e : null),
  Pu = (e) => k.isValidElement(e) || Ur(e) || bt(e) || Ci(e);
function P4(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: o } = e;
  requestAnimationFrame(() => {
    (o.minHeight = 'initial'),
      (o.height = r + 'px'),
      (o.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (o.height = '0'), (o.padding = '0'), (o.margin = '0'), setTimeout(t, n);
      });
  });
}
function jl(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: o = !0,
    collapseDuration: i = 300,
  } = e;
  return function (a) {
    let {
      children: s,
      position: l,
      preventExitTransition: u,
      done: c,
      nodeRef: d,
      isIn: p,
    } = a;
    const w = r ? `${t}--${l}` : t,
      g = r ? `${n}--${l}` : n,
      m = k.useRef(0);
    return (
      k.useLayoutEffect(() => {
        const x = d.current,
          f = w.split(' '),
          h = (y) => {
            y.target === d.current &&
              (x.dispatchEvent(new Event('d')),
              x.removeEventListener('animationend', h),
              x.removeEventListener('animationcancel', h),
              m.current === 0 &&
                y.type !== 'animationcancel' &&
                x.classList.remove(...f));
          };
        x.classList.add(...f),
          x.addEventListener('animationend', h),
          x.addEventListener('animationcancel', h);
      }, []),
      k.useEffect(() => {
        const x = d.current,
          f = () => {
            x.removeEventListener('animationend', f), o ? P4(x, c, i) : c();
          };
        p ||
          (u
            ? f()
            : ((m.current = 1),
              (x.className += ` ${g}`),
              x.addEventListener('animationend', f)));
      }, [p]),
      Ee.createElement(Ee.Fragment, null, s)
    );
  };
}
function am(e, t) {
  return {
    content: e.content,
    containerId: e.props.containerId,
    id: e.props.toastId,
    theme: e.props.theme,
    type: e.props.type,
    data: e.props.data || {},
    isLoading: e.props.isLoading,
    icon: e.props.icon,
    status: t,
  };
}
const Wt = {
    list: new Map(),
    emitQueue: new Map(),
    on(e, t) {
      return (
        this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
      );
    },
    off(e, t) {
      if (t) {
        const n = this.list.get(e).filter((r) => r !== t);
        return this.list.set(e, n), this;
      }
      return this.list.delete(e), this;
    },
    cancelEmit(e) {
      const t = this.emitQueue.get(e);
      return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
    },
    emit(e) {
      this.list.has(e) &&
        this.list.get(e).forEach((t) => {
          const n = setTimeout(() => {
            t(...[].slice.call(arguments, 1));
          }, 0);
          this.emitQueue.has(e) || this.emitQueue.set(e, []),
            this.emitQueue.get(e).push(n);
        });
    },
  },
  za = (e) => {
    let { theme: t, type: n, ...r } = e;
    return Ee.createElement('svg', {
      viewBox: '0 0 24 24',
      width: '100%',
      height: '100%',
      fill:
        t === 'colored' ? 'currentColor' : `var(--toastify-icon-color-${n})`,
      ...r,
    });
  },
  $u = {
    info: function (e) {
      return Ee.createElement(
        za,
        { ...e },
        Ee.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z',
        })
      );
    },
    warning: function (e) {
      return Ee.createElement(
        za,
        { ...e },
        Ee.createElement('path', {
          d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z',
        })
      );
    },
    success: function (e) {
      return Ee.createElement(
        za,
        { ...e },
        Ee.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z',
        })
      );
    },
    error: function (e) {
      return Ee.createElement(
        za,
        { ...e },
        Ee.createElement('path', {
          d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z',
        })
      );
    },
    spinner: function () {
      return Ee.createElement('div', { className: 'Toastify__spinner' });
    },
  };
function $4(e) {
  const [, t] = k.useReducer((w) => w + 1, 0),
    [n, r] = k.useState([]),
    o = k.useRef(null),
    i = k.useRef(new Map()).current,
    a = (w) => n.indexOf(w) !== -1,
    s = k.useRef({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: e,
      containerId: null,
      isToastActive: a,
      getToast: (w) => i.get(w),
    }).current;
  function l(w) {
    let { containerId: g } = w;
    const { limit: m } = s.props;
    !m ||
      (g && s.containerId !== g) ||
      ((s.count -= s.queue.length), (s.queue = []));
  }
  function u(w) {
    r((g) => (w == null ? [] : g.filter((m) => m !== w)));
  }
  function c() {
    const { toastContent: w, toastProps: g, staleId: m } = s.queue.shift();
    p(w, g, m);
  }
  function d(w, g) {
    let { delay: m, staleId: x, ...f } = g;
    if (
      !Pu(w) ||
      (function (X) {
        return (
          !o.current ||
          (s.props.enableMultiContainer &&
            X.containerId !== s.props.containerId) ||
          (i.has(X.toastId) && X.updateId == null)
        );
      })(f)
    )
      return;
    const { toastId: h, updateId: y, data: E } = f,
      { props: b } = s,
      S = () => u(h),
      _ = y == null;
    _ && s.count++;
    const $ = {
      ...b,
      style: b.toastStyle,
      key: s.toastKey++,
      ...Object.fromEntries(
        Object.entries(f).filter((X) => {
          let [re, W] = X;
          return W != null;
        })
      ),
      toastId: h,
      updateId: y,
      data: E,
      closeToast: S,
      isIn: !1,
      className: as(f.className || b.toastClassName),
      bodyClassName: as(f.bodyClassName || b.bodyClassName),
      progressClassName: as(f.progressClassName || b.progressClassName),
      autoClose:
        !f.isLoading &&
        ((H = f.autoClose),
        (N = b.autoClose),
        H === !1 || (Ci(H) && H > 0) ? H : N),
      deleteToast() {
        const X = am(i.get(h), 'removed');
        i.delete(h), Wt.emit(4, X);
        const re = s.queue.length;
        if (
          ((s.count = h == null ? s.count - s.displayedToast : s.count - 1),
          s.count < 0 && (s.count = 0),
          re > 0)
        ) {
          const W = h == null ? s.props.limit : 1;
          if (re === 1 || W === 1) s.displayedToast++, c();
          else {
            const I = W > re ? re : W;
            s.displayedToast = I;
            for (let L = 0; L < I; L++) c();
          }
        } else t();
      },
    };
    var H, N;
    ($.iconOut = (function (X) {
      let { theme: re, type: W, isLoading: I, icon: L } = X,
        D = null;
      const R = { theme: re, type: W };
      return (
        L === !1 ||
          (bt(L)
            ? (D = L(R))
            : k.isValidElement(L)
            ? (D = k.cloneElement(L, R))
            : Ur(L) || Ci(L)
            ? (D = L)
            : I
            ? (D = $u.spinner())
            : ((M) => M in $u)(W) && (D = $u[W](R))),
        D
      );
    })($)),
      bt(f.onOpen) && ($.onOpen = f.onOpen),
      bt(f.onClose) && ($.onClose = f.onClose),
      ($.closeButton = b.closeButton),
      f.closeButton === !1 || Pu(f.closeButton)
        ? ($.closeButton = f.closeButton)
        : f.closeButton === !0 &&
          ($.closeButton = !Pu(b.closeButton) || b.closeButton);
    let V = w;
    k.isValidElement(w) && !Ur(w.type)
      ? (V = k.cloneElement(w, { closeToast: S, toastProps: $, data: E }))
      : bt(w) && (V = w({ closeToast: S, toastProps: $, data: E })),
      b.limit && b.limit > 0 && s.count > b.limit && _
        ? s.queue.push({ toastContent: V, toastProps: $, staleId: x })
        : Ci(m)
        ? setTimeout(() => {
            p(V, $, x);
          }, m)
        : p(V, $, x);
  }
  function p(w, g, m) {
    const { toastId: x } = g;
    m && i.delete(m);
    const f = { content: w, props: g };
    i.set(x, f),
      r((h) => [...h, x].filter((y) => y !== m)),
      Wt.emit(4, am(f, f.props.updateId == null ? 'added' : 'updated'));
  }
  return (
    k.useEffect(
      () => (
        (s.containerId = e.containerId),
        Wt.cancelEmit(3)
          .on(0, d)
          .on(1, (w) => o.current && u(w))
          .on(5, l)
          .emit(2, s),
        () => {
          i.clear(), Wt.emit(3, s);
        }
      ),
      []
    ),
    k.useEffect(() => {
      (s.props = e), (s.isToastActive = a), (s.displayedToast = n.length);
    }),
    {
      getToastToRender: function (w) {
        const g = new Map(),
          m = Array.from(i.values());
        return (
          e.newestOnTop && m.reverse(),
          m.forEach((x) => {
            const { position: f } = x.props;
            g.has(f) || g.set(f, []), g.get(f).push(x);
          }),
          Array.from(g, (x) => w(x[0], x[1]))
        );
      },
      containerRef: o,
      isToastActive: a,
    }
  );
}
function sm(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientX
    : e.clientX;
}
function lm(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientY
    : e.clientY;
}
function N4(e) {
  const [t, n] = k.useState(!1),
    [r, o] = k.useState(!1),
    i = k.useRef(null),
    a = k.useRef({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1,
    }).current,
    s = k.useRef(e),
    {
      autoClose: l,
      pauseOnHover: u,
      closeToast: c,
      onClick: d,
      closeOnClick: p,
    } = e;
  function w(E) {
    if (e.draggable) {
      E.nativeEvent.type === 'touchstart' && E.nativeEvent.preventDefault(),
        (a.didMove = !1),
        document.addEventListener('mousemove', f),
        document.addEventListener('mouseup', h),
        document.addEventListener('touchmove', f),
        document.addEventListener('touchend', h);
      const b = i.current;
      (a.canCloseOnClick = !0),
        (a.canDrag = !0),
        (a.boundingRect = b.getBoundingClientRect()),
        (b.style.transition = ''),
        (a.x = sm(E.nativeEvent)),
        (a.y = lm(E.nativeEvent)),
        e.draggableDirection === 'x'
          ? ((a.start = a.x),
            (a.removalDistance = b.offsetWidth * (e.draggablePercent / 100)))
          : ((a.start = a.y),
            (a.removalDistance =
              b.offsetHeight *
              (e.draggablePercent === 80
                ? 1.5 * e.draggablePercent
                : e.draggablePercent / 100)));
    }
  }
  function g(E) {
    if (a.boundingRect) {
      const { top: b, bottom: S, left: _, right: $ } = a.boundingRect;
      E.nativeEvent.type !== 'touchend' &&
      e.pauseOnHover &&
      a.x >= _ &&
      a.x <= $ &&
      a.y >= b &&
      a.y <= S
        ? x()
        : m();
    }
  }
  function m() {
    n(!0);
  }
  function x() {
    n(!1);
  }
  function f(E) {
    const b = i.current;
    a.canDrag &&
      b &&
      ((a.didMove = !0),
      t && x(),
      (a.x = sm(E)),
      (a.y = lm(E)),
      (a.delta = e.draggableDirection === 'x' ? a.x - a.start : a.y - a.start),
      a.start !== a.x && (a.canCloseOnClick = !1),
      (b.style.transform = `translate${e.draggableDirection}(${a.delta}px)`),
      (b.style.opacity = '' + (1 - Math.abs(a.delta / a.removalDistance))));
  }
  function h() {
    document.removeEventListener('mousemove', f),
      document.removeEventListener('mouseup', h),
      document.removeEventListener('touchmove', f),
      document.removeEventListener('touchend', h);
    const E = i.current;
    if (a.canDrag && a.didMove && E) {
      if (((a.canDrag = !1), Math.abs(a.delta) > a.removalDistance))
        return o(!0), void e.closeToast();
      (E.style.transition = 'transform 0.2s, opacity 0.2s'),
        (E.style.transform = `translate${e.draggableDirection}(0)`),
        (E.style.opacity = '1');
    }
  }
  k.useEffect(() => {
    s.current = e;
  }),
    k.useEffect(
      () => (
        i.current && i.current.addEventListener('d', m, { once: !0 }),
        bt(e.onOpen) &&
          e.onOpen(k.isValidElement(e.children) && e.children.props),
        () => {
          const E = s.current;
          bt(E.onClose) &&
            E.onClose(k.isValidElement(E.children) && E.children.props);
        }
      ),
      []
    ),
    k.useEffect(
      () => (
        e.pauseOnFocusLoss &&
          (document.hasFocus() || x(),
          window.addEventListener('focus', m),
          window.addEventListener('blur', x)),
        () => {
          e.pauseOnFocusLoss &&
            (window.removeEventListener('focus', m),
            window.removeEventListener('blur', x));
        }
      ),
      [e.pauseOnFocusLoss]
    );
  const y = { onMouseDown: w, onTouchStart: w, onMouseUp: g, onTouchEnd: g };
  return (
    l && u && ((y.onMouseEnter = x), (y.onMouseLeave = m)),
    p &&
      (y.onClick = (E) => {
        d && d(E), a.canCloseOnClick && c();
      }),
    {
      playToast: m,
      pauseToast: x,
      isRunning: t,
      preventExitTransition: r,
      toastRef: i,
      eventHandlers: y,
    }
  );
}
function oy(e) {
  let { closeToast: t, theme: n, ariaLabel: r = 'close' } = e;
  return Ee.createElement(
    'button',
    {
      className: `Toastify__close-button Toastify__close-button--${n}`,
      type: 'button',
      onClick: (o) => {
        o.stopPropagation(), t(o);
      },
      'aria-label': r,
    },
    Ee.createElement(
      'svg',
      { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
      Ee.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z',
      })
    )
  );
}
function O4(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: o = 'default',
    hide: i,
    className: a,
    style: s,
    controlledProgress: l,
    progress: u,
    rtl: c,
    isIn: d,
    theme: p,
  } = e;
  const w = i || (l && u === 0),
    g = {
      ...s,
      animationDuration: `${t}ms`,
      animationPlayState: n ? 'running' : 'paused',
      opacity: w ? 0 : 1,
    };
  l && (g.transform = `scaleX(${u})`);
  const m = or(
      'Toastify__progress-bar',
      l
        ? 'Toastify__progress-bar--controlled'
        : 'Toastify__progress-bar--animated',
      `Toastify__progress-bar-theme--${p}`,
      `Toastify__progress-bar--${o}`,
      { 'Toastify__progress-bar--rtl': c }
    ),
    x = bt(a) ? a({ rtl: c, type: o, defaultClassName: m }) : or(m, a);
  return Ee.createElement('div', {
    role: 'progressbar',
    'aria-hidden': w ? 'true' : 'false',
    'aria-label': 'notification timer',
    className: x,
    style: g,
    [l && u >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
      l && u < 1
        ? null
        : () => {
            d && r();
          },
  });
}
const j4 = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: o,
      } = N4(e),
      {
        closeButton: i,
        children: a,
        autoClose: s,
        onClick: l,
        type: u,
        hideProgressBar: c,
        closeToast: d,
        transition: p,
        position: w,
        className: g,
        style: m,
        bodyClassName: x,
        bodyStyle: f,
        progressClassName: h,
        progressStyle: y,
        updateId: E,
        role: b,
        progress: S,
        rtl: _,
        toastId: $,
        deleteToast: H,
        isIn: N,
        isLoading: V,
        iconOut: X,
        closeOnClick: re,
        theme: W,
      } = e,
      I = or(
        'Toastify__toast',
        `Toastify__toast-theme--${W}`,
        `Toastify__toast--${u}`,
        { 'Toastify__toast--rtl': _ },
        { 'Toastify__toast--close-on-click': re }
      ),
      L = bt(g)
        ? g({ rtl: _, position: w, type: u, defaultClassName: I })
        : or(I, g),
      D = !!S || !s,
      R = { closeToast: d, type: u, theme: W };
    let M = null;
    return (
      i === !1 ||
        (M = bt(i) ? i(R) : k.isValidElement(i) ? k.cloneElement(i, R) : oy(R)),
      Ee.createElement(
        p,
        { isIn: N, done: H, position: w, preventExitTransition: n, nodeRef: r },
        Ee.createElement(
          'div',
          { id: $, onClick: l, className: L, ...o, style: m, ref: r },
          Ee.createElement(
            'div',
            {
              ...(N && { role: b }),
              className: bt(x) ? x({ type: u }) : or('Toastify__toast-body', x),
              style: f,
            },
            X != null &&
              Ee.createElement(
                'div',
                {
                  className: or('Toastify__toast-icon', {
                    'Toastify--animate-icon Toastify__zoom-enter': !V,
                  }),
                },
                X
              ),
            Ee.createElement('div', null, a)
          ),
          M,
          Ee.createElement(O4, {
            ...(E && !D ? { key: `pb-${E}` } : {}),
            rtl: _,
            theme: W,
            delay: s,
            isRunning: t,
            isIn: N,
            closeToast: d,
            hide: c,
            type: u,
            style: y,
            className: h,
            controlledProgress: D,
            progress: S || 0,
          })
        )
      )
    );
  },
  Al = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  A4 = jl(Al('bounce', !0));
jl(Al('slide', !0));
jl(Al('zoom'));
jl(Al('flip'));
const Vc = k.forwardRef((e, t) => {
  const { getToastToRender: n, containerRef: r, isToastActive: o } = $4(e),
    { className: i, style: a, rtl: s, containerId: l } = e;
  function u(c) {
    const d = or(
      'Toastify__toast-container',
      `Toastify__toast-container--${c}`,
      { 'Toastify__toast-container--rtl': s }
    );
    return bt(i)
      ? i({ position: c, rtl: s, defaultClassName: d })
      : or(d, as(i));
  }
  return (
    k.useEffect(() => {
      t && (t.current = r.current);
    }, []),
    Ee.createElement(
      'div',
      { ref: r, className: 'Toastify', id: l },
      n((c, d) => {
        const p = d.length ? { ...a } : { ...a, pointerEvents: 'none' };
        return Ee.createElement(
          'div',
          { className: u(c), style: p, key: `container-${c}` },
          d.map((w, g) => {
            let { content: m, props: x } = w;
            return Ee.createElement(
              j4,
              {
                ...x,
                isIn: o(x.toastId),
                style: { ...x.style, '--nth': g + 1, '--len': d.length },
                key: `toast-${x.key}`,
              },
              m
            );
          })
        );
      })
    )
  );
});
(Vc.displayName = 'ToastContainer'),
  (Vc.defaultProps = {
    position: 'top-right',
    transition: A4,
    autoClose: 5e3,
    closeButton: oy,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: 'x',
    role: 'alert',
    theme: 'light',
  });
let Nu,
  Tr = new Map(),
  ci = [],
  L4 = 1;
function iy() {
  return '' + L4++;
}
function D4(e) {
  return e && (Ur(e.toastId) || Ci(e.toastId)) ? e.toastId : iy();
}
function bi(e, t) {
  return (
    Tr.size > 0 ? Wt.emit(0, e, t) : ci.push({ content: e, options: t }),
    t.toastId
  );
}
function Ws(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: D4(t) };
}
function Fa(e) {
  return (t, n) => bi(t, Ws(e, n));
}
function le(e, t) {
  return bi(e, Ws('default', t));
}
(le.loading = (e, t) =>
  bi(
    e,
    Ws('default', {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (le.promise = function (e, t, n) {
    let r,
      { pending: o, error: i, success: a } = t;
    o && (r = Ur(o) ? le.loading(o, n) : le.loading(o.render, { ...n, ...o }));
    const s = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      l = (c, d, p) => {
        if (d == null) return void le.dismiss(r);
        const w = { type: c, ...s, ...n, data: p },
          g = Ur(d) ? { render: d } : d;
        return (
          r ? le.update(r, { ...w, ...g }) : le(g.render, { ...w, ...g }), p
        );
      },
      u = bt(e) ? e() : e;
    return u.then((c) => l('success', a, c)).catch((c) => l('error', i, c)), u;
  }),
  (le.success = Fa('success')),
  (le.info = Fa('info')),
  (le.error = Fa('error')),
  (le.warning = Fa('warning')),
  (le.warn = le.warning),
  (le.dark = (e, t) => bi(e, Ws('default', { theme: 'dark', ...t }))),
  (le.dismiss = (e) => {
    Tr.size > 0
      ? Wt.emit(1, e)
      : (ci = ci.filter((t) => e != null && t.options.toastId !== e));
  }),
  (le.clearWaitingQueue = function (e) {
    return e === void 0 && (e = {}), Wt.emit(5, e);
  }),
  (le.isActive = (e) => {
    let t = !1;
    return (
      Tr.forEach((n) => {
        n.isToastActive && n.isToastActive(e) && (t = !0);
      }),
      t
    );
  }),
  (le.update = function (e, t) {
    t === void 0 && (t = {}),
      setTimeout(() => {
        const n = (function (r, o) {
          let { containerId: i } = o;
          const a = Tr.get(i || Nu);
          return a && a.getToast(r);
        })(e, t);
        if (n) {
          const { props: r, content: o } = n,
            i = {
              delay: 100,
              ...r,
              ...t,
              toastId: t.toastId || e,
              updateId: iy(),
            };
          i.toastId !== e && (i.staleId = e);
          const a = i.render || o;
          delete i.render, bi(a, i);
        }
      }, 0);
  }),
  (le.done = (e) => {
    le.update(e, { progress: 1 });
  }),
  (le.onChange = (e) => (
    Wt.on(4, e),
    () => {
      Wt.off(4, e);
    }
  )),
  (le.POSITION = {
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    TOP_CENTER: 'top-center',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_CENTER: 'bottom-center',
  }),
  (le.TYPE = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    DEFAULT: 'default',
  }),
  Wt.on(2, (e) => {
    (Nu = e.containerId || e),
      Tr.set(Nu, e),
      ci.forEach((t) => {
        Wt.emit(0, t.content, t.options);
      }),
      (ci = []);
  }).on(3, (e) => {
    Tr.delete(e.containerId || e), Tr.size === 0 && Wt.off(0).off(1).off(5);
  });
function ay(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: M4 } = Object.prototype,
  { getPrototypeOf: $f } = Object,
  Ll = ((e) => (t) => {
    const n = M4.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Hn = (e) => ((e = e.toLowerCase()), (t) => Ll(t) === e),
  Dl = (e) => (t) => typeof t === e,
  { isArray: Ho } = Array,
  qi = Dl('undefined');
function I4(e) {
  return (
    e !== null &&
    !qi(e) &&
    e.constructor !== null &&
    !qi(e.constructor) &&
    zn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const sy = Hn('ArrayBuffer');
function z4(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && sy(e.buffer)),
    t
  );
}
const F4 = Dl('string'),
  zn = Dl('function'),
  ly = Dl('number'),
  Nf = (e) => e !== null && typeof e == 'object',
  U4 = (e) => e === !0 || e === !1,
  ss = (e) => {
    if (Ll(e) !== 'object') return !1;
    const t = $f(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  B4 = Hn('Date'),
  H4 = Hn('File'),
  W4 = Hn('Blob'),
  V4 = Hn('FileList'),
  K4 = (e) => Nf(e) && zn(e.pipe),
  Y4 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (zn(e.append) &&
          ((t = Ll(e)) === 'formdata' ||
            (t === 'object' &&
              zn(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  G4 = Hn('URLSearchParams'),
  Q4 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function da(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, o;
  if ((typeof e != 'object' && (e = [e]), Ho(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length;
    let s;
    for (r = 0; r < a; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function uy(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const cy =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global,
  dy = (e) => !qi(e) && e !== cy;
function Kc() {
  const { caseless: e } = (dy(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && uy(t, o)) || o;
      ss(t[i]) && ss(r)
        ? (t[i] = Kc(t[i], r))
        : ss(r)
        ? (t[i] = Kc({}, r))
        : Ho(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && da(arguments[r], n);
  return t;
}
const q4 = (e, t, n, { allOwnKeys: r } = {}) => (
    da(
      t,
      (o, i) => {
        n && zn(o) ? (e[i] = ay(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  X4 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  J4 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Z4 = (e, t, n, r) => {
    let o, i, a;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (a = o[i]), (!r || r(a, e, t)) && !s[a] && ((t[a] = e[a]), (s[a] = !0));
      e = n !== !1 && $f(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  e5 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  t5 = (e) => {
    if (!e) return null;
    if (Ho(e)) return e;
    let t = e.length;
    if (!ly(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  n5 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && $f(Uint8Array)),
  r5 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  o5 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  i5 = Hn('HTMLFormElement'),
  a5 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  um = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  s5 = Hn('RegExp'),
  fy = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    da(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o);
    }),
      Object.defineProperties(e, r);
  },
  l5 = (e) => {
    fy(e, (t, n) => {
      if (zn(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (zn(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  u5 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Ho(e) ? r(e) : r(String(e).split(t)), n;
  },
  c5 = () => {},
  d5 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ou = 'abcdefghijklmnopqrstuvwxyz',
  cm = '0123456789',
  py = { DIGIT: cm, ALPHA: Ou, ALPHA_DIGIT: Ou + Ou.toUpperCase() + cm },
  f5 = (e = 16, t = py.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function p5(e) {
  return !!(
    e &&
    zn(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const h5 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Nf(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[o] = r;
            const i = Ho(r) ? [] : {};
            return (
              da(r, (a, s) => {
                const l = n(a, o + 1);
                !qi(l) && (i[s] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  j = {
    isArray: Ho,
    isArrayBuffer: sy,
    isBuffer: I4,
    isFormData: Y4,
    isArrayBufferView: z4,
    isString: F4,
    isNumber: ly,
    isBoolean: U4,
    isObject: Nf,
    isPlainObject: ss,
    isUndefined: qi,
    isDate: B4,
    isFile: H4,
    isBlob: W4,
    isRegExp: s5,
    isFunction: zn,
    isStream: K4,
    isURLSearchParams: G4,
    isTypedArray: n5,
    isFileList: V4,
    forEach: da,
    merge: Kc,
    extend: q4,
    trim: Q4,
    stripBOM: X4,
    inherits: J4,
    toFlatObject: Z4,
    kindOf: Ll,
    kindOfTest: Hn,
    endsWith: e5,
    toArray: t5,
    forEachEntry: r5,
    matchAll: o5,
    isHTMLForm: i5,
    hasOwnProperty: um,
    hasOwnProp: um,
    reduceDescriptors: fy,
    freezeMethods: l5,
    toObjectSet: u5,
    toCamelCase: a5,
    noop: c5,
    toFiniteNumber: d5,
    findKey: uy,
    global: cy,
    isContextDefined: dy,
    ALPHABET: py,
    generateString: f5,
    isSpecCompliantForm: p5,
    toJSONObject: h5,
  };
function ge(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
j.inherits(ge, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: j.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const hy = ge.prototype,
  my = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  my[e] = { value: e };
});
Object.defineProperties(ge, my);
Object.defineProperty(hy, 'isAxiosError', { value: !0 });
ge.from = (e, t, n, r, o, i) => {
  const a = Object.create(hy);
  return (
    j.toFlatObject(
      e,
      a,
      function (l) {
        return l !== Error.prototype;
      },
      (s) => s !== 'isAxiosError'
    ),
    ge.call(a, e.message, t, n, r, o),
    (a.cause = e),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  );
};
const m5 = null;
function Yc(e) {
  return j.isPlainObject(e) || j.isArray(e);
}
function gy(e) {
  return j.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function dm(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = gy(o)), !n && i ? '[' + o + ']' : o;
        })
        .join(n ? '.' : '')
    : t;
}
function g5(e) {
  return j.isArray(e) && !e.some(Yc);
}
const y5 = j.toFlatObject(j, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ml(e, t, n) {
  if (!j.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = j.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (m, x) {
        return !j.isUndefined(x[m]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    a = n.indexes,
    l = (n.Blob || (typeof Blob < 'u' && Blob)) && j.isSpecCompliantForm(t);
  if (!j.isFunction(o)) throw new TypeError('visitor must be a function');
  function u(g) {
    if (g === null) return '';
    if (j.isDate(g)) return g.toISOString();
    if (!l && j.isBlob(g))
      throw new ge('Blob is not supported. Use a Buffer instead.');
    return j.isArrayBuffer(g) || j.isTypedArray(g)
      ? l && typeof Blob == 'function'
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, m, x) {
    let f = g;
    if (g && !x && typeof g == 'object') {
      if (j.endsWith(m, '{}'))
        (m = r ? m : m.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (j.isArray(g) && g5(g)) ||
        ((j.isFileList(g) || j.endsWith(m, '[]')) && (f = j.toArray(g)))
      )
        return (
          (m = gy(m)),
          f.forEach(function (y, E) {
            !(j.isUndefined(y) || y === null) &&
              t.append(
                a === !0 ? dm([m], E, i) : a === null ? m : m + '[]',
                u(y)
              );
          }),
          !1
        );
    }
    return Yc(g) ? !0 : (t.append(dm(x, m, i), u(g)), !1);
  }
  const d = [],
    p = Object.assign(y5, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Yc,
    });
  function w(g, m) {
    if (!j.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error('Circular reference detected in ' + m.join('.'));
      d.push(g),
        j.forEach(g, function (f, h) {
          (!(j.isUndefined(f) || f === null) &&
            o.call(t, f, j.isString(h) ? h.trim() : h, m, p)) === !0 &&
            w(f, m ? m.concat(h) : [h]);
        }),
        d.pop();
    }
  }
  if (!j.isObject(e)) throw new TypeError('data must be an object');
  return w(e), t;
}
function fm(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Of(e, t) {
  (this._pairs = []), e && Ml(e, this, t);
}
const yy = Of.prototype;
yy.append = function (t, n) {
  this._pairs.push([t, n]);
};
yy.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, fm);
      }
    : fm;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1]);
    }, '')
    .join('&');
};
function v5(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function vy(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || v5,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = j.isURLSearchParams(t) ? t.toString() : new Of(t, n).toString(r)),
    i)
  ) {
    const a = e.indexOf('#');
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class w5 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    j.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const pm = w5,
  wy = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  x5 = typeof URLSearchParams < 'u' ? URLSearchParams : Of,
  S5 = typeof FormData < 'u' ? FormData : null,
  E5 = typeof Blob < 'u' ? Blob : null,
  k5 = (() => {
    let e;
    return typeof navigator < 'u' &&
      ((e = navigator.product) === 'ReactNative' ||
        e === 'NativeScript' ||
        e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  })(),
  C5 =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  vn = {
    isBrowser: !0,
    classes: { URLSearchParams: x5, FormData: S5, Blob: E5 },
    isStandardBrowserEnv: k5,
    isStandardBrowserWebWorkerEnv: C5,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
function b5(e, t) {
  return Ml(
    e,
    new vn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return vn.isNode && j.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function _5(e) {
  return j
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function R5(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function xy(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    const s = Number.isFinite(+a),
      l = i >= n.length;
    return (
      (a = !a && j.isArray(o) ? o.length : a),
      l
        ? (j.hasOwnProp(o, a) ? (o[a] = [o[a], r]) : (o[a] = r), !s)
        : ((!o[a] || !j.isObject(o[a])) && (o[a] = []),
          t(n, r, o[a], i) && j.isArray(o[a]) && (o[a] = R5(o[a])),
          !s)
    );
  }
  if (j.isFormData(e) && j.isFunction(e.entries)) {
    const n = {};
    return (
      j.forEachEntry(e, (r, o) => {
        t(_5(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
const T5 = { 'Content-Type': void 0 };
function P5(e, t, n) {
  if (j.isString(e))
    try {
      return (t || JSON.parse)(e), j.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const Il = {
  transitional: wy,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = j.isObject(t);
      if ((i && j.isHTMLForm(t) && (t = new FormData(t)), j.isFormData(t)))
        return o && o ? JSON.stringify(xy(t)) : t;
      if (
        j.isArrayBuffer(t) ||
        j.isBuffer(t) ||
        j.isStream(t) ||
        j.isFile(t) ||
        j.isBlob(t)
      )
        return t;
      if (j.isArrayBufferView(t)) return t.buffer;
      if (j.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        );
      let s;
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return b5(t, this.formSerializer).toString();
        if ((s = j.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return Ml(
            s ? { 'files[]': t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType('application/json', !1), P5(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Il.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json';
      if (t && j.isString(t) && ((r && !this.responseType) || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (a)
            throw s.name === 'SyntaxError'
              ? ge.from(s, ge.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: vn.classes.FormData, Blob: vn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } },
};
j.forEach(['delete', 'get', 'head'], function (t) {
  Il.headers[t] = {};
});
j.forEach(['post', 'put', 'patch'], function (t) {
  Il.headers[t] = j.merge(T5);
});
const jf = Il,
  $5 = j.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  N5 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            (o = a.indexOf(':')),
              (n = a.substring(0, o).trim().toLowerCase()),
              (r = a.substring(o + 1).trim()),
              !(!n || (t[n] && $5[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  hm = Symbol('internals');
function ii(e) {
  return e && String(e).trim().toLowerCase();
}
function ls(e) {
  return e === !1 || e == null ? e : j.isArray(e) ? e.map(ls) : String(e);
}
function O5(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const j5 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ju(e, t, n, r, o) {
  if (j.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!j.isString(t))) {
    if (j.isString(r)) return t.indexOf(r) !== -1;
    if (j.isRegExp(r)) return r.test(t);
  }
}
function A5(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function L5(e, t) {
  const n = j.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, a) {
        return this[r].call(this, t, o, i, a);
      },
      configurable: !0,
    });
  });
}
class zl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, l, u) {
      const c = ii(l);
      if (!c) throw new Error('header name must be a non-empty string');
      const d = j.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || l] = ls(s));
    }
    const a = (s, l) => j.forEach(s, (u, c) => i(u, c, l));
    return (
      j.isPlainObject(t) || t instanceof this.constructor
        ? a(t, n)
        : j.isString(t) && (t = t.trim()) && !j5(t)
        ? a(N5(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = ii(t)), t)) {
      const r = j.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return O5(o);
        if (j.isFunction(n)) return n.call(this, o, r);
        if (j.isRegExp(n)) return n.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = ii(t)), t)) {
      const r = j.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ju(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (((a = ii(a)), a)) {
        const s = j.findKey(r, a);
        s && (!n || ju(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return j.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || ju(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      j.forEach(this, (o, i) => {
        const a = j.findKey(r, i);
        if (a) {
          (n[a] = ls(o)), delete n[i];
          return;
        }
        const s = t ? A5(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = ls(o)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      j.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && j.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[hm] = this[hm] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(a) {
      const s = ii(a);
      r[s] || (L5(o, a), (r[s] = !0));
    }
    return j.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
zl.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
j.freezeMethods(zl.prototype);
j.freezeMethods(zl);
const jn = zl;
function Au(e, t) {
  const n = this || jf,
    r = t || n,
    o = jn.from(r.headers);
  let i = r.data;
  return (
    j.forEach(e, function (s) {
      i = s.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function Sy(e) {
  return !!(e && e.__CANCEL__);
}
function fa(e, t, n) {
  ge.call(this, e ?? 'canceled', ge.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
j.inherits(fa, ge, { __CANCEL__: !0 });
function D5(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ge(
          'Request failed with status code ' + n.status,
          [ge.ERR_BAD_REQUEST, ge.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const M5 = vn.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, a, s) {
          const l = [];
          l.push(n + '=' + encodeURIComponent(r)),
            j.isNumber(o) && l.push('expires=' + new Date(o).toGMTString()),
            j.isString(i) && l.push('path=' + i),
            j.isString(a) && l.push('domain=' + a),
            s === !0 && l.push('secure'),
            (document.cookie = l.join('; '));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp('(^|;\\s*)(' + n + ')=([^;]*)')
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, '', Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function I5(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function z5(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Ey(e, t) {
  return e && !I5(t) ? z5(e, t) : t;
}
const F5 = vn.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function o(i) {
        let a = i;
        return (
          t && (n.setAttribute('href', a), (a = n.href)),
          n.setAttribute('href', a),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (a) {
          const s = j.isString(a) ? o(a) : a;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function U5(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function B5(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[i];
      a || (a = u), (n[o] = l), (r[o] = u);
      let d = i,
        p = 0;
      for (; d !== o; ) (p += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - a < t)) return;
      const w = c && u - c;
      return w ? Math.round((p * 1e3) / w) : void 0;
    }
  );
}
function mm(e, t) {
  let n = 0;
  const r = B5(50, 250);
  return (o) => {
    const i = o.loaded,
      a = o.lengthComputable ? o.total : void 0,
      s = i - n,
      l = r(s),
      u = i <= a;
    n = i;
    const c = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && a && u ? (a - i) / l : void 0,
      event: o,
    };
    (c[t ? 'download' : 'upload'] = !0), e(c);
  };
}
const H5 = typeof XMLHttpRequest < 'u',
  W5 =
    H5 &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = jn.from(e.headers).normalize(),
          a = e.responseType;
        let s;
        function l() {
          e.cancelToken && e.cancelToken.unsubscribe(s),
            e.signal && e.signal.removeEventListener('abort', s);
        }
        j.isFormData(o) &&
          (vn.isStandardBrowserEnv || vn.isStandardBrowserWebWorkerEnv) &&
          i.setContentType(!1);
        let u = new XMLHttpRequest();
        if (e.auth) {
          const w = e.auth.username || '',
            g = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : '';
          i.set('Authorization', 'Basic ' + btoa(w + ':' + g));
        }
        const c = Ey(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), vy(c, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout);
        function d() {
          if (!u) return;
          const w = jn.from(
              'getAllResponseHeaders' in u && u.getAllResponseHeaders()
            ),
            m = {
              data:
                !a || a === 'text' || a === 'json'
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: w,
              config: e,
              request: u,
            };
          D5(
            function (f) {
              n(f), l();
            },
            function (f) {
              r(f), l();
            },
            m
          ),
            (u = null);
        }
        if (
          ('onloadend' in u
            ? (u.onloadend = d)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(d);
              }),
          (u.onabort = function () {
            u &&
              (r(new ge('Request aborted', ge.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new ge('Network Error', ge.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let g = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const m = e.transitional || wy;
            e.timeoutErrorMessage && (g = e.timeoutErrorMessage),
              r(
                new ge(
                  g,
                  m.clarifyTimeoutError ? ge.ETIMEDOUT : ge.ECONNABORTED,
                  e,
                  u
                )
              ),
              (u = null);
          }),
          vn.isStandardBrowserEnv)
        ) {
          const w =
            (e.withCredentials || F5(c)) &&
            e.xsrfCookieName &&
            M5.read(e.xsrfCookieName);
          w && i.set(e.xsrfHeaderName, w);
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in u &&
            j.forEach(i.toJSON(), function (g, m) {
              u.setRequestHeader(m, g);
            }),
          j.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          a && a !== 'json' && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            u.addEventListener('progress', mm(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            u.upload &&
            u.upload.addEventListener('progress', mm(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = (w) => {
              u &&
                (r(!w || w.type ? new fa(null, e, u) : w),
                u.abort(),
                (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal &&
              (e.signal.aborted ? s() : e.signal.addEventListener('abort', s)));
        const p = U5(c);
        if (p && vn.protocols.indexOf(p) === -1) {
          r(new ge('Unsupported protocol ' + p + ':', ge.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(o || null);
      });
    },
  us = { http: m5, xhr: W5 };
j.forEach(us, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const V5 = {
  getAdapter: (e) => {
    e = j.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let o = 0;
      o < t && ((n = e[o]), !(r = j.isString(n) ? us[n.toLowerCase()] : n));
      o++
    );
    if (!r)
      throw r === !1
        ? new ge(
            `Adapter ${n} is not supported by the environment`,
            'ERR_NOT_SUPPORT'
          )
        : new Error(
            j.hasOwnProp(us, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!j.isFunction(r)) throw new TypeError('adapter is not a function');
    return r;
  },
  adapters: us,
};
function Lu(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new fa(null, e);
}
function gm(e) {
  return (
    Lu(e),
    (e.headers = jn.from(e.headers)),
    (e.data = Au.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    V5.getAdapter(e.adapter || jf.adapter)(e).then(
      function (r) {
        return (
          Lu(e),
          (r.data = Au.call(e, e.transformResponse, r)),
          (r.headers = jn.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Sy(r) ||
            (Lu(e),
            r &&
              r.response &&
              ((r.response.data = Au.call(e, e.transformResponse, r.response)),
              (r.response.headers = jn.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const ym = (e) => (e instanceof jn ? e.toJSON() : e);
function Io(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return j.isPlainObject(u) && j.isPlainObject(c)
      ? j.merge.call({ caseless: d }, u, c)
      : j.isPlainObject(c)
      ? j.merge({}, c)
      : j.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, d) {
    if (j.isUndefined(c)) {
      if (!j.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function i(u, c) {
    if (!j.isUndefined(c)) return r(void 0, c);
  }
  function a(u, c) {
    if (j.isUndefined(c)) {
      if (!j.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function s(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (u, c) => o(ym(u), ym(c), !0),
  };
  return (
    j.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
      const d = l[c] || o,
        p = d(e[c], t[c], c);
      (j.isUndefined(p) && d !== s) || (n[c] = p);
    }),
    n
  );
}
const ky = '1.3.6',
  Af = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Af[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const vm = {};
Af.transitional = function (t, n, r) {
  function o(i, a) {
    return (
      '[Axios v' +
      ky +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (r ? '. ' + r : '')
    );
  }
  return (i, a, s) => {
    if (t === !1)
      throw new ge(
        o(a, ' has been removed' + (n ? ' in ' + n : '')),
        ge.ERR_DEPRECATED
      );
    return (
      n &&
        !vm[a] &&
        ((vm[a] = !0),
        console.warn(
          o(
            a,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(i, a, s) : !0
    );
  };
};
function K5(e, t, n) {
  if (typeof e != 'object')
    throw new ge('options must be an object', ge.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      a = t[i];
    if (a) {
      const s = e[i],
        l = s === void 0 || a(s, i, e);
      if (l !== !0)
        throw new ge('option ' + i + ' must be ' + l, ge.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ge('Unknown option ' + i, ge.ERR_BAD_OPTION);
  }
}
const Gc = { assertOptions: K5, validators: Af },
  Qn = Gc.validators;
class Vs {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new pm(), response: new pm() });
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Io(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Gc.assertOptions(
        r,
        {
          silentJSONParsing: Qn.transitional(Qn.boolean),
          forcedJSONParsing: Qn.transitional(Qn.boolean),
          clarifyTimeoutError: Qn.transitional(Qn.boolean),
        },
        !1
      ),
      o != null &&
        (j.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Gc.assertOptions(
              o,
              { encode: Qn.function, serialize: Qn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let a;
    (a = i && j.merge(i.common, i[n.method])),
      a &&
        j.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          (g) => {
            delete i[g];
          }
        ),
      (n.headers = jn.concat(a, i));
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function (m) {
      (typeof m.runWhen == 'function' && m.runWhen(n) === !1) ||
        ((l = l && m.synchronous), s.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (m) {
      u.push(m.fulfilled, m.rejected);
    });
    let c,
      d = 0,
      p;
    if (!l) {
      const g = [gm.bind(this), void 0];
      for (
        g.unshift.apply(g, s),
          g.push.apply(g, u),
          p = g.length,
          c = Promise.resolve(n);
        d < p;

      )
        c = c.then(g[d++], g[d++]);
      return c;
    }
    p = s.length;
    let w = n;
    for (d = 0; d < p; ) {
      const g = s[d++],
        m = s[d++];
      try {
        w = g(w);
      } catch (x) {
        m.call(this, x);
        break;
      }
    }
    try {
      c = gm.call(this, w);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, p = u.length; d < p; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Io(this.defaults, t);
    const n = Ey(t.baseURL, t.url);
    return vy(n, t.params, t.paramsSerializer);
  }
}
j.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Vs.prototype[t] = function (n, r) {
    return this.request(
      Io(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
j.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, a, s) {
      return this.request(
        Io(s || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: a,
        })
      );
    };
  }
  (Vs.prototype[t] = n()), (Vs.prototype[t + 'Form'] = n(!0));
});
const cs = Vs;
class Lf {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const a = new Promise((s) => {
          r.subscribe(s), (i = s);
        }).then(o);
        return (
          (a.cancel = function () {
            r.unsubscribe(i);
          }),
          a
        );
      }),
      t(function (i, a, s) {
        r.reason || ((r.reason = new fa(i, a, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Lf(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const Y5 = Lf;
function G5(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Q5(e) {
  return j.isObject(e) && e.isAxiosError === !0;
}
const Qc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Qc).forEach(([e, t]) => {
  Qc[t] = e;
});
const q5 = Qc;
function Cy(e) {
  const t = new cs(e),
    n = ay(cs.prototype.request, t);
  return (
    j.extend(n, cs.prototype, t, { allOwnKeys: !0 }),
    j.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Cy(Io(e, o));
    }),
    n
  );
}
const Je = Cy(jf);
Je.Axios = cs;
Je.CanceledError = fa;
Je.CancelToken = Y5;
Je.isCancel = Sy;
Je.VERSION = ky;
Je.toFormData = Ml;
Je.AxiosError = ge;
Je.Cancel = Je.CanceledError;
Je.all = function (t) {
  return Promise.all(t);
};
Je.spread = G5;
Je.isAxiosError = Q5;
Je.mergeConfig = Io;
Je.AxiosHeaders = jn;
Je.formToJSON = (e) => xy(j.isHTMLForm(e) ? new FormData(e) : e);
Je.HttpStatusCode = q5;
Je.default = Je;
const X5 = Je,
  Zt = X5.create({ baseURL: '/api/v1' }),
  J5 = async ({ request: e }) => {
    var n, r;
    console.log(e.url);
    const t = Object.fromEntries([...new URL(e.url).searchParams.entries()]);
    console.log(t);
    try {
      const { data: o } = await Zt.get('/recipes/', { params: t });
      return { data: o, searchParams: { ...t } };
    } catch (o) {
      return (
        le.error(
          (r =
            (n = o == null ? void 0 : o.response) == null ? void 0 : n.data) ==
            null
            ? void 0
            : r.message
        ),
        o
      );
    }
  },
  by = k.createContext(),
  Z5 = () => {
    const { data: e, searchParams: t } = dl();
    return v.jsxs(by.Provider, {
      value: { data: e, searchParams: t },
      children: [v.jsx(p_, {}), v.jsx(c_, {})],
    });
  },
  Df = () => k.useContext(by),
  e_ = gt.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .button-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-button {
    background: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-600);
    border-radius: var(--border-radius);
    cursor:pointer:
  }
  .active{
    background:var(--primary-600);
        color: var(--background-secondary-color);

  }
  .prev-button,.next-button{
    background: var(--background-secondary-color);
    border-color: transparent;
    border: 2px solid var(--primary-600);
    border-radius: var(--border-radius);
    font-weight: 700;
    width: 100px;
    height: 40px;
    color: var(--primary-700);
    text-transform:capitalize;
    letter-spacing:var(--letter-spacing);
    display:flex;
    align-items:center;
    justify-content:center;
    gap:0.5rem;
    cursor:pointer;
  }
  .prev-button:hover,.next-button:hover{
    background:var(--primary-600);
    color: var(--background-secondary-color);
    transition:var(--transition);
  }
  .dots{
    display:grid;
    place-items:center;
    cursor:text;
  }
`;
var Mf = {},
  t_ = $t;
Object.defineProperty(Mf, '__esModule', { value: !0 });
var _y = (Mf.default = void 0),
  n_ = t_(Nt()),
  r_ = v,
  o_ = (0, n_.default)(
    (0, r_.jsx)('path', { d: 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z' }),
    'NavigateBefore'
  );
_y = Mf.default = o_;
var If = {},
  i_ = $t;
Object.defineProperty(If, '__esModule', { value: !0 });
var Ry = (If.default = void 0),
  a_ = i_(Nt()),
  s_ = v,
  l_ = (0, a_.default)(
    (0, s_.jsx)('path', {
      d: 'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
    }),
    'NavigateNext'
  );
Ry = If.default = l_;
const u_ = () => {
    const {
      data: { pageCount: e, currentPage: t },
    } = Df();
    Array.from({ length: e }, (l, u) => u + 1);
    const { search: n, pathname: r } = Wr(),
      o = ul(),
      i = (l) => {
        const u = new URLSearchParams(n);
        u.set('page', l), o(`${r}?${u.toString()}`);
      },
      a = ({ pageNumber: l, activeClass: u }) =>
        v.jsx(
          'button',
          {
            className: `button page-button ${u && 'active'}`,
            onClick: () => i(l),
            children: l,
          },
          l
        ),
      s = () => {
        const l = [];
        return (
          l.push(a({ pageNumber: 1, activeClass: t === 1 })),
          t > 3 &&
            l.push(
              v.jsx(
                'span',
                { className: 'page-button dots', children: '...' },
                'ellipsis-1'
              )
            ),
          t !== 2 &&
            t !== 1 &&
            l.push(a({ pageNumber: t - 1, activeClass: !1 })),
          t !== 1 && t !== e && l.push(a({ pageNumber: t, activeClass: !0 })),
          t !== e &&
            t !== e - 1 &&
            l.push(a({ pageNumber: t + 1, activeClass: !1 })),
          t < e - 2 &&
            l.push(
              v.jsx(
                'span',
                { className: 'page-button dots', children: '...' },
                'ellipsis-2'
              )
            ),
          l.push(a({ pageNumber: e, activeClass: t === e })),
          l
        );
      };
    return v.jsxs(e_, {
      children: [
        v.jsxs('button', {
          className: 'button prev-button',
          onClick: () => {
            let l = t - 1;
            l < 1 && (l = 1), i(l);
          },
          children: [v.jsx(_y, {}), 'Prev'],
        }),
        v.jsx('div', { className: 'button-container', children: s() }),
        v.jsxs('button', {
          className: 'button next-button',
          onClick: () => {
            let l = t + 1;
            l > e && (l = e), i(l);
          },
          children: ['Next', v.jsx(Ry, {})],
        }),
      ],
    });
  },
  c_ = () => {
    const { data: e } = Df();
    console.log(e);
    const { recipes: t, recipeCount: n, pageCount: r } = e;
    return t.length > 0
      ? v.jsxs(im, {
          children: [
            v.jsxs('h5', {
              children: [n, ' recipe', t.length > 1 && 's', ' found'],
            }),
            v.jsx('div', {
              className: 'recipes',
              children: t.map((o) => v.jsx(T4, { ...o }, o._id)),
            }),
            r > 1 && v.jsx(u_, {}),
          ],
        })
      : v.jsx(im, { children: v.jsx('h2', { children: 'No recipes found' }) });
  },
  d_ = gt.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 2rem 1rem 3rem;
  .form-title {
    margin-bottom: 1rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
    column-gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
  .form-button {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }

  .form-input-third {
    width: 30%;
  }

  .clear-button {
    background: transparent;
    border-color: transparent;
    display: none;
    font-size: small;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    .form-button,
    .form-row-wide {
      grid-column: span 2;
    }
  }

  @media (min-width: 801px) {
    .form-center {
      grid-template-columns: 3fr 1fr 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1300px) {
    .form-center {
      grid-template-columns: 3fr 1fr 1fr 1fr;
    }
  }
`,
  zf = {
    BREAKFAST: 'breakfast',
    LUNCH: 'lunch',
    DINNER: 'dinner',
    SNACK: 'snack',
  },
  f_ = {
    NEWEST_FIRST: 'newest',
    OLDEST_FIRST: 'oldest',
    ASCENDING: 'a-z',
    DESCENDING: 'z-a',
  },
  p_ = () => {
    const { searchParams: e } = Df(),
      { search: t, type: n, sort: r } = e,
      o = e1(),
      i = (a) => {
        let s;
        return (l) => {
          const u = l.currentTarget.form;
          clearTimeout(s),
            (s = setTimeout(() => {
              a(u);
            }, 1e3));
        };
      };
    return v.jsx(d_, {
      children: v.jsxs(Vr, {
        className: 'form',
        children: [
          v.jsx('h5', {
            className: 'form-title',
            children: ' Search for recipes',
          }),
          v.jsxs('div', {
            className: 'form-center',
            children: [
              v.jsx(Ct, {
                type: 'search',
                name: 'search',
                className: 'form-row-wide',
                defaultValue: t || '',
                onChange: i((a) => {
                  o(a);
                }),
              }),
              v.jsx(Hs, {
                className: 'form-select-search',
                name: 'type',
                labelText: 'recipe type',
                list: ['all', ...Object.values(zf)],
                defaultValue: n || 'all',
                onChange: (a) => {
                  o(a.currentTarget.form);
                },
              }),
              v.jsx(Hs, {
                className: 'form-select-search',
                name: 'sort',
                list: [...Object.values(f_)],
                defaultValue: r || 'newest',
                onChange: (a) => {
                  o(a.currentTarget.form);
                },
              }),
              v.jsx(wr, {
                to: '/dashboard/recipes',
                className: 'button form-button delete-button',
                children: 'Tilbakestill',
              }),
            ],
          }),
        ],
      }),
    });
  },
  h_ = gt.article`
  padding: 2rem;
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  border-bottom: 5px solid var(--primary-600);
  /* color prop from Admin.jsx/StatItem.jsx 
  border-bottom: 5px solid ${(e) => e.color}; */

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: var(--primary-600);
    /* color: ${(e) => e.color}; */
    line-height: 2;
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: left;
    margin-top: 0.5rem;
    font-size: 1.25rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    /* background: ${(e) => e.bcg}; */
    background: var(--primary-600);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: var(--primary-50);
      /* color: ${(e) => e.color}; */
    }
  }
`,
  wm = ({ count: e, title: t, icon: n }) =>
    v.jsxs(h_, {
      children: [
        v.jsxs('header', {
          children: [
            v.jsx('span', { className: 'count', children: e }),
            v.jsx('span', { className: 'icon', children: n }),
          ],
        }),
        v.jsx('h5', { className: 'title', children: t }),
      ],
    }),
  pa = ({ formButton: e }) => {
    const n = mS().state === 'submitting';
    return v.jsx('button', {
      type: 'submit',
      className: `button button-block ${e && 'form-button'} `,
      disabled: n,
      children: n ? 'Submitting...' : 'Submit',
    });
  },
  m_ = async () => {
    try {
      const { data: e } = await Zt.get('/users/current-user');
      return e;
    } catch {
      return kr('/');
    }
  },
  Ty = k.createContext(),
  g_ = () => {
    const { user: e } = dl(),
      t = ul(),
      [n, r] = k.useState(!1),
      o = () => {
        r(!n);
      },
      i = async () => {
        t('/'),
          await Zt.get('/auth/logout'),
          le.success('Logged out successfully');
      };
    return v.jsx(Ty.Provider, {
      value: { user: e, showSidebar: n, toggleSidebar: o, logoutUser: i },
      children: v.jsx(G2, {
        children: v.jsxs('main', {
          className: 'dashboard',
          children: [
            v.jsx(t4, {}),
            v.jsx(p4, {}),
            v.jsxs('div', {
              children: [
                v.jsx(d4, {}),
                v.jsx('div', {
                  className: 'dashboard-page',
                  children: v.jsx(Xg, { context: { user: e } }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  ha = () => k.useContext(Ty),
  y_ = gt.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-600);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main {
    display: none;
  }
  .button {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 800px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .logo {
      display: block;
    }
  }
`,
  v_ = '/assets/landing-image-OU5UaCIC.svg',
  w_ = () =>
    v.jsxs(y_, {
      children: [
        v.jsx('nav', { children: v.jsx('h4', { children: 'Yes chef!' }) }),
        v.jsxs('div', {
          className: 'container page',
          children: [
            v.jsxs('div', {
              className: 'info',
              children: [
                v.jsxs('h1', {
                  children: [
                    'What should we eat for ',
                    v.jsx('span', { children: 'dinner' }),
                    '?',
                  ],
                }),
                v.jsx('p', {
                  children:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, et maiores quas perspiciatis voluptates aliquam. Quibusdam eveniet quam praesentium ipsum. Asperiores aspernatur laboriosam quae provident labore obcaecati corrupti ipsa commodi!',
                }),
                v.jsx(wr, {
                  to: '/register',
                  className: 'button register-link',
                  children: 'Register',
                }),
                v.jsx(wr, {
                  to: '/login',
                  className: 'button login-link',
                  children: 'Login / Demo User',
                }),
              ],
            }),
            v.jsx('img', {
              src: v_,
              alt: 'cooking together',
              className: 'img-main-img',
            }),
          ],
        }),
      ],
    }),
  x_ = () => v.jsx(v.Fragment, { children: v.jsx(Xg, {}) }),
  Py = gt.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .form {
    max-width: 400px;
    border-top: 6px solid var(--primary-500);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.4rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
  }
  .button {
    margin-top: 1rem;
    font-weight: 550;
  }
  .member-button {
    color: var(--primary-600);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.3rem;
  }
`,
  S_ = async ({ request: e }) => {
    var r, o;
    const t = await e.formData(),
      n = Object.fromEntries(t);
    try {
      return (
        await Zt.post('/auth/register', n),
        le.success('Registered successfully'),
        kr('/login')
      );
    } catch (i) {
      return (
        le.error(
          (o =
            (r = i == null ? void 0 : i.response) == null ? void 0 : r.data) ==
            null
            ? void 0
            : o.msg
        ),
        i
      );
    }
  },
  E_ = () =>
    v.jsx(Py, {
      children: v.jsxs(Vr, {
        method: 'post',
        className: 'form',
        children: [
          v.jsx('h4', { children: 'Register' }),
          v.jsx(Ct, {
            type: 'text',
            name: 'name',
            labelText: 'first name',
            className: 'form-row',
          }),
          v.jsx(Ct, {
            type: 'text',
            name: 'lastName',
            labelText: 'last name',
            className: 'form-row',
          }),
          v.jsx(Ct, { type: 'email', name: 'email', className: 'form-row' }),
          v.jsx(Ct, {
            type: 'password',
            name: 'password',
            className: 'form-row',
          }),
          v.jsx(pa, {}),
          v.jsxs('p', {
            children: [
              'Already have an account?',
              v.jsx(wr, {
                to: '/login',
                className: 'member-button',
                children: 'Login',
              }),
            ],
          }),
        ],
      }),
    }),
  k_ = async ({ request: e }) => {
    var r, o;
    const t = await e.formData(),
      n = Object.fromEntries(t);
    try {
      return (
        await Zt.post('/auth/login', n),
        le.success('Logged in successfully'),
        kr('/dashboard/recipes')
      );
    } catch (i) {
      return (
        le.error(
          (o =
            (r = i == null ? void 0 : i.response) == null ? void 0 : r.data) ==
            null
            ? void 0
            : o.msg
        ),
        i
      );
    }
  },
  C_ = () => {
    const e = ul(),
      t = async () => {
        var r, o;
        const n = { email: 'test@test.com', password: 'SecretTestPassword123' };
        try {
          await Zt.post('/auth/login', n),
            le.success('Test the appllication as a guest user'),
            e('/dashboard/recipes');
        } catch (i) {
          le.error(
            (o =
              (r = i == null ? void 0 : i.response) == null
                ? void 0
                : r.data) == null
              ? void 0
              : o.msg
          );
        }
      };
    return v.jsx(Py, {
      children: v.jsxs(Vr, {
        className: 'form',
        method: 'post',
        children: [
          v.jsx('h4', { children: 'login' }),
          v.jsx(Ct, { type: 'email', name: 'email', className: 'form-row' }),
          v.jsx(Ct, {
            type: 'password',
            name: 'password',
            className: 'form-row',
          }),
          v.jsx(pa, {}),
          v.jsxs('p', {
            children: [
              "Don't have an account?",
              v.jsx(wr, {
                to: '/register',
                className: 'member-button',
                children: 'Register here',
              }),
              v.jsx('br', {}),
              "Don't want to?",
              v.jsx('button', {
                type: 'button',
                className: 'button button-block',
                onClick: t,
                children: 'Use as guest',
              }),
            ],
          }),
        ],
      }),
    });
  },
  xm = gt.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--primary-700);
  }
`,
  b_ = '/assets/404-not-found-OXkToZem.svg',
  __ = () =>
    qg().status === 404
      ? v.jsx(xm, {
          children: v.jsxs('div', {
            children: [
              v.jsx('img', { src: b_, alt: 'not found' }),
              v.jsx('h3', { children: '404 not found' }),
              v.jsx('p', {
                children: "We can't seem to find the page you're looking for",
              }),
              v.jsx(wr, { to: '/dashboard/recipes', children: 'Back home' }),
            ],
          }),
        })
      : v.jsx(xm, {
          children: v.jsx('div', {
            children: v.jsx('h3', { children: 'Something went wrong' }),
          }),
        }),
  Ff = gt.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 2rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-button {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }
  .form-input-group {
    display: flex;
    justify-content: space-between;
  }

  .form-button-add {
    width: 100%;
  }

  .form-input-third {
    width: 30%;
  }

  .added-steps {
    padding: 1rem;
    line-height: 2;
    li {
      padding: 0.5rem;
    }
  }

  .added-ingredients {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    spacing: 1rem;
    direction: row;
  }

  .added-ingredient {
    margin: 0.5rem;
    button {
      background-color: var(--grey-700);
      padding: 0.5rem;
    }
    button:hover {
      background-color: var(--grey-900);
    }
  }

  .clear-button {
    background: transparent;
    border-color: transparent;
    display: none;
    font-size: small;
    cursor: pointer;
  }

  .added-step:hover {
    .clear-button {
      display: inline;
    }
  }

  @media (min-width: 800px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
      .form-button,
      .form-row-double {
        grid-column: span 2; /* Make the textarea and button span two columns */
      }
    }
  }
  @media (min-width: 1300px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
var Uf = {},
  R_ = $t;
Object.defineProperty(Uf, '__esModule', { value: !0 });
var Bf = (Uf.default = void 0),
  T_ = R_(Nt()),
  P_ = v,
  $_ = (0, T_.default)(
    (0, P_.jsx)('path', {
      d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
    'Clear'
  );
Bf = Uf.default = $_;
const $y = async ({ request: e, ingredients: t, steps: n }) => {
    var i, a;
    const r = new FormData(e),
      o = Object.fromEntries(r);
    (o.ingredients = t), (o.steps = n);
    try {
      return (
        await Zt.post('/recipes', o),
        le.success('Recipe added successfully'),
        kr('/dashboard/recipes')
      );
    } catch (s) {
      return (
        le.error(
          (a =
            (i = s == null ? void 0 : s.response) == null ? void 0 : i.data) ==
            null
            ? void 0
            : a.msg
        ),
        s
      );
    }
  },
  N_ = () => {
    qd();
    const [e, t] = k.useState([]),
      [n, r] = k.useState([]),
      o = (s) => {
        if ((s.preventDefault(), e.length === 0 || n.length === 0)) {
          le.error('Please add at least one ingredient and one step.');
          return;
        }
        $y({ request: s.target, ingredients: e, steps: n });
      },
      i = (s) => {
        const l = e.filter((u) => u !== s);
        t(l);
      },
      a = (s) => {
        const l = n.filter((u, c) => c !== s);
        r(l);
      };
    return v.jsxs(Ff, {
      children: [
        v.jsxs(Vr, {
          method: 'post',
          className: 'form',
          encType: 'multipart/form-data',
          onSubmit: o,
          children: [
            v.jsx('h4', { className: 'form-title', children: 'Add Recipe' }),
            v.jsxs('div', {
              className: 'form-center',
              children: [
                v.jsx(Ct, {
                  type: 'text',
                  name: 'title',
                  className: 'form-row',
                }),
                v.jsx(Hs, {
                  labelText: 'Recipe type',
                  name: 'type',
                  defaultValue: 'Select recipe type',
                  list: Object.values(zf),
                }),
                v.jsx(Ct, {
                  name: 'description',
                  maxLength: '100',
                  className: 'form-row',
                }),
                v.jsxs('div', {
                  className: 'form-row',
                  children: [
                    v.jsx('label', {
                      htmlFor: 'image',
                      className: 'form-label',
                      children: 'Upload an image (max 0.5 MB)',
                    }),
                    v.jsx('input', {
                      type: 'file',
                      name: 'image',
                      id: 'image',
                      className: 'form-input',
                      accept: 'image/*',
                    }),
                  ],
                }),
                v.jsx(q1, { ingredients: e, setIngredients: t }),
                v.jsx(X1, { steps: n, setSteps: r, labelText: 'Steps' }),
                v.jsx(pa, { formButton: !0 }),
              ],
            }),
          ],
        }),
        v.jsxs('div', {
          className: 'user-added',
          children: [
            v.jsx('div', {
              className: 'added-ingredients',
              children: e.map((s, l) =>
                v.jsx(
                  'div',
                  {
                    className: 'added-ingredient',
                    children: v.jsxs('button', {
                      className: 'button button-block',
                      onClick: () => i(s),
                      children: [s.name, ' - ', s.amount, ' ', s.unit],
                    }),
                  },
                  l
                )
              ),
            }),
            v.jsx('ol', {
              className: 'added-steps',
              children: n.map((s, l) =>
                v.jsxs(
                  'li',
                  {
                    className: 'added-step',
                    children: [
                      s,
                      v.jsx('button', {
                        type: 'button',
                        className: 'clear-button',
                        onClick: () => a(l),
                        children: v.jsx(Bf, { fontSize: 'small' }),
                      }),
                    ],
                  },
                  l
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  O_ = async ({ request: e }) => {
    var r, o;
    const t = await e.formData(),
      n = t.get('avatar');
    if (n && n.size > 5e5)
      return le.error('File size must be less than 0.5 MB'), null;
    try {
      await Zt.patch('/users/update-user', t),
        console.log(t),
        le.success('Profile updated successfully');
    } catch (i) {
      le.error(
        (o = (r = i == null ? void 0 : i.response) == null ? void 0 : r.data) ==
          null
          ? void 0
          : o.msg
      );
    }
    return null;
  },
  j_ = () => {
    const { user: e } = qd(),
      { name: t, lastName: n, email: r } = e;
    return v.jsx(Ff, {
      children: v.jsxs(Vr, {
        method: 'post',
        className: 'form',
        encType: 'multipart/form-data',
        children: [
          v.jsx('h4', { className: 'form-title', children: 'Profile' }),
          v.jsxs('div', {
            className: 'form-center',
            children: [
              v.jsxs('div', {
                className: 'form-row',
                children: [
                  v.jsx('label', {
                    htmlFor: 'avatar',
                    className: 'form-label',
                    children: 'Upload an image (max 0.5 MB)',
                  }),
                  v.jsx('input', {
                    type: 'file',
                    id: 'avatar',
                    name: 'avatar',
                    className: 'form-input',
                    accept: 'image/*',
                  }),
                ],
              }),
              v.jsx(Ct, { type: 'text', name: 'name', defaultValue: t }),
              v.jsx(Ct, {
                type: 'text',
                name: 'lastName',
                labelText: 'Last Name',
                defaultValue: n,
              }),
              v.jsx(Ct, { type: 'email', name: 'email', defaultValue: r }),
              v.jsx(pa, { formButton: !0 }),
            ],
          }),
        ],
      }),
    });
  },
  A_ = gt.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
var Hf = {},
  L_ = $t;
Object.defineProperty(Hf, '__esModule', { value: !0 });
var Ny = (Hf.default = void 0),
  D_ = L_(Nt()),
  Du = v,
  M_ = (0, D_.default)(
    [
      (0, Du.jsx)(
        'path',
        {
          fillRule: 'evenodd',
          d: 'M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z',
        },
        '0'
      ),
      (0, Du.jsx)(
        'circle',
        { cx: '9', cy: '8', r: '4', fillRule: 'evenodd' },
        '1'
      ),
      (0, Du.jsx)(
        'path',
        {
          fillRule: 'evenodd',
          d: 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z',
        },
        '2'
      ),
    ],
    'PeopleAlt'
  );
Ny = Hf.default = M_;
const I_ = async () => {
    try {
      return (await Zt.get('/users/admin/statistics')).data;
    } catch {
      return (
        le.error('You are not authorized to view this page'),
        kr('/dashboard/recipes')
      );
    }
  },
  z_ = () => {
    const { users: e, recipes: t } = dl();
    return v.jsxs(A_, {
      children: [
        v.jsx(wm, { title: 'current users', count: e, icon: v.jsx(Ny, {}) }),
        v.jsx(wm, { title: 'total recipes', count: t, icon: v.jsx(ca, {}) }),
      ],
    });
  },
  F_ = async ({ params: e }) => {
    var t, n;
    try {
      const { data: r } = await Zt.get(`/recipes/${e.id}`);
      return r;
    } catch (r) {
      return (
        le.error(
          (n =
            (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
            null
            ? void 0
            : n.msg
        ),
        kr('/dashboard/recipes')
      );
    }
  },
  Oy = async ({ request: e, params: t, ingredients: n, steps: r }) => {
    var a, s;
    const o = new FormData(e);
    o.append('ingredients', JSON.stringify(n)), o.append('steps', r);
    const i = o.get('image');
    if (i && i.size > 5e5)
      return le.error('File size must be less than 0.5 MB'), null;
    try {
      return (
        await Zt.patch(`/recipes/${t.id}`, o, {
          headers: { 'Content-Type': 'multipart/form-data' },
        }),
        le.success('Recipe updated successfully'),
        kr('/dashboard/recipes')
      );
    } catch (l) {
      return (
        le.error(
          (s =
            (a = l == null ? void 0 : l.response) == null ? void 0 : a.data) ==
            null
            ? void 0
            : s.msg
        ),
        l
      );
    }
  },
  U_ = () => {
    const { recipe: e } = dl();
    qd();
    const t = iS(),
      [n, r] = k.useState(e.ingredients || []),
      [o, i] = k.useState(e.steps || []),
      a = (u) => {
        const c = n.filter((d) => d !== u);
        r(c);
      },
      s = (u) => {
        const c = o.filter((d, p) => p !== u);
        i(c);
      },
      l = (u) => {
        if ((u.preventDefault(), n.length === 0 || o.length === 0)) {
          le.error('Please add at least one ingredient and one step.');
          return;
        }
        Oy({ request: u.target, params: t, ingredients: n, steps: o });
      };
    return v.jsxs(Ff, {
      children: [
        v.jsxs(Vr, {
          method: 'post',
          className: 'form',
          onSubmit: l,
          children: [
            v.jsx('h4', { className: 'form-title', children: 'Edit Recipe' }),
            v.jsxs('div', {
              className: 'form-center',
              children: [
                v.jsx(Ct, {
                  type: 'text',
                  name: 'title',
                  label: 'Title',
                  className: 'form-row',
                  defaultValue: e.title,
                }),
                v.jsx(Hs, {
                  labelText: 'Recipe type',
                  name: 'type',
                  defaultValue: e.type,
                  list: Object.values(zf),
                }),
                v.jsx(Ct, {
                  name: 'description',
                  label: 'Description',
                  className: 'form-row',
                  maxLength: '100',
                  defaultValue: e.description,
                }),
                v.jsxs('div', {
                  className: 'form-row',
                  children: [
                    v.jsx('label', {
                      htmlFor: 'image',
                      className: 'form-label',
                      children: 'Upload an image (max 0.5 MB)',
                    }),
                    v.jsx('input', {
                      type: 'file',
                      name: 'image',
                      id: 'image',
                      className: 'form-input',
                      accept: 'image/*',
                    }),
                  ],
                }),
                v.jsx(q1, { ingredients: n, setIngredients: r }),
                v.jsx(X1, { steps: o, setSteps: i, labelText: 'Steps' }),
                v.jsx(pa, { formButton: !0 }),
              ],
            }),
          ],
        }),
        v.jsxs('div', {
          className: 'user-added',
          children: [
            v.jsx('div', {
              className: 'added-ingredients',
              children: n.map((u, c) =>
                v.jsx(
                  'div',
                  {
                    className: 'added-ingredient',
                    children: v.jsxs('button', {
                      className: 'button button-block',
                      onClick: () => a(u),
                      children: [u.name, ' - ', u.amount, ' ', u.unit],
                    }),
                  },
                  c
                )
              ),
            }),
            v.jsx('ol', {
              className: 'added-steps',
              children: o.map((u, c) =>
                v.jsxs(
                  'li',
                  {
                    className: 'added-step',
                    children: [
                      u,
                      v.jsx('button', {
                        type: 'button',
                        className: 'clear-button',
                        onClick: () => s(c),
                        children: v.jsx(Bf, { fontSize: 'small' }),
                      }),
                    ],
                  },
                  c
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  B_ = async ({ params: e }) => {
    var t, n;
    try {
      await Zt.delete(`/recipes/${e.id}`),
        le.success('Recipe successfully deleted');
    } catch (r) {
      le.error(
        (n = (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
          null
          ? void 0
          : n.msg
      );
    }
    return kr('/dashboard/recipes');
  },
  H_ = NS([
    {
      path: '/',
      element: v.jsx(x_, {}),
      errorElement: v.jsx(__, {}),
      children: [
        { index: !0, element: v.jsx(w_, {}) },
        { path: 'register', element: v.jsx(E_, {}), action: S_ },
        { path: 'login', element: v.jsx(C_, {}), action: k_ },
        {
          path: 'dashboard',
          element: v.jsx(g_, {}),
          loader: m_,
          children: [
            { index: !0, path: 'recipes', element: v.jsx(Z5, {}), loader: J5 },
            { path: 'add-recipe', element: v.jsx(N_, {}), action: $y },
            { path: 'profile', element: v.jsx(j_, {}), action: O_ },
            { path: 'admin', element: v.jsx(z_, {}), loader: I_ },
            {
              path: 'edit-recipe/:id',
              element: v.jsx(U_, {}),
              action: Oy,
              loader: F_,
            },
            { path: 'delete-recipe/:id', action: B_ },
          ],
        },
      ],
    },
  ]),
  W_ = () => v.jsx(zS, { router: H_ });
Mu.createRoot(document.getElementById('root')).render(
  v.jsxs(Ee.StrictMode, {
    children: [v.jsx(W_, {}), v.jsx(Vc, { position: 'top-center' })],
  })
);
