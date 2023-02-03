var In = (e, t, n) => new Promise((o, s) => {
  var r = (u) => {
    try {
      c(n.next(u));
    } catch (f) {
      s(f);
    }
  }, i = (u) => {
    try {
      c(n.throw(u));
    } catch (f) {
      s(f);
    }
  }, c = (u) => u.done ? o(u.value) : Promise.resolve(u.value).then(r, i);
  c((n = n.apply(e, t)).next());
});
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
    o(s);
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "childList")
        for (const i of r.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && o(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const r = {};
    return s.integrity && (r.integrity = s.integrity), s.referrerpolicy && (r.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? r.credentials = "include" : s.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function o(s) {
    if (s.ep)
      return;
    s.ep = !0;
    const r = n(s);
    fetch(s.href, r);
  }
})();
window.process = {
  env: {
    NODE_ENV: "production"
  }
};
function jt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function $s(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = ve(o) ? pa(o) : $s(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else {
    if (ve(e))
      return e;
    if (ge(e))
      return e;
  }
}
const ua = /;(?![^(]*\))/g, fa = /:([^]+)/, da = new RegExp("\\/\\*.*?\\*\\/", "gs");
function pa(e) {
  const t = {};
  return e.replace(da, "").split(ua).forEach((n) => {
    if (n) {
      const o = n.split(fa);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Xe(e) {
  let t = "";
  if (ve(e))
    t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const o = Xe(e[n]);
      o && (t += o + " ");
    }
  else if (ge(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ma = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", _a = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ga = /* @__PURE__ */ jt(ma), ha = /* @__PURE__ */ jt(_a), Ea = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ba = /* @__PURE__ */ jt(Ea);
function Oi(e) {
  return !!e || e === "";
}
const Z = (e) => ve(e) ? e : e == null ? "" : Q(e) || ge(e) && (e.toString === Ci || !te(e.toString)) ? JSON.stringify(e, Ti, 2) : String(e), Ti = (e, t) => t && t.__v_isRef ? Ti(e, t.value) : Jt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, s]) => (n[`${o} =>`] = s, n), {})
} : ki(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ge(t) && !Q(t) && !Di(t) ? String(t) : t, Ee = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Nn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ae = () => {
}, Li = () => !1, Na = /^on[^a-z]/, Qn = (e) => Na.test(e), Eo = (e) => e.startsWith("onUpdate:"), Oe = Object.assign, Us = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, va = Object.prototype.hasOwnProperty, ae = (e, t) => va.call(e, t), Q = Array.isArray, Jt = (e) => ko(e) === "[object Map]", ki = (e) => ko(e) === "[object Set]", te = (e) => typeof e == "function", ve = (e) => typeof e == "string", js = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", Ws = (e) => ge(e) && te(e.then) && te(e.catch), Ci = Object.prototype.toString, ko = (e) => Ci.call(e), Hs = (e) => ko(e).slice(8, -1), Di = (e) => ko(e) === "[object Object]", Bs = (e) => ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, uo = /* @__PURE__ */ jt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ya = /* @__PURE__ */ jt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), Co = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Oa = /-(\w)/g, On = Co((e) => e.replace(Oa, (t, n) => n ? n.toUpperCase() : "")), Ta = /\B([A-Z])/g, Ft = Co((e) => e.replace(Ta, "-$1").toLowerCase()), Do = Co((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gt = Co((e) => e ? `on${Do(e)}` : ""), jn = (e, t) => !Object.is(e, t), Sn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, bo = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, La = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let _r;
const Ii = () => _r || (_r = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function rs(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ot;
class Si {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ot, !t && ot && (this.index = (ot.scopes || (ot.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ot;
      try {
        return ot = this, t();
      } finally {
        ot = n;
      }
    } else
      process.env.NODE_ENV !== "production" && rs("cannot run an inactive effect scope.");
  }
  on() {
    ot = this;
  }
  off() {
    ot = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ka(e) {
  return new Si(e);
}
function Ca(e, t = ot) {
  t && t.active && t.effects.push(e);
}
function Da() {
  return ot;
}
const Wn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, wi = (e) => (e.w & xt) > 0, Ai = (e) => (e.n & xt) > 0, Ia = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= xt;
}, Sa = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      wi(s) && !Ai(s) ? s.delete(e) : t[n++] = s, s.w &= ~xt, s.n &= ~xt;
    }
    t.length = n;
  }
}, is = /* @__PURE__ */ new WeakMap();
let Pn = 0, xt = 1;
const ls = 30;
let We;
const Qt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), as = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Ks {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ca(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = We, n = Mt;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = We, We = this, Mt = !0, xt = 1 << ++Pn, Pn <= ls ? Ia(this) : gr(this), this.fn();
    } finally {
      Pn <= ls && Sa(this), xt = 1 << --Pn, We = this.parent, Mt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    We === this ? this.deferStop = !0 : this.active && (gr(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function gr(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Mt = !0;
const Pi = [];
function un() {
  Pi.push(Mt), Mt = !1;
}
function fn() {
  const e = Pi.pop();
  Mt = e === void 0 ? !0 : e;
}
function He(e, t, n) {
  if (Mt && We) {
    let o = is.get(e);
    o || is.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Wn());
    const r = process.env.NODE_ENV !== "production" ? { effect: We, target: e, type: t, key: n } : void 0;
    cs(s, r);
  }
}
function cs(e, t) {
  let n = !1;
  Pn <= ls ? Ai(e) || (e.n |= xt, n = !wi(e)) : n = !e.has(We), n && (e.add(We), We.deps.push(e), process.env.NODE_ENV !== "production" && We.onTrack && We.onTrack(Object.assign({ effect: We }, t)));
}
function It(e, t, n, o, s, r) {
  const i = is.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && Q(e)) {
    const f = Number(o);
    i.forEach((m, p) => {
      (p === "length" || p >= f) && c.push(m);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        Q(e) ? Bs(n) && c.push(i.get("length")) : (c.push(i.get(Qt)), Jt(e) && c.push(i.get(as)));
        break;
      case "delete":
        Q(e) || (c.push(i.get(Qt)), Jt(e) && c.push(i.get(as)));
        break;
      case "set":
        Jt(e) && c.push(i.get(Qt));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: r } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? gn(c[0], u) : gn(c[0]));
  else {
    const f = [];
    for (const m of c)
      m && f.push(...m);
    process.env.NODE_ENV !== "production" ? gn(Wn(f), u) : gn(Wn(f));
  }
}
function gn(e, t) {
  const n = Q(e) ? e : [...e];
  for (const o of n)
    o.computed && hr(o, t);
  for (const o of n)
    o.computed || hr(o, t);
}
function hr(e, t) {
  (e !== We || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Oe({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const wa = /* @__PURE__ */ jt("__proto__,__v_isRef,__isVue"), Vi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(js)
), Aa = /* @__PURE__ */ Io(), Pa = /* @__PURE__ */ Io(!1, !0), Va = /* @__PURE__ */ Io(!0), Ra = /* @__PURE__ */ Io(!0, !0), Er = /* @__PURE__ */ Ma();
function Ma() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = oe(this);
      for (let r = 0, i = this.length; r < i; r++)
        He(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(oe)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      un();
      const o = oe(this)[t].apply(this, n);
      return fn(), o;
    };
  }), e;
}
function Fa(e) {
  const t = oe(this);
  return He(t, "has", e), t.hasOwnProperty(e);
}
function Io(e = !1, t = !1) {
  return function(o, s, r) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && r === (e ? t ? Wi : ji : t ? Ui : $i).get(o))
      return o;
    const i = Q(o);
    if (!e) {
      if (i && ae(Er, s))
        return Reflect.get(Er, s, r);
      if (s === "hasOwnProperty")
        return Fa;
    }
    const c = Reflect.get(o, s, r);
    return (js(s) ? Vi.has(s) : wa(s)) || (e || He(o, "get", s), t) ? c : Te(c) ? i && Bs(s) ? c : c.value : ge(c) ? e ? Hi(c) : Ao(c) : c;
  };
}
const xa = /* @__PURE__ */ Ri(), $a = /* @__PURE__ */ Ri(!0);
function Ri(e = !1) {
  return function(n, o, s, r) {
    let i = n[o];
    if ($t(i) && Te(i) && !Te(s))
      return !1;
    if (!e && (!No(s) && !$t(s) && (i = oe(i), s = oe(s)), !Q(n) && Te(i) && !Te(s)))
      return i.value = s, !0;
    const c = Q(n) && Bs(o) ? Number(o) < n.length : ae(n, o), u = Reflect.set(n, o, s, r);
    return n === oe(r) && (c ? jn(s, i) && It(n, "set", o, s, i) : It(n, "add", o, s)), u;
  };
}
function Ua(e, t) {
  const n = ae(e, t), o = e[t], s = Reflect.deleteProperty(e, t);
  return s && n && It(e, "delete", t, void 0, o), s;
}
function ja(e, t) {
  const n = Reflect.has(e, t);
  return (!js(t) || !Vi.has(t)) && He(e, "has", t), n;
}
function Wa(e) {
  return He(e, "iterate", Q(e) ? "length" : Qt), Reflect.ownKeys(e);
}
const Mi = {
  get: Aa,
  set: xa,
  deleteProperty: Ua,
  has: ja,
  ownKeys: Wa
}, Fi = {
  get: Va,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && rs(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && rs(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, Ha = /* @__PURE__ */ Oe({}, Mi, {
  get: Pa,
  set: $a
}), Ba = /* @__PURE__ */ Oe({}, Fi, {
  get: Ra
}), Ys = (e) => e, So = (e) => Reflect.getPrototypeOf(e);
function oo(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = oe(e), r = oe(t);
  n || (t !== r && He(s, "get", t), He(s, "get", r));
  const { has: i } = So(s), c = o ? Ys : n ? Gs : Hn;
  if (i.call(s, t))
    return c(e.get(t));
  if (i.call(s, r))
    return c(e.get(r));
  e !== s && e.get(t);
}
function so(e, t = !1) {
  const n = this.__v_raw, o = oe(n), s = oe(e);
  return t || (e !== s && He(o, "has", e), He(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function ro(e, t = !1) {
  return e = e.__v_raw, !t && He(oe(e), "iterate", Qt), Reflect.get(e, "size", e);
}
function br(e) {
  e = oe(e);
  const t = oe(this);
  return So(t).has.call(t, e) || (t.add(e), It(t, "add", e, e)), this;
}
function Nr(e, t) {
  t = oe(t);
  const n = oe(this), { has: o, get: s } = So(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && xi(n, o, e) : (e = oe(e), r = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), r ? jn(t, i) && It(n, "set", e, t, i) : It(n, "add", e, t), this;
}
function vr(e) {
  const t = oe(this), { has: n, get: o } = So(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && xi(t, n, e) : (e = oe(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && It(t, "delete", e, void 0, r), i;
}
function yr() {
  const e = oe(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Jt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && It(e, "clear", void 0, void 0, n), o;
}
function io(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, c = oe(i), u = t ? Ys : e ? Gs : Hn;
    return !e && He(c, "iterate", Qt), i.forEach((f, m) => o.call(s, u(f), u(m), r));
  };
}
function lo(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = oe(s), i = Jt(r), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, f = s[e](...o), m = n ? Ys : t ? Gs : Hn;
    return !t && He(r, "iterate", u ? as : Qt), {
      next() {
        const { value: p, done: _ } = f.next();
        return _ ? { value: p, done: _ } : {
          value: c ? [m(p[0]), m(p[1])] : m(p),
          done: _
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function wt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${Do(e)} operation ${n}failed: target is readonly.`, oe(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Ka() {
  const e = {
    get(r) {
      return oo(this, r);
    },
    get size() {
      return ro(this);
    },
    has: so,
    add: br,
    set: Nr,
    delete: vr,
    clear: yr,
    forEach: io(!1, !1)
  }, t = {
    get(r) {
      return oo(this, r, !1, !0);
    },
    get size() {
      return ro(this);
    },
    has: so,
    add: br,
    set: Nr,
    delete: vr,
    clear: yr,
    forEach: io(!1, !0)
  }, n = {
    get(r) {
      return oo(this, r, !0);
    },
    get size() {
      return ro(this, !0);
    },
    has(r) {
      return so.call(this, r, !0);
    },
    add: wt("add"),
    set: wt("set"),
    delete: wt("delete"),
    clear: wt("clear"),
    forEach: io(!0, !1)
  }, o = {
    get(r) {
      return oo(this, r, !0, !0);
    },
    get size() {
      return ro(this, !0);
    },
    has(r) {
      return so.call(this, r, !0);
    },
    add: wt("add"),
    set: wt("set"),
    delete: wt("delete"),
    clear: wt("clear"),
    forEach: io(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = lo(r, !1, !1), n[r] = lo(r, !0, !1), t[r] = lo(r, !1, !0), o[r] = lo(r, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [Ya, Ga, za, Xa] = /* @__PURE__ */ Ka();
function wo(e, t) {
  const n = t ? e ? Xa : za : e ? Ga : Ya;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(ae(n, s) && s in o ? n : o, s, r);
}
const qa = {
  get: /* @__PURE__ */ wo(!1, !1)
}, Ja = {
  get: /* @__PURE__ */ wo(!1, !0)
}, Qa = {
  get: /* @__PURE__ */ wo(!0, !1)
}, Za = {
  get: /* @__PURE__ */ wo(!0, !0)
};
function xi(e, t, n) {
  const o = oe(n);
  if (o !== n && t.call(e, o)) {
    const s = Hs(e);
    console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const $i = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap(), ji = /* @__PURE__ */ new WeakMap(), Wi = /* @__PURE__ */ new WeakMap();
function ec(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function tc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ec(Hs(e));
}
function Ao(e) {
  return $t(e) ? e : Po(e, !1, Mi, qa, $i);
}
function nc(e) {
  return Po(e, !1, Ha, Ja, Ui);
}
function Hi(e) {
  return Po(e, !0, Fi, Qa, ji);
}
function hn(e) {
  return Po(e, !0, Ba, Za, Wi);
}
function Po(e, t, n, o, s) {
  if (!ge(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = tc(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? o : n);
  return s.set(e, c), c;
}
function Zt(e) {
  return $t(e) ? Zt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function $t(e) {
  return !!(e && e.__v_isReadonly);
}
function No(e) {
  return !!(e && e.__v_isShallow);
}
function us(e) {
  return Zt(e) || $t(e);
}
function oe(e) {
  const t = e && e.__v_raw;
  return t ? oe(t) : e;
}
function Bi(e) {
  return bo(e, "__v_skip", !0), e;
}
const Hn = (e) => ge(e) ? Ao(e) : e, Gs = (e) => ge(e) ? Hi(e) : e;
function Ki(e) {
  Mt && We && (e = oe(e), process.env.NODE_ENV !== "production" ? cs(e.dep || (e.dep = Wn()), {
    target: e,
    type: "get",
    key: "value"
  }) : cs(e.dep || (e.dep = Wn())));
}
function Yi(e, t) {
  e = oe(e);
  const n = e.dep;
  n && (process.env.NODE_ENV !== "production" ? gn(n, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : gn(n));
}
function Te(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ie(e) {
  return Gi(e, !1);
}
function oc(e) {
  return Gi(e, !0);
}
function Gi(e, t) {
  return Te(e) ? e : new sc(e, t);
}
class sc {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : oe(t), this._value = n ? t : Hn(t);
  }
  get value() {
    return Ki(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || No(t) || $t(t);
    t = n ? t : oe(t), jn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Hn(t), Yi(this, t));
  }
}
function w(e) {
  return Te(e) ? e.value : e;
}
const rc = {
  get: (e, t, n) => w(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return Te(s) && !Te(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function zi(e) {
  return Zt(e) ? e : new Proxy(e, rc);
}
var Xi;
class ic {
  constructor(t, n, o, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Xi] = !1, this._dirty = !0, this.effect = new Ks(t, () => {
      this._dirty || (this._dirty = !0, Yi(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = o;
  }
  get value() {
    const t = oe(this);
    return Ki(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Xi = "__v_isReadonly";
function lc(e, t, n = !1) {
  let o, s;
  const r = te(e);
  r ? (o = e, s = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Ae) : (o = e.get, s = e.set);
  const i = new ic(o, s, r || !s, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const en = [];
function fo(e) {
  en.push(e);
}
function po() {
  en.pop();
}
function R(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  un();
  const n = en.length ? en[en.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = ac();
  if (o)
    Dt(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      s.map(({ vnode: r }) => `at <${Wo(n, r.type)}>`).join(`
`),
      s
    ]);
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...cc(s)), console.warn(...r);
  }
  fn();
}
function ac() {
  let e = en[en.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function cc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...uc(n));
  }), t;
}
function uc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Wo(e.component, e.type, o)}`, r = ">" + n;
  return e.props ? [s, ...fc(e.props), r] : [s + r];
}
function fc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...qi(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function qi(e, t, n) {
  return ve(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Te(t) ? (t = qi(e, oe(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : te(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = oe(t), n ? t : [`${e}=`, t]);
}
const zs = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Dt(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (r) {
    Vo(r, t, n);
  }
  return s;
}
function tt(e, t, n, o) {
  if (te(e)) {
    const r = Dt(e, t, n, o);
    return r && Ws(r) && r.catch((i) => {
      Vo(i, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(tt(e[r], t, n, o));
  return s;
}
function Vo(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? zs[n] : n;
    for (; r; ) {
      const f = r.ec;
      if (f) {
        for (let m = 0; m < f.length; m++)
          if (f[m](e, i, c) === !1)
            return;
      }
      r = r.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Dt(u, null, 10, [e, i, c]);
      return;
    }
  }
  dc(e, n, s, o);
}
function dc(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = zs[t];
    if (n && fo(n), R(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && po(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Bn = !1, fs = !1;
const Re = [];
let gt = 0;
const vn = [];
let mt = null, Pt = 0;
const Ji = /* @__PURE__ */ Promise.resolve();
let Xs = null;
const pc = 100;
function Qi(e) {
  const t = Xs || Ji;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function mc(e) {
  let t = gt + 1, n = Re.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Kn(Re[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Ro(e) {
  (!Re.length || !Re.includes(e, Bn && e.allowRecurse ? gt + 1 : gt)) && (e.id == null ? Re.push(e) : Re.splice(mc(e.id), 0, e), Zi());
}
function Zi() {
  !Bn && !fs && (fs = !0, Xs = Ji.then(nl));
}
function _c(e) {
  const t = Re.indexOf(e);
  t > gt && Re.splice(t, 1);
}
function el(e) {
  Q(e) ? vn.push(...e) : (!mt || !mt.includes(e, e.allowRecurse ? Pt + 1 : Pt)) && vn.push(e), Zi();
}
function Or(e, t = Bn ? gt + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < Re.length; t++) {
    const n = Re[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && qs(e, n))
        continue;
      Re.splice(t, 1), t--, n();
    }
  }
}
function tl(e) {
  if (vn.length) {
    const t = [...new Set(vn)];
    if (vn.length = 0, mt) {
      mt.push(...t);
      return;
    }
    for (mt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), mt.sort((n, o) => Kn(n) - Kn(o)), Pt = 0; Pt < mt.length; Pt++)
      process.env.NODE_ENV !== "production" && qs(e, mt[Pt]) || mt[Pt]();
    mt = null, Pt = 0;
  }
}
const Kn = (e) => e.id == null ? 1 / 0 : e.id, gc = (e, t) => {
  const n = Kn(e) - Kn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function nl(e) {
  fs = !1, Bn = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Re.sort(gc);
  const t = process.env.NODE_ENV !== "production" ? (n) => qs(e, n) : Ae;
  try {
    for (gt = 0; gt < Re.length; gt++) {
      const n = Re[gt];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Dt(n, null, 14);
      }
    }
  } finally {
    gt = 0, Re.length = 0, tl(e), Bn = !1, Xs = null, (Re.length || vn.length) && nl(e);
  }
}
function qs(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > pc) {
      const o = t.ownerInstance, s = o && Al(o.type);
      return R(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let tn = !1;
const mn = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ii().__VUE_HMR_RUNTIME__ = {
  createRecord: Xo(ol),
  rerender: Xo(bc),
  reload: Xo(Nc)
});
const sn = /* @__PURE__ */ new Map();
function hc(e) {
  const t = e.type.__hmrId;
  let n = sn.get(t);
  n || (ol(t, e.type), n = sn.get(t)), n.instances.add(e);
}
function Ec(e) {
  sn.get(e.type.__hmrId).instances.delete(e);
}
function ol(e, t) {
  return sn.has(e) ? !1 : (sn.set(e, {
    initialDef: Rn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Rn(e) {
  return Pl(e) ? e.__vccOpts : e;
}
function bc(e, t) {
  const n = sn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Rn(o.type).render = t), o.renderCache = [], tn = !0, o.update(), tn = !1;
  }));
}
function Nc(e, t) {
  const n = sn.get(e);
  if (!n)
    return;
  t = Rn(t), Tr(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = Rn(s.type);
    mn.has(r) || (r !== n.initialDef && Tr(r, t), mn.add(r)), s.appContext.optionsCache.delete(s.type), s.ceReload ? (mn.add(r), s.ceReload(t.styles), mn.delete(r)) : s.parent ? Ro(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window != "undefined" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  el(() => {
    for (const s of o)
      mn.delete(Rn(s.type));
  });
}
function Tr(e, t) {
  Oe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Xo(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let ht, Vn = [], ds = !1;
function Zn(e, ...t) {
  ht ? ht.emit(e, ...t) : ds || Vn.push({ event: e, args: t });
}
function sl(e, t) {
  var n, o;
  ht = e, ht ? (ht.enabled = !0, Vn.forEach(({ event: s, args: r }) => ht.emit(s, ...r)), Vn = []) : typeof window != "undefined" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    sl(r, t);
  }), setTimeout(() => {
    ht || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ds = !0, Vn = []);
  }, 3e3)) : (ds = !0, Vn = []);
}
function vc(e, t) {
  Zn("app:init", e, t, {
    Fragment: Ce,
    Text: Cn,
    Comment: Pe,
    Static: Fn
  });
}
function yc(e) {
  Zn("app:unmount", e);
}
const Oc = /* @__PURE__ */ Js("component:added"), rl = /* @__PURE__ */ Js("component:updated"), Tc = /* @__PURE__ */ Js("component:removed"), Lc = (e) => {
  ht && typeof ht.cleanupBuffer == "function" && !ht.cleanupBuffer(e) && Tc(e);
};
function Js(e) {
  return (t) => {
    Zn(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const kc = /* @__PURE__ */ il("perf:start"), Cc = /* @__PURE__ */ il("perf:end");
function il(e) {
  return (t, n, o) => {
    Zn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Dc(e, t, n) {
  Zn("component:emit", e.appContext.app, e, t, n);
}
function Ic(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || Ee;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: m, propsOptions: [p] } = e;
    if (m)
      if (!(t in m))
        (!p || !(Gt(t) in p)) && R(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Gt(t)}" prop.`);
      else {
        const _ = m[t];
        te(_) && (_(...n) || R(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && t.slice(7);
  if (i && i in o) {
    const m = `${i === "modelValue" ? "model" : i}Modifiers`, { number: p, trim: _ } = o[m] || Ee;
    _ && (s = n.map((L) => ve(L) ? L.trim() : L)), p && (s = n.map(La));
  }
  if (process.env.NODE_ENV !== "production" && Dc(e, t, s), process.env.NODE_ENV !== "production") {
    const m = t.toLowerCase();
    m !== t && o[Gt(m)] && R(`Event "${m}" is emitted in component ${Wo(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ft(t)}" instead of "${t}".`);
  }
  let c, u = o[c = Gt(t)] || o[c = Gt(On(t))];
  !u && r && (u = o[c = Gt(Ft(t))]), u && tt(u, e, 6, s);
  const f = o[c + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, tt(f, e, 6, s);
  }
}
function ll(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, c = !1;
  if (!te(e)) {
    const u = (f) => {
      const m = ll(f, t, !0);
      m && (c = !0, Oe(i, m));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (ge(e) && o.set(e, null), null) : (Q(r) ? r.forEach((u) => i[u] = null) : Oe(i, r), ge(e) && o.set(e, i), i);
}
function Mo(e, t) {
  return !e || !Qn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ae(e, t[0].toLowerCase() + t.slice(1)) || ae(e, Ft(t)) || ae(e, t));
}
let Je = null, Fo = null;
function vo(e) {
  const t = Je;
  return Je = e, Fo = e && e.type.__scopeId || null, t;
}
function Sc(e) {
  Fo = e;
}
function wc() {
  Fo = null;
}
function Ac(e, t = Je, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && Rr(-1);
    const r = vo(t);
    let i;
    try {
      i = e(...s);
    } finally {
      vo(r), o._d && Rr(1);
    }
    return process.env.NODE_ENV !== "production" && rl(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let ps = !1;
function yo() {
  ps = !0;
}
function qo(e) {
  const { type: t, vnode: n, proxy: o, withProxy: s, props: r, propsOptions: [i], slots: c, attrs: u, emit: f, render: m, renderCache: p, data: _, setupState: L, ctx: k, inheritAttrs: y } = e;
  let A, E;
  const T = vo(e);
  process.env.NODE_ENV !== "production" && (ps = !1);
  try {
    if (n.shapeFlag & 4) {
      const O = s || o;
      A = st(m.call(O, O, p, r, L, _, k)), E = u;
    } else {
      const O = t;
      process.env.NODE_ENV !== "production" && u === r && yo(), A = st(O.length > 1 ? O(r, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return yo(), u;
        },
        slots: c,
        emit: f
      } : { attrs: u, slots: c, emit: f }) : O(r, null)), E = t.props ? u : Vc(u);
    }
  } catch (O) {
    xn.length = 0, Vo(O, e, 1), A = Me(Pe);
  }
  let C = A, b;
  if (process.env.NODE_ENV !== "production" && A.patchFlag > 0 && A.patchFlag & 2048 && ([C, b] = Pc(A)), E && y !== !1) {
    const O = Object.keys(E), { shapeFlag: x } = C;
    if (O.length) {
      if (x & 7)
        i && O.some(Eo) && (E = Rc(E, i)), C = Et(C, E);
      else if (process.env.NODE_ENV !== "production" && !ps && C.type !== Pe) {
        const V = Object.keys(u), M = [], G = [];
        for (let J = 0, z = V.length; J < z; J++) {
          const Y = V[J];
          Qn(Y) ? Eo(Y) || M.push(Y[2].toLowerCase() + Y.slice(3)) : G.push(Y);
        }
        G.length && R(`Extraneous non-props attributes (${G.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), M.length && R(`Extraneous non-emits event listeners (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Lr(C) && R("Runtime directive used on component with non-element root node. The directives will not function as intended."), C = Et(C), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Lr(C) && R("Component inside <Transition> renders non-element root node that cannot be animated."), C.transition = n.transition), process.env.NODE_ENV !== "production" && b ? b(C) : A = C, vo(T), A;
}
const Pc = (e) => {
  const t = e.children, n = e.dynamicChildren, o = al(t);
  if (!o)
    return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (c) => {
    t[s] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [st(o), i];
};
function al(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Gn(o)) {
      if (o.type !== Pe || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Vc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Rc = (e, t) => {
  const n = {};
  for (const o in e)
    (!Eo(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Lr = (e) => e.shapeFlag & 7 || e.type === Pe;
function Mc(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: c, patchFlag: u } = t, f = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || c) && tn || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? kr(o, i, f) : !!i;
    if (u & 8) {
      const m = t.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        const _ = m[p];
        if (i[_] !== o[_] && !Mo(f, _))
          return !0;
      }
    }
  } else
    return (s || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? kr(o, i, f) : !0 : !!i;
  return !1;
}
function kr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !Mo(n, r))
      return !0;
  }
  return !1;
}
function Fc({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const xc = (e) => e.__isSuspense;
function $c(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : el(e);
}
function Uc(e, t) {
  if (!ye)
    process.env.NODE_ENV !== "production" && R("provide() can only be used inside setup().");
  else {
    let n = ye.provides;
    const o = ye.parent && ye.parent.provides;
    o === n && (n = ye.provides = Object.create(o)), n[e] = t;
  }
}
function Mn(e, t, n = !1) {
  const o = ye || Je;
  if (o) {
    const s = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && te(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && R(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && R("inject() can only be used inside setup() or functional components.");
}
function jc(e, t) {
  return xo(e, null, t);
}
function Wc(e, t) {
  return xo(e, null, process.env.NODE_ENV !== "production" ? Object.assign(Object.assign({}, t), { flush: "post" }) : { flush: "post" });
}
const ao = {};
function yn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !te(t) && R("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), xo(e, t, n);
}
function xo(e, t, { immediate: n, deep: o, flush: s, onTrack: r, onTrigger: i } = Ee) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && R('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && R('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (b) => {
    R("Invalid watch source: ", b, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = Da() === (ye == null ? void 0 : ye.scope) ? ye : null;
  let f, m = !1, p = !1;
  if (Te(e) ? (f = () => e.value, m = No(e)) : Zt(e) ? (f = () => e, o = !0) : Q(e) ? (p = !0, m = e.some((b) => Zt(b) || No(b)), f = () => e.map((b) => {
    if (Te(b))
      return b.value;
    if (Zt(b))
      return En(b);
    if (te(b))
      return Dt(b, u, 2);
    process.env.NODE_ENV !== "production" && c(b);
  })) : te(e) ? t ? f = () => Dt(e, u, 2) : f = () => {
    if (!(u && u.isUnmounted))
      return _ && _(), tt(e, u, 3, [L]);
  } : (f = Ae, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const b = f;
    f = () => En(b());
  }
  let _, L = (b) => {
    _ = T.onStop = () => {
      Dt(b, u, 4);
    };
  }, k;
  if (zn)
    if (L = Ae, t ? n && tt(t, u, 3, [
      f(),
      p ? [] : void 0,
      L
    ]) : f(), s === "sync") {
      const b = Yu();
      k = b.__watcherHandles || (b.__watcherHandles = []);
    } else
      return Ae;
  let y = p ? new Array(e.length).fill(ao) : ao;
  const A = () => {
    if (T.active)
      if (t) {
        const b = T.run();
        (o || m || (p ? b.some((O, x) => jn(O, y[x])) : jn(b, y))) && (_ && _(), tt(t, u, 3, [
          b,
          y === ao ? void 0 : p && y[0] === ao ? [] : y,
          L
        ]), y = b);
      } else
        T.run();
  };
  A.allowRecurse = !!t;
  let E;
  s === "sync" ? E = A : s === "post" ? E = () => Ye(A, u && u.suspense) : (A.pre = !0, u && (A.id = u.uid), E = () => Ro(A));
  const T = new Ks(f, E);
  process.env.NODE_ENV !== "production" && (T.onTrack = r, T.onTrigger = i), t ? n ? A() : y = T.run() : s === "post" ? Ye(T.run.bind(T), u && u.suspense) : T.run();
  const C = () => {
    T.stop(), u && u.scope && Us(u.scope.effects, T);
  };
  return k && k.push(C), C;
}
function Hc(e, t, n) {
  const o = this.proxy, s = ve(e) ? e.includes(".") ? cl(o, e) : () => o[e] : e.bind(o, o);
  let r;
  te(t) ? r = t : (r = t.handler, n = t);
  const i = ye;
  Tn(this);
  const c = xo(s, r.bind(o), n);
  return i ? Tn(i) : on(), c;
}
function cl(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function En(e, t) {
  if (!ge(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Te(e))
    En(e.value, t);
  else if (Q(e))
    for (let n = 0; n < e.length; n++)
      En(e[n], t);
  else if (ki(e) || Jt(e))
    e.forEach((n) => {
      En(n, t);
    });
  else if (Di(e))
    for (const n in e)
      En(e[n], t);
  return e;
}
function Bc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return to(() => {
    e.isMounted = !0;
  }), ml(() => {
    e.isUnmounting = !0;
  }), e;
}
const et = [Function, Array], Kc = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: et,
    onEnter: et,
    onAfterEnter: et,
    onEnterCancelled: et,
    onBeforeLeave: et,
    onLeave: et,
    onAfterLeave: et,
    onLeaveCancelled: et,
    onBeforeAppear: et,
    onAppear: et,
    onAfterAppear: et,
    onAppearCancelled: et
  },
  setup(e, { slots: t }) {
    const n = rn(), o = Bc();
    let s;
    return () => {
      const r = t.default && fl(t.default(), !0);
      if (!r || !r.length)
        return;
      let i = r[0];
      if (r.length > 1) {
        let y = !1;
        for (const A of r)
          if (A.type !== Pe) {
            if (process.env.NODE_ENV !== "production" && y) {
              R("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = A, y = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const c = oe(e), { mode: u } = c;
      if (process.env.NODE_ENV !== "production" && u && u !== "in-out" && u !== "out-in" && u !== "default" && R(`invalid <transition> mode: ${u}`), o.isLeaving)
        return Jo(i);
      const f = Cr(i);
      if (!f)
        return Jo(i);
      const m = ms(f, c, o, n);
      _s(f, m);
      const p = n.subTree, _ = p && Cr(p);
      let L = !1;
      const { getTransitionKey: k } = f.type;
      if (k) {
        const y = k();
        s === void 0 ? s = y : y !== s && (s = y, L = !0);
      }
      if (_ && _.type !== Pe && (!Xt(f, _) || L)) {
        const y = ms(_, c, o, n);
        if (_s(_, y), u === "out-in")
          return o.isLeaving = !0, y.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Jo(i);
        u === "in-out" && f.type !== Pe && (y.delayLeave = (A, E, T) => {
          const C = ul(o, _);
          C[String(_.key)] = _, A._leaveCb = () => {
            E(), A._leaveCb = void 0, delete m.delayedLeave;
          }, m.delayedLeave = T;
        });
      }
      return i;
    };
  }
}, Yc = Kc;
function ul(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function ms(e, t, n, o) {
  const { appear: s, mode: r, persisted: i = !1, onBeforeEnter: c, onEnter: u, onAfterEnter: f, onEnterCancelled: m, onBeforeLeave: p, onLeave: _, onAfterLeave: L, onLeaveCancelled: k, onBeforeAppear: y, onAppear: A, onAfterAppear: E, onAppearCancelled: T } = t, C = String(e.key), b = ul(n, e), O = (M, G) => {
    M && tt(M, o, 9, G);
  }, x = (M, G) => {
    const J = G[1];
    O(M, G), Q(M) ? M.every((z) => z.length <= 1) && J() : M.length <= 1 && J();
  }, V = {
    mode: r,
    persisted: i,
    beforeEnter(M) {
      let G = c;
      if (!n.isMounted)
        if (s)
          G = y || c;
        else
          return;
      M._leaveCb && M._leaveCb(!0);
      const J = b[C];
      J && Xt(e, J) && J.el._leaveCb && J.el._leaveCb(), O(G, [M]);
    },
    enter(M) {
      let G = u, J = f, z = m;
      if (!n.isMounted)
        if (s)
          G = A || u, J = E || f, z = T || m;
        else
          return;
      let Y = !1;
      const q = M._enterCb = (re) => {
        Y || (Y = !0, re ? O(z, [M]) : O(J, [M]), V.delayedLeave && V.delayedLeave(), M._enterCb = void 0);
      };
      G ? x(G, [M, q]) : q();
    },
    leave(M, G) {
      const J = String(e.key);
      if (M._enterCb && M._enterCb(!0), n.isUnmounting)
        return G();
      O(p, [M]);
      let z = !1;
      const Y = M._leaveCb = (q) => {
        z || (z = !0, G(), q ? O(k, [M]) : O(L, [M]), M._leaveCb = void 0, b[J] === e && delete b[J]);
      };
      b[J] = e, _ ? x(_, [M, Y]) : Y();
    },
    clone(M) {
      return ms(M, t, n, o);
    }
  };
  return V;
}
function Jo(e) {
  if (eo(e))
    return e = Et(e), e.children = null, e;
}
function Cr(e) {
  return eo(e) ? e.children ? e.children[0] : void 0 : e;
}
function _s(e, t) {
  e.shapeFlag & 6 && e.component ? _s(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function fl(e, t = !1, n) {
  let o = [], s = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === Ce ? (i.patchFlag & 128 && s++, o = o.concat(fl(i.children, t, c))) : (t || i.type !== Pe) && o.push(c != null ? Et(i, { key: c }) : i);
  }
  if (s > 1)
    for (let r = 0; r < o.length; r++)
      o[r].patchFlag = -2;
  return o;
}
function dl(e) {
  return te(e) ? { setup: e, name: e.name } : e;
}
const mo = (e) => !!e.type.__asyncLoader, eo = (e) => e.type.__isKeepAlive;
function Gc(e, t) {
  pl(e, "a", t);
}
function zc(e, t) {
  pl(e, "da", t);
}
function pl(e, t, n = ye) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if ($o(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      eo(s.parent.vnode) && Xc(o, t, n, s), s = s.parent;
  }
}
function Xc(e, t, n, o) {
  const s = $o(t, e, o, !0);
  Uo(() => {
    Us(o[t], s);
  }, n);
}
function $o(e, t, n = ye, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      un(), Tn(n);
      const c = tt(t, n, e, i);
      return on(), fn(), c;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Gt(zs[e].replace(/ hook$/, ""));
    R(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const St = (e) => (t, n = ye) => (!zn || e === "sp") && $o(e, (...o) => t(...o), n), Qs = St("bm"), to = St("m"), qc = St("bu"), Jc = St("u"), ml = St("bum"), Uo = St("um"), Qc = St("sp"), Zc = St("rtg"), eu = St("rtc");
function tu(e, t = ye) {
  $o("ec", e, t);
}
function _l(e) {
  ya(e) && R("Do not use built-in directive ids as custom directive id: " + e);
}
function Kt(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    r && (c.oldValue = r[i].value);
    let u = c.dir[o];
    u && (un(), tt(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), fn());
  }
}
const nu = Symbol();
function _n(e, t, n, o) {
  let s;
  const r = n && n[o];
  if (Q(e) || ve(e)) {
    s = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      s[i] = t(e[i], i, void 0, r && r[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && R(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, r && r[i]);
  } else if (ge(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, c) => t(i, c, void 0, r && r[c]));
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let c = 0, u = i.length; c < u; c++) {
        const f = i[c];
        s[c] = t(e[f], f, c, r && r[c]);
      }
    }
  else
    s = [];
  return n && (n[o] = s), s;
}
const gs = (e) => e ? Il(e) ? or(e) || e.proxy : gs(e.parent) : null, nn = /* @__PURE__ */ Oe(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? hn(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? hn(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? hn(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? hn(e.refs) : e.refs,
  $parent: (e) => gs(e.parent),
  $root: (e) => gs(e.root),
  $emit: (e) => e.emit,
  $options: (e) => er(e),
  $forceUpdate: (e) => e.f || (e.f = () => Ro(e.update)),
  $nextTick: (e) => e.n || (e.n = Qi.bind(e.proxy)),
  $watch: (e) => Hc.bind(e)
}), Zs = (e) => e === "_" || e === "$", Qo = (e, t) => e !== Ee && !e.__isScriptSetup && ae(e, t), gl = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const L = i[t];
      if (L !== void 0)
        switch (L) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Qo(o, t))
          return i[t] = 1, o[t];
        if (s !== Ee && ae(s, t))
          return i[t] = 2, s[t];
        if ((f = e.propsOptions[0]) && ae(f, t))
          return i[t] = 3, r[t];
        if (n !== Ee && ae(n, t))
          return i[t] = 4, n[t];
        hs && (i[t] = 0);
      }
    }
    const m = nn[t];
    let p, _;
    if (m)
      return t === "$attrs" && (He(e, "get", t), process.env.NODE_ENV !== "production" && yo()), m(e);
    if ((p = c.__cssModules) && (p = p[t]))
      return p;
    if (n !== Ee && ae(n, t))
      return i[t] = 4, n[t];
    if (_ = u.config.globalProperties, ae(_, t))
      return _[t];
    process.env.NODE_ENV !== "production" && Je && (!ve(t) || t.indexOf("__v") !== 0) && (s !== Ee && Zs(t[0]) && ae(s, t) ? R(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Je && R(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Qo(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && ae(s, t) ? (R(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Ee && ae(o, t) ? (o[t] = n, !0) : ae(e.props, t) ? (process.env.NODE_ENV !== "production" && R(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && R(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r } }, i) {
    let c;
    return !!n[i] || e !== Ee && ae(e, i) || Qo(t, i) || (c = r[0]) && ae(c, i) || ae(o, i) || ae(nn, i) || ae(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ae(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (gl.ownKeys = (e) => (R("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function ou(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(nn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => nn[n](e),
      set: Ae
    });
  }), t;
}
function su(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Ae
    });
  });
}
function ru(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(oe(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Zs(o[0])) {
        R(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Ae
      });
    }
  });
}
function iu() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? R(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let hs = !0;
function lu(e) {
  const t = er(e), n = e.proxy, o = e.ctx;
  hs = !1, t.beforeCreate && Dr(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: r,
    methods: i,
    watch: c,
    provide: u,
    inject: f,
    created: m,
    beforeMount: p,
    mounted: _,
    beforeUpdate: L,
    updated: k,
    activated: y,
    deactivated: A,
    beforeDestroy: E,
    beforeUnmount: T,
    destroyed: C,
    unmounted: b,
    render: O,
    renderTracked: x,
    renderTriggered: V,
    errorCaptured: M,
    serverPrefetch: G,
    expose: J,
    inheritAttrs: z,
    components: Y,
    directives: q,
    filters: re
  } = t, W = process.env.NODE_ENV !== "production" ? iu() : null;
  if (process.env.NODE_ENV !== "production") {
    const [$] = e.propsOptions;
    if ($)
      for (const K in $)
        W("Props", K);
  }
  if (f && au(f, o, W, e.appContext.config.unwrapInjectedRef), i)
    for (const $ in i) {
      const K = i[$];
      te(K) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, $, {
        value: K.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[$] = K.bind(n), process.env.NODE_ENV !== "production" && W("Methods", $)) : process.env.NODE_ENV !== "production" && R(`Method "${$}" has type "${typeof K}" in the component definition. Did you reference the function correctly?`);
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !te(s) && R("The data option must be a function. Plain object usage is no longer supported.");
    const $ = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && Ws($) && R("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !ge($))
      process.env.NODE_ENV !== "production" && R("data() should return an object.");
    else if (e.data = Ao($), process.env.NODE_ENV !== "production")
      for (const K in $)
        W("Data", K), Zs(K[0]) || Object.defineProperty(o, K, {
          configurable: !0,
          enumerable: !0,
          get: () => $[K],
          set: Ae
        });
  }
  if (hs = !0, r)
    for (const $ in r) {
      const K = r[$], ue = te(K) ? K.bind(n, n) : te(K.get) ? K.get.bind(n, n) : Ae;
      process.env.NODE_ENV !== "production" && ue === Ae && R(`Computed property "${$}" has no getter.`);
      const me = !te(K) && te(K.set) ? K.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        R(`Write operation failed: computed property "${$}" is readonly.`);
      } : Ae, ke = rt({
        get: ue,
        set: me
      });
      Object.defineProperty(o, $, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (Ve) => ke.value = Ve
      }), process.env.NODE_ENV !== "production" && W("Computed", $);
    }
  if (c)
    for (const $ in c)
      hl(c[$], o, n, $);
  if (u) {
    const $ = te(u) ? u.call(n) : u;
    Reflect.ownKeys($).forEach((K) => {
      Uc(K, $[K]);
    });
  }
  m && Dr(m, e, "c");
  function D($, K) {
    Q(K) ? K.forEach((ue) => $(ue.bind(n))) : K && $(K.bind(n));
  }
  if (D(Qs, p), D(to, _), D(qc, L), D(Jc, k), D(Gc, y), D(zc, A), D(tu, M), D(eu, x), D(Zc, V), D(ml, T), D(Uo, b), D(Qc, G), Q(J))
    if (J.length) {
      const $ = e.exposed || (e.exposed = {});
      J.forEach((K) => {
        Object.defineProperty($, K, {
          get: () => n[K],
          set: (ue) => n[K] = ue
        });
      });
    } else
      e.exposed || (e.exposed = {});
  O && e.render === Ae && (e.render = O), z != null && (e.inheritAttrs = z), Y && (e.components = Y), q && (e.directives = q);
}
function au(e, t, n = Ae, o = !1) {
  Q(e) && (e = Es(e));
  for (const s in e) {
    const r = e[s];
    let i;
    ge(r) ? "default" in r ? i = Mn(r.from || s, r.default, !0) : i = Mn(r.from || s) : i = Mn(r), Te(i) ? o ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : (process.env.NODE_ENV !== "production" && R(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[s] = i) : t[s] = i, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Dr(e, t, n) {
  tt(Q(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function hl(e, t, n, o) {
  const s = o.includes(".") ? cl(n, o) : () => n[o];
  if (ve(e)) {
    const r = t[e];
    te(r) ? yn(s, r) : process.env.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e}"`, r);
  } else if (te(e))
    yn(s, e.bind(n));
  else if (ge(e))
    if (Q(e))
      e.forEach((r) => hl(r, t, n, o));
    else {
      const r = te(e.handler) ? e.handler.bind(n) : t[e.handler];
      te(r) ? yn(s, r, e) : process.env.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    process.env.NODE_ENV !== "production" && R(`Invalid watch option: "${o}"`, e);
}
function er(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: s, optionsCache: r, config: { optionMergeStrategies: i } } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !s.length && !n && !o ? u = t : (u = {}, s.length && s.forEach((f) => Oo(u, f, i, !0)), Oo(u, t, i)), ge(t) && r.set(t, u), u;
}
function Oo(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Oo(e, r, n, !0), s && s.forEach((i) => Oo(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && R('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = cu[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const cu = {
  data: Ir,
  props: zt,
  emits: zt,
  methods: zt,
  computed: zt,
  beforeCreate: Ue,
  created: Ue,
  beforeMount: Ue,
  mounted: Ue,
  beforeUpdate: Ue,
  updated: Ue,
  beforeDestroy: Ue,
  beforeUnmount: Ue,
  destroyed: Ue,
  unmounted: Ue,
  activated: Ue,
  deactivated: Ue,
  errorCaptured: Ue,
  serverPrefetch: Ue,
  components: zt,
  directives: zt,
  watch: fu,
  provide: Ir,
  inject: uu
};
function Ir(e, t) {
  return t ? e ? function() {
    return Oe(te(e) ? e.call(this, this) : e, te(t) ? t.call(this, this) : t);
  } : t : e;
}
function uu(e, t) {
  return zt(Es(e), Es(t));
}
function Es(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function zt(e, t) {
  return e ? Oe(Oe(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function fu(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Oe(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = Ue(e[o], t[o]);
  return n;
}
function du(e, t, n, o = !1) {
  const s = {}, r = {};
  bo(r, jo, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), El(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && Nl(t || {}, s, e), n ? e.props = o ? s : nc(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function pu(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function mu(e, t, n, o) {
  const { props: s, attrs: r, vnode: { patchFlag: i } } = e, c = oe(s), [u] = e.propsOptions;
  let f = !1;
  if (!(process.env.NODE_ENV !== "production" && pu(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const m = e.vnode.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        let _ = m[p];
        if (Mo(e.emitsOptions, _))
          continue;
        const L = t[_];
        if (u)
          if (ae(r, _))
            L !== r[_] && (r[_] = L, f = !0);
          else {
            const k = On(_);
            s[k] = bs(u, c, k, L, e, !1);
          }
        else
          L !== r[_] && (r[_] = L, f = !0);
      }
    }
  } else {
    El(e, t, s, r) && (f = !0);
    let m;
    for (const p in c)
      (!t || !ae(t, p) && ((m = Ft(p)) === p || !ae(t, m))) && (u ? n && (n[p] !== void 0 || n[m] !== void 0) && (s[p] = bs(u, c, p, void 0, e, !0)) : delete s[p]);
    if (r !== c)
      for (const p in r)
        (!t || !ae(t, p)) && (delete r[p], f = !0);
  }
  f && It(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Nl(t || {}, s, e);
}
function El(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (uo(u))
        continue;
      const f = t[u];
      let m;
      s && ae(s, m = On(u)) ? !r || !r.includes(m) ? n[m] = f : (c || (c = {}))[m] = f : Mo(e.emitsOptions, u) || (!(u in o) || f !== o[u]) && (o[u] = f, i = !0);
    }
  if (r) {
    const u = oe(n), f = c || Ee;
    for (let m = 0; m < r.length; m++) {
      const p = r[m];
      n[p] = bs(s, u, p, f[p], e, !ae(f, p));
    }
  }
  return i;
}
function bs(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const c = ae(i, "default");
    if (c && o === void 0) {
      const u = i.default;
      if (i.type !== Function && te(u)) {
        const { propsDefaults: f } = s;
        n in f ? o = f[n] : (Tn(s), o = f[n] = u.call(null, t), on());
      } else
        o = u;
    }
    i[0] && (r && !c ? o = !1 : i[1] && (o === "" || o === Ft(n)) && (o = !0));
  }
  return o;
}
function bl(e, t, n = !1) {
  const o = t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, c = [];
  let u = !1;
  if (!te(e)) {
    const m = (p) => {
      u = !0;
      const [_, L] = bl(p, t, !0);
      Oe(i, _), L && c.push(...L);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!r && !u)
    return ge(e) && o.set(e, Nn), Nn;
  if (Q(r))
    for (let m = 0; m < r.length; m++) {
      process.env.NODE_ENV !== "production" && !ve(r[m]) && R("props must be strings when using array syntax.", r[m]);
      const p = On(r[m]);
      Sr(p) && (i[p] = Ee);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !ge(r) && R("invalid props options", r);
    for (const m in r) {
      const p = On(m);
      if (Sr(p)) {
        const _ = r[m], L = i[p] = Q(_) || te(_) ? { type: _ } : Object.assign({}, _);
        if (L) {
          const k = Ar(Boolean, L.type), y = Ar(String, L.type);
          L[0] = k > -1, L[1] = y < 0 || k < y, (k > -1 || ae(L, "default")) && c.push(p);
        }
      }
    }
  }
  const f = [i, c];
  return ge(e) && o.set(e, f), f;
}
function Sr(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && R(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ns(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function wr(e, t) {
  return Ns(e) === Ns(t);
}
function Ar(e, t) {
  return Q(t) ? t.findIndex((n) => wr(n, e)) : te(t) && wr(t, e) ? 0 : -1;
}
function Nl(e, t, n) {
  const o = oe(t), s = n.propsOptions[0];
  for (const r in s) {
    let i = s[r];
    i != null && _u(r, o[r], i, !ae(e, r) && !ae(e, Ft(r)));
  }
}
function _u(e, t, n, o) {
  const { type: s, required: r, validator: i } = n;
  if (r && o) {
    R('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (s != null && s !== !0) {
      let c = !1;
      const u = Q(s) ? s : [s], f = [];
      for (let m = 0; m < u.length && !c; m++) {
        const { valid: p, expectedType: _ } = hu(t, u[m]);
        f.push(_ || ""), c = p;
      }
      if (!c) {
        R(Eu(e, t, f));
        return;
      }
    }
    i && !i(t) && R('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const gu = /* @__PURE__ */ jt("String,Number,Boolean,Function,Symbol,BigInt");
function hu(e, t) {
  let n;
  const o = Ns(t);
  if (gu(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = ge(e) : o === "Array" ? n = Q(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Eu(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Do).join(" | ")}`;
  const s = n[0], r = Hs(t), i = Pr(t, s), c = Pr(t, r);
  return n.length === 1 && Vr(s) && !bu(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, Vr(r) && (o += `with value ${c}.`), o;
}
function Pr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Vr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function bu(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const vl = (e) => e[0] === "_" || e === "$stable", tr = (e) => Q(e) ? e.map(st) : [st(e)], Nu = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ac((...s) => (process.env.NODE_ENV !== "production" && ye && R(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), tr(t(...s))), n);
  return o._c = !1, o;
}, yl = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (vl(s))
      continue;
    const r = e[s];
    if (te(r))
      t[s] = Nu(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && R(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);
      const i = tr(r);
      t[s] = () => i;
    }
  }
}, Ol = (e, t) => {
  process.env.NODE_ENV !== "production" && !eo(e.vnode) && R("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = tr(t);
  e.slots.default = () => n;
}, vu = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = oe(t), bo(t, "_", n)) : yl(t, e.slots = {});
  } else
    e.slots = {}, t && Ol(e, t);
  bo(e.slots, jo, 1);
}, yu = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = Ee;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && tn ? Oe(s, t) : n && c === 1 ? r = !1 : (Oe(s, t), !n && c === 1 && delete s._) : (r = !t.$stable, yl(t, s)), i = t;
  } else
    t && (Ol(e, t), i = { default: 1 });
  if (r)
    for (const c in s)
      !vl(c) && !(c in i) && delete s[c];
};
function Tl() {
  return {
    app: null,
    config: {
      isNativeTag: Li,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ou = 0;
function Tu(e, t) {
  return function(o, s = null) {
    te(o) || (o = Object.assign({}, o)), s != null && !ge(s) && (process.env.NODE_ENV !== "production" && R("root props passed to app.mount() must be an object."), s = null);
    const r = Tl(), i = /* @__PURE__ */ new Set();
    let c = !1;
    const u = r.app = {
      _uid: Ou++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: xr,
      get config() {
        return r.config;
      },
      set config(f) {
        process.env.NODE_ENV !== "production" && R("app.config cannot be replaced. Modify individual options instead.");
      },
      use(f, ...m) {
        return i.has(f) ? process.env.NODE_ENV !== "production" && R("Plugin has already been applied to target app.") : f && te(f.install) ? (i.add(f), f.install(u, ...m)) : te(f) ? (i.add(f), f(u, ...m)) : process.env.NODE_ENV !== "production" && R('A plugin must either be a function or an object with an "install" function.'), u;
      },
      mixin(f) {
        return r.mixins.includes(f) ? process.env.NODE_ENV !== "production" && R("Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")) : r.mixins.push(f), u;
      },
      component(f, m) {
        return process.env.NODE_ENV !== "production" && ys(f, r.config), m ? (process.env.NODE_ENV !== "production" && r.components[f] && R(`Component "${f}" has already been registered in target app.`), r.components[f] = m, u) : r.components[f];
      },
      directive(f, m) {
        return process.env.NODE_ENV !== "production" && _l(f), m ? (process.env.NODE_ENV !== "production" && r.directives[f] && R(`Directive "${f}" has already been registered in target app.`), r.directives[f] = m, u) : r.directives[f];
      },
      mount(f, m, p) {
        if (c)
          process.env.NODE_ENV !== "production" && R("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && f.__vue_app__ && R("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const _ = Me(o, s);
          return _.appContext = r, process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(Et(_), f, p);
          }), m && t ? t(_, f) : e(_, f, p), c = !0, u._container = f, f.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = _.component, vc(u, xr)), or(_.component) || _.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, yc(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && R("Cannot unmount an app that is not mounted.");
      },
      provide(f, m) {
        return process.env.NODE_ENV !== "production" && f in r.provides && R(`App already provides property with key "${String(f)}". It will be overwritten with the new value.`), r.provides[f] = m, u;
      }
    };
    return u;
  };
}
function vs(e, t, n, o, s = !1) {
  if (Q(e)) {
    e.forEach((_, L) => vs(_, t && (Q(t) ? t[L] : t), n, o, s));
    return;
  }
  if (mo(o) && !s)
    return;
  const r = o.shapeFlag & 4 ? or(o.component) || o.component.proxy : o.el, i = s ? null : r, { i: c, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    R("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const f = t && t.r, m = c.refs === Ee ? c.refs = {} : c.refs, p = c.setupState;
  if (f != null && f !== u && (ve(f) ? (m[f] = null, ae(p, f) && (p[f] = null)) : Te(f) && (f.value = null)), te(u))
    Dt(u, c, 12, [i, m]);
  else {
    const _ = ve(u), L = Te(u);
    if (_ || L) {
      const k = () => {
        if (e.f) {
          const y = _ ? ae(p, u) ? p[u] : m[u] : u.value;
          s ? Q(y) && Us(y, r) : Q(y) ? y.includes(r) || y.push(r) : _ ? (m[u] = [r], ae(p, u) && (p[u] = m[u])) : (u.value = [r], e.k && (m[e.k] = u.value));
        } else
          _ ? (m[u] = i, ae(p, u) && (p[u] = i)) : L ? (u.value = i, e.k && (m[e.k] = i)) : process.env.NODE_ENV !== "production" && R("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (k.id = -1, Ye(k, n)) : k();
    } else
      process.env.NODE_ENV !== "production" && R("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let wn, Rt;
function Lt(e, t) {
  e.appContext.config.performance && To() && Rt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && kc(e, t, To() ? Rt.now() : Date.now());
}
function kt(e, t) {
  if (e.appContext.config.performance && To()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Rt.mark(o), Rt.measure(`<${Wo(e, e.type)}> ${t}`, n, o), Rt.clearMarks(n), Rt.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Cc(e, t, To() ? Rt.now() : Date.now());
}
function To() {
  return wn !== void 0 || (typeof window != "undefined" && window.performance ? (wn = !0, Rt = window.performance) : wn = !1), wn;
}
function Lu() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const Ye = $c;
function ku(e) {
  return Cu(e);
}
function Cu(e, t) {
  Lu();
  const n = Ii();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && sl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: s, patchProp: r, createElement: i, createText: c, createComment: u, setText: f, setElementText: m, parentNode: p, nextSibling: _, setScopeId: L = Ae, insertStaticContent: k } = e, y = (l, a, d, g = null, N = null, I = null, F = !1, P = null, U = process.env.NODE_ENV !== "production" && tn ? !1 : !!a.dynamicChildren) => {
    if (l === a)
      return;
    l && !Xt(l, a) && (g = Ze(l), Be(l, N, I, !0), l = null), a.patchFlag === -2 && (U = !1, a.dynamicChildren = null);
    const { type: S, ref: h, shapeFlag: v } = a;
    switch (S) {
      case Cn:
        A(l, a, d, g);
        break;
      case Pe:
        E(l, a, d, g);
        break;
      case Fn:
        l == null ? T(a, d, g, F) : process.env.NODE_ENV !== "production" && C(l, a, d, F);
        break;
      case Ce:
        q(l, a, d, g, N, I, F, P, U);
        break;
      default:
        v & 1 ? x(l, a, d, g, N, I, F, P, U) : v & 6 ? re(l, a, d, g, N, I, F, P, U) : v & 64 || v & 128 ? S.process(l, a, d, g, N, I, F, P, U, xe) : process.env.NODE_ENV !== "production" && R("Invalid VNode type:", S, `(${typeof S})`);
    }
    h != null && N && vs(h, l && l.ref, I, a || l, !a);
  }, A = (l, a, d, g) => {
    if (l == null)
      o(a.el = c(a.children), d, g);
    else {
      const N = a.el = l.el;
      a.children !== l.children && f(N, a.children);
    }
  }, E = (l, a, d, g) => {
    l == null ? o(a.el = u(a.children || ""), d, g) : a.el = l.el;
  }, T = (l, a, d, g) => {
    [l.el, l.anchor] = k(l.children, a, d, g, l.el, l.anchor);
  }, C = (l, a, d, g) => {
    if (a.children !== l.children) {
      const N = _(l.anchor);
      O(l), [a.el, a.anchor] = k(a.children, d, N, g);
    } else
      a.el = l.el, a.anchor = l.anchor;
  }, b = ({ el: l, anchor: a }, d, g) => {
    let N;
    for (; l && l !== a; )
      N = _(l), o(l, d, g), l = N;
    o(a, d, g);
  }, O = ({ el: l, anchor: a }) => {
    let d;
    for (; l && l !== a; )
      d = _(l), s(l), l = d;
    s(a);
  }, x = (l, a, d, g, N, I, F, P, U) => {
    F = F || a.type === "svg", l == null ? V(a, d, g, N, I, F, P, U) : J(l, a, N, I, F, P, U);
  }, V = (l, a, d, g, N, I, F, P) => {
    let U, S;
    const { type: h, props: v, shapeFlag: B, transition: X, dirs: se } = l;
    if (U = l.el = i(l.type, I, v && v.is, v), B & 8 ? m(U, l.children) : B & 16 && G(l.children, U, null, g, N, I && h !== "foreignObject", F, P), se && Kt(l, null, g, "created"), M(U, l, l.scopeId, F, g), v) {
      for (const fe in v)
        fe !== "value" && !uo(fe) && r(U, fe, null, v[fe], I, l.children, g, N, Fe);
      "value" in v && r(U, "value", null, v.value), (S = v.onVnodeBeforeMount) && dt(S, g, l);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(U, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(U, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), se && Kt(l, null, g, "beforeMount");
    const pe = (!N || N && !N.pendingBranch) && X && !X.persisted;
    pe && X.beforeEnter(U), o(U, a, d), ((S = v && v.onVnodeMounted) || pe || se) && Ye(() => {
      S && dt(S, g, l), pe && X.enter(U), se && Kt(l, null, g, "mounted");
    }, N);
  }, M = (l, a, d, g, N) => {
    if (d && L(l, d), g)
      for (let I = 0; I < g.length; I++)
        L(l, g[I]);
    if (N) {
      let I = N.subTree;
      if (process.env.NODE_ENV !== "production" && I.patchFlag > 0 && I.patchFlag & 2048 && (I = al(I.children) || I), a === I) {
        const F = N.vnode;
        M(l, F, F.scopeId, F.slotScopeIds, N.parent);
      }
    }
  }, G = (l, a, d, g, N, I, F, P, U = 0) => {
    for (let S = U; S < l.length; S++) {
      const h = l[S] = P ? Vt(l[S]) : st(l[S]);
      y(null, h, a, d, g, N, I, F, P);
    }
  }, J = (l, a, d, g, N, I, F) => {
    const P = a.el = l.el;
    let { patchFlag: U, dynamicChildren: S, dirs: h } = a;
    U |= l.patchFlag & 16;
    const v = l.props || Ee, B = a.props || Ee;
    let X;
    d && Yt(d, !1), (X = B.onVnodeBeforeUpdate) && dt(X, d, a, l), h && Kt(a, l, d, "beforeUpdate"), d && Yt(d, !0), process.env.NODE_ENV !== "production" && tn && (U = 0, F = !1, S = null);
    const se = N && a.type !== "foreignObject";
    if (S ? (z(l.dynamicChildren, S, P, d, g, se, I), process.env.NODE_ENV !== "production" && d && d.type.__hmrId && _o(l, a)) : F || ue(l, a, P, null, d, g, se, I, !1), U > 0) {
      if (U & 16)
        Y(P, a, v, B, d, g, N);
      else if (U & 2 && v.class !== B.class && r(P, "class", null, B.class, N), U & 4 && r(P, "style", v.style, B.style, N), U & 8) {
        const pe = a.dynamicProps;
        for (let fe = 0; fe < pe.length; fe++) {
          const he = pe[fe], ze = v[he], Ot = B[he];
          (Ot !== ze || he === "value") && r(P, he, ze, Ot, N, l.children, d, g, Fe);
        }
      }
      U & 1 && l.children !== a.children && m(P, a.children);
    } else
      !F && S == null && Y(P, a, v, B, d, g, N);
    ((X = B.onVnodeUpdated) || h) && Ye(() => {
      X && dt(X, d, a, l), h && Kt(a, l, d, "updated");
    }, g);
  }, z = (l, a, d, g, N, I, F) => {
    for (let P = 0; P < a.length; P++) {
      const U = l[P], S = a[P], h = U.el && (U.type === Ce || !Xt(U, S) || U.shapeFlag & 70) ? p(U.el) : d;
      y(U, S, h, null, g, N, I, F, !0);
    }
  }, Y = (l, a, d, g, N, I, F) => {
    if (d !== g) {
      if (d !== Ee)
        for (const P in d)
          !uo(P) && !(P in g) && r(l, P, d[P], null, F, a.children, N, I, Fe);
      for (const P in g) {
        if (uo(P))
          continue;
        const U = g[P], S = d[P];
        U !== S && P !== "value" && r(l, P, S, U, F, a.children, N, I, Fe);
      }
      "value" in g && r(l, "value", d.value, g.value);
    }
  }, q = (l, a, d, g, N, I, F, P, U) => {
    const S = a.el = l ? l.el : c(""), h = a.anchor = l ? l.anchor : c("");
    let { patchFlag: v, dynamicChildren: B, slotScopeIds: X } = a;
    process.env.NODE_ENV !== "production" && (tn || v & 2048) && (v = 0, U = !1, B = null), X && (P = P ? P.concat(X) : X), l == null ? (o(S, d, g), o(h, d, g), G(a.children, d, h, N, I, F, P, U)) : v > 0 && v & 64 && B && l.dynamicChildren ? (z(l.dynamicChildren, B, d, N, I, F, P), process.env.NODE_ENV !== "production" && N && N.type.__hmrId ? _o(l, a) : (a.key != null || N && a === N.subTree) && _o(l, a, !0)) : ue(l, a, d, h, N, I, F, P, U);
  }, re = (l, a, d, g, N, I, F, P, U) => {
    a.slotScopeIds = P, l == null ? a.shapeFlag & 512 ? N.ctx.activate(a, d, g, F, U) : W(a, d, g, N, I, F, U) : D(l, a, U);
  }, W = (l, a, d, g, N, I, F) => {
    const P = l.component = xu(l, g, N);
    if (process.env.NODE_ENV !== "production" && P.type.__hmrId && hc(P), process.env.NODE_ENV !== "production" && (fo(l), Lt(P, "mount")), eo(l) && (P.ctx.renderer = xe), process.env.NODE_ENV !== "production" && Lt(P, "init"), Uu(P), process.env.NODE_ENV !== "production" && kt(P, "init"), P.asyncDep) {
      if (N && N.registerDep(P, $), !l.el) {
        const U = P.subTree = Me(Pe);
        E(null, U, a, d);
      }
      return;
    }
    $(P, l, a, d, N, I, F), process.env.NODE_ENV !== "production" && (po(), kt(P, "mount"));
  }, D = (l, a, d) => {
    const g = a.component = l.component;
    if (Mc(l, a, d))
      if (g.asyncDep && !g.asyncResolved) {
        process.env.NODE_ENV !== "production" && fo(a), K(g, a, d), process.env.NODE_ENV !== "production" && po();
        return;
      } else
        g.next = a, _c(g.update), g.update();
    else
      a.el = l.el, g.vnode = a;
  }, $ = (l, a, d, g, N, I, F) => {
    const P = () => {
      if (l.isMounted) {
        let { next: h, bu: v, u: B, parent: X, vnode: se } = l, pe = h, fe;
        process.env.NODE_ENV !== "production" && fo(h || l.vnode), Yt(l, !1), h ? (h.el = se.el, K(l, h, F)) : h = se, v && Sn(v), (fe = h.props && h.props.onVnodeBeforeUpdate) && dt(fe, X, h, se), Yt(l, !0), process.env.NODE_ENV !== "production" && Lt(l, "render");
        const he = qo(l);
        process.env.NODE_ENV !== "production" && kt(l, "render");
        const ze = l.subTree;
        l.subTree = he, process.env.NODE_ENV !== "production" && Lt(l, "patch"), y(
          ze,
          he,
          p(ze.el),
          Ze(ze),
          l,
          N,
          I
        ), process.env.NODE_ENV !== "production" && kt(l, "patch"), h.el = he.el, pe === null && Fc(l, he.el), B && Ye(B, N), (fe = h.props && h.props.onVnodeUpdated) && Ye(() => dt(fe, X, h, se), N), process.env.NODE_ENV !== "production" && rl(l), process.env.NODE_ENV !== "production" && po();
      } else {
        let h;
        const { el: v, props: B } = a, { bm: X, m: se, parent: pe } = l, fe = mo(a);
        if (Yt(l, !1), X && Sn(X), !fe && (h = B && B.onVnodeBeforeMount) && dt(h, pe, a), Yt(l, !0), v && yt) {
          const he = () => {
            process.env.NODE_ENV !== "production" && Lt(l, "render"), l.subTree = qo(l), process.env.NODE_ENV !== "production" && kt(l, "render"), process.env.NODE_ENV !== "production" && Lt(l, "hydrate"), yt(v, l.subTree, l, N, null), process.env.NODE_ENV !== "production" && kt(l, "hydrate");
          };
          fe ? a.type.__asyncLoader().then(
            () => !l.isUnmounted && he()
          ) : he();
        } else {
          process.env.NODE_ENV !== "production" && Lt(l, "render");
          const he = l.subTree = qo(l);
          process.env.NODE_ENV !== "production" && kt(l, "render"), process.env.NODE_ENV !== "production" && Lt(l, "patch"), y(null, he, d, g, l, N, I), process.env.NODE_ENV !== "production" && kt(l, "patch"), a.el = he.el;
        }
        if (se && Ye(se, N), !fe && (h = B && B.onVnodeMounted)) {
          const he = a;
          Ye(() => dt(h, pe, he), N);
        }
        (a.shapeFlag & 256 || pe && mo(pe.vnode) && pe.vnode.shapeFlag & 256) && l.a && Ye(l.a, N), l.isMounted = !0, process.env.NODE_ENV !== "production" && Oc(l), a = d = g = null;
      }
    }, U = l.effect = new Ks(
      P,
      () => Ro(S),
      l.scope
    ), S = l.update = () => U.run();
    S.id = l.uid, Yt(l, !0), process.env.NODE_ENV !== "production" && (U.onTrack = l.rtc ? (h) => Sn(l.rtc, h) : void 0, U.onTrigger = l.rtg ? (h) => Sn(l.rtg, h) : void 0, S.ownerInstance = l), S();
  }, K = (l, a, d) => {
    a.component = l;
    const g = l.vnode.props;
    l.vnode = a, l.next = null, mu(l, a.props, g, d), yu(l, a.children, d), un(), Or(), fn();
  }, ue = (l, a, d, g, N, I, F, P, U = !1) => {
    const S = l && l.children, h = l ? l.shapeFlag : 0, v = a.children, { patchFlag: B, shapeFlag: X } = a;
    if (B > 0) {
      if (B & 128) {
        ke(S, v, d, g, N, I, F, P, U);
        return;
      } else if (B & 256) {
        me(S, v, d, g, N, I, F, P, U);
        return;
      }
    }
    X & 8 ? (h & 16 && Fe(S, N, I), v !== S && m(d, v)) : h & 16 ? X & 16 ? ke(S, v, d, g, N, I, F, P, U) : Fe(S, N, I, !0) : (h & 8 && m(d, ""), X & 16 && G(v, d, g, N, I, F, P, U));
  }, me = (l, a, d, g, N, I, F, P, U) => {
    l = l || Nn, a = a || Nn;
    const S = l.length, h = a.length, v = Math.min(S, h);
    let B;
    for (B = 0; B < v; B++) {
      const X = a[B] = U ? Vt(a[B]) : st(a[B]);
      y(l[B], X, d, null, N, I, F, P, U);
    }
    S > h ? Fe(l, N, I, !0, !1, v) : G(a, d, g, N, I, F, P, U, v);
  }, ke = (l, a, d, g, N, I, F, P, U) => {
    let S = 0;
    const h = a.length;
    let v = l.length - 1, B = h - 1;
    for (; S <= v && S <= B; ) {
      const X = l[S], se = a[S] = U ? Vt(a[S]) : st(a[S]);
      if (Xt(X, se))
        y(X, se, d, null, N, I, F, P, U);
      else
        break;
      S++;
    }
    for (; S <= v && S <= B; ) {
      const X = l[v], se = a[B] = U ? Vt(a[B]) : st(a[B]);
      if (Xt(X, se))
        y(X, se, d, null, N, I, F, P, U);
      else
        break;
      v--, B--;
    }
    if (S > v) {
      if (S <= B) {
        const X = B + 1, se = X < h ? a[X].el : g;
        for (; S <= B; )
          y(null, a[S] = U ? Vt(a[S]) : st(a[S]), d, se, N, I, F, P, U), S++;
      }
    } else if (S > B)
      for (; S <= v; )
        Be(l[S], N, I, !0), S++;
    else {
      const X = S, se = S, pe = /* @__PURE__ */ new Map();
      for (S = se; S <= B; S++) {
        const $e = a[S] = U ? Vt(a[S]) : st(a[S]);
        $e.key != null && (process.env.NODE_ENV !== "production" && pe.has($e.key) && R("Duplicate keys found during update:", JSON.stringify($e.key), "Make sure keys are unique."), pe.set($e.key, S));
      }
      let fe, he = 0;
      const ze = B - se + 1;
      let Ot = !1, dr = 0;
      const Dn = new Array(ze);
      for (S = 0; S < ze; S++)
        Dn[S] = 0;
      for (S = X; S <= v; S++) {
        const $e = l[S];
        if (he >= ze) {
          Be($e, N, I, !0);
          continue;
        }
        let ut;
        if ($e.key != null)
          ut = pe.get($e.key);
        else
          for (fe = se; fe <= B; fe++)
            if (Dn[fe - se] === 0 && Xt($e, a[fe])) {
              ut = fe;
              break;
            }
        ut === void 0 ? Be($e, N, I, !0) : (Dn[ut - se] = S + 1, ut >= dr ? dr = ut : Ot = !0, y($e, a[ut], d, null, N, I, F, P, U), he++);
      }
      const pr = Ot ? Du(Dn) : Nn;
      for (fe = pr.length - 1, S = ze - 1; S >= 0; S--) {
        const $e = se + S, ut = a[$e], mr = $e + 1 < h ? a[$e + 1].el : g;
        Dn[S] === 0 ? y(null, ut, d, mr, N, I, F, P, U) : Ot && (fe < 0 || S !== pr[fe] ? Ve(ut, d, mr, 2) : fe--);
      }
    }
  }, Ve = (l, a, d, g, N = null) => {
    const { el: I, type: F, transition: P, children: U, shapeFlag: S } = l;
    if (S & 6) {
      Ve(l.component.subTree, a, d, g);
      return;
    }
    if (S & 128) {
      l.suspense.move(a, d, g);
      return;
    }
    if (S & 64) {
      F.move(l, a, d, xe);
      return;
    }
    if (F === Ce) {
      o(I, a, d);
      for (let v = 0; v < U.length; v++)
        Ve(U[v], a, d, g);
      o(l.anchor, a, d);
      return;
    }
    if (F === Fn) {
      b(l, a, d);
      return;
    }
    if (g !== 2 && S & 1 && P)
      if (g === 0)
        P.beforeEnter(I), o(I, a, d), Ye(() => P.enter(I), N);
      else {
        const { leave: v, delayLeave: B, afterLeave: X } = P, se = () => o(I, a, d), pe = () => {
          v(I, () => {
            se(), X && X();
          });
        };
        B ? B(I, se, pe) : pe();
      }
    else
      o(I, a, d);
  }, Be = (l, a, d, g = !1, N = !1) => {
    const { type: I, props: F, ref: P, children: U, dynamicChildren: S, shapeFlag: h, patchFlag: v, dirs: B } = l;
    if (P != null && vs(P, null, d, l, !0), h & 256) {
      a.ctx.deactivate(l);
      return;
    }
    const X = h & 1 && B, se = !mo(l);
    let pe;
    if (se && (pe = F && F.onVnodeBeforeUnmount) && dt(pe, a, l), h & 6)
      Bt(l.component, d, g);
    else {
      if (h & 128) {
        l.suspense.unmount(d, g);
        return;
      }
      X && Kt(l, null, a, "beforeUnmount"), h & 64 ? l.type.remove(l, a, d, N, xe, g) : S && (I !== Ce || v > 0 && v & 64) ? Fe(S, a, d, !1, !0) : (I === Ce && v & 384 || !N && h & 16) && Fe(U, a, d), g && vt(l);
    }
    (se && (pe = F && F.onVnodeUnmounted) || X) && Ye(() => {
      pe && dt(pe, a, l), X && Kt(l, null, a, "unmounted");
    }, d);
  }, vt = (l) => {
    const { type: a, el: d, anchor: g, transition: N } = l;
    if (a === Ce) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && N && !N.persisted ? l.children.forEach((F) => {
        F.type === Pe ? s(F.el) : vt(F);
      }) : Ht(d, g);
      return;
    }
    if (a === Fn) {
      O(l);
      return;
    }
    const I = () => {
      s(d), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (l.shapeFlag & 1 && N && !N.persisted) {
      const { leave: F, delayLeave: P } = N, U = () => F(d, I);
      P ? P(l.el, I, U) : U();
    } else
      I();
  }, Ht = (l, a) => {
    let d;
    for (; l !== a; )
      d = _(l), s(l), l = d;
    s(a);
  }, Bt = (l, a, d) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Ec(l);
    const { bum: g, scope: N, update: I, subTree: F, um: P } = l;
    g && Sn(g), N.stop(), I && (I.active = !1, Be(F, l, a, d)), P && Ye(P, a), Ye(() => {
      l.isUnmounted = !0;
    }, a), a && a.pendingBranch && !a.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === a.pendingId && (a.deps--, a.deps === 0 && a.resolve()), process.env.NODE_ENV !== "production" && Lc(l);
  }, Fe = (l, a, d, g = !1, N = !1, I = 0) => {
    for (let F = I; F < l.length; F++)
      Be(l[F], a, d, g, N);
  }, Ze = (l) => l.shapeFlag & 6 ? Ze(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : _(l.anchor || l.el), ct = (l, a, d) => {
    l == null ? a._vnode && Be(a._vnode, null, null, !0) : y(a._vnode || null, l, a, null, null, null, d), Or(), tl(), a._vnode = l;
  }, xe = {
    p: y,
    um: Be,
    m: Ve,
    r: vt,
    mt: W,
    mc: G,
    pc: ue,
    pbc: z,
    n: Ze,
    o: e
  };
  let nt, yt;
  return t && ([nt, yt] = t(xe)), {
    render: ct,
    hydrate: nt,
    createApp: Tu(ct, nt)
  };
}
function Yt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function _o(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (Q(o) && Q(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let c = s[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[r] = Vt(s[r]), c.el = i.el), n || _o(i, c)), c.type === Cn && (c.el = i.el), process.env.NODE_ENV !== "production" && c.type === Pe && !c.el && (c.el = i.el);
    }
}
function Du(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const f = e[o];
    if (f !== 0) {
      if (s = n[n.length - 1], e[s] < f) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        c = r + i >> 1, e[n[c]] < f ? r = c + 1 : i = c;
      f < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
const Iu = (e) => e.__isTeleport, Ce = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Cn = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Pe = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Fn = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), xn = [];
let lt = null;
function ie(e = !1) {
  xn.push(lt = e ? null : []);
}
function Su() {
  xn.pop(), lt = xn[xn.length - 1] || null;
}
let Yn = 1;
function Rr(e) {
  Yn += e;
}
function Ll(e) {
  return e.dynamicChildren = Yn > 0 ? lt || Nn : null, Su(), Yn > 0 && lt && lt.push(e), e;
}
function le(e, t, n, o, s, r) {
  return Ll(j(e, t, n, o, s, r, !0));
}
function wu(e, t, n, o, s) {
  return Ll(Me(e, t, n, o, s, !0));
}
function Gn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && mn.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Au = (...e) => Cl(...e), jo = "__vInternal", kl = ({ key: e }) => e != null ? e : null, go = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ve(e) || Te(e) || te(e) ? { i: Je, r: e, k: t, f: !!n } : e : null;
function j(e, t = null, n = null, o = 0, s = null, r = e === Ce ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && kl(t),
    ref: t && go(t),
    scopeId: Fo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Je
  };
  return c ? (nr(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= ve(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && R("VNode created with invalid key (NaN). VNode type:", u.type), Yn > 0 && !i && lt && (u.patchFlag > 0 || r & 6) && u.patchFlag !== 32 && lt.push(u), u;
}
const Me = process.env.NODE_ENV !== "production" ? Au : Cl;
function Cl(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === nu) && (process.env.NODE_ENV !== "production" && !e && R(`Invalid vnode type when creating vnode: ${e}.`), e = Pe), Gn(e)) {
    const c = Et(e, t, !0);
    return n && nr(c, n), Yn > 0 && !r && lt && (c.shapeFlag & 6 ? lt[lt.indexOf(e)] = c : lt.push(c)), c.patchFlag |= -2, c;
  }
  if (Pl(e) && (e = e.__vccOpts), t) {
    t = Pu(t);
    let { class: c, style: u } = t;
    c && !ve(c) && (t.class = Xe(c)), ge(u) && (us(u) && !Q(u) && (u = Oe({}, u)), t.style = $s(u));
  }
  const i = ve(e) ? 1 : xc(e) ? 128 : Iu(e) ? 64 : ge(e) ? 4 : te(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && us(e) && (e = oe(e), R("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), j(e, t, n, o, s, i, r, !0);
}
function Pu(e) {
  return e ? us(e) || jo in e ? Oe({}, e) : e : null;
}
function Et(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = e, c = t ? Ru(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && kl(c),
    ref: t && t.ref ? n && s ? Q(s) ? s.concat(go(t)) : [s, go(t)] : go(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && Q(i) ? i.map(Dl) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ce ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Et(e.ssContent),
    ssFallback: e.ssFallback && Et(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Dl(e) {
  const t = Et(e);
  return Q(e.children) && (t.children = e.children.map(Dl)), t;
}
function Vu(e = " ", t = 0) {
  return Me(Cn, null, e, t);
}
function ft(e = "", t = !1) {
  return t ? (ie(), wu(Pe, null, e)) : Me(Pe, null, e);
}
function st(e) {
  return e == null || typeof e == "boolean" ? Me(Pe) : Q(e) ? Me(
    Ce,
    null,
    e.slice()
  ) : typeof e == "object" ? Vt(e) : Me(Cn, null, String(e));
}
function Vt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Et(e);
}
function nr(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), nr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(jo in t) ? t._ctx = Je : s === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    te(t) ? (t = { default: t, _ctx: Je }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Vu(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ru(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Xe([t.class, o.class]));
      else if (s === "style")
        t.style = $s([t.style, o.style]);
      else if (Qn(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(Q(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
function dt(e, t, n, o = null) {
  tt(e, t, 7, [
    n,
    o
  ]);
}
const Mu = Tl();
let Fu = 0;
function xu(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || Mu, r = {
    uid: Fu++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Si(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: bl(o, s),
    emitsOptions: ll(o, s),
    emit: null,
    emitted: null,
    propsDefaults: Ee,
    inheritAttrs: o.inheritAttrs,
    ctx: Ee,
    data: Ee,
    props: Ee,
    attrs: Ee,
    slots: Ee,
    refs: Ee,
    setupState: Ee,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = ou(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Ic.bind(null, r), e.ce && e.ce(r), r;
}
let ye = null;
const rn = () => ye || Je, Tn = (e) => {
  ye = e, e.scope.on();
}, on = () => {
  ye && ye.scope.off(), ye = null;
}, $u = /* @__PURE__ */ jt("slot,component");
function ys(e, t) {
  const n = t.isNativeTag || Li;
  ($u(e) || n(e)) && R("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Il(e) {
  return e.vnode.shapeFlag & 4;
}
let zn = !1;
function Uu(e, t = !1) {
  zn = t;
  const { props: n, children: o } = e.vnode, s = Il(e);
  du(e, n, s, t), vu(e, o);
  const r = s ? ju(e, t) : void 0;
  return zn = !1, r;
}
function ju(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && ys(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        ys(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        _l(r[i]);
    }
    o.compilerOptions && Sl() && R('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Bi(new Proxy(e.ctx, gl)), process.env.NODE_ENV !== "production" && su(e);
  const { setup: s } = o;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Wu(e) : null;
    Tn(e), un();
    const i = Dt(s, e, 0, [process.env.NODE_ENV !== "production" ? hn(e.props) : e.props, r]);
    if (fn(), on(), Ws(i)) {
      if (i.then(on, on), t)
        return i.then((c) => {
          Mr(e, c, t);
        }).catch((c) => {
          Vo(c, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        R(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Mr(e, i, t);
  } else
    wl(e, t);
}
function Mr(e, t, n) {
  te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) ? (process.env.NODE_ENV !== "production" && Gn(t) && R("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = zi(t), process.env.NODE_ENV !== "production" && ru(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && R(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), wl(e, n);
}
let Os;
const Sl = () => !Os;
function wl(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Os && !o.render) {
      const s = o.template || er(e).template;
      if (s) {
        process.env.NODE_ENV !== "production" && Lt(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = o, f = Oe(Oe({
          isCustomElement: r,
          delimiters: c
        }, i), u);
        o.render = Os(s, f), process.env.NODE_ENV !== "production" && kt(e, "compile");
      }
    }
    e.render = o.render || Ae;
  }
  Tn(e), un(), lu(e), fn(), on(), process.env.NODE_ENV !== "production" && !o.render && e.render === Ae && !t && (o.template ? R('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : R("Component is missing template or render function."));
}
function Fr(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return yo(), He(e, "get", "$attrs"), t[n];
    },
    set() {
      return R("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return R("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return He(e, "get", "$attrs"), t[n];
    }
  });
}
function Wu(e) {
  const t = (o) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && R("expose() should be called only once per setup()."), o != null)) {
      let s = typeof o;
      s === "object" && (Q(o) ? s = "array" : Te(o) && (s = "ref")), s !== "object" && R(`expose() should be passed a plain object, received ${s}.`);
    }
    e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Fr(e));
    },
    get slots() {
      return hn(e.slots);
    },
    get emit() {
      return (o, ...s) => e.emit(o, ...s);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = Fr(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function or(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(zi(Bi(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in nn)
          return nn[n](e);
      },
      has(t, n) {
        return n in t || n in nn;
      }
    }));
}
const Hu = /(?:^|[-_])(\w)/g, Bu = (e) => e.replace(Hu, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Al(e, t = !0) {
  return te(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Wo(e, t, n = !1) {
  let o = Al(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(e.components || e.parent.type.components) || s(e.appContext.components);
  }
  return o ? Bu(o) : n ? "App" : "Anonymous";
}
function Pl(e) {
  return te(e) && "__vccOpts" in e;
}
const rt = (e, t) => lc(e, t, zn);
function Vl(e, t, n) {
  const o = arguments.length;
  return o === 2 ? ge(t) && !Q(t) ? Gn(t) ? Me(e, null, [t]) : Me(e, t) : Me(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Gn(n) && (n = [n]), Me(e, t, n));
}
const Ku = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), Yu = () => {
  {
    const e = Mn(Ku);
    return e || process.env.NODE_ENV !== "production" && R("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Zo(e) {
  return !!(e && e.__v_isShallow);
}
function Gu() {
  if (process.env.NODE_ENV === "production" || typeof window == "undefined")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, s = {
    header(p) {
      return ge(p) ? p.__isVue ? ["div", e, "VueInstance"] : Te(p) ? [
        "div",
        {},
        ["span", e, m(p)],
        "<",
        c(p.value),
        ">"
      ] : Zt(p) ? [
        "div",
        {},
        ["span", e, Zo(p) ? "ShallowReactive" : "Reactive"],
        "<",
        c(p),
        `>${$t(p) ? " (readonly)" : ""}`
      ] : $t(p) ? [
        "div",
        {},
        ["span", e, Zo(p) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(p),
        ">"
      ] : null : null;
    },
    hasBody(p) {
      return p && p.__isVue;
    },
    body(p) {
      if (p && p.__isVue)
        return [
          "div",
          {},
          ...r(p.$)
        ];
    }
  };
  function r(p) {
    const _ = [];
    p.type.props && p.props && _.push(i("props", oe(p.props))), p.setupState !== Ee && _.push(i("setup", p.setupState)), p.data !== Ee && _.push(i("data", oe(p.data)));
    const L = u(p, "computed");
    L && _.push(i("computed", L));
    const k = u(p, "inject");
    return k && _.push(i("injected", k)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: p }]
    ]), _;
  }
  function i(p, _) {
    return _ = Oe({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        p
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((L) => [
          "div",
          {},
          ["span", o, L + ": "],
          c(_[L], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(p, _ = !0) {
    return typeof p == "number" ? ["span", t, p] : typeof p == "string" ? ["span", n, JSON.stringify(p)] : typeof p == "boolean" ? ["span", o, p] : ge(p) ? ["object", { object: _ ? oe(p) : p }] : ["span", n, String(p)];
  }
  function u(p, _) {
    const L = p.type;
    if (te(L))
      return;
    const k = {};
    for (const y in p.ctx)
      f(L, y, _) && (k[y] = p.ctx[y]);
    return k;
  }
  function f(p, _, L) {
    const k = p[L];
    if (Q(k) && k.includes(_) || ge(k) && _ in k || p.extends && f(p.extends, _, L) || p.mixins && p.mixins.some((y) => f(y, _, L)))
      return !0;
  }
  function m(p) {
    return Zo(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const xr = "3.2.47", zu = "http://www.w3.org/2000/svg", qt = typeof document != "undefined" ? document : null, $r = qt && /* @__PURE__ */ qt.createElement("template"), Xu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t ? qt.createElementNS(zu, e) : qt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => qt.createTextNode(e),
  createComment: (e) => qt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => qt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      $r.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = $r.content;
      if (o) {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      i ? i.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function qu(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Ju(e, t, n) {
  const o = e.style, s = ve(n);
  if (n && !s) {
    if (t && !ve(t))
      for (const r in t)
        n[r] == null && Ts(o, r, "");
    for (const r in n)
      Ts(o, r, n[r]);
  } else {
    const r = o.display;
    s ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = r);
  }
}
const Qu = /[^\\];\s*$/, Ur = /\s*!important$/;
function Ts(e, t, n) {
  if (Q(n))
    n.forEach((o) => Ts(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Qu.test(n) && R(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Zu(e, t);
    Ur.test(n) ? e.setProperty(Ft(o), n.replace(Ur, ""), "important") : e[o] = n;
  }
}
const jr = ["Webkit", "Moz", "ms"], es = {};
function Zu(e, t) {
  const n = es[t];
  if (n)
    return n;
  let o = On(t);
  if (o !== "filter" && o in e)
    return es[t] = o;
  o = Do(o);
  for (let s = 0; s < jr.length; s++) {
    const r = jr[s] + o;
    if (r in e)
      return es[t] = r;
  }
  return t;
}
const Wr = "http://www.w3.org/1999/xlink";
function ef(e, t, n, o, s) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Wr, t.slice(6, t.length)) : e.setAttributeNS(Wr, t, n);
  else {
    const r = ba(t);
    n == null || r && !Oi(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function tf(e, t, n, o, s, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, s, r), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const u = n == null ? "" : n;
    (e.value !== u || e.tagName === "OPTION") && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Oi(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !c && R(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, u);
  }
  c && e.removeAttribute(t);
}
function nf(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function of(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function sf(e, t, n, o, s = null) {
  const r = e._vei || (e._vei = {}), i = r[t];
  if (o && i)
    i.value = o;
  else {
    const [c, u] = rf(t);
    if (o) {
      const f = r[t] = cf(o, s);
      nf(e, c, f, u);
    } else
      i && (of(e, c, i, u), r[t] = void 0);
  }
}
const Hr = /(?:Once|Passive|Capture)$/;
function rf(e) {
  let t;
  if (Hr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Hr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ft(e.slice(2)), t];
}
let ts = 0;
const lf = /* @__PURE__ */ Promise.resolve(), af = () => ts || (lf.then(() => ts = 0), ts = Date.now());
function cf(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    tt(uf(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = af(), n;
}
function uf(e, t) {
  if (Q(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (s) => !s._stopped && o && o(s));
  } else
    return t;
}
const Br = /^on[a-z]/, ff = (e, t, n, o, s = !1, r, i, c, u) => {
  t === "class" ? qu(e, o, s) : t === "style" ? Ju(e, n, o) : Qn(t) ? Eo(t) || sf(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : df(e, t, o, s)) ? tf(e, t, o, r, i, c, u) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ef(e, t, o, s));
};
function df(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Br.test(t) && te(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Br.test(t) && ve(n) ? !1 : t in e;
}
function pf(e) {
  const t = rn();
  if (!t) {
    process.env.NODE_ENV !== "production" && R("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (s = e(t.proxy)) => {
    Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((r) => ks(r, s));
  }, o = () => {
    const s = e(t.proxy);
    Ls(t.subTree, s), n(s);
  };
  Wc(o), to(() => {
    const s = new MutationObserver(o);
    s.observe(t.subTree.el.parentNode, { childList: !0 }), Uo(() => s.disconnect());
  });
}
function Ls(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Ls(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    ks(e.el, t);
  else if (e.type === Ce)
    e.children.forEach((n) => Ls(n, t));
  else if (e.type === Fn) {
    let { el: n, anchor: o } = e;
    for (; n && (ks(n, t), n !== o); )
      n = n.nextSibling;
  }
}
function ks(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const o in t)
      n.setProperty(`--${o}`, t[o]);
  }
}
const mf = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Yc.props;
const _f = /* @__PURE__ */ Oe({ patchProp: ff }, Xu);
let Kr;
function gf() {
  return Kr || (Kr = ku(_f));
}
const hf = (...e) => {
  const t = gf().createApp(...e);
  process.env.NODE_ENV !== "production" && (Ef(t), bf(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Nf(o);
    if (!s)
      return;
    const r = t._component;
    !te(r) && !r.render && !r.template && (r.template = s.innerHTML), s.innerHTML = "";
    const i = n(s, !1, s instanceof SVGElement);
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function Ef(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ga(t) || ha(t),
    writable: !1
  });
}
function bf(e) {
  if (Sl()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        R("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return R(o), n;
      },
      set() {
        R(o);
      }
    });
  }
}
function Nf(e) {
  if (ve(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && R(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && R('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function vf() {
  Gu();
}
process.env.NODE_ENV !== "production" && vf();
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const bt = typeof window != "undefined";
let Qe, ln;
if (process.env.NODE_ENV !== "production") {
  const e = bt && window.performance;
  e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (Qe = (t) => e.mark(t), ln = (t, n, o) => {
    e.measure(t, n, o), e.clearMarks(n), e.clearMarks(o);
  });
}
const yf = /\{([0-9a-zA-Z]+)\}/g;
function Ho(e, ...t) {
  return t.length === 1 && _e(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(yf, (n, o) => t.hasOwnProperty(o) ? t[o] : "");
}
const Of = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", Nt = (e) => Of ? Symbol(e) : e, Tf = (e, t, n) => Lf({ l: e, k: t, s: n }), Lf = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), De = (e) => typeof e == "number" && isFinite(e), kf = (e) => rr(e) === "[object Date]", Ut = (e) => rr(e) === "[object RegExp]", Bo = (e) => ne(e) && Object.keys(e).length === 0;
function Ge(e, t) {
  typeof console != "undefined" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const we = Object.assign;
let Yr;
const $n = () => Yr || (Yr = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function Gr(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Cf = Object.prototype.hasOwnProperty;
function sr(e, t) {
  return Cf.call(e, t);
}
const be = Array.isArray, Ne = (e) => typeof e == "function", H = (e) => typeof e == "string", ce = (e) => typeof e == "boolean", _e = (e) => e !== null && typeof e == "object", Rl = Object.prototype.toString, rr = (e) => Rl.call(e), ne = (e) => rr(e) === "[object Object]", Df = (e) => e == null ? "" : be(e) || ne(e) && e.toString === Rl ? JSON.stringify(e, null, 2) : String(e), zr = 2;
function If(e, t = 0, n = e.length) {
  const o = e.split(/\r?\n/);
  let s = 0;
  const r = [];
  for (let i = 0; i < o.length; i++)
    if (s += o[i].length + 1, s >= t) {
      for (let c = i - zr; c <= i + zr || n > s; c++) {
        if (c < 0 || c >= o.length)
          continue;
        const u = c + 1;
        r.push(`${u}${" ".repeat(3 - String(u).length)}|  ${o[c]}`);
        const f = o[c].length;
        if (c === i) {
          const m = t - (s - f) + 1, p = Math.max(1, n > s ? f - m : n - t);
          r.push("   |  " + " ".repeat(m) + "^".repeat(p));
        } else if (c > i) {
          if (n > s) {
            const m = Math.max(Math.min(n - s, f), 1);
            r.push("   |  " + "^".repeat(m));
          }
          s += f + 1;
        }
      }
      break;
    }
  return r.join(`
`);
}
function ir() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, o) {
      const s = e.get(n);
      s && s.push(o) || e.set(n, [o]);
    },
    off(n, o) {
      const s = e.get(n);
      s && s.splice(s.indexOf(o) >>> 0, 1);
    },
    emit(n, o) {
      (e.get(n) || []).slice().map((s) => s(o)), (e.get("*") || []).slice().map((s) => s(n, o));
    }
  };
}
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const ee = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15
}, Sf = {
  [ee.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ee.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ee.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ee.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ee.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ee.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ee.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ee.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ee.INVALID_LINKED_FORMAT]: "Invalid linked format",
  [ee.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ee.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ee.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ee.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'"
};
function Ko(e, t, n = {}) {
  const { domain: o, messages: s, args: r } = n, i = process.env.NODE_ENV !== "production" ? Ho((s || Sf)[e] || "", ...r || []) : e, c = new SyntaxError(String(i));
  return c.code = e, t && (c.location = t), c.domain = o, c;
}
function wf(e) {
  throw e;
}
function Af(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Cs(e, t, n) {
  const o = { start: e, end: t };
  return n != null && (o.source = n), o;
}
const Tt = " ", Pf = "\r", je = `
`, Vf = String.fromCharCode(8232), Rf = String.fromCharCode(8233);
function Mf(e) {
  const t = e;
  let n = 0, o = 1, s = 1, r = 0;
  const i = (V) => t[V] === Pf && t[V + 1] === je, c = (V) => t[V] === je, u = (V) => t[V] === Rf, f = (V) => t[V] === Vf, m = (V) => i(V) || c(V) || u(V) || f(V), p = () => n, _ = () => o, L = () => s, k = () => r, y = (V) => i(V) || u(V) || f(V) ? je : t[V], A = () => y(n), E = () => y(n + r);
  function T() {
    return r = 0, m(n) && (o++, s = 0), i(n) && n++, n++, s++, t[n];
  }
  function C() {
    return i(n + r) && r++, r++, t[n + r];
  }
  function b() {
    n = 0, o = 1, s = 1, r = 0;
  }
  function O(V = 0) {
    r = V;
  }
  function x() {
    const V = n + r;
    for (; V !== n; )
      T();
    r = 0;
  }
  return {
    index: p,
    line: _,
    column: L,
    peekOffset: k,
    charAt: y,
    currentChar: A,
    currentPeek: E,
    next: T,
    peek: C,
    reset: b,
    resetPeek: O,
    skipToPeek: x
  };
}
const At = void 0, Xr = "'", Ff = "tokenizer";
function xf(e, t = {}) {
  const n = t.location !== !1, o = Mf(e), s = () => o.index(), r = () => Af(o.line(), o.column(), o.index()), i = r(), c = s(), u = {
    currentType: 14,
    offset: c,
    startLoc: i,
    endLoc: i,
    lastType: 14,
    lastOffset: c,
    lastStartLoc: i,
    lastEndLoc: i,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, f = () => u, { onError: m } = t;
  function p(l, a, d, ...g) {
    const N = f();
    if (a.column += d, a.offset += d, m) {
      const I = Cs(N.startLoc, a), F = Ko(l, I, {
        domain: Ff,
        args: g
      });
      m(F);
    }
  }
  function _(l, a, d) {
    l.endLoc = r(), l.currentType = a;
    const g = { type: a };
    return n && (g.loc = Cs(l.startLoc, l.endLoc)), d != null && (g.value = d), g;
  }
  const L = (l) => _(l, 14);
  function k(l, a) {
    return l.currentChar() === a ? (l.next(), a) : (p(ee.EXPECTED_TOKEN, r(), 0, a), "");
  }
  function y(l) {
    let a = "";
    for (; l.currentPeek() === Tt || l.currentPeek() === je; )
      a += l.currentPeek(), l.peek();
    return a;
  }
  function A(l) {
    const a = y(l);
    return l.skipToPeek(), a;
  }
  function E(l) {
    if (l === At)
      return !1;
    const a = l.charCodeAt(0);
    return a >= 97 && a <= 122 || a >= 65 && a <= 90 || a === 95;
  }
  function T(l) {
    if (l === At)
      return !1;
    const a = l.charCodeAt(0);
    return a >= 48 && a <= 57;
  }
  function C(l, a) {
    const { currentType: d } = a;
    if (d !== 2)
      return !1;
    y(l);
    const g = E(l.currentPeek());
    return l.resetPeek(), g;
  }
  function b(l, a) {
    const { currentType: d } = a;
    if (d !== 2)
      return !1;
    y(l);
    const g = l.currentPeek() === "-" ? l.peek() : l.currentPeek(), N = T(g);
    return l.resetPeek(), N;
  }
  function O(l, a) {
    const { currentType: d } = a;
    if (d !== 2)
      return !1;
    y(l);
    const g = l.currentPeek() === Xr;
    return l.resetPeek(), g;
  }
  function x(l, a) {
    const { currentType: d } = a;
    if (d !== 8)
      return !1;
    y(l);
    const g = l.currentPeek() === ".";
    return l.resetPeek(), g;
  }
  function V(l, a) {
    const { currentType: d } = a;
    if (d !== 9)
      return !1;
    y(l);
    const g = E(l.currentPeek());
    return l.resetPeek(), g;
  }
  function M(l, a) {
    const { currentType: d } = a;
    if (!(d === 8 || d === 12))
      return !1;
    y(l);
    const g = l.currentPeek() === ":";
    return l.resetPeek(), g;
  }
  function G(l, a) {
    const { currentType: d } = a;
    if (d !== 10)
      return !1;
    const g = () => {
      const I = l.currentPeek();
      return I === "{" ? E(l.peek()) : I === "@" || I === "%" || I === "|" || I === ":" || I === "." || I === Tt || !I ? !1 : I === je ? (l.peek(), g()) : E(I);
    }, N = g();
    return l.resetPeek(), N;
  }
  function J(l) {
    y(l);
    const a = l.currentPeek() === "|";
    return l.resetPeek(), a;
  }
  function z(l) {
    const a = y(l), d = l.currentPeek() === "%" && l.peek() === "{";
    return l.resetPeek(), {
      isModulo: d,
      hasSpace: a.length > 0
    };
  }
  function Y(l, a = !0) {
    const d = (N = !1, I = "", F = !1) => {
      const P = l.currentPeek();
      return P === "{" ? I === "%" ? !1 : N : P === "@" || !P ? I === "%" ? !0 : N : P === "%" ? (l.peek(), d(N, "%", !0)) : P === "|" ? I === "%" || F ? !0 : !(I === Tt || I === je) : P === Tt ? (l.peek(), d(!0, Tt, F)) : P === je ? (l.peek(), d(!0, je, F)) : !0;
    }, g = d();
    return a && l.resetPeek(), g;
  }
  function q(l, a) {
    const d = l.currentChar();
    return d === At ? At : a(d) ? (l.next(), d) : null;
  }
  function re(l) {
    return q(l, (d) => {
      const g = d.charCodeAt(0);
      return g >= 97 && g <= 122 || g >= 65 && g <= 90 || g >= 48 && g <= 57 || g === 95 || g === 36;
    });
  }
  function W(l) {
    return q(l, (d) => {
      const g = d.charCodeAt(0);
      return g >= 48 && g <= 57;
    });
  }
  function D(l) {
    return q(l, (d) => {
      const g = d.charCodeAt(0);
      return g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102;
    });
  }
  function $(l) {
    let a = "", d = "";
    for (; a = W(l); )
      d += a;
    return d;
  }
  function K(l) {
    A(l);
    const a = l.currentChar();
    return a !== "%" && p(ee.EXPECTED_TOKEN, r(), 0, a), l.next(), "%";
  }
  function ue(l) {
    let a = "";
    for (; ; ) {
      const d = l.currentChar();
      if (d === "{" || d === "}" || d === "@" || d === "|" || !d)
        break;
      if (d === "%")
        if (Y(l))
          a += d, l.next();
        else
          break;
      else if (d === Tt || d === je)
        if (Y(l))
          a += d, l.next();
        else {
          if (J(l))
            break;
          a += d, l.next();
        }
      else
        a += d, l.next();
    }
    return a;
  }
  function me(l) {
    A(l);
    let a = "", d = "";
    for (; a = re(l); )
      d += a;
    return l.currentChar() === At && p(ee.UNTERMINATED_CLOSING_BRACE, r(), 0), d;
  }
  function ke(l) {
    A(l);
    let a = "";
    return l.currentChar() === "-" ? (l.next(), a += `-${$(l)}`) : a += $(l), l.currentChar() === At && p(ee.UNTERMINATED_CLOSING_BRACE, r(), 0), a;
  }
  function Ve(l) {
    A(l), k(l, "'");
    let a = "", d = "";
    const g = (I) => I !== Xr && I !== je;
    for (; a = q(l, g); )
      a === "\\" ? d += Be(l) : d += a;
    const N = l.currentChar();
    return N === je || N === At ? (p(ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), N === je && (l.next(), k(l, "'")), d) : (k(l, "'"), d);
  }
  function Be(l) {
    const a = l.currentChar();
    switch (a) {
      case "\\":
      case "'":
        return l.next(), `\\${a}`;
      case "u":
        return vt(l, a, 4);
      case "U":
        return vt(l, a, 6);
      default:
        return p(ee.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, a), "";
    }
  }
  function vt(l, a, d) {
    k(l, a);
    let g = "";
    for (let N = 0; N < d; N++) {
      const I = D(l);
      if (!I) {
        p(ee.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${a}${g}${l.currentChar()}`);
        break;
      }
      g += I;
    }
    return `\\${a}${g}`;
  }
  function Ht(l) {
    A(l);
    let a = "", d = "";
    const g = (N) => N !== "{" && N !== "}" && N !== Tt && N !== je;
    for (; a = q(l, g); )
      d += a;
    return d;
  }
  function Bt(l) {
    let a = "", d = "";
    for (; a = re(l); )
      d += a;
    return d;
  }
  function Fe(l) {
    const a = (d = !1, g) => {
      const N = l.currentChar();
      return N === "{" || N === "%" || N === "@" || N === "|" || !N || N === Tt ? g : N === je ? (g += N, l.next(), a(d, g)) : (g += N, l.next(), a(!0, g));
    };
    return a(!1, "");
  }
  function Ze(l) {
    A(l);
    const a = k(l, "|");
    return A(l), a;
  }
  function ct(l, a) {
    let d = null;
    switch (l.currentChar()) {
      case "{":
        return a.braceNest >= 1 && p(ee.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), l.next(), d = _(a, 2, "{"), A(l), a.braceNest++, d;
      case "}":
        return a.braceNest > 0 && a.currentType === 2 && p(ee.EMPTY_PLACEHOLDER, r(), 0), l.next(), d = _(a, 3, "}"), a.braceNest--, a.braceNest > 0 && A(l), a.inLinked && a.braceNest === 0 && (a.inLinked = !1), d;
      case "@":
        return a.braceNest > 0 && p(ee.UNTERMINATED_CLOSING_BRACE, r(), 0), d = xe(l, a) || L(a), a.braceNest = 0, d;
      default:
        let N = !0, I = !0, F = !0;
        if (J(l))
          return a.braceNest > 0 && p(ee.UNTERMINATED_CLOSING_BRACE, r(), 0), d = _(a, 1, Ze(l)), a.braceNest = 0, a.inLinked = !1, d;
        if (a.braceNest > 0 && (a.currentType === 5 || a.currentType === 6 || a.currentType === 7))
          return p(ee.UNTERMINATED_CLOSING_BRACE, r(), 0), a.braceNest = 0, nt(l, a);
        if (N = C(l, a))
          return d = _(a, 5, me(l)), A(l), d;
        if (I = b(l, a))
          return d = _(a, 6, ke(l)), A(l), d;
        if (F = O(l, a))
          return d = _(a, 7, Ve(l)), A(l), d;
        if (!N && !I && !F)
          return d = _(a, 13, Ht(l)), p(ee.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, d.value), A(l), d;
        break;
    }
    return d;
  }
  function xe(l, a) {
    const { currentType: d } = a;
    let g = null;
    const N = l.currentChar();
    switch ((d === 8 || d === 9 || d === 12 || d === 10) && (N === je || N === Tt) && p(ee.INVALID_LINKED_FORMAT, r(), 0), N) {
      case "@":
        return l.next(), g = _(a, 8, "@"), a.inLinked = !0, g;
      case ".":
        return A(l), l.next(), _(a, 9, ".");
      case ":":
        return A(l), l.next(), _(a, 10, ":");
      default:
        return J(l) ? (g = _(a, 1, Ze(l)), a.braceNest = 0, a.inLinked = !1, g) : x(l, a) || M(l, a) ? (A(l), xe(l, a)) : V(l, a) ? (A(l), _(a, 12, Bt(l))) : G(l, a) ? (A(l), N === "{" ? ct(l, a) || g : _(a, 11, Fe(l))) : (d === 8 && p(ee.INVALID_LINKED_FORMAT, r(), 0), a.braceNest = 0, a.inLinked = !1, nt(l, a));
    }
  }
  function nt(l, a) {
    let d = { type: 14 };
    if (a.braceNest > 0)
      return ct(l, a) || L(a);
    if (a.inLinked)
      return xe(l, a) || L(a);
    switch (l.currentChar()) {
      case "{":
        return ct(l, a) || L(a);
      case "}":
        return p(ee.UNBALANCED_CLOSING_BRACE, r(), 0), l.next(), _(a, 3, "}");
      case "@":
        return xe(l, a) || L(a);
      default:
        if (J(l))
          return d = _(a, 1, Ze(l)), a.braceNest = 0, a.inLinked = !1, d;
        const { isModulo: N, hasSpace: I } = z(l);
        if (N)
          return I ? _(a, 0, ue(l)) : _(a, 4, K(l));
        if (Y(l))
          return _(a, 0, ue(l));
        break;
    }
    return d;
  }
  function yt() {
    const { currentType: l, offset: a, startLoc: d, endLoc: g } = u;
    return u.lastType = l, u.lastOffset = a, u.lastStartLoc = d, u.lastEndLoc = g, u.offset = s(), u.startLoc = r(), o.currentChar() === At ? _(u, 14) : nt(o, u);
  }
  return {
    nextToken: yt,
    currentOffset: s,
    currentPosition: r,
    context: f
  };
}
const $f = "parser", Uf = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function jf(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const o = parseInt(t || n, 16);
      return o <= 55295 || o >= 57344 ? String.fromCodePoint(o) : "�";
    }
  }
}
function Wf(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function o(E, T, C, b, ...O) {
    const x = E.currentPosition();
    if (x.offset += b, x.column += b, n) {
      const V = Cs(C, x), M = Ko(T, V, {
        domain: $f,
        args: O
      });
      n(M);
    }
  }
  function s(E, T, C) {
    const b = {
      type: E,
      start: T,
      end: T
    };
    return t && (b.loc = { start: C, end: C }), b;
  }
  function r(E, T, C, b) {
    E.end = T, b && (E.type = b), t && E.loc && (E.loc.end = C);
  }
  function i(E, T) {
    const C = E.context(), b = s(3, C.offset, C.startLoc);
    return b.value = T, r(b, E.currentOffset(), E.currentPosition()), b;
  }
  function c(E, T) {
    const C = E.context(), { lastOffset: b, lastStartLoc: O } = C, x = s(5, b, O);
    return x.index = parseInt(T, 10), E.nextToken(), r(x, E.currentOffset(), E.currentPosition()), x;
  }
  function u(E, T) {
    const C = E.context(), { lastOffset: b, lastStartLoc: O } = C, x = s(4, b, O);
    return x.key = T, E.nextToken(), r(x, E.currentOffset(), E.currentPosition()), x;
  }
  function f(E, T) {
    const C = E.context(), { lastOffset: b, lastStartLoc: O } = C, x = s(9, b, O);
    return x.value = T.replace(Uf, jf), E.nextToken(), r(x, E.currentOffset(), E.currentPosition()), x;
  }
  function m(E) {
    const T = E.nextToken(), C = E.context(), { lastOffset: b, lastStartLoc: O } = C, x = s(8, b, O);
    return T.type !== 12 ? (o(E, ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, C.lastStartLoc, 0), x.value = "", r(x, b, O), {
      nextConsumeToken: T,
      node: x
    }) : (T.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, pt(T)), x.value = T.value || "", r(x, E.currentOffset(), E.currentPosition()), {
      node: x
    });
  }
  function p(E, T) {
    const C = E.context(), b = s(7, C.offset, C.startLoc);
    return b.value = T, r(b, E.currentOffset(), E.currentPosition()), b;
  }
  function _(E) {
    const T = E.context(), C = s(6, T.offset, T.startLoc);
    let b = E.nextToken();
    if (b.type === 9) {
      const O = m(E);
      C.modifier = O.node, b = O.nextConsumeToken || E.nextToken();
    }
    switch (b.type !== 10 && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, pt(b)), b = E.nextToken(), b.type === 2 && (b = E.nextToken()), b.type) {
      case 11:
        b.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, pt(b)), C.key = p(E, b.value || "");
        break;
      case 5:
        b.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, pt(b)), C.key = u(E, b.value || "");
        break;
      case 6:
        b.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, pt(b)), C.key = c(E, b.value || "");
        break;
      case 7:
        b.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, pt(b)), C.key = f(E, b.value || "");
        break;
      default:
        o(E, ee.UNEXPECTED_EMPTY_LINKED_KEY, T.lastStartLoc, 0);
        const O = E.context(), x = s(7, O.offset, O.startLoc);
        return x.value = "", r(x, O.offset, O.startLoc), C.key = x, r(C, O.offset, O.startLoc), {
          nextConsumeToken: b,
          node: C
        };
    }
    return r(C, E.currentOffset(), E.currentPosition()), {
      node: C
    };
  }
  function L(E) {
    const T = E.context(), C = T.currentType === 1 ? E.currentOffset() : T.offset, b = T.currentType === 1 ? T.endLoc : T.startLoc, O = s(2, C, b);
    O.items = [];
    let x = null;
    do {
      const G = x || E.nextToken();
      switch (x = null, G.type) {
        case 0:
          G.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, pt(G)), O.items.push(i(E, G.value || ""));
          break;
        case 6:
          G.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, pt(G)), O.items.push(c(E, G.value || ""));
          break;
        case 5:
          G.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, pt(G)), O.items.push(u(E, G.value || ""));
          break;
        case 7:
          G.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, pt(G)), O.items.push(f(E, G.value || ""));
          break;
        case 8:
          const J = _(E);
          O.items.push(J.node), x = J.nextConsumeToken || null;
          break;
      }
    } while (T.currentType !== 14 && T.currentType !== 1);
    const V = T.currentType === 1 ? T.lastOffset : E.currentOffset(), M = T.currentType === 1 ? T.lastEndLoc : E.currentPosition();
    return r(O, V, M), O;
  }
  function k(E, T, C, b) {
    const O = E.context();
    let x = b.items.length === 0;
    const V = s(1, T, C);
    V.cases = [], V.cases.push(b);
    do {
      const M = L(E);
      x || (x = M.items.length === 0), V.cases.push(M);
    } while (O.currentType !== 14);
    return x && o(E, ee.MUST_HAVE_MESSAGES_IN_PLURAL, C, 0), r(V, E.currentOffset(), E.currentPosition()), V;
  }
  function y(E) {
    const T = E.context(), { offset: C, startLoc: b } = T, O = L(E);
    return T.currentType === 14 ? O : k(E, C, b, O);
  }
  function A(E) {
    const T = xf(E, we({}, e)), C = T.context(), b = s(0, C.offset, C.startLoc);
    return t && b.loc && (b.loc.source = E), b.body = y(T), C.currentType !== 14 && o(T, ee.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, E[C.offset] || ""), r(b, T.currentOffset(), T.currentPosition()), b;
  }
  return { parse: A };
}
function pt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Hf(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (r) => (n.helpers.add(r), r) };
}
function qr(e, t) {
  for (let n = 0; n < e.length; n++)
    lr(e[n], t);
}
function lr(e, t) {
  switch (e.type) {
    case 1:
      qr(e.cases, t), t.helper("plural");
      break;
    case 2:
      qr(e.items, t);
      break;
    case 6:
      lr(e.key, t), t.helper("linked"), t.helper("type");
      break;
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
      break;
  }
}
function Bf(e, t = {}) {
  const n = Hf(e);
  n.helper("normalize"), e.body && lr(e.body, n);
  const o = n.context();
  e.helpers = Array.from(o.helpers);
}
function Kf(e, t) {
  const { sourceMap: n, filename: o, breakLineCode: s, needIndent: r } = t, i = {
    source: e.loc.source,
    filename: o,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: r,
    indentLevel: 0
  }, c = () => i;
  function u(y, A) {
    i.code += y;
  }
  function f(y, A = !0) {
    const E = A ? s : "";
    u(r ? E + "  ".repeat(y) : E);
  }
  function m(y = !0) {
    const A = ++i.indentLevel;
    y && f(A);
  }
  function p(y = !0) {
    const A = --i.indentLevel;
    y && f(A);
  }
  function _() {
    f(i.indentLevel);
  }
  return {
    context: c,
    push: u,
    indent: m,
    deindent: p,
    newline: _,
    helper: (y) => `_${y}`,
    needIndent: () => i.needIndent
  };
}
function Yf(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`), Ln(e, t.key), t.modifier ? (e.push(", "), Ln(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Gf(e, t) {
  const { helper: n, needIndent: o } = e;
  e.push(`${n("normalize")}([`), e.indent(o());
  const s = t.items.length;
  for (let r = 0; r < s && (Ln(e, t.items[r]), r !== s - 1); r++)
    e.push(", ");
  e.deindent(o()), e.push("])");
}
function zf(e, t) {
  const { helper: n, needIndent: o } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(o());
    const s = t.cases.length;
    for (let r = 0; r < s && (Ln(e, t.cases[r]), r !== s - 1); r++)
      e.push(", ");
    e.deindent(o()), e.push("])");
  }
}
function Xf(e, t) {
  t.body ? Ln(e, t.body) : e.push("null");
}
function Ln(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Xf(e, t);
      break;
    case 1:
      zf(e, t);
      break;
    case 2:
      Gf(e, t);
      break;
    case 6:
      Yf(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        throw new Error(`unhandled codegen node type: ${t.type}`);
  }
}
const qf = (e, t = {}) => {
  const n = H(t.mode) ? t.mode : "normal", o = H(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, i = t.needIndent ? t.needIndent : n !== "arrow", c = e.helpers || [], u = Kf(e, {
    mode: n,
    filename: o,
    sourceMap: s,
    breakLineCode: r,
    needIndent: i
  });
  u.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(i), c.length > 0 && (u.push(`const { ${c.map((p) => `${p}: _${p}`).join(", ")} } = ctx`), u.newline()), u.push("return "), Ln(u, e), u.deindent(i), u.push("}");
  const { code: f, map: m } = u.context();
  return {
    ast: e,
    code: f,
    map: m ? m.toJSON() : void 0
  };
};
function Jf(e, t = {}) {
  const n = we({}, t), s = Wf(n).parse(e);
  return Bf(s, n), qf(s, n);
}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ml = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Wt = [];
Wt[0] = {
  w: [0],
  i: [3, 0],
  ["["]: [4],
  o: [7]
};
Wt[1] = {
  w: [1],
  ["."]: [2],
  ["["]: [4],
  o: [7]
};
Wt[2] = {
  w: [2],
  i: [3, 0],
  [0]: [3, 0]
};
Wt[3] = {
  i: [3, 0],
  [0]: [3, 0],
  w: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  o: [7, 1]
};
Wt[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [
    4,
    2
  ],
  ["]"]: [1, 3],
  o: 8,
  l: [4, 0]
};
Wt[5] = {
  ["'"]: [4, 0],
  o: 8,
  l: [5, 0]
};
Wt[6] = {
  ['"']: [4, 0],
  o: 8,
  l: [6, 0]
};
const Qf = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Zf(e) {
  return Qf.test(e);
}
function ed(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function td(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function nd(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Zf(t) ? ed(t) : "*" + t;
}
function od(e) {
  const t = [];
  let n = -1, o = 0, s = 0, r, i, c, u, f, m, p;
  const _ = [];
  _[0] = () => {
    i === void 0 ? i = c : i += c;
  }, _[1] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, _[2] = () => {
    _[0](), s++;
  }, _[3] = () => {
    if (s > 0)
      s--, o = 4, _[0]();
    else {
      if (s = 0, i === void 0 || (i = nd(i), i === !1))
        return !1;
      _[1]();
    }
  };
  function L() {
    const k = e[n + 1];
    if (o === 5 && k === "'" || o === 6 && k === '"')
      return n++, c = "\\" + k, _[0](), !0;
  }
  for (; o !== null; )
    if (n++, r = e[n], !(r === "\\" && L())) {
      if (u = td(r), p = Wt[o], f = p[u] || p.l || 8, f === 8 || (o = f[0], f[1] !== void 0 && (m = _[f[1]], m && (c = r, m() === !1))))
        return;
      if (o === 7)
        return t;
    }
}
const Jr = /* @__PURE__ */ new Map();
function sd(e, t) {
  return _e(e) ? e[t] : null;
}
function rd(e, t) {
  if (!_e(e))
    return null;
  let n = Jr.get(t);
  if (n || (n = od(t), n && Jr.set(t, n)), !n)
    return null;
  const o = n.length;
  let s = e, r = 0;
  for (; r < o; ) {
    const i = s[n[r]];
    if (i === void 0)
      return null;
    s = i, r++;
  }
  return s;
}
const id = (e) => e, ld = (e) => "", ad = "text", cd = (e) => e.length === 0 ? "" : e.join(""), ud = Df;
function Qr(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function fd(e) {
  const t = De(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (De(e.named.count) || De(e.named.n)) ? De(e.named.count) ? e.named.count : De(e.named.n) ? e.named.n : t : t;
}
function dd(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function pd(e = {}) {
  const t = e.locale, n = fd(e), o = _e(e.pluralRules) && H(t) && Ne(e.pluralRules[t]) ? e.pluralRules[t] : Qr, s = _e(e.pluralRules) && H(t) && Ne(e.pluralRules[t]) ? Qr : void 0, r = (E) => E[o(n, E.length, s)], i = e.list || [], c = (E) => i[E], u = e.named || {};
  De(e.pluralIndex) && dd(n, u);
  const f = (E) => u[E];
  function m(E) {
    const T = Ne(e.messages) ? e.messages(E) : _e(e.messages) ? e.messages[E] : !1;
    return T || (e.parent ? e.parent.message(E) : ld);
  }
  const p = (E) => e.modifiers ? e.modifiers[E] : id, _ = ne(e.processor) && Ne(e.processor.normalize) ? e.processor.normalize : cd, L = ne(e.processor) && Ne(e.processor.interpolate) ? e.processor.interpolate : ud, k = ne(e.processor) && H(e.processor.type) ? e.processor.type : ad, A = {
    list: c,
    named: f,
    plural: r,
    linked: (E, ...T) => {
      const [C, b] = T;
      let O = "text", x = "";
      T.length === 1 ? _e(C) ? (x = C.modifier || x, O = C.type || O) : H(C) && (x = C || x) : T.length === 2 && (H(C) && (x = C || x), H(b) && (O = b || O));
      let V = m(E)(A);
      return O === "vnode" && be(V) && x && (V = V[0]), x ? p(x)(V, O) : V;
    },
    message: m,
    type: k,
    interpolate: L,
    normalize: _
  };
  return A;
}
let Xn = null;
function md(e) {
  Xn = e;
}
function _d(e, t, n) {
  Xn && Xn.emit(Ml.I18nInit, {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const gd = /* @__PURE__ */ hd(Ml.FunctionTranslate);
function hd(e) {
  return (t) => Xn && Xn.emit(e, t);
}
const qe = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
}, Ed = {
  [qe.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [qe.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [qe.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [qe.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [qe.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [qe.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
};
function kn(e, ...t) {
  return Ho(Ed[e], ...t);
}
function bd(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...be(t) ? t : _e(t) ? Object.keys(t) : H(t) ? [t] : [n]
  ])];
}
function Fl(e, t, n) {
  const o = H(n) ? n : no, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let r = s.__localeChainCache.get(o);
  if (!r) {
    r = [];
    let i = [n];
    for (; be(i); )
      i = Zr(r, i, t);
    const c = be(t) || !ne(t) ? t : t.default ? t.default : null;
    i = H(c) ? [c] : c, be(i) && Zr(r, i, !1), s.__localeChainCache.set(o, r);
  }
  return r;
}
function Zr(e, t, n) {
  let o = !0;
  for (let s = 0; s < t.length && ce(o); s++) {
    const r = t[s];
    H(r) && (o = Nd(e, t[s], n));
  }
  return o;
}
function Nd(e, t, n) {
  let o;
  const s = t.split("-");
  do {
    const r = s.join("-");
    o = vd(e, r, n), s.splice(-1, 1);
  } while (s.length && o === !0);
  return o;
}
function vd(e, t, n) {
  let o = !1;
  if (!e.includes(t) && (o = !0, t)) {
    o = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (be(n) || ne(n)) && n[s] && (o = n[s]);
  }
  return o;
}
const yd = "9.2.2", Yo = -1, no = "en-US", Lo = "", ei = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Od() {
  return {
    upper: (e, t) => t === "text" && H(e) ? e.toUpperCase() : t === "vnode" && _e(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && H(e) ? e.toLowerCase() : t === "vnode" && _e(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && H(e) ? ei(e) : t === "vnode" && _e(e) && "__v_isVNode" in e ? ei(e.children) : e
  };
}
let xl;
function Td(e) {
  xl = e;
}
let $l;
function Ld(e) {
  $l = e;
}
let Ul;
function kd(e) {
  Ul = e;
}
let jl = null;
const ti = (e) => {
  jl = e;
}, Cd = () => jl;
let Wl = null;
const ni = (e) => {
  Wl = e;
}, Dd = () => Wl;
let oi = 0;
function Id(e = {}) {
  const t = H(e.version) ? e.version : yd, n = H(e.locale) ? e.locale : no, o = be(e.fallbackLocale) || ne(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n, s = ne(e.messages) ? e.messages : { [n]: {} }, r = ne(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} }, i = ne(e.numberFormats) ? e.numberFormats : { [n]: {} }, c = we({}, e.modifiers || {}, Od()), u = e.pluralRules || {}, f = Ne(e.missing) ? e.missing : null, m = ce(e.missingWarn) || Ut(e.missingWarn) ? e.missingWarn : !0, p = ce(e.fallbackWarn) || Ut(e.fallbackWarn) ? e.fallbackWarn : !0, _ = !!e.fallbackFormat, L = !!e.unresolving, k = Ne(e.postTranslation) ? e.postTranslation : null, y = ne(e.processor) ? e.processor : null, A = ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, T = Ne(e.messageCompiler) ? e.messageCompiler : xl, C = Ne(e.messageResolver) ? e.messageResolver : $l || sd, b = Ne(e.localeFallbacker) ? e.localeFallbacker : Ul || bd, O = _e(e.fallbackContext) ? e.fallbackContext : void 0, x = Ne(e.onWarn) ? e.onWarn : Ge, V = e, M = _e(V.__datetimeFormatters) ? V.__datetimeFormatters : /* @__PURE__ */ new Map(), G = _e(V.__numberFormatters) ? V.__numberFormatters : /* @__PURE__ */ new Map(), J = _e(V.__meta) ? V.__meta : {};
  oi++;
  const z = {
    version: t,
    cid: oi,
    locale: n,
    fallbackLocale: o,
    messages: s,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: m,
    fallbackWarn: p,
    fallbackFormat: _,
    unresolving: L,
    postTranslation: k,
    processor: y,
    warnHtmlMessage: A,
    escapeParameter: E,
    messageCompiler: T,
    messageResolver: C,
    localeFallbacker: b,
    fallbackContext: O,
    onWarn: x,
    __meta: J
  };
  return z.datetimeFormats = r, z.numberFormats = i, z.__datetimeFormatters = M, z.__numberFormatters = G, process.env.NODE_ENV !== "production" && (z.__v_emitter = V.__v_emitter != null ? V.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && _d(z, t, J), z;
}
function Go(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Hl(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function ar(e, t, n, o, s) {
  const { missing: r, onWarn: i } = e;
  if (process.env.NODE_ENV !== "production") {
    const c = e.__v_emitter;
    c && c.emit("missing", {
      locale: n,
      key: t,
      type: s,
      groupId: `${s}:${t}`
    });
  }
  if (r !== null) {
    const c = r(e, n, t, s);
    return H(c) ? c : t;
  } else
    return process.env.NODE_ENV !== "production" && Hl(o, t) && i(kn(qe.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function An(e, t, n) {
  const o = e;
  o.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
const Sd = /<\/?[\w\s="/.':;#-\/]+>/, wd = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Ad(e, t) {
  (ce(t.warnHtmlMessage) ? t.warnHtmlMessage : !0) && Sd.test(e) && Ge(Ho(wd, { source: e }));
}
const Pd = (e) => e;
let si = /* @__PURE__ */ Object.create(null);
function Vd(e, t = {}) {
  {
    process.env.NODE_ENV !== "production" && Ad(e, t);
    const o = (t.onCacheKey || Pd)(e), s = si[o];
    if (s)
      return s;
    let r = !1;
    const i = t.onError || wf;
    t.onError = (f) => {
      r = !0, i(f);
    };
    const { code: c } = Jf(e, t), u = new Function(`return ${c}`)();
    return r ? u : si[o] = u;
  }
}
let Bl = ee.__EXTEND_POINT__;
const ns = () => ++Bl, Ct = {
  INVALID_ARGUMENT: Bl,
  INVALID_DATE_ARGUMENT: ns(),
  INVALID_ISO_DATE_ARGUMENT: ns(),
  __EXTEND_POINT__: ns()
};
function bn(e) {
  return Ko(e, null, process.env.NODE_ENV !== "production" ? { messages: Rd } : void 0);
}
const Rd = {
  [Ct.INVALID_ARGUMENT]: "Invalid arguments",
  [Ct.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ct.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
}, ri = () => "", _t = (e) => Ne(e);
function ii(e, ...t) {
  const { fallbackFormat: n, postTranslation: o, unresolving: s, messageCompiler: r, fallbackLocale: i, messages: c } = e, [u, f] = Ds(...t), m = ce(f.missingWarn) ? f.missingWarn : e.missingWarn, p = ce(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, _ = ce(f.escapeParameter) ? f.escapeParameter : e.escapeParameter, L = !!f.resolvedMessage, k = H(f.default) || ce(f.default) ? ce(f.default) ? r ? u : () => u : f.default : n ? r ? u : () => u : "", y = n || k !== "", A = H(f.locale) ? f.locale : e.locale;
  _ && Md(f);
  let [E, T, C] = L ? [
    u,
    A,
    c[A] || {}
  ] : Kl(e, u, A, i, p, m), b = E, O = u;
  if (!L && !(H(b) || _t(b)) && y && (b = k, O = b), !L && (!(H(b) || _t(b)) || !H(T)))
    return s ? Yo : u;
  if (process.env.NODE_ENV !== "production" && H(b) && e.messageCompiler == null)
    return Ge(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let x = !1;
  const V = () => {
    x = !0;
  }, M = _t(b) ? b : Yl(e, u, T, b, O, V);
  if (x)
    return b;
  const G = $d(e, T, C, f), J = pd(G), z = Fd(e, M, J), Y = o ? o(z, u) : z;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const q = {
      timestamp: Date.now(),
      key: H(u) ? u : _t(b) ? b.key : "",
      locale: T || (_t(b) ? b.locale : ""),
      format: H(b) ? b : _t(b) ? b.source : "",
      message: Y
    };
    q.meta = we({}, e.__meta, Cd() || {}), gd(q);
  }
  return Y;
}
function Md(e) {
  be(e.list) ? e.list = e.list.map((t) => H(t) ? Gr(t) : t) : _e(e.named) && Object.keys(e.named).forEach((t) => {
    H(e.named[t]) && (e.named[t] = Gr(e.named[t]));
  });
}
function Kl(e, t, n, o, s, r) {
  const { messages: i, onWarn: c, messageResolver: u, localeFallbacker: f } = e, m = f(e, o, n);
  let p = {}, _, L = null, k = n, y = null;
  const A = "translate";
  for (let E = 0; E < m.length; E++) {
    if (_ = y = m[E], process.env.NODE_ENV !== "production" && n !== _ && Go(s, t) && c(kn(qe.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: _
    })), process.env.NODE_ENV !== "production" && n !== _) {
      const x = e.__v_emitter;
      x && x.emit("fallback", {
        type: A,
        key: t,
        from: k,
        to: y,
        groupId: `${A}:${t}`
      });
    }
    p = i[_] || {};
    let T = null, C, b;
    if (process.env.NODE_ENV !== "production" && bt && (T = window.performance.now(), C = "intlify-message-resolve-start", b = "intlify-message-resolve-end", Qe && Qe(C)), (L = u(p, t)) === null && (L = p[t]), process.env.NODE_ENV !== "production" && bt) {
      const x = window.performance.now(), V = e.__v_emitter;
      V && T && L && V.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: L,
        time: x - T,
        groupId: `${A}:${t}`
      }), C && b && Qe && ln && (Qe(b), ln("intlify message resolve", C, b));
    }
    if (H(L) || Ne(L))
      break;
    const O = ar(
      e,
      t,
      _,
      r,
      A
    );
    O !== t && (L = O), k = y;
  }
  return [L, _, p];
}
function Yl(e, t, n, o, s, r) {
  const { messageCompiler: i, warnHtmlMessage: c } = e;
  if (_t(o)) {
    const _ = o;
    return _.locale = _.locale || n, _.key = _.key || t, _;
  }
  if (i == null) {
    const _ = () => o;
    return _.locale = n, _.key = t, _;
  }
  let u = null, f, m;
  process.env.NODE_ENV !== "production" && bt && (u = window.performance.now(), f = "intlify-message-compilation-start", m = "intlify-message-compilation-end", Qe && Qe(f));
  const p = i(o, xd(e, n, s, o, c, r));
  if (process.env.NODE_ENV !== "production" && bt) {
    const _ = window.performance.now(), L = e.__v_emitter;
    L && u && L.emit("message-compilation", {
      type: "message-compilation",
      message: o,
      time: _ - u,
      groupId: `translate:${t}`
    }), f && m && Qe && ln && (Qe(m), ln("intlify message compilation", f, m));
  }
  return p.locale = n, p.key = t, p.source = o, p;
}
function Fd(e, t, n) {
  let o = null, s, r;
  process.env.NODE_ENV !== "production" && bt && (o = window.performance.now(), s = "intlify-message-evaluation-start", r = "intlify-message-evaluation-end", Qe && Qe(s));
  const i = t(n);
  if (process.env.NODE_ENV !== "production" && bt) {
    const c = window.performance.now(), u = e.__v_emitter;
    u && o && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: i,
      time: c - o,
      groupId: `translate:${t.key}`
    }), s && r && Qe && ln && (Qe(r), ln("intlify message evaluation", s, r));
  }
  return i;
}
function Ds(...e) {
  const [t, n, o] = e, s = {};
  if (!H(t) && !De(t) && !_t(t))
    throw bn(Ct.INVALID_ARGUMENT);
  const r = De(t) ? String(t) : (_t(t), t);
  return De(n) ? s.plural = n : H(n) ? s.default = n : ne(n) && !Bo(n) ? s.named = n : be(n) && (s.list = n), De(o) ? s.plural = o : H(o) ? s.default = o : ne(o) && we(s, o), [r, s];
}
function xd(e, t, n, o, s, r) {
  return {
    warnHtmlMessage: s,
    onError: (i) => {
      if (r && r(i), process.env.NODE_ENV !== "production") {
        const c = `Message compilation error: ${i.message}`, u = i.location && If(o, i.location.start.offset, i.location.end.offset), f = e.__v_emitter;
        f && f.emit("compile-error", {
          message: o,
          error: i.message,
          start: i.location && i.location.start.offset,
          end: i.location && i.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(u ? `${c}
${u}` : c);
      } else
        throw i;
    },
    onCacheKey: (i) => Tf(t, n, i)
  };
}
function $d(e, t, n, o) {
  const { modifiers: s, pluralRules: r, messageResolver: i, fallbackLocale: c, fallbackWarn: u, missingWarn: f, fallbackContext: m } = e, _ = {
    locale: t,
    modifiers: s,
    pluralRules: r,
    messages: (L) => {
      let k = i(n, L);
      if (k == null && m) {
        const [, , y] = Kl(m, L, t, c, u, f);
        k = i(y, L);
      }
      if (H(k)) {
        let y = !1;
        const E = Yl(e, L, t, k, L, () => {
          y = !0;
        });
        return y ? ri : E;
      } else
        return _t(k) ? k : ri;
    }
  };
  return e.processor && (_.processor = e.processor), o.list && (_.list = o.list), o.named && (_.named = o.named), De(o.plural) && (_.pluralIndex = o.plural), _;
}
const li = typeof Intl != "undefined", Gl = {
  dateTimeFormat: li && typeof Intl.DateTimeFormat != "undefined",
  numberFormat: li && typeof Intl.NumberFormat != "undefined"
};
function ai(e, ...t) {
  const { datetimeFormats: n, unresolving: o, fallbackLocale: s, onWarn: r, localeFallbacker: i } = e, { __datetimeFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !Gl.dateTimeFormat)
    return r(kn(qe.CANNOT_FORMAT_DATE)), Lo;
  const [u, f, m, p] = Is(...t), _ = ce(m.missingWarn) ? m.missingWarn : e.missingWarn, L = ce(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, k = !!m.part, y = H(m.locale) ? m.locale : e.locale, A = i(
    e,
    s,
    y
  );
  if (!H(u) || u === "")
    return new Intl.DateTimeFormat(y, p).format(f);
  let E = {}, T, C = null, b = y, O = null;
  const x = "datetime format";
  for (let G = 0; G < A.length; G++) {
    if (T = O = A[G], process.env.NODE_ENV !== "production" && y !== T && Go(L, u) && r(kn(qe.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: T
    })), process.env.NODE_ENV !== "production" && y !== T) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: x,
        key: u,
        from: b,
        to: O,
        groupId: `${x}:${u}`
      });
    }
    if (E = n[T] || {}, C = E[u], ne(C))
      break;
    ar(e, u, T, _, x), b = O;
  }
  if (!ne(C) || !H(T))
    return o ? Yo : u;
  let V = `${T}__${u}`;
  Bo(p) || (V = `${V}__${JSON.stringify(p)}`);
  let M = c.get(V);
  return M || (M = new Intl.DateTimeFormat(T, we({}, C, p)), c.set(V, M)), k ? M.formatToParts(f) : M.format(f);
}
const zl = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function Is(...e) {
  const [t, n, o, s] = e, r = {};
  let i = {}, c;
  if (H(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw bn(Ct.INVALID_ISO_DATE_ARGUMENT);
    const f = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    c = new Date(f);
    try {
      c.toISOString();
    } catch (m) {
      throw bn(Ct.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (kf(t)) {
    if (isNaN(t.getTime()))
      throw bn(Ct.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (De(t))
    c = t;
  else
    throw bn(Ct.INVALID_ARGUMENT);
  return H(n) ? r.key = n : ne(n) && Object.keys(n).forEach((u) => {
    zl.includes(u) ? i[u] = n[u] : r[u] = n[u];
  }), H(o) ? r.locale = o : ne(o) && (i = o), ne(s) && (i = s), [r.key || "", c, r, i];
}
function ci(e, t, n) {
  const o = e;
  for (const s in n) {
    const r = `${t}__${s}`;
    o.__datetimeFormatters.has(r) && o.__datetimeFormatters.delete(r);
  }
}
function ui(e, ...t) {
  const { numberFormats: n, unresolving: o, fallbackLocale: s, onWarn: r, localeFallbacker: i } = e, { __numberFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !Gl.numberFormat)
    return r(kn(qe.CANNOT_FORMAT_NUMBER)), Lo;
  const [u, f, m, p] = Ss(...t), _ = ce(m.missingWarn) ? m.missingWarn : e.missingWarn, L = ce(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, k = !!m.part, y = H(m.locale) ? m.locale : e.locale, A = i(
    e,
    s,
    y
  );
  if (!H(u) || u === "")
    return new Intl.NumberFormat(y, p).format(f);
  let E = {}, T, C = null, b = y, O = null;
  const x = "number format";
  for (let G = 0; G < A.length; G++) {
    if (T = O = A[G], process.env.NODE_ENV !== "production" && y !== T && Go(L, u) && r(kn(qe.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: T
    })), process.env.NODE_ENV !== "production" && y !== T) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: x,
        key: u,
        from: b,
        to: O,
        groupId: `${x}:${u}`
      });
    }
    if (E = n[T] || {}, C = E[u], ne(C))
      break;
    ar(e, u, T, _, x), b = O;
  }
  if (!ne(C) || !H(T))
    return o ? Yo : u;
  let V = `${T}__${u}`;
  Bo(p) || (V = `${V}__${JSON.stringify(p)}`);
  let M = c.get(V);
  return M || (M = new Intl.NumberFormat(T, we({}, C, p)), c.set(V, M)), k ? M.formatToParts(f) : M.format(f);
}
const Xl = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function Ss(...e) {
  const [t, n, o, s] = e, r = {};
  let i = {};
  if (!De(t))
    throw bn(Ct.INVALID_ARGUMENT);
  const c = t;
  return H(n) ? r.key = n : ne(n) && Object.keys(n).forEach((u) => {
    Xl.includes(u) ? i[u] = n[u] : r[u] = n[u];
  }), H(o) ? r.locale = o : ne(o) && (i = o), ne(s) && (i = s), [r.key || "", c, r, i];
}
function fi(e, t, n) {
  const o = e;
  for (const s in n) {
    const r = `${t}__${s}`;
    o.__numberFormatters.has(r) && o.__numberFormatters.delete(r);
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && ($n().__INTLIFY_PROD_DEVTOOLS__ = !1);
function Ud() {
  return ql().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ql() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const jd = typeof Proxy == "function", Wd = "devtools-plugin:setup", Hd = "plugin:settings:set";
let dn, ws;
function Bd() {
  var e;
  return dn !== void 0 || (typeof window != "undefined" && window.performance ? (dn = !0, ws = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (dn = !0, ws = global.perf_hooks.performance) : dn = !1), dn;
}
function Kd() {
  return Bd() ? ws.now() : Date.now();
}
class Yd {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const c = t.settings[i];
        o[i] = c.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let r = Object.assign({}, o);
    try {
      const i = localStorage.getItem(s), c = JSON.parse(i);
      Object.assign(r, c);
    } catch (i) {
    }
    this.fallbacks = {
      getSettings() {
        return r;
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i));
        } catch (c) {
        }
        r = i;
      },
      now() {
        return Kd();
      }
    }, n && n.on(Hd, (i, c) => {
      i === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, c) => this.target ? this.target.on[c] : (...u) => {
        this.onQueue.push({
          method: c,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...u) => (this.targetQueue.push({
        method: c,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[c](...u)) : (...u) => new Promise((f) => {
        this.targetQueue.push({
          method: c,
          args: u,
          resolve: f
        });
      })
    });
  }
  setRealTarget(t) {
    return In(this, null, function* () {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(yield this.target[n.method](...n.args));
    });
  }
}
function Gd(e, t) {
  const n = e, o = ql(), s = Ud(), r = jd && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r))
    s.emit(Wd, e, t);
  else {
    const i = r ? new Yd(n, s) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
  * vue-devtools v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const os = {
  ["vue-devtools-plugin-vue-i18n"]: "Vue I18n devtools",
  ["vue-i18n-resource-inspector"]: "I18n Resources",
  ["vue-i18n-timeline"]: "Vue I18n"
}, zd = {
  ["vue-i18n-resource-inspector"]: "Search for scopes ..."
}, Xd = {
  ["vue-i18n-timeline"]: 16764185
};
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const qd = "9.2.2";
function Jd() {
  let e = !1;
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (e = !0, $n().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (e = !0, $n().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && ($n().__INTLIFY_PROD_DEVTOOLS__ = !1), process.env.NODE_ENV !== "production" && e && console.warn("You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.");
}
let Jl = qe.__EXTEND_POINT__;
const pn = () => ++Jl, Se = {
  FALLBACK_TO_ROOT: Jl,
  NOT_SUPPORTED_PRESERVE: pn(),
  NOT_SUPPORTED_FORMATTER: pn(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: pn(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: pn(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: pn(),
  NOT_FOUND_PARENT_SCOPE: pn()
}, Qd = {
  [Se.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Se.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [Se.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [Se.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [Se.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [Se.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [Se.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope."
};
function it(e, ...t) {
  return Ho(Qd[e], ...t);
}
let Ql = ee.__EXTEND_POINT__;
const Ke = () => ++Ql, de = {
  UNEXPECTED_RETURN_TYPE: Ql,
  INVALID_ARGUMENT: Ke(),
  MUST_BE_CALL_SETUP_TOP: Ke(),
  NOT_INSLALLED: Ke(),
  NOT_AVAILABLE_IN_LEGACY_MODE: Ke(),
  REQUIRED_VALUE: Ke(),
  INVALID_VALUE: Ke(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Ke(),
  NOT_INSLALLED_WITH_PROVIDE: Ke(),
  UNEXPECTED_ERROR: Ke(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: Ke(),
  BRIDGE_SUPPORT_VUE_2_ONLY: Ke(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Ke(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Ke(),
  __EXTEND_POINT__: Ke()
};
function Le(e, ...t) {
  return Ko(e, null, process.env.NODE_ENV !== "production" ? { messages: Zd, args: t } : void 0);
}
const Zd = {
  [de.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [de.INVALID_ARGUMENT]: "Invalid argument",
  [de.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [de.NOT_INSLALLED]: "Need to install with `app.use` function",
  [de.UNEXPECTED_ERROR]: "Unexpected error",
  [de.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [de.REQUIRED_VALUE]: "Required in value: {0}",
  [de.INVALID_VALUE]: "Invalid value",
  [de.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [de.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [de.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [de.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [de.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [de.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, As = /* @__PURE__ */ Nt("__transrateVNode"), Ps = /* @__PURE__ */ Nt("__datetimeParts"), Vs = /* @__PURE__ */ Nt("__numberParts"), an = /* @__PURE__ */ Nt("__enableEmitter"), qn = /* @__PURE__ */ Nt("__disableEmitter"), Zl = Nt("__setPluralRules");
Nt("__intlifyMeta");
const ea = /* @__PURE__ */ Nt("__injectWithOption");
function Rs(e) {
  if (!_e(e))
    return e;
  for (const t in e)
    if (sr(e, t))
      if (!t.includes("."))
        _e(e[t]) && Rs(e[t]);
      else {
        const n = t.split("."), o = n.length - 1;
        let s = e;
        for (let r = 0; r < o; r++)
          n[r] in s || (s[n[r]] = {}), s = s[n[r]];
        s[n[o]] = e[t], delete e[t], _e(s[n[o]]) && Rs(s[n[o]]);
      }
  return e;
}
function zo(e, t) {
  const { messages: n, __i18n: o, messageResolver: s, flatJson: r } = t, i = ne(n) ? n : be(o) ? {} : { [e]: {} };
  if (be(o) && o.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: u, resource: f } = c;
      u ? (i[u] = i[u] || {}, Un(f, i[u])) : Un(f, i);
    } else
      H(c) && Un(JSON.parse(c), i);
  }), s == null && r)
    for (const c in i)
      sr(i, c) && Rs(i[c]);
  return i;
}
const co = (e) => !_e(e) || be(e);
function Un(e, t) {
  if (co(e) || co(t))
    throw Le(de.INVALID_VALUE);
  for (const n in e)
    sr(e, n) && (co(e[n]) || co(t[n]) ? t[n] = e[n] : Un(e[n], t[n]));
}
function ta(e) {
  return e.type;
}
function na(e, t, n) {
  let o = _e(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (o = zo(e.locale.value, {
    messages: o,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(o);
  s.length && s.forEach((r) => {
    e.mergeLocaleMessage(r, o[r]);
  });
  {
    if (_e(t.datetimeFormats)) {
      const r = Object.keys(t.datetimeFormats);
      r.length && r.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (_e(t.numberFormats)) {
      const r = Object.keys(t.numberFormats);
      r.length && r.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function di(e) {
  return Me(Cn, null, e, 0);
}
const pi = "__INTLIFY_META__";
let mi = 0;
function _i(e) {
  return (t, n, o, s) => e(n, o, rn() || void 0, s);
}
const ep = () => {
  const e = rn();
  let t = null;
  return e && (t = ta(e)[pi]) ? { [pi]: t } : null;
};
function cr(e = {}, t) {
  const { __root: n } = e, o = n === void 0;
  let s = ce(e.inheritLocale) ? e.inheritLocale : !0;
  const r = Ie(
    n && s ? n.locale.value : H(e.locale) ? e.locale : no
  ), i = Ie(
    n && s ? n.fallbackLocale.value : H(e.fallbackLocale) || be(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r.value
  ), c = Ie(zo(r.value, e)), u = Ie(ne(e.datetimeFormats) ? e.datetimeFormats : { [r.value]: {} }), f = Ie(ne(e.numberFormats) ? e.numberFormats : { [r.value]: {} });
  let m = n ? n.missingWarn : ce(e.missingWarn) || Ut(e.missingWarn) ? e.missingWarn : !0, p = n ? n.fallbackWarn : ce(e.fallbackWarn) || Ut(e.fallbackWarn) ? e.fallbackWarn : !0, _ = n ? n.fallbackRoot : ce(e.fallbackRoot) ? e.fallbackRoot : !0, L = !!e.fallbackFormat, k = Ne(e.missing) ? e.missing : null, y = Ne(e.missing) ? _i(e.missing) : null, A = Ne(e.postTranslation) ? e.postTranslation : null, E = n ? n.warnHtmlMessage : ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter;
  const C = n ? n.modifiers : ne(e.modifiers) ? e.modifiers : {};
  let b = e.pluralRules || n && n.pluralRules, O;
  O = (() => {
    o && ni(null);
    const h = {
      version: qd,
      locale: r.value,
      fallbackLocale: i.value,
      messages: c.value,
      modifiers: C,
      pluralRules: b,
      missing: y === null ? void 0 : y,
      missingWarn: m,
      fallbackWarn: p,
      fallbackFormat: L,
      unresolving: !0,
      postTranslation: A === null ? void 0 : A,
      warnHtmlMessage: E,
      escapeParameter: T,
      messageResolver: e.messageResolver,
      __meta: { framework: "vue" }
    };
    h.datetimeFormats = u.value, h.numberFormats = f.value, h.__datetimeFormatters = ne(O) ? O.__datetimeFormatters : void 0, h.__numberFormatters = ne(O) ? O.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (h.__v_emitter = ne(O) ? O.__v_emitter : void 0);
    const v = Id(h);
    return o && ni(v), v;
  })(), An(O, r.value, i.value);
  function V() {
    return [
      r.value,
      i.value,
      c.value,
      u.value,
      f.value
    ];
  }
  const M = rt({
    get: () => r.value,
    set: (h) => {
      r.value = h, O.locale = r.value;
    }
  }), G = rt({
    get: () => i.value,
    set: (h) => {
      i.value = h, O.fallbackLocale = i.value, An(O, r.value, h);
    }
  }), J = rt(() => c.value), z = /* @__PURE__ */ rt(() => u.value), Y = /* @__PURE__ */ rt(() => f.value);
  function q() {
    return Ne(A) ? A : null;
  }
  function re(h) {
    A = h, O.postTranslation = h;
  }
  function W() {
    return k;
  }
  function D(h) {
    h !== null && (y = _i(h)), k = h, O.missing = y;
  }
  function $(h, v) {
    return h !== "translate" || !v.resolvedMessage;
  }
  const K = (h, v, B, X, se, pe) => {
    V();
    let fe;
    if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__)
      try {
        ti(ep()), o || (O.fallbackContext = n ? Dd() : void 0), fe = h(O);
      } finally {
        ti(null), o || (O.fallbackContext = void 0);
      }
    else
      fe = h(O);
    if (De(fe) && fe === Yo) {
      const [he, ze] = v();
      if (process.env.NODE_ENV !== "production" && n && H(he) && $(B, ze) && (_ && (Go(p, he) || Hl(m, he)) && Ge(it(Se.FALLBACK_TO_ROOT, {
        key: he,
        type: B
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ot } = O;
        Ot && _ && Ot.emit("fallback", {
          type: B,
          key: he,
          to: "global",
          groupId: `${B}:${he}`
        });
      }
      return n && _ ? X(n) : se(he);
    } else {
      if (pe(fe))
        return fe;
      throw Le(de.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ue(...h) {
    return K((v) => Reflect.apply(ii, null, [v, ...h]), () => Ds(...h), "translate", (v) => Reflect.apply(v.t, v, [...h]), (v) => v, (v) => H(v));
  }
  function me(...h) {
    const [v, B, X] = h;
    if (X && !_e(X))
      throw Le(de.INVALID_ARGUMENT);
    return ue(v, B, we({ resolvedMessage: !0 }, X || {}));
  }
  function ke(...h) {
    return K((v) => Reflect.apply(ai, null, [v, ...h]), () => Is(...h), "datetime format", (v) => Reflect.apply(v.d, v, [...h]), () => Lo, (v) => H(v));
  }
  function Ve(...h) {
    return K((v) => Reflect.apply(ui, null, [v, ...h]), () => Ss(...h), "number format", (v) => Reflect.apply(v.n, v, [...h]), () => Lo, (v) => H(v));
  }
  function Be(h) {
    return h.map((v) => H(v) || De(v) || ce(v) ? di(String(v)) : v);
  }
  const Ht = {
    normalize: Be,
    interpolate: (h) => h,
    type: "vnode"
  };
  function Bt(...h) {
    return K(
      (v) => {
        let B;
        const X = v;
        try {
          X.processor = Ht, B = Reflect.apply(ii, null, [X, ...h]);
        } finally {
          X.processor = null;
        }
        return B;
      },
      () => Ds(...h),
      "translate",
      (v) => v[As](...h),
      (v) => [di(v)],
      (v) => be(v)
    );
  }
  function Fe(...h) {
    return K(
      (v) => Reflect.apply(ui, null, [v, ...h]),
      () => Ss(...h),
      "number format",
      (v) => v[Vs](...h),
      () => [],
      (v) => H(v) || be(v)
    );
  }
  function Ze(...h) {
    return K(
      (v) => Reflect.apply(ai, null, [v, ...h]),
      () => Is(...h),
      "datetime format",
      (v) => v[Ps](...h),
      () => [],
      (v) => H(v) || be(v)
    );
  }
  function ct(h) {
    b = h, O.pluralRules = b;
  }
  function xe(h, v) {
    const B = H(v) ? v : r.value, X = l(B);
    return O.messageResolver(X, h) !== null;
  }
  function nt(h) {
    let v = null;
    const B = Fl(O, i.value, r.value);
    for (let X = 0; X < B.length; X++) {
      const se = c.value[B[X]] || {}, pe = O.messageResolver(se, h);
      if (pe != null) {
        v = pe;
        break;
      }
    }
    return v;
  }
  function yt(h) {
    const v = nt(h);
    return v != null ? v : n ? n.tm(h) || {} : {};
  }
  function l(h) {
    return c.value[h] || {};
  }
  function a(h, v) {
    c.value[h] = v, O.messages = c.value;
  }
  function d(h, v) {
    c.value[h] = c.value[h] || {}, Un(v, c.value[h]), O.messages = c.value;
  }
  function g(h) {
    return u.value[h] || {};
  }
  function N(h, v) {
    u.value[h] = v, O.datetimeFormats = u.value, ci(O, h, v);
  }
  function I(h, v) {
    u.value[h] = we(u.value[h] || {}, v), O.datetimeFormats = u.value, ci(O, h, v);
  }
  function F(h) {
    return f.value[h] || {};
  }
  function P(h, v) {
    f.value[h] = v, O.numberFormats = f.value, fi(O, h, v);
  }
  function U(h, v) {
    f.value[h] = we(f.value[h] || {}, v), O.numberFormats = f.value, fi(O, h, v);
  }
  mi++, n && bt && (yn(n.locale, (h) => {
    s && (r.value = h, O.locale = h, An(O, r.value, i.value));
  }), yn(n.fallbackLocale, (h) => {
    s && (i.value = h, O.fallbackLocale = h, An(O, r.value, i.value));
  }));
  const S = {
    id: mi,
    locale: M,
    fallbackLocale: G,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(h) {
      s = h, h && n && (r.value = n.locale.value, i.value = n.fallbackLocale.value, An(O, r.value, i.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: J,
    get modifiers() {
      return C;
    },
    get pluralRules() {
      return b || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(h) {
      m = h, O.missingWarn = m;
    },
    get fallbackWarn() {
      return p;
    },
    set fallbackWarn(h) {
      p = h, O.fallbackWarn = p;
    },
    get fallbackRoot() {
      return _;
    },
    set fallbackRoot(h) {
      _ = h;
    },
    get fallbackFormat() {
      return L;
    },
    set fallbackFormat(h) {
      L = h, O.fallbackFormat = L;
    },
    get warnHtmlMessage() {
      return E;
    },
    set warnHtmlMessage(h) {
      E = h, O.warnHtmlMessage = h;
    },
    get escapeParameter() {
      return T;
    },
    set escapeParameter(h) {
      T = h, O.escapeParameter = h;
    },
    t: ue,
    getLocaleMessage: l,
    setLocaleMessage: a,
    mergeLocaleMessage: d,
    getPostTranslationHandler: q,
    setPostTranslationHandler: re,
    getMissingHandler: W,
    setMissingHandler: D,
    [Zl]: ct
  };
  return S.datetimeFormats = z, S.numberFormats = Y, S.rt = me, S.te = xe, S.tm = yt, S.d = ke, S.n = Ve, S.getDateTimeFormat = g, S.setDateTimeFormat = N, S.mergeDateTimeFormat = I, S.getNumberFormat = F, S.setNumberFormat = P, S.mergeNumberFormat = U, S[ea] = e.__injectWithOption, S[As] = Bt, S[Ps] = Ze, S[Vs] = Fe, process.env.NODE_ENV !== "production" && (S[an] = (h) => {
    O.__v_emitter = h;
  }, S[qn] = () => {
    O.__v_emitter = void 0;
  }), S;
}
function tp(e) {
  const t = H(e.locale) ? e.locale : no, n = H(e.fallbackLocale) || be(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, o = Ne(e.missing) ? e.missing : void 0, s = ce(e.silentTranslationWarn) || Ut(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, r = ce(e.silentFallbackWarn) || Ut(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, i = ce(e.fallbackRoot) ? e.fallbackRoot : !0, c = !!e.formatFallbackMessages, u = ne(e.modifiers) ? e.modifiers : {}, f = e.pluralizationRules, m = Ne(e.postTranslation) ? e.postTranslation : void 0, p = H(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, _ = !!e.escapeParameterHtml, L = ce(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && Ge(it(Se.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && Ge(it(Se.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let k = e.messages;
  if (ne(e.sharedMessages)) {
    const O = e.sharedMessages;
    k = Object.keys(O).reduce((V, M) => {
      const G = V[M] || (V[M] = {});
      return we(G, O[M]), V;
    }, k || {});
  }
  const { __i18n: y, __root: A, __injectWithOption: E } = e, T = e.datetimeFormats, C = e.numberFormats, b = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: k,
    flatJson: b,
    datetimeFormats: T,
    numberFormats: C,
    missing: o,
    missingWarn: s,
    fallbackWarn: r,
    fallbackRoot: i,
    fallbackFormat: c,
    modifiers: u,
    pluralRules: f,
    postTranslation: m,
    warnHtmlMessage: p,
    escapeParameter: _,
    messageResolver: e.messageResolver,
    inheritLocale: L,
    __i18n: y,
    __root: A,
    __injectWithOption: E
  };
}
function Ms(e = {}, t) {
  {
    const n = cr(tp(e)), o = {
      id: n.id,
      get locale() {
        return n.locale.value;
      },
      set locale(s) {
        n.locale.value = s;
      },
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(s) {
        n.fallbackLocale.value = s;
      },
      get messages() {
        return n.messages.value;
      },
      get datetimeFormats() {
        return n.datetimeFormats.value;
      },
      get numberFormats() {
        return n.numberFormats.value;
      },
      get availableLocales() {
        return n.availableLocales;
      },
      get formatter() {
        return process.env.NODE_ENV !== "production" && Ge(it(Se.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(s) {
        process.env.NODE_ENV !== "production" && Ge(it(Se.NOT_SUPPORTED_FORMATTER));
      },
      get missing() {
        return n.getMissingHandler();
      },
      set missing(s) {
        n.setMissingHandler(s);
      },
      get silentTranslationWarn() {
        return ce(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(s) {
        n.missingWarn = ce(s) ? !s : s;
      },
      get silentFallbackWarn() {
        return ce(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(s) {
        n.fallbackWarn = ce(s) ? !s : s;
      },
      get modifiers() {
        return n.modifiers;
      },
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(s) {
        n.fallbackFormat = s;
      },
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(s) {
        n.setPostTranslationHandler(s);
      },
      get sync() {
        return n.inheritLocale;
      },
      set sync(s) {
        n.inheritLocale = s;
      },
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(s) {
        n.warnHtmlMessage = s !== "off";
      },
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(s) {
        n.escapeParameter = s;
      },
      get preserveDirectiveContent() {
        return process.env.NODE_ENV !== "production" && Ge(it(Se.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(s) {
        process.env.NODE_ENV !== "production" && Ge(it(Se.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      __composer: n,
      t(...s) {
        const [r, i, c] = s, u = {};
        let f = null, m = null;
        if (!H(r))
          throw Le(de.INVALID_ARGUMENT);
        const p = r;
        return H(i) ? u.locale = i : be(i) ? f = i : ne(i) && (m = i), be(c) ? f = c : ne(c) && (m = c), Reflect.apply(n.t, n, [
          p,
          f || m || {},
          u
        ]);
      },
      rt(...s) {
        return Reflect.apply(n.rt, n, [...s]);
      },
      tc(...s) {
        const [r, i, c] = s, u = { plural: 1 };
        let f = null, m = null;
        if (!H(r))
          throw Le(de.INVALID_ARGUMENT);
        const p = r;
        return H(i) ? u.locale = i : De(i) ? u.plural = i : be(i) ? f = i : ne(i) && (m = i), H(c) ? u.locale = c : be(c) ? f = c : ne(c) && (m = c), Reflect.apply(n.t, n, [
          p,
          f || m || {},
          u
        ]);
      },
      te(s, r) {
        return n.te(s, r);
      },
      tm(s) {
        return n.tm(s);
      },
      getLocaleMessage(s) {
        return n.getLocaleMessage(s);
      },
      setLocaleMessage(s, r) {
        n.setLocaleMessage(s, r);
      },
      mergeLocaleMessage(s, r) {
        n.mergeLocaleMessage(s, r);
      },
      d(...s) {
        return Reflect.apply(n.d, n, [...s]);
      },
      getDateTimeFormat(s) {
        return n.getDateTimeFormat(s);
      },
      setDateTimeFormat(s, r) {
        n.setDateTimeFormat(s, r);
      },
      mergeDateTimeFormat(s, r) {
        n.mergeDateTimeFormat(s, r);
      },
      n(...s) {
        return Reflect.apply(n.n, n, [...s]);
      },
      getNumberFormat(s) {
        return n.getNumberFormat(s);
      },
      setNumberFormat(s, r) {
        n.setNumberFormat(s, r);
      },
      mergeNumberFormat(s, r) {
        n.mergeNumberFormat(s, r);
      },
      getChoiceIndex(s, r) {
        return process.env.NODE_ENV !== "production" && Ge(it(Se.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      },
      __onComponentInstanceCreated(s) {
        const { componentInstanceCreatedListener: r } = e;
        r && r(s, o);
      }
    };
    return process.env.NODE_ENV !== "production" && (o.__enableEmitter = (s) => {
      const r = n;
      r[an] && r[an](s);
    }, o.__disableEmitter = () => {
      const s = n;
      s[qn] && s[qn]();
    }), o;
  }
}
const ur = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function np({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((o, s) => o = [
    ...o,
    ...be(s.children) ? s.children : [s]
  ], []) : t.reduce((n, o) => {
    const s = e[o];
    return s && (n[o] = s()), n;
  }, {});
}
function oa(e) {
  return Ce;
}
const ss = {
  name: "i18n-t",
  props: we({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (e) => De(e) || !isNaN(e)
    }
  }, ur),
  setup(e, t) {
    const { slots: n, attrs: o } = t, s = e.i18n || cn({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const r = Object.keys(n).filter((p) => p !== "_"), i = {};
      e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = H(e.plural) ? +e.plural : e.plural);
      const c = np(t, r), u = s[As](e.keypath, c, i), f = we({}, o), m = H(e.tag) || _e(e.tag) ? e.tag : oa();
      return Vl(m, f, u);
    };
  }
};
function op(e) {
  return be(e) && !H(e[0]);
}
function sa(e, t, n, o) {
  const { slots: s, attrs: r } = t;
  return () => {
    const i = { part: !0 };
    let c = {};
    e.locale && (i.locale = e.locale), H(e.format) ? i.key = e.format : _e(e.format) && (H(e.format.key) && (i.key = e.format.key), c = Object.keys(e.format).reduce((_, L) => n.includes(L) ? we({}, _, { [L]: e.format[L] }) : _, {}));
    const u = o(e.value, i, c);
    let f = [i.key];
    be(u) ? f = u.map((_, L) => {
      const k = s[_.type], y = k ? k({ [_.type]: _.value, index: L, parts: u }) : [_.value];
      return op(y) && (y[0].key = `${_.type}-${L}`), y;
    }) : H(u) && (f = [u]);
    const m = we({}, r), p = H(e.tag) || _e(e.tag) ? e.tag : oa();
    return Vl(p, m, f);
  };
}
const gi = {
  name: "i18n-n",
  props: we({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ur),
  setup(e, t) {
    const n = e.i18n || cn({ useScope: "parent", __useComponent: !0 });
    return sa(e, t, Xl, (...o) => n[Vs](...o));
  }
}, hi = {
  name: "i18n-d",
  props: we({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ur),
  setup(e, t) {
    const n = e.i18n || cn({ useScope: "parent", __useComponent: !0 });
    return sa(e, t, zl, (...o) => n[Ps](...o));
  }
};
function sp(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const o = n.__getInstance(t);
    return o != null ? o.__composer : e.global.__composer;
  }
}
function rp(e) {
  const t = (i) => {
    const { instance: c, modifiers: u, value: f } = i;
    if (!c || !c.$)
      throw Le(de.UNEXPECTED_ERROR);
    const m = sp(e, c.$);
    process.env.NODE_ENV !== "production" && u.preserve && Ge(it(Se.NOT_SUPPORTED_PRESERVE));
    const p = Ei(f);
    return [
      Reflect.apply(m.t, m, [...bi(p)]),
      m
    ];
  };
  return {
    created: (i, c) => {
      const [u, f] = t(c);
      bt && e.global === f && (i.__i18nWatcher = yn(f.locale, () => {
        c.instance && c.instance.$forceUpdate();
      })), i.__composer = f, i.textContent = u;
    },
    unmounted: (i) => {
      bt && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer);
    },
    beforeUpdate: (i, { value: c }) => {
      if (i.__composer) {
        const u = i.__composer, f = Ei(c);
        i.textContent = Reflect.apply(u.t, u, [
          ...bi(f)
        ]);
      }
    },
    getSSRProps: (i) => {
      const [c] = t(i);
      return { textContent: c };
    }
  };
}
function Ei(e) {
  if (H(e))
    return { path: e };
  if (ne(e)) {
    if (!("path" in e))
      throw Le(de.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Le(de.INVALID_VALUE);
}
function bi(e) {
  const { path: t, locale: n, args: o, choice: s, plural: r } = e, i = {}, c = o || {};
  return H(n) && (i.locale = n), De(s) && (i.plural = s), De(r) && (i.plural = r), [t, c, i];
}
function ip(e, t, ...n) {
  const o = ne(n[0]) ? n[0] : {}, s = !!o.useI18nComponentName, r = ce(o.globalInstall) ? o.globalInstall : !0;
  process.env.NODE_ENV !== "production" && r && s && Ge(it(Se.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: ss.name
  })), r && (e.component(s ? "i18n" : ss.name, ss), e.component(gi.name, gi), e.component(hi.name, hi)), e.directive("t", rp(t));
}
const ra = "vue-i18n: composer properties";
let Fs;
function lp(e, t) {
  return In(this, null, function* () {
    return new Promise((n, o) => {
      try {
        Gd({
          id: "vue-devtools-plugin-vue-i18n",
          label: os["vue-devtools-plugin-vue-i18n"],
          packageName: "vue-i18n",
          homepage: "https://vue-i18n.intlify.dev",
          logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
          componentStateTypes: [ra],
          app: e
        }, (s) => {
          Fs = s, s.on.visitComponentTree(({ componentInstance: i, treeNode: c }) => {
            ap(i, c, t);
          }), s.on.inspectComponent(({ componentInstance: i, instanceData: c }) => {
            i.vnode.el && i.vnode.el.__VUE_I18N__ && c && (t.mode === "legacy" ? i.vnode.el.__VUE_I18N__ !== t.global.__composer && Ni(c, i.vnode.el.__VUE_I18N__) : Ni(c, i.vnode.el.__VUE_I18N__));
          }), s.addInspector({
            id: "vue-i18n-resource-inspector",
            label: os["vue-i18n-resource-inspector"],
            icon: "language",
            treeFilterPlaceholder: zd["vue-i18n-resource-inspector"]
          }), s.on.getInspectorTree((i) => {
            i.app === e && i.inspectorId === "vue-i18n-resource-inspector" && pp(i, t);
          });
          const r = /* @__PURE__ */ new Map();
          s.on.getInspectorState((i) => In(this, null, function* () {
            if (i.app === e && i.inspectorId === "vue-i18n-resource-inspector")
              if (s.unhighlightElement(), _p(i, t), i.nodeId === "global") {
                if (!r.has(i.app)) {
                  const [c] = yield s.getComponentInstances(i.app);
                  r.set(i.app, c);
                }
                s.highlightElement(r.get(i.app));
              } else {
                const c = mp(i.nodeId, t);
                c && s.highlightElement(c);
              }
          })), s.on.editInspectorState((i) => {
            i.app === e && i.inspectorId === "vue-i18n-resource-inspector" && hp(i, t);
          }), s.addTimelineLayer({
            id: "vue-i18n-timeline",
            label: os["vue-i18n-timeline"],
            color: Xd["vue-i18n-timeline"]
          }), n(!0);
        });
      } catch (s) {
        console.error(s), o(!1);
      }
    });
  });
}
function ia(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function ap(e, t, n) {
  const o = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== o) {
    const s = {
      label: `i18n (${ia(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(s);
  }
}
function Ni(e, t) {
  const n = ra;
  e.state.push({
    type: n,
    key: "locale",
    editable: !0,
    value: t.locale.value
  }), e.state.push({
    type: n,
    key: "availableLocales",
    editable: !1,
    value: t.availableLocales
  }), e.state.push({
    type: n,
    key: "fallbackLocale",
    editable: !0,
    value: t.fallbackLocale.value
  }), e.state.push({
    type: n,
    key: "inheritLocale",
    editable: !0,
    value: t.inheritLocale
  }), e.state.push({
    type: n,
    key: "messages",
    editable: !1,
    value: fr(t.messages.value)
  }), e.state.push({
    type: n,
    key: "datetimeFormats",
    editable: !1,
    value: t.datetimeFormats.value
  }), e.state.push({
    type: n,
    key: "numberFormats",
    editable: !1,
    value: t.numberFormats.value
  });
}
function fr(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    Ne(o) && "source" in o ? t[n] = dp(o) : _e(o) ? t[n] = fr(o) : t[n] = o;
  }), t;
}
const cp = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function up(e) {
  return e.replace(/[<>"&]/g, fp);
}
function fp(e) {
  return cp[e] || e;
}
function dp(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${up(e.source)}")` : "(?)"}`
    }
  };
}
function pp(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [o, s] of t.__instances) {
    const r = t.mode === "composition" ? s : s.__composer;
    n !== r && e.rootNodes.push({
      id: r.id.toString(),
      label: `${ia(o)} Scope`
    });
  }
}
function mp(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [o, s] of t.__instances.entries())
      if (s.id.toString() === e) {
        n = o;
        break;
      }
  }
  return n;
}
function la(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((o) => o.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function _p(e, t) {
  const n = la(e.nodeId, t);
  return n && (e.state = gp(n)), null;
}
function gp(e) {
  const t = {}, n = "Locale related info", o = [
    {
      type: n,
      key: "locale",
      editable: !0,
      value: e.locale.value
    },
    {
      type: n,
      key: "fallbackLocale",
      editable: !0,
      value: e.fallbackLocale.value
    },
    {
      type: n,
      key: "availableLocales",
      editable: !1,
      value: e.availableLocales
    },
    {
      type: n,
      key: "inheritLocale",
      editable: !0,
      value: e.inheritLocale
    }
  ];
  t[n] = o;
  const s = "Locale messages info", r = [
    {
      type: s,
      key: "messages",
      editable: !1,
      value: fr(e.messages.value)
    }
  ];
  t[s] = r;
  {
    const i = "Datetime formats info", c = [
      {
        type: i,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[i] = c;
    const u = "Datetime formats info", f = [
      {
        type: u,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[u] = f;
  }
  return t;
}
function Jn(e, t) {
  if (Fs) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), Fs.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: e,
        groupId: n,
        time: Date.now(),
        meta: {},
        data: t || {},
        logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
      }
    });
  }
}
function hp(e, t) {
  const n = la(e.nodeId, t);
  if (n) {
    const [o] = e.path;
    o === "locale" && H(e.state.value) ? n.locale.value = e.state.value : o === "fallbackLocale" && (H(e.state.value) || be(e.state.value) || _e(e.state.value)) ? n.fallbackLocale.value = e.state.value : o === "inheritLocale" && ce(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function Ep(e, t, n) {
  return {
    beforeCreate() {
      const o = rn();
      if (!o)
        throw Le(de.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const r = s.i18n;
        s.__i18n && (r.__i18n = s.__i18n), r.__root = t, this === this.$root ? this.$i18n = vi(e, r) : (r.__injectWithOption = !0, this.$i18n = Ms(r));
      } else
        s.__i18n ? this === this.$root ? this.$i18n = vi(e, s) : this.$i18n = Ms({
          __i18n: s.__i18n,
          __injectWithOption: !0,
          __root: t
        }) : this.$i18n = e;
      s.__i18nGlobal && na(t, s, s), e.__onComponentInstanceCreated(this.$i18n), n.__setInstance(o, this.$i18n), this.$t = (...r) => this.$i18n.t(...r), this.$rt = (...r) => this.$i18n.rt(...r), this.$tc = (...r) => this.$i18n.tc(...r), this.$te = (r, i) => this.$i18n.te(r, i), this.$d = (...r) => this.$i18n.d(...r), this.$n = (...r) => this.$i18n.n(...r), this.$tm = (r) => this.$i18n.tm(r);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        this.$el.__VUE_I18N__ = this.$i18n.__composer;
        const o = this.__v_emitter = ir(), s = this.$i18n;
        s.__enableEmitter && s.__enableEmitter(o), o.on("*", Jn);
      }
    },
    unmounted() {
      const o = rn();
      if (!o)
        throw Le(de.UNEXPECTED_ERROR);
      if (process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", Jn), delete this.__v_emitter), this.$i18n)) {
        const s = this.$i18n;
        s.__disableEmitter && s.__disableEmitter(), delete this.$el.__VUE_I18N__;
      }
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, n.__deleteInstance(o), delete this.$i18n;
    }
  };
}
function vi(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Zl](t.pluralizationRules || e.pluralizationRules);
  const n = zo(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((o) => e.mergeLocaleMessage(o, n[o])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((o) => e.mergeDateTimeFormat(o, t.datetimeFormats[o])), t.numberFormats && Object.keys(t.numberFormats).forEach((o) => e.mergeNumberFormat(o, t.numberFormats[o])), e;
}
const bp = /* @__PURE__ */ Nt("global-vue-i18n");
function Np(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ce(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, o = ce(e.globalInjection) ? e.globalInjection : !0, s = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, r = /* @__PURE__ */ new Map(), [i, c] = vp(e, n), u = Nt(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  function f(_) {
    return r.get(_) || null;
  }
  function m(_, L) {
    r.set(_, L);
  }
  function p(_) {
    r.delete(_);
  }
  {
    let L;
    const _ = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      get allowComposition() {
        return s;
      },
      install(k, ...y) {
        return In(this, null, function* () {
          process.env.NODE_ENV !== "production" && (k.__VUE_I18N__ = _), k.__VUE_I18N_SYMBOL__ = u, k.provide(k.__VUE_I18N_SYMBOL__, _), !n && o && Sp(k, _.global), __VUE_I18N_FULL_INSTALL__ && ip(k, _, ...y), __VUE_I18N_LEGACY_API__ && n && k.mixin(Ep(c, c.__composer, _));
          const A = k.unmount;
          if (k.unmount = () => {
            _.dispose(), A();
          }, process.env.NODE_ENV !== "production") {
            if (!(yield lp(k, _)))
              throw Le(de.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
            const T = ir();
            if (n) {
              const C = c;
              C.__enableEmitter && C.__enableEmitter(T);
            } else {
              const C = c;
              C[an] && C[an](T);
            }
            T.on("*", Jn);
          }
        });
      },
      get global() {
        return c;
      },
      dispose() {
        i.stop();
      },
      __instances: r,
      __getInstance: f,
      __setInstance: m,
      __deleteInstance: p
    };
    return _;
  }
}
function cn(e = {}) {
  const t = rn();
  if (t == null)
    throw Le(de.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Le(de.NOT_INSLALLED);
  const n = yp(t), o = Tp(n), s = ta(t), r = Op(e, s);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Le(de.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Cp(t, r, o, e);
  }
  if (r === "global")
    return na(o, e, s), o;
  if (r === "parent") {
    let u = Lp(n, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && Ge(it(Se.NOT_FOUND_PARENT_SCOPE)), u = o), u;
  }
  const i = n;
  let c = i.__getInstance(t);
  if (c == null) {
    const u = we({}, e);
    "__i18n" in s && (u.__i18n = s.__i18n), o && (u.__root = o), c = cr(u), kp(i, t, c), i.__setInstance(t, c);
  }
  return c;
}
function vp(e, t, n) {
  const o = ka();
  {
    const s = __VUE_I18N_LEGACY_API__ && t ? o.run(() => Ms(e)) : o.run(() => cr(e));
    if (s == null)
      throw Le(de.UNEXPECTED_ERROR);
    return [o, s];
  }
}
function yp(e) {
  {
    const t = Mn(e.isCE ? bp : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Le(e.isCE ? de.NOT_INSLALLED_WITH_PROVIDE : de.UNEXPECTED_ERROR);
    return t;
  }
}
function Op(e, t) {
  return Bo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Tp(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Lp(e, t, n = !1) {
  let o = null;
  const s = t.root;
  let r = t.parent;
  for (; r != null; ) {
    const i = e;
    if (e.mode === "composition")
      o = i.__getInstance(r);
    else if (__VUE_I18N_LEGACY_API__) {
      const c = i.__getInstance(r);
      c != null && (o = c.__composer, n && o && !o[ea] && (o = null));
    }
    if (o != null || s === r)
      break;
    r = r.parent;
  }
  return o;
}
function kp(e, t, n) {
  let o = null;
  to(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, o = ir();
      const s = n;
      s[an] && s[an](o), o.on("*", Jn);
    }
  }, t), Uo(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__) {
      o && o.off("*", Jn);
      const s = n;
      s[qn] && s[qn](), delete t.vnode.el.__VUE_I18N__;
    }
    e.__deleteInstance(t);
  }, t);
}
function Cp(e, t, n, o = {}) {
  const s = t === "local", r = oc(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Le(de.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const i = ce(o.inheritLocale) ? o.inheritLocale : !0, c = Ie(
    s && i ? n.locale.value : H(o.locale) ? o.locale : no
  ), u = Ie(
    s && i ? n.fallbackLocale.value : H(o.fallbackLocale) || be(o.fallbackLocale) || ne(o.fallbackLocale) || o.fallbackLocale === !1 ? o.fallbackLocale : c.value
  ), f = Ie(zo(c.value, o)), m = Ie(ne(o.datetimeFormats) ? o.datetimeFormats : { [c.value]: {} }), p = Ie(ne(o.numberFormats) ? o.numberFormats : { [c.value]: {} }), _ = s ? n.missingWarn : ce(o.missingWarn) || Ut(o.missingWarn) ? o.missingWarn : !0, L = s ? n.fallbackWarn : ce(o.fallbackWarn) || Ut(o.fallbackWarn) ? o.fallbackWarn : !0, k = s ? n.fallbackRoot : ce(o.fallbackRoot) ? o.fallbackRoot : !0, y = !!o.fallbackFormat, A = Ne(o.missing) ? o.missing : null, E = Ne(o.postTranslation) ? o.postTranslation : null, T = s ? n.warnHtmlMessage : ce(o.warnHtmlMessage) ? o.warnHtmlMessage : !0, C = !!o.escapeParameter, b = s ? n.modifiers : ne(o.modifiers) ? o.modifiers : {}, O = o.pluralRules || s && n.pluralRules;
  function x() {
    return [
      c.value,
      u.value,
      f.value,
      m.value,
      p.value
    ];
  }
  const V = rt({
    get: () => r.value ? r.value.locale.value : c.value,
    set: (a) => {
      r.value && (r.value.locale.value = a), c.value = a;
    }
  }), M = rt({
    get: () => r.value ? r.value.fallbackLocale.value : u.value,
    set: (a) => {
      r.value && (r.value.fallbackLocale.value = a), u.value = a;
    }
  }), G = rt(() => r.value ? r.value.messages.value : f.value), J = rt(() => m.value), z = rt(() => p.value);
  function Y() {
    return r.value ? r.value.getPostTranslationHandler() : E;
  }
  function q(a) {
    r.value && r.value.setPostTranslationHandler(a);
  }
  function re() {
    return r.value ? r.value.getMissingHandler() : A;
  }
  function W(a) {
    r.value && r.value.setMissingHandler(a);
  }
  function D(a) {
    return x(), a();
  }
  function $(...a) {
    return r.value ? D(() => Reflect.apply(r.value.t, null, [...a])) : D(() => "");
  }
  function K(...a) {
    return r.value ? Reflect.apply(r.value.rt, null, [...a]) : "";
  }
  function ue(...a) {
    return r.value ? D(() => Reflect.apply(r.value.d, null, [...a])) : D(() => "");
  }
  function me(...a) {
    return r.value ? D(() => Reflect.apply(r.value.n, null, [...a])) : D(() => "");
  }
  function ke(a) {
    return r.value ? r.value.tm(a) : {};
  }
  function Ve(a, d) {
    return r.value ? r.value.te(a, d) : !1;
  }
  function Be(a) {
    return r.value ? r.value.getLocaleMessage(a) : {};
  }
  function vt(a, d) {
    r.value && (r.value.setLocaleMessage(a, d), f.value[a] = d);
  }
  function Ht(a, d) {
    r.value && r.value.mergeLocaleMessage(a, d);
  }
  function Bt(a) {
    return r.value ? r.value.getDateTimeFormat(a) : {};
  }
  function Fe(a, d) {
    r.value && (r.value.setDateTimeFormat(a, d), m.value[a] = d);
  }
  function Ze(a, d) {
    r.value && r.value.mergeDateTimeFormat(a, d);
  }
  function ct(a) {
    return r.value ? r.value.getNumberFormat(a) : {};
  }
  function xe(a, d) {
    r.value && (r.value.setNumberFormat(a, d), p.value[a] = d);
  }
  function nt(a, d) {
    r.value && r.value.mergeNumberFormat(a, d);
  }
  const yt = {
    get id() {
      return r.value ? r.value.id : -1;
    },
    locale: V,
    fallbackLocale: M,
    messages: G,
    datetimeFormats: J,
    numberFormats: z,
    get inheritLocale() {
      return r.value ? r.value.inheritLocale : i;
    },
    set inheritLocale(a) {
      r.value && (r.value.inheritLocale = a);
    },
    get availableLocales() {
      return r.value ? r.value.availableLocales : Object.keys(f.value);
    },
    get modifiers() {
      return r.value ? r.value.modifiers : b;
    },
    get pluralRules() {
      return r.value ? r.value.pluralRules : O;
    },
    get isGlobal() {
      return r.value ? r.value.isGlobal : !1;
    },
    get missingWarn() {
      return r.value ? r.value.missingWarn : _;
    },
    set missingWarn(a) {
      r.value && (r.value.missingWarn = a);
    },
    get fallbackWarn() {
      return r.value ? r.value.fallbackWarn : L;
    },
    set fallbackWarn(a) {
      r.value && (r.value.missingWarn = a);
    },
    get fallbackRoot() {
      return r.value ? r.value.fallbackRoot : k;
    },
    set fallbackRoot(a) {
      r.value && (r.value.fallbackRoot = a);
    },
    get fallbackFormat() {
      return r.value ? r.value.fallbackFormat : y;
    },
    set fallbackFormat(a) {
      r.value && (r.value.fallbackFormat = a);
    },
    get warnHtmlMessage() {
      return r.value ? r.value.warnHtmlMessage : T;
    },
    set warnHtmlMessage(a) {
      r.value && (r.value.warnHtmlMessage = a);
    },
    get escapeParameter() {
      return r.value ? r.value.escapeParameter : C;
    },
    set escapeParameter(a) {
      r.value && (r.value.escapeParameter = a);
    },
    t: $,
    getPostTranslationHandler: Y,
    setPostTranslationHandler: q,
    getMissingHandler: re,
    setMissingHandler: W,
    rt: K,
    d: ue,
    n: me,
    tm: ke,
    te: Ve,
    getLocaleMessage: Be,
    setLocaleMessage: vt,
    mergeLocaleMessage: Ht,
    getDateTimeFormat: Bt,
    setDateTimeFormat: Fe,
    mergeDateTimeFormat: Ze,
    getNumberFormat: ct,
    setNumberFormat: xe,
    mergeNumberFormat: nt
  };
  function l(a) {
    a.locale.value = c.value, a.fallbackLocale.value = u.value, Object.keys(f.value).forEach((d) => {
      a.mergeLocaleMessage(d, f.value[d]);
    }), Object.keys(m.value).forEach((d) => {
      a.mergeDateTimeFormat(d, m.value[d]);
    }), Object.keys(p.value).forEach((d) => {
      a.mergeNumberFormat(d, p.value[d]);
    }), a.escapeParameter = C, a.fallbackFormat = y, a.fallbackRoot = k, a.fallbackWarn = L, a.missingWarn = _, a.warnHtmlMessage = T;
  }
  return Qs(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Le(de.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const a = r.value = e.proxy.$i18n.__composer;
    t === "global" ? (c.value = a.locale.value, u.value = a.fallbackLocale.value, f.value = a.messages.value, m.value = a.datetimeFormats.value, p.value = a.numberFormats.value) : s && l(a);
  }), yt;
}
const Dp = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Ip = ["t", "rt", "d", "n", "tm"];
function Sp(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  Dp.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s)
      throw Le(de.UNEXPECTED_ERROR);
    const r = Te(s.value) ? {
      get() {
        return s.value.value;
      },
      set(i) {
        s.value.value = i;
      }
    } : {
      get() {
        return s.get && s.get();
      }
    };
    Object.defineProperty(n, o, r);
  }), e.config.globalProperties.$i18n = n, Ip.forEach((o) => {
    const s = Object.getOwnPropertyDescriptor(t, o);
    if (!s || !s.value)
      throw Le(de.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${o}`, s);
  });
}
Td(Vd);
Ld(rd);
kd(Fl);
Jd();
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = $n();
  e.__INTLIFY__ = !0, md(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const yi = (e, t) => {
  const n = e[t];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((o, s) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(s.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
function xs(e = "consents") {
  let t = document.cookie.indexOf(e + "=");
  if (t === -1)
    return {};
  const n = document.cookie.substring(t);
  return t = n.indexOf(";"), t > -1 ? JSON.parse(n.substring(e.length + 1, t)) : JSON.parse(n.substring(e.length + 1));
}
function wp(e, t = 1, n = "consents", o = "Lax", s = "/", r = !0) {
  const i = new Date();
  i.setFullYear(i.getFullYear() + t), document.cookie = `${n}=${JSON.stringify(e)};expires=${i};samesite=${o};path=${s};secure=${r}`;
}
function Ap(e = "consents", t = "") {
  const n = xs(e);
  document.cookie = `${e}=${n};expires=Thu, 01-Jan-70 00:00:01 GMT;`;
}
function Pp(e, t, n) {
  function o() {
    var c, u, f;
    const r = [];
    let i = {};
    t.storageKey in localStorage ? i = JSON.parse(localStorage.getItem(t.storageKey) || "{}") : t.useMetaCookie && (i = xs(t.storageKey), Object.keys(i).length > 0 && localStorage.setItem(t.storageKey, JSON.stringify(i)));
    for (let m = 1; t.categories != null && m < t.categories.length; m++) {
      const p = [];
      if ("cookies" in t.categories[m]) {
        for (let k = 0; k < t.categories[m].cookies.length; k++) {
          const { cookies: y } = t.categories[m];
          y && (r.push({
            categoryId: t.categories[m].id,
            cookieId: y[k].id
          }), n[m].cookies[k].accepted = (c = i[`${t.storagePrefix}-${t.categories[m].id}-${y[k].id}`]) != null ? c : !1, p.push(n[m].cookies[k].accepted), n[m].cookies[k].accepted && typeof ((u = y[k]) == null ? void 0 : u.onAccepted) == "function" && y[k].onAccepted(), !n[m].cookies[k].accepted && typeof ((f = y[k]) == null ? void 0 : f.onDenied) == "function" && y[k].onDenied());
        }
        const _ = p.includes(!0), L = p.includes(!1);
        _ && !L ? n[m].accepted = !0 : _ && L && (n[m].partial = !0);
      }
    }
    return r;
  }
  if (t.useMetaCookie) {
    const { cookies: r } = t.categories[0];
    r && r.unshift(e);
  }
  for (let r = 0; r < t.categories.length; r++) {
    const i = {
      accepted: r === 0,
      partial: !1,
      cookies: []
    }, { cookies: c } = t.categories[r];
    if (c) {
      for (let u = 0; u < c.length; u++)
        i.cookies.push({ accepted: r === 0 });
      n.push(i);
    }
  }
  const s = o();
  t.attachGlobal && (window.Consents = {
    get storagePrefix() {
      return t.storagePrefix;
    },
    get storageKey() {
      return t.storageKey;
    },
    get ids() {
      return s;
    },
    get hasAccepted() {
      return this.storageKey in localStorage;
    },
    set(r, i, c) {
      const u = t.categories.findIndex((f) => f.id === r);
      if (u > 0) {
        const f = t.categories[u].cookies.findIndex((m) => m.id === i);
        if (f > -1) {
          const m = n[u];
          m.cookies[f].accepted = c;
          const p = m.cookies.map((k) => k.accepted);
          c && p.includes(!1) || !c && p.includes(!0) ? (m.accepted = !1, m.partial = !0) : c && !p.includes(!1) ? (m.accepted = !0, m.partial = !1) : !c && !p.includes(!0) && (m.accepted = !1, m.partial = !1);
          const _ = this.ids.find((k) => k.categoryId === r && k.cookieId === i), L = `${this.storagePrefix}-${r}-${i}`;
          if (_) {
            const k = JSON.parse(localStorage.getItem(this.storageKey) || "{}");
            if (Object.keys(k).length === 0)
              for (const y of this.ids)
                k[`${this.storagePrefix}-${y.categoryId}-${y.cookieId}`] = !1;
            if (L in k && (k[L] = c), localStorage.setItem(this.storageKey, JSON.stringify(k)), t.useMetaCookie) {
              const y = xs(this.storageKey);
              if (Object.keys(y).length === 0)
                for (const A of this.ids)
                  y[`${this.storagePrefix}-${A.categoryId}-${A.cookieId}`] = !1;
              y[L] = c, wp(y);
            }
          }
          return !0;
        }
      }
      return !1;
    },
    get(r, i) {
      const c = JSON.parse(localStorage.getItem(this.storageKey) || "{}");
      if (Object.keys(c).length === 0) {
        const u = t.categories.findIndex((f) => f.id === r);
        if (u > -1) {
          const f = t.categories[u].cookies.findIndex((m) => m.id === i);
          if (f > -1)
            return n[u].cookies[f].accepted;
        }
        return !1;
      }
      return !!c[`${this.storagePrefix}-${r}-${i}`];
    },
    clear() {
      aa(t, n);
    }
  });
}
const ho = "consent-manager-minimized";
function aa(e, t) {
  localStorage.removeItem(e.storageKey), localStorage.removeItem(ho), Ap(e.storageKey);
  for (let n = 1; n < e.categories.length; n++)
    if (e.categories[n].cookies)
      for (let o = 0; o < e.categories[n].cookies.length; o++)
        typeof e.categories[n].cookies[o].onDenied == "function" && e.categories[n].cookies[o].onDenied(), n > 0 && (t[n].cookies[o].accepted = !1, t[n].accepted = !1, t[n].partial = !1);
}
function Vp(e) {
  const { t, locale: n, fallbackLocale: o } = cn(), s = cn(), r = Ao([]), i = Ie(!0), c = Ie(!1), u = Ie(!1), f = Ie(!1), m = Ie([]), p = Ie(!1), _ = [
    "ar",
    "sq",
    "hy",
    "bg",
    "zh",
    "cs",
    "de",
    "da",
    "et",
    "es",
    "fi",
    "fr",
    "en",
    "el",
    "hr",
    "hu",
    "hi",
    "it",
    "lt",
    "lb",
    "lv",
    "nl",
    "no",
    "pl",
    "pt",
    "ro",
    "ru",
    "sl",
    "sk",
    "sv",
    "tr",
    "uk"
  ], L = Ie({
    id: t("metaCookieTitles.id"),
    name: t("metaCookieTitles.name"),
    provider: t("metaCookieTitles.provider"),
    purpose: t("metaCookieTitles.purpose"),
    cookieValidityPeriod: t("metaCookieTitles.cookieValidityPeriod")
  });
  ho in localStorage ? u.value = !1 : e.storageKey in localStorage || (u.value = !0);
  function k(W) {
    return (W.cookies && Array.isArray(W.cookies) ? W.cookies.length : 0).toLocaleString(w(n));
  }
  function y() {
    let W, D;
    w(i) ? (W = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-width"), D = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-height")) : (W = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-details-width"), D = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-details-height")), document.documentElement.style.setProperty("--transform-current-width", W), document.documentElement.style.setProperty("--transform-current-height", D);
  }
  function A(W) {
    let D, $ = window.innerHeight / 4;
    w(i) ? D = +getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-width").replace("px", "") : D = +getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-details-width").replace("px", "");
    const K = window.innerWidth / 2 - D / 2;
    $ = W.offsetTop || $;
    const ue = window.innerWidth - K - 45 - D / 2, me = window.innerHeight - $ - 60;
    document.documentElement.style.setProperty("--transform-minimize-x", `${ue}px`), document.documentElement.style.setProperty("--transform-minimize-y", `${me}px`);
  }
  function E(W, D) {
    r[D].partial = !1, r[D].accepted = W.target.checked;
    for (let $ = 0; $ < r[D].cookies.length; $++)
      r[D].cookies[$].accepted = W.target.checked;
  }
  function T(W) {
    W.preventDefault(), localStorage.removeItem(ho), y(), u.value = !0, Qi(() => {
      const D = document.getElementById("overlay"), $ = document.getElementById("container");
      A($), D.classList.remove("blur-overlay"), c.value = !1, f.value = !0, $.classList.add("maximize");
    });
  }
  function C(W) {
    W.preventDefault(), localStorage.setItem(ho, "true"), y();
    const D = document.getElementById("container"), $ = document.getElementById("overlay");
    $.classList.remove("blur-overlay-reverse"), D.classList.remove("transform-to-details"), D.classList.remove("transform-to-main"), D.classList.remove("maximize"), A(D), $.classList.add("blur-overlay"), D.classList.add("minimize");
    const K = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-minimize-animation-duration");
    setTimeout(() => {
      u.value = !1, c.value = !0;
    }, +K.replace("s", "") * 1e3 - 50);
  }
  function b() {
    y();
    const W = document.getElementById("container"), D = document.getElementById("overlay");
    if (!W || !D)
      return;
    D.classList.remove("blur-overlay-reverse"), A(W), D.classList.add("blur-overlay"), W.classList.add("hide-consent");
    const $ = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-hide-duration");
    setTimeout(() => {
      u.value = !1, D.classList.remove("blur-overlay"), W.classList.remove("hide-consent");
    }, +$.replace("s", "") * 1e3 - 50);
  }
  function O(W) {
    W.preventDefault();
    const D = document.getElementById("container"), $ = document.getElementById("cookie-consent-opacity-container");
    $.classList.remove("transform-opacity-to-details"), $.classList.add("transform-opacity-to-main"), D.classList.remove("transform-to-details"), D.classList.remove("maximize"), D.classList.add("transform-to-main");
    const K = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-animation-duration");
    setTimeout(() => {
      i.value = !0;
    }, +K.replace("s", "") / 2 * 1e3);
  }
  function x(W) {
    W.preventDefault();
    const D = document.getElementById("container"), $ = document.getElementById("cookie-consent-opacity-container");
    $.classList.remove("transform-opacity-to-main"), $.classList.add("transform-opacity-to-details"), D.classList.remove("transform-to-main"), D.classList.remove("maximize"), D.classList.add("transform-to-details");
    const K = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-animation-duration");
    setTimeout(() => {
      i.value = !1;
    }, +K.replace("s", "") / 2 * 1e3);
  }
  function V() {
    b();
    const W = {};
    for (let D = 1; D < w(r).length; D++)
      for (let $ = 0; $ < w(r)[D].cookies.length; $++) {
        const K = w(r)[D].cookies[$], ue = e.categories[D].cookies[$], me = `${e.storagePrefix}-${e.categories[D].id}-${ue.id}`;
        K.accepted ? (W[me] = !0, "onAccepted" in ue && typeof ue.onAccepted == "function" && ue.onAccepted()) : (W[me] = !1, "onDenied" in ue && typeof ue.onDenied == "function" && ue.onDenied());
      }
    localStorage.setItem(e.storageKey, JSON.stringify(W)), e.useMetaCookie && M(W);
  }
  function M(W) {
    const D = new Date();
    D.setFullYear(D.getFullYear() + 1), document.cookie = `${e.storageKey}=${JSON.stringify(W)};samesite=Lax;secure=true;expires=${D}`;
  }
  function G() {
    b();
    for (const D of w(r)) {
      D.accepted = !0, D.partial = !1;
      for (const $ of D.cookies)
        $.accepted = !0;
    }
    const W = {};
    for (let D = 1; D < e.categories.length; D++)
      for (let $ = 0; $ < e.categories[D].cookies.length; $++) {
        const K = e.categories[D].cookies[$], ue = `${e.storagePrefix}-${e.categories[D].id}-${K.id}`;
        W[ue] = !0, "onAccepted" in K && typeof K.onAccepted == "function" && K.onAccepted();
      }
    localStorage.setItem(e.storageKey, JSON.stringify(W)), e.useMetaCookie && M(W);
  }
  function J(W) {
    W.preventDefault();
    const D = W.target.parentElement;
    if (D) {
      const $ = D.querySelector(".table-container");
      if ($) {
        const K = $.querySelectorAll("table"), ue = +$.style.height.replace("px", "");
        let me = 0;
        if (ue === 0) {
          K.length > 1 && (me -= 4 * (K.length - 1));
          for (const ke of K)
            me += ke.offsetHeight + 7;
          $.style.height = `${me}px`;
        } else
          $.style.height = "0";
      }
    }
  }
  function z(W, D, $) {
    const K = W.target.classList.toggle("active");
    if (D === 0)
      return;
    if (!$ && $ !== 0) {
      if (K) {
        w(r)[D].partial = !1, w(r)[D].accepted = !0;
        for (let me = 0; me < w(r)[D].cookies.length; me++)
          w(r)[D].cookies[me].accepted = !0;
      } else {
        w(r)[D].partial = !1, w(r)[D].accepted = !1;
        for (let me = 0; me < w(r)[D].cookies.length; me++)
          w(r)[D].cookies[me].accepted = !1;
      }
      return;
    }
    const ue = w(m)[D];
    if (K) {
      const me = ue.querySelectorAll(".table-container .binary-slider");
      w(r)[D].cookies[$].accepted = !0;
      const ke = [];
      for (const Ve of me)
        ke.push(Ve.classList.contains("active"));
      ke.includes(!1) ? w(r)[D].partial = !0 : (w(r)[D].partial = !1, w(r)[D].accepted = !0);
    } else {
      const me = ue.querySelectorAll(".table-container .binary-slider"), ke = [];
      for (const Ve of me)
        ke.push(Ve.classList.contains("active"));
      w(r)[D].partial = ke.includes(!0), w(r)[D].accepted = !1, w(r)[D].cookies[$].accepted = !1;
    }
  }
  function Y(W) {
    W == null || W.preventDefault(), aa(e, r);
  }
  function q() {
    p.value = !p.value;
  }
  function re(W) {
    W = W.substring(0, 2), _.includes(W) ? yi(/* @__PURE__ */ Object.assign({ "../locales/ar.json": () => import("./ar-a0668e8c.mjs"), "../locales/bg.json": () => import("./bg-21b7afb8.mjs"), "../locales/cs.json": () => import("./cs-170b662e.mjs"), "../locales/da.json": () => import("./da-a20426dd.mjs"), "../locales/de.json": () => import("./de-2ebdf4bb.mjs"), "../locales/el.json": () => import("./el-b3dc7ef8.mjs"), "../locales/en.json": () => import("./en-62bf1de4.mjs"), "../locales/es.json": () => import("./es-67ab5fc3.mjs"), "../locales/et.json": () => import("./et-b858ea7d.mjs"), "../locales/fi.json": () => import("./fi-23606124.mjs"), "../locales/fr.json": () => import("./fr-77b74fc8.mjs"), "../locales/hi.json": () => import("./hi-a39364d1.mjs"), "../locales/hr.json": () => import("./hr-29c0a34d.mjs"), "../locales/hu.json": () => import("./hu-7c5bf8e3.mjs"), "../locales/hy.json": () => import("./hy-9351108f.mjs"), "../locales/it.json": () => import("./it-eaa41a88.mjs"), "../locales/lb.json": () => import("./lb-46885c47.mjs"), "../locales/lt.json": () => import("./lt-776c44b5.mjs"), "../locales/lv.json": () => import("./lv-50c21b61.mjs"), "../locales/nl.json": () => import("./nl-797d4811.mjs"), "../locales/no.json": () => import("./no-971fd50f.mjs"), "../locales/pl.json": () => import("./pl-a06c4194.mjs"), "../locales/pt.json": () => import("./pt-b93cd5f4.mjs"), "../locales/ro.json": () => import("./ro-e196b17e.mjs"), "../locales/ru.json": () => import("./ru-1af4052b.mjs"), "../locales/sk.json": () => import("./sk-58b43668.mjs"), "../locales/sl.json": () => import("./sl-92c01113.mjs"), "../locales/sq.json": () => import("./sq-52995242.mjs"), "../locales/sv.json": () => import("./sv-f002d47b.mjs"), "../locales/tr.json": () => import("./tr-61572c21.mjs"), "../locales/uk.json": () => import("./uk-92d78be5.mjs"), "../locales/zh.json": () => import("./zh-c568f745.mjs") }), `../locales/${W}.json`).then((D) => {
      s.mergeLocaleMessage(W, D.default);
    }) : _.includes(w(o).toString()) ? yi(/* @__PURE__ */ Object.assign({ "../locales/ar.json": () => import("./ar-a0668e8c.mjs"), "../locales/bg.json": () => import("./bg-21b7afb8.mjs"), "../locales/cs.json": () => import("./cs-170b662e.mjs"), "../locales/da.json": () => import("./da-a20426dd.mjs"), "../locales/de.json": () => import("./de-2ebdf4bb.mjs"), "../locales/el.json": () => import("./el-b3dc7ef8.mjs"), "../locales/en.json": () => import("./en-62bf1de4.mjs"), "../locales/es.json": () => import("./es-67ab5fc3.mjs"), "../locales/et.json": () => import("./et-b858ea7d.mjs"), "../locales/fi.json": () => import("./fi-23606124.mjs"), "../locales/fr.json": () => import("./fr-77b74fc8.mjs"), "../locales/hi.json": () => import("./hi-a39364d1.mjs"), "../locales/hr.json": () => import("./hr-29c0a34d.mjs"), "../locales/hu.json": () => import("./hu-7c5bf8e3.mjs"), "../locales/hy.json": () => import("./hy-9351108f.mjs"), "../locales/it.json": () => import("./it-eaa41a88.mjs"), "../locales/lb.json": () => import("./lb-46885c47.mjs"), "../locales/lt.json": () => import("./lt-776c44b5.mjs"), "../locales/lv.json": () => import("./lv-50c21b61.mjs"), "../locales/nl.json": () => import("./nl-797d4811.mjs"), "../locales/no.json": () => import("./no-971fd50f.mjs"), "../locales/pl.json": () => import("./pl-a06c4194.mjs"), "../locales/pt.json": () => import("./pt-b93cd5f4.mjs"), "../locales/ro.json": () => import("./ro-e196b17e.mjs"), "../locales/ru.json": () => import("./ru-1af4052b.mjs"), "../locales/sk.json": () => import("./sk-58b43668.mjs"), "../locales/sl.json": () => import("./sl-92c01113.mjs"), "../locales/sq.json": () => import("./sq-52995242.mjs"), "../locales/sv.json": () => import("./sv-f002d47b.mjs"), "../locales/tr.json": () => import("./tr-61572c21.mjs"), "../locales/uk.json": () => import("./uk-92d78be5.mjs"), "../locales/zh.json": () => import("./zh-c568f745.mjs") }), `../locales/${w(o)}.json`).then((D) => {
      s.mergeLocaleMessage(w(o).toString(), D.default);
    }) : import("./en-62bf1de4.mjs").then((D) => {
      s.mergeLocaleMessage("en", D.default);
    });
  }
  return Qs(() => {
    Pp(w(L), e, r), document.documentElement.style.setProperty("--cookie-consent-animation-duration", e.animationDuration || "0.7s"), document.documentElement.style.setProperty("--cookie-consent-minimize-animation-duration", e.minimizeAnimationDuration || "1s"), document.documentElement.style.setProperty("--cookie-consent-hide-duration", e.hideDuration || "1s"), jc(() => {
      var D;
      const W = (D = w(n)) == null ? void 0 : D.substring(0, 2);
      re(W);
    });
  }), to(() => {
  }), {
    consents: r,
    links: e.links,
    categories: e.categories,
    detailsCards: m,
    toggleInfo: q,
    toggleConsent: z,
    toggleCookieInformation: J,
    clearSite: Y,
    getCookieCountForCategory: k,
    setCategoryConsent: E,
    acceptSelection: V,
    acceptAll: G,
    minimize: C,
    maximize: T,
    showMain: O,
    showDetails: x,
    isInfoOpen: p,
    isMainContainerVisible: i,
    isMinimized: c,
    showConsent: u,
    blurOverlayReverse: f
  };
}
const at = (e) => (Sc("data-v-bd897d87"), e = e(), wc(), e), Rp = { id: "cookie-consent" }, Mp = ["title"], Fp = /* @__PURE__ */ at(() => /* @__PURE__ */ j("span", { class: "settings-icon" }, null, -1)), xp = [
  Fp
], $p = ["dir"], Up = { id: "cookie-consent-opacity-container" }, jp = { key: 0 }, Wp = { class: "relative z-10" }, Hp = ["title"], Bp = /* @__PURE__ */ at(() => /* @__PURE__ */ j("span", { class: "absolute arrow-up top-[-4px] left-[5px]" }, null, -1)), Kp = {
  class: "text-[13px] px-2 text-left my-1 mx-0",
  style: { "line-height": "1.2" }
}, Yp = ["title"], Gp = ["title"], zp = { class: "inline-flex h-[45px] mt-6" }, Xp = /* @__PURE__ */ at(() => /* @__PURE__ */ j("span", { class: "select-none text-[36px]" }, "🍪", -1)), qp = { class: "select-none font-bold mt-[10px]" }, Jp = /* @__PURE__ */ at(() => /* @__PURE__ */ j("hr", { class: "mt-5 mb-2 mx-0 rounded-b-2xl" }, null, -1)), Qp = /* @__PURE__ */ at(() => /* @__PURE__ */ j("hr", { class: "mt-2 mb-3.5 rounded-t-2xl" }, null, -1)), Zp = { class: "categories" }, em = { class: "relative w-[20px] h-[20px] flex checkbox-container" }, tm = ["id", "checked", "disabled", "onChange"], nm = {
  key: 0,
  class: "checkbox-partial-indicator"
}, om = {
  key: 1,
  class: "checkbox-none-indicator"
}, sm = ["for"], rm = {
  id: "link-container",
  class: "bg-white rounded-t-lg sticky pb-3 -bottom-2"
}, im = { class: "my-[6px] rounded-lg" }, lm = ["href"], am = ["href"], cm = ["href"], um = {
  key: 1,
  id: "details-container",
  class: "text-left"
}, fm = ["title"], dm = /* @__PURE__ */ at(() => /* @__PURE__ */ j("span", null, "-", -1)), pm = [
  dm
], mm = { class: "inline-flex h-[45px] mt-[20px] rtl:mt-[30px]" }, _m = /* @__PURE__ */ at(() => /* @__PURE__ */ j("span", { class: "select-none text-[36px]" }, "🍪", -1)), gm = { class: "select-none font-bold mt-[10px]" }, hm = /* @__PURE__ */ at(() => /* @__PURE__ */ j("hr", { class: "my-2 mx-0 rounded-b-2xl" }, null, -1)), Em = { class: "text-center" }, bm = /* @__PURE__ */ at(() => /* @__PURE__ */ j("hr", { class: "mt-2 mb-3.5 rounded-t-2xl" }, null, -1)), Nm = {
  key: 0,
  class: "rtl:right-auto rtl:left-0 inline-flex absolute right-0 top-0"
}, vm = ["id", "onClick"], ym = /* @__PURE__ */ at(() => /* @__PURE__ */ j("span", { class: "binary-slider-circle" }, null, -1)), Om = [
  ym
], Tm = { class: "label-container pt-4" }, Lm = { class: "mt-2 mb-1 ltr:before:content-[''] ltr:before:border-2 ltr:before:border-solid ltr:before:border-black ltr:before:mr-4 rtl:border-r-4 rtl:border-solid rtl:border-black rtl:text-right rtl:pr-2 font-bold" }, km = { class: "table-container h-0 transition-all duration-700 overflow-hidden" }, Cm = { key: 0 }, Dm = { class: "table-binary-slider-container" }, Im = ["onClick"], Sm = /* @__PURE__ */ at(() => /* @__PURE__ */ j("span", { class: "binary-slider-circle" }, null, -1)), wm = [
  Sm
], Am = { key: 0 }, Pm = { key: 1 }, Vm = { key: 0 }, Rm = { key: 1 }, Mm = { key: 0 }, Fm = {
  key: 1,
  style: { "white-space": "pre-line" }
}, xm = { key: 1 }, $m = ["href"], Um = { key: 2 }, jm = { key: 0 }, Wm = { key: 1 }, Hm = { key: 3 }, Bm = { key: 0 }, Km = { key: 1 }, Ym = { key: 4 }, Gm = { key: 0 }, zm = { key: 1 }, Xm = { key: 5 }, qm = ["href"], Jm = /* @__PURE__ */ dl({
  __name: "CookieConsent",
  props: {
    categories: null,
    requiredLinks: null,
    links: null,
    useMetaCookie: { type: Boolean, default: !1 },
    attachGlobal: { type: Boolean, default: !1 },
    animationDuration: { default: "1.5s" },
    minimizeAnimationDuration: { default: "1s" },
    hideDuration: { default: "1s" },
    storagePrefix: { default: "consent" },
    storageKey: { default: "consents" },
    maskContent: { type: Boolean, default: !0 },
    maskColor: { default: "#47494E" }
  },
  setup(e) {
    const t = e;
    pf((J) => ({
      "099064aa": w(s)
    }));
    const { t: n, locale: o } = cn({}), s = t.maskContent ? t.maskColor : "transparent", {
      toggleConsent: r,
      toggleInfo: i,
      toggleCookieInformation: c,
      getCookieCountForCategory: u,
      setCategoryConsent: f,
      acceptAll: m,
      acceptSelection: p,
      minimize: _,
      maximize: L,
      showMain: k,
      showDetails: y,
      clearSite: A,
      isInfoOpen: E,
      isMainContainerVisible: T,
      isMinimized: C,
      showConsent: b,
      blurOverlayReverse: O,
      links: x,
      categories: V,
      consents: M,
      detailsCards: G
    } = Vp(t);
    return (J, z) => (ie(), le("div", Rp, [
      j("div", {
        class: "settings-icon-container",
        title: w(n)("generalLabels.title"),
        onClick: z[0] || (z[0] = (Y) => w(L)(Y))
      }, xp, 8, Mp),
      w(b) ? (ie(), le("div", {
        key: 0,
        id: "overlay",
        class: Xe(["w-full h-full fixed top-0 left-0", { hidden: w(C), "blur-overlay-reverse": w(O) }])
      }, [
        j("div", {
          id: "container",
          dir: w(o) === "ar" ? "rtl" : "ltr",
          class: "rounded py-2 px-4 text-center bg-white relative w-[var(--cookie-consent-width)] h-[var(--cookie-consent-height)] overflow-x-hidden overflow-y-auto mx-auto my-[8vh] sm:my-[25vh]"
        }, [
          j("div", Up, [
            w(T) ? (ie(), le("div", jp, [
              j("header", null, [
                j("div", Wp, [
                  j("span", {
                    class: "cookie-consent-info font-bold",
                    title: w(n)("generalLabels.info.title"),
                    onClick: z[1] || (z[1] = (Y) => w(i)())
                  }, null, 8, Hp),
                  j("div", {
                    class: Xe(["rounded w-full h-max bg-blue-200 absolute top-[32px] left-[3px]", { "cookie-consent-info-hide": !w(E) }])
                  }, [
                    Bp,
                    j("p", Kp, Z(w(n)("generalLabels.info.text")), 1)
                  ], 2)
                ]),
                j("a", {
                  rel: "nofollow",
                  href: "#",
                  class: "minimizer",
                  title: w(n)("generalLabels.minimize"),
                  onClick: z[2] || (z[2] = (Y) => w(_)(Y))
                }, null, 8, Yp),
                j("a", {
                  rel: "nofollow",
                  href: "#",
                  class: "clear-site",
                  title: w(n)("generalLabels.clearSite"),
                  onClick: z[3] || (z[3] = (Y) => w(A)(Y))
                }, null, 8, Gp),
                j("div", zp, [
                  Xp,
                  j("h4", qp, Z(w(n)("generalLabels.title")), 1)
                ]),
                Jp,
                j("p", null, Z(w(n)("generalLabels.description.main")), 1),
                Qp
              ]),
              j("div", Zp, [
                (ie(!0), le(Ce, null, _n(w(V), (Y, q) => (ie(), le("div", {
                  key: Y.id,
                  class: Xe(["relative inline-flex", { "ml-4": q > 0 }])
                }, [
                  j("div", em, [
                    j("input", {
                      id: `cookie-consent-checkbox-${Y.id}`,
                      type: "checkbox",
                      checked: w(M)[q].accepted,
                      disabled: q === 0,
                      class: "m-0",
                      onChange: (re) => w(f)(re, q)
                    }, null, 40, tm),
                    q > 0 && w(M)[q].partial ? (ie(), le("span", nm)) : ft("", !0),
                    q > 0 && !w(M)[q].partial && !w(M)[q].accepted ? (ie(), le("span", om)) : ft("", !0)
                  ]),
                  j("label", {
                    for: `cookie-consent-checkbox-${Y.id}`,
                    class: "ml-2 rtl:mr-2 select-none hover:text-orange-400"
                  }, Z(Y.label), 9, sm)
                ], 2))), 128)),
                j("div", null, [
                  j("button", {
                    class: "btn",
                    onClick: z[4] || (z[4] = (Y) => w(m)())
                  }, Z(w(n)("generalLabels.button.acceptAll")), 1),
                  j("button", {
                    class: "btn",
                    onClick: z[5] || (z[5] = (Y) => w(p)())
                  }, Z(w(n)("generalLabels.button.acceptSelection")), 1)
                ])
              ]),
              j("div", rm, [
                j("div", im, [
                  j("a", {
                    rel: "nofollow",
                    href: "#",
                    class: "font-bold shadow-green-700 hover:shadow-[0_0_10px_green] text-[var(--cookie-consent-settings-color)] w-full h-full p-0.5 block",
                    onClick: z[6] || (z[6] = (Y) => w(y)(Y))
                  }, Z(w(n)("generalLabels.individualSettings")), 1)
                ]),
                j("a", {
                  class: "hover:text-orange-400",
                  rel: "nofollow",
                  href: "#",
                  onClick: z[7] || (z[7] = (Y) => w(y)(Y))
                }, [
                  j("b", null, Z(w(n)("generalLabels.cookieDetails")), 1)
                ]),
                j("a", {
                  rel: "nofollow",
                  href: w(n)("generalLabels.requiredLinks.privacy.href")
                }, [
                  j("b", null, Z(w(n)("generalLabels.requiredLinks.privacy.title")), 1)
                ], 8, lm),
                j("a", {
                  rel: "nofollow",
                  href: w(n)("generalLabels.requiredLinks.impress.href")
                }, [
                  j("b", null, Z(w(n)("generalLabels.requiredLinks.impress.title")), 1)
                ], 8, am),
                (ie(!0), le(Ce, null, _n(w(x), (Y) => (ie(), le("a", {
                  key: Y.title,
                  rel: "nofollow",
                  href: Y.href
                }, [
                  j("b", null, Z(Y.title), 1)
                ], 8, cm))), 128))
              ])
            ])) : (ie(), le("div", um, [
              j("header", null, [
                j("a", {
                  rel: "nofollow",
                  href: "#",
                  class: "absolute right-10 font-bold pt-[5px] pb-[10px] pl-[16px] pr-[12px]",
                  onClick: z[8] || (z[8] = (Y) => w(k)(Y))
                }, Z(w(n)("generalLabels.details.back")), 1),
                j("a", {
                  rel: "nofollow",
                  href: "#",
                  class: "minimizer",
                  title: w(n)("generalLabels.minimize"),
                  onClick: z[9] || (z[9] = (Y) => w(_)(Y))
                }, pm, 8, fm),
                j("div", mm, [
                  _m,
                  j("h4", gm, Z(w(n)("generalLabels.title")), 1)
                ]),
                hm,
                j("p", Em, Z(w(n)("generalLabels.description.details")), 1),
                bm,
                j("div", null, [
                  j("button", {
                    onClick: z[10] || (z[10] = (Y) => w(m)())
                  }, Z(w(n)("generalLabels.button.acceptAll")), 1),
                  j("button", {
                    onClick: z[11] || (z[11] = (Y) => w(p)())
                  }, Z(w(n)("generalLabels.button.acceptSelection")), 1)
                ])
              ]),
              (ie(!0), le(Ce, null, _n(w(V), (Y, q) => (ie(), le("div", {
                key: Y.id,
                ref_for: !0,
                ref: (re) => {
                  w(G)[q] = re;
                },
                class: "cookie-details-card w-full rounded relative px-3 my-4 mx-2"
              }, [
                q > 0 ? (ie(), le("div", Nm, [
                  j("span", {
                    class: Xe(["select-none mt-[12px] rtl:mt-[6px]", { hidden: !w(M)[q].accepted }])
                  }, Z(w(n)("generalLabels.binarySliderLabels.accepted")), 3),
                  j("span", {
                    class: Xe(["select-none mt-[12px] rtl:mt-[6px]", { hidden: w(M)[q].accepted || w(M)[q].partial }])
                  }, Z(w(n)("generalLabels.binarySliderLabels.declined")), 3),
                  j("span", {
                    class: Xe(["select-none mt-[12px] rtl:mt-[6px]", { hidden: !w(M)[q].partial }])
                  }, Z(w(n)("generalLabels.binarySliderLabels.partial")), 3),
                  j("div", null, [
                    j("div", {
                      id: `cookie-consent-details-checkbox-${Y.id}`,
                      class: Xe(["binary-slider m-[8px]", { active: w(M)[q].accepted, partial: w(M)[q].partial }]),
                      onClick: (re) => w(r)(re, q)
                    }, Om, 10, vm)
                  ])
                ])) : ft("", !0),
                j("div", Tm, [
                  j("h5", Lm, Z(Y.label) + " (" + Z(w(u)(Y)) + ") ", 1)
                ]),
                j("p", null, Z(Y.description), 1),
                j("a", {
                  rel: "nofollow",
                  href: "#",
                  class: "text-center block font-bold",
                  onClick: z[12] || (z[12] = (re) => w(c)(re))
                }, Z(w(n)("generalLabels.showCookieInformation")), 1),
                j("div", km, [
                  (ie(!0), le(Ce, null, _n(Y.cookies, (re, W) => (ie(), le("table", {
                    key: re.cookieName
                  }, [
                    q > 0 ? (ie(), le("tr", Cm, [
                      j("td", null, Z(w(n)("cookieLabels.accept")), 1),
                      j("td", null, [
                        j("div", Dm, [
                          j("div", {
                            class: Xe(["binary-slider", { active: w(M)[q].cookies[W].accepted }]),
                            onClick: (D) => w(r)(D, q, W)
                          }, wm, 10, Im),
                          j("div", {
                            class: Xe(["select-none mt-0 ml-2 rtl:mr-2 rtl:-mt-[8px]", { "!hidden": !w(M)[q].cookies[W].accepted }])
                          }, Z(w(n)("generalLabels.binarySliderLabels.accepted")), 3),
                          j("div", {
                            class: Xe(["select-none mt-0 ml-2 rtl:mr-2 rtl:-mt-[8px]", { "!hidden": w(M)[q].cookies[W].accepted }])
                          }, Z(w(n)("generalLabels.binarySliderLabels.declined")), 3)
                        ])
                      ])
                    ])) : ft("", !0),
                    j("tr", null, [
                      j("td", null, Z(w(n)("cookieLabels.name")), 1),
                      q === 0 && W === 0 && e.useMetaCookie ? (ie(), le("td", Am, Z(w(n)("metaCookieTitles.name")), 1)) : (ie(), le("td", Pm, Z(re.name), 1))
                    ]),
                    j("tr", null, [
                      j("td", null, Z(w(n)("cookieLabels.provider")), 1),
                      q === 0 && W === 0 && e.useMetaCookie ? (ie(), le("td", Vm, Z(w(n)("metaCookieTitles.provider")), 1)) : (ie(), le("td", Rm, Z(re.provider), 1))
                    ]),
                    j("tr", null, [
                      j("td", null, Z(w(n)("cookieLabels.purpose")), 1),
                      q === 0 && W === 0 && e.useMetaCookie ? (ie(), le("td", Mm, Z(w(n)("metaCookieTitles.purpose")), 1)) : (ie(), le("td", Fm, Z(re.purpose), 1))
                    ]),
                    "privacyURL" in re ? (ie(), le("tr", xm, [
                      j("td", null, Z(w(n)("cookieLabels.privacy")), 1),
                      j("td", null, [
                        j("a", {
                          rel: "nofollow",
                          href: re.privacyURL
                        }, Z(re.privacyURL), 9, $m)
                      ])
                    ])) : ft("", !0),
                    "hosts" in re ? (ie(), le("tr", Um, [
                      j("td", null, Z(w(n)("cookieLabels.hosts")), 1),
                      q === 0 && W === 0 && e.useMetaCookie ? (ie(), le("td", jm, Z(w(n)("metaCookieTitles.hosts")), 1)) : (ie(), le("td", Wm, Z(re.hosts), 1))
                    ])) : ft("", !0),
                    "cookieName" in re ? (ie(), le("tr", Hm, [
                      j("td", null, Z(w(n)("cookieLabels.cookieName")), 1),
                      q === 0 && W === 0 && e.useMetaCookie ? (ie(), le("td", Bm, " consents ")) : (ie(), le("td", Km, [
                        j("i", null, Z(re.cookieName), 1)
                      ]))
                    ])) : ft("", !0),
                    "cookieValidityPeriod" in re ? (ie(), le("tr", Ym, [
                      j("td", null, Z(w(n)("cookieLabels.cookieValidityPeriod")), 1),
                      q === 0 && W === 0 && e.useMetaCookie ? (ie(), le("td", Gm, Z(w(n)("metaCookieTitles.cookieValidityPeriod")), 1)) : (ie(), le("td", zm, Z(re.cookieValidityPeriod), 1))
                    ])) : ft("", !0),
                    "links" in re && re.links && re.links.length > 0 ? (ie(), le("tr", Xm, [
                      j("td", null, Z(w(n)("cookieLabels.links")), 1),
                      j("td", null, [
                        (ie(!0), le(Ce, null, _n(re.links, (D) => (ie(), le("a", {
                          key: D.title,
                          rel: "nofollow",
                          href: D.href,
                          target: "_blank"
                        }, Z(D.title || D.href), 9, qm))), 128))
                      ])
                    ])) : ft("", !0)
                  ]))), 128))
                ])
              ]))), 128))
            ]))
          ])
        ], 8, $p)
      ], 2)) : ft("", !0)
    ]));
  }
});
const ca = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Qm = /* @__PURE__ */ ca(Jm, [["__scopeId", "data-v-bd897d87"]]);
const Zm = { class: "language-indicator-container" }, e_ = ["onClick", "title"], t_ = ["innerHTML"], n_ = {
  __name: "LanguageFlags",
  setup(e) {
    const { locale: t } = cn(), n = [
      {
        locale: "de",
        flag: "&#127465&#127466",
        title: "German"
      },
      {
        locale: "en",
        flag: "&#127468&#127463",
        title: "English"
      },
      {
        locale: "da",
        flag: "&#127465&#127472",
        title: "Danish"
      },
      {
        locale: "nl",
        flag: "&#127475&#127473",
        title: "Dutch"
      },
      {
        locale: "lb",
        flag: "&#127473&#127482",
        title: "Luxembourgian"
      },
      {
        locale: "ro",
        flag: "&#127479&#127476",
        title: "Romanian"
      },
      {
        locale: "hu",
        flag: "&#127469&#127482",
        title: "Hungarian"
      },
      {
        locale: "fr",
        flag: "&#127467&#127479",
        title: "French"
      },
      {
        locale: "pl",
        flag: "&#127477&#127473",
        title: "Polish"
      },
      {
        locale: "cs",
        flag: "&#127464&#127487",
        title: "Czech"
      },
      {
        locale: "it",
        flag: "&#127470&#127481",
        title: "Italian"
      },
      {
        locale: "hr",
        flag: "&#127469&#127479",
        title: "Croatian"
      },
      {
        locale: "sl",
        flag: "&#127480&#127470",
        title: "Slovenian"
      },
      {
        locale: "sk",
        flag: "&#127480&#127472",
        title: "Slovakian"
      },
      {
        locale: "es",
        flag: "&#127466&#127480",
        title: "Spanish"
      },
      {
        locale: "pt",
        flag: "&#127477&#127481",
        title: "Portuguese"
      },
      {
        locale: "et",
        flag: "&#127466&#127466",
        title: "Estonian"
      },
      {
        locale: "lv",
        flag: "&#127473&#127483",
        title: "Latvian"
      },
      {
        locale: "lt",
        flag: "&#127473&#127481",
        title: "Lithuanian"
      },
      {
        locale: "no",
        flag: "&#127475&#127476",
        title: "Norwegian"
      },
      {
        locale: "sv",
        flag: "&#127480&#127466",
        title: "Swedish"
      },
      {
        locale: "fi",
        flag: "&#127467&#127470",
        title: "Finnish"
      },
      {
        locale: "ru",
        flag: "&#127479&#127482",
        title: "Russian"
      },
      {
        locale: "uk",
        flag: "&#127482&#127462",
        title: "Ukrainian"
      },
      {
        locale: "el",
        flag: "&#127468&#127479",
        title: "Greek"
      },
      {
        locale: "tr",
        flag: "&#127481&#127479",
        title: "Turkish"
      },
      {
        locale: "bg",
        flag: "&#127463&#127468",
        title: "Bulgarian"
      },
      {
        locale: "sq",
        flag: "&#127462&#127473",
        title: "Albanian"
      },
      {
        locale: "hy",
        flag: "&#127462&#127474",
        title: "Armenian"
      },
      {
        locale: "zh",
        flag: "&#127464&#127475",
        title: "Chinese"
      },
      {
        locale: "hi",
        flag: "&#127470&#127475",
        title: "Indian (Hindi)"
      },
      {
        locale: "ar",
        flag: "&#127462&#127466",
        title: "Arabian"
      },
      {
        flag: "&#8634;",
        title: "Reset"
      }
    ];
    function o(s = "en", r = !1) {
      console.log(r), r && (window.Consents.clear(), location.reload()), t.value = s;
    }
    return (s, r) => (ie(), le("div", Zm, [
      (ie(), le(Ce, null, _n(n, (i, c) => j("span", {
        key: i.locale,
        class: "language-indicator",
        onClick: (u) => o(i.locale, c === n.length - 1),
        title: i.title
      }, [
        j("span", {
          innerHTML: i.flag
        }, null, 8, t_)
      ], 8, e_)), 64))
    ]));
  }
}, o_ = /* @__PURE__ */ ca(n_, [["__scopeId", "data-v-02b272b6"]]), s_ = { style: { position: "relative", "z-index": "1" } }, r_ = /* @__PURE__ */ dl({
  __name: "App",
  setup(e) {
    Ie("en");
    const t = {
      lang: "en",
      requiredLinks: {
        privacy: {
          title: "Datenschutz",
          href: "/datenschutz"
        },
        impress: {
          title: "Impressum",
          href: "/impressum"
        }
      },
      categories: [
        {
          id: "essential",
          label: "Essenziell",
          description: "Essenzielle Cookies ermöglichen grundlegende Funktionalität und sind für den einwandfreien Betrieb der Webseite unabdingbar.",
          cookies: [
            {
              id: "session-cookie",
              name: "Sitzungscookie",
              provider: "Eigentümer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zusätzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            }
          ]
        },
        {
          id: "statistic",
          label: "Statistik",
          description: "Statistische Cookies geben uns Einblicke in das Besucherverhalten. Damit können wir u.A. in Erfahrung bringen, welche Seiten wie häufig besucht wurden und wie lange ein Besucher auf einer Seite verweilt.",
          cookies: [
            {
              id: "session-cookie-2",
              name: "Sitzungscookie 2",
              provider: "Eigentümer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zusätzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            },
            {
              id: "session-cookie-3",
              name: "Sitzungscookie 3",
              provider: "Eigentümer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zusätzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            },
            {
              id: "matomo",
              name: "Matomo",
              provider: "Eigentümer der Webseite",
              purpose: "Wird verwendet um einige Details über den Besucher zu speichern, wie die eindeutige Besucher-ID",
              cookieName: "_pk_id*, _pk_ref*, _pk_ses*, _pk_cvar*, _pk_hsr*",
              cookieValidityPeriod: "13 Monate, 6 Monate, 30 Minuten, 30 Minuten, 30 Minuten",
              links: [
                {
                  title: "Matomo FAQ",
                  href: "https://matomo.org/faq/general/faq_146/"
                }
              ],
              onAccepted() {
              },
              onDenied() {
              }
            }
          ]
        },
        {
          id: "essential2",
          label: "Essenziell 2",
          description: "Essenzielle Cookies ermöglichen grundlegende Funktionalität und sind für den einwandfreien Betrieb der Webseite unabdingbar.",
          cookies: [
            {
              id: "session-cookie",
              name: "Sitzungscookie",
              provider: "Eigentümer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zusätzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            },
            {
              id: "session-cookie-7",
              name: "Sitzungscookie 3",
              provider: "Eigentümer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zusätzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            }
          ]
        },
        {
          id: "essential3",
          label: "Essenziell 3",
          description: "Essenzielle Cookies ermöglichen grundlegende Funktionalität und sind für den einwandfreien Betrieb der Webseite unabdingbar.",
          cookies: [
            {
              id: "session-cookie",
              name: "Sitzungscookie",
              provider: "Eigentümer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zusätzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            },
            {
              id: "session-cookie-6",
              name: "Sitzungscookie 3",
              provider: "Eigentümer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zusätzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            }
          ]
        },
        {
          id: "essential4",
          label: "Essenziell 4",
          description: "Essenzielle Cookies ermöglichen grundlegende Funktionalität und sind für den einwandfreien Betrieb der Webseite unabdingbar.",
          cookies: [
            {
              id: "session-cookie",
              name: "Sitzungscookie",
              provider: "Eigentümer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zusätzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            },
            {
              id: "session-cookie-5",
              name: "Sitzungscookie 3",
              provider: "Eigentümer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zusätzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            }
          ]
        }
      ]
    };
    return (n, o) => (ie(), le("div", s_, [
      Me(o_, { style: { position: "absolute", "z-index": "2" } }),
      Me(Qm, {
        ref: "cookie-consent",
        "use-meta-cookie": !0,
        "required-links": t.requiredLinks,
        categories: t.categories,
        "attach-global": !0,
        style: { position: "absolute", "z-index": "1" }
      }, null, 8, ["required-links", "categories"])
    ]));
  }
});
const i_ = hf(r_), l_ = Np({
  legacy: !1,
  locale: "de",
  fallbackLocale: "en"
});
i_.use(l_).mount("#app");
