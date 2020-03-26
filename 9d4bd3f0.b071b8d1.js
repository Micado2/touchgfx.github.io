(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return f}));var a=n(1),o=n(9),r=(n(0),n(257)),i=n(260),s=(n(258),n(271),n(269),n(272),n(266)),c=(n(273),n(259)),l=n(270),h=n(267),p={id:"backend-communication",title:"Backend Communication"},d={id:"Development/UIDevelopment/TouchGFXEngineFeatures/backend-communication",title:"Backend Communication",description:"import Link from '@docusaurus/Link';",source:"@site/docs\\Development\\UIDevelopment\\TouchGFXEngineFeatures\\backend-communication.mdx",permalink:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/backend-communication",sidebar:"docs",previous:{title:"Font Caching",permalink:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/FontCache"},next:{title:"Mixins",permalink:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/mixins"}},u=[{value:"The Model Class",id:"the-model-class",children:[]},{value:"System Interfacing",id:"system-interfacing",children:[{value:"Sampling from GUI Task",id:"sampling-from-gui-task",children:[]},{value:"Sampling from Secondary Task",id:"sampling-from-secondary-task",children:[]}]},{value:"Propagating Data to UI",id:"propagating-data-to-ui",children:[]},{value:"Transmitting Data from UI to Surrounding System",id:"transmitting-data-from-ui-to-surrounding-system",children:[]},{value:"Examples",id:"examples",children:[{value:"From GUI Task",id:"from-gui-task",children:[]},{value:"From Other Task",id:"from-other-task",children:[]},{value:"From Multiple tasks",id:"from-multiple-tasks",children:[]},{value:"From Task and External Interrupt Line",id:"from-task-and-external-interrupt-line",children:[]}]}],m={rightToc:u},b="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(b,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In most applications, the UI needs to be connected to the rest of your system somehow, and send and receive data. This could be interfacing with hardware peripherals (sensor data, A/D conversions, serial communication, ...) or interfacing with other software modules."),Object(r.b)("p",null,"This article describes the recommended solutions for implementing this connection."),Object(r.b)("p",null,"The first method is a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#sampling-from-gui-task"}),'"quick-and-dirty"')," approach, primarily intended for prototyping, whereas the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#sampling-from-secondary-task"}),"second method")," is an architecturally sound way of properly connecting the UI with the remaining components in a real world application."),Object(r.b)("p",null,"In the end of this article, we link to examples of using both methods."),Object(r.b)("h2",{id:"the-model-class"},"The Model Class"),Object(r.b)("p",null,"All TouchGFX applications have a Model class, which apart from storing UI state information is also intended to function as the interface to your surrounding system. By this we are referring to both hardware peripherals but also communicating with other OS tasks in your system. It is normally not a good design to access other software modules or hardware in the individual View classes."),Object(r.b)(s.a,{mdxType:"FurtherReading"},"To learn more about the Model: ",Object(r.b)(i.a,{to:"/docs/Development/UIDevelopment/software-architecture/model-view-presenter-design-pattern",mdxType:"Link"},"MVP pattern")),Object(r.b)("p",null,"The Model class is well suited for placing any such interface code because:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The Model class has a ",Object(r.b)(l.a,{text:"tick()",mdxType:"InlineCode"})," function which is automatically called every frame and can be implemented to look for and react to events from other sub-modules."),Object(r.b)("li",{parentName:"ol"},"The Model class has a pointer to your currently active Presenter, in order to be able to notify the UI of incoming events.")),Object(r.b)("h2",{id:"system-interfacing"},"System Interfacing"),Object(r.b)("p",null,"There are two ways of interfacing with the surrounding system, either by sampling directly from the GUI Task, or by sampling from a Secondary Task"),Object(r.b)("h3",{id:"sampling-from-gui-task"},"Sampling from GUI Task"),Object(r.b)("p",null,"The best way of interfacing with surrounding system depends on how frequently you need to sample, how time consuming it is and how time critical it is."),Object(r.b)("p",null,"If your requirements in those regards are lenient, the simplest approach is to just sample the surrounding system directly in the ",Object(r.b)(l.a,{text:"Model::tick",mdxType:"InlineCode"})," function."),Object(r.b)("p",null,"If the sampling occurs less frequently than your frame rate (typically around 60Hz), you can just add a counter and only do the sampling every Nth tick. When done this way, your sampling operation must be somewhat fast (typically 1ms or less), otherwise your frame rate will begin to suffer, since the sampling is done in the context of the GUI task and will delay drawing the frame."),Object(r.b)("h3",{id:"sampling-from-secondary-task"},"Sampling from Secondary Task"),Object(r.b)("p",null,"Alternatively, if it is not desirable to place the interaction with the surrounding system directly within the context of the GUI task, you can create a new OS task responsible for doing the sampling."),Object(r.b)("p",null,"You can configure this task to run at the exact time intervals you need for your specific scenario. Also depending on your needs this new task can have a lower or higher priority than the GUI task."),Object(r.b)("p",null,"If it has a higher priority, then you are guaranteed that it runs at exactly the times you have specified, regardless of what the GUI task is doing. This has the drawback that if it is a CPU consuming process it might impact the frame rate of the UI."),Object(r.b)("p",null,"If on the other hand the sampling is not time critical, you can assign the task a lower priority than the GUI task, such that the UI frame rate is never affected by the sampling of the surrounding system. The GUI task will sleep a lot while rendering (e.g. when waiting for a DMA-based pixel transfer to complete) so lower priority tasks will be allowed to run quite frequently and this is therefore sufficient for the vast majority of applications."),Object(r.b)("p",null,"If you use the secondary task approach, we recommend that you take advantage of the inter-task messaging system that is provided by your RTOS. Most, if not all, RTOSes have a queue/mail mechanism which allows you to send data (typically user-defined C structs, byte arrays or simple integers) from one task to another. In order to communicate new data to the GUI task, setup a mailbox or message queue for the UI task, and send the data to the GUI task using this messaging system. You can then ",Object(r.b)(l.a,{text:"Model::tick",mdxType:"InlineCode"})," poll the mailbox of the GUI task to check if any new data has arrived. In case, read the data and update the UI accordingly."),Object(r.b)("h2",{id:"propagating-data-to-ui"},"Propagating Data to UI"),Object(r.b)("p",null,"Regardless of whether you use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#sampling-from-gui-task"}),"Sampling from GUI Task")," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#sampling-from-secondary-task"}),"Sampling from Secondary Task"),", the ",Object(r.b)(l.a,{text:"Model::tick",mdxType:"InlineCode"})," function is the place where the GUI Task becomes aware of the new data to be shown in the UI. Apart from acting as an interface to your surrounding system, recall from earlier that the Model class is also responsible for holding state data, so there might be some state variables that needs to be updated too."),Object(r.b)("p",null,"Let us consider a simple example where a temperature sensor is attached to the system, and that the current temperature is to be shown in the UI. In preparation, we will augment the Model class to support this:"),Object(r.b)(h.a,{mdxType:"CodeHeader"},"Model.hpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"class Model\n{\npublic:\n  // Function that allow your Presenters to read current temperature.\n  int getCurrentTemperature() const { return currentTemperature; }\n\n  // Called automatically by framework every tick.\n  void tick();\n  ...\nprivate:\n  // Variable storing last received temperature;\n  int currentTemperature;\n  ...\n};\n")),Object(r.b)("p",null,"With the above, your ",Object(r.b)(l.a,{text:"Presenters",mdxType:"InlineCode"})," are able to ask the model about the current temperature, allowing a Presenter to set this value in the UI (the View) when entering a screen that displays the temperature. What we need to do now is to be able to update the UI again when new temperature information is received. To do this we take advantage of the fact that the Model has a pointer to your currently active Presenter. The type of this pointer is an interface (",Object(r.b)(l.a,{text:"ModelListener",mdxType:"InlineCode"}),") which you can modify to reflect the application-specific events that are appropriate:"),Object(r.b)(h.a,{mdxType:"CodeHeader"},"ModelListener.hpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"class ModelListener\n{\npublic:\n  // Call this function to notify that temperature has changed.\n  // Per default, use an empty implementation so that only those\n  // Presenters interested in this specific event need to\n  // override this function.\n  virtual void notifyTemperatureChanged(int newTemperature) {}\n};\n")),Object(r.b)("p",null,'Now that we have this interface hooked up, the remaining this is to do the actual sampling of incoming "',Object(r.b)(c.a,{text:"new temperature",mdxType:"InlineNote"}),'" events ',Object(r.b)(l.a,{text:"Model::tick",mdxType:"InlineCode"})),Object(r.b)(h.a,{mdxType:"CodeHeader"},"Model.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'void Model::tick()\n{\n  // Pseudo-code for sampling data\n  if (OS_Poll(GuiTaskMBox))\n  {\n    // Here we assume that you have defined a "Message" struct containing type and data,\n    // along with some event definitions.\n    struct Message msg = OS_Read(GuiTaskMBox);\n    if (msg.eventType == EVT_TEMP_CHANGED)\n    {\n       // We received information that temperature has changed.\n       // First, update Model state variable\n       currentTemperature = msg.data;\n\n      // Second, notify the currently active Presenter that temperature has changed.\n      // The modelListener pointer points to the currently active Presenter.\n      if (modelListener != 0)\n      {\n        modelListener->notifyTemperatureChanged(currentTemperature);\n      }\n    }\n  }\n}\n')),Object(r.b)("p",null,"The approach above ensures two things:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)(l.a,{text:"currentTemperature",mdxType:"InlineCode"})," variable is always up-to-date so that your Presenter can at any time obtain the current temperature."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)(l.a,{text:"Presenter",mdxType:"InlineCode"})," is immediately notified of temperature changes and can take appropriate action.")),Object(r.b)("p",null,"One advantage of the MVP pattern is that you achieve a separated handling of notifications depending on what screen you are currently on. Assume for instance that a temperature changed event occurs while displaying some kind of settings menu ",Object(r.b)(c.a,{text:"(e.g. MainMenuPresenter/MainMenuView is active)",mdxType:"InlineNote"})," where the current temperature is of no relevance."),Object(r.b)("p",null,"Since the ",Object(r.b)(l.a,{text:"notifyTemperatureChanged",mdxType:"InlineCode"})," function has a default empty implementation, this notification is simply disregarded by the ",Object(r.b)(l.a,{text:"MainMenuPresenter",mdxType:"InlineCode"}),". On the other hand, if you have a ",Object(r.b)(l.a,{text:"TemperatureControlPresenter",mdxType:"InlineCode"})," you can in this Presenter override the ",Object(r.b)(l.a,{text:"notifyTemperatureChanged",mdxType:"InlineCode"})," function and inform the View that it should display an updated temperature:"),Object(r.b)(h.a,{mdxType:"CodeHeader"},"TemperatureControlPresenter.hpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"class TemperatureControlPresenter : public ModelListener\n{\npublic:\n  // override the empty function.\n  virtual void notifyTemperatureChanged(int newTemperature) {\n    view.setTemp(newTemperature);\n  }\n};\n")),Object(r.b)("p",null,"The View class ",Object(r.b)(l.a,{text:"TemperatureControlView",mdxType:"InlineCode"}),", must ofcourse implement the ",Object(r.b)(l.a,{text:"setTemp",mdxType:"InlineCode"})," method."),Object(r.b)("h2",{id:"transmitting-data-from-ui-to-surrounding-system"},"Transmitting Data from UI to Surrounding System"),Object(r.b)("p",null,"The reverse direction where data/events are transferred from the UI to the surrounding system, is done through the Model in much the same way. Continuing the example from before if we need to add the ability to configure a new target temperature, we would add the following to the Model:"),Object(r.b)(h.a,{mdxType:"CodeHeader"},"Model.hpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"void setNewTargetTemperature(int newTargetTemp)\n{\n  // Pseudo-code for sending an event to a task responsible for controlling temperature.\n  struct Message msg;\n  msg.eventType = EVT_SET_TARGET_TEMP;\n  msg.data = newTargetTemp;\n  OS_Send(SystemTaskMBox, &msg);\n}\n")),Object(r.b)("p",null,"In case the user sets a new target temperature in the UI, the View can inform the Presenter which holds a pointer to the Model object and is therefore able to call the ",Object(r.b)(l.a,{text:"setNewTargetTemperature",mdxType:"InlineCode"})," function."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("p",null,"The following examples are full demos configured for specific demo boards, however much of the code demonstrated can be reused for other demo boards and custom hardware."),Object(r.b)("h3",{id:"from-gui-task"},"From GUI Task"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://sw-center.st.com/touchgfx/TouchGFX/knowledgebase/PoolDemoHwInt.4.9.3.zip"}),"A working example")," for STM32F746 showing how to sample a button and controlling a LED directly in the Model class. The example uses the MVP architecture to transfer values and events between the two views and the Model class. The Model class samples a button and updates the LED to match the state of the application."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://sw-center.st.com/touchgfx/TouchGFX/knowledgebase/PoolDemoHwInt429.4.9.3.zip"}),"A working example")," for STM32F429 showing how to sample a button in the Model class. The example uses the MVP architecture to transfer the button event to the View."),Object(r.b)("h3",{id:"from-other-task"},"From Other Task"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://sw-center.st.com/touchgfx/TouchGFX/knowledgebase/PoolDemoHwInt469Eval.4.9.3.zip"}),"A working example")," for STM32F469 showing how to sample an analog input in separate thread. The example uses the MVP architecture to transfer the analog value to the View."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://sw-center.st.com/touchgfx/TouchGFX/knowledgebase/c_task_condenser_example.4.9.3.zip"}),"A working example")," showing intertask communication and propagation to and from the UI has been implemented. Use this as inspiration for your own setup. The example communicates between the backend system implemented in C code and the C++ TouchGFX GUI. The example runs on the STM32F746G-DISCO board on top of FreeRTOS."),Object(r.b)("h3",{id:"from-multiple-tasks"},"From Multiple tasks"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://sw-center.st.com/touchgfx/TouchGFX/knowledgebase/hw_integration_tasks_gpio.4.9.3.zip"}),"This working example"),' was demonstrated at the TouchGFX webinar "Integration with your hardware" from the 28th of May 2018.'),Object(r.b)("p",null,"The application was designed for the STM32F769-DISCO board and interacts with an LED and the USER BUTTON to show how to integrate both C code and hardware peripherals into your TouchGFX application."),Object(r.b)("p",null,"The application configures the button in GPIO mode. Behavior is to sample the state of the button in btntask.c and pass a message through the GUI message queue if the button is pressed down. This allows us to advance the animation in the application by keeping the button pressed."),Object(r.b)("p",null,"The application uses three FreeRTOS tasks. One for the GUI, one for each peripheral (LED and USER Button)."),Object(r.b)("h3",{id:"from-task-and-external-interrupt-line"},"From Task and External Interrupt Line"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://sw-center.st.com/touchgfx/TouchGFX/knowledgebase/hw_integration_tasks_exti.4.9.3.zip"}),"This working example"),' was demonstrated at the TouchGFX webinar "Integration with your hardware" from the 28th of May 2018.'),Object(r.b)("p",null,"The application was designed for the STM32F769-DISCO board and interacts with an LED and the USER BUTTON to show how to integrate both C code and hardware peripherals into your TouchGFX application."),Object(r.b)("p",null,"This application configures the button in EXTI mode (external interrupt line 0). Behavior is to receive an interrupt when the button is pressed down after which the interrupt is cleared. This does not allow the same behavior as in GPIO, but instead we'll be single stepping the animation because a message is only sent through the gui message queue whenever an interrupt is received."),Object(r.b)("p",null,"The application uses two FreeRTOS tasks. One for the GUI, one for the LED. (The Button task from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#from-multiple-tasks"}),"Multiple tasks demo")," remains active in this application to exemplify that the peripheral interaction code has been moved into an interrupt handler)."))}f.isMDXComponent=!0},259:function(e,t,n){"use strict";var a=n(5),o=n(0),r=n.n(o),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.text)},t}(o.Component);t.a=i},271:function(e,t,n){"use strict";var a=n(5),o=n(0),r=n.n(o),i=n(268),s=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(i.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:s},this.props.children)},t}(o.Component);t.a=c},272:function(e,t,n){"use strict";var a=n(5),o=n(0),r=n.n(o),i=n(268),s=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(i.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:s},this.props.children)},t}(o.Component);t.a=c},273:function(e,t,n){"use strict";var a=n(5),o=n(0),r=n.n(o),i=n(268),s=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(i.a,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:s},this.props.children)},t}(o.Component);t.a=c}}]);