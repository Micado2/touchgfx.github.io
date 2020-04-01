(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return f})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(9),i=(a(0),a(261)),o=(a(282),a(262)),l=a(271),s=a(264),c={id:"framebuffer",title:"Framebuffer"},b={id:"basic-concepts/framebuffer",title:"Framebuffer",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs\\basic-concepts\\framebuffer.mdx",permalink:"/docs/basic-concepts/framebuffer",sidebar:"docs",previous:{title:"Embedded Graphics",permalink:"/docs/basic-concepts/embedded-graphics"},next:{title:"Graphics Engine",permalink:"/docs/basic-concepts/graphics-engine"}},f=[{value:"Colors",id:"colors",children:[]},{value:"Display",id:"display",children:[]},{value:"Location of framebuffer",id:"location-of-framebuffer",children:[{value:"Internal RAM",id:"internal-ram",children:[]},{value:"External RAM",id:"external-ram",children:[]},{value:"Display with embedded RAM",id:"display-with-embedded-ram",children:[]}]},{value:"Amount of framebuffers",id:"amount-of-framebuffers",children:[{value:"One framebuffer",id:"one-framebuffer",children:[]},{value:"More than one framebuffer",id:"more-than-one-framebuffer",children:[]},{value:"Less than one framebuffer",id:"less-than-one-framebuffer",children:[]}]},{value:"Memory consumption",id:"memory-consumption",children:[]}],m={rightToc:f},h="wrapper";function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(h,Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A framebuffer is a piece of memory that is updated by the graphics engine to\ncontain the next image to be shown on the display."),Object(i.b)("p",null,"The framebuffer is a contiguous part of RAM of a given size."),Object(i.b)(o.a,{imageSource:"/img/basic-concepts/framebuffer-contiguous-memory.svg",caption:"Framebuffer memory",noShadow:"true",mdxType:"Figure"}),Object(i.b)("p",null,"A framebuffer has an associated width and height.\nTherefore we typically think of a framebuffer as being a two dimensional part of memory, indexable\nby x, y coordinates."),Object(i.b)(o.a,{imageSource:"/img/basic-concepts/framebuffer-2d-memory.svg",caption:"2D framebuffer memory",noShadow:"true",mdxType:"Figure"}),Object(i.b)("p",null,"A framebuffer has an associated color format.\nEach entry in the framebuffer will be a color in this color format.\nWe will refer to each such entry in the framebuffer as a pixel."),Object(i.b)("p",null,"We can update the color of a pixel at position x,y in the framebuffer by calculating the memory address\nof the pixel within the framebuffer and updating the stored color."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = newColor;\n")),Object(i.b)("p",null,"Similarly we can obtain the color of a pixel in the framebuffer and use this in calculations. For instance darkening the color\nof a pixel in the framebuffer (assuming we have a ",Object(i.b)("inlineCode",{parentName:"p"},"darken")," function available)."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"uint32_t pixelAddress = x + y * WIDTH;\nframebuffer[ pixelAddress ] = darken( framebuffer[ pixelAddress ] );\n")),Object(i.b)("p",null,"Often the framebuffer memory is not written and read pixel by pixel as above, but by utilizing the underlying hardware capabilities of the system, e.g. the Chrom-ART DMA."),Object(i.b)("h2",{id:"colors"},"Colors"),Object(i.b)("p",null,"In TouchGFX the pixel color format of a framebuffer can be either"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Grayscale")," 1, 2 or 4 bits per pixel (bpp) grayscale, or"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"High or true color")," 16, 24 or 32 bpp color")),Object(i.b)("p",null,"The more bits per pixels used the more distinct colors can be represented by the framebuffer, moreover the more bits per pixels used the more memory will be consumed by the framebuffer."),Object(i.b)("h2",{id:"display"},"Display"),Object(i.b)("p",null,"The contents of the framebuffer is what is ultimately transferred to and seen on the physical display.\nTherefore it is very common to have the same pixel width and height of the framebuffer and the display."),Object(i.b)(o.a,{imageSource:"/img/basic-concepts/display-and-framebuffer.svg",caption:"24 bpp framebuffer contents and resulting display",noShadow:"true",mdxType:"Figure"}),Object(i.b)(l.a,{mdxType:"FurtherReading"},"See the section on ",Object(i.b)(s.a,{to:"/docs/development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"},"display technologies")," to learn more on different display types."),Object(i.b)("h2",{id:"location-of-framebuffer"},"Location of framebuffer"),Object(i.b)("p",null,"One oversimplified view of a microcontroller based graphics system is here."),Object(i.b)(o.a,{imageSource:"/img/basic-concepts/simplified-graphics-system.svg",caption:"Oversimplified view of graphics system",noShadow:!0,mdxType:"Figure"}),Object(i.b)("p",null,"A framebuffer can be placed either internally in the MCU or in external RAM."),Object(i.b)(o.a,{imageSource:"/img/basic-concepts/framebuffer-placement.svg",caption:"Possible locations of framebuffer",noShadow:"true",mdxType:"Figure"}),Object(i.b)("p",null,"Each possible location has potential benefits and drawbacks."),Object(i.b)("h3",{id:"internal-ram"},"Internal RAM"),Object(i.b)("p",null,"Placing the framebuffer in RAM internal to the MCU makes the read and write access to the framebuffer\nas fast as possible. This means that your TouchGFX application will run as smooth as possible.\nConversely, internal RAM is a very scarce resource and one that is used by many\nparts of a system, therefore occupying a large part of this with a framebuffer might be infeasible."),Object(i.b)("p",null,"If feasible, having a framebuffer in internal RAM, could reduce the overall cost of the system as\nno additional RAM is needed."),Object(i.b)("h3",{id:"external-ram"},"External RAM"),Object(i.b)("p",null,"If the system has external RAM, placing the framebuffer here is an alternative to placing it in internal RAM.\nThe read and write access to external RAM will typically be slower than to the internal RAM,\nbut the amount of external RAM will typically be much larger. Therefore this is sometimes the only viable solution."),Object(i.b)("p",null,"The MCU might have capabilities, like caching, that makes access to external RAM faster.\nSee the section on ",Object(i.b)(s.a,{to:"/docs/development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"MCU")," for details."),Object(i.b)("h3",{id:"display-with-embedded-ram"},"Display with embedded RAM"),Object(i.b)("p",null,'Depending on the type of display in the system there might be memory embedded on the display.\nThis memory holds the contents of the "physical" pixels of the display.\nHaving this pixel memory in the display implies that the MCU can be idle while the display is still alive.'),Object(i.b)("p",null,"Placing a TouchGFX framebuffer in the RAM of the display is not possible, as the memory of the display is not memory mapped and is not intended nor suitable for random pixel reads or writes.\nInstead TouchGFX places the framebuffer in internal or external RAM and transfers this to the display RAM when appropriate."),Object(i.b)("h2",{id:"amount-of-framebuffers"},"Amount of framebuffers"),Object(i.b)("p",null,"TouchGFX can use one, multiple, or less than one framebuffer in the application.\nThe amount of framebuffers might impact the visual appearance, performance and memory consumption of the application."),Object(i.b)("h3",{id:"one-framebuffer"},"One framebuffer"),Object(i.b)("p",null,"One framebuffer is enough to hold precisely all pixels that are to be transferred to the display.\nOne framebuffer (at least) is needed when the display has no display RAM on board.\nIn this case one framebuffer is ideal when the complexity of the displayed graphics does not induce any visual artifacts."),Object(i.b)("h3",{id:"more-than-one-framebuffer"},"More than one framebuffer"),Object(i.b)("p",null,"In TouchGFX, having multiple framebuffers means having two framebuffers. One framebuffer is used for writing the next resulting image, the other framebuffer is used for transferring to the display.\nThis implies that no visual artifacts, e.g. tearing, will appear."),Object(i.b)("h3",{id:"less-than-one-framebuffer"},"Less than one framebuffer"),Object(i.b)("p",null,"Having less than one framebuffer in general implies that"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"less memory is consumed"),Object(i.b)("li",{parentName:"ul"},"more drawing operations will be performed"),Object(i.b)("li",{parentName:"ul"},"more transfers to display needed")),Object(i.b)("p",null,"In TouchGFX less than one framebuffer is denoted a partial framebuffer. The partial framebuffer scheme is available only for displays with display RAM."),Object(i.b)("h2",{id:"memory-consumption"},"Memory consumption"),Object(i.b)("p",null,"The amount of colors and the number of pixels in the framebuffer determines the memory consumed by the framebuffer."),Object(i.b)("p",null,"In general the amount of memory used by a framebuffer is\n",Object(i.b)("strong",{parentName:"p"}," width ","*"," height ","*"," color depth in bits / 8 ")," bytes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Resolution (pixels)"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Colors (bpp)"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Calculation"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"right"}),"Memory consumed (byte)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"800x480"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"16 bpp"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"800 ","*"," 480 ","*"," 16 / 8"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"768.000 B")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"480x272"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"24 bpp"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"480 ","*"," 272 ","*"," 24 / 8"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"391.680 B")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"100x100"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"8 bpp"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"100 ","*"," 100 ","*","  8 / 8"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"right"}),"10.000 B")))),Object(i.b)("p",null,"When having more than one framebuffer the amount of memory consumed will be correspondingly larger. For example when having a double buffering scheme, using two framebuffers, will consume twice the amount of memory."),Object(i.b)("p",null,"When having less than one framebuffer the amount of memory is explicitly allocated and controlled by the application. The memory consumption is therefore completely customizable, but be warned that using too little will harm the overall graphics performance."),Object(i.b)(l.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,"The STM32 ",Object(i.b)(s.a,{to:"https://www.st.com/content/ccc/resource/technical/document/application_note/group0/25/ca/f9/b4/ae/fc/4e/1e/DM00287603/files/DM00287603.pdf/jcr:content/translations/en.DM00287603.pdf",mdxType:"Link"},"LTDC")," display controller document has further details on framebuffers")))}p.isMDXComponent=!0},279:function(e,t,a){"use strict";var r=a(0),n=a(55);t.a=function(){return Object(r.useContext)(n.a)}},282:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(287);var r=a(279);function n(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},287:function(e,t,a){"use strict";var r=a(17),n=a(36),i=a(288),o="".startsWith;r(r.P+r.F*a(289)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=n(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,a):t.slice(a,a+r.length)===r}})},288:function(e,t,a){var r=a(71),n=a(23);e.exports=function(e,t,a){if(r(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(n(e))}},289:function(e,t,a){var r=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[r]=!1,!"/./"[e](t)}catch(n){}}return!0}}}]);