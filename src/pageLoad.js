import { homeText } from "./text.js";

function pageLoad() {
  const header = document.querySelector("header");
  const headerDiv = document.createElement("div");
  const headline = document.createElement("h2");
  header.prepend(headline);

  const divContent = document.getElementById("content");

  const divOne = document.createElement("div");

  headline.textContent = "Fancy Lads";
  divOne.textContent = homeText;

  divContent.appendChild(divOne);
}
export { pageLoad };
