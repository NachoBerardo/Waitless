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

/***/ "./src/components/footerMenu.tsx":
/*!***************************************!*\
  !*** ./src/components/footerMenu.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nconst FooterMenu = (param)=>{\n    let { setShowPago , setShowPedido , setShowMenu , setShowPedidoEnviado , EstadoMenu , EstadoPedidoEnviado , EstadoPedido , txtBoton , pedido  } = param;\n    const handleClickVerPedido = async ()=>{\n        setShowPedido(EstadoPedido);\n        setShowMenu(EstadoMenu);\n        setShowPedidoEnviado(EstadoPedidoEnviado);\n        let finishedInput = [];\n        pedido.forEach((item)=>{\n            const input = {\n                orderId: 5,\n                foodId: item.foodId,\n                customerId: 1,\n                quantity: item.quantity,\n                state: \"enviado\"\n            };\n            finishedInput.push(input);\n        });\n        try {\n            return await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"https://perfect-teal-beetle.cyclic.cloud/ordersFood\", finishedInput).then((response)=>{\n                console.log(\"Agregado \", response);\n            }).catch((err)=>console.log(err));\n        } catch (error) {\n            console.log(error);\n        }\n    //console.log(EstadoPedidoEnviado, EstadoPedido, EstadoMenu)\n    // SetShowPedido en realidad es Show Menu, por ende se le pasa un true al apretar el boton para que aparezaca el menu y que el ShowPedido se vuelva false\n    };\n    const handleClickPago = async ()=>{\n        setShowPedido(false);\n        setShowMenu(EstadoMenu);\n        setShowPedidoEnviado(EstadoPedidoEnviado);\n        setShowPago(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bottom-0 fixed w-full h-fit grid \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-fit flex justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"rounded-full bg-btngreen h-[70px] w-[70px] mr-9 mb-4 flex justify-center items-center active:outline-none\",\n                    onClick: (event)=>handleClickPago(),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/carrito.svg\",\n                        alt: \"\",\n                        className: \"h-12 w-12\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\47206356\\\\Desktop\\\\Waitless\\\\waitless\\\\src\\\\components\\\\footerMenu.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\47206356\\\\Desktop\\\\Waitless\\\\waitless\\\\src\\\\components\\\\footerMenu.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\47206356\\\\Desktop\\\\Waitless\\\\waitless\\\\src\\\\components\\\\footerMenu.tsx\",\n                lineNumber: 68,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"w-full h-[90px] bg-background  shadow-top flex items-center\",\n                id: \"footerMenu\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-btngreen absolute rounded-2xl right-0  mr-7 h-[38px] w-[141px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-white\",\n                            onClick: (event)=>handleClickVerPedido(),\n                            children: txtBoton\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\47206356\\\\Desktop\\\\Waitless\\\\waitless\\\\src\\\\components\\\\footerMenu.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\47206356\\\\Desktop\\\\Waitless\\\\waitless\\\\src\\\\components\\\\footerMenu.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-full \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-[#252525] ml-7 top-0 mt-5 \",\n                                children: \"Subtotal\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\47206356\\\\Desktop\\\\Waitless\\\\waitless\\\\src\\\\components\\\\footerMenu.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"text-[#252525] ml-7\",\n                                children: \"$2.000,0\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\47206356\\\\Desktop\\\\Waitless\\\\waitless\\\\src\\\\components\\\\footerMenu.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\47206356\\\\Desktop\\\\Waitless\\\\waitless\\\\src\\\\components\\\\footerMenu.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\47206356\\\\Desktop\\\\Waitless\\\\waitless\\\\src\\\\components\\\\footerMenu.tsx\",\n                lineNumber: 73,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\47206356\\\\Desktop\\\\Waitless\\\\waitless\\\\src\\\\components\\\\footerMenu.tsx\",\n        lineNumber: 67,\n        columnNumber: 8\n    }, undefined);\n};\n_c = FooterMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FooterMenu);\nvar _c;\n$RefreshReg$(_c, \"FooterMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb290ZXJNZW51LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQTZCMUIsTUFBTUMsYUFBOEIsU0FBcUk7UUFBcEksRUFBQ0MsWUFBVyxFQUFDQyxjQUFhLEVBQUVDLFlBQVcsRUFBRUMscUJBQW9CLEVBQUVDLFdBQVUsRUFBRUMsb0JBQW1CLEVBQUVDLGFBQVksRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUM7SUFDcEssTUFBTUMsdUJBQXVCLFVBQVc7UUFDdENSLGNBQWNLO1FBQ2RKLFlBQVlFO1FBQ1pELHFCQUFxQkU7UUFFckIsSUFBSUssZ0JBQTZCLEVBQUU7UUFFbkNGLE9BQU9HLE9BQU8sQ0FBQyxDQUFDQyxPQUFTO1lBQ3ZCLE1BQU1DLFFBQVE7Z0JBQ1pDLFNBQVM7Z0JBQ1RDLFFBQVFILEtBQUtHLE1BQU07Z0JBQ25CQyxZQUFZO2dCQUNaQyxVQUFVTCxLQUFLSyxRQUFRO2dCQUN2QkMsT0FBTztZQUNUO1lBRUFSLGNBQWNTLElBQUksQ0FBQ047UUFDckI7UUFFQSxJQUFJO1lBQ0YsT0FBTyxNQUFNZixrREFBVSxDQUFDLHVEQUF1RFksZUFBZVcsSUFBSSxDQUFDLENBQUNDLFdBQWE7Z0JBQy9HQyxRQUFRQyxHQUFHLENBQUMsYUFBYUY7WUFDM0IsR0FBR0csS0FBSyxDQUFDLENBQUNDLE1BQVFILFFBQVFDLEdBQUcsQ0FBQ0U7UUFDaEMsRUFBRSxPQUFPQyxPQUFPO1lBQ2RKLFFBQVFDLEdBQUcsQ0FBQ0c7UUFDZDtJQUNBLDREQUE0RDtJQUM1RCx5SkFBeUo7SUFDM0o7SUFDQSxNQUFNQyxrQkFBa0IsVUFBVztRQUNqQzNCLGNBQWMsS0FBSztRQUNuQkMsWUFBWUU7UUFDWkQscUJBQXFCRTtRQUNyQkwsWUFBWSxJQUFJO0lBQ2xCO0lBRUEscUJBQU8sOERBQUM2QjtRQUFJQyxXQUFVOzswQkFDcEIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBT0QsV0FBVTtvQkFBNEdFLFNBQVMsQ0FBQ0MsUUFBVUw7OEJBQ2hKLDRFQUFDTTt3QkFBSUMsS0FBSTt3QkFBZUMsS0FBSTt3QkFBR04sV0FBVTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHN0MsOERBQUNPO2dCQUFPUCxXQUFVO2dCQUE4RFEsSUFBRzs7a0NBQ2pGLDhEQUFDUDt3QkFBT0QsV0FBVTtrQ0FDaEIsNEVBQUNTOzRCQUFFVCxXQUFVOzRCQUFhRSxTQUFTLENBQUNDLFFBQVV4QjtzQ0FBMEJGOzs7Ozs7Ozs7OztrQ0FFMUUsOERBQUNzQjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNTO2dDQUFFVCxXQUFVOzBDQUFrQzs7Ozs7OzBDQUMvQyw4REFBQ1U7Z0NBQUdWLFdBQVU7MENBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUM7S0FyRE0vQjtBQXNETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9mb290ZXJNZW51LnRzeD9iZmM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgRm9vZE9yZGVyIHtcclxuICBmb29kTmFtZTogc3RyaW5nLFxyXG4gIGZvb2RJZDogbnVtYmVyLFxyXG4gIHF1YW50aXR5OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIHBvc3RQcm9wcyB7XHJcbiAgb3JkZXJJZDogTnVtYmVyLFxyXG4gIGZvb2RJZDogTnVtYmVyLFxyXG4gIGN1c3RvbWVySWQ6IE51bWJlcixcclxuICBxdWFudGl0eTogTnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7IFxyXG4gIHNldFNob3dQZWRpZG86IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcclxuICBzZXRTaG93TWVudTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG4gIHNldFNob3dQZWRpZG9FbnZpYWRvOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XHJcbiAgc2V0U2hvd1BhZ286IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcclxuICB0eHRCb3Rvbjogc3RyaW5nO1xyXG4gIEVzdGFkb1BlZGlkb0VudmlhZG86IGJvb2xlYW47XHJcbiAgRXN0YWRvUGVkaWRvOiBib29sZWFuO1xyXG4gIEVzdGFkb01lbnU6IGJvb2xlYW47XHJcbiAgcGVkaWRvOiBGb29kT3JkZXJbXTtcclxufVxyXG5cclxuY29uc3QgRm9vdGVyTWVudTogUmVhY3QuRkM8UHJvcHM+ID0gKHtzZXRTaG93UGFnbyxzZXRTaG93UGVkaWRvLCBzZXRTaG93TWVudSwgc2V0U2hvd1BlZGlkb0VudmlhZG8sIEVzdGFkb01lbnUsIEVzdGFkb1BlZGlkb0VudmlhZG8sIEVzdGFkb1BlZGlkbywgdHh0Qm90b24sIHBlZGlkb30pID0+IHtcclxuY29uc3QgaGFuZGxlQ2xpY2tWZXJQZWRpZG8gPSBhc3luYyAoKSA9PntcclxuICBzZXRTaG93UGVkaWRvKEVzdGFkb1BlZGlkbyk7IFxyXG4gIHNldFNob3dNZW51KEVzdGFkb01lbnUpO1xyXG4gIHNldFNob3dQZWRpZG9FbnZpYWRvKEVzdGFkb1BlZGlkb0VudmlhZG8pO1xyXG4gIFxyXG4gIGxldCBmaW5pc2hlZElucHV0OiBwb3N0UHJvcHNbXSA9IFtdXHJcblxyXG4gIHBlZGlkby5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IHtcclxuICAgICAgb3JkZXJJZDogNSxcclxuICAgICAgZm9vZElkOiBpdGVtLmZvb2RJZCxcclxuICAgICAgY3VzdG9tZXJJZDogMSxcclxuICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXHJcbiAgICAgIHN0YXRlOiBcImVudmlhZG9cIlxyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaGVkSW5wdXQucHVzaChpbnB1dClcclxuICB9KVxyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXdhaXQgYXhpb3MucG9zdChcImh0dHBzOi8vcGVyZmVjdC10ZWFsLWJlZXRsZS5jeWNsaWMuY2xvdWQvb3JkZXJzRm9vZFwiLCBmaW5pc2hlZElucHV0KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFncmVnYWRvIFwiLCByZXNwb25zZSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9XHJcbiAgLy9jb25zb2xlLmxvZyhFc3RhZG9QZWRpZG9FbnZpYWRvLCBFc3RhZG9QZWRpZG8sIEVzdGFkb01lbnUpXHJcbiAgLy8gU2V0U2hvd1BlZGlkbyBlbiByZWFsaWRhZCBlcyBTaG93IE1lbnUsIHBvciBlbmRlIHNlIGxlIHBhc2EgdW4gdHJ1ZSBhbCBhcHJldGFyIGVsIGJvdG9uIHBhcmEgcXVlIGFwYXJlemFjYSBlbCBtZW51IHkgcXVlIGVsIFNob3dQZWRpZG8gc2UgdnVlbHZhIGZhbHNlXHJcbn1cclxuY29uc3QgaGFuZGxlQ2xpY2tQYWdvID0gYXN5bmMgKCkgPT57XHJcbiAgc2V0U2hvd1BlZGlkbyhmYWxzZSk7IFxyXG4gIHNldFNob3dNZW51KEVzdGFkb01lbnUpO1xyXG4gIHNldFNob3dQZWRpZG9FbnZpYWRvKEVzdGFkb1BlZGlkb0VudmlhZG8pO1xyXG4gIHNldFNob3dQYWdvKHRydWUpO1xyXG59XHJcblxyXG5yZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJib3R0b20tMCBmaXhlZCB3LWZ1bGwgaC1maXQgZ3JpZCBcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZpdCBmbGV4IGp1c3RpZnktZW5kXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1idG5ncmVlbiBoLVs3MHB4XSB3LVs3MHB4XSBtci05IG1iLTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYWN0aXZlOm91dGxpbmUtbm9uZVwiIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlQ2xpY2tQYWdvKCl9PlxyXG4gICAgICA8aW1nIHNyYz1cIi9jYXJyaXRvLnN2Z1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImgtMTIgdy0xMlwiLz5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxmb290ZXIgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzkwcHhdIGJnLWJhY2tncm91bmQgIHNoYWRvdy10b3AgZmxleCBpdGVtcy1jZW50ZXJcIiBpZD1cImZvb3Rlck1lbnVcIj5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGJnLWJ0bmdyZWVuIGFic29sdXRlIHJvdW5kZWQtMnhsIHJpZ2h0LTAgIG1yLTcgaC1bMzhweF0gdy1bMTQxcHhdXCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZUNsaWNrVmVyUGVkaWRvKCkgfT57dHh0Qm90b259PC9wPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzI1MjUyNV0gbWwtNyB0b3AtMCBtdC01IFwiPlN1YnRvdGFsPC9wPlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1bIzI1MjUyNV0gbWwtN1wiPiQyLjAwMCwwPC9oND5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9vdGVyPlxyXG4gIDwvZGl2PjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJNZW51OyJdLCJuYW1lcyI6WyJheGlvcyIsIkZvb3Rlck1lbnUiLCJzZXRTaG93UGFnbyIsInNldFNob3dQZWRpZG8iLCJzZXRTaG93TWVudSIsInNldFNob3dQZWRpZG9FbnZpYWRvIiwiRXN0YWRvTWVudSIsIkVzdGFkb1BlZGlkb0VudmlhZG8iLCJFc3RhZG9QZWRpZG8iLCJ0eHRCb3RvbiIsInBlZGlkbyIsImhhbmRsZUNsaWNrVmVyUGVkaWRvIiwiZmluaXNoZWRJbnB1dCIsImZvckVhY2giLCJpdGVtIiwiaW5wdXQiLCJvcmRlcklkIiwiZm9vZElkIiwiY3VzdG9tZXJJZCIsInF1YW50aXR5Iiwic3RhdGUiLCJwdXNoIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImVycm9yIiwiaGFuZGxlQ2xpY2tQYWdvIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImV2ZW50IiwiaW1nIiwic3JjIiwiYWx0IiwiZm9vdGVyIiwiaWQiLCJwIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/footerMenu.tsx\n"));

/***/ })

});