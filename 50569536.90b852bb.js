(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{268:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return i})),a.d(e,"metadata",(function(){return j})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return p}));var c=a(1),n=a(9),b=(a(0),a(508)),l=a(510),r=a(512),i={title:"Callback"},j={id:"api/classes/structtouchgfx_1_1_callback",title:"Callback",description:"A Callback is basically a wrapper of a pointer-to-member-function. \r",source:"@site/docs\\api\\classes\\structtouchgfx_1_1_callback.mdx",permalink:"/docs/api/classes/structtouchgfx_1_1_callback",sidebar:"docs",previous:{title:"CacheTableEntry",permalink:"/docs/api/classes/structtouchgfx_1_1_bitmap_1_1_cache_table_entry"},next:{title:"Callback<dest_type,T1,T2,void>",permalink:"/docs/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01_t2_00_01void_01_4"}},O=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="/docs/api/classes/classtouchgfx_1_1_generic_callback">touchgfx::GenericCallback&lt; T1, T2, T3 &gt;</Link>',id:"public-functions-inherited-from-touchgfxgenericcallback-t1-t2-t3-",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"Callback",id:"callback",children:[]},{value:"Callback",id:"callback-1",children:[]},{value:"execute",id:"execute",children:[]},{value:"isValid",id:"isvalid",children:[]}]}],o={rightToc:O},d="wrapper";function p(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(b.b)(d,Object(c.a)({},o,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null," A Callback is basically a wrapper of a pointer-to-member-function.\nIt is used for registering callbacks between widgets. For instance, a ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/classes/classtouchgfx_1_1_button"}),"Button")," can be configured to call a member function when it is clicked."),Object(b.b)("p",null,"The class is templated in order to provide the class type of the object in which the member function resides, and the argument types of the function to call."),Object(b.b)("p",null,"The ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/classes/structtouchgfx_1_1_callback"}),"Callback")," class exists in four versions, for supporting member functions with 0, 1, 2 or 3 arguments. The compiler will infer which type to use automatically."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Template Parameters"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"dest_type")," The type of the class in which the member function resides. "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"T1")," The type of the first argument in the member function, or void if none. "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"T2")," The type of the second argument in the member function, or void if none. "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"T3")," The type of the third argument in the member function, or void if none.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note"),": The member function to call must return void. The function can have zero, one, two or three arguments of any type. "),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Inherits from"),":  ",Object(b.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_generic_callback",mdxType:"Link"},"touchgfx::GenericCallback","<"," T1, T2, T3 ",">")),Object(b.b)("h2",{id:"public-functions"},"Public Functions"),Object(b.b)("div",{class:"function-table",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)(l.a,{to:"/docs/api/classes/structtouchgfx_1_1_callback#function-callback",mdxType:"Link"},"Callback")),"()")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Initializes a new instance of the ",Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/classes/structtouchgfx_1_1_callback"}),"Callback")," class.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)(l.a,{to:"/docs/api/classes/structtouchgfx_1_1_callback#function-callback",mdxType:"Link"},"Callback")),"(dest_type ",Object(b.b)("em",{parentName:"td"}," pobject, void(dest_type::"),")(T1, T2, T3) pmemfun_3)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Initializes a ",Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/classes/structtouchgfx_1_1_callback"}),"Callback")," with an object and a pointer to the member function in that object to call.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)(l.a,{to:"/docs/api/classes/structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"execute")),"(T1 t1, T2 t2, T3 t3)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Calls the member function.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)(l.a,{to:"/docs/api/classes/structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"isValid")),"() const")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Function to check whether the ",Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/classes/structtouchgfx_1_1_callback"}),"Callback")," has been initialized with values.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})))))),Object(b.b)("h2",{id:"additional-inherited-members"},"Additional inherited members"),Object(b.b)("h3",{id:"public-functions-inherited-from-touchgfxgenericcallback-t1-t2-t3-"},"Public Functions inherited from ",Object(b.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_generic_callback",mdxType:"Link"},"touchgfx::GenericCallback","<"," T1, T2, T3 ",">")),Object(b.b)("div",{class:"function-table",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_generic_callback#function-~genericcallback",mdxType:"Link"},"~GenericCallback")),"()")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Finalizes an instance of the ",Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/api/classes/classtouchgfx_1_1_generic_callback"}),"GenericCallback")," class.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"right"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})))))),Object(b.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(b.b)(r.a,{url:"/docs/api/classes/structtouchgfx_1_1_callback#function-callback",mdxType:"DoxybookHeaderLink"}),Object(b.b)("h3",{id:"callback"},"Callback"),Object(b.b)("div",{class:"api-container",markdown:"1"},Object(b.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)(l.a,{to:"/docs/api/classes/structtouchgfx_1_1_callback#function-callback",mdxType:"Link"},"Callback")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"("),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),")"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})))))),Object(b.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(b.b)("p",null,"Initializes a new instance of the ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/classes/structtouchgfx_1_1_callback"}),"Callback")," class. "))),Object(b.b)(r.a,{url:"/docs/api/classes/structtouchgfx_1_1_callback#function-callback",mdxType:"DoxybookHeaderLink"}),Object(b.b)("h3",{id:"callback-1"},"Callback"),Object(b.b)("div",{class:"api-container",markdown:"1"},Object(b.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)(l.a,{to:"/docs/api/classes/structtouchgfx_1_1_callback#function-callback",mdxType:"Link"},"Callback")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"("),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"dest_type *"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"pobject ,"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"void(dest_type::*)(T1, T2, T3)"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"pmemfun_3"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),")"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})))))),Object(b.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(b.b)("p",null,"Initializes a ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/classes/structtouchgfx_1_1_callback"}),"Callback")," with an object and a pointer to the member function in that object to call. "),Object(b.b)("p",null,"Initializes a ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/classes/structtouchgfx_1_1_callback"}),"Callback")," with an object and a pointer to the member function in that object to call."),Object(b.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(b.b)("div",{class:"api-content-indented",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"pobject"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Pointer to the object on which the function should be called.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"pmemfun_3"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Address of member function. This is the version where function takes three arguments."))))))),Object(b.b)(r.a,{url:"/docs/api/classes/structtouchgfx_1_1_callback#function-execute",mdxType:"DoxybookHeaderLink"}),Object(b.b)("h3",{id:"execute"},"execute"),Object(b.b)("div",{class:"api-container",markdown:"1"},Object(b.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(b.b)(l.a,{to:"/docs/api/classes/structtouchgfx_1_1_callback#function-execute",mdxType:"Link"},"execute")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"("),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"T1"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"t1 ,"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"T2"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"t2 ,"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"T3"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"t3"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),")"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})))))),Object(b.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(b.b)("p",null,"Calls the member function. "),Object(b.b)("p",null,"Do not call execute unless ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/classes/structtouchgfx_1_1_callback#function-isvalid"}),"isValid()")," returns true (ie. a pointer to the object and the function has been set)."),Object(b.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(b.b)("div",{class:"api-content-indented",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"t1"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"This value will be passed as the first argument in the function call.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"t2"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"This value will be passed as the second argument in the function call.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"t3"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"This value will be passed as the third argument in the function call."))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(b.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_generic_callback#function-execute",mdxType:"Link"},"touchgfx::GenericCallback::execute")))),Object(b.b)(r.a,{url:"/docs/api/classes/structtouchgfx_1_1_callback#function-isvalid",mdxType:"DoxybookHeaderLink"}),Object(b.b)("h3",{id:"isvalid"},"isValid"),Object(b.b)("div",{class:"api-container",markdown:"1"},Object(b.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",Object(b.b)(l.a,{to:"/docs/api/classes/structtouchgfx_1_1_callback#function-isvalid",mdxType:"Link"},"isValid")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"("),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),")"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"const"))))),Object(b.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(b.b)("p",null,"Function to check whether the ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/api/classes/structtouchgfx_1_1_callback"}),"Callback")," has been initialized with values. "),Object(b.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(b.b)("div",{class:"api-content-indented",markdown:"1"},Object(b.b)("p",null,"true If the callback is valid (i.e. safe to call execute). ")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(b.b)(l.a,{to:"/docs/api/classes/classtouchgfx_1_1_generic_callback#function-isvalid",mdxType:"Link"},"touchgfx::GenericCallback::isValid")))))}p.isMDXComponent=!0}}]);