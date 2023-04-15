"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./src/styles/footer.css":
/*!*******************************!*\
  !*** ./src/styles/footer.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/header.css":
/*!*******************************!*\
  !*** ./src/styles/header.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/header */ "./src/pages/header.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/footer */ "./src/pages/footer.js");





(0,_pages_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
(0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)();
(0,_pages_footer__WEBPACK_IMPORTED_MODULE_3__.createFooter)();


/***/ }),

/***/ "./src/pages/footer.js":
/*!*****************************!*\
  !*** ./src/pages/footer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/footer.css */ "./src/styles/footer.css");


function createFooter() {
  const footer = document.createElement("footer");
  const copyright = document.createElement("span");
  const name = document.createElement("a");
  name.textContent = "Hayden Kress";
  copyright.textContent = `2022 © `;

  footer.append(copyright);
  footer.append(name);
  content.append(footer);
}




/***/ }),

/***/ "./src/pages/header.js":
/*!*****************************!*\
  !*** ./src/pages/header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/header.css */ "./src/styles/header.css");


function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");
  const content = document.querySelector("#content");

  const logo = document.createElement("div");
  logo.textContent = "La Trattoria";
  logo.classList.add("logo");

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");

  const home = document.createElement("a");
  home.textContent = "Home";
  const menu = document.createElement("a");
  menu.textContent = "Menu";
  const about = document.createElement("a");
  about.textContent = "About";
  const items = [home, menu, about];

  items.forEach((item) => {
    tabs.append(item);
  });

  header.append(logo);
  header.append(tabs);
  content.append(header);
}




/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/home.css */ "./src/styles/home.css");


function createHome() {
  const content = document.querySelector("#content");
  const hero = document.createElement("div");
  hero.classList.add("hero");
  const heading = document.createElement("div");
  heading.classList.add("heading");
  heading.textContent = "Bring Italy to Your Table";
  hero.append(heading);
  content.append(hero);

  const reservationBtn = document.createElement("button");
  reservationBtn.classList.add("reservation");
  reservationBtn.textContent = "Book a Reservation";
  hero.append(reservationBtn);
}




/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/menu.css */ "./src/styles/menu.css");
/* harmony import */ var _assets_imgs_penne_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/penne.jpg */ "./src/assets/imgs/penne.jpg");
/* harmony import */ var _assets_imgs_amatriciana_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/imgs/amatriciana.jpg */ "./src/assets/imgs/amatriciana.jpg");
/* harmony import */ var _assets_imgs_breadsticks_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/imgs/breadsticks.jpeg */ "./src/assets/imgs/breadsticks.jpeg");
/* harmony import */ var _assets_imgs_woodoven_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/imgs/woodoven-pizza.jpg */ "./src/assets/imgs/woodoven-pizza.jpg");






const menu = document.createElement("div");

function createMenu() {
  const content = document.querySelector("#content");
  menu.classList.add("menu");
  content.append(menu);
  addMenuItem(
    "Penne Arrabiata",
    _assets_imgs_penne_jpg__WEBPACK_IMPORTED_MODULE_1__,
    "Our version of this classic dish begins with al dente penne pasta cooked to perfection and then tossed with a delicious sauce made from San Marzano tomatoes, garlic, and red pepper flakes for a spicy kick."
  );
  addMenuItem(
    "Wood oven Pizza",
    _assets_imgs_woodoven_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__,
    "Our version of this classic dish begins with al dente penne pasta cooked to perfection and then tossed with a delicious sauce made from San Marzano tomatoes, garlic, and red pepper flakes for a spicy kick."
  );
  addMenuItem(
    "Pasta Amatriciana",
    _assets_imgs_amatriciana_jpg__WEBPACK_IMPORTED_MODULE_2__,
    "Our version of this classic dish begins with al dente penne pasta cooked to perfection and then tossed with a delicious sauce made from San Marzano tomatoes, garlic, and red pepper flakes for a spicy kick."
  );
  addMenuItem(
    "Breadsticks",
    _assets_imgs_breadsticks_jpeg__WEBPACK_IMPORTED_MODULE_3__,
    "Made with the finest ingredients, our breadsticks are baked to perfection, resulting in a crispy and golden exterior with a warm fluffy interior. These delightful breadsticks are brushed with a savory garlic butter and lightly sprinkled with Parmesan cheese adding an extra layer of flavor and aroma."
  );
}

function addMenuItem(title, image, description) {
  const item = title.toLowerCase().replace(/\s+/g, "-");
  const itemElements = {};
  const itemElement = document.createElement("div");
  itemElement.classList.add(item);
  itemElement.classList.add("menu-item");

  const foodImage = new Image();
  foodImage.classList.add("food-image");
  foodImage.src = image;
  itemElement.append(foodImage);

  const text = document.createElement("div");
  text.classList.add("textbox");
  const itemTitle = document.createElement("div");
  itemTitle.classList.add("item-title");
  itemTitle.textContent = title;
  const about = document.createElement("div");
  about.classList.add("item-description");
  about.textContent = description;
  text.append(itemTitle);
  text.append(about);
  itemElement.append(text);

  itemElements[item] = itemElement;
  menu.append(itemElement);
}




/***/ }),

/***/ "./src/assets/imgs/amatriciana.jpg":
/*!*****************************************!*\
  !*** ./src/assets/imgs/amatriciana.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a760cb440c69b637b035.jpg";

/***/ }),

/***/ "./src/assets/imgs/breadsticks.jpeg":
/*!******************************************!*\
  !*** ./src/assets/imgs/breadsticks.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39f28d23f3976f84b9ae.jpeg";

/***/ }),

/***/ "./src/assets/imgs/penne.jpg":
/*!***********************************!*\
  !*** ./src/assets/imgs/penne.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fab99686db7a242236e.jpg";

/***/ }),

/***/ "./src/assets/imgs/woodoven-pizza.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/woodoven-pizza.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb586710978de4f8ef40.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEM7QUFDSjtBQUNhO0FBQ1Q7O0FBRTlDLDJEQUFZO0FBQ1osdURBQVU7QUFDViwyREFBWTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BrQjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUV3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2RNOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkk7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQk07QUFDaUI7QUFDWTtBQUNDO0FBQ0k7O0FBRTlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFXO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2Zvb3Rlci5jc3M/YTQxZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2hlYWRlci5jc3M/MWZkOCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2hvbWUuY3NzPzk2NTkiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9tZW51LmNzcz84ZjkyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vcGFnZXMvaGVhZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xuaW1wb3J0IHsgYWRkTWVudUl0ZW0sIGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9wYWdlcy9tZW51XCI7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tIFwiLi9wYWdlcy9mb290ZXJcIjtcblxuY3JlYXRlSGVhZGVyKCk7XG5jcmVhdGVNZW51KCk7XG5jcmVhdGVGb290ZXIoKTtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9mb290ZXIuY3NzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IFwiSGF5ZGVuIEtyZXNzXCI7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGAyMDIyIMKpIGA7XG5cbiAgZm9vdGVyLmFwcGVuZChjb3B5cmlnaHQpO1xuICBmb290ZXIuYXBwZW5kKG5hbWUpO1xuICBjb250ZW50LmFwcGVuZChmb290ZXIpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb290ZXIgfTtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9oZWFkZXIuY3NzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIkxhIFRyYXR0b3JpYVwiO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuXG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJzLmNsYXNzTGlzdC5hZGQoXCJ0YWJzXCIpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gIGNvbnN0IGl0ZW1zID0gW2hvbWUsIG1lbnUsIGFib3V0XTtcblxuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgdGFicy5hcHBlbmQoaXRlbSk7XG4gIH0pO1xuXG4gIGhlYWRlci5hcHBlbmQobG9nbyk7XG4gIGhlYWRlci5hcHBlbmQodGFicyk7XG4gIGNvbnRlbnQuYXBwZW5kKGhlYWRlcik7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhlYWRlciB9O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2hvbWUuY3NzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQnJpbmcgSXRhbHkgdG8gWW91ciBUYWJsZVwiO1xuICBoZXJvLmFwcGVuZChoZWFkaW5nKTtcbiAgY29udGVudC5hcHBlbmQoaGVybyk7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByZXNlcnZhdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKFwicmVzZXJ2YXRpb25cIik7XG4gIHJlc2VydmF0aW9uQnRuLnRleHRDb250ZW50ID0gXCJCb29rIGEgUmVzZXJ2YXRpb25cIjtcbiAgaGVyby5hcHBlbmQocmVzZXJ2YXRpb25CdG4pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVIb21lIH07XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvbWVudS5jc3NcIjtcbmltcG9ydCBQZW5uZSBmcm9tIFwiLi4vYXNzZXRzL2ltZ3MvcGVubmUuanBnXCI7XG5pbXBvcnQgQW1hdHJpY2lhbmEgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL2FtYXRyaWNpYW5hLmpwZ1wiO1xuaW1wb3J0IEJyZWFkc3RpY2tzIGZyb20gXCIuLi9hc3NldHMvaW1ncy9icmVhZHN0aWNrcy5qcGVnXCI7XG5pbXBvcnQgV29vZE92ZW5QaXp6YSBmcm9tIFwiLi4vYXNzZXRzL2ltZ3Mvd29vZG92ZW4tcGl6emEuanBnXCI7XG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBjb250ZW50LmFwcGVuZChtZW51KTtcbiAgYWRkTWVudUl0ZW0oXG4gICAgXCJQZW5uZSBBcnJhYmlhdGFcIixcbiAgICBQZW5uZSxcbiAgICBcIk91ciB2ZXJzaW9uIG9mIHRoaXMgY2xhc3NpYyBkaXNoIGJlZ2lucyB3aXRoIGFsIGRlbnRlIHBlbm5lIHBhc3RhIGNvb2tlZCB0byBwZXJmZWN0aW9uIGFuZCB0aGVuIHRvc3NlZCB3aXRoIGEgZGVsaWNpb3VzIHNhdWNlIG1hZGUgZnJvbSBTYW4gTWFyemFubyB0b21hdG9lcywgZ2FybGljLCBhbmQgcmVkIHBlcHBlciBmbGFrZXMgZm9yIGEgc3BpY3kga2ljay5cIlxuICApO1xuICBhZGRNZW51SXRlbShcbiAgICBcIldvb2Qgb3ZlbiBQaXp6YVwiLFxuICAgIFdvb2RPdmVuUGl6emEsXG4gICAgXCJPdXIgdmVyc2lvbiBvZiB0aGlzIGNsYXNzaWMgZGlzaCBiZWdpbnMgd2l0aCBhbCBkZW50ZSBwZW5uZSBwYXN0YSBjb29rZWQgdG8gcGVyZmVjdGlvbiBhbmQgdGhlbiB0b3NzZWQgd2l0aCBhIGRlbGljaW91cyBzYXVjZSBtYWRlIGZyb20gU2FuIE1hcnphbm8gdG9tYXRvZXMsIGdhcmxpYywgYW5kIHJlZCBwZXBwZXIgZmxha2VzIGZvciBhIHNwaWN5IGtpY2suXCJcbiAgKTtcbiAgYWRkTWVudUl0ZW0oXG4gICAgXCJQYXN0YSBBbWF0cmljaWFuYVwiLFxuICAgIEFtYXRyaWNpYW5hLFxuICAgIFwiT3VyIHZlcnNpb24gb2YgdGhpcyBjbGFzc2ljIGRpc2ggYmVnaW5zIHdpdGggYWwgZGVudGUgcGVubmUgcGFzdGEgY29va2VkIHRvIHBlcmZlY3Rpb24gYW5kIHRoZW4gdG9zc2VkIHdpdGggYSBkZWxpY2lvdXMgc2F1Y2UgbWFkZSBmcm9tIFNhbiBNYXJ6YW5vIHRvbWF0b2VzLCBnYXJsaWMsIGFuZCByZWQgcGVwcGVyIGZsYWtlcyBmb3IgYSBzcGljeSBraWNrLlwiXG4gICk7XG4gIGFkZE1lbnVJdGVtKFxuICAgIFwiQnJlYWRzdGlja3NcIixcbiAgICBCcmVhZHN0aWNrcyxcbiAgICBcIk1hZGUgd2l0aCB0aGUgZmluZXN0IGluZ3JlZGllbnRzLCBvdXIgYnJlYWRzdGlja3MgYXJlIGJha2VkIHRvIHBlcmZlY3Rpb24sIHJlc3VsdGluZyBpbiBhIGNyaXNweSBhbmQgZ29sZGVuIGV4dGVyaW9yIHdpdGggYSB3YXJtIGZsdWZmeSBpbnRlcmlvci4gVGhlc2UgZGVsaWdodGZ1bCBicmVhZHN0aWNrcyBhcmUgYnJ1c2hlZCB3aXRoIGEgc2F2b3J5IGdhcmxpYyBidXR0ZXIgYW5kIGxpZ2h0bHkgc3ByaW5rbGVkIHdpdGggUGFybWVzYW4gY2hlZXNlIGFkZGluZyBhbiBleHRyYSBsYXllciBvZiBmbGF2b3IgYW5kIGFyb21hLlwiXG4gICk7XG59XG5cbmZ1bmN0aW9uIGFkZE1lbnVJdGVtKHRpdGxlLCBpbWFnZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgaXRlbSA9IHRpdGxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCBcIi1cIik7XG4gIGNvbnN0IGl0ZW1FbGVtZW50cyA9IHt9O1xuICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoaXRlbSk7XG4gIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cbiAgY29uc3QgZm9vZEltYWdlID0gbmV3IEltYWdlKCk7XG4gIGZvb2RJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWFnZVwiKTtcbiAgZm9vZEltYWdlLnNyYyA9IGltYWdlO1xuICBpdGVtRWxlbWVudC5hcHBlbmQoZm9vZEltYWdlKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dGJveFwiKTtcbiAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXRpdGxlXCIpO1xuICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kZXNjcmlwdGlvblwiKTtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgdGV4dC5hcHBlbmQoaXRlbVRpdGxlKTtcbiAgdGV4dC5hcHBlbmQoYWJvdXQpO1xuICBpdGVtRWxlbWVudC5hcHBlbmQodGV4dCk7XG5cbiAgaXRlbUVsZW1lbnRzW2l0ZW1dID0gaXRlbUVsZW1lbnQ7XG4gIG1lbnUuYXBwZW5kKGl0ZW1FbGVtZW50KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9