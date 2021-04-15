
var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyT9CcAOZQJY8hmY" }).base(
  "appXWL3ZL7QwRjitf"
);
let allItems = [];

// inside the () after base put the name of YOUR spreadsheet
base('zoo').select({}).eachPage(function page(tableItems, fetchNextPage) {
  tableItems.forEach(function(item) {
    // push each item received into the allItems array on line 16
    allItems.push(item);
  });


  // if there is another page of items, get those too
  fetchNextPage();
}, function done(err) {
  if (err) { console.error(err); return; }


  console.log(allItems);

addimages();


  // now, call a new function to do stuff with your data and pass the allItems array into it
});
function allImages(allEmotion){
  let container = document.createElement(“div”);
  container.classList.add(“container”);
  document.body.appendChild(container);

  allItems.forEach(function(item) {

    let name = item.fields.items;
    let imageUrl = item.fields.images[0].url;

    if (name === “01”) {
        for (var i=0; i<1; i++) {
          let angry = document.createElement(‘img’);
        angry.src = imageUrl;
        angry.classList.add(“angry”);

    if (i === 0) {
        angry.style.left = “50%“;
        angry.style.top = “50%“;
            }

            container.appendChild(angry);
         }
       }





}
