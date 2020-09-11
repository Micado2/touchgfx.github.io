(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1230:function(e,t,n){"use strict";var o=n(5),a=n(0),i=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(i.a.createElement("div",{class:e},i.a.createElement("div",{class:"highlight-heading"},i.a.createElement("h5",null,i.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(a.Component);t.a=r},1232:function(e,t,n){"use strict";var o=n(5),a=n(0),i=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?i.a.createElement("div",{class:"figure noshadow"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption)):i.a.createElement("div",{class:"figure"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=r},1243:function(e,t,n){"use strict";var o=n(5),a=n(0),i=n.n(a),r=n(1230),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return i.a.createElement(r.a,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:c},this.props.children)},t}(a.Component);t.a=s},1244:function(e,t,n){"use strict";var o=n(5),a=n(0),i=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return i.a.createElement("code",{class:"shortcut"},this.props.text)},t}(a.Component);t.a=r},305:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return g}));var o=n(1),a=n(9),i=(n(0),n(1229)),r=n(1232),c=n(1243),s=n(1244),p={id:"updating-to-a-new-touchgfx-version",title:"Updating to a new TouchGFX Version"},u={id:"version-4.14/miscellaneous/updating-to-a-new-touchgfx-version",title:"Updating to a new TouchGFX Version",description:"When a TouchGFX Designer application is created, the .touchgfx project file created will have the same version as the TouchGFX version used to create the application. But this does not mean that you are only able to use that specific version of TouchGFX to further develop your application.\r",source:"@site/versioned_docs\\version-4.14\\miscellaneous\\updating-to-a-new-touchgfx-version.mdx",permalink:"/docs/miscellaneous/updating-to-a-new-touchgfx-version",version:"4.14",sidebar:"version-4.14/docs",previous:{title:"Using Non-Memory Mapped Flash for storing images",permalink:"/docs/development/ui-development/scenarios/using-non-memory-mapped-flash"},next:{title:"Getting Help",permalink:"/docs/miscellaneous/getting-help"}},l=[{value:"Update TouchGFX Generator",id:"update-touchgfx-generator",children:[]}],h={rightToc:l},d="wrapper";function g(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(d,Object(o.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When a TouchGFX Designer application is created, the .touchgfx project file created will have the same version as the TouchGFX version used to create the application. But this does not mean that you are only able to use that specific version of TouchGFX to further develop your application."),Object(i.b)("p",null,"TouchGFX is backwards-compatible by design and in most cases it requires a very simple procedure to make an older versioned application work with a new version of TouchGFX."),Object(i.b)("p",null,"Simply open your newly installed version of TouchGFX Designer and try to open your older application either through recent applications or the Open dialog. You will be greeted with the following popup:"),Object(i.b)(r.a,{imageSource:"/img/miscellaneous/updating-to-a-new-touchgfx-version/update-popup.png",caption:"Update popup",mdxType:"Figure"}),Object(i.b)(c.a,{mdxType:"Caution"},"As stated in the popup, it is recommended to always have a backup of your application before running the updater."),Object(i.b)("p",null,"Press 'Yes' and the updater will start. After it is finished, the application will open as normal in TouchGFX Designer and you are ready to use the new version."),Object(i.b)("p",null,"In rare cases, you will have to do some manual changes to an application to make it fully updated to a new TouchGFX version. Consult the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"known-issues"}),"Known Issues section")," if you are having additional problems updating an application to a new version."),Object(i.b)("h2",{id:"update-touchgfx-generator"},"Update TouchGFX Generator"),Object(i.b)("p",null,"After installing X-Cube-TouchGFX-4.14.0 in CubeMX 6.0.0 or later by following ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"../introduction/installation#installing-touchgfx-generator-in-cubemx"}),"Installing TouchGFX Generator in CubeMX")," open the project and navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"Software Packs")," -> ",Object(i.b)("inlineCode",{parentName:"p"},"Select Components")," (or press ",Object(i.b)(s.a,{text:"Alt + U",mdxType:"Shortcut"}),")"),Object(i.b)(r.a,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx.png",caption:"Software Pack Component Selector",mdxType:"Figure"}),"In the details and warnings pane select the version to migrate to and press try. CubeMX will perform a trail migration and present the result, some refparameters are not able to be migrated to the new version and therefore will be presented as null values. Select accept to save the migration and then press OK to close the Software Pack Component Selector window.",Object(i.b)(r.a,{imageSource:"/img/miscellaneous/migrate-x-cube-touchgfx/migrate-x-cube-touchgfx-migrate-to.png",caption:"Software Pack Component Selector : Migrate Parameters for TouchGFX Generator",mdxType:"Figure"}),"Now TouchGFX Generator is migrated to the new version and the changes are saved in the .ioc file. Please validate the configuration of TouchGFX Generator before generating code with CubeMX. After generating code with CubeMX open TouchGFX Designer and validate the ui before generating code from TouchGFX Designer.",Object(i.b)(c.a,{mdxType:"Caution"},Object(i.b)("li",null,"The migration is a two step process to update TouchGFX to the new version. It requires code generation from both CubeMX and TouchGFX Designer."),Object(i.b)("li",null,"C++ code provided by TouchGFX Generator is first written to disk after the Generate Code button in CubeMX has been pressed.")))}g.isMDXComponent=!0}}]);