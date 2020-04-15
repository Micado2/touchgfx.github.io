(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return f}));var a=n(1),r=n(9),i=(n(0),n(270)),c=n(271),o=n(280),b=n(283),l=n(281),p=n(284),d=n(272),s=n(276),m=n(279),u={id:"container",title:"Container"},O={id:"development/ui-development/ui-components/containers/container",title:"Container",description:"import Figure from '@site/components/Figure'",source:"@site/docs\\development\\ui-development\\ui-components\\containers\\container.mdx",permalink:"/docs/development/ui-development/ui-components/containers/container",sidebar:"docs",previous:{title:"TextureMapper",permalink:"/docs/development/ui-development/ui-components/images/texture-mapper"},next:{title:"ScrollableContainer",permalink:"/docs/development/ui-development/ui-components/containers/scrollable-container"}},g=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],h={rightToc:g},j="wrapper";function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(j,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A Container is a component in TouchGFX that can contain child nodes."),Object(i.b)("p",null,"To read more about the fundamental nature of the concept of Containers, read the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/working-with-touchgfx/widgets-and-containers#containers"}),"Widgets and Containers page"),"."),Object(i.b)("p",null,"It is also possible to generate a Container as a CachableContainer. A CacheableContainer can render its content to a dynamic bitmap. This is explained more in detail on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container"}),"Achieving Better Performance with CacheableContainer")," page."),Object(i.b)(c.a,{imageSource:"/img/development/ui-development/ui-components/container/widget-appearance.png",caption:"Container widget running in the simulator",mdxType:"Figure"}),Object(i.b)("h2",{id:"widget-group"},"Widget Group"),Object(i.b)("p",null,"The Container can be found in the Containers widget group in TouchGFX Designer."),Object(i.b)(c.a,{imageSource:"/img/development/ui-development/ui-components/container/widget-group.png",caption:"Container widget in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"The properties for a Container in TouchGFX Designer."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Group")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Name")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(l.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(i.b)(d.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Location")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(l.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(l.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(l.a,{name:"W",mdxType:"Property"})," and ",Object(i.b)(l.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(l.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget. ",Object(i.b)(d.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Caching")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(l.a,{name:"Cachable",mdxType:"Property"})," specifies if the Container should be generated as a CachableContainer.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Mixins")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(l.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(l.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(l.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(i.b)(l.a,{name:"Alpha",mdxType:"Property"})," value.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(l.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(i.b)(l.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(l.a,{name:"Y",mdxType:"Property"})," values.")))),Object(i.b)("h2",{id:"interactions"},"Interactions"),Object(i.b)("p",null,"The actions and triggers supported by a Container in TouchGFX Designer."),Object(i.b)("h3",{id:"actions"},"Actions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Widget specific action")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Resize widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Resize a widget.")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Standard widget action")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Move widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Fade widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Hide widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Show widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(i.b)("h3",{id:"triggers"},"Triggers"),Object(i.b)("p",null,"A Container does not emit any triggers."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"A Container itself does not have any impact on performance and is entirely dependent on its children. Therefore, the Container is considered a very fast widget on most platforms."),Object(i.b)("p",null,"In certain cases, using a CachableContainer to cache UI elements in a dynamic bitmap can significantly improve performance throughout an application. This is explained more in detail in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/scenarios/achieving-better-performance-with-cacheable-container"}),"Achieving Better Performance with CacheableContainer")," article."),Object(i.b)("p",null,"For more general details on drawing performance, read the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/general-ui-component-performance"}),"General UI Component Performance")," section."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"generated-code"},"Generated Code"),Object(i.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Container."),Object(i.b)(m.a,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    container1.setPosition(67, 11, 347, 250);\n\n    image1.setXY(109, 61);\n    image1.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_LOGO_TOUCHGFX_LOGO_ID));\n    container1.add(image1);\n\n    add(container1);\n}\n')),Object(i.b)(b.a,{mdxType:"Tip"},"You can use these functions and the others available in the Container class in user code. Remember to force a redraw by calling ",Object(i.b)(p.a,{text:"container1.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)(o.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,Object(i.b)(s.a,{link:"classtouchgfx_1_1_container.html",mdxType:"API"},"API reference for the Container class")),Object(i.b)("li",null,Object(i.b)(s.a,{link:"classtouchgfx_1_1_cacheable_container.html",mdxType:"API"},"API reference for the CachableContainer class"))))}f.isMDXComponent=!0},272:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.text)},t}(r.Component);t.a=c},276:function(e,t,n){"use strict";n(277);var a=n(5),r=n(0),i=n.n(r),c=n(273),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return(i.a.createElement(c.a,{to:e,target:"_blank"},this.props.children))},t}(r.Component);t.a=o},277:function(e,t,n){"use strict";n(278)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},278:function(e,t,n){var a=n(12),r=n(13),i=n(24),c=/"/g,o=function(e,t,n,a){var r=String(i(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+String(a).replace(c,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(o),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},281:function(e,t,n){"use strict";n(282);var a=n(5),r=n(0),i=n.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.name)},t}(r.Component);t.a=c},282:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);