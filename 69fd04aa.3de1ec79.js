(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{303:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(9),r=(n(0),n(508)),o=n(511),c=n(527),l=(n(514),n(516),n(519),{id:"simulator",title:"Simulator"}),u={id:"development/ui-development/working-with-touchgfx/simulator",title:"Simulator",description:"import Figure from '@site/components/Figure'\r",source:"@site/docs\\development\\ui-development\\working-with-touchgfx\\simulator.mdx",permalink:"/docs/development/ui-development/working-with-touchgfx/simulator",sidebar:"docs",previous:{title:"Widgets and Containers",permalink:"/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"},next:{title:"Compiling & Flashing",permalink:"/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"}},s=[{value:"How To Run",id:"how-to-run",children:[{value:"Using TouchGFX Designer",id:"using-touchgfx-designer",children:[]},{value:"Using TouchGFX Environment",id:"using-touchgfx-environment",children:[]}]},{value:"Simulator Features",id:"simulator-features",children:[]},{value:"Simulator Only User Code",id:"simulator-only-user-code",children:[]}],p={rightToc:s},h="wrapper";function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(h,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Building a TouchGFX UI often involves a lot of tweeking of the graphics details to match the specification of the UI."),Object(r.b)("p",null,"To speed up the development process it is important to have a fast turnaround time when trying out and debugging your application. Flashing a board can often take quite some time so doing this each time you have made a small change to your application will really slow down the development. To alleviate this, the TouchGFX PC simulator is a great addition to your development tools."),Object(r.b)("p",null,"You simply compile your application for your PC and run the application there. The code executed is exactly the same as on target except for the Board Bring Up code and Abstraction Layer which are made for the PC instead of your board. This means that you can test things like placement of widgets, interactions, animations, state machines and so on just as precise as on target. You can even ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/working-with-touchgfx/debugging"}),"debug")," your code using IDEs like Visual Studio if you like. Of course things like performance and interactions with real backend systems must be done on your board."),Object(r.b)(o.a,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/simulator-example.gif",caption:"Simulator example",mdxType:"Figure"}),Object(r.b)("h2",{id:"how-to-run"},"How To Run"),Object(r.b)("h3",{id:"using-touchgfx-designer"},"Using TouchGFX Designer"),Object(r.b)("p",null,'To launch the simulator from within TouchGFX Designer, simply press the "Run Simulator" button in the top right corner or press ',Object(r.b)(c.a,{text:"F5",mdxType:"Shortcut"})," on your keyboard."),Object(r.b)(o.a,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/run-simulator-designer.png",caption:"Launching the simulator from TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("h3",{id:"using-touchgfx-environment"},"Using TouchGFX Environment"),Object(r.b)("p",null,"To launch the simulator using the TouchGFX environment, follow these steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open the TouchGFX Environment"),Object(r.b)("li",{parentName:"ol"},"Navigate to the location of your TouchGFX application"),Object(r.b)("li",{parentName:"ol"},"Run the command ",Object(r.b)("inlineCode",{parentName:"li"},"make -f simulator/gcc/Makefile -j6")," to compile the simulator"),Object(r.b)("li",{parentName:"ol"},"Run the command ",Object(r.b)("inlineCode",{parentName:"li"},"./build/bin/simulator.exe")," to launch the simulator")),Object(r.b)("p",null,"Run steps 3 and 4 whenever you have made a change to your TouchGFX application."),Object(r.b)("h2",{id:"simulator-features"},"Simulator Features"),Object(r.b)("p",null,"Apart from capturing mouse input, the TouchGFX simulator also includes other useful features, listed below:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Shortcut"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Feature"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(c.a,{text:"F1",mdxType:"Shortcut"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enables/disables debug info.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(c.a,{text:"F2",mdxType:"Shortcut"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enables/disables highlighting invalidated area.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(c.a,{text:"F3",mdxType:"Shortcut"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Takes a screenshot and places the image under the ",Object(r.b)("inlineCode",{parentName:"td"},"screenshots")," folder.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(c.a,{text:"CTRL + F3",mdxType:"Shortcut"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Takes screenshots of the next 50 frames and places the images under the ",Object(r.b)("inlineCode",{parentName:"td"},"screenshots")," folder.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(c.a,{text:"SHIFT + F3",mdxType:"Shortcut"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Takes a screenshot and places it in your clipboard.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(c.a,{text:"F4",mdxType:"Shortcut"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If a simulator skin is used - enables/disables the simulator skin.",Object(r.b)("br",null),"If a simulator skin is ",Object(r.b)("i",null,"not")," used - enables/disables window border.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(c.a,{text:"ESC",mdxType:"Shortcut"})),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Close the simulator.")))),Object(r.b)("h2",{id:"simulator-only-user-code"},"Simulator Only User Code"),Object(r.b)("p",null,"If you have some code that should only run when using TouchGFX simulator, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"#IFDEF Simulator")," in your C++ code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"#IFDEF Simulator\n  // Your simulator specific user code here\n#ENDIF\n")),Object(r.b)("p",null,"If you want to output a debug text to the console you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"touchgfx_printf")," function. This is a printf like function that will only be included when building simulator code and thus will not interfere when running on target. Therefore there is no need to use ",Object(r.b)("inlineCode",{parentName:"p"},"#IFDEF Simulator")," in this case."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'int i = 0;\ntouchgfx_printf("Application is running through simulator! \\n");\ntouchgfx_printf("Print our value for integer i = %i \\n", i);\n')))}b.isMDXComponent=!0},509:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(r.a.createElement("div",{class:e},r.a.createElement("div",{class:"highlight-heading"},r.a.createElement("h5",null,r.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(i.Component);t.a=o},511:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?r.a.createElement("div",{class:"figure noshadow"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption)):r.a.createElement("div",{class:"figure"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=o},514:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=n(509),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(i.Component);t.a=l},516:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("code",null,this.props.text)},t}(i.Component);t.a=o},519:function(e,t,n){"use strict";n(520);var a=n(5),i=n(0),r=n.n(i),o=n(510),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="/docs/api/"+this.props.link;return(r.a.createElement(o.a,{to:e},this.props.children))},t}(i.Component);t.a=c},520:function(e,t,n){"use strict";n(521)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},521:function(e,t,n){var a=n(12),i=n(13),r=n(24),o=/"/g,c=function(e,t,n,a){var i=String(r(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},527:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("code",{class:"shortcut"},this.props.text)},t}(i.Component);t.a=o}}]);