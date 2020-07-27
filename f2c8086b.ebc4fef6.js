(window.webpackJsonp=window.webpackJsonp||[]).push([[1032],{1168:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return i})),a.d(e,"rightToc",(function(){return j})),a.d(e,"default",(function(){return p}));var n=a(1),b=a(9),r=(a(0),a(1229)),c=a(1231),l=a(1233),o={title:"SingleBlockAllocator"},i={id:"version-4.14/api/classes/classtouchgfx_1_1_single_block_allocator",title:"SingleBlockAllocator",description:"This class is partial framebuffer allocator using just one block. \r",source:"@site/versioned_docs\\version-4.14\\api\\classes\\classtouchgfx_1_1_single_block_allocator.mdx",permalink:"/docs/api/classes/classtouchgfx_1_1_single_block_allocator",version:"4.14",sidebar:"version-4.14/docs",previous:{title:"ShapePoint",permalink:"/docs/api/classes/structtouchgfx_1_1_abstract_shape_1_1_shape_point"},next:{title:"SlideMenu",permalink:"/docs/api/classes/classtouchgfx_1_1_slide_menu"}},j=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_frame_buffer_allocator">FrameBufferAllocator</Link>',id:"public-functions-inherited-from-framebufferallocator",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"allocateBlock",id:"allocateblock",children:[]},{value:"freeBlockAfterTransfer",id:"freeblockaftertransfer",children:[]},{value:"getBlockForTransfer",id:"getblockfortransfer",children:[]},{value:"hasBlockReadyForTransfer",id:"hasblockreadyfortransfer",children:[]},{value:"markBlockReadyForTransfer",id:"markblockreadyfortransfer",children:[]},{value:"SingleBlockAllocator",id:"singleblockallocator",children:[]}]}],O={rightToc:j},d="wrapper";function p(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(r.b)(d,Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null," This class is partial framebuffer allocator using just one block.\nNo new buffer can be allocated until the block has been transferred to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"See"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_many_block_allocator"}),"ManyBlockAllocator")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inherits from"),":  ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator",mdxType:"Link"},"FrameBufferAllocator")),Object(r.b)("h2",{id:"public-functions"},"Public Functions"),Object(r.b)("div",{class:"function-table",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint16_t"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),"(const uint16_t x, const uint16_t y, const uint16_t width, const uint16_t height, uint8_t ** block)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allocates a framebuffer block.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Free a block after transfer to the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","const uint8_t *"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),"(",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & rect)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get the block ready for transfer.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check if a block is ready for transfer to the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Marks a previously allocated block as ready to be transferred to the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-singleblockallocator",mdxType:"Link"},"SingleBlockAllocator")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("h2",{id:"additional-inherited-members"},"Additional inherited members"),Object(r.b)("h3",{id:"public-functions-inherited-from-framebufferallocator"},"Public Functions inherited from ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator",mdxType:"Link"},"FrameBufferAllocator")),Object(r.b)("div",{class:"function-table",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"Link"},"~FrameBufferAllocator")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Finalizes an instance of the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")," class.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(r.b)(l.a,{url:"classtouchgfx_1_1_single_block_allocator#function-allocateblock",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"allocateblock"},"allocateBlock"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","uint16_t","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"const uint16_t"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"x ,"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"const uint16_t"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"y ,"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"const uint16_t"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"width ,"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"const uint16_t"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"height ,"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uint8_t **"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"block"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Allocates a framebuffer block. "),Object(r.b)("p",null,"The block will have at least the width requested. The height of the allocated block can be lower than requested if not enough memory is available. This class calls ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../namespacetouchgfx#function-framebufferallocatorwaitontransfer"}),"FrameBufferAllocatorWaitOnTransfer()")," if no block is available."),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The absolute x coordinate of the block on the screen.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"y"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The absolute y coordinate of the block on the screen.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"width"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The width of the block.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"height"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The height of the block.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"block"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pointer to pointer to return the block address in."))))),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("p",null,"The height of the allocated block. ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"Link"},"touchgfx::FrameBufferAllocator::allocateBlock")))),Object(r.b)(l.a,{url:"classtouchgfx_1_1_single_block_allocator#function-freeblockaftertransfer",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"freeblockaftertransfer"},"freeBlockAfterTransfer"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Free a block after transfer to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),". "),Object(r.b)("p",null,"Marks a previously allocated block as transferred and ready to reuse. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::freeBlockAfterTransfer")))),Object(r.b)(l.a,{url:"classtouchgfx_1_1_single_block_allocator#function-getblockfortransfer",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"getblockfortransfer"},"getBlockForTransfer"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","const uint8_t *","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rect"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Get the block ready for transfer. "),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rect"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reference to rect to write block x, y, width, and height."))))),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("p",null,"Returns the address of the block ready for transfer. ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::getBlockForTransfer")))),Object(r.b)(l.a,{url:"classtouchgfx_1_1_single_block_allocator#function-hasblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"hasblockreadyfortransfer"},"hasBlockReadyForTransfer"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Check if a block is ready for transfer to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),". "),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("p",null,"True if a block is ready for transfer. ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::hasBlockReadyForTransfer")))),Object(r.b)(l.a,{url:"classtouchgfx_1_1_single_block_allocator#function-markblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"markblockreadyfortransfer"},"markBlockReadyForTransfer"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Marks a previously allocated block as ready to be transferred to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),". "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Reimplements"),": ",Object(r.b)(c.a,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::markBlockReadyForTransfer")))),Object(r.b)(l.a,{url:"classtouchgfx_1_1_single_block_allocator#function-singleblockallocator",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"singleblockallocator"},"SingleBlockAllocator"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)(c.a,{to:"classtouchgfx_1_1_single_block_allocator#function-singleblockallocator",mdxType:"Link"},"SingleBlockAllocator")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"})))}p.isMDXComponent=!0}}]);