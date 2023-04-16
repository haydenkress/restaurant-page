import { createHeader } from "./pages/header";
import { createHome, homeSection, reservationBtn } from "./pages/home";
import { createMenu, menuSection } from "./pages/menu";
import { createAbout, aboutSection } from "./pages/about";
import { createFooter } from "./pages/footer";

function firstLoad() {
  createHeader();
  createHome();
  createFooter();
}
firstLoad();

const home = document.querySelector(".home-btn");
const menu = document.querySelector(".menu-btn");
const about = document.querySelector(".about-btn");

const content = document.querySelector("#content");
const secondChild = content.children[1];
