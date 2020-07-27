(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{1230:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(i.Component);t.a=r},1232:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=r},1234:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{class:"code-header"},o.a.createElement("div",null,o.a.createElement("h5",null,this.props.children)))},t}(i.Component);t.a=r},1235:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=n(1230),d=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:d},this.props.children)},t}(i.Component);t.a=c},1236:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=n(1230),d=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:d},this.props.children)},t}(i.Component);t.a=c},1237:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("code",null,this.props.text)},t}(i.Component);t.a=r},1242:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=n(1230),d=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:d},this.props.children)},t}(i.Component);t.a=c},1243:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=n(1230),d=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:d},this.props.children)},t}(i.Component);t.a=c},415:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return g})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return y}));var a=n(1),i=n(9),o=(n(0),n(1229)),r=n(1232),d=n(1243),c=n(1236),s=n(1242),l=n(1235),h=n(1237),u=n(1231),p=n(1234),g={id:"custom-widgets",title:"Custom Widgets"},b={id:"development/ui-development/touchgfx-engine-features/custom-widgets",title:"Custom Widgets",description:"When creating applications you may need widgets that are not part of the TouchGFX distribution.\r",source:"@site/docs\\development\\ui-development\\touchgfx-engine-features\\custom-widgets.mdx",permalink:"/docs/next/development/ui-development/touchgfx-engine-features/custom-widgets",version:"next",sidebar:"docs",previous:{title:"Caching Bitmaps",permalink:"/docs/next/development/ui-development/touchgfx-engine-features/caching-bitmaps"},next:{title:"Canvas Widgets",permalink:"/docs/next/development/ui-development/touchgfx-engine-features/canvas-widgets"}},m=[{value:"When to use the custom widget approach",id:"when-to-use-the-custom-widget-approach",children:[]},{value:"In TouchGFX Designer",id:"in-touchgfx-designer",children:[]},{value:"In code",id:"in-code",children:[{value:"Your own custom widget",id:"your-own-custom-widget",children:[]},{value:"Partial drawing",id:"partial-drawing",children:[]},{value:"Solid area",id:"solid-area",children:[]},{value:"Example source code",id:"example-source-code",children:[]}]},{value:"Modifying standard widgets/containers",id:"modifying-standard-widgetscontainers",children:[]}],w={rightToc:m},f="wrapper";function y(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(f,Object(a.a)({},w,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When creating applications you may need widgets that are not part of the TouchGFX distribution.\nTouchGFX\xa0have a few ways in which you can create your own graphical elements. The simplest way is to use\xa0the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"custom-containers"}),"Custom Container approach"),", where you combine already existing widgets into your own. This article, however, deals with a more advanced approach where you can essentially create a widget that has full control of the framebuffer and thus is able to draw precisely what you want."),Object(o.b)("h2",{id:"when-to-use-the-custom-widget-approach"},"When to use the custom widget approach"),Object(o.b)("p",null,"Creating custom widgets is not the most typical way to create your own widget. The custom container approach is preferable if it suits your needs, but sometimes this approach is not enough. When you need full control of the framebuffer you need to\xa0use the custom widget approach."),Object(o.b)("p",null,"A few examples of widgets that could and should be created using the custom widget approach are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A sepia filter"),Object(o.b)("li",{parentName:"ul"},"A mandelbrot fractal widget"),Object(o.b)("li",{parentName:"ul"},"A widget that shows data from a file, for example a gif animation.")),Object(o.b)("h2",{id:"in-touchgfx-designer"},"In TouchGFX Designer"),Object(o.b)("p",null,"TouchGFX Designer does not currently support the creation of custom widgets. As a result, you will need to write the code for the custom widget manually (refer to the remainder of this article on how to\xa0do this) and then insert the widget in the user code portion of your View."),Object(o.b)("h2",{id:"in-code"},"In code"),Object(o.b)("p",null,"You\xa0create your own custom widget by extending the ",Object(o.b)("inlineCode",{parentName:"p"},"Widget")," class. Doing this requires\xa0a bit more effort on the user's side, but will also give full control of all pixels drawn by the widget.\nYour custom widget will not necessarily utilize any existing widgets but instead define how it should be drawn by specifying colors of pixels. The custom widget approach will in general also have a smaller memory footprint, which in some cases is of great importance."),Object(o.b)("p",null,"One example of a custom widget is a QR code widget. This particular widget is actually already implemented (located on our\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/draupnergraphics/touchgfx-open-repository/tree/master/widgets/QRCode"}),"GitHub"),"), but it makes for a good example, so we will walk through how to create it in the following section. In this example, a QR code widget is an NxN\xa0matrix of black and white pixels. The size of the widget and the color of each pixel will be determined at run time and depend on the information in a QR\xa0code data object."),Object(o.b)("p",null,"Here are two examples of how a QR\xa0code widget might look:"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-examples.png",caption:"QR code widget examples",noShadow:!0,mdxType:"Figure"}),Object(o.b)(d.a,{mdxType:"Caution"},"It is possible to create the qr code widget with the custom container approach by having n*n black or white boxes as children of the container. However, this will take up a lot of memory, and will probably not be as efficient or flexible."),Object(o.b)(c.a,{mdxType:"Tip"},"The standard ",Object(o.b)(h.a,{text:"touchgfx::Button",mdxType:"InlineCode"})," (supplied with the framework) is created as a custom widget, not a custom container. This saves memory per button on your screen."),Object(o.b)("h3",{id:"your-own-custom-widget"},"Your own custom widget"),Object(o.b)("p",null,"In order to create your widget that extends the ",Object(o.b)("inlineCode",{parentName:"p"},"Widget")," class, you need to describe two things."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The way your widget is drawn"),Object(o.b)("li",{parentName:"ul"},"The part of your widget that is solid")),Object(o.b)("h3",{id:"partial-drawing"},"Partial drawing"),Object(o.b)("p",null,"Any widget, and therefore also your custom widget, needs to support partial drawing. This means that your widget should be able to draw only a part of itself."),Object(o.b)("p",null,"This is due to two points. It is often not necessary to redraw the entire screen but only parts of it. The algorithms of TouchGFX might split up the drawing of a screen into multiple partial drawings to minimize the global number of pixels drawn. This partial drawing of a screen, might then ask a widget to only draw itself partially."),Object(o.b)("p",null,"As an example our QR code widget needs to be able to support drawing only the highlighted part of itself."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-partial-drawing.png",caption:"QR code widget partial drawing",noShadow:!0,mdxType:"Figure"}),Object(o.b)("p",null,"The way to do this in your code is by overriding the ",Object(o.b)("inlineCode",{parentName:"p"},"draw")," method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"virtual void draw(const touchgfx::Rect& invalidatedArea) const\n{\n    //run through the pixels of the invalidated area\n    //draw a black pixel if the qr data object has a value at this position\n    //draw a white pixel otherwise\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"invalidatedArea")," is the part of the widget that needs to be updated. In our QR code example the invalidated area is the highlighted area. The area is expressed in coordinates relative to the top left corner of the widget."),Object(o.b)(d.a,{mdxType:"Caution"},"It is the responsibility of the widget to draw inside the invalidated area. If you draw outside the invalidated area you will not get overall correct behaviour of your screens."),Object(o.b)(c.a,{mdxType:"Tip"},"The ",Object(o.b)(h.a,{text:"draw",mdxType:"InlineCode"})," method is ",Object(o.b)(h.a,{text:"const",mdxType:"InlineCode"})," because the optimized drawing algorithm might split up the drawing of a widget into multiple calls to draw. The ",Object(o.b)(h.a,{text:"const",mdxType:"InlineCode"})," assures that the widget is not moved, updated etc. in between these multiple ",Object(o.b)(h.a,{text:"draw",mdxType:"InlineCode"})," executions."),Object(o.b)("h3",{id:"solid-area"},"Solid area"),Object(o.b)("p",null,"Furthermore, a widget needs to be able to report how large a portion of itself is solid. Solid means that you can not see the things that are behind it on the screen. For instance, a standard red box is completely solid, whereas an image with an alpha value of 50% is completely non solid; you can see everything behind it."),Object(o.b)("p",null,"A solid widget will enable TouchGFX to speed up the drawing process. Since we do not have to draw the widgets below the solid widget, fewer pixels have to be drawn."),Object(o.b)("p",null,"To report the solid area in your code, override the ",Object(o.b)("inlineCode",{parentName:"p"},"getSolidRect")," method."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const;\n")),Object(o.b)("p",null,"Our QR code widget will be completely solid. You will not be able to see anything behind the black and white pixels. Therefore, we let the method return a rectangle the full size of the widget:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n")),Object(o.b)("h3",{id:"example-source-code"},"Example source code"),Object(o.b)("p",null,"We end up with an application and a widget looking like this - depending on the data supplied:"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/touchgfx-engine-features/qr-screenshot.png",caption:"QR code widget screenshot",noShadow:!0,mdxType:"Figure"}),Object(o.b)("p",null,"The complete code of the widget is shown below:"),Object(o.b)(p.a,{mdxType:"CodeHeader"},"gui/include/gui/common/QRCodeWidget.hpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"\n#ifndef QR_CODE_WIDGET_HPP\n#define QR_CODE_WIDGET_HPP\n\n#include <touchgfx/widgets/Widget.hpp>\n\nclass QRCodeWidget : public touchgfx::Widget\n{\npublic:\n    QRCodeWidget();\n\n    virtual void draw(const touchgfx::Rect& invalidatedArea) const;\n    virtual touchgfx::Rect getSolidRect() const;\n\n    void setQRCodeData(QRCodeData* data);\n    void setScale(uint8_t s);\n\nprivate:\n    void updateSize();\n\n    QRCodeData* data;\n    uint8_t scale;\n};\n#endif\n")),Object(o.b)("p",null,"In the header file, we define the widget as an extension of the ",Object(o.b)("inlineCode",{parentName:"p"},"touchgfx::Widget")," class. We override the ",Object(o.b)("inlineCode",{parentName:"p"},"draw")," and ",Object(o.b)("inlineCode",{parentName:"p"},"getSolidRect")," methods to define how our widget is drawn.\nWe declare methods for setting the data of the QR code and setting the scaling factor of the QR code."),Object(o.b)(p.a,{mdxType:"CodeHeader"},"gui/src/common/QRCodeWidget.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/QRCodeWidget.hpp>\n\nQRCodeWidget::QRCodeWidget() :\n    data(0),\n    scale(1)\n{\n}\n\nvoid QRCodeWidget::draw(const touchgfx::Rect& invalidatedArea) const\n{\n    if (!data)\n    {\n        return;\n    }\n\n    touchgfx::Rect absolute = getAbsoluteRect();\n\n    uint16_t* framebuffer = touchgfx::HAL::getInstance()->lockFrameBuffer();\n\n    for (int y = invalidatedArea.y; y < invalidatedArea.bottom(); y++)\n    {\n        for (int x = invalidatedArea.x; x < invalidatedArea.right(); x++)\n        {\n            framebuffer[absolute.x + x + (absolute.y + y) * touchgfx::HAL::DISPLAY_WIDTH] =\n              data->at(x / scale, y / scale) ? 0x0000 : 0xffff;\n        }\n    }\n\n    touchgfx::HAL::getInstance()->unlockFrameBuffer();\n}\n\ntouchgfx::Rect QRCodeWidget::getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n\nvoid QRCodeWidget::setQRCodeData(QRCodeData* qrCode)\n{\n    data = qrCode;\n    updateSize();\n}\n\nvoid QRCodeWidget::setScale(uint8_t s)\n{\n    scale = s;\n    updateSize();\n}\n\nvoid QRCodeWidget::updateSize()\n{\n    if (data)\n    {\n        setWidth(data->getSize() * scale);\n        setHeight(data->getSize() * scale);\n    }\n}\n")),Object(o.b)("p",null,"The source file defines the ",Object(o.b)("inlineCode",{parentName:"p"},"draw")," method. This method steps through each of the pixels in the invalidated area and determines the color of the framebuffer based on the contents of the data object and the scaling factor."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"getSolidRect")," method reports the widget as completely solid."),Object(o.b)(d.a,{mdxType:"Caution"},"Note that we locked and unlocked the framebuffer as part of our ",Object(o.b)(h.a,{text:"draw",mdxType:"InlineCode"})," method. This is to make sure that the DMA is done drawing when we start drawing."),Object(o.b)("p",null,"The code also uses a small class/interface to access the data of the QR code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"class QRCodeData\n{\npublic:\n    uint8_t getSize();\n    bool at(uint8_t x, uint8_t y);\n};\n")),Object(o.b)(l.a,{mdxType:"FurtherReading"},"Check out the ",Object(o.b)(u.a,{to:"https://github.com/draupnergraphics/touchgfx-open-repository/tree/master/widgets/QRCode",target:"_blank",mdxType:"Link"},"QRCode")," and ",Object(o.b)(u.a,{to:"https://github.com/draupnergraphics/touchgfx-open-repository/tree/master/widgets/Lens",target:"_blank",mdxType:"Link"},"Lens")," widgets at ",Object(o.b)(u.a,{to:"https://github.com/draupnergraphics/touchgfx-open-repository/",target:"_blank",mdxType:"Link"},"GitHub"),"."),Object(o.b)(s.a,{mdxType:"Try"},Object(o.b)("li",null,"Modify the qr code widget such that white pixels are completely transparent."),Object(o.b)("li",null,"Create a custom widget that displays a sepia filter, a mandelbrot fractal, a gif image or something else and send it our way or\xa0put it on GitHub your self."),Object(o.b)("li",null,"Consider which widgets are most easily done using custom containers and which widgets are most easily realized using the custom widget approach.")),Object(o.b)("h2",{id:"modifying-standard-widgetscontainers"},"Modifying standard widgets/containers"),Object(o.b)("p",null,"The source code for the standard widgets are included when installing TouchGFX. These can also be modified to fit with the needs of an application. The source code for the standard widgets and containers is located in the folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"touchgfx\\framework\\source\\touchgfx\n")),Object(o.b)("p",null,"In order to maintain backwards compatibility, the core library contains compiled versions of the standard widgets and containers. It is therefore not necessary to compile these files in your project."),Object(o.b)(d.a,{mdxType:"Caution"},"Modifying the standard widgets/containers directly is discouraged"),Object(o.b)("p",null,"The source code is primarily intended as inspiration and a way to learn about the inner workings of TouchGFX widgets. If you want something to behave differently than the standard implementation, it is possible to achieve this by either subclassing or creating custom containers, which is also the\nrecommended approach."),Object(o.b)("p",null,"The reason for this recommendation is two-fold:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Firstly, you will make it more difficult to upgrade to newer TouchGFX versions, since you must manually merge any changes you did."),Object(o.b)("li",{parentName:"ul"},"Secondly, you risk breaking the standard widgets and containers that are dependent on specific behavior.")),Object(o.b)("p",null,"Therefore, if it is necessary to modify a standard widget/container, we recommend you take a copy of it, rename it and use that instead of directly modifying the source code."),Object(o.b)("p",null,"That being said, you are free to do whatever you judge is right. If you add the source code for a standard widget into your project, your linker will choose this version instead of the one in the core library. As a result, you have access to modification of the standard widgets by adding the source code to your compilation."))}y.isMDXComponent=!0}}]);