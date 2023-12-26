"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-sound";
exports.ids = ["vendor-chunks/use-sound"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-sound/dist/use-sound.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/use-sound/dist/use-sound.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useSound: () => (/* binding */ useSound)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction useOnMount(callback) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(callback, []);\n}\nfunction useSound(src, _ref) {\n    if (_ref === void 0) {\n        _ref = {};\n    }\n    var _ref2 = _ref, _ref2$volume = _ref2.volume, volume = _ref2$volume === void 0 ? 1 : _ref2$volume, _ref2$playbackRate = _ref2.playbackRate, playbackRate = _ref2$playbackRate === void 0 ? 1 : _ref2$playbackRate, _ref2$soundEnabled = _ref2.soundEnabled, soundEnabled = _ref2$soundEnabled === void 0 ? true : _ref2$soundEnabled, _ref2$interrupt = _ref2.interrupt, interrupt = _ref2$interrupt === void 0 ? false : _ref2$interrupt, onload = _ref2.onload, delegated = _objectWithoutPropertiesLoose(_ref2, [\n        \"id\",\n        \"volume\",\n        \"playbackRate\",\n        \"soundEnabled\",\n        \"interrupt\",\n        \"onload\"\n    ]);\n    var HowlConstructor = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n    var isMounted = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);\n    var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null), duration = _React$useState[0], setDuration = _React$useState[1];\n    var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null), sound = _React$useState2[0], setSound = _React$useState2[1];\n    var handleLoad = function handleLoad() {\n        if (typeof onload === \"function\") {\n            // @ts-ignore\n            onload.call(this);\n        }\n        if (isMounted.current) {\n            // @ts-ignore\n            setDuration(this.duration() * 1000);\n        } // @ts-ignore\n        setSound(this);\n    }; // We want to lazy-load Howler, since sounds can't play on load anyway.\n    useOnMount(function() {\n        __webpack_require__.e(/*! import() */ \"vendor-chunks/howler\").then(__webpack_require__.t.bind(__webpack_require__, /*! howler */ \"(ssr)/./node_modules/howler/dist/howler.js\", 23)).then(function(mod) {\n            if (!isMounted.current) {\n                var _mod$Howl;\n                // Depending on the module system used, `mod` might hold\n                // the export directly, or it might be under `default`.\n                HowlConstructor.current = (_mod$Howl = mod.Howl) !== null && _mod$Howl !== void 0 ? _mod$Howl : mod[\"default\"].Howl;\n                isMounted.current = true;\n                new HowlConstructor.current(_extends({\n                    src: Array.isArray(src) ? src : [\n                        src\n                    ],\n                    volume: volume,\n                    rate: playbackRate,\n                    onload: handleLoad\n                }, delegated));\n            }\n        });\n        return function() {\n            isMounted.current = false;\n        };\n    }); // When the `src` changes, we have to do a whole thing where we recreate\n    // the Howl instance. This is because Howler doesn't expose a way to\n    // tweak the sound\n    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function() {\n        if (HowlConstructor.current && sound) {\n            setSound(new HowlConstructor.current(_extends({\n                src: Array.isArray(src) ? src : [\n                    src\n                ],\n                volume: volume,\n                onload: handleLoad\n            }, delegated)));\n        } // The linter wants to run this effect whenever ANYTHING changes,\n    // but very specifically I only want to recreate the Howl instance\n    // when the `src` changes. Other changes should have no effect.\n    // Passing array to the useEffect dependencies list will result in\n    // ifinite loop so we need to stringify it, for more details check\n    // https://github.com/facebook/react/issues/14476#issuecomment-471199055\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        JSON.stringify(src)\n    ]); // Whenever volume/playbackRate are changed, change those properties\n    // on the sound instance.\n    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function() {\n        if (sound) {\n            sound.volume(volume);\n            sound.rate(playbackRate);\n        } // A weird bug means that including the `sound` here can trigger an\n    // error on unmount, where the state loses track of the sprites??\n    // No idea, but anyway I don't need to re-run this if only the `sound`\n    // changes.\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        volume,\n        playbackRate\n    ]);\n    var play = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(function(options) {\n        if (typeof options === \"undefined\") {\n            options = {};\n        }\n        if (!sound || !soundEnabled && !options.forceSoundEnabled) {\n            return;\n        }\n        if (interrupt) {\n            sound.stop();\n        }\n        if (options.playbackRate) {\n            sound.rate(options.playbackRate);\n        }\n        sound.play(options.id);\n    }, [\n        sound,\n        soundEnabled,\n        interrupt\n    ]);\n    var stop = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(function(id) {\n        if (!sound) {\n            return;\n        }\n        sound.stop(id);\n    }, [\n        sound\n    ]);\n    var pause = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(function(id) {\n        if (!sound) {\n            return;\n        }\n        sound.pause(id);\n    }, [\n        sound\n    ]);\n    var returnedValue = [\n        play,\n        {\n            sound: sound,\n            stop: stop,\n            pause: pause,\n            duration: duration\n        }\n    ];\n    return returnedValue;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSound);\n //# sourceMappingURL=use-sound.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXNvdW5kL2Rpc3QvdXNlLXNvdW5kLmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBRWxELFNBQVNFO0lBQ1BBLFdBQVdDLE9BQU9DLE1BQU0sSUFBSSxTQUFVQyxNQUFNO1FBQzFDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJQyxVQUFVQyxNQUFNLEVBQUVGLElBQUs7WUFDekMsSUFBSUcsU0FBU0YsU0FBUyxDQUFDRCxFQUFFO1lBRXpCLElBQUssSUFBSUksT0FBT0QsT0FBUTtnQkFDdEIsSUFBSU4sT0FBT1EsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ0osUUFBUUMsTUFBTTtvQkFDckRMLE1BQU0sQ0FBQ0ssSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQUk7Z0JBQzNCO1lBQ0Y7UUFDRjtRQUVBLE9BQU9MO0lBQ1Q7SUFFQSxPQUFPSCxTQUFTWSxLQUFLLENBQUMsSUFBSSxFQUFFUDtBQUM5QjtBQUVBLFNBQVNRLDhCQUE4Qk4sTUFBTSxFQUFFTyxRQUFRO0lBQ3JELElBQUlQLFVBQVUsTUFBTSxPQUFPLENBQUM7SUFDNUIsSUFBSUosU0FBUyxDQUFDO0lBQ2QsSUFBSVksYUFBYWQsT0FBT2UsSUFBSSxDQUFDVDtJQUM3QixJQUFJQyxLQUFLSjtJQUVULElBQUtBLElBQUksR0FBR0EsSUFBSVcsV0FBV1QsTUFBTSxFQUFFRixJQUFLO1FBQ3RDSSxNQUFNTyxVQUFVLENBQUNYLEVBQUU7UUFDbkIsSUFBSVUsU0FBU0csT0FBTyxDQUFDVCxRQUFRLEdBQUc7UUFDaENMLE1BQU0sQ0FBQ0ssSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQUk7SUFDM0I7SUFFQSxPQUFPTDtBQUNUO0FBRUEsU0FBU2UsV0FBV0MsUUFBUTtJQUMxQnBCLGdEQUFTQSxDQUFDb0IsVUFBVSxFQUFFO0FBQ3hCO0FBRUEsU0FBU0MsU0FBU0MsR0FBRyxFQUFFQyxJQUFJO0lBQ3pCLElBQUlBLFNBQVMsS0FBSyxHQUFH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SUFDckUsaUVBQWlFO0lBQ2pFLHNFQUFzRTtJQUN0RSxXQUFXO0lBQ1gsdURBQXVEO0lBRXpELEdBQUc7UUFBQ0Y7UUFBUUU7S0FBYTtJQUN6QixJQUFJNEIsT0FBT3pELHdEQUEwQixDQUFDLFNBQVUyRCxPQUFPO1FBQ3JELElBQUksT0FBT0EsWUFBWSxhQUFhO1lBQ2xDQSxVQUFVLENBQUM7UUFDYjtRQUVBLElBQUksQ0FBQ2YsU0FBUyxDQUFDYixnQkFBZ0IsQ0FBQzRCLFFBQVFDLGlCQUFpQixFQUFFO1lBQ3pEO1FBQ0Y7UUFFQSxJQUFJM0IsV0FBVztZQUNiVyxNQUFNaUIsSUFBSTtRQUNaO1FBRUEsSUFBSUYsUUFBUTlCLFlBQVksRUFBRTtZQUN4QmUsTUFBTVUsSUFBSSxDQUFDSyxRQUFROUIsWUFBWTtRQUNqQztRQUVBZSxNQUFNYSxJQUFJLENBQUNFLFFBQVFHLEVBQUU7SUFDdkIsR0FBRztRQUFDbEI7UUFBT2I7UUFBY0U7S0FBVTtJQUNuQyxJQUFJNEIsT0FBTzdELHdEQUEwQixDQUFDLFNBQVU4RCxFQUFFO1FBQ2hELElBQUksQ0FBQ2xCLE9BQU87WUFDVjtRQUNGO1FBRUFBLE1BQU1pQixJQUFJLENBQUNDO0lBQ2IsR0FBRztRQUFDbEI7S0FBTTtJQUNWLElBQUltQixRQUFRL0Qsd0RBQTBCLENBQUMsU0FBVThELEVBQUU7UUFDakQsSUFBSSxDQUFDbEIsT0FBTztZQUNWO1FBQ0Y7UUFFQUEsTUFBTW1CLEtBQUssQ0FBQ0Q7SUFDZCxHQUFHO1FBQUNsQjtLQUFNO0lBQ1YsSUFBSW9CLGdCQUFnQjtRQUFDUDtRQUFNO1lBQ3pCYixPQUFPQTtZQUNQaUIsTUFBTUE7WUFDTkUsT0FBT0E7WUFDUHRCLFVBQVVBO1FBQ1o7S0FBRTtJQUNGLE9BQU91QjtBQUNUO0FBRUEsaUVBQWUxQyxRQUFRQSxFQUFDO0FBQ0osQ0FDcEIseUNBQXlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmliZXZhdWx0Ly4vbm9kZV9tb2R1bGVzL3VzZS1zb3VuZC9kaXN0L3VzZS1zb3VuZC5lc20uanM/MDA1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RfX2RlZmF1bHQsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gdXNlT25Nb3VudChjYWxsYmFjaykge1xuICB1c2VFZmZlY3QoY2FsbGJhY2ssIFtdKTtcbn1cblxuZnVuY3Rpb24gdXNlU291bmQoc3JjLCBfcmVmKSB7XG4gIGlmIChfcmVmID09PSB2b2lkIDApIHtcbiAgICBfcmVmID0ge307XG4gIH1cblxuICB2YXIgX3JlZjIgPSBfcmVmLFxuICAgICAgX3JlZjIkdm9sdW1lID0gX3JlZjIudm9sdW1lLFxuICAgICAgdm9sdW1lID0gX3JlZjIkdm9sdW1lID09PSB2b2lkIDAgPyAxIDogX3JlZjIkdm9sdW1lLFxuICAgICAgX3JlZjIkcGxheWJhY2tSYXRlID0gX3JlZjIucGxheWJhY2tSYXRlLFxuICAgICAgcGxheWJhY2tSYXRlID0gX3JlZjIkcGxheWJhY2tSYXRlID09PSB2b2lkIDAgPyAxIDogX3JlZjIkcGxheWJhY2tSYXRlLFxuICAgICAgX3JlZjIkc291bmRFbmFibGVkID0gX3JlZjIuc291bmRFbmFibGVkLFxuICAgICAgc291bmRFbmFibGVkID0gX3JlZjIkc291bmRFbmFibGVkID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjIkc291bmRFbmFibGVkLFxuICAgICAgX3JlZjIkaW50ZXJydXB0ID0gX3JlZjIuaW50ZXJydXB0LFxuICAgICAgaW50ZXJydXB0ID0gX3JlZjIkaW50ZXJydXB0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJGludGVycnVwdCxcbiAgICAgIG9ubG9hZCA9IF9yZWYyLm9ubG9hZCxcbiAgICAgIGRlbGVnYXRlZCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBbXCJpZFwiLCBcInZvbHVtZVwiLCBcInBsYXliYWNrUmF0ZVwiLCBcInNvdW5kRW5hYmxlZFwiLCBcImludGVycnVwdFwiLCBcIm9ubG9hZFwiXSk7XG5cbiAgdmFyIEhvd2xDb25zdHJ1Y3RvciA9IFJlYWN0X19kZWZhdWx0LnVzZVJlZihudWxsKTtcbiAgdmFyIGlzTW91bnRlZCA9IFJlYWN0X19kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0X19kZWZhdWx0LnVzZVN0YXRlKG51bGwpLFxuICAgICAgZHVyYXRpb24gPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXREdXJhdGlvbiA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0X19kZWZhdWx0LnVzZVN0YXRlKG51bGwpLFxuICAgICAgc291bmQgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0U291bmQgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBoYW5kbGVMb2FkID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICBpZiAodHlwZW9mIG9ubG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgb25sb2FkLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKGlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBzZXREdXJhdGlvbih0aGlzLmR1cmF0aW9uKCkgKiAxMDAwKTtcbiAgICB9IC8vIEB0cy1pZ25vcmVcblxuXG4gICAgc2V0U291bmQodGhpcyk7XG4gIH07IC8vIFdlIHdhbnQgdG8gbGF6eS1sb2FkIEhvd2xlciwgc2luY2Ugc291bmRzIGNhbid0IHBsYXkgb24gbG9hZCBhbnl3YXkuXG5cblxuICB1c2VPbk1vdW50KGZ1bmN0aW9uICgpIHtcbiAgICBpbXBvcnQoJ2hvd2xlcicpLnRoZW4oZnVuY3Rpb24gKG1vZCkge1xuICAgICAgaWYgKCFpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgICB2YXIgX21vZCRIb3dsO1xuXG4gICAgICAgIC8vIERlcGVuZGluZyBvbiB0aGUgbW9kdWxlIHN5c3RlbSB1c2VkLCBgbW9kYCBtaWdodCBob2xkXG4gICAgICAgIC8vIHRoZSBleHBvcnQgZGlyZWN0bHksIG9yIGl0IG1pZ2h0IGJlIHVuZGVyIGBkZWZhdWx0YC5cbiAgICAgICAgSG93bENvbnN0cnVjdG9yLmN1cnJlbnQgPSAoX21vZCRIb3dsID0gbW9kLkhvd2wpICE9PSBudWxsICYmIF9tb2QkSG93bCAhPT0gdm9pZCAwID8gX21vZCRIb3dsIDogbW9kW1wiZGVmYXVsdFwiXS5Ib3dsO1xuICAgICAgICBpc01vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgIG5ldyBIb3dsQ29uc3RydWN0b3IuY3VycmVudChfZXh0ZW5kcyh7XG4gICAgICAgICAgc3JjOiBBcnJheS5pc0FycmF5KHNyYykgPyBzcmMgOiBbc3JjXSxcbiAgICAgICAgICB2b2x1bWU6IHZvbHVtZSxcbiAgICAgICAgICByYXRlOiBwbGF5YmFja1JhdGUsXG4gICAgICAgICAgb25sb2FkOiBoYW5kbGVMb2FkXG4gICAgICAgIH0sIGRlbGVnYXRlZCkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgIH07XG4gIH0pOyAvLyBXaGVuIHRoZSBgc3JjYCBjaGFuZ2VzLCB3ZSBoYXZlIHRvIGRvIGEgd2hvbGUgdGhpbmcgd2hlcmUgd2UgcmVjcmVhdGVcbiAgLy8gdGhlIEhvd2wgaW5zdGFuY2UuIFRoaXMgaXMgYmVjYXVzZSBIb3dsZXIgZG9lc24ndCBleHBvc2UgYSB3YXkgdG9cbiAgLy8gdHdlYWsgdGhlIHNvdW5kXG5cbiAgUmVhY3RfX2RlZmF1bHQudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoSG93bENvbnN0cnVjdG9yLmN1cnJlbnQgJiYgc291bmQpIHtcbiAgICAgIHNldFNvdW5kKG5ldyBIb3dsQ29uc3RydWN0b3IuY3VycmVudChfZXh0ZW5kcyh7XG4gICAgICAgIHNyYzogQXJyYXkuaXNBcnJheShzcmMpID8gc3JjIDogW3NyY10sXG4gICAgICAgIHZvbHVtZTogdm9sdW1lLFxuICAgICAgICBvbmxvYWQ6IGhhbmRsZUxvYWRcbiAgICAgIH0sIGRlbGVnYXRlZCkpKTtcbiAgICB9IC8vIFRoZSBsaW50ZXIgd2FudHMgdG8gcnVuIHRoaXMgZWZmZWN0IHdoZW5ldmVyIEFOWVRISU5HIGNoYW5nZXMsXG4gICAgLy8gYnV0IHZlcnkgc3BlY2lmaWNhbGx5IEkgb25seSB3YW50IHRvIHJlY3JlYXRlIHRoZSBIb3dsIGluc3RhbmNlXG4gICAgLy8gd2hlbiB0aGUgYHNyY2AgY2hhbmdlcy4gT3RoZXIgY2hhbmdlcyBzaG91bGQgaGF2ZSBubyBlZmZlY3QuXG4gICAgLy8gUGFzc2luZyBhcnJheSB0byB0aGUgdXNlRWZmZWN0IGRlcGVuZGVuY2llcyBsaXN0IHdpbGwgcmVzdWx0IGluXG4gICAgLy8gaWZpbml0ZSBsb29wIHNvIHdlIG5lZWQgdG8gc3RyaW5naWZ5IGl0LCBmb3IgbW9yZSBkZXRhaWxzIGNoZWNrXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xNDQ3NiNpc3N1ZWNvbW1lbnQtNDcxMTk5MDU1XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIH0sIFtKU09OLnN0cmluZ2lmeShzcmMpXSk7IC8vIFdoZW5ldmVyIHZvbHVtZS9wbGF5YmFja1JhdGUgYXJlIGNoYW5nZWQsIGNoYW5nZSB0aG9zZSBwcm9wZXJ0aWVzXG4gIC8vIG9uIHRoZSBzb3VuZCBpbnN0YW5jZS5cblxuICBSZWFjdF9fZGVmYXVsdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChzb3VuZCkge1xuICAgICAgc291bmQudm9sdW1lKHZvbHVtZSk7XG4gICAgICBzb3VuZC5yYXRlKHBsYXliYWNrUmF0ZSk7XG4gICAgfSAvLyBBIHdlaXJkIGJ1ZyBtZWFucyB0aGF0IGluY2x1ZGluZyB0aGUgYHNvdW5kYCBoZXJlIGNhbiB0cmlnZ2VyIGFuXG4gICAgLy8gZXJyb3Igb24gdW5tb3VudCwgd2hlcmUgdGhlIHN0YXRlIGxvc2VzIHRyYWNrIG9mIHRoZSBzcHJpdGVzPz9cbiAgICAvLyBObyBpZGVhLCBidXQgYW55d2F5IEkgZG9uJ3QgbmVlZCB0byByZS1ydW4gdGhpcyBpZiBvbmx5IHRoZSBgc291bmRgXG4gICAgLy8gY2hhbmdlcy5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgfSwgW3ZvbHVtZSwgcGxheWJhY2tSYXRlXSk7XG4gIHZhciBwbGF5ID0gUmVhY3RfX2RlZmF1bHQudXNlQ2FsbGJhY2soZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFzb3VuZCB8fCAhc291bmRFbmFibGVkICYmICFvcHRpb25zLmZvcmNlU291bmRFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGludGVycnVwdCkge1xuICAgICAgc291bmQuc3RvcCgpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBsYXliYWNrUmF0ZSkge1xuICAgICAgc291bmQucmF0ZShvcHRpb25zLnBsYXliYWNrUmF0ZSk7XG4gICAgfVxuXG4gICAgc291bmQucGxheShvcHRpb25zLmlkKTtcbiAgfSwgW3NvdW5kLCBzb3VuZEVuYWJsZWQsIGludGVycnVwdF0pO1xuICB2YXIgc3RvcCA9IFJlYWN0X19kZWZhdWx0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpZCkge1xuICAgIGlmICghc291bmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzb3VuZC5zdG9wKGlkKTtcbiAgfSwgW3NvdW5kXSk7XG4gIHZhciBwYXVzZSA9IFJlYWN0X19kZWZhdWx0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpZCkge1xuICAgIGlmICghc291bmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzb3VuZC5wYXVzZShpZCk7XG4gIH0sIFtzb3VuZF0pO1xuICB2YXIgcmV0dXJuZWRWYWx1ZSA9IFtwbGF5LCB7XG4gICAgc291bmQ6IHNvdW5kLFxuICAgIHN0b3A6IHN0b3AsXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICB9XTtcbiAgcmV0dXJuIHJldHVybmVkVmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNvdW5kO1xuZXhwb3J0IHsgdXNlU291bmQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zb3VuZC5lc20uanMubWFwXG4iXSwibmFtZXMiOlsiUmVhY3RfX2RlZmF1bHQiLCJ1c2VFZmZlY3QiLCJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiZXhjbHVkZWQiLCJzb3VyY2VLZXlzIiwia2V5cyIsImluZGV4T2YiLCJ1c2VPbk1vdW50IiwiY2FsbGJhY2siLCJ1c2VTb3VuZCIsInNyYyIsIl9yZWYiLCJfcmVmMiIsIl9yZWYyJHZvbHVtZSIsInZvbHVtZSIsIl9yZWYyJHBsYXliYWNrUmF0ZSIsInBsYXliYWNrUmF0ZSIsIl9yZWYyJHNvdW5kRW5hYmxlZCIsInNvdW5kRW5hYmxlZCIsIl9yZWYyJGludGVycnVwdCIsImludGVycnVwdCIsIm9ubG9hZCIsImRlbGVnYXRlZCIsIkhvd2xDb25zdHJ1Y3RvciIsInVzZVJlZiIsImlzTW91bnRlZCIsIl9SZWFjdCR1c2VTdGF0ZSIsInVzZVN0YXRlIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJzb3VuZCIsInNldFNvdW5kIiwiaGFuZGxlTG9hZCIsImN1cnJlbnQiLCJ0aGVuIiwibW9kIiwiX21vZCRIb3dsIiwiSG93bCIsIkFycmF5IiwiaXNBcnJheSIsInJhdGUiLCJKU09OIiwic3RyaW5naWZ5IiwicGxheSIsInVzZUNhbGxiYWNrIiwib3B0aW9ucyIsImZvcmNlU291bmRFbmFibGVkIiwic3RvcCIsImlkIiwicGF1c2UiLCJyZXR1cm5lZFZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sound/dist/use-sound.esm.js\n");

/***/ })

};
;