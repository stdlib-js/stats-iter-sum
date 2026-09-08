"use strict";var t=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=t(function(l,a){
var n=require('@stdlib/assert-is-iterator-like/dist'),s=require('@stdlib/stats-incr-sum/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function o(i){var r,e;if(!n(i))throw new TypeError(v('1LR3w',i));for(r=s();e=i.next(),!e.done;)typeof e.value=="number"?r(e.value):r(NaN);return r()}a.exports=o
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
