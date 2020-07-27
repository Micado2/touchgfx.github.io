(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1230:function(e,t,n){"use strict";var i=n(5),a=n(0),o=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(a.Component);t.a=r},1232:function(e,t,n){"use strict";var i=n(5),a=n(0),o=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=r},1235:function(e,t,n){"use strict";var i=n(5),a=n(0),o=n.n(a),r=n(1230),s=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:s},this.props.children)},t}(a.Component);t.a=l},1237:function(e,t,n){"use strict";var i=n(5),a=n(0),o=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return o.a.createElement("code",null,this.props.text)},t}(a.Component);t.a=r},1238:function(e,t,n){"use strict";var i=n(5),a=n(0),o=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return o.a.createElement("i",null,this.props.text)},t}(a.Component);t.a=r},1240:function(e,t,n){"use strict";n(1241);var i=n(5),a=n(0),o=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return o.a.createElement("i",null,this.props.name)},t}(a.Component);t.a=r},1241:function(e,t,n){var i=n(24).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&i(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},1244:function(e,t,n){"use strict";var i=n(5),a=n(0),o=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return o.a.createElement("code",{class:"shortcut"},this.props.text)},t}(a.Component);t.a=r},161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return h})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return j}));var i=n(1),a=n(9),o=(n(0),n(1229)),r=n(1232),s=n(1238),l=n(1237),c=n(1244),p=n(1235),u=n(1240),d=n(1231),b={id:"config-view",title:"Config View"},h={id:"development/ui-development/designer-user-guide/config-view",title:"Config View",description:"In the Config View various settings affecting the project can be configured.\r",source:"@site/docs\\development\\ui-development\\designer-user-guide\\config-view.mdx",permalink:"/docs/next/development/ui-development/designer-user-guide/config-view",version:"next",sidebar:"docs",previous:{title:"Texts View",permalink:"/docs/next/development/ui-development/designer-user-guide/texts-view"},next:{title:"Interactions",permalink:"/docs/next/development/ui-development/designer-user-guide/interactions-view"}},m=[{value:"General",id:"general",children:[]},{value:"Display",id:"display",children:[]},{value:"Default Image Configuration",id:"default-image-configuration",children:[]},{value:"Text Configuration",id:"text-configuration",children:[]},{value:"Simulator",id:"simulator",children:[]},{value:"Build",id:"build",children:[]},{value:"Framework Features",id:"framework-features",children:[]}],g={rightToc:m},f="wrapper";function j(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(f,Object(i.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the Config View various settings affecting the project can be configured."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view.png",caption:"General settings in Config View",mdxType:"Figure"}),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-general.png",caption:"General settings in Config View",mdxType:"Figure"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Application Name"),Object(o.b)("br",null),"\nApplication name is a readonly field, displaying the name that was chosen for the application when it was created."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Application Template"),Object(o.b)("br",null),"\nThis field shows the application template the application was created with, if this information is not available 'N/A' will be displayed.",Object(o.b)("br",null),"\nIf this information is available, the name of the application template will be displayed along with the version. There will also be an icon with an 'i' ",Object(o.b)(s.a,{text:"(see image above)",mdxType:"InlineNote"}),", clicking this will display more information about the Application Template."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Selected Language"),Object(o.b)("br",null),"\nThis dropdown contains the languages configured in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"texts-view"}),"Texts")," view, and selects which language should be displayed at startup of the project."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Skin"),Object(o.b)("br",null),"\nThis dropdown sets which of the two built-in styles to use for widgets that support setting a style, options are 'Blue' or 'Dark'. ",Object(o.b)(s.a,{text:"If a widget has been configured with a style from the 'Blue' skin, and the skin is changed to 'Dark', the widget will automatically switch to a corresponding style in the 'Dark' skin.",mdxType:"InlineNote"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Startup Screen"),"\nThis dropdown contains all the screens that have been added to the project, and selects which screen to display at startup of the project."),Object(o.b)("h2",{id:"display"},"Display"),Object(o.b)("p",null,"In this section the settings for the Display can be configured."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-display.png",caption:"Display settings in Config View",mdxType:"Figure"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Dimensions"),Object(o.b)("br",null),"\nThe size of the display can be set through the ",Object(o.b)(u.a,{name:"W(width)",mdxType:"Property"})," and ",Object(o.b)(u.a,{name:"H(height)",mdxType:"Property"})," properties, however if the size has been configured by the Application Template, configuration of the size will be disabled."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Display Orientation"),Object(o.b)("br",null),"\nThe orientation of the display can toggled between landscape and portrait, this will also affect how images used in a project are converted to cpp files."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Color Depth"),Object(o.b)("br",null),"\nThis dropdown contains the color depths that are available to a project. These are determined by the Application Template used to create a project."),Object(o.b)("h2",{id:"default-image-configuration"},"Default Image Configuration"),Object(o.b)("p",null,"In this section the default configuration used for images in a project can be set. These settings will affect all images in the project, unless they are overwrite in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"images-view"}),"Images")," view"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-default-image-configuration.png",caption:"Default Image Configuration settings in Config View",mdxType:"Figure"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Opaque Image Format"),Object(o.b)("br",null),"\nThis dropdown sets which format images that have only opaque pixel data should be generated with. The available image formats in this dropdown, depends on the selected color depth of the project."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Non Opaque Image Format"),Object(o.b)("br",null),"\nThis dropdown sets which format images that have non-opaque pixel data should be generated with. The available image formats in this dropdown, depends on the selected color depth of the project."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Section"),Object(o.b)("br",null),"\nThis dropdown sets the location where image data should be stored on the target hardware. The available sections in this dropdown, depends on the Application Template that the project was created with."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Extra Section"),Object(o.b)("br",null),"\nWhen using L8 image formats you can choose to store the color table in a different section using this dropdown. The available sections in this dropdown, depends on the Application Template that the project was created with."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Dither Algorithm"),Object(o.b)("br",null),"\nThis dropdown sets the which dithering algorithm used for images."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"No dither: ",Object(o.b)(s.a,{text:"no dithering is applied to the image. This is the setting with the highest performance since no alteration is made. However, depending on the image, the quality of the photo may also degrade visually at lower color depths.",mdxType:"InlineNote"})),Object(o.b)("li",{parentName:"ul"},"Floyd-Steinberg: ",Object(o.b)(s.a,{text:"diffuses the error to neighboring pixels, resulting in fine-grained dithering but sacrificing sharpness.",mdxType:"InlineNote"})),Object(o.b)("li",{parentName:"ul"},"Jarvis, Judice and Ninke: ",Object(o.b)(s.a,{text:"diffuses the error to pixels one step further away compared to Floyd-Steinberg, resulting in coarser dithering but a sharper image. The slowest of the 3 error-diffusion dithering algorithms.",mdxType:"InlineNote"})),Object(o.b)("li",{parentName:"ul"},"Stucki: ",Object(o.b)(s.a,{text:"based on minimized average error dithering but faster and cleaner.",mdxType:"InlineNote"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Alpha Dither"),Object(o.b)("br",null),"\nThis dropdown sets whether or not to use the dither algorithm through the alpha channel."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Layout Rotaion"),Object(o.b)("br",null),"\nThis dropdown specifies the rotation of the image data when generated. If the screen orientation is changed, use this to correctly render images in the new orientation."),Object(o.b)("h2",{id:"text-configuration"},"Text Configuration"),Object(o.b)("p",null,"In this section options for text rendering and storage can be configured by checking off the boxes that fit your projects needs."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-text-configuration.png",caption:"Text Configuration settings in Config View",mdxType:"Figure"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Remap texts"),Object(o.b)("br",null),"\nThis option defines whether or not translations thats are identical should be remapped.\nRemapping texts will combine identical translations and suffixes across all languages, typographies and alignments, resulting in a reduced footprint.",Object(o.b)("br",null),Object(o.b)(s.a,{text:"This option is mutually exclusive with the option 'Binary translation files'",mdxType:"InlineNote"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"A4"),Object(o.b)("br",null),"\nThis option defines whether or not the horizontal pixel data of glyphs byte aligned into an A4 format.",Object(o.b)("br",null),Object(o.b)(s.a,{text:"This only affects typographies that are configured as 4bpp",mdxType:"InlineNote"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Binary translation files"),Object(o.b)("br",null),"\nThis option defines whether or not the translations in a project, should be moved into binary files that can be loaded at runtime.",Object(o.b)("br",null),Object(o.b)(s.a,{text:"This option is mutually exclusive with the option 'Remap texts'",mdxType:"InlineNote"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Binary font files"),Object(o.b)("br",null),"\nThis option defines whether or not the font files in a project, should be moved into binary files that can be loaded at runtime."),Object(o.b)(p.a,{mdxType:"FurtherReading"},Object(o.b)(d.a,{to:"../touchgfx-engine-features/texts-and-fonts",mdxType:"Link"},"Text and Fonts")),Object(o.b)("h2",{id:"simulator"},"Simulator"),Object(o.b)("p",null,"In this section, a skin can be added to the Simulator when running it. A skin can be added for both landscape and portrait orientated projects.\nThe ",Object(o.b)(u.a,{name:"X",mdxType:"Property"})," and ",Object(o.b)(u.a,{name:"Y",mdxType:"Property"})," properties determine the position of the simulator on the skin."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator.png",caption:"Simulator settings in Config View",mdxType:"Figure"}),Object(o.b)("p",null,"Below is a demonstration of a simulator running with a skin.",Object(o.b)("br",null),Object(o.b)(s.a,{text:"When a simulator runs with a skin, the standard window controls are hidden. To close the simulator press",mdxType:"InlineNote"})," ",Object(o.b)(c.a,{text:"Esc",mdxType:"Shortcut"})),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-simulator-skin.gif",caption:"Simulator running with a skin.",mdxType:"Figure"}),Object(o.b)("h2",{id:"build"},"Build"),Object(o.b)("p",null,"In this section the commands that are executed when pressing ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"main-window#run-simulator"}),"'Run Simulator'"),", ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"main-window#run-target"}),"'Run Target'")," and ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"main-window#generate-code"}),"'Generate Code'"),", can be overwritten."),Object(o.b)("p",null,"To overwrite a command, simply write any command in the text boxes. To reset a command, if it has been overwritten, press the blue 'Reset' label next to the name of the Command."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-build.png",caption:"Build settings in Config View",mdxType:"Figure"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Generate Assets Command"),Object(o.b)("br",null)),Object(o.b)("p",null,"This command is usually setup to generate text and image assets, and is executed after the TouchGFX Designer has generated the code."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Post Generate Command"),Object(o.b)("br",null),"\nThis command is usually used to update various project files. The built in ",Object(o.b)(l.a,{text:"touchgfx update_project",mdxType:"InlineCode"})," commandline tool supports updating the following project files:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Visual Studio (.vcxproj)"),Object(o.b)("li",{parentName:"ul"},"Keil (.uvprojx)"),Object(o.b)("li",{parentName:"ul"},"IAR (.ewp & .ipcf)"),Object(o.b)("li",{parentName:"ul"},"CubeIDE (.project & .cproject)"),Object(o.b)("li",{parentName:"ul"},"CubeMX (.ioc)")),Object(o.b)("p",null,"However, any command that needs to be executed after code generation can be written here."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Compile Simulator Command"),Object(o.b)("br",null),"\nThis command executes the compilation of a project for the simulator, usually by executing the Makefile generated by the TouchGFX Designer."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Run Simulator Command"),Object(o.b)("br",null),"\nThis command executes the startup of the simulator.exe."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Post Generate Target Command"),Object(o.b)("br",null),"\nThis command is usually used to update various project files mostly CubeMX (.ioc) project files."),Object(o.b)("p",null,"However, any command that needs to be executed after code generation can be written here."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Compile Target Command"),Object(o.b)("br",null),"\nThis command executes the compilation of a project for the target hardware."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Flash Target Command"),Object(o.b)("br",null),"\nThis command executes the flashing of a project to the target hardware."),Object(o.b)("h2",{id:"framework-features"},"Framework Features"),Object(o.b)("p",null,"In this section features in the framework, specifically which image formats the TextureMapper widget supports, can be enabled/disabled. This can be used for optimizing the code size a project takes up on hardware."),Object(o.b)("p",null,"The available options displayed in this section depend upon which color depth has been chosen for the project. In the image below the image formats for a 16 bit color depth TextureMapper is shown."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/config-view/designer-config-view-framework-features.png",caption:"Framework Features settings in Config View",mdxType:"Figure"}))}j.isMDXComponent=!0}}]);