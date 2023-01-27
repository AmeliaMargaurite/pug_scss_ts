"use strict";
(self["webpackChunkamdesigned"] = self["webpackChunkamdesigned"] || []).push([["contact_form"],{

/***/ "./src/components/contact_form/contact_form.ts":
/*!*****************************************************!*\
  !*** ./src/components/contact_form/contact_form.ts ***!
  \*****************************************************/
/***/ (() => {


const queryString = window.location.search;
const params = new URLSearchParams(queryString);
// Check if user selected a website package
const websitePackage = params.get("package");
if (websitePackage) {
    const subjectEl = document.querySelector("input#subject");
    if (subjectEl) {
        subjectEl.value = websitePackage;
    }
    // Check if type param has come through too
    const packageType = params.get("type");
    const hiddenTypeInput = document.querySelector("input#package-type");
    if (hiddenTypeInput && packageType) {
        hiddenTypeInput.value = packageType;
    }
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2NvbnRhY3RfZm9ybS4wMDY3MDk3ZmVkYWMzZThkODBhMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSTtBQUM5QztBQUNBLDZDQUE2QyxLQUFLO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FtZGVzaWduZWQvLi9zcmMvY29tcG9uZW50cy9jb250YWN0X2Zvcm0vY29udGFjdF9mb3JtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5jb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbmNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xyXG4vLyBDaGVjayBpZiB1c2VyIHNlbGVjdGVkIGEgd2Vic2l0ZSBwYWNrYWdlXHJcbmNvbnN0IHdlYnNpdGVQYWNrYWdlID0gcGFyYW1zLmdldChcInBhY2thZ2VcIik7XHJcbmlmICh3ZWJzaXRlUGFja2FnZSkge1xyXG4gICAgY29uc3Qgc3ViamVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3N1YmplY3RcIik7XHJcbiAgICBpZiAoc3ViamVjdEVsKSB7XHJcbiAgICAgICAgc3ViamVjdEVsLnZhbHVlID0gd2Vic2l0ZVBhY2thZ2U7XHJcbiAgICB9XHJcbiAgICAvLyBDaGVjayBpZiB0eXBlIHBhcmFtIGhhcyBjb21lIHRocm91Z2ggdG9vXHJcbiAgICBjb25zdCBwYWNrYWdlVHlwZSA9IHBhcmFtcy5nZXQoXCJ0eXBlXCIpO1xyXG4gICAgY29uc3QgaGlkZGVuVHlwZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3BhY2thZ2UtdHlwZVwiKTtcclxuICAgIGlmIChoaWRkZW5UeXBlSW5wdXQgJiYgcGFja2FnZVR5cGUpIHtcclxuICAgICAgICBoaWRkZW5UeXBlSW5wdXQudmFsdWUgPSBwYWNrYWdlVHlwZTtcclxuICAgIH1cclxufVxyXG5mb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBwYXJhbXMuZW50cmllcygpKSB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2tleX1gKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtrZXl9IH4gcC53YXJuaW5nYCk7XHJcbiAgICAgICAgaWYgKHApIHtcclxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=