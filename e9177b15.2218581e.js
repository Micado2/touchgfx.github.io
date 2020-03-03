(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{217:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(1),i=a(9),r=(a(0),a(231)),l={id:"Performance",title:"Rendering Performance"},o={id:"BasicConcepts/Performance",title:"Rendering Performance",description:"###TODO Write more",source:"@site/docs\\BasicConcepts\\Performance.mdx",permalink:"/docs/BasicConcepts/Performance",sidebar:"docs",previous:{title:"Rendering",permalink:"/docs/BasicConcepts/Rendering"},next:{title:"Operating System",permalink:"/docs/BasicConcepts/OperatingSystem"}},s=[{value:"Performance",id:"performance",children:[{value:"General strategy",id:"general-strategy",children:[]},{value:"Setup specific strategy",id:"setup-specific-strategy",children:[]}]}],c={rightToc:s},b="wrapper";function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"###TODO Write more"),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,"In order to achieve smooth animations on this setup and ultimately on the display, some care must be taken when doing embedded graphics."),Object(r.b)("h3",{id:"general-strategy"},"General strategy"),Object(r.b)("p",null,"A few general points to always consider:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Do not spend time drawing things that do not change"),Object(r.b)("li",{parentName:"ul"},"Transfer as little as possible from flash to RAM"),Object(r.b)("li",{parentName:"ul"},"Transfer as little as possible from RAM to display"),Object(r.b)("li",{parentName:"ul"},"Find the right balance between quality of graphics and speed of animations"),Object(r.b)("li",{parentName:"ul"},"Utilize hardware capabilities")),Object(r.b)("p",null,"The TouchGFX Engine helps address all of these points, but care must be taken by the developer as well."),Object(r.b)("h3",{id:"setup-specific-strategy"},"Setup specific strategy"),Object(r.b)("p",null,"The vast amount of possible embedded setups means that what can be realized on a specific setup is very different to what is possible on another setup."),Object(r.b)("p",null,"A ballpark'ish overview of possible setups are"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"STM32 MCU",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Cortex-M0 to Cortex-M7"),Object(r.b)("li",{parentName:"ul"},"50 to 500 MHz clock rate"),Object(r.b)("li",{parentName:"ul"},"A possible range of graphics related IP's: Chrom-ART, Chrom-GRC, JPEG codec, ..."))),Object(r.b)("li",{parentName:"ul"},"RAM",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Type TODO"),Object(r.b)("li",{parentName:"ul"},"0 to X Throughput TODO"),Object(r.b)("li",{parentName:"ul"},"0 to 1 MB internal"),Object(r.b)("li",{parentName:"ul"},"0 to 100 MB external"))),Object(r.b)("li",{parentName:"ul"},"Flash",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Type TODO"),Object(r.b)("li",{parentName:"ul"},"0 to X Throughput TODO"),Object(r.b)("li",{parentName:"ul"},"0 to 1 MB internal"),Object(r.b)("li",{parentName:"ul"},"0 to 1 GB external"))),Object(r.b)("li",{parentName:"ul"},"Display",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Type interface TODO"),Object(r.b)("li",{parentName:"ul"},"1 to 32 bit colors"),Object(r.b)("li",{parentName:"ul"},"100x100 to 1000x1000 pixels")))),Object(r.b)("p",null,"It is evident that the UI applications that are realizable on one possible setup, might not be nowhere near realizable on another. Therefore great care must be taken to align the desired UI application with the actual setup."),Object(r.b)("p",null,"TouchGFX is designed from the ground up for these setups, focusing on making the most of the STM32 MCU capabilities and minimizing the amount of RAM and flash needed. "))}p.isMDXComponent=!0}}]);