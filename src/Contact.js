function loadContact() {
  const content = document.querySelector("#content");
  const newDiv = document.createElement("h1");
  newDiv.innerText = "Don't call, just visit!";
  content.appendChild(newDiv);

  const newImage = document.createElement("img");
  newImage.setAttribute(
    "src",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnationaltoday.com%2Fnational-personal-chef-day%2F&psig=AOvVaw0D32wMq-T9j-sB-0qUcZXm&ust=1666442475417000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOjV8o-s8foCFQAAAAAdAAAAABAE"
  );
  console.log(newImage);
  content.appendChild(newImage);

  const newP = document.createElement("p");
  newP.innerText = "Meet our chef in person!";
  content.appendChild(newP);
}
export { loadContact };
