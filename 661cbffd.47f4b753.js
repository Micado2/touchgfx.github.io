(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return g}));var r=n(1),i=n(9),o=(n(0),n(227)),a=n(230),c=n(228),s=n(231),l=(n(233),n(244)),d={id:"CanvasView",title:"Canvas View"},p={id:"Development/UIDevelopment/DesignerUserGuide/CanvasView",title:"Canvas View",description:"import Link from '@docusaurus/Link';\r",source:"@site/docs\\Development\\UIDevelopment\\DesignerUserGuide\\CanvasView.mdx",permalink:"/docs/Development/UIDevelopment/DesignerUserGuide/CanvasView",sidebar:"docs",previous:{title:"Main Window",permalink:"/docs/Development/UIDevelopment/DesignerUserGuide/MainWindow"},next:{title:"Images View",permalink:"/docs/Development/UIDevelopment/DesignerUserGuide/ImagesView"}},h=[{value:"Left Side Bar",id:"left-side-bar",children:[{value:"Widgets",id:"widgets",children:[]},{value:"Screens & Custom Containers",id:"screens--custom-containers",children:[]}]},{value:"Canvas",id:"canvas",children:[{value:"Widget Order Controls",id:"widget-order-controls",children:[]},{value:"Content Clipping Control",id:"content-clipping-control",children:[]},{value:"History Controls",id:"history-controls",children:[]},{value:"Zoom Controls",id:"zoom-controls",children:[]}]},{value:"Right Side Bar",id:"right-side-bar",children:[{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[]}]}],u={rightToc:h},b="wrapper";function g(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(b,Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Canvas is the view used for building the graphical parts of an application by providing a visual representation of the interface as it will look while running. The dynamic aspects, like animations and interactions between parts of the system, are described here."),Object(o.b)(c.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/DesignerCanvasView.png",caption:"The Canvas View of TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("h2",{id:"left-side-bar"},"Left Side Bar"),Object(o.b)("p",null,"The side bar to the left contains a tab control, with navigation to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#widgets"}),"Widgets"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#screens"}),"Screens")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#custom-containers"}),"Custom Containers"),"."),Object(o.b)("h3",{id:"widgets"},"Widgets"),Object(o.b)("p",null,"The Widgets tab in the left side bar contains all available widgets grouped into categories. Each category can be expanded and collapsed by pressing the chevron next to the category name."),Object(o.b)("p",null,"Clicking a widget, will add it to the canvas of the Screen or Custom Container that is currently selected and visible. A widget can also be added by dragging the widget directly to the canvas."),Object(o.b)(c.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/Widgets.png",caption:"The Widgets in the left side bar",mdxType:"Figure"}),Object(o.b)("h3",{id:"screens--custom-containers"},"Screens & Custom Containers"),Object(o.b)("p",null,"Both the Screens tab and Custom Containers tab contais a tree giving an overview of the widgets in each screen/custom container, every widget in the tree, that can contain other widgets can be collapsed by pressing the chevron next to the widgets name."),Object(o.b)("p",null,"The order of the screens, custom containers, and widgets within can be changed by dragging them below or above other screens, custom containers and widgets, the order can also be changed with the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#widget-order-controls"}),"widget order controls"),". Changing the order of widgets will determine which widgets is rendered on top of other widgets."),Object(o.b)("p",null,"Widgets that are container types, can have children added to them by dragging widget on top of them in the tree view. widgets can also be dragged from one screen to another."),Object(o.b)("p",null,"Select multiple widgets by pressing and holding CTRL while clicking widgets."),Object(o.b)("p",null,"Screens/Custom Containers can be added to the project by pressing the blue icon with a plus.\nThe Custom Containers can be added to screens and other custom containers from the Widgets tab, they can be found in their own category named 'Custom Containers'."),Object(o.b)(c.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/DesignerCanvasViewTree.gif",caption:"The Screens tree in the left side bar",mdxType:"Figure"}),Object(o.b)("h2",{id:"canvas"},"Canvas"),Object(o.b)("p",null,"The center of the view contains the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#Canvas"}),"Canvas")," that displays the view of the screen or custom container that is currently selected."),Object(o.b)("p",null,"The canvas is surrounded by various controls: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#widget-order-controls"}),"Widget Order Controls"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#content-clipping-control"}),"Content Clipping Control"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#history-controls"}),"History Controls")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#zoom-controls"}),"Zoom Controls")),Object(o.b)(c.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/DesignerCanvasView.gif",caption:"The Canvas in the Canvas View",mdxType:"Figure"}),Object(o.b)("h3",{id:"widget-order-controls"},"Widget Order Controls"),Object(o.b)("p",null,"The z-order of widgets can be manipulated by the Bring Forward and Send Backwards controls, this also changes their order in the Screens or Custom Container tree."),Object(o.b)("p",null,"Bring Forward can also be triggered by pressing ",Object(o.b)(l.a,{text:"CTRL + F",mdxType:"Shortcut"})),Object(o.b)("p",null,"Send Backward can also be triggered by pressing ",Object(o.b)(l.a,{text:"CTRL + B",mdxType:"Shortcut"})),Object(o.b)(c.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/WidgetOrderControls.png",caption:"Bring Forward and Send Backwards controls in the Canvas View",mdxType:"Figure"}),Object(o.b)("h3",{id:"content-clipping-control"},"Content Clipping Control"),Object(o.b)("p",null,"In the canvas, widgets outside the borders of the Screen, Custom Container and children of container type widgets are clipped. The content clipping control toggles between clipping the widgets fully or showing them partially anyway."),Object(o.b)(c.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/ContentClippingToggleButton.png",caption:"Show/Hide Clipped Content control in the Canvas View",mdxType:"Figure"}),Object(o.b)("p",null,"In the image below a Box is placed halfway outside the borders of a screen, when the content clipping control is set to show clipped widgets, the Box will not be shown fully but instead have the part that is outside desaturated."),Object(o.b)(c.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/ClippedContent.png",caption:"Box widget appearance difference when showing and hiding clipped content",mdxType:"Figure"}),Object(o.b)("h3",{id:"history-controls"},"History Controls"),Object(o.b)("p",null,"The history of changes performed on the canvas can be undone and redone through the history controls, located at the top center of the canvas.",Object(o.b)("br",null),"Each screen and custom container maintains its own history, therefore to undo or redo a change performed on a certain screen, that specific screen has to be visible on the canvas."),Object(o.b)("p",null,"The History controls can also be triggered by pressing ",Object(o.b)(l.a,{text:"CTRL + Z",mdxType:"Shortcut"})," and ",Object(o.b)(l.a,{text:"CTRL + Y ",mdxType:"Shortcut"})),Object(o.b)(c.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/HistoryControls.png",caption:"History controls in the Canvas View",mdxType:"Figure"}),Object(o.b)("h3",{id:"zoom-controls"},"Zoom Controls"),Object(o.b)("p",null,"The zoom level of the canvas can be controlled with the zoom control in the bottom left corner of the canvas. To return to 100% zoom press the button next to the zoom slider label '1:1'."),Object(o.b)("p",null,"Zooming can also be achieved by using ",Object(o.b)(l.a,{text:"CTRL + Mouse Wheel",mdxType:"Shortcut"})),Object(o.b)(c.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/ZoomControls.png",caption:"Zoom controls in the Canvas View",mdxType:"Figure"}),Object(o.b)("h2",{id:"right-side-bar"},"Right Side Bar"),Object(o.b)("p",null,"The side bar to the right contains a tab control, with navigation to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#properties"}),"Properties")," of the widget currently selected, and the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#interactions"}),"Interactions")," of the Screen or Custom Container that is currently viewed on the canvas."),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("p",null,"The Properties tab will show the properties of the Widget/Screen/Custom Container that is currently selected. The name of the selected component is displayed at the top of the properties list, next to the name there is a questionmark icon. Clicking this questionmark icon will expand the section, to display a text describing and a link to documentation for the component."),Object(o.b)("p",null,"Each of the sections in the properties list can be collapsed and expanded by pressing the chrevron next to the section name."),Object(o.b)(c.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/PropertiesTab.png",caption:"Properties of Box",mdxType:"Figure"}),Object(o.b)("h3",{id:"interactions"},"Interactions"),Object(o.b)("p",null,"The Interactions tab will show the interactions of the Screen or Custom Container that is currently displayed on the canvas. The questionmark at the top can be pressed to reveal a description of interactions and a link to an article."),Object(o.b)("p",null,"Interactions can be added by pressing the blue button labeled 'Add Interaction'. Each interaction can be collapsed and expanded by pressing the chevron next to the name of the interaction. Next to the chevron, a cross is located, this cross will delete the interaction when clicked."),Object(o.b)(c.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/InteractionsTab.png",caption:"Interactions of a Screen",mdxType:"Figure"}),Object(o.b)(s.a,{mdxType:"FurtherReading"},Object(o.b)("li",null,Object(o.b)(a.a,{to:"/docs/Development/UIDevelopment/DesignerUserGuide/Interactions",mdxType:"Link"},"Interactions"))))}g.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,b=p["".concat(a,".").concat(h)]||p[h]||u[h]||o;return n?i.a.createElement(b,c({ref:t},l,{components:n})):i.a.createElement(b,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},228:function(e,t,n){"use strict";var r=n(5),i=n(0),o=n.n(i),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=a},229:function(e,t,n){"use strict";var r=n(5),i=n(0),o=n.n(i),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children))},t}(i.Component);t.a=a},230:function(e,t,n){"use strict";var r=n(1),i=n(0),o=n.n(i),a=n(34),c=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,s=e.href,l=n||s,d=c.test(l),p=Object(i.useRef)(!1),h="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(i.useEffect)((function(){return!h&&d&&window.docusaurus.prefetch(l),function(){h&&t&&t.disconnect()}}),[l,h,d]),l&&d?o.a.createElement(a.b,Object(r.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(l),p.current=!0)},innerRef:function(e){var n,r;h&&e&&d&&(n=e,r=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:l})):o.a.createElement("a",Object(r.a)({},e,{href:l}))}},231:function(e,t,n){"use strict";var r=n(5),i=n(0),o=n.n(i),a=n(229),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement(a.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(i.Component);t.a=s},233:function(e,t,n){"use strict";var r=n(5),i=n(0),o=n.n(i),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("i",null,this.props.text)},t}(i.Component);t.a=a},244:function(e,t,n){"use strict";var r=n(5),i=n(0),o=n.n(i),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("code",{class:"shortcut"},this.props.text)},t}(i.Component);t.a=a}}]);