(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{452:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return f}));var a=n(1),i=n(9),r=(n(0),n(508)),o=n(511),c=n(514),l=n(522),d=n(515),p=n(516),s=n(517),b=n(519),u=n(513),h={id:"modal-window",title:"ModalWindow"},m={id:"development/ui-development/ui-components/containers/modal-window",title:"ModalWindow",description:"import Figure from '@site/components/Figure'\r",source:"@site/docs\\development\\ui-development\\ui-components\\containers\\modal-window.mdx",permalink:"/docs/development/ui-development/ui-components/containers/modal-window",sidebar:"docs",previous:{title:"ListLayout",permalink:"/docs/development/ui-development/ui-components/containers/list-layout"},next:{title:"ScrollList",permalink:"/docs/development/ui-development/ui-components/containers/scroll-list"}},g=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],j={rightToc:g},O="wrapper";function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(O,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ModalWindow is a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/containers/container"}),"Container")," type widget that displays a window and blocks touch events to the underlying view and widgets. The ModalWindow consists of a background ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/images/image"}),"Image")," and a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/shapes/box"}),"Box")," that acts as a shade over the underlying view and widgets with adjustable alpha. The ModalWindow will fill up the entire screen and should always be added as the last element such that it is always on top of all other elements."),Object(r.b)(o.a,{imageSource:"/img/development/ui-development/ui-components/modal-window/widget-appearance.gif",caption:"ModalWindow running in the simulator",mdxType:"Figure"}),Object(r.b)("h2",{id:"widget-group"},"Widget Group"),Object(r.b)("p",null,"The ModalWindow can be found in the Containers widget group in TouchGFX Designer."),Object(r.b)(o.a,{imageSource:"/img/development/ui-development/ui-components/modal-window/widget-group.png",caption:"ModalWindow in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("p",null,"The properties for a ModalWindow in TouchGFX Designer."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Property Group")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Name")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(r.b)(s.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Modal Image Location")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"X",mdxType:"Property"})," and ",Object(r.b)(l.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the image within the ModalWindow.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"W",mdxType:"Property"})," and ",Object(r.b)(l.a,{name:"H",mdxType:"Property"})," specify the width and height of the container within the ModalWindow.",Object(r.b)("br",null),Object(r.b)(s.a,{text:"The size of the container within the ModalWindow is taken from the size of the associated image and cannot be altered except by changing the image.",mdxType:"InlineNote"}),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget.",Object(r.b)("br",null),Object(r.b)(s.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Appearance")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"Window Image",mdxType:"Property"})," specifies which image the ModalWindow should use.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"Shade Color",mdxType:"Property"})," specifies the color of the overlay shade.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"Shade Alpha",mdxType:"Property"})," specifies the transparency of the overlay shade.",Object(r.b)("br",null),Object(r.b)(s.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))))),Object(r.b)("h2",{id:"interactions"},"Interactions"),Object(r.b)("p",null,"The actions and triggers supported by the ModalWindow are described in the following sections."),Object(r.b)("h3",{id:"actions"},"Actions"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Standard widget action")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Hide widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Show widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(r.b)("h3",{id:"triggers"},"Triggers"),Object(r.b)("p",null,"The ModalWindow does not emit any triggers."),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,"A ModalWindow is a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/containers/container"}),"Container")," type that consists of a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/shapes/box"}),"Box"),", a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/containers/container"}),"Container")," and an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/images/image"}),"Image"),". The ModalWindow does not per default appear in the draw chain. Therefore, the performance is mostly dependent on the childrens drawing performance."),Object(r.b)("p",null,"For more general details on drawing performance, read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/general-ui-component-performance"}),"General UI Component Performance")," section."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"generated-code"},"Generated Code"),Object(r.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a ModalWindow."),Object(r.b)(u.a,{mdxType:"CodeHeader"},"mainViewBase.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n#include <touchgfx/Color.hpp>\n\nmainViewBase::mainViewBase() :\n    buttonCallback(this, &mainViewBase::buttonCallbackHandler)\n{\n    modalWindow.setBackground(touchgfx::BitmapId(BITMAP_BLUE_BACKGROUNDS_MAIN_BG_320X240PX_ID), 80, 16);\n    modalWindow.setShadeColor(touchgfx::Color::getColorFrom24BitRGB(0, 0, 0));\n    modalWindow.setShadeAlpha(150);\n    modalWindow.hide();\n\n    add(modalWindow);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),Object(r.b)(d.a,{mdxType:"Tip"},"You can use these functions and the others available in the ModalWindow class in user code. Remember to force a redraw by calling ",Object(r.b)(p.a,{text:"modalWindow.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(r.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(r.b)("p",null,"To further explore the ModalWindow, try creating a new application within TouchGFX Designer with one of the following UI templates:"),Object(r.b)(o.a,{imageSource:"/img/development/ui-development/ui-templates/modal-window-example.png",caption:"ModalWindow Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("h2",{id:"api-reference"},"API Reference"),Object(r.b)(c.a,{mdxType:"FurtherReading"},Object(r.b)("li",null,Object(r.b)(b.a,{link:"classes/classtouchgfx_1_1_modal_window",mdxType:"API"},"API reference for the ModalWindow class"))))}f.isMDXComponent=!0},509:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(r.a.createElement("div",{class:e},r.a.createElement("div",{class:"highlight-heading"},r.a.createElement("h5",null,r.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(i.Component);t.a=o},511:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?r.a.createElement("div",{class:"figure noshadow"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption)):r.a.createElement("div",{class:"figure"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=o},513:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",{class:"code-header"},r.a.createElement("div",null,r.a.createElement("h5",null,this.props.children)))},t}(i.Component);t.a=o},514:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=n(509),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(i.Component);t.a=l},515:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=n(509),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:c},this.props.children)},t}(i.Component);t.a=l},516:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("code",null,this.props.text)},t}(i.Component);t.a=o},517:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.text)},t}(i.Component);t.a=o},519:function(e,t,n){"use strict";n(520);var a=n(5),i=n(0),r=n.n(i),o=n(510),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="/docs/api/"+this.props.link;return(r.a.createElement(o.a,{to:e},this.props.children))},t}(i.Component);t.a=c},520:function(e,t,n){"use strict";n(521)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},521:function(e,t,n){var a=n(12),i=n(13),r=n(24),o=/"/g,c=function(e,t,n,a){var i=String(r(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},522:function(e,t,n){"use strict";n(523);var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.name)},t}(i.Component);t.a=o},523:function(e,t,n){var a=n(25).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(10)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})}}]);