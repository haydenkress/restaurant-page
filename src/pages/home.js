import "../styles/home.css";

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

export { loadHome };
