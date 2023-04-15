import "../styles/header.css";

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

export { createHeader };
