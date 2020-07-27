(window.webpackJsonp=window.webpackJsonp||[]).push([[1054],{1190:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return i})),a.d(e,"rightToc",(function(){return j})),a.d(e,"default",(function(){return u}));var n=a(1),b=a(9),r=(a(0),a(1229)),c=a(1231),l=a(1233),o={title:"FrameBufferAllocator"},i={id:"version-4.13/api/classes/classtouchgfx_1_1_frame_buffer_allocator",title:"FrameBufferAllocator",description:"This class is an abstract interface for a class allocating partial framebuffer blocks. \r",source:"@site/versioned_docs\\version-4.13\\api\\classes\\classtouchgfx_1_1_frame_buffer_allocator.mdx",permalink:"/docs/4.13/api/classes/classtouchgfx_1_1_frame_buffer_allocator",version:"4.13",sidebar:"version-4.13/docs",previous:{title:"FontProvider",permalink:"/docs/4.13/api/classes/classtouchgfx_1_1_font_provider"},next:{title:"FullSolidRect",permalink:"/docs/4.13/api/classes/classtouchgfx_1_1_cover_transition_1_1_full_solid_rect"}},j=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"allocateBlock",id:"allocateblock",children:[]},{value:"freeBlockAfterTransfer",id:"freeblockaftertransfer",children:[]},{value:"getBlockForTransfer",id:"getblockfortransfer",children:[]},{value:"hasBlockReadyForTransfer",id:"hasblockreadyfortransfer",children:[]},{value:"markBlockReadyForTransfer",id:"markblockreadyfortransfer",children:[]},{value:"~FrameBufferAllocator",id:"framebufferallocator",children:[]}]}],O={rightToc:j},d="wrapper";function u(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(r.b)(d,Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null," This class is an abstract interface for a class allocating partial framebuffer blocks.\nThe interface must be implemented by a subclass."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"See"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_single_block_allocator"}),"SingleBlockAllocator"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_many_block_allocator"}),"ManyBlockAllocator")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherited by"),":  ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_many_block_allocator",mdxType:"Link"},"ManyBlockAllocator","<"," block_size, blocks, bytes_pr_pixel ",">"),",  ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator",mdxType:"Link"},"SingleBlockAllocator","<"," block_size, bytes_pr_pixel ",">")),Object(r.b)("h2",{id:"public-functions"},"Public Functions"),Object(r.b)("div",{class:"function-table",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint16_t"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),"(const uint16_t x, const uint16_t y, const uint16_t width, const uint16_t height, uint8_t ** block) =0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allocates a framebuffer block.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),"() =0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Free a block after transfer to the LCD.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","const uint8_t *"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),"(",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & rect) =0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get the block ready for transfer.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),"() =0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check if a block is ready for transfer to the LCD.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),"() =0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Marks a previously allocated block as ready to be transferred to the LCD.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"Link"},"~FrameBufferAllocator")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Finalizes an instance of the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")," class.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(r.b)(l.a,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"allocateblock"},"allocateBlock"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","uint16_t","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"const uint16_t"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"x ,"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"const uint16_t"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"y ,"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"const uint16_t"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"width ,"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"const uint16_t"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"height ,"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uint8_t **"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"block"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Allocates a framebuffer block. "),Object(r.b)("p",null,"The block will have at least the width requested. The height of the allocated block can be lower than requested if not enough memory is available."),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The absolute x coordinate of the block on the screen.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"y"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The absolute y coordinate of the block on the screen.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"width"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The width of the block.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"height"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The height of the block.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"block"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pointer to pointer to return the block address in."))))),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("p",null,"The height of the allocated block. ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-allocateblock",mdxType:"Link"},"touchgfx::SingleBlockAllocator::allocateBlock"),", ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_many_block_allocator#function-allocateblock",mdxType:"Link"},"touchgfx::ManyBlockAllocator::allocateBlock")))),Object(r.b)(l.a,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"freeblockaftertransfer"},"freeBlockAfterTransfer"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0"))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Free a block after transfer to the LCD. "),Object(r.b)("p",null,"Marks a previously allocated block as transferred and ready to reuse. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"touchgfx::SingleBlockAllocator::freeBlockAfterTransfer"),", ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_many_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::freeBlockAfterTransfer")))),Object(r.b)(l.a,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"getblockfortransfer"},"getBlockForTransfer"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","const uint8_t *","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rect"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Get the block ready for transfer. "),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rect"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reference to rect to write block x, y, width, and height."))))),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("p",null,"Returns the address of the block ready for transfer. ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-getblockfortransfer",mdxType:"Link"},"touchgfx::SingleBlockAllocator::getBlockForTransfer"),", ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_many_block_allocator#function-getblockfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::getBlockForTransfer")))),Object(r.b)(l.a,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"hasblockreadyfortransfer"},"hasBlockReadyForTransfer"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0"))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Check if a block is ready for transfer to the LCD. "),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("p",null,"True if a block is ready for transfer. ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"touchgfx::SingleBlockAllocator::hasBlockReadyForTransfer"),", ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::hasBlockReadyForTransfer")))),Object(r.b)(l.a,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"markblockreadyfortransfer"},"markBlockReadyForTransfer"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0"))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Marks a previously allocated block as ready to be transferred to the LCD. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplemented by"),": ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"touchgfx::SingleBlockAllocator::markBlockReadyForTransfer"),", ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_many_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"touchgfx::ManyBlockAllocator::markBlockReadyForTransfer")))),Object(r.b)(l.a,{url:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"framebufferallocator"},"~FrameBufferAllocator"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"Link"},"~FrameBufferAllocator")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Finalizes an instance of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")," class. "))))}u.isMDXComponent=!0}}]);