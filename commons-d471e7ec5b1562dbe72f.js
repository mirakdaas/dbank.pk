(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var l,s,c,u;if(Array.isArray(e)){if((l=e.length)!=a.length)return!1;for(s=l;0!=s--;)if(!i(e[s],a[s]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],a.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((l=e.length)!=a.length)return!1;for(s=l;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((l=(c=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=l;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,c[s]))return!1;if(t&&e instanceof Element)return!1;for(s=l;0!=s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!e.$$typeof)&&!i(e[c[s]],a[c[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function s(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var n,o=e.attr,i=e.size,s=e.title,c=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,c=[];function u(){s=e(c.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){c.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",l),p}}},4388:function(e,t,n){var r,o,i;"undefined"!=typeof window?window:n.g,o=[],void 0===(i="function"==typeof(r=function(){return function e(t,n){"use strict";var r=Object.create(e.prototype),o=0,i=0,a=0,l=0,s=[],c=!0,u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},p=null,d=!1;try{var f=Object.defineProperty({},"passive",{get:function(){d=!0}});window.addEventListener("testPassive",null,f),window.removeEventListener("testPassive",null,f)}catch(k){}var m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,h=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var n in t)if(void 0!==e.style[t[n]+"Transform"])return t[n]+"Transform"}return"transform"}();function y(){if(3===r.options.breakpoints.length&&Array.isArray(r.options.breakpoints)){var e,t=!0,n=!0;if(r.options.breakpoints.forEach((function(r){"number"!=typeof r&&(n=!1),null!==e&&r<e&&(t=!1),e=r})),t&&n)return}r.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}r.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},n&&Object.keys(n).forEach((function(e){r.options[e]=n[e]})),n&&n.breakpoints&&y(),t||(t=".rellax");var v="string"==typeof t?document.querySelectorAll(t):[t];if(v.length>0){if(r.elems=v,r.options.wrapper&&!r.options.wrapper.nodeType){var w=document.querySelector(r.options.wrapper);if(!w)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");r.options.wrapper=w}var b,g=function(e){var t=r.options.breakpoints;return e<t[0]?"xs":e>=t[0]&&e<t[1]?"sm":e>=t[1]&&e<t[2]?"md":"lg"},T=function(){for(var e=0;e<r.elems.length;e++){var t=x(r.elems[e]);s.push(t)}},E=function e(){for(var t=0;t<s.length;t++)r.elems[t].style.cssText=s[t].style;s=[],i=window.innerHeight,l=window.innerWidth,b=g(l),C(),T(),L(),c&&(window.addEventListener("resize",e),c=!1,S())},x=function(e){var t,n=e.getAttribute("data-rellax-percentage"),o=e.getAttribute("data-rellax-speed"),a=e.getAttribute("data-rellax-xs-speed"),s=e.getAttribute("data-rellax-mobile-speed"),c=e.getAttribute("data-rellax-tablet-speed"),u=e.getAttribute("data-rellax-desktop-speed"),p=e.getAttribute("data-rellax-vertical-speed"),d=e.getAttribute("data-rellax-horizontal-speed"),f=e.getAttribute("data-rellax-vertical-scroll-axis"),m=e.getAttribute("data-rellax-horizontal-scroll-axis"),h=e.getAttribute("data-rellax-zindex")||0,y=e.getAttribute("data-rellax-min"),v=e.getAttribute("data-rellax-max"),w=e.getAttribute("data-rellax-min-x"),g=e.getAttribute("data-rellax-max-x"),T=e.getAttribute("data-rellax-min-y"),E=e.getAttribute("data-rellax-max-y"),x=!0;a||s||c||u?t={xs:a,sm:s,md:c,lg:u}:x=!1;var C=r.options.wrapper?r.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;r.options.relativeToWrapper&&(C=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-r.options.wrapper.offsetTop);var O=r.options.vertical&&(n||r.options.center)?C:0,S=r.options.horizontal&&(n||r.options.center)?r.options.wrapper?r.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,L=O+e.getBoundingClientRect().top,k=e.clientHeight||e.offsetHeight||e.scrollHeight,j=S+e.getBoundingClientRect().left,P=e.clientWidth||e.offsetWidth||e.scrollWidth,N=n||(O-L+i)/(k+i),M=n||(S-j+l)/(P+l);r.options.center&&(M=.5,N=.5);var z=x&&null!==t[b]?Number(t[b]):o||r.options.speed,H=p||r.options.verticalSpeed,I=d||r.options.horizontalSpeed,R=f||r.options.verticalScrollAxis,Y=m||r.options.horizontalScrollAxis,_=A(M,N,z,H,I),q=e.style.cssText,V="",F=/transform\s*:/i.exec(q);if(F){var B=F.index,D=q.slice(B),W=D.indexOf(";");V=W?" "+D.slice(11,W).replace(/\s/g,""):" "+D.slice(11).replace(/\s/g,"")}return{baseX:_.x,baseY:_.y,top:L,left:j,height:k,width:P,speed:z,verticalSpeed:H,horizontalSpeed:I,verticalScrollAxis:R,horizontalScrollAxis:Y,style:q,transform:V,zindex:h,min:y,max:v,minX:w,maxX:g,minY:T,maxY:E}},C=function(){var e=o,t=a;if(o=r.options.wrapper?r.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,a=r.options.wrapper?r.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,r.options.relativeToWrapper){var n=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;o=n-r.options.wrapper.offsetTop}return!(e==o||!r.options.vertical)||!(t==a||!r.options.horizontal)},A=function(e,t,n,o,i){var a={},l=(i||n)*(100*(1-e)),s=(o||n)*(100*(1-t));return a.x=r.options.round?Math.round(l):Math.round(100*l)/100,a.y=r.options.round?Math.round(s):Math.round(100*s)/100,a},O=function e(){window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e),(r.options.wrapper?r.options.wrapper:window).removeEventListener("scroll",e),(r.options.wrapper?r.options.wrapper:document).removeEventListener("touchmove",e),p=u(S)},S=function e(){C()&&!1===c?(L(),p=u(e)):(p=null,window.addEventListener("resize",O),window.addEventListener("orientationchange",O),(r.options.wrapper?r.options.wrapper:window).addEventListener("scroll",O,!!d&&{passive:!0}),(r.options.wrapper?r.options.wrapper:document).addEventListener("touchmove",O,!!d&&{passive:!0}))},L=function(){for(var e,t=0;t<r.elems.length;t++){var n=s[t].verticalScrollAxis.toLowerCase(),c=s[t].horizontalScrollAxis.toLowerCase(),u=-1!=n.indexOf("x")?o:0,p=-1!=n.indexOf("y")?o:0,d=-1!=c.indexOf("x")?a:0,f=(p+(-1!=c.indexOf("y")?a:0)-s[t].top+i)/(s[t].height+i),m=(u+d-s[t].left+l)/(s[t].width+l),y=(e=A(m,f,s[t].speed,s[t].verticalSpeed,s[t].horizontalSpeed)).y-s[t].baseY,v=e.x-s[t].baseX;null!==s[t].min&&(r.options.vertical&&!r.options.horizontal&&(y=y<=s[t].min?s[t].min:y),r.options.horizontal&&!r.options.vertical&&(v=v<=s[t].min?s[t].min:v)),null!=s[t].minY&&(y=y<=s[t].minY?s[t].minY:y),null!=s[t].minX&&(v=v<=s[t].minX?s[t].minX:v),null!==s[t].max&&(r.options.vertical&&!r.options.horizontal&&(y=y>=s[t].max?s[t].max:y),r.options.horizontal&&!r.options.vertical&&(v=v>=s[t].max?s[t].max:v)),null!=s[t].maxY&&(y=y>=s[t].maxY?s[t].maxY:y),null!=s[t].maxX&&(v=v>=s[t].maxX?s[t].maxX:v);var w=s[t].zindex,b="translate3d("+(r.options.horizontal?v:"0")+"px,"+(r.options.vertical?y:"0")+"px,"+w+"px) "+s[t].transform;r.elems[t].style[h]=b}r.options.callback(e)};return r.destroy=function(){for(var e=0;e<r.elems.length;e++)r.elems[e].style.cssText=s[e].style;c||(window.removeEventListener("resize",E),c=!0),m(p),p=null},E(),r.refresh=E,r}console.warn("Rellax: The elements you're trying to select don't exist.")}})?r.apply(t,o):r)||(e.exports=i)},1977:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),o=n(1597),i=n(4388),a=n.n(i),l=function(e){e.siteTitle;var t=(0,r.useState)("white"),n=t[0],o=t[1];return(0,r.useEffect)((function(){new(a())(".rellax");window.pageYOffset>0&&o("primary");var e=function(){return window.pageYOffset>0?o("primary"):o("white")};return window.removeEventListener("scroll",e),window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}}),[n]),r.createElement("header",{className:"fixed-top header-style-"+n},r.createElement("nav",{style:{position:"relative",zIndex:1}},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement("a",{href:"#",className:"d-inline-block"},r.createElement("svg",{height:"34",viewBox:"0 0 138 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M34.1003 0.661987L31.8489 4.46896L31.5549 4.97123C37.2826 5.98608 41.6383 10.9908 41.6383 17C41.6383 23.7408 36.1479 29.2297 29.399 29.2297H17.1958L17.0102 29.5388L14.3643 34H29.399C38.8015 34 46.4169 26.3861 46.4169 16.9974C46.4169 9.23668 41.2154 2.69168 34.1003 0.661987Z"}),r.createElement("path",{d:"M5.95459 22.3911L16.3835 4.77288L16.564 4.46894L19.2099 0H14.1141L11.4682 4.46894L11.2903 4.77288L5.95459 13.788L4.43306 16.3586L1.48027 21.3453L0 23.8464H5.08809L5.95459 22.3911Z"}),r.createElement("path",{d:"M26.7531 4.46894L29.4016 0H24.3058L21.6598 4.46894L21.4793 4.77288L7.00676 29.2271L6.82108 29.5388L4.17517 34H9.271L11.9169 29.5388L12.1026 29.2271L26.5752 4.77288L26.7531 4.46894Z"}),r.createElement("path",{d:"M53.3128 32.6272H48.7792V0.935059H53.3128V15.0451C54.5455 12.8917 57.2301 11.6605 60.2216 11.6605C63.2131 11.6605 65.5031 12.6264 67.4837 14.6046C69.4642 16.5828 70.4751 19.1766 70.4751 22.386C70.4751 25.5954 69.4642 28.1016 67.4398 30.0798C65.4593 32.0579 63.0377 33.0676 60.1777 33.0676C57.3178 33.0676 54.5455 31.7926 53.3128 29.6393V32.6272ZM59.6517 28.6708C61.3692 28.6708 62.8649 28.0552 64.0512 26.8678C65.24 25.6804 65.8564 24.1426 65.8564 22.2958C65.8564 18.6022 63.1718 16.0548 59.6517 16.0548C57.978 16.0548 56.5261 16.6266 55.2495 17.7676C53.973 18.8675 53.3567 20.4052 53.3567 22.2958C53.3567 26.1646 56.1289 28.6708 59.6491 28.6708H59.6517Z"}),r.createElement("path",{d:"M89.4994 32.6272V29.6831C88.2229 31.7926 85.2752 33.0676 82.5906 33.0676C79.7307 33.0676 77.2653 32.0579 75.197 30.0798C73.1726 28.1016 72.1617 25.5078 72.1617 22.3422C72.1617 19.1766 73.1726 16.6266 75.197 14.651C77.2653 12.6728 79.7307 11.6605 82.5906 11.6605C85.2752 11.6605 88.1352 12.8479 89.4994 15.0013V12.101H93.9892V32.6272H89.4994ZM87.5188 17.7702C86.2423 16.6266 84.7904 16.0573 83.1167 16.0573C81.3579 16.0573 79.8596 16.6292 78.6295 17.8166C77.4406 18.9602 76.8243 20.4542 76.8243 22.301C76.8243 24.1478 77.4406 25.6855 78.6295 26.8729C79.8622 28.0604 81.3579 28.676 83.1167 28.676C86.6369 28.676 89.4556 26.1698 89.4556 22.301C89.4556 20.4104 88.7954 18.8726 87.5188 17.7728V17.7702Z"}),r.createElement("path",{d:"M101.777 32.6272H97.2437V12.0984H101.777V15.1764C102.879 12.9355 105.607 11.6605 108.07 11.6605C113.042 11.6605 115.904 14.8699 115.904 20.6731V32.6298H111.371V21.2011C111.371 17.9917 109.697 16.1011 107.056 16.1011C104.065 16.1011 101.775 17.8604 101.775 21.5952V32.6298L101.777 32.6272Z"}),r.createElement("path",{d:"M127.259 21.0234L136.017 12.0984H129.944L123.429 18.8701V12.0984H118.94V32.6246H123.429V23.0866L132.187 32.6246H137.997L127.256 21.0208L127.259 21.0234Z"}))))))))};l.defaultProps={siteTitle:""};var s=l,c=n(1852);var u=function(){return r.createElement("footer",{style:{backgroundColor:"#ededed"}},r.createElement("div",{className:"container pb-5 pt-3 pt-md-5"},r.createElement("div",{className:"row align-items-center justify-content-between"},r.createElement("div",{className:"col-12 col-md-auto order-md-1"},r.createElement("div",{className:"d-flex"},r.createElement("a",{target:"_blank",href:"http://www.twitter.com/dbankGlobal",className:"text-dark me-3 me-md-0 ms-md-3 hover-scale"},r.createElement(c.meP,null)),r.createElement("a",{target:"_blank",href:"http://www.instagram.com/dbankglobal",className:"text-dark me-3 me-md-0 ms-md-3 hover-scale"},r.createElement(c.Vs6,null)),r.createElement("a",{target:"_blank",href:"http://www.linkedin.com/company/dbank",className:"text-dark me-3 me-md-0 ms-md-3 hover-scale"},r.createElement(c.NQh,null)))),r.createElement("div",{className:"col-12 col-md-auto order-md-0"},r.createElement("p",{className:"mt-3 mt-md-0 m-0",style:{fontSize:12}},"Copyrights 2022 | Din Global. All Rights Reserved.")))),r.createElement("div",{className:"bg-primary p-2"}))},p=function(e){var t,n=e.children,i=(0,o.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(s,{siteTitle:(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("main",null,n),r.createElement(u,null))}},262:function(e,t,n){"use strict";n.d(t,{Z:function(){return we}});var r,o,i,a,l=n(7294),s=n(5697),c=n.n(s),u=n(4839),p=n.n(u),d=n(2993),f=n.n(d),m=n(6494),h=n.n(m),y="bodyAttributes",v="htmlAttributes",w="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",E="href",x="http-equiv",C="innerHTML",A="itemprop",O="name",S="property",L="rel",k="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",M="defer",z="encodeSpecialCharacters",H="onChangeClientState",I="titleTemplate",R=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),Y=[b.NOSCRIPT,b.SCRIPT,b.STYLE],_="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=$(e,b.TITLE),n=$(e,I);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,N);return t||r||void 0},U=function(e){return $(e,H)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var l=i[a],s=l.toLowerCase();-1===t.indexOf(s)||n===L&&"canonical"===e[n].toLowerCase()||s===L&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(l)||l!==C&&l!==T&&l!==A||(n=l)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var l=i[a],s=h()({},r[l],o[l]);r[l]=s}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},J=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){J(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:n.g.requestAnimationFrame||J,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,p=e.title,d=e.titleAttributes;se(b.BODY,r),se(b.HTML,o),le(p,d);var f={baseTag:ce(b.BASE,n),linkTags:ce(b.LINK,i),metaTags:ce(b.META,a),noscriptTags:ce(b.NOSCRIPT,l),scriptTags:ce(b.SCRIPT,c),styleTags:ce(b.STYLE,u)},m={},h={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=f[e].oldTags)})),t&&t(),s(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(b.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(_),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),l=0;l<a.length;l++){var s=a[l],c=t[s]||"";n.getAttribute(s)!==c&&n.setAttribute(s,c),-1===o.indexOf(s)&&o.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(_):n.getAttribute(_)!==a.join(",")&&n.setAttribute(_,a.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(_,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[_]=!0,o=pe(n,r),[l.createElement(b.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+X(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case v:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[_]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),l.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+X(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,s=e.scriptTags,c=e.styleTags,u=e.title,p=void 0===u?"":u,d=e.titleAttributes;return{base:de(b.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(v,o,r),link:de(b.LINK,i,r),meta:de(b.META,a,r),noscript:de(b.NOSCRIPT,l,r),script:de(b.SCRIPT,s,r),style:de(b.STYLE,c,r),title:de(b.TITLE,{title:p,titleAttributes:d},r)}},me=p()((function(e){return{baseTag:Q([E,j],e),bodyAttributes:K(y,e),defer:$(e,M),encode:$(e,z),htmlAttributes:K(v,e),linkTags:G(b.LINK,[L,E],e),metaTags:G(b.META,[O,g,x,S,A],e),noscriptTags:G(b.NOSCRIPT,[C],e),onChangeClientState:U(e),scriptTags:G(b.SCRIPT,[k,C],e),styleTags:G(b.STYLE,[T],e),title:Z(e),titleAttributes:K(w,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),fe)((function(){return null})),he=(o=me,a=i=function(e){function t(){return V(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TITLE:return B({},o,((t={})[r.type]=a,t.titleAttributes=B({},i),t));case b.BODY:return B({},o,{bodyAttributes:B({},i)});case b.HTML:return B({},o,{htmlAttributes:B({},i)})}return B({},o,((n={})[r.type]=B({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(D(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=D(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(l.Component),i.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ye=n(1597);function ve(e){var t,n,r=e.description,o=e.lang,i=e.meta,a=e.title,s=(0,ye.useStaticQuery)("1725656716").site,c=r||s.siteMetadata.description,u=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(he,{htmlAttributes:{lang:o},title:a,titleTemplate:u?"%s / "+u:null,meta:[{name:"description",content:c},{property:"og:title",content:a},{property:"og:description",content:c},{property:"og:image",content:s.siteMetadata.testUrl+"banner.png"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:a},{name:"twitter:description",content:c}].concat(i)})}ve.defaultProps={lang:"en",meta:[],description:""};var we=ve}}]);
//# sourceMappingURL=commons-d471e7ec5b1562dbe72f.js.map