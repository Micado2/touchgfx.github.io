(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return g})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return f}));var r=n(1),a=n(9),i=(n(0),n(270)),o=n(271),c=n(280),b=n(281),s=n(283),l=n(284),p=n(272),d=n(276),u=n(279),m={id:"line-progress",title:"LineProgress"},g={id:"development/ui-development/ui-components/progress-indicators/line-progress",title:"LineProgress",description:"import Figure from '@site/components/Figure'\r",source:"@site/docs\\development\\ui-development\\ui-components\\progress-indicators\\line-progress.mdx",permalink:"/docs/development/ui-development/ui-components/progress-indicators/line-progress",sidebar:"docs",previous:{title:"TextProgress",permalink:"/docs/development/ui-development/ui-components/progress-indicators/text-progress"},next:{title:"CircleProgress",permalink:"/docs/development/ui-development/ui-components/progress-indicators/circle-progress"}},O=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],j={rightToc:O},h="wrapper";function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(h,Object(r.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A LineProgress shows the current progress by using a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/shapes/line"}),"Line")," as the progress indicator on top of a background ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/images/image"}),"Image"),". The line does not need to be either horizontal or vertical, but can start at any coordinate and finish at any coordinate."),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-components/line-progress/widget-appearance.gif",caption:"LineProgress running in the simulator",mdxType:"Figure"}),Object(i.b)("h2",{id:"widget-group"},"Widget Group"),Object(i.b)("p",null,"The LineProgress can be found in the Progress Indicators widget group in TouchGFX Designer."),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-components/line-progress/widget-group.png",caption:"LineProgress in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"The properties for a LineProgress in TouchGFX Designer."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Group")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Name")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(i.b)(p.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Location")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"W",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(i.b)("br",null),Object(i.b)(p.a,{text:"The size of a LineProgress is determined by the size of the selected background image.",mdxType:"InlineNote"}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget. ",Object(i.b)(p.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Style")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Style",mdxType:"Property"})," specifies a predefined setup of the widget, that sets select properties to predefined values.",Object(i.b)("br",null),Object(i.b)(p.a,{text:"These styles contain images that are free to use",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Image & Color")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Background",mdxType:"Property"})," specifies background image.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Image",mdxType:"Property"})," specifies which image to use as fill for the line.",Object(i.b)("br",null),Object(i.b)(p.a,{text:"The image selected will be placed in top left corner of the widget.",mdxType:"InlineNote"}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Color",mdxType:"Property"})," specifies which color to use as fill for the line.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Values")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Range Min",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Range Max",mdxType:"Property"})," specify the minimum and maximum integer values of the indicator.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Initial",mdxType:"Property"})," specifies the initial value of the progress indicator.",Object(i.b)(b.a,{name:"Steps Total",mdxType:"Property"})," specifies at what granularity the progress indicator reports new values. For instance, if the progress needs to be reported as 0%, 10%, 20%, ..., 100%, the total value should be set to 10.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Steps Min",mdxType:"Property"})," specifies the minimum steps the progress indicator shows.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Appearance")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Start Position X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Start Position Y",mdxType:"Property"})," specify the coordinate where the line should start.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"End Position X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"End Position Y",mdxType:"Property"}),"specify the coordinate where the line should end.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Line Width",mdxType:"Property"})," specifies the width of the line.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Cap Style",mdxType:"Property"})," specifies line ending style.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the widget. ",Object(i.b)(p.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Mixins")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(b.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(i.b)(b.a,{name:"Alpha",mdxType:"Property"})," value.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(b.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(i.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(b.a,{name:"Y",mdxType:"Property"})," values.")))),Object(i.b)("h2",{id:"interactions"},"Interactions"),Object(i.b)("p",null,"The actions and triggers supported by the LineProgress are described in the following sections."),Object(i.b)("h3",{id:"actions"},"Actions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Widget specific actions")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Set value")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Sets the value of a progress indicator to a desired value")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Standard widget actions")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Move widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Fade widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Hide widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Show widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(i.b)("h3",{id:"triggers"},"Triggers"),Object(i.b)("p",null,"The LineProgress does not emit any triggers."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"A LineProgress consists of an ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/images/image"}),"Image")," and a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/shapes/line"}),"Line"),". A Line is a CanvasWidget and is heavily dependent on the MCU for rendering. Therefore, the LineProgress is considered a demanding widget on most platforms."),Object(i.b)("p",null,"For more details on CanvasWidget drawing performance, read the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/general-ui-component-performance"}),"UI Component Performance Overview"),"."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"generated-code"},"Generated Code"),Object(i.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a LineProgress."),Object(i.b)(u.a,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    touchgfx::CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n\n    lineProgress.setXY(45, 71);\n    lineProgress.setProgressIndicatorPosition(0, 0, 391, 130);\n    lineProgress.setRange(0, 100);\n    lineProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_LARGE_PROGRESS_INDICATOR_BG_ROUND_DEGREES_ID));\n    lineProgressPainter.setColor(touchgfx::Color::getColorFrom24BitRGB(0, 151, 255));\n    lineProgress.setPainter(lineProgressPainter);\n    lineProgress.setStart(17, 17);\n    lineProgress.setEnd(374, 113);\n    lineProgress.setLineWidth(30);\n    lineProgress.setLineEndingStyle(touchgfx::Line::ROUND_CAP_ENDING);\n    lineProgress.setValue(60);\n\n    add(lineProgress);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),Object(i.b)(s.a,{mdxType:"Tip"},Object(i.b)("li",null,"You can use these functions and the others available in the LineProgress class in user code. Remember to force a redraw by calling ",Object(i.b)(l.a,{text:"lineProgress.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget.")),Object(i.b)("h3",{id:"user-code"},"User Code"),Object(i.b)("p",null,"The following example illustrates how to implement the ",Object(i.b)("inlineCode",{parentName:"p"},"handleTickEvent()")," function to simulate progress. Running this code creates the application shown at the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/progress-indicators/line-progress"}),"beginning of this article"),"."),Object(i.b)(u.a,{mdxType:"CodeHeader"},"Screen1View.hpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n};\n")),Object(i.b)(u.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    int currentValue = lineProgress.getValue();\n    int16_t max;\n    int16_t min;\n    lineProgress.getRange(min, max);\n\n    if (currentValue == min)\n    {\n        increase = true;\n    }\n    else if (currentValue == max)\n    {\n        increase = false;\n    }\n\n    int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n    lineProgress.setValue(nextValue);\n}\n")),Object(i.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(i.b)("p",null,"To further explore the LineProgress, try creating a new application within TouchGFX Designer with one of the following UI templates:"),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example.png",caption:"ProgressIndicator Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)(c.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,Object(i.b)(d.a,{link:"classtouchgfx_1_1_line_progress.html",mdxType:"API"},"API reference for the LineProgress class"))))}f.isMDXComponent=!0},272:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.text)},t}(a.Component);t.a=o},276:function(e,t,n){"use strict";n(277);var r=n(5),a=n(0),i=n.n(a),o=n(273),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return(i.a.createElement(o.a,{to:e,target:"_blank"},this.props.children))},t}(a.Component);t.a=c},277:function(e,t,n){"use strict";n(278)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},278:function(e,t,n){var r=n(12),a=n(13),i=n(24),o=/"/g,c=function(e,t,n,r){var a=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},281:function(e,t,n){"use strict";n(282);var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.name)},t}(a.Component);t.a=o},282:function(e,t,n){var r=n(25).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);