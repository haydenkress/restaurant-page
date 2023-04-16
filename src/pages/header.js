import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";
import { createFooter } from "./footer";
import "../styles/header.css";

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
    loadHome();
  });

  menu.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menu);
    loadMenu();
  });

  about.addEventListener("click", function (e) {
    if (e.target.classList.contains("active")) return;
    setActiveButton(about);
    loadAbout();
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
  createFooter();

  setActiveButton(document.querySelector(".home-btn"));

  loadHome();
}

export { initializeWebsite };
