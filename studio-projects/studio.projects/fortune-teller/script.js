var fortunes = [
  // add more array items here if you want, make sure you put a comma between each one. You can use HTML here! Just remember that if it contains quotes, they need to be escaped, like this: \"
  "You will win a <em>million</em> dollars! Yay!",
  "You will step on a piece of gum.",
  "You will be attacked by a fluffy bunny.",
  "Uh-oh, You will die",
  "You will meet your soulmate soon",
  "Be prepared for bad news",
  "Don't trust that person",
  "Tomorrow willbe a great day",
  "You will recieve good news today",
  "Your left sock will rip",
  "Your biggest nightmare will come true",
  "A beautiful, smart, and loving person will be coming into your life.",
  "A dubious friend may be an enemy in camouflage.",
  "A faithful friend is a strong defense.",
  "A feather in the hand is better than a bird in the air.",
  "A fresh start will put you on your way.",
  "A friend asks only for your time not your money.",
  "Accept something that you cannot change, and you will feel better.",
  "Adventure can be real happiness.",
  "Advice is like kissing. It costs nothing and is a pleasant thing to do.",
  "Advice, when most needed, is least heeded.",
  "All the effort you are making will ultimately pay off.",
  "All the troubles you have will pass away very quickly.",
  "All will go well with your new project.",
  "All your hard work will soon pay off.",
  "Allow compassion to guide your decisions.",
  "An acquaintance of the past will affect you in the near future.",
  "An agreeable romance might begin to take on the appearance.",
  "An important person will offer you support.",
  "An inch of time is an inch of gold.",
  "Any decision you have to make tomorrow is a good decision.",
  "At the touch of love, everyone becomes a poet.",
  "Be careful or you could fall for some tricks today.",
  "Believe in yourself and others will too.",
  "Believe it can be done.",
  "Better ask twice than lose yourself once.",
  "Bide your time, for success is near.",
  "Carve your name on your heart and not on marble.",
  "Change is happening in your life, so go with the flow!",
  "Competence like yours is underrated.",
  "Don’t let friends impose on you, work calmly and silently.",
  "Don’t let the past and useless detail choke your existence.",
  "Don’t let your limitations overshadow your talents.",
  "Don’t worry; prosperity will knock on your door soon.",
  "Each day, compel yourself to do something you would rather not do.",
  "If a true sense of value is to be yours it must come through service.",
  "If certainty were truth, we would never be wrong.",
  "If you continually give, you will continually have.",
  "If you look in the right places, you can find some good offerings.",
  "If you think you can do a thing or think you can’t do a thing, you’re right.",
  "If you wish to see the best in others, show the best of yourself.",
  "If your desires are not extravagant, they will be granted.",
  "If your desires are not to extravagant they will be granted.",
  "If you’re feeling down, try throwing yourself into your work.",



];

function tellFortune() {

  var randomNumber = Math.floor(Math.random() * fortunes.length);


 document.getElementById("fortune").innerHTML = fortunes[randomNumber];
}




function reset() {

  // how to do i make it reset?

}
