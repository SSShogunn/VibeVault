"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-proto";
exports.ids = ["vendor-chunks/has-proto"];
exports.modules = {

/***/ "(rsc)/./node_modules/has-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/has-proto/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nvar test = {\n    foo: {}\n};\nvar $Object = Object;\nmodule.exports = function hasProto() {\n    return ({\n        __proto__: test\n    }).foo === test.foo && !(({\n        __proto__: null\n    }) instanceof $Object);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzLXByb3RvL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsT0FBTztJQUNWQyxLQUFLLENBQUM7QUFDUDtBQUVBLElBQUlDLFVBQVVDO0FBRWRDLE9BQU9DLE9BQU8sR0FBRyxTQUFTQztJQUN6QixPQUFPO1FBQUVDLFdBQVdQO0lBQUssR0FBRUMsR0FBRyxLQUFLRCxLQUFLQyxHQUFHLElBQUksQ0FBRTtRQUFFTSxXQUFXO0lBQUssY0FBYUwsT0FBTTtBQUN2RiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpYmV2YXVsdC8uL25vZGVfbW9kdWxlcy9oYXMtcHJvdG8vaW5kZXguanM/NmYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciB0ZXN0ID0ge1xuXHRmb286IHt9XG59O1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNQcm90bygpIHtcblx0cmV0dXJuIHsgX19wcm90b19fOiB0ZXN0IH0uZm9vID09PSB0ZXN0LmZvbyAmJiAhKHsgX19wcm90b19fOiBudWxsIH0gaW5zdGFuY2VvZiAkT2JqZWN0KTtcbn07XG4iXSwibmFtZXMiOlsidGVzdCIsImZvbyIsIiRPYmplY3QiLCJPYmplY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiaGFzUHJvdG8iLCJfX3Byb3RvX18iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/has-proto/index.js\n");

/***/ })

};
;