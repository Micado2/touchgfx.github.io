(window.webpackJsonp=window.webpackJsonp||[]).push([[807],{1232:function(e,t,n){"use strict";var r=n(5),a=n(0),o=n.n(a),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=i},943:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return h}));var r=n(1),a=n(9),o=(n(0),n(1229)),i=n(1232),c={id:"hardware-selection-introduction",title:"Hardware Selection Introduction"},s={id:"development/hardware-selection/hardware-selection-introduction",title:"Hardware Selection Introduction",description:'<Figure imageSource="/img/development/hardware-selection/activities-selected-000.png" caption="Project activity" noShadow={true} width="600"/>\r',source:"@site/docs\\development\\hardware-selection\\hardware-selection-introduction.mdx",permalink:"/docs/next/development/hardware-selection/hardware-selection-introduction",version:"next",sidebar:"docs",previous:{title:"Development Introduction",permalink:"/docs/next/development/development-introduction"},next:{title:"Preliminary Considerations",permalink:"/docs/next/development/hardware-selection/preliminary-considerations"}},d=[],p={rightToc:d},l="wrapper";function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(l,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/activities-selected-000.png",caption:"Project activity",noShadow:!0,width:"600",mdxType:"Figure"}),Object(o.b)(i.a,{imageSource:"/img/development/hardware-selection/components-selected-000.png",caption:"Project component",noShadow:!0,width:"600",mdxType:"Figure"}),Object(o.b)("p",null,"There are many parameters to consider and evaluate when choosing the hardware platform for running a graphical user interface. This article attempts to address considerations about the MCU, display, external memories, UI performance, etc."),Object(o.b)("p",null,"It is recommended to read the section on preliminary considerations before hardware components, as there are several parameters and decisions which will impact the choice of hardware."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"preliminary-considerations"}),"Preliminary Considerations")," - contains several pointers to considerations you should take into account before moving on finding the right hardware."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"hardware-components/hardware-selection-mcu"}),"Hardware Components")," - contains information on the different components that makes up a hardware solution and what impact they have on a TouchGFX application.")))}h.isMDXComponent=!0}}]);