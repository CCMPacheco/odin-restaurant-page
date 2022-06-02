import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function createHeader() {
  const header = document.createElement("header");
  const restaurantName = document.createElement("h1");
  restaurantName.textContent = `The Corner`;

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const homeIl = document.createElement("il");
  const menuIl = document.createElement("il");
  const contactIl = document.createElement("il");

  const homeLink = document.createElement("a");
  homeLink.textContent = `Home`;
  homeLink.setAttribute(`[data-link]`);
  homeLink.href = `#`;
  homeLink.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveLink(homeLink);
    loadHome();
  });

  const menuLink = document.createElement("a");
  menuLink.textContent = `Menu`;
  menuLink.setAttribute(`[data-link]`);
  menuLink.href = `#`;
  menuLink.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveLink(menuLink);
    loadMenu();
  });

  const contactLink = document.createElement("a");
  contactLink.textContent = `Contact`;
  contactLink.setAttribute(`[data-link]`);
  contactLink.href = `#`;
  contactLink.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveLink(contactLink);
    loadContact();
  });

  header.appendChild(restaurantName);
  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(homeIl);
  ul.appendChild(menuIl);
  ul.appendChild(contactIl);
  homeIl.appendChild(homeLink);
  menuIl.appendChild(menuLink);
  contactIl.appendChild(contactLink);

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

  content.appendChild(createHeader);
  content.appendChild(createMain);
  content.appendChild(createFooter);

  setActiveLink(document.querySelector("[data-link]"));
  loadHome();
}

initialize();
