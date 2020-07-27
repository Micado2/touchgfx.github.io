(window.webpackJsonp=window.webpackJsonp||[]).push([[940],{1076:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return m}));var i=a(1),n=a(9),o=(a(0),a(1229)),r=a(1232),s=a(1235),l=a(1231),p={id:"examples",title:"Examples"},c={id:"version-4.13/development/ui-development/working-with-touchgfx/examples",title:"Examples",description:"To help further explore the possibilities and features of TouchGFX, multiple premade examples are made available to the user. These examples can be accessed through the [Startup Window](../designer-user-guide/startup-window) of TouchGFX Designer and all include free-to-use images, code, etc., which means that they can even be used as a base to build your own unique application from. Examples are combined with [Application Templates](../../development-introduction#application-templates-ats) to create TouchGFX applications. If you are new to TouchGFX, this can be a great starting source of inspiration and knowledge about how TouchGFX applications function.\r",source:"@site/versioned_docs\\version-4.13\\development\\ui-development\\working-with-touchgfx\\examples.mdx",permalink:"/docs/4.13/development/ui-development/working-with-touchgfx/examples",version:"4.13",sidebar:"version-4.13/docs",previous:{title:"Debugging",permalink:"/docs/4.13/development/ui-development/working-with-touchgfx/debugging"},next:{title:"Startup Window",permalink:"/docs/4.13/development/ui-development/designer-user-guide/startup-window"}},h=[{value:"UI Templates",id:"ui-templates",children:[]},{value:"Online Applications",id:"online-applications",children:[]}],u={rightToc:h},d="wrapper";function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(d,Object(i.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To help further explore the possibilities and features of TouchGFX, multiple premade examples are made available to the user. These examples can be accessed through the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"../designer-user-guide/startup-window"}),"Startup Window")," of TouchGFX Designer and all include free-to-use images, code, etc., which means that they can even be used as a base to build your own unique application from. Examples are combined with ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"../../development-introduction#application-templates-ats"}),"Application Templates")," to create TouchGFX applications. If you are new to TouchGFX, this can be a great starting source of inspiration and knowledge about how TouchGFX applications function."),Object(o.b)("p",null,"Some examples focus on single features while others implement several different functionalities found in TouchGFX. Examples are divided into two different types."),Object(o.b)("h2",{id:"ui-templates"},"UI Templates"),Object(o.b)("p",null,"UI Templates are generally smaller, more self-contained examples that mostly focus on specific features such as different widgets. UI Templates can run on any STM32 evaluation kit and the PC simulator, but for the best experience it is encouraged to create projects where the resolution of the UI Template fits the resolution of your board. Some UI Templates are also built with specific color depths in mind, which means they might not display as well on lower color depth displays."),Object(o.b)("p",null,"The UI Templates also include several demos made by the TouchGFX team which showcase more features with higher quality UI design. These can be a great place to start to get a feeling for what TouchGFX is capable of."),Object(o.b)("p",null,"To create an application using a UI Template, start by pressing the card under the 'Application Template' label to see the available Application Templates. Click whichever Application Template you want and then press 'Select'. Next, press the card under the 'UI Template' label to see the available UI Templates. Click whichever UI Template you want and then press 'Select'. Optionally, select another resolution and color depth in the drop downs. Finally, press 'Create' to create an application from the selected Application Template and UI Template. Press either 'Run Simulator' or 'Run Target' to see the application running."),Object(o.b)("p",null,"An animation of these steps can be seen below:"),Object(o.b)(r.a,{imageSource:"/img/introduction/getting-started/application-template-ui-template.gif",caption:"Creating a project using a UI template",mdxType:"Figure"}),Object(o.b)("h2",{id:"online-applications"},"Online Applications"),Object(o.b)("p",null,"Online Applications are out-of-the-box applications for specific hardware solutions and it is therefore not possible to run these on any other STM32 evaluation kit than the one it was created for (aside from the PC simulator). These examples are generally a lot larger and explore multiple different features of the TouchGFX framework and can also include sample integration with the hardware."),Object(o.b)("p",null,"To create an application using an Online Application, first access these by clicking the 'Online Applications' tab in the top of the startup window. Click the card under the 'Online Application' label to show what applications are available. Click the application you want and press 'Select'. Finish by pressing 'Create' and either press 'Run Simulator' or 'Run Target' to see the application running."),Object(o.b)("p",null,"An animation of these steps can be seen below:"),Object(o.b)(r.a,{imageSource:"/img/introduction/getting-started/online-application.gif",caption:"Creating a project using an online application",mdxType:"Figure"}),Object(o.b)(s.a,{mdxType:"FurtherReading"},"To read more about how to create applications using examples, see the ",Object(o.b)(l.a,{to:"../designer-user-guide/startup-window",mdxType:"Link"},"Startup Window section.")))}m.isMDXComponent=!0},1230:function(e,t,a){"use strict";var i=a(5),n=a(0),o=a.n(n),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(n.Component);t.a=r},1232:function(e,t,a){"use strict";var i=a(5),n=a(0),o=a.n(n),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,a=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(n.Component);t.a=r},1235:function(e,t,a){"use strict";var i=a(5),n=a(0),o=a.n(n),r=a(1230),s=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:s},this.props.children)},t}(n.Component);t.a=l}}]);