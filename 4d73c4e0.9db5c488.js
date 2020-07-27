(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{1230:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(r.a.createElement("div",{class:e},r.a.createElement("div",{class:"highlight-heading"},r.a.createElement("h5",null,r.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.a.createElement("div",{class:"highlight-content"},this.props.children)))},n}(i.Component);n.a=o},1232:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){var e=this.props.noShadow||!1,n=this.props.width,t=this.props.height;return e?r.a.createElement("div",{class:"figure noshadow"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:n,height:t,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption)):r.a.createElement("div",{class:"figure"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:n,height:t,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption))},n}(i.Component);n.a=o},1234:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return r.a.createElement("div",{class:"code-header"},r.a.createElement("div",null,r.a.createElement("h5",null,this.props.children)))},n}(i.Component);n.a=o},1235:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=t(1230),s=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:s},this.props.children)},n}(i.Component);n.a=l},1236:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=t(1230),s=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),l=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:s},this.props.children)},n}(i.Component);n.a=l},1237:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return r.a.createElement("code",null,this.props.text)},n}(i.Component);n.a=o},1242:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=t(1230),s=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:s},this.props.children)},n}(i.Component);n.a=l},1243:function(e,n,t){"use strict";var a=t(5),i=t(0),r=t.n(i),o=t(1230),s=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})),l=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:s},this.props.children)},n}(i.Component);n.a=l},456:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(1),i=t(9),r=(t(0),t(1229)),o=t(1232),s=(t(1243),t(1236),t(1242),t(1235),t(1237),t(1231),t(1234),{id:"using-binary-translations",title:"Binary Translations"}),l={id:"version-4.13/development/ui-development/touchgfx-engine-features/using-binary-translations",title:"Binary Translations",description:"This section describes how to use binary translations in\r",source:"@site/versioned_docs\\version-4.13\\development\\ui-development\\touchgfx-engine-features\\using-binary-translations.mdx",permalink:"/docs/4.13/development/ui-development/touchgfx-engine-features/using-binary-translations",version:"4.13",sidebar:"version-4.13/docs",previous:{title:"Font Caching",permalink:"/docs/4.13/development/ui-development/touchgfx-engine-features/font-cache"},next:{title:"Backend Communication",permalink:"/docs/4.13/development/ui-development/touchgfx-engine-features/backend-communication"}},c=[{value:"Translations",id:"translations",children:[]},{value:"Configuring the Text converter",id:"configuring-the-text-converter",children:[]},{value:"Installing a binary translation",id:"installing-a-binary-translation",children:[]}],h={rightToc:c},p="wrapper";function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)(p,Object(a.a)({},h,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section describes how to use binary translations in\nTouchGFX. Normally text translations are compiled into the\napplication. This principle is efficient and easy to use.",Object(r.b)("br",{parentName:"p"}),"\n","Binary translations keep the text translation out of the\napplication. The binary translations are generated in separate binary\nfiles which can be programmed to flash or for example stored on an\nsdcard.  This gives more flexibility to application developers when\nhandling a large number of translations."),Object(r.b)("h3",{id:"translations"},"Translations"),Object(r.b)("p",null,"The Text class in TouchGFX contains a pointer array with a pointer to a\ntranslation table for each language in the application. A translation\ntable is in principle a collection of all strings used in that\nlanguage:"),Object(r.b)(o.a,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-fonts/text-class-1.png",caption:"Mapping texts to specific languages",noShadow:"true",width:"420",mdxType:"Figure"}),Object(r.b)("p",null,"This table allows TouchGFX to find a given text in the selected language."),Object(r.b)(o.a,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-translations/binary-translation.png",caption:"Mapping to a binary translation",noShadow:"true",width:"600",mdxType:"Figure"}),Object(r.b)("p",null,"When using binary translations at runtime you change the mapping from\nthe compiled-in translation to a binary translation. The binary\ntranslations must be available in addressable memory (flash or\nRAM). It can for example be loaded from a disk or written to the flash during\nproduction."),Object(r.b)("h3",{id:"configuring-the-text-converter"},"Configuring the Text converter"),Object(r.b)("p",null,'The TouchGFX text converter can be configured to generate binary\ntranslations. This is easily done in the TouchGFX Designer 4.13. Go to\nthe Config tab, select "Text Configuration", and click "Binary\ntranslation files"'),Object(r.b)(o.a,{imageSource:"/img/development/ui-development/touchgfx-engine-features/using-binary-translations/designer-text-config.png",caption:"Enabling binary translation",noShadow:"true",width:"900",mdxType:"Figure"}),Object(r.b)("p",null,"When you generate the code the next time, the binary translations will\nbe in the generated/texts/binary folder."),Object(r.b)("p",null,"The translations compiled into the application is empty when binary\ntranslations are generated. Therefore no texts are shown unless you\nload binary translations."),Object(r.b)("h3",{id:"installing-a-binary-translation"},"Installing a binary translation"),Object(r.b)("p",null,"When the application has the binary translation in memory, it can\ninstall it in TouchGFX. Hereafter TouchGFX will use that\ntranslation. Depending on the application this can be done in\ndifferent places or time (The\n",Object(r.b)("em",{parentName:"p"},"FrontendApplication::FrontendApplication(Model& m, FrontendHeap& heap)"),"\nconstructor in ",Object(r.b)("em",{parentName:"p"},"gui/src/common/FrontApplication.cpp")," can e.g. be used)."),Object(r.b)("p",null,'Here is an example where we read a translation for English from a\nfilesystem and install it as language "GB".'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{11-11,15-15,19-19}","{11-11,15-15,19-19}":!0}),'//read the translation into this global array\nuint8_t translation[10000];\n...\n\n//read the translation from a file, or change array to a pointer that points\n//to the translation data in internal or addressable external flash\nFILE* file = fopen("generated/texts/binary/LanguageGb.bin", "rb");\nif (file)\n{\n    //read data from file\n    fread(translation, 1, 10000, file);\n    fclose(file);\n\n    //replace empty translation with the binary data\n    Texts::setTranslation(GB, translation);\n\n    //always change language to get TouchGFX changed from the\n    //empty translation compiled in to the binary translation\n    Texts::setLanguage(GB);\n}\n')),Object(r.b)("p",null,"Note, it is necessary to change language after installing a\ntranslation. Otherwise TouchGFX will still use the previous\ntranslation. Read about changing language\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"texts-and-fonts#switching-language"}),"here"),"."),Object(r.b)("p",null,"It is also necessary to force a redraw of the current screen, or\nchange screen, to see the new texts (if you are loading translations\nfor the language that is used on the display). TouchGFX does not\nredraw anything automatically."),Object(r.b)("p",null,"The current screen can be redrawn by invalidating the root container:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"container.invalidate();\n")),Object(r.b)("p",null,'This will force a redraw. In some cases it is better to change screen\nto get everything setup again from scratch (e.g. to recalculate\nTextArea sizes). You can change the screen by creating an interaction\nin TouchGFX Designer with the "Change Screen" action. See this ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"article"),"."))}u.isMDXComponent=!0}}]);