(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{453:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return o})),a.d(e,"rightToc",(function(){return j})),a.d(e,"default",(function(){return s}));var n=a(1),b=a(9),r=(a(0),a(1229)),c=a(1231),i=a(1233),l={title:"SlideTransition"},o={id:"version-4.13/api/classes/classtouchgfx_1_1_slide_transition",title:"SlideTransition",description:"A Transition that slides from one screen to the next. \r",source:"@site/versioned_docs\\version-4.13\\api\\classes\\classtouchgfx_1_1_slide_transition.mdx",permalink:"/docs/4.13/api/classes/classtouchgfx_1_1_slide_transition",version:"4.13",sidebar:"version-4.13/docs",previous:{title:"Slider",permalink:"/docs/4.13/api/classes/classtouchgfx_1_1_slider"},next:{title:"Snapper",permalink:"/docs/4.13/api/classes/classtouchgfx_1_1_snapper"}},j=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Protected Functions",id:"protected-functions",children:[]},{value:"Protected Attributes",id:"protected-attributes",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_transition">Transition</Link>',id:"public-functions-inherited-from-transition",children:[]},{value:'Protected Attributes inherited from <Link to="classtouchgfx_1_1_transition">Transition</Link>',id:"protected-attributes-inherited-from-transition",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"handleTickEvent",id:"handletickevent",children:[]},{value:"init",id:"init",children:[]},{value:"SlideTransition",id:"slidetransition",children:[]},{value:"tearDown",id:"teardown",children:[]},{value:"~SlideTransition",id:"slidetransition-1",children:[]}]},{value:"Protected Functions Documentation",id:"protected-functions-documentation",children:[{value:"initMoveDrawable",id:"initmovedrawable",children:[]},{value:"tickMoveDrawable",id:"tickmovedrawable",children:[]}]},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",children:[{value:"snapshot",id:"snapshot",children:[]},{value:"snapshotPtr",id:"snapshotptr",children:[]}]}],O={rightToc:j},d="wrapper";function s(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(r.b)(d,Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null," A Transition that slides from one screen to the next.\nIt does so by moving a SnapShotWidget with a snapshot of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen")," transitioning away from, and by moving the contents of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen")," transitioning to."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"See"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_transition"}),"Transition")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),":  ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_transition",mdxType:"Link"},"Transition")),Object(r.b)("h2",{id:"public-functions"},"Public Functions"),Object(r.b)("div",{class:"function-table",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-handletickevent",mdxType:"Link"},"handleTickEvent")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Handles the tick event when transitioning.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-init",mdxType:"Link"},"init")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Initializes the transition.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-slidetransition",mdxType:"Link"},"SlideTransition")),"(const uint8_t transitionSteps =20)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Initializes a new instance of the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_slide_transition"}),"SlideTransition")," class.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-teardown",mdxType:"Link"},"tearDown")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tears down the Animation.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-~slidetransition",mdxType:"Link"},"~SlideTransition")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("h2",{id:"protected-functions"},"Protected Functions"),Object(r.b)("div",{class:"function-table",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-initmovedrawable",mdxType:"Link"},"initMoveDrawable")),"(",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," & d)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," to its initial position, just outside the actual display.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-tickmovedrawable",mdxType:"Link"},"tickMoveDrawable")),"(",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," & d)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Moves the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("h2",{id:"protected-attributes"},"Protected Attributes"),Object(r.b)("div",{class:"function-table",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_snapshot_widget"}),"SnapshotWidget")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#variable-snapshot",mdxType:"Link"},"snapshot")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The SnapshotWidget that is moved when transitioning.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_snapshot_widget"}),"SnapshotWidget")," *"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#variable-snapshotptr",mdxType:"Link"},"snapshotPtr")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pointer pointing to the snapshot used in this transition.The snapshot pointer.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("h2",{id:"additional-inherited-members"},"Additional inherited members"),Object(r.b)("h3",{id:"public-functions-inherited-from-transition"},"Public Functions inherited from ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_transition",mdxType:"Link"},"Transition")),Object(r.b)("div",{class:"function-table",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_transition#function-isdone",mdxType:"Link"},"isDone")),"() const")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Query if the transition is done transitioning.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_transition#function-setscreencontainer",mdxType:"Link"},"setScreenContainer")),"(",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," & cont)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen"),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_transition#function-transition",mdxType:"Link"},"Transition")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Initializes a new instance of the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_transition#function-~transition",mdxType:"Link"},"~Transition")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Finalizes an instance of the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_transition"}),"Transition")," class.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("h3",{id:"protected-attributes-inherited-from-transition"},"Protected Attributes inherited from ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_transition",mdxType:"Link"},"Transition")),Object(r.b)("div",{class:"function-table",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_transition#variable-done",mdxType:"Link"},"done")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Flag that indicates when the transition is done. This should be set by implementing classes.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," *"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_transition#variable-screencontainer",mdxType:"Link"},"screenContainer")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The screen ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_container"}),"Container")," of the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_screen"}),"Screen")," transitioning to.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(r.b)(i.a,{url:"classtouchgfx_1_1_slide_transition#function-handletickevent",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"handletickevent"},"handleTickEvent"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-handletickevent",mdxType:"Link"},"handleTickEvent")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Handles the tick event when transitioning. "),Object(r.b)("p",null,"It moves the contents of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen"),"'s container and a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_snapshot_widget"}),"SnapshotWidget")," with a snapshot of the previous ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_screen"}),"Screen"),". The direction of the transition determines the direction the contents of the container and the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_snapshot_widget"}),"SnapshotWidget")," moves. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_transition#function-handletickevent",mdxType:"Link"},"touchgfx::Transition::handleTickEvent")))),Object(r.b)(i.a,{url:"classtouchgfx_1_1_slide_transition#function-init",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"init"},"init"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-init",mdxType:"Link"},"init")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Initializes the transition. "),Object(r.b)("p",null,"Called after the constructor is called, when the application changes the transition. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_transition#function-init",mdxType:"Link"},"touchgfx::Transition::init")))),Object(r.b)(i.a,{url:"classtouchgfx_1_1_slide_transition#function-slidetransition",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"slidetransition"},"SlideTransition"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-slidetransition",mdxType:"Link"},"SlideTransition")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"const uint8_t"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"transitionSteps  =20"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Initializes a new instance of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_slide_transition"}),"SlideTransition")," class. "),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"transitionSteps"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(Optional) Number of steps (ticks) in the transition animation, default is 20."))))))),Object(r.b)(i.a,{url:"classtouchgfx_1_1_slide_transition#function-teardown",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"teardown"},"tearDown"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-teardown",mdxType:"Link"},"tearDown")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Tears down the Animation. "),Object(r.b)("p",null,"Called before the destructor is called, when the application changes the transition. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_transition#function-teardown",mdxType:"Link"},"touchgfx::Transition::tearDown")))),Object(r.b)(i.a,{url:"classtouchgfx_1_1_slide_transition#function-~slidetransition",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"slidetransition-1"},"~SlideTransition"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-~slidetransition",mdxType:"Link"},"~SlideTransition")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"})),Object(r.b)("h2",{id:"protected-functions-documentation"},"Protected Functions Documentation"),Object(r.b)(i.a,{url:"classtouchgfx_1_1_slide_transition#function-initmovedrawable",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"initmovedrawable"},"initMoveDrawable"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-initmovedrawable",mdxType:"Link"},"initMoveDrawable")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," &"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"d"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Moves the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," to its initial position, just outside the actual display. "),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"d"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," to move."))))))),Object(r.b)(i.a,{url:"classtouchgfx_1_1_slide_transition#function-tickmovedrawable",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"tickmovedrawable"},"tickMoveDrawable"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_slide_transition#function-tickmovedrawable",mdxType:"Link"},"tickMoveDrawable")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," &"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"d"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Moves the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_drawable"}),"Drawable"),". "),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"d"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_drawable"}),"Drawable")," to move."))))))),Object(r.b)("h2",{id:"protected-attributes-documentation"},"Protected Attributes Documentation"),Object(r.b)(i.a,{url:"classtouchgfx_1_1_slide_transition#variable-snapshot",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"snapshot"},"snapshot"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_snapshot_widget"}),"SnapshotWidget")," snapshot ")),Object(r.b)("div",{class:"api-container-content",markdown:"1"},Object(r.b)("p",null,"The SnapshotWidget that is moved when transitioning. "))),Object(r.b)(i.a,{url:"classtouchgfx_1_1_slide_transition#variable-snapshotptr",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"snapshotptr"},"snapshotPtr"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_snapshot_widget"}),"SnapshotWidget")," * snapshotPtr ")),Object(r.b)("div",{class:"api-container-content",markdown:"1"},Object(r.b)("p",null,"Pointer pointing to the snapshot used in this transition.The snapshot pointer. "))))}s.isMDXComponent=!0}}]);