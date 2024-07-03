/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/convert-css-length@2.0.1/dist/index.esm.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var e=function(e){return parseFloat(e)};function r(r){return null==r&&(r=r),function(n,t,i,f){null==i&&(i=r),null==f&&(f=i);var l=String(n).match(/[\d.\-\+]*\s*(.*)/)[1]||"";if(l===t)return n;var u=e(n);if("px"!==l)if("em"===l)u=e(n)*e(i);else if("rem"===l)u=e(n)*e(r);else{if("ex"!==l)return n;u=e(n)*e(i)*2}var a=u;if("px"!==t)if("em"===t)a=u/e(f);else if("rem"===t)a=u/e(r);else{if("ex"!==t)return n;a=u/e(f)/2}return parseFloat(a.toFixed(5))+t}}export{r as default};
