
var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyT9CcAOZQJY8hmY" }).base(
  "appXWL3ZL7QwRjitf"
);

let allItems = [];

base('table').select({}).eachPage(function page(records, fetchNextPage) {
  records.forEach(function(record) {

    allItems.push(record);
  });

  fetchNextPage();
}, function done(err) {
  if (err) { console.error(err); return; } }

  console.log(allItems);


  setTable(allItems);
});

function setTable(allItems) {
  console.log(allItems);
  let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);
  allItems.forEach(function(item) {
    let name = item.fields.name;
    console.log(name);
    let imageUrl = item.fields.images[0].url;

    if (name === "06") {
      let 06 = document.createElement('img');
      06.src = imageUrl;
      06.classList.add("06");
      container.appendChild(06);
      06.style.width = "50%";
    }

    if (name === "10") {
      let 10 = document.createElement('img');
      10.src = imageUrl;
      10.classList.add("10");
      container.appendChild(10);
      10.style.width = "50%";
    }

    if (name === "11") {
      let 11 = document.createElement('img');
      11.src = imageUrl;
      11.classList.add("11");
      container.appendChild(11);
      11.style.width = "50%";
    }

    if (name === "19") {
      let 19 = document.createElement('img');
      19.src = imageUrl;
      19.classList.add("19");
      container.appendChild(19);
      19.style.width = "50%";
    }

    if (name === "20") {
      let 20 = document.createElement('img');
      20.src = imageUrl;
      20.classList.add("20");
      container.appendChild(20);
      20.style.width = "50%";
    }

    if (name === "25") {
      let 25 = document.createElement('img');
      25.src = imageUrl;
      25.classList.add("25");
      container.appendChild(25);
      25.style.width = "50%";
    }


  })
}
