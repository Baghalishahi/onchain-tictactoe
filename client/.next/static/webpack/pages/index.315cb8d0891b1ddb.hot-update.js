"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/useEagerConnect.js":
/*!**********************************!*\
  !*** ./utils/useEagerConnect.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useEagerConnect\": function() { return /* binding */ useEagerConnect; }\n/* harmony export */ });\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\nvar _s = $RefreshSig$();\n\n\n\nfunction useEagerConnect() {\n    _s();\n    const { activate , active , error , account  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React)();\n    const [tried, setTried] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__.InjectedConnector({\n        supportedChainIds: [\n            1,\n            3,\n            4,\n            5,\n            42,\n            80001,\n            534351\n        ]\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        injected.isAuthorized().then((isAuthorized)=>{\n            if (isAuthorized) {\n                activate(injected, undefined, true).catch(()=>{\n                    setTried(true);\n                });\n            } else {\n                setTried(true);\n            }\n        });\n    }, [\n        activate,\n        active,\n        account\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (active) {\n            setTried(true);\n        }\n    }, [\n        active,\n        account\n    ]);\n    if (error) {\n        console.log(\"Error in useEagerConnect = \", error);\n    }\n    return tried;\n}\n_s(useEagerConnect, \"UkRQCWhh/AtJjOEgyN7+SPk/5xw=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_0__.useWeb3React\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy91c2VFYWdlckNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9FO0FBQ3hCO0FBQ3VCO0FBRTVELFNBQVNLLGtCQUFrQjs7SUFDakMsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR1IsOERBQWdCQTtJQUM3RCxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUV4QyxNQUFNUyxXQUFXLElBQUlSLDZFQUFpQkEsQ0FBQztRQUN0Q1MsbUJBQW1CO1lBQUM7WUFBRztZQUFHO1lBQUc7WUFBRztZQUFJO1lBQU87U0FBTztJQUNuRDtJQUVBWCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2ZVLFNBQVNFLFlBQVksR0FBR0MsSUFBSSxDQUFDLENBQUNELGVBQWlCO1lBQzlDLElBQUlBLGNBQWM7Z0JBQ2pCUixTQUFTTSxVQUFVSSxXQUFXLElBQUksRUFBRUMsS0FBSyxDQUFDLElBQU07b0JBQy9DTixTQUFTLElBQUk7Z0JBQ2Q7WUFDRCxPQUFPO2dCQUNOQSxTQUFTLElBQUk7WUFDZCxDQUFDO1FBQ0Y7SUFDRCxHQUFHO1FBQUNMO1FBQVVDO1FBQVFFO0tBQVE7SUFFOUJQLGdEQUFTQSxDQUFDLElBQU07UUFDZixJQUFJSyxRQUFRO1lBQ1hJLFNBQVMsSUFBSTtRQUNkLENBQUM7SUFDRixHQUFHO1FBQUNKO1FBQVFFO0tBQVE7SUFDcEIsSUFBSUQsT0FBTztRQUNWVSxRQUFRQyxHQUFHLENBQUMsK0JBQStCWDtJQUM1QyxDQUFDO0lBQ0QsT0FBT0U7QUFDUixDQUFDO0dBN0JlTDs7UUFDOEJKLDBEQUFnQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXNlRWFnZXJDb25uZWN0LmpzPzI5MGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2ViM1JlYWN0IGFzIHVzZVdlYjNSZWFjdENvcmUgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VFYWdlckNvbm5lY3QoKSB7XG5cdGNvbnN0IHsgYWN0aXZhdGUsIGFjdGl2ZSwgZXJyb3IsIGFjY291bnQgfSA9IHVzZVdlYjNSZWFjdENvcmUoKTtcblx0Y29uc3QgW3RyaWVkLCBzZXRUcmllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3QgaW5qZWN0ZWQgPSBuZXcgSW5qZWN0ZWRDb25uZWN0b3Ioe1xuXHRcdHN1cHBvcnRlZENoYWluSWRzOiBbMSwgMywgNCwgNSwgNDIsIDgwMDAxLCA1MzQzNTFdLFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGluamVjdGVkLmlzQXV0aG9yaXplZCgpLnRoZW4oKGlzQXV0aG9yaXplZCkgPT4ge1xuXHRcdFx0aWYgKGlzQXV0aG9yaXplZCkge1xuXHRcdFx0XHRhY3RpdmF0ZShpbmplY3RlZCwgdW5kZWZpbmVkLCB0cnVlKS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdFx0c2V0VHJpZWQodHJ1ZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0VHJpZWQodHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sIFthY3RpdmF0ZSwgYWN0aXZlLCBhY2NvdW50XSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoYWN0aXZlKSB7XG5cdFx0XHRzZXRUcmllZCh0cnVlKTtcblx0XHR9XG5cdH0sIFthY3RpdmUsIGFjY291bnRdKTtcblx0aWYgKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coXCJFcnJvciBpbiB1c2VFYWdlckNvbm5lY3QgPSBcIiwgZXJyb3IpO1xuXHR9XG5cdHJldHVybiB0cmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VXZWIzUmVhY3QiLCJ1c2VXZWIzUmVhY3RDb3JlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbmplY3RlZENvbm5lY3RvciIsInVzZUVhZ2VyQ29ubmVjdCIsImFjdGl2YXRlIiwiYWN0aXZlIiwiZXJyb3IiLCJhY2NvdW50IiwidHJpZWQiLCJzZXRUcmllZCIsImluamVjdGVkIiwic3VwcG9ydGVkQ2hhaW5JZHMiLCJpc0F1dGhvcml6ZWQiLCJ0aGVuIiwidW5kZWZpbmVkIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/useEagerConnect.js\n"));

/***/ })

});