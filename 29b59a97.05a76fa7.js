(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{309:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return d})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return m}));var b=a(1),n=a(9),r=(a(0),a(1229)),l=a(1231),c=a(1233),i={title:"DrawableListItems"},d={id:"api/classes/classtouchgfx_1_1_drawable_list_items",title:"DrawableListItems",description:"An array of drawables used by [DrawableList](classtouchgfx_1_1_drawable_list). \r",source:"@site/docs\\api\\classes\\classtouchgfx_1_1_drawable_list_items.mdx",permalink:"/docs/next/api/classes/classtouchgfx_1_1_drawable_list_items",version:"next",sidebar:"docs",previous:{title:"DrawableList",permalink:"/docs/next/api/classes/classtouchgfx_1_1_drawable_list"},next:{title:"DrawableListItemsInterface",permalink:"/docs/next/api/classes/classtouchgfx_1_1_drawable_list_items_interface"}},O=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_drawable_list_items_interface">DrawableListItemsInterface</Link>',id:"public-functions-inherited-from-drawablelistitemsinterface",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"getDrawable",id:"getdrawable",children:[]},{value:"getNumberOfDrawables",id:"getnumberofdrawables",children:[]},{value:"operator[]",id:"operator",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"element",id:"element",children:[]}]}],j={rightToc:O},s="wrapper";function m(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(r.b)(s,Object(b.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null," An array of drawables used by ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"classtouchgfx_1_1_drawable_list"}),"DrawableList"),".\nThis class is used to ease the setup of a callback function to get access to a specific drawable in the array."),Object(r.b)("p",null,"Example usage: "),Object(r.b)("pre",null,Object(r.b)("code",Object(b.a)({parentName:"pre"},{className:"language-cpp"}),"static const int NUMBER_OF_DRAWABLES = 5;\nDrawableListItems<TextAreaWithOneWildcardContainer, NUMBER_OF_DRAWABLES> menuItems;\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Template Parameters"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"TYPE")," Type of the drawables. Can be a simple drawable, such as ",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"classtouchgfx_1_1_image"}),"Image")," or a more complex container. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"SIZE")," Size of the array. This is the number of drawables to allocate and should be all visible drawables on the screen at any given time. ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),":  ",Object(r.b)(l.a,{to:"classtouchgfx_1_1_drawable_list_items_interface",mdxType:"Link"},"DrawableListItemsInterface")),Object(r.b)("h2",{id:"public-functions"},"Public Functions"),Object(r.b)("div",{class:"function-table",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"right"})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," *"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(l.a,{to:"classtouchgfx_1_1_drawable_list_items#function-getdrawable",mdxType:"Link"},"getDrawable")),"(int16_t index)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Gets a drawable at a given index.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","int16_t"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(l.a,{to:"classtouchgfx_1_1_drawable_list_items#function-getnumberofdrawables",mdxType:"Link"},"getNumberOfDrawables")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Gets number of drawables.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"}),"TYPE &"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(l.a,{to:"classtouchgfx_1_1_drawable_list_items#function-operator[]",mdxType:"Link"},"operator[]")),"(int index)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Array indexer operator.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(r.b)("h2",{id:"public-attributes"},"Public Attributes"),Object(r.b)("div",{class:"function-table",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"right"})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"}),"TYPE"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(l.a,{to:"classtouchgfx_1_1_drawable_list_items#variable-element",mdxType:"Link"},"element")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The array of drawables.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(r.b)("h2",{id:"additional-inherited-members"},"Additional inherited members"),Object(r.b)("h3",{id:"public-functions-inherited-from-drawablelistitemsinterface"},"Public Functions inherited from ",Object(r.b)(l.a,{to:"classtouchgfx_1_1_drawable_list_items_interface",mdxType:"Link"},"DrawableListItemsInterface")),Object(r.b)("div",{class:"function-table",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"right"})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(l.a,{to:"classtouchgfx_1_1_drawable_list_items_interface#function-~drawablelistitemsinterface",mdxType:"Link"},"~DrawableListItemsInterface")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Finalizes an instance of the ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"classtouchgfx_1_1_drawable_list_items_interface"}),"DrawableListItemsInterface")," class.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(r.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(r.b)(c.a,{url:"classtouchgfx_1_1_drawable_list_items#function-getdrawable",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"getdrawable"},"getDrawable"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"virtual","\xa0","Drawable *","\xa0",Object(r.b)(l.a,{to:"classtouchgfx_1_1_drawable_list_items#function-getdrawable",mdxType:"Link"},"getDrawable")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"int16_t"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"index"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Gets a drawable at a given index. "),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"index"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Zero-based index of the drawable."))))),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("p",null,"Null if it fails, else the drawable. ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(r.b)(l.a,{to:"classtouchgfx_1_1_drawable_list_items_interface#function-getdrawable",mdxType:"Link"},"touchgfx::DrawableListItemsInterface::getDrawable")))),Object(r.b)(c.a,{url:"classtouchgfx_1_1_drawable_list_items#function-getnumberofdrawables",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"getnumberofdrawables"},"getNumberOfDrawables"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"virtual","\xa0","int16_t","\xa0",Object(r.b)(l.a,{to:"classtouchgfx_1_1_drawable_list_items#function-getnumberofdrawables",mdxType:"Link"},"getNumberOfDrawables")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Gets number of drawables. "),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("p",null,"The number of drawables. ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(r.b)(l.a,{to:"classtouchgfx_1_1_drawable_list_items_interface#function-getnumberofdrawables",mdxType:"Link"},"touchgfx::DrawableListItemsInterface::getNumberOfDrawables")))),Object(r.b)(c.a,{url:"classtouchgfx_1_1_drawable_list_items#function-operator[]",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"operator"},"operator[]"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TYPE &","\xa0",Object(r.b)(l.a,{to:"classtouchgfx_1_1_drawable_list_items#function-operator[]",mdxType:"Link"},"operator[]")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"int"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"index"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Array indexer operator. "),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"index"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Zero-based index of elements to access."))))),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("p",null,"The indexed value. ")))),Object(r.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(r.b)(c.a,{url:"classtouchgfx_1_1_drawable_list_items#variable-element",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"element"},"element"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},Object(r.b)("p",null,"TYPE element ")),Object(r.b)("div",{class:"api-container-content",markdown:"1"},Object(r.b)("p",null,"The array of drawables. "))))}m.isMDXComponent=!0}}]);