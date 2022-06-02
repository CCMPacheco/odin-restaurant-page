function createHome() {
  const home = document.createElement("div");
  home.classList.add(".hero-container");

  const hero = document.createElement("img");
  hero.src = `../src/assets/chef.jpg`;
  hero.alt = `Roger, the head chef`;
  hero.classList.add("hero");

  home.appendChild(createParagraph("Best pizza in Tucuman"));
  home.appendChild(createParagraph("Made with passion since 1950"));
  home.appendChild(hero);
  home.appendChild(createParagraph("Order online or visit us!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.querySelector("main");
  main.textContent = ``;
  main.appendChild(createHome());
}

export default loadHome;
