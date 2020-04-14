(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{135:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return m}));var o=a(1),n=a(9),r=(a(0),a(264)),i=a(267),l=a(274),c=a(265),b={id:"color-formats",title:"Color Formats"},s={id:"basic-concepts/color-formats",title:"Color Formats",description:"import Link from '@docusaurus/Link';",source:"@site/docs\\basic-concepts\\color-formats.mdx",permalink:"/docs/basic-concepts/color-formats",sidebar:"docs",previous:{title:"Embedded Graphics",permalink:"/docs/basic-concepts/embedded-graphics"},next:{title:"Framebuffer",permalink:"/docs/basic-concepts/framebuffer"}},p=[{value:"Color",id:"color",children:[{value:"Grayscale",id:"grayscale",children:[]},{value:"Opacity",id:"opacity",children:[]}]},{value:"Color depth",id:"color-depth",children:[]},{value:"Formats",id:"formats",children:[{value:"Pixel color formats",id:"pixel-color-formats",children:[]},{value:"Image formats",id:"image-formats",children:[]},{value:"Text formats",id:"text-formats",children:[]}]},{value:"Visual quality",id:"visual-quality",children:[{value:"Dithering",id:"dithering",children:[]}]},{value:"Performance",id:"performance",children:[{value:"Alpha blending",id:"alpha-blending",children:[]}]},{value:"Other image formats",id:"other-image-formats",children:[]}],d={rightToc:p},h="wrapper";function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(h,Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Colors are what is seen on the pixels of the display. These colors come from values stored in a ",Object(r.b)(i.a,{to:"/docs/basic-concepts/framebuffer",mdxType:"Link"},"framebuffer"),". Traditionally in graphics systems, there is a limited amount of possible colors that can be represented, used and displayed. This applies also to TouchGFX and TouchGFX applications. "),Object(r.b)("p",null,"The number of possible pixel colors of an application has an impact on many parts of an application. From the visual appearance of what is seen on the display to the memory consumption imposed by the framebuffer and the overall performance. This section will explain colors in TouchGFX in more detail and describe the color formats available in TouchGFX and highlight pros and cons."),Object(r.b)("h2",{id:"color"},"Color"),Object(r.b)("p",null,"A color in TouchGFX is a triplet of red, green and blue components, known as an RGB color. Each component of the color ranges from 0 to 255. 0 means that the component is off, and 255 means that the component is at its maximum.  "),Object(r.b)("p",null,"A completely black color is represented by the RGB color (0,0,0) and a completely white is (255,255,255). Bright green is (0,255,0), a semi bright red (128,0,0), a darkish purple (64,0,64) and so on."),Object(r.b)(c.a,{imageSource:"/img/basic-concepts/color-formats/rgb-colors.svg",caption:"Some RGB colors",noShadow:"true",height:"70",mdxType:"Figure"}),Object(r.b)("h3",{id:"grayscale"},"Grayscale"),Object(r.b)("p",null,"For grayscale applications all colors are gray, ranging from black to white and therefore the representation is the gray intensity instead of the RGB value. One can think of grayscale colors as RGB colors where R = G = B."),Object(r.b)("h3",{id:"opacity"},"Opacity"),Object(r.b)("p",null,"In some circumstances we might consider colors to have a component describing the opacity of the color. The opacity ranges from 0 to 255, as the other components of the color. Colors with opacity are referred to as RGBA colors. The A stands for alpha, which is the classic name used for the opacity level."),Object(r.b)("p",null,"A completely opaque black color here is (0,0,0,255), a somewhat transparent red is (255,0,0,128), and so on."),Object(r.b)(c.a,{imageSource:"/img/basic-concepts/color-formats/rgba-colors.svg",caption:"Some RGBA colors atop white and grey",noShadow:"true",height:"70",mdxType:"Figure"}),Object(r.b)("p",null,"When a color is not completely opaque it needs to be mixed together with the color already present. This mixing of colors is known as alpha blending."),Object(r.b)("h2",{id:"color-depth"},"Color depth"),Object(r.b)("p",null,"Color depth is the number of bits used to describe each color as stored in the framebuffer. We denote this number the bits per pixel, or in short bpp."),Object(r.b)("p",null,"The more bits we use, the more colors we can describe."),Object(r.b)("p",null,"A much used color depth is 24 bpp. As each bit can be either on or off, this implies that 2",Object(r.b)("sup",null,"24")," = 16777216 different colors can be represented."),Object(r.b)("p",null,"Another, a little less used, color depth is 1 bpp. This color depth applies to black and white applications, and implies that only 2",Object(r.b)("sup",null,"1")," = 2 different colors can be represented."),Object(r.b)("p",null,"TouchGFX has built in support for the following color depths:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"32 bpp - 16777216 colors and corresponding opacity values"),Object(r.b)("li",{parentName:"ul"},"24 bpp - 16777216 colors"),Object(r.b)("li",{parentName:"ul"},"16 bpp - 65536 colors"),Object(r.b)("li",{parentName:"ul"},"6 bpp - 32 colors"),Object(r.b)("li",{parentName:"ul"},"4 bpp - 16 grayscale colors"),Object(r.b)("li",{parentName:"ul"},"2 bpp - 4 grayscale colors"),Object(r.b)("li",{parentName:"ul"},"1 bpp - 2 grayscale colors")),Object(r.b)("p",null,"A note on color component ranges. When working with less than 24 bpp color depth, each of the red, green and blue components does not directly range from 0 to 255. Instead such a component, say red in 16 bpp, ranges 0 to 31. We will think of the value 31 as representing the most red we can represent in 16 bpp, i.e. 255 in 24 bpp. One way of thinking of this is that colors of 16 bpp depth can only represent a subset of the colors possible in 24 bpp.  "),Object(r.b)("h2",{id:"formats"},"Formats"),Object(r.b)("p",null,"Having determined the amount of bits needed to represent colors, we investigate the contents of the bits in more detail. A color will have some bits describing the red component, some the green and some the blue.  "),Object(r.b)("h3",{id:"pixel-color-formats"},"Pixel color formats"),Object(r.b)("p",null,"Dependent on the color depth of the application, some particular color formats will be available."),Object(r.b)("h4",{id:"rgb888"},"RGB888"),Object(r.b)("p",null,"In TouchGFX, a color of 24 bpp color depth will have the color format RGB888. This means that 8 bits are used for each of the color components red, green and blue."),Object(r.b)("p",null,"Representing such a color, say bright purple rgb(255,0,255), in code is done by assembling the components into a color value"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"uint32_t brightPurpleRGB888 = 255 << 16 | 0 << 8 | 255 << 0;\n")),Object(r.b)("h4",{id:"rgb565"},"RGB565"),Object(r.b)("p",null,"For 16 bpp colors, TouchGFX uses the color format RGB565. That is 5 bits for red, 6 bits for green, 5 bits for blue. As we have 5 bits for red, fully lit is 31, and a bright red in code is"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"uint16_t brightPurpleRGB565 = 31 << 11 | 0 << 5 | 0 << 0;\n")),Object(r.b)("h4",{id:"rgbx2222-xrgb2222-bgrx2222-xbgr2222"},"RGBx2222, xRGB2222, BGRx2222, xBGR2222"),Object(r.b)("p",null,"For 6 bpp colors, TouchGFX supports 4 different formats, RGBx2222, xRGB2222, BGRx2222, xBGR222. 6 bit colors are stored as bytes and this is the reason for having the x in the forementioned formats. The color is padded with 2 bits, to fit into a byte. The reason for having both RGB and BGR is that some displays need this and we do not want to convert pixels before sending them to the display.\nRepresenting a bright yellow in RGBx2222 in code is"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"uint8_t brightYellowRGBx2222 = 3 << 6 | 3 << 4 | 0 << 2;\n")),Object(r.b)("h4",{id:"gray4-gray2-bw"},"GRAY4, GRAY2, BW"),Object(r.b)("p",null,"For each of the grayscale color depths TouchGFX supports one corresponding color format. For 4 bpp the color format is denoted GRAY4, for 2 bpp it is GRAY2 and for 1 bpp it is denoted BW for black and white. In 4 bpp a completely white color is "),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"uint8_t whiteGRAY4 = 15;\n")),Object(r.b)("p",null,"TouchGFX includes a helper function that will return the correct representation of a color in the correct color format."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/Color.hpp>\n...\naColor = Color::getColorFrom24BitRGB(255,0,128);\n")),Object(r.b)("h3",{id:"image-formats"},"Image formats"),Object(r.b)("p",null,"Images are an important part of most UI applications and images are filled with colors. In TouchGFX images are stored in memory and are filled with colors of a specific format. In many cases images are using one of the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#pixel-color-formats"}),"supported pixel color formats"),", but other image formats are also available. A pixel in an image of a particular image color format will be converted into the appropriate pixel format before being drawn"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Image Color format"),Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"ARGB8888"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"32 bits, 8 bits per component")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"L8_ARGB8888"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"8 bits indexed format, ARGB8888 palette")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"RGB888"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"24 bits, 8 bits per component.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"L8_RGB888"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"8 bits indexed format, RGB888 palette")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"RGB666"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"24 bits, 6 bits per component")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"RGB565"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"16 bits, 5 bits red, 6 bits green, 5 bits blue")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"L8_RGB565"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"8 bits indexed format, RGB565 palette")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"ARGB2222"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"ABGR2222"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"RGBA2222"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"BGRA2222"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"8 bits, 2 bits per component")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"GRAY4"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"4 bits grayscale")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"GRAY2"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"2 bits grayscale")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"BW"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"1 bit grayscale")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"BW_RLE"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"1 bit grayscale run-length encoded")))),Object(r.b)("p",null,"Some of these image formats, the L8 ones, are representing the image in question by a lookup table of colors (known as a CLUT) and indices into this table. The maximum number of possible colors in such an L8 image is 2",Object(r.b)("sup",null,"8"),"-1 = 255. The L8 formats take up less space than their non-L8 counterparts, as an example a 100x100 image with 200 different colors, takes up 100",Object(r.b)("em",{parentName:"p"},"100"),"32 bits = 40000 bytes when stored in the ARGB8888 format, and only 100",Object(r.b)("em",{parentName:"p"},"100"),"8 bits + 200*32 bits = 10800 bytes when stored in the L8_ARGB8888 format."),Object(r.b)("p",null,"The image format BW_RLE stores the colors as consecutive runs of black and white instead of storing single pixel colors. This can in many cases also be more space efficient. "),Object(r.b)("p",null,"The rest of the formats are the same as the pixel color formats above."),Object(r.b)("h3",{id:"text-formats"},"Text formats"),Object(r.b)("p",null,"Texts, or more accurately glyphs, are also stored in memory in a specific color format. The available text color formats in TouchGFX are"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Text Color format"),Object(r.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"A8"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"8 bits, opacity only")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"A4"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"4 bits, opacity only")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"A2"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"2 bits, opacity only")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"A1"),Object(r.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"1 bits, opacity only")))),Object(r.b)("p",null,"Glyph formats are comparable to small images, where each color entry holds the level of opacity of each pixel. This enables applying the actual color, the red, green and blue components, at a later time, and enables drawing for instance the stored glyph 'A' in both a blue version and a red version. "),Object(r.b)("p",null,"The more bits used for each glyph the smoother and nicer it will typically appear. "),Object(r.b)("h2",{id:"visual-quality"},"Visual quality"),Object(r.b)("p",null,"When doing embedded graphics we want the highest visual quality, but at the same time we need to look at the amount of memory consumed. "),Object(r.b)("p",null,"Therefore it is many times desirable to go for an RGB565 color format instead of the richer RGB888 and in general we should go for the color format that provides us the most visual quality, while respecting our memory requirements. "),Object(r.b)("h3",{id:"dithering"},"Dithering"),Object(r.b)("p",null,"TouchGFX employs what is known as dithering to improve the visual quality of images when representing these in different color formats. "),Object(r.b)("p",null,"Dithering is a well known technique for making images appear to have more colors than what is actually present. This is done by adding a bit of noise to the colors of the image."),Object(r.b)("p",null,"One example - when converting an RGB888 image to an RGB565 image, instead of just chopping of the lower bits of each color component, the conversion process adds some noise to each of the resulting colors, the result being that the converted image looks richer and similar to the RGB888 original."),Object(r.b)("p",null,"Explaining by images instead of words, we have an original RGB888 image, and a number of converted images. The converted images have the formats RGB565 with and without dithering, xRGB2222 with and without dithering, GRAY4 with and without dithering."),Object(r.b)(c.a,{imageSource:"/img/basic-concepts/color-formats/rgb888.png",caption:"Original RGB888 image",noShadow:"true",width:"480",mdxType:"Figure"}),Object(r.b)(c.a,{imageSource:"/img/basic-concepts/color-formats/rgb565.png",caption:"Converted RGB565 images with and without dithering",noShadow:"true",width:"480",mdxType:"Figure"}),Object(r.b)(c.a,{imageSource:"/img/basic-concepts/color-formats/xrgb2222.png",caption:"Converted xRGB2222 images with and without dithering",noShadow:"true",width:"480",mdxType:"Figure"}),Object(r.b)(c.a,{imageSource:"/img/basic-concepts/color-formats/gray4.png",caption:"Converted GRAY4 images with and without dithering",noShadow:"true",width:"480",mdxType:"Figure"}),Object(r.b)("p",null,"As can be seen dithering improves the perceived quality of images quite a bit. When looking closely at the RGB565 with and without dithering, it can be seen that the dithered version looks almost exactly like the original whereas the undithered one has some areas where color banding is apparent. This examplifies that in many cases 16 bit colors is more than enough to do great looking graphics."),Object(r.b)("p",null,"When your graphics assets has big gradients, you might experience some color banding even in dithered images. Here are two examples. A bluish gradient ranging from RGB888 (64,190,222) to black and the converted RGB565 image with and without dithering."),Object(r.b)(c.a,{imageSource:"/img/basic-concepts/color-formats/bluish.png",caption:"Original RGB888 and converted RGB565 images with and without dithering",noShadow:"true",width:"800",mdxType:"Figure"}),Object(r.b)("p",null,"And another red gradient ranging from (255,0,0) to black."),Object(r.b)(c.a,{imageSource:"/img/basic-concepts/color-formats/red.png",caption:"Original RGB888 and converted RGB565 images with and without dithering",noShadow:"true",width:"800",mdxType:"Figure"}),Object(r.b)("p",null,"Looking closely, it can be seen that color banding is present in both the dithered and the undithered RGB565 versions. The red image has the most noticeable bands."),Object(r.b)("p",null,"Always pay close attention to your resulting images and color formats and if needed alter your original images or choose another color format."),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,'All the image formats discussed are optimized for "easiness" of drawing. This means that the images can more or be less copied to the framebuffer without much conversion taking place.'),Object(r.b)("p",null,"This is intentional and is one of the reasons TouchGFX can achieve fluent graphics on microcontrollers."),Object(r.b)("p",null,"When designing a UI with TouchGFX one uses .png images and at compile time each of these images are converted into one of the efficient image formats detailed above. Read more on ",Object(r.b)(i.a,{to:"/docs/development/ui-development/touchgfx-engine-features/images",mdxType:"Link"},"image formats and performance"),"."),Object(r.b)("h3",{id:"alpha-blending"},"Alpha blending"),Object(r.b)("p",null,"At runtime the copying of image data is done either by a regular (CPU og MCU brugt i samme saetning, er det korrekt?) CPU copy operation or by using features of the MCU. If the image includes pixels that are not completely transparent or opaque, the pixels need to be alpha blended onto the background. In some STM32 MCUs this blending is supported by the hardware."),Object(r.b)("h2",{id:"other-image-formats"},"Other image formats"),Object(r.b)("p",null,"If you need to support other image formats at runtime, for example compressed image formats, such as .jpg or .png you can utilize the support of TouchGFX for ",Object(r.b)(i.a,{to:"/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",mdxType:"Link"},"dynamic bitmaps.")),Object(r.b)(l.a,{mdxType:"FurtherReading"},Object(r.b)("li",null,"Wikipedia article on ",Object(r.b)(i.a,{to:"https://en.wikipedia.org/wiki/Color_depth",mdxType:"Link"},"color depth")),"."))}m.isMDXComponent=!0}}]);