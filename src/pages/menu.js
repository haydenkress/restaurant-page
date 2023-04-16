import "../styles/menu.css";
import Penne from "../assets/imgs/penne.jpg";
import Amatriciana from "../assets/imgs/amatriciana.jpg";
import Breadsticks from "../assets/imgs/breadsticks.jpeg";
import WoodOvenPizza from "../assets/imgs/woodoven-pizza.jpg";

const menuSection = document.createElement("div");

const createMenu = () => {
  const content = document.querySelector("#content");
  menuSection.classList.add("menu");
  content.append(menuSection);
  addMenuItem(
    "Penne Arrabiata",
    Penne,
    "Our version of this classic dish begins with al dente penne pasta then tossed with a delicious sauce made from San Marzano tomatoes, garlic, and red pepper flakes for a spicy kick."
  );
  addMenuItem(
    "Wood oven Pizza",
    WoodOvenPizza,
    "Our pizza starts with a hand-stretched dough that's topped with a rich tomato sauce, mozzarella cheese, spicy Italian sausage, red onion, and fresh basil leaves."
  );
  addMenuItem(
    "Pasta Amatriciana",
    Amatriciana,
    "We start with al dente pasta, cooked to perfection, and toss it with a flavorful sauce made with San Marzano tomatoes, smoky pancetta, and sautéed onions."
  );
  addMenuItem(
    "Breadsticks",
    Breadsticks,
    "Made with the finest ingredients, our breadsticks are baked to perfection, resulting in a crispy and golden exterior with a warm, fluffy interior. "
  );
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

export { createMenu, menuSection };
