/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction history() {\n    let activeTab = document.getElementById('active-tab');\n\n    let testText = document.createElement('div');\n    testText.textContent = \"A history of taste\";\n    testText.style.fontSize = '3rem';\n    testText.style.margin = '3vh 0 0 12vw';\n\n    let scientificImage = document.createElement('img');\n    scientificImage.setAttribute('src', 'https://layers-of-learning.com/wp-content/uploads/2011/03/scientific-method.png');\n    scientificImage.style.display = 'block';\n    scientificImage.style.margin = '0 auto';\n\n    activeTab.appendChild(testText);\n\n    activeTab.appendChild(scientificImage);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (history);\n\n//# sourceURL=webpack://restaurant_page/./src/history.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction home() {\n    let activeTab = document.getElementById('active-tab');\n\n    let feast = document.createElement('p');\n    feast.setAttribute('id', 'feast');\n    feast.textContent = \"A feast for the senses\";\n\n    let cookingHandsImg = document.createElement('img');\n    cookingHandsImg.setAttribute('id', 'cook-hands');\n    cookingHandsImg.setAttribute('src', \"https://www.pngkey.com/png/full/758-7589724_for-30-years-our-sophisticated-menu-of-contemporary.png\");\n\n    let homeCopy = document.createElement('p');\n    homeCopy.setAttribute('id', 'home-copy');\n    homeCopy.textContent = \"At Second Harvest, brown is the new green. Using only the finest locally sourced and biologically upcycled ingredients, our world-class chefs produce artisan sandwich fillings that'll have you coming back for more.\"\n\n    activeTab.appendChild(feast);\n    activeTab.appendChild(cookingHandsImg);\n    activeTab.appendChild(homeCopy);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history */ \"./src/history.js\");\n\n\n\nconst renderNav = (() => {\n\n    //clear active tab\n    const clearActiveTab = () => {\n        let activeTab = document.getElementById('active-tab');\n        while(activeTab.firstChild) {\n            activeTab.removeChild(activeTab.firstChild);\n        }\n    }\n\n    const navBar = () => {\n        //main entire body wrapper\n        let mainContentDiv = document.getElementById('content');\n\n        //ids for navbar divs\n        let idArray = ['title', 'our-story', 'our-food', 'cooking', 'testimonial'];\n\n        //textContent for each tab\n        let textContentArray = ['Second Harvest', 'History', 'Food', '\"Cooking\"', 'Testimonials'];\n\n        //navBar wrapper\n        let navBarWrapper = document.createElement('div');\n        navBarWrapper.setAttribute('id', 'tab-nav-bar');\n\n        //active tab content wrapper\n        let activeTab = document.createElement('div');\n        activeTab.setAttribute('id', 'active-tab');\n\n        //doc fragment to contain all tabs before appending to DOM\n        let tabFragment = document.createDocumentFragment();\n\n        //create divs for each tab of the nav bar and set their ids\n        idArray.forEach((idName) => {\n            let tab = document.createElement('div');\n            tab.setAttribute('id', idName);\n            tabFragment.appendChild(tab);\n        });\n        navBarWrapper.appendChild(tabFragment);\n\n        //set the text content of each nav bar tab\n        let navTabs = [...navBarWrapper.children];\n        for(let i = 0; i < textContentArray.length; i++) {\n            navTabs[i].textContent = textContentArray[i];\n        }\n    \n        //render the navbar and the maincontent on load\n        mainContentDiv.appendChild(navBarWrapper);\n        mainContentDiv.appendChild(activeTab);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n        //testing history module\n        let historyTest = document.getElementById('our-story');\n        historyTest.addEventListener('click', () => {\n            clearActiveTab();\n            (0,_history__WEBPACK_IMPORTED_MODULE_1__.default)();\n        })\n\n        //testing home module\n        let homeTest = document.getElementById('title');\n        homeTest.addEventListener('click', () => {\n            clearActiveTab();\n            (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n        })\n    }\n\n    \n    \n\n    return {navBar};\n})();\n\nrenderNav.navBar();\n\n//to do: add other tab modules, think about maybe having an array of all the module\n//functions and using a loop to add event listeners to each tab div all at once\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;