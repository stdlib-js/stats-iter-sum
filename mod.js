// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+n(a):n(a)+e,t&&(e="-"+e)),e}var o=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function c(e){var r,i,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,n=parseInt(i,10),!isFinite(n)){if(!t(i))throw new Error("invalid integer. Value: "+i);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(i=(-n).toString(r),e.precision&&(i=a(i,e.precision,e.padRight)),i="-"+i):(i=n.toString(r),n||e.precision?e.precision&&(i=a(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===s.call(e.specifier)?s.call(i):o.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function p(e){return"string"==typeof e}var l=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function x(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=g.call(i,m,"$1e"),i=g.call(i,y,"e"),i=g.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=g.call(i,d,"e+0$1"),i=g.call(i,h,"e-0$1"),e.alternate&&(i=g.call(i,w,"$1."),i=g.call(i,b,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):u.call(i)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function k(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var S=String.fromCharCode,V=isNaN,$=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,i,t,n,o,s,l,u,f;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,u=0;u<e.length;u++)if(p(t=e[u]))s+=t;else{if(r=void 0!==t.precision,!(t=T(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,V(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,V(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!V(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=V(o)?String(t.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=x(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),s+=t.arg||"",l+=1}return s}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function _(e){var r,i,t,n;for(i=[],n=0,t=I.exec(e);t;)(r=e.slice(n,I.lastIndex-t[0].length)).length&&i.push(r),i.push(A(t)),n=I.lastIndex,t=I.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function j(e){return"string"==typeof e}function C(e){var r,i;if(!j(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[_(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return F.apply(null,r)}var R,Z=Object.prototype,W=Z.toString,L=Z.__defineGetter__,O=Z.__defineSetter__,G=Z.__lookupGetter__,N=Z.__lookupSetter__;R=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===W.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===W.call(i))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(G.call(e,r)||N.call(e,r)?(t=e.__proto__,e.__proto__=Z,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(e,r,i.get),o&&O&&O.call(e,r,i.set),e};var P=R;function U(e,r,i){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function X(e){return"boolean"==typeof e}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var B=M();function z(){return B&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function H(e,r){return null!=e&&D.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=z()?function(e){var r,i,t;if(null==e)return q.call(e);i=e[K],r=H(e,K);try{e[K]=void 0}catch(r){return q.call(e)}return t=q.call(e),r?e[K]=i:delete e[K],t}:function(e){return q.call(e)},Y=Boolean,ee=Boolean.prototype.toString;var re=z();function ie(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function te(e){return X(e)||ie(e)}function ne(e){return"number"==typeof e}function ae(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function oe(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ae(n):ae(n)+e,t&&(e="-"+e)),e}U(te,"isPrimitive",X),U(te,"isObject",ie);var se=String.prototype.toLowerCase,ce=String.prototype.toUpperCase;function pe(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ne(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=oe(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=oe(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===ce.call(e.specifier)?ce.call(i):se.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function le(e){return"string"==typeof e}var ue=Math.abs,fe=String.prototype.toLowerCase,ge=String.prototype.toUpperCase,de=String.prototype.replace,he=/e\+(\d)$/,we=/e-(\d)$/,be=/^(\d+)$/,ve=/^(\d+)e/,ye=/\.0$/,me=/\.0*e/,xe=/(\..*[^0])0*e/;function Ee(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ne(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":ue(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=de.call(i,xe,"$1e"),i=de.call(i,me,"e"),i=de.call(i,ye,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=de.call(i,he,"e+0$1"),i=de.call(i,we,"e-0$1"),e.alternate&&(i=de.call(i,be,"$1."),i=de.call(i,ve,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ge.call(e.specifier)?ge.call(i):fe.call(i)}function ke(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Se(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ke(t):ke(t)+e}var Ve=String.fromCharCode,$e=isNaN,Te=Array.isArray;function Fe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ie(e){var r,i,t,n,a,o,s,c,p;if(!Te(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(le(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Fe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,$e(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,$e(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=pe(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!$e(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=$e(a)?String(t.arg):Ve(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ee(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=oe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Se(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _e(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function je(e){var r,i,t,n;for(i=[],n=0,t=Ae.exec(e);t;)(r=e.slice(n,Ae.lastIndex-t[0].length)).length&&i.push(r),i.push(_e(t)),n=Ae.lastIndex,t=Ae.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ce(e){return"string"==typeof e}function Re(e){var r,i;if(!Ce(e))throw new TypeError(Re("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[je(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Ie.apply(null,r)}function Ze(){return new Function("return this;")()}var We="object"==typeof self?self:null,Le="object"==typeof window?window:null,Oe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ge="object"==typeof Oe?Oe:null,Ne="object"==typeof globalThis?globalThis:null;var Pe=function(e){if(arguments.length){if(!X(e))throw new TypeError(Re("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ze()}if(Ne)return Ne;if(We)return We;if(Le)return Le;if(Ge)return Ge;throw new Error("unexpected error. Unable to resolve global object.")}(),Ue=Pe.document&&Pe.document.childNodes,Xe=Int8Array;var Me=M();var Be=Object.prototype.toString;var ze="function"==typeof Symbol?Symbol:void 0,qe="function"==typeof ze?ze.toStringTag:"";var De=Me&&"symbol"==typeof Symbol.toStringTag?function(e){var r,i,t;if(null==e)return Be.call(e);i=e[qe],r=H(e,qe);try{e[qe]=void 0}catch(r){return Be.call(e)}return t=Be.call(e),r?e[qe]=i:delete e[qe],t}:function(e){return Be.call(e)};function He(e,r,i){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function Je(){return/^\s*function\s*([^(]*)/i}var Ke=/^\s*function\s*([^(]*)/i;He(Je,"REGEXP",Ke);var Qe=Array.isArray?Array.isArray:function(e){return"[object Array]"===De(e)};function Ye(e){return"number"==typeof e}function er(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function rr(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+er(n):er(n)+e,t&&(e="-"+e)),e}var ir=String.prototype.toLowerCase,tr=String.prototype.toUpperCase;function nr(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Ye(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=rr(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=rr(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===tr.call(e.specifier)?tr.call(i):ir.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ar(e){return"string"==typeof e}var or=Math.abs,sr=String.prototype.toLowerCase,cr=String.prototype.toUpperCase,pr=String.prototype.replace,lr=/e\+(\d)$/,ur=/e-(\d)$/,fr=/^(\d+)$/,gr=/^(\d+)e/,dr=/\.0$/,hr=/\.0*e/,wr=/(\..*[^0])0*e/;function br(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Ye(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":or(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=pr.call(i,wr,"$1e"),i=pr.call(i,hr,"e"),i=pr.call(i,dr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=pr.call(i,lr,"e+0$1"),i=pr.call(i,ur,"e-0$1"),e.alternate&&(i=pr.call(i,fr,"$1."),i=pr.call(i,gr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===cr.call(e.specifier)?cr.call(i):sr.call(i)}function vr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function yr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+vr(t):vr(t)+e}var mr=String.fromCharCode,xr=isNaN,Er=Array.isArray;function kr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Sr(e){var r,i,t,n,a,o,s,c,p;if(!Er(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ar(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=kr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,xr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,xr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=nr(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!xr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=xr(a)?String(t.arg):mr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=br(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=rr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=yr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Vr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $r(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Tr(e){var r,i,t,n;for(i=[],n=0,t=Vr.exec(e);t;)(r=e.slice(n,Vr.lastIndex-t[0].length)).length&&i.push(r),i.push($r(t)),n=Vr.lastIndex,t=Vr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Fr(e){return"string"==typeof e}function Ir(e){var r,i;if(!Fr(e))throw new TypeError(Ir("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Tr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Sr.apply(null,r)}function Ar(e){return null!==e&&"object"==typeof e}function _r(e){var r,i,t,n;if(("Object"===(i=De(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Ke.exec(t.toString()))return r[1]}return Ar(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}He(Ar,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Ir("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Qe(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Ar));var jr="function"==typeof e||"object"==typeof Xe||"function"==typeof Ue?function(e){return _r(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?_r(e).toLowerCase():r};function Cr(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&function(e){return"function"===jr(e)}(e.next)}function Rr(e){return Math.abs(e)}function Zr(e){return"number"==typeof e}function Wr(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Lr(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Wr(n):Wr(n)+e,t&&(e="-"+e)),e}var Or=String.prototype.toLowerCase,Gr=String.prototype.toUpperCase;function Nr(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Zr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Lr(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Lr(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Gr.call(e.specifier)?Gr.call(i):Or.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Pr(e){return"string"==typeof e}var Ur=Math.abs,Xr=String.prototype.toLowerCase,Mr=String.prototype.toUpperCase,Br=String.prototype.replace,zr=/e\+(\d)$/,qr=/e-(\d)$/,Dr=/^(\d+)$/,Hr=/^(\d+)e/,Jr=/\.0$/,Kr=/\.0*e/,Qr=/(\..*[^0])0*e/;function Yr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Zr(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Ur(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Br.call(i,Qr,"$1e"),i=Br.call(i,Kr,"e"),i=Br.call(i,Jr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Br.call(i,zr,"e+0$1"),i=Br.call(i,qr,"e-0$1"),e.alternate&&(i=Br.call(i,Dr,"$1."),i=Br.call(i,Hr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Mr.call(e.specifier)?Mr.call(i):Xr.call(i)}function ei(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ri(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ei(t):ei(t)+e}var ii=String.fromCharCode,ti=isNaN,ni=Array.isArray;function ai(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function oi(e){var r,i,t,n,a,o,s,c,p;if(!ni(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Pr(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=ai(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,ti(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,ti(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Nr(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!ti(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ti(a)?String(t.arg):ii(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Yr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Lr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ri(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var si=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ci(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function pi(e){var r,i,t,n;for(i=[],n=0,t=si.exec(e);t;)(r=e.slice(n,si.lastIndex-t[0].length)).length&&i.push(r),i.push(ci(t)),n=si.lastIndex,t=si.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function li(e){return"string"==typeof e}function ui(e){var r,i,t;if(!li(e))throw new TypeError(ui("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=pi(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return oi.apply(null,i)}function fi(e){var r,i;if(!Cr(e))throw new TypeError(ui("invalid argument. Must provide an iterator. Value: `%s`.",e));for(r=function(){var e,r,i,t,n,a,o;return e=0,r=0,t=0,function(s){return 0===arguments.length?i?e+t+r:null:(i=!0,a=e+s,o=Rr(e)>=Rr(s)?e-a+s:s-a+e,e=a,a=t+o,n=Rr(t)>=Rr(o)?t-a+o:o-a+t,e+(t=a)+(r+=n))}}();!(i=e.next()).done;)"number"==typeof i.value?r(i.value):r(NaN);return r()}export{fi as default};
//# sourceMappingURL=mod.js.map
