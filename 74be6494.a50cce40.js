(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{1230:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(r.Component);t.a=i},1232:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,a=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(r.Component);t.a=i},1234:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{class:"code-header"},o.a.createElement("div",null,o.a.createElement("h5",null,this.props.children)))},t}(r.Component);t.a=i},1239:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=a(1230),l=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)},t}(r.Component);t.a=s},631:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(9),o=(a(0),a(1229)),i=a(1232),l=a(1239),s=a(1234),c=(a(1231),{id:"06-flash-external-addressable",title:"6. External addressable flash",sidebar_label:"6. External addressable flash"}),d={id:"version-4.13/development/board-bring-up/how-to/06-flash-external-addressable",title:"6. External addressable flash",description:"## Motivation\r",source:"@site/versioned_docs\\version-4.13\\development\\board-bring-up\\how-to\\06-flash-external-addressable.mdx",permalink:"/docs/4.13/development/board-bring-up/how-to/06-flash-external-addressable",version:"4.13",sidebar_label:"6. External addressable flash",sidebar:"version-4.13/docs",previous:{title:"5. Framebuffer in external RAM",permalink:"/docs/4.13/development/board-bring-up/how-to/05-display-external"},next:{title:"7. External flash in block mode",permalink:"/docs/4.13/development/board-bring-up/how-to/07-flash-external-nonaddressable"}},h=[{value:"Motivation",id:"motivation",children:[]},{value:"Goal",id:"goal",children:[{value:"Verification",id:"verification",children:[]}]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Do",id:"do",children:[{value:"Block Mode",id:"block-mode",children:[]},{value:"Memory Mapped mode",id:"memory-mapped-mode",children:[]}]}],p={rightToc:h},m="wrapper";function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"In this step we will enable an external quad or octo SPI flash in\nmemory mapped mode. An external flash is recommended for most project as\nit allows the application to use many and large images. The internal\nflash will quickly be full even for modest applications."),Object(o.b)(l.a,{mdxType:"Note"},"Skip this step if external flash is not relevant for your board bring up."),Object(o.b)("p",null,"When data is to be placed in external flash it is important that the\nexternal flash can be read by the MCU.\nThe external flash should run at desired (typically maximum) speed to\nget the best performance."),Object(o.b)("h2",{id:"goal"},"Goal"),Object(o.b)("p",null,"The goal for this section is to enable the external flash, change it\nto memory mapped mode, and read data from it. As the read speed of the\nexternal flash is very important to graphics, you should also test the\nreading speed."),Object(o.b)("h3",{id:"verification"},"Verification"),Object(o.b)("p",null,"Here are the verification points for this section:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Verification Point"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Rationale"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"External flash is readable"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"External flash can be used for image storage")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"External flash Performance"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Graphics performance depends a lot of the performance of the image memory")))),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"The following are the prerequisites for this step:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Information about the flash, typically a datasheet"),Object(o.b)("li",{parentName:"ul"},"Information about the connections between the MCU and the external flash")),Object(o.b)("h2",{id:"do"},"Do"),Object(o.b)("p",null,"The QSPI controller is configured in CubeMX under Connectivity -> QUADSPI:"),Object(o.b)(i.a,{imageSource:"/img/development/board-bring-up/qspi/cubemx-01.png",caption:"Configuring QSPI flash",noShadow:!1,width:"600",mdxType:"Figure"}),Object(o.b)("p",null,"In the mode section you can configure the flash to single/dual/quad\ndata lines. Quad lines are the fastest. Similar to the external RAM,\nyou also here need to select and configure the GPIOs used for the data\nlines, chip select and clock signal."),Object(o.b)("h3",{id:"block-mode"},"Block Mode"),Object(o.b)("p",null,"After enabling the flash, we can test it by reading data from\nit. The Cube Firmware package contains examples for that."),Object(o.b)("h3",{id:"memory-mapped-mode"},"Memory Mapped mode"),Object(o.b)("p",null,"After enabling the flash and testing it in block mode, it is necessary\nto change it to memory mapped mode. This will allow the cpu to fetch\ndata directly from the flash."),Object(o.b)("p",null,"The STM32 Cube HAL contains functions to change to memory mapped\nmode. An example is given here. It is necessary to consult the\ndatasheet for the configuration data. The Cube Firmware package for\nyour MCU contains more examples."),Object(o.b)(s.a,{mdxType:"CodeHeader"},"main.c"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"QSPI_CommandTypeDef      s_command;\nQSPI_MemoryMappedTypeDef s_mem_mapped_cfg;\n\n/* Configure the command for the read instruction */\ns_command.InstructionMode   = QSPI_INSTRUCTION_1_LINE;\ns_command.Instruction       = QUAD_INOUT_FAST_READ_CMD;\ns_command.AddressMode       = QSPI_ADDRESS_4_LINES;\ns_command.AddressSize       = QSPI_ADDRESS_24_BITS;\ns_command.AlternateByteMode = QSPI_ALTERNATE_BYTES_NONE;\ns_command.DataMode          = QSPI_DATA_4_LINES;\ns_command.DummyCycles       = N25Q128A_DUMMY_CYCLES_READ_QUAD;\ns_command.DdrMode           = QSPI_DDR_MODE_DISABLE;\ns_command.DdrHoldHalfCycle  = QSPI_DDR_HHC_ANALOG_DELAY;\ns_command.SIOOMode          = QSPI_SIOO_INST_EVERY_CMD;\n\n/* Configure the memory mapped mode */\ns_mem_mapped_cfg.TimeOutActivation = QSPI_TIMEOUT_COUNTER_DISABLE;\n\nif (HAL_QSPI_MemoryMapped(&QSPIHandle, &s_command, &s_mem_mapped_cfg) != HAL_OK)\n{\n  return QSPI_ERROR;\n}\n")),Object(o.b)("p",null,"If you are using the same flash as one of the STM32 evaluation kits,\nthen the BSP packages for these boards (also in the Cube Firmware)\ncontains valuable examples that can be modified for your hardware."),Object(o.b)("p",null,"When the flash is in memory mapped mode, you can test it with code\nsimilar to what we used for external RAM (find the address in your MCU\ndatasheet):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"volatile uint32_t *externalFlash = 0x90000000;\nconst uint32_t size = 1000;\nvolatile uint32_t result = 0;\n\n//read external Flash\nfor(int i = 0; i < size; i++)\n{\n    result += externalFlash[i];\n}\n")),Object(o.b)("p",null,"Reuse the memory performance tests you did in earlier steps to also\ntest the performance of the external flash."))}u.isMDXComponent=!0}}]);