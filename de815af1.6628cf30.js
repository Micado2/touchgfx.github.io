(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{245:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return d})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return m}));var a=r(1),n=r(9),i=(r(0),r(261)),o=r(262),l=r(272),c=r(273),b=r(264),s={id:"05-display-external",title:"5. Framebuffer in external RAM",sidebar_label:"5. Framebuffer in external RAM"},d={id:"development/board-bring-up/how-to/05-display-external",title:"5. Framebuffer in external RAM",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\development\\board-bring-up\\how-to\\05-display-external.mdx",permalink:"/docs/development/board-bring-up/how-to/05-display-external",sidebar_label:"5. Framebuffer in external RAM",sidebar:"docs",previous:{title:"4. External RAM",permalink:"/docs/development/board-bring-up/how-to/04-enable-external-ram"},next:{title:"6. External addressable flash",permalink:"/docs/development/board-bring-up/how-to/06-flash-external-addressable"}},p=[{value:"Motivation",id:"motivation",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Do",id:"do",children:[{value:"LTDC Layer configuration",id:"ltdc-layer-configuration",children:[]}]},{value:"Verification",id:"verification",children:[]}],u={rightToc:p},h="wrapper";function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)(h,Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"motivation"},"Motivation"),Object(i.b)("p",null,"In this step we will move the framebuffer from internal to external\nRAM, and make sure that the framebuffer can still be transferred to\nthe display."),Object(i.b)(l.a,{mdxType:"Note"},"Skip this step if external RAM is not relevant for your board bring up."),Object(i.b)("p",null,'This step will stress test the external RAM since the display\ncontroller has certain expectations on the transfer speed. This might\nresult in errors. Common errors are LTDC underrun, because the\nbandwidth of the external RAM is not high enough, or pixel errors\nbecause the RAM is configured incorrectly and is running "out of\nspec".'),Object(i.b)(l.a,{mdxType:"Note"},"If the LTDC Layer size was setup to only update a part of the display in the previous step",Object(i.b)(b.a,{to:"/docs/development/board-bring-up/how-to/03-display-internal",mdxType:"Link"}," Display internal "),"(due to the amount of internal RAM ), now is the time to redo that. Reconfigure the LTDC Layer such that the entire display is covered."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"The following are the prerequisites for this step:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Address of the framebuffer in the external RAM")),Object(i.b)("h2",{id:"do"},"Do"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Place the framebuffer in external RAM"),Object(i.b)("li",{parentName:"ul"},"Setup the display controller to read from the external RAM")),Object(i.b)("p",null,"When the frambuffer is in external RAM, it is common practice to not\nallocate an array for it. You just declare a pointer to the correct\naddress. The address in external RAM is then manually selected. It can\nbe anywhere in the external RAM, but the start of the RAM is commonly\nused:"),Object(i.b)(c.a,{mdxType:"CodeHeader"},"main.c"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"uint16_t* framebuffer = (uint16_t*)0xC0000000;  //16 bpp framebuffer\n")),Object(i.b)("p",null,"You can reuse the small test programs you created in the steps in\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/board-bring-up/how-to/03-display-internal"}),"Display Internal"),"."),Object(i.b)("h3",{id:"ltdc-layer-configuration"},"LTDC Layer configuration"),Object(i.b)("p",null,"Remember to change the configuration of the LTDC Layer. Since we now\nhave a specific address for the framebuffer, we can insert that\naddress in CubeMX (Color Frame Buffer Start Address):"),Object(i.b)(o.a,{imageSource:"/img/development/board-bring-up/display/cubemx-03.png",caption:"Configuring LTDC Layer Parameters",noShadow:!1,width:"600",mdxType:"Figure"}),Object(i.b)("p",null,"Remember to remove this line from your program and the framebuffer array:"),Object(i.b)(c.a,{mdxType:"CodeHeader"},"main.c"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"  /* USER CODE BEGIN 2 */\n  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);\n  /* USER CODE END 2 */\n")),Object(i.b)("h2",{id:"verification"},"Verification"),Object(i.b)("p",null,"Here are the verification points for this section:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Verification Point"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Rationale"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Framebuffer is shown"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Display controller or SPI is configured and running")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Updated framebuffer is shown"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"We know how to repeatedly transmit the framebuffer")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Framerate is correct"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The pixel clock and porches are configured to get the required framerate")))))}m.isMDXComponent=!0},272:function(e,t,r){"use strict";var a=r(5),n=r(0),i=r.n(n),o=r(265),l=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement(o.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)},t}(n.Component);t.a=c}}]);