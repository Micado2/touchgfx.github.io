(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return u}));var i=n(1),a=n(9),o=(n(0),n(261)),c=n(264),r=(n(271),n(262)),s=n(268),l=n(273),d={id:"graphics-engine",title:"Graphics Engine"},p={id:"basic-concepts/graphics-engine",title:"Graphics Engine",description:"import Link from '@docusaurus/Link';",source:"@site/docs\\basic-concepts\\graphics-engine.mdx",permalink:"/docs/basic-concepts/graphics-engine",sidebar:"docs",previous:{title:"Framebuffer",permalink:"/docs/basic-concepts/framebuffer"},next:{title:"Main Loop",permalink:"/docs/basic-concepts/rendering"}},m=[{value:"Scene model",id:"scene-model",children:[]},{value:"Manipulate the model",id:"manipulate-the-model",children:[]},{value:"Issue drawing commands",id:"issue-drawing-commands",children:[]},{value:"Main Loop",id:"main-loop",children:[]},{value:"Platform adaptibility",id:"platform-adaptibility",children:[]}],h={rightToc:m},b="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(b,Object(i.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"TouchGFX graphics engine's main responsibility is drawing graphics on the display of an embedded device."),Object(o.b)("p",null,"This section will give an overview of what kind of graphics engine TouchGFX is and provide some background on why it is this way."),Object(o.b)("h2",{id:"scene-model"},"Scene model"),Object(o.b)("p",null,"Graphics engines can be divided into two main categories."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Immediate mode graphics engines")," provide an API that enables an application to directly draw things to the display. It is the responsibility of the application to ensure that the correct drawing operations are invoked at the right time."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Retained mode graphics engines")," let the user manipulate an abstract model of the components being displayed. The engine takes care of translating this component model into the correct graphics drawing operations at the right times.")),Object(o.b)("p",null,"TouchGFX follows the retained mode graphics principles. In short this means that TouchGFX provides a model that can be manipulated by the user and TouchGFX then takes care of translating from this model into an optimized set of rendering method calls."),Object(o.b)(r.a,{imageSource:"/img/basic-concepts/retained-mode-graphics2.svg",caption:"Retained mode graphics",noShadow:"true",width:480,mdxType:"Figure"}),Object(o.b)("p",null,"The benefits of TouchGFX being retained are many. Primary ones are"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Ease of use:")," A retained graphics engine is easy to use. The user adresses the configuration of components on screen, by invoking methods on the internal model and does not think in terms of actual drawing operations."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Performance:")," TouchGFX analyses the scene model and optimizes the drawing calls needed to realize the model on screen. This includes deliberately not drawing hidden components, drawing and transferring only changed parts of components, managing framebuffers, and much more."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"State management:")," TouchGFX keeps track of which part of the scene model is active. This in turn makes it easier for the user to optimize the scene model contents.")),Object(o.b)("p",null,"The main drawback of TouchGFX adhering to the retained mode graphics scheme is"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Memory consumption")," representing the scene model takes up some memory. TouchGFX reaches its performance levels, typically rendering 60 frames per second, by analyzing the scene model and optimizing the corresponding rendering done.\nGreat effort has gone into reducing the amount of memory used by the scene model of TouchGFX. In typical applications the amount of memory for this model is well below one kilobyte.")),Object(o.b)("h2",{id:"manipulate-the-model"},"Manipulate the model"),Object(o.b)("p",null,"The scene model consists of components."),Object(o.b)(r.a,{imageSource:"/img/basic-concepts/scene-model.svg",caption:"A tree of widgets",noShadow:"true",width:280,mdxType:"Figure"}),Object(o.b)("p",null,"Each of the components in the model has exactly one associated parent component.\nThe parent component itself is also part of the scene model. Such a model is widely referred to as a ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Tree_(data_structure)"}),"tree"),"."),Object(o.b)("p",null,"We will often refer to a component in this tree as a UI component or a widget."),Object(o.b)("p",null,"From the point of view of the application the displayed graphics are updated by setting up and manipulating the widgets in the scene model.\nAn example setup of a button, with position, images and added to the scene model, is"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"myButton.setXY(100,50);\nmyButton.setBitmaps(Bitmap(BITMAP_BUTTON_RELEASED_ID), Bitmap(BITMAP_BUTTON_PRESSED_ID));\nadd(myButton);\n")),Object(o.b)("h2",{id:"issue-drawing-commands"},"Issue drawing commands"),Object(o.b)("p",null,"Ultimately, when rendering the scene model, TouchGFX will utilize its drawing API. This drawing API has methods for drawing graphics primitives, such as boxes, images, texts, lines, polygons, textured triangles, ..."),Object(o.b)("p",null,"As an example the ",Object(o.b)(c.a,{to:"/docs/development/ui-development/ui-components/buttons/button",mdxType:"Link"},"Button")," widget in TouchGFX, when rendered, uses the ",Object(o.b)(s.a,{link:"classtouchgfx_1_1_l_c_d.html#a1fcbaa593af61d290572f3cc6cadb4b5",mdxType:"API"},"drawPartialBitmap method")," for drawing images. The source code for the drawing of the button widget in TouchGFX looks close to"),Object(o.b)(l.a,{mdxType:"CodeHeader"},"touchgfx/widgets/button.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"void Button::draw(const Rect& invalidatedArea) const\n{\n    // calculate the part of the bitmap to draw\n    api.drawPartialBitmap(bitmap, x, y, part, alpha);\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"inspect the actual source in ",Object(o.b)("inlineCode",{parentName:"em"},"touchgfx/widgets/button.cpp")," for details")),Object(o.b)("p",null,"TouchGFX includes optimized implementations of the drawing API.\nThe ",Object(o.b)(s.a,{link:"classtouchgfx_1_1_l_c_d.html#a1fcbaa593af61d290572f3cc6cadb4b5",mdxType:"API"},"drawPartialBitmap")," method for instance utilizes the underlying hardware (Chrom-ART if available) to draw the bitmap."),Object(o.b)("p",null,"One can utilize these API drawing methods when extending the scene model with new types of widgets. See the section on creating your own ",Object(o.b)(c.a,{to:"/docs/development/ui-development/touchgfx-engine-features/custom-widgets",mdxType:"Link"},"custom widget"),"."),Object(o.b)("p",null,"The implementation of the drawing API methods is platform specific and highly optimized for each specific MCU."),Object(o.b)("h2",{id:"main-loop"},"Main Loop"),Object(o.b)("p",null,"The workings of many game engines, graphics engines and in particular TouchGFX can be thought of as an infinite loop."),Object(o.b)("p",null,"Within the main loop of TouchGFX there are three main activities"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Collect events"),"\nCollect events from the touch screen, presses of physical buttons, messages from backend system, ..."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Update scene model"),"\nReact to the collected events, updating the positions, animations, colors, images, ... of the model"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Render scene model"),"\nRedraw the parts of the model that has been updated and make them appear on the display")),Object(o.b)("p",null,"A diagrammatic version of the main loop is"),Object(o.b)(r.a,{imageSource:"/img/basic-concepts/engine-cycle.png",caption:"Main loop",noShadow:"true",width:320,mdxType:"Figure"}),Object(o.b)("p",null,"Each execution of the main loop is denoted a tick of the application."),Object(o.b)("h2",{id:"platform-adaptibility"},"Platform adaptibility"),Object(o.b)("p",null,"As TouchGFX is designed for running on all STM32 embedded setups the above activities can be tailored."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The collection of events is handled by a dedicated abstraction layer. The tailoring of this layer is the subject of the section on ",Object(o.b)(c.a,{to:"/docs/development/touchgfx-hal-development/touchgfx-al-development-Introduction",mdxType:"Link"},"TouchGFX AL Development"),"."),Object(o.b)("li",{parentName:"ul"},"The updating of the model is completely up to the application. The details on how to do this update is the subject of ",Object(o.b)(c.a,{to:"/docs/development/ui-development/ui-development-introduction",mdxType:"Link"},"UI Development"),"."),Object(o.b)("li",{parentName:"ul"},"The rendering of graphics to the framebuffer is handled by TouchGFX and will in general not need to be customized. The transferring of the pixels in the framebuffer to the display is platform specific, see ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/development/board-bring-up/board-introduction"}),"Board Bring Up")," and ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/development/touchgfx-hal-development/touchgfx-al-development-Introduction"}),"TouchGFX AL Development")," for how to customize this to specific platforms.")),Object(o.b)("p",null,"Read on to get more specifics on the main loop of TouchGFX."))}u.isMDXComponent=!0},268:function(e,t,n){"use strict";n(269);var i=n(5),a=n(0),o=n.n(a),c=n(264),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return o.a.createElement(c.a,{to:e,target:"_blank"},this.props.children)},t}(a.Component);t.a=r},269:function(e,t,n){"use strict";n(270)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},270:function(e,t,n){var i=n(17),a=n(18),o=n(23),c=/"/g,r=function(e,t,n,i){var a=String(o(e)),r="<"+t;return""!==n&&(r+=" "+n+'="'+String(i).replace(c,"&quot;")+'"'),r+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(r),i(i.P+i.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);