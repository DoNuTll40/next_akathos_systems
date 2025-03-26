"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6874],{6654:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=n(12115);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=u(e,r)),t&&(o.current=u(t,r))},[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6874:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let r=n(88229),o=n(95155),u=r._(n(12115)),l=n(82757),a=n(95227),i=n(69818),f=n(6654),s=n(69991),c=n(85929);n(43230);let p=n(24930);function d(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let h=u.default.forwardRef(function(e,t){let n,r;let{href:l,as:h,children:y,prefetch:g=null,passHref:m,replace:b,shallow:P,scroll:E,onClick:_,onMouseEnter:v,onTouchStart:O,legacyBehavior:j=!1,...C}=e;n=y,j&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let N=u.default.useContext(a.AppRouterContext),T=!1!==g,S=null===g?i.PrefetchKind.AUTO:i.PrefetchKind.FULL,{href:M,as:x}=u.default.useMemo(()=>{let e=d(l);return{href:e,as:h?d(h):e}},[l,h]);j&&(r=u.default.Children.only(n));let k=j?r&&"object"==typeof r&&r.ref:t,A=u.default.useCallback(e=>(T&&null!==N&&(0,p.mountLinkInstance)(e,M,N,S),()=>{(0,p.unmountLinkInstance)(e)}),[T,M,N,S]),w={ref:(0,f.useMergedRef)(A,k),onClick(e){j||"function"!=typeof _||_(e),j&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&!function(e,t,n,r,o,l,a){let{nodeName:i}=e.currentTarget;!("A"===i.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),u.default.startTransition(()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})}))}(e,N,M,x,b,P,E)},onMouseEnter(e){j||"function"!=typeof v||v(e),j&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&T&&(0,p.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){j||"function"!=typeof O||O(e),j&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&T&&(0,p.onNavigationIntent)(e.currentTarget)}};return(0,s.isAbsoluteUrl)(x)?w.href=x:j&&!m&&("a"!==r.type||"href"in r.props)||(w.href=(0,c.addBasePath)(x)),j?u.default.cloneElement(r,w):(0,o.jsx)("a",{...C,...w,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},69991:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return m},NormalizeError:function(){return y},PageNotFoundError:function(){return g},SP:function(){return p},ST:function(){return d},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return i},getLocationOrigin:function(){return l},getURL:function(){return a},isAbsoluteUrl:function(){return u},isResSent:function(){return f},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return s},stringifyError:function(){return P}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),u=0;u<r;u++)o[u]=arguments[u];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function a(){let{href:e}=window.location,t=l();return e.substring(t.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function s(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&f(n))return r;if(!r)throw Object.defineProperty(Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return r}let p="undefined"!=typeof performance,d=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function P(e){return JSON.stringify({message:e.message,stack:e.stack})}},78859:(e,t)=>{function n(e){let t={};for(let[n,r]of e.entries()){let e=t[n];void 0===e?t[n]=r:Array.isArray(e)?e.push(r):t[n]=[e,r]}return t}function r(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[n,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(n,r(e));else t.set(n,r(o));return t}function u(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(let t of n){for(let n of t.keys())e.delete(n);for(let[n,r]of t.entries())e.append(n,r)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},82757:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return a},urlObjectKeys:function(){return l}});let r=n(6966)._(n(78859)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:n}=e,u=e.protocol||"",l=e.pathname||"",a=e.hash||"",i=e.query||"",f=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?f=t+e.host:n&&(f=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(f+=":"+e.port)),i&&"object"==typeof i&&(i=String(r.urlQueryToSearchParams(i)));let s=e.search||i&&"?"+i||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==f?(f="//"+(f||""),l&&"/"!==l[0]&&(l="/"+l)):f||(f=""),a&&"#"!==a[0]&&(a="#"+a),s&&"?"!==s[0]&&(s="?"+s),""+u+f+(l=l.replace(/[?#]/g,encodeURIComponent))+(s=s.replace("#","%23"))+a}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(e){return u(e)}}}]);