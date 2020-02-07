(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return h}));var n=r(1),o=r(9),a=(r(0),r(215)),i=r(216),c={id:"WhatIsTouchGFX",title:"What is TouchGFX"},u={id:"Introduction/WhatIsTouchGFX",title:"What is TouchGFX",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Introduction\\WhatIsTouchGFX.mdx",permalink:"/docs/Introduction/WhatIsTouchGFX",sidebar:"docs",previous:{title:"TouchGFX Documentation",permalink:"/docs/Introduction/Welcome"},next:{title:"Installation",permalink:"/docs/Introduction/Installation"}},s=[{value:"TODO SMM: has a nicer figure from folder that shows what tools are used in different phases of project",id:"todo-smm-has-a-nicer-figure-from-folder-that-shows-what-tools-are-used-in-different-phases-of-project",children:[]}],p={rightToc:s},l="wrapper";function h(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)(l,Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"TouchGFX is delivered as one X-Cube package the ",Object(a.b)("em",{parentName:"p"},"X-Cube-TouchGFX"),"."),Object(a.b)("p",null,"With this you have all you need to do a full implementation of your GUI application for STM32 based hardware. It consists of three main parts, two tools and one framework. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"TouchGFX Designer:")," An easy-to-use GUI builder in TouchGFX that lets you create the visual appearance of your TouchGFX application."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"TouchGFX Generator:")," A CubeMX plugin where the user can configure and generate a TouchGFX project for their custom STM32-based hardware."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"TouchGFX Engine:")," The TouchGFX C++ framework that drives the UI application. Handles screen updates, user events and timing. The advanced TouchGFX technology is optimized for STM32 microcontrollers, giving you maximum performance with a minimum of CPU load and memory usage.")),Object(a.b)("h3",{id:"todo-smm-has-a-nicer-figure-from-folder-that-shows-what-tools-are-used-in-different-phases-of-project"},"TODO SMM: has a nicer figure from folder that shows what tools are used in different phases of project"),Object(a.b)(i.a,{imageSource:"/img/Introduction/WhatIsTouchGFX/touchgfx_components.png",caption:"",noShadow:!0,mdxType:"Figure"}),Object(a.b)("p",null,"Read the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Introduction/Installation"}),"Installation")," section for details on how to download and install TouchGFX. "))}h.isMDXComponent=!0},215:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),h=n,f=l["".concat(i,".").concat(h)]||l[h]||d[h]||a;return r?o.a.createElement(f,c({ref:t},s,{components:r})):o.a.createElement(f,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[h]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},216:function(e,t,r){"use strict";var n=r(5),o=r(0),a=r.n(o),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,r=this.props.height;return e?a.a.createElement("div",{class:"figure noshadow"},a.a.createElement("img",{width:t,height:r,src:this.props.imageSource}),a.a.createElement("p",null,this.props.caption)):a.a.createElement("div",{class:"figure"},a.a.createElement("img",{width:t,height:r,src:this.props.imageSource}),a.a.createElement("p",null,this.props.caption))},t}(o.Component);t.a=i}}]);