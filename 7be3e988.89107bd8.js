(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{1230:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(r.a.createElement("div",{class:e},r.a.createElement("div",{class:"highlight-heading"},r.a.createElement("h5",null,r.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(i.Component);t.a=s},1232:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?r.a.createElement("div",{class:"figure noshadow"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption)):r.a.createElement("div",{class:"figure"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=s},1234:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",{class:"code-header"},r.a.createElement("div",null,r.a.createElement("h5",null,this.props.children)))},t}(i.Component);t.a=s},1235:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),s=n(1230),o=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(s.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)},t}(i.Component);t.a=h},663:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(9),r=(n(0),n(1229)),s=(n(1231),n(1235),n(1232)),o=n(1234),h={id:"rendering",title:"Main Loop"},l={id:"basic-concepts/rendering",title:"Main Loop",description:"In this section you will learn more about the workings of the graphics\r",source:"@site/docs\\basic-concepts\\rendering.mdx",permalink:"/docs/next/basic-concepts/rendering",version:"next",sidebar:"docs",previous:{title:"Graphics Engine",permalink:"/docs/next/basic-concepts/graphics-engine"},next:{title:"Performance",permalink:"/docs/next/basic-concepts/performance"}},c=[{value:"Collect",id:"collect",children:[]},{value:"Update",id:"update",children:[{value:"Time based updates",id:"time-based-updates",children:[]},{value:"Requesting a redraw",id:"requesting-a-redraw",children:[]}]},{value:"Render",id:"render",children:[]},{value:"Wait",id:"wait",children:[]},{value:"Handling the framebuffers",id:"handling-the-framebuffers",children:[{value:"Two framebuffers",id:"two-framebuffers",children:[]},{value:"One framebuffer",id:"one-framebuffer",children:[]}]}],d={rightToc:c},p="wrapper";function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(p,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this section you will learn more about the workings of the graphics\nengine in TouchGFX and in particular the main loop.\nRecall that the main task for the graphics engine is to render the\ngraphics (the ui model) of your application in to the\nframebuffer. This process happens over and over again to produce new\nframes on the display."),Object(r.b)(s.a,{imageSource:"/img/basic-concepts/rendering/engine-cycle.png",noShadow:"true",width:320,mdxType:"Figure"}),Object(r.b)("p",null,"The graphics engine ",Object(r.b)("em",{parentName:"p"},"collects")," external events like display touches or\nbutton presses. These events are filtered and forwarded to the\napplication. The application can use these events to update the ui\nmodel. E.g. by changing a button to its pressed state when the user\ntouches the screen over the button, and later changing the button\nback to the released state when the user does not touch the screen\nanymore."),Object(r.b)("p",null,"Finally the graphics engine renders the updated model to the\nframebuffer. This process loops forever."),Object(r.b)("p",null,"After rendering a frame, the framebuffer is transferred to the display,\nwhere the user can see the graphics.\nThe transfer to the display must be synchronized with the display to\navoid disturbing glitches on the display. For some displays the\ntransfers must happen regularly with a minimum time inverval. For\nother displays the transfer must happen when a signal is sent from the\ndisplay."),Object(r.b)("p",null,'The graphics engine implements this synchronisation by waiting for a\n"go" signal from the hardware abstraction layer. Read more about the\nhardware abstraction layer\n',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../development/touchgfx-hal-development/touchgfx-al-development-introduction"}),"here")),Object(r.b)("p",null,"In pseudo code the main loop inside the TouchGFX graphics engine looks\nlike this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"while(true) {\n    collect();    // Collect events from outside\n    update();     // Update the application ui model\n    render();     // Render new updated graphics to the framebuffer\n    wait();       // Wait for 'go' from display\n}\n")),Object(r.b)("p",null,"The code is more involved in the real implementation, but the pseudo\ncode above helps in understanding the main parts of the engine."),Object(r.b)("p",null,"We will discuss these four stages in more detail below."),Object(r.b)("h2",{id:"collect"},"Collect"),Object(r.b)("p",null,"In this phase the graphics engine collects events from the outside\nenvironment. These events are typically touch events and buttons."),Object(r.b)("p",null,"TouchGFX samples and propagates events to the application. The raw\ntouch events are converted into more specific touch events:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Click:"),"\nThe user pressed or released his finger from the display"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Drag:"),"\nThe user moved his finger on the display (while touching the\ndisplay)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Gestures:"),"\nThe user moved his finger fast in a direction and then\nreleased. This is called a ",Object(r.b)("em",{parentName:"li"},"swipe")," and is recognized by the graphics\nengine.")),Object(r.b)("p",null,"The events are forwarded to the ui elements (e.g. widgets) that are\ncurrently active."),Object(r.b)("p",null,"The engine also forwards a ",Object(r.b)("em",{parentName:"p"},"tick")," event. This event represents the new\nframe (or the step in time), and is always send, also if there was no\nother external input. This event is used by applications to drive\nanimations, or other timebased actions like changing to a pause screen\nafter a specific time has elapsed."),Object(r.b)("h2",{id:"update"},"Update"),Object(r.b)("p",null,"Here the graphics engine works together with the application\nto update the ui to reflect the collected events. The graphics engine\nknows which Screen is currently active and passes events to\nthis object."),Object(r.b)("p",null,"The basic principle is that the engine informs the application\n(i.e. the Screen and Widget objects in the ui model) about the\nevents. In response, the application requests specific parts of the\ndisplay to be redrawn. The application does not draw directly as\nresponse to the events, it changes the properties of Widgets and request redraws."),Object(r.b)("p",null,"If for example a Click event occurs, the graphics engine searches the\nscene model of the Screen object to find the Widget that should\nreceive the event. Some Widgets like Image and TextArea do not wish to receive Click events. They further have an empty event handler, so nothing\nhappens."),Object(r.b)("p",null,"Other Widgets like Button reacts to a Click event (pressed or\nreleased). The Button widget changes its state to show another image\nwhen pressed, and changes the state back again when the touch is\nreleased again."),Object(r.b)(s.a,{imageSource:"/img/basic-concepts/rendering/button-on-image.png",noShadow:"true",width:480,caption:"Image widget in the background\nwith a Button widget in front",mdxType:"Figure"}),Object(r.b)("p",null,"When a Widget like the Button changes it state, it must also be\nredrawn in the framebuffer. The Widget is responsible for\ncommunicating this back to the graphics engine as response to the\nevent. The graphics engine does not itself redraw any Widgets based on the\ncollected events.\nThe Widgets keep track of their own internal state (for a Button, what\nimage to draw), and instruct the graphics engine to redraw the part\n(a rectangle) of the display that is covered by the Widget."),Object(r.b)("p",null,"The application itself can also react to the events. One of two ways are common:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Configure an\n",Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"../development/ui-development/designer-user-guide/interactions-view"}),"interaction"),"\nfor a Widget in TouchGFX Designer"),"\nFor example, we can configure an interaction to make another Widget\nvisible when the Button is pressed. This interaction is executed\nafter the Button has changed its state and requested a redraw of\nitself from the graphics engine. If you use the interaction to show\nanother (invisible) Widget, the application should also request a\nredraw from the graphics engine."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"React to events on the Screen"),"\nIt is also possible to react to events in the Screen itself. The\nevent handler are virtual functions on the Screen class. These\nfunctions can be reimplemented in the Screens in the\napplication. This can e.g. be used to perform an action whenever the\nuser touches the screen no matter where if the touch is on a Widget.")),Object(r.b)("p",null,"The Screen class has the following event handlers. These are called by\nthe graphics engine when the corresponding external event has been\ncollected:"),Object(r.b)(o.a,{mdxType:"CodeHeader"},"framework/include/touchgfx/Screen.hpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"\nvirtual void handleClickEvent(const ClickEvent& evt);\n\nvirtual void handleDragEvent(const DragEvent& evt);\n\nvirtual void handleGestureEvent(const GestureEvent& evt);\n\nvirtual void handleTickEvent();\n\nvirtual void handleKeyEvent(uint8_t key);\n")),Object(r.b)("p",null,"Any C++ code can be inserted in these event handlers. Typically\napplications update the state of some Widgets and/or call some\napplication specific functions (business logic)."),Object(r.b)("h3",{id:"time-based-updates"},"Time based updates"),Object(r.b)("p",null,"The handleTickEvent event handler is called in every frame. This\nallows the application to perform time based updates of the user\ninterface. An example could be to fade a Widget away after 10\nseconds. Assuming that we have 60 frames in a second, the code could\nlook like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"void handleTickEvent() {\n  tickCounter += 1;\n  if (tickCounter == 600) {\n    myWidget.startFadeAnimation(0, 20); // Fade to 0 = invisible in 20 frames\n  }\n}\n")),Object(r.b)("p",null,"The graphics engine also calls an event handler on the Model\nclass. This event handler is typically used to perform repeated\nactions like checking message queues or sampling GPIO:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"void Model::tick() {\n  bool b = sampleGPIO_Input1(); // Sample polled IO\n  if (b) {\n    ...\n  }\n}\n")),Object(r.b)("h3",{id:"requesting-a-redraw"},"Requesting a redraw"),Object(r.b)("p",null,"As we discussed above with the Button example; the Widgets are\nresponsible for requesting a redraw when their state changes. The\nmechanism behind this is called an ",Object(r.b)("em",{parentName:"p"},"invalidated area"),"."),Object(r.b)("p",null,"When the Button changes state (e.g. from released to pressed) and\nneeds a redraw, the area covered by the Button Widget is an\ninvalidated area. The graphics engine keeps a list of these\ninvalidated areas requested for the frame. All the collected events\n(touch, button, tick) may result in one or more invalidated areas, so\nthere can be many invalidated areas in every frame."),Object(r.b)("p",null,"The event handlers on the Screen class can also request a redraw of an\narea. Here we change the color of a Box widget, box1, in frame 10 and\nrequest a redraw by calling the ",Object(r.b)("em",{parentName:"p"},"invalidate")," method on the Box:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"void handleTickEvent() {\n  tickCounter += 1;\n  if (tickCounter == 10) {\n    box1.setColor(Color::getColorFrom24BitRGB(0xFF, 0x00, 0x00)); // Set color to red\n    box1.invalidate();                                            // Request redraw\n  }\n}\n")),Object(r.b)("p",null,"In this example the graphics engine will call the ",Object(r.b)("em",{parentName:"p"},"handleTickEvent"),"\nhandler in every frame. In the 10th frame, the application code\nrequests a redraw of the area covered by ",Object(r.b)("em",{parentName:"p"},"box1"),". As a response to this\nthe graphics engine will redraw that area in the framebuffer using the\ncolor saved in the ",Object(r.b)("em",{parentName:"p"},"box1")," widget."),Object(r.b)("p",null,"In the user interface below we have a Button Widget and a Box Widget\non top of a background image. If we insert an interaction on the\nButton to change the color of the Box when the Button is clicked we\nget two invalidated areas (indicated with red) when the user clicks\nthe Button:"),Object(r.b)(s.a,{imageSource:"/img/basic-concepts/rendering/button-and-box.png",noShadow:"true",width:480,caption:"Two invalidated areas",mdxType:"Figure"}),Object(r.b)("p",null,"The area of the Box is invalidated to get the new color drawn in the\nframebuffer. The Button also invalidates itself to get the released\nstate drawn again."),Object(r.b)("h2",{id:"render"},"Render"),Object(r.b)("p",null,"As we just discussed, the result of the update phase is a list of\nareas to redraw, the invalidated areas. The task for the render phase\nis basically to run through this list and draw the Widgets covering\nthese areas into the framebuffer."),Object(r.b)("p",null,"This phase is handled automatically by the graphics engine. The\napplication has defined the scene model (the Widgets in the ui) and\ninvalidated some area. The rest is handled by the engine."),Object(r.b)("p",null,"The graphics engine handles the invalidated areas one-by-one. For each\narea the engine scans the scene model and collects a list of the\nwidgets that is covered by the area (partly or in whole)."),Object(r.b)("p",null,"Given this list of Widgets the graphics engine calls the draw method\non the Widgets. Starting with the widget in the background and ending\nwith the foremost Widget."),Object(r.b)("p",null,"The Widget's draw methods use the state of the Widget, e.g. the color,\nwhen drawing to the framebuffer. Any information that is needed to\ndraw the Widget must be saved to the Widget during the update\nphase. Otherwise this information is not available in the rendering\nphase."),Object(r.b)("h2",{id:"wait"},"Wait"),Object(r.b)("p",null,"The TouchGFX graphics engine waits for a signal before updating and\nrendering the next frame. There are two reasons for waiting between\nthe frames instead of just continously rendering frames as fast as\npossible:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The rendering is synchronized with the display.\nAs mentioned above some displays requires that the framebuffer is\ntransmitted repeatedly. While this transmission is ongoing, it is\nnot adviseable to render arbitrarily to the framebuffer. The\ngraphics engine therefore waits for a short time after the\ntransmission is started before starting the rendering.\nOther displays send a signal to the microcontroller when the\nframebuffer should be transmitted. The graphics engine waits for\nthat signal.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Frames are rendered at a fixed rate.\nIt is often benificial for the application that frames are rendered\nat a fixed rate, as this makes it easier to create animations that\nlasts a specific time.\nFor example, if you have a 60 Hz display, a two seconds animation\nshould be programmed to complete in 120 frames."))),Object(r.b)("p",null,"The time where the graphics engine is waiting is typically used by\nother lower priority processes in the application. In these cases the\ntime is not wasted, as the lower priority processes should run at some\npoint in time anyway."),Object(r.b)("h2",{id:"handling-the-framebuffers"},"Handling the framebuffers"),Object(r.b)("p",null,"Recall from the discussion previously that the graphics engine\nsynchronizes with the display before the framebuffer is updated. After\nthe rendering to the framebuffer the engine also needs to make sure\nthat the display shows the updated framebuffer."),Object(r.b)("h3",{id:"two-framebuffers"},"Two framebuffers"),Object(r.b)("p",null,"In the simplest setup we have two framebuffers available. The graphics\nengine alternates between the two framebuffers. While drawing a frame\ninto a framebuffer, the other framebuffer is transferred to (and shown on) the\ndisplay."),Object(r.b)(s.a,{imageSource:"/img/basic-concepts/rendering/engine-cycle-2fb-normal.png",noShadow:"true",caption:"Double framebuffers",mdxType:"Figure"}),Object(r.b)("p",null,"In this drawing we assume a parallel RGB display connected to the LTDC\ncontroller. This means that a framebuffer must be transmitted to the\ndisplay in every frame. As we have two framebuffers the graphics engine\ncan draw into one framebuffer while the other framebuffer is being\ntransmitted. This scheme works very well and is preferred if possible."),Object(r.b)("p",null,"As the graphics engine is drawing in every frame we also transmit a\nnew framebuffer in all frames in the above drawing."),Object(r.b)("p",null,"There will often be frames where the application is not updating\nanything. This implies that nothing is rendered. The same framebuffer\nis therefore transmitted again in the succeeding frame."),Object(r.b)(s.a,{imageSource:"/img/basic-concepts/rendering/engine-cycle-2fb-no-update.png",noShadow:"true",caption:"No update in frame 2",mdxType:"Figure"}),Object(r.b)("p",null,"The application is not drawing anything in frame 2, so the graphics\nengine retransmits framebuffer 2 again in frame 3."),Object(r.b)("p",null,"The typical parallel RGB display has a refresh rate around 60 Hz. This\nupdate frequence must be maintained by the microcontroller. This\nupdate frequency means that we have 16 ms to render a new frame before\nthe transmit begins again. In some cases the time to render a new\nframe is more than 16 ms. In this case the graphics engine just\nretransmit the same frame again (as before):"),Object(r.b)(s.a,{imageSource:"/img/basic-concepts/rendering/engine-cycle-2fb-long-render.png",noShadow:"true",caption:"Long render time",mdxType:"Figure"}),Object(r.b)("p",null,"The rendering of frame 1 takes more than 16 ms, so the frame 0\npreviously rendered to framebuffer 1 is retransmitted. The new frame\nin framebuffer 2 is transmitted in frame 3. When two framebuffers are\navailable, the rendering time can be very long. The previous frame is\nretransmitted until the new frame is available."),Object(r.b)("h3",{id:"one-framebuffer"},"One framebuffer"),Object(r.b)("p",null,"In some systems there is only memory for one framebuffer. If we have a\nparallel RGB display we are thus forced to transmit framebuffer 1 in\nevery frame."),Object(r.b)("p",null,"This can be problematic because the graphics engine is forced to draw into\nthe same framebuffer that we are also transmitting to the display at\nthe same time. If this is done without care there is a high risk that\nthe display shows a frame that is a mix of the previous frame and the\nnew."),Object(r.b)("p",null,"One solution is to hold back the drawing until the transfer is\ncomplete and only draw in timeslot before the transfer starts\nagain. This yields little time to draw as the transfer takes up a significant part of the overall frame time. Another drawback is that incomplete frames (tearing) might still occur if the drawing is not complete when the next transfer starts."),Object(r.b)("p",null,"A more potential solution is to keep track of how much of the\nframebuffer is already transmitted and then limit the rendering to the appropriate part of the framebuffer. As the transfer progresses more and more of the framebuffer is available for the rendering algorithms."),Object(r.b)("p",null,"The graphics engine contains algorithms that helps the programmer to\nensure that the drawing is performed correctly."),Object(r.b)("p",null,"The application updates and renders the framebuffer in every frame:"),Object(r.b)(s.a,{imageSource:"/img/basic-concepts/rendering/engine-cycle-1fb-normal.png",noShadow:"true",caption:"A single framebuffer is retransmitted in every frame",mdxType:"Figure"}),Object(r.b)("p",null,"The framebuffer is retransmitted unchanged if nothing is updated in a frame."),Object(r.b)("p",null,"If the rendering time is longer than 16 ms the rendering has not\nfinished when the retransmission starts again:"),Object(r.b)(s.a,{imageSource:"/img/basic-concepts/rendering/engine-cycle-1fb-long-render.png",noShadow:"true",caption:"Long render time",mdxType:"Figure"}),Object(r.b)("p",null,"In this situation the graphics engine must make sure that the parts\nthat is being transmitted is rendered completely. Otherwise the\ndisplay will show the unfinished framebuffer."),Object(r.b)("p",null,"In the next section we will discuss the rendering time for the\nindividual Widgets. This will help the programmer to write applications\nof high performance."))}u.isMDXComponent=!0}}]);