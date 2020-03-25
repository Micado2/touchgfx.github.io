(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return g})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return f}));var a=n(1),i=n(9),r=(n(0),n(254)),c=n(255),b=n(263),o=n(259),m=n(267),l=n(256),p=n(265),d=n(260),s=n(264),g={id:"AnimatedImage",title:"AnimatedImage"},u={id:"Development/UIDevelopment/UIComponents/Images/AnimatedImage",title:"AnimatedImage",description:"import Figure from '@site/components/Figure'\r",source:"@site/docs\\Development\\UIDevelopment\\UIComponents\\Images\\AnimatedImage.mdx",permalink:"/docs/Development/UIDevelopment/UIComponents/Images/AnimatedImage",sidebar:"docs",previous:{title:"TiledImage",permalink:"/docs/Development/UIDevelopment/UIComponents/Images/TiledImage"},next:{title:"TextureMapper",permalink:"/docs/Development/UIDevelopment/UIComponents/Images/TextureMapper"}},O=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],j={rightToc:O},h="wrapper";function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(h,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"An AnimatedImage is capable of running an animation from start to end using a range of images sharing a common identifier. It is capable doing a single animation or looping the animation until stopped or paused."),Object(r.b)(c.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/AnimatedImage/WidgetAppearance.gif",caption:"AnimatedImage running in the simulator",mdxType:"Figure"}),Object(r.b)("h2",{id:"widget-group"},"Widget Group"),Object(r.b)("p",null,"The AnimatedImage can be found in the Images widget group in TouchGFX Designer."),Object(r.b)(c.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/AnimatedImage/WidgetGroup.png",caption:"AnimatedImage in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("p",null,"The properties for a AnimatedImage in TouchGFX Designer."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Property Group")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Name")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(o.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(r.b)(l.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Location")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(o.a,{name:"X",mdxType:"Property"})," and ",Object(r.b)(o.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(o.a,{name:"W",mdxType:"Property"})," and ",Object(r.b)(o.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(r.b)("br",null),Object(r.b)(l.a,{text:"The size of a AnimatedImage is taken from the size of the associated images and cannot be altered except by changing the images.",mdxType:"InlineNote"})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(o.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget. ",Object(r.b)(l.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Image")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(o.a,{name:"First Image",mdxType:"Property"})," and ",Object(r.b)(o.a,{name:"Last Image",mdxType:"Property"})," specify the first and last images in the range of images used for the animation.",Object(r.b)("br",null),Object(r.b)(l.a,{text:"The images used must have an identifier e.g. img_01.png, img_02.png, img_03.png, img_04.png, img_05.png, img_06.png, img_07.png, etc.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Animation")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(o.a,{name:"Start on load",mdxType:"Property"})," specifies if the animation should start as soon as the screen is loaded.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(o.a,{name:"Reverse Animation",mdxType:"Property"})," specifies if the images used for the animation should be run in reverse order.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(o.a,{name:"Loop Animation",mdxType:"Property"})," specifies if the animation should run continuously.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(o.a,{name:"Update Interval",mdxType:"Property"})," specifies the the amount of time that will pass between each image in the animation.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Appearance")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(o.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the widget. ",Object(r.b)(l.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Mixins")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(o.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(o.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(o.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(r.b)(o.a,{name:"Alpha",mdxType:"Property"})," value.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(o.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(r.b)(o.a,{name:"X",mdxType:"Property"})," and ",Object(r.b)(o.a,{name:"Y",mdxType:"Property"})," values.")))),Object(r.b)("h2",{id:"interactions"},"Interactions"),Object(r.b)("p",null,"The actions and triggers supported by the AnimatedImage are described in the following sections."),Object(r.b)("h3",{id:"actions"},"Actions"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Standard widget action")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Move widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Fade widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Hide widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Show widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(r.b)("h3",{id:"triggers"},"Triggers"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Trigger")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Animation is done")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An AnimatedImage has completed its animation.")))),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,"An AnimatedImage is dependent on image drawing, and is considered a fast performing widget on most platforms.",Object(r.b)("br",null),"\nAn AnimatedImage draws images according to the ",Object(r.b)(o.a,{name:"Update Interval",mdxType:"Property"}),". Therefore, a lower ",Object(r.b)(o.a,{name:"Update Interval",mdxType:"Property"})," results in more image draws."),Object(r.b)("p",null,"For more details on image drawing performance, read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/GeneralUIComponentPerformance"}),"General UI Component Performance")," section."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"generated-code"},"Generated Code"),Object(r.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up an AnimatedImage."),Object(r.b)(s.a,{mdxType:"CodeHeader"},"mainViewBase.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n\n    image.setXY(0, 0);\n    image.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_BACKGROUNDS_MAIN_BG_TEXTURE_480X272PX_ID));\n\n    animatedImage.setXY(0, -104);\n    animatedImage.setBitmaps(BITMAP_BUTTERFLY_01_ID, BITMAP_BUTTERFLY_72_ID);\n    animatedImage.setUpdateTicksInterval(2);\n    animatedImage.startAnimation(false, true, true);\n\n    add(image);\n    add(animatedImage);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),Object(r.b)(p.a,{mdxType:"Tip"},"You can use these functions and the others available in the AnimatedImage class in user code. Remember to force a redraw by calling ",Object(r.b)(m.a,{text:"animatedImage.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(r.b)("h3",{id:"user-code"},"User Code"),Object(r.b)("p",null,"The following code example shows how to set up the callback of an AnimatedImage when an animation is done:"),Object(r.b)(s.a,{mdxType:"CodeHeader"},"mainView.hpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<mainView, const touchgfx::AnimatedImage&> animatedImageAnimationDoneCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void animatedImageAnimationDoneCallbackHandler(const touchgfx::AnimatedImage& src);\n};\n\n#endif // MAINVIEW_HPP\n")),Object(r.b)(s.a,{mdxType:"CodeHeader"},"mainView.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView():\n    animatedImageAnimationDoneCallback(this, &mainView::animatedImageAnimationDoneCallbackHandler)\n{\n\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    animatedImage.setDoneAction(animatedImageAnimationDoneCallback);\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::animatedImageAnimationDoneCallbackHandler(const touchgfx::AnimatedImage& src)\n{\n    if (&src == &animatedImage)\n    {\n        //execute code whenever the animation of animatedImage stops\n    }\n}\n")),Object(r.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(r.b)("p",null,"To further explore the AnimatedImage, try creating a new application within TouchGFX Designer with one of the following UI templates:"),Object(r.b)(c.a,{imageSource:"/img/Development/UIDevelopment/UITemplates/AnimatedImageExample.png",caption:"AnimatedImage Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("h2",{id:"api-reference"},"API Reference"),Object(r.b)(b.a,{mdxType:"FurtherReading"},Object(r.b)("li",null,Object(r.b)(d.a,{link:"classtouchgfx_1_1_animated_image.html",mdxType:"API"},"API reference for the AnimatedImage class"))))}f.isMDXComponent=!0},256:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.text)},t}(i.Component);t.a=c},258:function(e,t,n){var a=n(24).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(11)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},259:function(e,t,n){"use strict";n(258);var a=n(5),i=n(0),r=n.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.name)},t}(i.Component);t.a=c},260:function(e,t,n){"use strict";n(261);var a=n(5),i=n(0),r=n.n(i),c=n(257),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return r.a.createElement(c.a,{to:e,target:"_blank"},this.props.children)},t}(i.Component);t.a=b},261:function(e,t,n){"use strict";n(262)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},262:function(e,t,n){var a=n(17),i=n(18),r=n(23),c=/"/g,b=function(e,t,n,a){var i=String(r(e)),b="<"+t;return""!==n&&(b+=" "+n+'="'+String(a).replace(c,"&quot;")+'"'),b+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(b),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);