(window.webpackJsonp=window.webpackJsonp||[]).push([[770],{1230:function(e,t,a){"use strict";var n=a(5),i=a(0),o=a.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(i.Component);t.a=r},1232:function(e,t,a){"use strict";var n=a(5),i=a(0),o=a.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,a=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=r},1234:function(e,t,a){"use strict";var n=a(5),i=a(0),o=a.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{class:"code-header"},o.a.createElement("div",null,o.a.createElement("h5",null,this.props.children)))},t}(i.Component);t.a=r},1235:function(e,t,a){"use strict";var n=a(5),i=a(0),o=a.n(i),r=a(1230),s=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:s},this.props.children)},t}(i.Component);t.a=c},1236:function(e,t,a){"use strict";var n=a(5),i=a(0),o=a.n(i),r=a(1230),s=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:s},this.props.children)},t}(i.Component);t.a=c},1237:function(e,t,a){"use strict";var n=a(5),i=a(0),o=a.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement("code",null,this.props.text)},t}(i.Component);t.a=r},1242:function(e,t,a){"use strict";var n=a(5),i=a(0),o=a.n(i),r=a(1230),s=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:s},this.props.children)},t}(i.Component);t.a=c},1243:function(e,t,a){"use strict";var n=a(5),i=a(0),o=a.n(i),r=a(1230),s=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:s},this.props.children)},t}(i.Component);t.a=c},906:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return u}));var n=a(1),i=a(9),o=(a(0),a(1229)),r=a(1232),s=(a(1243),a(1236),a(1242),a(1235),a(1237),a(1231),a(1234)),c={id:"using-non-memory-mapped-flash",title:"Using Non-Memory Mapped Flash for storing images"},l={id:"development/ui-development/scenarios/using-non-memory-mapped-flash",title:"Using Non-Memory Mapped Flash for storing images",description:"In this section we will discuss how to link all your images to a\r",source:"@site/docs\\development\\ui-development\\scenarios\\using-non-memory-mapped-flash.mdx",permalink:"/docs/next/development/ui-development/scenarios/using-non-memory-mapped-flash",version:"next",sidebar:"docs",previous:{title:"Creating Dynamic L8 Images",permalink:"/docs/next/development/ui-development/scenarios/creating-dynamic-l8-images"},next:{title:"Updating to a new TouchGFX Version",permalink:"/docs/next/miscellaneous/updating-to-a-new-touchgfx-version"}},h=[{value:"Copying bitmap data from flash to cache",id:"copying-bitmap-data-from-flash-to-cache",children:[]},{value:"The BitmapDatabase table",id:"the-bitmapdatabase-table",children:[]},{value:"Linker script modifications",id:"linker-script-modifications",children:[]},{value:"Modifying the BlockCopy function",id:"modifying-the-blockcopy-function",children:[]},{value:"Linking images to RAM",id:"linking-images-to-ram",children:[]}],p={rightToc:h},d="wrapper";function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section we will discuss how to link all your images to a\nbinary file that you can put in a non-memory mapped flash and how to\nuse that file at runtime together with the bitmap cache.\nTouchGFX cannot draw bitmaps that are stored in non-memory mapped\nflash, but by caching the bitmaps in RAM we can make the bitmaps\nuseable in the application."),Object(o.b)("p",null,"See the article ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../touchgfx-engine-features/caching-bitmaps"}),"Caching Bitmaps"),"\nfor a general discussion on the bitmap cache."),Object(o.b)("p",null,"In this article we assume that you have setup a bitmap cache, and\nthat you want to store your bitmaps in non-memory mapped flash. This\ncan be e.g. USB storage, NAND flash etc."),Object(o.b)("p",null,"The goal is to link the images to a specific address, copy the images\nto a file, and help TouchGFX to copy from the file to the cache."),Object(o.b)("h3",{id:"copying-bitmap-data-from-flash-to-cache"},"Copying bitmap data from flash to cache"),Object(o.b)("p",null,"Recall that when you cache a bitmap, TouchGFX copies the pixels from\nthe original location to the bitmap cache."),Object(o.b)("p",null,"This copying is done by calling this method from the HAL class:"),Object(o.b)(s.a,{mdxType:"CodeHeader"},"HAL.hpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"bool HAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n")),Object(o.b)("p",null,"If your bitmaps are stored in normal addressable flash (like internal\nflash or memory mapped external flash), then the normal blockCopy\nfunction provided in the TouchGFX library is fine, and you do not need\nto do anything."),Object(o.b)("p",null,"On the other hand, if your bitmaps is stored in storage that is not\naddressable, e.g. a filesystem, then the normal implementation is not\nsufficient and you need to provide an updated version that is able to\nread from your specific flash storage."),Object(o.b)("p",null,"But first we need to make sure that our bitmaps is linked to a fixed\naddress."),Object(o.b)("h2",{id:"the-bitmapdatabase-table"},"The BitmapDatabase table"),Object(o.b)("p",null,"All bitmaps in TouchGFX is generated to .cpp files in the folder\ngenerated/images/src. Here the bitmaps are represented as byte\narrays."),Object(o.b)("p",null,"These arrays are compiled by the C++ compiler as any other\nsource code file and are linked into the application."),Object(o.b)("p",null,"Here is a screenshot of a simple application with a Button and a\nTextureMapper showing a rotating logo:"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/scenarios/using-non-memory-mapped-flash/screen-shot.png",caption:"Button and TextureMapper",mdxType:"Figure"}),Object(o.b)("p",null,"This application uses 3 images: Button_Pressed, Button_Released, and Logo."),Object(o.b)("p",null,"These 3 bitmaps are converted to .cpp files and linked in as part of\nthe application. The images are referenced in a table called the\nbitmap_database. This table is located in the file\nBitmapDatabase.cpp. Here is the table from the above example (some details removed):"),Object(o.b)(s.a,{mdxType:"CodeHeader"},"BitmapDatabase.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"extern const unsigned char _blue_buttons_round_edge_small[];\nextern const unsigned char _blue_buttons_round_edge_small_pressed[];\nextern const unsigned char _blue_logo_touchgfx_logo[];\n\nconst touchgfx::Bitmap::BitmapData bitmap_database[] =\n{\n    { _blue_buttons_round_edge_small, ... },\n    { _blue_buttons_round_edge_small_pressed, ... },\n    { _blue_logo_touchgfx_logo, ... }\n};\n\n")),Object(o.b)("p",null,"The arrays declared first are the arrays containing the pixels of the\nindividual bitmaps. These arrays are defined in other .cpp files. The\nbitmap_database array is holding the addresses of these\narrays. TouchGFX uses this array to find the address of the pixels of\na bitmap."),Object(o.b)("p",null,"When the programmer requests a bitmap to be cached, TouchGFX finds the\naddress of the bitmap in flash (in the bitmap_database array) and\ncopies data from here."),Object(o.b)("h2",{id:"linker-script-modifications"},"Linker script modifications"),Object(o.b)("p",null,"The linker selects an address for the bitmaps. This selection is based\non the section the bitmaps are placed in. All bitmaps in TouchGFX is\nby default put into the ",Object(o.b)("strong",{parentName:"p"},"ExtFlashSection"),"."),Object(o.b)("p",null,"The standard linker scripts (here for GCC) puts this section into\nflash together with other read-only data."),Object(o.b)("p",null,"In this example we will put the image data in the ExtFlashSection at\naddress ",Object(o.b)("strong",{parentName:"p"},"0x24000000"),". You can select any address that is otherwise\nunused (not part of the code or data address space)."),Object(o.b)("p",null,"First we define a new memory area (USB-flash at address 0x24000000),\nin addition to the normal internal FLASH and RAM areas:"),Object(o.b)(s.a,{mdxType:"CodeHeader"},"STM32F746.ld"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"MEMORY\n{\n  RAM (xrw)      : ORIGIN = 0x20000000, LENGTH = 320K\n  FLASH (rx)     : ORIGIN = 0x08000000, LENGTH = 1024K\n  USB(r)         : ORIGIN = 0x24000000, LENGTH = 1M\n}\n")),Object(o.b)("p",null,"Then we instruct the linker to put the ExtFlashSection in the USB area:"),Object(o.b)(s.a,{mdxType:"CodeHeader"},"STM32F746.ld"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"ExtFlashSection :\n{\n   *(ExtFlashSection ExtFlashSection.*)\n} >USB\n")),Object(o.b)("p",null,"After linking we can check the addresses of the bitmaps by inspecting the map file (application.map). Here is the relevant part:"),Object(o.b)(s.a,{mdxType:"CodeHeader"},"application.map"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"ExtFlashSection\n                0x24000000    0x23ec0\n *(ExtFlashSection ExtFlashSection.*)\n ExtFlashSection\n                0x24000000    0x10000 TouchGFX/build/.../Blue_Logo_touchgfx_logo.o\n                0x24000000                _blue_logo_touchgfx_logo\n ExtFlashSection\n                0x24010000     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small.o\n                0x24010000                _blue_buttons_round_edge_small\n ExtFlashSection\n                0x24019f60     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small_pressed.o\n                0x24019f60                _blue_buttons_round_edge_small_pressed\n")),Object(o.b)("p",null,"We can see here that the total size of the images is 0x23ec0 = 147.136\nbytes. The 3 arrays holding the bitmaps are located sequentially from\naddress 0x24000000."),Object(o.b)("p",null,"Let's now assume the you want the bitmap data to go to a SD-card. We can extract the binary data for the bitmaps from the .elf file with a simple objcopy command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"$ arm-none-eabi-objcopy.exe --dump-section ExtFlashSection=images.bin TouchGFX/build/bin/target.elf\n$ ls -l images.bin\n-rw-r--r-- 1 christef Administrators 147136 Feb 20 11:56 images.bin\n")),Object(o.b)("p",null,"This gives us a file (images.bin) containing the image byte arrays\nonly. This file can be copied to an USB flash, an SD-card, or\neven programmed to a flash chip."),Object(o.b)("p",null,"The idea is now that when TouchGFX asks for data above address\n0x24000000 we take the data from the images.bin file on the SD-card."),Object(o.b)("h2",{id:"modifying-the-blockcopy-function"},"Modifying the BlockCopy function"),Object(o.b)("p",null,"Recall that when you cache a bitmap to RAM TouchGFX calls HAL::BlockCopy to get the data."),Object(o.b)("p",null,"To get this linked to the data on your SD-card we can implement a new\nBlockCopy in your specific HAL class. Here we assume the class is\ncalled TouchGFXHAL (as generated by the TouchGFX Generator):"),Object(o.b)(s.a,{mdxType:"CodeHeader"},"TouchGFXHal.hpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"class TouchGFXHAL : public TouchGFXGeneratedHAL\n{\npublic:\n    ...\n    virtual bool blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n}\n")),Object(o.b)(s.a,{mdxType:"CodeHeader"},"TouchGFXHal.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// This function is called whenever a bitmap is cached. Must copy a number of bytes from the (non-memory-mapped) source\n// to the cache.\nbool TouchGFXHAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes)\n{\n  // If requested data is located within the memory block we have assigned for ExtFlashSection,\n  // provide an implementation for data copying.\n  if (src >= 0x24000000 && src < 0x24100000)\n  {\n    void* dataOffset = src - 0x24000000;\n    // In this example we assume graphics is placed in SD card, and that we have an appropriate function\n    // for copying data from there.\n    sdcard_read(dest, dataOffset, numBytes);\n    return true;\n  }\n  else\n  {\n    // For all other addresses, just use the default implementation.\n    // This is important, as blockCopy is also used for other things in the core framework.\n    return HAL::blockCopy(dest, src, numBytes);\n  }\n}\n")),Object(o.b)("p",null,"Now you can start caching bitmaps from the SD-card."),Object(o.b)("p",null,"If TouchGFX tries to draw a bitmap that is not cached it will try to\nread the pixels from the address found in the ",Object(o.b)("inlineCode",{parentName:"p"},"bitmap_database"),"\ntable. This address will be in the range 0x24000000 - 0x24100000 and\nthe read will result in an exception."),Object(o.b)("h2",{id:"linking-images-to-ram"},"Linking images to RAM"),Object(o.b)("p",null,"If your available RAM is big enough to hold all the images (in the\nabove example that is more than 147.136 bytes) then you do not need to\nuse the bitmap cache to copy the images."),Object(o.b)("p",null,"The strategy is as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Select a fixed address and range in RAM for the images"),Object(o.b)("li",{parentName:"ul"},"Remove that range from the RAM area in the linker script"),Object(o.b)("li",{parentName:"ul"},"Create a new area IMAGES with the selected address and size"),Object(o.b)("li",{parentName:"ul"},"Place the ExtFlashSection in IMAGES area"),Object(o.b)("li",{parentName:"ul"},"Link the application and check the .map file"),Object(o.b)("li",{parentName:"ul"},"Create the images.bin file from the application.elf"),Object(o.b)("li",{parentName:"ul"},"Before TouchGFX is started, copy the whole images.bin file from the SD-card to the selected address in RAM")),Object(o.b)("p",null,"This solution is simple, but has some drawbacks:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The available RAM must be big enough to hold all the images"),Object(o.b)("li",{parentName:"ul"},"Start up time will be larger because of the copying from the SD-card (megabytes can take seconds)")))}u.isMDXComponent=!0}}]);