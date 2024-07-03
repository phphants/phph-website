/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lodash@4.17.21/forEach.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n&&!1!==r(t[e],e,t););return t};var e=function(t){return function(r,e,n){for(var o=-1,c=Object(r),u=n(r),a=u.length;a--;){var i=u[t?a:++o];if(!1===e(c[i],i,c))break}return r}}();var n=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n},o="object"==typeof t&&t&&t.Object===Object&&t,c=o,u="object"==typeof self&&self&&self.Object===Object&&self,a=c||u||Function("return this")(),i=a.Symbol,f=i,b=Object.prototype,l=b.hasOwnProperty,p=b.toString,y=f?f.toStringTag:void 0;var v=function(t){var r=l.call(t,y),e=t[y];try{t[y]=void 0;var n=!0}catch(t){}var o=p.call(t);return n&&(r?t[y]=e:delete t[y]),o},j=Object.prototype.toString;var s=v,d=function(t){return j.call(t)},g=i?i.toStringTag:void 0;var O=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":g&&g in Object(t)?s(t):d(t)};var h=function(t){return null!=t&&"object"==typeof t},A=O,x=h;var m=function(t){return x(t)&&"[object Arguments]"==A(t)},w=h,T=Object.prototype,S=T.hasOwnProperty,F=T.propertyIsEnumerable,P=m(function(){return arguments}())?m:function(t){return w(t)&&S.call(t,"callee")&&!F.call(t,"callee")},U=Array.isArray,B={exports:{}};var I=function(){return!1};!function(t,r){var e=a,n=I,o=r&&!r.nodeType&&r,c=o&&t&&!t.nodeType&&t,u=c&&c.exports===o?e.Buffer:void 0,i=(u?u.isBuffer:void 0)||n;t.exports=i}(B,B.exports);var k=/^(?:0|[1-9]\d*)$/;var E=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&k.test(t))&&t>-1&&t%1==0&&t<r};var q=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},D=O,M=q,N=h,C={};C["[object Float32Array]"]=C["[object Float64Array]"]=C["[object Int8Array]"]=C["[object Int16Array]"]=C["[object Int32Array]"]=C["[object Uint8Array]"]=C["[object Uint8ClampedArray]"]=C["[object Uint16Array]"]=C["[object Uint32Array]"]=!0,C["[object Arguments]"]=C["[object Array]"]=C["[object ArrayBuffer]"]=C["[object Boolean]"]=C["[object DataView]"]=C["[object Date]"]=C["[object Error]"]=C["[object Function]"]=C["[object Map]"]=C["[object Number]"]=C["[object Object]"]=C["[object RegExp]"]=C["[object Set]"]=C["[object String]"]=C["[object WeakMap]"]=!1;var G=function(t){return N(t)&&M(t.length)&&!!C[D(t)]};var L=function(t){return function(r){return t(r)}},R={exports:{}};!function(t,r){var e=o,n=r&&!r.nodeType&&r,c=n&&t&&!t.nodeType&&t,u=c&&c.exports===n&&e.process,a=function(){try{var t=c&&c.require&&c.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=a}(R,R.exports);var V=G,W=L,$=R.exports,z=$&&$.isTypedArray,H=z?W(z):V,J=n,K=P,Q=U,X=B.exports,Y=E,Z=H,_=Object.prototype.hasOwnProperty;var tt=function(t,r){var e=Q(t),n=!e&&K(t),o=!e&&!n&&X(t),c=!e&&!n&&!o&&Z(t),u=e||n||o||c,a=u?J(t.length,String):[],i=a.length;for(var f in t)!r&&!_.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||c&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Y(f,i))||a.push(f);return a},rt=Object.prototype;var et=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||rt)};var nt=function(t,r){return function(e){return t(r(e))}}(Object.keys,Object),ot=et,ct=nt,ut=Object.prototype.hasOwnProperty;var at=O,it=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)};var ft=function(t){if(!it(t))return!1;var r=at(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},bt=q;var lt=function(t){return null!=t&&bt(t.length)&&!ft(t)},pt=tt,yt=function(t){if(!ot(t))return ct(t);var r=[];for(var e in Object(t))ut.call(t,e)&&"constructor"!=e&&r.push(e);return r},vt=lt;var jt=e,st=function(t){return vt(t)?pt(t):yt(t)};var dt=lt;var gt=function(t,r){return function(e,n){if(null==e)return e;if(!dt(e))return t(e,n);for(var o=e.length,c=r?o:-1,u=Object(e);(r?c--:++c<o)&&!1!==n(u[c],c,u););return e}}((function(t,r){return t&&jt(t,r,st)}));var Ot=function(t){return t};var ht=r,At=gt,xt=function(t){return"function"==typeof t?t:Ot},mt=U;var wt=function(t,r){return(mt(t)?ht:At)(t,xt(r))};export{wt as default};