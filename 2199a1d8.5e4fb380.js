(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return f}));var a=n(1),i=n(9),o=(n(0),n(261)),r=n(262),s=(n(277),n(274),n(276),n(271),n(275),n(264),n(273)),l={id:"using-binary-fonts",title:"Binary Fonts"},c={id:"development/ui-development/touchgfx-engine-features/using-binary-fonts",title:"Binary Fonts",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\development\\ui-development\\touchgfx-engine-features\\using-binary-fonts.mdx",permalink:"/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts",sidebar:"docs",previous:{title:"Dynamic Bitmaps",permalink:"/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps"},next:{title:"Font Caching",permalink:"/docs/development/ui-development/touchgfx-engine-features/font-cache"}},h=[{value:"The Font and Text system classes",id:"the-font-and-text-system-classes",children:[]},{value:"Using Binary Fonts",id:"using-binary-fonts",children:[{value:"Configuring the Font converter to generate Binary Fonts",id:"configuring-the-font-converter-to-generate-binary-fonts",children:[]},{value:"Manual Configuration",id:"manual-configuration",children:[]},{value:"Installing the binary font",id:"installing-the-binary-font",children:[]},{value:"Resetting a font",id:"resetting-a-font",children:[]}]}],p={rightToc:h},d="wrapper";function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section describes how to use binary fonts in TouchGFX. The first\nsection contains some in-depth information about the font and text\nsystem in TouchGFX that can be benificial to understand when working\nwith binary fonts. The second section explains how to use binary\nfonts."),Object(o.b)("p",null,"Binary fonts can be used as an alternative to the traditional way of\ncompiling and linking font information in to your application (the\n.cpp files in ",Object(o.b)("inlineCode",{parentName:"p"},"generated/fonts/src"),").\nThe main advantages of this approach is to get a smaller application\nbinary and get a flexibility in providing different sets of fonts with\nyour device. For example you can pack the Chinese font with devices\ngoing to China, and the Japanese font with devices going there.\nThe drawback of this approach is that the whole binary font needs to\nbe loaded to RAM (or memory-mapped flash) which can be a problem if\nthe font is large."),Object(o.b)("p",null,"The main advantage of the normal principle of linking fonts into the\napplication is that the application will always automatically contain\nthe updated texts and typographies used in the application. This\nis very easy and safe to use. The disadvantage is that fonts can make\nthe application big."),Object(o.b)("h2",{id:"the-font-and-text-system-classes"},"The Font and Text system classes"),Object(o.b)("p",null,"In the default configuration TouchGFX generates .cpp-files for all\ntexts and fonts used in the application. These files are compiled and\nlinked into the application together with the generated UI and your\napplication code."),Object(o.b)("p",null,"When you show a text on the UI with e.g. a TextArea, you reference the\ntext with a TextId. This TextId is used by the Widgets to find the\nactual letters in the text. The Widgets will access the texts through\nthe ",Object(o.b)("em",{parentName:"p"},"touchgfx::Texts")," class ",Object(o.b)("inlineCode",{parentName:"p"},"framework/include/touchgfx/Texts.hpp"),"."),Object(o.b)("p",null,"The Text class contains a pointer array with a pointer to a\ntranslation table for each language in the application. A translation\ntable is in principle a collection of all strings used in that\nlanguage:"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",caption:"Mapping texts to specific languages",mdxType:"Figure"}),Object(o.b)("p",null,"This table allows TouchGFX to find a given text in the selected language."),Object(o.b)("p",null,"The tables are regenerated whenever you change a text in TouchGFX\nDesigner and generate your application."),Object(o.b)("p",null,"Before we can draw on the screen we need to know\nwhich font to use for the text. This mapping between texts and fonts\nis controlled by the TypedTextDatabase class\n(",Object(o.b)("inlineCode",{parentName:"p"},"generated/texts/include/texts/TypedTextDatabase.hpp"),")."),Object(o.b)("p",null,"In the texts tab in TouchGFX Designer you can specify a typography,\nwriting order (Left-to-right or Right-to-left), and an alignment for\neach text (Left, Right, Center). The typography, order, and alignment\ncan be different for each translation of the text.\nThis information is compiled into a table specific for each\nlanguage. This makes it easy for TouchGFX to find out what font to use\nfor a given text, how to align it, and how to write it."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-2.png",caption:"typography information is specific to a language",mdxType:"Figure"}),Object(o.b)("p",null,"In the above figure the TypedTextData table has pointers to three\narrays. One for each language in the application. Each of the arrays\nhas 3 elements, one for each text in the system. Each elements\ndescribes a font, a reading order, and the alignment. We see that in\nthis example the texts use the same font in the three languages.\nThe Fonts table has two pointers because there are two fonts in the\napplication."),Object(o.b)("p",null,"When TouchGFX is about to draw a text on the screen, it\nlooks up the TypedTextData for the given text. This data contains the\nfont index, letter order (LTR/RTL), and the horizontal alignment\n(Left, Right, Center) of the text as specified in the Excel\nsheet. TouchGFX uses the font index in the TypedTextData (F1 or F2) to\nlookup the correct font for the text."),Object(o.b)("p",null,"All this happens automatically when the fonts are compiled into your\napplication."),Object(o.b)("h2",{id:"using-binary-fonts"},"Using Binary Fonts"),Object(o.b)("p",null,"When an application is using many letters in many different fonts the\nsize of the application can grow substantially."),Object(o.b)("p",null,"To relieve this problem TouchGFX allows applications to use binary\nfonts. These fonts are not linked into the application but are stored\nseparately from the application as files. These files are loaded and\nprovided to TouchGFX by the application at runtime.\nThe application can e.g. load the font from an external storage like an\nsd-card or maybe download the font from the internet."),Object(o.b)("p",null,"When the application has loaded the font, it can ask TouchGFX to\ninstall the the Binary Font in the font system:"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-1.png",caption:"Installing a binary font in the font table",mdxType:"Figure"}),Object(o.b)("p",null,"Here the built-in Font2 is replaced by the Binaryfont loaded by the\napplication. The linked-in Font2 is hereafter not used by TouchGFX."),Object(o.b)("h3",{id:"configuring-the-font-converter-to-generate-binary-fonts"},"Configuring the Font converter to generate Binary Fonts"),Object(o.b)("p",null,'The font converter must be configured to generate binary fonts. This is\neasily done in TouchGFXDesigner.\nGo to the Config tab, select "Text Configuration", and click "Binary\nfont files":'),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/binary-font-2.png",caption:"Selecting Binary Fonts",mdxType:"Figure"}),Object(o.b)("p",null,"When you regenerate the code, TouchGFX will generate binary fonts in\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"generated/fonts/bin/")," folder, and empty fonts in the normal files\nin ",Object(o.b)("inlineCode",{parentName:"p"},"generated/fonts/src/")),Object(o.b)("h3",{id:"manual-configuration"},"Manual Configuration"),Object(o.b)("p",null,'If you are not using TouchGFX Designer you can still generate binary\nfonts. Change the option "binary_fonts" to "yes" in the\ntext_configuration section in the ',Object(o.b)("em",{parentName:"p"},"application.config")," file in your\nproject."),Object(o.b)(s.a,{mdxType:"CodeHeader"},"application.config"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),'  "text_configuration": {\n    "remap": "yes",\n    "a4": "yes",\n    "binary_translations": "no",\n    "binary_fonts": "yes",\n    "framebuffer_bpp": "16"\n  }\n')),Object(o.b)("p",null,"When you generate assets the next time, the binary fonts will be in the ",Object(o.b)("inlineCode",{parentName:"p"},"generated/fonts/bin")," folder."),Object(o.b)("h3",{id:"installing-the-binary-font"},"Installing the binary font"),Object(o.b)("p",null,"Before TouchGFX can use a binary font it must be copied from the file\nor other storage. The font must be made available in addressable\nmemory like RAM or QSPI flash (where it can be accessed through a\npointer)."),Object(o.b)("p",null,"When the application has loaded the binary font to memory, it can\ninstall the font in TouchGFX. Hereafter TouchGFX will use that font\nand not the compiled font. The binary needs to be installed before\nthe text is used, but it does not need to be done immediately after\nbooting.\nThe ",Object(o.b)("em",{parentName:"p"},"FrontendApplication::FrontendApplication(Model& m, FrontendHeap&\nheap)")," constructor in ",Object(o.b)("inlineCode",{parentName:"p"},"FrontApplication.cpp")," can be used to install\nfonts. This constructor is executed before anything is drawn."),Object(o.b)("p",null,"Here is an example:"),Object(o.b)(s.a,{mdxType:"CodeHeader"},"FrontendApplication.cpp"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,19-19,22-22}","{5-5,19-19,22-22}":!0}),'//read the file into this array in internal RAM\nuint8_t fontdata[10000];\n\n//binary font object using the data\nBinaryFont bf;\n\nFrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)\n    : FrontendApplicationBase(m, heap)\n{\n    //read the binary font from a file\n    FILE* font = fopen("generated/fonts/bin/Font_verdana_20_4bpp.bin", "rb");\n    if (font)\n    {\n        //read data from the file\n        fread(fontdata, 1, 10000, font);\n        fclose(font);\n\n        //initialize BinaryFont object in bf using placement new\n        new (&bf) BinaryFont((const struct touchgfx::BinaryFontData*)fontdata);\n\n        //replace application font \'DEFAULT\' with the binary font\n        TypedTextDatabase::setFont(DEFAULT, &bf); //verdana_20_4bpp\n    }\n}\n')),Object(o.b)("p",null,"The exact code for opening a file and reading data will depend on your\nfile system and operating system.\nThe basic steps are to make the font data available in memory,\ninitialize a BinaryFont object with a pointer to the data, and finally\npass the BinaryFont object to TouchGFX."),Object(o.b)("p",null,"After the call to ",Object(o.b)("em",{parentName:"p"},"setFont")," TouchGFX will use the binary font to draw\ntext on the screen."),Object(o.b)("h3",{id:"resetting-a-font"},"Resetting a font"),Object(o.b)("p",null,"Sometimes you want to go back to the original font compiled into\nyour application after using a binary font.\nFor example if you are changing language, and want to use the default\nfont. The ",Object(o.b)("inlineCode",{parentName:"p"},"resetFont()")," function in TypedTextDatabase will reset the\nfont pointer to the built in font:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"//reset to original font\nTypedTextDatabase::resetFont(DEFAULT);\n")),Object(o.b)("p",null,"After this call, the application can reuse the memory occupied by the\nbinary font to allocate a new font or for other purposes."))}f.isMDXComponent=!0},276:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=n(265),s=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:s},this.props.children)},t}(i.Component);t.a=l},277:function(e,t,n){"use strict";var a=n(5),i=n(0),o=n.n(i),r=n(265),s=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:s},this.props.children)},t}(i.Component);t.a=l}}]);