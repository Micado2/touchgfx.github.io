(window.webpackJsonp=window.webpackJsonp||[]).push([[905],{1041:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return h}));var a=n(1),i=n(9),r=(n(0),n(1229)),s=(n(1232),n(1238),n(1237),n(1236),n(1239),{id:"languages-and-characters",title:"Languages and Characters"}),o={id:"development/ui-development/touchgfx-engine-features/languages-and-characters",title:"Languages and Characters",description:"TouchGFX enables internationalized and localized applications.\r",source:"@site/docs\\development\\ui-development\\touchgfx-engine-features\\languages-and-characters.mdx",permalink:"/docs/next/development/ui-development/touchgfx-engine-features/languages-and-characters",version:"next",sidebar:"docs",previous:{title:"Texts and Fonts",permalink:"/docs/next/development/ui-development/touchgfx-engine-features/texts-and-fonts"},next:{title:"Button",permalink:"/docs/next/development/ui-development/ui-components/buttons/button"}},l=[{value:"Languages",id:"languages",children:[]},{value:"Characters",id:"characters",children:[]},{value:"Writing direction",id:"writing-direction",children:[]},{value:"Contextual shaping",id:"contextual-shaping",children:[]},{value:"List of Supported Languages",id:"list-of-supported-languages",children:[{value:"Left-to-Right Languages",id:"left-to-right-languages",children:[]},{value:"Right-to-Left Languages",id:"right-to-left-languages",children:[]}]},{value:"Unsupported  Languages",id:"unsupported--languages",children:[]}],c={rightToc:l},u="wrapper";function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(u,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"TouchGFX enables internationalized and localized applications."),Object(r.b)("p",null,"TouchGFX does this by supporting a wide range of languages and\ncharacters and by understanding text layout mechanisms, such as\nwriting direction and contextual shaping."),Object(r.b)("h2",{id:"languages"},"Languages"),Object(r.b)("p",null,"The languages supported are the languages of the Unicode basic\nmultilingual plane with the restriction that only Left-to-Right or\nRight-to-Left writing systems are supported. This implies that\nlanguages such as Arabic, Chinese, English and many more are\nsupported, maybe with a few limitations. Urdu and Burmese are examples\nof languages that are currently not supported."),Object(r.b)("h2",{id:"characters"},"Characters"),Object(r.b)("p",null,"The encoding of characters is based on the Unicode standard. 16-bit\nunicodes are supported, i.e. Unicodes from 0x0000 to 0xFFFF are\nsupported. Some languages may use the Private Use Area from\n0xE000-0xE3FF for special characters in a given font (e.g.\nDevanagari)."),Object(r.b)("h2",{id:"writing-direction"},"Writing direction"),Object(r.b)("p",null,"TouchGFX supports Left-to-Right (LTR) and Right-to-Left (RTL) writing\nsystems. There is no builtin support for Top-to-Bottom writing\nsystems."),Object(r.b)("p",null,'It should be noted that RTL does not mean that text is written\nbackwards (compared to LTR). It means that WORDS are written starting\nfrom the right towards the left. For Arabic and Hebrew, this is the\ncorrect setting. "TouchGFX" will not be written "XFGhcuoT" but the\ndirection of words (or collection of workds) can be controlled using\nthe RTL/LTR setting.'),Object(r.b)("p",null,'The handling of LTR and RTL writing inside TouchGFX applications\nrespects mixing of the two to some degree. This is known as\nbidirectional script support. A subset of the official rules for\nbidirectional writing is supported by TouchGFX. This means that for\nexample "10:45", "3.14159", "STMicroelectronics TouchGFX" and others\nare recognized and written fully LTR even in an RTL text.'),Object(r.b)("p",null,"For RTL text, some parts of the text must thus be written LTR. This\ntext is found and collected; all characters that are non-RTL letters\nare collected. Characters such as color (:), dot (.), comma (,), space\n(","\xa0",') will also "tie together" two consecutive LTR parts. This is\nwhat makes sure that "10:45" is handled as a single LTR entity whereas\n"Mark:" (ending in a color) will get the colon to the left as Arabic\nand Hebrew speaking countries would expect, i.e. "',"<","some Arabic\nmessage",">",' :Mark" where the colon is on the left side in the RTL\ntext.'),Object(r.b)("p",null,"Please note that numbers used in the Latin character set (0-9), as\nwell as numbers used in the Arabic character set, are all handled as\nLTR characters to make sure that numbers show up properly on the\ndisplay."),Object(r.b)("p",null,'It should also be noted that the writing direction is very important\nwhen a text contains a mix of LTR entities and RTL entities. Also\nnote, that it cannot be determined if a text is RTL or LTR by\nexamining the characters in the text. If a text contains first a\nhebrew word (RTL) and then an english word (LTR), the output on\ndisplay will depend on the writing direction of the text. If the text\nis set to be RTL the output would look something like this: "English\nwerbeH" because the entire text is RTL so the first word must be\nwritten to the far right, but if the text is set to be LTR the output\nwould look something like this: "werbeH English" because the text\nshould start with the first word at the far left. The RTL versus LTR\nsetting cannot be determined automatically because an English text may\ncontain Hebrew words, just like a Hebrew text may contain English\nwords.'),Object(r.b)("p",null,"Another important issue regarding RTL text is the automatic swapping\nof parenthesis characters. These are (, ), {, }, ","[, ]",", ","<",", ",">",". All\nthese are automatically swapped with the opposite character to ensure\nthat text looks correct. Please note that there is no automatic\nconversion from Latin numbers to Arabic numbers. This must be done by\nthe user before displaying the text, should this be desired."),Object(r.b)("h2",{id:"contextual-shaping"},"Contextual shaping"),Object(r.b)("p",null,"Certain scripts will select a different form of one or more\ncharacters/glyphs depending on the context of the character. As an\nexample the Arabic alphabet has different contextual forms for the\nletters in the alphabet, depending on the position of the letter\ninside the word. TouchGFX supports such contextual shaping of\nlanguages by implementing a simplied set of rules for combining\ncharacters. Also, some diacritics are placed using custom logic to\ndetermine the vertical position - this is particularly true for\nArabic, Thai and Devanagari."),Object(r.b)("h2",{id:"list-of-supported-languages"},"List of Supported Languages"),Object(r.b)("p",null,"It is difficult to provide an exhaustive list of all supported\nlanguages. In general, standard glyphs without special re-ordering or\npositioning rules are supported. Some languages, such as Hindi\n(Devanagari) and Arabic, with special rules have been included in\nTouchGFX."),Object(r.b)("h3",{id:"left-to-right-languages"},"Left-to-Right Languages"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Simple languages using latin characters")),Object(r.b)("p",null,"In general, simple languages using characters and glyphs that do not\nrequire special re-ordering or positioning are supported. These\nlanguages include, but is not limited to, these:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Bosnian, Bulgarian, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Hungarian, Italian, Latvian, ithuanian, Norwegian, Polish, Portuguese, Romanian, Serbian, Slovenian, Slovak, Spanish, Swedish, Turkish, Ukrainia")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Simple languages using special character sets")),Object(r.b)("p",null,"Some languages still follow simple positioning rules, but use a\ndifferent set of characters and glyphs. These are also support and\ninclude, but is not limited to, these:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Chinese, Greek, Japanese, Russian")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Other")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Thai has limited support. Tone marks are positioned (vertically) using TouchGFX rules."),Object(r.b)("li",{parentName:"ul"},"Hindi (Devanagari) has limited support. Some characters may be placed slightly wrong, but text should not be unreadable.")),Object(r.b)("h3",{id:"right-to-left-languages"},"Right-to-Left Languages"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Simple languages using special character sets")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Hebrew, Indonesian, Khazakh")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Languages with different ligatures for different forms (isolated, initial, middle, final)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Arabic (Sequences of more than four characters are not recognized and converted to one ligature. These are: Sallallahou Alayhe Wasallam, Jallajalalouhou and Rial Sign). Some diacritics may be placed slightly incorrect."),Object(r.b)("li",{parentName:"ul"},"Farsi"),Object(r.b)("li",{parentName:"ul"},'Malay (\u0762 "Keheh with dot above" only supported in isolated form)')),Object(r.b)("h2",{id:"unsupported--languages"},"Unsupported  Languages"),Object(r.b)("p",null,"The following languages are known to be unsupported because they rely\non extensive use of ligatures, digraphs and vertical positioning:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Urdu, Burmese")))}h.isMDXComponent=!0},1230:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(r.a.createElement("div",{class:e},r.a.createElement("div",{class:"highlight-heading"},r.a.createElement("h5",null,r.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(i.Component);t.a=s},1232:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?r.a.createElement("div",{class:"figure noshadow"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption)):r.a.createElement("div",{class:"figure"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=s},1236:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),s=n(1230),o=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(s.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)},t}(i.Component);t.a=l},1237:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("code",null,this.props.text)},t}(i.Component);t.a=s},1238:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.text)},t}(i.Component);t.a=s},1239:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),s=n(1230),o=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(s.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)},t}(i.Component);t.a=l}}]);