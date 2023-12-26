"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@stripe";
exports.ids = ["vendor-chunks/@stripe"];
exports.modules = {

/***/ "(ssr)/./node_modules/@stripe/stripe-js/dist/stripe.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadStripe: () => (/* binding */ loadStripe)\n/* harmony export */ });\nvar V3_URL = \"https://js.stripe.com/v3\";\nvar V3_URL_REGEX = /^https:\\/\\/js\\.stripe\\.com\\/v3\\/?(\\?.*)?$/;\nvar EXISTING_SCRIPT_MESSAGE = \"loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used\";\nvar findScript = function findScript() {\n    var scripts = document.querySelectorAll('script[src^=\"'.concat(V3_URL, '\"]'));\n    for(var i = 0; i < scripts.length; i++){\n        var script = scripts[i];\n        if (!V3_URL_REGEX.test(script.src)) {\n            continue;\n        }\n        return script;\n    }\n    return null;\n};\nvar injectScript = function injectScript(params) {\n    var queryString = params && !params.advancedFraudSignals ? \"?advancedFraudSignals=false\" : \"\";\n    var script = document.createElement(\"script\");\n    script.src = \"\".concat(V3_URL).concat(queryString);\n    var headOrBody = document.head || document.body;\n    if (!headOrBody) {\n        throw new Error(\"Expected document.body not to be null. Stripe.js requires a <body> element.\");\n    }\n    headOrBody.appendChild(script);\n    return script;\n};\nvar registerWrapper = function registerWrapper(stripe, startTime) {\n    if (!stripe || !stripe._registerWrapper) {\n        return;\n    }\n    stripe._registerWrapper({\n        name: \"stripe-js\",\n        version: \"2.2.2\",\n        startTime: startTime\n    });\n};\nvar stripePromise = null;\nvar onErrorListener = null;\nvar onLoadListener = null;\nvar onError = function onError(reject) {\n    return function() {\n        reject(new Error(\"Failed to load Stripe.js\"));\n    };\n};\nvar onLoad = function onLoad(resolve, reject) {\n    return function() {\n        if (window.Stripe) {\n            resolve(window.Stripe);\n        } else {\n            reject(new Error(\"Stripe.js not available\"));\n        }\n    };\n};\nvar loadScript = function loadScript(params) {\n    // Ensure that we only attempt to load Stripe.js at most once\n    if (stripePromise !== null) {\n        return stripePromise;\n    }\n    stripePromise = new Promise(function(resolve, reject) {\n        if (true) {\n            // Resolve to null when imported server side. This makes the module\n            // safe to import in an isomorphic code base.\n            resolve(null);\n            return;\n        }\n        if (window.Stripe && params) {\n            console.warn(EXISTING_SCRIPT_MESSAGE);\n        }\n        if (window.Stripe) {\n            resolve(window.Stripe);\n            return;\n        }\n        try {\n            var script = findScript();\n            if (script && params) {\n                console.warn(EXISTING_SCRIPT_MESSAGE);\n            } else if (!script) {\n                script = injectScript(params);\n            } else if (script && onLoadListener !== null && onErrorListener !== null) {\n                var _script$parentNode;\n                // remove event listeners\n                script.removeEventListener(\"load\", onLoadListener);\n                script.removeEventListener(\"error\", onErrorListener); // if script exists, but we are reloading due to an error,\n                // reload script to trigger 'load' event\n                (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);\n                script = injectScript(params);\n            }\n            onLoadListener = onLoad(resolve, reject);\n            onErrorListener = onError(reject);\n            script.addEventListener(\"load\", onLoadListener);\n            script.addEventListener(\"error\", onErrorListener);\n        } catch (error) {\n            reject(error);\n            return;\n        }\n    }); // Resets stripePromise on error\n    return stripePromise[\"catch\"](function(error) {\n        stripePromise = null;\n        return Promise.reject(error);\n    });\n};\nvar initStripe = function initStripe(maybeStripe, args, startTime) {\n    if (maybeStripe === null) {\n        return null;\n    }\n    var stripe = maybeStripe.apply(undefined, args);\n    registerWrapper(stripe, startTime);\n    return stripe;\n}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types\n// own script injection.\nvar stripePromise$1 = Promise.resolve().then(function() {\n    return loadScript(null);\n});\nvar loadCalled = false;\nstripePromise$1[\"catch\"](function(err) {\n    if (!loadCalled) {\n        console.warn(err);\n    }\n});\nvar loadStripe = function loadStripe() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    loadCalled = true;\n    var startTime = Date.now();\n    return stripePromise$1.then(function(maybeStripe) {\n        return initStripe(maybeStripe, args, startTime);\n    });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zdHJpcGUtanMvZGlzdC9zdHJpcGUuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJQSxTQUFTO0FBQ2IsSUFBSUMsZUFBZTtBQUNuQixJQUFJQywwQkFBMEI7QUFDOUIsSUFBSUMsYUFBYSxTQUFTQTtJQUN4QixJQUFJQyxVQUFVQyxTQUFTQyxnQkFBZ0IsQ0FBQyxnQkFBaUJDLE1BQU0sQ0FBQ1AsUUFBUTtJQUV4RSxJQUFLLElBQUlRLElBQUksR0FBR0EsSUFBSUosUUFBUUssTUFBTSxFQUFFRCxJQUFLO1FBQ3ZDLElBQUlFLFNBQVNOLE9BQU8sQ0FBQ0ksRUFBRTtRQUV2QixJQUFJLENBQUNQLGFBQWFVLElBQUksQ0FBQ0QsT0FBT0UsR0FBRyxHQUFHO1lBQ2xDO1FBQ0Y7UUFFQSxPQUFPRjtJQUNUO0lBRUEsT0FBTztBQUNUO0FBRUEsSUFBSUcsZUFBZSxTQUFTQSxhQUFhQyxNQUFNO0lBQzdDLElBQUlDLGNBQWNELFVBQVUsQ0FBQ0EsT0FBT0Usb0JBQW9CLEdBQUcsZ0NBQWdDO0lBQzNGLElBQUlOLFNBQVNMLFNBQVNZLGFBQWEsQ0FBQztJQUNwQ1AsT0FBT0UsR0FBRyxHQUFHLEdBQUdMLE1BQU0sQ0FBQ1AsUUFBUU8sTUFBTSxDQUFDUTtJQUN0QyxJQUFJRyxhQUFhYixTQUFTYyxJQUFJLElBQUlkLFNBQVNlLElBQUk7SUFFL0MsSUFBSSxDQUFDRixZQUFZO1FBQ2YsTUFBTSxJQUFJRyxNQUFNO0lBQ2xCO0lBRUFILFdBQVdJLFdBQVcsQ0FBQ1o7SUFDdkIsT0FBT0E7QUFDVDtBQUVBLElBQUlhLGtCQUFrQixTQUFTQSxnQkFBZ0JDLE1BQU0sRUFBRUMsU0FBUztJQUM5RCxJQUFJLENBQUNELFVBQVUsQ0FBQ0EsT0FBT0UsZ0JBQWdCLEVBQUU7UUFDdkM7SUFDRjtJQUVBRixPQUFPRSxnQkFBZ0IsQ0FBQztRQUN0QkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RILFdBQVdBO0lBQ2I7QUFDRjtB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SCxNQUFNRyxPQUFRO1FBQ3ZGWCxJQUFJLENBQUNXLEtBQUssR0FBR0YsU0FBUyxDQUFDRSxLQUFLO0lBQzlCO0lBRUFOLGFBQWE7SUFDYixJQUFJOUIsWUFBWXFDLEtBQUtDLEdBQUc7SUFDeEIsT0FBT1YsZ0JBQWdCQyxJQUFJLENBQUMsU0FBVUwsV0FBVztRQUMvQyxPQUFPRCxXQUFXQyxhQUFhQyxNQUFNekI7SUFDdkM7QUFDRjtBQUVzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpYmV2YXVsdC8uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3N0cmlwZS1qcy9kaXN0L3N0cmlwZS5lc20uanM/ZWYyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVjNfVVJMID0gJ2h0dHBzOi8vanMuc3RyaXBlLmNvbS92Myc7XG52YXIgVjNfVVJMX1JFR0VYID0gL15odHRwczpcXC9cXC9qc1xcLnN0cmlwZVxcLmNvbVxcL3YzXFwvPyhcXD8uKik/JC87XG52YXIgRVhJU1RJTkdfU0NSSVBUX01FU1NBR0UgPSAnbG9hZFN0cmlwZS5zZXRMb2FkUGFyYW1ldGVycyB3YXMgY2FsbGVkIGJ1dCBhbiBleGlzdGluZyBTdHJpcGUuanMgc2NyaXB0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBkb2N1bWVudDsgZXhpc3Rpbmcgc2NyaXB0IHBhcmFtZXRlcnMgd2lsbCBiZSB1c2VkJztcbnZhciBmaW5kU2NyaXB0ID0gZnVuY3Rpb24gZmluZFNjcmlwdCgpIHtcbiAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2NyaXB0W3NyY149XFxcIlwiLmNvbmNhdChWM19VUkwsIFwiXFxcIl1cIikpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzY3JpcHQgPSBzY3JpcHRzW2ldO1xuXG4gICAgaWYgKCFWM19VUkxfUkVHRVgudGVzdChzY3JpcHQuc3JjKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjcmlwdDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIGluamVjdFNjcmlwdCA9IGZ1bmN0aW9uIGluamVjdFNjcmlwdChwYXJhbXMpIHtcbiAgdmFyIHF1ZXJ5U3RyaW5nID0gcGFyYW1zICYmICFwYXJhbXMuYWR2YW5jZWRGcmF1ZFNpZ25hbHMgPyAnP2FkdmFuY2VkRnJhdWRTaWduYWxzPWZhbHNlJyA6ICcnO1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdC5zcmMgPSBcIlwiLmNvbmNhdChWM19VUkwpLmNvbmNhdChxdWVyeVN0cmluZyk7XG4gIHZhciBoZWFkT3JCb2R5ID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5O1xuXG4gIGlmICghaGVhZE9yQm9keSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZG9jdW1lbnQuYm9keSBub3QgdG8gYmUgbnVsbC4gU3RyaXBlLmpzIHJlcXVpcmVzIGEgPGJvZHk+IGVsZW1lbnQuJyk7XG4gIH1cblxuICBoZWFkT3JCb2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIHJldHVybiBzY3JpcHQ7XG59O1xuXG52YXIgcmVnaXN0ZXJXcmFwcGVyID0gZnVuY3Rpb24gcmVnaXN0ZXJXcmFwcGVyKHN0cmlwZSwgc3RhcnRUaW1lKSB7XG4gIGlmICghc3RyaXBlIHx8ICFzdHJpcGUuX3JlZ2lzdGVyV3JhcHBlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0cmlwZS5fcmVnaXN0ZXJXcmFwcGVyKHtcbiAgICBuYW1lOiAnc3RyaXBlLWpzJyxcbiAgICB2ZXJzaW9uOiBcIjIuMi4yXCIsXG4gICAgc3RhcnRUaW1lOiBzdGFydFRpbWVcbiAgfSk7XG59O1xuXG52YXIgc3RyaXBlUHJvbWlzZSA9IG51bGw7XG52YXIgb25FcnJvckxpc3RlbmVyID0gbnVsbDtcbnZhciBvbkxvYWRMaXN0ZW5lciA9IG51bGw7XG5cbnZhciBvbkVycm9yID0gZnVuY3Rpb24gb25FcnJvcihyZWplY3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZWplY3QobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBTdHJpcGUuanMnKSk7XG4gIH07XG59O1xuXG52YXIgb25Mb2FkID0gZnVuY3Rpb24gb25Mb2FkKHJlc29sdmUsIHJlamVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuU3RyaXBlKSB7XG4gICAgICByZXNvbHZlKHdpbmRvdy5TdHJpcGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdTdHJpcGUuanMgbm90IGF2YWlsYWJsZScpKTtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgbG9hZFNjcmlwdCA9IGZ1bmN0aW9uIGxvYWRTY3JpcHQocGFyYW1zKSB7XG4gIC8vIEVuc3VyZSB0aGF0IHdlIG9ubHkgYXR0ZW1wdCB0byBsb2FkIFN0cmlwZS5qcyBhdCBtb3N0IG9uY2VcbiAgaWYgKHN0cmlwZVByb21pc2UgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc3RyaXBlUHJvbWlzZTtcbiAgfVxuXG4gIHN0cmlwZVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFJlc29sdmUgdG8gbnVsbCB3aGVuIGltcG9ydGVkIHNlcnZlciBzaWRlLiBUaGlzIG1ha2VzIHRoZSBtb2R1bGVcbiAgICAgIC8vIHNhZmUgdG8gaW1wb3J0IGluIGFuIGlzb21vcnBoaWMgY29kZSBiYXNlLlxuICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LlN0cmlwZSAmJiBwYXJhbXMpIHtcbiAgICAgIGNvbnNvbGUud2FybihFWElTVElOR19TQ1JJUFRfTUVTU0FHRSk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5TdHJpcGUpIHtcbiAgICAgIHJlc29sdmUod2luZG93LlN0cmlwZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBzY3JpcHQgPSBmaW5kU2NyaXB0KCk7XG5cbiAgICAgIGlmIChzY3JpcHQgJiYgcGFyYW1zKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihFWElTVElOR19TQ1JJUFRfTUVTU0FHRSk7XG4gICAgICB9IGVsc2UgaWYgKCFzY3JpcHQpIHtcbiAgICAgICAgc2NyaXB0ID0gaW5qZWN0U2NyaXB0KHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKHNjcmlwdCAmJiBvbkxvYWRMaXN0ZW5lciAhPT0gbnVsbCAmJiBvbkVycm9yTGlzdGVuZXIgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIF9zY3JpcHQkcGFyZW50Tm9kZTtcblxuICAgICAgICAvLyByZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkTGlzdGVuZXIpO1xuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yTGlzdGVuZXIpOyAvLyBpZiBzY3JpcHQgZXhpc3RzLCBidXQgd2UgYXJlIHJlbG9hZGluZyBkdWUgdG8gYW4gZXJyb3IsXG4gICAgICAgIC8vIHJlbG9hZCBzY3JpcHQgdG8gdHJpZ2dlciAnbG9hZCcgZXZlbnRcblxuICAgICAgICAoX3NjcmlwdCRwYXJlbnROb2RlID0gc2NyaXB0LnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9zY3JpcHQkcGFyZW50Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3NjcmlwdCRwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgIHNjcmlwdCA9IGluamVjdFNjcmlwdChwYXJhbXMpO1xuICAgICAgfVxuXG4gICAgICBvbkxvYWRMaXN0ZW5lciA9IG9uTG9hZChyZXNvbHZlLCByZWplY3QpO1xuICAgICAgb25FcnJvckxpc3RlbmVyID0gb25FcnJvcihyZWplY3QpO1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRMaXN0ZW5lcik7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yTGlzdGVuZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSk7IC8vIFJlc2V0cyBzdHJpcGVQcm9taXNlIG9uIGVycm9yXG5cbiAgcmV0dXJuIHN0cmlwZVByb21pc2VbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBzdHJpcGVQcm9taXNlID0gbnVsbDtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9KTtcbn07XG52YXIgaW5pdFN0cmlwZSA9IGZ1bmN0aW9uIGluaXRTdHJpcGUobWF5YmVTdHJpcGUsIGFyZ3MsIHN0YXJ0VGltZSkge1xuICBpZiAobWF5YmVTdHJpcGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBzdHJpcGUgPSBtYXliZVN0cmlwZS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICByZWdpc3RlcldyYXBwZXIoc3RyaXBlLCBzdGFydFRpbWUpO1xuICByZXR1cm4gc3RyaXBlO1xufTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcblxuLy8gb3duIHNjcmlwdCBpbmplY3Rpb24uXG5cbnZhciBzdHJpcGVQcm9taXNlJDEgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGxvYWRTY3JpcHQobnVsbCk7XG59KTtcbnZhciBsb2FkQ2FsbGVkID0gZmFsc2U7XG5zdHJpcGVQcm9taXNlJDFbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gIGlmICghbG9hZENhbGxlZCkge1xuICAgIGNvbnNvbGUud2FybihlcnIpO1xuICB9XG59KTtcbnZhciBsb2FkU3RyaXBlID0gZnVuY3Rpb24gbG9hZFN0cmlwZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGxvYWRDYWxsZWQgPSB0cnVlO1xuICB2YXIgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuIHN0cmlwZVByb21pc2UkMS50aGVuKGZ1bmN0aW9uIChtYXliZVN0cmlwZSkge1xuICAgIHJldHVybiBpbml0U3RyaXBlKG1heWJlU3RyaXBlLCBhcmdzLCBzdGFydFRpbWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGxvYWRTdHJpcGUgfTtcbiJdLCJuYW1lcyI6WyJWM19VUkwiLCJWM19VUkxfUkVHRVgiLCJFWElTVElOR19TQ1JJUFRfTUVTU0FHRSIsImZpbmRTY3JpcHQiLCJzY3JpcHRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uY2F0IiwiaSIsImxlbmd0aCIsInNjcmlwdCIsInRlc3QiLCJzcmMiLCJpbmplY3RTY3JpcHQiLCJwYXJhbXMiLCJxdWVyeVN0cmluZyIsImFkdmFuY2VkRnJhdWRTaWduYWxzIiwiY3JlYXRlRWxlbWVudCIsImhlYWRPckJvZHkiLCJoZWFkIiwiYm9keSIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJyZWdpc3RlcldyYXBwZXIiLCJzdHJpcGUiLCJzdGFydFRpbWUiLCJfcmVnaXN0ZXJXcmFwcGVyIiwibmFtZSIsInZlcnNpb24iLCJzdHJpcGVQcm9taXNlIiwib25FcnJvckxpc3RlbmVyIiwib25Mb2FkTGlzdGVuZXIiLCJvbkVycm9yIiwicmVqZWN0Iiwib25Mb2FkIiwicmVzb2x2ZSIsIndpbmRvdyIsIlN0cmlwZSIsImxvYWRTY3JpcHQiLCJQcm9taXNlIiwiY29uc29sZSIsIndhcm4iLCJfc2NyaXB0JHBhcmVudE5vZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVycm9yIiwiaW5pdFN0cmlwZSIsIm1heWJlU3RyaXBlIiwiYXJncyIsImFwcGx5IiwidW5kZWZpbmVkIiwic3RyaXBlUHJvbWlzZSQxIiwidGhlbiIsImxvYWRDYWxsZWQiLCJlcnIiLCJsb2FkU3RyaXBlIiwiX2xlbiIsImFyZ3VtZW50cyIsIkFycmF5IiwiX2tleSIsIkRhdGUiLCJub3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@stripe/stripe-js/dist/stripe.esm.js\n");

/***/ })

};
;