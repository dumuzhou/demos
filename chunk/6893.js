/*! For license information please see 6893.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6893],{"4343":function(e,t,o){o.d(t,{"zx":function(){return a},"V1":function(){return c},"XZ":function(){return s},"cO":function(){return i},"l0":function(){return l},"JO":function(){return d},"Ee":function(){return u},"II":function(){return p},"__":function(){return f},"ub":function(){return h},"Gt":function(){return m},"C3":function(){return g},"_z":function(){return v},"cW":function(){return x},"Nf":function(){return b},"$o":function(){return y},"Ex":function(){return w},"Y8":function(){return j},"FX":function(){return L},"Ho":function(){return _},"pf":function(){return S},"iR":function(){return N},"tq":function(){return O},"t3":function(){return D},"rs":function(){return R},"xv":function(){return k},"gx":function(){return E},"nk":function(){return C},"G7":function(){return G},"kh":function(){return Z}});var n=o(6354);const helper_manipulatePropsFunction=(e,t={})=>{const{"dangerouslySetInnerHTML":o}=e;return Object.assign(Object.assign({},t),{"dangerouslySetInnerHTML":o})};var r=o(9900);const mergeRefs=(...e)=>t=>{e.forEach((e=>{((e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})(e,t)}))},camelToDashCase=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),getClassName=(e,t,o)=>{const n=t.className||t.class,r=o.className||o.class,a=arrayToMap(e),c=arrayToMap(n?n.split(" "):[]),s=arrayToMap(r?r.split(" "):[]),i=[];return a.forEach((e=>{c.has(e)?(i.push(e),c.delete(e)):s.has(e)||i.push(e)})),c.forEach((e=>i.push(e))),i.join(" ")},isCoveredByReact=e=>!1,syncEvent=(e,t,o)=>{const n=e.__events||(e.__events={}),r=n[t];r&&e.removeEventListener(t,r),e.addEventListener(t,n[t]=function handler(e){o&&o.call(this,e)})},arrayToMap=e=>{const t=new Map;return e.forEach((e=>t.set(e,e))),t},createComponent_createReactComponent=(e,t,o,a)=>{void 0!==a&&a();const c=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const s=class extends n.Component{"constructor"(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(e){((e,t,o={})=>{if(e instanceof Element){const n=getClassName(e.classList,t,o);""!==n&&(e.className=n),Object.keys(t).forEach((o=>{if("children"!==o&&"style"!==o&&"ref"!==o&&"class"!==o&&"className"!==o&&"forwardedRef"!==o)if(0===o.indexOf("on")&&o[2]===o[2].toUpperCase()){const n=o.substring(2).toLowerCase();isCoveredByReact(n)||syncEvent(e,n,t[o])}else e[o]=t[o],"string"==typeof t[o]&&e.setAttribute(camelToDashCase(o),t[o])}))}})(this.componentEl,this.props,e)}"render"(){const t=this.props,{"children":a,"forwardedRef":c,"style":s,"className":i,"ref":l}=t,d=(0,r._T)(t,["children","forwardedRef","style","className","ref"]);let u=Object.keys(d).reduce(((e,t)=>{const o=d[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const n=t.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(n)&&(e[t]=o)}else{const n=typeof o;"string"!==n&&"boolean"!==n&&"number"!==n||(e[camelToDashCase(t)]=o)}return e}),{});o&&(u=o(this.props,u));const p=Object.assign(Object.assign({},u),{"ref":mergeRefs(c,this.setComponentElRef),"style":s});return(0,n.createElement)(e,p,a)}static get"displayName"(){return c}};return t&&(s.contextType=t),((e,t)=>{const forwardRef=(t,o)=>n.createElement(e,Object.assign({},t,{"forwardedRef":o}));return forwardRef.displayName=t,n.forwardRef(forwardRef)})(s,c)},a=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction),c=createComponent_createReactComponent("taro-camera-core",void 0,helper_manipulatePropsFunction),s=createComponent_createReactComponent("taro-checkbox-core",void 0,helper_manipulatePropsFunction),i=createComponent_createReactComponent("taro-checkbox-group-core",void 0,helper_manipulatePropsFunction),l=createComponent_createReactComponent("taro-form-core",void 0,helper_manipulatePropsFunction),d=createComponent_createReactComponent("taro-icon-core",void 0,helper_manipulatePropsFunction),u=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction),p=createComponent_createReactComponent("taro-input-core",void 0,helper_manipulatePropsFunction),f=createComponent_createReactComponent("taro-label-core",void 0,helper_manipulatePropsFunction),h=createComponent_createReactComponent("taro-movable-area-core",void 0,helper_manipulatePropsFunction),m=createComponent_createReactComponent("taro-movable-view-core",void 0,helper_manipulatePropsFunction),g=createComponent_createReactComponent("taro-navigator-core",void 0,helper_manipulatePropsFunction),v=createComponent_createReactComponent("taro-page-container-core",void 0,helper_manipulatePropsFunction),x=createComponent_createReactComponent("taro-picker-core",void 0,helper_manipulatePropsFunction),y=createComponent_createReactComponent("taro-picker-view-column-core",void 0,helper_manipulatePropsFunction),b=createComponent_createReactComponent("taro-picker-view-core",void 0,helper_manipulatePropsFunction),w=createComponent_createReactComponent("taro-progress-core",void 0,helper_manipulatePropsFunction),j=createComponent_createReactComponent("taro-radio-core",void 0,helper_manipulatePropsFunction),L=createComponent_createReactComponent("taro-radio-group-core",void 0,helper_manipulatePropsFunction),_=createComponent_createReactComponent("taro-rich-text-core",void 0,helper_manipulatePropsFunction),S=createComponent_createReactComponent("taro-scroll-view-core",void 0,helper_manipulatePropsFunction),N=createComponent_createReactComponent("taro-slider-core",void 0,helper_manipulatePropsFunction),O=createComponent_createReactComponent("taro-swiper-core",void 0,helper_manipulatePropsFunction),D=createComponent_createReactComponent("taro-swiper-item-core",void 0,helper_manipulatePropsFunction),R=createComponent_createReactComponent("taro-switch-core",void 0,helper_manipulatePropsFunction),k=createComponent_createReactComponent("taro-text-core",void 0,helper_manipulatePropsFunction),E=createComponent_createReactComponent("taro-textarea-core",void 0,helper_manipulatePropsFunction),C=createComponent_createReactComponent("taro-video-core",void 0,helper_manipulatePropsFunction),G=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction),Z=createComponent_createReactComponent("taro-web-view-core",void 0,helper_manipulatePropsFunction)},"8724":function(e,t,o){var n=o(6354),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,o){var n,a={},l=null,d=null;for(n in void 0!==o&&(l=""+o),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,n)&&!i.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{"$$typeof":r,"type":e,"key":l,"ref":d,"props":a,"_owner":s.current}}t.Fragment=a,t.jsx=q,t.jsxs=q},"4869":function(e,t,o){e.exports=o(8724)},"9900":function(e,t,o){o.d(t,{"_T":function(){return __rest}});function __rest(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}Object.create;Object.create},"4987":function(e,t,o){var n=o(4343),r=o(4869);t.Z=function Head(e){var t=e.title,o=e.desc;return(0,r.jsxs)(n.G7,{"className":"page-head","children":[(0,r.jsx)(n.G7,{"className":"page-head-title","children":t}),(0,r.jsx)(n.G7,{"className":"page-head-line"}),!!o&&(0,r.jsx)(n.xv,{"className":"page-head-desc","children":o})]})}},"8340":function(e,t,o){var n=o(4343),r=o(4869);t.Z=function Log(e){var t=e.logs;return(0,r.jsx)(n.G7,{"className":"log-container","children":t.map((function(e,t){return(0,r.jsxs)(n.G7,{"className":"log-row","children":[(0,r.jsx)(n.xv,{"className":"log-time","children":e.time}),(0,r.jsx)(n.xv,{"className":"log-text","children":e.text})]},t)}))})}},"6893":function(e,t,o){o.r(t),o.d(t,{"default":function(){return h}});var n=o(4570),r=o(1323),a=o(4194),c=o(5483),s=o(1603),i=o(6354),l=o(4343),d=o(9717),u=o(4987),p=o(8340),f=o(4869),h=function(e){(0,c.Z)(LifeCycle,e);var t=(0,s.Z)(LifeCycle);function LifeCycle(e){var o;return(0,r.Z)(this,LifeCycle),(o=t.call(this,e)).state={"didShowLog":[],"didHideLog":[],"reachBottomLog":[],"pageScrollLog":[],"pullDownRefreshLog":[]},o}return(0,a.Z)(LifeCycle,[{"key":"componentDidShow","value":function componentDidShow(){var e={"time":(new Date).toLocaleTimeString(),"text":"componentDidShow called."};this.setState({"didShowLog":[].concat((0,n.Z)(this.state.didShowLog),[e])})}},{"key":"componentDidHide","value":function componentDidHide(){var e={"time":(new Date).toLocaleTimeString(),"text":"componentDidHide called."};this.setState({"didHideLog":[].concat((0,n.Z)(this.state.didHideLog),[e])})}},{"key":"onPullDownRefresh","value":function onPullDownRefresh(){var e={"time":(new Date).toLocaleTimeString(),"text":"onPullDownRefresh called."};this.setState({"pullDownRefreshLog":[].concat((0,n.Z)(this.state.pullDownRefreshLog),[e])})}},{"key":"onReachBottom","value":function onReachBottom(){var e={"time":(new Date).toLocaleTimeString(),"text":"onReachBottom called."};this.setState({"reachBottomLog":[].concat((0,n.Z)(this.state.reachBottomLog),[e])})}},{"key":"onPageScroll","value":function onPageScroll(e){var t={"time":(new Date).toLocaleTimeString(),"text":"onPageScroll scrollTop:".concat(e.scrollTop.toFixed(0),".")};this.setState({"pageScrollLog":[].concat((0,n.Z)(this.state.pageScrollLog.slice(-9)),[t])})}},{"key":"handleJump","value":function handleJump(){(0,d.T8)({"url":"/pages/global/pages/lifecycle/page"})}},{"key":"render","value":function render(){var e=this.state,t=e.didShowLog,o=e.didHideLog,n=e.reachBottomLog,r=e.pageScrollLog,a=e.pullDownRefreshLog;return(0,f.jsxs)(l.G7,{"className":"global-page","children":[(0,f.jsx)(l.G7,{"className":"global-page__header","children":(0,f.jsx)(u.Z,{"title":"生命周期"})}),(0,f.jsxs)(l.G7,{"className":"global-page__body","children":[(0,f.jsxs)(l.G7,{"className":"global-page__body-example example","children":[(0,f.jsx)(l.G7,{"className":"example-header","children":"componentDidShow (".concat(t.length,")")}),(0,f.jsx)(p.Z,{"logs":t})]}),(0,f.jsxs)(l.G7,{"className":"global-page__body-example example","children":[(0,f.jsx)(l.G7,{"className":"example-header","children":"componentDidHide (".concat(o.length,")")}),(0,f.jsx)(p.Z,{"logs":o})]}),(0,f.jsxs)(l.G7,{"className":"global-page__body-example example","children":[(0,f.jsx)(l.G7,{"className":"example-header","children":"onPullDownRefresh (".concat(a.length,")")}),(0,f.jsx)(p.Z,{"logs":a})]}),(0,f.jsxs)(l.G7,{"className":"global-page__body-example example","children":[(0,f.jsx)(l.G7,{"className":"example-header","children":"onReachBottom (".concat(n.length,")")}),(0,f.jsx)(p.Z,{"logs":n})]}),(0,f.jsxs)(l.G7,{"className":"global-page__body-example example","children":[(0,f.jsx)(l.G7,{"className":"example-header","children":"onPageScroll (".concat(r.length,")")}),(0,f.jsx)(p.Z,{"logs":r})]}),(0,f.jsx)(l.zx,{"className":"global-page-btn","type":"primary","onClick":this.handleJump.bind(this),"children":"跳转"})]})]})}}]),LifeCycle}(i.Component)}}]);