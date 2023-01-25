"use strict";
(self["webpackChunkpug_n_ts"] = self["webpackChunkpug_n_ts"] || []).push([["contact_form"],{

/***/ "./src/components/contact_form/contact_form.ts":
/*!*****************************************************!*\
  !*** ./src/components/contact_form/contact_form.ts ***!
  \*****************************************************/
/***/ (() => {


const queryString = window.location.search;
const params = new URLSearchParams(queryString);
for (const [key, value] of params.entries()) {
    const el = document.querySelector(`#${key}`);
    if (el) {
        const p = document.querySelector(`#${key} ~ p.warning`);
        if (p) {
            p.innerHTML = value;
            p.classList.add("active");
        }
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/contact_form/contact_form.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2NvbnRhY3RfZm9ybS4xMWNiYmU5NmVmYjE1NjZkYjljOS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxJQUFJO0FBQzlDO0FBQ0EsNkNBQTZDLEtBQUs7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVnLW4tdHMvLi9zcmMvY29tcG9uZW50cy9jb250YWN0X2Zvcm0vY29udGFjdF9mb3JtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5jb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbmNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG5mb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBwYXJhbXMuZW50cmllcygpKSB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2tleX1gKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtrZXl9IH4gcC53YXJuaW5nYCk7XHJcbiAgICAgICAgaWYgKHApIHtcclxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=