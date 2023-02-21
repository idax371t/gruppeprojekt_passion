const urlParams = new URLSearchParams(window.location.search);
const drinkname = urlParams.get("drinkname");

fetch(
  "https://drinkssite-a008.restdb.io/rest/drinks?q={%22name%22:%20%22" +
    drinkname +
    "%22}",
  {
    method: "get",
    headers: {
      "x-apikey": "63e9f4e4478852088da6810f",
    },
  }
)
  .then((e) => e.json())
  .then(showContent);

function showContent(product) {
  console.log(product);
  document.querySelector("h4").textContent = product[0].name;
  document.querySelector(".recipe_content").textContent = product[0].recipe;
  document.querySelector(".recipe_content").textContent = product[0].recipe;

  const imagePath = "img/" + drinkname + ".svg";
  const imagePath2 = imagePath.replace("ñ", "n");
  const imagePathNoSpace = imagePath2.replace(/ +/g, "_");

  document.querySelector(".drink img").src = imagePathNoSpace;

  const ingredients = product[0].ingredients;
  const comma = ",";
  const ingredient = ingredients.split(comma);

  ingredient.forEach(createIngredient);

  document.querySelector("title").textContent = drinkname;
}

function createIngredient(ingredient) {
  const ingredientTemplate = document.querySelector(
    "#ingredientTemplate"
  ).content;
  const ingredientCopy = ingredientTemplate.cloneNode(true);
  ingredientCopy.querySelector("p").textContent = "- " + ingredient;

  document.querySelector(".ingredients_content").appendChild(ingredientCopy);
}
