
var string = "";
string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
var running = setTimeout(animate, 90);
})();





$(".btn").click(function() {

   var lable = $(".btn").text().trim();

   if(lable == "Hide") {
     $(".btn").text("Show");
     $(".myText").hide();
   }
   else {
     $(".btn").text("Hide");
     $(".myText").show();
   }

  });
