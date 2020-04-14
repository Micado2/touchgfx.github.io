(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return g})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return f}));var r=n(1),a=n(9),o=(n(0),n(264)),i=n(265),b=n(274),c=n(277),s=n(275),p=n(278),l=n(266),d=n(270),m=n(273),u={id:"box-progress",title:"BoxProgress"},g={id:"development/ui-development/ui-components/progress-indicators/box-progress",title:"BoxProgress",description:"import Figure from '@site/components/Figure'",source:"@site/docs\\development\\ui-development\\ui-components\\progress-indicators\\box-progress.mdx",permalink:"/docs/development/ui-development/ui-components/progress-indicators/box-progress",sidebar:"docs",previous:{title:"ScrollWheel",permalink:"/docs/development/ui-development/ui-components/containers/scroll-wheel"},next:{title:"ImageProgress",permalink:"/docs/development/ui-development/ui-components/progress-indicators/image-progress"}},O=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],j={rightToc:O},h="wrapper";function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(h,Object(r.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A BoxProgress shows the current progress by using a simple ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/shapes/box"}),"Box")," as the progress indicator on top of a background ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/images/image"}),"Image"),". The ",Object(o.b)(s.a,{name:"Color",mdxType:"Property"}),", the ",Object(o.b)(s.a,{name:"Alpha",mdxType:"Property"})," of the box and the ",Object(o.b)(s.a,{name:"Direction",mdxType:"Property"})," towards which the box will progress can be configured.\nIt is possible to create a custom background image and change the different parameters of the progress indicator such as the position and the size to fit the custom background image."),Object(o.b)(i.a,{imageSource:"/img/development/ui-development/ui-components/box-progress/widget-appearance.gif",caption:"BoxProgress running in the simulator",mdxType:"Figure"}),Object(o.b)("h2",{id:"widget-group"},"Widget Group"),Object(o.b)("p",null,"The BoxProgress can be found in the Progress Indicators widget group in TouchGFX Designer."),Object(o.b)(i.a,{imageSource:"/img/development/ui-development/ui-components/box-progress/widget-group.png",caption:"BoxProgress in TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"The properties for a BoxProgress in TouchGFX Designer."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Property Group")),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Name")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(s.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(o.b)(l.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Location")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(s.a,{name:"X",mdxType:"Property"})," and ",Object(o.b)(s.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(s.a,{name:"W",mdxType:"Property"})," and ",Object(o.b)(s.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(o.b)("br",null),Object(o.b)(l.a,{text:"The size of a BoxProgress is determined by the size of the selected background image.",mdxType:"InlineNote"}),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(s.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget. ",Object(o.b)("br",null)," ",Object(o.b)(l.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Style")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(s.a,{name:"Style",mdxType:"Property"})," specifies a predefined setup of the widget, that sets select properties to predefined values.",Object(o.b)("br",null),Object(o.b)(l.a,{text:"These styles contain images that are free to use.",mdxType:"InlineNote"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Image & Color")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(s.a,{name:"Background",mdxType:"Property"})," sets the background image.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(s.a,{name:"Progress",mdxType:"Property"})," sets the color of the progress box.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Progress Position")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(s.a,{name:"X",mdxType:"Property"})," and ",Object(o.b)(s.a,{name:"Y",mdxType:"Property"})," coordinates specify the top left corner of the progress box relative to the position of the ProgressIndicator.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(s.a,{name:"W",mdxType:"Property"})," and ",Object(o.b)(s.a,{name:"H",mdxType:"Property"})," specify the width and height of the progress box.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Values")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(s.a,{name:"Range Min",mdxType:"Property"})," and ",Object(o.b)(s.a,{name:"Range Max",mdxType:"Property"})," specify the minimum and maximum integer values of the indicator.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(s.a,{name:"Initial",mdxType:"Property"})," specifies the initial value of the progress indicator.",Object(o.b)(s.a,{name:"Steps Total",mdxType:"Property"})," specifies at what granularity the progress indicator reports new values. For instance, if the progress needs to be reported as 0%, 10%, 20%, ..., 100%, the total value should be set to 10.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(s.a,{name:"Steps Min",mdxType:"Property"})," specifies the minimum steps the progress indicator shows.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Appearance")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(s.a,{name:"Direction",mdxType:"Property"})," specifies in which direction the progress indicator should progress.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(s.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the progress box. ",Object(o.b)(l.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Mixins")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(s.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(s.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(s.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(o.b)(s.a,{name:"Alpha",mdxType:"Property"})," value.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(s.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(o.b)(s.a,{name:"X",mdxType:"Property"})," and ",Object(o.b)(s.a,{name:"Y",mdxType:"Property"})," values.")))),Object(o.b)("h2",{id:"interactions"},"Interactions"),Object(o.b)("p",null,"The actions and triggers supported by the BoxProgress are described in the following sections."),Object(o.b)("h3",{id:"actions"},"Actions"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Widget specific actions")),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Description")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Set value")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Set the value of the progress indicator.")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Standard widget actions")),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Description")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Move widget")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Fade widget")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Hide widget")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Show widget")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(o.b)("h3",{id:"triggers"},"Triggers"),Object(o.b)("p",null,"The BoxProgress does not emit any triggers."),Object(o.b)("h2",{id:"performance"},"Performance"),Object(o.b)("p",null,"A BoxProgress consists of a Box and a background Image. Therefore, the BoxProgress is dependent on image drawing and is considered a fast performing widget on most platforms."),Object(o.b)("p",null,"For more details on image drawing performance, read the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/general-ui-component-performance"}),"General UI Component Performance")," section."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"generated-code"},"Generated Code"),Object(o.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a BoxProgress."),Object(o.b)(m.a,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"boxProgress.setXY(148, 126);\nboxProgress.setProgressIndicatorPosition(2, 2, 180, 16);\nboxProgress.setRange(0, 100);\nboxProgress.setDirection(touchgfx::AbstractDirectionProgress::RIGHT);\nboxProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_PROGRESS_INDICATOR_BG_SQUARE_0_DEGREES_ID));\nboxProgress.setColor(touchgfx::Color::getColorFrom24BitRGB(0, 151, 255));\nboxProgress.setValue(0);\n")),Object(o.b)("h3",{id:"user-code"},"User Code"),Object(o.b)("p",null,"The following example illustrates how to implement the ",Object(o.b)("inlineCode",{parentName:"p"},"handleTickEvent()")," function to simulate progress. Running this code creates the application shown at the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/progress-indicators/box-progress"}),"beginning of this article"),"."),Object(o.b)(m.a,{mdxType:"CodeHeader"},"Screen1View.hpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n};\n")),Object(o.b)(m.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    int currentValue = boxProgress.getValue();\n    int16_t max;\n    int16_t min;\n    boxProgress.getRange(min, max);\n\n    if (currentValue == min)\n    {\n        increase = true;\n    }\n    else if (currentValue == max)\n    {\n        increase = false;\n    }\n\n    int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n    boxProgress.setValue(nextValue);\n}\n")),Object(o.b)(c.a,{mdxType:"Tip"},"You can use these functions and the others available in the BoxProgress class in user code. Remember to force a redraw by calling ",Object(o.b)(p.a,{text:"boxProgress.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(o.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(o.b)("p",null,"To further explore the BoxProgress, try creating a new application within TouchGFX Designer with the following UI template:"),Object(o.b)(i.a,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example.png",caption:"ProgressIndicator Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("h2",{id:"api-reference"},"API Reference"),Object(o.b)(b.a,{mdxType:"FurtherReading"},Object(o.b)("li",null,Object(o.b)(d.a,{link:"classtouchgfx_1_1_box_progress.html",mdxType:"API"},"API reference for the BoxProgress class"))))}f.isMDXComponent=!0},266:function(e,t,n){"use strict";var r=n(5),a=n(0),o=n.n(a),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("i",null,this.props.text)},t}(a.Component);t.a=i},270:function(e,t,n){"use strict";n(271);var r=n(5),a=n(0),o=n.n(a),i=n(267),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return o.a.createElement(i.a,{to:e,target:"_blank"},this.props.children)},t}(a.Component);t.a=b},271:function(e,t,n){"use strict";n(272)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},272:function(e,t,n){var r=n(17),a=n(18),o=n(23),i=/"/g,b=function(e,t,n,r){var a=String(o(e)),b="<"+t;return""!==n&&(b+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),b+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(b),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},275:function(e,t,n){"use strict";n(276);var r=n(5),a=n(0),o=n.n(a),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("i",null,this.props.name)},t}(a.Component);t.a=i},276:function(e,t,n){var r=n(24).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(11)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);