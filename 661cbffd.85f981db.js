(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return u}));var i=n(1),o=n(9),a=(n(0),n(250)),r=n(253),s=n(251),c=n(259),l=(n(252),n(267)),d={id:"CanvasView",title:"Canvas View"},p={id:"Development/UIDevelopment/DesignerUserGuide/CanvasView",title:"Canvas View",description:"import Link from '@docusaurus/Link';\r",source:"@site/docs\\Development\\UIDevelopment\\DesignerUserGuide\\CanvasView.mdx",permalink:"/docs/Development/UIDevelopment/DesignerUserGuide/CanvasView",sidebar:"docs",previous:{title:"Main Window",permalink:"/docs/Development/UIDevelopment/DesignerUserGuide/MainWindow"},next:{title:"Images View",permalink:"/docs/Development/UIDevelopment/DesignerUserGuide/ImagesView"}},h=[{value:"Left Side Bar",id:"left-side-bar",children:[{value:"Widgets",id:"widgets",children:[]},{value:"Screens &amp; Custom Containers",id:"screens--custom-containers",children:[]}]},{value:"Canvas",id:"canvas",children:[{value:"Widget Selection",id:"widget-selection",children:[]},{value:"Widget Positioning",id:"widget-positioning",children:[]},{value:"Widget Order Controls",id:"widget-order-controls",children:[]},{value:"Content Clipping Control",id:"content-clipping-control",children:[]},{value:"History Controls",id:"history-controls",children:[]},{value:"Zoom Controls",id:"zoom-controls",children:[]}]},{value:"Right Side Bar",id:"right-side-bar",children:[{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[]}]}],b={rightToc:h},g="wrapper";function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(g,Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Canvas is the view used for building the graphical parts of an application by providing a visual representation of the interface as it will look while running. The dynamic aspects, like animations and interactions between parts of the system, are described here."),Object(a.b)(s.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/DesignerCanvasView.png",caption:"The Canvas View of TouchGFX Designer",mdxType:"Figure"}),Object(a.b)("h2",{id:"left-side-bar"},"Left Side Bar"),Object(a.b)("p",null,"The side bar to the left contains a tab control, with navigation to ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#widgets"}),"Widgets"),", ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#screens"}),"Screens")," and ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#custom-containers"}),"Custom Containers"),"."),Object(a.b)("h3",{id:"widgets"},"Widgets"),Object(a.b)("p",null,"The Widgets tab in the left side bar contains all available widgets grouped into categories. Each category can be expanded and collapsed by pressing the chevron next to the category name."),Object(a.b)("p",null,"Clicking a widget, will add it to the canvas of the Screen or Custom Container that is currently selected and visible. A widget can also be added by dragging the widget directly to the canvas."),Object(a.b)(s.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/Widgets.png",caption:"The Widgets in the left side bar",mdxType:"Figure"}),Object(a.b)("h3",{id:"screens--custom-containers"},"Screens & Custom Containers"),Object(a.b)("p",null,"Both the Screens tab and Custom Containers tab contais a tree giving an overview of the widgets in each screen/custom container, every widget in the tree, that can contain other widgets can be collapsed by pressing the chevron next to the widgets name."),Object(a.b)("p",null,"The order of the screens, custom containers, and widgets within can be changed by dragging them below or above other screens, custom containers and widgets, the order can also be changed with the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#widget-order-controls"}),"widget order controls"),". Changing the order of widgets will determine which widgets is rendered on top of other widgets."),Object(a.b)("p",null,"Widgets that are container types, can have children added to them by dragging widget on top of them in the tree view. widgets can also be dragged from one screen to another."),Object(a.b)("p",null,"Select multiple widgets by pressing and holding CTRL while clicking widgets."),Object(a.b)("p",null,"Screens/Custom Containers can be added to the project by pressing the blue icon with a plus.\nThe Custom Containers can be added to screens and other custom containers from the Widgets tab, they can be found in their own category named 'Custom Containers'."),Object(a.b)(s.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/DesignerCanvasViewTree.gif",caption:"The Screens tree in the left side bar",mdxType:"Figure"}),Object(a.b)("h2",{id:"canvas"},"Canvas"),Object(a.b)("p",null,"The center of the view contains the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#Canvas"}),"Canvas")," that displays the view of the screen or custom container that is currently selected."),Object(a.b)("p",null,"The canvas is surrounded by various controls: ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#widget-order-controls"}),"Widget Order Controls"),", ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#content-clipping-control"}),"Content Clipping Control"),", ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#history-controls"}),"History Controls")," and ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#zoom-controls"}),"Zoom Controls")),Object(a.b)(s.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/DesignerCanvasView.gif",caption:"The Canvas in the Canvas View",mdxType:"Figure"}),Object(a.b)("h3",{id:"widget-selection"},"Widget Selection"),Object(a.b)("p",null,"As shown in the animation above, it is possible to select a widget by simply clicking it on the canvas. Multi-selection is also possible by clicking multiple widgets while holding down ",Object(a.b)(l.a,{text:"Ctrl",mdxType:"Shortcut"})," on the keyboard."),Object(a.b)("h3",{id:"widget-positioning"},"Widget Positioning"),Object(a.b)("p",null,"As shown in the animation above, it is possible to move and resize widgets by dragging their thumbs."),Object(a.b)("p",null,"It is also possible to move selected widgets by 1 pixel using the arrow keys. Holding down ",Object(a.b)(l.a,{text:"Ctrl",mdxType:"Shortcut"})," while using the arrows keys will move selected widgets by 10 pixels."),Object(a.b)("h3",{id:"widget-order-controls"},"Widget Order Controls"),Object(a.b)("p",null,"The z-order of widgets can be manipulated by the Bring Forward and Send Backwards controls, this also changes their order in the Screens or Custom Container tree."),Object(a.b)("p",null,"Bring Forward can also be triggered by pressing ",Object(a.b)(l.a,{text:"CTRL + F",mdxType:"Shortcut"})),Object(a.b)("p",null,"Send Backward can also be triggered by pressing ",Object(a.b)(l.a,{text:"CTRL + B",mdxType:"Shortcut"})),Object(a.b)(s.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/WidgetOrderControls.png",caption:"Bring Forward and Send Backwards controls in the Canvas View",mdxType:"Figure"}),Object(a.b)("h3",{id:"content-clipping-control"},"Content Clipping Control"),Object(a.b)("p",null,"In the canvas, widgets outside the borders of the Screen, Custom Container and children of container type widgets are clipped. The content clipping control toggles between clipping the widgets fully or showing them partially anyway."),Object(a.b)(s.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/ContentClippingToggleButton.png",caption:"Show/Hide Clipped Content control in the Canvas View",mdxType:"Figure"}),Object(a.b)("p",null,"In the image below a Box is placed halfway outside the borders of a screen, when the content clipping control is set to show clipped widgets, the Box will not be shown fully but instead have the part that is outside desaturated."),Object(a.b)(s.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/ClippedContent.png",caption:"Box widget appearance difference when showing and hiding clipped content",mdxType:"Figure"}),Object(a.b)("h3",{id:"history-controls"},"History Controls"),Object(a.b)("p",null,"The history of changes performed on the canvas can be undone and redone through the history controls, located at the top center of the canvas.",Object(a.b)("br",null),"Each screen and custom container maintains its own history, therefore to undo or redo a change performed on a certain screen, that specific screen has to be visible on the canvas."),Object(a.b)("p",null,"The History controls can also be triggered by pressing ",Object(a.b)(l.a,{text:"CTRL + Z",mdxType:"Shortcut"})," and ",Object(a.b)(l.a,{text:"CTRL + Y ",mdxType:"Shortcut"})),Object(a.b)(s.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/HistoryControls.png",caption:"History controls in the Canvas View",mdxType:"Figure"}),Object(a.b)("h3",{id:"zoom-controls"},"Zoom Controls"),Object(a.b)("p",null,"The zoom level of the canvas can be controlled with the zoom control in the bottom left corner of the canvas. To return to 100% zoom press the button next to the zoom slider label '1:1'."),Object(a.b)("p",null,"Zooming can also be achieved by using ",Object(a.b)(l.a,{text:"CTRL + Mouse Wheel",mdxType:"Shortcut"})),Object(a.b)(s.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/ZoomControls.png",caption:"Zoom controls in the Canvas View",mdxType:"Figure"}),Object(a.b)("h2",{id:"right-side-bar"},"Right Side Bar"),Object(a.b)("p",null,"The side bar to the right contains a tab control, with navigation to the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#properties"}),"Properties")," of the widget currently selected, and the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#interactions"}),"Interactions")," of the Screen or Custom Container that is currently viewed on the canvas."),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("p",null,"The Properties tab will show the properties of the Widget/Screen/Custom Container that is currently selected. The name of the selected component is displayed at the top of the properties list, next to the name there is a questionmark icon. Clicking this questionmark icon will expand the section, to display a text describing and a link to documentation for the component."),Object(a.b)("p",null,"Each of the sections in the properties list can be collapsed and expanded by pressing the chrevron next to the section name."),Object(a.b)(s.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/PropertiesTab.png",caption:"Properties of Box",mdxType:"Figure"}),Object(a.b)("h3",{id:"interactions"},"Interactions"),Object(a.b)("p",null,"The Interactions tab will show the interactions of the Screen or Custom Container that is currently displayed on the canvas. The questionmark at the top can be pressed to reveal a description of interactions and a link to an article."),Object(a.b)("p",null,"Interactions can be added by pressing the blue button labeled 'Add Interaction'. Each interaction can be collapsed and expanded by pressing the chevron next to the name of the interaction. Next to the chevron, a cross is located, this cross will delete the interaction when clicked."),Object(a.b)(s.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/InteractionsTab.png",caption:"Interactions of a Screen",mdxType:"Figure"}),Object(a.b)(c.a,{mdxType:"FurtherReading"},Object(a.b)("li",null,Object(a.b)(r.a,{to:"/docs/Development/UIDevelopment/DesignerUserGuide/Interactions",mdxType:"Link"},"Interactions"))))}u.isMDXComponent=!0},252:function(e,t,n){"use strict";var i=n(5),o=n(0),a=n.n(o),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return a.a.createElement("i",null,this.props.text)},t}(o.Component);t.a=r},267:function(e,t,n){"use strict";var i=n(5),o=n(0),a=n.n(o),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return a.a.createElement("code",{class:"shortcut"},this.props.text)},t}(o.Component);t.a=r}}]);