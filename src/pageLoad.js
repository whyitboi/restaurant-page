import { dummyTextOne } from "./text.js";

function pageLoad() {
  const header = document.querySelector("header");
  const headerDiv = document.createElement("div");
  const headline = document.createElement("h2");
  header.prepend(headline);

  const divContent = document.getElementById("content");

  const divOne = document.createElement("div");

  headline.textContent = "Fancy Lads";
  divOne.textContent = dummyTextOne;

  divContent.appendChild(divOne);
}
export { pageLoad };

//Photo Credits

// Photo by <a href="https://unsplash.com/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jay Wennington</a> on <a href="https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
