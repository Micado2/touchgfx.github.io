(window.webpackJsonp=window.webpackJsonp||[]).push([[584],{1230:function(e,t,n){"use strict";var o=n(5),i=n(0),a=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(a.a.createElement("div",{class:e},a.a.createElement("div",{class:"highlight-heading"},a.a.createElement("h5",null,a.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(i.Component);t.a=r},1234:function(e,t,n){"use strict";var o=n(5),i=n(0),a=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return a.a.createElement("div",{class:"code-header"},a.a.createElement("div",null,a.a.createElement("h5",null,this.props.children)))},t}(i.Component);t.a=r},1243:function(e,t,n){"use strict";var o=n(5),i=n(0),a=n.n(i),r=n(1230),l=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return a.a.createElement(r.a,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:l},this.props.children)},t}(i.Component);t.a=c},721:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return h}));var o=n(1),i=n(9),a=(n(0),n(1229)),r=n(1243),l=n(1234),c={id:"known-issues",title:"Known Issues"},s={id:"version-4.13/miscellaneous/known-issues",title:"Known Issues",description:"This article lists the issues that are known to be present in all TouchGFX versions, along with potential workarounds. Also, if there are any specific upgrade steps you need to perform to upgrade TouchGFX to a certain version, these will be mentioned. Note that if your current version is several releases old, you need to perform the upgrade steps for all the releases up to the new one.\r",source:"@site/versioned_docs\\version-4.13\\miscellaneous\\known-issues.mdx",permalink:"/docs/4.13/miscellaneous/known-issues",version:"4.13",sidebar:"version-4.13/docs",previous:{title:"Getting Help",permalink:"/docs/4.13/miscellaneous/getting-help"},next:{title:"Changelog",permalink:"/docs/4.13/miscellaneous/changelog"}},d=[{value:"TouchGFX 4.13.0",id:"touchgfx-4130",children:[{value:"Bugs",id:"bugs",children:[]},{value:"Additional Compiler Support\xa0",id:"additional-compiler-support",children:[]},{value:"Backwards Compatibility",id:"backwards-compatibility",children:[]}]},{value:"TouchGFX 4.12.3",id:"touchgfx-4123",children:[{value:"Backwards compatibility",id:"backwards-compatibility-1",children:[]}]},{value:"TouchGFX 4.11.0",id:"touchgfx-4110",children:[{value:"Backwards compatibility",id:"backwards-compatibility-2",children:[]}]},{value:"TouchGFX 4.10.0",id:"touchgfx-4100",children:[{value:"Upgrading from 4.9.x",id:"upgrading-from-49x",children:[]},{value:"Backwards compatibility",id:"backwards-compatibility-3",children:[]},{value:"Project Updater Issue",id:"project-updater-issue",children:[]},{value:"TextArea and ChromART (DMA2D)",id:"textarea-and-chromart-dma2d",children:[]}]},{value:"TouchGFX 4.9.0",id:"touchgfx-490",children:[{value:"Upgrading from 4.8.0",id:"upgrading-from-480",children:[]},{value:"Method 1: retain original file structure",id:"method-1-retain-original-file-structure",children:[]},{value:"Method 2: import into new template",id:"method-2-import-into-new-template",children:[]},{value:"Method 3: Manual upgrade without Designer",id:"method-3-manual-upgrade-without-designer",children:[]}]}],u={rightToc:d},p="wrapper";function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(p,Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This article lists the issues that are known to be present in all TouchGFX versions, along with potential workarounds. Also, if there are any specific upgrade steps you need to perform to upgrade TouchGFX to a certain version, these will be mentioned. Note that if your current version is several releases old, you need to perform the upgrade steps for all the releases up to the new one."),Object(a.b)("h2",{id:"touchgfx-4130"},"TouchGFX 4.13.0"),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("h4",{id:"font-converter"},"Font Converter\xa0"),Object(a.b)("p",null,"The FontConverter tool would generate glyph pixel data for unicodes that were a part of a rule in the font, regardless of that glyph being used in an actual text in the application. This led to several megabytes, potentially, of additional glyph pixel data. New FontConverter tools (windows and linux) that no longer generate pixel data for glyphs that aren't in use by the application can be found here:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/Patches/4.13.0/fontconvert_fix.zip"}),"fontconvert_fix.zip"))),Object(a.b)("p",null,"Extracting this file at the root of your 4.13.0 installation will update the fontconverter binaries inside"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"touchgfx\\framework\\tools")),Object(a.b)("h3",{id:"additional-compiler-support"},"Additional Compiler Support\xa0"),Object(a.b)("p",null,"A library built with ARMCLANG compiler (v6.12) can be found here:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"http://sw-center-st-com.s3-eu-west-1.amazonaws.com/touchgfx/TouchGFX/Patches/4.13.0/touchgfx_core_clang.zip"}),"touchgfx_core_clang.zip"))),Object(a.b)("p",null,"Extracting this file at the root of your 4.13.0 installation will place the library ",Object(a.b)("inlineCode",{parentName:"p"},"touchgfx_core_clang.lib")," inside."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"touchgfx\\lib\\core\\cortex_m7\\Keil")),Object(a.b)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),Object(a.b)("h4",{id:"deprecated-features"},"Deprecated Features"),Object(a.b)("p",null,"The following deprecated features have been removed. If you have referenced them in your code, you may need to rewrite parts of your application:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Definition of deprecated ",Object(a.b)("inlineCode",{parentName:"li"},"TRANSPARENT_COL")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Drawable::getType()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"HAL::blitSetTransparencyKey()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"HAL::registerTextCache()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"HAL::cacheTextString()"))),Object(a.b)("h4",{id:"texturemapper-is-disabled-by-default"},"TextureMapper is Disabled by Default"),Object(a.b)("p",null,"The TextureMapper is disabled by default to reduce the code space used by TouchGFX. TouchGFX designer will insert code to enable texture mapper in all new project."),Object(a.b)("p",null,"If you are migrating an old project to TouchGFX 4.13 and you are updating to TouchGFX 4.13 this is handled by TouchGFX Designer."),Object(a.b)("p",null,"If you are updating manually then you need to insert code to enable the TextureMapper. Otherwise any TextureMapper will not draw on the screen."),Object(a.b)("p",null,"Read more here:\xa0",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../development/ui-development/designer-user-guide/config-view#framework-features"}),"Configuring TouchGFX Features"),"."),Object(a.b)("h4",{id:"hal-sdl1-incompatible"},"HAL SDL1 incompatible"),Object(a.b)("p",null,"Two functions were moved from the TouchGFX library code to the ",Object(a.b)("inlineCode",{parentName:"p"},"HALSDL2.cpp"),". This makes no difference for applications that uses the ",Object(a.b)("inlineCode",{parentName:"p"},"HALSDL2.cpp")," as HAL for the Windows simulator."),Object(a.b)("p",null,"If you have a old application (before TouchGFX 4.8.0) your simulator is maybe using HALSDL (not 2). This simulator HAL is not included in TouchGFX anymore. The HALSDL is missing the two functions that were previously included in the TouchGFX library. You need to add them manually to ",Object(a.b)("inlineCode",{parentName:"p"},"HALSDL.cpp"),":"),Object(a.b)(l.a,{mdxType:"CodeHeader"},"HALSDL.cpp"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),'void simulator_enable_stdio();\nvoid simulator_enable_stdio()\n{\n    HWND consoleHwnd = GetConsoleWindow(); // Get handle of console window\n    if (!consoleHwnd)                      // No console window yet?\n    {\n        HWND activeHwnd = GetActiveWindow(); // Remember which window is active\n\n        AllocConsole();                   // Allocate a new console\n        consoleHwnd = GetConsoleWindow(); // Get handle of console window\n\n        FILE* dummy;\n        freopen_s(&dummy, "CONIN$", "r", stdin); // Redirect stdin/stdout/stderr to the new console\n        freopen_s(&dummy, "CONOUT$", "w", stdout);\n        freopen_s(&dummy, "CONOUT$", "w", stderr);\n\n        SwitchToThisWindow(activeHwnd, true); // Switch back to the originally active window\n    }\n    if (consoleHwnd)\n    {\n        ShowWindow(consoleHwnd, SW_SHOW); // Show/hide it!\n    }\n}\nvoid simulator_printf(const char* format, va_list pArg);\nvoid simulator_printf(const char* format, va_list pArg)\n{\n    // Create a console window, if window is visible.\n    simulator_enable_stdio();\n    if (GetConsoleWindow()) // Only print if we have a console window\n    {\n        vprintf(format, pArg);\n    }\n}\n')),Object(a.b)("h2",{id:"touchgfx-4123"},"TouchGFX 4.12.3"),Object(a.b)("h3",{id:"backwards-compatibility-1"},"Backwards compatibility"),Object(a.b)("h4",{id:"screen-transitions"},"Screen transitions"),Object(a.b)("p",null,"Earlier versions are redrawing the entire screen after a screen transition is completed.\xa0This additional redraw caused performance issues on some slow platforms. If you require this redraw for some reason, you need to invalidate the relevant part of the screen, e.g. by calling ",Object(a.b)("inlineCode",{parentName:"p"},"container.invalidate()")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"Screen::afterTransition()")," virtual of the Screen transitioned to."),Object(a.b)("h4",{id:"binary-fonts"},"Binary Fonts"),Object(a.b)("p",null,"The format of the binary fonts has changed because kerning data is now also included in the binary fonts. Binary font files needs to be regenerated, old files will not work correctly. Depending on how your Makefiles are setup, this is normally done by regenerating all assets (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"make -f simulator/gcc/Makefile clean assets"),")."),Object(a.b)("h2",{id:"touchgfx-4110"},"TouchGFX 4.11.0"),Object(a.b)("h3",{id:"backwards-compatibility-2"},"Backwards compatibility"),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"touchgfx/framework/include/touchgfx/lcd/LCD.hpp")," we have removed an include of the file ",Object(a.b)("inlineCode",{parentName:"p"},"touchgfx/hal/HAL.hpp")," that was inserted by mistake in an earlier version. This may give you a compile error in a file where you have included ",Object(a.b)("inlineCode",{parentName:"p"},"LCD.hpp")," and also make use of the ",Object(a.b)("inlineCode",{parentName:"p"},"HAL.hpp")," content. The solution is to also include\xa0",Object(a.b)("inlineCode",{parentName:"p"},"touchgfx/framework/include/touchgfx/hal/HAL.hpp")," in your file."),Object(a.b)("h2",{id:"touchgfx-4100"},"TouchGFX 4.10.0"),Object(a.b)("h3",{id:"upgrading-from-49x"},"Upgrading from 4.9.x"),Object(a.b)("p",null,"From version 4.10.0 TouchGFX runs exclusively on STM32 MCUs."),Object(a.b)("p",null,"You need to do the following if updating an old project."),Object(a.b)("p",null,"Add the highlighted code below at application startup to inform TouchGFX that you are running on STM32 hardware. A suitable location is the end of the ",Object(a.b)("inlineCode",{parentName:"p"},"hw_init()")," function in ",Object(a.b)("inlineCode",{parentName:"p"},"BoardConfiguration.cpp")),Object(a.b)(l.a,{mdxType:"CodeHeader"},"BoardConfiguration.cpp"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"void hw_init() {\n    ...\n    //Enable CRC engine for STM32 Lock check\n    __HAL_RCC_CRC_CLK_ENABLE();\n}\n")),Object(a.b)("h3",{id:"backwards-compatibility-3"},"Backwards compatibility"),Object(a.b)("p",null,"Unused file ",Object(a.b)("inlineCode",{parentName:"p"},"\\touchgfx\\framework\\include\\touchgfx\\canvas_widget_renderer\\RGBA8.hpp")," removed."),Object(a.b)("h3",{id:"project-updater-issue"},"Project Updater Issue"),Object(a.b)("p",null,"IAR and Keil project updaters invoked from TouchGFX Designer do not respect custom file level optimization set in the respective IDE."),Object(a.b)("h3",{id:"textarea-and-chromart-dma2d"},"TextArea and ChromART (DMA2D)"),Object(a.b)("p",null,"Rendering of TextAreas with ChromART (when TextArea is the top most element / last to be drawn) cause a premature unlocking of the framebuffer and subsequently a premature completion/transfer of the current frame to the display. Once ",Object(a.b)("inlineCode",{parentName:"p"},"endFrame()")," is called by TouchGFX all drawing operations, including DMA operations, should already be completed. Due to a breach of contract by TextArea in how to appropriately protect the framebuffer, DMA operations are allowed to continue even after returning from ",Object(a.b)("inlineCode",{parentName:"p"},"endFrame()"),"."),Object(a.b)("p",null,"The contract for a widget is to either:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Lock the framebuffer (returns a pointer to framebuffer)."),Object(a.b)("li",{parentName:"ol"},"Draw something in the framebuffer.\xa0"),Object(a.b)("li",{parentName:"ol"},"Unlock the framebuffer.")),Object(a.b)("p",null,"Or to use DMA operations, in which case syncronization of the framebuffer is handled automatically."),Object(a.b)("p",null,"TextArea, in 4.10.0, mixes the two procedures which can cause glitches if it is the top most element (last to be drawn) of the current screen. The bug can be fixed by manually guarding ",Object(a.b)("inlineCode",{parentName:"p"},"endFrame()")," with the following override of ",Object(a.b)("inlineCode",{parentName:"p"},"endFrame()")," (based on F4 HAL). It ensures that ",Object(a.b)("inlineCode",{parentName:"p"},"endFrame()")," does not return if ChromART operations are still being processed.\xa0\xa0"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"void STM32F4HAL::endFrame()\n{\n    if (dma.isDMARunning())\n    {\n        OSWrappers::tryTakeFrameBufferSemaphore();\n    }\n    HAL::endFrame();\n}\n")),Object(a.b)("h2",{id:"touchgfx-490"},"TouchGFX 4.9.0"),Object(a.b)("h3",{id:"upgrading-from-480"},"Upgrading from 4.8.0"),Object(a.b)("p",null,"With the introduction of Application Templates, which essentially separates board support packages from the core framework, we have removed a lot of low-level drivers and other files from the ",Object(a.b)("em",{parentName:"p"},"touchgfx")," folder in 4.9.0. These files are now provided by application templates instead. However, this means that you cannot upgrade to 4.9.0 by just replacing the touchgfx folder, since that would likely lead to some BSP files missing. Instead, the TouchGFX Designer is able to perform the upgrade automatically. The upgrade can be done in two different ways, and you will need to decide which one is most suitable for you."),Object(a.b)(r.a,{mdxType:"Caution"},"Please make sure you have a backup of your project before upgrading"),Object(a.b)("h3",{id:"method-1-retain-original-file-structure"},"Method 1: retain original file structure"),Object(a.b)("p",null,"This method is done by simply opening your project in the new 4.9.0 Designer. TouchGFX Designer will prompt you whether you want to upgrade, and by clicking OK, TouchGFX Designer will apply the necessary changes. TouchGFX Designer will perform the following operations:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Unpack the new reduced touchgfx folder into your application, and modify your TouchGFX path to match this"),Object(a.b)("li",{parentName:"ol"},"Download and unpack all the files we have removed from the touchgfx folder, so that your project still compiles")),Object(a.b)("p",null,"This approach will leave pretty much everything as they used to be, so if the old file structure suits your project, this is the easiest choice. The main drawback is that you will not have the benefit of the image converter speedup (by working on image folders instead of individual files). But you can modify your makefile manually to use this approach though."),Object(a.b)("h3",{id:"method-2-import-into-new-template"},"Method 2: import into new template"),Object(a.b)("p",null,'Using this method you can transition your project into the new template-based file organisation. To achieve this, you must first let the Designer upgrade your project using Method 1 above. Then, create a new project using the appropriate application template (simulator, or one matching your eval board). With this new project opened in the Designer, go to the top menu and click "Edit -> Import GUI". In the dialog box point out the .touchgfx file of your project. The Designer will then automatically import all the UI files, including assets, into the newly created project. If you have added additional code outside of the gui folder, you would need to manually copy those files over to the new project.'),Object(a.b)("h3",{id:"method-3-manual-upgrade-without-designer"},"Method 3: Manual upgrade without Designer"),Object(a.b)("p",null,"If you are not using the Designer, you can perform the upgrade by:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Replacing the touchgfx folder used by your project with the one from the 4.9.0 installation."),Object(a.b)("li",{parentName:"ol"},"Download ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"http://ftp.draupnergraphics.com/TouchGFX/Evaluation/4.9.0/Qll3iKK54AnJer7XRNm2/fw_delta_4.8.0_4.9.0.zip"}),"this zip")," and unpack it into the touchgfx folder, restoring the removed files.")))}h.isMDXComponent=!0}}]);