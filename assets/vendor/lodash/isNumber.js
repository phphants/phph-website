/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lodash@4.17.21/isNumber.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="object"==typeof e&&e&&e.Object===Object&&e,o="object"==typeof self&&self&&self.Object===Object&&self,n=(t||o||Function("return this")()).Symbol,r=n,l=Object.prototype,f=l.hasOwnProperty,i=l.toString,c=r?r.toStringTag:void 0;var u=function(e){var t=f.call(e,c),o=e[c];try{e[c]=void 0;var n=!0}catch(e){}var r=i.call(e);return n&&(t?e[c]=o:delete e[c]),r},a=Object.prototype.toString;var b=u,d=function(e){return a.call(e)},p=n?n.toStringTag:void 0;var j=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":p&&p in Object(e)?b(e):d(e)},y=function(e){return null!=e&&"object"==typeof e};var v=function(e){return"number"==typeof e||y(e)&&"[object Number]"==j(e)};export{v as default};
