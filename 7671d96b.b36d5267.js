/*! For license information please see 7671d96b.b36d5267.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{256:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(9),i=n(0),a=n.n(i),c=n(257),u=n(260),s=(n(258),n(261),n(5)),l=n(273),p=n(337),f=Object(p.a)(),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){return a.a.createElement(l.a,null,f.name)},t}(i.Component);n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return w}));var d={id:"Welcome",title:"TouchGFX Documentation",sidebar_label:"Welcome"},m={id:"Introduction/Welcome",title:"TouchGFX Documentation",description:"import Link from '@docusaurus/Link';\r",source:"@site/docs\\Introduction\\Welcome.mdx",permalink:"/docs/Introduction/Welcome",sidebar_label:"Welcome",sidebar:"docs",next:{title:"What is TouchGFX?",permalink:"/docs/Introduction/WhatIsTouchGFX"}},b=[{value:"About this documentation",id:"about-this-documentation",children:[{value:"Target User",id:"target-user",children:[]}]}],g={rightToc:b},v="wrapper";function w(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(v,Object(r.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(h,{mdxType:"InternetExplorerWarning"}),Object(c.b)("h1",{style:{color:"red"}},"THIS IS A TEST SITE AND NOT THE FINAL VERSION!!!"),Object(c.b)("p",null,"Welcome to the official documentation of TouchGFX!"),Object(c.b)("p",null,"If you are new to this documentation and/or TouchGFX, we recommend that you read on to get an overview of what this documentation has to offer.\nThe table of contents in the sidebar should let you easily access the documentation for your topic of interest.\nYou can also use the search function in the top right corner."),Object(c.b)("h2",{id:"about-this-documentation"},"About this documentation"),Object(c.b)("p",null,"The main documentation for the site is organized into the following sections:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/Introduction/WhatIsTouchGFX"}),Object(c.b)("strong",{parentName:"a"},"Introduction"))," - read surface-level information on TouchGFX and installation guide."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/BasicConcepts/EmbeddedGraphics"}),Object(c.b)("strong",{parentName:"a"},"Basic Concepts"))," - introduction to key graphics concepts."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/Development/DevelopmentIntroduction"}),Object(c.b)("strong",{parentName:"a"},"Development"))," - how to develop a TouchGFX application including, structure, workflow and tools."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/Tutorials/Tutorial_01"}),Object(c.b)("strong",{parentName:"a"},"Tutorials"))," - a collection of TouchGFX tutorials.")),Object(c.b)("h3",{id:"target-user"},"Target User"),Object(c.b)("p",null,"The TouchGFX documentation is targeting software developers with a basic skill-set within C++ and embedded GUI development on STM32. Newcomers to Embedded GUI Development are supported in the section Basic Concepts, while step by step guides and tutorials support everyone towards a smooth learning in TouchGFX development as well."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"We would really like to improve this documentation in any way possible."),"\n",Object(c.b)("em",{parentName:"p"},"If you don\u2019t understand something, or cannot find what you are looking for in the docs, help us make the documentation better by letting us know in the ",Object(c.b)(u.a,{to:"https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx",target:"_blank",mdxType:"Link"},"forum"),"!")))}w.isMDXComponent=!0},261:function(e,t,n){var r=n(24).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(11)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},273:function(e,t,n){"use strict";var r=n(5),o=n(0),i=n.n(o),a=n(268),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(a.a,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:c},this.props.children)},t}(o.Component);t.a=u},283:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,s=[],l=!1,p=-1;function f(){l&&u&&(l=!1,u.length?s=u.concat(s):p=-1,s.length&&h())}function h(){if(!l){var e=c(f);l=!0;for(var t=s.length;t;){for(u=s,s=[];++p<t;)u&&u[p].run();p=-1,t=s.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new d(e,t)),1!==s.length||l||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},337:function(e,t,n){"use strict";(function(e){var n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r=[["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)$/],["edge",/Edge\/([0-9\._]+)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["safari",/Version\/([0-9\._]+).*Safari/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/]],o=["Windows Phone","Android","CentOS",{name:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],i={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"},a=new RegExp(["(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|","compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|","midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)","\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|","wap|windows ce|xda|xiino"].join(""),"i"),c=new RegExp(["1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|","ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|","avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|","cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|","ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|","g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|","hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|","i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|","kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])","|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|","mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|","n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|","op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|","po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|","raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|","se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|k\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|","so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|","tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|","veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|","w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-"].join(""),"i"),u=function(){function e(e,t,n){this.navigator=t,this.process=n,this.userAgent=e||(this.navigator?t.userAgent||t.vendor:"")}return e.prototype.detect=function(){if(this.process&&!this.userAgent){var e=this.process.version.slice(1).split(".").slice(0,3),t=Array.prototype.slice.call(e,1).join("")||"0";return{name:"node",version:e.join("."),versionNumber:parseFloat(e[0]+"."+t),mobile:!1,os:this.process.platform}}return this.userAgent||this.handleMissingError(),n({},this.checkBrowser(),this.checkMobile(),this.checkOs())},e.prototype.checkBrowser=function(){var e=this;return r.filter((function(t){return t[1].test(e.userAgent)})).map((function(t){var n=t[1].exec(e.userAgent),r=n&&n[1].split(/[._]/).slice(0,3),o=Array.prototype.slice.call(r,1).join("")||"0";return r&&r.length<3&&Array.prototype.push.apply(r,1===r.length?[0,0]:[0]),{name:String(t[0]),version:r.join("."),versionNumber:Number(r[0]+"."+o)}})).shift()},e.prototype.checkMobile=function(){var e=this.userAgent.substr(0,4);return{mobile:a.test(this.userAgent)||c.test(e)}},e.prototype.checkOs=function(){var e=this;return o.map((function(t){var n=t.name||t,r=e.getOsPattern(t);return{name:n,pattern:r,value:RegExp("\\b"+r.replace(/([ -])(?!$)/g,"$1?")+"(?:x?[\\d._]+|[ \\w.]*)","i").exec(e.userAgent)}})).filter((function(e){return e.value})).map((function(e){var t,n=e.value[0]||"";return e.pattern&&e.name&&/^Win/i.test(n)&&!/^Windows Phone /i.test(n)&&(t=i[n.replace(/[^\d.]/g,"")])&&(n="Windows "+t),e.pattern&&e.name&&(n=n.replace(RegExp(e.pattern,"i"),e.name)),n=n.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0].trim(),{os:n=/^(?:webOS|i(?:OS|P))/.test(n)?n:n.charAt(0).toUpperCase()+n.slice(1)}})).shift()},e.prototype.getOsPattern=function(e){var t=e;return("string"==typeof e?e:void 0)||t.pattern||t.name},e.prototype.handleMissingError=function(){throw new Error("Please give user-agent.\n> browser(navigator.userAgent or res.headers['user-agent']).")},e}();function s(e,t){return e(t={exports:{}},t.exports),t.exports}var l=s((function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)})),p=s((function(e){var t=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=t)})),f=(p.version,function(e){return"object"==typeof e?null!==e:"function"==typeof e}),h=function(e){if(!f(e))throw TypeError(e+" is not an object!");return e},d=function(e){try{return!!e()}catch(t){return!0}},m=!d((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),b=l.document,g=f(b)&&f(b.createElement),v=!m&&!d((function(){return 7!=Object.defineProperty((e="div",g?b.createElement(e):{}),"a",{get:function(){return 7}}).a;var e})),w=Object.defineProperty,y={f:m?Object.defineProperty:function(e,t,n){if(h(e),t=function(e,t){if(!f(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!f(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!f(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!f(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}(t,!0),h(n),v)try{return w(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},O=m?function(e,t,n){return y.f(e,t,function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}(1,n))}:function(e,t,n){return e[t]=n,e},j={}.hasOwnProperty,T=function(e,t){return j.call(e,t)},S=0,k=Math.random(),x=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++S+k).toString(36))},E=s((function(e){var t=x("src"),n=Function.toString,r=(""+n).split("toString");p.inspectSource=function(e){return n.call(e)},(e.exports=function(e,n,o,i){var a="function"==typeof o;a&&(T(o,"name")||O(o,"name",n)),e[n]!==o&&(a&&(T(o,t)||O(o,t,e[n]?""+e[n]:r.join(String(n)))),e===l?e[n]=o:i?e[n]?e[n]=o:O(e,n,o):(delete e[n],O(e,n,o)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[t]||n.call(this)}))})),A=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!")}(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},_=function(e,t,n){var r,o,i,a,c=e&_.F,u=e&_.G,s=e&_.S,f=e&_.P,h=e&_.B,d=u?l:s?l[t]||(l[t]={}):(l[t]||{}).prototype,m=u?p:p[t]||(p[t]={}),b=m.prototype||(m.prototype={});for(r in u&&(n=t),n)i=((o=!c&&d&&void 0!==d[r])?d:n)[r],a=h&&o?A(i,l):f&&"function"==typeof i?A(Function.call,i):i,d&&E(d,r,i,e&_.U),m[r]!=i&&O(m,r,a),f&&b[r]!=i&&(b[r]=i)};l.core=p,_.F=1,_.G=2,_.S=4,_.P=8,_.B=16,_.W=32,_.U=64,_.R=128;var M=_,P={}.toString,F=function(e){return P.call(e).slice(8,-1)},N=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==F(e)?e.split(""):Object(e)},C=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},I=Math.ceil,W=Math.floor,X=Math.min,G=function(e){return e>0?X(function(e){return isNaN(e=+e)?0:(e>0?W:I)(e)}(e),9007199254740991):0},z=Array.isArray||function(e){return"Array"==F(e)},$=s((function(e){var t=l["__core-js_shared__"]||(l["__core-js_shared__"]={});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:p.version,mode:"global",copyright:"\xa9 2018 Denis Pushkarev (zloirock.ru)"})})),B=s((function(e){var t=$("wks"),n=l.Symbol,r="function"==typeof n;(e.exports=function(e){return t[e]||(t[e]=r&&n[e]||(r?n:x)("Symbol."+e))}).store=t}))("species"),L=function(e,t){return new(function(e){var t;return z(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!z(t.prototype)||(t=void 0),f(t)&&null===(t=t[B])&&(t=void 0)),void 0===t?Array:t}(e))(t)},D=function(e,t){var n=1==e,r=2==e,o=3==e,i=4==e,a=6==e,c=5==e||a,u=t||L;return function(t,s,l){for(var p,f,h=Object(C(t)),d=N(h),m=A(s,l,3),b=G(d.length),g=0,v=n?u(t,b):r?u(t,0):void 0;b>g;g++)if((c||g in d)&&(f=m(p=d[g],g,h),e))if(n)v[g]=f;else if(f)switch(e){case 3:return!0;case 5:return p;case 6:return g;case 2:v.push(p)}else if(i)return!1;return a?-1:o||i?i:v}},R=function(e,t){return!!e&&d((function(){t?e.call(null,(function(){}),1):e.call(null)}))},U=D(2);M(M.P+M.F*!R([].filter,!0),"Array",{filter:function(e){return U(this,e,arguments[1])}});p.Array.filter;var H=D(1);M(M.P+M.F*!R([].map,!0),"Array",{map:function(e){return H(this,e,arguments[1])}});p.Array.map;var V="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",q="["+V+"]",J=RegExp("^"+q+q+"*"),Y=RegExp(q+q+"*$"),K=function(e,t,n){var r={},o=d((function(){return!!V[e]()||"\u200b\x85"!="\u200b\x85"[e]()})),i=r[e]=o?t(Q):V[e];n&&(r[n]=i),M(M.P+M.F*o,"String",r)},Q=K.trim=function(e,t){return e=String(C(e)),1&t&&(e=e.replace(J,"")),2&t&&(e=e.replace(Y,"")),e};K("trim",(function(e){return function(){return e(this,3)}}));p.String.trim;var Z="undefined"!=typeof window?window.navigator:void 0,ee=void 0!==e?e:void 0;t.a=function(e){return new u(e,Z,ee).detect()}}).call(this,n(283))}}]);