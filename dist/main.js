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


(0,_pages_header__WEBPACK_IMPORTED_MODULE_0__.initializeWebsite)();


/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAbout": () => (/* binding */ loadAbout)
/* harmony export */ });
/* harmony import */ var _assets_imgs_chef1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/imgs/chef1.jpeg */ "./src/assets/imgs/chef1.jpeg");
/* harmony import */ var _assets_imgs_chef2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/chef2.jpg */ "./src/assets/imgs/chef2.jpg");
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/about.css */ "./src/styles/about.css");




let aboutSection;

const createAbout = () => {
  aboutSection = document.createElement("div");
  const content = document.querySelector("#content");

  aboutSection.classList.add("about-section");
  content.append(aboutSection);
  addPeople("Louis Nevada", _assets_imgs_chef1_jpeg__WEBPACK_IMPORTED_MODULE_0__, "Head Chef");
  addPeople("Gene Morrison", _assets_imgs_chef2_jpg__WEBPACK_IMPORTED_MODULE_1__, "Chief of Culinary Experiences");
  return aboutSection;
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

function loadAbout() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createAbout());
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
  const content = document.getElementById("content");
  const footer = document.createElement("footer");
  const copyright = document.createElement("span");
  const name = document.createElement("a");
  name.textContent = "Hayden Kress";
  name.setAttribute("href", "https://github.com/haydenkress");
  name.style.textDecoration = "none";
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
/* harmony export */   "initializeWebsite": () => (/* binding */ initializeWebsite)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/pages/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/pages/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/pages/about.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/pages/footer.js");
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/header.css */ "./src/styles/header.css");






const createHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");

  const logo = document.createElement("div");
  logo.textContent = "La Trattoria";
  logo.classList.add("logo");

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");

  const home = document.createElement("a");
  home.classList.add("nav-btn");
  home.classList.add("home-btn");
  home.textContent = "Home";
  const menu = document.createElement("a");
  menu.classList.add("nav-btn");
  menu.classList.add("menu-btn");
  menu.textContent = "Menu";
  const about = document.createElement("a");
  about.classList.add("nav-btn");
  about.classList.add("about-btn");
  about.textContent = "About";
  const items = [home, menu, about];

  items.forEach((item) => {
    tabs.append(item);
  });

  header.append(logo);
  header.append(tabs);

  home.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setActiveButton(home);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();
  });

  menu.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menu);
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
  });

  about.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setActiveButton(about);
    (0,_about__WEBPACK_IMPORTED_MODULE_2__.loadAbout)();
  });

  return header;
};

function createMain() {
  const main = document.createElement("main");
  main.setAttribute("id", "main");
  return main;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".nav-btn");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  (0,_footer__WEBPACK_IMPORTED_MODULE_3__.createFooter)();

  setActiveButton(document.querySelector(".home-btn"));

  (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();
}




/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/home.css */ "./src/styles/home.css");


const createHome = () => {
  const reservationBtn = document.createElement("button");
  const homeSection = document.createElement("div");
  const heading = document.createElement("div");
  const content = document.querySelector("#content");

  homeSection.classList.add("home-section");

  heading.classList.add("heading");
  heading.textContent = "Bring Italy to Your Table";
  homeSection.append(heading);
  content.append(homeSection);

  reservationBtn.classList.add("reservation");
  reservationBtn.textContent = "Book a Reservation";
  homeSection.append(reservationBtn);
  return homeSection;
};

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}




/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/menu.css */ "./src/styles/menu.css");
/* harmony import */ var _assets_imgs_penne_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/penne.jpg */ "./src/assets/imgs/penne.jpg");
/* harmony import */ var _assets_imgs_amatriciana_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/imgs/amatriciana.jpg */ "./src/assets/imgs/amatriciana.jpg");
/* harmony import */ var _assets_imgs_breadsticks_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/imgs/breadsticks.jpeg */ "./src/assets/imgs/breadsticks.jpeg");
/* harmony import */ var _assets_imgs_woodoven_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/imgs/woodoven-pizza.jpg */ "./src/assets/imgs/woodoven-pizza.jpg");






let menuSection;

const createMenu = () => {
  menuSection = document.createElement("div");
  const content = document.querySelector("#content");

  menuSection.classList.add("menu");
  content.append(menuSection);
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
  return menuSection;
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
  menuSection.append(itemElement);
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}




/***/ }),

/***/ "./src/assets/imgs/amatriciana.jpg":
/*!*****************************************!*\
  !*** ./src/assets/imgs/amatriciana.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "026443850558a565f6cc.jpg";

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

/***/ "./src/assets/imgs/chef2.jpg":
/*!***********************************!*\
  !*** ./src/assets/imgs/chef2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "444a88ebbec226c30973.jpg";

/***/ }),

/***/ "./src/assets/imgs/penne.jpg":
/*!***********************************!*\
  !*** ./src/assets/imgs/penne.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "330e3ff2635c43ee7e4b.jpg";

/***/ }),

/***/ "./src/assets/imgs/woodoven-pizza.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/woodoven-pizza.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39ebb13bd819a35bab39.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQW1EOztBQUVuRCxnRUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YrQjtBQUNEO0FBQ2xCOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixvREFBTztBQUNuQyw2QkFBNkIsbURBQU87QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRFM7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJVO0FBQ0E7QUFDRTtBQUNJO0FBQ1Y7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVM7QUFDYixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUscURBQVk7O0FBRWQ7O0FBRUEsRUFBRSwrQ0FBUTtBQUNWOztBQUU2Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGRDs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCUTtBQUNpQjtBQUNZO0FBQ0M7QUFDSTs7QUFFOUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2Fib3V0LmNzcz82NGVjIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvZm9vdGVyLmNzcz9hNDFlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzcz8xZmQ4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvaG9tZS5jc3M/OTY1OSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21lbnUuY3NzPzhmOTIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZVdlYnNpdGUgfSBmcm9tIFwiLi9wYWdlcy9oZWFkZXJcIjtcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTtcbiIsImltcG9ydCBDaGVmT25lIGZyb20gXCIuLi9hc3NldHMvaW1ncy9jaGVmMS5qcGVnXCI7XG5pbXBvcnQgQ2hlZlR3byBmcm9tIFwiLi4vYXNzZXRzL2ltZ3MvY2hlZjIuanBnXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvYWJvdXQuY3NzXCI7XG5cbmxldCBhYm91dFNlY3Rpb247XG5cbmNvbnN0IGNyZWF0ZUFib3V0ID0gKCkgPT4ge1xuICBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGFib3V0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtc2VjdGlvblwiKTtcbiAgY29udGVudC5hcHBlbmQoYWJvdXRTZWN0aW9uKTtcbiAgYWRkUGVvcGxlKFwiTG91aXMgTmV2YWRhXCIsIENoZWZPbmUsIFwiSGVhZCBDaGVmXCIpO1xuICBhZGRQZW9wbGUoXCJHZW5lIE1vcnJpc29uXCIsIENoZWZUd28sIFwiQ2hpZWYgb2YgQ3VsaW5hcnkgRXhwZXJpZW5jZXNcIik7XG4gIHJldHVybiBhYm91dFNlY3Rpb247XG59O1xuXG5mdW5jdGlvbiBhZGRQZW9wbGUobmFtZSwgaW1hZ2UsIHBvc2l0aW9uKSB7XG4gIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCBcIi1cIik7XG4gIGNvbnN0IGl0ZW1FbGVtZW50cyA9IHt9O1xuICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQobG93ZXJDYXNlTmFtZSk7XG4gIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwZXJzb25cIik7XG5cbiAgY29uc3QgcGVyc29uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgcGVyc29uSW1hZ2UuY2xhc3NMaXN0LmFkZChcInBlcnNvbi1pbWFnZVwiKTtcbiAgcGVyc29uSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gIGl0ZW1FbGVtZW50LmFwcGVuZChwZXJzb25JbWFnZSk7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHQuY2xhc3NMaXN0LmFkZChcInBlcnNvbi1zZWN0aW9uXCIpO1xuICBjb25zdCBwZXJzb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGVyc29uTmFtZS5jbGFzc0xpc3QuYWRkKFwicGVyc29uLW5hbWVcIik7XG4gIHBlcnNvbk5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBjb25zdCBQZXJzb25Qb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFBlcnNvblBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoXCJwZXJzb24tcG9zaXRpb25cIik7XG4gIFBlcnNvblBvc2l0aW9uLnRleHRDb250ZW50ID0gcG9zaXRpb247XG4gIHRleHQuYXBwZW5kKHBlcnNvbk5hbWUpO1xuICB0ZXh0LmFwcGVuZChQZXJzb25Qb3NpdGlvbik7XG4gIGl0ZW1FbGVtZW50LmFwcGVuZCh0ZXh0KTtcblxuICBpdGVtRWxlbWVudHNbbG93ZXJDYXNlTmFtZV0gPSBpdGVtRWxlbWVudDtcbiAgYWJvdXRTZWN0aW9uLmFwcGVuZChpdGVtRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXQoKSk7XG59XG5cbmV4cG9ydCB7IGxvYWRBYm91dCB9O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2Zvb3Rlci5jc3NcIjtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBuYW1lLnRleHRDb250ZW50ID0gXCJIYXlkZW4gS3Jlc3NcIjtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL2hheWRlbmtyZXNzXCIpO1xuICBuYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGAyMDIyIMKpIGA7XG5cbiAgZm9vdGVyLmFwcGVuZChjb3B5cmlnaHQpO1xuICBmb290ZXIuYXBwZW5kKG5hbWUpO1xuICBjb250ZW50LmFwcGVuZChmb290ZXIpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlRm9vdGVyIH07XG4iLCJpbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgbG9hZEFib3V0IH0gZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2hlYWRlci5jc3NcIjtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiTGEgVHJhdHRvcmlhXCI7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG5cbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYnMuY2xhc3NMaXN0LmFkZChcInRhYnNcIik7XG5cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lLWJ0blwiKTtcbiAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1idG5cIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpO1xuICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtYnRuXCIpO1xuICBhYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgY29uc3QgaXRlbXMgPSBbaG9tZSwgbWVudSwgYWJvdXRdO1xuXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICB0YWJzLmFwcGVuZChpdGVtKTtcbiAgfSk7XG5cbiAgaGVhZGVyLmFwcGVuZChsb2dvKTtcbiAgaGVhZGVyLmFwcGVuZCh0YWJzKTtcblxuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oaG9tZSk7XG4gICAgbG9hZEhvbWUoKTtcbiAgfSk7XG5cbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKG1lbnUpO1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuXG4gIGFib3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oYWJvdXQpO1xuICAgIGxvYWRBYm91dCgpO1xuICB9KTtcblxuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWJ0blwiKTtcblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNyZWF0ZUZvb3RlcigpO1xuXG4gIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtYnRuXCIpKTtcblxuICBsb2FkSG9tZSgpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplV2Vic2l0ZSB9O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2hvbWUuY3NzXCI7XG5cbmNvbnN0IGNyZWF0ZUhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHJlc2VydmF0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBob21lU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1zZWN0aW9uXCIpO1xuXG4gIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkJyaW5nIEl0YWx5IHRvIFlvdXIgVGFibGVcIjtcbiAgaG9tZVNlY3Rpb24uYXBwZW5kKGhlYWRpbmcpO1xuICBjb250ZW50LmFwcGVuZChob21lU2VjdGlvbik7XG5cbiAgcmVzZXJ2YXRpb25CdG4uY2xhc3NMaXN0LmFkZChcInJlc2VydmF0aW9uXCIpO1xuICByZXNlcnZhdGlvbkJ0bi50ZXh0Q29udGVudCA9IFwiQm9vayBhIFJlc2VydmF0aW9uXCI7XG4gIGhvbWVTZWN0aW9uLmFwcGVuZChyZXNlcnZhdGlvbkJ0bik7XG4gIHJldHVybiBob21lU2VjdGlvbjtcbn07XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuXG5leHBvcnQgeyBsb2FkSG9tZSB9O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL21lbnUuY3NzXCI7XG5pbXBvcnQgUGVubmUgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL3Blbm5lLmpwZ1wiO1xuaW1wb3J0IEFtYXRyaWNpYW5hIGZyb20gXCIuLi9hc3NldHMvaW1ncy9hbWF0cmljaWFuYS5qcGdcIjtcbmltcG9ydCBCcmVhZHN0aWNrcyBmcm9tIFwiLi4vYXNzZXRzL2ltZ3MvYnJlYWRzdGlja3MuanBlZ1wiO1xuaW1wb3J0IFdvb2RPdmVuUGl6emEgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL3dvb2RvdmVuLXBpenphLmpwZ1wiO1xuXG5sZXQgbWVudVNlY3Rpb247XG5cbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gIG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgY29udGVudC5hcHBlbmQobWVudVNlY3Rpb24pO1xuICBhZGRNZW51SXRlbShcbiAgICBcIlBlbm5lIEFycmFiaWF0YVwiLFxuICAgIFBlbm5lLFxuICAgIFwiT3VyIHZlcnNpb24gb2YgdGhpcyBjbGFzc2ljIGRpc2ggYmVnaW5zIHdpdGggYWwgZGVudGUgcGVubmUgcGFzdGEgdGhlbiB0b3NzZWQgd2l0aCBhIGRlbGljaW91cyBzYXVjZSBtYWRlIGZyb20gU2FuIE1hcnphbm8gdG9tYXRvZXMsIGdhcmxpYywgYW5kIHJlZCBwZXBwZXIgZmxha2VzIGZvciBhIHNwaWN5IGtpY2suXCJcbiAgKTtcbiAgYWRkTWVudUl0ZW0oXG4gICAgXCJXb29kIG92ZW4gUGl6emFcIixcbiAgICBXb29kT3ZlblBpenphLFxuICAgIFwiT3VyIHBpenphIHN0YXJ0cyB3aXRoIGEgaGFuZC1zdHJldGNoZWQgZG91Z2ggdGhhdCdzIHRvcHBlZCB3aXRoIGEgcmljaCB0b21hdG8gc2F1Y2UsIG1venphcmVsbGEgY2hlZXNlLCBzcGljeSBJdGFsaWFuIHNhdXNhZ2UsIHJlZCBvbmlvbiwgYW5kIGZyZXNoIGJhc2lsIGxlYXZlcy5cIlxuICApO1xuICBhZGRNZW51SXRlbShcbiAgICBcIlBhc3RhIEFtYXRyaWNpYW5hXCIsXG4gICAgQW1hdHJpY2lhbmEsXG4gICAgXCJXZSBzdGFydCB3aXRoIGFsIGRlbnRlIHBhc3RhLCBjb29rZWQgdG8gcGVyZmVjdGlvbiwgYW5kIHRvc3MgaXQgd2l0aCBhIGZsYXZvcmZ1bCBzYXVjZSBtYWRlIHdpdGggU2FuIE1hcnphbm8gdG9tYXRvZXMsIHNtb2t5IHBhbmNldHRhLCBhbmQgc2F1dMOpZWQgb25pb25zLlwiXG4gICk7XG4gIGFkZE1lbnVJdGVtKFxuICAgIFwiQnJlYWRzdGlja3NcIixcbiAgICBCcmVhZHN0aWNrcyxcbiAgICBcIk1hZGUgd2l0aCB0aGUgZmluZXN0IGluZ3JlZGllbnRzLCBvdXIgYnJlYWRzdGlja3MgYXJlIGJha2VkIHRvIHBlcmZlY3Rpb24sIHJlc3VsdGluZyBpbiBhIGNyaXNweSBhbmQgZ29sZGVuIGV4dGVyaW9yIHdpdGggYSB3YXJtLCBmbHVmZnkgaW50ZXJpb3IuIFwiXG4gICk7XG4gIHJldHVybiBtZW51U2VjdGlvbjtcbn07XG5cbmZ1bmN0aW9uIGFkZE1lbnVJdGVtKHRpdGxlLCBpbWFnZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgaXRlbSA9IHRpdGxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCBcIi1cIik7XG4gIGNvbnN0IGl0ZW1FbGVtZW50cyA9IHt9O1xuICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoaXRlbSk7XG4gIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cbiAgY29uc3QgZm9vZEltYWdlID0gbmV3IEltYWdlKCk7XG4gIGZvb2RJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWFnZVwiKTtcbiAgZm9vZEltYWdlLnNyYyA9IGltYWdlO1xuICBpdGVtRWxlbWVudC5hcHBlbmQoZm9vZEltYWdlKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dGJveFwiKTtcbiAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXRpdGxlXCIpO1xuICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kZXNjcmlwdGlvblwiKTtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgdGV4dC5hcHBlbmQoaXRlbVRpdGxlKTtcbiAgdGV4dC5hcHBlbmQoYWJvdXQpO1xuICBpdGVtRWxlbWVudC5hcHBlbmQodGV4dCk7XG5cbiAgaXRlbUVsZW1lbnRzW2l0ZW1dID0gaXRlbUVsZW1lbnQ7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZChpdGVtRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgeyBsb2FkTWVudSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9