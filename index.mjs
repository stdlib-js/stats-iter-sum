// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-sum@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var i=t,n=e,o=r,a=s;var d=function(t){var e,r;if(!i(t))throw new TypeError(a("invalid argument. Must provide an iterator. Value: `%s`.",t));for(e=o();"number"==typeof(r=t.next()).value?e(r.value):n(r,"value")&&e(NaN),!r.done;);return e()};export{d as default};
//# sourceMappingURL=index.mjs.map
