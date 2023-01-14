const p$1 = function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(script) {
        const fetchOpts = {};
        if (script.integrity)
            fetchOpts.integrity = script.integrity;
        if (script.referrerpolicy)
            fetchOpts.referrerPolicy = script.referrerpolicy;
        if (script.crossorigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (script.crossorigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
};true&&p$1();

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */
function includeBooleanAttr(value) {
    return !!value || value === '';
}

function normalizeStyle(value) {
    if (isArray$1(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = isString$1(item)
                ? parseStringStyle(item)
                : normalizeStyle(item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isString$1(value)) {
        return value;
    }
    else if (isObject$1(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString$1(value)) {
        res = value;
    }
    else if (isArray$1(value)) {
        for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
                res += normalized + ' ';
            }
        }
    }
    else if (isObject$1(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString$1 = (val) => {
    return isString$1(val)
        ? val
        : val == null
            ? ''
            : isArray$1(val) ||
                (isObject$1(val) &&
                    (val.toString === objectToString$1 || !isFunction$1(val.toString)))
                ? JSON.stringify(val, replacer, 2)
                : String(val);
};
const replacer = (_key, val) => {
    // can't use isRef here since @vue/shared has no deps
    if (val && val.__v_isRef) {
        return replacer(_key, val.value);
    }
    else if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject$1(val) && !isArray$1(val) && !isPlainObject$1(val)) {
        return String(val);
    }
    return val;
};

const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$1.call(val, key);
const isArray$1 = Array.isArray;
const isMap = (val) => toTypeString$1(val) === '[object Map]';
const isSet = (val) => toTypeString$1(val) === '[object Set]';
const isFunction$1 = (val) => typeof val === 'function';
const isString$1 = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject$1 = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject$1(val) && isFunction$1(val.then) && isFunction$1(val.catch);
};
const objectToString$1 = Object.prototype.toString;
const toTypeString$1 = (value) => objectToString$1.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString$1(value).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString$1(val) === '[object Object]';
const isIntegerKey = (key) => isString$1(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize$1 = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize$1(str)}` : ``);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis$1;
const getGlobalThis$1 = () => {
    return (_globalThis$1 ||
        (_globalThis$1 =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof global !== 'undefined'
                            ? global
                            : {}));
};

let activeEffectScope;
class EffectScope {
    constructor(detached = false) {
        /**
         * @internal
         */
        this.active = true;
        /**
         * @internal
         */
        this.effects = [];
        /**
         * @internal
         */
        this.cleanups = [];
        if (!detached && activeEffectScope) {
            this.parent = activeEffectScope;
            this.index =
                (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    run(fn) {
        if (this.active) {
            const currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            }
            finally {
                activeEffectScope = currentEffectScope;
            }
        }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
        activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this.active) {
            let i, l;
            for (i = 0, l = this.effects.length; i < l; i++) {
                this.effects[i].stop();
            }
            for (i = 0, l = this.cleanups.length; i < l; i++) {
                this.cleanups[i]();
            }
            if (this.scopes) {
                for (i = 0, l = this.scopes.length; i < l; i++) {
                    this.scopes[i].stop(true);
                }
            }
            // nested scope, dereference from parent to avoid memory leaks
            if (this.parent && !fromParent) {
                // optimized O(1) removal
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.active = false;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) {
        scope.effects.push(effect);
    }
}

const createDep = (effects) => {
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].w |= trackOpBit; // set was tracked
        }
    }
};
const finalizeDepMarkers = (effect) => {
    const { deps } = effect;
    if (deps.length) {
        let ptr = 0;
        for (let i = 0; i < deps.length; i++) {
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) {
                dep.delete(effect);
            }
            else {
                deps[ptr++] = dep;
            }
            // clear bits
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
        }
        deps.length = ptr;
    }
};

const targetMap = new WeakMap();
// The number of effects currently being tracked recursively.
let effectTrackDepth = 0;
let trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol('');
const MAP_KEY_ITERATE_KEY = Symbol('');
class ReactiveEffect {
    constructor(fn, scheduler = null, scope) {
        this.fn = fn;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        this.parent = undefined;
        recordEffectScope(this, scope);
    }
    run() {
        if (!this.active) {
            return this.fn();
        }
        let parent = activeEffect;
        let lastShouldTrack = shouldTrack;
        while (parent) {
            if (parent === this) {
                return;
            }
            parent = parent.parent;
        }
        try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) {
                initDepMarkers(this);
            }
            else {
                cleanupEffect(this);
            }
            return this.fn();
        }
        finally {
            if (effectTrackDepth <= maxMarkerBits) {
                finalizeDepMarkers(this);
            }
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = undefined;
            if (this.deferStop) {
                this.stop();
            }
        }
    }
    stop() {
        // stopped while running itself - defer the cleanup
        if (activeEffect === this) {
            this.deferStop = true;
        }
        else if (this.active) {
            cleanupEffect(this);
            if (this.onStop) {
                this.onStop();
            }
            this.active = false;
        }
    }
}
function cleanupEffect(effect) {
    const { deps } = effect;
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect);
        }
        deps.length = 0;
    }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) {
            targetMap.set(target, (depsMap = new Map()));
        }
        let dep = depsMap.get(key);
        if (!dep) {
            depsMap.set(key, (dep = createDep()));
        }
        trackEffects(dep);
    }
}
function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack = false;
    if (effectTrackDepth <= maxMarkerBits) {
        if (!newTracked(dep)) {
            dep.n |= trackOpBit; // set newly tracked
            shouldTrack = !wasTracked(dep);
        }
    }
    else {
        // Full cleanup mode.
        shouldTrack = !dep.has(activeEffect);
    }
    if (shouldTrack) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        // never been tracked
        return;
    }
    let deps = [];
    if (type === "clear" /* TriggerOpTypes.CLEAR */) {
        // collection being cleared
        // trigger all effects for target
        deps = [...depsMap.values()];
    }
    else if (key === 'length' && isArray$1(target)) {
        depsMap.forEach((dep, key) => {
            if (key === 'length' || key >= newValue) {
                deps.push(dep);
            }
        });
    }
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) {
            deps.push(depsMap.get(key));
        }
        // also run for iteration key on ADD | DELETE | Map.SET
        switch (type) {
            case "add" /* TriggerOpTypes.ADD */:
                if (!isArray$1(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) {
                        deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                else if (isIntegerKey(key)) {
                    // new index added to array -> length changes
                    deps.push(depsMap.get('length'));
                }
                break;
            case "delete" /* TriggerOpTypes.DELETE */:
                if (!isArray$1(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) {
                        deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                break;
            case "set" /* TriggerOpTypes.SET */:
                if (isMap(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                }
                break;
        }
    }
    if (deps.length === 1) {
        if (deps[0]) {
            {
                triggerEffects(deps[0]);
            }
        }
    }
    else {
        const effects = [];
        for (const dep of deps) {
            if (dep) {
                effects.push(...dep);
            }
        }
        {
            triggerEffects(createDep(effects));
        }
    }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
    // spread into array for stabilization
    const effects = isArray$1(dep) ? dep : [...dep];
    for (const effect of effects) {
        if (effect.computed) {
            triggerEffect(effect);
        }
    }
    for (const effect of effects) {
        if (!effect.computed) {
            triggerEffect(effect);
        }
    }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
    if (effect !== activeEffect || effect.allowRecurse) {
        if (effect.scheduler) {
            effect.scheduler();
        }
        else {
            effect.run();
        }
    }
}

const isNonTrackableKeys = /*#__PURE__*/ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
/*#__PURE__*/
Object.getOwnPropertyNames(Symbol)
    // ios10.x Object.getOwnPropertyNames(Symbol) can enumerate 'arguments' and 'caller'
    // but accessing them on Symbol leads to TypeError because Symbol is a strict mode
    // function
    .filter(key => key !== 'arguments' && key !== 'caller')
    .map(key => Symbol[key])
    .filter(isSymbol));
const get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    ['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
        instrumentations[key] = function (...args) {
            const arr = toRaw(this);
            for (let i = 0, l = this.length; i < l; i++) {
                track(arr, "get" /* TrackOpTypes.GET */, i + '');
            }
            // we run the method using the original args first (which may be reactive)
            const res = arr[key](...args);
            if (res === -1 || res === false) {
                // if that didn't work, run it again using raw values.
                return arr[key](...args.map(toRaw));
            }
            else {
                return res;
            }
        };
    });
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
        instrumentations[key] = function (...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* ReactiveFlags.IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* ReactiveFlags.IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */) {
            return shallow;
        }
        else if (key === "__v_raw" /* ReactiveFlags.RAW */ &&
            receiver ===
                (isReadonly
                    ? shallow
                        ? shallowReadonlyMap
                        : readonlyMap
                    : shallow
                        ? shallowReactiveMap
                        : reactiveMap).get(target)) {
            return target;
        }
        const targetIsArray = isArray$1(target);
        if (!isReadonly && targetIsArray && hasOwn$1(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
            return res;
        }
        if (!isReadonly) {
            track(target, "get" /* TrackOpTypes.GET */, key);
        }
        if (shallow) {
            return res;
        }
        if (isRef(res)) {
            // ref unwrapping - skip unwrap for Array + integer key.
            return targetIsArray && isIntegerKey(key) ? res : res.value;
        }
        if (isObject$1(res)) {
            // Convert returned value into a proxy as well. we do the isObject check
            // here to avoid invalid value warning. Also need to lazy access readonly
            // and reactive here to avoid circular dependency.
            return isReadonly ? readonly(res) : reactive(res);
        }
        return res;
    };
}
const set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        let oldValue = target[key];
        if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
            return false;
        }
        if (!shallow) {
            if (!isShallow(value) && !isReadonly(value)) {
                oldValue = toRaw(oldValue);
                value = toRaw(value);
            }
            if (!isArray$1(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = isArray$1(target) && isIntegerKey(key)
            ? Number(key) < target.length
            : hasOwn$1(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) {
                trigger(target, "add" /* TriggerOpTypes.ADD */, key, value);
            }
            else if (hasChanged(value, oldValue)) {
                trigger(target, "set" /* TriggerOpTypes.SET */, key, value);
            }
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = hasOwn$1(target, key);
    target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
        trigger(target, "delete" /* TriggerOpTypes.DELETE */, key, undefined);
    }
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has" /* TrackOpTypes.HAS */, key);
    }
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* TrackOpTypes.ITERATE */, isArray$1(target) ? 'length' : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
        return true;
    },
    deleteProperty(target, key) {
        return true;
    }
};
const shallowReactiveHandlers = /*#__PURE__*/ extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});

const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* ReactiveFlags.RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if (key !== rawKey) {
            track(rawTarget, "get" /* TrackOpTypes.GET */, key);
        }
        track(rawTarget, "get" /* TrackOpTypes.GET */, rawKey);
    }
    const { has } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
    }
    else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
    }
    else if (target !== rawTarget) {
        // #3602 readonly(reactive(Map))
        // ensure that the nested reactive `Map` can do tracking for itself
        target.get(key);
    }
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw" /* ReactiveFlags.RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if (key !== rawKey) {
            track(rawTarget, "has" /* TrackOpTypes.HAS */, key);
        }
        track(rawTarget, "has" /* TrackOpTypes.HAS */, rawKey);
    }
    return key === rawKey
        ? target.has(key)
        : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* ReactiveFlags.RAW */];
    !isReadonly && track(toRaw(target), "iterate" /* TrackOpTypes.ITERATE */, ITERATE_KEY);
    return Reflect.get(target, 'size', target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add" /* TriggerOpTypes.ADD */, value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    const oldValue = get.call(target, key);
    target.set(key, value);
    if (!hadKey) {
        trigger(target, "add" /* TriggerOpTypes.ADD */, key, value);
    }
    else if (hasChanged(value, oldValue)) {
        trigger(target, "set" /* TriggerOpTypes.SET */, key, value);
    }
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) {
        trigger(target, "delete" /* TriggerOpTypes.DELETE */, key, undefined);
    }
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) {
        trigger(target, "clear" /* TriggerOpTypes.CLEAR */, undefined, undefined);
    }
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* ReactiveFlags.RAW */];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* TrackOpTypes.ITERATE */, ITERATE_KEY);
        return target.forEach((value, key) => {
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function (...args) {
        const target = this["__v_raw" /* ReactiveFlags.RAW */];
        const rawTarget = toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair = method === 'entries' || (method === Symbol.iterator && targetIsMap);
        const isKeyOnly = method === 'keys' && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly &&
            track(rawTarget, "iterate" /* TrackOpTypes.ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next() {
                const { value, done } = innerIterator.next();
                return done
                    ? { value, done }
                    : {
                        value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                        done
                    };
            },
            // iterable protocol
            [Symbol.iterator]() {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function (...args) {
        return type === "delete" /* TriggerOpTypes.DELETE */ ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations = {
        get(key) {
            return get$1(this, key);
        },
        get size() {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations = {
        get(key) {
            return get$1(this, key, false, true);
        },
        get size() {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations = {
        get(key) {
            return get$1(this, key, true);
        },
        get size() {
            return size(this, true);
        },
        has(key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* TriggerOpTypes.ADD */),
        set: createReadonlyMethod("set" /* TriggerOpTypes.SET */),
        delete: createReadonlyMethod("delete" /* TriggerOpTypes.DELETE */),
        clear: createReadonlyMethod("clear" /* TriggerOpTypes.CLEAR */),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations = {
        get(key) {
            return get$1(this, key, true, true);
        },
        get size() {
            return size(this, true);
        },
        has(key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* TriggerOpTypes.ADD */),
        set: createReadonlyMethod("set" /* TriggerOpTypes.SET */),
        delete: createReadonlyMethod("delete" /* TriggerOpTypes.DELETE */),
        clear: createReadonlyMethod("clear" /* TriggerOpTypes.CLEAR */),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
    iteratorMethods.forEach(method => {
        mutableInstrumentations[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations[method] = createIterableMethod(method, true, false);
        shallowInstrumentations[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations,
        readonlyInstrumentations,
        shallowInstrumentations,
        shallowReadonlyInstrumentations
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow
        ? isReadonly
            ? shallowReadonlyInstrumentations
            : shallowInstrumentations
        : isReadonly
            ? readonlyInstrumentations
            : mutableInstrumentations;
    return (target, key, receiver) => {
        if (key === "__v_isReactive" /* ReactiveFlags.IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* ReactiveFlags.IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* ReactiveFlags.RAW */) {
            return target;
        }
        return Reflect.get(hasOwn$1(instrumentations, key) && key in target
            ? instrumentations
            : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, false)
};

const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch (rawType) {
        case 'Object':
        case 'Array':
            return 1 /* TargetType.COMMON */;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2 /* TargetType.COLLECTION */;
        default:
            return 0 /* TargetType.INVALID */;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* ReactiveFlags.SKIP */] || !Object.isExtensible(value)
        ? 0 /* TargetType.INVALID */
        : targetTypeMap(toRawType(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (isReadonly(target)) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject$1(target)) {
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* ReactiveFlags.RAW */] &&
        !(isReadonly && target["__v_isReactive" /* ReactiveFlags.IS_REACTIVE */])) {
        return target;
    }
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
        return existingProxy;
    }
    // only specific value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* TargetType.INVALID */) {
        return target;
    }
    const proxy = new Proxy(target, targetType === 2 /* TargetType.COLLECTION */ ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) {
        return isReactive(value["__v_raw" /* ReactiveFlags.RAW */]);
    }
    return !!(value && value["__v_isReactive" /* ReactiveFlags.IS_REACTIVE */]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* ReactiveFlags.IS_READONLY */]);
}
function isShallow(value) {
    return !!(value && value["__v_isShallow" /* ReactiveFlags.IS_SHALLOW */]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw" /* ReactiveFlags.RAW */];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    def(value, "__v_skip" /* ReactiveFlags.SKIP */, true);
    return value;
}
const toReactive = (value) => isObject$1(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$1(value) ? readonly(value) : value;

function trackRefValue(ref) {
    if (shouldTrack && activeEffect) {
        ref = toRaw(ref);
        {
            trackEffects(ref.dep || (ref.dep = createDep()));
        }
    }
}
function triggerRefValue(ref, newVal) {
    ref = toRaw(ref);
    if (ref.dep) {
        {
            triggerEffects(ref.dep);
        }
    }
}
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value, false);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, __v_isShallow) {
        this.__v_isShallow = __v_isShallow;
        this.dep = undefined;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
        trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
        newVal = useDirectValue ? newVal : toRaw(newVal);
        if (hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = useDirectValue ? newVal : toReactive(newVal);
            triggerRefValue(this);
        }
    }
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        }
        else {
            return Reflect.set(target, key, value, receiver);
        }
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs)
        ? objectWithRefs
        : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

var _a;
class ComputedRefImpl {
    constructor(getter, _setter, isReadonly, isSSR) {
        this._setter = _setter;
        this.dep = undefined;
        this.__v_isRef = true;
        this[_a] = false;
        this._dirty = true;
        this.effect = new ReactiveEffect(getter, () => {
            if (!this._dirty) {
                this._dirty = true;
                triggerRefValue(this);
            }
        });
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly" /* ReactiveFlags.IS_READONLY */] = isReadonly;
    }
    get value() {
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        const self = toRaw(this);
        trackRefValue(self);
        if (self._dirty || !self._cacheable) {
            self._dirty = false;
            self._value = self.effect.run();
        }
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
_a = "__v_isReadonly" /* ReactiveFlags.IS_READONLY */;
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = isFunction$1(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = NOOP;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    return cRef;
}

function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    }
    catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction$1(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && isPromise(res)) {
            res.catch(err => {
                handleError(err, instance, type);
            });
        }
        return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = type;
        while (cur) {
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
                for (let i = 0; i < errorCapturedHooks.length; i++) {
                    if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                        return;
                    }
                }
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* ErrorCodes.APP_ERROR_HANDLER */, [err, exposedInstance, errorInfo]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    {
        // recover in prod to reduce the impact on end-user
        console.error(err);
    }
}

let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /*#__PURE__*/ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id) {
    // the start index should be `flushIndex + 1`
    let start = flushIndex + 1;
    let end = queue.length;
    while (start < end) {
        const middle = (start + end) >>> 1;
        const middleJobId = getId(queue[middle]);
        middleJobId < id ? (start = middle + 1) : (end = middle);
    }
    return start;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if (!queue.length ||
        !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
        if (job.id == null) {
            queue.push(job);
        }
        else {
            queue.splice(findInsertionIndex(job.id), 0, job);
        }
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) {
        queue.splice(i, 1);
    }
}
function queuePostFlushCb(cb) {
    if (!isArray$1(cb)) {
        if (!activePostFlushCbs ||
            !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
            pendingPostFlushCbs.push(cb);
        }
    }
    else {
        // if cb is an array, it is a component lifecycle hook which can only be
        // triggered by a job, which is already deduped in the main queue, so
        // we can skip duplicate check here to improve perf
        pendingPostFlushCbs.push(...cb);
    }
    queueFlush();
}
function flushPreFlushCbs(seen, 
// if currently flushing, skip the current job itself
i = isFlushing ? flushIndex + 1 : 0) {
    for (; i < queue.length; i++) {
        const cb = queue[i];
        if (cb && cb.pre) {
            queue.splice(i, 1);
            i--;
            cb();
        }
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [...new Set(pendingPostFlushCbs)];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
    const diff = getId(a) - getId(b);
    if (diff === 0) {
        if (a.pre && !b.pre)
            return -1;
        if (b.pre && !a.pre)
            return 1;
    }
    return diff;
};
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    queue.sort(comparator);
    // conditional usage of checkRecursiveUpdate must be determined out of
    // try ... catch block since Rollup by default de-optimizes treeshaking
    // inside try-catch. This can leave all warning code unshaked. Although
    // they would get eventually shaken by a minifier like terser, some minifiers
    // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
    const check = NOOP;
    try {
        for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
            const job = queue[flushIndex];
            if (job && job.active !== false) {
                if (("production" !== 'production') && check(job)) ;
                // console.log(`running:`, job.id)
                callWithErrorHandling(job, null, 14 /* ErrorCodes.SCHEDULER */);
            }
        }
    }
    finally {
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs();
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (queue.length || pendingPostFlushCbs.length) {
            flushJobs();
        }
    }
}

function emit$1(instance, event, ...rawArgs) {
    if (instance.isUnmounted)
        return;
    const props = instance.vnode.props || EMPTY_OBJ;
    let args = rawArgs;
    const isModelListener = event.startsWith('update:');
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
        const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
        if (trim) {
            args = rawArgs.map(a => a.trim());
        }
        if (number) {
            args = rawArgs.map(toNumber);
        }
    }
    let handlerName;
    let handler = props[(handlerName = toHandlerKey(event))] ||
        // also try camelCase event handler (#2249)
        props[(handlerName = toHandlerKey(camelize(event)))];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) {
        handler = props[(handlerName = toHandlerKey(hyphenate(event)))];
    }
    if (handler) {
        callWithAsyncErrorHandling(handler, instance, 6 /* ErrorCodes.COMPONENT_EVENT_HANDLER */, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) {
            instance.emitted = {};
        }
        else if (instance.emitted[handlerName]) {
            return;
        }
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* ErrorCodes.COMPONENT_EVENT_HANDLER */, args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== undefined) {
        return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    // apply mixin/extends props
    let hasExtends = false;
    if (!isFunction$1(comp)) {
        const extendEmits = (raw) => {
            const normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                extend(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
        }
        if (comp.extends) {
            extendEmits(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
        }
    }
    if (!raw && !hasExtends) {
        if (isObject$1(comp)) {
            cache.set(comp, null);
        }
        return null;
    }
    if (isArray$1(raw)) {
        raw.forEach(key => (normalized[key] = null));
    }
    else {
        extend(normalized, raw);
    }
    if (isObject$1(comp)) {
        cache.set(comp, normalized);
    }
    return normalized;
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
        return false;
    }
    key = key.slice(2).replace(/Once$/, '');
    return (hasOwn$1(options, key[0].toLowerCase() + key.slice(1)) ||
        hasOwn$1(options, hyphenate(key)) ||
        hasOwn$1(options, key));
}

/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */
let currentRenderingInstance = null;
let currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */
function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = (instance && instance.type.__scopeId) || null;
    return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */
function pushScopeId(id) {
    currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */
function popScopeId() {
    currentScopeId = null;
}
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot // false only
) {
    if (!ctx)
        return fn;
    // already normalized
    if (fn._n) {
        return fn;
    }
    const renderFnWithContext = (...args) => {
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we disable block tracking and
        // force bail out when invoking a compiled slot (indicated by the ._d flag).
        // This isn't necessary if rendering a compiled `<slot>`, so we flip the
        // ._d flag off when invoking the wrapped fn inside `renderSlot`.
        if (renderFnWithContext._d) {
            setBlockTracking(-1);
        }
        const prevInstance = setCurrentRenderingInstance(ctx);
        const res = fn(...args);
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) {
            setBlockTracking(1);
        }
        return res;
    };
    // mark normalized to avoid duplicated wrapping
    renderFnWithContext._n = true;
    // mark this as compiled by default
    // this is used in vnode.ts -> normalizeChildren() to set the slot
    // rendering flag.
    renderFnWithContext._c = true;
    // disable block tracking by default
    renderFnWithContext._d = true;
    return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    try {
        if (vnode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        }
        else {
            // functional
            const render = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (("production" !== 'production') && attrs === props) ;
            result = normalizeVNode(render.length > 1
                ? render(props, ("production" !== 'production')
                    ? {
                        get attrs() {
                            markAttrsAccessed();
                            return attrs;
                        },
                        slots,
                        emit
                    }
                    : { attrs, slots, emit })
                : render(props, null /* we know it doesn't need it */));
            fallthroughAttrs = Component.props
                ? attrs
                : getFunctionalFallthrough(attrs);
        }
    }
    catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1 /* ErrorCodes.RENDER_FUNCTION */);
        result = createVNode(Comment);
    }
    // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment
    let root = result;
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root;
        if (keys.length) {
            if (shapeFlag & (1 /* ShapeFlags.ELEMENT */ | 6 /* ShapeFlags.COMPONENT */)) {
                if (propsOptions && keys.some(isModelListener)) {
                    // If a v-model listener (onUpdate:xxx) has a corresponding declared
                    // prop, it indicates this component expects to handle v-model and
                    // it should not fallthrough.
                    // related: #1543, #1643, #1989
                    fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                }
                root = cloneVNode(root, fallthroughAttrs);
            }
        }
    }
    // inherit directives
    if (vnode.dirs) {
        // clone before mutating since the root may be a hoisted vnode
        root = cloneVNode(root);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    // inherit transition data
    if (vnode.transition) {
        root.transition = vnode.transition;
    }
    {
        result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
}
const getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
        if (key === 'class' || key === 'style' || isOn(key)) {
            (res || (res = {}))[key] = attrs[key];
        }
    }
    return res;
};
const filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
        if (!isModelListener(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
        }
    }
    return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) {
        return true;
    }
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* PatchFlags.DYNAMIC_SLOTS */) {
            // slot content that references values that might have changed,
            // e.g. in a v-for
            return true;
        }
        if (patchFlag & 16 /* PatchFlags.FULL_PROPS */) {
            if (!prevProps) {
                return !!nextProps;
            }
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        }
        else if (patchFlag & 8 /* PatchFlags.PROPS */) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i = 0; i < dynamicProps.length; i++) {
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] &&
                    !isEmitListener(emits, key)) {
                    return true;
                }
            }
        }
    }
    else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) {
                return true;
            }
        }
        if (prevProps === nextProps) {
            return false;
        }
        if (!prevProps) {
            return !!nextProps;
        }
        if (!nextProps) {
            return true;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
        return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] &&
            !isEmitListener(emitsOptions, key)) {
            return true;
        }
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el // HostNode
) {
    while (parent && parent.subTree === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}

const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if (isArray$1(fn)) {
            suspense.effects.push(...fn);
        }
        else {
            suspense.effects.push(fn);
        }
    }
    else {
        queuePostFlushCb(fn);
    }
}

function provide(key, value) {
    if (!currentInstance) ;
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
        }
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        const provides = instance.parent == null
            ? instance.vnode.appContext && instance.vnode.appContext.provides
            : instance.parent.provides;
        if (provides && key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return treatDefaultAsFactory && isFunction$1(defaultValue)
                ? defaultValue.call(instance.proxy)
                : defaultValue;
        }
        else ;
    }
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
    const instance = currentInstance;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
        getter = () => source.value;
        forceTrigger = isShallow(source);
    }
    else if (isReactive(source)) {
        getter = () => source;
        deep = true;
    }
    else if (isArray$1(source)) {
        isMultiSource = true;
        forceTrigger = source.some(s => isReactive(s) || isShallow(s));
        getter = () => source.map(s => {
            if (isRef(s)) {
                return s.value;
            }
            else if (isReactive(s)) {
                return traverse(s);
            }
            else if (isFunction$1(s)) {
                return callWithErrorHandling(s, instance, 2 /* ErrorCodes.WATCH_GETTER */);
            }
            else ;
        });
    }
    else if (isFunction$1(source)) {
        if (cb) {
            // getter with cb
            getter = () => callWithErrorHandling(source, instance, 2 /* ErrorCodes.WATCH_GETTER */);
        }
        else {
            // no cb -> simple effect
            getter = () => {
                if (instance && instance.isUnmounted) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return callWithAsyncErrorHandling(source, instance, 3 /* ErrorCodes.WATCH_CALLBACK */, [onCleanup]);
            };
        }
    }
    else {
        getter = NOOP;
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn) => {
        cleanup = effect.onStop = () => {
            callWithErrorHandling(fn, instance, 4 /* ErrorCodes.WATCH_CLEANUP */);
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager
    if (isInSSRComponentSetup) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = NOOP;
        if (!cb) {
            getter();
        }
        else if (immediate) {
            callWithAsyncErrorHandling(cb, instance, 3 /* ErrorCodes.WATCH_CALLBACK */, [
                getter(),
                isMultiSource ? [] : undefined,
                onCleanup
            ]);
        }
        return NOOP;
    }
    let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    const job = () => {
        if (!effect.active) {
            return;
        }
        if (cb) {
            // watch(source, cb)
            const newValue = effect.run();
            if (deep ||
                forceTrigger ||
                (isMultiSource
                    ? newValue.some((v, i) => hasChanged(v, oldValue[i]))
                    : hasChanged(newValue, oldValue)) ||
                (false  )) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                callWithAsyncErrorHandling(cb, instance, 3 /* ErrorCodes.WATCH_CALLBACK */, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        }
        else {
            // watchEffect
            effect.run();
        }
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === 'sync') {
        scheduler = job; // the scheduler function gets called directly
    }
    else if (flush === 'post') {
        scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    }
    else {
        // default: 'pre'
        job.pre = true;
        if (instance)
            job.id = instance.uid;
        scheduler = () => queueJob(job);
    }
    const effect = new ReactiveEffect(getter, scheduler);
    // initial run
    if (cb) {
        if (immediate) {
            job();
        }
        else {
            oldValue = effect.run();
        }
    }
    else if (flush === 'post') {
        queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    }
    else {
        effect.run();
    }
    return () => {
        effect.stop();
        if (instance && instance.scope) {
            remove(instance.scope.effects, effect);
        }
    };
}
// this.$watch
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = isString$1(source)
        ? source.includes('.')
            ? createPathGetter(publicThis, source)
            : () => publicThis[source]
        : source.bind(publicThis, publicThis);
    let cb;
    if (isFunction$1(value)) {
        cb = value;
    }
    else {
        cb = value.handler;
        options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) {
        setCurrentInstance(cur);
    }
    else {
        unsetCurrentInstance();
    }
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split('.');
    return () => {
        let cur = ctx;
        for (let i = 0; i < segments.length && cur; i++) {
            cur = cur[segments[i]];
        }
        return cur;
    };
}
function traverse(value, seen) {
    if (!isObject$1(value) || value["__v_skip" /* ReactiveFlags.SKIP */]) {
        return value;
    }
    seen = seen || new Set();
    if (seen.has(value)) {
        return value;
    }
    seen.add(value);
    if (isRef(value)) {
        traverse(value.value, seen);
    }
    else if (isArray$1(value)) {
        for (let i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if (isSet(value) || isMap(value)) {
        value.forEach((v) => {
            traverse(v, seen);
        });
    }
    else if (isPlainObject$1(value)) {
        for (const key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    onMounted(() => {
        state.isMounted = true;
    });
    onBeforeUnmount(() => {
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
                return;
            }
            let child = children[0];
            if (children.length > 1) {
                // locate first non-comment child
                for (const c of children) {
                    if (c.type !== Comment) {
                        child = c;
                        break;
                    }
                }
            }
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = toRaw(props);
            const { mode } = rawProps;
            if (state.isLeaving) {
                return emptyPlaceholder(child);
            }
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
                return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) {
                    prevTransitionKey = key;
                }
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild &&
                oldInnerChild.type !== Comment &&
                (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === 'out-in') {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = () => {
                        state.isLeaving = false;
                        instance.update();
                    };
                    return emptyPlaceholder(child);
                }
                else if (mode === 'in-out' && innerChild.type !== Comment) {
                    leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                        const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                        leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                        // early removal callback
                        el._leaveCb = () => {
                            earlyRemove();
                            el._leaveCb = undefined;
                            delete enterHooks.delayedLeave;
                        };
                        enterHooks.delayedLeave = delayedLeave;
                    };
                }
            }
            return child;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args) => {
        hook &&
            callWithAsyncErrorHandling(hook, instance, 9 /* ErrorCodes.TRANSITION_HOOK */, args);
    };
    const callAsyncHook = (hook, args) => {
        const done = args[1];
        callHook(hook, args);
        if (isArray$1(hook)) {
            if (hook.every(hook => hook.length <= 1))
                done();
        }
        else if (hook.length <= 1) {
            done();
        }
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter(el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) {
                    hook = onBeforeAppear || onBeforeEnter;
                }
                else {
                    return;
                }
            }
            // for same element (v-show)
            if (el._leaveCb) {
                el._leaveCb(true /* cancelled */);
            }
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode &&
                isSameVNodeType(vnode, leavingVNode) &&
                leavingVNode.el._leaveCb) {
                // force early removal (not cancelled)
                leavingVNode.el._leaveCb();
            }
            callHook(hook, [el]);
        },
        enter(el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                }
                else {
                    return;
                }
            }
            let called = false;
            const done = (el._enterCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                if (cancelled) {
                    callHook(cancelHook, [el]);
                }
                else {
                    callHook(afterHook, [el]);
                }
                if (hooks.delayedLeave) {
                    hooks.delayedLeave();
                }
                el._enterCb = undefined;
            });
            if (hook) {
                callAsyncHook(hook, [el, done]);
            }
            else {
                done();
            }
        },
        leave(el, remove) {
            const key = String(vnode.key);
            if (el._enterCb) {
                el._enterCb(true /* cancelled */);
            }
            if (state.isUnmounting) {
                return remove();
            }
            callHook(onBeforeLeave, [el]);
            let called = false;
            const done = (el._leaveCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                remove();
                if (cancelled) {
                    callHook(onLeaveCancelled, [el]);
                }
                else {
                    callHook(onAfterLeave, [el]);
                }
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode) {
                    delete leavingVNodesCache[key];
                }
            });
            leavingVNodesCache[key] = vnode;
            if (onLeave) {
                callAsyncHook(onLeave, [el, done]);
            }
            else {
                done();
            }
        },
        clone(vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode)
        ? vnode.children
            ? vnode.children[0]
            : undefined
        : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* ShapeFlags.COMPONENT */ && vnode.component) {
        setTransitionHooks(vnode.component.subTree, hooks);
    }
    else if (vnode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    }
    else {
        vnode.transition = hooks;
    }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        // #5360 inherit parent key in case of <template v-for>
        const key = parentKey == null
            ? child.key
            : String(parentKey) + String(child.key != null ? child.key : i);
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* PatchFlags.KEYED_FRAGMENT */)
                keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
        }
        // comment placeholders should be skipped, e.g. v-if
        else if (keepComment || child.type !== Comment) {
            ret.push(key != null ? cloneVNode(child, { key }) : child);
        }
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) {
        for (let i = 0; i < ret.length; i++) {
            ret[i].patchFlag = -2 /* PatchFlags.BAIL */;
        }
    }
    return ret;
}

// implementation, close to no-op
function defineComponent(options) {
    return isFunction$1(options) ? { setup: options, name: options.name } : options;
}

const isAsyncWrapper = (i) => !!i.type.__asyncLoader;

const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* LifecycleHooks.ACTIVATED */, target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* LifecycleHooks.DEACTIVATED */, target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc ||
        (hook.__wdc = () => {
            // only fire the hook if the target instance is NOT in a deactivated branch.
            let current = target;
            while (current) {
                if (current.isDeactivated) {
                    return;
                }
                current = current.parent;
            }
            return hook();
        });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
                injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true /* prepend */);
    onUnmounted(() => {
        remove(keepAliveRoot[type], injected);
    }, target);
}

function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh ||
            (hook.__weh = (...args) => {
                if (target.isUnmounted) {
                    return;
                }
                // disable tracking inside all lifecycle hooks
                // since they can potentially be called inside effects.
                pauseTracking();
                // Set currentInstance during hook invocation.
                // This assumes the hook does not synchronously trigger other hooks, which
                // can only be false when the user does something really funky.
                setCurrentInstance(target);
                const res = callWithAsyncErrorHandling(hook, target, type, args);
                unsetCurrentInstance();
                resetTracking();
                return res;
            });
        if (prepend) {
            hooks.unshift(wrappedHook);
        }
        else {
            hooks.push(wrappedHook);
        }
        return wrappedHook;
    }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => 
// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
(!isInSSRComponentSetup || lifecycle === "sp" /* LifecycleHooks.SERVER_PREFETCH */) &&
    injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm" /* LifecycleHooks.BEFORE_MOUNT */);
const onMounted = createHook("m" /* LifecycleHooks.MOUNTED */);
const onBeforeUpdate = createHook("bu" /* LifecycleHooks.BEFORE_UPDATE */);
const onUpdated = createHook("u" /* LifecycleHooks.UPDATED */);
const onBeforeUnmount = createHook("bum" /* LifecycleHooks.BEFORE_UNMOUNT */);
const onUnmounted = createHook("um" /* LifecycleHooks.UNMOUNTED */);
const onServerPrefetch = createHook("sp" /* LifecycleHooks.SERVER_PREFETCH */);
const onRenderTriggered = createHook("rtg" /* LifecycleHooks.RENDER_TRIGGERED */);
const onRenderTracked = createHook("rtc" /* LifecycleHooks.RENDER_TRACKED */);
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec" /* LifecycleHooks.ERROR_CAPTURED */, hook, target);
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
        const binding = bindings[i];
        if (oldBindings) {
            binding.oldValue = oldBindings[i].value;
        }
        let hook = binding.dir[name];
        if (hook) {
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            pauseTracking();
            callWithAsyncErrorHandling(hook, instance, 8 /* ErrorCodes.DIRECTIVE_HOOK */, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            resetTracking();
        }
    }
}
const NULL_DYNAMIC_COMPONENT = Symbol();

/**
 * Actual implementation
 */
function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = (cache && cache[index]);
    if (isArray$1(source) || isString$1(source)) {
        ret = new Array(source.length);
        for (let i = 0, l = source.length; i < l; i++) {
            ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
        }
    }
    else if (typeof source === 'number') {
        ret = new Array(source);
        for (let i = 0; i < source; i++) {
            ret[i] = renderItem(i + 1, i, undefined, cached && cached[i]);
        }
    }
    else if (isObject$1(source)) {
        if (source[Symbol.iterator]) {
            ret = Array.from(source, (item, i) => renderItem(item, i, undefined, cached && cached[i]));
        }
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for (let i = 0, l = keys.length; i < l; i++) {
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    }
    else {
        ret = [];
    }
    if (cache) {
        cache[index] = ret;
    }
    return ret;
}

/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */
const getPublicInstance = (i) => {
    if (!i)
        return null;
    if (isStatefulComponent(i))
        return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = 
// Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/*#__PURE__*/ extend(Object.create(null), {
    $: i => i,
    $el: i => i.vnode.el,
    $data: i => i.data,
    $props: i => (i.props),
    $attrs: i => (i.attrs),
    $slots: i => (i.slots),
    $refs: i => (i.refs),
    $parent: i => getPublicInstance(i.parent),
    $root: i => getPublicInstance(i.root),
    $emit: i => i.emit,
    $options: i => (resolveMergedOptions(i) ),
    $forceUpdate: i => i.f || (i.f = () => queueJob(i.update)),
    $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: i => (instanceWatch.bind(i) )
});
const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== '$') {
            const n = accessCache[key];
            if (n !== undefined) {
                switch (n) {
                    case 1 /* AccessTypes.SETUP */:
                        return setupState[key];
                    case 2 /* AccessTypes.DATA */:
                        return data[key];
                    case 4 /* AccessTypes.CONTEXT */:
                        return ctx[key];
                    case 3 /* AccessTypes.PROPS */:
                        return props[key];
                    // default: just fallthrough
                }
            }
            else if (setupState !== EMPTY_OBJ && hasOwn$1(setupState, key)) {
                accessCache[key] = 1 /* AccessTypes.SETUP */;
                return setupState[key];
            }
            else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
                accessCache[key] = 2 /* AccessTypes.DATA */;
                return data[key];
            }
            else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) &&
                hasOwn$1(normalizedProps, key)) {
                accessCache[key] = 3 /* AccessTypes.PROPS */;
                return props[key];
            }
            else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
                accessCache[key] = 4 /* AccessTypes.CONTEXT */;
                return ctx[key];
            }
            else if (shouldCacheAccess) {
                accessCache[key] = 0 /* AccessTypes.OTHER */;
            }
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === '$attrs') {
                track(instance, "get" /* TrackOpTypes.GET */, key);
            }
            return publicGetter(instance);
        }
        else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) &&
            (cssModule = cssModule[key])) {
            return cssModule;
        }
        else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 4 /* AccessTypes.CONTEXT */;
            return ctx[key];
        }
        else if (
        // global properties
        ((globalProperties = appContext.config.globalProperties),
            hasOwn$1(globalProperties, key))) {
            {
                return globalProperties[key];
            }
        }
        else ;
    },
    set({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (setupState !== EMPTY_OBJ && hasOwn$1(setupState, key)) {
            setupState[key] = value;
            return true;
        }
        else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
            data[key] = value;
            return true;
        }
        else if (hasOwn$1(instance.props, key)) {
            return false;
        }
        if (key[0] === '$' && key.slice(1) in instance) {
            return false;
        }
        else {
            {
                ctx[key] = value;
            }
        }
        return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
        let normalizedProps;
        return (!!accessCache[key] ||
            (data !== EMPTY_OBJ && hasOwn$1(data, key)) ||
            (setupState !== EMPTY_OBJ && hasOwn$1(setupState, key)) ||
            ((normalizedProps = propsOptions[0]) && hasOwn$1(normalizedProps, key)) ||
            hasOwn$1(ctx, key) ||
            hasOwn$1(publicPropertiesMap, key) ||
            hasOwn$1(appContext.config.globalProperties, key));
    },
    defineProperty(target, key, descriptor) {
        if (descriptor.get != null) {
            // invalidate key cache of a getter based property #5417
            target._.accessCache[key] = 0;
        }
        else if (hasOwn$1(descriptor, 'value')) {
            this.set(target, key, descriptor.value, null);
        }
        return Reflect.defineProperty(target, key, descriptor);
    }
};
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    // do not cache property access on public proxy during state initialization
    shouldCacheAccess = false;
    // call beforeCreate first before accessing other options since
    // the hook may mutate resolved options (#2791)
    if (options.beforeCreate) {
        callHook(options.beforeCreate, instance, "bc" /* LifecycleHooks.BEFORE_CREATE */);
    }
    const { 
    // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, 
    // lifecycle
    created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, 
    // public API
    expose, inheritAttrs, 
    // assets
    components, directives, filters } = options;
    const checkDuplicateProperties = null;
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) {
        resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    }
    if (methods) {
        for (const key in methods) {
            const methodHandler = methods[key];
            if (isFunction$1(methodHandler)) {
                // In dev mode, we use the `createRenderContext` function to define
                // methods to the proxy target, and those are read-only but
                // reconfigurable, so it needs to be redefined here
                {
                    ctx[key] = methodHandler.bind(publicThis);
                }
            }
        }
    }
    if (dataOptions) {
        const data = dataOptions.call(publicThis, publicThis);
        if (!isObject$1(data)) ;
        else {
            instance.data = reactive(data);
        }
    }
    // state initialization complete at this point - start caching access
    shouldCacheAccess = true;
    if (computedOptions) {
        for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get = isFunction$1(opt)
                ? opt.bind(publicThis, publicThis)
                : isFunction$1(opt.get)
                    ? opt.get.bind(publicThis, publicThis)
                    : NOOP;
            const set = !isFunction$1(opt) && isFunction$1(opt.set)
                ? opt.set.bind(publicThis)
                : NOOP;
            const c = computed({
                get,
                set
            });
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => c.value,
                set: v => (c.value = v)
            });
        }
    }
    if (watchOptions) {
        for (const key in watchOptions) {
            createWatcher(watchOptions[key], ctx, publicThis, key);
        }
    }
    if (provideOptions) {
        const provides = isFunction$1(provideOptions)
            ? provideOptions.call(publicThis)
            : provideOptions;
        Reflect.ownKeys(provides).forEach(key => {
            provide(key, provides[key]);
        });
    }
    if (created) {
        callHook(created, instance, "c" /* LifecycleHooks.CREATED */);
    }
    function registerLifecycleHook(register, hook) {
        if (isArray$1(hook)) {
            hook.forEach(_hook => register(_hook.bind(publicThis)));
        }
        else if (hook) {
            register(hook.bind(publicThis));
        }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray$1(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach(key => {
                Object.defineProperty(exposed, key, {
                    get: () => publicThis[key],
                    set: val => (publicThis[key] = val)
                });
            });
        }
        else if (!instance.exposed) {
            instance.exposed = {};
        }
    }
    // options that are handled when creating the instance but also need to be
    // applied from mixins
    if (render && instance.render === NOOP) {
        instance.render = render;
    }
    if (inheritAttrs != null) {
        instance.inheritAttrs = inheritAttrs;
    }
    // asset options.
    if (components)
        instance.components = components;
    if (directives)
        instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
    if (isArray$1(injectOptions)) {
        injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
        const opt = injectOptions[key];
        let injected;
        if (isObject$1(opt)) {
            if ('default' in opt) {
                injected = inject(opt.from || key, opt.default, true /* treat default function as factory */);
            }
            else {
                injected = inject(opt.from || key);
            }
        }
        else {
            injected = inject(opt);
        }
        if (isRef(injected)) {
            // TODO remove the check in 3.3
            if (unwrapRef) {
                Object.defineProperty(ctx, key, {
                    enumerable: true,
                    configurable: true,
                    get: () => injected.value,
                    set: v => (injected.value = v)
                });
            }
            else {
                ctx[key] = injected;
            }
        }
        else {
            ctx[key] = injected;
        }
    }
}
function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(isArray$1(hook)
        ? hook.map(h => h.bind(instance.proxy))
        : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes('.')
        ? createPathGetter(publicThis, key)
        : () => publicThis[key];
    if (isString$1(raw)) {
        const handler = ctx[raw];
        if (isFunction$1(handler)) {
            watch(getter, handler);
        }
    }
    else if (isFunction$1(raw)) {
        watch(getter, raw.bind(publicThis));
    }
    else if (isObject$1(raw)) {
        if (isArray$1(raw)) {
            raw.forEach(r => createWatcher(r, ctx, publicThis, key));
        }
        else {
            const handler = isFunction$1(raw.handler)
                ? raw.handler.bind(publicThis)
                : ctx[raw.handler];
            if (isFunction$1(handler)) {
                watch(getter, handler, raw);
            }
        }
    }
    else ;
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */
function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
        resolved = cached;
    }
    else if (!globalMixins.length && !mixins && !extendsOptions) {
        {
            resolved = base;
        }
    }
    else {
        resolved = {};
        if (globalMixins.length) {
            globalMixins.forEach(m => mergeOptions(resolved, m, optionMergeStrategies, true));
        }
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    if (isObject$1(base)) {
        cache.set(base, resolved);
    }
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
        mergeOptions(to, extendsOptions, strats, true);
    }
    if (mixins) {
        mixins.forEach((m) => mergeOptions(to, m, strats, true));
    }
    for (const key in from) {
        if (asMixin && key === 'expose') ;
        else {
            const strat = internalOptionMergeStrats[key] || (strats && strats[key]);
            to[key] = strat ? strat(to[key], from[key]) : from[key];
        }
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
function mergeDataFn(to, from) {
    if (!from) {
        return to;
    }
    if (!to) {
        return from;
    }
    return function mergedDataFn() {
        return (extend)(isFunction$1(to) ? to.call(this, this) : to, isFunction$1(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if (isArray$1(raw)) {
        const res = {};
        for (let i = 0; i < raw.length; i++) {
            res[raw[i]] = raw[i];
        }
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
    return to ? extend(extend(Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
    if (!to)
        return from;
    if (!from)
        return to;
    const merged = extend(Object.create(null), to);
    for (const key in from) {
        merged[key] = mergeAsArray(to[key], from[key]);
    }
    return merged;
}

function initProps(instance, rawProps, isStateful, // result of bitwise flag comparison
isSSR = false) {
    const props = {};
    const attrs = {};
    def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    // ensure all declared prop keys are present
    for (const key in instance.propsOptions[0]) {
        if (!(key in props)) {
            props[key] = undefined;
        }
    }
    if (isStateful) {
        // stateful
        instance.props = isSSR ? props : shallowReactive(props);
    }
    else {
        if (!instance.type.props) {
            // functional w/ optional props, props === attrs
            instance.props = attrs;
        }
        else {
            // functional w/ declared props
            instance.props = props;
        }
    }
    instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) &&
        !(patchFlag & 16 /* PatchFlags.FULL_PROPS */)) {
        if (patchFlag & 8 /* PatchFlags.PROPS */) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
                let key = propsToUpdate[i];
                // skip if the prop key is a declared emit event listener
                if (isEmitListener(instance.emitsOptions, key)) {
                    continue;
                }
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if (hasOwn$1(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    }
                    else {
                        const camelizedKey = camelize(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false /* isAbsent */);
                    }
                }
                else {
                    if (value !== attrs[key]) {
                        attrs[key] = value;
                        hasAttrsChanged = true;
                    }
                }
            }
        }
    }
    else {
        // full props update.
        if (setFullProps(instance, rawProps, props, attrs)) {
            hasAttrsChanged = true;
        }
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for (const key in rawCurrentProps) {
            if (!rawProps ||
                // for camelCase
                (!hasOwn$1(rawProps, key) &&
                    // it's possible the original props was passed in as kebab-case
                    // and converted to camelCase (#955)
                    ((kebabKey = hyphenate(key)) === key || !hasOwn$1(rawProps, kebabKey)))) {
                if (options) {
                    if (rawPrevProps &&
                        // for camelCase
                        (rawPrevProps[key] !== undefined ||
                            // for kebab-case
                            rawPrevProps[kebabKey] !== undefined)) {
                        props[key] = resolvePropValue(options, rawCurrentProps, key, undefined, instance, true /* isAbsent */);
                    }
                }
                else {
                    delete props[key];
                }
            }
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
                if (!rawProps ||
                    (!hasOwn$1(rawProps, key) &&
                        (!false ))) {
                    delete attrs[key];
                    hasAttrsChanged = true;
                }
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    if (hasAttrsChanged) {
        trigger(instance, "set" /* TriggerOpTypes.SET */, '$attrs');
    }
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
        for (let key in rawProps) {
            // key, ref are reserved and never passed down
            if (isReservedProp(key)) {
                continue;
            }
            const value = rawProps[key];
            // prop option names are camelized during normalization, so to support
            // kebab -> camel conversion here we need to camelize the key.
            let camelKey;
            if (options && hasOwn$1(options, (camelKey = camelize(key)))) {
                if (!needCastKeys || !needCastKeys.includes(camelKey)) {
                    props[camelKey] = value;
                }
                else {
                    (rawCastValues || (rawCastValues = {}))[camelKey] = value;
                }
            }
            else if (!isEmitListener(instance.emitsOptions, key)) {
                if (!(key in attrs) || value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = toRaw(props);
        const castValues = rawCastValues || EMPTY_OBJ;
        for (let i = 0; i < needCastKeys.length; i++) {
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn$1(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = hasOwn$1(opt, 'default');
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && isFunction$1(defaultValue)) {
                const { propsDefaults } = instance;
                if (key in propsDefaults) {
                    value = propsDefaults[key];
                }
                else {
                    setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    unsetCurrentInstance();
                }
            }
            else {
                value = defaultValue;
            }
        }
        // boolean casting
        if (opt[0 /* BooleanFlags.shouldCast */]) {
            if (isAbsent && !hasDefault) {
                value = false;
            }
            else if (opt[1 /* BooleanFlags.shouldCastTrue */] &&
                (value === '' || value === hyphenate(key))) {
                value = true;
            }
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
        return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (!isFunction$1(comp)) {
        const extendProps = (raw) => {
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw, appContext, true);
            extend(normalized, props);
            if (keys)
                needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
        }
        if (comp.extends) {
            extendProps(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendProps);
        }
    }
    if (!raw && !hasExtends) {
        if (isObject$1(comp)) {
            cache.set(comp, EMPTY_ARR);
        }
        return EMPTY_ARR;
    }
    if (isArray$1(raw)) {
        for (let i = 0; i < raw.length; i++) {
            const normalizedKey = camelize(raw[i]);
            if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = EMPTY_OBJ;
            }
        }
    }
    else if (raw) {
        for (const key in raw) {
            const normalizedKey = camelize(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = (normalized[normalizedKey] =
                    isArray$1(opt) || isFunction$1(opt) ? { type: opt } : opt);
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* BooleanFlags.shouldCast */] = booleanIndex > -1;
                    prop[1 /* BooleanFlags.shouldCastTrue */] =
                        stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || hasOwn$1(prop, 'default')) {
                        needCastKeys.push(normalizedKey);
                    }
                }
            }
        }
    }
    const res = [normalized, needCastKeys];
    if (isObject$1(comp)) {
        cache.set(comp, res);
    }
    return res;
}
function validatePropName(key) {
    if (key[0] !== '$') {
        return true;
    }
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? 'null' : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (isArray$1(expectedTypes)) {
        return expectedTypes.findIndex(t => isSameType(t, type));
    }
    else if (isFunction$1(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
}

const isInternalKey = (key) => key[0] === '_' || key === '$stable';
const normalizeSlotValue = (value) => isArray$1(value)
    ? value.map(normalizeVNode)
    : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
    if (rawSlot._n) {
        // already normalized - #5353
        return rawSlot;
    }
    const normalized = withCtx((...args) => {
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
        if (isInternalKey(key))
            continue;
        const value = rawSlots[key];
        if (isFunction$1(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
        }
        else if (value != null) {
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children) => {
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32 /* ShapeFlags.SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // users can get the shallow readonly version of the slots object through `this.$slots`,
            // we should avoid the proxy object polluting the slots of the internal instance
            instance.slots = toRaw(children);
            // make compiler marker non-enumerable
            def(children, '_', type);
        }
        else {
            normalizeObjectSlots(children, (instance.slots = {}));
        }
    }
    else {
        instance.slots = {};
        if (children) {
            normalizeVNodeSlots(instance, children);
        }
    }
    def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32 /* ShapeFlags.SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (optimized && type === 1 /* SlotFlags.STABLE */) {
                // compiled AND stable.
                // no need to update, and skip stale slots removal.
                needDeletionCheck = false;
            }
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                extend(slots, children);
                // #2893
                // when rendering the optimized slots by manually written render function,
                // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
                // i.e. let the `renderSlot` create the bailed Fragment
                if (!optimized && type === 1 /* SlotFlags.STABLE */) {
                    delete slots._;
                }
            }
        }
        else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    }
    else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = { default: 1 };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
                delete slots[key];
            }
        }
    }
};

function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: undefined,
            warnHandler: undefined,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
    };
}
let uid = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (!isFunction$1(rootComponent)) {
            rootComponent = Object.assign({}, rootComponent);
        }
        if (rootProps != null && !isObject$1(rootProps)) {
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = (context.app = {
            _uid: uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config() {
                return context.config;
            },
            set config(v) {
            },
            use(plugin, ...options) {
                if (installedPlugins.has(plugin)) ;
                else if (plugin && isFunction$1(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                }
                else if (isFunction$1(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                }
                else ;
                return app;
            },
            mixin(mixin) {
                {
                    if (!context.mixins.includes(mixin)) {
                        context.mixins.push(mixin);
                    }
                }
                return app;
            },
            component(name, component) {
                if (!component) {
                    return context.components[name];
                }
                context.components[name] = component;
                return app;
            },
            directive(name, directive) {
                if (!directive) {
                    return context.directives[name];
                }
                context.directives[name] = directive;
                return app;
            },
            mount(rootContainer, isHydrate, isSVG) {
                if (!isMounted) {
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    if (isHydrate && hydrate) {
                        hydrate(vnode, rootContainer);
                    }
                    else {
                        render(vnode, rootContainer, isSVG);
                    }
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    return getExposeProxy(vnode.component) || vnode.component.proxy;
                }
            },
            unmount() {
                if (isMounted) {
                    render(null, app._container);
                    delete app._container.__vue_app__;
                }
            },
            provide(key, value) {
                context.provides[key] = value;
                return app;
            }
        });
        return app;
    };
}

/**
 * Function for handling a template ref
 */
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray$1(rawRef)) {
        rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray$1(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
        // when mounting async components, nothing needs to be done,
        // because the template ref is forwarded to inner component
        return;
    }
    const refValue = vnode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */
        ? getExposeProxy(vnode.component) || vnode.component.proxy
        : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref } = rawRef;
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? (owner.refs = {}) : owner.refs;
    const setupState = owner.setupState;
    // dynamic ref changed. unset old ref
    if (oldRef != null && oldRef !== ref) {
        if (isString$1(oldRef)) {
            refs[oldRef] = null;
            if (hasOwn$1(setupState, oldRef)) {
                setupState[oldRef] = null;
            }
        }
        else if (isRef(oldRef)) {
            oldRef.value = null;
        }
    }
    if (isFunction$1(ref)) {
        callWithErrorHandling(ref, owner, 12 /* ErrorCodes.FUNCTION_REF */, [value, refs]);
    }
    else {
        const _isString = isString$1(ref);
        const _isRef = isRef(ref);
        if (_isString || _isRef) {
            const doSet = () => {
                if (rawRef.f) {
                    const existing = _isString ? refs[ref] : ref.value;
                    if (isUnmount) {
                        isArray$1(existing) && remove(existing, refValue);
                    }
                    else {
                        if (!isArray$1(existing)) {
                            if (_isString) {
                                refs[ref] = [refValue];
                                if (hasOwn$1(setupState, ref)) {
                                    setupState[ref] = refs[ref];
                                }
                            }
                            else {
                                ref.value = [refValue];
                                if (rawRef.k)
                                    refs[rawRef.k] = ref.value;
                            }
                        }
                        else if (!existing.includes(refValue)) {
                            existing.push(refValue);
                        }
                    }
                }
                else if (_isString) {
                    refs[ref] = value;
                    if (hasOwn$1(setupState, ref)) {
                        setupState[ref] = value;
                    }
                }
                else if (_isRef) {
                    ref.value = value;
                    if (rawRef.k)
                        refs[rawRef.k] = value;
                }
                else ;
            };
            if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
            }
            else {
                doSet();
            }
        }
    }
}

const queuePostRenderEffect = queueEffectWithSuspense
    ;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
function createRenderer(options) {
    return baseCreateRenderer(options);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    const target = getGlobalThis$1();
    target.__VUE__ = true;
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
        if (n1 === n2) {
            return;
        }
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* PatchFlags.BAIL */) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch (type) {
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) {
                    mountStaticNode(n2, container, anchor, isSVG);
                }
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ShapeFlags.ELEMENT */) {
                    processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
                    processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                }
                else if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                }
                else ;
        }
        // set ref
        if (ref != null && parentComponent) {
            setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
        }
    };
    const processText = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
        }
        else {
            const el = (n2.el = n1.el);
            if (n2.children !== n1.children) {
                hostSetText(el, n2.children);
            }
        }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateComment(n2.children || '')), container, anchor);
        }
        else {
            // there's no support for dynamic comments
            n2.el = n1.el;
        }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
        let next;
        while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        isSVG = isSVG || n2.type === 'svg';
        if (n1 == null) {
            mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        else {
            patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        let el;
        let vnodeHook;
        const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
        if (vnode.el &&
            hostCloneNode !== undefined &&
            patchFlag === -1 /* PatchFlags.HOISTED */) {
            // If a vnode has non-null el, it means it's being reused.
            // Only static vnodes can be reused, so its mounted DOM nodes should be
            // exactly the same, and we can simply do a clone here.
            // only do this in production since cloned trees cannot be HMR updated.
            el = vnode.el = hostCloneNode(vnode.el);
        }
        else {
            el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
            // mount children first, since some props may rely on child content
            // being already rendered, e.g. `<select value>`
            if (shapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */) {
                hostSetElementText(el, vnode.children);
            }
            else if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
                mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                for (const key in props) {
                    if (key !== 'value' && !isReservedProp(key)) {
                        hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
                /**
                 * Special case for setting value on DOM elements:
                 * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                 * - it needs to be forced (#1471)
                 * #2353 proposes adding another renderer option to configure this, but
                 * the properties affects are so finite it is worth special casing it
                 * here to reduce the complexity. (Special casing it also should not
                 * affect non-DOM renderers)
                 */
                if ('value' in props) {
                    hostPatchProp(el, 'value', null, props.value);
                }
                if ((vnodeHook = props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parentComponent, vnode);
                }
            }
            // scopeId
            setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        }
        if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        }
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || (parentSuspense && !parentSuspense.pendingBranch)) &&
            transition &&
            !transition.persisted;
        if (needCallTransitionHooks) {
            transition.beforeEnter(el);
        }
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) ||
            needCallTransitionHooks ||
            dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
            }, parentSuspense);
        }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
        if (scopeId) {
            hostSetScopeId(el, scopeId);
        }
        if (slotScopeIds) {
            for (let i = 0; i < slotScopeIds.length; i++) {
                hostSetScopeId(el, slotScopeIds[i]);
            }
        }
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
        for (let i = start; i < children.length; i++) {
            const child = (children[i] = optimized
                ? cloneIfMounted(children[i])
                : normalizeVNode(children[i]));
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        const el = (n2.el = n1.el);
        let { patchFlag, dynamicChildren, dirs } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* PatchFlags.FULL_PROPS */;
        const oldProps = n1.props || EMPTY_OBJ;
        const newProps = n2.props || EMPTY_OBJ;
        let vnodeHook;
        // disable recurse in beforeUpdate hooks
        parentComponent && toggleRecurse(parentComponent, false);
        if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        }
        if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
        }
        parentComponent && toggleRecurse(parentComponent, true);
        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
        }
        else if (!optimized) {
            // full diff
            patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
        }
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* PatchFlags.FULL_PROPS */) {
                // element props contain dynamic keys, full diff needed
                patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            }
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* PatchFlags.CLASS */) {
                    if (oldProps.class !== newProps.class) {
                        hostPatchProp(el, 'class', null, newProps.class, isSVG);
                    }
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* PatchFlags.STYLE */) {
                    hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                }
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PatchFlags.PROPS */) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for (let i = 0; i < propsToUpdate.length; i++) {
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        // #1471 force patch value
                        if (next !== prev || key === 'value') {
                            hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                        }
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* PatchFlags.TEXT */) {
                if (n1.children !== n2.children) {
                    hostSetElementText(el, n2.children);
                }
            }
        }
        else if (!optimized && dynamicChildren == null) {
            // unoptimized, full diff
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        }
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
            }, parentSuspense);
        }
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
        for (let i = 0; i < newChildren.length; i++) {
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = 
            // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el &&
                // - In the case of a Fragment, we need to provide the actual parent
                // of the Fragment itself so it can move its children.
                (oldVNode.type === Fragment ||
                    // - In the case of different nodes, there is going to be a replacement
                    // which also requires the correct parent container
                    !isSameVNodeType(oldVNode, newVNode) ||
                    // - In the case of a component, it could contain anything.
                    oldVNode.shapeFlag & (6 /* ShapeFlags.COMPONENT */ | 64 /* ShapeFlags.TELEPORT */))
                ? hostParentNode(oldVNode.el)
                : // In other cases, the parent container is not actually used so we
                    // just pass the block element here to avoid a DOM parentNode call.
                    fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
        if (oldProps !== newProps) {
            for (const key in newProps) {
                // empty string is not valid prop
                if (isReservedProp(key))
                    continue;
                const next = newProps[key];
                const prev = oldProps[key];
                // defer patching value
                if (next !== prev && key !== 'value') {
                    hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
            }
            if (oldProps !== EMPTY_OBJ) {
                for (const key in oldProps) {
                    if (!isReservedProp(key) && !(key in newProps)) {
                        hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            if ('value' in newProps) {
                hostPatchProp(el, 'value', oldProps.value, newProps.value);
            }
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(''));
        const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(''));
        let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
        // check if this is a slot fragment with :slotted scope ids
        if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds
                ? slotScopeIds.concat(fragmentSlotScopeIds)
                : fragmentSlotScopeIds;
        }
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        else {
            if (patchFlag > 0 &&
                patchFlag & 64 /* PatchFlags.STABLE_FRAGMENT */ &&
                dynamicChildren &&
                // #2715 the previous fragment could've been a BAILed one as a result
                // of renderSlot() with no valid children
                n1.dynamicChildren) {
                // a stable fragment (template root or <template v-for>) doesn't need to
                // patch children order, but it may contain dynamicChildren.
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
                if (
                // #2080 if the stable fragment has a key, it's a <template v-for> that may
                //  get moved around. Make sure all root level vnodes inherit el.
                // #2134 or if it's a component root, it may also get moved around
                // as the component is being moved.
                n2.key != null ||
                    (parentComponent && n2 === parentComponent.subTree)) {
                    traverseStaticChildren(n1, n2, true /* shallow */);
                }
            }
            else {
                // keyed / unkeyed, or manual fragments.
                // for keyed & unkeyed, since they are compiler generated from v-for,
                // each child is guaranteed to be a block so the fragment will never
                // have dynamicChildren.
                patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
        }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* ShapeFlags.COMPONENT_KEPT_ALIVE */) {
                parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            }
            else {
                mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
        else {
            updateComponent(n1, n2, optimized);
        }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
        }
        // resolve props and slots for setup context
        {
            setupComponent(instance);
        }
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = (instance.subTree = createVNode(Comment));
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
    };
    const updateComponent = (n1, n2, optimized) => {
        const instance = (n2.component = n1.component);
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep &&
                !instance.asyncResolved) {
                updateComponentPreRender(instance, n2, optimized);
                return;
            }
            else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect.
                instance.update();
            }
        }
        else {
            // no update needed. just copy over properties
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
        const componentUpdateFn = () => {
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, parent } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                // beforeMount hook
                if (bm) {
                    invokeArrayFns(bm);
                }
                // onVnodeBeforeMount
                if (!isAsyncWrapperVNode &&
                    (vnodeHook = props && props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parent, initialVNode);
                }
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    // vnode has adopted host node - perform hydration instead of mount.
                    const hydrateSubTree = () => {
                        instance.subTree = renderComponentRoot(instance);
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                    };
                    if (isAsyncWrapperVNode) {
                        initialVNode.type.__asyncLoader().then(
                        // note: we are moving the render call into an async callback,
                        // which means it won't track dependencies - but it's ok because
                        // a server-rendered async wrapper is already in resolved state
                        // and it will never need to change.
                        () => !instance.isUnmounted && hydrateSubTree());
                    }
                    else {
                        hydrateSubTree();
                    }
                }
                else {
                    const subTree = (instance.subTree = renderComponentRoot(instance));
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) {
                    queuePostRenderEffect(m, parentSuspense);
                }
                // onVnodeMounted
                if (!isAsyncWrapperVNode &&
                    (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                if (initialVNode.shapeFlag & 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */ ||
                    (parent &&
                        isAsyncWrapper(parent.vnode) &&
                        parent.vnode.shapeFlag & 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */)) {
                    instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                }
                instance.isMounted = true;
                // #2458: deference mount-only object parameters to prevent memleaks
                initialVNode = container = anchor = null;
            }
            else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next, bu, u, parent, vnode } = instance;
                let originNext = next;
                let vnodeHook;
                // Disallow component effect recursion during pre-lifecycle hooks.
                toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                }
                else {
                    next = vnode;
                }
                // beforeUpdate hook
                if (bu) {
                    invokeArrayFns(bu);
                }
                // onVnodeBeforeUpdate
                if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
                    invokeVNodeHook(vnodeHook, parent, next, vnode);
                }
                toggleRecurse(instance, true);
                const nextTree = renderComponentRoot(instance);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                patch(prevTree, nextTree, 
                // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), 
                // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                next.el = nextTree.el;
                if (originNext === null) {
                    // self-triggered update. In case of HOC, update parent component
                    // vnode el. HOC is indicated by parent instance's subTree pointing
                    // to child component's vnode
                    updateHOCHostEl(instance, nextTree.el);
                }
                // updated hook
                if (u) {
                    queuePostRenderEffect(u, parentSuspense);
                }
                // onVnodeUpdated
                if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
                    queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                }
            }
        };
        // create reactive effect for rendering
        const effect = (instance.effect = new ReactiveEffect(componentUpdateFn, () => queueJob(update), instance.scope // track it in component's effect scope
        ));
        const update = (instance.update = () => effect.run());
        update.id = instance.uid;
        // allowRecurse
        // #1801, #2043 component render effects should allow recursive updates
        toggleRecurse(instance, true);
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        pauseTracking();
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs();
        resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* PatchFlags.KEYED_FRAGMENT */) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
            else if (patchFlag & 256 /* PatchFlags.UNKEYED_FRAGMENT */) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */) {
            // text children fast path
            if (prevShapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
                unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
                hostSetElementText(container, c2);
            }
        }
        else {
            if (prevShapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
                // prev children was array
                if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
                    // two arrays, cannot assume anything, do full diff
                    patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else {
                    // no new children, just unmount old
                    unmountChildren(c1, parentComponent, parentSuspense, true);
                }
            }
            else {
                // prev children was text OR null
                // new children is array OR null
                if (prevShapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */) {
                    hostSetElementText(container, '');
                }
                // mount new if array
                if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */) {
                    mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
            }
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        c1 = c1 || EMPTY_ARR;
        c2 = c2 || EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for (i = 0; i < commonLength; i++) {
            const nextChild = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        if (oldLength > newLength) {
            // remove old
            unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        }
        else {
            // mount new
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
        }
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while (i <= e1 && i <= e2) {
            const n1 = c1[i];
            const n2 = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
            else {
                break;
            }
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while (i <= e1 && i <= e2) {
            const n1 = c1[e1];
            const n2 = (c2[e2] = optimized
                ? cloneIfMounted(c2[e2])
                : normalizeVNode(c2[e2]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
            else {
                break;
            }
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while (i <= e2) {
                    patch(null, (c2[i] = optimized
                        ? cloneIfMounted(c2[i])
                        : normalizeVNode(c2[i])), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    i++;
                }
            }
        }
        // 4. common sequence + unmount
        // (a b) c
        // (a b)
        // i = 2, e1 = 2, e2 = 1
        // a (b c)
        // (b c)
        // i = 0, e1 = 0, e2 = -1
        else if (i > e2) {
            while (i <= e1) {
                unmount(c1[i], parentComponent, parentSuspense, true);
                i++;
            }
        }
        // 5. unknown sequence
        // [i ... e1 + 1]: a b [c d e] f g
        // [i ... e2 + 1]: a b [e d c h] f g
        // i = 2, e1 = 4, e2 = 5
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for (i = s2; i <= e2; i++) {
                const nextChild = (c2[i] = optimized
                    ? cloneIfMounted(c2[i])
                    : normalizeVNode(c2[i]));
                if (nextChild.key != null) {
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i = 0; i < toBePatched; i++)
                newIndexToOldIndexMap[i] = 0;
            for (i = s1; i <= e1; i++) {
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) {
                    newIndex = keyToNewIndexMap.get(prevChild.key);
                }
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for (j = s2; j <= e2; j++) {
                        if (newIndexToOldIndexMap[j - s2] === 0 &&
                            isSameVNodeType(prevChild, c2[j])) {
                            newIndex = j;
                            break;
                        }
                    }
                }
                if (newIndex === undefined) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                }
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) {
                        maxNewIndexSoFar = newIndex;
                    }
                    else {
                        moved = true;
                    }
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved
                ? getSequence(newIndexToOldIndexMap)
                : EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for (i = toBePatched - 1; i >= 0; i--) {
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) {
                    // mount new
                    patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                }
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) {
                        move(nextChild, container, anchor, 2 /* MoveType.REORDER */);
                    }
                    else {
                        j--;
                    }
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, anchor, moveType);
            }
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* MoveType.REORDER */ &&
            shapeFlag & 1 /* ShapeFlags.ELEMENT */ &&
            transition;
        if (needTransition) {
            if (moveType === 0 /* MoveType.ENTER */) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(() => transition.enter(el), parentSuspense);
            }
            else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove = () => hostInsert(el, container, anchor);
                const performLeave = () => {
                    leave(el, () => {
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) {
                    delayLeave(el, remove, performLeave);
                }
                else {
                    performLeave();
                }
            }
        }
        else {
            hostInsert(el, container, anchor);
        }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
        // unset ref
        if (ref != null) {
            setRef(ref, null, parentSuspense, vnode, true);
        }
        if (shapeFlag & 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ShapeFlags.ELEMENT */ && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook &&
            (vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
        }
        else {
            if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
            }
            if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {
                vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            }
            else if (dynamicChildren &&
                // #1153: fast path should not be taken for non-stable (v-for) fragments
                (type !== Fragment ||
                    (patchFlag > 0 && patchFlag & 64 /* PatchFlags.STABLE_FRAGMENT */))) {
                // fast path for block nodes: only need to unmount dynamic children.
                unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            }
            else if ((type === Fragment &&
                patchFlag &
                    (128 /* PatchFlags.KEYED_FRAGMENT */ | 256 /* PatchFlags.UNKEYED_FRAGMENT */)) ||
                (!optimized && shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */)) {
                unmountChildren(children, parentComponent, parentSuspense);
            }
            if (doRemove) {
                remove(vnode);
            }
        }
        if ((shouldInvokeVnodeHook &&
            (vnodeHook = props && props.onVnodeUnmounted)) ||
            shouldInvokeDirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                shouldInvokeDirs &&
                    invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
            }, parentSuspense);
        }
    };
    const remove = vnode => {
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
            {
                removeFragment(el, anchor);
            }
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = () => {
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) {
                transition.afterLeave();
            }
        };
        if (vnode.shapeFlag & 1 /* ShapeFlags.ELEMENT */ &&
            transition &&
            !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = () => leave(el, performRemove);
            if (delayLeave) {
                delayLeave(vnode.el, performRemove, performLeave);
            }
            else {
                performLeave();
            }
        }
        else {
            performRemove();
        }
    };
    const removeFragment = (cur, end) => {
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while (cur !== end) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
        const { bum, scope, update, subTree, um } = instance;
        // beforeUnmount hook
        if (bum) {
            invokeArrayFns(bum);
        }
        // stop effects in component scope
        scope.stop();
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            // so that scheduler will no longer invoke it
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) {
            queuePostRenderEffect(um, parentSuspense);
        }
        queuePostRenderEffect(() => {
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (parentSuspense &&
            parentSuspense.pendingBranch &&
            !parentSuspense.isUnmounted &&
            instance.asyncDep &&
            !instance.asyncResolved &&
            instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
                parentSuspense.resolve();
            }
        }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
        for (let i = start; i < children.length; i++) {
            unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
        }
    };
    const getNextHostNode = vnode => {
        if (vnode.shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
            return getNextHostNode(vnode.component.subTree);
        }
        if (vnode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
            return vnode.suspense.next();
        }
        return hostNextSibling((vnode.anchor || vnode.el));
    };
    const render = (vnode, container, isSVG) => {
        if (vnode == null) {
            if (container._vnode) {
                unmount(container._vnode, null, null, true);
            }
        }
        else {
            patch(container._vnode || null, vnode, container, null, null, null, isSVG);
        }
        flushPreFlushCbs();
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
        [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function toggleRecurse({ effect, update }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */
function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray$1(ch1) && isArray$1(ch2)) {
        for (let i = 0; i < ch1.length; i++) {
            // this is only called in the optimized path so array children are
            // guaranteed to be vnodes
            const c1 = ch1[i];
            let c2 = ch2[i];
            if (c2.shapeFlag & 1 /* ShapeFlags.ELEMENT */ && !c2.dynamicChildren) {
                if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* PatchFlags.HYDRATE_EVENTS */) {
                    c2 = ch2[i] = cloneIfMounted(ch2[i]);
                    c2.el = c1.el;
                }
                if (!shallow)
                    traverseStaticChildren(c1, c2);
            }
        }
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = (u + v) >> 1;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}

const isTeleport = (type) => type.__isTeleport;

const Fragment = Symbol(undefined);
const Text = Symbol(undefined);
const Comment = Symbol(undefined);
const Static = Symbol(undefined);
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */
function openBlock(disableTracking = false) {
    blockStack.push((currentBlock = disableTracking ? null : []));
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */
function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    // save current block children on the block vnode
    vnode.dynamicChildren =
        isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (isBlockTreeEnabled > 0 && currentBlock) {
        currentBlock.push(vnode);
    }
    return vnode;
}
/**
 * @private
 */
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true /* isBlock */));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */
function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true /* isBlock: prevent a block from tracking itself */));
}
function isVNode$1(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref, ref_key, ref_for }) => {
    return (ref != null
        ? isString$1(ref) || isRef(ref) || isFunction$1(ref)
            ? { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for }
            : ref
        : null);
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1 /* ShapeFlags.ELEMENT */, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
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
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        // normalize suspense children
        if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */) {
            type.normalize(vnode);
        }
    }
    else if (children) {
        // compiled element vnode - if children is passed, only possible types are
        // string or Array.
        vnode.shapeFlag |= isString$1(children)
            ? 8 /* ShapeFlags.TEXT_CHILDREN */
            : 16 /* ShapeFlags.ARRAY_CHILDREN */;
    }
    // track vnode for block tree
    if (isBlockTreeEnabled > 0 &&
        // avoid a block node from tracking itself
        !isBlockNode &&
        // has current parent block
        currentBlock &&
        // presence of a patch flag indicates this node needs patching on updates.
        // component nodes also should always be patched, because even if the
        // component doesn't need to update, it needs to persist the instance on to
        // the next vnode so that it can be properly unmounted later.
        (vnode.patchFlag > 0 || shapeFlag & 6 /* ShapeFlags.COMPONENT */) &&
        // the EVENTS flag is only for hydration and if it is the only flag, the
        // vnode should not be considered dynamic due to handler caching.
        vnode.patchFlag !== 32 /* PatchFlags.HYDRATE_EVENTS */) {
        currentBlock.push(vnode);
    }
    return vnode;
}
const createVNode = (_createVNode);
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        type = Comment;
    }
    if (isVNode$1(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true /* mergeRef: true */);
        if (children) {
            normalizeChildren(cloned, children);
        }
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
            if (cloned.shapeFlag & 6 /* ShapeFlags.COMPONENT */) {
                currentBlock[currentBlock.indexOf(type)] = cloned;
            }
            else {
                currentBlock.push(cloned);
            }
        }
        cloned.patchFlag |= -2 /* PatchFlags.BAIL */;
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) {
        type = type.__vccOpts;
    }
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        props = guardReactiveProps(props);
        let { class: klass, style } = props;
        if (klass && !isString$1(klass)) {
            props.class = normalizeClass(klass);
        }
        if (isObject$1(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if (isProxy(style) && !isArray$1(style)) {
                style = extend({}, style);
            }
            props.style = normalizeStyle(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = isString$1(type)
        ? 1 /* ShapeFlags.ELEMENT */
        : isSuspense(type)
            ? 128 /* ShapeFlags.SUSPENSE */
            : isTeleport(type)
                ? 64 /* ShapeFlags.TELEPORT */
                : isObject$1(type)
                    ? 4 /* ShapeFlags.STATEFUL_COMPONENT */
                    : isFunction$1(type)
                        ? 2 /* ShapeFlags.FUNCTIONAL_COMPONENT */
                        : 0;
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props)
        return null;
    return isProxy(props) || InternalObjectKey in props
        ? extend({}, props)
        : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props, ref, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref
            ? // #2078 in the case of <component :is="vnode" ref="extra"/>
                // if the vnode itself already has a ref, cloneVNode will need to merge
                // the refs so the single vnode can be set on multiple refs
                mergeRef && ref
                    ? isArray$1(ref)
                        ? ref.concat(normalizeRef(extraProps))
                        : [ref, normalizeRef(extraProps)]
                    : normalizeRef(extraProps)
            : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment
            ? patchFlag === -1 // hoisted node
                ? 16 /* PatchFlags.FULL_PROPS */
                : patchFlag | 16 /* PatchFlags.FULL_PROPS */
            : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor
    };
    return cloned;
}
/**
 * @private
 */
function createTextVNode(text = ' ', flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @private
 */
function createCommentVNode(text = '', 
// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock
        ? (openBlock(), createBlock(Comment, null, text))
        : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === 'boolean') {
        // empty placeholder
        return createVNode(Comment);
    }
    else if (isArray$1(child)) {
        // fragment
        return createVNode(Fragment, null, 
        // #3666, avoid reference pollution when reusing vnode
        child.slice());
    }
    else if (typeof child === 'object') {
        // already vnode, this should be the most common since compiled templates
        // always produce all-vnode children arrays
        return cloneIfMounted(child);
    }
    else {
        // strings and numbers
        return createVNode(Text, null, String(child));
    }
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
        children = null;
    }
    else if (isArray$1(children)) {
        type = 16 /* ShapeFlags.ARRAY_CHILDREN */;
    }
    else if (typeof children === 'object') {
        if (shapeFlag & (1 /* ShapeFlags.ELEMENT */ | 64 /* ShapeFlags.TELEPORT */)) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        }
        else {
            type = 32 /* ShapeFlags.SLOTS_CHILDREN */;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) {
                children._ctx = currentRenderingInstance;
            }
            else if (slotFlag === 3 /* SlotFlags.FORWARDED */ && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.slots._ === 1 /* SlotFlags.STABLE */) {
                    children._ = 1 /* SlotFlags.STABLE */;
                }
                else {
                    children._ = 2 /* SlotFlags.DYNAMIC */;
                    vnode.patchFlag |= 1024 /* PatchFlags.DYNAMIC_SLOTS */;
                }
            }
        }
    }
    else if (isFunction$1(children)) {
        children = { default: children, _ctx: currentRenderingInstance };
        type = 32 /* ShapeFlags.SLOTS_CHILDREN */;
    }
    else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* ShapeFlags.TELEPORT */) {
            type = 16 /* ShapeFlags.ARRAY_CHILDREN */;
            children = [createTextVNode(children)];
        }
        else {
            type = 8 /* ShapeFlags.TEXT_CHILDREN */;
        }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
        const toMerge = args[i];
        for (const key in toMerge) {
            if (key === 'class') {
                if (ret.class !== toMerge.class) {
                    ret.class = normalizeClass([ret.class, toMerge.class]);
                }
            }
            else if (key === 'style') {
                ret.style = normalizeStyle([ret.style, toMerge.style]);
            }
            else if (isOn(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming &&
                    existing !== incoming &&
                    !(isArray$1(existing) && existing.includes(incoming))) {
                    ret[key] = existing
                        ? [].concat(existing, incoming)
                        : incoming;
                }
            }
            else if (key !== '') {
                ret[key] = toMerge[key];
            }
        }
    }
    return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* ErrorCodes.VNODE_HOOK */, [
        vnode,
        prevVNode
    ]);
}

const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid$1++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new EffectScope(true /* detached */),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // props default value
        propsDefaults: EMPTY_OBJ,
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: EMPTY_OBJ,
        data: EMPTY_OBJ,
        props: EMPTY_OBJ,
        attrs: EMPTY_OBJ,
        slots: EMPTY_OBJ,
        refs: EMPTY_OBJ,
        setupState: EMPTY_OBJ,
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
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
    {
        instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit$1.bind(null, instance);
    // apply custom element special handling
    if (vnode.ce) {
        vnode.ce(instance);
    }
    return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
    currentInstance = instance;
    instance.scope.on();
};
const unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
};
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful
        ? setupStatefulComponent(instance, isSSR)
        : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    // 2. call setup()
    const { setup } = Component;
    if (setup) {
        const setupContext = (instance.setupContext =
            setup.length > 1 ? createSetupContext(instance) : null);
        setCurrentInstance(instance);
        pauseTracking();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* ErrorCodes.SETUP_FUNCTION */, [instance.props, setupContext]);
        resetTracking();
        unsetCurrentInstance();
        if (isPromise(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) {
                // return the promise so server-renderer can wait on it
                return setupResult
                    .then((resolvedResult) => {
                    handleSetupResult(instance, resolvedResult, isSSR);
                })
                    .catch(e => {
                    handleError(e, instance, 0 /* ErrorCodes.SETUP_FUNCTION */);
                });
            }
            else {
                // async setup returned Promise.
                // bail here and wait for re-entry.
                instance.asyncDep = setupResult;
            }
        }
        else {
            handleSetupResult(instance, setupResult, isSSR);
        }
    }
    else {
        finishComponentSetup(instance, isSSR);
    }
}
function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction$1(setupResult)) {
        // setup returned an inline render function
        if (instance.type.__ssrInlineRender) {
            // when the function's name is `ssrRender` (compiled by SFC inline mode),
            // set it as ssrRender instead.
            instance.ssrRender = setupResult;
        }
        else {
            instance.render = setupResult;
        }
    }
    else if (isObject$1(setupResult)) {
        instance.setupState = proxyRefs(setupResult);
    }
    else ;
    finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    // template / render function normalization
    // could be already set when returned from setup()
    if (!instance.render) {
        // only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
        // is done by server-renderer
        if (!isSSR && compile && !Component.render) {
            const template = Component.template ||
                resolveMergedOptions(instance).template;
            if (template) {
                const { isCustomElement, compilerOptions } = instance.appContext.config;
                const { delimiters, compilerOptions: componentCompilerOptions } = Component;
                const finalCompilerOptions = extend(extend({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
            }
        }
        instance.render = (Component.render || NOOP);
    }
    // support for 2.x options
    {
        setCurrentInstance(instance);
        pauseTracking();
        applyOptions(instance);
        resetTracking();
        unsetCurrentInstance();
    }
}
function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, {
            get(target, key) {
                track(instance, "get" /* TrackOpTypes.GET */, '$attrs');
                return target[key];
            }
        });
}
function createSetupContext(instance) {
    const expose = exposed => {
        instance.exposed = exposed || {};
    };
    let attrs;
    {
        return {
            get attrs() {
                return attrs || (attrs = createAttrsProxy(instance));
            },
            slots: instance.slots,
            emit: instance.emit,
            expose
        };
    }
}
function getExposeProxy(instance) {
    if (instance.exposed) {
        return (instance.exposeProxy ||
            (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
                get(target, key) {
                    if (key in target) {
                        return target[key];
                    }
                    else if (key in publicPropertiesMap) {
                        return publicPropertiesMap[key](instance);
                    }
                }
            })));
    }
}
function isClassComponent(value) {
    return isFunction$1(value) && '__vccOpts' in value;
}

const computed = ((getterOrOptions, debugOptions) => {
    // @ts-ignore
    return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
});

// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if (isObject$1(propsOrChildren) && !isArray$1(propsOrChildren)) {
            // single vnode without props
            if (isVNode$1(propsOrChildren)) {
                return createVNode(type, null, [propsOrChildren]);
            }
            // props without children
            return createVNode(type, propsOrChildren);
        }
        else {
            // omit props
            return createVNode(type, null, propsOrChildren);
        }
    }
    else {
        if (l > 3) {
            children = Array.prototype.slice.call(arguments, 2);
        }
        else if (l === 3 && isVNode$1(children)) {
            children = [children];
        }
        return createVNode(type, propsOrChildren, children);
    }
}

// Core API ------------------------------------------------------------------
const version = "3.2.39";

const svgNS = 'http://www.w3.org/2000/svg';
const doc = (typeof document !== 'undefined' ? document : null);
const templateContainer = doc && /*#__PURE__*/ doc.createElement('template');
const nodeOps = {
    insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
    },
    remove: child => {
        const parent = child.parentNode;
        if (parent) {
            parent.removeChild(child);
        }
    },
    createElement: (tag, isSVG, is, props) => {
        const el = isSVG
            ? doc.createElementNS(svgNS, tag)
            : doc.createElement(tag, is ? { is } : undefined);
        if (tag === 'select' && props && props.multiple != null) {
            el.setAttribute('multiple', props.multiple);
        }
        return el;
    },
    createText: text => doc.createTextNode(text),
    createComment: text => doc.createComment(text),
    setText: (node, text) => {
        node.nodeValue = text;
    },
    setElementText: (el, text) => {
        el.textContent = text;
    },
    parentNode: node => node.parentNode,
    nextSibling: node => node.nextSibling,
    querySelector: selector => doc.querySelector(selector),
    setScopeId(el, id) {
        el.setAttribute(id, '');
    },
    cloneNode(el) {
        const cloned = el.cloneNode(true);
        // #3072
        // - in `patchDOMProp`, we store the actual value in the `el._value` property.
        // - normally, elements using `:value` bindings will not be hoisted, but if
        //   the bound value is a constant, e.g. `:value="true"` - they do get
        //   hoisted.
        // - in production, hoisted nodes are cloned when subsequent inserts, but
        //   cloneNode() does not copy the custom property we attached.
        // - This may need to account for other custom DOM properties we attach to
        //   elements in addition to `_value` in the future.
        if (`_value` in el) {
            cloned._value = el._value;
        }
        return cloned;
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG, start, end) {
        // <parent> before | first ... last | anchor </parent>
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        // #5308 can only take cached path if:
        // - has a single root node
        // - nextSibling info is still available
        if (start && (start === end || start.nextSibling)) {
            // cached
            while (true) {
                parent.insertBefore(start.cloneNode(true), anchor);
                if (start === end || !(start = start.nextSibling))
                    break;
            }
        }
        else {
            // fresh insert
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
                // remove outer svg wrapper
                const wrapper = template.firstChild;
                while (wrapper.firstChild) {
                    template.appendChild(wrapper.firstChild);
                }
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};

// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    const transitionClasses = el._vtc;
    if (transitionClasses) {
        value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(' ');
    }
    if (value == null) {
        el.removeAttribute('class');
    }
    else if (isSVG) {
        el.setAttribute('class', value);
    }
    else {
        el.className = value;
    }
}

function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = isString$1(next);
    if (next && !isCssString) {
        for (const key in next) {
            setStyle(style, key, next[key]);
        }
        if (prev && !isString$1(prev)) {
            for (const key in prev) {
                if (next[key] == null) {
                    setStyle(style, key, '');
                }
            }
        }
    }
    else {
        const currentDisplay = style.display;
        if (isCssString) {
            if (prev !== next) {
                style.cssText = next;
            }
        }
        else if (prev) {
            el.removeAttribute('style');
        }
        // indicates that the `display` of the element is controlled by `v-show`,
        // so we always keep the current `display` value regardless of the `style`
        // value, thus handing over control to `v-show`.
        if ('_vod' in el) {
            style.display = currentDisplay;
        }
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if (isArray$1(val)) {
        val.forEach(v => setStyle(style, name, v));
    }
    else {
        if (val == null)
            val = '';
        if (name.startsWith('--')) {
            // custom property definition
            style.setProperty(name, val);
        }
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
                // !important
                style.setProperty(hyphenate(prefixed), val.replace(importantRE, ''), 'important');
            }
            else {
                style[prefixed] = val;
            }
        }
    }
}
const prefixes = ['Webkit', 'Moz', 'ms'];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
        return cached;
    }
    let name = camelize(rawName);
    if (name !== 'filter' && name in style) {
        return (prefixCache[rawName] = name);
    }
    name = capitalize$1(name);
    for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name;
        if (prefixed in style) {
            return (prefixCache[rawName] = prefixed);
        }
    }
    return rawName;
}

const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = isSpecialBooleanAttr(key);
        if (value == null || (isBoolean && !includeBooleanAttr(value))) {
            el.removeAttribute(key);
        }
        else {
            el.setAttribute(key, isBoolean ? '' : value);
        }
    }
}

// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, 
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' &&
        el.tagName !== 'PROGRESS' &&
        // custom elements may use _value internally
        !el.tagName.includes('-')) {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue ||
            // #4956: always set for OPTION elements because its value falls back to
            // textContent if no value attribute is present. And setting .value for
            // OPTION has no side effect
            el.tagName === 'OPTION') {
            el.value = newValue;
        }
        if (value == null) {
            el.removeAttribute(key);
        }
        return;
    }
    let needRemove = false;
    if (value === '' || value == null) {
        const type = typeof el[key];
        if (type === 'boolean') {
            // e.g. <select multiple> compiles to { multiple: '' }
            value = includeBooleanAttr(value);
        }
        else if (value == null && type === 'string') {
            // e.g. <div :id="null">
            value = '';
            needRemove = true;
        }
        else if (type === 'number') {
            // e.g. <img :width="null">
            // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
            value = 0;
            needRemove = true;
        }
    }
    // some properties perform value validation and throw,
    // some properties has getter, no setter, will error in 'use strict'
    // eg. <select :type="null"></select> <select :willValidate="null"></select>
    try {
        el[key] = value;
    }
    catch (e) {
    }
    needRemove && el.removeAttribute(key);
}

// Async edge case fix requires storing an event listener's attach timestamp.
const [_getNow, skipTimestampCheck] = /*#__PURE__*/ (() => {
    let _getNow = Date.now;
    let skipTimestampCheck = false;
    if (typeof window !== 'undefined') {
        // Determine what event timestamp the browser is using. Annoyingly, the
        // timestamp can either be hi-res (relative to page load) or low-res
        // (relative to UNIX epoch), so in order to compare time we have to use the
        // same timestamp type when saving the flush timestamp.
        if (Date.now() > document.createEvent('Event').timeStamp) {
            // if the low-res timestamp which is bigger than the event timestamp
            // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
            // and we need to use the hi-res version for event listeners as well.
            _getNow = performance.now.bind(performance);
        }
        // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
        // and does not fire microtasks in between event propagation, so safe to exclude.
        const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
        skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
    }
    return [_getNow, skipTimestampCheck];
})();
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = /*#__PURE__*/ Promise.resolve();
const reset = () => {
    cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), (cachedNow = _getNow()));
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
        // patch
        existingInvoker.value = nextValue;
    }
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
            addEventListener(el, name, invoker, options);
        }
        else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while ((m = name.match(optionsModifierRE))) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    const event = name[2] === ':' ? name.slice(3) : hyphenate(name.slice(2));
    return [event, options];
}
function createInvoker(initialValue, instance) {
    const invoker = (e) => {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
            callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* ErrorCodes.NATIVE_EVENT_HANDLER */, [e]);
        }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if (isArray$1(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map(fn => (e) => !e._stopped && fn && fn(e));
    }
    else {
        return value;
    }
}

const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    if (key === 'class') {
        patchClass(el, nextValue, isSVG);
    }
    else if (key === 'style') {
        patchStyle(el, prevValue, nextValue);
    }
    else if (isOn(key)) {
        // ignore v-model listeners
        if (!isModelListener(key)) {
            patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
    }
    else if (key[0] === '.'
        ? ((key = key.slice(1)), true)
        : key[0] === '^'
            ? ((key = key.slice(1)), false)
            : shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    }
    else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === 'true-value') {
            el._trueValue = nextValue;
        }
        else if (key === 'false-value') {
            el._falseValue = nextValue;
        }
        patchAttr(el, key, nextValue, isSVG);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML & textContent
        if (key === 'innerHTML' || key === 'textContent') {
            return true;
        }
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && isFunction$1(value)) {
            return true;
        }
        return false;
    }
    // these are enumerated attrs, however their corresponding DOM properties
    // are actually booleans - this leads to setting it with a string "false"
    // value leading it to be coerced to `true`, so we need to always treat
    // them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable' || key === 'translate') {
        return false;
    }
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === 'form') {
        return false;
    }
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') {
        return false;
    }
    // #2766 <textarea type> must be set as attribute
    if (key === 'type' && el.tagName === 'TEXTAREA') {
        return false;
    }
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && isString$1(value)) {
        return false;
    }
    return key in el;
}
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
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
(/*#__PURE__*/ extend({}, BaseTransition.props, DOMTransitionPropsValidators));

const rendererOptions = /*#__PURE__*/ extend({ patchProp }, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
function ensureRenderer() {
    return (renderer ||
        (renderer = createRenderer(rendererOptions)));
}
const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
            return;
        const component = app._component;
        if (!isFunction$1(component) && !component.render && !component.template) {
            // __UNSAFE__
            // Reason: potential execution of JS expressions in in-DOM template.
            // The user must make sure the in-DOM template is trusted. If it's
            // rendered by the server, the template should not contain any user data.
            component.template = container.innerHTML;
        }
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
            container.removeAttribute('v-cloak');
            container.setAttribute('data-v-app', '');
        }
        return proxy;
    };
    return app;
});
function normalizeContainer(container) {
    if (isString$1(container)) {
        const res = document.querySelector(container);
        return res;
    }
    return container;
}

/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
/**
 * Original Utilities
 * written by kazuya kawaguchi
 */
const inBrowser = typeof window !== 'undefined';
const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
    .replace(/\u0027/g, '\\u0027');
const isNumber = (val) => typeof val === 'number' && isFinite(val);
const isDate = (val) => toTypeString(val) === '[object Date]';
const isRegExp = (val) => toTypeString(val) === '[object RegExp]';
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
function warn(msg, err) {
    if (typeof console !== 'undefined') {
        console.warn(`[intlify] ` + msg);
        /* istanbul ignore if */
        if (err) {
            console.warn(err.stack);
        }
    }
}
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
    // prettier-ignore
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof global !== 'undefined'
                            ? global
                            : {}));
};
function escapeHtml(rawText) {
    return rawText
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
/* eslint-enable */
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isBoolean = (val) => typeof val === 'boolean';
const isObject = (val) => // eslint-disable-line
 val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
// for converting list and named values to displayed strings.
const toDisplayString = (val) => {
    return val == null
        ? ''
        : isArray(val) || (isPlainObject(val) && val.toString === objectToString)
            ? JSON.stringify(val, null, 2)
            : String(val);
};

/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */

const CompileErrorCodes = {
    // tokenizer error codes
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
    // parser error codes
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    // Special value for higher-order compilers to pick up the last code
    // to avoid collision of error codes. This should always be kept as the last
    // item.
    __EXTEND_POINT__: 15
};
function createCompileError(code, loc, options = {}) {
    const { domain, messages, args } = options;
    const msg = code;
    const error = new SyntaxError(String(msg));
    error.code = code;
    if (loc) {
        error.location = loc;
    }
    error.domain = domain;
    return error;
}

/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const IntlifyDevToolsHooks =  {
    I18nInit: 'i18n:init',
    FunctionTranslate: 'function:translate'
};

/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */

const pathStateMachine =  [];
pathStateMachine[0 /* BEFORE_PATH */] = {
    ["w" /* WORKSPACE */]: [0 /* BEFORE_PATH */],
    ["i" /* IDENT */]: [3 /* IN_IDENT */, 0 /* APPEND */],
    ["[" /* LEFT_BRACKET */]: [4 /* IN_SUB_PATH */],
    ["o" /* END_OF_FAIL */]: [7 /* AFTER_PATH */]
};
pathStateMachine[1 /* IN_PATH */] = {
    ["w" /* WORKSPACE */]: [1 /* IN_PATH */],
    ["." /* DOT */]: [2 /* BEFORE_IDENT */],
    ["[" /* LEFT_BRACKET */]: [4 /* IN_SUB_PATH */],
    ["o" /* END_OF_FAIL */]: [7 /* AFTER_PATH */]
};
pathStateMachine[2 /* BEFORE_IDENT */] = {
    ["w" /* WORKSPACE */]: [2 /* BEFORE_IDENT */],
    ["i" /* IDENT */]: [3 /* IN_IDENT */, 0 /* APPEND */],
    ["0" /* ZERO */]: [3 /* IN_IDENT */, 0 /* APPEND */]
};
pathStateMachine[3 /* IN_IDENT */] = {
    ["i" /* IDENT */]: [3 /* IN_IDENT */, 0 /* APPEND */],
    ["0" /* ZERO */]: [3 /* IN_IDENT */, 0 /* APPEND */],
    ["w" /* WORKSPACE */]: [1 /* IN_PATH */, 1 /* PUSH */],
    ["." /* DOT */]: [2 /* BEFORE_IDENT */, 1 /* PUSH */],
    ["[" /* LEFT_BRACKET */]: [4 /* IN_SUB_PATH */, 1 /* PUSH */],
    ["o" /* END_OF_FAIL */]: [7 /* AFTER_PATH */, 1 /* PUSH */]
};
pathStateMachine[4 /* IN_SUB_PATH */] = {
    ["'" /* SINGLE_QUOTE */]: [5 /* IN_SINGLE_QUOTE */, 0 /* APPEND */],
    ["\"" /* DOUBLE_QUOTE */]: [6 /* IN_DOUBLE_QUOTE */, 0 /* APPEND */],
    ["[" /* LEFT_BRACKET */]: [
        4 /* IN_SUB_PATH */,
        2 /* INC_SUB_PATH_DEPTH */
    ],
    ["]" /* RIGHT_BRACKET */]: [1 /* IN_PATH */, 3 /* PUSH_SUB_PATH */],
    ["o" /* END_OF_FAIL */]: 8 /* ERROR */,
    ["l" /* ELSE */]: [4 /* IN_SUB_PATH */, 0 /* APPEND */]
};
pathStateMachine[5 /* IN_SINGLE_QUOTE */] = {
    ["'" /* SINGLE_QUOTE */]: [4 /* IN_SUB_PATH */, 0 /* APPEND */],
    ["o" /* END_OF_FAIL */]: 8 /* ERROR */,
    ["l" /* ELSE */]: [5 /* IN_SINGLE_QUOTE */, 0 /* APPEND */]
};
pathStateMachine[6 /* IN_DOUBLE_QUOTE */] = {
    ["\"" /* DOUBLE_QUOTE */]: [4 /* IN_SUB_PATH */, 0 /* APPEND */],
    ["o" /* END_OF_FAIL */]: 8 /* ERROR */,
    ["l" /* ELSE */]: [6 /* IN_DOUBLE_QUOTE */, 0 /* APPEND */]
};
/**
 * Check if an expression is a literal value.
 */
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
    return literalValueRE.test(exp);
}
/**
 * Strip quotes from a string
 */
function stripQuotes(str) {
    const a = str.charCodeAt(0);
    const b = str.charCodeAt(str.length - 1);
    return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}
/**
 * Determine the type of a character in a keypath.
 */
function getPathCharType(ch) {
    if (ch === undefined || ch === null) {
        return "o" /* END_OF_FAIL */;
    }
    const code = ch.charCodeAt(0);
    switch (code) {
        case 0x5b: // [
        case 0x5d: // ]
        case 0x2e: // .
        case 0x22: // "
        case 0x27: // '
            return ch;
        case 0x5f: // _
        case 0x24: // $
        case 0x2d: // -
            return "i" /* IDENT */;
        case 0x09: // Tab (HT)
        case 0x0a: // Newline (LF)
        case 0x0d: // Return (CR)
        case 0xa0: // No-break space (NBSP)
        case 0xfeff: // Byte Order Mark (BOM)
        case 0x2028: // Line Separator (LS)
        case 0x2029: // Paragraph Separator (PS)
            return "w" /* WORKSPACE */;
    }
    return "i" /* IDENT */;
}
/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */
function formatSubPath(path) {
    const trimmed = path.trim();
    // invalid leading 0
    if (path.charAt(0) === '0' && isNaN(parseInt(path))) {
        return false;
    }
    return isLiteral(trimmed)
        ? stripQuotes(trimmed)
        : "*" /* ASTARISK */ + trimmed;
}
/**
 * Parse a string path into an array of segments
 */
function parse(path) {
    const keys = [];
    let index = -1;
    let mode = 0 /* BEFORE_PATH */;
    let subPathDepth = 0;
    let c;
    let key; // eslint-disable-line
    let newChar;
    let type;
    let transition;
    let action;
    let typeMap;
    const actions = [];
    actions[0 /* APPEND */] = () => {
        if (key === undefined) {
            key = newChar;
        }
        else {
            key += newChar;
        }
    };
    actions[1 /* PUSH */] = () => {
        if (key !== undefined) {
            keys.push(key);
            key = undefined;
        }
    };
    actions[2 /* INC_SUB_PATH_DEPTH */] = () => {
        actions[0 /* APPEND */]();
        subPathDepth++;
    };
    actions[3 /* PUSH_SUB_PATH */] = () => {
        if (subPathDepth > 0) {
            subPathDepth--;
            mode = 4 /* IN_SUB_PATH */;
            actions[0 /* APPEND */]();
        }
        else {
            subPathDepth = 0;
            if (key === undefined) {
                return false;
            }
            key = formatSubPath(key);
            if (key === false) {
                return false;
            }
            else {
                actions[1 /* PUSH */]();
            }
        }
    };
    function maybeUnescapeQuote() {
        const nextChar = path[index + 1];
        if ((mode === 5 /* IN_SINGLE_QUOTE */ &&
            nextChar === "'" /* SINGLE_QUOTE */) ||
            (mode === 6 /* IN_DOUBLE_QUOTE */ &&
                nextChar === "\"" /* DOUBLE_QUOTE */)) {
            index++;
            newChar = '\\' + nextChar;
            actions[0 /* APPEND */]();
            return true;
        }
    }
    while (mode !== null) {
        index++;
        c = path[index];
        if (c === '\\' && maybeUnescapeQuote()) {
            continue;
        }
        type = getPathCharType(c);
        typeMap = pathStateMachine[mode];
        transition = typeMap[type] || typeMap["l" /* ELSE */] || 8 /* ERROR */;
        // check parse error
        if (transition === 8 /* ERROR */) {
            return;
        }
        mode = transition[0];
        if (transition[1] !== undefined) {
            action = actions[transition[1]];
            if (action) {
                newChar = c;
                if (action() === false) {
                    return;
                }
            }
        }
        // check parse finish
        if (mode === 7 /* AFTER_PATH */) {
            return keys;
        }
    }
}
// path token cache
const cache = new Map();
/**
 * key-value message resolver
 *
 * @remarks
 * Resolves messages with the key-value structure. Note that messages with a hierarchical structure such as objects cannot be resolved
 *
 * @param obj - A target object to be resolved with path
 * @param path - A {@link Path | path} to resolve the value of message
 *
 * @returns A resolved {@link PathValue | path value}
 *
 * @VueI18nGeneral
 */
function resolveWithKeyValue(obj, path) {
    return isObject(obj) ? obj[path] : null;
}
/**
 * message resolver
 *
 * @remarks
 * Resolves messages. messages with a hierarchical structure such as objects can be resolved. This resolver is used in VueI18n as default.
 *
 * @param obj - A target object to be resolved with path
 * @param path - A {@link Path | path} to resolve the value of message
 *
 * @returns A resolved {@link PathValue | path value}
 *
 * @VueI18nGeneral
 */
function resolveValue(obj, path) {
    // check object
    if (!isObject(obj)) {
        return null;
    }
    // parse path
    let hit = cache.get(path);
    if (!hit) {
        hit = parse(path);
        if (hit) {
            cache.set(path, hit);
        }
    }
    // check hit
    if (!hit) {
        return null;
    }
    // resolve path value
    const len = hit.length;
    let last = obj;
    let i = 0;
    while (i < len) {
        const val = last[hit[i]];
        if (val === undefined) {
            return null;
        }
        last = val;
        i++;
    }
    return last;
}

const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => ''; // eslint-disable-line
const DEFAULT_MESSAGE_DATA_TYPE = 'text';
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? '' : values.join('');
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
    choice = Math.abs(choice);
    if (choicesLength === 2) {
        // prettier-ignore
        return choice
            ? choice > 1
                ? 1
                : 0
            : 1;
    }
    return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
    // prettier-ignore
    const index = isNumber(options.pluralIndex)
        ? options.pluralIndex
        : -1;
    // prettier-ignore
    return options.named && (isNumber(options.named.count) || isNumber(options.named.n))
        ? isNumber(options.named.count)
            ? options.named.count
            : isNumber(options.named.n)
                ? options.named.n
                : index
        : index;
}
function normalizeNamed(pluralIndex, props) {
    if (!props.count) {
        props.count = pluralIndex;
    }
    if (!props.n) {
        props.n = pluralIndex;
    }
}
function createMessageContext(options = {}) {
    const locale = options.locale;
    const pluralIndex = getPluralIndex(options);
    const pluralRule = isObject(options.pluralRules) &&
        isString(locale) &&
        isFunction(options.pluralRules[locale])
        ? options.pluralRules[locale]
        : pluralDefault;
    const orgPluralRule = isObject(options.pluralRules) &&
        isString(locale) &&
        isFunction(options.pluralRules[locale])
        ? pluralDefault
        : undefined;
    const plural = (messages) => {
        return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
    };
    const _list = options.list || [];
    const list = (index) => _list[index];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _named = options.named || {};
    isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
    const named = (key) => _named[key];
    function message(key) {
        // prettier-ignore
        const msg = isFunction(options.messages)
            ? options.messages(key)
            : isObject(options.messages)
                ? options.messages[key]
                : false;
        return !msg
            ? options.parent
                ? options.parent.message(key) // resolve from parent messages
                : DEFAULT_MESSAGE
            : msg;
    }
    const _modifier = (name) => options.modifiers
        ? options.modifiers[name]
        : DEFAULT_MODIFIER;
    const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize)
        ? options.processor.normalize
        : DEFAULT_NORMALIZE;
    const interpolate = isPlainObject(options.processor) &&
        isFunction(options.processor.interpolate)
        ? options.processor.interpolate
        : DEFAULT_INTERPOLATE;
    const type = isPlainObject(options.processor) && isString(options.processor.type)
        ? options.processor.type
        : DEFAULT_MESSAGE_DATA_TYPE;
    const linked = (key, ...args) => {
        const [arg1, arg2] = args;
        let type = 'text';
        let modifier = '';
        if (args.length === 1) {
            if (isObject(arg1)) {
                modifier = arg1.modifier || modifier;
                type = arg1.type || type;
            }
            else if (isString(arg1)) {
                modifier = arg1 || modifier;
            }
        }
        else if (args.length === 2) {
            if (isString(arg1)) {
                modifier = arg1 || modifier;
            }
            if (isString(arg2)) {
                type = arg2 || type;
            }
        }
        let msg = message(key)(ctx);
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        if (type === 'vnode' && isArray(msg) && modifier) {
            msg = msg[0];
        }
        return modifier ? _modifier(modifier)(msg, type) : msg;
    };
    const ctx = {
        ["list" /* LIST */]: list,
        ["named" /* NAMED */]: named,
        ["plural" /* PLURAL */]: plural,
        ["linked" /* LINKED */]: linked,
        ["message" /* MESSAGE */]: message,
        ["type" /* TYPE */]: type,
        ["interpolate" /* INTERPOLATE */]: interpolate,
        ["normalize" /* NORMALIZE */]: normalize
    };
    return ctx;
}

let devtools = null;
function setDevToolsHook(hook) {
    devtools = hook;
}
function initI18nDevTools(i18n, version, meta) {
    // TODO: queue if devtools is undefined
    devtools &&
        devtools.emit(IntlifyDevToolsHooks.I18nInit, {
            timestamp: Date.now(),
            i18n,
            version,
            meta
        });
}
const translateDevTools = /* #__PURE__*/ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
    return (payloads) => devtools && devtools.emit(hook, payloads);
}

const CoreWarnCodes = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    __EXTEND_POINT__: 7
};

/**
 * Fallback with simple implemenation
 *
 * @remarks
 * A fallback locale function implemented with a simple fallback algorithm.
 *
 * Basically, it returns the value as specified in the `fallbackLocale` props, and is processed with the fallback inside intlify.
 *
 * @param ctx - A {@link CoreContext | context}
 * @param fallback - A {@link FallbackLocale | fallback locale}
 * @param start - A starting {@link Locale | locale}
 *
 * @returns Fallback locales
 *
 * @VueI18nGeneral
 */
function fallbackWithSimple(ctx, fallback, start // eslint-disable-line @typescript-eslint/no-unused-vars
) {
    // prettier-ignore
    return [...new Set([
            start,
            ...(isArray(fallback)
                ? fallback
                : isObject(fallback)
                    ? Object.keys(fallback)
                    : isString(fallback)
                        ? [fallback]
                        : [start])
        ])];
}
/**
 * Fallback with locale chain
 *
 * @remarks
 * A fallback locale function implemented with a fallback chain algorithm. It's used in VueI18n as default.
 *
 * @param ctx - A {@link CoreContext | context}
 * @param fallback - A {@link FallbackLocale | fallback locale}
 * @param start - A starting {@link Locale | locale}
 *
 * @returns Fallback locales
 *
 * @VueI18nSee [Fallbacking](../guide/essentials/fallback)
 *
 * @VueI18nGeneral
 */
function fallbackWithLocaleChain(ctx, fallback, start) {
    const startLocale = isString(start) ? start : DEFAULT_LOCALE;
    const context = ctx;
    if (!context.__localeChainCache) {
        context.__localeChainCache = new Map();
    }
    let chain = context.__localeChainCache.get(startLocale);
    if (!chain) {
        chain = [];
        // first block defined by start
        let block = [start];
        // while any intervening block found
        while (isArray(block)) {
            block = appendBlockToChain(chain, block, fallback);
        }
        // prettier-ignore
        // last block defined by default
        const defaults = isArray(fallback) || !isPlainObject(fallback)
            ? fallback
            : fallback['default']
                ? fallback['default']
                : null;
        // convert defaults to array
        block = isString(defaults) ? [defaults] : defaults;
        if (isArray(block)) {
            appendBlockToChain(chain, block, false);
        }
        context.__localeChainCache.set(startLocale, chain);
    }
    return chain;
}
function appendBlockToChain(chain, block, blocks) {
    let follow = true;
    for (let i = 0; i < block.length && isBoolean(follow); i++) {
        const locale = block[i];
        if (isString(locale)) {
            follow = appendLocaleToChain(chain, block[i], blocks);
        }
    }
    return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
    let follow;
    const tokens = locale.split('-');
    do {
        const target = tokens.join('-');
        follow = appendItemToChain(chain, target, blocks);
        tokens.splice(-1, 1);
    } while (tokens.length && follow === true);
    return follow;
}
function appendItemToChain(chain, target, blocks) {
    let follow = false;
    if (!chain.includes(target)) {
        follow = true;
        if (target) {
            follow = target[target.length - 1] !== '!';
            const locale = target.replace(/!/g, '');
            chain.push(locale);
            if ((isArray(blocks) || isPlainObject(blocks)) &&
                blocks[locale] // eslint-disable-line @typescript-eslint/no-explicit-any
            ) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                follow = blocks[locale];
            }
        }
    }
    return follow;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Intlify core-base version
 * @internal
 */
const VERSION$1 = '9.2.2';
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = 'en-US';
const MISSING_RESOLVE_VALUE = '';
const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
    return {
        upper: (val, type) => {
            // prettier-ignore
            return type === 'text' && isString(val)
                ? val.toUpperCase()
                : type === 'vnode' && isObject(val) && '__v_isVNode' in val
                    ? val.children.toUpperCase()
                    : val;
        },
        lower: (val, type) => {
            // prettier-ignore
            return type === 'text' && isString(val)
                ? val.toLowerCase()
                : type === 'vnode' && isObject(val) && '__v_isVNode' in val
                    ? val.children.toLowerCase()
                    : val;
        },
        capitalize: (val, type) => {
            // prettier-ignore
            return (type === 'text' && isString(val)
                ? capitalize(val)
                : type === 'vnode' && isObject(val) && '__v_isVNode' in val
                    ? capitalize(val.children)
                    : val);
        }
    };
}
let _compiler;
let _resolver;
/**
 * Register the message resolver
 *
 * @param resolver - A {@link MessageResolver} function
 *
 * @VueI18nGeneral
 */
function registerMessageResolver(resolver) {
    _resolver = resolver;
}
let _fallbacker;
/**
 * Register the locale fallbacker
 *
 * @param fallbacker - A {@link LocaleFallbacker} function
 *
 * @VueI18nGeneral
 */
function registerLocaleFallbacker(fallbacker) {
    _fallbacker = fallbacker;
}
// Additional Meta for Intlify DevTools
let _additionalMeta = null;
const setAdditionalMeta =  (meta) => {
    _additionalMeta = meta;
};
const getAdditionalMeta =  () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = (context) => {
    _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
// ID for CoreContext
let _cid = 0;
function createCoreContext(options = {}) {
    // setup options
    const version = isString(options.version) ? options.version : VERSION$1;
    const locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
    const fallbackLocale = isArray(options.fallbackLocale) ||
        isPlainObject(options.fallbackLocale) ||
        isString(options.fallbackLocale) ||
        options.fallbackLocale === false
        ? options.fallbackLocale
        : locale;
    const messages = isPlainObject(options.messages)
        ? options.messages
        : { [locale]: {} };
    const datetimeFormats = isPlainObject(options.datetimeFormats)
            ? options.datetimeFormats
            : { [locale]: {} }
        ;
    const numberFormats = isPlainObject(options.numberFormats)
            ? options.numberFormats
            : { [locale]: {} }
        ;
    const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
    const pluralRules = options.pluralRules || {};
    const missing = isFunction(options.missing) ? options.missing : null;
    const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn)
        ? options.missingWarn
        : true;
    const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn)
        ? options.fallbackWarn
        : true;
    const fallbackFormat = !!options.fallbackFormat;
    const unresolving = !!options.unresolving;
    const postTranslation = isFunction(options.postTranslation)
        ? options.postTranslation
        : null;
    const processor = isPlainObject(options.processor) ? options.processor : null;
    const warnHtmlMessage = isBoolean(options.warnHtmlMessage)
        ? options.warnHtmlMessage
        : true;
    const escapeParameter = !!options.escapeParameter;
    const messageCompiler = isFunction(options.messageCompiler)
        ? options.messageCompiler
        : _compiler;
    const messageResolver = isFunction(options.messageResolver)
        ? options.messageResolver
        : _resolver || resolveWithKeyValue;
    const localeFallbacker = isFunction(options.localeFallbacker)
        ? options.localeFallbacker
        : _fallbacker || fallbackWithSimple;
    const fallbackContext = isObject(options.fallbackContext)
        ? options.fallbackContext
        : undefined;
    const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
    // setup internal options
    const internalOptions = options;
    const __datetimeFormatters = isObject(internalOptions.__datetimeFormatters)
            ? internalOptions.__datetimeFormatters
            : new Map()
        ;
    const __numberFormatters = isObject(internalOptions.__numberFormatters)
            ? internalOptions.__numberFormatters
            : new Map()
        ;
    const __meta = isObject(internalOptions.__meta) ? internalOptions.__meta : {};
    _cid++;
    const context = {
        version,
        cid: _cid,
        locale,
        fallbackLocale,
        messages,
        modifiers,
        pluralRules,
        missing,
        missingWarn,
        fallbackWarn,
        fallbackFormat,
        unresolving,
        postTranslation,
        processor,
        warnHtmlMessage,
        escapeParameter,
        messageCompiler,
        messageResolver,
        localeFallbacker,
        fallbackContext,
        onWarn,
        __meta
    };
    {
        context.datetimeFormats = datetimeFormats;
        context.numberFormats = numberFormats;
        context.__datetimeFormatters = __datetimeFormatters;
        context.__numberFormatters = __numberFormatters;
    }
    // NOTE: experimental !!
    if (__INTLIFY_PROD_DEVTOOLS__) {
        initI18nDevTools(context, version, __meta);
    }
    return context;
}
/** @internal */
function handleMissing(context, key, locale, missingWarn, type) {
    const { missing, onWarn } = context;
    if (missing !== null) {
        const ret = missing(context, locale, key, type);
        return isString(ret) ? ret : key;
    }
    else {
        return key;
    }
}
/** @internal */
function updateFallbackLocale(ctx, locale, fallback) {
    const context = ctx;
    context.__localeChainCache = new Map();
    ctx.localeFallbacker(ctx, fallback, locale);
}

let code$1 = CompileErrorCodes.__EXTEND_POINT__;
const inc$1 = () => ++code$1;
const CoreErrorCodes = {
    INVALID_ARGUMENT: code$1,
    INVALID_DATE_ARGUMENT: inc$1(),
    INVALID_ISO_DATE_ARGUMENT: inc$1(),
    __EXTEND_POINT__: inc$1() // 18
};
function createCoreError(code) {
    return createCompileError(code, null, undefined);
}

const NOOP_MESSAGE_FUNCTION = () => '';
const isMessageFunction = (val) => isFunction(val);
// implementation of `translate` function
function translate(context, ...args) {
    const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
    const [key, options] = parseTranslateArgs(...args);
    const missingWarn = isBoolean(options.missingWarn)
        ? options.missingWarn
        : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn)
        ? options.fallbackWarn
        : context.fallbackWarn;
    const escapeParameter = isBoolean(options.escapeParameter)
        ? options.escapeParameter
        : context.escapeParameter;
    const resolvedMessage = !!options.resolvedMessage;
    // prettier-ignore
    const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) // default by function option
        ? !isBoolean(options.default)
            ? options.default
            : (!messageCompiler ? () => key : key)
        : fallbackFormat // default by `fallbackFormat` option
            ? (!messageCompiler ? () => key : key)
            : '';
    const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== '';
    const locale = isString(options.locale) ? options.locale : context.locale;
    // escape params
    escapeParameter && escapeParams(options);
    // resolve message format
    // eslint-disable-next-line prefer-const
    let [formatScope, targetLocale, message] = !resolvedMessage
        ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn)
        : [
            key,
            locale,
            messages[locale] || {}
        ];
    // NOTE:
    //  Fix to work around `ssrTransfrom` bug in Vite.
    //  https://github.com/vitejs/vite/issues/4306
    //  To get around this, use temporary variables.
    //  https://github.com/nuxt/framework/issues/1461#issuecomment-954606243
    let format = formatScope;
    // if you use default message, set it as message format!
    let cacheBaseKey = key;
    if (!resolvedMessage &&
        !(isString(format) || isMessageFunction(format))) {
        if (enableDefaultMsg) {
            format = defaultMsgOrKey;
            cacheBaseKey = format;
        }
    }
    // checking message format and target locale
    if (!resolvedMessage &&
        (!(isString(format) || isMessageFunction(format)) ||
            !isString(targetLocale))) {
        return unresolving ? NOT_REOSLVED : key;
    }
    // setup compile error detecting
    let occurred = false;
    const errorDetector = () => {
        occurred = true;
    };
    // compile message format
    const msg = !isMessageFunction(format)
        ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector)
        : format;
    // if occurred compile error, return the message format
    if (occurred) {
        return format;
    }
    // evaluate message with context
    const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
    const msgContext = createMessageContext(ctxOptions);
    const messaged = evaluateMessage(context, msg, msgContext);
    // if use post translation option, proceed it with handler
    const ret = postTranslation
        ? postTranslation(messaged, key)
        : messaged;
    // NOTE: experimental !!
    if (__INTLIFY_PROD_DEVTOOLS__) {
        // prettier-ignore
        const payloads = {
            timestamp: Date.now(),
            key: isString(key)
                ? key
                : isMessageFunction(format)
                    ? format.key
                    : '',
            locale: targetLocale || (isMessageFunction(format)
                ? format.locale
                : ''),
            format: isString(format)
                ? format
                : isMessageFunction(format)
                    ? format.source
                    : '',
            message: ret
        };
        payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
        translateDevTools(payloads);
    }
    return ret;
}
function escapeParams(options) {
    if (isArray(options.list)) {
        options.list = options.list.map(item => isString(item) ? escapeHtml(item) : item);
    }
    else if (isObject(options.named)) {
        Object.keys(options.named).forEach(key => {
            if (isString(options.named[key])) {
                options.named[key] = escapeHtml(options.named[key]);
            }
        });
    }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
    const { messages, onWarn, messageResolver: resolveValue, localeFallbacker } = context;
    const locales = localeFallbacker(context, fallbackLocale, locale); // eslint-disable-line @typescript-eslint/no-explicit-any
    let message = {};
    let targetLocale;
    let format = null;
    const type = 'translate';
    for (let i = 0; i < locales.length; i++) {
        targetLocale = locales[i];
        message =
            messages[targetLocale] || {};
        if ((format = resolveValue(message, key)) === null) {
            // if null, resolve with object key path
            format = message[key]; // eslint-disable-line @typescript-eslint/no-explicit-any
        }
        if (isString(format) || isFunction(format))
            break;
        const missingRet = handleMissing(context, // eslint-disable-line @typescript-eslint/no-explicit-any
        key, targetLocale, missingWarn, type);
        if (missingRet !== key) {
            format = missingRet;
        }
    }
    return [format, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, errorDetector) {
    const { messageCompiler, warnHtmlMessage } = context;
    if (isMessageFunction(format)) {
        const msg = format;
        msg.locale = msg.locale || targetLocale;
        msg.key = msg.key || key;
        return msg;
    }
    if (messageCompiler == null) {
        const msg = (() => format);
        msg.locale = targetLocale;
        msg.key = key;
        return msg;
    }
    const msg = messageCompiler(format, getCompileOptions(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, errorDetector));
    msg.locale = targetLocale;
    msg.key = key;
    msg.source = format;
    return msg;
}
function evaluateMessage(context, msg, msgCtx) {
    const messaged = msg(msgCtx);
    return messaged;
}
/** @internal */
function parseTranslateArgs(...args) {
    const [arg1, arg2, arg3] = args;
    const options = {};
    if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1)) {
        throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    // prettier-ignore
    const key = isNumber(arg1)
        ? String(arg1)
        : isMessageFunction(arg1)
            ? arg1
            : arg1;
    if (isNumber(arg2)) {
        options.plural = arg2;
    }
    else if (isString(arg2)) {
        options.default = arg2;
    }
    else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
        options.named = arg2;
    }
    else if (isArray(arg2)) {
        options.list = arg2;
    }
    if (isNumber(arg3)) {
        options.plural = arg3;
    }
    else if (isString(arg3)) {
        options.default = arg3;
    }
    else if (isPlainObject(arg3)) {
        assign(options, arg3);
    }
    return [key, options];
}
function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
    return {
        warnHtmlMessage,
        onError: (err) => {
            errorDetector && errorDetector(err);
            {
                throw err;
            }
        },
        onCacheKey: (source) => generateFormatCacheKey(locale, key, source)
    };
}
function getMessageContextOptions(context, locale, message, options) {
    const { modifiers, pluralRules, messageResolver: resolveValue, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
    const resolveMessage = (key) => {
        let val = resolveValue(message, key);
        // fallback to root context
        if (val == null && fallbackContext) {
            const [, , message] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
            val = resolveValue(message, key);
        }
        if (isString(val)) {
            let occurred = false;
            const errorDetector = () => {
                occurred = true;
            };
            const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
            return !occurred
                ? msg
                : NOOP_MESSAGE_FUNCTION;
        }
        else if (isMessageFunction(val)) {
            return val;
        }
        else {
            // TODO: should be implemented warning message
            return NOOP_MESSAGE_FUNCTION;
        }
    };
    const ctxOptions = {
        locale,
        modifiers,
        pluralRules,
        messages: resolveMessage
    };
    if (context.processor) {
        ctxOptions.processor = context.processor;
    }
    if (options.list) {
        ctxOptions.list = options.list;
    }
    if (options.named) {
        ctxOptions.named = options.named;
    }
    if (isNumber(options.plural)) {
        ctxOptions.pluralIndex = options.plural;
    }
    return ctxOptions;
}

// implementation of `datetime` function
function datetime(context, ...args) {
    const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
    const { __datetimeFormatters } = context;
    const [key, value, options, overrides] = parseDateTimeArgs(...args);
    const missingWarn = isBoolean(options.missingWarn)
        ? options.missingWarn
        : context.missingWarn;
    isBoolean(options.fallbackWarn)
        ? options.fallbackWarn
        : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = localeFallbacker(context, // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale, locale);
    if (!isString(key) || key === '') {
        return new Intl.DateTimeFormat(locale, overrides).format(value);
    }
    // resolve format
    let datetimeFormat = {};
    let targetLocale;
    let format = null;
    const type = 'datetime format';
    for (let i = 0; i < locales.length; i++) {
        targetLocale = locales[i];
        datetimeFormat =
            datetimeFormats[targetLocale] || {};
        format = datetimeFormat[key];
        if (isPlainObject(format))
            break;
        handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
    }
    // checking format and target locale
    if (!isPlainObject(format) || !isString(targetLocale)) {
        return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
        id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __datetimeFormatters.get(id);
    if (!formatter) {
        formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format, overrides));
        __datetimeFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
}
/** @internal */
const DATETIME_FORMAT_OPTIONS_KEYS = [
    'localeMatcher',
    'weekday',
    'era',
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'second',
    'timeZoneName',
    'formatMatcher',
    'hour12',
    'timeZone',
    'dateStyle',
    'timeStyle',
    'calendar',
    'dayPeriod',
    'numberingSystem',
    'hourCycle',
    'fractionalSecondDigits'
];
/** @internal */
function parseDateTimeArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    const options = {};
    let overrides = {};
    let value;
    if (isString(arg1)) {
        // Only allow ISO strings - other date formats are often supported,
        // but may cause different results in different browsers.
        const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!matches) {
            throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
        }
        // Some browsers can not parse the iso datetime separated by space,
        // this is a compromise solution by replace the 'T'/' ' with 'T'
        const dateTime = matches[3]
            ? matches[3].trim().startsWith('T')
                ? `${matches[1].trim()}${matches[3].trim()}`
                : `${matches[1].trim()}T${matches[3].trim()}`
            : matches[1].trim();
        value = new Date(dateTime);
        try {
            // This will fail if the date is not valid
            value.toISOString();
        }
        catch (e) {
            throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
        }
    }
    else if (isDate(arg1)) {
        if (isNaN(arg1.getTime())) {
            throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
        }
        value = arg1;
    }
    else if (isNumber(arg1)) {
        value = arg1;
    }
    else {
        throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    if (isString(arg2)) {
        options.key = arg2;
    }
    else if (isPlainObject(arg2)) {
        Object.keys(arg2).forEach(key => {
            if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
                overrides[key] = arg2[key];
            }
            else {
                options[key] = arg2[key];
            }
        });
    }
    if (isString(arg3)) {
        options.locale = arg3;
    }
    else if (isPlainObject(arg3)) {
        overrides = arg3;
    }
    if (isPlainObject(arg4)) {
        overrides = arg4;
    }
    return [options.key || '', value, options, overrides];
}
/** @internal */
function clearDateTimeFormat(ctx, locale, format) {
    const context = ctx;
    for (const key in format) {
        const id = `${locale}__${key}`;
        if (!context.__datetimeFormatters.has(id)) {
            continue;
        }
        context.__datetimeFormatters.delete(id);
    }
}

// implementation of `number` function
function number(context, ...args) {
    const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
    const { __numberFormatters } = context;
    const [key, value, options, overrides] = parseNumberArgs(...args);
    const missingWarn = isBoolean(options.missingWarn)
        ? options.missingWarn
        : context.missingWarn;
    isBoolean(options.fallbackWarn)
        ? options.fallbackWarn
        : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = localeFallbacker(context, // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale, locale);
    if (!isString(key) || key === '') {
        return new Intl.NumberFormat(locale, overrides).format(value);
    }
    // resolve format
    let numberFormat = {};
    let targetLocale;
    let format = null;
    const type = 'number format';
    for (let i = 0; i < locales.length; i++) {
        targetLocale = locales[i];
        numberFormat =
            numberFormats[targetLocale] || {};
        format = numberFormat[key];
        if (isPlainObject(format))
            break;
        handleMissing(context, key, targetLocale, missingWarn, type); // eslint-disable-line @typescript-eslint/no-explicit-any
    }
    // checking format and target locale
    if (!isPlainObject(format) || !isString(targetLocale)) {
        return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
        id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __numberFormatters.get(id);
    if (!formatter) {
        formatter = new Intl.NumberFormat(targetLocale, assign({}, format, overrides));
        __numberFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
}
/** @internal */
const NUMBER_FORMAT_OPTIONS_KEYS = [
    'localeMatcher',
    'style',
    'currency',
    'currencyDisplay',
    'currencySign',
    'useGrouping',
    'minimumIntegerDigits',
    'minimumFractionDigits',
    'maximumFractionDigits',
    'minimumSignificantDigits',
    'maximumSignificantDigits',
    'compactDisplay',
    'notation',
    'signDisplay',
    'unit',
    'unitDisplay',
    'roundingMode',
    'roundingPriority',
    'roundingIncrement',
    'trailingZeroDisplay'
];
/** @internal */
function parseNumberArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    const options = {};
    let overrides = {};
    if (!isNumber(arg1)) {
        throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
    }
    const value = arg1;
    if (isString(arg2)) {
        options.key = arg2;
    }
    else if (isPlainObject(arg2)) {
        Object.keys(arg2).forEach(key => {
            if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
                overrides[key] = arg2[key];
            }
            else {
                options[key] = arg2[key];
            }
        });
    }
    if (isString(arg3)) {
        options.locale = arg3;
    }
    else if (isPlainObject(arg3)) {
        overrides = arg3;
    }
    if (isPlainObject(arg4)) {
        overrides = arg4;
    }
    return [options.key || '', value, options, overrides];
}
/** @internal */
function clearNumberFormat(ctx, locale, format) {
    const context = ctx;
    for (const key in format) {
        const id = `${locale}__${key}`;
        if (!context.__numberFormatters.has(id)) {
            continue;
        }
        context.__numberFormatters.delete(id);
    }
}

// TODO: we could not exports for Node native ES Moudles yet...
{
    if (typeof __INTLIFY_PROD_DEVTOOLS__ !== 'boolean') {
        getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
    }
}

/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */

/**
 * Vue I18n Version
 *
 * @remarks
 * Semver format. Same format as the package.json `version` field.
 *
 * @VueI18nGeneral
 */
const VERSION = '9.2.2';
/**
 * This is only called in esm-bundler builds.
 * istanbul-ignore-next
 */
function initFeatureFlags() {
    if (typeof __INTLIFY_PROD_DEVTOOLS__ !== 'boolean') {
        getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
    }
}

CoreWarnCodes.__EXTEND_POINT__;

let code = CompileErrorCodes.__EXTEND_POINT__;
const inc = () => ++code;
const I18nErrorCodes = {
    // composer module errors
    UNEXPECTED_RETURN_TYPE: code,
    // legacy module errors
    INVALID_ARGUMENT: inc(),
    // i18n module errors
    MUST_BE_CALL_SETUP_TOP: inc(),
    NOT_INSLALLED: inc(),
    NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
    // directive module errors
    REQUIRED_VALUE: inc(),
    INVALID_VALUE: inc(),
    // vue-devtools errors
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
    NOT_INSLALLED_WITH_PROVIDE: inc(),
    // unexpected error
    UNEXPECTED_ERROR: inc(),
    // not compatible legacy vue-i18n constructor
    NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
    // bridge support vue 2.x only
    BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
    // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
    // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
    // for enhancement
    __EXTEND_POINT__: inc() // 29
};
function createI18nError(code, ...args) {
    return createCompileError(code, null, undefined);
}

const TransrateVNodeSymbol = 
/* #__PURE__*/ makeSymbol('__transrateVNode');
const DatetimePartsSymbol = /* #__PURE__*/ makeSymbol('__datetimeParts');
const NumberPartsSymbol = /* #__PURE__*/ makeSymbol('__numberParts');
const SetPluralRulesSymbol = makeSymbol('__setPluralRules');
makeSymbol('__intlifyMeta');
const InejctWithOption = /* #__PURE__*/ makeSymbol('__injectWithOption');

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Transform flat json in obj to normal json in obj
 */
function handleFlatJson(obj) {
    // check obj
    if (!isObject(obj)) {
        return obj;
    }
    for (const key in obj) {
        // check key
        if (!hasOwn(obj, key)) {
            continue;
        }
        // handle for normal json
        if (!key.includes('.')) {
            // recursive process value if value is also a object
            if (isObject(obj[key])) {
                handleFlatJson(obj[key]);
            }
        }
        // handle for flat json, transform to normal json
        else {
            // go to the last object
            const subKeys = key.split('.');
            const lastIndex = subKeys.length - 1;
            let currentObj = obj;
            for (let i = 0; i < lastIndex; i++) {
                if (!(subKeys[i] in currentObj)) {
                    currentObj[subKeys[i]] = {};
                }
                currentObj = currentObj[subKeys[i]];
            }
            // update last object value, delete old property
            currentObj[subKeys[lastIndex]] = obj[key];
            delete obj[key];
            // recursive process value if value is also a object
            if (isObject(currentObj[subKeys[lastIndex]])) {
                handleFlatJson(currentObj[subKeys[lastIndex]]);
            }
        }
    }
    return obj;
}
function getLocaleMessages(locale, options) {
    const { messages, __i18n, messageResolver, flatJson } = options;
    // prettier-ignore
    const ret = isPlainObject(messages)
        ? messages
        : isArray(__i18n)
            ? {}
            : { [locale]: {} };
    // merge locale messages of i18n custom block
    if (isArray(__i18n)) {
        __i18n.forEach(custom => {
            if ('locale' in custom && 'resource' in custom) {
                const { locale, resource } = custom;
                if (locale) {
                    ret[locale] = ret[locale] || {};
                    deepCopy(resource, ret[locale]);
                }
                else {
                    deepCopy(resource, ret);
                }
            }
            else {
                isString(custom) && deepCopy(JSON.parse(custom), ret);
            }
        });
    }
    // handle messages for flat json
    if (messageResolver == null && flatJson) {
        for (const key in ret) {
            if (hasOwn(ret, key)) {
                handleFlatJson(ret[key]);
            }
        }
    }
    return ret;
}
const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function deepCopy(src, des) {
    // src and des should both be objects, and non of then can be a array
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
        throw createI18nError(I18nErrorCodes.INVALID_VALUE);
    }
    for (const key in src) {
        if (hasOwn(src, key)) {
            if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
                // replace with src[key] when:
                // src[key] or des[key] is not a object, or
                // src[key] or des[key] is a array
                des[key] = src[key];
            }
            else {
                // src[key] and des[key] are both object, merge them
                deepCopy(src[key], des[key]);
            }
        }
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComponentOptions(instance) {
    return instance.type ;
}
function adjustI18nResources(global, options, componentOptions // eslint-disable-line @typescript-eslint/no-explicit-any
) {
    let messages = isObject(options.messages) ? options.messages : {};
    if ('__i18nGlobal' in componentOptions) {
        messages = getLocaleMessages(global.locale.value, {
            messages,
            __i18n: componentOptions.__i18nGlobal
        });
    }
    // merge locale messages
    const locales = Object.keys(messages);
    if (locales.length) {
        locales.forEach(locale => {
            global.mergeLocaleMessage(locale, messages[locale]);
        });
    }
    {
        // merge datetime formats
        if (isObject(options.datetimeFormats)) {
            const locales = Object.keys(options.datetimeFormats);
            if (locales.length) {
                locales.forEach(locale => {
                    global.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
                });
            }
        }
        // merge number formats
        if (isObject(options.numberFormats)) {
            const locales = Object.keys(options.numberFormats);
            if (locales.length) {
                locales.forEach(locale => {
                    global.mergeNumberFormat(locale, options.numberFormats[locale]);
                });
            }
        }
    }
}
function createTextNode(key) {
    return createVNode(Text, null, key, 0)
        ;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
// extend VNode interface
const DEVTOOLS_META = '__INTLIFY_META__';
let composerID = 0;
function defineCoreMissingHandler(missing) {
    return ((ctx, locale, key, type) => {
        return missing(locale, key, getCurrentInstance() || undefined, type);
    });
}
// for Intlify DevTools
const getMetaInfo =  () => {
    const instance = getCurrentInstance();
    let meta = null; // eslint-disable-line @typescript-eslint/no-explicit-any
    return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META])
        ? { [DEVTOOLS_META]: meta } // eslint-disable-line @typescript-eslint/no-explicit-any
        : null;
};
/**
 * Create composer interface factory
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createComposer(options = {}, VueI18nLegacy) {
    const { __root } = options;
    const _isGlobal = __root === undefined;
    let _inheritLocale = isBoolean(options.inheritLocale)
        ? options.inheritLocale
        : true;
    const _locale = ref(
    // prettier-ignore
    __root && _inheritLocale
        ? __root.locale.value
        : isString(options.locale)
            ? options.locale
            : DEFAULT_LOCALE);
    const _fallbackLocale = ref(
    // prettier-ignore
    __root && _inheritLocale
        ? __root.fallbackLocale.value
        : isString(options.fallbackLocale) ||
            isArray(options.fallbackLocale) ||
            isPlainObject(options.fallbackLocale) ||
            options.fallbackLocale === false
            ? options.fallbackLocale
            : _locale.value);
    const _messages = ref(getLocaleMessages(_locale.value, options));
    // prettier-ignore
    const _datetimeFormats = ref(isPlainObject(options.datetimeFormats)
            ? options.datetimeFormats
            : { [_locale.value]: {} })
        ;
    // prettier-ignore
    const _numberFormats = ref(isPlainObject(options.numberFormats)
            ? options.numberFormats
            : { [_locale.value]: {} })
        ;
    // warning suppress options
    // prettier-ignore
    let _missingWarn = __root
        ? __root.missingWarn
        : isBoolean(options.missingWarn) || isRegExp(options.missingWarn)
            ? options.missingWarn
            : true;
    // prettier-ignore
    let _fallbackWarn = __root
        ? __root.fallbackWarn
        : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn)
            ? options.fallbackWarn
            : true;
    // prettier-ignore
    let _fallbackRoot = __root
        ? __root.fallbackRoot
        : isBoolean(options.fallbackRoot)
            ? options.fallbackRoot
            : true;
    // configure fall back to root
    let _fallbackFormat = !!options.fallbackFormat;
    // runtime missing
    let _missing = isFunction(options.missing) ? options.missing : null;
    let _runtimeMissing = isFunction(options.missing)
        ? defineCoreMissingHandler(options.missing)
        : null;
    // postTranslation handler
    let _postTranslation = isFunction(options.postTranslation)
        ? options.postTranslation
        : null;
    // prettier-ignore
    let _warnHtmlMessage = __root
        ? __root.warnHtmlMessage
        : isBoolean(options.warnHtmlMessage)
            ? options.warnHtmlMessage
            : true;
    let _escapeParameter = !!options.escapeParameter;
    // custom linked modifiers
    // prettier-ignore
    const _modifiers = __root
        ? __root.modifiers
        : isPlainObject(options.modifiers)
            ? options.modifiers
            : {};
    // pluralRules
    let _pluralRules = options.pluralRules || (__root && __root.pluralRules);
    // runtime context
    // eslint-disable-next-line prefer-const
    let _context;
    const getCoreContext = () => {
        _isGlobal && setFallbackContext(null);
        const ctxOptions = {
            version: VERSION,
            locale: _locale.value,
            fallbackLocale: _fallbackLocale.value,
            messages: _messages.value,
            modifiers: _modifiers,
            pluralRules: _pluralRules,
            missing: _runtimeMissing === null ? undefined : _runtimeMissing,
            missingWarn: _missingWarn,
            fallbackWarn: _fallbackWarn,
            fallbackFormat: _fallbackFormat,
            unresolving: true,
            postTranslation: _postTranslation === null ? undefined : _postTranslation,
            warnHtmlMessage: _warnHtmlMessage,
            escapeParameter: _escapeParameter,
            messageResolver: options.messageResolver,
            __meta: { framework: 'vue' }
        };
        {
            ctxOptions.datetimeFormats = _datetimeFormats.value;
            ctxOptions.numberFormats = _numberFormats.value;
            ctxOptions.__datetimeFormatters = isPlainObject(_context)
                ? _context.__datetimeFormatters
                : undefined;
            ctxOptions.__numberFormatters = isPlainObject(_context)
                ? _context.__numberFormatters
                : undefined;
        }
        const ctx = createCoreContext(ctxOptions);
        _isGlobal && setFallbackContext(ctx);
        return ctx;
    };
    _context = getCoreContext();
    updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
    // track reactivity
    function trackReactivityValues() {
        return [
                _locale.value,
                _fallbackLocale.value,
                _messages.value,
                _datetimeFormats.value,
                _numberFormats.value
            ]
            ;
    }
    // locale
    const locale = computed({
        get: () => _locale.value,
        set: val => {
            _locale.value = val;
            _context.locale = _locale.value;
        }
    });
    // fallbackLocale
    const fallbackLocale = computed({
        get: () => _fallbackLocale.value,
        set: val => {
            _fallbackLocale.value = val;
            _context.fallbackLocale = _fallbackLocale.value;
            updateFallbackLocale(_context, _locale.value, val);
        }
    });
    // messages
    const messages = computed(() => _messages.value);
    // datetimeFormats
    const datetimeFormats = /* #__PURE__*/ computed(() => _datetimeFormats.value);
    // numberFormats
    const numberFormats = /* #__PURE__*/ computed(() => _numberFormats.value);
    // getPostTranslationHandler
    function getPostTranslationHandler() {
        return isFunction(_postTranslation) ? _postTranslation : null;
    }
    // setPostTranslationHandler
    function setPostTranslationHandler(handler) {
        _postTranslation = handler;
        _context.postTranslation = handler;
    }
    // getMissingHandler
    function getMissingHandler() {
        return _missing;
    }
    // setMissingHandler
    function setMissingHandler(handler) {
        if (handler !== null) {
            _runtimeMissing = defineCoreMissingHandler(handler);
        }
        _missing = handler;
        _context.missing = _runtimeMissing;
    }
    const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
        trackReactivityValues(); // track reactive dependency
        // NOTE: experimental !!
        let ret;
        if (__INTLIFY_PROD_DEVTOOLS__) {
            try {
                setAdditionalMeta(getMetaInfo());
                if (!_isGlobal) {
                    _context.fallbackContext = __root
                        ? getFallbackContext()
                        : undefined;
                }
                ret = fn(_context);
            }
            finally {
                setAdditionalMeta(null);
                if (!_isGlobal) {
                    _context.fallbackContext = undefined;
                }
            }
        }
        else {
            ret = fn(_context);
        }
        if (isNumber(ret) && ret === NOT_REOSLVED) {
            const [key, arg2] = argumentParser();
            return __root && _fallbackRoot
                ? fallbackSuccess(__root)
                : fallbackFail(key);
        }
        else if (successCondition(ret)) {
            return ret;
        }
        else {
            /* istanbul ignore next */
            throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
        }
    };
    // t
    function t(...args) {
        return wrapWithDeps(context => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), 'translate', root => Reflect.apply(root.t, root, [...args]), key => key, val => isString(val));
    }
    // rt
    function rt(...args) {
        const [arg1, arg2, arg3] = args;
        if (arg3 && !isObject(arg3)) {
            throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
    }
    // d
    function d(...args) {
        return wrapWithDeps(context => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), 'datetime format', root => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, val => isString(val));
    }
    // n
    function n(...args) {
        return wrapWithDeps(context => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), 'number format', root => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, val => isString(val));
    }
    // for custom processor
    function normalize(values) {
        return values.map(val => isString(val) || isNumber(val) || isBoolean(val)
            ? createTextNode(String(val))
            : val);
    }
    const interpolate = (val) => val;
    const processor = {
        normalize,
        interpolate,
        type: 'vnode'
    };
    // transrateVNode, using for `i18n-t` component
    function transrateVNode(...args) {
        return wrapWithDeps(context => {
            let ret;
            const _context = context;
            try {
                _context.processor = processor;
                ret = Reflect.apply(translate, null, [_context, ...args]);
            }
            finally {
                _context.processor = null;
            }
            return ret;
        }, () => parseTranslateArgs(...args), 'translate', 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        root => root[TransrateVNodeSymbol](...args), key => [createTextNode(key)], val => isArray(val));
    }
    // numberParts, using for `i18n-n` component
    function numberParts(...args) {
        return wrapWithDeps(context => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), 'number format', 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        root => root[NumberPartsSymbol](...args), () => [], val => isString(val) || isArray(val));
    }
    // datetimeParts, using for `i18n-d` component
    function datetimeParts(...args) {
        return wrapWithDeps(context => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), 'datetime format', 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        root => root[DatetimePartsSymbol](...args), () => [], val => isString(val) || isArray(val));
    }
    function setPluralRules(rules) {
        _pluralRules = rules;
        _context.pluralRules = _pluralRules;
    }
    // te
    function te(key, locale) {
        const targetLocale = isString(locale) ? locale : _locale.value;
        const message = getLocaleMessage(targetLocale);
        return _context.messageResolver(message, key) !== null;
    }
    function resolveMessages(key) {
        let messages = null;
        const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
        for (let i = 0; i < locales.length; i++) {
            const targetLocaleMessages = _messages.value[locales[i]] || {};
            const messageValue = _context.messageResolver(targetLocaleMessages, key);
            if (messageValue != null) {
                messages = messageValue;
                break;
            }
        }
        return messages;
    }
    // tm
    function tm(key) {
        const messages = resolveMessages(key);
        // prettier-ignore
        return messages != null
            ? messages
            : __root
                ? __root.tm(key) || {}
                : {};
    }
    // getLocaleMessage
    function getLocaleMessage(locale) {
        return (_messages.value[locale] || {});
    }
    // setLocaleMessage
    function setLocaleMessage(locale, message) {
        _messages.value[locale] = message;
        _context.messages = _messages.value;
    }
    // mergeLocaleMessage
    function mergeLocaleMessage(locale, message) {
        _messages.value[locale] = _messages.value[locale] || {};
        deepCopy(message, _messages.value[locale]);
        _context.messages = _messages.value;
    }
    // getDateTimeFormat
    function getDateTimeFormat(locale) {
        return _datetimeFormats.value[locale] || {};
    }
    // setDateTimeFormat
    function setDateTimeFormat(locale, format) {
        _datetimeFormats.value[locale] = format;
        _context.datetimeFormats = _datetimeFormats.value;
        clearDateTimeFormat(_context, locale, format);
    }
    // mergeDateTimeFormat
    function mergeDateTimeFormat(locale, format) {
        _datetimeFormats.value[locale] = assign(_datetimeFormats.value[locale] || {}, format);
        _context.datetimeFormats = _datetimeFormats.value;
        clearDateTimeFormat(_context, locale, format);
    }
    // getNumberFormat
    function getNumberFormat(locale) {
        return _numberFormats.value[locale] || {};
    }
    // setNumberFormat
    function setNumberFormat(locale, format) {
        _numberFormats.value[locale] = format;
        _context.numberFormats = _numberFormats.value;
        clearNumberFormat(_context, locale, format);
    }
    // mergeNumberFormat
    function mergeNumberFormat(locale, format) {
        _numberFormats.value[locale] = assign(_numberFormats.value[locale] || {}, format);
        _context.numberFormats = _numberFormats.value;
        clearNumberFormat(_context, locale, format);
    }
    // for debug
    composerID++;
    // watch root locale & fallbackLocale
    if (__root && inBrowser) {
        watch(__root.locale, (val) => {
            if (_inheritLocale) {
                _locale.value = val;
                _context.locale = val;
                updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
            }
        });
        watch(__root.fallbackLocale, (val) => {
            if (_inheritLocale) {
                _fallbackLocale.value = val;
                _context.fallbackLocale = val;
                updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
            }
        });
    }
    // define basic composition API!
    const composer = {
        id: composerID,
        locale,
        fallbackLocale,
        get inheritLocale() {
            return _inheritLocale;
        },
        set inheritLocale(val) {
            _inheritLocale = val;
            if (val && __root) {
                _locale.value = __root.locale.value;
                _fallbackLocale.value = __root.fallbackLocale.value;
                updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
            }
        },
        get availableLocales() {
            return Object.keys(_messages.value).sort();
        },
        messages,
        get modifiers() {
            return _modifiers;
        },
        get pluralRules() {
            return _pluralRules || {};
        },
        get isGlobal() {
            return _isGlobal;
        },
        get missingWarn() {
            return _missingWarn;
        },
        set missingWarn(val) {
            _missingWarn = val;
            _context.missingWarn = _missingWarn;
        },
        get fallbackWarn() {
            return _fallbackWarn;
        },
        set fallbackWarn(val) {
            _fallbackWarn = val;
            _context.fallbackWarn = _fallbackWarn;
        },
        get fallbackRoot() {
            return _fallbackRoot;
        },
        set fallbackRoot(val) {
            _fallbackRoot = val;
        },
        get fallbackFormat() {
            return _fallbackFormat;
        },
        set fallbackFormat(val) {
            _fallbackFormat = val;
            _context.fallbackFormat = _fallbackFormat;
        },
        get warnHtmlMessage() {
            return _warnHtmlMessage;
        },
        set warnHtmlMessage(val) {
            _warnHtmlMessage = val;
            _context.warnHtmlMessage = val;
        },
        get escapeParameter() {
            return _escapeParameter;
        },
        set escapeParameter(val) {
            _escapeParameter = val;
            _context.escapeParameter = val;
        },
        t,
        getLocaleMessage,
        setLocaleMessage,
        mergeLocaleMessage,
        getPostTranslationHandler,
        setPostTranslationHandler,
        getMissingHandler,
        setMissingHandler,
        [SetPluralRulesSymbol]: setPluralRules
    };
    {
        composer.datetimeFormats = datetimeFormats;
        composer.numberFormats = numberFormats;
        composer.rt = rt;
        composer.te = te;
        composer.tm = tm;
        composer.d = d;
        composer.n = n;
        composer.getDateTimeFormat = getDateTimeFormat;
        composer.setDateTimeFormat = setDateTimeFormat;
        composer.mergeDateTimeFormat = mergeDateTimeFormat;
        composer.getNumberFormat = getNumberFormat;
        composer.setNumberFormat = setNumberFormat;
        composer.mergeNumberFormat = mergeNumberFormat;
        composer[InejctWithOption] = options.__injectWithOption;
        composer[TransrateVNodeSymbol] = transrateVNode;
        composer[DatetimePartsSymbol] = datetimeParts;
        composer[NumberPartsSymbol] = numberParts;
    }
    return composer;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const baseFormatProps = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
        validator: (val /* ComponetI18nScope */) => val === 'parent' || val === 'global',
        default: 'parent' /* ComponetI18nScope */
    },
    i18n: {
        type: Object
    }
};

function getInterpolateArg(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
{ slots }, // SetupContext,
keys) {
    if (keys.length === 1 && keys[0] === 'default') {
        // default slot with list
        const ret = slots.default ? slots.default() : [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ret.reduce((slot, current) => {
            return (slot = [
                ...slot,
                ...(isArray(current.children) ? current.children : [current])
            ]);
        }, []);
    }
    else {
        // named slots
        return keys.reduce((arg, key) => {
            const slot = slots[key];
            if (slot) {
                arg[key] = slot();
            }
            return arg;
        }, {});
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getFragmentableTag(tag) {
    return Fragment ;
}

/**
 * Translation Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [TranslationProps](component#translationprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Component Interpolation](../guide/advanced/component)
 *
 * @example
 * ```html
 * <div id="app">
 *   <!-- ... -->
 *   <i18n path="term" tag="label" for="tos">
 *     <a :href="url" target="_blank">{{ $t('tos') }}</a>
 *   </i18n>
 *   <!-- ... -->
 * </div>
 * ```
 * ```js
 * import { createApp } from 'vue'
 * import { createI18n } from 'vue-i18n'
 *
 * const messages = {
 *   en: {
 *     tos: 'Term of Service',
 *     term: 'I accept xxx {0}.'
 *   },
 *   ja: {
 *     tos: '利用規約',
 *     term: '私は xxx の{0}に同意します。'
 *   }
 * }
 *
 * const i18n = createI18n({
 *   locale: 'en',
 *   messages
 * })
 *
 * const app = createApp({
 *   data: {
 *     url: '/term'
 *   }
 * }).use(i18n).mount('#app')
 * ```
 *
 * @VueI18nComponent
 */
/* defineComponent */ ({
    /* eslint-disable */
    name: 'i18n-t',
    props: assign({
        keypath: {
            type: String,
            required: true
        },
        plural: {
            type: [Number, String],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            validator: (val) => isNumber(val) || !isNaN(val)
        }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
        const { slots, attrs } = context;
        // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
        const i18n = props.i18n ||
            useI18n({
                useScope: props.scope,
                __useComponent: true
            });
        return () => {
            const keys = Object.keys(slots).filter(key => key !== '_');
            const options = {};
            if (props.locale) {
                options.locale = props.locale;
            }
            if (props.plural !== undefined) {
                options.plural = isString(props.plural) ? +props.plural : props.plural;
            }
            const arg = getInterpolateArg(context, keys);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const children = i18n[TransrateVNodeSymbol](props.keypath, arg, options);
            const assignedAttrs = assign({}, attrs);
            const tag = isString(props.tag) || isObject(props.tag)
                ? props.tag
                : getFragmentableTag();
            return h(tag, assignedAttrs, children);
        };
    }
});

function isVNode(target) {
    return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
    const { slots, attrs } = context;
    return () => {
        const options = { part: true };
        let overrides = {};
        if (props.locale) {
            options.locale = props.locale;
        }
        if (isString(props.format)) {
            options.key = props.format;
        }
        else if (isObject(props.format)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (isString(props.format.key)) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                options.key = props.format.key;
            }
            // Filter out number format options only
            overrides = Object.keys(props.format).reduce((options, prop) => {
                return slotKeys.includes(prop)
                    ? assign({}, options, { [prop]: props.format[prop] }) // eslint-disable-line @typescript-eslint/no-explicit-any
                    : options;
            }, {});
        }
        const parts = partFormatter(...[props.value, options, overrides]);
        let children = [options.key];
        if (isArray(parts)) {
            children = parts.map((part, index) => {
                const slot = slots[part.type];
                const node = slot
                    ? slot({ [part.type]: part.value, index, parts })
                    : [part.value];
                if (isVNode(node)) {
                    node[0].key = `${part.type}-${index}`;
                }
                return node;
            });
        }
        else if (isString(parts)) {
            children = [parts];
        }
        const assignedAttrs = assign({}, attrs);
        const tag = isString(props.tag) || isObject(props.tag)
            ? props.tag
            : getFragmentableTag();
        return h(tag, assignedAttrs, children);
    };
}

/**
 * Number Format Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [FormattableProps](component#formattableprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Custom Formatting](../guide/essentials/number#custom-formatting)
 *
 * @VueI18nDanger
 * Not supported IE, due to no support `Intl.NumberFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)
 *
 * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-numberformat)
 *
 * @VueI18nComponent
 */
/* defineComponent */ ({
    /* eslint-disable */
    name: 'i18n-n',
    props: assign({
        value: {
            type: Number,
            required: true
        },
        format: {
            type: [String, Object]
        }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
        const i18n = props.i18n ||
            useI18n({ useScope: 'parent', __useComponent: true });
        return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n[NumberPartsSymbol](...args));
    }
});

/**
 * Datetime Format Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [FormattableProps](component#formattableprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Custom Formatting](../guide/essentials/datetime#custom-formatting)
 *
 * @VueI18nDanger
 * Not supported IE, due to no support `Intl.DateTimeFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts)
 *
 * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-datetimeformat)
 *
 * @VueI18nComponent
 */
/*defineComponent */ ({
    /* eslint-disable */
    name: 'i18n-d',
    props: assign({
        value: {
            type: [Number, Date],
            required: true
        },
        format: {
            type: [String, Object]
        }
    }, baseFormatProps),
    /* eslint-enable */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setup(props, context) {
        const i18n = props.i18n ||
            useI18n({ useScope: 'parent', __useComponent: true });
        return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n[DatetimePartsSymbol](...args));
    }
});

/**
 * Injection key for {@link useI18n}
 *
 * @remarks
 * The global injection key for I18n instances with `useI18n`. this injection key is used in Web Components.
 * Specify the i18n instance created by {@link createI18n} together with `provide` function.
 *
 * @VueI18nGeneral
 */
const I18nInjectionKey = 
/* #__PURE__*/ makeSymbol('global-vue-i18n');
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function createI18n(options = {}, VueI18nLegacy) {
    // prettier-ignore
    const __globalInjection = isBoolean(options.globalInjection)
        ? options.globalInjection
        : true;
    // prettier-ignore
    const __allowComposition = true;
    const __instances = new Map();
    const [globalScope, __global] = createGlobal(options);
    const symbol = makeSymbol('');
    function __getInstance(component) {
        return __instances.get(component) || null;
    }
    function __setInstance(component, instance) {
        __instances.set(component, instance);
    }
    function __deleteInstance(component) {
        __instances.delete(component);
    }
    {
        const i18n = {
            // mode
            get mode() {
                return 'composition';
            },
            // allowComposition
            get allowComposition() {
                return __allowComposition;
            },
            // install plugin
            async install(app, ...options) {
                // setup global provider
                app.__VUE_I18N_SYMBOL__ = symbol;
                app.provide(app.__VUE_I18N_SYMBOL__, i18n);
                // global method and properties injection for Composition API
                if (__globalInjection) {
                    injectGlobalFields(app, i18n.global);
                }
                // release global scope
                const unmountApp = app.unmount;
                app.unmount = () => {
                    i18n.dispose();
                    unmountApp();
                };
            },
            // global accessor
            get global() {
                return __global;
            },
            dispose() {
                globalScope.stop();
            },
            // @internal
            __instances,
            // @internal
            __getInstance,
            // @internal
            __setInstance,
            // @internal
            __deleteInstance
        };
        return i18n;
    }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useI18n(options = {}) {
    const instance = getCurrentInstance();
    if (instance == null) {
        throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
    }
    if (!instance.isCE &&
        instance.appContext.app != null &&
        !instance.appContext.app.__VUE_I18N_SYMBOL__) {
        throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
    }
    const i18n = getI18nInstance(instance);
    const global = getGlobalComposer(i18n);
    const componentOptions = getComponentOptions(instance);
    const scope = getScope(options, componentOptions);
    if (scope === 'global') {
        adjustI18nResources(global, options, componentOptions);
        return global;
    }
    if (scope === 'parent') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let composer = getComposer(i18n, instance, options.__useComponent);
        if (composer == null) {
            composer = global;
        }
        return composer;
    }
    const i18nInternal = i18n;
    let composer = i18nInternal.__getInstance(instance);
    if (composer == null) {
        const composerOptions = assign({}, options);
        if ('__i18n' in componentOptions) {
            composerOptions.__i18n = componentOptions.__i18n;
        }
        if (global) {
            composerOptions.__root = global;
        }
        composer = createComposer(composerOptions);
        setupLifeCycle(i18nInternal, instance);
        i18nInternal.__setInstance(instance, composer);
    }
    return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy // eslint-disable-line @typescript-eslint/no-explicit-any
) {
    const scope = effectScope();
    {
        const obj = scope.run(() => createComposer(options));
        if (obj == null) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        return [scope, obj];
    }
}
function getI18nInstance(instance) {
    {
        const i18n = inject(!instance.isCE
            ? instance.appContext.app.__VUE_I18N_SYMBOL__
            : I18nInjectionKey);
        /* istanbul ignore if */
        if (!i18n) {
            throw createI18nError(!instance.isCE
                ? I18nErrorCodes.UNEXPECTED_ERROR
                : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
        }
        return i18n;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getScope(options, componentOptions) {
    // prettier-ignore
    return isEmptyObject(options)
        ? ('__i18n' in componentOptions)
            ? 'local'
            : 'global'
        : !options.useScope
            ? 'local'
            : options.useScope;
}
function getGlobalComposer(i18n) {
    // prettier-ignore
    return i18n.mode === 'composition'
            ? i18n.global
            : i18n.global.__composer
        ;
}
function getComposer(i18n, target, useComponent = false) {
    let composer = null;
    const root = target.root;
    let current = target.parent;
    while (current != null) {
        const i18nInternal = i18n;
        if (i18n.mode === 'composition') {
            composer = i18nInternal.__getInstance(current);
        }
        if (composer != null) {
            break;
        }
        if (root === current) {
            break;
        }
        current = current.parent;
    }
    return composer;
}
function setupLifeCycle(i18n, target, composer) {
    {
        onMounted(() => {
        }, target);
        onUnmounted(() => {
            i18n.__deleteInstance(target);
        }, target);
    }
}
const globalExportProps = [
    'locale',
    'fallbackLocale',
    'availableLocales'
];
const globalExportMethods = ['t', 'rt', 'd', 'n', 'tm'] ;
function injectGlobalFields(app, composer) {
    const i18n = Object.create(null);
    globalExportProps.forEach(prop => {
        const desc = Object.getOwnPropertyDescriptor(composer, prop);
        if (!desc) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        const wrap = isRef(desc.value) // check computed props
            ? {
                get() {
                    return desc.value.value;
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                set(val) {
                    desc.value.value = val;
                }
            }
            : {
                get() {
                    return desc.get && desc.get();
                }
            };
        Object.defineProperty(i18n, prop, wrap);
    });
    app.config.globalProperties.$i18n = i18n;
    globalExportMethods.forEach(method => {
        const desc = Object.getOwnPropertyDescriptor(composer, method);
        if (!desc || !desc.value) {
            throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
        }
        Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
    });
}

// register message resolver at vue-i18n
registerMessageResolver(resolveValue);
// register fallback locale at vue-i18n
registerLocaleFallbacker(fallbackWithLocaleChain);
{
    initFeatureFlags();
}
// NOTE: experimental !!
if (__INTLIFY_PROD_DEVTOOLS__) {
    const target = getGlobalThis();
    target.__INTLIFY__ = true;
    setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}

function readCookie(key = 'consents') {
  let index = document.cookie.indexOf(key + '=');
  if (index === -1) return {}
  const s = document.cookie.substring(index);

  index = s.indexOf(';');
  if (index > -1) {
    return JSON.parse(s.substring(key.length + 1, index))
  } else {
    return JSON.parse(s.substring(key.length + 1))
  }
}

function writeCookie(consents, key = 'consents', sameSite = 'Lax', path = '/', secure = true) {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  document.cookie = `${key}=${JSON.stringify(consents)};expires=${d};samesite=${sameSite};path=${path};secure=${secure}`;
}

function deleteCookie(key = 'consents', value = '') {
  const cookieValue = readCookie(key);
  document.cookie = `${key}=${cookieValue};expires=Thu, 01-Jan-70 00:00:01 GMT;`;
}

function Consents$1(metaCookie, useMetaCookie, storagePrefix, storageConsentsKey, categories, consents) {
  function loadConsentsWrapper() {
    const allIds = [];
    let savedConsents = {};
    if (storageConsentsKey in localStorage) {
      savedConsents = JSON.parse(localStorage.getItem(storageConsentsKey) || "{}");
    } else if (useMetaCookie) {
      savedConsents = readCookie(storageConsentsKey);
      if (Object.keys(savedConsents).length > 0)
        localStorage.setItem(storageConsentsKey, JSON.stringify(savedConsents));
    }
    for (let i = 1; categories != void 0 && i < categories.length; i++) {
      const res = [];
      if ("cookies" in categories[i]) {
        for (let j = 0; j < categories[i].cookies.length; j++) {
          const { cookies } = categories[i];
          if (!cookies)
            continue;
          allIds.push({
            categoryId: categories[i].id,
            cookieId: cookies[j].id
          });
          consents[i].cookies[j].accepted = savedConsents[`${storagePrefix}-${categories[i].id}-${cookies[j].id}`] ?? false;
          res.push(consents[i].cookies[j].accepted);
          if (consents[i].cookies[j].accepted && typeof cookies[j]?.onAccepted === "function") {
            cookies[j].onAccepted();
          }
          if (!consents[i].cookies[j].accepted && typeof cookies[j]?.onDenied === "function") {
            cookies[j].onDenied();
          }
        }
        const containsTruthyValue = res.includes(true);
        const containsFalsyValue = res.includes(false);
        if (containsTruthyValue && !containsFalsyValue) {
          consents[i].accepted = true;
        } else if (containsTruthyValue && containsFalsyValue)
          consents[i].partial = true;
      }
    }
    return allIds;
  }
  if (useMetaCookie) {
    const { cookies } = categories[0];
    if (cookies) {
      cookies.unshift(metaCookie);
    }
  }
  for (let i = 0; i < categories.length; i++) {
    const consent = {
      accepted: i === 0,
      partial: false,
      cookies: []
    };
    const { cookies } = categories[i];
    if (cookies) {
      for (let j = 0; j < cookies.length; j++) {
        consent.cookies.push({ accepted: i === 0 });
      }
      consents.push(consent);
    }
  }
  const ids = loadConsentsWrapper();
  window.Consents = {
    storagePrefix,
    storageConsentsKey,
    ids,
    set(categoryId, cookieId, value) {
      const id = this.ids.find((id2) => id2.categoryId === categoryId && id2.cookieId === cookieId);
      if (id) {
        const key = `${this.storagePrefix}-${categoryId}-${cookieId}`;
        const savedConsents = JSON.parse(localStorage.getItem(this.storageConsentsKey) || "{}");
        if (savedConsents[key] === void 0)
          return;
        if (key in savedConsents) {
          savedConsents[key] = value;
          const category = categories.find((category2) => category2.id === id.categoryId);
          if (category && category.cookies) {
            const cookie = category.cookies.find((cookie2) => cookie2.id === id.cookieId);
            if (cookie && value && typeof cookie.onAccepted === "function")
              cookie.onAccepted();
            if (cookie && !value && typeof cookie.onDenied === "function")
              cookie.onDenied();
          }
        }
        localStorage.setItem(this.storageConsentsKey, JSON.stringify(savedConsents));
        if (useMetaCookie) {
          const consents2 = readCookie(this.storageConsentsKey);
          consents2[`${this.storagePrefix}-${categoryId}-${cookieId}`] = value;
          writeCookie(consents2);
        }
      }
    },
    get(categoryId, cookieId) {
      console.debug(Object.keys(localStorage));
      const consents2 = JSON.parse(localStorage.getItem(this.storageConsentsKey) || "{}");
      return consents2[`${this.storagePrefix}-${categoryId}-${cookieId}`] === "true";
    },
    get hasAccepted() {
      return this.storageConsentsKey in localStorage;
    },
    clear() {
      localStorage.removeItem(this.storageConsentsKey);
      deleteCookie(this.storageConsentsKey);
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].cookies) {
          for (let j = 0; j < categories[i].cookies.length; j++) {
            if (typeof categories[i].cookies[j].onDenied === "function")
              categories[i].cookies[j].onDenied();
            if (i > 0) {
              consents[i].cookies[j].accepted = false;
              consents[i].accepted = false;
              consents[i].partial = false;
            }
          }
        }
      }
    }
  };
}

var CookieConsent_vue_vue_type_style_index_0_lang = '';

var CookieConsent_vue_vue_type_style_index_1_scoped_true_lang = '';

function block0 (Component) {
  Component.__i18nGlobal = Component.__i18nGlobal || [];
  Component.__i18nGlobal.push({
    "locale": "",
    "resource": {
      "ar": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["إعدادات الخصوصية"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["يعود"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ستجد هنا نظرة عامة على جميع ملفات تعريف الارتباط المستخدمة. يمكنك الموافقة على الفئات الفردية أو ملفات تعريف الارتباط الفردية ويمكنك عرض مزيد من المعلومات حول ملفات تعريف الارتباط الفردية."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["نحن نستخدم ملفات تعريف الارتباط على موقعنا لأغراض أساسية ، وكذلك للأغراض الإحصائية والتسويقية. يمكن للوسائط الخارجية أيضًا استخدام ملفات تعريف الارتباط."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["تصغير"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["حذف البيانات"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["عنوان تفسيري"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = تم قبول جميع ملفات تعريف الارتباط في هذه الفئة\n▣ = تم قبول بعض ملفات تعريف الارتباط في هذه الفئة\n- = لم يتم قبول ملفات تعريف الارتباط في هذه الفئة"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["كل قبول"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["اختيار حفظ"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["وافقت"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["رفض"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["مقبولة جزئياً"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["إظهار معلومات ملفات تعريف الارتباط"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["تفاصيل ملفات تعريف الارتباط"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["إعدادات حماية البيانات الفردية"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["حماية البيانات"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/privacy"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["بصمة"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/imprint"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["استعرض - قبل - قبول"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["اسم"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["مقدمي"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["غرض"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["حماية البيانات"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["مضيف"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["اسم ملف تعريف الارتباط"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["صلاحية ملفات تعريف الارتباط"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["اليسار"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["موافقات ملفات تعريف الارتباط"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["صاحب الموقع الإلكتروني"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["يحفظ الموافقات أو الرفض لملفات تعريف الارتباط الفردية."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["١ سنة"])}
        }
      },
      "bg": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Настройки за поверителност"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Обратно"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Тук ще намерите преглед на всички използвани бисквитки. Можете да се съгласите с отделни категории или отделни бисквитки и да получите допълнителна информация за отделните бисквитки."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Използваме \"бисквитки\" на нашия уебсайт за основни цели, както и за статистически и маркетингови цели. Външните медии също могат да използват"])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Сведете до минимум"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Изтриване на данни"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Легенда"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Всички бисквитки в тази категория приети\n▣ = Някои бисквитки в тази категория приеха\n- = В тази категория няма приемани бисквитки"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Приемете всички"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Запазване на избора"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Приема се"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Отхвърлени"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Частично приет"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Показване на информация за бисквитките"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Данни за бисквитките"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Индивидуални настройки за поверителност"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Защита на данните"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/privacy"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Отпечатък"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/imprint"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Приемане на"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Име"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Доставчик"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Цел"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Политика за поверителност"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Име на бисквитка"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Валидност на бисквитките"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Връзки"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Споразумение за бисквитки"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Собственик на уебсайта"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Запазва одобренията или отказите за отделните бисквитки."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 година"])}
        }
      },
      "cs": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nastavení soukromí"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zpět"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zde najdete přehled všech používaných souborů cookie. Můžete souhlasit s jednotlivými kategoriemi nebo jednotlivými soubory cookie a nechat si zobrazit další informace o jednotlivých souborech cookie."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Na našich webových stránkách používáme soubory cookie pro základní účely a pro statistické a marketingové účely. Externí média mohou také používat soubory cookie."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimalizujte"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Odstranění dat"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legenda"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Všechny soubory cookie v této kategorii jsou přijaty\n▣ = Některé soubory cookie přijaté v této kategorii\n- = V této kategorii nejsou přijímány žádné soubory cookie"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Přijmout všechny"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Uložit výběr"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Přijato"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Odmítnuto"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Částečně přijato"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zobrazit informace o souborech cookie"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Podrobnosti o souborech cookie"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Individuální nastavení soukromí"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ochrana údajů"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/chrana-udaju"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Otisk"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/otisk"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Přijmout"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Název"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Poskytovatel"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Účel"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zásady ochrany osobních údajů"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Název souboru cookie"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Platnost souborů cookie"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Odkazy"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dohoda o souborech cookie"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vlastník webových stránek"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Uloží schválení nebo zamítnutí jednotlivých souborů cookie."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 rok"])}
        }
      },
      "da": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privatlivsindstillinger"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tilbage"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Her finder du en oversigt over alle de cookies, der anvendes. Du kan acceptere individuelle kategorier eller individuelle cookies og kan få vist yderligere oplysninger om de enkelte cookies."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vi bruger cookies på vores websted til væsentlige formål samt til statistiske og markedsføringsmæssige formål. Eksterne medier kan også bruge cookies."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimer"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Slet data"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legende"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Alle cookies i denne kategori accepteres\n▣ = Nogle af de cookies, der accepteres i denne kategori\n- = Ingen cookies accepteres i denne kategori"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accepter alle"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accepter valg"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accepteret"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Afvist"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Delvist accepteret"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vis oplysninger om cookies"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-detaljer"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["individuelle indstillinger"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privatlivspolitik"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/privatlivspolotik"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Impressum"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/impressum"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accepter"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Navn"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Udbyder"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Formål"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privatlivspolitik"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vært"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie navn"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie køretid"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Links"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Samtykke til cookies"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Webstedsoperatør"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Gemmer samtykke og afvisning af individuelle cookies"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 Year"])}
        }
      },
      "de": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Datenschutzeinstellungen"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zurück"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hier findest Du eine Übersicht über alle verwendeten Cookies. Du kannst zu einzelnen Kategorien oder einzelnen Cookies zustimmen und kannst Dir weitere Informationen zu den einzelnen Cookies anzeigen lassen."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Wir nutzen Cookies auf unserer Webseite für essenzielle Zwecke, sowie für statistische und Marketingzwecke. Auch externe Medien können Cookies verwenden."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimieren"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Daten löschen"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legende"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Alle Cookies dieser Kategorie akzeptiert\n▣ = Einige Cookies dieser Kategorie akzeptiert\n- = Keine Cookies dieser Kategorie akzeptiert"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Alle Akzeptieren"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Auswahl Speichern"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Akzeptiert"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Abgelehnt"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Teilweise akzeptiert"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-Information anzeigen"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-Details"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Individuelle Datenschutzeinstellungen"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Datenschutz"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/datenschutz"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Impressum"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/impressum"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Akzeptieren"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Name"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Anbieter"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zweck"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Datenschutzerklärung"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie Name"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie Gültigkeit"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Links"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-Zustimmungen"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Eigentümer der Webseite"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Speichert die Zustimmungen bzw. Ablehnungen zu den einzelnen Cookies."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 Jahr"])}
        }
      },
      "el": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ρυθμίσεις απορρήτου"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Πίσω"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Εδώ θα βρείτε μια επισκόπηση όλων των cookies που χρησιμοποιούνται. Μπορείτε να συμφωνήσετε με μεμονωμένες κατηγορίες ή μεμονωμένα cookies και να έχετε περισσότερες πληροφορίες σχετικά με τα μεμονωμένα cookies."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Χρησιμοποιούμε cookies στον ιστότοπό μας για βασικούς σκοπούς, καθώς και για στατιστικούς σκοπούς και σκοπούς μάρκετινγκ. Τα εξωτερικά μέσα ενδέχεται επίσης να χρησιμοποιούν cookies."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ελαχιστοποίηση"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Διαγραφή δεδομένων"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Υπόμνημα"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Όλα τα cookies σε αυτή την κατηγορία αποδεκτά\n▣ = Μερικά cookies που γίνονται δεκτά σε αυτή την κατηγορία\n- = Δεν γίνονται δεκτά cookies σε αυτή την κατηγορία"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Αποδοχή όλων"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Αποθήκευση επιλογής"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Αποδεκτή"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Απορρίφθηκε"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Μερικώς αποδεκτή"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Εμφάνιση πληροφοριών cookie"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Λεπτομέρειες cookie"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ατομικές ρυθμίσεις απορρήτου"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Προστασία δεδομένων"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/privacy"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Εκτύπωση"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/imprint"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Αποδοχή"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Όνομα"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Πάροχος"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Σκοπός"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Πολιτική απορρήτου"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Όνομα cookie"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Εγκυρότητα cookie"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Links"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Συμφωνία cookie"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ιδιοκτήτης ιστοσελίδας"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Αποθηκεύει τις εγκρίσεις ή απορρίψεις για τα μεμονωμένα cookies."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 έτος"])}
        }
      },
      "en": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privacy Settings"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Back"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Here you find an overview from all used cookies of this site. You can agree with some categories or cookies and also let you see further Information about individual cookies."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["We use cookies on our website for essential purposes, as well as for statistical and marketing purposes. External media may also use cookies."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimize"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Delete data"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legend"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = All cookies in this category accepted\n▣ = Some cookies accepted in this category\n- = No cookies accepted in this category"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accept All"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accept Selection"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accepted"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Denied"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Partially accepted"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Show Cookie-Information"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-Details"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Individual Settings"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privacy"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/privacy"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Imprint"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/imprint"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accept"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Name"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Provider"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Purpose"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privacy Notice"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie Name"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie Validity"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Links"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-Consent"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Provider of the website"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Stores the consent or refusal of individual cookies"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 Year"])}
        }
      },
      "es": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Configuración de la privacidad"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Volver"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aquí encontrará un resumen de todas las cookies utilizadas. Puede aceptar categorías individuales o cookies individuales y hacer que se muestre más información sobre las cookies individuales."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Utilizamos cookies en nuestro sitio web para fines esenciales, así como para fines estadísticos y de marketing. Los medios de comunicación externos también pueden utilizar cookies."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimizar"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Borrar datos"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Leyenda"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Se aceptan todas las cookies de esta categoría\n▣ = Algunas cookies aceptadas en esta categoría\n- = No se aceptan cookies en esta categoría"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aceptar todo"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Guardar selección"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aceptado"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rechazado"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aceptado parcialmente"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mostrar información sobre las cookies"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Detalles de las cookies"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Configuración individual de la privacidad"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Protección de datos"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/proteccion-de-datos"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pie de imprenta"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/pie-de-imprenta"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aceptar"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nombre"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Proveedor"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Propósito"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Política de privacidad"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nombre de la cookie"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Validez de las cookies"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Enlaces"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Acuerdo sobre cookies"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Propietario del sitio web"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Guarda las aprobaciones o rechazos de las cookies individuales."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 año"])}
        }
      },
      "et": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privaatsuse seaded"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tagasi"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Siit leiate ülevaate kõigist kasutatavatest küpsistest. Saate nõustuda üksikute kategooriate või üksikute küpsiste kasutamisega ja saada lisateavet üksikute küpsiste kohta."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Me kasutame oma veebisaidil küpsiseid põhilistel eesmärkidel, samuti statistilistel ja turunduslikel eesmärkidel. Ka väline meedia võib kasutada küpsiseid."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimeeri"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Andmete kustutamine"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legend"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Kõik küpsised selles kategoorias on aktsepteeritud\n▣ = Mõned selles kategoorias aktsepteeritud küpsised\n- = Selles kategoorias ei ole küpsised lubatud"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Võtke kõik vastu"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Salvesta valik"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aktsepteeritud"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tagasilükatud"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Osaliselt aktsepteeritud"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Näita küpsiste teavet"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Küpsise üksikasjad"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Individuaalsed privaatsusseaded"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Andmekaitse"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/andmekaitse"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Jälg"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/jaelg"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aktsepteeri"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nimi"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Teenusepakkuja"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Eesmärk"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privaatsuspoliitika"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Küpsise nimi"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Küpsise kehtivus"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Links"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Küpsiste leping"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Veebilehe omanik"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Salvestab üksikute küpsiste heakskiitmise või tagasilükkamise."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 aasta"])}
        }
      },
      "fi": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tietosuoja-asetukset"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Takaisin"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Täältä löydät yleiskatsauksen kaikista käytetyistä evästeistä. Voit hyväksyä yksittäiset luokat tai yksittäiset evästeet ja saada lisätietoja yksittäisistä evästeistä näkyviin."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Käytämme verkkosivustollamme evästeitä välttämättömiin tarkoituksiin sekä tilastollisiin ja markkinointitarkoituksiin. Myös ulkoiset mediat voivat käyttää evästeitä."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimoi"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tietojen poistaminen"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Selite"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Kaikki tämän luokan evästeet hyväksytty\n▣ = Joitakin tähän luokkaan hyväksyttyjä evästeitä\n- = Tässä kategoriassa ei hyväksytä evästeitä"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hyväksy kaikki"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tallenna valinta"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hyväksytty"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hylätyt"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Osittain hyväksytty"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Näytä evästetiedot"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Evästeen tiedot"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Yksilölliset yksityisyysasetukset"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tietosuoja"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/tietosuoja"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Jälki"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/jaelki"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hyväksy"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nimi"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Palveluntarjoaja"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Käyttötarkoitus"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tietosuojakäytäntö"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Evästeen nimi"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Evästeen voimassaolo"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Linkit"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Evästesopimus"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Verkkosivuston omistaja"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tallentaa yksittäisten evästeiden hyväksynnät tai hylkäykset."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 vuosi"])}
        }
      },
      "fr": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Paramètres de confidentialité"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dos"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vous trouverez ici un aperçu de tous les cookies utilisés. Vous pouvez accepter des catégories individuelles ou des cookies individuels et obtenir des informations supplémentaires sur les cookies individuels."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nous utilisons des cookies sur notre site web à des fins essentielles, ainsi qu'à des fins statistiques et de marketing. Les médias externes peuvent également utiliser des cookies."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimoi"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Supprimer les données"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Légende"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Tous les cookies de cette catégorie acceptés\n▣ = Quelques cookies de cette catégorie acceptés\n- = Aucun cookie de cette catégorie n'est accepté"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accepter tous"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sauvegarder la sélection"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accepté"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rejeté"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Partiellement accepté"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Afficher les informations sur les cookies"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Détails des cookies"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Paramètres de confidentialité individuels"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Protection des données"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/protection-des-donnees"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Impression"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/impression"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accepter"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Prestataire"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Objectif"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Politique de confidentialité"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nom du cookie"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Validité du cookie"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Liens"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accord sur les cookies"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Propriétaire du site web"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sauvegarde les approbations ou les rejets pour les cookies individuels."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 an"])}
        }
      },
      "hi": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["गोपनीय सेटिंग"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["वापसी"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["यहां आपको उपयोग की गई सभी कुकीज़ का अवलोकन मिलेगा। आप अलग-अलग श्रेणियों या अलग-अलग कुकीज़ के लिए सहमत हो सकते हैं और आप अलग-अलग कुकीज़ के बारे में अधिक जानकारी देख सकते हैं।"])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["हम अपनी वेबसाइट पर आवश्यक उद्देश्यों के साथ-साथ सांख्यिकीय और विपणन उद्देश्यों के लिए कुकीज़ का उपयोग करते हैं। बाहरी मीडिया भी कुकीज़ का उपयोग कर सकता है।"])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["छोटा करना"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["डेटा हटाएं"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["दंतकथा"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = इस श्रेणी में सभी कुकीज़ ने स्वीकार किया\n▣ = इस श्रेणी में कुछ कुकीज़ स्वीकार किए जाते हैं\n- = इस श्रेणी में कोई कुकीज़ स्वीकार नहीं की"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["सभी स्वीकार करते हैं"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["चयन सहेजें"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["को स्वीकृत"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["अस्वीकृत"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["आंशिक रूप से स्वीकृत"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["कुकी जानकारी दिखाएं"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["कुकी-विवरण"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["व्यक्तिगत डेटा सुरक्षा सेटिंग्स"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["डेटा सुरक्षा"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/privacy"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["छाप"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/imprint"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["स्वीकार करना"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["नाम"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["प्रदाताओं"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["प्रयोजन"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["डेटा सुरक्षा"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["मेज़बान"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["कुकी का नाम"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["कुकी वैधता"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["बाएं"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["कुकी सहमति"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["वेबसाइट का मालिक"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["व्यक्तिगत कुकीज़ के लिए अनुमोदन या अस्वीकृति सहेजता है।"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 वर्ष"])}
        }
      },
      "hr": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Postavke privatnosti"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Povratak"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ovdje ćete pronaći pregled svih korištenih kolačića. Možete pristati na pojedinačne kategorije ili pojedinačne kolačiće i možete vidjeti dodatne informacije o pojedinačnim kolačićima."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kolačiće na našoj web stranici koristimo u osnovne svrhe, kao i u statističke i marketinške svrhe. Vanjski mediji također mogu koristiti kolačiće."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimizirajte"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Izbriši podatke"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legenda"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Svi kolačići u ovoj kategoriji prihvaćeni su\n▣ = Neki kolačići u ovoj kategoriji prihvaćeni su\n- = Nije prihvaćen nijedan kolačići u ovoj kategoriji"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Svi prihvaćaju"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Spremi odabir"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Prihvaćeno"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Odbijeno"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Djelomično prihvaćeno"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Prikaži informacije o kolačićima"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pojedinosti o kolačićima"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pojedinačne postavke zaštite podataka"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["zaštita podataka"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/zastita-podataka"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["otisak"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/otisak"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Prihvatiti"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ime"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["pružatelji usluga"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Svrha"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zaštita podataka"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Naziv kolačića"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Valjanost kolačića"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lijevo"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Suglasnost za kolačiće"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vlasnik web stranice"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sprema odobrenja ili odbijanja u pojedinačne kolačiće."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 godina"])}
        }
      },
      "hu": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Adatvédelmi beállítások"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vissza"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Itt áttekintést talál az összes használt sütiről. Egyéni kategóriákhoz vagy egyes sütikhez hozzájárulhat, és további információkat kaphat az egyes sütikről."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Weboldalunkon cookie-kat használunk alapvető célokra, valamint statisztikai és marketing célokra. A külső médiumok is használhatnak sütiket."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimalizálja a"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Adatok törlése"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legenda"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Minden cookie ebben a kategóriában elfogadott\n▣ = Néhány ebben a kategóriában elfogadott cookie\n- = Ebben a kategóriában nem fogadunk el sütiket"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Fogadjon el mindent"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kiválasztás mentése"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Elfogadva"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Visszautasított"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Részben elfogadott"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie információk megjelenítése"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie részletek"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Egyéni adatvédelmi beállítások"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Adatvédelem"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/adatvedelem"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Impresszum"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/impresszum"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Elfogadom"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Név"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Szolgáltató"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cél"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Datenschutzerklärung"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie Name"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie érvényessége"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Linkek"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-megállapodás"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["A weboldal tulajdonosa"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Menti az egyes sütik jóváhagyását vagy elutasítását."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 év"])}
        }
      },
      "hy": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Գաղտնիության կարգավորումներ"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Վերադարձ"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Այստեղ դուք կգտնեք օգտագործված բոլոր թխուկների ակնարկը: Դուք կարող եք համաձայնվել առանձին կատեգորիաների կամ առանձին թխուկների հետ և կարող եք դիտել լրացուցիչ տեղեկություններ առանձին թխուկների մասին:"])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Մենք օգտագործում ենք թխուկներ մեր կայքում հիմնական նպատակներով, ինչպես նաև վիճակագրական և մարքեթինգային նպատակներով: Արտաքին լրատվամիջոցները կարող են նաև օգտագործել թխուկներ:"])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Փոքրացնել"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ջնջել տվյալները"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Լեգենդ"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Այս կատեգորիայում բոլոր Տեղեկանիշն ընդունված է\n▣ = Այս կատեգորիայում որոշ բլիթներ ընդունված են\n- = Այս կատեգորիայում ոչ մի բլիթ չի ընդունվում"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Բոլորն ընդունում են"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Պահպանել ընտրությունը"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ընդունված է"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Մերժվել է"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Մասամբ ընդունված"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ցուցադրել թխուկների մասին տեղեկությունները"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-Մանրամասներ"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Անհատական տվյալների պաշտպանության կարգավորումներ"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["տվյալների պաշտպանություն"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/privacy"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["դրոշմել"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/imprint"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ընդունել"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Անուն"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["մատակարարներ"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["նպատակը"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Տվյալների պաշտպանություն"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Թխվածքաբլիթի անվանումը"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-ի վավերականություն"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ձախ"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-ի համաձայնություն"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Կայքի սեփականատեր"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Պահպանում է հաստատումները կամ մերժումները առանձին թխուկների վրա:"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 տարի"])}
        }
      },
      "it": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Impostazioni della privacy"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Indietro"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Qui troverete una panoramica di tutti i cookie utilizzati. È possibile acconsentire a singole categorie o a singoli cookie e far visualizzare ulteriori informazioni sui singoli cookie."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Utilizziamo i cookie sul nostro sito web per scopi essenziali, così come per scopi statistici e di marketing. Anche i media esterni possono utilizzare i cookie."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimizzare"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cancellare i dati"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Leggenda"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Tutti i cookie di questa categoria accettati\n▣ = Alcuni cookie accettati in questa categoria\n- = Nessun cookie accettato in questa categoria"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accetta tutti"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Salva la selezione"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accettato"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rifiutato"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parzialmente accettato"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mostra informazioni sui cookie"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dettagli dei cookie"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Impostazioni di privacy individuali"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Protezione dei dati"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/protezione-dei-dati"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Impronta"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/impronta"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accettare"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nome"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Fornitore"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Scopo"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Politica sulla privacy"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nome del cookie"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Validità dei cookie"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Links"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accordo sui cookie"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Proprietario del sito web"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Salva le approvazioni o i rifiuti per i singoli cookie.."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 anno"])}
        }
      },
      "lb": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privatsphär Astellunge"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Retour"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hei fannt Dir en Iwwerbléck vun all benotzte Cookien. Dir kënnt fir eenzel Kategorien oder eenzel Cookien averstanen an Dir kënnt weider Informatiounen iwwert déi eenzel Cookien Bléck."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mir benotze Cookien op eiser Websäit fir wesentlech Zwecker, souwéi fir statistesch a Marketingzwecker. Extern Medien kënnen och Cookien benotzen."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimiséieren"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Läschen Daten"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legend"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = All Cookien an dëser Kategorie akzeptéiert\n▣ = E puer Cookien an dëser Kategorie akzeptéiert\n- = Keng Cookien an dëser Kategorie ugeholl"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["All akzeptéieren"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Späicheren Auswiel"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Akzeptéiert"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ofgeleent"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Deelweis ugeholl"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Show Cookie Informatiounen"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-Detailer"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Individuell Dateschutz Astellunge"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dateschutz"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/datenschutz"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ofdréck"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/ofdreck"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Akzeptéieren"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Numm"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ubidder"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zweck"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dateschutz"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie Numm"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie Validitéit"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lénks"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie Zoustëmmung"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Websäit Besëtzer"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Späichert d'Zustimmungen oder Oflehnungen op déi eenzel Cookien."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 Joer"])}
        }
      },
      "lt": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privatumo nustatymai"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Atgal"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Čia rasite visų naudojamų slapukų apžvalgą. Galite sutikti su atskiromis kategorijomis arba atskirais slapukais ir gauti daugiau informacijos apie atskirus slapukus."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Savo svetainėje slapukus naudojame svarbiausiais tikslais, taip pat statistikos ir rinkodaros tikslais. Išorinė žiniasklaida taip pat gali naudoti slapukus."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sumažinkite"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ištrinti duomenis"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legenda"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Priimami visi šios kategorijos slapukai\n▣ = Kai kurie šioje kategorijoje priimtini slapukai\n- = Šioje kategorijoje slapukai nepriimami"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Priimti visus"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Išsaugoti pasirinkimą"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Priimtas"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Atmesta"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Iš dalies priimta"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rodyti slapukų informaciją"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Informacija apie slapukus"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Individualūs privatumo nustatymai"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Duomenų apsauga"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/duomenų-apsauga"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Atspaudas"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/atspaudas"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Priimti"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pavadinimas"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Teikėjas"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tikslas"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privatumo politika"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Slapukų pavadinimas"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Slapukų galiojimas"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nuorodos"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Susitarimas dėl slapukų"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Svetainės savininkas"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Išsaugo atskirų slapukų patvirtinimus arba atmetimus."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 metai"])}
        }
      },
      "lv": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Konfidencialitātes iestatījumi"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Atpakaļ"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Šeit atradīsiet pārskatu par visām izmantotajām sīkdatnēm. Jūs varat piekrist atsevišķām kategorijām vai atsevišķām sīkdatnēm un saņemt papildu informāciju par atsevišķām sīkdatnēm."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mēs izmantojam sīkfailus savā tīmekļa vietnē būtiskiem mērķiem, kā arī statistikas un mārketinga vajadzībām. Sīkfailus var izmantot arī ārējie plašsaziņas līdzekļi."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimizēt"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dzēst datus"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Leģenda"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Visi šīs kategorijas sīkfaili ir pieņemti\n▣ = Dažas šajā kategorijā pieņemtās sīkdatnes\n- = Šajā kategorijā sīkfaili netiek pieņemti"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pieņemt visus"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Saglabāt atlasi"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pieņemts"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Noraidīts"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Daļēji pieņemts"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rādīt sīkfailu informāciju"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sīkfailu informācija"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Individuālie konfidencialitātes iestatījumi"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Datu aizsardzība"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/datu-aizsardziba"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Imprint"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/imprint"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pieņemt"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nosaukums"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nodrošinātājs"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mērķis"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Konfidencialitātes politika"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sīkfaila nosaukums"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sīkfailu derīguma termiņš"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Saites"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sīkfailu līgums"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tīmekļa vietnes īpašnieks"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Saglabājiet atsevišķu sīkfailu apstiprinājumus vai noraidījumus."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 gads"])}
        }
      },
      "nl": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privacy-instellingen"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Terug"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hier vindt u een overzicht van alle gebruikte cookies. U kunt instemmen met afzonderlijke categorieën of afzonderlijke cookies en u kunt nadere informatie over de afzonderlijke cookies laten weergeven."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Wij gebruiken cookies op onze website voor essentiële doeleinden, alsmede voor statistische en marketingdoeleinden. Externe media kunnen ook cookies gebruiken."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimaliseer"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Gegevens wissen"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legende"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Alle cookies in deze categorie geaccepteerd\n▣ = Enkele cookies die in deze categorie worden geaccepteerd\n- = Geen cookies aanvaard in deze categorie"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accepteer alle"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Selectie opslaan"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Geaccepteerd"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Afgewezen"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Gedeeltelijk aanvaard"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Toon cookie-informatie"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-Details"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Individuele privacy-instellingen"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privacybeleid"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/privacy"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Afdruk"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/afdruk"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Accepteren"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Naam"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aanbieder"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Doel"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Privacybeleid"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie Naam"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Geldigheid cookie"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Links"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-overeenkomst"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Website eigenaar"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Slaat de goedkeuringen of afkeuringen voor de individuele cookies op."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 jaar"])}
        }
      },
      "no": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Personverninnstillinger"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Komme tilbake"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Her finner du en oversikt over alle informasjonskapsler som brukes. Du kan godta individuelle kategorier eller individuelle informasjonskapsler, og du kan se mer informasjon om de enkelte informasjonskapslene."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vi bruker informasjonskapsler på nettsiden vår til viktige formål, så vel som for statistikk- og markedsføringsformål. Eksterne medier kan også bruke informasjonskapsler."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimer"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Slett data"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legende"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Alle informasjonskapsler i denne kategorien akseptert\n▣ = Noen informasjonskapsler i denne kategorien akseptert\n- = Ingen informasjonskapsler i denne kategorien akseptert"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Alle godtar"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lagre utvalg"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Akseptert"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Avslått"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Delvis akseptert"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vis informasjon om informasjonskapsler"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Informasjonskapsel-detaljer"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Individuelle databeskyttelsesinnstillinger"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["data beskyttelse"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/data-beskyttelse"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["avtrykk"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/avtrykk"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aksepterer"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Navn"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["tilbydere"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["hensikt"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Data beskyttelse"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Informasjonskapselnavn"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Informasjonskapselens gyldighet"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Venstre"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Samtykke til informasjonskapsler"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nettstedseier"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lagrer godkjenningene eller avslagene til de enkelte informasjonskapslene."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 år"])}
        }
      },
      "pl": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ustawienia prywatności"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Powrót"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tutaj znajdziesz przegląd wszystkich używanych plików cookie. Mogą Państwo wyrazić zgodę na poszczególne kategorie lub poszczególne pliki cookie i uzyskać dalsze informacje na temat poszczególnych plików cookie."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Używamy plików cookies na naszej stronie internetowej w celach niezbędnych, statystycznych i marketingowych. Zewnętrzne media mogą również używać plików cookie."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zminimalizuj"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Usuń dane"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legenda"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Wszystkie ciasteczka w tej kategorii zaakceptowane\n▣ = Niektóre pliki cookie akceptowane w tej kategorii\n- = W tej kategorii nie akceptuje się plików cookie"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Przyjmij wszystkie"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zapisz wybór"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zaakceptowany"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Odrzucony"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Częściowo przyjęty"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pokaż informacje o plikach cookie"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Szczegóły dotyczące plików cookie"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Indywidualne ustawienia prywatności"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ochrona danych"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/ochrona-danych"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nadruk"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/nadruk"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Przyjmij"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nazwa"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dostawca"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Przeznaczenie"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Polityka prywatności"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nazwa pliku cookie"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ważność plików cookie"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Linki"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Umowa dotycząca plików cookie"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Właściciel strony internetowej"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zapisuje zatwierdzenia lub odrzucenia dla poszczególnych plików cookie."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 rok"])}
        }
      },
      "pt": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Definições de privacidade"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Voltar"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aqui encontrará uma visão geral de todos os cookies utilizados. Pode concordar com categorias individuais ou cookies individuais e ter mais informações sobre os cookies individuais exibidos."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Utilizamos cookies no nosso website para fins essenciais, bem como para fins estatísticos e de marketing. Os meios externos também podem utilizar cookies."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimizar"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Apagar dados"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lenda"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Todos os cookies nesta categoria são aceites\n▣ = Alguns cookies aceites nesta categoria\n- = Não são aceites cookies nesta categoria"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aceitar todos"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Salvar selecção"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aceite"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Rejeitado"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parcialmente aceite"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mostrar informação sobre cookies"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Detalhes dos bolos"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Definições de privacidade individuais"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Protecção de dados"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/proteccao-de-dados"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Impressão"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/impressao"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aceitar"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nome"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Fornecedor"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Finalidade"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Política de privacidade"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nome do Cookie"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Validade dos bolos"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ligações"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Acordo de cozinheiro"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Proprietário do website"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Guarda as aprovações ou rejeições para os cookies individuais."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 ano"])}
        }
      },
      "ro": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Setări de confidențialitate"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Înapoi"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Aici veți găsi o prezentare generală a tuturor modulelor cookie utilizate. Puteți să vă dați acordul pentru categorii individuale sau pentru cookie-uri individuale și să vi se afișeze informații suplimentare despre cookie-urile individuale."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Utilizăm cookie-uri pe site-ul nostru web în scopuri esențiale, precum și în scopuri statistice și de marketing. Mediile externe pot utiliza, de asemenea, module cookie."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimizați"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ștergeți datele"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legenda"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Toate cookie-urile din această categorie sunt acceptate\n▣ = Unele cookie-uri acceptate în această categorie\n- = Nu se acceptă cookie-uri în această categorie"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Acceptă toate"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Salvați selecția"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Acceptat"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Respins"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Parțial acceptat"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Afișați informații despre cookie-uri"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Detalii despre cookie-uri"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Setări individuale de confidențialitate"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Protecția datelor"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/protecția-datelor"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Imprimare"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/imprimare"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Acceptă"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nume"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Furnizor"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Scop"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Politica de confidențialitate"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nume cookie"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Valabilitatea cookie-urilor"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legături"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Acordul privind cookie-urile"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Proprietarul site-ului web"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Salvează aprobările sau respingerile pentru cookie-urile individuale."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 an"])}
        }
      },
      "ru": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Настройки конфиденциальности"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Назад"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Здесь вы найдете обзор всех используемых файлов cookie. Вы можете дать согласие на отдельные категории или отдельные файлы cookie и получить дополнительную информацию об отдельных файлах cookie."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Мы используем файлы cookie на нашем сайте для основных целей, а также для статистических и маркетинговых целей. Внешние носители также могут использовать файлы cookie."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Минимизировать"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Удалить данные"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Легенда"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Все печенья в этой категории приняты\n▣ = Некоторые файлы cookie, принятые в этой категории\n- = В этой категории файлы cookie не принимаются"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Принять все"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Сохранить выбор"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Принято"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Отклонено"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Частично принят"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Показать информацию о файлах cookie"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Информация о файлах cookie"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Индивидуальные настройки конфиденциальности"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Защита данных"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/privacy"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Оттиск"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/imprint"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Принять"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Имя"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Провайдер"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Назначение"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Политика конфиденциальности"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Имя файла cookie"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Срок действия куки"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ссылки"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Соглашение о файлах cookie"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Владелец сайта"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Сохраняет одобрения или отклонения для отдельных файлов cookie."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 год"])}
        }
      },
      "sk": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nastavenia súkromia"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Späť"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tu nájdete prehľad všetkých používaných súborov cookie. Môžete odsúhlasiť jednotlivé kategórie alebo jednotlivé súbory cookie a nechať si zobraziť ďalšie informácie o jednotlivých súboroch cookie."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Na našej webovej stránke používame súbory cookie na základné účely, ako aj na štatistické a marketingové účely. Súbory cookie môžu používať aj externé médiá."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimalizujte"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Odstránenie údajov"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legenda"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Všetky súbory cookie v tejto kategórii sú akceptované\n▣ = Niektoré súbory cookie akceptované v tejto kategórii\n- = V tejto kategórii nie sú akceptované žiadne súbory cookie"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Prijať všetky"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Uložiť výber"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Prijaté"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Odmietnuté"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Čiastočne prijaté"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zobraziť informácie o súboroch cookie"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Podrobnosti o súboroch cookie"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Individuálne nastavenia ochrany osobných údajov"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ochrana údajov"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/ochrana-udajov"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Odtlačok"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/odtlacok"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Prijať"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Názov"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Poskytovateľ"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Účel"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zásady ochrany osobných údajov"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Názov súboru cookie"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Platnosť súborov cookie"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Odkazy"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dohoda o súboroch cookie"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vlastník webovej stránky"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Uloží schválenia alebo zamietnutia pre jednotlivé súbory cookie."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 rok"])}
        }
      },
      "sl": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nastavitve zasebnosti"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Nazaj"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tukaj boste našli pregled vseh uporabljenih piškotkov. Strinjate se lahko s posameznimi kategorijami ali posameznimi piškotki in prikažete dodatne informacije o posameznih piškotkih."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Piškotke na našem spletnem mestu uporabljamo za osnovne namene ter za statistične in trženjske namene. Piškotke lahko uporabljajo tudi zunanji mediji."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimieren"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Brisanje podatkov"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legenda"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Sprejeti vsi piškotki v tej kategoriji\n▣ = Nekateri piškotki, sprejeti v tej kategoriji\n- = Piškotki v tej kategoriji niso sprejeti"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sprejmite vse"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Shranjevanje izbire"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sprejeto"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zavrnjeno"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Delno sprejeto"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Prikaži informacije o piškotkih"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Podrobnosti o piškotkih"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Individualne nastavitve zasebnosti"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Varstvo podatkov"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/varstvo-podatkov"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Odtis"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/odtis"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sprejmite"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ime"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ponudnik"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Namen"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Politika zasebnosti"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ime piškotka"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Veljavnost piškotkov"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Povezave"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sporazum o piškotkih"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Lastnik spletnega mesta"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Shrani odobritve ali zavrnitve za posamezne piškotke."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 leto"])}
        }
      },
      "sq": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kushtet e Privatësisë"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kthimi"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Këtu do të gjeni një përmbledhje të të gjitha cookies të përdorura. Ju mund të bini dakord për kategoritë individuale ose cookie-t individuale dhe mund të shikoni informacione të mëtejshme rreth skedarëve individualë."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ne përdorim cookies në faqen tonë të internetit për qëllime thelbësore, si dhe për qëllime statistikore dhe marketingu. Mediat e jashtme mund të përdorin gjithashtu cookie."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Minimizoje"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Fshi të dhënat"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legjendë"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Të gjitha cookies në këtë kategori pranuan\n▣ = Disa cookie në këtë kategori pranuan\n- = Asnjë cookie në këtë kategori nuk pranohet"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Të gjithë pranojnë"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ruaj përzgjedhjen"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pranuar"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Refuzuar"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pjesërisht e pranuar"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Shfaq informacionin e cookie-ve"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-Detajet"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cilësimet individuale të mbrojtjes së të dhënave"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["mbrojtjen e të dhënave"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/mbrojtjen-e-te-dhenave"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["gjurmë"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/gjurme"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pranoje"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Emri"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ofruesit"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["qëllimi"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Mbrojtja e të dhënave"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vlefshmëria e cookie-t"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize([])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Majtas"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pëlqimet për cookie"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Pronari i faqes në internet"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ruan miratimet ose refuzimet në kukit individualë."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 vit"])}
        }
      },
      "sv": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Inställningar för sekretess"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tillbaka"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Här hittar du en översikt över alla cookies som används. Du kan godkänna enskilda kategorier eller enskilda cookies och få ytterligare information om de enskilda cookies som visas."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Vi använder cookies på vår webbplats för viktiga ändamål samt för statistik och marknadsföring. Externa medier kan också använda cookies."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Zmanjšanje"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ta bort uppgifter"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Legend"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Alla kakor i denna kategori accepteras\n▣ = Några kakor som accepteras i denna kategori\n- = Inga kakor accepteras i denna kategori"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Acceptera alla"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Spara val"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Godkänd"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Avvisad"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Delvis godkänt"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Visa information om cookies"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Uppgifter om cookies"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Individuella sekretessinställningar"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Uppgiftsskydd"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/uppgiftsskydd"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Tryck"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/tryck"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Acceptera"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Namn"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Leverantör"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Syfte"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Integritetspolicy"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie-namn"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie giltighet"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Länkar"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Avtal om kakor (cookies)"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Webbplatsägare"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sparar godkännanden eller avslag för enskilda kakor."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 år"])}
        }
      },
      "tr": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Gizlilik ayarları"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Dönüş"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Burada kullanılan tüm çerezlerin bir özetini bulacaksınız. Bireysel kategorileri veya bireysel tanımlama bilgilerini kabul edebilir ve bireysel tanımlama bilgileri hakkında daha fazla bilgi görüntüleyebilirsiniz."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Web sitemizde çerezleri temel amaçlar ve ayrıca istatistiksel ve pazarlama amaçları için kullanıyoruz. Harici medya da çerezleri kullanabilir."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["küçültmek"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Verileri sil"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Efsane"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Bu kategorideki tüm çerezler kabul edildi\n▣ = Bu kategoride kabul edilen bazı çerezler\n- = Bu kategoride çerez kabul edilmez"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Hepsi kabul ediyor"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Seçimi kaydet"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kabul edilmiş"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["reddedildi"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kısmen kabul edildi"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Çerez bilgilerini göster"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Çerez-Ayrıntılar"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bireysel veri koruma ayarları"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["veri koruması"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/veri-korumasi"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["damga"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/damga"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Kabul etmek"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["İsim"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["sağlayıcılar"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["amaç"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Veri koruması"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Çerez Adı"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Çerez geçerliliği"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Sol"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Çerez İzinleri"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Web sitesi sahibi"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Onayları veya retleri ayrı çerezlere kaydeder."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 yil"])}
        }
      },
      "uk": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Параметри конфіденційності"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Повернення"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Тут ви знайдете огляд усіх використовуваних файлів cookie. Ви можете погодитися з окремими категоріями або окремими файлами cookie та можете переглянути додаткову інформацію про окремі файли cookie."])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ми використовуємо файли cookie на нашому веб-сайті для основних цілей, а також для статистичних і маркетингових цілей. Зовнішні носії також можуть використовувати файли cookie."])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Звести до мінімуму"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Видалити дані"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Легенда"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = Всі файли cookie цієї категорії прийняті\n▣ = Деякі файли cookie, прийняті в цій категорії\n- = У цій категорії файли cookie не приймаються"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Всі приймають"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Зберегти виділення"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Прийнято"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Відхилено"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Частково прийнято"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Показати інформацію про файли cookie"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Інформація про файли cookie"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Індивідуальні налаштування захисту даних"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["захист даних"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/privacy"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["відбиток"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/imprint"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Прийняти"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ім'я"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["постачальників"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["призначення"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Захист даних"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ім'я файлу cookie"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Термін дії файлів cookie"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Ліворуч"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Згода на використання файлів cookie"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Власник сайту"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Зберігає схвалення або відхилення в окремих файлах cookie."])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1 рік"])}
        }
      },
      "zh": {
        "generalLabels": {
          "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["隐私设置"])},
          "details": {
            "back": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["溯源"])}
          },
          "description": {
            "details": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["在这里，你会发现所有使用的cookies的概述。您可以同意个别类别或个别cookies，并有关于个别cookies的进一步信息显示。"])},
            "main": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["我们在网站上使用cookies是为了必要的目的，也是为了统计和营销目的。外部媒体也可能使用cookies。"])}
          },
          "minimize": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["尽量减少"])},
          "clearSite": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["删除数据"])},
          "info": {
            "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["传说"])},
            "text": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["✓ = 接受该类别中的所有\n▣ = 该类别中接受的一些\n- = 此类别中不接受cookies"])}
          },
          "button": {
            "acceptAll": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["接受所有"])},
            "acceptSelection": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["保存选择"])}
          },
          "binarySliderLabels": {
            "accepted": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["已接受"])},
            "declined": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["被拒绝的"])},
            "partial": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["部分接受"])}
          },
          "showCookieInformation": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["显示cookie信息"])},
          "cookieDetails": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["饼干详情"])},
          "individualSettings": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["个人隐私设置"])},
          "requiredLinks": {
            "privacy": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["数据保护"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/privacy"])}
            },
            "impress": {
              "title": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["版本说明"])},
              "href": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["/imprint"])}
            }
          }
        },
        "cookieLabels": {
          "accept": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["接受"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["命名"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["供应商"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["宗旨"])},
          "privacy": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["隐私政策"])},
          "hosts": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Host"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["饼干名称"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie的有效性"])},
          "links": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["链接"])}
        },
        "metaCookieTitles": {
          "id": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["meta-cookie"])},
          "name": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Cookie协议"])},
          "provider": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["网站所有者"])},
          "purpose": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["保存对个别cookies的批准或拒绝。"])},
          "cookieName": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["consents"])},
          "cookieValidityPeriod": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["1年"])}
        }
      }
    }
  });
}

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _withScopeId = (n) => (pushScopeId("data-v-adc0791c"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { id: "cookie-consent" };
const _hoisted_2$1 = ["title"];
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "settings-icon" }, null, -1));
const _hoisted_4 = [
  _hoisted_3$1
];
const _hoisted_5 = ["dir"];
const _hoisted_6 = { id: "cookie-consent-opacity-container" };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = { class: "relative z-10" };
const _hoisted_9 = ["title"];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "absolute arrow-up top-[-4px] left-[5px]" }, null, -1));
const _hoisted_11 = {
  class: "text-[13px] px-2 text-left my-1 mx-0",
  style: { "line-height": "1.2" }
};
const _hoisted_12 = ["title"];
const _hoisted_13 = ["title"];
const _hoisted_14 = { class: "inline-flex h-[45px] mt-4" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "select-none text-[36px]" }, "\u{1F36A}", -1));
const _hoisted_16 = { class: "select-none font-bold mt-[10px]" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "mt-5 mb-2 mx-0 rounded-b-2xl" }, null, -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "mt-2 mb-3.5 rounded-t-2xl" }, null, -1));
const _hoisted_19 = { class: "categories" };
const _hoisted_20 = { class: "relative w-[20px] h-[20px] flex checkbox-container" };
const _hoisted_21 = ["id", "checked", "disabled", "onChange"];
const _hoisted_22 = {
  key: 0,
  class: "checkbox-partial-indicator"
};
const _hoisted_23 = {
  key: 1,
  class: "checkbox-none-indicator"
};
const _hoisted_24 = ["for"];
const _hoisted_25 = {
  id: "link-container",
  class: "bg-white rounded-t-lg sticky pb-3 -bottom-2"
};
const _hoisted_26 = { class: "my-[6px] rounded-lg" };
const _hoisted_27 = ["href"];
const _hoisted_28 = ["href"];
const _hoisted_29 = ["href"];
const _hoisted_30 = {
  key: 1,
  id: "details-container",
  class: "text-left"
};
const _hoisted_31 = ["title"];
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "-", -1));
const _hoisted_33 = [
  _hoisted_32
];
const _hoisted_34 = { class: "inline-flex h-[45px] mt-4" };
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "select-none text-[36px]" }, "\u{1F36A}", -1));
const _hoisted_36 = { class: "select-none font-bold mt-[10px]" };
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "my-2 mx-0 rounded-b-2xl" }, null, -1));
const _hoisted_38 = { class: "text-center" };
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "mt-2 mb-3.5 rounded-t-2xl" }, null, -1));
const _hoisted_40 = {
  key: 0,
  class: "rtl:right-auto rtl:left-0 inline-flex absolute right-0 top-0"
};
const _hoisted_41 = ["id", "onClick"];
const _hoisted_42 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "binary-slider-circle" }, null, -1));
const _hoisted_43 = [
  _hoisted_42
];
const _hoisted_44 = { class: "label-container pt-4" };
const _hoisted_45 = { class: "mt-2 mb-1 ltr:before:content-[''] ltr:before:border-2 ltr:before:border-solid ltr:before:border-black ltr:before:mr-4 rtl:border-r-4 rtl:border-solid rtl:border-black rtl:text-right rtl:pr-2 font-bold" };
const _hoisted_46 = { class: "table-container h-0 transition-all duration-700 overflow-hidden" };
const _hoisted_47 = { key: 0 };
const _hoisted_48 = { class: "table-binary-slider-container" };
const _hoisted_49 = ["onClick"];
const _hoisted_50 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "binary-slider-circle" }, null, -1));
const _hoisted_51 = [
  _hoisted_50
];
const _hoisted_52 = { key: 0 };
const _hoisted_53 = { key: 1 };
const _hoisted_54 = { key: 0 };
const _hoisted_55 = { key: 1 };
const _hoisted_56 = { key: 0 };
const _hoisted_57 = {
  key: 1,
  style: { "white-space": "pre-line" }
};
const _hoisted_58 = { key: 1 };
const _hoisted_59 = ["href"];
const _hoisted_60 = { key: 2 };
const _hoisted_61 = { key: 0 };
const _hoisted_62 = { key: 1 };
const _hoisted_63 = { key: 3 };
const _hoisted_64 = { key: 0 };
const _hoisted_65 = { key: 1 };
const _hoisted_66 = { key: 4 };
const _hoisted_67 = { key: 0 };
const _hoisted_68 = { key: 1 };
const _hoisted_69 = { key: 5 };
const _hoisted_70 = ["href"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CookieConsent",
  props: {
    categories: null,
    requiredLinks: null,
    links: null,
    useMetaCookie: { type: Boolean, default: false },
    animationDuration: { default: "1.5s" },
    minimizeAnimationDuration: { default: "1s" },
    hideDuration: { default: "1s" },
    storagePrefix: { default: "consent" },
    storageConsentsKey: { default: "consents" }
  },
  setup(__props) {
    const props = __props;
    const { t, locale } = useI18n();
    const consents = reactive([]);
    const isMainContainerVisible = ref(true);
    const isMinimized = ref(false);
    const showConsent = ref(false);
    const blurOverlayReverse = ref(false);
    const detailsCards = ref([]);
    const isInfoOpen = ref(false);
    const metaCookie = ref({
      id: t("metaCookieTitles.id"),
      name: t("metaCookieTitles.name"),
      provider: t("metaCookieTitles.provider"),
      purpose: t("metaCookieTitles.purpose"),
      cookieName: props.storageConsentsKey,
      cookieValidityPeriod: t("metaCookieTitles.cookieValidityPeriod")
    });
    if (!(props.storageConsentsKey in localStorage))
      showConsent.value = true;
    onBeforeMount(() => {
      Consents$1(metaCookie.value, props.useMetaCookie, props.storagePrefix, props.storageConsentsKey, props.categories, consents);
      document.documentElement.style.setProperty("--cookie-consent-animation-duration", props.animationDuration);
      document.documentElement.style.setProperty("--cookie-consent-minimize-animation-duration", props.minimizeAnimationDuration);
      document.documentElement.style.setProperty("--cookie-consent-hide-duration", props.hideDuration);
    });
    onMounted(() => {
    });
    function getCookieCountForCategory(category) {
      const count = category.cookies && Array.isArray(category.cookies) ? category.cookies.length : 0;
      return count.toLocaleString(locale.value);
    }
    function setTransformToWidthAndHeight() {
      let currentWidth, currentHeight;
      if (isMainContainerVisible.value) {
        currentWidth = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-width");
        currentHeight = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-height");
      } else {
        currentWidth = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-details-width");
        currentHeight = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-details-height");
      }
      document.documentElement.style.setProperty("--transform-current-width", currentWidth);
      document.documentElement.style.setProperty("--transform-current-height", currentHeight);
    }
    function toggleInfo() {
      isInfoOpen.value = !isInfoOpen.value;
    }
    function setTransformToXY(container) {
      let containerWidth;
      let offsetTop = window.innerHeight / 4;
      if (isMainContainerVisible.value) {
        containerWidth = +getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-width").replace("px", "");
      } else {
        containerWidth = +getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-details-width").replace("px", "");
      }
      const offsetLeft = window.innerWidth / 2 - containerWidth / 2;
      offsetTop = container.offsetTop || offsetTop;
      const x = window.innerWidth - offsetLeft - 45 - containerWidth / 2;
      const y = window.innerHeight - offsetTop - 60;
      document.documentElement.style.setProperty("--transform-minimize-x", `${x}px`);
      document.documentElement.style.setProperty("--transform-minimize-y", `${y}px`);
    }
    function setCategoryConsent(event, index) {
      consents[index].partial = false;
      consents[index].accepted = event.target.checked;
      for (let i = 0; i < consents[index].cookies.length; i++) {
        consents[index].cookies[i].accepted = event.target.checked;
      }
    }
    function maximize(event) {
      event.preventDefault();
      setTransformToWidthAndHeight();
      showConsent.value = true;
      nextTick(() => {
        const overlay = document.getElementById("overlay");
        const container = document.getElementById("container");
        setTransformToXY(container);
        overlay.classList.remove("blur-overlay");
        isMinimized.value = false;
        blurOverlayReverse.value = true;
        container.classList.add("maximize");
      });
    }
    function clearSite(event) {
      event.preventDefault();
      window.Consents.clear();
    }
    function minimize(event) {
      event.preventDefault();
      setTransformToWidthAndHeight();
      const container = document.getElementById("container");
      const overlay = document.getElementById("overlay");
      overlay.classList.remove("blur-overlay-reverse");
      container.classList.remove("transform-to-details");
      container.classList.remove("transform-to-main");
      container.classList.remove("maximize");
      setTransformToXY(container);
      overlay.classList.add("blur-overlay");
      container.classList.add("minimize");
      const animationDuration = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-minimize-animation-duration");
      setTimeout(() => {
        showConsent.value = false;
        isMinimized.value = true;
      }, +animationDuration.replace("s", "") * 1e3 - 50);
    }
    function hideConsent() {
      setTransformToWidthAndHeight();
      const container = document.getElementById("container");
      const overlay = document.getElementById("overlay");
      overlay.classList.remove("blur-overlay-reverse");
      setTransformToXY(container);
      overlay.classList.add("blur-overlay");
      container.classList.add("hide-consent");
      const animationDuration = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-hide-duration");
      setTimeout(() => {
        showConsent.value = false;
        overlay.classList.remove("blur-overlay");
        container.classList.remove("hide-consent");
      }, +animationDuration.replace("s", "") * 1e3 - 50);
    }
    function showMain(event) {
      event.preventDefault();
      const container = document.getElementById("container");
      const opacityContainer = document.getElementById("cookie-consent-opacity-container");
      opacityContainer.classList.remove("transform-opacity-to-details");
      opacityContainer.classList.add("transform-opacity-to-main");
      container.classList.remove("transform-to-details");
      container.classList.remove("maximize");
      container.classList.add("transform-to-main");
      const animationDuration = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-animation-duration");
      setTimeout(() => {
        isMainContainerVisible.value = true;
      }, +animationDuration.replace("s", "") / 2 * 1e3);
    }
    function showDetails(event) {
      event.preventDefault();
      const container = document.getElementById("container");
      const opacityContainer = document.getElementById("cookie-consent-opacity-container");
      opacityContainer.classList.remove("transform-opacity-to-main");
      opacityContainer.classList.add("transform-opacity-to-details");
      container.classList.remove("transform-to-main");
      container.classList.remove("maximize");
      container.classList.add("transform-to-details");
      const animationDuration = getComputedStyle(document.documentElement).getPropertyValue("--cookie-consent-animation-duration");
      setTimeout(() => {
        isMainContainerVisible.value = false;
      }, +animationDuration.replace("s", "") / 2 * 1e3);
    }
    function acceptSelection() {
      hideConsent();
      const obj = {};
      for (let i = 1; i < consents.length; i++) {
        for (let j = 0; j < consents[i].cookies.length; j++) {
          const cookieConsent = consents[i].cookies[j];
          const cookie = props.categories[i].cookies[j];
          const key = `${props.storagePrefix}-${props.categories[i].id}-${cookie.id}`;
          if (cookieConsent.accepted) {
            obj[key] = true;
            if ("onAccepted" in cookie && typeof cookie.onAccepted === "function") {
              cookie.onAccepted();
            }
          } else {
            obj[key] = false;
            if ("onDenied" in cookie && typeof cookie.onDenied === "function") {
              cookie.onDenied();
            }
          }
        }
      }
      localStorage.setItem(props.storageConsentsKey, JSON.stringify(obj));
      if (props.useMetaCookie)
        setMetaCookie(obj);
    }
    function setMetaCookie(obj) {
      const expireDate = new Date();
      expireDate.setFullYear(expireDate.getFullYear() + 1);
      document.cookie = `${t("metaCookieTitles.cookieName")}=${JSON.stringify(obj)};samesite=Lax;secure=true;expires=${expireDate}`;
    }
    function acceptAll() {
      hideConsent();
      for (const consent of consents) {
        consent.accepted = true;
        consent.partial = false;
        for (const cookieConsent of consent.cookies) {
          cookieConsent.accepted = true;
        }
      }
      const obj = {};
      for (let i = 1; i < props.categories.length; i++) {
        for (let j = 0; j < props.categories[i].cookies.length; j++) {
          const cookie = props.categories[i].cookies[j];
          const key = `${props.storagePrefix}-${props.categories[i].id}-${cookie.id}`;
          obj[key] = true;
          if ("onAccepted" in cookie && typeof cookie.onAccepted === "function") {
            cookie.onAccepted();
          }
        }
      }
      localStorage.setItem(props.storageConsentsKey, JSON.stringify(obj));
      if (props.useMetaCookie)
        setMetaCookie(obj);
    }
    function toggleCookieInformation(event) {
      event.preventDefault();
      const parent = event.target.parentElement;
      if (parent) {
        const tableContainer = parent.querySelector(".table-container");
        if (tableContainer) {
          const tables = tableContainer.querySelectorAll("table");
          const currentHeight = +tableContainer.style.height.replace("px", "");
          let height = 0;
          if (currentHeight === 0) {
            if (tables.length > 1) {
              height -= 4 * (tables.length - 1);
            }
            for (const table of tables) {
              height += table.offsetHeight + 7;
            }
            tableContainer.style.height = `${height}px`;
          } else {
            tableContainer.style.height = "0";
          }
        }
      }
    }
    function toggleConsent(event, categoryIndex, cookieIndex) {
      const added = event.target.classList.toggle("active");
      if (!cookieIndex && cookieIndex !== 0) {
        if (added) {
          consents[categoryIndex].partial = false;
          consents[categoryIndex].accepted = true;
          for (let i = 0; i < consents[categoryIndex].cookies.length; i++) {
            consents[categoryIndex].cookies[i].accepted = true;
          }
        } else {
          consents[categoryIndex].partial = false;
          consents[categoryIndex].accepted = false;
          for (let i = 0; i < consents[categoryIndex].cookies.length; i++) {
            consents[categoryIndex].cookies[i].accepted = false;
          }
        }
        return;
      }
      const cookieDetailsCard = unref(detailsCards)[categoryIndex];
      if (!added) {
        const binarySliders = cookieDetailsCard.querySelectorAll(".table-container .binary-slider");
        const res = [];
        for (const slider of binarySliders) {
          res.push(slider.classList.contains("active"));
        }
        consents[categoryIndex].partial = res.includes(true);
        consents[categoryIndex].accepted = false;
        consents[categoryIndex].cookies[cookieIndex].accepted = false;
      } else {
        const binarySliders = cookieDetailsCard.querySelectorAll(".table-container .binary-slider");
        consents[categoryIndex].cookies[cookieIndex].accepted = true;
        const res = [];
        for (const slider of binarySliders) {
          res.push(slider.classList.contains("active"));
        }
        if (!res.includes(false)) {
          consents[categoryIndex].partial = false;
          consents[categoryIndex].accepted = true;
        } else {
          consents[categoryIndex].partial = true;
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", {
          class: "settings-icon-container",
          title: unref(t)("generalLabels.title"),
          onClick: _cache[0] || (_cache[0] = ($event) => maximize($event))
        }, _hoisted_4, 8, _hoisted_2$1),
        showConsent.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          id: "overlay",
          class: normalizeClass(["w-full h-full fixed top-0 left-0", { "hidden": isMinimized.value, "blur-overlay-reverse": blurOverlayReverse.value }])
        }, [
          createBaseVNode("div", {
            id: "container",
            dir: unref(locale) === "ar" ? "rtl" : "ltr",
            class: "rounded py-2 px-4 text-center bg-white relative w-[var(--cookie-consent-width)] h-[var(--cookie-consent-height)] overflow-x-hidden overflow-y-auto mx-auto my-[8vh] sm:my-[25vh]"
          }, [
            createBaseVNode("div", _hoisted_6, [
              isMainContainerVisible.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createBaseVNode("header", null, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("span", {
                      class: "cookie-consent-info font-bold",
                      title: unref(t)("generalLabels.info.title"),
                      style: { "font-family": "'Verdana'" },
                      onClick: toggleInfo
                    }, "i", 8, _hoisted_9),
                    createBaseVNode("div", {
                      class: normalizeClass(["rounded w-full h-max bg-blue-200 absolute top-[26px] left-0", { "cookie-consent-info-hide": !isInfoOpen.value }])
                    }, [
                      _hoisted_10,
                      createBaseVNode("p", _hoisted_11, toDisplayString$1(unref(t)("generalLabels.info.text")), 1)
                    ], 2)
                  ]),
                  createBaseVNode("a", {
                    rel: "nofollow",
                    href: "#",
                    class: "minimizer",
                    title: unref(t)("generalLabels.minimize"),
                    onClick: _cache[1] || (_cache[1] = ($event) => minimize($event))
                  }, null, 8, _hoisted_12),
                  createBaseVNode("a", {
                    rel: "nofollow",
                    href: "#",
                    class: "clear-site",
                    title: unref(t)("generalLabels.clearSite"),
                    onClick: _cache[2] || (_cache[2] = ($event) => clearSite($event))
                  }, null, 8, _hoisted_13),
                  createBaseVNode("div", _hoisted_14, [
                    _hoisted_15,
                    createBaseVNode("h4", _hoisted_16, toDisplayString$1(unref(t)("generalLabels.title")), 1)
                  ]),
                  _hoisted_17,
                  createBaseVNode("p", null, toDisplayString$1(unref(t)("generalLabels.description.main")), 1),
                  _hoisted_18
                ]),
                createBaseVNode("div", _hoisted_19, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(props.categories, (category, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: category.id,
                      class: "relative ml-4 inline-flex"
                    }, [
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("input", {
                          id: `cookie-consent-checkbox-${category.id}`,
                          type: "checkbox",
                          checked: consents[index].accepted,
                          disabled: index === 0,
                          class: "m-0",
                          onChange: ($event) => setCategoryConsent($event, index)
                        }, null, 40, _hoisted_21),
                        index > 0 && consents[index].partial ? (openBlock(), createElementBlock("span", _hoisted_22)) : createCommentVNode("", true),
                        index > 0 && !consents[index].partial && !consents[index].accepted ? (openBlock(), createElementBlock("span", _hoisted_23)) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("label", {
                        for: `cookie-consent-checkbox-${category.id}`,
                        class: "ml-2 rtl:mr-2 select-none hover:text-orange-400 -translate-y-[2px]"
                      }, toDisplayString$1(category.label), 9, _hoisted_24)
                    ]);
                  }), 128)),
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      class: "btn",
                      onClick: _cache[3] || (_cache[3] = ($event) => acceptAll())
                    }, toDisplayString$1(unref(t)("generalLabels.button.acceptAll")), 1),
                    createBaseVNode("button", {
                      class: "btn",
                      onClick: _cache[4] || (_cache[4] = ($event) => acceptSelection())
                    }, toDisplayString$1(unref(t)("generalLabels.button.acceptSelection")), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_25, [
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("a", {
                      rel: "nofollow",
                      href: "#",
                      class: "font-bold shadow-green-700 hover:shadow-[0_0_10px_green] text-[var(--cookie-consent-settings-color)] w-full h-full p-0.5 block",
                      onClick: _cache[5] || (_cache[5] = ($event) => showDetails($event))
                    }, toDisplayString$1(unref(t)("generalLabels.individualSettings")), 1)
                  ]),
                  createBaseVNode("a", {
                    class: "hover:text-orange-400",
                    rel: "nofollow",
                    href: "#",
                    onClick: _cache[6] || (_cache[6] = ($event) => showDetails($event))
                  }, [
                    createBaseVNode("b", null, toDisplayString$1(unref(t)("generalLabels.cookieDetails")), 1)
                  ]),
                  createBaseVNode("a", {
                    rel: "nofollow",
                    href: unref(t)("generalLabels.requiredLinks.privacy.href")
                  }, [
                    createBaseVNode("b", null, toDisplayString$1(unref(t)("generalLabels.requiredLinks.privacy.title")), 1)
                  ], 8, _hoisted_27),
                  createBaseVNode("a", {
                    rel: "nofollow",
                    href: unref(t)("generalLabels.requiredLinks.impress.href")
                  }, [
                    createBaseVNode("b", null, toDisplayString$1(unref(t)("generalLabels.requiredLinks.impress.title")), 1)
                  ], 8, _hoisted_28),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.links, (link) => {
                    return openBlock(), createElementBlock("a", {
                      key: link.title,
                      rel: "nofollow",
                      href: link.href
                    }, [
                      createBaseVNode("b", null, toDisplayString$1(link.title), 1)
                    ], 8, _hoisted_29);
                  }), 128))
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_30, [
                createBaseVNode("header", null, [
                  createBaseVNode("a", {
                    rel: "nofollow",
                    href: "#",
                    class: "absolute top-[6px] right-10 font-bold",
                    onClick: _cache[7] || (_cache[7] = ($event) => showMain($event))
                  }, toDisplayString$1(unref(t)("generalLabels.details.back")), 1),
                  createBaseVNode("a", {
                    rel: "nofollow",
                    href: "#",
                    class: "minimizer",
                    title: unref(t)("generalLabels.minimize"),
                    onClick: _cache[8] || (_cache[8] = ($event) => minimize($event))
                  }, _hoisted_33, 8, _hoisted_31),
                  createBaseVNode("div", _hoisted_34, [
                    _hoisted_35,
                    createBaseVNode("h4", _hoisted_36, toDisplayString$1(unref(t)("generalLabels.title")), 1)
                  ]),
                  _hoisted_37,
                  createBaseVNode("p", _hoisted_38, toDisplayString$1(unref(t)("generalLabels.description.details")), 1),
                  _hoisted_39,
                  createBaseVNode("div", null, [
                    createBaseVNode("button", {
                      onClick: _cache[9] || (_cache[9] = ($event) => acceptAll())
                    }, toDisplayString$1(unref(t)("generalLabels.button.acceptAll")), 1),
                    createBaseVNode("button", {
                      onClick: _cache[10] || (_cache[10] = ($event) => acceptSelection())
                    }, toDisplayString$1(unref(t)("generalLabels.button.acceptSelection")), 1)
                  ])
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(props.categories, (category, categoryIndex) => {
                  return openBlock(), createElementBlock("div", {
                    key: category.id,
                    ref_for: true,
                    ref: (el) => {
                      detailsCards.value[categoryIndex] = el;
                    },
                    class: "cookie-details-card w-full rounded relative px-3 my-4 mx-2"
                  }, [
                    categoryIndex > 0 ? (openBlock(), createElementBlock("div", _hoisted_40, [
                      createBaseVNode("span", {
                        class: normalizeClass(["select-none mt-[12px] rtl:mt-[6px]", { "hidden": !consents[categoryIndex].accepted }])
                      }, toDisplayString$1(unref(t)("generalLabels.binarySliderLabels.accepted")), 3),
                      createBaseVNode("span", {
                        class: normalizeClass(["select-none mt-[12px] rtl:mt-[6px]", { "hidden": consents[categoryIndex].accepted || consents[categoryIndex].partial }])
                      }, toDisplayString$1(unref(t)("generalLabels.binarySliderLabels.declined")), 3),
                      createBaseVNode("span", {
                        class: normalizeClass(["select-none mt-[12px] rtl:mt-[6px]", { "hidden": !consents[categoryIndex].partial }])
                      }, toDisplayString$1(unref(t)("generalLabels.binarySliderLabels.partial")), 3),
                      createBaseVNode("div", null, [
                        createBaseVNode("div", {
                          id: `cookie-consent-details-checkbox-${category.id}`,
                          class: normalizeClass(["binary-slider m-[8px]", { active: consents[categoryIndex].accepted, partial: consents[categoryIndex].partial }]),
                          onClick: ($event) => toggleConsent($event, categoryIndex)
                        }, _hoisted_43, 10, _hoisted_41)
                      ])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_44, [
                      createBaseVNode("h5", _hoisted_45, toDisplayString$1(category.label) + " (" + toDisplayString$1(getCookieCountForCategory(category)) + ") ", 1)
                    ]),
                    createBaseVNode("p", null, toDisplayString$1(category.description), 1),
                    createBaseVNode("a", {
                      rel: "nofollow",
                      href: "#",
                      class: "text-center block font-bold",
                      onClick: _cache[11] || (_cache[11] = ($event) => toggleCookieInformation($event))
                    }, toDisplayString$1(unref(t)("generalLabels.showCookieInformation")), 1),
                    createBaseVNode("div", _hoisted_46, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(category.cookies, (cookie, cookieIndex) => {
                        return openBlock(), createElementBlock("table", {
                          key: cookie.cookieName
                        }, [
                          categoryIndex > 0 ? (openBlock(), createElementBlock("tr", _hoisted_47, [
                            createBaseVNode("td", null, toDisplayString$1(unref(t)("cookieLabels.accept")), 1),
                            createBaseVNode("td", null, [
                              createBaseVNode("div", _hoisted_48, [
                                createBaseVNode("div", {
                                  class: normalizeClass(["binary-slider", { "active": consents[categoryIndex].cookies[cookieIndex].accepted }]),
                                  onClick: ($event) => toggleConsent($event, categoryIndex, cookieIndex)
                                }, _hoisted_51, 10, _hoisted_49),
                                createBaseVNode("div", {
                                  class: normalizeClass(["select-none mt-0 ml-2 rtl:mr-2 rtl:-mt-[8px]", { "!hidden": !consents[categoryIndex].cookies[cookieIndex].accepted }])
                                }, toDisplayString$1(unref(t)("generalLabels.binarySliderLabels.accepted")), 3),
                                createBaseVNode("div", {
                                  class: normalizeClass(["select-none mt-0 ml-2 rtl:mr-2 rtl:-mt-[8px]", { "!hidden": consents[categoryIndex].cookies[cookieIndex].accepted }])
                                }, toDisplayString$1(unref(t)("generalLabels.binarySliderLabels.declined")), 3)
                              ])
                            ])
                          ])) : createCommentVNode("", true),
                          createBaseVNode("tr", null, [
                            createBaseVNode("td", null, toDisplayString$1(unref(t)("cookieLabels.name")), 1),
                            categoryIndex === 0 && cookieIndex === 0 ? (openBlock(), createElementBlock("td", _hoisted_52, toDisplayString$1(unref(t)("metaCookieTitles.name")), 1)) : (openBlock(), createElementBlock("td", _hoisted_53, toDisplayString$1(cookie.name), 1))
                          ]),
                          createBaseVNode("tr", null, [
                            createBaseVNode("td", null, toDisplayString$1(unref(t)("cookieLabels.provider")), 1),
                            categoryIndex === 0 && cookieIndex === 0 ? (openBlock(), createElementBlock("td", _hoisted_54, toDisplayString$1(unref(t)("metaCookieTitles.provider")), 1)) : (openBlock(), createElementBlock("td", _hoisted_55, toDisplayString$1(cookie.provider), 1))
                          ]),
                          createBaseVNode("tr", null, [
                            createBaseVNode("td", null, toDisplayString$1(unref(t)("cookieLabels.purpose")), 1),
                            categoryIndex === 0 && cookieIndex === 0 ? (openBlock(), createElementBlock("td", _hoisted_56, toDisplayString$1(unref(t)("metaCookieTitles.purpose")), 1)) : (openBlock(), createElementBlock("td", _hoisted_57, toDisplayString$1(cookie.purpose), 1))
                          ]),
                          "privacyURL" in cookie ? (openBlock(), createElementBlock("tr", _hoisted_58, [
                            createBaseVNode("td", null, toDisplayString$1(unref(t)("cookieLabels.privacy")), 1),
                            createBaseVNode("td", null, [
                              createBaseVNode("a", {
                                rel: "nofollow",
                                href: cookie.privacyURL
                              }, toDisplayString$1(cookie.privacyURL), 9, _hoisted_59)
                            ])
                          ])) : createCommentVNode("", true),
                          "hosts" in cookie ? (openBlock(), createElementBlock("tr", _hoisted_60, [
                            createBaseVNode("td", null, toDisplayString$1(unref(t)("cookieLabels.hosts")), 1),
                            categoryIndex === 0 && cookieIndex === 0 ? (openBlock(), createElementBlock("td", _hoisted_61, toDisplayString$1(unref(t)("metaCookieTitles.hosts")), 1)) : (openBlock(), createElementBlock("td", _hoisted_62, toDisplayString$1(cookie.hosts), 1))
                          ])) : createCommentVNode("", true),
                          "cookieName" in cookie ? (openBlock(), createElementBlock("tr", _hoisted_63, [
                            createBaseVNode("td", null, toDisplayString$1(unref(t)("cookieLabels.cookieName")), 1),
                            categoryIndex === 0 && cookieIndex === 0 ? (openBlock(), createElementBlock("td", _hoisted_64, toDisplayString$1(unref(t)("metaCookieTitles.cookieName")), 1)) : (openBlock(), createElementBlock("td", _hoisted_65, [
                              createBaseVNode("i", null, toDisplayString$1(cookie.cookieName), 1)
                            ]))
                          ])) : createCommentVNode("", true),
                          "cookieValidityPeriod" in cookie ? (openBlock(), createElementBlock("tr", _hoisted_66, [
                            createBaseVNode("td", null, toDisplayString$1(unref(t)("cookieLabels.cookieValidityPeriod")), 1),
                            categoryIndex === 0 && cookieIndex === 0 ? (openBlock(), createElementBlock("td", _hoisted_67, toDisplayString$1(unref(t)("metaCookieTitles.cookieValidityPeriod")), 1)) : (openBlock(), createElementBlock("td", _hoisted_68, toDisplayString$1(cookie.cookieValidityPeriod), 1))
                          ])) : createCommentVNode("", true),
                          "links" in cookie && cookie.links && cookie.links.length > 0 ? (openBlock(), createElementBlock("tr", _hoisted_69, [
                            createBaseVNode("td", null, toDisplayString$1(unref(t)("cookieLabels.links")), 1),
                            createBaseVNode("td", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(cookie.links, (link) => {
                                return openBlock(), createElementBlock("a", {
                                  key: link.title,
                                  rel: "nofollow",
                                  href: link.href,
                                  target: "_blank"
                                }, toDisplayString$1(link.title || link.href), 9, _hoisted_70);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ])
                  ]);
                }), 128))
              ]))
            ])
          ], 8, _hoisted_5)
        ], 2)) : createCommentVNode("", true)
      ]);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$2);
var CookieConsent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-adc0791c"]]);

var LanguageFlags_vue_vue_type_style_index_0_lang = '';

var LanguageFlags_vue_vue_type_style_index_1_scoped_true_lang = '';

const _hoisted_1$1 = { class: "language-indicator-container" };
const _hoisted_2 = ["onClick", "title"];
const _hoisted_3 = ["innerHTML"];

const _sfc_main$1 = {
  __name: 'LanguageFlags',
  setup(__props) {

const { locale } = useI18n();

const langs = [
  {
    locale: 'de',
    flag: '&#127465&#127466',
    title: 'German'
  },
  {
    locale: 'en',
    flag: '&#127468&#127463',
    title: 'English'
  },
  {
    locale: 'da',
    flag: '&#127465&#127472',
    title: 'Danish'
  },
  {
    locale: 'nl',
    flag: '&#127475&#127473',
    title: 'Dutch'
  },
  {
    locale: 'lb',
    flag: '&#127473&#127482',
    title: 'Luxembourgian'
  },
  {
    locale: 'ro',
    flag: '&#127479&#127476',
    title: 'Romanian'
  },
  {
    locale: 'hu',
    flag: '&#127469&#127482',
    title: 'Hungarian'
  },
  {
    locale: 'fr',
    flag: '&#127467&#127479',
    title: 'French'
  },
  {
    locale: 'pl',
    flag: '&#127477&#127473',
    title: 'Polish'
  },
  {
    locale: 'cs',
    flag: '&#127464&#127487',
    title: 'Czech'
  },
  {
    locale: 'it',
    flag: '&#127470&#127481',
    title: 'Italian'
  },
  {
    locale: 'hr',
    flag: '&#127469&#127479',
    title: 'Croatian'
  },
  {
    locale: 'sl',
    flag: '&#127480&#127470',
    title: 'Slovenian'
  },
  {
    locale: 'sk',
    flag: '&#127480&#127472',
    title: 'Slovakian'
  },
  {
    locale: 'es',
    flag: '&#127466&#127480',
    title: 'Spanish'
  },
  {
    locale: 'pt',
    flag: '&#127477&#127481',
    title: 'Portuguese'
  },
  {
    locale: 'et',
    flag: '&#127466&#127466',
    title: 'Estonian'
  },
  {
    locale: 'lv',
    flag: '&#127473&#127483',
    title: 'Latvian'
  },
  {
    locale: 'lt',
    flag: '&#127473&#127481',
    title: 'Lithuanian'
  },
  {
    locale: 'no',
    flag: '&#127475&#127476',
    title: 'Norwegian'
  },
  {
    locale: 'sv',
    flag: '&#127480&#127466',
    title: 'Swedish'
  },
  {
    locale: 'fi',
    flag: '&#127467&#127470',
    title: 'Finnish'
  },
  {
    locale: 'ru',
    flag: '&#127479&#127482',
    title: 'Russian'
  },
  {
    locale: 'uk',
    flag: '&#127482&#127462',
    title: 'Ukrainian'
  },
  {
    locale: 'el',
    flag: '&#127468&#127479',
    title: 'Greek'
  },
  {
    locale: 'tr',
    flag: '&#127481&#127479',
    title: 'Turkish'
  },
  {
    locale: 'bg',
    flag: '&#127463&#127468',
    title: 'Bulgarian'
  },
  {
    locale: 'sq',
    flag: '&#127462&#127473',
    title: 'Albanian'
  },
  {
    locale: 'hy',
    flag: '&#127462&#127474',
    title: 'Armenian'
  },
  {
    locale: 'zh',
    flag: '&#127464&#127475',
    title: 'Chinese'
  },
  {
    locale: 'hi',
    flag: '&#127470&#127475',
    title: 'Indian (Hindi)'
  },
  {
    locale: 'ar',
    flag: '&#127462&#127466',
    title: 'Arabian'
  },
  {
    flag: '&#8634;',
    title: 'Reset'
  }
];

function setLang(l = 'en', reset = false) {
  console.log(reset);
  if (reset) {
    Consents.clear();
    location.reload();
  }

  locale.value = l;
}


return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    (openBlock(), createElementBlock(Fragment, null, renderList(langs, (lang, index) => {
      return createBaseVNode("span", {
        key: lang.locale,
        class: "language-indicator",
        onClick: $event => (setLang(lang.locale , index === (langs.length - 1))),
        title: lang.title
      }, [
        createBaseVNode("span", {
          innerHTML: lang.flag
        }, null, 8, _hoisted_3)
      ], 8, _hoisted_2)
    }), 64))
  ]))
}
}

};
var LanguageFlags = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-66b60b13"]]);

var App_vue_vue_type_style_index_0_lang = '';

const _hoisted_1 = { style: { "position": "relative", "z-index": "1" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    let lang = ref("en");
    const obj = {
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
          description: "Essenzielle Cookies erm\xF6glichen grundlegende Funktionalit\xE4t und sind f\xFCr den einwandfreien Betrieb der Webseite unabdingbar.",
          cookies: [
            {
              id: "session-cookie",
              name: "Sitzungscookie",
              provider: "Eigent\xFCmer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zus\xE4tzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            }
          ]
        },
        {
          id: "statistic",
          label: "Statistik",
          description: "Statistische Cookies geben uns Einblicke in das Besucherverhalten. Damit k\xF6nnen wir u.A. in Erfahrung bringen, welche Seiten wie h\xE4ufig besucht wurden und wie lange ein Besucher auf einer Seite verweilt.",
          cookies: [
            {
              id: "session-cookie-2",
              name: "Sitzungscookie 2",
              provider: "Eigent\xFCmer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zus\xE4tzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            },
            {
              id: "session-cookie-3",
              name: "Sitzungscookie 3",
              provider: "Eigent\xFCmer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zus\xE4tzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            },
            {
              id: "matomo",
              name: "Matomo",
              provider: "Eigent\xFCmer der Webseite",
              purpose: "Wird verwendet um einige Details \xFCber den Besucher zu speichern, wie die eindeutige Besucher-ID",
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
          description: "Essenzielle Cookies erm\xF6glichen grundlegende Funktionalit\xE4t und sind f\xFCr den einwandfreien Betrieb der Webseite unabdingbar.",
          cookies: [
            {
              id: "session-cookie",
              name: "Sitzungscookie",
              provider: "Eigent\xFCmer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zus\xE4tzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            },
            {
              id: "session-cookie-7",
              name: "Sitzungscookie 3",
              provider: "Eigent\xFCmer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zus\xE4tzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            }
          ]
        },
        {
          id: "essential3",
          label: "Essenziell 3",
          description: "Essenzielle Cookies erm\xF6glichen grundlegende Funktionalit\xE4t und sind f\xFCr den einwandfreien Betrieb der Webseite unabdingbar.",
          cookies: [
            {
              id: "session-cookie",
              name: "Sitzungscookie",
              provider: "Eigent\xFCmer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zus\xE4tzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            },
            {
              id: "session-cookie-6",
              name: "Sitzungscookie 3",
              provider: "Eigent\xFCmer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zus\xE4tzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            }
          ]
        },
        {
          id: "essential4",
          label: "Essenziell 4",
          description: "Essenzielle Cookies erm\xF6glichen grundlegende Funktionalit\xE4t und sind f\xFCr den einwandfreien Betrieb der Webseite unabdingbar.",
          cookies: [
            {
              id: "session-cookie",
              name: "Sitzungscookie",
              provider: "Eigent\xFCmer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zus\xE4tzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            },
            {
              id: "session-cookie-5",
              name: "Sitzungscookie 3",
              provider: "Eigent\xFCmer der Webseite",
              purpose: "Speichert als anonymer Nutzer die Artikel im Warenkorb und als angemeldeter Nutzer zus\xE4tzlich die Tatsache der Anmeldung",
              cookieName: "SESSION",
              cookieValidityPeriod: "2 Stunden"
            }
          ]
        }
      ]
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(LanguageFlags, { style: { "position": "absolute", "z-index": "2" } }),
        createVNode(CookieConsent, {
          ref: "cookie-consent",
          "use-meta-cookie": true,
          "required-links": obj.requiredLinks,
          categories: obj.categories,
          locale: unref(lang),
          style: { "position": "absolute", "z-index": "1" }
        }, null, 8, ["required-links", "categories", "locale"])
      ]);
    };
  }
});

var index = '';

const app = createApp(_sfc_main);
const i18n = createI18n({
  locale: "de"
});
app.use(i18n).mount("#app");
