/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
  const content = document.querySelector("#content");
  const newDiv = document.createElement("h1");
  newDiv.innerText = "Don't call, just visit!";
  content.appendChild(newDiv);

  const newImage = document.createElement("img");
  newImage.setAttribute(
    "src",
    "https://img-9gag-fun.9cache.com/photo/ang1dxL_700bwp.webp"
  );
  console.log(newImage);
  content.appendChild(newImage);

  const newP = document.createElement("p");
  newP.innerText = "Meet our chef in person!";
  content.appendChild(newP);
}



/***/ }),

/***/ "./src/HomePage.js":
/*!*************************!*\
  !*** ./src/HomePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });


// const DOMcontent = (() => {
//   const content = document.querySelector("#content");
//   const addElement = (element) => {
//     content.appendChild(document.createElement("div"));
//   };
// })();

function loadHome() {
  const content = document.querySelector("#content");
  const newDiv = document.createElement("h1");
  newDiv.innerText = "This is the best restaurant!";
  content.appendChild(newDiv);

  const newImage = document.createElement("img");
  newImage.setAttribute("src", "../src/img/logo.png");
  console.log(newImage);
  content.appendChild(newImage);

  const newParagraph = document.createElement("p");
  newParagraph.innerText = "Woah what an amazing taste!";
  content.appendChild(newParagraph);
}




/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
  const content = document.querySelector("#content");

  function createDish(name, description, imageSource) {
    const newDish = document.createElement("div");
    newDish.className = "dish";

    const dishName = document.createElement("p");
    dishName.innerText = name;

    const dishDescription = document.createElement("p");
    dishDescription.innerText = description;

    const dishImage = document.createElement("img");
    dishImage.src = imageSource;

    newDish.appendChild(dishName);
    newDish.appendChild(dishImage);
    newDish.appendChild(dishDescription);

    return newDish;
  }

  const noodles = createDish(
    "Hibachi Noodles",
    "Cheap and Tasty!",
    "https://bakeitwithlove.com/wp-content/uploads/2020/01/HIbachi-Noodles-lg-sq.jpg"
  );
  content.appendChild(noodles);

  const rice = createDish(
    "Panda rice",
    "Big portion for Pandas out there!",
    "https://www.advantour.com/img/china/food/scallops.jpg"
  );
  content.appendChild(rice);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.js */ "./src/HomePage.js");
/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.js */ "./src/Menu.js");
/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact.js */ "./src/Contact.js");




function clearContent() {
  const content = document.querySelector("#content");
  console.log(content);
  content.innerText = "";
}

const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {
  clearContent();
  (0,_Contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact)();
});

const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  clearContent();
  (0,_Menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
});

const home = document.querySelector(".home");
home.addEventListener("click", () => {
  clearContent();
  (0,_HomePage_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();
});

(0,_HomePage_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7O0FDbEJWO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0I7Ozs7Ozs7Ozs7Ozs7OztBQ3pCcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQjs7Ozs7OztVQ3RDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0o7QUFDTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQVc7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFRO0FBQ1YsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBUTtBQUNWLENBQUM7QUFDRDtBQUNBLHNEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9NZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBuZXdEaXYuaW5uZXJUZXh0ID0gXCJEb24ndCBjYWxsLCBqdXN0IHZpc2l0IVwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcclxuXHJcbiAgY29uc3QgbmV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG5ld0ltYWdlLnNldEF0dHJpYnV0ZShcclxuICAgIFwic3JjXCIsXHJcbiAgICBcImh0dHBzOi8vaW1nLTlnYWctZnVuLjljYWNoZS5jb20vcGhvdG8vYW5nMWR4TF83MDBid3Aud2VicFwiXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhuZXdJbWFnZSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XHJcblxyXG4gIGNvbnN0IG5ld1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBuZXdQLmlubmVyVGV4dCA9IFwiTWVldCBvdXIgY2hlZiBpbiBwZXJzb24hXCI7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdQKTtcclxufVxyXG5leHBvcnQgeyBsb2FkQ29udGFjdCB9O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIGNvbnN0IERPTWNvbnRlbnQgPSAoKCkgPT4ge1xyXG4vLyAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbi8vICAgY29uc3QgYWRkRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4vLyAgIH07XHJcbi8vIH0pKCk7XHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBuZXdEaXYuaW5uZXJUZXh0ID0gXCJUaGlzIGlzIHRoZSBiZXN0IHJlc3RhdXJhbnQhXCI7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG5cclxuICBjb25zdCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbmV3SW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltZy9sb2dvLnBuZ1wiKTtcclxuICBjb25zb2xlLmxvZyhuZXdJbWFnZSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XHJcblxyXG4gIGNvbnN0IG5ld1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIG5ld1BhcmFncmFwaC5pbm5lclRleHQgPSBcIldvYWggd2hhdCBhbiBhbWF6aW5nIHRhc3RlIVwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3UGFyYWdyYXBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgbG9hZEhvbWUgfTtcclxuIiwiZnVuY3Rpb24gbG9hZE1lbnUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlRGlzaChuYW1lLCBkZXNjcmlwdGlvbiwgaW1hZ2VTb3VyY2UpIHtcclxuICAgIGNvbnN0IG5ld0Rpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3RGlzaC5jbGFzc05hbWUgPSBcImRpc2hcIjtcclxuXHJcbiAgICBjb25zdCBkaXNoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGlzaE5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcclxuXHJcbiAgICBjb25zdCBkaXNoRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRpc2hEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBkaXNoSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZGlzaEltYWdlLnNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgIG5ld0Rpc2guYXBwZW5kQ2hpbGQoZGlzaE5hbWUpO1xyXG4gICAgbmV3RGlzaC5hcHBlbmRDaGlsZChkaXNoSW1hZ2UpO1xyXG4gICAgbmV3RGlzaC5hcHBlbmRDaGlsZChkaXNoRGVzY3JpcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBuZXdEaXNoO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgbm9vZGxlcyA9IGNyZWF0ZURpc2goXHJcbiAgICBcIkhpYmFjaGkgTm9vZGxlc1wiLFxyXG4gICAgXCJDaGVhcCBhbmQgVGFzdHkhXCIsXHJcbiAgICBcImh0dHBzOi8vYmFrZWl0d2l0aGxvdmUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAxL0hJYmFjaGktTm9vZGxlcy1sZy1zcS5qcGdcIlxyXG4gICk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChub29kbGVzKTtcclxuXHJcbiAgY29uc3QgcmljZSA9IGNyZWF0ZURpc2goXHJcbiAgICBcIlBhbmRhIHJpY2VcIixcclxuICAgIFwiQmlnIHBvcnRpb24gZm9yIFBhbmRhcyBvdXQgdGhlcmUhXCIsXHJcbiAgICBcImh0dHBzOi8vd3d3LmFkdmFudG91ci5jb20vaW1nL2NoaW5hL2Zvb2Qvc2NhbGxvcHMuanBnXCJcclxuICApO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmljZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGxvYWRNZW51IH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tIFwiLi9Ib21lUGFnZS5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gXCIuL01lbnUuanNcIjtcclxuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tIFwiLi9Db250YWN0LmpzXCI7XHJcblxyXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBjb25zb2xlLmxvZyhjb250ZW50KTtcclxuICBjb250ZW50LmlubmVyVGV4dCA9IFwiXCI7XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XHJcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjbGVhckNvbnRlbnQoKTtcclxuICBsb2FkQ29udGFjdCgpO1xyXG59KTtcclxuXHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XHJcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjbGVhckNvbnRlbnQoKTtcclxuICBsb2FkTWVudSgpO1xyXG59KTtcclxuXHJcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XHJcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjbGVhckNvbnRlbnQoKTtcclxuICBsb2FkSG9tZSgpO1xyXG59KTtcclxuXHJcbmxvYWRIb21lKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==