(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{1230:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(i.Component);t.a=r},1232:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=r},1235:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=n(1230),l=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)},t}(i.Component);t.a=c},1237:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("code",null,this.props.text)},t}(i.Component);t.a=r},1244:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("code",{class:"shortcut"},this.props.text)},t}(i.Component);t.a=r},587:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(9),o=(n(0),n(1229)),r=n(1232),l=n(1244),c=(n(1235),n(1237),n(1231),{id:"simulator",title:"Simulator"}),u={id:"development/ui-development/working-with-touchgfx/simulator",title:"Simulator",description:"Building a TouchGFX UI often involves a lot of tweeking of the graphics details to match the specification of the UI.\r",source:"@site/docs\\development\\ui-development\\working-with-touchgfx\\simulator.mdx",permalink:"/docs/next/development/ui-development/working-with-touchgfx/simulator",version:"next",sidebar:"docs",previous:{title:"Widgets and Containers",permalink:"/docs/next/development/ui-development/working-with-touchgfx/widgets-and-containers"},next:{title:"Compiling & Flashing",permalink:"/docs/next/development/ui-development/working-with-touchgfx/compiling-and-flashing"}},s=[{value:"How To Run",id:"how-to-run",children:[{value:"Using TouchGFX Designer",id:"using-touchgfx-designer",children:[]},{value:"Using TouchGFX Environment",id:"using-touchgfx-environment",children:[]}]},{value:"Simulator Features",id:"simulator-features",children:[]},{value:"Simulator Only User Code",id:"simulator-only-user-code",children:[]}],h={rightToc:s},p="wrapper";function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(p,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Building a TouchGFX UI often involves a lot of tweeking of the graphics details to match the specification of the UI."),Object(o.b)("p",null,"To speed up the development process it is important to have a fast turnaround time when trying out and debugging your application. Flashing a board can often take quite some time so doing this each time you have made a small change to your application will really slow down the development. To alleviate this, the TouchGFX PC simulator is a great addition to your development tools."),Object(o.b)("p",null,"You simply compile your application for your PC and run the application there. The code executed is exactly the same as on target except for the Board Bring Up code and Abstraction Layer which are made for the PC instead of your board. This means that you can test things like placement of widgets, interactions, animations, state machines and so on just as precise as on target. You can even ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"debugging"}),"debug")," your code using IDEs like Visual Studio if you like. Of course things like performance and interactions with real backend systems must be done on your board."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/simulator-example.gif",caption:"Simulator example",mdxType:"Figure"}),Object(o.b)("h2",{id:"how-to-run"},"How To Run"),Object(o.b)("h3",{id:"using-touchgfx-designer"},"Using TouchGFX Designer"),Object(o.b)("p",null,'To launch the simulator from within TouchGFX Designer, simply press the "Run Simulator" button in the top right corner or press ',Object(o.b)(l.a,{text:"F5",mdxType:"Shortcut"})," on your keyboard."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/run-simulator-designer.png",caption:"Launching the simulator from TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("h3",{id:"using-touchgfx-environment"},"Using TouchGFX Environment"),Object(o.b)("p",null,"To launch the simulator using the TouchGFX environment, follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the TouchGFX Environment"),Object(o.b)("li",{parentName:"ol"},"Navigate to the location of your TouchGFX application"),Object(o.b)("li",{parentName:"ol"},"Run the command ",Object(o.b)("inlineCode",{parentName:"li"},"make -f simulator/gcc/Makefile -j6")," to compile the simulator"),Object(o.b)("li",{parentName:"ol"},"Run the command ",Object(o.b)("inlineCode",{parentName:"li"},"./build/bin/simulator.exe")," to launch the simulator")),Object(o.b)("p",null,"Run steps 3 and 4 whenever you have made a change to your TouchGFX application."),Object(o.b)("h2",{id:"simulator-features"},"Simulator Features"),Object(o.b)("p",null,"Apart from capturing mouse input, the TouchGFX simulator also includes other useful features, listed below:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Shortcut"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Feature"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(l.a,{text:"F1",mdxType:"Shortcut"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enables/disables debug info.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(l.a,{text:"F2",mdxType:"Shortcut"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enables/disables highlighting invalidated area.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(l.a,{text:"F3",mdxType:"Shortcut"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Takes a screenshot and places the image under the ",Object(o.b)("inlineCode",{parentName:"td"},"screenshots")," folder.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(l.a,{text:"CTRL + F3",mdxType:"Shortcut"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Takes screenshots of the next 50 frames and places the images under the ",Object(o.b)("inlineCode",{parentName:"td"},"screenshots")," folder.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(l.a,{text:"SHIFT + F3",mdxType:"Shortcut"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Takes a screenshot and places it in your clipboard.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(l.a,{text:"F4",mdxType:"Shortcut"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If a simulator skin is used - enables/disables the simulator skin.",Object(o.b)("br",null),"If a simulator skin is ",Object(o.b)("i",null,"not")," used - enables/disables window border.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)(l.a,{text:"ESC",mdxType:"Shortcut"})),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Close the simulator.")))),Object(o.b)("h2",{id:"simulator-only-user-code"},"Simulator Only User Code"),Object(o.b)("p",null,"If you have some code that should only run when using TouchGFX simulator, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"#IFDEF Simulator")," in your C++ code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"#IFDEF Simulator\n  // Your simulator specific user code here\n#ENDIF\n")),Object(o.b)("p",null,"If you want to output a debug text to the console you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"touchgfx_printf")," function. This is a printf like function that will only be included when building simulator code and thus will not interfere when running on target. Therefore there is no need to use ",Object(o.b)("inlineCode",{parentName:"p"},"#IFDEF Simulator")," in this case."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'int i = 0;\ntouchgfx_printf("Application is running through simulator! \\n");\ntouchgfx_printf("Print our value for integer i = %i \\n", i);\n')))}b.isMDXComponent=!0}}]);