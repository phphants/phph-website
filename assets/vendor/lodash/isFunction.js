/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lodash@4.17.21/isFunction.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e="object"==typeof t&&t&&t.Object===Object&&t,n="object"==typeof self&&self&&self.Object===Object&&self,o=(e||n||Function("return this")()).Symbol,r=o,c=Object.prototype,i=c.hasOwnProperty,l=c.toString,f=r?r.toStringTag:void 0;var u=function(t){var e=i.call(t,f),n=t[f];try{t[f]=void 0;var o=!0}catch(t){}var r=l.call(t);return o&&(e?t[f]=n:delete t[f]),r},a=Object.prototype.toString;var b=u,d=function(t){return a.call(t)},j=o?o.toStringTag:void 0;var v=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":j&&j in Object(t)?b(t):d(t)},y=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var p=function(t){if(!y(t))return!1;var e=v(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};export{p as default};
