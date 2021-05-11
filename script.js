const section = document.querySelector("section");
function makeBubble() {
  let randomSize = Math.floor(Math.random() * 100 + 50);
  let makeDiv = document.createElement("div");
  section.appendChild(makeDiv);
  makeDiv.style.width = randomSize + "px";
  makeDiv.style.height = randomSize + "px";
  makeDiv.style.left = Math.floor(Math.random() * section.clientWidth) + "px";
  setTimeout(function () {
    makeDiv.style.display = "none";
  }, 1500);
}
setInterval(makeBubble, 100);
