/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/decamelize@6.0.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function e(e,{separator:r="_",preserveConsecutiveUppercase:t=!1}={}){if("string"!=typeof e||"string"!=typeof r)throw new TypeError("The `text` and `separator` arguments should be of type `string`");if(e.length<2)return t?e:e.toLowerCase();const p=`$1${r}$2`,a=e.replace(/([\p{Lowercase_Letter}\d])(\p{Uppercase_Letter})/gu,p);return t?((e,r)=>(e=e.replace(/((?<![\p{Uppercase_Letter}\d])[\p{Uppercase_Letter}\d](?![\p{Uppercase_Letter}\d]))/gu,(e=>e.toLowerCase()))).replace(/(\p{Uppercase_Letter}+)(\p{Uppercase_Letter}\p{Lowercase_Letter}+)/gu,((e,t,p)=>t+r+p.toLowerCase())))(a,r):a.replace(/(\p{Uppercase_Letter})(\p{Uppercase_Letter}\p{Lowercase_Letter}+)/gu,p).toLowerCase()}export{e as default};
