(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return g})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return f}));var r=n(1),a=n(9),o=(n(0),n(208)),i=n(209),c=n(212),s=n(213),b=n(216),p=n(215),l=n(214),d=n(218),u=n(221),m={id:"BoxProgress",title:"BoxProgress"},g={id:"Development/UIDevelopment/UIComponents/ProgressIndicators/BoxProgress",title:"BoxProgress",description:"import Figure from '@site/components/Figure'",source:"@site/docs\\Development\\UIDevelopment\\UIComponents\\ProgressIndicators\\BoxProgress.mdx",permalink:"/docs/Development/UIDevelopment/UIComponents/ProgressIndicators/BoxProgress",sidebar:"docs",previous:{title:"ScrollWheel",permalink:"/docs/Development/UIDevelopment/UIComponents/Containers/ScrollWheel"},next:{title:"ImageProgress",permalink:"/docs/Development/UIDevelopment/UIComponents/ProgressIndicators/ImageProgress"}},h=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],O={rightToc:h},j="wrapper";function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(j,Object(r.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A BoxProgress shows the current progress by using a simple ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/Shapes/Box"}),"Box")," as the progress indicator on top of a background ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/Images/Image"}),"Image"),". The ",Object(o.b)(b.a,{name:"Color",mdxType:"Property"}),", the ",Object(o.b)(b.a,{name:"Alpha",mdxType:"Property"})," of the box and the ",Object(o.b)(b.a,{name:"Direction",mdxType:"Property"})," towards which the box will progress can be configured.\nIt is possible to create a custom background image and change the different parameters of the progress indicator such as the position and the size to fit the custom background image."),Object(o.b)(i.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/BoxProgress/WidgetAppearance.gif",caption:"BoxProgress running in the simulator",mdxType:"Figure"}),Object(o.b)("h2",{id:"widget-group"},"Widget Group"),Object(o.b)("p",null,"The BoxProgress can be found in the Progress Indicators widget group in TouchGFX Designer."),Object(o.b)(i.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/BoxProgress/WidgetGroup.png",caption:"BoxProgress in TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"The properties for a BoxProgress in TouchGFX Designer."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Property Group")),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Name")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(o.b)(l.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Location")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(o.b)(b.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"W",mdxType:"Property"})," and ",Object(o.b)(b.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(o.b)("br",null),Object(o.b)(l.a,{text:"The size of a LineProgress is determined by the size of the selected background image.",mdxType:"InlineNote"}),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget. ",Object(o.b)("br",null)," ",Object(o.b)(l.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Style")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"Style",mdxType:"Property"})," specifies a predefined setup of the widget, that sets select properties to predefined values.",Object(o.b)("br",null),Object(o.b)(l.a,{text:"These styles contain images that are free to use.",mdxType:"InlineNote"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Image & Color")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"Background",mdxType:"Property"})," sets the background image.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"Progress",mdxType:"Property"})," sets the color of the progress box.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Progress Position")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(o.b)(b.a,{name:"Y",mdxType:"Property"})," coordinates specify the top left corner of the progress box relative to the position of the ProgressIndicator.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"W",mdxType:"Property"})," and ",Object(o.b)(b.a,{name:"H",mdxType:"Property"})," specify the width and height of the progress box.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Values")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"Range Min",mdxType:"Property"})," and ",Object(o.b)(b.a,{name:"Range Max",mdxType:"Property"})," specify the minimum and maximum integer values of the indicator.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"Initial",mdxType:"Property"})," specifies the initial value of the progress indicator.",Object(o.b)(b.a,{name:"Steps Total",mdxType:"Property"})," specifies at what granularity the progress indicator reports new values. For instance, if the progress needs to be reported as 0%, 10%, 20%, ..., 100%, the total value should be set to 10.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"Steps Min",mdxType:"Property"})," specifies the minimum steps the progress indicator shows.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Appearance")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"Direction",mdxType:"Property"})," specifies in which direction the progress indicator should progress.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the progress box. ",Object(o.b)(l.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Mixins")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)(b.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(o.b)(b.a,{name:"Alpha",mdxType:"Property"})," value.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)(b.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(o.b)(b.a,{name:"X",mdxType:"Property"})," and ",Object(o.b)(b.a,{name:"Y",mdxType:"Property"})," values.")))),Object(o.b)("h2",{id:"interactions"},"Interactions"),Object(o.b)("p",null,"The actions and triggers supported by the BoxProgress are described in the following sections."),Object(o.b)("h3",{id:"actions"},"Actions"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Widget specific actions")),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Description")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Set value")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Set the value of the progress indicator.")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Standard widget actions")),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Description")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Move widget")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Fade widget")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Hide widget")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Show widget")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(o.b)("h3",{id:"triggers"},"Triggers"),Object(o.b)("p",null,"The BoxProgress does not emit any triggers."),Object(o.b)("h2",{id:"performance"},"Performance"),Object(o.b)("p",null,"A BoxProgress consists of a Box and a background Image. Therefore, the BoxProgress is dependent on image drawing and is considered a fast performing widget on most platforms."),Object(o.b)("p",null,"For more details on image drawing performance, read the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/GeneralUIComponentPerformance"}),"General UI Component Performance")," section."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"generated-code"},"Generated Code"),Object(o.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a BoxProgress."),Object(o.b)(u.a,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"boxProgress.setXY(148, 126);\nboxProgress.setProgressIndicatorPosition(2, 2, 180, 16);\nboxProgress.setRange(0, 100);\nboxProgress.setDirection(touchgfx::AbstractDirectionProgress::RIGHT);\nboxProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_PROGRESS_INDICATOR_BG_SQUARE_0_DEGREES_ID));\nboxProgress.setColor(touchgfx::Color::getColorFrom24BitRGB(0, 151, 255));\nboxProgress.setValue(0);\n")),Object(o.b)("h3",{id:"user-code"},"User Code"),Object(o.b)("p",null,"The following example illustrates how to implement the ",Object(o.b)("inlineCode",{parentName:"p"},"handleTickEvent()")," function to simulate progress. Running this code creates the application shown at the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/ProgressIndicators/BoxProgress"}),"beginning of this article"),"."),Object(o.b)(u.a,{mdxType:"CodeHeader"},"Screen1View.hpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n};\n")),Object(o.b)(u.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    int currentValue = boxProgress.getValue();\n    int16_t max;\n    int16_t min;\n    boxProgress.getRange(min, max);\n\n    if (currentValue == min)\n    {\n        increase = true;\n    }\n    else if (currentValue == max)\n    {\n        increase = false;\n    }\n\n    int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n    boxProgress.setValue(nextValue);\n}\n")),Object(o.b)(s.a,{mdxType:"Tip"},"You can use these functions and the others available in the BoxProgress class in user code. Remember to force a redraw by calling ",Object(o.b)(p.a,{text:"boxProgress.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(o.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(o.b)("p",null,"To further explore the BoxProgress, try creating a new application within TouchGFX Designer with the following UI template:"),Object(o.b)(i.a,{imageSource:"/img/Development/UIDevelopment/UITemplates/ProgressIndicatorExample.png",caption:"ProgressIndicator Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("h2",{id:"api-reference"},"API Reference"),Object(o.b)(c.a,{mdxType:"FurtherReading"},Object(o.b)("li",null,Object(o.b)(d.a,{link:"classtouchgfx_1_1_box_progress.html",mdxType:"API"},"API reference for the BoxProgress class"))))}f.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,m=l["".concat(i,".").concat(d)]||l[d]||u[d]||o;return n?a.a.createElement(m,c({ref:t},b,{components:n})):a.a.createElement(m,c({ref:t},b))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},209:function(e,t,n){"use strict";var r=n(5),a=n(0),o=n.n(a),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource}),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource}),o.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=i},210:function(e,t,n){"use strict";var r=n(5),a=n(0),o=n.n(a),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children))},t}(a.Component);t.a=i},211:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(34),c=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,s=e.href,b=n||s,p=c.test(b),l=Object(a.useRef)(!1),d="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(a.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(b),function(){d&&t&&t.disconnect()}}),[b,d,p]),b&&p?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){l.current||(window.docusaurus.preload(b),l.current=!0)},innerRef:function(e){var n,r;d&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:b})):o.a.createElement("a",Object(r.a)({},e,{href:b}))}},212:function(e,t,n){"use strict";var r=n(5),a=n(0),o=n.n(a),i=n(210),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(a.Component);t.a=s},213:function(e,t,n){"use strict";var r=n(5),a=n(0),o=n.n(a),i=n(210),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:c},this.props.children)},t}(a.Component);t.a=s},214:function(e,t,n){"use strict";var r=n(5),a=n(0),o=n.n(a),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("i",null,this.props.text)},t}(a.Component);t.a=i},215:function(e,t,n){"use strict";var r=n(5),a=n(0),o=n.n(a),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("code",null,this.props.text)},t}(a.Component);t.a=i},216:function(e,t,n){"use strict";n(217);var r=n(5),a=n(0),o=n.n(a),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("i",null,this.props.name)},t}(a.Component);t.a=i},217:function(e,t,n){var r=n(24).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(11)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},218:function(e,t,n){"use strict";n(219);var r=n(5),a=n(0),o=n.n(a),i=n(211),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return o.a.createElement(i.a,{to:e,target:"_blank"},this.props.children)},t}(a.Component);t.a=c},219:function(e,t,n){"use strict";n(220)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},220:function(e,t,n){var r=n(17),a=n(18),o=n(23),i=/"/g,c=function(e,t,n,r){var a=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},221:function(e,t,n){"use strict";var r=n(5),a=n(0),o=n.n(a),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{class:"code-header"},o.a.createElement("h5",null,this.props.children))},t}(a.Component);t.a=i}}]);