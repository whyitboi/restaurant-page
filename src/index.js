import "./style.css";
import { pageLoad } from "./pageLoad.js";
import { displayHome } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayAbout } from "./about.js";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
    switch (button.id) {
      case "home":
        displayHome();
        break;
      case "about":
        displayAbout();
        break;
      case "menu":
        displayMenu();
        break;
      default:
        break;
    }
  });
});

pageLoad();
