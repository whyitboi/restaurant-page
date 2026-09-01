import { dummyTextOne } from "./text.js";

function displayHome() {
  const divContent = document.getElementById("content");
  const homeDiv = document.createElement("div");

  homeDiv.textContent = dummyTextOne;

  divContent.replaceChildren(homeDiv);
}

export { displayHome };
