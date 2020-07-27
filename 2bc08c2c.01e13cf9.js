(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{1230:function(e,t,n){"use strict";var i=n(5),r=n(0),a=n.n(r),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(a.a.createElement("div",{class:e},a.a.createElement("div",{class:"highlight-heading"},a.a.createElement("h5",null,a.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(r.Component);t.a=o},1232:function(e,t,n){"use strict";var i=n(5),r=n(0),a=n.n(r),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?a.a.createElement("div",{class:"figure noshadow"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption)):a.a.createElement("div",{class:"figure"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption))},t}(r.Component);t.a=o},1235:function(e,t,n){"use strict";var i=n(5),r=n(0),a=n.n(r),o=n(1230),s=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return a.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:s},this.props.children)},t}(r.Component);t.a=c},1237:function(e,t,n){"use strict";var i=n(5),r=n(0),a=n.n(r),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return a.a.createElement("code",null,this.props.text)},t}(r.Component);t.a=o},315:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(1),r=n(9),a=(n(0),n(1229)),o=(n(1231),n(1232),n(1235),n(1237)),s={id:"screen-definition-and-mvp",title:"The Screen Concept"},c={id:"version-4.14/development/ui-development/software-architecture/screen-definition-and-mvp",title:"The Screen Concept",description:'In TouchGFX applications, you can have any number of "Screens". A screen in TouchGFX is a logical grouping of UI elements (widgets) and their associated business logic. A screen consists of two classes: a View class containing all the widgets that are shown on this screen, and a Presenter containing business logic for this screen.\r',source:"@site/versioned_docs\\version-4.14\\development\\ui-development\\software-architecture\\screen-definition-and-mvp.mdx",permalink:"/docs/development/ui-development/software-architecture/screen-definition-and-mvp",version:"4.14",sidebar:"version-4.14/docs",previous:{title:"Model-View-Presenter Design Pattern",permalink:"/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern"},next:{title:"Code Structure",permalink:"/docs/development/ui-development/software-architecture/code-structure"}},l=[{value:"Defining Screens",id:"defining-screens",children:[]},{value:"Currently Active Screen",id:"currently-active-screen",children:[]},{value:"Model-View-Presenter in TouchGFX",id:"model-view-presenter-in-touchgfx",children:[{value:"Model",id:"model",children:[]},{value:"View",id:"view",children:[]},{value:"Presenter",id:"presenter",children:[]}]}],h={rightToc:l},u="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(u,Object(i.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'In TouchGFX applications, you can have any number of "Screens". A screen in TouchGFX is a logical grouping of UI elements (widgets) and their associated business logic. A screen consists of two classes: a View class containing all the widgets that are shown on this screen, and a Presenter containing business logic for this screen.'),Object(a.b)("p",null,"You can choose to implement your entire application within the context of a single screen (meaning you only have one View and one Presenter), but we recommend splitting unrelated parts of your UI into different screens, for two reasons:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"TouchGFX includes a memory allocation scheme that automatically allocates the necessary RAM needed for the most RAM-consuming screen. Only this amount will be allocated, and this RAM block is reused across all screens in your application."),Object(a.b)("li",{parentName:"ol"},"Having several screens makes your UI code much easier to maintain.")),Object(a.b)("h3",{id:"defining-screens"},"Defining Screens"),Object(a.b)("p",null,"There are no exact rules as to how your application should be divided into screens, but there are certain guidelines that might assist you in deciding what screens should make up your specific application. Areas of the UI that are visually and functionally unrelated should be kept in different screens."),Object(a.b)("p",null,'If you consider a very simple thermostat application which has a main temperature readout display and a configuration menu, it would be a good idea to create a "Main Screen" for the temperature readout and a "Settings Screen" for showing the configuration menu.'),Object(a.b)("p",null,"The View for the Main Screen would contain widgets for a background image, a few text areas for showing temperature and a button for switching to the configuration menu. The View for the configuration on the other hand would probably contain widgets for showing a list of configuration options and a different background image. If the configuration menu is capable of editing many different types of settings (dates, names with keyboard, temperatures, units etc.), this screen will grow large in complexity."),Object(a.b)("p",null,"In that case it might be beneficial to further divide the configuration menu into one screen showing the overall tree of menu options, and a different screen for editing a specific value. But this is something you will learn as your project progresses."),Object(a.b)("h3",{id:"currently-active-screen"},"Currently Active Screen"),Object(a.b)("p",null,"Because of the way TouchGFX allocates memory for screens (only allocating for biggest View and biggest Presenter), only one View and one Presenter can be active at a time. So if your thermostat application is displaying the temperature readout, then the configuration menu screen is not running anywhere, and in fact is not even allocated."),Object(a.b)("p",null,'If events are received from the "backend" (all your non-UI code that does the actual work of the thermostat) or from hardware peripherals, then these events can be delegated to the currently active screen.'),Object(a.b)("p",null,"This provides a useful separation of concerns because some events will be of interest only to certain screens in your application. For instance, a received event notifying of a change in current temperature could be handled only by the main screen (which would update the text area showing current temperature), whereas the configuration screen could simply discard this event as it is of no interest since current temperature is not being displayed in this screen."),Object(a.b)("h2",{id:"model-view-presenter-in-touchgfx"},"Model-View-Presenter in TouchGFX"),Object(a.b)("p",null,"TouchGFX follows the Model-View-Presenter (MVP) design pattern as described in ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"model-view-presenter-design-pattern"}),"Model-View-Presenter Design Pattern"),". The TouchGFX screen concept ties into the overall Model-View-Presenter architecture by classes that inherits from the View and Presenter classes in TouchGFX. So when adding a new screen to your application in TouchGFX Designer it creates both a new specific View class and a Presenter class to represent that particular screen."),Object(a.b)("p",null,"The content and responsibility of the MVP classes in a TouchGFX application are as follows."),Object(a.b)("h3",{id:"model"},"Model"),Object(a.b)("p",null,"The Model class is a singleton class which is always alive and has two purposes:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Store state information for the UI. The Views and Presenters are deallocated when switching screen, so they cannot be used to store information which should be kept across screen transitions. Use the Model for this instead."),Object(a.b)("li",{parentName:"ol"},"Act as an interface towards the backend system, relaying events to and from the currently active screen.")),Object(a.b)("p",null,"The Model class is automatically setup to have a pointer to the currently active presenter. When changes occur in the Model the current active Presenter is notified of the change. This is done via methods in the ModelListener interface in the application."),Object(a.b)("p",null,"New applications generated by the Designer will automatically have a Model class ready to be used by the UI."),Object(a.b)("h3",{id:"view"},"View"),Object(a.b)("p",null,"The View class (or more specifically, a class that derives from the TouchGFX View class) contains the widgets that are shown in this view as member objects. It also contains a ",Object(a.b)(o.a,{text:"setupScreen",mdxType:"InlineCode"})," and a ",Object(a.b)(o.a,{text:"tearDownScreen",mdxType:"InlineCode"})," function, which gets automatically called when this screen is entered/exited. Typically you would configure your widgets in the ",Object(a.b)(o.a,{text:"setupScreen",mdxType:"InlineCode"})," function."),Object(a.b)("p",null,"Your View will also contain a pointer to the associated Presenter. This pointer is setup automatically by the framework. Using this pointer you can communicate UI events like button clicks to the Presenter."),Object(a.b)("h3",{id:"presenter"},"Presenter"),Object(a.b)("p",null,'Your Presenter class (again, a class that derives from the TouchGFX Presenter class) is responsible for the business logic of the currently active screen. It will receive "backend" events from the Model, and UI events from the View and decide which action to take. For instance, if an alarm event is received from the Model, the Presenter might decide to tell the View that an alarm popup dialog should be displayed.'))}d.isMDXComponent=!0}}]);