(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return h}));var a=n(1),i=n(9),r=(n(0),n(227)),o=n(230),c=(n(229),n(245)),p=(n(231),n(232),n(233)),l=(n(234),{id:"LoadingImagesAtRuntime",title:"Loading Images at Runtime"}),s={id:"Development/UIDevelopment/Scenarios/LoadingImagesAtRuntime",title:"Loading Images at Runtime",description:"import Link from '@docusaurus/Link';",source:"@site/docs\\Development\\UIDevelopment\\Scenarios\\LoadingImagesAtRuntime.mdx",permalink:"/docs/Development/UIDevelopment/Scenarios/LoadingImagesAtRuntime",sidebar:"docs",previous:{title:"Achieving Better Performance with CacheableContainer",permalink:"/docs/Development/UIDevelopment/Scenarios/AchievingBetterPerformanceWithCacheableContainer"},next:{title:"Lowering Memory Usage with Partial Framebuffer",permalink:"/docs/Development/UIDevelopment/Scenarios/LoweringMemoryUsageWithPartialFrameBuffer"}},m=[{value:"Dynamic Bitmap Operations",id:"dynamic-bitmap-operations",children:[]},{value:"Loading Dynamic Bitmap Example",id:"loading-dynamic-bitmap-example",children:[]},{value:"Configure memory for dynamic bitmaps",id:"configure-memory-for-dynamic-bitmaps",children:[]},{value:"Alpha channels for dynamic bitmaps",id:"alpha-channels-for-dynamic-bitmaps",children:[]}],u={rightToc:m},d="wrapper";function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(d,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This article describes how dynamic bitmaps can be used to create applications where some of the graphic content is read from files or other input at runtime."),Object(r.b)("p",null,"An example on ",Object(r.b)(o.a,{target:"_blank",to:"https://github.com/touchgfx/touchgfx-open-repository/tree/master/app/example/JPEG_file_loader",mdxType:"Link"},"Github")," shows how to use LibJPEG to use JPEG-files."),Object(r.b)("p",null,"Recall that standard bitmaps are compiled into the application and therefore must be available at compile time. The bitmaps are converted from e.g. PNG files and stored in an internal format together with size and format information."),Object(r.b)("p",null,"This setup makes it impossible to use the Image widget to show images obtained at runtime."),Object(r.b)("p",null,"The problem can be resolved using the dynamic bitmap feature."),Object(r.b)("h2",{id:"dynamic-bitmap-operations"},"Dynamic Bitmap Operations"),Object(r.b)("p",null,"The dynamic bitmap operations are all placed in the Bitmap class."),Object(r.b)("p",null,"The following method creates a dynamic bitmap with the width, height and bitmap format specified. The bitmap is only created if enough unused memory is available. Returns BITMAP_INVALID if the bitmap was not created."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"static BitmapId dynamicBitmapCreate(const uint16_t width, const uint16_t height, BitmapFormat format)\n")),Object(r.b)("p",null,"The following method deletes a dynamic bitmap."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"static bool dynamicBitmapDelete(BitmapId id)\n")),Object(r.b)("p",null,"The following method returns the address of the dynamic bitmap. This method is used by file loaders to copy image data into the bitmap."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"static uint8_t* dynamicBitmapGetAddress(BitmapId id)\n")),Object(r.b)("p",null,"The following method sets the solid rectangle of a dynamic bitmap."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"static bool dynamicBitmapSetSolidRect(BitmapId id, const Rect& solidRect)\n")),Object(r.b)("h2",{id:"loading-dynamic-bitmap-example"},"Loading Dynamic Bitmap Example"),Object(r.b)("p",null,"Insert an Image widget in the view:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"class TemplateView : public View\n{\nprivate:\n    Image image;\n}\n")),Object(r.b)("p",null,"Load the image date in setupScreen ",Object(r.b)(p.a,{text:"(substitute libc file operations with what your platform provides)",mdxType:"InlineNote"}),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'void TemplateView::setupScreen()\n{\n    FILE* f = fopen("image.jpg", "rb");\n    uint16_t width, height;\n\n    BMPFileLoader::getBMP24Dimensions(f, width, height);\n    BitmapId bmpId;\n\n    //Create (16bit) dynamic bitmap\n    bmpId = Bitmap::dynamicBitmapCreate(width, height, Bitmap::RGB565);\n\n    //Load BMP file\n    BMPFileLoader::readBMP24File(Bitmap(bmpId), f);\n\n    //make Image show the loaded bitmap\n    image.setBitmap(Bitmap(bmpId));\n\n    //Position image and add to View\n    image.setXY(20, 20);\n    add(image);\n    ...\n}\n')),Object(r.b)("p",null,'The BMPFileLoader class used in the example can be found in the "dynamic_bitmap_example" provided with TouchGFX.'),Object(r.b)("p",null,"A JPEG file loader can be found on ",Object(r.b)(o.a,{target:"_blank",to:"https://github.com/touchgfx/touchgfx-open-repository/tree/master/app/example/JPEG_file_loader",mdxType:"Link"},"Github"),"."),Object(r.b)("h2",{id:"configure-memory-for-dynamic-bitmaps"},"Configure memory for dynamic bitmaps"),Object(r.b)("p",null,"Before you can create and use dynamic bitmaps you must configure TouchGFX. It is a prerequisite to provide a buffer and the maximum number of dynamic bitmaps. You provide the parameters to touchgfx_generic_init which is typically called from BoardConfiguration.cpp (or main.cpp for the simulator)."),Object(r.b)("p",null,"Here is an example for STM32F7xx where we allocate a buffer in external RAM:\nWe wish to load and show a 24-bit bitmap of size 320x240. The memory requirement is thus 320x240x3 = 230400. We also need a little space for bookkeeping, so we allocate 232000 bytes for the buffer."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"static uint32_t bmpCache = (uint32_t)(0xC00C0000); // SDRAM\nvoid touchgfx_init()\n{\n HAL& hal = touchgfx_generic_init<STM32F7HAL>(dma, display,\n tc, 480, 272, (uint16_t*)bmpCache, 232000, 1);\n...\n")),Object(r.b)("p",null,"The final argument is the maximum number of dynamic bitmaps, so adjust this according to your needs."),Object(r.b)(c.a,{mdxType:"Note"},"Note that in case of insufficient memory, the BitmapId returned by dynamicBitmapCreate will be BITMAP_INVALID."),Object(r.b)("h2",{id:"alpha-channels-for-dynamic-bitmaps"},"Alpha channels for dynamic bitmaps"),Object(r.b)("p",null,"The dynamic bitmaps can not have separate alpha channels. If you need to load image formats with transparent pixels (e.g. PNG) you must use the bitmap format ARGB8888 where the alpha information is directly included in the pixels."),Object(r.b)("p",null,"The solid rectangle is by default set to the whole bitmap for the bitmap formats RGB565, RGB888, BW, BW_RLE."),Object(r.b)("p",null,"For the format ARGB888 is the default solid rectangle empty. If you load a partly transparent image from a file it can increase performance of the image drawing operation if you set solid rectangle of the dynamic bitmap after loading."))}h.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return n?i.a.createElement(h,c({ref:t},l,{components:n})):i.a.createElement(h,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},228:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return r.a.createElement("div",{class:e},r.a.createElement("div",{class:"highlight-heading"},r.a.createElement("h5",null,r.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.a.createElement("div",{class:"highlight-content"},this.props.children))},t}(i.Component);t.a=o},229:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?r.a.createElement("div",{class:"figure noshadow"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption)):r.a.createElement("div",{class:"figure"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=o},230:function(e,t,n){"use strict";var a=n(1),i=n(0),r=n.n(i),o=n(34),c=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,p=e.href,l=n||p,s=c.test(l),m=Object(i.useRef)(!1),u="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(i.useEffect)((function(){return!u&&s&&window.docusaurus.prefetch(l),function(){u&&t&&t.disconnect()}}),[l,u,s]),l&&s?r.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:function(){m.current||(window.docusaurus.preload(l),m.current=!0)},innerRef:function(e){var n,a;u&&e&&s&&(n=e,a=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:l})):r.a.createElement("a",Object(a.a)({},e,{href:l}))}},231:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=n(228),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(i.Component);t.a=p},232:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("code",null,this.props.text)},t}(i.Component);t.a=o},233:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.text)},t}(i.Component);t.a=o},234:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",{class:"code-header"},r.a.createElement("div",null,r.a.createElement("h5",null,this.props.children)))},t}(i.Component);t.a=o},245:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=n(228),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},t}(i.Component);t.a=p}}]);