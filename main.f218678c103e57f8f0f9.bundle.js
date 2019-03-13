(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(module,exports){module.exports='# React Native Dimensions Hooks\n\nHooks to wrap the React Native Dimensions API for Native and React Native Web.\n\nThey use listeners under the hood, so they will update on window and screen size changes.\n\n[Demo](https://rjerue.github.io/react-native-dimensions-hooks)\n\n## Usage:\n\n```\nimport React from "react";\nimport useDimensions from "react-native-dimensions-hooks";\n\nexport default () => {\n  const { window, screen } = useDimensions();\n  return (\n    <div>\n      <div>Window {JSON.stringify(window)}</div>\n      <div>Screen {JSON.stringify(screen)}</div>\n    </div>\n  );\n}\n\n```\n\nWindow or screen may be also imported individually by `useWindowDimensions` or `useScreenDimension`. \n\n```\nimport { useWindowDimensions, useScreenDimension} from "react-native-dimensions-hooks";\n\nconst useScreenDimension = useScreenDimension()\nconst windowDimensions = useWindowDimensions()\n```'},168:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(3),react_default=__webpack_require__.n(react),slicedToArray=__webpack_require__(167),Dimensions=__webpack_require__(414);function useDimensionsHelper(dim){var _useState=Object(react.useState)(Dimensions.a.get(dim)),_useState2=Object(slicedToArray.a)(_useState,2),dims=_useState2[0],setDims=_useState2[1],handleDimChange=function handleDimChange(dimensions){setDims(dimensions[dim])};return Object(react.useEffect)(function(){return Dimensions.a.addEventListener("change",handleDimChange),function(){Dimensions.a.removeEventListener("change",handleDimChange)}}),dims}__webpack_exports__.a=function(){var _useDimensions=function useDimensions(){return{window:useDimensionsHelper("window"),screen:useDimensionsHelper("screen")}}(),window=_useDimensions.window,screen=_useDimensions.screen;return react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Window ",JSON.stringify(window)),react_default.a.createElement("div",null,"Screen ",JSON.stringify(screen)))}},169:function(module,exports,__webpack_require__){__webpack_require__(170),__webpack_require__(249),module.exports=__webpack_require__(250)},250:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(41);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(330)},module)}.call(this,__webpack_require__(117)(module))},330:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(41),react_markdown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(164),react_markdown__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__),_readme_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(165),_readme_md__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_readme_md__WEBPACK_IMPORTED_MODULE_3__),_test__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(168);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Readme",module).add("Readme.md",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a,{source:_readme_md__WEBPACK_IMPORTED_MODULE_3___default.a})}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Examples",module).add("Basic Example",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_test__WEBPACK_IMPORTED_MODULE_4__.a,null)})}.call(this,__webpack_require__(117)(module))}},[[169,1,2]]]);
//# sourceMappingURL=main.f218678c103e57f8f0f9.bundle.js.map