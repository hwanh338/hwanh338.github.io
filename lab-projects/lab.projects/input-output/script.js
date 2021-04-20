console.log(my page is working);

function putBubbleAllOverPage() {
  let bubble = document.querySelectorAll(".bubble");

  bubbles.forEach(function(bubble){
    console.log("bubble");
    let randomHorizontal=Math.floor(Math.random() * window.innerWidth);
    let randomVertical=Math.floor(Math.random() * window.innerHeight);

    bubble.style.top=randomVertical + "px";
    bubble.style.left = randomHorizontal + "px";
  })
}

document.addEventListener('keydown', addBubble);

fuction addBubble(event) {

  if (event.key === "b") {
    let bubbleAdder = document.createElement("div");
    bubbleAdder.classList.add("bubble")
    console.log(bubbleAdder);
    document.body.appendChild(bubbleAdder);
    putBubblesAllOverPage();
  } else {
    console.log("user pressed some key i dont care about")
  }


}





putBubblesAllOverPage();
