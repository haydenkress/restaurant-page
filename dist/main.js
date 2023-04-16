"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./src/styles/about.css":
/*!******************************!*\
  !*** ./src/styles/about.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about.js");
/* harmony import */ var _pages_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/footer */ "./src/pages/footer.js");






function firstLoad() {
  (0,_pages_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
  (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__.createHome)();
  (0,_pages_footer__WEBPACK_IMPORTED_MODULE_4__.createFooter)();
}
firstLoad();
removeSection();

const home = document.querySelector(".home-btn");
const menu = document.querySelector(".menu-btn");
const about = document.querySelector(".about-btn");

function removeSection() {
  const content = document.querySelector("#content");
  const secondChild = content.children[1];
  content.removeChild(secondChild);
}


/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAbout": () => (/* binding */ createAbout)
/* harmony export */ });
/* harmony import */ var _assets_imgs_chef1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/imgs/chef1.jpeg */ "./src/assets/imgs/chef1.jpeg");
/* harmony import */ var _assets_imgs_chef2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/chef2.jpeg */ "./src/assets/imgs/chef2.jpeg");
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/about.css */ "./src/styles/about.css");




const aboutSection = document.createElement("div");

const createAbout = () => {
  const content = document.querySelector("#content");
  aboutSection.classList.add("about-section");
  content.append(aboutSection);
  addPeople("Louis Nevada", _assets_imgs_chef1_jpeg__WEBPACK_IMPORTED_MODULE_0__, "Head Chef");
  addPeople("Gene Morrison", _assets_imgs_chef2_jpeg__WEBPACK_IMPORTED_MODULE_1__, "Chief of Culinary Experiences");
};

function addPeople(name, image, position) {
  const lowerCaseName = name.toLowerCase().replace(/\s+/g, "-");
  const itemElements = {};
  const itemElement = document.createElement("div");
  itemElement.classList.add(lowerCaseName);
  itemElement.classList.add("person");

  const personImage = new Image();
  personImage.classList.add("person-image");
  personImage.src = image;
  itemElement.append(personImage);

  const text = document.createElement("div");
  text.classList.add("person-section");
  const personName = document.createElement("div");
  personName.classList.add("person-name");
  personName.textContent = name;
  const PersonPosition = document.createElement("div");
  PersonPosition.classList.add("person-position");
  PersonPosition.textContent = position;
  text.append(personName);
  text.append(PersonPosition);
  itemElement.append(text);

  itemElements[lowerCaseName] = itemElement;
  aboutSection.append(itemElement);
}




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


const createFooter = () => {
  const footer = document.createElement("footer");
  const copyright = document.createElement("span");
  const name = document.createElement("a");
  name.textContent = "Hayden Kress";
  copyright.textContent = `2022 © `;

  footer.append(copyright);
  footer.append(name);
  content.append(footer);
};




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


const createHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");
  const content = document.querySelector("#content");

  const logo = document.createElement("div");
  logo.textContent = "La Trattoria";
  logo.classList.add("logo");

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");

  const home = document.createElement("a");
  home.classList.add("home-btn");
  home.textContent = "Home";
  const menu = document.createElement("a");
  menu.classList.add("menu-btn");
  menu.textContent = "Menu";
  const about = document.createElement("a");
  about.classList.add("about-btn");
  about.textContent = "About";
  const items = [home, menu, about];

  items.forEach((item) => {
    tabs.append(item);
  });

  header.append(logo);
  header.append(tabs);
  content.append(header);
};




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


const createHome = () => {
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
};




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

const createMenu = () => {
  const content = document.querySelector("#content");
  menu.classList.add("menu");
  content.append(menu);
  addMenuItem(
    "Penne Arrabiata",
    _assets_imgs_penne_jpg__WEBPACK_IMPORTED_MODULE_1__,
    "Our version of this classic dish begins with al dente penne pasta then tossed with a delicious sauce made from San Marzano tomatoes, garlic, and red pepper flakes for a spicy kick."
  );
  addMenuItem(
    "Wood oven Pizza",
    _assets_imgs_woodoven_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__,
    "Our pizza starts with a hand-stretched dough that's topped with a rich tomato sauce, mozzarella cheese, spicy Italian sausage, red onion, and fresh basil leaves."
  );
  addMenuItem(
    "Pasta Amatriciana",
    _assets_imgs_amatriciana_jpg__WEBPACK_IMPORTED_MODULE_2__,
    "We start with al dente pasta, cooked to perfection, and toss it with a flavorful sauce made with San Marzano tomatoes, smoky pancetta, and sautéed onions."
  );
  addMenuItem(
    "Breadsticks",
    _assets_imgs_breadsticks_jpeg__WEBPACK_IMPORTED_MODULE_3__,
    "Made with the finest ingredients, our breadsticks are baked to perfection, resulting in a crispy and golden exterior with a warm, fluffy interior. "
  );
};

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

/***/ "./src/assets/imgs/chef1.jpeg":
/*!************************************!*\
  !*** ./src/assets/imgs/chef1.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28e292dd1bf47a6cb369.jpeg";

/***/ }),

/***/ "./src/assets/imgs/chef2.jpeg":
/*!************************************!*\
  !*** ./src/assets/imgs/chef2.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4bdf64f0cee95216ab1.jpeg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QztBQUNKO0FBQ0E7QUFDRTtBQUNFOztBQUU5QztBQUNBLEVBQUUsMkRBQVk7QUFDZCxFQUFFLHVEQUFVO0FBQ1osRUFBRSwyREFBWTtBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJnRDtBQUNBO0FBQ25COztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvREFBTztBQUNuQyw2QkFBNkIsb0RBQU87QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7OztBQzFDTzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUV3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2RNOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0k7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQk07QUFDaUI7QUFDWTtBQUNDO0FBQ0k7O0FBRTlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFXO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2Fib3V0LmNzcz82NGVjIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvZm9vdGVyLmNzcz9hNDFlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzcz8xZmQ4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvaG9tZS5jc3M/OTY1OSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21lbnUuY3NzPzhmOTIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vcGFnZXMvaGVhZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSBcIi4vcGFnZXMvaG9tZVwiO1xuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gXCIuL3BhZ2VzL21lbnVcIjtcbmltcG9ydCB7IGNyZWF0ZUFib3V0IH0gZnJvbSBcIi4vcGFnZXMvYWJvdXRcIjtcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gXCIuL3BhZ2VzL2Zvb3RlclwiO1xuXG5mdW5jdGlvbiBmaXJzdExvYWQoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjcmVhdGVIb21lKCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xufVxuZmlyc3RMb2FkKCk7XG5yZW1vdmVTZWN0aW9uKCk7XG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtYnRuXCIpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXQtYnRuXCIpO1xuXG5mdW5jdGlvbiByZW1vdmVTZWN0aW9uKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBzZWNvbmRDaGlsZCA9IGNvbnRlbnQuY2hpbGRyZW5bMV07XG4gIGNvbnRlbnQucmVtb3ZlQ2hpbGQoc2Vjb25kQ2hpbGQpO1xufVxuIiwiaW1wb3J0IENoZWZPbmUgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL2NoZWYxLmpwZWdcIjtcbmltcG9ydCBDaGVmVHdvIGZyb20gXCIuLi9hc3NldHMvaW1ncy9jaGVmMi5qcGVnXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvYWJvdXQuY3NzXCI7XG5cbmNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IGNyZWF0ZUFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFib3V0LXNlY3Rpb25cIik7XG4gIGNvbnRlbnQuYXBwZW5kKGFib3V0U2VjdGlvbik7XG4gIGFkZFBlb3BsZShcIkxvdWlzIE5ldmFkYVwiLCBDaGVmT25lLCBcIkhlYWQgQ2hlZlwiKTtcbiAgYWRkUGVvcGxlKFwiR2VuZSBNb3JyaXNvblwiLCBDaGVmVHdvLCBcIkNoaWVmIG9mIEN1bGluYXJ5IEV4cGVyaWVuY2VzXCIpO1xufTtcblxuZnVuY3Rpb24gYWRkUGVvcGxlKG5hbWUsIGltYWdlLCBwb3NpdGlvbikge1xuICBjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgXCItXCIpO1xuICBjb25zdCBpdGVtRWxlbWVudHMgPSB7fTtcbiAgY29uc3QgaXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvd2VyQ2FzZU5hbWUpO1xuICBpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicGVyc29uXCIpO1xuXG4gIGNvbnN0IHBlcnNvbkltYWdlID0gbmV3IEltYWdlKCk7XG4gIHBlcnNvbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJwZXJzb24taW1hZ2VcIik7XG4gIHBlcnNvbkltYWdlLnNyYyA9IGltYWdlO1xuICBpdGVtRWxlbWVudC5hcHBlbmQocGVyc29uSW1hZ2UpO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJwZXJzb24tc2VjdGlvblwiKTtcbiAgY29uc3QgcGVyc29uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBlcnNvbk5hbWUuY2xhc3NMaXN0LmFkZChcInBlcnNvbi1uYW1lXCIpO1xuICBwZXJzb25OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgY29uc3QgUGVyc29uUG9zaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBQZXJzb25Qb3NpdGlvbi5jbGFzc0xpc3QuYWRkKFwicGVyc29uLXBvc2l0aW9uXCIpO1xuICBQZXJzb25Qb3NpdGlvbi50ZXh0Q29udGVudCA9IHBvc2l0aW9uO1xuICB0ZXh0LmFwcGVuZChwZXJzb25OYW1lKTtcbiAgdGV4dC5hcHBlbmQoUGVyc29uUG9zaXRpb24pO1xuICBpdGVtRWxlbWVudC5hcHBlbmQodGV4dCk7XG5cbiAgaXRlbUVsZW1lbnRzW2xvd2VyQ2FzZU5hbWVdID0gaXRlbUVsZW1lbnQ7XG4gIGFib3V0U2VjdGlvbi5hcHBlbmQoaXRlbUVsZW1lbnQpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVBYm91dCB9O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2Zvb3Rlci5jc3NcIjtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBuYW1lLnRleHRDb250ZW50ID0gXCJIYXlkZW4gS3Jlc3NcIjtcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYDIwMjIgwqkgYDtcblxuICBmb290ZXIuYXBwZW5kKGNvcHlyaWdodCk7XG4gIGZvb3Rlci5hcHBlbmQobmFtZSk7XG4gIGNvbnRlbnQuYXBwZW5kKGZvb3Rlcik7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVGb290ZXIgfTtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9oZWFkZXIuY3NzXCI7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIkxhIFRyYXR0b3JpYVwiO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuXG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJzLmNsYXNzTGlzdC5hZGQoXCJ0YWJzXCIpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idG5cIik7XG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtYnRuXCIpO1xuICBhYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgY29uc3QgaXRlbXMgPSBbaG9tZSwgbWVudSwgYWJvdXRdO1xuXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICB0YWJzLmFwcGVuZChpdGVtKTtcbiAgfSk7XG5cbiAgaGVhZGVyLmFwcGVuZChsb2dvKTtcbiAgaGVhZGVyLmFwcGVuZCh0YWJzKTtcbiAgY29udGVudC5hcHBlbmQoaGVhZGVyKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUhlYWRlciB9O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2hvbWUuY3NzXCI7XG5cbmNvbnN0IGNyZWF0ZUhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQnJpbmcgSXRhbHkgdG8gWW91ciBUYWJsZVwiO1xuICBoZXJvLmFwcGVuZChoZWFkaW5nKTtcbiAgY29udGVudC5hcHBlbmQoaGVybyk7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByZXNlcnZhdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKFwicmVzZXJ2YXRpb25cIik7XG4gIHJlc2VydmF0aW9uQnRuLnRleHRDb250ZW50ID0gXCJCb29rIGEgUmVzZXJ2YXRpb25cIjtcbiAgaGVyby5hcHBlbmQocmVzZXJ2YXRpb25CdG4pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlSG9tZSB9O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL21lbnUuY3NzXCI7XG5pbXBvcnQgUGVubmUgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL3Blbm5lLmpwZ1wiO1xuaW1wb3J0IEFtYXRyaWNpYW5hIGZyb20gXCIuLi9hc3NldHMvaW1ncy9hbWF0cmljaWFuYS5qcGdcIjtcbmltcG9ydCBCcmVhZHN0aWNrcyBmcm9tIFwiLi4vYXNzZXRzL2ltZ3MvYnJlYWRzdGlja3MuanBlZ1wiO1xuaW1wb3J0IFdvb2RPdmVuUGl6emEgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL3dvb2RvdmVuLXBpenphLmpwZ1wiO1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgY29udGVudC5hcHBlbmQobWVudSk7XG4gIGFkZE1lbnVJdGVtKFxuICAgIFwiUGVubmUgQXJyYWJpYXRhXCIsXG4gICAgUGVubmUsXG4gICAgXCJPdXIgdmVyc2lvbiBvZiB0aGlzIGNsYXNzaWMgZGlzaCBiZWdpbnMgd2l0aCBhbCBkZW50ZSBwZW5uZSBwYXN0YSB0aGVuIHRvc3NlZCB3aXRoIGEgZGVsaWNpb3VzIHNhdWNlIG1hZGUgZnJvbSBTYW4gTWFyemFubyB0b21hdG9lcywgZ2FybGljLCBhbmQgcmVkIHBlcHBlciBmbGFrZXMgZm9yIGEgc3BpY3kga2ljay5cIlxuICApO1xuICBhZGRNZW51SXRlbShcbiAgICBcIldvb2Qgb3ZlbiBQaXp6YVwiLFxuICAgIFdvb2RPdmVuUGl6emEsXG4gICAgXCJPdXIgcGl6emEgc3RhcnRzIHdpdGggYSBoYW5kLXN0cmV0Y2hlZCBkb3VnaCB0aGF0J3MgdG9wcGVkIHdpdGggYSByaWNoIHRvbWF0byBzYXVjZSwgbW96emFyZWxsYSBjaGVlc2UsIHNwaWN5IEl0YWxpYW4gc2F1c2FnZSwgcmVkIG9uaW9uLCBhbmQgZnJlc2ggYmFzaWwgbGVhdmVzLlwiXG4gICk7XG4gIGFkZE1lbnVJdGVtKFxuICAgIFwiUGFzdGEgQW1hdHJpY2lhbmFcIixcbiAgICBBbWF0cmljaWFuYSxcbiAgICBcIldlIHN0YXJ0IHdpdGggYWwgZGVudGUgcGFzdGEsIGNvb2tlZCB0byBwZXJmZWN0aW9uLCBhbmQgdG9zcyBpdCB3aXRoIGEgZmxhdm9yZnVsIHNhdWNlIG1hZGUgd2l0aCBTYW4gTWFyemFubyB0b21hdG9lcywgc21va3kgcGFuY2V0dGEsIGFuZCBzYXV0w6llZCBvbmlvbnMuXCJcbiAgKTtcbiAgYWRkTWVudUl0ZW0oXG4gICAgXCJCcmVhZHN0aWNrc1wiLFxuICAgIEJyZWFkc3RpY2tzLFxuICAgIFwiTWFkZSB3aXRoIHRoZSBmaW5lc3QgaW5ncmVkaWVudHMsIG91ciBicmVhZHN0aWNrcyBhcmUgYmFrZWQgdG8gcGVyZmVjdGlvbiwgcmVzdWx0aW5nIGluIGEgY3Jpc3B5IGFuZCBnb2xkZW4gZXh0ZXJpb3Igd2l0aCBhIHdhcm0sIGZsdWZmeSBpbnRlcmlvci4gXCJcbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGFkZE1lbnVJdGVtKHRpdGxlLCBpbWFnZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgaXRlbSA9IHRpdGxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCBcIi1cIik7XG4gIGNvbnN0IGl0ZW1FbGVtZW50cyA9IHt9O1xuICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoaXRlbSk7XG4gIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cbiAgY29uc3QgZm9vZEltYWdlID0gbmV3IEltYWdlKCk7XG4gIGZvb2RJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWFnZVwiKTtcbiAgZm9vZEltYWdlLnNyYyA9IGltYWdlO1xuICBpdGVtRWxlbWVudC5hcHBlbmQoZm9vZEltYWdlKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dGJveFwiKTtcbiAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXRpdGxlXCIpO1xuICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kZXNjcmlwdGlvblwiKTtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgdGV4dC5hcHBlbmQoaXRlbVRpdGxlKTtcbiAgdGV4dC5hcHBlbmQoYWJvdXQpO1xuICBpdGVtRWxlbWVudC5hcHBlbmQodGV4dCk7XG5cbiAgaXRlbUVsZW1lbnRzW2l0ZW1dID0gaXRlbUVsZW1lbnQ7XG4gIG1lbnUuYXBwZW5kKGl0ZW1FbGVtZW50KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9