webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_jim_Documents_coding_before_dark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/jim/Documents/coding/before-dark/components/Input.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar Input = function Input(_ref) {\n  _s();\n\n  var _jsxDEV2;\n\n  var toggle = _ref.toggle,\n      getSunset = _ref.getSunset;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      distance = _useState[0],\n      setDistance = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      pace = _useState2[0],\n      setPace = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      zip = _useState3[0],\n      setZip = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      miles = _useState4[0],\n      setMiles = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      minutes = _useState5[0],\n      setMinutes = _useState5[1];\n\n  var handleDistance = function handleDistance(e) {\n    setDistance(e.target.value);\n    console.log('hello?');\n  };\n\n  var handlePace = function handlePace(e) {\n    setPace(e);\n  };\n\n  var handleZip = function handleZip(e) {\n    setZip(e.target.value);\n  };\n\n  var buildMilesArray = function buildMilesArray() {\n    var result = [];\n\n    for (var i = 1; i <= 10; i += 0.5) {\n      result.push(i);\n    }\n\n    setMiles(result);\n  };\n\n  var buildMinutesArray = function buildMinutesArray() {\n    var result = [];\n    var minutes = 7;\n    var seconds = 0;\n\n    while (minutes < 15) {\n      var time = minutes + ':' + seconds;\n      result.push(time);\n\n      if (seconds === 45) {\n        minutes += 1;\n        seconds = 0;\n      } else {\n        seconds += 15;\n      }\n    }\n\n    setMinutes(result);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!toggle) {\n      setDistance('');\n      setPace('');\n      setZip('');\n    }\n\n    ;\n    buildMilesArray();\n    buildMinutesArray();\n  }, [toggle]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"input-container\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n      onSubmit: function onSubmit(e) {\n        return getSunset(e, zip, distance, pace);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: \"How many miles do you want to run?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), distance ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"selected\",\n        children: [distance, \" mile(s) total\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 21\n      }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"select\", {\n        onChange: function onChange(e) {\n          return handleDistance(e);\n        },\n        children: miles.map(function (mile, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n            value: mile,\n            children: mile\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"input-line\",\n        children: \"How many minutes do you think it will take to run each mile, on average?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this), pace ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"selected\",\n        children: [pace, \" minutes per mile\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 17\n      }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"select\", {\n        onSelect: handlePace,\n        children: minutes.map(function (minute, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n            value: minute,\n            children: minute\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"input-line\",\n        children: \"What's your zip code?\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", (_jsxDEV2 = {\n        className: \"input-line\"\n      }, Object(_Users_jim_Documents_coding_before_dark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"className\", \"zip-form\"), Object(_Users_jim_Documents_coding_before_dark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"type\", \"text\"), Object(_Users_jim_Documents_coding_before_dark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"value\", zip), Object(_Users_jim_Documents_coding_before_dark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"placeholder\", \"5 digit zip code\"), Object(_Users_jim_Documents_coding_before_dark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"maxLength\", \"5\"), Object(_Users_jim_Documents_coding_before_dark_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"onChange\", handleZip), _jsxDEV2), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: \"We use this to find your local sunset time.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        type: \"submit\",\n        value: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Input, \"p7mOXoxC/qSmy6MH90Rg/27Yw7c=\");\n\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c;\n\n$RefreshReg$(_c, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC5qcz80ZmI1Il0sIm5hbWVzIjpbIklucHV0IiwidG9nZ2xlIiwiZ2V0U3Vuc2V0IiwidXNlU3RhdGUiLCJkaXN0YW5jZSIsInNldERpc3RhbmNlIiwicGFjZSIsInNldFBhY2UiLCJ6aXAiLCJzZXRaaXAiLCJtaWxlcyIsInNldE1pbGVzIiwibWludXRlcyIsInNldE1pbnV0ZXMiLCJoYW5kbGVEaXN0YW5jZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVQYWNlIiwiaGFuZGxlWmlwIiwiYnVpbGRNaWxlc0FycmF5IiwicmVzdWx0IiwiaSIsInB1c2giLCJidWlsZE1pbnV0ZXNBcnJheSIsInNlY29uZHMiLCJ0aW1lIiwidXNlRWZmZWN0IiwibWFwIiwibWlsZSIsImluZGV4IiwibWludXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBMkI7QUFBQTs7QUFBQTs7QUFBQSxNQUF4QkMsTUFBd0IsUUFBeEJBLE1BQXdCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBQyxFQUFELENBREQ7QUFBQSxNQUNoQ0MsUUFEZ0M7QUFBQSxNQUN0QkMsV0FEc0I7O0FBQUEsbUJBRWZGLHNEQUFRLENBQUMsRUFBRCxDQUZPO0FBQUEsTUFFaENHLElBRmdDO0FBQUEsTUFFMUJDLE9BRjBCOztBQUFBLG1CQUdqQkosc0RBQVEsQ0FBQyxFQUFELENBSFM7QUFBQSxNQUdoQ0ssR0FIZ0M7QUFBQSxNQUczQkMsTUFIMkI7O0FBQUEsbUJBSWJOLHNEQUFRLENBQUMsRUFBRCxDQUpLO0FBQUEsTUFJaENPLEtBSmdDO0FBQUEsTUFJekJDLFFBSnlCOztBQUFBLG1CQUtUUixzREFBUSxDQUFDLEVBQUQsQ0FMQztBQUFBLE1BS2hDUyxPQUxnQztBQUFBLE1BS3ZCQyxVQUx1Qjs7QUFPdkMsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxDQUFDLEVBQUk7QUFDMUJWLGVBQVcsQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsR0FIRDs7QUFJQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBTCxDQUFDLEVBQUk7QUFDdEJSLFdBQU8sQ0FBQ1EsQ0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFHQSxNQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBTixDQUFDLEVBQUk7QUFDckJOLFVBQU0sQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBTjtBQUNELEdBRkQ7O0FBSUEsTUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFFBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsSUFBSSxFQUFyQixFQUF5QkEsQ0FBQyxJQUFJLEdBQTlCLEVBQW1DO0FBQ2pDRCxZQUFNLENBQUNFLElBQVAsQ0FBWUQsQ0FBWjtBQUNEOztBQUNEYixZQUFRLENBQUNZLE1BQUQsQ0FBUjtBQUNELEdBTkQ7O0FBUUEsTUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLFFBQU1ILE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBSVgsT0FBTyxHQUFHLENBQWQ7QUFDQSxRQUFJZSxPQUFPLEdBQUcsQ0FBZDs7QUFDQSxXQUFPZixPQUFPLEdBQUcsRUFBakIsRUFBcUI7QUFDbkIsVUFBSWdCLElBQUksR0FBR2hCLE9BQU8sR0FBRyxHQUFWLEdBQWdCZSxPQUEzQjtBQUNBSixZQUFNLENBQUNFLElBQVAsQ0FBWUcsSUFBWjs7QUFDQSxVQUFJRCxPQUFPLEtBQUssRUFBaEIsRUFBb0I7QUFDbEJmLGVBQU8sSUFBSSxDQUFYO0FBQ0FlLGVBQU8sR0FBRyxDQUFWO0FBQ0QsT0FIRCxNQUdPO0FBQ0xBLGVBQU8sSUFBSSxFQUFYO0FBQ0Q7QUFDRjs7QUFDRGQsY0FBVSxDQUFDVSxNQUFELENBQVY7QUFDRCxHQWZEOztBQWlCQU0seURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDNUIsTUFBTCxFQUFhO0FBQ1hJLGlCQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0FFLGFBQU8sQ0FBQyxFQUFELENBQVA7QUFDQUUsWUFBTSxDQUFDLEVBQUQsQ0FBTjtBQUNEOztBQUFBO0FBQ0RhLG1CQUFlO0FBQ2ZJLHFCQUFpQjtBQUNsQixHQVJRLEVBUU4sQ0FBQ3pCLE1BQUQsQ0FSTSxDQUFUO0FBVUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQSwyQkFDRTtBQUFNLGNBQVEsRUFBRSxrQkFBQWMsQ0FBQztBQUFBLGVBQUliLFNBQVMsQ0FBQ2EsQ0FBRCxFQUFJUCxHQUFKLEVBQVNKLFFBQVQsRUFBbUJFLElBQW5CLENBQWI7QUFBQSxPQUFqQjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR0YsUUFBUSxnQkFBRztBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLG1CQUEyQkEsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsR0FBOEQsSUFGekUsZUFHRTtBQUFRLGdCQUFRLEVBQUUsa0JBQUFXLENBQUM7QUFBQSxpQkFBSUQsY0FBYyxDQUFDQyxDQUFELENBQWxCO0FBQUEsU0FBbkI7QUFBQSxrQkFDR0wsS0FBSyxDQUFDb0IsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDhCQUNUO0FBQW9CLGlCQUFLLEVBQUVELElBQTNCO0FBQUEsc0JBQWtDQTtBQUFsQyxhQUFhQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFM7QUFBQSxTQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBUUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixFQVNHMUIsSUFBSSxnQkFBRztBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLG1CQUEyQkEsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsR0FBNkQsSUFUcEUsZUFVRTtBQUFRLGdCQUFRLEVBQUVjLFVBQWxCO0FBQUEsa0JBQ0dSLE9BQU8sQ0FBQ2tCLEdBQVIsQ0FBWSxVQUFDRyxNQUFELEVBQVNELEtBQVQ7QUFBQSw4QkFDWDtBQUFvQixpQkFBSyxFQUFFQyxNQUEzQjtBQUFBLHNCQUFvQ0E7QUFBcEMsYUFBYUQsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURXO0FBQUEsU0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRixlQWVFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkYsZUFnQkU7QUFBTyxpQkFBUyxFQUFDO0FBQWpCLDhLQUF3QyxVQUF4QyxtS0FBd0QsTUFBeEQsb0tBQXNFeEIsR0FBdEUsMEtBQXVGLGtCQUF2Rix3S0FBb0gsR0FBcEgsdUtBQWtJYSxTQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGLGVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGLGVBa0JFO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsYUFBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBN0VEOztHQUFNckIsSzs7S0FBQUEsSztBQStFU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5wdXQgPSAoeyB0b2dnbGUsIGdldFN1bnNldCB9KSA9PiB7XG4gIGNvbnN0IFtkaXN0YW5jZSwgc2V0RGlzdGFuY2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFjZSwgc2V0UGFjZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt6aXAsIHNldFppcF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttaWxlcywgc2V0TWlsZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbWludXRlcywgc2V0TWludXRlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlRGlzdGFuY2UgPSBlID0+IHtcbiAgICBzZXREaXN0YW5jZShlLnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2coJ2hlbGxvPycpXG4gIH1cbiAgY29uc3QgaGFuZGxlUGFjZSA9IGUgPT4ge1xuICAgIHNldFBhY2UoZSk7XG4gIH1cbiAgY29uc3QgaGFuZGxlWmlwID0gZSA9PiB7XG4gICAgc2V0WmlwKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGJ1aWxkTWlsZXNBcnJheSA9ICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAwLjUpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgIH1cbiAgICBzZXRNaWxlcyhyZXN1bHQpO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkTWludXRlc0FycmF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBtaW51dGVzID0gNztcbiAgICBsZXQgc2Vjb25kcyA9IDA7XG4gICAgd2hpbGUgKG1pbnV0ZXMgPCAxNSkge1xuICAgICAgbGV0IHRpbWUgPSBtaW51dGVzICsgJzonICsgc2Vjb25kcztcbiAgICAgIHJlc3VsdC5wdXNoKHRpbWUpO1xuICAgICAgaWYgKHNlY29uZHMgPT09IDQ1KSB7XG4gICAgICAgIG1pbnV0ZXMgKz0gMTtcbiAgICAgICAgc2Vjb25kcyA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWNvbmRzICs9IDE1O1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRNaW51dGVzKHJlc3VsdCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXRvZ2dsZSkge1xuICAgICAgc2V0RGlzdGFuY2UoJycpO1xuICAgICAgc2V0UGFjZSgnJyk7XG4gICAgICBzZXRaaXAoJycpO1xuICAgIH07XG4gICAgYnVpbGRNaWxlc0FycmF5KCk7XG4gICAgYnVpbGRNaW51dGVzQXJyYXkoKTtcbiAgfSwgW3RvZ2dsZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4gZ2V0U3Vuc2V0KGUsIHppcCwgZGlzdGFuY2UsIHBhY2UpfT5cbiAgICAgICAgPGRpdj5Ib3cgbWFueSBtaWxlcyBkbyB5b3Ugd2FudCB0byBydW4/PC9kaXY+XG4gICAgICAgIHtkaXN0YW5jZSA/IDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0ZWRcIj57ZGlzdGFuY2V9IG1pbGUocykgdG90YWw8L2Rpdj4gOiBudWxsfVxuICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtlID0+IGhhbmRsZURpc3RhbmNlKGUpfT5cbiAgICAgICAgICB7bWlsZXMubWFwKChtaWxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17bWlsZX0+e21pbGV9PC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWxpbmVcIj5Ib3cgbWFueSBtaW51dGVzIGRvIHlvdSB0aGluayBpdCB3aWxsIHRha2UgdG8gcnVuIGVhY2ggbWlsZSwgb24gYXZlcmFnZT88L2Rpdj5cbiAgICAgICAge3BhY2UgPyA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGVkXCI+e3BhY2V9IG1pbnV0ZXMgcGVyIG1pbGU8L2Rpdj4gOiBudWxsfVxuICAgICAgICA8c2VsZWN0IG9uU2VsZWN0PXtoYW5kbGVQYWNlfT5cbiAgICAgICAgICB7bWludXRlcy5tYXAoKG1pbnV0ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e21pbnV0ZX0+e21pbnV0ZX08L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtbGluZVwiPldoYXQncyB5b3VyIHppcCBjb2RlPzwvZGl2PlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQtbGluZVwiIGNsYXNzTmFtZT1cInppcC1mb3JtXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17emlwfSBwbGFjZWhvbGRlcj1cIjUgZGlnaXQgemlwIGNvZGVcIiBtYXhMZW5ndGg9XCI1XCIgb25DaGFuZ2U9e2hhbmRsZVppcH0gLz5cbiAgICAgICAgPGRpdj5XZSB1c2UgdGhpcyB0byBmaW5kIHlvdXIgbG9jYWwgc3Vuc2V0IHRpbWUuPC9kaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Input.js\n");

/***/ })

})