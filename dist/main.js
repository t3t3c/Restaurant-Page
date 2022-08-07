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
    "Portion bigger than yo mama",
    "https://bakeitwithlove.com/wp-content/uploads/2020/01/HIbachi-Noodles-lg-sq.jpg"
  );
  content.appendChild(noodles);

  const rice = createDish(
    "Giga rice",
    "Fresh like mint",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7O0FDbEJWO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0I7Ozs7Ozs7Ozs7Ozs7OztBQ3pCcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQjs7Ozs7OztVQ3RDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0o7QUFDTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQVc7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFRO0FBQ1YsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBUTtBQUNWLENBQUM7QUFDRDtBQUNBLHNEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9NZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBuZXdEaXYuaW5uZXJUZXh0ID0gXCJEb24ndCBjYWxsLCBqdXN0IHZpc2l0IVwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcclxuXHJcbiAgY29uc3QgbmV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG5ld0ltYWdlLnNldEF0dHJpYnV0ZShcclxuICAgIFwic3JjXCIsXHJcbiAgICBcImh0dHBzOi8vaW1nLTlnYWctZnVuLjljYWNoZS5jb20vcGhvdG8vYW5nMWR4TF83MDBid3Aud2VicFwiXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhuZXdJbWFnZSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XHJcblxyXG4gIGNvbnN0IG5ld1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBuZXdQLmlubmVyVGV4dCA9IFwiTWVldCBvdXIgY2hlZiBpbiBwZXJzb24hXCI7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdQKTtcclxufVxyXG5leHBvcnQgeyBsb2FkQ29udGFjdCB9O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIGNvbnN0IERPTWNvbnRlbnQgPSAoKCkgPT4ge1xyXG4vLyAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbi8vICAgY29uc3QgYWRkRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xyXG4vLyAgIH07XHJcbi8vIH0pKCk7XHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBuZXdEaXYuaW5uZXJUZXh0ID0gXCJUaGlzIGlzIHRoZSBiZXN0IHJlc3RhdXJhbnQhXCI7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdEaXYpO1xyXG5cclxuICBjb25zdCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbmV3SW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vc3JjL2ltZy9sb2dvLnBuZ1wiKTtcclxuICBjb25zb2xlLmxvZyhuZXdJbWFnZSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XHJcblxyXG4gIGNvbnN0IG5ld1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIG5ld1BhcmFncmFwaC5pbm5lclRleHQgPSBcIldvYWggd2hhdCBhbiBhbWF6aW5nIHRhc3RlIVwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3UGFyYWdyYXBoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgbG9hZEhvbWUgfTtcclxuIiwiZnVuY3Rpb24gbG9hZE1lbnUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlRGlzaChuYW1lLCBkZXNjcmlwdGlvbiwgaW1hZ2VTb3VyY2UpIHtcclxuICAgIGNvbnN0IG5ld0Rpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3RGlzaC5jbGFzc05hbWUgPSBcImRpc2hcIjtcclxuXHJcbiAgICBjb25zdCBkaXNoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGlzaE5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcclxuXHJcbiAgICBjb25zdCBkaXNoRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRpc2hEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBkaXNoSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZGlzaEltYWdlLnNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgIG5ld0Rpc2guYXBwZW5kQ2hpbGQoZGlzaE5hbWUpO1xyXG4gICAgbmV3RGlzaC5hcHBlbmRDaGlsZChkaXNoSW1hZ2UpO1xyXG4gICAgbmV3RGlzaC5hcHBlbmRDaGlsZChkaXNoRGVzY3JpcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBuZXdEaXNoO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgbm9vZGxlcyA9IGNyZWF0ZURpc2goXHJcbiAgICBcIkhpYmFjaGkgTm9vZGxlc1wiLFxyXG4gICAgXCJQb3J0aW9uIGJpZ2dlciB0aGFuIHlvIG1hbWFcIixcclxuICAgIFwiaHR0cHM6Ly9iYWtlaXR3aXRobG92ZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDEvSEliYWNoaS1Ob29kbGVzLWxnLXNxLmpwZ1wiXHJcbiAgKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG5vb2RsZXMpO1xyXG5cclxuICBjb25zdCByaWNlID0gY3JlYXRlRGlzaChcclxuICAgIFwiR2lnYSByaWNlXCIsXHJcbiAgICBcIkZyZXNoIGxpa2UgbWludFwiLFxyXG4gICAgXCJodHRwczovL3d3dy5hZHZhbnRvdXIuY29tL2ltZy9jaGluYS9mb29kL3NjYWxsb3BzLmpwZ1wiXHJcbiAgKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHJpY2UpO1xyXG59XHJcblxyXG5leHBvcnQgeyBsb2FkTWVudSB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSBcIi4vSG9tZVBhZ2UuanNcIjtcclxuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9NZW51LmpzXCI7XHJcbmltcG9ydCB7IGxvYWRDb250YWN0IH0gZnJvbSBcIi4vQ29udGFjdC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29uc29sZS5sb2coY29udGVudCk7XHJcbiAgY29udGVudC5pbm5lclRleHQgPSBcIlwiO1xyXG59XHJcblxyXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xyXG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJDb250ZW50KCk7XHJcbiAgbG9hZENvbnRhY3QoKTtcclxufSk7XHJcblxyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJDb250ZW50KCk7XHJcbiAgbG9hZE1lbnUoKTtcclxufSk7XHJcblxyXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xyXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJDb250ZW50KCk7XHJcbiAgbG9hZEhvbWUoKTtcclxufSk7XHJcblxyXG5sb2FkSG9tZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=