function loadContact() {
  const content = document.querySelector("#content");
  const newDiv = document.createElement("h1");
  newDiv.innerText = "Don't call, just visit!";
  content.appendChild(newDiv);

  const newImage = document.createElement("img");
  newImage.setAttribute(
    "src",
    "https://img-9gag-fun.9cache.com/photo/ang1dxL_700bwp.webp"
  );
  console.log(newImage);
  content.appendChild(newImage);

  const newP = document.createElement("p");
  newP.innerText = "Meet our chef in person!";
  content.appendChild(newP);
}
export { loadContact };
