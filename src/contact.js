function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact-container");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = `📞 - 381 555 5555`;

  const address = document.createElement("p");
  address.textContent = `🏠 - Intersection Laprida and Mendoza`;

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = `../src/assets/map.png`;
  restaurantLocation.alt = `location on map`;

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact;
}

function loadContact() {
  const main = document.querySelector("main");
  main.textContent = ``;
  main.appendChild(createContact());
}

export default loadContact;
