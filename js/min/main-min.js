!function(n,e,t){var i=function(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")},a=function(n,e){return-1!==(" "+n.className+" ").indexOf(" "+e+" ")},r=function(n,e){a(n,e)||(n.className=""===n.className?e:n.className+" "+e)},o=function(n,e){n.className=i((" "+n.className+" ").replace(" "+e+" "," "))},s=function(n,e){if(n)do{if(n.id===e)return!0;if(9===n.nodeType)break}while(n=n.parentNode);return!1},d=e.documentElement,c=n.Modernizr.prefixed("transform"),l=n.Modernizr.prefixed("transition"),u=function(){var n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};return n.hasOwnProperty(l)?n[l]:!1}();n.App=function(){var t=!1,i={},c=e.getElementById("inner-wrap"),v=!1,f="js-nav";return i.init=function(){if(!t){t=!0;var p=function(n){n&&n.target===c&&e.removeEventListener(u,p,!1),v=!1};i.closeNav=function(){if(v){var t=u&&l?parseFloat(n.getComputedStyle(c,"")[l+"Duration"]):0;t>0?e.addEventListener(u,p,!1):p(null)}o(d,f)},i.openNav=function(){v||(r(d,f),v=!0)},i.toggleNav=function(n){v&&a(d,f)?i.closeNav():i.openNav(),n&&n.preventDefault()},e.getElementById("nav-open-btn").addEventListener("click",i.toggleNav,!1),e.getElementById("nav-close-btn").addEventListener("click",i.toggleNav,!1),e.addEventListener("click",function(n){v&&!s(n.target,"nav")&&(n.preventDefault(),i.closeNav())},!0),r(d,"js-ready")}},i}(),n.addEventListener&&n.addEventListener("DOMContentLoaded",n.App.init,!1)}(window,window.document);