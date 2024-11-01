// add target="_blank" to external links
for(var links=document.links,i=0,l=links.length;i<l;i++)links[i].hostname!=window.location.hostname&&(links[i].target="_blank");
// IE11 endsWith polyfill
String.prototype.endsWith||(String.prototype.endsWith=function(e){return-1!==this.indexOf(e,this.length-e.length)})
/* BODY CLASS HANDLING */;var body=document.querySelector("body");body.classList.remove("noJS"),body.classList.add("javascript"),"ontouchstart"in document.documentElement&&body.classList.add("isTouch")
/**
* @desc Prefetching internal links on hover
* @version 1.0.0
* @author d.kressler
*/;var Prefetcher=function(e){defaults={onHover:!0};var t=J.merge(defaults,e),n=function(e){var t=document.createElement("link");return t.rel="prefetch",t.href=e,r.push(e),sessionStorage.setItem("prefetched",r.toString()),document.head.appendChild(t),r},r=sessionStorage.getItem("prefetched");r=null===r?[]:r.split(",");for(var i=document.querySelectorAll("a[data-prefetch]"),o=0;o<i.length;o++)n(i[o].href);if(t.onHover){var a=document.querySelectorAll('a[href|="http"]:not([data-prefetch=false])'),c=window.location.origin;for(o=0;o<a.length;o++)a[o].addEventListener("mouseover",function(){(this.href.indexOf(c)>-1||0!==this.href.indexOf("http"))&&-1==r.indexOf(this.href)&&this.href!=window.location.href&&!1===this.href.endsWith(".jpg")&&!1===this.href.endsWith(".png")&&!1===this.href.endsWith(".gif")&&n(this.href)})}};
/* Replace all a[href^="tel"] by span elements */function phonelink(){var e=document.querySelectorAll('a[href^="tel:"]'),t=document.querySelectorAll('a[href^="whatsapp://"]');for(i=0;i<e.length;i++){var n='<span class="'+(r=e[i]).className+'">'+r.innerHTML+"</span>";r.outerHTML=n}for(i=0;i<t.length;i++){var r;(r=t[i]).setAttribute("href",r.getAttribute("href").replace("whatsapp://","https://web.whatsapp.com/"))}}
/* REPLACE a[href^="tel"] BY SPAN ELEMENT IF NOT MOBILE DEVICE */
/*
 * new scrollDir(document.body); 
 * Adds a class to an element to indicate the scroll direction
 */
function ScrollDir(e){var t=0;document.addEventListener("scroll",function(n){var r=window.pageYOffset||document.documentElement.scrollTop;r>t?(e.classList.add("scrollingDown"),e.classList.remove("scrollingUp")):r!=t&&(e.classList.remove("scrollingDown"),e.classList.add("scrollingUp")),t=r<=0?0:r})}"ontouchstart"in window||navigator.maxTouchPoints||null!==document.getElementById("log_container")||phonelink()
/* MAILMASK */,
/* MAILMASK */
function(){var e=document.querySelectorAll("a[data-email]");for(i=0;i<e.length;i++){var t=JSON.parse(e[i].getAttribute("data-email")),n=e[i].querySelector("span.escape");e[i].href="mailto:"+t.name+"@"+t.host,n&&(n.outerHTML="@")}}(),
/*
 * css breakpoints in javascript object
 * https://github.com/ma-zou/breakpoints_from_css/blob/master/script.js
*/
window.breakpoint=function(e,t){var n=new Array;for(bp in cssData.gridMap)"$rowMaxWidth"===cssData.gridMap[bp].width?n[bp]=parseInt(cssData.rowMaxWidth.replace("px",""))/16+"em":n[bp]=parseInt(cssData.gridMap[bp].width.replace("px",""))/16+"em";return t=void 0===t?"min":t,void 0===e?n:"min"===t?window.matchMedia("(min-width: "+n[e]+")").matches:window.matchMedia("(max-width: "+n[e].replace(/(\d|\W)*/,function(e){return parseFloat(e)-.0625})+")").matches}
/**
 * @author Dominik Kressler
 * @thanks Eric Holtkamp
 * @date 2020-05-05
 * 
 */,window.currentBp=function(){let e=breakpoint(),t=(window.innerWidth+1)/parseInt(cssData.baseFontSize),n=Object.values(e).map(function(e){return parseFloat(e)});n.sort(function(e,t){return e-t});let r=!1;for(let e=0,i=n.length;e<i;e++)if(e<n.length-1&&t>=n[e]&&t<=n[e+1]){r=n[e];break}return!1===r&&(r=n[n.length-1]),Object.keys(e)[Object.values(e).indexOf(r+"em")]},window.addEventListener("keydown",function(e){13==e.which&&null!=document.activeElement.getAttribute("tabindex")&&document.activeElement.click()});
/**
 * @desc J Library with handy helper functions
 * @version 1.0.0
 * @author Dominik Kressler
 * @author Malte Zoudlik
*/
var J=function(){return this};J.prototype.mergeDeep=function(){var e=this;return Object.keys(arguments).forEach(t=>{Object.keys(e).forEach(n=>{if(arguments[t].hasOwnProperty(n)){var r=arguments[t][n]instanceof Array?arguments[t][n]:[arguments[t][n]];e[n]=e[n].concat(r)}})}),e},J.prototype.merge=function(e,t){for(var n in t)try{t[n].constructor==Object?e[n]=e[n].mergeDeep(t[n]):e[n]=t[n]}catch(r){e[n]=t[n]}return e},J.prototype.isOnScreen=function(e,t){if("object"!=typeof e)return!0;void 0===t&&(t=0);var n=e.getBoundingClientRect(),r=n.top+n.height>=0&&n.left+n.width>=0&&n.right-n.width<=(window.innerWidth||document.documentElement.clientWidth)&&n.bottom-n.height<=(window.innerHeight||document.documentElement.clientHeight)+t;return r?e.classList.add("isOnScreen"):e.classList.remove("isOnScreen"),r},J.prototype.isNodeElement=function(e){return e instanceof Element||e instanceof HTMLDocument},J.prototype.deepValue=function(e,t){for(var n=0,r=(t=t.split(".")).length;n<r;n++)e=null==e[t[n]]||void 0===e[t[n]]?"":e[t[n]];return e},J.prototype.isURL=function(e){// fragment locator
return new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},J=new J,void 0!==String.prototype.replaceAll&&(String.prototype.replaceAll=function(e,t){return this.replace(new RegExp(e,"g"),t)});