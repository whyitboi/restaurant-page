function displayAbout() {
  const divContent = document.getElementById("content");
  const aboutDiv = document.createElement("div");

  aboutDiv.textContent = "This is about";

  divContent.replaceChildren(aboutDiv);
}

export { displayAbout };
