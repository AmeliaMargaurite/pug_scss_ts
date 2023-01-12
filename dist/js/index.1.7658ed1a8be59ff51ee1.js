"use strict";
(self["webpackChunkpug_n_ts"] = self["webpackChunkpug_n_ts"] || []).push([["index.1"],{

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var closeMenuOnEsc = function (event) {
    if (event.key === "Escape") {
        var hamburger = document.getElementById("hamburger");
        var nav = document.getElementById("nav");
        hamburger === null || hamburger === void 0 ? void 0 : hamburger.classList.remove("open");
        nav === null || nav === void 0 ? void 0 : nav.classList.remove("open");
        window.removeEventListener("keydown", closeMenuOnEsc);
    }
};
var toggleMenu = function () {
    var hamburger = document.getElementById("hamburger");
    var nav = document.getElementById("nav");
    hamburger === null || hamburger === void 0 ? void 0 : hamburger.classList.toggle("open");
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle("open");
    var isOpen = nav === null || nav === void 0 ? void 0 : nav.classList.contains("open");
    if (isOpen) {
        window.addEventListener("keydown", closeMenuOnEsc);
    }
    else {
        window.removeEventListener("keydown", closeMenuOnEsc);
    }
};
window.toggleMenu = toggleMenu;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ts/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2luZGV4LjEuNzY1OGVkMWE4YmU1OWZmNTFlZTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1Zy1uLXRzLy4vc3JjL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjbG9zZU1lbnVPbkVzYyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgIHZhciBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlclwiKTtcclxuICAgICAgICB2YXIgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbiAgICAgICAgaGFtYnVyZ2VyID09PSBudWxsIHx8IGhhbWJ1cmdlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgIG5hdiA9PT0gbnVsbCB8fCBuYXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNZW51T25Fc2MpO1xyXG4gICAgfVxyXG59O1xyXG52YXIgdG9nZ2xlTWVudSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlclwiKTtcclxuICAgIHZhciBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuICAgIGhhbWJ1cmdlciA9PT0gbnVsbCB8fCBoYW1idXJnZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIG5hdiA9PT0gbnVsbCB8fCBuYXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIHZhciBpc09wZW4gPSBuYXYgPT09IG51bGwgfHwgbmF2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKTtcclxuICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNZW51T25Fc2MpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlTWVudU9uRXNjKTtcclxuICAgIH1cclxufTtcclxud2luZG93LnRvZ2dsZU1lbnUgPSB0b2dnbGVNZW51O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=