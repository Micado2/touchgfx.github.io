(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{167:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return d})),a.d(e,"metadata",(function(){return i})),a.d(e,"rightToc",(function(){return j})),a.d(e,"default",(function(){return o}));var n=a(1),b=a(9),r=(a(0),a(1229)),l=a(1231),c=a(1233),d={title:"FlashDataReader"},i={id:"version-4.14/api/classes/classtouchgfx_1_1_flash_data_reader",title:"FlashDataReader",description:"This class is an abstract interface for a class reading data from a flash. \r",source:"@site/versioned_docs\\version-4.14\\api\\classes\\classtouchgfx_1_1_flash_data_reader.mdx",permalink:"/docs/api/classes/classtouchgfx_1_1_flash_data_reader",version:"4.14",sidebar:"version-4.14/docs",previous:{title:"FadeAnimator",permalink:"/docs/api/classes/classtouchgfx_1_1_fade_animator"},next:{title:"Font",permalink:"/docs/api/classes/classtouchgfx_1_1_font"}},j=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"addressIsAddressable",id:"addressisaddressable",children:[]},{value:"copyData",id:"copydata",children:[]},{value:"startFlashLineRead",id:"startflashlineread",children:[]},{value:"waitFlashReadComplete",id:"waitflashreadcomplete",children:[]},{value:"~FlashDataReader",id:"flashdatareader",children:[]}]}],O={rightToc:j},s="wrapper";function o(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(r.b)(s,Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null," This class is an abstract interface for a class reading data from a flash.\nThe flash can be any type, but is mostly used for flashes that are not memory mapped. Applications must implement access to the flash through this interface. "),Object(r.b)("h2",{id:"public-functions"},"Public Functions"),Object(r.b)("div",{class:"function-table",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(l.a,{to:"classtouchgfx_1_1_flash_data_reader#function-addressisaddressable",mdxType:"Link"},"addressIsAddressable")),"(const void * address) =0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Compute if an address is directly addressable by the MCU.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(l.a,{to:"classtouchgfx_1_1_flash_data_reader#function-copydata",mdxType:"Link"},"copyData")),"(const void ",Object(r.b)("em",{parentName:"td"}," src, void ")," dst, uint32_t bytes) =0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Copy data from flash to a buffer.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(l.a,{to:"classtouchgfx_1_1_flash_data_reader#function-startflashlineread",mdxType:"Link"},"startFlashLineRead")),"(const void * src, uint32_t bytes) =0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Initiate a read operation from flash to a buffer.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0","const uint8_t *"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(l.a,{to:"classtouchgfx_1_1_flash_data_reader#function-waitflashreadcomplete",mdxType:"Link"},"waitFlashReadComplete")),"() =0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Waits until the previous startFlashLineRead operation is complete.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"virtual","\xa0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)(l.a,{to:"classtouchgfx_1_1_flash_data_reader#function-~flashdatareader",mdxType:"Link"},"~FlashDataReader")),"()")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Finalizes an instance of the ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"classtouchgfx_1_1_flash_data_reader"}),"FlashDataReader")," class.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(r.b)(c.a,{url:"classtouchgfx_1_1_flash_data_reader#function-addressisaddressable",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"addressisaddressable"},"addressIsAddressable"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",Object(r.b)(l.a,{to:"classtouchgfx_1_1_flash_data_reader#function-addressisaddressable",mdxType:"Link"},"addressIsAddressable")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"const void *"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"address"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Compute if an address is directly addressable by the MCU. "),Object(r.b)("p",null,"Compute if an address is directly addressable by the MCU. The data is addressable it should be read direct through a pointer and not through this interface."),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"address"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The address in the flash."))))),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("p",null,"True if the address is addressable by the MCU. ")))),Object(r.b)(c.a,{url:"classtouchgfx_1_1_flash_data_reader#function-copydata",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"copydata"},"copyData"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(r.b)(l.a,{to:"classtouchgfx_1_1_flash_data_reader#function-copydata",mdxType:"Link"},"copyData")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"const void *"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"src ,"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"void *"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dst ,"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uint32_t"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bytes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Copy data from flash to a buffer. "),Object(r.b)("p",null,"This must be a synchrony method that does not return until the copy is done."),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"src"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of source data in the flash.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dst"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of destination buffer in RAM.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bytes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of bytes to copy."))))))),Object(r.b)(c.a,{url:"classtouchgfx_1_1_flash_data_reader#function-startflashlineread",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"startflashlineread"},"startFlashLineRead"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",Object(r.b)(l.a,{to:"classtouchgfx_1_1_flash_data_reader#function-startflashlineread",mdxType:"Link"},"startFlashLineRead")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"const void *"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"src ,"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uint32_t"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bytes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Initiate a read operation from flash to a buffer. "),Object(r.b)("p",null,"This can be an asynchrony operation that is still running after this function returns. Buffers must be handled by the subclass. LCD16bbbSerialFlash will at most copy 4 bytes times the width of the display."),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"src"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address of source data in the flash.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bytes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of bytes to copy."))))))),Object(r.b)(c.a,{url:"classtouchgfx_1_1_flash_data_reader#function-waitflashreadcomplete",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"waitflashreadcomplete"},"waitFlashReadComplete"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0","const uint8_t *","\xa0",Object(r.b)(l.a,{to:"classtouchgfx_1_1_flash_data_reader#function-waitflashreadcomplete",mdxType:"Link"},"waitFlashReadComplete")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"=0"))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Waits until the previous startFlashLineRead operation is complete. "),Object(r.b)("p",null,"Waits until the previous startFlashLineRead operation is complete. If the startFlashLineRead method is asynchrony, this method must wait until the previous operation has completed."),Object(r.b)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),Object(r.b)("div",{class:"api-content-indented",markdown:"1"},Object(r.b)("p",null,"The address of a buffer containing the read data. ")))),Object(r.b)(c.a,{url:"classtouchgfx_1_1_flash_data_reader#function-~flashdatareader",mdxType:"DoxybookHeaderLink"}),Object(r.b)("h3",{id:"flashdatareader"},"~FlashDataReader"),Object(r.b)("div",{class:"api-container",markdown:"1"},Object(r.b)("div",{class:"api-container-header api-container-header-function",markdown:"1"},Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"virtual","\xa0",Object(r.b)(l.a,{to:"classtouchgfx_1_1_flash_data_reader#function-~flashdatareader",mdxType:"Link"},"~FlashDataReader")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"("),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})))))),Object(r.b)("div",{class:"api-container-content api-container-content-function",markdown:"1"},Object(r.b)("p",null,"Finalizes an instance of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"classtouchgfx_1_1_flash_data_reader"}),"FlashDataReader")," class. "))))}o.isMDXComponent=!0}}]);