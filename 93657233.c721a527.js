(window.webpackJsonp=window.webpackJsonp||[]).push([[623],{1230:function(e,t,n){"use strict";var i=n(5),r=n(0),o=n.n(r),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(r.Component);t.a=a},1232:function(e,t,n){"use strict";var i=n(5),r=n(0),o=n.n(r),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(r.Component);t.a=a},1238:function(e,t,n){"use strict";var i=n(5),r=n(0),o=n.n(r),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return o.a.createElement("i",null,this.props.text)},t}(r.Component);t.a=a},1243:function(e,t,n){"use strict";var i=n(5),r=n(0),o=n.n(r),a=n(1230),l=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return o.a.createElement(a.a,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:l},this.props.children)},t}(r.Component);t.a=c},1244:function(e,t,n){"use strict";var i=n(5),r=n(0),o=n.n(r),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return o.a.createElement("code",{class:"shortcut"},this.props.text)},t}(r.Component);t.a=a},760:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return h}));var i=n(1),r=n(9),o=(n(0),n(1229)),a=n(1243),l=n(1232),c=(n(1238),n(1244),{id:"file-menu",title:"File Menu"}),p={id:"version-4.13/development/ui-development/designer-user-guide/file-menu",title:"File Menu",description:"The File Menu of TouchGFX Designer consists of a [File](#file)-, [Edit](#edit)- and [Help](#help) menu item.\r",source:"@site/versioned_docs\\version-4.13\\development\\ui-development\\designer-user-guide\\file-menu.mdx",permalink:"/docs/4.13/development/ui-development/designer-user-guide/file-menu",version:"4.13",sidebar:"version-4.13/docs",previous:{title:"Startup Window",permalink:"/docs/4.13/development/ui-development/designer-user-guide/startup-window"},next:{title:"Main Window",permalink:"/docs/4.13/development/ui-development/designer-user-guide/main-window"}},u=[{value:"File",id:"file",children:[]},{value:"Edit",id:"edit",children:[]},{value:"Help",id:"help",children:[]}],s={rightToc:u},b="wrapper";function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(b,Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The File Menu of TouchGFX Designer consists of a ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#file"}),"File"),"-, ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#edit"}),"Edit"),"- and ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"#help"}),"Help")," menu item."),Object(o.b)("h2",{id:"file"},"File"),Object(o.b)(l.a,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-file.png",caption:"File menu item in File Menu",mdxType:"Figure"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"New"),Object(o.b)("br",null),"\nClicking the New button, will open the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"startup-window"}),"Startup Window"),", where a new project can be created."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Open"),Object(o.b)("br",null),"\nClicking the Open button, will open a file explorer, allowing for navigation to and loading of a TouchGFX Designer project file (.touchgfx)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Save"),Object(o.b)("br",null),"\nClicking the Save button, will save the project that is currently open, into its TouchGFX Designer project.",Object(o.b)("br",null),"\nThe project is also saved when running the simulator, flashing to target and generating code."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Recent"),Object(o.b)("br",null),"\nHovering/clicking the Recent button, will reveal the projects that have most recently been created, opened or modified, clicking any of these will load that project."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Exit"),Object(o.b)("br",null),"\nClicking the Exit button, will shutdown the TouchGFX Designer."),Object(o.b)("h2",{id:"edit"},"Edit"),Object(o.b)(l.a,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-edit.png",caption:"Edit menu item in File Menu",mdxType:"Figure"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Undo"),Object(o.b)("br",null),"\nClicking the Undo button, will undo changes made in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"canvas-view"}),"Canvas View"),". This button may be grayed out if there are no changes to undo, or the Canvas View is not currently selected."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Redo"),Object(o.b)("br",null),"\nClicking the Redo button, will redo changes made in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"canvas-view"}),"Canvas View"),". This button may be grayed out if there are no changes to redo, or the Canvas View is not currently selected."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Select All"),Object(o.b)("br",null),"\nClicking the Select All button, will select all widgets added to the Screen or Custom Container that is currently visible in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"canvas-view"}),"Canvas View"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Copy"),Object(o.b)("br",null),"\nClicking the Copy button, will add the Widget, Screen or Custom Container that is currently selected in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"canvas-view"}),"Canvas View"),", to the copy/paste buffer."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Paste"),Object(o.b)("br",null),"\nClicking the Paste button, will paste the Widget, Screen or Custom Container that is currently in the copy/paste buffer. Paste is not available if no object has been copied."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Delete"),Object(o.b)("br",null),"\nClicking the Delete button, will delete the Widget, Screen or Custom Container that is currently selected in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"canvas-view"}),"Canvas View"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Import GUI"),Object(o.b)("br",null),"\nClicking the Import Gui button, will open the Import GUI window."),Object(o.b)(l.a,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-import-gui.png",caption:"Import UI window in TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("p",null,"Here a UI can be imported into the project that is currently open. A UI can be chosen from the Examples and Demo's provided by STMicroelectronics, or by clicking 'Browse' allowing for selection of a TouchGFX Designer project (.touchgfx) to be imported into the current project."),Object(o.b)(a.a,{mdxType:"Caution"},"Importing a UI will overwrite the UI that is already present in a project"),Object(o.b)("h2",{id:"help"},"Help"),Object(o.b)(l.a,{imageSource:"/img/development/ui-development/designer-user-guide/file-menu/designer-file-menu-help.png",caption:"Help menu item in File Menu",mdxType:"Figure"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Help Center"),Object(o.b)("br",null),"\nClicking the Help Center button, will open support.touchgfx.com in your operating systems default browser."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"About"),Object(o.b)("br",null),"\nClicking the About button, will open a window containing the Software License Agreement."))}h.isMDXComponent=!0}}]);