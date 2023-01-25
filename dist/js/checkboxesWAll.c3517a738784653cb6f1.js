"use strict";
(self["webpackChunkpug_n_ts"] = self["webpackChunkpug_n_ts"] || []).push([["checkboxesWAll"],{

/***/ "./src/components/checkbox/checkboxesWAll.ts":
/*!***************************************************!*\
  !*** ./src/components/checkbox/checkboxesWAll.ts ***!
  \***************************************************/
/***/ (() => {


const allCheckbox = document.querySelector("input[type=checkbox]#all_checkboxes");
if (allCheckbox) {
    const choicesCheckboxes = document.querySelectorAll("input[type=checkbox]:not(#all_checkboxes)");
    const toggleAll = (allCheckbox) => {
        choicesCheckboxes.forEach((btn) => {
            btn.checked = allCheckbox.checked;
        });
    };
    allCheckbox.onchange = () => toggleAll(allCheckbox);
    for (let checkbox of choicesCheckboxes) {
        checkbox.onchange = () => {
            const unchecked = [...choicesCheckboxes].find((box) => box.checked === false);
            unchecked ? (allCheckbox.checked = false) : (allCheckbox.checked = true);
        };
    }
}
else
    console.error('"All" checkbox option is missing');


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/checkbox/checkboxesWAll.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2NoZWNrYm94ZXNXQWxsLmMzNTE3YTczODc4NDY1M2NiNmYxLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWctbi10cy8uL3NyYy9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94ZXNXQWxsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5jb25zdCBhbGxDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPWNoZWNrYm94XSNhbGxfY2hlY2tib3hlc1wiKTtcclxuaWYgKGFsbENoZWNrYm94KSB7XHJcbiAgICBjb25zdCBjaG9pY2VzQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoI2FsbF9jaGVja2JveGVzKVwiKTtcclxuICAgIGNvbnN0IHRvZ2dsZUFsbCA9IChhbGxDaGVja2JveCkgPT4ge1xyXG4gICAgICAgIGNob2ljZXNDaGVja2JveGVzLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgICAgICBidG4uY2hlY2tlZCA9IGFsbENoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgYWxsQ2hlY2tib3gub25jaGFuZ2UgPSAoKSA9PiB0b2dnbGVBbGwoYWxsQ2hlY2tib3gpO1xyXG4gICAgZm9yIChsZXQgY2hlY2tib3ggb2YgY2hvaWNlc0NoZWNrYm94ZXMpIHtcclxuICAgICAgICBjaGVja2JveC5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdW5jaGVja2VkID0gWy4uLmNob2ljZXNDaGVja2JveGVzXS5maW5kKChib3gpID0+IGJveC5jaGVja2VkID09PSBmYWxzZSk7XHJcbiAgICAgICAgICAgIHVuY2hlY2tlZCA/IChhbGxDaGVja2JveC5jaGVja2VkID0gZmFsc2UpIDogKGFsbENoZWNrYm94LmNoZWNrZWQgPSB0cnVlKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmVsc2VcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1wiQWxsXCIgY2hlY2tib3ggb3B0aW9uIGlzIG1pc3NpbmcnKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9