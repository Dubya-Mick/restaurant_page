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

/***/ "./src/cooking.js":
/*!************************!*\
  !*** ./src/cooking.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction cooking () {\n    let activeTab = document.getElementById('active-tab');\n\n    let cookingTitle = document.createElement('div');\n    cookingTitle.textContent = 'The kitchen was inside you all along. . . ';\n    cookingTitle.style.fontSize = '3rem';\n    cookingTitle.style.margin = '3vh 0 0 12vw';\n\n    let digestImg = document.createElement('img');\n    digestImg.setAttribute('src', 'https://childrensgimd.com/wp-content/uploads/2015/08/abdomen-digestive-system-614x1024.png');\n    digestImg.style.display = 'block';\n    digestImg.style.margin = '2rem auto';\n    digestImg.style.height = '600px';\n\n    let cookingCopy = document.createElement('div');\n    cookingCopy.textContent = \"As so happens in many a tale of innovation, what you set out journeying to find was inside all along. At Second Harvest, we've discovered that Nature's kitchen lives inside of all of us. To all who doubted us along the way, we ask one simple question: 'If the human body weren't made to produce restaurant-quality food, why is its average temperature such a perfect 98.6?'\";\n    cookingCopy.style.marginRight = '5vw';\n\n    let imgCopyWrapper = document.createElement('div');\n    imgCopyWrapper.style.display = 'grid';\n    imgCopyWrapper.style.gridTemplateColumns = '1fr 1fr';\n    imgCopyWrapper.style.margin = '0 auto';\n    imgCopyWrapper.style.alignItems = 'center';\n    \n    \n\n    imgCopyWrapper.appendChild(digestImg);\n    imgCopyWrapper.appendChild(cookingCopy);\n\n    activeTab.appendChild(cookingTitle);\n    activeTab.appendChild(imgCopyWrapper);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cooking);\n\n//# sourceURL=webpack://restaurant_page/./src/cooking.js?");

/***/ }),

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction food () {\n    let activeTab = document.getElementById('active-tab');\n\n    let foodTitle = document.createElement('div');\n    foodTitle.textContent = \"You won't believe it's food . . .\";\n    foodTitle.style.fontSize = '3rem';\n    foodTitle.style.margin = '3vh 0 0 12vw';\n\n    let foodPic = document.createElement('img');\n    foodPic.setAttribute('src', 'https://i.pinimg.com/originals/a1/e5/15/a1e51546a4648d921fe75cfadc89dd9a.png');\n    foodPic.style.display = 'block';\n    foodPic.style.width = '500px';\n    foodPic.style.height = '500px';\n    foodPic.style.margin = '0 auto';\n\n    let foodCopy = document.createElement('div');\n    foodCopy.textContent = \". . . and honestly we didn't either. Not until we tasted it. Biological upcycling of preused nutrients adds subtle dimensions of flavor and texture that no other restaurant can provide. Welcome to the future of dining. Welcome to the Second Harvest.\"\n    foodCopy.style.width = '32vw';\n\n    let imgCopyWrapper = document.createElement('div');\n    imgCopyWrapper.style.display = 'grid';\n    imgCopyWrapper.style.gridTemplateColumns = '1fr 1fr';\n    imgCopyWrapper.style.alignItems = 'center';\n    imgCopyWrapper.style.justifyContent = 'center';\n\n    imgCopyWrapper.appendChild(foodPic);\n    imgCopyWrapper.appendChild(foodCopy);\n\n    activeTab.appendChild(foodTitle);\n    activeTab.appendChild(imgCopyWrapper);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (food);\n\n//# sourceURL=webpack://restaurant_page/./src/food.js?");

/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction history() {\n    let activeTab = document.getElementById('active-tab');\n\n    let historyTitle = document.createElement('div');\n    historyTitle.textContent = \"A history of taste\";\n    historyTitle.style.fontSize = '3rem';\n    historyTitle.style.margin = '3vh 0 0 12vw';\n\n    let sandwich = document.createElement('img');\n    sandwich.setAttribute('src', 'https://bushbeans.com/sites/default/files/styles/fullsize_style/public/recipes/plate/protein-packed-grilled-cheese.png?itok=tFqeV4Oz');\n    sandwich.style.display = 'block';\n    sandwich.style.margin = '2rem auto';\n\n    let historyCopy = document.createElement('div');\n    historyCopy.textContent = 'It may look like a simple sandwich, but it represents so much more. In the beginning, we were the new kid on the block. We struggled. We cut our teeth. But little did we know we were simply looking for a canvas to paint our Mona Lisa. Now we have over 100 locations and cater to the white house.'\n    historyCopy.style.width = '32vw';\n    historyCopy.style.margin = '3rem 0 0 55vw';\n\n    activeTab.appendChild(historyTitle);\n    activeTab.appendChild(sandwich);\n    activeTab.appendChild(historyCopy);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (history);\n\n//# sourceURL=webpack://restaurant_page/./src/history.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history */ \"./src/history.js\");\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food */ \"./src/food.js\");\n/* harmony import */ var _cooking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cooking */ \"./src/cooking.js\");\n/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonial */ \"./src/testimonial.js\");\n\n\n\n\n\n\nconst renderNav = (() => {\n\n    //clear active tab\n    const clearActiveTab = () => {\n        let activeTab = document.getElementById('active-tab');\n        while(activeTab.firstChild) {\n            activeTab.removeChild(activeTab.firstChild);\n        }\n    }\n\n    const navBar = () => {\n        //main entire body wrapper\n        let mainContentDiv = document.getElementById('content');\n\n        //ids for navbar divs\n        let idArray = ['title', 'our-story', 'our-food', 'cooking', 'testimonial'];\n\n        //textContent for each tab\n        let textContentArray = ['Second Harvest', 'History', 'Food', '\"Cooking\"', 'Testimonials'];\n\n        //navBar wrapper\n        let navBarWrapper = document.createElement('div');\n        navBarWrapper.setAttribute('id', 'tab-nav-bar');\n\n        //active tab content wrapper\n        let activeTab = document.createElement('div');\n        activeTab.setAttribute('id', 'active-tab');\n\n        //doc fragment to contain all tabs before appending to DOM\n        let tabFragment = document.createDocumentFragment();\n\n        //create divs for each tab of the nav bar and set their ids\n        idArray.forEach((idName) => {\n            let tab = document.createElement('div');\n            tab.setAttribute('id', idName);\n            tabFragment.appendChild(tab);\n        });\n        navBarWrapper.appendChild(tabFragment);\n\n        let tabIsActive = (e) => {\n            e.target.setAttribute('class', 'tab-active');\n        };\n\n        let otherTabsInactive = () => {\n            navTabs.forEach((tab) => {\n                tab.classList.remove('tab-active');\n            })\n        }\n\n        //set the text content of each nav bar tab and add logic for style change on click\n        let navTabs = [...navBarWrapper.children];\n        for(let i = 0; i < textContentArray.length; i++) {\n            navTabs[i].textContent = textContentArray[i];\n            navTabs[i].addEventListener('click', (e) => {\n                otherTabsInactive();\n                tabIsActive(e);\n            })\n        }\n    \n        //render the navbar and the maincontent on load\n        mainContentDiv.appendChild(navBarWrapper);\n        mainContentDiv.appendChild(activeTab);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n        //testing history module\n        let historyTest = document.getElementById('our-story');\n        historyTest.addEventListener('click', () => {\n            clearActiveTab();\n            (0,_history__WEBPACK_IMPORTED_MODULE_1__.default)();\n        })\n\n        //testing home module\n        let homeTest = document.getElementById('title');\n        homeTest.setAttribute('class', 'tab-active');\n        homeTest.addEventListener('click', () => {\n            clearActiveTab();\n            (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n        })\n\n        let foodTab = document.getElementById('our-food');\n        foodTab.addEventListener('click', () => {\n            clearActiveTab();\n            (0,_food__WEBPACK_IMPORTED_MODULE_2__.default)();\n        })\n\n        let cookingTab = document.getElementById('cooking');\n        cookingTab.addEventListener('click', () => {\n            clearActiveTab();\n            (0,_cooking__WEBPACK_IMPORTED_MODULE_3__.default)();\n        })\n\n        let testimonialTab = document.getElementById('testimonial');\n        testimonialTab.addEventListener('click', () => {\n            clearActiveTab();\n            (0,_testimonial__WEBPACK_IMPORTED_MODULE_4__.default)();\n        })\n\n    }\n\n    return {navBar};\n\n})();\n\nrenderNav.navBar();\n\n//to do: add other tab modules, think about maybe having an array of all the module\n//functions and using a loop to add event listeners to each tab div all at once\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/testimonial.js":
/*!****************************!*\
  !*** ./src/testimonial.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction testimonial () {\n    let activeTab = document.getElementById('active-tab');\n\n    let reviewWrapper = document.createElement('div');\n    reviewWrapper.style.display = 'grid';\n    reviewWrapper.style.gridTemplateColumns = '1fr 1fr 1fr';\n    reviewWrapper.style.width = '80vw';\n    reviewWrapper.style.margin = '3vh auto'\n    reviewWrapper.style.textAlign = 'center';\n    reviewWrapper.style.alignItems = 'center';\n\n    let reviewOneWrap = document.createElement('div');\n    reviewOneWrap.style.margin = '0 1rem 0 0';\n    let reviewOne = document.createElement('div');\n    reviewOne.textContent = \"Now I'm a business man. And in my industry, trust is a limited resource. That's why I was blown away by the customer service at Second Harvest Catering. Their sloppy jo's had HR licking their lips!\";\n    let reviewOneCaption = document.createElement('div') \n    reviewOneCaption.textContent = '— Jimp Nugget, Associated Waste Management';\n    let reviewOnePhoto = document.createElement('img');\n    reviewOnePhoto.setAttribute('src', 'https://purepng.com/public/uploads/large/businessman-1aq.png');\n    reviewOnePhoto.style.height = '300px';\n    reviewOneWrap.appendChild(reviewOnePhoto);\n    reviewOneWrap.appendChild(reviewOne);\n    reviewOneWrap.appendChild(reviewOneCaption);\n\n    let reviewTwoWrap = document.createElement('div');\n    let reviewTwo = document.createElement('div');\n    reviewTwo.textContent = \"I'm not gonna lie. I'm a bit of a foodie. So I was understandably a little hesitant to try such an innovative culinary experience. But let me tell you, these sandwiches are soft in the best way. I barely have to chew!\";\n    let reviewTwoCaption = document.createElement('div');\n    reviewTwoCaption.textContent = '— Garen Boop, The Eating Show';\n    let reviewTwoPhoto = document.createElement('img');\n    reviewTwoPhoto.setAttribute('src', 'https://purepng.com/public/uploads/large/purepng.com-cool-guymanpeoplepersonsmalecool-1121525125875xyw4y.png');\n    reviewTwoPhoto.style.height = '330px';\n    reviewTwoWrap.appendChild(reviewTwoPhoto);\n    reviewTwoWrap.appendChild(reviewTwo);\n    reviewTwoWrap.appendChild(reviewTwoCaption);\n\n    let reviewThreeWrap = document.createElement('div');\n    reviewThreeWrap.style.margin = '0 0 0 1rem'\n    let reviewThree = document.createElement('div');\n    reviewThree.textContent = \"I'm just a regular person. I'm trying to feed my kids, and this is doing the job just fine.\"\n    let reviewThreeCaption = document.createElement('div');\n    reviewThreeCaption.textContent = '— Timander Gliss';\n    let reviewThreePhoto = document.createElement('img');\n    reviewThreePhoto.setAttribute('src', 'https://2.bp.blogspot.com/-nc-jObav_Kg/U_3zqpG15oI/AAAAAAAAB3g/0378Lns5cfk/s1600/happy-woman--%2Bhow%2Bto%2Bmake%2Byour%2Bwoman%2Bhappy.png');\n    reviewThreePhoto.style.height = '300px';\n    reviewThreeWrap.appendChild(reviewThreePhoto);\n    reviewThreeWrap.appendChild(reviewThree);\n    reviewThreeWrap.appendChild(reviewThreeCaption);\n\n    reviewWrapper.appendChild(reviewOneWrap);\n    reviewWrapper.appendChild(reviewTwoWrap);\n    reviewWrapper.appendChild(reviewThreeWrap);\n\n    activeTab.appendChild(reviewWrapper);\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testimonial);\n\n//# sourceURL=webpack://restaurant_page/./src/testimonial.js?");

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