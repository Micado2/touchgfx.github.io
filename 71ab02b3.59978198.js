(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{166:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return b}));var i=t(1),r=t(9),a=(t(0),t(231)),c={id:"Rendering",title:"Rendering"},l={id:"BasicConcepts/Rendering",title:"Rendering",description:"## TouchGFX main loop",source:"@site/docs\\BasicConcepts\\Rendering.mdx",permalink:"/docs/BasicConcepts/Rendering",sidebar:"docs",previous:{title:"Framebuffer",permalink:"/docs/BasicConcepts/Framebuffer"},next:{title:"Rendering Performance",permalink:"/docs/BasicConcepts/Performance"}},d=[{value:"TouchGFX main loop",id:"touchgfx-main-loop",children:[{value:"Wait",id:"wait",children:[]},{value:"Update",id:"update",children:[]},{value:"Render",id:"render",children:[]}]},{value:"Indirect representation / graph",id:"indirect-representation--graph",children:[]},{value:"Two phase rendering",id:"two-phase-rendering",children:[]},{value:"Update",id:"update-1",children:[]},{value:"Racing the beam",id:"racing-the-beam",children:[]},{value:"Number of pixels...",id:"number-of-pixels",children:[]},{value:"STM32 microcontrollers",id:"stm32-microcontrollers",children:[]},{value:"Rendering cycle",id:"rendering-cycle",children:[]}],o={rightToc:d},s="wrapper";function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)(s,Object(i.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"touchgfx-main-loop"},"TouchGFX main loop"),Object(a.b)("p",null,"In pseudo code the main loop inside TouchGFX looks like"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"while(true) {\n    wait();\n    update();\n    render();\n}\n")),Object(a.b)("p",null,"The code is much more involved in the real implementation, but the pseudo code above helps in understanding the main parts of the engine."),Object(a.b)("h3",{id:"wait"},"Wait"),Object(a.b)("p",null,"TouchGFX will wait until it is required to draw a frame."),Object(a.b)("p",null,"The waiting is over when TouchGFX is informed from the outside world that it should proceed.\nTypically this information comes in the form of a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"synchronization interrupt from MCU or display"),Object(a.b)("li",{parentName:"ul"},"hardware timer interrupt")),Object(a.b)("h3",{id:"update"},"Update"),Object(a.b)("p",null,"TouchGFX samples and propagates events to the current\nTouchGFX collects events from the system.\nThe events are tick, click, drag, gesture, "),Object(a.b)("p",null,"updates the\nmodel.tick"),Object(a.b)("p",null,"All these events are handled by "),Object(a.b)("p",null,"invalidate"),Object(a.b)("h3",{id:"render"},"Render"),Object(a.b)("p",null,"At this moment a list of invalidated areas"),Object(a.b)("h2",{id:"indirect-representation--graph"},"Indirect representation / graph"),Object(a.b)("h2",{id:"two-phase-rendering"},"Two phase rendering"),Object(a.b)("h2",{id:"update-1"},"Update"),Object(a.b)("p",null,"model.tick()\nhandleTickEvent, handleClickEvent, handle"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"//pseudo code\n\n\nforeach(area in invalidatedAreas) {\n    widgets = find_widgets_in(area);\n    draw(widgets)\n}\n\nfunction draw(widgets)\n")),Object(a.b)("p",null,"for each area that needs to be redrawn.\nfind widgets in area\ndraw(widgets, area);\nconvert invalidated "),Object(a.b)("h2",{id:"racing-the-beam"},"Racing the beam"),Object(a.b)("p",null,"###TODO Write"),Object(a.b)("h2",{id:"number-of-pixels"},"Number of pixels..."),Object(a.b)("h2",{id:"stm32-microcontrollers"},"STM32 microcontrollers"),Object(a.b)("p",null,"Performance.\nPrerender is better than render."),Object(a.b)("h2",{id:"rendering-cycle"},"Rendering cycle"),Object(a.b)("p",null,"wait, events, update, render"),Object(a.b)("p",null,"This means that TouchGFX' primary concerns are"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Updating the contents of the display at 60Hz given the constraints of a STM32 microcontroller"),Object(a.b)("li",{parentName:"ul"},"Finding the right balance between quality and speed"),Object(a.b)("li",{parentName:"ul"},"Utilizing hardware to maximize availability of MCU"),Object(a.b)("li",{parentName:"ul"},"Ensuring that no ")))}b.isMDXComponent=!0}}]);