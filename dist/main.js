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
/* harmony import */ var _assets_imgs_chef2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/chef2.jpeg */ "./src/assets/imgs/chef2.jpeg");
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/about.css */ "./src/styles/about.css");




let aboutSection;

const createAbout = () => {
  aboutSection = document.createElement("div");
  const content = document.querySelector("#content");

  aboutSection.classList.add("about-section");
  content.append(aboutSection);
  addPeople("Louis Nevada", _assets_imgs_chef1_jpeg__WEBPACK_IMPORTED_MODULE_0__, "Head Chef");
  addPeople("Gene Morrison", _assets_imgs_chef2_jpeg__WEBPACK_IMPORTED_MODULE_1__, "Chief of Culinary Experiences");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQW1EOztBQUVuRCxnRUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YrQjtBQUNBO0FBQ25COztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixvREFBTztBQUNuQyw2QkFBNkIsb0RBQU87QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRFM7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJVO0FBQ0E7QUFDRTtBQUNJO0FBQ1Y7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVM7QUFDYixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUscURBQVk7O0FBRWQ7O0FBRUEsRUFBRSwrQ0FBUTtBQUNWOztBQUU2Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGRDs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCUTtBQUNpQjtBQUNZO0FBQ0M7QUFDSTs7QUFFOUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2Fib3V0LmNzcz82NGVjIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvZm9vdGVyLmNzcz9hNDFlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvaGVhZGVyLmNzcz8xZmQ4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvaG9tZS5jc3M/OTY1OSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21lbnUuY3NzPzhmOTIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZVdlYnNpdGUgfSBmcm9tIFwiLi9wYWdlcy9oZWFkZXJcIjtcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTtcbiIsImltcG9ydCBDaGVmT25lIGZyb20gXCIuLi9hc3NldHMvaW1ncy9jaGVmMS5qcGVnXCI7XG5pbXBvcnQgQ2hlZlR3byBmcm9tIFwiLi4vYXNzZXRzL2ltZ3MvY2hlZjIuanBlZ1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2Fib3V0LmNzc1wiO1xuXG5sZXQgYWJvdXRTZWN0aW9uO1xuXG5jb25zdCBjcmVhdGVBYm91dCA9ICgpID0+IHtcbiAgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFib3V0LXNlY3Rpb25cIik7XG4gIGNvbnRlbnQuYXBwZW5kKGFib3V0U2VjdGlvbik7XG4gIGFkZFBlb3BsZShcIkxvdWlzIE5ldmFkYVwiLCBDaGVmT25lLCBcIkhlYWQgQ2hlZlwiKTtcbiAgYWRkUGVvcGxlKFwiR2VuZSBNb3JyaXNvblwiLCBDaGVmVHdvLCBcIkNoaWVmIG9mIEN1bGluYXJ5IEV4cGVyaWVuY2VzXCIpO1xuICByZXR1cm4gYWJvdXRTZWN0aW9uO1xufTtcblxuZnVuY3Rpb24gYWRkUGVvcGxlKG5hbWUsIGltYWdlLCBwb3NpdGlvbikge1xuICBjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgXCItXCIpO1xuICBjb25zdCBpdGVtRWxlbWVudHMgPSB7fTtcbiAgY29uc3QgaXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvd2VyQ2FzZU5hbWUpO1xuICBpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicGVyc29uXCIpO1xuXG4gIGNvbnN0IHBlcnNvbkltYWdlID0gbmV3IEltYWdlKCk7XG4gIHBlcnNvbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJwZXJzb24taW1hZ2VcIik7XG4gIHBlcnNvbkltYWdlLnNyYyA9IGltYWdlO1xuICBpdGVtRWxlbWVudC5hcHBlbmQocGVyc29uSW1hZ2UpO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJwZXJzb24tc2VjdGlvblwiKTtcbiAgY29uc3QgcGVyc29uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBlcnNvbk5hbWUuY2xhc3NMaXN0LmFkZChcInBlcnNvbi1uYW1lXCIpO1xuICBwZXJzb25OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgY29uc3QgUGVyc29uUG9zaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBQZXJzb25Qb3NpdGlvbi5jbGFzc0xpc3QuYWRkKFwicGVyc29uLXBvc2l0aW9uXCIpO1xuICBQZXJzb25Qb3NpdGlvbi50ZXh0Q29udGVudCA9IHBvc2l0aW9uO1xuICB0ZXh0LmFwcGVuZChwZXJzb25OYW1lKTtcbiAgdGV4dC5hcHBlbmQoUGVyc29uUG9zaXRpb24pO1xuICBpdGVtRWxlbWVudC5hcHBlbmQodGV4dCk7XG5cbiAgaXRlbUVsZW1lbnRzW2xvd2VyQ2FzZU5hbWVdID0gaXRlbUVsZW1lbnQ7XG4gIGFib3V0U2VjdGlvbi5hcHBlbmQoaXRlbUVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkQWJvdXQoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0KCkpO1xufVxuXG5leHBvcnQgeyBsb2FkQWJvdXQgfTtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9mb290ZXIuY3NzXCI7XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IFwiSGF5ZGVuIEtyZXNzXCI7XG4gIG5hbWUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9oYXlkZW5rcmVzc1wiKTtcbiAgbmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgMjAyMiDCqSBgO1xuXG4gIGZvb3Rlci5hcHBlbmQoY29weXJpZ2h0KTtcbiAgZm9vdGVyLmFwcGVuZChuYW1lKTtcbiAgY29udGVudC5hcHBlbmQoZm9vdGVyKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUZvb3RlciB9O1xuIiwiaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGxvYWRBYm91dCB9IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9oZWFkZXIuY3NzXCI7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIkxhIFRyYXR0b3JpYVwiO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuXG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJzLmNsYXNzTGlzdC5hZGQoXCJ0YWJzXCIpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idG5cIik7XG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0LWJ0blwiKTtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gIGNvbnN0IGl0ZW1zID0gW2hvbWUsIG1lbnUsIGFib3V0XTtcblxuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgdGFicy5hcHBlbmQoaXRlbSk7XG4gIH0pO1xuXG4gIGhlYWRlci5hcHBlbmQobG9nbyk7XG4gIGhlYWRlci5hcHBlbmQodGFicyk7XG5cbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKGhvbWUpO1xuICAgIGxvYWRIb21lKCk7XG4gIH0pO1xuXG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihtZW51KTtcbiAgICBsb2FkTWVudSgpO1xuICB9KTtcblxuICBhYm91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKGFib3V0KTtcbiAgICBsb2FkQWJvdXQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVCdXR0b24oYnV0dG9uKSB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1idG5cIik7XG5cbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjcmVhdGVGb290ZXIoKTtcblxuICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWJ0blwiKSk7XG5cbiAgbG9hZEhvbWUoKTtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbGl6ZVdlYnNpdGUgfTtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9ob21lLmNzc1wiO1xuXG5jb25zdCBjcmVhdGVIb21lID0gKCkgPT4ge1xuICBjb25zdCByZXNlcnZhdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgaG9tZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhvbWUtc2VjdGlvblwiKTtcblxuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJCcmluZyBJdGFseSB0byBZb3VyIFRhYmxlXCI7XG4gIGhvbWVTZWN0aW9uLmFwcGVuZChoZWFkaW5nKTtcbiAgY29udGVudC5hcHBlbmQoaG9tZVNlY3Rpb24pO1xuXG4gIHJlc2VydmF0aW9uQnRuLmNsYXNzTGlzdC5hZGQoXCJyZXNlcnZhdGlvblwiKTtcbiAgcmVzZXJ2YXRpb25CdG4udGV4dENvbnRlbnQgPSBcIkJvb2sgYSBSZXNlcnZhdGlvblwiO1xuICBob21lU2VjdGlvbi5hcHBlbmQocmVzZXJ2YXRpb25CdG4pO1xuICByZXR1cm4gaG9tZVNlY3Rpb247XG59O1xuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn1cblxuZXhwb3J0IHsgbG9hZEhvbWUgfTtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9tZW51LmNzc1wiO1xuaW1wb3J0IFBlbm5lIGZyb20gXCIuLi9hc3NldHMvaW1ncy9wZW5uZS5qcGdcIjtcbmltcG9ydCBBbWF0cmljaWFuYSBmcm9tIFwiLi4vYXNzZXRzL2ltZ3MvYW1hdHJpY2lhbmEuanBnXCI7XG5pbXBvcnQgQnJlYWRzdGlja3MgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL2JyZWFkc3RpY2tzLmpwZWdcIjtcbmltcG9ydCBXb29kT3ZlblBpenphIGZyb20gXCIuLi9hc3NldHMvaW1ncy93b29kb3Zlbi1waXp6YS5qcGdcIjtcblxubGV0IG1lbnVTZWN0aW9uO1xuXG5jb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIGNvbnRlbnQuYXBwZW5kKG1lbnVTZWN0aW9uKTtcbiAgYWRkTWVudUl0ZW0oXG4gICAgXCJQZW5uZSBBcnJhYmlhdGFcIixcbiAgICBQZW5uZSxcbiAgICBcIk91ciB2ZXJzaW9uIG9mIHRoaXMgY2xhc3NpYyBkaXNoIGJlZ2lucyB3aXRoIGFsIGRlbnRlIHBlbm5lIHBhc3RhIHRoZW4gdG9zc2VkIHdpdGggYSBkZWxpY2lvdXMgc2F1Y2UgbWFkZSBmcm9tIFNhbiBNYXJ6YW5vIHRvbWF0b2VzLCBnYXJsaWMsIGFuZCByZWQgcGVwcGVyIGZsYWtlcyBmb3IgYSBzcGljeSBraWNrLlwiXG4gICk7XG4gIGFkZE1lbnVJdGVtKFxuICAgIFwiV29vZCBvdmVuIFBpenphXCIsXG4gICAgV29vZE92ZW5QaXp6YSxcbiAgICBcIk91ciBwaXp6YSBzdGFydHMgd2l0aCBhIGhhbmQtc3RyZXRjaGVkIGRvdWdoIHRoYXQncyB0b3BwZWQgd2l0aCBhIHJpY2ggdG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhIGNoZWVzZSwgc3BpY3kgSXRhbGlhbiBzYXVzYWdlLCByZWQgb25pb24sIGFuZCBmcmVzaCBiYXNpbCBsZWF2ZXMuXCJcbiAgKTtcbiAgYWRkTWVudUl0ZW0oXG4gICAgXCJQYXN0YSBBbWF0cmljaWFuYVwiLFxuICAgIEFtYXRyaWNpYW5hLFxuICAgIFwiV2Ugc3RhcnQgd2l0aCBhbCBkZW50ZSBwYXN0YSwgY29va2VkIHRvIHBlcmZlY3Rpb24sIGFuZCB0b3NzIGl0IHdpdGggYSBmbGF2b3JmdWwgc2F1Y2UgbWFkZSB3aXRoIFNhbiBNYXJ6YW5vIHRvbWF0b2VzLCBzbW9reSBwYW5jZXR0YSwgYW5kIHNhdXTDqWVkIG9uaW9ucy5cIlxuICApO1xuICBhZGRNZW51SXRlbShcbiAgICBcIkJyZWFkc3RpY2tzXCIsXG4gICAgQnJlYWRzdGlja3MsXG4gICAgXCJNYWRlIHdpdGggdGhlIGZpbmVzdCBpbmdyZWRpZW50cywgb3VyIGJyZWFkc3RpY2tzIGFyZSBiYWtlZCB0byBwZXJmZWN0aW9uLCByZXN1bHRpbmcgaW4gYSBjcmlzcHkgYW5kIGdvbGRlbiBleHRlcmlvciB3aXRoIGEgd2FybSwgZmx1ZmZ5IGludGVyaW9yLiBcIlxuICApO1xuICByZXR1cm4gbWVudVNlY3Rpb247XG59O1xuXG5mdW5jdGlvbiBhZGRNZW51SXRlbSh0aXRsZSwgaW1hZ2UsIGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IGl0ZW0gPSB0aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgXCItXCIpO1xuICBjb25zdCBpdGVtRWxlbWVudHMgPSB7fTtcbiAgY29uc3QgaXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKGl0ZW0pO1xuICBpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuXG4gIGNvbnN0IGZvb2RJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBmb29kSW1hZ2UuY2xhc3NMaXN0LmFkZChcImZvb2QtaW1hZ2VcIik7XG4gIGZvb2RJbWFnZS5zcmMgPSBpbWFnZTtcbiAgaXRlbUVsZW1lbnQuYXBwZW5kKGZvb2RJbWFnZSk7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHQuY2xhc3NMaXN0LmFkZChcInRleHRib3hcIik7XG4gIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS10aXRsZVwiKTtcbiAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcIml0ZW0tZGVzY3JpcHRpb25cIik7XG4gIGFib3V0LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIHRleHQuYXBwZW5kKGl0ZW1UaXRsZSk7XG4gIHRleHQuYXBwZW5kKGFib3V0KTtcbiAgaXRlbUVsZW1lbnQuYXBwZW5kKHRleHQpO1xuXG4gIGl0ZW1FbGVtZW50c1tpdGVtXSA9IGl0ZW1FbGVtZW50O1xuICBtZW51U2VjdGlvbi5hcHBlbmQoaXRlbUVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn1cblxuZXhwb3J0IHsgbG9hZE1lbnUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==