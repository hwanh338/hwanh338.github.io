// FOLLOW THE COMMENTS STEP BY STEP
// log in to you your Airtable account
// make sure you have a base set up with at least one table with data inside it
// go to Account settings
// click the generate API key button
// copy and paste it into line 12 below
// then go to this link https://airtable.com/api?utm_source=google&utm_medium=cpc&utm_extra5=kwd-826617918193&utm_extra2=936407691&utm_extra10=110555501161&creative=465926015426&device=c&cx=us&targetid=kwd-826617918193&campaignid=936407691&adgroupid=110555501161&utm_campaign=brand_creator&utm_content=bofu_freetrial&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_5ScBkfOcfy68SuLtNsXhLoTp8JoYwFlBuOK6yDpmKnA_eCAXZ3kKsaAptkEALw_wcB
// select your base
// copy and paste the base ID into line 13 below
var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyT9CcAOZQJY8hmY" }).base(
  "app2tU8qIEk65SwiK"
);

let allItems = [];
let allFoodItems = [];

base('airtable').select({}).eachPage(function page(tableItems, fetchNextPage) {
  tableItems.forEach(function(record) {
    allItems.push(record);
  });

  // if there is another page of items, get those too
  fetchNextPage();


}, function done(err) {
  if (err) { console.error(err); return; }
  // all items received!!
  // console log the allItems array, you should see all of your data in there now

  // call a new function to do stuff with your data and pass the allItems array to it!
  setTable(allItems);
});

let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

function setTable(allItems) {
allItems.forEach(function(item) {

  let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);
  allItems.forEach(function(item) {
    let name = item.fields.name;
    console.log(name);
    let imageUrl = item.fields.images[0].url;

    if (name === "cheese") {
      let cheese = document.createElement('img');
      cheese.src = imageUrl;
      cheese.classList.add("cheese");
      container.appendChild(cheese);
      cheese.style.width = "30%";
    }


    if (name === "plate") {
      let plate= document.createElement('img');
      plate.src = imageUrl;
      plate.classList.add("plate");
      container.appendChild(plate);
      plate.style.width = "60%";
    }

    if (name === "glass") {
      let glass = document.createElement('img');
      glass.src = imageUrl;
      glass.classList.add("glass");
      container.appendChild(glass);
      glass.style.width = "25%";
    }

    if (name === "basket") {
      let basket = document.createElement('img');
      basket.src = imageUrl;
      basket.classList.add("basket");
      container.appendChild(basket);
      basket.style.width = "20%";
    }

    if (name === "fruit") {
      let coffee = document.createElement('img');
      fruit.src = imageUrl;
      fruit.classList.add("fruit");
      container.appendChild(fruit);
      fruit.style.width = "10%";
    }

    if (name === "toast") {
      let toast = document.createElement('img');
      toast.src = imageUrl;
      toast.classList.add("toast");
      container.appendChild(toast);
      toast.style.width = "25%";
    }

    if (name === "blanket") {
      let blanket = document.createElement('img');
      blanket.src = imageUrl;
      blanket.classList.add("blanket");
      container.appendChild(blanket);
    }


  })
}

if (item.fields.type === "stuff") {
  allFoodItems.push(item);
}

let showFoodButton = document.getElementById("show-stuff");
showFoodButton.addEventListener('click', showAllTheStuff);

function showAllTheStuff() {
  allFoodItems.forEach(function(stuffItem) {
    let stuff = document.createElement('img');
    stuff.src = stuffItem.fields.images[0].url;
    stuff.classList.add(stuffItem.fields.class_name);
    stuff.style.display = "block";
    container.appendChild(stuff);
  })
}
