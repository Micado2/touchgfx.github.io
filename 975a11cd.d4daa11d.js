(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{360:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(9),o=(a(0),a(507)),i=a(509),l=a(510),c=a(520),b=(a(514),a(523),{id:"board-introduction",title:"Board Bring Up Introduction"}),d={id:"development/board-bring-up/board-introduction",title:"Board Bring Up Introduction",description:'<Figure imageSource="/img/development/board-bring-up/activities-selected-001.png" caption="Project activity" noShadow={true} width="600"/>\r',source:"@site/docs\\development\\board-bring-up\\board-introduction.mdx",permalink:"/docs/development/board-bring-up/board-introduction",sidebar:"docs",previous:{title:"External Memories",permalink:"/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"},next:{title:"1. Create Project",permalink:"/docs/development/board-bring-up/how-to/01-create-project"}},s=[{value:"Tools of the trade",id:"tools-of-the-trade",children:[]},{value:"Verification of Functionality",id:"verification-of-functionality",children:[]},{value:"Overall Process",id:"overall-process",children:[]}],p={rightToc:s},h="wrapper";function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(h,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l.a,{imageSource:"/img/development/board-bring-up/activities-selected-001.png",caption:"Project activity",noShadow:!0,width:"600",mdxType:"Figure"}),Object(o.b)("p",null,"This chapter will help you through the board bring up phase of\nstarting TouchGFX programming on a new platform. Bringing up the\nboard means making sure that all necessary parts of the board and\ncorresponding drivers are working correctly before TouchGFX is added\nto the mix."),Object(o.b)("p",null,"If you already have a working board with a display, many of the\nactivities in this phase will be easy. If you have a completely new custom\nmade board, you should expect that this phase will take some days to\ncomplete. The work does normally pay off as an unstable platform makes\nit difficult to write good applications. A stable and proven platform\non the other hand allows you to concentrate on the application."),Object(o.b)("p",null,"This chapter is for you if are a developer with the task of ensuring\nthat your hardware and low-level software components on the board are\nworking as expected.\nThis chapter is not for you if you are concerned only with developing\nthe actual UI of your application."),Object(o.b)("p",null,"In bringing up your board, you should have a thorough understanding of the components and peripherals on your board, the connections between all these, the protocols they communicate via and the driver code available and/or needed for each one."),Object(o.b)("p",null,"The next chapter ",Object(o.b)(i.a,{to:"/docs/development/touchgfx-hal-development/touchgfx-al-development-introduction",mdxType:"Link"},"TouchGFX AL Development")," discusses how to create the abstraction layer that allows TouchGFX to run on top of your hardware and drivers."),Object(o.b)("h2",{id:"tools-of-the-trade"},"Tools of the trade"),Object(o.b)("p",null,"Some important tools when bringing up an STM32 based board are listed in the table below."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tool"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"STM32CubeMX"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An easy to use tool for configuration of the MCU and generation of initialization source code for a project and internal peripherals.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"STM32Cube Firmware Package"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Cube Firmware for your MCU family contains many example projects and applications that show how to use various peripherals.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Vendor datasheets"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The datasheets for your external devices, like the display or flash, contain important information such as timing and voltage for correct initialisation of both MCU (e.g. through CubeMX) and the external device.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Vendor driver code"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To save time you should request example code for your external devices from the vendor. The driver code often needs to be ported to your STM32 MCU, but this is often simpler than writing driver code from scratch.")))),Object(o.b)("p",null,"All the work done in board bring up phase is not dependent on TouchGFX and should not involve any TouchGFX code. Instead the work and the resulting code will serve as a solid foundation for developing the TouchGFX Abstraction Layer."),Object(o.b)("p",null,"The primary goal is to make sure that your hardware and lower-level software is in fact working in accordance with your expectations for the final application."),Object(o.b)("h2",{id:"verification-of-functionality"},"Verification of Functionality"),Object(o.b)("p",null,"The code produced during the board bring up, in form of one or more test projects will serve two purposes:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Abstraction Layer"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The board initialization code is the foundation upon which we will build the TouchGFX AL and ultimately the working UI application")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Test code"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The verification code written accompanying the board initialization code, will be the ultimate place to go to if/when things do not act as expected. During the board bring up phase you will create a number of small verification programs ensuring that the board and each particular component are working as expected. These verification programs will be of great value when progressing, they can be revisited and enhanced if/when things become uncertain.")))),Object(o.b)("p",null,"Due to the above two reasons it can be very beneficial to save the verification programs systematically. This will allow you to use the test programs again later. For example to test new revisions of your hardware or to find the root cause, when your larger applications are unexpectedly failing. It is also recommended to make systematic notes of any measurements, e.g. memory bandwidth, done during development."),Object(o.b)(l.a,{imageSource:"/img/development/board-bring-up/components-selected-001.png",caption:"Board Initialisation Code is the bases for the TouchGFX AL",noShadow:!0,width:"600",mdxType:"Figure"}),Object(o.b)("h2",{id:"overall-process"},"Overall Process"),Object(o.b)("p",null,"Since we cannot know the concrete makeup of your hardware the following ",Object(o.b)("strong",{parentName:"p"},Object(o.b)(i.a,{to:"/docs/development/board-bring-up/how-to/01-create-project",mdxType:"Link"},"How To"))," guide will be a general step-by-step guide to bring up and prepare boards to run TouchGFX."),Object(o.b)("p",null,"Each step of the guide will be concerned with one particular part of your hardware and/or software components and the bring up of this. One example of a custom component part of your hardware could be the touch controller. The overall goal is to communicate with the touch controller to get information on any touches on the display. The specific commands to send to the touch controller depends on the specific controller you are using on your hardware, so the guide cannot provide the complete driver. For this you need to combine the guide with the information in your touch controller datasheet."),Object(o.b)(c.a,{mdxType:"Note"},"When reading and performing the step-by-step guide for your custom board bring up, we recommend that you:",Object(o.b)("ul",null,Object(o.b)("li",null,"do one step at the time"),Object(o.b)("li",null,"verify each step thoroughly before moving on"),Object(o.b)("li",null,"use the guide as a means for debugging, when something is not working as intended, or go back and revisit previous steps to make sure you did not break those steps"),Object(o.b)("li",null,"do not be alarmed if you experience unexpected behaviour - bringing up a board is a non trivial task"))),Object(o.b)("p",null,"Each step in the guide will follow the following structure:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Motivation"),Object(o.b)("br",{parentName:"li"}),"This part will explain the step and motivate why the step is an\nimportant step in preparing for running TouchGFX on your\nhardware. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Goal"),Object(o.b)("br",{parentName:"li"}),"The goal part lists the goals for this step. A list of verification\npoints details the specific tests that you should perform. These\nverification points ensures that your software implements the\nrequirements needed to running TouchGFX sucessfully on your\nhardware.  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Prerequisites"),Object(o.b)("br",{parentName:"li"}),"Here we list items that are required to perform the tasks."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Do"),Object(o.b)("br",{parentName:"li"}),"This part explains as concrete as possible how to write the software\nrequired to configure and use the hardware. For some steps it is not\npossible to be very precise as the software depends a lot on the\nhardware you use. In that case this part lists the steps on a higher\nlevel and you must find the details relevant for your hardware yourself.")),Object(o.b)("p",null,"The individual how-to steps are:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Step"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Content"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/development/board-bring-up/how-to/01-create-project"}),"Create Project")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Create an empty project in CubeMX")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/development/board-bring-up/how-to/02-cpu-running"}),"CPU Running")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ensure that the MCU is running at the desired speed")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/development/board-bring-up/how-to/03-display-internal"}),"Framebuffer in internal RAM")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allocate a framebuffer in internal RAM and transmit it to the display")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/development/board-bring-up/how-to/04-enable-external-ram"}),"External RAM")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable the external RAM")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/development/board-bring-up/how-to/05-display-external"}),"Framebuffer in external RAM")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Move the framebuffer to external RAM and transmit it to the display")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/development/board-bring-up/how-to/06-flash-external-addressable"}),"External addressable flash")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable external memory-mapped flash")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable"}),"External block mode flash")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable external block-mode flash")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/development/board-bring-up/how-to/08-hardware-acceleration"}),"Hardware acceleration")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable the Chrom-ART graphics accelerator")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/development/board-bring-up/how-to/09-touch-controller"}),"Touch controller")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Setup communication to the touch controller")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/development/board-bring-up/how-to/10-physical-buttons"}),"Physical buttons")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configure access to physical buttons")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/development/board-bring-up/how-to/11-flash-loader"}),"Flash loader")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Develop a way to write data to the external flash")))))}u.isMDXComponent=!0},508:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(r.Component);t.a=i},510:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,a=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(r.Component);t.a=i},514:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=a(508),l=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)},t}(r.Component);t.a=c},520:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=a(508),l=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)},t}(r.Component);t.a=c},523:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=a(508),l=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:l},this.props.children)},t}(r.Component);t.a=c}}]);