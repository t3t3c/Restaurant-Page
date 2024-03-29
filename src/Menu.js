function loadMenu() {
  const content = document.querySelector("#content");

  function createDish(name, description, imageSource) {
    const newDish = document.createElement("div");
    newDish.className = "dish";

    const dishName = document.createElement("p");
    dishName.innerText = name;

    const dishDescription = document.createElement("p");
    dishDescription.innerText = description;

    const dishImage = document.createElement("img");
    dishImage.src = imageSource;

    newDish.appendChild(dishName);
    newDish.appendChild(dishImage);
    newDish.appendChild(dishDescription);

    return newDish;
  }

  const noodles = createDish(
    "Hibachi Noodles",
    "Cheap and Tasty!",
    "https://bakeitwithlove.com/wp-content/uploads/2020/01/HIbachi-Noodles-lg-sq.jpg"
  );
  content.appendChild(noodles);

  const rice = createDish(
    "Panda rice",
    "Big portion for Pandas out there!",
    "https://www.advantour.com/img/china/food/scallops.jpg"
  );
  content.appendChild(rice);
}

export { loadMenu };
