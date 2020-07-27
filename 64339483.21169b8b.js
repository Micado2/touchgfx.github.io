(window.webpackJsonp=window.webpackJsonp||[]).push([[420],{1232:function(e,t,a){"use strict";var n=a(5),i=a(0),r=a.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,a=this.props.height;return e?r.a.createElement("div",{class:"figure noshadow"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption)):r.a.createElement("div",{class:"figure"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=c},1234:function(e,t,a){"use strict";var n=a(5),i=a(0),r=a.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",{class:"code-header"},r.a.createElement("div",null,r.a.createElement("h5",null,this.props.children)))},t}(i.Component);t.a=c},1237:function(e,t,a){"use strict";var n=a(5),i=a(0),r=a.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return r.a.createElement("code",null,this.props.text)},t}(i.Component);t.a=c},1246:function(e,t,a){"use strict";var n=a(5),i=a(0),r=a.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return r.a.createElement("p",null,r.a.createElement("div",{class:"videoWrapper"},r.a.createElement("video",{controls:!0},r.a.createElement("source",{src:this.props.url,type:"video/mp4"}))))},t}(i.Component);t.a=c},557:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return b}));var n=a(1),i=a(9),r=(a(0),a(1229)),c=a(1232),p=(a(1237),a(1231),a(1234)),l=(a(1246),{id:"creating-dynamic-l8-images",title:"Creating Dynamic L8 Images"}),o={id:"development/ui-development/scenarios/creating-dynamic-l8-images",title:"Creating Dynamic L8 Images",description:"This section explains the use of dynamic L8 images and especially how to create the palette.\r",source:"@site/docs\\development\\ui-development\\scenarios\\creating-dynamic-l8-images.mdx",permalink:"/docs/next/development/ui-development/scenarios/creating-dynamic-l8-images",version:"next",sidebar:"docs",previous:{title:"Using the L8 Image Format to Reduce Memory Consumption",permalink:"/docs/next/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"},next:{title:"Using Non-Memory Mapped Flash for storing images",permalink:"/docs/next/development/ui-development/scenarios/using-non-memory-mapped-flash"}},m=[{value:"Dynamic L8 Images",id:"dynamic-l8-images",children:[{value:"Creating a Dynamic L8 image with 24-bit palette",id:"creating-a-dynamic-l8-image-with-24-bit-palette",children:[]},{value:"Accessing the palette",id:"accessing-the-palette",children:[]}]},{value:"Dynamic L8 Bitmap Example",id:"dynamic-l8-bitmap-example",children:[{value:"Manipulating the Palette",id:"manipulating-the-palette",children:[]}]}],s={rightToc:m},d="wrapper";function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(d,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section explains the use of dynamic L8 images and especially how to create the palette."),Object(r.b)("p",null,"Read in general about ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../touchgfx-engine-features/dynamic-bitmaps"}),"Dynamic Bitmaps here")," and about the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"using-the-l8-image-format-to-reduce-memory-consumption"}),"L8 image format here"),"."),Object(r.b)("h2",{id:"dynamic-l8-images"},"Dynamic L8 Images"),Object(r.b)("p",null,"Dynamic L8 bitmaps are created like any other dynamic bitmap, except\nthat we also have to specify the type of palette  to create for the bitmap."),Object(r.b)("p",null,"TouchGFX supports 3 types of palettes:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Palette")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_ARGB8888"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"32-bit, 8 bits for each of red, green, blue and per pixel alpha channel")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_RGB888"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"24-bit, 8 bits for each of red, green and blue, no per pixel alpha channel")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_RGB565"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"16-bit, 5 bits for red, 6 bits for green, 5 bits for blue, no per pixel alpha channel")))),Object(r.b)("h3",{id:"creating-a-dynamic-l8-image-with-24-bit-palette"},"Creating a Dynamic L8 image with 24-bit palette"),Object(r.b)("p",null,"Here we create a 100x100 pixels L8 bitmap with a 24-bit palette:"),Object(r.b)(p.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreate(100, 100, Bitmap::L8, Bitmap::CLUT_FORMAT_L8_RGB888);\n")),Object(r.b)("p",null,"This call allocated a 100x100 L8 bitmap and a 24-bit palette in the\nbitmap cache. The palette always holds 256 colors for dynamic bitmaps."),Object(r.b)("h3",{id:"accessing-the-palette"},"Accessing the palette"),Object(r.b)("p",null,"The palette is located 4 bytes after the pixels (aligned on\n32-bit). The bytes contains information about the palette type and\nlength of the palette."),Object(r.b)("p",null,"We can get a pointer to the (so far uninitialized) palette like this:"),Object(r.b)(p.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"//Get a pointer to the bitmap data (pixels and palette)\nuint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);\n\n//1 byte pr pixel, round up to 32-bit\nuint32_t byteSize = 100*100;\nbyteSize = ((byteSize + 3) & ~3);\n\n//Palette starts four bytes after the pixels\nuint8_t* pal = (data + byteSize + 4);\n")),Object(r.b)("h2",{id:"dynamic-l8-bitmap-example"},"Dynamic L8 Bitmap Example"),Object(r.b)("p",null,"We will now go through an example of creating a dynamic L8 bitmap and\nmanipulating the palette.\nManipulating the palette if not a typical thing to do for a general\napplication. The example serves the purpose of illustrating how to\naccess and generate a palette."),Object(r.b)("p",null,"First we create a Screen in TouchGFXDesigner and insert a white Box\nin the background and an Image at e.g. x=140, y=8:"),Object(r.b)(c.a,{imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/designer-img.png",caption:"Creating a Screen",mdxType:"Figure"}),Object(r.b)("p",null,"Now generate the code and open the Screen1View.cpp file. We must\ninsert code in ",Object(r.b)("em",{parentName:"p"},"setupScreen")," to initialize the bitmap cache and create\na dynamic bitmap."),Object(r.b)("p",null,"We create a bitmap of 200*256 pixels. Remember each pixel in an L8\nbitmap is one byte. We color each row of the image with a different\ncolor. First row has color 0, last row has color 255."),Object(r.b)("p",null,"Then we initialize the colors in the palette. We calculate the start\naddress of the palette and set the RGB values of the 256 colors. Here\nwe create colors that go from green to red and back to green again."),Object(r.b)(p.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),'#ifdef SIMULATOR\nuint32_t cacheBuffer[320*1024/4]; //simulate PSRAM\nuint16_t* psram = (uint16_t*)cacheBuffer;\n#else\nuint16_t* psram = (uint16_t*)(0xd0000000 + 480*272*2*2); //Address after two 16bit framebuffers\n#endif\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n\n    //Create one dynamic bitmap\n    Bitmap::setCache(psram, 320*1024, 1); //320Kb cache\n    BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreate(200, 256, Bitmap::L8, Bitmap::CLUT_FORMAT_L8_RGB888);\n    imageDynamic.setBitmap(Bitmap(dynamicBitmap1));\n\n    if (dynamicBitmap1 == BITMAP_INVALID)\n    {\n        touchgfx_printf("Unable to create dynamic bitmap\\n");\n    }\n    else\n    {\n        uint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);\n\n        uint8_t* pixel = data;\n        //make colored rows\n        for (int y = 0; y<256; y++)\n        {\n            for (int x = 0; x<200; x++)\n            {\n                *pixel++ = y;\n            }\n        }\n\n        uint32_t byteSize = 200*256;\n        byteSize = ((byteSize + 3) & ~3);\n\n        //Palette starts four bytes after the pixels\n        uint8_t* pal = (data + byteSize + 4);\n\n        //Make palette with 256 colors from green to red to green\n        for (int i = 0; i<256; i++)\n        {\n            //BGR\n            pal[i*3 + 0] = 0x00;\n            pal[i*3 + 1] = 127*(1+cosf(i*6.28f/255));\n            pal[i*3 + 2] = 255*(sinf(i*3.14f/255));\n        }\n    }\n}\n')),Object(r.b)("p",null,"This gives us a Screen that looks like this:"),Object(r.b)(c.a,{imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/img-20200225-151937.bmp",caption:"Showing L8 image",mdxType:"Figure"}),Object(r.b)("h3",{id:"manipulating-the-palette"},"Manipulating the Palette"),Object(r.b)("p",null,"Since we have access to the palette used for the dynamic L8 bitmap, we\ncan easily manipulate it."),Object(r.b)("p",null,"Here we cycle the colors one index down and force a redraw of the\nimage in every frame:"),Object(r.b)(p.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"...\nvoid Screen1View::handleTickEvent()\n{\n    //get palette address\n    uint8_t* data = Bitmap::dynamicBitmapGetAddress(imageDynamic.getBitmap());\n    uint32_t byteSize = 200*256;\n    byteSize = ((byteSize + 3) & ~3);\n    uint8_t* pal = (data + byteSize + 4);\n\n    //Cycle palette, copy color 0\n    int8_t blue = pal[0], green = pal[1], red = pal[2];\n\n    //Move palette down, 1->0, 2->1, ...\n    for (int i = 0; i<255*3; i+=3)\n    {\n        pal[i] = pal[i+3];\n        pal[i+1] = pal[i+4];\n        pal[i+2] = pal[i+5];\n    }\n\n    //Insert color 0 as color 255\n    pal[255*3+0] = blue;\n    pal[255*3+1] = green;\n    pal[255*3+2] = red;\n\n    //Force redraw by invalidating\n    imageDynamic.invalidate();\n}\n")),Object(r.b)("p",null,'This will move colors in the dynamic bitmap "upwards":'),Object(r.b)(c.a,{width:"200",imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/demo.gif",caption:"Cycling the L8 palette",mdxType:"Figure"}))}b.isMDXComponent=!0}}]);