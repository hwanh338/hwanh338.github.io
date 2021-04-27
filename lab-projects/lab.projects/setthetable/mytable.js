826617918193&campaignid=936407691&adgroupid=110555501161&utm_campaign=brand_creator&utm_content=bofu_freetrial&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_5ScBkfOcfy68SuLtNsXhLoTp8JoYwFlBuOK6yDpmKnA_eCAXZ3kKsaAptkEALw_wcB

let allItems = [];
let allWineItems = [];

base('my_dinner_table').select({}).eachPage(function page(tableItems, fetchNextPage) {
  tableItems.forEach(function(item) {
    allItems.push(item);
  });

  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }

  setTable(allItems);
});

let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

function setTable(allItems) {

  allItems.forEach(function(item) {
    let name = item.fields.items;
    let imageUrl = item.fields.images[0].url;
    let itemImage = document.createElement('img');
    itemImage.src = imageUrl;
    itemImage.classList.add(item.fields.class_name);
    container.appendChild(itemImage);

    if (item.fields.kind_of_item == "drink") {
      allWineItems.push(item);
    }
  })
}

let button = document.getElementById("button");
button.addEventListener('click', showWine);

function showWine() {
  allWineItems.forEach(function(wineItem) {
    let wine = document.createElement('img');
    wine.src = wineItem.fields.images[0].url;
    wine.classList.add(wineItem.fields.class_name);
    wine.style.display = "block";
    container.appendChild(wine);
  })
}
