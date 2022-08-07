"use strict";

// const DOMcontent = (() => {
//   const content = document.querySelector("#content");
//   const addElement = (element) => {
//     content.appendChild(document.createElement("div"));
//   };
// })();

function loadHome() {
  const content = document.querySelector("#content");
  const newDiv = document.createElement("h1");
  newDiv.innerText = "This is the best restaurant!";
  content.appendChild(newDiv);

  const newImage = document.createElement("img");
  newImage.setAttribute("src", "../src/img/logo.png");
  console.log(newImage);
  content.appendChild(newImage);

  const newParagraph = document.createElement("p");
  newParagraph.innerText = "Woah what an amazing taste!";
  content.appendChild(newParagraph);
}

export { loadHome };
