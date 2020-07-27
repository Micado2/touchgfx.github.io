(window.webpackJsonp=window.webpackJsonp||[]).push([[1005],{1141:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return h})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return u}));var n=a(1),i=a(9),r=(a(0),a(1229)),s=a(1231),o=a(1235),l=a(1232),c={id:"engine-architecture",title:"Engine Architecture"},h={id:"version-4.14/basic-concepts/engine-architecture",title:"Engine Architecture",description:"*Graphics is ultimately about getting something to show up on a physical display. Fast.*\r",source:"@site/versioned_docs\\version-4.14\\basic-concepts\\engine-architecture.mdx",permalink:"/docs/basic-concepts/engine-architecture",version:"4.14"},p=[{value:"The four parts",id:"the-four-parts",children:[{value:"MCU",id:"mcu",children:[]},{value:"RAM",id:"ram",children:[]},{value:"Flash",id:"flash",children:[]},{value:"Display",id:"display",children:[]}]},{value:"Performance",id:"performance",children:[{value:"General strategy",id:"general-strategy",children:[]},{value:"Setup specific strategy",id:"setup-specific-strategy",children:[]}]}],d={rightToc:p},b="wrapper";function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Graphics is ultimately about getting something to show up on a physical display. Fast.")),Object(r.b)("p",null,"The term embedded graphics means many things."),Object(r.b)("p",null,"First of, the word embedded means different things to different people.\nTo some an embedded system means a very dependable old 8 bit microcontroller, with no operating system, and virtually no RAM, ROM or GPIO.\nTo others it might mean a modern day smart phone with gigabytes of everything."),Object(r.b)("p",null,"Secondly, the word graphics has many interpretations.\nTo some it means drawing your own pixels in your favourite painting program.\nTo others again it means the 3D rendering software running on your gaming console."),Object(r.b)("p",null,"To TouchGFX embedded systems mean any system based on an STM32 microcontroller.\nAnd graphics means interactive applications running at 60 frames per second."),Object(r.b)("h2",{id:"the-four-parts"},"The four parts"),Object(r.b)("p",null,"In order to do graphics applications on such platforms, we consider four main components directly involved.\nNaturally many more components might be present in an embedded system, but these are less related to the display of graphics."),Object(r.b)(l.a,{imageSource:"/img/basic-concepts/four-parts.svg",caption:"MCU, RAM, Flash and display",noShadow:"true",width:480,mdxType:"Figure"}),Object(r.b)("p",null,"In short, TouchGFX, using the MCU, creates and updates an image in RAM, by assembling parts from flash. The assembled image is transferred to the display. This process is repeated as often as possible and needed."),Object(r.b)("h3",{id:"mcu"},"MCU"),Object(r.b)("p",null,"The MCU is doing all the heavy lifting in this process.\nIt reads images in flash and writes them to RAM.\nIt calculates the resulting colors when merging a semi-transparent red text onto an image and saves these to RAM.\nIt renders and stores all the pixels of a circle to RAM.\nAnd so on."),Object(r.b)("p",null,"STM32 MCUs have specific capabilities that help in the realization of graphics.\nSee ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../development/hardware-selection/hardware-components/hardware-selection-mcu"}),"MCU")," for details on different MCUs."),Object(r.b)("h3",{id:"ram"},"RAM"),Object(r.b)("p",null,"RAM is where the calculated image is stored.\nThe RAM is being read and written by the MCU.\nAnd read again when the resulting image is transferred to the display."),Object(r.b)("p",null,"In many cases the RAM is internal to the MCU.\nIn cases where it is not feasible to have the resulting image in internal RAM, external RAM can be added to the setup."),Object(r.b)("h3",{id:"flash"},"Flash"),Object(r.b)("p",null,"Flash is where all static data is placed. Images, fonts and texts.\nThe flash is read by the MCU and the contents written to or combined with the RAM."),Object(r.b)("p",null,"Most often an external flash is added to the setup, as the internal flash is seldomly large enough to hold all graphics assets."),Object(r.b)("p",null,"Ideally the flash is memory mapped, such that pixels can be read directly from the flash and written to RAM. Otherwise, the contents of the flash can be buffered in RAM and then read from there instead."),Object(r.b)("h3",{id:"display"},"Display"),Object(r.b)("p",null,"The display is where the image is actually displayed to the eyes of a person."),Object(r.b)("p",null,"The image stored in RAM is sent by the MCU to the display at regular intervals."),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,"In order to achieve smooth animations on this setup and ultimately on the display, some care must be taken when doing embedded graphics."),Object(r.b)("h3",{id:"general-strategy"},"General strategy"),Object(r.b)("p",null,"A few general points to always consider:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Do not spend time drawing things that do not change"),Object(r.b)("li",{parentName:"ul"},"Transfer as little as possible from flash to RAM"),Object(r.b)("li",{parentName:"ul"},"Transfer as little as possible from RAM to display"),Object(r.b)("li",{parentName:"ul"},"Find the right balance between quality of graphics and speed of animations"),Object(r.b)("li",{parentName:"ul"},"Utilize hardware capabilities")),Object(r.b)("p",null,"The TouchGFX Engine helps address all of these points, but care must be taken by the developer as well."),Object(r.b)("h3",{id:"setup-specific-strategy"},"Setup specific strategy"),Object(r.b)("p",null,"The vast amount of possible embedded setups means that what can be realized on a specific setup is very different to what is possible on another setup."),Object(r.b)("p",null,"A ballpark'ish overview of possible setups are"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"STM32 MCU",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"50 to 500 MHz clock rate"),Object(r.b)("li",{parentName:"ul"},"A possible range of graphics related IP's: Chrom-ART, Chrom-GRC, JPEG codec, ..."))),Object(r.b)("li",{parentName:"ul"},"RAM",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"0 to 1 MB internal"),Object(r.b)("li",{parentName:"ul"},"0 to 100 MB external"))),Object(r.b)("li",{parentName:"ul"},"Flash",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"0 to 1 MB internal"),Object(r.b)("li",{parentName:"ul"},"0 to 1 GB external"))),Object(r.b)("li",{parentName:"ul"},"Display",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"1 to 24 bit colors"),Object(r.b)("li",{parentName:"ul"},"100x100 to 1000x1000 pixels")))),Object(r.b)("p",null,"It is evident that the UI applications that are realizable on one possible setup, might not be nowhere near realizable on another. Therefore great care must be taken to align the desired UI application with the actual setup."),Object(r.b)("p",null,"TouchGFX is designed from the ground up for these setups, focusing on making the most of the STM32 MCU capabilities and minimizing the amount of RAM and flash needed."),Object(r.b)(o.a,{mdxType:"FurtherReading"},Object(r.b)("li",null,"See ",Object(r.b)(s.a,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32-bit Arm Cortex MCUs")," for available STM32 microcontrollers."),Object(r.b)("li",null,"See ",Object(r.b)(s.a,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"Display")," for details on the possible display choices."),Object(r.b)("li",null,"See ",Object(r.b)(s.a,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"MCU")," for details on the possible MCU choices."),Object(r.b)("li",null,"See ",Object(r.b)(s.a,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"External Memories")," for details on the possible choices for memory.")))}u.isMDXComponent=!0},1230:function(e,t,a){"use strict";var n=a(5),i=a(0),r=a.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(r.a.createElement("div",{class:e},r.a.createElement("div",{class:"highlight-heading"},r.a.createElement("h5",null,r.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(i.Component);t.a=s},1232:function(e,t,a){"use strict";var n=a(5),i=a(0),r=a.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,a=this.props.height;return e?r.a.createElement("div",{class:"figure noshadow"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption)):r.a.createElement("div",{class:"figure"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=s},1235:function(e,t,a){"use strict";var n=a(5),i=a(0),r=a.n(i),s=a(1230),o=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return r.a.createElement(s.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)},t}(i.Component);t.a=l}}]);