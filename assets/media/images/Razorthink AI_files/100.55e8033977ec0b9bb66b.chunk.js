(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[100],{

/***/ "./core/src/pages/ExpertAIsPage/ExpertAIPage/ExpertAIPage.constants.js":
/*!*****************************************************************************!*\
  !*** ./core/src/pages/ExpertAIsPage/ExpertAIPage/ExpertAIPage.constants.js ***!
  \*****************************************************************************/
/*! exports provided: ACTION_GET_ACTIVE_EXPERT_AI, ACTION_GET_ACTIVE_EXPERT_AI_ERROR, ACTION_SET_CURRENT_EXPERT_AI, ACTION_SET_RUN_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_GET_ACTIVE_EXPERT_AI\", function() { return ACTION_GET_ACTIVE_EXPERT_AI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_GET_ACTIVE_EXPERT_AI_ERROR\", function() { return ACTION_GET_ACTIVE_EXPERT_AI_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_SET_CURRENT_EXPERT_AI\", function() { return ACTION_SET_CURRENT_EXPERT_AI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_SET_RUN_DATA\", function() { return ACTION_SET_RUN_DATA; });\nvar ACTION_GET_ACTIVE_EXPERT_AI = 'bb/ExpertAIPage/GET_ACTIVE_EXPERT_AI';\nvar ACTION_GET_ACTIVE_EXPERT_AI_ERROR = 'bb/ExpertAIPage/GET_ACTIVE_EXPERT_AI_ERROR';\nvar ACTION_SET_CURRENT_EXPERT_AI = 'bb/ExpertAIPage/SET_CURRENT_EXPERT_AI';\nvar ACTION_SET_RUN_DATA = 'ACTION_SET_RUN_DATA';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL3NyYy9wYWdlcy9FeHBlcnRBSXNQYWdlL0V4cGVydEFJUGFnZS9FeHBlcnRBSVBhZ2UuY29uc3RhbnRzLmpzPzRhYmYiXSwibmFtZXMiOlsiQUNUSU9OX0dFVF9BQ1RJVkVfRVhQRVJUX0FJIiwiQUNUSU9OX0dFVF9BQ1RJVkVfRVhQRVJUX0FJX0VSUk9SIiwiQUNUSU9OX1NFVF9DVVJSRU5UX0VYUEVSVF9BSSIsIkFDVElPTl9TRVRfUlVOX0RBVEEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSwyQkFBMkIsR0FBRyxzQ0FBcEM7QUFDQSxJQUFNQyxpQ0FBaUMsR0FBRyw0Q0FBMUM7QUFFQSxJQUFNQyw0QkFBNEIsR0FBRyx1Q0FBckM7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUIiLCJmaWxlIjoiLi9jb3JlL3NyYy9wYWdlcy9FeHBlcnRBSXNQYWdlL0V4cGVydEFJUGFnZS9FeHBlcnRBSVBhZ2UuY29uc3RhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFDVElPTl9HRVRfQUNUSVZFX0VYUEVSVF9BSSA9ICdiYi9FeHBlcnRBSVBhZ2UvR0VUX0FDVElWRV9FWFBFUlRfQUknO1xuZXhwb3J0IGNvbnN0IEFDVElPTl9HRVRfQUNUSVZFX0VYUEVSVF9BSV9FUlJPUiA9ICdiYi9FeHBlcnRBSVBhZ2UvR0VUX0FDVElWRV9FWFBFUlRfQUlfRVJST1InO1xuXG5leHBvcnQgY29uc3QgQUNUSU9OX1NFVF9DVVJSRU5UX0VYUEVSVF9BSSA9ICdiYi9FeHBlcnRBSVBhZ2UvU0VUX0NVUlJFTlRfRVhQRVJUX0FJJztcbmV4cG9ydCBjb25zdCBBQ1RJT05fU0VUX1JVTl9EQVRBID0gJ0FDVElPTl9TRVRfUlVOX0RBVEEnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./core/src/pages/ExpertAIsPage/ExpertAIPage/ExpertAIPage.constants.js\n");

/***/ }),

/***/ "./core/src/pages/ExpertAIsPage/ExpertAIPage/ExpertAIPage.reducer.js":
/*!***************************************************************************!*\
  !*** ./core/src/pages/ExpertAIsPage/ExpertAIPage/ExpertAIPage.reducer.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ \"./node_modules/immutable/dist/immutable.js\");\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/actions */ \"./core/src/constants/actions.js\");\n/* harmony import */ var _utils_reducerUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/reducerUtils */ \"./core/src/utils/reducerUtils.js\");\n/* harmony import */ var _ExpertAIPage_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExpertAIPage.constants */ \"./core/src/pages/ExpertAIsPage/ExpertAIPage/ExpertAIPage.constants.js\");\nvar _reducerFunctions;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__[\"fromJS\"])({\n  activeExpertAI: {}\n});\nvar reducerFunctions = (_reducerFunctions = {}, _defineProperty(_reducerFunctions, _ExpertAIPage_constants__WEBPACK_IMPORTED_MODULE_3__[\"ACTION_SET_CURRENT_EXPERT_AI\"], function (state, payload) {\n  return state.updateIn(['activeExpertAI'], function () {\n    return Object(immutable__WEBPACK_IMPORTED_MODULE_0__[\"fromJS\"])(payload);\n  });\n}), _defineProperty(_reducerFunctions, _constants_actions__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_LEAVE_EXPERT_AI_PAGE\"], function (state) {\n  return state.updateIn(['activeExpertAI'], function () {\n    return Object(immutable__WEBPACK_IMPORTED_MODULE_0__[\"fromJS\"])({});\n  });\n}), _defineProperty(_reducerFunctions, _ExpertAIPage_constants__WEBPACK_IMPORTED_MODULE_3__[\"ACTION_SET_RUN_DATA\"], function (state, payload) {\n  return state.set('runData', Object(immutable__WEBPACK_IMPORTED_MODULE_0__[\"fromJS\"])(payload));\n}), _reducerFunctions);\nvar expertAIPageReducer = Object(_utils_reducerUtils__WEBPACK_IMPORTED_MODULE_2__[\"createReducerFromObject\"])(reducerFunctions, initialState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (expertAIPageReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL3NyYy9wYWdlcy9FeHBlcnRBSXNQYWdlL0V4cGVydEFJUGFnZS9FeHBlcnRBSVBhZ2UucmVkdWNlci5qcz9iODcxIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImZyb21KUyIsImFjdGl2ZUV4cGVydEFJIiwicmVkdWNlckZ1bmN0aW9ucyIsIkFDVElPTl9TRVRfQ1VSUkVOVF9FWFBFUlRfQUkiLCJzdGF0ZSIsInBheWxvYWQiLCJ1cGRhdGVJbiIsIkFDVElPTl9MRUFWRV9FWFBFUlRfQUlfUEFHRSIsIkFDVElPTl9TRVRfUlVOX0RBVEEiLCJzZXQiLCJleHBlcnRBSVBhZ2VSZWR1Y2VyIiwiY3JlYXRlUmVkdWNlckZyb21PYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0Msd0RBQU0sQ0FBQztBQUMxQkMsZ0JBQWMsRUFBRTtBQURVLENBQUQsQ0FBM0I7QUFJQSxJQUFNQyxnQkFBZ0IsK0RBQ25CQyxvRkFEbUIsRUFDWSxVQUFDQyxLQUFELEVBQVFDLE9BQVI7QUFBQSxTQUFvQkQsS0FBSyxDQUFDRSxRQUFOLENBQWUsQ0FBQyxnQkFBRCxDQUFmLEVBQW1DO0FBQUEsV0FBTU4sd0RBQU0sQ0FBQ0ssT0FBRCxDQUFaO0FBQUEsR0FBbkMsQ0FBcEI7QUFBQSxDQURaLHNDQUVuQkUsOEVBRm1CLEVBRVcsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsUUFBTixDQUFlLENBQUMsZ0JBQUQsQ0FBZixFQUFtQztBQUFBLFdBQU1OLHdEQUFNLENBQUMsRUFBRCxDQUFaO0FBQUEsR0FBbkMsQ0FBSjtBQUFBLENBRmhCLHNDQUduQlEsMkVBSG1CLEVBR0csVUFBQ0osS0FBRCxFQUFRQyxPQUFSO0FBQUEsU0FBb0JELEtBQUssQ0FBQ0ssR0FBTixDQUFVLFNBQVYsRUFBcUJULHdEQUFNLENBQUNLLE9BQUQsQ0FBM0IsQ0FBcEI7QUFBQSxDQUhILHFCQUF0QjtBQU1BLElBQU1LLG1CQUFtQixHQUFHQyxtRkFBdUIsQ0FBQ1QsZ0JBQUQsRUFBbUJILFlBQW5CLENBQW5EO0FBQ2VXLGtGQUFmIiwiZmlsZSI6Ii4vY29yZS9zcmMvcGFnZXMvRXhwZXJ0QUlzUGFnZS9FeHBlcnRBSVBhZ2UvRXhwZXJ0QUlQYWdlLnJlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tSlMgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHsgQUNUSU9OX0xFQVZFX0VYUEVSVF9BSV9QQUdFIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlUmVkdWNlckZyb21PYmplY3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9yZWR1Y2VyVXRpbHMnO1xuaW1wb3J0IHsgQUNUSU9OX1NFVF9DVVJSRU5UX0VYUEVSVF9BSSwgQUNUSU9OX1NFVF9SVU5fREFUQSB9IGZyb20gJy4vRXhwZXJ0QUlQYWdlLmNvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IGZyb21KUyh7XG4gIGFjdGl2ZUV4cGVydEFJOiB7fSxcbn0pO1xuXG5jb25zdCByZWR1Y2VyRnVuY3Rpb25zID0ge1xuICBbQUNUSU9OX1NFVF9DVVJSRU5UX0VYUEVSVF9BSV06IChzdGF0ZSwgcGF5bG9hZCkgPT4gc3RhdGUudXBkYXRlSW4oWydhY3RpdmVFeHBlcnRBSSddLCAoKSA9PiBmcm9tSlMocGF5bG9hZCkpLFxuICBbQUNUSU9OX0xFQVZFX0VYUEVSVF9BSV9QQUdFXTogc3RhdGUgPT4gc3RhdGUudXBkYXRlSW4oWydhY3RpdmVFeHBlcnRBSSddLCAoKSA9PiBmcm9tSlMoe30pKSxcbiAgW0FDVElPTl9TRVRfUlVOX0RBVEFdOiAoc3RhdGUsIHBheWxvYWQpID0+IHN0YXRlLnNldCgncnVuRGF0YScsIGZyb21KUyhwYXlsb2FkKSksXG59O1xuXG5jb25zdCBleHBlcnRBSVBhZ2VSZWR1Y2VyID0gY3JlYXRlUmVkdWNlckZyb21PYmplY3QocmVkdWNlckZ1bmN0aW9ucywgaW5pdGlhbFN0YXRlKTtcbmV4cG9ydCBkZWZhdWx0IGV4cGVydEFJUGFnZVJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./core/src/pages/ExpertAIsPage/ExpertAIPage/ExpertAIPage.reducer.js\n");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxMDAuNTVlODAzMzk3N2VjMGI5YmI2NmIuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=