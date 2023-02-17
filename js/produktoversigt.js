fetch(
  "https://drinkssite-a008.restdb.io/rest/drinks?q={%22category%22:%20%22sour%22}",
  {
    method: "get",
    headers: {
      "x-apikey": "63e9f4e4478852088da6810f",
    },
  }
)
  .then((e) => e.json())
  .then(showDrinks);

function showDrinks(drinks) {
  console.log(drinks);
  drinks.forEach(showDrinks);
}

function showDrinks(drink) {
  const template = document.querySelector("#drinks_template").content;

  const copy = template.cloneNode(true);

  document.querySelector(".content").appendChild(copy);
}
