import "../styles/home.css";

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

export { createHome };
