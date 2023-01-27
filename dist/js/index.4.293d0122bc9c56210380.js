"use strict";
(self["webpackChunkamdesigned"] = self["webpackChunkamdesigned"] || []).push([["index.4"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2luZGV4LjQuMjkzZDAxMjJiYzljNTYyMTAzODAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FtZGVzaWduZWQvLi9zcmMvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY2xvc2VNZW51T25Fc2MgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlclwiKTtcclxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuICAgICAgICBoYW1idXJnZXIgPT09IG51bGwgfHwgaGFtYnVyZ2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICAgICAgbmF2ID09PSBudWxsIHx8IG5hdiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZU1lbnVPbkVzYyk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlclwiKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG4gICAgaGFtYnVyZ2VyID09PSBudWxsIHx8IGhhbWJ1cmdlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgbmF2ID09PSBudWxsIHx8IG5hdiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgY29uc3QgaXNPcGVuID0gbmF2ID09PSBudWxsIHx8IG5hdiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2LmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIik7XHJcbiAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlTWVudU9uRXNjKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZU1lbnVPbkVzYyk7XHJcbiAgICB9XHJcbn07XHJcbndpbmRvdy50b2dnbGVNZW51ID0gdG9nZ2xlTWVudTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9