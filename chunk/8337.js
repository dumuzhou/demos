/*! For license information please see 8337.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[8337,6392,4731],{"6392":function(t,a,n){n.r(a),n.d(a,{"a":function(){return createCommonjsModule},"b":function(){return i},"c":function(){return s},"g":function(){return getDefaultExportFromCjs}});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function createCommonjsModule(t,a,n){return t(n={"path":a,"exports":{},"require":function(t,a){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var s=createCommonjsModule((function(t){!function(){var a={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var s=typeof i;if("string"===s||"number"===s)t.push(i);else if(Array.isArray(i)){if(i.length){var l=r.apply(null,i);l&&t.push(l)}}else if("object"===s)if(i.toString===Object.prototype.toString)for(var d in i)a.call(i,d)&&i[d]&&t.push(d);else t.push(i.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}()}))},"4731":function(t,a,n){function throttle(t,a,n){void 0===a&&(a=250);var i,s=0;return function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];var c=n||this,h=Date.now();h-s>a?(t.apply(this,l),s=h):(clearTimeout(i),i=setTimeout((function(){s=h,t.apply(c,l)}),a))}}function debounce(t,a,n){var i;return void 0===a&&(a=250),function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];var d=n||this;clearTimeout(i),i=setTimeout((function(){t.apply(d,s)}),a)}}function isVisible(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}n.r(a),n.d(a,{"d":function(){return debounce},"i":function(){return isVisible},"t":function(){return throttle}})},"8337":function(t,a,n){n.r(a),n.d(a,{"taro_tabbar":function(){return h}});var i=n(6468),s=n(8741),l=n(6392),d=n(4731),__spreadArray=function(t,a,n){if(n||2===arguments.length)for(var i,s=0,l=a.length;s<l;s++)!i&&s in a||(i||(i=Array.prototype.slice.call(a,0,s)),i[s]=a[s]);return t.concat(i||Array.prototype.slice.call(a))},splitUrl=function(t){var a,n=t||"",i={"path":null,"query":null,"fragment":null};return(a=n.indexOf("#"))>-1&&(i.fragment=n.substring(a+1),n=n.substring(0,a)),(a=n.indexOf("?"))>-1&&(i.query=n.substring(a+1),n=n.substring(0,a)),i.path=n,i},addLeadingSlash=function(t){return void 0===t&&(t=""),"/"===t.charAt(0)?t:"/"+t},stripBasename=function(t,a){return void 0===t&&(t=""),void 0===a&&(a=""),function(t,a){return void 0===t&&(t=""),void 0===a&&(a=""),new RegExp("^"+a+"(\\/|\\?|#|$)","i").test(t)||t===a}(t,a)?t.substring(a.length):t};function isAbsolute(t){return"/"===t.charAt(0)}function spliceOne(t,a){for(var n=a,i=n+1,s=t.length;i<s;n+=1,i+=1)t[n]=t[i];t.pop()}var TabbarItem=function(t){var a=t.index,n=t.isSelected,c=void 0!==n&&n,h=t.textColor,b=t.iconPath,u=t.badgeText,f=t.showRedDot,p=void 0!==f&&f,v=t.pagePath,m=t.text,T=t.onSelect,_=(0,l.c)("weui-tabbar__item",{"weui-bar__item_on":c});return(0,i.h)("a",{"key":a,"href":"javascript:;","class":_,"onClick":function g(){var t=s.ZP.getCurrentPages().shift();"function"==typeof(null==t?void 0:t.onTabItemTap)&&(0,d.i)(this)&&t.onTabItemTap({"index":a,"pagePath":v,"text":m}),T(a)}},(0,i.h)("span",{"style":{"display":"inline-block","position":"relative"}},(0,i.h)("img",{"src":b,"alt":"","class":"weui-tabbar__icon"}),!!u&&(0,i.h)("span",{"class":"weui-badge taro-tabbar-badge","style":{"position":"absolute","top":"-2px","right":"-13px"}},u),p&&(0,i.h)("span",{"class":"weui-badge weui-badge_dot","style":{"position":"absolute","top":"0","right":"-6px"}})),(0,i.h)("p",{"class":"weui-tabbar__label","style":{"color":h}},m))},c="taro-tabbar__tabbar",h=function(){function e(t){var a=this;(0,i.r)(this,t),this.onLongPress=(0,i.c)(this,"longpress",7),this.homePage="",this.customRoutes=[],this.tabbarPos="bottom",this.getOriginUrl=function(t){var n=a.customRoutes.filter((function(a){var n=a[1];return splitUrl(n).path===splitUrl(t).path}));return function(t,a){return void 0===t&&(t=""),void 0===a&&(a=""),t.includes(a)?t.substring(0,t.length-a.length):t}(n.length?n[0][0]:t,".html")},this.getSelectedIndex=function(t){var n=-1;return a.list.forEach((function(a,i){var s=a.pagePath;splitUrl(t).path===splitUrl(s).path&&(n=i)})),n},this.switchTab=function(t){a.selectedIndex=t,s.ZP.switchTab({"url":a.list[t].pagePath})},this.switchTabHandler=function(t){var n=t.url,i=t.successHandler,s=t.errorHandler,l=function resolvePathname(t,a){void 0===a&&(a="");var n,i=t&&t.split("/")||[],s=a&&a.split("/")||[],l=t&&isAbsolute(t),d=a&&isAbsolute(a),c=l||d;if(t&&isAbsolute(t)?s=i:i.length&&(s.pop(),s=s.concat(i)),!s.length)return"/";if(s.length){var h=s[s.length-1];n="."===h||".."===h||""===h}else n=!1;for(var b=0,u=s.length;u>=0;u--){var f=s[u];"."===f?spliceOne(s,u):".."===f?(spliceOne(s,u),b++):b&&(spliceOne(s,u),b--)}if(!c)for(;b--;b)s.unshift("..");!c||""===s[0]||s[0]&&isAbsolute(s[0])||s.unshift("");var p=s.join("/");return n&&"/"!==p.substr(-1)&&(p+="/"),p}(n,a.getOriginUrl(a.getCurrentUrl()||a.homePage)),d=a.getSelectedIndex(l);d>-1?(a.switchTab(d),i({"errMsg":"switchTab:ok"})):s({"errMsg":'switchTab:fail page "'.concat(l,'" is not found')})},this.routerChangeHandler=function(t){var n,i,s=null===(n=null==t?void 0:t.toLocation)||void 0===n?void 0:n.path;if("string"==typeof s){var l=a.conf.basename||"/";i=stripBasename(addLeadingSlash(s||a.homePage),l)||"/"}else i=a.getCurrentUrl();a.selectedIndex=a.getSelectedIndex(a.getOriginUrl(i))},this.setTabBarBadgeHandler=function(t){var n=t.index,i=t.text,s=t.successHandler,l=t.errorHandler,d=__spreadArray([],a.list,!0);n in d?(d[n].showRedDot=!1,d[n].badgeText=i,s({"errMsg":"setTabBarBadge:ok"})):l({"errMsg":"setTabBarBadge:fail tabbar item not found"}),a.list=d},this.removeTabBarBadgeHandler=function(t){var n=t.index,i=t.successHandler,s=t.errorHandler,l=__spreadArray([],a.list,!0);n in l?(l[n].badgeText=null,l[n].badgeText=null,i({"errMsg":"removeTabBarBadge:ok"})):s({"errMsg":"removeTabBarBadge:fail tabbar item not found"}),a.list=l},this.showTabBarRedDotHandler=function(t){var n=t.index,i=t.successHandler,s=t.errorHandler,l=__spreadArray([],a.list,!0);n in l?(l[n].badgeText=null,l[n].showRedDot=!0,i({"errMsg":"showTabBarRedDot:ok"})):s({"errMsg":"showTabBarRedDot:fail tabbar item not found"}),a.list=l},this.hideTabBarRedDotHandler=function(t){var n=t.index,i=t.successHandler,s=t.errorHandler,l=__spreadArray([],a.list,!0);n in l?(l[n].showRedDot=!1,i({"errMsg":"hideTabBarRedDot:ok"})):s({"errMsg":"hideTabBarRedDot:fail tabbar item not found"}),a.list=l},this.showTabBarHandler=function(t){var n=t.successHandler;a.status=0,n({"errMsg":"showTabBar:ok"})},this.hideTabBarHandler=function(t){var n=t.animation,i=t.successHandler;a.status=n?2:1,i({"errMsg":"hideTabBar:ok"})},this.setTabBarStyleHandler=function(t){var n=t.color,i=t.selectedColor,s=t.backgroundColor,l=t.borderStyle,d=t.successHandler;s&&(a.backgroundColor=s),l&&(a.borderStyle=l),n&&(a.color=n),i&&(a.selectedColor=i),d({"errMsg":"setTabBarStyle:ok"})},this.setTabBarItemHandler=function(t){var n=t.index,i=t.iconPath,s=t.selectedIconPath,l=t.text,d=t.successHandler,c=t.errorHandler,h=__spreadArray([],a.list,!0);n in h?(i&&(h[n].iconPath=i),s&&(h[n].selectedIconPath=s),l&&(h[n].text=l),d({"errMsg":"setTabBarItem:ok"})):c({"errMsg":"setTabBarItem:fail tabbar item not found"}),a.list=h},this.conf=void 0,this.list=void 0,this.borderStyle=void 0,this.backgroundColor=void 0,this.color=void 0,this.selectedColor=void 0,this.selectedIndex=-1,this.status=0;var n=this.conf.list,l=this.conf.customRoutes;if("[object Array]"!==Object.prototype.toString.call(n)||n.length<2||n.length>5)throw new Error("tabBar 配置错误");this.homePage=addLeadingSlash(this.conf.homePage);var o=function(t){var a,n=l[t];t=addLeadingSlash(t),"string"==typeof n?d.customRoutes.push([t,addLeadingSlash(n)]):(null==n?void 0:n.length)>0&&(a=d.customRoutes).push.apply(a,n.map((function(a){return[t,addLeadingSlash(a)]})))},d=this;for(var c in l)o(c);n.forEach((function(t){0!==t.pagePath.indexOf("/")&&(t.pagePath="/"+t.pagePath)})),this.list=n,this.borderStyle=this.conf.borderStyle,this.backgroundColor=this.conf.backgroundColor,this.color=this.conf.color,this.selectedColor=this.conf.selectedColor}return e.prototype.getCurrentUrl=function(){var t=function(t,a){void 0===t&&(t="hash"),void 0===a&&(a="/");var n="hash"===t?location.hash.slice(1).split("?")[0]:location.pathname;return addLeadingSlash(stripBasename(n,a))}(this.conf.mode,this.conf.basename);return decodeURI("/"===t?this.homePage:t)},e.prototype.bindEvent=function(){s.ZP.eventCenter.on("__taroRouterChange",this.routerChangeHandler),s.ZP.eventCenter.on("__taroSwitchTab",this.switchTabHandler),s.ZP.eventCenter.on("__taroSetTabBarBadge",this.setTabBarBadgeHandler),s.ZP.eventCenter.on("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),s.ZP.eventCenter.on("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),s.ZP.eventCenter.on("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),s.ZP.eventCenter.on("__taroShowTabBar",this.showTabBarHandler),s.ZP.eventCenter.on("__taroHideTabBar",this.hideTabBarHandler),s.ZP.eventCenter.on("__taroSetTabBarStyle",this.setTabBarStyleHandler),s.ZP.eventCenter.on("__taroSetTabBarItem",this.setTabBarItemHandler)},e.prototype.removeEvent=function(){s.ZP.eventCenter.off("__taroRouterChange",this.routerChangeHandler),s.ZP.eventCenter.off("__taroSwitchTab",this.switchTabHandler),s.ZP.eventCenter.off("__taroSetTabBarBadge",this.setTabBarBadgeHandler),s.ZP.eventCenter.off("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),s.ZP.eventCenter.off("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),s.ZP.eventCenter.off("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),s.ZP.eventCenter.off("__taroShowTabBar",this.showTabBarHandler),s.ZP.eventCenter.off("__taroHideTabBar",this.hideTabBarHandler),s.ZP.eventCenter.off("__taroSetTabBarStyle",this.setTabBarStyleHandler),s.ZP.eventCenter.off("__taroSetTabBarItem",this.setTabBarItemHandler)},e.prototype.componentDidLoad=function(){this.tabbarPos=this.tabbar.nextElementSibling?"top":"bottom",this.bindEvent(),this.routerChangeHandler()},e.prototype.disconnectedCallback=function(){this.removeEvent()},e.prototype.render=function(){var t,a,n=this,s=this.tabbarPos,d=void 0===s?"bottom":s,h=this.status,b=(0,l.c)("weui-tabbar",((t={})["taro-tabbar__border-".concat(this.borderStyle||"black")]=!0,t)),u=-1===this.selectedIndex||1===h,f=2===h;return(0,i.h)(i.H,{"class":(0,l.c)(c,"".concat(c,"-").concat(d),(a={},a["taro-tabbar__tabbar-hide"]=u,a["taro-tabbar__tabbar-slideout"]=f,a))},(0,i.h)("div",{"class":b,"style":{"backgroundColor":this.backgroundColor||"","height":"inherit"}},this.list.map((function(t,a){var s,l,d=n.selectedIndex===a;return d?(s=n.selectedColor||"",l=t.selectedIconPath):(s=n.color||"",l=t.iconPath),(0,i.h)(TabbarItem,{"index":a,"onSelect":n.switchTab.bind(n),"isSelected":d,"textColor":s,"iconPath":l,"pagePath":t.pagePath,"text":t.text,"badgeText":t.badgeText,"showRedDot":t.showRedDot})}))))},Object.defineProperty(e.prototype,"tabbar",{"get":function(){return(0,i.g)(this)},"enumerable":!1,"configurable":!0}),e}();h.style="html,body{height:100%}#app{height:100%}.taro-tabbar__border-white::before{border-top-color:#fff !important}.taro-tabbar__container{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-direction:column;flex-direction:column;height:100%}.taro-tabbar__panel{overflow:auto;position:relative;-ms-flex:1;flex:1;-webkit-overflow-scrolling:auto}.taro-tabbar__tabbar{position:relative;width:100%;height:50px;-webkit-transition:bottom 0.2s, top 0.2s;transition:bottom 0.2s, top 0.2s}.taro-tabbar__tabbar-top{top:0}.taro-tabbar__tabbar-bottom{bottom:0;margin-bottom:constant(safe-area-inset-bottom);margin-bottom:env(safe-area-inset-bottom)}.taro-tabbar__tabbar-hide{display:none}.taro-tabbar__tabbar-slideout{top:-52px;-ms-flex:0 0;flex:0 0}.taro-tabbar__panel+.taro-tabbar__tabbar-slideout{top:auto;bottom:-52px}"}}]);