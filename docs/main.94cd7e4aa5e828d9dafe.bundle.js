(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{240:function(module){module.exports=JSON.parse('{"a":"@rakuten-rex/react-component-starter-kit","b":{"type":"git","url":"https://github.com/rakuten-rex/react-component-starter-kit.git"}}')},415:function(module,exports){},435:function(module,__webpack_exports__,__webpack_require__){"use strict";var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(436),_rex_logo_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(440),_rex_logo_svg__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_rex_logo_svg__WEBPACK_IMPORTED_MODULE_1__),_package_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(240);__webpack_exports__.a=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.create)({base:"light",appBg:"#F7F7F7",fontBase:'-apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif',textColor:"#333333",brandTitle:_package_json__WEBPACK_IMPORTED_MODULE_2__.a,brandUrl:_package_json__WEBPACK_IMPORTED_MODULE_2__.b.url,brandImage:_rex_logo_svg__WEBPACK_IMPORTED_MODULE_1___default.a})},440:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/rex-logo.svg"},448:function(module,exports,__webpack_require__){__webpack_require__(449),__webpack_require__(660),module.exports=__webpack_require__(661)},482:function(module,exports){},60:function(module,exports,__webpack_require__){"use strict";__webpack_require__(882),module.exports=__webpack_require__(886)},661:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(239),_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(434),_theme_rexTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(435);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{theme:_theme_rexTheme__WEBPACK_IMPORTED_MODULE_2__.a},viewport:{viewports:_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_1__.INITIAL_VIEWPORTS},backgrounds:[{name:"dark-grey",value:"#686868"},{name:"grey (default)",value:"#f8f8f8",default:!0},{name:"light-grey",value:"#fafafa"},{name:"white",value:"#fff"}]}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(858),module)}.call(this,__webpack_require__(662)(module))},858:function(module,exports,__webpack_require__){var map={"./MyComponent/MyComponent.stories.jsx":945};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=858},882:function(module,exports,__webpack_require__){var content=__webpack_require__(883);"string"==typeof content&&(content=[[module.i,content,""]]);var options={attributes:{class:"rex-styles-storybook"},insert:"head",singleton:!1};__webpack_require__(885)(content,options);content.locals&&(module.exports=content.locals)},883:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(884)(!1)).push([module.i,'/*!\n * \n * @license @rakuten-rex/react-component-starter-kit v3.2.4 2019-12-18\n * MyComponent/MyComponent.production.min.css\n * \n * Copyright (c) 2018-present, Rakuten, Inc.\n * \n * This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.\n */.rex-my-component{--rex-blue-700:#134ff3;--rex-gray-900:#333;--rex-my-component-theme-link:var(--rex-blue-700);--rex-my-component-theme-text:var(--rex-gray-900);--rex-my-component-title-weight:600;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:100%;background-color:#fff;border-radius:4px 4px 0 0;color:#333;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:1rem;height:auto;line-height:1.5;padding-bottom:1.5rem;text-align:left;width:280px;-ms-box-sizing:border-box;-o-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.rex-my-component:after{-ms-box-sizing:border-box;-o-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.rex-my-component:before{-ms-box-sizing:border-box;-o-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.rex-my-component img{border-radius:4px 4px 0 0;display:block}.rex-my-component h3{color:var(--rex-my-component-theme-text);display:block;font-weight:var(--rex-my-component-title-weight);line-height:1.5rem;margin:1rem 0 0;padding:0 1.5rem}.rex-my-component p{color:var(--rex-my-component-theme-text);line-height:1.25rem;margin:0;padding:.5rem 1.5rem 0}.rex-my-component a{color:var(--rex-my-component-theme-link);display:block;line-height:1.25rem;margin:0;padding:1rem 2.5rem 0 1.5rem;text-align:right;text-decoration:none}.rex-my-component.elevation{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.12),0 0 2px rgba(0,0,0,.14);box-shadow:0 1px 3px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.121569),0 0 2px rgba(0,0,0,.141176)}',""])},886:function(module,exports,__webpack_require__){"use strict";
/*
 @license @rakuten-rex/react-component-starter-kit v3.2.4 2019-12-18
 MyComponent/MyComponent.production.min.js

 Copyright (c) 2018-present, Rakuten, Inc.

 This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.
*/var f;window,module.exports=(f=__webpack_require__(0),function(a){function d(b){if(c[b])return c[b].exports;var e=c[b]={i:b,l:!1,exports:{}};return a[b].call(e.exports,e,e.exports,d),e.l=!0,e.exports}var c={};return d.m=a,d.c=c,d.d=function(b,e,a){d.o(b,e)||Object.defineProperty(b,e,{enumerable:!0,get:a})},d.r=function(b){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})},d.t=function(b,e){if(1&e&&(b=d(b)),8&e||4&e&&"object"==typeof b&&b&&b.__esModule)return b;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:b}),2&e&&"string"!=typeof b)for(var c in b)d.d(a,c,function(a){return b[a]}.bind(null,c));return a},d.n=function(b){var a=b&&b.__esModule?function(){return b.default}:function(){return b};return d.d(a,"a",a),a},d.o=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)},d.p="/",d(d.s=4)}([function(a,d){a.exports=f},function(a,d){function c(){return a.exports=c=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var d,c=arguments[b];for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},c.apply(this,arguments)}a.exports=c},function(a,d,c){var b=c(5);a.exports=function(a,c){if(null==a)return{};var e,d=b(a,c);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(a);for(e=0;e<h.length;e++){var k=h[e];0<=c.indexOf(k)||Object.prototype.propertyIsEnumerable.call(a,k)&&(d[k]=a[k])}}return d}},function(a,d){a.exports="MyComponent/assets/Image.jpg"},function(a,d,c){function b(a){var c=a.children,b=a.onClick,d=a.title,l=a.text,h=a.className;return a=f()(a,["children","onClick","title","text","className"]),g.a.createElement("div",e()({className:h,onClick:b,role:"presentation"},a),g.a.createElement("img",{src:m.a,alt:"Basic example",style:{width:"100%"}}),g.a.createElement("h3",null,d),g.a.createElement("p",null,l),c)}c.r(d),c.d(d,"default",(function(){return b})),a=c(1);var e=c.n(a);a=c(2);var f=c.n(a);a=c(0);var g=c.n(a);a=c(3);var m=c.n(a);a=c(6),c.n(a),b.displayName="MyComponent",b.defaultProps={children:null,title:"Hello World",text:"This is a basic example for ReX React Components Starter Kit",className:"rex-my-component",onClick:function(){return null}}},function(a,d){a.exports=function(a,b){if(null==a)return{};var g,c={},d=Object.keys(a);for(g=0;g<d.length;g++){var f=d[g];0<=b.indexOf(f)||(c[f]=a[f])}return c}},function(a,d,c){}]))},892:function(module,exports){},893:function(module,exports){},894:function(module,exports){},912:function(module,exports){},915:function(module,exports){},924:function(module,exports){},945:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(441),addon_knobs_dist=__webpack_require__(66),MyComponent=__webpack_require__(60),MyComponent_default=__webpack_require__.n(MyComponent),slicedToArray=(__webpack_require__(20),__webpack_require__(107),__webpack_require__(73),__webpack_require__(135),__webpack_require__(395),__webpack_require__(74),__webpack_require__(75),__webpack_require__(49),__webpack_require__(136),__webpack_require__(22),__webpack_require__(202),__webpack_require__(887),__webpack_require__(442)),slicedToArray_default=__webpack_require__.n(slicedToArray),postcss=__webpack_require__(443),postcss_default=__webpack_require__.n(postcss),postcss_css_variables=__webpack_require__(444),postcss_css_variables_default=__webpack_require__.n(postcss_css_variables);function cssVarsToLegacy(customStyle,Component){var styleProps=Object.entries(customStyle).map((function(_ref){var _ref2=slicedToArray_default()(_ref,2),key=_ref2[0],value=_ref2[1];return"".concat(key,": ").concat(value)})).join(";"),customStyleHTML="{".concat(styleProps,"}"),classNameList=Component.defaultProps.className.trim().split(" ");return Array.from(document.querySelectorAll(".rex-styles-storybook")).map((function(styleTag){var innerText=styleTag.innerText;return void 0!==classNameList.find((function(element){return innerText.includes(element)}))?postcss_default()([postcss_css_variables_default()()]).process("".concat(innerText).concat(customStyleHTML)).css:""})).join("")}var addon_a11y_dist=__webpack_require__(445),storybook_inspect_html=__webpack_require__(446),storybook_inspect_jsx=__webpack_require__(447),withKnobs=[addon_knobs_dist.withKnobs,storybook_inspect_html.withInspectHtml,storybook_inspect_jsx.withInspectJsx,addon_a11y_dist.withA11y];__webpack_require__.d(__webpack_exports__,"DefaultView",(function(){return DefaultView})),__webpack_require__.d(__webpack_exports__,"WithLink",(function(){return WithLink})),__webpack_require__.d(__webpack_exports__,"WithCustomClassname",(function(){return WithCustomClassname})),__webpack_require__.d(__webpack_exports__,"WithClickEvent",(function(){return WithClickEvent})),__webpack_require__.d(__webpack_exports__,"WithDynamicProps",(function(){return WithDynamicProps})),__webpack_require__.d(__webpack_exports__,"WithThemeReactAndCSSVars",(function(){return WithThemeReactAndCSSVars})),__webpack_require__.d(__webpack_exports__,"WithThemeHTMLAndLegacyCSS",(function(){return WithThemeHTMLAndLegacyCSS}));__webpack_require__(401).withSource;var __SOURCE_PREFIX__="/Users/claudio.moya/Develop/project/rakuten-rex/react-component-starter-kit/src/MyComponent",__STORY__="\n\nimport React from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { text, color, select } from '@storybook/addon-knobs';\nimport MyComponent from 'src/MyComponent';\nimport { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';\n\n/**\n * Main story\n * */\nexport default {\n  title: 'My Component',\n  decorators: withKnobs,\n};\n\n/**\n * Stories\n * */\nexport const DefaultView = () => <MyComponent />;\n\nexport const WithLink = () => (\n  <MyComponent>\n    <a href=\"/\" target=\"_blank\">\n      Link\n    </a>\n  </MyComponent>\n);\n\nexport const WithCustomClassname = () => (\n  <MyComponent className=\"rex-my-component elevation\" />\n);\n\nexport const WithClickEvent = () => {\n  const onClickSample = action('clicked');\n\n  return <MyComponent onClick={onClickSample} />;\n};\n\nexport const WithDynamicProps = () => {\n  const sampleTitle = text('title', 'Dynamic Title');\n  const sampleText = text('text', 'Dynamic Text');\n\n  return <MyComponent title={sampleTitle} text={sampleText} />;\n};\n\n/**\n * Custom Theme support\n * */\n\nfunction Theme() {\n  const themeText = color('Text', 'crimson', 'Theme Colors');\n  const themeLink = color('Link', '#CC0070', 'Theme Colors');\n  const themeTitleWeight = select(\n    'Title Weight',\n    {\n      Weight300: 300,\n      WeightNormal: 'normal',\n      Weight500: 500,\n      WeightBold: 'bold',\n    },\n    500,\n    'Theme Props'\n  );\n\n  const customStyle = {\n    '--rex-my-component-theme-text': themeText,\n    '--rex-my-component-theme-link': themeLink,\n    '--rex-my-component-title-weight': themeTitleWeight,\n  };\n\n  return {\n    customStyle,\n    customStyleHtml: cssVarsToLegacy(customStyle, MyComponent),\n  };\n}\n\nexport const WithThemeReactAndCSSVars = () => {\n  const { customStyle } = Theme();\n\n  return (\n    <MyComponent style={customStyle}>\n      <a href=\"/\" target=\"_blank\">\n        Link\n      </a>\n    </MyComponent>\n  );\n};\n\nexport const WithThemeHTMLAndLegacyCSS = () => {\n  const { customStyleHtml } = Theme();\n\n  return (\n    <>\n      <style>{customStyleHtml}</style>\n      <MyComponent>\n        <a href=\"/\" target=\"_blank\">\n          Link\n        </a>\n      </MyComponent>\n    </>\n  );\n};\n",__ADDS_MAP__={"my-component--default-view":{startLoc:{col:27,line:20},endLoc:{col:48,line:20},startBody:{col:27,line:20},endBody:{col:48,line:20}},"my-component--with-link":{startLoc:{col:24,line:22},endLoc:{col:1,line:28},startBody:{col:24,line:22},endBody:{col:1,line:28}},"my-component--with-custom-classname":{startLoc:{col:35,line:30},endLoc:{col:1,line:32},startBody:{col:35,line:30},endBody:{col:1,line:32}},"my-component--with-click-event":{startLoc:{col:30,line:34},endLoc:{col:1,line:38},startBody:{col:30,line:34},endBody:{col:1,line:38}},"my-component--with-dynamic-props":{startLoc:{col:32,line:40},endLoc:{col:1,line:45},startBody:{col:32,line:40},endBody:{col:1,line:45}},"my-component--with-theme-react-and-css-vars":{startLoc:{col:40,line:78},endLoc:{col:1,line:88},startBody:{col:40,line:78},endBody:{col:1,line:88}},"my-component--with-theme-html-and-legacy-css":{startLoc:{col:41,line:90},endLoc:{col:1,line:103},startBody:{col:41,line:90},endBody:{col:1,line:103}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},addSourceDecorator=__webpack_require__(401).addSource,MyComponent_stories_ref=(__webpack_exports__.default={parameters:{storySource:{source:"\n\nimport React from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { text, color, select } from '@storybook/addon-knobs';\nimport MyComponent from 'src/MyComponent';\nimport { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';\n\n/**\n * Main story\n * */\nexport default {\n  title: 'My Component',\n  decorators: withKnobs,\n};\n\n/**\n * Stories\n * */\nexport const DefaultView = () => <MyComponent />;\n\nexport const WithLink = () => (\n  <MyComponent>\n    <a href=\"/\" target=\"_blank\">\n      Link\n    </a>\n  </MyComponent>\n);\n\nexport const WithCustomClassname = () => (\n  <MyComponent className=\"rex-my-component elevation\" />\n);\n\nexport const WithClickEvent = () => {\n  const onClickSample = action('clicked');\n\n  return <MyComponent onClick={onClickSample} />;\n};\n\nexport const WithDynamicProps = () => {\n  const sampleTitle = text('title', 'Dynamic Title');\n  const sampleText = text('text', 'Dynamic Text');\n\n  return <MyComponent title={sampleTitle} text={sampleText} />;\n};\n\n/**\n * Custom Theme support\n * */\n\nfunction Theme() {\n  const themeText = color('Text', 'crimson', 'Theme Colors');\n  const themeLink = color('Link', '#CC0070', 'Theme Colors');\n  const themeTitleWeight = select(\n    'Title Weight',\n    {\n      Weight300: 300,\n      WeightNormal: 'normal',\n      Weight500: 500,\n      WeightBold: 'bold',\n    },\n    500,\n    'Theme Props'\n  );\n\n  const customStyle = {\n    '--rex-my-component-theme-text': themeText,\n    '--rex-my-component-theme-link': themeLink,\n    '--rex-my-component-title-weight': themeTitleWeight,\n  };\n\n  return {\n    customStyle,\n    customStyleHtml: cssVarsToLegacy(customStyle, MyComponent),\n  };\n}\n\nexport const WithThemeReactAndCSSVars = () => {\n  const { customStyle } = Theme();\n\n  return (\n    <MyComponent style={customStyle}>\n      <a href=\"/\" target=\"_blank\">\n        Link\n      </a>\n    </MyComponent>\n  );\n};\n\nexport const WithThemeHTMLAndLegacyCSS = () => {\n  const { customStyleHtml } = Theme();\n\n  return (\n    <>\n      <style>{customStyleHtml}</style>\n      <MyComponent>\n        <a href=\"/\" target=\"_blank\">\n          Link\n        </a>\n      </MyComponent>\n    </>\n  );\n};\n",locationsMap:{"my-component--default-view":{startLoc:{col:27,line:20},endLoc:{col:48,line:20},startBody:{col:27,line:20},endBody:{col:48,line:20}},"my-component--with-link":{startLoc:{col:24,line:22},endLoc:{col:1,line:28},startBody:{col:24,line:22},endBody:{col:1,line:28}},"my-component--with-custom-classname":{startLoc:{col:35,line:30},endLoc:{col:1,line:32},startBody:{col:35,line:30},endBody:{col:1,line:32}},"my-component--with-click-event":{startLoc:{col:30,line:34},endLoc:{col:1,line:38},startBody:{col:30,line:34},endBody:{col:1,line:38}},"my-component--with-dynamic-props":{startLoc:{col:32,line:40},endLoc:{col:1,line:45},startBody:{col:32,line:40},endBody:{col:1,line:45}},"my-component--with-theme-react-and-css-vars":{startLoc:{col:40,line:78},endLoc:{col:1,line:88},startBody:{col:40,line:78},endBody:{col:1,line:88}},"my-component--with-theme-html-and-legacy-css":{startLoc:{col:41,line:90},endLoc:{col:1,line:103},startBody:{col:41,line:90},endBody:{col:1,line:103}}}}},title:"My Component",decorators:withKnobs},react_default.a.createElement(MyComponent_default.a,null)),DefaultView=addSourceDecorator((function(){return MyComponent_stories_ref}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/MyComponent.stories.jsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),MyComponent_stories_ref2=react_default.a.createElement(MyComponent_default.a,null,react_default.a.createElement("a",{href:"/",target:"_blank"},"Link")),WithLink=addSourceDecorator((function(){return MyComponent_stories_ref2}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/MyComponent.stories.jsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),_ref3=react_default.a.createElement(MyComponent_default.a,{className:"rex-my-component elevation"}),WithCustomClassname=addSourceDecorator((function(){return _ref3}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/MyComponent.stories.jsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),WithClickEvent=addSourceDecorator((function(){var onClickSample=Object(dist.action)("clicked");return react_default.a.createElement(MyComponent_default.a,{onClick:onClickSample})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/MyComponent.stories.jsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),WithDynamicProps=addSourceDecorator((function(){var sampleTitle=Object(addon_knobs_dist.text)("title","Dynamic Title"),sampleText=Object(addon_knobs_dist.text)("text","Dynamic Text");return react_default.a.createElement(MyComponent_default.a,{title:sampleTitle,text:sampleText})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/MyComponent.stories.jsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__});function Theme(){var customStyle={"--rex-my-component-theme-text":Object(addon_knobs_dist.color)("Text","crimson","Theme Colors"),"--rex-my-component-theme-link":Object(addon_knobs_dist.color)("Link","#CC0070","Theme Colors"),"--rex-my-component-title-weight":Object(addon_knobs_dist.select)("Title Weight",{Weight300:300,WeightNormal:"normal",Weight500:500,WeightBold:"bold"},500,"Theme Props")};return{customStyle:customStyle,customStyleHtml:cssVarsToLegacy(customStyle,MyComponent_default.a)}}var _ref4=react_default.a.createElement("a",{href:"/",target:"_blank"},"Link"),WithThemeReactAndCSSVars=addSourceDecorator((function(){var customStyle=Theme().customStyle;return react_default.a.createElement(MyComponent_default.a,{style:customStyle},_ref4)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/MyComponent.stories.jsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),_ref5=react_default.a.createElement(MyComponent_default.a,null,react_default.a.createElement("a",{href:"/",target:"_blank"},"Link")),WithThemeHTMLAndLegacyCSS=addSourceDecorator((function(){var customStyleHtml=Theme().customStyleHtml;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("style",null,customStyleHtml),_ref5)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/MyComponent.stories.jsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})}},[[448,1,2]]]);