"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0346512d080b\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2ExZTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIwMzQ2NTEyZDA4MGJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/PlayerContent.tsx":
/*!**************************************!*\
  !*** ./components/PlayerContent.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-sound */ \"(app-pages-browser)/./node_modules/use-sound/dist/use-sound.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_BsPauseFill_BsPlayFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=BsPauseFill,BsPlayFill!=!react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_HiSpeakerWave_HiSpeakerXMark_react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=HiSpeakerWave,HiSpeakerXMark!=!react-icons/hi2 */ \"(app-pages-browser)/./node_modules/react-icons/hi2/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_AiFillStepBackward_AiFillStepForward_react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=AiFillStepBackward,AiFillStepForward!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slider */ \"(app-pages-browser)/./components/Slider.tsx\");\n/* harmony import */ var _MediaItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaItem */ \"(app-pages-browser)/./components/MediaItem.tsx\");\n/* harmony import */ var _LikeButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LikeButton */ \"(app-pages-browser)/./components/LikeButton.tsx\");\n/* harmony import */ var _hooks_usePlayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/usePlayer */ \"(app-pages-browser)/./hooks/usePlayer.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PlayerContent = (param)=>{\n    let { song, songUrl } = param;\n    _s();\n    const player = (0,_hooks_usePlayer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [volume, setVolume] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(1);\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const Icon = isPlaying ? _barrel_optimize_names_BsPauseFill_BsPlayFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsPauseFill : _barrel_optimize_names_BsPauseFill_BsPlayFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsPlayFill;\n    const VolumeIcon = volume === 0 ? _barrel_optimize_names_HiSpeakerWave_HiSpeakerXMark_react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__.HiSpeakerXMark : _barrel_optimize_names_HiSpeakerWave_HiSpeakerXMark_react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__.HiSpeakerWave;\n    const onPlayNext = ()=>{\n        if (player.ids.length === 0) {\n            return;\n        }\n        const currentIndex = player.ids.findIndex((id)=>id === player.activeId);\n        const nextSong = player.ids[currentIndex + 1];\n        if (!nextSong) {\n            return player.setId(player.ids[0]);\n        }\n        player.setId(nextSong);\n    };\n    const onPlayPrevious = ()=>{\n        if (player.ids.length === 0) {\n            return;\n        }\n        const currentIndex = player.ids.findIndex((id)=>id === player.activeId);\n        const previousSong = player.ids[currentIndex - 1];\n        if (!previousSong) {\n            return player.setId(player.ids[player.ids.length - 1]);\n        }\n        player.setId(previousSong);\n    };\n    const [play, { pause, sound }] = (0,use_sound__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(songUrl, {\n        volume: volume,\n        onplay: ()=>setIsPlaying(true),\n        onend: ()=>{\n            setIsPlaying(false);\n            onPlayNext();\n        },\n        onpause: ()=>setIsPlaying(false),\n        format: [\n            \"mp3\"\n        ]\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        sound === null || sound === void 0 ? void 0 : sound.play();\n        return ()=>{\n            sound === null || sound === void 0 ? void 0 : sound.unload();\n        };\n    }, [\n        sound\n    ]);\n    const handlePlay = ()=>{\n        if (!isPlaying) {\n            play();\n        } else {\n            pause();\n        }\n    };\n    const toggleMute = ()=>{\n        if (volume === 0) {\n            setVolume(1);\n        } else {\n            setVolume(0);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 md:grid-cols-3 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MediaItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            data: song\n                        }, void 0, false, {\n                            fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikeButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            songId: song.id\n                        }, void 0, false, {\n                            fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex md:hidden col-auto w-full justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: handlePlay,\n                    className: \"h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                        size: 30,\n                        className: \"text-black\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStepBackward_AiFillStepForward_react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillStepBackward, {\n                        onClick: onPlayPrevious,\n                        size: 30,\n                        className: \"text-neutral-400 cursor-pointer hover:text-white transition\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: handlePlay,\n                        className: \"flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                            size: 30,\n                            className: \"text-black\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStepBackward_AiFillStepForward_react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillStepForward, {\n                        onClick: onPlayNext,\n                        size: 30,\n                        className: \"text-neutral-400 cursor-pointer hover:text-white transition\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex w-full justify-end pr-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-x-2 w-[120px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VolumeIcon, {\n                            onClick: ()=>{\n                                toggleMute();\n                            },\n                            className: \"cursor-pointer\",\n                            size: 34\n                        }, void 0, false, {\n                            fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            value: volume,\n                            onChange: (value)=>setVolume(value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                lineNumber: 124,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n        lineNumber: 98,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PlayerContent, \"wMw+Ki71tdoFl19BGoeEULBpdPY=\", false, function() {\n    return [\n        _hooks_usePlayer__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        use_sound__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = PlayerContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerContent);\nvar _c;\n$RefreshReg$(_c, \"PlayerContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUGxheWVyQ29udGVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDa0I7QUFDTTtBQUNPO0FBQ087QUFJekM7QUFDTTtBQUNFO0FBQ0k7QUFTMUMsTUFBTWMsZ0JBQThDO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUU7O0lBRWxFLE1BQU1DLFNBQVNKLDREQUFTQTtJQUN4QixNQUFNLENBQUNLLFFBQVFDLFVBQVUsR0FBR2xCLHFEQUFjLENBQUM7SUFDM0MsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHbEIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTW1CLE9BQU9GLFlBQVloQixxR0FBV0EsR0FBR0Msb0dBQVVBO0lBQ2pELE1BQU1rQixhQUFhTCxXQUFXLElBQUlYLCtHQUFjQSxHQUFHRCw4R0FBYUE7SUFFaEUsTUFBTWtCLGFBQWE7UUFDZixJQUFJUCxPQUFPUSxHQUFHLENBQUNDLE1BQU0sS0FBSyxHQUFHO1lBQ3pCO1FBQ0o7UUFFQSxNQUFNQyxlQUFlVixPQUFPUSxHQUFHLENBQUNHLFNBQVMsQ0FBQyxDQUFDQyxLQUFPQSxPQUFPWixPQUFPYSxRQUFRO1FBQ3hFLE1BQU1DLFdBQVdkLE9BQU9RLEdBQUcsQ0FBQ0UsZUFBZSxFQUFFO1FBRTdDLElBQUksQ0FBQ0ksVUFBVTtZQUNYLE9BQU9kLE9BQU9lLEtBQUssQ0FBQ2YsT0FBT1EsR0FBRyxDQUFDLEVBQUU7UUFDckM7UUFDQVIsT0FBT2UsS0FBSyxDQUFDRDtJQUNqQjtJQUVBLE1BQU1FLGlCQUFpQjtRQUNuQixJQUFJaEIsT0FBT1EsR0FBRyxDQUFDQyxNQUFNLEtBQUssR0FBRztZQUN6QjtRQUNKO1FBRUEsTUFBTUMsZUFBZVYsT0FBT1EsR0FBRyxDQUFDRyxTQUFTLENBQUMsQ0FBQ0MsS0FBT0EsT0FBT1osT0FBT2EsUUFBUTtRQUN4RSxNQUFNSSxlQUFlakIsT0FBT1EsR0FBRyxDQUFDRSxlQUFlLEVBQUU7UUFFakQsSUFBSSxDQUFDTyxjQUFjO1lBQ2YsT0FBT2pCLE9BQU9lLEtBQUssQ0FBQ2YsT0FBT1EsR0FBRyxDQUFDUixPQUFPUSxHQUFHLENBQUNDLE1BQU0sR0FBRyxFQUFFO1FBQ3pEO1FBQ0FULE9BQU9lLEtBQUssQ0FBQ0U7SUFDakI7SUFFQSxNQUFNLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQyxHQUFHckMscURBQVFBLENBQ3JDZ0IsU0FBUztRQUNURSxRQUFRQTtRQUNSb0IsUUFBUSxJQUFNakIsYUFBYTtRQUMzQmtCLE9BQU87WUFDSGxCLGFBQWE7WUFDYkc7UUFDSjtRQUNBZ0IsU0FBUyxJQUFNbkIsYUFBYTtRQUM1Qm9CLFFBQVE7WUFBQztTQUFNO0lBQ25CO0lBR0F2QyxnREFBU0EsQ0FBQztRQUNObUMsa0JBQUFBLDRCQUFBQSxNQUFPRixJQUFJO1FBRVgsT0FBTztZQUNIRSxrQkFBQUEsNEJBQUFBLE1BQU9LLE1BQU07UUFDakI7SUFDSixHQUFFO1FBQUNMO0tBQU07SUFFVCxNQUFNTSxhQUFhO1FBQ2YsSUFBRyxDQUFDdkIsV0FBVztZQUNYZTtRQUNKLE9BQU87WUFDSEM7UUFDSjtJQUNKO0lBRUEsTUFBTVEsYUFBYTtRQUNmLElBQUkxQixXQUFXLEdBQUc7WUFDZEMsVUFBVTtRQUNkLE9BQU87WUFDSEEsVUFBVTtRQUNkO0lBQ0o7SUFFQSxxQkFDSSw4REFBQzBCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDbkMsa0RBQVNBOzRCQUFDb0MsTUFBTWhDOzs7Ozs7c0NBQ2pCLDhEQUFDSCxtREFBVUE7NEJBQUNvQyxRQUFRakMsS0FBS2MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSW5DLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJSSxTQUFTTjtvQkFBWUcsV0FBVTs4QkFDaEMsNEVBQUN4Qjt3QkFBSzRCLE1BQU07d0JBQUlKLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWxDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBRVgsOERBQUN0QywwSEFBa0JBO3dCQUFDeUMsU0FBU2hCO3dCQUFpQmlCLE1BQU07d0JBQUlKLFdBQVU7Ozs7OztrQ0FFbEUsOERBQUNEO3dCQUFJSSxTQUFTTjt3QkFBYUcsV0FBVTtrQ0FDakMsNEVBQUN4Qjs0QkFBSzRCLE1BQU07NEJBQUlKLFdBQVU7Ozs7Ozs7Ozs7O2tDQUc5Qiw4REFBQ3JDLHlIQUFpQkE7d0JBQUN3QyxTQUFVekI7d0JBQWEwQixNQUFNO3dCQUFJSixXQUFVOzs7Ozs7Ozs7Ozs7MEJBSWxFLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDdkI7NEJBQVcwQixTQUFTO2dDQUFRTDs0QkFBYTs0QkFBR0UsV0FBVTs0QkFBaUJJLE1BQU07Ozs7OztzQ0FDOUUsOERBQUN4QywrQ0FBTUE7NEJBQUN5QyxPQUFPakM7NEJBQ2ZrQyxVQUFVLENBQUNELFFBQVVoQyxVQUFVZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25EO0dBOUdNckM7O1FBRWFELHdEQUFTQTtRQW1DU2IsaURBQVFBOzs7S0FyQ3ZDYztBQWdITiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BsYXllckNvbnRlbnQudHN4P2I0NTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB1c2VTb3VuZCBmcm9tICd1c2Utc291bmQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCc1BhdXNlRmlsbCwgQnNQbGF5RmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgeyBIaVNwZWFrZXJXYXZlLCBIaVNwZWFrZXJYTWFyayB9IGZyb20gXCJyZWFjdC1pY29ucy9oaTJcIjtcclxuaW1wb3J0IHsgQWlGaWxsU3RlcEJhY2t3YXJkLCBBaUZpbGxTdGVwRm9yd2FyZCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5cclxuaW1wb3J0IHsgU29uZyB9IGZyb20gXCJAL3R5cGVzXCJcclxuXHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4vU2xpZGVyXCI7XHJcbmltcG9ydCBNZWRpYUl0ZW0gZnJvbSBcIi4vTWVkaWFJdGVtXCI7XHJcbmltcG9ydCBMaWtlQnV0dG9uIGZyb20gXCIuL0xpa2VCdXR0b25cIjtcclxuaW1wb3J0IHVzZVBsYXllciBmcm9tIFwiQC9ob29rcy91c2VQbGF5ZXJcIjtcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIFBsYXllckNvbnRlbnRQcm9wcyB7XHJcbiAgICBzb25nOiBTb25nO1xyXG4gICAgc29uZ1VybDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBQbGF5ZXJDb250ZW50OiBSZWFjdC5GQzxQbGF5ZXJDb250ZW50UHJvcHM+ID0gKHsgc29uZywgc29uZ1VybCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgcGxheWVyID0gdXNlUGxheWVyKCk7XHJcbiAgICBjb25zdCBbdm9sdW1lLCBzZXRWb2x1bWVdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IEljb24gPSBpc1BsYXlpbmcgPyBCc1BhdXNlRmlsbCA6IEJzUGxheUZpbGw7XHJcbiAgICBjb25zdCBWb2x1bWVJY29uID0gdm9sdW1lID09PSAwID8gSGlTcGVha2VyWE1hcmsgOiBIaVNwZWFrZXJXYXZlO1xyXG5cclxuICAgIGNvbnN0IG9uUGxheU5leHQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBsYXllci5pZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHBsYXllci5pZHMuZmluZEluZGV4KChpZCkgPT4gaWQgPT09IHBsYXllci5hY3RpdmVJZCk7XHJcbiAgICAgICAgY29uc3QgbmV4dFNvbmcgPSBwbGF5ZXIuaWRzW2N1cnJlbnRJbmRleCArIDFdO1xyXG5cclxuICAgICAgICBpZiAoIW5leHRTb25nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXIuc2V0SWQocGxheWVyLmlkc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsYXllci5zZXRJZChuZXh0U29uZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25QbGF5UHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBsYXllci5pZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHBsYXllci5pZHMuZmluZEluZGV4KChpZCkgPT4gaWQgPT09IHBsYXllci5hY3RpdmVJZCk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNTb25nID0gcGxheWVyLmlkc1tjdXJyZW50SW5kZXggLSAxXTtcclxuXHJcbiAgICAgICAgaWYgKCFwcmV2aW91c1NvbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBsYXllci5zZXRJZChwbGF5ZXIuaWRzW3BsYXllci5pZHMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwbGF5ZXIuc2V0SWQocHJldmlvdXNTb25nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbcGxheSwgeyBwYXVzZSwgc291bmQgfV0gPSB1c2VTb3VuZChcclxuICAgICAgICBzb25nVXJsLCB7XHJcbiAgICAgICAgdm9sdW1lOiB2b2x1bWUsXHJcbiAgICAgICAgb25wbGF5OiAoKSA9PiBzZXRJc1BsYXlpbmcodHJ1ZSksXHJcbiAgICAgICAgb25lbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNQbGF5aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgb25QbGF5TmV4dCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25wYXVzZTogKCkgPT4gc2V0SXNQbGF5aW5nKGZhbHNlKSxcclxuICAgICAgICBmb3JtYXQ6IFtcIm1wM1wiXSxcclxuICAgIH1cclxuICAgIClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNvdW5kPy5wbGF5KClcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc291bmQ/LnVubG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW3NvdW5kXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgcGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU11dGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHZvbHVtZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRWb2x1bWUoMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Vm9sdW1lKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVkaWFJdGVtIGRhdGE9e3Nvbmd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpa2VCdXR0b24gc29uZ0lkPXtzb25nLmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1kOmhpZGRlbiBjb2wtYXV0byB3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZVBsYXl9IGNsYXNzTmFtZT1cImgtMTAgdy0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctd2hpdGUgcC0xIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gc2l6ZT17MzB9IGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gaC1mdWxsIG1kOmZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBtYXgtdy1bNzIycHhdIGdhcC14LTZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QWlGaWxsU3RlcEJhY2t3YXJkIG9uQ2xpY2s9e29uUGxheVByZXZpb3VzIH0gc2l6ZT17MzB9IGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC00MDAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZVBsYXkgfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTEwIHctMTAgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHAtMSBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIHNpemU9ezMwfSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxBaUZpbGxTdGVwRm9yd2FyZCBvbkNsaWNrPXsgb25QbGF5TmV4dCB9IHNpemU9ezMwfSBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNDAwIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggdy1mdWxsIGp1c3RpZnktZW5kIHByLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMiB3LVsxMjBweF1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Vm9sdW1lSWNvbiBvbkNsaWNrPXsoKSA9PiB7IHRvZ2dsZU11dGUoKSB9fSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHNpemU9ezM0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgdmFsdWU9e3ZvbHVtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRWb2x1bWUodmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckNvbnRlbnQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTb3VuZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCc1BhdXNlRmlsbCIsIkJzUGxheUZpbGwiLCJIaVNwZWFrZXJXYXZlIiwiSGlTcGVha2VyWE1hcmsiLCJBaUZpbGxTdGVwQmFja3dhcmQiLCJBaUZpbGxTdGVwRm9yd2FyZCIsIlNsaWRlciIsIk1lZGlhSXRlbSIsIkxpa2VCdXR0b24iLCJ1c2VQbGF5ZXIiLCJQbGF5ZXJDb250ZW50Iiwic29uZyIsInNvbmdVcmwiLCJwbGF5ZXIiLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJJY29uIiwiVm9sdW1lSWNvbiIsIm9uUGxheU5leHQiLCJpZHMiLCJsZW5ndGgiLCJjdXJyZW50SW5kZXgiLCJmaW5kSW5kZXgiLCJpZCIsImFjdGl2ZUlkIiwibmV4dFNvbmciLCJzZXRJZCIsIm9uUGxheVByZXZpb3VzIiwicHJldmlvdXNTb25nIiwicGxheSIsInBhdXNlIiwic291bmQiLCJvbnBsYXkiLCJvbmVuZCIsIm9ucGF1c2UiLCJmb3JtYXQiLCJ1bmxvYWQiLCJoYW5kbGVQbGF5IiwidG9nZ2xlTXV0ZSIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEiLCJzb25nSWQiLCJvbkNsaWNrIiwic2l6ZSIsInZhbHVlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/PlayerContent.tsx\n"));

/***/ })

});