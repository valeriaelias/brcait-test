parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"G5Xn":[function(require,module,exports) {

},{}],"ffN9":[function(require,module,exports) {
"use strict";function e(){window.onscroll=function(){s()};var e=document.querySelector("#navbar-toggler-bt");e&&e.addEventListener("click",function(e){var t=document.querySelector("#menu");t.classList.toggle("expanded"),t.classList.contains("expanded")?(console.log(t.scrollHeight),t.style.maxHeight="".concat(t.scrollHeight,"px")):t.style.maxHeight="0px"});var o=document.querySelectorAll(".s-card");o.forEach(function(e){e.addEventListener("mouseover",function(){t(o),e.classList.remove("inactive"),e.classList.add("active")}),e.addEventListener("mouseout",function(){c(o),n(o)})})}function t(e){e.forEach(function(e){e.classList.add("inactive")})}function c(e){e.forEach(function(e){e.classList.remove("inactive")})}function n(e){e.forEach(function(e){e.classList.remove("active")})}function s(){var e=document.querySelector("header"),t=e.offsetTop;window.pageYOffset>t?e.classList.add("sticky"):e.classList.remove("sticky")}require("./scss/app.scss"),document.addEventListener("DOMContentLoaded",e);
},{"./scss/app.scss":"G5Xn"}]},{},["ffN9"], null)
//# sourceMappingURL=app.b4c06a49.js.map