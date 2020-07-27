(window.webpackJsonp=window.webpackJsonp||[]).push([[573],{1230:function(e,t,i){"use strict";var o=i(5),n=i(0),a=i.n(n),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(a.a.createElement("div",{class:e},a.a.createElement("div",{class:"highlight-heading"},a.a.createElement("h5",null,a.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(n.Component);t.a=l},1232:function(e,t,i){"use strict";var o=i(5),n=i(0),a=i.n(n),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,i=this.props.height;return e?a.a.createElement("div",{class:"figure noshadow"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:i,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption)):a.a.createElement("div",{class:"figure"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:i,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption))},t}(n.Component);t.a=l},1237:function(e,t,i){"use strict";var o=i(5),n=i(0),a=i.n(n),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return a.a.createElement("code",null,this.props.text)},t}(n.Component);t.a=l},1238:function(e,t,i){"use strict";var o=i(5),n=i(0),a=i.n(n),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return a.a.createElement("i",null,this.props.text)},t}(n.Component);t.a=l},1239:function(e,t,i){"use strict";var o=i(5),n=i(0),a=i.n(n),l=i(1230),r=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return a.a.createElement(l.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)},t}(n.Component);t.a=c},710:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return u})),i.d(t,"metadata",(function(){return p})),i.d(t,"rightToc",(function(){return h})),i.d(t,"default",(function(){return m}));var o=i(1),n=i(9),a=(i(0),i(1229)),l=i(1231),r=(i(1232),i(1239)),c=i(1237),s=i(1238),u={id:"compiling-and-flashing",title:"Compiling & Flashing"},p={id:"version-4.14/development/ui-development/working-with-touchgfx/compiling-and-flashing",title:"Compiling & Flashing",description:"This section describes how to go from TouchGFX application code to executing program, that is how to compile and flash in a specific setup.\r",source:"@site/versioned_docs\\version-4.14\\development\\ui-development\\working-with-touchgfx\\compiling-and-flashing.mdx",permalink:"/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing",version:"4.14",sidebar:"version-4.14/docs",previous:{title:"Simulator",permalink:"/docs/development/ui-development/working-with-touchgfx/simulator"},next:{title:"Debugging",permalink:"/docs/development/ui-development/working-with-touchgfx/debugging"}},h=[{value:"Compiling TouchGFX Applications",id:"compiling-touchgfx-applications",children:[{value:"Compiling for PC Simulator",id:"compiling-for-pc-simulator",children:[]},{value:"Compiling for Target Hardware",id:"compiling-for-target-hardware",children:[]}]},{value:"Flashing STM32 Evaluation Kits",id:"flashing-stm32-evaluation-kits",children:[{value:"GCC &amp; TouchGFX Designer",id:"gcc--touchgfx-designer",children:[]},{value:"CubeIDE",id:"cubeide",children:[]},{value:"IAR",id:"iar",children:[]},{value:"Keil",id:"keil",children:[]}]},{value:"Flashing Custom Hardware",id:"flashing-custom-hardware",children:[]}],d={rightToc:h},b="wrapper";function m(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)(b,Object(o.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section describes how to go from TouchGFX application code to executing program, that is how to compile and flash in a specific setup."),Object(a.b)("h2",{id:"compiling-touchgfx-applications"},"Compiling TouchGFX Applications"),Object(a.b)("p",null,"When compiling a TouchGFX application, there are two options; compiling for the PC simulator or compiling for the target hardware."),Object(a.b)("h3",{id:"compiling-for-pc-simulator"},"Compiling for PC Simulator"),Object(a.b)("p",null,"There are two options for compiling projects for the PC Simulator; GCC and Visual Studio. ",Object(a.b)("br",null),"\nBoth of these options are always available, since they are generated by TouchGFX Designer."),Object(a.b)("h4",{id:"gcc"},"GCC"),Object(a.b)("p",null,"The makefile is located at ",Object(a.b)(c.a,{text:"<touchgfx_application_root_folder>/simulator/gcc/Makefile",mdxType:"InlineCode"})),Object(a.b)("p",null,"TouchGFX includes a MinGW environment, that comes preinstalled with a GCC compiler and GNU Make, making it easy to execute the generated Makefile for the PC simulator."),Object(a.b)("p",null,"The TouchGFX Environment can be launched either from ",Object(a.b)(c.a,{text:"<touchgfx_installation_directory>/env/MinGW/msys/1.0/msys.bat",mdxType:"InlineCode"}),' or from the shortcut added to the Windows start menu, named "TouchGFX x.y.z Environment" where x, y and z describe the version number.'),Object(a.b)("p",null,"After launching the TouchGFX Environment and navigating to the TouchGFX Application root folder, the simple command below can be executed to produce a simulator.exe file."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"make -f simulator/gcc/Makefile\n")),Object(a.b)("p",null,"The simulator executable can then be launched from the TouchGFX Environment with the following command."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"./build/bin/simulator.exe\n")),Object(a.b)("p",null,"The PC Simulator can also be compiled and launched from TouchGFX Designer, by using the ",Object(a.b)(l.a,{to:"../designer-user-guide/main-window#run-simulator",mdxType:"Link"},"Run Simulator")," command."),Object(a.b)("h4",{id:"visual-studio"},"Visual Studio"),Object(a.b)("p",null,"To compile the PC Simulator using Visual Studio, simply open the generated solution file located at ",Object(a.b)(c.a,{text:"<touchgfx_application_root_folder>/simulator/msvs/Application.sln",mdxType:"InlineCode"})," using Visual Studio."),Object(a.b)("p",null,"The PC Simulator can be launched directly from Visual Studio, enabling ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"debugging"}),"code debugging"),"."),Object(a.b)(r.a,{mdxType:"Note"},"Before being able to compile with GCC or Visual Studio, Run the ",Object(a.b)(l.a,{to:"../designer-user-guide/main-window#generate-code",mdxType:"Link"},"Generate")," command from TouchGFX Designer."),Object(a.b)("h3",{id:"compiling-for-target-hardware"},"Compiling for Target Hardware"),Object(a.b)("p",null,"Compiling projects for STM32 Evaluation Kits is quite simple for ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../../../introduction/getting-started#application-template--ui-template"}),"Application Template")," based applications.",Object(a.b)("br",null)),Object(a.b)("p",null,"Each application template contain project files for GCC, CubeIDE, IAR and Keil:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"GCC: ",Object(a.b)(c.a,{text:"<project_root_folder>/gcc/MakeFile",mdxType:"InlineCode"})),Object(a.b)("li",{parentName:"ul"},"CubeIDE: ",Object(a.b)(c.a,{text:"<project_root_folder>/STM32CubeIDE/.cproject",mdxType:"InlineCode"})),Object(a.b)("li",{parentName:"ul"},"IAR: ",Object(a.b)(c.a,{text:"<project_root_folder>/EWARM/Project.eww",mdxType:"InlineCode"})),Object(a.b)("li",{parentName:"ul"},"Keil: ",Object(a.b)(c.a,{text:"<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>.uvprojx",mdxType:"InlineCode"}))),Object(a.b)("p",null,"The active tool chain is set from CubeMX and is set to CubeIDE by default. ",Object(a.b)(s.a,{text:"Please note that all project files are not present at the same time. The generated project file depends on the selected tool chain in CubeMX",mdxType:"InlineNote"})),Object(a.b)("p",null,"TouchGFX includes a MinGW environment, that comes preinstalled with the GNU Embedded Toolchain for Arm and GNU Make, making it easy to execute the included Makefile for the target hardware."),Object(a.b)("p",null,"The TouchGFX Environment can be launched either from ",Object(a.b)(c.a,{text:"<touchgfx_installation_directory>/env/MinGW/msys/1.0/msys.bat",mdxType:"InlineCode"}),' or from the shortcut added to the Windows start menu "TouchGFX x.y.z Environment"'),Object(a.b)("p",null,"After launching the TouchGFX Environment and navigating to the project root folder, the simple command below can be executed to compile the project for the target hardware."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"make -f gcc/Makefile\n")),Object(a.b)(r.a,{mdxType:"Note"},"Before being able to compile with GCC, CubeIDE, IAR or Keil, run the ",Object(a.b)(l.a,{to:"../designer-user-guide/main-window#generate-code",mdxType:"Link"},"Generate")," command from TouchGFX Designer."),Object(a.b)("h2",{id:"flashing-stm32-evaluation-kits"},"Flashing STM32 Evaluation Kits"),Object(a.b)("p",null,"Flashing projects to STM32 Evaluation Kits is quite simple with projects based on premade ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../../../introduction/getting-started#application-template--ui-template"}),"Application Template")," .",Object(a.b)("br",null)),Object(a.b)("p",null,"Each project, when build, produces a binary that can be flashed by\neither ",Object(a.b)(l.a,{target:"_blank",to:"https://www.st.com/en/development-tools/stsw-link004.html",mdxType:"Link"},"ST Link Utility")," or ",Object(a.b)(l.a,{target:"_blank",to:"https://www.st.com/en/development-tools/stm32cubeprog.html",mdxType:"Link"},"Cube Programmer")),Object(a.b)("p",null,"Therefore these tools must be installed to proceed with flashing."),Object(a.b)("p",null,"It is suggested to install these tools to their default location."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ST Link Utility default install location:",Object(a.b)("br",null),Object(a.b)(c.a,{text:"C:/Program Files (x86)/STMicroelectronics/STM32 ST-LINK Utility/ST-LINK Utility",mdxType:"InlineCode"})),Object(a.b)("li",{parentName:"ul"},"Cube Programmer default install location:",Object(a.b)("br",null),Object(a.b)(c.a,{text:"C:/Program Files/STMicroelectronics/STM32Cube/STM32CubeProgrammer",mdxType:"InlineCode"}))),Object(a.b)(r.a,{mdxType:"Note"},"The Application Templates do not provide any flash loaders for flashing directly from within IAR, Keil, CubeIDE or other IDEs."),Object(a.b)("h3",{id:"gcc--touchgfx-designer"},"GCC & TouchGFX Designer"),Object(a.b)("p",null,"The Makefile included with an Application Template located at ",Object(a.b)(c.a,{text:"<project_root_folder>/gcc/MakeFile",mdxType:"InlineCode"})," has a built in flash command, as shown below, that uses either ST Link Utility or Cube Programmer (depending on the AT) to flash the STM32 Evaluation Kit. You can of course also use the desktop version of the flash tools to flash the boards with the generated .hex files."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"make -f gcc/Makefile flash\n")),Object(a.b)("p",null,"The .hex file is located at ",Object(a.b)(c.a,{text:"<project_root_folder>/TouchGFX/build/bin/target.hex",mdxType:"InlineCode"})),Object(a.b)("p",null,"It is also possible to only flash the internal flash and thus skipping the external part. This can reduce the flash time considerable if you have a large set of images. However, you need to be sure that the content for the external flash has not changed since you flashed the external flash last time. If it has, and you do not reflash it, you will see strange behaviour. In this case reflash both the internal and external flash."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"make -f gcc/Makefile intflash\n")),Object(a.b)("p",null,"The .hex file is located at ",Object(a.b)(c.a,{text:"<project_root_folder>/TouchGFX/build/bin/inttarget.hex",mdxType:"InlineCode"})),Object(a.b)("p",null,"The Application Template also provides the configuration for TouchGFX Designer to be able to flash projects via the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../designer-user-guide/main-window#run-target"}),"Run Target Command"),". The command used by TouchGFX Designer to flash can be seen and overridden in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../designer-user-guide/config-view#build"}),"Build Section")," of the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../designer-user-guide/config-view"}),"Config View")," in TouchGFX Designer."),Object(a.b)("h3",{id:"cubeide"},"CubeIDE"),Object(a.b)("p",null,"Application Templates provide support for flashing project compiled with CubeIDE, by using the .elf file output by CubeIDE, with the Cube Programmer."),Object(a.b)("p",null,"The .elf file is located at ",Object(a.b)(c.a,{text:"<project_root_folder>/STM32CubeIDE/Debug/<STM32_evaluation_kit_name>.elf",mdxType:"InlineCode"})),Object(a.b)(s.a,{text:"e.g. C:/TouchGFXProjects/MyApplication/STM32CubeIDE/Debug/STM32F746G_DISCO.elf",mdxType:"InlineNote"}),Object(a.b)("h3",{id:"iar"},"IAR"),Object(a.b)("p",null,"The Application Templates provide support for flashing project compiled with IAR, by using the .hex file output by IAR, with the Cube Programmer."),Object(a.b)("p",null,"The .hex file is located at ",Object(a.b)(c.a,{text:"<project_root_folder>/EWARM/<STM32_evaluation_kit_name>/Exe/<STM32_evaluation_kit_name>.hex",mdxType:"InlineCode"})),Object(a.b)(s.a,{text:"e.g. C:/TouchGFXProjects/MyApplication/MDK-ARM/STM32F469I-DISCO/STM32F469I-DISCO.hex",mdxType:"InlineNote"}),Object(a.b)("h3",{id:"keil"},"Keil"),Object(a.b)("p",null,"The Application Templates provide support for flashing project compiled with Keil, by using the .hex file output by Keil, with the Cube Programmer."),Object(a.b)("p",null,"The .hex file is located at ",Object(a.b)(c.a,{text:"<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>/<STM32_evaluation_kit_name>.hex",mdxType:"InlineCode"})),Object(a.b)(s.a,{text:"e.g. C:/TouchGFXProjects/MyApplication/MDK-ARM/STM32F469I-DISCO/STM32F469I-DISCO.hex",mdxType:"InlineNote"}),Object(a.b)("h2",{id:"flashing-custom-hardware"},"Flashing Custom Hardware"),Object(a.b)("p",null,"If instead what needs to be flashed is custom hardware, and not a predefined hardware setup like an STM32 Evaluation Kit, you can still use STM32CubeProgrammer. STM32CubeProgrammer does not necessarily come with a flash loading mechanism for your specific external memory. It is however possible to create a custom flash loader. Read the ",Object(a.b)(l.a,{to:"https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf",mdxType:"Link"},"user manual on developing customized loaders for your external memory")," to find more info."))}m.isMDXComponent=!0}}]);