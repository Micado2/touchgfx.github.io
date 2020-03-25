(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return g})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return f}));var n=a(1),r=a(9),i=(a(0),a(254)),c=a(255),o=a(263),b=a(259),p=a(265),l=a(267),m=a(256),s=a(260),d=a(264),g={id:"Image",title:"Image"},u={id:"Development/UIDevelopment/UIComponents/Images/Image",title:"Image",description:"import Figure from '@site/components/Figure'",source:"@site/docs\\Development\\UIDevelopment\\UIComponents\\Images\\Image.mdx",permalink:"/docs/Development/UIDevelopment/UIComponents/Images/Image",sidebar:"docs",previous:{title:"FlexButton",permalink:"/docs/Development/UIDevelopment/UIComponents/Buttons/FlexButton"},next:{title:"ScalableImage",permalink:"/docs/Development/UIDevelopment/UIComponents/Images/ScalableImage"}},h=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],j={rightToc:h},O="wrapper";function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(O,Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An Image in TouchGFX draws the pixel data from an associated image file. The image file must be imported into the project before usage."),Object(i.b)("p",null,"The size of an Image is defined by the associated image file and cannot be altered at runtime. If you need the image shown to be of a different size you need to resize the associated imported image. This is due to performance reasons."),Object(i.b)("p",null,"If you need to resize an image at runtime use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/Images/ScalableImage"}),"ScalableImage"),". Note that the performance of drawing a scaled image is much lower than a non-scaled image."),Object(i.b)(c.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/Image/WidgetAppearance.png",caption:"Image running in the simulator",mdxType:"Figure"}),Object(i.b)("h2",{id:"widget-group"},"Widget Group"),Object(i.b)("p",null,"The Image can be found in the Images widget group in TouchGFX Designer."),Object(i.b)(c.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/Image/WidgetGroup.png",caption:"Image in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"The properties for a Image in TouchGFX Designer."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Group")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(i.b)(m.a,{text:"Name is the unique identifier used in TouchGFX Designer and code",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Location")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"W",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget. The size of the widget is determined by the size of the associated image.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget. ",Object(i.b)(m.a,{text:"Making the widget invisible also disables interacting with the widget through the screen",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Style")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Style",mdxType:"Property"})," specifies a predefined setup of the widget, that sets select properties to predefined values.",Object(i.b)("br",null),Object(i.b)(m.a,{text:"These styles contain images that are free to use",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Image")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Image",mdxType:"Property"})," specifies the associated image. Select either from the imported images in the Project tab or from the set of free TouchGFX images in the Skins tab.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Appearance")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the widget. ",Object(i.b)(m.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Mixin")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(i.b)(b.a,{name:"Alpha",mdxType:"Property"})," value.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(i.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Y",mdxType:"Property"})," values.")))),Object(i.b)("h2",{id:"interactions"},"Interactions"),Object(i.b)("p",null,"The actions and triggers supported by an Image in TouchGFX Designer."),Object(i.b)("h3",{id:"actions"},"Actions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Standard widget actions")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Move widget")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Fade widget")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Hide widget")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Show widget")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(i.b)("h3",{id:"triggers"},"Triggers"),Object(i.b)("p",null,"An Image does not emit any triggers."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"The Image is dependent on image drawing and is considered a fast performing widget on most platforms. "),Object(i.b)("p",null,"For more details on image drawing performance, read the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/GeneralUIComponentPerformance"}),"General UI Component Performance")," section."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"generated-code"},"Generated Code"),Object(i.b)("p",null,"In the generated code for the view base class we can see how TouchGFX Designer sets up an Image."),Object(i.b)(d.a,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    imageName.setXY(0, 0);\n    imageName.setBitmap(Bitmap(BITMAP_STM32_LOGO_ID));\n\n    add(imageName);\n}\n')),Object(i.b)(p.a,{mdxType:"Tip"},Object(i.b)("li",null,"You can use these functions and the others available in the Image class in user code. Remember to force a redraw by calling ",Object(i.b)(l.a,{text:"imageName.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget.")),Object(i.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(i.b)("p",null,"To further explore the Image, try creating a new application within TouchGFX Designer with one of the following UI templates:"),Object(i.b)(c.a,{imageSource:"/img/Development/UIDevelopment/UITemplates/KnightHitsZombieGame.png",caption:"KnightHitsZombie Game UI template in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)(o.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,Object(i.b)(s.a,{link:"classtouchgfx_1_1_image.html",mdxType:"API"},"API reference for the Image class"))))}f.isMDXComponent=!0},256:function(e,t,a){"use strict";var n=a(5),r=a(0),i=a.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.text)},t}(r.Component);t.a=c},258:function(e,t,a){var n=a(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(11)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},259:function(e,t,a){"use strict";a(258);var n=a(5),r=a(0),i=a.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.name)},t}(r.Component);t.a=c},260:function(e,t,a){"use strict";a(261);var n=a(5),r=a(0),i=a.n(r),c=a(257),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return i.a.createElement(c.a,{to:e,target:"_blank"},this.props.children)},t}(r.Component);t.a=o},261:function(e,t,a){"use strict";a(262)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},262:function(e,t,a){var n=a(17),r=a(18),i=a(23),c=/"/g,o=function(e,t,a,n){var r=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(c,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}}}]);