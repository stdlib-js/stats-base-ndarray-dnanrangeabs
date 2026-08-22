"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var n=s(function(b,i){
var v=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),g=require('@stdlib/stats-strided-dnanrangeabs/dist').ndarray;function m(e){var r=e[0];return g(v(r,0),o(r),q(r,0),d(r))}i.exports=m
});var f=require("path").join,c=require('@stdlib/utils-try-require/dist'),j=require('@stdlib/assert-is-error/dist'),p=n(),a,t=c(f(__dirname,"./native.js"));j(t)?a=p:a=t;module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
