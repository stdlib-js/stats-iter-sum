"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(l,a){
var n=require('@stdlib/assert-is-iterator-like/dist'),s=require('@stdlib/stats-incr-sum/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function o(e){var r,i;if(!n(e))throw new TypeError(v('1LR3w',e));for(r=s();i=e.next(),!i.done;)typeof i.value=="number"?r(i.value):r(NaN);return r()}a.exports=o
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
