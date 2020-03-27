(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return f})),a.d(t,"default",(function(){return m}));var n=a(1),r=a(9),l=(a(0),a(250)),i=a(251),o=(a(263),a(253),a(261)),s=a(275),c={id:"LoweringMemoryUsageWithPartialFrameBuffer",title:"Lowering Memory Usage with Partial Framebuffer"},b={id:"Development/UIDevelopment/Scenarios/LoweringMemoryUsageWithPartialFrameBuffer",title:"Lowering Memory Usage with Partial Framebuffer",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Development\\UIDevelopment\\Scenarios\\LoweringMemoryUsageWithPartialFrameBuffer.mdx",permalink:"/docs/Development/UIDevelopment/Scenarios/LoweringMemoryUsageWithPartialFrameBuffer",sidebar:"docs",previous:{title:"Loading Images at Runtime",permalink:"/docs/Development/UIDevelopment/Scenarios/LoadingImagesAtRuntime"},next:{title:"Using the L8 Image Format to Reduce Memory Consumption",permalink:"/docs/Development/UIDevelopment/Scenarios/UsingTheL8ImageFormatToReduceMemoryConsumption"}},f=[{value:"Full-size Frame Buffer memory",id:"full-size-frame-buffer-memory",children:[]},{value:"Partial Frame Buffer memory",id:"partial-frame-buffer-memory",children:[]},{value:"Display Tearing",id:"display-tearing",children:[]},{value:"Display update example",id:"display-update-example",children:[]},{value:"Configuring Partial Frame Buffers",id:"configuring-partial-frame-buffers",children:[]},{value:"Transferring Frame Buffers to the Screen",id:"transferring-frame-buffers-to-the-screen",children:[{value:"Transferring Frame Buffers on DSI Display",id:"transferring-frame-buffers-on-dsi-display",children:[]},{value:"Transferring Frame Buffers on SPI Display",id:"transferring-frame-buffers-on-spi-display",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],p={rightToc:f},u="wrapper";function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(u,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This section explains, by exemplifying with a clock application, how\nto configure and use Partial Frame Buffers, to lower memory\nrequirements at the expense of some performance."),Object(l.b)("p",null,"A video of the application running on the STM32L4R9Discovery\nevaluation kit can be seen below"),Object(l.b)(s.a,{url:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/knowledgebase/Partial%20framebuffer/Partial%20framebuffer.mp4",mdxType:"Video"}),Object(l.b)("h2",{id:"full-size-frame-buffer-memory"},"Full-size Frame Buffer memory"),Object(l.b)("p",null,"Normally, your frame buffer is a big memory array with enough memory\nto hold all the pixels available on your display.",Object(l.b)("br",{parentName:"p"}),"\n","If you are running on a 24-bit display with a resolution of 480 x 272,\na full-size frame buffer holds 480 x 272 x 3 bytes = 391.680 bytes."),Object(l.b)("p",null,'Some applications may have 2- ("Double buffering") or even 3 frame\nbuffers. The total memory requirement in these cases would then be\n783.360 and 1.175.040 bytes.'),Object(l.b)("p",null,"TouchGFX writes pixel values to the frame buffer when drawing any part\nof the UI, after all drawing operations have completed, the frame\nbuffer is transferred to the display. Typically, the whole frame\nbuffer is transferred to the display even if only a part of the UI is\nupdated.",Object(l.b)("br",{parentName:"p"}),"\n","Generally, the framebuffer can be updated in many small blocks before\nitis transferred."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Update1, Update 2, Update 3, ..., Update N, Transfer to display")),Object(l.b)("p",null,"In some cases, particularly in low cost solutions with no external\nRAM, frame buffers are required to be small enough to allow the rest\nof the application to fit in the internal RAM together with the\nframebuffer. This is where partial frame buffers are useful."),Object(l.b)("h2",{id:"partial-frame-buffer-memory"},"Partial Frame Buffer memory"),Object(l.b)("p",null,"Partial frame buffers allows a TouchGFX application to run on top of a\nfew, less than full-size frame buffers. The number and size of the\nframe buffers are configurable.",Object(l.b)("br",{parentName:"p"}),"\n","This technique can lower the memory requirements of an application by\na substantial amount, but comes with some limitations:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Partial frame buffers will only work on displays that have built-in memory. These are typically DSI displays or displays with a parallel bus connection (DBI type A/B, 8080/6800) or SPI-bus connection."),Object(l.b)("li",{parentName:"ul"},"Potential tearing for complex applications")),Object(l.b)("p",null,"Rather than using a frame buffer representing every pixel on the\ndisplay, partial frame buffers typically cover a smaller part.",Object(l.b)("br",{parentName:"p"}),"\n","In the clock example used in this article three frame buffers of\n11.700 bytes each are used. This result in a memory footprint for\nframe buffers of 35.100 bytes."),Object(l.b)("p",null,"Whenever the application needs to update a part of the UI, TouchGFX\nwill select one of the configured, partial frame buffers, complete its\ndrawing operation in the partial framebuffer, and transfer that part\nto the display. This is repeated for all areas of the UI that need to\nbe rendered - This changes the formula for updating and transferring\ndata to:"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Update1, Transfer1, Update2, Transfer2, Update3, Transfer3, ..., UpdateN, TransferN")),Object(l.b)("p",null,"In some cases the transfer of one partial frame buffer can run while\nthe update of the next buffer is running."),Object(l.b)("h2",{id:"display-tearing"},"Display Tearing"),Object(l.b)("p",null,"Contrary to using full-size frame buffers, TouchGFX will transfer\nparts of the UI as soon as they are updated, when using partial frame\nbuffers.",Object(l.b)("br",{parentName:"p"}),"\n","The display will show the received updates on its glass after at most 16 ms (for\n60 fps displays) because the display needs to be refreshed regularly.",Object(l.b)("br",{parentName:"p"}),"\n","Because of this, the first updates to the display can potentially be\nvisible to the user before all updates have been transferred."),Object(l.b)("p",null,"If the total sequence of draw operations and transfers take a long\ntime to complete ( > 16 ms) it is highly possible that the user will see a\ncombination of the previous frame and some of the new updates. This is\ncalled display tearing and is not desirable.",Object(l.b)("br",{parentName:"p"}),"\n","For this reason partial frame buffers are not suitable for\napplications that make use of complex animations that take a long time\nto render."),Object(l.b)("h2",{id:"display-update-example"},"Display update example"),Object(l.b)("p",null,"Before we get into how to configure partial frame buffers in your application let's have a look at a concrete example showing a digital clock with a moving circle arc representing seconds. The green circle arc is moving 6 degrees each second and does a full rotation in a minute. The UI is built from four Widgets as seen in the image below:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/Development/UIDevelopment/UIComponents/Shapes/Line"}),"Line")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/Development/UIDevelopment/UIComponents/Shapes/Circle"}),"Circle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/Development/UIDevelopment/UIComponents/Miscellaneous/DigitalClock"}),"Digital Clock")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/Development/UIDevelopment/UIComponents/Shapes/Box"}),"Box"))),Object(l.b)(i.a,{imageSource:"/img/Development/UIDevelopment/Scenarios/LoweringMemoryUsageWithPartialFrameBuffer/touchgfx-designer-with-widgets.png",caption:"",mdxType:"Figure"}),Object(l.b)("p",null,"Here is the code that updates the digital clock and circle arc:"),Object(l.b)(o.a,{mdxType:"CodeHeader"},"MainView.cpp"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp",metastring:"{21-25}","{21-25}":!0}),"void MainView::handleTickEvent()\n{\n  ticks++;\n  if (ticks == 10)\n  {\n      ticks = 0;\n      secs += 1;\n      if (secs == 60)  //increment minutes\n      {\n        secs = 0;\n        min += 1;\n        if (min == 60) //increment hours\n        {\n          min = 0;\n          hour += 1;\n          if (hour == 24)\n          {\n            hour = 0;\n          }\n        }\n        //Only update digital clock when minutes or hours change\n        digitalClock.setTime24Hour(hour, min, secs);\n      }\n    //Always update seconds\n    circleSeconds.updateArc(secs*6 - 20, secs*6);\n  }\n}\n")),Object(l.b)("p",null,"The following images shows the areas that are updated in the first few\nseconds when the circle arc approaches the top and digital clock is\nupdated (the grey rectangles). In the first two frames, only the\nseconds are changing (58 and 59 seconds). In the thirs the seconds\nreaches 60 and the hour and minutes text is updated:"),Object(l.b)(i.a,{imageSource:"/img/Development/UIDevelopment/Scenarios/LoweringMemoryUsageWithPartialFrameBuffer/simulator-updated-areas-1.png",caption:"",mdxType:"Figure"}),Object(l.b)(i.a,{imageSource:"/img/Development/UIDevelopment/Scenarios/LoweringMemoryUsageWithPartialFrameBuffer/simulator-updated-areas-2.png",caption:"",mdxType:"Figure"}),Object(l.b)(i.a,{imageSource:"/img/Development/UIDevelopment/Scenarios/LoweringMemoryUsageWithPartialFrameBuffer/simulator-updated-areas-3.png",caption:"",mdxType:"Figure"}),Object(l.b)(i.a,{imageSource:"/img/Development/UIDevelopment/Scenarios/LoweringMemoryUsageWithPartialFrameBuffer/simulator-updated-areas-4.png",caption:"",mdxType:"Figure"}),Object(l.b)("p",null,"The rectangles updated in the third image above are 154 x 60 pixels,\n20 x 12 pixels, and 33 x 8 pixels. When using standard frame buffers\nthese three rectangles would be drawn into the full frame buffer\n(overwriting the previous pixels), which would afterwards be\ntransferred to the display. When using partial frame buffers, these\nthree rectangles would be drawn into their own little frame buffers\nwhich would then immediately be transferred to the display and shown."),Object(l.b)("h2",{id:"configuring-partial-frame-buffers"},"Configuring Partial Frame Buffers"),Object(l.b)("p",null,"There are two steps to configuring TouchGFX for partial frame buffers:\nCreating a frame buffer allocator object with a memory buffer, and\nconfiguring the TouchGFX HAL class to use it. Later we also need to\nwrite code to transmit the buffers to the display. The first two steps\nare typically done in the BoardConfiguration.cpp file."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Creating a frame buffer allocator as a global variable:"),Object(l.b)("br",null)),Object(l.b)(o.a,{mdxType:"CodeHeader"},"BoardConfiguration.cpp"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"//2 or more blocks of 10*390 pixels, one pixel is 3 bytes\nManyBlockAllocator<10*390*3, 2, 3> frameBufferAllocator;\n")),Object(l.b)("p",null,"This frame buffer allocator allocates 2 blocks of each 10 x 390 x 3 bytes = 11.700 bytes."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Configure HAL to use it:"),Object(l.b)("br",null)),Object(l.b)(o.a,{mdxType:"CodeHeader"},"BoardConfiguration.cpp"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp",metastring:"{6-7}","{6-7}":!0}),"void touchgfx_init()\n{\n    HAL& hal = touchgfx_generic_init(dma, display, tc, GUI_DISPLAY_WIDTH,\n                                         GUI_DISPLAY_HEIGHT, 0, 0, 0);\n    hal.setFrameBufferStartAddress((uint16_t*)0, GUI_DISPLAY_BPP, false, false);\n    hal.setFrameBufferAllocator(&frameBufferAllocator);\n    hal.setFrameRefreshStrategy(HAL::REFRESH_STRATEGY_PARTIAL_FRAMEBUFFER);\n   ...\n")),Object(l.b)("p",null,"With this configuration TouchGFX will allocate small frame buffers and\ndraw the UI in them. What is left now, is to transfer the small frame\nbuffers to the display."),Object(l.b)("p",null,"Lets first see the position and size of the two frame buffers\nallocated to draw the small circle updates (second image above):"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Rectangle")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"x")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"y")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"width")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"height")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Pixels")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rectangle 1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"112"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"56"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"22"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"14"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"308 pixels = 924 bytes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rectangle 2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"153"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"42"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"29"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"11"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"319 pixels = 957 bytes")))),Object(l.b)("p",null,"Both these rectangles are so small, they can fit into the blocks allocated by the frame buffer allocator."),Object(l.b)("p",null,"In the third image above, we have 3 updated rectangles: The small\nupdates to the circle, and the larger rectangle covering the text:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Rectangle")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"x")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"y")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"width")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"height")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Pixels")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rectangle 1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"126"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"51"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"240 pixels = 720 bytes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rectangle 2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"165"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"42"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"33"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"264 pixels = 792 bytes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rectangle 3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"118"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"165"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"154"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"60"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9.240 pixels = 27.720 bytes")))),Object(l.b)("p",null,"Again, the rectangle 1 and 2 are so small, they can fit into the\nblocks allocated by the frame buffer allocator, but frame buffer 3 is\ntoo large.",Object(l.b)("br",{parentName:"p"}),"\n","This rectangle is to large and will be split into multiple rectangles\nthat each can fit into the frame buffers (11.700 bytes)."),Object(l.b)("p",null,"Here we are updating 3 rectangles, but the allocator only has 2\nblocks. In that situation, TouchGFX will wait for the first blocks to\ntransferred and then reuse the blocks."),Object(l.b)("h2",{id:"transferring-frame-buffers-to-the-screen"},"Transferring Frame Buffers to the Screen"),Object(l.b)("p",null,"TouchGFX will allocate a frame buffer from the FrameBufferAllocator,\nwhen a rectangle needs to be redrawn. After drawing to the buffer\nTouchGFX will call this method:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"void HAL::flushFrameBuffer(const Rect& rect);\n")),Object(l.b)("p",null,"This function can be overridden in a HAL subclass to transfer the\nframe buffer to the screen. This special implementation is required\nfor partial framebuffers to work.",Object(l.b)("br",{parentName:"p"}),"\n","The following sections will illustrate how to configure this for the\nSTM32L4R9Discovery evaluation kit which has a DSI screen, and the\nSTM32G081 evaluation kit with a SPI screen."),Object(l.b)("h3",{id:"transferring-frame-buffers-on-dsi-display"},"Transferring Frame Buffers on DSI Display"),Object(l.b)("p",null,"The STM32L4R9Discovery evaluation kit uses a DSI display. The normal\nHAL class is called STM32HAL_DSI (located in STM32HAL_DSI.cpp)."),Object(l.b)("p",null,"We override the HAL::flushFrameBuffer method to notify the FrameBufferAllocator that a block has been drawn:"),Object(l.b)(o.a,{mdxType:"CodeHeader"},"STM32HAL_DSI.hpp"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp",metastring:"{3-3}","{3-3}":!0}),"void STM32HAL_DSI::flushFrameBuffer(const Rect& rect)\n{\n    frameBufferAllocator->markBlockReadyForTransfer();\n    HAL::flushFrameBuffer(rect); //call normal implementation\n}\n")),Object(l.b)("p",null,"The FrameBufferAllocator subclass ManyBlockAllocator will call the\nglobal function FrameBufferAllocatorSignalBlockDrawn() when a block is\nready for transfer. This method must be implemented in the BSP layer:"),Object(l.b)(o.a,{mdxType:"CodeHeader"},"BoardConfiguration.cpp"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"void FrameBufferAllocatorSignalBlockDrawn()\n  {\n    if (!dsiIsTransferring)\n    {\n      sendBlock();\n    }\n  }\n")),Object(l.b)("p",null,"This function is calling the sendBlock function, unless a transfer is\nalready ongoing on the DSI. For the first block drawn by TouchGFX,\nthis will never be the case, so a transfer is started.",Object(l.b)("br",{parentName:"p"}),"\n",'If another block drawing is completed while the DSI transfer is still\nrunning, the block will be kept in the "ready to transfer state", and\ndrawing will continue in another free block (if available).'),Object(l.b)("p",null,"When a DSI transfer is completed, we must first free the transferred\nblock, so it can be reused for another rectangle, and then check to\nsee if the next block is ready for transfer. This is all done in the\nER interrupt:"),Object(l.b)(o.a,{mdxType:"CodeHeader"},"BoardConfiguration.cpp"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp",metastring:"{8-8,11-11}","{8-8,11-11}":!0}),"__irq void DSI_IRQHandler(void) {\n  if (__HAL_DSI_GET_FLAG(&hdsi, DSI_IT_ER))\n  {\n    // End-of-refresh interrupt. Meaning last DSI transfer is complete\n    __HAL_DSI_CLEAR_FLAG(&hdsi, DSI_IT_ER);\n    if (dsiIsTransferring)\n    {\n      HAL::getInstance()->getFrameBufferAllocator()->freeBlockAfterTransfer();\n      dsiIsTransferring = 0;\n    }\n    sendBlock(); //transfer next block if availble\n  }\n")),Object(l.b)("p",null,"The function sendBlock is more complicated. Here we configure the LTDC\nand DSI peripherals to transfer the framebuffer. We also configure the\ndisplay to put the transferred data into the correct place in the\ndisplay memory. This part of the code is dependent on the specific\ndisplay. Check the display datasheet for the command specifications."),Object(l.b)(o.a,{mdxType:"CodeHeader"},"BoardConfiguration.cpp"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp",metastring:"{18-18,40-40,51-51}","{18-18,40-40,51-51}":!0}),"static void sendBlock()\n{\n    FrameBufferAllocator* fbAllocator = HAL::getInstance()->getFrameBufferAllocator();\n\n    //Is a block ready for transfer?\n    if (fbAllocator->hasBlockReadyForTransfer())\n    {\n        Rect transfer_rect;\n        const uint8_t* src = fbAllocator->getBlockForTransfer(transfer_rect);\n        dsiIsTransferring = 1;\n\n        //1. Setup LTDC and layer address and dimension\n        //2. Configure display active area\n        //3. Start DSI\n\n        __HAL_DSI_WRAPPER_DISABLE(&hdsi);\n\n        //1: Setup LTDC\n        LTDC_Layer1->CFBAR = (uint32_t)src;\n\n        const uint32_t width = transfer_rect.width;\n        const uint32_t height = transfer_rect.height;\n\n        LTDC->AWCR = ((width + 1) << 16) | (height + 1);\n        LTDC->TWCR = ((width + 1 + 1) << 16) | (height + 1 + 1);\n\n        const uint16_t layer_x0 = 2 + 0;\n        const uint16_t layer_x1 = 2 + width - 1;\n        LTDC_Layer1->WHPCR = (layer_x1 << 16) | layer_x0;\n\n        const uint16_t layer_y0 = 2 + 0;\n        const uint16_t layer_y1 = 2 + height - 1;\n        LTDC_Layer1->WVPCR = (layer_y1 << 16) | layer_y0;\n\n        LTDC_Layer1->CFBLR = ((width * 3) << 16) | (width * 3 + 3);\n        LTDC_Layer1->CFBLNR = height;\n\n        LTDC->SRCR = (uint32_t)LTDC_SRCR_IMR;\n\n        //2: Configure display\n        const int16_t x = transfer_rect.x + 4;\n        const int16_t x2 = transfer_rect.x + 4 + width - 1;\n        uint8_t InitParam1[4] = { (uint8_t)(x >> 8), (uint8_t)(x & 0xFF), (uint8_t)(x2 >> 8), (uint8_t)(x2 & 0xFF)};\n        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, DSI_SET_COLUMN_ADDRESS, InitParam1);\n\n        const int16_t y = transfer_rect.y;\n        const int16_t y2 = transfer_rect.y + height - 1;\n        uint8_t InitParam2[4] = { (uint8_t)(y >> 8), (uint8_t)(y & 0xFF), (uint8_t)(y2 >> 8), (uint8_t)(y2 & 0xFF) };\n        HAL_DSI_LongWrite(&hdsi, 0, DSI_DCS_LONG_PKT_WRITE, 4, DSI_SET_PAGE_ADDRESS, InitParam2);\n\n        //3: Start DSI transfer\n        __HAL_DSI_WRAPPER_ENABLE(&hdsi);\n        HAL_DSI_Refresh(&hdsi);\n    }\n}\n")),Object(l.b)("h3",{id:"transferring-frame-buffers-on-spi-display"},"Transferring Frame Buffers on SPI Display"),Object(l.b)("p",null,"The STM32G081 evaluation kit has a SPI display. The principle for\ntransferring the rectangles to the display is the same as for the DSI,\nbut some details are different."),Object(l.b)("p",null,"First, when a rectangle is drawn, we start a transfer if none is already in progress:"),Object(l.b)(o.a,{mdxType:"CodeHeader"},"STM32G0HAL.cpp"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp",metastring:"{4-4,10-10}","{4-4,10-10}":!0}),"void STM32G0HAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    HAL::flushFrameBuffer(rect);\n    frameBufferAllocator->markBlockReadyForTransfer();\n    //start transfer if not running already!\n    if (!LCDManager_IsTransmittingData())\n    {\n        touchgfx::Rect r;\n        const uint8_t* pixels = frameBufferAllocator->getBlockForTransfer(r);\n        LCDManager_SendFrameBufferBlockWithPosition((uint8_t*)pixels, r.x, r.y, r.width, r.height);\n    }\n}\n")),Object(l.b)("p",null,"The function ",Object(l.b)("em",{parentName:"p"},"LCDManager_SendFrameBufferBlockWithPosition")," starts a\nSPI transfer to the display using DMA."),Object(l.b)("p",null,"The SPI transfer complete handler calls a function when the transfer\nis complete:"),Object(l.b)(o.a,{mdxType:"CodeHeader"},"STM32G0HAL.cpp"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp",metastring:"{11-11}","{11-11}":!0}),"void HAL_SPI_TxCpltCallback(SPI_HandleTypeDef *hspi)\n{\n    UNUSED(hspi);\n    LCD_CS_HIGH();\n    isTransmittingData = 0;\n\n    //Change to SPI datasize to 8 bit from 16 bit\n    heval_Spi.Instance->CR2 &= ~(SPI_DATASIZE_16BIT - SPI_DATASIZE_8BIT);\n\n    //signal transfer complete\n    LCDManager_TransferComplete();\n}\n")),Object(l.b)("p",null,"The LCDManager_TransferComplete functions starts a new transfer:"),Object(l.b)(o.a,{mdxType:"CodeHeader"},"STM32G0HAL.cpp"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp",metastring:"{3-3,16-16}","{3-3,16-16}":!0}),"void LCDManager_TransferComplete()\n{\n    touchgfx::startNewTransfer();\n}\n\nvoid startNewTransfer()\n{\n    FrameBufferAllocator* fba = HAL::getInstance()->getFrameBufferAllocator();\n    fba->freeBlockAfterTransfer();\n    blockIsTransferred = true;\n\n    if (fba->hasBlockReadyForTransfer())\n    {\n        touchgfx::Rect r;\n        const uint8_t* pixels = fba->getBlockForTransfer(r);\n        LCDManager_SendFrameBufferBlockWithPosition((uint8_t*)pixels, r.x, r.y, r.width, r.height);\n    }\n}\n\n")),Object(l.b)("h2",{id:"conclusion"},"Conclusion"),Object(l.b)("p",null,"In this article we saw how the partial frame buffer strategy can help\nlowering the memory requirements for platforms that have displays with\nintegrated frame buffer memory."),Object(l.b)("p",null,"The method for configuring and setting up partial framebuffers is the\nsame across all platforms, but the method of sending the content of\nthe blocks to the display varies. We saw how, for an LTDC/DSI based\nplatform (STM32L4R9-DISCO) we were able to reconfigure the LTDC Layer\nto fit the next block ready for transfer on DSI, while on a platform\nwith no LCD controller (STM32G081) we were able to send the blocks to\nthe display using SPI."))}m.isMDXComponent=!0},275:function(e,t,a){"use strict";var n=a(5),r=a(0),l=a.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return l.a.createElement("p",null,l.a.createElement("div",{class:"videoWrapper"},l.a.createElement("video",{controls:!0},l.a.createElement("source",{src:this.props.url,type:"video/mp4"}))))},t}(r.Component);t.a=i}}]);