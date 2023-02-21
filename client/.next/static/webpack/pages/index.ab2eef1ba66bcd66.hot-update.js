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

/***/ "./components/Board.js":
/*!*****************************!*\
  !*** ./components/Board.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Square */ \"./components/Square.js\");\n/* harmony import */ var _NewGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewGame */ \"./components/NewGame.js\");\n/* harmony import */ var _NavBarConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBarConnect */ \"./components/NavBarConnect.js\");\n/* harmony import */ var _AllGames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AllGames */ \"./components/AllGames.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var truncate_eth_address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! truncate-eth-address */ \"./node_modules/truncate-eth-address/dist/index.js\");\n/* harmony import */ var _utils_useEagerConnect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/useEagerConnect */ \"./utils/useEagerConnect.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Board() {\n    _s();\n    const [squares, setSquares] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(9).fill(null));\n    const [xIsNext, setXIsNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedGame, setSelectedGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [gameWinner, setGameWinner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,_utils_useEagerConnect__WEBPACK_IMPORTED_MODULE_9__.useEagerConnect)();\n    const { account  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_10__.useWeb3React)();\n    //This function sets a game from the AllGames component\n    const selectedGameFunc = (game)=>{\n        setSelectedGame(game);\n    };\n    const handleClick = (i)=>{\n        if (!selectedGame) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warning(\"You need to choose an account and select a game first!\", {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_RIGHT\n            });\n            return;\n        }\n        const squaresClone = squares.slice();\n        if (squares[i] !== null) {\n            return;\n        }\n        if (!winner) {\n            squaresClone[i] = xIsNext ? \"X\" : \"O\";\n            setSquares(squaresClone);\n            setXIsNext(!xIsNext);\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warning(\"Game is over!\", {\n                position: react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.POSITION.TOP_RIGHT\n            });\n        }\n    };\n    const renderSquare = (i)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Square__WEBPACK_IMPORTED_MODULE_2__.Square, {\n            value: squares[i],\n            onClick: ()=>{\n                handleClick(i);\n            }\n        }, void 0, false, {\n            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n            lineNumber: 50,\n            columnNumber: 4\n        }, this);\n    };\n    const winner = calculateWinner(squares);\n    let status;\n    if (winner) {\n        // setGameWinner(winner);\n        status = \"Winner: \" + winner;\n    } else {\n        status = \"Next player: \" + (xIsNext ? \"X\" : \"O\");\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {}, void 0, false, {\n                fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                lineNumber: 70,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBarConnect__WEBPACK_IMPORTED_MODULE_4__.NavBarConnect, {}, void 0, false, {\n                fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                lineNumber: 71,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.Container, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.Col, {\n                            md: 4,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.Row, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"board-row\",\n                                            children: [\n                                                renderSquare(0),\n                                                renderSquare(1),\n                                                renderSquare(2)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"board-row\",\n                                            children: [\n                                                renderSquare(3),\n                                                renderSquare(4),\n                                                renderSquare(5)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 8\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"board-row\",\n                                            children: [\n                                                renderSquare(6),\n                                                renderSquare(7),\n                                                renderSquare(8)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 8\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.Row, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 8\n                                        }, this),\n                                        selectedGame && selectedGame.gameContract ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                \"Your game contract is\",\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"https://mumbai.polygonscan.com/address/\".concat(selectedGame.gameContract),\n                                                    target: \"_blank\",\n                                                    children: (0,truncate_eth_address__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(selectedGame.gameContract)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 10\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 9\n                                        }, this) : null,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"status\",\n                                            children: status\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 8\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                            lineNumber: 74,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.Col, {\n                            md: 8,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewGame__WEBPACK_IMPORTED_MODULE_3__.NewGame, {\n                                        currentAccount: account\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 8\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AllGames__WEBPACK_IMPORTED_MODULE_5__.AllGames, {\n                                        currentAccount: currentAccount,\n                                        selectedGameFunc: selectedGameFunc\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                        lineNumber: 115,\n                                        columnNumber: 8\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                            lineNumber: 107,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                    lineNumber: 73,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gaurangtorvekar/Documents/coding/personal/scroll_game/tictactoe-onchain/client/components/Board.js\",\n                lineNumber: 72,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Board, \"5fqjj89nLonKiRyHGXcZV90YfIw=\", false, function() {\n    return [\n        _utils_useEagerConnect__WEBPACK_IMPORTED_MODULE_9__.useEagerConnect,\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_10__.useWeb3React\n    ];\n});\n_c = Board;\nfunction calculateWinner(squares) {\n    const lines = [\n        [\n            0,\n            1,\n            2\n        ],\n        [\n            3,\n            4,\n            5\n        ],\n        [\n            6,\n            7,\n            8\n        ],\n        [\n            0,\n            3,\n            6\n        ],\n        [\n            1,\n            4,\n            7\n        ],\n        [\n            2,\n            5,\n            8\n        ],\n        [\n            0,\n            4,\n            8\n        ],\n        [\n            2,\n            5,\n            8\n        ],\n        [\n            2,\n            4,\n            6\n        ]\n    ];\n    for(let i = 0; i < lines.length; i++){\n        const [a, b, c] = lines[i];\n        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n            return squares[a];\n        }\n    }\n    return null;\n}\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0lBQ0Y7SUFDQSxPQUFPLElBQUk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0JvYXJkLmpzP2QzYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNxdWFyZSB9IGZyb20gXCIuL1NxdWFyZVwiO1xuaW1wb3J0IHsgTmV3R2FtZSB9IGZyb20gXCIuL05ld0dhbWVcIjtcbmltcG9ydCB7IE5hdkJhckNvbm5lY3QgfSBmcm9tIFwiLi9OYXZCYXJDb25uZWN0XCI7XG5pbXBvcnQgeyBBbGxHYW1lcyB9IGZyb20gXCIuL0FsbEdhbWVzXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB0cnVuY2F0ZUV0aEFkZHJlc3MgZnJvbSBcInRydW5jYXRlLWV0aC1hZGRyZXNzXCI7XG5pbXBvcnQgeyB1c2VFYWdlckNvbm5lY3QgfSBmcm9tIFwiQC91dGlscy91c2VFYWdlckNvbm5lY3RcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkKCkge1xuXHRjb25zdCBbc3F1YXJlcywgc2V0U3F1YXJlc10gPSB1c2VTdGF0ZShBcnJheSg5KS5maWxsKG51bGwpKTtcblx0Y29uc3QgW3hJc05leHQsIHNldFhJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFtzZWxlY3RlZEdhbWUsIHNldFNlbGVjdGVkR2FtZV0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW2dhbWVXaW5uZXIsIHNldEdhbWVXaW5uZXJdID0gdXNlU3RhdGUoKTtcblx0dXNlRWFnZXJDb25uZWN0KCk7XG5cdGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KCk7XG5cblx0Ly9UaGlzIGZ1bmN0aW9uIHNldHMgYSBnYW1lIGZyb20gdGhlIEFsbEdhbWVzIGNvbXBvbmVudFxuXHRjb25zdCBzZWxlY3RlZEdhbWVGdW5jID0gKGdhbWUpID0+IHtcblx0XHRzZXRTZWxlY3RlZEdhbWUoZ2FtZSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoaSkgPT4ge1xuXHRcdGlmICghc2VsZWN0ZWRHYW1lKSB7XG5cdFx0XHR0b2FzdC53YXJuaW5nKFwiWW91IG5lZWQgdG8gY2hvb3NlIGFuIGFjY291bnQgYW5kIHNlbGVjdCBhIGdhbWUgZmlyc3QhXCIsIHtcblx0XHRcdFx0cG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9SSUdIVCxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBzcXVhcmVzQ2xvbmUgPSBzcXVhcmVzLnNsaWNlKCk7XG5cdFx0aWYgKHNxdWFyZXNbaV0gIT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF3aW5uZXIpIHtcblx0XHRcdHNxdWFyZXNDbG9uZVtpXSA9IHhJc05leHQgPyBcIlhcIiA6IFwiT1wiO1xuXHRcdFx0c2V0U3F1YXJlcyhzcXVhcmVzQ2xvbmUpO1xuXHRcdFx0c2V0WElzTmV4dCgheElzTmV4dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvYXN0Lndhcm5pbmcoXCJHYW1lIGlzIG92ZXIhXCIsIHtcblx0XHRcdFx0cG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9SSUdIVCxcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCByZW5kZXJTcXVhcmUgPSAoaSkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8U3F1YXJlXG5cdFx0XHRcdHZhbHVlPXtzcXVhcmVzW2ldfVxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0aGFuZGxlQ2xpY2soaSk7XG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH07XG5cdGNvbnN0IHdpbm5lciA9IGNhbGN1bGF0ZVdpbm5lcihzcXVhcmVzKTtcblx0bGV0IHN0YXR1cztcblx0aWYgKHdpbm5lcikge1xuXHRcdC8vIHNldEdhbWVXaW5uZXIod2lubmVyKTtcblx0XHRzdGF0dXMgPSBcIldpbm5lcjogXCIgKyB3aW5uZXI7XG5cdH0gZWxzZSB7XG5cdFx0c3RhdHVzID0gXCJOZXh0IHBsYXllcjogXCIgKyAoeElzTmV4dCA/IFwiWFwiIDogXCJPXCIpO1xuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHt9LCBbXSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxUb2FzdENvbnRhaW5lciAvPlxuXHRcdFx0PE5hdkJhckNvbm5lY3QgLz5cblx0XHRcdDxDb250YWluZXI+XG5cdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0PENvbCBtZD17NH0+XG5cdFx0XHRcdFx0XHQ8Um93PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtyZW5kZXJTcXVhcmUoMCl9XG5cdFx0XHRcdFx0XHRcdFx0e3JlbmRlclNxdWFyZSgxKX1cblx0XHRcdFx0XHRcdFx0XHR7cmVuZGVyU3F1YXJlKDIpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cblx0XHRcdFx0XHRcdFx0XHR7cmVuZGVyU3F1YXJlKDMpfVxuXHRcdFx0XHRcdFx0XHRcdHtyZW5kZXJTcXVhcmUoNCl9XG5cdFx0XHRcdFx0XHRcdFx0e3JlbmRlclNxdWFyZSg1KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0e3JlbmRlclNxdWFyZSg2KX1cblx0XHRcdFx0XHRcdFx0XHR7cmVuZGVyU3F1YXJlKDcpfVxuXHRcdFx0XHRcdFx0XHRcdHtyZW5kZXJTcXVhcmUoOCl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdFx0XHQ8Um93PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e3NlbGVjdGVkR2FtZSAmJiBzZWxlY3RlZEdhbWUuZ2FtZUNvbnRyYWN0ID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRZb3VyIGdhbWUgY29udHJhY3QgaXN7XCIgXCJ9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtgaHR0cHM6Ly9tdW1iYWkucG9seWdvbnNjYW4uY29tL2FkZHJlc3MvJHtzZWxlY3RlZEdhbWUuZ2FtZUNvbnRyYWN0fWB9IHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dHJ1bmNhdGVFdGhBZGRyZXNzKHNlbGVjdGVkR2FtZS5nYW1lQ29udHJhY3QpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxCdXR0b24gdmFyaWFudD1cImluZm9cIj5TZXQgdXAgZ2FtZTwvQnV0dG9uPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGF0dXNcIj57c3RhdHVzfTwvZGl2PlxuXHRcdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PENvbCBtZD17OH0+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8TmV3R2FtZSBjdXJyZW50QWNjb3VudD17YWNjb3VudH0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHQ8aHI+PC9ocj5cblx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PEFsbEdhbWVzIGN1cnJlbnRBY2NvdW50PXtjdXJyZW50QWNjb3VudH0gc2VsZWN0ZWRHYW1lRnVuYz17c2VsZWN0ZWRHYW1lRnVuY30gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdDwvPlxuXHQpO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykge1xuXHRjb25zdCBsaW5lcyA9IFtcblx0XHRbMCwgMSwgMl0sXG5cdFx0WzMsIDQsIDVdLFxuXHRcdFs2LCA3LCA4XSxcblx0XHRbMCwgMywgNl0sXG5cdFx0WzEsIDQsIDddLFxuXHRcdFsyLCA1LCA4XSxcblx0XHRbMCwgNCwgOF0sXG5cdFx0WzIsIDUsIDhdLFxuXHRcdFsyLCA0LCA2XSxcblx0XTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IFthLCBiLCBjXSA9IGxpbmVzW2ldO1xuXHRcdGlmIChzcXVhcmVzW2FdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbYl0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tjXSkge1xuXHRcdFx0cmV0dXJuIHNxdWFyZXNbYV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTcXVhcmUiLCJOZXdHYW1lIiwiTmF2QmFyQ29ubmVjdCIsIkFsbEdhbWVzIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsInRydW5jYXRlRXRoQWRkcmVzcyIsInVzZUVhZ2VyQ29ubmVjdCIsInVzZVdlYjNSZWFjdCIsIkJvYXJkIiwic3F1YXJlcyIsInNldFNxdWFyZXMiLCJBcnJheSIsImZpbGwiLCJ4SXNOZXh0Iiwic2V0WElzTmV4dCIsInNlbGVjdGVkR2FtZSIsInNldFNlbGVjdGVkR2FtZSIsImdhbWVXaW5uZXIiLCJzZXRHYW1lV2lubmVyIiwiYWNjb3VudCIsInNlbGVjdGVkR2FtZUZ1bmMiLCJnYW1lIiwiaGFuZGxlQ2xpY2siLCJpIiwid2FybmluZyIsInBvc2l0aW9uIiwiUE9TSVRJT04iLCJUT1BfUklHSFQiLCJzcXVhcmVzQ2xvbmUiLCJzbGljZSIsIndpbm5lciIsInJlbmRlclNxdWFyZSIsInZhbHVlIiwib25DbGljayIsImNhbGN1bGF0ZVdpbm5lciIsInN0YXR1cyIsIm1kIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnIiLCJnYW1lQ29udHJhY3QiLCJhIiwiaHJlZiIsInRhcmdldCIsImN1cnJlbnRBY2NvdW50IiwiaHIiLCJsaW5lcyIsImxlbmd0aCIsImIiLCJjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Board.js\n"));

/***/ })

});