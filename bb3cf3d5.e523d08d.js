(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return h})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return f}));var a=n(1),r=n(9),o=(n(0),n(231)),i=n(234),c=n(242),b=n(237),l=n(232),p=n(243),s=n(233),d=n(239),m=n(244),u={id:"FlexButton",title:"FlexButton"},h={id:"Development/UIDevelopment/UIComponents/Buttons/FlexButton",title:"FlexButton",description:"import Figure from '@site/components/Figure'\r",source:"@site/docs\\Development\\UIDevelopment\\UIComponents\\Buttons\\FlexButton.mdx",permalink:"/docs/Development/UIDevelopment/UIComponents/Buttons/FlexButton",sidebar:"docs",previous:{title:"RepeatButton",permalink:"/docs/Development/UIDevelopment/UIComponents/Buttons/RepeatButton"},next:{title:"Image",permalink:"/docs/Development/UIDevelopment/UIComponents/Images/Image"}},g=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],O={rightToc:g},j="wrapper";function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(j,Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A FlexButton in TouchGFX is a widget that is aware of touch events and can send a callback when the FlexButton is triggered. The FlexButton is adaptable to the needs of the user. It can combine the behaviour and appearance of other button types but takes up a bit more RAM as a tradeoff. This will, however, in most cases be an insignificant amount. The FlexButton can be composed of a maximum of 4 visual elements: BoxWithBorder, Icon, Text and Image."),Object(o.b)(i.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/FlexButton/WidgetAppearance.png",caption:"FlexButton running in the simulator (combining BoxWithBorder, Icon and Text elements)",mdxType:"Figure"}),Object(o.b)("h2",{id:"widget-group"},"Widget Group"),Object(o.b)("p",null,"The FlexButton can be found in the Buttons widget group in TouchGFX Designer."),Object(o.b)(i.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/FlexButton/WidgetGroup.png",caption:"FlexButton in TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"The properties for a FlexButton in TouchGFX Designer."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Property Group")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Name")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(o.b)(s.a,{text:"Name is the unique identifier used in TouchGFX Designer and code",mdxType:"InlineNote"}),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Location")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(o.b)(b.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"W",mdxType:"Property"})," and ",Object(o.b)(b.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget.",Object(o.b)("br",null),Object(o.b)(s.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Appearance")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the widget.",Object(o.b)("br",null),Object(o.b)(s.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Trigger")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"Click",mdxType:"Property"})," , ",Object(o.b)(b.a,{name:"Touch",mdxType:"Property"})," , ",Object(o.b)(b.a,{name:"Toggle",mdxType:"Property"})," and ",Object(o.b)(b.a,{name:"Repeat",mdxType:"Property"})," specify which action triggers the button callback.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Visual Elements")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"Image",mdxType:"Property"})," , ",Object(o.b)(b.a,{name:"Box With Border",mdxType:"Property"})," , ",Object(o.b)(b.a,{name:"Text",mdxType:"Property"})," and ",Object(o.b)(b.a,{name:"Icon",mdxType:"Property"})," specify which elements make up the widgets visual appearance.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Mixins")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(o.b)(b.a,{name:"Alpha",mdxType:"Property"})," value.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(o.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(o.b)(b.a,{name:"Y",mdxType:"Property"})," values.")))),Object(o.b)("h2",{id:"interactions"},"Interactions"),Object(o.b)("p",null,"The actions and triggers supported by the FlexButton are described in the following sections."),Object(o.b)("h3",{id:"actions"},"Actions"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Standard widget action")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Description")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Move widget")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Fade widget")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Hide widget")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Show widget")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(o.b)("h3",{id:"triggers"},"Triggers"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Trigger")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Description")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Button is clicked")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A button has been clicked.")))),Object(o.b)("h2",{id:"performance"},"Performance"),Object(o.b)("p",null,"A FlexButton is potentially composed of up to two Boxes, four Images and one Text, and relies on image and text drawing. Text drawing is very similar to general image drawing (though due to the nature of text characters, a significant amount of alpha blending takes place). Therefore, the FlexButton is considered a fast widget on most platforms."),Object(o.b)("p",null,"For more details on drawing performance, read the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/GeneralUIComponentPerformance"}),"General UI Component Performance")," section."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"generated-code"},"Generated Code"),Object(o.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a FlexButton. The code corresponds to the FlexButton shown ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/Buttons/FlexButton"}),"at the start of this section"),", combining the behavior and appearance of the BoxWithBorder, Icon and Text elements."),Object(o.b)(m.a,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    buttonCallback(this, &Screen1ViewBase::buttonCallbackHandler)\n{\n                            // Box with Border behavior and appearance\n    flexButtonName.setBoxWithBorderPosition(0, 0, 176, 74);\n    flexButtonName.setBorderSize(5);\n    flexButtonName.setBoxWithBorderColors(touchgfx::Color::getColorFrom24BitRGB(0, 102, 153), touchgfx::Color::getColorFrom24BitRGB(0, 153, 204), touchgfx::Color::getColorFrom24BitRGB(0, 51, 102), touchgfx::Color::getColorFrom24BitRGB(51, 102, 153));\n                            // Text behavior and appearance\n    flexButtonName.setText(TypedText(T_SINGLEUSEID1));\n    flexButtonName.setTextPosition(30, 12, 176, 74);\n    flexButtonName.setTextColors(touchgfx::Color::getColorFrom24BitRGB(10, 10, 10), touchgfx::Color::getColorFrom24BitRGB(10, 10, 10));\n                            // Icon behavior and appearance\n    flexButtonName.setIconBitmaps(Bitmap(BITMAP_BLUE_ICONS_ALERT_32_ID), Bitmap(BITMAP_BLUE_ICONS_ALERT_32_ID));\n    flexButtonName.setIconXY(20, 17);\n                            // Widget\n    flexButtonName.setPosition(152, 99, 176, 74);\n    flexButtonName.setAction(flexButtonCallback);\n\n    add(flexButtonName);\n}\n\nvoid Screen1ViewBase::flexButtonCallbackHandler(const touchgfx::AbstractButtonContainer& src)\n{\n    if (&src == &flexButtonName)\n    {\n        //InteractionName\n        //When FlexButtonName clicked calls the new virtual function "functionName()" set by the user\n        functionName();\n    }\n}\n')),Object(o.b)(l.a,{mdxType:"Tip"},"You can use these functions and the others available in the FlexButton class in user code. Remember to force a redraw by calling ",Object(o.b)(p.a,{text:"flexButtonName.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(o.b)("h4",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(o.b)("p",null,"To further explore the FlexButton, try creating a new application within TouchGFX Designer with the following UI template:"),Object(o.b)(i.a,{imageSource:"/img/Development/UIDevelopment/UITemplates/FlexButtonExample.png",caption:"FlexButton Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("h2",{id:"api-reference"},"API Reference"),Object(o.b)(c.a,{mdxType:"FurtherReading"},Object(o.b)("li",null,Object(o.b)(d.a,{link:"classtouchgfx_1_1_abstract_button.html",mdxType:"API"},"API reference for the AbstractButton class"))))}f.isMDXComponent=!0},232:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=n(235),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:c},this.props.children)},t}(r.Component);t.a=b},233:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("i",null,this.props.text)},t}(r.Component);t.a=i},237:function(e,t,n){"use strict";n(238);var a=n(5),r=n(0),o=n.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("i",null,this.props.name)},t}(r.Component);t.a=i},238:function(e,t,n){var a=n(24).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(11)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},239:function(e,t,n){"use strict";n(240);var a=n(5),r=n(0),o=n.n(r),i=n(236),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return o.a.createElement(i.a,{to:e,target:"_blank"},this.props.children)},t}(r.Component);t.a=c},240:function(e,t,n){"use strict";n(241)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},241:function(e,t,n){var a=n(17),r=n(18),o=n(23),i=/"/g,c=function(e,t,n,a){var r=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);