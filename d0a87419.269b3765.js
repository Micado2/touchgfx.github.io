(window.webpackJsonp=window.webpackJsonp||[]).push([[886],{1022:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return h})),a.d(t,"metadata",(function(){return g})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return f}));var n=a(1),r=a(9),i=(a(0),a(1229)),c=a(1232),o=a(1235),p=a(1240),b=a(1239),l=a(1236),d=a(1231),s=a(1237),m=a(1238),u=a(1234),h={id:"texture-mapper",title:"TextureMapper"},g={id:"development/ui-development/ui-components/images/texture-mapper",title:"TextureMapper",description:"A TextureMapper is a widget capable of drawing a transformed image, that can be freely scaled and rotated around an adjustable origin.\r",source:"@site/docs\\development\\ui-development\\ui-components\\images\\texture-mapper.mdx",permalink:"/docs/next/development/ui-development/ui-components/images/texture-mapper",version:"next",sidebar:"docs",previous:{title:"AnimatedImage",permalink:"/docs/next/development/ui-development/ui-components/images/animated-image"},next:{title:"Container",permalink:"/docs/next/development/ui-development/ui-components/containers/container"}},O=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[{value:"Origo &amp; Camera",id:"origo--camera",children:[]}]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],j={rightToc:O},x="wrapper";function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(x,Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A TextureMapper is a widget capable of drawing a transformed image, that can be freely scaled and rotated around an adjustable origin.\nPerspective impression is also achieved by applying a virtual camera, where the amount of perspective is adjustable."),Object(i.b)(b.a,{mdxType:"Note"},Object(i.b)("li",null,"This widget has a significant effect on the MCU load."),Object(i.b)("li",null,"This widget does not support 1 bit per pixel color depth.")),Object(i.b)(c.a,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/widget-appearance.gif",caption:"TextureMapper running in the simulator",mdxType:"Figure"}),Object(i.b)("h2",{id:"widget-group"},"Widget Group"),Object(i.b)("p",null,"The TextureMapper can be found in the Images widget group in TouchGFX Designer."),Object(i.b)(c.a,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/widget-group.png",caption:"TextureMapper in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"The properties for a TextureMapper in TouchGFX Designer."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Group")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(i.b)(m.a,{text:"Name is the unique identifier used in TouchGFX Designer and code",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Location")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"W",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget.",Object(i.b)("br",null),Object(i.b)(m.a,{text:"Making the widget invisible also disables interacting with the widget through the screen",mdxType:"InlineNote"}),".",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"Animation Texture Mapper",mdxType:"Property"})," specifies if the TextureMapper should be generated as an AnimationTextureMapper.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Style")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"Style",mdxType:"Property"})," specifies a predefined setup of the widget, that sets select properties to predefined values.",Object(i.b)("br",null),Object(i.b)(m.a,{text:"These styles contain images that are free to use",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Image")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"Image",mdxType:"Property"})," specifies the image that should be transformed.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"Lock Image to Center",mdxType:"Property"})," specifies if the image position should be locked to the center of the widget.",Object(i.b)("br",null),Object(i.b)(m.a,{text:"If the Texture Mapper is resized at run time, this option does not maintain a centered position for the image.",mdxType:"InlineNote"}),".",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the image to be transformed within the widget.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Angle & Scale")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"X Angle",mdxType:"Property"}),", ",Object(i.b)(p.a,{name:"Y  Angle",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"Z Angle",mdxType:"Property"})," specify the rotation transformation of the image within the widget.",Object(i.b)("br",null),Object(i.b)(m.a,{text:"Angles are in radians.",mdxType:"InlineNote"}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"Scale",mdxType:"Property"})," specifies the scale transformation of the image in the widget.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Origo")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"Lock Origo to Center",mdxType:"Property"})," specifies if the rotation point of the image is locked to the center of the widget.",Object(i.b)("br",null),Object(i.b)(m.a,{text:"If the Texture Mapper is resized at run time, this option does not maintain a centered origo position",mdxType:"InlineNote"}),".",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"X Origo",mdxType:"Property"}),", ",Object(i.b)(p.a,{name:"Y Origo",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"Z Origo",mdxType:"Property"})," specify the point at which the image within the widget be rotated and scaled.",Object(i.b)("br",null),Object(i.b)("br",null),"For more details on the intricacies of this, refer to the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#origo--camera"}),"Origo & Camera section"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Camera")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"Camera Distance",mdxType:"Property"})," specifies the distance of the virtual camera.",Object(i.b)("br",null)," ",Object(i.b)(m.a,{text:"This changes the amount of perspective when the image is rotated.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Appearance")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"Rendering Algorithm",mdxType:"Property"})," specifies the algorithm used to render the image within the widget.",Object(i.b)("br",null),Object(i.b)(m.a,{text:"The options are Nearest-neighbour and Bilinear Interpolation",mdxType:"InlineNote"}),".",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the widget.",Object(i.b)("br",null),Object(i.b)(m.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Mixins")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)(p.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(i.b)(p.a,{name:"Alpha",mdxType:"Property"})," value.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(p.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(i.b)(p.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"Y",mdxType:"Property"})," values.")))),Object(i.b)("h3",{id:"origo--camera"},"Origo & Camera"),Object(i.b)("p",null,"Origo determines the location around which the transformation of the selected image should take place. The coordinate properties ",Object(i.b)(p.a,{name:"X Origo",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"Y Origo",mdxType:"Property"})," is in relation to the width and height of the TextureMapper and not in relation to the width and height of the chosen image."),Object(i.b)("p",null,"The coordinate property ",Object(i.b)(p.a,{name:"Z Origo",mdxType:"Property"})," is in relation to the ",Object(i.b)(p.a,{name:"Camera Distance",mdxType:"Property"}),". If the ",Object(i.b)(p.a,{name:"Camera Distance",mdxType:"Property"})," is set to 1000, and the image should rotate around it's own axis the ",Object(i.b)(p.a,{name:"Z Origo",mdxType:"Property"})," should also be set to 1000."),Object(i.b)("p",null,"To lock the transformation location in the center of the TextureMapper, put a check mark in the checkbox with the label ",Object(i.b)(p.a,{name:"Lock Origo to Center",mdxType:"Property"}),". This will lock the ",Object(i.b)(p.a,{name:"X Origo",mdxType:"Property"})," and ",Object(i.b)(p.a,{name:"Y Origo",mdxType:"Property"})," properties to the center of the TextureMapper and lock the ",Object(i.b)(p.a,{name:"Z Origo",mdxType:"Property"})," to the value of the ",Object(i.b)(p.a,{name:"Camera Distance",mdxType:"Property"}),"."),Object(i.b)("p",null,"The ",Object(i.b)(p.a,{name:"Camera Distance",mdxType:"Property"})," changes the amount of perspective that is shown when the image is rotated. The closer the ",Object(i.b)(p.a,{name:"Camera Distance",mdxType:"Property"})," is, the greater the FOV (field of view) becomes, and therefore the percieved amount of perspective increases."),Object(i.b)(c.a,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/coordinate-setup.png",caption:"Coordinate system used for the origo and camera distance in Texture Mapper",noShadow:!0,mdxType:"Figure"}),Object(i.b)("h2",{id:"interactions"},"Interactions"),Object(i.b)("p",null,"The actions and triggers supported by the TextureMapper are described in the following sections."),Object(i.b)(b.a,{mdxType:"Note"},"If a rotation or scale interaction is applied to a TextureMapper, that has a duration or delay greater than zero, it will be generated as a AnimationTextureMapper."),Object(i.b)("h3",{id:"actions"},"Actions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Widget specific action")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Rotate TextureMapper")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rotate the TextureMapper around its ",Object(i.b)(p.a,{name:"Origo",mdxType:"Property"})," in x-, y- and z-axis, either relative to its current orientation or to a specific angle.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Scale TextureMapper")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Scale the TextureMapper either relative to its current size or to a specific size.")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Standard widget actions")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Move widget")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Fade widget")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Hide widget")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Show widget")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(i.b)("h3",{id:"triggers"},"Triggers"),Object(i.b)("p",null,"A TextureMapper does not emit any triggers."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"A TextureMapper heavily depends upon the MCU for scaling and rotating the image. Therefore, a TextureMapper is considered a demanding widget on most platforms."),Object(i.b)("p",null,"For more details on drawing performance, read the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"generated-code"},"Generated Code"),Object(i.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a TextureMapper."),Object(i.b)(u.a,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    interaction1Counter(0)\n{\n    textureMapper.setXY(150, 46);\n    textureMapper.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_LOGO_TOUCHGFX_LOGO_ID));\n    textureMapper.setWidth(180);\n    textureMapper.setHeight(180);\n    textureMapper.setBitmapPosition(26.000f, 26.000f);\n    textureMapper.setScale(1.000f);\n    textureMapper.setCameraDistance(1000.000f);\n    textureMapper.setOrigo(90.000f, 90.000f, 1000.000f);\n    textureMapper.setCamera(90.000f, 90.000f);\n    textureMapper.updateAngles(-0.500f, -0.500f, -0.500f);\n    textureMapper.setRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n\n    add(textureMapper);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),Object(i.b)(l.a,{mdxType:"Tip"},"You can use these functions and the others available in the TextureMapper class in user code. Remember to force a redraw by calling ",Object(i.b)(s.a,{text:"textureMapper.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(i.b)("h3",{id:"user-code"},"User Code"),Object(i.b)("p",null,"If the Texture Mapper is setup to be a AnimationTextureMapper, there are two callbacks that can be setup:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"setTextureMapperAnimationStepAction")," is invoked every time the current animations have performed a step."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"setTextureMapperAnimationEndedAction")," is invoked when all animations have ended.")),Object(i.b)("p",null,"The following two pieces of code demonstrate how to setup these two callbacks:"),Object(i.b)(u.a,{mdxType:"CodeHeader"},"Screen1View.hpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"class Screen1View\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprivate:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperStepActionCallback;\n    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperAnimationEndedCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src);\n    void textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src);\n};\n")),Object(i.b)(u.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View() :\n  textureMapperStepActionCallback(this, &Screen1View::textureMapperStepActionCallbackHandler),\n  textureMapperAnimationEndedCallback(this, &Screen1View::textureMapperAnimationEndedCallbackHandler)\n{\n  textureMapper.setTextureMapperAnimationStepAction(textureMapperStepActionCallback);\n  textureMapper.setTextureMapperAnimationEndedAction(textureMapperAnimationEndedCallback);\n  add(textureMapper);\n}\n\nvoid Screen1View::textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src)\n{\n    if (&src == &textureMapper)\n    {\n        //execute code whenever the animation running in AnimationTextureMapper steps\n    }\n}\n\nvoid Screen1View::textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src)\n{\n    if (&src == &textureMapper)\n    {\n        //execute code whenever the animation running in AnimationTextureMapper ends\n    }\n}\n")),Object(i.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(i.b)("p",null,"To further explore the TextureMapper, try creating a new application within TouchGFX Designer with one of the following UI templates:"),Object(i.b)(c.a,{imageSource:"/img/development/ui-development/ui-templates/texture-mapper-example.png",caption:"TextureMapper Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)(c.a,{imageSource:"/img/development/ui-development/ui-templates/animation-texture-mapper-example.png",caption:"Animation TextureMapper Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)(o.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,Object(i.b)(d.a,{to:"../../../../api/classes/classtouchgfx_1_1_texture_mapper",mdxType:"Link"},"API reference for the TextureMapper class")),Object(i.b)("li",null,Object(i.b)(d.a,{to:"../../../../api/classes/classtouchgfx_1_1_animation_texture_mapper",mdxType:"Link"},"API reference for the AnimationTextureMapper class"))))}f.isMDXComponent=!0},1230:function(e,t,a){"use strict";var n=a(5),r=a(0),i=a.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(i.a.createElement("div",{class:e},i.a.createElement("div",{class:"highlight-heading"},i.a.createElement("h5",null,i.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(r.Component);t.a=c},1232:function(e,t,a){"use strict";var n=a(5),r=a(0),i=a.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,a=this.props.height;return e?i.a.createElement("div",{class:"figure noshadow"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption)):i.a.createElement("div",{class:"figure"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption))},t}(r.Component);t.a=c},1234:function(e,t,a){"use strict";var n=a(5),r=a(0),i=a.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",{class:"code-header"},i.a.createElement("div",null,i.a.createElement("h5",null,this.props.children)))},t}(r.Component);t.a=c},1235:function(e,t,a){"use strict";var n=a(5),r=a(0),i=a.n(r),c=a(1230),o=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement(c.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)},t}(r.Component);t.a=p},1236:function(e,t,a){"use strict";var n=a(5),r=a(0),i=a.n(r),c=a(1230),o=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement(c.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)},t}(r.Component);t.a=p},1237:function(e,t,a){"use strict";var n=a(5),r=a(0),i=a.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement("code",null,this.props.text)},t}(r.Component);t.a=c},1238:function(e,t,a){"use strict";var n=a(5),r=a(0),i=a.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.text)},t}(r.Component);t.a=c},1239:function(e,t,a){"use strict";var n=a(5),r=a(0),i=a.n(r),c=a(1230),o=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement(c.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)},t}(r.Component);t.a=p},1240:function(e,t,a){"use strict";a(1241);var n=a(5),r=a(0),i=a.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.name)},t}(r.Component);t.a=c},1241:function(e,t,a){var n=a(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);