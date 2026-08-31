function pageLoad() {
  const divContent = document.getElementById("content");
  const headline = document.createElement("h2");
  const divOne = document.createElement("div");
  const divTwo = document.createElement("div");
  const divThree = document.createElement("div");

  headline.textContent = "Chop n Die";
  divOne.textContent = "Div 1";
  divTwo.textContent = "Div 2";
  divThree.textContent = "Div 3";

  divContent.append(headline, divOne, divTwo, divThree);
}
export { pageLoad };
