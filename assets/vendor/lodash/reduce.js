/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lodash@4.17.21/reduce.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=function(t,r,e,n){var o=-1,a=null==t?0:t.length;for(n&&a&&(e=t[++o]);++o<a;)e=r(e,t[o],o,t);return e};var e=function(t){return function(r,e,n){for(var o=-1,a=Object(r),u=n(r),i=u.length;i--;){var c=u[t?i:++o];if(!1===e(a[c],c,a))break}return r}}();var n=function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n},o="object"==typeof t&&t&&t.Object===Object&&t,a=o,u="object"==typeof self&&self&&self.Object===Object&&self,i=a||u||Function("return this")(),c=i.Symbol,f=c,s=Object.prototype,v=s.hasOwnProperty,l=s.toString,p=f?f.toStringTag:void 0;var h=function(t){var r=v.call(t,p),e=t[p];try{t[p]=void 0;var n=!0}catch(t){}var o=l.call(t);return n&&(r?t[p]=e:delete t[p]),o},y=Object.prototype.toString;var b=h,_=function(t){return y.call(t)},d=c?c.toStringTag:void 0;var j=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?b(t):_(t)};var g=function(t){return null!=t&&"object"==typeof t},O=j,w=g;var m=function(t){return w(t)&&"[object Arguments]"==O(t)},A=g,z=Object.prototype,S=z.hasOwnProperty,x=z.propertyIsEnumerable,P=m(function(){return arguments}())?m:function(t){return A(t)&&S.call(t,"callee")&&!x.call(t,"callee")},k=Array.isArray,E={exports:{}};var T=function(){return!1};!function(t,r){var e=i,n=T,o=r&&!r.nodeType&&r,a=o&&t&&!t.nodeType&&t,u=a&&a.exports===o?e.Buffer:void 0,c=(u?u.isBuffer:void 0)||n;t.exports=c}(E,E.exports);var $=/^(?:0|[1-9]\d*)$/;var F=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&$.test(t))&&t>-1&&t%1==0&&t<r};var I=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},B=j,M=I,D=g,U={};U["[object Float32Array]"]=U["[object Float64Array]"]=U["[object Int8Array]"]=U["[object Int16Array]"]=U["[object Int32Array]"]=U["[object Uint8Array]"]=U["[object Uint8ClampedArray]"]=U["[object Uint16Array]"]=U["[object Uint32Array]"]=!0,U["[object Arguments]"]=U["[object Array]"]=U["[object ArrayBuffer]"]=U["[object Boolean]"]=U["[object DataView]"]=U["[object Date]"]=U["[object Error]"]=U["[object Function]"]=U["[object Map]"]=U["[object Number]"]=U["[object Object]"]=U["[object RegExp]"]=U["[object Set]"]=U["[object String]"]=U["[object WeakMap]"]=!1;var C=function(t){return D(t)&&M(t.length)&&!!U[B(t)]};var L=function(t){return function(r){return t(r)}},R={exports:{}};!function(t,r){var e=o,n=r&&!r.nodeType&&r,a=n&&t&&!t.nodeType&&t,u=a&&a.exports===n&&e.process,i=function(){try{var t=a&&a.require&&a.require("util").types;return t||u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=i}(R,R.exports);var V=C,N=L,W=R.exports,q=W&&W.isTypedArray,G=q?N(q):V,H=n,J=P,K=k,Q=E.exports,X=F,Y=G,Z=Object.prototype.hasOwnProperty;var tt=function(t,r){var e=K(t),n=!e&&J(t),o=!e&&!n&&Q(t),a=!e&&!n&&!o&&Y(t),u=e||n||o||a,i=u?H(t.length,String):[],c=i.length;for(var f in t)!r&&!Z.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||X(f,c))||i.push(f);return i},rt=Object.prototype;var et=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||rt)};var nt=function(t,r){return function(e){return t(r(e))}}(Object.keys,Object),ot=et,at=nt,ut=Object.prototype.hasOwnProperty;var it=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},ct=j,ft=it;var st=function(t){if(!ft(t))return!1;var r=ct(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},vt=st,lt=I;var pt=function(t){return null!=t&&lt(t.length)&&!vt(t)},ht=tt,yt=function(t){if(!ot(t))return at(t);var r=[];for(var e in Object(t))ut.call(t,e)&&"constructor"!=e&&r.push(e);return r},bt=pt;var _t=function(t){return bt(t)?ht(t):yt(t)},dt=e,jt=_t;var gt=pt;var Ot=function(t,r){return function(e,n){if(null==e)return e;if(!gt(e))return t(e,n);for(var o=e.length,a=r?o:-1,u=Object(e);(r?a--:++a<o)&&!1!==n(u[a],a,u););return e}}((function(t,r){return t&&dt(t,r,jt)}));var wt=function(){this.__data__=[],this.size=0};var mt=function(t,r){return t===r||t!=t&&r!=r},At=mt;var zt=function(t,r){for(var e=t.length;e--;)if(At(t[e][0],r))return e;return-1},St=zt,xt=Array.prototype.splice;var Pt=zt;var kt=zt;var Et=zt;var Tt=wt,$t=function(t){var r=this.__data__,e=St(r,t);return!(e<0)&&(e==r.length-1?r.pop():xt.call(r,e,1),--this.size,!0)},Ft=function(t){var r=this.__data__,e=Pt(r,t);return e<0?void 0:r[e][1]},It=function(t){return kt(this.__data__,t)>-1},Bt=function(t,r){var e=this.__data__,n=Et(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function Mt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Mt.prototype.clear=Tt,Mt.prototype.delete=$t,Mt.prototype.get=Ft,Mt.prototype.has=It,Mt.prototype.set=Bt;var Dt=Mt,Ut=Dt;var Ct=function(){this.__data__=new Ut,this.size=0};var Lt=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e};var Rt=function(t){return this.__data__.get(t)};var Vt,Nt=function(t){return this.__data__.has(t)},Wt=i["__core-js_shared__"],qt=(Vt=/[^.]+$/.exec(Wt&&Wt.keys&&Wt.keys.IE_PROTO||""))?"Symbol(src)_1."+Vt:"";var Gt=function(t){return!!qt&&qt in t},Ht=Function.prototype.toString;var Jt=function(t){if(null!=t){try{return Ht.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Kt=st,Qt=Gt,Xt=it,Yt=Jt,Zt=/^\[object .+?Constructor\]$/,tr=Function.prototype,rr=Object.prototype,er=tr.toString,nr=rr.hasOwnProperty,or=RegExp("^"+er.call(nr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ar=function(t){return!(!Xt(t)||Qt(t))&&(Kt(t)?or:Zt).test(Yt(t))},ur=function(t,r){return null==t?void 0:t[r]};var ir=function(t,r){var e=ur(t,r);return ar(e)?e:void 0},cr=ir(i,"Map"),fr=ir(Object,"create"),sr=fr;var vr=function(){this.__data__=sr?sr(null):{},this.size=0};var lr=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},pr=fr,hr=Object.prototype.hasOwnProperty;var yr=function(t){var r=this.__data__;if(pr){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return hr.call(r,t)?r[t]:void 0},br=fr,_r=Object.prototype.hasOwnProperty;var dr=fr;var jr=vr,gr=lr,Or=yr,wr=function(t){var r=this.__data__;return br?void 0!==r[t]:_r.call(r,t)},mr=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=dr&&void 0===r?"__lodash_hash_undefined__":r,this};function Ar(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Ar.prototype.clear=jr,Ar.prototype.delete=gr,Ar.prototype.get=Or,Ar.prototype.has=wr,Ar.prototype.set=mr;var zr=Ar,Sr=Dt,xr=cr;var Pr=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var kr=function(t,r){var e=t.__data__;return Pr(r)?e["string"==typeof r?"string":"hash"]:e.map},Er=kr;var Tr=kr;var $r=kr;var Fr=kr;var Ir=function(){this.size=0,this.__data__={hash:new zr,map:new(xr||Sr),string:new zr}},Br=function(t){var r=Er(this,t).delete(t);return this.size-=r?1:0,r},Mr=function(t){return Tr(this,t).get(t)},Dr=function(t){return $r(this,t).has(t)},Ur=function(t,r){var e=Fr(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function Cr(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Cr.prototype.clear=Ir,Cr.prototype.delete=Br,Cr.prototype.get=Mr,Cr.prototype.has=Dr,Cr.prototype.set=Ur;var Lr=Cr,Rr=Dt,Vr=cr,Nr=Lr;var Wr=Dt,qr=Ct,Gr=Lt,Hr=Rt,Jr=Nt,Kr=function(t,r){var e=this.__data__;if(e instanceof Rr){var n=e.__data__;if(!Vr||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new Nr(n)}return e.set(t,r),this.size=e.size,this};function Qr(t){var r=this.__data__=new Wr(t);this.size=r.size}Qr.prototype.clear=qr,Qr.prototype.delete=Gr,Qr.prototype.get=Hr,Qr.prototype.has=Jr,Qr.prototype.set=Kr;var Xr=Qr;var Yr=Lr,Zr=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},te=function(t){return this.__data__.has(t)};function re(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new Yr;++r<e;)this.add(t[r])}re.prototype.add=re.prototype.push=Zr,re.prototype.has=te;var ee=re,ne=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1},oe=function(t,r){return t.has(r)};var ae=function(t,r,e,n,o,a){var u=1&e,i=t.length,c=r.length;if(i!=c&&!(u&&c>i))return!1;var f=a.get(t),s=a.get(r);if(f&&s)return f==r&&s==t;var v=-1,l=!0,p=2&e?new ee:void 0;for(a.set(t,r),a.set(r,t);++v<i;){var h=t[v],y=r[v];if(n)var b=u?n(y,h,v,r,t,a):n(h,y,v,t,r,a);if(void 0!==b){if(b)continue;l=!1;break}if(p){if(!ne(r,(function(t,r){if(!oe(p,r)&&(h===t||o(h,t,e,n,a)))return p.push(r)}))){l=!1;break}}else if(h!==y&&!o(h,y,e,n,a)){l=!1;break}}return a.delete(t),a.delete(r),l};var ue=i.Uint8Array,ie=mt,ce=ae,fe=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e},se=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e},ve=c?c.prototype:void 0,le=ve?ve.valueOf:void 0;var pe=function(t,r,e,n,o,a,u){switch(e){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=r.byteLength||!a(new ue(t),new ue(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ie(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var i=fe;case"[object Set]":var c=1&n;if(i||(i=se),t.size!=r.size&&!c)return!1;var f=u.get(t);if(f)return f==r;n|=2,u.set(t,r);var s=ce(i(t),i(r),n,o,a,u);return u.delete(t),s;case"[object Symbol]":if(le)return le.call(t)==le.call(r)}return!1};var he=function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t},ye=k;var be=function(t,r,e){var n=r(t);return ye(t)?n:he(n,e(t))};var _e=function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,a=[];++e<n;){var u=t[e];r(u,e,t)&&(a[o++]=u)}return a},de=function(){return[]},je=Object.prototype.propertyIsEnumerable,ge=Object.getOwnPropertySymbols,Oe=be,we=ge?function(t){return null==t?[]:(t=Object(t),_e(ge(t),(function(r){return je.call(t,r)})))}:de,me=_t;var Ae=function(t){return Oe(t,me,we)},ze=Object.prototype.hasOwnProperty;var Se=function(t,r,e,n,o,a){var u=1&e,i=Ae(t),c=i.length;if(c!=Ae(r).length&&!u)return!1;for(var f=c;f--;){var s=i[f];if(!(u?s in r:ze.call(r,s)))return!1}var v=a.get(t),l=a.get(r);if(v&&l)return v==r&&l==t;var p=!0;a.set(t,r),a.set(r,t);for(var h=u;++f<c;){var y=t[s=i[f]],b=r[s];if(n)var _=u?n(b,y,s,r,t,a):n(y,b,s,t,r,a);if(!(void 0===_?y===b||o(y,b,e,n,a):_)){p=!1;break}h||(h="constructor"==s)}if(p&&!h){var d=t.constructor,j=r.constructor;d==j||!("constructor"in t)||!("constructor"in r)||"function"==typeof d&&d instanceof d&&"function"==typeof j&&j instanceof j||(p=!1)}return a.delete(t),a.delete(r),p},xe=ir(i,"DataView"),Pe=cr,ke=ir(i,"Promise"),Ee=ir(i,"Set"),Te=ir(i,"WeakMap"),$e=j,Fe=Jt,Ie="[object Map]",Be="[object Promise]",Me="[object Set]",De="[object WeakMap]",Ue="[object DataView]",Ce=Fe(xe),Le=Fe(Pe),Re=Fe(ke),Ve=Fe(Ee),Ne=Fe(Te),We=$e;(xe&&We(new xe(new ArrayBuffer(1)))!=Ue||Pe&&We(new Pe)!=Ie||ke&&We(ke.resolve())!=Be||Ee&&We(new Ee)!=Me||Te&&We(new Te)!=De)&&(We=function(t){var r=$e(t),e="[object Object]"==r?t.constructor:void 0,n=e?Fe(e):"";if(n)switch(n){case Ce:return Ue;case Le:return Ie;case Re:return Be;case Ve:return Me;case Ne:return De}return r});var qe=Xr,Ge=ae,He=pe,Je=Se,Ke=We,Qe=k,Xe=E.exports,Ye=G,Ze="[object Arguments]",tn="[object Array]",rn="[object Object]",en=Object.prototype.hasOwnProperty;var nn=function(t,r,e,n,o,a){var u=Qe(t),i=Qe(r),c=u?tn:Ke(t),f=i?tn:Ke(r),s=(c=c==Ze?rn:c)==rn,v=(f=f==Ze?rn:f)==rn,l=c==f;if(l&&Xe(t)){if(!Xe(r))return!1;u=!0,s=!1}if(l&&!s)return a||(a=new qe),u||Ye(t)?Ge(t,r,e,n,o,a):He(t,r,c,e,n,o,a);if(!(1&e)){var p=s&&en.call(t,"__wrapped__"),h=v&&en.call(r,"__wrapped__");if(p||h){var y=p?t.value():t,b=h?r.value():r;return a||(a=new qe),o(y,b,e,n,a)}}return!!l&&(a||(a=new qe),Je(t,r,e,n,o,a))},on=g;var an=function t(r,e,n,o,a){return r===e||(null==r||null==e||!on(r)&&!on(e)?r!=r&&e!=e:nn(r,e,n,o,t,a))},un=Xr,cn=an;var fn=it;var sn=function(t){return t==t&&!fn(t)},vn=sn,ln=_t;var pn=function(t,r){return function(e){return null!=e&&(e[t]===r&&(void 0!==r||t in Object(e)))}},hn=function(t,r,e,n){var o=e.length,a=o,u=!n;if(null==t)return!a;for(t=Object(t);o--;){var i=e[o];if(u&&i[2]?i[1]!==t[i[0]]:!(i[0]in t))return!1}for(;++o<a;){var c=(i=e[o])[0],f=t[c],s=i[1];if(u&&i[2]){if(void 0===f&&!(c in t))return!1}else{var v=new un;if(n)var l=n(f,s,c,t,r,v);if(!(void 0===l?cn(s,f,3,n,v):l))return!1}}return!0},yn=function(t){for(var r=ln(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,vn(o)]}return r},bn=pn;var _n=function(t){var r=yn(t);return 1==r.length&&r[0][2]?bn(r[0][0],r[0][1]):function(e){return e===t||hn(e,t,r)}},dn=j,jn=g;var gn=function(t){return"symbol"==typeof t||jn(t)&&"[object Symbol]"==dn(t)},On=k,wn=gn,mn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,An=/^\w*$/;var zn=function(t,r){if(On(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!wn(t))||(An.test(t)||!mn.test(t)||null!=r&&t in Object(r))},Sn=Lr;function xn(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var u=t.apply(this,n);return e.cache=a.set(o,u)||a,u};return e.cache=new(xn.Cache||Sn),e}xn.Cache=Sn;var Pn=xn;var kn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,En=/\\(\\)?/g,Tn=function(t){var r=Pn(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(kn,(function(t,e,n,o){r.push(n?o.replace(En,"$1"):e||t)})),r}));var $n=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},Fn=k,In=gn,Bn=c?c.prototype:void 0,Mn=Bn?Bn.toString:void 0;var Dn=function t(r){if("string"==typeof r)return r;if(Fn(r))return $n(r,t)+"";if(In(r))return Mn?Mn.call(r):"";var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e},Un=Dn;var Cn=k,Ln=zn,Rn=Tn,Vn=function(t){return null==t?"":Un(t)};var Nn=function(t,r){return Cn(t)?t:Ln(t,r)?[t]:Rn(Vn(t))},Wn=gn;var qn=function(t){if("string"==typeof t||Wn(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},Gn=Nn,Hn=qn;var Jn=function(t,r){for(var e=0,n=(r=Gn(r,t)).length;null!=t&&e<n;)t=t[Hn(r[e++])];return e&&e==n?t:void 0},Kn=Jn;var Qn=Nn,Xn=P,Yn=k,Zn=F,to=I,ro=qn;var eo=function(t,r){return null!=t&&r in Object(t)},no=function(t,r,e){for(var n=-1,o=(r=Qn(r,t)).length,a=!1;++n<o;){var u=ro(r[n]);if(!(a=null!=t&&e(t,u)))break;t=t[u]}return a||++n!=o?a:!!(o=null==t?0:t.length)&&to(o)&&Zn(u,o)&&(Yn(t)||Xn(t))};var oo=an,ao=function(t,r,e){var n=null==t?void 0:Kn(t,r);return void 0===n?e:n},uo=function(t,r){return null!=t&&no(t,r,eo)},io=zn,co=sn,fo=pn,so=qn;var vo=Jn;var lo=function(t){return function(r){return null==r?void 0:r[t]}},po=function(t){return function(r){return vo(r,t)}},ho=zn,yo=qn;var bo=_n,_o=function(t,r){return io(t)&&co(r)?fo(so(t),r):function(e){var n=ao(e,t);return void 0===n&&n===r?uo(e,t):oo(r,n,3)}},jo=function(t){return t},go=k,Oo=function(t){return ho(t)?lo(yo(t)):po(t)};var wo=r,mo=Ot,Ao=function(t){return"function"==typeof t?t:null==t?jo:"object"==typeof t?go(t)?_o(t[0],t[1]):bo(t):Oo(t)},zo=function(t,r,e,n,o){return o(t,(function(t,o,a){e=n?(n=!1,t):r(e,t,o,a)})),e},So=k;var xo=function(t,r,e){var n=So(t)?wo:zo,o=arguments.length<3;return n(t,Ao(r),e,o,mo)};export{xo as default};