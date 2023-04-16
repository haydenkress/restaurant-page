import "../styles/home.css";

const homeSection = document.createElement("div");
const reservationBtn = document.createElement("button");

const createHome = () => {
  const content = document.querySelector("#content");

  homeSection.classList.add("home-section");
  const heading = document.createElement("div");
  heading.classList.add("heading");
  heading.textContent = "Bring Italy to Your Table";
  homeSection.append(heading);
  content.append(homeSection);

  reservationBtn.classList.add("reservation");
  reservationBtn.textContent = "Book a Reservation";
  homeSection.append(reservationBtn);
};

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export { createHome, homeSection, reservationBtn };
