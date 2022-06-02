function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("grid-container");

  for (let i = 0; i < 8; i++) {
    menu.appendChild(createCard());
  }

  return menu;
}

function createCard() {
  const card = document.createElement("div");
  card.classList.add("card");

  const foodImage = document.createElement("img");
  foodImage.src = `../src/assets/pizza.png`;
  foodImage.alt = `pizza`;

  const foodTitle = document.createElement("h3");
  foodTitle.textContent = `Pizzadini`;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = `Tomato sauce, Mozarella, Garlic, Ham, Olives, Oregano, Tomato`;

  card.appendChild(foodImage);
  card.appendChild(foodTitle);
  card.appendChild(foodDescription);

  return card;
}

function loadMenu() {
  const main = document.querySelector("main");
  main.textContent = ``;
  main.appendChild(createMenu());
}

export default loadMenu;
