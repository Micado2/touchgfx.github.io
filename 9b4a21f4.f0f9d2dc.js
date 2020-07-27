(window.webpackJsonp=window.webpackJsonp||[]).push([[654],{1232:function(e,t,n){"use strict";var i=n(5),a=n(0),r=n.n(a),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?r.a.createElement("div",{class:"figure noshadow"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption)):r.a.createElement("div",{class:"figure"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=s},1237:function(e,t,n){"use strict";var i=n(5),a=n(0),r=n.n(a),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return r.a.createElement("code",null,this.props.text)},t}(a.Component);t.a=s},1238:function(e,t,n){"use strict";var i=n(5),a=n(0),r=n.n(a),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.text)},t}(a.Component);t.a=s},791:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return g}));var i=n(1),a=n(9),r=(n(0),n(1229)),s=n(1232),o=n(1238),l=n(1237),c={id:"texts-view",title:"Texts View"},p={id:"version-4.13/development/ui-development/designer-user-guide/texts-view",title:"Texts View",description:"The Texts View in the TouchGFX Designer is used for configuring texts, translations and typographies in a project. The view consists of three tabs: Single Use, Resources and Typographies.\r",source:"@site/versioned_docs\\version-4.13\\development\\ui-development\\designer-user-guide\\texts-view.mdx",permalink:"/docs/4.13/development/ui-development/designer-user-guide/texts-view",version:"4.13",sidebar:"version-4.13/docs",previous:{title:"Images View",permalink:"/docs/4.13/development/ui-development/designer-user-guide/images-view"},next:{title:"Config View",permalink:"/docs/4.13/development/ui-development/designer-user-guide/config-view"}},d=[{value:"Single Use &amp; Resources",id:"single-use--resources",children:[{value:"Resource Text",id:"resource-text",children:[]},{value:"Single Use Text",id:"single-use-text",children:[]},{value:"Translations",id:"translations",children:[]},{value:"Translations Specifics",id:"translations-specifics",children:[]},{value:"Adding languages",id:"adding-languages",children:[]}]},{value:"Typographies",id:"typographies",children:[{value:"Add New Typography",id:"add-new-typography",children:[]}]}],u={rightToc:d},b="wrapper";function g(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(b,Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Texts View in the TouchGFX Designer is used for configuring texts, translations and typographies in a project. The view consists of three tabs: Single Use, Resources and Typographies."),Object(r.b)("h2",{id:"single-use--resources"},"Single Use & Resources"),Object(r.b)("p",null,"The Single Use and Resouces tabs both contain an overview of texts, they are however different from each other."),Object(r.b)("h3",{id:"resource-text"},"Resource Text"),Object(r.b)("p",null,"Resource texts can be reused on any number of widgets and actions in the TouchGFX Designer.\nTo add a new Resource texts, click the button labeled 'ADD NEW RESOURCE' in the Resources tab. One or more Resource texts can be deleted by setting a checkmark in the first column of the desired text rows and clicking the button labeled 'DELETE SELECTED RESOURCES'."),Object(r.b)(s.a,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/desinger-texts-view-resources.png",caption:"Resource texts in Texts View",mdxType:"Figure"}),Object(r.b)("h3",{id:"single-use-text"},"Single Use Text"),Object(r.b)("p",null,"Single Use texts are only used once, and cannot be used by more than one widget or action at a time. They are added automatically when used on a widget or action, are deleted automatically when the widget or action is deleted or changed to use a Resource text instead.",Object(r.b)("br",null),"\nOne or more Single Use texts can be converted to a Resource texts by setting a checkmark in the first column of the desired text rows and clicking the button labeled 'CONVERT TO RESOURCE'."),Object(r.b)("p",null,"The Single Use text overview columns labeled 'Location' and 'Widget' show which Screen/Custom Container and Widget the widget is used on."),Object(r.b)(s.a,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/desinger-texts-view-single-use.png",caption:"Single Use texts in Texts View",mdxType:"Figure"}),Object(r.b)("h3",{id:"translations"},"Translations"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Typography:"),Object(r.b)("br",null),"\nSpecifies which typography the text and all its translations should use as default. These can be added and configured in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"#typographies"}),"Typographies")," tab"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Alignment:"),Object(r.b)("br",null),"\nSpecifies the default horizontal alignment of the text and all its translations should use as default. Possible values are Left, Right, and Center."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Direction:"),Object(r.b)("br",null),"\nSpecifies the default text direction of the text and all its translations should use as default. Possible values are LTR (Left-to-Right) and RTL (Right-to-Left), the default being LTR. The RTL option is primarily used for Arabic, Hebrew or other languages written from right to left."),Object(r.b)("h3",{id:"translations-specifics"},"Translations Specifics"),Object(r.b)("p",null,"Each translation can overwrite the default Typography, Alignment and Direction, to reveal these controls, simply hover the mouse cursor over a translation."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Translation Specific Typography:"),Object(r.b)("br",null),"\nSetting a translation specific typography is easily done through the inline Typography selector, as shown in the figure below."),Object(r.b)(s.a,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/desinger-texts-view-translation-specific-typography.png",caption:"How to set Translation Specific Typography",mdxType:"Figure"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Translation Specific Alignment:"),Object(r.b)("br",null),"\nSetting a translation specific alignment is easily done through the inline Alignment selector, as shown in the figure below."),Object(r.b)(s.a,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/desinger-texts-view-translation-specific-alignment.png",caption:"How to set Translation Specific Alignment",mdxType:"Figure"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Translation Specific Direction:"),Object(r.b)("br",null),"\nSetting a translation specific direction is easily done through the inline Direction selector, as shown in the figure below."),Object(r.b)(s.a,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/desinger-texts-view-translation-specific-direction.png",caption:"How to set Translation Specific Direction",mdxType:"Figure"}),Object(r.b)("h3",{id:"adding-languages"},"Adding languages"),Object(r.b)("p",null,"To add a new language, simply press the button labeled 'ADD NEW LANGUAGE' and the popup in the figure below will appear, where the name of the language can be configured, and whether or not to use the translations from another language."),Object(r.b)(s.a,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/desinger-texts-view-add-new-language-popup.png",caption:"Add New Language popup",mdxType:"Figure"}),Object(r.b)("h2",{id:"typographies"},"Typographies"),Object(r.b)("p",null,"In the Typographies tab an overview of all typographies in a project can be found, as shown in the figure below."),Object(r.b)(s.a,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/desinger-texts-view-typographies.png",caption:"Texts view in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("p",null,"One or more Typographies can be deleted by setting a checkmark in the first column of the desired typography rows and clicking the button labeled 'DELETE SELECTED TYPOGRAPHIES'."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Uses:"),Object(r.b)("br",null),"\nThe number of times the typography has been used in texts"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Typography Name:"),Object(r.b)("br",null),"\nThe name of the typography, which can be referenced in code."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Font:"),Object(r.b)("br",null),"\nThe name of the font to use for the given typography.",Object(r.b)("br",null),"\nYou can choose between all installed fonts in Windows, or add your own fonts in the ",Object(r.b)(l.a,{text:"assets/fonts",mdxType:"InlineCode"})," folder. ",Object(r.b)(o.a,{text:"When adding fonts to this folder, the TouchGFX Designer needs to be restarted to load them.",mdxType:"InlineNote"})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Size:"),Object(r.b)("br",null),"\nThe font size of the typography."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Bpp:"),Object(r.b)("br",null),"\nBits per pixel. The number of bits that are used per pixel to represent the font. Legal values are 1, 2, 4, 8."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Fallback Character:"),Object(r.b)("br",null),"\nIf TouchGFX needs to render a character, but the glyph is unavailable, the character specified in this column is used. Value can be a single character, a unicode value ",Object(r.b)(o.a,{text:"(in decimal or hexadecimal e.g. 0xABCD)",mdxType:"InlineNote"}),", the special keyword 'skip' or simply blank."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Wildcard Characters:"),Object(r.b)("br",null),'\nCharacters that should be available to display in the TouchGFX application. This is recommended over using a dummy text. A dummy text will generate all glyphs, but also the actual string (e.g. "0123456789-"). Putting "0123456789-" in this column will generate the glyphs, but not a string.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Widget Wildcard Characters:"),Object(r.b)("br",null),"\nThese are characters that some widgets that require a wildcard will add, the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"../ui-components/miscellaneous/digital-clock"}),"Digital Clock"),' widget will add "0123456789 :APM" to this field.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Wildcard Ranges:"),Object(r.b)("br",null),'\nThis is similar to Wildcard Characters, but ranges can easily be specified, e.g. "0-9,A-F" will be the same as putting "0123456789ABCDEF" in the Wildcard Characters column. Ranges can also be specified as numbers, so for example "0-9" can also be specified as "48-57" or "0x30-0x39". Please note that the quotes should not be entered.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Ellipsis Character:"),Object(r.b)("br",null),"\nThis character is used to truncate long text in text areas."),Object(r.b)("h3",{id:"add-new-typography"},"Add New Typography"),Object(r.b)("p",null,"To add a new typography, simply press the button labeled 'ADD NEW TYPOGRAPHY' and the popup in the figure below will appear, where the name of the typography, font, size and color depth can be configured."),Object(r.b)(s.a,{imageSource:"/img/development/ui-development/designer-user-guide/texts-view/desinger-texts-view-add-new-typography-popup.png",caption:"Add New Typography popup",mdxType:"Figure"}))}g.isMDXComponent=!0}}]);