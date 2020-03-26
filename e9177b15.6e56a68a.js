(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{242:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),i=(n(0),n(258)),o=n(259),s=(n(264),n(268)),l={id:"Performance",title:"Performance"},c={id:"BasicConcepts/Performance",title:"Performance",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\BasicConcepts\\Performance.mdx",permalink:"/docs/BasicConcepts/Performance",sidebar:"docs",previous:{title:"Main Loop",permalink:"/docs/BasicConcepts/Rendering"},next:{title:"Introduction",permalink:"/docs/Development/DevelopmentIntroduction"}},h=[{value:"Measuring the rendering time",id:"measuring-the-rendering-time",children:[]},{value:"Counting the lost frames",id:"counting-the-lost-frames",children:[{value:"Compensating for lost frames",id:"compensating-for-lost-frames",children:[]}]},{value:"What affects the rendering time?",id:"what-affects-the-rendering-time",children:[{value:"How much of the screen is updated",id:"how-much-of-the-screen-is-updated",children:[]},{value:"The number of layers in the graphics",id:"the-number-of-layers-in-the-graphics",children:[]},{value:"The complexity of rendering the pixels",id:"the-complexity-of-rendering-the-pixels",children:[]},{value:"Hardware support for rendering",id:"hardware-support-for-rendering",children:[]}]},{value:"When should you consider rendering time",id:"when-should-you-consider-rendering-time",children:[]},{value:"Tips to get good performance",id:"tips-to-get-good-performance",children:[]}],m={rightToc:h},d="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this section we will discuss performance aspects of an embedded\ngraphical user interface."),Object(i.b)("p",null,"A high performance is here defined as getting a high frame rate while\nstill obtaining the desired graphical effects and animations."),Object(i.b)("p",null,"Let's recall from the previous section how the frame rate of the user\ninterface is affected by the main loop. Assume again that there is a\nparallel RGB display attached to the LTDC and two framebuffers.\nThe basic situation is illustrated below:"),Object(i.b)(o.a,{imageSource:"/img/BasicConcepts/Rendering/engine_cycle_2fb_normal.png",noShadow:"true",caption:"Double framebuffers",mdxType:"Figure"}),Object(i.b)("p",null,"As the display is assumed refreshed 60 times each second there is approximately\n16 ms between each refresh.",Object(i.b)("br",{parentName:"p"}),"\n","The calculation is this: 1 s / 60 = 0.01667 s = 16.67 ms."),Object(i.b)("p",null,"TouchGFX starts drawing frame 1 into framebuffer 2 at the time where the\ntransfer of framebuffer 1 has started. If the rendering of\nframe 1 is finished before the next transfer starts we can transfer framebuffer 2.\nIf not finished within 16.67 ms framebuffer 1 is transferred\nagain and the display will appear unchanged:"),Object(i.b)(o.a,{imageSource:"/img/BasicConcepts/Rendering/engine_cycle_2fb_long_render.png",noShadow:"true",caption:"Main loop time above 16.67 ms",mdxType:"Figure"}),Object(i.b)("p",null,"This situation is denoted a lost frame."),Object(i.b)("p",null,"The time for the collect and update phases are typically minuscule, e.g. less than 1 ms, and therefore more or less neglectable when considering the overall time taken of the main loop. Therefore, in the following and in general, when considering render time, this includes the collect and update phases."),Object(i.b)("p",null,"If the rendering time in many frames exceeds the 16.67 ms time limit the\nframe rate on the display will be 30 frames per second (fps)."),Object(i.b)("p",null,"If the rendering generally is shorter than 16.67 ms, but in some\nframes longer than 16.67 ms, the frame rate may be close to 60 fps in\naverage, but the animation may not appear fluent to the\nuser. Depending on the application it can look like some steps in the\nanimation are fast and some are slow. This is not desireable."),Object(i.b)("p",null,"The rendering time can also be even longer. If it is just above 33 ms,\nthe framerate will drop to 20 fps as we only have a new frame ready on\nevery third transfer."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"FPS"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Max rendering time"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"60"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"16.67 ms")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"30"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"33.34 ms")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"20"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"50.00 ms")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"15"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"66.67 ms")))),Object(i.b)("p",null,"The table shows the maximum rendering time (including the collect and\nupdate phases) that is available for a given framerate."),Object(i.b)("p",null,"To achieve a good performance of a user interface it can be very\nbeneficial to check and monitor the frame rate regularly. Two\napproaches can be used:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Measure the rendering time"),Object(i.b)("li",{parentName:"ul"},"Count the lost frames")),Object(i.b)("h2",{id:"measuring-the-rendering-time"},"Measuring the rendering time"),Object(i.b)("p",null,"The first approach of measuring the rendering time gives the most\ndetailed information. The idea is basically to measure the time from\nthe frame transfer to the end of the rendering phase.",Object(i.b)("br",{parentName:"p"}),"\n","The graphics engine calls a function on the GPIO class when the\ncollect phase starts and makes another call when the rendering phase\nends. The application defines these function and can hook into them to\npeform measurements."),Object(i.b)("p",null,"The measurements can be done in two ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use external timing device like an oscilloscope:",Object(i.b)("br",{parentName:"li"}),"To do this the application should make an external digital output\nhigh when the GPIO::set(RENDER_TIME) is called, and low when the\nGPIO:clear(RENDER_TIME) is called. The oscilloscope can then measure\nthe rendering time as the time the output is high."),Object(i.b)("li",{parentName:"ul"},"Use an internal timer:",Object(i.b)("br",{parentName:"li"}),"Another approach is to use an internal timer, like the sysTick\ntimer. When the GPIO::set(RENDER_TIME) is called the application can\nsave the value of the timer in a variable. When the clear call is\nmade the application can read the timer again and subtract the\nprevious value to get the render time. The speed of the timer will\ndefine the resolution of the measurement. The application must\nsomehow make the render time visible. One way is to save the value\nin a global variable and maybe show the value on the screen in a\nTextArea. The value can also be checked with a debugger.")),Object(i.b)("h2",{id:"counting-the-lost-frames"},"Counting the lost frames"),Object(i.b)("p",null,"The graphics engine counts the number of transfers that has\noccured during the last collect-update-rendering phase. The\napplication can easily check this value to see if a frame\nwas lost and the frame rate therefore lowered."),Object(i.b)("p",null,"The count is available in the ",Object(i.b)("em",{parentName:"p"},"HAL")," class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"void handleTickEvent() {\n  tickCounter += 1;\n  if (HAL::getInstance()->getLCDRefreshCount() > 1) {\n    //Alert programmer somehow\n    ...\n  }\n}\n")),Object(i.b)("h3",{id:"compensating-for-lost-frames"},"Compensating for lost frames"),Object(i.b)("p",null,"When frames are lost and the framerate of one of our animations therefore lowered we can compensate to a certain degree. We can either"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"wait it out - let the animation go on, resulting in a longer animation duration, and possibly unsmooth animation. "),Object(i.b)("li",{parentName:"ul"},"skip some frames - make sure that the overall animation does not take longer time than intended by skipping frames.")),Object(i.b)("p",null,"TouchGFX can be instructed to automaticallly skip some frames, when frames are lost. This can be accomplished by ticking animations more than once per actual frame. This can help in making animations more fluent when the render time is uneven."),Object(i.b)(s.a,{mdxType:"CodeHeader"},"HAL.hpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"void setFrameRateCompensation(bool enabled)\n")),Object(i.b)("h2",{id:"what-affects-the-rendering-time"},"What affects the rendering time?"),Object(i.b)("p",null,"A number of different things affect the rendering time: The size of\nthe updated parts, the use of layering, the complexity of the widgets,\nand the available hardware support for the rendering."),Object(i.b)("h3",{id:"how-much-of-the-screen-is-updated"},"How much of the screen is updated"),Object(i.b)("p",null,"The rendering time is generally proportional to the number of pixels\nthat must be updated. So if an animation takes too long time to render,\na possible fix is to reduce the area of the animation. For example, if\nyou have a rotating image and the performance is not good enough, the\nperformance can be improved by reducing the size of the image."),Object(i.b)(o.a,{imageSource:"/img/BasicConcepts/performance/reducing_image_size.png",noShadow:"true",caption:"Reducing image size reduces the rendering time",mdxType:"Figure"}),Object(i.b)("p",null,"Remember that the graphics engine redraws the\nareas that the application invalidated. This means that it is\nimportant to only invalidate the areas that actually requires a\nrefresh."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"The larger the invalidated areas, the longer the render time")),Object(i.b)("h3",{id:"the-number-of-layers-in-the-graphics"},"The number of layers in the graphics"),Object(i.b)("p",null,"In a typical application the graphics will consist of different\nelements that are stacked upon each other. If one of the elements is\nupdated all the elements must typically be redrawn."),Object(i.b)("p",null,"A typical example of this is a background image, a frame, and some\ntext:"),Object(i.b)(o.a,{imageSource:"/img/BasicConcepts/performance/text_in_a_frame.png",noShadow:"true",caption:"Layering graphical elements",mdxType:"Figure"}),Object(i.b)("p",null,"This user interface is created by putting a TextArea widget on\ntop of an Image widget showing a transparent frame. Both on top of\nthe background Image:"),Object(i.b)(o.a,{imageSource:"/img/BasicConcepts/performance/text_in_a_frame_designer.png",noShadow:"true",caption:"Layering graphical elements in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("p",null,"This solution is used very often in application. It is a very easy\nsolution with a high flexibility, as it is, for example, possible to\nchange the frame at runtime or move the frame and the text on the\nbackground."),Object(i.b)("p",null,"The problem regarding rendering time is that if the text is updated at\nruntime and needs to be redrawn, the graphics engine also needs to\nredraw the background and the frame; and then the new text. This increases\nthe time to render the text considerable."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"The more layers in an invalidated area, the longer the render time")),Object(i.b)("h3",{id:"the-complexity-of-rendering-the-pixels"},"The complexity of rendering the pixels"),Object(i.b)("p",null,"Not all pixels are equally difficult to render to the framebuffer. In\nall types of rendering the graphical engine must write the resulting\npixel to the framebuffer. But the cost of calculating the pixel to\nwrite differs."),Object(i.b)("p",null,"The fixed color, e.g. used in the Box Widget, has the lowest cost, as\nthe calculation of a pixel is done once and reused for all the\npixels. This means that we can get a very high performance by using a\nlot of Boxes. This is not recommended as the user interface will not\nbe of high quality."),Object(i.b)("p",null,"An image has the next lowest cost of pixel calculation since the\npixels are stored in a ready to use format in the bitmaps. Calculating\nthe pixel to write to the framebuffer is a matter of loading the color\nvalue from the correct place in the bitmap."),Object(i.b)("p",null,'Text bears a cost comparable to images as the individual letters are\nactually represented as small images. In practice the cost is higher\nas the high number of small images gives rise to a considerable\n"start-stop" cost. For example the calculation of the position of the\nindividual letters. In order for text to look as nice as possible, it\nis represented as small images with transparency, see the notes on\ntransparency below. '),Object(i.b)("p",null,"Rotated or scaled images are more expensive. The task is again to load\nthe pixel value from the bitmap, but this time it is a more time\nconsuming calculation because the graphics engine has to incorporate\nthe scaling and rotation."),Object(i.b)("p",null,"Geometric elements like a circle are even more expensive. This time we\ncannot load the pixel color from a bitmap, but we have to calculate\nboth the shape of the circle and the color of individual pixels in the\ncircle."),Object(i.b)("p",null,'Transparency adds to the cost of drawing an element. An element is\ntransparent if some of the pixels are not solid. This increases the\ncost of drawing as the graphical engine first has to draw the element\nbehind the transparent element (as we saw in the "text in a frame"\nsection). Secondly the graphical engine then has to combine the\nbackground pixel with the pixel of the transparent element and write\nthe result to the framebuffer. This calculation takes considerable\nmore time than just writing the calculated pixel.'),Object(i.b)(o.a,{imageSource:"/img/BasicConcepts/performance/box_image_texture_circle.png",noShadow:"true",caption:"Box, Image, rotated Image, and circle. Solid elements in the first row. Transparent elements below.",mdxType:"Figure"}),Object(i.b)("p",null,"Transparency always gives you an extra layer. But putting solid pixels\non top of other solid pixels does not always increase the number of\nlayers. The graphical engine tries to not draw pixels that are covered\nby other solid pixels, as this would be a waste of precious time."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"The more expensive elements in the invalidated area, the longer the render time")),Object(i.b)("p",null,"Remember that is only the elements that are part of the invalidated\narea, that adds to the rendering time. Elements outside of the\ninvalidated areas does not impact the rendering time."),Object(i.b)("p",null,"Read more about ui components and performance ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/GeneralUIComponentPerformance"}),"here")),Object(i.b)("h3",{id:"hardware-support-for-rendering"},"Hardware support for rendering"),Object(i.b)("p",null,"Some STM32 microcontrollers contain a graphical accelerator called\nChrom-ART (or DMA2D). This accelerator can reduce the rendering\ntime. As the accelerator runs in parallel with the microcontroller\ncore, the microcontroller is free to run other tasks while the\naccelerator renders graphics."),Object(i.b)("p",null,"Chrom-ART is mainly useful for images and text. It is automatically\nused by the graphics engine when available."),Object(i.b)("h2",{id:"when-should-you-consider-rendering-time"},"When should you consider rendering time"),Object(i.b)("p",null,"Rendering time is not equally important all the time. You should pay\nattention to the rendering time when a slow frame rate is visible to\nthe user. This is typically the case when you have an animation\nrunning on part of the screen (like a rotating icon) or when you move\nor slide something across the screen. If the update frequency is low\nit will appear step-wise instead of fluent to the user. If this is the\ncase you should check the rendering time."),Object(i.b)("p",null,"On the other hand, if you replace the whole screen with a new screen,\nit is normally not visible to the user if the frame rate dropped\nsignificantly during the change. This is because the user cannot see\nwhen the rendering started, but only when it finished."),Object(i.b)("p",null,"These two rules means that for animated elements (e.g. moving) you\nshould use few layers and refrain from using complex elements and many\nlayers. For other parts of the screen, this could be unproblematic."),Object(i.b)(o.a,{imageSource:"/img/BasicConcepts/performance/clock_and_scrolllist.png",noShadow:"true",caption:"Analog clock and a scroll list",mdxType:"Figure"}),Object(i.b)("p",null,"In this example we have an analog clock on the left. The three clock\nhands are rendered by rotating small elongated images. This is\nnormally fine as the hands do not move all the time. But if we wanted\nto move the clock around on the screen, they would be redrawn in every\nframe and that could be problematic, as drawing rotated images is\ntypically time consuming."),Object(i.b)("p",null,"On the right we have a scroll list. The user can move this list of\nnumbers up and down, so we need a high framerate for the user\ninterface to appear responsive. Therefore it is important that we\nconsider the rendering time of the elements in the scroll list or\nreduce the size of the scroll list."),Object(i.b)("h2",{id:"tips-to-get-good-performance"},"Tips to get good performance"),Object(i.b)("p",null,"We end this section with a summary of the tips to obtain a good performance:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Do not redraw unchanged things"),Object(i.b)("br",{parentName:"li"}),"Make sure that you do not accidentially invalidate unnecessary parts\nof the display. This reduces the performance without any benifit."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Find balance between quality and speed"),"\nReducing the complexity of the elements can improve the\nperformance. A good balance between this and the performance is\noften the key."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Utilize hardware capabilities"),"\nThe capability of a microcontroller with hardware acceleration\n(Chrom-ART) is often higher than a microcontroller without. Consider\nusing a microcontroller with Chrom-ART."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Replace calculated graphics with images"),Object(i.b)("br",{parentName:"li"}),"The calculated circle is slower than an image of a circle. In\ngeneral images can replace many static elements."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Adjust display refresh rate"),"\nAs we discussed in the beginning of this section is the refresh rate\na hard limit for the rendering time. If the rendering time increases\nabove the refresh rate, the frame rate drops. If your rendering time\nis just a little above the refresh rate, it may be possible to lower\nthe refresh rate of the display to e.g. 55 Hz (corresponding to 18.2\nms), and keep the high frame rate.")))}p.isMDXComponent=!0},264:function(e,t,n){"use strict";n(265);var a=n(5),r=n(0),i=n.n(r),o=n(261),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return i.a.createElement(o.a,{to:e,target:"_blank"},this.props.children)},t}(r.Component);t.a=s},265:function(e,t,n){"use strict";n(266)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},266:function(e,t,n){var a=n(17),r=n(18),i=n(23),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);