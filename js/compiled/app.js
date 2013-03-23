function FastClick(t){"use strict";var e,n=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.layer=t,!t||!t.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(n,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(n,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(n,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(n,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(n,arguments)},void 0!==window.ontouchstart&&(this.deviceIsAndroid&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var r=Node.prototype.removeEventListener;"click"===e?r.call(t,e,n.hijacked||n,i):r.call(t,e,n,i)},t.addEventListener=function(e,n,i){var r=Node.prototype.addEventListener;"click"===e?r.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):r.call(t,e,n,i)}),"function"==typeof t.onclick&&(e=t.onclick,t.addEventListener("click",function(t){e(t)},!1),t.onclick=null))}(function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var n,i=Object(this),r=i.length>>>0,o=0;if("function"!=typeof e)throw new TypeError;if(0==r&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in i){n=i[o++];break}if(++o>=r)throw new TypeError}for(;r>o;)o in i&&(n=e.call(t,n,i[o],o,i)),o++;return n})})();var Zepto=function(){function t(t){return"[object Function]"==R.call(t)}function e(t){return t instanceof Object}function n(e){var n,i;if("[object Object]"!==R.call(e))return!1;if(i=t(e.constructor)&&e.constructor.prototype,!i||!hasOwnProperty.call(i,"isPrototypeOf"))return!1;for(n in e);return n===m||hasOwnProperty.call(e,n)}function i(t){return t instanceof Array}function r(t){return"number"==typeof t.length}function o(t){return t.filter(function(t){return t!==m&&null!==t})}function s(t){return t.length>0?[].concat.apply([],t):t}function a(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function c(t){return t in T?T[t]:T[t]=RegExp("(^|\\s)"+t+"(\\s|$)")}function u(t,e){return"number"!=typeof e||O[a(t)]?e:e+"px"}function l(t){var e,n;return x[t]||(e=C.createElement(t),C.body.appendChild(e),n=S(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),x[t]=n),x[t]}function h(t,e){return e===m?g(t):g(t).filter(e)}function f(e,n,i,r){return t(n)?n.call(e,i,r):n}function d(t,e,n){var i=t%2?e:e.parentNode;i?i.insertBefore(n,t?1==t?i.firstChild:2==t?e:null:e.nextSibling):g(n).remove()}function p(t,e){e(t);for(var n in t.childNodes)p(t.childNodes[n],e)}var m,v,g,y,w,k,b=[],E=b.slice,C=window.document,x={},T={},S=C.defaultView.getComputedStyle,O={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},j=/^\s*<(\w+|!)[^>]*>/,F=[1,3,8,9,11],I=["after","prepend","before","append"],N=C.createElement("table"),P=C.createElement("tr"),L={tr:C.createElement("tbody"),tbody:N,thead:N,tfoot:N,td:P,th:P,"*":C.createElement("div")},A=/complete|loaded|interactive/,M=/^\.([\w-]+)$/,$=/^#([\w-]+)$/,D=/^[\w-]+$/,R={}.toString,Z={},_=C.createElement("div");return Z.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=_).appendChild(t),i=~Z.qsa(r,e).indexOf(t),o&&_.removeChild(t),i},w=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},k=function(t){return t.filter(function(e,n){return t.indexOf(e)==n})},Z.fragment=function(t,e){e===m&&(e=j.test(t)&&RegExp.$1),e in L||(e="*");var n=L[e];return n.innerHTML=""+t,g.each(E.call(n.childNodes),function(){n.removeChild(this)})},Z.Z=function(t,e){return t=t||[],t.__proto__=arguments.callee.prototype,t.selector=e||"",t},Z.isZ=function(t){return t instanceof Z.Z},Z.init=function(e,r){if(!e)return Z.Z();if(t(e))return g(C).ready(e);if(Z.isZ(e))return e;var s;if(i(e))s=o(e);else if(n(e))s=[g.extend({},e)],e=null;else if(F.indexOf(e.nodeType)>=0||e===window)s=[e],e=null;else if(j.test(e))s=Z.fragment(e.trim(),RegExp.$1),e=null;else{if(r!==m)return g(r).find(e);s=Z.qsa(C,e)}return Z.Z(s,e)},g=function(t,e){return Z.init(t,e)},g.extend=function(t){return E.call(arguments,1).forEach(function(e){for(v in e)e[v]!==m&&(t[v]=e[v])}),t},Z.qsa=function(t,e){var n;return t===C&&$.test(e)?(n=t.getElementById(RegExp.$1))?[n]:b:1!==t.nodeType&&9!==t.nodeType?b:E.call(M.test(e)?t.getElementsByClassName(RegExp.$1):D.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},g.isFunction=t,g.isObject=e,g.isArray=i,g.isPlainObject=n,g.inArray=function(t,e,n){return b.indexOf.call(e,t,n)},g.trim=function(t){return t.trim()},g.uuid=0,g.map=function(t,e){var n,i,o,a=[];if(r(t))for(i=0;t.length>i;i++)n=e(t[i],i),null!=n&&a.push(n);else for(o in t)n=e(t[o],o),null!=n&&a.push(n);return s(a)},g.each=function(t,e){var n,i;if(r(t)){for(n=0;t.length>n;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},g.fn={forEach:b.forEach,reduce:b.reduce,push:b.push,indexOf:b.indexOf,concat:b.concat,map:function(t){return g.map(this,function(e,n){return t.call(e,n,e)})},slice:function(){return g(E.apply(this,arguments))},ready:function(t){return A.test(C.readyState)?t(g):C.addEventListener("DOMContentLoaded",function(){t(g)},!1),this},get:function(t){return t===m?E.call(this):this[t]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return this.forEach(function(e,n){t.call(e,n,e)}),this},filter:function(t){return g([].filter.call(this,function(e){return Z.matches(e,t)}))},add:function(t,e){return g(k(this.concat(g(t,e))))},is:function(t){return this.length>0&&Z.matches(this[0],t)},not:function(e){var n=[];if(t(e)&&e.call!==m)this.each(function(t){e.call(this,t)||n.push(this)});else{var i="string"==typeof e?this.filter(e):r(e)&&t(e.item)?E.call(e):g(e);this.forEach(function(t){0>i.indexOf(t)&&n.push(t)})}return g(n)},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!e(t)?t:g(t)},last:function(){var t=this[this.length-1];return t&&!e(t)?t:g(t)},find:function(t){var e;return e=1==this.length?Z.qsa(this[0],t):this.map(function(){return Z.qsa(this,t)}),g(e)},closest:function(t,e){for(var n=this[0];n&&!Z.matches(n,t);)n=n!==e&&n!==C&&n.parentNode;return g(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=g.map(n,function(t){return(t=t.parentNode)&&t!==C&&0>e.indexOf(t)?(e.push(t),t):void 0});return h(e,t)},parent:function(t){return h(k(this.pluck("parentNode")),t)},children:function(t){return h(this.map(function(){return E.call(this.children)}),t)},siblings:function(t){return h(this.map(function(t,e){return E.call(e.parentNode.children).filter(function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return this.map(function(){return this[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==S(this,"").getPropertyValue("display")&&(this.style.display=l(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){return this.each(function(){g(this).wrapAll(g(t)[0].cloneNode(!1))})},wrapAll:function(t){return this[0]&&(g(this[0]).before(t=g(t)),t.append(this)),this},unwrap:function(){return this.parent().each(function(){g(this).replaceWith(g(this).children())}),this},clone:function(){return g(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(t){return(t===m?"none"==this.css("display"):t)?this.show():this.hide()},prev:function(){return g(this.pluck("previousElementSibling"))},next:function(){return g(this.pluck("nextElementSibling"))},html:function(t){return t===m?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;g(this).empty().append(f(this,t,e,n))})},text:function(t){return t===m?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,n){var i;return"string"==typeof t&&n===m?0==this.length||1!==this[0].nodeType?m:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(i=this[0].getAttribute(t))&&t in this[0]?this[0][t]:i:this.each(function(i){if(1===this.nodeType)if(e(t))for(v in t)this.setAttribute(v,t[v]);else this.setAttribute(t,f(this,n,i,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&this.removeAttribute(t)})},prop:function(t,e){return e===m?this[0]?this[0][t]:m:this.each(function(n){this[t]=f(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+a(t),e);return null!==n?n:m},val:function(t){return t===m?this.length>0?this[0].value:m:this.each(function(e){this.value=f(this,t,e,this.value)})},offset:function(){if(0==this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:t.width,height:t.height}},css:function(t,e){if(e===m&&"string"==typeof t)return 0==this.length?m:this[0].style[w(t)]||S(this[0],"").getPropertyValue(t);var n="";for(v in t)"string"==typeof t[v]&&""==t[v]?this.each(function(){this.style.removeProperty(a(v))}):n+=a(v)+":"+u(v,t[v])+";";return"string"==typeof t&&(""==e?this.each(function(){this.style.removeProperty(a(t))}):n=a(t)+":"+u(t,e)),this.each(function(){this.style.cssText+=";"+n})},index:function(t){return t?this.indexOf(g(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return 1>this.length?!1:c(t).test(this[0].className)},addClass:function(t){return this.each(function(e){y=[];var n=this.className,i=f(this,t,e,n);i.split(/\s+/g).forEach(function(t){g(this).hasClass(t)||y.push(t)},this),y.length&&(this.className+=(n?" ":"")+y.join(" "))})},removeClass:function(t){return this.each(function(e){return t===m?this.className="":(y=this.className,f(this,t,e,y).split(/\s+/g).forEach(function(t){y=y.replace(c(t)," ")}),this.className=y.trim(),void 0)})},toggleClass:function(t,e){return this.each(function(n){var i=f(this,t,n,this.className);(e===m?!g(this).hasClass(i):e)?g(this).addClass(i):g(this).removeClass(i)})}},["width","height"].forEach(function(t){g.fn[t]=function(e){var n,i=t.replace(/./,function(t){return t[0].toUpperCase()});return e===m?this[0]==window?window["inner"+i]:this[0]==C?C.documentElement["offset"+i]:(n=this.offset())&&n[t]:this.each(function(n){var i=g(this);i.css(t,f(this,e,n,i[t]()))})}}),I.forEach(function(t,n){g.fn[t]=function(){var t=g.map(arguments,function(t){return e(t)?t:Z.fragment(t)});if(1>t.length)return this;var i=this.length,r=i>1,o=2>n;return this.each(function(e,s){for(var a=0;t.length>a;a++){var c=t[o?t.length-a-1:a];p(c,function(t){null!=t.nodeName&&"SCRIPT"===t.nodeName.toUpperCase()&&(!t.type||"text/javascript"===t.type)&&window.eval.call(window,t.innerHTML)}),r&&i-1>e&&(c=c.cloneNode(!0)),d(n,s,c)}})},g.fn[n%2?t+"To":"insert"+(n?"Before":"After")]=function(e){return g(e)[t](this),this}}),Z.Z.prototype=g.fn,Z.camelize=w,Z.uniq=k,g.zepto=Z,g}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,s){if(n=i(n),n.ns)var a=r(n.ns);return(l[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||o&&e(t.fn)!==e(o)||s&&t.sel!=s)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(e,n,i){t.isObject(e)?t.each(e,i):e.split(/\s/).forEach(function(t){i(t,n)})}function s(n,r,s,a,c,u){u=!!u;var h=e(n),f=l[h]||(l[h]=[]);o(r,s,function(e,r){var o=c&&c(r,e),s=o||r,l=function(t){var e=s.apply(n,[t].concat(t.data));return e===!1&&t.preventDefault(),e},h=t.extend(i(e),{fn:r,proxy:l,sel:a,del:o,i:f.length});f.push(h),n.addEventListener(h.e,l,u)})}function a(t,i,r,s){var a=e(t);o(i||"",r,function(e,i){n(t,e,i,s).forEach(function(e){delete l[a][e.i],t.removeEventListener(e.e,e.proxy,!1)})})}function c(e){var n=t.extend({originalEvent:e},e);return t.each(m,function(t,i){n[t]=function(){return this[i]=d,e[t].apply(e,arguments)},n[i]=p}),n}function u(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var l=(t.zepto.qsa,{}),h=1,f={};f.click=f.mousedown=f.mouseup=f.mousemove="MouseEvents",t.event={add:s,remove:a},t.proxy=function(n,i){if(t.isFunction(n)){var r=function(){return n.apply(i,arguments)};return r._zid=e(n),r}if("string"==typeof i)return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){s(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){a(this,t,e)})},t.fn.one=function(t,e){return this.each(function(n,i){s(this,t,e,null,function(t,e){return function(){var n=t.apply(i,arguments);return a(i,e,t),n}})})};var d=function(){return!0},p=function(){return!1},m={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,n,i){var r=!1;return("blur"==n||"focus"==n)&&(t.iswebkit?n="blur"==n?"focusout":"focus"==n?"focusin":n:r=!0),this.each(function(o,a){s(a,n,i,e,function(n){return function(i){var r,o=t(i.target).closest(e,a).get(0);return o?(r=t.extend(c(i),{currentTarget:o,liveFired:a}),n.apply(o,[r].concat([].slice.call(arguments,1)))):void 0}},r)})},t.fn.undelegate=function(t,e,n){return this.each(function(){a(this,e,n,t)})},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i){return void 0==n||t.isFunction(n)?this.bind(e,n):this.delegate(n,e,i)},t.fn.off=function(e,n,i){return void 0==n||t.isFunction(n)?this.unbind(e,n):this.undelegate(n,e,i)},t.fn.trigger=function(e,n){return"string"==typeof e&&(e=t.Event(e)),u(e),e.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(s,a){r=c("string"==typeof e?t.Event(e):e),r.data=i,r.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){if(t)this.bind(e,t);else if(this.length)try{this.get(0)[e]()}catch(n){}return this}}),t.Event=function(t,e){var n=document.createEvent(f[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),n}}(Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/WebKit\/([\d.]+)/),r=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),s=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),a=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),c=a&&t.match(/TouchPad/),u=t.match(/Kindle\/([\d.]+)/),l=t.match(/Silk\/([\d._]+)/),h=t.match(/(BlackBerry).*Version\/([\d.]+)/);(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),s&&(e.ios=e.iphone=!0,e.version=s[2].replace(/_/g,".")),o&&(e.ios=e.ipad=!0,e.version=o[2].replace(/_/g,".")),a&&(e.webos=!0,e.version=a[2]),c&&(e.touchpad=!0),h&&(e.blackberry=!0,e.version=h[2]),u&&(e.kindle=!0,e.version=u[1]),l&&(n.silk=!0,n.version=l[1]),!l&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0)}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t,e){function n(t){return t.toLowerCase()}function i(t){return r?r+t:n(t)}var r,o="",s={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},a=window.document,c=a.createElement("div"),u=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,l={};t.each(s,function(t,i){return c.style[t+"TransitionProperty"]!==e?(o="-"+n(t)+"-",r=i,!1):void 0}),l[o+"transition-property"]=l[o+"transition-duration"]=l[o+"transition-timing-function"]=l[o+"animation-name"]=l[o+"animation-duration"]="",t.fx={off:r===e&&c.style.transitionProperty===e,cssPrefix:o,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(e,n,i,r){return t.isObject(n)&&(i=n.easing,r=n.complete,n=n.duration),n&&(n/=1e3),this.anim(e,n,i,r)},t.fn.anim=function(n,i,r,s){var a,c,h,f={},d=this,p=t.fx.transitionEnd;if(i===e&&(i=.4),t.fx.off&&(i=0),"string"==typeof n)f[o+"animation-name"]=n,f[o+"animation-duration"]=i+"s",p=t.fx.animationEnd;else{for(c in n)u.test(c)?(a||(a=[]),a.push(c+"("+n[c]+")")):f[c]=n[c];a&&(f[o+"transform"]=a.join(" ")),!t.fx.off&&"object"==typeof n&&(f[o+"transition-property"]=Object.keys(n).join(", "),f[o+"transition-duration"]=i+"s",f[o+"transition-timing-function"]=r||"linear")}return h=function(e){if(e!==void 0){if(e.target!==e.currentTarget)return;t(e.target).unbind(p,arguments.callee)}t(this).css(l),s&&s.call(this)},i>0&&this.bind(p,h),setTimeout(function(){d.css(f),0>=i&&setTimeout(function(){d.each(function(){h.call(this)})},0)},0),this},c=null}(Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.defaultPrevented}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:(n(e,i,"ajaxSend",[t,e]),void 0)}function s(t,e,i){var r=i.context,o="success";i.success.call(r,t,o,e),n(i,r,"ajaxSuccess",[e,i,t]),c(o,e,i)}function a(t,e,i,r){var o=r.context;r.error.call(o,i,e,t),n(r,o,"ajaxError",[i,r,t]),c(e,i,r)}function c(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function u(){}function l(t){return t&&(t==C?"html":t==E?"json":k.test(t)?"script":b.test(t)&&"xml")||"text"}function h(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function f(e){g(e.data)&&(e.data=t.param(e.data)),e.data&&(!e.type||"GET"==e.type.toUpperCase())&&(e.url=h(e.url,e.data))}function d(e,n,i,r){var o=t.isArray(n);t.each(n,function(n,s){r&&(n=i?r:r+"["+(o?"":n)+"]"),!r&&o?e.add(s.name,s.value):(i?t.isArray(s):g(s))?d(e,s,i,n):e.add(n,s)})}var p,m,v=0,g=t.isObject,y=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,k=/^(?:text|application)\/javascript/i,b=/^(?:text|application)\/xml/i,E="application/json",C="text/html",x=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){var n,i="jsonp"+ ++v,r=y.createElement("script"),o=function(){t(r).remove(),i in window&&(window[i]=u),c("abort",a,e)},a={abort:o};return e.error&&(r.onerror=function(){a.abort(),e.error()}),window[i]=function(o){clearTimeout(n),t(r).remove(),delete window[i],s(o,a,e)},f(e),r.src=e.url.replace(/=\?/,"="+i),t("head").append(r),e.timeout>0&&(n=setTimeout(function(){a.abort(),c("timeout",a,e)},e.timeout)),a},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:E,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0},t.ajax=function(e){var n=t.extend({},e||{});for(p in t.ajaxSettings)void 0===n[p]&&(n[p]=t.ajaxSettings[p]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host);var r=n.dataType,c=/=\?/.test(n.url);if("jsonp"==r||c)return c||(n.url=h(n.url,"callback=?")),t.ajaxJSONP(n);n.url||(n.url=""+window.location),f(n);var d,v=n.accepts[r],g={},y=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,w=t.ajaxSettings.xhr();n.crossDomain||(g["X-Requested-With"]="XMLHttpRequest"),v&&(g.Accept=v,v.indexOf(",")>-1&&(v=v.split(",",2)[0]),w.overrideMimeType&&w.overrideMimeType(v)),(n.contentType||n.data&&"GET"!=n.type.toUpperCase())&&(g["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=t.extend(g,n.headers||{}),w.onreadystatechange=function(){if(4==w.readyState){clearTimeout(d);var t,e=!1;if(w.status>=200&&300>w.status||304==w.status||0==w.status&&"file:"==y){r=r||l(w.getResponseHeader("content-type")),t=w.responseText;try{"script"==r?(1,eval)(t):"xml"==r?t=w.responseXML:"json"==r&&(t=x.test(t)?null:JSON.parse(t))}catch(i){e=i}e?a(e,"parsererror",w,n):s(t,w,n)}else a(null,"error",w,n)}};var k="async"in n?n.async:!0;w.open(n.type,n.url,k);for(m in n.headers)w.setRequestHeader(m,n.headers[m]);return o(w,n)===!1?(w.abort(),!1):(n.timeout>0&&(d=setTimeout(function(){w.onreadystatechange=u,w.abort(),a(null,"timeout",w,n)},n.timeout)),w.send(n.data?n.data:null),w)},t.get=function(e,n){return t.ajax({url:e,success:n})},t.post=function(e,n,i,r){return t.isFunction(n)&&(r=r||i,i=n,n=null),t.ajax({type:"POST",url:e,data:n,success:i,dataType:r})},t.getJSON=function(e,n){return t.ajax({url:e,success:n,dataType:"json"})},t.fn.load=function(e,n){if(!this.length)return this;var i,r=this,o=e.split(/\s/);return o.length>1&&(e=o[0],i=o[1]),t.get(e,function(e){r.html(i?t(y.createElement("div")).html(e.replace(w,"")).find(i).html():e),n&&n.call(r)}),this};var T=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(T(t)+"="+T(e))},d(n,t,e),n.join("&").replace("%20","+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t){function e(t){return"tagName"in t?t:t.parentNode}function n(t,e,n,i){var r=Math.abs(t-e),o=Math.abs(n-i);return r>=o?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function i(){s=null,a.last&&(a.el.trigger("longTap"),a={})}function r(){s&&clearTimeout(s),s=null}var o,s,a={},c=750;t(document).ready(function(){var u,l;t(document.body).bind("touchstart",function(n){u=Date.now(),l=u-(a.last||u),a.el=t(e(n.touches[0].target)),o&&clearTimeout(o),a.x1=n.touches[0].pageX,a.y1=n.touches[0].pageY,l>0&&250>=l&&(a.isDoubleTap=!0),a.last=u,s=setTimeout(i,c)}).bind("touchmove",function(t){r(),a.x2=t.touches[0].pageX,a.y2=t.touches[0].pageY}).bind("touchend",function(){r(),a.isDoubleTap?(a.el.trigger("doubleTap"),a={}):a.x2&&Math.abs(a.x1-a.x2)>30||a.y2&&Math.abs(a.y1-a.y2)>30?(a.el.trigger("swipe")&&a.el.trigger("swipe"+n(a.x1,a.x2,a.y1,a.y2)),a={}):"last"in a&&(a.el.trigger("tap"),o=setTimeout(function(){o=null,a.el.trigger("singleTap"),a={}},250))}).bind("touchcancel",function(){o&&clearTimeout(o),s&&clearTimeout(s),s=o=null,a={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}(Zepto),FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"button":case"input":return this.deviceIsIOS&&"file"===t.type?!0:t.disabled;case"label":case"video":return!0;default:return/\bneedsclick\b/.test(t.className)}},FastClick.prototype.needsFocus=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},FastClick.prototype.sendClick=function(t,e){"use strict";var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},FastClick.prototype.focus=function(t){"use strict";var e;this.deviceIsIOS&&t.setSelectionRange?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},FastClick.prototype.updateScrollParent=function(t){"use strict";var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(t){"use strict";return t.nodeType===Node.TEXT_NODE?t.parentNode:t},FastClick.prototype.onTouchStart=function(t){"use strict";var e,n,i;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],this.deviceIsIOS){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!this.deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,200>t.timeStamp-this.lastClickTime&&t.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(t){"use strict";var e=t.changedTouches[0];return Math.abs(e.pageX-this.touchStartX)>10||Math.abs(e.pageY-this.touchStartY)>10?!0:!1},FastClick.prototype.findControl=function(t){"use strict";return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(t){"use strict";var e,n,i,r,o,s=this.targetElement;if(this.touchHasMoved(t)&&(this.trackingClick=!1,this.targetElement=null),!this.trackingClick)return!0;if(200>t.timeStamp-this.lastClickTime)return this.cancelNextClick=!0,!0;if(this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(o=t.changedTouches[0],s=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)),i=s.tagName.toLowerCase(),"label"===i){if(e=this.findControl(s)){if(this.focus(s),this.deviceIsAndroid)return!1;s=e}}else if(this.needsFocus(s))return t.timeStamp-n>100||this.deviceIsIOS&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(s),this.deviceIsIOS4&&"select"===i||(this.targetElement=null,t.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(r=s.fastClickScrollParent,r&&r.fastClickLastScrollTop!==r.scrollTop)?!0:(this.needsClick(s)||(t.preventDefault(),this.sendClick(s,t)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(t){"use strict";return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0:!0},FastClick.prototype.onClick=function(t){"use strict";var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},FastClick.prototype.destroy=function(){"use strict";var t=this.layer;this.deviceIsAndroid&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.attach=function(t){"use strict";return new FastClick(t)},"undefined"!=typeof define&&define.amd&&define(function(){"use strict";return FastClick}),"undefined"!=typeof module&&module.exports&&(module.exports=FastClick.attach,module.exports.FastClick=FastClick),$(function(){$(".command-link").on("click",function(t){t.preventDefault(),$.ajax({type:"POST",url:$(this).attr("href")})}),$(".command-link").on("touchend",function(){var t=this;$(this).attr("data-color",$(this).css("background")),$(this).css("background","#2fe2bf"),setTimeout(function(){$(t).css("background",$(t).attr("data-color"))},100)});var t=[];$.each($(".remote h2"),function(e,n){t.push({el:n,top:$(n).offset().top})}),$("h2").on("click",function(){window.scrollTo(0,$(this).offset().top)}),new FastClick(document.body)});