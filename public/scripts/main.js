!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e){document.querySelector(e).innerHTML=" "},o=document.querySelector("#cityCheck"),c=document.querySelector("#countryCheck"),u=document.querySelector("#currencyCheck"),a=document.querySelector("#zipCheck"),i=document.querySelector("#timeZoneCheck"),l=function(e){var t=e;console.log(e);var n=function(e,n,o,c){if(t.error)console.log("error");else{if(e.checked){var u=document.createElement("p");r(o),u.textContent="".concat(c," ").concat(t[n]),document.querySelector(o).appendChild(u)}e.addEventListener("change",function(e){if(e.target.checked){var u=document.createElement("p");r(o),u.textContent="".concat(c," ").concat(t[n]),document.querySelector(o).appendChild(u)}else r(o)})}};n(o,"city","#locale","City"),n(c,"country_name","#country","Country"),n(u,"currency","#currency","Currency"),n(a,"postal","#zip","Zip Code"),n(i,"utc_offset","#time-zone","UTC")},d=function(e,t){var n=new XMLHttpRequest;n.addEventListener("readystatechange",function(e){if(4===e.target.readyState&&200==e.target.status){var n=JSON.parse(e.target.responseText);t(void 0,n)}else 4===e.target.readyState&&t("no man no",void 0)}),n.open("GET","https://ipapi.co/".concat(e,"/json/")),n.send()},f=document.querySelector("#ip-add");document.querySelector("#entry");f.addEventListener("submit",function(e){e.preventDefault();var t=e.target.elements.ipAdd.value;d(t,function(e,t){if(e)throw new Error(e);t&&(l(t),console.log(t))})})}]);