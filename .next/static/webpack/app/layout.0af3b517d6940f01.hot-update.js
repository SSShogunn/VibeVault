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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b04597336c6c\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2ExZTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiMDQ1OTczMzZjNmNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/PlayerContent.tsx":
/*!**************************************!*\
  !*** ./components/PlayerContent.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-sound */ \"(app-pages-browser)/./node_modules/use-sound/dist/use-sound.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_BsPauseFill_BsPlayFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=BsPauseFill,BsPlayFill!=!react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_HiSpeakerWave_HiSpeakerXMark_react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=HiSpeakerWave,HiSpeakerXMark!=!react-icons/hi2 */ \"(app-pages-browser)/./node_modules/react-icons/hi2/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_AiFillStepBackward_AiFillStepForward_react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=AiFillStepBackward,AiFillStepForward!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slider */ \"(app-pages-browser)/./components/Slider.tsx\");\n/* harmony import */ var _MediaItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaItem */ \"(app-pages-browser)/./components/MediaItem.tsx\");\n/* harmony import */ var _LikeButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LikeButton */ \"(app-pages-browser)/./components/LikeButton.tsx\");\n/* harmony import */ var _hooks_usePlayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/usePlayer */ \"(app-pages-browser)/./hooks/usePlayer.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PlayerContent = (param)=>{\n    let { song, songUrl } = param;\n    _s();\n    const player = (0,_hooks_usePlayer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [volume, setVolume] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(1);\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const Icon = isPlaying ? _barrel_optimize_names_BsPauseFill_BsPlayFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsPauseFill : _barrel_optimize_names_BsPauseFill_BsPlayFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsPlayFill;\n    const VolumeIcon = volume === 0 ? _barrel_optimize_names_HiSpeakerWave_HiSpeakerXMark_react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__.HiSpeakerXMark : _barrel_optimize_names_HiSpeakerWave_HiSpeakerXMark_react_icons_hi2__WEBPACK_IMPORTED_MODULE_8__.HiSpeakerWave;\n    const onPlayNext = ()=>{\n        if (player.ids.length === 0) {\n            return;\n        }\n        const currentIndex = player.ids.findIndex((id)=>id === player.activeId);\n        const nextSong = player.ids[currentIndex + 1];\n        if (!nextSong) {\n            return player.setId(player.ids[0]);\n        }\n        player.setId(nextSong);\n    };\n    const onPlayPrevious = ()=>{\n        if (player.ids.length === 0) {\n            return;\n        }\n        const currentIndex = player.ids.findIndex((id)=>id === player.activeId);\n        const previousSong = player.ids[currentIndex - 1];\n        if (!previousSong) {\n            return player.setId(player.ids[player.ids.length - 1]);\n        }\n        player.setId(previousSong);\n    };\n    const [play, { pause, sound }] = (0,use_sound__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(songUrl, {\n        volume: volume,\n        onplay: ()=>setIsPlaying(true),\n        onend: ()=>{\n            setIsPlaying(false);\n            onPlayNext();\n        },\n        onpause: ()=>setIsPlaying(false),\n        format: [\n            \"mp3\"\n        ]\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        sound === null || sound === void 0 ? void 0 : sound.play();\n        return ()=>{\n            sound === null || sound === void 0 ? void 0 : sound.unload();\n        };\n    }, [\n        sound\n    ]);\n    const handlePlay = ()=>{\n        if (!isPlaying) {\n            play();\n        } else {\n            pause();\n        }\n    };\n    const toggleMute = ()=>{\n        if (volume === 0) {\n            setVolume(1);\n        } else {\n            setVolume(0);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 md:grid-cols-3 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MediaItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            data: song\n                        }, void 0, false, {\n                            fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikeButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            songId: song.id\n                        }, void 0, false, {\n                            fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex md:hidden col-auto w-full justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: handlePlay,\n                    className: \"h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStepBackward_AiFillStepForward_react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillStepBackward, {\n                            onClick: onPlayPrevious,\n                            size: 30,\n                            className: \"text-neutral-400 cursor-pointer hover:text-white transition\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                            size: 30,\n                            className: \"text-black\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStepBackward_AiFillStepForward_react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillStepBackward, {\n                        onClick: onPlayPrevious,\n                        size: 30,\n                        className: \"text-neutral-400 cursor-pointer hover:text-white transition\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: handlePlay,\n                        className: \"flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                            size: 30,\n                            className: \"text-black\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillStepBackward_AiFillStepForward_react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillStepForward, {\n                        onClick: onPlayNext,\n                        size: 30,\n                        className: \"text-neutral-400 cursor-pointer hover:text-white transition\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex w-full justify-end pr-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-x-2 w-[120px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VolumeIcon, {\n                            onClick: ()=>{\n                                toggleMute();\n                            },\n                            className: \"cursor-pointer\",\n                            size: 34\n                        }, void 0, false, {\n                            fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            value: volume,\n                            onChange: (value)=>setVolume(value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n                lineNumber: 125,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\VSCode\\\\WebDev\\\\REACT_APPS\\\\SPOTIFY_CLONE\\\\vibevault\\\\components\\\\PlayerContent.tsx\",\n        lineNumber: 98,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PlayerContent, \"wMw+Ki71tdoFl19BGoeEULBpdPY=\", false, function() {\n    return [\n        _hooks_usePlayer__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        use_sound__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = PlayerContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerContent);\nvar _c;\n$RefreshReg$(_c, \"PlayerContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUGxheWVyQ29udGVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDa0I7QUFDTTtBQUNPO0FBQ087QUFJekM7QUFDTTtBQUNFO0FBQ0k7QUFTMUMsTUFBTWMsZ0JBQThDO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUU7O0lBRWxFLE1BQU1DLFNBQVNKLDREQUFTQTtJQUN4QixNQUFNLENBQUNLLFFBQVFDLFVBQVUsR0FBR2xCLHFEQUFjLENBQUM7SUFDM0MsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHbEIsK0NBQVFBLENBQUM7SUFFM0MsTUFBTW1CLE9BQU9GLFlBQVloQixxR0FBV0EsR0FBR0Msb0dBQVVBO0lBQ2pELE1BQU1rQixhQUFhTCxXQUFXLElBQUlYLCtHQUFjQSxHQUFHRCw4R0FBYUE7SUFFaEUsTUFBTWtCLGFBQWE7UUFDZixJQUFJUCxPQUFPUSxHQUFHLENBQUNDLE1BQU0sS0FBSyxHQUFHO1lBQ3pCO1FBQ0o7UUFFQSxNQUFNQyxlQUFlVixPQUFPUSxHQUFHLENBQUNHLFNBQVMsQ0FBQyxDQUFDQyxLQUFPQSxPQUFPWixPQUFPYSxRQUFRO1FBQ3hFLE1BQU1DLFdBQVdkLE9BQU9RLEdBQUcsQ0FBQ0UsZUFBZSxFQUFFO1FBRTdDLElBQUksQ0FBQ0ksVUFBVTtZQUNYLE9BQU9kLE9BQU9lLEtBQUssQ0FBQ2YsT0FBT1EsR0FBRyxDQUFDLEVBQUU7UUFDckM7UUFDQVIsT0FBT2UsS0FBSyxDQUFDRDtJQUNqQjtJQUVBLE1BQU1FLGlCQUFpQjtRQUNuQixJQUFJaEIsT0FBT1EsR0FBRyxDQUFDQyxNQUFNLEtBQUssR0FBRztZQUN6QjtRQUNKO1FBRUEsTUFBTUMsZUFBZVYsT0FBT1EsR0FBRyxDQUFDRyxTQUFTLENBQUMsQ0FBQ0MsS0FBT0EsT0FBT1osT0FBT2EsUUFBUTtRQUN4RSxNQUFNSSxlQUFlakIsT0FBT1EsR0FBRyxDQUFDRSxlQUFlLEVBQUU7UUFFakQsSUFBSSxDQUFDTyxjQUFjO1lBQ2YsT0FBT2pCLE9BQU9lLEtBQUssQ0FBQ2YsT0FBT1EsR0FBRyxDQUFDUixPQUFPUSxHQUFHLENBQUNDLE1BQU0sR0FBRyxFQUFFO1FBQ3pEO1FBQ0FULE9BQU9lLEtBQUssQ0FBQ0U7SUFDakI7SUFFQSxNQUFNLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQyxHQUFHckMscURBQVFBLENBQ3JDZ0IsU0FBUztRQUNURSxRQUFRQTtRQUNSb0IsUUFBUSxJQUFNakIsYUFBYTtRQUMzQmtCLE9BQU87WUFDSGxCLGFBQWE7WUFDYkc7UUFDSjtRQUNBZ0IsU0FBUyxJQUFNbkIsYUFBYTtRQUM1Qm9CLFFBQVE7WUFBQztTQUFNO0lBQ25CO0lBR0F2QyxnREFBU0EsQ0FBQztRQUNObUMsa0JBQUFBLDRCQUFBQSxNQUFPRixJQUFJO1FBRVgsT0FBTztZQUNIRSxrQkFBQUEsNEJBQUFBLE1BQU9LLE1BQU07UUFDakI7SUFDSixHQUFFO1FBQUNMO0tBQU07SUFFVCxNQUFNTSxhQUFhO1FBQ2YsSUFBRyxDQUFDdkIsV0FBVztZQUNYZTtRQUNKLE9BQU87WUFDSEM7UUFDSjtJQUNKO0lBRUEsTUFBTVEsYUFBYTtRQUNmLElBQUkxQixXQUFXLEdBQUc7WUFDZEMsVUFBVTtRQUNkLE9BQU87WUFDSEEsVUFBVTtRQUNkO0lBQ0o7SUFFQSxxQkFDSSw4REFBQzBCO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDbkMsa0RBQVNBOzRCQUFDb0MsTUFBTWhDOzs7Ozs7c0NBQ2pCLDhEQUFDSCxtREFBVUE7NEJBQUNvQyxRQUFRakMsS0FBS2MsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSW5DLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJSSxTQUFTTjtvQkFBWUcsV0FBVTs7c0NBQ3BDLDhEQUFDdEMsMEhBQWtCQTs0QkFBQ3lDLFNBQVNoQjs0QkFBaUJpQixNQUFNOzRCQUFJSixXQUFVOzs7Ozs7c0NBQzlELDhEQUFDeEI7NEJBQUs0QixNQUFNOzRCQUFJSixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFWCw4REFBQ3RDLDBIQUFrQkE7d0JBQUN5QyxTQUFTaEI7d0JBQWlCaUIsTUFBTTt3QkFBSUosV0FBVTs7Ozs7O2tDQUVsRSw4REFBQ0Q7d0JBQUlJLFNBQVNOO3dCQUFhRyxXQUFVO2tDQUNqQyw0RUFBQ3hCOzRCQUFLNEIsTUFBTTs0QkFBSUosV0FBVTs7Ozs7Ozs7Ozs7a0NBRzlCLDhEQUFDckMseUhBQWlCQTt3QkFBQ3dDLFNBQVV6Qjt3QkFBYTBCLE1BQU07d0JBQUlKLFdBQVU7Ozs7Ozs7Ozs7OzswQkFJbEUsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUN2Qjs0QkFBVzBCLFNBQVM7Z0NBQVFMOzRCQUFhOzRCQUFHRSxXQUFVOzRCQUFpQkksTUFBTTs7Ozs7O3NDQUM5RSw4REFBQ3hDLCtDQUFNQTs0QkFBQ3lDLE9BQU9qQzs0QkFDZmtDLFVBQVUsQ0FBQ0QsUUFBVWhDLFVBQVVnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkQ7R0EvR01yQzs7UUFFYUQsd0RBQVNBO1FBbUNTYixpREFBUUE7OztLQXJDdkNjO0FBaUhOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGxheWVyQ29udGVudC50c3g/YjQ1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHVzZVNvdW5kIGZyb20gJ3VzZS1zb3VuZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJzUGF1c2VGaWxsLCBCc1BsYXlGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7IEhpU3BlYWtlcldhdmUsIEhpU3BlYWtlclhNYXJrIH0gZnJvbSBcInJlYWN0LWljb25zL2hpMlwiO1xyXG5pbXBvcnQgeyBBaUZpbGxTdGVwQmFja3dhcmQsIEFpRmlsbFN0ZXBGb3J3YXJkIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcblxyXG5pbXBvcnQgeyBTb25nIH0gZnJvbSBcIkAvdHlwZXNcIlxyXG5cclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9TbGlkZXJcIjtcclxuaW1wb3J0IE1lZGlhSXRlbSBmcm9tIFwiLi9NZWRpYUl0ZW1cIjtcclxuaW1wb3J0IExpa2VCdXR0b24gZnJvbSBcIi4vTGlrZUJ1dHRvblwiO1xyXG5pbXBvcnQgdXNlUGxheWVyIGZyb20gXCJAL2hvb2tzL3VzZVBsYXllclwiO1xyXG5cclxuXHJcblxyXG5pbnRlcmZhY2UgUGxheWVyQ29udGVudFByb3BzIHtcclxuICAgIHNvbmc6IFNvbmc7XHJcbiAgICBzb25nVXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFBsYXllckNvbnRlbnQ6IFJlYWN0LkZDPFBsYXllckNvbnRlbnRQcm9wcz4gPSAoeyBzb25nLCBzb25nVXJsIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXIgPSB1c2VQbGF5ZXIoKTtcclxuICAgIGNvbnN0IFt2b2x1bWUsIHNldFZvbHVtZV0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgSWNvbiA9IGlzUGxheWluZyA/IEJzUGF1c2VGaWxsIDogQnNQbGF5RmlsbDtcclxuICAgIGNvbnN0IFZvbHVtZUljb24gPSB2b2x1bWUgPT09IDAgPyBIaVNwZWFrZXJYTWFyayA6IEhpU3BlYWtlcldhdmU7XHJcblxyXG4gICAgY29uc3Qgb25QbGF5TmV4dCA9ICgpID0+IHtcclxuICAgICAgICBpZiAocGxheWVyLmlkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcGxheWVyLmlkcy5maW5kSW5kZXgoKGlkKSA9PiBpZCA9PT0gcGxheWVyLmFjdGl2ZUlkKTtcclxuICAgICAgICBjb25zdCBuZXh0U29uZyA9IHBsYXllci5pZHNbY3VycmVudEluZGV4ICsgMV07XHJcblxyXG4gICAgICAgIGlmICghbmV4dFNvbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBsYXllci5zZXRJZChwbGF5ZXIuaWRzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGxheWVyLnNldElkKG5leHRTb25nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblBsYXlQcmV2aW91cyA9ICgpID0+IHtcclxuICAgICAgICBpZiAocGxheWVyLmlkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcGxheWVyLmlkcy5maW5kSW5kZXgoKGlkKSA9PiBpZCA9PT0gcGxheWVyLmFjdGl2ZUlkKTtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1NvbmcgPSBwbGF5ZXIuaWRzW2N1cnJlbnRJbmRleCAtIDFdO1xyXG5cclxuICAgICAgICBpZiAoIXByZXZpb3VzU29uZykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGxheWVyLnNldElkKHBsYXllci5pZHNbcGxheWVyLmlkcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsYXllci5zZXRJZChwcmV2aW91c1NvbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtwbGF5LCB7IHBhdXNlLCBzb3VuZCB9XSA9IHVzZVNvdW5kKFxyXG4gICAgICAgIHNvbmdVcmwsIHtcclxuICAgICAgICB2b2x1bWU6IHZvbHVtZSxcclxuICAgICAgICBvbnBsYXk6ICgpID0+IHNldElzUGxheWluZyh0cnVlKSxcclxuICAgICAgICBvbmVuZDogKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBvblBsYXlOZXh0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbnBhdXNlOiAoKSA9PiBzZXRJc1BsYXlpbmcoZmFsc2UpLFxyXG4gICAgICAgIGZvcm1hdDogW1wibXAzXCJdLFxyXG4gICAgfVxyXG4gICAgKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc291bmQ/LnBsYXkoKVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBzb3VuZD8udW5sb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbc291bmRdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlzUGxheWluZykge1xyXG4gICAgICAgICAgICBwbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlTXV0ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAodm9sdW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFZvbHVtZSgxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRWb2x1bWUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYUl0ZW0gZGF0YT17c29uZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlrZUJ1dHRvbiBzb25nSWQ9e3NvbmcuaWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6aGlkZGVuIGNvbC1hdXRvIHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlUGxheX0gY2xhc3NOYW1lPVwiaC0xMCB3LTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBwLTEgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxBaUZpbGxTdGVwQmFja3dhcmQgb25DbGljaz17b25QbGF5UHJldmlvdXMgfSBzaXplPXszMH0gY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTQwMCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIHNpemU9ezMwfSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtZnVsbCBtZDpmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbWF4LXctWzcyMnB4XSBnYXAteC02XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFpRmlsbFN0ZXBCYWNrd2FyZCBvbkNsaWNrPXtvblBsYXlQcmV2aW91cyB9IHNpemU9ezMwfSBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNDAwIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvblwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVQbGF5IH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBwLTEgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBzaXplPXszMH0gY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QWlGaWxsU3RlcEZvcndhcmQgb25DbGljaz17IG9uUGxheU5leHQgfSBzaXplPXszMH0gY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTQwMCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb25cIiAvPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IHctZnVsbCBqdXN0aWZ5LWVuZCBwci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTIgdy1bMTIwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZvbHVtZUljb24gb25DbGljaz17KCkgPT4geyB0b2dnbGVNdXRlKCkgfX0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBzaXplPXszNH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIHZhbHVlPXt2b2x1bWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Vm9sdW1lKHZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJDb250ZW50O1xyXG4iXSwibmFtZXMiOlsidXNlU291bmQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnNQYXVzZUZpbGwiLCJCc1BsYXlGaWxsIiwiSGlTcGVha2VyV2F2ZSIsIkhpU3BlYWtlclhNYXJrIiwiQWlGaWxsU3RlcEJhY2t3YXJkIiwiQWlGaWxsU3RlcEZvcndhcmQiLCJTbGlkZXIiLCJNZWRpYUl0ZW0iLCJMaWtlQnV0dG9uIiwidXNlUGxheWVyIiwiUGxheWVyQ29udGVudCIsInNvbmciLCJzb25nVXJsIiwicGxheWVyIiwidm9sdW1lIiwic2V0Vm9sdW1lIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiSWNvbiIsIlZvbHVtZUljb24iLCJvblBsYXlOZXh0IiwiaWRzIiwibGVuZ3RoIiwiY3VycmVudEluZGV4IiwiZmluZEluZGV4IiwiaWQiLCJhY3RpdmVJZCIsIm5leHRTb25nIiwic2V0SWQiLCJvblBsYXlQcmV2aW91cyIsInByZXZpb3VzU29uZyIsInBsYXkiLCJwYXVzZSIsInNvdW5kIiwib25wbGF5Iiwib25lbmQiLCJvbnBhdXNlIiwiZm9ybWF0IiwidW5sb2FkIiwiaGFuZGxlUGxheSIsInRvZ2dsZU11dGUiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhIiwic29uZ0lkIiwib25DbGljayIsInNpemUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/PlayerContent.tsx\n"));

/***/ })

});