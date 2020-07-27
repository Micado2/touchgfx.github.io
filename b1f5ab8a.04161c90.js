(window.webpackJsonp=window.webpackJsonp||[]).push([[758],{1230:function(e,t,n){"use strict";var i=n(5),o=n(0),a=n.n(o),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(a.a.createElement("div",{class:e},a.a.createElement("div",{class:"highlight-heading"},a.a.createElement("h5",null,a.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(o.Component);t.a=r},1232:function(e,t,n){"use strict";var i=n(5),o=n(0),a=n.n(o),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?a.a.createElement("div",{class:"figure noshadow"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption)):a.a.createElement("div",{class:"figure"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption))},t}(o.Component);t.a=r},1235:function(e,t,n){"use strict";var i=n(5),o=n(0),a=n.n(o),r=n(1230),s=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return a.a.createElement(r.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:s},this.props.children)},t}(o.Component);t.a=c},894:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return g}));var i=n(1),o=n(9),a=(n(0),n(1229)),r=n(1232),s=n(1235),c=n(1231),h={id:"widgets-and-containers",title:"Widgets and Containers"},d={id:"development/ui-development/working-with-touchgfx/widgets-and-containers",title:"Widgets and Containers",description:"This section of the documentation will go over two of the most fundamental concepts of building a TouchGFX applications: widgets and containers. These are two of the building blocks you will be using throughout the development of your UI. Both include premade components supplied with TouchGFX, while also being open-ended enough to support the creation of custom implementations.\r",source:"@site/docs\\development\\ui-development\\working-with-touchgfx\\widgets-and-containers.mdx",permalink:"/docs/next/development/ui-development/working-with-touchgfx/widgets-and-containers",version:"next",sidebar:"docs",previous:{title:"Using IDEs with TouchGFX",permalink:"/docs/next/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx"},next:{title:"Simulator",permalink:"/docs/next/development/ui-development/working-with-touchgfx/simulator"}},u=[{value:"Widgets",id:"widgets",children:[]},{value:"Containers",id:"containers",children:[]}],p={rightToc:u},l="wrapper";function g(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(l,Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section of the documentation will go over two of the most fundamental concepts of building a TouchGFX applications: widgets and containers. These are two of the building blocks you will be using throughout the development of your UI. Both include premade components supplied with TouchGFX, while also being open-ended enough to support the creation of custom implementations."),Object(a.b)("h2",{id:"widgets"},"Widgets"),Object(a.b)("p",null,"TouchGFX and the TouchGFX Designer tool supplies numerous standard widgets which users can freely use to build their UI, such a  ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../ui-components/miscellaneous/text-area"}),"TextArea"),", ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../ui-components/buttons/button"}),"Button")," and ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../ui-components/images/texture-mapper"}),"TextureMapper"),". But on a fundamental level, a widget in TouchGFX is simply an abstract definition of something that can be drawn on the screen and can be interacted with."),Object(a.b)(r.a,{imageSource:"/img/development/ui-development/ui-components/button/widget-appearance.png",caption:"A Button widget with an Image widget as background",mdxType:"Figure"}),Object(a.b)("p",null,"Using TouchGFX Designer, users can add any widgets they want to their screens and customize it how they want with the supplied properties specific to each widget. Widgets can also be grouped by using the different types of containers that TouchGFX also supplies."),Object(a.b)("p",null,"You can also add widgets in user code if you want by using the ",Object(a.b)("inlineCode",{parentName:"p"},"add(widget_instance_name);")," function or adding it to a container by using the containers add function e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"myContainer.add(widget_instance_name);"),". The order in which you add the widgets will determine the z-order. The widget added last will appear front-most on the screen."),Object(a.b)("p",null,"The coordinates of a widget are always relative to its parent node which is either the root container (the screen) or a container."),Object(a.b)(s.a,{mdxType:"FurtherReading"},"You can create your own widgets to meet any specific need you might have. Read more on this in the ",Object(a.b)(c.a,{to:"../touchgfx-engine-features/custom-widgets",mdxType:"Link"},"Custom Widgets section"),"."),Object(a.b)("h2",{id:"containers"},"Containers"),Object(a.b)("p",null,"A container is a component in TouchGFX that can contain child nodes, such as widgets and other containers."),Object(a.b)("p",null,"In TouchGFX Designer, containers are found under the Containers category in the Widgets tab and adding widgets to a containers is done by dragging widgets into the container in the tree view."),Object(a.b)("p",null,"The z-order of children is determined by the order in which children are added to the container - the child added last will appear front-most on the screen."),Object(a.b)("p",null,"Since the position of widgets in TouchGFX is defined relative to their parents, changing the position of a parent container will also move the children accordingly."),Object(a.b)("p",null,"Containers act as viewports, meaning that only the parts of the children that intersect with the geometry of the container will be visible."),Object(a.b)("p",null,"In the animation below, you can see how the viewport aspect of containers work. First we see the outline of the container of which the button is a child:"),Object(a.b)(r.a,{imageSource:"/img/development/ui-development/working-with-touchgfx/widgets-and-containers/viewport.gif",caption:"A Container acting as a viewport",mdxType:"Figure"}),Object(a.b)(s.a,{mdxType:"FurtherReading"},"You can create your own container to meet any specific need you might have. Read more on this in the ",Object(a.b)(c.a,{to:"../touchgfx-engine-features/custom-containers",mdxType:"Link"},"Custom Containers section"),"."))}g.isMDXComponent=!0}}]);