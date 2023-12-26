"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/set-function-length";
exports.ids = ["vendor-chunks/set-function-length"];
exports.modules = {

/***/ "(rsc)/./node_modules/set-function-length/index.js":
/*!***************************************************!*\
  !*** ./node_modules/set-function-length/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(rsc)/./node_modules/get-intrinsic/index.js\");\nvar define = __webpack_require__(/*! define-data-property */ \"(rsc)/./node_modules/define-data-property/index.js\");\nvar hasDescriptors = __webpack_require__(/*! has-property-descriptors */ \"(rsc)/./node_modules/has-property-descriptors/index.js\")();\nvar gOPD = __webpack_require__(/*! gopd */ \"(rsc)/./node_modules/gopd/index.js\");\nvar $TypeError = GetIntrinsic(\"%TypeError%\");\nvar $floor = GetIntrinsic(\"%Math.floor%\");\nmodule.exports = function setFunctionLength(fn, length) {\n    if (typeof fn !== \"function\") {\n        throw new $TypeError(\"`fn` is not a function\");\n    }\n    if (typeof length !== \"number\" || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {\n        throw new $TypeError(\"`length` must be a positive 32-bit integer\");\n    }\n    var loose = arguments.length > 2 && !!arguments[2];\n    var functionLengthIsConfigurable = true;\n    var functionLengthIsWritable = true;\n    if (\"length\" in fn && gOPD) {\n        var desc = gOPD(fn, \"length\");\n        if (desc && !desc.configurable) {\n            functionLengthIsConfigurable = false;\n        }\n        if (desc && !desc.writable) {\n            functionLengthIsWritable = false;\n        }\n    }\n    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {\n        if (hasDescriptors) {\n            define(fn, \"length\", length, true, true);\n        } else {\n            define(fn, \"length\", length);\n        }\n    }\n    return fn;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2V0LWZ1bmN0aW9uLWxlbmd0aC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLGVBQWVDLG1CQUFPQSxDQUFDO0FBQzNCLElBQUlDLFNBQVNELG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlFLGlCQUFpQkYsbUJBQU9BLENBQUM7QUFDN0IsSUFBSUcsT0FBT0gsbUJBQU9BLENBQUM7QUFFbkIsSUFBSUksYUFBYUwsYUFBYTtBQUM5QixJQUFJTSxTQUFTTixhQUFhO0FBRTFCTyxPQUFPQyxPQUFPLEdBQUcsU0FBU0Msa0JBQWtCQyxFQUFFLEVBQUVDLE1BQU07SUFDckQsSUFBSSxPQUFPRCxPQUFPLFlBQVk7UUFDN0IsTUFBTSxJQUFJTCxXQUFXO0lBQ3RCO0lBQ0EsSUFBSSxPQUFPTSxXQUFXLFlBQVlBLFNBQVMsS0FBS0EsU0FBUyxjQUFjTCxPQUFPSyxZQUFZQSxRQUFRO1FBQ2pHLE1BQU0sSUFBSU4sV0FBVztJQUN0QjtJQUVBLElBQUlPLFFBQVFDLFVBQVVGLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQ0UsU0FBUyxDQUFDLEVBQUU7SUFFbEQsSUFBSUMsK0JBQStCO0lBQ25DLElBQUlDLDJCQUEyQjtJQUMvQixJQUFJLFlBQVlMLE1BQU1OLE1BQU07UUFDM0IsSUFBSVksT0FBT1osS0FBS00sSUFBSTtRQUNwQixJQUFJTSxRQUFRLENBQUNBLEtBQUtDLFlBQVksRUFBRTtZQUMvQkgsK0JBQStCO1FBQ2hDO1FBQ0EsSUFBSUUsUUFBUSxDQUFDQSxLQUFLRSxRQUFRLEVBQUU7WUFDM0JILDJCQUEyQjtRQUM1QjtJQUNEO0lBRUEsSUFBSUQsZ0NBQWdDQyw0QkFBNEIsQ0FBQ0gsT0FBTztRQUN2RSxJQUFJVCxnQkFBZ0I7WUFDbkJELE9BQU9RLElBQUksVUFBVUMsUUFBUSxNQUFNO1FBQ3BDLE9BQU87WUFDTlQsT0FBT1EsSUFBSSxVQUFVQztRQUN0QjtJQUNEO0lBQ0EsT0FBT0Q7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpYmV2YXVsdC8uL25vZGVfbW9kdWxlcy9zZXQtZnVuY3Rpb24tbGVuZ3RoL2luZGV4LmpzPzkzOWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1kYXRhLXByb3BlcnR5Jyk7XG52YXIgaGFzRGVzY3JpcHRvcnMgPSByZXF1aXJlKCdoYXMtcHJvcGVydHktZGVzY3JpcHRvcnMnKSgpO1xudmFyIGdPUEQgPSByZXF1aXJlKCdnb3BkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xudmFyICRmbG9vciA9IEdldEludHJpbnNpYygnJU1hdGguZmxvb3IlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0RnVuY3Rpb25MZW5ndGgoZm4sIGxlbmd0aCkge1xuXHRpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2BmbmAgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0fVxuXHRpZiAodHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicgfHwgbGVuZ3RoIDwgMCB8fCBsZW5ndGggPiAweEZGRkZGRkZGIHx8ICRmbG9vcihsZW5ndGgpICE9PSBsZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYGxlbmd0aGAgbXVzdCBiZSBhIHBvc2l0aXZlIDMyLWJpdCBpbnRlZ2VyJyk7XG5cdH1cblxuXHR2YXIgbG9vc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiAhIWFyZ3VtZW50c1syXTtcblxuXHR2YXIgZnVuY3Rpb25MZW5ndGhJc0NvbmZpZ3VyYWJsZSA9IHRydWU7XG5cdHZhciBmdW5jdGlvbkxlbmd0aElzV3JpdGFibGUgPSB0cnVlO1xuXHRpZiAoJ2xlbmd0aCcgaW4gZm4gJiYgZ09QRCkge1xuXHRcdHZhciBkZXNjID0gZ09QRChmbiwgJ2xlbmd0aCcpO1xuXHRcdGlmIChkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0ZnVuY3Rpb25MZW5ndGhJc0NvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoZGVzYyAmJiAhZGVzYy53cml0YWJsZSkge1xuXHRcdFx0ZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGZ1bmN0aW9uTGVuZ3RoSXNDb25maWd1cmFibGUgfHwgZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlIHx8ICFsb29zZSkge1xuXHRcdGlmIChoYXNEZXNjcmlwdG9ycykge1xuXHRcdFx0ZGVmaW5lKGZuLCAnbGVuZ3RoJywgbGVuZ3RoLCB0cnVlLCB0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVmaW5lKGZuLCAnbGVuZ3RoJywgbGVuZ3RoKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZuO1xufTtcbiJdLCJuYW1lcyI6WyJHZXRJbnRyaW5zaWMiLCJyZXF1aXJlIiwiZGVmaW5lIiwiaGFzRGVzY3JpcHRvcnMiLCJnT1BEIiwiJFR5cGVFcnJvciIsIiRmbG9vciIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZXRGdW5jdGlvbkxlbmd0aCIsImZuIiwibGVuZ3RoIiwibG9vc2UiLCJhcmd1bWVudHMiLCJmdW5jdGlvbkxlbmd0aElzQ29uZmlndXJhYmxlIiwiZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlIiwiZGVzYyIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/set-function-length/index.js\n");

/***/ })

};
;