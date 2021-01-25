/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./broject/js/email.js":
/*!*****************************!*\
  !*** ./broject/js/email.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateEmail\": () => /* binding */ validateEmail,\n/* harmony export */   \"valiemail\": () => /* binding */ valiemail\n/* harmony export */ });\nconst validateEmail = (email) => {\r\n    email = $(\"#validationCusemail\")\r\n    email.on(\"keyup\",function(){\r\n        var emailReg = /^([\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4})?$/;\r\n        if( !emailReg.test( email.val() ) ) {\r\n            console.log(\"a\")\r\n            $(\"#error2\").fadeIn().text(\"@gmail.com gerekiyor\").css(\"color\",\"#dc3545\");\r\n            $(\"#validationCusemail\").focus().css({\r\n                \"border-bottom\" : \"2px solid red\",\r\n                \"border\" : \"red\",\r\n                \"box-shadow\" : \"0 0 0 0.2rem rgb(220 53 69 / 25%)\",\r\n            })\r\n            return false;\r\n        }else if($(\"#validationCusemail\").val().length < 1){\r\n            $(\"#error2\").fadeIn().text(\"Alan boş kalamaz\").css(\"color\",\"#dc3545\")\r\n            $(\"#validationCusemail\").focus().css({\r\n                \"border-bottom\" : \"2px solid red\",\r\n                \"border\" : \"red\",\r\n                \"box-shadow\" : \"0 0 0 0.2rem rgb(220 53 69 / 25%)\",\r\n            })\r\n            return false\r\n        } else {\r\n            $(\"#error2\").fadeOut()\r\n            $(\"#validationCusemail\").focus().css({\r\n                \"border-bottom\" : \"2px solid green\",\r\n                \"border\" : \"green\",\r\n                \"box-shadow\" : \"0 0 0 0.2rem rgb(40 167 69 / 25%)\",\r\n            }) \r\n            return true;\r\n        }\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst valiemail = ()=>{\r\n    $(\"#validationCusemail\").on(\"keyup\",function(){\r\n        if($(\"#validationCusemail\").val().length < 1){\r\n            $(\"#error2\").fadeIn().text(\"Alan boş kalamaz\").css(\"color\",\"#dc3545\")\r\n            $(\"#validationCusemail\").focus().css({\r\n                \"border-bottom\" : \"2px solid red\",\r\n                \"border\" : \"red\",\r\n                \"box-shadow\" : \"0 0 0 0.2rem rgb(220 53 69 / 25%)\",\r\n            })\r\n            return false\r\n        }\r\n    })\r\n    if($(\"#validationCusemail\").val().length < 1){\r\n        $(\"#error2\").fadeIn().text(\"Alan boş kalamaz\").css(\"color\",\"#dc3545\")\r\n        $(\"#validationCusemail\").focus().css({\r\n            \"border-bottom\" : \"2px solid red\",\r\n            \"border\" : \"red\",\r\n            \"box-shadow\" : \"0 0 0 0.2rem rgb(220 53 69 / 25%)\",\r\n        })\r\n        return false\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://app/./broject/js/email.js?");

/***/ }),

/***/ "./broject/js/java.js":
/*!****************************!*\
  !*** ./broject/js/java.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./name.js */ \"./broject/js/name.js\");\n/* harmony import */ var _email_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.js */ \"./broject/js/email.js\");\n/* harmony import */ var _messega_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messega.js */ \"./broject/js/messega.js\");\n   // for name input\r\n   // for email input\r\n   // for messega input input\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(function () {\r\n    'use strict'\r\n\r\n\r\n\r\n\r\n;(0,_name_js__WEBPACK_IMPORTED_MODULE_0__[\"nameİnput\"])() // for name input\r\n;(0,_email_js__WEBPACK_IMPORTED_MODULE_1__.validateEmail)()  // for email input\r\n\r\n\r\n    $(\"form\").on(\"submit\", function (){\r\n        ;(0,_email_js__WEBPACK_IMPORTED_MODULE_1__.valiemail)()\r\n        ;(0,_name_js__WEBPACK_IMPORTED_MODULE_0__.valiname)()\r\n        ;(0,_messega_js__WEBPACK_IMPORTED_MODULE_2__.messege)()\r\n        return;\r\n    })\r\n\r\n\r\n    // Fetch all the forms we want to apply custom Bootstrap validation styles to\r\n    var forms = document.querySelectorAll('.needs-validation')\r\n    // Loop over them and prevent submission\r\n    Array.prototype.slice.call(forms)\r\n    .forEach(function (form) {\r\n        form.addEventListener('submit', function (event) {\r\n        if (!form.checkValidity()) {\r\n            event.preventDefault()\r\n            event.stopPropagation()\r\n        }\r\n        form.classList.add('was-validated')\r\n        }, true)\r\n    })\r\n})()\r\n\r\n\n\n//# sourceURL=webpack://app/./broject/js/java.js?");

/***/ }),

/***/ "./broject/js/messega.js":
/*!*******************************!*\
  !*** ./broject/js/messega.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"messege\": () => /* binding */ messege\n/* harmony export */ });\nconst messege = ()=>{\r\n    $(\"#validationtextArea\").on(\"keyup\",function(){\r\n        if($(\"#validationtextArea\").val().length < 10){\r\n            $(\"#error10\").fadeIn().text(\"10 den fazla olur\").css(\"color\",\"#dc3545\")\r\n            $(\"#validationtextArea\").css({\r\n                \"border-bottom\" : \"2px solid red\"\r\n            })\r\n            $(\"#validationtextArea\").focus().css({\r\n                \"border-bottom\" : \"2px solid red\",\r\n                \"border\" : \"red\",\r\n                \"box-shadow\" : \"0 0 0 0.2rem rgb(220 53 69 / 25%)\",\r\n            })\r\n            return false\r\n        }else if($(\"#validationtextArea\").val().length >= 10){\r\n            $(\"#error10\").fadeOut()\r\n            $(\"#validationtextArea\").css({\r\n                \"border-bottom\" : \"2px solid #28a745\"\r\n            })\r\n            $(\"#validationtextArea\").focus().css({\r\n                \"border-bottom\" : \"2px solid green\",\r\n                \"border\" : \"green\",\r\n                \"box-shadow\" : \"0 0 0 0.2rem rgb(40 167 69 / 25%)\",\r\n            })\r\n            return true\r\n        }\r\n    })\r\n    if($(\"#validationtextArea\").val().length < 10){\r\n        $(\"#error10\").fadeIn().text(\"10 den fazla olur\").css(\"color\",\"#dc3545\")\r\n        return false\r\n    }else if($(\"#validationtextArea\").val().length >= 10){\r\n        $(\"#error10\").fadeOut()\r\n        return true\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://app/./broject/js/messega.js?");

/***/ }),

/***/ "./broject/js/name.js":
/*!****************************!*\
  !*** ./broject/js/name.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nameİnput\": () => /* binding */ nameİnput,\n/* harmony export */   \"valiname\": () => /* binding */ valiname\n/* harmony export */ });\nconst nameİnput = ()=>{\r\n    $(\"#validationCustom01\").bind(\"keypress\", function (event , e) {\r\n        if (event.charCode!=0) {\r\n            var regex = new RegExp(\"^[a-zA-Z]+$\");\r\n            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);\r\n            if (!regex.test(key)) {\r\n                event.preventDefault();\r\n                return false;\r\n            }else if(event.which === 32) \r\n            return false;\r\n        }\r\n    });\r\n}\r\nconst valiname = ()=>{\r\n    $(\"#validationCustom01\").on(\"keyup\",function(){\r\n        if($(\"#validationCustom01\").val().length < 1){\r\n            $(\"#error1\").fadeIn().text(\"Alan boş kalamaz\").css(\"color\",\"#dc3545\")\r\n            return false\r\n        }else if($(\"#validationCustom01\").val().length >= 1){\r\n            $(\"#error1\").fadeOut()\r\n            return false\r\n        }else{\r\n            return true\r\n        }\r\n    })\r\n    if($(\"#validationCustom01\").val().length < 1){\r\n        $(\"#error1\").fadeIn().text(\"Alan boş kalamaz\").css(\"color\",\"#dc3545\")\r\n        return false\r\n    }else if($(\"#validationCustom01\").val().length >= 1){\r\n        $(\"#error1\").fadeOut()\r\n        return false\r\n    }else{\r\n        return true\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://app/./broject/js/name.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./broject/js/name.js");
/******/ 	__webpack_require__("./broject/js/email.js");
/******/ 	__webpack_require__("./broject/js/messega.js");
/******/ 	__webpack_require__("./broject/js/java.js");
/******/ })()
;
