(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0,6],{116:function(t,e,r){"use strict";r.r(e),r.d(e,"Post",(function(){return i})),r.d(e,"Get",(function(){return p}));var o=r(14);function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var a=r(204),s=r(148);function i(t,e,r){var o=c(c({},{"Content-Type":"application/json;charset=utf-8;","Accept-Charset":"utf-8","art-client-type":localStorage.getItem("art-client-type")?localStorage.getItem("art-client-type"):1,"art-user-token":localStorage.getItem("art-user-token")?localStorage.getItem("art-user-token"):"","art-version":"9.9.9"}),r);return new Promise((function(r,n){fetch(a.baseUrl+t,{body:JSON.stringify(e),headers:o,method:"POST"}).then((function(t){t.ok&&t.status&&u(t.json()).then((function(t){600===t.code?r(t.data):s.a.error(t.message)}))})).catch((function(t){s.a.error(t),n(t)}))}))}function p(t,e,r){console.log("\u8bf7\u6c42\u53c2\u6570",JSON.stringify(e));var o=c(c({},{"Content-Type":"application/json;charset=utf-8;","Accept-Charset":"utf-8","art-client-type":localStorage.getItem("art-client-type")?localStorage.getItem("art-client-type"):1,"art-user-token":localStorage.getItem("art-user-token")?localStorage.getItem("art-user-token"):"","art-version":"9.9.9"}),r);return new Promise((function(r,n){fetch(a.baseUrl+t,{body:JSON.stringify(e),headers:o,method:"GET"}).then((function(t){t.ok&&t.status&&u(t.json()).then((function(t){600===t.code?r(t.data):console.log("\u5f02\u5e38",t.message)}))})).catch((function(t){n(t)}))}))}function u(t){return new Promise((function(e,r){e(t)}))}},204:function(t,e,r){"use strict";r.r(e),r.d(e,"baseUrl",(function(){return o}));var o="";switch(o="http://test.pre.fableedu.com/",window.location.origin){case"http://apptest.yidodo.com":o="http://test.art.fableedu.com/";break;case"https://h5pre.yidodo.com":o="https://test.pre.fableedu.com/";break;case"https://www.yidodo.com":o="https://api.yidodo.com/";break;case"https://betawww.yidodo.com":o="https://betaapi.yidodo.com/"}}}]);
//# sourceMappingURL=0.9bba53c8.chunk.js.map