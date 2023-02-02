"use strict";
(self["webpackChunkamdesigned"] = self["webpackChunkamdesigned"] || []).push([["contact_form"],{

/***/ "./src/components/contact_form/contact_form.ts":
/*!*****************************************************!*\
  !*** ./src/components/contact_form/contact_form.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const packageTypes = {
    low: ["design", "build"],
    mid: ["design", "build", "seo-accessibility", "analytics"],
    high: [
        "design",
        "build",
        "hosting",
        "domain-purchase",
        "seo-accessibility",
        "analytics",
        "maintenance",
    ],
};
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
    if (packageType === "low" ||
        packageType === "mid" ||
        packageType === "high") {
        if (hiddenTypeInput) {
            hiddenTypeInput.value = packageType;
            // check checkboxes associated with type
            const services = packageTypes[packageType];
            services.forEach((service) => {
                console.log(service);
                const checkbox = document.querySelector(`input[type=checkbox]#${service}`);
                console.log(checkbox);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
    }
}
for (const [key, value] of params.entries()) {
    const el = document.querySelector(`#${key}`);
    if (el) {
        el.classList.add("warning");
        const p = document.querySelector(`#${key} ~ p.warning`);
        if (p) {
            p.innerHTML = value;
            p.classList.add("active");
        }
    }
}
// Manually add input patterns
const patterns = {
    string: ".[-_'A-Za-zÀ-ÖØ-öø-ÿ\\s]+",
    email: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
};
const stringInputs = document.querySelectorAll("input[pattern=string]");
stringInputs.forEach((input) => input.setAttribute("pattern", patterns.string));
const emailInputs = document.querySelectorAll("input[pattern=email]");
emailInputs.forEach((input) => input.setAttribute("pattern", patterns.email));
const validateCheckboxes = () => {
    const checkboxes = document.querySelectorAll("input[name^=services]");
    const checkboxesArray = Array.from(checkboxes);
    const notCheckedBoxes = checkboxesArray.filter((box) => !box.checked);
    if (notCheckedBoxes.length === checkboxesArray.length) {
        notCheckedBoxes.forEach((box) => (box.required = true));
        return false;
    }
    else {
        notCheckedBoxes.forEach((box) => (box.required = false));
        return true;
    }
};
window.validateCheckboxes = validateCheckboxes;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/contact_form/contact_form.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2NvbnRhY3RfZm9ybS5lNzRjNjM3ZTJiMjYyNTJlOTEyMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRixRQUFRO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLElBQUk7QUFDOUM7QUFDQTtBQUNBLDZDQUE2QyxLQUFLO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxHQUFHO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW1kZXNpZ25lZC8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3RfZm9ybS9jb250YWN0X2Zvcm0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcGFja2FnZVR5cGVzID0ge1xyXG4gICAgbG93OiBbXCJkZXNpZ25cIiwgXCJidWlsZFwiXSxcclxuICAgIG1pZDogW1wiZGVzaWduXCIsIFwiYnVpbGRcIiwgXCJzZW8tYWNjZXNzaWJpbGl0eVwiLCBcImFuYWx5dGljc1wiXSxcclxuICAgIGhpZ2g6IFtcclxuICAgICAgICBcImRlc2lnblwiLFxyXG4gICAgICAgIFwiYnVpbGRcIixcclxuICAgICAgICBcImhvc3RpbmdcIixcclxuICAgICAgICBcImRvbWFpbi1wdXJjaGFzZVwiLFxyXG4gICAgICAgIFwic2VvLWFjY2Vzc2liaWxpdHlcIixcclxuICAgICAgICBcImFuYWx5dGljc1wiLFxyXG4gICAgICAgIFwibWFpbnRlbmFuY2VcIixcclxuICAgIF0sXHJcbn07XHJcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbi8vIENoZWNrIGlmIHVzZXIgc2VsZWN0ZWQgYSB3ZWJzaXRlIHBhY2thZ2VcclxuY29uc3Qgd2Vic2l0ZVBhY2thZ2UgPSBwYXJhbXMuZ2V0KFwicGFja2FnZVwiKTtcclxuaWYgKHdlYnNpdGVQYWNrYWdlKSB7XHJcbiAgICBjb25zdCBzdWJqZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjc3ViamVjdFwiKTtcclxuICAgIGlmIChzdWJqZWN0RWwpIHtcclxuICAgICAgICBzdWJqZWN0RWwudmFsdWUgPSB3ZWJzaXRlUGFja2FnZTtcclxuICAgIH1cclxuICAgIC8vIENoZWNrIGlmIHR5cGUgcGFyYW0gaGFzIGNvbWUgdGhyb3VnaCB0b29cclxuICAgIGNvbnN0IHBhY2thZ2VUeXBlID0gcGFyYW1zLmdldChcInR5cGVcIik7XHJcbiAgICBjb25zdCBoaWRkZW5UeXBlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjcGFja2FnZS10eXBlXCIpO1xyXG4gICAgaWYgKHBhY2thZ2VUeXBlID09PSBcImxvd1wiIHx8XHJcbiAgICAgICAgcGFja2FnZVR5cGUgPT09IFwibWlkXCIgfHxcclxuICAgICAgICBwYWNrYWdlVHlwZSA9PT0gXCJoaWdoXCIpIHtcclxuICAgICAgICBpZiAoaGlkZGVuVHlwZUlucHV0KSB7XHJcbiAgICAgICAgICAgIGhpZGRlblR5cGVJbnB1dC52YWx1ZSA9IHBhY2thZ2VUeXBlO1xyXG4gICAgICAgICAgICAvLyBjaGVjayBjaGVja2JveGVzIGFzc29jaWF0ZWQgd2l0aCB0eXBlXHJcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VzID0gcGFja2FnZVR5cGVzW3BhY2thZ2VUeXBlXTtcclxuICAgICAgICAgICAgc2VydmljZXMuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VydmljZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9Y2hlY2tib3hdIyR7c2VydmljZX1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrYm94KTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2JveCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgcGFyYW1zLmVudHJpZXMoKSkge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtrZXl9YCk7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwid2FybmluZ1wiKTtcclxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7a2V5fSB+IHAud2FybmluZ2ApO1xyXG4gICAgICAgIGlmIChwKSB7XHJcbiAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gTWFudWFsbHkgYWRkIGlucHV0IHBhdHRlcm5zXHJcbmNvbnN0IHBhdHRlcm5zID0ge1xyXG4gICAgc3RyaW5nOiBcIi5bLV8nQS1aYS16w4Atw5bDmC3DtsO4LcO/XFxcXHNdK1wiLFxyXG4gICAgZW1haWw6IFwiW2EtekEtWjAtOS5fJSstXStAW2EtekEtWjAtOS4tXStcXFxcLlthLXpBLVpdezIsfSRcIixcclxufTtcclxuY29uc3Qgc3RyaW5nSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3BhdHRlcm49c3RyaW5nXVwiKTtcclxuc3RyaW5nSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwYXR0ZXJuXCIsIHBhdHRlcm5zLnN0cmluZykpO1xyXG5jb25zdCBlbWFpbElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtwYXR0ZXJuPWVtYWlsXVwiKTtcclxuZW1haWxJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IGlucHV0LnNldEF0dHJpYnV0ZShcInBhdHRlcm5cIiwgcGF0dGVybnMuZW1haWwpKTtcclxuY29uc3QgdmFsaWRhdGVDaGVja2JveGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lXj1zZXJ2aWNlc11cIik7XHJcbiAgICBjb25zdCBjaGVja2JveGVzQXJyYXkgPSBBcnJheS5mcm9tKGNoZWNrYm94ZXMpO1xyXG4gICAgY29uc3Qgbm90Q2hlY2tlZEJveGVzID0gY2hlY2tib3hlc0FycmF5LmZpbHRlcigoYm94KSA9PiAhYm94LmNoZWNrZWQpO1xyXG4gICAgaWYgKG5vdENoZWNrZWRCb3hlcy5sZW5ndGggPT09IGNoZWNrYm94ZXNBcnJheS5sZW5ndGgpIHtcclxuICAgICAgICBub3RDaGVja2VkQm94ZXMuZm9yRWFjaCgoYm94KSA9PiAoYm94LnJlcXVpcmVkID0gdHJ1ZSkpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5vdENoZWNrZWRCb3hlcy5mb3JFYWNoKChib3gpID0+IChib3gucmVxdWlyZWQgPSBmYWxzZSkpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59O1xyXG53aW5kb3cudmFsaWRhdGVDaGVja2JveGVzID0gdmFsaWRhdGVDaGVja2JveGVzO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=