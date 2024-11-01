rIt({
    "*": {
        "assets": ["/js/_essentials/notifications.js", "/js/_essentials/basics.js", "/js/_essentials/ruffnav.js"],
        "function": "always"
    },
    "body.isOldBrowser": {
        "assets": ["/js/_essentials/notifications.js", "/js/_essentials/basics.js", "/js/_essentials/note.oldBrowser.js"]
    },
    "body.devMode": {
        "assets": ["/js/_essentials/devMode.js"]
    },
    ".modalGallery":  {
        "assets": ["/js/vendor/baguetteBox.js"],
        "function":function() {
            baguetteBox.run(arguments[0], {noScrollbars:true, async: true, preload: 0})
        },
        "lazy": true
    },
    "picture, :not(picture) > img[data-src], .lazyBg": {
        "assets": ["/js/_essentials/basics.js", "/js/_essentials/lazyLoad.js"],
        "function":function() {
            new LazyLoad({selector: arguments[0]})
        }
    },
    "form[data-action*='formixapp.com']": {
        "assets": ["/js/_essentials/notifications.js", "/js/_essentials/basics.js", "/js/_essentials/formix.js"],
        "function": function() {
            new Formix({selector: arguments[0]})
        },
        "lazy": true
    },
    "table[data-table-filter]": {
        "assets": ["/js/vendor/tableFilter.js"],
        "function": function() {
            new tableFilter({
                selector: arguments[0],
                perPage: 2
            })
        }
    },
    "[data-video]": {
        "assets": [],
        "function":function() {
            let stopVideo = document.querySelectorAll('[data-video]');
            stopVideo.forEach(thisStopVideo => {
                thisStopVideo.addEventListener('click', function() {
                    const data_video = thisStopVideo.getAttribute('data-video');
                    const video = document.getElementById(data_video);
                    if (video) {
                        let videoType = video.tagName;
                        switch (videoType) {
                            case 'IFRAME':
                                video.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                            break;
                            case 'VIDEO':
                                video.pause();
                                video.currentTime = 0;
                            break;
                            default:
                                const iframeVideo = video.querySelector('iframe');
                                const htmlVideo = video.querySelector('video');
                                if(iframeVideo) {
                                    iframeVideo.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                                } else if(htmlVideo) {
                                    htmlVideo.pause();
                                }
                        }
                    }
                });
            });
        }
    },
    
    "html[data-privacy-control='true']": {
        "assets": ["/js/_essentials/notifications.js", "/js/_essentials/basics.js", "/privacyControl-2.0.conf.js", "/js/_essentials/privacyControl-2.js"],
        "function": function() {
            privacyCtrl = new PrivacyControl({
                deps: {
                    googlemaps: true
                }
            })
        }
    },
    ".index":{
        "assets": ["/js/vendor/aos.js"],
         "function": function () {
            AOS.init();
        }
    }
});

function always()
{
    new Ruffnav()
    new ScrollDir(document.body)
    new Prefetcher()
}


/**
 * require it! (dependencies)
 * @author Dominik Kressler
 * @version 1.0.0
 * @date 2021-02-09
 */
function rIt(rules){if(Object.keys(rules).length===0||rules.constructor!==Object){return false}let instantRules={},lazyRules={};if(!window.rItLoaded){window.rItLoaded=[]}for(let key in rules){if(!(rules[key].assets instanceof Array)){rules[key].assets=[]}rules[key].selector=key;if(document.querySelector(key)!==null){if(rules[key].lazy){lazyRules[key]=rules[key]}else{instantRules[key]=rules[key]}}}loadAsset=async asset=>{if(window.rItLoaded.indexOf(asset)>-1){return false}return new Promise((resolve,reject)=>{window.rItLoaded.push(asset);if(asset.indexOf('.css',asset.length-4)!==-1||asset.indexOf('rforce=css')>-1){var node=document.createElement('link');node.setAttribute('href',asset);node.setAttribute('rel','stylesheet')}else{var node=document.createElement('script');node.src=asset;node.setAttribute('defer','defer')}node.onload=async()=>{resolve(true)};document.body.appendChild(node)})};if(Object.keys(lazyRules).length>0){let observer=new IntersectionObserver(function(entries){if(entries[0].intersectionRatio<=0){return;}let selector=entries[0].target.dataset.ritSelector;let rule=lazyRules[selector];(async()=>{for(let asset of rule.assets){await loadAsset(asset)}if(typeof rule['function']=='string'){window[rule['function']](selector)}if(typeof rule['function']=='function'){rule['function'](selector)}})();observer.unobserve(entries[0].target)},{threshold:0.01});for(let key in lazyRules){let selector=key;let target=document.querySelector(selector);target.dataset.ritSelector=selector;observer.observe(target)}}if(Object.keys(instantRules).length>0){(async()=>{for(let key in instantRules){let rule=instantRules[key];for(let asset of rule.assets){await loadAsset(asset)}if(typeof rule['function']=='string'){window[rule['function']](key)}if(typeof rule['function']=='function'){rule['function'](key)}}})()}return this}