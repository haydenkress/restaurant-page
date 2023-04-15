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
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about.js");
/* harmony import */ var _pages_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/footer */ "./src/pages/footer.js");






(0,_pages_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
(0,_pages_about__WEBPACK_IMPORTED_MODULE_3__.createAbout)();
(0,_pages_footer__WEBPACK_IMPORTED_MODULE_4__.createFooter)();


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



const aboutSection = document.querySelector("div");

function createAbout() {
  const content = document.querySelector("#content");
  aboutSection.classList.add("about-section");
  content.append(aboutSection);
  addPeople("Louis Nevada", _assets_imgs_chef1_jpeg__WEBPACK_IMPORTED_MODULE_0__, "Head Chef");
  addPeople("Gene Morrison", _assets_imgs_chef2_jpeg__WEBPACK_IMPORTED_MODULE_1__, "Chief of Culinary Experiences");
}

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

  itemElements[item] = itemElement;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQThDO0FBQ0o7QUFDQTtBQUNFO0FBQ0U7O0FBRTlDLDJEQUFZO0FBQ1oseURBQVc7QUFDWCwyREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSb0M7QUFDQTs7QUFFaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0RBQU87QUFDbkMsNkJBQTZCLG9EQUFPO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q087O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkTTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JJOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJNO0FBQ2lCO0FBQ1k7QUFDQztBQUNJOztBQUU5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBVztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9mb290ZXIuY3NzP2E0MWUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9oZWFkZXIuY3NzPzFmZDgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9ob21lLmNzcz85NjU5Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWVudS5jc3M/OGY5MiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tIFwiLi9wYWdlcy9oZWFkZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vcGFnZXMvbWVudVwiO1xuaW1wb3J0IHsgY3JlYXRlQWJvdXQgfSBmcm9tIFwiLi9wYWdlcy9hYm91dFwiO1xuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSBcIi4vcGFnZXMvZm9vdGVyXCI7XG5cbmNyZWF0ZUhlYWRlcigpO1xuY3JlYXRlQWJvdXQoKTtcbmNyZWF0ZUZvb3RlcigpO1xuIiwiaW1wb3J0IENoZWZPbmUgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL2NoZWYxLmpwZWdcIjtcbmltcG9ydCBDaGVmVHdvIGZyb20gXCIuLi9hc3NldHMvaW1ncy9jaGVmMi5qcGVnXCI7XG5cbmNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFib3V0LXNlY3Rpb25cIik7XG4gIGNvbnRlbnQuYXBwZW5kKGFib3V0U2VjdGlvbik7XG4gIGFkZFBlb3BsZShcIkxvdWlzIE5ldmFkYVwiLCBDaGVmT25lLCBcIkhlYWQgQ2hlZlwiKTtcbiAgYWRkUGVvcGxlKFwiR2VuZSBNb3JyaXNvblwiLCBDaGVmVHdvLCBcIkNoaWVmIG9mIEN1bGluYXJ5IEV4cGVyaWVuY2VzXCIpO1xufVxuXG5mdW5jdGlvbiBhZGRQZW9wbGUobmFtZSwgaW1hZ2UsIHBvc2l0aW9uKSB7XG4gIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCBcIi1cIik7XG4gIGNvbnN0IGl0ZW1FbGVtZW50cyA9IHt9O1xuICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQobG93ZXJDYXNlTmFtZSk7XG4gIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwZXJzb25cIik7XG5cbiAgY29uc3QgcGVyc29uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgcGVyc29uSW1hZ2UuY2xhc3NMaXN0LmFkZChcInBlcnNvbi1pbWFnZVwiKTtcbiAgcGVyc29uSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gIGl0ZW1FbGVtZW50LmFwcGVuZChwZXJzb25JbWFnZSk7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHQuY2xhc3NMaXN0LmFkZChcInBlcnNvbi1zZWN0aW9uXCIpO1xuICBjb25zdCBwZXJzb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGVyc29uTmFtZS5jbGFzc0xpc3QuYWRkKFwicGVyc29uLW5hbWVcIik7XG4gIHBlcnNvbk5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBjb25zdCBQZXJzb25Qb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFBlcnNvblBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoXCJwZXJzb24tcG9zaXRpb25cIik7XG4gIFBlcnNvblBvc2l0aW9uLnRleHRDb250ZW50ID0gcG9zaXRpb247XG4gIHRleHQuYXBwZW5kKHBlcnNvbk5hbWUpO1xuICB0ZXh0LmFwcGVuZChQZXJzb25Qb3NpdGlvbik7XG4gIGl0ZW1FbGVtZW50LmFwcGVuZCh0ZXh0KTtcblxuICBpdGVtRWxlbWVudHNbaXRlbV0gPSBpdGVtRWxlbWVudDtcbiAgYWJvdXRTZWN0aW9uLmFwcGVuZChpdGVtRWxlbWVudCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUFib3V0IH07XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvZm9vdGVyLmNzc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBcIkhheWRlbiBLcmVzc1wiO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgMjAyMiDCqSBgO1xuXG4gIGZvb3Rlci5hcHBlbmQoY29weXJpZ2h0KTtcbiAgZm9vdGVyLmFwcGVuZChuYW1lKTtcbiAgY29udGVudC5hcHBlbmQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRm9vdGVyIH07XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvaGVhZGVyLmNzc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2dvLnRleHRDb250ZW50ID0gXCJMYSBUcmF0dG9yaWFcIjtcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcblxuICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFicy5jbGFzc0xpc3QuYWRkKFwidGFic1wiKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGFib3V0LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICBjb25zdCBpdGVtcyA9IFtob21lLCBtZW51LCBhYm91dF07XG5cbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIHRhYnMuYXBwZW5kKGl0ZW0pO1xuICB9KTtcblxuICBoZWFkZXIuYXBwZW5kKGxvZ28pO1xuICBoZWFkZXIuYXBwZW5kKHRhYnMpO1xuICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVIZWFkZXIgfTtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9ob21lLmNzc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkJyaW5nIEl0YWx5IHRvIFlvdXIgVGFibGVcIjtcbiAgaGVyby5hcHBlbmQoaGVhZGluZyk7XG4gIGNvbnRlbnQuYXBwZW5kKGhlcm8pO1xuXG4gIGNvbnN0IHJlc2VydmF0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVzZXJ2YXRpb25CdG4uY2xhc3NMaXN0LmFkZChcInJlc2VydmF0aW9uXCIpO1xuICByZXNlcnZhdGlvbkJ0bi50ZXh0Q29udGVudCA9IFwiQm9vayBhIFJlc2VydmF0aW9uXCI7XG4gIGhlcm8uYXBwZW5kKHJlc2VydmF0aW9uQnRuKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSG9tZSB9O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL21lbnUuY3NzXCI7XG5pbXBvcnQgUGVubmUgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL3Blbm5lLmpwZ1wiO1xuaW1wb3J0IEFtYXRyaWNpYW5hIGZyb20gXCIuLi9hc3NldHMvaW1ncy9hbWF0cmljaWFuYS5qcGdcIjtcbmltcG9ydCBCcmVhZHN0aWNrcyBmcm9tIFwiLi4vYXNzZXRzL2ltZ3MvYnJlYWRzdGlja3MuanBlZ1wiO1xuaW1wb3J0IFdvb2RPdmVuUGl6emEgZnJvbSBcIi4uL2Fzc2V0cy9pbWdzL3dvb2RvdmVuLXBpenphLmpwZ1wiO1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgY29udGVudC5hcHBlbmQobWVudSk7XG4gIGFkZE1lbnVJdGVtKFxuICAgIFwiUGVubmUgQXJyYWJpYXRhXCIsXG4gICAgUGVubmUsXG4gICAgXCJPdXIgdmVyc2lvbiBvZiB0aGlzIGNsYXNzaWMgZGlzaCBiZWdpbnMgd2l0aCBhbCBkZW50ZSBwZW5uZSBwYXN0YSB0aGVuIHRvc3NlZCB3aXRoIGEgZGVsaWNpb3VzIHNhdWNlIG1hZGUgZnJvbSBTYW4gTWFyemFubyB0b21hdG9lcywgZ2FybGljLCBhbmQgcmVkIHBlcHBlciBmbGFrZXMgZm9yIGEgc3BpY3kga2ljay5cIlxuICApO1xuICBhZGRNZW51SXRlbShcbiAgICBcIldvb2Qgb3ZlbiBQaXp6YVwiLFxuICAgIFdvb2RPdmVuUGl6emEsXG4gICAgXCJPdXIgcGl6emEgc3RhcnRzIHdpdGggYSBoYW5kLXN0cmV0Y2hlZCBkb3VnaCB0aGF0J3MgdG9wcGVkIHdpdGggYSByaWNoIHRvbWF0byBzYXVjZSwgbW96emFyZWxsYSBjaGVlc2UsIHNwaWN5IEl0YWxpYW4gc2F1c2FnZSwgcmVkIG9uaW9uLCBhbmQgZnJlc2ggYmFzaWwgbGVhdmVzLlwiXG4gICk7XG4gIGFkZE1lbnVJdGVtKFxuICAgIFwiUGFzdGEgQW1hdHJpY2lhbmFcIixcbiAgICBBbWF0cmljaWFuYSxcbiAgICBcIldlIHN0YXJ0IHdpdGggYWwgZGVudGUgcGFzdGEsIGNvb2tlZCB0byBwZXJmZWN0aW9uLCBhbmQgdG9zcyBpdCB3aXRoIGEgZmxhdm9yZnVsIHNhdWNlIG1hZGUgd2l0aCBTYW4gTWFyemFubyB0b21hdG9lcywgc21va3kgcGFuY2V0dGEsIGFuZCBzYXV0w6llZCBvbmlvbnMuXCJcbiAgKTtcbiAgYWRkTWVudUl0ZW0oXG4gICAgXCJCcmVhZHN0aWNrc1wiLFxuICAgIEJyZWFkc3RpY2tzLFxuICAgIFwiTWFkZSB3aXRoIHRoZSBmaW5lc3QgaW5ncmVkaWVudHMsIG91ciBicmVhZHN0aWNrcyBhcmUgYmFrZWQgdG8gcGVyZmVjdGlvbiwgcmVzdWx0aW5nIGluIGEgY3Jpc3B5IGFuZCBnb2xkZW4gZXh0ZXJpb3Igd2l0aCBhIHdhcm0sIGZsdWZmeSBpbnRlcmlvci4gXCJcbiAgKTtcbn1cblxuZnVuY3Rpb24gYWRkTWVudUl0ZW0odGl0bGUsIGltYWdlLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBpdGVtID0gdGl0bGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKTtcbiAgY29uc3QgaXRlbUVsZW1lbnRzID0ge307XG4gIGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChpdGVtKTtcbiAgaXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICBjb25zdCBmb29kSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgZm9vZEltYWdlLmNsYXNzTGlzdC5hZGQoXCJmb29kLWltYWdlXCIpO1xuICBmb29kSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gIGl0ZW1FbGVtZW50LmFwcGVuZChmb29kSW1hZ2UpO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0Ym94XCIpO1xuICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpdGVtVGl0bGUuY2xhc3NMaXN0LmFkZChcIml0ZW0tdGl0bGVcIik7XG4gIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJpdGVtLWRlc2NyaXB0aW9uXCIpO1xuICBhYm91dC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICB0ZXh0LmFwcGVuZChpdGVtVGl0bGUpO1xuICB0ZXh0LmFwcGVuZChhYm91dCk7XG4gIGl0ZW1FbGVtZW50LmFwcGVuZCh0ZXh0KTtcblxuICBpdGVtRWxlbWVudHNbaXRlbV0gPSBpdGVtRWxlbWVudDtcbiAgbWVudS5hcHBlbmQoaXRlbUVsZW1lbnQpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVNZW51IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=