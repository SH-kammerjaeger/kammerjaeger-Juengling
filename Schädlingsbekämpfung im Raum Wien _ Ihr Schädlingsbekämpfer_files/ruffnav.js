/**
 * off-canvas nav
 * @name ruffnav
 * @author Dominik Kressler
 * @version 2.2.5
 * @thanks Jasmin Reiff
 * @edit by Malte Zoudlik
 * @copyright (c) 2018
 */
function Ruffnav(e){
// set back button text by language, or by overwrite
if(this.options=J.merge({toggler:"#naviToggled",container:"#navigation",navList:".naviMain",subParent:".hasSub",subClass:".sub",backText:!1,mobileBreak:"large",closeOnScroll:!0,desktopHover:!1,navSplit:!1,navAppend:!1},e),this.depth=0,this.toggler=document.querySelector(this.options.toggler),this.container=document.querySelector(this.options.container),this.navList=this.container.querySelector(this.options.navList),this.sub=this.container.querySelectorAll(this.options.subClass),this.subParent=this.container.querySelectorAll(this.options.subParent),this.html=document.documentElement,this.device=breakpoint(this.options.mobileBreak)?"desktop":"mobile",this.isOpen=!1,this.subToggler=null,this.windowSize=window.innerWidth,this.navSize=0,this.activePath="",this.path=window.location.pathname.split("/").filter(function(e){return""!=e}),!1===this.options.backText){var t=document.querySelector("html");this.options.backText="de"==t.lang?"Zurück":"back"}this.backButton=i("li",{class:"navBack",tabindex:"0"},"<span>"+this.options.backText+"</span>");var n=this;function i(e,t,n){
// create Node element
var i=document.createElement(e);return[].forEach.call(Object.entries(t),function(e){i.setAttribute(e[0],e[1])}),n&&(i.innerHTML=n),i}this.init=function(){
// append custom Content to Navigation
if(
// add class for desktop hover
n.container.classList.add("firstLevel"),n.options.desktopHover&&n.container.classList.add("hoverNavigation"),n.options.navAppend){var e=i("li",{class:"navItem appendedItem"},n.options.navAppend);n.navList.appendChild(e)}if(n.navSize=n.navList.childNodes.length,
// split navigation in half
// transform Navigation markup
[].forEach.call(n.subParent,function(e){var t=e.firstElementChild,o=t.dataset&&t.dataset.categoryLabel?t.dataset.categoryLabel:t.innerHTML;
// parent-name attribute for UL's
t.nextElementSibling.setAttribute("data-parent-name",t.innerText),
// only clone when Element is a link
"SPAN"!==t.nodeName&&(
// var cActive = (window.location.origin+window.location.pathname === childNode.href) ? 'active' : '';
// copy link inside UL's
t.nextElementSibling.insertBefore(i("li",{class:"navItem "+t.className.trim()},'<a href="'+t.href+'" title="'+t.title+'">'+o+"</a>"),e.children[1].children[0]),n.path.length&&n.activeClassFallback(t)),
// replace link's with span's
e.replaceChild(i("span",{class:"subToggler "+t.className.trim(),tabindex:0,"data-href":t.href},t.innerHTML),t)}),[].forEach.call(n.sub,function(e){
// add backbuttons to UL's
e.insertBefore(n.backButton.cloneNode(!0),e.childNodes[0])}),n.options.navSplit){for(var t,o=i("ul",{class:"navi splitList"}),s=parseInt(n.navSize/2);s!=o.childNodes.length;s)t=n.navList.childNodes[s].cloneNode(!0),o.appendChild(t),n.navList.childNodes[s].remove();n.navList.parentElement.appendChild(o)}
// close on mobile toggle
return n.toggler.addEventListener("click",n._closeAll),
// add Listeners for different events
n.addListener(),
// add global resize listener
n.listenResize(),n},this._open=function(e){
// open event
var t,i;"mouseenter"===e.type&&"mobile"===n.device||("mouseenter"===e.type?((t=e.target).childNodes[1].classList.add("current"),null!=n.container.querySelector(".open")&&n.container.querySelector(".open").classList.remove("open"),t.childNodes[1].classList.add("open")):(null!==(
//close other on same level when already opened
i=(t=e.currentTarget).parentElement.parentElement.querySelector(".current"))&&n.closeRecusive(i,!1),t.nextElementSibling.classList.add("current"),null!=n.container.querySelector(".open")&&n.container.querySelector(".open").classList.remove("open"),t.nextElementSibling.classList.add("open")),n.isOpen||"mobile"===n.device||(n.options.closeOnScroll&&window.addEventListener("scroll",n._closeAll),document.addEventListener("click",n._closeAll),document.addEventListener("keydown",n._closeAll),n.isOpen=!0),n.container.classList.remove("firstLevel"),n.scrollTop())},this._close=function(e){
// close event
var t;"mouseleave"===e.type&&"mobile"===n.device||(t="mouseleave"===e.type?e.currentTarget:e.currentTarget.parentElement,n.closeRecusive(t,!1),0===n.container.querySelectorAll("ul.current").length&&(n.isOpen=!1),0===n.container.querySelectorAll("ul.current").length&&n.container.classList.add("firstLevel"),n.scrollTop())},this._closeAll=function(e){
// close all
if(n.toggler.checked?n.html.classList.add("hiddenScroll"):n.html.classList.remove("hiddenScroll"),"scroll"===e.type)n.closeRecusive(null,!0);else if("click"===e.type){
// check if click was not inside navigation
if(e.target===n.container||n.container.contains(e.target))return;n.closeRecusive(null,!0)}else"keydown"===e.type?
// check if "enter" was pressed
27===e.keyCode&&n.closeRecusive(null,!0):n.closeRecusive(null,!0);n.removeListeners(),n.isOpen=!1},this.closeRecusive=function(e,t){
// close all open items
t?([].forEach.call(n.container.querySelectorAll(".current"),function(e){e.classList.remove("current")}),null!=n.container.querySelector(".open")&&n.container.querySelector(".open").classList.remove("open"),n.container.classList.add("firstLevel")):(null!=n.container.querySelector(".open")&&n.container.querySelector(".open").classList.remove("open"),[].forEach.call(e.querySelectorAll(".current"),function(e){e.classList.remove("current")}),e.parentNode.parentNode.classList.add("open"),e.classList.remove("current"))},this.removeListeners=function(){
// remove eventListener for global close
window.removeEventListener("scroll",n._closeAll),document.removeEventListener("keydown",n._closeAll),document.removeEventListener("click",n._closeAll)},this.addListener=function(){
// add eventListener to subToggle and back
n.subToggler=n.container.querySelectorAll(".subToggler"),n.backButtons=n.container.querySelectorAll(".navBack"),[].forEach.call(n.subToggler,function(e){n.options.desktopHover&&(e.parentNode.addEventListener("mouseenter",n._open),e.parentNode.addEventListener("mouseleave",n._close)),e.addEventListener("click",n._open)}),[].forEach.call(n.backButtons,function(e){e.addEventListener("click",n._close,!1)})},this.listenResize=function(){
// global resize Event
window.onresize=function(){n.device=breakpoint(n.options.mobileBreak)?"desktop":"mobile","mobile"===n.device&&n.removeListeners(),n.windowSize!=window.innerWidth&&"desktop"===n.device&&(n.closeRecusive(null,!0),n.isOpen=!1),n.windowSize=window.innerWidth}},this.scrollTop=function(){[].forEach.call(n.sub,function(e){e.scrollTop=0}),n.container.childNodes[0].scrollTop=0},this.activeClassFallback=function(e){e.href===window.location.origin+"/"+this.activePath+this.path[0]+"/"&&(e.classList.add("active"),e.parentNode.classList.contains(n.options.subParent.substring(1))&&e.parentNode.classList.add("active"),1===this.path.length&&e.parentNode.querySelector('[href="'+window.location.origin+"/"+this.activePath+this.path[0]+'/"]').classList.add("active"),this.activePath+=this.path[0]+"/",this.path.splice(0,1))},this.init()}Object.entries||(Object.entries=function(e){// preallocate the Array
for(var t=Object.keys(e),n=t.length,i=new Array(n);n--;)i[n]=[t[n],e[t[n]]];return i}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});