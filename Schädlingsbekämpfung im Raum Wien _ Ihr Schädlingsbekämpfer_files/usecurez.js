if (typeof(V_COUNTER) == 'undefined') { var V_COUNTER = {};	}
V_COUNTER = {
 ec: 0,
 ce: null,
 rpc: function(s,p) {
  var h = document.getElementsByTagName('head').item(0);
  var j = document.createElement('script');
  j.setAttribute('language', 'javascript');
  j.setAttribute('type', 'text/javascript');
  j.setAttribute('src',s+'?'+p);
  h.appendChild(j);
  return false;
 },
 rp: function() {
  var n = document.getElementById('counter_phone');
  if (n !== null) {
   n.setAttribute('style','display: block; padding: 10px; position: fixed; left: 0; bottom: 0; z-index:10000;');
   var s = n.getAttribute('data-phone');
   var c = n.getAttribute('data-color');
   var t = s.replace(/[^\d+]/g, "");
   var h = 'tel:' + t;
   n.innerHTML = '\
<style>\n\
 @media (min-width: 991px){\
	#counter_phone{display:none !important;}\
}\
 @keyframes tossing {\
  0% {transform: rotate(-8deg);}\
  50% {transform: rotate(8deg);}\
  100% {transform: rotate(-8deg);}\
 }\
 @-webkit-keyframes tossing {\
  0% {-webkit-transform: rotate(-8deg);}\
  50% {-webkit-transform: rotate(8deg);}\
  100% {-webkit-transform: rotate(-8deg);}\
 }\
 #counter_phone a{\
    display: inline-block;\
    transition: all 300ms ease-in-out;\
    -webkit-animation-name: tossing;\
    animation-name: tossing;\
    -webkit-animation-duration: 1.5s;\
    animation-duration: 1.5s;\
    -webkit-animation-iteration-count: infinite;\
    animation-iteration-count: infinite;\
    -webkit-animation-play-state: running;\
    animation-play-state: running;\
    border-radius: 50%;\
    line-height: 0;\
  }\
  #counter_phone a:hover{\
    opacity: 0.7;\
    -webkit-animation-play-state: paused;\
    animation-play-state: paused;\
  }\
   #counter_phone a svg{\
    width: 45px;\
    height: 45px;\
    fill: '+c+';\
  }\
  #counter_phone a svg .phone-icon{\
    fill: white;\
  }\
</style><a href="javascript:void();" onclick="V_COUNTER.sc(\''+t+'\'); window.location.href=\''+h+'\';">\
<svg version="1.1" x="0px" y="0px" viewBox="0 0 240 240" xml:space="preserve">\
        <circle cx="119.7" cy="120.3" r="120"/>\
        <g>\
        	<path class="phone-icon" d="M122.3,69c14.4-0.4,26.5,4.7,36.3,15.1c6.8,7.2,10.7,15.8,12,25.6c0.1,1.1,0.5,1.4,1.6,1.2\n\
        		c2.8-0.3,5.6-0.3,8.5-0.5c1-1,0.6-2.1,0.4-3.1c-0.9-5.2-2.3-10.3-4.6-15c-2.9-6-6.4-11.6-11.3-16c-1.1-0.9-3.2-2.7-4.3-3.6\n\
        		c-1-0.8-2.8-2.4-3.8-3.1c-1.2-1-2.4-1.9-3.6-2.7c-4.1-2.5-8.5-4.4-13.2-5.8c-5.7-1.7-11.5-2.5-17.4-2.3c-1,0-2.1-0.2-2.7,0.8\n\
        		c0.1,3.2,0.2,6.4,0.3,9.6C121.6,69,122,69,122.3,69z"/>\n\
        	<path class="phone-icon" d="M156.6,112.4c2.5-0.3,5-0.5,7.5-0.6c1.3-0.1,1.6-0.5,1.4-1.7c-1.6-10.4-6.4-18.9-14.3-25.7\n\
        		c-8.3-7-17.8-10.3-28.6-10c-0.9,0-1.1,0.3-1,1.2c0.3,2.5,0.5,5.1,0.7,7.7c0.1,1.1,0.4,1.4,1.5,1.3c6.7-0.2,12.9,1.6,18.4,5.5\n\
        		c7.4,5.2,11.9,12.4,13.3,21.4C155.5,112.3,155.8,112.4,156.6,112.4z"/>\n\
        	<path class="phone-icon" d="M123.7,89.6c-0.8,0.1-1,0.3-0.9,1.1c0.3,2.5,0.5,5.1,0.7,7.7c0.1,0.9,0.4,1,1.2,1c8.3,0.1,14.7,5.9,15.9,14.3\n\
        		c3.1-0.3,5.9-0.5,8.8-0.8c0.6-0.1,0.9-0.1,0.8-0.9C148.9,99.5,136.2,88.8,123.7,89.6z"/>\n\
        	<path class="phone-icon" d="M179.2,147.2c-1.4-0.7-2.7-1.4-4.2-2.1c-6.3-2.9-12.5-5.9-18.8-8.8c-2.9-1.2-5.2-0.8-7.2,2\n\
        		c-3,4.1-6.4,7.9-9.5,11.8c-1.8,2.4-4,2.8-6.8,1.6c-18.9-7.6-33.4-20.2-43.9-37.6c-1.7-2.9-1.6-5.1,0.7-7.5c3.1-3.2,6.2-6.5,8-10.6\n\
        		c0.8-1.7,1.1-3.4,0.4-5.1c-3.6-8.9-7.3-17.8-11.1-26.6c-0.6-1.4-1.6-2.7-3-3.4c-4-2-13.9-0.7-17.2,2.4C56.5,72.9,52.5,84.6,55,98.2\n\
        		c2.1,11.5,8.3,21,15.1,30.2c17.9,24.4,40.1,42.9,69.7,51.3c4.4,1.3,8.8,2.3,13.4,2.1c2.8,0.1,5.7,0,8.3-0.7\n\
        		c12.2-3.4,22.4-10.1,23.4-23.8C185.5,150.5,185.6,150.3,179.2,147.2z"/>\n\
        </g>\
      </svg></a>';
  }
 },
 tL: 0,
 psT: 0,
 gdh: function() {
  return Math.max(
   document.body.scrollHeight || 0,
   document.documentElement.scrollHeight || 0,
   document.body.offsetHeight || 0,
   document.documentElement.offsetHeight || 0,
   document.body.clientHeight || 0,
   document.documentElement.clientHeight || 0
  );
 },
 as: function() {
  var wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
  var sT= window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
  this.psT = Math.max(Math.floor( (wh + sT) / this.gdh() * 100),this.psT);
 },
 frmx: function (z) {
  var p = window.location.pathname;
  var u = window.location.protocol+'//'+window.location.hostname+'/usecurezp.js'
+'?page='+escape(p)
+'&name='+escape(z)
+'&type='+escape('frmx')
+'&k='+this.k;
  var x = new XMLHttpRequest();
  x.open("GET", u, true);
  x.send();
 },
 evs: function(e) {
  if (e.target) {
   var n = e.target.getAttribute('data-event-name');
   if (n === null) {
    n = '';
   }
   var t = e.type;
   var p = window.location.pathname;
   var u = window.location.protocol+'//'+window.location.hostname+'/usecurezp.js'
    +'?page='+escape(p)
    +'&name='+escape(n)
    +'&type='+escape(t)
    +'&k='+this.k;
   navigator.sendBeacon(u);
  }
 },
 evl: function () {
  ("blur load focus change select submit keyup click auxclick mouseover touchend cut copy paste ended pause playing seeked volumechange".split(" ")).forEach(
  function(e) {
    var x = document.querySelectorAll('[data-event-type="'+e+'"]');
    let index = 0;
    for( index=0; index < x.length; index++ ) {
      x[index].addEventListener(e,function(e) { return V_COUNTER.evs(e) },true);
    }
  });
  var x = document.forms;
  var i = 0;
  for (i=0; i< x.length; i++) {
   var z = x[i].getAttribute('action');
   if (!z) { } else {
    var p = document.createElement('a');
    p.href = z;
    if ('formixapp.com' == p.hostname) {
     var z = p.pathname.replace(/(forms|\/|\.js)/g,'');
//     console.log(z);
     x[i].addEventListener("submit", function(e) { return V_COUNTER.frmx(z) }, true);
    }
   }
  }
 },
 sc: function(t) {
  var p = escape(window.location.pathname);
  var u = window.location.protocol+'//'+window.location.hostname+'/usecurezm.js'
   +'?me_event_type=1'
   +'&me_page='+p
   +'&me_phone_number='+t
   +'&k='+this.k;
  navigator.sendBeacon(u);
 },
 su: function() {
  var e = new Date();
  e = Math.round((e-window.performance.timing.domContentLoadedEventEnd)/1000);
  navigator.sendBeacon(this.cu+'?ht='+this.hit+'&ts='+e+'&vs='+this.psT);
 },
 IE: document.all?true:false,
 sw: screen.width,
 sh: screen.height,
 r: document.referrer,
 pl: navigator.platform,
 je: navigator.javaEnabled(),
 pn: document.location,
 d: document.domain,
 k: 'R3C45589W45448',
 rq: false,
 tS: 0,
 hit: null,
 cu: window.location.protocol+'//'+window.location.hostname+'/usecurezc.js',
 init: function() {
  if (!this.rq) {
   this.rq = true;
   this.rp();
   this.evl();
   this.ce = 0;
   if (this.hit == null) {
    console.log('noc');
    this.rpc(this.cu,'isnew=1&cookie_enabled='+this.ce+'&path_name='+escape(this.pn)+'&referer='+escape(this.r)+'&domain='+this.d+'&k='+this.k+'&sw='+this.sw+'&sh='+this.sh);
   } else {
    this.rpc(this.cu,'isnew=0&ht='+this.hit+'&path_name='+escape(this.pn)+'&referer='+escape(this.r)+'&domain='+this.d+'&k='+this.k+'&sw='+this.sw+'&sh='+this.sh);
   }
  }
  window.addEventListener("load",function(){V_COUNTER.as();V_COUNTER.su()},false)
  window.addEventListener("scroll",function(){clearTimeout(V_COUNTER.tS);throttlescroll = setTimeout(function(){V_COUNTER.as();}, 150)},false)
  window.addEventListener("pagehide",function(e){ e.preventDefault(); e.returnValue = null; V_COUNTER.su(); return null; },false)
 }
}
V_COUNTER.init();
