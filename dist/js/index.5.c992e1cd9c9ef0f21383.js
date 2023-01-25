"use strict";
(self["webpackChunkpug_n_ts"] = self["webpackChunkpug_n_ts"] || []).push([["index.5"],{

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const closeMenuOnEsc = (event) => {
    if (event.key === "Escape") {
        const hamburger = document.getElementById("hamburger");
        const nav = document.getElementById("nav");
        hamburger === null || hamburger === void 0 ? void 0 : hamburger.classList.remove("open");
        nav === null || nav === void 0 ? void 0 : nav.classList.remove("open");
        window.removeEventListener("keydown", closeMenuOnEsc);
    }
};
const toggleMenu = () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    hamburger === null || hamburger === void 0 ? void 0 : hamburger.classList.toggle("open");
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle("open");
    const isOpen = nav === null || nav === void 0 ? void 0 : nav.classList.contains("open");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2luZGV4LjUuYzk5MmUxY2Q5YzllZjBmMjEzODMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B1Zy1uLXRzLy4vc3JjL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNsb3NlTWVudU9uRXNjID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW1idXJnZXJcIik7XHJcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbiAgICAgICAgaGFtYnVyZ2VyID09PSBudWxsIHx8IGhhbWJ1cmdlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgIG5hdiA9PT0gbnVsbCB8fCBuYXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNZW51T25Fc2MpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW1idXJnZXJcIik7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuICAgIGhhbWJ1cmdlciA9PT0gbnVsbCB8fCBoYW1idXJnZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIG5hdiA9PT0gbnVsbCB8fCBuYXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIGNvbnN0IGlzT3BlbiA9IG5hdiA9PT0gbnVsbCB8fCBuYXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpO1xyXG4gICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZU1lbnVPbkVzYyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNZW51T25Fc2MpO1xyXG4gICAgfVxyXG59O1xyXG53aW5kb3cudG9nZ2xlTWVudSA9IHRvZ2dsZU1lbnU7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==