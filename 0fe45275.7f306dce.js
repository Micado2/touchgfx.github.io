(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1232:function(e,t,n){"use strict";var i=n(5),a=n(0),o=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=r},1238:function(e,t,n){"use strict";var i=n(5),a=n(0),o=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return o.a.createElement("i",null,this.props.text)},t}(a.Component);t.a=r},1244:function(e,t,n){"use strict";var i=n(5),a=n(0),o=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return o.a.createElement("code",{class:"shortcut"},this.props.text)},t}(a.Component);t.a=r},206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var i=n(1),a=n(9),o=(n(0),n(1229)),r=n(1232),d=n(1238),c=n(1244),l={id:"main-window",title:"Main Window"},m={id:"version-4.13/development/ui-development/designer-user-guide/main-window",title:"Main Window",description:"The Main Window of TouchGFX Designer consists of a [Navigation Bar](#navigation-bar), [Command Buttons](#commands), [Notification Bar](#notification-bar), and [Detailed log](#detailed-log).\r",source:"@site/versioned_docs\\version-4.13\\development\\ui-development\\designer-user-guide\\main-window.mdx",permalink:"/docs/4.13/development/ui-development/designer-user-guide/main-window",version:"4.13",sidebar:"version-4.13/docs",previous:{title:"File Menu",permalink:"/docs/4.13/development/ui-development/designer-user-guide/file-menu"},next:{title:"Canvas View",permalink:"/docs/4.13/development/ui-development/designer-user-guide/canvas-view"}},s=[{value:"Navigation Bar",id:"navigation-bar",children:[]},{value:"Commands",id:"commands",children:[{value:"Run Simulator",id:"run-simulator",children:[]},{value:"Run Target",id:"run-target",children:[]},{value:"Generate Code",id:"generate-code",children:[]}]},{value:"Notification Bar",id:"notification-bar",children:[]},{value:"Detailed Log",id:"detailed-log",children:[]},{value:"Browse Code",id:"browse-code",children:[]}],u={rightToc:s},b="wrapper";function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(b,Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Main Window of TouchGFX Designer consists of a ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#navigation-bar"}),"Navigation Bar"),", ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#commands"}),"Command Buttons"),", ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#notification-bar"}),"Notification Bar"),", and ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#detailed-log"}),"Detailed log"),".\nThe Main Window forms a frame around the 'View' ",Object(o.b)(d.a,{text:"(The 'View' area, is the area that has been blurred in the image below)",mdxType:"InlineNote"})),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window.png",caption:"Main window of TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("h2",{id:"navigation-bar"},"Navigation Bar"),Object(o.b)("p",null,"In TouchGFX Designer, navigation is done through the Navigation Bar (see image below), here the View can be changed to one of the following views:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"canvas-view"}),"Canvas")," used for drag and drop application building."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"images-view"}),"Images")," used for management of the images used in a project."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"texts-view"}),"Texts")," used for management of texts and typographies in a project."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"config-view"}),"Config")," used for configuration of various settings for a project.")),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-navigation.png",caption:"Navigation bar in TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("h2",{id:"commands"},"Commands"),Object(o.b)("p",null,"In the Commands section of TouchGFX Designer three buttons can be found: 'Run Simulator', 'Run Target' and 'Generate Code'. ",Object(o.b)(d.a,{text:"(See image below).",mdxType:"InlineNote"}),"\nThese buttons each execute a combination of commands."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-actions.png",caption:"Command buttons in TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("p",null,"The commands these buttons execute can be overwritten in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"config-view#build"}),"Build")," section in Config."),Object(o.b)("h3",{id:"run-simulator"},"Run Simulator"),Object(o.b)("p",null,"The Run Simulator command triggers a complete code generation, executes following commands:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Generate Assets Command"),Object(o.b)("li",{parentName:"ul"},"Post Generate Command"),Object(o.b)("li",{parentName:"ul"},"Compile Simulator Command"),Object(o.b)("li",{parentName:"ul"},"Run Simulator command")),Object(o.b)("p",null,"The Run Simulator command can also be triggered by pressing ",Object(o.b)(c.a,{text:"F5",mdxType:"Shortcut"})),Object(o.b)("h3",{id:"run-target"},"Run Target"),Object(o.b)("p",null,"The Run Target command triggers a complete code generation, executes following commands:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Generate Assets Command"),Object(o.b)("li",{parentName:"ul"},"Post Generate Command 'Post"),Object(o.b)("li",{parentName:"ul"},"Generate Target Command"),Object(o.b)("li",{parentName:"ul"},"Compile Target Command"),Object(o.b)("li",{parentName:"ul"},"Flash Target command")),Object(o.b)("p",null,"The Run Target command can also be triggered by pressing ",Object(o.b)(c.a,{text:"F6",mdxType:"Shortcut"})),Object(o.b)("h3",{id:"generate-code"},"Generate Code"),Object(o.b)("p",null,"The Generate Code command triggers a complete code generation and executes following commands:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Generate Assets Command"),Object(o.b)("li",{parentName:"ul"},"Post Generate Command"),Object(o.b)("li",{parentName:"ul"},"Post Generate Target Command")),Object(o.b)("p",null,"The Generate Code command can also be triggered by pressing ",Object(o.b)(c.a,{text:"F7",mdxType:"Shortcut"})),Object(o.b)("h2",{id:"notification-bar"},"Notification Bar"),Object(o.b)("p",null,"The Notification Bar at the bottom of the Main Window, shows the status of the current command being run. If a command fails, an error icon will be displayed along with the command that failed.\nCommands that succeed will be cleared from the Notification Bar, whereas commands that fail will continue to be displayed indefinitely."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-notification-bar.gif",caption:"Notification bar in TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("h2",{id:"detailed-log"},"Detailed Log"),Object(o.b)("p",null,"The Detailed Log opens a window showing the full log of the last command that was run by the designer. The output of a command will stream into this window ",Object(o.b)(d.a,{text:"(See GIF below)",mdxType:"InlineNote"}),", the window can also be undocked/docked from the Main Window, by pressing the undock/dock icon in the top right corner of the Detailed Log window."),Object(o.b)("p",null,"The Detailed Log window can also be opened with ",Object(o.b)(c.a,{text:"ALT + L",mdxType:"Shortcut"})),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-detailed-log.gif",caption:"Detailed Log TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("h2",{id:"browse-code"},"Browse Code"),Object(o.b)("p",null,"The Browse Code button allows for easy access to the directory of the project by opening the directory in a new File Explorer window."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/designer-user-guide/main-window/designer-main-window-browse-code-and-detailed-log.png",caption:"Browse Code and Detailed Log in TouchGFX Designer",mdxType:"Figure"}))}p.isMDXComponent=!0}}]);