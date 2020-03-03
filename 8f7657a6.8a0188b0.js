(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return h})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return f}));var a=n(1),r=n(9),i=(n(0),n(231)),c=n(234),o=n(242),b=n(237),l=n(232),p=n(243),d=n(233),s=n(239),m=n(244),u={id:"Line",title:"Line"},h={id:"Development/UIDevelopment/UIComponents/Shapes/Line",title:"Line",description:"import Figure from '@site/components/Figure'\r",source:"@site/docs\\Development\\UIDevelopment\\UIComponents\\Shapes\\Line.mdx",permalink:"/docs/Development/UIDevelopment/UIComponents/Shapes/Line",sidebar:"docs",previous:{title:"BoxWithBorder",permalink:"/docs/Development/UIDevelopment/UIComponents/Shapes/BoxWithBorder"},next:{title:"Circle",permalink:"/docs/Development/UIDevelopment/UIComponents/Shapes/Circle"}},g=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],j={rightToc:g},O="wrapper";function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(O,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A Line is a widget based on the CanvasWidget capable of drawing a straight line from one point to another. The Line can be filled by a single color or an image using a Painter object."),Object(i.b)(c.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/Line/WidgetAppearance.png",caption:"Line running in the simulator",mdxType:"Figure"}),Object(i.b)("h2",{id:"widget-group"},"Widget Group"),Object(i.b)("p",null,"The Line can be found in the Shapes widget group in TouchGFX Designer."),Object(i.b)(c.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/Line/WidgetGroup.png",caption:"Line in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"The properties for a Line in TouchGFX Designer."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Group")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Name")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(i.b)(d.a,{text:"Name is the unique identifier used in TouchGFX Designer and code",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Location")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"W",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget.",Object(i.b)("br",null),Object(i.b)(d.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Image & Color")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Image",mdxType:"Property"})," specifies the image assigned to the line from the Designer skin library or the Project folder. ",Object(i.b)("br",null),Object(i.b)("br",null),"If the image is not chosen, ",Object(i.b)(b.a,{name:"Color",mdxType:"Property"})," specifies the color of the line.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Appearance")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Start Position X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Start Position Y",mdxType:"Property"})," specify the start coordinates of the line relative to the top left corner of the widget.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"End Position X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"End Position Y",mdxType:"Property"})," specify the end coordinates of the line relative to the top left corner of the widget.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Line Width",mdxType:"Property"})," specifies the width of the line.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Cap Style",mdxType:"Property"})," specifies the shape of the edges of the line.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the widget.",Object(i.b)("br",null),Object(i.b)(d.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Mixins")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(i.b)(b.a,{name:"Alpha",mdxType:"Property"})," value.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(i.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Y",mdxType:"Property"})," values.")))),Object(i.b)("h2",{id:"interactions"},"Interactions"),Object(i.b)("p",null,"The actions and triggers supported by the Line are described in the following sections."),Object(i.b)("h3",{id:"actions"},"Actions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Standard widget action")),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Move widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Fade widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Hide widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Show widget")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(i.b)("h3",{id:"triggers"},"Triggers"),Object(i.b)("p",null,"A Line does not emit any triggers."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"A Line is a CanvasWidget and is heavily dependent on the MCU for rendering. Therefore, the Line is considered a demanding widget on most platforms."),Object(i.b)("p",null,"For more details on CanvasWidget drawing performance, read the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/GeneralUIComponentPerformance"}),"General UI Component Performance"),"."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"generated-code"},"Generated Code"),Object(i.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Line."),Object(i.b)(m.a,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    lineName.setPosition(0, 0, 800, 480);\n    lineNamePainter.setBitmap(touchgfx::Bitmap(BITMAP_DARK_BACKGROUNDS_MAIN_BG_800X480PX_ID));\n    lineName.setPainter(lineNamePainter);\n    lineName.setStart(200, 200);\n    lineName.setEnd(550, 150);\n    lineName.setLineWidth(50);\n    lineName.setLineEndingStyle(touchgfx::Line::ROUND_CAP_ENDING);\n\n    add(lineName);\n}\n')),Object(i.b)(l.a,{mdxType:"Tip"},"You can use these functions and the other available in the Line class in user code. Remember to force a redraw by calling ",Object(i.b)(p.a,{text:"lineName.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(i.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(i.b)("p",null,"To further explore the Line, try creating a new application within TouchGFX Designer with the following UI template:"),Object(i.b)(c.a,{imageSource:"/img/Development/UIDevelopment/UITemplates/LineAndCircleExample.png",caption:"Line and Circle Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)(o.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,Object(i.b)(s.a,{link:"classtouchgfx_1_1_line.html",mdxType:"API"},"API reference for the Line class"))))}f.isMDXComponent=!0},232:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),c=n(235),o=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement(c.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)},t}(r.Component);t.a=b},233:function(e,t,n){"use strict";var a=n(5),r=n(0),i=n.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.text)},t}(r.Component);t.a=c},237:function(e,t,n){"use strict";n(238);var a=n(5),r=n(0),i=n.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.name)},t}(r.Component);t.a=c},238:function(e,t,n){var a=n(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(11)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},239:function(e,t,n){"use strict";n(240);var a=n(5),r=n(0),i=n.n(r),c=n(236),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return i.a.createElement(c.a,{to:e,target:"_blank"},this.props.children)},t}(r.Component);t.a=o},240:function(e,t,n){"use strict";n(241)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},241:function(e,t,n){var a=n(17),r=n(18),i=n(23),c=/"/g,o=function(e,t,n,a){var r=String(i(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+String(a).replace(c,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(o),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);