/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/gray-percentage@2.0.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function r(r){return!isNaN(parseFloat(r))&&isFinite(r)}var o=function(o,t,a){if(void 0===t&&(t=0),void 0===a&&(a=!1),"cool"===t?t=237:"slate"===t?t=122:"warm"===t&&(t=69),!r(t))throw new Error("Hue is not a number");if(!r(o))throw new Error("Lightness is not a number");o>100&&(o=100),o<0&&(o=0);var i=0;if(0!==t){i=19.92978+-.3651759*o+.001737214*Math.pow(o,2)}var n=0;return a?(n=o/100,o="100%,"):(n=(100-o)/100,o="0%,"),"hsla("+t+","+i+"%,"+o+n+")"};export{o as default};
