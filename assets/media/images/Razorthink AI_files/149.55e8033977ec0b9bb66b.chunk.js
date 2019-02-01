(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[149],{

/***/ "./core/src/pages/ExpertAIsPage/ExpertAIsPage.js":
/*!*******************************************************!*\
  !*** ./core/src/pages/ExpertAIsPage/ExpertAIsPage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _commons_src_index_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../commons/src/index.components */ \"./commons/src/index.components.js\");\n\n\n\n\nvar ExpertAIsPage = function ExpertAIsPage(_ref) {\n  var route = _ref.route;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_commons_src_index_components__WEBPACK_IMPORTED_MODULE_2__[\"RouteSwitcher\"], null, route.childRoutes.map(function (routeConfig) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_commons_src_index_components__WEBPACK_IMPORTED_MODULE_2__[\"RouteGenerator\"], {\n      route: routeConfig,\n      key: \"\".concat(routeConfig.path)\n    });\n  }));\n};\n\nExpertAIsPage.propTypes = {\n  route: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({\n    path: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n    exact: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,\n    strict: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,\n    component: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n    dependencies: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({\n      sagas: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),\n      reducers: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({\n        name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n        path: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string\n      }))\n    }),\n    onLeave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,\n    onEnter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,\n    indexRedirect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func\n  })\n};\nExpertAIsPage.defaultProps = {\n  route: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExpertAIsPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL3NyYy9wYWdlcy9FeHBlcnRBSXNQYWdlL0V4cGVydEFJc1BhZ2UuanM/MzcxZCJdLCJuYW1lcyI6WyJFeHBlcnRBSXNQYWdlIiwicm91dGUiLCJjaGlsZFJvdXRlcyIsIm1hcCIsInJvdXRlQ29uZmlnIiwicGF0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiZXhhY3QiLCJib29sIiwic3RyaWN0IiwiY29tcG9uZW50IiwiZGVwZW5kZW5jaWVzIiwic2FnYXMiLCJhcnJheU9mIiwicmVkdWNlcnMiLCJuYW1lIiwib25MZWF2ZSIsImZ1bmMiLCJvbkVudGVyIiwiaW5kZXhSZWRpcmVjdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUNwQiwyREFBQywyRUFBRCxRQUNHQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUFDLFdBQVc7QUFBQSxXQUNoQywyREFBQyw0RUFBRDtBQUNFLFdBQUssRUFBRUEsV0FEVDtBQUVFLFNBQUcsWUFBS0EsV0FBVyxDQUFDQyxJQUFqQjtBQUZMLE1BRGdDO0FBQUEsR0FBakMsQ0FESCxDQURvQjtBQUFBLENBQXRCOztBQVdBTCxhQUFhLENBQUNNLFNBQWQsR0FBMEI7QUFDeEJMLE9BQUssRUFBRU0saURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUNyQkgsUUFBSSxFQUFFRSxpREFBUyxDQUFDRSxNQURLO0FBRXJCQyxTQUFLLEVBQUVILGlEQUFTLENBQUNJLElBRkk7QUFHckJDLFVBQU0sRUFBRUwsaURBQVMsQ0FBQ0ksSUFIRztBQUlyQkUsYUFBUyxFQUFFTixpREFBUyxDQUFDRSxNQUpBO0FBS3JCSyxnQkFBWSxFQUFFUCxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQzVCTyxXQUFLLEVBQUVSLGlEQUFTLENBQUNTLE9BQVYsQ0FBa0JULGlEQUFTLENBQUNFLE1BQTVCLENBRHFCO0FBRTVCUSxjQUFRLEVBQUVWLGlEQUFTLENBQUNTLE9BQVYsQ0FBa0JULGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDMUNVLFlBQUksRUFBRVgsaURBQVMsQ0FBQ0UsTUFEMEI7QUFFMUNKLFlBQUksRUFBRUUsaURBQVMsQ0FBQ0U7QUFGMEIsT0FBaEIsQ0FBbEI7QUFGa0IsS0FBaEIsQ0FMTztBQVlyQlUsV0FBTyxFQUFFWixpREFBUyxDQUFDYSxJQVpFO0FBYXJCQyxXQUFPLEVBQUVkLGlEQUFTLENBQUNhLElBYkU7QUFjckJFLGlCQUFhLEVBQUVmLGlEQUFTLENBQUNhO0FBZEosR0FBaEI7QUFEaUIsQ0FBMUI7QUFtQkFwQixhQUFhLENBQUN1QixZQUFkLEdBQTZCO0FBQzNCdEIsT0FBSyxFQUFFO0FBRG9CLENBQTdCO0FBSWVELDRFQUFmIiwiZmlsZSI6Ii4vY29yZS9zcmMvcGFnZXMvRXhwZXJ0QUlzUGFnZS9FeHBlcnRBSXNQYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZUdlbmVyYXRvciwgUm91dGVTd2l0Y2hlciB9IGZyb20gJ0JCQ29tcG9uZW50cyc7XG5cblxuY29uc3QgRXhwZXJ0QUlzUGFnZSA9ICh7IHJvdXRlIH0pID0+IChcbiAgPFJvdXRlU3dpdGNoZXI+XG4gICAge3JvdXRlLmNoaWxkUm91dGVzLm1hcChyb3V0ZUNvbmZpZyA9PiAoXG4gICAgICA8Um91dGVHZW5lcmF0b3JcbiAgICAgICAgcm91dGU9e3JvdXRlQ29uZmlnfVxuICAgICAgICBrZXk9e2Ake3JvdXRlQ29uZmlnLnBhdGh9YH1cbiAgICAgIC8+XG4gICAgKSl9XG4gIDwvUm91dGVTd2l0Y2hlcj5cbik7XG5cbkV4cGVydEFJc1BhZ2UucHJvcFR5cGVzID0ge1xuICByb3V0ZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4YWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdHJpY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZXBlbmRlbmNpZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzYWdhczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgICByZWR1Y2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIH0pKSxcbiAgICB9KSxcbiAgICBvbkxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbmRleFJlZGlyZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgfSksXG59O1xuXG5FeHBlcnRBSXNQYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm91dGU6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJ0QUlzUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./core/src/pages/ExpertAIsPage/ExpertAIsPage.js\n");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxNDkuNTVlODAzMzk3N2VjMGI5YmI2NmIuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=