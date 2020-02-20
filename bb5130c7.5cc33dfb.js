(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{191:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return u})),o.d(t,"default",(function(){return p}));var n=o(1),i=o(9),a=(o(0),o(227)),r=o(228),c={id:"DevelopmentIntroduction",title:"Introduction"},l={id:"Development/DevelopmentIntroduction",title:"Introduction",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Development\\Introduction.mdx",permalink:"/docs/Development/DevelopmentIntroduction",sidebar:"docs",previous:{title:"Software Architecture - MVP",permalink:"/docs/BasicConcepts/SoftwareArchitectureMVP"},next:{title:"Introduction",permalink:"/docs/Development/HardwareSelection/hardware-selection-introduction"}},u=[{value:"Main Activities",id:"main-activities",children:[]},{value:"Main Components",id:"main-components",children:[]},{value:"Hardware Selection",id:"hardware-selection",children:[{value:"Prototyping",id:"prototyping",children:[]},{value:"Custom Hardware",id:"custom-hardware",children:[]}]},{value:"Board Bring Up",id:"board-bring-up",children:[{value:"CubeMX",id:"cubemx",children:[]},{value:"Application Templates (ATs)",id:"application-templates-ats",children:[]}]},{value:"TouchGFX HAL Development",id:"touchgfx-hal-development",children:[{value:"TouchGFX Generator",id:"touchgfx-generator",children:[]}]},{value:"UI Development",id:"ui-development",children:[{value:"TouchGFX Designer",id:"touchgfx-designer",children:[]},{value:"Application Templates",id:"application-templates",children:[]},{value:"UI templates",id:"ui-templates",children:[]},{value:"Custom Hardware",id:"custom-hardware-1",children:[]}]},{value:"Workflow",id:"workflow",children:[{value:"Generated Code and User Code",id:"generated-code-and-user-code",children:[]},{value:"Change of Compiler/IDE",id:"change-of-compileride",children:[]}]}],s={rightToc:u},d="wrapper";function p(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)(d,Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"main-activities"},"Main Activities"),Object(a.b)("p",null,"A TouchGFX project involves a set of activities that you will be addressing during the development phase. The effort in each of them are dependent on what the goal of your project is. If you are doing a UI prototype you can use premade code for major parts of the application and thus speed up your project development by skipping most of these activities. If you are doing a full project based on a custom made board, you will be addressing each of these activities in your project."),Object(a.b)(r.a,{imageSource:"/img/Development/Introduction/tgfx_activities.png",caption:"A TouchGFX projects main activities",noShadow:!0,width:"600",mdxType:"Figure"}),Object(a.b)("h2",{id:"main-components"},"Main Components"),Object(a.b)("p",null,"Your TouchGFX project is made up of five main software and hardware components. Each of the activities will generate one of the main component for your TouchGFX project. The TouchGFX Engine is not an output of any main activity, this is the starting point for your TouchGFX project and is available when you have downloaded and installed."),Object(a.b)(r.a,{imageSource:"/img/Development/Introduction/tgfx_components.png",caption:"A TouchGFX projects main components",noShadow:!0,width:"600",mdxType:"Figure"}),Object(a.b)("p",null,"The following sections will give an overview of each of the activities and components. Each of the activities are further described in full details in this chapters remaining sections."),Object(a.b)("h2",{id:"hardware-selection"},"Hardware Selection"),Object(a.b)(r.a,{imageSource:"/img/Development/Introduction/activity_puzzle_004.png",caption:" ",noShadow:!0,width:"400",mdxType:"Figure"}),Object(a.b)("p",null,"This activity is the initial activity in your TouchGFX project. Selecting the hardware on which  your application will run. Deciding on which hardware components you need and what influences these have on your TouchGFX application. When you are done with this step you have a Display Board available for your TouchGFX project."),Object(a.b)("h3",{id:"prototyping"},"Prototyping"),Object(a.b)("p",null,"If you are doing a UI prototype an STM32 Evaluation Kit will be the perfect choice to get up and running quickly. Here there are no considerations to be done about the hardware components, how to connect to the board or similar issues. In this case the Hardware Selection activity is only a matter of selecting an available STM32 Evaluation kit, which is the best match with your final product in terms of MCU performance, memory setup and display size. "),Object(a.b)("h3",{id:"custom-hardware"},"Custom Hardware"),Object(a.b)("p",null,"If you are creating your own hardware solution there is a lot of choices to be made and issues to consider. The section ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Development/HardwareSelection/hardware-selection-introduction"}),"Hardware Selection")," will help you in this task, answering a lot of questions and describe how your choices influence a TouchGFX application."),Object(a.b)("p",null,"Often in your project you will not have the final hardware ready before late in the project. In this case it is very common to select an STM32 Evaluation Kit that resembles your final board and use this in the first steps of UI Development. If you do not have such board, you can also start out by just using the TouchGFX Simulator that runs on your PC."),Object(a.b)("p",null,"A full description of this step can be found in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Development/HardwareSelection/hardware-selection-introduction"}),"Hardware Selection")," section."),Object(a.b)("h2",{id:"board-bring-up"},"Board Bring Up"),Object(a.b)(r.a,{imageSource:"/img/Development/Introduction/activity_puzzle_003.png",caption:" ",noShadow:!0,width:"400",mdxType:"Figure"}),Object(a.b)("p",null,"This activity is a central task to enable TouchGFX to be executed on your board. The output component is called Board Initialization Code which is a general initialization code that setup your MCU and all peripherals, preparing it for application execution. This initialization code is independent of TouchGFX, it is only handling pure hardware setup."),Object(a.b)("h3",{id:"cubemx"},"CubeMX"),Object(a.b)("p",null,"The main tool for this activity is CubeMX. It helps you configuring the MCU and generate general startup code. For peripherals, such as external RAM and Display, you will add initialization code and specific peripheral drivers yourself. It is also possible to do the entire Board Initialization Code without use of CubeMX, but is not recommended unless you have expert knowledge on STM32 and board bring up."),Object(a.b)("h3",{id:"application-templates-ats"},"Application Templates (ATs)"),Object(a.b)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX you can base your application on an existing Application Template (AT) for one of the standard STM32 Evaluation Kits available in TouchGFX Designer. These include all the Board Initialization Code needed. The ATs are based on a CubeMX configuration, so it is possible for you to modify the configuration if you want to experiment or add access to more peripherals."),Object(a.b)("p",null,"A full description of this step can be found in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Development/BoardBringUp/BoardIntroduction"}),"Board Bring Up")," section."),Object(a.b)("h2",{id:"touchgfx-hal-development"},"TouchGFX HAL Development"),Object(a.b)(r.a,{imageSource:"/img/Development/Introduction/activity_puzzle_002.png",caption:" ",noShadow:!0,width:"400",mdxType:"Figure"}),Object(a.b)("p",null,"This activity is key in making the TouchGFX Engine run on top of your fully initialized Display Board (Display Board + Board Initialization Code). The output component is called TouchGFX HAL and is a software layer that is an abstraction of your hardware and enables the TouchGFX Engine to run on your board. "),Object(a.b)("h3",{id:"touchgfx-generator"},"TouchGFX Generator"),Object(a.b)("p",null,"The main tool in this activity is TouchGFX Generator which is a CubeMX plugin that allows you to configure and generate most of the TouchGFX HAL code. You will most probably also write some part of the TouchGFX HAL in code by yourself. The TouchGFX Generator will assist you in this step by creating empty functions for you to implement. "),Object(a.b)("p",null,"It is important to notice that for your TouchGFX HAL to work it is important that your Board Initialization Code is done correctly and that the MCU, External RAM, Display and so on is configured correctly."),Object(a.b)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX you can base your application on an existing Application Template (AT) for one of the standard STM32 Evaluation Kits available in TouchGFX Designer. This includes all the TouchGFX HAL code you need. The ATs are based on a CubeMX and TouchGFX Generator configuration, so it is possible for you to modify the configuration if you want to experiment later on."),Object(a.b)("p",null,"A full description of this step can be found in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Development/TouchGFXHALDevelopment/TouchGFXHALDevelopmentIntroduction"}),"TouchGFX HAL Development")," section."),Object(a.b)("h2",{id:"ui-development"},"UI Development"),Object(a.b)(r.a,{imageSource:"/img/Development/Introduction/activity_puzzle_000.png",caption:" ",noShadow:!0,width:"400",mdxType:"Figure"}),Object(a.b)("p",null,"This activity is where you probably will spend most of your project development time. Here you will create the User Interface code that will make up the visible part of your TouchGFX project, the component which is called the TouchGFX UI Application. "),Object(a.b)("h3",{id:"touchgfx-designer"},"TouchGFX Designer"),Object(a.b)("p",null,"The main tools in this activity are TouchGFX Designer and your favorite IDE or text editor. In TouchGFX Designer you will setup, design and create the screens in your application and generate main parts of the UI Application as C++ code. For the application logic (handling events, communicating with the non-UI part of the system) you will use an IDE or text editor to write C++ code, that coexists and interacts with the generated code from TouchGFX Designer.  "),Object(a.b)(r.a,{imageSource:"/img/touchgfx-designer-screen.png",caption:"",noShadow:!0,width:"300",mdxType:"Figure"}),Object(a.b)("h3",{id:"application-templates"},"Application Templates"),Object(a.b)("p",null,"If you are doing a UI Prototype or just want to try out TouchGFX and do not want to spend time doing the other activities, you can either base your application on the PC based TouchGFX Simulator or you can use one of the existing Application Template (AT) for one of the standard STM32 Evaluation Kits. In any case you are ready to start developing your UI Application right away."),Object(a.b)("h3",{id:"ui-templates"},"UI templates"),Object(a.b)("p",null,"If you just want something to run or want to be inspired you can select one of the TouchGFX demos or examples which can be found as UI Templates when creating a new project in TouchGFX Designer. IF you do so, nothing has to be done, just compile, flash and run."),Object(a.b)("h3",{id:"custom-hardware-1"},"Custom Hardware"),Object(a.b)("p",null,"If you have already done all the other activities and thus have a running board ready for a TouchGFX UI Application you can either start from scratch or select one of the examples or demo. If the resolution match then they should run on your custom board as well."),Object(a.b)("p",null,"A full description of this step can be found in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIDevelopmentIntroduction"}),"UI Development")," section."),Object(a.b)("h2",{id:"workflow"},"Workflow"),Object(a.b)("p",null,"As you can see TouchGFX development involves a lot of activites and tools. It is, however, important to notice that you do not need to do them all at once, and you do not necessarily need your Display Board, Board Initialization Code and TouchGFX HAL before starting your UI development. This can be done using STM32 Evaluation Kits or the TouchGFX Simulator."),Object(a.b)(r.a,{imageSource:"/img/Development/Introduction/touchgfx-designer-workflow.svg",caption:"TouchGFX Designer workflow",noShadow:!0,width:"700",mdxType:"Figure"}),Object(a.b)("h3",{id:"generated-code-and-user-code"},"Generated Code and User Code"),Object(a.b)("p",null,"In each of the three software activities, Board Bring Up, TouchGFX HAL Development and UI Development, you will use tools that generate code for you. Common for these tools is that they do not generate all the code you need, you will be adding user written code to the project as well. For all three tools you can go back and forth between using the tool and writing code. The generated code and the user code is independent and can be updated seperately."),Object(a.b)("p",null,"Sometimes you will also be switching back and forth between the activities and thus using different tools. This is often the case when doing TouchGFX HAL Development, where you have a very simple TouchGFX UI to test your TouchGFX HAL. There is, however, no problem shifting between activities, as the tools, the generate code and your user code coexists and can be updated without any problem.   "),Object(a.b)("h3",{id:"change-of-compileride"},"Change of Compiler/IDE"),Object(a.b)("p",null,"During the activities you will have to compile your code for your target board. The compilers supported by TouchGFX are IAR, Keil and GCC(CubeIDE). The toolchain selected for your TouchGFX project is configured in CubeMX, so if you want to change it you should open the TouchGFX project .ioc file in CubeMX and change the toolchain setting.\nWhen selecting an Application Template (AT) in TouchGFX Designer it will have one toolchain preselected, so you will only find a project file for one of the toolchains. As the AT comes with an .ioc as well, you can open it and change the toolchain to match your needs. "))}p.isMDXComponent=!0},227:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return b}));var n=o(0),i=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):c({},t,{},e)),o},d=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),p=n,m=d["".concat(r,".").concat(p)]||d[p]||h[p]||a;return o?i.a.createElement(m,c({ref:t},u,{components:o})):i.a.createElement(m,c({ref:t},u))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:n,r[1]=c;for(var u=2;u<a;u++)r[u]=o[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},228:function(e,t,o){"use strict";var n=o(5),i=o(0),a=o.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,o=this.props.height;return e?a.a.createElement("div",{class:"figure noshadow"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:o,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption)):a.a.createElement("div",{class:"figure"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:o,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=r}}]);