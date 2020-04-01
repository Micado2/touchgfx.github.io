(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),o=(n(0),n(261)),i=n(262),c=(n(272),n(271)),l={id:"touchgfx-generator",title:"Generator User Guide"},s={id:"development/touchgfx-hal-development/touchgfx-generator",title:"Generator User Guide",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\development\\touchgfx-hal-development\\touchgfx-generator.mdx",permalink:"/docs/development/touchgfx-hal-development/touchgfx-generator",sidebar:"docs",previous:{title:"Abstraction Layer Architecture",permalink:"/docs/development/touchgfx-hal-development/touchgfx-architecture"},next:{title:"Introduction",permalink:"/docs/development/touchgfx-hal-development/scenarios/scenarios-introduction"}},u=[{value:"Enabling TouchGFX Generator",id:"enabling-touchgfx-generator",children:[]},{value:"Display",id:"display",children:[{value:"Interface and dimensions",id:"interface-and-dimensions",children:[]},{value:"Buffering Strategies",id:"buffering-strategies",children:[]}]},{value:"Driver",id:"driver",children:[{value:"Application Tick Source",id:"application-tick-source",children:[]},{value:"Graphics Accelerator",id:"graphics-accelerator",children:[]},{value:"Real-Time Operating System",id:"real-time-operating-system",children:[]}]},{value:"Generated Code Architecture",id:"generated-code-architecture",children:[]},{value:"Generated project",id:"generated-project",children:[]}],p={rightToc:u},h="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(h,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The TouchGFX Generator, a part of X-CUBE-TOUCHGFX, is a CubeMX additional-software component that can help developers create the AL and general configuration for a TouchGFX application through specific user input and other CubeMX configurations."),Object(o.b)("p",null,"Once generated through CubeMX, a TouchGFX project can be opened via the TouchGFX Designer. Further developing the UI and generating source code for application assets and screen definitions is done using TouchGFX Designer."),Object(o.b)("h2",{id:"enabling-touchgfx-generator"},"Enabling TouchGFX Generator"),Object(o.b)("p",null,'The figure below shows a project with the X-CUBE-TOUCHGFX TouchGFX Generator already enabled under the Additional Software category. Users can gain access to X-CUBES by pressing the "Additional Software" button as depicted.'),Object(o.b)(i.a,{noShadow:!1,imageSource:"/img/development/touchgfx-hal-development/enable-generator.png",caption:"Selecting Additional Software in CubeMx",mdxType:"Figure"}),Object(o.b)("p",null,"The TouchGFX Generator must be enabled under Graphics Application:"),Object(o.b)(i.a,{noShadow:!1,imageSource:"/img/development/touchgfx-hal-development/add-generator.png",caption:"Enabling TouchGFX Generator",mdxType:"Figure"}),Object(o.b)("p",null,"During the rest of this section it is explained how users can configure and use TouchGFX Generator to generate a TouchGFX AL that works with the current CubeMX settings of the project."),Object(o.b)("p",null,"Three groups exist in the Generator UI:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Dependencies")," - This group contains notifications to the developer about dependencies, warnings or concrete errors in the configuration. The group is hidden if no entries exist."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Display")," - This group contains settings related to display like interface, framebuffer bitdepth, width and height. These settings directly impact the size of the canvas of the TouchGFX project as well as the code generated for assets."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Driver")," - This group allows the user to opt-in for a number of ready-made drivers related to the tick source of the application, graphics acceleration and RTOS. Since CubeMX offers FreeRTOS (CMSIS RTOS v1 and v2) TouchGFX Generator provides drivers for each of these options.")),Object(o.b)(i.a,{noShadow:!1,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/three-sections.png",caption:"TouchGFX Generator has three groups: Dependencies, Display, Driver",mdxType:"Figure"}),Object(o.b)("h2",{id:"display"},"Display"),Object(o.b)("p",null,"The settings for the display is detailed below."),Object(o.b)("h3",{id:"interface-and-dimensions"},"Interface and dimensions"),Object(o.b)("p",null,"Multiple display interfaces are usable today with STM32 microcontrollers, e.g.:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Parallel RGB"),Object(o.b)("li",{parentName:"ul"},"MIPI DSI"),Object(o.b)("li",{parentName:"ul"},"FMC"),Object(o.b)("li",{parentName:"ul"},"SPI")),Object(o.b)("p",null,"The TouchGFX Generator is not yet capable of properly generating code for DSI, FMC and SPI interfaces using the information available from additional IP configuration in CubeMX and thus it is up to the user to implement these drivers. In the case of LTDC, however, the TouchGFX Generator can supply the driver which is generated and configured automatically."),Object(o.b)(c.a,{mdxType:"FurtherReading"},'See section "Scenarios" for concrete examples of drivers for different display interfaces.'),Object(o.b)("h3",{id:"buffering-strategies"},"Buffering Strategies"),Object(o.b)("p",null,"The following frame buffer strategies can be configured through TouchGFX generator:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Single Buffer"),' - Use only one application frame buffer. Possibly limits performance but uses less memory. Can be used with the "Buffer Location" configuration to place it in internal RAM. For further optimization the user can define a function that returns the current line being processed by the display controller. This method is used by the framework to allow updates to memory that has already been transferred to the display during this frame.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Double Buffer")," - Use two frame buffers. Allows for better performance at the cost of memory."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Partial Buffer")," - Use one or more user defined chunks of memory as the frame buffer. This strategy is targeted at low cost solutions that do not rely on external RAM, but have displays for which a full frame buffer would exceed available memory.")),Object(o.b)("p",null,'In the case of Single Buffer and Double Buffer users are allowed to configure their location through the "Buffer Location" configuration which offers the following options:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"By Allocation")," - Lets the linker place frame buffer memory according to linker script. Default is in internal RAM."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"By Address")," - Allows the user to define one (Single) or two (Double) frame buffer addresses.")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Partial Buffer")," strategy allows the user to define the following parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Number of blocks (always placed in internal ram)"),Object(o.b)("li",{parentName:"ul"},"Block size (bytes)")),Object(o.b)("p",null,"To understand some core concepts regarding the Partial Buffer strategy please read the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer"}),"dedicated article")," on Lowering Memory requirements using partial Frame Buffers. The article shows, conceptually, how to achieve partial frame buffers and the code shown in this article will differ slightly from what is generated by TouchGFX Generator.\nPlease see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies"}),"Frame Buffer Strategies")," for concrete examples of the generated code for these strategies."),Object(o.b)("h2",{id:"driver"},"Driver"),Object(o.b)("p",null,"The driver section allows developers to select drivers for various responsibilities of a TouchGFX AL."),Object(o.b)("h3",{id:"application-tick-source"},"Application Tick Source"),Object(o.b)("p",null,"The application tick source for an application defines how to drive an application forward. The developer has the following options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LTDC"),' - If LTDC is selected as the Interface in the "Display" group the Application Tick Source can be "LTDC". This means that TouchGFX Generator will install a driver function (LTDC interrupt handler) in the TouchGFXGeneratedHAL class that drives the application forward by calling ',Object(o.b)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Custom")," - In this case, the developer is required to implement a handler that drives the application forward by calling ",Object(o.b)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()")," repeatedly.")),Object(o.b)("h3",{id:"graphics-accelerator"},"Graphics Accelerator"),Object(o.b)("p",null,"The developer has three options when it comes to graphics acceleration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"None")," - The application uses only the CPU to draw frames."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Chrom-ART (DMA2D)")," -\xa0The application uses the Chrom-ART chip when possible to move and blend pixels, freeing up CPU cycles. The driver is installed by the TouchGFX Generator and does not require any action from the developer."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Custom")," - The developer must provide a custom implementation (very rarely needed).")),Object(o.b)("h3",{id:"real-time-operating-system"},"Real-Time Operating System"),Object(o.b)("p",null,"Several options are available from TouchGFX Generator when it comes to RTOS support."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"No RTOS"),Object(o.b)("li",{parentName:"ul"},"CMSIS V1 and V2"),Object(o.b)("li",{parentName:"ul"},"Custom")),Object(o.b)("p",null,"As described in the Abstraction Layer Architecture the TouchGFX Engine uses the ",Object(o.b)("inlineCode",{parentName:"p"},"OSWrappers")," interface to syncrhonize its main loop as well as framebuffer access. The users choice results in generated class that uses relevant primitives. Only in the case of ",Object(o.b)("inlineCode",{parentName:"p"},"Custom")," must developers implement the functions themselves."),Object(o.b)("p",null,"The Touchgfx main loop is entered by calling the following function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"void\xa0MX_TouchGFX_Process(void);\n")),Object(o.b)("p",null,"Developers are required to call this function in the task handler for the task they intend to run the application. Configuring FreeRTOS through CubeMX is not a requirement as long as the Process function is called by the task handler. The following is an example of how to call the process function in the task handler for the Default task:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void\xa0StartDefaultTask(void\xa0*argument)\n{\n\xa0\xa0/*\xa0USER\xa0CODE\xa0BEGIN\xa05\xa0*/\n  MX_TouchGFX_Process();\n\xa0\xa0/*\xa0USER\xa0CODE\xa0END\xa05\xa0*/\xa0\n}\n")),Object(o.b)("p",null,"The process function will call a generated function ",Object(o.b)("inlineCode",{parentName:"p"},"touchgfx_taskEntry()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{9}","{9}":!0}),"void touchgfx_taskEntry()\n{\n /*\n * Main event loop. Will wait for OSWrapper::signalVsync() to be called, and then process next frame. Call\n * this function from your GUI task.\n *\n * Note This function never returns\n */\n hal.taskEntry();\n}\n")),Object(o.b)("h2",{id:"generated-code-architecture"},"Generated Code Architecture"),Object(o.b)("p",null,"Before covering more advanced use-cases for the options in each group it is important to understand the architecture of the generated code and how developers can take advantage of it to customize behavior."),Object(o.b)("p",null,"User code In CubeMX is protected through the use of ",Object(o.b)("strong",{parentName:"p"},"User Code")," sections placed strategically throughout the code generated by CubeMX (C).\xa0In the TouchGFX AL (C++) generated by TouchGFX Generator this flexibility is accomplished through inheritance."),Object(o.b)("p",null,"Two classes are generated to form the TouchGFX AL in a CubeMX project using the TouchGFX Generator:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"TouchGFXGeneratedHAL")," - This class contains code based on the configurations of CubeMX and TouchGFX Generator in combination."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"TouchGFXHAL")," - This class inherits from TouchGFXGeneratedHAL. It is generated once and can then be used by the user to write custom code, e.g. a driver for transferring pixels from a framebuffer over SPI. It can even be used to overwrite/ignore the code generated in TouchGFXGeneratedHAL.")),Object(o.b)("p",null,"The following figure shows the class hierarchy of the generated code."),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/architecture/dependencies.png",caption:"Dependencies",noShadow:!0,mdxType:"Figure"}),Object(o.b)("h2",{id:"generated-project"},"Generated project"),Object(o.b)("p",null,"TouchGFX has been verified using at least the following IDEs when generating code using the ",Object(o.b)("strong",{parentName:"p"},"Generate Code")," button in CubeMX:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"EWARM"),Object(o.b)("li",{parentName:"ol"},"MDK-ARM"),Object(o.b)("li",{parentName:"ol"},"STM32CubeIDE")),Object(o.b)("p",null,"For optimal project structure select the following options for project generation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Application structure: ",Object(o.b)("strong",{parentName:"li"},"Advanced")),Object(o.b)("li",{parentName:"ul"},"Disable ",Object(o.b)("strong",{parentName:"li"},"Generate under root")," (STM32CubeIDE only)")),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/project-manager.png",caption:"Select Advanced application structure and deselect Generate under root",noShadow:!1,mdxType:"Figure"}),Object(o.b)("p",null,"Generating code for a CubeMX project with ",Object(o.b)("strong",{parentName:"p"},"Advanced Application Structure")," and the TouchGFX Generator enabled will create the following root application folder structure if EWARM was selected as IDE: "),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/folder-a.png",caption:"Root folder structure",noShadow:!1,mdxType:"Figure"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"Core")," folder contains the main function generated by CubeMX to configure hardware and software. "),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"Drivers")," folder contains MCU specific CMSIS and HAL code."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"IDE")," folder, e.g. ",Object(o.b)("em",{parentName:"li"},"EWARM")," contains the project.")),Object(o.b)("p",null,"CubeMX will also generate a ",Object(o.b)("em",{parentName:"p"},"TouchGFX")," folder with the following structure:"),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/folder-b.png",caption:"TouchGFX folder structure",noShadow:!1,mdxType:"Figure"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"App")," folder which contains code to initialize and start TouchGFX."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"target")," folder which contains read-only, generated code (inside generated/) and modifiable user classes (",Object(o.b)("inlineCode",{parentName:"li"},"STM32TouchController.cpp"),", ",Object(o.b)("inlineCode",{parentName:"li"},"TouchGFXGPIO.cpp")," and ",Object(o.b)("inlineCode",{parentName:"li"},"TouchGFXHAL.cpp"),")"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},".part")," file which is opened using the TouchGFX Designer in order to create a full TouchGFX project complete with TouchGFX header files and libraries The part file contains relevant application information such as pixel format, and canvas dimensions that the designer uses when generating TouchGFX application code.")),Object(o.b)("p",null,"The following code is an example of the contents of a .part file. The post-generate command will update the project selected in CubeMX (e.g. EWARM) when new files are created by the TouchGFX designer (e.g. new screens and assets)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n "Application": {\n "Name": "my_project",\n "TouchGfxPath": "../Middlewares/ST/touchgfx",\n "AvailableColorDepths": [ 16 ],\n "AvailableLCDs":\n  {\n    "16": "LCD16bpp"\n },\n "AvailableResolutions" :\n [\n  {\n    "Width": 320,\n    "Height": 240\n  }\n ],\n "PostGenerateTargetCommand" : "touchgfx update_project --project-file=../my_project.ioc --platform=m7"\n },\n "Version": "4.13.0"\n}\n')),Object(o.b)("p",null,"Opening the ",Object(o.b)("em",{parentName:"p"},".part")," file with TouchGFX Designer developers are presented with the option to load a concrete application or start from a blank template."),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/choose-ui.png",caption:"Choose UI",noShadow:!1,mdxType:"Figure"}),Object(o.b)("p",null,"After pressing ",Object(o.b)("em",{parentName:"p"},"Generate Code")," the folder structure for the TouchGFX folder now looks like the following:"),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/designer-gen-code.png",caption:"Generate Code",noShadow:!1,mdxType:"Figure"}),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/post-designer-generation.png",caption:"TouchGFX Folder Structure",noShadow:!1,mdxType:"Figure"}),Object(o.b)("p",null,"TouchGFX will detect the selected IDE from the .ioc CubeMX file (For STM32CubeIDE, EWARM, MDK-ARM) and update the project file with new, generated files like files for screen definitions, image- and font assets.  "),Object(o.b)("p",null,"At this point, developers can work interchangeably in CubeMX, TouchGFX Designer and toolchain/IDE where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CubeMX updates the IDE project with drivers"),Object(o.b)("li",{parentName:"ul"},"CubeMX updates the TouchGFX ",Object(o.b)("em",{parentName:"li"},".part")," file with UI related changes that are instantly picked up by the designer"),Object(o.b)("li",{parentName:"ul"},"CubeMX generates HAL code (TouchGFX/target/generated/) based on TouchGFX Generator Configuration necessary for TouchGFX to work on a specific platform. "),Object(o.b)("li",{parentName:"ul"},"The TouchGFX designer updates the project with generated code.")))}d.isMDXComponent=!0},272:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=n(265),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},t}(r.Component);t.a=l}}]);