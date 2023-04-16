import "../styles/footer.css";

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

export { createFooter };
