function displayMenu() {
  const divContent = document.getElementById("content");
  const menuDiv = document.createElement("div");

  menuDiv.textContent = "This be the menu";

  divContent.replaceChildren(menuDiv);
}
export { displayMenu };
