"use strict";
(self["webpackChunkpug_n_ts"] = self["webpackChunkpug_n_ts"] || []).push([["gallery.1"],{

/***/ "./src/components/gallery/gallery.ts":
/*!*******************************************!*\
  !*** ./src/components/gallery/gallery.ts ***!
  \*******************************************/
/***/ (() => {


window.onload = () => {
    const wrappers = document.getElementsByClassName("img__wrapper");
    const openZoom = (event, wrapper) => {
        const img = wrapper.querySelector("picture img");
        if (img) {
            const zoomImage = document.createElement("img");
            zoomImage.src = img === null || img === void 0 ? void 0 : img.src;
            const zoomWrapper = document.createElement("zoom-wrapper");
            zoomWrapper.appendChild(zoomImage);
            document.body.appendChild(zoomWrapper);
        }
    };
    if (wrappers.length > 0) {
        for (let wrapper of wrappers) {
            wrapper.addEventListener("click", (e) => openZoom(e, wrapper));
        }
    }
};
class ZoomWrapper extends HTMLElement {
    constructor() {
        super();
    }
    closeZoom() {
        document.body.style.removeProperty("overflow");
        this.remove();
    }
    connectedCallback() {
        document.body.style.overflow = "hidden";
        this.onclick = () => this.closeZoom();
    }
}
customElements.define("zoom-wrapper", ZoomWrapper);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/gallery/gallery.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2dhbGxlcnkuMS40ZjU3ODQyMjA0MGE2Y2MzYWUwNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWctbi10cy8uL3NyYy9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImltZ19fd3JhcHBlclwiKTtcclxuICAgIGNvbnN0IG9wZW5ab29tID0gKGV2ZW50LCB3cmFwcGVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1nID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKFwicGljdHVyZSBpbWdcIik7XHJcbiAgICAgICAgaWYgKGltZykge1xyXG4gICAgICAgICAgICBjb25zdCB6b29tSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICB6b29tSW1hZ2Uuc3JjID0gaW1nID09PSBudWxsIHx8IGltZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW1nLnNyYztcclxuICAgICAgICAgICAgY29uc3Qgem9vbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiem9vbS13cmFwcGVyXCIpO1xyXG4gICAgICAgICAgICB6b29tV3JhcHBlci5hcHBlbmRDaGlsZCh6b29tSW1hZ2UpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHpvb21XcmFwcGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKHdyYXBwZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCB3cmFwcGVyIG9mIHdyYXBwZXJzKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBvcGVuWm9vbShlLCB3cmFwcGVyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5jbGFzcyBab29tV3JhcHBlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBjbG9zZVpvb20oKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICB0aGlzLm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNsb3NlWm9vbSgpO1xyXG4gICAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInpvb20td3JhcHBlclwiLCBab29tV3JhcHBlcik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==