(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return h}));var o=n(1),i=n(9),a=(n(0),n(257)),r=n(258),c=(n(271),n(269)),l=(n(272),{id:"BoardExGPIO",title:"External events as triggers"}),s={id:"Development/BoardBringUp/BoardExGPIO",title:"External events as triggers",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Development\\BoardBringUp\\Example_GPIO.mdx",permalink:"/docs/Development/BoardBringUp/BoardExGPIO",sidebar:"docs",previous:{title:"SPI",permalink:"/docs/Development/TouchGFXHALDevelopment/scenarios/TouchGFXHALDevelopmentScenariosSPI"},next:{title:"Introduction",permalink:"/docs/Development/UIDevelopment/UIDevelopmentIntroduction"}},u=[{value:"Board Bringup",id:"board-bringup",children:[]},{value:"TouchGFX HAL Development",id:"touchgfx-hal-development",children:[]},{value:"TouchGFX Designer",id:"touchgfx-designer",children:[]},{value:"Running on target",id:"running-on-target",children:[]},{value:"Links",id:"links",children:[]}],p={rightToc:u},d="wrapper";function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(d,Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section describes how to use external events, such as physical buttons, as triggers in TouchGFX Designer."),Object(a.b)("p",null,"Application requirements to respond to input from peripherals, such as physical buttons, requires that GPIO pins on the MCU are configured in accordance with board schematics."),Object(a.b)("p",null,"In this example the H7B3I-DK is used to show how to make the UI react to the press of a physical button. This example uses polling, EXTI could be used instead - Show how? EXTI_15_10_handler."),Object(a.b)(r.a,{imageSource:"/img/Development/BoardBringUp/GPIO/STM32H7B3I-DK_front.png",noShadow:!0,mdxType:"Figure"}),Object(a.b)("p",null,"The schematic can be downloaded here at:"),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#"}),"st.com")),Object(a.b)(c.a,{mdxType:"Tip"},"If a GPIO pin is readable it is usable as a trigger to an event in TouchGFX Designer."),Object(a.b)("h2",{id:"board-bringup"},"Board Bringup"),Object(a.b)("p",null,"The following schematic images depict part of the schemetics for the STM32H7B3I-DK board, and the examples that follow use CubeMX to configure the appropriate GPIO port and pin as an input to read the state of the button."),Object(a.b)("p",null,"Start a new application based on the STM32H7B3I-DK application template.\nAccording to the User Button is attached to GPIO Port C Pin 13 (PC13)."),Object(a.b)(r.a,{imageSource:"/img/Development/BoardBringUp/GPIO/Schematic_UserButton.png",noShadow:!0,mdxType:"Figure"}),Object(a.b)(r.a,{imageSource:"/img/Development/BoardBringUp/GPIO/Schematic_MCU.png",noShadow:!0,mdxType:"Figure"}),Object(a.b)("p",null,"In CubeMX PC13 can be configured as an input and configured as a pull-down in the ",Object(a.b)("strong",{parentName:"p"},"GPIO")," section of the ",Object(a.b)("strong",{parentName:"p"},"System Core")," category."),Object(a.b)(r.a,{imageSource:"/img/Development/BoardBringUp/GPIO/CubeMX_PC13.png",noShadow:!0,mdxType:"Figure"}),Object(a.b)(r.a,{imageSource:"/img/Development/BoardBringUp/GPIO/CubeMX_GPIOConf.png",noShadow:!0,mdxType:"Figure"}),Object(a.b)("p",null,"The following code has been generated by CubeMX based on the name given to it in the Pinout View."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp",metastring:"{4,5}","{4,5}":!0}),"#define MCU_ACTIVE_GPIO_Port GPIOI\n#define VSYNC_FREQ_Pin GPIO_PIN_12\n#define VSYNC_FREQ_GPIO_Port GPIOA\n#define BTN_USER_Pin GPIO_PIN_13\n#define BTN_USER_GPIO_Port GPIOC\n#define LED2_Pin GPIO_PIN_2\n#define LED2_GPIO_Port GPIOG\n#define LCD_INT_Pin GPIO_PIN_2\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp",metastring:"{5,10-14}","{5,10-14}":!0}),"static void MX_GPIO_Init(void)\n  __HAL_RCC_GPIOJ_CLK_ENABLE();\n  __HAL_RCC_GPIOI_CLK_ENABLE();\n  __HAL_RCC_GPIOA_CLK_ENABLE();\n  __HAL_RCC_GPIOC_CLK_ENABLE();\n  __HAL_RCC_GPIOD_CLK_ENABLE();\n  __HAL_RCC_GPIOH_CLK_ENABLE();\n  __HAL_RCC_GPIOB_CLK_ENABLE();\n  ...\n    /*Configure GPIO pin : BTN_USER_Pin */\n  GPIO_InitStruct.Pin = BTN_USER_Pin;\n  GPIO_InitStruct.Mode = GPIO_MODE_INPUT;\n  GPIO_InitStruct.Pull = GPIO_PULLDOWN;\n  HAL_GPIO_Init(BTN_USER_GPIO_Port, &GPIO_InitStruct);\n  }\n")),Object(a.b)("h2",{id:"touchgfx-hal-development"},"TouchGFX HAL Development"),Object(a.b)("p",null,"A part of the rendering cycle of TouchGFX engine is to check for possible input"),Object(a.b)("p",null,"Once the state of whatever can be read ( external event) TouchGFX HAL can now read this event as part of the rendering cycle through the ButtonController interface (###TODO: show lifecycle diagram and highlight THIS particular step)."),Object(a.b)("p",null,"###TODO: show how to set the buttoncontroller using generator? e.g. we can't modify TouchGFX Configuration."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"#include <platform/driver/button/ButtonController.hpp>\nclass H7B3ButtonController : public touchgfx::ButtonController\n{\n    virtual void init() {  }\n    virtual bool sample(uint8_t& key)\n    {\n\n      if (HAL_GPIO_ReadPin(GPIOC, GPIO_PIN_13) != GPIO_PIN_RESET)\n      {\n        key = 1;\n        return true;\n      }\n      return false;\n    }\nprivate:\n\n};\n\n...\nH7B3ButtonController bc;\nvoid touchgfx_init()\n{\n  ...\n  hal.initialize();\n  hal.setButtonController(&bc);\n}\n")),Object(a.b)("h2",{id:"touchgfx-designer"},"TouchGFX Designer"),Object(a.b)(r.a,{imageSource:"/img/Development/BoardBringUp/GPIO/h7b3_at.png",noShadow:!0,mdxType:"Figure"}),Object(a.b)("p",null,"To use a value sampled by the ",Object(a.b)("inlineCode",{parentName:"p"},"ButtonController")," in interactions from the TouchGFX designer a name/value-mapping must be created in the ",Object(a.b)("inlineCode",{parentName:"p"},".touchgfx")," project file."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'    "PhysicalButtons": [],\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'    "PhysicalButtons": [\n      {\n        "Key": 1,\n        "Name": "BTN_USER"\n      }\n    ],\n')),Object(a.b)("p",null,'"Hardware Button is clicked" is now available as a trigger when creating an interaction. Selecting the "Key"/"Name" pair defined in the .touchgfx file allows users to specify an action, such as "Change screen".'),Object(a.b)(r.a,{imageSource:"/img/Development/BoardBringUp/GPIO/designer_interaction.png",noShadow:!0,mdxType:"Figure"}),Object(a.b)("h2",{id:"running-on-target"},"Running on target"),Object(a.b)("p",null,'After pressing "Generate code" in the designer, open the CubeIDE project, configure the debug configuration.'),Object(a.b)(r.a,{imageSource:"/img/Development/BoardBringUp/GPIO/cubeide_debug_config.png",noShadow:!0,mdxType:"Figure"}),Object(a.b)("h2",{id:"links"},"Links"),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#"}),"https://www.st.com/content/st_com/en/products/evaluation-tools/product-evaluation-tools/mcu-mpu-eval-tools/stm32-mcu-mpu-eval-tools/stm32-discovery-kits/stm32h7b3i-dk.html#")))}h.isMDXComponent=!0},271:function(e,t,n){"use strict";var o=n(5),i=n(0),a=n.n(i),r=n(268),c=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return a.a.createElement(r.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},t}(i.Component);t.a=l},272:function(e,t,n){"use strict";var o=n(5),i=n(0),a=n.n(i),r=n(268),c=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return a.a.createElement(r.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:c},this.props.children)},t}(i.Component);t.a=l}}]);