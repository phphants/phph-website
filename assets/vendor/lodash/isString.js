/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lodash@4.17.21/isString.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e="object"==typeof t&&t&&t.Object===Object&&t,o="object"==typeof self&&self&&self.Object===Object&&self,n=(e||o||Function("return this")()).Symbol,r=n,l=Object.prototype,i=l.hasOwnProperty,f=l.toString,a=r?r.toStringTag:void 0;var c=function(t){var e=i.call(t,a),o=t[a];try{t[a]=void 0;var n=!0}catch(t){}var r=f.call(t);return n&&(e?t[a]=o:delete t[a]),r},u=Object.prototype.toString;var b=c,d=function(t){return u.call(t)},y=n?n.toStringTag:void 0;var p=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":y&&y in Object(t)?b(t):d(t)},j=Array.isArray;var s=p,v=j,g=function(t){return null!=t&&"object"==typeof t};var O=function(t){return"string"==typeof t||!v(t)&&g(t)&&"[object String]"==s(t)};export{O as default};
