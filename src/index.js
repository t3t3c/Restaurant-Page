import { loadHome } from "./HomePage.js";
import { loadMenu } from "./Menu.js";
import { loadContact } from "./Contact.js";

function clearContent() {
  const content = document.querySelector("#content");
  console.log(content);
  content.innerText = "";
}

const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {
  clearContent();
  loadContact();
});

const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  clearContent();
  loadMenu();
});

const home = document.querySelector(".home");
home.addEventListener("click", () => {
  clearContent();
  loadHome();
});

loadHome();
