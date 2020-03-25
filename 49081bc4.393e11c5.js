(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(9),i=(n(0),n(254)),a=(n(255),n(268),n(265),n(269),n(264),{id:"TouchGFXHALDevelopmentScenariosSPI",title:"SPI"}),c={id:"Development/TouchGFXHALDevelopment/scenarios/TouchGFXHALDevelopmentScenariosSPI",title:"SPI",description:"import Figure from '@site/components/Figure';\r",source:"@site/docs\\Development\\TouchGFXHALDevelopment\\scenarios\\SPI.mdx",permalink:"/docs/Development/TouchGFXHALDevelopment/scenarios/TouchGFXHALDevelopmentScenariosSPI",sidebar:"docs",previous:{title:"LTDC+DSI",permalink:"/docs/Development/TouchGFXHALDevelopment/scenarios/TouchGFXHALDevelopmentScenariosDSI"},next:{title:"External events as triggers",permalink:"/docs/Development/BoardBringUp/BoardExGPIO"}},s=[],l={rightToc:s},p="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For MCUs with no TFT controller, the pixels in the framebuffer must be transferred manually to a display containing . Every time the TouchGFX Engine completes a partial draw during the render cycle it calls the function ",Object(i.b)("inlineCode",{parentName:"p"},"flushFrameBuffer")," with the area, in absolute coordinates, that was updated in memory and should be transferred to the memory on a display. "),Object(i.b)("p",null,"The driver developed during Board Bringup should be used in this function. "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    //Prepare for Command mode\n        //Set Horizontal GRAM Start Address\n        //Set Horizontal GRAM End Address\n        //Set Vertical GRAM Start Address\n        //Set Vertical GRAM End Address\n\n    //Prepare to write pixel data in GRAM\n    //Send pixels\n}\n")))}d.isMDXComponent=!0},268:function(e,t,n){"use strict";var r=n(5),o=n(0),i=n.n(o),a=n(266),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(a.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},t}(o.Component);t.a=s},269:function(e,t,n){"use strict";var r=n(5),o=n(0),i=n.n(o),a=n(266),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(a.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:c},this.props.children)},t}(o.Component);t.a=s}}]);