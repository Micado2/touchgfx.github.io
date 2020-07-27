(window.webpackJsonp=window.webpackJsonp||[]).push([[823],{1230:function(e,t,n){"use strict";var i=n(5),r=n(0),a=n.n(r),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(a.a.createElement("div",{class:e},a.a.createElement("div",{class:"highlight-heading"},a.a.createElement("h5",null,a.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(r.Component);t.a=o},1232:function(e,t,n){"use strict";var i=n(5),r=n(0),a=n.n(r),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?a.a.createElement("div",{class:"figure noshadow"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption)):a.a.createElement("div",{class:"figure"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption))},t}(r.Component);t.a=o},1236:function(e,t,n){"use strict";var i=n(5),r=n(0),a=n.n(r),o=n(1230),s=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return a.a.createElement(o.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:s},this.props.children)},t}(r.Component);t.a=c},959:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var i=n(1),r=n(9),a=(n(0),n(1229)),o=n(1232),s=(n(1236),{id:"model-view-presenter-design-pattern",title:"Model-View-Presenter Design Pattern"}),c={id:"development/ui-development/software-architecture/model-view-presenter-design-pattern",title:"Model-View-Presenter Design Pattern",description:"TouchGFX user interfaces follow an architectural pattern known as Model-View-Presenter (MVP) which is a derivation of the Model-View-Controller (MVC) pattern. Both of them are widely used for building user interface applications.\r",source:"@site/docs\\development\\ui-development\\software-architecture\\model-view-presenter-design-pattern.mdx",permalink:"/docs/next/development/ui-development/software-architecture/model-view-presenter-design-pattern",version:"next",sidebar:"docs",previous:{title:"UI Development Introduction",permalink:"/docs/next/development/ui-development/ui-development-introduction"},next:{title:"The Screen Concept",permalink:"/docs/next/development/ui-development/software-architecture/screen-definition-and-mvp"}},p=[],l={rightToc:p},h="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(h,Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"TouchGFX user interfaces follow an architectural pattern known as Model-View-Presenter (MVP) which is a derivation of the Model-View-Controller (MVC) pattern. Both of them are widely used for building user interface applications."),Object(a.b)("p",null,"The main benifits of the MVP pattern are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Separation of Concerns"),": Dividing your code into separate parts, each having their own responsibility. This makes the code simpler, more reusable and easier to maintain."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Unit Testing"),": Since the logic (the presenter) of the UI is separated from the visual layer (the view) it is much easier to test these parts in isolation.")),Object(a.b)("p",null,"In MVP the three classes are defined as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("em",{parentName:"li"},"model")," is an interface defining the data to be displayed or otherwise acted upon in the user interface."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("em",{parentName:"li"},"view")," is a passive interface that displays data (from the model) and routes user commands (events) to the presenter to act upon that data."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("em",{parentName:"li"},"presenter")," acts upon the model and the view. It retrieves data from repositories (the model), and formats it for display in the view.")),Object(a.b)(o.a,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp.png",caption:"Model-View-Presenter Design Pattern",noShadow:!0,mdxType:"Figure"}),Object(a.b)("p",null,"In TouchGFX the communication with the non-UI part of the application, here called the backend system, is done from the Model class. The backend system is a software component that both receives events from the UI and feeds events into the UI, such as new measurements from sensors. The backend system can run as a separate task on the same MCU, on a separate processor, a cloud module or something else. From the perspective of TouchGFX, this does not really matter, as long as it is a component that it is able to communicate with."),Object(a.b)("p",null,"The specific communication protocol used is not managed by TouchGFX. It simply supplies a function that is called once each tick of TouchGFX, in which the needed communication can be handled. Read more on this subject in ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../touchgfx-engine-features/backend-communication"}),"Backend Communication"),"."),Object(a.b)(o.a,{imageSource:"/img/basic-concepts/software-architecture-mvp/mvp-2.png",caption:"Model-View-Presenter and external communication",noShadow:!0,mdxType:"Figure"}),Object(a.b)("p",null,"For more concrete details on how MVP is implemented and used in TouchGFX UI development see the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"code-structure"}),"Code Structure")," section."))}d.isMDXComponent=!0}}]);