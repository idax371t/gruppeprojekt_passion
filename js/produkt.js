const urlParams = new URLSearchParams(window.location.search);
const drinkname = urlParams.get("drinkname");

fetch("https://drinkssite-a008.restdb.io/rest/drinks?q={%22name%22:%20%22" + drinkname + "%22}", {
  method: "get",
  headers: {
    "x-apikey": "63e9f4e4478852088da6810f",
  },
})
  .then((e) => e.json())
  .then(showContent);

function showContent(product) {
  console.log(product);
  document.querySelector("h1").textContent = product.name;
}

/*  const tags = drink.tags;
    const comma = ",";
    const splitTags = tags.split(comma);
  
  
    const tagContainer = copy.querySelector(".tag_container");
  
    splitTags.forEach(createTag); */

/* function createTag(tag) {
      const tagTemplate = document.querySelector("#tag_template").content;
      const tagCopy = tagTemplate.cloneNode(true);
      tagCopy.querySelector("p").textContent = "#" + tag;
      tagContainer.appendChild(tagCopy);
    } */
