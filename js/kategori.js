fetch("https://drinkssite-a008.restdb.io/rest/drinks", {
  method: "get",
  headers: {
    "x-apikey": "63e9f4e4478852088da6810f",
  },
})
  .then((e) => e.json())
  .then(addCategory);

function addCategory(data) {
  console.log(data);
}
