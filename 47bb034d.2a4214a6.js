(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return f})),n.d(t,"default",(function(){return h}));var a=n(1),r=n(9),o=(n(0),n(261)),i=n(262),c=(n(272),n(274)),s=(n(276),n(273)),l=(n(271),{id:"scenarios-framebuffer-strategies",title:"Framebuffer Strategies"}),u={id:"development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",title:"Framebuffer Strategies",description:"import Figure from '@site/components/Figure';\r",source:"@site/docs\\development\\touchgfx-hal-development\\scenarios\\scenarios-framebuffer-strategies.mdx",permalink:"/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",sidebar:"docs",previous:{title:"FMC and SPI",permalink:"/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"},next:{title:"External events as triggers",permalink:"/docs/development/board-bring-up/example-gpio"}},f=[{value:"Single Frame Buffer",id:"single-frame-buffer",children:[]},{value:"Double Frame Buffer",id:"double-frame-buffer",children:[]},{value:"Partial Frame Buffer",id:"partial-frame-buffer",children:[]}],d={rightToc:f},p="wrapper";function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(p,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following section shows how to use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/touchgfx-hal-development/touchgfx-generator"}),"TouchGFX Generator")," to configure available Frame Buffer strategies."),Object(o.b)("p",null,"Code to swap between farmebuffers will be generated in the HAL by TouchGFX Generator depending on the selected Framebuffer strategy and display interface. This memory interface to frame buffer location is used by the TouchGFX Engine during the main event loop."),Object(o.b)("h2",{id:"single-frame-buffer"},"Single Frame Buffer"),Object(o.b)("p",null,"Choosing ",Object(o.b)("em",{parentName:"p"},"Single Buffer")," as the strategy, users are also able to choose a location for the buffer."),Object(o.b)("p",null,"When choosing ",Object(o.b)("em",{parentName:"p"},"By Allocation")," TouchGFX Generator will alloacte an array based on the dimensions and bitdepth of the application."),Object(o.b)(i.a,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-single-alloc.png",width:"400",mdxType:"Figure"}),Object(o.b)(s.a,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{1-6,13}","{1-6,13}":!0}),'namespace {\n    // Use the section "TouchGFX_Framebuffer" in the linker script\n    // to specify the placement of the buffer\n    LOCATION_PRAGMA("TouchGFX_Framebuffer")\n    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");\n}\n\nvoid TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n    registerEventListener(*(touchgfx::Application::getInstance()));\n\n    setFrameBufferStartAddresses((void*)frameBuf, (void*)0, (void*)0);\n\n')),Object(o.b)("p",null,"When specifying ",Object(o.b)("em",{parentName:"p"},"By Address")," for the location of the framebuffer TouchGFX will use the specified address in the same configuration."),Object(o.b)(i.a,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-single-addr.png",width:"400",mdxType:"Figure"}),Object(o.b)(s.a,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{7}","{7}":!0}),"void TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n\n    setFrameBufferStartAddresses((void*)0xC0000000, (void*)0, (void*)0);\n}\n")),Object(o.b)("h2",{id:"double-frame-buffer"},"Double Frame Buffer"),Object(o.b)("p",null,"When choosing ",Object(o.b)("em",{parentName:"p"},"By Address")," TouchGFX Generator will allocate an array based on the dimensions and bitdepth of the application, exactly as with a Single Frame Buffer, only twice the size."),Object(o.b)(i.a,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-double.png",width:"400",mdxType:"Figure"}),Object(o.b)(c.a,{mdxType:"Tip"},"When using Parallel RGB (LTDC) as display interface, the start address will be inherited from the LTDC Layer settings."),Object(o.b)("p",null,"When choosing ",Object(o.b)("em",{parentName:"p"},"By Allocation")," TouchGFX Generator will allocate an array based on the dimensions and bitdepth of the application, exactly as with a Single Frame Buffer, only twice the size."),Object(o.b)(i.a,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-double-alloc.png",width:"400",mdxType:"Figure"}),Object(o.b)(s.a,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{1-5,13}","{1-5,13}":!0}),'namespace {\n    // Use the section "TouchGFX_Framebuffer" in the linker to specify the placement of the buffer\n    LOCATION_PRAGMA("TouchGFX_Framebuffer")\n    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4 * 2] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");\n}\n\nvoid TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    registerEventListener(*(touchgfx::Application::getInstance()));\n\n    setFrameBufferStartAddresses((void*)frameBuf, (void*)(frameBuf + sizeof(frameBuf)/(sizeof(uint32_t)*2)), (void*)0);\n}\n')),Object(o.b)("h2",{id:"partial-frame-buffer"},"Partial Frame Buffer"),Object(o.b)("p",null,"Selecting the ",Object(o.b)("em",{parentName:"p"},"Partial Buffer")," strategy allows developers to choose a number of blocks and a size for each of these to be used as frame buffers."),Object(o.b)(c.a,{mdxType:"Tip"},'Depending on the size of the display the STM32G0 does not have enough internal SRAM to fit an entire framebuffer. "Partial Buffer" would be a perfect match for this MCU.'),Object(o.b)(i.a,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/generator-partial-fb.png",width:"400",mdxType:"Figure"}),Object(o.b)("p",null,"Typically, a partial buffering strategy is only used with low cost MCUs with no TFT Controllers and little internal SRAM. As such, the Partial Buffer Strategy expects to send"),Object(o.b)("p",null," Developers are required to provide two functions to drive the Partial Buffer Strategy. The following code is generated by TouchGFX Generator and must be fulfilled by the developer:"),Object(o.b)(s.a,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'/* ******************************************************\n* Functions required by Partial Frame Buffer Strategy\n* ******************************************************\n*\n*  *  uint8_t isTransmittingData() must return whether or not data is currently being transmitted, over e.g. SPI.\n*  *  void transmitFrameBufferBlock(uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h) will be called\n*       when the framework wants to send a block. The user must then transfer\n*       the data represented by the arguments.\n*\n*  A user must call touchgfx::startNewTransfer(); once transmitFrameBufferBlock() has succesfully sent a block.\n*  E.g. if using DMA to transfer the block, this could be called in the "Transfer Completed" interrupt handler.\n*\n*/\nextern "C" void transmitFrameBufferBlock(uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h);\nextern "C" uint8_t isTransmittingData();\n')),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"}),"FMC/SPI Scenario")," for how to transmit pixels to e.g. a serial display on MCUs with no TFT Controller."))}h.isMDXComponent=!0},272:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=n(265),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},t}(r.Component);t.a=s},276:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=n(265),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:c},this.props.children)},t}(r.Component);t.a=s}}]);