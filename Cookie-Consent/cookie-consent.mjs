var In = (e, t, n) => new Promise((o, r) => {
  var s = (u) => {
    try {
      c(n.next(u));
    } catch (f) {
      r(f);
    }
  }, i = (u) => {
    try {
      c(n.throw(u));
    } catch (f) {
      r(f);
    }
  }, c = (u) => u.done ? o(u.value) : Promise.resolve(u.value).then(s, i);
  c((n = n.apply(e, t)).next());
});
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
    o(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && o(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return r.integrity && (s.integrity = r.integrity), r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy), r.crossorigin === "use-credentials" ? s.credentials = "include" : r.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function o(r) {
    if (r.ep)
      return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
window.process = {
  env: {
    NODE_ENV: "production"
  }
};
function jt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function xs(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ve(o) ? da(o) : xs(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (ve(e))
      return e;
    if (ge(e))
      return e;
  }
}
const ca = /;(?![^(]*\))/g, ua = /:([^]+)/, fa = new RegExp("\\/\\*.*?\\*\\/", "gs");
function da(e) {
  const t = {};
  return e.replace(fa, "").split(ca).forEach((n) => {
    if (n) {
      const o = n.split(ua);
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
const pa = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ma = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", _a = /* @__PURE__ */ jt(pa), ga = /* @__PURE__ */ jt(ma), ha = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ea = /* @__PURE__ */ jt(ha);
function yi(e) {
  return !!e || e === "";
}
const Z = (e) => ve(e) ? e : e == null ? "" : Q(e) || ge(e) && (e.toString === ki || !te(e.toString)) ? JSON.stringify(e, Oi, 2) : String(e), Oi = (e, t) => t && t.__v_isRef ? Oi(e, t.value) : Jt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})
} : Li(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ge(t) && !Q(t) && !Ci(t) ? String(t) : t, Ee = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Nn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Ae = () => {
}, Ti = () => !1, ba = /^on[^a-z]/, Qn = (e) => ba.test(e), ho = (e) => e.startsWith("onUpdate:"), ye = Object.assign, $s = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Na = Object.prototype.hasOwnProperty, ae = (e, t) => Na.call(e, t), Q = Array.isArray, Jt = (e) => Lo(e) === "[object Map]", Li = (e) => Lo(e) === "[object Set]", te = (e) => typeof e == "function", ve = (e) => typeof e == "string", Us = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", js = (e) => ge(e) && te(e.then) && te(e.catch), ki = Object.prototype.toString, Lo = (e) => ki.call(e), Ws = (e) => Lo(e).slice(8, -1), Ci = (e) => Lo(e) === "[object Object]", Hs = (e) => ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, uo = /* @__PURE__ */ jt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), va = /* @__PURE__ */ jt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), ko = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ya = /-(\w)/g, On = ko((e) => e.replace(ya, (t, n) => n ? n.toUpperCase() : "")), Oa = /\B([A-Z])/g, Mt = ko((e) => e.replace(Oa, "-$1").toLowerCase()), Co = ko((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gt = ko((e) => e ? `on${Co(e)}` : ""), jn = (e, t) => !Object.is(e, t), Sn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Eo = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Di = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let mr;
const Ii = () => mr || (mr = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function ss(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let pt;
class Si {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = pt, !t && pt && (this.index = (pt.scopes || (pt.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = pt;
      try {
        return pt = this, t();
      } finally {
        pt = n;
      }
    } else
      process.env.NODE_ENV !== "production" && ss("cannot run an inactive effect scope.");
  }
  on() {
    pt = this;
  }
  off() {
    pt = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function Ta(e) {
  return new Si(e);
}
function La(e, t = pt) {
  t && t.active && t.effects.push(e);
}
const Wn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, wi = (e) => (e.w & xt) > 0, Ai = (e) => (e.n & xt) > 0, ka = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= xt;
}, Ca = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      wi(r) && !Ai(r) ? r.delete(e) : t[n++] = r, r.w &= ~xt, r.n &= ~xt;
    }
    t.length = n;
  }
}, rs = /* @__PURE__ */ new WeakMap();
let Pn = 0, xt = 1;
const is = 30;
let We;
const Qt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), ls = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Bs {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, La(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = We, n = Ft;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = We, We = this, Ft = !0, xt = 1 << ++Pn, Pn <= is ? ka(this) : _r(this), this.fn();
    } finally {
      Pn <= is && Ca(this), xt = 1 << --Pn, We = this.parent, Ft = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    We === this ? this.deferStop = !0 : this.active && (_r(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function _r(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ft = !0;
const Pi = [];
function un() {
  Pi.push(Ft), Ft = !1;
}
function fn() {
  const e = Pi.pop();
  Ft = e === void 0 ? !0 : e;
}
function Ge(e, t, n) {
  if (Ft && We) {
    let o = rs.get(e);
    o || rs.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Wn());
    const s = process.env.NODE_ENV !== "production" ? { effect: We, target: e, type: t, key: n } : void 0;
    as(r, s);
  }
}
function as(e, t) {
  let n = !1;
  Pn <= is ? Ai(e) || (e.n |= xt, n = !wi(e)) : n = !e.has(We), n && (e.add(We), We.deps.push(e), process.env.NODE_ENV !== "production" && We.onTrack && We.onTrack(Object.assign({ effect: We }, t)));
}
function It(e, t, n, o, r, s) {
  const i = rs.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && Q(e)) {
    const f = Di(o);
    i.forEach((_, p) => {
      (p === "length" || p >= f) && c.push(_);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        Q(e) ? Hs(n) && c.push(i.get("length")) : (c.push(i.get(Qt)), Jt(e) && c.push(i.get(ls)));
        break;
      case "delete":
        Q(e) || (c.push(i.get(Qt)), Jt(e) && c.push(i.get(ls)));
        break;
      case "set":
        Jt(e) && c.push(i.get(Qt));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? gn(c[0], u) : gn(c[0]));
  else {
    const f = [];
    for (const _ of c)
      _ && f.push(..._);
    process.env.NODE_ENV !== "production" ? gn(Wn(f), u) : gn(Wn(f));
  }
}
function gn(e, t) {
  const n = Q(e) ? e : [...e];
  for (const o of n)
    o.computed && gr(o, t);
  for (const o of n)
    o.computed || gr(o, t);
}
function gr(e, t) {
  (e !== We || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(ye({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Da = /* @__PURE__ */ jt("__proto__,__v_isRef,__isVue"), Vi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Us)
), Ia = /* @__PURE__ */ Do(), Sa = /* @__PURE__ */ Do(!1, !0), wa = /* @__PURE__ */ Do(!0), Aa = /* @__PURE__ */ Do(!0, !0), hr = /* @__PURE__ */ Pa();
function Pa() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = oe(this);
      for (let s = 0, i = this.length; s < i; s++)
        Ge(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(oe)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      un();
      const o = oe(this)[t].apply(this, n);
      return fn(), o;
    };
  }), e;
}
function Do(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Wi : ji : t ? Ui : $i).get(o))
      return o;
    const i = Q(o);
    if (!e && i && ae(hr, r))
      return Reflect.get(hr, r, s);
    const c = Reflect.get(o, r, s);
    return (Us(r) ? Vi.has(r) : Da(r)) || (e || Ge(o, "get", r), t) ? c : Ce(c) ? i && Hs(r) ? c : c.value : ge(c) ? e ? Hi(c) : wo(c) : c;
  };
}
const Va = /* @__PURE__ */ Ri(), Ra = /* @__PURE__ */ Ri(!0);
function Ri(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if ($t(i) && Ce(i) && !Ce(r))
      return !1;
    if (!e && (!bo(r) && !$t(r) && (i = oe(i), r = oe(r)), !Q(n) && Ce(i) && !Ce(r)))
      return i.value = r, !0;
    const c = Q(n) && Hs(o) ? Number(o) < n.length : ae(n, o), u = Reflect.set(n, o, r, s);
    return n === oe(s) && (c ? jn(r, i) && It(n, "set", o, r, i) : It(n, "add", o, r)), u;
  };
}
function Fa(e, t) {
  const n = ae(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && It(e, "delete", t, void 0, o), r;
}
function Ma(e, t) {
  const n = Reflect.has(e, t);
  return (!Us(t) || !Vi.has(t)) && Ge(e, "has", t), n;
}
function xa(e) {
  return Ge(e, "iterate", Q(e) ? "length" : Qt), Reflect.ownKeys(e);
}
const Fi = {
  get: Ia,
  set: Va,
  deleteProperty: Fa,
  has: Ma,
  ownKeys: xa
}, Mi = {
  get: wa,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && ss(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && ss(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, $a = /* @__PURE__ */ ye({}, Fi, {
  get: Sa,
  set: Ra
}), Ua = /* @__PURE__ */ ye({}, Mi, {
  get: Aa
}), Ks = (e) => e, Io = (e) => Reflect.getPrototypeOf(e);
function oo(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = oe(e), s = oe(t);
  n || (t !== s && Ge(r, "get", t), Ge(r, "get", s));
  const { has: i } = Io(r), c = o ? Ks : n ? Ys : Hn;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function so(e, t = !1) {
  const n = this.__v_raw, o = oe(n), r = oe(e);
  return t || (e !== r && Ge(o, "has", e), Ge(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function ro(e, t = !1) {
  return e = e.__v_raw, !t && Ge(oe(e), "iterate", Qt), Reflect.get(e, "size", e);
}
function Er(e) {
  e = oe(e);
  const t = oe(this);
  return Io(t).has.call(t, e) || (t.add(e), It(t, "add", e, e)), this;
}
function br(e, t) {
  t = oe(t);
  const n = oe(this), { has: o, get: r } = Io(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && xi(n, o, e) : (e = oe(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? jn(t, i) && It(n, "set", e, t, i) : It(n, "add", e, t), this;
}
function Nr(e) {
  const t = oe(this), { has: n, get: o } = Io(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && xi(t, n, e) : (e = oe(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && It(t, "delete", e, void 0, s), i;
}
function vr() {
  const e = oe(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Jt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && It(e, "clear", void 0, void 0, n), o;
}
function io(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = oe(i), u = t ? Ks : e ? Ys : Hn;
    return !e && Ge(c, "iterate", Qt), i.forEach((f, _) => o.call(r, u(f), u(_), s));
  };
}
function lo(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = oe(r), i = Jt(s), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, f = r[e](...o), _ = n ? Ks : t ? Ys : Hn;
    return !t && Ge(s, "iterate", u ? ls : Qt), {
      next() {
        const { value: p, done: m } = f.next();
        return m ? { value: p, done: m } : {
          value: c ? [_(p[0]), _(p[1])] : _(p),
          done: m
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
      console.warn(`${Co(e)} operation ${n}failed: target is readonly.`, oe(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function ja() {
  const e = {
    get(s) {
      return oo(this, s);
    },
    get size() {
      return ro(this);
    },
    has: so,
    add: Er,
    set: br,
    delete: Nr,
    clear: vr,
    forEach: io(!1, !1)
  }, t = {
    get(s) {
      return oo(this, s, !1, !0);
    },
    get size() {
      return ro(this);
    },
    has: so,
    add: Er,
    set: br,
    delete: Nr,
    clear: vr,
    forEach: io(!1, !0)
  }, n = {
    get(s) {
      return oo(this, s, !0);
    },
    get size() {
      return ro(this, !0);
    },
    has(s) {
      return so.call(this, s, !0);
    },
    add: wt("add"),
    set: wt("set"),
    delete: wt("delete"),
    clear: wt("clear"),
    forEach: io(!0, !1)
  }, o = {
    get(s) {
      return oo(this, s, !0, !0);
    },
    get size() {
      return ro(this, !0);
    },
    has(s) {
      return so.call(this, s, !0);
    },
    add: wt("add"),
    set: wt("set"),
    delete: wt("delete"),
    clear: wt("clear"),
    forEach: io(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = lo(s, !1, !1), n[s] = lo(s, !0, !1), t[s] = lo(s, !1, !0), o[s] = lo(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [Wa, Ha, Ba, Ka] = /* @__PURE__ */ ja();
function So(e, t) {
  const n = t ? e ? Ka : Ba : e ? Ha : Wa;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(ae(n, r) && r in o ? n : o, r, s);
}
const Ya = {
  get: /* @__PURE__ */ So(!1, !1)
}, Ga = {
  get: /* @__PURE__ */ So(!1, !0)
}, za = {
  get: /* @__PURE__ */ So(!0, !1)
}, Xa = {
  get: /* @__PURE__ */ So(!0, !0)
};
function xi(e, t, n) {
  const o = oe(n);
  if (o !== n && t.call(e, o)) {
    const r = Ws(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const $i = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap(), ji = /* @__PURE__ */ new WeakMap(), Wi = /* @__PURE__ */ new WeakMap();
function qa(e) {
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
function Ja(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : qa(Ws(e));
}
function wo(e) {
  return $t(e) ? e : Ao(e, !1, Fi, Ya, $i);
}
function Qa(e) {
  return Ao(e, !1, $a, Ga, Ui);
}
function Hi(e) {
  return Ao(e, !0, Mi, za, ji);
}
function hn(e) {
  return Ao(e, !0, Ua, Xa, Wi);
}
function Ao(e, t, n, o, r) {
  if (!ge(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = Ja(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? o : n);
  return r.set(e, c), c;
}
function Zt(e) {
  return $t(e) ? Zt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function $t(e) {
  return !!(e && e.__v_isReadonly);
}
function bo(e) {
  return !!(e && e.__v_isShallow);
}
function cs(e) {
  return Zt(e) || $t(e);
}
function oe(e) {
  const t = e && e.__v_raw;
  return t ? oe(t) : e;
}
function Bi(e) {
  return Eo(e, "__v_skip", !0), e;
}
const Hn = (e) => ge(e) ? wo(e) : e, Ys = (e) => ge(e) ? Hi(e) : e;
function Ki(e) {
  Ft && We && (e = oe(e), process.env.NODE_ENV !== "production" ? as(e.dep || (e.dep = Wn()), {
    target: e,
    type: "get",
    key: "value"
  }) : as(e.dep || (e.dep = Wn())));
}
function Yi(e, t) {
  e = oe(e), e.dep && (process.env.NODE_ENV !== "production" ? gn(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : gn(e.dep));
}
function Ce(e) {
  return !!(e && e.__v_isRef === !0);
}
function De(e) {
  return Gi(e, !1);
}
function Za(e) {
  return Gi(e, !0);
}
function Gi(e, t) {
  return Ce(e) ? e : new ec(e, t);
}
class ec {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : oe(t), this._value = n ? t : Hn(t);
  }
  get value() {
    return Ki(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || bo(t) || $t(t);
    t = n ? t : oe(t), jn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Hn(t), Yi(this, t));
  }
}
function k(e) {
  return Ce(e) ? e.value : e;
}
const tc = {
  get: (e, t, n) => k(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return Ce(r) && !Ce(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function zi(e) {
  return Zt(e) ? e : new Proxy(e, tc);
}
var Xi;
class nc {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Xi] = !1, this._dirty = !0, this.effect = new Bs(t, () => {
      this._dirty || (this._dirty = !0, Yi(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
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
function oc(e, t, n = !1) {
  let o, r;
  const s = te(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Ae) : (o = e.get, r = e.set);
  const i = new nc(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const en = [];
function fo(e) {
  en.push(e);
}
function po() {
  en.pop();
}
function F(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  un();
  const n = en.length ? en[en.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = sc();
  if (o)
    Dt(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${jo(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...rc(r)), console.warn(...s);
  }
  fn();
}
function sc() {
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
function rc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...ic(n));
  }), t;
}
function ic({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${jo(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...lc(e.props), s] : [r + s];
}
function lc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...qi(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function qi(e, t, n) {
  return ve(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ce(t) ? (t = qi(e, oe(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : te(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = oe(t), n ? t : [`${e}=`, t]);
}
const Gs = {
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
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    Po(s, t, n);
  }
  return r;
}
function tt(e, t, n, o) {
  if (te(e)) {
    const s = Dt(e, t, n, o);
    return s && js(s) && s.catch((i) => {
      Po(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(tt(e[s], t, n, o));
  return r;
}
function Po(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? Gs[n] : n;
    for (; s; ) {
      const f = s.ec;
      if (f) {
        for (let _ = 0; _ < f.length; _++)
          if (f[_](e, i, c) === !1)
            return;
      }
      s = s.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Dt(u, null, 10, [e, i, c]);
      return;
    }
  }
  ac(e, n, r, o);
}
function ac(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Gs[t];
    if (n && fo(n), F(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && po(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Bn = !1, us = !1;
const Re = [];
let gt = 0;
const vn = [];
let mt = null, Pt = 0;
const Ji = /* @__PURE__ */ Promise.resolve();
let zs = null;
const cc = 100;
function Qi(e) {
  const t = zs || Ji;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function uc(e) {
  let t = gt + 1, n = Re.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Kn(Re[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Vo(e) {
  (!Re.length || !Re.includes(e, Bn && e.allowRecurse ? gt + 1 : gt)) && (e.id == null ? Re.push(e) : Re.splice(uc(e.id), 0, e), Zi());
}
function Zi() {
  !Bn && !us && (us = !0, zs = Ji.then(nl));
}
function fc(e) {
  const t = Re.indexOf(e);
  t > gt && Re.splice(t, 1);
}
function el(e) {
  Q(e) ? vn.push(...e) : (!mt || !mt.includes(e, e.allowRecurse ? Pt + 1 : Pt)) && vn.push(e), Zi();
}
function yr(e, t = Bn ? gt + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < Re.length; t++) {
    const n = Re[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Xs(e, n))
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
      process.env.NODE_ENV !== "production" && Xs(e, mt[Pt]) || mt[Pt]();
    mt = null, Pt = 0;
  }
}
const Kn = (e) => e.id == null ? 1 / 0 : e.id, dc = (e, t) => {
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
  us = !1, Bn = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Re.sort(dc);
  const t = process.env.NODE_ENV !== "production" ? (n) => Xs(e, n) : Ae;
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
    gt = 0, Re.length = 0, tl(e), Bn = !1, zs = null, (Re.length || vn.length) && nl(e);
  }
}
function Xs(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > cc) {
      const o = t.ownerInstance, r = o && Al(o.type);
      return F(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let tn = !1;
const mn = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ii().__VUE_HMR_RUNTIME__ = {
  createRecord: zo(ol),
  rerender: zo(_c),
  reload: zo(gc)
});
const sn = /* @__PURE__ */ new Map();
function pc(e) {
  const t = e.type.__hmrId;
  let n = sn.get(t);
  n || (ol(t, e.type), n = sn.get(t)), n.instances.add(e);
}
function mc(e) {
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
function _c(e, t) {
  const n = sn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Rn(o.type).render = t), o.renderCache = [], tn = !0, o.update(), tn = !1;
  }));
}
function gc(e, t) {
  const n = sn.get(e);
  if (!n)
    return;
  t = Rn(t), Or(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Rn(r.type);
    mn.has(s) || (s !== n.initialDef && Or(s, t), mn.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (mn.add(s), r.ceReload(t.styles), mn.delete(s)) : r.parent ? Vo(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window != "undefined" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  el(() => {
    for (const r of o)
      mn.delete(Rn(r.type));
  });
}
function Or(e, t) {
  ye(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function zo(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let ht, Vn = [], fs = !1;
function Zn(e, ...t) {
  ht ? ht.emit(e, ...t) : fs || Vn.push({ event: e, args: t });
}
function sl(e, t) {
  var n, o;
  ht = e, ht ? (ht.enabled = !0, Vn.forEach(({ event: r, args: s }) => ht.emit(r, ...s)), Vn = []) : typeof window != "undefined" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    sl(s, t);
  }), setTimeout(() => {
    ht || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, fs = !0, Vn = []);
  }, 3e3)) : (fs = !0, Vn = []);
}
function hc(e, t) {
  Zn("app:init", e, t, {
    Fragment: Le,
    Text: Cn,
    Comment: Pe,
    Static: Mn
  });
}
function Ec(e) {
  Zn("app:unmount", e);
}
const bc = /* @__PURE__ */ qs("component:added"), rl = /* @__PURE__ */ qs("component:updated"), Nc = /* @__PURE__ */ qs("component:removed"), vc = (e) => {
  ht && typeof ht.cleanupBuffer == "function" && !ht.cleanupBuffer(e) && Nc(e);
};
function qs(e) {
  return (t) => {
    Zn(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const yc = /* @__PURE__ */ il("perf:start"), Oc = /* @__PURE__ */ il("perf:end");
function il(e) {
  return (t, n, o) => {
    Zn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Tc(e, t, n) {
  Zn("component:emit", e.appContext.app, e, t, n);
}
function Lc(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || Ee;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: _, propsOptions: [p] } = e;
    if (_)
      if (!(t in _))
        (!p || !(Gt(t) in p)) && F(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Gt(t)}" prop.`);
      else {
        const m = _[t];
        te(m) && (m(...n) || F(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const _ = `${i === "modelValue" ? "model" : i}Modifiers`, { number: p, trim: m } = o[_] || Ee;
    m && (r = n.map((L) => ve(L) ? L.trim() : L)), p && (r = n.map(Di));
  }
  if (process.env.NODE_ENV !== "production" && Tc(e, t, r), process.env.NODE_ENV !== "production") {
    const _ = t.toLowerCase();
    _ !== t && o[Gt(_)] && F(`Event "${_}" is emitted in component ${jo(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Mt(t)}" instead of "${t}".`);
  }
  let c, u = o[c = Gt(t)] || o[c = Gt(On(t))];
  !u && s && (u = o[c = Gt(Mt(t))]), u && tt(u, e, 6, r);
  const f = o[c + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, tt(f, e, 6, r);
  }
}
function ll(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, c = !1;
  if (!te(e)) {
    const u = (f) => {
      const _ = ll(f, t, !0);
      _ && (c = !0, ye(i, _));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !s && !c ? (ge(e) && o.set(e, null), null) : (Q(s) ? s.forEach((u) => i[u] = null) : ye(i, s), ge(e) && o.set(e, i), i);
}
function Ro(e, t) {
  return !e || !Qn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ae(e, t[0].toLowerCase() + t.slice(1)) || ae(e, Mt(t)) || ae(e, t));
}
let Je = null, Fo = null;
function No(e) {
  const t = Je;
  return Je = e, Fo = e && e.type.__scopeId || null, t;
}
function kc(e) {
  Fo = e;
}
function Cc() {
  Fo = null;
}
function Dc(e, t = Je, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Vr(-1);
    const s = No(t);
    let i;
    try {
      i = e(...r);
    } finally {
      No(s), o._d && Vr(1);
    }
    return process.env.NODE_ENV !== "production" && rl(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let ds = !1;
function vo() {
  ds = !0;
}
function Xo(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: c, attrs: u, emit: f, render: _, renderCache: p, data: m, setupState: L, ctx: w, inheritAttrs: T } = e;
  let P, E;
  const O = No(e);
  process.env.NODE_ENV !== "production" && (ds = !1);
  try {
    if (n.shapeFlag & 4) {
      const y = r || o;
      P = ot(_.call(y, y, p, s, L, m, w)), E = u;
    } else {
      const y = t;
      process.env.NODE_ENV !== "production" && u === s && vo(), P = ot(y.length > 1 ? y(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return vo(), u;
        },
        slots: c,
        emit: f
      } : { attrs: u, slots: c, emit: f }) : y(s, null)), E = t.props ? u : Sc(u);
    }
  } catch (y) {
    xn.length = 0, Po(y, e, 1), P = Fe(Pe);
  }
  let C = P, b;
  if (process.env.NODE_ENV !== "production" && P.patchFlag > 0 && P.patchFlag & 2048 && ([C, b] = Ic(P)), E && T !== !1) {
    const y = Object.keys(E), { shapeFlag: M } = C;
    if (y.length) {
      if (M & 7)
        i && y.some(ho) && (E = wc(E, i)), C = Et(C, E);
      else if (process.env.NODE_ENV !== "production" && !ds && C.type !== Pe) {
        const V = Object.keys(u), H = [], G = [];
        for (let J = 0, z = V.length; J < z; J++) {
          const Y = V[J];
          Qn(Y) ? ho(Y) || H.push(Y[2].toLowerCase() + Y.slice(3)) : G.push(Y);
        }
        G.length && F(`Extraneous non-props attributes (${G.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), H.length && F(`Extraneous non-emits event listeners (${H.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Tr(C) && F("Runtime directive used on component with non-element root node. The directives will not function as intended."), C = Et(C), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Tr(C) && F("Component inside <Transition> renders non-element root node that cannot be animated."), C.transition = n.transition), process.env.NODE_ENV !== "production" && b ? b(C) : P = C, No(O), P;
}
const Ic = (e) => {
  const t = e.children, n = e.dynamicChildren, o = al(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [ot(o), i];
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
const Sc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, wc = (e, t) => {
  const n = {};
  for (const o in e)
    (!ho(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Tr = (e) => e.shapeFlag & 7 || e.type === Pe;
function Ac(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: c, patchFlag: u } = t, f = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || c) && tn || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Lr(o, i, f) : !!i;
    if (u & 8) {
      const _ = t.dynamicProps;
      for (let p = 0; p < _.length; p++) {
        const m = _[p];
        if (i[m] !== o[m] && !Ro(f, m))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? Lr(o, i, f) : !0 : !!i;
  return !1;
}
function Lr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !Ro(n, s))
      return !0;
  }
  return !1;
}
function Pc({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Vc = (e) => e.__isSuspense;
function Rc(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : el(e);
}
function Fc(e, t) {
  if (!Se)
    process.env.NODE_ENV !== "production" && F("provide() can only be used inside setup().");
  else {
    let n = Se.provides;
    const o = Se.parent && Se.parent.provides;
    o === n && (n = Se.provides = Object.create(o)), n[e] = t;
  }
}
function Fn(e, t, n = !1) {
  const o = Se || Je;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && te(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && F(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && F("inject() can only be used inside setup() or functional components.");
}
function Mc(e, t) {
  return Mo(e, null, t);
}
function xc(e, t) {
  return Mo(e, null, process.env.NODE_ENV !== "production" ? Object.assign(Object.assign({}, t), { flush: "post" }) : { flush: "post" });
}
const ao = {};
function yn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !te(t) && F("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Mo(e, t, n);
}
function Mo(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = Ee) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && F('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && F('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (b) => {
    F("Invalid watch source: ", b, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = Se;
  let f, _ = !1, p = !1;
  if (Ce(e) ? (f = () => e.value, _ = bo(e)) : Zt(e) ? (f = () => e, o = !0) : Q(e) ? (p = !0, _ = e.some((b) => Zt(b) || bo(b)), f = () => e.map((b) => {
    if (Ce(b))
      return b.value;
    if (Zt(b))
      return En(b);
    if (te(b))
      return Dt(b, u, 2);
    process.env.NODE_ENV !== "production" && c(b);
  })) : te(e) ? t ? f = () => Dt(e, u, 2) : f = () => {
    if (!(u && u.isUnmounted))
      return m && m(), tt(e, u, 3, [L]);
  } : (f = Ae, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const b = f;
    f = () => En(b());
  }
  let m, L = (b) => {
    m = O.onStop = () => {
      Dt(b, u, 4);
    };
  }, w;
  if (zn)
    if (L = Ae, t ? n && tt(t, u, 3, [
      f(),
      p ? [] : void 0,
      L
    ]) : f(), r === "sync") {
      const b = Wu();
      w = b.__watcherHandles || (b.__watcherHandles = []);
    } else
      return Ae;
  let T = p ? new Array(e.length).fill(ao) : ao;
  const P = () => {
    if (O.active)
      if (t) {
        const b = O.run();
        (o || _ || (p ? b.some((y, M) => jn(y, T[M])) : jn(b, T))) && (m && m(), tt(t, u, 3, [
          b,
          T === ao ? void 0 : p && T[0] === ao ? [] : T,
          L
        ]), T = b);
      } else
        O.run();
  };
  P.allowRecurse = !!t;
  let E;
  r === "sync" ? E = P : r === "post" ? E = () => Ke(P, u && u.suspense) : (P.pre = !0, u && (P.id = u.uid), E = () => Vo(P));
  const O = new Bs(f, E);
  process.env.NODE_ENV !== "production" && (O.onTrack = s, O.onTrigger = i), t ? n ? P() : T = O.run() : r === "post" ? Ke(O.run.bind(O), u && u.suspense) : O.run();
  const C = () => {
    O.stop(), u && u.scope && $s(u.scope.effects, O);
  };
  return w && w.push(C), C;
}
function $c(e, t, n) {
  const o = this.proxy, r = ve(e) ? e.includes(".") ? cl(o, e) : () => o[e] : e.bind(o, o);
  let s;
  te(t) ? s = t : (s = t.handler, n = t);
  const i = Se;
  Tn(this);
  const c = Mo(r, s.bind(o), n);
  return i ? Tn(i) : on(), c;
}
function cl(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function En(e, t) {
  if (!ge(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Ce(e))
    En(e.value, t);
  else if (Q(e))
    for (let n = 0; n < e.length; n++)
      En(e[n], t);
  else if (Li(e) || Jt(e))
    e.forEach((n) => {
      En(n, t);
    });
  else if (Ci(e))
    for (const n in e)
      En(e[n], t);
  return e;
}
function Uc() {
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
const et = [Function, Array], jc = {
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
    const n = rn(), o = Uc();
    let r;
    return () => {
      const s = t.default && fl(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let T = !1;
        for (const P of s)
          if (P.type !== Pe) {
            if (process.env.NODE_ENV !== "production" && T) {
              F("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = P, T = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const c = oe(e), { mode: u } = c;
      if (process.env.NODE_ENV !== "production" && u && u !== "in-out" && u !== "out-in" && u !== "default" && F(`invalid <transition> mode: ${u}`), o.isLeaving)
        return qo(i);
      const f = kr(i);
      if (!f)
        return qo(i);
      const _ = ps(f, c, o, n);
      ms(f, _);
      const p = n.subTree, m = p && kr(p);
      let L = !1;
      const { getTransitionKey: w } = f.type;
      if (w) {
        const T = w();
        r === void 0 ? r = T : T !== r && (r = T, L = !0);
      }
      if (m && m.type !== Pe && (!Xt(f, m) || L)) {
        const T = ps(m, c, o, n);
        if (ms(m, T), u === "out-in")
          return o.isLeaving = !0, T.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && n.update();
          }, qo(i);
        u === "in-out" && f.type !== Pe && (T.delayLeave = (P, E, O) => {
          const C = ul(o, m);
          C[String(m.key)] = m, P._leaveCb = () => {
            E(), P._leaveCb = void 0, delete _.delayedLeave;
          }, _.delayedLeave = O;
        });
      }
      return i;
    };
  }
}, Wc = jc;
function ul(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function ps(e, t, n, o) {
  const { appear: r, mode: s, persisted: i = !1, onBeforeEnter: c, onEnter: u, onAfterEnter: f, onEnterCancelled: _, onBeforeLeave: p, onLeave: m, onAfterLeave: L, onLeaveCancelled: w, onBeforeAppear: T, onAppear: P, onAfterAppear: E, onAppearCancelled: O } = t, C = String(e.key), b = ul(n, e), y = (H, G) => {
    H && tt(H, o, 9, G);
  }, M = (H, G) => {
    const J = G[1];
    y(H, G), Q(H) ? H.every((z) => z.length <= 1) && J() : H.length <= 1 && J();
  }, V = {
    mode: s,
    persisted: i,
    beforeEnter(H) {
      let G = c;
      if (!n.isMounted)
        if (r)
          G = T || c;
        else
          return;
      H._leaveCb && H._leaveCb(!0);
      const J = b[C];
      J && Xt(e, J) && J.el._leaveCb && J.el._leaveCb(), y(G, [H]);
    },
    enter(H) {
      let G = u, J = f, z = _;
      if (!n.isMounted)
        if (r)
          G = P || u, J = E || f, z = O || _;
        else
          return;
      let Y = !1;
      const q = H._enterCb = (re) => {
        Y || (Y = !0, re ? y(z, [H]) : y(J, [H]), V.delayedLeave && V.delayedLeave(), H._enterCb = void 0);
      };
      G ? M(G, [H, q]) : q();
    },
    leave(H, G) {
      const J = String(e.key);
      if (H._enterCb && H._enterCb(!0), n.isUnmounting)
        return G();
      y(p, [H]);
      let z = !1;
      const Y = H._leaveCb = (q) => {
        z || (z = !0, G(), q ? y(w, [H]) : y(L, [H]), H._leaveCb = void 0, b[J] === e && delete b[J]);
      };
      b[J] = e, m ? M(m, [H, Y]) : Y();
    },
    clone(H) {
      return ps(H, t, n, o);
    }
  };
  return V;
}
function qo(e) {
  if (eo(e))
    return e = Et(e), e.children = null, e;
}
function kr(e) {
  return eo(e) ? e.children ? e.children[0] : void 0 : e;
}
function ms(e, t) {
  e.shapeFlag & 6 && e.component ? ms(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function fl(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === Le ? (i.patchFlag & 128 && r++, o = o.concat(fl(i.children, t, c))) : (t || i.type !== Pe) && o.push(c != null ? Et(i, { key: c }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
function dl(e) {
  return te(e) ? { setup: e, name: e.name } : e;
}
const mo = (e) => !!e.type.__asyncLoader, eo = (e) => e.type.__isKeepAlive;
function Hc(e, t) {
  pl(e, "a", t);
}
function Bc(e, t) {
  pl(e, "da", t);
}
function pl(e, t, n = Se) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (xo(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      eo(r.parent.vnode) && Kc(o, t, n, r), r = r.parent;
  }
}
function Kc(e, t, n, o) {
  const r = xo(t, e, o, !0);
  $o(() => {
    $s(o[t], r);
  }, n);
}
function xo(e, t, n = Se, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      un(), Tn(n);
      const c = tt(t, n, e, i);
      return on(), fn(), c;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Gt(Gs[e].replace(/ hook$/, ""));
    F(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const St = (e) => (t, n = Se) => (!zn || e === "sp") && xo(e, (...o) => t(...o), n), Js = St("bm"), to = St("m"), Yc = St("bu"), Gc = St("u"), ml = St("bum"), $o = St("um"), zc = St("sp"), Xc = St("rtg"), qc = St("rtc");
function Jc(e, t = Se) {
  xo("ec", e, t);
}
function _l(e) {
  va(e) && F("Do not use built-in directive ids as custom directive id: " + e);
}
function Kt(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    s && (c.oldValue = s[i].value);
    let u = c.dir[o];
    u && (un(), tt(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), fn());
  }
}
const Qc = Symbol();
function _n(e, t, n, o) {
  let r;
  const s = n && n[o];
  if (Q(e) || ve(e)) {
    r = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      r[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && F(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (ge(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, c) => t(i, c, void 0, s && s[c]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let c = 0, u = i.length; c < u; c++) {
        const f = i[c];
        r[c] = t(e[f], f, c, s && s[c]);
      }
    }
  else
    r = [];
  return n && (n[o] = r), r;
}
const _s = (e) => e ? Il(e) ? nr(e) || e.proxy : _s(e.parent) : null, nn = /* @__PURE__ */ ye(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? hn(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? hn(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? hn(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? hn(e.refs) : e.refs,
  $parent: (e) => _s(e.parent),
  $root: (e) => _s(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Zs(e),
  $forceUpdate: (e) => e.f || (e.f = () => Vo(e.update)),
  $nextTick: (e) => e.n || (e.n = Qi.bind(e.proxy)),
  $watch: (e) => $c.bind(e)
}), Qs = (e) => e === "_" || e === "$", Jo = (e, t) => e !== Ee && !e.__isScriptSetup && ae(e, t), gl = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: u } = e;
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
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Jo(o, t))
          return i[t] = 1, o[t];
        if (r !== Ee && ae(r, t))
          return i[t] = 2, r[t];
        if ((f = e.propsOptions[0]) && ae(f, t))
          return i[t] = 3, s[t];
        if (n !== Ee && ae(n, t))
          return i[t] = 4, n[t];
        gs && (i[t] = 0);
      }
    }
    const _ = nn[t];
    let p, m;
    if (_)
      return t === "$attrs" && (Ge(e, "get", t), process.env.NODE_ENV !== "production" && vo()), _(e);
    if ((p = c.__cssModules) && (p = p[t]))
      return p;
    if (n !== Ee && ae(n, t))
      return i[t] = 4, n[t];
    if (m = u.config.globalProperties, ae(m, t))
      return m[t];
    process.env.NODE_ENV !== "production" && Je && (!ve(t) || t.indexOf("__v") !== 0) && (r !== Ee && Qs(t[0]) && ae(r, t) ? F(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Je && F(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Jo(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && ae(r, t) ? (F(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Ee && ae(o, t) ? (o[t] = n, !0) : ae(e.props, t) ? (process.env.NODE_ENV !== "production" && F(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && F(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let c;
    return !!n[i] || e !== Ee && ae(e, i) || Jo(t, i) || (c = s[0]) && ae(c, i) || ae(o, i) || ae(nn, i) || ae(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ae(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (gl.ownKeys = (e) => (F("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Zc(e) {
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
function eu(e) {
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
function tu(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(oe(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Qs(o[0])) {
        F(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
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
function nu() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? F(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let gs = !0;
function ou(e) {
  const t = Zs(e), n = e.proxy, o = e.ctx;
  gs = !1, t.beforeCreate && Cr(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: s,
    methods: i,
    watch: c,
    provide: u,
    inject: f,
    created: _,
    beforeMount: p,
    mounted: m,
    beforeUpdate: L,
    updated: w,
    activated: T,
    deactivated: P,
    beforeDestroy: E,
    beforeUnmount: O,
    destroyed: C,
    unmounted: b,
    render: y,
    renderTracked: M,
    renderTriggered: V,
    errorCaptured: H,
    serverPrefetch: G,
    expose: J,
    inheritAttrs: z,
    components: Y,
    directives: q,
    filters: re
  } = t, W = process.env.NODE_ENV !== "production" ? nu() : null;
  if (process.env.NODE_ENV !== "production") {
    const [x] = e.propsOptions;
    if (x)
      for (const K in x)
        W("Props", K);
  }
  if (f && su(f, o, W, e.appContext.config.unwrapInjectedRef), i)
    for (const x in i) {
      const K = i[x];
      te(K) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, x, {
        value: K.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[x] = K.bind(n), process.env.NODE_ENV !== "production" && W("Methods", x)) : process.env.NODE_ENV !== "production" && F(`Method "${x}" has type "${typeof K}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !te(r) && F("The data option must be a function. Plain object usage is no longer supported.");
    const x = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && js(x) && F("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !ge(x))
      process.env.NODE_ENV !== "production" && F("data() should return an object.");
    else if (e.data = wo(x), process.env.NODE_ENV !== "production")
      for (const K in x)
        W("Data", K), Qs(K[0]) || Object.defineProperty(o, K, {
          configurable: !0,
          enumerable: !0,
          get: () => x[K],
          set: Ae
        });
  }
  if (gs = !0, s)
    for (const x in s) {
      const K = s[x], ue = te(K) ? K.bind(n, n) : te(K.get) ? K.get.bind(n, n) : Ae;
      process.env.NODE_ENV !== "production" && ue === Ae && F(`Computed property "${x}" has no getter.`);
      const me = !te(K) && te(K.set) ? K.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        F(`Write operation failed: computed property "${x}" is readonly.`);
      } : Ae, Te = st({
        get: ue,
        set: me
      });
      Object.defineProperty(o, x, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: (Ve) => Te.value = Ve
      }), process.env.NODE_ENV !== "production" && W("Computed", x);
    }
  if (c)
    for (const x in c)
      hl(c[x], o, n, x);
  if (u) {
    const x = te(u) ? u.call(n) : u;
    Reflect.ownKeys(x).forEach((K) => {
      Fc(K, x[K]);
    });
  }
  _ && Cr(_, e, "c");
  function S(x, K) {
    Q(K) ? K.forEach((ue) => x(ue.bind(n))) : K && x(K.bind(n));
  }
  if (S(Js, p), S(to, m), S(Yc, L), S(Gc, w), S(Hc, T), S(Bc, P), S(Jc, H), S(qc, M), S(Xc, V), S(ml, O), S($o, b), S(zc, G), Q(J))
    if (J.length) {
      const x = e.exposed || (e.exposed = {});
      J.forEach((K) => {
        Object.defineProperty(x, K, {
          get: () => n[K],
          set: (ue) => n[K] = ue
        });
      });
    } else
      e.exposed || (e.exposed = {});
  y && e.render === Ae && (e.render = y), z != null && (e.inheritAttrs = z), Y && (e.components = Y), q && (e.directives = q);
}
function su(e, t, n = Ae, o = !1) {
  Q(e) && (e = hs(e));
  for (const r in e) {
    const s = e[r];
    let i;
    ge(s) ? "default" in s ? i = Fn(s.from || r, s.default, !0) : i = Fn(s.from || r) : i = Fn(s), Ce(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : (process.env.NODE_ENV !== "production" && F(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Cr(e, t, n) {
  tt(Q(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function hl(e, t, n, o) {
  const r = o.includes(".") ? cl(n, o) : () => n[o];
  if (ve(e)) {
    const s = t[e];
    te(s) ? yn(r, s) : process.env.NODE_ENV !== "production" && F(`Invalid watch handler specified by key "${e}"`, s);
  } else if (te(e))
    yn(r, e.bind(n));
  else if (ge(e))
    if (Q(e))
      e.forEach((s) => hl(s, t, n, o));
    else {
      const s = te(e.handler) ? e.handler.bind(n) : t[e.handler];
      te(s) ? yn(r, s, e) : process.env.NODE_ENV !== "production" && F(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && F(`Invalid watch option: "${o}"`, e);
}
function Zs(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, c = s.get(t);
  let u;
  return c ? u = c : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach((f) => yo(u, f, i, !0)), yo(u, t, i)), ge(t) && s.set(t, u), u;
}
function yo(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && yo(e, s, n, !0), r && r.forEach((i) => yo(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && F('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = ru[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const ru = {
  data: Dr,
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
  watch: lu,
  provide: Dr,
  inject: iu
};
function Dr(e, t) {
  return t ? e ? function() {
    return ye(te(e) ? e.call(this, this) : e, te(t) ? t.call(this, this) : t);
  } : t : e;
}
function iu(e, t) {
  return zt(hs(e), hs(t));
}
function hs(e) {
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
  return e ? ye(ye(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function lu(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ye(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = Ue(e[o], t[o]);
  return n;
}
function au(e, t, n, o = !1) {
  const r = {}, s = {};
  Eo(s, Uo, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), El(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && Nl(t || {}, r, e), n ? e.props = o ? r : Qa(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function cu(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function uu(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, c = oe(r), [u] = e.propsOptions;
  let f = !1;
  if (!(process.env.NODE_ENV !== "production" && cu(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const _ = e.vnode.dynamicProps;
      for (let p = 0; p < _.length; p++) {
        let m = _[p];
        if (Ro(e.emitsOptions, m))
          continue;
        const L = t[m];
        if (u)
          if (ae(s, m))
            L !== s[m] && (s[m] = L, f = !0);
          else {
            const w = On(m);
            r[w] = Es(u, c, w, L, e, !1);
          }
        else
          L !== s[m] && (s[m] = L, f = !0);
      }
    }
  } else {
    El(e, t, r, s) && (f = !0);
    let _;
    for (const p in c)
      (!t || !ae(t, p) && ((_ = Mt(p)) === p || !ae(t, _))) && (u ? n && (n[p] !== void 0 || n[_] !== void 0) && (r[p] = Es(u, c, p, void 0, e, !0)) : delete r[p]);
    if (s !== c)
      for (const p in s)
        (!t || !ae(t, p)) && (delete s[p], f = !0);
  }
  f && It(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && Nl(t || {}, r, e);
}
function El(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (uo(u))
        continue;
      const f = t[u];
      let _;
      r && ae(r, _ = On(u)) ? !s || !s.includes(_) ? n[_] = f : (c || (c = {}))[_] = f : Ro(e.emitsOptions, u) || (!(u in o) || f !== o[u]) && (o[u] = f, i = !0);
    }
  if (s) {
    const u = oe(n), f = c || Ee;
    for (let _ = 0; _ < s.length; _++) {
      const p = s[_];
      n[p] = Es(r, u, p, f[p], e, !ae(f, p));
    }
  }
  return i;
}
function Es(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const c = ae(i, "default");
    if (c && o === void 0) {
      const u = i.default;
      if (i.type !== Function && te(u)) {
        const { propsDefaults: f } = r;
        n in f ? o = f[n] : (Tn(r), o = f[n] = u.call(null, t), on());
      } else
        o = u;
    }
    i[0] && (s && !c ? o = !1 : i[1] && (o === "" || o === Mt(n)) && (o = !0));
  }
  return o;
}
function bl(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, c = [];
  let u = !1;
  if (!te(e)) {
    const _ = (p) => {
      u = !0;
      const [m, L] = bl(p, t, !0);
      ye(i, m), L && c.push(...L);
    };
    !n && t.mixins.length && t.mixins.forEach(_), e.extends && _(e.extends), e.mixins && e.mixins.forEach(_);
  }
  if (!s && !u)
    return ge(e) && o.set(e, Nn), Nn;
  if (Q(s))
    for (let _ = 0; _ < s.length; _++) {
      process.env.NODE_ENV !== "production" && !ve(s[_]) && F("props must be strings when using array syntax.", s[_]);
      const p = On(s[_]);
      Ir(p) && (i[p] = Ee);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !ge(s) && F("invalid props options", s);
    for (const _ in s) {
      const p = On(_);
      if (Ir(p)) {
        const m = s[_], L = i[p] = Q(m) || te(m) ? { type: m } : Object.assign({}, m);
        if (L) {
          const w = wr(Boolean, L.type), T = wr(String, L.type);
          L[0] = w > -1, L[1] = T < 0 || w < T, (w > -1 || ae(L, "default")) && c.push(p);
        }
      }
    }
  }
  const f = [i, c];
  return ge(e) && o.set(e, f), f;
}
function Ir(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && F(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function bs(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Sr(e, t) {
  return bs(e) === bs(t);
}
function wr(e, t) {
  return Q(t) ? t.findIndex((n) => Sr(n, e)) : te(t) && Sr(t, e) ? 0 : -1;
}
function Nl(e, t, n) {
  const o = oe(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && fu(s, o[s], i, !ae(e, s) && !ae(e, Mt(s)));
  }
}
function fu(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    F('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let c = !1;
      const u = Q(r) ? r : [r], f = [];
      for (let _ = 0; _ < u.length && !c; _++) {
        const { valid: p, expectedType: m } = pu(t, u[_]);
        f.push(m || ""), c = p;
      }
      if (!c) {
        F(mu(e, t, f));
        return;
      }
    }
    i && !i(t) && F('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const du = /* @__PURE__ */ jt("String,Number,Boolean,Function,Symbol,BigInt");
function pu(e, t) {
  let n;
  const o = bs(t);
  if (du(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = ge(e) : o === "Array" ? n = Q(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function mu(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Co).join(" | ")}`;
  const r = n[0], s = Ws(t), i = Ar(t, r), c = Ar(t, s);
  return n.length === 1 && Pr(r) && !_u(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, Pr(s) && (o += `with value ${c}.`), o;
}
function Ar(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Pr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function _u(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const vl = (e) => e[0] === "_" || e === "$stable", er = (e) => Q(e) ? e.map(ot) : [ot(e)], gu = (e, t, n) => {
  if (t._n)
    return t;
  const o = Dc((...r) => (process.env.NODE_ENV !== "production" && Se && F(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), er(t(...r))), n);
  return o._c = !1, o;
}, yl = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (vl(r))
      continue;
    const s = e[r];
    if (te(s))
      t[r] = gu(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && F(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = er(s);
      t[r] = () => i;
    }
  }
}, Ol = (e, t) => {
  process.env.NODE_ENV !== "production" && !eo(e.vnode) && F("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = er(t);
  e.slots.default = () => n;
}, hu = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = oe(t), Eo(t, "_", n)) : yl(t, e.slots = {});
  } else
    e.slots = {}, t && Ol(e, t);
  Eo(e.slots, Uo, 1);
}, Eu = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = Ee;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && tn ? ye(r, t) : n && c === 1 ? s = !1 : (ye(r, t), !n && c === 1 && delete r._) : (s = !t.$stable, yl(t, r)), i = t;
  } else
    t && (Ol(e, t), i = { default: 1 });
  if (s)
    for (const c in r)
      !vl(c) && !(c in i) && delete r[c];
};
function Tl() {
  return {
    app: null,
    config: {
      isNativeTag: Ti,
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
let bu = 0;
function Nu(e, t) {
  return function(o, r = null) {
    te(o) || (o = Object.assign({}, o)), r != null && !ge(r) && (process.env.NODE_ENV !== "production" && F("root props passed to app.mount() must be an object."), r = null);
    const s = Tl(), i = /* @__PURE__ */ new Set();
    let c = !1;
    const u = s.app = {
      _uid: bu++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Mr,
      get config() {
        return s.config;
      },
      set config(f) {
        process.env.NODE_ENV !== "production" && F("app.config cannot be replaced. Modify individual options instead.");
      },
      use(f, ..._) {
        return i.has(f) ? process.env.NODE_ENV !== "production" && F("Plugin has already been applied to target app.") : f && te(f.install) ? (i.add(f), f.install(u, ..._)) : te(f) ? (i.add(f), f(u, ..._)) : process.env.NODE_ENV !== "production" && F('A plugin must either be a function or an object with an "install" function.'), u;
      },
      mixin(f) {
        return s.mixins.includes(f) ? process.env.NODE_ENV !== "production" && F("Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")) : s.mixins.push(f), u;
      },
      component(f, _) {
        return process.env.NODE_ENV !== "production" && vs(f, s.config), _ ? (process.env.NODE_ENV !== "production" && s.components[f] && F(`Component "${f}" has already been registered in target app.`), s.components[f] = _, u) : s.components[f];
      },
      directive(f, _) {
        return process.env.NODE_ENV !== "production" && _l(f), _ ? (process.env.NODE_ENV !== "production" && s.directives[f] && F(`Directive "${f}" has already been registered in target app.`), s.directives[f] = _, u) : s.directives[f];
      },
      mount(f, _, p) {
        if (c)
          process.env.NODE_ENV !== "production" && F("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && f.__vue_app__ && F("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const m = Fe(o, r);
          return m.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(Et(m), f, p);
          }), _ && t ? t(m, f) : e(m, f, p), c = !0, u._container = f, f.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = m.component, hc(u, Mr)), nr(m.component) || m.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, Ec(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && F("Cannot unmount an app that is not mounted.");
      },
      provide(f, _) {
        return process.env.NODE_ENV !== "production" && f in s.provides && F(`App already provides property with key "${String(f)}". It will be overwritten with the new value.`), s.provides[f] = _, u;
      }
    };
    return u;
  };
}
function Ns(e, t, n, o, r = !1) {
  if (Q(e)) {
    e.forEach((m, L) => Ns(m, t && (Q(t) ? t[L] : t), n, o, r));
    return;
  }
  if (mo(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? nr(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: c, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    F("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const f = t && t.r, _ = c.refs === Ee ? c.refs = {} : c.refs, p = c.setupState;
  if (f != null && f !== u && (ve(f) ? (_[f] = null, ae(p, f) && (p[f] = null)) : Ce(f) && (f.value = null)), te(u))
    Dt(u, c, 12, [i, _]);
  else {
    const m = ve(u), L = Ce(u);
    if (m || L) {
      const w = () => {
        if (e.f) {
          const T = m ? ae(p, u) ? p[u] : _[u] : u.value;
          r ? Q(T) && $s(T, s) : Q(T) ? T.includes(s) || T.push(s) : m ? (_[u] = [s], ae(p, u) && (p[u] = _[u])) : (u.value = [s], e.k && (_[e.k] = u.value));
        } else
          m ? (_[u] = i, ae(p, u) && (p[u] = i)) : L ? (u.value = i, e.k && (_[e.k] = i)) : process.env.NODE_ENV !== "production" && F("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (w.id = -1, Ke(w, n)) : w();
    } else
      process.env.NODE_ENV !== "production" && F("Invalid template ref type:", u, `(${typeof u})`);
  }
}
let wn, Rt;
function Lt(e, t) {
  e.appContext.config.performance && Oo() && Rt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && yc(e, t, Oo() ? Rt.now() : Date.now());
}
function kt(e, t) {
  if (e.appContext.config.performance && Oo()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Rt.mark(o), Rt.measure(`<${jo(e, e.type)}> ${t}`, n, o), Rt.clearMarks(n), Rt.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Oc(e, t, Oo() ? Rt.now() : Date.now());
}
function Oo() {
  return wn !== void 0 || (typeof window != "undefined" && window.performance ? (wn = !0, Rt = window.performance) : wn = !1), wn;
}
function vu() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const Ke = Rc;
function yu(e) {
  return Ou(e);
}
function Ou(e, t) {
  vu();
  const n = Ii();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && sl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: c, createComment: u, setText: f, setElementText: _, parentNode: p, nextSibling: m, setScopeId: L = Ae, insertStaticContent: w } = e, T = (l, a, d, g = null, N = null, D = null, R = !1, A = null, $ = process.env.NODE_ENV !== "production" && tn ? !1 : !!a.dynamicChildren) => {
    if (l === a)
      return;
    l && !Xt(l, a) && (g = Ze(l), He(l, N, D, !0), l = null), a.patchFlag === -2 && ($ = !1, a.dynamicChildren = null);
    const { type: I, ref: h, shapeFlag: v } = a;
    switch (I) {
      case Cn:
        P(l, a, d, g);
        break;
      case Pe:
        E(l, a, d, g);
        break;
      case Mn:
        l == null ? O(a, d, g, R) : process.env.NODE_ENV !== "production" && C(l, a, d, R);
        break;
      case Le:
        q(l, a, d, g, N, D, R, A, $);
        break;
      default:
        v & 1 ? M(l, a, d, g, N, D, R, A, $) : v & 6 ? re(l, a, d, g, N, D, R, A, $) : v & 64 || v & 128 ? I.process(l, a, d, g, N, D, R, A, $, xe) : process.env.NODE_ENV !== "production" && F("Invalid VNode type:", I, `(${typeof I})`);
    }
    h != null && N && Ns(h, l && l.ref, D, a || l, !a);
  }, P = (l, a, d, g) => {
    if (l == null)
      o(a.el = c(a.children), d, g);
    else {
      const N = a.el = l.el;
      a.children !== l.children && f(N, a.children);
    }
  }, E = (l, a, d, g) => {
    l == null ? o(a.el = u(a.children || ""), d, g) : a.el = l.el;
  }, O = (l, a, d, g) => {
    [l.el, l.anchor] = w(l.children, a, d, g, l.el, l.anchor);
  }, C = (l, a, d, g) => {
    if (a.children !== l.children) {
      const N = m(l.anchor);
      y(l), [a.el, a.anchor] = w(a.children, d, N, g);
    } else
      a.el = l.el, a.anchor = l.anchor;
  }, b = ({ el: l, anchor: a }, d, g) => {
    let N;
    for (; l && l !== a; )
      N = m(l), o(l, d, g), l = N;
    o(a, d, g);
  }, y = ({ el: l, anchor: a }) => {
    let d;
    for (; l && l !== a; )
      d = m(l), r(l), l = d;
    r(a);
  }, M = (l, a, d, g, N, D, R, A, $) => {
    R = R || a.type === "svg", l == null ? V(a, d, g, N, D, R, A, $) : J(l, a, N, D, R, A, $);
  }, V = (l, a, d, g, N, D, R, A) => {
    let $, I;
    const { type: h, props: v, shapeFlag: B, transition: X, dirs: se } = l;
    if ($ = l.el = i(l.type, D, v && v.is, v), B & 8 ? _($, l.children) : B & 16 && G(l.children, $, null, g, N, D && h !== "foreignObject", R, A), se && Kt(l, null, g, "created"), v) {
      for (const fe in v)
        fe !== "value" && !uo(fe) && s($, fe, null, v[fe], D, l.children, g, N, Me);
      "value" in v && s($, "value", null, v.value), (I = v.onVnodeBeforeMount) && ft(I, g, l);
    }
    H($, l, l.scopeId, R, g), process.env.NODE_ENV !== "production" && (Object.defineProperty($, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty($, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), se && Kt(l, null, g, "beforeMount");
    const pe = (!N || N && !N.pendingBranch) && X && !X.persisted;
    pe && X.beforeEnter($), o($, a, d), ((I = v && v.onVnodeMounted) || pe || se) && Ke(() => {
      I && ft(I, g, l), pe && X.enter($), se && Kt(l, null, g, "mounted");
    }, N);
  }, H = (l, a, d, g, N) => {
    if (d && L(l, d), g)
      for (let D = 0; D < g.length; D++)
        L(l, g[D]);
    if (N) {
      let D = N.subTree;
      if (process.env.NODE_ENV !== "production" && D.patchFlag > 0 && D.patchFlag & 2048 && (D = al(D.children) || D), a === D) {
        const R = N.vnode;
        H(l, R, R.scopeId, R.slotScopeIds, N.parent);
      }
    }
  }, G = (l, a, d, g, N, D, R, A, $ = 0) => {
    for (let I = $; I < l.length; I++) {
      const h = l[I] = A ? Vt(l[I]) : ot(l[I]);
      T(null, h, a, d, g, N, D, R, A);
    }
  }, J = (l, a, d, g, N, D, R) => {
    const A = a.el = l.el;
    let { patchFlag: $, dynamicChildren: I, dirs: h } = a;
    $ |= l.patchFlag & 16;
    const v = l.props || Ee, B = a.props || Ee;
    let X;
    d && Yt(d, !1), (X = B.onVnodeBeforeUpdate) && ft(X, d, a, l), h && Kt(a, l, d, "beforeUpdate"), d && Yt(d, !0), process.env.NODE_ENV !== "production" && tn && ($ = 0, R = !1, I = null);
    const se = N && a.type !== "foreignObject";
    if (I ? (z(l.dynamicChildren, I, A, d, g, se, D), process.env.NODE_ENV !== "production" && d && d.type.__hmrId && _o(l, a)) : R || ue(l, a, A, null, d, g, se, D, !1), $ > 0) {
      if ($ & 16)
        Y(A, a, v, B, d, g, N);
      else if ($ & 2 && v.class !== B.class && s(A, "class", null, B.class, N), $ & 4 && s(A, "style", v.style, B.style, N), $ & 8) {
        const pe = a.dynamicProps;
        for (let fe = 0; fe < pe.length; fe++) {
          const he = pe[fe], ze = v[he], Ot = B[he];
          (Ot !== ze || he === "value") && s(A, he, ze, Ot, N, l.children, d, g, Me);
        }
      }
      $ & 1 && l.children !== a.children && _(A, a.children);
    } else
      !R && I == null && Y(A, a, v, B, d, g, N);
    ((X = B.onVnodeUpdated) || h) && Ke(() => {
      X && ft(X, d, a, l), h && Kt(a, l, d, "updated");
    }, g);
  }, z = (l, a, d, g, N, D, R) => {
    for (let A = 0; A < a.length; A++) {
      const $ = l[A], I = a[A], h = $.el && ($.type === Le || !Xt($, I) || $.shapeFlag & 70) ? p($.el) : d;
      T($, I, h, null, g, N, D, R, !0);
    }
  }, Y = (l, a, d, g, N, D, R) => {
    if (d !== g) {
      if (d !== Ee)
        for (const A in d)
          !uo(A) && !(A in g) && s(l, A, d[A], null, R, a.children, N, D, Me);
      for (const A in g) {
        if (uo(A))
          continue;
        const $ = g[A], I = d[A];
        $ !== I && A !== "value" && s(l, A, I, $, R, a.children, N, D, Me);
      }
      "value" in g && s(l, "value", d.value, g.value);
    }
  }, q = (l, a, d, g, N, D, R, A, $) => {
    const I = a.el = l ? l.el : c(""), h = a.anchor = l ? l.anchor : c("");
    let { patchFlag: v, dynamicChildren: B, slotScopeIds: X } = a;
    process.env.NODE_ENV !== "production" && (tn || v & 2048) && (v = 0, $ = !1, B = null), X && (A = A ? A.concat(X) : X), l == null ? (o(I, d, g), o(h, d, g), G(a.children, d, h, N, D, R, A, $)) : v > 0 && v & 64 && B && l.dynamicChildren ? (z(l.dynamicChildren, B, d, N, D, R, A), process.env.NODE_ENV !== "production" && N && N.type.__hmrId ? _o(l, a) : (a.key != null || N && a === N.subTree) && _o(l, a, !0)) : ue(l, a, d, h, N, D, R, A, $);
  }, re = (l, a, d, g, N, D, R, A, $) => {
    a.slotScopeIds = A, l == null ? a.shapeFlag & 512 ? N.ctx.activate(a, d, g, R, $) : W(a, d, g, N, D, R, $) : S(l, a, $);
  }, W = (l, a, d, g, N, D, R) => {
    const A = l.component = Vu(l, g, N);
    if (process.env.NODE_ENV !== "production" && A.type.__hmrId && pc(A), process.env.NODE_ENV !== "production" && (fo(l), Lt(A, "mount")), eo(l) && (A.ctx.renderer = xe), process.env.NODE_ENV !== "production" && Lt(A, "init"), Fu(A), process.env.NODE_ENV !== "production" && kt(A, "init"), A.asyncDep) {
      if (N && N.registerDep(A, x), !l.el) {
        const $ = A.subTree = Fe(Pe);
        E(null, $, a, d);
      }
      return;
    }
    x(A, l, a, d, N, D, R), process.env.NODE_ENV !== "production" && (po(), kt(A, "mount"));
  }, S = (l, a, d) => {
    const g = a.component = l.component;
    if (Ac(l, a, d))
      if (g.asyncDep && !g.asyncResolved) {
        process.env.NODE_ENV !== "production" && fo(a), K(g, a, d), process.env.NODE_ENV !== "production" && po();
        return;
      } else
        g.next = a, fc(g.update), g.update();
    else
      a.el = l.el, g.vnode = a;
  }, x = (l, a, d, g, N, D, R) => {
    const A = () => {
      if (l.isMounted) {
        let { next: h, bu: v, u: B, parent: X, vnode: se } = l, pe = h, fe;
        process.env.NODE_ENV !== "production" && fo(h || l.vnode), Yt(l, !1), h ? (h.el = se.el, K(l, h, R)) : h = se, v && Sn(v), (fe = h.props && h.props.onVnodeBeforeUpdate) && ft(fe, X, h, se), Yt(l, !0), process.env.NODE_ENV !== "production" && Lt(l, "render");
        const he = Xo(l);
        process.env.NODE_ENV !== "production" && kt(l, "render");
        const ze = l.subTree;
        l.subTree = he, process.env.NODE_ENV !== "production" && Lt(l, "patch"), T(
          ze,
          he,
          p(ze.el),
          Ze(ze),
          l,
          N,
          D
        ), process.env.NODE_ENV !== "production" && kt(l, "patch"), h.el = he.el, pe === null && Pc(l, he.el), B && Ke(B, N), (fe = h.props && h.props.onVnodeUpdated) && Ke(() => ft(fe, X, h, se), N), process.env.NODE_ENV !== "production" && rl(l), process.env.NODE_ENV !== "production" && po();
      } else {
        let h;
        const { el: v, props: B } = a, { bm: X, m: se, parent: pe } = l, fe = mo(a);
        if (Yt(l, !1), X && Sn(X), !fe && (h = B && B.onVnodeBeforeMount) && ft(h, pe, a), Yt(l, !0), v && yt) {
          const he = () => {
            process.env.NODE_ENV !== "production" && Lt(l, "render"), l.subTree = Xo(l), process.env.NODE_ENV !== "production" && kt(l, "render"), process.env.NODE_ENV !== "production" && Lt(l, "hydrate"), yt(v, l.subTree, l, N, null), process.env.NODE_ENV !== "production" && kt(l, "hydrate");
          };
          fe ? a.type.__asyncLoader().then(
            () => !l.isUnmounted && he()
          ) : he();
        } else {
          process.env.NODE_ENV !== "production" && Lt(l, "render");
          const he = l.subTree = Xo(l);
          process.env.NODE_ENV !== "production" && kt(l, "render"), process.env.NODE_ENV !== "production" && Lt(l, "patch"), T(null, he, d, g, l, N, D), process.env.NODE_ENV !== "production" && kt(l, "patch"), a.el = he.el;
        }
        if (se && Ke(se, N), !fe && (h = B && B.onVnodeMounted)) {
          const he = a;
          Ke(() => ft(h, pe, he), N);
        }
        (a.shapeFlag & 256 || pe && mo(pe.vnode) && pe.vnode.shapeFlag & 256) && l.a && Ke(l.a, N), l.isMounted = !0, process.env.NODE_ENV !== "production" && bc(l), a = d = g = null;
      }
    }, $ = l.effect = new Bs(
      A,
      () => Vo(I),
      l.scope
    ), I = l.update = () => $.run();
    I.id = l.uid, Yt(l, !0), process.env.NODE_ENV !== "production" && ($.onTrack = l.rtc ? (h) => Sn(l.rtc, h) : void 0, $.onTrigger = l.rtg ? (h) => Sn(l.rtg, h) : void 0, I.ownerInstance = l), I();
  }, K = (l, a, d) => {
    a.component = l;
    const g = l.vnode.props;
    l.vnode = a, l.next = null, uu(l, a.props, g, d), Eu(l, a.children, d), un(), yr(), fn();
  }, ue = (l, a, d, g, N, D, R, A, $ = !1) => {
    const I = l && l.children, h = l ? l.shapeFlag : 0, v = a.children, { patchFlag: B, shapeFlag: X } = a;
    if (B > 0) {
      if (B & 128) {
        Te(I, v, d, g, N, D, R, A, $);
        return;
      } else if (B & 256) {
        me(I, v, d, g, N, D, R, A, $);
        return;
      }
    }
    X & 8 ? (h & 16 && Me(I, N, D), v !== I && _(d, v)) : h & 16 ? X & 16 ? Te(I, v, d, g, N, D, R, A, $) : Me(I, N, D, !0) : (h & 8 && _(d, ""), X & 16 && G(v, d, g, N, D, R, A, $));
  }, me = (l, a, d, g, N, D, R, A, $) => {
    l = l || Nn, a = a || Nn;
    const I = l.length, h = a.length, v = Math.min(I, h);
    let B;
    for (B = 0; B < v; B++) {
      const X = a[B] = $ ? Vt(a[B]) : ot(a[B]);
      T(l[B], X, d, null, N, D, R, A, $);
    }
    I > h ? Me(l, N, D, !0, !1, v) : G(a, d, g, N, D, R, A, $, v);
  }, Te = (l, a, d, g, N, D, R, A, $) => {
    let I = 0;
    const h = a.length;
    let v = l.length - 1, B = h - 1;
    for (; I <= v && I <= B; ) {
      const X = l[I], se = a[I] = $ ? Vt(a[I]) : ot(a[I]);
      if (Xt(X, se))
        T(X, se, d, null, N, D, R, A, $);
      else
        break;
      I++;
    }
    for (; I <= v && I <= B; ) {
      const X = l[v], se = a[B] = $ ? Vt(a[B]) : ot(a[B]);
      if (Xt(X, se))
        T(X, se, d, null, N, D, R, A, $);
      else
        break;
      v--, B--;
    }
    if (I > v) {
      if (I <= B) {
        const X = B + 1, se = X < h ? a[X].el : g;
        for (; I <= B; )
          T(null, a[I] = $ ? Vt(a[I]) : ot(a[I]), d, se, N, D, R, A, $), I++;
      }
    } else if (I > B)
      for (; I <= v; )
        He(l[I], N, D, !0), I++;
    else {
      const X = I, se = I, pe = /* @__PURE__ */ new Map();
      for (I = se; I <= B; I++) {
        const $e = a[I] = $ ? Vt(a[I]) : ot(a[I]);
        $e.key != null && (process.env.NODE_ENV !== "production" && pe.has($e.key) && F("Duplicate keys found during update:", JSON.stringify($e.key), "Make sure keys are unique."), pe.set($e.key, I));
      }
      let fe, he = 0;
      const ze = B - se + 1;
      let Ot = !1, fr = 0;
      const Dn = new Array(ze);
      for (I = 0; I < ze; I++)
        Dn[I] = 0;
      for (I = X; I <= v; I++) {
        const $e = l[I];
        if (he >= ze) {
          He($e, N, D, !0);
          continue;
        }
        let ct;
        if ($e.key != null)
          ct = pe.get($e.key);
        else
          for (fe = se; fe <= B; fe++)
            if (Dn[fe - se] === 0 && Xt($e, a[fe])) {
              ct = fe;
              break;
            }
        ct === void 0 ? He($e, N, D, !0) : (Dn[ct - se] = I + 1, ct >= fr ? fr = ct : Ot = !0, T($e, a[ct], d, null, N, D, R, A, $), he++);
      }
      const dr = Ot ? Tu(Dn) : Nn;
      for (fe = dr.length - 1, I = ze - 1; I >= 0; I--) {
        const $e = se + I, ct = a[$e], pr = $e + 1 < h ? a[$e + 1].el : g;
        Dn[I] === 0 ? T(null, ct, d, pr, N, D, R, A, $) : Ot && (fe < 0 || I !== dr[fe] ? Ve(ct, d, pr, 2) : fe--);
      }
    }
  }, Ve = (l, a, d, g, N = null) => {
    const { el: D, type: R, transition: A, children: $, shapeFlag: I } = l;
    if (I & 6) {
      Ve(l.component.subTree, a, d, g);
      return;
    }
    if (I & 128) {
      l.suspense.move(a, d, g);
      return;
    }
    if (I & 64) {
      R.move(l, a, d, xe);
      return;
    }
    if (R === Le) {
      o(D, a, d);
      for (let v = 0; v < $.length; v++)
        Ve($[v], a, d, g);
      o(l.anchor, a, d);
      return;
    }
    if (R === Mn) {
      b(l, a, d);
      return;
    }
    if (g !== 2 && I & 1 && A)
      if (g === 0)
        A.beforeEnter(D), o(D, a, d), Ke(() => A.enter(D), N);
      else {
        const { leave: v, delayLeave: B, afterLeave: X } = A, se = () => o(D, a, d), pe = () => {
          v(D, () => {
            se(), X && X();
          });
        };
        B ? B(D, se, pe) : pe();
      }
    else
      o(D, a, d);
  }, He = (l, a, d, g = !1, N = !1) => {
    const { type: D, props: R, ref: A, children: $, dynamicChildren: I, shapeFlag: h, patchFlag: v, dirs: B } = l;
    if (A != null && Ns(A, null, d, l, !0), h & 256) {
      a.ctx.deactivate(l);
      return;
    }
    const X = h & 1 && B, se = !mo(l);
    let pe;
    if (se && (pe = R && R.onVnodeBeforeUnmount) && ft(pe, a, l), h & 6)
      Bt(l.component, d, g);
    else {
      if (h & 128) {
        l.suspense.unmount(d, g);
        return;
      }
      X && Kt(l, null, a, "beforeUnmount"), h & 64 ? l.type.remove(l, a, d, N, xe, g) : I && (D !== Le || v > 0 && v & 64) ? Me(I, a, d, !1, !0) : (D === Le && v & 384 || !N && h & 16) && Me($, a, d), g && vt(l);
    }
    (se && (pe = R && R.onVnodeUnmounted) || X) && Ke(() => {
      pe && ft(pe, a, l), X && Kt(l, null, a, "unmounted");
    }, d);
  }, vt = (l) => {
    const { type: a, el: d, anchor: g, transition: N } = l;
    if (a === Le) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && N && !N.persisted ? l.children.forEach((R) => {
        R.type === Pe ? r(R.el) : vt(R);
      }) : Ht(d, g);
      return;
    }
    if (a === Mn) {
      y(l);
      return;
    }
    const D = () => {
      r(d), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (l.shapeFlag & 1 && N && !N.persisted) {
      const { leave: R, delayLeave: A } = N, $ = () => R(d, D);
      A ? A(l.el, D, $) : $();
    } else
      D();
  }, Ht = (l, a) => {
    let d;
    for (; l !== a; )
      d = m(l), r(l), l = d;
    r(a);
  }, Bt = (l, a, d) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && mc(l);
    const { bum: g, scope: N, update: D, subTree: R, um: A } = l;
    g && Sn(g), N.stop(), D && (D.active = !1, He(R, l, a, d)), A && Ke(A, a), Ke(() => {
      l.isUnmounted = !0;
    }, a), a && a.pendingBranch && !a.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === a.pendingId && (a.deps--, a.deps === 0 && a.resolve()), process.env.NODE_ENV !== "production" && vc(l);
  }, Me = (l, a, d, g = !1, N = !1, D = 0) => {
    for (let R = D; R < l.length; R++)
      He(l[R], a, d, g, N);
  }, Ze = (l) => l.shapeFlag & 6 ? Ze(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : m(l.anchor || l.el), at = (l, a, d) => {
    l == null ? a._vnode && He(a._vnode, null, null, !0) : T(a._vnode || null, l, a, null, null, null, d), yr(), tl(), a._vnode = l;
  }, xe = {
    p: T,
    um: He,
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
    render: at,
    hydrate: nt,
    createApp: Nu(at, nt)
  };
}
function Yt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function _o(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (Q(o) && Q(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = Vt(r[s]), c.el = i.el), n || _o(i, c)), c.type === Cn && (c.el = i.el), process.env.NODE_ENV !== "production" && c.type === Pe && !c.el && (c.el = i.el);
    }
}
function Tu(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const f = e[o];
    if (f !== 0) {
      if (r = n[n.length - 1], e[r] < f) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        c = s + i >> 1, e[n[c]] < f ? s = c + 1 : i = c;
      f < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const Lu = (e) => e.__isTeleport, Le = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Cn = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Pe = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Mn = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), xn = [];
let it = null;
function ie(e = !1) {
  xn.push(it = e ? null : []);
}
function ku() {
  xn.pop(), it = xn[xn.length - 1] || null;
}
let Yn = 1;
function Vr(e) {
  Yn += e;
}
function Ll(e) {
  return e.dynamicChildren = Yn > 0 ? it || Nn : null, ku(), Yn > 0 && it && it.push(e), e;
}
function le(e, t, n, o, r, s) {
  return Ll(U(e, t, n, o, r, s, !0));
}
function Cu(e, t, n, o, r) {
  return Ll(Fe(e, t, n, o, r, !0));
}
function Gn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && mn.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Du = (...e) => Cl(...e), Uo = "__vInternal", kl = ({ key: e }) => e != null ? e : null, go = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ve(e) || Ce(e) || te(e) ? { i: Je, r: e, k: t, f: !!n } : e : null;
function U(e, t = null, n = null, o = 0, r = null, s = e === Le ? 0 : 1, i = !1, c = !1) {
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
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Je
  };
  return c ? (tr(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= ve(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && F("VNode created with invalid key (NaN). VNode type:", u.type), Yn > 0 && !i && it && (u.patchFlag > 0 || s & 6) && u.patchFlag !== 32 && it.push(u), u;
}
const Fe = process.env.NODE_ENV !== "production" ? Du : Cl;
function Cl(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Qc) && (process.env.NODE_ENV !== "production" && !e && F(`Invalid vnode type when creating vnode: ${e}.`), e = Pe), Gn(e)) {
    const c = Et(e, t, !0);
    return n && tr(c, n), Yn > 0 && !s && it && (c.shapeFlag & 6 ? it[it.indexOf(e)] = c : it.push(c)), c.patchFlag |= -2, c;
  }
  if (Pl(e) && (e = e.__vccOpts), t) {
    t = Iu(t);
    let { class: c, style: u } = t;
    c && !ve(c) && (t.class = Xe(c)), ge(u) && (cs(u) && !Q(u) && (u = ye({}, u)), t.style = xs(u));
  }
  const i = ve(e) ? 1 : Vc(e) ? 128 : Lu(e) ? 64 : ge(e) ? 4 : te(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && cs(e) && (e = oe(e), F("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), U(e, t, n, o, r, i, s, !0);
}
function Iu(e) {
  return e ? cs(e) || Uo in e ? ye({}, e) : e : null;
}
function Et(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? wu(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && kl(c),
    ref: t && t.ref ? n && r ? Q(r) ? r.concat(go(t)) : [r, go(t)] : go(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && Q(i) ? i.map(Dl) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Le ? s === -1 ? 16 : s | 16 : s,
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
    ctx: e.ctx
  };
}
function Dl(e) {
  const t = Et(e);
  return Q(e.children) && (t.children = e.children.map(Dl)), t;
}
function Su(e = " ", t = 0) {
  return Fe(Cn, null, e, t);
}
function ut(e = "", t = !1) {
  return t ? (ie(), Cu(Pe, null, e)) : Fe(Pe, null, e);
}
function ot(e) {
  return e == null || typeof e == "boolean" ? Fe(Pe) : Q(e) ? Fe(
    Le,
    null,
    e.slice()
  ) : typeof e == "object" ? Vt(e) : Fe(Cn, null, String(e));
}
function Vt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Et(e);
}
function tr(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), tr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Uo in t) ? t._ctx = Je : r === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    te(t) ? (t = { default: t, _ctx: Je }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Su(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function wu(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Xe([t.class, o.class]));
      else if (r === "style")
        t.style = xs([t.style, o.style]);
      else if (Qn(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(Q(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function ft(e, t, n, o = null) {
  tt(e, t, 7, [
    n,
    o
  ]);
}
const Au = Tl();
let Pu = 0;
function Vu(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Au, s = {
    uid: Pu++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
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
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: bl(o, r),
    emitsOptions: ll(o, r),
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
  return process.env.NODE_ENV !== "production" ? s.ctx = Zc(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Lc.bind(null, s), e.ce && e.ce(s), s;
}
let Se = null;
const rn = () => Se || Je, Tn = (e) => {
  Se = e, e.scope.on();
}, on = () => {
  Se && Se.scope.off(), Se = null;
}, Ru = /* @__PURE__ */ jt("slot,component");
function vs(e, t) {
  const n = t.isNativeTag || Ti;
  (Ru(e) || n(e)) && F("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Il(e) {
  return e.vnode.shapeFlag & 4;
}
let zn = !1;
function Fu(e, t = !1) {
  zn = t;
  const { props: n, children: o } = e.vnode, r = Il(e);
  au(e, n, r, t), hu(e, o);
  const s = r ? Mu(e, t) : void 0;
  return zn = !1, s;
}
function Mu(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && vs(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        vs(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        _l(s[i]);
    }
    o.compilerOptions && Sl() && F('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Bi(new Proxy(e.ctx, gl)), process.env.NODE_ENV !== "production" && eu(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? xu(e) : null;
    Tn(e), un();
    const i = Dt(r, e, 0, [process.env.NODE_ENV !== "production" ? hn(e.props) : e.props, s]);
    if (fn(), on(), js(i)) {
      if (i.then(on, on), t)
        return i.then((c) => {
          Rr(e, c, t);
        }).catch((c) => {
          Po(c, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        F(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Rr(e, i, t);
  } else
    wl(e, t);
}
function Rr(e, t, n) {
  te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) ? (process.env.NODE_ENV !== "production" && Gn(t) && F("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = zi(t), process.env.NODE_ENV !== "production" && tu(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && F(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), wl(e, n);
}
let ys;
const Sl = () => !ys;
function wl(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && ys && !o.render) {
      const r = o.template || Zs(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Lt(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = o, f = ye(ye({
          isCustomElement: s,
          delimiters: c
        }, i), u);
        o.render = ys(r, f), process.env.NODE_ENV !== "production" && kt(e, "compile");
      }
    }
    e.render = o.render || Ae;
  }
  Tn(e), un(), ou(e), fn(), on(), process.env.NODE_ENV !== "production" && !o.render && e.render === Ae && !t && (o.template ? F('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : F("Component is missing template or render function."));
}
function Fr(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return vo(), Ge(e, "get", "$attrs"), t[n];
    },
    set() {
      return F("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return F("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return Ge(e, "get", "$attrs"), t[n];
    }
  });
}
function xu(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && F("expose() should be called only once per setup()."), e.exposed = o || {};
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
      return (o, ...r) => e.emit(o, ...r);
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
function nr(e) {
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
const $u = /(?:^|[-_])(\w)/g, Uu = (e) => e.replace($u, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Al(e, t = !0) {
  return te(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function jo(e, t, n = !1) {
  let o = Al(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? Uu(o) : n ? "App" : "Anonymous";
}
function Pl(e) {
  return te(e) && "__vccOpts" in e;
}
const st = (e, t) => oc(e, t, zn);
function Vl(e, t, n) {
  const o = arguments.length;
  return o === 2 ? ge(t) && !Q(t) ? Gn(t) ? Fe(e, null, [t]) : Fe(e, t) : Fe(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Gn(n) && (n = [n]), Fe(e, t, n));
}
const ju = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), Wu = () => {
  {
    const e = Fn(ju);
    return e || process.env.NODE_ENV !== "production" && F("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function Qo(e) {
  return !!(e && e.__v_isShallow);
}
function Hu() {
  if (process.env.NODE_ENV === "production" || typeof window == "undefined")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(p) {
      return ge(p) ? p.__isVue ? ["div", e, "VueInstance"] : Ce(p) ? [
        "div",
        {},
        ["span", e, _(p)],
        "<",
        c(p.value),
        ">"
      ] : Zt(p) ? [
        "div",
        {},
        ["span", e, Qo(p) ? "ShallowReactive" : "Reactive"],
        "<",
        c(p),
        `>${$t(p) ? " (readonly)" : ""}`
      ] : $t(p) ? [
        "div",
        {},
        ["span", e, Qo(p) ? "ShallowReadonly" : "Readonly"],
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
          ...s(p.$)
        ];
    }
  };
  function s(p) {
    const m = [];
    p.type.props && p.props && m.push(i("props", oe(p.props))), p.setupState !== Ee && m.push(i("setup", p.setupState)), p.data !== Ee && m.push(i("data", oe(p.data)));
    const L = u(p, "computed");
    L && m.push(i("computed", L));
    const w = u(p, "inject");
    return w && m.push(i("injected", w)), m.push([
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
    ]), m;
  }
  function i(p, m) {
    return m = ye({}, m), Object.keys(m).length ? [
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
        ...Object.keys(m).map((L) => [
          "div",
          {},
          ["span", o, L + ": "],
          c(m[L], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(p, m = !0) {
    return typeof p == "number" ? ["span", t, p] : typeof p == "string" ? ["span", n, JSON.stringify(p)] : typeof p == "boolean" ? ["span", o, p] : ge(p) ? ["object", { object: m ? oe(p) : p }] : ["span", n, String(p)];
  }
  function u(p, m) {
    const L = p.type;
    if (te(L))
      return;
    const w = {};
    for (const T in p.ctx)
      f(L, T, m) && (w[T] = p.ctx[T]);
    return w;
  }
  function f(p, m, L) {
    const w = p[L];
    if (Q(w) && w.includes(m) || ge(w) && m in w || p.extends && f(p.extends, m, L) || p.mixins && p.mixins.some((T) => f(T, m, L)))
      return !0;
  }
  function _(p) {
    return Qo(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Mr = "3.2.45", Bu = "http://www.w3.org/2000/svg", qt = typeof document != "undefined" ? document : null, xr = qt && /* @__PURE__ */ qt.createElement("template"), Ku = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? qt.createElementNS(Bu, e) : qt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
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
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      xr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = xr.content;
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
function Yu(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Gu(e, t, n) {
  const o = e.style, r = ve(n);
  if (n && !r) {
    for (const s in n)
      Os(o, s, n[s]);
    if (t && !ve(t))
      for (const s in t)
        n[s] == null && Os(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const zu = /[^\\];\s*$/, $r = /\s*!important$/;
function Os(e, t, n) {
  if (Q(n))
    n.forEach((o) => Os(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && zu.test(n) && F(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Xu(e, t);
    $r.test(n) ? e.setProperty(Mt(o), n.replace($r, ""), "important") : e[o] = n;
  }
}
const Ur = ["Webkit", "Moz", "ms"], Zo = {};
function Xu(e, t) {
  const n = Zo[t];
  if (n)
    return n;
  let o = On(t);
  if (o !== "filter" && o in e)
    return Zo[t] = o;
  o = Co(o);
  for (let r = 0; r < Ur.length; r++) {
    const s = Ur[r] + o;
    if (s in e)
      return Zo[t] = s;
  }
  return t;
}
const jr = "http://www.w3.org/1999/xlink";
function qu(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(jr, t.slice(6, t.length)) : e.setAttributeNS(jr, t, n);
  else {
    const s = Ea(t);
    n == null || s && !yi(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function Ju(e, t, n, o, r, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, r, s), e[t] = n == null ? "" : n;
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
    u === "boolean" ? n = yi(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !c && F(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, u);
  }
  c && e.removeAttribute(t);
}
function Qu(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Zu(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function ef(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [c, u] = tf(t);
    if (o) {
      const f = s[t] = sf(o, r);
      Qu(e, c, f, u);
    } else
      i && (Zu(e, c, i, u), s[t] = void 0);
  }
}
const Wr = /(?:Once|Passive|Capture)$/;
function tf(e) {
  let t;
  if (Wr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Wr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Mt(e.slice(2)), t];
}
let es = 0;
const nf = /* @__PURE__ */ Promise.resolve(), of = () => es || (nf.then(() => es = 0), es = Date.now());
function sf(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    tt(rf(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = of(), n;
}
function rf(e, t) {
  if (Q(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const Hr = /^on[a-z]/, lf = (e, t, n, o, r = !1, s, i, c, u) => {
  t === "class" ? Yu(e, o, r) : t === "style" ? Gu(e, n, o) : Qn(t) ? ho(t) || ef(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : af(e, t, o, r)) ? Ju(e, t, o, s, i, c, u) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), qu(e, t, o, r));
};
function af(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Hr.test(t) && te(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Hr.test(t) && ve(n) ? !1 : t in e;
}
function cf(e) {
  const t = rn();
  if (!t) {
    process.env.NODE_ENV !== "production" && F("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (r = e(t.proxy)) => {
    Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((s) => Ls(s, r));
  }, o = () => {
    const r = e(t.proxy);
    Ts(t.subTree, r), n(r);
  };
  xc(o), to(() => {
    const r = new MutationObserver(o);
    r.observe(t.subTree.el.parentNode, { childList: !0 }), $o(() => r.disconnect());
  });
}
function Ts(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Ts(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Ls(e.el, t);
  else if (e.type === Le)
    e.children.forEach((n) => Ts(n, t));
  else if (e.type === Mn) {
    let { el: n, anchor: o } = e;
    for (; n && (Ls(n, t), n !== o); )
      n = n.nextSibling;
  }
}
function Ls(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    for (const o in t)
      n.setProperty(`--${o}`, t[o]);
  }
}
const uf = {
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
Wc.props;
const ff = /* @__PURE__ */ ye({ patchProp: lf }, Ku);
let Br;
function df() {
  return Br || (Br = yu(ff));
}
const pf = (...e) => {
  const t = df().createApp(...e);
  process.env.NODE_ENV !== "production" && (mf(t), _f(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = gf(o);
    if (!r)
      return;
    const s = t._component;
    !te(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
    const i = n(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function mf(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => _a(t) || ga(t),
    writable: !1
  });
}
function _f(e) {
  if (Sl()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        F("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return F(o), n;
      },
      set() {
        F(o);
      }
    });
  }
}
function gf(e) {
  if (ve(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && F(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && F('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function hf() {
  Hu();
}
process.env.NODE_ENV !== "production" && hf();
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
const Ef = /\{([0-9a-zA-Z]+)\}/g;
function Wo(e, ...t) {
  return t.length === 1 && _e(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Ef, (n, o) => t.hasOwnProperty(o) ? t[o] : "");
}
const bf = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", Nt = (e) => bf ? Symbol(e) : e, Nf = (e, t, n) => vf({ l: e, k: t, s: n }), vf = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ke = (e) => typeof e == "number" && isFinite(e), yf = (e) => sr(e) === "[object Date]", Ut = (e) => sr(e) === "[object RegExp]", Ho = (e) => ne(e) && Object.keys(e).length === 0;
function Ye(e, t) {
  typeof console != "undefined" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const we = Object.assign;
let Kr;
const $n = () => Kr || (Kr = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function Yr(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Of = Object.prototype.hasOwnProperty;
function or(e, t) {
  return Of.call(e, t);
}
const be = Array.isArray, Ne = (e) => typeof e == "function", j = (e) => typeof e == "string", ce = (e) => typeof e == "boolean", _e = (e) => e !== null && typeof e == "object", Rl = Object.prototype.toString, sr = (e) => Rl.call(e), ne = (e) => sr(e) === "[object Object]", Tf = (e) => e == null ? "" : be(e) || ne(e) && e.toString === Rl ? JSON.stringify(e, null, 2) : String(e), Gr = 2;
function Lf(e, t = 0, n = e.length) {
  const o = e.split(/\r?\n/);
  let r = 0;
  const s = [];
  for (let i = 0; i < o.length; i++)
    if (r += o[i].length + 1, r >= t) {
      for (let c = i - Gr; c <= i + Gr || n > r; c++) {
        if (c < 0 || c >= o.length)
          continue;
        const u = c + 1;
        s.push(`${u}${" ".repeat(3 - String(u).length)}|  ${o[c]}`);
        const f = o[c].length;
        if (c === i) {
          const _ = t - (r - f) + 1, p = Math.max(1, n > r ? f - _ : n - t);
          s.push("   |  " + " ".repeat(_) + "^".repeat(p));
        } else if (c > i) {
          if (n > r) {
            const _ = Math.max(Math.min(n - r, f), 1);
            s.push("   |  " + "^".repeat(_));
          }
          r += f + 1;
        }
      }
      break;
    }
  return s.join(`
`);
}
function rr() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, o) {
      const r = e.get(n);
      r && r.push(o) || e.set(n, [o]);
    },
    off(n, o) {
      const r = e.get(n);
      r && r.splice(r.indexOf(o) >>> 0, 1);
    },
    emit(n, o) {
      (e.get(n) || []).slice().map((r) => r(o)), (e.get("*") || []).slice().map((r) => r(n, o));
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
}, kf = {
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
function Bo(e, t, n = {}) {
  const { domain: o, messages: r, args: s } = n, i = process.env.NODE_ENV !== "production" ? Wo((r || kf)[e] || "", ...s || []) : e, c = new SyntaxError(String(i));
  return c.code = e, t && (c.location = t), c.domain = o, c;
}
function Cf(e) {
  throw e;
}
function Df(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ks(e, t, n) {
  const o = { start: e, end: t };
  return n != null && (o.source = n), o;
}
const Tt = " ", If = "\r", je = `
`, Sf = String.fromCharCode(8232), wf = String.fromCharCode(8233);
function Af(e) {
  const t = e;
  let n = 0, o = 1, r = 1, s = 0;
  const i = (V) => t[V] === If && t[V + 1] === je, c = (V) => t[V] === je, u = (V) => t[V] === wf, f = (V) => t[V] === Sf, _ = (V) => i(V) || c(V) || u(V) || f(V), p = () => n, m = () => o, L = () => r, w = () => s, T = (V) => i(V) || u(V) || f(V) ? je : t[V], P = () => T(n), E = () => T(n + s);
  function O() {
    return s = 0, _(n) && (o++, r = 0), i(n) && n++, n++, r++, t[n];
  }
  function C() {
    return i(n + s) && s++, s++, t[n + s];
  }
  function b() {
    n = 0, o = 1, r = 1, s = 0;
  }
  function y(V = 0) {
    s = V;
  }
  function M() {
    const V = n + s;
    for (; V !== n; )
      O();
    s = 0;
  }
  return {
    index: p,
    line: m,
    column: L,
    peekOffset: w,
    charAt: T,
    currentChar: P,
    currentPeek: E,
    next: O,
    peek: C,
    reset: b,
    resetPeek: y,
    skipToPeek: M
  };
}
const At = void 0, zr = "'", Pf = "tokenizer";
function Vf(e, t = {}) {
  const n = t.location !== !1, o = Af(e), r = () => o.index(), s = () => Df(o.line(), o.column(), o.index()), i = s(), c = r(), u = {
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
  }, f = () => u, { onError: _ } = t;
  function p(l, a, d, ...g) {
    const N = f();
    if (a.column += d, a.offset += d, _) {
      const D = ks(N.startLoc, a), R = Bo(l, D, {
        domain: Pf,
        args: g
      });
      _(R);
    }
  }
  function m(l, a, d) {
    l.endLoc = s(), l.currentType = a;
    const g = { type: a };
    return n && (g.loc = ks(l.startLoc, l.endLoc)), d != null && (g.value = d), g;
  }
  const L = (l) => m(l, 14);
  function w(l, a) {
    return l.currentChar() === a ? (l.next(), a) : (p(ee.EXPECTED_TOKEN, s(), 0, a), "");
  }
  function T(l) {
    let a = "";
    for (; l.currentPeek() === Tt || l.currentPeek() === je; )
      a += l.currentPeek(), l.peek();
    return a;
  }
  function P(l) {
    const a = T(l);
    return l.skipToPeek(), a;
  }
  function E(l) {
    if (l === At)
      return !1;
    const a = l.charCodeAt(0);
    return a >= 97 && a <= 122 || a >= 65 && a <= 90 || a === 95;
  }
  function O(l) {
    if (l === At)
      return !1;
    const a = l.charCodeAt(0);
    return a >= 48 && a <= 57;
  }
  function C(l, a) {
    const { currentType: d } = a;
    if (d !== 2)
      return !1;
    T(l);
    const g = E(l.currentPeek());
    return l.resetPeek(), g;
  }
  function b(l, a) {
    const { currentType: d } = a;
    if (d !== 2)
      return !1;
    T(l);
    const g = l.currentPeek() === "-" ? l.peek() : l.currentPeek(), N = O(g);
    return l.resetPeek(), N;
  }
  function y(l, a) {
    const { currentType: d } = a;
    if (d !== 2)
      return !1;
    T(l);
    const g = l.currentPeek() === zr;
    return l.resetPeek(), g;
  }
  function M(l, a) {
    const { currentType: d } = a;
    if (d !== 8)
      return !1;
    T(l);
    const g = l.currentPeek() === ".";
    return l.resetPeek(), g;
  }
  function V(l, a) {
    const { currentType: d } = a;
    if (d !== 9)
      return !1;
    T(l);
    const g = E(l.currentPeek());
    return l.resetPeek(), g;
  }
  function H(l, a) {
    const { currentType: d } = a;
    if (!(d === 8 || d === 12))
      return !1;
    T(l);
    const g = l.currentPeek() === ":";
    return l.resetPeek(), g;
  }
  function G(l, a) {
    const { currentType: d } = a;
    if (d !== 10)
      return !1;
    const g = () => {
      const D = l.currentPeek();
      return D === "{" ? E(l.peek()) : D === "@" || D === "%" || D === "|" || D === ":" || D === "." || D === Tt || !D ? !1 : D === je ? (l.peek(), g()) : E(D);
    }, N = g();
    return l.resetPeek(), N;
  }
  function J(l) {
    T(l);
    const a = l.currentPeek() === "|";
    return l.resetPeek(), a;
  }
  function z(l) {
    const a = T(l), d = l.currentPeek() === "%" && l.peek() === "{";
    return l.resetPeek(), {
      isModulo: d,
      hasSpace: a.length > 0
    };
  }
  function Y(l, a = !0) {
    const d = (N = !1, D = "", R = !1) => {
      const A = l.currentPeek();
      return A === "{" ? D === "%" ? !1 : N : A === "@" || !A ? D === "%" ? !0 : N : A === "%" ? (l.peek(), d(N, "%", !0)) : A === "|" ? D === "%" || R ? !0 : !(D === Tt || D === je) : A === Tt ? (l.peek(), d(!0, Tt, R)) : A === je ? (l.peek(), d(!0, je, R)) : !0;
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
  function S(l) {
    return q(l, (d) => {
      const g = d.charCodeAt(0);
      return g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102;
    });
  }
  function x(l) {
    let a = "", d = "";
    for (; a = W(l); )
      d += a;
    return d;
  }
  function K(l) {
    P(l);
    const a = l.currentChar();
    return a !== "%" && p(ee.EXPECTED_TOKEN, s(), 0, a), l.next(), "%";
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
    P(l);
    let a = "", d = "";
    for (; a = re(l); )
      d += a;
    return l.currentChar() === At && p(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), d;
  }
  function Te(l) {
    P(l);
    let a = "";
    return l.currentChar() === "-" ? (l.next(), a += `-${x(l)}`) : a += x(l), l.currentChar() === At && p(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), a;
  }
  function Ve(l) {
    P(l), w(l, "'");
    let a = "", d = "";
    const g = (D) => D !== zr && D !== je;
    for (; a = q(l, g); )
      a === "\\" ? d += He(l) : d += a;
    const N = l.currentChar();
    return N === je || N === At ? (p(ee.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), N === je && (l.next(), w(l, "'")), d) : (w(l, "'"), d);
  }
  function He(l) {
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
        return p(ee.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, a), "";
    }
  }
  function vt(l, a, d) {
    w(l, a);
    let g = "";
    for (let N = 0; N < d; N++) {
      const D = S(l);
      if (!D) {
        p(ee.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${a}${g}${l.currentChar()}`);
        break;
      }
      g += D;
    }
    return `\\${a}${g}`;
  }
  function Ht(l) {
    P(l);
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
  function Me(l) {
    const a = (d = !1, g) => {
      const N = l.currentChar();
      return N === "{" || N === "%" || N === "@" || N === "|" || !N || N === Tt ? g : N === je ? (g += N, l.next(), a(d, g)) : (g += N, l.next(), a(!0, g));
    };
    return a(!1, "");
  }
  function Ze(l) {
    P(l);
    const a = w(l, "|");
    return P(l), a;
  }
  function at(l, a) {
    let d = null;
    switch (l.currentChar()) {
      case "{":
        return a.braceNest >= 1 && p(ee.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), l.next(), d = m(a, 2, "{"), P(l), a.braceNest++, d;
      case "}":
        return a.braceNest > 0 && a.currentType === 2 && p(ee.EMPTY_PLACEHOLDER, s(), 0), l.next(), d = m(a, 3, "}"), a.braceNest--, a.braceNest > 0 && P(l), a.inLinked && a.braceNest === 0 && (a.inLinked = !1), d;
      case "@":
        return a.braceNest > 0 && p(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), d = xe(l, a) || L(a), a.braceNest = 0, d;
      default:
        let N = !0, D = !0, R = !0;
        if (J(l))
          return a.braceNest > 0 && p(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), d = m(a, 1, Ze(l)), a.braceNest = 0, a.inLinked = !1, d;
        if (a.braceNest > 0 && (a.currentType === 5 || a.currentType === 6 || a.currentType === 7))
          return p(ee.UNTERMINATED_CLOSING_BRACE, s(), 0), a.braceNest = 0, nt(l, a);
        if (N = C(l, a))
          return d = m(a, 5, me(l)), P(l), d;
        if (D = b(l, a))
          return d = m(a, 6, Te(l)), P(l), d;
        if (R = y(l, a))
          return d = m(a, 7, Ve(l)), P(l), d;
        if (!N && !D && !R)
          return d = m(a, 13, Ht(l)), p(ee.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, d.value), P(l), d;
        break;
    }
    return d;
  }
  function xe(l, a) {
    const { currentType: d } = a;
    let g = null;
    const N = l.currentChar();
    switch ((d === 8 || d === 9 || d === 12 || d === 10) && (N === je || N === Tt) && p(ee.INVALID_LINKED_FORMAT, s(), 0), N) {
      case "@":
        return l.next(), g = m(a, 8, "@"), a.inLinked = !0, g;
      case ".":
        return P(l), l.next(), m(a, 9, ".");
      case ":":
        return P(l), l.next(), m(a, 10, ":");
      default:
        return J(l) ? (g = m(a, 1, Ze(l)), a.braceNest = 0, a.inLinked = !1, g) : M(l, a) || H(l, a) ? (P(l), xe(l, a)) : V(l, a) ? (P(l), m(a, 12, Bt(l))) : G(l, a) ? (P(l), N === "{" ? at(l, a) || g : m(a, 11, Me(l))) : (d === 8 && p(ee.INVALID_LINKED_FORMAT, s(), 0), a.braceNest = 0, a.inLinked = !1, nt(l, a));
    }
  }
  function nt(l, a) {
    let d = { type: 14 };
    if (a.braceNest > 0)
      return at(l, a) || L(a);
    if (a.inLinked)
      return xe(l, a) || L(a);
    switch (l.currentChar()) {
      case "{":
        return at(l, a) || L(a);
      case "}":
        return p(ee.UNBALANCED_CLOSING_BRACE, s(), 0), l.next(), m(a, 3, "}");
      case "@":
        return xe(l, a) || L(a);
      default:
        if (J(l))
          return d = m(a, 1, Ze(l)), a.braceNest = 0, a.inLinked = !1, d;
        const { isModulo: N, hasSpace: D } = z(l);
        if (N)
          return D ? m(a, 0, ue(l)) : m(a, 4, K(l));
        if (Y(l))
          return m(a, 0, ue(l));
        break;
    }
    return d;
  }
  function yt() {
    const { currentType: l, offset: a, startLoc: d, endLoc: g } = u;
    return u.lastType = l, u.lastOffset = a, u.lastStartLoc = d, u.lastEndLoc = g, u.offset = r(), u.startLoc = s(), o.currentChar() === At ? m(u, 14) : nt(o, u);
  }
  return {
    nextToken: yt,
    currentOffset: r,
    currentPosition: s,
    context: f
  };
}
const Rf = "parser", Ff = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Mf(e, t, n) {
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
function xf(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function o(E, O, C, b, ...y) {
    const M = E.currentPosition();
    if (M.offset += b, M.column += b, n) {
      const V = ks(C, M), H = Bo(O, V, {
        domain: Rf,
        args: y
      });
      n(H);
    }
  }
  function r(E, O, C) {
    const b = {
      type: E,
      start: O,
      end: O
    };
    return t && (b.loc = { start: C, end: C }), b;
  }
  function s(E, O, C, b) {
    E.end = O, b && (E.type = b), t && E.loc && (E.loc.end = C);
  }
  function i(E, O) {
    const C = E.context(), b = r(3, C.offset, C.startLoc);
    return b.value = O, s(b, E.currentOffset(), E.currentPosition()), b;
  }
  function c(E, O) {
    const C = E.context(), { lastOffset: b, lastStartLoc: y } = C, M = r(5, b, y);
    return M.index = parseInt(O, 10), E.nextToken(), s(M, E.currentOffset(), E.currentPosition()), M;
  }
  function u(E, O) {
    const C = E.context(), { lastOffset: b, lastStartLoc: y } = C, M = r(4, b, y);
    return M.key = O, E.nextToken(), s(M, E.currentOffset(), E.currentPosition()), M;
  }
  function f(E, O) {
    const C = E.context(), { lastOffset: b, lastStartLoc: y } = C, M = r(9, b, y);
    return M.value = O.replace(Ff, Mf), E.nextToken(), s(M, E.currentOffset(), E.currentPosition()), M;
  }
  function _(E) {
    const O = E.nextToken(), C = E.context(), { lastOffset: b, lastStartLoc: y } = C, M = r(8, b, y);
    return O.type !== 12 ? (o(E, ee.UNEXPECTED_EMPTY_LINKED_MODIFIER, C.lastStartLoc, 0), M.value = "", s(M, b, y), {
      nextConsumeToken: O,
      node: M
    }) : (O.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, dt(O)), M.value = O.value || "", s(M, E.currentOffset(), E.currentPosition()), {
      node: M
    });
  }
  function p(E, O) {
    const C = E.context(), b = r(7, C.offset, C.startLoc);
    return b.value = O, s(b, E.currentOffset(), E.currentPosition()), b;
  }
  function m(E) {
    const O = E.context(), C = r(6, O.offset, O.startLoc);
    let b = E.nextToken();
    if (b.type === 9) {
      const y = _(E);
      C.modifier = y.node, b = y.nextConsumeToken || E.nextToken();
    }
    switch (b.type !== 10 && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, dt(b)), b = E.nextToken(), b.type === 2 && (b = E.nextToken()), b.type) {
      case 11:
        b.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, dt(b)), C.key = p(E, b.value || "");
        break;
      case 5:
        b.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, dt(b)), C.key = u(E, b.value || "");
        break;
      case 6:
        b.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, dt(b)), C.key = c(E, b.value || "");
        break;
      case 7:
        b.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, dt(b)), C.key = f(E, b.value || "");
        break;
      default:
        o(E, ee.UNEXPECTED_EMPTY_LINKED_KEY, O.lastStartLoc, 0);
        const y = E.context(), M = r(7, y.offset, y.startLoc);
        return M.value = "", s(M, y.offset, y.startLoc), C.key = M, s(C, y.offset, y.startLoc), {
          nextConsumeToken: b,
          node: C
        };
    }
    return s(C, E.currentOffset(), E.currentPosition()), {
      node: C
    };
  }
  function L(E) {
    const O = E.context(), C = O.currentType === 1 ? E.currentOffset() : O.offset, b = O.currentType === 1 ? O.endLoc : O.startLoc, y = r(2, C, b);
    y.items = [];
    let M = null;
    do {
      const G = M || E.nextToken();
      switch (M = null, G.type) {
        case 0:
          G.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, dt(G)), y.items.push(i(E, G.value || ""));
          break;
        case 6:
          G.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, dt(G)), y.items.push(c(E, G.value || ""));
          break;
        case 5:
          G.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, dt(G)), y.items.push(u(E, G.value || ""));
          break;
        case 7:
          G.value == null && o(E, ee.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, dt(G)), y.items.push(f(E, G.value || ""));
          break;
        case 8:
          const J = m(E);
          y.items.push(J.node), M = J.nextConsumeToken || null;
          break;
      }
    } while (O.currentType !== 14 && O.currentType !== 1);
    const V = O.currentType === 1 ? O.lastOffset : E.currentOffset(), H = O.currentType === 1 ? O.lastEndLoc : E.currentPosition();
    return s(y, V, H), y;
  }
  function w(E, O, C, b) {
    const y = E.context();
    let M = b.items.length === 0;
    const V = r(1, O, C);
    V.cases = [], V.cases.push(b);
    do {
      const H = L(E);
      M || (M = H.items.length === 0), V.cases.push(H);
    } while (y.currentType !== 14);
    return M && o(E, ee.MUST_HAVE_MESSAGES_IN_PLURAL, C, 0), s(V, E.currentOffset(), E.currentPosition()), V;
  }
  function T(E) {
    const O = E.context(), { offset: C, startLoc: b } = O, y = L(E);
    return O.currentType === 14 ? y : w(E, C, b, y);
  }
  function P(E) {
    const O = Vf(E, we({}, e)), C = O.context(), b = r(0, C.offset, C.startLoc);
    return t && b.loc && (b.loc.source = E), b.body = T(O), C.currentType !== 14 && o(O, ee.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, E[C.offset] || ""), s(b, O.currentOffset(), O.currentPosition()), b;
  }
  return { parse: P };
}
function dt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function $f(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function Xr(e, t) {
  for (let n = 0; n < e.length; n++)
    ir(e[n], t);
}
function ir(e, t) {
  switch (e.type) {
    case 1:
      Xr(e.cases, t), t.helper("plural");
      break;
    case 2:
      Xr(e.items, t);
      break;
    case 6:
      ir(e.key, t), t.helper("linked"), t.helper("type");
      break;
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
      break;
  }
}
function Uf(e, t = {}) {
  const n = $f(e);
  n.helper("normalize"), e.body && ir(e.body, n);
  const o = n.context();
  e.helpers = Array.from(o.helpers);
}
function jf(e, t) {
  const { sourceMap: n, filename: o, breakLineCode: r, needIndent: s } = t, i = {
    source: e.loc.source,
    filename: o,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: s,
    indentLevel: 0
  }, c = () => i;
  function u(T, P) {
    i.code += T;
  }
  function f(T, P = !0) {
    const E = P ? r : "";
    u(s ? E + "  ".repeat(T) : E);
  }
  function _(T = !0) {
    const P = ++i.indentLevel;
    T && f(P);
  }
  function p(T = !0) {
    const P = --i.indentLevel;
    T && f(P);
  }
  function m() {
    f(i.indentLevel);
  }
  return {
    context: c,
    push: u,
    indent: _,
    deindent: p,
    newline: m,
    helper: (T) => `_${T}`,
    needIndent: () => i.needIndent
  };
}
function Wf(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`), Ln(e, t.key), t.modifier ? (e.push(", "), Ln(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Hf(e, t) {
  const { helper: n, needIndent: o } = e;
  e.push(`${n("normalize")}([`), e.indent(o());
  const r = t.items.length;
  for (let s = 0; s < r && (Ln(e, t.items[s]), s !== r - 1); s++)
    e.push(", ");
  e.deindent(o()), e.push("])");
}
function Bf(e, t) {
  const { helper: n, needIndent: o } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(o());
    const r = t.cases.length;
    for (let s = 0; s < r && (Ln(e, t.cases[s]), s !== r - 1); s++)
      e.push(", ");
    e.deindent(o()), e.push("])");
  }
}
function Kf(e, t) {
  t.body ? Ln(e, t.body) : e.push("null");
}
function Ln(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Kf(e, t);
      break;
    case 1:
      Bf(e, t);
      break;
    case 2:
      Hf(e, t);
      break;
    case 6:
      Wf(e, t);
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
const Yf = (e, t = {}) => {
  const n = j(t.mode) ? t.mode : "normal", o = j(t.filename) ? t.filename : "message.intl", r = !!t.sourceMap, s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, i = t.needIndent ? t.needIndent : n !== "arrow", c = e.helpers || [], u = jf(e, {
    mode: n,
    filename: o,
    sourceMap: r,
    breakLineCode: s,
    needIndent: i
  });
  u.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(i), c.length > 0 && (u.push(`const { ${c.map((p) => `${p}: _${p}`).join(", ")} } = ctx`), u.newline()), u.push("return "), Ln(u, e), u.deindent(i), u.push("}");
  const { code: f, map: _ } = u.context();
  return {
    ast: e,
    code: f,
    map: _ ? _.toJSON() : void 0
  };
};
function Gf(e, t = {}) {
  const n = we({}, t), r = xf(n).parse(e);
  return Uf(r, n), Yf(r, n);
}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Fl = {
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
const zf = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Xf(e) {
  return zf.test(e);
}
function qf(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Jf(e) {
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
function Qf(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Xf(t) ? qf(t) : "*" + t;
}
function Zf(e) {
  const t = [];
  let n = -1, o = 0, r = 0, s, i, c, u, f, _, p;
  const m = [];
  m[0] = () => {
    i === void 0 ? i = c : i += c;
  }, m[1] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, m[2] = () => {
    m[0](), r++;
  }, m[3] = () => {
    if (r > 0)
      r--, o = 4, m[0]();
    else {
      if (r = 0, i === void 0 || (i = Qf(i), i === !1))
        return !1;
      m[1]();
    }
  };
  function L() {
    const w = e[n + 1];
    if (o === 5 && w === "'" || o === 6 && w === '"')
      return n++, c = "\\" + w, m[0](), !0;
  }
  for (; o !== null; )
    if (n++, s = e[n], !(s === "\\" && L())) {
      if (u = Jf(s), p = Wt[o], f = p[u] || p.l || 8, f === 8 || (o = f[0], f[1] !== void 0 && (_ = m[f[1]], _ && (c = s, _() === !1))))
        return;
      if (o === 7)
        return t;
    }
}
const qr = /* @__PURE__ */ new Map();
function ed(e, t) {
  return _e(e) ? e[t] : null;
}
function td(e, t) {
  if (!_e(e))
    return null;
  let n = qr.get(t);
  if (n || (n = Zf(t), n && qr.set(t, n)), !n)
    return null;
  const o = n.length;
  let r = e, s = 0;
  for (; s < o; ) {
    const i = r[n[s]];
    if (i === void 0)
      return null;
    r = i, s++;
  }
  return r;
}
const nd = (e) => e, od = (e) => "", sd = "text", rd = (e) => e.length === 0 ? "" : e.join(""), id = Tf;
function Jr(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function ld(e) {
  const t = ke(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ke(e.named.count) || ke(e.named.n)) ? ke(e.named.count) ? e.named.count : ke(e.named.n) ? e.named.n : t : t;
}
function ad(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function cd(e = {}) {
  const t = e.locale, n = ld(e), o = _e(e.pluralRules) && j(t) && Ne(e.pluralRules[t]) ? e.pluralRules[t] : Jr, r = _e(e.pluralRules) && j(t) && Ne(e.pluralRules[t]) ? Jr : void 0, s = (E) => E[o(n, E.length, r)], i = e.list || [], c = (E) => i[E], u = e.named || {};
  ke(e.pluralIndex) && ad(n, u);
  const f = (E) => u[E];
  function _(E) {
    const O = Ne(e.messages) ? e.messages(E) : _e(e.messages) ? e.messages[E] : !1;
    return O || (e.parent ? e.parent.message(E) : od);
  }
  const p = (E) => e.modifiers ? e.modifiers[E] : nd, m = ne(e.processor) && Ne(e.processor.normalize) ? e.processor.normalize : rd, L = ne(e.processor) && Ne(e.processor.interpolate) ? e.processor.interpolate : id, w = ne(e.processor) && j(e.processor.type) ? e.processor.type : sd, P = {
    list: c,
    named: f,
    plural: s,
    linked: (E, ...O) => {
      const [C, b] = O;
      let y = "text", M = "";
      O.length === 1 ? _e(C) ? (M = C.modifier || M, y = C.type || y) : j(C) && (M = C || M) : O.length === 2 && (j(C) && (M = C || M), j(b) && (y = b || y));
      let V = _(E)(P);
      return y === "vnode" && be(V) && M && (V = V[0]), M ? p(M)(V, y) : V;
    },
    message: _,
    type: w,
    interpolate: L,
    normalize: m
  };
  return P;
}
let Xn = null;
function ud(e) {
  Xn = e;
}
function fd(e, t, n) {
  Xn && Xn.emit(Fl.I18nInit, {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const dd = /* @__PURE__ */ pd(Fl.FunctionTranslate);
function pd(e) {
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
}, md = {
  [qe.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [qe.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [qe.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [qe.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [qe.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [qe.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
};
function kn(e, ...t) {
  return Wo(md[e], ...t);
}
function _d(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...be(t) ? t : _e(t) ? Object.keys(t) : j(t) ? [t] : [n]
  ])];
}
function Ml(e, t, n) {
  const o = j(n) ? n : no, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(o);
  if (!s) {
    s = [];
    let i = [n];
    for (; be(i); )
      i = Qr(s, i, t);
    const c = be(t) || !ne(t) ? t : t.default ? t.default : null;
    i = j(c) ? [c] : c, be(i) && Qr(s, i, !1), r.__localeChainCache.set(o, s);
  }
  return s;
}
function Qr(e, t, n) {
  let o = !0;
  for (let r = 0; r < t.length && ce(o); r++) {
    const s = t[r];
    j(s) && (o = gd(e, t[r], n));
  }
  return o;
}
function gd(e, t, n) {
  let o;
  const r = t.split("-");
  do {
    const s = r.join("-");
    o = hd(e, s, n), r.splice(-1, 1);
  } while (r.length && o === !0);
  return o;
}
function hd(e, t, n) {
  let o = !1;
  if (!e.includes(t) && (o = !0, t)) {
    o = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (be(n) || ne(n)) && n[r] && (o = n[r]);
  }
  return o;
}
const Ed = "9.2.2", Ko = -1, no = "en-US", To = "", Zr = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function bd() {
  return {
    upper: (e, t) => t === "text" && j(e) ? e.toUpperCase() : t === "vnode" && _e(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && j(e) ? e.toLowerCase() : t === "vnode" && _e(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && j(e) ? Zr(e) : t === "vnode" && _e(e) && "__v_isVNode" in e ? Zr(e.children) : e
  };
}
let xl;
function Nd(e) {
  xl = e;
}
let $l;
function vd(e) {
  $l = e;
}
let Ul;
function yd(e) {
  Ul = e;
}
let jl = null;
const ei = (e) => {
  jl = e;
}, Od = () => jl;
let Wl = null;
const ti = (e) => {
  Wl = e;
}, Td = () => Wl;
let ni = 0;
function Ld(e = {}) {
  const t = j(e.version) ? e.version : Ed, n = j(e.locale) ? e.locale : no, o = be(e.fallbackLocale) || ne(e.fallbackLocale) || j(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n, r = ne(e.messages) ? e.messages : { [n]: {} }, s = ne(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} }, i = ne(e.numberFormats) ? e.numberFormats : { [n]: {} }, c = we({}, e.modifiers || {}, bd()), u = e.pluralRules || {}, f = Ne(e.missing) ? e.missing : null, _ = ce(e.missingWarn) || Ut(e.missingWarn) ? e.missingWarn : !0, p = ce(e.fallbackWarn) || Ut(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, L = !!e.unresolving, w = Ne(e.postTranslation) ? e.postTranslation : null, T = ne(e.processor) ? e.processor : null, P = ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, O = Ne(e.messageCompiler) ? e.messageCompiler : xl, C = Ne(e.messageResolver) ? e.messageResolver : $l || ed, b = Ne(e.localeFallbacker) ? e.localeFallbacker : Ul || _d, y = _e(e.fallbackContext) ? e.fallbackContext : void 0, M = Ne(e.onWarn) ? e.onWarn : Ye, V = e, H = _e(V.__datetimeFormatters) ? V.__datetimeFormatters : /* @__PURE__ */ new Map(), G = _e(V.__numberFormatters) ? V.__numberFormatters : /* @__PURE__ */ new Map(), J = _e(V.__meta) ? V.__meta : {};
  ni++;
  const z = {
    version: t,
    cid: ni,
    locale: n,
    fallbackLocale: o,
    messages: r,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: _,
    fallbackWarn: p,
    fallbackFormat: m,
    unresolving: L,
    postTranslation: w,
    processor: T,
    warnHtmlMessage: P,
    escapeParameter: E,
    messageCompiler: O,
    messageResolver: C,
    localeFallbacker: b,
    fallbackContext: y,
    onWarn: M,
    __meta: J
  };
  return z.datetimeFormats = s, z.numberFormats = i, z.__datetimeFormatters = H, z.__numberFormatters = G, process.env.NODE_ENV !== "production" && (z.__v_emitter = V.__v_emitter != null ? V.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && fd(z, t, J), z;
}
function Yo(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Hl(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function lr(e, t, n, o, r) {
  const { missing: s, onWarn: i } = e;
  if (process.env.NODE_ENV !== "production") {
    const c = e.__v_emitter;
    c && c.emit("missing", {
      locale: n,
      key: t,
      type: r,
      groupId: `${r}:${t}`
    });
  }
  if (s !== null) {
    const c = s(e, n, t, r);
    return j(c) ? c : t;
  } else
    return process.env.NODE_ENV !== "production" && Hl(o, t) && i(kn(qe.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function An(e, t, n) {
  const o = e;
  o.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
const kd = /<\/?[\w\s="/.':;#-\/]+>/, Cd = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Dd(e, t) {
  (ce(t.warnHtmlMessage) ? t.warnHtmlMessage : !0) && kd.test(e) && Ye(Wo(Cd, { source: e }));
}
const Id = (e) => e;
let oi = /* @__PURE__ */ Object.create(null);
function Sd(e, t = {}) {
  {
    process.env.NODE_ENV !== "production" && Dd(e, t);
    const o = (t.onCacheKey || Id)(e), r = oi[o];
    if (r)
      return r;
    let s = !1;
    const i = t.onError || Cf;
    t.onError = (f) => {
      s = !0, i(f);
    };
    const { code: c } = Gf(e, t), u = new Function(`return ${c}`)();
    return s ? u : oi[o] = u;
  }
}
let Bl = ee.__EXTEND_POINT__;
const ts = () => ++Bl, Ct = {
  INVALID_ARGUMENT: Bl,
  INVALID_DATE_ARGUMENT: ts(),
  INVALID_ISO_DATE_ARGUMENT: ts(),
  __EXTEND_POINT__: ts()
};
function bn(e) {
  return Bo(e, null, process.env.NODE_ENV !== "production" ? { messages: wd } : void 0);
}
const wd = {
  [Ct.INVALID_ARGUMENT]: "Invalid arguments",
  [Ct.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ct.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
}, si = () => "", _t = (e) => Ne(e);
function ri(e, ...t) {
  const { fallbackFormat: n, postTranslation: o, unresolving: r, messageCompiler: s, fallbackLocale: i, messages: c } = e, [u, f] = Cs(...t), _ = ce(f.missingWarn) ? f.missingWarn : e.missingWarn, p = ce(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, m = ce(f.escapeParameter) ? f.escapeParameter : e.escapeParameter, L = !!f.resolvedMessage, w = j(f.default) || ce(f.default) ? ce(f.default) ? s ? u : () => u : f.default : n ? s ? u : () => u : "", T = n || w !== "", P = j(f.locale) ? f.locale : e.locale;
  m && Ad(f);
  let [E, O, C] = L ? [
    u,
    P,
    c[P] || {}
  ] : Kl(e, u, P, i, p, _), b = E, y = u;
  if (!L && !(j(b) || _t(b)) && T && (b = w, y = b), !L && (!(j(b) || _t(b)) || !j(O)))
    return r ? Ko : u;
  if (process.env.NODE_ENV !== "production" && j(b) && e.messageCompiler == null)
    return Ye(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let M = !1;
  const V = () => {
    M = !0;
  }, H = _t(b) ? b : Yl(e, u, O, b, y, V);
  if (M)
    return b;
  const G = Rd(e, O, C, f), J = cd(G), z = Pd(e, H, J), Y = o ? o(z, u) : z;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const q = {
      timestamp: Date.now(),
      key: j(u) ? u : _t(b) ? b.key : "",
      locale: O || (_t(b) ? b.locale : ""),
      format: j(b) ? b : _t(b) ? b.source : "",
      message: Y
    };
    q.meta = we({}, e.__meta, Od() || {}), dd(q);
  }
  return Y;
}
function Ad(e) {
  be(e.list) ? e.list = e.list.map((t) => j(t) ? Yr(t) : t) : _e(e.named) && Object.keys(e.named).forEach((t) => {
    j(e.named[t]) && (e.named[t] = Yr(e.named[t]));
  });
}
function Kl(e, t, n, o, r, s) {
  const { messages: i, onWarn: c, messageResolver: u, localeFallbacker: f } = e, _ = f(e, o, n);
  let p = {}, m, L = null, w = n, T = null;
  const P = "translate";
  for (let E = 0; E < _.length; E++) {
    if (m = T = _[E], process.env.NODE_ENV !== "production" && n !== m && Yo(r, t) && c(kn(qe.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: m
    })), process.env.NODE_ENV !== "production" && n !== m) {
      const M = e.__v_emitter;
      M && M.emit("fallback", {
        type: P,
        key: t,
        from: w,
        to: T,
        groupId: `${P}:${t}`
      });
    }
    p = i[m] || {};
    let O = null, C, b;
    if (process.env.NODE_ENV !== "production" && bt && (O = window.performance.now(), C = "intlify-message-resolve-start", b = "intlify-message-resolve-end", Qe && Qe(C)), (L = u(p, t)) === null && (L = p[t]), process.env.NODE_ENV !== "production" && bt) {
      const M = window.performance.now(), V = e.__v_emitter;
      V && O && L && V.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: L,
        time: M - O,
        groupId: `${P}:${t}`
      }), C && b && Qe && ln && (Qe(b), ln("intlify message resolve", C, b));
    }
    if (j(L) || Ne(L))
      break;
    const y = lr(
      e,
      t,
      m,
      s,
      P
    );
    y !== t && (L = y), w = T;
  }
  return [L, m, p];
}
function Yl(e, t, n, o, r, s) {
  const { messageCompiler: i, warnHtmlMessage: c } = e;
  if (_t(o)) {
    const m = o;
    return m.locale = m.locale || n, m.key = m.key || t, m;
  }
  if (i == null) {
    const m = () => o;
    return m.locale = n, m.key = t, m;
  }
  let u = null, f, _;
  process.env.NODE_ENV !== "production" && bt && (u = window.performance.now(), f = "intlify-message-compilation-start", _ = "intlify-message-compilation-end", Qe && Qe(f));
  const p = i(o, Vd(e, n, r, o, c, s));
  if (process.env.NODE_ENV !== "production" && bt) {
    const m = window.performance.now(), L = e.__v_emitter;
    L && u && L.emit("message-compilation", {
      type: "message-compilation",
      message: o,
      time: m - u,
      groupId: `translate:${t}`
    }), f && _ && Qe && ln && (Qe(_), ln("intlify message compilation", f, _));
  }
  return p.locale = n, p.key = t, p.source = o, p;
}
function Pd(e, t, n) {
  let o = null, r, s;
  process.env.NODE_ENV !== "production" && bt && (o = window.performance.now(), r = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", Qe && Qe(r));
  const i = t(n);
  if (process.env.NODE_ENV !== "production" && bt) {
    const c = window.performance.now(), u = e.__v_emitter;
    u && o && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: i,
      time: c - o,
      groupId: `translate:${t.key}`
    }), r && s && Qe && ln && (Qe(s), ln("intlify message evaluation", r, s));
  }
  return i;
}
function Cs(...e) {
  const [t, n, o] = e, r = {};
  if (!j(t) && !ke(t) && !_t(t))
    throw bn(Ct.INVALID_ARGUMENT);
  const s = ke(t) ? String(t) : (_t(t), t);
  return ke(n) ? r.plural = n : j(n) ? r.default = n : ne(n) && !Ho(n) ? r.named = n : be(n) && (r.list = n), ke(o) ? r.plural = o : j(o) ? r.default = o : ne(o) && we(r, o), [s, r];
}
function Vd(e, t, n, o, r, s) {
  return {
    warnHtmlMessage: r,
    onError: (i) => {
      if (s && s(i), process.env.NODE_ENV !== "production") {
        const c = `Message compilation error: ${i.message}`, u = i.location && Lf(o, i.location.start.offset, i.location.end.offset), f = e.__v_emitter;
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
    onCacheKey: (i) => Nf(t, n, i)
  };
}
function Rd(e, t, n, o) {
  const { modifiers: r, pluralRules: s, messageResolver: i, fallbackLocale: c, fallbackWarn: u, missingWarn: f, fallbackContext: _ } = e, m = {
    locale: t,
    modifiers: r,
    pluralRules: s,
    messages: (L) => {
      let w = i(n, L);
      if (w == null && _) {
        const [, , T] = Kl(_, L, t, c, u, f);
        w = i(T, L);
      }
      if (j(w)) {
        let T = !1;
        const E = Yl(e, L, t, w, L, () => {
          T = !0;
        });
        return T ? si : E;
      } else
        return _t(w) ? w : si;
    }
  };
  return e.processor && (m.processor = e.processor), o.list && (m.list = o.list), o.named && (m.named = o.named), ke(o.plural) && (m.pluralIndex = o.plural), m;
}
const ii = typeof Intl != "undefined", Gl = {
  dateTimeFormat: ii && typeof Intl.DateTimeFormat != "undefined",
  numberFormat: ii && typeof Intl.NumberFormat != "undefined"
};
function li(e, ...t) {
  const { datetimeFormats: n, unresolving: o, fallbackLocale: r, onWarn: s, localeFallbacker: i } = e, { __datetimeFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !Gl.dateTimeFormat)
    return s(kn(qe.CANNOT_FORMAT_DATE)), To;
  const [u, f, _, p] = Ds(...t), m = ce(_.missingWarn) ? _.missingWarn : e.missingWarn, L = ce(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn, w = !!_.part, T = j(_.locale) ? _.locale : e.locale, P = i(
    e,
    r,
    T
  );
  if (!j(u) || u === "")
    return new Intl.DateTimeFormat(T, p).format(f);
  let E = {}, O, C = null, b = T, y = null;
  const M = "datetime format";
  for (let G = 0; G < P.length; G++) {
    if (O = y = P[G], process.env.NODE_ENV !== "production" && T !== O && Yo(L, u) && s(kn(qe.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: O
    })), process.env.NODE_ENV !== "production" && T !== O) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: M,
        key: u,
        from: b,
        to: y,
        groupId: `${M}:${u}`
      });
    }
    if (E = n[O] || {}, C = E[u], ne(C))
      break;
    lr(e, u, O, m, M), b = y;
  }
  if (!ne(C) || !j(O))
    return o ? Ko : u;
  let V = `${O}__${u}`;
  Ho(p) || (V = `${V}__${JSON.stringify(p)}`);
  let H = c.get(V);
  return H || (H = new Intl.DateTimeFormat(O, we({}, C, p)), c.set(V, H)), w ? H.formatToParts(f) : H.format(f);
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
function Ds(...e) {
  const [t, n, o, r] = e, s = {};
  let i = {}, c;
  if (j(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw bn(Ct.INVALID_ISO_DATE_ARGUMENT);
    const f = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    c = new Date(f);
    try {
      c.toISOString();
    } catch (_) {
      throw bn(Ct.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (yf(t)) {
    if (isNaN(t.getTime()))
      throw bn(Ct.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (ke(t))
    c = t;
  else
    throw bn(Ct.INVALID_ARGUMENT);
  return j(n) ? s.key = n : ne(n) && Object.keys(n).forEach((u) => {
    zl.includes(u) ? i[u] = n[u] : s[u] = n[u];
  }), j(o) ? s.locale = o : ne(o) && (i = o), ne(r) && (i = r), [s.key || "", c, s, i];
}
function ai(e, t, n) {
  const o = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    o.__datetimeFormatters.has(s) && o.__datetimeFormatters.delete(s);
  }
}
function ci(e, ...t) {
  const { numberFormats: n, unresolving: o, fallbackLocale: r, onWarn: s, localeFallbacker: i } = e, { __numberFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !Gl.numberFormat)
    return s(kn(qe.CANNOT_FORMAT_NUMBER)), To;
  const [u, f, _, p] = Is(...t), m = ce(_.missingWarn) ? _.missingWarn : e.missingWarn, L = ce(_.fallbackWarn) ? _.fallbackWarn : e.fallbackWarn, w = !!_.part, T = j(_.locale) ? _.locale : e.locale, P = i(
    e,
    r,
    T
  );
  if (!j(u) || u === "")
    return new Intl.NumberFormat(T, p).format(f);
  let E = {}, O, C = null, b = T, y = null;
  const M = "number format";
  for (let G = 0; G < P.length; G++) {
    if (O = y = P[G], process.env.NODE_ENV !== "production" && T !== O && Yo(L, u) && s(kn(qe.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: O
    })), process.env.NODE_ENV !== "production" && T !== O) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: M,
        key: u,
        from: b,
        to: y,
        groupId: `${M}:${u}`
      });
    }
    if (E = n[O] || {}, C = E[u], ne(C))
      break;
    lr(e, u, O, m, M), b = y;
  }
  if (!ne(C) || !j(O))
    return o ? Ko : u;
  let V = `${O}__${u}`;
  Ho(p) || (V = `${V}__${JSON.stringify(p)}`);
  let H = c.get(V);
  return H || (H = new Intl.NumberFormat(O, we({}, C, p)), c.set(V, H)), w ? H.formatToParts(f) : H.format(f);
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
function Is(...e) {
  const [t, n, o, r] = e, s = {};
  let i = {};
  if (!ke(t))
    throw bn(Ct.INVALID_ARGUMENT);
  const c = t;
  return j(n) ? s.key = n : ne(n) && Object.keys(n).forEach((u) => {
    Xl.includes(u) ? i[u] = n[u] : s[u] = n[u];
  }), j(o) ? s.locale = o : ne(o) && (i = o), ne(r) && (i = r), [s.key || "", c, s, i];
}
function ui(e, t, n) {
  const o = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    o.__numberFormatters.has(s) && o.__numberFormatters.delete(s);
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && ($n().__INTLIFY_PROD_DEVTOOLS__ = !1);
function Fd() {
  return ql().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ql() {
  return typeof navigator != "undefined" && typeof window != "undefined" ? window : typeof global != "undefined" ? global : {};
}
const Md = typeof Proxy == "function", xd = "devtools-plugin:setup", $d = "plugin:settings:set";
let dn, Ss;
function Ud() {
  var e;
  return dn !== void 0 || (typeof window != "undefined" && window.performance ? (dn = !0, Ss = window.performance) : typeof global != "undefined" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (dn = !0, Ss = global.perf_hooks.performance) : dn = !1), dn;
}
function jd() {
  return Ud() ? Ss.now() : Date.now();
}
class Wd {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const c = t.settings[i];
        o[i] = c.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, o);
    try {
      const i = localStorage.getItem(r), c = JSON.parse(i);
      Object.assign(s, c);
    } catch (i) {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(r, JSON.stringify(i));
        } catch (c) {
        }
        s = i;
      },
      now() {
        return jd();
      }
    }, n && n.on($d, (i, c) => {
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
function Hd(e, t) {
  const n = e, o = ql(), r = Fd(), s = Md && n.enableEarlyProxy;
  if (r && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    r.emit(xd, e, t);
  else {
    const i = s ? new Wd(n, r) : null;
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
const ns = {
  ["vue-devtools-plugin-vue-i18n"]: "Vue I18n devtools",
  ["vue-i18n-resource-inspector"]: "I18n Resources",
  ["vue-i18n-timeline"]: "Vue I18n"
}, Bd = {
  ["vue-i18n-resource-inspector"]: "Search for scopes ..."
}, Kd = {
  ["vue-i18n-timeline"]: 16764185
};
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Yd = "9.2.2";
function Gd() {
  let e = !1;
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (e = !0, $n().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (e = !0, $n().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && ($n().__INTLIFY_PROD_DEVTOOLS__ = !1), process.env.NODE_ENV !== "production" && e && console.warn("You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.");
}
let Jl = qe.__EXTEND_POINT__;
const pn = () => ++Jl, Ie = {
  FALLBACK_TO_ROOT: Jl,
  NOT_SUPPORTED_PRESERVE: pn(),
  NOT_SUPPORTED_FORMATTER: pn(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: pn(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: pn(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: pn(),
  NOT_FOUND_PARENT_SCOPE: pn()
}, zd = {
  [Ie.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Ie.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [Ie.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [Ie.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [Ie.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [Ie.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [Ie.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope."
};
function rt(e, ...t) {
  return Wo(zd[e], ...t);
}
let Ql = ee.__EXTEND_POINT__;
const Be = () => ++Ql, de = {
  UNEXPECTED_RETURN_TYPE: Ql,
  INVALID_ARGUMENT: Be(),
  MUST_BE_CALL_SETUP_TOP: Be(),
  NOT_INSLALLED: Be(),
  NOT_AVAILABLE_IN_LEGACY_MODE: Be(),
  REQUIRED_VALUE: Be(),
  INVALID_VALUE: Be(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Be(),
  NOT_INSLALLED_WITH_PROVIDE: Be(),
  UNEXPECTED_ERROR: Be(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: Be(),
  BRIDGE_SUPPORT_VUE_2_ONLY: Be(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Be(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Be(),
  __EXTEND_POINT__: Be()
};
function Oe(e, ...t) {
  return Bo(e, null, process.env.NODE_ENV !== "production" ? { messages: Xd, args: t } : void 0);
}
const Xd = {
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
}, ws = /* @__PURE__ */ Nt("__transrateVNode"), As = /* @__PURE__ */ Nt("__datetimeParts"), Ps = /* @__PURE__ */ Nt("__numberParts"), an = /* @__PURE__ */ Nt("__enableEmitter"), qn = /* @__PURE__ */ Nt("__disableEmitter"), Zl = Nt("__setPluralRules");
Nt("__intlifyMeta");
const ea = /* @__PURE__ */ Nt("__injectWithOption");
function Vs(e) {
  if (!_e(e))
    return e;
  for (const t in e)
    if (or(e, t))
      if (!t.includes("."))
        _e(e[t]) && Vs(e[t]);
      else {
        const n = t.split("."), o = n.length - 1;
        let r = e;
        for (let s = 0; s < o; s++)
          n[s] in r || (r[n[s]] = {}), r = r[n[s]];
        r[n[o]] = e[t], delete e[t], _e(r[n[o]]) && Vs(r[n[o]]);
      }
  return e;
}
function Go(e, t) {
  const { messages: n, __i18n: o, messageResolver: r, flatJson: s } = t, i = ne(n) ? n : be(o) ? {} : { [e]: {} };
  if (be(o) && o.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: u, resource: f } = c;
      u ? (i[u] = i[u] || {}, Un(f, i[u])) : Un(f, i);
    } else
      j(c) && Un(JSON.parse(c), i);
  }), r == null && s)
    for (const c in i)
      or(i, c) && Vs(i[c]);
  return i;
}
const co = (e) => !_e(e) || be(e);
function Un(e, t) {
  if (co(e) || co(t))
    throw Oe(de.INVALID_VALUE);
  for (const n in e)
    or(e, n) && (co(e[n]) || co(t[n]) ? t[n] = e[n] : Un(e[n], t[n]));
}
function ta(e) {
  return e.type;
}
function na(e, t, n) {
  let o = _e(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (o = Go(e.locale.value, {
    messages: o,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(o);
  r.length && r.forEach((s) => {
    e.mergeLocaleMessage(s, o[s]);
  });
  {
    if (_e(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (_e(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function fi(e) {
  return Fe(Cn, null, e, 0);
}
const di = "__INTLIFY_META__";
let pi = 0;
function mi(e) {
  return (t, n, o, r) => e(n, o, rn() || void 0, r);
}
const qd = () => {
  const e = rn();
  let t = null;
  return e && (t = ta(e)[di]) ? { [di]: t } : null;
};
function ar(e = {}, t) {
  const { __root: n } = e, o = n === void 0;
  let r = ce(e.inheritLocale) ? e.inheritLocale : !0;
  const s = De(
    n && r ? n.locale.value : j(e.locale) ? e.locale : no
  ), i = De(
    n && r ? n.fallbackLocale.value : j(e.fallbackLocale) || be(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s.value
  ), c = De(Go(s.value, e)), u = De(ne(e.datetimeFormats) ? e.datetimeFormats : { [s.value]: {} }), f = De(ne(e.numberFormats) ? e.numberFormats : { [s.value]: {} });
  let _ = n ? n.missingWarn : ce(e.missingWarn) || Ut(e.missingWarn) ? e.missingWarn : !0, p = n ? n.fallbackWarn : ce(e.fallbackWarn) || Ut(e.fallbackWarn) ? e.fallbackWarn : !0, m = n ? n.fallbackRoot : ce(e.fallbackRoot) ? e.fallbackRoot : !0, L = !!e.fallbackFormat, w = Ne(e.missing) ? e.missing : null, T = Ne(e.missing) ? mi(e.missing) : null, P = Ne(e.postTranslation) ? e.postTranslation : null, E = n ? n.warnHtmlMessage : ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, O = !!e.escapeParameter;
  const C = n ? n.modifiers : ne(e.modifiers) ? e.modifiers : {};
  let b = e.pluralRules || n && n.pluralRules, y;
  y = (() => {
    o && ti(null);
    const h = {
      version: Yd,
      locale: s.value,
      fallbackLocale: i.value,
      messages: c.value,
      modifiers: C,
      pluralRules: b,
      missing: T === null ? void 0 : T,
      missingWarn: _,
      fallbackWarn: p,
      fallbackFormat: L,
      unresolving: !0,
      postTranslation: P === null ? void 0 : P,
      warnHtmlMessage: E,
      escapeParameter: O,
      messageResolver: e.messageResolver,
      __meta: { framework: "vue" }
    };
    h.datetimeFormats = u.value, h.numberFormats = f.value, h.__datetimeFormatters = ne(y) ? y.__datetimeFormatters : void 0, h.__numberFormatters = ne(y) ? y.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (h.__v_emitter = ne(y) ? y.__v_emitter : void 0);
    const v = Ld(h);
    return o && ti(v), v;
  })(), An(y, s.value, i.value);
  function V() {
    return [
      s.value,
      i.value,
      c.value,
      u.value,
      f.value
    ];
  }
  const H = st({
    get: () => s.value,
    set: (h) => {
      s.value = h, y.locale = s.value;
    }
  }), G = st({
    get: () => i.value,
    set: (h) => {
      i.value = h, y.fallbackLocale = i.value, An(y, s.value, h);
    }
  }), J = st(() => c.value), z = /* @__PURE__ */ st(() => u.value), Y = /* @__PURE__ */ st(() => f.value);
  function q() {
    return Ne(P) ? P : null;
  }
  function re(h) {
    P = h, y.postTranslation = h;
  }
  function W() {
    return w;
  }
  function S(h) {
    h !== null && (T = mi(h)), w = h, y.missing = T;
  }
  function x(h, v) {
    return h !== "translate" || !v.resolvedMessage;
  }
  const K = (h, v, B, X, se, pe) => {
    V();
    let fe;
    if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__)
      try {
        ei(qd()), o || (y.fallbackContext = n ? Td() : void 0), fe = h(y);
      } finally {
        ei(null), o || (y.fallbackContext = void 0);
      }
    else
      fe = h(y);
    if (ke(fe) && fe === Ko) {
      const [he, ze] = v();
      if (process.env.NODE_ENV !== "production" && n && j(he) && x(B, ze) && (m && (Yo(p, he) || Hl(_, he)) && Ye(rt(Ie.FALLBACK_TO_ROOT, {
        key: he,
        type: B
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ot } = y;
        Ot && m && Ot.emit("fallback", {
          type: B,
          key: he,
          to: "global",
          groupId: `${B}:${he}`
        });
      }
      return n && m ? X(n) : se(he);
    } else {
      if (pe(fe))
        return fe;
      throw Oe(de.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ue(...h) {
    return K((v) => Reflect.apply(ri, null, [v, ...h]), () => Cs(...h), "translate", (v) => Reflect.apply(v.t, v, [...h]), (v) => v, (v) => j(v));
  }
  function me(...h) {
    const [v, B, X] = h;
    if (X && !_e(X))
      throw Oe(de.INVALID_ARGUMENT);
    return ue(v, B, we({ resolvedMessage: !0 }, X || {}));
  }
  function Te(...h) {
    return K((v) => Reflect.apply(li, null, [v, ...h]), () => Ds(...h), "datetime format", (v) => Reflect.apply(v.d, v, [...h]), () => To, (v) => j(v));
  }
  function Ve(...h) {
    return K((v) => Reflect.apply(ci, null, [v, ...h]), () => Is(...h), "number format", (v) => Reflect.apply(v.n, v, [...h]), () => To, (v) => j(v));
  }
  function He(h) {
    return h.map((v) => j(v) || ke(v) || ce(v) ? fi(String(v)) : v);
  }
  const Ht = {
    normalize: He,
    interpolate: (h) => h,
    type: "vnode"
  };
  function Bt(...h) {
    return K(
      (v) => {
        let B;
        const X = v;
        try {
          X.processor = Ht, B = Reflect.apply(ri, null, [X, ...h]);
        } finally {
          X.processor = null;
        }
        return B;
      },
      () => Cs(...h),
      "translate",
      (v) => v[ws](...h),
      (v) => [fi(v)],
      (v) => be(v)
    );
  }
  function Me(...h) {
    return K(
      (v) => Reflect.apply(ci, null, [v, ...h]),
      () => Is(...h),
      "number format",
      (v) => v[Ps](...h),
      () => [],
      (v) => j(v) || be(v)
    );
  }
  function Ze(...h) {
    return K(
      (v) => Reflect.apply(li, null, [v, ...h]),
      () => Ds(...h),
      "datetime format",
      (v) => v[As](...h),
      () => [],
      (v) => j(v) || be(v)
    );
  }
  function at(h) {
    b = h, y.pluralRules = b;
  }
  function xe(h, v) {
    const B = j(v) ? v : s.value, X = l(B);
    return y.messageResolver(X, h) !== null;
  }
  function nt(h) {
    let v = null;
    const B = Ml(y, i.value, s.value);
    for (let X = 0; X < B.length; X++) {
      const se = c.value[B[X]] || {}, pe = y.messageResolver(se, h);
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
    c.value[h] = v, y.messages = c.value;
  }
  function d(h, v) {
    c.value[h] = c.value[h] || {}, Un(v, c.value[h]), y.messages = c.value;
  }
  function g(h) {
    return u.value[h] || {};
  }
  function N(h, v) {
    u.value[h] = v, y.datetimeFormats = u.value, ai(y, h, v);
  }
  function D(h, v) {
    u.value[h] = we(u.value[h] || {}, v), y.datetimeFormats = u.value, ai(y, h, v);
  }
  function R(h) {
    return f.value[h] || {};
  }
  function A(h, v) {
    f.value[h] = v, y.numberFormats = f.value, ui(y, h, v);
  }
  function $(h, v) {
    f.value[h] = we(f.value[h] || {}, v), y.numberFormats = f.value, ui(y, h, v);
  }
  pi++, n && bt && (yn(n.locale, (h) => {
    r && (s.value = h, y.locale = h, An(y, s.value, i.value));
  }), yn(n.fallbackLocale, (h) => {
    r && (i.value = h, y.fallbackLocale = h, An(y, s.value, i.value));
  }));
  const I = {
    id: pi,
    locale: H,
    fallbackLocale: G,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(h) {
      r = h, h && n && (s.value = n.locale.value, i.value = n.fallbackLocale.value, An(y, s.value, i.value));
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
      return _;
    },
    set missingWarn(h) {
      _ = h, y.missingWarn = _;
    },
    get fallbackWarn() {
      return p;
    },
    set fallbackWarn(h) {
      p = h, y.fallbackWarn = p;
    },
    get fallbackRoot() {
      return m;
    },
    set fallbackRoot(h) {
      m = h;
    },
    get fallbackFormat() {
      return L;
    },
    set fallbackFormat(h) {
      L = h, y.fallbackFormat = L;
    },
    get warnHtmlMessage() {
      return E;
    },
    set warnHtmlMessage(h) {
      E = h, y.warnHtmlMessage = h;
    },
    get escapeParameter() {
      return O;
    },
    set escapeParameter(h) {
      O = h, y.escapeParameter = h;
    },
    t: ue,
    getLocaleMessage: l,
    setLocaleMessage: a,
    mergeLocaleMessage: d,
    getPostTranslationHandler: q,
    setPostTranslationHandler: re,
    getMissingHandler: W,
    setMissingHandler: S,
    [Zl]: at
  };
  return I.datetimeFormats = z, I.numberFormats = Y, I.rt = me, I.te = xe, I.tm = yt, I.d = Te, I.n = Ve, I.getDateTimeFormat = g, I.setDateTimeFormat = N, I.mergeDateTimeFormat = D, I.getNumberFormat = R, I.setNumberFormat = A, I.mergeNumberFormat = $, I[ea] = e.__injectWithOption, I[ws] = Bt, I[As] = Ze, I[Ps] = Me, process.env.NODE_ENV !== "production" && (I[an] = (h) => {
    y.__v_emitter = h;
  }, I[qn] = () => {
    y.__v_emitter = void 0;
  }), I;
}
function Jd(e) {
  const t = j(e.locale) ? e.locale : no, n = j(e.fallbackLocale) || be(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, o = Ne(e.missing) ? e.missing : void 0, r = ce(e.silentTranslationWarn) || Ut(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = ce(e.silentFallbackWarn) || Ut(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, i = ce(e.fallbackRoot) ? e.fallbackRoot : !0, c = !!e.formatFallbackMessages, u = ne(e.modifiers) ? e.modifiers : {}, f = e.pluralizationRules, _ = Ne(e.postTranslation) ? e.postTranslation : void 0, p = j(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, m = !!e.escapeParameterHtml, L = ce(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && Ye(rt(Ie.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && Ye(rt(Ie.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let w = e.messages;
  if (ne(e.sharedMessages)) {
    const y = e.sharedMessages;
    w = Object.keys(y).reduce((V, H) => {
      const G = V[H] || (V[H] = {});
      return we(G, y[H]), V;
    }, w || {});
  }
  const { __i18n: T, __root: P, __injectWithOption: E } = e, O = e.datetimeFormats, C = e.numberFormats, b = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: w,
    flatJson: b,
    datetimeFormats: O,
    numberFormats: C,
    missing: o,
    missingWarn: r,
    fallbackWarn: s,
    fallbackRoot: i,
    fallbackFormat: c,
    modifiers: u,
    pluralRules: f,
    postTranslation: _,
    warnHtmlMessage: p,
    escapeParameter: m,
    messageResolver: e.messageResolver,
    inheritLocale: L,
    __i18n: T,
    __root: P,
    __injectWithOption: E
  };
}
function Rs(e = {}, t) {
  {
    const n = ar(Jd(e)), o = {
      id: n.id,
      get locale() {
        return n.locale.value;
      },
      set locale(r) {
        n.locale.value = r;
      },
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(r) {
        n.fallbackLocale.value = r;
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
        return process.env.NODE_ENV !== "production" && Ye(rt(Ie.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(r) {
        process.env.NODE_ENV !== "production" && Ye(rt(Ie.NOT_SUPPORTED_FORMATTER));
      },
      get missing() {
        return n.getMissingHandler();
      },
      set missing(r) {
        n.setMissingHandler(r);
      },
      get silentTranslationWarn() {
        return ce(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(r) {
        n.missingWarn = ce(r) ? !r : r;
      },
      get silentFallbackWarn() {
        return ce(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(r) {
        n.fallbackWarn = ce(r) ? !r : r;
      },
      get modifiers() {
        return n.modifiers;
      },
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(r) {
        n.fallbackFormat = r;
      },
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(r) {
        n.setPostTranslationHandler(r);
      },
      get sync() {
        return n.inheritLocale;
      },
      set sync(r) {
        n.inheritLocale = r;
      },
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(r) {
        n.warnHtmlMessage = r !== "off";
      },
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(r) {
        n.escapeParameter = r;
      },
      get preserveDirectiveContent() {
        return process.env.NODE_ENV !== "production" && Ye(rt(Ie.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(r) {
        process.env.NODE_ENV !== "production" && Ye(rt(Ie.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      __composer: n,
      t(...r) {
        const [s, i, c] = r, u = {};
        let f = null, _ = null;
        if (!j(s))
          throw Oe(de.INVALID_ARGUMENT);
        const p = s;
        return j(i) ? u.locale = i : be(i) ? f = i : ne(i) && (_ = i), be(c) ? f = c : ne(c) && (_ = c), Reflect.apply(n.t, n, [
          p,
          f || _ || {},
          u
        ]);
      },
      rt(...r) {
        return Reflect.apply(n.rt, n, [...r]);
      },
      tc(...r) {
        const [s, i, c] = r, u = { plural: 1 };
        let f = null, _ = null;
        if (!j(s))
          throw Oe(de.INVALID_ARGUMENT);
        const p = s;
        return j(i) ? u.locale = i : ke(i) ? u.plural = i : be(i) ? f = i : ne(i) && (_ = i), j(c) ? u.locale = c : be(c) ? f = c : ne(c) && (_ = c), Reflect.apply(n.t, n, [
          p,
          f || _ || {},
          u
        ]);
      },
      te(r, s) {
        return n.te(r, s);
      },
      tm(r) {
        return n.tm(r);
      },
      getLocaleMessage(r) {
        return n.getLocaleMessage(r);
      },
      setLocaleMessage(r, s) {
        n.setLocaleMessage(r, s);
      },
      mergeLocaleMessage(r, s) {
        n.mergeLocaleMessage(r, s);
      },
      d(...r) {
        return Reflect.apply(n.d, n, [...r]);
      },
      getDateTimeFormat(r) {
        return n.getDateTimeFormat(r);
      },
      setDateTimeFormat(r, s) {
        n.setDateTimeFormat(r, s);
      },
      mergeDateTimeFormat(r, s) {
        n.mergeDateTimeFormat(r, s);
      },
      n(...r) {
        return Reflect.apply(n.n, n, [...r]);
      },
      getNumberFormat(r) {
        return n.getNumberFormat(r);
      },
      setNumberFormat(r, s) {
        n.setNumberFormat(r, s);
      },
      mergeNumberFormat(r, s) {
        n.mergeNumberFormat(r, s);
      },
      getChoiceIndex(r, s) {
        return process.env.NODE_ENV !== "production" && Ye(rt(Ie.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      },
      __onComponentInstanceCreated(r) {
        const { componentInstanceCreatedListener: s } = e;
        s && s(r, o);
      }
    };
    return process.env.NODE_ENV !== "production" && (o.__enableEmitter = (r) => {
      const s = n;
      s[an] && s[an](r);
    }, o.__disableEmitter = () => {
      const r = n;
      r[qn] && r[qn]();
    }), o;
  }
}
const cr = {
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
function Qd({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((o, r) => o = [
    ...o,
    ...be(r.children) ? r.children : [r]
  ], []) : t.reduce((n, o) => {
    const r = e[o];
    return r && (n[o] = r()), n;
  }, {});
}
function oa(e) {
  return Le;
}
const os = {
  name: "i18n-t",
  props: we({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (e) => ke(e) || !isNaN(e)
    }
  }, cr),
  setup(e, t) {
    const { slots: n, attrs: o } = t, r = e.i18n || cn({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((p) => p !== "_"), i = {};
      e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = j(e.plural) ? +e.plural : e.plural);
      const c = Qd(t, s), u = r[ws](e.keypath, c, i), f = we({}, o), _ = j(e.tag) || _e(e.tag) ? e.tag : oa();
      return Vl(_, f, u);
    };
  }
};
function Zd(e) {
  return be(e) && !j(e[0]);
}
function sa(e, t, n, o) {
  const { slots: r, attrs: s } = t;
  return () => {
    const i = { part: !0 };
    let c = {};
    e.locale && (i.locale = e.locale), j(e.format) ? i.key = e.format : _e(e.format) && (j(e.format.key) && (i.key = e.format.key), c = Object.keys(e.format).reduce((m, L) => n.includes(L) ? we({}, m, { [L]: e.format[L] }) : m, {}));
    const u = o(e.value, i, c);
    let f = [i.key];
    be(u) ? f = u.map((m, L) => {
      const w = r[m.type], T = w ? w({ [m.type]: m.value, index: L, parts: u }) : [m.value];
      return Zd(T) && (T[0].key = `${m.type}-${L}`), T;
    }) : j(u) && (f = [u]);
    const _ = we({}, s), p = j(e.tag) || _e(e.tag) ? e.tag : oa();
    return Vl(p, _, f);
  };
}
const _i = {
  name: "i18n-n",
  props: we({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, cr),
  setup(e, t) {
    const n = e.i18n || cn({ useScope: "parent", __useComponent: !0 });
    return sa(e, t, Xl, (...o) => n[Ps](...o));
  }
}, gi = {
  name: "i18n-d",
  props: we({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, cr),
  setup(e, t) {
    const n = e.i18n || cn({ useScope: "parent", __useComponent: !0 });
    return sa(e, t, zl, (...o) => n[As](...o));
  }
};
function ep(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const o = n.__getInstance(t);
    return o != null ? o.__composer : e.global.__composer;
  }
}
function tp(e) {
  const t = (i) => {
    const { instance: c, modifiers: u, value: f } = i;
    if (!c || !c.$)
      throw Oe(de.UNEXPECTED_ERROR);
    const _ = ep(e, c.$);
    process.env.NODE_ENV !== "production" && u.preserve && Ye(rt(Ie.NOT_SUPPORTED_PRESERVE));
    const p = hi(f);
    return [
      Reflect.apply(_.t, _, [...Ei(p)]),
      _
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
        const u = i.__composer, f = hi(c);
        i.textContent = Reflect.apply(u.t, u, [
          ...Ei(f)
        ]);
      }
    },
    getSSRProps: (i) => {
      const [c] = t(i);
      return { textContent: c };
    }
  };
}
function hi(e) {
  if (j(e))
    return { path: e };
  if (ne(e)) {
    if (!("path" in e))
      throw Oe(de.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Oe(de.INVALID_VALUE);
}
function Ei(e) {
  const { path: t, locale: n, args: o, choice: r, plural: s } = e, i = {}, c = o || {};
  return j(n) && (i.locale = n), ke(r) && (i.plural = r), ke(s) && (i.plural = s), [t, c, i];
}
function np(e, t, ...n) {
  const o = ne(n[0]) ? n[0] : {}, r = !!o.useI18nComponentName, s = ce(o.globalInstall) ? o.globalInstall : !0;
  process.env.NODE_ENV !== "production" && s && r && Ye(rt(Ie.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: os.name
  })), s && (e.component(r ? "i18n" : os.name, os), e.component(_i.name, _i), e.component(gi.name, gi)), e.directive("t", tp(t));
}
const ra = "vue-i18n: composer properties";
let Fs;
function op(e, t) {
  return In(this, null, function* () {
    return new Promise((n, o) => {
      try {
        Hd({
          id: "vue-devtools-plugin-vue-i18n",
          label: ns["vue-devtools-plugin-vue-i18n"],
          packageName: "vue-i18n",
          homepage: "https://vue-i18n.intlify.dev",
          logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
          componentStateTypes: [ra],
          app: e
        }, (r) => {
          Fs = r, r.on.visitComponentTree(({ componentInstance: i, treeNode: c }) => {
            sp(i, c, t);
          }), r.on.inspectComponent(({ componentInstance: i, instanceData: c }) => {
            i.vnode.el && i.vnode.el.__VUE_I18N__ && c && (t.mode === "legacy" ? i.vnode.el.__VUE_I18N__ !== t.global.__composer && bi(c, i.vnode.el.__VUE_I18N__) : bi(c, i.vnode.el.__VUE_I18N__));
          }), r.addInspector({
            id: "vue-i18n-resource-inspector",
            label: ns["vue-i18n-resource-inspector"],
            icon: "language",
            treeFilterPlaceholder: Bd["vue-i18n-resource-inspector"]
          }), r.on.getInspectorTree((i) => {
            i.app === e && i.inspectorId === "vue-i18n-resource-inspector" && cp(i, t);
          });
          const s = /* @__PURE__ */ new Map();
          r.on.getInspectorState((i) => In(this, null, function* () {
            if (i.app === e && i.inspectorId === "vue-i18n-resource-inspector")
              if (r.unhighlightElement(), fp(i, t), i.nodeId === "global") {
                if (!s.has(i.app)) {
                  const [c] = yield r.getComponentInstances(i.app);
                  s.set(i.app, c);
                }
                r.highlightElement(s.get(i.app));
              } else {
                const c = up(i.nodeId, t);
                c && r.highlightElement(c);
              }
          })), r.on.editInspectorState((i) => {
            i.app === e && i.inspectorId === "vue-i18n-resource-inspector" && pp(i, t);
          }), r.addTimelineLayer({
            id: "vue-i18n-timeline",
            label: ns["vue-i18n-timeline"],
            color: Kd["vue-i18n-timeline"]
          }), n(!0);
        });
      } catch (r) {
        console.error(r), o(!1);
      }
    });
  });
}
function ia(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function sp(e, t, n) {
  const o = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== o) {
    const r = {
      label: `i18n (${ia(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(r);
  }
}
function bi(e, t) {
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
    value: ur(t.messages.value)
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
function ur(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    Ne(o) && "source" in o ? t[n] = ap(o) : _e(o) ? t[n] = ur(o) : t[n] = o;
  }), t;
}
const rp = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function ip(e) {
  return e.replace(/[<>"&]/g, lp);
}
function lp(e) {
  return rp[e] || e;
}
function ap(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${ip(e.source)}")` : "(?)"}`
    }
  };
}
function cp(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [o, r] of t.__instances) {
    const s = t.mode === "composition" ? r : r.__composer;
    n !== s && e.rootNodes.push({
      id: s.id.toString(),
      label: `${ia(o)} Scope`
    });
  }
}
function up(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [o, r] of t.__instances.entries())
      if (r.id.toString() === e) {
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
function fp(e, t) {
  const n = la(e.nodeId, t);
  return n && (e.state = dp(n)), null;
}
function dp(e) {
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
  const r = "Locale messages info", s = [
    {
      type: r,
      key: "messages",
      editable: !1,
      value: ur(e.messages.value)
    }
  ];
  t[r] = s;
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
function pp(e, t) {
  const n = la(e.nodeId, t);
  if (n) {
    const [o] = e.path;
    o === "locale" && j(e.state.value) ? n.locale.value = e.state.value : o === "fallbackLocale" && (j(e.state.value) || be(e.state.value) || _e(e.state.value)) ? n.fallbackLocale.value = e.state.value : o === "inheritLocale" && ce(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function mp(e, t, n) {
  return {
    beforeCreate() {
      const o = rn();
      if (!o)
        throw Oe(de.UNEXPECTED_ERROR);
      const r = this.$options;
      if (r.i18n) {
        const s = r.i18n;
        r.__i18n && (s.__i18n = r.__i18n), s.__root = t, this === this.$root ? this.$i18n = Ni(e, s) : (s.__injectWithOption = !0, this.$i18n = Rs(s));
      } else
        r.__i18n ? this === this.$root ? this.$i18n = Ni(e, r) : this.$i18n = Rs({
          __i18n: r.__i18n,
          __injectWithOption: !0,
          __root: t
        }) : this.$i18n = e;
      r.__i18nGlobal && na(t, r, r), e.__onComponentInstanceCreated(this.$i18n), n.__setInstance(o, this.$i18n), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, i) => this.$i18n.te(s, i), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        this.$el.__VUE_I18N__ = this.$i18n.__composer;
        const o = this.__v_emitter = rr(), r = this.$i18n;
        r.__enableEmitter && r.__enableEmitter(o), o.on("*", Jn);
      }
    },
    unmounted() {
      const o = rn();
      if (!o)
        throw Oe(de.UNEXPECTED_ERROR);
      if (process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", Jn), delete this.__v_emitter), this.$i18n)) {
        const r = this.$i18n;
        r.__disableEmitter && r.__disableEmitter(), delete this.$el.__VUE_I18N__;
      }
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, n.__deleteInstance(o), delete this.$i18n;
    }
  };
}
function Ni(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Zl](t.pluralizationRules || e.pluralizationRules);
  const n = Go(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((o) => e.mergeLocaleMessage(o, n[o])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((o) => e.mergeDateTimeFormat(o, t.datetimeFormats[o])), t.numberFormats && Object.keys(t.numberFormats).forEach((o) => e.mergeNumberFormat(o, t.numberFormats[o])), e;
}
const _p = /* @__PURE__ */ Nt("global-vue-i18n");
function gp(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ce(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, o = ce(e.globalInjection) ? e.globalInjection : !0, r = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [i, c] = hp(e, n), u = Nt(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  function f(m) {
    return s.get(m) || null;
  }
  function _(m, L) {
    s.set(m, L);
  }
  function p(m) {
    s.delete(m);
  }
  {
    let L;
    const m = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      get allowComposition() {
        return r;
      },
      install(w, ...T) {
        return In(this, null, function* () {
          process.env.NODE_ENV !== "production" && (w.__VUE_I18N__ = m), w.__VUE_I18N_SYMBOL__ = u, w.provide(w.__VUE_I18N_SYMBOL__, m), !n && o && kp(w, m.global), __VUE_I18N_FULL_INSTALL__ && np(w, m, ...T), __VUE_I18N_LEGACY_API__ && n && w.mixin(mp(c, c.__composer, m));
          const P = w.unmount;
          if (w.unmount = () => {
            m.dispose(), P();
          }, process.env.NODE_ENV !== "production") {
            if (!(yield op(w, m)))
              throw Oe(de.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
            const O = rr();
            if (n) {
              const C = c;
              C.__enableEmitter && C.__enableEmitter(O);
            } else {
              const C = c;
              C[an] && C[an](O);
            }
            O.on("*", Jn);
          }
        });
      },
      get global() {
        return c;
      },
      dispose() {
        i.stop();
      },
      __instances: s,
      __getInstance: f,
      __setInstance: _,
      __deleteInstance: p
    };
    return m;
  }
}
function cn(e = {}) {
  const t = rn();
  if (t == null)
    throw Oe(de.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Oe(de.NOT_INSLALLED);
  const n = Ep(t), o = Np(n), r = ta(t), s = bp(e, r);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Oe(de.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Op(t, s, o, e);
  }
  if (s === "global")
    return na(o, e, r), o;
  if (s === "parent") {
    let u = vp(n, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && Ye(rt(Ie.NOT_FOUND_PARENT_SCOPE)), u = o), u;
  }
  const i = n;
  let c = i.__getInstance(t);
  if (c == null) {
    const u = we({}, e);
    "__i18n" in r && (u.__i18n = r.__i18n), o && (u.__root = o), c = ar(u), yp(i, t, c), i.__setInstance(t, c);
  }
  return c;
}
function hp(e, t, n) {
  const o = Ta();
  {
    const r = __VUE_I18N_LEGACY_API__ && t ? o.run(() => Rs(e)) : o.run(() => ar(e));
    if (r == null)
      throw Oe(de.UNEXPECTED_ERROR);
    return [o, r];
  }
}
function Ep(e) {
  {
    const t = Fn(e.isCE ? _p : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Oe(e.isCE ? de.NOT_INSLALLED_WITH_PROVIDE : de.UNEXPECTED_ERROR);
    return t;
  }
}
function bp(e, t) {
  return Ho(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Np(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function vp(e, t, n = !1) {
  let o = null;
  const r = t.root;
  let s = t.parent;
  for (; s != null; ) {
    const i = e;
    if (e.mode === "composition")
      o = i.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const c = i.__getInstance(s);
      c != null && (o = c.__composer, n && o && !o[ea] && (o = null));
    }
    if (o != null || r === s)
      break;
    s = s.parent;
  }
  return o;
}
function yp(e, t, n) {
  let o = null;
  to(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, o = rr();
      const r = n;
      r[an] && r[an](o), o.on("*", Jn);
    }
  }, t), $o(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__) {
      o && o.off("*", Jn);
      const r = n;
      r[qn] && r[qn](), delete t.vnode.el.__VUE_I18N__;
    }
    e.__deleteInstance(t);
  }, t);
}
function Op(e, t, n, o = {}) {
  const r = t === "local", s = Za(null);
  if (r && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Oe(de.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const i = ce(o.inheritLocale) ? o.inheritLocale : !0, c = De(
    r && i ? n.locale.value : j(o.locale) ? o.locale : no
  ), u = De(
    r && i ? n.fallbackLocale.value : j(o.fallbackLocale) || be(o.fallbackLocale) || ne(o.fallbackLocale) || o.fallbackLocale === !1 ? o.fallbackLocale : c.value
  ), f = De(Go(c.value, o)), _ = De(ne(o.datetimeFormats) ? o.datetimeFormats : { [c.value]: {} }), p = De(ne(o.numberFormats) ? o.numberFormats : { [c.value]: {} }), m = r ? n.missingWarn : ce(o.missingWarn) || Ut(o.missingWarn) ? o.missingWarn : !0, L = r ? n.fallbackWarn : ce(o.fallbackWarn) || Ut(o.fallbackWarn) ? o.fallbackWarn : !0, w = r ? n.fallbackRoot : ce(o.fallbackRoot) ? o.fallbackRoot : !0, T = !!o.fallbackFormat, P = Ne(o.missing) ? o.missing : null, E = Ne(o.postTranslation) ? o.postTranslation : null, O = r ? n.warnHtmlMessage : ce(o.warnHtmlMessage) ? o.warnHtmlMessage : !0, C = !!o.escapeParameter, b = r ? n.modifiers : ne(o.modifiers) ? o.modifiers : {}, y = o.pluralRules || r && n.pluralRules;
  function M() {
    return [
      c.value,
      u.value,
      f.value,
      _.value,
      p.value
    ];
  }
  const V = st({
    get: () => s.value ? s.value.locale.value : c.value,
    set: (a) => {
      s.value && (s.value.locale.value = a), c.value = a;
    }
  }), H = st({
    get: () => s.value ? s.value.fallbackLocale.value : u.value,
    set: (a) => {
      s.value && (s.value.fallbackLocale.value = a), u.value = a;
    }
  }), G = st(() => s.value ? s.value.messages.value : f.value), J = st(() => _.value), z = st(() => p.value);
  function Y() {
    return s.value ? s.value.getPostTranslationHandler() : E;
  }
  function q(a) {
    s.value && s.value.setPostTranslationHandler(a);
  }
  function re() {
    return s.value ? s.value.getMissingHandler() : P;
  }
  function W(a) {
    s.value && s.value.setMissingHandler(a);
  }
  function S(a) {
    return M(), a();
  }
  function x(...a) {
    return s.value ? S(() => Reflect.apply(s.value.t, null, [...a])) : S(() => "");
  }
  function K(...a) {
    return s.value ? Reflect.apply(s.value.rt, null, [...a]) : "";
  }
  function ue(...a) {
    return s.value ? S(() => Reflect.apply(s.value.d, null, [...a])) : S(() => "");
  }
  function me(...a) {
    return s.value ? S(() => Reflect.apply(s.value.n, null, [...a])) : S(() => "");
  }
  function Te(a) {
    return s.value ? s.value.tm(a) : {};
  }
  function Ve(a, d) {
    return s.value ? s.value.te(a, d) : !1;
  }
  function He(a) {
    return s.value ? s.value.getLocaleMessage(a) : {};
  }
  function vt(a, d) {
    s.value && (s.value.setLocaleMessage(a, d), f.value[a] = d);
  }
  function Ht(a, d) {
    s.value && s.value.mergeLocaleMessage(a, d);
  }
  function Bt(a) {
    return s.value ? s.value.getDateTimeFormat(a) : {};
  }
  function Me(a, d) {
    s.value && (s.value.setDateTimeFormat(a, d), _.value[a] = d);
  }
  function Ze(a, d) {
    s.value && s.value.mergeDateTimeFormat(a, d);
  }
  function at(a) {
    return s.value ? s.value.getNumberFormat(a) : {};
  }
  function xe(a, d) {
    s.value && (s.value.setNumberFormat(a, d), p.value[a] = d);
  }
  function nt(a, d) {
    s.value && s.value.mergeNumberFormat(a, d);
  }
  const yt = {
    get id() {
      return s.value ? s.value.id : -1;
    },
    locale: V,
    fallbackLocale: H,
    messages: G,
    datetimeFormats: J,
    numberFormats: z,
    get inheritLocale() {
      return s.value ? s.value.inheritLocale : i;
    },
    set inheritLocale(a) {
      s.value && (s.value.inheritLocale = a);
    },
    get availableLocales() {
      return s.value ? s.value.availableLocales : Object.keys(f.value);
    },
    get modifiers() {
      return s.value ? s.value.modifiers : b;
    },
    get pluralRules() {
      return s.value ? s.value.pluralRules : y;
    },
    get isGlobal() {
      return s.value ? s.value.isGlobal : !1;
    },
    get missingWarn() {
      return s.value ? s.value.missingWarn : m;
    },
    set missingWarn(a) {
      s.value && (s.value.missingWarn = a);
    },
    get fallbackWarn() {
      return s.value ? s.value.fallbackWarn : L;
    },
    set fallbackWarn(a) {
      s.value && (s.value.missingWarn = a);
    },
    get fallbackRoot() {
      return s.value ? s.value.fallbackRoot : w;
    },
    set fallbackRoot(a) {
      s.value && (s.value.fallbackRoot = a);
    },
    get fallbackFormat() {
      return s.value ? s.value.fallbackFormat : T;
    },
    set fallbackFormat(a) {
      s.value && (s.value.fallbackFormat = a);
    },
    get warnHtmlMessage() {
      return s.value ? s.value.warnHtmlMessage : O;
    },
    set warnHtmlMessage(a) {
      s.value && (s.value.warnHtmlMessage = a);
    },
    get escapeParameter() {
      return s.value ? s.value.escapeParameter : C;
    },
    set escapeParameter(a) {
      s.value && (s.value.escapeParameter = a);
    },
    t: x,
    getPostTranslationHandler: Y,
    setPostTranslationHandler: q,
    getMissingHandler: re,
    setMissingHandler: W,
    rt: K,
    d: ue,
    n: me,
    tm: Te,
    te: Ve,
    getLocaleMessage: He,
    setLocaleMessage: vt,
    mergeLocaleMessage: Ht,
    getDateTimeFormat: Bt,
    setDateTimeFormat: Me,
    mergeDateTimeFormat: Ze,
    getNumberFormat: at,
    setNumberFormat: xe,
    mergeNumberFormat: nt
  };
  function l(a) {
    a.locale.value = c.value, a.fallbackLocale.value = u.value, Object.keys(f.value).forEach((d) => {
      a.mergeLocaleMessage(d, f.value[d]);
    }), Object.keys(_.value).forEach((d) => {
      a.mergeDateTimeFormat(d, _.value[d]);
    }), Object.keys(p.value).forEach((d) => {
      a.mergeNumberFormat(d, p.value[d]);
    }), a.escapeParameter = C, a.fallbackFormat = T, a.fallbackRoot = w, a.fallbackWarn = L, a.missingWarn = m, a.warnHtmlMessage = O;
  }
  return Js(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Oe(de.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const a = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (c.value = a.locale.value, u.value = a.fallbackLocale.value, f.value = a.messages.value, _.value = a.datetimeFormats.value, p.value = a.numberFormats.value) : r && l(a);
  }), yt;
}
const Tp = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Lp = ["t", "rt", "d", "n", "tm"];
function kp(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  Tp.forEach((o) => {
    const r = Object.getOwnPropertyDescriptor(t, o);
    if (!r)
      throw Oe(de.UNEXPECTED_ERROR);
    const s = Ce(r.value) ? {
      get() {
        return r.value.value;
      },
      set(i) {
        r.value.value = i;
      }
    } : {
      get() {
        return r.get && r.get();
      }
    };
    Object.defineProperty(n, o, s);
  }), e.config.globalProperties.$i18n = n, Lp.forEach((o) => {
    const r = Object.getOwnPropertyDescriptor(t, o);
    if (!r || !r.value)
      throw Oe(de.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${o}`, r);
  });
}
Nd(Sd);
vd(td);
yd(Ml);
Gd();
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = $n();
  e.__INTLIFY__ = !0, ud(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const vi = (e, t) => {
  const n = e[t];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((o, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
function Ms(e = "consents") {
  let t = document.cookie.indexOf(e + "=");
  if (t === -1)
    return {};
  const n = document.cookie.substring(t);
  return t = n.indexOf(";"), t > -1 ? JSON.parse(n.substring(e.length + 1, t)) : JSON.parse(n.substring(e.length + 1));
}
function Cp(e, t = 1, n = "consents", o = "Lax", r = "/", s = !0) {
  const i = new Date();
  i.setFullYear(i.getFullYear() + t), document.cookie = `${n}=${JSON.stringify(e)};expires=${i};samesite=${o};path=${r};secure=${s}`;
}
function Dp(e = "consents", t = "") {
  const n = Ms(e);
  document.cookie = `${e}=${n};expires=Thu, 01-Jan-70 00:00:01 GMT;`;
}
function Ip(e, t, n) {
  function o() {
    var c, u, f;
    const s = [];
    let i = {};
    t.storageConsentsKey in localStorage ? i = JSON.parse(localStorage.getItem(t.storageConsentsKey || "") || "{}") : t.useMetaCookie && (i = Ms(t.storageConsentsKey), Object.keys(i).length > 0 && localStorage.setItem(t.storageConsentsKey, JSON.stringify(i)));
    for (let _ = 1; t.categories != null && _ < t.categories.length; _++) {
      const p = [];
      if ("cookies" in t.categories[_]) {
        for (let w = 0; w < t.categories[_].cookies.length; w++) {
          const { cookies: T } = t.categories[_];
          T && (s.push({
            categoryId: t.categories[_].id,
            cookieId: T[w].id
          }), k(n)[_].cookies[w].accepted = (c = i[`${t.storagePrefix}-${t.categories[_].id}-${T[w].id}`]) != null ? c : !1, p.push(k(n)[_].cookies[w].accepted), k(n)[_].cookies[w].accepted && typeof ((u = T[w]) == null ? void 0 : u.onAccepted) == "function" && T[w].onAccepted(), !k(n)[_].cookies[w].accepted && typeof ((f = T[w]) == null ? void 0 : f.onDenied) == "function" && T[w].onDenied());
        }
        const m = p.includes(!0), L = p.includes(!1);
        m && !L ? k(n)[_].accepted = !0 : m && L && (k(n)[_].partial = !0);
      }
    }
    return s;
  }
  if (t.useMetaCookie) {
    const { cookies: s } = t.categories[0];
    s && s.unshift(e);
  }
  for (let s = 0; s < t.categories.length; s++) {
    const i = {
      accepted: s === 0,
      partial: !1,
      cookies: []
    }, { cookies: c } = t.categories[s];
    if (c) {
      for (let u = 0; u < c.length; u++)
        i.cookies.push({ accepted: s === 0 });
      k(n).push(i);
    }
  }
  const r = o();
  window.Consents = {
    storagePrefix: t.storagePrefix,
    storageConsentsKey: t.storageConsentsKey,
    ids: r,
    set(s, i, c) {
      const u = this.ids.find((f) => f.categoryId === s && f.cookieId === i);
      if (u) {
        const f = `${this.storagePrefix}-${s}-${i}`, _ = JSON.parse(localStorage.getItem(this.storageConsentsKey) || "{}");
        if (_[f] === void 0)
          return;
        if (f in _) {
          _[f] = c;
          const p = t.categories.find((m) => m.id === u.categoryId);
          if (p && p.cookies) {
            const m = p.cookies.find((L) => L.id === u.cookieId);
            m && c && typeof m.onAccepted == "function" && m.onAccepted(), m && !c && typeof m.onDenied == "function" && m.onDenied();
          }
        }
        if (localStorage.setItem(this.storageConsentsKey, JSON.stringify(_)), t.useMetaCookie) {
          const p = Ms(this.storageConsentsKey);
          p[`${this.storagePrefix}-${s}-${i}`] = c, Cp(p);
        }
      }
    },
    get(s, i) {
      return console.debug(Object.keys(localStorage)), JSON.parse(localStorage.getItem(this.storageConsentsKey) || "{}")[`${this.storagePrefix}-${s}-${i}`] === "true";
    },
    get hasAccepted() {
      return this.storageConsentsKey in localStorage;
    },
    clear() {
      localStorage.removeItem(this.storageConsentsKey), Dp(this.storageConsentsKey);
      for (let s = 0; s < t.categories.length; s++)
        if (t.categories[s].cookies)
          for (let i = 0; i < t.categories[s].cookies.length; i++)
            typeof t.categories[s].cookies[i].onDenied == "function" && t.categories[s].cookies[i].onDenied(), s > 0 && (k(n)[s].cookies[i].accepted = !1, k(n)[s].accepted = !1, k(n)[s].partial = !1);
    }
  };
}
function Sp(e) {
  const { t, locale: n, fallbackLocale: o } = cn(), r = cn(), s = wo([]), i = De(!0), c = De(!1), u = De(!1), f = De(!1), _ = De([]), p = De(!1), m = [
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
  ], L = De({
    id: t("metaCookieTitles.id"),
    name: t("metaCookieTitles.name"),
    provider: t("metaCookieTitles.provider"),
    purpose: t("metaCookieTitles.purpose"),
    cookieValidityPeriod: t("metaCookieTitles.cookieValidityPeriod")
  });
  e.storageConsentsKey in localStorage || (u.value = !0);
  function w(W) {
    return (W.cookies && Array.isArray(W.cookies) ? W.cookies.length : 0).toLocaleString(k(n));
  }
  function T() {
    let W, S;
    k(i) ? (W = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-width"), S = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-height")) : (W = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-details-width"), S = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-details-height")), document.documentElement.style.setProperty("--transform-current-width", W), document.documentElement.style.setProperty("--transform-current-height", S);
  }
  function P(W) {
    let S, x = window.innerHeight / 4;
    k(i) ? S = +getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-width").replace("px", "") : S = +getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-details-width").replace("px", "");
    const K = window.innerWidth / 2 - S / 2;
    x = W.offsetTop || x;
    const ue = window.innerWidth - K - 45 - S / 2, me = window.innerHeight - x - 60;
    document.documentElement.style.setProperty("--transform-minimize-x", `${ue}px`), document.documentElement.style.setProperty("--transform-minimize-y", `${me}px`);
  }
  function E(W, S) {
    s[S].partial = !1, s[S].accepted = W.target.checked;
    for (let x = 0; x < s[S].cookies.length; x++)
      s[S].cookies[x].accepted = W.target.checked;
  }
  function O(W) {
    W.preventDefault(), T(), u.value = !0, Qi(() => {
      const S = document.getElementById("overlay"), x = document.getElementById("container");
      P(x), S.classList.remove("blur-overlay"), c.value = !1, f.value = !0, x.classList.add("maximize");
    });
  }
  function C(W) {
    W.preventDefault(), T();
    const S = document.getElementById("container"), x = document.getElementById("overlay");
    x.classList.remove("blur-overlay-reverse"), S.classList.remove("transform-to-details"), S.classList.remove("transform-to-main"), S.classList.remove("maximize"), P(S), x.classList.add("blur-overlay"), S.classList.add("minimize");
    const K = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-minimize-animation-duration");
    setTimeout(() => {
      u.value = !1, c.value = !0;
    }, +K.replace("s", "") * 1e3 - 50);
  }
  function b() {
    T();
    const W = document.getElementById("container"), S = document.getElementById("overlay");
    S.classList.remove("blur-overlay-reverse"), P(W), S.classList.add("blur-overlay"), W.classList.add("hide-consent");
    const x = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-hide-duration");
    setTimeout(() => {
      u.value = !1, S.classList.remove("blur-overlay"), W.classList.remove("hide-consent");
    }, +x.replace("s", "") * 1e3 - 50);
  }
  function y(W) {
    W.preventDefault();
    const S = document.getElementById("container"), x = document.getElementById("cookie-consent-opacity-container");
    x.classList.remove("transform-opacity-to-details"), x.classList.add("transform-opacity-to-main"), S.classList.remove("transform-to-details"), S.classList.remove("maximize"), S.classList.add("transform-to-main");
    const K = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-animation-duration");
    setTimeout(() => {
      i.value = !0;
    }, +K.replace("s", "") / 2 * 1e3);
  }
  function M(W) {
    W.preventDefault();
    const S = document.getElementById("container"), x = document.getElementById("cookie-consent-opacity-container");
    x.classList.remove("transform-opacity-to-main"), x.classList.add("transform-opacity-to-details"), S.classList.remove("transform-to-main"), S.classList.remove("maximize"), S.classList.add("transform-to-details");
    const K = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-animation-duration");
    setTimeout(() => {
      i.value = !1;
    }, +K.replace("s", "") / 2 * 1e3);
  }
  function V() {
    b();
    const W = {};
    for (let S = 1; S < k(s).length; S++)
      for (let x = 0; x < k(s)[S].cookies.length; x++) {
        const K = k(s)[S].cookies[x], ue = e.categories[S].cookies[x], me = `${e.storagePrefix}-${e.categories[S].id}-${ue.id}`;
        K.accepted ? (W[me] = !0, "onAccepted" in ue && typeof ue.onAccepted == "function" && ue.onAccepted()) : (W[me] = !1, "onDenied" in ue && typeof ue.onDenied == "function" && ue.onDenied());
      }
    localStorage.setItem(e.storageConsentsKey, JSON.stringify(W)), e.useMetaCookie && H(W);
  }
  function H(W) {
    const S = new Date();
    S.setFullYear(S.getFullYear() + 1), document.cookie = `${e.storageConsentsKey}=${JSON.stringify(W)};samesite=Lax;secure=true;expires=${S}`;
  }
  function G() {
    b();
    for (const S of k(s)) {
      S.accepted = !0, S.partial = !1;
      for (const x of S.cookies)
        x.accepted = !0;
    }
    const W = {};
    for (let S = 1; S < e.categories.length; S++)
      for (let x = 0; x < e.categories[S].cookies.length; x++) {
        const K = e.categories[S].cookies[x], ue = `${e.storagePrefix}-${e.categories[S].id}-${K.id}`;
        W[ue] = !0, "onAccepted" in K && typeof K.onAccepted == "function" && K.onAccepted();
      }
    localStorage.setItem(e.storageConsentsKey, JSON.stringify(W)), e.useMetaCookie && H(W);
  }
  function J(W) {
    W.preventDefault();
    const S = W.target.parentElement;
    if (S) {
      const x = S.querySelector(".table-container");
      if (x) {
        const K = x.querySelectorAll("table"), ue = +x.style.height.replace("px", "");
        let me = 0;
        if (ue === 0) {
          K.length > 1 && (me -= 4 * (K.length - 1));
          for (const Te of K)
            me += Te.offsetHeight + 7;
          x.style.height = `${me}px`;
        } else
          x.style.height = "0";
      }
    }
  }
  function z(W, S, x) {
    const K = W.target.classList.toggle("active");
    if (!x && x !== 0) {
      if (K) {
        k(s)[S].partial = !1, k(s)[S].accepted = !0;
        for (let me = 0; me < k(s)[S].cookies.length; me++)
          k(s)[S].cookies[me].accepted = !0;
      } else {
        k(s)[S].partial = !1, k(s)[S].accepted = !1;
        for (let me = 0; me < k(s)[S].cookies.length; me++)
          k(s)[S].cookies[me].accepted = !1;
      }
      return;
    }
    const ue = k(_)[S];
    if (K) {
      const me = ue.querySelectorAll(".table-container .binary-slider");
      k(s)[S].cookies[x].accepted = !0;
      const Te = [];
      for (const Ve of me)
        Te.push(Ve.classList.contains("active"));
      Te.includes(!1) ? k(s)[S].partial = !0 : (k(s)[S].partial = !1, k(s)[S].accepted = !0);
    } else {
      const me = ue.querySelectorAll(".table-container .binary-slider"), Te = [];
      for (const Ve of me)
        Te.push(Ve.classList.contains("active"));
      k(s)[S].partial = Te.includes(!0), k(s)[S].accepted = !1, k(s)[S].cookies[x].accepted = !1;
    }
  }
  function Y(W) {
    W.preventDefault(), window.Consents.clear();
  }
  function q() {
    p.value = !p.value;
  }
  function re(W) {
    W = W.substring(0, 2), m.includes(W) ? vi(/* @__PURE__ */ Object.assign({ "../locales/ar.json": () => import("./ar-a0668e8c.mjs"), "../locales/bg.json": () => import("./bg-21b7afb8.mjs"), "../locales/cs.json": () => import("./cs-170b662e.mjs"), "../locales/da.json": () => import("./da-a20426dd.mjs"), "../locales/de.json": () => import("./de-2ebdf4bb.mjs"), "../locales/el.json": () => import("./el-b3dc7ef8.mjs"), "../locales/en.json": () => import("./en-62bf1de4.mjs"), "../locales/es.json": () => import("./es-67ab5fc3.mjs"), "../locales/et.json": () => import("./et-b858ea7d.mjs"), "../locales/fi.json": () => import("./fi-23606124.mjs"), "../locales/fr.json": () => import("./fr-77b74fc8.mjs"), "../locales/hi.json": () => import("./hi-a39364d1.mjs"), "../locales/hr.json": () => import("./hr-29c0a34d.mjs"), "../locales/hu.json": () => import("./hu-7c5bf8e3.mjs"), "../locales/hy.json": () => import("./hy-9351108f.mjs"), "../locales/it.json": () => import("./it-eaa41a88.mjs"), "../locales/lb.json": () => import("./lb-46885c47.mjs"), "../locales/lt.json": () => import("./lt-776c44b5.mjs"), "../locales/lv.json": () => import("./lv-50c21b61.mjs"), "../locales/nl.json": () => import("./nl-797d4811.mjs"), "../locales/no.json": () => import("./no-971fd50f.mjs"), "../locales/pl.json": () => import("./pl-a06c4194.mjs"), "../locales/pt.json": () => import("./pt-b93cd5f4.mjs"), "../locales/ro.json": () => import("./ro-e196b17e.mjs"), "../locales/ru.json": () => import("./ru-1af4052b.mjs"), "../locales/sk.json": () => import("./sk-58b43668.mjs"), "../locales/sl.json": () => import("./sl-92c01113.mjs"), "../locales/sq.json": () => import("./sq-52995242.mjs"), "../locales/sv.json": () => import("./sv-f002d47b.mjs"), "../locales/tr.json": () => import("./tr-61572c21.mjs"), "../locales/uk.json": () => import("./uk-92d78be5.mjs"), "../locales/zh.json": () => import("./zh-c568f745.mjs") }), `../locales/${W}.json`).then((S) => {
      r.mergeLocaleMessage(W, S.default);
    }) : m.includes(k(o).toString()) ? vi(/* @__PURE__ */ Object.assign({ "../locales/ar.json": () => import("./ar-a0668e8c.mjs"), "../locales/bg.json": () => import("./bg-21b7afb8.mjs"), "../locales/cs.json": () => import("./cs-170b662e.mjs"), "../locales/da.json": () => import("./da-a20426dd.mjs"), "../locales/de.json": () => import("./de-2ebdf4bb.mjs"), "../locales/el.json": () => import("./el-b3dc7ef8.mjs"), "../locales/en.json": () => import("./en-62bf1de4.mjs"), "../locales/es.json": () => import("./es-67ab5fc3.mjs"), "../locales/et.json": () => import("./et-b858ea7d.mjs"), "../locales/fi.json": () => import("./fi-23606124.mjs"), "../locales/fr.json": () => import("./fr-77b74fc8.mjs"), "../locales/hi.json": () => import("./hi-a39364d1.mjs"), "../locales/hr.json": () => import("./hr-29c0a34d.mjs"), "../locales/hu.json": () => import("./hu-7c5bf8e3.mjs"), "../locales/hy.json": () => import("./hy-9351108f.mjs"), "../locales/it.json": () => import("./it-eaa41a88.mjs"), "../locales/lb.json": () => import("./lb-46885c47.mjs"), "../locales/lt.json": () => import("./lt-776c44b5.mjs"), "../locales/lv.json": () => import("./lv-50c21b61.mjs"), "../locales/nl.json": () => import("./nl-797d4811.mjs"), "../locales/no.json": () => import("./no-971fd50f.mjs"), "../locales/pl.json": () => import("./pl-a06c4194.mjs"), "../locales/pt.json": () => import("./pt-b93cd5f4.mjs"), "../locales/ro.json": () => import("./ro-e196b17e.mjs"), "../locales/ru.json": () => import("./ru-1af4052b.mjs"), "../locales/sk.json": () => import("./sk-58b43668.mjs"), "../locales/sl.json": () => import("./sl-92c01113.mjs"), "../locales/sq.json": () => import("./sq-52995242.mjs"), "../locales/sv.json": () => import("./sv-f002d47b.mjs"), "../locales/tr.json": () => import("./tr-61572c21.mjs"), "../locales/uk.json": () => import("./uk-92d78be5.mjs"), "../locales/zh.json": () => import("./zh-c568f745.mjs") }), `../locales/${k(o)}.json`).then((S) => {
      r.mergeLocaleMessage(k(o).toString(), S.default);
    }) : import("./en-62bf1de4.mjs").then((S) => {
      r.mergeLocaleMessage("en", S.default);
    });
  }
  return Js(() => {
    Ip(k(L), e, s), document.documentElement.style.setProperty("--cookie-consent-animation-duration", e.animationDuration || "0.7s"), document.documentElement.style.setProperty("--cookie-consent-minimize-animation-duration", e.minimizeAnimationDuration || "1s"), document.documentElement.style.setProperty("--cookie-consent-hide-duration", e.hideDuration || "1s"), Mc(() => {
      var S;
      const W = (S = k(n)) == null ? void 0 : S.substring(0, 2);
      re(W);
    });
  }), to(() => {
  }), {
    consents: s,
    links: e.links,
    categories: e.categories,
    detailsCards: _,
    toggleInfo: q,
    toggleConsent: z,
    toggleCookieInformation: J,
    clearSite: Y,
    getCookieCountForCategory: w,
    setCategoryConsent: E,
    acceptSelection: V,
    acceptAll: G,
    minimize: C,
    maximize: O,
    showMain: y,
    showDetails: M,
    isInfoOpen: p,
    isMainContainerVisible: i,
    isMinimized: c,
    showConsent: u,
    blurOverlayReverse: f
  };
}
const lt = (e) => (kc("data-v-a6b9e6f9"), e = e(), Cc(), e), wp = { id: "cookie-consent" }, Ap = ["title"], Pp = /* @__PURE__ */ lt(() => /* @__PURE__ */ U("span", { class: "settings-icon" }, null, -1)), Vp = [
  Pp
], Rp = ["dir"], Fp = { id: "cookie-consent-opacity-container" }, Mp = { key: 0 }, xp = { class: "relative z-10" }, $p = ["title"], Up = /* @__PURE__ */ lt(() => /* @__PURE__ */ U("span", { class: "absolute arrow-up top-[-4px] left-[5px]" }, null, -1)), jp = {
  class: "text-[13px] px-2 text-left my-1 mx-0",
  style: { "line-height": "1.2" }
}, Wp = ["title"], Hp = ["title"], Bp = { class: "inline-flex h-[45px] mt-4" }, Kp = /* @__PURE__ */ lt(() => /* @__PURE__ */ U("span", { class: "select-none text-[36px]" }, "🍪", -1)), Yp = { class: "select-none font-bold mt-[10px]" }, Gp = /* @__PURE__ */ lt(() => /* @__PURE__ */ U("hr", { class: "mt-5 mb-2 mx-0 rounded-b-2xl" }, null, -1)), zp = /* @__PURE__ */ lt(() => /* @__PURE__ */ U("hr", { class: "mt-2 mb-3.5 rounded-t-2xl" }, null, -1)), Xp = { class: "categories" }, qp = { class: "relative w-[20px] h-[20px] flex checkbox-container" }, Jp = ["id", "checked", "disabled", "onChange"], Qp = {
  key: 0,
  class: "checkbox-partial-indicator"
}, Zp = {
  key: 1,
  class: "checkbox-none-indicator"
}, em = ["for"], tm = {
  id: "link-container",
  class: "bg-white rounded-t-lg sticky pb-3 -bottom-2"
}, nm = { class: "my-[6px] rounded-lg" }, om = ["href"], sm = ["href"], rm = ["href"], im = {
  key: 1,
  id: "details-container",
  class: "text-left"
}, lm = ["title"], am = /* @__PURE__ */ lt(() => /* @__PURE__ */ U("span", null, "-", -1)), cm = [
  am
], um = { class: "inline-flex h-[45px] mt-4" }, fm = /* @__PURE__ */ lt(() => /* @__PURE__ */ U("span", { class: "select-none text-[36px]" }, "🍪", -1)), dm = { class: "select-none font-bold mt-[10px]" }, pm = /* @__PURE__ */ lt(() => /* @__PURE__ */ U("hr", { class: "my-2 mx-0 rounded-b-2xl" }, null, -1)), mm = { class: "text-center" }, _m = /* @__PURE__ */ lt(() => /* @__PURE__ */ U("hr", { class: "mt-2 mb-3.5 rounded-t-2xl" }, null, -1)), gm = {
  key: 0,
  class: "rtl:right-auto rtl:left-0 inline-flex absolute right-0 top-0"
}, hm = ["id", "onClick"], Em = /* @__PURE__ */ lt(() => /* @__PURE__ */ U("span", { class: "binary-slider-circle" }, null, -1)), bm = [
  Em
], Nm = { class: "label-container pt-4" }, vm = { class: "mt-2 mb-1 ltr:before:content-[''] ltr:before:border-2 ltr:before:border-solid ltr:before:border-black ltr:before:mr-4 rtl:border-r-4 rtl:border-solid rtl:border-black rtl:text-right rtl:pr-2 font-bold" }, ym = { class: "table-container h-0 transition-all duration-700 overflow-hidden" }, Om = { key: 0 }, Tm = { class: "table-binary-slider-container" }, Lm = ["onClick"], km = /* @__PURE__ */ lt(() => /* @__PURE__ */ U("span", { class: "binary-slider-circle" }, null, -1)), Cm = [
  km
], Dm = { key: 0 }, Im = { key: 1 }, Sm = { key: 0 }, wm = { key: 1 }, Am = { key: 0 }, Pm = {
  key: 1,
  style: { "white-space": "pre-line" }
}, Vm = { key: 1 }, Rm = ["href"], Fm = { key: 2 }, Mm = { key: 0 }, xm = { key: 1 }, $m = { key: 3 }, Um = { key: 0 }, jm = { key: 1 }, Wm = { key: 4 }, Hm = { key: 0 }, Bm = { key: 1 }, Km = { key: 5 }, Ym = ["href"], Gm = /* @__PURE__ */ dl({
  __name: "CookieConsent",
  props: {
    categories: null,
    requiredLinks: null,
    links: null,
    useMetaCookie: { type: Boolean, default: !1 },
    animationDuration: { default: "1.5s" },
    minimizeAnimationDuration: { default: "1s" },
    hideDuration: { default: "1s" },
    storagePrefix: { default: "consent" },
    storageConsentsKey: { default: "consents" },
    maskContent: { type: Boolean, default: !0 },
    maskColor: { default: "#47494E" }
  },
  setup(e) {
    const t = e;
    cf((J) => ({
      e044512a: k(r)
    }));
    const { t: n, locale: o } = cn({}), r = t.maskContent ? t.maskColor : "transparent", {
      consents: s,
      detailsCards: i,
      toggleConsent: c,
      toggleInfo: u,
      toggleCookieInformation: f,
      getCookieCountForCategory: _,
      setCategoryConsent: p,
      categories: m,
      acceptAll: L,
      acceptSelection: w,
      minimize: T,
      maximize: P,
      showMain: E,
      links: O,
      showDetails: C,
      clearSite: b,
      isInfoOpen: y,
      isMainContainerVisible: M,
      isMinimized: V,
      showConsent: H,
      blurOverlayReverse: G
    } = Sp(t);
    return (J, z) => (ie(), le("div", wp, [
      U("div", {
        class: "settings-icon-container",
        title: k(n)("generalLabels.title"),
        onClick: z[0] || (z[0] = (Y) => k(P)(Y))
      }, Vp, 8, Ap),
      k(H) ? (ie(), le("div", {
        key: 0,
        id: "overlay",
        class: Xe(["w-full h-full fixed top-0 left-0", { hidden: k(V), "blur-overlay-reverse": k(G) }])
      }, [
        U("div", {
          id: "container",
          dir: k(o) === "ar" ? "rtl" : "ltr",
          class: "rounded py-2 px-4 text-center bg-white relative w-[var(--cookie-consent-width)] h-[var(--cookie-consent-height)] overflow-x-hidden overflow-y-auto mx-auto my-[8vh] sm:my-[25vh]"
        }, [
          U("div", Fp, [
            k(M) ? (ie(), le("div", Mp, [
              U("header", null, [
                U("div", xp, [
                  U("span", {
                    class: "cookie-consent-info font-bold",
                    title: k(n)("generalLabels.info.title"),
                    onClick: z[1] || (z[1] = (Y) => k(u)(k(y)))
                  }, "i", 8, $p),
                  U("div", {
                    class: Xe(["rounded w-full h-max bg-blue-200 absolute top-[26px] left-0", { "cookie-consent-info-hide": !k(y) }])
                  }, [
                    Up,
                    U("p", jp, Z(k(n)("generalLabels.info.text")), 1)
                  ], 2)
                ]),
                U("a", {
                  rel: "nofollow",
                  href: "#",
                  class: "minimizer",
                  title: k(n)("generalLabels.minimize"),
                  onClick: z[2] || (z[2] = (Y) => k(T)(Y))
                }, null, 8, Wp),
                U("a", {
                  rel: "nofollow",
                  href: "#",
                  class: "clear-site",
                  title: k(n)("generalLabels.clearSite"),
                  onClick: z[3] || (z[3] = (Y) => k(b)(Y))
                }, null, 8, Hp),
                U("div", Bp, [
                  Kp,
                  U("h4", Yp, Z(k(n)("generalLabels.title")), 1)
                ]),
                Gp,
                U("p", null, Z(k(n)("generalLabels.description.main")), 1),
                zp
              ]),
              U("div", Xp, [
                (ie(!0), le(Le, null, _n(k(m), (Y, q) => (ie(), le("div", {
                  key: Y.id,
                  class: Xe(["relative inline-flex", { "ml-4": q > 0 }])
                }, [
                  U("div", qp, [
                    U("input", {
                      id: `cookie-consent-checkbox-${Y.id}`,
                      type: "checkbox",
                      checked: k(s)[q].accepted,
                      disabled: q === 0,
                      class: "m-0",
                      onChange: (re) => k(p)(re, q)
                    }, null, 40, Jp),
                    q > 0 && k(s)[q].partial ? (ie(), le("span", Qp)) : ut("", !0),
                    q > 0 && !k(s)[q].partial && !k(s)[q].accepted ? (ie(), le("span", Zp)) : ut("", !0)
                  ]),
                  U("label", {
                    for: `cookie-consent-checkbox-${Y.id}`,
                    class: "ml-2 rtl:mr-2 select-none hover:text-orange-400"
                  }, Z(Y.label), 9, em)
                ], 2))), 128)),
                U("div", null, [
                  U("button", {
                    class: "btn",
                    onClick: z[4] || (z[4] = (Y) => k(L)(k(s)))
                  }, Z(k(n)("generalLabels.button.acceptAll")), 1),
                  U("button", {
                    class: "btn",
                    onClick: z[5] || (z[5] = (Y) => k(w)(k(s)))
                  }, Z(k(n)("generalLabels.button.acceptSelection")), 1)
                ])
              ]),
              U("div", tm, [
                U("div", nm, [
                  U("a", {
                    rel: "nofollow",
                    href: "#",
                    class: "font-bold shadow-green-700 hover:shadow-[0_0_10px_green] text-[var(--cookie-consent-settings-color)] w-full h-full p-0.5 block",
                    onClick: z[6] || (z[6] = (Y) => k(C)(Y))
                  }, Z(k(n)("generalLabels.individualSettings")), 1)
                ]),
                U("a", {
                  class: "hover:text-orange-400",
                  rel: "nofollow",
                  href: "#",
                  onClick: z[7] || (z[7] = (Y) => k(C)(Y))
                }, [
                  U("b", null, Z(k(n)("generalLabels.cookieDetails")), 1)
                ]),
                U("a", {
                  rel: "nofollow",
                  href: k(n)("generalLabels.requiredLinks.privacy.href")
                }, [
                  U("b", null, Z(k(n)("generalLabels.requiredLinks.privacy.title")), 1)
                ], 8, om),
                U("a", {
                  rel: "nofollow",
                  href: k(n)("generalLabels.requiredLinks.impress.href")
                }, [
                  U("b", null, Z(k(n)("generalLabels.requiredLinks.impress.title")), 1)
                ], 8, sm),
                (ie(!0), le(Le, null, _n(k(O), (Y) => (ie(), le("a", {
                  key: Y.title,
                  rel: "nofollow",
                  href: Y.href
                }, [
                  U("b", null, Z(Y.title), 1)
                ], 8, rm))), 128))
              ])
            ])) : (ie(), le("div", im, [
              U("header", null, [
                U("a", {
                  rel: "nofollow",
                  href: "#",
                  class: "absolute top-[6px] right-10 font-bold",
                  onClick: z[8] || (z[8] = (Y) => k(E)(Y))
                }, Z(k(n)("generalLabels.details.back")), 1),
                U("a", {
                  rel: "nofollow",
                  href: "#",
                  class: "minimizer",
                  title: k(n)("generalLabels.minimize"),
                  onClick: z[9] || (z[9] = (Y) => k(T)(Y))
                }, cm, 8, lm),
                U("div", um, [
                  fm,
                  U("h4", dm, Z(k(n)("generalLabels.title")), 1)
                ]),
                pm,
                U("p", mm, Z(k(n)("generalLabels.description.details")), 1),
                _m,
                U("div", null, [
                  U("button", {
                    onClick: z[10] || (z[10] = (Y) => k(L)())
                  }, Z(k(n)("generalLabels.button.acceptAll")), 1),
                  U("button", {
                    onClick: z[11] || (z[11] = (Y) => k(w)())
                  }, Z(k(n)("generalLabels.button.acceptSelection")), 1)
                ])
              ]),
              (ie(!0), le(Le, null, _n(k(m), (Y, q) => (ie(), le("div", {
                key: Y.id,
                ref_for: !0,
                ref: (re) => {
                  k(i)[q] = re;
                },
                class: "cookie-details-card w-full rounded relative px-3 my-4 mx-2"
              }, [
                q > 0 ? (ie(), le("div", gm, [
                  U("span", {
                    class: Xe(["select-none mt-[12px] rtl:mt-[6px]", { hidden: !k(s)[q].accepted }])
                  }, Z(k(n)("generalLabels.binarySliderLabels.accepted")), 3),
                  U("span", {
                    class: Xe(["select-none mt-[12px] rtl:mt-[6px]", { hidden: k(s)[q].accepted || k(s)[q].partial }])
                  }, Z(k(n)("generalLabels.binarySliderLabels.declined")), 3),
                  U("span", {
                    class: Xe(["select-none mt-[12px] rtl:mt-[6px]", { hidden: !k(s)[q].partial }])
                  }, Z(k(n)("generalLabels.binarySliderLabels.partial")), 3),
                  U("div", null, [
                    U("div", {
                      id: `cookie-consent-details-checkbox-${Y.id}`,
                      class: Xe(["binary-slider m-[8px]", { active: k(s)[q].accepted, partial: k(s)[q].partial }]),
                      onClick: (re) => k(c)(re, q)
                    }, bm, 10, hm)
                  ])
                ])) : ut("", !0),
                U("div", Nm, [
                  U("h5", vm, Z(Y.label) + " (" + Z(k(_)(Y)) + ") ", 1)
                ]),
                U("p", null, Z(Y.description), 1),
                U("a", {
                  rel: "nofollow",
                  href: "#",
                  class: "text-center block font-bold",
                  onClick: z[12] || (z[12] = (re) => k(f)(re))
                }, Z(k(n)("generalLabels.showCookieInformation")), 1),
                U("div", ym, [
                  (ie(!0), le(Le, null, _n(Y.cookies, (re, W) => (ie(), le("table", {
                    key: re.cookieName
                  }, [
                    q > 0 ? (ie(), le("tr", Om, [
                      U("td", null, Z(k(n)("cookieLabels.accept")), 1),
                      U("td", null, [
                        U("div", Tm, [
                          U("div", {
                            class: Xe(["binary-slider", { active: k(s)[q].cookies[W].accepted }]),
                            onClick: (S) => k(c)(S, q, W)
                          }, Cm, 10, Lm),
                          U("div", {
                            class: Xe(["select-none mt-0 ml-2 rtl:mr-2 rtl:-mt-[8px]", { "!hidden": !k(s)[q].cookies[W].accepted }])
                          }, Z(k(n)("generalLabels.binarySliderLabels.accepted")), 3),
                          U("div", {
                            class: Xe(["select-none mt-0 ml-2 rtl:mr-2 rtl:-mt-[8px]", { "!hidden": k(s)[q].cookies[W].accepted }])
                          }, Z(k(n)("generalLabels.binarySliderLabels.declined")), 3)
                        ])
                      ])
                    ])) : ut("", !0),
                    U("tr", null, [
                      U("td", null, Z(k(n)("cookieLabels.name")), 1),
                      q === 0 && W === 0 && e.useMetaCookie ? (ie(), le("td", Dm, Z(k(n)("metaCookieTitles.name")), 1)) : (ie(), le("td", Im, Z(re.name), 1))
                    ]),
                    U("tr", null, [
                      U("td", null, Z(k(n)("cookieLabels.provider")), 1),
                      q === 0 && W === 0 && e.useMetaCookie ? (ie(), le("td", Sm, Z(k(n)("metaCookieTitles.provider")), 1)) : (ie(), le("td", wm, Z(re.provider), 1))
                    ]),
                    U("tr", null, [
                      U("td", null, Z(k(n)("cookieLabels.purpose")), 1),
                      q === 0 && W === 0 && e.useMetaCookie ? (ie(), le("td", Am, Z(k(n)("metaCookieTitles.purpose")), 1)) : (ie(), le("td", Pm, Z(re.purpose), 1))
                    ]),
                    "privacyURL" in re ? (ie(), le("tr", Vm, [
                      U("td", null, Z(k(n)("cookieLabels.privacy")), 1),
                      U("td", null, [
                        U("a", {
                          rel: "nofollow",
                          href: re.privacyURL
                        }, Z(re.privacyURL), 9, Rm)
                      ])
                    ])) : ut("", !0),
                    "hosts" in re ? (ie(), le("tr", Fm, [
                      U("td", null, Z(k(n)("cookieLabels.hosts")), 1),
                      q === 0 && W === 0 && e.useMetaCookie ? (ie(), le("td", Mm, Z(k(n)("metaCookieTitles.hosts")), 1)) : (ie(), le("td", xm, Z(re.hosts), 1))
                    ])) : ut("", !0),
                    "cookieName" in re ? (ie(), le("tr", $m, [
                      U("td", null, Z(k(n)("cookieLabels.cookieName")), 1),
                      q === 0 && W === 0 && e.useMetaCookie ? (ie(), le("td", Um, " consents ")) : (ie(), le("td", jm, [
                        U("i", null, Z(re.cookieName), 1)
                      ]))
                    ])) : ut("", !0),
                    "cookieValidityPeriod" in re ? (ie(), le("tr", Wm, [
                      U("td", null, Z(k(n)("cookieLabels.cookieValidityPeriod")), 1),
                      q === 0 && W === 0 && e.useMetaCookie ? (ie(), le("td", Hm, Z(k(n)("metaCookieTitles.cookieValidityPeriod")), 1)) : (ie(), le("td", Bm, Z(re.cookieValidityPeriod), 1))
                    ])) : ut("", !0),
                    "links" in re && re.links && re.links.length > 0 ? (ie(), le("tr", Km, [
                      U("td", null, Z(k(n)("cookieLabels.links")), 1),
                      U("td", null, [
                        (ie(!0), le(Le, null, _n(re.links, (S) => (ie(), le("a", {
                          key: S.title,
                          rel: "nofollow",
                          href: S.href,
                          target: "_blank"
                        }, Z(S.title || S.href), 9, Ym))), 128))
                      ])
                    ])) : ut("", !0)
                  ]))), 128))
                ])
              ]))), 128))
            ]))
          ])
        ], 8, Rp)
      ], 2)) : ut("", !0)
    ]));
  }
});
const aa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, zm = /* @__PURE__ */ aa(Gm, [["__scopeId", "data-v-a6b9e6f9"]]);
const Xm = { class: "language-indicator-container" }, qm = ["onClick", "title"], Jm = ["innerHTML"], Qm = {
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
    function o(r = "en", s = !1) {
      console.log(s), s && (Consents.clear(), location.reload()), t.value = r;
    }
    return (r, s) => (ie(), le("div", Xm, [
      (ie(), le(Le, null, _n(n, (i, c) => U("span", {
        key: i.locale,
        class: "language-indicator",
        onClick: (u) => o(i.locale, c === n.length - 1),
        title: i.title
      }, [
        U("span", {
          innerHTML: i.flag
        }, null, 8, Jm)
      ], 8, qm)), 64))
    ]));
  }
}, Zm = /* @__PURE__ */ aa(Qm, [["__scopeId", "data-v-63cbd5aa"]]), e_ = { style: { position: "relative", "z-index": "1" } }, t_ = /* @__PURE__ */ dl({
  __name: "App",
  setup(e) {
    De("en");
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
    return (n, o) => (ie(), le("div", e_, [
      Fe(Zm, { style: { position: "absolute", "z-index": "2" } }),
      Fe(zm, {
        ref: "cookie-consent",
        "use-meta-cookie": !0,
        "required-links": t.requiredLinks,
        categories: t.categories,
        style: { position: "absolute", "z-index": "1" }
      }, null, 8, ["required-links", "categories"])
    ]));
  }
});
const n_ = pf(t_), o_ = gp({
  legacy: !1,
  locale: "de",
  fallbackLocale: "en"
});
n_.use(o_).mount("#app");
