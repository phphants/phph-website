/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/modularscale@2.0.1/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import e from"lodash.isnumber";var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n={exports:{}};(function(){var o,t;o=e,t={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"augmented fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4},n.exports=function(e,n){var r;return null==e&&(e=0),null==n&&(n="golden"),r=o(n)?n:null!=t[n]?t[n]:t.golden,Math.pow(r,e)}}).call(o);var t=n.exports;export{t as default};
