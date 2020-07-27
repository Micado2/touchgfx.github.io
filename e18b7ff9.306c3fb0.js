(window.webpackJsonp=window.webpackJsonp||[]).push([[964],{1100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),o=(n(0),n(1229)),i=n(1232),c=(n(1239),n(1235)),l=n(1234),s={id:"touchgfx-generator",title:"Generator User Guide"},p={id:"version-4.13/development/touchgfx-hal-development/touchgfx-generator",title:"Generator User Guide",description:"TouchGFX Generator, a part of X-CUBE-TOUCHGFX, is a CubeMX Additional-Software component that helps developers configure TouchGFX to run on their hardware platform. Based on existing CubeMX settings and user input TouchGFX Generator will generate the files required to configure a working TouchGFX application. These files include files for TouchGFX HAL, TouchGFX OSAL and TouchGFX Configuration.\r",source:"@site/versioned_docs\\version-4.13\\development\\touchgfx-hal-development\\touchgfx-generator.mdx",permalink:"/docs/4.13/development/touchgfx-hal-development/touchgfx-generator",version:"4.13",sidebar:"version-4.13/docs",previous:{title:"Abstraction Layer Architecture",permalink:"/docs/4.13/development/touchgfx-hal-development/touchgfx-architecture"},next:{title:"Introduction",permalink:"/docs/4.13/development/touchgfx-hal-development/scenarios/scenarios-introduction"}},u=[{value:"Enabling TouchGFX Generator",id:"enabling-touchgfx-generator",children:[]},{value:"Generated Code Architecture",id:"generated-code-architecture",children:[]},{value:"Feature Overview",id:"feature-overview",children:[]},{value:"Display",id:"display",children:[{value:"Interface and dimensions",id:"interface-and-dimensions",children:[]},{value:"Buffering Strategies",id:"buffering-strategies",children:[]}]},{value:"Driver",id:"driver",children:[{value:"Application Tick Source",id:"application-tick-source",children:[]},{value:"Graphics Accelerator",id:"graphics-accelerator",children:[]},{value:"Real-Time Operating System",id:"real-time-operating-system",children:[]}]},{value:"Generated project",id:"generated-project",children:[]},{value:"TouchGFX Designer Project",id:"touchgfx-designer-project",children:[]},{value:"Modifying Generated Behavior",id:"modifying-generated-behavior",children:[]}],h={rightToc:u},d="wrapper";function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"TouchGFX Generator, a part of X-CUBE-TOUCHGFX, is a CubeMX Additional-Software component that helps developers configure TouchGFX to run on their hardware platform. Based on existing CubeMX settings and user input TouchGFX Generator will generate the files required to configure a working TouchGFX application. These files include files for TouchGFX HAL, TouchGFX OSAL and TouchGFX Configuration."),Object(o.b)("p",null,"Once code is generated through CubeMX, the TouchGFX project can be opened through TouchGFX Designer where the UI is developed. TouchGFX Designer automatically adds any additional generated code files to the target IDE project that was configured for the project in CubeMX."),Object(o.b)("h2",{id:"enabling-touchgfx-generator"},"Enabling TouchGFX Generator"),Object(o.b)("p",null,"The following figure shows a project with TouchGFX Generator already enabled under the ",Object(o.b)("em",{parentName:"p"},"Additional Software"),' category. Users gain access to adding functionality from X-CUBEs by pressing the "Additional Software" button.'),Object(o.b)(i.a,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/enable-generator.png",caption:"Selecting Additional Software in CubeMx",mdxType:"Figure"}),Object(o.b)("p",null,"The following figure shows how TouchGFX Generator can be enabled for a project:"),Object(o.b)(i.a,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/add-generator.png",caption:"Enabling TouchGFX Generator",mdxType:"Figure"}),Object(o.b)("h2",{id:"generated-code-architecture"},"Generated Code Architecture"),Object(o.b)("p",null,"Before describing the features of TouchGFX Generator it is important to understand the architecture of the generated code and how developers can use it to customize configuration and behavior."),Object(o.b)("p",null,"Handwritten user code in files generated by CubeMX is protected through the use of ",Object(o.b)("strong",{parentName:"p"},"User Code")," sections placed strategically throughout the code generated by CubeMX (C code).\xa0In the code generated by TouchGFX Generator (C++ code) this flexibility is accomplished through inheritance."),Object(o.b)("p",null,"When TouchGFX Generator is added through ",Object(o.b)("em",{parentName:"p"},"Additional Software")," and enabled, CubeMX will always create a ",Object(o.b)("em",{parentName:"p"},"TouchGFX")," folder for the project. The folder always contains the same files, regardless of configuration, while the content of the files changes according to CubeMX and User configuration."),Object(o.b)("p",null,"The listing below shows an overview of the content of a CubeMX project with TouchGFX Generator ",Object(o.b)("em",{parentName:"p"},"enabled"),", with emphasis on TouchGFX related files. The table following the list outlines the responsiblity of the most important entries."),Object(o.b)(l.a,{mdxType:"CodeHeader"},"TouchGFX Folder"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\u2502   .mxproject\n\u2502   myproject.ioc\n\u251c\u2500\u2500\u2500Core\n\u251c\u2500\u2500\u2500Drivers\n\u251c\u2500\u2500\u2500EWARM\n\u251c\u2500\u2500\u2500Middlewares\n\u2514\u2500\u2500\u2500TouchGFX\n    \u2502   ApplicationTemplate.touchgfx.part\n    \u251c\u2500\u2500\u2500App\n    \u2502       app_touchgfx.c\n    \u2502       app_touchgfx.h\n    \u2514\u2500\u2500\u2500target\n        \u2502   STM32TouchController.cpp\n        \u2502   STM32TouchController.hpp\n        \u2502   TouchGFXGPIO.cpp\n        \u2502   TouchGFXHAL.cpp\n        \u2502   TouchGFXHAL.hpp\n        \u2502\n        \u2514\u2500\u2500\u2500generated\n                OSWrappers.cpp\n                TouchGFXConfiguration.cpp\n                TouchGFXGeneratedHAL.cpp\n                TouchGFXGeneratedHAL.hpp\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Folder"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Responsibility"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"myproject.ioc"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CubeMX Project file")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Core"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"main.c")," and startup code")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Drivers"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CMSIS and MCU family drivers")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"EWARM"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"IDE project folder. Can be EWARM, MDK-ARM or STM32CubeIDE")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Middlewares"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Contains TouchGFX library/headerfiles and third party software like FreeRTOS.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ApplicationTemplate.touchgfx.part"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The .part file is updated by CubeMX with information that is relevant to TouchGFX Designer project, e.g. screen dimensions and bit depth")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"App"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X-CUBE interface to CubeMX. ",Object(o.b)("inlineCode",{parentName:"td"},"app_touchgfx.c")," contains definitions for the functions ",Object(o.b)("inlineCode",{parentName:"td"},"MX_TouchGFX_Process(void)")," and ",Object(o.b)("inlineCode",{parentName:"td"},"MX_TouchGFX_Init(void)")," which are used to initialize TouchGFX and start its main loop.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"target/generated"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This sub-folder contains the read-only files that get overwritten by CubeMX when configurations change. ",Object(o.b)("inlineCode",{parentName:"td"},"TouchGFXGeneratedHAL.cpp")," is a sub-class of the TouchGFX class ",Object(o.b)("inlineCode",{parentName:"td"},"HAL")," and contains the code that CubeMX can generate based on its current configuration. ",Object(o.b)("inlineCode",{parentName:"td"},"OSWrappers.cpp")," (The OSAL) contains the functions required to synchronize with TouchGFX Engine, and finally ",Object(o.b)("inlineCode",{parentName:"td"},"TouchGFXConfiguration.cpp")," which contains the code to construct and configure TouchGFX, including the HAL.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"target"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Contains the bulk of files that can be modified by the user to extend the behavior of the HAL or to override configurations generated by CubeMX. ",Object(o.b)("inlineCode",{parentName:"td"},"STM32TouchController.cpp")," contains an empty touch controller interface. ",Object(o.b)("inlineCode",{parentName:"td"},"TouchGFXHAL.cpp")," defines a sub-class, ",Object(o.b)("inlineCode",{parentName:"td"},"TouchGFXHAL"),", of ",Object(o.b)("inlineCode",{parentName:"td"},"TouchGFXGeneratedHAL"),".")))),Object(o.b)("p",null,"It is important to know that ",Object(o.b)("inlineCode",{parentName:"p"},"TouchGFXConfiguration.cpp")," contains a function that constructs the HAL and a function that starts the main loop of TouchGFX. Additional configuration can be done in the editable user-class ",Object(o.b)("inlineCode",{parentName:"p"},"TouchGFXHAL"),". The general architecture of the HAL is seen below:"),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/code-architecture.png",caption:"Hierarchy of generated code",noShadow:!0,width:"200",mdxType:"Figure"}),Object(o.b)("h2",{id:"feature-overview"},"Feature Overview"),Object(o.b)("p",null,"Having enabled TouchGFX Generator, three groups exist in the user interface:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Dependencies"))," - This group contains notifications to the developer about dependencies, warnings or concrete errors in the configuration. The group is hidden if no entries exist."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Display"))," - This group contains settings related to display such as interface, framebuffer bitdepth, width and height. These settings directly impact the size of the canvas of the TouchGFX project as well as the code generated for assets."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Driver"))," - This group allows the user to opt-in for a number of ready-made drivers related to the tick source of the application, graphics acceleration and RTOS. Since CubeMX supports FreeRTOS (CMSIS RTOS v1 and v2) configurations, TouchGFX Generator provides drivers for each of these options.")),Object(o.b)(i.a,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/three-sections.png",caption:"TouchGFX Generator has three groups: Dependencies, Display, Driver",mdxType:"Figure"}),Object(o.b)("h2",{id:"display"},"Display"),Object(o.b)("p",null,'The *Display" group contains configurations related to display, such as interface, dimensions and buffering strategies.'),Object(o.b)("h3",{id:"interface-and-dimensions"},"Interface and dimensions"),Object(o.b)("p",null,"Multiple display interfaces are usable today with STM32 microcontrollers, e.g.:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Parallel RGB"),Object(o.b)("li",{parentName:"ul"},"MIPI DSI"),Object(o.b)("li",{parentName:"ul"},"FMC"),Object(o.b)("li",{parentName:"ul"},"SPI")),Object(o.b)("p",null,"In the case of MCUs with an LTDC ",Object(o.b)("em",{parentName:"p"},"TouchGFX Generator")," can generate a driver to transfer the framebuffer to the connected display. For DSI, FMC and SPI interfaces drivers must be implemented by developers themselves. "),Object(o.b)(c.a,{mdxType:"FurtherReading"},'See section "Scenarios" for concrete examples of drivers for different display interfaces.'),Object(o.b)("h3",{id:"buffering-strategies"},"Buffering Strategies"),Object(o.b)("p",null,"The following frame buffer strategies can be configured through TouchGFX generator:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Single Buffer"),' - Use only one application frame buffer. Possibly limits performance but uses less memory. Can be used with the "Buffer Location" configuration to place it in internal RAM. For further optimization the user can define a function that returns the current line being processed by the display controller. This method is used by the framework to allow updates to memory that has already been transferred to the display during this frame.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Double Buffer")," - Use two frame buffers. Usually allows for better performance at the cost of memory."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Partial Buffer")," - Use one or more user defined chunks of memory as the frame buffer. This strategy is targeted at low cost solutions that do not rely on external RAM, but have displays for which a full frame buffer would exceed available memory.")),Object(o.b)("p",null,'In the case of Single Buffer and Double Buffer users are allowed to configure their location through the "Buffer Location" configuration which offers the following options:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"By Allocation")," - Lets the linker place frame buffer memory according to linker script. Default is in internal RAM."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"By Address")," - Allows the user to define one (Single) or two (Double) frame buffer addresses.")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Partial Buffer")," strategy allows the user to define the following parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Number of blocks (always placed in internal ram)"),Object(o.b)("li",{parentName:"ul"},"Block size (bytes)")),Object(o.b)("p",null,"To understand some core concepts regarding the Partial Buffer strategy please read the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer"}),"dedicated article")," on Lowering Memory requirements using partial Frame Buffers. The article shows, conceptually, how to achieve partial frame buffers and the code shown in this article will differ slightly from what is generated by TouchGFX Generator.\nPlease see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"scenarios/scenarios-framebuffer-strategies"}),"Frame Buffer Strategies")," for concrete examples of the generated code for these strategies."),Object(o.b)("h2",{id:"driver"},"Driver"),Object(o.b)("p",null,"The driver section allows developers to select drivers for various responsibilities of a TouchGFX AL."),Object(o.b)("h3",{id:"application-tick-source"},"Application Tick Source"),Object(o.b)("p",null,"The application tick source for an application defines how to drive an application forward. The developer has the following options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LTDC"),' - If LTDC is selected as the Interface in the "Display" group the Application Tick Source can be "LTDC". This means that TouchGFX Generator will install a driver function (LTDC interrupt handler) in ',Object(o.b)("inlineCode",{parentName:"li"},"TouchGFXGeneratedHAL")," class that drives the application forward by calling ",Object(o.b)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Custom")," - In this case, the developer is required to implement a handler that drives the application forward by calling ",Object(o.b)("inlineCode",{parentName:"li"},"OSWrappers::signalVSync()")," repeatedly.")),Object(o.b)("h3",{id:"graphics-accelerator"},"Graphics Accelerator"),Object(o.b)("p",null,"The developer has three options when it comes to graphics acceleration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"None")," - The application uses only the CPU to draw frames.ja"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Chrom-ART (DMA2D)")," -\xa0The application uses the Chrom-ART chip when possible to move and blend pixels, freeing up CPU cycles. The driver is installed by TouchGFX Generator and does not require any action from the developer.")),Object(o.b)("h3",{id:"real-time-operating-system"},"Real-Time Operating System"),Object(o.b)("p",null,"Several options are available from TouchGFX Generator when it comes to RTOS support."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"No RTOS"),Object(o.b)("li",{parentName:"ul"},"CMSIS V1 and V2"),Object(o.b)("li",{parentName:"ul"},"Custom")),Object(o.b)("p",null,"As described in the Abstraction Layer Architecture the TouchGFX Engine uses the ",Object(o.b)("inlineCode",{parentName:"p"},"OSWrappers")," interface to synchronize its main loop as well as framebuffer access. The users choice results in generated class that uses relevant primitives. Only in the case of ",Object(o.b)("inlineCode",{parentName:"p"},"Custom")," must developers implement the functions themselves."),Object(o.b)("p",null,"The TouchGFX main loop is entered by calling the following function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"void\xa0MX_TouchGFX_Process(void);\n")),Object(o.b)("p",null,"Developers are required to call this function in the task handler for the task they intend to run the application. Configuring FreeRTOS through CubeMX is not a requirement as long as the Process function is called by the task handler. The following is an example of how to call the process function in the task handler for the Default task:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{4}","{4}":!0}),"void\xa0StartDefaultTask(void\xa0*argument)\n{\n\xa0\xa0/*\xa0USER\xa0CODE\xa0BEGIN\xa05\xa0*/\n  MX_TouchGFX_Process();\n\xa0\xa0/*\xa0USER\xa0CODE\xa0END\xa05\xa0*/\xa0\n}\n")),Object(o.b)("p",null,"The process function will call a generated function ",Object(o.b)("inlineCode",{parentName:"p"},"touchgfx_taskEntry()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{9}","{9}":!0}),"void touchgfx_taskEntry()\n{\n /*\n * Main event loop. Will wait for OSWrapper::signalVsync() to be called, and then process next frame. Call\n * this function from your GUI task.\n *\n * Note This function never returns\n */\n hal.taskEntry();\n}\n")),Object(o.b)("h2",{id:"generated-project"},"Generated project"),Object(o.b)("p",null,"TouchGFX works with (at least) the following IDEs when generating code using the ",Object(o.b)("strong",{parentName:"p"},"Generate Code")," button in CubeMX:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"EWARM"),Object(o.b)("li",{parentName:"ol"},"MDK-ARM"),Object(o.b)("li",{parentName:"ol"},"STM32CubeIDE")),Object(o.b)("p",null,"For optimal project structure select the following options for project generation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Application structure: ",Object(o.b)("strong",{parentName:"li"},"Advanced")),Object(o.b)("li",{parentName:"ul"},"Disable ",Object(o.b)("strong",{parentName:"li"},"Generate under root")," (STM32CubeIDE only)")),Object(o.b)("p",null,"For optimal project structure select the following options for project generation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Application structure: ",Object(o.b)("strong",{parentName:"li"},"Advanced")),Object(o.b)("li",{parentName:"ul"},"Disable ",Object(o.b)("strong",{parentName:"li"},"Generate under root")," (STM32CubeIDE only)")),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/project-manager.png",caption:"Select Advanced application structure and deselect Generate under root",noShadow:!1,mdxType:"Figure"}),"CubeMX will also generate a *TouchGFX* folder with the following structure:",Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/folder-b.png",caption:"TouchGFX folder structure",noShadow:!1,mdxType:"Figure"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"App")," folder which contains code to initialize and start TouchGFX."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"target")," folder which contains read-only, generated code (inside generated/) and modifiable user classes (",Object(o.b)("inlineCode",{parentName:"li"},"STM32TouchController.cpp"),", ",Object(o.b)("inlineCode",{parentName:"li"},"TouchGFXGPIO.cpp")," and ",Object(o.b)("inlineCode",{parentName:"li"},"TouchGFXHAL.cpp"),")"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},".part")," file which is opened using the TouchGFX Designer in order to create a full TouchGFX project complete with TouchGFX header files and libraries The part file contains relevant application information such as pixel format, and canvas dimensions that the designer uses when generating TouchGFX application code.")),Object(o.b)("h2",{id:"touchgfx-designer-project"},"TouchGFX Designer Project"),Object(o.b)("p",null,"The following code is an example of the contents of the ",Object(o.b)("inlineCode",{parentName:"p"},".part")," file mentioned in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#generated-code-architecture"}),"Generated Code Architecture")," section. The post-generate command, seen below, will update the project selected in CubeMX (e.g. EWARM) when new files are created by the TouchGFX designer (e.g. new screens and assets)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n "Application": {\n "Name": "my_project",\n "TouchGfxPath": "../Middlewares/ST/touchgfx",\n "AvailableColorDepths": [ 16 ],\n "AvailableLCDs":\n  {\n    "16": "LCD16bpp"\n },\n "AvailableResolutions" :\n [\n  {\n    "Width": 320,\n    "Height": 240\n  }\n ],\n "PostGenerateTargetCommand" : "touchgfx update_project --project-file=../my_project.ioc --platform=m7"\n },\n "Version": "4.13.0"\n}\n')),Object(o.b)("p",null,"When opening the ",Object(o.b)("em",{parentName:"p"},".part")," file with TouchGFX Designer developers are presented with the option to load a concrete UI or start from a blank template."),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/choose-ui.png",caption:"Choose UI",noShadow:!1,mdxType:"Figure"}),Object(o.b)("p",null,"After pressing ",Object(o.b)("em",{parentName:"p"},"Generate Code")," in TouchGFX Designer the structure of the TouchGFX folder now looks like the following. The following image shows a concrete example of a TouchGFX folder structure and highlights the files and folders that are new after generation."),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/designer-gen-code.png",caption:"Generate Code",noShadow:!1,mdxType:"Figure"}),Object(o.b)(i.a,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/post-designer-generation.png",caption:"TouchGFX Folder Structure",noShadow:!1,mdxType:"Figure"}),Object(o.b)("p",null,"TouchGFX will detect the selected IDE from the .ioc CubeMX file (For STM32CubeIDE, EWARM, MDK-ARM) and update the project file with new, generated files like files for screen definitions, image- and font assets.  "),Object(o.b)("p",null,"At this point, developers can work interchangeably in CubeMX, TouchGFX Designer and toolchain/IDE where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CubeMX updates the IDE project with drivers"),Object(o.b)("li",{parentName:"ul"},"CubeMX updates the TouchGFX ",Object(o.b)("em",{parentName:"li"},".part")," file with UI related changes that are instantly picked up by the designer"),Object(o.b)("li",{parentName:"ul"},"CubeMX generates HAL code (TouchGFX/target/generated/) based on TouchGFX Generator Configuration necessary for TouchGFX to work on a specific platform. "),Object(o.b)("li",{parentName:"ul"},"The TouchGFX designer updates the project with generated code.")),Object(o.b)("h2",{id:"modifying-generated-behavior"},"Modifying Generated Behavior"),Object(o.b)("p",null,"It important to know that, due to the class hierarchy of the HAL, users can override HAL configuration or behavior that was generated by CubeMX. In the example below, developers can modify the ",Object(o.b)("inlineCode",{parentName:"p"},"initialize")," function to configure TouchGFX additionally or to modify an existing configuration set in ",Object(o.b)("inlineCode",{parentName:"p"},"TouchGFXGeneratedHAL"),".   "),Object(o.b)(l.a,{mdxType:"CodeHeader"},"TouchGFXHAL.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::initialize()\n{\n    // Calling parent implementation of initialize().\n    //\n    // To overwrite the generated implementation, omit call to parent function\n    // and implemented needed functionality here.\n    // Please note, HAL::initialize() must be called to initialize the framework.\n\n    TouchGFXGeneratedHAL::initialize();\n\n    //Overriding configurations\n    hal.lockDMAToFrontPorch(true);\n    hal.setFingerSize(4);\n    hal....\n}\n")))}b.isMDXComponent=!0},1230:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(r.Component);t.a=i},1232:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(r.Component);t.a=i},1234:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{class:"code-header"},o.a.createElement("div",null,o.a.createElement("h5",null,this.props.children)))},t}(r.Component);t.a=i},1235:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=n(1230),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(r.Component);t.a=l},1239:function(e,t,n){"use strict";var a=n(5),r=n(0),o=n.n(r),i=n(1230),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},t}(r.Component);t.a=l}}]);