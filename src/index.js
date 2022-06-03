import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import "./styles.css";

function createHeader() {
  const header = document.createElement("header");
  const restaurantName = document.createElement("h1");
  restaurantName.textContent = `The Corner`;

  const nav = document.createElement("nav");

  const homeLink = document.createElement("button");
  homeLink.textContent = `Home`;
  homeLink.dataset.link = ``;
  homeLink.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveLink(homeLink);
    loadHome();
  });

  const menuLink = document.createElement("button");
  menuLink.textContent = `Menu`;
  menuLink.dataset.link = ``;
  menuLink.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveLink(menuLink);
    loadMenu();
  });

  const contactLink = document.createElement("button");
  contactLink.textContent = `Contact`;
  contactLink.dataset.link = ``;
  contactLink.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveLink(contactLink);
    loadContact();
  });

  header.appendChild(restaurantName);
  header.appendChild(nav);
  nav.appendChild(homeLink);
  nav.appendChild(menuLink);
  nav.appendChild(contactLink);

  return header;
}

function setActiveLink(link) {
  const links = document.querySelectorAll("[data-link]");

  links.forEach((link) => {
    if (link !== this) {
      link.classList.remove("active");
    }
  });

  link.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.textContent = `${new Date().getFullYear()} https://github.com/CCMPacheco/`;

  return footer;
}

function initialize() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveLink(document.querySelector("[data-link]"));
  loadHome();
}

initialize();
