import ChefOne from "../assets/imgs/chef1.jpeg";
import ChefTwo from "../assets/imgs/chef2.jpg";
import "../styles/about.css";

let aboutSection;

const createAbout = () => {
  aboutSection = document.createElement("div");
  const content = document.querySelector("#content");

  aboutSection.classList.add("about-section");
  content.append(aboutSection);
  addPeople("Louis Nevada", ChefOne, "Head Chef");
  addPeople("Gene Morrison", ChefTwo, "Chief of Culinary Experiences");
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

export { loadAbout };
