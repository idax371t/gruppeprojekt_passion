const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch(
  "https://drinkssite-a008.restdb.io/rest/drinks?q={%22category%22:%20%22" +
    category +
    "%22}",
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
  console.log("drinks");
  drinks.forEach(showDrink);
  const headline = (document.querySelector("h1").textContent =
    category + " DRINKS");
  const capHeadline = headline.toUpperCase();

  document.querySelector("h1").textContent = capHeadline;
}

function showDrink(drink) {
  const template = document.querySelector("#drinks_template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = drink.name;

  const tags = drink.tags;
  const comma = ",";
  const splitTags = tags.split(comma);

  const tagContainer = copy.querySelector(".tag_container");

  splitTags.forEach(createTag);

  document.querySelector(".content").appendChild(copy);

  function createTag(tag) {
    console.log("createTag: " + tag);
    const tagTemplate = document.querySelector("#tag_template").content;
    const tagCopy = tagTemplate.cloneNode(true);
    tagCopy.querySelector("p").textContent = "#" + tag;
    tagContainer.appendChild(tagCopy);
  }
}
